import type { Prisma } from "@/generated/prisma/client";
import { getLesson, lessonForLegacyDay } from "@/data/lessons";
import { prisma } from "@/lib/server/db";
import { badRequest, currentUserId, json, readJson, unauthorized } from "@/lib/server/http";
import { lessonProgress } from "@/lib/server/schemas";

/**
 * Save progress on one lesson. `lesson` is a lesson id; a day number is still accepted so
 * tabs left open from before the lesson catalog keep saving.
 */
export async function PUT(req: Request, { params }: { params: Promise<{ lesson: string }> }) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();

  const key = (await params).lesson;
  const lesson = /^\d+$/.test(key) ? lessonForLegacyDay(Number(key)) : getLesson(key);
  const body = lessonProgress.safeParse(await readJson(req));
  if (!lesson || !body.success) return badRequest();

  const fields = {
    status: body.data.status,
    reviewed: body.data.reviewed,
    notes: body.data.notes,
    exercises: body.data.exercises as unknown as Prisma.InputJsonValue,
  };
  const writes: Prisma.PrismaPromise<unknown>[] = [
    prisma.lessonProgress.upsert({
      where: { userId_lessonId: { userId, lessonId: lesson.id } },
      create: { userId, lessonId: lesson.id, ...fields },
      update: fields,
    }),
  ];
  // Keep the legacy day table in step for lessons from the 90-day plan (rollback safety).
  if (lesson.legacyDay) {
    writes.push(
      prisma.dayProgress.upsert({
        where: { userId_day: { userId, day: lesson.legacyDay } },
        create: { userId, day: lesson.legacyDay, ...fields },
        update: fields,
      }),
    );
  }
  await prisma.$transaction(writes);
  return json({ ok: true });
}
