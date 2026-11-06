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

# HTML-style tags (<i>, <b>, <font color="...">, their closing tags, ...) and ASS/SSA
# override blocks ({\an8}, {\pos(400,300)}, ...) - both common in real .srt files.
SRT_FORMATTING_RE = re.compile(r"<[^>]*>|\{\\[^}]*\}")


def srt_timestamp_to_seconds(h, m, s, ms):
    return int(h) * 3600 + int(m) * 60 + int(s) + int(ms) / 1000.0


def strip_srt_formatting(text):
    """Removes inline formatting markup so it can't split a phrase a search is looking
    for - e.g. "<i>failed</i> to complete" would otherwise never match "failed to", since
    the closing tag sits between the two words."""
    return SRT_FORMATTING_RE.sub("", text)


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
        stripped_lines = (strip_srt_formatting(line).strip() for line in lines[time_line_index + 1 :])
        text = re.sub(r"\s+", " ", " ".join(line for line in stripped_lines if line)).strip()
        if text:
            cues.append((start, text))

    return cues


STASHIGNORE_FILENAME = ".stashignore"


def _translate_gitignore_pattern(pattern):
    """Compiles one .stashignore line (no leading "!", no trailing "/" - the caller strips
    those) into a regex matching a path relative to the .stashignore's own directory
    (forward slashes, no leading slash) - the same semantics Stash's own .stashignore
    support uses (pkg/file/stashignore.go, via a gitignore-pattern library): a pattern with
    no "/" (besides a possible trailing one) matches at any depth; one containing a "/"
    elsewhere is anchored to the .stashignore's own directory."""
    anchored = pattern.startswith("/")
    if anchored:
        pattern = pattern[1:]
    anchored = anchored or ("/" in pattern)

    i, n = 0, len(pattern)
    parts = []
    while i < n:
        c = pattern[i]
        if pattern[i : i + 3] == "**/":
            parts.append("(?:.*/)?")
            i += 3
        elif c == "*" and pattern[i : i + 2] == "**":
            parts.append(".*")
            i += 2
        elif c == "*":
            parts.append("[^/]*")
            i += 1
        elif c == "?":
            parts.append("[^/]")
            i += 1
        elif c == "[":
            j = pattern.find("]", i + 1)
            if j == -1:
                parts.append(re.escape(c))
                i += 1
            else:
                parts.append(pattern[i : j + 1])
                i = j + 1
        else:
            parts.append(re.escape(c))
            i += 1

    body = "".join(parts)
    return re.compile(("^" if anchored else "^(?:.*/)?") + body + "$")


def _load_ignore_patterns(dirpath):
    """Parses dirpath's own .stashignore, if it has one, into a list of
    (negate, dir_only, regex) tuples in file order (later entries can override earlier
    ones via negation, same as gitignore). Returns [] if there isn't one, or it's empty."""
    try:
        with open(os.path.join(dirpath, STASHIGNORE_FILENAME), "r", encoding="utf-8-sig", errors="replace") as f:
            raw_lines = f.read().splitlines()
    except OSError:
        return []

    patterns = []
    for line in raw_lines:
        line = line.rstrip()
        if not line or (line.startswith("#") and not line.startswith("\\#")):
            continue
        negate = line.startswith("!")
        if negate:
            line = line[1:]
        if line.startswith("\\!") or line.startswith("\\#"):
            line = line[1:]
        dir_only = line.endswith("/") and not line.endswith("\\/")
        if dir_only:
            line = line[:-1]
        if not line:
            continue
        patterns.append((negate, dir_only, _translate_gitignore_pattern(line)))
    return patterns


def _collect_ignore_entries(dirpath, root, cache):
    """The (dir_path, patterns) pairs applicable to dirpath, from root down to dirpath
    itself, in that order - mirrors Stash's own collectIgnoreEntries (pkg/file/stashignore.go),
    rooted at the folder this task was given rather than a configured library root, since
    that's the only root this task knows about."""
    dirpath = os.path.normpath(dirpath)
    if dirpath in cache:
        return cache[dirpath]

    if dirpath == os.path.normpath(root):
        entries = []
    else:
        entries = list(_collect_ignore_entries(os.path.dirname(dirpath), root, cache))

    patterns = _load_ignore_patterns(dirpath)
    if patterns:
        entries = entries + [(dirpath, patterns)]
    cache[dirpath] = entries
    return entries


def _is_ignored(path, is_dir, entries):
    ignored = False
    for dir_path, patterns in entries:
        rel = os.path.relpath(path, dir_path).replace(os.sep, "/")
        for negate, dir_only, regex in patterns:
            if dir_only and not is_dir:
                continue
            if regex.match(rel):
                ignored = not negate
    return ignored


def find_srt_files(root):
    """Every .srt file under root, skipping any folder (and everything inside it) or
    individual file a .stashignore excludes - the same files Stash's own library scan
    would skip, so a subtitle search never touches what you've deliberately kept out of
    your library."""
    cache = {}
    root = os.path.normpath(root)
    for dirpath, dirnames, filenames in os.walk(root, topdown=True):
        entries = _collect_ignore_entries(dirpath, root, cache)
        # Pruned in place so os.walk never descends into an ignored folder, same as
        # Stash's own scanner (fs.SkipDir) - not just filtered out of the results after.
        dirnames[:] = [d for d in dirnames if not _is_ignored(os.path.join(dirpath, d), True, entries)]
        for filename in filenames:
            if not filename.lower().endswith(".srt"):
                continue
            full_path = os.path.join(dirpath, filename)
            if _is_ignored(full_path, False, entries):
                continue
            yield full_path


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


