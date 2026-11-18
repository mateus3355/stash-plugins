#!/usr/bin/env bash
# reencode_v2.sh - re-encode broken videos so Stash (and players) can read them.
#
# Fixes over v1:
#   * "Invalid color space": broken colour values are rewritten in the video
#     bitstream BEFORE decoding (h264/hevc), and the output is tagged with
#     valid colour info.
#   * "Non full-range YUV" (screenshots): output is explicitly tagged
#     limited range and every result is checked by taking a test screenshot
#     the same way Stash does.
#   * "No such file": keeps the original file name when the container can
#     hold H.264/AAC (mp4, m4v, mov, mkv), so Stash's paths stay valid.
#   * Up to five attempts per file: GPU decode+encode -> CPU decode+GPU encode
#     -> CPU -> stream copy -> CPU without audio (see ATTEMPTS below).
#   * Shows progress (percent, speed, ETA) and an overall counter.
#   * Verify step copies Stash exactly: 25 phash frames (5%..95%) plus the
#     20% screenshot, and checks real image bytes come out. ffmpeg can exit 0
#     yet output nothing; Stash then logs "decoding image: unknown format".
#   * The original stays at its path until the new file passes. Encoding goes
#     to a hidden temp file, then is swapped in. The original never vanishes
#     mid-run, which caused "No such file or directory" in Stash.
#   * KEEP_NAME=1 (default): non-mp4/mov/mkv files (avi, wmv, flv, ...) keep
#     their name and get Matroska content, so Stash's path stays valid and the
#     scene keeps its metadata. KEEP_NAME=0 renames them to .mp4 instead.
#   * Extra "retime" attempt rebuilds broken timestamps. These make the file
#     report a fake duration (e.g. 15h), so Stash seeks into empty gaps.
#
# AFTER RUNNING: rescan the affected folders in Stash BEFORE generating.
# Until then Stash keeps the OLD duration and fingerprint, and seeks to
# times that don't exist in the new file (another source of "unknown format").
#
# Usage:  bash reencode_v2.sh [list_file] [log_file]
#         defaults: files.txt  reencode_v2.log
# Use a specific ffmpeg (e.g. the one Stash uses):
#         FFMPEG=/path/to/ffmpeg FFPROBE=/path/to/ffprobe bash reencode_v2.sh

LIST="${1:-files.txt}"
LOG="${2:-reencode_v2.log}"
FFMPEG="${FFMPEG:-ffmpeg}"
FFPROBE="${FFPROBE:-ffprobe}"
CQ="${CQ:-20}"               # quality: lower = better / bigger (17-23 is sensible)
NV_PRESET="${NV_PRESET:-p5}" # NVENC speed/quality: p1 (fast) .. p7 (best)
# extra NVENC options (your "best" command used: -multipass fullres -spatial_aq 1 -aq-strength 8)
NV_EXTRA=(-spatial_aq 1 -aq-strength 8)
# attempts, in order; the first one that passes the screenshot test wins
#   gpu        = GPU decode (-hwaccel cuda) + NVENC   (fastest)
#   gpu-swdec  = CPU decode + NVENC                   (CPU decoding copes better with damage)
#   cpu        = CPU decode + libx264
#   copy       = no re-encode, just rewrite the container (instant, lossless)
#   cpu-noaudio= libx264, audio dropped               (last resort)
#   retime     = libx264 + timestamps rebuilt from frame count (fixes fake/huge durations)
ATTEMPTS="${ATTEMPTS:-gpu gpu-swdec cpu copy retime cpu-noaudio}"
KEEP_NAME="${KEEP_NAME:-1}"
ERR_LINES=15   # how many ffmpeg error lines to keep in the log per attempt

[ -f "$LIST" ] || { echo "List file not found: $LIST" >&2; exit 1; }
command -v "$FFMPEG"  >/dev/null || { echo "ffmpeg not found: $FFMPEG"  >&2; exit 1; }
command -v "$FFPROBE" >/dev/null || { echo "ffprobe not found: $FFPROBE" >&2; exit 1; }

