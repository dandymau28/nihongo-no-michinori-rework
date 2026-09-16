import { headers } from "next/headers";
import { badRequest, currentUserId, json, readJson } from "@/lib/server/http";
import { logEvent } from "@/lib/server/log";
import { eventBatch } from "@/lib/server/schemas";

/**
 * Product events from the browser (src/lib/telemetry.ts). Open to guests on purpose —
 * a learner who never signs in is still worth counting — so the payload is validated
 * strictly, the signed-in user id comes from the session rather than the body, and the
 * whole endpoint is rate limited to keep the logs from being flooded.
 */

const PER_MINUTE = 3000;
let windowStart = Date.now();
let count = 0;
let warned = false;

function allow(events: number): boolean {
  const now = Date.now();
  if (now - windowStart > 60_000) {
    windowStart = now;
    count = 0;
    warned = false;
  }
  if (count + events > PER_MINUTE) {
    if (!warned) {
      warned = true;
      logEvent("telemetry.throttled", { limit: PER_MINUTE });
    }
    return false;
  }
  count += events;
  return true;
}

export async function POST(req: Request) {
  const parsed = eventBatch.safeParse(await readJson(req));
  if (!parsed.success) return badRequest("invalid events");

  const events = parsed.data.events;
  // Accepted-and-dropped, not an error: the browser must not retry into the limiter.
  if (!allow(events.length)) return json({ ok: true }, 202);

  const userId = await currentUserId();
  const requestId = (await headers()).get("x-request-id") ?? undefined;

  for (const { evt, ...fields } of events) {
    logEvent(evt, { ...fields, userId: userId ?? undefined, requestId });
  }
  return json({ ok: true }, 202);
}
