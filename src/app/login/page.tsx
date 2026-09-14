import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/AuthForm";
import { googleEnabled } from "@/lib/server/google";
import { passwordResetEnabled } from "@/lib/server/resetEnabled";
import { safeNext } from "@/lib/safeNext";

export const metadata: Metadata = { title: "Sign in · Shinpuru Nihongo" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string | string[] }>;
}) {
  const { next } = await searchParams;
  return (
    <AuthForm
      mode="login"
      googleEnabled={googleEnabled()}
      resetEnabled={passwordResetEnabled()}
      next={safeNext(next)}
    />
  );
}
