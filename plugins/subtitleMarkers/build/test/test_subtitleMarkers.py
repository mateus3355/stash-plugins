import os
import sys
import tempfile
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))

from subtitleMarkers import (
    parse_srt,
    candidate_video_prefixes,
    path_prefix_regex,
    run,
)


class FakeStash:
    """A fake StashInterface: scenes keyed by their video path (not a prefix regex, to
    keep assertions readable), with create_marker recording every call it got."""

    def __init__(self, scenes_by_path, existing_markers=None):
        # scenes_by_path: {video_path: scene_id}
        # existing_markers: {scene_id: [(seconds, tag_id)]}
        self.scenes_by_path = scenes_by_path
        self.existing_markers = existing_markers or {}
        self.created_markers = []  # list of (scene_id, seconds, title, tag_id)

    def find_scene_by_path_prefix(self, regex):
        # The real regex is "^" + re.escape(prefix) + r"\.[^./]+$" - emulate just enough
        # to match our fake video paths without re-implementing escaping.
        import re

        for path, scene_id in self.scenes_by_path.items():
            if re.match(regex, path):
                return {
                    "id": scene_id,
                    "title": f"Scene {scene_id}",
                    "scene_markers": [
                        {"id": "m", "seconds": s, "primary_tag": {"id": t}}
                        for s, t in self.existing_markers.get(scene_id, [])
                    ],
                }
        return None

    def create_marker(self, scene_id, seconds, title, primary_tag_id):
        self.created_markers.append((scene_id, seconds, title, primary_tag_id))
        return {"id": f"marker-{len(self.created_markers)}"}

    def generate_marker_previews(self, marker_ids):
        self.generate_calls = getattr(self, "generate_calls", [])
        self.generate_calls.append(list(marker_ids))
        return "generate-job-1"


class ParseSrtTests(unittest.TestCase):
    def test_parses_basic_cues(self):
        content = (
            "1\n00:00:01,000 --> 00:00:04,000\nHello world\n\n"
            "2\n00:00:05,500 --> 00:00:07,000\nAnother line\n"
        )
        cues = parse_srt(content)
        self.assertEqual(cues, [(1.0, "Hello world"), (5.5, "Another line")])

    def test_joins_multi_line_cue_text(self):
        content = "1\n00:00:01,000 --> 00:00:04,000\nLine one\nLine two\n"
        cues = parse_srt(content)
        self.assertEqual(cues, [(1.0, "Line one Line two")])

    def test_tolerates_malformed_blocks(self):
        content = (
            "garbage block with no timestamp\n\n"
            "1\n00:00:02,250 --> 00:00:03,000\nReal cue\n"
        )
        cues = parse_srt(content)
        self.assertEqual(cues, [(2.25, "Real cue")])

    def test_accepts_period_as_decimal_separator(self):
        # Some generators use a period instead of a comma before milliseconds.
        content = "1\n00:00:01.500 --> 00:00:02.000\nPeriod separator\n"
        cues = parse_srt(content)
        self.assertEqual(cues, [(1.5, "Period separator")])

    def test_empty_content_yields_no_cues(self):
        self.assertEqual(parse_srt(""), [])


class CandidateVideoPrefixesTests(unittest.TestCase):
    def test_non_srt_file_has_no_candidates(self):
        self.assertEqual(candidate_video_prefixes("/lib/movie.txt"), [])

    def test_plain_srt_has_one_candidate(self):
        self.assertEqual(candidate_video_prefixes("/lib/movie.srt"), ["/lib/movie"])

    def test_srt_with_language_code_tries_both_forms(self):
        # Full form (with the language code) first, then the stripped form.
        self.assertEqual(
            candidate_video_prefixes("/lib/movie.en.srt"),
            ["/lib/movie.en", "/lib/movie"],
        )

    def test_non_language_looking_suffix_is_not_stripped(self):
        # "2160p" isn't a 2-3 letter alpha code, so only the full form is tried.
        self.assertEqual(candidate_video_prefixes("/lib/movie.2160p.srt"), ["/lib/movie.2160p"])


class PathPrefixRegexTests(unittest.TestCase):
    def test_matches_exactly_one_extension(self):
        import re

        pattern = path_prefix_regex("/lib/movie")
        self.assertIsNotNone(re.match(pattern, "/lib/movie.mp4"))
        self.assertIsNotNone(re.match(pattern, "/lib/movie.mkv"))

    def test_does_not_match_a_longer_unrelated_filename(self):
        import re

        pattern = path_prefix_regex("/lib/movie")
        self.assertIsNone(re.match(pattern, "/lib/movie2.mp4"))

    def test_does_not_match_a_file_with_an_extra_dot(self):
        import re

        pattern = path_prefix_regex("/lib/movie")
        self.assertIsNone(re.match(pattern, "/lib/movie.en.mp4"))


