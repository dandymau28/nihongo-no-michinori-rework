"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useAuth } from "@/lib/useAuth";
import { useSiteFeatures } from "@/lib/useSiteFeatures";
import { useSettings } from "@/context/SettingsContext";
import { STR } from "@/lib/strings";
import { ButtonLink } from "@/components/ui/Button";
import { SendVerificationEmail } from "./SendVerificationEmail";

const AUTH_PAGES = ["/login", "/register", "/forgot-password", "/reset-password", "/verify-email"];

export function AccountMenu() {
  const { t } = useSettings();
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Only a signed-in learner who hasn't confirmed their email, and only when the
  // server can actually deliver the email.
  const unconfirmed = Boolean(user && !user.emailVerified);
  const features = useSiteFeatures(unconfirmed);
  const needsConfirmation = unconfirmed && features?.emailLinks === true;

  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  if (loading) return <div className="size-8 shrink-0" aria-hidden />;

  if (!user) {
    if (AUTH_PAGES.includes(pathname)) return null;
    return (
      <ButtonLink
        href={`/login?next=${encodeURIComponent(pathname)}`}
        size="sm"
        className="shrink-0"
      >
        {t({ en: "Sign in", id: "Masuk" })}
      </ButtonLink>
    );
  }

  const initial = (user.name || user.email).trim().charAt(0).toUpperCase();

  async function signOut() {
    setOpen(false);
    await authClient.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <div className="relative shrink-0" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={
          needsConfirmation
            ? t({ en: "Account — email not confirmed", id: "Akun — email belum dikonfirmasi" })
            : t({ en: "Account", id: "Akun" })
        }
        aria-expanded={open}
        className="grid size-8 place-items-center overflow-hidden rounded-full border border-border bg-primary-soft text-sm font-semibold text-primary"
      >
        {user.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={user.image} alt="" className="size-full object-cover" referrerPolicy="no-referrer" />
        ) : (
          initial
        )}
      </button>
      {needsConfirmation && (
        <span
          aria-hidden
          className="pointer-events-none absolute -right-0.5 -top-0.5 size-3 rounded-full border-2 border-bg bg-warning"
        />
      )}

      {open && (
        <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-border bg-surface p-3 shadow-lg">
          <p className="truncate text-sm font-medium">{user.name}</p>
          <p className="truncate text-xs text-muted">{user.email}</p>

          {needsConfirmation && (
            <div className="mt-3 space-y-2 rounded-xl bg-warning-soft p-2.5">
              <p className="text-xs font-semibold text-warning">
                {t({ en: "Email not confirmed", id: "Email belum dikonfirmasi" })}
              </p>
              <p className="text-xs">
                {t({
                  en: "Confirm it now — you'll need a confirmed email to sign in again after signing out.",
                  id: "Konfirmasi sekarang — email yang terkonfirmasi diperlukan untuk masuk lagi setelah keluar.",
                })}
              </p>
              <SendVerificationEmail email={user.email} fullWidth />
            </div>
          )}

          <div className="my-2 border-t border-border" />
          <Link
            href="/settings"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-2 py-1.5 text-sm text-muted hover:bg-surface-2 hover:text-fg"
          >
            {t(STR.nav_settings)}
          </Link>
          <button
            onClick={signOut}
            className="block w-full rounded-lg px-2 py-1.5 text-left text-sm text-muted hover:bg-surface-2 hover:text-fg"
          >
            {t({ en: "Sign out", id: "Keluar" })}
          </button>
        </div>
      )}
    </div>
  );
}
