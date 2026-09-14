"use client";

import { useSettings } from "@/context/SettingsContext";
import { Card } from "@/components/ui/Card";
import { PlanSettingsForm } from "./PlanSettingsForm";

export function PlanSetup() {
  const { t } = useSettings();
  return (
    <Card className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">{t({ en: "Set up your plan", id: "Atur rencanamu" })}</h2>
        <p className="mt-1 max-w-prose text-sm text-muted">
          {t({
            en: "Pick when you start, which days you study and how many lessons per day. You can move lessons, skip them or add your own tasks any time afterwards.",
            id: "Pilih kapan mulai, hari apa saja kamu belajar, dan berapa materi per hari. Setelah itu kamu bisa memindah materi, melewatinya, atau menambah tugas sendiri kapan saja.",
          })}
        </p>
      </div>
      <PlanSettingsForm mode="setup" />
    </Card>
  );
}
