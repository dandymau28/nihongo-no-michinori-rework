import type { Metadata } from "next";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = { title: "Reset password · Shinpuru Nihongo" };

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
