"use client";

import { useAuth } from "@/lib/useAuth";
import { STR } from "@/lib/strings";
import { SignInPrompt } from "@/components/auth/SignInPrompt";
import { DeckBuilder } from "./DeckBuilder";

export function NewDeckView() {
  const { user, loading } = useAuth();
  if (loading) return <p className="text-sm text-muted">…</p>;
  if (!user) return <SignInPrompt message={STR.decks_sign_in} />;
  return <DeckBuilder />;
}
