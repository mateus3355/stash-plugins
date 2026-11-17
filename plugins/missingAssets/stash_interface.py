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
    # Scenes
    # ------------------------------------------------------------------

    def count_scenes_missing(self, field):
        """A quick count for a native is_missing field (cover/phash) - these are real
        database columns/rows, so the database itself can answer this without walking
        every scene, unlike the file-based checks this plugin otherwise has to do."""
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
query MissingAssetsPage($isMissing: String, $page: Int!, $perPage: Int!) {
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
        """One page of every scene's id/title/checksum/oshash plus its markers' id/seconds -
        everything needed to compute (and check the existence of) its generated sprite,
        scene preview, and per-marker preview files on disk."""
        query = """
query MissingAssetsScenesPage($page: Int!, $perPage: Int!) {
  findScenes(filter: { page: $page, per_page: $perPage, sort: "id", direction: ASC }) {
    count
    scenes {
      id
      title
      checksum
      oshash
      scene_markers { id seconds }
    }
  }
}"""
        data = self._gql(query, {"page": page, "perPage": per_page})
        return data["findScenes"]
