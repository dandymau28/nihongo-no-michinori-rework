"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSettings } from "@/context/SettingsContext";
import { STR } from "@/lib/strings";
import { api, ApiError } from "@/lib/api";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { KanjiPicker } from "./KanjiPicker";

/** Matches MAX_DECK_CARDS in src/lib/server/schemas.ts. */
export const MAX_CARDS = 200;

type Initial = { id: string; title: string; description: string | null; chars: string[] };

/** Create a deck, or edit one the learner already owns (`initial`). */
export function DeckBuilder({ initial }: { initial?: Initial }) {
  const { t } = useSettings();
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [chars, setChars] = useState<string[]>(initial?.chars ?? []);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function save() {
    if (!title.trim()) return setError(t(STR.deck_needs_name));
    if (chars.length === 0) return setError(t(STR.deck_needs_cards));
    setError(null);
    setSaving(true);
    try {
      const body = { title: title.trim(), description: description.trim() || null, chars };
      if (initial) {
        await api(`/api/decks/${initial.id}`, { method: "PUT", body });
        router.push(`/decks/${initial.id}`);
      } else {
        const created = await api<{ id: string }>("/api/decks", { method: "POST", body });
        router.push(`/decks/${created.id}`);
      }
      router.refresh();
    } catch (e) {
      setError(e instanceof ApiError ? e.message : String(e));
      setSaving(false);
    }
  }

  return (
    <div className="space-y-5">
      <Card className="space-y-4">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">{t(STR.deck_name_label)}</span>
          <input
            id="deck-title"
            value={title}
            maxLength={80}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t(STR.deck_name_placeholder)}
            className="h-10 w-full rounded-xl border border-border bg-surface px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">{t(STR.deck_desc_label)}</span>
          <textarea
            id="deck-description"
            value={description}
            maxLength={500}
            rows={2}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={t(STR.deck_desc_placeholder)}
            className="w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
          />
        </label>
      </Card>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold">{t(STR.deck_pick_label)}</h2>
        <KanjiPicker selected={chars} onChange={setChars} max={MAX_CARDS} />
      </section>

      {error && <p className="text-sm text-danger">{error}</p>}

      <div className="flex items-center gap-2">
        <Button onClick={save} disabled={saving}>
          {saving ? t(STR.deck_saving) : t(STR.deck_save)}
        </Button>
        <Button variant="ghost" onClick={() => router.back()} disabled={saving}>
          {t({ en: "Cancel", id: "Batal" })}
        </Button>
      </div>
    </div>
  );
}
