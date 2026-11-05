#!/usr/bin/env python3
"""
GPU video transcriber (faster-whisper / CTranslate2).

Recursively scans a folder for videos and writes, next to each video
(or into a mirrored --output-dir tree):
    <name>.srt   subtitles with timestamps
    <name>.txt   plain text
    <name>.json  segments + metadata (optional, --formats)

Designed to run as a systemd service:
  * resumable: a video is skipped when its outputs already exist
  * outputs are written atomically (tmp file + rename), so a crash never
    leaves a half-written transcript that would be mistaken for "done"
  * failed videos are remembered in a state file and not retried forever
  * --watch keeps scanning for new videos; files still being copied are skipped
  * SIGTERM/SIGINT stop cleanly between segments
  * logs to stdout (journald) + rotating log file, and a status.json with
    live progress that you can `cat` / `watch` at any time
"""
from __future__ import annotations

import argparse
import json
import logging
import logging.handlers
import os
import signal
import sys
import time
from datetime import datetime, timedelta
from pathlib import Path


# --------------------------------------------------------------------------- #
# CUDA libs from pip wheels (nvidia-cublas-cu12 / nvidia-cudnn-cu12).
# ctranslate2 dlopen()s them, so LD_LIBRARY_PATH must be set *before* the
# process starts -> re-exec ourselves once with the right path.
# --------------------------------------------------------------------------- #
def _ensure_cuda_libs_on_path() -> None:
    if os.environ.get("_TRANSCRIBER_REEXEC") == "1":
        return
    try:
        import nvidia.cublas.lib  # type: ignore
        import nvidia.cudnn.lib  # type: ignore
    except ImportError:
        return  # rely on system CUDA
    dirs = [list(nvidia.cublas.lib.__path__)[0], list(nvidia.cudnn.lib.__path__)[0]]
    current = os.environ.get("LD_LIBRARY_PATH", "")
    if all(d in current.split(":") for d in dirs):
        return
    os.environ["LD_LIBRARY_PATH"] = ":".join(dirs + ([current] if current else []))
    os.environ["_TRANSCRIBER_REEXEC"] = "1"
    os.execv(sys.executable, [sys.executable] + sys.argv)


if sys.platform.startswith("linux"):
    _ensure_cuda_libs_on_path()


VIDEO_EXTS = {
    ".mp4", ".mkv", ".avi", ".mov", ".wmv", ".flv", ".webm", ".m4v", ".mpg",
    ".mpeg", ".ts", ".mts", ".m2ts", ".3gp", ".ogv", ".vob", ".f4v", ".divx",
}

log = logging.getLogger("transcriber")
STOP = False


def _handle_stop(signum, _frame):
    global STOP
    if not STOP:
        log.warning("Received %s - stopping after current segment...", signal.Signals(signum).name)
    STOP = True


class Stopped(Exception):
    pass


class NoAudio(Exception):
    pass


def has_audio(video: Path) -> bool:
    import av

    with av.open(str(video)) as c:
        return len(c.streams.audio) > 0


class Cue:
    __slots__ = ("start", "end", "text")

    def __init__(self, start: float, end: float, text: str):
        self.start, self.end, self.text = start, end, text


def to_cues(segments, max_chars: int = 84, max_dur: float = 7.0, max_gap: float = 1.0) -> list[Cue]:
    """Split whisper segments into subtitle-sized cues using word timestamps.
    Breaks at sentence ends, long pauses, or when a cue gets too long."""
    cues: list[Cue] = []
    for seg in segments:
        words = getattr(seg, "words", None)
        if not words:
            cues.append(Cue(seg.start, seg.end, seg.text.strip()))
            continue
        cur: list = []
        for w in words:
            if cur:
                text_len = len("".join(x.word for x in cur) + w.word)
                if (text_len > max_chars or w.end - cur[0].start > max_dur or w.start - cur[-1].end > max_gap):
                    cues.append(Cue(cur[0].start, cur[-1].end, "".join(x.word for x in cur).strip()))
                    cur = []
            cur.append(w)
            if w.word.rstrip().endswith((".", "?", "!")) and len("".join(x.word for x in cur)) > 20:
                cues.append(Cue(cur[0].start, cur[-1].end, "".join(x.word for x in cur).strip()))
                cur = []
        if cur:
            cues.append(Cue(cur[0].start, cur[-1].end, "".join(x.word for x in cur).strip()))
    return [c for c in cues if c.text]


