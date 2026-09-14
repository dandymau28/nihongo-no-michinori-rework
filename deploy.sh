#!/usr/bin/env bash
# Pull the latest code, apply database migrations, rebuild, and restart the app.
set -euo pipefail
cd "$(dirname "$0")"

echo "→ git pull"
git pull --ff-only

echo "→ npm ci"
npm ci

echo "→ prisma migrate deploy"
npx prisma migrate deploy

echo "→ npm run build"
npm run build

echo "→ restart service"
sudo systemctl restart nihongo-no-michinori

echo "✓ deployed $(git rev-parse --short HEAD) at $(date '+%Y-%m-%d %H:%M:%S')"
