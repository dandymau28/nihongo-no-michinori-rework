# Authoring lessons

Lessons live in the **lesson catalog**, `src/data/lessons.ts`. Each lesson stands on its own:
learners can open it from the Lessons library, add it to a custom planner, or get it through
a preset (`src/data/presets.ts`). A lesson optionally points at built-in **content** via its
`contentSlug`; content modules live under `src/content/**` and are wired up in
`src/content/registry.ts`. A lesson without content shows its external links plus a
"coming soon" panel — so adding content is purely additive.

## Adding a lesson

1. **Add it to the catalog** in `src/data/lessons.ts`, in the array for its level (create
   e.g. `N3_LESSONS = atLevel("N3", [...])` and add it to `LESSONS` for a new level):
   ```ts
   {
     id: "n3-wake-da",                  // permanent — progress is stored against it
     title: { en: "〜わけだ", id: "〜わけだ" },
     titleJa: "〜わけだ",
     task: { en: "Explanation + 20 drills", id: "Penjelasan + 20 latihan" },
     type: "grammar",
     durationNote: { en: "~30 min", id: "~30 mnt" },
     contentSlug: "wake-da",            // optional, see below
     links: [L("https://…", "explainer", "Reference")],
   },
   ```
   **Never change or reuse an `id`** once it has shipped — add a new lesson instead.
   The level is set by the array (`atLevel`), and the Lessons library picks it up
   automatically; levels without lessons show "coming soon".
2. **Optionally put it in a preset** — add its id to a stage's `lessonIds` in
   `src/data/presets.ts`, or add a new preset (its `id` is also permanent). Changing a
   preset only affects planners started afterwards.
3. `npm run typecheck` and open `/lessons/<id>`.

## Adding built-in content

1. **Pick the slug** and set it as the lesson's `contentSlug`.
2. **Create the module file** under the folder for its kind:
   `content/lessons`, `content/skills`, `content/decks`, `content/reading`,
   `content/listening`, or `content/tests`.
3. **Register it** — import and add to the `MODULES` array in `content/registry.ts`.
4. `npm run typecheck` and open `/lessons/<id>`.

All types are in `src/lib/types.ts`. All prose is bilingual: `{ en, id }`.

## Module shapes

| Kind | Type | Renderer | Use for |
|------|------|----------|---------|
| `lesson` | `Lesson` | `LessonView` | grammar points: sections + exercises |
| `skill` | `SkillModule` | `SkillView` | strategy days, writing practice |
| `deck` | `DeckModule` | `DeckRunner` | vocab / kanji flashcards + quiz |
| `reading` | `ReadingSet` | `ReadingRunner` | passages + comprehension MCQs |
| `listening` | `ListeningSet` | `ListeningRunner` | TTS scripts or embedded YouTube + MCQs |
| `test` | `TestModule` | `TestRunner` | mock tests, weekly reviews (groups + `passMark`) |

Each exported const is `{ type: "lesson", slug: "...", ... }` etc.

## Lesson sections

`sections: LessonSection[]` — one of:

- `{ kind: "prose", heading?, body }`
- `{ kind: "note", tone: "tip" | "warning", body }`
- `{ kind: "table", heading?, columns: Bi[], rows: [{ cells: (string|Bi)[], ja?: boolean }] }`
- `{ kind: "examples", heading?, items: Sentence[] }`

`Sentence` = `{ ja, romaji?, en, id, note? }`.

## Furigana notation

Write readings inline as `漢字[かんじ]`. The reading attaches to the run of kanji directly
before the bracket: `私[わたし]は 学生[がくせい]です`. Use it everywhere Japanese appears
(sentences, table cells marked `ja: true`, cloze prompts, drill dictionary forms).

## Exercises

`exercises: ExerciseGroup[]` on a lesson (or `quiz` on a deck, `groups` on a test).

```ts
{
  id: "slug:something",        // unique; also the progress key
  title: { en, id },
  instructions?: { en, id },
  speak?: true,                // prompt the learner to say answers aloud
  mode?: "list" | "streak",    // streak = timed conjugation drill
  questions: Question[],
}
```

Question kinds:

- **`mcq`** — `{ kind:"mcq", prompt, ja?, options:(string|Bi)[], answer:number, explain? }`
- **`cloze`** — `{ kind:"cloze", ja:"… ___ …", accept:string[], en, id, hint?, explain? }`
  (`accept` is matched loosely: katakana→hiragana, spaces/punctuation stripped)
