import { z } from "zod";
import { TOTAL_DAYS } from "@/lib/dates";
import { MAX_PER_DAY, isISODate } from "@/lib/schedule";

const isoDate = z.string().refine(isISODate, "expected YYYY-MM-DD");

export const dayNumber = z.coerce.number().int().min(1).max(TOTAL_DAYS);

const exerciseResult = z.object({
  setId: z.string().min(1).max(200),
  correct: z.number().int().min(0).max(10_000),
  total: z.number().int().min(0).max(10_000),
  at: z.number(),
  scored: z.boolean().optional(),
});

export const dayProgress = z.object({
  status: z.enum(["not-yet", "partial", "done"]),
  reviewed: z.boolean(),
  notes: z.string().max(20_000),
  exercises: z.array(exerciseResult).max(300),
});

export const progressImport = z.object({
  progress: z.record(z.string().regex(/^\d+$/), dayProgress),
});

export const planSettings = z.object({
  startDate: isoDate,
  studyDays: z.number().int().min(1).max(127),
  perDay: z.number().int().min(1).max(MAX_PER_DAY),
  /** Re-lay every non-skipped lesson onto the calendar from `startDate`. */
  rebuild: z.boolean().default(false),
});

export const newTask = z.object({
  title: z.string().trim().min(1).max(200),
  note: z.string().max(2000).optional(),
  date: isoDate,
});

export const entryPatch = z.object({
  date: isoDate.nullable().optional(),
  skipped: z.boolean().optional(),
  done: z.boolean().optional(),
  title: z.string().trim().min(1).max(200).optional(),
  note: z.string().max(2000).nullable().optional(),
});

export const shiftBody = z.object({
  from: isoDate,
  by: z.number().int().min(-366).max(366),
});

export const PRACTICE_KEYS = ["conj", "particles", "kanji", "qwords"] as const;

export const practiceBody = z.object({
  data: z.record(z.string(), z.unknown()),
});