# --------------------------------------------------------------------------- #
# helpers
# --------------------------------------------------------------------------- #
def fmt_dur(seconds: float) -> str:
    seconds = max(0, int(seconds))
    h, rem = divmod(seconds, 3600)
    m, s = divmod(rem, 60)
    return f"{h:d}:{m:02d}:{s:02d}"


def srt_ts(t: float) -> str:
    ms = int(round(t * 1000))
    h, ms = divmod(ms, 3_600_000)
    m, ms = divmod(ms, 60_000)
    s, ms = divmod(ms, 1000)
    return f"{h:02d}:{m:02d}:{s:02d},{ms:03d}"


def atomic_write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_name(path.name + ".part")
    tmp.write_text(text, encoding="utf-8")
    os.replace(tmp, path)


def load_json(path: Path, default):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return default


def setup_logging(log_file: Path | None, verbose: bool) -> None:
    fmt = logging.Formatter("%(asctime)s [%(levelname)s] %(message)s", "%Y-%m-%d %H:%M:%S")
    log.setLevel(logging.DEBUG if verbose else logging.INFO)
    sh = logging.StreamHandler(sys.stdout)
    sh.setFormatter(fmt)
    log.addHandler(sh)
    if log_file:
        log_file.parent.mkdir(parents=True, exist_ok=True)
        fh = logging.handlers.RotatingFileHandler(log_file, maxBytes=10_000_000, backupCount=5, encoding="utf-8")
        fh.setFormatter(fmt)
        log.addHandler(fh)


