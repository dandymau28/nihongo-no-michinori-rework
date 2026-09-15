"use client";

import { useEffect, useMemo, useState } from "react";
import { LESSONS } from "@/data/lessons";
import { useSettings } from "@/context/SettingsContext";
import { useProgress } from "@/context/ProgressContext";
import { usePlan } from "@/context/PlanContext";
import { STR } from "@/lib/strings";
import { TYPE_LABEL } from "@/lib/labels";
import { JLPT_LEVELS, type JlptLevel } from "@/lib/types";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { LevelPill, StatusDot, TYPE_ICON } from "@/components/ui/Pill";
import { cn } from "@/lib/cn";

/** Choose catalog lessons to append to the planner. */
export function LessonPickerModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useSettings();
  const { getProgress } = useProgress();
  const { lessonEntries, addLessons } = usePlan();
  const [level, setLevel] = useState<JlptLevel | "all">("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!open) return;
    setSelected(new Set());
    setQuery("");
    setError(false);
  }, [open]);

  const inPlanner = useMemo(() => new Set(lessonEntries.map((e) => e.lessonId)), [lessonEntries]);
  const available = useMemo(() => LESSONS.filter((l) => !inPlanner.has(l.id)), [inPlanner]);

  const q = query.trim().toLowerCase();
  const shown = available.filter(
    (l) =>
      (level === "all" || l.level === level) &&
      (!q ||
        [l.title.en, l.title.id, l.titleJa ?? "", l.task.en, l.task.id].some((s) =>
          s.toLowerCase().includes(q),
        )),
  );
  const allShownSelected = shown.length > 0 && shown.every((l) => selected.has(l.id));
  const levelHasLessons = (lv: JlptLevel) => LESSONS.some((l) => l.level === lv);

  function toggle(id: string) {
    setSelected((s) => {
      const next = new Set(s);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleAllShown() {
    setSelected((s) => {
      const next = new Set(s);
      for (const l of shown) {
        if (allShownSelected) next.delete(l.id);
        else next.add(l.id);
      }
      return next;
    });
  }

  async function add() {
    // Keep catalog order for the lessons being added.
    const ids = LESSONS.filter((l) => selected.has(l.id)).map((l) => l.id);
    setBusy(true);
    setError(false);
    try {
      await addLessons(ids);
      onClose();
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={t({ en: "Add lessons", id: "Tambah materi" })}
      footer={
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs text-muted tabular-nums">
            {selected.size} {t({ en: "selected", id: "dipilih" })}
          </span>
          <div className="flex gap-2">
            <Button size="sm" variant="secondary" onClick={onClose}>
              {t({ en: "Cancel", id: "Batal" })}
            </Button>
            <Button size="sm" onClick={add} disabled={busy || selected.size === 0}>
              {selected.size > 0
                ? t({ en: `Add ${selected.size} to planner`, id: `Tambah ${selected.size} ke planner` })
                : t({ en: "Add to planner", id: "Tambah ke planner" })}
            </Button>
          </div>
        </div>
      }
    >
      <div className="space-y-3">
        <p className="text-xs text-muted">
          {t({
            en: "New lessons go to the end of your planner, scheduled after your last lesson. Rearrange them in the Order view.",
            id: "Materi baru ditaruh di akhir planner, dijadwalkan setelah materi terakhir. Atur ulang di tampilan Urutan.",
          })}
        </p>

        <input
          id="lesson-picker-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t({ en: "Search lessons", id: "Cari materi" })}
          className="h-9 w-full rounded-xl border border-border bg-surface px-3 text-sm"
        />

        <div className="flex flex-wrap gap-1.5">
          {(["all", ...JLPT_LEVELS] as const).map((lv) => {
            const count =
              lv === "all" ? available.length : available.filter((l) => l.level === lv).length;
            return (
              <button
                key={lv}
                type="button"
                aria-pressed={level === lv}
                onClick={() => setLevel(lv)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                  level === lv
                    ? "border-primary bg-primary text-primary-fg"
                    : "border-border text-muted hover:text-fg",
                )}
              >
                {lv === "all" ? t(STR.filter_all) : lv}{" "}
                <span className="tabular-nums opacity-70">{count}</span>
              </button>
            );
          })}
        </div>

        {shown.length > 0 && (
          <label htmlFor="lesson-picker-all" className="flex items-center gap-2 text-xs text-muted">
            <input
              id="lesson-picker-all"
              type="checkbox"
              checked={allShownSelected}
              onChange={toggleAllShown}
              className="size-4 accent-[var(--primary)]"
            />
            {t({ en: `Select all ${shown.length}`, id: `Pilih semua ${shown.length}` })}
          </label>
        )}

        <ul className="divide-y divide-border rounded-xl border border-border">
          {shown.map((l) => (
            <li key={l.id}>
              <label className="flex cursor-pointer items-center gap-3 px-3 py-2 hover:bg-surface-2">
                <input
                  type="checkbox"
                  checked={selected.has(l.id)}
                  onChange={() => toggle(l.id)}
                  className="size-4 accent-[var(--primary)]"
                />
                <LevelPill level={l.level} />
                <span aria-hidden className="shrink-0">
                  {TYPE_ICON[l.type]}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm">
                    {l.titleJa ? <span className="font-jp">{l.titleJa}</span> : t(l.title)}
                  </span>
                  <span className="block truncate text-xs text-muted">{t(TYPE_LABEL[l.type])}</span>
                </span>
                <StatusDot status={getProgress(l.id).status} />
              </label>
            </li>
          ))}
          {shown.length === 0 && (
            <li className="px-3 py-6 text-center text-sm text-muted">
              {level !== "all" && !levelHasLessons(level)
                ? t({ en: `${level} lessons are coming soon.`, id: `Materi ${level} segera hadir.` })
                : available.length === 0
                  ? t({ en: "Every lesson is already in your planner.", id: "Semua materi sudah ada di planner-mu." })
                  : t(STR.no_results)}
            </li>
          )}
        </ul>

        {error && (
          <p role="alert" className="text-sm text-danger">
            {t({ en: "Couldn't add the lessons — please try again.", id: "Gagal menambah materi — coba lagi." })}
          </p>
        )}
      </div>
    </Modal>
  );
}
