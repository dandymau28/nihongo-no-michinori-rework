import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/AuthForm";
import { emailLinksEnabled } from "@/lib/server/emailFeatures";
import { googleEnabled } from "@/lib/server/google";
import { safeNext } from "@/lib/safeNext";

export const metadata: Metadata = { title: "Sign in · Nihongo No Michinori" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string | string[] }>;
}) {
  const { next } = await searchParams;
  const emailLinks = emailLinksEnabled();
  return (
    <AuthForm
      mode="login"
      googleEnabled={googleEnabled()}
      resetEnabled={emailLinks}
      verificationRequired={emailLinks}
      next={safeNext(next)}
    />
  );
}
