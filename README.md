# Nihongo No Michinori · 日本語の道のり

A JLPT study site for every level, **N5 to N1**, with **accounts** so every learner tracks
their own progress and arranges their own plan. Lessons come with their drills, reading,
listening, or mock tests **built into the site**. N5 and N4 lessons are available now; N3,
N2 and N1 lessons are added to the same catalog later.

- **Accounts** — email + password or Google sign-in (better-auth), with email
  confirmation, password reset and a "Keep me signed in" option (30-day sessions, or a
  browser-session login for shared computers). Anyone can browse lessons, the default
  plan and the practice tools; **tracking requires signing in** (guest scores last only
  until the page is left).
- **Lesson catalog** — every lesson stands on its own, tagged with its JLPT level and type.
  Learners can open any lesson from the **Lessons** library and study it without a planner.
- **Planner presets** — ready-made sequences of catalog lessons: *90-day N5 → N4*, *N5
  Refresher*, *N4 Grammar Core* and *N4 Exam Sprint*.
- **Personal planner** (one per learner) — started from a preset or built from single
  lessons. The learner sets a start date, study weekdays and a pace, and can:
  - rearrange the lesson order (drag or arrows) — unfinished lessons get new dates in the
    new order, finished ones keep theirs;
  - add lessons from any level, remove them, or skip and restore them;
  - move any lesson to another date, one study day earlier/later, or to today;
  - add custom tasks with a note, tick them off, edit or delete them;
  - push everything unfinished forward in one click ("Resume from today");
  - rebuild the schedule, or start a different planner (lesson progress is kept).
- **Progress per lesson** — shared by the planner and by opening a lesson on its own.
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
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `EMAIL_FROM` | optional; sends password-reset and email-confirmation links. While empty, the links are printed to the server log; in production, password reset and email confirmation stay off until SMTP is set |
| `EMAIL_REPLY_TO` | optional; where replies to those emails go (e.g. your own inbox, when the sending domain has no mailbox) |

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
Google OAuth, backups).

Updates deploy with **zero downtime** (blue/green on one server): `deploy.sh` builds each
release in its own folder, starts it on a second port, checks `/api/health`, switches nginx
and then stops the old release. `rollback.sh` and `restart.sh` do the same swap without a
rebuild. The scripts live in `scripts/`, the systemd template in `deploy/`.

## How it fits together

```
prisma/
  schema.prisma            User/Session/Account/Verification (better-auth),
                           PlanSettings, PlanEntry, LessonProgress, PracticeStats
                           (+ legacy DayProgress, see below)
  migrations/
src/
  data/
    lessons.ts             the lesson catalog — permanent ids, level, type, links
    presets.ts             planner presets: ordered lesson ids grouped into stages
  content/                 built-in lesson content, looked up by a lesson's contentSlug
  app/
    page.tsx               Dashboard (guest welcome · today / overdue / progress by stage)
    lessons/               Lesson library (by level) and /lessons/<id> lesson pages
    planner/               Start screen (presets / build your own), Calendar and Order views
    day/[day]/  lesson/[slug]/   redirects from the old 90-day URLs
    practice/  settings/  about/  login/  register/  …
    api/
      auth/[...all]        better-auth handler
      plan/                GET planner · POST start/replace (preset or lessons) · PUT settings
      plan/lessons         add lessons to the end
      plan/reorder         save a new order (dates follow it)
      plan/entries[/id]    POST custom task · PATCH move/skip/edit · DELETE task or lesson
      plan/shift           push unfinished entries forward by N study days
      progress[/lesson]    GET all · PUT one lesson · POST import · DELETE reset
      practice/[key]       trainer stats
      health               release id + database check (deploys, uptime monitors)
  context/
    SettingsContext.tsx    lang / theme / furigana / romaji (localStorage, per device)
    ProgressContext.tsx    progress per lesson id; debounced saves to /api/progress
    PlanContext.tsx        the learner's planner
  lib/
    schedule.ts            pure date maths: study days, shifting, laying out lessons
    server/                prisma client, auth, zod schemas, planner helpers
  components/
    lessons/               LessonLibrary, LessonDetail
    planner/               PlannerView (calendar), PlannerOrder, PlannerStart,
                           LessonPickerModal, EntryRow, PlanSettingsForm, …
```

A lesson's `id` is permanent: progress and planners are stored against it. A planner is a
list of `PlanEntry` rows — each lesson has a `position` (the learner's order) and a date.

**Pending cleanup:** migration `0003_lesson_catalog` moved everything from day numbers to
lesson ids but kept `plan_entry.material_day` and the `day_progress` table (still written)
so the previous release keeps working during a deploy or rollback. A later release should
stop writing them and drop them in its own migration.

See [`docs/authoring.md`](docs/authoring.md) for adding lesson content.
