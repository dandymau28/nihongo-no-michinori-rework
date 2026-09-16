#!/bin/sh
# One JSON line of host vitals, printed to stdout. host-stats.timer runs it every minute,
# systemd puts the line in the journal, Alloy ships it to Loki, and the "Server health"
# dashboard graphs the numbers with LogQL `unwrap`.
#
# This is deliberately not Prometheus: a 1.9 GB VPS has better uses for 150 MB of RAM than
# a metrics database. The trade-off is one sample a minute, kept as long as the logs are.
set -eu

# --- CPU: two samples of /proc/stat, one second apart ------------------------
cpu_sample() {
    awk '/^cpu /{ idle = $5 + $6; total = 0; for (i = 2; i <= NF; i++) total += $i; print idle, total }' /proc/stat
}
set -- $(cpu_sample)
idle1=$1 total1=$2
sleep 1
set -- $(cpu_sample)
idle2=$1 total2=$2
cpu_pct=$(awk -v i1="$idle1" -v t1="$total1" -v i2="$idle2" -v t2="$total2" \
    'BEGIN { dt = t2 - t1; di = i2 - i1; printf "%.1f", (dt > 0) ? 100 * (dt - di) / dt : 0 }')

# --- Memory and swap ---------------------------------------------------------
eval "$(awk '
    /^MemTotal:/     { total = $2 }
    /^MemAvailable:/ { avail = $2 }
    /^SwapTotal:/    { swap_total = $2 }
    /^SwapFree:/     { swap_free = $2 }
    END {
      printf "mem_total_mb=%d mem_used_mb=%d mem_used_pct=%.1f swap_used_mb=%d\n",
        total / 1024, (total - avail) / 1024,
        (total > 0) ? 100 * (total - avail) / total : 0,
        (swap_total - swap_free) / 1024
    }' /proc/meminfo)"

# --- Disk (the filesystem holding the site, the database and the logs) -------
eval "$(df -P / | awk 'NR == 2 { sub("%", "", $5); printf "disk_used_pct=%d disk_free_gb=%.1f\n", $5, $4 / 1048576 }')"

load1=$(awk '{ print $1 }' /proc/loadavg)

# --- Memory per service, straight from systemd -------------------------------
service_mb() {
    [ -n "${1:-}" ] || { echo 0; return; }
    bytes=$(systemctl show -p MemoryCurrent --value "$1" 2>/dev/null || echo 0)
    case "$bytes" in
        '' | *[!0-9]*) echo 0 ;;                 # "[not set]" when the unit isn't running
        *) echo $((bytes / 1048576)) ;;
    esac
}

# Both release slots count as the app; only one is live at a time, both during a deploy.
app_mb=$(( $(service_mb nihongo-no-michinori@3101.service) + $(service_mb nihongo-no-michinori@3102.service) ))
pg_unit=$(systemctl list-units --no-legend --plain 'postgresql@*.service' 2>/dev/null | awk '{ print $1; exit }')
postgres_mb=$(service_mb "${pg_unit:-postgresql.service}")
loki_mb=$(service_mb loki.service)
grafana_mb=$(service_mb grafana-server.service)
alloy_mb=$(service_mb alloy.service)

printf '{"evt":"host","cpu_pct":%s,"mem_used_pct":%s,"mem_used_mb":%s,"mem_total_mb":%s,"swap_used_mb":%s,"disk_used_pct":%s,"disk_free_gb":%s,"load1":%s,"app_mb":%s,"postgres_mb":%s,"loki_mb":%s,"grafana_mb":%s,"alloy_mb":%s}\n' \
    "$cpu_pct" "$mem_used_pct" "$mem_used_mb" "$mem_total_mb" "$swap_used_mb" \
    "$disk_used_pct" "$disk_free_gb" "$load1" \
    "$app_mb" "$postgres_mb" "$loki_mb" "$grafana_mb" "$alloy_mb"