TTY=0; [ -t 1 ] && TTY=1
ERRTMP=$(mktemp)
IMGTMP=$(mktemp)
TMPOUT=""
trap 'rm -f "$ERRTMP" "$IMGTMP"; [ -n "$TMPOUT" ] && rm -f -- "$TMPOUT"' EXIT
trap 'exit 130' INT TERM

log() {
  [ $TTY -eq 1 ] && printf '\r\033[K'
  printf '%s %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*" | tee -a "$LOG"
}

# append the last few ffmpeg error lines to the log (indented)
log_errors() {
  if [ -s "$ERRTMP" ]; then
    tail -n "$ERR_LINES" "$ERRTMP" | sed 's/^/        | /' >> "$LOG"
  fi
}

# ffmpeg/ffprobe have no "--" end-of-options marker, and ffmpeg's output path in particular
# has no flag of its own (it's always just the trailing bare argument) - a real scene file
# whose name happens to start with "-" would otherwise be misread by either tool as an
# option rather than a filename. Prefixing it with "./" removes the ambiguity without
# changing which file it refers to. (mv/rm/dirname calls below already guard the same way,
# via their own "--" end-of-options marker - this is the ffmpeg/ffprobe-specific equivalent.)
safe_path() {
  case "$1" in
    -*) printf './%s' "$1" ;;
    *)  printf '%s' "$1" ;;
  esac
}

# ---------- colour helpers: ffprobe name -> H.264/HEVC VUI number ----------
prim_num() { case "$1" in bt709) echo 1;; bt470m) echo 4;; bt470bg) echo 5;;
  smpte170m) echo 6;; smpte240m) echo 7;; bt2020) echo 9;; *) echo "";; esac; }
trc_num()  { case "$1" in bt709) echo 1;; gamma22) echo 4;; gamma28) echo 5;;
  smpte170m) echo 6;; smpte240m) echo 7;; iec61966-2-1) echo 13;;
  bt2020-10) echo 14;; bt2020-12) echo 15;; smpte2084) echo 16;;
  arib-std-b67) echo 18;; *) echo "";; esac; }
mat_num()  { case "$1" in bt709) echo 1;; bt470bg) echo 5;; smpte170m) echo 6;;
  smpte240m) echo 7;; bt2020nc) echo 9;; bt2020c) echo 10;; *) echo "";; esac; }

# ---------- probe source: sets CODEC HEIGHT DUR CPRIM CTRC CMAT ----------
probe() {
  CODEC=""; HEIGHT=0; DUR=0; local cp="" ct="" cs=""
  while IFS='=' read -r k v; do
    case "$k" in
      codec_name)      CODEC=$v ;;
      height)          HEIGHT=${v%%[!0-9]*} ;;
      color_primaries) cp=$v ;;
      color_transfer)  ct=$v ;;
      color_space)     cs=$v ;;
      duration)        [[ "$v" =~ ^[0-9.]+$ ]] && DUR=$v ;;
    esac
  done < <("$FFPROBE" -v error -select_streams v:0 \
             -show_entries stream=codec_name,height,color_primaries,color_transfer,color_space:format=duration \
             -of default=nw=1 -i "$(safe_path "$1")" 2>/dev/null)
  [ -n "$CODEC" ] || return 1
  HEIGHT=${HEIGHT:-0}

  # keep valid colour values, replace unknown/invalid ones with a sane default
  local def=bt709; [ "$HEIGHT" -gt 0 ] && [ "$HEIGHT" -lt 720 ] && def=smpte170m
  [ -n "$(prim_num "$cp")" ] && CPRIM=$cp || CPRIM=$def
  [ -n "$(trc_num  "$ct")" ] && CTRC=$ct  || CTRC=$def
  [ -n "$(mat_num  "$cs")" ] && CMAT=$cs  || CMAT=$def
  return 0
}

