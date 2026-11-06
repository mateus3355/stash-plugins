import json
import os
import sys
import tempfile
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))

from subtitleMarkers import (
    parse_srt,
    candidate_video_prefixes,
    path_prefix_regex,
    find_srt_files,
    _translate_gitignore_pattern,
    make_text_matcher,
    run,
    search,
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

    def test_strips_html_style_formatting_tags(self):
        # A phrase split by a closing tag ("<i>failed</i> to complete") must still read as
        # one continuous phrase, or a search for "failed to" would never match it.
        content = "1\n00:00:01,000 --> 00:00:02,000\nThe operation <i>failed</i> to complete\n"
        cues = parse_srt(content)
        self.assertEqual(cues, [(1.0, "The operation failed to complete")])

    def test_strips_font_color_tags(self):
        content = '1\n00:00:01,000 --> 00:00:02,000\n<font color="#ffff00">Careful</font> now\n'
        cues = parse_srt(content)
        self.assertEqual(cues, [(1.0, "Careful now")])

    def test_strips_ass_override_blocks(self):
        content = "1\n00:00:01,000 --> 00:00:02,000\n{\\an8}Top of screen\n"
        cues = parse_srt(content)
        self.assertEqual(cues, [(1.0, "Top of screen")])

    def test_a_formatting_only_line_does_not_leave_a_stray_space(self):
        content = "1\n00:00:01,000 --> 00:00:03,000\n<i>\nSpoken line\n</i>\n"
        cues = parse_srt(content)
        self.assertEqual(cues, [(1.0, "Spoken line")])


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


class GitignorePatternTests(unittest.TestCase):
    """@see docs on _translate_gitignore_pattern for the anchoring rule being tested."""

    def matches(self, pattern, rel_path):
        return bool(_translate_gitignore_pattern(pattern).match(rel_path))

    def test_bare_name_matches_at_any_depth(self):
        self.assertTrue(self.matches("temp", "temp"))
        self.assertTrue(self.matches("temp", "sub/temp"))
        self.assertTrue(self.matches("temp", "a/b/c/temp"))

    def test_pattern_with_a_slash_is_anchored_to_its_own_directory(self):
        self.assertTrue(self.matches("sub/temp", "sub/temp"))
        self.assertFalse(self.matches("sub/temp", "other/sub/temp"))

    def test_leading_slash_anchors_explicitly(self):
        self.assertTrue(self.matches("/temp", "temp"))
        self.assertFalse(self.matches("/temp", "sub/temp"))

    def test_unanchored_bare_glob_matches_the_basename_at_any_depth(self):
        # No literal "/" in the pattern, so (like a bare name) it matches wherever the
        # basename is found - the same reason a plain *.log .gitignore entry ignores
        # logs in every subfolder, not just the root.
        self.assertTrue(self.matches("*.srt", "movie.srt"))
        self.assertTrue(self.matches("*.srt", "sub/movie.srt"))

    def test_star_does_not_cross_a_path_separator_within_an_anchored_pattern(self):
        # Anchored (has a "/" elsewhere in the pattern) - here "*" must stay inside the
        # "sub" segment, not expand into "sub/extra".
        self.assertTrue(self.matches("sub*/movie.srt", "sub/movie.srt"))
        self.assertFalse(self.matches("sub*/movie.srt", "sub/extra/movie.srt"))

    def test_double_star_crosses_path_separators(self):
        self.assertTrue(self.matches("**/temp", "temp"))
        self.assertTrue(self.matches("**/temp", "a/b/temp"))

    def test_question_mark_matches_one_character_not_a_separator(self):
        self.assertTrue(self.matches("movie?.srt", "movie1.srt"))
        self.assertFalse(self.matches("movie?.srt", "movie12.srt"))
        self.assertFalse(self.matches("movie?.srt", "movie/.srt"))

    def test_character_class(self):
        self.assertTrue(self.matches("movie[12].srt", "movie1.srt"))
        self.assertFalse(self.matches("movie[12].srt", "movie3.srt"))


class FindSrtFilesStashignoreTests(unittest.TestCase):
    """@see docs/README's "How it works" - folders and files a .stashignore excludes are
    skipped the same way Stash's own library scan skips them."""

    def setUp(self):
        self.tmpdir = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmpdir.cleanup)

    def write(self, relpath, content=""):
        full = os.path.join(self.tmpdir.name, relpath)
        os.makedirs(os.path.dirname(full), exist_ok=True)
        with open(full, "w", encoding="utf-8") as f:
            f.write(content)
        return full

    def found(self):
        return {os.path.relpath(p, self.tmpdir.name) for p in find_srt_files(self.tmpdir.name)}

    def test_no_stashignore_finds_everything(self):
        self.write("a.srt")
        self.write("sub/b.srt")
        self.assertEqual(self.found(), {"a.srt", os.path.join("sub", "b.srt")})

    def test_wildcard_ignores_everything_in_that_folder_only(self):
        self.write("ignored/a.srt")
        self.write("ignored/sub/b.srt")
        self.write("kept/c.srt")
        self.write("ignored/.stashignore", "*\n")

        self.assertEqual(self.found(), {os.path.join("kept", "c.srt")})

    def test_never_descends_into_an_ignored_folder(self):
        # A subfolder of an ignored folder is never even walked, not just filtered out of
        # the results afterwards - matches Stash's own scanner (fs.SkipDir). A real,
        # unreadable directory would raise if os.walk tried to list it; os.walk silently
        # skips unreadable dirs by default instead, so the walked-paths spy below is the
        # direct way to prove the prune, not just an output-equivalent one.
        import unittest.mock

        self.write("ignored/sub/deep/c.srt")
        self.write("ignored/.stashignore", "*\n")

        real_walk = os.walk
        walked = []

        def spying_walk(*args, **kwargs):
            for dirpath, dirnames, filenames in real_walk(*args, **kwargs):
                walked.append(dirpath)
                yield dirpath, dirnames, filenames

        with unittest.mock.patch("subtitleMarkers.os.walk", side_effect=spying_walk):
            list(find_srt_files(self.tmpdir.name))

        self.assertNotIn(os.path.join(self.tmpdir.name, "ignored", "sub"), walked)
        self.assertNotIn(os.path.join(self.tmpdir.name, "ignored", "sub", "deep"), walked)

    def test_ignores_a_specific_file_by_name(self):
        self.write("a.srt")
        self.write("b.srt")
        self.write(".stashignore", "b.srt\n")

        self.assertEqual(self.found(), {"a.srt"})

    def test_applies_hierarchically_to_subfolders(self):
        self.write("sub/a.srt")
        self.write(".stashignore", "*.srt\n")

        self.assertEqual(self.found(), set())

    def test_double_star_directory_pattern_matches_at_any_depth(self):
        # Mirrors Stash's own TestStashIgnore_DoubleStarPattern (pkg/file/stashignore_test.go):
        # "**/temp/" excludes every "temp" folder, however deep, but leaves siblings alone.
        self.write("a/video2.srt")
        self.write("a/temp/video3.srt")
        self.write("a/b/temp/video4.srt")
        self.write(".stashignore", "**/temp/\n")

        self.assertEqual(self.found(), {os.path.join("a", "video2.srt")})

    def test_negation_un_ignores_within_a_more_specific_stashignore(self):
        self.write("sub/keep-me.srt")
        self.write("sub/skip-me.srt")
        self.write(".stashignore", "*.srt\n")
        self.write("sub/.stashignore", "!keep-me.srt\n")

        self.assertEqual(self.found(), {os.path.join("sub", "keep-me.srt")})

    def test_comment_and_blank_lines_are_ignored(self):
        self.write("a.srt")
        self.write(".stashignore", "# a comment\n\n   \n")

        self.assertEqual(self.found(), {"a.srt"})

    def test_empty_stashignore_ignores_nothing(self):
        self.write("a.srt")
        self.write(".stashignore", "")

        self.assertEqual(self.found(), {"a.srt"})


