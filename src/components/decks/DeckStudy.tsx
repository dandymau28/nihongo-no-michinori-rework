"use client";

import { useEffect, useMemo, useState } from "react";
import { useSettings } from "@/context/SettingsContext";
import { STR } from "@/lib/strings";
import { Button } from "@/components/ui/Button";
import { getKanji, type KanjiChar } from "@/data/kanji";
import { track } from "@/lib/telemetry";
import { KanjiFlipCard } from "./KanjiFlipCard";

function shuffle<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

/** Walk a deck one card at a time. Arrow keys move, space turns the card over. */
export function DeckStudy({ deckId, chars }: { deckId: string; chars: string[] }) {
  const { t } = useSettings();
  const catalog = useMemo(
    () => chars.map(getKanji).filter((k): k is KanjiChar => !!k),
    [chars],
  );
  const [queue, setQueue] = useState<KanjiChar[]>(catalog);
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // A deck edited in another tab, or a fresh deck on the same page, starts over.
  useEffect(() => {
    setQueue(catalog);
    setPos(0);
    setFlipped(false);
  }, [catalog]);

  const card = queue[pos];
  const atEnd = pos >= queue.length;

  function go(delta: number) {
    setFlipped(false);
    setPos((p) => Math.min(Math.max(p + delta, 0), queue.length));
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      // Don't steal keys from a field; nothing here is typed into, but the page around it is.
      const el = e.target as HTMLElement | null;
      if (el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) return;
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === " " || e.key === "Enter") {
        // The card itself is a button; only handle the key when it isn't focused.
        if (el?.closest(".kf-card")) return;
        e.preventDefault();
        setFlipped((v) => !v);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (queue.length === 0) return null;

  if (atEnd) {
    return (
      <div className="rounded-3xl border border-border bg-surface-2 p-8 text-center">
        <p className="text-sm text-muted">{t(STR.deck_finished)}</p>
        <p className="mt-1 text-2xl font-bold tabular-nums">{queue.length}</p>
        <div className="mt-4 flex justify-center gap-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => {
              setQueue(shuffle(queue));
              setPos(0);
              setFlipped(false);
            }}
          >
            {t(STR.deck_shuffle)}
          </Button>
          <Button
            size="sm"
            onClick={() => {
              setPos(0);
              setFlipped(false);
            }}
          >
            {t(STR.deck_restart)}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-2">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${(pos / queue.length) * 100}%` }}
          />
        </div>
        <span className="shrink-0 text-xs tabular-nums text-muted">
          {pos + 1} / {queue.length}
        </span>
      </div>

      <KanjiFlipCard
        kanji={card}
        flipped={flipped}
        onFlip={() => {
          const next = !flipped;
          setFlipped(next);
          if (next) track("deck.card_flipped", { feature: "decks", contentId: deckId, level: card.level });
        }}
      />

      <div className="flex items-center gap-2">
        <Button size="sm" variant="secondary" onClick={() => go(-1)} disabled={pos === 0}>
          ← {t(STR.deck_prev)}
        </Button>
        <p className="flex-1 text-center text-xs text-muted">{t(STR.deck_flip_hint)}</p>
        <Button size="sm" onClick={() => go(1)}>
          {t(STR.deck_next)} →
        </Button>
      </div>

      <div className="flex justify-center">
        <Button
          size="sm"
          variant="ghost"
          onClick={() => {
            setQueue(shuffle(queue));
            setPos(0);
            setFlipped(false);
          }}
        >
          {t(STR.deck_shuffle)}
        </Button>
      </div>
    </div>
  );
}
