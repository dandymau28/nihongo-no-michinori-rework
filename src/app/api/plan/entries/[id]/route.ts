import { prisma } from "@/lib/server/db";
import {
  badRequest,
  currentUserId,
  json,
  notFound,
  readJson,
  unauthorized,
} from "@/lib/server/http";
import { logEvent } from "@/lib/server/log";
import { LONG_TX, loadPlan, relayUnfinishedLessons, toEntry } from "@/lib/server/plan";
import { entryPatch } from "@/lib/server/schemas";

type Ctx = { params: Promise<{ id: string }> };

/** Move / skip / restore any entry; custom tasks can also be renamed and ticked off. */
export async function PATCH(req: Request, { params }: Ctx) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const { id } = await params;
  const parsed = entryPatch.safeParse(await readJson(req));
  if (!parsed.success) return badRequest();

  const entry = await prisma.planEntry.findFirst({ where: { id, userId } });
  if (!entry) return notFound();

  const p = parsed.data;
  const isTask = entry.lessonId == null;
  const data: {
    date?: string | null;
    skipped?: boolean;
    done?: boolean;
    title?: string;
    note?: string | null;
  } = {};
  if (p.date !== undefined) data.date = p.date;
  if (p.skipped !== undefined) data.skipped = p.skipped;
  if (isTask) {
    if (p.done !== undefined) data.done = p.done;
    if (p.title !== undefined) data.title = p.title;
    if (p.note !== undefined) data.note = p.note;
  }

  const nextDate = data.date === undefined ? entry.date : data.date;
  const nextSkipped = data.skipped ?? entry.skipped;
  if (nextDate == null && (isTask || !nextSkipped)) return badRequest("date required");

  const row = await prisma.planEntry.update({ where: { id }, data });
  logEvent("planner.entry_updated", {
    userId,
    lessonId: entry.lessonId,
    changed: Object.keys(data).join(",") || "nothing",
  });
  return json(toEntry(row));
}

/**
 * Remove a custom task, or take a lesson out of the planner (its progress is kept).
 * Removing a lesson lays the unfinished lessons out again so the order has no gap.
 * Responds with the whole planner.
 */
export async function DELETE(_req: Request, { params }: Ctx) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const { id } = await params;

  const entry = await prisma.planEntry.findFirst({ where: { id, userId } });
  if (!entry) return notFound();

  if (entry.lessonId == null) {
    await prisma.planEntry.delete({ where: { id } });
  } else {
    await prisma.$transaction(async (tx) => {
      await tx.planEntry.delete({ where: { id } });
      await relayUnfinishedLessons(tx, userId);
    }, LONG_TX);
  }
  logEvent("planner.entry_removed", { userId, lessonId: entry.lessonId, task: entry.lessonId == null });
  return json(await loadPlan(userId));
}
