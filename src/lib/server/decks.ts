import { randomBytes } from "node:crypto";
import type { DeckForStudy, DeckLearner, DeckSummary } from "../deckTypes";
import { prisma } from "./db";

/**
 * Kanji flashcard decks: the shapes the API returns and the queries behind them.
 *
 * A deck is private until its owner hands out the link. The token *is* the permission,
 * so it has to be long enough that guessing one is hopeless — 12 base64url characters
 * is 72 bits. Studying still needs an account; the link only says which deck.
 */

/** Enough that nobody hits it by hand, low enough that a script can't fill the table. */
export const MAX_DECKS_PER_USER = 50;

export function newShareToken(): string {
  return randomBytes(9).toString("base64url");
}

/** Keeps the owner's order, drops repeats — a deck holds each kanji once. */
export function dedupe(chars: string[]): string[] {
  return [...new Set(chars)];
}

export async function listDecks(userId: string): Promise<DeckSummary[]> {
  const decks = await prisma.kanjiDeck.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
    include: { _count: { select: { cards: true, uses: true } } },
  });
  // Titles of the originals, for the "copied from" line. One query, not one per deck.
  const originIds = decks.map((d) => d.copiedFromId).filter((id): id is string => !!id);
  const origins = originIds.length
    ? await prisma.kanjiDeck.findMany({
        where: { id: { in: originIds } },
        select: { id: true, title: true },
      })
    : [];
  const titleById = new Map(origins.map((o) => [o.id, o.title]));

  return decks.map((d) => ({
    id: d.id,
    title: d.title,
    description: d.description,
    shareToken: d.shareToken,
    cardCount: d._count.cards,
    visits: d.visits,
    learners: d._count.uses,
    copiedFrom: d.copiedFromId ? (titleById.get(d.copiedFromId) ?? null) : null,
    updatedAt: d.updatedAt.toISOString(),
  }));
}

/** The deck behind a share link, or null if the token is wrong. */
export async function loadByToken(
  shareToken: string,
  readerId: string | null,
): Promise<DeckForStudy | null> {
  const deck = await prisma.kanjiDeck.findUnique({
    where: { shareToken },
    include: {
      cards: { orderBy: { position: "asc" }, select: { char: true } },
      user: { select: { name: true } },
    },
  });
  if (!deck) return null;
  return {
    id: deck.id,
    title: deck.title,
    description: deck.description,
    shareToken: deck.shareToken,
    chars: deck.cards.map((c) => c.char),
    ownerName: deck.user.name,
    isOwner: deck.userId === readerId,
  };
}

/** The owner's stats page: who has studied it, most recent first. */
export async function loadLearners(deckId: string): Promise<DeckLearner[]> {
  const uses = await prisma.kanjiDeckUse.findMany({
    where: { deckId },
    orderBy: { lastUsedAt: "desc" },
    take: 200,
    include: { user: { select: { name: true } } },
  });
  return uses.map((u) => ({
    name: u.user.name,
    sessions: u.sessions,
    lastUsedAt: u.lastUsedAt.toISOString(),
  }));
}

/** Writes a deck's cards, replacing whatever was there. Call inside a transaction. */
export function cardRows(deckId: string, chars: string[]) {
  return chars.map((char, position) => ({ deckId, char, position }));
}
