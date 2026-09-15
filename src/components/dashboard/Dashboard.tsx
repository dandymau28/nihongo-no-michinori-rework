"use client";

import { LESSONS, getLesson } from "@/data/lessons";
import { getPreset } from "@/data/presets";
import { useSettings } from "@/context/SettingsContext";
import { useProgress } from "@/context/ProgressContext";
import { isEntryDone, usePlan } from "@/context/PlanContext";
import { useAuth } from "@/lib/useAuth";
import { STR } from "@/lib/strings";
import { formatDateLong } from "@/lib/dates";
import { JLPT_LEVELS } from "@/lib/types";
import { Card, CardTitle } from "@/components/ui/Card";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { ButtonLink } from "@/components/ui/Button";
import { EntryRow } from "@/components/planner/EntryRow";
import { OverdueBanner } from "@/components/planner/OverdueBanner";
import { plannerName } from "@/components/planner/plannerName";

export function Dashboard() {
  const { t, lang } = useSettings();
  const { user } = useAuth();
  const { getProgress, hydrated: progressReady } = useProgress();
  const { entries, lessonEntries, today, signedIn, settings, hydrated } = usePlan();

  if (!hydrated || !progressReady || !today) {
    return <p className="text-sm text-muted">…</p>;
  }
  if (!signedIn) return <GuestWelcome />;

  const greeting = (
    <header>
      <h1 className="text-2xl font-bold">
        {t({ en: "Welcome back", id: "Selamat datang kembali" })}
        {user?.name ? `, ${user.name.split(" ")[0]}` : ""}
      </h1>
      <p className="mt-1 text-sm text-muted">{t(STR.tagline)}</p>
    </header>
  );

  if (!settings) {
    return (
      <div className="space-y-6">
        {greeting}
        <Card className="flex flex-wrap items-center gap-4">
          <div className="min-w-0 flex-1 basis-64">
            <h2 className="font-semibold">
              {t({ en: "You don't have a planner yet", id: "Kamu belum punya planner" })}
            </h2>
            <p className="mt-1 text-sm text-muted">
              {t({
                en: "Start from a preset like the 90-day N5 → N4 plan, or build your own from single lessons. You can also just open any lesson.",
                id: "Mulai dari preset seperti rencana 90 hari N5 → N4, atau susun sendiri dari materi satuan. Kamu juga bisa langsung membuka materi mana pun.",
              })}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <ButtonLink href="/planner" size="sm">
              {t({ en: "Start a planner", id: "Mulai planner" })}
            </ButtonLink>
            <ButtonLink href="/lessons" size="sm" variant="secondary">
              {t({ en: "Browse lessons", id: "Lihat materi" })}
            </ButtonLink>
          </div>
        </Card>
      </div>
    );
  }

  const activeLessonIds = lessonEntries.filter((e) => !e.skipped).map((e) => e.lessonId!);
  const doneCount = activeLessonIds.filter((id) => getProgress(id).status === "done").length;
  const total = activeLessonIds.length;

  const active = entries.filter((e) => !e.skipped && e.date);
  const todays = active.filter((e) => e.date === today);
  const upNext = active.filter((e) => e.date! > today && !isEntryDone(e, getProgress)).slice(0, 5);
  const resumeLesson = todays.find(
    (e) => e.lessonId != null && !isEntryDone(e, getProgress),
  )?.lessonId;

  // Streak: consecutive scheduled dates, up to today, where everything got done.
  const allDoneByDate = new Map<string, boolean>();
  for (const e of active) {
    if (e.date! > today) continue;
    allDoneByDate.set(e.date!, (allDoneByDate.get(e.date!) ?? true) && isEntryDone(e, getProgress));
  }
  let streak = 0;
  for (const [date, allDone] of [...allDoneByDate].sort((a, b) => (a[0] < b[0] ? 1 : -1))) {
    if (allDone) streak++;
    else if (date === today) continue; // today not finished yet is fine
    else break;
  }

  // Progress by stage for preset planners, by level for custom ones.
  const preset = getPreset(settings.presetId);
  const groups = preset
    ? (() => {
        const staged = new Set(preset.stages.flatMap((s) => s.lessonIds));
        return [
          ...preset.stages.map((s) => {
            const inStage = new Set(s.lessonIds);
            return { key: s.id, title: t(s.title), ids: activeLessonIds.filter((id) => inStage.has(id)) };
          }),
          {
            key: "added",
            title: t({ en: "Added lessons", id: "Materi tambahan" }),
            ids: activeLessonIds.filter((id) => !staged.has(id)),
          },
        ];
      })()
    : JLPT_LEVELS.map((lv) => ({
        key: lv,
        title: lv,
        ids: activeLessonIds.filter((id) => getLesson(id)?.level === lv),
      }));

  return (
    <div className="space-y-6">
      {greeting}

      <OverdueBanner />

      <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
        <Card className="flex items-center justify-center">
          <ProgressRing
            value={doneCount}
            max={Math.max(total, 1)}
            label={`${doneCount}`}
            sublabel={`${t({ en: "of", id: "dari" })} ${total} · ${total ? Math.round((doneCount / total) * 100) : 0}%`}
          />
        </Card>

        <Card className="flex flex-col gap-3">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <CardTitle>
              {t(STR.today)} · {formatDateLong(today, lang)}
            </CardTitle>
            <span className="text-xs text-muted">{plannerName(settings, t)}</span>
          </div>
          {todays.length > 0 ? (
            <div className="-mx-2 space-y-1">
              {todays.map((e) => (
                <EntryRow key={e.id} entry={e} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted">
              {t({ en: "Nothing scheduled for today.", id: "Tidak ada jadwal hari ini." })}{" "}
              {upNext[0] && (
                <>
                  {t({ en: "Next up on", id: "Berikutnya pada" })}{" "}
                  <b className="text-fg">{formatDateLong(upNext[0].date!, lang)}</b>.
                </>
              )}
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            {resumeLesson && (
              <ButtonLink href={`/lessons/${resumeLesson}`} size="sm">
                {t(STR.resume)} →
              </ButtonLink>
            )}
            <ButtonLink href="/planner" size="sm" variant="secondary">
              {t(STR.nav_planner)}
            </ButtonLink>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardTitle>{t(STR.streak)}</CardTitle>
          <p className="mt-1 text-3xl font-bold tabular-nums">
            {streak} <span className="text-base font-normal text-muted">{t(STR.days_unit)}</span>
          </p>
        </Card>
        {groups
          .filter((g) => g.ids.length > 0)
          .map((g) => {
            const done = g.ids.filter((id) => getProgress(id).status === "done").length;
            return (
              <Card key={g.key}>
                <CardTitle>{g.title}</CardTitle>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${(done / g.ids.length) * 100}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-muted tabular-nums">
                  {done}/{g.ids.length} {t({ en: "lessons", id: "materi" })}
                </p>
              </Card>
            );
          })}
      </div>

      {upNext.length > 0 && (
        <section>
          <h2 className="mb-2 text-sm font-semibold text-muted">{t(STR.up_next)}</h2>
          <div className="space-y-1">
            {upNext.map((e) => (
              <EntryRow key={e.id} entry={e} showDate />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function GuestWelcome() {
  const { t } = useSettings();
  const levelsWithLessons = JLPT_LEVELS.filter((lv) => LESSONS.some((l) => l.level === lv));
  const features = [
    {
      icon: "🗓️",
      title: { en: "A plan that fits you", id: "Rencana yang cocok untukmu" },
      body: {
        en: "Start from a preset — like 90 days from N5 to N4 — or build a planner from single lessons, in any order, on your own study days.",
        id: "Mulai dari preset — seperti 90 hari dari N5 ke N4 — atau susun planner dari materi satuan, dengan urutan dan hari belajarmu sendiri.",
      },
    },
    {
      icon: "📚",
      title: { en: "Every lesson on its own", id: "Setiap materi berdiri sendiri" },
      body: {
        en: `Open any lesson from the library and study it whenever you like. ${levelsWithLessons.join(" and ")} now, more levels coming.`,
        id: `Buka materi mana pun dari perpustakaan dan pelajari kapan saja. Saat ini ${levelsWithLessons.join(" dan ")}, level lain menyusul.`,
      },
    },
    {
      icon: "📈",
      title: { en: "Progress that follows you", id: "Progres yang ikut ke mana pun" },
      body: {
        en: "Scores, notes and trainer stats are saved to your account and available on every device.",
        id: "Skor, catatan, dan statistik latihan tersimpan di akunmu dan bisa dibuka di perangkat mana pun.",
      },
    },
  ];

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-2xl font-bold sm:text-3xl">
          {t({
            en: "Learn Japanese for the JLPT, N5 to N1, your way",
            id: "Belajar bahasa Jepang untuk JLPT, N5 sampai N1, dengan caramu",
          })}
        </h1>
        <p className="max-w-prose text-sm text-muted">{t(STR.tagline)}</p>
        <div className="flex flex-wrap gap-2">
          <ButtonLink href="/register">{t({ en: "Create a free account", id: "Buat akun gratis" })}</ButtonLink>
          <ButtonLink href="/login" variant="secondary">
            {t({ en: "Sign in", id: "Masuk" })}
          </ButtonLink>
        </div>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        {features.map((f) => (
          <Card key={f.icon}>
            <p className="text-2xl" aria-hidden>
              {f.icon}
            </p>
            <p className="mt-2 font-semibold">{t(f.title)}</p>
            <p className="mt-1 text-sm text-muted">{t(f.body)}</p>
          </Card>
        ))}
      </div>

      <Card className="flex flex-wrap items-center gap-3">
        <p className="min-w-0 flex-1 basis-60 text-sm">
          {t({
            en: "Just looking? Browse the presets and lessons, and try the trainers — nothing is saved until you sign in.",
            id: "Cuma lihat-lihat? Jelajahi preset dan materi, dan coba latihannya — tidak ada yang tersimpan sebelum kamu masuk.",
          })}
        </p>
        <div className="flex flex-wrap gap-2">
          <ButtonLink href="/planner" size="sm" variant="secondary">
            {t(STR.nav_planner)}
          </ButtonLink>
          <ButtonLink href="/lessons" size="sm" variant="secondary">
            {t(STR.nav_lessons)}
          </ButtonLink>
          <ButtonLink href="/practice" size="sm" variant="secondary">
            {t(STR.nav_practice)}
          </ButtonLink>
        </div>
      </Card>
    </div>
  );
}
