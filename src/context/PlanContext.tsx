"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { api } from "@/lib/api";
import { useAuth } from "@/lib/useAuth";
import { todayISO } from "@/lib/schedule";
import type {
  EntryPatch,
  NewPlanner,
  Plan,
  PlanEntry,
  PlanSettings,
  ScheduleSettings,
} from "@/lib/planTypes";
import type { LessonProgress } from "@/lib/types";

type PlanContextValue = {
  hydrated: boolean;
  signedIn: boolean;
  /** null until the learner has started a planner. */
  settings: PlanSettings | null;
  /** Everything, by date; lessons before custom tasks on the same date. */
  entries: PlanEntry[];
  /** Lessons only, in the learner's order. */
  lessonEntries: PlanEntry[];
  /** Local ISO date, known only after mount. */
  today: string | null;
  entryForLesson: (lessonId: string) => PlanEntry | undefined;
  createPlanner: (planner: NewPlanner) => Promise<void>;
  saveSettings: (
    settings: ScheduleSettings & { name?: string | null },
    rebuild: boolean,
  ) => Promise<void>;
  updateEntry: (id: string, patch: EntryPatch) => Promise<void>;
  addTask: (task: { title: string; note?: string; date: string }) => Promise<void>;
  /** Delete a custom task, or take a lesson out of the planner. */
  removeEntry: (id: string) => Promise<void>;
  addLessons: (lessonIds: string[]) => Promise<void>;
  /** Save a new lesson order (every lesson entry id). */
  reorder: (entryIds: string[]) => Promise<void>;
  shift: (from: string, by: number) => Promise<void>;
  error: boolean;
};

const EMPTY_PLAN: Plan = { settings: null, entries: [] };

const PlanContext = createContext<PlanContextValue | null>(null);

export function isEntryDone(
  entry: PlanEntry,
  getProgress: (lessonId: string) => LessonProgress,
): boolean {
  return entry.lessonId != null ? getProgress(entry.lessonId).status === "done" : entry.done;
}

function byDate(a: PlanEntry, b: PlanEntry): number {
  const da = a.date ?? "9999-99-99";
  const db = b.date ?? "9999-99-99";
  if (da !== db) return da < db ? -1 : 1;
  const pa = a.lessonId != null ? (a.position ?? 0) : Infinity;
  const pb = b.lessonId != null ? (b.position ?? 0) : Infinity;
  if (pa !== pb) return pa - pb;
  return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
}

function byPosition(a: PlanEntry, b: PlanEntry): number {
  const pa = a.position ?? Infinity;
  const pb = b.position ?? Infinity;
  if (pa !== pb) return pa - pb;
  return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
}

