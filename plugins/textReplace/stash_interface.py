import requests


class StashInterface:
    """Minimal GraphQL client - Text Replace only uses this for two safe,
    read-only lookups (plugin settings, and the path to the SQLite database).
    All the actual find/replace work goes straight to the database via
    stash_db.py, so this file is intentionally tiny."""

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
            "query Configuration($ids: [ID!]) { configuration { plugins(include: $ids) } }",
            {"ids": [plugin_id]},
        )
        plugins = (data.get("configuration") or {}).get("plugins") or {}
        return plugins.get(plugin_id) or {}

    def get_database_path(self):
        data = self._gql("query DatabasePath { configuration { general { databasePath } } }")
        return data["configuration"]["general"]["databasePath"]