class MakeTextMatcherTests(unittest.TestCase):
    def test_default_is_a_case_insensitive_substring_match(self):
        matcher = make_text_matcher("fail", whole_word=False)
        self.assertTrue(matcher("The operation FAILED to complete"))

    def test_whole_word_rejects_a_longer_word_containing_it(self):
        matcher = make_text_matcher("fail", whole_word=True)
        self.assertFalse(matcher("The operation failed to complete"))
        self.assertFalse(matcher("a failure happened"))

    def test_whole_word_matches_the_exact_word_case_insensitively(self):
        matcher = make_text_matcher("fail", whole_word=True)
        self.assertTrue(matcher("The test did FAIL today"))

    def test_whole_word_matches_a_multi_word_phrase_as_a_unit(self):
        matcher = make_text_matcher("fail to respond", whole_word=True)
        self.assertTrue(matcher("the server did fail to respond again"))
        # "respondent" continues past "respond" with no boundary in between - the phrase's
        # own trailing \b must still hold, not just match as a loose prefix.
        self.assertFalse(matcher("the server did fail to respondent requests"))

    def test_whole_word_treats_search_text_literally_not_as_a_pattern(self):
        # A "." in the search text must match a literal ".", not "any character" - whole_word
        # must not turn user-provided text into a regex of its own.
        matcher = make_text_matcher("a.b", whole_word=True)
        self.assertTrue(matcher("it was a.b exactly"))
        self.assertFalse(matcher("it was axb instead"))


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

    def test_search_matches_as_a_substring_within_a_word(self):
        # "fail" must match "failed" (and "failure", "failing", ...) - a plain substring
        # search, not a whole-word-only one.
        self.write_srt("movie.srt", "1\n00:00:05,000 --> 00:00:06,000\nThe operation failed to complete\n")
        video_path = os.path.join(self.tmpdir.name, "movie.mp4")
        stash = FakeStash({video_path: "scene-1"})

        result = run(self.tmpdir.name, "fail", "tag-1", "t", stash)

        self.assertEqual(result["created"], 1)

    def test_search_matches_a_phrase_split_by_an_inline_formatting_tag(self):
        self.write_srt(
            "movie.srt",
            "1\n00:00:05,000 --> 00:00:06,000\nThe operation <i>failed</i> to complete\n",
        )
        video_path = os.path.join(self.tmpdir.name, "movie.mp4")
        stash = FakeStash({video_path: "scene-1"})

        result = run(self.tmpdir.name, "failed to", "tag-1", "t", stash)

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
        self.assertEqual(result["error"], "invalid path")
        self.assertEqual(stash.created_markers, [])

    def test_empty_search_errors(self):
        stash = FakeStash({})
        result = run(self.tmpdir.name, "", "tag-1", "t", stash)
        self.assertIn("error", result)

    def test_missing_tag_errors(self):
        stash = FakeStash({})
        result = run(self.tmpdir.name, "hello", "", "t", stash)
        self.assertIn("error", result)

    def test_whole_word_off_by_default_still_matches_substrings(self):
        self.write_srt("movie.srt", "1\n00:00:05,000 --> 00:00:06,000\nThe operation failed to complete\n")
        video_path = os.path.join(self.tmpdir.name, "movie.mp4")
        stash = FakeStash({video_path: "scene-1"})

        result = run(self.tmpdir.name, "fail", "tag-1", "t", stash)

        self.assertEqual(result["created"], 1)

    def test_whole_word_on_rejects_a_substring_match(self):
        self.write_srt("movie.srt", "1\n00:00:05,000 --> 00:00:06,000\nThe operation failed to complete\n")
        video_path = os.path.join(self.tmpdir.name, "movie.mp4")
        stash = FakeStash({video_path: "scene-1"})

        result = run(self.tmpdir.name, "fail", "tag-1", "t", stash, whole_word=True)

        self.assertEqual(result["created"], 0)
        self.assertEqual(stash.created_markers, [])

    def test_whole_word_on_still_matches_the_exact_word(self):
        self.write_srt("movie.srt", "1\n00:00:05,000 --> 00:00:06,000\nThe test did fail today\n")
        video_path = os.path.join(self.tmpdir.name, "movie.mp4")
        stash = FakeStash({video_path: "scene-1"})

        result = run(self.tmpdir.name, "fail", "tag-1", "t", stash, whole_word=True)

        self.assertEqual(result["created"], 1)


