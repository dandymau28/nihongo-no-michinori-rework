# Deploying Nihongo No Michinori

Step-by-step for the production VPS: Ubuntu with nginx 1.24 and Certbot (already serving
the old Shinpuru Nihongo site, which stays untouched), DNS at CloudHost.

| | |
|---|---|
| Site | `https://nihongo-no-michinori.xerzack.web.id` |
| Server | `43.133.34.206` · Ubuntu · nginx 1.24 |
| App folder | `/var/www/nihongo-no-michinori` (owned by your SSH user) |
| Service | `nihongo-no-michinori` (systemd), listening on `127.0.0.1:3100` |
| Database | `nihongo_no_michinori`, user `michinori` (PostgreSQL, localhost only) |

Run every command as your normal SSH user (with sudo), not as root.

---

## 1. Confirm the subdomain points at the VPS

```bash
dig +short nihongo-no-michinori.xerzack.web.id
```

Expect `43.133.34.206`. If it prints nothing, add an **A** record `nihongo-no-michinori` →
`43.133.34.206` in CloudHost DNS and wait a few minutes.

## 2. Firewall: allow 22, 80 and 443

In the VPS panel's **Firewall** tab make sure these **Inbound / TCP / Allow / 0.0.0.0/0**
rules exist: **22** (SSH), **80** (HTTP — Certbot and the HTTPS redirect), **443** (HTTPS).
Do **not** open 3100 or 5432 — the app and database stay private behind nginx.

## 3. Install PostgreSQL and check Node

```bash
sudo apt update && sudo apt install -y git postgresql
```

```bash
node -v
```

Expect **v20.19.0 or newer** (Prisma 7 refuses older). If it's older or missing:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt install -y nodejs
```

The build needs roughly 1 GB of free memory. If `free -h` shows less than 1 GB available,
add swap:

```bash
sudo fallocate -l 2G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile && echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

## 4. Create the database

