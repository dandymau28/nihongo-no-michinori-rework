import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/AuthForm";
import { googleEnabled } from "@/lib/server/google";
import { safeNext } from "@/lib/safeNext";

export const metadata: Metadata = { title: "Create account · Nihongo No Michinori" };

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string | string[] }>;
}) {
  const { next } = await searchParams;
  return <AuthForm mode="register" googleEnabled={googleEnabled()} next={safeNext(next)} />;
}
