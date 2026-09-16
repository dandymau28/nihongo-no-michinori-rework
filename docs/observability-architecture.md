# Engineering observability: assessment and proposal

The product half of this is built and running (see [`observability.md`](observability.md)).
This document covers the engineering half — metrics, tracing and correlation — as a
proposal, because the useful version of it needs a decision about memory that isn't mine
to make.

---

## 1. What the system actually is

**One Node process, not a distributed system.** `next start` on Node 20, one instance per
release slot (3101/3102) behind nginx, blue/green. The React client ships from the same
app. No separate frontend service, no mobile app, no workers, no queues.

| Layer | Reality |
|---|---|
| Backend | 13 route handlers under `src/app/api` — plan (6), progress (2), practice, auth, events, features, health |
| Data | PostgreSQL 16, Prisma 7 + `@prisma/adapter-pg` (a `pg` Pool, default sizing) |
| Cache | **None.** No Redis, no memcached, no application cache |
| External | Resend SMTP (nodemailer) and Google OAuth (optional). Nothing else server-side |
| Content | In code: 90 catalog lessons, 14 content modules, 4 practice trainers |
| Auth | better-auth; 30-day sessions, email confirmation, Google linking. Guests can use most of the site |

Consequences for the spec this proposal answers to:

- **Cache hit ratio, Redis health: not applicable.** There is nothing to measure.
- **Container/pod health, restart count:** systemd, not containers. `systemctl show -p NRestarts` is the equivalent.
- **Distributed tracing:** there is one service. Tracing is still worth it — the value is
  `HTTP → Prisma → PostgreSQL` and the outbound SMTP/OAuth calls — but it is
  single-service tracing, and calling it distributed would oversell it.

## 2. What already exists

| Capability | State |
|---|---|
| Logs | journald → Alloy → Loki, 30-day retention, nginx access logs as JSON |
| App events | 18 server events + 14 browser events, one JSON line each, with `userId` / `anonId` / `sessionId` |
| Host vitals | `host-stats.timer`, one JSON line a minute: CPU, memory, swap, disk, per-service memory |
| Dashboards | 7 (4 engineering, 3 product) |
| Alerts | 3, on nginx 5xx, nginx 4xx and app error lines |
| Health check | `/api/health` — release id + a database round-trip |
| Product data | Aggregate views in the `metrics` schema, read by a read-only role |

## 3. Gaps

1. **No request-scoped identity.** Nothing ties a log line to one request, or a user action to the query it caused. `requestId` exists in the event schema but nothing generates one server-side yet.
2. **No per-route latency.** nginx measures duration, but its `uri` is the raw path — high cardinality, and it can't see which route template matched or who was signed in.
3. **The database is a black box.** No query latency, no pool utilisation or saturation, no slow-query attribution. A 2-second page and a 2-second query look identical from outside.
4. **No traces.** "What happened during this operation" can only be reconstructed by reading log lines near each other in time.
5. **Percentiles are recomputed from raw logs on every dashboard load.** Fine at this traffic, linearly worse as it grows, and there are no recording rules to pre-aggregate.
6. **Error visibility is text matching.** `|~ "(?i)error"` finds errors; it can't group them, count distinct ones, or tell you which release introduced one.
7. **No timeout or saturation signal.** Neither nginx nor the app reports upstream timeouts as such.

## 4. The constraint, stated plainly

| | |
|---|---|
| Total RAM | 1.9 GB |
| Free now | ~1 GB |
| Monitoring today | ~350 MB (Grafana 130, Loki 150, Alloy 60) |
| A deploy | `next build` on the box, ~1 GB peak |

Prometheus (~150 MB) plus Tempo (~200 MB) plus the OTel SDK inside the app (~30–50 MB)
is ~400 MB more. That fits while idle and collides with a deploy build. Hence three
options, and **the instrumentation code is identical in all three** — only the exporter
endpoint differs, so this decision is reversible and doesn't block writing the code.

### Option A — no new infrastructure

Derive what can be derived from structured logs: the app logs one line per request with
route template, status and duration; LogQL computes rate, errors and percentiles.

- **Cost:** 0 MB. **Gets you:** RED per route, DB timing per request (as a number in the line), error grouping by type.
- **Doesn't get you:** traces, pool saturation over time, exemplars, recording rules, anything needing a histogram.

### Option B — Prometheus + Tempo on the box (recommended, with a RAM bump)

