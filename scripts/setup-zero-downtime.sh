#!/usr/bin/env bash
# One-time switch from the single-service setup (docs/deploy.md steps 1–10) to zero-downtime
# releases. Safe to run again. The live site keeps running the whole time.
#
#   1. cd /var/www/nihongo-no-michinori && git pull && bash scripts/setup-zero-downtime.sh
#   2. bash /var/www/nihongo-no-michinori/deploy.sh
#        first zero-downtime deploy: starts the release on :3101, moves traffic, stops the old service
#   3. bash /var/www/nihongo-no-michinori/current/scripts/setup-zero-downtime.sh --cleanup-legacy
#        removes the old checkout files and leaves deploy.sh / rollback.sh / restart.sh shortcuts
set -euo pipefail
SCRIPT_DIR="$(dirname "$(readlink -f "$0")")"
source "$SCRIPT_DIR/lib/release.sh"
REPO_DIR="$(dirname "$SCRIPT_DIR")"
SITE="/etc/nginx/sites-available/$SERVICE"

[[ "$(id -u)" != 0 ]] || fail "Run this as your normal SSH user (with sudo), not as root."
for cmd in git node npm curl nginx flock sudo awk; do
  command -v "$cmd" >/dev/null || fail "Missing command: $cmd"
done
node -e 'const [a,b]=process.versions.node.split(".").map(Number);process.exit(a>20||(a===20&&b>=19)?0:1)' \
  || fail "Node.js 20.19 or newer is required (found $(node -v))."
sudo -v

