"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSettings } from "@/context/SettingsContext";
import { STR } from "@/lib/strings";
import { api } from "@/lib/api";
import { track } from "@/lib/telemetry";
import type { DeckForStudy } from "@/lib/deckTypes";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DeckStudy } from "./DeckStudy";

/**
 * A deck opened from someone's share link. The server has already checked the reader is
 * signed in; this records the visit and offers to fork the deck.
 */
export function SharedDeckView({ deck }: { deck: DeckForStudy }) {
  const { t } = useSettings();
  const router = useRouter();
  const [copying, setCopying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Count the open once per browser session, so leaving the page and coming back
  // doesn't inflate the owner's numbers. The owner's own opens never count.
  useEffect(() => {
    if (deck.isOwner) return;
    const key = `nnm.deck.seen.${deck.shareToken}`;
    let firstThisSession = true;
    try {
      firstThisSession = sessionStorage.getItem(key) === null;
      sessionStorage.setItem(key, "1");
    } catch {
      // Private window or blocked storage: count it, and accept the double-count.
    }
    api(`/api/decks/shared/${deck.shareToken}/open`, {
      method: "POST",
      body: { firstThisSession },
    }).catch(() => {
      /* the stats are not worth interrupting the study session for */
    });
    track("deck.studied", { feature: "decks", contentId: deck.id });
  }, [deck.id, deck.shareToken, deck.isOwner]);

  async function copyToMine() {
    setCopying(true);
    setError(null);
    try {
      const r = await api<{ id: string }>(`/api/decks/shared/${deck.shareToken}/copy`, {
        method: "POST",
      });
      router.push(`/decks/${r.id}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setCopying(false);
    }
  }

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <p className="text-xs text-muted">
          {t(STR.deck_shared_by)} {deck.ownerName}
        </p>
        <h1 className="text-xl font-bold sm:text-2xl">{deck.title}</h1>
        {deck.description && <p className="max-w-prose text-sm text-muted">{deck.description}</p>}
        <p className="text-xs text-muted">
          {deck.chars.length} {t(STR.decks_card_count)}
        </p>
      </header>

      <DeckStudy deckId={deck.id} chars={deck.chars} />
      <p className="text-xs text-muted">{t(STR.deck_meaning_en_note)}</p>

      {deck.isOwner ? (
        <Card>
          <ButtonLink href={`/decks/${deck.id}`} size="sm" variant="secondary">
            {t(STR.deck_edit)}
          </ButtonLink>
        </Card>
      ) : (
        <Card className="space-y-2">
          <Button size="sm" onClick={copyToMine} disabled={copying}>
            {copying ? t(STR.deck_copying) : t(STR.deck_copy_to_mine)}
          </Button>
          <p className="text-xs text-muted">{t(STR.deck_copy_note)}</p>
          {error && <p className="text-sm text-danger">{error}</p>}
        </Card>
      )}
    </div>
  );
}
