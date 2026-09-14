"use client";

import type { ReactNode } from "react";

export const authInputCls =
  "h-10 w-full rounded-xl border border-border bg-surface px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]";

/** Centered layout shared by the sign-in, sign-up and password pages. */
export function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-sm space-y-6 py-4">
      <div className="space-y-1 text-center">
        <span className="mx-auto grid size-10 place-items-center rounded-xl bg-primary text-lg font-bold text-primary-fg">
          日
        </span>
        <h1 className="pt-2 text-xl font-bold">{title}</h1>
        {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

export function Field({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted">{label}</span>
      {children}
    </label>
  );
}