def make_text_matcher(search_text, whole_word):
    """Returns a function(text) -> bool for matching a cue's text against search_text -
    plain case-insensitive substring by default (so e.g. "fail" matches "failed"), or, with
    whole_word set, requiring the whole search phrase to sit on word boundaries (so "fail"
    then only matches "fail", not "failed" or "failure") - the same \\b-based behaviour a
    "match whole word" toggle has in most text editors. search_text is matched literally
    either way (escaped before going into the regex), never as a pattern of its own."""
    if whole_word:
        pattern = re.compile(r"\b" + re.escape(search_text) + r"\b", re.IGNORECASE)
        return lambda text: pattern.search(text) is not None
    search_lower = search_text.lower()
    return lambda text: search_lower in text.lower()


def run(path, search, tag_id, title, stash, whole_word=False):
    """Searches, and creates a scene marker for every match (see module docstring-style
    comments on the dedup/tag/title behaviour throughout). Returns {"error": "..."} for
    invalid input, otherwise a dict of result counts."""
    if not path or not os.path.isdir(path):
        log.error(f"Path does not exist or is not a directory: {path!r}")
        return {"error": "invalid path"}
    if not search:
        log.error("No search text given.")
        return {"error": "no search text"}
    if not tag_id:
        log.error("No tag given.")
        return {"error": "no tag"}

    matcher = make_text_matcher(search, whole_word)
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

        matches = [(start, text) for start, text in parse_srt(content) if matcher(text)]
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
        "created": created,
        "skipped": skipped_dup,
        "unmatchedSrt": unmatched_srt,
        "matchedCues": matched_cues,
        "generateJobId": generate_job_id,
    }


def search(path, search, stash, whole_word=False):
    """Searches without creating anything - every matching subtitle cue, with the scene it
    belongs to and the cue's start time, for linking straight to Stash's own
    `/scenes/<id>?t=<seconds>` (jumps to that point in the scene, no marker needed). Matches
    within DEDUP_TOLERANCE_SECONDS of each other at the same scene collapse into one result,
    the same reasoning as run()'s marker dedup: one spoken line split across cues shouldn't
    become several near-identical results. Returns {"error": "..."} for invalid input,
    otherwise a dict with a "results" list."""
    if not path or not os.path.isdir(path):
        log.error(f"Path does not exist or is not a directory: {path!r}")
        return {"error": "invalid path"}
    if not search:
        log.error("No search text given.")
        return {"error": "no search text"}

    matcher = make_text_matcher(search, whole_word)

    srt_files = list(find_srt_files(path))
    log.info(f"Found {len(srt_files)} .srt file(s) under {path}")

    scene_cache = {}  # path prefix -> scene dict or None
    recent_by_scene = {}  # scene id -> list of seconds already in results, for dedup
    results = []
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

        matches = [(start, text) for start, text in parse_srt(content) if matcher(text)]
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
        recent = recent_by_scene.setdefault(scene_id, [])

        for start, text in matches:
            if any(abs(start - s) <= DEDUP_TOLERANCE_SECONDS for s in recent):
                continue
            recent.append(start)
            results.append(
                {
                    "sceneId": scene_id,
                    "sceneTitle": scene.get("title") or "",
                    "seconds": start,
                    "text": text,
                }
            )

    log.progress(1)
    log.info(
        f"Done. .srt files scanned: {len(srt_files)} | matching cues: {matched_cues} | "
        f"results: {len(results)} | subtitles with no matching scene: {unmatched_srt}"
    )

    return {
        "results": results,
        "matchedCues": matched_cues,
        "unmatchedSrt": unmatched_srt,
    }


def _truthy_arg(value):
    """Plugin args normally arrive as strings (the UI sends them that way), but the
    underlying GraphQL Map scalar can carry any JSON type - tolerate a real bool too rather
    than assuming one or the other."""
    if isinstance(value, bool):
        return value
    return str(value).strip().lower() in ("true", "1", "yes")


def main():
    json_input = json.loads(sys.stdin.read())
    args = json_input.get("args", {})
    stash = StashInterface(json_input["server_connection"])

    path = args.get("path", "")
    search_text = args.get("search", "")
    mode = args.get("mode", "mark")
    whole_word = _truthy_arg(args.get("wholeWord", False))

    if mode == "search":
        result = search(path, search_text, stash, whole_word=whole_word)
    else:
        result = run(
            path=path,
            search=search_text,
            whole_word=whole_word,
            tag_id=args.get("tagId", ""),
            title=args.get("title", ""),
            stash=stash,
        )

    # Matches the JSON-RPC shape Stash expects from a plugin process (pkg/plugin/common/msg.go
    # PluginOutput): "error" set (and "output" absent/ignored) on failure, or "output" holding
    # the whole result on success - this is what runPluginOperation's GraphQL response is
    # built from, so the UI's search mode gets the "results" list back directly.
    if "error" in result:
        print(json.dumps({"error": result["error"]}))
    else:
        print(json.dumps({"output": result}))


if __name__ == "__main__":
    main()
