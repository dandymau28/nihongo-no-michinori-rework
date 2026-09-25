import { z } from "zod";
import { getKanji } from "@/data/kanji";
import { getLesson } from "@/data/lessons";
import { getPreset } from "@/data/presets";
import { MAX_PER_DAY, isISODate } from "@/lib/schedule";

const isoDate = z.string().refine(isISODate, "expected YYYY-MM-DD");

export const lessonId = z.string().refine((id) => !!getLesson(id), "unknown lesson");

const exerciseResult = z.object({
  setId: z.string().min(1).max(200),
  correct: z.number().int().min(0).max(10_000),
  total: z.number().int().min(0).max(10_000),
  at: z.number(),
  scored: z.boolean().optional(),
});

export const lessonProgress = z.object({
  status: z.enum(["not-yet", "partial", "done"]),
  reviewed: z.boolean(),
  notes: z.string().max(20_000),
  exercises: z.array(exerciseResult).max(300),
});

/** Keys are lesson ids, or day numbers from exports made before lessons had ids. */
export const progressImport = z.object({
  progress: z.record(z.string().min(1).max(100), lessonProgress),
});

const schedule = {
  startDate: isoDate,
  studyDays: z.number().int().min(1).max(127),
  perDay: z.number().int().min(1).max(MAX_PER_DAY),
};

const plannerName = z.string().trim().max(80).nullable().optional();

export const newPlanner = z.object({
  ...schedule,
  name: plannerName,
  source: z.union([
    z.object({ presetId: z.string().refine((id) => !!getPreset(id), "unknown preset") }),
    z.object({ lessonIds: z.array(lessonId).max(1000) }),
  ]),
  /**
   * true = replace the current planner; false = only start one if there is none.
   * Omitted by clients from before this flag, which always replaced.
   */
  replace: z.boolean().optional(),
});

/**
 * Product events from the browser. Deliberately strict: unknown keys are dropped, values
 * are capped, and there is no free-text field — nothing a learner typed can reach the
 * logs through here. `userId` is not accepted; the server takes it from the session.
 */
const eventProps = z.record(
  z.string().max(40),
  z.union([z.string().max(120), z.number(), z.boolean(), z.null()]),
);

export const eventBatch = z.object({
  events: z
    .array(
      z.object({
        // "lesson.completed", "question.answered" — matches the server-side events.
        evt: z.string().max(60).regex(/^[a-z][a-z0-9_]*(\.[a-z][a-z0-9_]*)+$/, "expected name.like_this"),
        eventId: z.string().min(8).max(64),
        at: z.iso.datetime(),
        sessionId: z.string().min(8).max(64),
        anonId: z.string().min(8).max(64),
        feature: z.string().max(40).optional(),
        contentId: z.string().max(100).optional(),
        level: z.enum(["N5", "N4", "N3", "N2", "N1"]).optional(),
        props: eventProps.optional(),
      }),
    )
    .min(1)
    .max(50),
});

export const plannerSettings = z.object({
  ...schedule,
  name: plannerName,
  /** Lay every non-skipped lesson out again, in order, from `startDate`. */
  rebuild: z.boolean().default(false),
});

export const addLessons = z.object({
  lessonIds: z.array(lessonId).min(1).max(1000),
  /** The learner's local date — new lessons are never scheduled before it. */
  today: isoDate,
});

export const reorderBody = z.object({
  /** Every lesson entry in the planner, in the new order. */
  entryIds: z.array(z.string().min(1).max(64)).min(1).max(1000),
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

// --- Kanji flashcard decks -------------------------------------------------

/// Only characters that are actually in the catalog — the study card has nothing to
/// show for anything else, and this keeps arbitrary text out of the deck tables.
const deckKanji = z.string().refine((c) => !!getKanji(c), "unknown kanji");

export const MAX_DECK_CARDS = 200;

export const deckBody = z.object({
  title: z.string().trim().min(1).max(80),
  description: z.string().trim().max(500).nullable().optional(),
  /// In the order the owner arranged them; duplicates are dropped by the route.
  chars: z.array(deckKanji).min(1).max(MAX_DECK_CARDS),
});
