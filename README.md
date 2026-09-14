# Shinpuru Nihongo · シンプル日本語

A JLPT **N5 → N4** study site built from a 90-day study planner — now with **accounts**,
so every learner tracks their own progress and arranges their own plan. Each lesson of
the plan has its drills, reading, listening, or mock test **built into the site**.

- **Accounts** — email + password or Google sign-in (better-auth). Anyone can browse
  lessons, the default plan and the practice tools; **tracking requires signing in**
  (guest scores last only until the page is left).
- **Personal planner** — each learner sets a start date, their study weekdays and a pace
  (lessons per study day), and the 90 built-in lessons are laid out on their calendar.
  From there they can:
  - move any lesson to another date (e.g. do Day 2 and Day 3 on the same day), one study
    day earlier/later, or to today;
  - skip lessons and restore them later;
  - add their own custom tasks with a note, tick them off, edit or delete them;
  - push everything unfinished forward in one click when they fall behind
    ("Resume from today");
  - rebuild the schedule from new settings at any time.
- **Interactive exercises**: multiple choice, fill-in-the-blank, sentence building, timed
  conjugation streaks, flashcard decks, reading comprehension, and listening.
- **Automatic day score** — graded exercises roll into one live percentage per lesson;
  a lesson flips to "done" once all its exercises are finished. Status, a "reviewed"
  flag and notes are saved per lesson.
- **Practice tools** — Conjugation, Particle, Kanji and Question-word trainers, with
  weak-spot stats saved to the account.
- **Import / export** — JSON backup of progress; also imports files exported from the
  old browser-only version.
- **Bilingual** (English / Bahasa Indonesia) UI, plus furigana and romaji toggles
  (display preferences stay per-device).

## Requirements

- **Node.js 20+** (see `.nvmrc`)
- **PostgreSQL 14+**

## Getting started

```bash
nvm use
npm install                 # also generates the Prisma client
cp .env.example .env        # then fill in DATABASE_URL and BETTER_AUTH_SECRET
npx prisma migrate deploy   # create the tables (or `npm run db:migrate` while developing)
npm run dev                 # http://localhost:3000
```

Environment variables (see `.env.example`):

| Variable | |
|----------|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `BETTER_AUTH_SECRET` | random secret, e.g. `openssl rand -base64 32` |
| `BETTER_AUTH_URL` | public origin, e.g. `http://localhost:3000` |
| `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | optional; Google button hidden when empty. Redirect URI: `<BETTER_AUTH_URL>/api/auth/callback/google` |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `EMAIL_FROM` | optional; sends password-reset emails. While empty, reset links are printed to the server log (and "Forgot password?" is hidden in production) |

Other scripts:

```bash
npm run build       # prisma generate + production build (type-checks too)
npm run start       # serve the production build
npm run typecheck   # tsc --noEmit
npm run db:migrate  # create/apply a migration after editing prisma/schema.prisma
npm run db:deploy   # apply pending migrations (production)
npm run db:studio   # browse the database
```

## Deployment

The app runs as a Node server behind nginx with PostgreSQL. See
[`docs/deploy.md`](docs/deploy.md) for the full VPS setup (systemd, nginx, Certbot,
Google OAuth, backups) and `deploy.sh` for redeploys.

## How it fits together

```
prisma/
  schema.prisma            User/Session/Account/Verification (better-auth),
                           PlanSettings, PlanEntry, DayProgress, PracticeStats
  migrations/
src/
  app/
    page.tsx               Dashboard (guest welcome · plan setup · today / overdue / up next)
    planner/               Personal calendar: filters, move/skip, custom tasks, plan settings
    day/[day]/             One lesson: schedule card, content, exercises, progress
    lesson/[slug]/  practice/  settings/  about/
    login/  register/      Email + Google sign-in
    api/
      auth/[...all]        better-auth handler
      plan/                GET plan · PUT settings (+ rebuild)
      plan/entries[/id]    POST custom task · PATCH move/skip/edit · DELETE task
      plan/shift           push unfinished entries forward by N study days
      progress[/day]       GET all · PUT one lesson · POST import · DELETE reset
      practice/[key]       trainer stats
  context/
    SettingsContext.tsx    lang / theme / furigana / romaji (localStorage, per device)
    ProgressContext.tsx    per-lesson progress; debounced saves to /api/progress
    PlanContext.tsx        the learner's schedule (guests get a read-only preview)
  lib/
    schedule.ts            pure date maths: study days, shifting, building a schedule
    server/                prisma client, auth config, zod schemas, API helpers
    useSyncedJson.ts       account-backed state for the practice trainers
  data/  content/          the 90-day plan and all lesson content (unchanged)
  components/
    auth/                  AuthForm, AccountMenu, SignInPrompt
    planner/               PlannerView, EntryRow, PlanSettingsForm, TaskModal,
                           OverdueBanner, ScheduleCard, DayDetail, …
```

Lessons keep their identity as **Day 1–90** of the built-in plan (their content and
progress are keyed by that number); a learner's `PlanEntry` rows decide *when* each one
is studied.

See [`docs/authoring.md`](docs/authoring.md) for adding lesson content.
