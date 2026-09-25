"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSettings } from "@/context/SettingsContext";
import { useAuth } from "@/lib/useAuth";
import { STR } from "@/lib/strings";
import { api } from "@/lib/api";
import type { DeckSummary } from "@/lib/deckTypes";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { SignInPrompt } from "@/components/auth/SignInPrompt";

export function DeckListView() {
  const { t } = useSettings();
  const { user, loading } = useAuth();
  const [decks, setDecks] = useState<DeckSummary[] | null>(null);

  useEffect(() => {
    if (!user) return setDecks(null);
    let live = true;
    api<{ decks: DeckSummary[] }>("/api/decks")
      .then((r) => live && setDecks(r.decks))
      .catch(() => live && setDecks([]));
    return () => {
      live = false;
    };
  }, [user]);

  if (loading) return <p className="text-sm text-muted">…</p>;
  if (!user) return <SignInPrompt message={STR.decks_sign_in} />;
  if (!decks) return <p className="text-sm text-muted">…</p>;

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <ButtonLink href="/decks/new" size="sm">
          + {t(STR.decks_new)}
        </ButtonLink>
      </div>

      {decks.length === 0 ? (
        <Card>
          <p className="text-sm text-muted">{t(STR.decks_empty)}</p>
        </Card>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2">
          {decks.map((deck) => (
            <li key={deck.id}>
              <Link href={`/decks/${deck.id}`} className="block h-full">
                <Card className="h-full transition-colors hover:border-primary/50 hover:bg-surface-2">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="font-semibold">{deck.title}</h2>
                    <Pill tone="primary" className="tabular-nums">
                      {deck.cardCount} {t(STR.decks_card_count)}
                    </Pill>
                  </div>
                  {deck.description && (
                    <p className="mt-1 line-clamp-2 text-sm text-muted">{deck.description}</p>
                  )}
                  {deck.copiedFrom && (
                    <p className="mt-1 text-xs text-muted">
                      {t(STR.decks_copied_from)} “{deck.copiedFrom}”
                    </p>
                  )}
                  <dl className="mt-3 flex gap-5 text-sm">
                    <div>
                      <dt className="text-xs text-muted">{t(STR.decks_visits)}</dt>
                      <dd className="font-semibold tabular-nums">{deck.visits}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted">{t(STR.decks_learners)}</dt>
                      <dd className="font-semibold tabular-nums">{deck.learners}</dd>
                    </div>
                  </dl>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
