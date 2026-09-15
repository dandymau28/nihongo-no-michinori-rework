import { getPreset, presetLessonIds } from "@/data/presets";
import { prisma } from "@/lib/server/db";
import {
  badRequest,
  currentUserId,
  json,
  notFound,
  readJson,
  unauthorized,
} from "@/lib/server/http";
import { LONG_TX, lessonEntry, loadPlan } from "@/lib/server/plan";
import { newPlanner, plannerSettings } from "@/lib/server/schemas";
import { buildSchedule } from "@/lib/schedule";

export async function GET() {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  return json(await loadPlan(userId));
}

/**
 * Start a planner from a preset or a list of lessons, replacing the current one
 * (its schedule and custom tasks). Lesson progress is kept — it belongs to the lessons.
 */
export async function POST(req: Request) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const parsed = newPlanner.safeParse(await readJson(req));
  if (!parsed.success) return badRequest("invalid planner");

  const { source, startDate, studyDays, perDay } = parsed.data;
  const presetId = "presetId" in source ? source.presetId : null;
  const lessonIds =
    "presetId" in source ? presetLessonIds(getPreset(source.presetId)!) : [...new Set(source.lessonIds)];
  const settings = { name: parsed.data.name?.trim() || null, presetId, startDate, studyDays, perDay };
  const dates = buildSchedule(lessonIds, startDate, studyDays, perDay);

  await prisma.$transaction([
    prisma.planEntry.deleteMany({ where: { userId } }),
    prisma.planSettings.upsert({
      where: { userId },
      create: { userId, ...settings },
      update: settings,
    }),
    prisma.planEntry.createMany({
      data: lessonIds.map((id, i) => lessonEntry(userId, id, i, dates.get(id)!)),
    }),
  ]);
  return json(await loadPlan(userId), 201);
}

/**
 * Update the schedule settings and name. With `rebuild`, every non-skipped lesson is
 * laid out again in the learner's order from the start date.
 */
export async function PUT(req: Request) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const parsed = plannerSettings.safeParse(await readJson(req));
  if (!parsed.success) return badRequest("invalid planner settings");

  const { rebuild, name, ...schedule } = parsed.data;
  const existing = await prisma.planSettings.findUnique({ where: { userId } });
  if (!existing) return notFound();

  await prisma.$transaction(async (tx) => {
    await tx.planSettings.update({
      where: { userId },
      data: { ...schedule, ...(name === undefined ? {} : { name: name?.trim() || null }) },
    });
    if (!rebuild) return;

    const lessons = await tx.planEntry.findMany({
      where: { userId, lessonId: { not: null }, skipped: false },
      orderBy: [{ position: "asc" }, { createdAt: "asc" }],
      select: { id: true, date: true },
    });
    const dates = buildSchedule(
      lessons.map((l) => l.id),
      schedule.startDate,
      schedule.studyDays,
      schedule.perDay,
    );
    for (const l of lessons) {
      const date = dates.get(l.id)!;
      if (date !== l.date) await tx.planEntry.update({ where: { id: l.id }, data: { date } });
    }
  }, LONG_TX);

  return json(await loadPlan(userId));
}
