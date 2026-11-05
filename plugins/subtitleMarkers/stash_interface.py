class StashInterface:
    def __init__(self, conn):
        # Imported here, not at module level, so this module (and subtitleMarkers.py,
        # which imports it) can still be imported for testing its non-network logic
        # without `requests` installed - it's still required the moment this class is
        # actually used, same as before.
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
    # Scenes
    # ------------------------------------------------------------------

    def find_scene_by_path_prefix(self, prefix_regex):
        """Finds the single scene whose (sole) file path matches prefix_regex, along
        with its existing scene markers (for dedup). Returns None if there's no match."""
        query = """
query FindSceneByPathPrefix($regex: String!) {
  findScenes(scene_filter: { path: { modifier: MATCHES_REGEX, value: $regex } }) {
    count
    scenes {
      id
      title
      scene_markers { id seconds primary_tag { id } }
    }
  }
}"""
        data = self._gql(query, {"regex": prefix_regex})
        scenes = data.get("findScenes", {}).get("scenes", [])
        return scenes[0] if scenes else None

    def create_marker(self, scene_id, seconds, title, primary_tag_id):
        query = """
mutation SceneMarkerCreate($input: SceneMarkerCreateInput!) {
  sceneMarkerCreate(input: $input) { id }
}"""
        data = self._gql(
            query,
            {
                "input": {
                    "scene_id": scene_id,
                    "seconds": seconds,
                    "title": title,
                    "primary_tag_id": primary_tag_id,
                }
            },
        )
        return data.get("sceneMarkerCreate")
