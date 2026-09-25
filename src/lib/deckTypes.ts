/**
 * What the deck API sends to the browser. Kept out of src/lib/server so client
 * components can import the shapes without pulling the database in with them.
 */

/** A deck as its owner sees it in the list. */
export interface DeckSummary {
  id: string;
  title: string;
  description: string | null;
  shareToken: string;
  cardCount: number;
  /** Opens of the share link by other people, once per browser session. */
  visits: number;
  /** Signed-in learners who have studied it. */
  learners: number;
  /** Title of the deck this one was copied from, if any. */
  copiedFrom: string | null;
  updatedAt: string;
}

/** A deck opened for study — the characters only; the browser has the catalog. */
export interface DeckForStudy {
  id: string;
  title: string;
  description: string | null;
  shareToken: string;
  chars: string[];
  /** The account name of whoever built it. Never an email. */
  ownerName: string;
  /** True when the reader is the owner — their own visits don't count. */
  isOwner: boolean;
}

/** One learner in the owner's "who used this" list. */
export interface DeckLearner {
  name: string;
  sessions: number;
  lastUsedAt: string;
}

/** The owner's page: the deck plus its stats. */
export interface DeckDetail {
  id: string;
  title: string;
  description: string | null;
  shareToken: string;
  chars: string[];
  visits: number;
  createdAt: string;
  learners: DeckLearner[];
}
