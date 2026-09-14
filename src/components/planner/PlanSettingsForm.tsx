"use client";

import { useMemo, useState } from "react";
import { useSettings } from "@/context/SettingsContext";
import { usePlan } from "@/context/PlanContext";
import { PLANNER } from "@/data/planner";
import { ALL_WEEKDAYS, MAX_PER_DAY, buildSchedule, isISODate, todayISO } from "@/lib/schedule";
import { formatDateLong } from "@/lib/dates";
import type { PlanSettings } from "@/lib/planTypes";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { cn } from "@/lib/cn";

const WEEKDAY_SHORT = {
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  id: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
};
/** Monday-first display order. */
const DISPLAY_ORDER = [1, 2, 3, 4, 5, 6, 0];

export function PlanSettingsForm({
  mode,
  onDone,
}: {
  mode: "setup" | "edit";
  onDone?: () => void;
}) {
  const { t, lang } = useSettings();
  const { settings, entries, today, saveSettings } = usePlan();
  const [form, setForm] = useState<PlanSettings>(
    () => settings ?? { startDate: today ?? todayISO(), studyDays: ALL_WEEKDAYS, perDay: 1 },
  );
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const valid = isISODate(form.startDate);

  const finish = useMemo(() => {
    if (!valid) return null;
    const skipped = new Set(entries.filter((e) => e.skipped).map((e) => e.materialDay));
    const days = PLANNER.map((d) => d.day).filter((d) => !skipped.has(d));
    if (days.length === 0) return null;
    return buildSchedule(days, form.startDate, form.studyDays, form.perDay).get(days[days.length - 1]) ?? null;
  }, [form, entries, valid]);

  function toggleWeekday(wd: number) {
    setForm((f) => {
      const next = f.studyDays ^ (1 << wd);
      return next === 0 ? f : { ...f, studyDays: next }; // keep at least one day
    });
  }

  async function submit(rebuild: boolean) {
    if (
      rebuild &&
      mode === "edit" &&
      !confirm(
        t({
          en: "Rebuild the schedule? Lessons you moved by hand go back into order from the start date.",
          id: "Susun ulang jadwal? Materi yang kamu pindahkan manual akan kembali berurutan dari tanggal mulai.",
        }),
      )
    ) {
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await saveSettings(form, rebuild);
      onDone?.();
    } catch {
      setError(t({ en: "Couldn't save — please try again.", id: "Gagal menyimpan — coba lagi." }));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-4">
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-muted">
          {t({ en: "Start date", id: "Tanggal mulai" })}
        </span>
        <input
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

      {finish && (
        <p className="text-xs text-muted">
          {t({ en: "At this pace you finish on", id: "Dengan ritme ini kamu selesai pada" })}{" "}
          <b className="text-fg">{formatDateLong(finish, lang)}</b>.
        </p>
      )}

      {error && <p className="text-xs text-danger">{error}</p>}

      <div className="flex flex-wrap gap-2">
        {mode === "setup" ? (
          <Button onClick={() => submit(true)} disabled={busy || !valid}>
            {t({ en: "Create my plan", id: "Buat rencanaku" })}
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

      {mode === "edit" && (
        <p className="text-xs text-muted">
          {t({
            en: "“Save only” keeps every lesson on its current date (study days are still used when you push lessons later). “Rebuild” lays all lessons out again from the start date. Custom tasks and skipped lessons are never touched.",
            id: "“Simpan saja” membiarkan setiap materi di tanggalnya sekarang (hari belajar tetap dipakai saat kamu menggeser materi nanti). “Susun ulang” mengatur ulang semua materi dari tanggal mulai. Tugas pribadi dan materi yang dilewati tidak diubah.",
          })}
        </p>
      )}
    </div>
  );
}
