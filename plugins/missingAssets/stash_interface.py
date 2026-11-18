class StashInterface:
    def __init__(self, conn):
        # Imported here, not at module level, so this module (and missingAssets.py, which
        # imports it) can still be imported for testing its non-network logic without
        # `requests` installed - it's still required the moment this class is actually used.
        import requests

        self._requests = requests
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
        resp = self._requests.post(
            self.url, json=payload, headers=self.headers, cookies=self.cookies
        )
        if resp.status_code != 200:
            raise Exception(
                f"GraphQL HTTP error {resp.status_code}: {resp.text}\nQuery: {query}"
            )
        result = resp.json()
        if result.get("errors"):
            raise Exception(f"GraphQL errors: {result['errors']}")
        return result.get("data", {})

    # ------------------------------------------------------------------
    # Configuration
    # ------------------------------------------------------------------

    def get_configuration(self):
        """generatedPath and videoFileNamingAlgorithm - both needed to compute where a
        generated file (sprite/preview/marker preview) would live on disk for a given scene,
        since Stash doesn't track their existence in the database at all (unlike cover/phash,
        which are real columns/rows and so have their own native is_missing filter)."""
        query = """
query MissingAssetsConfiguration {
  configuration {
    general {
      generatedPath
      videoFileNamingAlgorithm
    }
  }
}"""
        data = self._gql(query)
        return data["configuration"]["general"]

    # ------------------------------------------------------------------
    # Tags
    # ------------------------------------------------------------------

    def find_tag(self, name):
        query = """
query MissingAssetsFindTag($filter: String!) {
  findTags(tag_filter: { name: { value: $filter, modifier: EQUALS } }) {
    tags { id name }
  }
}"""
        data = self._gql(query, {"filter": name})
        for tag in data.get("findTags", {}).get("tags", []):
            if tag["name"] == name:
                return tag
        return None

    def create_tag(self, name, description="", parent_ids=None):
        query = """
mutation MissingAssetsTagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) { id name }
}"""
        input_ = {"name": name, "description": description}
        if parent_ids:
            input_["parent_ids"] = parent_ids
        data = self._gql(query, {"input": input_})
        return data.get("tagCreate")

    def destroy_tag(self, tag_id):
        query = """
mutation MissingAssetsTagDestroy($input: TagDestroyInput!) {
  tagDestroy(input: $input)
}"""
        self._gql(query, {"input": {"id": tag_id}})

    # ------------------------------------------------------------------
    # Scenes
    # ------------------------------------------------------------------

    def count_scenes_missing(self, field):
        """A quick count for a native is_missing field (cover/phash) - these are real
        database columns/rows, so the database itself can answer this without walking every
        scene, unlike the file-based checks this plugin otherwise has to do."""
        query = """
query MissingAssetsCount($isMissing: String) {
  findScenes(scene_filter: { is_missing: $isMissing }, filter: { per_page: 0 }) {
    count
  }
}"""
        data = self._gql(query, {"isMissing": field})
        return data["findScenes"]["count"]

    def find_scenes_missing_page(self, field, page, per_page):
        """One page of {id, title} for a native is_missing field (cover/phash)."""
        query = """
query MissingAssetsMissingPage($isMissing: String, $page: Int!, $perPage: Int!) {
  findScenes(
    scene_filter: { is_missing: $isMissing }
    filter: { page: $page, per_page: $perPage, sort: "id", direction: ASC }
  ) {
    scenes { id title }
  }
}"""
        data = self._gql(
            query, {"isMissing": field, "page": page, "perPage": per_page}
        )
        return data["findScenes"]["scenes"]

    def find_scenes_page(self, page, per_page):
        """One page of every scene's id/title/files/fingerprints plus its markers'
        id/seconds - everything needed to compute (and check the existence of) its generated
        sprite, scene preview, and per-marker preview files on disk. Scene.checksum/.oshash
        (which would have made this simpler) no longer exist on the GraphQL schema - the
        hash has to be read off a file's own fingerprints instead. There's no primary_file_id
        on Scene either (despite being in the raw .graphql schema source - stale there too),
        so files[0] is the closest available stand-in for "the primary file"."""
        query = """
query MissingAssetsScenesPage($page: Int!, $perPage: Int!) {
  findScenes(filter: { page: $page, per_page: $perPage, sort: "id", direction: ASC }) {
    count
    scenes {
      id
      title
      files { id fingerprints { type value } }
      scene_markers { id seconds }
    }
  }
}"""
        data = self._gql(query, {"page": page, "perPage": per_page})
        return data["findScenes"]

    def find_scene_ids_with_tag(self, tag_id):
        """Every scene id currently carrying tag_id - the "should remove" side of keeping a
        tag's membership in sync with a fresh scan (a scene that no longer qualifies, e.g.
        because its preview was generated since the last run, needs the tag taken back off,
        not just left stale)."""
        query = """
query MissingAssetsScenesWithTag($tagId: ID!) {
  findScenes(
    scene_filter: { tags: { modifier: INCLUDES, value: [$tagId] } }
    filter: { per_page: -1 }
  ) {
    scenes { id }
  }
}"""
        data = self._gql(query, {"tagId": tag_id})
        return {s["id"] for s in data["findScenes"]["scenes"]}

    def bulk_set_tag(self, scene_ids, tag_id, mode, chunk_size=500):
        """Adds or removes tag_id on every id in scene_ids, via bulkSceneUpdate - a handful
        of calls regardless of library size, rather than one mutation per scene. Chunked
        defensively so a very large id list doesn't go into a single pathologically large
        request."""
        query = """
mutation MissingAssetsBulkSceneUpdate($input: BulkSceneUpdateInput!) {
  bulkSceneUpdate(input: $input) { id }
}"""
        scene_ids = list(scene_ids)
        for i in range(0, len(scene_ids), chunk_size):
            chunk = scene_ids[i : i + chunk_size]
            self._gql(
                query,
                {
                    "input": {
                        "ids": chunk,
                        "tag_ids": {"mode": mode, "ids": [tag_id]},
                    }
                },
            )
