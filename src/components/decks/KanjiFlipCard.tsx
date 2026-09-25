"use client";

import { useSettings } from "@/context/SettingsContext";
import { STR } from "@/lib/strings";
import { cn } from "@/lib/cn";
import { meaningsIn, type KanjiChar } from "@/data/kanji";

/**
 * One flashcard. The kanji is on the front; the card turns over to the readings and
 * meaning. The rotation lives in globals.css (`.kf-*`), which also handles
 * prefers-reduced-motion by swapping the faces instead of spinning them.
 */
export function KanjiFlipCard({
  kanji,
  flipped,
  onFlip,
}: {
  kanji: KanjiChar;
  flipped: boolean;
  onFlip: () => void;
}) {
  const { t, lang } = useSettings();
  const meanings = meaningsIn(kanji, lang);

  return (
    <div className="kf-scene">
      <button
        type="button"
        onClick={onFlip}
        aria-pressed={flipped}
        aria-label={
          flipped
            ? `${kanji.char} — ${meanings.join(", ")}`
            : `${kanji.char} — ${t(STR.deck_flip_hint)}`
        }
        className={cn(
          "kf-card block w-full rounded-3xl text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ring)]",
          flipped && "is-flipped",
        )}
      >
        {/* Front — the character on its own, as large as the card allows. */}
        <div className="kf-face kf-front grid min-h-64 place-items-center rounded-3xl border border-border bg-surface p-6 sm:min-h-72">
          <span className="font-jp text-7xl leading-none sm:text-8xl">{kanji.char}</span>
        </div>

        {/* Back — readings first, then what it means. */}
        <div className="kf-face kf-back flex min-h-64 flex-col justify-center gap-3 rounded-3xl border border-primary/40 bg-surface-2 p-6 sm:min-h-72">
          <span className="font-jp text-3xl leading-none">{kanji.char}</span>
          <dl className="space-y-1.5 text-sm">
            {kanji.on.length > 0 && (
              <div className="flex gap-2">
                <dt className="w-10 shrink-0 text-xs font-medium text-muted">{t(STR.deck_on_reading)}</dt>
                <dd className="font-jp">{kanji.on.join("、")}</dd>
              </div>
            )}
            {kanji.kun.length > 0 && (
              <div className="flex gap-2">
                <dt className="w-10 shrink-0 text-xs font-medium text-muted">{t(STR.deck_kun_reading)}</dt>
                <dd className="font-jp">{kanji.kun.join("、")}</dd>
              </div>
            )}
          </dl>
          <p className="text-base font-medium">{meanings.join(", ")}</p>
          <p className="text-xs text-muted">
            {kanji.level} · {kanji.strokes} {t(STR.deck_strokes)}
          </p>
        </div>
      </button>
    </div>
  );
}
