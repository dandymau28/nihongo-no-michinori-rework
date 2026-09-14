# Deploying to a VPS (Node + PostgreSQL, behind nginx)

With accounts, the site is no longer a static export: it runs as a Node server
(`next start`) with PostgreSQL for users, plans and progress. nginx terminates TLS
and proxies to the app.

Target in this guide: `https://shinpuru-nihongo.xerzack.web.id`

---

## 1. VPS prerequisites

```bash
sudo apt update
sudo apt install -y git nginx postgresql

# Node 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v   # v20.x

# firewall
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

## 2. Database

```bash
sudo -u postgres psql <<'SQL'
CREATE USER shinpuru WITH PASSWORD 'choose-a-strong-password';
CREATE DATABASE shinpuru_nihongo OWNER shinpuru;
SQL
```

PostgreSQL only listens on localhost by default — keep it that way.

## 3. Get the code and configure

```bash
sudo mkdir -p /var/www/shinpuru-nihongo
sudo chown -R "$USER":"$USER" /var/www/shinpuru-nihongo
git clone <your-repo-url> /var/www/shinpuru-nihongo
cd /var/www/shinpuru-nihongo

cp .env.example .env
nano .env
```

Fill in:

| Variable | Value |
|----------|-------|
| `DATABASE_URL` | `postgresql://shinpuru:<password>@localhost:5432/shinpuru_nihongo?schema=public` |
| `BETTER_AUTH_SECRET` | output of `openssl rand -base64 32` |
| `BETTER_AUTH_URL` | `https://shinpuru-nihongo.xerzack.web.id` |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | see §7 (leave empty to hide Google sign-in) |

```bash
chmod 600 .env
npm ci                      # also runs `prisma generate`
npx prisma migrate deploy   # creates the tables
npm run build
```

## 4. Run it as a service

```bash
sudo nano /etc/systemd/system/shinpuru-nihongo.service
```

```ini
[Unit]
Description=Shinpuru Nihongo (Next.js)
After=network.target postgresql.service

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/shinpuru-nihongo
EnvironmentFile=/var/www/shinpuru-nihongo/.env
Environment=NODE_ENV=production PORT=3000 HOSTNAME=127.0.0.1
ExecStart=/usr/bin/npm run start
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

```bash
sudo chown -R www-data:www-data /var/www/shinpuru-nihongo   # or set User= to your deploy user
sudo systemctl daemon-reload
sudo systemctl enable --now shinpuru-nihongo
systemctl status shinpuru-nihongo
curl -I http://127.0.0.1:3000
```

## 5. nginx reverse proxy

```bash
sudo nano /etc/nginx/sites-available/shinpuru-nihongo
```

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name shinpuru-nihongo.xerzack.web.id;

    location /_next/static/ {
        proxy_pass http://127.0.0.1:3000;
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
}
```

```bash
sudo ln -s /etc/nginx/sites-available/shinpuru-nihongo /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

(DNS: an `A` record for `shinpuru-nihongo` → the VPS IP, as before.)

## 6. HTTPS

```bash
sudo certbot --nginx -d shinpuru-nihongo.xerzack.web.id
sudo certbot renew --dry-run
```

`BETTER_AUTH_URL` must be the final `https://` origin, or sign-in cookies and the
Google callback won't match.

## 7. Google sign-in (optional)

1. Google Cloud Console → **APIs & Services → Credentials → Create credentials →
   OAuth client ID** (type: *Web application*). Configure the OAuth consent screen
   first if prompted.
2. **Authorized JavaScript origins:** `https://shinpuru-nihongo.xerzack.web.id`
3. **Authorized redirect URIs:**
   `https://shinpuru-nihongo.xerzack.web.id/api/auth/callback/google`
   (add `http://localhost:3000/api/auth/callback/google` for local dev).
4. Put the client ID/secret in `.env` and `sudo systemctl restart shinpuru-nihongo`.

The "Continue with Google" button appears automatically once both values are set.

## 8. Password-reset email (optional)

Any SMTP account works; set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`,
`EMAIL_FROM` in `.env` and restart. Until then, "Forgot password?" is hidden and any
reset email is written to the service log instead
(`journalctl -u shinpuru-nihongo | grep -A8 '\[email\]'`).

| Provider | Host / port | User / pass | Notes |
|----------|-------------|-------------|-------|
| Gmail | `smtp.gmail.com` / `587` | your Gmail / a 16-char **app password** | needs 2-Step Verification; ~500 mails/day; sender shows as your Gmail |
| Brevo | `smtp-relay.brevo.com` / `587` | SMTP login / SMTP key from the dashboard | free 300 mails/day; verify a sender address or domain |
| Resend | `smtp.resend.com` / `465` | `resend` / API key | free 3,000/month; verify `xerzack.web.id` (DNS records) and send from e.g. `no-reply@xerzack.web.id` |

---

## Redeploying after a change

```bash
cd /var/www/shinpuru-nihongo
./deploy.sh          # git pull + npm ci + migrate + build + restart
```

## Backups

All learner data is in PostgreSQL now, so back it up:

```bash
# daily dump, e.g. from cron
pg_dump -U shinpuru -h localhost shinpuru_nihongo | gzip > /var/backups/shinpuru-$(date +%F).sql.gz
```

## Notes

- **Low-RAM VPS (≤1 GB):** `npm run build` can OOM — add swap
  (`sudo fallocate -l 2G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile`).
- Learners from the old static site can bring their progress over: on the old site,
  **Settings → Export progress**, then on the new site sign in and
  **Settings → Import progress**.
