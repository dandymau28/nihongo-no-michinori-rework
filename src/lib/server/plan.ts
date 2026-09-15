import type { Prisma } from "@/generated/prisma/client";
import { getLesson } from "@/data/lessons";
import type { Plan, PlanEntry } from "@/lib/planTypes";
import { buildSchedule } from "@/lib/schedule";
import { prisma } from "./db";

type Db = typeof prisma | Prisma.TransactionClient;

type EntryRow = {
  id: string;
  lessonId: string | null;
  position: number | null;
  title: string | null;
  note: string | null;
  date: string | null;
  skipped: boolean;
  done: boolean;
};

export function toEntry(r: EntryRow): PlanEntry {
  return {
    id: r.id,
    lessonId: r.lessonId,
    position: r.position,
    title: r.title,
    note: r.note,
    date: r.date,
    skipped: r.skipped,
    done: r.done,
  };
}

export async function loadPlan(userId: string): Promise<Plan> {
  const [settings, rows] = await Promise.all([
    prisma.planSettings.findUnique({ where: { userId } }),
    prisma.planEntry.findMany({
      where: { userId },
      orderBy: [{ date: "asc" }, { position: "asc" }, { createdAt: "asc" }],
    }),
  ]);
  return {
    settings: settings && {
      name: settings.name,
      presetId: settings.presetId,
      startDate: settings.startDate,
      studyDays: settings.studyDays,
      perDay: settings.perDay,
    },
    entries: rows.map(toEntry),
  };
}

/** Lessons the learner has finished. */
export async function doneLessonIds(db: Db, userId: string): Promise<Set<string>> {
  const rows = await db.lessonProgress.findMany({
    where: { userId, status: "done" },
    select: { lessonId: true },
  });
  return new Set(rows.map((r) => r.lessonId));
}

/**
 * Data for a new lesson entry. It also stores the lesson's legacy day number, so the
 * previous release (which only knows day numbers) still works after a rollback.
 */
export function lessonEntry(userId: string, lessonId: string, position: number, date: string | null) {
  return { userId, lessonId, position, date, materialDay: getLesson(lessonId)?.legacyDay ?? null };
}

/**
 * Dates follow the order: lay the unfinished, non-skipped lessons out again in position
 * order, starting from the earliest date among them. Finished and skipped lessons keep
 * their dates; custom tasks are untouched.
 */
export async function relayUnfinishedLessons(db: Db, userId: string): Promise<void> {
  const settings = await db.planSettings.findUnique({ where: { userId } });
  if (!settings) return;

  const rows = await db.planEntry.findMany({
    where: { userId, lessonId: { not: null }, skipped: false },
    orderBy: [{ position: "asc" }, { createdAt: "asc" }],
    select: { id: true, lessonId: true, date: true },
  });
  const done = await doneLessonIds(db, userId);
  const unfinished = rows.filter((r) => !done.has(r.lessonId!));
  if (unfinished.length === 0) return;

  const anchor =
    unfinished
      .map((r) => r.date)
      .filter((d): d is string => d != null)
      .sort()[0] ?? settings.startDate;
  const dates = buildSchedule(
    unfinished.map((r) => r.id),
    anchor,
    settings.studyDays,
    settings.perDay,
  );
  for (const r of unfinished) {
    const date = dates.get(r.id)!;
    if (date !== r.date) await db.planEntry.update({ where: { id: r.id }, data: { date } });
  }
}

/** Interactive transactions here touch up to one row per lesson. */
export const LONG_TX = { timeout: 20_000, maxWait: 10_000 };
