import { prisma } from "@/lib/server/db";
import { MAX_DECKS_PER_USER, dedupe, listDecks, newShareToken } from "@/lib/server/decks";
import { badRequest, currentUserId, json, unauthorized } from "@/lib/server/http";
import { logEvent } from "@/lib/server/log";
import { deckBody } from "@/lib/server/schemas";

export async function GET() {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  return json({ decks: await listDecks(userId) });
}

/** Build a deck out of kanji picked from the catalog. */
export async function POST(req: Request) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const parsed = deckBody.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return badRequest("invalid deck");

  const owned = await prisma.kanjiDeck.count({ where: { userId } });
  if (owned >= MAX_DECKS_PER_USER) return badRequest("too many decks");

  const chars = dedupe(parsed.data.chars);
  const deck = await prisma.kanjiDeck.create({
    data: {
      userId,
      title: parsed.data.title,
      description: parsed.data.description?.trim() || null,
      shareToken: newShareToken(),
      cards: { create: chars.map((char, position) => ({ char, position })) },
    },
    select: { id: true, shareToken: true },
  });

  logEvent("deck.created", { userId, deckId: deck.id, cards: chars.length });
  return json({ id: deck.id, shareToken: deck.shareToken }, 201);
}
