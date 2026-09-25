import type { Metadata } from "next";
import { PageHeading } from "@/components/layout/PageHeading";
import { NewDeckView } from "@/components/decks/NewDeckView";
import { STR } from "@/lib/strings";

export const metadata: Metadata = { title: "Build a deck · Nihongo No Michinori" };

export default function NewDeckPage() {
  return (
    <div className="space-y-6">
      <PageHeading title={STR.deck_build_title} subtitle={STR.decks_intro} />
      <NewDeckView />
    </div>
  );
}
