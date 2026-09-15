"use client";

import { useCallback, useMemo, useState } from "react";
import { getLesson } from "@/data/lessons";
import { getPreset } from "@/data/presets";
import { useSettings } from "@/context/SettingsContext";
import { useProgress } from "@/context/ProgressContext";
import { usePlan } from "@/context/PlanContext";
import { STR } from "@/lib/strings";
import { TYPE_LABEL, STATUS_LABEL } from "@/lib/labels";
import { formatDate, formatMonthYear } from "@/lib/dates";
import { JLPT_LEVELS, type JlptLevel, type LessonType, type Status } from "@/lib/types";
import type { PlanEntry } from "@/lib/planTypes";
import { Select } from "@/components/ui/Select";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Segmented } from "@/components/ui/Segmented";
import { SignInPrompt } from "@/components/auth/SignInPrompt";
import { EntryRow } from "./EntryRow";
import { LessonPickerModal } from "./LessonPickerModal";
import { OverdueBanner } from "./OverdueBanner";
import { PlanSettingsForm } from "./PlanSettingsForm";
import { PlannerOrder } from "./PlannerOrder";
import { PlannerStart } from "./PlannerStart";
import { TaskModal } from "./TaskModal";
import { plannerName } from "./plannerName";

const TYPES: LessonType[] = [
  "grammar",
  "vocab-kanji",
  "reading",
  "listening",
  "review",
  "test",
  "diagnostic",
  "skill",
];

export function PlannerView() {
  const { hydrated, signedIn, settings } = usePlan();
  const [changing, setChanging] = useState(false);

  if (!hydrated) return <p className="text-sm text-muted">…</p>;

  if (!signedIn) {
    return (
      <div className="space-y-5">
        <SignInPrompt
          message={{
            en: "Sign in to start a planner: pick a preset or build your own, choose your study days, rearrange lessons and save your progress.",
            id: "Masuk untuk memulai planner: pilih preset atau susun sendiri, tentukan hari belajar, atur ulang materi, dan simpan progresmu.",
          }}
        />
        <PlannerStart readOnly />
      </div>
    );
  }

  if (!settings) return <PlannerStart />;

  if (changing) {
    return (
      <PlannerStart
        replacing
        onCancel={() => setChanging(false)}
        onCreated={() => setChanging(false)}
      />
    );
  }

  return <PlannerWorkspace onChangePlanner={() => setChanging(true)} />;
}

function PlannerWorkspace({ onChangePlanner }: { onChangePlanner: () => void }) {
  const { t } = useSettings();
  const { getProgress } = useProgress();
  const { settings, lessonEntries } = usePlan();
  const [view, setView] = useState<"calendar" | "order">("calendar");
  const [taskModal, setTaskModal] = useState<{ open: boolean; task: PlanEntry | null }>({
    open: false,
    task: null,
  });
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);

  if (!settings) return null;
  const preset = getPreset(settings.presetId);
  const active = lessonEntries.filter((e) => !e.skipped);
  const done = active.filter((e) => getProgress(e.lessonId!).status === "done").length;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-semibold">{plannerName(settings, t)}</h2>
            <Pill tone={preset ? "primary" : "neutral"}>
              {preset ? t({ en: "Preset", id: "Preset" }) : t({ en: "Custom", id: "Kustom" })}
            </Pill>
          </div>
          <p className="text-sm text-muted tabular-nums">
            {done}/{active.length} {t(STR.lessons_done)}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="secondary" onClick={() => setPickerOpen(true)}>
            + {t({ en: "Add lessons", id: "Tambah materi" })}
          </Button>
          <Button size="sm" variant="secondary" onClick={() => setTaskModal({ open: true, task: null })}>
            + {t({ en: "Add task", id: "Tambah tugas" })}
          </Button>
          <Button size="sm" variant="secondary" onClick={() => setSettingsOpen(true)}>
            {t({ en: "Planner settings", id: "Pengaturan planner" })}
          </Button>
        </div>
      </div>

      <Segmented
        ariaLabel={t({ en: "Planner view", id: "Tampilan planner" })}
        value={view}
        onChange={setView}
        options={[
          { value: "calendar", label: t({ en: "Calendar", id: "Kalender" }) },
          { value: "order", label: t({ en: "Order", id: "Urutan" }) },
        ]}
      />

      {view === "calendar" ? (
        <PlannerCalendar onEditTask={(task) => setTaskModal({ open: true, task })} />
      ) : (
        <PlannerOrder onAddLessons={() => setPickerOpen(true)} />
      )}

      <TaskModal
        open={taskModal.open}
        task={taskModal.task}
        onClose={() => setTaskModal({ open: false, task: null })}
      />
      <LessonPickerModal open={pickerOpen} onClose={() => setPickerOpen(false)} />
      <Modal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        title={t({ en: "Planner settings", id: "Pengaturan planner" })}
      >
        <div className="space-y-5">
          <PlanSettingsForm mode="edit" onDone={() => setSettingsOpen(false)} />
          <div className="space-y-2 border-t border-border pt-4">
            <p className="text-sm font-medium">
              {t({ en: "Start a different planner", id: "Mulai planner lain" })}
            </p>
            <p className="text-xs text-muted">
              {t({
                en: "Pick another preset or build your own. This replaces the current schedule and custom tasks; your lesson progress is kept.",
                id: "Pilih preset lain atau susun sendiri. Ini menggantikan jadwal dan tugas pribadi sekarang; progres materimu tetap tersimpan.",
              })}
            </p>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                setSettingsOpen(false);
                onChangePlanner();
              }}
            >
              {t({ en: "Choose a planner", id: "Pilih planner" })}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