# ---------------------------------------------------------------------------
# Step 3: remove the old single-service files
# ---------------------------------------------------------------------------
if [[ "${1:-}" == "--cleanup-legacy" ]]; then
  cd "$APP_DIR"
  [[ "$REPO_DIR" != "$APP_DIR" ]] \
    || fail "Run the cleanup from the live release: bash $APP_DIR/current/scripts/setup-zero-downtime.sh --cleanup-legacy"
  [[ -L current ]] || fail "No zero-downtime release is live yet. Run deploy.sh first."
  if systemctl is-active --quiet "$SERVICE.service"; then
    fail "The old $SERVICE service is still running. Run deploy.sh first."
  fi

  mapfile -t legacy < <(find "$APP_DIR" -mindepth 1 -maxdepth 1 \
    ! -name releases ! -name shared ! -name slots ! -name current -printf '%f\n' | sort)
  if (( ${#legacy[@]} )); then
    printf 'These old single-service files in %s will be deleted:\n' "$APP_DIR"
    printf '  %s\n' "${legacy[@]}"
    read -r -p "Delete them? [y/N] " answer
    [[ "$answer" == [yY] ]] || fail "Nothing was deleted."
    for name in "${legacy[@]}"; do rm -rf -- "${APP_DIR:?}/$name"; done
    ok "Deleted the old checkout"
  fi

  for script in deploy rollback restart; do
    ln -sfn "current/scripts/$script.sh" "$APP_DIR/$script.sh"
  done
  ok "Shortcuts: $APP_DIR/deploy.sh, rollback.sh, restart.sh"

  if [[ -f "/etc/systemd/system/$SERVICE.service" ]]; then
    sudo rm -f "/etc/systemd/system/$SERVICE.service"
    sudo systemctl daemon-reload
    ok "Removed the old $SERVICE.service unit"
  fi
  ok "Cleanup finished."
  exit 0
fi

# ---------------------------------------------------------------------------
# Step 1: prepare the layout
# ---------------------------------------------------------------------------
cd "$APP_DIR"

log "Folders"
mkdir -p releases shared/static slots
ok "releases/, shared/, slots/ in $APP_DIR"

log "Environment file"
if [[ -f shared/.env ]]; then
  ok "shared/.env already exists (left unchanged)"
elif [[ -f .env ]]; then
  cp .env shared/.env
  chmod 600 shared/.env
  ok "Copied .env → shared/.env. Edit shared/.env from now on."
else
  fail "No .env in $APP_DIR. Create shared/.env first (docs/deploy.md step 6)."
fi

log "Repository"
[[ -f shared/repo-url ]] || git -C "$REPO_DIR" remote get-url origin > shared/repo-url
ok "Releases will be cloned from $(cat shared/repo-url)"

log "systemd template"
node_bin="$(command -v node)"
sed -e "s|__USER__|$(id -un)|g" -e "s|__NODE__|$node_bin|g" -e "s|__APP_DIR__|$APP_DIR|g" \
  "$REPO_DIR/deploy/$SERVICE@.service" | sudo tee "/etc/systemd/system/$SERVICE@.service" >/dev/null
sudo systemctl daemon-reload
ok "Installed $SERVICE@.service (runs as $(id -un) with $node_bin)"

log "Static files"
if [[ -d .next/static ]]; then
  cp -R .next/static/. shared/static/
  ok "Copied the running site's .next/static → shared/static"
fi
sudo -u www-data test -r "$APP_DIR/shared/static" -a -x "$APP_DIR/shared/static" \
  || fail "nginx (www-data) can't read $APP_DIR/shared/static. Allow it with: chmod o+rx on that folder and o+x on each parent."

log "Live port"
if [[ ! -f shared/upstream.conf ]]; then
  current_port="$(grep -oE 'proxy_pass http://127\.0\.0\.1:[0-9]+' "$SITE" 2>/dev/null | head -1 | grep -oE '[0-9]+$' || true)"
  printf 'server 127.0.0.1:%s;\n' "${current_port:-3100}" > shared/upstream.conf
fi
ok "shared/upstream.conf → $(cat shared/upstream.conf)"

log "nginx site"
[[ -f "$SITE" ]] || fail "$SITE not found. Finish docs/deploy.md steps 9–10 first."
if grep -q "upstream nihongo_no_michinori" "$SITE"; then
  ok "Already set up (left unchanged)"
else
  backup="/etc/nginx/$SERVICE.conf.bak-$(date +%Y%m%d%H%M%S)"
  sudo cp "$SITE" "$backup"
  tmp="$(mktemp)"
  UPSTREAM_BLOCK="# The live port lives in $APP_DIR/shared/upstream.conf — rewritten by deploy.sh.
upstream nihongo_no_michinori {
    include $APP_DIR/shared/upstream.conf;
}

" STATIC_BLOCK="# JS/CSS from recent releases, so tabs opened before a deploy still load.
location /_next/static/ {
    alias $APP_DIR/shared/static/;
    expires 1y;
    add_header Cache-Control \"public, immutable\";
    access_log off;
}
" awk '
    BEGIN {
      n = split(ENVIRON["STATIC_BLOCK"], block, "\n")
      printf "%s", ENVIRON["UPSTREAM_BLOCK"]
    }
    /^[[:space:]]*location[[:space:]]+\/_next\/static\// { skip_static = 1 }
    /^[[:space:]]*location[[:space:]]+\/[[:space:]]*\{/ && !skip_static {
      match($0, /^[[:space:]]*/)
      indent = substr($0, 1, RLENGTH)
      for (i = 1; i <= n; i++) print (block[i] == "" ? "" : indent block[i])
    }
    {
      gsub(/proxy_pass[[:space:]]+http:\/\/127\.0\.0\.1:[0-9]+;/, "proxy_pass http://nihongo_no_michinori;")
      print
    }
  ' "$SITE" > "$tmp"
  sudo cp "$tmp" "$SITE"
  rm -f "$tmp"
  if sudo nginx -t; then
    sudo systemctl reload nginx
    ok "nginx proxies through the upstream and serves /_next/static from shared/static (backup: $backup)"
  else
    sudo cp "$backup" "$SITE"
    fail "nginx rejected the change, so the original was restored from $backup. Nothing else changed."
  fi
fi

log "Ready"
ok "Next: bash $APP_DIR/deploy.sh"
