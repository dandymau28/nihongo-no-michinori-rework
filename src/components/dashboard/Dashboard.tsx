"use client";

import { useSettings } from "@/context/SettingsContext";
import { useProgress } from "@/context/ProgressContext";
import { isEntryDone, usePlan } from "@/context/PlanContext";
import { useAuth } from "@/lib/useAuth";
import { PHASES } from "@/data/planner";
import { STR } from "@/lib/strings";
import { PHASE_LABEL } from "@/lib/labels";
import { formatDateLong } from "@/lib/dates";
import { Card, CardTitle } from "@/components/ui/Card";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { ButtonLink } from "@/components/ui/Button";
import { EntryRow } from "@/components/planner/EntryRow";
import { OverdueBanner } from "@/components/planner/OverdueBanner";
import { PlanSetup } from "@/components/planner/PlanSetup";

export function Dashboard() {
  const { t, lang } = useSettings();
  const { user } = useAuth();
  const { getDay: getProgress, completedCount, doneDays, hydrated: progressReady } = useProgress();
  const { entries, today, isPreview, settings, hydrated } = usePlan();

  if (!hydrated || !progressReady || !today) {
    return <p className="text-sm text-muted">…</p>;
  }
  if (isPreview) return <GuestWelcome />;

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
        <PlanSetup />
      </div>
    );
  }

  const active = entries.filter((e) => !e.skipped && e.date);
  const todays = active.filter((e) => e.date === today);
  const upNext = active.filter((e) => e.date! > today && !isEntryDone(e, getProgress)).slice(0, 5);
  const resumeDay = todays.find(
    (e) => e.materialDay != null && !isEntryDone(e, getProgress),
  )?.materialDay;

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

  return (
    <div className="space-y-6">
      {greeting}

      <OverdueBanner />

      <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
        <Card className="flex items-center justify-center">
          <ProgressRing
            value={completedCount}
            max={90}
            label={`${completedCount}`}
            sublabel={`${t(STR.of90)} · ${Math.round((completedCount / 90) * 100)}%`}
          />
        </Card>

        <Card className="flex flex-col gap-3">
          <CardTitle>
            {t(STR.today)} · {formatDateLong(today, lang)}
          </CardTitle>
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
            {resumeDay != null && (
              <ButtonLink href={`/day/${resumeDay}`} size="sm">
                {t(STR.resume)} →
              </ButtonLink>
            )}
            <ButtonLink href="/planner" size="sm" variant="secondary">
              {t(STR.nav_planner)}
            </ButtonLink>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardTitle>{t(STR.streak)}</CardTitle>
          <p className="mt-1 text-3xl font-bold tabular-nums">
            {streak}{" "}
            <span className="text-base font-normal text-muted">{t(STR.days_unit)}</span>
          </p>
        </Card>
        {PHASES.map((p) => {
          const total = p.to - p.from + 1;
          const done = [...doneDays].filter((d) => d >= p.from && d <= p.to).length;
          return (
            <Card key={p.id}>
              <CardTitle>{t(PHASE_LABEL[p.id])}</CardTitle>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${(done / total) * 100}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-muted tabular-nums">
                {done}/{total} {t(STR.days_unit)}
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
  const features = [
    {
      icon: "🗓️",
      title: { en: "Your own schedule", id: "Jadwalmu sendiri" },
      body: {
        en: "Choose your start date, study days and pace. Move lessons to any date, skip them, or add your own tasks.",
        id: "Pilih tanggal mulai, hari belajar, dan ritmemu. Pindahkan materi ke tanggal mana saja, lewati, atau tambah tugas sendiri.",
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
    {
      icon: "📚",
      title: { en: "Everything built in", id: "Semua sudah tersedia" },
      body: {
        en: "90 days of N5 → N4 lessons, drills, reading, listening and mock tests.",
        id: "90 hari materi N5 → N4, latihan, bacaan, menyimak, dan tes tiruan.",
      },
    },
  ];

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-2xl font-bold sm:text-3xl">
          {t({
            en: "Learn Japanese, N5 → N4, on your own schedule",
            id: "Belajar bahasa Jepang, N5 → N4, sesuai jadwalmu",
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
            en: "Just looking? Browse the plan and try the trainers — nothing is saved until you sign in.",
            id: "Cuma lihat-lihat? Jelajahi rencana dan coba latihannya — tidak ada yang tersimpan sebelum kamu masuk.",
          })}
        </p>
        <div className="flex gap-2">
          <ButtonLink href="/planner" size="sm" variant="secondary">
            {t(STR.nav_planner)}
          </ButtonLink>
          <ButtonLink href="/practice" size="sm" variant="secondary">
            {t(STR.nav_practice)}
          </ButtonLink>
        </div>
      </Card>
    </div>
  );
}
