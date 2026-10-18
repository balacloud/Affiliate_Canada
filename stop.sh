#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PID_FILE="$PROJECT_DIR/.local-run/dev.pid"

if [[ ! -f "$PID_FILE" ]]; then
  echo "No app started by ./start.sh is running."
  exit 0
fi
PID="$(sed -n '1p' "$PID_FILE")"
STARTED="$(sed -n '2p' "$PID_FILE")"
if [[ ! "$PID" =~ ^[0-9]+$ ]] || [[ "$PID" -le 1 ]] || ! kill -0 "$PID" 2>/dev/null ||
  [[ -z "$STARTED" || "$(ps -p "$PID" -o lstart=)" != "$STARTED" ]]; then
  echo "The saved app process is no longer running."
  rm -f "$PID_FILE"
  exit 0
fi

# The Next.js CLI forwards SIGTERM to its development-server child.
kill -TERM "$PID"
for ((attempt = 0; attempt < 30; attempt++)); do
  if ! kill -0 "$PID" 2>/dev/null || [[ "$(ps -p "$PID" -o stat=)" == *Z* ]]; then
    rm -f "$PID_FILE"
    echo "SmartShopCA stopped."
    exit 0
  fi
  sleep 0.5
done

echo "The app is still shutting down. Run ./stop.sh again in a moment." >&2
exit 1
