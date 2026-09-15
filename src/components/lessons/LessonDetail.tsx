"use client";

import Link from "next/link";
import { useState } from "react";
import { LESSONS, getLesson } from "@/data/lessons";
import { useSettings } from "@/context/SettingsContext";
import { usePlan } from "@/context/PlanContext";
import { getContent } from "@/content/registry";
import { STR } from "@/lib/strings";
import { TYPE_LABEL } from "@/lib/labels";
import { LevelPill, Pill, TYPE_ICON } from "@/components/ui/Pill";
import { Card } from "@/components/ui/Card";
import { Button, ButtonLink } from "@/components/ui/Button";
import { ContentRenderer } from "@/components/lesson/ContentRenderer";
import { DayScoreBar } from "@/components/planner/DayScoreBar";
import { ExternalLinks } from "@/components/planner/ExternalLinks";
import { ProgressControls } from "@/components/planner/ProgressControls";
import { ScheduleCard } from "@/components/planner/ScheduleCard";

export function LessonDetail({ lessonId }: { lessonId: string }) {
  const { t } = useSettings();
  const { hydrated, signedIn, settings, entryForLesson, lessonEntries, addLessons } = usePlan();
  const [adding, setAdding] = useState(false);
  const [addFailed, setAddFailed] = useState(false);

  const lesson = getLesson(lessonId);
  if (!lesson) return null;

  const entry = entryForLesson(lesson.id);
  const module = getContent(lesson.contentSlug);
  const showYoutube = lesson.youtube && lesson.youtube.length > 0 && module?.type !== "listening";

  // Previous / next follow the learner's planner order when the lesson is in it,
  // otherwise the catalog order.
  const sequence = entry ? lessonEntries.map((e) => e.lessonId!) : LESSONS.map((l) => l.id);
  const index = sequence.indexOf(lesson.id);
  const prev = getLesson(sequence[index - 1]);
  const next = getLesson(sequence[index + 1]);

  async function addToPlanner() {
    setAdding(true);
    setAddFailed(false);
    try {
      await addLessons([lesson!.id]);
    } catch {
      setAddFailed(true);
    } finally {
      setAdding(false);
    }
  }

  const titleOf = (l: NonNullable<typeof prev>) =>
    l.titleJa ? <span className="font-jp">{l.titleJa}</span> : t(l.title);

  return (
    <div className="space-y-6">
      <Link
        href={entry ? "/planner" : "/lessons"}
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-fg"
      >
        ← {entry ? t(STR.back_to_planner) : t(STR.back_to_lessons)}
      </Link>

      <header className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <LevelPill level={lesson.level} />
          <Pill tone="neutral">
            <span aria-hidden>{TYPE_ICON[lesson.type]}</span> {t(TYPE_LABEL[lesson.type])}
          </Pill>
          {entry && (
            <span className="text-xs text-muted tabular-nums">
              {t({
                en: `Lesson ${index + 1} of ${sequence.length} in your planner`,
                id: `Materi ${index + 1} dari ${sequence.length} di planner-mu`,
              })}
            </span>
          )}
        </div>
        <h1 className="text-2xl font-bold">
          {lesson.titleJa ? <span className="font-jp">{lesson.titleJa}</span> : t(lesson.title)}
        </h1>
        {lesson.titleJa && <p className="text-sm text-muted">{t(lesson.title)}</p>}
      </header>

      {hydrated && signedIn && (
        entry ? (
          <ScheduleCard entry={entry} />
        ) : (
          <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border bg-surface-2 px-3 py-2 text-sm">
            <span className="text-muted">
              {settings
                ? t({ en: "This lesson isn't in your planner.", id: "Materi ini belum ada di planner-mu." })
                : t({ en: "You don't have a planner yet.", id: "Kamu belum punya planner." })}
            </span>
            <div className="sm:ml-auto">
              {settings ? (
                <Button size="sm" variant="secondary" disabled={adding} onClick={addToPlanner}>
                  + {t({ en: "Add to my planner", id: "Tambah ke planner-ku" })}
                </Button>
              ) : (
                <ButtonLink href="/planner" size="sm" variant="secondary">
                  {t({ en: "Start a planner", id: "Mulai planner" })}
                </ButtonLink>
              )}
            </div>
            {addFailed && (
              <p role="alert" className="w-full text-xs text-danger">
                {t({ en: "Couldn't add it — please try again.", id: "Gagal menambahkan — coba lagi." })}
              </p>
            )}
          </div>
        )
      )}

      <DayScoreBar lessonId={lesson.id} contentSlug={lesson.contentSlug} />

      <Card className="space-y-1.5">
        <p className="text-xs font-semibold text-muted">{t(STR.study_task)}</p>
        <p className="text-sm">{t(lesson.task)}</p>
        {lesson.durationNote && (
          <p className="text-xs text-muted">
            {t(STR.suggested_time)}: {t(lesson.durationNote)}
          </p>
        )}
      </Card>

      {showYoutube && (
        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-muted">{t(STR.type_listening)}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {lesson.youtube!.map((id) => (
              <div key={id} className="aspect-video overflow-hidden rounded-xl border border-border">
                <iframe
                  className="size-full"
                  src={`https://www.youtube-nocookie.com/embed/${id}`}
                  title="Listening practice"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <ExternalLinks links={lesson.links} />

      {module ? (
        <div className="border-t border-border pt-6">
          <ContentRenderer module={module} lessonId={lesson.id} />
        </div>
      ) : (
        <Card className="border-dashed">
          <p className="text-sm text-muted">{t(STR.content_coming)}</p>
        </Card>
      )}

      <ProgressControls lessonId={lesson.id} contentSlug={lesson.contentSlug} />

      <nav className="flex items-start justify-between gap-4 border-t border-border pt-4 text-sm">
        {prev ? (
          <Link href={`/lessons/${prev.id}`} className="min-w-0 text-muted hover:text-fg">
            <span className="block">← {t(STR.prev_lesson)}</span>
            <span className="block truncate text-xs">{titleOf(prev)}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/lessons/${next.id}`} className="min-w-0 text-right text-muted hover:text-fg">
            <span className="block">{t(STR.next_lesson)} →</span>
            <span className="block truncate text-xs">{titleOf(next)}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