export function PlanProvider({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const userId = user?.id ?? null;
  const [plan, setPlan] = useState<Plan>(EMPTY_PLAN);
  /** Whose plan `plan` holds: a user id, null for a guest, undefined before loading. */
  const [loadedFor, setLoadedFor] = useState<string | null | undefined>(undefined);
  const [error, setError] = useState(false);
  const [today, setToday] = useState<string | null>(null);
  const reorderSeq = useRef(0);
  const reorderChain = useRef<Promise<unknown>>(Promise.resolve());

  useEffect(() => {
    setToday(todayISO());
    // Roll "today" over at midnight for tabs left open.
    const id = setInterval(() => setToday(todayISO()), 60_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (loading) return;
    let cancelled = false;
    setPlan(EMPTY_PLAN);
    setError(false);
    if (!userId) {
      setLoadedFor(null);
      return;
    }
    api<Plan>("/api/plan")
      .then((p) => {
        if (cancelled) return;
        setPlan(p);
        setLoadedFor(userId);
      })
      .catch(() => {
        if (cancelled) return;
        setError(true);
        setLoadedFor(userId);
      });
    return () => {
      cancelled = true;
    };
  }, [userId, loading]);

  const refresh = useCallback(async () => {
    try {
      setPlan(await api<Plan>("/api/plan"));
    } catch {
      setError(true);
    }
  }, []);

  const patchLocal = useCallback((id: string, patch: Partial<PlanEntry>) => {
    setPlan((p) => ({
      ...p,
      entries: p.entries.map((e) => (e.id === id ? { ...e, ...patch } : e)),
    }));
  }, []);

  const createPlanner = useCallback(async (planner: NewPlanner) => {
    setPlan(await api<Plan>("/api/plan", { method: "POST", body: planner }));
    setError(false);
  }, []);

  const saveSettings = useCallback(
    async (settings: ScheduleSettings & { name?: string | null }, rebuild: boolean) => {
      setPlan(await api<Plan>("/api/plan", { method: "PUT", body: { ...settings, rebuild } }));
      setError(false);
    },
    [],
  );

  const updateEntry = useCallback(
    async (id: string, patch: EntryPatch) => {
      patchLocal(id, patch);
      try {
        patchLocal(id, await api<PlanEntry>(`/api/plan/entries/${id}`, { method: "PATCH", body: patch }));
      } catch {
        setError(true);
        await refresh();
      }
    },
    [patchLocal, refresh],
  );

  const addTask = useCallback(async (task: { title: string; note?: string; date: string }) => {
    const entry = await api<PlanEntry>("/api/plan/entries", { method: "POST", body: task });
    setPlan((p) => ({ ...p, entries: [...p.entries, entry] }));
  }, []);

  const removeEntry = useCallback(
    async (id: string) => {
      setPlan((p) => ({ ...p, entries: p.entries.filter((e) => e.id !== id) }));
      try {
        setPlan(await api<Plan>(`/api/plan/entries/${id}`, { method: "DELETE" }));
      } catch {
        setError(true);
        await refresh();
      }
    },
    [refresh],
  );

  const addLessons = useCallback(async (lessonIds: string[]) => {
    setPlan(
      await api<Plan>("/api/plan/lessons", {
        method: "POST",
        body: { lessonIds, today: todayISO() },
      }),
    );
  }, []);

  // Moves apply instantly; requests run one at a time and only the newest result is shown.
  const reorder = useCallback(
    async (entryIds: string[]) => {
      const seq = ++reorderSeq.current;
      const position = new Map(entryIds.map((id, i) => [id, i]));
      setPlan((p) => ({
        ...p,
        entries: p.entries.map((e) => (position.has(e.id) ? { ...e, position: position.get(e.id)! } : e)),
      }));
      const run = reorderChain.current.then(async () => {
        try {
          const next = await api<Plan>("/api/plan/reorder", { method: "POST", body: { entryIds } });
          if (seq === reorderSeq.current) setPlan(next);
        } catch {
          if (seq === reorderSeq.current) {
            setError(true);
            await refresh();
          }
        }
      });
      reorderChain.current = run;
      await run;
    },
    [refresh],
  );

  const shift = useCallback(async (from: string, by: number) => {
    setPlan(await api<Plan>("/api/plan/shift", { method: "POST", body: { from, by } }));
  }, []);

  const entries = useMemo(() => [...plan.entries].sort(byDate), [plan.entries]);
  const lessonEntries = useMemo(
    () => plan.entries.filter((e) => e.lessonId != null).sort(byPosition),
    [plan.entries],
  );
  const byLesson = useMemo(
    () => new Map(lessonEntries.map((e) => [e.lessonId!, e])),
    [lessonEntries],
  );

  const hydrated = !loading && loadedFor === userId && today != null;

  const value = useMemo<PlanContextValue>(
    () => ({
      hydrated,
      signedIn: userId != null,
      settings: plan.settings,
      entries,
      lessonEntries,
      today,
      entryForLesson: (lessonId) => byLesson.get(lessonId),
      createPlanner,
      saveSettings,
      updateEntry,
      addTask,
      removeEntry,
      addLessons,
      reorder,
      shift,
      error,
    }),
    [
      hydrated,
      userId,
      plan.settings,
      entries,
      lessonEntries,
      today,
      byLesson,
      createPlanner,
      saveSettings,
      updateEntry,
      addTask,
      removeEntry,
      addLessons,
      reorder,
      shift,
      error,
    ],
  );

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan(): PlanContextValue {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used within PlanProvider");
  return ctx;
}
