"use client";

import { useEffect, useState } from "react";
import { track } from "@/lib/telemetry";
import { LESSONS } from "@/data/lessons";
import { PRESETS, presetLessonIds, type PlannerPreset } from "@/data/presets";
import { useSettings } from "@/context/SettingsContext";
import { JLPT_LEVELS } from "@/lib/types";
import type { PlannerSource } from "@/lib/planTypes";
import { Card } from "@/components/ui/Card";
import { Button, ButtonLink } from "@/components/ui/Button";
import { LevelPill, Pill } from "@/components/ui/Pill";
import { PlanSettingsForm } from "./PlanSettingsForm";

type Choice = { kind: "preset"; preset: PlannerPreset } | { kind: "custom" };

/** Pick a preset or "build your own", then set the schedule. Guests see it read-only. */
export function PlannerStart({
  readOnly = false,
  replacing = false,
  onCancel,
  onCreated,
}: {
  readOnly?: boolean;
  /** The learner already has a planner that this will replace. */
  replacing?: boolean;
  onCancel?: () => void;
  onCreated?: () => void;
}) {
  const { t } = useSettings();
  const [choice, setChoice] = useState<Choice | null>(null);

  // The top of the planner funnel: seeing the choices, then picking one.
  useEffect(() => {
    track("planner.viewed", { feature: "planner", props: { readOnly, replacing } });
  }, [readOnly, replacing]);
  const comingLevels = JLPT_LEVELS.filter((lv) => !LESSONS.some((l) => l.level === lv));

  if (choice && !readOnly) {
    const source: PlannerSource =
      choice.kind === "preset" ? { presetId: choice.preset.id } : { lessonIds: [] };
    return (
      <Card className="space-y-4">
        <button
          type="button"
          onClick={() => setChoice(null)}
          className="text-sm text-muted hover:text-fg"
        >
          ← {t({ en: "Choose a different planner", id: "Pilih planner lain" })}
        </button>
        <div>
          <h2 className="text-lg font-semibold">
            {choice.kind === "preset"
              ? t(choice.preset.title)
              : t({ en: "Build your own planner", id: "Susun planner sendiri" })}
          </h2>
          <p className="mt-1 max-w-prose text-sm text-muted">
            {choice.kind === "preset"
              ? t(choice.preset.summary)
              : t({
                  en: "Start with an empty planner, then add single lessons from any level in the order you like.",
                  id: "Mulai dengan planner kosong, lalu tambahkan materi satuan dari level mana pun sesuai urutan yang kamu mau.",
                })}
          </p>
        </div>
        {replacing && (
          <p className="rounded-xl bg-warning-soft px-3 py-2 text-sm">
            {t({
              en: "This replaces your current planner — its schedule and custom tasks. Your lesson progress is kept.",
              id: "Ini menggantikan planner-mu sekarang — jadwal dan tugas pribadinya. Progres materimu tetap tersimpan.",
            })}
          </p>
        )}
        <PlanSettingsForm
          mode="create"
          source={source}
          lessonCount={choice.kind === "preset" ? presetLessonIds(choice.preset).length : 0}
          askName={choice.kind === "custom"}
          onDone={onCreated}
        />
      </Card>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">
            {replacing
              ? t({ en: "Choose a new planner", id: "Pilih planner baru" })
              : t({ en: "Start a planner", id: "Mulai planner" })}
          </h2>
          <p className="mt-1 max-w-prose text-sm text-muted">
            {t({
              en: "Follow a ready-made preset, or build your own from single lessons. You can reorder, add or remove lessons at any time.",
              id: "Ikuti preset siap pakai, atau susun sendiri dari materi satuan. Kamu bisa mengubah urutan, menambah, atau menghapus materi kapan saja.",
            })}
          </p>
        </div>
        {onCancel && (
          <Button size="sm" variant="ghost" onClick={onCancel}>
            {t({ en: "Keep my current planner", id: "Tetap pakai planner sekarang" })}
          </Button>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {PRESETS.map((preset) => {
          const count = presetLessonIds(preset).length;
          return (
            <Card key={preset.id} className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                {preset.levels.map((l) => (
                  <LevelPill key={l} level={l} />
                ))}
                <span className="text-xs text-muted tabular-nums">
                  {count} {t({ en: "lessons", id: "materi" })}
                </span>
              </div>
              <div>
                <h3 className="font-semibold">{t(preset.title)}</h3>
                <p className="mt-1 text-sm text-muted">{t(preset.summary)}</p>
              </div>
              {preset.stages.length > 1 && (
                <ol className="flex flex-wrap gap-1.5">
                  {preset.stages.map((s, i) => (
                    <li key={s.id}>
                      <Pill>
                        {i + 1}. {t(s.title)} · {s.lessonIds.length}
                      </Pill>
                    </li>
                  ))}
                </ol>
              )}
              <div className="mt-auto pt-1">
                {readOnly ? (
                  <ButtonLink href="/register?next=%2Fplanner" size="sm" variant="secondary">
                    {t({ en: "Create an account to start", id: "Buat akun untuk mulai" })}
                  </ButtonLink>
                ) : (
                  <Button
                    size="sm"
                    onClick={() => {
                      track("planner.preset_chosen", {
                        feature: "planner",
                        contentId: preset.id,
                        props: { lessons: count },
                      });
                      setChoice({ kind: "preset", preset });
                    }}
                  >
                    {t({ en: "Use this preset", id: "Pakai preset ini" })}
                  </Button>
                )}
              </div>
            </Card>
          );
        })}

        <Card className="flex flex-col gap-3 border-dashed">
          <div className="flex flex-wrap items-center gap-1.5">
            {JLPT_LEVELS.map((l) => (
              <LevelPill key={l} level={l} />
            ))}
          </div>
          <div>
            <h3 className="font-semibold">{t({ en: "Build your own", id: "Susun sendiri" })}</h3>
            <p className="mt-1 text-sm text-muted">
              {t({
                en: `Pick single lessons from any level and put them in your own order. ${LESSONS.length} lessons are available now.`,
                id: `Pilih materi satuan dari level mana pun dan atur urutannya sendiri. Saat ini ada ${LESSONS.length} materi.`,
              })}
              {comingLevels.length > 0 &&
                ` ${t({
                  en: `${comingLevels.join(", ")} lessons are coming.`,
                  id: `Materi ${comingLevels.join(", ")} segera hadir.`,
                })}`}
            </p>
          </div>
          <div className="mt-auto pt-1">
            {readOnly ? (
              <ButtonLink href="/lessons" size="sm" variant="secondary">
                {t({ en: "Browse lessons", id: "Lihat materi" })}
              </ButtonLink>
            ) : (
              <Button
                size="sm"
                variant="secondary"
                onClick={() => {
                  track("planner.preset_chosen", { feature: "planner", contentId: "custom" });
                  setChoice({ kind: "custom" });
                }}
              >
                {t({ en: "Build my own", id: "Susun sendiri" })}
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