class RunIntegrationTests(unittest.TestCase):
    def setUp(self):
        self.tmpdir = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmpdir.cleanup)

    def write_srt(self, relpath, content):
        full = os.path.join(self.tmpdir.name, relpath)
        os.makedirs(os.path.dirname(full), exist_ok=True)
        with open(full, "w", encoding="utf-8") as f:
            f.write(content)
        return full

    def test_creates_a_marker_for_a_match_in_a_subfolder(self):
        self.write_srt(
            "sub/movie.srt",
            "1\n00:00:12,000 --> 00:00:14,000\nSomeone said hello there\n",
        )
        video_path = os.path.join(self.tmpdir.name, "sub", "movie.mp4")
        stash = FakeStash({video_path: "scene-1"})

        result = run(self.tmpdir.name, "hello", "tag-1", "Hello match", stash)

        self.assertEqual(result["created"], 1)
        self.assertEqual(stash.created_markers, [("scene-1", 12.0, "Hello match", "tag-1")])
        # Preview generation is queued, scoped to just the marker(s) this run created.
        self.assertEqual(stash.generate_calls, [["marker-1"]])
        self.assertEqual(result["generateJobId"], "generate-job-1")

    def test_does_not_queue_generation_when_nothing_was_created(self):
        self.write_srt("movie.srt", "1\n00:00:10,000 --> 00:00:11,000\nsomething else\n")
        video_path = os.path.join(self.tmpdir.name, "movie.mp4")
        stash = FakeStash({video_path: "scene-1"})

        result = run(self.tmpdir.name, "hello", "tag-1", "t", stash)

        self.assertEqual(getattr(stash, "generate_calls", []), [])
        self.assertIsNone(result["generateJobId"])

    def test_match_is_case_insensitive(self):
        self.write_srt("movie.srt", "1\n00:00:01,000 --> 00:00:02,000\nHELLO there\n")
        video_path = os.path.join(self.tmpdir.name, "movie.mkv")
        stash = FakeStash({video_path: "scene-1"})

        result = run(self.tmpdir.name, "hello", "tag-1", "t", stash)

        self.assertEqual(result["created"], 1)

    def test_skips_near_duplicate_within_tolerance(self):
        # Two cues 1.5s apart both match - the second should be skipped as a near-duplicate
        # of the first (default tolerance is 3s).
        self.write_srt(
            "movie.srt",
            "1\n00:00:10,000 --> 00:00:11,000\nhello\n\n"
            "2\n00:00:11,500 --> 00:00:12,500\nhello again\n",
        )
        video_path = os.path.join(self.tmpdir.name, "movie.mp4")
        stash = FakeStash({video_path: "scene-1"})

        result = run(self.tmpdir.name, "hello", "tag-1", "t", stash)

        self.assertEqual(result["created"], 1)
        self.assertEqual(result["skipped"], 1)
        self.assertEqual(stash.created_markers, [("scene-1", 10.0, "t", "tag-1")])

    def test_skips_duplicate_against_an_existing_marker_from_a_prior_run(self):
        self.write_srt("movie.srt", "1\n00:00:10,000 --> 00:00:11,000\nhello\n")
        video_path = os.path.join(self.tmpdir.name, "movie.mp4")
        stash = FakeStash(
            {video_path: "scene-1"}, existing_markers={"scene-1": [(9.5, "tag-1")]}
        )

        result = run(self.tmpdir.name, "hello", "tag-1", "t", stash)

        self.assertEqual(result["created"], 0)
        self.assertEqual(result["skipped"], 1)

    def test_a_marker_with_a_different_tag_does_not_block_dedup(self):
        self.write_srt("movie.srt", "1\n00:00:10,000 --> 00:00:11,000\nhello\n")
        video_path = os.path.join(self.tmpdir.name, "movie.mp4")
        stash = FakeStash(
            {video_path: "scene-1"}, existing_markers={"scene-1": [(10.0, "other-tag")]}
        )

        result = run(self.tmpdir.name, "hello", "tag-1", "t", stash)

        self.assertEqual(result["created"], 1)

    def test_non_matching_cue_creates_no_marker(self):
        self.write_srt("movie.srt", "1\n00:00:10,000 --> 00:00:11,000\nsomething else\n")
        video_path = os.path.join(self.tmpdir.name, "movie.mp4")
        stash = FakeStash({video_path: "scene-1"})

        result = run(self.tmpdir.name, "hello", "tag-1", "t", stash)

        self.assertEqual(result["created"], 0)
        self.assertEqual(stash.created_markers, [])

    def test_srt_with_no_matching_scene_is_reported_and_skipped(self):
        self.write_srt("orphan.srt", "1\n00:00:01,000 --> 00:00:02,000\nhello\n")
        stash = FakeStash({})  # no scenes at all

        result = run(self.tmpdir.name, "hello", "tag-1", "t", stash)

        self.assertEqual(result["created"], 0)
        self.assertEqual(result["unmatchedSrt"], 1)
        # The cue matched the search text even though it couldn't be attached to a scene -
        # the summary should still count it as a match, not silently drop it.
        self.assertEqual(result["matchedCues"], 1)

    def test_blank_title_falls_back_to_the_search_term(self):
        self.write_srt("movie.srt", "1\n00:00:01,000 --> 00:00:02,000\nhello\n")
        video_path = os.path.join(self.tmpdir.name, "movie.mp4")
        stash = FakeStash({video_path: "scene-1"})

        run(self.tmpdir.name, "hello", "tag-1", "", stash)

        self.assertEqual(stash.created_markers[0][2], "hello")

    def test_invalid_path_errors_without_touching_stash(self):
        stash = FakeStash({})
        result = run("/no/such/path", "hello", "tag-1", "t", stash)
        self.assertEqual(result["output"], "error")
        self.assertEqual(stash.created_markers, [])

    def test_empty_search_errors(self):
        stash = FakeStash({})
        result = run(self.tmpdir.name, "", "tag-1", "t", stash)
        self.assertEqual(result["output"], "error")

    def test_missing_tag_errors(self):
        stash = FakeStash({})
        result = run(self.tmpdir.name, "hello", "", "t", stash)
        self.assertEqual(result["output"], "error")


if __name__ == "__main__":
    unittest.main()
