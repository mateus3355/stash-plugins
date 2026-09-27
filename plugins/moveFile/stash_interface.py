import requests


class StashInterface:
    """Minimal GraphQL client - Move File's Python side only ever moves a
    batch of file ids, optionally queues an Auto Tag job for the
    destination, and optionally checks configured library paths before
    cleaning up an emptied source folder - so this is intentionally tiny
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

    def get_library_paths(self):
        data = self._gql("query MoveFileLibraryPaths { configuration { general { stashes { path } } } }")
        stashes = (data.get("configuration") or {}).get("general", {}).get("stashes") or []
        return [s["path"] for s in stashes]

    def move_files(self, file_ids, destination_folder):
        data = self._gql(
            "mutation MoveFileMoveFiles($input: MoveFilesInput!) { moveFiles(input: $input) }",
            {"input": {"ids": file_ids, "destination_folder": destination_folder}},
        )
        return data["moveFiles"]

    def auto_tag(self, paths):
        # performers/studios/tags are match CRITERIA, not just scope - an
        # omitted list means "don't match against this category" (i.e.
        # tag nothing), not "match everything". "*" is the documented
        # wildcard for "all", and is exactly what the native Auto Tag
        # button always sends alongside paths - without it, this queues a
        # job that scopes to the folder but has nothing to actually match
        # against, so it completes having tagged nothing.
        data = self._gql(
            "mutation MoveFileAutoTag($input: AutoTagMetadataInput!) { metadataAutoTag(input: $input) }",
            {"input": {"paths": paths, "performers": ["*"], "studios": ["*"], "tags": ["*"]}},
        )
        return data["metadataAutoTag"]
