import type { Metadata } from "next";
import { loadByToken } from "@/lib/server/decks";
import { currentUserId } from "@/lib/server/http";
import { SharedDeckView } from "@/components/decks/SharedDeckView";
import { SharedDeckGate } from "@/components/decks/SharedDeckGate";

/**
 * A deck someone shared. The link says which deck; studying it still needs an account,
 * so a signed-out visitor gets the title and a sign-in prompt and nothing else — the
 * characters are never sent to them.
 */
export const metadata: Metadata = {
  title: "Shared deck · Nihongo No Michinori",
  // Share links are meant to be passed between people, not found in a search engine.
  robots: { index: false, follow: false },
};

export default async function SharedDeckPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const userId = await currentUserId();
  const deck = await loadByToken(token, userId);

  if (!deck) return <SharedDeckGate />;
  if (!userId) return <SharedDeckGate title={deck.title} ownerName={deck.ownerName} />;
  return <SharedDeckView deck={deck} />;
}
