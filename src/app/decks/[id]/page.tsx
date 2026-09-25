import type { Metadata } from "next";
import { DeckDetailView } from "@/components/decks/DeckDetailView";

export const metadata: Metadata = { title: "Deck · Nihongo No Michinori" };

export default async function DeckPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <DeckDetailView deckId={id} />;
}
