import type { Bi } from "@/lib/i18n";
import type { ExternalLink, JlptLevel, LessonMeta, LinkKind } from "@/lib/types";

/**
 * The lesson catalog. Every lesson stands on its own: learners can open it from the lesson
 * library, add it to a custom planner, or get it through a preset (src/data/presets.ts).
 *
 * `id` is permanent — learners' progress and planners are stored against it. Never change
 * or reuse an id; add a new lesson instead.
 * `legacyDay` is the lesson's day in the original 90-day plan; old /day/N links redirect to it.
 * `contentSlug` points at the built-in lesson content in src/content/registry.ts, when authored.
 */

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function host(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function L(
  url: string,
  kind: LinkKind,
  label?: Bi | string,
  dead = false,
): ExternalLink {
  return { url, kind, label: label ?? host(url), dead };
}

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

type RawLesson = Omit<LessonMeta, "level" | "links"> & { links?: ExternalLink[] };

function atLevel(level: JlptLevel, rows: RawLesson[]): LessonMeta[] {
  return rows.map((r) => ({ ...r, level, links: r.links ?? [] }));
}

// ---------------------------------------------------------------------------
// N5 — refresher
// ---------------------------------------------------------------------------

export const N5_REFRESHER_LESSONS = atLevel("N5", [
  {
    id: "n5-diagnostic",
    legacyDay: 1,
    title: { en: "N5 Diagnostic", id: "Diagnostik N5" },
    task: { en: "N5 diagnostic test", id: "Tes diagnostik N5" },
    type: "diagnostic",
    durationNote: { en: "~25 min", id: "~25 mnt" },
    contentSlug: "n5-diagnostic",
    links: [L("https://www.jlpt.jp/e/samples/n5/index.html", "sample", "Official JLPT N5 sample")],
  },
  {
    id: "n5-particles",
    legacyDay: 2,
    title: { en: "Particles", id: "Partikel" },
    task: { en: "30 drills + 15 sentence builds", id: "30 latihan + 15 susun kalimat" },
    type: "grammar",
    durationNote: { en: "~30 min", id: "~30 mnt" },
    contentSlug: "particles",
    links: [L("https://www.mlcjapanese.co.jp/img/file60.pdf", "pdf", "MLC particle worksheet")],
  },
  {
    id: "n5-verb-forms",
    legacyDay: 3,
    title: { en: "Verb Forms", id: "Bentuk Kata Kerja" },
    task: { en: "30 conjugations + 20 questions", id: "30 konjugasi + 20 soal" },
    type: "grammar",
    durationNote: { en: "~25 min", id: "~25 mnt" },
    contentSlug: "verb-forms",
    links: [L("https://baileysnyder.com/jconj/", "exercise", "Bailey Snyder conjugation drill")],
  },
  {
    id: "n5-adjectives",
    legacyDay: 4,
    title: { en: "Adjectives", id: "Kata Sifat" },
    task: { en: "30 drills + speaking", id: "30 latihan + berbicara" },
    type: "grammar",
    durationNote: { en: "~25 min", id: "~25 mnt" },
    contentSlug: "adjectives",
  },
  {
    id: "n5-vocab-kanji",
    legacyDay: 5,
    title: { en: "Vocab / Kanji", id: "Kosakata / Kanji" },
    task: { en: "50 vocab + 20 kanji", id: "50 kosakata + 20 kanji" },
    type: "vocab-kanji",
    durationNote: {
      en: "Vocab 120 min · Kanji 95 min · ≥5 practice sets each",
      id: "Kosakata 120 mnt · Kanji 95 mnt · min. 5 set latihan tiap bagian",
    },
    contentSlug: "n5-vocab-kanji",
    links: [
      L(
        "https://www.minnanihongo.com/quizzes?level=N5&categories=kanji,vocabulary&page=1",
        "exercise",
        "Minna no Nihongo N5 quizzes",
      ),
    ],
  },
  {
    id: "n5-te-form",
    legacyDay: 6,
    title: { en: "〜て Form", id: "Bentuk 〜て" },
    titleJa: "〜て形",
    task: { en: "40 conjugations + grammar uses", id: "40 konjugasi + penggunaan tata bahasa" },
    type: "grammar",
    durationNote: { en: "~30 min", id: "~30 mnt" },
    contentSlug: "te-form",
    links: [L("https://baileysnyder.com/jconj/", "exercise", "Bailey Snyder conjugation drill")],
  },
  {
    id: "n5-location",
    legacyDay: 7,
    title: { en: "Location", id: "Lokasi" },
    task: { en: "Grammar + speaking", id: "Tata bahasa + berbicara" },
    type: "grammar",
    durationNote: { en: "~25 min", id: "~25 mnt" },
    contentSlug: "location",
    links: [
      L(
        "https://ltl-japanese.com/grammar-bank/location-particles/",
        "explainer",
        "LTL — location particles",
      ),
    ],
  },
  {
    id: "n5-time-routine",
    legacyDay: 8,
    title: { en: "Time & Routine", id: "Waktu & Rutinitas" },
    task: { en: "Grammar + short writing", id: "Tata bahasa + menulis singkat" },
    type: "skill",
    durationNote: { en: "~25 min", id: "~25 mnt" },
    contentSlug: "time-routine",
  },
  {
    id: "n5-reading-1",
    legacyDay: 9,
    title: { en: "Reading", id: "Membaca" },
    task: { en: "5 short passages", id: "5 bacaan singkat" },
    type: "reading",
    durationNote: { en: "~30 min", id: "~30 mnt" },
    contentSlug: "n5-reading-1",
    links: [
      L("https://www.thejapanesepage.com/jlpt-n5-reading/", "reading", "The Japanese Page — N5 reading"),
    ],
  },
  {
    id: "n5-listening-1",
    legacyDay: 10,
    title: { en: "Listening", id: "Menyimak" },
    task: { en: "30–40 minutes of listening", id: "30–40 menit menyimak" },
    type: "listening",
    durationNote: { en: "~35 min", id: "~35 mnt" },
    contentSlug: "n5-listening-1",
    links: [
      L("https://jlptpro.com/course/jlpt-n5/listening-tests", "listening", "JLPT Pro — N5 listening tests"),
    ],
  },
  {
    id: "n5-integration-test",
    legacyDay: 11,
    title: { en: "Integration", id: "Integrasi" },
    task: { en: "Mini test across the week", id: "Tes mini gabungan sepekan" },
    type: "test",
    durationNote: { en: "~20 min", id: "~20 mnt" },
    contentSlug: "n5-integration",
    links: [L("https://bunpro.jp/id/jlpt_practice_tests", "exercise", "Bunpro — JLPT practice tests")],
  },
  {
    id: "n5-exit-test",
    legacyDay: 12,
    title: { en: "N5 Exit Test", id: "Tes Akhir N5" },
    task: { en: "Full N5 mock test", id: "Tes tiruan N5 lengkap" },
    type: "test",
    durationNote: { en: "~45 min", id: "~45 mnt" },
    contentSlug: "n5-exit",
  },
]);

// ---------------------------------------------------------------------------
// N4 — grammar core
// ---------------------------------------------------------------------------

export const N4_CORE_LESSONS = atLevel("N4", [
  {
    id: "n4-plain-form-1",
    legacyDay: 13,
    title: { en: "Plain Form (1)", id: "Bentuk Biasa (1)" },
    titleJa: "普通形（１）",
    task: {
      en: "Plain form (V / adj / noun) + 30 transformation drills",
      id: "Bentuk biasa (V / kata sifat / nomina) + 30 latihan transformasi",
    },
    type: "grammar",
    durationNote: { en: "~35 min", id: "~35 mnt" },
    contentSlug: "plain-form-1",
    links: [L("https://www.mlcjapanese.co.jp/n5_06_01.html", "explainer", "MLC — plain form")],
  },
  {
    id: "n4-plain-form-2",
    legacyDay: 14,
    title: { en: "Plain Form (2)", id: "Bentuk Biasa (2)" },
    titleJa: "普通形（２）",
    task: {
      en: "ます → dictionary / ない / た / なかった + 30 questions",
      id: "ます → kamus / ない / た / なかった + 30 soal",
    },
    type: "grammar",
    durationNote: { en: "~30 min", id: "~30 mnt" },
    contentSlug: "plain-form-2",
  },
  {
    id: "n4-to-omoimasu",
    legacyDay: 15,
    title: { en: "Plain form + と思います", id: "Bentuk biasa + と思います" },
    titleJa: "普通形＋と思います",
    task: { en: "〜と思います / 〜と思いません + speaking", id: "〜と思います / 〜と思いません + berbicara" },
    type: "grammar",
    links: [L("https://www.mlcjapanese.co.jp/n4_04_12.html", "explainer", "MLC — と思います")],
  },
  {
    id: "n4-sou-desu-appearance",
    legacyDay: 16,
    title: { en: "そうです (looks like) — 1", id: "そうです (kelihatannya) — 1" },
    titleJa: "そうです（１）",
    task: { en: "〜そうです for appearance + 11 questions", id: "〜そうです untuk penampilan + 11 soal" },
    type: "grammar",
    links: [
      L("https://a2-2.marugotoweb.jp/en/grammar/detail/topic1-sec2-3/", "explainer", "Marugoto — appearance そう"),
      L(
        "https://laits.utexas.edu/japanese/joshu/grammar/gquiz/y2/412l/gq_y2_412l_soo_looks.php",
        "exercise",
        "UT Austin — そう (looks) quiz",
      ),
    ],
  },
  {
    id: "n4-sou-desu-hearsay",
    legacyDay: 17,
    title: { en: "そうです (hearsay) — 2", id: "そうです (katanya) — 2" },
    titleJa: "そうです（２）",
    task: { en: "V/Adj そうです + prediction speaking", id: "V/Adj そうです + berbicara prediksi" },
    type: "grammar",
    links: [
      L(
        "https://wasabi-jpn.com/magazine/japanese-lessons/japanese-grammar-exercise-expressing-hearsay/",
        "explainer",
        "Wasabi — expressing hearsay",
      ),
    ],
  },
  {
    id: "n4-noun-modification-1",
    legacyDay: 18,
    title: { en: "Noun Modification (1)", id: "Modifikasi Nomina (1)" },
    titleJa: "名詞修飾",
    task: { en: "名詞修飾 + 20 sentence-building drills", id: "名詞修飾 + 20 latihan susun kalimat" },
    type: "grammar",
    links: [L("https://www.mlcjapanese.co.jp/n5_04_06.html", "explainer", "MLC — noun modification")],
  },
  {
    id: "n4-weekly-review-1",
    legacyDay: 19,
    title: { en: "Weekly Review (1)", id: "Ulasan Mingguan (1)" },
    task: {
      en: "Review 普通形 · と思う · そう + mini test",
      id: "Ulas 普通形 · と思う · そう + tes mini",
    },
    type: "review",
    links: [
      L("https://sakuranihongo.jp/articles/130_1.html", "explainer", "Sakura Nihongo — grammar notes"),
      L("https://genki.haliya.net/lessons/lesson-13/grammar-5/", "explainer", "Genki L13 grammar 5"),
      L("https://genki.haliya.net/lessons/lesson-13/grammar-6/", "explainer", "Genki L13 grammar 6"),
      L("https://steven-kraft.com/projects/japanese/genki/genki17-1/", "exercise", "Steven Kraft — Genki 17 quiz"),
    ],
  },
  {
    id: "n4-noun-modification-2",
    legacyDay: 20,
    title: { en: "Noun Modification (2)", id: "Modifikasi Nomina (2)" },
    task: { en: "Complex noun phrases + 3 reading passages", id: "Frasa nomina kompleks + 3 bacaan" },
    type: "reading",
    links: [
      L(
        "https://jlpt-website.vercel.app/levels/n4/reading/699bf0c2755155d412672841",
        "reading",
        "JLPT Website — N4 reading",
        true,
      ),
    ],
  },
  {
    id: "n4-n-desu",
    legacyDay: 21,
    title: { en: "〜んです", id: "〜んです" },
    titleJa: "〜んです",
    task: { en: "〜んです / 〜んですか / 〜んですが + role play", id: "〜んです / 〜んですか / 〜んですが + bermain peran" },
    type: "grammar",
    links: [L("https://www.mlcjapanese.co.jp/n4_01_04.html", "explainer", "MLC — んです")],
  },
  {
    id: "n4-ta-koto-ga-aru",
    legacyDay: 22,
    title: { en: "〜たことがあります", id: "〜たことがあります" },
    titleJa: "〜たことがあります",
    task: { en: "Experience + interview speaking", id: "Pengalaman + wawancara berbicara" },
    type: "grammar",
    links: [L("https://www.tofugu.com/japanese-grammar/takotogaaru/", "explainer", "Tofugu — たことがある")],
  },
  {
    id: "n4-tari-tari",
    legacyDay: 23,
    title: { en: "〜たり〜たり", id: "〜たり〜たり" },
    titleJa: "〜たり〜たり",
    task: { en: "Listing activities + writing / speaking", id: "Mendaftar kegiatan + menulis / berbicara" },
    type: "grammar",
    links: [
      L("https://www.tofugu.com/japanese-grammar/tarisuru/", "explainer", "Tofugu — たりする"),
      L(
        "https://nihongo-arekore.com/wp-content/uploads/2021/11/%EF%BD%9E%E3%81%9F%E3%82%8A1.pdf",
        "pdf",
        "Nihongo Arekore — たり worksheet",
      ),
    ],
  },
  {
    id: "n4-nagara",
    legacyDay: 24,
    title: { en: "〜ながら", id: "〜ながら" },
    titleJa: "〜ながら",
    task: { en: "Simultaneous actions + 20 drills + speaking", id: "Aksi bersamaan + 20 latihan + berbicara" },
    type: "grammar",
    links: [
      L("https://www.tofugu.com/japanese-grammar/verb-nagara/", "explainer", "Tofugu — ながら"),
      L("https://www.japanese-nihongo.com/grammar/04may1.html", "exercise", "Japanese-Nihongo — ながら practice"),
    ],
  },
  {
    id: "n4-potential-form",
    legacyDay: 25,
    title: { en: "Potential Form", id: "Bentuk Potensial" },
    titleJa: "可能形",
    task: { en: "V-potential + ability / possibility practice", id: "V-potensial + latihan kemampuan / kemungkinan" },
    type: "grammar",
    links: [L("https://www.mlcjapanese.co.jp/n4_01_07.html", "explainer", "MLC — potential form")],
  },
  {
    id: "n4-weekly-review-2",
    legacyDay: 26,
    title: { en: "Weekly Review (2)", id: "Ulasan Mingguan (2)" },
    task: {
      en: "Grammar + reading + listening + integrated test",
      id: "Tata bahasa + membaca + menyimak + tes gabungan",
    },
    type: "review",
    links: [
      L(
        "https://www.mlcjapanese.co.jp/n5_jlpt_grammar_quiz_01.html",
        "exercise",
        "MLC — N5 grammar quiz (1–12)",
      ),
    ],
  },
  {
    id: "n4-shi-reasons",
    legacyDay: 27,
    title: { en: "〜し (reasons)", id: "〜し (alasan)" },
    titleJa: "〜し",
    task: { en: "〜し〜し / stacking multiple reasons", id: "〜し〜し / menumpuk beberapa alasan" },
    type: "grammar",
    links: [L("https://www.tofugu.com/japanese-grammar/shi/", "explainer", "Tofugu — し")],
  },
  {
    id: "n4-foundation-review",
    legacyDay: 28,
    title: { en: "N4 Foundation Review", id: "Ulasan Fondasi N4" },
    task: {
      en: "All grammar so far + 50 questions + error analysis",
      id: "Semua tata bahasa sejauh ini + 50 soal + analisis kesalahan",
    },
    type: "review",
    links: [
      L(
        "https://www.mlcjapanese.co.jp/n5_jlpt_grammar_quiz_01.html",
        "exercise",
        "MLC — N5 grammar quiz (1–12)",
      ),
    ],
  },
  {
    id: "n4-foundation-test",
    legacyDay: 29,
    title: { en: "N4 Foundation Test", id: "Tes Fondasi N4" },
    task: {
      en: "Grammar + vocab + reading + listening + speaking",
      id: "Tata bahasa + kosakata + membaca + menyimak + berbicara",
    },
    type: "test",
    links: [L("https://bunpro.jp/id/jlpt_practice_tests", "exercise", "Bunpro — JLPT practice tests (N4-1)")],
  },
  {
    id: "n4-core-diagnostic",
    legacyDay: 30,
    title: { en: "N4 Core Diagnostic", id: "Diagnostik Inti N4" },
    task: { en: "Review foundation + 40 grammar questions", id: "Ulas fondasi + 40 soal tata bahasa" },
    type: "diagnostic",
  },
  {
    id: "n4-tara",
    legacyDay: 31,
    title: { en: "〜たら (conditional)", id: "〜たら (pengandaian)" },
    titleJa: "〜たら",
    task: { en: "Conditional 〜たら + 30 drills + sentence building", id: "Pengandaian 〜たら + 30 latihan + susun kalimat" },
    type: "grammar",
    links: [L("https://www.tofugu.com/japanese-grammar/conditional-form-tara/", "explainer", "Tofugu — たら")],
  },
  {
    id: "n4-ba",
    legacyDay: 32,
    title: { en: "〜ば (conditional)", id: "〜ば (pengandaian)" },
    titleJa: "〜ば",
    task: { en: "〜ば conditional + contrast with 〜たら", id: "Pengandaian 〜ば + kontras dengan 〜たら" },
    type: "grammar",
    links: [L("https://www.tofugu.com/japanese-grammar/verb-conditional-form-ba/", "explainer", "Tofugu — ば")],
  },
  {
    id: "n4-weekly-review-3",
    legacyDay: 33,
    title: { en: "Weekly Review", id: "Ulasan Mingguan" },
    task: { en: "〜たら · 〜ば + reading / listening", id: "〜たら · 〜ば + membaca / menyimak" },
    type: "review",
  },
  {
    id: "n4-nara",
    legacyDay: 34,
    title: { en: "〜なら", id: "〜なら" },
    titleJa: "〜なら",
    task: { en: "〜なら + context practice", id: "〜なら + latihan konteks" },
    type: "grammar",
    links: [L("https://www.tofugu.com/japanese-grammar/conditional-form-nara/", "explainer", "Tofugu — なら")],
  },
  {
    id: "n4-to-natural-result",
    legacyDay: 35,
    title: { en: "〜と (natural result)", id: "〜と (akibat alami)" },
    titleJa: "〜と",
    task: { en: "〜と + automatic / natural consequence", id: "〜と + akibat otomatis / alami" },
    type: "grammar",
    links: [L("https://www.tofugu.com/japanese-grammar/verb-to/", "explainer", "Tofugu — と")],
  },
  {
    id: "n4-conditionals-review",
    legacyDay: 36,
    title: { en: "Conditionals Review", id: "Ulasan Pengandaian" },
    task: { en: "と · たら · ば · なら comparison + 40 questions", id: "Perbandingan と · たら · ば · なら + 40 soal" },
    type: "review",
    links: [
      L("https://elon.io/grammar/japanese/paths/untangling-conditionals", "exercise", "Elon.io — untangling conditionals"),
      L("https://wordwall.net/ja/resource/16804620/", "exercise", "Wordwall — と・たら・ば・なら"),
    ],
  },
  {
    id: "n4-temo-temoii",
    legacyDay: 37,
    title: { en: "〜ても / 〜てもいい", id: "〜ても / 〜てもいい" },
    titleJa: "〜ても",
    task: { en: "〜ても / 〜てもいい？ + concession", id: "〜ても / 〜てもいい？ + konsesi" },
    type: "grammar",
    links: [
      L("https://www.tofugu.com/japanese-grammar/temoii/", "explainer", "Tofugu — てもいい"),
      L("https://bunpro.jp/grammar_points/%E3%81%A6%E3%82%82", "explainer", "Bunpro — ても"),
    ],
  },
  {
    id: "n4-noni",
    legacyDay: 38,
    title: { en: "〜のに (contrast)", id: "〜のに (kontras)" },
    titleJa: "〜のに",
    task: { en: "Contrast 〜のに + 20 drills + speaking", id: "Kontras 〜のに + 20 latihan + berbicara" },
    type: "grammar",
    links: [L("https://www.tofugu.com/japanese-grammar/conjunctive-particle-noni/", "explainer", "Tofugu — のに")],
  },
  {
    id: "n4-node-kara",
    legacyDay: 39,
    title: { en: "〜ので / から", id: "〜ので / から" },
    titleJa: "〜ので・から",
    task: { en: "Reason expressions + comparison", id: "Ungkapan alasan + perbandingan" },
    type: "grammar",
    links: [
      L(
        "https://ltl-japanese.com/grammar-bank/causes-reasons-with-%E3%81%AE%E3%81%A7-%E3%81%8B%E3%82%89/",
        "explainer",
        "LTL — ので / から",
      ),
    ],
  },
  {
    id: "n4-weekly-review-4",
    legacyDay: 40,
    title: { en: "Weekly Review", id: "Ulasan Mingguan" },
    task: { en: "Condition + reason + mini test", id: "Syarat + alasan + tes mini" },
    type: "review",
  },
  {
    id: "n4-tsumori",
    legacyDay: 41,
    title: { en: "〜つもり (intention)", id: "〜つもり (niat)" },
    titleJa: "〜つもり",
    task: { en: "〜つもりです / 〜つもりはない", id: "〜つもりです / 〜つもりはない" },
    type: "grammar",
    links: [L("https://www.tofugu.com/japanese-grammar/tsumori/", "explainer", "Tofugu — つもり")],
  },
  {
    id: "n4-yotei",
    legacyDay: 42,
    title: { en: "〜予定 (plans)", id: "〜予定 (rencana)" },
    titleJa: "〜予定",
    task: { en: "〜予定です + scheduled plans", id: "〜予定です + rencana terjadwal" },
    type: "grammar",
    links: [L("https://kepojepang.com/jlpt/yotei-da/", "explainer", "Kepo Jepang — 予定")],
  },
  {
    id: "n4-koto-ni-suru-naru",
    legacyDay: 43,
    title: { en: "〜ことにする / なる", id: "〜ことにする / なる" },
    titleJa: "〜ことにする・なる",
    task: { en: "Personal decision vs. arranged outcome", id: "Keputusan pribadi vs. hasil yang diatur" },
    type: "grammar",
    links: [
      L("https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%AB%E3%81%AA%E3%82%8B", "explainer", "Bunpro — ことになる"),
      L("https://bunpro.jp/grammar_points/%E3%81%93%E3%81%A8%E3%81%AB%E3%81%99%E3%82%8B", "explainer", "Bunpro — ことにする"),
    ],
  },
  {
    id: "n4-you-ni-naru",
    legacyDay: 44,
    title: { en: "〜ようになる", id: "〜ようになる" },
    titleJa: "〜ようになる",
    task: { en: "Change in ability / habit", id: "Perubahan kemampuan / kebiasaan" },
    type: "grammar",
    links: [
      L("https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%82%8B", "explainer", "Bunpro — ようになる"),
    ],
  },
  {
    id: "n4-you-ni-suru",
    legacyDay: 45,
    title: { en: "〜ようにする", id: "〜ようにする" },
    titleJa: "〜ようにする",
    task: { en: "Making an effort / building a habit", id: "Berusaha / membangun kebiasaan" },
    type: "grammar",
    links: [
      L("https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B", "explainer", "Bunpro — ようにする"),
    ],
  },
  {
    id: "n4-weekly-review-5",
    legacyDay: 46,
    title: { en: "Weekly Review", id: "Ulasan Mingguan" },
    task: { en: "Intention + decision + change", id: "Niat + keputusan + perubahan" },
    type: "review",
  },
  {
    id: "n4-tame-ni",
    legacyDay: 47,
    title: { en: "〜ために (purpose)", id: "〜ために (tujuan)" },
    titleJa: "〜ために",
    task: { en: "Purpose / reason 〜ために", id: "Tujuan / alasan 〜ために" },
    type: "grammar",
    links: [L("https://kepojepang.com/jlpt/tame-ni/", "explainer", "Kepo Jepang — ために")],
  },
  {
    id: "n4-you-ni-purpose",
    legacyDay: 48,
    title: { en: "〜ように (purpose)", id: "〜ように (tujuan)" },
    titleJa: "〜ように",
    task: { en: "Purpose with ability / state verbs", id: "Tujuan dengan kata kerja kemampuan / keadaan" },
    type: "grammar",
    links: [L("https://bunpro.jp/grammar_points/%E3%82%88%E3%81%86%E3%81%AB", "explainer", "Bunpro — ように")],
  },
  {
    id: "n4-sugiru",
    legacyDay: 49,
    title: { en: "〜すぎる (too much)", id: "〜すぎる (terlalu)" },
    titleJa: "〜すぎる",
    task: { en: "Excessive degree + conjugation", id: "Tingkat berlebihan + konjugasi" },
    type: "grammar",
    links: [L("https://www.tofugu.com/japanese-grammar/sugiru/", "explainer", "Tofugu — すぎる")],
  },
  {
    id: "n4-yasui-nikui",
    legacyDay: 50,
    title: { en: "〜やすい / 〜にくい", id: "〜やすい / 〜にくい" },
    titleJa: "〜やすい・にくい",
    task: { en: "Ease / difficulty of an action", id: "Mudah / sulit melakukan suatu tindakan" },
    type: "grammar",
    links: [
      L("https://ltl-japanese.com/grammar-bank/easy-difficult-actions/", "explainer", "LTL — easy / difficult actions"),
    ],
  },
  {
    id: "n4-compound-verbs",
    legacyDay: 51,
    title: { en: "Compound Verbs", id: "Kata Kerja Majemuk" },
    titleJa: "〜始める・続ける・終わる・出す",
    task: { en: "〜始める / 〜続ける / 〜終わる / 〜出す", id: "〜始める / 〜続ける / 〜終わる / 〜出す" },
    type: "grammar",
    links: [
      L(
        "https://hakushikijapanese.com/home/grammar/jlpt-n4/beginning-actions/",
        "explainer",
        "Hakushiki — compound verbs",
      ),
    ],
  },
  {
    id: "n4-weekly-review-6",
    legacyDay: 52,
    title: { en: "Weekly Review", id: "Ulasan Mingguan" },
    task: { en: "Purpose + degree + conjugation", id: "Tujuan + tingkat + konjugasi" },
    type: "review",
  },
  {
    id: "n4-temiru-teoku",
    legacyDay: 53,
    title: { en: "〜てみる / 〜ておく", id: "〜てみる / 〜ておく" },
    titleJa: "〜てみる・ておく",
    task: { en: "Trying something + preparation", id: "Mencoba sesuatu + persiapan" },
    type: "grammar",
    links: [
      L("https://www.tofugu.com/japanese-grammar/temiru/", "explainer", "Tofugu — てみる"),
      L("https://www.tofugu.com/japanese-grammar/teoku/", "explainer", "Tofugu — ておく"),
    ],
  },
  {
    id: "n4-teshimau",
    legacyDay: 54,
    title: { en: "〜てしまう", id: "〜てしまう" },
    titleJa: "〜てしまう",
    task: { en: "Completion / regret", id: "Penyelesaian / penyesalan" },
    type: "grammar",
    links: [
      L(
        "https://bunpro.jp/grammar_points/%E3%81%A6%E3%81%97%E3%81%BE%E3%81%86-%E3%81%A1%E3%82%83%E3%81%86",
        "explainer",
        "Bunpro — てしまう / ちゃう",
      ),
    ],
  },
  {
    id: "n4-shika-nai-bakari",
    legacyDay: 55,
    title: { en: "〜しか〜ない / 〜ばかり", id: "〜しか〜ない / 〜ばかり" },
    titleJa: "〜しか〜ない・ばかり",
    task: { en: "Limitation + tendency", id: "Batasan + kecenderungan" },
    type: "grammar",
    links: [
      L("https://bunpro.jp/grammar_points/%E3%81%97%E3%81%8B-%E3%81%AA%E3%81%84", "explainer", "Bunpro — しか〜ない"),
      L("https://bunpro.jp/grammar_points/%E3%81%B0%E3%81%8B%E3%82%8A", "explainer", "Bunpro — ばかり"),
    ],
  },
  {
    id: "n4-hazu-kamoshirenai",
    legacyDay: 56,
    title: { en: "〜はず / 〜かもしれません", id: "〜はず / 〜かもしれません" },
    titleJa: "〜はず・かもしれない",
    task: { en: "Expectation + possibility", id: "Perkiraan + kemungkinan" },
    type: "grammar",
    links: [
      L("https://bunpro.jp/grammar_points/%E3%81%AF%E3%81%9A%E3%81%A0", "explainer", "Bunpro — はずだ"),
      L("https://bunpro.jp/grammar_points/%E3%81%AF%E3%81%9A%E3%81%8C%E3%81%AA%E3%81%84", "explainer", "Bunpro — はずがない"),
      L("https://bunpro.jp/grammar_points/%E3%81%8B%E3%82%82%E3%81%97%E3%82%8C%E3%81%AA%E3%81%84", "explainer", "Bunpro — かもしれない"),
    ],
  },
  {
    id: "n4-sou-you-mitai-rashii",
    legacyDay: 57,
    title: { en: "そう / よう / みたい / らしい", id: "そう / よう / みたい / らしい" },
    titleJa: "そう・よう・みたい・らしい",
    task: { en: "Appearance / inference / hearsay contrast", id: "Kontras penampilan / kesimpulan / katanya" },
    type: "grammar",
    links: [
      L(
        "https://elon.io/grammar/japanese/nuance/sou-you-mitai-rashii-comparison",
        "explainer",
        "Elon.io — そう / よう / みたい / らしい",
      ),
    ],
  },
  {
    id: "n4-integrated-grammar",
    legacyDay: 58,
    title: { en: "Integrated Grammar", id: "Tata Bahasa Terpadu" },
    task: { en: "100-question N4 grammar review", id: "Ulasan tata bahasa N4 100 soal" },
    type: "review",
    links: [
      L(
        "https://www.japanesejlpt.com/learn-japanese/jlpt-n4-grammar-tests/",
        "exercise",
        "JapaneseJLPT — N4 grammar tests (1–37)",
      ),
    ],
  },
  {
    id: "n4-core-mock",
    legacyDay: 59,
    title: { en: "N4 Core Mock", id: "Tes Tiruan Inti N4" },
    task: {
      en: "Grammar + vocab + kanji + reading + listening",
      id: "Tata bahasa + kosakata + kanji + membaca + menyimak",
    },
    type: "test",
    links: [L("https://nihonez.com/jlpt-n4-test/", "exercise", "Nihonez — JLPT N4 test")],
  },
  {
    id: "n4-core-error-analysis",
    legacyDay: 60,
    title: { en: "Error Analysis", id: "Analisis Kesalahan" },
    task: {
      en: "Correct the mock + weak-point review + speaking / writing",
      id: "Koreksi tes tiruan + ulas titik lemah + berbicara / menulis",
    },
    type: "review",
  },
]);

// ---------------------------------------------------------------------------
// N4 — exam sprint: reading, listening, remedials, mock tests
// ---------------------------------------------------------------------------

export const N4_EXAM_SPRINT_LESSONS = atLevel("N4", [
  {
    id: "n4-exam-diagnostic",
    legacyDay: 61,
    title: { en: "N4 Diagnostic", id: "Diagnostik N4" },
    task: { en: "Mini mock: grammar + reading + listening", id: "Tes tiruan mini: tata bahasa + membaca + menyimak" },
    type: "diagnostic",
    links: [L("https://www.jlpt.jp/e/samples/n4/index.html", "sample", "Official JLPT N4 sample")],
  },
  {
    id: "n4-reading-information",
    legacyDay: 62,
    title: { en: "Reading: Information", id: "Membaca: Informasi" },
    task: { en: "Notice / poster / schedule + 5 passages", id: "Pengumuman / poster / jadwal + 5 bacaan" },
    type: "reading",
    links: [
      L("https://jlpt-website.vercel.app/levels/n4/reading", "reading", "JLPT Website — N4 reading", true),
      L("https://jlptpro.com/course/jlpt-n4/reading-tests", "reading", "JLPT Pro — N4 reading tests"),
      L("https://japanesereadingpractice.com/jlpt/n4", "reading", "Japanese Reading Practice — N4"),
    ],
  },
  {
    id: "n4-reading-email",
    legacyDay: 63,
    title: { en: "Reading: Email", id: "Membaca: Email" },
    task: { en: "Email / message + identify purpose & key info", id: "Email / pesan + kenali tujuan & info kunci" },
    type: "reading",
  },
  {
    id: "n4-reading-short-essay",
    legacyDay: 64,
    title: { en: "Reading: Short Essay", id: "Membaca: Esai Pendek" },
    task: { en: "3 short passages + main idea", id: "3 bacaan pendek + gagasan utama" },
    type: "reading",
  },
  {
    id: "n4-reading-detail",
    legacyDay: 65,
    title: { en: "Reading: Detail", id: "Membaca: Detail" },
    task: { en: "5 passages + timed practice", id: "5 bacaan + latihan berwaktu" },
    type: "reading",
  },
  {
    id: "n4-reading-strategy",
    legacyDay: 66,
    title: { en: "Reading Strategy", id: "Strategi Membaca" },
    task: { en: "Skimming, scanning, keywords + inference", id: "Skimming, scanning, kata kunci + inferensi" },
    type: "skill",
  },
  {
    id: "n4-reading-mock",
    legacyDay: 67,
    title: { en: "Reading Mock", id: "Tes Tiruan Membaca" },
    task: { en: "Timed N4 reading + error analysis", id: "Membaca N4 berwaktu + analisis kesalahan" },
    type: "test",
  },
  {
    id: "n4-listening-key-info",
    legacyDay: 68,
    title: { en: "Listening: Key Info", id: "Menyimak: Info Kunci" },
    task: { en: "Who / what / when / where + 20 min listening", id: "Siapa / apa / kapan / di mana + 20 mnt menyimak" },
    type: "listening",
    links: [
      L("https://jlptpro.com/course/jlpt-n4/listening-tests", "listening", "JLPT Pro — N4 listening tests"),
      L(YT("AMwQv0joB9I"), "video", "N4 listening practice 1"),
      L(YT("jiFLMgBhijQ"), "video", "N4 listening practice 2"),
      L(YT("2rpQJjVVYU8"), "video", "N4 listening practice 3"),
      L(YT("xyQL4mqppgQ"), "video", "N4 listening practice 4"),
      L(YT("uDrxrrsWXfw"), "video", "N4 listening practice 5"),
    ],
    youtube: ["AMwQv0joB9I", "jiFLMgBhijQ", "2rpQJjVVYU8", "xyQL4mqppgQ", "uDrxrrsWXfw"],
  },
  {
    id: "n4-listening-response",
    legacyDay: 69,
    title: { en: "Listening: Response", id: "Menyimak: Respons" },
    task: { en: "Appropriate-response questions", id: "Soal respons yang tepat" },
    type: "listening",
  },
  {
    id: "n4-listening-situation",
    legacyDay: 70,
    title: { en: "Listening: Situation", id: "Menyimak: Situasi" },
    task: { en: "Situation → problem → solution", id: "Situasi → masalah → solusi" },
    type: "listening",
  },
  {
    id: "n4-listening-details",
    legacyDay: 71,
    title: { en: "Listening: Details", id: "Menyimak: Detail" },
    task: { en: "Numbers, time, place, changes", id: "Angka, waktu, tempat, perubahan" },
    type: "listening",
  },
  {
    id: "n4-listening-intention",
    legacyDay: 72,
    title: { en: "Listening: Intention", id: "Menyimak: Maksud" },
    task: { en: "Speaker intention / purpose", id: "Maksud / tujuan pembicara" },
    type: "listening",
  },
  {
    id: "n4-shadowing",
    legacyDay: 73,
    title: { en: "Shadowing", id: "Shadowing" },
    task: { en: "Listening + shadowing + dictation", id: "Menyimak + shadowing + dikte" },
    type: "skill",
  },
  {
    id: "n4-listening-mock",
    legacyDay: 74,
    title: { en: "Listening Mock", id: "Tes Tiruan Menyimak" },
    task: { en: "Timed N4 listening + error analysis", id: "Menyimak N4 berwaktu + analisis kesalahan" },
    type: "test",
    links: [
      L(YT("uIMOsdwUbro"), "video", "N4 listening mock 1"),
      L(YT("HK8z8A2_Qgc"), "video", "N4 listening mock 2"),
    ],
    youtube: ["uIMOsdwUbro", "HK8z8A2_Qgc"],
  },
  {
    id: "n4-grammar-diagnostic",
    legacyDay: 75,
    title: { en: "Grammar Diagnostic", id: "Diagnostik Tata Bahasa" },
    task: { en: "80 N4 grammar questions", id: "80 soal tata bahasa N4" },
    type: "diagnostic",
  },
  {
    id: "n4-conditionals-remedial",
    legacyDay: 76,
    title: { en: "Conditionals Remedial", id: "Remedial Pengandaian" },
    task: { en: "と · たら · ば · なら remedial", id: "Remedial と · たら · ば · なら" },
    type: "review",
    links: [L(YT("6EmwBNxXFf4"), "video", "Conditionals review video")],
    youtube: ["6EmwBNxXFf4"],
  },
  {
    id: "n4-reason-contrast-review",
    legacyDay: 77,
    title: { en: "Reason / Contrast", id: "Alasan / Kontras" },
    task: { en: "から · ので · のに · ても", id: "から · ので · のに · ても" },
    type: "review",
    links: [L(YT("FmEHIqng5lk"), "video", "から・ので review video")],
    youtube: ["FmEHIqng5lk"],
  },
  {
    id: "n4-intention-decision-review",
    legacyDay: 78,
    title: { en: "Intention / Decision", id: "Niat / Keputusan" },
    task: { en: "つもり · 予定 · ことにする / なる", id: "つもり · 予定 · ことにする / なる" },
    type: "review",
  },
  {
    id: "n4-change-purpose-review",
    legacyDay: 79,
    title: { en: "Change / Purpose", id: "Perubahan / Tujuan" },
    task: { en: "ようになる · ようにする · ために", id: "ようになる · ようにする · ために" },
    type: "review",
  },
  {
    id: "n4-aspect-degree-review",
    legacyDay: 80,
    title: { en: "Aspect / Degree", id: "Aspek / Tingkat" },
    task: { en: "てみる · ておく · てしまう · すぎる", id: "てみる · ておく · てしまう · すぎる" },
    type: "review",
  },
  {
    id: "n4-grammar-review",
    legacyDay: 81,
    title: { en: "Grammar Review", id: "Ulasan Tata Bahasa" },
    task: { en: "100 mixed questions + error analysis", id: "100 soal campuran + analisis kesalahan" },
    type: "review",
  },
  {
    id: "n4-mock-test-1",
    legacyDay: 82,
    title: { en: "Mock Test (1)", id: "Tes Tiruan (1)" },
    task: { en: "Full N4 simulation", id: "Simulasi N4 lengkap" },
    type: "test",
  },
  {
    id: "n4-mock-analysis",
    legacyDay: 83,
    title: { en: "Mock Analysis", id: "Analisis Tes Tiruan" },
    task: { en: "Review all mistakes + weak areas", id: "Ulas semua kesalahan + area lemah" },
    type: "review",
  },
  {
    id: "n4-vocabulary-remedial",
    legacyDay: 84,
    title: { en: "Vocabulary Remedial", id: "Remedial Kosakata" },
    task: { en: "High-frequency N4 vocab + contextual learning", id: "Kosakata N4 frekuensi tinggi + belajar kontekstual" },
    type: "vocab-kanji",
  },
  {
    id: "n4-kanji-remedial",
    legacyDay: 85,
    title: { en: "Kanji Remedial", id: "Remedial Kanji" },
    task: { en: "Kanji readings + 熟語 + contextual reading", id: "Bacaan kanji + 熟語 + membaca kontekstual" },
    type: "vocab-kanji",
  },
  {
    id: "n4-reading-remedial",
    legacyDay: 86,
    title: { en: "Reading Remedial", id: "Remedial Membaca" },
    task: { en: "Weak reading question types", id: "Tipe soal membaca yang lemah" },
    type: "reading",
  },
  {
    id: "n4-listening-remedial",
    legacyDay: 87,
    title: { en: "Listening Remedial", id: "Remedial Menyimak" },
    task: { en: "Weak listening question types", id: "Tipe soal menyimak yang lemah" },
    type: "listening",
  },
  {
    id: "n4-mock-test-2",
    legacyDay: 88,
    title: { en: "Mock Test (2)", id: "Tes Tiruan (2)" },
    task: { en: "Full N4 simulation", id: "Simulasi N4 lengkap" },
    type: "test",
  },
  {
    id: "n4-final-review",
    legacyDay: 89,
    title: { en: "Final Review", id: "Ulasan Akhir" },
    task: { en: "Error log + grammar / vocab / kanji review", id: "Catatan kesalahan + ulasan tata bahasa / kosakata / kanji" },
    type: "review",
  },
  {
    id: "n4-final-benchmark",
    legacyDay: 90,
    title: { en: "Final Benchmark", id: "Tolok Ukur Akhir" },
    task: { en: "Final test + speaking + study strategy", id: "Tes akhir + berbicara + strategi belajar" },
    type: "test",
  },
]);

// N3, N2 and N1 lessons will be added here.

// ---------------------------------------------------------------------------

export const LESSONS: LessonMeta[] = [
  ...N5_REFRESHER_LESSONS,
  ...N4_CORE_LESSONS,
  ...N4_EXAM_SPRINT_LESSONS,
];

const BY_ID = new Map(LESSONS.map((l) => [l.id, l]));
const BY_LEGACY_DAY = new Map(
  LESSONS.filter((l) => l.legacyDay != null).map((l) => [l.legacyDay!, l]),
);

export function getLesson(id: string | null | undefined): LessonMeta | undefined {
  return id ? BY_ID.get(id) : undefined;
}

export function lessonForLegacyDay(day: number): LessonMeta | undefined {
  return BY_LEGACY_DAY.get(day);
}

export function lessonsAtLevel(level: JlptLevel): LessonMeta[] {
  return LESSONS.filter((l) => l.level === level);
}
