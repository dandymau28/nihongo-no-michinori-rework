"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { useSettings } from "@/context/SettingsContext";
import { STR } from "@/lib/strings";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Segmented } from "@/components/ui/Segmented";
import { JLPT_LEVELS, type JlptLevel } from "@/lib/types";
import { allKanji, getKanji, type KanjiChar } from "@/data/kanji";

/** N1 alone is over 1,200 characters; past this the grid is slower than it is useful. */
const MAX_SHOWN = 400;

function matches(k: KanjiChar, needle: string): boolean {
  if (k.char === needle) return true;
  const lower = needle.toLowerCase();
  return (
    k.meanings.some((m) => m.toLowerCase().includes(lower)) ||
    k.on.some((r) => r.includes(needle)) ||
    k.kun.some((r) => r.includes(needle))
  );
}

/**
 * The kanji grid the deck is built from. Selection order is the deck's card order, so
 * `selected` is a list, not a set.
 */
export function KanjiPicker({
  selected,
  onChange,
  max,
}: {
  selected: string[];
  onChange: (chars: string[]) => void;
  max: number;
}) {
  const { t } = useSettings();
  const [level, setLevel] = useState<JlptLevel | "all">("N5");
  const [search, setSearch] = useState("");
  // Typing stays responsive while the grid catches up behind it.
  const query = useDeferredValue(search.trim());

  const chosen = useMemo(() => new Set(selected), [selected]);
  const full = selected.length >= max;

  const { shown, total } = useMemo(() => {
    const pool = allKanji().filter((k) => level === "all" || k.level === level);
    const hits = query ? pool.filter((k) => matches(k, query)) : pool;
    return { shown: hits.slice(0, MAX_SHOWN), total: hits.length };
  }, [level, query]);

  function toggle(char: string) {
    if (chosen.has(char)) onChange(selected.filter((c) => c !== char));
    else if (!full) onChange([...selected, char]);
  }

  return (
    <div className="space-y-3">
      {/* What's in the deck so far — tap one to take it back out. */}
      <div className="rounded-2xl border border-border bg-surface-2 p-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm font-medium">
            {t(STR.deck_selected)}{" "}
            <span className={cn("tabular-nums", full && "text-warning")}>
              {selected.length}/{max}
            </span>
          </p>
          {selected.length > 0 && (
            <Button size="sm" variant="ghost" onClick={() => onChange([])}>
              {t(STR.deck_clear)}
            </Button>
          )}
        </div>
        {selected.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {selected.map((char) => (
              <button
                key={char}
                type="button"
                onClick={() => toggle(char)}
                title={getKanji(char)?.meanings.join(", ")}
                aria-label={`${char} — ${t(STR.deck_clear)}`}
                className="font-jp grid size-9 place-items-center rounded-lg bg-primary text-lg text-primary-fg transition-opacity hover:opacity-80"
              >
                {char}
              </button>
            ))}
          </div>
        )}
        {full && <p className="mt-2 text-xs text-warning">{t(STR.deck_limit)}</p>}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Segmented
          size="sm"
          value={level}
          onChange={(v) => setLevel(v as JlptLevel | "all")}
          options={[
            { value: "all", label: t(STR.deck_all_levels) },
            ...JLPT_LEVELS.map((l) => ({ value: l, label: l })),
          ]}
        />
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t(STR.deck_search_placeholder)}
          className="h-9 min-w-48 flex-1 rounded-xl border border-border bg-surface px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
        />
      </div>

      {shown.length === 0 ? (
        <p className="py-8 text-center text-sm text-muted">{t(STR.deck_no_match)}</p>
      ) : (
        <>
          <div className="grid grid-cols-6 gap-1.5 sm:grid-cols-10 md:grid-cols-12">
            {shown.map((k) => {
              const on = chosen.has(k.char);
              return (
                <button
                  key={k.char}
                  type="button"
                  onClick={() => toggle(k.char)}
                  aria-pressed={on}
                  disabled={!on && full}
                  title={`${k.level} · ${k.meanings.join(", ")}`}
                  className={cn(
                    "font-jp grid aspect-square place-items-center rounded-lg border text-lg transition-colors",
                    on
                      ? "border-primary bg-primary text-primary-fg"
                      : "border-border bg-surface hover:bg-surface-2",
                    !on && full && "cursor-not-allowed opacity-40",
                  )}
                >
                  {k.char}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-muted">
            {t(STR.deck_showing)} {shown.length} / {total}
          </p>
        </>
      )}
    </div>
  );
}