# ---------- run ffmpeg with a progress line ----------
# usage: run_ff <label> <ffmpeg args...>
run_ff() {
  local label=$1; shift
  : > "$ERRTMP"
  if [ $TTY -eq 1 ]; then
    "$FFMPEG" -nostdin -hide_banner -loglevel error -y -nostats -progress pipe:1 "$@" \
      2>"$ERRTMP" | awk -v dur="$DUR" -v pre="$PREFIX" -v lab="$label" -F= '
        $1=="out_time_us" { t=$2/1000000 }
        $1=="speed"       { sp=$2; sub(/x/,"",sp) }
        $1=="progress" {
          pct = (dur>0) ? t*100/dur : 0; if (pct>100) pct=100; if (pct<0) pct=0
          if (sp !~ /^[0-9.]+$/) sp=""
          eta = (sp+0>0 && dur>0) ? (dur-t)/sp : -1
          etas = (eta>=0) ? sprintf("%02d:%02d:%02d", eta/3600, (eta%3600)/60, eta%60) : "--:--:--"
          printf "\r\033[K%s %-10s %5.1f%%  speed %sx  ETA %s", pre, lab, pct, (sp==""?"?":sp), etas
          fflush()
        }'
    return "${PIPESTATUS[0]}"
  else
    "$FFMPEG" -nostdin -hide_banner -loglevel error -y "$@" 2>"$ERRTMP"
  fi
}

# ---------- check the output the way Stash uses it ----------
# grab one frame like Stash does: ffmpeg must exit 0 AND produce a real image.
# usage: grab_frame <file> <seconds> bmp|jpg
grab_frame() {
  local f=$1 ss=$2 kind=$3 magic
  : > "$IMGTMP"
  if [ "$kind" = bmp ]; then   # phash / sprite frame
    "$FFMPEG" -nostdin -v error -y -ss "$ss" -i "$(safe_path "$f")" -frames:v 1 \
        -vf "scale=160:-2" -c:v bmp -f rawvideo - >"$IMGTMP" 2>>"$ERRTMP" || return 1
    magic=$(head -c 2 "$IMGTMP" | od -An -tx1 | tr -d ' \n'); [ "$magic" = "424d" ]   # "BM"
  else                         # cover screenshot
    "$FFMPEG" -nostdin -v error -y -ss "$ss" -i "$(safe_path "$f")" -frames:v 1 \
        -q:v 2 -f image2 -c:v mjpeg - >"$IMGTMP" 2>>"$ERRTMP" || return 1
    magic=$(head -c 2 "$IMGTMP" | od -An -tx1 | tr -d ' \n'); [ "$magic" = "ffd8" ]   # JPEG SOI
  fi
}

verify() {
  local out=$1 odur t i
  [ -s "$out" ] || return 1
  # Stash stores format duration rounded to 2 decimals and seeks based on it
  odur=$("$FFPROBE" -v error -show_entries format=duration -of csv=p=0 -i "$(safe_path "$out")" 2>/dev/null)
  [[ "$odur" =~ ^[0-9.]+$ ]] || { echo "verify: no duration" >> "$ERRTMP"; return 1; }
  : > "$ERRTMP"
  # cover screenshot at 20%
  t=$(awk -v d="$odur" 'BEGIN{printf "%.3f", d*0.2}')
  grab_frame "$out" "$t" jpg || { echo "verify: no screenshot at ${t}s of ${odur}s" >> "$ERRTMP"; return 1; }
  # phash sprite: 25 frames, offset 5%, step 90%/25 (pkg/hash/videophash/phash.go)
  for i in $(seq 0 24); do
    t=$(awk -v d="$odur" -v i="$i" 'BEGIN{printf "%.3f", 0.05*d + i*(0.9*d/25)}')
    grab_frame "$out" "$t" bmp || { echo "verify: no phash frame at ${t}s of ${odur}s" >> "$ERRTMP"; return 1; }
  done
  # warn (not fail) if much shorter than the source - source may have been truncated
  # or the source reported a fake duration
  if awk -v a="$odur" -v b="$DUR" 'BEGIN{exit !(b>0 && a < b*0.9)}'; then
    log "$PREFIX WARN  output is shorter than source (${odur%.*}s vs ${DUR%.*}s), source was truncated or reported a fake duration: $f"
  fi
  return 0
}

