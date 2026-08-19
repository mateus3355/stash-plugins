# StashDB Query Tool

Adds a button to the Stash toolbar (next to Stats/Settings/Help) that opens a
standalone GraphQL query tool for browsing/searching any stash-box instance
(StashDB, PMVStash, FansDB, ...).

The tool lets you pick from the stash-box endpoints already configured in
this Stash instance (Settings > Metadata Providers > Stash-box Endpoints) -
their URL and API key are loaded automatically. You can still enter a
different endpoint/API key manually if needed.

## Files

- `stashBoxQuery.js` - patches the main nav bar to add the toolbar button.
- `stashdb-query-tool.html` - the query tool itself, served as a plugin asset
  at `/plugin/stashBoxQuery/assets/stashdb-query-tool.html`.
