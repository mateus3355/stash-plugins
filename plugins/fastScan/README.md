# Fast Scan

Adds a **Fast Scan** button to performer and tag detail pages that scans, generates
(covers/sprites/phashes/markers), and auto-tags just the folder(s) backing that
entity's content — instead of running those tasks against the whole library.

## Update Content Folders (plugin task)

Settings → Tasks → Plugin Tasks → Fast Scan → **Update Content Folders**.

Iterates over every performer and every tag, collects the full set of unique
folders backing all of its scenes/images/galleries (no sampling — unlike the
button, which only looks at the 10 most recent scenes for speed), and stores
that list as a custom field named `content_folders` on the entity (JSON-encoded
array of folder paths, since Stash custom fields only accept scalar values).

When the **Fast Scan** button is clicked for a performer/tag, it reads this
custom field and unions it with a live sample of recent scenes, then runs
Scan + Generate + AutoTag scoped to that combined folder set.

Run this task after large library reorganizations, or schedule it periodically
(e.g. via FileMonitor's task scheduler — add `{"task": "fastScan", "taskName":
"Update Content Folders", "taskQue": true, ...}` to `task_scheduler` in
`filemonitor_config.py`) so newly added content folders stay reflected in the
custom field over time.
