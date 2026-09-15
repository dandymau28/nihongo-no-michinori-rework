import { prisma } from "@/lib/server/db";
import { badRequest, currentUserId, json, readJson, unauthorized } from "@/lib/server/http";
import { doneLessonIds, loadPlan } from "@/lib/server/plan";
import { shiftBody } from "@/lib/server/schemas";
import { shiftStudyDays } from "@/lib/schedule";

/**
 * Move every unfinished, non-skipped entry dated on/after `from` by `by` study
 * days — e.g. push the rest of the plan forward after missing a few days.
 */
export async function POST(req: Request) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const parsed = shiftBody.safeParse(await readJson(req));
  if (!parsed.success) return badRequest();
  const { from, by } = parsed.data;

  const settings = await prisma.planSettings.findUnique({ where: { userId } });
  if (!settings) return badRequest("plan not set up");

  const [rows, done] = await Promise.all([
    prisma.planEntry.findMany({ where: { userId, skipped: false, date: { gte: from } } }),
    doneLessonIds(prisma, userId),
  ]);
  const moves = rows.filter((r) => (r.lessonId != null ? !done.has(r.lessonId) : !r.done));

  if (by !== 0 && moves.length > 0) {
    await prisma.$transaction(
      moves.map((r) =>
        prisma.planEntry.update({
          where: { id: r.id },
          data: { date: shiftStudyDays(r.date!, by, settings.studyDays) },
        }),
      ),
    );
  }
  return json(await loadPlan(userId));
}
