import { prisma } from "@/lib/server/db";
import {
  badRequest,
  currentUserId,
  json,
  notFound,
  readJson,
  unauthorized,
} from "@/lib/server/http";
import { toEntry } from "@/lib/server/plan";
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
  const isTask = entry.materialDay == null;
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
  return json(toEntry(row));
}

/** Delete a custom task. Lessons can only be skipped. */
export async function DELETE(_req: Request, { params }: Ctx) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const { id } = await params;

  const entry = await prisma.planEntry.findFirst({ where: { id, userId } });
  if (!entry) return notFound();
  if (entry.materialDay != null) return badRequest("lessons can be skipped, not deleted");

  await prisma.planEntry.delete({ where: { id } });
  return json({ ok: true });
}
