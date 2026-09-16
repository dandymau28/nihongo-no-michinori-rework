"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { flush, routeTemplate, track } from "@/lib/telemetry";

/**
 * Mounted once in the root layout: opens the session, records each page, and makes sure
 * queued events leave before the tab does. Renders nothing.
 */
export function TelemetryBoot() {
  const pathname = usePathname();
  const opened = useRef(false);

  useEffect(() => {
    if (!opened.current) {
      opened.current = true;
      let referrer = "direct";
      try {
        if (document.referrer) referrer = new URL(document.referrer).hostname;
      } catch {
        referrer = "unknown";
      }
      // The host only — never the full referring URL, which can carry search terms.
      track("app.opened", { props: { referrer } });
    }

    const leaving = () => flush(true);
    const onVisibility = () => {
      if (document.visibilityState === "hidden") leaving();
    };
    window.addEventListener("pagehide", leaving);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("pagehide", leaving);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    track("page.viewed", { props: { route: routeTemplate(pathname) } });
  }, [pathname]);

  return null;
}
