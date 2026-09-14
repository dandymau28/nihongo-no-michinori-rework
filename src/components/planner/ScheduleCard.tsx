"use client";

import { useEffect, useState } from "react";
import { useSettings } from "@/context/SettingsContext";
import { usePlan } from "@/context/PlanContext";
import { formatDateLong } from "@/lib/dates";
import { isISODate } from "@/lib/schedule";
import type { PlanEntry } from "@/lib/planTypes";
import { Button } from "@/components/ui/Button";

/** Where this lesson sits in the learner's own calendar, with a quick move / skip. */
export function ScheduleCard({ entry }: { entry: PlanEntry }) {
  const { t, lang } = useSettings();
  const { today, updateEntry } = usePlan();
  const [pick, setPick] = useState(entry.date ?? today ?? "");

  useEffect(() => {
    setPick(entry.date ?? today ?? "");
  }, [entry.date, today]);

  const unchanged = pick === entry.date && !entry.skipped;

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border bg-surface-2 px-3 py-2 text-sm">
      <span className="text-muted">
        {entry.skipped || !entry.date ? (
          t({ en: "Skipped — pick a date to bring it back", id: "Dilewati — pilih tanggal untuk mengembalikannya" })
        ) : (
          <>
            {t({ en: "Scheduled for", id: "Dijadwalkan pada" })}{" "}
            <b className="text-fg">{formatDateLong(entry.date, lang)}</b>
            {entry.date === today && ` · ${t({ en: "today", id: "hari ini" })}`}
          </>
        )}
      </span>
      <div className="flex items-center gap-1.5 sm:ml-auto">
        <input
          type="date"
          value={pick}
          onChange={(e) => setPick(e.target.value)}
          aria-label={t({ en: "Move to date", id: "Pindah ke tanggal" })}
          className="h-8 rounded-lg border border-border bg-surface px-2 text-sm"
        />
        <Button
          size="sm"
          variant="secondary"
          disabled={!isISODate(pick) || unchanged}
          onClick={() => updateEntry(entry.id, { date: pick, skipped: false })}
        >
          {t({ en: "Move", id: "Pindah" })}
        </Button>
        {!entry.skipped && (
          <Button size="sm" variant="ghost" onClick={() => updateEntry(entry.id, { skipped: true })}>
            {t({ en: "Skip", id: "Lewati" })}
          </Button>
        )}
      </div>
    </div>
  );
}
