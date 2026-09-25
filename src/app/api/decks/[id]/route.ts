import { prisma } from "@/lib/server/db";
import { cardRows, dedupe, loadLearners, newShareToken } from "@/lib/server/decks";
import {
  badRequest,
  currentUserId,
  json,
  notFound,
  readJson,
  unauthorized,
} from "@/lib/server/http";
import { logEvent } from "@/lib/server/log";
import { deckBody } from "@/lib/server/schemas";

type Ctx = { params: Promise<{ id: string }> };

/** The owner's view: the deck itself plus who has been studying it. */
export async function GET(_req: Request, { params }: Ctx) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const { id } = await params;

  const deck = await prisma.kanjiDeck.findFirst({
    where: { id, userId },
    include: { cards: { orderBy: { position: "asc" }, select: { char: true } } },
  });
  if (!deck) return notFound();

  return json({
    id: deck.id,
    title: deck.title,
    description: deck.description,
    shareToken: deck.shareToken,
    chars: deck.cards.map((c) => c.char),
    visits: deck.visits,
    createdAt: deck.createdAt.toISOString(),
    learners: await loadLearners(deck.id),
  });
}

/** Rename a deck or change which kanji are in it. The share link keeps working. */
export async function PUT(req: Request, { params }: Ctx) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const { id } = await params;
  const parsed = deckBody.safeParse(await readJson(req));
  if (!parsed.success) return badRequest("invalid deck");

  const deck = await prisma.kanjiDeck.findFirst({ where: { id, userId }, select: { id: true } });
  if (!deck) return notFound();

  const chars = dedupe(parsed.data.chars);
  // Replace the card list wholesale: positions shift on almost every edit, so working
  // out the difference would cost more than rewriting at most 200 tiny rows.
  await prisma.$transaction([
    prisma.kanjiDeckCard.deleteMany({ where: { deckId: id } }),
    prisma.kanjiDeckCard.createMany({ data: cardRows(id, chars) }),
    prisma.kanjiDeck.update({
      where: { id },
      data: {
        title: parsed.data.title,
        description: parsed.data.description?.trim() || null,
      },
    }),
  ]);

  logEvent("deck.updated", { userId, deckId: id, cards: chars.length });
  return json({ id, cards: chars.length });
}

/**
 * Give the deck a new share link. The old one stops resolving, which is the only way
 * to take a deck back out of circulation once it has been passed around.
 */
export async function PATCH(_req: Request, { params }: Ctx) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const { id } = await params;

  const deck = await prisma.kanjiDeck.findFirst({ where: { id, userId }, select: { id: true } });
  if (!deck) return notFound();

  const shareToken = newShareToken();
  await prisma.kanjiDeck.update({ where: { id }, data: { shareToken } });
  logEvent("deck.link_rotated", { userId, deckId: id });
  return json({ shareToken });
}

/** Delete the deck, its cards and its use records. Copies other people made stay theirs. */
export async function DELETE(_req: Request, { params }: Ctx) {
  const userId = await currentUserId();
  if (!userId) return unauthorized();
  const { id } = await params;

  const deck = await prisma.kanjiDeck.findFirst({ where: { id, userId }, select: { id: true } });
  if (!deck) return notFound();

  await prisma.kanjiDeck.delete({ where: { id } });
  logEvent("deck.deleted", { userId, deckId: id });
  return json({ ok: true });
}
