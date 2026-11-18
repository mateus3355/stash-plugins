#!/usr/bin/env bash
# Triggers a Stash "Generate" job (covers + scrubber sprites + phashes) for a specific list
# of scenes read from a text file - one per line, blank lines and lines starting with "#"
# are ignored, leading/trailing whitespace is trimmed (internal spaces are kept - a path can
# legitimately contain them). Each line can be EITHER a scene id (all digits) OR a file path -
# a path is resolved to its scene id via Stash's own GraphQL API first (exact match against
# that file's own path), so a list that's all paths works exactly the same as a list of ids,
# and the two can even be mixed in the same file. Not a plugin - just hits Stash's own
# GraphQL API directly (the same metadataGenerate mutation the Generate dialog itself uses).
#
# Usage:
#   ./generate-missing-assets.sh <scenes.txt> [--url http://host:port] [--apikey KEY] [--no-wait]
#
# Connection defaults to $STASH_URL (or http://localhost:9999) and $STASH_API_KEY (or none) -
# --url/--apikey override those. Find your API key in Settings -> Security, or in
# config.yml's own api_key field if you're running this on the Stash server itself.
#
# By default, polls the job (findJob) until it finishes and prints its final status;
# --no-wait just queues it and prints the job id.
#
# Requires curl and jq.

set -euo pipefail

usage() {
  echo "Usage: $0 <scenes.txt> [--url http://host:port] [--apikey KEY] [--no-wait]" >&2
  exit 1
}

SCENES_FILE=""
STASH_URL="${STASH_URL:-http://localhost:9999}"
API_KEY="${STASH_API_KEY:-}"
WAIT=1

while [ $# -gt 0 ]; do
  case "$1" in
    --url)
      STASH_URL="$2"
      shift 2
      ;;
    --apikey)
      API_KEY="$2"
      shift 2
      ;;
    --no-wait)
      WAIT=0
      shift
      ;;
    -h|--help)
      usage
      ;;
    *)
      if [ -n "$SCENES_FILE" ]; then
        usage
      fi
      SCENES_FILE="$1"
      shift
      ;;
  esac
done

[ -n "$SCENES_FILE" ] || usage

for bin in curl jq; do
  command -v "$bin" >/dev/null 2>&1 || { echo "Error: '$bin' is required but not installed." >&2; exit 1; }
done

if [ ! -f "$SCENES_FILE" ]; then
  echo "Error: file not found: $SCENES_FILE" >&2
  exit 1
fi

GRAPHQL_URL="${STASH_URL%/}/graphql"

CURL_HEADERS=(-H "Content-Type: application/json")
if [ -n "$API_KEY" ]; then
  CURL_HEADERS+=(-H "ApiKey: $API_KEY")
fi

graphql() {
  local query="$1"
  local variables="$2"
  local payload
  payload="$(jq -n --arg q "$query" --argjson v "$variables" '{query: $q, variables: $v}')"
  curl -sS "${CURL_HEADERS[@]}" --data "$payload" "$GRAPHQL_URL"
}

FIND_BY_PATH_QUERY='
query GenerateMissingAssetsFindScenePath($path: String!) {
  findScenes(scene_filter: { path: { modifier: EQUALS, value: $path } }, filter: { per_page: -1 }) {
    scenes { id }
  }
}'

# Looks up the scene id(s) for a file's exact path. Echoes one id per line to stdout (0 if
# not found, more than 1 if more than one scene happens to share that exact path - unusual,
# but every match is still generated rather than silently picking one) and returns non-zero
# if nothing matched, so the caller can warn without the id list itself being polluted.
resolve_path_to_scene_ids() {
  local path="$1"
  local resp errors count
  resp="$(graphql "$FIND_BY_PATH_QUERY" "$(jq -n --arg p "$path" '{path: $p}')")"
  errors="$(echo "$resp" | jq -r '.errors // empty')"
  if [ -n "$errors" ]; then
    echo "Warning: GraphQL error resolving path '$path':" >&2
    echo "$resp" | jq '.errors' >&2
    return 1
  fi
  count="$(echo "$resp" | jq -r '.data.findScenes.scenes | length')"
  if [ "$count" -eq 0 ]; then
    echo "Warning: no scene found for path: $path" >&2
    return 1
  fi
  if [ "$count" -gt 1 ]; then
    echo "Warning: $count scenes matched the same path (generating for all of them): $path" >&2
  fi
  echo "$resp" | jq -r '.data.findScenes.scenes[].id'
}