- **`build`** — `{ kind:"build", tiles:string[], en, id, distractors?, explain? }`
- **`conjugation`** — `{ kind:"conjugation", dict, target, accept:string[], meaning? }`
  (only inside a `mode:"streak"` group)

### Conjugation drills from the verb deck

Instead of hand-writing `conjugation` items, generate them:

```ts
import { conjugationGroup } from "@/data/verbs-n5";

conjugationGroup(
  "my-slug:drill",
  { en: "て-form streak", id: "Runtun bentuk て" },
  ["te", "nai", "ta"],   // FormId[]
)
```

## The kanji catalog and flashcard decks

`/decks` lets a learner pick kanji out of a catalog, arrange them into a deck and share it
by link. The catalog itself is `src/data/kanji.ts` — a **generated** file holding all 2,211
JLPT kanji (N5 79, N4 166, N3 367, N2 367, N1 1,232) with up to three on'yomi, three
kun'yomi and three English meanings each, plus the stroke count.

Read it through its three functions, never by touching `PACKED`:

```ts
allKanji()               // the whole catalog, parsed on first call and cached
kanjiAtLevel("N5")       // one JLPT level
getKanji("日")             // one character, or undefined
```

**Refreshing it.** The data comes from KANJIDIC (via the `kanji-data` npm package, which is
not a runtime dependency — it is only used to generate the file) and the JLPT levels from
Jonathan Waller's lists. To regenerate, install `kanji-data` in a scratch directory and run
a script that reads `data/kanji-meta.json`, keeps the rows with a `jlpt` field, sorts by
level then newspaper frequency, caps each list at three entries and writes one
`char|on|kun|meanings|jlpt|strokes` line per kanji. Fields are separated by `|` and list
items by `;` — **not** by commas, because a meaning can contain one ("case (law, grammar)").

**Licence.** KANJIDIC is the property of the EDRDG and is used under CC BY-SA 4.0. The
credit on the About page (`src/components/settings/AboutView.tsx`) is a condition of that
licence — if the catalog stays, so does the credit.

**Meanings are English only.** KANJIDIC has no Indonesian, so the back of a card shows
English regardless of the interface language, and says so in a note beneath the card.

### The deck tables

`kanji_deck` (owner, title, share token, visit counter), `kanji_deck_card` (one row per
kanji, ordered) and `kanji_deck_use` (one row per signed-in learner who studied it). The
share token is the only permission: anyone with the link who is signed in can study the
deck, and rotating the token retires the old link. The owner's own opens are never counted.
Visits are deduplicated per browser session client-side, so treat that number as an
estimate rather than an audit trail.

## The conjugation trainer

`/practice/conjugation` is a standalone tool, not part of any lesson. To extend it:

- **Add words:** `src/data/words.ts` — `w(dict, kana, kanji, romaji, cls, en, id, jlpt)`.
  `cls` is one of `godan | ichidan | suru | kuru | iku | i-adj | ii-adj | na-adj`.
- **Add / change forms:** the catalog is `CONJ_FORMS` in `src/lib/conjugation.ts`; the
  transform lives in `verbTransform` / `adjTransform` in the same file. `conjugate(word,
  formId)` returns `{ kana, kanji, accept[], note? }`.
- Deep-link a lesson to a preset: `/practice/conjugation?forms=te,plain-past`.

## Listening

`ListeningClip`:

```ts
{
  id, title,
  script: [{ speaker?: "店員", ja: "いらっしゃいませ" }, …],  // read by TTS in order
  youtube: "VIDEO_ID",   // optional — if set, embeds the video instead of using TTS
  questions: McqQuestion[],
}
```

## Tests

`TestModule.groups` are just `ExerciseGroup[]`; set `passMark` (percent) to show a
pass/fail line once every group is finished. `TestRunner` sums results across the groups
using each group's `id` in the lesson's progress record.

## The lesson score

`src/lib/dayScore.ts` rolls every graded set in a lesson into one live percentage
(`DayScoreBar` on the lesson page, the breakdown in `ProgressControls`, the `%` in the
planner and the Lessons library). A set counts toward the score when its questions are objectively graded —
MCQ / cloze / build. **Excluded** (tracked as "practice", not scored): `mode: "streak"`
conjugation drills, flashcard decks, and writing prompts.

For this to work, the `id` you give an `ExerciseGroup` must be stable, and reading /
listening sets are keyed `"<slug>:<itemId>"` / `"<slug>:<clipId>"` automatically. When
every graded **and** practice set in a lesson has a result, the lesson flips to "done".
Progress belongs to the lesson, so it's shared by the planner and by opening the lesson
on its own.

There is no pre-seeding of progress — every learner starts from zero.
