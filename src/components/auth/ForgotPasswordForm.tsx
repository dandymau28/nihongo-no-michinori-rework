"use client";

import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useSettings } from "@/context/SettingsContext";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AuthShell, Field, authInputCls } from "./AuthShell";

export function ForgotPasswordForm() {
  const { t } = useSettings();
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const res = await authClient.requestPasswordReset({
      email: email.trim(),
      redirectTo: "/reset-password",
    });
    setBusy(false);
    if (res.error) {
      setError(
        res.error.message ||
          t({ en: "Something went wrong — please try again.", id: "Terjadi kesalahan — silakan coba lagi." }),
      );
      return;
    }
    setSent(true);
  }

  return (
    <AuthShell
      title={t({ en: "Reset your password", id: "Atur ulang kata sandi" })}
      subtitle={t({
        en: "Enter your account email and we'll send you a link to choose a new password.",
        id: "Masukkan email akunmu dan kami akan mengirim tautan untuk membuat kata sandi baru.",
      })}
    >
      <Card className="space-y-3">
        {sent ? (
          <p className="text-sm">
            {t({
              en: `If an account exists for ${email.trim()}, a reset link is on its way. It expires in 1 hour — check your spam folder too.`,
              id: `Jika ada akun untuk ${email.trim()}, tautan atur ulang sedang dikirim. Berlaku 1 jam — cek juga folder spam.`,
            })}
          </p>
        ) : (
          <form onSubmit={onSubmit} className="space-y-3">
            <Field label={t({ en: "Email", id: "Email" })}>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={authInputCls}
              />
            </Field>
            {error && (
              <p role="alert" className="text-sm text-danger">
                {error}
              </p>
            )}
            <Button type="submit" className="w-full" disabled={busy}>
              {busy ? "…" : t({ en: "Send reset link", id: "Kirim tautan" })}
            </Button>
          </form>
        )}
      </Card>
      <p className="text-center text-sm text-muted">
        <Link href="/login" className="font-medium text-primary hover:underline">
          ← {t({ en: "Back to sign in", id: "Kembali ke halaman masuk" })}
        </Link>
      </p>
    </AuthShell>
  );
}
