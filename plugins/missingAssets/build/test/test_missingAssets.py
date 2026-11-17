import os
import sys
import tempfile
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))

from missingAssets import (
    scene_hash,
    sprite_path,
    preview_path,
    marker_screenshot_path,
    scan,
)


class FakeStash:
    """A fake StashInterface - scenes, cover-missing/phash-missing id sets, and
    generatedPath/videoFileNamingAlgorithm all given directly, no network involved."""

    def __init__(self, scenes, generated_path, algorithm="OSHASH", missing_cover=None, missing_phash=None):
        self.scenes = scenes  # list of {id, title, checksum, oshash, scene_markers}
        self.generated_path = generated_path
        self.algorithm = algorithm
        self.missing_cover = missing_cover or []
        self.missing_phash = missing_phash or []

    def get_configuration(self):
        return {"generatedPath": self.generated_path, "videoFileNamingAlgorithm": self.algorithm}

    def count_scenes_missing(self, field):
        return len(self.missing_cover if field == "cover" else self.missing_phash)

    def find_scenes_missing_page(self, field, page, per_page):
        entries = self.missing_cover if field == "cover" else self.missing_phash
        start = (page - 1) * per_page
        return entries[start : start + per_page]

    def find_scenes_page(self, page, per_page):
        start = (page - 1) * per_page
        page_scenes = self.scenes[start : start + per_page]
        return {"count": len(self.scenes), "scenes": page_scenes}


def make_scene(id, title="", checksum=None, oshash=None, markers=None):
    return {
        "id": id,
        "title": title,
        "checksum": checksum,
        "oshash": oshash,
        "scene_markers": markers or [],
    }


class PathHelperTests(unittest.TestCase):
    def test_scene_hash_uses_oshash_by_default(self):
        scene = make_scene("1", checksum="md5abc", oshash="oshash123")
        self.assertEqual(scene_hash(scene, "OSHASH"), "oshash123")

    def test_scene_hash_uses_checksum_for_md5_algorithm(self):
        scene = make_scene("1", checksum="md5abc", oshash="oshash123")
        self.assertEqual(scene_hash(scene, "MD5"), "md5abc")

    def test_scene_hash_is_none_when_that_fingerprint_is_missing(self):
        scene = make_scene("1", checksum=None, oshash="oshash123")
        self.assertIsNone(scene_hash(scene, "MD5"))

    def test_sprite_and_preview_paths(self):
        self.assertEqual(sprite_path("/gen", "abc"), os.path.join("/gen", "vtt", "abc_sprite.jpg"))
        self.assertEqual(preview_path("/gen", "abc"), os.path.join("/gen", "screenshots", "abc.mp4"))

    def test_marker_screenshot_path_truncates_seconds_toward_zero(self):
        # Matches Stash's own generator (internal/manager/task_generate_markers.go:
        # `seconds := int(sceneMarker.Seconds)`) - 12.9s is looked for at "12.jpg", not
        # rounded up to "13.jpg".
        self.assertEqual(
            marker_screenshot_path("/gen", "abc", 12.9),
            os.path.join("/gen", "markers", "abc", "12.jpg"),
        )


