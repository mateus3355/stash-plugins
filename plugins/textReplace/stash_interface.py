import requests


class StashInterface:
    """Minimal, self-contained GraphQL client for Stash - just the calls
    Text Replace needs. No pip dependency beyond `requests` (already
    required by other plugins in this collection)."""

    def __init__(self, conn):
        scheme = conn.get("Scheme", "http")
        host = conn.get("Host", "localhost")
        if host == "0.0.0.0":
            host = "127.0.0.1"
        port = conn.get("Port", 9999)
        self.url = f"{scheme}://{host}:{port}/graphql"
        self.headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Connection": "keep-alive",
        }
        self.cookies = {}
        session_cookie = conn.get("SessionCookie")
        if session_cookie:
            self.cookies["session"] = session_cookie.get("Value", "")

    def _gql(self, query, variables=None):
        payload = {"query": query}
        if variables is not None:
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
    # Plugin settings
    # ------------------------------------------------------------------

    def get_plugin_settings(self, plugin_id):
        data = self._gql(
            'query Configuration($ids: [ID!]) { configuration { plugins(include: $ids) } }',
            {"ids": [plugin_id]},
        )
        plugins = (data.get("configuration") or {}).get("plugins") or {}
        return plugins.get(plugin_id) or {}

    # ------------------------------------------------------------------
    # Tags
    # ------------------------------------------------------------------

    def find_tags(self, tag_filter, page, per_page):
        query = """
        query FindTags($filter: FindFilterType, $tag_filter: TagFilterType) {
            findTags(filter: $filter, tag_filter: $tag_filter) {
                tags { id name description aliases }
            }
        }
        """
        data = self._gql(query, {"filter": {"page": page, "per_page": per_page}, "tag_filter": tag_filter})
        return data["findTags"]["tags"]

    def update_tag(self, tag_update):
        query = "mutation TagUpdate($input: TagUpdateInput!) { tagUpdate(input: $input) { id } }"
        self._gql(query, {"input": tag_update})

    # ------------------------------------------------------------------
    # Performers
    # ------------------------------------------------------------------

    def find_performers(self, performer_filter, page, per_page):
        query = """
        query FindPerformers($filter: FindFilterType, $performer_filter: PerformerFilterType) {
            findPerformers(filter: $filter, performer_filter: $performer_filter) {
                performers { id name disambiguation details aliases }
            }
        }
        """
        data = self._gql(query, {"filter": {"page": page, "per_page": per_page}, "performer_filter": performer_filter})
        return data["findPerformers"]["performers"]

    def update_performer(self, performer_update):
        query = "mutation PerformerUpdate($input: PerformerUpdateInput!) { performerUpdate(input: $input) { id } }"
        self._gql(query, {"input": performer_update})

    # ------------------------------------------------------------------
    # Studios
    # ------------------------------------------------------------------

    def find_studios(self, studio_filter, page, per_page):
        query = """
        query FindStudios($filter: FindFilterType, $studio_filter: StudioFilterType) {
            findStudios(filter: $filter, studio_filter: $studio_filter) {
                studios { id name details aliases }
            }
        }
        """
        data = self._gql(query, {"filter": {"page": page, "per_page": per_page}, "studio_filter": studio_filter})
        return data["findStudios"]["studios"]

    def update_studio(self, studio_update):
        query = "mutation StudioUpdate($input: StudioUpdateInput!) { studioUpdate(input: $input) { id } }"
        self._gql(query, {"input": studio_update})

    # ------------------------------------------------------------------
    # Scenes
    # ------------------------------------------------------------------

    def find_scenes(self, scene_filter, page, per_page):
        query = """
        query FindScenes($filter: FindFilterType, $scene_filter: SceneFilterType) {
            findScenes(filter: $filter, scene_filter: $scene_filter) {
                scenes { id title details }
            }
        }
        """
        data = self._gql(query, {"filter": {"page": page, "per_page": per_page}, "scene_filter": scene_filter})
        return data["findScenes"]["scenes"]

    def update_scene(self, scene_update):
        query = "mutation SceneUpdate($input: SceneUpdateInput!) { sceneUpdate(input: $input) { id } }"
        self._gql(query, {"input": scene_update})

    # ------------------------------------------------------------------
    # Galleries
    # ------------------------------------------------------------------

    def find_galleries(self, gallery_filter, page, per_page):
        query = """
        query FindGalleries($filter: FindFilterType, $gallery_filter: GalleryFilterType) {
            findGalleries(filter: $filter, gallery_filter: $gallery_filter) {
                galleries { id title details }
            }
        }
        """
        data = self._gql(query, {"filter": {"page": page, "per_page": per_page}, "gallery_filter": gallery_filter})
        return data["findGalleries"]["galleries"]

    def update_gallery(self, gallery_update):
        query = "mutation GalleryUpdate($input: GalleryUpdateInput!) { galleryUpdate(input: $input) { id } }"
        self._gql(query, {"input": gallery_update})

    # ------------------------------------------------------------------
    # Images
    # ------------------------------------------------------------------

    def find_images(self, image_filter, page, per_page):
        query = """
        query FindImages($filter: FindFilterType, $image_filter: ImageFilterType) {
            findImages(filter: $filter, image_filter: $image_filter) {
                images { id title details }
            }
        }
        """
        data = self._gql(query, {"filter": {"page": page, "per_page": per_page}, "image_filter": image_filter})
        return data["findImages"]["images"]

    def update_image(self, image_update):
        query = "mutation ImageUpdate($input: ImageUpdateInput!) { imageUpdate(input: $input) { id } }"
        self._gql(query, {"input": image_update})

    # ------------------------------------------------------------------
    # Groups (aka Movies)
    # ------------------------------------------------------------------

    def find_groups(self, group_filter, page, per_page):
        query = """
        query FindGroups($filter: FindFilterType, $group_filter: GroupFilterType) {
            findGroups(filter: $filter, group_filter: $group_filter) {
                groups { id name synopsis }
            }
        }
        """
        data = self._gql(query, {"filter": {"page": page, "per_page": per_page}, "group_filter": group_filter})
        return data["findGroups"]["groups"]

    def update_group(self, group_update):
        query = "mutation GroupUpdate($input: GroupUpdateInput!) { groupUpdate(input: $input) { id } }"
        self._gql(query, {"input": group_update})

    # ------------------------------------------------------------------
    # Scene Markers (no per-field server-side text filter available, so
    # callers page through all of them and match client-side)
    # ------------------------------------------------------------------

    def find_scene_markers(self, page, per_page):
        query = """
        query FindSceneMarkers($filter: FindFilterType) {
            findSceneMarkers(filter: $filter) {
                scene_markers { id title }
            }
        }
        """
        data = self._gql(query, {"filter": {"page": page, "per_page": per_page}})
        return data["findSceneMarkers"]["scene_markers"]

    def update_scene_marker(self, marker_update):
        query = "mutation SceneMarkerUpdate($input: SceneMarkerUpdateInput!) { sceneMarkerUpdate(input: $input) { id } }"
        self._gql(query, {"input": marker_update})
