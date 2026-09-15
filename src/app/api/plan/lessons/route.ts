import { prisma } from "@/lib/server/db";
import { badRequest, currentUserId, json, readJson, unauthorized } from "@/lib/server/http";
import { LONG_TX, lessonEntry, loadPlan } from "@/lib/server/plan";
import { addLessons } from "@/lib/server/schemas";
import { buildSchedule, shiftStudyDays } from "@/lib/schedule";

/**
 * Add catalog lessons to the end of the planner. They're scheduled after the last
 * scheduled lesson (never before the learner's today). Lessons already in the planner
 * are ignored.
 */
export async function POST(req: Request) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const parsed = addLessons.safeParse(await readJson(req));
  if (!parsed.success) return badRequest("invalid lessons");

  const settings = await prisma.planSettings.findUnique({ where: { userId } });
  if (!settings) return badRequest("start a planner first");

  await prisma.$transaction(async (tx) => {
    const existing = await tx.planEntry.findMany({
      where: { userId, lessonId: { not: null } },
      select: { lessonId: true, position: true, date: true, skipped: true },
    });
    const have = new Set(existing.map((e) => e.lessonId));
    const toAdd = [...new Set(parsed.data.lessonIds)].filter((id) => !have.has(id));
    if (toAdd.length === 0) return;

    const nextPosition = existing.reduce((max, e) => Math.max(max, e.position ?? -1), -1) + 1;
    const lastDate = existing
      .filter((e) => !e.skipped && e.date)
      .map((e) => e.date!)
      .sort()
      .at(-1);
    const after = lastDate ? shiftStudyDays(lastDate, 1, settings.studyDays) : settings.startDate;
    const start = after > parsed.data.today ? after : parsed.data.today;
    const dates = buildSchedule(toAdd, start, settings.studyDays, settings.perDay);

    await tx.planEntry.createMany({
      data: toAdd.map((id, i) => lessonEntry(userId, id, nextPosition + i, dates.get(id)!)),
    });
  }, LONG_TX);

  return json(await loadPlan(userId));
}