class ScanTests(unittest.TestCase):
    def setUp(self):
        self.tmpdir = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmpdir.cleanup)
        self.generated_path = self.tmpdir.name
        os.makedirs(os.path.join(self.generated_path, "vtt"))
        os.makedirs(os.path.join(self.generated_path, "screenshots"))
        os.makedirs(os.path.join(self.generated_path, "markers"))

    def touch(self, *relpath):
        full = os.path.join(self.generated_path, *relpath)
        os.makedirs(os.path.dirname(full), exist_ok=True)
        open(full, "a").close()

    def test_scene_with_everything_present_is_reported_nowhere(self):
        self.touch("vtt", "h1_sprite.jpg")
        self.touch("screenshots", "h1.mp4")
        self.touch("markers", "h1", "30.jpg")
        scene = make_scene("1", "Complete Scene", oshash="h1", markers=[{"id": "m1", "seconds": 30.0}])
        stash = FakeStash([scene], self.generated_path)

        result = scan(stash, page_size=10)

        self.assertEqual(result["missingSprite"], [])
        self.assertEqual(result["missingPreview"], [])
        self.assertEqual(result["missingMarkerPreview"], [])
        self.assertEqual(result["noMarkers"], [])
        self.assertEqual(result["noFingerprint"], [])
        self.assertEqual(result["totalScanned"], 1)

    def test_missing_sprite_and_preview_are_each_reported(self):
        scene = make_scene("1", "Bare Scene", oshash="h1")
        stash = FakeStash([scene], self.generated_path)

        result = scan(stash, page_size=10)

        self.assertEqual(result["missingSprite"], [{"id": "1", "title": "Bare Scene"}])
        self.assertEqual(result["missingPreview"], [{"id": "1", "title": "Bare Scene"}])

    def test_scene_with_no_markers_is_reported_and_not_checked_for_marker_previews(self):
        self.touch("vtt", "h1_sprite.jpg")
        self.touch("screenshots", "h1.mp4")
        scene = make_scene("1", "No Markers Scene", oshash="h1")
        stash = FakeStash([scene], self.generated_path)

        result = scan(stash, page_size=10)

        self.assertEqual(result["noMarkers"], [{"id": "1", "title": "No Markers Scene"}])
        self.assertEqual(result["missingMarkerPreview"], [])

    def test_a_marker_missing_its_own_preview_is_reported_with_its_timestamp(self):
        self.touch("vtt", "h1_sprite.jpg")
        self.touch("screenshots", "h1.mp4")
        scene = make_scene(
            "1", "Marker Scene", oshash="h1", markers=[{"id": "m1", "seconds": 42.5}]
        )
        stash = FakeStash([scene], self.generated_path)

        result = scan(stash, page_size=10)

        self.assertEqual(
            result["missingMarkerPreview"],
            [{"sceneId": "1", "sceneTitle": "Marker Scene", "markerId": "m1", "seconds": 42.5}],
        )
        # A scene with markers (even if their previews are missing) is not "no markers".
        self.assertEqual(result["noMarkers"], [])

    def test_a_marker_whose_preview_exists_is_not_reported(self):
        self.touch("vtt", "h1_sprite.jpg")
        self.touch("screenshots", "h1.mp4")
        self.touch("markers", "h1", "42.jpg")  # 42.5 truncates to 42
        scene = make_scene(
            "1", "Marker Scene", oshash="h1", markers=[{"id": "m1", "seconds": 42.5}]
        )
        stash = FakeStash([scene], self.generated_path)

        result = scan(stash, page_size=10)

        self.assertEqual(result["missingMarkerPreview"], [])

    def test_scene_with_no_fingerprint_of_the_active_algorithm_cannot_be_checked(self):
        scene = make_scene("1", "No Hash Scene", checksum="md5abc", oshash=None)
        stash = FakeStash([scene], self.generated_path, algorithm="OSHASH")

        result = scan(stash, page_size=10)

        self.assertEqual(result["noFingerprint"], [{"id": "1", "title": "No Hash Scene"}])
        # Nothing else gets checked for it - there's no hash to build a path from.
        self.assertEqual(result["missingSprite"], [])
        self.assertEqual(result["missingPreview"], [])
        self.assertEqual(result["noMarkers"], [])

    def test_missing_cover_and_phash_come_from_the_native_filter_not_a_file_check(self):
        scene = make_scene("1", "Scene", oshash="h1")
        self.touch("vtt", "h1_sprite.jpg")
        self.touch("screenshots", "h1.mp4")
        stash = FakeStash(
            [scene],
            self.generated_path,
            missing_cover=[{"id": "1", "title": "Scene"}],
            missing_phash=[{"id": "1", "title": "Scene"}],
        )

        result = scan(stash, page_size=10)

        self.assertEqual(result["missingCover"], [{"id": "1", "title": "Scene"}])
        self.assertEqual(result["missingPhash"], [{"id": "1", "title": "Scene"}])

    def test_paginates_across_multiple_pages_of_scenes(self):
        scenes = [make_scene(str(i), f"Scene {i}", oshash=f"h{i}") for i in range(1, 6)]
        stash = FakeStash(scenes, self.generated_path)

        result = scan(stash, page_size=2)

        self.assertEqual(result["totalScanned"], 5)
        # None of them have their files generated - all 5 should show up as missing sprite.
        self.assertEqual(len(result["missingSprite"]), 5)

    def test_paginates_across_multiple_pages_of_missing_cover_entries(self):
        scene = make_scene("1", "Scene", oshash="h1")
        self.touch("vtt", "h1_sprite.jpg")
        self.touch("screenshots", "h1.mp4")
        missing_cover = [{"id": str(i), "title": f"Scene {i}"} for i in range(1, 6)]
        stash = FakeStash([scene], self.generated_path, missing_cover=missing_cover)

        result = scan(stash, page_size=2)

        self.assertEqual(len(result["missingCover"]), 5)

    def test_empty_library_scans_cleanly(self):
        stash = FakeStash([], self.generated_path)
        result = scan(stash, page_size=10)
        self.assertEqual(result["totalScanned"], 0)
        self.assertEqual(result["missingSprite"], [])


if __name__ == "__main__":
    unittest.main()
