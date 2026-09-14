"use client";

import { useSettings } from "@/context/SettingsContext";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useVerificationResend } from "./useVerificationResend";

/** "Check your inbox" panel shown after sign-up, or when an unconfirmed account tries to sign in. */
export function CheckEmail({
  email,
  callbackURL,
  reason,
  sendFailed = false,
  onBack,
}: {
  email: string;
  callbackURL: string;
  reason: "signup" | "signin";
  sendFailed?: boolean;
  onBack: () => void;
}) {
  const { t } = useSettings();
  const { status, cooldown, send } = useVerificationResend(email, {
    callbackURL,
    justSent: !sendFailed,
  });
  const showError = status === "error" || (status === "idle" && sendFailed);

  return (
    <Card className="space-y-3">
      <p className="text-sm">
        {reason === "signup"
          ? t({
              en: `We sent a confirmation link to ${email}. Open it to finish creating your account — it works for 24 hours.`,
              id: `Kami mengirim tautan konfirmasi ke ${email}. Buka tautannya untuk menyelesaikan pembuatan akun — berlaku 24 jam.`,
            })
          : t({
              en: `Confirm your email before signing in. We sent a new link to ${email} — it works for 24 hours.`,
              id: `Konfirmasi emailmu sebelum masuk. Kami mengirim tautan baru ke ${email} — berlaku 24 jam.`,
            })}
      </p>
      <p className="text-xs text-muted">
        {t({
          en: "Can't find it? Check your spam folder, or send it again.",
          id: "Tidak ketemu? Cek folder spam, atau kirim ulang.",
        })}
      </p>

      {status === "sent" && (
        <p className="text-xs text-success">
          {t({ en: "New link sent.", id: "Tautan baru terkirim." })}
        </p>
      )}
      {showError && (
        <p role="alert" className="text-xs text-danger">
          {t({
            en: "The email couldn't be sent. Wait a minute, then send it again.",
            id: "Email gagal dikirim. Tunggu sebentar, lalu kirim ulang.",
          })}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          variant="secondary"
          onClick={send}
          disabled={cooldown > 0 || status === "sending"}
        >
          {status === "sending"
            ? "…"
            : cooldown > 0
              ? t({ en: `Send again in ${cooldown}s`, id: `Kirim ulang dalam ${cooldown} dtk` })
              : t({ en: "Send again", id: "Kirim ulang" })}
        </Button>
        <Button size="sm" variant="ghost" onClick={onBack}>
          {reason === "signup"
            ? t({ en: "Use a different email", id: "Pakai email lain" })
            : t({ en: "Back to sign in", id: "Kembali ke halaman masuk" })}
        </Button>
      </div>
    </Card>
  );
}
