#!/usr/bin/env bash
# Usage: ./install_service.sh /path/to/videos [en|pt|auto] [user]
#   language defaults to en; re-run any time to change folder or language
set -euo pipefail
USAGE="usage: $0 /path/to/videos [en|pt|auto] [user]"
INPUT="${1:?$USAGE}"
LANG_CODE="${2:-en}"
RUN_USER="${3:-${SUDO_USER:-$USER}}"
DIR="$(cd "$(dirname "$0")" && pwd)"

case "$LANG_CODE" in
  en|pt|auto) ;;
  *) echo "ERROR: language must be en, pt or auto (got '$LANG_CODE')"; echo "$USAGE"; exit 1 ;;
esac
[ -d "$INPUT" ] || { echo "ERROR: folder not found: $INPUT"; exit 1; }
INPUT="$(realpath "$INPUT")"

command -v nvidia-smi >/dev/null && nvidia-smi -L || echo "WARNING: nvidia-smi not found - GPU may not be available"

# (re)build the venv unless it is a working one for THIS machine
if ! "$DIR/venv/bin/python" -c "import faster_whisper, ctranslate2, av" 2>/dev/null; then
  echo "Creating venv (python: $(python3 --version))..."
  rm -rf "$DIR/venv"
  python3 -m venv "$DIR/venv"
  "$DIR/venv/bin/pip" install --upgrade pip
  "$DIR/venv/bin/pip" install -r "$DIR/requirements.txt"
  "$DIR/venv/bin/python" -c "import faster_whisper, ctranslate2, av" \
    || { echo "ERROR: dependencies failed to install"; exit 1; }
fi
echo "CUDA devices visible to ctranslate2: $("$DIR/venv/bin/python" -c 'import ctranslate2; print(ctranslate2.get_cuda_device_count())')"

cat > /etc/systemd/system/transcriber.service <<EOF
[Unit]
Description=Whisper GPU video transcriber
After=network-online.target local-fs.target
Wants=network-online.target

[Service]
Type=simple
User=$RUN_USER
WorkingDirectory=$DIR
ExecStart=$DIR/venv/bin/python $DIR/transcriber.py "$INPUT" --language $LANG_CODE --watch 300
Environment=PYTHONUNBUFFERED=1
Restart=on-failure
RestartSec=30
KillSignal=SIGTERM
TimeoutStopSec=60
Nice=5

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable transcriber.service
systemctl restart transcriber.service   # restart so a re-run picks up the new folder/language
echo "Installed. Watching: $INPUT  (language: $LANG_CODE)"
echo "Follow progress with:"
echo "  journalctl -u transcriber -f"
echo "  tail -f $DIR/logs/transcriber.log"
echo "  cat $DIR/state/status.json"