OTel SDK in the app → OTLP to **Alloy, which is already installed and is already the
collector** → Prometheus (15d) and Tempo (72h, sampled), Loki unchanged.

- **Cost:** ~400 MB, so it wants the VPS at 4 GB. **Gets you:** the whole spec — RED histograms, DB spans, pool metrics, traces with exemplars from metric to trace to log.
- **Risk:** at 1.9 GB this is the option that makes deploys fragile. Don't take it without the upgrade.

### Option C — local agent, hosted backends

Same app instrumentation; Alloy ships metrics and traces to Grafana Cloud's free tier
(10k series, 50 GB traces), logs stay local in Loki. Grafana on `horus` queries both.

- **Cost:** ~40 MB locally. **Gets you:** everything in B. **Costs you:** telemetry leaves the box, and a free-tier account becomes a dependency.

**My recommendation:** B with the VPS at 4 GB. If the upgrade isn't worth it, C — and A
only if neither appeals, since A's ceiling is low and you'd rebuild later.

## 5. Telemetry architecture

```
Browser ──► /api/events ──┐
                          │
Next.js app (OTel SDK)    │  JSON log lines          spans          metrics
  ├─ HTTP instrumentation │      │                     │               │
  ├─ Prisma instrumentation      ▼                     ▼               ▼
  └─ pg pool metrics         journald ──────────► Alloy (already installed) ◄── nginx logs
                                                   │        │        │
                                                   ▼        ▼        ▼
                                                 Loki    Tempo   Prometheus
                                                   └────────┴────────┘
                                                            ▼
                                                     Grafana (horus)
```

Alloy is the single collection point that already exists: it tails the journal and nginx
today, and gains an OTLP receiver on `127.0.0.1:4318` for the app.

## 6. Instrumentation plan

