import type { Metadata } from "next";
import { PageHeading } from "@/components/layout/PageHeading";
import { EditDeckView } from "@/components/decks/EditDeckView";
import { STR } from "@/lib/strings";

export const metadata: Metadata = { title: "Edit deck · Nihongo No Michinori" };

export default async function EditDeckPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="space-y-6">
      <PageHeading title={STR.deck_edit_title} />
      <EditDeckView deckId={id} />
    </div>
  );
}
