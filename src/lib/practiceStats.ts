"use client";

import { useCallback, useMemo } from "react";
import { useSyncedJson, type PracticeKey } from "./useSyncedJson";

/** Streaks that trigger a one-time party-popper the first time they're reached. */
export const STREAK_MILESTONES = [10, 20, 40, 80, 100];

export interface KeyStat {
  seen: number;
  correct: number;
}

export interface PracticeStats {
  bestStreak: number;
  totalSeen: number;
  totalCorrect: number;
  /** accuracy per item key (form id, particle, …) */
  byKey: Record<string, KeyStat>;
  /** streak milestones already celebrated (once ever) */
  celebrated: number[];
}

const EMPTY: PracticeStats = {
  bestStreak: 0,
  totalSeen: 0,
  totalCorrect: 0,
  byKey: {},
  celebrated: [],
};

function normalize(raw: unknown): PracticeStats {
  const p = (raw ?? {}) as Partial<PracticeStats>;
  return {
    ...EMPTY,
    ...p,
    byKey: p.byKey ?? {},
    celebrated: Array.isArray(p.celebrated) ? p.celebrated : [],
  };
}

/**
 * Account-backed practice stats, shared by the particle, kanji and question-word
 * trainers. `trainer` keeps each trainer's history separate.
 */
export function usePracticeStats(trainer: Exclude<PracticeKey, "conj">) {
  const [stats, setStats, hydrated] = useSyncedJson(trainer, EMPTY, normalize);

  const record = useCallback(
    (key: string, correct: boolean, streak: number) => {
      setStats((s) => {
        const cur = s.byKey[key] ?? { seen: 0, correct: 0 };
        return {
          ...s,
          bestStreak: Math.max(s.bestStreak, streak),
          totalSeen: s.totalSeen + 1,
          totalCorrect: s.totalCorrect + (correct ? 1 : 0),
          byKey: {
            ...s.byKey,
            [key]: { seen: cur.seen + 1, correct: cur.correct + (correct ? 1 : 0) },
          },
        };
      });
    },
    [setStats],
  );

  const markCelebrated = useCallback(
    (milestone: number) => {
      setStats((s) =>
        s.celebrated.includes(milestone)
          ? s
          : { ...s, celebrated: [...s.celebrated, milestone] },
      );
    },
    [setStats],
  );

  const reset = useCallback(() => setStats(EMPTY), [setStats]);

  const weakKeys = useMemo(() => {
    const out = new Set<string>();
    for (const [k, st] of Object.entries(stats.byKey)) {
      if (st.seen >= 4 && st.correct / st.seen < 0.7) out.add(k);
    }
    return out;
  }, [stats]);

  const ranked = useMemo(
    () =>
      Object.entries(stats.byKey)
        .filter(([, st]) => st.seen >= 3)
        .map(([key, st]) => ({
          key,
          seen: st.seen,
          correct: st.correct,
          pct: Math.round((st.correct / st.seen) * 100),
        }))
        .sort((a, b) => a.pct - b.pct),
    [stats],
  );

  return { stats, hydrated, record, markCelebrated, reset, weakKeys, ranked };
}
