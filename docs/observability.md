# Logs and usage: Grafana, Loki and Alloy

One place to answer both questions: **what did the server do?** (logs) and **is anyone
learning?** (usage). Reached at `https://horus.xerzack.web.id`.

| | |
|---|---|
| Grafana | `127.0.0.1:3001`, public only through nginx at `horus.xerzack.web.id` |
| Loki (log storage) | `127.0.0.1:3110`, 30-day retention, files in `/var/lib/loki` |
| Alloy (log shipper) | reads the systemd journal and `/var/log/nginx/*`, pushes to Loki |
| Usage data | the app's own PostgreSQL, through a read-only role and aggregate views |
| Host vitals | `host-stats.timer`, one JSON line a minute into the journal |

Seven dashboards come with it — four engineering, three product:

| Dashboard | Answers |
|---|---|
| **Logs & traffic** | Requests, failures, response times, the app log — from nginx and the journal |
| **Server health** | CPU, memory, swap, disk and memory per service — from `host-stats` |
| **Site usage** | How many learners, what they study, which lessons stall — from the database |
| **Learner flows** | Raw event stream: sign-up, emails, planner, lessons, practice, one learner at a time |
| **Product & learning** | Active learners (guests included), sessions, questions answered, accuracy, feature usage |
| **Learning funnel** | Where learners drop out, step by step, with conversion and drop-out trends |
| **Feature health** | Each feature's usage and accuracy beside the latency of the endpoints it depends on |

Nothing here is exposed to the internet except Grafana's own login page. Config files live
in [`observability/`](../observability) in this repo; this page is the install order.

## What it costs

The VPS has **1.9 GB of RAM**, already shared by the app, PostgreSQL and nginx — and a
deploy adds a Next.js build, which alone wants about 1 GB. So each service gets a hard
memory cap and an `OOMScoreAdjust` that makes the kernel kill *it*, never the website:

| | Typical | Hard cap |
|---|---|---|
| Grafana | ~130 MB | 280 MB |
| Loki | ~150 MB | 256 MB |
| Alloy | ~60 MB | 128 MB |
| host-stats | one second a minute | — |

There is deliberately **no Prometheus**. Resource monitoring normally means a metrics
database, which would cost another 150 MB of RAM on a box that has ~1 GB free; instead
`host-stats.sh` logs CPU, memory, swap, disk and per-service memory as one JSON line a
minute, and the dashboard graphs those numbers out of Loki. The trade-off is a one-minute
resolution and no PromQL. If the site ever outgrows that, Prometheus can be added without
changing anything else here.

That's roughly **350 MB in normal use**. Disk: a site this size writes a few MB of logs a
day, so 30 days stays well under 1 GB of the 21 GB free.

**Before installing, make sure swap exists** — it's the safety net when a deploy build and
these services want memory at the same time:

```bash
swapon --show
```

If that prints nothing, add 2 GB (same command as `docs/deploy.md` step 3):

