"use client";

import { useEffect, useState } from "react";
import { useSettings } from "@/context/SettingsContext";
import { STR } from "@/lib/strings";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";

/** The share link, with copy-to-clipboard and a way to retire it. */
export function ShareLinkBox({
  deckId,
  shareToken,
  onRotated,
}: {
  deckId: string;
  shareToken: string;
  onRotated: (token: string) => void;
}) {
  const { t } = useSettings();
  const [copied, setCopied] = useState(false);
  const [asking, setAsking] = useState(false);
  const [busy, setBusy] = useState(false);
  // Built in the browser so it carries whatever host the learner is actually on.
  const [origin, setOrigin] = useState("");

  useEffect(() => setOrigin(window.location.origin), []);
  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const url = `${origin}/d/${shareToken}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      // Clipboard permission denied or an insecure origin — the field is selectable.
    }
  }

  async function rotate() {
    setBusy(true);
    try {
      const r = await api<{ shareToken: string }>(`/api/decks/${deckId}`, { method: "PATCH" });
      onRotated(r.shareToken);
      setAsking(false);
    } finally {
      setBusy(false);
    }
  }

  return (
    <Card className="space-y-2">
      <h2 className="text-sm font-semibold">{t(STR.deck_share_title)}</h2>
      <div className="flex flex-wrap gap-2">
        <input
          id={`share-${deckId}`}
          readOnly
          value={url}
          onFocus={(e) => e.currentTarget.select()}
          className="h-9 min-w-0 flex-1 basis-56 rounded-xl border border-border bg-surface-2 px-3 text-sm"
        />
        <Button size="sm" onClick={copy}>
          {copied ? t(STR.deck_copied) : t(STR.deck_copy_link)}
        </Button>
        <Button size="sm" variant="secondary" onClick={() => setAsking(true)}>
          {t(STR.deck_new_link)}
        </Button>
      </div>
      <p className="text-xs text-muted">{t(STR.deck_share_hint)}</p>

      <ConfirmDialog
        open={asking}
        busy={busy}
        title={t(STR.deck_new_link_confirm_title)}
        confirmLabel={t(STR.deck_new_link)}
        cancelLabel={t({ en: "Cancel", id: "Batal" })}
        onConfirm={rotate}
        onCancel={() => setAsking(false)}
      >
        <p>{t(STR.deck_new_link_confirm_body)}</p>
      </ConfirmDialog>
    </Card>
  );
}
