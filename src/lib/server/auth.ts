import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { prisma } from "./db";
import { sendEmail } from "./email";
import { googleEnabled } from "./google";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    autoSignIn: true,
    revokeSessionsOnPasswordReset: true,
    sendResetPassword: async ({ user, url }) => {
      // Not awaited, so response time doesn't reveal whether the account exists.
      void sendEmail({
        to: user.email,
        subject: "Reset your Nihongo No Michinori password",
        text: `Hi ${user.name},\n\nSomeone (hopefully you) asked to reset the password for your Nihongo No Michinori account. Open this link to choose a new one — it expires in 1 hour:\n\n${url}\n\nIf you didn't ask for this, you can ignore this email.`,
        html: `<p>Hi ${escapeHtml(user.name)},</p><p>Someone (hopefully you) asked to reset the password for your Nihongo No Michinori account. The link expires in 1 hour.</p><p><a href="${escapeHtml(url)}">Choose a new password</a></p><p>If you didn't ask for this, you can ignore this email.</p>`,
      }).catch((err) => console.error("[email] reset password email failed:", err));
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
  plugins: [nextCookies()],
});