type DateGroup = { date: string; entries: PlanEntry[] };
type MonthGroup = { key: string; dates: DateGroup[] };

function PlannerCalendar({ onEditTask }: { onEditTask: (task: PlanEntry) => void }) {
  const { t, lang } = useSettings();
  const { getProgress } = useProgress();
  const { entries, today } = usePlan();
  const [level, setLevel] = useState<JlptLevel | "all">("all");
  const [type, setType] = useState<LessonType | "all">("all");
  const [status, setStatus] = useState<Status | "all">("all");

  const statusOf = useCallback(
    (e: PlanEntry): Status =>
      e.lessonId != null ? getProgress(e.lessonId).status : e.done ? "done" : "not-yet",
    [getProgress],
  );

  const levelsInPlanner = useMemo(
    () => JLPT_LEVELS.filter((lv) => entries.some((e) => getLesson(e.lessonId)?.level === lv)),
    [entries],
  );

  const months = useMemo(() => {
    const out: MonthGroup[] = [];
    for (const e of entries) {
      if (e.skipped) continue;
      const lesson = getLesson(e.lessonId);
      // Custom tasks have no level/type, so they only show when those filters are off.
      if (level !== "all" && lesson?.level !== level) continue;
      if (type !== "all" && lesson?.type !== type) continue;
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
  }, [entries, level, type, status, statusOf]);

  const skipped = entries.filter((e) => e.skipped);

  return (
    <div className="space-y-5">
      <OverdueBanner />

      <div className="flex flex-wrap items-center gap-2">
        {levelsInPlanner.length > 1 && (
          <Select
            id="calendar-level"
            value={level}
            onChange={(e) => setLevel(e.target.value as JlptLevel | "all")}
          >
            <option value="all">
              {t(STR.filter_level)}: {t(STR.filter_all)}
            </option>
            {levelsInPlanner.map((lv) => (
              <option key={lv} value={lv}>
                {lv}
              </option>
            ))}
          </Select>
        )}
        <Select
          id="calendar-type"
          value={type}
          onChange={(e) => setType(e.target.value as LessonType | "all")}
        >
          <option value="all">
            {t(STR.filter_type)}: {t(STR.filter_all)}
          </option>
          {TYPES.map((ty) => (
            <option key={ty} value={ty}>
              {t(TYPE_LABEL[ty])}
            </option>
          ))}
        </Select>
        <Select
          id="calendar-status"
          value={status}
          onChange={(e) => setStatus(e.target.value as Status | "all")}
        >
          <option value="all">
            {t(STR.filter_status)}: {t(STR.filter_all)}
          </option>
          {(["not-yet", "partial", "done"] as Status[]).map((s) => (
            <option key={s} value={s}>
              {t(STATUS_LABEL[s])}
            </option>
          ))}
        </Select>
      </div>

      {entries.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted">
          {t({
            en: "Nothing scheduled yet. Add lessons or a task to fill your calendar.",
            id: "Belum ada jadwal. Tambahkan materi atau tugas untuk mengisi kalendermu.",
          })}
        </p>
      ) : (
        months.length === 0 && (
          <p className="rounded-xl border border-border bg-surface p-6 text-center text-sm text-muted">
            {t(STR.no_results)}
          </p>
        )
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
                      {overdue && <Pill tone="warning">{t({ en: "Overdue", id: "Terlambat" })}</Pill>}
                    </div>
                  )}
                  <div className="space-y-1">
                    {group.entries.map((e) => (
                      <EntryRow key={e.id} entry={e} isToday={isToday} onEditTask={onEditTask} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {skipped.length > 0 && (
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
    </div>
  );
}