```bash
sudo fallocate -l 2G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile && echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

---

## 1. Point the subdomain at the VPS

```bash
dig +short horus.xerzack.web.id
```

Expect `43.133.34.206`. If it prints nothing, add an **A** record `horus` →
`43.133.34.206` in CloudHost DNS, then wait a few minutes and try again.

## 2. Get the config files onto the server

They ship with the app, so deploy this commit first:

```bash
bash /var/www/nihongo-no-michinori/deploy.sh
```

```bash
export OBS=/var/www/nihongo-no-michinori/current/observability && ls $OBS
```

Expect `alloy  grafana  loki  nginx  sql  systemd`. Every command below uses `$OBS`, so
keep this shell open (or re-run the `export` after reconnecting).

## 3. Install Grafana, Loki and Alloy

```bash
sudo apt install -y apt-transport-https software-properties-common wget
```

```bash
sudo mkdir -p /etc/apt/keyrings && wget -q -O - https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /etc/apt/keyrings/grafana.gpg > /dev/null
```

```bash
echo "deb [signed-by=/etc/apt/keyrings/grafana.gpg] https://apt.grafana.com stable main" | sudo tee /etc/apt/sources.list.d/grafana.list
```

```bash
sudo apt update && apt-cache policy grafana loki alloy | grep -E 'grafana:|loki:|alloy:|Candidate'
```

Expect a **Candidate** version for all three. (If `loki` or `alloy` has none, your Ubuntu
is older than the repo expects — tell me and we'll switch those two to release binaries.)

```bash
sudo apt install -y grafana loki alloy
```

Each package installs a systemd service and starts it straight away, running its own
packaged config. The steps below replace those configs.

> **apt already started them.** `systemctl enable --now` does nothing to a service that
> is already running, so after replacing a config file you must `restart` — otherwise the
> packaged defaults keep running and nothing below behaves as described.

## 4. Loki: store the logs

The package decides which user Loki runs as and which file its unit reads, and that
differs between builds. Take both from the unit instead of assuming:

```bash
systemctl show -p User -p ExecStart --value loki
```

An empty `User` means it runs as root; the config path is the `-config.file=` in the
`ExecStart` line. The next block reads them itself, so run it as one block:

```bash
LOKI_USER=$(systemctl show -p User --value loki); LOKI_USER=${LOKI_USER:-root}
LOKI_CONF=$(systemctl show -p ExecStart --value loki | grep -oE '\-config\.file=[^ ;]+' | cut -d= -f2); LOKI_CONF=${LOKI_CONF:-/etc/loki/config.yml}
echo "loki runs as $LOKI_USER and reads $LOKI_CONF"
sudo install -m 644 $OBS/loki/config.yml "$LOKI_CONF"
sudo mkdir -p /var/lib/loki/{chunks,rules,wal,compactor}
sudo chown -R "$LOKI_USER" /var/lib/loki
```

```bash
sudo mkdir -p /etc/systemd/system/loki.service.d && sudo install -m 644 $OBS/systemd/loki-override.conf /etc/systemd/system/loki.service.d/override.conf
```

```bash
sudo systemctl daemon-reload && sudo systemctl enable loki && sudo systemctl restart loki
```

```bash
curl -sS http://127.0.0.1:3110/ready
```

Expect `ready`. (For the first 15 seconds it says it's still starting — wait and retry.)

```bash
sudo ss -ltnp | grep -E '3100|3110'
```

Expect exactly one line, `127.0.0.1:3110`. A line on `*:3100` means the old process is
still there with the packaged config — Loki didn't restart, or its unit reads a different
file than the one you just wrote.

## 5. Alloy: ship the logs

Alloy needs to read the journal and nginx's log files. Group changes only take effect
when the process restarts, which is the last command of this step:

```bash
sudo usermod -a -G systemd-journal,adm alloy
```

```bash
sudo install -m 644 $OBS/alloy/config.alloy /etc/alloy/config.alloy
```

```bash
sudo mkdir -p /etc/systemd/system/alloy.service.d && sudo install -m 644 $OBS/systemd/alloy-override.conf /etc/systemd/system/alloy.service.d/override.conf
```

```bash
sudo systemctl daemon-reload && sudo systemctl enable alloy && sudo systemctl restart alloy
```

```bash
curl -sS "http://127.0.0.1:3110/loki/api/v1/labels"
```

Expect JSON listing labels including `job` and `unit` — logs are arriving. (nginx's own
labels appear after step 6.)

## 6. nginx: log requests as JSON

```bash
sudo install -m 644 $OBS/nginx/log-json.conf /etc/nginx/conf.d/log-json.conf
```

Now tell the site to use it. Open the vhost:

```bash
sudo nano /etc/nginx/sites-available/nihongo-no-michinori
```

In the `server { ... }` block that listens on **443** (the one Certbot edited), add this
line just under `server_name`:

```nginx
    access_log /var/log/nginx/michinori.access.json.log json_access;
