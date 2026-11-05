import sys
import json
import os
import re

import log
from stash_interface import StashInterface

# How close two matches (in seconds) need to be, at the same scene and tag,
# to be treated as the same spoken line split across subtitle cues rather
# than a separate occurrence - also makes re-running the task safe, since a
# marker created on a previous run counts the same as one just created now.
DEDUP_TOLERANCE_SECONDS = 3.0

SRT_TIME_RE = re.compile(
    r"(\d{1,2}):(\d{2}):(\d{2})[,.](\d{3})\s*-->\s*(\d{1,2}):(\d{2}):(\d{2})[,.](\d{3})"
)


def srt_timestamp_to_seconds(h, m, s, ms):
    return int(h) * 3600 + int(m) * 60 + int(s) + int(ms) / 1000.0


def parse_srt(content):
    """Returns a list of (start_seconds, text) for each cue in an .srt file's content.
    Tolerant of malformed blocks (missing/extra index lines, stray blank lines inside a
    cue's text) - a block that doesn't contain a recognisable timestamp line is skipped
    rather than failing the whole file."""
    content = content.replace("\r\n", "\n").replace("\r", "\n")
    blocks = re.split(r"\n\s*\n", content.strip())

    cues = []
    for block in blocks:
        lines = block.strip("\n").split("\n")

        match = None
        time_line_index = None
        for i, line in enumerate(lines):
            m = SRT_TIME_RE.search(line)
            if m:
                match = m
                time_line_index = i
                break
        if match is None:
            continue

        start = srt_timestamp_to_seconds(*match.groups()[0:4])
        text = " ".join(line.strip() for line in lines[time_line_index + 1 :] if line.strip())
        if text:
            cues.append((start, text))

    return cues


def find_srt_files(root):
    for dirpath, _dirnames, filenames in os.walk(root):
        for filename in filenames:
            if filename.lower().endswith(".srt"):
                yield os.path.join(dirpath, filename)


def candidate_video_prefixes(srt_path):
    """The video file path(s) this subtitle could belong to, matching Stash's own caption
    convention (pkg/file/video/caption.go): "movie.srt" belongs to "movie.<ext>"; a caption
    with a language code, "movie.en.srt", belongs to "movie.<ext>" too (stripping the code) -
    but since that code is only a convention, not confirmed here, the un-stripped form
    ("movie.en.<ext>") is tried first, in case that's genuinely the video's own name."""
    without_ext, ext = os.path.splitext(srt_path)
    if ext.lower() != ".srt":
        return []

    candidates = [without_ext]
    root, maybe_lang_ext = os.path.splitext(without_ext)
    lang = maybe_lang_ext[1:]
    if 2 <= len(lang) <= 3 and lang.isalpha():
        candidates.append(root)
    return candidates


def path_prefix_regex(prefix):
    # Matches prefix + exactly one extension, anchored so e.g. prefix "movie" can't match
    # a longer, unrelated filename like "movie2.mp4".
    return "^" + re.escape(prefix) + r"\.[^./]+$"


def run(path, search, tag_id, title, stash):
    if not path or not os.path.isdir(path):
        log.error(f"Path does not exist or is not a directory: {path!r}")
        return {"output": "error", "error": "invalid path"}
    if not search:
        log.error("No search text given.")
        return {"output": "error", "error": "no search text"}
    if not tag_id:
        log.error("No tag given.")
        return {"output": "error", "error": "no tag"}

    search_lower = search.lower()
    marker_title = title or search

    srt_files = list(find_srt_files(path))
    log.info(f"Found {len(srt_files)} .srt file(s) under {path}")

    scene_cache = {}  # path prefix -> scene dict or None
    markers_by_scene = {}  # scene id -> list of seconds (existing + created this run)
    created_marker_ids = []

    created = 0
    skipped_dup = 0
    unmatched_srt = 0
    matched_cues = 0

    for i, srt_path in enumerate(srt_files):
        log.progress(i / len(srt_files) if srt_files else 1)

        try:
            with open(srt_path, "r", encoding="utf-8-sig", errors="replace") as f:
                content = f.read()
        except OSError as e:
            log.warning(f"Could not read {srt_path}: {e}")
            continue

        matches = [(start, text) for start, text in parse_srt(content) if search_lower in text.lower()]
        if not matches:
            continue
        matched_cues += len(matches)

        scene = None
        for prefix in candidate_video_prefixes(srt_path):
            if prefix in scene_cache:
                scene = scene_cache[prefix]
            else:
                scene = stash.find_scene_by_path_prefix(path_prefix_regex(prefix))
                scene_cache[prefix] = scene
            if scene:
                break

        if scene is None:
            log.warning(f"No matching scene found in Stash for subtitle: {srt_path}")
            unmatched_srt += 1
            continue

        scene_id = scene["id"]
        if scene_id not in markers_by_scene:
            markers_by_scene[scene_id] = [
                m["seconds"]
                for m in scene.get("scene_markers", [])
                if (m.get("primary_tag") or {}).get("id") == tag_id
            ]

        for start, _text in matches:
            existing = markers_by_scene[scene_id]
            if any(abs(start - s) <= DEDUP_TOLERANCE_SECONDS for s in existing):
                skipped_dup += 1
                continue

            result = stash.create_marker(scene_id, start, marker_title, tag_id)
            if result:
                existing.append(start)
                created += 1
                created_marker_ids.append(result["id"])
                log.info(f"Marker created at {start:.1f}s in scene {scene_id} ({scene.get('title') or srt_path})")
            else:
                log.error(f"Failed to create marker at {start:.1f}s in scene {scene_id}")

    log.progress(1)
    log.info(
        f"Done. .srt files scanned: {len(srt_files)} | matching cues: {matched_cues} | "
        f"markers created: {created} | skipped (near-duplicate): {skipped_dup} | "
        f"subtitles with no matching scene: {unmatched_srt}"
    )

    generate_job_id = None
    if created_marker_ids:
        generate_job_id = stash.generate_marker_previews(created_marker_ids)
        log.info(f"Queued marker preview generation for {len(created_marker_ids)} marker(s) (job {generate_job_id})")

    return {
        "output": "ok",
        "created": created,
        "skipped": skipped_dup,
        "unmatchedSrt": unmatched_srt,
        "matchedCues": matched_cues,
        "generateJobId": generate_job_id,
    }


def main():
    json_input = json.loads(sys.stdin.read())
    args = json_input.get("args", {})
    stash = StashInterface(json_input["server_connection"])

    result = run(
        path=args.get("path", ""),
        search=args.get("search", ""),
        tag_id=args.get("tagId", ""),
        title=args.get("title", ""),
        stash=stash,
    )
    print(json.dumps(result))


if __name__ == "__main__":
    main()
