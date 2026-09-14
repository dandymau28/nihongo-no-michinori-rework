"use client";

import { useMemo, useState } from "react";
import { getDay as getMaterial } from "@/data/planner";
import { useSettings } from "@/context/SettingsContext";
import { useProgress } from "@/context/ProgressContext";
import { usePlan } from "@/context/PlanContext";
import { STR } from "@/lib/strings";
import { PHASE_LABEL, TYPE_LABEL, STATUS_LABEL } from "@/lib/labels";
import { formatDate, formatMonthYear } from "@/lib/dates";
import type { DayType, Phase, Status } from "@/lib/types";
import type { PlanEntry } from "@/lib/planTypes";
import { Select } from "@/components/ui/Select";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { SignInPrompt } from "@/components/auth/SignInPrompt";
import { EntryRow } from "./EntryRow";
import { OverdueBanner } from "./OverdueBanner";
import { PlanSetup } from "./PlanSetup";
import { PlanSettingsForm } from "./PlanSettingsForm";
import { TaskModal } from "./TaskModal";

const TYPES: DayType[] = [
  "grammar",
  "vocab-kanji",
  "reading",
  "listening",
  "review",
  "test",
  "diagnostic",
  "skill",
];

type DateGroup = { date: string; entries: PlanEntry[] };
type MonthGroup = { key: string; dates: DateGroup[] };

