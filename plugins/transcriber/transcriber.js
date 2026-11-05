var Us=Object.defineProperty;var Bs=(H,i,te)=>i in H?Us(H,i,{enumerable:!0,configurable:!0,writable:!0,value:te}):H[i]=te;var ee=(H,i,te)=>Bs(H,typeof i!="symbol"?i+"":i,te);(function(H,i,te,A,ur,Rt){"use strict";var or;function cr(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const Lt=cr(i);function lr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ut={exports:{}},Ie={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Bt=Object.getOwnPropertySymbols,dr=Object.prototype.hasOwnProperty,fr=Object.prototype.propertyIsEnumerable;function pr(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function gr(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(s){return t[s]});if(r.join("")!=="0123456789")return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(s){a[s]=s}),Object.keys(Object.assign({},a)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}gr();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mr=H,zt=60103;if(Ie.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var Vt=Symbol.for;zt=Vt("react.element"),Ie.Fragment=Vt("react.fragment")}var yr=mr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hr=Object.prototype.hasOwnProperty,Sr={key:!0,ref:!0,__self:!0,__source:!0};function Wt(e,t,n){var r,a={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)hr.call(t,r)&&!Sr.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:zt,type:e,key:s,ref:o,props:a,_owner:yr.current}}Ie.jsx=Wt,Ie.jsxs=Wt,Ut.exports=Ie;var f=Ut.exports;const Jt={},Qt=i.gql`
    fragment ConfigGeneralData on ConfigGeneralResult {
  stashes {
    path
    excludeVideo
    excludeImage
  }
  databasePath
  backupDirectoryPath
  deleteTrashPath
  generatedPath
  metadataPath
  scrapersPath
  pluginsPath
  cachePath
  blobsPath
  blobsStorage
  ffmpegPath
  ffprobePath
  calculateMD5
  videoFileNamingAlgorithm
  parallelTasks
  previewAudio
  previewSegments
  previewSegmentDuration
  previewExcludeStart
  previewExcludeEnd
  previewPreset
  maxMarkerPreviewDuration
  defaultMarkerPreviewDuration
  transcodeHardwareAcceleration
  maxTranscodeSize
  maxStreamingTranscodeSize
  writeImageThumbnails
  createImageClipsFromVideos
  apiKey
  username
  password
  maxSessionAge
  logFile
  logOut
  logLevel
  logAccess
  logFileMaxSize
  useCustomSpriteInterval
  spriteInterval
  minimumSprites
  maximumSprites
  spriteScreenshotSize
  createGalleriesFromFolders
  galleryCoverRegex
  videoExtensions
  imageExtensions
  galleryExtensions
  excludes
  imageExcludes
  customPerformerImageLocation
  stashBoxes {
    name
    endpoint
    api_key
    max_requests_per_minute
  }
  pythonPath
  transcodeInputArgs
  transcodeOutputArgs
  liveTranscodeInputArgs
  liveTranscodeOutputArgs
  drawFunscriptHeatmapRange
  scraperPackageSources {
    name
    url
    local_path
  }
  pluginPackageSources {
    name
    url
    local_path
  }
}
    `,Ht=i.gql`
    fragment ConfigInterfaceData on ConfigInterfaceResult {
  sfwContentMode
  menuItems
  soundOnPreview
  wallShowTitle
  wallPlayback
  showScrubber
  maximumLoopDuration
  noBrowser
  notificationsEnabled
  autostartVideo
  autostartVideoOnPlaySelected
  continuePlaylistDefault
  showStudioAsText
  css
  cssEnabled
  javascript
  javascriptEnabled
  customLocales
  customLocalesEnabled
  disableCustomizations
  language
  imageLightbox {
    slideshowDelay
    displayMode
    scaleUp
    resetZoomOnNav
    scrollMode
    scrollAttemptsBeforeChange
    disableAnimation
  }
  disableDropdownCreate {
    performer
    tag
    studio
    movie
    gallery
  }
  handyKey
  funscriptOffset
  useStashHostedFunscript
}
    `,Yt=i.gql`
    fragment ConfigDLNAData on ConfigDLNAResult {
  serverName
  enabled
  port
  whitelistedIPs
  interfaces
  videoSortOrder
}
    `,Xt=i.gql`
    fragment ConfigScrapingData on ConfigScrapingResult {
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  excludeTagPatterns
}
    `,$r=i.gql`
    fragment ScraperSourceData on ScraperSource {
  stash_box_index
  stash_box_endpoint
  scraper_id
}
    `,_r=i.gql`
    fragment IdentifyFieldOptionsData on IdentifyFieldOptions {
  field
  strategy
  createMissing
}
    `,Dr=i.gql`
    fragment IdentifyMetadataOptionsData on IdentifyMetadataOptions {
  fieldOptions {
    ...IdentifyFieldOptionsData
  }
  setCoverImage
  setOrganized
  performerGenders
  skipMultipleMatches
  skipMultipleMatchTag
  skipSingleNamePerformers
  skipSingleNamePerformerTag
}
    ${_r}`,At=i.gql`
    fragment ConfigDefaultSettingsData on ConfigDefaultSettingsResult {
  scan {
    scanGenerateCovers
    scanGeneratePreviews
    scanGenerateImagePreviews
    scanGenerateSprites
    scanGeneratePhashes
    scanGenerateThumbnails
    scanGenerateClipPreviews
  }
  identify {
    sources {
      source {
        ...ScraperSourceData
      }
      options {
        ...IdentifyMetadataOptionsData
      }
    }
    options {
      ...IdentifyMetadataOptionsData
    }
  }
  autoTag {
    performers
    studios
    tags
  }
  generate {
    covers
    sprites
    previews
    imagePreviews
    previewOptions {
      previewSegments
      previewSegmentDuration
      previewExcludeStart
      previewExcludeEnd
      previewPreset
    }
    markers
    markerImagePreviews
    markerScreenshots
    transcodes
    phashes
    interactiveHeatmapsSpeeds
    clipPreviews
    imageThumbnails
  }
  deleteFile
  deleteGenerated
}
    ${$r}
${Dr}`,br=i.gql`
    fragment ConfigData on ConfigResult {
  general {
    ...ConfigGeneralData
  }
  interface {
    ...ConfigInterfaceData
  }
  dlna {
    ...ConfigDLNAData
  }
  scraping {
    ...ConfigScrapingData
  }
  defaults {
    ...ConfigDefaultSettingsData
  }
  ui
  plugins
}
    ${Qt}
${Ht}
${Yt}
${Xt}
${At}`;i.gql`
    fragment ImageFileData on ImageFile {
  id
  path
  size
  mod_time
  width
  height
  fingerprints {
    type
    value
  }
}
    `;const rt=i.gql`
    fragment SelectFolderData on Folder {
  id
  path
  basename
}
    `,vr=i.gql`
    fragment RecursiveFolderData on Folder {
  ...SelectFolderData
  parent_folders {
    ...SelectFolderData
  }
}
    ${rt}`,it=i.gql`
    fragment SavedFilterData on SavedFilter {
  id
  mode
  name
  find_filter {
    q
    page
    per_page
    sort
    direction
  }
  object_filter
  ui_options
}
    `,Ir=i.gql`
    fragment SelectGalleryData on Gallery {
  id
  title
  date
  code
  studio {
    name
  }
  cover {
    paths {
      thumbnail
    }
  }
  paths {
    preview
  }
  files {
    path
  }
  folder {
    path
  }
}
    `,Tr=i.gql`
    fragment SelectGroupData on Group {
  id
  name
  aliases
  date
  studio {
    name
  }
  front_image_path
}
    `,Te=i.gql`
    fragment SlimStudioData on Studio {
  id
  name
  image_path
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
  parent_studio {
    id
  }
  details
  rating100
  aliases
  tags {
    id
    name
  }
  favorite
  ignore_auto_tag
  organized
  o_counter
}
    `,Z=i.gql`
    fragment SlimTagData on Tag {
  id
  name
  sort_name
  aliases
  image_path
  parent_count
  child_count
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
}
    `,Zt=i.gql`
    fragment SlimGroupData on Group {
  id
  name
  front_image_path
  rating100
}
    `,wr=i.gql`
    fragment ListGroupData on Group {
  id
  name
  aliases
  duration
  date
  rating100
  director
  studio {
    ...SlimStudioData
  }
  tags {
    ...SlimTagData
  }
  containing_groups {
    group {
      ...SlimGroupData
    }
    description
  }
  synopsis
  urls
  front_image_path
  back_image_path
  scene_count
  performer_count
  sub_group_count
  o_counter
  scenes {
    id
    title
  }
}
    ${Te}
${Z}
${Zt}`,Kt=i.gql`
    fragment VisualFileData on VisualFile {
  ... on BaseFile {
    id
    path
    size
    mod_time
    fingerprints {
      type
      value
    }
  }
  ... on ImageFile {
    id
    path
    size
    mod_time
    width
    height
    fingerprints {
      type
      value
    }
  }
  ... on VideoFile {
    id
    path
    size
    mod_time
    duration
    video_codec
    audio_codec
    width
    height
    frame_rate
    bit_rate
    fingerprints {
      type
      value
    }
  }
}
    `,Ue=i.gql`
    fragment SlimImageData on Image {
  id
  title
  code
  date
  urls
  details
  photographer
  rating100
  organized
  o_counter
  paths {
    thumbnail
    preview
    image
  }
  galleries {
    id
    title
    files {
      path
    }
    folder {
      path
    }
  }
  studio {
    id
    name
    image_path
  }
  tags {
    id
    name
  }
  performers {
    id
    name
    gender
    favorite
    image_path
  }
  visual_files {
    ...VisualFileData
  }
}
    ${Kt}`,en=i.gql`
    fragment GalleryFileData on GalleryFile {
  id
  path
  size
  mod_time
  fingerprints {
    type
    value
  }
}
    `,tn=i.gql`
    fragment FolderData on Folder {
  id
  basename
  path
}
    `,at=i.gql`
    fragment GalleryChapterData on GalleryChapter {
  id
  title
  image_index
  gallery {
    id
  }
}
    `,ne=i.gql`
    fragment PerformerData on Performer {
  id
  name
  disambiguation
  urls
  gender
  birthdate
  ethnicity
  country
  eye_color
  height_cm
  measurements
  fake_tits
  penis_length
  circumcised
  career_start
  career_end
  tattoos
  piercings
  alias_list
  favorite
  ignore_auto_tag
  image_path
  scene_count
  image_count
  gallery_count
  group_count
  performer_count
  o_counter
  tags {
    ...SlimTagData
  }
  stash_ids {
    stash_id
    endpoint
    updated_at
  }
  rating100
  details
  death_date
  hair_color
  weight
  custom_fields
}
    ${Z}`,nn=i.gql`
    fragment VideoFileData on VideoFile {
  id
  path
  size
  mod_time
  duration
  video_codec
  audio_codec
  width
  height
  frame_rate
  bit_rate
  fingerprints {
    type
    value
  }
}
    `,we=i.gql`
    fragment SlimSceneData on Scene {
  id
  title
  code
  details
  director
  urls
  date
  rating100
  o_counter
  organized
  interactive
  interactive_speed
  resume_time
  play_duration
  play_count
  files {
    ...VideoFileData
  }
  paths {
    screenshot
    preview
    stream
    webp
    vtt
    sprite
    funscript
    interactive_heatmap
    caption
  }
  scene_markers {
    id
    title
    seconds
    primary_tag {
      id
      name
    }
  }
  galleries {
    id
    files {
      path
    }
    folder {
      path
    }
    title
  }
  studio {
    id
    name
    image_path
  }
  groups {
    group {
      id
      name
      front_image_path
    }
    scene_index
  }
  tags {
    id
    name
  }
  performers {
    id
    name
    disambiguation
    gender
    favorite
    image_path
  }
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
}
    ${nn}`,pe=i.gql`
    fragment GalleryData on Gallery {
  id
  created_at
  updated_at
  title
  code
  date
  urls
  details
  photographer
  rating100
  organized
  paths {
    cover
    preview
  }
  files {
    ...GalleryFileData
  }
  folder {
    ...FolderData
  }
  image_count
  chapters {
    ...GalleryChapterData
  }
  studio {
    ...SlimStudioData
  }
  tags {
    ...SlimTagData
  }
  performers {
    ...PerformerData
  }
  scenes {
    ...SlimSceneData
  }
  custom_fields
}
    ${en}
${tn}
${at}
${Te}
${Z}
${ne}
${we}`,qr=i.gql`
    fragment ImageData on Image {
  id
  title
  code
  rating100
  date
  urls
  details
  photographer
  organized
  o_counter
  created_at
  updated_at
  paths {
    thumbnail
    preview
    image
  }
  galleries {
    ...GalleryData
  }
  studio {
    ...SlimStudioData
  }
  tags {
    ...SlimTagData
  }
  performers {
    ...PerformerData
  }
  visual_files {
    ...VisualFileData
  }
  custom_fields
}
    ${pe}
${Te}
${Z}
${ne}
${Kt}`,rn=i.gql`
    fragment JobData on Job {
  id
  status
  subTasks
  description
  progress
  startTime
  endTime
  addTime
  error
}
    `,an=i.gql`
    fragment LogEntryData on LogEntry {
  time
  level
  message
}
    `,ge=i.gql`
    fragment PackageData on Package {
  package_id
  name
  version
  date
  metadata
  sourceURL
}
    `;i.gql`
    fragment SlimPerformerData on Performer {
  id
  name
  disambiguation
  gender
  urls
  image_path
  favorite
  ignore_auto_tag
  country
  birthdate
  ethnicity
  hair_color
  eye_color
  height_cm
  fake_tits
  penis_length
  circumcised
  career_start
  career_end
  tattoos
  piercings
  alias_list
  tags {
    id
    name
  }
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
  rating100
  death_date
  weight
}
    `;const Fr=i.gql`
    fragment SelectPerformerData on Performer {
  id
  name
  disambiguation
  alias_list
  image_path
  birthdate
  death_date
}
    `,Er=i.gql`
    fragment SceneMarkerSceneData on Scene {
  id
  title
  files {
    width
    height
    path
  }
  performers {
    id
    name
    image_path
  }
}
    `,se=i.gql`
    fragment SceneMarkerData on SceneMarker {
  id
  title
  seconds
  end_seconds
  stream
  preview
  screenshot
  scene {
    ...SceneMarkerSceneData
  }
  primary_tag {
    id
    name
  }
  tags {
    id
    name
  }
}
    ${Er}`,sn=i.gql`
    fragment SlimGalleryData on Gallery {
  id
  title
  code
  date
  urls
  details
  photographer
  rating100
  organized
  files {
    ...GalleryFileData
  }
  folder {
    ...FolderData
  }
  image_count
  chapters {
    id
    title
    image_index
  }
  studio {
    id
    name
    image_path
  }
  tags {
    id
    name
  }
  performers {
    id
    name
    gender
    favorite
    image_path
  }
  scenes {
    id
    title
    files {
      path
    }
  }
  paths {
    cover
    preview
  }
}
    ${en}
${tn}`,qe=i.gql`
    fragment GroupData on Group {
  id
  name
  aliases
  duration
  date
  rating100
  director
  studio {
    ...SlimStudioData
  }
  tags {
    ...SlimTagData
  }
  containing_groups {
    group {
      ...SlimGroupData
    }
    description
  }
  synopsis
  urls
  front_image_path
  back_image_path
  scene_count
  scene_count_all: scene_count(depth: -1)
  performer_count
  performer_count_all: performer_count(depth: -1)
  sub_group_count
  sub_group_count_all: sub_group_count(depth: -1)
  o_counter
  scenes {
    id
    title
  }
  custom_fields
}
    ${Te}
${Z}
${Zt}`,oe=i.gql`
    fragment SceneData on Scene {
  id
  title
  code
  details
  director
  urls
  date
  rating100
  o_counter
  organized
  interactive
  interactive_speed
  captions {
    language_code
    caption_type
  }
  created_at
  updated_at
  resume_time
  last_played_at
  play_duration
  play_count
  play_history
  o_history
  files {
    ...VideoFileData
  }
  paths {
    screenshot
    preview
    stream
    webp
    vtt
    sprite
    funscript
    interactive_heatmap
    caption
  }
  scene_markers {
    ...SceneMarkerData
  }
  galleries {
    ...SlimGalleryData
  }
  studio {
    ...SlimStudioData
  }
  groups {
    group {
      ...GroupData
    }
    scene_index
  }
  tags {
    ...SlimTagData
  }
  performers {
    ...PerformerData
  }
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
  sceneStreams {
    url
    mime_type
    label
  }
  custom_fields
}
    ${nn}
${se}
${sn}
${Te}
${qe}
${Z}
${ne}`,xr=i.gql`
    fragment SelectSceneData on Scene {
  id
  title
  date
  code
  studio {
    name
  }
  files {
    path
  }
  paths {
    screenshot
  }
}
    `,Y=i.gql`
    fragment ScrapedSceneTagData on ScrapedTag {
  stored_id
  name
  description
  alias_list
  parent {
    stored_id
    name
    description
  }
  remote_site_id
}
    `,Pr=i.gql`
    fragment ScrapedStudioData on ScrapedStudio {
  stored_id
  name
  urls
  parent {
    stored_id
    name
    urls
    image
    details
    aliases
    tags {
      ...ScrapedSceneTagData
    }
    remote_site_id
  }
  image
  details
  aliases
  tags {
    ...ScrapedSceneTagData
  }
  remote_site_id
}
    ${Y}`,st=i.gql`
    fragment ScrapedPerformerData on ScrapedPerformer {
  stored_id
  name
  disambiguation
  gender
  urls
  birthdate
  ethnicity
  country
  eye_color
  height
  measurements
  fake_tits
  penis_length
  circumcised
  career_start
  career_end
  tattoos
  piercings
  aliases
  tags {
    ...ScrapedSceneTagData
  }
  images
  details
  death_date
  hair_color
  weight
  remote_site_id
}
    ${Y}`,on=i.gql`
    fragment ScrapedGroupStudioData on ScrapedStudio {
  stored_id
  name
  urls
}
    `,kr=i.gql`
    fragment ScrapedGroupData on ScrapedGroup {
  name
  aliases
  duration
  date
  rating
  director
  urls
  synopsis
  front_image
  back_image
  studio {
    ...ScrapedGroupStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
}
    ${on}
${Y}`,Be=i.gql`
    fragment ScrapedSceneStudioData on ScrapedStudio {
  stored_id
  name
  urls
  parent {
    stored_id
    name
    urls
    image
    details
    aliases
    tags {
      ...ScrapedSceneTagData
    }
    remote_site_id
  }
  image
  details
  aliases
  tags {
    ...ScrapedSceneTagData
  }
  remote_site_id
}
    ${Y}`,Fe=i.gql`
    fragment ScrapedScenePerformerData on ScrapedPerformer {
  stored_id
  name
  disambiguation
  gender
  urls
  birthdate
  ethnicity
  country
  eye_color
  height
  measurements
  fake_tits
  penis_length
  circumcised
  career_start
  career_end
  tattoos
  piercings
  aliases
  tags {
    ...ScrapedSceneTagData
  }
  remote_site_id
  images
  details
  death_date
  hair_color
  weight
}
    ${Y}`,un=i.gql`
    fragment ScrapedSceneGroupData on ScrapedGroup {
  stored_id
  name
  aliases
  duration
  date
  rating
  director
  urls
  synopsis
  front_image
  back_image
  studio {
    ...ScrapedGroupStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
}
    ${on}
${Y}`,ot=i.gql`
    fragment ScrapedSceneData on ScrapedScene {
  title
  code
  details
  director
  urls
  date
  image
  remote_site_id
  file {
    size
    duration
    video_codec
    audio_codec
    width
    height
    framerate
    bitrate
  }
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
  groups {
    ...ScrapedSceneGroupData
  }
  fingerprints {
    hash
    algorithm
    duration
    submissions
  }
}
    ${Be}
${Y}
${Fe}
${un}`,cn=i.gql`
    fragment ScrapedGalleryData on ScrapedGallery {
  title
  code
  details
  urls
  photographer
  date
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
}
    ${Be}
${Y}
${Fe}`,ln=i.gql`
    fragment ScrapedImageData on ScrapedImage {
  title
  code
  details
  photographer
  urls
  date
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
}
    ${Be}
${Y}
${Fe}`;i.gql`
    fragment ScrapedStashBoxSceneData on ScrapedScene {
  title
  code
  details
  director
  url
  date
  image
  remote_site_id
  duration
  file {
    size
    duration
    video_codec
    audio_codec
    width
    height
    framerate
    bitrate
  }
  fingerprints {
    hash
    algorithm
    duration
    submissions
  }
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
  groups {
    ...ScrapedSceneGroupData
  }
}
    ${Be}
${Y}
${Fe}
${un}`,i.gql`
    fragment ScrapedStashBoxPerformerData on StashBoxPerformerQueryResult {
  query
  results {
    ...ScrapedScenePerformerData
  }
}
    ${Fe}`;const Ee=i.gql`
    fragment StudioData on Studio {
  id
  name
  url
  urls
  parent_studio {
    id
    name
    url
    urls
    image_path
  }
  child_studios {
    id
    name
    image_path
  }
  ignore_auto_tag
  organized
  image_path
  scene_count
  scene_count_all: scene_count(depth: -1)
  image_count
  image_count_all: image_count(depth: -1)
  gallery_count
  gallery_count_all: gallery_count(depth: -1)
  performer_count
  performer_count_all: performer_count(depth: -1)
  group_count
  group_count_all: group_count(depth: -1)
  scene_marker_count
  stash_ids {
    stash_id
    endpoint
    updated_at
  }
  details
  rating100
  favorite
  aliases
  tags {
    ...SlimTagData
  }
  o_counter
  o_counter_all: o_counter(depth: -1)
  custom_fields
}
    ${Z}`,Nr=i.gql`
    fragment SelectStudioData on Studio {
  id
  name
  aliases
  details
  image_path
  parent_studio {
    id
    name
  }
}
    `,me=i.gql`
    fragment TagData on Tag {
  id
  name
  sort_name
  description
  aliases
  ignore_auto_tag
  favorite
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
  image_path
  scene_count
  scene_count_all: scene_count(depth: -1)
  scene_marker_count
  scene_marker_count_all: scene_marker_count(depth: -1)
  image_count
  image_count_all: image_count(depth: -1)
  gallery_count
  gallery_count_all: gallery_count(depth: -1)
  performer_count
  performer_count_all: performer_count(depth: -1)
  studio_count
  studio_count_all: studio_count(depth: -1)
  group_count
  group_count_all: group_count(depth: -1)
  parents {
    ...SlimTagData
  }
  children {
    ...SlimTagData
  }
  custom_fields
}
    ${Z}`,Or=i.gql`
    fragment SelectTagData on Tag {
  id
  name
  sort_name
  favorite
  description
  aliases
  image_path
  parents {
    id
    name
    sort_name
  }
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
}
    `,Cr=i.gql`
    fragment TagListData on Tag {
  id
  name
  sort_name
  description
  aliases
  ignore_auto_tag
  favorite
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
  image_path
  scene_count
  scene_marker_count
  image_count
  gallery_count
  performer_count
  studio_count
  group_count
  parents {
    ...SlimTagData
  }
  children {
    ...SlimTagData
  }
}
    ${Z}`;i.gql`
    mutation Setup($input: SetupInput!) {
  setup(input: $input)
}
    `,i.gql`
    mutation Migrate($input: MigrateInput!) {
  migrate(input: $input)
}
    `,i.gql`
    mutation DownloadFFMpeg {
  downloadFFMpeg
}
    `,i.gql`
    mutation ConfigureGeneral($input: ConfigGeneralInput!) {
  configureGeneral(input: $input) {
    ...ConfigGeneralData
  }
}
    ${Qt}`,i.gql`
    mutation ConfigureInterface($input: ConfigInterfaceInput!) {
  configureInterface(input: $input) {
    ...ConfigInterfaceData
  }
}
    ${Ht}`,i.gql`
    mutation ConfigureDLNA($input: ConfigDLNAInput!) {
  configureDLNA(input: $input) {
    ...ConfigDLNAData
  }
}
    ${Yt}`,i.gql`
    mutation ConfigureScraping($input: ConfigScrapingInput!) {
  configureScraping(input: $input) {
    ...ConfigScrapingData
  }
}
    ${Xt}`,i.gql`
    mutation ConfigureDefaults($input: ConfigDefaultSettingsInput!) {
  configureDefaults(input: $input) {
    ...ConfigDefaultSettingsData
  }
}
    ${At}`,i.gql`
    mutation ConfigureUI($input: Map, $partial: Map) {
  configureUI(input: $input, partial: $partial)
}
    `,i.gql`
    mutation ConfigureUISetting($key: String!, $value: Any) {
  configureUISetting(key: $key, value: $value)
}
    `,i.gql`
    mutation GenerateAPIKey($input: GenerateAPIKeyInput!) {
  generateAPIKey(input: $input)
}
    `,i.gql`
    mutation EnableDLNA($input: EnableDLNAInput!) {
  enableDLNA(input: $input)
}
    `,i.gql`
    mutation DisableDLNA($input: DisableDLNAInput!) {
  disableDLNA(input: $input)
}
    `,i.gql`
    mutation AddTempDLNAIP($input: AddTempDLNAIPInput!) {
  addTempDLNAIP(input: $input)
}
    `,i.gql`
    mutation RemoveTempDLNAIP($input: RemoveTempDLNAIPInput!) {
  removeTempDLNAIP(input: $input)
}
    `,i.gql`
    mutation DeleteFiles($ids: [ID!]!) {
  deleteFiles(ids: $ids)
}
    `,i.gql`
    mutation RevealFileInFileManager($id: ID!) {
  revealFileInFileManager(id: $id)
}
    `,i.gql`
    mutation RevealFolderInFileManager($id: ID!) {
  revealFolderInFileManager(id: $id)
}
    `,i.gql`
    mutation SaveFilter($input: SaveFilterInput!) {
  saveFilter(input: $input) {
    ...SavedFilterData
  }
}
    ${it}`,i.gql`
    mutation DestroySavedFilter($input: DestroyFilterInput!) {
  destroySavedFilter(input: $input)
}
    `,i.gql`
    mutation GalleryChapterCreate($title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterCreate(
    input: {title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${at}`,i.gql`
    mutation GalleryChapterUpdate($id: ID!, $title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterUpdate(
    input: {id: $id, title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${at}`,i.gql`
    mutation GalleryChapterDestroy($id: ID!) {
  galleryChapterDestroy(id: $id)
}
    `,i.gql`
    mutation GalleryCreate($input: GalleryCreateInput!) {
  galleryCreate(input: $input) {
    ...GalleryData
  }
}
    ${pe}`,i.gql`
    mutation GalleryUpdate($input: GalleryUpdateInput!) {
  galleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${pe}`,i.gql`
    mutation BulkGalleryUpdate($input: BulkGalleryUpdateInput!) {
  bulkGalleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${pe}`,i.gql`
    mutation GalleriesUpdate($input: [GalleryUpdateInput!]!) {
  galleriesUpdate(input: $input) {
    ...GalleryData
  }
}
    ${pe}`,i.gql`
    mutation GalleryDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  galleryDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,i.gql`
    mutation AddGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  addGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `,i.gql`
    mutation RemoveGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  removeGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `,i.gql`
    mutation SetGalleryCover($gallery_id: ID!, $cover_image_id: ID!) {
  setGalleryCover(
    input: {gallery_id: $gallery_id, cover_image_id: $cover_image_id}
  )
}
    `,i.gql`
    mutation ResetGalleryCover($gallery_id: ID!) {
  resetGalleryCover(input: {gallery_id: $gallery_id})
}
    `,i.gql`
    mutation GroupCreate($input: GroupCreateInput!) {
  groupCreate(input: $input) {
    ...GroupData
  }
}
    ${qe}`,i.gql`
    mutation GroupUpdate($input: GroupUpdateInput!) {
  groupUpdate(input: $input) {
    ...GroupData
  }
}
    ${qe}`,i.gql`
    mutation BulkGroupUpdate($input: BulkGroupUpdateInput!) {
  bulkGroupUpdate(input: $input) {
    ...GroupData
  }
}
    ${qe}`,i.gql`
    mutation GroupDestroy($id: ID!) {
  groupDestroy(input: {id: $id})
}
    `,i.gql`
    mutation GroupsDestroy($ids: [ID!]!) {
  groupsDestroy(ids: $ids)
}
    `,i.gql`
    mutation AddGroupSubGroups($input: GroupSubGroupAddInput!) {
  addGroupSubGroups(input: $input)
}
    `,i.gql`
    mutation RemoveGroupSubGroups($input: GroupSubGroupRemoveInput!) {
  removeGroupSubGroups(input: $input)
}
    `,i.gql`
    mutation ReorderSubGroups($input: ReorderSubGroupsInput!) {
  reorderSubGroups(input: $input)
}
    `,i.gql`
    mutation ImageUpdate($input: ImageUpdateInput!) {
  imageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Ue}`,i.gql`
    mutation BulkImageUpdate($input: BulkImageUpdateInput!) {
  bulkImageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Ue}`,i.gql`
    mutation ImagesUpdate($input: [ImageUpdateInput!]!) {
  imagesUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Ue}`,i.gql`
    mutation ImageIncrementO($id: ID!) {
  imageIncrementO(id: $id)
}
    `,i.gql`
    mutation ImageDecrementO($id: ID!) {
  imageDecrementO(id: $id)
}
    `,i.gql`
    mutation ImageResetO($id: ID!) {
  imageResetO(id: $id)
}
    `,i.gql`
    mutation ImageDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  imageDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,i.gql`
    mutation ImagesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  imagesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,i.gql`
    mutation StopJob($job_id: ID!) {
  stopJob(job_id: $job_id)
}
    `,i.gql`
    mutation StopAllJobs {
  stopAllJobs
}
    `,i.gql`
    mutation MetadataImport {
  metadataImport
}
    `,i.gql`
    mutation MetadataExport {
  metadataExport
}
    `,i.gql`
    mutation ExportObjects($input: ExportObjectsInput!) {
  exportObjects(input: $input)
}
    `,i.gql`
    mutation ImportObjects($input: ImportObjectsInput!) {
  importObjects(input: $input)
}
    `,i.gql`
    mutation MetadataScan($input: ScanMetadataInput!) {
  metadataScan(input: $input)
}
    `,i.gql`
    mutation MetadataGenerate($input: GenerateMetadataInput!) {
  metadataGenerate(input: $input)
}
    `,i.gql`
    mutation MetadataAutoTag($input: AutoTagMetadataInput!) {
  metadataAutoTag(input: $input)
}
    `,i.gql`
    mutation MetadataIdentify($input: IdentifyMetadataInput!) {
  metadataIdentify(input: $input)
}
    `,i.gql`
    mutation MetadataClean($input: CleanMetadataInput!) {
  metadataClean(input: $input)
}
    `,i.gql`
    mutation MetadataCleanGenerated($input: CleanGeneratedInput!) {
  metadataCleanGenerated(input: $input)
}
    `,i.gql`
    mutation MigrateHashNaming {
  migrateHashNaming
}
    `,i.gql`
    mutation BackupDatabase($input: BackupDatabaseInput!) {
  backupDatabase(input: $input)
}
    `,i.gql`
    mutation AnonymiseDatabase($input: AnonymiseDatabaseInput!) {
  anonymiseDatabase(input: $input)
}
    `,i.gql`
    mutation OptimiseDatabase {
  optimiseDatabase
}
    `,i.gql`
    mutation MigrateSceneScreenshots($input: MigrateSceneScreenshotsInput!) {
  migrateSceneScreenshots(input: $input)
}
    `,i.gql`
    mutation MigrateBlobs($input: MigrateBlobsInput!) {
  migrateBlobs(input: $input)
}
    `,i.gql`
    mutation PerformerCreate($input: PerformerCreateInput!) {
  performerCreate(input: $input) {
    ...PerformerData
  }
}
    ${ne}`,i.gql`
    mutation PerformerUpdate($input: PerformerUpdateInput!) {
  performerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${ne}`,i.gql`
    mutation BulkPerformerUpdate($input: BulkPerformerUpdateInput!) {
  bulkPerformerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${ne}`,i.gql`
    mutation PerformerDestroy($id: ID!) {
  performerDestroy(input: {id: $id})
}
    `,i.gql`
    mutation PerformersDestroy($ids: [ID!]!) {
  performersDestroy(ids: $ids)
}
    `,i.gql`
    mutation PerformerMerge($input: PerformerMergeInput!) {
  performerMerge(input: $input) {
    id
  }
}
    `,i.gql`
    mutation ReloadPlugins {
  reloadPlugins
}
    `,i.gql`
    mutation RunPluginTask($plugin_id: ID!, $task_name: String!, $args_map: Map) {
  runPluginTask(plugin_id: $plugin_id, task_name: $task_name, args_map: $args_map)
}
    `,i.gql`
    mutation ConfigurePlugin($plugin_id: ID!, $input: Map!) {
  configurePlugin(plugin_id: $plugin_id, input: $input)
}
    `,i.gql`
    mutation SetPluginsEnabled($enabledMap: BoolMap!) {
  setPluginsEnabled(enabledMap: $enabledMap)
}
    `,i.gql`
    mutation InstallPluginPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Plugin, packages: $packages)
}
    `,i.gql`
    mutation UpdatePluginPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Plugin, packages: $packages)
}
    `,i.gql`
    mutation UninstallPluginPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Plugin, packages: $packages)
}
    `,i.gql`
    mutation SceneMarkerCreate($title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerCreate(
    input: {title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${se}`,i.gql`
    mutation SceneMarkerUpdate($id: ID!, $title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerUpdate(
    input: {id: $id, title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${se}`,i.gql`
    mutation BulkSceneMarkerUpdate($input: BulkSceneMarkerUpdateInput!) {
  bulkSceneMarkerUpdate(input: $input) {
    ...SceneMarkerData
  }
}
    ${se}`,i.gql`
    mutation SceneMarkerDestroy($id: ID!) {
  sceneMarkerDestroy(id: $id)
}
    `,i.gql`
    mutation SceneMarkersDestroy($ids: [ID!]!) {
  sceneMarkersDestroy(ids: $ids)
}
    `,i.gql`
    mutation SceneCreate($input: SceneCreateInput!) {
  sceneCreate(input: $input) {
    ...SceneData
  }
}
    ${oe}`,i.gql`
    mutation SceneUpdate($input: SceneUpdateInput!) {
  sceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${oe}`,i.gql`
    mutation BulkSceneUpdate($input: BulkSceneUpdateInput!) {
  bulkSceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${oe}`,i.gql`
    mutation ScenesUpdate($input: [SceneUpdateInput!]!) {
  scenesUpdate(input: $input) {
    ...SceneData
  }
}
    ${oe}`,i.gql`
    mutation SceneSaveActivity($id: ID!, $resume_time: Float, $playDuration: Float) {
  sceneSaveActivity(
    id: $id
    resume_time: $resume_time
    playDuration: $playDuration
  )
}
    `,i.gql`
    mutation SceneResetActivity($id: ID!, $reset_resume: Boolean!, $reset_duration: Boolean!) {
  sceneResetActivity(
    id: $id
    reset_resume: $reset_resume
    reset_duration: $reset_duration
  )
}
    `,i.gql`
    mutation SceneAddPlay($id: ID!, $times: [Timestamp!]) {
  sceneAddPlay(id: $id, times: $times) {
    count
    history
  }
}
    `,i.gql`
    mutation SceneDeletePlay($id: ID!, $times: [Timestamp!]) {
  sceneDeletePlay(id: $id, times: $times) {
    count
    history
  }
}
    `,i.gql`
    mutation SceneResetPlayCount($id: ID!) {
  sceneResetPlayCount(id: $id)
}
    `,i.gql`
    mutation SceneAddO($id: ID!, $times: [Timestamp!]) {
  sceneAddO(id: $id, times: $times) {
    count
    history
  }
}
    `,i.gql`
    mutation SceneDeleteO($id: ID!, $times: [Timestamp!]) {
  sceneDeleteO(id: $id, times: $times) {
    count
    history
  }
}
    `,i.gql`
    mutation SceneResetO($id: ID!) {
  sceneResetO(id: $id)
}
    `,i.gql`
    mutation SceneDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  sceneDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,i.gql`
    mutation ScenesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  scenesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,i.gql`
    mutation SceneGenerateScreenshot($id: ID!, $at: Float) {
  sceneGenerateScreenshot(id: $id, at: $at)
}
    `,i.gql`
    mutation SceneAssignFile($input: AssignSceneFileInput!) {
  sceneAssignFile(input: $input)
}
    `,i.gql`
    mutation SceneMerge($input: SceneMergeInput!) {
  sceneMerge(input: $input) {
    id
  }
}
    `,i.gql`
    mutation ReloadScrapers {
  reloadScrapers
}
    `,i.gql`
    mutation InstallScraperPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Scraper, packages: $packages)
}
    `,i.gql`
    mutation UpdateScraperPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Scraper, packages: $packages)
}
    `,i.gql`
    mutation UninstallScraperPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Scraper, packages: $packages)
}
    `,i.gql`
    mutation SubmitStashBoxFingerprints($input: StashBoxFingerprintSubmissionInput!) {
  submitStashBoxFingerprints(input: $input)
}
    `,i.gql`
    mutation StashBoxBatchPerformerTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchPerformerTag(input: $input)
}
    `,i.gql`
    mutation StashBoxBatchStudioTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchStudioTag(input: $input)
}
    `,i.gql`
    mutation StashBoxBatchTagTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchTagTag(input: $input)
}
    `,i.gql`
    mutation SubmitStashBoxSceneDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxSceneDraft(input: $input)
}
    `,i.gql`
    mutation SubmitStashBoxPerformerDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxPerformerDraft(input: $input)
}
    `,i.gql`
    mutation StudioCreate($input: StudioCreateInput!) {
  studioCreate(input: $input) {
    ...StudioData
  }
}
    ${Ee}`,i.gql`
    mutation StudioUpdate($input: StudioUpdateInput!) {
  studioUpdate(input: $input) {
    ...StudioData
  }
}
    ${Ee}`,i.gql`
    mutation BulkStudioUpdate($input: BulkStudioUpdateInput!) {
  bulkStudioUpdate(input: $input) {
    ...StudioData
  }
}
    ${Ee}`,i.gql`
    mutation StudioDestroy($id: ID!) {
  studioDestroy(input: {id: $id})
}
    `,i.gql`
    mutation StudiosDestroy($ids: [ID!]!) {
  studiosDestroy(ids: $ids)
}
    `,i.gql`
    mutation TagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) {
    ...TagData
  }
}
    ${me}`,i.gql`
    mutation TagDestroy($id: ID!) {
  tagDestroy(input: {id: $id})
}
    `,i.gql`
    mutation TagsDestroy($ids: [ID!]!) {
  tagsDestroy(ids: $ids)
}
    `,i.gql`
    mutation TagUpdate($input: TagUpdateInput!) {
  tagUpdate(input: $input) {
    ...TagData
  }
}
    ${me}`,i.gql`
    mutation BulkTagUpdate($input: BulkTagUpdateInput!) {
  bulkTagUpdate(input: $input) {
    ...TagData
  }
}
    ${me}`,i.gql`
    mutation TagsMerge($source: [ID!]!, $destination: ID!, $values: TagUpdateInput) {
  tagsMerge(input: {source: $source, destination: $destination, values: $values}) {
    ...TagData
  }
}
    ${me}`,i.gql`
    query DLNAStatus {
  dlnaStatus {
    running
    until
    recentIPAddresses
    allowedIPAddresses {
      ipAddress
      until
    }
  }
}
    `,i.gql`
    query FindSavedFilter($id: ID!) {
  findSavedFilter(id: $id) {
    ...SavedFilterData
  }
}
    ${it}`,i.gql`
    query FindSavedFilters($mode: FilterMode) {
  findSavedFilters(mode: $mode) {
    ...SavedFilterData
  }
}
    ${it}`,i.gql`
    query FindRootFoldersForSelect($zip_file_filter: MultiCriterionInput) {
  findFolders(
    filter: {per_page: -1, sort: "path", direction: ASC}
    folder_filter: {parent_folder: {modifier: IS_NULL}, zip_file: $zip_file_filter}
  ) {
    count
    folders {
      ...SelectFolderData
    }
  }
}
    ${rt}`,i.gql`
    query FindFoldersForQuery($filter: FindFilterType, $folder_filter: FolderFilterType, $ids: [ID!]) {
  findFolders(filter: $filter, folder_filter: $folder_filter, ids: $ids) {
    count
    folders {
      ...RecursiveFolderData
    }
  }
}
    ${vr}`,i.gql`
    query FindFolderHierarchyForIDs($ids: [ID!]!) {
  findFolders(ids: $ids) {
    count
    folders {
      ...SelectFolderData
      parent_folders {
        ...SelectFolderData
        sub_folders {
          ...SelectFolderData
          zip_file {
            id
          }
        }
      }
    }
  }
}
    ${rt}`,i.gql`
    query FindGalleries($filter: FindFilterType, $gallery_filter: GalleryFilterType) {
  findGalleries(gallery_filter: $gallery_filter, filter: $filter) {
    count
    galleries {
      ...SlimGalleryData
    }
  }
}
    ${sn}`,i.gql`
    query FindGallery($id: ID!) {
  findGallery(id: $id) {
    ...GalleryData
  }
}
    ${pe}`,i.gql`
    query FindGalleriesForSelect($filter: FindFilterType, $gallery_filter: GalleryFilterType, $ids: [ID!]) {
  findGalleries(filter: $filter, gallery_filter: $gallery_filter, ids: $ids) {
    count
    galleries {
      ...SelectGalleryData
    }
  }
}
    ${Ir}`,i.gql`
    query FindGalleryImageID($id: ID!, $index: Int!) {
  findGallery(id: $id) {
    image(index: $index) {
      id
    }
  }
}
    `,i.gql`
    query FindImages($filter: FindFilterType, $image_filter: ImageFilterType, $image_ids: [Int!]) {
  findImages(filter: $filter, image_filter: $image_filter, image_ids: $image_ids) {
    count
    images {
      ...SlimImageData
    }
  }
}
    ${Ue}`,i.gql`
    query FindImagesMetadata($filter: FindFilterType, $image_filter: ImageFilterType, $image_ids: [Int!]) {
  findImages(filter: $filter, image_filter: $image_filter, image_ids: $image_ids) {
    megapixels
    filesize
  }
}
    `,i.gql`
    query FindImage($id: ID!, $checksum: String) {
  findImage(id: $id, checksum: $checksum) {
    ...ImageData
  }
}
    ${qr}`,i.gql`
    query JobQueue {
  jobQueue {
    ...JobData
  }
}
    ${rn}`,i.gql`
    query FindJob($input: FindJobInput!) {
  findJob(input: $input) {
    ...JobData
  }
}
    ${rn}`,i.gql`
    query SceneWall($q: String) {
  sceneWall(q: $q) {
    ...SceneData
  }
}
    ${oe}`,i.gql`
    query MarkerWall($q: String) {
  markerWall(q: $q) {
    ...SceneMarkerData
  }
}
    ${se}`,i.gql`
    query MarkerStrings($q: String, $sort: String) {
  markerStrings(q: $q, sort: $sort) {
    id
    count
    title
  }
}
    `,i.gql`
    query Stats {
  stats {
    scene_count
    scenes_size
    scenes_duration
    image_count
    images_size
    gallery_count
    performer_count
    studio_count
    group_count
    tag_count
    total_o_count
    total_play_duration
    total_play_count
    scenes_played
  }
}
    `,i.gql`
    query Logs {
  logs {
    ...LogEntryData
  }
}
    ${an}`,i.gql`
    query Version {
  version {
    version
    hash
    build_time
  }
}
    `,i.gql`
    query LatestVersion {
  latestversion {
    version
    shorthash
    release_date
    url
  }
}
    `,i.gql`
    query FindGroups($filter: FindFilterType, $group_filter: GroupFilterType) {
  findGroups(filter: $filter, group_filter: $group_filter) {
    count
    groups {
      ...ListGroupData
    }
  }
}
    ${wr}`,i.gql`
    query FindGroup($id: ID!) {
  findGroup(id: $id) {
    ...GroupData
  }
}
    ${qe}`,i.gql`
    query FindGroupsForSelect($filter: FindFilterType, $group_filter: GroupFilterType, $ids: [ID!]) {
  findGroups(filter: $filter, group_filter: $group_filter, ids: $ids) {
    count
    groups {
      ...SelectGroupData
    }
  }
}
    ${Tr}`,i.gql`
    query FindPerformers($filter: FindFilterType, $performer_filter: PerformerFilterType, $performer_ids: [Int!]) {
  findPerformers(
    filter: $filter
    performer_filter: $performer_filter
    performer_ids: $performer_ids
  ) {
    count
    performers {
      ...PerformerData
    }
  }
}
    ${ne}`,i.gql`
    query FindPerformer($id: ID!) {
  findPerformer(id: $id) {
    ...PerformerData
  }
}
    ${ne}`,i.gql`
    query FindPerformersForSelect($filter: FindFilterType, $performer_filter: PerformerFilterType, $ids: [ID!]) {
  findPerformers(filter: $filter, performer_filter: $performer_filter, ids: $ids) {
    count
    performers {
      ...SelectPerformerData
    }
  }
}
    ${Fr}`,i.gql`
    query Plugins {
  plugins {
    id
    name
    enabled
    description
    url
    version
    tasks {
      name
      description
    }
    hooks {
      name
      description
      hooks
    }
    settings {
      name
      display_name
      description
      type
    }
    requires
    paths {
      css
      javascript
    }
  }
}
    `,i.gql`
    query PluginTasks {
  pluginTasks {
    name
    description
    plugin {
      id
      name
      enabled
    }
  }
}
    `,i.gql`
    query InstalledPluginPackages {
  installedPackages(type: Plugin) {
    ...PackageData
  }
}
    ${ge}`,i.gql`
    query InstalledPluginPackagesStatus {
  installedPackages(type: Plugin) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${ge}`,i.gql`
    query AvailablePluginPackages($source: String!) {
  availablePackages(source: $source, type: Plugin) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${ge}`,i.gql`
    query FindSceneMarkers($filter: FindFilterType, $scene_marker_filter: SceneMarkerFilterType) {
  findSceneMarkers(filter: $filter, scene_marker_filter: $scene_marker_filter) {
    count
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${se}`,i.gql`
    query FindScenes($filter: FindFilterType, $scene_filter: SceneFilterType, $scene_ids: [Int!]) {
  findScenes(filter: $filter, scene_filter: $scene_filter, scene_ids: $scene_ids) {
    count
    filesize
    duration
    scenes {
      ...SlimSceneData
    }
  }
}
    ${we}`,i.gql`
    query FindScenesByPathRegex($filter: FindFilterType) {
  findScenesByPathRegex(filter: $filter) {
    count
    filesize
    duration
    scenes {
      ...SlimSceneData
    }
  }
}
    ${we}`,i.gql`
    query FindDuplicateScenes($distance: Int, $duration_diff: Float) {
  findDuplicateScenes(distance: $distance, duration_diff: $duration_diff) {
    ...SlimSceneData
  }
}
    ${we}`,i.gql`
    query FindScene($id: ID!, $checksum: String) {
  findScene(id: $id, checksum: $checksum) {
    ...SceneData
  }
}
    ${oe}`,i.gql`
    query FindFullScenes($ids: [Int!]) {
  findScenes(scene_ids: $ids) {
    scenes {
      ...SceneData
    }
  }
}
    ${oe}`,i.gql`
    query FindSceneMarkerTags($id: ID!) {
  sceneMarkerTags(scene_id: $id) {
    tag {
      id
      name
    }
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${se}`,i.gql`
    query ParseSceneFilenames($filter: FindFilterType!, $config: SceneParserInput!) {
  parseSceneFilenames(filter: $filter, config: $config) {
    count
    results {
      scene {
        ...SlimSceneData
      }
      title
      code
      details
      director
      url
      date
      rating
      studio_id
      gallery_ids
      movies {
        movie_id
      }
      performer_ids
      tag_ids
    }
  }
}
    ${we}`,i.gql`
    query SceneStreams($id: ID!) {
  findScene(id: $id) {
    sceneStreams {
      url
      mime_type
      label
    }
  }
}
    `,i.gql`
    query FindScenesForSelect($filter: FindFilterType, $scene_filter: SceneFilterType, $ids: [ID!]) {
  findScenes(filter: $filter, scene_filter: $scene_filter, ids: $ids) {
    count
    scenes {
      ...SelectSceneData
    }
  }
}
    ${xr}`,i.gql`
    query ListPerformerScrapers {
  listScrapers(types: [PERFORMER]) {
    id
    name
    performer {
      urls
      supported_scrapes
    }
  }
}
    `,i.gql`
    query ListSceneScrapers {
  listScrapers(types: [SCENE]) {
    id
    name
    scene {
      urls
      supported_scrapes
    }
  }
}
    `,i.gql`
    query ListGalleryScrapers {
  listScrapers(types: [GALLERY]) {
    id
    name
    gallery {
      urls
      supported_scrapes
    }
  }
}
    `,i.gql`
    query ListImageScrapers {
  listScrapers(types: [IMAGE]) {
    id
    name
    image {
      urls
      supported_scrapes
    }
  }
}
    `,i.gql`
    query ListGroupScrapers {
  listScrapers(types: [GROUP]) {
    id
    name
    group {
      urls
      supported_scrapes
    }
  }
}
    `,i.gql`
    query ScrapeSingleStudio($source: ScraperSourceInput!, $input: ScrapeSingleStudioInput!) {
  scrapeSingleStudio(source: $source, input: $input) {
    ...ScrapedStudioData
  }
}
    ${Pr}`,i.gql`
    query ScrapeSingleTag($source: ScraperSourceInput!, $input: ScrapeSingleTagInput!) {
  scrapeSingleTag(source: $source, input: $input) {
    ...ScrapedSceneTagData
  }
}
    ${Y}`,i.gql`
    query ScrapeSinglePerformer($source: ScraperSourceInput!, $input: ScrapeSinglePerformerInput!) {
  scrapeSinglePerformer(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${st}`,i.gql`
    query ScrapeMultiPerformers($source: ScraperSourceInput!, $input: ScrapeMultiPerformersInput!) {
  scrapeMultiPerformers(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${st}`,i.gql`
    query ScrapePerformerURL($url: String!) {
  scrapePerformerURL(url: $url) {
    ...ScrapedPerformerData
  }
}
    ${st}`,i.gql`
    query ScrapeSingleScene($source: ScraperSourceInput!, $input: ScrapeSingleSceneInput!) {
  scrapeSingleScene(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${ot}`,i.gql`
    query ScrapeMultiScenes($source: ScraperSourceInput!, $input: ScrapeMultiScenesInput!) {
  scrapeMultiScenes(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${ot}`,i.gql`
    query ScrapeSceneURL($url: String!) {
  scrapeSceneURL(url: $url) {
    ...ScrapedSceneData
  }
}
    ${ot}`,i.gql`
    query ScrapeSingleGallery($source: ScraperSourceInput!, $input: ScrapeSingleGalleryInput!) {
  scrapeSingleGallery(source: $source, input: $input) {
    ...ScrapedGalleryData
  }
}
    ${cn}`,i.gql`
    query ScrapeSingleImage($source: ScraperSourceInput!, $input: ScrapeSingleImageInput!) {
  scrapeSingleImage(source: $source, input: $input) {
    ...ScrapedImageData
  }
}
    ${ln}`,i.gql`
    query ScrapeGalleryURL($url: String!) {
  scrapeGalleryURL(url: $url) {
    ...ScrapedGalleryData
  }
}
    ${cn}`,i.gql`
    query ScrapeImageURL($url: String!) {
  scrapeImageURL(url: $url) {
    ...ScrapedImageData
  }
}
    ${ln}`,i.gql`
    query ScrapeGroupURL($url: String!) {
  scrapeGroupURL(url: $url) {
    ...ScrapedGroupData
  }
}
    ${kr}`,i.gql`
    query InstalledScraperPackages {
  installedPackages(type: Scraper) {
    ...PackageData
  }
}
    ${ge}`,i.gql`
    query InstalledScraperPackagesStatus {
  installedPackages(type: Scraper) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${ge}`,i.gql`
    query AvailableScraperPackages($source: String!) {
  availablePackages(source: $source, type: Scraper) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${ge}`;const jr=i.gql`
    query Configuration {
  configuration {
    ...ConfigData
  }
}
    ${br}`;function Gr(e){const t={...Jt,...e};return Lt.useQuery(jr,t)}const Mr=i.gql`
    query Directory($path: String) {
  directory(path: $path) {
    path
    parent
    directories
  }
}
    `;function Rr(e){const t={...Jt,...e};return Lt.useQuery(Mr,t)}i.gql`
    query ValidateStashBox($input: StashBoxInput!) {
  validateStashBoxCredentials(input: $input) {
    valid
    status
  }
}
    `,i.gql`
    query SystemStatus {
  systemStatus {
    databaseSchema
    databasePath
    appSchema
    status
    configPath
    os
    workingDir
    homeDir
    ffmpegPath
    ffprobePath
  }
}
    `,i.gql`
    query FindStudios($filter: FindFilterType, $studio_filter: StudioFilterType) {
  findStudios(filter: $filter, studio_filter: $studio_filter) {
    count
    studios {
      ...StudioData
    }
  }
}
    ${Ee}`,i.gql`
    query FindStudio($id: ID!) {
  findStudio(id: $id) {
    ...StudioData
  }
}
    ${Ee}`,i.gql`
    query FindStudiosForSelect($filter: FindFilterType, $studio_filter: StudioFilterType, $ids: [ID!]) {
  findStudios(filter: $filter, studio_filter: $studio_filter, ids: $ids) {
    count
    studios {
      ...SelectStudioData
    }
  }
}
    ${Nr}`,i.gql`
    query FindTags($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...TagData
    }
  }
}
    ${me}`,i.gql`
    query FindTag($id: ID!) {
  findTag(id: $id) {
    ...TagData
  }
}
    ${me}`,i.gql`
    query FindTagsForSelect($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...SelectTagData
    }
  }
}
    ${Or}`,i.gql`
    query FindTagsForList($filter: FindFilterType, $tag_filter: TagFilterType) {
  findTags(filter: $filter, tag_filter: $tag_filter) {
    count
    tags {
      ...TagListData
    }
  }
}
    ${Cr}`,i.gql`
    subscription JobsSubscribe {
  jobsSubscribe {
    type
    job {
      id
      status
      subTasks
      description
      progress
      error
      startTime
    }
  }
}
    `,i.gql`
    subscription LoggingSubscribe {
  loggingSubscribe {
    ...LogEntryData
  }
}
    ${an}`;const Lr=i.gql`
    subscription ScanCompleteSubscribe {
  scanCompleteSubscribe
}
    `,dn={},Ur={},fn={},Br={};function zr(e,t){if(dn[e])throw new Error("Component "+e+" has already been registered");return dn[e]=t,t}function Vr(e,t,n,r){if(!e.length)return t.apply(n,r);let a=1;function s(){if(a>=e.length)return t;const o=e[a++];return new Proxy(o,{apply:(u,l,c)=>u.apply(l,c.concat(s()))})}return e[0].apply(n,r.concat(s()))}function Wr(e,t){return new Proxy(t,{apply(n,r,a){let s;for(const o of Ur[e]||[])a=o.apply(r,a);fn[e]?s=Vr(fn[e],n,r,a):s=n.apply(r,a);for(const o of Br[e]||[])s=o.apply(r,a.concat(s));return s}})}function ut(e,t){const n=Wr(e,t);return zr(e,n),n}const pn=ut("Icon",e=>f.jsx(ur.FontAwesomeIcon,{...e,className:`fa-icon ${e.className??""}`}));var gn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var u=arguments[o];u&&(s=a(s,r(u)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var u in s)t.call(s,u)&&s[u]&&(o=a(o,u));return o}function a(s,o){return o?s?s+" "+o:s+o:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(gn);var Jr=gn.exports;const Qr=lr(Jr),mn="LoadingIndicator",Hr=`${mn}-message`,Yr=ut("LoadingIndicator",({message:e,inline:t=!1,small:n=!1,card:r=!1})=>{const s=te.useIntl().formatMessage({id:"loading.generic"});return f.jsxs("div",{className:Qr(mn,{inline:t,small:n,"card-based":r}),children:[f.jsx(A.Spinner,{animation:"border",role:"status",size:n?"sm":void 0,children:f.jsx("span",{className:"sr-only",children:s})}),e!==""&&f.jsx("h4",{className:Hr,children:e??s})]})});var Xr=typeof global=="object"&&global&&global.Object===Object&&global,Ar=typeof self=="object"&&self&&self.Object===Object&&self,yn=Xr||Ar||Function("return this")(),ze=yn.Symbol,hn=Object.prototype,Zr=hn.hasOwnProperty,Kr=hn.toString,xe=ze?ze.toStringTag:void 0;function ei(e){var t=Zr.call(e,xe),n=e[xe];try{e[xe]=void 0;var r=!0}catch{}var a=Kr.call(e);return r&&(t?e[xe]=n:delete e[xe]),a}var ti=Object.prototype,ni=ti.toString;function ri(e){return ni.call(e)}var ii="[object Null]",ai="[object Undefined]",Sn=ze?ze.toStringTag:void 0;function si(e){return e==null?e===void 0?ai:ii:Sn&&Sn in Object(e)?ei(e):ri(e)}function oi(e){return e!=null&&typeof e=="object"}var ui="[object Symbol]";function ci(e){return typeof e=="symbol"||oi(e)&&si(e)==ui}var li=/\s/;function di(e){for(var t=e.length;t--&&li.test(e.charAt(t)););return t}var fi=/^\s+/;function pi(e){return e&&e.slice(0,di(e)+1).replace(fi,"")}function ct(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var $n=NaN,gi=/^[-+]0x[0-9a-f]+$/i,mi=/^0b[01]+$/i,yi=/^0o[0-7]+$/i,hi=parseInt;function _n(e){if(typeof e=="number")return e;if(ci(e))return $n;if(ct(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ct(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=pi(e);var n=mi.test(e);return n||yi.test(e)?hi(e.slice(2),n?2:8):gi.test(e)?$n:+e}var lt=function(){return yn.Date.now()},Si="Expected a function",$i=Math.max,_i=Math.min;function Di(e,t,n){var r,a,s,o,u,l,c=0,m=!1,g=!1,h=!0;if(typeof e!="function")throw new TypeError(Si);t=_n(t)||0,ct(n)&&(m=!!n.leading,g="maxWait"in n,s=g?$i(_n(n.maxWait)||0,t):s,h="trailing"in n?!!n.trailing:h);function d(D){var S=r,G=a;return r=a=void 0,c=D,o=e.apply(G,S),o}function w(D){return c=D,u=setTimeout(P,t),m?d(D):o}function E(D){var S=D-l,G=D-c,O=t-S;return g?_i(O,s-G):O}function N(D){var S=D-l,G=D-c;return l===void 0||S>=t||S<0||g&&G>=s}function P(){var D=lt();if(N(D))return F(D);u=setTimeout(P,E(D))}function F(D){return u=void 0,h&&r?d(D):(r=a=void 0,o)}function k(){u!==void 0&&clearTimeout(u),c=0,r=l=a=u=void 0}function v(){return u===void 0?o:F(lt())}function U(){var D=lt(),S=N(D);if(r=arguments,a=this,l=D,S){if(u===void 0)return w(l);if(g)return clearTimeout(u),u=setTimeout(P,t),d(l)}return u===void 0&&(u=setTimeout(P,t)),o}return U.cancel=k,U.flush=v,U}function bi(e,t,n){const r=H.useRef(e);return r.current=e,H.useCallback(Di(function(){return r.current.apply(this,arguments)},t,n),[t,n==null?void 0:n.leading,n==null?void 0:n.trailing,n==null?void 0:n.maxWait])}const Pe=["byte","kibibyte","mebibyte","gibibyte","tebibyte","pebibyte"],vi=["B","KiB","MiB","GiB","TiB","PiB"],Ii=(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return{size:0,unit:Pe[0]};let t=0,n=e;for(;n>=1024&&t+1<Pe.length;)n/=1024,t++;return{size:n,unit:Pe[t]}},q=class q{constructor(t,n,r,a){this.singular=t,this.plural=n,this.shortString=r,this.secs=a}toString(){return this.shortString}};ee(q,"SECOND",new q("second","seconds","s",1)),ee(q,"MINUTE",new q("minute","minutes","m",60)),ee(q,"HOUR",new q("hour","hours","h",q.MINUTE.secs*60)),ee(q,"DAY",new q("day","days","D",q.HOUR.secs*24)),ee(q,"WEEK",new q("week","weeks","W",q.DAY.secs*7)),ee(q,"MONTH",new q("month","months","M",q.DAY.secs*30)),ee(q,"YEAR",new q("year","years","Y",q.DAY.secs*365)),ee(q,"DURATIONS",[q.SECOND,q.MINUTE,q.HOUR,q.DAY,q.WEEK,q.MONTH,q.YEAR]);let ue=q;class Dn{constructor(t,n){this.count=t,this.duration=n}toString(){return this.count.toString()+this.duration.toString()}}const Ti=(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return[new Dn(0,ue.DURATIONS[0])];const t=[];let n=e;for(let r=ue.DURATIONS.length-1;r>=0;r--){const a=Math.floor(n/ue.DURATIONS[r].secs);a!==0&&(n%=ue.DURATIONS[r].secs,t.push(new Dn(a,ue.DURATIONS[r])))}return t},wi=(e=0,t=2)=>Ti(e).slice(0,t).join(" "),qi=e=>{const t=Pe.indexOf(e);return vi[t]},Fi=e=>Pe.indexOf(e)>=3?1:0,Ve=(e,t)=>{let n=!1;e<0&&(n=!0,e=-e);const r=e%1,a=Math.round(r*1e3);let s=Math.trunc(e);const o=s%60;s=(s-o)/60;const u=s%60;s=(s-u)/60;const l=s;let c=String(o).padStart(2,"0");return l===0?c=String(u)+":"+c:(c=String(u).padStart(2,"0")+":"+c,c=String(l)+":"+c),t&&a>0&&(c+="."+a.toString().padStart(3,"0")),n?"-"+c:c},Ei=(e,t)=>t===void 0?Ve(e):`${Ve(e)}-${Ve(t)}`,xi=e=>{if(!e)return null;const t=e.split(":");if(t.length>3)return null;let n=t[t.length-1],r=0;if(n.includes(".")){const o=n.split(".");if(o.length!==2)return null;n=o[0];const u=parseInt(o[1],10);if(Number.isNaN(u))return null;r=u/1e3}let a=0,s=1;for(;t.length>0;){const o=t.pop();if(o===void 0)return null;const u=parseInt(o,10);if(Number.isNaN(u))return null;a+=s*u,s*=60}return a+r},Pi=e=>e?e.replace(/^.*[\\/]/,""):"No File Name",ki=e=>{if(!e)return null;const t=e.split("-");if(t.length!==3)return null;const n=Number(t[0]),r=Math.max(0,Number(t[1])-1),a=Number(t[2]);return new Date(n,r,a,0,0,0,0)},We=e=>{if(!e)return null;const t=e.split("-");let n=Number(t[0]);Number.isNaN(n)&&(n=new Date().getFullYear());let r=0;t.length>1&&(r=Math.max(0,Number(t[1])-1),(r>11||Number.isNaN(r))&&(r=0));let a=1;return t.length>2&&(a=Number(t[2]),(a>31||Number.isNaN(a))&&(a=1)),new Date(n,r,a,0,0,0,0)},Ni=e=>{if(!e)return null;const t=e.split(" ");let n=null;if(t.length>0&&(n=We(t[0])),n||(n=new Date),t.length>1){const r=t[1].split(":");n&&r.length>0&&n.setHours(Number(r[0])),n&&r.length>1&&n.setMinutes(Number(r[1])),n&&r.length>2&&n.setSeconds(Number(r[2]))}return n};function bn(e){return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`}function Oi(e){return`${bn(e)} ${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`}const Ci=(e,t)=>{if(!e)return 0;const n=We(e),r=t?We(t):new Date;if(!n||!r)return 0;let a=r.getFullYear()-n.getFullYear();return(n.getMonth()>r.getMonth()||n.getMonth()>=r.getMonth()&&n.getDate()>r.getDate())&&(a-=1),a},ji=e=>`${(e/1e6).toFixed(2)} megabits per second`,Gi=(e,t)=>{const n=e>t?t:e;if(n>=6144)return"HUGE";if(n>=3840)return"8K";if(n>=3584)return"7K";if(n>=3e3)return"6K";if(n>=2560)return"5K";if(n>=1920)return"4K";if(n>=1440)return"1440p";if(n>=1080)return"1080p";if(n>=720)return"720p";if(n>=540)return"540p";if(n>=480)return"480p";if(n>=360)return"360p";if(n>=240)return"240p";if(n>=144)return"144p"},vn=(e,t)=>!e||e.startsWith("http://")||e.startsWith("https://")?e:t?e.startsWith(t.host)?`${t.protocol}//${e}`:`${t.protocol}//${t.host}/${e}`:`https://${e}`,Mi=(e,t)=>{if(t)return t.hostname;if(e){let n="";try{const r=vn(e);r&&(e=r),n=new URL(e).hostname}catch{n=e}return n}else return""},In=(e,t,n=!0)=>t?e.formatDate(t,{format:"long",timeZone:n?"utc":void 0}):"",Ri=(e,t,n=!0)=>{if(!t)return"";const r=t.match(/^(\d{4})$/);if(r){const s=parseInt(r[1],10);return e.formatDate(Date.UTC(s,0),{year:"numeric",timeZone:n?"utc":void 0})}const a=t.match(/^(\d{4})-(\d{2})$/);if(a){const s=parseInt(a[1],10),o=parseInt(a[2],10)-1;return e.formatDate(Date.UTC(s,o),{year:"numeric",month:"long",timeZone:n?"utc":void 0})}return e.formatDate(t,{format:"long",timeZone:n?"utc":void 0})},Li=(e,t,n=!1)=>`${In(e,t,n)} ${e.formatTime(t,{timeZone:n?"utc":void 0})}`,dt=["","K","M","B"],Tn={fileSize:Ii,formatFileSizeUnit:qi,fileSizeFractionalDigits:Fi,secondsToTimestamp:Ve,formatTimestampRange:Ei,timestampToSeconds:xi,fileNameFromPath:Pi,stringToDate:ki,stringToFuzzyDate:We,stringToFuzzyDateTime:Ni,dateToString:bn,dateTimeToString:Oi,age:Ci,bitRate:ji,resolution:Gi,sanitiseURL:vn,domainFromURL:Mi,formatDate:In,formatFuzzyDate:Ri,formatDateTime:Li,secondsAsTimeString:wi,abbreviateCounter:(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return{size:0,unit:dt[0]};let t=0,n=0,r=e;for(;r>=1e3&&t+1<dt.length;)r/=1e3,t++,n=1;return{size:r,unit:dt[t],digits:n}},stripQuotes:e=>e.startsWith('"')&&e.endsWith('"')?e.slice(1,-1):e,addQuotes:e=>`"${e}"`};var ft=function(e,t){return ft=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])},ft(e,t)};function Je(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");ft(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var L=function(){return L=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},L.apply(this,arguments)};function ye(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,s;r<a;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}typeof SuppressedError=="function"&&SuppressedError;var pt="Invariant Violation",wn=Object.setPrototypeOf,Ui=wn===void 0?function(e,t){return e.__proto__=t,e}:wn,qn=function(e){Je(t,e);function t(n){n===void 0&&(n=pt);var r=e.call(this,typeof n=="number"?pt+": "+n+" (see https://github.com/apollographql/invariant-packages)":n)||this;return r.framesToPop=1,r.name=pt,Ui(r,t.prototype),r}return t}(Error);function ce(e,t){if(!e)throw new qn(t)}var Fn=["debug","log","warn","error","silent"],Bi=Fn.indexOf("log");function Qe(e){return function(){if(Fn.indexOf(e)>=Bi){var t=console[e]||console.log;return t.apply(console,arguments)}}}(function(e){e.debug=Qe("debug"),e.log=Qe("log"),e.warn=Qe("warn"),e.error=Qe("error")})(ce||(ce={}));var En="3.14.1";function he(e){try{return e()}catch{}}const He=he(function(){return globalThis})||he(function(){return window})||he(function(){return self})||he(function(){return global})||he(function(){return he.constructor("return this")()});var xn=new Map;function zi(e){var t=xn.get(e)||1;return xn.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function Vi(e,t){var n=zi("stringifyForDisplay");return JSON.stringify(e,function(r,a){return a===void 0?n:a},t).split(JSON.stringify(n)).join("<undefined>")}function Ye(e){return function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(typeof t=="number"){var a=t;t=gt(a),t||(t=mt(a,n),n=[])}e.apply(void 0,[t].concat(n))}}var ke=Object.assign(function(t,n){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];t||ce(t,gt(n,r)||mt(n,r))},{debug:Ye(ce.debug),log:Ye(ce.log),warn:Ye(ce.warn),error:Ye(ce.error)});function Ne(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new qn(gt(e,t)||mt(e,t))}var Pn=Symbol.for("ApolloErrorMessageHandler_"+En);function kn(e){if(typeof e=="string")return e;try{return Vi(e,2).slice(0,1e3)}catch{return"<non-serializable>"}}function gt(e,t){if(t===void 0&&(t=[]),!!e)return He[Pn]&&He[Pn](e,t.map(kn))}function mt(e,t){if(t===void 0&&(t=[]),!!e)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:En,message:e,args:t.map(kn)})))}function Wi(e,t){if(!!!e)throw new Error(t)}const Nn={Name:[],Document:["definitions"],OperationDefinition:["description","name","variableDefinitions","directives","selectionSet"],VariableDefinition:["description","variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["description","name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","directives","locations"],SchemaExtension:["directives","operationTypes"],DirectiveExtension:["name","directives"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"],TypeCoordinate:["name"],MemberCoordinate:["name","memberName"],ArgumentCoordinate:["name","fieldName","argumentName"],DirectiveCoordinate:["name"],DirectiveArgumentCoordinate:["name","argumentName"]},Ji=new Set(Object.keys(Nn));function On(e){const t=e==null?void 0:e.kind;return typeof t=="string"&&Ji.has(t)}var Cn;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(Cn||(Cn={}));var yt;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.DIRECTIVE_EXTENSION="DirectiveExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension",e.TYPE_COORDINATE="TypeCoordinate",e.MEMBER_COORDINATE="MemberCoordinate",e.ARGUMENT_COORDINATE="ArgumentCoordinate",e.DIRECTIVE_COORDINATE="DirectiveCoordinate",e.DIRECTIVE_ARGUMENT_COORDINATE="DirectiveArgumentCoordinate"})(yt||(yt={}));function jn(e){return e===9||e===32}function Qi(e,t){const n=e.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),a=r.length===1,s=r.length>1&&r.slice(1).every(d=>d.length===0||jn(d.charCodeAt(0))),o=n.endsWith('\\"""'),u=e.endsWith('"')&&!o,l=e.endsWith("\\"),c=u||l,m=!a||e.length>70||c||s||o;let g="";const h=a&&jn(e.charCodeAt(0));return(m&&!h||s)&&(g+=`
`),g+=n,(m||c)&&(g+=`
`),'"""'+g+'"""'}const Hi=10,Gn=2;function Yi(e){return Xe(e,[])}function Xe(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return Xi(e,t);default:return String(e)}}function Xi(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const n=[...t,e];if(Ai(e)){const r=e.toJSON();if(r!==e)return typeof r=="string"?r:Xe(r,n)}else if(Array.isArray(e))return Ki(e,n);return Zi(e,n)}function Ai(e){return typeof e.toJSON=="function"}function Zi(e,t){const n=Object.entries(e);return n.length===0?"{}":t.length>Gn?"["+ea(e)+"]":"{ "+n.map(([a,s])=>a+": "+Xe(s,t)).join(", ")+" }"}function Ki(e,t){if(e.length===0)return"[]";if(t.length>Gn)return"[Array]";const n=Math.min(Hi,e.length),r=e.length-n,a=[];for(let s=0;s<n;++s)a.push(Xe(e[s],t));return r===1?a.push("... 1 more item"):r>1&&a.push(`... ${r} more items`),"["+a.join(", ")+"]"}function ea(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}function ta(e){return`"${e.replace(na,ra)}"`}const na=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function ra(e){return ia[e.charCodeAt(0)]}const ia=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],aa=Object.freeze({});function sa(e,t,n=Nn){const r=new Map;for(const P of Object.values(yt))r.set(P,oa(t,P));let a,s=Array.isArray(e),o=[e],u=-1,l=[],c=e,m,g;const h=[],d=[];do{u++;const P=u===o.length,F=P&&l.length!==0;if(P){if(m=d.length===0?void 0:h[h.length-1],c=g,g=d.pop(),F)if(s){c=c.slice();let v=0;for(const[U,D]of l){const S=U-v;D===null?(c.splice(S,1),v++):c[S]=D}}else{c={...c};for(const[v,U]of l)c[v]=U}u=a.index,o=a.keys,l=a.edits,s=a.inArray,a=a.prev}else if(g){if(m=s?u:o[u],c=g[m],c==null)continue;h.push(m)}let k;if(!Array.isArray(c)){var w,E;On(c)||Wi(!1,`Invalid AST Node: ${Yi(c)}.`);const v=P?(w=r.get(c.kind))===null||w===void 0?void 0:w.leave:(E=r.get(c.kind))===null||E===void 0?void 0:E.enter;if(k=v==null?void 0:v.call(t,c,m,g,h,d),k===aa)break;if(k===!1){if(!P){h.pop();continue}}else if(k!==void 0&&(l.push([m,k]),!P))if(On(k))c=k;else{h.pop();continue}}if(k===void 0&&F&&l.push([m,c]),P)h.pop();else{var N;a={inArray:s,index:u,keys:o,edits:l,prev:a},s=Array.isArray(c),o=s?c:(N=n[c.kind])!==null&&N!==void 0?N:[],u=-1,l=[],g&&d.push(g),g=c}}while(a!==void 0);return l.length!==0?l[l.length-1][1]:e}function oa(e,t){const n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function ua(e){return sa(e,la)}const ca=80,la={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>p(e.definitions,`

`)},OperationDefinition:{leave(e){const t=ht(e.variableDefinitions)?_(`(
`,p(e.variableDefinitions,`
`),`
)`):_("(",p(e.variableDefinitions,", "),")"),n=_("",e.description,`
`)+p([e.operation,p([e.name,t]),p(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r,description:a})=>_("",a,`
`)+e+": "+t+_(" = ",n)+_(" ",p(r," "))},SelectionSet:{leave:({selections:e})=>X(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:a}){const s=_("",e,": ")+t;let o=s+_("(",p(n,", "),")");return o.length>ca&&(o=s+_(`(
`,Ae(p(n,`
`)),`
)`)),p([o,p(r," "),a]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+_(" ",p(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>p(["...",_("on ",e),p(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:a,description:s})=>_("",s,`
`)+`fragment ${e}${_("(",p(n,", "),")")} on ${t} ${_("",p(r," ")," ")}`+a},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?Qi(e):ta(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+p(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+p(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+_("(",p(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>_("",e,`
`)+p(["schema",p(t," "),X(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>_("",e,`
`)+p(["scalar",t,p(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:a})=>_("",e,`
`)+p(["type",t,_("implements ",p(n," & ")),p(r," "),X(a)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:a})=>_("",e,`
`)+t+(ht(n)?_(`(
`,Ae(p(n,`
`)),`
)`):_("(",p(n,", "),")"))+": "+r+_(" ",p(a," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:a})=>_("",e,`
`)+p([t+": "+n,_("= ",r),p(a," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:a})=>_("",e,`
`)+p(["interface",t,_("implements ",p(n," & ")),p(r," "),X(a)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>_("",e,`
`)+p(["union",t,p(n," "),_("= ",p(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>_("",e,`
`)+p(["enum",t,p(n," "),X(r)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>_("",e,`
`)+p([t,p(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>_("",e,`
`)+p(["input",t,p(n," "),X(r)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,directives:r,repeatable:a,locations:s})=>_("",e,`
`)+"directive @"+t+(ht(n)?_(`(
`,Ae(p(n,`
`)),`
)`):_("(",p(n,", "),")"))+_(" ",p(r," "))+(a?" repeatable":"")+" on "+p(s," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>p(["extend schema",p(e," "),X(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>p(["extend scalar",e,p(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>p(["extend type",e,_("implements ",p(t," & ")),p(n," "),X(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>p(["extend interface",e,_("implements ",p(t," & ")),p(n," "),X(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>p(["extend union",e,p(t," "),_("= ",p(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>p(["extend enum",e,p(t," "),X(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>p(["extend input",e,p(t," "),X(n)]," ")},DirectiveExtension:{leave:({name:e,directives:t})=>p(["extend directive @"+e,p(t," ")]," ")},TypeCoordinate:{leave:({name:e})=>e},MemberCoordinate:{leave:({name:e,memberName:t})=>p([e,_(".",t)])},ArgumentCoordinate:{leave:({name:e,fieldName:t,argumentName:n})=>p([e,_(".",t),_("(",n,":)")])},DirectiveCoordinate:{leave:({name:e})=>p(["@",e])},DirectiveArgumentCoordinate:{leave:({name:e,argumentName:t})=>p(["@",e,_("(",t,":)")])}};function p(e,t=""){var n;return(n=e==null?void 0:e.filter(r=>r).join(t))!==null&&n!==void 0?n:""}function X(e){return _(`{
`,Ae(p(e,`
`)),`
}`)}function _(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function Ae(e){return _("  ",e.replace(/\n/g,`
  `))}function ht(e){var t;return(t=e==null?void 0:e.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}function St(e){return e!==null&&typeof e=="object"}function $t(){}const da=$t,fa=typeof WeakRef<"u"?WeakRef:function(e){return{deref:()=>e}},pa=typeof WeakMap<"u"?WeakMap:Map,ga=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:$t,unregister:$t}},ma=10024;class Mn{constructor(t=1/0,n=da){this.max=t,this.dispose=n,this.map=new pa,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{const r=this.unfinalizedNodes.values();for(let a=0;a<ma;a++){const s=r.next().value;if(!s)break;this.unfinalizedNodes.delete(s);const o=s.key;delete s.key,s.keyRef=new fa(o),this.registry.register(o,s,s)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new ga(this.deleteNode.bind(this))}has(t){return this.map.has(t)}get(t){const n=this.getNode(t);return n&&n.value}getNode(t){const n=this.map.get(t);if(n&&n!==this.newest){const{older:r,newer:a}=n;a&&(a.older=r),r&&(r.newer=a),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=a)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.scheduleFinalization(r),this.map.set(t,r),this.size++,r.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(t){t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.size--;const n=t.key||t.keyRef&&t.keyRef.deref();this.dispose(t.value,n),t.keyRef?this.registry.unregister(t):this.unfinalizedNodes.delete(t),n&&this.map.delete(n)}delete(t){const n=this.map.get(t);return n?(this.deleteNode(n),!0):!1}scheduleFinalization(t){this.unfinalizedNodes.add(t),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}}var _t=new WeakSet;function ya(e){e.size<=(e.max||-1)||_t.has(e)||(_t.add(e),setTimeout(function(){e.clean(),_t.delete(e)},100))}var ha=function(e,t){var n=new Mn(e,t);return n.set=function(r,a){var s=Mn.prototype.set.call(this,r,a);return ya(this),s},n},Sa=Symbol.for("apollo.cacheSize"),$a=L({},He[Sa]);function _a(e){ke(e&&e.kind==="Document",115);var t=e.definitions.filter(function(n){return n.kind!=="FragmentDefinition"}).map(function(n){if(n.kind!=="OperationDefinition")throw Ne(116,n.kind);return n});return ke(t.length<=1,117,t.length),e}function Da(e){return e.definitions.filter(function(t){return t.kind==="OperationDefinition"&&!!t.name}).map(function(t){return t.name.value})[0]||null}function ba(e){_a(e);for(var t,n=0,r=e.definitions;n<r.length;n++){var a=r[n];if(a.kind==="OperationDefinition"){var s=a.operation;if(s==="query"||s==="mutation"||s==="subscription")return a}a.kind==="FragmentDefinition"&&!t&&(t=a)}if(t)return t;throw Ne(122)}let B=null;const Rn={};let va=1;const Ia=()=>class{constructor(){this.id=["slot",va++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let t=B;t;t=t.parent)if(this.id in t.slots){const n=t.slots[this.id];if(n===Rn)break;return t!==B&&(B.slots[this.id]=n),!0}return B&&(B.slots[this.id]=Rn),!1}getValue(){if(this.hasValue())return B.slots[this.id]}withValue(t,n,r,a){const s={__proto__:null,[this.id]:t},o=B;B={parent:o,slots:s};try{return n.apply(a,r)}finally{B=o}}static bind(t){const n=B;return function(){const r=B;try{return B=n,t.apply(this,arguments)}finally{B=r}}}static noContext(t,n,r){if(B){const a=B;try{return B=null,t.apply(r,n)}finally{B=a}}else return t.apply(r,n)}};function Ln(e){try{return e()}catch{}}const Dt="@wry/context:Slot",Un=Ln(()=>globalThis)||Ln(()=>global)||Object.create(null),bt=Un[Dt]||Array[Dt]||function(e){try{Object.defineProperty(Un,Dt,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}}(Ia()),{bind:Qs,noContext:Hs}=bt;new bt;var vt,It=Object.assign(function(e){var t=vt.get(e);return t||(t=ua(e),vt.set(e,t)),t},{reset:function(){vt=new ha($a.print||2e3)}});It.reset();function Ta(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=wa(e))||t){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wa(e,t){if(e){if(typeof e=="string")return Bn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bn(e,t)}}function Bn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Tt(e,t,n){return t&&zn(e.prototype,t),n&&zn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var wt=function(){return typeof Symbol=="function"},qt=function(e){return wt()&&!!Symbol[e]},Ft=function(e){return qt(e)?Symbol[e]:"@@"+e};wt()&&!qt("observable")&&(Symbol.observable=Symbol("observable"));var qa=Ft("iterator"),Et=Ft("observable"),Vn=Ft("species");function Ze(e,t){var n=e[t];if(n!=null){if(typeof n!="function")throw new TypeError(n+" is not a function");return n}}function Oe(e){var t=e.constructor;return t!==void 0&&(t=t[Vn],t===null&&(t=void 0)),t!==void 0?t:R}function Fa(e){return e instanceof R}function Se(e){Se.log?Se.log(e):setTimeout(function(){throw e})}function Ke(e){Promise.resolve().then(function(){try{e()}catch(t){Se(t)}})}function Wn(e){var t=e._cleanup;if(t!==void 0&&(e._cleanup=void 0,!!t))try{if(typeof t=="function")t();else{var n=Ze(t,"unsubscribe");n&&n.call(t)}}catch(r){Se(r)}}function xt(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function Ea(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var n=0;n<t.length&&(Jn(e,t[n].type,t[n].value),e._state!=="closed");++n);}}function Jn(e,t,n){e._state="running";var r=e._observer;try{var a=Ze(r,t);switch(t){case"next":a&&a.call(r,n);break;case"error":if(xt(e),a)a.call(r,n);else throw n;break;case"complete":xt(e),a&&a.call(r);break}}catch(s){Se(s)}e._state==="closed"?Wn(e):e._state==="running"&&(e._state="ready")}function Pt(e,t,n){if(e._state!=="closed"){if(e._state==="buffering"){e._queue.push({type:t,value:n});return}if(e._state!=="ready"){e._state="buffering",e._queue=[{type:t,value:n}],Ke(function(){return Ea(e)});return}Jn(e,t,n)}}var xa=function(){function e(n,r){this._cleanup=void 0,this._observer=n,this._queue=void 0,this._state="initializing";var a=new Pa(this);try{this._cleanup=r.call(void 0,a)}catch(s){a.error(s)}this._state==="initializing"&&(this._state="ready")}var t=e.prototype;return t.unsubscribe=function(){this._state!=="closed"&&(xt(this),Wn(this))},Tt(e,[{key:"closed",get:function(){return this._state==="closed"}}]),e}(),Pa=function(){function e(n){this._subscription=n}var t=e.prototype;return t.next=function(r){Pt(this._subscription,"next",r)},t.error=function(r){Pt(this._subscription,"error",r)},t.complete=function(){Pt(this._subscription,"complete")},Tt(e,[{key:"closed",get:function(){return this._subscription._state==="closed"}}]),e}(),R=function(){function e(n){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if(typeof n!="function")throw new TypeError("Observable initializer must be a function");this._subscriber=n}var t=e.prototype;return t.subscribe=function(r){return(typeof r!="object"||r===null)&&(r={next:r,error:arguments[1],complete:arguments[2]}),new xa(r,this._subscriber)},t.forEach=function(r){var a=this;return new Promise(function(s,o){if(typeof r!="function"){o(new TypeError(r+" is not a function"));return}function u(){l.unsubscribe(),s()}var l=a.subscribe({next:function(c){try{r(c,u)}catch(m){o(m),l.unsubscribe()}},error:o,complete:s})})},t.map=function(r){var a=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var s=Oe(this);return new s(function(o){return a.subscribe({next:function(u){try{u=r(u)}catch(l){return o.error(l)}o.next(u)},error:function(u){o.error(u)},complete:function(){o.complete()}})})},t.filter=function(r){var a=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var s=Oe(this);return new s(function(o){return a.subscribe({next:function(u){try{if(!r(u))return}catch(l){return o.error(l)}o.next(u)},error:function(u){o.error(u)},complete:function(){o.complete()}})})},t.reduce=function(r){var a=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var s=Oe(this),o=arguments.length>1,u=!1,l=arguments[1],c=l;return new s(function(m){return a.subscribe({next:function(g){var h=!u;if(u=!0,!h||o)try{c=r(c,g)}catch(d){return m.error(d)}else c=g},error:function(g){m.error(g)},complete:function(){if(!u&&!o)return m.error(new TypeError("Cannot reduce an empty sequence"));m.next(c),m.complete()}})})},t.concat=function(){for(var r=this,a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];var u=Oe(this);return new u(function(l){var c,m=0;function g(h){c=h.subscribe({next:function(d){l.next(d)},error:function(d){l.error(d)},complete:function(){m===s.length?(c=void 0,l.complete()):g(u.from(s[m++]))}})}return g(r),function(){c&&(c.unsubscribe(),c=void 0)}})},t.flatMap=function(r){var a=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var s=Oe(this);return new s(function(o){var u=[],l=a.subscribe({next:function(m){if(r)try{m=r(m)}catch(h){return o.error(h)}var g=s.from(m).subscribe({next:function(h){o.next(h)},error:function(h){o.error(h)},complete:function(){var h=u.indexOf(g);h>=0&&u.splice(h,1),c()}});u.push(g)},error:function(m){o.error(m)},complete:function(){c()}});function c(){l.closed&&u.length===0&&o.complete()}return function(){u.forEach(function(m){return m.unsubscribe()}),l.unsubscribe()}})},t[Et]=function(){return this},e.from=function(r){var a=typeof this=="function"?this:e;if(r==null)throw new TypeError(r+" is not an object");var s=Ze(r,Et);if(s){var o=s.call(r);if(Object(o)!==o)throw new TypeError(o+" is not an object");return Fa(o)&&o.constructor===a?o:new a(function(u){return o.subscribe(u)})}if(qt("iterator")&&(s=Ze(r,qa),s))return new a(function(u){Ke(function(){if(!u.closed){for(var l=Ta(s.call(r)),c;!(c=l()).done;){var m=c.value;if(u.next(m),u.closed)return}u.complete()}})});if(Array.isArray(r))return new a(function(u){Ke(function(){if(!u.closed){for(var l=0;l<r.length;++l)if(u.next(r[l]),u.closed)return;u.complete()}})});throw new TypeError(r+" is not observable")},e.of=function(){for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];var o=typeof this=="function"?this:e;return new o(function(u){Ke(function(){if(!u.closed){for(var l=0;l<a.length;++l)if(u.next(a[l]),u.closed)return;u.complete()}})})},Tt(e,null,[{key:Vn,get:function(){return this}}]),e}();wt()&&Object.defineProperty(R,Symbol("extensions"),{value:{symbol:Et,hostReportError:Se},configurable:!0});function ka(e){var t,n=e.Symbol;if(typeof n=="function")if(n.observable)t=n.observable;else{typeof n.for=="function"?t=n.for("https://github.com/benlesh/symbol-observable"):t=n("https://github.com/benlesh/symbol-observable");try{n.observable=t}catch{}}else t="@@observable";return t}var $e;typeof self<"u"?$e=self:typeof window<"u"?$e=window:typeof global<"u"?$e=global:typeof module<"u"?$e=module:$e=Function("return this")(),ka($e);var Qn=R.prototype,Hn="@@observable";Qn[Hn]||(Qn[Hn]=function(){return this});var kt,Na=Symbol.for("apollo.deprecations"),Yn=Symbol.for("apollo.deprecations.slot"),Nt=He,Oa=(kt=Nt[Yn])!==null&&kt!==void 0?kt:Nt[Yn]=new bt;function Ca(e){return Nt[Na]||(Oa.getValue()||[]).includes(e)}function ja(e,t){Ca(e)||t()}var Xn=function(e,t,n){var r=new Error(n);throw r.name="ServerError",r.response=e,r.statusCode=e.status,r.result=t,r};function Ga(e){for(var t=["query","operationName","variables","extensions","context"],n=0,r=Object.keys(e);n<r.length;n++){var a=r[n];if(t.indexOf(a)<0)throw Ne(58,a)}return e}function Ma(e,t){var n=L({},e),r=function(s){typeof s=="function"?n=L(L({},n),s(n)):n=L(L({},n),s)},a=function(){return L({},n)};return Object.defineProperty(t,"setContext",{enumerable:!1,value:r}),Object.defineProperty(t,"getContext",{enumerable:!1,value:a}),t}function Ra(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName=typeof t.query!="string"?Da(t.query)||void 0:""),t}function An(e,t){return t?t(e):R.of()}function Ce(e){return typeof e=="function"?new je(e):e}function et(e){return e.request.length<=1}var je=function(){function e(t){t&&(this.request=t)}return e.empty=function(){return new e(function(){return R.of()})},e.from=function(t){return t.length===0?e.empty():t.map(Ce).reduce(function(n,r){return n.concat(r)})},e.split=function(t,n,r){var a=Ce(n),s=Ce(r||new e(An)),o;return et(a)&&et(s)?o=new e(function(u){return t(u)?a.request(u)||R.of():s.request(u)||R.of()}):o=new e(function(u,l){return t(u)?a.request(u,l)||R.of():s.request(u,l)||R.of()}),Object.assign(o,{left:a,right:s})},e.execute=function(t,n){return t.request(Ma(n.context,Ra(Ga(n))))||R.of()},e.concat=function(t,n){var r=Ce(t);if(et(r))return globalThis.__DEV__!==!1&&ke.warn(47,r),r;var a=Ce(n),s;return et(a)?s=new e(function(o){return r.request(o,function(u){return a.request(u)||R.of()})||R.of()}):s=new e(function(o,u){return r.request(o,function(l){return a.request(l,u)||R.of()})||R.of()}),Object.assign(s,{left:r,right:a})},e.prototype.split=function(t,n,r){return this.concat(e.split(t,n,r||new e(An)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(t,n){throw Ne(48)},e.prototype.onError=function(t,n){if(globalThis.__DEV__!==!1&&ja("onError",function(){globalThis.__DEV__!==!1&&ke.warn(49)}),n&&n.error)return n.error(t),!1;throw t},e.prototype.setOnError=function(t){return globalThis.__DEV__!==!1&&globalThis.__DEV__!==!1&&ke.warn(50),this.onError=t,this},e}(),Zn=Symbol();function La(e){return e.extensions?Array.isArray(e.extensions[Zn]):!1}var Ua=function(e){var t=ye(ye(ye([],e.graphQLErrors,!0),e.clientErrors,!0),e.protocolErrors,!0);return e.networkError&&t.push(e.networkError),t.map(function(n){return St(n)&&n.message||"Error message not found."}).join(`
`)},Ba=function(e){Je(t,e);function t(n){var r=n.graphQLErrors,a=n.protocolErrors,s=n.clientErrors,o=n.networkError,u=n.errorMessage,l=n.extraInfo,c=e.call(this,u)||this;return c.name="ApolloError",c.graphQLErrors=r||[],c.protocolErrors=a||[],c.clientErrors=s||[],c.networkError=o||null,c.message=u||Ua(c),c.extraInfo=l,c.cause=ye(ye(ye([o],r||[],!0),a||[],!0),s||[],!0).find(function(m){return!!m})||null,c.__proto__=t.prototype,c}return t}(Error);function za(e){return St(e)&&"code"in e&&"reason"in e}function Va(e){var t;return St(e)&&((t=e.target)===null||t===void 0?void 0:t.readyState)===WebSocket.CLOSED}var Wa=function(e){Je(t,e);function t(n){var r=e.call(this)||this;return r.client=n,r}return t.prototype.request=function(n){var r=this;return new R(function(a){return r.client.subscribe(L(L({},n),{query:It(n.query)}),{next:a.next.bind(a),complete:a.complete.bind(a),error:function(s){if(s instanceof Error)return a.error(s);var o=za(s);return o||Va(s)?a.error(new Error("Socket closed".concat(o?" with event ".concat(s.code):"").concat(o?" ".concat(s.reason):""))):a.error(new Ba({graphQLErrors:Array.isArray(s)?s:[s]}))}})})},t}(je);function W(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function le(e){return W(e)==="object"}function Ja(e){return Array.isArray(e)&&e.length>0&&e.every(t=>"message"in t)}function Kn(e,t){return e.length<124?e:t}const Qa="graphql-transport-ws";var Q;(function(e){e[e.InternalServerError=4500]="InternalServerError",e[e.InternalClientError=4005]="InternalClientError",e[e.BadRequest=4400]="BadRequest",e[e.BadResponse=4004]="BadResponse",e[e.Unauthorized=4401]="Unauthorized",e[e.Forbidden=4403]="Forbidden",e[e.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",e[e.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",e[e.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",e[e.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",e[e.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests"})(Q||(Q={}));var j;(function(e){e.ConnectionInit="connection_init",e.ConnectionAck="connection_ack",e.Ping="ping",e.Pong="pong",e.Subscribe="subscribe",e.Next="next",e.Error="error",e.Complete="complete"})(j||(j={}));function er(e){if(!le(e))throw new Error(`Message is expected to be an object, but got ${W(e)}`);if(!e.type)throw new Error("Message is missing the 'type' property");if(typeof e.type!="string")throw new Error(`Message is expects the 'type' property to be a string, but got ${W(e.type)}`);switch(e.type){case j.ConnectionInit:case j.ConnectionAck:case j.Ping:case j.Pong:{if(e.payload!=null&&!le(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);break}case j.Subscribe:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${W(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!le(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${W(e.payload)}`);if(typeof e.payload.query!="string")throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${W(e.payload.query)}`);if(e.payload.variables!=null&&!le(e.payload.variables))throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${W(e.payload.variables)}`);if(e.payload.operationName!=null&&W(e.payload.operationName)!=="string")throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${W(e.payload.operationName)}`);if(e.payload.extensions!=null&&!le(e.payload.extensions))throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${W(e.payload.extensions)}`);break}case j.Next:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${W(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!le(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${W(e.payload)}`);break}case j.Error:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${W(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!Ja(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);break}case j.Complete:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${W(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);break}default:throw new Error(`Invalid message 'type' property "${e.type}"`)}return e}function Ha(e,t){return er(typeof e=="string"?JSON.parse(e,t):e)}function Ge(e,t){return er(e),JSON.stringify(e,t)}var _e=function(e){return this instanceof _e?(this.v=e,this):new _e(e)},Ya=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),a,s=[];return a=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",o),a[Symbol.asyncIterator]=function(){return this},a;function o(d){return function(w){return Promise.resolve(w).then(d,g)}}function u(d,w){r[d]&&(a[d]=function(E){return new Promise(function(N,P){s.push([d,E,N,P])>1||l(d,E)})},w&&(a[d]=w(a[d])))}function l(d,w){try{c(r[d](w))}catch(E){h(s[0][3],E)}}function c(d){d.value instanceof _e?Promise.resolve(d.value.v).then(m,g):h(s[0][2],d)}function m(d){l("next",d)}function g(d){l("throw",d)}function h(d,w){d(w),s.shift(),s.length&&l(s[0][0],s[0][1])}};function Xa(e){const{url:t,connectionParams:n,lazy:r=!0,onNonLazyError:a=console.error,lazyCloseTimeout:s=0,keepAlive:o=0,disablePong:u,connectionAckWaitTimeout:l=0,retryAttempts:c=5,retryWait:m=async function($){let y=1e3;for(let I=0;I<$;I++)y*=2;await new Promise(I=>setTimeout(I,y+Math.floor(Math.random()*2700+300)))},shouldRetry:g=Ot,isFatalConnectionProblem:h,on:d,webSocketImpl:w,generateID:E=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,$=>{const y=Math.random()*16|0;return($=="x"?y:y&3|8).toString(16)})},jsonMessageReplacer:N,jsonMessageReviver:P}=e;let F;if(w){if(!Za(w))throw new Error("Invalid WebSocket implementation provided");F=w}else typeof WebSocket<"u"?F=WebSocket:typeof global<"u"?F=global.WebSocket||global.MozWebSocket:typeof window<"u"&&(F=window.WebSocket||window.MozWebSocket);if(!F)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const k=F,v=(()=>{const b=(()=>{const y={};return{on(I,T){return y[I]=T,()=>{delete y[I]}},emit(I){var T;"id"in I&&((T=y[I.id])===null||T===void 0||T.call(y,I))}}})(),$={connecting:d!=null&&d.connecting?[d.connecting]:[],opened:d!=null&&d.opened?[d.opened]:[],connected:d!=null&&d.connected?[d.connected]:[],ping:d!=null&&d.ping?[d.ping]:[],pong:d!=null&&d.pong?[d.pong]:[],message:d!=null&&d.message?[b.emit,d.message]:[b.emit],closed:d!=null&&d.closed?[d.closed]:[],error:d!=null&&d.error?[d.error]:[]};return{onMessage:b.on,on(y,I){const T=$[y];return T.push(I),()=>{T.splice(T.indexOf(I),1)}},emit(y,...I){for(const T of[...$[y]])T(...I)}}})();function U(b){const $=[v.on("error",y=>{$.forEach(I=>I()),b(y)}),v.on("closed",y=>{$.forEach(I=>I()),b(y)})]}let D,S=0,G,O=!1,M=0,C=!1;async function ie(){clearTimeout(G);const[b,$]=await(D??(D=new Promise((T,J)=>(async()=>{if(O){if(await m(M),!S)return D=void 0,J({code:1e3,reason:"All Subscriptions Gone"});M++}v.emit("connecting",O);const x=new k(typeof t=="function"?await t():t,Qa);let ae,Le;function nt(){isFinite(o)&&o>0&&(clearTimeout(Le),Le=setTimeout(()=>{x.readyState===k.OPEN&&(x.send(Ge({type:j.Ping})),v.emit("ping",!1,void 0))},o))}U(V=>{D=void 0,clearTimeout(ae),clearTimeout(Le),J(V),V instanceof tr&&(x.close(4499,"Terminated"),x.onerror=null,x.onclose=null)}),x.onerror=V=>v.emit("error",V),x.onclose=V=>v.emit("closed",V),x.onopen=async()=>{try{v.emit("opened",x);const V=typeof n=="function"?await n():n;if(x.readyState!==k.OPEN)return;x.send(Ge(V?{type:j.ConnectionInit,payload:V}:{type:j.ConnectionInit},N)),isFinite(l)&&l>0&&(ae=setTimeout(()=>{x.close(Q.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")},l)),nt()}catch(V){v.emit("error",V),x.close(Q.InternalClientError,Kn(V instanceof Error?V.message:new Error(V).message,"Internal client error"))}};let ve=!1;x.onmessage=({data:V})=>{try{const z=Ha(V,P);if(v.emit("message",z),z.type==="ping"||z.type==="pong"){v.emit(z.type,!0,z.payload),z.type==="pong"?nt():u||(x.send(Ge(z.payload?{type:j.Pong,payload:z.payload}:{type:j.Pong})),v.emit("pong",!1,z.payload));return}if(ve)return;if(z.type!==j.ConnectionAck)throw new Error(`First message cannot be of type ${z.type}`);clearTimeout(ae),ve=!0,v.emit("connected",x,z.payload,O),O=!1,M=0,T([x,new Promise((As,Ls)=>U(Ls))])}catch(z){x.onmessage=null,v.emit("error",z),x.close(Q.BadResponse,Kn(z instanceof Error?z.message:new Error(z).message,"Bad response"))}}})())));b.readyState===k.CLOSING&&await $;let y=()=>{};const I=new Promise(T=>y=T);return[b,y,Promise.race([I.then(()=>{if(!S){const T=()=>b.close(1e3,"Normal Closure");isFinite(s)&&s>0?G=setTimeout(()=>{b.readyState===k.OPEN&&T()},s):T()}}),$])]}function fe(b){if(Ot(b)&&(Aa(b.code)||[Q.InternalServerError,Q.InternalClientError,Q.BadRequest,Q.BadResponse,Q.Unauthorized,Q.SubprotocolNotAcceptable,Q.SubscriberAlreadyExists,Q.TooManyInitialisationRequests].includes(b.code)))throw b;if(C)return!1;if(Ot(b)&&b.code===1e3)return S>0;if(!c||M>=c||!g(b)||h!=null&&h(b))throw b;return O=!0}r||(async()=>{for(S++;;)try{const[,,b]=await ie();await b}catch(b){try{if(!fe(b))return}catch($){return a==null?void 0:a($)}}})();function be(b,$){const y=E(b);let I=!1,T=!1,J=()=>{S--,I=!0};return(async()=>{for(S++;;)try{const[x,ae,Le]=await ie();if(I)return ae();const nt=v.onMessage(y,ve=>{switch(ve.type){case j.Next:{$.next(ve.payload);return}case j.Error:{T=!0,I=!0,$.error(ve.payload),J();return}case j.Complete:{I=!0,J();return}}});x.send(Ge({id:y,type:j.Subscribe,payload:b},N)),J=()=>{!I&&x.readyState===k.OPEN&&x.send(Ge({id:y,type:j.Complete},N)),S--,I=!0,ae()},await Le.finally(nt);return}catch(x){if(!fe(x))return}})().then(()=>{T||$.complete()}).catch(x=>{$.error(x)}),()=>{I||J()}}return{on:v.on,subscribe:be,iterate(b){const $=[],y={done:!1,error:null,resolve:()=>{}},I=be(b,{next(J){$.push(J),y.resolve()},error(J){y.done=!0,y.error=J,y.resolve()},complete(){y.done=!0,y.resolve()}}),T=function(){return Ya(this,arguments,function*(){for(;;){for($.length||(yield _e(new Promise(ae=>y.resolve=ae)));$.length;)yield yield _e($.shift());if(y.error)throw y.error;if(y.done)return yield _e(void 0)}})}();return T.throw=async J=>(y.done||(y.done=!0,y.error=J,y.resolve()),{done:!0,value:void 0}),T.return=async()=>(I(),{done:!0,value:void 0}),T},async dispose(){if(C=!0,D){const[b]=await D;b.close(1e3,"Normal Closure")}},terminate(){D&&v.emit("closed",new tr)}}}class tr extends Error{constructor(){super(...arguments),this.name="TerminatedCloseEvent",this.message="4499: Terminated",this.code=4499,this.reason="Terminated",this.wasClean=!1}}function Ot(e){return le(e)&&"code"in e&&"reason"in e}function Aa(e){return[1e3,1001,1006,1005,1012,1013,1014].includes(e)?!1:e>=1e3&&e<=1999}function Za(e){return typeof e=="function"&&"constructor"in e&&"CLOSED"in e&&"CLOSING"in e&&"CONNECTING"in e&&"OPEN"in e}function nr(e){return new je(function(t,n){return new R(function(r){var a,s,o;try{a=n(t).subscribe({next:function(u){if(u.errors?o=e({graphQLErrors:u.errors,response:u,operation:t,forward:n}):La(u)&&(o=e({protocolErrors:u.extensions[Zn],response:u,operation:t,forward:n})),o){s=o.subscribe({next:r.next.bind(r),error:r.error.bind(r),complete:r.complete.bind(r)});return}r.next(u)},error:function(u){if(o=e({operation:t,networkError:u,graphQLErrors:u&&u.result&&u.result.errors||void 0,forward:n}),o){s=o.subscribe({next:r.next.bind(r),error:r.error.bind(r),complete:r.complete.bind(r)});return}r.error(u)},complete:function(){o||r.complete.bind(r)()}})}catch(u){e({networkError:u,operation:t,forward:n}),r.error(u)}return function(){a&&a.unsubscribe(),s&&a.unsubscribe()}})})}(function(e){Je(t,e);function t(n){var r=e.call(this)||this;return r.link=nr(n),r}return t.prototype.request=function(n,r){return this.link.request(n,r)},t})(je);var Ka=function(){if(typeof AbortController>"u")return{controller:!1,signal:!1};var e=new AbortController,t=e.signal;return{controller:e,signal:t}},rr=Object.prototype.hasOwnProperty;function es(e,t){if(e.status>=300){var n=function(){try{return JSON.parse(t)}catch{return t}};Xn(e,n(),"Response not successful: Received status code ".concat(e.status))}try{return JSON.parse(t)}catch(a){var r=a;throw r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,r}}function ts(e){return function(t){return t.text().then(function(n){return es(t,n)}).then(function(n){return!Array.isArray(n)&&!rr.call(n,"data")&&!rr.call(n,"errors")&&Xn(t,n,"Server response was missing for query '".concat(Array.isArray(e)?e.map(function(r){return r.operationName}):e.operationName,"'.")),n})}}var tt=function(e,t){var n;try{n=JSON.stringify(e)}catch(a){var r=Ne(54,t,a.message);throw r.parseError=a,r}return n};function ns(e,t){var n=[],r=function(g,h){n.push("".concat(g,"=").concat(encodeURIComponent(h)))};if("query"in t&&r("query",t.query),t.operationName&&r("operationName",t.operationName),t.variables){var a=void 0;try{a=tt(t.variables,"Variables map")}catch(g){return{parseError:g}}r("variables",a)}if(t.extensions){var s=void 0;try{s=tt(t.extensions,"Extensions map")}catch(g){return{parseError:g}}r("extensions",s)}var o="",u=e,l=e.indexOf("#");l!==-1&&(o=e.substr(l),u=e.substr(0,l));var c=u.indexOf("?")===-1?"?":"&",m=u+c+n.join("&")+o;return{newURI:m}}var rs={includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},is={accept:"*/*","content-type":"application/json"},as={method:"POST"},ss={http:rs,headers:is,options:as},os=function(e,t){return t(e)};function us(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a={},s={};n.forEach(function(g){a=L(L(L({},a),g.options),{headers:L(L({},a.headers),g.headers)}),g.credentials&&(a.credentials=g.credentials),s=L(L({},s),g.http)}),a.headers&&(a.headers=cs(a.headers,s.preserveHeaderCase));var o=e.operationName,u=e.extensions,l=e.variables,c=e.query,m={operationName:o,variables:l};return s.includeExtensions&&(m.extensions=u),s.includeQuery&&(m.query=t(c,It)),{options:a,body:m}}function cs(e,t){if(!t){var n={};return Object.keys(Object(e)).forEach(function(s){n[s.toLowerCase()]=e[s]}),n}var r={};Object.keys(Object(e)).forEach(function(s){r[s.toLowerCase()]={originalName:s,value:e[s]}});var a={};return Object.keys(r).forEach(function(s){a[r[s].originalName]=r[s].value}),a}var ls=function(e,t){var n=e.getContext(),r=n.uri;return r||(typeof t=="function"?t(e):t||"/graphql")};function ds(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function fs(e,t,n=""){if(!arguments.length)throw new TypeError("Argument 1 `value` is required.");if(typeof t!="function")throw new TypeError("Argument 2 `isExtractable` must be a function.");if(typeof n!="string")throw new TypeError("Argument 3 `path` must be a string.");const r=new Map,a=new Map;function s(o,u,l){if(t(o)){const g=a.get(o);return g?g.push(u):a.set(o,[u]),null}const c=Array.isArray(o)||typeof FileList<"u"&&o instanceof FileList,m=ds(o);if(c||m){let g=r.get(o);const h=!g;if(h&&(g=c?[]:o instanceof Object?{}:Object.create(null),r.set(o,g)),!l.has(o)){const d=u?`${u}.`:"",w=new Set(l).add(o);if(c){let E=0;for(const N of o){const P=s(N,d+E++,w);h&&g.push(P)}}else for(const E in o){const N=s(o[E],d+E,w);h&&(g[E]=N)}}return g}return o}return{clone:s(e,n,new Set),files:a}}function ps(e,t,n){"name"in n?e.append(t,n,n.name):e.append(t,n)}function gs(e){return typeof File<"u"&&e instanceof File||typeof Blob<"u"&&e instanceof Blob}function ms({uri:e="/graphql",useGETForQueries:t,isExtractableFile:n=gs,FormData:r,formDataAppendFile:a=ps,print:s=os,fetch:o,fetchOptions:u,credentials:l,headers:c,includeExtensions:m}={}){const g={http:{includeExtensions:m},options:u,credentials:l,headers:c};return new je(h=>{const d=h.getContext(),{clientAwareness:{name:w,version:E}={},headers:N}=d,P={http:d.http,options:d.fetchOptions,credentials:d.credentials,headers:{...w&&{"apollographql-client-name":w},...E&&{"apollographql-client-version":E},...N}},{options:F,body:k}=us(h,s,ss,g,P),{clone:v,files:U}=fs(k,n,"");let D=ls(h,e);if(U.size){F.headers&&delete F.headers["content-type"];const O=r||FormData,M=new O;M.append("operations",tt(v,"Payload"));const C={};let ie=0;U.forEach(fe=>{C[++ie]=fe}),M.append("map",JSON.stringify(C)),ie=0,U.forEach((fe,be)=>{a(M,String(++ie),be)}),F.body=M}else if(t&&!h.query.definitions.some(O=>O.kind==="OperationDefinition"&&O.operation==="mutation")&&(F.method="GET"),F.method==="GET"){const{newURI:O,parseError:M}=ns(D,k);if(M)return new R(C=>{C.error(M)});D=O}else F.body=tt(v,"Payload");const{controller:S}=Ka();typeof S!="boolean"&&(F.signal&&(F.signal.aborted?S.abort():F.signal.addEventListener("abort",()=>{S.abort()},{once:!0})),F.signal=S.signal);const G=o||fetch;return new R(O=>{let M;return G(D,F).then(C=>(h.setContext({response:C}),C)).then(ts(h)).then(C=>{O.next(C),O.complete()}).catch(C=>{M||(C.result&&C.result.errors&&C.result.data&&O.next(C.result),O.error(C))}),()=>{M=!0,typeof S!="boolean"&&S.abort()}})})}const re=e=>(t,{args:n,canRead:r,toReference:a})=>r(t)?t:a({__typename:e,id:n==null?void 0:n.id}),Me=(e,{canRead:t})=>{if(e!==void 0)return t(e)?e:null},ys={Query:{fields:{findImage:{read:re("Image")},findPerformer:{read:re("Performer")},findStudio:{read:re("Studio")},findGroup:{read:re("Group")},findGallery:{read:re("Gallery")},findScene:{read:re("Scene")},findTag:{read:re("Tag")},findSavedFilter:{read:re("SavedFilter")}}},Scene:{fields:{studio:{read:Me}}},Image:{fields:{studio:{read:Me},paths:{merge:!1}}},Group:{fields:{studio:{read:Me}}},Gallery:{fields:{studio:{read:Me}}},Studio:{fields:{parent_studio:{read:Me}}}},hs={BaseFile:["VideoFile","ImageFile","GalleryFile"],VisualFile:["VideoFile","ImageFile"]},Ss=((or=document.querySelector("base"))==null?void 0:or.getAttribute("href"))??"/",Ct=e=>{let t=new URL(window.location.origin+Ss);return e&&(t.pathname+=e),t};(()=>{const e=Ct("graphql"),t=Ct("graphql");t.protocol==="https:"?t.protocol="wss:":t.protocol="ws:";const n=ms({uri:e.toString()}),r=Xa({url:t.toString(),retryAttempts:1/0,shouldRetry(){return!0}}),a=new Wa(r),s=nr(({networkError:m})=>{if(m&&m.statusCode===401){const g=new URL(Ct("login"),window.location.toString());g.searchParams.append("returnURL",window.location.href),window.location.href=g.toString()}}),o=i.ApolloLink.split(({query:m})=>{const g=ba(m);return g.kind==="OperationDefinition"&&g.operation==="subscription"},a,n),u=i.ApolloLink.from([s,o]),l=new i.InMemoryCache({typePolicies:ys,possibleTypes:hs}),c=new i.ApolloClient({link:u,cache:l});return c.subscribe({query:Lr}).subscribe({next:()=>{c.resetStore()}}),{cache:l,client:c,wsClient:r}})();const $s=e=>Rr({variables:{path:e}}),_s=(e,t)=>{const{data:n,loading:r,error:a}=$s(e),s=H.useRef(void 0);r||(s.current=n);const o=r?s.current:n,u=a&&t?[]:o==null?void 0:o.directory.directories,l=o==null?void 0:o.directory.parent;return{directories:u,parent:l,loading:r,error:a}},Ds=ut("FolderSelect",({currentDirectory:e,onChangeDirectory:t,defaultDirectories:n=[],appendButton:r,collapsible:a=!1,quotePath:s=!1,hideError:o=!1})=>{const u=te.useIntl(),[l,c]=H.useState(!1),[m,g]=H.useState(e),h=s?Tn.stripQuotes(m):m,{directories:d,parent:w,error:E,loading:N}=_s(h,o),P=(e?d:n)??n,F=bi(g,250);function k(S){const G=s&&S.includes(" ")?Tn.addQuotes(S):S;t(G),g(G)}function v(S){t(S),F(S)}function U(){n!=null&&n.includes(e)?k(""):w&&k(w)}const D=e&&w&&f.jsx("li",{className:"folder-list-parent folder-list-item",children:f.jsx(A.Button,{variant:"link",onClick:()=>U(),disabled:N,children:f.jsx("span",{children:f.jsx(te.FormattedMessage,{id:"setup.folder.up_dir"})})})});return f.jsxs(f.Fragment,{children:[f.jsxs(A.InputGroup,{children:[f.jsx(A.Form.Control,{className:"btn-secondary",placeholder:u.formatMessage({id:"setup.folder.file_path"}),onChange:S=>{v(S.currentTarget.value)},value:e,spellCheck:!1}),r&&f.jsx(A.InputGroup.Append,{children:r}),a&&f.jsx(A.InputGroup.Append,{children:f.jsx(A.Button,{variant:"secondary",onClick:()=>c(!l),children:f.jsx(pn,{icon:Rt.faEllipsis})})}),(N||E)&&f.jsx(A.InputGroup.Append,{className:"align-self-center",children:N?f.jsx(Yr,{inline:!0,small:!0,message:""}):!o&&f.jsx(pn,{icon:Rt.faTimes,color:"red",className:"ml-3"})})]}),!o&&E!==void 0&&f.jsxs("h5",{className:"mt-4 text-break",children:["Error: ",E.message]}),f.jsx(A.Collapse,{in:!a||l,children:f.jsxs("ul",{className:"folder-list",children:[D,P.map(S=>f.jsx("li",{className:"folder-list-item",children:f.jsx(A.Button,{variant:"link",onClick:()=>k(S),disabled:N,children:f.jsx("span",{children:S})})},S))]})})]})}),{PluginApi:de}=window,{React:ir}=de,{useState:K,useEffect:bs,useRef:vs}=ir,Is=de.libraries.Bootstrap,{Nav:Ts,Button:De,Form:Re,ProgressBar:ar,Alert:jt,Badge:ws}=Is,{NavLink:qs}=de.libraries.ReactRouterDOM,{FontAwesomeIcon:Fs}=de.libraries.ReactFontAwesome,Es=de.libraries.FontAwesomeSolid,xs=[{value:"en",label:"English"},{value:"pt",label:"Portuguese"},{value:"auto",label:"Auto-detect"}],Ps="transcriber",sr="/transcriber",ks=3e3;function Ns(e,t){return fetch("/graphql",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,variables:t})}).then(n=>n.json()).then(n=>{if(n.errors&&n.errors.length)throw new Error(n.errors.map(r=>r.message).join("; "));return n.data})}function Gt(e){return Ns("mutation TranscriberOperation($plugin_id: ID!, $args: Map) { runPluginOperation(plugin_id: $plugin_id, args: $args) }",{plugin_id:Ps,args:e}).then(t=>t.runPluginOperation)}function Mt(){return Gt({mode:"status"})}function Os(e){return Gt({mode:e}).then(()=>{})}function Cs(e,t){return Gt({mode:"configure",inputDir:e,language:t})}const js={active:"success",inactive:"secondary",failed:"danger",activating:"info",deactivating:"info"};function Gs(e){return js[e]||(e.startsWith("unknown")?"secondary":"danger")}function Ms({libraryPaths:e}){const[t,n]=K(null),[r,a]=K(null),[s,o]=K(null),u=vs(!1),[l,c]=K(!1),[m,g]=K(""),[h,d]=K("en"),[w,E]=K(!1),[N,P]=K(null),[F,k]=K(null);bs(()=>{let $=!1;function y(){Mt().then(T=>{$||(n(T),a(null),u.current||(T.config&&(g(T.config.inputDir),d(T.config.language)),u.current=!0,c(!0)))}).catch(T=>{$||a(String(T&&T.message?T.message:T))})}y();const I=setInterval(y,ks);return()=>{$=!0,clearInterval(I)}},[]);function v($){o($),a(null),Os($).then(()=>Mt()).then(y=>n(y)).catch(y=>a(String(y&&y.message?y.message:y))).finally(()=>o(null))}function U(){window.confirm("Clear the status, failed-file history, and logs? This restarts the service.")&&v("clear")}function D(){E(!0),P(null),k(null),Cs(m,h).then(()=>Mt()).then($=>{n($),k("Applied - the service restarted and is now watching this folder.")}).catch($=>P(String($&&$.message?$.message:$))).finally(()=>E(!1))}const S=t&&t.status,G=t&&t.failed,O=t&&t.serviceActive,M=t&&t.config,C=!!s,ie=l&&(m!==(M?M.inputDir:"")||h!==(M?M.language:"en"));function fe(){return O?f.jsx(ws,{variant:Gs(O),className:"transcriber-service-badge ml-2",children:O}):null}function be(){if(!S)return f.jsx("p",{className:"text-muted",children:"No status yet - either the service hasn't run since this was installed, or its state files aren't readable by Stash."});const $=S.file_progress_pct,y=S.overall_progress_pct;return f.jsxs("div",{className:"transcriber-status",children:[f.jsxs("p",{children:[f.jsx("strong",{children:"State:"})," ",S.state||"unknown"]}),S.current_file?f.jsxs(f.Fragment,{children:[f.jsxs("p",{className:"transcriber-current-file",children:[f.jsx("strong",{children:"Current file:"})," ",S.current_file]}),typeof $=="number"&&f.jsx(ar,{now:$,label:`${$}%`,className:"mb-3",animated:$<100})]}):null,typeof y=="number"&&f.jsxs(f.Fragment,{children:[f.jsxs("p",{className:"text-muted mb-1",children:["Overall: ",S.files_done??0," / ",S.files_total??0," done",S.files_failed?`, ${S.files_failed} failed`:""]}),f.jsx(ar,{now:y,label:`${y}%`})]}),typeof S.audio_hours_transcribed=="number"&&f.jsxs("p",{className:"text-muted mt-2",children:[S.audio_hours_transcribed," hours of audio transcribed so far."]})]})}function b(){if(!G||G.count===0)return null;const $=G.count-G.recent.length;return f.jsxs("div",{className:"transcriber-failed mt-4",children:[f.jsxs("h5",{children:[G.count," failed file",G.count===1?"":"s"]}),f.jsx("ul",{className:"list-unstyled",children:G.recent.map(y=>f.jsxs("li",{className:"transcriber-failed-entry",children:[f.jsx("div",{className:"transcriber-failed-path",children:y.path}),f.jsxs("div",{className:"text-muted",children:[y.error,y.when?` — ${y.when}`:""]})]},y.path))}),$>0&&f.jsxs("p",{className:"text-muted",children:["...and ",$," more."]})]})}return f.jsxs("div",{className:"transcriber-page container-fluid",children:[f.jsxs("h3",{children:["Transcriber",fe()]}),f.jsx("p",{className:"text-muted",children:"Dashboard for the Whisper GPU video transcriber service - this page only shows its status and controls it; the actual transcription keeps running via its own systemd service, exactly as it did before this plugin existed."}),r?f.jsx(jt,{variant:"danger",children:r}):null,f.jsxs("div",{className:"transcriber-controls mb-3",children:[f.jsx(De,{onClick:()=>v("start"),disabled:C,className:"mr-2",children:s==="start"?"Starting…":"Start"}),f.jsx(De,{onClick:()=>v("stop"),disabled:C,variant:"secondary",className:"mr-2",children:s==="stop"?"Stopping…":"Stop"}),f.jsx(De,{onClick:()=>v("restart"),disabled:C,variant:"secondary",className:"mr-2",children:s==="restart"?"Restarting…":"Restart"}),f.jsx(De,{onClick:U,disabled:C,variant:"danger",children:s==="clear"?"Clearing…":"Clear Status & Logs"})]}),be(),b(),f.jsx("hr",{}),f.jsx("h5",{children:"Watched folder"}),f.jsxs("p",{className:"text-muted",children:["Changing this re-runs ",f.jsx("code",{children:"install_service.sh"})," as root (via the same sudoers rule as Start/Stop/Restart) and restarts the service - it can take a few minutes the first time if its venv needs rebuilding, otherwise it's quick."]}),N?f.jsx(jt,{variant:"danger",children:N}):null,F?f.jsx(jt,{variant:"success",children:F}):null,f.jsxs(Re.Group,{className:"transcriber-folder",children:[f.jsx(Re.Label,{children:"Folder"}),f.jsx(Ds,{currentDirectory:m,onChangeDirectory:g,defaultDirectories:e})]}),f.jsxs(Re.Group,{className:"transcriber-language",children:[f.jsx(Re.Label,{children:"Language"}),f.jsx(Re.Control,{as:"select",value:h,onChange:$=>d($.target.value),disabled:w,children:xs.map($=>f.jsx("option",{value:$.value,children:$.label},$.value))})]}),f.jsx(De,{onClick:D,disabled:w||!m||!ie,children:w?"Applying…":"Apply"})]})}function Rs(){const{data:e}=Gr(),t=e!=null&&e.configuration?e.configuration.general.stashes.map(n=>n.path):[];return f.jsx(Ms,{libraryPaths:t})}de.register.route(sr,Rs),de.patch.before("MainNavBar.MenuItems",e=>{try{const t=f.jsx(Ts.Link,{as:"div",className:"col-4 col-sm-3 col-md-2 col-lg-auto",children:f.jsx(qs,{exact:!0,to:sr,activeClassName:"active",children:f.jsxs(De,{className:"minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center",children:[f.jsx(Fs,{icon:Es.faMicrophone,className:"fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0"}),f.jsx("span",{children:"Transcriber"})]})})},"transcriber");return[{...e,children:[...ir.Children.toArray(e.children),t]}]}catch(t){return console.error("[Transcriber] Failed to add nav link, leaving the nav bar unmodified:",t),[e]}})})(PluginApi.React,PluginApi.libraries.Apollo,PluginApi.libraries.Intl,PluginApi.libraries.Bootstrap,PluginApi.libraries.ReactFontAwesome,PluginApi.libraries.FontAwesomeSolid);
