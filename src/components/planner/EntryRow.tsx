"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSettings } from "@/context/SettingsContext";
import { useProgress } from "@/context/ProgressContext";
import { usePlan } from "@/context/PlanContext";
import { getLesson } from "@/data/lessons";
import { TYPE_LABEL } from "@/lib/labels";
import { quickPct } from "@/lib/dayScore";
import { formatDate } from "@/lib/dates";
import { ALL_WEEKDAYS, isISODate, shiftStudyDays } from "@/lib/schedule";
import type { PlanEntry } from "@/lib/planTypes";
import { LevelPill, TYPE_ICON, StatusDot } from "@/components/ui/Pill";
import { cn } from "@/lib/cn";

/** One planner item — a catalog lesson or a custom task — with its reschedule menu. */
export function EntryRow({
  entry,
  isToday,
  showDate,
  onEditTask,
}: {
  entry: PlanEntry;
  isToday?: boolean;
  showDate?: boolean;
  onEditTask?: (task: PlanEntry) => void;
}) {
  const { t, lang } = useSettings();
  const { getProgress } = useProgress();
  const { updateEntry } = usePlan();
  const lesson = getLesson(entry.lessonId);

  const rowCls = cn(
    "flex items-center rounded-xl border transition-colors",
    isToday
      ? "border-primary/50 bg-primary-soft/40"
      : "border-transparent hover:border-border hover:bg-surface-2",
  );
  const dateCell = showDate && entry.date && (
    <div className="w-14 shrink-0 text-xs text-muted">{formatDate(entry.date, lang)}</div>
  );

  if (entry.lessonId != null) {
    if (!lesson) {
      return (
        <div className={rowCls}>
          <p className="min-w-0 flex-1 px-3 py-2.5 text-sm text-muted">
            {t({ en: "This lesson is no longer available.", id: "Materi ini sudah tidak tersedia." })}
          </p>
          <EntryActions entry={entry} />
        </div>
      );
    }
    const progress = getProgress(lesson.id);
    const pct = quickPct(progress.exercises);
    return (
      <div className={rowCls}>
        <Link
          href={`/lessons/${lesson.id}`}
          className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2.5"
        >
          <div className="flex w-10 shrink-0 justify-center">
            <LevelPill level={lesson.level} />
          </div>
          {dateCell}
          <span className="shrink-0 text-base" aria-hidden>
            {TYPE_ICON[lesson.type]}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">
              {lesson.titleJa ? <span className="font-jp">{lesson.titleJa}</span> : t(lesson.title)}
            </p>
            <p className="truncate text-xs text-muted">
              {lesson.titleJa ? t(lesson.title) : t(TYPE_LABEL[lesson.type])}
            </p>
          </div>
          {pct != null && (
            <span className="hidden shrink-0 text-xs text-muted tabular-nums sm:block">{pct}%</span>
          )}
          <StatusDot status={progress.status} />
        </Link>
        <EntryActions entry={entry} />
      </div>
    );
  }

  return (
    <div className={rowCls}>
      <div className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2.5">
        <div className="flex w-10 shrink-0 justify-center">
          <input
            type="checkbox"
            checked={entry.done}
            onChange={(e) => updateEntry(entry.id, { done: e.target.checked })}
            aria-label={t({ en: "Done", id: "Selesai" })}
            className="size-4 accent-[var(--primary)]"
          />
        </div>
        {dateCell}
        <span className="shrink-0 text-base" aria-hidden>
          📌
        </span>
        <div className="min-w-0 flex-1">
          <p className={cn("truncate text-sm font-medium", entry.done && "text-muted line-through")}>
            {entry.title}
          </p>
          <p className="truncate text-xs text-muted">
            {entry.note || t({ en: "Custom task", id: "Tugas pribadi" })}
          </p>
        </div>
      </div>
      <EntryActions entry={entry} onEdit={onEditTask} />
    </div>
  );
}

