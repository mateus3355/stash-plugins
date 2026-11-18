import os
import sys
import tempfile
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from missingAssets import (
    CHILD_TAGS,
    PARENT_TAG_NAME,
    primary_file,
    scene_hash,
    sprite_path,
    preview_path,
    marker_screenshot_path,
    scan,
    ensure_tags,
    scan_and_tag,
    remove_tags,
)


class FakeStash:
    """A fake StashInterface - scenes, cover-missing/phash-missing id sets, and
    generatedPath/videoFileNamingAlgorithm all given directly (no network involved), plus a
    real in-memory tag store (id -> {id, name}) and scene/tag membership (tag id -> set of
    scene ids) that create_tag/destroy_tag/bulk_set_tag actually mutate, so the ADD/REMOVE
    diffing in scan_and_tag can be exercised end-to-end."""

    def __init__(
        self,
        scenes,
        generated_path,
        algorithm="OSHASH",
        missing_cover=None,
        missing_phash=None,
        existing_tags=None,
        scene_tags=None,
    ):
        self.scenes = scenes
        self.generated_path = generated_path
        self.algorithm = algorithm
        self.missing_cover = missing_cover or []
        self.missing_phash = missing_phash or []

        self.tags = {}
        self._next_tag_id = 1
        for t in existing_tags or []:
            self.tags[t["id"]] = dict(t)
            self._next_tag_id = max(self._next_tag_id, int(t["id"]) + 1)

        self.scene_tags = {k: set(v) for k, v in (scene_tags or {}).items()}
        self.destroyed_tag_ids = []
        self.bulk_calls = []  # list of (scene_ids, tag_id, mode)

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

    def find_tag(self, name):
        for t in self.tags.values():
            if t["name"] == name:
                return t
        return None

    def create_tag(self, name, description="", parent_ids=None):
        tag_id = str(self._next_tag_id)
        self._next_tag_id += 1
        tag = {"id": tag_id, "name": name, "parent_ids": list(parent_ids or [])}
        self.tags[tag_id] = tag
        return tag

    def destroy_tag(self, tag_id):
        self.destroyed_tag_ids.append(tag_id)
        self.tags.pop(tag_id, None)
        self.scene_tags.pop(tag_id, None)

    def find_scene_ids_with_tag(self, tag_id):
        return set(self.scene_tags.get(tag_id, set()))

    def bulk_set_tag(self, scene_ids, tag_id, mode):
        self.bulk_calls.append((list(scene_ids), tag_id, mode))
        current = self.scene_tags.setdefault(tag_id, set())
        if mode == "ADD":
            current.update(scene_ids)
        elif mode == "REMOVE":
            current.difference_update(scene_ids)


def make_file(id, fingerprints):
    return {"id": id, "fingerprints": [{"type": t, "value": v} for t, v in fingerprints.items()]}


def make_scene(id, title="", files=None, markers=None):
    return {
        "id": id,
        "title": title,
        "files": files or [],
        "scene_markers": markers or [],
    }


class PrimaryFileAndHashTests(unittest.TestCase):
    def test_primary_file_defaults_to_the_first_file(self):
        # There's no primary_file_id on the real Scene type (despite being in the raw
        # .graphql schema source - stale there too, same as checksum/oshash), so files[0] is
        # the only available stand-in.
        f1 = make_file("f1", {"oshash": "h1"})
        f2 = make_file("f2", {"oshash": "h2"})
        scene = make_scene("1", files=[f1, f2])
        self.assertEqual(primary_file(scene), f1)

    def test_primary_file_is_none_with_no_files(self):
        self.assertIsNone(primary_file(make_scene("1")))

    def test_scene_hash_uses_oshash_by_default(self):
        scene = make_scene("1", files=[make_file("f1", {"md5": "md5abc", "oshash": "oshash123"})])
        self.assertEqual(scene_hash(scene, "OSHASH"), "oshash123")

    def test_scene_hash_uses_md5_for_md5_algorithm(self):
        scene = make_scene("1", files=[make_file("f1", {"md5": "md5abc", "oshash": "oshash123"})])
        self.assertEqual(scene_hash(scene, "MD5"), "md5abc")

    def test_scene_hash_is_none_when_that_fingerprint_type_is_missing(self):
        scene = make_scene("1", files=[make_file("f1", {"oshash": "oshash123"})])
        self.assertIsNone(scene_hash(scene, "MD5"))

    def test_scene_hash_is_none_with_no_files_at_all(self):
        self.assertIsNone(scene_hash(make_scene("1"), "OSHASH"))


