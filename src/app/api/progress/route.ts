import type { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/server/db";
import { badRequest, currentUserId, json, readJson, unauthorized } from "@/lib/server/http";
import { progressImport } from "@/lib/server/schemas";
import { TOTAL_DAYS } from "@/lib/dates";
import type { ExerciseResult, ProgressMap, Status } from "@/lib/types";

async function loadProgress(userId: string): Promise<ProgressMap> {
  const rows = await prisma.dayProgress.findMany({ where: { userId } });
  const progress: ProgressMap = {};
  for (const r of rows) {
    progress[r.day] = {
      status: r.status as Status,
      reviewed: r.reviewed,
      notes: r.notes,
      exercises: r.exercises as unknown as ExerciseResult[],
    };
  }
  return progress;
}

export async function GET() {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  return json({ progress: await loadProgress(userId) });
}

/** Import: replaces all of the learner's day progress. */
export async function POST(req: Request) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const parsed = progressImport.safeParse(await readJson(req));
  if (!parsed.success) return badRequest("invalid progress file");

  const data = Object.entries(parsed.data.progress)
    .map(([day, p]) => ({ day: Number(day), p }))
    .filter(({ day }) => day >= 1 && day <= TOTAL_DAYS)
    .map(({ day, p }) => ({
      userId,
      day,
      status: p.status,
      reviewed: p.reviewed,
      notes: p.notes,
      exercises: p.exercises as unknown as Prisma.InputJsonValue,
    }));

  await prisma.$transaction([
    prisma.dayProgress.deleteMany({ where: { userId } }),
    prisma.dayProgress.createMany({ data }),
  ]);
  return json({ progress: await loadProgress(userId) });
}

export async function DELETE() {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  await prisma.dayProgress.deleteMany({ where: { userId } });
  return json({ ok: true });
}
