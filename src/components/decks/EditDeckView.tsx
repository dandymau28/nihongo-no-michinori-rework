"use client";

import { useEffect, useState } from "react";
import { useSettings } from "@/context/SettingsContext";
import { useAuth } from "@/lib/useAuth";
import { STR } from "@/lib/strings";
import { api } from "@/lib/api";
import type { DeckDetail } from "@/lib/deckTypes";
import { SignInPrompt } from "@/components/auth/SignInPrompt";
import { DeckBuilder } from "./DeckBuilder";

export function EditDeckView({ deckId }: { deckId: string }) {
  const { t } = useSettings();
  const { user, loading } = useAuth();
  const [deck, setDeck] = useState<DeckDetail | null>(null);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    if (!user) return;
    let live = true;
    api<DeckDetail>(`/api/decks/${deckId}`)
      .then((d) => live && setDeck(d))
      .catch(() => live && setMissing(true));
    return () => {
      live = false;
    };
  }, [user, deckId]);

  if (loading) return <p className="text-sm text-muted">…</p>;
  if (!user) return <SignInPrompt message={STR.decks_sign_in} />;
  if (missing) return <p className="text-sm text-muted">{t(STR.deck_not_found)}</p>;
  if (!deck) return <p className="text-sm text-muted">…</p>;

  return (
    <DeckBuilder
      initial={{
        id: deck.id,
        title: deck.title,
        description: deck.description,
        chars: deck.chars,
      }}
    />
  );
}