class PathHelperTests(unittest.TestCase):
    def test_sprite_and_preview_paths(self):
        self.assertEqual(sprite_path("/gen", "abc"), os.path.join("/gen", "vtt", "abc_sprite.jpg"))
        self.assertEqual(preview_path("/gen", "abc"), os.path.join("/gen", "screenshots", "abc.mp4"))

    def test_marker_screenshot_path_truncates_seconds_toward_zero(self):
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

    def oshash_scene(self, id, title, h, markers=None):
        return make_scene(id, title, files=[make_file("f-" + id, {"oshash": h})], markers=markers)

    def test_scene_with_everything_present_is_reported_nowhere(self):
        self.touch("vtt", "h1_sprite.jpg")
        self.touch("screenshots", "h1.mp4")
        self.touch("markers", "h1", "30.jpg")
        scene = self.oshash_scene("1", "Complete Scene", "h1", markers=[{"id": "m1", "seconds": 30.0}])
        stash = FakeStash([scene], self.generated_path)

        result = scan(stash, page_size=10)

        self.assertEqual(result["missingSprite"], [])
        self.assertEqual(result["missingPreview"], [])
        self.assertEqual(result["missingMarkerPreview"], [])
        self.assertEqual(result["noMarkers"], [])
        self.assertEqual(result["noFingerprint"], [])
        self.assertEqual(result["totalScanned"], 1)

    def test_missing_sprite_and_preview_are_each_reported(self):
        scene = self.oshash_scene("1", "Bare Scene", "h1")
        stash = FakeStash([scene], self.generated_path)

        result = scan(stash, page_size=10)

        self.assertEqual(result["missingSprite"], [{"id": "1", "title": "Bare Scene"}])
        self.assertEqual(result["missingPreview"], [{"id": "1", "title": "Bare Scene"}])

    def test_scene_with_no_markers_is_reported_and_not_checked_for_marker_previews(self):
        self.touch("vtt", "h1_sprite.jpg")
        self.touch("screenshots", "h1.mp4")
        scene = self.oshash_scene("1", "No Markers Scene", "h1")
        stash = FakeStash([scene], self.generated_path)

        result = scan(stash, page_size=10)

        self.assertEqual(result["noMarkers"], [{"id": "1", "title": "No Markers Scene"}])
        self.assertEqual(result["missingMarkerPreview"], [])

    def test_a_marker_missing_its_own_preview_is_reported_with_its_timestamp(self):
        self.touch("vtt", "h1_sprite.jpg")
        self.touch("screenshots", "h1.mp4")
        scene = self.oshash_scene("1", "Marker Scene", "h1", markers=[{"id": "m1", "seconds": 42.5}])
        stash = FakeStash([scene], self.generated_path)

        result = scan(stash, page_size=10)

        self.assertEqual(
            result["missingMarkerPreview"],
            [{"sceneId": "1", "sceneTitle": "Marker Scene", "markerId": "m1", "seconds": 42.5}],
        )
        self.assertEqual(result["noMarkers"], [])

    def test_a_marker_whose_preview_exists_is_not_reported(self):
        self.touch("vtt", "h1_sprite.jpg")
        self.touch("screenshots", "h1.mp4")
        self.touch("markers", "h1", "42.jpg")
        scene = self.oshash_scene("1", "Marker Scene", "h1", markers=[{"id": "m1", "seconds": 42.5}])
        stash = FakeStash([scene], self.generated_path)

        result = scan(stash, page_size=10)

        self.assertEqual(result["missingMarkerPreview"], [])

    def test_scene_with_no_fingerprint_of_the_active_algorithm_cannot_be_checked(self):
        scene = make_scene("1", "No Hash Scene", files=[make_file("f1", {"md5": "md5abc"})])
        stash = FakeStash([scene], self.generated_path, algorithm="OSHASH")

        result = scan(stash, page_size=10)

        self.assertEqual(result["noFingerprint"], [{"id": "1", "title": "No Hash Scene"}])
        self.assertEqual(result["missingSprite"], [])
        self.assertEqual(result["missingPreview"], [])
        self.assertEqual(result["noMarkers"], [])

    def test_missing_cover_and_phash_come_from_the_native_filter_not_a_file_check(self):
        scene = self.oshash_scene("1", "Scene", "h1")
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
        scenes = [self.oshash_scene(str(i), f"Scene {i}", f"h{i}") for i in range(1, 6)]
        stash = FakeStash(scenes, self.generated_path)

        result = scan(stash, page_size=2)

        self.assertEqual(result["totalScanned"], 5)
        self.assertEqual(len(result["missingSprite"]), 5)

    def test_empty_library_scans_cleanly(self):
        stash = FakeStash([], self.generated_path)
        result = scan(stash, page_size=10)
        self.assertEqual(result["totalScanned"], 0)
        self.assertEqual(result["missingSprite"], [])


