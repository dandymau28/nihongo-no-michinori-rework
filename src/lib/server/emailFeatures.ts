import { emailConfigured } from "./email";

/**
 * Features that work by emailing a link — password reset and email confirmation —
 * are on only when those emails can reach the learner. In development the links
 * are printed to the server log, so they're always on there.
 */
export function emailLinksEnabled(): boolean {
  return emailConfigured() || process.env.NODE_ENV !== "production";
}