# --------------------------------------------------------------------------- #
# transcriber
# --------------------------------------------------------------------------- #
class Transcriber:
    def __init__(self, args: argparse.Namespace):
        self.args = args
        self.root = Path(args.input_dir).resolve()
        self.out_root = Path(args.output_dir).resolve() if args.output_dir else None
        self.formats = [f.strip() for f in args.formats.split(",") if f.strip()]
        self.state_dir = Path(args.state_dir).resolve()
        self.state_dir.mkdir(parents=True, exist_ok=True)
        self.failed_path = self.state_dir / "failed.json"
        self.status_path = self.state_dir / "status.json"
        self.failed: dict = load_json(self.failed_path, {})
        self.model = None
        self.pipeline = None
        self.status: dict = {}

    # ---- model ------------------------------------------------------------ #
    def load_model(self) -> None:
        from faster_whisper import BatchedInferencePipeline, WhisperModel

        a = self.args
        log.info("Loading model '%s' on %s (%s)...", a.model, a.device, a.compute_type)
        t0 = time.time()
        self.model = WhisperModel(
            a.model,
            device=a.device,
            compute_type=a.compute_type,
            download_root=a.model_dir,
        )
        self.pipeline = BatchedInferencePipeline(model=self.model) if a.batch_size > 1 else None
        log.info("Model loaded in %.1fs", time.time() - t0)

    # ---- discovery -------------------------------------------------------- #
    def out_base(self, video: Path) -> Path:
        if self.out_root:
            rel = video.relative_to(self.root)
            return (self.out_root / rel).with_suffix("")
        return video.with_suffix("")

    def is_done(self, video: Path) -> bool:
        base = self.out_base(video)
        return all(base.with_name(base.name + "." + f).exists() for f in self.formats)

    def scan(self) -> list[Path]:
        videos = []
        settle = self.args.min_file_age
        now = time.time()
        for dirpath, dirnames, filenames in os.walk(self.root):
            dirnames[:] = sorted(d for d in dirnames if not d.startswith("."))
            for fn in sorted(filenames):
                p = Path(dirpath) / fn
                if p.suffix.lower() not in VIDEO_EXTS:
                    continue
                try:
                    st = p.stat()
                except OSError:
                    continue
                if settle and now - st.st_mtime < settle:
                    log.debug("Skipping (still being written?): %s", p)
                    continue
                key = str(p)
                if key in self.failed and not self.args.retry_failed:
                    # retry automatically only if the file changed since it failed
                    if self.failed[key].get("mtime") == st.st_mtime:
                        continue
                if self.args.overwrite or not self.is_done(p):
                    videos.append(p)
        return videos

    # ---- status ----------------------------------------------------------- #
    def write_status(self, **kw) -> None:
        self.status.update(kw, updated=datetime.now().isoformat(timespec="seconds"))
        try:
            atomic_write(self.status_path, json.dumps(self.status, indent=2))
        except OSError as e:
            log.debug("Could not write status: %s", e)

    # ---- one file --------------------------------------------------------- #
    def transcribe_file(self, video: Path, idx: int, total: int, batch_t0: float, batch_audio_done: float) -> float:
        a = self.args
        rel = video.relative_to(self.root)
        log.info("[%d/%d] Transcribing: %s", idx, total, rel)
        t0 = time.time()

        common = dict(
            language=None if a.language == "auto" else a.language,
            task="transcribe",
            beam_size=a.beam_size,
            vad_filter=True,
            word_timestamps=True,  # needed to cut batched ~30s chunks into readable subtitle lines
            condition_on_previous_text=False,
        )
        if not has_audio(video):
            raise NoAudio("video has no audio stream")
        if self.pipeline:
            segments, info = self.pipeline.transcribe(str(video), batch_size=a.batch_size, **common)
        else:
            segments, info = self.model.transcribe(str(video), **common)

        duration = info.duration or 0.0
        log.info("    audio duration %s, language %s", fmt_dur(duration), info.language)

        collected = []
        last_log = 0.0
        for seg in segments:  # generator: actual decoding happens here
            if STOP:
                raise Stopped()
            collected.append(seg)
            now = time.time()
            pct = min(100.0, 100.0 * seg.end / duration) if duration else 0.0
            if now - last_log >= a.progress_interval:
                last_log = now
                elapsed = now - t0
                speed = seg.end / elapsed if elapsed > 0 else 0
                eta = (duration - seg.end) / speed if speed > 0 else 0
                log.info("    %5.1f%%  %s / %s  (%.1fx realtime, ETA %s)",
                         pct, fmt_dur(seg.end), fmt_dur(duration), speed, fmt_dur(eta))
                self.write_status(
                    state="transcribing", current_file=str(rel), file_index=idx, files_total=total,
                    file_progress_pct=round(pct, 1), file_eta_s=round(eta),
                )

        elapsed = time.time() - t0
        self.save_outputs(video, collected, info, elapsed)
        speed = duration / elapsed if elapsed > 0 else 0
        log.info("    done in %s (%.1fx realtime)", fmt_dur(elapsed), speed)
        self.write_status(file_progress_pct=100.0, file_eta_s=0)
        return duration

    def save_outputs(self, video: Path, segments, info, elapsed: float) -> None:
        base = self.out_base(video)
        segments = to_cues(segments)
        if "srt" in self.formats:
            lines = []
            for i, s in enumerate(segments, 1):
                lines.append(f"{i}\n{srt_ts(s.start)} --> {srt_ts(s.end)}\n{s.text.strip()}\n")
            atomic_write(base.with_name(base.name + ".srt"), "\n".join(lines))
        if "txt" in self.formats:
            atomic_write(base.with_name(base.name + ".txt"), "\n".join(s.text.strip() for s in segments) + "\n")
        if "json" in self.formats:
            data = {
                "file": str(video),
                "model": self.args.model,
                "language": info.language,
                "duration": info.duration,
                "processing_seconds": round(elapsed, 2),
                "created": datetime.now().isoformat(timespec="seconds"),
                "segments": [
                    {"start": round(s.start, 3), "end": round(s.end, 3), "text": s.text.strip()} for s in segments
                ],
            }
            atomic_write(base.with_name(base.name + ".json"), json.dumps(data, ensure_ascii=False, indent=2))

    # ---- batch ------------------------------------------------------------ #
    def run_once(self) -> int:
        videos = self.scan()
        total = len(videos)
        if not total:
            if self.status.get("state") not in ("idle", "watching"):
                log.info("No pending videos in %s", self.root)
            else:
                log.debug("No pending videos in %s", self.root)
            self.write_status(state="idle", current_file=None, files_total=0)
            return 0

        log.info("Found %d video(s) to transcribe", total)
        if self.model is None:
            self.load_model()

        batch_t0 = time.time()
        audio_done = 0.0
        ok = fail = 0
        for idx, video in enumerate(videos, 1):
            if STOP:
                break
            try:
                audio_done += self.transcribe_file(video, idx, total, batch_t0, audio_done)
                ok += 1
                self.failed.pop(str(video), None)
            except Stopped:
                log.warning("Interrupted while processing %s (no output written)", video.name)
                break
            except Exception as e:  # noqa: BLE001
                fail += 1
                log.error("    FAILED: %s: %s", type(e).__name__, e)
                if not isinstance(e, NoAudio):
                    log.debug("traceback", exc_info=True)
                try:
                    mtime = video.stat().st_mtime
                except OSError:
                    mtime = None
                self.failed[str(video)] = {"error": f"{type(e).__name__}: {e}", "mtime": mtime,
                                           "when": datetime.now().isoformat(timespec="seconds")}
                if "out of memory" in str(e).lower():
                    log.error("    CUDA OOM - try a smaller --batch-size or --compute-type int8_float16")
            finally:
                atomic_write(self.failed_path, json.dumps(self.failed, indent=2))

            elapsed = time.time() - batch_t0
            remaining = total - idx
            eta = elapsed / idx * remaining
            log.info("Overall: %d/%d done (%d failed) | elapsed %s | ETA %s",
                     idx, total, fail, fmt_dur(elapsed), fmt_dur(eta))
            self.write_status(state="running", files_done=idx, files_total=total, files_failed=fail,
                              overall_progress_pct=round(100 * idx / total, 1),
                              overall_eta=(datetime.now() + timedelta(seconds=eta)).isoformat(timespec="seconds"),
                              audio_hours_transcribed=round(audio_done / 3600, 2))

        log.info("Batch finished: %d ok, %d failed, took %s", ok, fail, fmt_dur(time.time() - batch_t0))
        return fail

    def run(self) -> int:
        log.info("Input dir: %s | language=%s model=%s batch=%d beam=%d formats=%s watch=%s",
                 self.root, self.args.language, self.args.model, self.args.batch_size, self.args.beam_size,
                 ",".join(self.formats), self.args.watch or "off")
        if not self.root.is_dir():
            log.error("Input dir does not exist: %s", self.root)
            return 2
        fails = self.run_once()
        while self.args.watch and not STOP:
            self.write_status(state="watching", current_file=None)
            for _ in range(int(self.args.watch)):
                if STOP:
                    break
                time.sleep(1)
            if not STOP:
                fails = self.run_once()
        self.write_status(state="stopped" if STOP else "finished", current_file=None)
        return 1 if fails else 0


