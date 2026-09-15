#!/usr/bin/env bash
# Zero-downtime deploy of Nihongo No Michinori.
#
# Builds the latest commit in a new release folder while the live site keeps serving,
# runs database migrations, starts the release on the idle port, checks /api/health,
# switches nginx over, then stops the old release.
#
#   bash /var/www/nihongo-no-michinori/deploy.sh          deploy origin/main
#   BRANCH=my-branch bash …/deploy.sh                     deploy another branch
#   FORCE=1 bash …/deploy.sh                              rebuild even if that commit is already live
set -euo pipefail
source "$(dirname "$(readlink -f "$0")")/lib/release.sh"

BRANCH="${BRANCH:-main}"
release=""

require_layout
take_lock
cd "$APP_DIR"

# If anything fails before the new release is live, remove its folder.
cleanup() {
  local code=$?
  rm -rf -- "$APP_DIR/releases/.incoming-$$"
  if (( code != 0 )) && [[ -n "$release" && "$(current_release)" != "$release" ]]; then
    rm -rf -- "$APP_DIR/releases/$release"
    printf 'Removed the unfinished release %s. The live site was not changed.\n' "$release" >&2
  fi
}
trap cleanup EXIT

repo_url="$(cat shared/repo-url)"
log "Fetching $BRANCH from $repo_url"
mkdir -p releases
git clone --quiet --depth 1 --branch "$BRANCH" "$repo_url" "releases/.incoming-$$"
commit="$(git -C "releases/.incoming-$$" rev-parse --short=12 HEAD)"

if [[ -z "${FORCE:-}" && "$(current_release)" == *"-$commit" ]]; then
  ok "Commit $commit is already live ($(current_release)). Nothing to do — use FORCE=1 to rebuild."
  exit 0
fi

release="$(date +%Y%m%d-%H%M%S)-$commit"
mv "releases/.incoming-$$" "releases/$release"
ok "Release $release"

cd "releases/$release"
printf '%s\n' "$commit" > .release-id
ln -s ../../shared/.env .env

log "Installing dependencies"
npm ci --no-audit --no-fund

log "Building — the live site keeps running"
npm run build

log "Applying database migrations"
npx prisma migrate deploy

cd "$APP_DIR"
publish_static "$release"
go_live "$release"
prune_releases

log "Done"
ok "Live: $release on :$(live_port)"
