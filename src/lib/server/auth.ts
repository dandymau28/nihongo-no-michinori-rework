import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { prisma } from "./db";
import { linkEmail, sendEmail } from "./email";
import { emailLinksEnabled } from "./emailFeatures";
import { googleEnabled } from "./google";
import { logEvent } from "./log";

const DAY = 60 * 60 * 24;

/** Not awaited, so response times don't reveal whether an account exists. */
function deliver(
  kind: "verify" | "reset",
  user: { id: string; email: string },
  subject: string,
  body: { text: string; html: string },
) {
  logEvent("auth.email_requested", { userId: user.id, kind });
  void sendEmail({ to: user.email, subject, ...body }).catch((err) => {
    logEvent("auth.email_failed", { userId: user.id, kind, error: String(err) });
    console.error(`[email] "${subject}" failed:`, err);
  });
}

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  session: {
    // "Keep me signed in" (ticked by default): 30 days, renewed daily while in use.
    // Unticked, better-auth issues a browser-session cookie and a 1-day session.
    expiresIn: 30 * DAY,
    updateAge: DAY,
  },
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    autoSignIn: true,
    // Only when confirmation emails can actually be delivered (see emailLinksEnabled),
    // otherwise nobody could ever sign in.
    requireEmailVerification: emailLinksEnabled(),
    revokeSessionsOnPasswordReset: true,
    sendResetPassword: async ({ user, url }) => {
      deliver(
        "reset",
        user,
        "Reset your Nihongo No Michinori password",
        linkEmail({
          name: user.name,
          intro:
            "Someone (hopefully you) asked to reset the password for your Nihongo No Michinori account. The link works for 1 hour.",
          action: "Choose a new password",
          url,
          outro: "If you didn't ask for this, you can ignore this email — your password stays the same.",
        }),
      );
    },
  },
  emailVerification: {
    autoSignInAfterVerification: true,
    expiresIn: DAY,
    sendVerificationEmail: async ({ user, url }) => {
      deliver(
        "verify",
        user,
        "Confirm your email for Nihongo No Michinori",
        linkEmail({
          name: user.name,
          intro:
            "Welcome to Nihongo No Michinori! Confirm this is your email address so your study plan and progress can be saved. The link works for 24 hours.",
          action: "Confirm my email",
          url,
          outro: "If you didn't create an account, you can ignore this email.",
        }),
      );
    },
  },
  socialProviders: googleEnabled()
    ? {
        google: {
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
      }
    : {},
  account: {
    // Signing in with Google using the same email joins the existing account.
    accountLinking: { enabled: true, trustedProviders: ["google"] },
  },
  // One log line per account created and per sign-in, for the "Learner flows" dashboard.
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          logEvent("auth.signup", { userId: user.id, confirmed: user.emailVerified });
        },
      },
    },
    session: {
      create: {
        after: async (session) => {
          logEvent("auth.signin", { userId: session.userId });
        },
      },
    },
  },
  plugins: [nextCookies()],
});
