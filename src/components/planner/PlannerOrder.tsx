"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getLesson } from "@/data/lessons";
import { useSettings } from "@/context/SettingsContext";
import { useProgress } from "@/context/ProgressContext";
import { usePlan } from "@/context/PlanContext";
import { formatDate } from "@/lib/dates";
import type { PlanEntry } from "@/lib/planTypes";
import { LevelPill, StatusDot, TYPE_ICON } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

/** The planner's lesson sequence: drag (or use the arrows) to reorder; skip or remove lessons. */
export function PlannerOrder({ onAddLessons }: { onAddLessons: () => void }) {
  const { t, lang } = useSettings();
  const { getProgress } = useProgress();
  const { lessonEntries, reorder } = usePlan();
  const [dragId, setDragId] = useState<string | null>(null);
  const [overId, setOverId] = useState<string | null>(null);
  const ids = lessonEntries.map((e) => e.id);

  function move(from: number, to: number) {
    if (from < 0 || to < 0 || to >= ids.length || from === to) return;
    const next = [...ids];
    const [id] = next.splice(from, 1);
    next.splice(to, 0, id);
    void reorder(next);
  }

  if (lessonEntries.length === 0) {
    return (
      <div className="space-y-3 rounded-2xl border border-dashed border-border p-6 text-center">
        <p className="text-sm text-muted">
          {t({
            en: "No lessons in this planner yet. Add some from the lesson library.",
            id: "Belum ada materi di planner ini. Tambahkan dari perpustakaan materi.",
          })}
        </p>
        <Button size="sm" onClick={onAddLessons}>
          + {t({ en: "Add lessons", id: "Tambah materi" })}
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="max-w-prose text-xs text-muted">
        {t({
          en: "Drag lessons — or use the arrows — to change the order. Unfinished lessons get new dates in the new order; finished lessons keep theirs.",
          id: "Seret materi — atau pakai tanda panah — untuk mengubah urutan. Materi yang belum selesai mendapat tanggal baru sesuai urutan; yang sudah selesai tetap.",
        })}
      </p>

      <ol className="space-y-1">
        {lessonEntries.map((entry, index) => {
          const lesson = getLesson(entry.lessonId);
          const status = getProgress(entry.lessonId!).status;
          const isOver = overId === entry.id && dragId !== entry.id;
          return (
            <li
              key={entry.id}
              draggable
              onDragStart={(e) => {
                setDragId(entry.id);
                e.dataTransfer.effectAllowed = "move";
                e.dataTransfer.setData("text/plain", entry.id);
              }}
              onDragOver={(e) => {
                if (!dragId) return;
                e.preventDefault();
                if (overId !== entry.id) setOverId(entry.id);
              }}
              onDrop={(e) => {
                e.preventDefault();
                if (dragId) move(ids.indexOf(dragId), index);
                setDragId(null);
                setOverId(null);
              }}
              onDragEnd={() => {
                setDragId(null);
                setOverId(null);
              }}
              className={cn(
                "flex items-center gap-2 rounded-xl border bg-surface py-1.5 pl-1 pr-1.5",
                isOver ? "border-primary" : "border-border",
                dragId === entry.id && "opacity-50",
              )}
            >
              <span
                aria-hidden
                className="hidden cursor-grab select-none px-1 text-lg leading-none text-muted sm:block"
              >
                ⠿
              </span>
              <span className="w-7 shrink-0 text-right text-xs font-semibold tabular-nums text-muted">
                {index + 1}
              </span>
              {lesson && <LevelPill level={lesson.level} className="hidden sm:inline-flex" />}
              <span className="hidden shrink-0 sm:inline" aria-hidden>
                {lesson ? TYPE_ICON[lesson.type] : "❔"}
              </span>
              <div className={cn("min-w-0 flex-1", entry.skipped && "opacity-60")}>
                {lesson ? (
                  <Link
                    href={`/lessons/${lesson.id}`}
                    draggable={false}
                    className="block truncate text-sm font-medium hover:underline"
                  >
                    {lesson.titleJa ? <span className="font-jp">{lesson.titleJa}</span> : t(lesson.title)}
                  </Link>
                ) : (
                  <span className="block truncate text-sm text-muted">
                    {t({ en: "Lesson no longer available", id: "Materi tidak tersedia lagi" })}
                  </span>
                )}
                <p className="truncate text-xs text-muted">
                  {entry.skipped
                    ? t({ en: "Skipped", id: "Dilewati" })
                    : entry.date
                      ? formatDate(entry.date, lang)
                      : "—"}
                  {lesson?.titleJa && ` · ${t(lesson.title)}`}
                </p>
              </div>
              <StatusDot status={status} />
              <div className="flex shrink-0 items-center">
                <IconButton
                  label={t({ en: "Move up", id: "Naikkan" })}
                  disabled={index === 0}
                  onClick={() => move(index, index - 1)}
                >
                  ↑
                </IconButton>
                <IconButton
                  label={t({ en: "Move down", id: "Turunkan" })}
                  disabled={index === ids.length - 1}
                  onClick={() => move(index, index + 1)}
                >
                  ↓
                </IconButton>
                <OrderMenu entry={entry} index={index} onMove={move} count={ids.length} />
              </div>
            </li>
          );
        })}
      </ol>

      <Button size="sm" variant="secondary" onClick={onAddLessons}>
        + {t({ en: "Add lessons", id: "Tambah materi" })}
      </Button>
    </div>
  );
}

function IconButton({
  label,
  children,
  disabled,
  onClick,
}: {
  label: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      className="grid size-8 place-items-center rounded-lg text-muted hover:bg-surface-2 hover:text-fg disabled:opacity-30 disabled:hover:bg-transparent"
    >
      {children}
    </button>
  );
}

function OrderMenu({
  entry,
  index,
  count,
  onMove,
}: {
  entry: PlanEntry;
  index: number;
  count: number;
  onMove: (from: number, to: number) => void;
}) {
  const { t } = useSettings();
  const { today, updateEntry, removeEntry } = usePlan();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  function act(fn: () => unknown) {
    setOpen(false);
    void fn();
  }

  const item = "block w-full rounded-lg px-2 py-1.5 text-left text-sm hover:bg-surface-2";

  return (
    <div className="relative" ref={ref}>
      <IconButton label={t({ en: "More", id: "Lainnya" })} onClick={() => setOpen((v) => !v)}>
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
          <circle cx="5" cy="12" r="1.8" />
          <circle cx="12" cy="12" r="1.8" />
          <circle cx="19" cy="12" r="1.8" />
        </svg>
      </IconButton>
      {open && (
        <div className="absolute right-0 top-full z-20 mt-1 w-56 rounded-2xl border border-border bg-surface p-2 shadow-lg">
          {index > 0 && (
            <button className={item} onClick={() => act(() => onMove(index, 0))}>
              {t({ en: "Move to the top", id: "Pindah ke paling atas" })}
            </button>
          )}
          {index < count - 1 && (
            <button className={item} onClick={() => act(() => onMove(index, count - 1))}>
              {t({ en: "Move to the bottom", id: "Pindah ke paling bawah" })}
            </button>
          )}
          {entry.skipped ? (
            <button
              className={item}
              onClick={() =>
                act(() =>
                  updateEntry(entry.id, {
                    skipped: false,
                    date: entry.date && today && entry.date >= today ? entry.date : (today ?? entry.date),
                  }),
                )
              }
            >
              ↩ {t({ en: "Restore lesson", id: "Kembalikan materi" })}
            </button>
          ) : (
            <button className={item} onClick={() => act(() => updateEntry(entry.id, { skipped: true }))}>
              {t({ en: "Skip this lesson", id: "Lewati materi ini" })}
            </button>
          )}
          <div className="my-1 border-t border-border" />
          <button className={cn(item, "text-danger")} onClick={() => act(() => removeEntry(entry.id))}>
            {t({ en: "Remove from planner", id: "Hapus dari planner" })}
          </button>
        </div>
      )}
    </div>
  );
}
