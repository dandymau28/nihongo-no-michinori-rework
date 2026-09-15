"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { LESSONS } from "@/data/lessons";
import { useSettings } from "@/context/SettingsContext";
import { useProgress } from "@/context/ProgressContext";
import { usePlan } from "@/context/PlanContext";
import { STR } from "@/lib/strings";
import { STATUS_LABEL, TYPE_LABEL } from "@/lib/labels";
import { quickPct } from "@/lib/dayScore";
import { JLPT_LEVELS, type JlptLevel, type LessonType, type Status } from "@/lib/types";
import { Select } from "@/components/ui/Select";
import { LevelPill, Pill, StatusDot, TYPE_ICON } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

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

/** Every lesson in the catalog, by level. Open any of them, or add them to the planner. */
export function LessonLibrary() {
  const { t } = useSettings();
  const { getProgress, canSave } = useProgress();
  const { hydrated, settings, lessonEntries, addLessons } = usePlan();
  const [level, setLevel] = useState<JlptLevel | "all">("all");
  const [type, setType] = useState<LessonType | "all">("all");
  const [status, setStatus] = useState<Status | "all">("all");
  const [query, setQuery] = useState("");
  const [adding, setAdding] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  const inPlanner = useMemo(() => new Set(lessonEntries.map((e) => e.lessonId)), [lessonEntries]);
  const q = query.trim().toLowerCase();
  const filtering = type !== "all" || status !== "all" || q !== "";

  const matches = LESSONS.filter((l) => {
    if (type !== "all" && l.type !== type) return false;
    if (status !== "all" && getProgress(l.id).status !== status) return false;
    if (
      q &&
      ![l.title.en, l.title.id, l.titleJa ?? "", l.task.en, l.task.id].some((s) =>
        s.toLowerCase().includes(q),
      )
    ) {
      return false;
    }
    return true;
  });

  const levels = level === "all" ? JLPT_LEVELS : [level];
  const canAdd = hydrated && settings != null;
  const shownCount = matches.filter((l) => levels.includes(l.level)).length;

  async function add(id: string) {
    setAdding(id);
    setFailed(false);
    try {
      await addLessons([id]);
    } catch {
      setFailed(true);
    } finally {
      setAdding(null);
    }
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-1.5" role="group" aria-label={t(STR.level)}>
        {(["all", ...JLPT_LEVELS] as const).map((lv) => {
          const count = lv === "all" ? LESSONS.length : LESSONS.filter((l) => l.level === lv).length;
          return (
            <button
              key={lv}
              type="button"
              aria-pressed={level === lv}
              onClick={() => setLevel(lv)}
              className={cn(
                "rounded-full border px-3 py-1 text-sm font-medium transition-colors",
                level === lv
                  ? "border-primary bg-primary text-primary-fg"
                  : "border-border bg-surface text-muted hover:text-fg",
              )}
            >
              {lv === "all" ? t(STR.filter_all) : lv}{" "}
              <span className="tabular-nums opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-2">
        <input
          id="lesson-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t({ en: "Search lessons", id: "Cari materi" })}
          className="h-9 min-w-0 flex-1 basis-48 rounded-xl border border-border bg-surface px-3 text-sm"
        />
        <Select id="lesson-type" value={type} onChange={(e) => setType(e.target.value as LessonType | "all")}>
          <option value="all">
            {t(STR.filter_type)}: {t(STR.filter_all)}
          </option>
          {TYPES.map((ty) => (
            <option key={ty} value={ty}>
              {t(TYPE_LABEL[ty])}
            </option>
          ))}
        </Select>
        {canSave && (
          <Select id="lesson-status" value={status} onChange={(e) => setStatus(e.target.value as Status | "all")}>
            <option value="all">
              {t(STR.filter_status)}: {t(STR.filter_all)}
            </option>
            {(["not-yet", "partial", "done"] as Status[]).map((s) => (
              <option key={s} value={s}>
                {t(STATUS_LABEL[s])}
              </option>
            ))}
          </Select>
        )}
      </div>

      {failed && (
        <p role="alert" className="text-sm text-danger">
          {t({ en: "Couldn't add the lesson — please try again.", id: "Gagal menambah materi — coba lagi." })}
        </p>
      )}

      {levels.map((lv) => {
        const inLevel = LESSONS.filter((l) => l.level === lv);
        if (inLevel.length === 0) {
          if (filtering) return null;
          return (
            <section key={lv} className="space-y-2">
              <div className="flex items-center gap-2">
                <LevelPill level={lv} />
                <span className="text-xs text-muted">{t(STR.level_coming_soon)}</span>
              </div>
              <p className="rounded-xl border border-dashed border-border px-4 py-3 text-sm text-muted">
                {t({
                  en: `${lv} lessons are being written. They'll appear here, ready to open or add to a planner.`,
                  id: `Materi ${lv} sedang disusun. Nanti muncul di sini, siap dibuka atau ditambahkan ke planner.`,
                })}
              </p>
            </section>
          );
        }

        const rows = matches.filter((l) => l.level === lv);
        if (rows.length === 0) return null;
        return (
          <section key={lv} className="space-y-2">
            <div className="flex items-center gap-2">
              <LevelPill level={lv} />
              <span className="text-xs text-muted tabular-nums">
                {rows.length} {t({ en: "lessons", id: "materi" })}
              </span>
            </div>
            <ul className="space-y-1">
              {rows.map((l) => {
                const progress = getProgress(l.id);
                const pct = quickPct(progress.exercises);
                return (
                  <li
                    key={l.id}
                    className="flex items-center rounded-xl border border-transparent hover:border-border hover:bg-surface-2"
                  >
                    <Link href={`/lessons/${l.id}`} className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2.5">
                      <span aria-hidden className="shrink-0 text-base">
                        {TYPE_ICON[l.type]}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                          {l.titleJa ? <span className="font-jp">{l.titleJa}</span> : t(l.title)}
                        </p>
                        <p className="truncate text-xs text-muted">
                          {t(TYPE_LABEL[l.type])} · {t(l.task)}
                        </p>
                      </div>
                      {pct != null && (
                        <span className="hidden shrink-0 text-xs text-muted tabular-nums sm:block">{pct}%</span>
                      )}
                      {canSave && <StatusDot status={progress.status} />}
                    </Link>
                    {canAdd && (
                      <div className="shrink-0 pr-2">
                        {inPlanner.has(l.id) ? (
                          <Pill tone="success">{t({ en: "In planner", id: "Di planner" })}</Pill>
                        ) : (
                          <Button size="sm" variant="ghost" disabled={adding === l.id} onClick={() => add(l.id)}>
                            + {t({ en: "Add", id: "Tambah" })}
                          </Button>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      {filtering && shownCount === 0 && (
        <p className="rounded-xl border border-border bg-surface p-6 text-center text-sm text-muted">
          {t(STR.no_results)}
        </p>
      )}
    </div>
  );
}
