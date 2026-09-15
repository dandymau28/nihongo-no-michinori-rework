import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { JlptLevel, LessonType, Status } from "@/lib/types";

type Tone = "neutral" | "primary" | "accent" | "success" | "warning";

export function Pill({
  children,
  className,
  tone = "neutral",
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
}) {
  const tones = {
    neutral: "bg-surface-2 text-muted",
    primary: "bg-primary-soft text-primary",
    accent: "bg-accent-soft text-accent",
    success: "bg-success-soft text-success",
    warning: "bg-warning-soft text-warning",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

const STATUS_TONE: Record<Status, "neutral" | "warning" | "success"> = {
  "not-yet": "neutral",
  partial: "warning",
  done: "success",
};

export function StatusDot({ status }: { status: Status }) {
  const color = {
    "not-yet": "bg-border",
    partial: "bg-warning",
    done: "bg-success",
  }[status];
  return <span className={cn("inline-block size-2 rounded-full", color)} />;
}

export function statusTone(status: Status) {
  return STATUS_TONE[status];
}

export const TYPE_ICON: Record<LessonType, string> = {
  diagnostic: "🩺",
  grammar: "✏️",
  "vocab-kanji": "🈶",
  reading: "📖",
  listening: "🎧",
  review: "🔁",
  test: "📝",
  skill: "🧩",
};

export const LEVEL_TONE: Record<JlptLevel, Tone> = {
  N5: "primary",
  N4: "accent",
  N3: "warning",
  N2: "success",
  N1: "neutral",
};

export function LevelPill({ level, className }: { level: JlptLevel; className?: string }) {
  return (
    <Pill tone={LEVEL_TONE[level]} className={cn("tabular-nums", className)}>
      {level}
    </Pill>
  );
}
