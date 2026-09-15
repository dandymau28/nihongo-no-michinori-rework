#!/usr/bin/env bash
# Put an earlier release back live with no downtime and no rebuild.
#
#   bash /var/www/nihongo-no-michinori/rollback.sh                          the release before the live one
#   bash …/rollback.sh 20260915-080000-9d09293a1b2c                         a specific one (ls …/releases)
#
# Database migrations are NOT undone. Only roll back to a release that works with the
# current database — which the "one-deploy-safe migrations" rule in docs/deploy.md ensures.
set -euo pipefail
source "$(dirname "$(readlink -f "$0")")/lib/release.sh"

require_layout
take_lock
cd "$APP_DIR"

live="$(current_release)"
target="${1:-}"
if [[ -z "$target" ]]; then
  # Folder names start with a timestamp, so the previous release sorts just before the live one.
  target="$(ls -1 releases | sort | awk -v live="$live" '$0 < live' | tail -1)"
  [[ -n "$target" ]] || fail "There's no release older than $live to roll back to."
fi
[[ -d "releases/$target" ]] || fail "Release not found: $target. Available: $(ls -1 releases | tr '\n' ' ')"
[[ "$target" != "$live" ]] || fail "$target is already live."

log "Rolling back: $live → $target"
warn "Database migrations are not undone."
publish_static "$target"
go_live "$target"
ok "Live: $target on :$(live_port)"
