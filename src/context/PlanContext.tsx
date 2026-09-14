"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { PLANNER } from "@/data/planner";
import { api } from "@/lib/api";
import { useAuth } from "@/lib/useAuth";
import { ALL_WEEKDAYS, buildSchedule, todayISO } from "@/lib/schedule";
import type { EntryPatch, Plan, PlanEntry, PlanSettings } from "@/lib/planTypes";
import type { DayProgress } from "@/lib/types";

type PlanContextValue = {
  hydrated: boolean;
  /** Guests see the default plan laid out from today, read-only. */
  isPreview: boolean;
  /** null until a signed-in learner has set up their plan. */
  settings: PlanSettings | null;
  /** Sorted by date; lessons before custom tasks on the same date. */
  entries: PlanEntry[];
  /** Local ISO date, known only after mount. */
  today: string | null;
  entryForDay: (day: number) => PlanEntry | undefined;
  saveSettings: (settings: PlanSettings, rebuild: boolean) => Promise<void>;
  updateEntry: (id: string, patch: EntryPatch) => Promise<void>;
  addTask: (task: { title: string; note?: string; date: string }) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  shift: (from: string, by: number) => Promise<void>;
  error: boolean;
};

const EMPTY_PLAN: Plan = { settings: null, entries: [] };

const PlanContext = createContext<PlanContextValue | null>(null);

export function isEntryDone(
  entry: PlanEntry,
  getDay: (day: number) => DayProgress,
): boolean {
  return entry.materialDay != null ? getDay(entry.materialDay).status === "done" : entry.done;
}

function compareEntries(a: PlanEntry, b: PlanEntry): number {
  const da = a.date ?? "9999-99-99";
  const db = b.date ?? "9999-99-99";
  if (da !== db) return da < db ? -1 : 1;
  const ma = a.materialDay ?? Infinity;
  const mb = b.materialDay ?? Infinity;
  if (ma !== mb) return ma - mb;
  return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
}

function previewEntries(today: string): PlanEntry[] {
  const days = PLANNER.map((d) => d.day);
  const schedule = buildSchedule(days, today, ALL_WEEKDAYS);
  return days.map((day) => ({
    id: `preview-${day}`,
    materialDay: day,
    title: null,
    note: null,
    date: schedule.get(day)!,
    skipped: false,
    done: false,
  }));
}

export function PlanProvider({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const userId = user?.id ?? null;
  const [plan, setPlan] = useState<Plan>(EMPTY_PLAN);
  /** Whose plan `plan` holds: a user id, null for a guest, undefined before loading. */
  const [loadedFor, setLoadedFor] = useState<string | null | undefined>(undefined);
  const [error, setError] = useState(false);
  const [today, setToday] = useState<string | null>(null);

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

  const saveSettings = useCallback(async (settings: PlanSettings, rebuild: boolean) => {
    setPlan(await api<Plan>("/api/plan", { method: "PUT", body: { ...settings, rebuild } }));
    setError(false);
  }, []);

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

  const deleteTask = useCallback(
    async (id: string) => {
      setPlan((p) => ({ ...p, entries: p.entries.filter((e) => e.id !== id) }));
      try {
        await api(`/api/plan/entries/${id}`, { method: "DELETE" });
      } catch {
        setError(true);
        await refresh();
      }
    },
    [refresh],
  );

  const shift = useCallback(async (from: string, by: number) => {
    setPlan(await api<Plan>("/api/plan/shift", { method: "POST", body: { from, by } }));
  }, []);

  const isPreview = !userId;
  const entries = useMemo(() => {
    const list = isPreview ? (today ? previewEntries(today) : []) : plan.entries;
    return [...list].sort(compareEntries);
  }, [isPreview, today, plan.entries]);

  const byDay = useMemo(
    () => new Map(entries.filter((e) => e.materialDay != null).map((e) => [e.materialDay!, e])),
    [entries],
  );

  const hydrated = !loading && loadedFor === userId && today != null;

  const value = useMemo<PlanContextValue>(
    () => ({
      hydrated,
      isPreview,
      settings: plan.settings,
      entries,
      today,
      entryForDay: (day) => byDay.get(day),
      saveSettings,
      updateEntry,
      addTask,
      deleteTask,
      shift,
      error,
    }),
    [hydrated, isPreview, plan.settings, entries, today, byDay, saveSettings, updateEntry, addTask, deleteTask, shift, error],
  );

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan(): PlanContextValue {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used within PlanProvider");
  return ctx;
}
