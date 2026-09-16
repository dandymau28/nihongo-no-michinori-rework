import type { Prisma } from "@/generated/prisma/client";
import { getLesson, lessonForLegacyDay } from "@/data/lessons";
import { prisma } from "@/lib/server/db";
import { badRequest, currentUserId, json, readJson, unauthorized } from "@/lib/server/http";
import { logEvent } from "@/lib/server/log";
import { progressImport } from "@/lib/server/schemas";
import type { ExerciseResult, ProgressMap, Status } from "@/lib/types";

async function loadProgress(userId: string): Promise<ProgressMap> {
  const rows = await prisma.lessonProgress.findMany({ where: { userId } });
  const progress: ProgressMap = {};
  for (const r of rows) {
    progress[r.lessonId] = {
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

/**
 * Import: replaces all lesson progress. Keys may be lesson ids, or day numbers from files
 * exported before lessons had ids. Unknown keys are ignored.
 */
export async function POST(req: Request) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const parsed = progressImport.safeParse(await readJson(req));
  if (!parsed.success) return badRequest("invalid progress file");

  const rows = new Map<string, Omit<Prisma.LessonProgressCreateManyInput, "lessonId">>();
  for (const [key, p] of Object.entries(parsed.data.progress)) {
    const lesson = /^\d+$/.test(key) ? lessonForLegacyDay(Number(key)) : getLesson(key);
    if (!lesson) continue;
    rows.set(lesson.id, {
      userId,
      status: p.status,
      reviewed: p.reviewed,
      notes: p.notes,
      exercises: p.exercises as unknown as Prisma.InputJsonValue,
    });
  }
  const lessonRows = [...rows].map(([lessonId, r]) => ({ ...r, lessonId }));
  // Keep the legacy day table in step for lessons from the 90-day plan (rollback safety).
  const legacyRows = lessonRows.flatMap(({ lessonId, ...r }) => {
    const day = getLesson(lessonId)?.legacyDay;
    return day ? [{ ...r, day }] : [];
  });

  await prisma.$transaction([
    prisma.lessonProgress.deleteMany({ where: { userId } }),
    prisma.dayProgress.deleteMany({ where: { userId } }),
    prisma.lessonProgress.createMany({ data: lessonRows }),
    prisma.dayProgress.createMany({ data: legacyRows }),
  ]);
  logEvent("progress.import", {
    userId,
    lessons: lessonRows.length,
    skipped: Object.keys(parsed.data.progress).length - lessonRows.length,
  });
  return json({ progress: await loadProgress(userId) });
}

export async function DELETE() {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  await prisma.$transaction([
    prisma.lessonProgress.deleteMany({ where: { userId } }),
    prisma.dayProgress.deleteMany({ where: { userId } }),
  ]);
  logEvent("progress.reset", { userId });
  return json({ ok: true });
}
