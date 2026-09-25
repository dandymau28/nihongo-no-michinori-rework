// Regenerates src/data/kanji.ts. Run it only to refresh the catalog — the app never
// depends on the kanji-data package, only on the file this writes.
//
//   mkdir /tmp/kanji && cd /tmp/kanji && npm i kanji-data
//   node scripts/kanji/build-catalog.mjs /tmp/kanji/node_modules/kanji-data/data/kanji-meta.json
//
// Sources: KANJIDIC (EDRDG, CC BY-SA 4.0) for readings, meanings and stroke counts;
// Jonathan Waller's lists for the JLPT level. The Indonesian meanings in gloss-id.tsv
// are this project's translation of KANJIDIC's English, so they carry the same licence.
import { readFileSync, writeFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, "..", "..", "src", "data", "kanji.ts");
const META = process.argv[2];
if (!META) {
  console.error("usage: node build-catalog.mjs <path to kanji-data/data/kanji-meta.json>");
  process.exit(1);
}

// One English gloss per line: "english<TAB-less pipe>indonesian". Translating the
// vocabulary once instead of per kanji keeps the same word rendered the same way
// everywhere, and makes a wrong choice a one-line fix.
const idByGloss = new Map(
  readFileSync(join(here, "gloss-id.tsv"), "utf8")
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const i = line.indexOf("|");
      return [line.slice(0, i), line.slice(i + 1)];
    }),
);

const meta = JSON.parse(readFileSync(META, "utf8"));
const rows = (Array.isArray(meta) ? meta : Object.values(meta)).filter((r) => r.jlpt);

// Dictionaries list a dozen readings for a common kanji; three of each is what fits on a
// flashcard and keeps the catalog small enough to ship to the browser.
const cap = (list, n) => (list ?? []).slice(0, n);
// A gloss may legitimately contain a comma ("case (law, grammar)"), so the separators
// have to be characters the data never uses.
const clean = (s) => String(s).replace(/[|;\n]/g, " ").replace(/\s+/g, " ").trim();

const untranslated = new Set();
const translate = (gloss) => {
  const id = idByGloss.get(gloss);
  if (!id) untranslated.add(gloss);
  return id ?? gloss;
};

const lines = rows
  .sort((a, b) => b.jlpt - a.jlpt || (a.freq_mainichi_shinbun ?? 9999) - (b.freq_mainichi_shinbun ?? 9999))
  .map((r) => {
    const meanings = cap(r.meanings, 3).map(clean);
    return [
      r.kanji,
      cap(r.on_readings, 3).map(clean).join(";"),
      cap(r.kun_readings, 3).map(clean).join(";"),
      meanings.join(";"),
      r.jlpt,
      r.stroke_count ?? 0,
      meanings.map(translate).join(";"),
    ].join("|");
  });

const byLevel = {};
for (const r of rows) byLevel[`N${r.jlpt}`] = (byLevel[`N${r.jlpt}`] || 0) + 1;

const file = `// Generated file — do not edit by hand. Rebuild it with scripts/kanji/build-catalog.mjs.
//
// Every kanji in the JLPT lists, N5 to N1 (${rows.length} characters:
// ${Object.entries(byLevel).sort().map(([l, n]) => `${l} ${n}`).join(", ")}).
//
// Dictionary data: KANJIDIC, property of the Electronic Dictionary Research and
// Development Group (https://www.edrdg.org/), used in conformance with the group's
// licence (CC BY-SA 4.0). JLPT levels from Jonathan Waller's JLPT Resources. The
// Indonesian meanings are this project's translation of KANJIDIC's English ones
// (scripts/kanji/gloss-id.tsv) and are covered by the same licence.
//
// Packed one line per kanji to keep the file small; parsed once, on first use. Fields are
// separated by | and list items by ; — a meaning can contain a comma ("case (law, grammar)").

import type { JlptLevel } from "@/lib/types";

export interface KanjiChar {
  /** The character itself. */
  char: string;
  /** On'yomi, katakana, at most three. */
  on: string[];
  /** Kun'yomi, hiragana, at most three (a dot marks where okurigana starts). */
  kun: string[];
  /** English meanings, at most three — KANJIDIC's own wording. */
  meanings: string[];
  /** The same meanings in Indonesian, one for one with \`meanings\`. */
  meaningsId: string[];
  level: JlptLevel;
  strokes: number;
}

const PACKED = \`
${lines.join("\n")}
\`;

function parse(): KanjiChar[] {
  const out: KanjiChar[] = [];
  for (const line of PACKED.trim().split("\\n")) {
    const [char, on, kun, meanings, jlpt, strokes, meaningsId] = line.split("|");
    out.push({
      char,
      on: on ? on.split(";") : [],
      kun: kun ? kun.split(";") : [],
      meanings: meanings ? meanings.split(";") : [],
      meaningsId: meaningsId ? meaningsId.split(";") : [],
      level: \`N\${jlpt}\` as JlptLevel,
      strokes: Number(strokes),
    });
  }
  return out;
}

let cache: KanjiChar[] | null = null;

/** The whole catalog, parsed on first call. */
export function allKanji(): KanjiChar[] {
  return (cache ??= parse());
}

export function kanjiAtLevel(level: JlptLevel): KanjiChar[] {
  return allKanji().filter((k) => k.level === level);
}

export function getKanji(char: string): KanjiChar | undefined {
  return allKanji().find((k) => k.char === char);
}

/** A kanji's meanings in the reader's language, falling back to KANJIDIC's English. */
export function meaningsIn(k: KanjiChar, lang: "en" | "id"): string[] {
  return lang === "id" && k.meaningsId.length > 0 ? k.meaningsId : k.meanings;
}
`;

writeFileSync(OUT, file);
console.log("wrote", OUT);
console.log("kanji:", rows.length, JSON.stringify(byLevel));
console.log("size:", (statSync(OUT).size / 1024).toFixed(0), "KB");
if (untranslated.size) {
  console.log("NO INDONESIAN for", untranslated.size, "glosses:", [...untranslated].slice(0, 20));
  process.exitCode = 1;
}
