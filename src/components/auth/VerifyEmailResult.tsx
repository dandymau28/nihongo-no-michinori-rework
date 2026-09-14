"use client";

import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useAuth } from "@/lib/useAuth";
import { useSettings } from "@/context/SettingsContext";
import { Card } from "@/components/ui/Card";
import { Button, ButtonLink } from "@/components/ui/Button";
import { AuthShell, Field, authInputCls } from "./AuthShell";

/**
 * Where the confirmation link lands. better-auth has already confirmed the address
 * and signed the learner in — or redirected here with `?error=` when it couldn't.
 */
export function VerifyEmailResult({ error, next }: { error: string | null; next: string }) {
  const { t } = useSettings();
  const { user, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const callbackURL =
    next !== "/" ? `/verify-email?next=${encodeURIComponent(next)}` : "/verify-email";

  async function resend(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const res = await authClient.sendVerificationEmail({ email: email.trim(), callbackURL });
    setStatus(res.error ? "error" : "sent");
  }

  const backToSignIn = (
    <p className="text-center text-sm text-muted">
      <Link href="/login" className="font-medium text-primary hover:underline">
        ← {t({ en: "Back to sign in", id: "Kembali ke halaman masuk" })}
      </Link>
    </p>
  );

  if (error) {
    const expired = error === "TOKEN_EXPIRED";
    return (
      <AuthShell
        title={
          expired
            ? t({ en: "This link has expired", id: "Tautan ini sudah kedaluwarsa" })
            : t({ en: "This link doesn't work", id: "Tautan ini tidak berlaku" })
        }
        subtitle={
          expired
            ? t({
                en: "Confirmation links work for 24 hours. Enter your email and we'll send a new one.",
                id: "Tautan konfirmasi berlaku 24 jam. Masukkan emailmu dan kami kirim yang baru.",
              })
            : t({
                en: "It may be incomplete or already replaced by a newer link. Enter your email to get a new one.",
                id: "Mungkin tautannya terpotong atau sudah diganti tautan yang lebih baru. Masukkan emailmu untuk mendapatkan yang baru.",
              })
        }
      >
        <Card className="space-y-3">
          {status === "sent" ? (
            <p className="text-sm">
              {t({
                en: "If that address has an unconfirmed account, a new link is on its way.",
                id: "Jika alamat itu punya akun yang belum dikonfirmasi, tautan baru sedang dikirim.",
              })}
            </p>
          ) : (
            <form onSubmit={resend} className="space-y-3">
              <Field label={t({ en: "Email", id: "Email" })}>
                <input
                  id="verify-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={authInputCls}
                />
              </Field>
              {status === "error" && (
                <p role="alert" className="text-sm text-danger">
                  {t({
                    en: "The email couldn't be sent. Wait a minute, then try again.",
                    id: "Email gagal dikirim. Tunggu sebentar, lalu coba lagi.",
                  })}
                </p>
              )}
              <Button type="submit" className="w-full" disabled={status === "sending"}>
                {status === "sending" ? "…" : t({ en: "Send a new link", id: "Kirim tautan baru" })}
              </Button>
            </form>
          )}
        </Card>
        {backToSignIn}
      </AuthShell>
    );
  }

  if (loading) return <p className="text-sm text-muted">…</p>;

  if (user?.emailVerified) {
    return (
      <AuthShell
        title={t({ en: "Email confirmed", id: "Email terkonfirmasi" })}
        subtitle={t({
          en: "You're signed in, and your plan and progress will be saved to this account.",
          id: "Kamu sudah masuk, dan rencana serta progresmu akan tersimpan di akun ini.",
        })}
      >
        <Card className="space-y-3">
          <p className="text-sm">
            <span className="text-muted">{t({ en: "Signed in as", id: "Masuk sebagai" })}</span>{" "}
            <b>{user.email}</b>
          </p>
          <ButtonLink href={next} className="w-full">
            {next === "/"
              ? t({ en: "Start learning", id: "Mulai belajar" })
              : t({ en: "Continue", id: "Lanjutkan" })}{" "}
            →
          </ButtonLink>
        </Card>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title={t({ en: "Confirm your email", id: "Konfirmasi emailmu" })}
      subtitle={t({
        en: "Open the link we emailed you. Already confirmed? Just sign in.",
        id: "Buka tautan yang kami kirim lewat email. Sudah dikonfirmasi? Langsung masuk saja.",
      })}
    >
      <Card>
        <ButtonLink href="/login" className="w-full">
          {t({ en: "Sign in", id: "Masuk" })}
        </ButtonLink>
      </Card>
    </AuthShell>
  );
}
