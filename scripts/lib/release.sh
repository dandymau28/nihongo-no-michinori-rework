# Shared helpers for deploy.sh, rollback.sh, restart.sh and setup-zero-downtime.sh.
# Sourced, not run directly.
#
# Layout under APP_DIR:
#   releases/<YYYYmmdd-HHMMSS>-<commit>/  one full build per deploy
#   shared/.env                           environment for every release
#   shared/static/                        /_next/static files from recent releases (served by nginx)
#   shared/upstream.conf                  "server 127.0.0.1:<port>;" — the live port, included by nginx
#   shared/repo-url                       where releases are cloned from
#   slots/<port> -> ../releases/<id>      what each systemd instance runs
#   current -> releases/<id>              the live release

APP_DIR="${APP_DIR:-/var/www/nihongo-no-michinori}"
SERVICE="nihongo-no-michinori"
PORTS=(3101 3102)
KEEP_RELEASES="${KEEP_RELEASES:-3}"
HEALTH_TIMEOUT="${HEALTH_TIMEOUT:-90}"
DRAIN_SECONDS="${DRAIN_SECONDS:-30}"

log()  { printf '\n\033[1m→ %s\033[0m\n' "$*"; }
ok()   { printf '\033[32m✓\033[0m %s\n' "$*"; }
warn() { printf '\033[33m!\033[0m %s\n' "$*"; }
fail() { printf '\n\033[31m✗ %s\033[0m\n' "$*" >&2; exit 1; }

require_layout() {
  [[ -f "$APP_DIR/shared/.env" && -f "$APP_DIR/shared/upstream.conf" && -f "$APP_DIR/shared/repo-url" ]] \
    || fail "The zero-downtime layout isn't set up yet. See docs/deploy.md → \"Deploying updates without downtime\"."
}

# Only one deploy / rollback / restart at a time.
take_lock() {
  exec 9>"$APP_DIR/shared/.deploy.lock"
  flock -n 9 || fail "Another deploy, rollback or restart is already running."
}

live_port() {
  grep -oE '127\.0\.0\.1:[0-9]+' "$APP_DIR/shared/upstream.conf" | head -1 | cut -d: -f2
}

idle_port() {
  if [[ "$(live_port)" == "${PORTS[0]}" ]]; then echo "${PORTS[1]}"; else echo "${PORTS[0]}"; fi
}

# 3101/3102 are template instances; anything else is the old single service.
unit_for_port() {
  if [[ "$1" == "${PORTS[0]}" || "$1" == "${PORTS[1]}" ]]; then
    echo "$SERVICE@$1.service"
  else
    echo "$SERVICE.service"
  fi
}

current_release() {
  if [[ -L "$APP_DIR/current" ]]; then basename "$(readlink -f "$APP_DIR/current")"; fi
  return 0 # empty output (not a failure) when nothing is live yet — callers run under set -e
}

release_commit() { cat "$APP_DIR/releases/$1/.release-id"; }

# Make this release's JS/CSS available to nginx. Files from older releases stay,
# so tabs opened before the switch can still load theirs.
publish_static() {
  mkdir -p "$APP_DIR/shared/static"
  cp -R "$APP_DIR/releases/$1/.next/static/." "$APP_DIR/shared/static/"
}

# Start release $1 on port $2 and wait until /api/health reports that release.
start_release() {
  local release="$1" port="$2" unit expected deadline body path
  unit="$(unit_for_port "$port")"
  expected="$(release_commit "$release")"

  mkdir -p "$APP_DIR/slots"
  ln -sfn "../releases/$release" "$APP_DIR/slots/$port"

  log "Starting $release on 127.0.0.1:$port"
  sudo systemctl restart "$unit"

  deadline=$((SECONDS + HEALTH_TIMEOUT))
  while true; do
    body="$(curl -fsS --max-time 5 "http://127.0.0.1:$port/api/health" 2>/dev/null || true)"
    if [[ "$body" == *'"status":"ok"'* && "$body" == *"\"release\":\"$expected\""* ]]; then
      ok "Healthy on :$port — $body"
      break
    fi
    if (( SECONDS >= deadline )); then
      sudo journalctl -u "$unit" -n 40 --no-pager || true
      sudo systemctl stop "$unit" || true
      fail "The new release didn't pass its health check on :$port within ${HEALTH_TIMEOUT}s. The live site was not touched."
    fi
    sleep 2
  done

  # Warm up the busiest pages before real visitors arrive.
  for path in / /planner /login; do
    curl -fsS -o /dev/null --max-time 30 "http://127.0.0.1:$port$path" || true
  done
}

# Point nginx at port $1. A reload is graceful: open connections finish on the old release.
switch_traffic() {
  local port="$1" previous
  previous="$(live_port)"
  printf 'server 127.0.0.1:%s;\n' "$port" > "$APP_DIR/shared/upstream.conf.tmp"
  mv "$APP_DIR/shared/upstream.conf.tmp" "$APP_DIR/shared/upstream.conf"
  if ! sudo nginx -t >/dev/null 2>&1; then
    printf 'server 127.0.0.1:%s;\n' "$previous" > "$APP_DIR/shared/upstream.conf"
    sudo nginx -t || true
    sudo systemctl stop "$(unit_for_port "$port")" || true
    fail "nginx rejected the change, so traffic stays on :$previous."
  fi
  sudo systemctl reload nginx
  ok "nginx now sends traffic to :$port"
}

# Stop whatever runs on port $1, after in-flight requests have had time to finish.
retire_port() {
  local port="$1" unit
  [[ -n "$port" ]] || return 0
  unit="$(unit_for_port "$port")"
  log "Letting requests on :$port finish (${DRAIN_SECONDS}s), then stopping $unit"
  sleep "$DRAIN_SECONDS"
  sudo systemctl disable --now "$unit" >/dev/null 2>&1 || sudo systemctl stop "$unit" || true
  ok "Stopped $unit"
}

# Start release $1 on the idle port, move traffic to it, stop the old port.
go_live() {
  local release="$1" old new
  old="$(live_port)"
  new="$(idle_port)"
  start_release "$release" "$new"
  switch_traffic "$new"
  sudo systemctl enable "$(unit_for_port "$new")" >/dev/null 2>&1 || true
  ln -sfn "releases/$release" "$APP_DIR/current"
  retire_port "$old"
}

# Keep the newest KEEP_RELEASES releases plus anything live or in a slot.
prune_releases() {
  local keep=() slot release count=0
  [[ -L "$APP_DIR/current" ]] && keep+=("$(current_release)")
  for slot in "$APP_DIR"/slots/*; do
    [[ -L "$slot" ]] && keep+=("$(basename "$(readlink "$slot")")")
  done
  while IFS= read -r release; do
    count=$((count + 1))
    (( count <= KEEP_RELEASES )) && continue
    [[ " ${keep[*]} " == *" $release "* ]] && continue
    rm -rf -- "$APP_DIR/releases/$release"
    ok "Removed old release $release"
  done < <(ls -1 "$APP_DIR/releases" | sort -r)
  # Static files not re-published by any deploy for two weeks are no longer needed.
  find "$APP_DIR/shared/static" -type f -mtime +14 -delete 2>/dev/null || true
}
