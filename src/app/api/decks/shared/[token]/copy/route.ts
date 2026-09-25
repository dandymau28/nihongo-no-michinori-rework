import { prisma } from "@/lib/server/db";
import { MAX_DECKS_PER_USER, newShareToken } from "@/lib/server/decks";
import { badRequest, currentUserId, json, notFound, unauthorized } from "@/lib/server/http";
import { logEvent } from "@/lib/server/log";

type Ctx = { params: Promise<{ token: string }> };

/**
 * Fork a shared deck. The copy is the learner's own — their edits, their share link,
 * their stats. It stays out of the original's counts; only studying the original link
 * shows up there.
 */
export async function POST(_req: Request, { params }: Ctx) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const { token } = await params;

  const source = await prisma.kanjiDeck.findUnique({
    where: { shareToken: token },
    include: { cards: { orderBy: { position: "asc" }, select: { char: true } } },
  });
  if (!source) return notFound();

  const owned = await prisma.kanjiDeck.count({ where: { userId } });
  if (owned >= MAX_DECKS_PER_USER) return badRequest("too many decks");

  const copy = await prisma.kanjiDeck.create({
    data: {
      userId,
      // Trimmed so the suffix can't push a title that was already at the limit over it.
      title: `${source.title.slice(0, 72)} (copy)`,
      description: source.description,
      shareToken: newShareToken(),
      copiedFromId: source.id,
      cards: { create: source.cards.map((c, position) => ({ char: c.char, position })) },
    },
    select: { id: true },
  });

  logEvent("deck.copied", { userId, deckId: copy.id, fromDeckId: source.id, cards: source.cards.length });
  return json({ id: copy.id }, 201);
}
