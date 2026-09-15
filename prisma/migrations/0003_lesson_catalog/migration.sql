-- Lesson catalog + presets (expand step).
--
-- Lessons are now standalone and keyed by a permanent id (src/data/lessons.ts) instead of a
-- day number in the 90-day plan. Following the zero-downtime database rule, this migration
-- only ADDS columns and a table and copies the data across. The old day-numbered column and
-- table stay (and are still written) so the previous release keeps working during the switch
-- and after a rollback; a later migration removes them.

-- Planner: which preset it came from, and an optional name
ALTER TABLE "plan_settings" ADD COLUMN "name" TEXT,
ADD COLUMN "preset_id" TEXT;

-- Planner entries: the lesson id and its place in the learner's order
ALTER TABLE "plan_entry" ADD COLUMN "lesson_id" TEXT,
ADD COLUMN "position" INTEGER;

-- Progress per lesson
CREATE TABLE "lesson_progress" (
    "user_id" TEXT NOT NULL,
    "lesson_id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'not-yet',
    "reviewed" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT NOT NULL DEFAULT '',
    "exercises" JSONB NOT NULL DEFAULT '[]',
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lesson_progress_pkey" PRIMARY KEY ("user_id","lesson_id")
);

CREATE INDEX "plan_entry_user_id_position_idx" ON "plan_entry"("user_id", "position");

CREATE UNIQUE INDEX "plan_entry_user_id_lesson_id_key" ON "plan_entry"("user_id", "lesson_id");

ALTER TABLE "lesson_progress" ADD CONSTRAINT "lesson_progress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ---------------------------------------------------------------------------
-- Copy existing data: day N of the 90-day plan → lesson id
-- ---------------------------------------------------------------------------

CREATE TEMP TABLE "legacy_day_lesson" ("day" INTEGER PRIMARY KEY, "lesson_id" TEXT NOT NULL);

INSERT INTO "legacy_day_lesson" ("day", "lesson_id") VALUES
  (1, 'n5-diagnostic'),
  (2, 'n5-particles'),
  (3, 'n5-verb-forms'),
  (4, 'n5-adjectives'),
  (5, 'n5-vocab-kanji'),
  (6, 'n5-te-form'),
  (7, 'n5-location'),
  (8, 'n5-time-routine'),
  (9, 'n5-reading-1'),
  (10, 'n5-listening-1'),
  (11, 'n5-integration-test'),
  (12, 'n5-exit-test'),
  (13, 'n4-plain-form-1'),
  (14, 'n4-plain-form-2'),
  (15, 'n4-to-omoimasu'),
  (16, 'n4-sou-desu-appearance'),
  (17, 'n4-sou-desu-hearsay'),
  (18, 'n4-noun-modification-1'),
  (19, 'n4-weekly-review-1'),
  (20, 'n4-noun-modification-2'),
  (21, 'n4-n-desu'),
  (22, 'n4-ta-koto-ga-aru'),
  (23, 'n4-tari-tari'),
  (24, 'n4-nagara'),
  (25, 'n4-potential-form'),
  (26, 'n4-weekly-review-2'),
  (27, 'n4-shi-reasons'),
  (28, 'n4-foundation-review'),
  (29, 'n4-foundation-test'),
  (30, 'n4-core-diagnostic'),
  (31, 'n4-tara'),
  (32, 'n4-ba'),
  (33, 'n4-weekly-review-3'),
  (34, 'n4-nara'),
  (35, 'n4-to-natural-result'),
  (36, 'n4-conditionals-review'),
  (37, 'n4-temo-temoii'),
  (38, 'n4-noni'),
  (39, 'n4-node-kara'),
  (40, 'n4-weekly-review-4'),
  (41, 'n4-tsumori'),
  (42, 'n4-yotei'),
  (43, 'n4-koto-ni-suru-naru'),
  (44, 'n4-you-ni-naru'),
  (45, 'n4-you-ni-suru'),
  (46, 'n4-weekly-review-5'),
  (47, 'n4-tame-ni'),
  (48, 'n4-you-ni-purpose'),
  (49, 'n4-sugiru'),
  (50, 'n4-yasui-nikui'),
  (51, 'n4-compound-verbs'),
  (52, 'n4-weekly-review-6'),
  (53, 'n4-temiru-teoku'),
  (54, 'n4-teshimau'),
  (55, 'n4-shika-nai-bakari'),
  (56, 'n4-hazu-kamoshirenai'),
  (57, 'n4-sou-you-mitai-rashii'),
  (58, 'n4-integrated-grammar'),
  (59, 'n4-core-mock'),
  (60, 'n4-core-error-analysis'),
  (61, 'n4-exam-diagnostic'),
  (62, 'n4-reading-information'),
  (63, 'n4-reading-email'),
  (64, 'n4-reading-short-essay'),
  (65, 'n4-reading-detail'),
  (66, 'n4-reading-strategy'),
  (67, 'n4-reading-mock'),
  (68, 'n4-listening-key-info'),
  (69, 'n4-listening-response'),
  (70, 'n4-listening-situation'),
  (71, 'n4-listening-details'),
  (72, 'n4-listening-intention'),
  (73, 'n4-shadowing'),
  (74, 'n4-listening-mock'),
  (75, 'n4-grammar-diagnostic'),
  (76, 'n4-conditionals-remedial'),
  (77, 'n4-reason-contrast-review'),
  (78, 'n4-intention-decision-review'),
  (79, 'n4-change-purpose-review'),
  (80, 'n4-aspect-degree-review'),
  (81, 'n4-grammar-review'),
  (82, 'n4-mock-test-1'),
  (83, 'n4-mock-analysis'),
  (84, 'n4-vocabulary-remedial'),
  (85, 'n4-kanji-remedial'),
  (86, 'n4-reading-remedial'),
  (87, 'n4-listening-remedial'),
  (88, 'n4-mock-test-2'),
  (89, 'n4-final-review'),
  (90, 'n4-final-benchmark');

-- Every existing planner was the 90-day plan
UPDATE "plan_settings" SET "preset_id" = 'n5-n4-90-day' WHERE "preset_id" IS NULL;

UPDATE "plan_entry" e
SET "lesson_id" = m."lesson_id"
FROM "legacy_day_lesson" m
WHERE e."material_day" = m."day" AND e."lesson_id" IS NULL;

-- Order = the order the learner sees today: by date, then by original day
UPDATE "plan_entry" e
SET "position" = r."pos"
FROM (
  SELECT "id",
         ROW_NUMBER() OVER (PARTITION BY "user_id" ORDER BY COALESCE("date", '9999-12-31'), "material_day") - 1 AS "pos"
  FROM "plan_entry"
  WHERE "material_day" IS NOT NULL
) r
WHERE e."id" = r."id";

INSERT INTO "lesson_progress" ("user_id", "lesson_id", "status", "reviewed", "notes", "exercises", "updated_at")
SELECT p."user_id", m."lesson_id", p."status", p."reviewed", p."notes", p."exercises", p."updated_at"
FROM "day_progress" p
JOIN "legacy_day_lesson" m ON m."day" = p."day"
ON CONFLICT DO NOTHING;

DROP TABLE "legacy_day_lesson";
