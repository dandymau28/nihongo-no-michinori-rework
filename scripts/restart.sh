#!/usr/bin/env bash
# Restart the live release with no downtime — for example after editing shared/.env.
# It starts the same release on the other port, checks it, switches nginx, and stops the old one.
#
#   bash /var/www/nihongo-no-michinori/restart.sh
set -euo pipefail
source "$(dirname "$(readlink -f "$0")")/lib/release.sh"

require_layout
take_lock
cd "$APP_DIR"

release="$(current_release)"
[[ -n "$release" ]] || fail "No release is live yet — run deploy.sh first."

log "Restarting $release"
go_live "$release"
ok "Live: $release on :$(live_port), using the current shared/.env"
