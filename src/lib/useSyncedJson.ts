"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { api } from "./api";
import { useAuth } from "./useAuth";

export type PracticeKey = "conj" | "particles" | "kanji" | "qwords";

const SAVE_DELAY = 1000;

/**
 * A piece of practice state stored on the learner's account. Guests get plain
 * in-memory state that is gone on reload — tracking requires signing in.
 */
export function useSyncedJson<T>(
  key: PracticeKey,
  empty: T,
  normalize: (raw: unknown) => T,
): [T, Dispatch<SetStateAction<T>>, boolean] {
  const { user, loading } = useAuth();
  const userId = user?.id ?? null;
  const [value, setValue] = useState<T>(empty);
  const [hydrated, setHydrated] = useState(false);

  const initial = useRef({ empty, normalize });
  /** The user whose saved data `value` currently reflects (null = not loaded). */
  const loadedFor = useRef<string | null>(null);
  const lastSaved = useRef<T | null>(null);
  const pending = useRef<T | null>(null);

  const send = useCallback(() => {
    const v = pending.current;
    if (v == null) return;
    pending.current = null;
    lastSaved.current = v;
    void fetch(`/api/practice/${key}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ data: v }),
      keepalive: true,
    }).catch(() => {});
  }, [key]);

  useEffect(() => {
    if (loading) return;
    let cancelled = false;
    loadedFor.current = null;
    pending.current = null;
    setValue(initial.current.empty);
    if (!userId) {
      setHydrated(true);
      return;
    }
    setHydrated(false);
    api<{ data: unknown }>(`/api/practice/${key}`)
      .then((r) => {
        if (cancelled) return;
        const v = r.data == null ? initial.current.empty : initial.current.normalize(r.data);
        lastSaved.current = v;
        loadedFor.current = userId;
        setValue(v);
        setHydrated(true);
      })
      // If loading fails, never save — it would overwrite the stored stats.
      .catch(() => !cancelled && setHydrated(true));
    return () => {
      cancelled = true;
    };
  }, [key, userId, loading]);

  useEffect(() => {
    if (!userId || loadedFor.current !== userId || value === lastSaved.current) return;
    pending.current = value;
    const id = setTimeout(send, SAVE_DELAY);
    return () => clearTimeout(id);
  }, [value, userId, send]);

  // Flush on unmount so the last answers before leaving the page are kept.
  useEffect(() => send, [send]);

  return [value, setValue, hydrated];
}
