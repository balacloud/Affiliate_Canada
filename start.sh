#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"
STATE_DIR="$PROJECT_DIR/.local-run"
PID_FILE="$STATE_DIR/dev.pid"
LOG_FILE="$STATE_DIR/dev.log"
URL="http://127.0.0.1:3300"

command -v node >/dev/null || { echo "Node.js 22 is required." >&2; exit 1; }
[[ "$(node -p 'process.versions.node.split(".")[0]')" == 22 ]] || {
  echo "Use Node.js 22 (run nvm use if you use nvm)." >&2; exit 1;
}
[[ -f node_modules/next/dist/bin/next ]] || {
  echo "Install dependencies first: npm ci" >&2; exit 1;
}
mkdir -p "$STATE_DIR"
if ! mkdir "$STATE_DIR/start.lock" 2>/dev/null; then
  echo "Another start is in progress. See $LOG_FILE" >&2; exit 1;
fi
trap 'rmdir "$STATE_DIR/start.lock"' EXIT

if [[ -f "$PID_FILE" ]]; then
  PID="$(sed -n '1p' "$PID_FILE")"
  STARTED="$(sed -n '2p' "$PID_FILE")"
  if [[ "$PID" =~ ^[0-9]+$ ]] && [[ "$PID" -gt 1 ]] && kill -0 "$PID" 2>/dev/null &&
    [[ -n "$STARTED" && "$(ps -p "$PID" -o lstart=)" == "$STARTED" ]]; then
    URL="$(sed -n '3p' "$PID_FILE")"
    echo "SmartShopCA is already running: ${URL:-http://localhost:3200}"; exit 0
  fi
fi

command -v lsof >/dev/null || { echo "lsof is required to check the assigned port." >&2; exit 1; }
if lsof -nP -iTCP:3300 -sTCP:LISTEN -t >/dev/null 2>&1; then
  echo "SmartShopCA's assigned port 3300 is already in use. No server was stopped or alternative port selected." >&2
  exit 1
fi

PID="$(node - "$PROJECT_DIR" "$LOG_FILE" <<'NODE'
const { spawn } = require('node:child_process');
const { openSync, closeSync } = require('node:fs');
const [projectDir, logFile] = process.argv.slice(2);
const log = openSync(logFile, 'w');
const child = spawn(process.execPath, [
  `${projectDir}/node_modules/next/dist/bin/next`,
  'dev', '--hostname', '127.0.0.1', '--port', '3300',
], { cwd: projectDir, detached: true, stdio: ['ignore', log, log] });
child.on('error', (error) => { console.error(error.message); process.exitCode = 1; });
child.on('spawn', () => { console.log(child.pid); child.unref(); });
closeSync(log);
NODE
)"
STARTED="$(ps -p "$PID" -o lstart=)"
printf '%s\n%s\n%s\n' "$PID" "$STARTED" "$URL" >"$PID_FILE"

for ((attempt = 0; attempt < 30; attempt++)); do
  if ! kill -0 "$PID" 2>/dev/null; then
    echo "SmartShopCA failed to start. See $LOG_FILE" >&2
    tail -n 20 "$LOG_FILE" >&2
    exit 1
  fi
  if curl --fail --silent --max-time 2 "$URL" >/dev/null 2>&1; then
    echo "SmartShopCA is running: $URL"
    echo "Log: $LOG_FILE"
    echo "Stop with: ./stop.sh"
    exit 0
  fi
  sleep 1
done

echo "SmartShopCA is still starting. See $LOG_FILE"
echo "${URL:+Check $URL or }Stop with ./stop.sh"
