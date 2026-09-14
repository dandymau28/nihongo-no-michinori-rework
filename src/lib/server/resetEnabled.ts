import { emailConfigured } from "./email";

/**
 * Offer "Forgot password?" when reset emails can reach the learner. In development
 * the link is printed to the server log, so it's always available there.
 */
export function passwordResetEnabled(): boolean {
  return emailConfigured() || process.env.NODE_ENV !== "production";
}
