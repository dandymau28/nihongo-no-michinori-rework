"use client";

import { usePathname } from "next/navigation";
import { useSettings } from "@/context/SettingsContext";
import type { Bi } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";

/** Shown wherever something would be saved: guests can look, members can track. */
export function SignInPrompt({ message, className }: { message: Bi; className?: string }) {
  const { t } = useSettings();
  const pathname = usePathname();
  const query = `?next=${encodeURIComponent(pathname)}`;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3 rounded-2xl border border-primary/30 bg-primary-soft/40 p-4",
        className,
      )}
    >
      <p className="min-w-0 flex-1 basis-60 text-sm">{t(message)}</p>
      <div className="flex gap-2">
        <ButtonLink href={`/login${query}`} size="sm">
          {t({ en: "Sign in", id: "Masuk" })}
        </ButtonLink>
        <ButtonLink href={`/register${query}`} size="sm" variant="secondary">
          {t({ en: "Create account", id: "Buat akun" })}
        </ButtonLink>
      </div>
    </div>
  );
}
