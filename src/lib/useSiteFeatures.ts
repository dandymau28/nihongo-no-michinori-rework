"use client";

import { useEffect, useState } from "react";

export type SiteFeatures = {
  /** The server can email links (password reset, email confirmation). */
  emailLinks: boolean;
};

let pending: Promise<SiteFeatures> | null = null;

function load(): Promise<SiteFeatures> {
  pending ??= fetch("/api/features")
    .then((r) => (r.ok ? (r.json() as Promise<SiteFeatures>) : { emailLinks: false }))
    .catch(() => {
      pending = null; // retry next time
      return { emailLinks: false };
    });
  return pending;
}

/** Server feature switches, fetched once per page load and only when `enabled`. */
export function useSiteFeatures(enabled = true): SiteFeatures | null {
  const [features, setFeatures] = useState<SiteFeatures | null>(null);

  useEffect(() => {
    if (!enabled) return;
    let live = true;
    load().then((f) => live && setFeatures(f));
    return () => {
      live = false;
    };
  }, [enabled]);

  return features;
}
