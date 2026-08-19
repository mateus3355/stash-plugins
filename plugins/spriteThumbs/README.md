# Sprite Thumbnails

Replaces the static screenshot shown on scene cards with the scene's
generated sprite sheet (the same contact-sheet image used for the video
scrubber preview), so browsing scenes shows a grid of frames instead of a
single cover frame. Hovering a card zooms/pans into the sprite tile under
the cursor so individual frames become legible; the normal animated
hover-preview video is suppressed while this is active.

**Off by default.** Toggle it with the "Sprite Thumbnails: Off/On" button
added to the toolbar above any scene list (scenes page, and any embedded
scene list such as a performer/tag's Scenes tab). The setting is stored per
browser (`localStorage`), and takes effect immediately on cards already on
screen - no page reload needed.

## Requirements

Scenes need a generated sprite (`Settings > Tasks > Generate`, with
"Sprites" enabled). Scenes without one keep showing their normal screenshot
even when the toggle is on.

## Notes

- The default hover zoom level (9x) matches Stash's default 81-frame (9x9)
  sprite grid. If you've configured a different sprite count, override it
  per your own custom CSS with `--sprite-thumb-zoom: <n>` on `:root`.
- This patches the `SceneCard.Image` component, so it affects every place
  scene cards are used (scenes list, performer/studio/tag/group pages, etc).