**`src/instrumentation.ts`** (Next.js's own hook, no framework fight):

- HTTP server spans with `http.route` set to the **matched route template** (`/api/plan/entries/{id}`), never the raw path.
- Prisma spans for every query (`@prisma/instrumentation`) — the exact package for Prisma 7 needs verifying before I commit to it.
- Outbound spans for SMTP and Google OAuth.
- `requestId` generated per request, attached to the span, returned as `x-request-id`, and included in every `logEvent` line through `AsyncLocalStorage`.
- Sampling: 100% while traffic is this small; parent-based ratio later, always keeping errors and anything over 1s.

**Span attribute rules:** route template, method, status, DB operation and table, row counts, durations. Never: email addresses, names, notes, answers, `Authorization` or `Cookie` headers, session tokens, reset tokens, full request bodies. `userId` on spans only — a random cuid, and it stays out of metric labels.

## 7. Metric catalog

Names follow OpenTelemetry semantic conventions where they exist; everything domain-specific gets a `michinori_` prefix.

| Metric | Type | Labels | Notes |
|---|---|---|---|
| `http_server_request_duration_seconds` | histogram | `route`, `method`, `status_class` | RED: rate, errors and duration all come from this one |
| `http_server_active_requests` | gauge | `route` | concurrency |
| `db_client_operation_duration_seconds` | histogram | `operation`, `table` | Prisma spans |
| `db_client_connections_usage` | gauge | `state` (used/idle) | pool utilisation — the U and S of USE |
| `db_client_connections_pending_requests` | gauge | — | saturation: queries waiting for a connection |
| `michinori_email_send_duration_seconds` | histogram | `kind` (verify/reset), `outcome` | SMTP is the one slow dependency |
| `michinori_events_received_total` | counter | `outcome` (accepted/dropped) | telemetry intake health |
| `michinori_build_info` | gauge | `release`, `node_version` | 1, for "which release is live" |
| `nodejs_*` (runtime) | — | — | heap, event-loop lag, GC — from the OTel Node runtime instrumentation |

**Cardinality budget:** ~15 route templates × 3 methods × 5 status classes ≈ 225 series for
the HTTP counter, ~2,700 with histogram buckets. Everything else is under 100. Comfortably
inside any tier.

**Never a metric label:** `userId`, `anonId`, `sessionId`, `requestId`, `traceId`,
`lessonId`, raw URIs. Those live in events, logs and traces — which is exactly where the
product layer already puts them.

## 8. Correlation

| Layer | Identifier | Where it lives |
|---|---|---|
| Product | `userId`, `anonId`, `sessionId`, `eventId`, `feature`, `contentId` | events (Loki) |
| Request | `requestId` | events, app logs, span attribute, `x-request-id` response header |
| Trace | `traceId`, `spanId` | spans (Tempo), and stamped into every app log line |

Grafana ties them together with a derived field on the Loki datasource: `traceId` in a log
line becomes a link into Tempo, and exemplars on the HTTP histogram jump from a latency
spike straight to a slow trace.

## 9. Dashboards to add

Three, alongside the seven that exist:

1. **System health** — RED per route, status classes, p50/p95/p99 from the histogram, active requests, DB latency and pool saturation, `/api/health`, host vitals. Replaces guesswork in *Logs & traffic*, which stays as the log-reading surface.
2. **Application experience** — availability of the endpoints that matter (`/api/plan`, `/api/progress`, `/api/events`, auth), timeout rate, critical-flow success rate (progress saves attempted vs succeeded), slowest routes, errors by type and release.
3. **Dependencies** — PostgreSQL (latency by operation and table, slowest queries, pool), SMTP (send duration and failures), Google OAuth. Each with its own "is this the thing that's broken" verdict.

*Feature health* already puts product outcomes next to endpoint latency; with histograms
those panels get accurate percentiles instead of log-derived ones.

## 10. Alerts to add

Each one must be actionable — something you'd get up for, or it doesn't ship.

| Alert | Condition | Why |
|---|---|---|
| Error budget burn | 5xx rate > 2% of requests for 10 min | Ratio, not a count: survives traffic growth, unlike today's absolute threshold |
| Latency regression | p95 on any route > 1s for 10 min | Users feel p95; per-route so one slow endpoint isn't hidden by an average |
| Database slow | `db_client_operation_duration_seconds` p95 > 250 ms for 10 min | Separates "the app is slow" from "the database is slow" without opening a trace |
| Pool saturation | pending connection requests > 0 for 5 min | The failure that looks like a hang and never logs an error |
| Health check failing | `/api/health` non-200 three evaluations running | The one true "is it up" |
| App restart loop | more than 3 starts in 15 min | Distinguishes a crash loop from a deploy |
| Disk filling | > 85% used, or < 2 GB free | Logs and Postgres share the disk; it fills silently |
| Memory pressure | swap grows > 512 MB sustained 30 min | On a 1.9 GB box this is the early warning before the OOM killer |

Deliberately **not** alerting: single-spike latency, 4xx noise (bots), individual errors,
and any product metric until traffic makes the numbers meaningful.

## 11. Logging changes

Structured JSON already; what's missing is correlation and consistency:

- `requestId`, `traceId`, `spanId` on every server line, from `AsyncLocalStorage` so callers don't pass them around.
- `level`, `service` and `release` fields, so a log line says which deploy produced it.
- One line per request (route template, status, duration, user id) — the app's own access log, which nginx can't produce.
- Errors logged as `{evt:"error", type, message, stack, requestId}` rather than free text, so they can be grouped and counted.

Unchanged: no passwords, tokens, auth headers, email addresses, notes or answers. Ever.

## 12. Phasing

| Phase | Scope | New infra | Effort |
|---|---|---|---|
| **0 — done** | Logs, host vitals, nginx JSON, 18 server events, product telemetry, 7 dashboards, 3 alerts | none | shipped |
| **1** | `requestId` everywhere, per-request app log line, error events, `/api/health` depth, dashboards updated to use them | none | ~half a day |
| **2** | OTel SDK, HTTP + Prisma + runtime metrics, pool metrics, System health and Dependencies dashboards, the 8 alerts | Prometheus (or Cloud) | ~1 day |
| **3** | Traces, exemplars, log→trace links, Application experience dashboard | Tempo (or Cloud) | ~half a day |

Phase 1 is worth doing regardless of the infrastructure decision, and makes phases 2 and 3
mostly configuration.

## 13. What I need from you

1. **Option A, B or C** — that is, whether the VPS gets more RAM, whether telemetry may leave the box, or whether we stay within what's there.
2. **Whether to do Phase 1 now** while that decision waits. It needs nothing new and removes the biggest gap: nothing today can answer "what happened during this one request".

Once chosen, this document becomes the implementation plan, and every phase lands with the
same validation approach as the product work: an end-to-end test that exercises the real
flows and asserts the telemetry that came out.
