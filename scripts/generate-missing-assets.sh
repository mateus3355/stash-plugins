#!/usr/bin/env bash
# Triggers a Stash "Generate" job (covers + scrubber sprites + phashes) for a specific list
# of scene ids read from a text file - one id per line, blank lines and lines starting with
# "#" are ignored, surrounding whitespace is trimmed. Not a plugin - just hits Stash's own
# GraphQL API directly (the same metadataGenerate mutation the Generate dialog itself uses).
#
# Usage:
#   ./generate-missing-assets.sh <scene-ids.txt> [--url http://host:port] [--apikey KEY] [--no-wait]
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
  echo "Usage: $0 <scene-ids.txt> [--url http://host:port] [--apikey KEY] [--no-wait]" >&2
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

# One id per line - strip comments/blank lines and surrounding whitespace, then keep only
# lines that are purely digits (a scene id), warning about (not failing on) anything else.
SCENE_IDS=()
while IFS= read -r line || [ -n "$line" ]; do
  line="${line%%#*}"
  line="$(echo -n "$line" | tr -d '[:space:]')"
  [ -z "$line" ] && continue
  if [[ "$line" =~ ^[0-9]+$ ]]; then
    SCENE_IDS+=("$line")
  else
    echo "Warning: skipping non-numeric line: '$line'" >&2
  fi
done < "$SCENES_FILE"

if [ "${#SCENE_IDS[@]}" -eq 0 ]; then
  echo "Error: no scene ids found in $SCENES_FILE" >&2
  exit 1
fi

echo "Queuing generate (covers, sprites, phashes) for ${#SCENE_IDS[@]} scene(s)..." >&2

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