class EnsureTagsTests(unittest.TestCase):
    def test_creates_the_parent_and_all_seven_children_when_none_exist(self):
        stash = FakeStash([], "/gen")

        tag_ids = ensure_tags(stash)

        self.assertEqual(len(tag_ids), len(CHILD_TAGS))
        parent = stash.find_tag(PARENT_TAG_NAME)
        self.assertIsNotNone(parent)
        for key, name, _ in CHILD_TAGS:
            tag = stash.tags[tag_ids[key]]
            self.assertEqual(tag["name"], name)
            self.assertEqual(tag["parent_ids"], [parent["id"]])

    def test_reuses_tags_that_already_exist_instead_of_recreating_them(self):
        existing_parent = {"id": "1", "name": PARENT_TAG_NAME, "parent_ids": []}
        existing_child = {"id": "2", "name": CHILD_TAGS[0][1], "parent_ids": ["1"]}
        stash = FakeStash([], "/gen", existing_tags=[existing_parent, existing_child])

        tag_ids = ensure_tags(stash)

        self.assertEqual(tag_ids[CHILD_TAGS[0][0]], "2")
        # Only the 6 still-missing children got created, not an 8th parent or a duplicate.
        self.assertEqual(len(stash.tags), 1 + len(CHILD_TAGS))


class ScanAndTagTests(unittest.TestCase):
    def setUp(self):
        self.tmpdir = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmpdir.cleanup)
        self.generated_path = self.tmpdir.name
        os.makedirs(os.path.join(self.generated_path, "vtt"))
        os.makedirs(os.path.join(self.generated_path, "screenshots"))
        os.makedirs(os.path.join(self.generated_path, "markers"))

    def test_tags_a_newly_missing_scene(self):
        scene = make_scene("1", "Bare Scene", files=[make_file("f1", {"oshash": "h1"})])
        stash = FakeStash([scene], self.generated_path)

        scan_and_tag(stash)

        sprite_tag = stash.find_tag("Missing Sprite")
        self.assertEqual(stash.find_scene_ids_with_tag(sprite_tag["id"]), {"1"})

    def test_untags_a_scene_that_no_longer_qualifies(self):
        # Scene "1" used to be missing its sprite (hence already tagged), but the file exists
        # now - re-running must take the tag back off, not leave it stale.
        scene = make_scene("1", "Fixed Scene", files=[make_file("f1", {"oshash": "h1"})])
        open(os.path.join(self.generated_path, "vtt", "h1_sprite.jpg"), "a").close()
        open(os.path.join(self.generated_path, "screenshots", "h1.mp4"), "a").close()

        existing_parent = {"id": "1", "name": PARENT_TAG_NAME, "parent_ids": []}
        existing_sprite_tag = {"id": "2", "name": "Missing Sprite", "parent_ids": ["1"]}
        stash = FakeStash(
            [scene],
            self.generated_path,
            existing_tags=[existing_parent, existing_sprite_tag],
            scene_tags={"2": {"1"}},
        )

        scan_and_tag(stash)

        self.assertEqual(stash.find_scene_ids_with_tag("2"), set())
        self.assertIn((["1"], "2", "REMOVE"), stash.bulk_calls)

    def test_a_scene_that_still_qualifies_is_left_tagged_and_not_re_added(self):
        scene = make_scene("1", "Still Bare", files=[make_file("f1", {"oshash": "h1"})])
        existing_parent = {"id": "1", "name": PARENT_TAG_NAME, "parent_ids": []}
        existing_sprite_tag = {"id": "2", "name": "Missing Sprite", "parent_ids": ["1"]}
        stash = FakeStash(
            [scene],
            self.generated_path,
            existing_tags=[existing_parent, existing_sprite_tag],
            scene_tags={"2": {"1"}},
        )

        scan_and_tag(stash)

        self.assertEqual(stash.find_scene_ids_with_tag("2"), {"1"})
        # No bulk call was needed at all for this tag - already exactly right.
        self.assertFalse(any(t == "2" for _, t, _ in stash.bulk_calls))


class RemoveTagsTests(unittest.TestCase):
    def test_untags_every_scene_and_destroys_every_tag_this_plugin_made(self):
        parent = {"id": "1", "name": PARENT_TAG_NAME, "parent_ids": []}
        sprite_tag = {"id": "2", "name": "Missing Sprite", "parent_ids": ["1"]}
        stash = FakeStash(
            [], "/gen", existing_tags=[parent, sprite_tag], scene_tags={"2": {"5", "6"}}
        )

        remove_tags(stash)

        self.assertEqual(set(stash.destroyed_tag_ids), {"1", "2"})
        self.assertEqual(stash.tags, {})

    def test_does_nothing_destructive_when_no_tags_exist_yet(self):
        stash = FakeStash([], "/gen")
        remove_tags(stash)  # must not raise
        self.assertEqual(stash.destroyed_tag_ids, [])


if __name__ == "__main__":
    unittest.main()
