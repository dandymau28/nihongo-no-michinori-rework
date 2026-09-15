export interface ScheduleSettings {
  /** ISO YYYY-MM-DD */
  startDate: string;
  /** Weekday bitmask, bit 0 = Sunday … bit 6 = Saturday. */
  studyDays: number;
  /** Lessons per study day when laying lessons out. */
  perDay: number;
}

export interface PlanSettings extends ScheduleSettings {
  /** Custom name; null = the preset's title (or "My planner" for a custom planner). */
  name: string | null;
  /** Preset the planner was started from (src/data/presets.ts); null = built from scratch. */
  presetId: string | null;
}

export interface PlanEntry {
  id: string;
  /** Catalog lesson id, or null for a custom task. */
  lessonId: string | null;
  /** The lesson's place in the learner's order; null for custom tasks. */
  position: number | null;
  title: string | null;
  note: string | null;
  /** ISO YYYY-MM-DD */
  date: string | null;
  skipped: boolean;
  /** Custom tasks only — lessons use their LessonProgress status. */
  done: boolean;
}

export interface Plan {
  /** null until the learner has started a planner. */
  settings: PlanSettings | null;
  entries: PlanEntry[];
}

export type EntryPatch = Partial<Pick<PlanEntry, "date" | "skipped" | "done" | "title" | "note">>;

/** What a new planner is built from: a preset, or a hand-picked list of lessons (may be empty). */
export type PlannerSource = { presetId: string } | { lessonIds: string[] };

export type NewPlanner = ScheduleSettings & { source: PlannerSource; name?: string | null };
