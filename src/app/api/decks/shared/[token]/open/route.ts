import { z } from "zod";
import { prisma } from "@/lib/server/db";
import { currentUserId, json, notFound, readJson } from "@/lib/server/http";
import { logEvent } from "@/lib/server/log";

type Ctx = { params: Promise<{ token: string }> };

const openBody = z.object({
  /**
   * The browser has not opened this deck since the tab was opened. It's the browser's
   * word for it (sessionStorage), so the visit count is an honest estimate, not an audit
   * trail — worth knowing before reading much into it.
   */
  firstThisSession: z.boolean(),
});

/**
 * Someone opened a shared deck. Guests add to the visit count; signed-in learners also
 * get a row in the owner's "who used this" list. The owner's own opens count for neither.
 */
export async function POST(req: Request, { params }: Ctx) {
  const { token } = await params;
  const parsed = openBody.safeParse(await readJson(req));
  const firstThisSession = parsed.success ? parsed.data.firstThisSession : true;

  const deck = await prisma.kanjiDeck.findUnique({
    where: { shareToken: token },
    select: { id: true, userId: true },
  });
  if (!deck) return notFound();

  const userId = await currentUserId();
  if (userId === deck.userId) return json({ ok: true, counted: false });

  if (firstThisSession) {
    await prisma.kanjiDeck.update({ where: { id: deck.id }, data: { visits: { increment: 1 } } });
  }

  if (userId) {
    const now = new Date();
    await prisma.kanjiDeckUse.upsert({
      where: { deckId_userId: { deckId: deck.id, userId } },
      create: { deckId: deck.id, userId, lastUsedAt: now },
      // A second visit in the same browser session is the same study sitting, so it
      // moves the timestamp without counting again.
      update: { lastUsedAt: now, ...(firstThisSession ? { sessions: { increment: 1 } } : {}) },
    });
  }

  logEvent("deck.opened", {
    userId,
    deckId: deck.id,
    guest: !userId,
    newSession: firstThisSession,
  });
  return json({ ok: true, counted: firstThisSession });
}
