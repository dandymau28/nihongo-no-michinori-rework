"use client";

import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useSettings } from "@/context/SettingsContext";
import { Card } from "@/components/ui/Card";
import { Button, ButtonLink } from "@/components/ui/Button";
import { AuthShell, Field, authInputCls } from "./AuthShell";

/** Landing page of the emailed link: better-auth redirects here with `?token=`. */
export function ResetPasswordForm({ token }: { token: string | null }) {
  const { t } = useSettings();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!token) return;
    if (password !== confirm) {
      setError(t({ en: "The passwords don't match.", id: "Kata sandi tidak sama." }));
      return;
    }
    setBusy(true);
    setError(null);
    const res = await authClient.resetPassword({ newPassword: password, token });
    setBusy(false);
    if (res.error) {
      setError(
        res.error.message ||
          t({ en: "Something went wrong — please try again.", id: "Terjadi kesalahan — silakan coba lagi." }),
      );
      return;
    }
    setDone(true);
  }

  return (
    <AuthShell title={t({ en: "Choose a new password", id: "Buat kata sandi baru" })}>
      <Card className="space-y-3">
        {!token ? (
          <>
            <p className="text-sm">
              {t({
                en: "This reset link is invalid or has expired.",
                id: "Tautan atur ulang ini tidak valid atau sudah kedaluwarsa.",
              })}
            </p>
            <ButtonLink href="/forgot-password" size="sm" variant="secondary">
              {t({ en: "Request a new link", id: "Minta tautan baru" })}
            </ButtonLink>
          </>
        ) : done ? (
          <>
            <p className="text-sm">
              {t({
                en: "Your password has been changed. Other devices have been signed out.",
                id: "Kata sandimu sudah diganti. Perangkat lain telah dikeluarkan.",
              })}
            </p>
            <ButtonLink href="/login" size="sm">
              {t({ en: "Sign in", id: "Masuk" })}
            </ButtonLink>
          </>
        ) : (
          <form onSubmit={onSubmit} className="space-y-3">
            <Field label={t({ en: "New password", id: "Kata sandi baru" })}>
              <input
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={authInputCls}
              />
            </Field>
            <Field label={t({ en: "Repeat new password", id: "Ulangi kata sandi baru" })}>
              <input
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className={authInputCls}
              />
            </Field>
            <p className="text-xs text-muted">
              {t({ en: "At least 8 characters.", id: "Minimal 8 karakter." })}
            </p>
            {error && (
              <p role="alert" className="text-sm text-danger">
                {error}
              </p>
            )}
            <Button type="submit" className="w-full" disabled={busy}>
              {busy ? "…" : t({ en: "Save new password", id: "Simpan kata sandi baru" })}
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
