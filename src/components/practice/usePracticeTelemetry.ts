"use client";

import { useEffect, useRef } from "react";
import { track } from "@/lib/telemetry";
import type { PracticeKey } from "@/lib/useSyncedJson";

/**
 * The four trainers share a shape: setup → playing → summary. This turns those
 * transitions into practice.session_started / practice.session_completed, so trainer
 * usage sits beside lesson usage on the product dashboards.
 */
export function usePracticeTelemetry(
  trainer: PracticeKey,
  phase: string,
  result: { seen: number; correct: number; best: number },
) {
  const previous = useRef<string | null>(null);
  // Read at transition time, so the summary carries the run's final numbers.
  const latest = useRef(result);
  latest.current = result;

  useEffect(() => {
    const before = previous.current;
    previous.current = phase;
    if (before === phase) return;

    const place = { feature: `practice.${trainer}`, contentId: trainer };
    if (phase === "playing") track("practice.session_started", place);
    if (phase === "summary") {
      const { seen, correct, best } = latest.current;
      track("practice.session_completed", {
        ...place,
        props: { answered: seen, correct, bestStreak: best },
      });
    }
  }, [phase, trainer]);
}
