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
  ExerciseResult,
  LessonProgress,
  ProgressMap,
  Status,
} from "@/lib/types";
import { emptyLessonProgress } from "@/lib/types";
import { api } from "@/lib/api";
import { useAuth } from "@/lib/useAuth";

const EXPORT_VERSION = 2;
const SAVE_DELAY = 600;

export type SaveState = "idle" | "saving" | "saved" | "error";

type ProgressContextValue = {
  hydrated: boolean;
  /** Signed in: changes are saved to the account. Guest progress lasts until reload. */
  canSave: boolean;
  saveState: SaveState;
  /** Progress on a lesson — shared by the planner and by opening the lesson on its own. */
  getProgress: (lessonId: string) => LessonProgress;
  setStatus: (lessonId: string, status: Status) => void;
  setNotes: (lessonId: string, notes: string) => void;
  setReviewed: (lessonId: string, reviewed: boolean) => void;
  recordExercise: (lessonId: string, result: Omit<ExerciseResult, "at">) => void;
  completedCount: number;
  doneLessons: Set<string>;
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
  const dirty = useRef(new Set<string>());
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    mapRef.current = map;
  }, [map]);

  /** PUT every changed lesson. `keepalive` lets the request outlive a closing tab. */
  const flush = useCallback(async (keepalive = false) => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    const uid = userRef.current;
    const lessonIds = [...dirty.current];
    dirty.current.clear();
    if (!uid || lessonIds.length === 0) return;
    if (!keepalive) setSaveState("saving");
    try {
      await Promise.all(
        lessonIds.map(async (lessonId) => {
          const res = await fetch(`/api/progress/${encodeURIComponent(lessonId)}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(mapRef.current[lessonId] ?? emptyLessonProgress()),
            keepalive,
          });
          if (!res.ok) throw new Error(String(res.status));
        }),
      );
      if (userRef.current === uid) setSaveState("saved");
    } catch {
      if (userRef.current !== uid) return;
      lessonIds.forEach((id) => dirty.current.add(id)); // retried with the next change
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

  const mutate = useCallback(
    (lessonId: string, fn: (p: LessonProgress) => LessonProgress) => {
      setMap((prev) => {
        const current = prev[lessonId] ?? emptyLessonProgress();
        return { ...prev, [lessonId]: fn({ ...current }) };
      });
      if (!canWrite.current) return;
      dirty.current.add(lessonId);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => void flush(), SAVE_DELAY);
    },
    [flush],
  );

  const getProgress = useCallback(
    (lessonId: string): LessonProgress => map[lessonId] ?? emptyLessonProgress(),
    [map],
  );

  const recordExercise = useCallback(
    (lessonId: string, result: Omit<ExerciseResult, "at">) => {
      mutate(lessonId, (p) => {
        const others = p.exercises.filter((e) => e.setId !== result.setId);
        const next: LessonProgress = {
          ...p,
          exercises: [...others, { ...result, at: Date.now() }],
        };
        // Starting the exercises moves an untouched lesson to "in progress".
        if (next.status === "not-yet") next.status = "partial";
        return next;
      });
    },
    [mutate],
  );

  const hydrated = !loading && loadedFor === userId;

  const value = useMemo<ProgressContextValue>(() => {
    const doneLessons = new Set(
      Object.entries(map)
        .filter(([, p]) => p.status === "done")
        .map(([id]) => id),
    );
    return {
      hydrated,
      canSave: userId != null,
      saveState,
      getProgress,
      setStatus: (lessonId, status) => mutate(lessonId, (p) => ({ ...p, status })),
      setNotes: (lessonId, notes) => mutate(lessonId, (p) => ({ ...p, notes })),
      setReviewed: (lessonId, reviewed) => mutate(lessonId, (p) => ({ ...p, reviewed })),
      recordExercise,
      completedCount: doneLessons.size,
      doneLessons,
      resetAll: async () => {
        if (userRef.current) await api("/api/progress", { method: "DELETE" });
        dirty.current.clear();
        setMap({});
      },
      exportJSON: () =>
        JSON.stringify(
          { app: "nihongo-no-michinori", version: EXPORT_VERSION, progress: map },
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
          // Older exports are keyed by day number; the server maps those to lessons.
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
  }, [map, hydrated, userId, saveState, getProgress, mutate, recordExercise]);

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
