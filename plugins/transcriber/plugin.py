"""Stash-facing dashboard/control for the Whisper GPU transcriber service.

This does NOT run the transcription itself - transcriber.py keeps doing that
exactly as before, via its own systemd service (see README). This script
only reads that service's state files and (for start/stop/restart) shells
out to systemctl, so Stash's Settings/a plugin page can show live progress
and control it without SSHing in.
"""

import json
import os
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SERVICE_NAME = "transcriber.service"
SERVICE_UNIT_PATH = f"/etc/systemd/system/{SERVICE_NAME}"
INSTALL_SCRIPT = os.path.join(HERE, "install_service.sh")
LANGUAGES = ("en", "pt", "auto")

# Matches the ExecStart line install_service.sh writes: `... transcriber.py "<input>"
# --language <code> --watch 300` - the quoted input dir and the language code right after it.
EXEC_START_RE = re.compile(r'ExecStart=.*transcriber\.py\s+"([^"]+)"\s+--language\s+(\S+)')
# Matches the User= line in the same unit - install_service.sh defaults this to whoever ran
# it, which configure() below needs to pass back explicitly so reconfiguring the folder
# doesn't silently change which user the service runs as (see configure()).
USER_RE = re.compile(r"^User=(\S+)", re.MULTILINE)

# How many of the most recent failures to send back per status poll - failed.json can grow
# to thousands of entries over a large library, and this is re-read every few seconds by the
# dashboard, so the full list is never shipped over the wire, just a count plus a sample.
RECENT_FAILED_LIMIT = 20


def privileged_args(args):
    """Prefixes a command with `sudo -n`, unless this process is already root - which is
    common when Stash itself runs as root (e.g. inside a container built that way), and in
    that case there's nothing to elevate to, and no guarantee `sudo` is even installed (many
    root-only setups never install it). -n still applies in the non-root case: fail
    immediately rather than hang waiting for a password that will never come non-interactively.
    Requires a sudoers rule for exactly this when not already root - see README."""
    if hasattr(os, "geteuid") and os.geteuid() == 0:
        return list(args)
    return ["sudo", "-n"] + list(args)


def read_json(path, default):
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return default


def summarize_failed(failed):
    """failed.json is {path: {error, mtime, when}} - turn it into a total count plus the
    most recent entries (by "when"), as a list, for compact display."""
    entries = [
        {"path": path, "error": info.get("error"), "when": info.get("when")}
        for path, info in failed.items()
        if isinstance(info, dict)
    ]
    entries.sort(key=lambda e: e.get("when") or "", reverse=True)
    return {"count": len(entries), "recent": entries[:RECENT_FAILED_LIMIT]}


def get_current_config(unit_path=SERVICE_UNIT_PATH):
    """The folder/language transcriber.service is currently set up to watch, parsed straight
    out of its ExecStart line - install_service.sh is the only thing that writes this file,
    so reading back what it last wrote is the simplest way to know the current config without
    duplicating any state of our own. Returns None if the unit doesn't exist yet (not
    installed) or isn't in the expected shape."""
    try:
        with open(unit_path, "r", encoding="utf-8") as f:
            content = f.read()
    except OSError:
        return None
    m = EXEC_START_RE.search(content)
    if not m:
        return None
    config = {"inputDir": m.group(1), "language": m.group(2)}
    user_match = USER_RE.search(content)
    if user_match:
        config["user"] = user_match.group(1)
    return config


def get_status(state_dir, run=None, unit_path=SERVICE_UNIT_PATH):
    # Not a `run=subprocess.run` default - that would bind the real subprocess.run once, at
    # import time, which a test patching subprocess.run afterwards could never actually
    # reach. Looking it up here instead means a patch (or an explicit run=...) always wins.
    run = run or subprocess.run
    status = read_json(os.path.join(state_dir, "status.json"), None)
    failed = read_json(os.path.join(state_dir, "failed.json"), {})
    try:
        result = run(["systemctl", "is-active", SERVICE_NAME], capture_output=True, text=True, timeout=10)
        service_active = result.stdout.strip() or result.stderr.strip() or "unknown"
    except Exception as e:  # noqa: BLE001 - genuinely want to report any failure, not crash
        service_active = f"unknown: {e}"
    return {
        "status": status,
        "failed": summarize_failed(failed),
        "serviceActive": service_active,
        "config": get_current_config(unit_path),
    }


def control(action, run=None):
    run = run or subprocess.run
    if action not in ("start", "stop", "restart"):
        return {"error": f"unknown action: {action}"}
    try:
        result = run(privileged_args(["systemctl", action, SERVICE_NAME]), capture_output=True, text=True, timeout=30)
    except Exception as e:  # noqa: BLE001
        return {"error": str(e)}
    if result.returncode != 0:
        message = (result.stderr or result.stdout or f"systemctl {action} failed").strip()
        return {"error": message}
    return {"ok": True}


def configure(input_dir, language, run=None, unit_path=SERVICE_UNIT_PATH):
    """Re-runs install_service.sh to point the service at a different folder/language. That
    script itself validates the folder exists and the language code, writes the systemd unit,
    and does daemon-reload/enable/restart - this just shells out to it as root (needs a
    broader sudoers grant than start/stop/restart when not already root: see README) and
    reports what happened. Passes the CURRENTLY configured user back to it explicitly (if
    there is one) so changing the folder doesn't also silently change which user the service
    runs as - install_service.sh would otherwise default to whoever invoked it."""
    if not input_dir or not isinstance(input_dir, str):
        return {"error": "inputDir is required"}
    if language not in LANGUAGES:
        return {"error": f"language must be one of {', '.join(LANGUAGES)} (got {language!r})"}
    run = run or subprocess.run
    current = get_current_config(unit_path)
    args = privileged_args([INSTALL_SCRIPT, input_dir, language])
    if current and current.get("user"):
        args.append(current["user"])
    try:
        # Not a short timeout: the first run after a folder change can rebuild the venv from
        # scratch (pip install) if it isn't already present/working, which can genuinely take
        # several minutes - a short timeout here would look like a hang on exactly that case.
        result = run(args, capture_output=True, text=True, timeout=900)
    except subprocess.TimeoutExpired:
        return {"error": "install_service.sh timed out after 15 minutes"}
    except Exception as e:  # noqa: BLE001
        return {"error": str(e)}
    if result.returncode != 0:
        message = (result.stderr or result.stdout or "install_service.sh failed").strip()
        return {"error": message}
    return {"ok": True, "config": get_current_config(unit_path)}


def main():
    json_input = json.loads(sys.stdin.read())
    args = json_input.get("args", {})
    mode = args.get("mode", "status")
    state_dir = args.get("stateDir") or os.path.join(HERE, "state")

    if mode == "status":
        result = get_status(state_dir)
    elif mode in ("start", "stop", "restart"):
        result = control(mode)
    elif mode == "configure":
        result = configure(args.get("inputDir"), args.get("language", "en"))
    else:
        result = {"error": f"unknown mode: {mode}"}

    # Matches the JSON-RPC shape Stash expects from a plugin process (pkg/plugin/common/msg.go
    # PluginOutput): "error" set on failure, or "output" holding the whole result on success -
    # what runPluginOperation's GraphQL response is built from (see Subtitle Markers' own
    # subtitleMarkers.py for the same convention and why it matters).
    if "error" in result:
        print(json.dumps({"error": result["error"]}))
    else:
        print(json.dumps({"output": result}))


if __name__ == "__main__":
    main()
