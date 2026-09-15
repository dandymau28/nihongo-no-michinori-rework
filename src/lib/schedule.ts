/**
 * Pure scheduling helpers shared by the API routes and the client.
 *
 * Every date is an ISO `YYYY-MM-DD` string in the learner's own calendar. Maths
 * is done in UTC so DST transitions never skip or repeat a day.
 */

/** Weekday bitmask: bit 0 = Sunday … bit 6 = Saturday. */
export const ALL_WEEKDAYS = 0b1111111;
export const MAX_PER_DAY = 5;

const MS_PER_DAY = 24 * 60 * 60 * 1000;

function toUTC(iso: string): number {
  const [y, m, d] = iso.split("-").map(Number);
  return Date.UTC(y, (m ?? 1) - 1, d ?? 1);
}

function fromUTC(ms: number): string {
  return new Date(ms).toISOString().slice(0, 10);
}

export function isISODate(v: unknown): v is string {
  return typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(toUTC(v));
}

/** Today in the local timezone of whoever runs this (call it on the client). */
export function todayISO(now: Date = new Date()): string {
  return fromUTC(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
}

export function addDays(iso: string, n: number): string {
  return fromUTC(toUTC(iso) + n * MS_PER_DAY);
}

/** 0 = Sunday … 6 = Saturday. */
export function weekdayOf(iso: string): number {
  return new Date(toUTC(iso)).getUTCDay();
}

function normMask(mask: number): number {
  const m = mask & ALL_WEEKDAYS;
  return m === 0 ? ALL_WEEKDAYS : m;
}

export function isStudyDay(iso: string, mask: number): boolean {
  return (normMask(mask) & (1 << weekdayOf(iso))) !== 0;
}

/** The first study day on or after `iso`. */
export function studyDayOnOrAfter(iso: string, mask: number): string {
  let d = iso;
  while (!isStudyDay(d, mask)) d = addDays(d, 1);
  return d;
}

/** Move `iso` by `n` study days (negative moves backwards). */
export function shiftStudyDays(iso: string, n: number, mask: number): string {
  let d = iso;
  const step = n < 0 ? -1 : 1;
  for (let i = 0; i < Math.abs(n); i++) {
    d = addDays(d, step);
    while (!isStudyDay(d, mask)) d = addDays(d, step);
  }
  return d;
}

/**
 * How many study-day steps move `from` onto (or past) the first study day on or
 * after `target`. Used to push an overdue plan forward so it resumes today.
 */
export function stepsToReach(from: string, target: string, mask: number): number {
  const goal = studyDayOnOrAfter(target, mask);
  let d = from;
  let steps = 0;
  while (d < goal) {
    d = shiftStudyDays(d, 1, mask);
    steps++;
  }
  return steps;
}

/**
 * Lay `items` (in order) onto consecutive study days from `startISO`,
 * `perDay` items per study day.
 */
export function buildSchedule<K>(
  items: K[],
  startISO: string,
  mask: number,
  perDay = 1,
): Map<K, string> {
  const per = Math.min(Math.max(Math.round(perDay), 1), MAX_PER_DAY);
  const out = new Map<K, string>();
  let date = studyDayOnOrAfter(startISO, mask);
  items.forEach((item, i) => {
    if (i > 0 && i % per === 0) date = shiftStudyDays(date, 1, mask);
    out.set(item, date);
  });
  return out;
}