class SearchTests(unittest.TestCase):
    """search() - find matches and link straight to the scene at that timestamp, without
    creating any markers (no tag/title needed)."""

    def setUp(self):
        self.tmpdir = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmpdir.cleanup)

    def write_srt(self, relpath, content):
        full = os.path.join(self.tmpdir.name, relpath)
        os.makedirs(os.path.dirname(full), exist_ok=True)
        with open(full, "w", encoding="utf-8") as f:
            f.write(content)
        return full

    def test_finds_a_match_without_creating_any_marker(self):
        self.write_srt("movie.srt", "1\n00:00:12,000 --> 00:00:14,000\nSomeone said hello there\n")
        video_path = os.path.join(self.tmpdir.name, "movie.mp4")
        stash = FakeStash({video_path: "scene-1"})

        result = search(self.tmpdir.name, "hello", stash)

        self.assertEqual(
            result["results"],
            [{"sceneId": "scene-1", "sceneTitle": "Scene scene-1", "seconds": 12.0, "text": "Someone said hello there"}],
        )
        self.assertEqual(stash.created_markers, [])
        self.assertEqual(getattr(stash, "generate_calls", []), [])

    def test_collapses_near_duplicate_matches_in_the_same_scene(self):
        self.write_srt(
            "movie.srt",
            "1\n00:00:10,000 --> 00:00:11,000\nhello\n\n"
            "2\n00:00:11,500 --> 00:00:12,500\nhello again\n",
        )
        video_path = os.path.join(self.tmpdir.name, "movie.mp4")
        stash = FakeStash({video_path: "scene-1"})

        result = search(self.tmpdir.name, "hello", stash)

        self.assertEqual(len(result["results"]), 1)
        self.assertEqual(result["results"][0]["seconds"], 10.0)

    def test_srt_with_no_matching_scene_is_reported_and_skipped(self):
        self.write_srt("orphan.srt", "1\n00:00:01,000 --> 00:00:02,000\nhello\n")
        stash = FakeStash({})

        result = search(self.tmpdir.name, "hello", stash)

        self.assertEqual(result["results"], [])
        self.assertEqual(result["unmatchedSrt"], 1)

    def test_invalid_path_errors(self):
        stash = FakeStash({})
        result = search("/no/such/path", "hello", stash)
        self.assertEqual(result["error"], "invalid path")

    def test_empty_search_errors(self):
        stash = FakeStash({})
        result = search(self.tmpdir.name, "", stash)
        self.assertIn("error", result)

    def test_whole_word_on_rejects_a_substring_match(self):
        self.write_srt("movie.srt", "1\n00:00:05,000 --> 00:00:06,000\nThe operation failed to complete\n")
        video_path = os.path.join(self.tmpdir.name, "movie.mp4")
        stash = FakeStash({video_path: "scene-1"})

        result = search(self.tmpdir.name, "fail", stash, whole_word=True)

        self.assertEqual(result["results"], [])

    def test_whole_word_on_still_matches_the_exact_word(self):
        self.write_srt("movie.srt", "1\n00:00:05,000 --> 00:00:06,000\nThe test did fail today\n")
        video_path = os.path.join(self.tmpdir.name, "movie.mp4")
        stash = FakeStash({video_path: "scene-1"})

        result = search(self.tmpdir.name, "fail", stash, whole_word=True)

        self.assertEqual(len(result["results"]), 1)


