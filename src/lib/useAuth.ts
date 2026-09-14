"use client";

import { useEffect, useState } from "react";
import { authClient } from "./auth-client";

/**
 * The signed-in user (or null for guests). `loading` is true only until the
 * first session check settles, so background session refetches never make
 * dependent data providers reset.
 */
export function useAuth() {
  const { data, isPending } = authClient.useSession();
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (!isPending) setSettled(true);
  }, [isPending]);

  return { user: data?.user ?? null, loading: !settled };
}
