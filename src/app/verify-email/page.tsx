import type { Metadata } from "next";
import { VerifyEmailResult } from "@/components/auth/VerifyEmailResult";
import { safeNext } from "@/lib/safeNext";

export const metadata: Metadata = { title: "Confirm email · Nihongo No Michinori" };

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string | string[]; next?: string | string[] }>;
}) {
  const { error, next } = await searchParams;
  // better-auth redirects here with ?error=INVALID_TOKEN / TOKEN_EXPIRED / USER_NOT_FOUND.
  return <VerifyEmailResult error={typeof error === "string" ? error : null} next={safeNext(next)} />;
}
