import type { Bi } from "./i18n";

// ---------------------------------------------------------------------------
// Lessons
// ---------------------------------------------------------------------------

export type JlptLevel = "N5" | "N4" | "N3" | "N2" | "N1";

/** Easiest first. */
export const JLPT_LEVELS: JlptLevel[] = ["N5", "N4", "N3", "N2", "N1"];

export type LessonType =
  | "diagnostic"
  | "grammar"
  | "vocab-kanji"
  | "reading"
  | "listening"
  | "review"
  | "test"
  | "skill";

export type LinkKind =
  | "explainer"
  | "exercise"
  | "reading"
  | "listening"
  | "pdf"
  | "video"
  | "sample"
  | "reference";

export interface ExternalLink {
  label: Bi | string;
  url: string;
  kind: LinkKind;
  /** Marked when the source is known to be offline; shown muted. */
  dead?: boolean;
}

export type Status = "not-yet" | "partial" | "done";

/** A lesson in the catalog (src/data/lessons.ts). */
export interface LessonMeta {
  /** Permanent — learners' progress and planners are stored against it. */
  id: string;
  level: JlptLevel;
  type: LessonType;
  title: Bi;
  titleJa?: string;
  task: Bi;
  durationNote?: Bi;
  /** Points at built-in content in src/content/registry.ts, when authored. */
  contentSlug?: string;
  links: ExternalLink[];
  /** YouTube video IDs to embed (extracted from links). */
  youtube?: string[];
  /** Day in the original 90-day plan — old /day/N links redirect here. */
  legacyDay?: number;
}

// ---------------------------------------------------------------------------
// Progress (mirrors the spreadsheet's Checklist / Score / Review / Notes)
// ---------------------------------------------------------------------------

export interface ExerciseResult {
  setId: string;
  correct: number;
  total: number;
  at: number; // epoch ms
  /** false for practice (streak drills, flashcards, writing) — excluded from the score. */
  scored?: boolean;
}

/** A learner's progress on one lesson — shared by their planner and by taking it on its own. */
export interface LessonProgress {
  status: Status;
  reviewed: boolean;
  notes: string;
  exercises: ExerciseResult[];
}

/** Keyed by lesson id. */
export type ProgressMap = Record<string, LessonProgress>;

export function emptyLessonProgress(): LessonProgress {
  return { status: "not-yet", reviewed: false, notes: "", exercises: [] };
}

// ---------------------------------------------------------------------------
// Content: lessons + exercises
// ---------------------------------------------------------------------------

/** A Japanese sentence with glosses. `ja` uses `漢字[かんじ]` furigana notation. */
export interface Sentence {
  ja: string;
  romaji?: string;
  en: string;
  id: string;
  note?: Bi;
}

export type LessonSection =
  | { kind: "prose"; heading?: Bi; body: Bi }
  | { kind: "note"; tone: "tip" | "warning"; body: Bi }
  | {
      kind: "table";
      heading?: Bi;
      columns: Bi[];
      rows: { cells: (string | Bi)[]; ja?: boolean }[];
    }
  | { kind: "examples"; heading?: Bi; items: Sentence[] };

export interface Lesson {
  slug: string;
  title: Bi;
  titleJa?: string;
  level: "N5" | "N4";
  summary: Bi;
  sections: LessonSection[];
  exercises: ExerciseGroup[];
}

// --- Exercises -------------------------------------------------------------

export interface McqQuestion {
  kind: "mcq";
  prompt: Bi | string;
  ja?: string; // optional Japanese stem shown large
  options: (string | Bi)[];
  answer: number; // index
  explain?: Bi;
}

export interface ClozeQuestion {
  kind: "cloze";
  /** Sentence with a single `___` blank. May use furigana notation. */
  ja: string;
  accept: string[]; // acceptable answers (kana/kanji), compared loosely
  hint?: Bi;
  en: string;
  id: string;
  explain?: Bi;
}

export interface BuildQuestion {
  kind: "build";
  /** Correct order of tiles. */
  tiles: string[];
  en: string;
  id: string;
  /** Extra distractor tiles. */
  distractors?: string[];
  explain?: Bi;
}

export interface ConjugationItem {
  kind: "conjugation";
  /** Dictionary form, with furigana notation. */
  dict: string;
  /** Target form name, e.g. "ます形", "て形". */
  target: Bi | string;
  accept: string[];
  meaning?: Bi;
}

export type Question =
  | McqQuestion
  | ClozeQuestion
  | BuildQuestion
  | ConjugationItem;

export interface ExerciseGroup {
  id: string;
  title: Bi;
  instructions?: Bi;
  /** Encourage speaking the answers aloud before checking. */
  speak?: boolean;
  /** Conjugation drills run as a timed streak instead of a fixed list. */
  mode?: "list" | "streak";
  questions: Question[];
}

// --- Reading / Listening / Writing ----------------------------------------

export interface ReadingItem {
  id: string;
  title: Bi;
  /** Passage with furigana notation; blank line separates paragraphs. */
  passage: string;
  translation?: Bi;
  questions: McqQuestion[];
}

export interface ListeningClip {
  id: string;
  title: Bi;
  /** Lines spoken by TTS, in order. */
  script: { speaker?: string; ja: string }[];
  /** If set, embed this YouTube video instead of using TTS. */
  youtube?: string;
  questions: McqQuestion[];
}

export interface WritingPrompt {
  id: string;
  prompt: Bi;
  modelAnswer?: Sentence[];
  checklist: Bi[];
}

// ---------------------------------------------------------------------------
// Content modules — what a lesson's `contentSlug` can resolve to
// ---------------------------------------------------------------------------

export interface TestModule {
  slug: string;
  title: Bi;
  titleJa?: string;
  description: Bi;
  /** Pass mark as a percentage. */
  passMark?: number;
  groups: ExerciseGroup[];
}

export interface ReadingSet {
  slug: string;
  title: Bi;
  description: Bi;
  items: ReadingItem[];
}

export interface ListeningSet {
  slug: string;
  title: Bi;
  description: Bi;
  clips: ListeningClip[];
}

export interface FlashCard {
  front: string; // Japanese (furigana notation ok)
  reading?: string; // kana reading, shown on flip
  meaning: Bi;
  example?: Sentence;
}

export interface DeckModule {
  slug: string;
  title: Bi;
  description: Bi;
  decks: { id: string; label: Bi; cards: FlashCard[] }[];
  quiz?: ExerciseGroup[];
}

export interface SkillModule {
  slug: string;
  title: Bi;
  titleJa?: string;
  description: Bi;
  sections: LessonSection[];
  writing?: WritingPrompt;
  exercises?: ExerciseGroup[];
}

export type ContentModule =
  | ({ type: "lesson" } & Lesson)
  | ({ type: "test" } & TestModule)
  | ({ type: "reading" } & ReadingSet)
  | ({ type: "listening" } & ListeningSet)
  | ({ type: "deck" } & DeckModule)
  | ({ type: "skill" } & SkillModule);
