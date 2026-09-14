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
import type {
  DayProgress,
  ExerciseResult,
  ProgressMap,
  Status,
} from "@/lib/types";
import { emptyDayProgress } from "@/lib/types";
import { api } from "@/lib/api";
import { useAuth } from "@/lib/useAuth";

const EXPORT_VERSION = 1;
const SAVE_DELAY = 600;

export type SaveState = "idle" | "saving" | "saved" | "error";

type ProgressContextValue = {
  hydrated: boolean;
  /** Signed in: changes are saved to the account. Guest progress lasts until reload. */
  canSave: boolean;
  saveState: SaveState;
  getDay: (day: number) => DayProgress;
  setStatus: (day: number, status: Status) => void;
  setNotes: (day: number, notes: string) => void;
  setReviewed: (day: number, reviewed: boolean) => void;
  recordExercise: (day: number, result: Omit<ExerciseResult, "at">) => void;
  completedCount: number;
  doneDays: Set<number>;
  resetAll: () => Promise<void>;
  exportJSON: () => string;
  importJSON: (raw: string) => Promise<boolean>;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const userId = user?.id ?? null;
  const [map, setMap] = useState<ProgressMap>({});
  /** Whose progress `map` holds: a user id, null for a guest, undefined before loading. */
  const [loadedFor, setLoadedFor] = useState<string | null | undefined>(undefined);
  const [saveState, setSaveState] = useState<SaveState>("idle");

  const mapRef = useRef(map);
  const userRef = useRef(userId);
  /** Only save once the account's progress has loaded, so a failed load never overwrites it. */
  const canWrite = useRef(false);
  const dirty = useRef(new Set<number>());
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    mapRef.current = map;
  }, [map]);

  /** PUT every changed day. `keepalive` lets the request outlive a closing tab. */
  const flush = useCallback(async (keepalive = false) => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    const uid = userRef.current;
    const days = [...dirty.current];
    dirty.current.clear();
    if (!uid || days.length === 0) return;
    if (!keepalive) setSaveState("saving");
    try {
      await Promise.all(
        days.map(async (day) => {
          const res = await fetch(`/api/progress/${day}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(mapRef.current[day] ?? emptyDayProgress()),
            keepalive,
          });
          if (!res.ok) throw new Error(String(res.status));
        }),
      );
      if (userRef.current === uid) setSaveState("saved");
    } catch {
      if (userRef.current !== uid) return;
      days.forEach((d) => dirty.current.add(d)); // retried with the next change
      setSaveState("error");
    }
  }, []);

  useEffect(() => {
    if (loading) return;
    let cancelled = false;
    userRef.current = userId;
    canWrite.current = false;
    dirty.current.clear();
    if (timer.current) clearTimeout(timer.current);
    setMap({});
    setSaveState("idle");
    if (!userId) {
      setLoadedFor(null);
      return;
    }
    api<{ progress: ProgressMap }>("/api/progress")
      .then((r) => {
        if (cancelled) return;
        canWrite.current = true;
        setMap(r.progress);
        setLoadedFor(userId);
      })
      .catch(() => {
        if (cancelled) return;
        setSaveState("error");
        setLoadedFor(userId);
      });
    return () => {
      cancelled = true;
    };
  }, [userId, loading]);

  useEffect(() => {
    const onHide = () => {
      if (dirty.current.size) void flush(true);
    };
    const onVisibility = () => {
      if (document.visibilityState === "hidden") onHide();
    };
    window.addEventListener("pagehide", onHide);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("pagehide", onHide);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [flush]);

  const mutateDay = useCallback(
    (day: number, fn: (d: DayProgress) => DayProgress) => {
      setMap((prev) => {
        const current = prev[day] ?? emptyDayProgress();
        return { ...prev, [day]: fn({ ...current }) };
      });
      if (!canWrite.current) return;
      dirty.current.add(day);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => void flush(), SAVE_DELAY);
    },
    [flush],
  );

  const getDay = useCallback(
    (day: number): DayProgress => map[day] ?? emptyDayProgress(),
    [map],
  );

  const recordExercise = useCallback(
    (day: number, result: Omit<ExerciseResult, "at">) => {
      mutateDay(day, (d) => {
        const others = d.exercises.filter((e) => e.setId !== result.setId);
        const next: DayProgress = {
          ...d,
          exercises: [...others, { ...result, at: Date.now() }],
        };
        // Starting the exercises moves an untouched day to "in progress".
        if (next.status === "not-yet") next.status = "partial";
        return next;
      });
    },
    [mutateDay],
  );

  const hydrated = !loading && loadedFor === userId;

  const value = useMemo<ProgressContextValue>(() => {
    const doneDays = new Set(
      Object.entries(map)
        .filter(([, p]) => p.status === "done")
        .map(([k]) => Number(k)),
    );
    return {
      hydrated,
      canSave: userId != null,
      saveState,
      getDay,
      setStatus: (day, status) => mutateDay(day, (d) => ({ ...d, status })),
      setNotes: (day, notes) => mutateDay(day, (d) => ({ ...d, notes })),
      setReviewed: (day, reviewed) =>
        mutateDay(day, (d) => ({ ...d, reviewed })),
      recordExercise,
      completedCount: doneDays.size,
      doneDays,
      resetAll: async () => {
        if (userRef.current) await api("/api/progress", { method: "DELETE" });
        dirty.current.clear();
        setMap({});
      },
      exportJSON: () =>
        JSON.stringify(
          { app: "shinpuru-nihongo", version: EXPORT_VERSION, progress: map },
          null,
          2,
        ),
      importJSON: async (raw: string) => {
        if (!userRef.current) return false;
        let next: unknown;
        try {
          const parsed = JSON.parse(raw);
          next = parsed?.progress ?? parsed;
        } catch {
          return false;
        }
        if (!next || typeof next !== "object") return false;
        try {
          const r = await api<{ progress: ProgressMap }>("/api/progress", {
            method: "POST",
            body: { progress: next },
          });
          dirty.current.clear();
          canWrite.current = true;
          setMap(r.progress);
          return true;
        } catch {
          return false;
        }
      },
    };
  }, [map, hydrated, userId, saveState, getDay, mutateDay, recordExercise]);

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