export function PlannerView() {
  const { t, lang } = useSettings();
  const { getDay: getProgress } = useProgress();
  const { entries, today, isPreview, settings, hydrated } = usePlan();

  const [phase, setPhase] = useState<Phase | "all">("all");
  const [type, setType] = useState<DayType | "all">("all");
  const [status, setStatus] = useState<Status | "all">("all");
  const [taskModal, setTaskModal] = useState<{ open: boolean; task: PlanEntry | null }>({
    open: false,
    task: null,
  });
  const [settingsOpen, setSettingsOpen] = useState(false);

  const statusOf = useMemo(
    () =>
      (e: PlanEntry): Status =>
        e.materialDay != null ? getProgress(e.materialDay).status : e.done ? "done" : "not-yet",
    [getProgress],
  );

  const months = useMemo(() => {
    const out: MonthGroup[] = [];
    for (const e of entries) {
      if (e.skipped) continue;
      const m = e.materialDay != null ? getMaterial(e.materialDay) : undefined;
      // Custom tasks have no phase/type, so they only show when those filters are off.
      if (phase !== "all" && m?.phase !== phase) continue;
      if (type !== "all" && m?.type !== type) continue;
      if (status !== "all" && statusOf(e) !== status) continue;

      const date = e.date ?? "";
      const key = date.slice(0, 7);
      let month = out[out.length - 1];
      if (!month || month.key !== key) out.push((month = { key, dates: [] }));
      let group = month.dates[month.dates.length - 1];
      if (!group || group.date !== date) month.dates.push((group = { date, entries: [] }));
      group.entries.push(e);
    }
    return out;
  }, [entries, phase, type, status, statusOf]);

  const skipped = entries.filter((e) => e.skipped);

  if (!hydrated) return <p className="text-sm text-muted">…</p>;
  if (!isPreview && !settings) return <PlanSetup />;

  return (
    <div className="space-y-5">
      {isPreview ? (
        <SignInPrompt
          message={{
            en: "This is the default plan, starting today. Sign in to choose your own start date and study days, move lessons around, add your own tasks and save your progress.",
            id: "Ini rencana bawaan yang dimulai hari ini. Masuk untuk memilih tanggal mulai dan hari belajarmu sendiri, memindah materi, menambah tugas, dan menyimpan progres.",
          }}
        />
      ) : (
        <OverdueBanner />
      )}

      <div className="flex flex-wrap items-center gap-2">
        <Select value={phase} onChange={(e) => setPhase(e.target.value as Phase | "all")}>
          <option value="all">{t(STR.filter_phase)}: {t(STR.filter_all)}</option>
          {(["n5-refresher", "n4-core", "exam-sprint"] as Phase[]).map((p) => (
            <option key={p} value={p}>
              {t(PHASE_LABEL[p])}
            </option>
          ))}
        </Select>

        <Select value={type} onChange={(e) => setType(e.target.value as DayType | "all")}>
          <option value="all">{t(STR.filter_type)}: {t(STR.filter_all)}</option>
          {TYPES.map((ty) => (
            <option key={ty} value={ty}>
              {t(TYPE_LABEL[ty])}
            </option>
          ))}
        </Select>

        <Select value={status} onChange={(e) => setStatus(e.target.value as Status | "all")}>
          <option value="all">{t(STR.filter_status)}: {t(STR.filter_all)}</option>
          {(["not-yet", "partial", "done"] as Status[]).map((s) => (
            <option key={s} value={s}>
              {t(STATUS_LABEL[s])}
            </option>
          ))}
        </Select>

        {!isPreview && (
          <div className="flex gap-2 sm:ml-auto">
            <Button size="sm" variant="secondary" onClick={() => setTaskModal({ open: true, task: null })}>
              + {t({ en: "Add task", id: "Tambah tugas" })}
            </Button>
            <Button size="sm" variant="secondary" onClick={() => setSettingsOpen(true)}>
              {t({ en: "Plan settings", id: "Pengaturan rencana" })}
            </Button>
          </div>
        )}
      </div>

      {months.length === 0 && (
        <p className="rounded-xl border border-border bg-surface p-6 text-center text-sm text-muted">
          {t(STR.no_results)}
        </p>
      )}

      {months.map((month) => (
        <section key={month.key || "unscheduled"}>
          <div className="mb-2 flex items-center gap-2">
            <h2 className="text-sm font-semibold">
              {month.key
                ? formatMonthYear(`${month.key}-01`, lang)
                : t({ en: "Unscheduled", id: "Belum dijadwalkan" })}
            </h2>
            <span className="text-xs text-muted">
              {month.dates.reduce((n, d) => n + d.entries.length, 0)} {t({ en: "items", id: "item" })}
            </span>
          </div>
          <div className="space-y-2">
            {month.dates.map((group) => {
              const isToday = group.date === today;
              const overdue =
                !!today &&
                !!group.date &&
                group.date < today &&
                group.entries.some((e) => statusOf(e) !== "done");
              return (
                <div key={group.date || "none"}>
                  {group.date && (
                    <div className="flex items-center gap-2 px-3 pb-1">
                      <span className="text-xs font-medium text-muted">{formatDate(group.date, lang)}</span>
                      {isToday && <Pill tone="primary">{t(STR.today)}</Pill>}
                      {overdue && !isPreview && (
                        <Pill tone="warning">{t({ en: "Overdue", id: "Terlambat" })}</Pill>
                      )}
                    </div>
                  )}
                  <div className="space-y-1">
                    {group.entries.map((e) => (
                      <EntryRow
                        key={e.id}
                        entry={e}
                        isToday={isToday}
                        onEditTask={(task) => setTaskModal({ open: true, task })}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {!isPreview && skipped.length > 0 && (
        <details className="rounded-2xl border border-border bg-surface p-3">
          <summary className="cursor-pointer text-sm font-semibold">
            {t({ en: "Skipped lessons", id: "Materi yang dilewati" })} ({skipped.length})
          </summary>
          <div className="mt-2 space-y-1">
            {skipped.map((e) => (
              <EntryRow key={e.id} entry={e} />
            ))}
          </div>
        </details>
      )}

      <TaskModal
        open={taskModal.open}
        task={taskModal.task}
        onClose={() => setTaskModal({ open: false, task: null })}
      />
      <Modal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        title={t({ en: "Plan settings", id: "Pengaturan rencana" })}
      >
        <PlanSettingsForm mode="edit" onDone={() => setSettingsOpen(false)} />
      </Modal>
    </div>
  );
}
