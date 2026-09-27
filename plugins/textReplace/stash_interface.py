import requests


class StashInterface:
    """Minimal GraphQL client. Text Replace uses this for plugin settings,
    and for the actual find/replace SQL itself via Stash's own querySQL /
    execSQL mutations - which run through the server's live database
    connection, so there's no separate file to locate or open, and no
    WAL/busy-timeout handling to do ourselves (the server already handles
    that for its own connection)."""

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

    def query_sql(self, sql, args=None):
        """Runs a SELECT via Stash's querySQL mutation. Returns a list of
        dicts (column name -> value) - one per row."""
        data = self._gql(
            "mutation TextReplaceQuerySQL($sql: String!, $args: [Any]) { "
            "querySQL(sql: $sql, args: $args) { columns rows } }",
            {"sql": sql, "args": args or []},
        )
        result = data["querySQL"]
        columns = result["columns"]
        return [dict(zip(columns, row)) for row in result["rows"]]

    def exec_sql(self, sql, args=None):
        """Runs an INSERT/UPDATE/DELETE via Stash's execSQL mutation -
        DANGEROUS, per Stash's own schema comment: arbitrary SQL executed
        directly against the live database. Returns rows_affected."""
        data = self._gql(
            "mutation TextReplaceExecSQL($sql: String!, $args: [Any]) { "
            "execSQL(sql: $sql, args: $args) { rows_affected } }",
            {"sql": sql, "args": args or []},
        )
        return data["execSQL"]["rows_affected"]
