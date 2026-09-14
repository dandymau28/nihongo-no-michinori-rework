"use client";

import { useState } from "react";
import { useSettings } from "@/context/SettingsContext";
import { useProgress } from "@/context/ProgressContext";
import { isEntryDone, usePlan } from "@/context/PlanContext";
import { formatDate } from "@/lib/dates";
import { stepsToReach } from "@/lib/schedule";
import { Button } from "@/components/ui/Button";

/** Offers to push the unfinished part of the plan forward so it resumes today. */
export function OverdueBanner() {
  const { t, lang } = useSettings();
  const { getDay } = useProgress();
  const { entries, today, settings, shift } = usePlan();
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);

  if (!today || !settings) return null;
  const overdue = entries.filter(
    (e) => !e.skipped && e.date && e.date < today && !isEntryDone(e, getDay),
  );
  if (overdue.length === 0) return null;

  const earliest = overdue[0].date!; // entries are date-sorted
  const steps = stepsToReach(earliest, today, settings.studyDays);

  async function resume() {
    setBusy(true);
    setFailed(false);
    try {
      await shift(earliest, steps);
    } catch {
      setFailed(true);
    } finally {
      setBusy(false);
    }
  }

  const from = formatDate(earliest, lang);
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-warning/40 bg-warning-soft/50 p-4">
      <div className="min-w-0 flex-1 basis-60">
        <p className="text-sm font-medium">
          {t({
            en: `${overdue.length} unfinished ${overdue.length === 1 ? "item is" : "items are"} overdue`,
            id: `${overdue.length} item belum selesai sudah lewat tanggalnya`,
          })}
        </p>
        <p className="text-xs text-muted">
          {t({
            en: `Push everything unfinished from ${from} onward forward by ${steps} study ${steps === 1 ? "day" : "days"}, so your plan picks up again today.`,
            id: `Geser semua yang belum selesai mulai ${from} maju ${steps} hari belajar, supaya rencanamu lanjut lagi hari ini.`,
          })}
        </p>
        {failed && (
          <p className="text-xs text-danger">
            {t({ en: "Couldn't update the plan — please try again.", id: "Gagal memperbarui rencana — coba lagi." })}
          </p>
        )}
      </div>
      <Button size="sm" onClick={resume} disabled={busy}>
        {t({ en: "Resume from today", id: "Lanjutkan dari hari ini" })}
      </Button>
    </div>
  );
}
