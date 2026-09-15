import { prisma } from "@/lib/server/db";
import { badRequest, currentUserId, json, readJson, unauthorized } from "@/lib/server/http";
import { LONG_TX, loadPlan, relayUnfinishedLessons } from "@/lib/server/plan";
import { reorderBody } from "@/lib/server/schemas";

/**
 * Save a new lesson order. Dates follow the order: unfinished lessons are laid out again
 * from the earliest date among them; finished and skipped lessons keep their dates.
 */
export async function POST(req: Request) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const parsed = reorderBody.safeParse(await readJson(req));
  if (!parsed.success) return badRequest("invalid order");
  const ids = parsed.data.entryIds;

  const rows = await prisma.planEntry.findMany({
    where: { userId, lessonId: { not: null } },
    select: { id: true, position: true },
  });
  const current = new Map(rows.map((r) => [r.id, r.position]));
  if (ids.length !== current.size || new Set(ids).size !== ids.length || ids.some((id) => !current.has(id))) {
    return badRequest("the order must list every lesson in the planner exactly once");
  }

  await prisma.$transaction(async (tx) => {
    for (const [position, id] of ids.entries()) {
      if (current.get(id) !== position) {
        await tx.planEntry.update({ where: { id }, data: { position } });
      }
    }
    await relayUnfinishedLessons(tx, userId);
  }, LONG_TX);

  return json(await loadPlan(userId));
}
