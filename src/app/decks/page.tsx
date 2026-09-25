import type { Metadata } from "next";
import { PageHeading } from "@/components/layout/PageHeading";
import { DeckListView } from "@/components/decks/DeckListView";
import { STR } from "@/lib/strings";

export const metadata: Metadata = { title: "Kanji Flashcards · Nihongo No Michinori" };

export default function DecksPage() {
  return (
    <div className="space-y-6">
      <PageHeading title={STR.decks_title} subtitle={STR.decks_intro} />
      <DeckListView />
    </div>
  );
}