# ---------- one encode attempt ----------
# usage: encode <input> <output> <mode>   (muxer comes from $OUTFMT)
encode() {
  local in out mode
  in="$(safe_path "$1")"; out="$(safe_path "$2")"; mode=$3
  local -a v a hw=() extra=(-f "$OUTFMT")
  local vf="setparams=color_primaries=$CPRIM:color_trc=$CTRC:colorspace=$CMAT,scale=trunc(iw/2)*2:trunc(ih/2)*2:out_range=tv,format=yuv420p"

  case "$OUTFMT" in mp4|mov) extra+=(-movflags +faststart) ;; esac
  # retime: throw away the broken timestamps, rebuild them from the frame count
  [ "$mode" = "retime" ] && vf="setpts=N/FRAME_RATE/TB,$vf"

  # copy: no re-encode, just a clean new container (like: ffmpeg -i in -c copy -shortest out)
  if [ "$mode" = "copy" ]; then
    run_ff "$mode" -fflags +genpts+discardcorrupt -err_detect ignore_err -i "$in" \
      -map 0:v:0 -map '0:a:0?' -c copy -shortest -avoid_negative_ts make_zero \
      "${extra[@]}" "$out"
    return
  fi

  case "$mode" in
    gpu)       hw=(-hwaccel cuda)
               v=(-c:v h264_nvenc -preset "$NV_PRESET" -tune hq -rc vbr -cq "$CQ" -b:v 0 -profile:v high "${NV_EXTRA[@]}") ;;
    gpu-swdec) v=(-c:v h264_nvenc -preset "$NV_PRESET" -tune hq -rc vbr -cq "$CQ" -b:v 0 -profile:v high "${NV_EXTRA[@]}") ;;
    *)         v=(-c:v libx264 -preset veryfast -crf "$CQ" -profile:v high) ;;
  esac
  case "$mode" in
    cpu-noaudio) a=(-an) ;;
    cpu|retime)  a=(-map '0:a:0?' -c:a aac -b:a 192k -ac 2 -af "aresample=async=1000:first_pts=0") ;;
    *)           a=(-map '0:a:0?' -c:a aac -b:a 192k -af "aresample=async=1:first_pts=0") ;;
  esac

  run_ff "$mode" "${hw[@]}" \
    -fflags +genpts+discardcorrupt -err_detect ignore_err -i "$in" \
    -map 0:v:0 "${a[@]}" -vf "$vf" "${v[@]}" -map_metadata -1 -map_chapters -1 \
    -color_primaries "$CPRIM" -color_trc "$CTRC" -colorspace "$CMAT" -color_range tv \
    -max_muxing_queue_size 9999 -avoid_negative_ts make_zero "${extra[@]}" \
    "$out"
}