Generate a password (hex, so it's safe inside a URL) and keep it for step 6:

```bash
openssl rand -hex 24
```

```bash
sudo -u postgres psql -c "CREATE USER michinori WITH PASSWORD 'PASTE_DB_PASSWORD';" -c "CREATE DATABASE nihongo_no_michinori OWNER michinori;"
```

Expect `CREATE ROLE` and `CREATE DATABASE`.

## 5. Get the code

```bash
sudo mkdir -p /var/www/nihongo-no-michinori && sudo chown "$USER":"$USER" /var/www/nihongo-no-michinori
```

```bash
git clone https://github.com/dandymau28/nihongo-no-michinori-rework.git /var/www/nihongo-no-michinori && cd /var/www/nihongo-no-michinori
```

If the repository is private, GitHub asks for your username and a **personal access token**
(not your password).

## 6. Write the `.env` file

Generate the auth secret:

```bash
openssl rand -base64 32
```

Create the file, then replace the two `PASTE_…` values with `nano .env`:

```bash
cat > .env <<'EOF'
DATABASE_URL="postgresql://michinori:PASTE_DB_PASSWORD@localhost:5432/nihongo_no_michinori?schema=public"
BETTER_AUTH_SECRET="PASTE_AUTH_SECRET"
BETTER_AUTH_URL="https://nihongo-no-michinori.xerzack.web.id"
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
SMTP_HOST=""
SMTP_PORT="465"
SMTP_USER=""
SMTP_PASS=""
EMAIL_FROM="Nihongo No Michinori <support@xerzack.web.id>"
EMAIL_REPLY_TO=""
EOF
chmod 600 .env
```

## 7. Install, migrate, build

```bash
npm ci
```

```bash
npx prisma migrate deploy
```

```bash
npm run build
```

Expect `All migrations have been successfully applied` (2 migrations) and a route table at the
end of the build. Don't `export NODE_ENV=production` in your shell before `npm ci` — Prisma and
the build tools are dev dependencies.

## 8. Run it as a service

Check nothing else uses port 3100 (no output = free; otherwise pick another port and use it
here and in step 9):

```bash
ss -ltn | grep ':3100 '
```

Create the unit. The heredoc is unquoted on purpose: `$USER` and the Node path are filled in
for you.

```bash
sudo tee /etc/systemd/system/nihongo-no-michinori.service > /dev/null <<EOF
[Unit]
Description=Nihongo No Michinori
After=network.target postgresql.service

[Service]
Type=simple
User=$USER
WorkingDirectory=/var/www/nihongo-no-michinori
EnvironmentFile=/var/www/nihongo-no-michinori/.env
Environment=NODE_ENV=production
ExecStart=$(command -v node) node_modules/next/dist/bin/next start -p 3100 -H 127.0.0.1
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF
```

```bash
sudo systemctl daemon-reload && sudo systemctl enable --now nihongo-no-michinori
```

```bash
curl -s http://127.0.0.1:3100/api/auth/get-session
```

Expect `null` (no one is signed in — the app and database are talking).

## 9. Put nginx in front

```bash
sudo tee /etc/nginx/sites-available/nihongo-no-michinori > /dev/null <<'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name nihongo-no-michinori.xerzack.web.id;

    location / {
        proxy_pass http://127.0.0.1:3100;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF
```

```bash
sudo ln -s /etc/nginx/sites-available/nihongo-no-michinori /etc/nginx/sites-enabled/ && sudo nginx -t && sudo systemctl reload nginx
```

Expect `syntax is ok` and `test is successful`.

## 10. Turn on HTTPS

```bash
sudo certbot --nginx -d nihongo-no-michinori.xerzack.web.id --redirect
```

```bash
curl -sI https://nihongo-no-michinori.xerzack.web.id | head -1
```

Expect `HTTP/1.1 200 OK`. The Certbot renewal timer you already have covers the new certificate.

## 11. Password-reset email with Resend (optional)

Without it the site still works: "Forgot password?" stays hidden and new accounts don't
need to confirm their email. Once email is on, new sign-ups must confirm their address
before they can sign in, and existing unconfirmed accounts get a confirmation link the
next time they try to sign in. Google accounts count as confirmed.

1. resend.com → **Domains → Add Domain** `xerzack.web.id` (region Tokyo).
2. Add the records Resend shows in CloudHost DNS: TXT `resend._domainkey`, MX `send`,
   TXT `send`, optionally TXT `_dmarc` `v=DMARC1; p=none;`. Click **Verify**.
3. **API Keys → Create** with *Sending access* for `xerzack.web.id`.
4. Check the VPS can reach Resend: `nc -vz -w 10 smtp.resend.com 465` (if it times out, allow
   outbound TCP 465 in the firewall panel, or use port 2587).
5. In `.env`: `SMTP_HOST="smtp.resend.com"`, `SMTP_PORT="465"`, `SMTP_USER="resend"`,
   `SMTP_PASS="re_…"`. Send from a real-looking address on your verified domain, e.g.
   `EMAIL_FROM="Nihongo No Michinori <support@xerzack.web.id>"` — `no-reply@` addresses tend
   to be treated more harshly by spam filters — and set `EMAIL_REPLY_TO` to an inbox you
   read (your domain has no mailbox, so replies to `support@` would bounce). Then:

```bash
sudo systemctl restart nihongo-no-michinori
```

## 12. Google sign-in (optional)

1. Google Cloud Console → **APIs & Services → Credentials → Create credentials → OAuth client
   ID** → *Web application* (set up the consent screen first if asked).
2. Authorized JavaScript origin: `https://nihongo-no-michinori.xerzack.web.id`
3. Authorized redirect URI: `https://nihongo-no-michinori.xerzack.web.id/api/auth/callback/google`
4. Put the ID and secret in `.env` (`GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`) and restart the
   service. The "Continue with Google" button appears on its own.

## 13. Try it as a learner

Open the site, **Create account**, set up a plan, do an exercise on Day 1, reload — the score
should still be there. Sign out and back in. If email is set up, try **Forgot password?**.

## 14. Nightly database backups

```bash
sudo mkdir -p /var/backups/nihongo-no-michinori
```

```bash
echo '0 3 * * * root runuser -u postgres -- pg_dump nihongo_no_michinori | gzip > /var/backups/nihongo-no-michinori/db-$(date +\%F).sql.gz && find /var/backups/nihongo-no-michinori -name "*.sql.gz" -mtime +14 -delete' | sudo tee /etc/cron.d/nihongo-no-michinori-backup
```

Dumps run at 03:00 and are kept for 14 days. Restore one with
`gunzip -c FILE.sql.gz | sudo -u postgres psql nihongo_no_michinori`.

---

## Deploying updates without downtime

Each deploy builds the new version in its own folder while the live site keeps serving,
applies migrations, starts the new version on a second port, checks `/api/health`, switches
nginx over, and only then stops the old version (after letting its requests finish).
Visitors never get an error page, tabs opened before the deploy reload into the new version,
and nobody is signed out.

```
/var/www/nihongo-no-michinori/
  releases/<date>-<commit>/   one full build per deploy (the last 3 are kept)
  shared/.env                 the environment for every release — edit this one
  shared/static/              JS/CSS from recent releases, served by nginx
  shared/upstream.conf        which port is live
  slots/3101, slots/3102      which release each app instance runs
  current                     the live release
```

### One-time switch from the single-service setup

Do this once, as your SSH user. The site stays up throughout.

```bash
cd /var/www/nihongo-no-michinori && git pull && bash scripts/setup-zero-downtime.sh
```

This copies `.env` to `shared/.env`, installs the `nihongo-no-michinori@.service` template and
points the nginx site at an upstream (the original file is backed up in `/etc/nginx/`).

```bash
bash /var/www/nihongo-no-michinori/deploy.sh
```

The first deploy starts the new layout on port 3101, moves traffic to it and stops the old
`nihongo-no-michinori` service. When it has finished, remove the old checkout files:

```bash
bash /var/www/nihongo-no-michinori/current/scripts/setup-zero-downtime.sh --cleanup-legacy
```

After the switch, wherever the steps above say to edit `.env` or restart the service, edit
`/var/www/nihongo-no-michinori/shared/.env` and run `restart.sh` instead.

### Everyday commands

| Command | What it does |
|---|---|
| `bash /var/www/nihongo-no-michinori/deploy.sh` | Deploy the latest `main` — a few minutes, no downtime |
| `bash /var/www/nihongo-no-michinori/rollback.sh` | Put the previous release back — about a minute, no rebuild |
| `bash /var/www/nihongo-no-michinori/restart.sh` | Restart without downtime, e.g. after editing `shared/.env` |
| `curl -s https://nihongo-no-michinori.xerzack.web.id/api/health` | Which release is live, and whether it reaches the database |
| `sudo journalctl -u 'nihongo-no-michinori@*' -f` | Follow the app logs |

If a new release fails its health check, the script prints its logs, stops it and exits —
the live site is never touched. Only one deploy, rollback or restart can run at a time.

### The database rule

For about 30 seconds per deploy the old and new versions share the database, so every
migration must still work with the previous release:

- **Fine in one deploy:** new tables, new nullable columns or columns with a default, new indexes.
- **Split across two deploys:** renaming or dropping a column, making a column required,
  changing a column's type. The first deploy adds the new column and writes to both; the
  second switches the code over and removes the old one.

Rollbacks don't undo migrations, so following this rule is also what keeps rollbacks safe.

## Troubleshooting

| What you see | Look at | Fix |
|---|---|---|
| **502 Bad Gateway** | `sudo journalctl -u 'nihongo-no-michinori@*' -n 50` (before the switch: `-u nihongo-no-michinori`) | The app isn't running, or nginx points at a port nothing listens on — compare `shared/upstream.conf` with `systemctl list-units 'nihongo-no-michinori@*'` |
| deploy.sh says the release **didn't pass its health check** | The log lines it printed | Fix the error and deploy again — the live site kept running |
| deploy.sh says **another deploy is already running** | `ps aux \| grep deploy.sh` | Wait for it to finish; the lock frees itself when that script exits |
| `P1000: Authentication failed` | `DATABASE_URL` in `.env` | Password doesn't match: `sudo -u postgres psql -c "ALTER USER michinori WITH PASSWORD '…';"` |
| Prisma says it needs Node 20.19 | `node -v` | Upgrade Node (step 3), then `npm ci` again |
| Signed in but bounced back out, or Google returns to `localhost` | `BETTER_AUTH_URL` | Must be exactly `https://nihongo-no-michinori.xerzack.web.id`; restart |
| `EACCES` during `npm ci` or `deploy.sh` | folder owner | `sudo chown -R "$USER":"$USER" /var/www/nihongo-no-michinori` |
| No reset email | `sudo journalctl -u nihongo-no-michinori \| grep -A3 '\[email\]'` | See step 11 |

## Moving learners from the old site

The Shinpuru Nihongo site keeps running. Learners export their progress there
(**Settings → Export progress**) and import it here after signing in
(**Settings → Import progress**).