def parse_args(argv=None) -> argparse.Namespace:
    here = Path(__file__).resolve().parent
    p = argparse.ArgumentParser(description="Transcribe all videos in a folder tree with faster-whisper on GPU.")
    p.add_argument("input_dir", help="folder to scan recursively")
    p.add_argument("--output-dir", help="write transcripts into a mirrored tree here (default: next to each video)")
    p.add_argument("--model", default="large-v3-turbo",
                   help="large-v3-turbo (default: ~8x faster, near large-v3 accuracy) | large-v3 (most accurate) | distil-large-v3")
    p.add_argument("--language", default="en",
                   help="en (English) | pt (Portuguese) | auto (detect per video) | any whisper language code")
    p.add_argument("--device", default="cuda")
    p.add_argument("--compute-type", default="float16", help="float16 | int8_float16 (less VRAM) | int8")
    p.add_argument("--batch-size", type=int, default=16, help="batched inference size; lower if CUDA OOM, 1 = sequential")
    p.add_argument("--beam-size", type=int, default=5)
    p.add_argument("--formats", default="srt,txt", help="comma list of srt,txt,json")
    p.add_argument("--model-dir", default=str(here / "models"), help="where model weights are cached")
    p.add_argument("--state-dir", default=str(here / "state"), help="status.json / failed.json location")
    p.add_argument("--log-file", default=str(here / "logs" / "transcriber.log"))
    p.add_argument("--watch", type=int, default=0, metavar="SECONDS",
                   help="keep running and rescan every N seconds (0 = process once and exit)")
    p.add_argument("--min-file-age", type=int, default=30,
                   help="ignore files modified less than N seconds ago (still copying)")
    p.add_argument("--progress-interval", type=float, default=15, help="seconds between progress log lines")
    p.add_argument("--overwrite", action="store_true", help="re-transcribe even if outputs exist")
    p.add_argument("--retry-failed", action="store_true", help="retry files that failed before")
    p.add_argument("-v", "--verbose", action="store_true")
    return p.parse_args(argv)


def main() -> int:
    args = parse_args()
    setup_logging(Path(args.log_file) if args.log_file else None, args.verbose)
    signal.signal(signal.SIGTERM, _handle_stop)
    signal.signal(signal.SIGINT, _handle_stop)
    return Transcriber(args).run()


if __name__ == "__main__":
    sys.exit(main())
