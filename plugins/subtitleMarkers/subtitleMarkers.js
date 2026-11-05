var CO=Object.defineProperty;var DO=($,d,_e)=>d in $?CO($,d,{enumerable:!0,configurable:!0,writable:!0,value:_e}):$[d]=_e;var Z=($,d,_e)=>DO($,typeof d!="symbol"?d+"":d,_e);(function($,d,_e,fe,Fe,xl,ri,Fl,$t){"use strict";var $l;function Va(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const r in e)if(r!=="default"){const n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>e[r]})}}return t.default=e,Object.freeze(t)}const Q=Va($),Vr=Va(d);function Ba(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ra={exports:{}},ar={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Ga=Object.getOwnPropertySymbols,Pl=Object.prototype.hasOwnProperty,Ml=Object.prototype.propertyIsEnumerable;function Nl(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function kl(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(n.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}kl();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Al=$,Ua=60103;if(ar.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var Ha=Symbol.for;Ua=Ha("react.element"),ar.Fragment=Ha("react.fragment")}var Ll=Al.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jl=Object.prototype.hasOwnProperty,ql={key:!0,ref:!0,__self:!0,__source:!0};function za(e,t,r){var n,i={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)jl.call(t,n)&&!ql.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Ua,type:e,key:a,ref:o,props:i,_owner:Ll.current}}ar.jsx=za,ar.jsxs=za,Ra.exports=ar;var b=Ra.exports;const Br={};var Rr=(e=>(e.Cut="CUT",e.Uncut="UNCUT",e))(Rr||{}),m=(e=>(e.Between="BETWEEN",e.Equals="EQUALS",e.Excludes="EXCLUDES",e.GreaterThan="GREATER_THAN",e.Includes="INCLUDES",e.IncludesAll="INCLUDES_ALL",e.IsNull="IS_NULL",e.LessThan="LESS_THAN",e.MatchesRegex="MATCHES_REGEX",e.NotBetween="NOT_BETWEEN",e.NotEquals="NOT_EQUALS",e.NotMatchesRegex="NOT_MATCHES_REGEX",e.NotNull="NOT_NULL",e))(m||{}),Y=(e=>(e.Galleries="GALLERIES",e.Groups="GROUPS",e.Images="IMAGES",e.Movies="MOVIES",e.Performers="PERFORMERS",e.Scenes="SCENES",e.SceneMarkers="SCENE_MARKERS",e.Studios="STUDIOS",e.Tags="TAGS",e))(Y||{}),Pe=(e=>(e.Female="FEMALE",e.Intersex="INTERSEX",e.Male="MALE",e.NonBinary="NON_BINARY",e.TransgenderFemale="TRANSGENDER_FEMALE",e.TransgenderMale="TRANSGENDER_MALE",e))(Pe||{}),Gr=(e=>(e.Landscape="LANDSCAPE",e.Portrait="PORTRAIT",e.Square="SQUARE",e))(Gr||{}),$e=(e=>(e.EightK="EIGHT_K",e.FiveK="FIVE_K",e.FourK="FOUR_K",e.FullHd="FULL_HD",e.Huge="HUGE",e.Low="LOW",e.QuadHd="QUAD_HD",e.R360P="R360P",e.SevenK="SEVEN_K",e.SixK="SIX_K",e.Standard="STANDARD",e.StandardHd="STANDARD_HD",e.VeryLow="VERY_LOW",e.VrHd="VR_HD",e.WebHd="WEB_HD",e))($e||{}),Le=(e=>(e.Asc="ASC",e.Desc="DESC",e))(Le||{});const Wa=d.gql`
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
    `,Ya=d.gql`
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
    `,Ka=d.gql`
    fragment ConfigDLNAData on ConfigDLNAResult {
  serverName
  enabled
  port
  whitelistedIPs
  interfaces
  videoSortOrder
}
    `,Qa=d.gql`
    fragment ConfigScrapingData on ConfigScrapingResult {
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  excludeTagPatterns
}
    `,Vl=d.gql`
    fragment ScraperSourceData on ScraperSource {
  stash_box_index
  stash_box_endpoint
  scraper_id
}
    `,Bl=d.gql`
    fragment IdentifyFieldOptionsData on IdentifyFieldOptions {
  field
  strategy
  createMissing
}
    `,Rl=d.gql`
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
    ${Bl}`,Ja=d.gql`
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
    ${Vl}
${Rl}`,Gl=d.gql`
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
    ${Wa}
${Ya}
${Ka}
${Qa}
${Ja}`;d.gql`
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
    `;const ni=d.gql`
    fragment SelectFolderData on Folder {
  id
  path
  basename
}
    `,Ul=d.gql`
    fragment RecursiveFolderData on Folder {
  ...SelectFolderData
  parent_folders {
    ...SelectFolderData
  }
}
    ${ni}`,ii=d.gql`
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
    `,Hl=d.gql`
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
    `,zl=d.gql`
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
    `,or=d.gql`
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
    `,Je=d.gql`
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
    `,Za=d.gql`
    fragment SlimGroupData on Group {
  id
  name
  front_image_path
  rating100
}
    `,Wl=d.gql`
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
    ${or}
${Je}
${Za}`,Xa=d.gql`
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
    `,Ur=d.gql`
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
    ${Xa}`,eo=d.gql`
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
    `,to=d.gql`
    fragment FolderData on Folder {
  id
  basename
  path
}
    `,ai=d.gql`
    fragment GalleryChapterData on GalleryChapter {
  id
  title
  image_index
  gallery {
    id
  }
}
    `,it=d.gql`
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
    ${Je}`,ro=d.gql`
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
    `,sr=d.gql`
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
    ${ro}`,xt=d.gql`
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
    ${eo}
${to}
${ai}
${or}
${Je}
${it}
${sr}`,Yl=d.gql`
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
    ${xt}
${or}
${Je}
${it}
${Xa}`,no=d.gql`
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
    `,io=d.gql`
    fragment LogEntryData on LogEntry {
  time
  level
  message
}
    `,Ft=d.gql`
    fragment PackageData on Package {
  package_id
  name
  version
  date
  metadata
  sourceURL
}
    `;d.gql`
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
    `;const Kl=d.gql`
    fragment SelectPerformerData on Performer {
  id
  name
  disambiguation
  alias_list
  image_path
  birthdate
  death_date
}
    `,Ql=d.gql`
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
    `,ct=d.gql`
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
    ${Ql}`,ao=d.gql`
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
    ${eo}
${to}`,ur=d.gql`
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
    ${or}
${Je}
${Za}`,lt=d.gql`
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
    ${ro}
${ct}
${ao}
${or}
${ur}
${Je}
${it}`,Jl=d.gql`
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
    `,Ge=d.gql`
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
    `,Zl=d.gql`
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
    ${Ge}`,oi=d.gql`
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
    ${Ge}`,oo=d.gql`
    fragment ScrapedGroupStudioData on ScrapedStudio {
  stored_id
  name
  urls
}
    `,Xl=d.gql`
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
    ${oo}
${Ge}`,Hr=d.gql`
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
    ${Ge}`,cr=d.gql`
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
    ${Ge}`,so=d.gql`
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
    ${oo}
${Ge}`,si=d.gql`
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
    ${Hr}
${Ge}
${cr}
${so}`,uo=d.gql`
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
    ${Hr}
${Ge}
${cr}`,co=d.gql`
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
    ${Hr}
${Ge}
${cr}`;d.gql`
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
    ${Hr}
${Ge}
${cr}
${so}`,d.gql`
    fragment ScrapedStashBoxPerformerData on StashBoxPerformerQueryResult {
  query
  results {
    ...ScrapedScenePerformerData
  }
}
    ${cr}`;const lr=d.gql`
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
    ${Je}`,ed=d.gql`
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
    `,Pt=d.gql`
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
    ${Je}`,td=d.gql`
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
    `,rd=d.gql`
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
    ${Je}`;d.gql`
    mutation Setup($input: SetupInput!) {
  setup(input: $input)
}
    `,d.gql`
    mutation Migrate($input: MigrateInput!) {
  migrate(input: $input)
}
    `,d.gql`
    mutation DownloadFFMpeg {
  downloadFFMpeg
}
    `,d.gql`
    mutation ConfigureGeneral($input: ConfigGeneralInput!) {
  configureGeneral(input: $input) {
    ...ConfigGeneralData
  }
}
    ${Wa}`,d.gql`
    mutation ConfigureInterface($input: ConfigInterfaceInput!) {
  configureInterface(input: $input) {
    ...ConfigInterfaceData
  }
}
    ${Ya}`,d.gql`
    mutation ConfigureDLNA($input: ConfigDLNAInput!) {
  configureDLNA(input: $input) {
    ...ConfigDLNAData
  }
}
    ${Ka}`,d.gql`
    mutation ConfigureScraping($input: ConfigScrapingInput!) {
  configureScraping(input: $input) {
    ...ConfigScrapingData
  }
}
    ${Qa}`,d.gql`
    mutation ConfigureDefaults($input: ConfigDefaultSettingsInput!) {
  configureDefaults(input: $input) {
    ...ConfigDefaultSettingsData
  }
}
    ${Ja}`,d.gql`
    mutation ConfigureUI($input: Map, $partial: Map) {
  configureUI(input: $input, partial: $partial)
}
    `,d.gql`
    mutation ConfigureUISetting($key: String!, $value: Any) {
  configureUISetting(key: $key, value: $value)
}
    `,d.gql`
    mutation GenerateAPIKey($input: GenerateAPIKeyInput!) {
  generateAPIKey(input: $input)
}
    `,d.gql`
    mutation EnableDLNA($input: EnableDLNAInput!) {
  enableDLNA(input: $input)
}
    `,d.gql`
    mutation DisableDLNA($input: DisableDLNAInput!) {
  disableDLNA(input: $input)
}
    `,d.gql`
    mutation AddTempDLNAIP($input: AddTempDLNAIPInput!) {
  addTempDLNAIP(input: $input)
}
    `,d.gql`
    mutation RemoveTempDLNAIP($input: RemoveTempDLNAIPInput!) {
  removeTempDLNAIP(input: $input)
}
    `,d.gql`
    mutation DeleteFiles($ids: [ID!]!) {
  deleteFiles(ids: $ids)
}
    `,d.gql`
    mutation RevealFileInFileManager($id: ID!) {
  revealFileInFileManager(id: $id)
}
    `,d.gql`
    mutation RevealFolderInFileManager($id: ID!) {
  revealFolderInFileManager(id: $id)
}
    `,d.gql`
    mutation SaveFilter($input: SaveFilterInput!) {
  saveFilter(input: $input) {
    ...SavedFilterData
  }
}
    ${ii}`,d.gql`
    mutation DestroySavedFilter($input: DestroyFilterInput!) {
  destroySavedFilter(input: $input)
}
    `,d.gql`
    mutation GalleryChapterCreate($title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterCreate(
    input: {title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${ai}`,d.gql`
    mutation GalleryChapterUpdate($id: ID!, $title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterUpdate(
    input: {id: $id, title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${ai}`,d.gql`
    mutation GalleryChapterDestroy($id: ID!) {
  galleryChapterDestroy(id: $id)
}
    `,d.gql`
    mutation GalleryCreate($input: GalleryCreateInput!) {
  galleryCreate(input: $input) {
    ...GalleryData
  }
}
    ${xt}`,d.gql`
    mutation GalleryUpdate($input: GalleryUpdateInput!) {
  galleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${xt}`,d.gql`
    mutation BulkGalleryUpdate($input: BulkGalleryUpdateInput!) {
  bulkGalleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${xt}`,d.gql`
    mutation GalleriesUpdate($input: [GalleryUpdateInput!]!) {
  galleriesUpdate(input: $input) {
    ...GalleryData
  }
}
    ${xt}`,d.gql`
    mutation GalleryDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  galleryDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,d.gql`
    mutation AddGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  addGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `,d.gql`
    mutation RemoveGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  removeGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `,d.gql`
    mutation SetGalleryCover($gallery_id: ID!, $cover_image_id: ID!) {
  setGalleryCover(
    input: {gallery_id: $gallery_id, cover_image_id: $cover_image_id}
  )
}
    `,d.gql`
    mutation ResetGalleryCover($gallery_id: ID!) {
  resetGalleryCover(input: {gallery_id: $gallery_id})
}
    `,d.gql`
    mutation GroupCreate($input: GroupCreateInput!) {
  groupCreate(input: $input) {
    ...GroupData
  }
}
    ${ur}`,d.gql`
    mutation GroupUpdate($input: GroupUpdateInput!) {
  groupUpdate(input: $input) {
    ...GroupData
  }
}
    ${ur}`,d.gql`
    mutation BulkGroupUpdate($input: BulkGroupUpdateInput!) {
  bulkGroupUpdate(input: $input) {
    ...GroupData
  }
}
    ${ur}`,d.gql`
    mutation GroupDestroy($id: ID!) {
  groupDestroy(input: {id: $id})
}
    `,d.gql`
    mutation GroupsDestroy($ids: [ID!]!) {
  groupsDestroy(ids: $ids)
}
    `,d.gql`
    mutation AddGroupSubGroups($input: GroupSubGroupAddInput!) {
  addGroupSubGroups(input: $input)
}
    `,d.gql`
    mutation RemoveGroupSubGroups($input: GroupSubGroupRemoveInput!) {
  removeGroupSubGroups(input: $input)
}
    `,d.gql`
    mutation ReorderSubGroups($input: ReorderSubGroupsInput!) {
  reorderSubGroups(input: $input)
}
    `,d.gql`
    mutation ImageUpdate($input: ImageUpdateInput!) {
  imageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Ur}`,d.gql`
    mutation BulkImageUpdate($input: BulkImageUpdateInput!) {
  bulkImageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Ur}`,d.gql`
    mutation ImagesUpdate($input: [ImageUpdateInput!]!) {
  imagesUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Ur}`,d.gql`
    mutation ImageIncrementO($id: ID!) {
  imageIncrementO(id: $id)
}
    `,d.gql`
    mutation ImageDecrementO($id: ID!) {
  imageDecrementO(id: $id)
}
    `,d.gql`
    mutation ImageResetO($id: ID!) {
  imageResetO(id: $id)
}
    `,d.gql`
    mutation ImageDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  imageDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,d.gql`
    mutation ImagesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  imagesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,d.gql`
    mutation StopJob($job_id: ID!) {
  stopJob(job_id: $job_id)
}
    `,d.gql`
    mutation StopAllJobs {
  stopAllJobs
}
    `,d.gql`
    mutation MetadataImport {
  metadataImport
}
    `,d.gql`
    mutation MetadataExport {
  metadataExport
}
    `,d.gql`
    mutation ExportObjects($input: ExportObjectsInput!) {
  exportObjects(input: $input)
}
    `,d.gql`
    mutation ImportObjects($input: ImportObjectsInput!) {
  importObjects(input: $input)
}
    `,d.gql`
    mutation MetadataScan($input: ScanMetadataInput!) {
  metadataScan(input: $input)
}
    `,d.gql`
    mutation MetadataGenerate($input: GenerateMetadataInput!) {
  metadataGenerate(input: $input)
}
    `,d.gql`
    mutation MetadataAutoTag($input: AutoTagMetadataInput!) {
  metadataAutoTag(input: $input)
}
    `,d.gql`
    mutation MetadataIdentify($input: IdentifyMetadataInput!) {
  metadataIdentify(input: $input)
}
    `,d.gql`
    mutation MetadataClean($input: CleanMetadataInput!) {
  metadataClean(input: $input)
}
    `,d.gql`
    mutation MetadataCleanGenerated($input: CleanGeneratedInput!) {
  metadataCleanGenerated(input: $input)
}
    `,d.gql`
    mutation MigrateHashNaming {
  migrateHashNaming
}
    `,d.gql`
    mutation BackupDatabase($input: BackupDatabaseInput!) {
  backupDatabase(input: $input)
}
    `,d.gql`
    mutation AnonymiseDatabase($input: AnonymiseDatabaseInput!) {
  anonymiseDatabase(input: $input)
}
    `,d.gql`
    mutation OptimiseDatabase {
  optimiseDatabase
}
    `,d.gql`
    mutation MigrateSceneScreenshots($input: MigrateSceneScreenshotsInput!) {
  migrateSceneScreenshots(input: $input)
}
    `,d.gql`
    mutation MigrateBlobs($input: MigrateBlobsInput!) {
  migrateBlobs(input: $input)
}
    `,d.gql`
    mutation PerformerCreate($input: PerformerCreateInput!) {
  performerCreate(input: $input) {
    ...PerformerData
  }
}
    ${it}`,d.gql`
    mutation PerformerUpdate($input: PerformerUpdateInput!) {
  performerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${it}`,d.gql`
    mutation BulkPerformerUpdate($input: BulkPerformerUpdateInput!) {
  bulkPerformerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${it}`,d.gql`
    mutation PerformerDestroy($id: ID!) {
  performerDestroy(input: {id: $id})
}
    `,d.gql`
    mutation PerformersDestroy($ids: [ID!]!) {
  performersDestroy(ids: $ids)
}
    `,d.gql`
    mutation PerformerMerge($input: PerformerMergeInput!) {
  performerMerge(input: $input) {
    id
  }
}
    `,d.gql`
    mutation ReloadPlugins {
  reloadPlugins
}
    `,d.gql`
    mutation RunPluginTask($plugin_id: ID!, $task_name: String!, $args_map: Map) {
  runPluginTask(plugin_id: $plugin_id, task_name: $task_name, args_map: $args_map)
}
    `,d.gql`
    mutation ConfigurePlugin($plugin_id: ID!, $input: Map!) {
  configurePlugin(plugin_id: $plugin_id, input: $input)
}
    `,d.gql`
    mutation SetPluginsEnabled($enabledMap: BoolMap!) {
  setPluginsEnabled(enabledMap: $enabledMap)
}
    `,d.gql`
    mutation InstallPluginPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Plugin, packages: $packages)
}
    `,d.gql`
    mutation UpdatePluginPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Plugin, packages: $packages)
}
    `,d.gql`
    mutation UninstallPluginPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Plugin, packages: $packages)
}
    `,d.gql`
    mutation SceneMarkerCreate($title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerCreate(
    input: {title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${ct}`,d.gql`
    mutation SceneMarkerUpdate($id: ID!, $title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerUpdate(
    input: {id: $id, title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${ct}`,d.gql`
    mutation BulkSceneMarkerUpdate($input: BulkSceneMarkerUpdateInput!) {
  bulkSceneMarkerUpdate(input: $input) {
    ...SceneMarkerData
  }
}
    ${ct}`,d.gql`
    mutation SceneMarkerDestroy($id: ID!) {
  sceneMarkerDestroy(id: $id)
}
    `,d.gql`
    mutation SceneMarkersDestroy($ids: [ID!]!) {
  sceneMarkersDestroy(ids: $ids)
}
    `,d.gql`
    mutation SceneCreate($input: SceneCreateInput!) {
  sceneCreate(input: $input) {
    ...SceneData
  }
}
    ${lt}`,d.gql`
    mutation SceneUpdate($input: SceneUpdateInput!) {
  sceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${lt}`,d.gql`
    mutation BulkSceneUpdate($input: BulkSceneUpdateInput!) {
  bulkSceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${lt}`,d.gql`
    mutation ScenesUpdate($input: [SceneUpdateInput!]!) {
  scenesUpdate(input: $input) {
    ...SceneData
  }
}
    ${lt}`,d.gql`
    mutation SceneSaveActivity($id: ID!, $resume_time: Float, $playDuration: Float) {
  sceneSaveActivity(
    id: $id
    resume_time: $resume_time
    playDuration: $playDuration
  )
}
    `,d.gql`
    mutation SceneResetActivity($id: ID!, $reset_resume: Boolean!, $reset_duration: Boolean!) {
  sceneResetActivity(
    id: $id
    reset_resume: $reset_resume
    reset_duration: $reset_duration
  )
}
    `,d.gql`
    mutation SceneAddPlay($id: ID!, $times: [Timestamp!]) {
  sceneAddPlay(id: $id, times: $times) {
    count
    history
  }
}
    `,d.gql`
    mutation SceneDeletePlay($id: ID!, $times: [Timestamp!]) {
  sceneDeletePlay(id: $id, times: $times) {
    count
    history
  }
}
    `,d.gql`
    mutation SceneResetPlayCount($id: ID!) {
  sceneResetPlayCount(id: $id)
}
    `,d.gql`
    mutation SceneAddO($id: ID!, $times: [Timestamp!]) {
  sceneAddO(id: $id, times: $times) {
    count
    history
  }
}
    `,d.gql`
    mutation SceneDeleteO($id: ID!, $times: [Timestamp!]) {
  sceneDeleteO(id: $id, times: $times) {
    count
    history
  }
}
    `,d.gql`
    mutation SceneResetO($id: ID!) {
  sceneResetO(id: $id)
}
    `,d.gql`
    mutation SceneDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  sceneDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,d.gql`
    mutation ScenesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  scenesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,d.gql`
    mutation SceneGenerateScreenshot($id: ID!, $at: Float) {
  sceneGenerateScreenshot(id: $id, at: $at)
}
    `,d.gql`
    mutation SceneAssignFile($input: AssignSceneFileInput!) {
  sceneAssignFile(input: $input)
}
    `,d.gql`
    mutation SceneMerge($input: SceneMergeInput!) {
  sceneMerge(input: $input) {
    id
  }
}
    `,d.gql`
    mutation ReloadScrapers {
  reloadScrapers
}
    `,d.gql`
    mutation InstallScraperPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Scraper, packages: $packages)
}
    `,d.gql`
    mutation UpdateScraperPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Scraper, packages: $packages)
}
    `,d.gql`
    mutation UninstallScraperPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Scraper, packages: $packages)
}
    `,d.gql`
    mutation SubmitStashBoxFingerprints($input: StashBoxFingerprintSubmissionInput!) {
  submitStashBoxFingerprints(input: $input)
}
    `,d.gql`
    mutation StashBoxBatchPerformerTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchPerformerTag(input: $input)
}
    `,d.gql`
    mutation StashBoxBatchStudioTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchStudioTag(input: $input)
}
    `,d.gql`
    mutation StashBoxBatchTagTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchTagTag(input: $input)
}
    `,d.gql`
    mutation SubmitStashBoxSceneDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxSceneDraft(input: $input)
}
    `,d.gql`
    mutation SubmitStashBoxPerformerDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxPerformerDraft(input: $input)
}
    `,d.gql`
    mutation StudioCreate($input: StudioCreateInput!) {
  studioCreate(input: $input) {
    ...StudioData
  }
}
    ${lr}`,d.gql`
    mutation StudioUpdate($input: StudioUpdateInput!) {
  studioUpdate(input: $input) {
    ...StudioData
  }
}
    ${lr}`,d.gql`
    mutation BulkStudioUpdate($input: BulkStudioUpdateInput!) {
  bulkStudioUpdate(input: $input) {
    ...StudioData
  }
}
    ${lr}`,d.gql`
    mutation StudioDestroy($id: ID!) {
  studioDestroy(input: {id: $id})
}
    `,d.gql`
    mutation StudiosDestroy($ids: [ID!]!) {
  studiosDestroy(ids: $ids)
}
    `;const nd=d.gql`
    mutation TagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) {
    ...TagData
  }
}
    ${Pt}`;function id(e){const t={...Br,...e};return Vr.useMutation(nd,t)}d.gql`
    mutation TagDestroy($id: ID!) {
  tagDestroy(input: {id: $id})
}
    `,d.gql`
    mutation TagsDestroy($ids: [ID!]!) {
  tagsDestroy(ids: $ids)
}
    `;const ad=d.gql`
    mutation TagUpdate($input: TagUpdateInput!) {
  tagUpdate(input: $input) {
    ...TagData
  }
}
    ${Pt}`;function od(e){const t={...Br,...e};return Vr.useMutation(ad,t)}d.gql`
    mutation BulkTagUpdate($input: BulkTagUpdateInput!) {
  bulkTagUpdate(input: $input) {
    ...TagData
  }
}
    ${Pt}`,d.gql`
    mutation TagsMerge($source: [ID!]!, $destination: ID!, $values: TagUpdateInput) {
  tagsMerge(input: {source: $source, destination: $destination, values: $values}) {
    ...TagData
  }
}
    ${Pt}`,d.gql`
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
    `,d.gql`
    query FindSavedFilter($id: ID!) {
  findSavedFilter(id: $id) {
    ...SavedFilterData
  }
}
    ${ii}`,d.gql`
    query FindSavedFilters($mode: FilterMode) {
  findSavedFilters(mode: $mode) {
    ...SavedFilterData
  }
}
    ${ii}`,d.gql`
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
    ${ni}`,d.gql`
    query FindFoldersForQuery($filter: FindFilterType, $folder_filter: FolderFilterType, $ids: [ID!]) {
  findFolders(filter: $filter, folder_filter: $folder_filter, ids: $ids) {
    count
    folders {
      ...RecursiveFolderData
    }
  }
}
    ${Ul}`,d.gql`
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
    ${ni}`;const sd=d.gql`
    query FindGalleries($filter: FindFilterType, $gallery_filter: GalleryFilterType) {
  findGalleries(gallery_filter: $gallery_filter, filter: $filter) {
    count
    galleries {
      ...SlimGalleryData
    }
  }
}
    ${ao}`;d.gql`
    query FindGallery($id: ID!) {
  findGallery(id: $id) {
    ...GalleryData
  }
}
    ${xt}`,d.gql`
    query FindGalleriesForSelect($filter: FindFilterType, $gallery_filter: GalleryFilterType, $ids: [ID!]) {
  findGalleries(filter: $filter, gallery_filter: $gallery_filter, ids: $ids) {
    count
    galleries {
      ...SelectGalleryData
    }
  }
}
    ${Hl}`,d.gql`
    query FindGalleryImageID($id: ID!, $index: Int!) {
  findGallery(id: $id) {
    image(index: $index) {
      id
    }
  }
}
    `;const ud=d.gql`
    query FindImages($filter: FindFilterType, $image_filter: ImageFilterType, $image_ids: [Int!]) {
  findImages(filter: $filter, image_filter: $image_filter, image_ids: $image_ids) {
    count
    images {
      ...SlimImageData
    }
  }
}
    ${Ur}`;d.gql`
    query FindImagesMetadata($filter: FindFilterType, $image_filter: ImageFilterType, $image_ids: [Int!]) {
  findImages(filter: $filter, image_filter: $image_filter, image_ids: $image_ids) {
    megapixels
    filesize
  }
}
    `,d.gql`
    query FindImage($id: ID!, $checksum: String) {
  findImage(id: $id, checksum: $checksum) {
    ...ImageData
  }
}
    ${Yl}`,d.gql`
    query JobQueue {
  jobQueue {
    ...JobData
  }
}
    ${no}`,d.gql`
    query FindJob($input: FindJobInput!) {
  findJob(input: $input) {
    ...JobData
  }
}
    ${no}`,d.gql`
    query SceneWall($q: String) {
  sceneWall(q: $q) {
    ...SceneData
  }
}
    ${lt}`,d.gql`
    query MarkerWall($q: String) {
  markerWall(q: $q) {
    ...SceneMarkerData
  }
}
    ${ct}`,d.gql`
    query MarkerStrings($q: String, $sort: String) {
  markerStrings(q: $q, sort: $sort) {
    id
    count
    title
  }
}
    `,d.gql`
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
    `,d.gql`
    query Logs {
  logs {
    ...LogEntryData
  }
}
    ${io}`,d.gql`
    query Version {
  version {
    version
    hash
    build_time
  }
}
    `,d.gql`
    query LatestVersion {
  latestversion {
    version
    shorthash
    release_date
    url
  }
}
    `;const cd=d.gql`
    query FindGroups($filter: FindFilterType, $group_filter: GroupFilterType) {
  findGroups(filter: $filter, group_filter: $group_filter) {
    count
    groups {
      ...ListGroupData
    }
  }
}
    ${Wl}`;d.gql`
    query FindGroup($id: ID!) {
  findGroup(id: $id) {
    ...GroupData
  }
}
    ${ur}`,d.gql`
    query FindGroupsForSelect($filter: FindFilterType, $group_filter: GroupFilterType, $ids: [ID!]) {
  findGroups(filter: $filter, group_filter: $group_filter, ids: $ids) {
    count
    groups {
      ...SelectGroupData
    }
  }
}
    ${zl}`;const ld=d.gql`
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
    ${it}`;d.gql`
    query FindPerformer($id: ID!) {
  findPerformer(id: $id) {
    ...PerformerData
  }
}
    ${it}`,d.gql`
    query FindPerformersForSelect($filter: FindFilterType, $performer_filter: PerformerFilterType, $ids: [ID!]) {
  findPerformers(filter: $filter, performer_filter: $performer_filter, ids: $ids) {
    count
    performers {
      ...SelectPerformerData
    }
  }
}
    ${Kl}`,d.gql`
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
    `,d.gql`
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
    `,d.gql`
    query InstalledPluginPackages {
  installedPackages(type: Plugin) {
    ...PackageData
  }
}
    ${Ft}`,d.gql`
    query InstalledPluginPackagesStatus {
  installedPackages(type: Plugin) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${Ft}`,d.gql`
    query AvailablePluginPackages($source: String!) {
  availablePackages(source: $source, type: Plugin) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${Ft}`;const dd=d.gql`
    query FindSceneMarkers($filter: FindFilterType, $scene_marker_filter: SceneMarkerFilterType) {
  findSceneMarkers(filter: $filter, scene_marker_filter: $scene_marker_filter) {
    count
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${ct}`,fd=d.gql`
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
    ${sr}`;d.gql`
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
    ${sr}`,d.gql`
    query FindDuplicateScenes($distance: Int, $duration_diff: Float) {
  findDuplicateScenes(distance: $distance, duration_diff: $duration_diff) {
    ...SlimSceneData
  }
}
    ${sr}`,d.gql`
    query FindScene($id: ID!, $checksum: String) {
  findScene(id: $id, checksum: $checksum) {
    ...SceneData
  }
}
    ${lt}`,d.gql`
    query FindFullScenes($ids: [Int!]) {
  findScenes(scene_ids: $ids) {
    scenes {
      ...SceneData
    }
  }
}
    ${lt}`,d.gql`
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
    ${ct}`,d.gql`
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
    ${sr}`,d.gql`
    query SceneStreams($id: ID!) {
  findScene(id: $id) {
    sceneStreams {
      url
      mime_type
      label
    }
  }
}
    `,d.gql`
    query FindScenesForSelect($filter: FindFilterType, $scene_filter: SceneFilterType, $ids: [ID!]) {
  findScenes(filter: $filter, scene_filter: $scene_filter, ids: $ids) {
    count
    scenes {
      ...SelectSceneData
    }
  }
}
    ${Jl}`,d.gql`
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
    `,d.gql`
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
    `,d.gql`
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
    `,d.gql`
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
    `,d.gql`
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
    `,d.gql`
    query ScrapeSingleStudio($source: ScraperSourceInput!, $input: ScrapeSingleStudioInput!) {
  scrapeSingleStudio(source: $source, input: $input) {
    ...ScrapedStudioData
  }
}
    ${Zl}`,d.gql`
    query ScrapeSingleTag($source: ScraperSourceInput!, $input: ScrapeSingleTagInput!) {
  scrapeSingleTag(source: $source, input: $input) {
    ...ScrapedSceneTagData
  }
}
    ${Ge}`,d.gql`
    query ScrapeSinglePerformer($source: ScraperSourceInput!, $input: ScrapeSinglePerformerInput!) {
  scrapeSinglePerformer(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${oi}`,d.gql`
    query ScrapeMultiPerformers($source: ScraperSourceInput!, $input: ScrapeMultiPerformersInput!) {
  scrapeMultiPerformers(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${oi}`,d.gql`
    query ScrapePerformerURL($url: String!) {
  scrapePerformerURL(url: $url) {
    ...ScrapedPerformerData
  }
}
    ${oi}`,d.gql`
    query ScrapeSingleScene($source: ScraperSourceInput!, $input: ScrapeSingleSceneInput!) {
  scrapeSingleScene(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${si}`,d.gql`
    query ScrapeMultiScenes($source: ScraperSourceInput!, $input: ScrapeMultiScenesInput!) {
  scrapeMultiScenes(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${si}`,d.gql`
    query ScrapeSceneURL($url: String!) {
  scrapeSceneURL(url: $url) {
    ...ScrapedSceneData
  }
}
    ${si}`,d.gql`
    query ScrapeSingleGallery($source: ScraperSourceInput!, $input: ScrapeSingleGalleryInput!) {
  scrapeSingleGallery(source: $source, input: $input) {
    ...ScrapedGalleryData
  }
}
    ${uo}`,d.gql`
    query ScrapeSingleImage($source: ScraperSourceInput!, $input: ScrapeSingleImageInput!) {
  scrapeSingleImage(source: $source, input: $input) {
    ...ScrapedImageData
  }
}
    ${co}`,d.gql`
    query ScrapeGalleryURL($url: String!) {
  scrapeGalleryURL(url: $url) {
    ...ScrapedGalleryData
  }
}
    ${uo}`,d.gql`
    query ScrapeImageURL($url: String!) {
  scrapeImageURL(url: $url) {
    ...ScrapedImageData
  }
}
    ${co}`,d.gql`
    query ScrapeGroupURL($url: String!) {
  scrapeGroupURL(url: $url) {
    ...ScrapedGroupData
  }
}
    ${Xl}`,d.gql`
    query InstalledScraperPackages {
  installedPackages(type: Scraper) {
    ...PackageData
  }
}
    ${Ft}`,d.gql`
    query InstalledScraperPackagesStatus {
  installedPackages(type: Scraper) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${Ft}`,d.gql`
    query AvailableScraperPackages($source: String!) {
  availablePackages(source: $source, type: Scraper) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${Ft}`;const pd=d.gql`
    query Configuration {
  configuration {
    ...ConfigData
  }
}
    ${Gl}`;function md(e){const t={...Br,...e};return Vr.useQuery(pd,t)}d.gql`
    query Directory($path: String) {
  directory(path: $path) {
    path
    parent
    directories
  }
}
    `,d.gql`
    query ValidateStashBox($input: StashBoxInput!) {
  validateStashBoxCredentials(input: $input) {
    valid
    status
  }
}
    `,d.gql`
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
    `,d.gql`
    query FindStudios($filter: FindFilterType, $studio_filter: StudioFilterType) {
  findStudios(filter: $filter, studio_filter: $studio_filter) {
    count
    studios {
      ...StudioData
    }
  }
}
    ${lr}`,d.gql`
    query FindStudio($id: ID!) {
  findStudio(id: $id) {
    ...StudioData
  }
}
    ${lr}`,d.gql`
    query FindStudiosForSelect($filter: FindFilterType, $studio_filter: StudioFilterType, $ids: [ID!]) {
  findStudios(filter: $filter, studio_filter: $studio_filter, ids: $ids) {
    count
    studios {
      ...SelectStudioData
    }
  }
}
    ${ed}`;const lo=d.gql`
    query FindTags($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...TagData
    }
  }
}
    ${Pt}`,gd=d.gql`
    query FindTag($id: ID!) {
  findTag(id: $id) {
    ...TagData
  }
}
    ${Pt}`;function hd(e){const t={...Br,...e};return Vr.useQuery(gd,t)}const fo=d.gql`
    query FindTagsForSelect($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...SelectTagData
    }
  }
}
    ${td}`;d.gql`
    query FindTagsForList($filter: FindFilterType, $tag_filter: TagFilterType) {
  findTags(filter: $filter, tag_filter: $tag_filter) {
    count
    tags {
      ...TagListData
    }
  }
}
    ${rd}`,d.gql`
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
    `,d.gql`
    subscription LoggingSubscribe {
  loggingSubscribe {
    ...LogEntryData
  }
}
    ${io}`;const vd=d.gql`
    subscription ScanCompleteSubscribe {
  scanCompleteSubscribe
}
    `,po=$.createContext(null),ui=()=>{const e=$.useContext(po);if(e===null)throw new Error("useConfigurationContext must be used within a ConfigurationProvider");return e},Sd=({configuration:e,children:t})=>b.jsx(po.Provider,{value:{configuration:e},children:t}),mo={},yd={},go={},bd={};function Id(e,t){if(mo[e])throw new Error("Component "+e+" has already been registered");return mo[e]=t,t}function _d(e,t,r,n){if(!e.length)return t.apply(r,n);let i=1;function a(){if(i>=e.length)return t;const o=e[i++];return new Proxy(o,{apply:(u,s,c)=>u.apply(s,c.concat(a()))})}return e[0].apply(r,n.concat(a()))}function ho(e,t){return new Proxy(t,{apply(r,n,i){let a;for(const o of yd[e]||[])i=o.apply(n,i);go[e]?a=_d(go[e],r,n,i):a=r.apply(n,i);for(const o of bd[e]||[])a=o.apply(n,i.concat(a));return a}})}function Me(e,t){const r=ho(e,t);return Id(e,r),r}const dt=Me("Icon",e=>b.jsx(xl.FontAwesomeIcon,{...e,className:`fa-icon ${e.className??""}`})),Od=()=>{},Cd=({children:e,show:t,icon:r,header:n,cancel:i,accept:a,onHide:o,isRunning:u,disabled:s,modalProps:c,dialogClassName:l,footerButtons:f,leftFooterButtons:S})=>b.jsxs(fe.Modal,{className:"ModalComponent",keyboard:!1,onHide:o??Od,show:t,dialogClassName:l,...c,children:[b.jsxs(fe.Modal.Header,{children:[r?b.jsx(dt,{icon:r}):"",b.jsx("span",{children:n??""})]}),b.jsx(fe.Modal.Body,{children:e}),b.jsxs(fe.Modal.Footer,{className:"ModalFooter",children:[b.jsx("div",{children:S}),b.jsxs("div",{children:[f,i?b.jsx(fe.Button,{disabled:u,variant:i.variant??"primary",onClick:i.onClick,className:"ml-2",children:i.text??b.jsx(Fe.FormattedMessage,{id:"actions.cancel",defaultMessage:"Cancel",description:"Cancels the current action and dismisses the modal."})}):"",b.jsx(fe.Button,{disabled:u||s,variant:(a==null?void 0:a.variant)??"primary",onClick:a==null?void 0:a.onClick,className:"ml-2",children:u?b.jsx(fe.Spinner,{animation:"border",role:"status",size:"sm"}):(a==null?void 0:a.text)??b.jsx(Fe.FormattedMessage,{id:"actions.close",defaultMessage:"Close",description:"Closes the current modal."})})]})]})]});function Dd(e){let t="";return e instanceof Error&&(t=e.message),t||(t=String(e)),t||(t="Unknown error"),t}var vo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var a="",o=0;o<arguments.length;o++){var u=arguments[o];u&&(a=i(a,n(u)))}return a}function n(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var o="";for(var u in a)t.call(a,u)&&a[u]&&(o=i(o,u));return o}function i(a,o){return o?a?a+" "+o:a+o:a}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(vo);var Ed=vo.exports;const at=Ba(Ed),wd=100,Td=5e3;let $d=0;const So=$.createContext(null),xd=({children:e})=>{const[t,r]=$.useState(),[n,i]=$.useState(!1),[a,o]=$.useState(!1),u=$.useMemo(()=>{function l(){o(!0)}return!t||a?null:b.jsx(fe.Toast,{autohide:!0,onClose:()=>i(!0),className:t.variant??"success",delay:t.delay??3e3,children:b.jsxs(fe.Toast.Header,{children:[b.jsx("span",{className:"mr-auto",onClick:()=>l(),children:t.content}),t.variant==="danger"&&b.jsx(fe.Button,{variant:"minimal",className:"expand-error-button",onClick:()=>l(),children:b.jsx(dt,{icon:_e.faArrowUpRightFromSquare})})]})},t.id)},[t,a]);function s(l){(n||!t||(l.priority??0)>=(t.priority??0))&&(i(!1),r({...l,id:$d++}))}function c(){const{content:l}=t??{};l&&typeof l=="string"&&navigator.clipboard&&navigator.clipboard.writeText(l)}return b.jsxs(So.Provider,{value:s,children:[e,a&&b.jsx(Cd,{dialogClassName:"toast-expanded-dialog",show:a,accept:{onClick:()=>{r(void 0),o(!1)}},header:b.jsx(Fe.FormattedMessage,{id:"errors.header"}),icon:_e.faTriangleExclamation,footerButtons:!!navigator.clipboard&&b.jsx(fe.Button,{variant:"secondary",onClick:()=>c(),children:b.jsx(Fe.FormattedMessage,{id:"actions.copy_to_clipboard"})}),children:t==null?void 0:t.content}),b.jsx("div",{className:at("toast-container row",{hidden:!t||n}),children:u})]})},Fd=()=>{const e=$.useContext(So);if(!e)throw new Error("useToast must be used within a ToastProvider");return $.useMemo(()=>({toast:e,success(t){e({content:t})},error(t){const r=Dd(t);console.error(t),e({variant:"danger",content:r,priority:wd,delay:Td})}}),[e])};var ci=function(e,t){return ci=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])},ci(e,t)};function zr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");ci(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var Oe=function(){return Oe=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},Oe.apply(this,arguments)};function Mt(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,a;n<i;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}typeof SuppressedError=="function"&&SuppressedError;var li="Invariant Violation",yo=Object.setPrototypeOf,Pd=yo===void 0?function(e,t){return e.__proto__=t,e}:yo,bo=function(e){zr(t,e);function t(r){r===void 0&&(r=li);var n=e.call(this,typeof r=="number"?li+": "+r+" (see https://github.com/apollographql/invariant-packages)":r)||this;return n.framesToPop=1,n.name=li,Pd(n,t.prototype),n}return t}(Error);function ft(e,t){if(!e)throw new bo(t)}var Io=["debug","log","warn","error","silent"],Md=Io.indexOf("log");function Wr(e){return function(){if(Io.indexOf(e)>=Md){var t=console[e]||console.log;return t.apply(console,arguments)}}}(function(e){e.debug=Wr("debug"),e.log=Wr("log"),e.warn=Wr("warn"),e.error=Wr("error")})(ft||(ft={}));var _o="3.14.1";function Nt(e){try{return e()}catch{}}const Yr=Nt(function(){return globalThis})||Nt(function(){return window})||Nt(function(){return self})||Nt(function(){return global})||Nt(function(){return Nt.constructor("return this")()});var Oo=new Map;function Nd(e){var t=Oo.get(e)||1;return Oo.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function kd(e,t){var r=Nd("stringifyForDisplay");return JSON.stringify(e,function(n,i){return i===void 0?r:i},t).split(JSON.stringify(r)).join("<undefined>")}function Kr(e){return function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];if(typeof t=="number"){var i=t;t=di(i),t||(t=fi(i,r),r=[])}e.apply(void 0,[t].concat(r))}}var kt=Object.assign(function(t,r){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];t||ft(t,di(r,n)||fi(r,n))},{debug:Kr(ft.debug),log:Kr(ft.log),warn:Kr(ft.warn),error:Kr(ft.error)});function dr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new bo(di(e,t)||fi(e,t))}var Co=Symbol.for("ApolloErrorMessageHandler_"+_o);function Do(e){if(typeof e=="string")return e;try{return kd(e,2).slice(0,1e3)}catch{return"<non-serializable>"}}function di(e,t){if(t===void 0&&(t=[]),!!e)return Yr[Co]&&Yr[Co](e,t.map(Do))}function fi(e,t){if(t===void 0&&(t=[]),!!e)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:_o,message:e,args:t.map(Do)})))}function Ad(e,t){if(!!!e)throw new Error(t)}const Eo={Name:[],Document:["definitions"],OperationDefinition:["description","name","variableDefinitions","directives","selectionSet"],VariableDefinition:["description","variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["description","name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","directives","locations"],SchemaExtension:["directives","operationTypes"],DirectiveExtension:["name","directives"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"],TypeCoordinate:["name"],MemberCoordinate:["name","memberName"],ArgumentCoordinate:["name","fieldName","argumentName"],DirectiveCoordinate:["name"],DirectiveArgumentCoordinate:["name","argumentName"]},Ld=new Set(Object.keys(Eo));function wo(e){const t=e==null?void 0:e.kind;return typeof t=="string"&&Ld.has(t)}var To;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(To||(To={}));var pi;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.DIRECTIVE_EXTENSION="DirectiveExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension",e.TYPE_COORDINATE="TypeCoordinate",e.MEMBER_COORDINATE="MemberCoordinate",e.ARGUMENT_COORDINATE="ArgumentCoordinate",e.DIRECTIVE_COORDINATE="DirectiveCoordinate",e.DIRECTIVE_ARGUMENT_COORDINATE="DirectiveArgumentCoordinate"})(pi||(pi={}));function $o(e){return e===9||e===32}function jd(e,t){const r=e.replace(/"""/g,'\\"""'),n=r.split(/\r\n|[\n\r]/g),i=n.length===1,a=n.length>1&&n.slice(1).every(g=>g.length===0||$o(g.charCodeAt(0))),o=r.endsWith('\\"""'),u=e.endsWith('"')&&!o,s=e.endsWith("\\"),c=u||s,l=!i||e.length>70||c||a||o;let f="";const S=i&&$o(e.charCodeAt(0));return(l&&!S||a)&&(f+=`
`),f+=r,(l||c)&&(f+=`
`),'"""'+f+'"""'}const qd=10,xo=2;function Vd(e){return Qr(e,[])}function Qr(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return Bd(e,t);default:return String(e)}}function Bd(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const r=[...t,e];if(Rd(e)){const n=e.toJSON();if(n!==e)return typeof n=="string"?n:Qr(n,r)}else if(Array.isArray(e))return Ud(e,r);return Gd(e,r)}function Rd(e){return typeof e.toJSON=="function"}function Gd(e,t){const r=Object.entries(e);return r.length===0?"{}":t.length>xo?"["+Hd(e)+"]":"{ "+r.map(([i,a])=>i+": "+Qr(a,t)).join(", ")+" }"}function Ud(e,t){if(e.length===0)return"[]";if(t.length>xo)return"[Array]";const r=Math.min(qd,e.length),n=e.length-r,i=[];for(let a=0;a<r;++a)i.push(Qr(e[a],t));return n===1?i.push("... 1 more item"):n>1&&i.push(`... ${n} more items`),"["+i.join(", ")+"]"}function Hd(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const r=e.constructor.name;if(typeof r=="string"&&r!=="")return r}return t}function zd(e){return`"${e.replace(Wd,Yd)}"`}const Wd=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function Yd(e){return Kd[e.charCodeAt(0)]}const Kd=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],Qd=Object.freeze({});function Jd(e,t,r=Eo){const n=new Map;for(const C of Object.values(pi))n.set(C,Zd(t,C));let i,a=Array.isArray(e),o=[e],u=-1,s=[],c=e,l,f;const S=[],g=[];do{u++;const C=u===o.length,h=C&&s.length!==0;if(C){if(l=g.length===0?void 0:S[S.length-1],c=f,f=g.pop(),h)if(a){c=c.slice();let w=0;for(const[v,y]of s){const p=v-w;y===null?(c.splice(p,1),w++):c[p]=y}}else{c={...c};for(const[w,v]of s)c[w]=v}u=i.index,o=i.keys,s=i.edits,a=i.inArray,i=i.prev}else if(f){if(l=a?u:o[u],c=f[l],c==null)continue;S.push(l)}let O;if(!Array.isArray(c)){var D,I;wo(c)||Ad(!1,`Invalid AST Node: ${Vd(c)}.`);const w=C?(D=n.get(c.kind))===null||D===void 0?void 0:D.leave:(I=n.get(c.kind))===null||I===void 0?void 0:I.enter;if(O=w==null?void 0:w.call(t,c,l,f,S,g),O===Qd)break;if(O===!1){if(!C){S.pop();continue}}else if(O!==void 0&&(s.push([l,O]),!C))if(wo(O))c=O;else{S.pop();continue}}if(O===void 0&&h&&s.push([l,c]),C)S.pop();else{var _;i={inArray:a,index:u,keys:o,edits:s,prev:i},a=Array.isArray(c),o=a?c:(_=r[c.kind])!==null&&_!==void 0?_:[],u=-1,s=[],f&&g.push(f),f=c}}while(i!==void 0);return s.length!==0?s[s.length-1][1]:e}function Zd(e,t){const r=e[t];return typeof r=="object"?r:typeof r=="function"?{enter:r,leave:void 0}:{enter:e.enter,leave:e.leave}}function Xd(e){return Jd(e,tf)}const ef=80,tf={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>M(e.definitions,`

`)},OperationDefinition:{leave(e){const t=mi(e.variableDefinitions)?z(`(
`,M(e.variableDefinitions,`
`),`
)`):z("(",M(e.variableDefinitions,", "),")"),r=z("",e.description,`
`)+M([e.operation,M([e.name,t]),M(e.directives," ")]," ");return(r==="query"?"":r+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:r,directives:n,description:i})=>z("",i,`
`)+e+": "+t+z(" = ",r)+z(" ",M(n," "))},SelectionSet:{leave:({selections:e})=>Ue(e)},Field:{leave({alias:e,name:t,arguments:r,directives:n,selectionSet:i}){const a=z("",e,": ")+t;let o=a+z("(",M(r,", "),")");return o.length>ef&&(o=a+z(`(
`,Jr(M(r,`
`)),`
)`)),M([o,M(n," "),i]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+z(" ",M(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:r})=>M(["...",z("on ",e),M(t," "),r]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:r,directives:n,selectionSet:i,description:a})=>z("",a,`
`)+`fragment ${e}${z("(",M(r,", "),")")} on ${t} ${z("",M(n," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?jd(e):zd(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+M(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+M(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+z("(",M(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:r})=>z("",e,`
`)+M(["schema",M(t," "),Ue(r)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:r})=>z("",e,`
`)+M(["scalar",t,M(r," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:r,directives:n,fields:i})=>z("",e,`
`)+M(["type",t,z("implements ",M(r," & ")),M(n," "),Ue(i)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:r,type:n,directives:i})=>z("",e,`
`)+t+(mi(r)?z(`(
`,Jr(M(r,`
`)),`
)`):z("(",M(r,", "),")"))+": "+n+z(" ",M(i," "))},InputValueDefinition:{leave:({description:e,name:t,type:r,defaultValue:n,directives:i})=>z("",e,`
`)+M([t+": "+r,z("= ",n),M(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:r,directives:n,fields:i})=>z("",e,`
`)+M(["interface",t,z("implements ",M(r," & ")),M(n," "),Ue(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:r,types:n})=>z("",e,`
`)+M(["union",t,M(r," "),z("= ",M(n," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:r,values:n})=>z("",e,`
`)+M(["enum",t,M(r," "),Ue(n)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:r})=>z("",e,`
`)+M([t,M(r," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:r,fields:n})=>z("",e,`
`)+M(["input",t,M(r," "),Ue(n)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:r,directives:n,repeatable:i,locations:a})=>z("",e,`
`)+"directive @"+t+(mi(r)?z(`(
`,Jr(M(r,`
`)),`
)`):z("(",M(r,", "),")"))+z(" ",M(n," "))+(i?" repeatable":"")+" on "+M(a," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>M(["extend schema",M(e," "),Ue(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>M(["extend scalar",e,M(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:r,fields:n})=>M(["extend type",e,z("implements ",M(t," & ")),M(r," "),Ue(n)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:r,fields:n})=>M(["extend interface",e,z("implements ",M(t," & ")),M(r," "),Ue(n)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:r})=>M(["extend union",e,M(t," "),z("= ",M(r," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:r})=>M(["extend enum",e,M(t," "),Ue(r)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:r})=>M(["extend input",e,M(t," "),Ue(r)]," ")},DirectiveExtension:{leave:({name:e,directives:t})=>M(["extend directive @"+e,M(t," ")]," ")},TypeCoordinate:{leave:({name:e})=>e},MemberCoordinate:{leave:({name:e,memberName:t})=>M([e,z(".",t)])},ArgumentCoordinate:{leave:({name:e,fieldName:t,argumentName:r})=>M([e,z(".",t),z("(",r,":)")])},DirectiveCoordinate:{leave:({name:e})=>M(["@",e])},DirectiveArgumentCoordinate:{leave:({name:e,argumentName:t})=>M(["@",e,z("(",t,":)")])}};function M(e,t=""){var r;return(r=e==null?void 0:e.filter(n=>n).join(t))!==null&&r!==void 0?r:""}function Ue(e){return z(`{
`,Jr(M(e,`
`)),`
}`)}function z(e,t,r=""){return t!=null&&t!==""?e+t+r:""}function Jr(e){return z("  ",e.replace(/\n/g,`
  `))}function mi(e){var t;return(t=e==null?void 0:e.some(r=>r.includes(`
`)))!==null&&t!==void 0?t:!1}function gi(e){return e!==null&&typeof e=="object"}function rf(){}class Fo{constructor(t=1/0,r=rf){this.max=t,this.dispose=r,this.map=new Map,this.newest=null,this.oldest=null}has(t){return this.map.has(t)}get(t){const r=this.getNode(t);return r&&r.value}get size(){return this.map.size}getNode(t){const r=this.map.get(t);if(r&&r!==this.newest){const{older:n,newer:i}=r;i&&(i.older=n),n&&(n.newer=i),r.older=this.newest,r.older.newer=r,r.newer=null,this.newest=r,r===this.oldest&&(this.oldest=i)}return r}set(t,r){let n=this.getNode(t);return n?n.value=r:(n={key:t,value:r,newer:null,older:this.newest},this.newest&&(this.newest.newer=n),this.newest=n,this.oldest=this.oldest||n,this.map.set(t,n),n.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(t){const r=this.map.get(t);return r?(r===this.newest&&(this.newest=r.older),r===this.oldest&&(this.oldest=r.newer),r.newer&&(r.newer.older=r.older),r.older&&(r.older.newer=r.newer),this.map.delete(t),this.dispose(r.value,t),!0):!1}}function hi(){}const nf=hi,af=typeof WeakRef<"u"?WeakRef:function(e){return{deref:()=>e}},of=typeof WeakMap<"u"?WeakMap:Map,sf=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:hi,unregister:hi}},uf=10024;class Po{constructor(t=1/0,r=nf){this.max=t,this.dispose=r,this.map=new of,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{const n=this.unfinalizedNodes.values();for(let i=0;i<uf;i++){const a=n.next().value;if(!a)break;this.unfinalizedNodes.delete(a);const o=a.key;delete a.key,a.keyRef=new af(o),this.registry.register(o,a,a)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new sf(this.deleteNode.bind(this))}has(t){return this.map.has(t)}get(t){const r=this.getNode(t);return r&&r.value}getNode(t){const r=this.map.get(t);if(r&&r!==this.newest){const{older:n,newer:i}=r;i&&(i.older=n),n&&(n.newer=i),r.older=this.newest,r.older.newer=r,r.newer=null,this.newest=r,r===this.oldest&&(this.oldest=i)}return r}set(t,r){let n=this.getNode(t);return n?n.value=r:(n={key:t,value:r,newer:null,older:this.newest},this.newest&&(this.newest.newer=n),this.newest=n,this.oldest=this.oldest||n,this.scheduleFinalization(n),this.map.set(t,n),this.size++,n.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(t){t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.size--;const r=t.key||t.keyRef&&t.keyRef.deref();this.dispose(t.value,r),t.keyRef?this.registry.unregister(t):this.unfinalizedNodes.delete(t),r&&this.map.delete(r)}delete(t){const r=this.map.get(t);return r?(this.deleteNode(r),!0):!1}scheduleFinalization(t){this.unfinalizedNodes.add(t),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}}var vi=new WeakSet;function Mo(e){e.size<=(e.max||-1)||vi.has(e)||(vi.add(e),setTimeout(function(){e.clean(),vi.delete(e)},100))}var cf=function(e,t){var r=new Po(e,t);return r.set=function(n,i){var a=Po.prototype.set.call(this,n,i);return Mo(this),a},r},lf=function(e,t){var r=new Fo(e,t);return r.set=function(n,i){var a=Fo.prototype.set.call(this,n,i);return Mo(this),a},r},df=Symbol.for("apollo.cacheSize"),No=Oe({},Yr[df]),ff={};function ko(e,t){ff[e]=t}var Ao=Object.assign(function(t){return JSON.stringify(t,pf)},{reset:function(){At=new lf(No.canonicalStringify||1e3)}});globalThis.__DEV__!==!1&&ko("canonicalStringify",function(){return At.size});var At;Ao.reset();function pf(e,t){if(t&&typeof t=="object"){var r=Object.getPrototypeOf(t);if(r===Object.prototype||r===null){var n=Object.keys(t);if(n.every(mf))return t;var i=JSON.stringify(n),a=At.get(i);if(!a){n.sort();var o=JSON.stringify(n);a=At.get(o)||n,At.set(i,a),At.set(o,a)}var u=Object.create(r);return a.forEach(function(s){u[s]=t[s]}),u}}return t}function mf(e,t,r){return t===0||r[t-1]<=e}var gf=["connection","include","skip","client","rest","export","nonreactive"],fr=Ao;Object.assign(function(e,t,r){if(t&&r&&r.connection&&r.connection.key)if(r.connection.filter&&r.connection.filter.length>0){var n=r.connection.filter?r.connection.filter:[];n.sort();var i={};return n.forEach(function(u){i[u]=t[u]}),"".concat(r.connection.key,"(").concat(fr(i),")")}else return r.connection.key;var a=e;if(t){var o=fr(t);a+="(".concat(o,")")}return r&&Object.keys(r).forEach(function(u){gf.indexOf(u)===-1&&(r[u]&&Object.keys(r[u]).length?a+="@".concat(u,"(").concat(fr(r[u]),")"):a+="@".concat(u))}),a},{setStringify:function(e){var t=fr;return fr=e,t}});function hf(e){return e.kind==="Field"}function Lo(e){kt(e&&e.kind==="Document",115);var t=e.definitions.filter(function(r){return r.kind!=="FragmentDefinition"}).map(function(r){if(r.kind!=="OperationDefinition")throw dr(116,r.kind);return r});return kt(t.length<=1,117,t.length),e}function vf(e){return Lo(e),e.definitions.filter(function(t){return t.kind==="OperationDefinition"})[0]}function Sf(e){return e.definitions.filter(function(t){return t.kind==="OperationDefinition"&&!!t.name}).map(function(t){return t.name.value})[0]||null}function yf(e){var t=vf(e);return kt(t&&t.operation==="query",118),t}function bf(e){Lo(e);for(var t,r=0,n=e.definitions;r<n.length;r++){var i=n[r];if(i.kind==="OperationDefinition"){var a=i.operation;if(a==="query"||a==="mutation"||a==="subscription")return i}i.kind==="FragmentDefinition"&&!t&&(t=i)}if(t)return t;throw dr(122)}let Ee=null;const jo={};let If=1;const _f=()=>class{constructor(){this.id=["slot",If++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let t=Ee;t;t=t.parent)if(this.id in t.slots){const r=t.slots[this.id];if(r===jo)break;return t!==Ee&&(Ee.slots[this.id]=r),!0}return Ee&&(Ee.slots[this.id]=jo),!1}getValue(){if(this.hasValue())return Ee.slots[this.id]}withValue(t,r,n,i){const a={__proto__:null,[this.id]:t},o=Ee;Ee={parent:o,slots:a};try{return r.apply(i,n)}finally{Ee=o}}static bind(t){const r=Ee;return function(){const n=Ee;try{return Ee=r,t.apply(this,arguments)}finally{Ee=n}}}static noContext(t,r,n){if(Ee){const i=Ee;try{return Ee=null,t.apply(n,r)}finally{Ee=i}}else return t.apply(n,r)}};function qo(e){try{return e()}catch{}}const Si="@wry/context:Slot",Vo=qo(()=>globalThis)||qo(()=>global)||Object.create(null),yi=Vo[Si]||Array[Si]||function(e){try{Object.defineProperty(Vo,Si,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}}(_f()),{bind:wO,noContext:TO}=yi;new yi;var pr,bi=Object.assign(function(e){var t=pr.get(e);return t||(t=Xd(e),pr.set(e,t)),t},{reset:function(){pr=new cf(No.print||2e3)}});bi.reset(),globalThis.__DEV__!==!1&&ko("print",function(){return pr?pr.size:0});function Of(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=Cf(e))||t){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cf(e,t){if(e){if(typeof e=="string")return Bo(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Bo(e,t)}}function Bo(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ro(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ii(e,t,r){return t&&Ro(e.prototype,t),r&&Ro(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var _i=function(){return typeof Symbol=="function"},Oi=function(e){return _i()&&!!Symbol[e]},Ci=function(e){return Oi(e)?Symbol[e]:"@@"+e};_i()&&!Oi("observable")&&(Symbol.observable=Symbol("observable"));var Df=Ci("iterator"),Di=Ci("observable"),Go=Ci("species");function Zr(e,t){var r=e[t];if(r!=null){if(typeof r!="function")throw new TypeError(r+" is not a function");return r}}function mr(e){var t=e.constructor;return t!==void 0&&(t=t[Go],t===null&&(t=void 0)),t!==void 0?t:ye}function Ef(e){return e instanceof ye}function Lt(e){Lt.log?Lt.log(e):setTimeout(function(){throw e})}function Xr(e){Promise.resolve().then(function(){try{e()}catch(t){Lt(t)}})}function Uo(e){var t=e._cleanup;if(t!==void 0&&(e._cleanup=void 0,!!t))try{if(typeof t=="function")t();else{var r=Zr(t,"unsubscribe");r&&r.call(t)}}catch(n){Lt(n)}}function Ei(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function wf(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var r=0;r<t.length&&(Ho(e,t[r].type,t[r].value),e._state!=="closed");++r);}}function Ho(e,t,r){e._state="running";var n=e._observer;try{var i=Zr(n,t);switch(t){case"next":i&&i.call(n,r);break;case"error":if(Ei(e),i)i.call(n,r);else throw r;break;case"complete":Ei(e),i&&i.call(n);break}}catch(a){Lt(a)}e._state==="closed"?Uo(e):e._state==="running"&&(e._state="ready")}function wi(e,t,r){if(e._state!=="closed"){if(e._state==="buffering"){e._queue.push({type:t,value:r});return}if(e._state!=="ready"){e._state="buffering",e._queue=[{type:t,value:r}],Xr(function(){return wf(e)});return}Ho(e,t,r)}}var Tf=function(){function e(r,n){this._cleanup=void 0,this._observer=r,this._queue=void 0,this._state="initializing";var i=new $f(this);try{this._cleanup=n.call(void 0,i)}catch(a){i.error(a)}this._state==="initializing"&&(this._state="ready")}var t=e.prototype;return t.unsubscribe=function(){this._state!=="closed"&&(Ei(this),Uo(this))},Ii(e,[{key:"closed",get:function(){return this._state==="closed"}}]),e}(),$f=function(){function e(r){this._subscription=r}var t=e.prototype;return t.next=function(n){wi(this._subscription,"next",n)},t.error=function(n){wi(this._subscription,"error",n)},t.complete=function(){wi(this._subscription,"complete")},Ii(e,[{key:"closed",get:function(){return this._subscription._state==="closed"}}]),e}(),ye=function(){function e(r){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if(typeof r!="function")throw new TypeError("Observable initializer must be a function");this._subscriber=r}var t=e.prototype;return t.subscribe=function(n){return(typeof n!="object"||n===null)&&(n={next:n,error:arguments[1],complete:arguments[2]}),new Tf(n,this._subscriber)},t.forEach=function(n){var i=this;return new Promise(function(a,o){if(typeof n!="function"){o(new TypeError(n+" is not a function"));return}function u(){s.unsubscribe(),a()}var s=i.subscribe({next:function(c){try{n(c,u)}catch(l){o(l),s.unsubscribe()}},error:o,complete:a})})},t.map=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=mr(this);return new a(function(o){return i.subscribe({next:function(u){try{u=n(u)}catch(s){return o.error(s)}o.next(u)},error:function(u){o.error(u)},complete:function(){o.complete()}})})},t.filter=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=mr(this);return new a(function(o){return i.subscribe({next:function(u){try{if(!n(u))return}catch(s){return o.error(s)}o.next(u)},error:function(u){o.error(u)},complete:function(){o.complete()}})})},t.reduce=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=mr(this),o=arguments.length>1,u=!1,s=arguments[1],c=s;return new a(function(l){return i.subscribe({next:function(f){var S=!u;if(u=!0,!S||o)try{c=n(c,f)}catch(g){return l.error(g)}else c=f},error:function(f){l.error(f)},complete:function(){if(!u&&!o)return l.error(new TypeError("Cannot reduce an empty sequence"));l.next(c),l.complete()}})})},t.concat=function(){for(var n=this,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];var u=mr(this);return new u(function(s){var c,l=0;function f(S){c=S.subscribe({next:function(g){s.next(g)},error:function(g){s.error(g)},complete:function(){l===a.length?(c=void 0,s.complete()):f(u.from(a[l++]))}})}return f(n),function(){c&&(c.unsubscribe(),c=void 0)}})},t.flatMap=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=mr(this);return new a(function(o){var u=[],s=i.subscribe({next:function(l){if(n)try{l=n(l)}catch(S){return o.error(S)}var f=a.from(l).subscribe({next:function(S){o.next(S)},error:function(S){o.error(S)},complete:function(){var S=u.indexOf(f);S>=0&&u.splice(S,1),c()}});u.push(f)},error:function(l){o.error(l)},complete:function(){c()}});function c(){s.closed&&u.length===0&&o.complete()}return function(){u.forEach(function(l){return l.unsubscribe()}),s.unsubscribe()}})},t[Di]=function(){return this},e.from=function(n){var i=typeof this=="function"?this:e;if(n==null)throw new TypeError(n+" is not an object");var a=Zr(n,Di);if(a){var o=a.call(n);if(Object(o)!==o)throw new TypeError(o+" is not an object");return Ef(o)&&o.constructor===i?o:new i(function(u){return o.subscribe(u)})}if(Oi("iterator")&&(a=Zr(n,Df),a))return new i(function(u){Xr(function(){if(!u.closed){for(var s=Of(a.call(n)),c;!(c=s()).done;){var l=c.value;if(u.next(l),u.closed)return}u.complete()}})});if(Array.isArray(n))return new i(function(u){Xr(function(){if(!u.closed){for(var s=0;s<n.length;++s)if(u.next(n[s]),u.closed)return;u.complete()}})});throw new TypeError(n+" is not observable")},e.of=function(){for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];var o=typeof this=="function"?this:e;return new o(function(u){Xr(function(){if(!u.closed){for(var s=0;s<i.length;++s)if(u.next(i[s]),u.closed)return;u.complete()}})})},Ii(e,null,[{key:Go,get:function(){return this}}]),e}();_i()&&Object.defineProperty(ye,Symbol("extensions"),{value:{symbol:Di,hostReportError:Lt},configurable:!0});function xf(e){var t,r=e.Symbol;if(typeof r=="function")if(r.observable)t=r.observable;else{typeof r.for=="function"?t=r.for("https://github.com/benlesh/symbol-observable"):t=r("https://github.com/benlesh/symbol-observable");try{r.observable=t}catch{}}else t="@@observable";return t}var jt;typeof self<"u"?jt=self:typeof window<"u"?jt=window:typeof global<"u"?jt=global:typeof module<"u"?jt=module:jt=Function("return this")(),xf(jt);var zo=ye.prototype,Wo="@@observable";zo[Wo]||(zo[Wo]=function(){return this});var Ti,Ff=Symbol.for("apollo.deprecations"),Yo=Symbol.for("apollo.deprecations.slot"),$i=Yr,Pf=(Ti=$i[Yo])!==null&&Ti!==void 0?Ti:$i[Yo]=new yi;function Mf(e){return $i[Ff]||(Pf.getValue()||[]).includes(e)}function Nf(e,t){Mf(e)||t()}var Ko=function(e,t,r){var n=new Error(r);throw n.name="ServerError",n.response=e,n.statusCode=e.status,n.result=t,n};function kf(e){for(var t=["query","operationName","variables","extensions","context"],r=0,n=Object.keys(e);r<n.length;r++){var i=n[r];if(t.indexOf(i)<0)throw dr(58,i)}return e}function Af(e,t){var r=Oe({},e),n=function(a){typeof a=="function"?r=Oe(Oe({},r),a(r)):r=Oe(Oe({},r),a)},i=function(){return Oe({},r)};return Object.defineProperty(t,"setContext",{enumerable:!1,value:n}),Object.defineProperty(t,"getContext",{enumerable:!1,value:i}),t}function Lf(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName=typeof t.query!="string"?Sf(t.query)||void 0:""),t}function Qo(e,t){return t?t(e):ye.of()}function gr(e){return typeof e=="function"?new hr(e):e}function en(e){return e.request.length<=1}var hr=function(){function e(t){t&&(this.request=t)}return e.empty=function(){return new e(function(){return ye.of()})},e.from=function(t){return t.length===0?e.empty():t.map(gr).reduce(function(r,n){return r.concat(n)})},e.split=function(t,r,n){var i=gr(r),a=gr(n||new e(Qo)),o;return en(i)&&en(a)?o=new e(function(u){return t(u)?i.request(u)||ye.of():a.request(u)||ye.of()}):o=new e(function(u,s){return t(u)?i.request(u,s)||ye.of():a.request(u,s)||ye.of()}),Object.assign(o,{left:i,right:a})},e.execute=function(t,r){return t.request(Af(r.context,Lf(kf(r))))||ye.of()},e.concat=function(t,r){var n=gr(t);if(en(n))return globalThis.__DEV__!==!1&&kt.warn(47,n),n;var i=gr(r),a;return en(i)?a=new e(function(o){return n.request(o,function(u){return i.request(u)||ye.of()})||ye.of()}):a=new e(function(o,u){return n.request(o,function(s){return i.request(s,u)||ye.of()})||ye.of()}),Object.assign(a,{left:n,right:i})},e.prototype.split=function(t,r,n){return this.concat(e.split(t,r,n||new e(Qo)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(t,r){throw dr(48)},e.prototype.onError=function(t,r){if(globalThis.__DEV__!==!1&&Nf("onError",function(){globalThis.__DEV__!==!1&&kt.warn(49)}),r&&r.error)return r.error(t),!1;throw t},e.prototype.setOnError=function(t){return globalThis.__DEV__!==!1&&globalThis.__DEV__!==!1&&kt.warn(50),this.onError=t,this},e}(),Jo=Symbol();function jf(e){return e.extensions?Array.isArray(e.extensions[Jo]):!1}var qf=function(e){var t=Mt(Mt(Mt([],e.graphQLErrors,!0),e.clientErrors,!0),e.protocolErrors,!0);return e.networkError&&t.push(e.networkError),t.map(function(r){return gi(r)&&r.message||"Error message not found."}).join(`
`)},Vf=function(e){zr(t,e);function t(r){var n=r.graphQLErrors,i=r.protocolErrors,a=r.clientErrors,o=r.networkError,u=r.errorMessage,s=r.extraInfo,c=e.call(this,u)||this;return c.name="ApolloError",c.graphQLErrors=n||[],c.protocolErrors=i||[],c.clientErrors=a||[],c.networkError=o||null,c.message=u||qf(c),c.extraInfo=s,c.cause=Mt(Mt(Mt([o],n||[],!0),i||[],!0),a||[],!0).find(function(l){return!!l})||null,c.__proto__=t.prototype,c}return t}(Error);function Bf(e){return gi(e)&&"code"in e&&"reason"in e}function Rf(e){var t;return gi(e)&&((t=e.target)===null||t===void 0?void 0:t.readyState)===WebSocket.CLOSED}var Gf=function(e){zr(t,e);function t(r){var n=e.call(this)||this;return n.client=r,n}return t.prototype.request=function(r){var n=this;return new ye(function(i){return n.client.subscribe(Oe(Oe({},r),{query:bi(r.query)}),{next:i.next.bind(i),complete:i.complete.bind(i),error:function(a){if(a instanceof Error)return i.error(a);var o=Bf(a);return o||Rf(a)?i.error(new Error("Socket closed".concat(o?" with event ".concat(a.code):"").concat(o?" ".concat(a.reason):""))):i.error(new Vf({graphQLErrors:Array.isArray(a)?a:[a]}))}})})},t}(hr);function Ne(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function pt(e){return Ne(e)==="object"}function Uf(e){return Array.isArray(e)&&e.length>0&&e.every(t=>"message"in t)}function Zo(e,t){return e.length<124?e:t}const Hf="graphql-transport-ws";var je;(function(e){e[e.InternalServerError=4500]="InternalServerError",e[e.InternalClientError=4005]="InternalClientError",e[e.BadRequest=4400]="BadRequest",e[e.BadResponse=4004]="BadResponse",e[e.Unauthorized=4401]="Unauthorized",e[e.Forbidden=4403]="Forbidden",e[e.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",e[e.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",e[e.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",e[e.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",e[e.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests"})(je||(je={}));var ve;(function(e){e.ConnectionInit="connection_init",e.ConnectionAck="connection_ack",e.Ping="ping",e.Pong="pong",e.Subscribe="subscribe",e.Next="next",e.Error="error",e.Complete="complete"})(ve||(ve={}));function Xo(e){if(!pt(e))throw new Error(`Message is expected to be an object, but got ${Ne(e)}`);if(!e.type)throw new Error("Message is missing the 'type' property");if(typeof e.type!="string")throw new Error(`Message is expects the 'type' property to be a string, but got ${Ne(e.type)}`);switch(e.type){case ve.ConnectionInit:case ve.ConnectionAck:case ve.Ping:case ve.Pong:{if(e.payload!=null&&!pt(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);break}case ve.Subscribe:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ne(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!pt(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Ne(e.payload)}`);if(typeof e.payload.query!="string")throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${Ne(e.payload.query)}`);if(e.payload.variables!=null&&!pt(e.payload.variables))throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Ne(e.payload.variables)}`);if(e.payload.operationName!=null&&Ne(e.payload.operationName)!=="string")throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Ne(e.payload.operationName)}`);if(e.payload.extensions!=null&&!pt(e.payload.extensions))throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Ne(e.payload.extensions)}`);break}case ve.Next:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ne(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!pt(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Ne(e.payload)}`);break}case ve.Error:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ne(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!Uf(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);break}case ve.Complete:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ne(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);break}default:throw new Error(`Invalid message 'type' property "${e.type}"`)}return e}function zf(e,t){return Xo(typeof e=="string"?JSON.parse(e,t):e)}function vr(e,t){return Xo(e),JSON.stringify(e,t)}var qt=function(e){return this instanceof qt?(this.v=e,this):new qt(e)},Wf=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(e,t||[]),i,a=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",o),i[Symbol.asyncIterator]=function(){return this},i;function o(g){return function(D){return Promise.resolve(D).then(g,f)}}function u(g,D){n[g]&&(i[g]=function(I){return new Promise(function(_,C){a.push([g,I,_,C])>1||s(g,I)})},D&&(i[g]=D(i[g])))}function s(g,D){try{c(n[g](D))}catch(I){S(a[0][3],I)}}function c(g){g.value instanceof qt?Promise.resolve(g.value.v).then(l,f):S(a[0][2],g)}function l(g){s("next",g)}function f(g){s("throw",g)}function S(g,D){g(D),a.shift(),a.length&&s(a[0][0],a[0][1])}};function Yf(e){const{url:t,connectionParams:r,lazy:n=!0,onNonLazyError:i=console.error,lazyCloseTimeout:a=0,keepAlive:o=0,disablePong:u,connectionAckWaitTimeout:s=0,retryAttempts:c=5,retryWait:l=async function(k){let N=1e3;for(let B=0;B<k;B++)N*=2;await new Promise(B=>setTimeout(B,N+Math.floor(Math.random()*2700+300)))},shouldRetry:f=xi,isFatalConnectionProblem:S,on:g,webSocketImpl:D,generateID:I=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,k=>{const N=Math.random()*16|0;return(k=="x"?N:N&3|8).toString(16)})},jsonMessageReplacer:_,jsonMessageReviver:C}=e;let h;if(D){if(!Qf(D))throw new Error("Invalid WebSocket implementation provided");h=D}else typeof WebSocket<"u"?h=WebSocket:typeof global<"u"?h=global.WebSocket||global.MozWebSocket:typeof window<"u"&&(h=window.WebSocket||window.MozWebSocket);if(!h)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const O=h,w=(()=>{const F=(()=>{const N={};return{on(B,X){return N[B]=X,()=>{delete N[B]}},emit(B){var X;"id"in B&&((X=N[B.id])===null||X===void 0||X.call(N,B))}}})(),k={connecting:g!=null&&g.connecting?[g.connecting]:[],opened:g!=null&&g.opened?[g.opened]:[],connected:g!=null&&g.connected?[g.connected]:[],ping:g!=null&&g.ping?[g.ping]:[],pong:g!=null&&g.pong?[g.pong]:[],message:g!=null&&g.message?[F.emit,g.message]:[F.emit],closed:g!=null&&g.closed?[g.closed]:[],error:g!=null&&g.error?[g.error]:[]};return{onMessage:F.on,on(N,B){const X=k[N];return X.push(B),()=>{X.splice(X.indexOf(B),1)}},emit(N,...B){for(const X of[...k[N]])X(...B)}}})();function v(F){const k=[w.on("error",N=>{k.forEach(B=>B()),F(N)}),w.on("closed",N=>{k.forEach(B=>B()),F(N)})]}let y,p=0,E,T=!1,x=0,j=!1;async function H(){clearTimeout(E);const[F,k]=await(y??(y=new Promise((X,ce)=>(async()=>{if(T){if(await l(x),!p)return y=void 0,ce({code:1e3,reason:"All Subscriptions Gone"});x++}w.emit("connecting",T);const P=new O(typeof t=="function"?await t():t,Hf);let A,U;function G(){isFinite(o)&&o>0&&(clearTimeout(U),U=setTimeout(()=>{P.readyState===O.OPEN&&(P.send(vr({type:ve.Ping})),w.emit("ping",!1,void 0))},o))}v(J=>{y=void 0,clearTimeout(A),clearTimeout(U),ce(J),J instanceof es&&(P.close(4499,"Terminated"),P.onerror=null,P.onclose=null)}),P.onerror=J=>w.emit("error",J),P.onclose=J=>w.emit("closed",J),P.onopen=async()=>{try{w.emit("opened",P);const J=typeof r=="function"?await r():r;if(P.readyState!==O.OPEN)return;P.send(vr(J?{type:ve.ConnectionInit,payload:J}:{type:ve.ConnectionInit},_)),isFinite(s)&&s>0&&(A=setTimeout(()=>{P.close(je.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")},s)),G()}catch(J){w.emit("error",J),P.close(je.InternalClientError,Zo(J instanceof Error?J.message:new Error(J).message,"Internal client error"))}};let W=!1;P.onmessage=({data:J})=>{try{const V=zf(J,C);if(w.emit("message",V),V.type==="ping"||V.type==="pong"){w.emit(V.type,!0,V.payload),V.type==="pong"?G():u||(P.send(vr(V.payload?{type:ve.Pong,payload:V.payload}:{type:ve.Pong})),w.emit("pong",!1,V.payload));return}if(W)return;if(V.type!==ve.ConnectionAck)throw new Error(`First message cannot be of type ${V.type}`);clearTimeout(A),W=!0,w.emit("connected",P,V.payload,T),T=!1,x=0,X([P,new Promise((oe,xe)=>v(xe))])}catch(V){P.onmessage=null,w.emit("error",V),P.close(je.BadResponse,Zo(V instanceof Error?V.message:new Error(V).message,"Bad response"))}}})())));F.readyState===O.CLOSING&&await k;let N=()=>{};const B=new Promise(X=>N=X);return[F,N,Promise.race([B.then(()=>{if(!p){const X=()=>F.close(1e3,"Normal Closure");isFinite(a)&&a>0?E=setTimeout(()=>{F.readyState===O.OPEN&&X()},a):X()}}),k])]}function ne(F){if(xi(F)&&(Kf(F.code)||[je.InternalServerError,je.InternalClientError,je.BadRequest,je.BadResponse,je.Unauthorized,je.SubprotocolNotAcceptable,je.SubscriberAlreadyExists,je.TooManyInitialisationRequests].includes(F.code)))throw F;if(j)return!1;if(xi(F)&&F.code===1e3)return p>0;if(!c||x>=c||!f(F)||S!=null&&S(F))throw F;return T=!0}n||(async()=>{for(p++;;)try{const[,,F]=await H();await F}catch(F){try{if(!ne(F))return}catch(k){return i==null?void 0:i(k)}}})();function ee(F,k){const N=I(F);let B=!1,X=!1,ce=()=>{p--,B=!0};return(async()=>{for(p++;;)try{const[P,A,U]=await H();if(B)return A();const G=w.onMessage(N,W=>{switch(W.type){case ve.Next:{k.next(W.payload);return}case ve.Error:{X=!0,B=!0,k.error(W.payload),ce();return}case ve.Complete:{B=!0,ce();return}}});P.send(vr({id:N,type:ve.Subscribe,payload:F},_)),ce=()=>{!B&&P.readyState===O.OPEN&&P.send(vr({id:N,type:ve.Complete},_)),p--,B=!0,A()},await U.finally(G);return}catch(P){if(!ne(P))return}})().then(()=>{X||k.complete()}).catch(P=>{k.error(P)}),()=>{B||ce()}}return{on:w.on,subscribe:ee,iterate(F){const k=[],N={done:!1,error:null,resolve:()=>{}},B=ee(F,{next(ce){k.push(ce),N.resolve()},error(ce){N.done=!0,N.error=ce,N.resolve()},complete(){N.done=!0,N.resolve()}}),X=function(){return Wf(this,arguments,function*(){for(;;){for(k.length||(yield qt(new Promise(A=>N.resolve=A)));k.length;)yield yield qt(k.shift());if(N.error)throw N.error;if(N.done)return yield qt(void 0)}})}();return X.throw=async ce=>(N.done||(N.done=!0,N.error=ce,N.resolve()),{done:!0,value:void 0}),X.return=async()=>(B(),{done:!0,value:void 0}),X},async dispose(){if(j=!0,y){const[F]=await y;F.close(1e3,"Normal Closure")}},terminate(){y&&w.emit("closed",new es)}}}class es extends Error{constructor(){super(...arguments),this.name="TerminatedCloseEvent",this.message="4499: Terminated",this.code=4499,this.reason="Terminated",this.wasClean=!1}}function xi(e){return pt(e)&&"code"in e&&"reason"in e}function Kf(e){return[1e3,1001,1006,1005,1012,1013,1014].includes(e)?!1:e>=1e3&&e<=1999}function Qf(e){return typeof e=="function"&&"constructor"in e&&"CLOSED"in e&&"CLOSING"in e&&"CONNECTING"in e&&"OPEN"in e}function ts(e){return new hr(function(t,r){return new ye(function(n){var i,a,o;try{i=r(t).subscribe({next:function(u){if(u.errors?o=e({graphQLErrors:u.errors,response:u,operation:t,forward:r}):jf(u)&&(o=e({protocolErrors:u.extensions[Jo],response:u,operation:t,forward:r})),o){a=o.subscribe({next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return}n.next(u)},error:function(u){if(o=e({operation:t,networkError:u,graphQLErrors:u&&u.result&&u.result.errors||void 0,forward:r}),o){a=o.subscribe({next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return}n.error(u)},complete:function(){o||n.complete.bind(n)()}})}catch(u){e({networkError:u,operation:t,forward:r}),n.error(u)}return function(){i&&i.unsubscribe(),a&&i.unsubscribe()}})})}(function(e){zr(t,e);function t(r){var n=e.call(this)||this;return n.link=ts(r),n}return t.prototype.request=function(r,n){return this.link.request(r,n)},t})(hr);var Jf=function(){if(typeof AbortController>"u")return{controller:!1,signal:!1};var e=new AbortController,t=e.signal;return{controller:e,signal:t}},rs=Object.prototype.hasOwnProperty;function Zf(e,t){if(e.status>=300){var r=function(){try{return JSON.parse(t)}catch{return t}};Ko(e,r(),"Response not successful: Received status code ".concat(e.status))}try{return JSON.parse(t)}catch(i){var n=i;throw n.name="ServerParseError",n.response=e,n.statusCode=e.status,n.bodyText=t,n}}function Xf(e){return function(t){return t.text().then(function(r){return Zf(t,r)}).then(function(r){return!Array.isArray(r)&&!rs.call(r,"data")&&!rs.call(r,"errors")&&Ko(t,r,"Server response was missing for query '".concat(Array.isArray(e)?e.map(function(n){return n.operationName}):e.operationName,"'.")),r})}}var tn=function(e,t){var r;try{r=JSON.stringify(e)}catch(i){var n=dr(54,t,i.message);throw n.parseError=i,n}return r};function ep(e,t){var r=[],n=function(f,S){r.push("".concat(f,"=").concat(encodeURIComponent(S)))};if("query"in t&&n("query",t.query),t.operationName&&n("operationName",t.operationName),t.variables){var i=void 0;try{i=tn(t.variables,"Variables map")}catch(f){return{parseError:f}}n("variables",i)}if(t.extensions){var a=void 0;try{a=tn(t.extensions,"Extensions map")}catch(f){return{parseError:f}}n("extensions",a)}var o="",u=e,s=e.indexOf("#");s!==-1&&(o=e.substr(s),u=e.substr(0,s));var c=u.indexOf("?")===-1?"?":"&",l=u+c+r.join("&")+o;return{newURI:l}}var tp={includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},rp={accept:"*/*","content-type":"application/json"},np={method:"POST"},ip={http:tp,headers:rp,options:np},ap=function(e,t){return t(e)};function op(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var i={},a={};r.forEach(function(f){i=Oe(Oe(Oe({},i),f.options),{headers:Oe(Oe({},i.headers),f.headers)}),f.credentials&&(i.credentials=f.credentials),a=Oe(Oe({},a),f.http)}),i.headers&&(i.headers=sp(i.headers,a.preserveHeaderCase));var o=e.operationName,u=e.extensions,s=e.variables,c=e.query,l={operationName:o,variables:s};return a.includeExtensions&&(l.extensions=u),a.includeQuery&&(l.query=t(c,bi)),{options:i,body:l}}function sp(e,t){if(!t){var r={};return Object.keys(Object(e)).forEach(function(a){r[a.toLowerCase()]=e[a]}),r}var n={};Object.keys(Object(e)).forEach(function(a){n[a.toLowerCase()]={originalName:a,value:e[a]}});var i={};return Object.keys(n).forEach(function(a){i[n[a].originalName]=n[a].value}),i}var up=function(e,t){var r=e.getContext(),n=r.uri;return n||(typeof t=="function"?t(e):t||"/graphql")};function cp(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function lp(e,t,r=""){if(!arguments.length)throw new TypeError("Argument 1 `value` is required.");if(typeof t!="function")throw new TypeError("Argument 2 `isExtractable` must be a function.");if(typeof r!="string")throw new TypeError("Argument 3 `path` must be a string.");const n=new Map,i=new Map;function a(o,u,s){if(t(o)){const f=i.get(o);return f?f.push(u):i.set(o,[u]),null}const c=Array.isArray(o)||typeof FileList<"u"&&o instanceof FileList,l=cp(o);if(c||l){let f=n.get(o);const S=!f;if(S&&(f=c?[]:o instanceof Object?{}:Object.create(null),n.set(o,f)),!s.has(o)){const g=u?`${u}.`:"",D=new Set(s).add(o);if(c){let I=0;for(const _ of o){const C=a(_,g+I++,D);S&&f.push(C)}}else for(const I in o){const _=a(o[I],g+I,D);S&&(f[I]=_)}}return f}return o}return{clone:a(e,r,new Set),files:i}}function dp(e,t,r){"name"in r?e.append(t,r,r.name):e.append(t,r)}function fp(e){return typeof File<"u"&&e instanceof File||typeof Blob<"u"&&e instanceof Blob}function pp({uri:e="/graphql",useGETForQueries:t,isExtractableFile:r=fp,FormData:n,formDataAppendFile:i=dp,print:a=ap,fetch:o,fetchOptions:u,credentials:s,headers:c,includeExtensions:l}={}){const f={http:{includeExtensions:l},options:u,credentials:s,headers:c};return new hr(S=>{const g=S.getContext(),{clientAwareness:{name:D,version:I}={},headers:_}=g,C={http:g.http,options:g.fetchOptions,credentials:g.credentials,headers:{...D&&{"apollographql-client-name":D},...I&&{"apollographql-client-version":I},..._}},{options:h,body:O}=op(S,a,ip,f,C),{clone:w,files:v}=lp(O,r,"");let y=up(S,e);if(v.size){h.headers&&delete h.headers["content-type"];const T=n||FormData,x=new T;x.append("operations",tn(w,"Payload"));const j={};let H=0;v.forEach(ne=>{j[++H]=ne}),x.append("map",JSON.stringify(j)),H=0,v.forEach((ne,ee)=>{i(x,String(++H),ee)}),h.body=x}else if(t&&!S.query.definitions.some(T=>T.kind==="OperationDefinition"&&T.operation==="mutation")&&(h.method="GET"),h.method==="GET"){const{newURI:T,parseError:x}=ep(y,O);if(x)return new ye(j=>{j.error(x)});y=T}else h.body=tn(w,"Payload");const{controller:p}=Jf();typeof p!="boolean"&&(h.signal&&(h.signal.aborted?p.abort():h.signal.addEventListener("abort",()=>{p.abort()},{once:!0})),h.signal=p.signal);const E=o||fetch;return new ye(T=>{let x;return E(y,h).then(j=>(S.setContext({response:j}),j)).then(Xf(S)).then(j=>{T.next(j),T.complete()}).catch(j=>{x||(j.result&&j.result.errors&&j.result.data&&T.next(j.result),T.error(j))}),()=>{x=!0,typeof p!="boolean"&&p.abort()}})})}const ot=e=>(t,{args:r,canRead:n,toReference:i})=>n(t)?t:i({__typename:e,id:r==null?void 0:r.id}),Sr=(e,{canRead:t})=>{if(e!==void 0)return t(e)?e:null},mp={Query:{fields:{findImage:{read:ot("Image")},findPerformer:{read:ot("Performer")},findStudio:{read:ot("Studio")},findGroup:{read:ot("Group")},findGallery:{read:ot("Gallery")},findScene:{read:ot("Scene")},findTag:{read:ot("Tag")},findSavedFilter:{read:ot("SavedFilter")}}},Scene:{fields:{studio:{read:Sr}}},Image:{fields:{studio:{read:Sr},paths:{merge:!1}}},Group:{fields:{studio:{read:Sr}}},Gallery:{fields:{studio:{read:Sr}}},Studio:{fields:{parent_studio:{read:Sr}}}},gp={BaseFile:["VideoFile","ImageFile","GalleryFile"],VisualFile:["VideoFile","ImageFile"]},hp=(($l=document.querySelector("base"))==null?void 0:$l.getAttribute("href"))??"/",Fi=e=>{let t=new URL(window.location.origin+hp);return e&&(t.pathname+=e),t},vp=()=>{const e=Fi("graphql"),t=Fi("graphql");t.protocol==="https:"?t.protocol="wss:":t.protocol="ws:";const r=pp({uri:e.toString()}),n=Yf({url:t.toString(),retryAttempts:1/0,shouldRetry(){return!0}}),i=new Gf(n),a=ts(({networkError:l})=>{if(l&&l.statusCode===401){const f=new URL(Fi("login"),window.location.toString());f.searchParams.append("returnURL",window.location.href),window.location.href=f.toString()}}),o=d.ApolloLink.split(({query:l})=>{const f=bf(l);return f.kind==="OperationDefinition"&&f.operation==="subscription"},i,r),u=d.ApolloLink.from([a,o]),s=new d.InMemoryCache({typePolicies:mp,possibleTypes:gp}),c=new d.ApolloClient({link:u,cache:s});return c.subscribe({query:vd}).subscribe({next:()=>{c.resetStore()}}),{cache:s,client:c,wsClient:n}},{client:ns}=vp();function is(e,t){const r={};for(const n of t){const{selections:i}=yf(n).selectionSet;for(const a of i){if(!hf(a))continue;const o=a.name.value;r[o]=(u,{DELETE:s})=>s}}e.modify({fields:r}),e.gc()}function as(e,t,r){const n=e.extract();for(const i in n){if(r!=null&&r.includes(i))continue;const o=n[i].__typename;if(o&&t[o]){const u={};for(const s of t[o])u[s]=(c,{DELETE:l})=>l;e.modify({id:i,fields:u})}}}const Sp=e=>hd({variables:{id:e},skip:e==="new"||e===""}),yp=e=>ns.query({query:fo,variables:{ids:e}}),os=e=>ns.query({query:fo,variables:{filter:e.makeFindFilter(),tag_filter:e.makeFilter()}});function bp(e,t,r){e.modify({fields:{stats(n){return{...n,[t]:n[t]+r}}}})}const ss={Tag:["parents","children"]},Ip=[cd,dd,fd,ud,sd,ld,lo],_p=()=>id({update(e,t){var i;const r=(i=t.data)==null?void 0:i.tagCreate;if(!r)return;bp(e,"tag_count",1);const n={__typename:"Tag",id:r.id};as(e,ss,e.identify(n)),is(e,[lo])}}),Op=()=>od({update(e,t){var i;const r=(i=t.data)==null?void 0:i.tagUpdate;if(!r)return;const n={__typename:"Tag",id:r.id};as(e,ss,e.identify(n)),is(e,Ip)}}),Cp=200,yr=["byte","kibibyte","mebibyte","gibibyte","tebibyte","pebibyte"],Dp=["B","KiB","MiB","GiB","TiB","PiB"],Ep=(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return{size:0,unit:yr[0]};let t=0,r=e;for(;r>=1024&&t+1<yr.length;)r/=1024,t++;return{size:r,unit:yr[t]}},ue=class ue{constructor(t,r,n,i){this.singular=t,this.plural=r,this.shortString=n,this.secs=i}toString(){return this.shortString}};Z(ue,"SECOND",new ue("second","seconds","s",1)),Z(ue,"MINUTE",new ue("minute","minutes","m",60)),Z(ue,"HOUR",new ue("hour","hours","h",ue.MINUTE.secs*60)),Z(ue,"DAY",new ue("day","days","D",ue.HOUR.secs*24)),Z(ue,"WEEK",new ue("week","weeks","W",ue.DAY.secs*7)),Z(ue,"MONTH",new ue("month","months","M",ue.DAY.secs*30)),Z(ue,"YEAR",new ue("year","years","Y",ue.DAY.secs*365)),Z(ue,"DURATIONS",[ue.SECOND,ue.MINUTE,ue.HOUR,ue.DAY,ue.WEEK,ue.MONTH,ue.YEAR]);let mt=ue;class us{constructor(t,r){this.count=t,this.duration=r}toString(){return this.count.toString()+this.duration.toString()}}const wp=(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return[new us(0,mt.DURATIONS[0])];const t=[];let r=e;for(let n=mt.DURATIONS.length-1;n>=0;n--){const i=Math.floor(r/mt.DURATIONS[n].secs);i!==0&&(r%=mt.DURATIONS[n].secs,t.push(new us(i,mt.DURATIONS[n])))}return t},Tp=(e=0,t=2)=>wp(e).slice(0,t).join(" "),$p=e=>{const t=yr.indexOf(e);return Dp[t]},xp=e=>yr.indexOf(e)>=3?1:0,rn=(e,t)=>{let r=!1;e<0&&(r=!0,e=-e);const n=e%1,i=Math.round(n*1e3);let a=Math.trunc(e);const o=a%60;a=(a-o)/60;const u=a%60;a=(a-u)/60;const s=a;let c=String(o).padStart(2,"0");return s===0?c=String(u)+":"+c:(c=String(u).padStart(2,"0")+":"+c,c=String(s)+":"+c),t&&i>0&&(c+="."+i.toString().padStart(3,"0")),r?"-"+c:c},Fp=(e,t)=>t===void 0?rn(e):`${rn(e)}-${rn(t)}`,Pp=e=>{if(!e)return null;const t=e.split(":");if(t.length>3)return null;let r=t[t.length-1],n=0;if(r.includes(".")){const o=r.split(".");if(o.length!==2)return null;r=o[0];const u=parseInt(o[1],10);if(Number.isNaN(u))return null;n=u/1e3}let i=0,a=1;for(;t.length>0;){const o=t.pop();if(o===void 0)return null;const u=parseInt(o,10);if(Number.isNaN(u))return null;i+=a*u,a*=60}return i+n},Mp=e=>e?e.replace(/^.*[\\/]/,""):"No File Name",Np=e=>{if(!e)return null;const t=e.split("-");if(t.length!==3)return null;const r=Number(t[0]),n=Math.max(0,Number(t[1])-1),i=Number(t[2]);return new Date(r,n,i,0,0,0,0)},nn=e=>{if(!e)return null;const t=e.split("-");let r=Number(t[0]);Number.isNaN(r)&&(r=new Date().getFullYear());let n=0;t.length>1&&(n=Math.max(0,Number(t[1])-1),(n>11||Number.isNaN(n))&&(n=0));let i=1;return t.length>2&&(i=Number(t[2]),(i>31||Number.isNaN(i))&&(i=1)),new Date(r,n,i,0,0,0,0)},kp=e=>{if(!e)return null;const t=e.split(" ");let r=null;if(t.length>0&&(r=nn(t[0])),r||(r=new Date),t.length>1){const n=t[1].split(":");r&&n.length>0&&r.setHours(Number(n[0])),r&&n.length>1&&r.setMinutes(Number(n[1])),r&&n.length>2&&r.setSeconds(Number(n[2]))}return r};function cs(e){return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`}function Ap(e){return`${cs(e)} ${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`}const Lp=(e,t)=>{if(!e)return 0;const r=nn(e),n=t?nn(t):new Date;if(!r||!n)return 0;let i=n.getFullYear()-r.getFullYear();return(r.getMonth()>n.getMonth()||r.getMonth()>=n.getMonth()&&r.getDate()>n.getDate())&&(i-=1),i},jp=e=>`${(e/1e6).toFixed(2)} megabits per second`,qp=(e,t)=>{const r=e>t?t:e;if(r>=6144)return"HUGE";if(r>=3840)return"8K";if(r>=3584)return"7K";if(r>=3e3)return"6K";if(r>=2560)return"5K";if(r>=1920)return"4K";if(r>=1440)return"1440p";if(r>=1080)return"1080p";if(r>=720)return"720p";if(r>=540)return"540p";if(r>=480)return"480p";if(r>=360)return"360p";if(r>=240)return"240p";if(r>=144)return"144p"},ls=(e,t)=>!e||e.startsWith("http://")||e.startsWith("https://")?e:t?e.startsWith(t.host)?`${t.protocol}//${e}`:`${t.protocol}//${t.host}/${e}`:`https://${e}`,Vp=(e,t)=>{if(t)return t.hostname;if(e){let r="";try{const n=ls(e);n&&(e=n),r=new URL(e).hostname}catch{r=e}return r}else return""},ds=(e,t,r=!0)=>t?e.formatDate(t,{format:"long",timeZone:r?"utc":void 0}):"",Bp=(e,t,r=!0)=>{if(!t)return"";const n=t.match(/^(\d{4})$/);if(n){const a=parseInt(n[1],10);return e.formatDate(Date.UTC(a,0),{year:"numeric",timeZone:r?"utc":void 0})}const i=t.match(/^(\d{4})-(\d{2})$/);if(i){const a=parseInt(i[1],10),o=parseInt(i[2],10)-1;return e.formatDate(Date.UTC(a,o),{year:"numeric",month:"long",timeZone:r?"utc":void 0})}return e.formatDate(t,{format:"long",timeZone:r?"utc":void 0})},Rp=(e,t,r=!1)=>`${ds(e,t,r)} ${e.formatTime(t,{timeZone:r?"utc":void 0})}`,Pi=["","K","M","B"],Vt={fileSize:Ep,formatFileSizeUnit:$p,fileSizeFractionalDigits:xp,secondsToTimestamp:rn,formatTimestampRange:Fp,timestampToSeconds:Pp,fileNameFromPath:Mp,stringToDate:Np,stringToFuzzyDate:nn,stringToFuzzyDateTime:kp,dateToString:cs,dateTimeToString:Ap,age:Lp,bitRate:jp,resolution:qp,sanitiseURL:ls,domainFromURL:Vp,formatDate:ds,formatFuzzyDate:Bp,formatDateTime:Rp,secondsAsTimeString:Tp,abbreviateCounter:(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return{size:0,unit:Pi[0]};let t=0,r=0,n=e;for(;n>=1e3&&t+1<Pi.length;)n/=1e3,t++,r=1;return{size:n,unit:Pi[t],digits:r}},stripQuotes:e=>e.startsWith('"')&&e.endsWith('"')?e.slice(1,-1):e,addQuotes:e=>`"${e}"`},Gp={[m.Equals]:"criterion_modifier.equals",[m.NotEquals]:"criterion_modifier.not_equals",[m.GreaterThan]:"criterion_modifier.greater_than",[m.LessThan]:"criterion_modifier.less_than",[m.IsNull]:"criterion_modifier.is_null",[m.NotNull]:"criterion_modifier.not_null",[m.Includes]:"criterion_modifier.includes",[m.IncludesAll]:"criterion_modifier.includes_all",[m.Excludes]:"criterion_modifier.excludes",[m.MatchesRegex]:"criterion_modifier.matches_regex",[m.NotMatchesRegex]:"criterion_modifier.not_matches_regex",[m.Between]:"criterion_modifier.between",[m.NotBetween]:"criterion_modifier.not_between"};class fs{constructor(t){Z(this,"criterionOption");this.criterionOption=t}isValid(){return!0}clone(){const t=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return t.cloneValues(),t}cloneValues(){}getId(){return`${this.criterionOption.type}`}}class me extends fs{constructor(r,n){super(r);Z(this,"_modifier");Z(this,"_value");this.modifier=r.defaultModifier,this.value=n}get modifier(){return this._modifier}set modifier(r){this._modifier=r}get value(){return this._value}set value(r){this._value=r}isValid(){return!0}modifierCriterionOption(){return this.criterionOption}clone(){const r=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return r.cloneValues(),r}cloneValues(){}static getModifierLabel(r,n){const i=Gp[n];return i?r.formatMessage({id:i}):""}getLabel(r,n=!1){const i=me.getModifierLabel(r,this.modifier);let a="";this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(a=this.getLabelValue(r));const o=n?this.criterionOption.sfwMessageID??this.criterionOption.messageID:this.criterionOption.messageID;return r.formatMessage({id:"criterion_modifier.format_string"},{criterion:r.formatMessage({id:o}),modifierString:i,valueString:a})}toQueryParams(){const r={type:this.criterionOption.type,modifier:this.modifier};return this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(r.value=this.encodeValue()),r}encodeValue(){return this.value}decodeValue(r){r!=null&&(this.value=r)}fromDecodedParams(r){const n=r;this.modifier=n.modifier,this.decodeValue(n.value)}setFromSavedCriterion(r){const n=r;n.value!==void 0&&n.value!==null&&(this.value=n.value),this.modifier=n.modifier}applyToCriterionInput(r){r[this.criterionOption.type]=this.toCriterionInput()}applyToSavedCriterion(r){r[this.criterionOption.type]={value:this.value,modifier:this.modifier}}toCriterionInput(){return{value:this.value,modifier:this.modifier}}}class ps{constructor(t){Z(this,"type");Z(this,"messageID");Z(this,"makeCriterionFn");Z(this,"sfwMessageID");Z(this,"hidden",!1);this.type=t.type,this.messageID=t.messageID,this.makeCriterionFn=t.makeCriterion,this.hidden=t.hidden??!1,this.sfwMessageID=t.sfwMessageID}makeCriterion(t){return this.makeCriterionFn(this,t)}}class le extends ps{constructor(r){super(r);Z(this,"modifierOptions");Z(this,"defaultModifier");Z(this,"options");Z(this,"inputType");this.modifierOptions=r.modifierOptions??[],this.defaultModifier=r.defaultModifier??m.Equals,this.options=r.options,this.inputType=r.inputType}}class Mi extends le{constructor(t,r,n,i,a){const o=[m.Includes,m.Excludes,m.IsNull,m.NotNull];let u=m.Includes;n&&(o.unshift(m.IncludesAll),u=m.IncludesAll),super({messageID:t,type:r,modifierOptions:o,defaultModifier:u,inputType:i,makeCriterion:a||(()=>new br(this))})}}class br extends me{constructor(t,r=[]){super(t,r)}cloneValues(){this.value=this.value.map(t=>({...t}))}getLabelValue(t){return this.value.map(r=>r.label).join(", ")}toCriterionInput(){return{value:this.value.map(t=>t.id),modifier:this.modifier}}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull?!0:this.value.length>0}}class Ir extends me{constructor(t,r={items:[],excluded:[],depth:0}){super(t,r)}cloneValues(){this.value={...this.value,items:this.value.items.map(t=>({...t})),excluded:this.value.excluded.map(t=>({...t}))}}get modifier(){return this._modifier}set modifier(t){this._modifier=t,this.value&&t!==m.Includes&&t!==m.IncludesAll&&(this.value.excluded=[])}setFromSavedCriterion(t){const{modifier:r,value:n}=t;n!==void 0&&(this.value={items:n.items||[],excluded:n.excluded||[],depth:n.depth||0});const i=this.criterionOption.modifierOptions??[];r===m.Excludes&&i.find(a=>a===m.Excludes)===void 0?(this.modifier=m.Includes,this.value.excluded=[...this.value.excluded,...this.value.items],this.value.items=[]):this.modifier=r}getLabelValue(t){const r=(this.value.items??[]).map(n=>n.label).join(", ");return this.value.depth===0?r:`${r} (+${this.value.depth>0?this.value.depth:"all"})`}toCriterionInput(){let t=[];const r=this.modifier===m.Equals?0:this.value.depth;return this.value.excluded&&(t=this.value.excluded.map(n=>n.id)),{value:this.value.items.map(n=>n.id),excludes:t,modifier:this.modifier,depth:r}}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull?!0:this.value.items.length>0||this.value.excluded&&this.value.excluded.length>0}getLabel(t,r){let n="criterion_modifier.format_string",i=me.getModifierLabel(t,this.modifier),a="",o="";this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(a=this.value.items.map(s=>s.label).join(", "),this.value.excluded&&this.value.excluded.length>0&&(this.value.items.length===0?(i=me.getModifierLabel(t,m.Excludes),a=this.value.excluded.map(s=>s.label).join(", ")):(n="criterion_modifier.format_string_excludes",o=this.value.excluded.map(s=>s.label).join(", "))),this.value.depth!==0&&(n+="_depth"));const u=r?this.criterionOption.sfwMessageID??this.criterionOption.messageID:this.criterionOption.messageID;return t.formatMessage({id:n},{criterion:t.formatMessage({id:u}),modifierString:i,valueString:a,excludedString:o,depth:this.value.depth})}}class an extends le{constructor(t){super({modifierOptions:[m.Equals,m.NotEquals,m.Includes,m.Excludes,m.IsNull,m.NotNull,m.MatchesRegex,m.NotMatchesRegex],defaultModifier:m.Equals,inputType:"text",makeCriterion:()=>new He(this),...t})}}function te(e,t,r){return new an({messageID:t??e,type:e,...r})}class Up extends le{constructor(t,r){super({messageID:t,type:r,modifierOptions:[m.Equals,m.NotEquals,m.Includes,m.Excludes,m.MatchesRegex,m.NotMatchesRegex],defaultModifier:m.Equals,inputType:"text",makeCriterion:()=>new He(this)})}}function on(e,t){return new Up(t??e,e)}class He extends me{constructor(t){super(t,"")}getLabelValue(t){return this.value}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull||this.value.length>0}}class Ni extends me{constructor(t,r=[]){super(t,r)}cloneValues(){this.value=this.value.slice()}getLabelValue(t){return this.value.join(", ")}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull||this.value.length>0}}class gt extends le{constructor(t,r,n){super({messageID:t,type:r,modifierOptions:[],defaultModifier:m.Equals,options:["true","false"],makeCriterion:n||(()=>new ht(this))})}}function sn(e,t){return new gt(e,e)}class ht extends He{toCriterionInput(){return this.value==="true"}isValid(){return this.value==="true"||this.value==="false"}}class ms extends le{constructor(t,r,n){super({messageID:t,type:r,options:["true","false"],makeCriterion:n||(()=>new ki(this))})}}class ki extends He{toCriterionInput(){return this.value}isValid(){return this.value==="true"||this.value==="false"}}class Hp extends le{constructor(t,r){super({messageID:t,type:r,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.IsNull,m.NotNull,m.Between,m.NotBetween],defaultModifier:m.Equals,inputType:"number",makeCriterion:()=>new Ai(this)})}}function gs(e,t){return new Hp(t??e,e)}class zp extends le{constructor(t,r,n){super({messageID:t,type:r,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.Between,m.NotBetween,m.IsNull,m.NotNull],defaultModifier:m.Equals,inputType:"number",makeCriterion:n||(()=>new Ai(this))})}}class un extends le{constructor(t,r,n,i){super({messageID:t,type:r,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.Between,m.NotBetween],defaultModifier:m.Equals,inputType:"number",makeCriterion:n||(()=>new Ai(this)),...i})}}function K(e,t,r){return new un(t??e,e,void 0,r)}function _r(e,t){return e===m.Between||e===m.NotBetween?{value:t.value,value2:t.value2}:{value:t.value}}function Wp(e){return typeof e.value=="object"?e.value:{value:e.value,value2:e.value2}}class Ai extends me{constructor(t){super(t,{value:void 0,value2:void 0})}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(t){typeof t!="object"?this._value={value:t,value2:void 0}:this._value=t}toCriterionInput(){var t,r;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??0,value2:(r=this.value)==null?void 0:r.value2}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return _r(this.modifier,this.value)}getLabelValue(t){const{value:r,value2:n}=this.value;return this.modifier===m.Between||this.modifier===m.NotBetween?`${r}, ${n??0}`:`${r}`}isValid(){if(this.modifier===m.IsNull||this.modifier===m.NotNull)return!0;const{value:t,value2:r}=this.value;return!(t===void 0||r===void 0&&(this.modifier===m.Between||this.modifier===m.NotBetween))}}let Yp=class extends un{constructor(t,r){super(t,r,()=>new hs(this))}};function cn(e,t){return new Yp(e,e)}class Kp extends zp{constructor(t,r){super(t,r,()=>new hs(this))}}function Qp(e,t){return new Kp(e,e)}class hs extends me{constructor(t){super(t,{value:void 0,value2:void 0})}cloneValues(){this.value={...this.value}}toCriterionInput(){var t,r;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??0,value2:(r=this.value)==null?void 0:r.value2}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return _r(this.modifier,this.value)}getLabelValue(t){const r=Vt.secondsToTimestamp(this.value.value??0),n=Vt.secondsToTimestamp(this.value.value2??0);return this.modifier===m.Between||this.modifier===m.NotBetween?`${r}, ${n}`:r}isValid(){if(this.modifier===m.IsNull||this.modifier===m.NotNull)return!0;const{value:t,value2:r}=this.value;return!(t===void 0||r===void 0&&(this.modifier===m.Between||this.modifier===m.NotBetween))}}class Jp extends le{constructor(t,r){super({messageID:t,type:r,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.IsNull,m.NotNull,m.Between,m.NotBetween],defaultModifier:m.Equals,inputType:"text",makeCriterion:()=>new Zp(this)})}}function Ze(e){return new Jp(e,e)}class Zp extends me{constructor(t){super(t,{value:"",value2:void 0})}cloneValues(){this.value={...this.value}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return _r(this.modifier,this.value)}toCriterionInput(){var t,r;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??"",value2:(r=this.value)==null?void 0:r.value2}}getLabelValue(){const{value:t}=this.value;return this.modifier===m.Between||this.modifier===m.NotBetween?`${t}, ${this.value.value2}`:`${t}`}isValid(){if(this.modifier===m.IsNull||this.modifier===m.NotNull)return!0;const{value:t,value2:r}=this.value;return!(!t||!r&&(this.modifier===m.Between||this.modifier===m.NotBetween))}}class Xp extends le{constructor(t,r){super({messageID:t,type:r,modifierOptions:[m.GreaterThan,m.LessThan,m.Between,m.NotBetween],defaultModifier:m.GreaterThan,inputType:"text",makeCriterion:()=>new em(this)})}}function be(e){return new Xp(e,e)}class em extends me{constructor(t){super(t,{value:"",value2:void 0})}cloneValues(){this.value={...this.value}}toCriterionInput(){return{modifier:this.modifier,value:this.transformValueToInput(this.value.value??""),value2:this.value.value2?this.transformValueToInput(this.value.value2):null}}setFromSavedCriterion(t){super.setFromSavedCriterion(t),this.value=Wp(t)}encodeValue(){return _r(this.modifier,this.value)}getLabelValue(){const{value:t}=this.value;return this.modifier===m.Between||this.modifier===m.NotBetween?`${t}, ${this.value.value2}`:`${t}`}transformValueToInput(t){return t=t.trim(),/^\d{4}-\d{2}-\d{2}(( |T)\d{2}:\d{2})?$/.test(t)?t.replace(" ","T"):""}isValid(){if(this.modifier===m.IsNull||this.modifier===m.NotNull)return!0;const{value:t,value2:r}=this.value;return!(!t||!r&&(this.modifier===m.Between||this.modifier===m.NotBetween))}}class tm extends an{constructor(t){super({messageID:"unsupported_criterion",type:t,makeCriterion:()=>new rm(this)})}}class rm extends He{getLabel(t){const r=me.getModifierLabel(t,this.modifier);let n="";return this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(n=this.getLabelValue(t)),t.formatMessage({id:"criterion_modifier.format_string"},{criterion:t.formatMessage({id:"criterion.unsupported"},{type:this.criterionOption.type}),modifierString:r,valueString:n})}applyToCriterionInput(){}applyToSavedCriterion(){}setFromSavedCriterion(){}}const vs=new gt("favourite","filter_favorites",()=>new nm);class nm extends ht{constructor(){super(vs)}}const Ss=new gt("favourite","favorite",()=>new im);class im extends ht{constructor(){super(Ss)}}const ys=new gt("favourite","favorite",()=>new am);class am extends ht{constructor(){super(ys)}}const ln=new gt("performer_favorite","performer_favorite",()=>new om);class om extends ht{constructor(){super(ln)}}class sm extends He{toCriterionInput(){return this.value}}class vt extends le{constructor(t,r,n){super({messageID:t,type:r,options:n,modifierOptions:[],defaultModifier:m.Equals,makeCriterion:()=>new sm(this)})}}const um=new vt("isMissing","is_missing",["title","code","details","director","url","date","rating","cover","galleries","studio","group","performers","tags","stash_id"]),cm=new vt("isMissing","is_missing",["title","details","photographer","url","date","code","rating","galleries","studio","performers","tags"]),lm=new vt("isMissing","is_missing",["url","ethnicity","country","hair_color","eye_color","height","weight","measurements","fake_tits","penis_length","circumcised","career_start","career_end","tattoos","piercings","aliases","gender","birthdate","death_date","disambiguation","tags","image","details","rating","stash_id"]),dm=new vt("isMissing","is_missing",["title","code","details","photographer","url","date","rating","cover","studio","performers","tags","scenes"]),fm=new vt("isMissing","is_missing",["image","aliases","description","stash_id"]),pm=new vt("isMissing","is_missing",["image","stash_id","details","url","aliases","tags","rating"]),mm=new vt("isMissing","is_missing",["aliases","description","director","date","url","rating","studio","performers","tags","front_image","back_image","scenes"]),dn=new gt("organized","organized",()=>new gm);class gm extends ht{constructor(){super(dn)}}const bs=new ms("hasChapters","has_chapters",()=>new hm);class hm extends ki{constructor(){super(bs)}}const vm=[m.IncludesAll,m.Includes,m.Equals,m.IsNull,m.NotNull],Sm=m.IncludesAll,ym="performers",Bt=new le({messageID:"performers",type:"performers",modifierOptions:vm,defaultModifier:Sm,inputType:ym,makeCriterion:()=>new Rt});class Rt extends me{constructor(){super(Bt,{items:[],excluded:[]})}cloneValues(){this.value={...this.value,items:this.value.items.map(t=>({...t})),excluded:this.value.excluded.map(t=>({...t}))}}get modifier(){return this._modifier}set modifier(t){this._modifier=t,t!==m.Includes&&t!==m.IncludesAll&&(this.value.excluded=[])}setFromSavedCriterion(t){const{modifier:r,value:n}=t;Array.isArray(n)?this.value={items:n,excluded:[]}:n!==void 0&&(this.value={items:n.items||[],excluded:n.excluded||[]}),r===m.Excludes?(this.modifier=m.Includes,this.value.excluded=[...this.value.excluded,...this.value.items],this.value.items=[]):this.modifier=r}getLabelValue(t){return this.value.items.map(r=>r.label).join(", ")}toCriterionInput(){let t=[];return this.value.excluded&&(t=this.value.excluded.map(r=>r.id)),{value:this.value.items.map(r=>r.id),excludes:t,modifier:this.modifier}}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull?!0:this.value.items.length>0||this.value.excluded&&this.value.excluded.length>0}getLabel(t){let r="criterion_modifier.format_string",n=me.getModifierLabel(t,this.modifier),i="",a="";return this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(i=this.value.items.map(o=>o.label).join(", "),this.value.excluded&&this.value.excluded.length>0&&(this.value.items.length===0?(n=me.getModifierLabel(t,m.Excludes),i=this.value.excluded.map(o=>o.label).join(", ")):(r="criterion_modifier.format_string_excludes",a=this.value.excluded.map(o=>o.label).join(", ")))),t.formatMessage({id:r},{criterion:t.formatMessage({id:this.criterionOption.messageID}),modifierString:n,valueString:i,excludedString:a})}}const Is=new Map([["144p",$e.VeryLow],["240p",$e.Low],["360p",$e.R360P],["480p",$e.Standard],["540p",$e.WebHd],["720p",$e.StandardHd],["1080p",$e.FullHd],["1440p",$e.QuadHd],["4k",$e.FourK],["5k",$e.FiveK],["6k",$e.SixK],["7k",$e.SevenK],["8k",$e.EightK],["Huge",$e.Huge]]),bm=(e,t)=>e?Is.get(e):void 0,Im=Array.from(Is.keys());class _s extends le{constructor(t,r){super({messageID:t,type:t,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan],options:Im,makeCriterion:r})}}class Os extends He{toCriterionInput(){const t=bm(this.value);if(t!==void 0)return{value:t,modifier:this.modifier}}}const Li=new _s("resolution",()=>new _m);class _m extends Os{constructor(){super(Li)}}const Cs=new _s("average_resolution",()=>new Om);class Om extends Os{constructor(){super(Cs)}}const Ds="scenes",Es=new Mi("scenes","scenes",!0,Ds,()=>new Cm);class Cm extends br{constructor(){super(Es)}}const Dm=[m.Includes,m.Excludes],Em=m.Includes,ws=new le({messageID:"scenes",type:"scenes",modifierOptions:Dm,defaultModifier:Em,inputType:Ds,makeCriterion:()=>new Ts});class Ts extends br{constructor(){super(ws)}}const wm=[m.Includes,m.IsNull,m.NotNull],Tm=m.Includes,$s="studios",Gt=new le({messageID:"studios",type:"studios",modifierOptions:wm,defaultModifier:Tm,inputType:$s,makeCriterion:()=>new Ut});class Ut extends Ir{constructor(){super(Gt)}}const xs=new Mi("parent_studios","parents",!1,$s,()=>new Fs);class Fs extends br{constructor(){super(xs)}}const Ps=[m.IncludesAll,m.Includes,m.Equals,m.IsNull,m.NotNull],ji=[m.IncludesAll,m.Includes,m.IsNull,m.NotNull],$m=m.IncludesAll,xm="tags";class Or extends le{constructor(t,r,n){super({messageID:t,type:r,modifierOptions:n,defaultModifier:$m,inputType:xm,makeCriterion:()=>new fn(this)})}}const st=new Or("tags","tags",Ps),Fm=new Or("scene_tags","scene_tags",Ps),qi=new Or("performer_tags","performer_tags",ji),Ms=new Or("parent_tags","parents",ji),Ns=new Or("sub_tags","children",ji);class fn extends Ir{}const Vi=["title","path","rating","file_mod_time","tag_count","performer_count","random"];class Ie{constructor(t,r,n,i){Z(this,"defaultSortBy","");Z(this,"sortByOptions",[]);Z(this,"displayModeOptions",[]);Z(this,"criterionOptions",[]);this.defaultSortBy=t,this.sortByOptions=[...r,Ie.createSortBy("created_at"),Ie.createSortBy("updated_at")],this.displayModeOptions=n,this.criterionOptions=i}static createSortBy(t){return{messageID:t,value:t}}}var ge=(e=>(e[e.Grid=0]="Grid",e[e.List=1]="List",e[e.Wall=2]="Wall",e[e.Tagger=3]="Tagger",e))(ge||{});const Pm={type:"stars",starPrecision:"full"};function Mm(e,t){let r=t;r||(r=1);const n=1/r;return Math.round(e*n)/n}function Nm(e){switch(e){case"full":return 1;case"half":return .5;case"quarter":return .25;case"tenth":return .1;default:return 1}}function Bi(e,t){if(!e)return null;const{type:r,starPrecision:n}=t,i=r==="decimal"?.1:Nm(n??"full"),o=100/(r==="decimal"?10:5);return Mm(e/o,i)}function km(e,t){const n=100/((t??"stars")==="decimal"?10:5);return Math.round(e*n)}const Am=[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.Between,m.NotBetween,m.IsNull,m.NotNull];function Lm(e){return(e==null?void 0:e.ui.ratingSystemOptions)??Pm}const St=new le({messageID:"rating",type:"rating100",modifierOptions:Am,defaultModifier:m.Equals,makeCriterion:(e,t)=>new jm(Lm(t)),inputType:"number"});class jm extends me{constructor(r){super(St,{value:0,value2:void 0});Z(this,"ratingSystem");this.ratingSystem=r}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(r){typeof r!="object"?this._value={value:km(r,this.ratingSystem.type),value2:void 0}:this._value=r}toCriterionInput(){return{modifier:this.modifier,value:this.value.value??0,value2:this.value.value2}}setFromSavedCriterion(r){super.setFromSavedCriterion(r)}encodeValue(){return _r(this.modifier,this.value)}getLabelValue(){const{value:r,value2:n}=this.value;return this.modifier===m.Between||this.modifier===m.NotBetween?`${Bi(r,this.ratingSystem)??0}, ${Bi(n,this.ratingSystem)??0}`:`${Bi(r,this.ratingSystem)??0}`}}const pn=new an({messageID:"path",type:"path",defaultModifier:m.Includes,makeCriterion:()=>new qm});class qm extends He{constructor(){super(pn)}}function Vm(){this.__data__=[],this.size=0}function ks(e,t){return e===t||e!==e&&t!==t}function mn(e,t){for(var r=e.length;r--;)if(ks(e[r][0],t))return r;return-1}var Bm=Array.prototype,Rm=Bm.splice;function Gm(e){var t=this.__data__,r=mn(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Rm.call(t,r,1),--this.size,!0}function Um(e){var t=this.__data__,r=mn(t,e);return r<0?void 0:t[r][1]}function Hm(e){return mn(this.__data__,e)>-1}function zm(e,t){var r=this.__data__,n=mn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function Xe(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Xe.prototype.clear=Vm,Xe.prototype.delete=Gm,Xe.prototype.get=Um,Xe.prototype.has=Hm,Xe.prototype.set=zm;function Wm(){this.__data__=new Xe,this.size=0}function Ym(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Km(e){return this.__data__.get(e)}function Qm(e){return this.__data__.has(e)}var As=typeof global=="object"&&global&&global.Object===Object&&global,Jm=typeof self=="object"&&self&&self.Object===Object&&self,ze=As||Jm||Function("return this")(),Ht=ze.Symbol,Ls=Object.prototype,Zm=Ls.hasOwnProperty,Xm=Ls.toString,Cr=Ht?Ht.toStringTag:void 0;function eg(e){var t=Zm.call(e,Cr),r=e[Cr];try{e[Cr]=void 0;var n=!0}catch{}var i=Xm.call(e);return n&&(t?e[Cr]=r:delete e[Cr]),i}var tg=Object.prototype,rg=tg.toString;function ng(e){return rg.call(e)}var ig="[object Null]",ag="[object Undefined]",js=Ht?Ht.toStringTag:void 0;function zt(e){return e==null?e===void 0?ag:ig:js&&js in Object(e)?eg(e):ng(e)}function yt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var og="[object AsyncFunction]",sg="[object Function]",ug="[object GeneratorFunction]",cg="[object Proxy]";function qs(e){if(!yt(e))return!1;var t=zt(e);return t==sg||t==ug||t==og||t==cg}var Ri=ze["__core-js_shared__"],Vs=function(){var e=/[^.]+$/.exec(Ri&&Ri.keys&&Ri.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function lg(e){return!!Vs&&Vs in e}var dg=Function.prototype,fg=dg.toString;function bt(e){if(e!=null){try{return fg.call(e)}catch{}try{return e+""}catch{}}return""}var pg=/[\\^$.*+?()[\]{}|]/g,mg=/^\[object .+?Constructor\]$/,gg=Function.prototype,hg=Object.prototype,vg=gg.toString,Sg=hg.hasOwnProperty,yg=RegExp("^"+vg.call(Sg).replace(pg,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function bg(e){if(!yt(e)||lg(e))return!1;var t=qs(e)?yg:mg;return t.test(bt(e))}function Ig(e,t){return e==null?void 0:e[t]}function It(e,t){var r=Ig(e,t);return bg(r)?r:void 0}var Dr=It(ze,"Map"),Er=It(Object,"create");function _g(){this.__data__=Er?Er(null):{},this.size=0}function Og(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Cg="__lodash_hash_undefined__",Dg=Object.prototype,Eg=Dg.hasOwnProperty;function wg(e){var t=this.__data__;if(Er){var r=t[e];return r===Cg?void 0:r}return Eg.call(t,e)?t[e]:void 0}var Tg=Object.prototype,$g=Tg.hasOwnProperty;function xg(e){var t=this.__data__;return Er?t[e]!==void 0:$g.call(t,e)}var Fg="__lodash_hash_undefined__";function Pg(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Er&&t===void 0?Fg:t,this}function _t(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}_t.prototype.clear=_g,_t.prototype.delete=Og,_t.prototype.get=wg,_t.prototype.has=xg,_t.prototype.set=Pg;function Mg(){this.size=0,this.__data__={hash:new _t,map:new(Dr||Xe),string:new _t}}function Ng(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function gn(e,t){var r=e.__data__;return Ng(t)?r[typeof t=="string"?"string":"hash"]:r.map}function kg(e){var t=gn(this,e).delete(e);return this.size-=t?1:0,t}function Ag(e){return gn(this,e).get(e)}function Lg(e){return gn(this,e).has(e)}function jg(e,t){var r=gn(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function Wt(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Wt.prototype.clear=Mg,Wt.prototype.delete=kg,Wt.prototype.get=Ag,Wt.prototype.has=Lg,Wt.prototype.set=jg;var qg=200;function Vg(e,t){var r=this.__data__;if(r instanceof Xe){var n=r.__data__;if(!Dr||n.length<qg-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Wt(n)}return r.set(e,t),this.size=r.size,this}function Yt(e){var t=this.__data__=new Xe(e);this.size=t.size}Yt.prototype.clear=Wm,Yt.prototype.delete=Ym,Yt.prototype.get=Km,Yt.prototype.has=Qm,Yt.prototype.set=Vg;function Bg(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var Bs=function(){try{var e=It(Object,"defineProperty");return e({},"",{}),e}catch{}}();function Rg(e,t,r){t=="__proto__"&&Bs?Bs(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Gg=Object.prototype,Ug=Gg.hasOwnProperty;function Hg(e,t,r){var n=e[t];(!(Ug.call(e,t)&&ks(n,r))||r===void 0&&!(t in e))&&Rg(e,t,r)}function zg(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Kt(e){return e!=null&&typeof e=="object"}var Wg="[object Arguments]";function Rs(e){return Kt(e)&&zt(e)==Wg}var Gs=Object.prototype,Yg=Gs.hasOwnProperty,Kg=Gs.propertyIsEnumerable,Qg=Rs(function(){return arguments}())?Rs:function(e){return Kt(e)&&Yg.call(e,"callee")&&!Kg.call(e,"callee")},Gi=Array.isArray;function Jg(){return!1}var Us=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Hs=Us&&typeof module=="object"&&module&&!module.nodeType&&module,Zg=Hs&&Hs.exports===Us,zs=Zg?ze.Buffer:void 0,Xg=zs?zs.isBuffer:void 0,Ws=Xg||Jg,eh=9007199254740991,th=/^(?:0|[1-9]\d*)$/;function rh(e,t){var r=typeof e;return t=t??eh,!!t&&(r=="number"||r!="symbol"&&th.test(e))&&e>-1&&e%1==0&&e<t}var nh=9007199254740991;function Ys(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=nh}var ih="[object Arguments]",ah="[object Array]",oh="[object Boolean]",sh="[object Date]",uh="[object Error]",ch="[object Function]",lh="[object Map]",dh="[object Number]",fh="[object Object]",ph="[object RegExp]",mh="[object Set]",gh="[object String]",hh="[object WeakMap]",vh="[object ArrayBuffer]",Sh="[object DataView]",yh="[object Float32Array]",bh="[object Float64Array]",Ih="[object Int8Array]",_h="[object Int16Array]",Oh="[object Int32Array]",Ch="[object Uint8Array]",Dh="[object Uint8ClampedArray]",Eh="[object Uint16Array]",wh="[object Uint32Array]",pe={};pe[yh]=pe[bh]=pe[Ih]=pe[_h]=pe[Oh]=pe[Ch]=pe[Dh]=pe[Eh]=pe[wh]=!0,pe[ih]=pe[ah]=pe[vh]=pe[oh]=pe[Sh]=pe[sh]=pe[uh]=pe[ch]=pe[lh]=pe[dh]=pe[fh]=pe[ph]=pe[mh]=pe[gh]=pe[hh]=!1;function Th(e){return Kt(e)&&Ys(e.length)&&!!pe[zt(e)]}function Ui(e){return function(t){return e(t)}}var Ks=typeof exports=="object"&&exports&&!exports.nodeType&&exports,wr=Ks&&typeof module=="object"&&module&&!module.nodeType&&module,$h=wr&&wr.exports===Ks,Hi=$h&&As.process,Qt=function(){try{var e=wr&&wr.require&&wr.require("util").types;return e||Hi&&Hi.binding&&Hi.binding("util")}catch{}}(),Qs=Qt&&Qt.isTypedArray,xh=Qs?Ui(Qs):Th,Fh=Object.prototype,Ph=Fh.hasOwnProperty;function Mh(e,t){var r=Gi(e),n=!r&&Qg(e),i=!r&&!n&&Ws(e),a=!r&&!n&&!i&&xh(e),o=r||n||i||a,u=o?zg(e.length,String):[],s=u.length;for(var c in e)Ph.call(e,c)&&!(o&&(c=="length"||i&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||rh(c,s)))&&u.push(c);return u}var Nh=Object.prototype;function Js(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Nh;return e===r}function Zs(e,t){return function(r){return e(t(r))}}var kh=Zs(Object.keys,Object),Ah=Object.prototype,Lh=Ah.hasOwnProperty;function jh(e){if(!Js(e))return kh(e);var t=[];for(var r in Object(e))Lh.call(e,r)&&r!="constructor"&&t.push(r);return t}function qh(e){return e!=null&&Ys(e.length)&&!qs(e)}function Vh(e){return qh(e)?Mh(e):jh(e)}var Xs=typeof exports=="object"&&exports&&!exports.nodeType&&exports,eu=Xs&&typeof module=="object"&&module&&!module.nodeType&&module,Bh=eu&&eu.exports===Xs,tu=Bh?ze.Buffer:void 0;tu&&tu.allocUnsafe;function Rh(e,t){return e.slice()}function Gh(e,t){for(var r=-1,n=e==null?0:e.length,i=0,a=[];++r<n;){var o=e[r];t(o,r,e)&&(a[i++]=o)}return a}function Uh(){return[]}var Hh=Object.prototype,zh=Hh.propertyIsEnumerable,ru=Object.getOwnPropertySymbols,Wh=ru?function(e){return e==null?[]:(e=Object(e),Gh(ru(e),function(t){return zh.call(e,t)}))}:Uh;function Yh(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}var Kh=Zs(Object.getPrototypeOf,Object);function Qh(e,t,r){var n=t(e);return Gi(e)?n:Yh(n,r(e))}function Jh(e){return Qh(e,Vh,Wh)}var zi=It(ze,"DataView"),Wi=It(ze,"Promise"),Yi=It(ze,"Set"),Ki=It(ze,"WeakMap"),nu="[object Map]",Zh="[object Object]",iu="[object Promise]",au="[object Set]",ou="[object WeakMap]",su="[object DataView]",Xh=bt(zi),ev=bt(Dr),tv=bt(Wi),rv=bt(Yi),nv=bt(Ki),et=zt;(zi&&et(new zi(new ArrayBuffer(1)))!=su||Dr&&et(new Dr)!=nu||Wi&&et(Wi.resolve())!=iu||Yi&&et(new Yi)!=au||Ki&&et(new Ki)!=ou)&&(et=function(e){var t=zt(e),r=t==Zh?e.constructor:void 0,n=r?bt(r):"";if(n)switch(n){case Xh:return su;case ev:return nu;case tv:return iu;case rv:return au;case nv:return ou}return t});var iv=Object.prototype,av=iv.hasOwnProperty;function ov(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&av.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var uu=ze.Uint8Array;function Qi(e){var t=new e.constructor(e.byteLength);return new uu(t).set(new uu(e)),t}function sv(e,t){var r=Qi(e.buffer);return new e.constructor(r,e.byteOffset,e.byteLength)}var uv=/\w*$/;function cv(e){var t=new e.constructor(e.source,uv.exec(e));return t.lastIndex=e.lastIndex,t}var cu=Ht?Ht.prototype:void 0,lu=cu?cu.valueOf:void 0;function lv(e){return lu?Object(lu.call(e)):{}}function dv(e,t){var r=Qi(e.buffer);return new e.constructor(r,e.byteOffset,e.length)}var fv="[object Boolean]",pv="[object Date]",mv="[object Map]",gv="[object Number]",hv="[object RegExp]",vv="[object Set]",Sv="[object String]",yv="[object Symbol]",bv="[object ArrayBuffer]",Iv="[object DataView]",_v="[object Float32Array]",Ov="[object Float64Array]",Cv="[object Int8Array]",Dv="[object Int16Array]",Ev="[object Int32Array]",wv="[object Uint8Array]",Tv="[object Uint8ClampedArray]",$v="[object Uint16Array]",xv="[object Uint32Array]";function Fv(e,t,r){var n=e.constructor;switch(t){case bv:return Qi(e);case fv:case pv:return new n(+e);case Iv:return sv(e);case _v:case Ov:case Cv:case Dv:case Ev:case wv:case Tv:case $v:case xv:return dv(e);case mv:return new n;case gv:case Sv:return new n(e);case hv:return cv(e);case vv:return new n;case yv:return lv(e)}}var du=Object.create,Pv=function(){function e(){}return function(t){if(!yt(t))return{};if(du)return du(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();function Mv(e){return typeof e.constructor=="function"&&!Js(e)?Pv(Kh(e)):{}}var Nv="[object Map]";function kv(e){return Kt(e)&&et(e)==Nv}var fu=Qt&&Qt.isMap,Av=fu?Ui(fu):kv,Lv="[object Set]";function jv(e){return Kt(e)&&et(e)==Lv}var pu=Qt&&Qt.isSet,qv=pu?Ui(pu):jv,mu="[object Arguments]",Vv="[object Array]",Bv="[object Boolean]",Rv="[object Date]",Gv="[object Error]",gu="[object Function]",Uv="[object GeneratorFunction]",Hv="[object Map]",zv="[object Number]",hu="[object Object]",Wv="[object RegExp]",Yv="[object Set]",Kv="[object String]",Qv="[object Symbol]",Jv="[object WeakMap]",Zv="[object ArrayBuffer]",Xv="[object DataView]",eS="[object Float32Array]",tS="[object Float64Array]",rS="[object Int8Array]",nS="[object Int16Array]",iS="[object Int32Array]",aS="[object Uint8Array]",oS="[object Uint8ClampedArray]",sS="[object Uint16Array]",uS="[object Uint32Array]",de={};de[mu]=de[Vv]=de[Zv]=de[Xv]=de[Bv]=de[Rv]=de[eS]=de[tS]=de[rS]=de[nS]=de[iS]=de[Hv]=de[zv]=de[hu]=de[Wv]=de[Yv]=de[Kv]=de[Qv]=de[aS]=de[oS]=de[sS]=de[uS]=!0,de[Gv]=de[gu]=de[Jv]=!1;function hn(e,t,r,n,i,a){var o;if(o!==void 0)return o;if(!yt(e))return e;var u=Gi(e);if(u)o=ov(e);else{var s=et(e),c=s==gu||s==Uv;if(Ws(e))return Rh(e);if(s==hu||s==mu||c&&!i)o=c?{}:Mv(e);else{if(!de[s])return i?e:{};o=Fv(e,s)}}a||(a=new Yt);var l=a.get(e);if(l)return l;a.set(e,o),qv(e)?e.forEach(function(g){o.add(hn(g,t,r,g,e,a))}):Av(e)&&e.forEach(function(g,D){o.set(D,hn(g,t,r,D,e,a))});var f=Jh,S=u?void 0:f(e);return Bg(S||e,function(g,D){S&&(D=g,g=e[D]),Hg(o,D,hn(g,t,r,D,e,a))}),o}var cS=1,lS=4;function vn(e){return hn(e,cS|lS)}function vu(e){return e?e.map(t=>t).join(", "):""}const ut=new ps({type:"custom_fields",messageID:"custom_fields.title",makeCriterion:()=>new Su});class Su extends fs{constructor(){super(ut);Z(this,"value",[])}isValid(){return this.value.length>0}applyToCriterionInput(r){r.custom_fields=vn(this.value)}applyToSavedCriterion(r){r.custom_fields=vn(this.value)}getLabel(r){var s;if(this.value.length===0)return"";const n=this.value[0];let i="",a="";n.modifier!==m.IsNull&&n.modifier!==m.NotNull&&(((s=n.value)==null?void 0:s.length)??0)>0&&(a=vu(n.value));const o=me.getModifierLabel(r,n.modifier),u={criterion:n.field,modifierString:o,valueString:a,others:""};return this.value.length===1?i="custom_fields.criteria_format_string":(i="custom_fields.criteria_format_string_others",u.others=(this.value.length-1).toString()),r.formatMessage({id:i},u)}getValueLabel(r,n){var u;let i="";n.modifier!==m.IsNull&&n.modifier!==m.NotNull&&(((u=n.value)==null?void 0:u.length)??0)>0&&(i=vu(n.value));const a=me.getModifierLabel(r,n.modifier),o={criterion:n.field,modifierString:a,valueString:i};return r.formatMessage({id:"custom_fields.criteria_format_string"},o)}toQueryParams(){return{type:this.criterionOption.type,value:this.value}}fromDecodedParams(r){const n=r;this.value=vn(n.value)}setFromSavedCriterion(r){this.value=vn(r)}}const yu=[m.Includes],bu=m.Includes,Iu="folders",Ji=new le({messageID:"folder",type:"folder",modifierOptions:yu,defaultModifier:bu,inputType:Iu,makeCriterion:()=>new dS}),_u=new le({messageID:"parent_folder",type:"parent_folder",modifierOptions:yu,defaultModifier:bu,inputType:Iu,makeCriterion:()=>new fS});class dS extends Ir{constructor(){super(Ji)}applyToCriterionInput(t){t.files_filter={parent_folder:this.toCriterionInput()}}}class fS extends Ir{constructor(){super(_u)}applyToCriterionInput(t){t.parent_folder=this.toCriterionInput()}}const pS="path",mS=["date",...Vi].map(Ie.createSortBy).concat([{messageID:"performer_age",value:"performer_age"},{messageID:"image_count",value:"images_count"},{messageID:"zip_file_count",value:"file_count"}]),gS=[ge.Grid,ge.List,ge.Wall],hS=K("performer_age"),vS=[te("title"),te("code","scene_code"),te("details"),te("photographer"),pn,_u,te("checksum","media_info.md5"),St,dn,Cs,dm,st,bs,K("tag_count"),qi,Bt,K("performer_count"),hS,ln,K("image_count"),Es,Gt,te("url"),K("file_count","zip_file_count"),Ze("date"),be("created_at"),be("updated_at"),ut],SS=new Ie(pS,mS,gS,vS),Ou=new Map([["Landscape",Gr.Landscape],["Portrait",Gr.Portrait],["Square",Gr.Square]]),yS=(e,t)=>e?Ou.get(e):void 0,bS=Array.from(Ou.keys());class IS extends Ni{toCriterionInput(){return{value:this.value.map(t=>yS(t)).filter(t=>t)}}}class _S extends le{constructor(t){super({messageID:t,type:t,options:bS,makeCriterion:()=>new IS(this)})}}const Cu=new _S("orientation"),OS="galleries",Zi=new Mi("galleries","galleries",!0,OS,()=>new Du);class Du extends br{constructor(){super(Zi)}}const CS={phash:"media_info.phash",stash_id:"stash_id",title:"title",url:"url"},Eu=["phash","stash_id","title","url"],Xi=new le({messageID:"media_info.phash",type:"phash_distance",inputType:"text",modifierOptions:[m.Equals,m.NotEquals,m.IsNull,m.NotNull],makeCriterion:()=>new ea});class ea extends me{constructor(){super(Xi,{value:"",distance:0})}cloneValues(){this.value={...this.value}}getLabelValue(){const{value:t,distance:r}=this.value;return(this.modifier===m.Equals||this.modifier===m.NotEquals)&&r?`${t} (${r})`:`${t}`}toCriterionInput(){return{value:this.value.value,modifier:this.modifier,distance:this.value.distance}}}const wu=new le({messageID:"duplicated",type:"duplicated",modifierOptions:[],defaultModifier:m.Equals,makeCriterion:()=>new DS});class DS extends me{constructor(){super(wu,{})}cloneValues(){this.value={...this.value}}getLabel(t){const r=[],n=t.formatMessage({id:"true"}),i=t.formatMessage({id:"false"});for(const a of Eu){const o=this.value[a];if(o!==void 0){const u=t.formatMessage({id:CS[a]});r.push(`${u}: ${o?n:i}`)}}return r.length===0&&this.value.duplicated!==void 0?`${t.formatMessage({id:"duplicated_phash"})}: ${this.value.duplicated?n:i}`:r.length===0?t.formatMessage({id:"duplicated"}):r.join(", ")}getLabelValue(t){return t.formatMessage({id:"duplicated"})}toCriterionInput(){return{duplicated:this.value.duplicated,distance:this.value.distance,phash:this.value.phash,url:this.value.url,stash_id:this.value.stash_id,title:this.value.title}}setFromSavedCriterion(t){const r=t;r.value!==void 0?typeof r.value=="object"?this.value=r.value:typeof r.value=="string"&&(this.value={phash:r.value==="true"}):typeof r=="object"&&(this.value=r),r.modifier&&(this.modifier=r.modifier)}isValid(){return Eu.some(r=>this.value[r]!==void 0)||this.value.duplicated!==void 0}}const ES="path",wS=["filesize","file_count","date","resolution","performer_age",...Vi].map(Ie.createSortBy).concat([{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"}]),TS=[ge.Grid,ge.Wall],$S=K("performer_age"),xS=[te("title"),te("code","scene_code"),te("details"),te("photographer"),on("checksum","media_info.md5"),Xi,pn,Ji,Zi,dn,K("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Li,Cu,cm,st,St,K("tag_count"),qi,Bt,K("performer_count"),$S,ln,Gt,te("url"),Ze("date"),K("file_count"),be("created_at"),be("updated_at"),ut],FS=new Ie(ES,wS,TS,xS),Tu="groups",$u=[m.Includes,m.Excludes,m.IsNull,m.NotNull],xu=m.Includes;class ta extends le{constructor(t,r){super({messageID:t,type:r,modifierOptions:$u,defaultModifier:xu,inputType:Tu,makeCriterion:()=>new Tr(this)})}}const Sn=new ta("groups","groups");class Tr extends Ir{}const Fu=new ta("containing_groups","containing_groups"),Pu=new ta("sub_groups","sub_groups"),PS=new le({messageID:"groups",type:"movies",modifierOptions:$u,defaultModifier:xu,inputType:Tu,hidden:!0,makeCriterion:()=>new Tr(Sn)}),MS="name",NS=["name","random","date","duration","rating","tag_count","sub_group_description","sub_group_order"].map(Ie.createSortBy).concat([{messageID:"scene_count",value:"scenes_count"},{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"}]),kS=[ge.Grid],AS=[Gt,mm,te("url"),te("name"),te("director"),te("synopsis"),cn("duration"),St,Bt,Ze("date"),K("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Fu,Pu,K("containing_group_count"),K("sub_group_count"),st,K("tag_count"),K("scene_count"),be("created_at"),be("updated_at"),ut],LS=new Ie(MS,NS,kS,AS),Mu=new Map([["Female",Pe.Female],["Male",Pe.Male],["Transgender Male",Pe.TransgenderMale],["Transgender Female",Pe.TransgenderFemale],["Intersex",Pe.Intersex],["Non-Binary",Pe.NonBinary]]);Pe.Female,Pe.Male,Pe.TransgenderFemale,Pe.TransgenderMale,Pe.Intersex,Pe.NonBinary;const jS=(e,t)=>{if(!e)return;const r=Object.entries(Pe).find(i=>i[1]===e);return r?r[1]:Mu.get(e)},qS=Array.from(Mu.keys()),Nu=new le({messageID:"gender",type:"gender",options:qS,modifierOptions:[m.Includes,m.Excludes,m.IsNull,m.NotNull],defaultModifier:m.Includes,makeCriterion:()=>new VS});class VS extends Ni{constructor(t=[]){super(Nu,t)}toCriterionInput(){return{value_list:this.value.map(r=>jS(r)),modifier:this.modifier}}setFromSavedCriterion(t){typeof t.value=="string"&&(t={...t,value:[t.value]}),super.setFromSavedCriterion(t)}}const ku=new Map([["Uncut",Rr.Uncut],["Cut",Rr.Cut]]),BS=(e,t)=>{if(!e)return;const r=Object.entries(Rr).find(i=>i[1]===e);return r?r[1]:ku.get(e)},RS=Array.from(ku.keys()),Au=new le({messageID:"circumcised",type:"circumcised",modifierOptions:[m.Includes,m.Excludes,m.IsNull,m.NotNull],defaultModifier:m.Includes,options:RS,makeCriterion:()=>new GS});class GS extends Ni{constructor(){super(Au)}toCriterionInput(){return{value:this.value.map(r=>BS(r)),modifier:this.modifier}}}const $r=new le({messageID:"stash_id",type:"stash_id_endpoint",modifierOptions:[m.Equals,m.NotEquals,m.IsNull,m.NotNull],makeCriterion:()=>new US});class US extends me{constructor(){super($r,{endpoint:"",stashID:""})}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(t){typeof t!="object"?this._value={endpoint:"",stashID:t}:this._value=t}toCriterionInput(){return{endpoint:this.value.endpoint,stash_id:this.value.stashID,modifier:this.modifier}}getLabel(t){const r=me.getModifierLabel(t,this.modifier);let n="";return this.modifier!==m.IsNull&&this.modifier!==m.NotNull?n=this.getLabelValue(t):this.value.endpoint&&(n="("+this.value.endpoint+")"),t.formatMessage({id:"criterion_modifier.format_string"},{criterion:t.formatMessage({id:this.criterionOption.messageID}),modifierString:r,valueString:n})}getLabelValue(t){let r=this.value.stashID;return this.value.endpoint&&(r+=" ("+this.value.endpoint+")"),r}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}toQueryParams(){super.toQueryParams();let t;return(this.modifier===m.IsNull||this.modifier===m.NotNull)&&!this.value.endpoint?t={type:this.criterionOption.type,modifier:this.modifier}:t={type:this.criterionOption.type,value:this.value,modifier:this.modifier},t}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull||this.value.stashID.length>0}}var Lu={};const HS=[["AF","AFG","004","ISO 3166-2:AF"],["AL","ALB","008","ISO 3166-2:AL"],["DZ","DZA","012","ISO 3166-2:DZ"],["AS","ASM","016","ISO 3166-2:AS"],["AD","AND","020","ISO 3166-2:AD"],["AO","AGO","024","ISO 3166-2:AO"],["AI","AIA","660","ISO 3166-2:AI"],["AQ","ATA","010","ISO 3166-2:AQ"],["AG","ATG","028","ISO 3166-2:AG"],["AR","ARG","032","ISO 3166-2:AR"],["AM","ARM","051","ISO 3166-2:AM"],["AW","ABW","533","ISO 3166-2:AW"],["AU","AUS","036","ISO 3166-2:AU"],["AT","AUT","040","ISO 3166-2:AT"],["AZ","AZE","031","ISO 3166-2:AZ"],["BS","BHS","044","ISO 3166-2:BS"],["BH","BHR","048","ISO 3166-2:BH"],["BD","BGD","050","ISO 3166-2:BD"],["BB","BRB","052","ISO 3166-2:BB"],["BY","BLR","112","ISO 3166-2:BY"],["BE","BEL","056","ISO 3166-2:BE"],["BZ","BLZ","084","ISO 3166-2:BZ"],["BJ","BEN","204","ISO 3166-2:BJ"],["BM","BMU","060","ISO 3166-2:BM"],["BT","BTN","064","ISO 3166-2:BT"],["BO","BOL","068","ISO 3166-2:BO"],["BA","BIH","070","ISO 3166-2:BA"],["BW","BWA","072","ISO 3166-2:BW"],["BV","BVT","074","ISO 3166-2:BV"],["BR","BRA","076","ISO 3166-2:BR"],["IO","IOT","086","ISO 3166-2:IO"],["BN","BRN","096","ISO 3166-2:BN"],["BG","BGR","100","ISO 3166-2:BG"],["BF","BFA","854","ISO 3166-2:BF"],["BI","BDI","108","ISO 3166-2:BI"],["KH","KHM","116","ISO 3166-2:KH"],["CM","CMR","120","ISO 3166-2:CM"],["CA","CAN","124","ISO 3166-2:CA"],["CV","CPV","132","ISO 3166-2:CV"],["KY","CYM","136","ISO 3166-2:KY"],["CF","CAF","140","ISO 3166-2:CF"],["TD","TCD","148","ISO 3166-2:TD"],["CL","CHL","152","ISO 3166-2:CL"],["CN","CHN","156","ISO 3166-2:CN"],["CX","CXR","162","ISO 3166-2:CX"],["CC","CCK","166","ISO 3166-2:CC"],["CO","COL","170","ISO 3166-2:CO"],["KM","COM","174","ISO 3166-2:KM"],["CG","COG","178","ISO 3166-2:CG"],["CD","COD","180","ISO 3166-2:CD"],["CK","COK","184","ISO 3166-2:CK"],["CR","CRI","188","ISO 3166-2:CR"],["CI","CIV","384","ISO 3166-2:CI"],["HR","HRV","191","ISO 3166-2:HR"],["CU","CUB","192","ISO 3166-2:CU"],["CY","CYP","196","ISO 3166-2:CY"],["CZ","CZE","203","ISO 3166-2:CZ"],["DK","DNK","208","ISO 3166-2:DK"],["DJ","DJI","262","ISO 3166-2:DJ"],["DM","DMA","212","ISO 3166-2:DM"],["DO","DOM","214","ISO 3166-2:DO"],["EC","ECU","218","ISO 3166-2:EC"],["EG","EGY","818","ISO 3166-2:EG"],["SV","SLV","222","ISO 3166-2:SV"],["GQ","GNQ","226","ISO 3166-2:GQ"],["ER","ERI","232","ISO 3166-2:ER"],["EE","EST","233","ISO 3166-2:EE"],["ET","ETH","231","ISO 3166-2:ET"],["FK","FLK","238","ISO 3166-2:FK"],["FO","FRO","234","ISO 3166-2:FO"],["FJ","FJI","242","ISO 3166-2:FJ"],["FI","FIN","246","ISO 3166-2:FI"],["FR","FRA","250","ISO 3166-2:FR"],["GF","GUF","254","ISO 3166-2:GF"],["PF","PYF","258","ISO 3166-2:PF"],["TF","ATF","260","ISO 3166-2:TF"],["GA","GAB","266","ISO 3166-2:GA"],["GM","GMB","270","ISO 3166-2:GM"],["GE","GEO","268","ISO 3166-2:GE"],["DE","DEU","276","ISO 3166-2:DE"],["GH","GHA","288","ISO 3166-2:GH"],["GI","GIB","292","ISO 3166-2:GI"],["GR","GRC","300","ISO 3166-2:GR"],["GL","GRL","304","ISO 3166-2:GL"],["GD","GRD","308","ISO 3166-2:GD"],["GP","GLP","312","ISO 3166-2:GP"],["GU","GUM","316","ISO 3166-2:GU"],["GT","GTM","320","ISO 3166-2:GT"],["GN","GIN","324","ISO 3166-2:GN"],["GW","GNB","624","ISO 3166-2:GW"],["GY","GUY","328","ISO 3166-2:GY"],["HT","HTI","332","ISO 3166-2:HT"],["HM","HMD","334","ISO 3166-2:HM"],["VA","VAT","336","ISO 3166-2:VA"],["HN","HND","340","ISO 3166-2:HN"],["HK","HKG","344","ISO 3166-2:HK"],["HU","HUN","348","ISO 3166-2:HU"],["IS","ISL","352","ISO 3166-2:IS"],["IN","IND","356","ISO 3166-2:IN"],["ID","IDN","360","ISO 3166-2:ID"],["IR","IRN","364","ISO 3166-2:IR"],["IQ","IRQ","368","ISO 3166-2:IQ"],["IE","IRL","372","ISO 3166-2:IE"],["IL","ISR","376","ISO 3166-2:IL"],["IT","ITA","380","ISO 3166-2:IT"],["JM","JAM","388","ISO 3166-2:JM"],["JP","JPN","392","ISO 3166-2:JP"],["JO","JOR","400","ISO 3166-2:JO"],["KZ","KAZ","398","ISO 3166-2:KZ"],["KE","KEN","404","ISO 3166-2:KE"],["KI","KIR","296","ISO 3166-2:KI"],["KP","PRK","408","ISO 3166-2:KP"],["KR","KOR","410","ISO 3166-2:KR"],["KW","KWT","414","ISO 3166-2:KW"],["KG","KGZ","417","ISO 3166-2:KG"],["LA","LAO","418","ISO 3166-2:LA"],["LV","LVA","428","ISO 3166-2:LV"],["LB","LBN","422","ISO 3166-2:LB"],["LS","LSO","426","ISO 3166-2:LS"],["LR","LBR","430","ISO 3166-2:LR"],["LY","LBY","434","ISO 3166-2:LY"],["LI","LIE","438","ISO 3166-2:LI"],["LT","LTU","440","ISO 3166-2:LT"],["LU","LUX","442","ISO 3166-2:LU"],["MO","MAC","446","ISO 3166-2:MO"],["MG","MDG","450","ISO 3166-2:MG"],["MW","MWI","454","ISO 3166-2:MW"],["MY","MYS","458","ISO 3166-2:MY"],["MV","MDV","462","ISO 3166-2:MV"],["ML","MLI","466","ISO 3166-2:ML"],["MT","MLT","470","ISO 3166-2:MT"],["MH","MHL","584","ISO 3166-2:MH"],["MQ","MTQ","474","ISO 3166-2:MQ"],["MR","MRT","478","ISO 3166-2:MR"],["MU","MUS","480","ISO 3166-2:MU"],["YT","MYT","175","ISO 3166-2:YT"],["MX","MEX","484","ISO 3166-2:MX"],["FM","FSM","583","ISO 3166-2:FM"],["MD","MDA","498","ISO 3166-2:MD"],["MC","MCO","492","ISO 3166-2:MC"],["MN","MNG","496","ISO 3166-2:MN"],["MS","MSR","500","ISO 3166-2:MS"],["MA","MAR","504","ISO 3166-2:MA"],["MZ","MOZ","508","ISO 3166-2:MZ"],["MM","MMR","104","ISO 3166-2:MM"],["NA","NAM","516","ISO 3166-2:NA"],["NR","NRU","520","ISO 3166-2:NR"],["NP","NPL","524","ISO 3166-2:NP"],["NL","NLD","528","ISO 3166-2:NL"],["NC","NCL","540","ISO 3166-2:NC"],["NZ","NZL","554","ISO 3166-2:NZ"],["NI","NIC","558","ISO 3166-2:NI"],["NE","NER","562","ISO 3166-2:NE"],["NG","NGA","566","ISO 3166-2:NG"],["NU","NIU","570","ISO 3166-2:NU"],["NF","NFK","574","ISO 3166-2:NF"],["MP","MNP","580","ISO 3166-2:MP"],["MK","MKD","807","ISO 3166-2:MK"],["NO","NOR","578","ISO 3166-2:NO"],["OM","OMN","512","ISO 3166-2:OM"],["PK","PAK","586","ISO 3166-2:PK"],["PW","PLW","585","ISO 3166-2:PW"],["PS","PSE","275","ISO 3166-2:PS"],["PA","PAN","591","ISO 3166-2:PA"],["PG","PNG","598","ISO 3166-2:PG"],["PY","PRY","600","ISO 3166-2:PY"],["PE","PER","604","ISO 3166-2:PE"],["PH","PHL","608","ISO 3166-2:PH"],["PN","PCN","612","ISO 3166-2:PN"],["PL","POL","616","ISO 3166-2:PL"],["PT","PRT","620","ISO 3166-2:PT"],["PR","PRI","630","ISO 3166-2:PR"],["QA","QAT","634","ISO 3166-2:QA"],["RE","REU","638","ISO 3166-2:RE"],["RO","ROU","642","ISO 3166-2:RO"],["RU","RUS","643","ISO 3166-2:RU"],["RW","RWA","646","ISO 3166-2:RW"],["SH","SHN","654","ISO 3166-2:SH"],["KN","KNA","659","ISO 3166-2:KN"],["LC","LCA","662","ISO 3166-2:LC"],["PM","SPM","666","ISO 3166-2:PM"],["VC","VCT","670","ISO 3166-2:VC"],["WS","WSM","882","ISO 3166-2:WS"],["SM","SMR","674","ISO 3166-2:SM"],["ST","STP","678","ISO 3166-2:ST"],["SA","SAU","682","ISO 3166-2:SA"],["SN","SEN","686","ISO 3166-2:SN"],["SC","SYC","690","ISO 3166-2:SC"],["SL","SLE","694","ISO 3166-2:SL"],["SG","SGP","702","ISO 3166-2:SG"],["SK","SVK","703","ISO 3166-2:SK"],["SI","SVN","705","ISO 3166-2:SI"],["SB","SLB","090","ISO 3166-2:SB"],["SO","SOM","706","ISO 3166-2:SO"],["ZA","ZAF","710","ISO 3166-2:ZA"],["GS","SGS","239","ISO 3166-2:GS"],["ES","ESP","724","ISO 3166-2:ES"],["LK","LKA","144","ISO 3166-2:LK"],["SD","SDN","729","ISO 3166-2:SD"],["SR","SUR","740","ISO 3166-2:SR"],["SJ","SJM","744","ISO 3166-2:SJ"],["SZ","SWZ","748","ISO 3166-2:SZ"],["SE","SWE","752","ISO 3166-2:SE"],["CH","CHE","756","ISO 3166-2:CH"],["SY","SYR","760","ISO 3166-2:SY"],["TW","TWN","158","ISO 3166-2:TW"],["TJ","TJK","762","ISO 3166-2:TJ"],["TZ","TZA","834","ISO 3166-2:TZ"],["TH","THA","764","ISO 3166-2:TH"],["TL","TLS","626","ISO 3166-2:TL"],["TG","TGO","768","ISO 3166-2:TG"],["TK","TKL","772","ISO 3166-2:TK"],["TO","TON","776","ISO 3166-2:TO"],["TT","TTO","780","ISO 3166-2:TT"],["TN","TUN","788","ISO 3166-2:TN"],["TR","TUR","792","ISO 3166-2:TR"],["TM","TKM","795","ISO 3166-2:TM"],["TC","TCA","796","ISO 3166-2:TC"],["TV","TUV","798","ISO 3166-2:TV"],["UG","UGA","800","ISO 3166-2:UG"],["UA","UKR","804","ISO 3166-2:UA"],["AE","ARE","784","ISO 3166-2:AE"],["GB","GBR","826","ISO 3166-2:GB"],["US","USA","840","ISO 3166-2:US"],["UM","UMI","581","ISO 3166-2:UM"],["UY","URY","858","ISO 3166-2:UY"],["UZ","UZB","860","ISO 3166-2:UZ"],["VU","VUT","548","ISO 3166-2:VU"],["VE","VEN","862","ISO 3166-2:VE"],["VN","VNM","704","ISO 3166-2:VN"],["VG","VGB","092","ISO 3166-2:VG"],["VI","VIR","850","ISO 3166-2:VI"],["WF","WLF","876","ISO 3166-2:WF"],["EH","ESH","732","ISO 3166-2:EH"],["YE","YEM","887","ISO 3166-2:YE"],["ZM","ZMB","894","ISO 3166-2:ZM"],["ZW","ZWE","716","ISO 3166-2:ZW"],["AX","ALA","248","ISO 3166-2:AX"],["BQ","BES","535","ISO 3166-2:BQ"],["CW","CUW","531","ISO 3166-2:CW"],["GG","GGY","831","ISO 3166-2:GG"],["IM","IMN","833","ISO 3166-2:IM"],["JE","JEY","832","ISO 3166-2:JE"],["ME","MNE","499","ISO 3166-2:ME"],["BL","BLM","652","ISO 3166-2:BL"],["MF","MAF","663","ISO 3166-2:MF"],["RS","SRB","688","ISO 3166-2:RS"],["SX","SXM","534","ISO 3166-2:SX"],["SS","SSD","728","ISO 3166-2:SS"],["XK","XKK","983","ISO 3166-2:XK"]],zS=["br","cy","dv","sw","eu","af","am","ha","ku","ml","mt","no","ps","sd","so","sq","ta","tg","tt","ug","ur","vi","ar","az","be","bg","bn","bs","ca","cs","da","de","el","en","es","et","fa","fi","fr","ga","gl","he","hi","hr","hu","hy","id","is","it","ja","ka","kk","km","ko","ky","lt","lv","mk","mn","mr","ms","nb","nl","nn","pl","pt","ro","ru","sk","sl","sr","sv","th","tk","tr","uk","uz","zh"];var yn={};yn.remove=WS;for(var bn=[{base:" ",chars:" "},{base:"0",chars:"߀"},{base:"A",chars:"ⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",chars:"Ꜳ"},{base:"AE",chars:"ÆǼǢ"},{base:"AO",chars:"Ꜵ"},{base:"AU",chars:"Ꜷ"},{base:"AV",chars:"ꜸꜺ"},{base:"AY",chars:"Ꜽ"},{base:"B",chars:"ⒷＢḂḄḆɃƁ"},{base:"C",chars:"ⒸＣꜾḈĆCĈĊČÇƇȻ"},{base:"D",chars:"ⒹＤḊĎḌḐḒḎĐƊƉᴅꝹ"},{base:"Dh",chars:"Ð"},{base:"DZ",chars:"ǱǄ"},{base:"Dz",chars:"ǲǅ"},{base:"E",chars:"ɛⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎᴇ"},{base:"F",chars:"ꝼⒻＦḞƑꝻ"},{base:"G",chars:"ⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾɢ"},{base:"H",chars:"ⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",chars:"ⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",chars:"ⒿＪĴɈȷ"},{base:"K",chars:"ⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",chars:"ⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",chars:"Ǉ"},{base:"Lj",chars:"ǈ"},{base:"M",chars:"ⓂＭḾṀṂⱮƜϻ"},{base:"N",chars:"ꞤȠⓃＮǸŃÑṄŇṆŅṊṈƝꞐᴎ"},{base:"NJ",chars:"Ǌ"},{base:"Nj",chars:"ǋ"},{base:"O",chars:"ⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OE",chars:"Œ"},{base:"OI",chars:"Ƣ"},{base:"OO",chars:"Ꝏ"},{base:"OU",chars:"Ȣ"},{base:"P",chars:"ⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",chars:"ⓆＱꝖꝘɊ"},{base:"R",chars:"ⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",chars:"ⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",chars:"ⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",chars:"Þ"},{base:"TZ",chars:"Ꜩ"},{base:"U",chars:"ⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",chars:"ⓋＶṼṾƲꝞɅ"},{base:"VY",chars:"Ꝡ"},{base:"W",chars:"ⓌＷẀẂŴẆẄẈⱲ"},{base:"X",chars:"ⓍＸẊẌ"},{base:"Y",chars:"ⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",chars:"ⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",chars:"ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",chars:"ꜳ"},{base:"ae",chars:"æǽǣ"},{base:"ao",chars:"ꜵ"},{base:"au",chars:"ꜷ"},{base:"av",chars:"ꜹꜻ"},{base:"ay",chars:"ꜽ"},{base:"b",chars:"ⓑｂḃḅḇƀƃɓƂ"},{base:"c",chars:"ｃⓒćĉċčçḉƈȼꜿↄ"},{base:"d",chars:"ⓓｄḋďḍḑḓḏđƌɖɗƋᏧԁꞪ"},{base:"dh",chars:"ð"},{base:"dz",chars:"ǳǆ"},{base:"e",chars:"ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇǝ"},{base:"f",chars:"ⓕｆḟƒ"},{base:"ff",chars:"ﬀ"},{base:"fi",chars:"ﬁ"},{base:"fl",chars:"ﬂ"},{base:"ffi",chars:"ﬃ"},{base:"ffl",chars:"ﬄ"},{base:"g",chars:"ⓖｇǵĝḡğġǧģǥɠꞡꝿᵹ"},{base:"h",chars:"ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",chars:"ƕ"},{base:"i",chars:"ⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",chars:"ⓙｊĵǰɉ"},{base:"k",chars:"ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",chars:"ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇɭ"},{base:"lj",chars:"ǉ"},{base:"m",chars:"ⓜｍḿṁṃɱɯ"},{base:"n",chars:"ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",chars:"ǌ"},{base:"o",chars:"ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿꝋꝍɵɔᴑ"},{base:"oe",chars:"œ"},{base:"oi",chars:"ƣ"},{base:"oo",chars:"ꝏ"},{base:"ou",chars:"ȣ"},{base:"p",chars:"ⓟｐṕṗƥᵽꝑꝓꝕρ"},{base:"q",chars:"ⓠｑɋꝗꝙ"},{base:"r",chars:"ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",chars:"ⓢｓśṥŝṡšṧṣṩșşȿꞩꞅẛʂ"},{base:"ss",chars:"ß"},{base:"t",chars:"ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",chars:"þ"},{base:"tz",chars:"ꜩ"},{base:"u",chars:"ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",chars:"ⓥｖṽṿʋꝟʌ"},{base:"vy",chars:"ꝡ"},{base:"w",chars:"ⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",chars:"ⓧｘẋẍ"},{base:"y",chars:"ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",chars:"ⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],ra={},In=0;In<bn.length;In+=1)for(var ju=bn[In].chars,na=0;na<ju.length;na+=1)ra[ju[na]]=bn[In].base;function WS(e){return e.replace(/[^\u0000-\u007e]/g,function(t){return ra[t]||t})}yn.replacementList=bn,yn.diacriticsMap=ra,function(e){const t=HS,r=zS,n=yn.remove,i={},a={},o={},u={},s={};t.forEach(function(v){const y=v;a[y[0]]=y[1],o[y[1]]=y[0],u[y[2]]=y[0],s[y[0]]=y[2]});function c(v){return("000"+(v||"")).slice(-3)}function l(v,y){return Object.prototype.hasOwnProperty.call(v,y)}function f(v,y){return Object.keys(v).reduce(function(p,E){const T=v[E];return p[E]=y(T,E),p},{})}function S(v,y){switch(v){case"official":return Array.isArray(y)?y[0]:y;case"all":return typeof y=="string"?[y]:y;case"alias":return Array.isArray(y)?y[1]||y[0]:y;default:throw new TypeError("LocaleNameType must be one of these: all, official, alias!")}}e.registerLocale=function(v){if(!v.locale)throw new TypeError("Missing localeData.locale");if(!v.countries)throw new TypeError("Missing localeData.countries");i[v.locale]=v.countries};function g(v){return o[v]}e.alpha3ToAlpha2=g;function D(v){return a[v]}e.alpha2ToAlpha3=D;function I(v){return s[g(v)]}e.alpha3ToNumeric=I;function _(v){return s[v]}e.alpha2ToNumeric=_;function C(v){const y=c(v);return D(u[y])}e.numericToAlpha3=C;function h(v){const y=c(v);return u[y]}e.numericToAlpha2=h;function O(v){if(typeof v=="string"){if(/^[0-9]*$/.test(v))return C(v);if(v.length===2)return D(v.toUpperCase());if(v.length===3)return v.toUpperCase()}if(typeof v=="number")return C(v)}e.toAlpha3=O;function w(v){if(typeof v=="string"){if(/^[0-9]*$/.test(v))return h(v);if(v.length===2)return v.toUpperCase();if(v.length===3)return g(v.toUpperCase())}if(typeof v=="number")return h(v)}e.toAlpha2=w,e.getName=function(v,y,p={}){"select"in p||(p.select="official");try{const T=i[y.toLowerCase()][w(v)];return S(p.select,T)}catch{return}},e.getNames=function(v,y={}){"select"in y||(y.select="official");const p=i[v.toLowerCase()];return p===void 0?{}:f(p,function(E){return S(y.select,E)})},e.getAlpha2Code=function(v,y){const p=T=>T.toLowerCase(),E=(T,x)=>p(T)===p(x);try{const T=i[y.toLowerCase()];for(const x in T)if(l(T,x)){if(typeof T[x]=="string"&&E(T[x],v))return x;if(Array.isArray(T[x])){for(const j of T[x])if(E(j,v))return x}}return}catch{return}},e.getSimpleAlpha2Code=function(v,y){const p=T=>n(T.toLowerCase()),E=(T,x)=>p(T)===p(x);try{const T=i[y.toLowerCase()];for(const x in T)if(l(T,x)){if(typeof T[x]=="string"&&E(T[x],v))return x;if(Array.isArray(T[x])){for(const j of T[x])if(E(j,v))return x}}return}catch{return}},e.getAlpha2Codes=function(){return a},e.getAlpha3Code=function(v,y){const p=e.getAlpha2Code(v,y);if(p)return e.toAlpha3(p)},e.getSimpleAlpha3Code=function(v,y){const p=e.getSimpleAlpha2Code(v,y);if(p)return e.toAlpha3(p)},e.getAlpha3Codes=function(){return o},e.getNumericCodes=function(){return u},e.langs=function(){return Object.keys(i)},e.getSupportedLanguages=function(){return r},e.isValid=function(v){if(!v)return!1;const y=v.toString().toUpperCase();return l(o,y)||l(a,y)||l(u,y)}}(Lu);const qu=Ba(Lu),YS=e=>e==="zh-CN"?"zh":e==="zh-TW"?"tw":e.slice(0,2),KS=(e,t="en")=>{if(!e)return;const r=qu.getName(e,YS(t));if(r)return r;if(t!=="en")return qu.getName(e,"en")},Vu=new an({messageID:"country",type:"country",makeCriterion:()=>new Bu});class Bu extends He{constructor(){super(Vu)}getLabelValue(t){return this.modifier===m.Equals||this.modifier===m.NotEquals?KS(this.value,t.locale)??this.value:super.getLabelValue(t)}}const QS="name",JS=["name","height","birthdate","tag_count","random","rating","penis_length","play_count","last_played_at","latest_scene","career_start","career_end","weight","measurements","scenes_duration","scenes_size"].map(Ie.createSortBy).concat([{messageID:"scene_count",value:"scenes_count"},{messageID:"image_count",value:"images_count"},{messageID:"gallery_count",value:"galleries_count"},{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"},{messageID:"last_o_at",value:"last_o_at",sfwMessageID:"last_o_at_sfw"}]),ZS=[ge.Grid,ge.List,ge.Tagger],XS=["birth_year","death_year","age","weight","penis_length"],ey=["name","disambiguation","details","ethnicity","hair_color","eye_color","measurements","fake_tits","tattoos","piercings","aliases"],ty=[vs,Nu,Au,lm,st,Sn,Gt,$r,te("url"),St,K("tag_count"),K("scene_count"),K("image_count"),K("gallery_count"),K("play_count"),K("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),sn("ignore_auto_tag"),Vu,gs("height_cm","height"),...XS.map(e=>gs(e)),...ey.map(e=>te(e)),Ze("birthdate"),Ze("death_date"),Ze("career_start"),Ze("career_end"),be("created_at"),be("updated_at"),ut],ry=new Ie(QS,JS,ZS,ty),ny="title",iy=["duration","title","seconds","scene_id","random","scenes_updated_at"].map(Ie.createSortBy),ay=[ge.Grid,ge.Wall],oy=[st,ws,Fm,Bt,Qp("duration"),be("created_at"),be("updated_at"),Ze("scene_date"),be("scene_created_at"),be("scene_updated_at")],sy=new Ie(ny,iy,ay,oy),Ru=new ms("hasMarkers","has_markers",()=>new uy);class uy extends ki{constructor(){super(Ru)}}const Gu=new gt("interactive","interactive",()=>new cy);class cy extends ht{constructor(){super(Gu)}}const ia=new Map([["de","Deutsche"],["en","English"],["es","Español"],["fr","Français"],["it","Italiano"],["ja","日本"],["ko","한국인"],["nl","Holandés"],["pt","Português"],["ru","Русский"],["00","Unknown"]]),ly=e=>{if(e)return Array.from(ia.keys()).find(t=>ia.get(t)===e)},dy=Array.from(ia.values()),Uu=new le({messageID:"captions",type:"captions",modifierOptions:[m.Includes,m.Excludes,m.IsNull,m.NotNull],defaultModifier:m.Includes,options:dy,makeCriterion:()=>new fy});class fy extends He{constructor(){super(Uu)}toCriterionInput(){return{value:ly(this.value)??"",modifier:this.modifier}}}const py="date",my=["organized","date","file_count","filesize","duration","framerate","resolution","bitrate","last_played_at","resume_time","play_duration","play_count","interactive","interactive_speed","perceptual_similarity","performer_age","studio",...Vi].map(Ie.createSortBy).concat([{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"},{messageID:"last_o_at",value:"last_o_at",sfwMessageID:"last_o_at_sfw"},{messageID:"group_scene_number",value:"group_scene_number"},{messageID:"scene_code",value:"code"}]),gy=[ge.Grid,ge.List,ge.Wall,ge.Tagger],hy=K("performer_age"),vy=cn("duration"),Sy=[te("title"),te("code","scene_code"),pn,Ji,te("details"),te("director"),on("oshash","media_info.oshash"),te("checksum","media_info.md5"),Xi,wu,dn,St,K("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Li,Cu,K("framerate"),K("bitrate"),te("video_codec"),te("audio_codec"),vy,cn("resume_time"),cn("play_duration"),K("play_count"),be("last_played_at"),Ru,um,st,K("tag_count"),qi,Bt,K("performer_count"),hy,ln,Gt,Sn,PS,Zi,te("url"),$r,K("stash_id_count"),Gu,Uu,K("interactive_speed"),K("file_count"),Ze("date"),be("created_at"),be("updated_at"),ut],yy=new Ie(py,my,gy,Sy),by="name",Iy=["name","tag_count","random","rating","scenes_duration","scenes_size","latest_scene"].map(Ie.createSortBy).concat([{messageID:"gallery_count",value:"galleries_count"},{messageID:"image_count",value:"images_count"},{messageID:"scene_count",value:"scenes_count"},{messageID:"o_count",value:"o_counter"},{messageID:"o_count_all",value:"o_counter_all"},{messageID:"performer_count",value:"performer_count"},{messageID:"performer_count_all",value:"performer_count_all"},{messageID:"subsidiary_studio_count",value:"child_count"},{messageID:"scene_marker_count",value:"scene_markers_count"}]),_y=[ge.Grid,ge.List,ge.Tagger],Oy=[ys,on("name"),te("details"),xs,pm,st,St,sn("ignore_auto_tag"),sn("organized"),K("tag_count"),K("scene_count"),K("image_count"),K("gallery_count"),te("url"),$r,te("aliases"),K("child_count","subsidiary_studio_count"),be("created_at"),be("updated_at"),ut],Cy=new Ie(by,Iy,_y,Oy),Dy="name",Ey=["name","random","scenes_duration","scenes_size"].map(Ie.createSortBy).concat([{messageID:"gallery_count",value:"galleries_count"},{messageID:"image_count",value:"images_count"},{messageID:"performer_count",value:"performers_count"},{messageID:"scene_count",value:"scenes_count"},{messageID:"group_count",value:"groups_count"},{messageID:"marker_count",value:"scene_markers_count"},{messageID:"studio_count",value:"studios_count"}]),wy=[ge.Grid,ge.List,ge.Tagger],Ty=[Ss,on("name"),te("sort_name"),fm,te("aliases"),te("description"),sn("ignore_auto_tag"),$r,K("scene_count"),K("image_count"),K("gallery_count"),K("performer_count"),K("studio_count"),K("group_count"),K("marker_count"),Ms,new un("parent_tag_count","parent_count"),Ns,new un("sub_tag_count","child_count"),be("created_at"),be("updated_at"),ut],$y=new Ie(Dy,Ey,wy,Ty);function Hu(e){switch(e){case Y.Scenes:return yy;case Y.Performers:return ry;case Y.Studios:return Cy;case Y.Galleries:return SS;case Y.SceneMarkers:return sy;case Y.Movies:case Y.Groups:return LS;case Y.Tags:return $y;case Y.Images:return FS}}const tt={sortDirection:Le.Asc,displayMode:ge.Grid,currentPage:1,itemsPerPage:40};class re{constructor(t,r,n){Z(this,"mode");Z(this,"options");Z(this,"config");Z(this,"searchTerm","");Z(this,"currentPage",tt.currentPage);Z(this,"itemsPerPage",tt.itemsPerPage);Z(this,"sortDirection",tt.sortDirection);Z(this,"sortBy");Z(this,"displayMode",tt.displayMode);Z(this,"zoomIndex",1);Z(this,"criteria",[]);Z(this,"randomSeed",-1);Z(this,"defaultZoomIndex",1);this.mode=t,this.config=r,this.options=Hu(t);const{defaultSortBy:i,displayModeOptions:a}=this.options;n!=null&&n.defaultSortBy?(this.sortBy=n.defaultSortBy,n.defaultSortDir&&(this.sortDirection=n.defaultSortDir)):(this.sortBy=i,this.sortBy==="date"&&(this.sortDirection=Le.Desc)),this.displayMode=a[0],(n==null?void 0:n.defaultZoomIndex)!==void 0&&(this.defaultZoomIndex=n.defaultZoomIndex,this.zoomIndex=n.defaultZoomIndex)}clone(){const t=Object.assign(new re(this.mode,this.config),this);return t.criteria=this.criteria.map(r=>r.clone()),t}empty(){return new re(this.mode,this.config,{defaultZoomIndex:this.defaultZoomIndex})}metadataInfo(){const t=this.clone();return t.sortBy=void 0,t.randomSeed=-1,t.currentPage=1,t.sortDirection=tt.sortDirection,t.itemsPerPage=0,t.zoomIndex=1,t.displayMode=tt.displayMode,t}count(){return this.criteria.length}configureFromDecodedParams(t){if(t.perPage!==void 0&&(this.itemsPerPage=t.perPage),t.sortby!==void 0){this.sortBy=t.sortby;const r=this.sortBy.match(/^random_(\d+)$/);r&&(this.sortBy="random",this.randomSeed=Number.parseInt(r[1],10))}if(t.sortdir!==void 0?this.sortDirection=t.sortdir==="desc"?Le.Desc:Le.Asc:this.sortDirection=t.sortby==="date"?Le.Desc:Le.Asc,t.disp!==void 0&&(this.displayMode=t.disp),t.q!==void 0&&(this.searchTerm=t.q),this.currentPage=t.p??1,t.z!==void 0&&(this.zoomIndex=t.z),this.criteria=[],t.c!==void 0)for(const r of t.c)try{const{type:n,...i}=JSON.parse(r),a=this.makeCriterion(n);a.fromDecodedParams(i),this.criteria.push(a)}catch(n){console.error("Failed to parse encoded criterion:",n)}}static decodeParams(t){const r={};if(t.perPage&&(r.perPage=Number.parseInt(t.perPage,10)),t.sortby&&(r.sortby=t.sortby),t.sortdir&&(r.sortdir=t.sortdir),t.disp&&(r.disp=Number.parseInt(t.disp,10)),t.q&&(r.q=t.q),t.p&&(r.p=Number.parseInt(t.p,10)),t.z){const n=Number.parseInt(t.z,10);n>=0&&(r.z=n)}return t.c&&t.c.length!==0&&(r.c=t.c.map(n=>re.translateJSON(n,!0))),r}static translateJSON(t,r){let n=!1,i=!1;return[...t].map(a=>{if(i)return i=!1,a;switch(a){case"\\":n&&(i=!0);break;case'"':n=!n;break;case"(":if(r&&!n)return"{";break;case")":if(r&&!n)return"}";break;case"{":if(!r&&!n)return"(";break;case"}":if(!r&&!n)return")";break}return a}).join("")}configureFromQueryString(t){const r=new URLSearchParams(t),n={perPage:r.get("perPage"),sortby:r.get("sortby"),sortdir:r.get("sortdir"),disp:r.get("disp"),q:r.get("q"),p:r.get("p"),z:r.get("z"),c:r.getAll("c")},i=re.decodeParams(n);this.configureFromDecodedParams(i)}configureFromSavedFilter(t){var o;const{find_filter:r,object_filter:n,ui_options:i}=t;this.itemsPerPage=(r==null?void 0:r.per_page)??this.itemsPerPage,this.sortBy=(r==null?void 0:r.sort)??this.sortBy;const a=(o=this.sortBy)==null?void 0:o.match(/^random_(\d+)$/);if(a&&(this.sortBy="random",this.randomSeed=Number.parseInt(a[1],10)),this.sortDirection=(r==null?void 0:r.direction)??this.sortDirection,this.searchTerm=(r==null?void 0:r.q)??this.searchTerm,this.displayMode=(i==null?void 0:i.display_mode)??this.displayMode,this.zoomIndex=(i==null?void 0:i.zoom_index)??this.zoomIndex,this.currentPage=1,this.criteria=[],n)for(const[u,s]of Object.entries(n)){const c=this.makeCriterion(u);c.setFromSavedCriterion(s),this.criteria.push(c)}}setRandomSeed(){this.sortBy==="random"?this.randomSeed===-1&&(this.randomSeed=Math.floor(Math.random()*10**8)):this.randomSeed=-1}getSortBy(){return this.setRandomSeed(),this.sortBy==="random"?`random_${this.randomSeed.toString()}`:this.sortBy}getEncodedParams(){const t=this.criteria.map(r=>{const n=r.toQueryParams();let i=re.translateJSON(JSON.stringify(n),!1);return i=encodeURI(i),i=i.replaceAll("?",encodeURIComponent("?")),i=i.replaceAll("#",encodeURIComponent("#")),i=i.replaceAll("&",encodeURIComponent("&")),i=i.replaceAll(";",encodeURIComponent(";")),i=i.replaceAll("=",encodeURIComponent("=")),i=i.replaceAll("+",encodeURIComponent("+")),i});return{perPage:this.itemsPerPage!==tt.itemsPerPage?String(this.itemsPerPage):void 0,sortby:this.getSortBy(),sortdir:this.sortBy==="date"?this.sortDirection===Le.Asc?"asc":void 0:this.sortDirection===Le.Desc?"desc":void 0,disp:this.displayMode!==tt.displayMode?String(this.displayMode):void 0,q:this.searchTerm?encodeURIComponent(this.searchTerm):void 0,p:this.currentPage!==tt.currentPage?String(this.currentPage):void 0,z:this.zoomIndex!==this.defaultZoomIndex?String(this.zoomIndex):void 0,c:t}}makeQueryParameters(){const t=[],r=this.getEncodedParams();if(r.q&&t.push(`q=${r.q}`),r.c)for(const n of r.c)t.push(`c=${n}`);return r.sortby&&t.push(`sortby=${r.sortby}`),r.sortdir&&t.push(`sortdir=${r.sortdir}`),r.perPage&&t.push(`perPage=${r.perPage}`),r.disp&&t.push(`disp=${r.disp}`),r.z&&t.push(`z=${r.z}`),r.p&&t.push(`p=${r.p}`),t.join("&")}makeCriterion(t){const{criterionOptions:r}=Hu(this.mode),n=r.find(i=>i.type===t);return n?n.makeCriterion(this.config):new tm(t).makeCriterion(this.config)}makeFindFilter(){return{q:this.searchTerm,page:this.currentPage,per_page:this.itemsPerPage,sort:this.getSortBy(),direction:this.sortDirection}}makeFilter(){const t={};for(const r of this.criteria)r.applyToCriterionInput(t);return t}makeSavedFilter(){const t={};for(const r of this.criteria)r.applyToSavedCriterion(t);return t}makeSavedUIOptions(){return{display_mode:this.displayMode,zoom_index:this.zoomIndex}}criteriaFor(t){return this.criteria.filter(r=>r.criterionOption.type===t)}replaceCriteria(t,r){const n=[...this.criteria.filter(i=>i.criterionOption.type!==t),...r];return this.setCriteria(n)}clearCriteria(t=!1){const r=this.clone();return t&&(r.searchTerm=""),r.criteria=[],r.currentPage=1,r}clearSearchTerm(){const t=this.clone();return t.searchTerm="",t.currentPage=1,t}setCriteria(t){const r=this.clone();return r.criteria=t,r.currentPage=1,r}removeCriterion(t){const r=this.clone(),n=r.criteria.find(a=>a.criterionOption.type===t);if(!n)return r;const i=r.criteria.filter(a=>a.getId()!==n.getId());return r.criteria=i,r.currentPage=1,r}removeCustomFieldCriterion(t,r){const n=this.clone(),i=n.criteria.find(a=>a.criterionOption.type===t);if(!i)return n;if(i instanceof Su){const a=i.value.filter((o,u)=>u!==r);i.value=a}return n}setPageSize(t){const r=this.clone();return r.itemsPerPage=t,r.currentPage=1,r}setSortBy(t){const r=this.clone();return r.sortBy=t,r.currentPage=1,r}toggleSortDirection(){const t=this.clone();return t.sortDirection===Le.Asc?t.sortDirection=Le.Desc:t.sortDirection=Le.Asc,t.currentPage=1,t}reshuffleRandomSort(){const t=this.clone();return t.currentPage=1,t.randomSeed=-1,t}changePage(t){const r=this.clone();return r.currentPage=t,r}setZoom(t){const r=this.clone();return r.zoomIndex=t,r}setDisplayMode(t){const r=this.clone();return r.displayMode=t,r}}function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},R.apply(null,arguments)}function Ot(e){"@babel/helpers - typeof";return Ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ot(e)}function xy(e,t){if(Ot(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ot(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function zu(e){var t=xy(e,"string");return Ot(t)=="symbol"?t:t+""}function Jt(e,t,r){return(t=zu(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Wu(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Wu(Object(r),!0).forEach(function(n){Jt(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Wu(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Fy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Yu(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,zu(n.key),n)}}function Py(e,t,r){return t&&Yu(e.prototype,t),r&&Yu(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function aa(e,t){return aa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},aa(e,t)}function My(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&aa(e,t)}function _n(e){return _n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_n(e)}function Ku(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ku=function(){return!!e})()}function Ny(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ky(e,t){if(t&&(Ot(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ny(e)}function Ay(e){var t=Ku();return function(){var r,n=_n(e);if(t){var i=_n(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return ky(this,r)}}function oa(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function Ly(e){if(Array.isArray(e))return oa(e)}function jy(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qu(e,t){if(e){if(typeof e=="string")return oa(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?oa(e,t):void 0}}function qy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zt(e){return Ly(e)||jy(e)||Qu(e)||qy()}function Vy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function By(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Ry=function(){function e(r){var n=this;this._insertTag=function(i){var a;n.tags.length===0?n.insertionPoint?a=n.insertionPoint.nextSibling:n.prepend?a=n.container.firstChild:a=n.before:a=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(i,a),n.tags.push(i)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(By(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=Vy(i);try{a.insertRule(n,a.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){var i;return(i=n.parentNode)==null?void 0:i.removeChild(n)}),this.tags=[],this.ctr=0},e}(),Te="-ms-",On="-moz-",ie="-webkit-",Ju="comm",sa="rule",ua="decl",Gy="@import",Zu="@keyframes",Uy="@layer",Hy=Math.abs,Cn=String.fromCharCode,zy=Object.assign;function Wy(e,t){return we(e,0)^45?(((t<<2^we(e,0))<<2^we(e,1))<<2^we(e,2))<<2^we(e,3):0}function Xu(e){return e.trim()}function Yy(e,t){return(e=t.exec(e))?e[0]:e}function ae(e,t,r){return e.replace(t,r)}function ca(e,t){return e.indexOf(t)}function we(e,t){return e.charCodeAt(t)|0}function xr(e,t,r){return e.slice(t,r)}function Ye(e){return e.length}function la(e){return e.length}function Dn(e,t){return t.push(e),e}function Ky(e,t){return e.map(t).join("")}var En=1,Xt=1,ec=0,ke=0,Se=0,er="";function wn(e,t,r,n,i,a,o){return{value:e,root:t,parent:r,type:n,props:i,children:a,line:En,column:Xt,length:o,return:""}}function Fr(e,t){return zy(wn("",null,null,"",null,null,0),e,{length:-e.length},t)}function Qy(){return Se}function Jy(){return Se=ke>0?we(er,--ke):0,Xt--,Se===10&&(Xt=1,En--),Se}function qe(){return Se=ke<ec?we(er,ke++):0,Xt++,Se===10&&(Xt=1,En++),Se}function Ke(){return we(er,ke)}function Tn(){return ke}function Pr(e,t){return xr(er,e,t)}function Mr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tc(e){return En=Xt=1,ec=Ye(er=e),ke=0,[]}function rc(e){return er="",e}function $n(e){return Xu(Pr(ke-1,da(e===91?e+2:e===40?e+1:e)))}function Zy(e){for(;(Se=Ke())&&Se<33;)qe();return Mr(e)>2||Mr(Se)>3?"":" "}function Xy(e,t){for(;--t&&qe()&&!(Se<48||Se>102||Se>57&&Se<65||Se>70&&Se<97););return Pr(e,Tn()+(t<6&&Ke()==32&&qe()==32))}function da(e){for(;qe();)switch(Se){case e:return ke;case 34:case 39:e!==34&&e!==39&&da(Se);break;case 40:e===41&&da(e);break;case 92:qe();break}return ke}function eb(e,t){for(;qe()&&e+Se!==57;)if(e+Se===84&&Ke()===47)break;return"/*"+Pr(t,ke-1)+"*"+Cn(e===47?e:qe())}function tb(e){for(;!Mr(Ke());)qe();return Pr(e,ke)}function rb(e){return rc(xn("",null,null,null,[""],e=tc(e),0,[0],e))}function xn(e,t,r,n,i,a,o,u,s){for(var c=0,l=0,f=o,S=0,g=0,D=0,I=1,_=1,C=1,h=0,O="",w=i,v=a,y=n,p=O;_;)switch(D=h,h=qe()){case 40:if(D!=108&&we(p,f-1)==58){ca(p+=ae($n(h),"&","&\f"),"&\f")!=-1&&(C=-1);break}case 34:case 39:case 91:p+=$n(h);break;case 9:case 10:case 13:case 32:p+=Zy(D);break;case 92:p+=Xy(Tn()-1,7);continue;case 47:switch(Ke()){case 42:case 47:Dn(nb(eb(qe(),Tn()),t,r),s);break;default:p+="/"}break;case 123*I:u[c++]=Ye(p)*C;case 125*I:case 59:case 0:switch(h){case 0:case 125:_=0;case 59+l:C==-1&&(p=ae(p,/\f/g,"")),g>0&&Ye(p)-f&&Dn(g>32?ic(p+";",n,r,f-1):ic(ae(p," ","")+";",n,r,f-2),s);break;case 59:p+=";";default:if(Dn(y=nc(p,t,r,c,l,i,u,O,w=[],v=[],f),a),h===123)if(l===0)xn(p,t,y,y,w,a,f,u,v);else switch(S===99&&we(p,3)===110?100:S){case 100:case 108:case 109:case 115:xn(e,y,y,n&&Dn(nc(e,y,y,0,0,i,u,O,i,w=[],f),v),i,v,f,u,n?w:v);break;default:xn(p,y,y,y,[""],v,0,u,v)}}c=l=g=0,I=C=1,O=p="",f=o;break;case 58:f=1+Ye(p),g=D;default:if(I<1){if(h==123)--I;else if(h==125&&I++==0&&Jy()==125)continue}switch(p+=Cn(h),h*I){case 38:C=l>0?1:(p+="\f",-1);break;case 44:u[c++]=(Ye(p)-1)*C,C=1;break;case 64:Ke()===45&&(p+=$n(qe())),S=Ke(),l=f=Ye(O=p+=tb(Tn())),h++;break;case 45:D===45&&Ye(p)==2&&(I=0)}}return a}function nc(e,t,r,n,i,a,o,u,s,c,l){for(var f=i-1,S=i===0?a:[""],g=la(S),D=0,I=0,_=0;D<n;++D)for(var C=0,h=xr(e,f+1,f=Hy(I=o[D])),O=e;C<g;++C)(O=Xu(I>0?S[C]+" "+h:ae(h,/&\f/g,S[C])))&&(s[_++]=O);return wn(e,t,r,i===0?sa:u,s,c,l)}function nb(e,t,r){return wn(e,t,r,Ju,Cn(Qy()),xr(e,2,-2),0)}function ic(e,t,r,n){return wn(e,t,r,ua,xr(e,0,n),xr(e,n+1,-1),n)}function tr(e,t){for(var r="",n=la(e),i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function ib(e,t,r,n){switch(e.type){case Uy:if(e.children.length)break;case Gy:case ua:return e.return=e.return||e.value;case Ju:return"";case Zu:return e.return=e.value+"{"+tr(e.children,n)+"}";case sa:e.value=e.props.join(",")}return Ye(r=tr(e.children,n))?e.return=e.value+"{"+r+"}":""}function ab(e){var t=la(e);return function(r,n,i,a){for(var o="",u=0;u<t;u++)o+=e[u](r,n,i,a)||"";return o}}function ob(e){return function(t){t.root||(t=t.return)&&e(t)}}function sb(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var ub=function(t,r,n){for(var i=0,a=0;i=a,a=Ke(),i===38&&a===12&&(r[n]=1),!Mr(a);)qe();return Pr(t,ke)},cb=function(t,r){var n=-1,i=44;do switch(Mr(i)){case 0:i===38&&Ke()===12&&(r[n]=1),t[n]+=ub(ke-1,r,n);break;case 2:t[n]+=$n(i);break;case 4:if(i===44){t[++n]=Ke()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=Cn(i)}while(i=qe());return t},lb=function(t,r){return rc(cb(tc(t),r))},ac=new WeakMap,db=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,i=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!ac.get(n))&&!i){ac.set(t,!0);for(var a=[],o=lb(r,a),u=n.props,s=0,c=0;s<o.length;s++)for(var l=0;l<u.length;l++,c++)t.props[c]=a[s]?o[s].replace(/&\f/g,u[l]):u[l]+" "+o[s]}}},fb=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function oc(e,t){switch(Wy(e,t)){case 5103:return ie+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ie+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ie+e+On+e+Te+e+e;case 6828:case 4268:return ie+e+Te+e+e;case 6165:return ie+e+Te+"flex-"+e+e;case 5187:return ie+e+ae(e,/(\w+).+(:[^]+)/,ie+"box-$1$2"+Te+"flex-$1$2")+e;case 5443:return ie+e+Te+"flex-item-"+ae(e,/flex-|-self/,"")+e;case 4675:return ie+e+Te+"flex-line-pack"+ae(e,/align-content|flex-|-self/,"")+e;case 5548:return ie+e+Te+ae(e,"shrink","negative")+e;case 5292:return ie+e+Te+ae(e,"basis","preferred-size")+e;case 6060:return ie+"box-"+ae(e,"-grow","")+ie+e+Te+ae(e,"grow","positive")+e;case 4554:return ie+ae(e,/([^-])(transform)/g,"$1"+ie+"$2")+e;case 6187:return ae(ae(ae(e,/(zoom-|grab)/,ie+"$1"),/(image-set)/,ie+"$1"),e,"")+e;case 5495:case 3959:return ae(e,/(image-set\([^]*)/,ie+"$1$`$1");case 4968:return ae(ae(e,/(.+:)(flex-)?(.*)/,ie+"box-pack:$3"+Te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ie+e+e;case 4095:case 3583:case 4068:case 2532:return ae(e,/(.+)-inline(.+)/,ie+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ye(e)-1-t>6)switch(we(e,t+1)){case 109:if(we(e,t+4)!==45)break;case 102:return ae(e,/(.+:)(.+)-([^]+)/,"$1"+ie+"$2-$3$1"+On+(we(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ca(e,"stretch")?oc(ae(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(we(e,t+1)!==115)break;case 6444:switch(we(e,Ye(e)-3-(~ca(e,"!important")&&10))){case 107:return ae(e,":",":"+ie)+e;case 101:return ae(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ie+(we(e,14)===45?"inline-":"")+"box$3$1"+ie+"$2$3$1"+Te+"$2box$3")+e}break;case 5936:switch(we(e,t+11)){case 114:return ie+e+Te+ae(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ie+e+Te+ae(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ie+e+Te+ae(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ie+e+Te+e+e}return e}var pb=function(t,r,n,i){if(t.length>-1&&!t.return)switch(t.type){case ua:t.return=oc(t.value,t.length);break;case Zu:return tr([Fr(t,{value:ae(t.value,"@","@"+ie)})],i);case sa:if(t.length)return Ky(t.props,function(a){switch(Yy(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return tr([Fr(t,{props:[ae(a,/:(read-\w+)/,":"+On+"$1")]})],i);case"::placeholder":return tr([Fr(t,{props:[ae(a,/:(plac\w+)/,":"+ie+"input-$1")]}),Fr(t,{props:[ae(a,/:(plac\w+)/,":"+On+"$1")]}),Fr(t,{props:[ae(a,/:(plac\w+)/,Te+"input-$1")]})],i)}return""})}},mb=[pb],gb=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(I){var _=I.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(I),I.setAttribute("data-s",""))})}var i=t.stylisPlugins||mb,a={},o,u=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(I){for(var _=I.getAttribute("data-emotion").split(" "),C=1;C<_.length;C++)a[_[C]]=!0;u.push(I)});var s,c=[db,fb];{var l,f=[ib,ob(function(I){l.insert(I)})],S=ab(c.concat(i,f)),g=function(_){return tr(rb(_),S)};s=function(_,C,h,O){l=h,g(_?_+"{"+C.styles+"}":C.styles),O&&(D.inserted[C.name]=!0)}}var D={key:r,sheet:new Ry({key:r,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:s};return D.sheet.hydrate(u),D},sc={exports:{}},se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ce=typeof Symbol=="function"&&Symbol.for,fa=Ce?Symbol.for("react.element"):60103,pa=Ce?Symbol.for("react.portal"):60106,Fn=Ce?Symbol.for("react.fragment"):60107,Pn=Ce?Symbol.for("react.strict_mode"):60108,Mn=Ce?Symbol.for("react.profiler"):60114,Nn=Ce?Symbol.for("react.provider"):60109,kn=Ce?Symbol.for("react.context"):60110,ma=Ce?Symbol.for("react.async_mode"):60111,An=Ce?Symbol.for("react.concurrent_mode"):60111,Ln=Ce?Symbol.for("react.forward_ref"):60112,jn=Ce?Symbol.for("react.suspense"):60113,hb=Ce?Symbol.for("react.suspense_list"):60120,qn=Ce?Symbol.for("react.memo"):60115,Vn=Ce?Symbol.for("react.lazy"):60116,vb=Ce?Symbol.for("react.block"):60121,Sb=Ce?Symbol.for("react.fundamental"):60117,yb=Ce?Symbol.for("react.responder"):60118,bb=Ce?Symbol.for("react.scope"):60119;function Ve(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case fa:switch(e=e.type,e){case ma:case An:case Fn:case Mn:case Pn:case jn:return e;default:switch(e=e&&e.$$typeof,e){case kn:case Ln:case Vn:case qn:case Nn:return e;default:return t}}case pa:return t}}}function uc(e){return Ve(e)===An}se.AsyncMode=ma,se.ConcurrentMode=An,se.ContextConsumer=kn,se.ContextProvider=Nn,se.Element=fa,se.ForwardRef=Ln,se.Fragment=Fn,se.Lazy=Vn,se.Memo=qn,se.Portal=pa,se.Profiler=Mn,se.StrictMode=Pn,se.Suspense=jn,se.isAsyncMode=function(e){return uc(e)||Ve(e)===ma},se.isConcurrentMode=uc,se.isContextConsumer=function(e){return Ve(e)===kn},se.isContextProvider=function(e){return Ve(e)===Nn},se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===fa},se.isForwardRef=function(e){return Ve(e)===Ln},se.isFragment=function(e){return Ve(e)===Fn},se.isLazy=function(e){return Ve(e)===Vn},se.isMemo=function(e){return Ve(e)===qn},se.isPortal=function(e){return Ve(e)===pa},se.isProfiler=function(e){return Ve(e)===Mn},se.isStrictMode=function(e){return Ve(e)===Pn},se.isSuspense=function(e){return Ve(e)===jn},se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Fn||e===An||e===Mn||e===Pn||e===jn||e===hb||typeof e=="object"&&e!==null&&(e.$$typeof===Vn||e.$$typeof===qn||e.$$typeof===Nn||e.$$typeof===kn||e.$$typeof===Ln||e.$$typeof===Sb||e.$$typeof===yb||e.$$typeof===bb||e.$$typeof===vb)},se.typeOf=Ve,sc.exports=se;var Ib=sc.exports,cc=Ib,_b={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ob={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lc={};lc[cc.ForwardRef]=_b,lc[cc.Memo]=Ob;var Cb=!0;function Db(e,t,r){var n="";return r.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(n+=i+" ")}),n}var dc=function(t,r,n){var i=t.key+"-"+r.name;(n===!1||Cb===!1)&&t.registered[i]===void 0&&(t.registered[i]=r.styles)},Eb=function(t,r,n){dc(t,r,n);var i=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var a=r;do t.insert(r===a?"."+i:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function wb(e){for(var t=0,r,n=0,i=e.length;i>=4;++n,i-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Tb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$b=/[A-Z]|^ms/g,xb=/_EMO_([^_]+?)_([^]*?)_EMO_/g,fc=function(t){return t.charCodeAt(1)===45},pc=function(t){return t!=null&&typeof t!="boolean"},ga=sb(function(e){return fc(e)?e:e.replace($b,"-$&").toLowerCase()}),mc=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(xb,function(n,i,a){return Qe={name:i,styles:a,next:Qe},i})}return Tb[t]!==1&&!fc(t)&&typeof r=="number"&&r!==0?r+"px":r};function Nr(e,t,r){if(r==null)return"";var n=r;if(n.__emotion_styles!==void 0)return n;switch(typeof r){case"boolean":return"";case"object":{var i=r;if(i.anim===1)return Qe={name:i.name,styles:i.styles,next:Qe},i.name;var a=r;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)Qe={name:o.name,styles:o.styles,next:Qe},o=o.next;var u=a.styles+";";return u}return Fb(e,t,r)}case"function":{if(e!==void 0){var s=Qe,c=r(e);return Qe=s,Nr(e,t,c)}break}}var l=r;return l}function Fb(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=Nr(e,t,r[i])+";";else for(var a in r){var o=r[a];if(typeof o!="object"){var u=o;pc(u)&&(n+=ga(a)+":"+mc(a,u)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&t==null)for(var s=0;s<o.length;s++)pc(o[s])&&(n+=ga(a)+":"+mc(a,o[s])+";");else{var c=Nr(e,t,o);switch(a){case"animation":case"animationName":{n+=ga(a)+":"+c+";";break}default:n+=a+"{"+c+"}"}}}return n}var gc=/label:\s*([^\s;{]+)\s*(;|$)/g,Qe;function hc(e,t,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,i="";Qe=void 0;var a=e[0];if(a==null||a.raw===void 0)n=!1,i+=Nr(r,t,a);else{var o=a;i+=o[0]}for(var u=1;u<e.length;u++)if(i+=Nr(r,t,e[u]),n){var s=a;i+=s[u]}gc.lastIndex=0;for(var c="",l;(l=gc.exec(i))!==null;)c+="-"+l[1];var f=wb(i)+c;return{name:f,styles:i,next:Qe}}var Pb=function(t){return t()},Mb=Q.useInsertionEffect?Q.useInsertionEffect:!1,Nb=Mb||Pb,vc=Q.createContext(typeof HTMLElement<"u"?gb({key:"css"}):null);vc.Provider;var kb=function(t){return $.forwardRef(function(r,n){var i=$.useContext(vc);return t(r,i,n)})},Ab=Q.createContext({}),ha={}.hasOwnProperty,va="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Lb=function(t,r){var n={};for(var i in r)ha.call(r,i)&&(n[i]=r[i]);return n[va]=t,n},jb=function(t){var r=t.cache,n=t.serialized,i=t.isStringTag;return dc(r,n,i),Nb(function(){return Eb(r,n,i)}),null},qb=kb(function(e,t,r){var n=e.css;typeof n=="string"&&t.registered[n]!==void 0&&(n=t.registered[n]);var i=e[va],a=[n],o="";typeof e.className=="string"?o=Db(t.registered,a,e.className):e.className!=null&&(o=e.className+" ");var u=hc(a,void 0,Q.useContext(Ab));o+=t.key+"-"+u.name;var s={};for(var c in e)ha.call(e,c)&&c!=="css"&&c!==va&&(s[c]=e[c]);return s.className=o,r&&(s.ref=r),Q.createElement(Q.Fragment,null,Q.createElement(jb,{cache:t,serialized:u,isStringTag:typeof i=="string"}),Q.createElement(i,s))}),Vb=qb,q=function(t,r){var n=arguments;if(r==null||!ha.call(r,"css"))return Q.createElement.apply(void 0,n);var i=n.length,a=new Array(i);a[0]=Vb,a[1]=Lb(t,r);for(var o=2;o<i;o++)a[o]=n[o];return Q.createElement.apply(null,a)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(q||(q={}));function Sa(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return hc(t)}function Bb(){var e=Sa.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function Rb(e){if(Array.isArray(e))return e}function Gb(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,a,o,u=[],s=!0,c=!1;try{if(a=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);s=!0);}catch(l){c=!0,i=l}finally{try{if(!s&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw i}}return u}}function Ub(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(e,t){return Rb(e)||Gb(e,t)||Qu(e,t)||Ub()}function Hb(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function We(e,t){if(e==null)return{};var r,n,i=Hb(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function zb(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const Wb=Math.min,Yb=Math.max,Bn=Math.round,Rn=Math.floor,Gn=e=>({x:e,y:e});function Kb(e){const{x:t,y:r,width:n,height:i}=e;return{width:n,height:i,top:r,left:t,right:t+n,bottom:r+i,x:t,y:r}}function Un(){return typeof window<"u"}function Sc(e){return bc(e)?(e.nodeName||"").toLowerCase():"#document"}function rt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function yc(e){var t;return(t=(bc(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function bc(e){return Un()?e instanceof Node||e instanceof rt(e).Node:!1}function Qb(e){return Un()?e instanceof Element||e instanceof rt(e).Element:!1}function ya(e){return Un()?e instanceof HTMLElement||e instanceof rt(e).HTMLElement:!1}function Ic(e){return!Un()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof rt(e).ShadowRoot}const Jb=new Set(["inline","contents"]);function _c(e){const{overflow:t,overflowX:r,overflowY:n,display:i}=ba(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!Jb.has(i)}function Zb(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Xb=new Set(["html","body","#document"]);function e0(e){return Xb.has(Sc(e))}function ba(e){return rt(e).getComputedStyle(e)}function t0(e){if(Sc(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ic(e)&&e.host||yc(e);return Ic(t)?t.host:t}function Oc(e){const t=t0(e);return e0(t)?e.ownerDocument?e.ownerDocument.body:e.body:ya(t)&&_c(t)?t:Oc(t)}function Hn(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const i=Oc(e),a=i===((n=e.ownerDocument)==null?void 0:n.body),o=rt(i);if(a){const u=Ia(o);return t.concat(o,o.visualViewport||[],_c(i)?i:[],u&&r?Hn(u):[])}return t.concat(i,Hn(i,[],r))}function Ia(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function r0(e){const t=ba(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=ya(e),a=i?e.offsetWidth:r,o=i?e.offsetHeight:n,u=Bn(r)!==a||Bn(n)!==o;return u&&(r=a,n=o),{width:r,height:n,$:u}}function _a(e){return Qb(e)?e:e.contextElement}function Cc(e){const t=_a(e);if(!ya(t))return Gn(1);const r=t.getBoundingClientRect(),{width:n,height:i,$:a}=r0(t);let o=(a?Bn(r.width):r.width)/n,u=(a?Bn(r.height):r.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!u||!Number.isFinite(u))&&(u=1),{x:o,y:u}}const n0=Gn(0);function i0(e){const t=rt(e);return!Zb()||!t.visualViewport?n0:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function a0(e,t,r){return!1}function Dc(e,t,r,n){t===void 0&&(t=!1);const i=e.getBoundingClientRect(),a=_a(e);let o=Gn(1);t&&(o=Cc(e));const u=a0()?i0(a):Gn(0);let s=(i.left+u.x)/o.x,c=(i.top+u.y)/o.y,l=i.width/o.x,f=i.height/o.y;if(a){const S=rt(a),g=n;let D=S,I=Ia(D);for(;I&&n&&g!==D;){const _=Cc(I),C=I.getBoundingClientRect(),h=ba(I),O=C.left+(I.clientLeft+parseFloat(h.paddingLeft))*_.x,w=C.top+(I.clientTop+parseFloat(h.paddingTop))*_.y;s*=_.x,c*=_.y,l*=_.x,f*=_.y,s+=O,c+=w,D=rt(I),I=Ia(D)}}return Kb({width:l,height:f,x:s,y:c})}function Ec(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function o0(e,t){let r=null,n;const i=yc(e);function a(){var u;clearTimeout(n),(u=r)==null||u.disconnect(),r=null}function o(u,s){u===void 0&&(u=!1),s===void 0&&(s=1),a();const c=e.getBoundingClientRect(),{left:l,top:f,width:S,height:g}=c;if(u||t(),!S||!g)return;const D=Rn(f),I=Rn(i.clientWidth-(l+S)),_=Rn(i.clientHeight-(f+g)),C=Rn(l),O={rootMargin:-D+"px "+-I+"px "+-_+"px "+-C+"px",threshold:Yb(0,Wb(1,s))||1};let w=!0;function v(y){const p=y[0].intersectionRatio;if(p!==s){if(!w)return o();p?o(!1,p):n=setTimeout(()=>{o(!1,1e-7)},1e3)}p===1&&!Ec(c,e.getBoundingClientRect())&&o(),w=!1}try{r=new IntersectionObserver(v,{...O,root:i.ownerDocument})}catch{r=new IntersectionObserver(v,O)}r.observe(e)}return o(!0),a}function s0(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:u=typeof IntersectionObserver=="function",animationFrame:s=!1}=n,c=_a(e),l=i||a?[...c?Hn(c):[],...Hn(t)]:[];l.forEach(C=>{i&&C.addEventListener("scroll",r,{passive:!0}),a&&C.addEventListener("resize",r)});const f=c&&u?o0(c,r):null;let S=-1,g=null;o&&(g=new ResizeObserver(C=>{let[h]=C;h&&h.target===c&&g&&(g.unobserve(t),cancelAnimationFrame(S),S=requestAnimationFrame(()=>{var O;(O=g)==null||O.observe(t)})),r()}),c&&!s&&g.observe(c),g.observe(t));let D,I=s?Dc(e):null;s&&_();function _(){const C=Dc(e);I&&!Ec(I,C)&&r(),I=C,D=requestAnimationFrame(_)}return r(),()=>{var C;l.forEach(h=>{i&&h.removeEventListener("scroll",r),a&&h.removeEventListener("resize",r)}),f==null||f(),(C=g)==null||C.disconnect(),g=null,s&&cancelAnimationFrame(D)}}var Oa=$.useLayoutEffect,u0=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],zn=function(){};function c0(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function l0(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];var a=[].concat(n);if(t&&e)for(var o in t)t.hasOwnProperty(o)&&t[o]&&a.push("".concat(c0(e,o)));return a.filter(function(u){return u}).map(function(u){return String(u).trim()}).join(" ")}var Wn=function(t){return b0(t)?t.filter(Boolean):Ot(t)==="object"&&t!==null?[t]:[]},wc=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var r=We(t,u0);return L({},r)},he=function(t,r,n){var i=t.cx,a=t.getStyles,o=t.getClassNames,u=t.className;return{css:a(r,t),className:i(n??{},o(r,t),u)}};function d0(e,t,r){if(r){var n=r(e,t);if(typeof n=="string")return n}return e}function Yn(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function f0(e){return Yn(e)?window.innerHeight:e.clientHeight}function Tc(e){return Yn(e)?window.pageYOffset:e.scrollTop}function Kn(e,t){if(Yn(e)){window.scrollTo(0,t);return}e.scrollTop=t}function p0(e){var t=getComputedStyle(e),r=t.position==="absolute",n=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(r&&t.position==="static")&&n.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function m0(e,t,r,n){return r*((e=e/n-1)*e*e+1)+t}function Qn(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:zn,i=Tc(e),a=t-i,o=10,u=0;function s(){u+=o;var c=m0(u,i,a,r);Kn(e,c),u<r?window.requestAnimationFrame(s):n(e)}s()}function $c(e,t){var r=e.getBoundingClientRect(),n=t.getBoundingClientRect(),i=t.offsetHeight/3;n.bottom+i>r.bottom?Kn(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):n.top-i<r.top&&Kn(e,Math.max(t.offsetTop-i,0))}function g0(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function xc(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function h0(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Fc=!1,v0={get passive(){return Fc=!0}},Jn=typeof window<"u"?window:{};Jn.addEventListener&&Jn.removeEventListener&&(Jn.addEventListener("p",zn,v0),Jn.removeEventListener("p",zn,!1));var S0=Fc;function y0(e){return e!=null}function b0(e){return Array.isArray(e)}function kr(e,t,r){return e?t:r}function NO(e){return e}function kO(e){return e}var I0=function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a=Object.entries(t).filter(function(o){var u=De(o,1),s=u[0];return!n.includes(s)});return a.reduce(function(o,u){var s=De(u,2),c=s[0],l=s[1];return o[c]=l,o},{})},_0=["children","innerProps"],O0=["children","innerProps"];function C0(e){var t=e.maxHeight,r=e.menuEl,n=e.minHeight,i=e.placement,a=e.shouldScroll,o=e.isFixedPosition,u=e.controlHeight,s=p0(r),c={placement:"bottom",maxHeight:t};if(!r||!r.offsetParent)return c;var l=s.getBoundingClientRect(),f=l.height,S=r.getBoundingClientRect(),g=S.bottom,D=S.height,I=S.top,_=r.offsetParent.getBoundingClientRect(),C=_.top,h=o?window.innerHeight:f0(s),O=Tc(s),w=parseInt(getComputedStyle(r).marginBottom,10),v=parseInt(getComputedStyle(r).marginTop,10),y=C-v,p=h-I,E=y+O,T=f-O-I,x=g-h+O+w,j=O+I-v,H=160;switch(i){case"auto":case"bottom":if(p>=D)return{placement:"bottom",maxHeight:t};if(T>=D&&!o)return a&&Qn(s,x,H),{placement:"bottom",maxHeight:t};if(!o&&T>=n||o&&p>=n){a&&Qn(s,x,H);var ne=o?p-w:T-w;return{placement:"bottom",maxHeight:ne}}if(i==="auto"||o){var ee=t,F=o?y:E;return F>=n&&(ee=Math.min(F-w-u,t)),{placement:"top",maxHeight:ee}}if(i==="bottom")return a&&Kn(s,x),{placement:"bottom",maxHeight:t};break;case"top":if(y>=D)return{placement:"top",maxHeight:t};if(E>=D&&!o)return a&&Qn(s,j,H),{placement:"top",maxHeight:t};if(!o&&E>=n||o&&y>=n){var k=t;return(!o&&E>=n||o&&y>=n)&&(k=o?y-v:E-v),a&&Qn(s,j,H),{placement:"top",maxHeight:k}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function D0(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var Pc=function(t){return t==="auto"?"bottom":t},E0=function(t,r){var n,i=t.placement,a=t.theme,o=a.borderRadius,u=a.spacing,s=a.colors;return L((n={label:"menu"},Jt(n,D0(i),"100%"),Jt(n,"position","absolute"),Jt(n,"width","100%"),Jt(n,"zIndex",1),n),r?{}:{backgroundColor:s.neutral0,borderRadius:o,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:u.menuGutter,marginTop:u.menuGutter})},Mc=$.createContext(null),w0=function(t){var r=t.children,n=t.minMenuHeight,i=t.maxMenuHeight,a=t.menuPlacement,o=t.menuPosition,u=t.menuShouldScrollIntoView,s=t.theme,c=$.useContext(Mc)||{},l=c.setPortalPlacement,f=$.useRef(null),S=$.useState(i),g=De(S,2),D=g[0],I=g[1],_=$.useState(null),C=De(_,2),h=C[0],O=C[1],w=s.spacing.controlHeight;return Oa(function(){var v=f.current;if(v){var y=o==="fixed",p=u&&!y,E=C0({maxHeight:i,menuEl:v,minHeight:n,placement:a,shouldScroll:p,isFixedPosition:y,controlHeight:w});I(E.maxHeight),O(E.placement),l==null||l(E.placement)}},[i,a,o,u,n,l,w]),r({ref:f,placerProps:L(L({},t),{},{placement:h||Pc(a),maxHeight:D})})},T0=function(t){var r=t.children,n=t.innerRef,i=t.innerProps;return q("div",R({},he(t,"menu",{menu:!0}),{ref:n},i),r)},$0=T0,x0=function(t,r){var n=t.maxHeight,i=t.theme.spacing.baseUnit;return L({maxHeight:n,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:i,paddingTop:i})},F0=function(t){var r=t.children,n=t.innerProps,i=t.innerRef,a=t.isMulti;return q("div",R({},he(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:i},n),r)},Nc=function(t,r){var n=t.theme,i=n.spacing.baseUnit,a=n.colors;return L({textAlign:"center"},r?{}:{color:a.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},P0=Nc,M0=Nc,N0=function(t){var r=t.children,n=r===void 0?"No options":r,i=t.innerProps,a=We(t,_0);return q("div",R({},he(L(L({},a),{},{children:n,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),n)},k0=function(t){var r=t.children,n=r===void 0?"Loading...":r,i=t.innerProps,a=We(t,O0);return q("div",R({},he(L(L({},a),{},{children:n,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),n)},A0=function(t){var r=t.rect,n=t.offset,i=t.position;return{left:r.left,position:i,top:n,width:r.width,zIndex:1}},L0=function(t){var r=t.appendTo,n=t.children,i=t.controlElement,a=t.innerProps,o=t.menuPlacement,u=t.menuPosition,s=$.useRef(null),c=$.useRef(null),l=$.useState(Pc(o)),f=De(l,2),S=f[0],g=f[1],D=$.useMemo(function(){return{setPortalPlacement:g}},[]),I=$.useState(null),_=De(I,2),C=_[0],h=_[1],O=$.useCallback(function(){if(i){var p=g0(i),E=u==="fixed"?0:window.pageYOffset,T=p[S]+E;(T!==(C==null?void 0:C.offset)||p.left!==(C==null?void 0:C.rect.left)||p.width!==(C==null?void 0:C.rect.width))&&h({offset:T,rect:p})}},[i,u,S,C==null?void 0:C.offset,C==null?void 0:C.rect.left,C==null?void 0:C.rect.width]);Oa(function(){O()},[O]);var w=$.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&s.current&&(c.current=s0(i,s.current,O,{elementResize:"ResizeObserver"in window}))},[i,O]);Oa(function(){w()},[w]);var v=$.useCallback(function(p){s.current=p,w()},[w]);if(!r&&u!=="fixed"||!C)return null;var y=q("div",R({ref:v},he(L(L({},t),{},{offset:C.offset,position:u,rect:C.rect}),"menuPortal",{"menu-portal":!0}),a),n);return q(Mc.Provider,{value:D},r?Fl.createPortal(y,r):y)},j0=function(t){var r=t.isDisabled,n=t.isRtl;return{label:"container",direction:n?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},q0=function(t){var r=t.children,n=t.innerProps,i=t.isDisabled,a=t.isRtl;return q("div",R({},he(t,"container",{"--is-disabled":i,"--is-rtl":a}),n),r)},V0=function(t,r){var n=t.theme.spacing,i=t.isMulti,a=t.hasValue,o=t.selectProps.controlShouldRenderValue;return L({alignItems:"center",display:i&&a&&o?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(n.baseUnit/2,"px ").concat(n.baseUnit*2,"px")})},B0=function(t){var r=t.children,n=t.innerProps,i=t.isMulti,a=t.hasValue;return q("div",R({},he(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":a}),n),r)},R0=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},G0=function(t){var r=t.children,n=t.innerProps;return q("div",R({},he(t,"indicatorsContainer",{indicators:!0}),n),r)},kc,U0=["size"],H0=["innerProps","isRtl","size"],z0={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Ac=function(t){var r=t.size,n=We(t,U0);return q("svg",R({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:z0},n))},Ca=function(t){return q(Ac,R({size:20},t),q("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Lc=function(t){return q(Ac,R({size:20},t),q("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},jc=function(t,r){var n=t.isFocused,i=t.theme,a=i.spacing.baseUnit,o=i.colors;return L({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:n?o.neutral60:o.neutral20,padding:a*2,":hover":{color:n?o.neutral80:o.neutral40}})},W0=jc,Y0=function(t){var r=t.children,n=t.innerProps;return q("div",R({},he(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),n),r||q(Lc,null))},K0=jc,Q0=function(t){var r=t.children,n=t.innerProps;return q("div",R({},he(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),n),r||q(Ca,null))},J0=function(t,r){var n=t.isDisabled,i=t.theme,a=i.spacing.baseUnit,o=i.colors;return L({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:n?o.neutral10:o.neutral20,marginBottom:a*2,marginTop:a*2})},Z0=function(t){var r=t.innerProps;return q("span",R({},r,he(t,"indicatorSeparator",{"indicator-separator":!0})))},X0=Bb(kc||(kc=zb([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),e1=function(t,r){var n=t.isFocused,i=t.size,a=t.theme,o=a.colors,u=a.spacing.baseUnit;return L({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},r?{}:{color:n?o.neutral60:o.neutral20,padding:u*2})},Da=function(t){var r=t.delay,n=t.offset;return q("span",{css:Sa({animation:"".concat(X0," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:n?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},t1=function(t){var r=t.innerProps,n=t.isRtl,i=t.size,a=i===void 0?4:i,o=We(t,H0);return q("div",R({},he(L(L({},o),{},{innerProps:r,isRtl:n,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),q(Da,{delay:0,offset:n}),q(Da,{delay:160,offset:!0}),q(Da,{delay:320,offset:!n}))},r1=function(t,r){var n=t.isDisabled,i=t.isFocused,a=t.theme,o=a.colors,u=a.borderRadius,s=a.spacing;return L({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:n?o.neutral5:o.neutral0,borderColor:n?o.neutral10:i?o.primary:o.neutral20,borderRadius:u,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(o.primary):void 0,"&:hover":{borderColor:i?o.primary:o.neutral30}})},n1=function(t){var r=t.children,n=t.isDisabled,i=t.isFocused,a=t.innerRef,o=t.innerProps,u=t.menuIsOpen;return q("div",R({ref:a},he(t,"control",{control:!0,"control--is-disabled":n,"control--is-focused":i,"control--menu-is-open":u}),o,{"aria-disabled":n||void 0}),r)},i1=n1,a1=["data"],o1=function(t,r){var n=t.theme.spacing;return r?{}:{paddingBottom:n.baseUnit*2,paddingTop:n.baseUnit*2}},s1=function(t){var r=t.children,n=t.cx,i=t.getStyles,a=t.getClassNames,o=t.Heading,u=t.headingProps,s=t.innerProps,c=t.label,l=t.theme,f=t.selectProps;return q("div",R({},he(t,"group",{group:!0}),s),q(o,R({},u,{selectProps:f,theme:l,getStyles:i,getClassNames:a,cx:n}),c),q("div",null,r))},u1=function(t,r){var n=t.theme,i=n.colors,a=n.spacing;return L({label:"group",cursor:"default",display:"block"},r?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},c1=function(t){var r=wc(t);r.data;var n=We(r,a1);return q("div",R({},he(t,"groupHeading",{"group-heading":!0}),n))},l1=s1,d1=["innerRef","isDisabled","isHidden","inputClassName"],f1=function(t,r){var n=t.isDisabled,i=t.value,a=t.theme,o=a.spacing,u=a.colors;return L(L({visibility:n?"hidden":"visible",transform:i?"translateZ(0)":""},p1),r?{}:{margin:o.baseUnit/2,paddingBottom:o.baseUnit/2,paddingTop:o.baseUnit/2,color:u.neutral80})},qc={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},p1={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":L({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},qc)},m1=function(t){return L({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},qc)},g1=function(t){var r=t.cx,n=t.value,i=wc(t),a=i.innerRef,o=i.isDisabled,u=i.isHidden,s=i.inputClassName,c=We(i,d1);return q("div",R({},he(t,"input",{"input-container":!0}),{"data-value":n||""}),q("input",R({className:r({input:!0},s),ref:a,style:m1(u),disabled:o},c)))},h1=g1,v1=function(t,r){var n=t.theme,i=n.spacing,a=n.borderRadius,o=n.colors;return L({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:o.neutral10,borderRadius:a/2,margin:i.baseUnit/2})},S1=function(t,r){var n=t.theme,i=n.borderRadius,a=n.colors,o=t.cropWithEllipsis;return L({overflow:"hidden",textOverflow:o||o===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:i/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},y1=function(t,r){var n=t.theme,i=n.spacing,a=n.borderRadius,o=n.colors,u=t.isFocused;return L({alignItems:"center",display:"flex"},r?{}:{borderRadius:a/2,backgroundColor:u?o.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:o.dangerLight,color:o.danger}})},Vc=function(t){var r=t.children,n=t.innerProps;return q("div",n,r)},b1=Vc,I1=Vc;function _1(e){var t=e.children,r=e.innerProps;return q("div",R({role:"button"},r),t||q(Ca,{size:14}))}var O1=function(t){var r=t.children,n=t.components,i=t.data,a=t.innerProps,o=t.isDisabled,u=t.removeProps,s=t.selectProps,c=n.Container,l=n.Label,f=n.Remove;return q(c,{data:i,innerProps:L(L({},he(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":o})),a),selectProps:s},q(l,{data:i,innerProps:L({},he(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},r),q(f,{data:i,innerProps:L(L({},he(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},u),selectProps:s}))},C1=O1,D1=function(t,r){var n=t.isDisabled,i=t.isFocused,a=t.isSelected,o=t.theme,u=o.spacing,s=o.colors;return L({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:a?s.primary:i?s.primary25:"transparent",color:n?s.neutral20:a?s.neutral0:"inherit",padding:"".concat(u.baseUnit*2,"px ").concat(u.baseUnit*3,"px"),":active":{backgroundColor:n?void 0:a?s.primary:s.primary50}})},E1=function(t){var r=t.children,n=t.isDisabled,i=t.isFocused,a=t.isSelected,o=t.innerRef,u=t.innerProps;return q("div",R({},he(t,"option",{option:!0,"option--is-disabled":n,"option--is-focused":i,"option--is-selected":a}),{ref:o,"aria-disabled":n},u),r)},w1=E1,T1=function(t,r){var n=t.theme,i=n.spacing,a=n.colors;return L({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:a.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},$1=function(t){var r=t.children,n=t.innerProps;return q("div",R({},he(t,"placeholder",{placeholder:!0}),n),r)},x1=$1,F1=function(t,r){var n=t.isDisabled,i=t.theme,a=i.spacing,o=i.colors;return L({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:n?o.neutral40:o.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},P1=function(t){var r=t.children,n=t.isDisabled,i=t.innerProps;return q("div",R({},he(t,"singleValue",{"single-value":!0,"single-value--is-disabled":n}),i),r)},M1=P1,N1={ClearIndicator:Q0,Control:i1,DropdownIndicator:Y0,DownChevron:Lc,CrossIcon:Ca,Group:l1,GroupHeading:c1,IndicatorsContainer:G0,IndicatorSeparator:Z0,Input:h1,LoadingIndicator:t1,Menu:$0,MenuList:F0,MenuPortal:L0,LoadingMessage:k0,NoOptionsMessage:N0,MultiValue:C1,MultiValueContainer:b1,MultiValueLabel:I1,MultiValueRemove:_1,Option:w1,Placeholder:x1,SelectContainer:q0,SingleValue:M1,ValueContainer:B0},k1=function(t){return L(L({},N1),t.components)},Bc=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function A1(e,t){return!!(e===t||Bc(e)&&Bc(t))}function L1(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!A1(e[r],t[r]))return!1;return!0}function j1(e,t){t===void 0&&(t=L1);var r=null;function n(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];if(r&&r.lastThis===this&&t(i,r.lastArgs))return r.lastResult;var o=e.apply(this,i);return r={lastResult:o,lastArgs:i,lastThis:this},o}return n.clear=function(){r=null},n}for(var q1={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},V1=function(t){return q("span",R({css:q1},t))},Rc=V1,B1={guidance:function(t){var r=t.isSearchable,n=t.isMulti,i=t.tabSelectsValue,a=t.context,o=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return o?"".concat(t["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(n?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var r=t.action,n=t.label,i=n===void 0?"":n,a=t.labels,o=t.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return o?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var r=t.context,n=t.focused,i=t.options,a=t.label,o=a===void 0?"":a,u=t.selectValue,s=t.isDisabled,c=t.isSelected,l=t.isAppleDevice,f=function(I,_){return I&&I.length?"".concat(I.indexOf(_)+1," of ").concat(I.length):""};if(r==="value"&&u)return"value ".concat(o," focused, ").concat(f(u,n),".");if(r==="menu"&&l){var S=s?" disabled":"",g="".concat(c?" selected":"").concat(S);return"".concat(o).concat(g,", ").concat(f(i,n),".")}return""},onFilter:function(t){var r=t.inputValue,n=t.resultsMessage;return"".concat(n).concat(r?" for search term "+r:"",".")}},R1=function(t){var r=t.ariaSelection,n=t.focusedOption,i=t.focusedValue,a=t.focusableOptions,o=t.isFocused,u=t.selectValue,s=t.selectProps,c=t.id,l=t.isAppleDevice,f=s.ariaLiveMessages,S=s.getOptionLabel,g=s.inputValue,D=s.isMulti,I=s.isOptionDisabled,_=s.isSearchable,C=s.menuIsOpen,h=s.options,O=s.screenReaderStatus,w=s.tabSelectsValue,v=s.isLoading,y=s["aria-label"],p=s["aria-live"],E=$.useMemo(function(){return L(L({},B1),f||{})},[f]),T=$.useMemo(function(){var F="";if(r&&E.onChange){var k=r.option,N=r.options,B=r.removedValue,X=r.removedValues,ce=r.value,P=function(oe){return Array.isArray(oe)?null:oe},A=B||k||P(ce),U=A?S(A):"",G=N||X||void 0,W=G?G.map(S):[],J=L({isDisabled:A&&I(A,u),label:U,labels:W},r);F=E.onChange(J)}return F},[r,E,I,u,S]),x=$.useMemo(function(){var F="",k=n||i,N=!!(n&&u&&u.includes(n));if(k&&E.onFocus){var B={focused:k,label:S(k),isDisabled:I(k,u),isSelected:N,options:a,context:k===n?"menu":"value",selectValue:u,isAppleDevice:l};F=E.onFocus(B)}return F},[n,i,S,I,E,a,u,l]),j=$.useMemo(function(){var F="";if(C&&h.length&&!v&&E.onFilter){var k=O({count:a.length});F=E.onFilter({inputValue:g,resultsMessage:k})}return F},[a,g,C,E,h,O,v]),H=(r==null?void 0:r.action)==="initial-input-focus",ne=$.useMemo(function(){var F="";if(E.guidance){var k=i?"value":C?"menu":"input";F=E.guidance({"aria-label":y,context:k,isDisabled:n&&I(n,u),isMulti:D,isSearchable:_,tabSelectsValue:w,isInitialFocus:H})}return F},[y,n,i,D,I,_,C,E,u,w,H]),ee=q($.Fragment,null,q("span",{id:"aria-selection"},T),q("span",{id:"aria-focused"},x),q("span",{id:"aria-results"},j),q("span",{id:"aria-guidance"},ne));return q($.Fragment,null,q(Rc,{id:c},H&&ee),q(Rc,{"aria-live":p,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},o&&!H&&ee))},G1=R1,Ea=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],U1=new RegExp("["+Ea.map(function(e){return e.letters}).join("")+"]","g"),Gc={},wa=0;wa<Ea.length;wa++)for(var Ta=Ea[wa],$a=0;$a<Ta.letters.length;$a++)Gc[Ta.letters[$a]]=Ta.base;var Uc=function(t){return t.replace(U1,function(r){return Gc[r]})},H1=j1(Uc),Hc=function(t){return t.replace(/^\s+|\s+$/g,"")},z1=function(t){return"".concat(t.label," ").concat(t.value)},W1=function(t){return function(r,n){if(r.data.__isNew__)return!0;var i=L({ignoreCase:!0,ignoreAccents:!0,stringify:z1,trim:!0,matchFrom:"any"},t),a=i.ignoreCase,o=i.ignoreAccents,u=i.stringify,s=i.trim,c=i.matchFrom,l=s?Hc(n):n,f=s?Hc(u(r)):u(r);return a&&(l=l.toLowerCase(),f=f.toLowerCase()),o&&(l=H1(l),f=Uc(f)),c==="start"?f.substr(0,l.length)===l:f.indexOf(l)>-1}},Y1=["innerRef"];function K1(e){var t=e.innerRef,r=We(e,Y1),n=I0(r,"onExited","in","enter","exit","appear");return q("input",R({ref:t},n,{css:Sa({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Q1=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function J1(e){var t=e.isEnabled,r=e.onBottomArrive,n=e.onBottomLeave,i=e.onTopArrive,a=e.onTopLeave,o=$.useRef(!1),u=$.useRef(!1),s=$.useRef(0),c=$.useRef(null),l=$.useCallback(function(_,C){if(c.current!==null){var h=c.current,O=h.scrollTop,w=h.scrollHeight,v=h.clientHeight,y=c.current,p=C>0,E=w-v-O,T=!1;E>C&&o.current&&(n&&n(_),o.current=!1),p&&u.current&&(a&&a(_),u.current=!1),p&&C>E?(r&&!o.current&&r(_),y.scrollTop=w,T=!0,o.current=!0):!p&&-C>O&&(i&&!u.current&&i(_),y.scrollTop=0,T=!0,u.current=!0),T&&Q1(_)}},[r,n,i,a]),f=$.useCallback(function(_){l(_,_.deltaY)},[l]),S=$.useCallback(function(_){s.current=_.changedTouches[0].clientY},[]),g=$.useCallback(function(_){var C=s.current-_.changedTouches[0].clientY;l(_,C)},[l]),D=$.useCallback(function(_){if(_){var C=S0?{passive:!1}:!1;_.addEventListener("wheel",f,C),_.addEventListener("touchstart",S,C),_.addEventListener("touchmove",g,C)}},[g,S,f]),I=$.useCallback(function(_){_&&(_.removeEventListener("wheel",f,!1),_.removeEventListener("touchstart",S,!1),_.removeEventListener("touchmove",g,!1))},[g,S,f]);return $.useEffect(function(){if(t){var _=c.current;return D(_),function(){I(_)}}},[t,D,I]),function(_){c.current=_}}var zc=["boxSizing","height","overflow","paddingRight","position"],Wc={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Yc(e){e.cancelable&&e.preventDefault()}function Kc(e){e.stopPropagation()}function Qc(){var e=this.scrollTop,t=this.scrollHeight,r=e+this.offsetHeight;e===0?this.scrollTop=1:r===t&&(this.scrollTop=e-1)}function Jc(){return"ontouchstart"in window||navigator.maxTouchPoints}var Zc=!!(typeof window<"u"&&window.document&&window.document.createElement),Ar=0,rr={capture:!1,passive:!1};function Z1(e){var t=e.isEnabled,r=e.accountForScrollbars,n=r===void 0?!0:r,i=$.useRef({}),a=$.useRef(null),o=$.useCallback(function(s){if(Zc){var c=document.body,l=c&&c.style;if(n&&zc.forEach(function(D){var I=l&&l[D];i.current[D]=I}),n&&Ar<1){var f=parseInt(i.current.paddingRight,10)||0,S=document.body?document.body.clientWidth:0,g=window.innerWidth-S+f||0;Object.keys(Wc).forEach(function(D){var I=Wc[D];l&&(l[D]=I)}),l&&(l.paddingRight="".concat(g,"px"))}c&&Jc()&&(c.addEventListener("touchmove",Yc,rr),s&&(s.addEventListener("touchstart",Qc,rr),s.addEventListener("touchmove",Kc,rr))),Ar+=1}},[n]),u=$.useCallback(function(s){if(Zc){var c=document.body,l=c&&c.style;Ar=Math.max(Ar-1,0),n&&Ar<1&&zc.forEach(function(f){var S=i.current[f];l&&(l[f]=S)}),c&&Jc()&&(c.removeEventListener("touchmove",Yc,rr),s&&(s.removeEventListener("touchstart",Qc,rr),s.removeEventListener("touchmove",Kc,rr)))}},[n]);return $.useEffect(function(){if(t){var s=a.current;return o(s),function(){u(s)}}},[t,o,u]),function(s){a.current=s}}var X1=function(t){var r=t.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},eI={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function tI(e){var t=e.children,r=e.lockEnabled,n=e.captureEnabled,i=n===void 0?!0:n,a=e.onBottomArrive,o=e.onBottomLeave,u=e.onTopArrive,s=e.onTopLeave,c=J1({isEnabled:i,onBottomArrive:a,onBottomLeave:o,onTopArrive:u,onTopLeave:s}),l=Z1({isEnabled:r}),f=function(g){c(g),l(g)};return q($.Fragment,null,r&&q("div",{onClick:X1,css:eI}),t(f))}var rI={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},nI=function(t){var r=t.name,n=t.onFocus;return q("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:n,css:rI,value:"",onChange:function(){}})},iI=nI;function xa(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function aI(){return xa(/^iPhone/i)}function Xc(){return xa(/^Mac/i)}function oI(){return xa(/^iPad/i)||Xc()&&navigator.maxTouchPoints>1}function sI(){return aI()||oI()}function uI(){return Xc()||sI()}var cI=function(t){return t.label},el=function(t){return t.label},tl=function(t){return t.value},lI=function(t){return!!t.isDisabled},dI={clearIndicator:K0,container:j0,control:r1,dropdownIndicator:W0,group:o1,groupHeading:u1,indicatorsContainer:R0,indicatorSeparator:J0,input:f1,loadingIndicator:e1,loadingMessage:M0,menu:E0,menuList:x0,menuPortal:A0,multiValue:v1,multiValueLabel:S1,multiValueRemove:y1,noOptionsMessage:P0,option:D1,placeholder:T1,singleValue:F1,valueContainer:V0},fI={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},pI=4,rl=4,mI=38,gI=rl*2,hI={baseUnit:rl,controlHeight:mI,menuGutter:gI},Fa={borderRadius:pI,colors:fI,spacing:hI},vI={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:xc(),captureMenuScroll:!xc(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:W1(),formatGroupLabel:cI,getOptionLabel:el,getOptionValue:tl,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:lI,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!h0(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var r=t.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function nl(e,t,r,n){var i=ul(e,t,r),a=cl(e,t,r),o=sl(e,t),u=Xn(e,t);return{type:"option",data:t,isDisabled:i,isSelected:a,label:o,value:u,index:n}}function Zn(e,t){return e.options.map(function(r,n){if("options"in r){var i=r.options.map(function(o,u){return nl(e,o,t,u)}).filter(function(o){return ol(e,o)});return i.length>0?{type:"group",data:r,options:i,index:n}:void 0}var a=nl(e,r,t,n);return ol(e,a)?a:void 0}).filter(y0)}function il(e){return e.reduce(function(t,r){return r.type==="group"?t.push.apply(t,Zt(r.options.map(function(n){return n.data}))):t.push(r.data),t},[])}function al(e,t){return e.reduce(function(r,n){return n.type==="group"?r.push.apply(r,Zt(n.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(n.index,"-").concat(i.index)}}))):r.push({data:n.data,id:"".concat(t,"-").concat(n.index)}),r},[])}function SI(e,t){return il(Zn(e,t))}function ol(e,t){var r=e.inputValue,n=r===void 0?"":r,i=t.data,a=t.isSelected,o=t.label,u=t.value;return(!dl(e)||!a)&&ll(e,{label:o,value:u,data:i},n)}function yI(e,t){var r=e.focusedValue,n=e.selectValue,i=n.indexOf(r);if(i>-1){var a=t.indexOf(r);if(a>-1)return r;if(i<t.length)return t[i]}return null}function bI(e,t){var r=e.focusedOption;return r&&t.indexOf(r)>-1?r:t[0]}var Pa=function(t,r){var n,i=(n=t.find(function(a){return a.data===r}))===null||n===void 0?void 0:n.id;return i||null},sl=function(t,r){return t.getOptionLabel(r)},Xn=function(t,r){return t.getOptionValue(r)};function ul(e,t,r){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,r):!1}function cl(e,t,r){if(r.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,r);var n=Xn(e,t);return r.some(function(i){return Xn(e,i)===n})}function ll(e,t,r){return e.filterOption?e.filterOption(t,r):!0}var dl=function(t){var r=t.hideSelectedOptions,n=t.isMulti;return r===void 0?n:r},II=1,Ma=function(e){My(r,e);var t=Ay(r);function r(n){var i;if(Fy(this,r),i=t.call(this,n),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,c){var l=i.props,f=l.onChange,S=l.name;c.name=S,i.ariaOnChange(s,c),f(s,c)},i.setValue=function(s,c,l){var f=i.props,S=f.closeMenuOnSelect,g=f.isMulti,D=f.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:D}),S&&(i.setState({inputIsHiddenAfterUpdate:!g}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:c,option:l})},i.selectOption=function(s){var c=i.props,l=c.blurInputOnSelect,f=c.isMulti,S=c.name,g=i.state.selectValue,D=f&&i.isOptionSelected(s,g),I=i.isOptionDisabled(s,g);if(D){var _=i.getOptionValue(s);i.setValue(g.filter(function(C){return i.getOptionValue(C)!==_}),"deselect-option",s)}else if(!I)f?i.setValue([].concat(Zt(g),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:S});return}l&&i.blurInput()},i.removeValue=function(s){var c=i.props.isMulti,l=i.state.selectValue,f=i.getOptionValue(s),S=l.filter(function(D){return i.getOptionValue(D)!==f}),g=kr(c,S,S[0]||null);i.onChange(g,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(kr(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,c=i.state.selectValue,l=c[c.length-1],f=c.slice(0,c.length-1),S=kr(s,f,f[0]||null);l&&i.onChange(S,{action:"pop-value",removedValue:l})},i.getFocusedOptionId=function(s){return Pa(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return al(Zn(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];return l0.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(s){return sl(i.props,s)},i.getOptionValue=function(s){return Xn(i.props,s)},i.getStyles=function(s,c){var l=i.props.unstyled,f=dI[s](c,l);f.boxSizing="border-box";var S=i.props.styles[s];return S?S(f,c):f},i.getClassNames=function(s,c){var l,f;return(l=(f=i.props.classNames)[s])===null||l===void 0?void 0:l.call(f,c)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return k1(i.props)},i.buildCategorizedOptions=function(){return Zn(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return il(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,c){i.setState({ariaSelection:L({value:s},c)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var c=i.props,l=c.isMulti,f=c.menuIsOpen;i.focusInput(),f?(i.setState({inputIsHiddenAfterUpdate:!l}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&Yn(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var c=s.touches,l=c&&c.item(0);l&&(i.initialTouchX=l.clientX,i.initialTouchY=l.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var c=s.touches,l=c&&c.item(0);if(l){var f=Math.abs(l.clientX-i.initialTouchX),S=Math.abs(l.clientY-i.initialTouchY),g=5;i.userIsDragging=f>g||S>g}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var c=i.props.inputValue,l=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(l,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var c=i.getFocusableOptions(),l=c.indexOf(s);i.setState({focusedOption:s,focusedOptionId:l>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return dl(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var c=i.props,l=c.isMulti,f=c.backspaceRemovesValue,S=c.escapeClearsValue,g=c.inputValue,D=c.isClearable,I=c.isDisabled,_=c.menuIsOpen,C=c.onKeyDown,h=c.tabSelectsValue,O=c.openMenuOnFocus,w=i.state,v=w.focusedOption,y=w.focusedValue,p=w.selectValue;if(!I&&!(typeof C=="function"&&(C(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!l||g)return;i.focusValue("previous");break;case"ArrowRight":if(!l||g)return;i.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(y)i.removeValue(y);else{if(!f)return;l?i.popValue():D&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!_||!h||!v||O&&i.isOptionSelected(v,p))return;i.selectOption(v);break;case"Enter":if(s.keyCode===229)break;if(_){if(!v||i.isComposing)return;i.selectOption(v);break}return;case"Escape":_?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:g}),i.onMenuClose()):D&&S&&i.clearValue();break;case" ":if(g)return;if(!_){i.openMenu("first");break}if(!v)return;i.selectOption(v);break;case"ArrowUp":_?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":_?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!_)return;i.focusOption("pageup");break;case"PageDown":if(!_)return;i.focusOption("pagedown");break;case"Home":if(!_)return;i.focusOption("first");break;case"End":if(!_)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++II),i.state.selectValue=Wn(n.value),n.menuIsOpen&&i.state.selectValue.length){var a=i.getFocusableOptionsWithIds(),o=i.buildFocusableOptions(),u=o.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=a,i.state.focusedOption=o[u],i.state.focusedOptionId=Pa(a,o[u])}return i}return Py(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&$c(this.menuListRef,this.focusedOptionRef),uI()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var a=this.props,o=a.isDisabled,u=a.menuIsOpen,s=this.state.isFocused;(s&&!o&&i.isDisabled||s&&u&&!i.menuIsOpen)&&this.focusInput(),s&&o&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!o&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&($c(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,a){this.props.onInputChange(i,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var a=this,o=this.state,u=o.selectValue,s=o.isFocused,c=this.buildFocusableOptions(),l=i==="first"?0:c.length-1;if(!this.props.isMulti){var f=c.indexOf(u[0]);f>-1&&(l=f)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[l],focusedOptionId:this.getFocusedOptionId(c[l])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(i){var a=this.state,o=a.selectValue,u=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=o.indexOf(u);u||(s=-1);var c=o.length-1,l=-1;if(o.length){switch(i){case"previous":s===0?l=0:s===-1?l=c:l=s-1;break;case"next":s>-1&&s<c&&(l=s+1);break}this.setState({inputIsHidden:l!==-1,focusedValue:o[l]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,o=this.state.focusedOption,u=this.getFocusableOptions();if(u.length){var s=0,c=u.indexOf(o);o||(c=-1),i==="up"?s=c>0?c-1:u.length-1:i==="down"?s=(c+1)%u.length:i==="pageup"?(s=c-a,s<0&&(s=0)):i==="pagedown"?(s=c+a,s>u.length-1&&(s=u.length-1)):i==="last"&&(s=u.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:u[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(u[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Fa):L(L({},Fa),this.props.theme):Fa}},{key:"getCommonProps",value:function(){var i=this.clearValue,a=this.cx,o=this.getStyles,u=this.getClassNames,s=this.getValue,c=this.selectOption,l=this.setValue,f=this.props,S=f.isMulti,g=f.isRtl,D=f.options,I=this.hasValue();return{clearValue:i,cx:a,getStyles:o,getClassNames:u,getValue:s,hasValue:I,isMulti:S,isRtl:g,options:D,selectOption:c,selectProps:f,setValue:l,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,a=i.isClearable,o=i.isMulti;return a===void 0?o:a}},{key:"isOptionDisabled",value:function(i,a){return ul(this.props,i,a)}},{key:"isOptionSelected",value:function(i,a){return cl(this.props,i,a)}},{key:"filterOption",value:function(i,a){return ll(this.props,i,a)}},{key:"formatOptionLabel",value:function(i,a){if(typeof this.props.formatOptionLabel=="function"){var o=this.props.inputValue,u=this.state.selectValue;return this.props.formatOptionLabel(i,{context:a,inputValue:o,selectValue:u})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,a=i.isDisabled,o=i.isSearchable,u=i.inputId,s=i.inputValue,c=i.tabIndex,l=i.form,f=i.menuIsOpen,S=i.required,g=this.getComponents(),D=g.Input,I=this.state,_=I.inputIsHidden,C=I.ariaSelection,h=this.commonProps,O=u||this.getElementId("input"),w=L(L(L({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":S,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},f&&{"aria-controls":this.getElementId("listbox")}),!o&&{"aria-readonly":!0}),this.hasValue()?(C==null?void 0:C.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return o?Q.createElement(D,R({},h,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:O,innerRef:this.getInputRef,isDisabled:a,isHidden:_,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:l,type:"text",value:s},w)):Q.createElement(K1,R({id:O,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:zn,onFocus:this.onInputFocus,disabled:a,tabIndex:c,inputMode:"none",form:l,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,a=this.getComponents(),o=a.MultiValue,u=a.MultiValueContainer,s=a.MultiValueLabel,c=a.MultiValueRemove,l=a.SingleValue,f=a.Placeholder,S=this.commonProps,g=this.props,D=g.controlShouldRenderValue,I=g.isDisabled,_=g.isMulti,C=g.inputValue,h=g.placeholder,O=this.state,w=O.selectValue,v=O.focusedValue,y=O.isFocused;if(!this.hasValue()||!D)return C?null:Q.createElement(f,R({},S,{key:"placeholder",isDisabled:I,isFocused:y,innerProps:{id:this.getElementId("placeholder")}}),h);if(_)return w.map(function(E,T){var x=E===v,j="".concat(i.getOptionLabel(E),"-").concat(i.getOptionValue(E));return Q.createElement(o,R({},S,{components:{Container:u,Label:s,Remove:c},isFocused:x,isDisabled:I,key:j,index:T,removeProps:{onClick:function(){return i.removeValue(E)},onTouchEnd:function(){return i.removeValue(E)},onMouseDown:function(ne){ne.preventDefault()}},data:E}),i.formatOptionLabel(E,"value"))});if(C)return null;var p=w[0];return Q.createElement(l,R({},S,{data:p,isDisabled:I}),this.formatOptionLabel(p,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),a=i.ClearIndicator,o=this.commonProps,u=this.props,s=u.isDisabled,c=u.isLoading,l=this.state.isFocused;if(!this.isClearable()||!a||s||!this.hasValue()||c)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return Q.createElement(a,R({},o,{innerProps:f,isFocused:l}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),a=i.LoadingIndicator,o=this.commonProps,u=this.props,s=u.isDisabled,c=u.isLoading,l=this.state.isFocused;if(!a||!c)return null;var f={"aria-hidden":"true"};return Q.createElement(a,R({},o,{innerProps:f,isDisabled:s,isFocused:l}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),a=i.DropdownIndicator,o=i.IndicatorSeparator;if(!a||!o)return null;var u=this.commonProps,s=this.props.isDisabled,c=this.state.isFocused;return Q.createElement(o,R({},u,{isDisabled:s,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),a=i.DropdownIndicator;if(!a)return null;var o=this.commonProps,u=this.props.isDisabled,s=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return Q.createElement(a,R({},o,{innerProps:c,isDisabled:u,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,a=this.getComponents(),o=a.Group,u=a.GroupHeading,s=a.Menu,c=a.MenuList,l=a.MenuPortal,f=a.LoadingMessage,S=a.NoOptionsMessage,g=a.Option,D=this.commonProps,I=this.state.focusedOption,_=this.props,C=_.captureMenuScroll,h=_.inputValue,O=_.isLoading,w=_.loadingMessage,v=_.minMenuHeight,y=_.maxMenuHeight,p=_.menuIsOpen,E=_.menuPlacement,T=_.menuPosition,x=_.menuPortalTarget,j=_.menuShouldBlockScroll,H=_.menuShouldScrollIntoView,ne=_.noOptionsMessage,ee=_.onMenuScrollToTop,F=_.onMenuScrollToBottom;if(!p)return null;var k=function(U,G){var W=U.type,J=U.data,V=U.isDisabled,oe=U.isSelected,xe=U.label,Re=U.value,nr=I===J,Tt=V?void 0:function(){return i.onOptionHover(J)},ja=V?void 0:function(){return i.selectOption(J)},ti="".concat(i.getElementId("option"),"-").concat(G),jr={id:ti,onClick:ja,onMouseMove:Tt,onMouseOver:Tt,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:oe};return Q.createElement(g,R({},D,{innerProps:jr,data:J,isDisabled:V,isSelected:oe,key:ti,label:xe,type:W,value:Re,isFocused:nr,innerRef:nr?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(U.data,"menu"))},N;if(this.hasOptions())N=this.getCategorizedOptions().map(function(A){if(A.type==="group"){var U=A.data,G=A.options,W=A.index,J="".concat(i.getElementId("group"),"-").concat(W),V="".concat(J,"-heading");return Q.createElement(o,R({},D,{key:J,data:U,options:G,Heading:u,headingProps:{id:V,data:A.data},label:i.formatGroupLabel(A.data)}),A.options.map(function(oe){return k(oe,"".concat(W,"-").concat(oe.index))}))}else if(A.type==="option")return k(A,"".concat(A.index))});else if(O){var B=w({inputValue:h});if(B===null)return null;N=Q.createElement(f,D,B)}else{var X=ne({inputValue:h});if(X===null)return null;N=Q.createElement(S,D,X)}var ce={minMenuHeight:v,maxMenuHeight:y,menuPlacement:E,menuPosition:T,menuShouldScrollIntoView:H},P=Q.createElement(w0,R({},D,ce),function(A){var U=A.ref,G=A.placerProps,W=G.placement,J=G.maxHeight;return Q.createElement(s,R({},D,ce,{innerRef:U,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:O,placement:W}),Q.createElement(tI,{captureEnabled:C,onTopArrive:ee,onBottomArrive:F,lockEnabled:j},function(V){return Q.createElement(c,R({},D,{innerRef:function(xe){i.getMenuListRef(xe),V(xe)},innerProps:{role:"listbox","aria-multiselectable":D.isMulti,id:i.getElementId("listbox")},isLoading:O,maxHeight:J,focusedOption:I}),N)}))});return x||T==="fixed"?Q.createElement(l,R({},D,{appendTo:x,controlElement:this.controlRef,menuPlacement:E,menuPosition:T}),P):P}},{key:"renderFormField",value:function(){var i=this,a=this.props,o=a.delimiter,u=a.isDisabled,s=a.isMulti,c=a.name,l=a.required,f=this.state.selectValue;if(l&&!this.hasValue()&&!u)return Q.createElement(iI,{name:c,onFocus:this.onValueInputFocus});if(!(!c||u))if(s)if(o){var S=f.map(function(I){return i.getOptionValue(I)}).join(o);return Q.createElement("input",{name:c,type:"hidden",value:S})}else{var g=f.length>0?f.map(function(I,_){return Q.createElement("input",{key:"i-".concat(_),name:c,type:"hidden",value:i.getOptionValue(I)})}):Q.createElement("input",{name:c,type:"hidden",value:""});return Q.createElement("div",null,g)}else{var D=f[0]?this.getOptionValue(f[0]):"";return Q.createElement("input",{name:c,type:"hidden",value:D})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,a=this.state,o=a.ariaSelection,u=a.focusedOption,s=a.focusedValue,c=a.isFocused,l=a.selectValue,f=this.getFocusableOptions();return Q.createElement(G1,R({},i,{id:this.getElementId("live-region"),ariaSelection:o,focusedOption:u,focusedValue:s,isFocused:c,selectValue:l,focusableOptions:f,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),a=i.Control,o=i.IndicatorsContainer,u=i.SelectContainer,s=i.ValueContainer,c=this.props,l=c.className,f=c.id,S=c.isDisabled,g=c.menuIsOpen,D=this.state.isFocused,I=this.commonProps=this.getCommonProps();return Q.createElement(u,R({},I,{className:l,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:S,isFocused:D}),this.renderLiveRegion(),Q.createElement(a,R({},I,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:S,isFocused:D,menuIsOpen:g}),Q.createElement(s,R({},I,{isDisabled:S}),this.renderPlaceholderOrValue(),this.renderInput()),Q.createElement(o,R({},I,{isDisabled:S}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,a){var o=a.prevProps,u=a.clearFocusValueOnUpdate,s=a.inputIsHiddenAfterUpdate,c=a.ariaSelection,l=a.isFocused,f=a.prevWasFocused,S=a.instancePrefix,g=i.options,D=i.value,I=i.menuIsOpen,_=i.inputValue,C=i.isMulti,h=Wn(D),O={};if(o&&(D!==o.value||g!==o.options||I!==o.menuIsOpen||_!==o.inputValue)){var w=I?SI(i,h):[],v=I?al(Zn(i,h),"".concat(S,"-option")):[],y=u?yI(a,h):null,p=bI(a,w),E=Pa(v,p);O={selectValue:h,focusedOption:p,focusedOptionId:E,focusableOptionsWithIds:v,focusedValue:y,clearFocusValueOnUpdate:!1}}var T=s!=null&&i!==o?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},x=c,j=l&&f;return l&&!j&&(x={value:kr(C,h,h[0]||null),options:h,action:"initial-input-focus"},j=!f),(c==null?void 0:c.action)==="initial-input-focus"&&(x=null),L(L(L({},O),T),{},{prevProps:i,ariaSelection:x,prevWasFocused:j})}}]),r}($.Component);Ma.defaultProps=vI;var _I=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function fl(e){var t=e.defaultInputValue,r=t===void 0?"":t,n=e.defaultMenuIsOpen,i=n===void 0?!1:n,a=e.defaultValue,o=a===void 0?null:a,u=e.inputValue,s=e.menuIsOpen,c=e.onChange,l=e.onInputChange,f=e.onMenuClose,S=e.onMenuOpen,g=e.value,D=We(e,_I),I=$.useState(u!==void 0?u:r),_=De(I,2),C=_[0],h=_[1],O=$.useState(s!==void 0?s:i),w=De(O,2),v=w[0],y=w[1],p=$.useState(g!==void 0?g:o),E=De(p,2),T=E[0],x=E[1],j=$.useCallback(function(B,X){typeof c=="function"&&c(B,X),x(B)},[c]),H=$.useCallback(function(B,X){var ce;typeof l=="function"&&(ce=l(B,X)),h(ce!==void 0?ce:B)},[l]),ne=$.useCallback(function(){typeof S=="function"&&S(),y(!0)},[S]),ee=$.useCallback(function(){typeof f=="function"&&f(),y(!1)},[f]),F=u!==void 0?u:C,k=s!==void 0?s:v,N=g!==void 0?g:T;return L(L({},D),{},{inputValue:F,menuIsOpen:k,onChange:j,onInputChange:H,onMenuClose:ee,onMenuOpen:ne,value:N})}var OI=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function pl(e){var t=e.defaultOptions,r=t===void 0?!1:t,n=e.cacheOptions,i=n===void 0?!1:n,a=e.loadOptions;e.options;var o=e.isLoading,u=o===void 0?!1:o,s=e.onInputChange,c=e.filterOption,l=c===void 0?null:c,f=We(e,OI),S=f.inputValue,g=$.useRef(void 0),D=$.useRef(!1),I=$.useState(Array.isArray(r)?r:void 0),_=De(I,2),C=_[0],h=_[1],O=$.useState(typeof S<"u"?S:""),w=De(O,2),v=w[0],y=w[1],p=$.useState(r===!0),E=De(p,2),T=E[0],x=E[1],j=$.useState(void 0),H=De(j,2),ne=H[0],ee=H[1],F=$.useState([]),k=De(F,2),N=k[0],B=k[1],X=$.useState(!1),ce=De(X,2),P=ce[0],A=ce[1],U=$.useState({}),G=De(U,2),W=G[0],J=G[1],V=$.useState(void 0),oe=De(V,2),xe=oe[0],Re=oe[1],nr=$.useState(void 0),Tt=De(nr,2),ja=Tt[0],ti=Tt[1];i!==ja&&(J({}),ti(i)),r!==xe&&(h(Array.isArray(r)?r:void 0),Re(r)),$.useEffect(function(){return D.current=!0,function(){D.current=!1}},[]);var jr=$.useCallback(function(qr,ir){if(!a)return ir();var Be=a(qr,ir);Be&&typeof Be.then=="function"&&Be.then(ir,function(){return ir()})},[a]);$.useEffect(function(){r===!0&&jr(v,function(qr){D.current&&(h(qr||[]),x(!!g.current))})},[]);var IO=$.useCallback(function(qr,ir){var Be=d0(qr,ir,s);if(!Be){g.current=void 0,y(""),ee(""),B([]),x(!1),A(!1);return}if(i&&W[Be])y(Be),ee(Be),B(W[Be]),x(!1),A(!1);else{var OO=g.current={};y(Be),x(!0),A(!ne),jr(Be,function(qa){D&&OO===g.current&&(g.current=void 0,x(!1),ee(Be),B(qa||[]),A(!1),J(qa?L(L({},W),{},Jt({},Be,qa)):W))})}},[i,jr,ne,W,s]),_O=P?[]:v&&ne?N:C||[];return L(L({},f),{},{options:_O,isLoading:T||u,onInputChange:IO,filterOption:l})}var CI=$.forwardRef(function(e,t){var r=pl(e),n=fl(r);return Q.createElement(Ma,R({ref:t},n))}),DI=CI,EI=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],ml=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,i=String(t).toLowerCase(),a=String(n.getOptionValue(r)).toLowerCase(),o=String(n.getOptionLabel(r)).toLowerCase();return a===i||o===i},Na={formatCreateLabel:function(t){return'Create "'.concat(t,'"')},isValidNewOption:function(t,r,n,i){return!(!t||r.some(function(a){return ml(t,a,i)})||n.some(function(a){return ml(t,a,i)}))},getNewOptionData:function(t,r){return{label:r,value:t,__isNew__:!0}}};function wI(e){var t=e.allowCreateWhileLoading,r=t===void 0?!1:t,n=e.createOptionPosition,i=n===void 0?"last":n,a=e.formatCreateLabel,o=a===void 0?Na.formatCreateLabel:a,u=e.isValidNewOption,s=u===void 0?Na.isValidNewOption:u,c=e.getNewOptionData,l=c===void 0?Na.getNewOptionData:c,f=e.onCreateOption,S=e.options,g=S===void 0?[]:S,D=e.onChange,I=We(e,EI),_=I.getOptionValue,C=_===void 0?tl:_,h=I.getOptionLabel,O=h===void 0?el:h,w=I.inputValue,v=I.isLoading,y=I.isMulti,p=I.value,E=I.name,T=$.useMemo(function(){return s(w,Wn(p),g,{getOptionValue:C,getOptionLabel:O})?l(w,o(w)):void 0},[o,l,O,C,w,s,g,p]),x=$.useMemo(function(){return(r||!v)&&T?i==="first"?[T].concat(Zt(g)):[].concat(Zt(g),[T]):g},[r,i,v,T,g]),j=$.useCallback(function(H,ne){if(ne.action!=="select-option")return D(H,ne);var ee=Array.isArray(H)?H:[H];if(ee[ee.length-1]===T){if(f)f(w);else{var F=l(w,w),k={action:"create-option",name:E,option:F};D(kr(y,[].concat(Zt(Wn(p)),[F]),F),k)}return}D(H,ne)},[l,w,y,E,T,f,D,p]);return L(L({},I),{},{options:x,onChange:j})}var TI=$.forwardRef(function(e,t){var r=pl(e),n=fl(r),i=wI(n);return Q.createElement(Ma,R({ref:t},i))}),$I=TI,xI="[object Symbol]";function FI(e){return typeof e=="symbol"||Kt(e)&&zt(e)==xI}var PI=/\s/;function MI(e){for(var t=e.length;t--&&PI.test(e.charAt(t)););return t}var NI=/^\s+/;function kI(e){return e&&e.slice(0,MI(e)+1).replace(NI,"")}var gl=NaN,AI=/^[-+]0x[0-9a-f]+$/i,LI=/^0b[01]+$/i,jI=/^0o[0-7]+$/i,qI=parseInt;function hl(e){if(typeof e=="number")return e;if(FI(e))return gl;if(yt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=yt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=kI(e);var r=LI.test(e);return r||jI.test(e)?qI(e.slice(2),r?2:8):AI.test(e)?gl:+e}var ka=function(){return ze.Date.now()},VI="Expected a function",BI=Math.max,RI=Math.min;function GI(e,t,r){var n,i,a,o,u,s,c=0,l=!1,f=!1,S=!0;if(typeof e!="function")throw new TypeError(VI);t=hl(t)||0,yt(r)&&(l=!!r.leading,f="maxWait"in r,a=f?BI(hl(r.maxWait)||0,t):a,S="trailing"in r?!!r.trailing:S);function g(y){var p=n,E=i;return n=i=void 0,c=y,o=e.apply(E,p),o}function D(y){return c=y,u=setTimeout(C,t),l?g(y):o}function I(y){var p=y-s,E=y-c,T=t-p;return f?RI(T,a-E):T}function _(y){var p=y-s,E=y-c;return s===void 0||p>=t||p<0||f&&E>=a}function C(){var y=ka();if(_(y))return h(y);u=setTimeout(C,I(y))}function h(y){return u=void 0,S&&n?g(y):(n=i=void 0,o)}function O(){u!==void 0&&clearTimeout(u),c=0,n=s=i=u=void 0}function w(){return u===void 0?o:h(ka())}function v(){var y=ka(),p=_(y);if(n=arguments,i=this,s=y,p){if(u===void 0)return D(s);if(f)return clearTimeout(u),u=setTimeout(C,t),g(s)}return u===void 0&&(u=setTimeout(C,t)),o}return v.cancel=O,v.flush=w,v}function vl(e,t,r){const n=$.useRef(e);return n.current=e,$.useCallback(GI(function(){return n.current.apply(this,arguments)},t,r),[t,r==null?void 0:r.leading,r==null?void 0:r.trailing,r==null?void 0:r.maxWait])}const UI=e=>Array.isArray(e)?e:e?[e]:[],HI=e=>{const{selectedOptions:t,isDisabled:r=!1,creatable:n=!1,components:i,placeholder:a,showDropdown:o=!0,noOptionsMessageText:u="None"}=e,c={...e,styles:{option:l=>({...l,color:"#000"}),container:(l,f)=>({...l,zIndex:f.isFocused?10:l.zIndex}),multiValueRemove:(l,f)=>({...l,color:f.isFocused?l.color:"#333333"})},defaultOptions:!0,isClearable:!0,value:t??null,className:at("react-select",e.className),classNamePrefix:"react-select",noOptionsMessage:()=>u,placeholder:r?"":a,components:{...i,IndicatorSeparator:()=>null,...(!o||r)&&{DropdownIndicator:()=>null},...r&&{MultiValueRemove:()=>null}}};return n?b.jsx($I,{...c,isDisabled:r}):b.jsx(DI,{...c})},zI=e=>{const{values:t,isMulti:r,onSelect:n,creatable:i=!1,isValidNewOption:a,getNamedObject:o,loadOptions:u}=e,[s,c]=$.useState(!1),l=Fd(),f=$.useMemo(()=>{if(r&&t)return t.map(h=>({object:h,value:h.id}));if(t!=null&&t.length)return{object:t[0],value:t[0].id}},[t,r]),S=h=>{const O=UI(h);n==null||n(O.map(w=>w.object))},g=i&&e.onCreate?async h=>{try{c(!0);const{value:O,item:w,message:v}=await e.onCreate(h),y={object:w,value:O};S(r?[...f??[],y]:y),c(!1),l.success(b.jsxs("span",{children:[v,": ",b.jsx("b",{children:h})]}))}catch(O){l.error(O)}}:void 0,D=i&&o?(h,O)=>({value:"",object:o("",O)}):void 0,I=i&&a?(h,O,w)=>a(h,w.map(v=>v.object)):void 0,C=vl((h,O)=>{u(h).then(O)},100);return b.jsx(HI,{...e,loadOptions:C,isLoading:e.isLoading||s,onChange:S,selectedOptions:f,onCreateOption:g,getNewOptionData:D,isValidNewOption:I})};function Sl(e){return{value:e.id,object:e}}function WI(e){return YI(e)!==e}function YI(e){const t=$.useRef();return $.useEffect(()=>{t.current=e},[e]),t.current}const yl=e=>{const{error:t,message:r=b.jsx(Fe.FormattedMessage,{id:"errors.header"})}=e;return b.jsx("div",{className:"ErrorMessage-container",children:b.jsxs(fe.Alert,{variant:"danger",className:"ErrorMessage",children:[b.jsxs(fe.Alert.Heading,{className:"ErrorMessage-header",children:[b.jsx(dt,{icon:_e.faWarning}),r]}),b.jsx("div",{className:"ErrorMessage-content code",children:t})]})})},bl="LoadingIndicator",KI=`${bl}-message`,QI=Me("LoadingIndicator",({message:e,inline:t=!1,small:r=!1,card:n=!1})=>{const a=Fe.useIntl().formatMessage({id:"loading.generic"});return b.jsxs("div",{className:at(bl,{inline:t,small:r,"card-based":n}),children:[b.jsx(fe.Spinner,{animation:"border",role:"status",size:r?"sm":void 0,children:b.jsx("span",{className:"sr-only",children:a})}),e!==""&&b.jsx("h4",{className:KI,children:e??a})]})}),Il=Me("HoverPopover",({enterDelay:e=200,leaveDelay:t=200,content:r,children:n,className:i,placement:a="top",popperConfig:o,onOpen:u,onClose:s,target:c})=>{const[l,f]=$.useState(!1),[S,g]=$.useState(null),D=$.useRef(),I=$.useRef(),_=$.useRef(`hover-popover-${Math.random().toString(36).slice(2)}`),C=$.useCallback(v=>{g(v)},[]),h=$.useCallback(()=>(c==null?void 0:c.current)??S,[c,S]),O=$.useCallback(()=>{window.clearTimeout(I.current),D.current=window.setTimeout(()=>{f(!0),u==null||u()},e)},[e,u]),w=$.useCallback(()=>{window.clearTimeout(D.current),I.current=window.setTimeout(()=>{f(!1),s==null||s()},t)},[t,s]);return $.useEffect(()=>()=>{window.clearTimeout(D.current),window.clearTimeout(I.current)},[]),b.jsxs(b.Fragment,{children:[b.jsx("div",{className:i,onMouseEnter:O,onMouseLeave:w,ref:C,children:n}),h()&&b.jsx(fe.Overlay,{show:l,placement:a,target:h,container:document.body,popperConfig:o,children:b.jsx(fe.Popover,{onMouseEnter:O,onMouseLeave:w,id:_.current,className:"hover-popover-content",children:r})})]})});Me("WarningHoverPopover",({children:e,...t})=>b.jsx(Il,{...t,className:"warning-hover-popover",children:b.jsx(dt,{icon:_e.faExclamationTriangle})}));function JI(e){return e.title?e.title:e.files&&e.files.length>0?Vt.fileNameFromPath(e.files[0].path):e.folder?Vt.fileNameFromPath(e.folder.path):""}function ZI(e){return e.title?e.title:e.files&&e.files.length>0?Vt.fileNameFromPath(e.files[0].path):""}function Lr(e,t){t&&t.length>0&&e.push(...t)}const XI=(e,t,r)=>{if(!e.id)return"#";const n=new re(Y.Scenes,void 0),i=new Rt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),n.criteria.push(i),Lr(n.criteria,r),`/scenes?${n.makeQueryParameters()}`},e_=(e,t,r)=>{if(!e.id)return"#";const n=new re(Y.Images,void 0),i=new Rt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),n.criteria.push(i),Lr(n.criteria,r),`/images?${n.makeQueryParameters()}`},t_=(e,t,r)=>{if(!e.id)return"#";const n=new re(Y.Galleries,void 0),i=new Rt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),n.criteria.push(i),Lr(n.criteria,r),`/galleries?${n.makeQueryParameters()}`},r_=(e,t,r)=>{if(!e.id)return"#";const n=new re(Y.Groups,void 0),i=new Rt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),n.criteria.push(i),Lr(n.criteria,r),`/groups?${n.makeQueryParameters()}`},n_=e=>{if(!e.id)return"#";const t=new re(Y.SceneMarkers,void 0),r=new Rt;return r.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t.criteria.push(r),`/scenes/markers?${t.makeQueryParameters()}`},i_=e=>{if(!e.id)return"#";const t=new re(Y.Performers,void 0),r=new Bu;return r.value=`${e.country}`,t.criteria.push(r),`/performers?${t.makeQueryParameters()}`},a_=e=>{if(!e.id)return"#";const t=new re(Y.Scenes,void 0),r=new Ut;return r.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/scenes?${t.makeQueryParameters()}`},o_=e=>{if(!e.id)return"#";const t=new re(Y.Images,void 0),r=new Ut;return r.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/images?${t.makeQueryParameters()}`},s_=e=>{if(!e.id)return"#";const t=new re(Y.Galleries,void 0),r=new Ut;return r.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/galleries?${t.makeQueryParameters()}`},u_=e=>{if(!e.id)return"#";const t=new re(Y.Groups,void 0),r=new Ut;return r.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/groups?${t.makeQueryParameters()}`},c_=e=>{if(!e.id)return"#";const t=new re(Y.Performers,void 0),r=new Ut;return r.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/performers?${t.makeQueryParameters()}`},l_=e=>{if(!e.id)return"#";const t=new re(Y.Studios,void 0),r=new Fs;return r.value=[{id:e.id,label:e.name||`Studio ${e.id}`}],t.criteria.push(r),`/studios?${t.makeQueryParameters()}`},d_=e=>{if(!e.id)return"#";const t=new re(Y.Scenes,void 0),r=new Tr(Sn);return r.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/scenes?${t.makeQueryParameters()}`},f_=e=>`/tags/${e}`,p_=e=>{if(!e.id)return"#";const t=new re(Y.Tags,void 0),r=new fn(Ns);return r.value={items:[{id:e.id,label:e.name||`Tag ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/tags?${t.makeQueryParameters()}`},m_=e=>{if(!e.id)return"#";const t=new re(Y.Tags,void 0),r=new fn(Ms);return r.value={items:[{id:e.id,label:e.name||`Tag ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/tags?${t.makeQueryParameters()}`};function Ct(e,t){const r=new re(e,void 0),n=new fn(st);return n.value={items:[{id:t.id,label:t.name||`Tag ${t.id}`}],excluded:[],depth:0},r.criteria.push(n),r.makeQueryParameters()}const g_=e=>`/scenes?${Ct(Y.Scenes,e)}`,h_=e=>`/performers?${Ct(Y.Performers,e)}`,v_=e=>`/studios?${Ct(Y.Studios,e)}`,S_=e=>`/scenes/markers?${Ct(Y.SceneMarkers,e)}`,y_=e=>`/galleries?${Ct(Y.Galleries,e)}`,b_=e=>`/images?${Ct(Y.Images,e)}`,I_=e=>`/groups?${Ct(Y.Groups,e)}`,__=e=>!e.id||!e.scene?"#":`/scenes/${e.scene.id}?t=${e.seconds}`,O_=e=>{if(!e)return"#";const t=new re(Y.Scenes,void 0),r=new ea;return r.value={value:e},t.criteria.push(r),`/scenes?${t.makeQueryParameters()}`},C_=e=>{if(!e)return"#";const t=new re(Y.Images,void 0),r=new ea;return r.value={value:e},t.criteria.push(r),`/images?${t.makeQueryParameters()}`},D_=(e,t)=>{if(!e.id)return"#";const r=new re(Y.Images,void 0),n=new Du;return n.value=[{id:e.id,label:JI(e)}],r.criteria.push(n),Lr(r.criteria,t),`/images?${r.makeQueryParameters()}`};function ei(e,t){const r=new He(e);return r.modifier=m.Equals,r.value=t,r}const nt={makePerformerScenesUrl:XI,makePerformerImagesUrl:e_,makePerformerGalleriesUrl:t_,makePerformerGroupsUrl:r_,makePerformerSceneMarkersUrl:n_,makePerformersCountryUrl:i_,makeStudioScenesUrl:a_,makeStudioImagesUrl:o_,makeStudioGalleriesUrl:s_,makeStudioGroupsUrl:u_,makeStudioPerformersUrl:c_,makeTagUrl:f_,makeGroupUrl:e=>`/groups/${e}`,makeParentTagsUrl:p_,makeChildTagsUrl:m_,makeTagSceneMarkersUrl:S_,makeTagScenesUrl:g_,makeTagPerformersUrl:h_,makeTagStudiosUrl:v_,makeTagGalleriesUrl:y_,makeTagImagesUrl:b_,makeTagGroupsUrl:I_,makeScenesPHashMatchUrl:O_,makeSceneMarkerUrl:__,makeImagesPHashMatchUrl:C_,makeGroupScenesUrl:d_,makeChildStudiosUrl:l_,makeGalleryImagesUrl:D_,makeDirectorScenesUrl:e=>{if(e.length===0)return"#";const t=new re(Y.Scenes,void 0);return t.criteria.push(ei(te("director"),e)),`/scenes?${t.makeQueryParameters()}`},makePhotographerGalleriesUrl:e=>{if(e.length===0)return"#";const t=new re(Y.Galleries,void 0);return t.criteria.push(ei(te("photographer"),e)),`/galleries?${t.makeQueryParameters()}`},makePhotographerImagesUrl:e=>{if(e.length===0)return"#";const t=new re(Y.Images,void 0);return t.criteria.push(ei(te("photographer"),e)),`/images?${t.makeQueryParameters()}`},makeDirectorGroupsUrl:e=>{if(e.length===0)return"#";const t=new re(Y.Groups,void 0);return t.criteria.push(ei(te("director"),e)),`/groups?${t.makeQueryParameters()}`},makeContainingGroupsUrl:e=>{if(!e.id)return"#";const t=new re(Y.Groups,void 0),r=new Tr(Pu);return r.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/groups?${t.makeQueryParameters()}`},makeSubGroupsUrl:e=>{if(!e.id)return"#";const t=new re(Y.Groups,void 0),r=new Tr(Fu);return r.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/groups?${t.makeQueryParameters()}`},makeSceneMarkersSceneUrl:e=>{if(!e.id)return"#";const t=new re(Y.SceneMarkers,void 0),r=new Ts;return r.value=[{id:e.id,label:ZI(e)}],t.criteria.push(r),`/scenes/markers?${t.makeQueryParameters()}`}},Aa="TruncatedText",E_=`${Aa}-tooltip`,_l=Me("TruncatedText",({text:e,className:t,lineCount:r=1,placement:n="bottom",delay:i=1e3})=>{const[a,o]=$.useState(!1),u=$.useRef(null),s=vl(()=>o(!0),i);if(!e)return null;const c=S=>{(S.offsetWidth<S.scrollWidth||S.offsetHeight+10<S.scrollHeight)&&s()},l=()=>{s.cancel(),o(!1)},f=b.jsx(fe.Overlay,{target:u.current,show:a,placement:n,children:b.jsx(fe.Tooltip,{id:Aa,className:E_,children:e})});return b.jsxs("div",{className:at(Aa,t),style:{WebkitLineClamp:r},ref:u,onMouseEnter:S=>c(S.currentTarget),onFocus:S=>c(S.currentTarget),onMouseLeave:l,onBlur:l,children:[e,f]})}),w_=()=>window.matchMedia("only screen and (max-width: 576px)").matches,T_=()=>window.matchMedia("(pointer: coarse)").matches;function $_(e){return window.matchMedia(e).matches}const x_={isMobile:w_,isTouch:T_,matchesMediaQuery:$_};var F_={exports:{}};(function(e){(function(t,r,n){if(!t)return;for(var i={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},a={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},o={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},u={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},s,c=1;c<20;++c)i[111+c]="f"+c;for(c=0;c<=9;++c)i[c+96]=c.toString();function l(p,E,T){if(p.addEventListener){p.addEventListener(E,T,!1);return}p.attachEvent("on"+E,T)}function f(p){if(p.type=="keypress"){var E=String.fromCharCode(p.which);return p.shiftKey||(E=E.toLowerCase()),E}return i[p.which]?i[p.which]:a[p.which]?a[p.which]:String.fromCharCode(p.which).toLowerCase()}function S(p,E){return p.sort().join(",")===E.sort().join(",")}function g(p){var E=[];return p.shiftKey&&E.push("shift"),p.altKey&&E.push("alt"),p.ctrlKey&&E.push("ctrl"),p.metaKey&&E.push("meta"),E}function D(p){if(p.preventDefault){p.preventDefault();return}p.returnValue=!1}function I(p){if(p.stopPropagation){p.stopPropagation();return}p.cancelBubble=!0}function _(p){return p=="shift"||p=="ctrl"||p=="alt"||p=="meta"}function C(){if(!s){s={};for(var p in i)p>95&&p<112||i.hasOwnProperty(p)&&(s[i[p]]=p)}return s}function h(p,E,T){return T||(T=C()[p]?"keydown":"keypress"),T=="keypress"&&E.length&&(T="keydown"),T}function O(p){return p==="+"?["+"]:(p=p.replace(/\+{2}/g,"+plus"),p.split("+"))}function w(p,E){var T,x,j,H=[];for(T=O(p),j=0;j<T.length;++j)x=T[j],u[x]&&(x=u[x]),E&&E!="keypress"&&o[x]&&(x=o[x],H.push("shift")),_(x)&&H.push(x);return E=h(x,H,E),{key:x,modifiers:H,action:E}}function v(p,E){return p===null||p===r?!1:p===E?!0:v(p.parentNode,E)}function y(p){var E=this;if(p=p||r,!(E instanceof y))return new y(p);E.target=p,E._callbacks={},E._directMap={};var T={},x,j=!1,H=!1,ne=!1;function ee(P){P=P||{};var A=!1,U;for(U in T){if(P[U]){A=!0;continue}T[U]=0}A||(ne=!1)}function F(P,A,U,G,W,J){var V,oe,xe=[],Re=U.type;if(!E._callbacks[P])return[];for(Re=="keyup"&&_(P)&&(A=[P]),V=0;V<E._callbacks[P].length;++V)if(oe=E._callbacks[P][V],!(!G&&oe.seq&&T[oe.seq]!=oe.level)&&Re==oe.action&&(Re=="keypress"&&!U.metaKey&&!U.ctrlKey||S(A,oe.modifiers))){var nr=!G&&oe.combo==W,Tt=G&&oe.seq==G&&oe.level==J;(nr||Tt)&&E._callbacks[P].splice(V,1),xe.push(oe)}return xe}function k(P,A,U,G){E.stopCallback(A,A.target||A.srcElement,U,G)||P(A,U)===!1&&(D(A),I(A))}E._handleKey=function(P,A,U){var G=F(P,A,U),W,J={},V=0,oe=!1;for(W=0;W<G.length;++W)G[W].seq&&(V=Math.max(V,G[W].level));for(W=0;W<G.length;++W){if(G[W].seq){if(G[W].level!=V)continue;oe=!0,J[G[W].seq]=1,k(G[W].callback,U,G[W].combo,G[W].seq);continue}oe||k(G[W].callback,U,G[W].combo)}var xe=U.type=="keypress"&&H;U.type==ne&&!_(P)&&!xe&&ee(J),H=oe&&U.type=="keydown"};function N(P){typeof P.which!="number"&&(P.which=P.keyCode);var A=f(P);if(A){if(P.type=="keyup"&&j===A){j=!1;return}E.handleKey(A,g(P),P)}}function B(){clearTimeout(x),x=setTimeout(ee,1e3)}function X(P,A,U,G){T[P]=0;function W(Re){return function(){ne=Re,++T[P],B()}}function J(Re){k(U,Re,P),G!=="keyup"&&(j=f(Re)),setTimeout(ee,10)}for(var V=0;V<A.length;++V){var oe=V+1===A.length,xe=oe?J:W(G||w(A[V+1]).action);ce(A[V],xe,G,P,V)}}function ce(P,A,U,G,W){E._directMap[P+":"+U]=A,P=P.replace(/\s+/g," ");var J=P.split(" "),V;if(J.length>1){X(P,J,A,U);return}V=w(P,U),E._callbacks[V.key]=E._callbacks[V.key]||[],F(V.key,V.modifiers,{type:V.action},G,P,W),E._callbacks[V.key][G?"unshift":"push"]({callback:A,modifiers:V.modifiers,action:V.action,seq:G,level:W,combo:P})}E._bindMultiple=function(P,A,U){for(var G=0;G<P.length;++G)ce(P[G],A,U)},l(p,"keypress",N),l(p,"keydown",N),l(p,"keyup",N)}y.prototype.bind=function(p,E,T){var x=this;return p=p instanceof Array?p:[p],x._bindMultiple.call(x,p,E,T),x},y.prototype.unbind=function(p,E){var T=this;return T.bind.call(T,p,function(){},E)},y.prototype.trigger=function(p,E){var T=this;return T._directMap[p+":"+E]&&T._directMap[p+":"+E]({},p),T},y.prototype.reset=function(){var p=this;return p._callbacks={},p._directMap={},p},y.prototype.stopCallback=function(p,E){var T=this;if((" "+E.className+" ").indexOf(" mousetrap ")>-1||v(E,T.target))return!1;if("composedPath"in p&&typeof p.composedPath=="function"){var x=p.composedPath()[0];x!==p.target&&(E=x)}return E.tagName=="INPUT"||E.tagName=="SELECT"||E.tagName=="TEXTAREA"||E.isContentEditable},y.prototype.handleKey=function(){var p=this;return p._handleKey.apply(p,arguments)},y.addKeycodes=function(p){for(var E in p)p.hasOwnProperty(E)&&(i[E]=p[E]);s=null},y.init=function(){var p=y(r);for(var E in p)E.charAt(0)!=="_"&&(y[E]=function(T){return function(){return p[T].apply(p,arguments)}}(E))},y.init(),t.Mousetrap=y,e.exports&&(e.exports=y)})(typeof window<"u"?window:null,typeof window<"u"?document:null)})(F_),$.createContext(null);const P_=$.createContext(null),M_={selectable:!1,selectedIds:new Set,getSelected:()=>[],onSelectChange:()=>{},onSelectAll:()=>{},onSelectNone:()=>{},onInvertSelection:()=>{},items:[],hasSelection:!1,selectedItems:[]};function N_(){const e=$.useContext(P_);return e===null?M_:e}$.createContext(null);var Ol=(e=>(e[e.BEFORE=0]="BEFORE",e[e.AFTER=1]="AFTER",e))(Ol||{});function k_(e){const{selectedIds:t}=N_(),[r,n]=$.useState(!1),[i,a]=$.useState(!1),[o,u]=$.useState(),s=e.onSelectedChanged&&e.selecting,c=!!e.objectId&&e.onMove&&r,l=s||c;function f(h){if(!l){h.preventDefault();return}if(!r&&e.selecting)h.dataTransfer.setData("text/plain",""),h.dataTransfer.effectAllowed="copy",h.stopPropagation();else if(r&&e.objectId){if(t.size>1&&t.has(e.objectId)){const O=Array.from(t.values()).join(",");h.dataTransfer.setData("text/plain",O)}else a(!0),h.dataTransfer.setData("text/plain",e.objectId);h.dataTransfer.effectAllowed="move",h.stopPropagation()}}function S(h){const O=h.nativeEvent.offsetX<h.currentTarget.clientWidth/2;O&&o!==0?u(0):!O&&o!==1&&u(1)}function g(h){const O=h,w=!1;if(O.dataTransfer.effectAllowed==="copy"){if(!e.onSelectedChanged)return;e.selecting&&!e.selected&&e.onSelectedChanged(!0,w),O.dataTransfer.dropEffect="copy",O.preventDefault()}else O.dataTransfer.effectAllowed==="move"&&!i?(S(h),O.dataTransfer.dropEffect="move",O.preventDefault()):O.dataTransfer.dropEffect="none"}function D(h){h.currentTarget.contains(h.relatedTarget)||u(void 0)}function I(h){h.dataTransfer.effectAllowed!=="move"||i||(S(h),h.preventDefault())}function _(){u(void 0),a(!1)}function C(h){const O=h;if(O.dataTransfer.effectAllowed==="copy"||!e.onMove||!e.objectId)return;const w=O.dataTransfer.getData("text/plain").split(","),v=e.objectId,y=o===1;e.onMove(w,v,y),_()}return{inHandle:r,setInHandle:n,moveTarget:o,dragProps:{draggable:l||void 0,onDragStart:f,onDragEnter:g,onDragLeave:D,onDragOver:I,onDragEnd:_,onDrop:C}}}const A_=e=>b.jsx("a",{target:"_blank",rel:"noopener noreferrer",...e}),L_=({selected:e=!1,onSelectedChanged:t})=>{let r=!1;return b.jsx(fe.Form.Control,{type:"checkbox",className:"card-check mousetrap",checked:e,onChange:()=>t(!e,r),onClick:n=>{r=n.shiftKey,n.stopPropagation()}})},j_=({setInHandle:e})=>{function t(){e(!0)}function r(){e(!1)}return b.jsx("span",{onMouseEnter:t,onMouseLeave:r,children:b.jsx(dt,{className:"card-drag-handle",icon:_e.faGripLines})})},q_=({children:e})=>b.jsx("div",{className:"card-controls",children:e}),V_=({dragSide:e})=>e===void 0?null:b.jsx("div",{className:`move-target move-target-${e===Ol.BEFORE?"before":"after"}`});function Cl(e){const{url:t,linkClassName:r,onClick:n,children:i}=e;return/^https?:\/\//i.test(t)?b.jsx(A_,{href:t,className:r,onClick:n,children:i}):b.jsx($t.Link,{to:t,className:r,onClick:n,children:i})}const B_=Me("GridCard",e=>{const{setInHandle:t,moveTarget:r,dragProps:n}=k_({selecting:e.selecting||!1,selected:e.selected||!1,onSelectedChanged:e.onSelectedChanged,objectId:e.objectId,onMove:e.onMove});function i(u){const{shiftKey:s}=u;e.onSelectedChanged&&e.selecting&&(e.onSelectedChanged(!e.selected,s),u.preventDefault(),u.stopPropagation())}function a(){if(e.interactiveHeatmap)return b.jsx("img",{loading:"lazy",src:e.interactiveHeatmap,alt:"interactive heatmap",className:"interactive-heatmap"})}function o(){if(e.resumeTime&&e.duration&&e.duration>e.resumeTime){const u=100/e.duration*e.resumeTime,s=u+"%";return b.jsx("div",{title:Math.round(u)+"%",className:"progress-bar",children:b.jsx("div",{style:{width:s},className:"progress-indicator"})})}}return b.jsxs(fe.Card,{className:at(e.className,"grid-card"),onClick:i,...n,style:e.width&&!x_.isMobile()?{width:`${e.width}px`}:{},children:[r!==void 0&&b.jsx(V_,{dragSide:r}),b.jsxs(q_,{children:[e.onSelectedChanged&&b.jsx(L_,{selected:e.selected,onSelectedChanged:e.onSelectedChanged}),!!e.objectId&&e.onMove&&b.jsx(j_,{setInHandle:t})]}),b.jsxs("div",{className:at(e.thumbnailSectionClassName,"thumbnail-section"),children:[b.jsx(Cl,{url:e.url,linkClassName:e.linkClassName,onClick:i,children:e.image}),e.overlays,o()]}),a(),b.jsxs("div",{className:"card-section",children:[b.jsx(Cl,{url:e.url,onClick:i,children:b.jsxs("h5",{className:"card-section-title flex-aligned",children:[e.pretitleIcon,b.jsx(_l,{text:e.title,lineCount:2})]})}),e.details]}),e.popovers]})}),R_=({count:e})=>{const{configuration:t}=ui();if(!((t==null?void 0:t.ui.abbreviateCounters)??!1))return b.jsx("span",{children:e});const n=Vt.abbreviateCounter(e);return b.jsxs("span",{children:[b.jsx(Fe.FormattedNumber,{value:n.size,maximumFractionDigits:n.digits}),n.unit]})},Dt=({className:e,url:t,type:r,count:n,showZero:i=!0})=>{const a=Fe.useIntl();if(!i&&n===0)return null;function o(){switch(r){case"scene":return _e.faPlayCircle;case"image":return _e.faImage;case"gallery":return _e.faImages;case"marker":return _e.faMapMarkerAlt;case"group":case"sub_group":return _e.faFilm;case"performer":return _e.faUser;case"studio":return _e.faVideo}}function u(){switch(r){case"scene":return{one:"scene",other:"scenes"};case"image":return{one:"image",other:"images"};case"gallery":return{one:"gallery",other:"galleries"};case"marker":return{one:"marker",other:"markers"};case"group":return{one:"group",other:"groups"};case"sub_group":return{one:"sub_group",other:"sub_groups"};case"performer":return{one:"performer",other:"performers"};case"studio":return{one:"studio",other:"studios"}}}function s(){const c=a.formatPlural(n),l=u(),f=a.formatMessage({id:l[c]||l.other});return`${n} ${f}`}return b.jsx(fe.OverlayTrigger,{overlay:b.jsx(fe.Tooltip,{id:`${r}-count-tooltip`,children:s()}),placement:"bottom",children:b.jsx($t.Link,{className:e,to:t,children:b.jsxs(fe.Button,{className:"minimal",children:[b.jsx(dt,{icon:o()}),b.jsx(R_,{count:n})]})})})},G_=Me("TagCard.Popovers",({tag:e})=>b.jsxs(b.Fragment,{children:[b.jsx("hr",{}),b.jsxs(fe.ButtonGroup,{className:"card-popovers",children:[b.jsx(Dt,{className:"scene-count",type:"scene",count:e.scene_count,url:nt.makeTagScenesUrl(e),showZero:!1}),b.jsx(Dt,{className:"image-count",type:"image",count:e.image_count,url:nt.makeTagImagesUrl(e),showZero:!1}),b.jsx(Dt,{className:"gallery-count",type:"gallery",count:e.gallery_count,url:nt.makeTagGalleriesUrl(e),showZero:!1}),b.jsx(Dt,{className:"group-count",type:"group",count:e.group_count,url:nt.makeTagGroupsUrl(e),showZero:!1}),b.jsx(Dt,{className:"marker-count",type:"marker",count:e.scene_marker_count,url:nt.makeTagSceneMarkersUrl(e),showZero:!1}),b.jsx(Dt,{className:"performer-count",type:"performer",count:e.performer_count,url:nt.makeTagPerformersUrl(e),showZero:!1}),b.jsx(Dt,{className:"studio-count",type:"studio",count:e.studio_count,url:nt.makeTagStudiosUrl(e),showZero:!1})]})]})),U_=Me("TagCard.Overlays",({tag:e})=>{const[t]=Op();function r(){return b.jsx($t.Link,{to:"",onClick:i=>i.preventDefault(),children:b.jsx(fe.Button,{className:at("minimal","mousetrap","favorite-button",e.favorite?"favorite":"not-favorite"),onClick:()=>n(!e.favorite),children:b.jsx(dt,{icon:_e.faHeart,size:"2x"})})})}function n(i){e.id&&t({variables:{input:{id:e.id,favorite:i}}})}return b.jsx(b.Fragment,{children:r()})}),H_=Me("TagCard.Details",({tag:e})=>{function t(){if(e.description)return b.jsx(_l,{className:"tag-description",text:e.description,lineCount:3})}function r(){if(e.parents.length===1){const i=e.parents[0];return b.jsx("div",{className:"tag-parent-tags",children:b.jsx(Fe.FormattedMessage,{id:"sub_tag_of",values:{parent:b.jsx($t.Link,{to:`/tags/${i.id}`,children:i.name})}})})}if(e.parents.length>1)return b.jsx("div",{className:"tag-parent-tags",children:b.jsx(Fe.FormattedMessage,{id:"sub_tag_of",values:{parent:b.jsxs($t.Link,{to:nt.makeParentTagsUrl(e),children:[e.parents.length," ",b.jsx(Fe.FormattedMessage,{id:"countables.tags",values:{count:e.parents.length}})]})}})})}function n(){if(e.children.length>0)return b.jsx("div",{className:"tag-sub-tags",children:b.jsx(Fe.FormattedMessage,{id:"parent_of",values:{children:b.jsxs($t.Link,{to:nt.makeChildTagsUrl(e),children:[e.children.length," ",b.jsx(Fe.FormattedMessage,{id:"countables.tags",values:{count:e.children.length}})]})}})})}return b.jsxs(b.Fragment,{children:[t(),r(),n()]})}),z_=Me("TagCard.Image",({tag:e})=>b.jsx("img",{loading:"lazy",className:"tag-card-image",alt:e.name,src:e.image_path??""})),W_=Me("TagCard.Title",({tag:e})=>b.jsx(b.Fragment,{children:e.name??""})),Y_=Me("TagCard",e=>{const{tag:t,cardWidth:r,zoomIndex:n,selecting:i,selected:a,onSelectedChanged:o}=e;return b.jsx(B_,{className:`tag-card zoom-${n}`,url:`/tags/${t.id}`,width:r,title:b.jsx(W_,{...e}),linkClassName:"tag-card-header",image:b.jsx(z_,{...e}),details:b.jsx(H_,{...e}),overlays:b.jsx(U_,{...e}),popovers:b.jsx(G_,{...e}),selected:a,selecting:i,onSelectedChanged:o})}),K_=({id:e})=>{const{data:t,loading:r,error:n}=Sp(e);if(r)return b.jsx("div",{className:"tag-popover-card-placeholder",children:b.jsx(QI,{card:!0,message:""})});if(n)return b.jsx(yl,{error:n.message});if(!(t!=null&&t.findTag))return b.jsx(yl,{error:`No tag found with id ${e}.`});const i=t.findTag;return b.jsx("div",{className:"tag-popover-card",children:b.jsx(Y_,{tag:i,zoomIndex:0})})},Dl=({id:e,hide:t,children:r,placement:n="top",target:i})=>{const{configuration:a}=ui(),o=(a==null?void 0:a.ui.showTagCardOnHover)??!0;return t||!o?b.jsx(b.Fragment,{children:r}):b.jsx(Il,{target:i,placement:n,enterDelay:500,leaveDelay:100,content:b.jsx(K_,{id:e}),children:r})};function Q_(e,t,r,n){if(!e)return t;e=e.toLowerCase();const i={};function a(h,O){i[h.id]={...i[h.id],...O}}function o(h){var v,y;const O=(v=i[h.id])==null?void 0:v.aliases;if(O!==void 0)return O;if(!n)return[];const w=((y=n(h))==null?void 0:y.map(p=>p.trim().toLowerCase()))??[];return a(h,{aliases:w}),w}function u(h){var y;const O=(y=i[h.id])==null?void 0:y.aliasMatch;if(O!==void 0)return O;const v=o(h).some(p=>p===e);return a(h,{aliasMatch:v}),v}function s(h){var y;const O=(y=i[h.id])==null?void 0:y.aliasStartsWith;if(O!==void 0)return O;const v=o(h).some(p=>p.startsWith(e));return a(h,{aliasStartsWith:v}),v}function c(h){return h.trim().replace(/\s\s+/g," ").toLowerCase().split(" ")}function l(h){return c(r(h))}function f(h){return o(h).flatMap(w=>c(w))}function S(h){var y;const O=(y=i[h.id])==null?void 0:y.wordIndex;if(O!==void 0)return O;const v=l(h).indexOf(e);return a(h,{wordIndex:v}),v}function g(h){var y;const O=(y=i[h.id])==null?void 0:y.aliasWordIndex;if(O!==void 0)return O;const v=f(h).indexOf(e);return a(h,{aliasWordIndex:v}),v}function D(h){var y;const O=(y=i[h.id])==null?void 0:y.wordStartsWithIndex;if(O!==void 0)return O;const v=l(h).findIndex(p=>p.startsWith(e));return a(h,{wordStartsWithIndex:v}),v}function I(h){var y;const O=(y=i[h.id])==null?void 0:y.aliasWordStartsWithIndex;if(O!==void 0)return O;const v=f(h).findIndex(p=>p.startsWith(e));return a(h,{aliasWordStartsWithIndex:v}),v}function _(h){var y;const O=(y=i[h.id])==null?void 0:y.aliasIncludesIndex;if(O!==void 0)return O;const v=o(h).findIndex(p=>p.includes(e));return a(h,{aliasIncludesIndex:v}),v}function C(h,O){const w=r(h).trim().toLowerCase(),v=r(O).trim().toLowerCase(),y=u(h),p=u(O);if(w===e&&v!==e)return-1;if(w!==e&&v===e)return 1;if(y&&!p)return-1;if(!y&&p)return 1;if(w.startsWith(e)&&!v.startsWith(e))return-1;if(!w.startsWith(e)&&v.startsWith(e))return 1;const E=s(h),T=s(O);if(E&&!T)return-1;if(!E&&T)return 1;if(!e.includes(" ")){{const ee=S(h),F=S(O);if(ee!==-1&&F===-1)return-1;if(ee===-1&&F!==-1)return 1;if(ee!==-1&&F!==-1)return ee===F?w.localeCompare(v):ee-F;const k=g(h),N=g(O);if(k!==-1&&N===-1)return-1;if(k===-1&&N!==-1)return 1;if(k!==-1&&N!==-1)return k===N?w.localeCompare(v):k-N}{const ee=D(h),F=D(O);if(ee!==-1&&F===-1)return-1;if(ee===-1&&F!==-1)return 1;if(ee!==-1&&F!==-1)return ee===F?w.localeCompare(v):ee-F;const k=I(h),N=I(O);if(k!==-1&&N===-1)return-1;if(k===-1&&N!==-1)return 1;if(k!==-1&&N!==-1)return k===N?w.localeCompare(v):k-N}}const x=w.indexOf(e),j=v.indexOf(e);if(x!==-1&&j===-1)return-1;if(x===-1&&j!==-1)return 1;if(x!==-1&&j!==-1)return x===j?w.localeCompare(v):x-j;const H=_(h),ne=_(O);return H!==-1&&ne===-1?-1:H===-1&&ne!==-1?1:H!==-1&&ne!==-1?H===ne?w.localeCompare(v):H-ne:w.localeCompare(v)}return t.slice().sort(C)}const J_=/^[0-9a-f]{8}-[0-9a-f]{4}-[47][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function Z_(e){return J_.test(e.trim())}function X_(e,t){const r=e.makeCriterion("stash_id_endpoint");r.modifier=m.Equals,r.value={endpoint:"",stashID:t.trim()},e.criteria=[r]}function eO(e,t){return Q_(e,t,r=>r.name,r=>r.aliases)}const tO=ho("TagSelect.sort",eO),rO=Me("TagSelect",e=>{const[t]=_p(),{configuration:r}=ui(),n=Fe.useIntl(),i=(r==null?void 0:r.ui.maxOptionsShown)??Cp,a=!(r!=null&&r.interface.disableDropdownCreate.tag),o=$.useMemo(()=>e.excludeIds??[],[e.excludeIds]);function u(I){return!o.includes(I.id.toString())}async function s(I){const _=new re(Y.Tags);if(_.currentPage=1,_.itemsPerPage=i,_.sortBy="name",_.sortDirection=Le.Asc,Z_(I)){X_(_,I);const w=(await os(_)).data.findTags.tags.filter(u);if(w.length>0)return w.map(Sl);_.criteria=[]}_.searchTerm=I;const h=(await os(_)).data.findTags.tags.filter(u);return tO(I,h).map(Sl)}const c=I=>{var v;let _=I;const{object:C}=I.data,{name:h}=C,{inputValue:O}=I.selectProps;let w="";return h.toLowerCase().includes(O.toLowerCase())||(w=(v=C.aliases)==null?void 0:v.find(y=>y.toLowerCase().includes(O.toLowerCase()))),_={...I,children:b.jsx(Dl,{id:C.id,placement:e.hoverPlacement??"right",children:b.jsxs("span",{className:"react-select-image-option",children:[b.jsx("span",{children:h}),w&&b.jsxs("span",{className:"alias",children:[" (",w,")"]})]})})},b.jsx(ri.components.Option,{..._})},l=I=>{let _=I;const{object:C}=I.data;return _={...I,children:b.jsx(Dl,{id:C.id,placement:e.hoverPlacementLabel??"top",children:b.jsx("span",{children:C.name})})},b.jsx(ri.components.MultiValueLabel,{..._})},f=I=>{let _=I;const{object:C}=I.data;return _={...I,children:b.jsx(b.Fragment,{children:C.name})},b.jsx(ri.components.SingleValue,{..._})},S=async I=>{const _=await t({variables:{input:{name:I}}});return{value:_.data.tagCreate.id,item:_.data.tagCreate,message:"Created tag"}},g=(I,_)=>({id:I,name:_,aliases:[],stash_ids:[]}),D=(I,_)=>!(!I||_.some(C=>{var h;return C.name.toLowerCase()===I.toLowerCase()||((h=C.aliases)==null?void 0:h.some(O=>O.toLowerCase()===I.toLowerCase()))}));return b.jsx(zI,{...e,className:at("tag-select",{"tag-select-active":e.active},e.className),loadOptions:s,getNamedObject:g,isValidNewOption:D,components:{Option:c,MultiValueLabel:l,SingleValue:f},isMulti:e.isMulti??!1,creatable:e.creatable??a,onCreate:S,placeholder:e.noSelectionString??n.formatMessage({id:"actions.select_entity"},{entityType:n.formatMessage({id:e.isMulti?"tags":"tag"})}),closeMenuOnSelect:!e.isMulti})}),nO=Me("TagIDSelect",e=>{const{ids:t,onSelect:r}=e,[n,i]=$.useState([]),a=WI(t);function o(u){i(u),r==null||r(u)}return $.useEffect(()=>{async function u(l){const f=await yp(l),{tags:S}=f.data.findTags;return S}if(!a)return;if(!t||(t==null?void 0:t.length)===0){i([]);return}if(n.filter(l=>t.includes(l.id.toString())).length===t.length)return;(async()=>{const f=[...await u(t)];f.sort((S,g)=>{const D=S.sort_name||S.name,I=g.sort_name||g.name;return D&&I?D.localeCompare(I):0}),i(f)})()},[t,a,n]),b.jsx(rO,{...e,values:n,onSelect:o})}),{PluginApi:Et}=window,{React:iO}=Et,{useState:wt,useEffect:aO}=iO,oO=Et.libraries.Bootstrap,{Nav:sO,Button:El,Form:Ae,Alert:uO,ProgressBar:cO,Spinner:lO}=oO,{NavLink:dO}=Et.libraries.ReactRouterDOM,{FontAwesomeIcon:fO}=Et.libraries.ReactFontAwesome,pO=Et.libraries.FontAwesomeSolid,mO="subtitleMarkers",wl="/subtitle-markers",gO=1e3;function Tl(e,t){return fetch("/graphql",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,variables:t})}).then(r=>r.json()).then(r=>{if(r.errors&&r.errors.length)throw new Error(r.errors.map(n=>n.message).join("; "));return r.data})}function hO(e,t){return Tl(`mutation SubtitleMarkersRunTask($plugin_id: ID!, $description: String, $args_map: Map) {
      runPluginTask(plugin_id: $plugin_id, description: $description, args_map: $args_map)
    }`,{plugin_id:mO,description:t,args_map:e}).then(r=>r.runPluginTask)}function vO(e){return Tl("query SubtitleMarkersFindJob($id: ID!) { findJob(input: { id: $id }) { status progress error } }",{id:e}).then(t=>t.findJob)}const La=["READY","RUNNING","STOPPING"],SO={READY:"Starting…",RUNNING:"Searching…",STOPPING:"Stopping…",FINISHED:"Done.",CANCELLED:"Cancelled.",FAILED:"Failed."};function yO(){const[e,t]=wt(""),[r,n]=wt(""),[i,a]=wt(""),[o,u]=wt(""),[s,c]=wt(!1),[l,f]=wt(null),[S,g]=wt(null),D=s||S!==null&&La.includes(S.status),I=!!e.trim()&&!!r.trim()&&!!i&&!D;aO(()=>{if(!l)return;let h=!1,O;const w=()=>{vO(l).then(v=>{h||(g(v),v&&La.includes(v.status)&&(O=setTimeout(w,gO)))}).catch(v=>{h||g({status:"FAILED",progress:null,error:String(v&&v.message?v.message:v)})})};return w(),()=>{h=!0,clearTimeout(O)}},[l]);function _(){const h=r.trim();c(!0),g(null),hO({path:e.trim(),search:h,tagId:i,title:o.trim()},`Searching subtitles for "${h}"`).then(O=>{c(!1),f(O)}).catch(O=>{c(!1),g({status:"FAILED",progress:null,error:String(O&&O.message?O.message:O)})})}function C(){if(!S)return null;const h=Math.round((S.progress||0)*100);return b.jsxs("div",{className:"subtitle-markers-status mt-3",children:[La.includes(S.status)&&b.jsx(cO,{now:h,label:`${h}%`,animated:!0}),b.jsxs("p",{className:S.status==="FAILED"?"text-danger":"text-muted",children:[SO[S.status],S.status==="FINISHED"&&" See Settings → Logs for how many markers were created."]}),S.error?b.jsx(uO,{variant:"danger",children:S.error}):null]})}return b.jsxs("div",{className:"subtitle-markers-page container-fluid",children:[b.jsx("h3",{children:"Subtitle Markers"}),b.jsx("p",{className:"text-muted",children:"Searches every .srt file under a folder (and its subfolders) for a phrase, and creates a scene marker wherever it's found - matched to the video file next to each subtitle, the same way Stash itself associates captions."}),b.jsxs(Ae.Group,{children:[b.jsx(Ae.Label,{children:"Folder path"}),b.jsx(Ae.Control,{type:"text",value:e,placeholder:"/path/to/library/folder",onChange:h=>t(h.target.value),disabled:D}),b.jsx(Ae.Text,{className:"text-muted",children:"A server-side path, searched recursively."})]}),b.jsxs(Ae.Group,{children:[b.jsx(Ae.Label,{children:"Search text"}),b.jsx(Ae.Control,{type:"text",value:r,placeholder:"Text to find in subtitle lines",onChange:h=>n(h.target.value),disabled:D}),b.jsx(Ae.Text,{className:"text-muted",children:"Case-insensitive, matched as plain text."})]}),b.jsxs(Ae.Group,{children:[b.jsx(Ae.Label,{children:"Tag"}),b.jsx(nO,{ids:i?[i]:[],isDisabled:D,onSelect:h=>{var O;return a(((O=h[0])==null?void 0:O.id)||"")}})]}),b.jsxs(Ae.Group,{children:[b.jsx(Ae.Label,{children:"Marker title"}),b.jsx(Ae.Control,{type:"text",value:o,placeholder:r||"Marker title",onChange:h=>u(h.target.value),disabled:D}),b.jsx(Ae.Text,{className:"text-muted",children:"Defaults to the search text if left blank."})]}),b.jsx(El,{onClick:_,disabled:!I,children:D?"Running…":"Search & Create Markers"}),C()]})}function bO(){const{data:e}=md();return e!=null&&e.configuration?b.jsx(xd,{children:b.jsx(Sd,{configuration:e.configuration,children:b.jsx(yO,{})})}):b.jsx(lO,{animation:"border",className:"mt-3"})}Et.register.route(wl,bO),Et.patch.before("MainNavBar.MenuItems",e=>{try{const t=b.jsx(sO.Link,{as:"div",className:"col-4 col-sm-3 col-md-2 col-lg-auto",children:b.jsx(dO,{exact:!0,to:wl,activeClassName:"active",children:b.jsxs(El,{className:"minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center",children:[b.jsx(fO,{icon:pO.faClosedCaptioning,className:"fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0"}),b.jsx("span",{children:"Subtitle Markers"})]})})},"subtitle-markers");return[{...e,children:[...e.children||[],t]}]}catch(t){return console.error("[SubtitleMarkers] Failed to patch nav bar:",t),[e]}})})(PluginApi.React,PluginApi.libraries.Apollo,PluginApi.libraries.FontAwesomeSolid,PluginApi.libraries.Bootstrap,PluginApi.libraries.Intl,PluginApi.libraries.ReactFontAwesome,PluginApi.libraries.ReactSelect,PluginApi.ReactDOM,PluginApi.libraries.ReactRouterDOM);
