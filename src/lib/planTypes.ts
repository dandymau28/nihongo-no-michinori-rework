export interface PlanSettings {
  /** ISO YYYY-MM-DD */
  startDate: string;
  /** Weekday bitmask, bit 0 = Sunday … bit 6 = Saturday. */
  studyDays: number;
  /** Lessons per study day when (re)building the schedule. */
  perDay: number;
}

export interface PlanEntry {
  id: string;
  /** Built-in lesson day number (1..90), or null for a custom task. */
  materialDay: number | null;
  title: string | null;
  note: string | null;
  /** ISO YYYY-MM-DD */
  date: string | null;
  skipped: boolean;
  /** Custom tasks only — lessons use their DayProgress status. */
  done: boolean;
}

export interface Plan {
  /** null until the learner has set up their plan. */
  settings: PlanSettings | null;
  entries: PlanEntry[];
}

export type EntryPatch = Partial<Pick<PlanEntry, "date" | "skipped" | "done" | "title" | "note">>;