```

Save with Ctrl+O, Enter, Ctrl+X, then:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

```bash
curl -s https://nihongo-no-michinori.xerzack.web.id/about > /dev/null && sudo tail -1 /var/log/nginx/michinori.access.json.log
```

Expect one JSON object with `"status":200` and a `"duration"`.

> Logrotate already covers `/var/log/nginx/*.log`, and the new file matches that pattern.
> Alloy follows the rotation on its own.

## 7. Host vitals every minute

```bash
sudo install -m 755 $OBS/bin/host-stats.sh /usr/local/bin/host-stats.sh
```

```bash
sudo /usr/local/bin/host-stats.sh
```

Expect one JSON line: `{"evt":"host","cpu_pct":3.4,…}`. Every field must be a number — a
blank or `[not set]` means that unit isn't running, which is fine, but tell me if a field
is missing entirely.

```bash
sudo install -m 644 $OBS/systemd/host-stats.service /etc/systemd/system/host-stats.service && sudo install -m 644 $OBS/systemd/host-stats.timer /etc/systemd/system/host-stats.timer
```

```bash
sudo systemctl daemon-reload && sudo systemctl enable --now host-stats.timer
```

```bash
sleep 70 && sudo journalctl -u host-stats -n 2 --no-pager
```

Expect a fresh line, timestamped within the last minute.

## 8. Usage data: read-only views over the app database

Generate a password and create the views and the Grafana role:

```bash
GRAFANA_PW=$(openssl rand -hex 24) && echo "$GRAFANA_PW"
```

Copy that value — you need it in the next step.

```bash
sudo -u postgres psql -d nihongo_no_michinori -v grafana_pw="$GRAFANA_PW" -f $OBS/sql/metrics-views.sql
```

Expect a list of `CREATE VIEW` / `GRANT` lines and no errors.

```bash
sudo -u postgres psql -d nihongo_no_michinori -c "select * from metrics.totals"
```

Expect one row of numbers — your real learner counts.

**What Grafana can and can't see:** the `grafana_ro` role has SELECT on the `metrics`
schema only. Every view there is an aggregate, so no email addresses, names, password
hashes, session tokens or learner notes are reachable from a dashboard — even if someone
gets into Grafana. Verify it yourself:

```bash
sudo -u postgres psql -d nihongo_no_michinori -c 'set role grafana_ro; select * from "user" limit 1'
```

Expect `ERROR: permission denied for table user`. That's the correct answer.

## 9. Grafana

```bash
sudo install -m 600 -o root -g root /dev/null /etc/grafana/db.env && echo "GRAFANA_DB_PASSWORD=$GRAFANA_PW" | sudo tee /etc/grafana/db.env > /dev/null
```

```bash
sudo mkdir -p /etc/systemd/system/grafana-server.service.d && sudo install -m 644 $OBS/systemd/grafana-server-override.conf /etc/systemd/system/grafana-server.service.d/override.conf
```

```bash
sudo install -m 644 $OBS/grafana/provisioning/datasources/michinori.yml /etc/grafana/provisioning/datasources/michinori.yml
```

```bash
sudo install -m 644 $OBS/grafana/provisioning/dashboards/michinori.yml /etc/grafana/provisioning/dashboards/michinori.yml
```

```bash
sudo mkdir -p /var/lib/grafana/dashboards && sudo install -o grafana -g grafana -m 644 $OBS/grafana/dashboards/*.json /var/lib/grafana/dashboards/
```

```bash
sudo systemctl daemon-reload && sudo systemctl enable grafana-server && sudo systemctl restart grafana-server
```

```bash
curl -sS http://127.0.0.1:3001/api/health
```

Expect `"database": "ok"`.

## 10. Put nginx in front and turn on HTTPS

```bash
sudo install -m 644 $OBS/nginx/horus.conf /etc/nginx/sites-available/horus
```

```bash
sudo ln -s /etc/nginx/sites-available/horus /etc/nginx/sites-enabled/ && sudo nginx -t && sudo systemctl reload nginx
```

```bash
sudo certbot --nginx -d horus.xerzack.web.id --redirect
```

```bash
curl -sI https://horus.xerzack.web.id/login | head -1
```

Expect `HTTP/2 200`. Grafana only accepts its session cookie over HTTPS, so finish this
step before logging in.

## 11. First login

Open **https://horus.xerzack.web.id** and sign in with `admin` / `admin`. Grafana makes
you set a new password immediately — use a strong one from your password manager.

Sign-ups and anonymous access are off, so this account is the only way in. If you ever
lock yourself out:

```bash
sudo grafana-cli admin reset-admin-password --homepath /usr/share/grafana <new-password>
```

Then open **Dashboards → Nihongo No Michinori**:

- **Site usage** — learners, sign-ups per day, lessons finished, which presets people
  pick, and which lessons they never finish.
- **Learner flows** — how far learners get (signed up → confirmed → planner → first
  lesson → five lessons), what they're doing right now, the email flow, and a box to paste
  a learner id into to follow one person end to end.
- **Logs & traffic** — requests and failures over time, response times, the app log, and
  every error the server wrote.
- **Server health** — CPU, memory, swap, disk, and memory per service.

Data appears as it happens: usage from all of history, logs from the moment Alloy started,
flows from the first deploy that includes the app's event logging, vitals from the minute
`host-stats.timer` was enabled.

---

## Using it day to day

The log search is in **Explore → Logs**. Useful queries:

| Question | Query |
|---|---|
| What did the app print? | `{unit=~"nihongo-no-michinori.*"}` |
| Any errors right now? | `{unit=~".+"} \|~ "(?i)(error\|fatal\|unhandled)"` |
| What broke for visitors? | `{job="nginx", stream="access"} \| json \| status >= 500` |
| Who is hammering the site? | `topk(10, sum by (ip) (count_over_time({job="nginx", stream="access"} \| json [1h])))` |
| Bot probes (the `/wp-admin` kind) | `{job="nginx", stream="access"} \| json \| status = 404` |
| Did the deploy restart cleanly? | `{unit=~"nihongo-no-michinori.*"} \|= "Ready"` |
| Database complaints | `{unit="postgresql@16-main.service"}` |

### One stream across deploys and restarts

Logs are never lost on a restart or a deploy — Loki keeps them for 30 days no matter what
the app does. What changes is the label. The app runs as `nihongo-no-michinori@3101` or
`@3102`, whichever slot is live, and a deploy switches to the other one, so anything keyed
to a single unit looks like it started from scratch.

Alloy therefore reports both slots under one `service_name`:

```
{service_name="nihongo-no-michinori"}
```

That's the query to use for "the app, all of it, whatever happened to it" — Grafana's Logs
Drilldown lists it once instead of once per slot. The `unit` label is still on every line
when you need to know which slot wrote it (`| unit="nihongo-no-michinori@3102.service"`),
and a deploy is visible as the handover between the two.

Lines shipped **before** this relabelling kept the label they had, so history from then is
under the old per-slot names. The dashboards query `unit=~"nihongo-no-michinori.*"`, which
matches both old and new lines, so they show the full history either way.

**Is the relabel live?** Ask Loki which service names it has seen in the last ten minutes:

```bash
curl -sS -G 'http://127.0.0.1:3110/loki/api/v1/label/service_name/values' --data-urlencode "start=$(date -d '10 minutes ago' +%s)000000000" --data-urlencode "end=$(date +%s)000000000"
```

Expect `nihongo-no-michinori` and no `@3101`/`@3102` names. If the old names are still
there for the last ten minutes, Alloy is running the old config — reinstall it and
restart (see the table above).

**Clearing the old names from the pickers.** Grafana's service list shows every value in
the selected time range, so old per-slot names keep appearing until the range no longer
covers them — at the latest when retention expires them. To drop them sooner, ask Loki to
delete those streams:

```bash
curl -sS -X POST -G 'http://127.0.0.1:3110/loki/api/v1/delete' --data-urlencode 'query={service_name=~"nihongo-no-michinori@.*"}' --data-urlencode "start=$(date -d '30 days ago' +%s)" --data-urlencode "end=$(date -d '5 minutes ago' +%s)"
```

The request is cancellable for 10 minutes (`delete_request_cancel_period`), then the
compactor applies it within the next compaction cycle. List or cancel pending requests:

```bash
curl -sS 'http://127.0.0.1:3110/loki/api/v1/delete'
```

That deletes the *log lines*, not just the label — the app's own history from before the
change goes with them. On a fresh install that's a fair trade for a clean picker; later
on, prefer just narrowing the time range.

### The app's own events

The app writes one JSON line per meaningful action (`src/lib/server/log.ts`). They're in
the journal alongside everything else, so the same search finds them:

| Question | Query |
|---|---|
| Everything one learner did | `{unit=~"nihongo-no-michinori.*"} \| json \| userId="<id>"` |
| Did their confirmation email go out? | `{unit=~"nihongo-no-michinori.*"} \| json \| evt=~"auth.email.*\|email.*"` |
| Planners started today | `{unit=~"nihongo-no-michinori.*"} \| json \| evt="planner.start"` |
| Lessons being finished | `{unit=~"nihongo-no-michinori.*"} \| json \| evt="progress.save" \| status="done"` |
| Slow planner rebuilds | `{unit=~"nihongo-no-michinori.*"} \|= "\"ms\":" \| json \| ms > 500` |

The events are `auth.signup`, `auth.signin`, `auth.email_requested`, `auth.email_failed`,
`email.sent`, `email.skipped`, `planner.start`, `planner.settings`,
`planner.lessons_added`, `planner.reorder`, `planner.task_added`,
`planner.entry_updated`, `planner.entry_removed`, `planner.shift`, `progress.save`,
`progress.import`, `progress.reset` and `practice.save`.

Each line carries the learner's `userId` — a random id, never an email or a name, but
enough to follow one person's activity. The **Site usage** dashboard stays aggregate-only;
these logs are the place where individual activity is visible, by design, so that a
learner reporting "I never got the email" can be answered. To stop that, hash the id in
`logEvent` — every caller goes through that one function.

### Product events from the browser

The server only sees what it's asked to save, which for a learning site is the least
interesting part: it never sees a question being answered, a set abandoned halfway, or
anything a guest does. `src/lib/telemetry.ts` fills that in — it batches small events and
posts them to `/api/events`, which logs them beside the server's own.

**Guests count.** A learner who never signs in is identified by `anonId`, a random id in
localStorage — not a cookie, never shared with anyone — and `sessionId` groups one sitting,
ending after 30 minutes of inactivity. When the learner is signed in, the server adds
`userId` **from the session**; a browser can't claim to be someone else.

| Event | Fired when | Carries |
|---|---|---|
| `app.opened` | first page of a visit | referring host only |
| `session.started` | first event of a new sitting | — |
| `page.viewed` | every route | `props.route`, with ids collapsed (`/lessons/{id}`) |
| `lesson.viewed` | a lesson page opens | feature, contentId, level |
| `lesson.started` | its progress turns "in progress" | same |
| `lesson.completed` | its progress turns "done" | same |
| `exercise.started` | the first answer in a set | setId, question count |
| `question.answered` | every graded answer | setId, kind, correct, position |
| `exercise.completed` | the last question of a set | setId, mode, correct, total |
| `practice.session_started` / `practice.session_completed` | a trainer run | trainer, answered, correct, best streak |
| `planner.viewed` / `planner.preset_chosen` | the planner start screen | presetId or `custom` |
| `signup.started` / `signin.started` | the auth form is submitted | method (email/google) |

Every event has the same shape, and the field names match the server's:

```json
{"evt":"question.answered","eventId":"…","at":"2026-09-16T10:37:35.478Z",
 "sessionId":"…","anonId":"…","userId":"…","feature":"grammar",
 "contentId":"n5-particles","level":"N5","requestId":"…",
 "props":{"setId":"particles:cloze","kind":"cloze","correct":true,"position":1}}
```

**What must never go in:** anything a learner typed. No answers, no notes, no titles, no
email addresses. `/api/events` enforces it — props values are capped at 120 characters,
nested objects are rejected, and unknown keys are dropped — but the rule matters more than
the validator: ids and numbers only.

The endpoint is open to guests, so it's rate limited to 3000 events a minute per server
process; beyond that events are dropped (and one `telemetry.throttled` line is logged)
rather than filling the disk.

In LogQL, `| json` flattens `props`, so the fields are `props_correct`, `props_setId`:

```
sum by (feature) (count_over_time({unit=~"nihongo-no-michinori.*"} |= "\"evt\":" | json | evt="question.answered" | props_correct="true" [1h]))
```

Set `NEXT_PUBLIC_TELEMETRY=off` to turn the browser side off completely (useful in
development); the server's own events are unaffected.

## Alerts

Three rules ship with this repo, all evaluated every minute:

| Rule | Watches | Fires when | Severity |
|---|---|---|---|
| **Site is failing (5xx)** | nginx access log | more than 5 server errors in 2 minutes | critical, immediately |
| **App is logging errors** | the app's journal | more than 5 error lines in 1 minute | critical, immediately |
| **Lots of rejected requests (4xx)** | nginx access log | more than 50 rejections in 2 minutes, sustained for 2 minutes | warning |

All three **stay quiet when there are no logs at all** — a quiet night is not an outage.

The two nginx rules catch what visitors saw; the app rule catches what threw inside the
app, which includes failures that never reach a visitor at all — a confirmation email that
couldn't be sent, or a database timeout in a background write. Between them, "the site is
broken" and "the site works but something is wrong" are separate alerts.

Two things about the app rule worth knowing: **one stack trace is several lines**, so a
single unhandled exception can reach the threshold on its own (usually what you want), and
it matches the word *error* anywhere in a line, so an event like `auth.email_failed`
counts too. The 4xx rule mostly catches bot probes for `/wp-admin` and friends;
`rules.yaml` has a comment showing how to ignore 404s and alert only on rejections of real
pages.

### Turn them on

Only the rules are provisioned. **Contact points and notification policies stay yours**,
managed in the Grafana UI — provisioning a policy would make the whole policy tree
read-only and hijack where alerts go, so this repo deliberately doesn't.

```bash
sudo mkdir -p /etc/grafana/provisioning/alerting && sudo install -m 644 $OBS/grafana/provisioning/alerting/rules.yaml /etc/grafana/provisioning/alerting/rules.yaml
```

```bash
sudo systemctl restart grafana-server && sudo journalctl -u grafana-server -n 30 --no-pager | grep -i -E 'alert|provision|error'
```

Expect no provisioning errors. Then in the UI:

- **Alerting → Alert rules** — all three listed under *Nihongo No Michinori → Site*, state **Normal**.
- **Alerting → Contact points** — all three rules are pinned to the contact point named
  **Argus Lumina Helper** (`notification_settings.receiver` in `rules.yaml`), so they skip
  the notification policy tree entirely. The name has to match exactly: rename that contact
  point in Grafana and delivery stops silently, so change it in `rules.yaml` at the same
  time. Press **Test** on the contact point to confirm it works on its own.

  To route by severity instead, delete the `notification_settings` block from a rule and
  let the policy tree handle it — the 5xx and app-error rules carry `severity=critical`,
  the 4xx rule `severity=warning`.

An email contact point also needs SMTP, which Grafana doesn't have by default. Add it to
the root-only env file if you use one (a Telegram, Discord or webhook contact point needs
none of this):

```bash
sudo tee -a /etc/grafana/db.env > /dev/null <<'EOF'
GF_SMTP_ENABLED=true
GF_SMTP_HOST=smtp.resend.com:465
GF_SMTP_USER=resend
GF_SMTP_PASSWORD=<your Resend API key>
GF_SMTP_FROM_ADDRESS=support@xerzack.web.id
GF_SMTP_FROM_NAME=Horus
EOF
```

### Prove it fires

```bash
for i in $(seq 1 60); do curl -s -o /dev/null https://nihongo-no-michinori.xerzack.web.id/definitely-not-a-page-$i; done
```

That's 60 404s in a few seconds. Within about three minutes the 4xx rule should go to
**Firing** and your contact point should get the notification. It returns to Normal on its
own once two minutes pass with no more hits.

The app-error rule can be tested the same way, by writing lines to the journal under a
unit name the rule's `unit=~"nihongo-no-michinori.*"` matches:

```bash
sudo systemd-run --unit=nihongo-no-michinori-alerttest /bin/sh -c 'for i in $(seq 1 8); do echo "Error: synthetic alert test $i"; done'
```

Eight fake error lines, gone from the journal when retention expires, and the transient
unit removes itself. Expect **Firing** within about two minutes, then Normal a minute
later. (There's no safe way to fake a real 5xx from outside, but it's the same rule shape
as the 4xx one.)

### Tuning

The thresholds assume a quiet site. Once you have real traffic, open **Logs & traffic**,
look at what a normal 2 minutes actually contains, and edit the numbers in
`rules.yaml` (the `params` under refId C), then reinstall and restart Grafana. Alerting at
a level you routinely cross is worse than no alert, because you'll learn to ignore it.

Editing a provisioned rule in the browser doesn't stick: the file wins on every restart.
Change `rules.yaml` in this repo, deploy, reinstall, restart.

## Picking up changes from this repo

When `observability/` changes, deploy first so `current/observability` is up to date, then
apply only the parts that changed:

```bash
bash /var/www/nihongo-no-michinori/deploy.sh && export OBS=/var/www/nihongo-no-michinori/current/observability
```

| Changed | Apply it with |
|---|---|
| Dashboards | `sudo install -o grafana -g grafana -m 644 $OBS/grafana/dashboards/*.json /var/lib/grafana/dashboards/` (picked up within a minute) |
| Views (`metrics-views.sql`) | `sudo -u postgres psql -d nihongo_no_michinori -v grafana_pw=<existing password> -f $OBS/sql/metrics-views.sql` |
| Alloy config | `sudo install -m 644 $OBS/alloy/config.alloy /etc/alloy/config.alloy && sudo systemctl restart alloy` |
| Loki config | `sudo install -m 644 $OBS/loki/config.yml /etc/loki/config.yml && sudo systemctl restart loki` |
| `host-stats.sh` | `sudo install -m 755 $OBS/bin/host-stats.sh /usr/local/bin/host-stats.sh` |
| Alert rules | `sudo install -m 644 $OBS/grafana/provisioning/alerting/rules.yaml /etc/grafana/provisioning/alerting/rules.yaml && sudo systemctl restart grafana-server` |
| App event logging | nothing — it ships with the deploy |

Re-running the SQL is safe: it replaces the views and leaves the role and its password
alone. The `grafana_pw` value only matters the first time; pass the existing one so the
`alter role` line is a no-op.

## Maintenance

```bash
du -sh /var/lib/loki
```

Check every few months. If it grows past a couple of GB, lower `retention_period` in
`/etc/loki/config.yml` and restart Loki.

```bash
systemd-cgtop -1 --order=memory | head -15
```

Shows what's actually using memory. The three services should sit near the "typical"
column above.

```bash
sudo apt update && sudo apt upgrade
```

Upgrades Grafana, Loki and Alloy with everything else. Dashboards and datasources are
re-provisioned from the files on every restart, so upgrades can't lose them.

**Changing a dashboard:** edit it in the UI to experiment; to keep the change, export it
(**Dashboard settings → JSON Model**), save it over the file in `observability/grafana/dashboards/`
in this repo, commit, and after the next deploy copy it to `/var/lib/grafana/dashboards/`.
Otherwise a Grafana restart brings back the file's version.

## If something's wrong

| Symptom | Check | Usual cause |
|---|---|---|
| A service ignores the config you installed | `systemctl show -p ExecStart --value <unit>` | It was never restarted (apt started it at install), or its unit reads a different file |
| Alerts never arrive | **Alerting → Contact points → Test** | The contact point named in `rules.yaml` was renamed or deleted, or (for email) the `GF_SMTP_*` lines are missing from `/etc/grafana/db.env` |
| Grafana rejects `notification_settings` | `sudo journalctl -u grafana-server \| grep -i provision` | Grafana older than 10.4 — drop that block and route with a notification policy instead |
| An alert fires all night | the **Logs & traffic** dashboard for that window | The threshold is below your normal traffic — raise it in `rules.yaml` |
| `install: invalid user 'loki'` | `getent passwd loki` | That build doesn't create the user — use the `User=` from `systemctl show -p User --value loki` (empty means root) |
| Grafana won't load | `sudo journalctl -u grafana-server -n 50` | Port 3001 taken, or a bad provisioning file |
| "Datasource not found" on a panel | `sudo journalctl -u grafana-server \| grep -i provision` | The datasource type name — try `type: postgres` in `michinori.yml` |
| Usage panels error, logs fine | `sudo -u postgres psql -d nihongo_no_michinori -c 'select 1 from metrics.totals'` | Views missing, or the password in `/etc/grafana/db.env` doesn't match the role |
| No logs at all | `sudo journalctl -u alloy -n 50` | Alloy not in `systemd-journal`/`adm` groups (re-run step 5, then restart alloy) |
| nginx logs missing, journal fine | `sudo tail /var/log/nginx/michinori.access.json.log` | The `access_log` line isn't in the 443 block, or nginx wasn't reloaded |
| Everything restarts constantly | `systemctl status loki grafana-server` | Hit `MemoryMax`; raise the cap in the drop-in, or lower Loki's retention |
| A deploy fails on memory | `free -h` | No swap, or these services plus the build don't fit — `sudo systemctl stop loki grafana-server`, deploy, start them again |

Deploys and these services are independent: `deploy.sh` never touches them, and restarting
them never touches the site.

## Removing it

```bash
sudo systemctl disable --now grafana-server loki alloy && sudo apt purge -y grafana loki alloy && sudo rm -rf /var/lib/loki /etc/nginx/sites-enabled/horus
```

Then drop the database role and views:

```bash
sudo -u postgres psql -d nihongo_no_michinori -c 'drop schema metrics cascade; drop role grafana_ro'
```
