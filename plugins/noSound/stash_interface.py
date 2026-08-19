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
            raise Exception(
                f"GraphQL HTTP error {resp.status_code}: {resp.text}\nQuery: {query}"
            )
        result = resp.json()
        if result.get("errors"):
            raise Exception(f"GraphQL errors: {result['errors']}")
        return result.get("data", {})

    # ------------------------------------------------------------------
    # Tags
    # ------------------------------------------------------------------

    def find_tag(self, name):
        query = """
query FindTag($filter: String!) {
  findTags(tag_filter: { name: { value: $filter, modifier: EQUALS } }) {
    tags { id name }
  }
}"""
        data = self._gql(query, {"filter": name})
        tags = data.get("findTags", {}).get("tags", [])
        for tag in tags:
            if tag["name"] == name:
                return tag
        return None

    def create_tag(self, name, description=""):
        query = """
mutation TagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) { id name }
}"""
        data = self._gql(query, {"input": {"name": name, "description": description}})
        return data.get("tagCreate")

    def destroy_tag(self, tag_id):
        query = """
mutation TagDestroy($input: TagDestroyInput!) {
  tagDestroy(input: $input)
}"""
        self._gql(query, {"input": {"id": tag_id}})

    # ------------------------------------------------------------------
    # Scenes
    # ------------------------------------------------------------------

    def find_scenes(self, scene_filter=None, filter_opts=None):
        """Returns (count, scenes list)."""
        query = """
query FindScenes($filter: FindFilterType, $scene_filter: SceneFilterType) {
  findScenes(filter: $filter, scene_filter: $scene_filter) {
    count
    scenes {
      id
      title
      tags { id name }
      files {
        id
        path
        video_codec
        audio_codec
        duration
      }
    }
  }
}"""
        variables = {}
        if scene_filter:
            variables["scene_filter"] = scene_filter
        if filter_opts:
            variables["filter"] = filter_opts
        data = self._gql(query, variables)
        result = data.get("findScenes", {})
        return result.get("count", 0), result.get("scenes", [])

    def find_scenes_by_tag(self, tag_id):
        return self.find_scenes(
            scene_filter={"tags": {"modifier": "INCLUDES", "value": [tag_id]}},
            filter_opts={"per_page": -1},
        )

    def update_scene(self, scene_id, tag_ids):
        query = """
mutation SceneUpdate($input: SceneUpdateInput!) {
  sceneUpdate(input: $input) { id }
}"""
        data = self._gql(query, {"input": {"id": scene_id, "tag_ids": tag_ids}})
        return data.get("sceneUpdate")
