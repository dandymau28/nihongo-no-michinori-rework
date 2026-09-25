-- Learner-built kanji flashcard decks, shared by link.
--
-- Purely additive: three new tables, nothing existing is touched. The previous release
-- ignores them, so a rollback needs no down migration.

CREATE TABLE "kanji_deck" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "share_token" TEXT NOT NULL,
    "visits" INTEGER NOT NULL DEFAULT 0,
    "copied_from_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kanji_deck_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "kanji_deck_card" (
    "deck_id" TEXT NOT NULL,
    "char" TEXT NOT NULL,
    "position" INTEGER NOT NULL,

    CONSTRAINT "kanji_deck_card_pkey" PRIMARY KEY ("deck_id","char")
);

CREATE TABLE "kanji_deck_use" (
    "deck_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "sessions" INTEGER NOT NULL DEFAULT 1,
    "first_used_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_used_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "kanji_deck_use_pkey" PRIMARY KEY ("deck_id","user_id")
);

CREATE UNIQUE INDEX "kanji_deck_share_token_key" ON "kanji_deck"("share_token");

CREATE INDEX "kanji_deck_user_id_updated_at_idx" ON "kanji_deck"("user_id", "updated_at");

CREATE INDEX "kanji_deck_card_deck_id_position_idx" ON "kanji_deck_card"("deck_id", "position");

CREATE INDEX "kanji_deck_use_deck_id_last_used_at_idx" ON "kanji_deck_use"("deck_id", "last_used_at");

ALTER TABLE "kanji_deck" ADD CONSTRAINT "kanji_deck_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "kanji_deck_card" ADD CONSTRAINT "kanji_deck_card_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "kanji_deck"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "kanji_deck_use" ADD CONSTRAINT "kanji_deck_use_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "kanji_deck"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "kanji_deck_use" ADD CONSTRAINT "kanji_deck_use_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
