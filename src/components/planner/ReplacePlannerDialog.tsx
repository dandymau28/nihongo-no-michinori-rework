"use client";

import { useSettings } from "@/context/SettingsContext";
import { useProgress } from "@/context/ProgressContext";
import type { Plan } from "@/lib/planTypes";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { plannerName } from "./plannerName";

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

/** Each learner has one planner, so starting a new one asks before replacing the current one. */
export function ReplacePlannerDialog({
  current,
  elsewhere,
  newName,
  busy,
  onConfirm,
  onCancel,
}: {
  /** The planner that would be replaced; null keeps the dialog closed. */
  current: Plan | null;
  /** The current planner was started in another tab or on another device. */
  elsewhere: boolean;
  newName: string;
  busy: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const { t } = useSettings();
  const { getProgress } = useProgress();
  if (!current?.settings) return null;

  const currentName = plannerName(current.settings, t);
  const lessons = current.entries.filter((e) => e.lessonId != null);
  const tasks = current.entries.length - lessons.length;
  const done = lessons.filter((e) => getProgress(e.lessonId!).status === "done").length;

  const removedEn = [
    lessons.length > 0 && `the schedule for ${plural(lessons.length, "lesson", "lessons")}`,
    tasks > 0 && plural(tasks, "custom task", "custom tasks"),
  ].filter(Boolean);
  const removedId = [
    lessons.length > 0 && `jadwal ${lessons.length} materi`,
    tasks > 0 && `${tasks} tugas pribadi`,
  ].filter(Boolean);

  return (
    <ConfirmDialog
      open
      title={t({ en: "Replace your planner?", id: "Ganti planner-mu?" })}
      confirmLabel={
        busy
          ? t({ en: "Replacing…", id: "Mengganti…" })
          : t({ en: "Replace planner", id: "Ganti planner" })
      }
      cancelLabel={t({ en: "Keep current planner", id: "Tetap pakai planner sekarang" })}
      busy={busy}
      onConfirm={onConfirm}
      onCancel={onCancel}
    >
      <p>
        {elsewhere
          ? t({
              en: `Your account already has a planner, “${currentName}”, started in another tab or on another device. Starting “${newName}” replaces it.`,
              id: `Akunmu sudah punya planner, “${currentName}”, yang dimulai di tab atau perangkat lain. Memulai “${newName}” akan menggantikannya.`,
            })
          : t({
              en: `You can have one planner at a time. Starting “${newName}” replaces “${currentName}”.`,
              id: `Kamu hanya bisa punya satu planner. Memulai “${newName}” akan menggantikan “${currentName}”.`,
            })}
      </p>
      <ul className="space-y-2">
        <li className="rounded-xl bg-warning-soft px-3 py-2">
          <b className="font-medium">{t({ en: "Removed:", id: "Dihapus:" })}</b>{" "}
          {t({
            en: removedEn.length ? `${removedEn.join(" and ")}.` : "an empty planner.",
            id: removedId.length ? `${removedId.join(" dan ")}.` : "planner kosong.",
          })}
        </li>
        <li className="rounded-xl bg-surface-2 px-3 py-2">
          <b className="font-medium">{t({ en: "Kept:", id: "Tetap tersimpan:" })}</b>{" "}
          {t({
            en: `progress, notes and scores for every lesson${done > 0 ? ` (${done} done in this planner)` : ""}.`,
            id: `progres, catatan, dan skor setiap materi${done > 0 ? ` (${done} selesai di planner ini)` : ""}.`,
          })}
        </li>
      </ul>
      <p className="text-xs text-muted">
        {t({ en: "This can't be undone.", id: "Ini tidak bisa dibatalkan." })}
      </p>
    </ConfirmDialog>
  );
}