class MainOutputEnvelopeTests(unittest.TestCase):
    """main()'s stdout must match Stash's plugin JSON-RPC protocol (pkg/plugin/common/msg.go
    PluginOutput): {"output": <whatever the mode's function returned>} on success, or
    {"error": "..."} on failure - this is what runPluginOperation's GraphQL response is
    built from, so getting the envelope wrong would silently break the UI's search results."""

    def setUp(self):
        self.tmpdir = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmpdir.cleanup)

    def run_main(self, args, monkeypatch_stash):
        import io
        import contextlib
        import unittest.mock
        import subtitleMarkers

        stdin = json.dumps({"server_connection": {}, "args": args})
        real_stash_interface = subtitleMarkers.StashInterface
        subtitleMarkers.StashInterface = lambda conn: monkeypatch_stash
        out = io.StringIO()
        try:
            with contextlib.redirect_stdout(out), unittest.mock.patch("sys.stdin", io.StringIO(stdin)):
                subtitleMarkers.main()
        finally:
            subtitleMarkers.StashInterface = real_stash_interface
        return json.loads(out.getvalue())

    def test_search_mode_wraps_its_result_under_output(self):
        path = self.tmpdir.name
        full = os.path.join(path, "movie.srt")
        with open(full, "w", encoding="utf-8") as f:
            f.write("1\n00:00:01,000 --> 00:00:02,000\nhello\n")
        video_path = os.path.join(path, "movie.mp4")
        stash = FakeStash({video_path: "scene-1"})

        printed = self.run_main({"mode": "search", "path": path, "search": "hello"}, stash)

        self.assertEqual(printed["output"]["results"][0]["sceneId"], "scene-1")
        self.assertNotIn("error", printed)

    def test_invalid_input_is_an_error_key_with_no_output(self):
        stash = FakeStash({})

        printed = self.run_main({"mode": "search", "path": "/no/such/path", "search": "hello"}, stash)

        self.assertEqual(printed, {"error": "invalid path"})

    def test_mark_mode_is_still_the_default_when_mode_is_omitted(self):
        full = os.path.join(self.tmpdir.name, "movie.srt")
        with open(full, "w", encoding="utf-8") as f:
            f.write("1\n00:00:01,000 --> 00:00:02,000\nhello\n")
        video_path = os.path.join(self.tmpdir.name, "movie.mp4")
        stash = FakeStash({video_path: "scene-1"})

        printed = self.run_main(
            {"path": self.tmpdir.name, "search": "hello", "tagId": "tag-1", "title": "t"}, stash
        )

        self.assertEqual(printed["output"]["created"], 1)
        self.assertEqual(stash.created_markers[0][0], "scene-1")


if __name__ == "__main__":
    unittest.main()
