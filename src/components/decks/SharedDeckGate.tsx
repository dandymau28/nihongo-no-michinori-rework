"use client";

import { useSettings } from "@/context/SettingsContext";
import { STR } from "@/lib/strings";
import { Card } from "@/components/ui/Card";
import { SignInPrompt } from "@/components/auth/SignInPrompt";

/**
 * What a visitor sees before they can study a shared deck: the title and who made it,
 * so they know the link worked, and nothing of the deck's contents.
 */
export function SharedDeckGate({ title, ownerName }: { title?: string; ownerName?: string }) {
  const { t } = useSettings();

  if (!title) {
    return (
      <Card>
        <p className="text-sm text-muted">{t(STR.deck_not_found)}</p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <header className="space-y-1">
        {ownerName && (
          <p className="text-xs text-muted">
            {t(STR.deck_shared_by)} {ownerName}
          </p>
        )}
        <h1 className="text-xl font-bold sm:text-2xl">{title}</h1>
      </header>
      <SignInPrompt message={STR.deck_login_to_study} />
    </div>
  );
}
