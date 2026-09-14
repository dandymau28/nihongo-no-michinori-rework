"use client";

import { useCallback, useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

const COOLDOWN_SECONDS = 60;
const STORAGE_KEY = "nnm.verification-sent";

export type ResendStatus = "idle" | "sending" | "sent" | "already" | "error";

function readSentAt(email: string): number {
  try {
    const v = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "null");
    return v && v.email === email ? Number(v.at) || 0 : 0;
  } catch {
    return 0;
  }
}

function writeSentAt(email: string) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ email, at: Date.now() }));
  } catch {
    /* storage unavailable — the cooldown then only lasts while this component is mounted */
  }
}

/**
 * Sends the email-confirmation link. The 60-second cooldown is shared (per tab) by
 * every place that offers it — the profile menu, Settings and "Check your inbox" —
 * so reopening a menu doesn't reset it.
 */
export function useVerificationResend(
  email: string,
  { callbackURL = "/verify-email", justSent = false }: { callbackURL?: string; justSent?: boolean } = {},
) {
  const [status, setStatus] = useState<ResendStatus>("idle");
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (justSent) writeSentAt(email);
    const tick = () =>
      setCooldown(
        Math.max(0, COOLDOWN_SECONDS - Math.floor((Date.now() - readSentAt(email)) / 1000)),
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [email, justSent]);

  const send = useCallback(async () => {
    setStatus("sending");
    const res = await authClient.sendVerificationEmail({ email, callbackURL });
    if (res.error) {
      setStatus(res.error.code === "EMAIL_ALREADY_VERIFIED" ? "already" : "error");
      return;
    }
    writeSentAt(email);
    setCooldown(COOLDOWN_SECONDS);
    setStatus("sent");
  }, [email, callbackURL]);

  return { status, cooldown, send };
}
