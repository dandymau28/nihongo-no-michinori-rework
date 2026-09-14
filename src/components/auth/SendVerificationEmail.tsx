"use client";

import { useSettings } from "@/context/SettingsContext";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { useVerificationResend } from "./useVerificationResend";

/** "Send confirmation email" for a signed-in learner whose email isn't confirmed yet. */
export function SendVerificationEmail({
  email,
  fullWidth = false,
}: {
  email: string;
  fullWidth?: boolean;
}) {
  const { t } = useSettings();
  const { status, cooldown, send } = useVerificationResend(email);
  const recentlySent = status === "sent" || (status === "idle" && cooldown > 0);

  return (
    <div className="space-y-1.5">
      <Button
        size="sm"
        variant="secondary"
        className={cn(fullWidth && "w-full")}
        onClick={send}
        disabled={cooldown > 0 || status === "sending"}
      >
        {status === "sending"
          ? "…"
          : cooldown > 0
            ? t({ en: `Send again in ${cooldown}s`, id: `Kirim ulang dalam ${cooldown} dtk` })
            : recentlySent
              ? t({ en: "Send again", id: "Kirim ulang" })
              : t({ en: "Send confirmation email", id: "Kirim email konfirmasi" })}
      </Button>

      <div role="status" aria-live="polite" className="text-xs">
        {recentlySent && (
          <p className="text-success">
            {t({
              en: `Sent to ${email}. Open the link in it — check spam if it's not there.`,
              id: `Terkirim ke ${email}. Buka tautannya — cek folder spam jika tidak ada.`,
            })}
          </p>
        )}
        {status === "already" && (
          <p className="text-success">
            {t({
              en: "Your email is already confirmed. Refresh the page to update.",
              id: "Emailmu sudah dikonfirmasi. Muat ulang halaman untuk memperbarui.",
            })}
          </p>
        )}
        {status === "error" && (
          <p className="text-danger">
            {t({
              en: "The email couldn't be sent. Wait a minute, then try again.",
              id: "Email gagal dikirim. Tunggu sebentar, lalu coba lagi.",
            })}
          </p>
        )}
      </div>
    </div>
  );
}
