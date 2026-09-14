import { prisma } from "@/lib/server/db";
import { badRequest, currentUserId, json, readJson, unauthorized } from "@/lib/server/http";
import { toEntry } from "@/lib/server/plan";
import { newTask } from "@/lib/server/schemas";

/** Create a custom task. */
export async function POST(req: Request) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const parsed = newTask.safeParse(await readJson(req));
  if (!parsed.success) return badRequest("invalid task");

  const row = await prisma.planEntry.create({
    data: {
      userId,
      title: parsed.data.title,
      note: parsed.data.note || null,
      date: parsed.data.date,
    },
  });
  return json(toEntry(row), 201);
}
