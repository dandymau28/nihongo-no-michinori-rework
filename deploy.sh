#!/usr/bin/env bash
# Zero-downtime deploy — the real script is scripts/deploy.sh (see docs/deploy.md).
exec bash "$(dirname "$(readlink -f "$0")")/scripts/deploy.sh" "$@"
