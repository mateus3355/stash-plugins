import requests


class StashInterface:
    def __init__(self, conn):
        scheme = conn.get("Scheme", "http")
        host = conn.get("Host", "localhost")
        port = conn.get("Port", 9999)
        self.url = f"{scheme}://{host}:{port}/graphql"
        self.headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Connection": "keep-alive",
        }
        session_cookie = conn.get("SessionCookie")
        self.cookies = {}
        if session_cookie:
            self.cookies["session"] = session_cookie.get("Value", "")

    def _gql(self, query, variables=None):
        payload = {"query": query}
        if variables:
            payload["variables"] = variables
        resp = requests.post(
            self.url, json=payload, headers=self.headers, cookies=self.cookies
        )
        if resp.status_code != 200:
            raise Exception(f"GraphQL HTTP {resp.status_code}: {resp.text}")
        result = resp.json()
        if result.get("errors"):
            raise Exception(f"GraphQL errors: {result['errors']}")
        return result.get("data", {})

    # ------------------------------------------------------------------
    # Performers
    # ------------------------------------------------------------------

    def find_all_performers(self):
        """Returns a list of performer dicts with id and name."""
        data = self._gql(
            """query { findPerformers(filter: {per_page: -1}) {
              performers { id name }
            }}"""
        )
        return data.get("findPerformers", {}).get("performers", [])

    # ------------------------------------------------------------------
    # Tags
    # ------------------------------------------------------------------

    def find_all_tags(self):
        """Returns a list of tag dicts with id and name."""
        data = self._gql(
            """query { findTags(filter: {per_page: -1}) {
              tags { id name }
            }}"""
        )
        return data.get("findTags", {}).get("tags", [])

    # ------------------------------------------------------------------
    # Scenes — returns file paths for a given scene_filter
    # ------------------------------------------------------------------

    def find_scene_paths(self, scene_filter, limit=10):
        data = self._gql(
            """query FindPaths($sf: SceneFilterType, $f: FindFilterType) {
              findScenes(scene_filter: $sf, filter: $f) {
                scenes { files { path } }
              }
            }""",
            {
                "sf": scene_filter,
                "f": {"per_page": limit, "sort": "date", "direction": "DESC"},
            },
        )
        scenes = data.get("findScenes", {}).get("scenes", [])
        return [f["path"] for s in scenes for f in s.get("files", [])]

    # ------------------------------------------------------------------
    # Scan
    # ------------------------------------------------------------------

    def metadata_scan(self, paths):
        data = self._gql(
            """mutation MetadataScan($input: ScanMetadataInput!) {
              metadataScan(input: $input)
            }""",
            {"input": {"paths": paths}},
        )
        return data.get("metadataScan")

    # ------------------------------------------------------------------
    # Generate
    # ------------------------------------------------------------------

    def metadata_generate(self, paths):
        """Runs the Generate task (covers, sprites, phashes, markers)
        restricted to the given folder paths.
        NOTE: an empty `paths` list means "generate for the whole library",
        so callers must never invoke this with an empty list.
        """
        data = self._gql(
            """mutation FastScanGenerate($input: GenerateMetadataInput!) {
              metadataGenerate(input: $input)
            }""",
            {
                "input": {
                    "paths": paths,
                    "covers": True,
                    "sprites": True,
                    "phashes": True,
                    "imagePhashes": True,
                    "markers": True,
                    "markerScreenshots": True,
                    "previews": False,
                    "imagePreviews": False,
                    "transcodes": False,
                }
            },
        )
        return data.get("metadataGenerate")

    # ------------------------------------------------------------------
    # Auto Tag
    # ------------------------------------------------------------------

    def auto_tag(self, entity_type, entity_id, paths=None):
        """Runs AutoTag for a single performer or tag, optionally
        restricted to the given folder paths.
        """
        entity_key = "performers" if entity_type == "performer" else "tags"
        input_ = {"paths": paths or [], entity_key: [entity_id]}
        data = self._gql(
            """mutation FastScanAutoTag($input: AutoTagMetadataInput!) {
              metadataAutoTag(input: $input)
            }""",
            {"input": input_},
        )
        return data.get("metadataAutoTag")

    # ------------------------------------------------------------------
    # Entity content folders (scenes + images + galleries)
    # ------------------------------------------------------------------

    def _entity_filter(self, entity_type, entity_id):
        entity_key = "performers" if entity_type == "performer" else "tags"
        return {entity_key: {"modifier": "INCLUDES", "value": [entity_id]}}

    def find_entity_folders(self, entity_type, entity_id):
        """Returns the sorted list of unique folders containing every scene,
        image, and gallery associated with the given performer or tag.
        Unlike find_scene_paths(), this is unbounded (per_page: -1) — it's
        meant for the periodic maintenance task, not the interactive button.
        """
        entity_filter = self._entity_filter(entity_type, entity_id)
        folders = set()

        scene_data = self._gql(
            """query FastScanEntityScenes($sf: SceneFilterType, $f: FindFilterType) {
              findScenes(scene_filter: $sf, filter: $f) {
                scenes { files { path } }
              }
            }""",
            {"sf": entity_filter, "f": {"per_page": -1}},
        )
        for scene in scene_data.get("findScenes", {}).get("scenes", []):
            for f in scene.get("files", []):
                folders.add(self._parent_folder(f["path"]))

        image_data = self._gql(
            """query FastScanEntityImages($imf: ImageFilterType, $f: FindFilterType) {
              findImages(image_filter: $imf, filter: $f) {
                images {
                  visual_files {
                    ... on ImageFile { path }
                    ... on VideoFile { path }
                  }
                }
              }
            }""",
            {"imf": entity_filter, "f": {"per_page": -1}},
        )
        for image in image_data.get("findImages", {}).get("images", []):
            for f in image.get("visual_files", []):
                if f.get("path"):
                    folders.add(self._parent_folder(f["path"]))

        gallery_data = self._gql(
            """query FastScanEntityGalleries($gf: GalleryFilterType, $f: FindFilterType) {
              findGalleries(gallery_filter: $gf, filter: $f) {
                galleries {
                  folder { path }
                  files { path }
                }
              }
            }""",
            {"gf": entity_filter, "f": {"per_page": -1}},
        )
        for gallery in gallery_data.get("findGalleries", {}).get("galleries", []):
            folder = gallery.get("folder")
            if folder and folder.get("path"):
                folders.add(folder["path"])
            for f in gallery.get("files", []):
                folders.add(self._parent_folder(f["path"]))

        folders.discard(None)
        folders.discard("")
        return self.collapse_to_minimal_folders(folders)

    @staticmethod
    def _parent_folder(path):
        normalised = path.replace("\\", "/")
        slash = normalised.rfind("/")
        return normalised[:slash] if slash > 0 else normalised

    @staticmethod
    def collapse_to_minimal_folders(folders):
        """Drops any folder that's a subdirectory of another folder already
        in the set. Stash matches `paths` with a `LIKE 'folder/%'` prefix,
        so a parent folder already covers every descendant — passing both
        is redundant. More importantly, each extra path adds one more
        nested `OR (...)` to Stash's generated SQL; a few dozen paths is
        enough to blow SQLite's parser stack ("parser stack overflow"), so
        collapsing here isn't just tidiness, it avoids that failure.
        """
        ordered = sorted({f.rstrip("/") for f in folders if f})
        minimal = []
        for folder in ordered:
            if minimal and (folder == minimal[-1] or folder.startswith(minimal[-1] + "/")):
                continue
            minimal.append(folder)
        return minimal

    # ------------------------------------------------------------------
    # Custom fields
    # ------------------------------------------------------------------

    def set_custom_field(self, entity_type, entity_id, field_name, value):
        """Sets a single custom field (leaving all other custom fields
        untouched) on a performer or tag.
        """
        mutation, id_field = (
            ("performerUpdate", "PerformerUpdateInput")
            if entity_type == "performer"
            else ("tagUpdate", "TagUpdateInput")
        )
        data = self._gql(
            f"""mutation FastScanSetCustomField($input: {id_field}!) {{
              {mutation}(input: $input) {{ id }}
            }}""",
            {
                "input": {
                    "id": entity_id,
                    "custom_fields": {"partial": {field_name: value}},
                }
            },
        )
        return data.get(mutation)
