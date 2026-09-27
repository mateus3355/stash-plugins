import requests


class StashInterface:
    """Minimal GraphQL client - Move File's Python side only ever does two
    things (call moveFiles for a batch of file ids, then optionally queue
    an Auto Tag job for the destination), so this is intentionally tiny
    rather than a general-purpose wrapper."""

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

    def get_plugin_settings(self, plugin_id):
        data = self._gql(
            "query MoveFileConfiguration($ids: [ID!]) { configuration { plugins(include: $ids) } }",
            {"ids": [plugin_id]},
        )
        plugins = (data.get("configuration") or {}).get("plugins") or {}
        return plugins.get(plugin_id) or {}

    def move_files(self, file_ids, destination_folder):
        data = self._gql(
            "mutation MoveFileMoveFiles($input: MoveFilesInput!) { moveFiles(input: $input) }",
            {"input": {"ids": file_ids, "destination_folder": destination_folder}},
        )
        return data["moveFiles"]

    def auto_tag(self, paths):
        data = self._gql(
            "mutation MoveFileAutoTag($input: AutoTagMetadataInput!) { metadataAutoTag(input: $input) }",
            {"input": {"paths": paths}},
        )
        return data["metadataAutoTag"]
