"use client";

import { useMemo, useState } from "react";
import { useSettings } from "@/context/SettingsContext";
import { PlannerExistsError, usePlan } from "@/context/PlanContext";
import { ALL_WEEKDAYS, MAX_PER_DAY, buildSchedule, isISODate, todayISO } from "@/lib/schedule";
import { formatDateLong } from "@/lib/dates";
import type { Plan, PlannerSource, ScheduleSettings } from "@/lib/planTypes";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { cn } from "@/lib/cn";
import { plannerName } from "./plannerName";
import { ReplacePlannerDialog } from "./ReplacePlannerDialog";

const WEEKDAY_SHORT = {
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  id: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
};
/** Monday-first display order. */
const DISPLAY_ORDER = [1, 2, 3, 4, 5, 6, 0];

type Props =
  | {
      mode: "create";
      source: PlannerSource;
      /** How many lessons the new planner starts with (for the finish estimate). */
      lessonCount: number;
      /** Show a name field (custom planners). */
      askName?: boolean;
      onDone?: () => void;
    }
  | { mode: "edit"; onDone?: () => void };

export function PlanSettingsForm(props: Props) {
  const { t, lang } = useSettings();
  const { settings, entries, lessonEntries, today, saveSettings, createPlanner, reload } = usePlan();
  const editing = props.mode === "edit";

  const [form, setForm] = useState<ScheduleSettings>(() =>
    editing && settings
      ? { startDate: settings.startDate, studyDays: settings.studyDays, perDay: settings.perDay }
      : { startDate: today ?? todayISO(), studyDays: ALL_WEEKDAYS, perDay: 1 },
  );
  const [name, setName] = useState(editing ? (settings?.name ?? "") : "");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  /** Asking before the new planner replaces `current` (`elsewhere`: started in another tab or device). */
  const [replacing, setReplacing] = useState<{ current: Plan; elsewhere: boolean } | null>(null);

  const valid = isISODate(form.startDate);
  const count =
    props.mode === "create" ? props.lessonCount : lessonEntries.filter((e) => !e.skipped).length;

  const finish = useMemo(() => {
    if (!valid || count === 0) return null;
    const slots = Array.from({ length: count }, (_, i) => i);
    return buildSchedule(slots, form.startDate, form.studyDays, form.perDay).get(count - 1) ?? null;
  }, [form, count, valid]);

  const showName = props.mode === "edit" || props.askName;
  const namePlaceholder =
    editing && settings
      ? plannerName({ name: null, presetId: settings.presetId }, t)
      : t({ en: "My planner", id: "Planner saya" });

  function toggleWeekday(wd: number) {
    setForm((f) => {
      const next = f.studyDays ^ (1 << wd);
      return next === 0 ? f : { ...f, studyDays: next }; // keep at least one day
    });
  }

  async function submit(rebuild: boolean) {
    if (
      props.mode === "edit" &&
      rebuild &&
      !confirm(
        t({
          en: "Rebuild the schedule? Every lesson is laid out again in your order from the start date, including lessons you moved by hand.",
          id: "Susun ulang jadwal? Semua materi diatur ulang sesuai urutanmu dari tanggal mulai, termasuk yang kamu pindahkan manual.",
        }),
      )
    ) {
      return;
    }
    if (props.mode === "create" && settings) {
      // One planner per learner — starting another replaces it, so ask first.
      setReplacing({ current: { settings, entries }, elsewhere: false });
      return;
    }
    await save(rebuild, false);
  }

  async function save(rebuild: boolean, replace: boolean) {
    setBusy(true);
    setError(null);
    try {
      if (props.mode === "create") {
        await createPlanner({ ...form, name: name.trim() || null, source: props.source, replace });
      } else {
        await saveSettings({ ...form, name: name.trim() || null }, rebuild);
      }
      setReplacing(null);
      props.onDone?.();
    } catch (e) {
      if (e instanceof PlannerExistsError) {
        setReplacing({ current: e.current, elsewhere: true });
      } else {
        setReplacing(null);
        setError(t({ en: "Couldn't save — please try again.", id: "Gagal menyimpan — coba lagi." }));
      }
    } finally {
      setBusy(false);
    }
  }

  function keepCurrentPlanner() {
    const elsewhere = replacing?.elsewhere;
    setReplacing(null);
    // This page didn't know about that planner yet — load it so the learner sees it.
    if (elsewhere) void reload();
  }

  return (
    <div className="space-y-4">
      {showName && (
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted">
            {t({ en: "Planner name", id: "Nama planner" })}
          </span>
          <input
            id="planner-name"
            value={name}
            maxLength={80}
            onChange={(e) => setName(e.target.value)}
            placeholder={namePlaceholder}
            className="h-9 w-full max-w-sm rounded-xl border border-border bg-surface px-3 text-sm"
          />
        </label>
      )}

      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-muted">
          {t({ en: "Start date", id: "Tanggal mulai" })}
        </span>
        <input
          id="planner-start-date"
          type="date"
          value={form.startDate}
          onChange={(e) => setForm((f) => ({ ...f, startDate: e.target.value }))}
          className="h-9 rounded-xl border border-border bg-surface px-3 text-sm"
        />
      </label>

      <div>
        <span className="mb-1.5 block text-xs font-medium text-muted">
          {t({ en: "Study days", id: "Hari belajar" })}
        </span>
        <div className="flex flex-wrap gap-1.5">
          {DISPLAY_ORDER.map((wd) => {
            const on = (form.studyDays & (1 << wd)) !== 0;
            return (
              <button
                key={wd}
                type="button"
                aria-pressed={on}
                onClick={() => toggleWeekday(wd)}
                className={cn(
                  "h-9 w-12 rounded-xl border text-sm font-medium transition-colors",
                  on
                    ? "border-primary bg-primary text-primary-fg"
                    : "border-border bg-surface text-muted hover:text-fg",
                )}
              >
                {WEEKDAY_SHORT[lang][wd]}
              </button>
            );
          })}
        </div>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-muted">
          {t({ en: "Lessons per study day", id: "Materi per hari belajar" })}
        </span>
        <Select
          id="planner-per-day"
          value={form.perDay}
          onChange={(e) => setForm((f) => ({ ...f, perDay: Number(e.target.value) }))}
        >
          {Array.from({ length: MAX_PER_DAY }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </Select>
      </label>

      {finish ? (
        <p className="text-xs text-muted">
          {t({ en: `${count} lessons — at this pace you finish on`, id: `${count} materi — dengan ritme ini kamu selesai pada` })}{" "}
          <b className="text-fg">{formatDateLong(finish, lang)}</b>.
        </p>
      ) : (
        props.mode === "create" && (
          <p className="text-xs text-muted">
            {t({
              en: "You'll add lessons after creating the planner — they're scheduled with these settings.",
              id: "Kamu akan menambah materi setelah planner dibuat — materi dijadwalkan dengan pengaturan ini.",
            })}
          </p>
        )
      )}

      {error && <p className="text-xs text-danger">{error}</p>}

      <div className="flex flex-wrap gap-2">
        {props.mode === "create" ? (
          <Button onClick={() => submit(true)} disabled={busy || !valid}>
            {t({ en: "Start this planner", id: "Mulai planner ini" })}
          </Button>
        ) : (
          <>
            <Button size="sm" onClick={() => submit(true)} disabled={busy || !valid}>
              {t({ en: "Save & rebuild schedule", id: "Simpan & susun ulang jadwal" })}
            </Button>
            <Button size="sm" variant="secondary" onClick={() => submit(false)} disabled={busy || !valid}>
              {t({ en: "Save only", id: "Simpan saja" })}
            </Button>
          </>
        )}
      </div>

      {props.mode === "edit" && (
        <p className="text-xs text-muted">
          {t({
            en: "“Save only” keeps every lesson on its current date (study days and pace are used when lessons are added, reordered or pushed). “Rebuild” lays all lessons out again in your order from the start date. Custom tasks and skipped lessons are never touched.",
            id: "“Simpan saja” membiarkan setiap materi di tanggalnya sekarang (hari belajar dan ritme dipakai saat materi ditambah, diurutkan ulang, atau digeser). “Susun ulang” mengatur ulang semua materi sesuai urutanmu dari tanggal mulai. Tugas pribadi dan materi yang dilewati tidak diubah.",
          })}
        </p>
      )}

      {props.mode === "create" && (
        <ReplacePlannerDialog
          current={replacing?.current ?? null}
          elsewhere={replacing?.elsewhere ?? false}
          newName={plannerName(
            {
              name: name.trim() || null,
              presetId: "presetId" in props.source ? props.source.presetId : null,
            },
            t,
          )}
          busy={busy}
          onConfirm={() => save(true, true)}
          onCancel={keepCurrentPlanner}
        />
      )}
    </div>
  );
}
