"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useAuth } from "@/lib/useAuth";
import { useSettings } from "@/context/SettingsContext";
import { STR } from "@/lib/strings";
import { ButtonLink } from "@/components/ui/Button";

const AUTH_PAGES = ["/login", "/register", "/forgot-password", "/reset-password"];

export function AccountMenu() {
  const { t } = useSettings();
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
        aria-label={t({ en: "Account", id: "Akun" })}
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

      {open && (
        <div className="absolute right-0 mt-2 w-60 rounded-2xl border border-border bg-surface p-3 shadow-lg">
          <p className="truncate text-sm font-medium">{user.name}</p>
          <p className="truncate text-xs text-muted">{user.email}</p>
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