# One scene per line - strip comments and leading/trailing whitespace only (a path can
# contain internal spaces). A line that's all digits is already a scene id; anything else is
# treated as a file path and resolved to its scene id above. A path that doesn't match
# anything is warned about and skipped, not fatal for the rest of the list.
SCENE_IDS=()
UNRESOLVED=0
while IFS= read -r line || [ -n "$line" ]; do
  line="${line%%#*}"
  line="$(printf '%s' "$line" | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')"
  [ -z "$line" ] && continue

  if [[ "$line" =~ ^[0-9]+$ ]]; then
    SCENE_IDS+=("$line")
    continue
  fi

  if resolved="$(resolve_path_to_scene_ids "$line")"; then
    while IFS= read -r id; do
      SCENE_IDS+=("$id")
    done <<< "$resolved"
  else
    UNRESOLVED=$((UNRESOLVED + 1))
  fi
done < "$SCENES_FILE"

if [ "${#SCENE_IDS[@]}" -eq 0 ]; then
  echo "Error: no scenes resolved from $SCENES_FILE" >&2
  exit 1
fi

if [ "$UNRESOLVED" -gt 0 ]; then
  echo "Warning: $UNRESOLVED line(s) could not be resolved to a scene - see warnings above." >&2
fi

# Dedupe - the same scene could appear twice (e.g. listed by both id and path), or a path
# could resolve to more than one scene id.
mapfile -t SCENE_IDS < <(printf '%s\n' "${SCENE_IDS[@]}" | sort -un)

echo "Queuing generate (covers, sprites, phashes) for ${#SCENE_IDS[@]} scene(s)..." >&2

SCENE_IDS_JSON="$(printf '%s\n' "${SCENE_IDS[@]}" | jq -R . | jq -s .)"

GENERATE_QUERY='
mutation GenerateMissingAssets($sceneIDs: [ID!]) {
  metadataGenerate(input: { covers: true, sprites: true, phashes: true, sceneIDs: $sceneIDs })
}'

RESPONSE="$(graphql "$GENERATE_QUERY" "$(jq -n --argjson ids "$SCENE_IDS_JSON" '{sceneIDs: $ids}')")"

ERRORS="$(echo "$RESPONSE" | jq -r '.errors // empty')"
if [ -n "$ERRORS" ]; then
  echo "GraphQL error:" >&2
  echo "$RESPONSE" | jq '.errors' >&2
  exit 1
fi

JOB_ID="$(echo "$RESPONSE" | jq -r '.data.metadataGenerate')"
if [ -z "$JOB_ID" ] || [ "$JOB_ID" = "null" ]; then
  echo "Error: metadataGenerate did not return a job id. Full response:" >&2
  echo "$RESPONSE" >&2
  exit 1
fi

echo "Job queued: $JOB_ID" >&2

if [ "$WAIT" -eq 0 ]; then
  exit 0
fi

JOB_QUERY='
query GenerateMissingAssetsJob($id: ID!) {
  findJob(input: { id: $id }) { status progress error }
}'

LAST_PERCENT=-1
while true; do
  JOB_RESPONSE="$(graphql "$JOB_QUERY" "$(jq -n --arg id "$JOB_ID" '{id: $id}')")"
  STATUS="$(echo "$JOB_RESPONSE" | jq -r '.data.findJob.status // "UNKNOWN"')"
  PERCENT="$(echo "$JOB_RESPONSE" | jq -r '((.data.findJob.progress // 0) * 100 | floor)')"

  if [ "$PERCENT" != "$LAST_PERCENT" ]; then
    echo "  $STATUS - ${PERCENT}%" >&2
    LAST_PERCENT="$PERCENT"
  fi

  case "$STATUS" in
    FINISHED)
      echo "Done." >&2
      exit 0
      ;;
    FAILED)
      echo "Job failed: $(echo "$JOB_RESPONSE" | jq -r '.data.findJob.error // "unknown error"')" >&2
      exit 1
      ;;
    CANCELLED)
      echo "Job was cancelled." >&2
      exit 1
      ;;
    UNKNOWN)
      echo "Job disappeared from the queue - assuming it finished." >&2
      exit 0
      ;;
  esac

  sleep 2
done
