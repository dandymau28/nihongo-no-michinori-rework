-- Rename every camelCase column — and the indexes / foreign keys named after
-- them — to snake_case, matching the snake_case table names.
-- Renames keep existing data (an auto-generated diff would drop and re-add columns).

-- user
ALTER TABLE "user" RENAME COLUMN "emailVerified" TO "email_verified";
ALTER TABLE "user" RENAME COLUMN "createdAt" TO "created_at";
ALTER TABLE "user" RENAME COLUMN "updatedAt" TO "updated_at";

-- session
ALTER TABLE "session" RENAME COLUMN "expiresAt" TO "expires_at";
ALTER TABLE "session" RENAME COLUMN "createdAt" TO "created_at";
ALTER TABLE "session" RENAME COLUMN "updatedAt" TO "updated_at";
ALTER TABLE "session" RENAME COLUMN "ipAddress" TO "ip_address";
ALTER TABLE "session" RENAME COLUMN "userAgent" TO "user_agent";
ALTER TABLE "session" RENAME COLUMN "userId" TO "user_id";
ALTER INDEX "session_userId_idx" RENAME TO "session_user_id_idx";
ALTER TABLE "session" RENAME CONSTRAINT "session_userId_fkey" TO "session_user_id_fkey";

-- account
ALTER TABLE "account" RENAME COLUMN "accountId" TO "account_id";
ALTER TABLE "account" RENAME COLUMN "providerId" TO "provider_id";
ALTER TABLE "account" RENAME COLUMN "userId" TO "user_id";
ALTER TABLE "account" RENAME COLUMN "accessToken" TO "access_token";
ALTER TABLE "account" RENAME COLUMN "refreshToken" TO "refresh_token";
ALTER TABLE "account" RENAME COLUMN "idToken" TO "id_token";
ALTER TABLE "account" RENAME COLUMN "accessTokenExpiresAt" TO "access_token_expires_at";
ALTER TABLE "account" RENAME COLUMN "refreshTokenExpiresAt" TO "refresh_token_expires_at";
ALTER TABLE "account" RENAME COLUMN "createdAt" TO "created_at";
ALTER TABLE "account" RENAME COLUMN "updatedAt" TO "updated_at";
ALTER INDEX "account_userId_idx" RENAME TO "account_user_id_idx";
ALTER TABLE "account" RENAME CONSTRAINT "account_userId_fkey" TO "account_user_id_fkey";

-- verification
ALTER TABLE "verification" RENAME COLUMN "expiresAt" TO "expires_at";
ALTER TABLE "verification" RENAME COLUMN "createdAt" TO "created_at";
ALTER TABLE "verification" RENAME COLUMN "updatedAt" TO "updated_at";

-- plan_settings
ALTER TABLE "plan_settings" RENAME COLUMN "userId" TO "user_id";
ALTER TABLE "plan_settings" RENAME COLUMN "startDate" TO "start_date";
ALTER TABLE "plan_settings" RENAME COLUMN "studyDays" TO "study_days";
ALTER TABLE "plan_settings" RENAME COLUMN "perDay" TO "per_day";
ALTER TABLE "plan_settings" RENAME COLUMN "createdAt" TO "created_at";
ALTER TABLE "plan_settings" RENAME COLUMN "updatedAt" TO "updated_at";
ALTER TABLE "plan_settings" RENAME CONSTRAINT "plan_settings_userId_fkey" TO "plan_settings_user_id_fkey";

-- plan_entry
ALTER TABLE "plan_entry" RENAME COLUMN "userId" TO "user_id";
ALTER TABLE "plan_entry" RENAME COLUMN "materialDay" TO "material_day";
ALTER TABLE "plan_entry" RENAME COLUMN "createdAt" TO "created_at";
ALTER TABLE "plan_entry" RENAME COLUMN "updatedAt" TO "updated_at";
ALTER INDEX "plan_entry_userId_date_idx" RENAME TO "plan_entry_user_id_date_idx";
ALTER INDEX "plan_entry_userId_materialDay_key" RENAME TO "plan_entry_user_id_material_day_key";
ALTER TABLE "plan_entry" RENAME CONSTRAINT "plan_entry_userId_fkey" TO "plan_entry_user_id_fkey";

-- day_progress
ALTER TABLE "day_progress" RENAME COLUMN "userId" TO "user_id";
ALTER TABLE "day_progress" RENAME COLUMN "updatedAt" TO "updated_at";
ALTER TABLE "day_progress" RENAME CONSTRAINT "day_progress_userId_fkey" TO "day_progress_user_id_fkey";

-- practice_stats
ALTER TABLE "practice_stats" RENAME COLUMN "userId" TO "user_id";
ALTER TABLE "practice_stats" RENAME COLUMN "updatedAt" TO "updated_at";
ALTER TABLE "practice_stats" RENAME CONSTRAINT "practice_stats_userId_fkey" TO "practice_stats_user_id_fkey";
