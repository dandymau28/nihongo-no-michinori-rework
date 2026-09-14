import type { Metadata } from "next";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";

export const metadata: Metadata = { title: "New password · Shinpuru Nihongo" };

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string | string[]; error?: string | string[] }>;
}) {
  const { token, error } = await searchParams;
  // better-auth redirects with ?error=INVALID_TOKEN when the link is expired or used.
  const valid = typeof token === "string" && token.length > 0 && !error;
  return <ResetPasswordForm token={valid ? token : null} />;
}
