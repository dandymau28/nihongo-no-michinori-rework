"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSettings } from "@/context/SettingsContext";
import { useAuth } from "@/lib/useAuth";
import { STR } from "@/lib/strings";
import { api } from "@/lib/api";
import { formatDateLong } from "@/lib/dates";
import { todayISO } from "@/lib/schedule";
import type { DeckDetail } from "@/lib/deckTypes";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { SignInPrompt } from "@/components/auth/SignInPrompt";
import { DeckStudy } from "./DeckStudy";
import { ShareLinkBox } from "./ShareLinkBox";

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <p className="text-xs text-muted">{label}</p>
      <p className="text-2xl font-bold tabular-nums">{value}</p>
    </div>
  );
}

/** The owner's page for one deck: study it, share it, see who has used it. */
export function DeckDetailView({ deckId }: { deckId: string }) {
  const { t, lang } = useSettings();
  const { user, loading } = useAuth();
  const router = useRouter();
  const [deck, setDeck] = useState<DeckDetail | null>(null);
  const [missing, setMissing] = useState(false);
  const [asking, setAsking] = useState(false);
  const [busy, setBusy] = useState(false);

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

  async function remove() {
    setBusy(true);
    try {
      await api(`/api/decks/${deckId}`, { method: "DELETE" });
      router.push("/decks");
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  if (loading) return <p className="text-sm text-muted">…</p>;
  if (!user) return <SignInPrompt message={STR.decks_sign_in} />;
  if (missing) return <p className="text-sm text-muted">{t(STR.deck_not_found)}</p>;
  if (!deck) return <p className="text-sm text-muted">…</p>;

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-xl font-bold sm:text-2xl">{deck.title}</h1>
        {deck.description && <p className="max-w-prose text-sm text-muted">{deck.description}</p>}
        <p className="text-xs text-muted">
          {deck.chars.length} {t(STR.decks_card_count)}
        </p>
      </header>

      <DeckStudy deckId={deck.id} chars={deck.chars} />
      <p className="text-xs text-muted">{t(STR.deck_meaning_en_note)}</p>

      <ShareLinkBox
        deckId={deck.id}
        shareToken={deck.shareToken}
        onRotated={(shareToken) => setDeck({ ...deck, shareToken })}
      />

      <section className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <Stat label={t(STR.decks_visits)} value={deck.visits} />
          <Stat label={t(STR.decks_learners)} value={deck.learners.length} />
        </div>
        <p className="text-xs text-muted">{t(STR.deck_stats_guests_note)}</p>

        <Card>
          <h2 className="text-sm font-semibold">{t(STR.deck_stats_title)}</h2>
          {deck.learners.length === 0 ? (
            <p className="mt-2 text-sm text-muted">{t(STR.deck_stats_empty)}</p>
          ) : (
            <ul className="mt-2 divide-y divide-border">
              {deck.learners.map((l) => (
                <li key={l.name + l.lastUsedAt} className="flex flex-wrap items-baseline gap-x-3 py-2">
                  <span className="min-w-0 flex-1 truncate text-sm font-medium">{l.name}</span>
                  <span className="text-xs tabular-nums text-muted">
                    {l.sessions} {t(STR.deck_stats_sessions)}
                  </span>
                  <span className="text-xs text-muted">
                    {t(STR.deck_last_used)} {formatDateLong(todayISO(new Date(l.lastUsedAt)), lang)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </section>

      <div className="flex flex-wrap gap-2 border-t border-border pt-4">
        <ButtonLink href={`/decks/${deck.id}/edit`} size="sm" variant="secondary">
          {t(STR.deck_edit)}
        </ButtonLink>
        <ButtonLink href="/decks" size="sm" variant="ghost">
          ← {t(STR.decks_title)}
        </ButtonLink>
        <Button size="sm" variant="danger" className="ml-auto" onClick={() => setAsking(true)}>
          {t(STR.deck_delete)}
        </Button>
      </div>

      <ConfirmDialog
        open={asking}
        busy={busy}
        title={t(STR.deck_delete_confirm_title)}
        confirmLabel={t(STR.deck_delete)}
        cancelLabel={t({ en: "Cancel", id: "Batal" })}
        onConfirm={remove}
        onCancel={() => setAsking(false)}
      >
        <p>{t(STR.deck_delete_confirm_body)}</p>
      </ConfirmDialog>
    </div>
  );
}
