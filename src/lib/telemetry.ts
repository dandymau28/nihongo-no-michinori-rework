"use client";

/**
 * Product telemetry: small events describing what a learner does, batched to /api/events
 * and from there into the same logs Grafana already reads (see docs/observability.md).
 *
 * Guests count too. A learner who never signs in is identified by `anonId`, a random id
 * in localStorage — not a cookie, never sent anywhere but this site's own server — and
 * `sessionId` groups one sitting, ending after 30 minutes of inactivity. The server adds
 * the signed-in `userId` itself; the browser never asserts who it is.
 *
 * Rules for anything added here: ids and numbers only. No answers, no notes, no titles,
 * no email addresses — nothing a learner typed. Telemetry must also never break the page,
 * so every path swallows its own errors.
 */

type Props = Record<string, string | number | boolean | null>;

type Fields = {
  /** Which part of the app: a lesson type ("grammar", "listening"…) or "practice.conj". */
  feature?: string;
  /** Lesson id, preset id, trainer id — never free text. */
  contentId?: string;
  level?: string;
  props?: Props;
};

type Event = Fields & {
  evt: string;
  eventId: string;
  at: string;
  sessionId: string;
  anonId: string;
};

const ANON_KEY = "nnm.anon";
const SESSION_KEY = "nnm.session";
const SESSION_IDLE_MS = 30 * 60_000;
const FLUSH_MS = 4_000;
const MAX_BATCH = 40;

const on = () => process.env.NEXT_PUBLIC_TELEMETRY !== "off";

let queue: Event[] = [];
let timer: ReturnType<typeof setTimeout> | null = null;
/** Used when localStorage throws (private windows, blocked storage). */
const memory: Record<string, string> = {};

function read(key: string): string | null {
  try {
    return localStorage.getItem(key) ?? memory[key] ?? null;
  } catch {
    return memory[key] ?? null;
  }
}

function write(key: string, value: string): void {
  memory[key] = value;
  try {
    localStorage.setItem(key, value);
  } catch {
    /* in-memory only for this tab */
  }
}

function newId(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
  }
}

function anonId(): string {
  const existing = read(ANON_KEY);
  if (existing) return existing;
  const id = newId();
  write(ANON_KEY, id);
  return id;
}

/** The current sitting, starting a new one after 30 minutes of inactivity. */
function session(): { id: string; fresh: boolean } {
  const now = Date.now();
  let saved: { id: string; started: number; last: number } | null = null;
  try {
    saved = JSON.parse(read(SESSION_KEY) || "null");
  } catch {
    saved = null;
  }
  const fresh = !saved || now - saved.last > SESSION_IDLE_MS;
  const next = fresh ? { id: newId(), started: now, last: now } : { ...saved!, last: now };
  write(SESSION_KEY, JSON.stringify(next));
  return { id: next.id, fresh };
}

function schedule(): void {
  if (timer) return;
  timer = setTimeout(() => {
    timer = null;
    flush();
  }, FLUSH_MS);
}

/** Send what's queued. `beacon` for page unload, where fetch may be cancelled. */
export function flush(beacon = false): void {
  if (!queue.length) return;
  const events = queue;
  queue = [];
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
  const body = JSON.stringify({ events });
  try {
    if (beacon && navigator.sendBeacon) {
      navigator.sendBeacon("/api/events", new Blob([body], { type: "application/json" }));
      return;
    }
    void fetch("/api/events", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body,
      credentials: "same-origin",
      keepalive: true,
    }).catch(() => {
      /* dropped on purpose: telemetry never retries into a loop */
    });
  } catch {
    /* ignore */
  }
}

/** Record one product event. Safe to call anywhere on the client, including during SSR. */
export function track(evt: string, fields: Fields = {}): void {
  if (typeof window === "undefined" || !on()) return;
  try {
    const { id: sessionId, fresh } = session();
    const at = new Date().toISOString();
    const base = { sessionId, anonId: anonId() };
    if (fresh) queue.push({ evt: "session.started", eventId: newId(), at, ...base });
    queue.push({ evt, eventId: newId(), at, ...base, ...fields });
    if (queue.length >= MAX_BATCH) flush();
    else schedule();
  } catch {
    /* ignore */
  }
}

const ROUTES: [RegExp, string][] = [
  [/^\/lessons\/[^/]+$/, "/lessons/{id}"],
  [/^\/lesson\/[^/]+$/, "/lesson/{slug}"],
  [/^\/day\/[^/]+$/, "/day/{day}"],
  [/^\/decks\/[^/]+\/edit$/, "/decks/{id}/edit"],
  [/^\/decks\/[^/]+$/, "/decks/{id}"],
  [/^\/d\/[^/]+$/, "/d/{token}"],
];

/** Collapse ids out of a path, so "route" stays a low-cardinality label. */
export function routeTemplate(pathname: string): string {
  for (const [pattern, template] of ROUTES) if (pattern.test(pathname)) return template;
  return pathname;
}