# ---------- main ----------
mapfile -t FILES < <(tr -d '\r' < "$LIST" | grep -v '^[[:space:]]*$')
TOTAL=${#FILES[@]}
n=0; ok=0; failed=0; skipped=0; START=$(date +%s)

log "===== START v2: $TOTAL files from $LIST (ffmpeg: $FFMPEG) ====="

for f in "${FILES[@]}"; do
  n=$((n + 1))
  PREFIX="[$n/$TOTAL]"
  bak="$f.bak"
  base="${f%.*}"

  # output name + muxer. Keeping the name keeps Stash's path (and scene metadata) valid.
  case "${f,,}" in
    *.mp4|*.m4v) out="$f"; OUTFMT=mp4 ;;
    *.mov)       out="$f"; OUTFMT=mov ;;
    *.mkv)       out="$f"; OUTFMT=matroska ;;
    *) if [ "$KEEP_NAME" = 1 ]; then out="$f"; OUTFMT=matroska
       else out="$base.mp4"; OUTFMT=mp4; fi ;;
  esac
  v1out="$base.mp4"     # where v1 put its output

  # where is the original?  (an existing .bak is the true original from an earlier run)
  if [ -f "$bak" ]; then
    src="$bak"
    if [ -f "$out" ] && probe "$src" && verify "$out"; then
      log "$PREFIX SKIP  (already OK)        $out"
      skipped=$((skipped + 1)); continue
    fi
  elif [ -f "$f" ]; then
    src="$f"                         # stays in place until the new file passes
  else
    log "$PREFIX SKIP  (not found)         $f"
    skipped=$((skipped + 1)); continue
  fi

  log "$PREFIX START $f"

  if ! probe "$src"; then
    log "$PREFIX FAIL  (no video stream / unreadable) $f"
    failed=$((failed + 1)); continue
  fi

  dir="$(dirname -- "$f")"
  TMPOUT="$dir/.v2out_$$_$n.tmp"

  # Stage 1: for h264/hevc, rewrite colour values in the bitstream (no re-encode)
  input="$src"
  tmp=""
  case "$CODEC" in h264|hevc)
    tmp="$dir/.v2tmp_$$_$n.mkv"
    bsf="${CODEC}_metadata=colour_primaries=$(prim_num "$CPRIM"):transfer_characteristics=$(trc_num "$CTRC"):matrix_coefficients=$(mat_num "$CMAT")"
    if run_ff "fix-color" -fflags +genpts+discardcorrupt -err_detect ignore_err -i "$(safe_path "$src")" \
         -map 0:v:0 -map '0:a:0?' -c copy -bsf:v "$bsf" "$tmp" && [ -s "$tmp" ]; then
      input="$tmp"
    else
      log "$PREFIX WARN  colour pre-fix failed, encoding from original"
      log_errors; rm -f -- "$tmp"; tmp=""
    fi
  ;; esac

  done_mode=""
  for mode in $ATTEMPTS; do
    rm -f -- "$TMPOUT"
    # retime must read the untouched original (the colour pre-fix keeps the bad timestamps)
    m_in="$input"; [ "$mode" = "retime" ] && m_in="$src"
    if encode "$m_in" "$TMPOUT" "$mode"; then
      if verify "$TMPOUT"; then done_mode=$mode; break; fi
      log "$PREFIX WARN  $mode: encoded but Stash screenshot/phash test failed"
    else
      log "$PREFIX WARN  $mode: ffmpeg failed"
    fi
    log_errors
  done
  [ -n "$tmp" ] && rm -f -- "$tmp"

  if [ -n "$done_mode" ]; then
    # swap in: original -> .bak (only once), new file -> final name
    if [ "$src" = "$f" ] && ! mv -- "$f" "$bak"; then
      log "$PREFIX FAIL  (could not back up original) $f"
      rm -f -- "$TMPOUT"; TMPOUT=""; failed=$((failed + 1)); continue
    fi
    if ! mv -f -- "$TMPOUT" "$out"; then
      log "$PREFIX FAIL  (could not move new file into place) $out"
      [ -e "$f" ] || mv -- "$bak" "$f"
      rm -f -- "$TMPOUT"; TMPOUT=""; failed=$((failed + 1)); continue
    fi
    TMPOUT=""
    ok=$((ok + 1))
    log "$PREFIX OK    ($done_mode)  $out"
    [ "$done_mode" = "cpu-noaudio" ] && log "$PREFIX WARN  audio was dropped: $out"
    [ "$out" != "$f" ] && log "$PREFIX INFO  renamed: Stash path changed $f -> $out"
    # remove the old v1 .mp4 if v2 wrote to a different name
    if [ "$v1out" != "$out" ] && [ "$v1out" != "$f" ] && [ -f "$v1out" ]; then
      rm -f -- "$v1out" && log "$PREFIX INFO  removed old v1 output $v1out"
    fi
  else
    failed=$((failed + 1))
    rm -f -- "$TMPOUT"; TMPOUT=""
    # an earlier run may have left a bad output; put the true original back
    if [ "$src" = "$bak" ]; then
      [ "$out" != "$f" ] && rm -f -- "$out"
      mv -f -- "$bak" "$f"
    fi
    log "$PREFIX FAIL  (original kept)  $f"
  fi
done

el=$(( $(date +%s) - START ))
log "===== DONE in $((el/3600))h$(((el%3600)/60))m: $TOTAL total | $ok OK | $failed failed | $skipped skipped ====="
[ "$ok" -gt 0 ] && log "NEXT: rescan these folders in Stash, THEN run generate (Stash still has the old durations)"