function EntryActions({
  entry,
  onEdit,
}: {
  entry: PlanEntry;
  onEdit?: (task: PlanEntry) => void;
}) {
  const { t } = useSettings();
  const { settings, today, updateEntry, removeEntry } = usePlan();
  const [open, setOpen] = useState(false);
  const [pick, setPick] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    setPick(entry.date ?? today ?? "");
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open, entry.date, today]);

  const mask = settings?.studyDays ?? ALL_WEEKDAYS;
  const isTask = entry.lessonId == null;

  function act(fn: () => unknown) {
    setOpen(false);
    void fn();
  }
  const moveTo = (date: string) => act(() => updateEntry(entry.id, { date, skipped: false }));

  const item =
    "block w-full rounded-lg px-2 py-1.5 text-left text-sm hover:bg-surface-2 disabled:opacity-50";

  return (
    <div className="relative shrink-0 pr-1.5" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t({ en: "Reschedule", id: "Atur jadwal" })}
        aria-expanded={open}
        className="grid size-8 place-items-center rounded-lg text-muted hover:bg-surface hover:text-fg"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
          <circle cx="5" cy="12" r="1.8" />
          <circle cx="12" cy="12" r="1.8" />
          <circle cx="19" cy="12" r="1.8" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-20 mt-1 w-64 rounded-2xl border border-border bg-surface p-2 shadow-lg">
          {entry.skipped ? (
            <button
              className={item}
              onClick={() =>
                moveTo(entry.date && today && entry.date >= today ? entry.date : (today ?? entry.date!))
              }
            >
              ↩ {t({ en: "Restore lesson", id: "Kembalikan materi" })}
            </button>
          ) : (
            entry.date && (
              <>
                <button className={item} onClick={() => moveTo(shiftStudyDays(entry.date!, -1, mask))}>
                  ← {t({ en: "One study day earlier", id: "Satu hari belajar lebih awal" })}
                </button>
                <button className={item} onClick={() => moveTo(shiftStudyDays(entry.date!, 1, mask))}>
                  {t({ en: "One study day later", id: "Satu hari belajar lebih lambat" })} →
                </button>
                {today && entry.date !== today && (
                  <button className={item} onClick={() => moveTo(today)}>
                    {t({ en: "Move to today", id: "Pindah ke hari ini" })}
                  </button>
                )}
              </>
            )
          )}

          <div className="px-2 py-1.5">
            <span className="mb-1 block text-xs text-muted">
              {t({ en: "Move to date", id: "Pindah ke tanggal" })}
            </span>
            <div className="flex gap-1.5">
              <input
                type="date"
                value={pick}
                onChange={(e) => setPick(e.target.value)}
                className="h-8 min-w-0 flex-1 rounded-lg border border-border bg-surface px-2 text-sm"
              />
              <button
                disabled={!isISODate(pick) || (pick === entry.date && !entry.skipped)}
                onClick={() => moveTo(pick)}
                className="rounded-lg bg-primary px-2.5 text-xs font-medium text-primary-fg disabled:opacity-50"
              >
                {t({ en: "Move", id: "Pindah" })}
              </button>
            </div>
          </div>

          <div className="my-1 border-t border-border" />

          {isTask ? (
            <>
              {onEdit && (
                <button className={item} onClick={() => act(() => onEdit(entry))}>
                  {t({ en: "Edit task", id: "Ubah tugas" })}
                </button>
              )}
              <button
                className={cn(item, "text-danger")}
                onClick={() =>
                  act(() => {
                    if (confirm(t({ en: "Delete this task?", id: "Hapus tugas ini?" }))) {
                      return removeEntry(entry.id);
                    }
                  })
                }
              >
                {t({ en: "Delete task", id: "Hapus tugas" })}
              </button>
            </>
          ) : (
            <>
              {!entry.skipped && (
                <button
                  className={cn(item, "text-muted")}
                  onClick={() => act(() => updateEntry(entry.id, { skipped: true }))}
                >
                  {t({ en: "Skip this lesson", id: "Lewati materi ini" })}
                </button>
              )}
              <button
                className={cn(item, "text-muted")}
                onClick={() => act(() => removeEntry(entry.id))}
              >
                {t({ en: "Remove from planner", id: "Hapus dari planner" })}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
