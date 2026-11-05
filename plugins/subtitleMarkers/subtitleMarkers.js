var xO=Object.defineProperty;var $O=(T,d,Se)=>d in T?xO(T,d,{enumerable:!0,configurable:!0,writable:!0,value:Se}):T[d]=Se;var Z=(T,d,Se)=>$O(T,typeof d!="symbol"?d+"":d,Se);(function(T,d,Se,re,Te,Fl,ri,Pl,$t){"use strict";var $l;function Ba(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const r in e)if(r!=="default"){const n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>e[r]})}}return t.default=e,Object.freeze(t)}const Q=Ba(T),ar=Ba(d);function Ra(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ga={exports:{}},or={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Ua=Object.getOwnPropertySymbols,Ml=Object.prototype.hasOwnProperty,Nl=Object.prototype.propertyIsEnumerable;function kl(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Al(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(n.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}Al();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ll=T,Ha=60103;if(or.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var za=Symbol.for;Ha=za("react.element"),or.Fragment=za("react.fragment")}var jl=Ll.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ql=Object.prototype.hasOwnProperty,Vl={key:!0,ref:!0,__self:!0,__source:!0};function Wa(e,t,r){var n,i={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)ql.call(t,n)&&!Vl.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Ha,type:e,key:a,ref:o,props:i,_owner:jl.current}}or.jsx=Wa,or.jsxs=Wa,Ga.exports=or;var v=Ga.exports;const sr={};var Rr=(e=>(e.Cut="CUT",e.Uncut="UNCUT",e))(Rr||{}),m=(e=>(e.Between="BETWEEN",e.Equals="EQUALS",e.Excludes="EXCLUDES",e.GreaterThan="GREATER_THAN",e.Includes="INCLUDES",e.IncludesAll="INCLUDES_ALL",e.IsNull="IS_NULL",e.LessThan="LESS_THAN",e.MatchesRegex="MATCHES_REGEX",e.NotBetween="NOT_BETWEEN",e.NotEquals="NOT_EQUALS",e.NotMatchesRegex="NOT_MATCHES_REGEX",e.NotNull="NOT_NULL",e))(m||{}),Y=(e=>(e.Galleries="GALLERIES",e.Groups="GROUPS",e.Images="IMAGES",e.Movies="MOVIES",e.Performers="PERFORMERS",e.Scenes="SCENES",e.SceneMarkers="SCENE_MARKERS",e.Studios="STUDIOS",e.Tags="TAGS",e))(Y||{}),Me=(e=>(e.Female="FEMALE",e.Intersex="INTERSEX",e.Male="MALE",e.NonBinary="NON_BINARY",e.TransgenderFemale="TRANSGENDER_FEMALE",e.TransgenderMale="TRANSGENDER_MALE",e))(Me||{}),Gr=(e=>(e.Landscape="LANDSCAPE",e.Portrait="PORTRAIT",e.Square="SQUARE",e))(Gr||{}),$e=(e=>(e.EightK="EIGHT_K",e.FiveK="FIVE_K",e.FourK="FOUR_K",e.FullHd="FULL_HD",e.Huge="HUGE",e.Low="LOW",e.QuadHd="QUAD_HD",e.R360P="R360P",e.SevenK="SEVEN_K",e.SixK="SIX_K",e.Standard="STANDARD",e.StandardHd="STANDARD_HD",e.VeryLow="VERY_LOW",e.VrHd="VR_HD",e.WebHd="WEB_HD",e))($e||{}),Ae=(e=>(e.Asc="ASC",e.Desc="DESC",e))(Ae||{});const Ya=d.gql`
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
    `,Ka=d.gql`
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
    `,Qa=d.gql`
    fragment ConfigDLNAData on ConfigDLNAResult {
  serverName
  enabled
  port
  whitelistedIPs
  interfaces
  videoSortOrder
}
    `,Ja=d.gql`
    fragment ConfigScrapingData on ConfigScrapingResult {
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  excludeTagPatterns
}
    `,Bl=d.gql`
    fragment ScraperSourceData on ScraperSource {
  stash_box_index
  stash_box_endpoint
  scraper_id
}
    `,Rl=d.gql`
    fragment IdentifyFieldOptionsData on IdentifyFieldOptions {
  field
  strategy
  createMissing
}
    `,Gl=d.gql`
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
    ${Rl}`,Za=d.gql`
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
    ${Bl}
${Gl}`,Ul=d.gql`
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
    ${Ya}
${Ka}
${Qa}
${Ja}
${Za}`;d.gql`
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
    `,Hl=d.gql`
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
    `,zl=d.gql`
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
    `,Wl=d.gql`
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
    `,ur=d.gql`
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
    `,Xa=d.gql`
    fragment SlimGroupData on Group {
  id
  name
  front_image_path
  rating100
}
    `,Yl=d.gql`
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
    ${ur}
${Je}
${Xa}`,eo=d.gql`
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
    ${eo}`,to=d.gql`
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
    `,ro=d.gql`
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
    `,at=d.gql`
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
    ${Je}`,no=d.gql`
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
    `,cr=d.gql`
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
    ${no}`,Ft=d.gql`
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
    ${to}
${ro}
${ai}
${ur}
${Je}
${at}
${cr}`,Kl=d.gql`
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
    ${Ft}
${ur}
${Je}
${at}
${eo}`,io=d.gql`
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
    `,ao=d.gql`
    fragment LogEntryData on LogEntry {
  time
  level
  message
}
    `,Pt=d.gql`
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
    `;const Ql=d.gql`
    fragment SelectPerformerData on Performer {
  id
  name
  disambiguation
  alias_list
  image_path
  birthdate
  death_date
}
    `,Jl=d.gql`
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
    `,dt=d.gql`
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
    ${Jl}`,oo=d.gql`
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
    ${to}
${ro}`,lr=d.gql`
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
    ${ur}
${Je}
${Xa}`,ft=d.gql`
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
    ${no}
${dt}
${oo}
${ur}
${lr}
${Je}
${at}`,Zl=d.gql`
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
    `,Xl=d.gql`
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
    ${Ge}`,so=d.gql`
    fragment ScrapedGroupStudioData on ScrapedStudio {
  stored_id
  name
  urls
}
    `,ed=d.gql`
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
    ${so}
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
    ${Ge}`,dr=d.gql`
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
    ${Ge}`,uo=d.gql`
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
    ${so}
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
${dr}
${uo}`,co=d.gql`
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
${dr}`,lo=d.gql`
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
${dr}`;d.gql`
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
${dr}
${uo}`,d.gql`
    fragment ScrapedStashBoxPerformerData on StashBoxPerformerQueryResult {
  query
  results {
    ...ScrapedScenePerformerData
  }
}
    ${dr}`;const fr=d.gql`
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
    ${Je}`,td=d.gql`
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
    `,Mt=d.gql`
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
    ${Je}`,rd=d.gql`
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
    `,nd=d.gql`
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
    ${Ya}`,d.gql`
    mutation ConfigureInterface($input: ConfigInterfaceInput!) {
  configureInterface(input: $input) {
    ...ConfigInterfaceData
  }
}
    ${Ka}`,d.gql`
    mutation ConfigureDLNA($input: ConfigDLNAInput!) {
  configureDLNA(input: $input) {
    ...ConfigDLNAData
  }
}
    ${Qa}`,d.gql`
    mutation ConfigureScraping($input: ConfigScrapingInput!) {
  configureScraping(input: $input) {
    ...ConfigScrapingData
  }
}
    ${Ja}`,d.gql`
    mutation ConfigureDefaults($input: ConfigDefaultSettingsInput!) {
  configureDefaults(input: $input) {
    ...ConfigDefaultSettingsData
  }
}
    ${Za}`,d.gql`
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
    ${Ft}`,d.gql`
    mutation GalleryUpdate($input: GalleryUpdateInput!) {
  galleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${Ft}`,d.gql`
    mutation BulkGalleryUpdate($input: BulkGalleryUpdateInput!) {
  bulkGalleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${Ft}`,d.gql`
    mutation GalleriesUpdate($input: [GalleryUpdateInput!]!) {
  galleriesUpdate(input: $input) {
    ...GalleryData
  }
}
    ${Ft}`,d.gql`
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
    ${lr}`,d.gql`
    mutation GroupUpdate($input: GroupUpdateInput!) {
  groupUpdate(input: $input) {
    ...GroupData
  }
}
    ${lr}`,d.gql`
    mutation BulkGroupUpdate($input: BulkGroupUpdateInput!) {
  bulkGroupUpdate(input: $input) {
    ...GroupData
  }
}
    ${lr}`,d.gql`
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
    ${at}`,d.gql`
    mutation PerformerUpdate($input: PerformerUpdateInput!) {
  performerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${at}`,d.gql`
    mutation BulkPerformerUpdate($input: BulkPerformerUpdateInput!) {
  bulkPerformerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${at}`,d.gql`
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
    ${dt}`,d.gql`
    mutation SceneMarkerUpdate($id: ID!, $title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerUpdate(
    input: {id: $id, title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${dt}`,d.gql`
    mutation BulkSceneMarkerUpdate($input: BulkSceneMarkerUpdateInput!) {
  bulkSceneMarkerUpdate(input: $input) {
    ...SceneMarkerData
  }
}
    ${dt}`,d.gql`
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
    ${ft}`,d.gql`
    mutation SceneUpdate($input: SceneUpdateInput!) {
  sceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${ft}`,d.gql`
    mutation BulkSceneUpdate($input: BulkSceneUpdateInput!) {
  bulkSceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${ft}`,d.gql`
    mutation ScenesUpdate($input: [SceneUpdateInput!]!) {
  scenesUpdate(input: $input) {
    ...SceneData
  }
}
    ${ft}`,d.gql`
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
    ${fr}`,d.gql`
    mutation StudioUpdate($input: StudioUpdateInput!) {
  studioUpdate(input: $input) {
    ...StudioData
  }
}
    ${fr}`,d.gql`
    mutation BulkStudioUpdate($input: BulkStudioUpdateInput!) {
  bulkStudioUpdate(input: $input) {
    ...StudioData
  }
}
    ${fr}`,d.gql`
    mutation StudioDestroy($id: ID!) {
  studioDestroy(input: {id: $id})
}
    `,d.gql`
    mutation StudiosDestroy($ids: [ID!]!) {
  studiosDestroy(ids: $ids)
}
    `;const id=d.gql`
    mutation TagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) {
    ...TagData
  }
}
    ${Mt}`;function ad(e){const t={...sr,...e};return ar.useMutation(id,t)}d.gql`
    mutation TagDestroy($id: ID!) {
  tagDestroy(input: {id: $id})
}
    `,d.gql`
    mutation TagsDestroy($ids: [ID!]!) {
  tagsDestroy(ids: $ids)
}
    `;const od=d.gql`
    mutation TagUpdate($input: TagUpdateInput!) {
  tagUpdate(input: $input) {
    ...TagData
  }
}
    ${Mt}`;function sd(e){const t={...sr,...e};return ar.useMutation(od,t)}d.gql`
    mutation BulkTagUpdate($input: BulkTagUpdateInput!) {
  bulkTagUpdate(input: $input) {
    ...TagData
  }
}
    ${Mt}`,d.gql`
    mutation TagsMerge($source: [ID!]!, $destination: ID!, $values: TagUpdateInput) {
  tagsMerge(input: {source: $source, destination: $destination, values: $values}) {
    ...TagData
  }
}
    ${Mt}`,d.gql`
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
    ${Hl}`,d.gql`
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
    ${ni}`;const ud=d.gql`
    query FindGalleries($filter: FindFilterType, $gallery_filter: GalleryFilterType) {
  findGalleries(gallery_filter: $gallery_filter, filter: $filter) {
    count
    galleries {
      ...SlimGalleryData
    }
  }
}
    ${oo}`;d.gql`
    query FindGallery($id: ID!) {
  findGallery(id: $id) {
    ...GalleryData
  }
}
    ${Ft}`,d.gql`
    query FindGalleriesForSelect($filter: FindFilterType, $gallery_filter: GalleryFilterType, $ids: [ID!]) {
  findGalleries(filter: $filter, gallery_filter: $gallery_filter, ids: $ids) {
    count
    galleries {
      ...SelectGalleryData
    }
  }
}
    ${zl}`,d.gql`
    query FindGalleryImageID($id: ID!, $index: Int!) {
  findGallery(id: $id) {
    image(index: $index) {
      id
    }
  }
}
    `;const cd=d.gql`
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
    ${Kl}`,d.gql`
    query JobQueue {
  jobQueue {
    ...JobData
  }
}
    ${io}`,d.gql`
    query FindJob($input: FindJobInput!) {
  findJob(input: $input) {
    ...JobData
  }
}
    ${io}`,d.gql`
    query SceneWall($q: String) {
  sceneWall(q: $q) {
    ...SceneData
  }
}
    ${ft}`,d.gql`
    query MarkerWall($q: String) {
  markerWall(q: $q) {
    ...SceneMarkerData
  }
}
    ${dt}`,d.gql`
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
    ${ao}`,d.gql`
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
    `;const ld=d.gql`
    query FindGroups($filter: FindFilterType, $group_filter: GroupFilterType) {
  findGroups(filter: $filter, group_filter: $group_filter) {
    count
    groups {
      ...ListGroupData
    }
  }
}
    ${Yl}`;d.gql`
    query FindGroup($id: ID!) {
  findGroup(id: $id) {
    ...GroupData
  }
}
    ${lr}`,d.gql`
    query FindGroupsForSelect($filter: FindFilterType, $group_filter: GroupFilterType, $ids: [ID!]) {
  findGroups(filter: $filter, group_filter: $group_filter, ids: $ids) {
    count
    groups {
      ...SelectGroupData
    }
  }
}
    ${Wl}`;const dd=d.gql`
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
    ${at}`;d.gql`
    query FindPerformer($id: ID!) {
  findPerformer(id: $id) {
    ...PerformerData
  }
}
    ${at}`,d.gql`
    query FindPerformersForSelect($filter: FindFilterType, $performer_filter: PerformerFilterType, $ids: [ID!]) {
  findPerformers(filter: $filter, performer_filter: $performer_filter, ids: $ids) {
    count
    performers {
      ...SelectPerformerData
    }
  }
}
    ${Ql}`,d.gql`
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
    ${Pt}`,d.gql`
    query InstalledPluginPackagesStatus {
  installedPackages(type: Plugin) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${Pt}`,d.gql`
    query AvailablePluginPackages($source: String!) {
  availablePackages(source: $source, type: Plugin) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${Pt}`;const fd=d.gql`
    query FindSceneMarkers($filter: FindFilterType, $scene_marker_filter: SceneMarkerFilterType) {
  findSceneMarkers(filter: $filter, scene_marker_filter: $scene_marker_filter) {
    count
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${dt}`,pd=d.gql`
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
    ${cr}`;d.gql`
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
    ${cr}`,d.gql`
    query FindDuplicateScenes($distance: Int, $duration_diff: Float) {
  findDuplicateScenes(distance: $distance, duration_diff: $duration_diff) {
    ...SlimSceneData
  }
}
    ${cr}`,d.gql`
    query FindScene($id: ID!, $checksum: String) {
  findScene(id: $id, checksum: $checksum) {
    ...SceneData
  }
}
    ${ft}`,d.gql`
    query FindFullScenes($ids: [Int!]) {
  findScenes(scene_ids: $ids) {
    scenes {
      ...SceneData
    }
  }
}
    ${ft}`,d.gql`
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
    ${dt}`,d.gql`
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
    ${cr}`,d.gql`
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
    ${Zl}`,d.gql`
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
    ${Xl}`,d.gql`
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
    ${co}`,d.gql`
    query ScrapeSingleImage($source: ScraperSourceInput!, $input: ScrapeSingleImageInput!) {
  scrapeSingleImage(source: $source, input: $input) {
    ...ScrapedImageData
  }
}
    ${lo}`,d.gql`
    query ScrapeGalleryURL($url: String!) {
  scrapeGalleryURL(url: $url) {
    ...ScrapedGalleryData
  }
}
    ${co}`,d.gql`
    query ScrapeImageURL($url: String!) {
  scrapeImageURL(url: $url) {
    ...ScrapedImageData
  }
}
    ${lo}`,d.gql`
    query ScrapeGroupURL($url: String!) {
  scrapeGroupURL(url: $url) {
    ...ScrapedGroupData
  }
}
    ${ed}`,d.gql`
    query InstalledScraperPackages {
  installedPackages(type: Scraper) {
    ...PackageData
  }
}
    ${Pt}`,d.gql`
    query InstalledScraperPackagesStatus {
  installedPackages(type: Scraper) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${Pt}`,d.gql`
    query AvailableScraperPackages($source: String!) {
  availablePackages(source: $source, type: Scraper) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${Pt}`;const md=d.gql`
    query Configuration {
  configuration {
    ...ConfigData
  }
}
    ${Ul}`;function gd(e){const t={...sr,...e};return ar.useQuery(md,t)}const hd=d.gql`
    query Directory($path: String) {
  directory(path: $path) {
    path
    parent
    directories
  }
}
    `;function vd(e){const t={...sr,...e};return ar.useQuery(hd,t)}d.gql`
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
    ${fr}`,d.gql`
    query FindStudio($id: ID!) {
  findStudio(id: $id) {
    ...StudioData
  }
}
    ${fr}`,d.gql`
    query FindStudiosForSelect($filter: FindFilterType, $studio_filter: StudioFilterType, $ids: [ID!]) {
  findStudios(filter: $filter, studio_filter: $studio_filter, ids: $ids) {
    count
    studios {
      ...SelectStudioData
    }
  }
}
    ${td}`;const fo=d.gql`
    query FindTags($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...TagData
    }
  }
}
    ${Mt}`,Sd=d.gql`
    query FindTag($id: ID!) {
  findTag(id: $id) {
    ...TagData
  }
}
    ${Mt}`;function yd(e){const t={...sr,...e};return ar.useQuery(Sd,t)}const po=d.gql`
    query FindTagsForSelect($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...SelectTagData
    }
  }
}
    ${rd}`;d.gql`
    query FindTagsForList($filter: FindFilterType, $tag_filter: TagFilterType) {
  findTags(filter: $filter, tag_filter: $tag_filter) {
    count
    tags {
      ...TagListData
    }
  }
}
    ${nd}`,d.gql`
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
    ${ao}`;const bd=d.gql`
    subscription ScanCompleteSubscribe {
  scanCompleteSubscribe
}
    `,mo=T.createContext(null),ui=()=>{const e=T.useContext(mo);if(e===null)throw new Error("useConfigurationContext must be used within a ConfigurationProvider");return e},Id=({configuration:e,children:t})=>v.jsx(mo.Provider,{value:{configuration:e},children:t}),go={},_d={},ho={},Od={};function Cd(e,t){if(go[e])throw new Error("Component "+e+" has already been registered");return go[e]=t,t}function Dd(e,t,r,n){if(!e.length)return t.apply(r,n);let i=1;function a(){if(i>=e.length)return t;const o=e[i++];return new Proxy(o,{apply:(u,s,c)=>u.apply(s,c.concat(a()))})}return e[0].apply(r,n.concat(a()))}function vo(e,t){return new Proxy(t,{apply(r,n,i){let a;for(const o of _d[e]||[])i=o.apply(n,i);ho[e]?a=Dd(ho[e],r,n,i):a=r.apply(n,i);for(const o of Od[e]||[])a=o.apply(n,i.concat(a));return a}})}function Fe(e,t){const r=vo(e,t);return Cd(e,r),r}const Ze=Fe("Icon",e=>v.jsx(Fl.FontAwesomeIcon,{...e,className:`fa-icon ${e.className??""}`})),Ed=()=>{},wd=({children:e,show:t,icon:r,header:n,cancel:i,accept:a,onHide:o,isRunning:u,disabled:s,modalProps:c,dialogClassName:l,footerButtons:f,leftFooterButtons:I})=>v.jsxs(re.Modal,{className:"ModalComponent",keyboard:!1,onHide:o??Ed,show:t,dialogClassName:l,...c,children:[v.jsxs(re.Modal.Header,{children:[r?v.jsx(Ze,{icon:r}):"",v.jsx("span",{children:n??""})]}),v.jsx(re.Modal.Body,{children:e}),v.jsxs(re.Modal.Footer,{className:"ModalFooter",children:[v.jsx("div",{children:I}),v.jsxs("div",{children:[f,i?v.jsx(re.Button,{disabled:u,variant:i.variant??"primary",onClick:i.onClick,className:"ml-2",children:i.text??v.jsx(Te.FormattedMessage,{id:"actions.cancel",defaultMessage:"Cancel",description:"Cancels the current action and dismisses the modal."})}):"",v.jsx(re.Button,{disabled:u||s,variant:(a==null?void 0:a.variant)??"primary",onClick:a==null?void 0:a.onClick,className:"ml-2",children:u?v.jsx(re.Spinner,{animation:"border",role:"status",size:"sm"}):(a==null?void 0:a.text)??v.jsx(Te.FormattedMessage,{id:"actions.close",defaultMessage:"Close",description:"Closes the current modal."})})]})]})]});function Td(e){let t="";return e instanceof Error&&(t=e.message),t||(t=String(e)),t||(t="Unknown error"),t}var So={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var a="",o=0;o<arguments.length;o++){var u=arguments[o];u&&(a=i(a,n(u)))}return a}function n(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var o="";for(var u in a)t.call(a,u)&&a[u]&&(o=i(o,u));return o}function i(a,o){return o?a?a+" "+o:a+o:a}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(So);var xd=So.exports;const ot=Ra(xd),$d=100,Fd=5e3;let Pd=0;const yo=T.createContext(null),Md=({children:e})=>{const[t,r]=T.useState(),[n,i]=T.useState(!1),[a,o]=T.useState(!1),u=T.useMemo(()=>{function l(){o(!0)}return!t||a?null:v.jsx(re.Toast,{autohide:!0,onClose:()=>i(!0),className:t.variant??"success",delay:t.delay??3e3,children:v.jsxs(re.Toast.Header,{children:[v.jsx("span",{className:"mr-auto",onClick:()=>l(),children:t.content}),t.variant==="danger"&&v.jsx(re.Button,{variant:"minimal",className:"expand-error-button",onClick:()=>l(),children:v.jsx(Ze,{icon:Se.faArrowUpRightFromSquare})})]})},t.id)},[t,a]);function s(l){(n||!t||(l.priority??0)>=(t.priority??0))&&(i(!1),r({...l,id:Pd++}))}function c(){const{content:l}=t??{};l&&typeof l=="string"&&navigator.clipboard&&navigator.clipboard.writeText(l)}return v.jsxs(yo.Provider,{value:s,children:[e,a&&v.jsx(wd,{dialogClassName:"toast-expanded-dialog",show:a,accept:{onClick:()=>{r(void 0),o(!1)}},header:v.jsx(Te.FormattedMessage,{id:"errors.header"}),icon:Se.faTriangleExclamation,footerButtons:!!navigator.clipboard&&v.jsx(re.Button,{variant:"secondary",onClick:()=>c(),children:v.jsx(Te.FormattedMessage,{id:"actions.copy_to_clipboard"})}),children:t==null?void 0:t.content}),v.jsx("div",{className:ot("toast-container row",{hidden:!t||n}),children:u})]})},Nd=()=>{const e=T.useContext(yo);if(!e)throw new Error("useToast must be used within a ToastProvider");return T.useMemo(()=>({toast:e,success(t){e({content:t})},error(t){const r=Td(t);console.error(t),e({variant:"danger",content:r,priority:$d,delay:Fd})}}),[e])};var ci=function(e,t){return ci=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])},ci(e,t)};function zr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");ci(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var Oe=function(){return Oe=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},Oe.apply(this,arguments)};function Nt(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,a;n<i;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}typeof SuppressedError=="function"&&SuppressedError;var li="Invariant Violation",bo=Object.setPrototypeOf,kd=bo===void 0?function(e,t){return e.__proto__=t,e}:bo,Io=function(e){zr(t,e);function t(r){r===void 0&&(r=li);var n=e.call(this,typeof r=="number"?li+": "+r+" (see https://github.com/apollographql/invariant-packages)":r)||this;return n.framesToPop=1,n.name=li,kd(n,t.prototype),n}return t}(Error);function pt(e,t){if(!e)throw new Io(t)}var _o=["debug","log","warn","error","silent"],Ad=_o.indexOf("log");function Wr(e){return function(){if(_o.indexOf(e)>=Ad){var t=console[e]||console.log;return t.apply(console,arguments)}}}(function(e){e.debug=Wr("debug"),e.log=Wr("log"),e.warn=Wr("warn"),e.error=Wr("error")})(pt||(pt={}));var Oo="3.14.1";function kt(e){try{return e()}catch{}}const Yr=kt(function(){return globalThis})||kt(function(){return window})||kt(function(){return self})||kt(function(){return global})||kt(function(){return kt.constructor("return this")()});var Co=new Map;function Ld(e){var t=Co.get(e)||1;return Co.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function jd(e,t){var r=Ld("stringifyForDisplay");return JSON.stringify(e,function(n,i){return i===void 0?r:i},t).split(JSON.stringify(r)).join("<undefined>")}function Kr(e){return function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];if(typeof t=="number"){var i=t;t=di(i),t||(t=fi(i,r),r=[])}e.apply(void 0,[t].concat(r))}}var At=Object.assign(function(t,r){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];t||pt(t,di(r,n)||fi(r,n))},{debug:Kr(pt.debug),log:Kr(pt.log),warn:Kr(pt.warn),error:Kr(pt.error)});function pr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Io(di(e,t)||fi(e,t))}var Do=Symbol.for("ApolloErrorMessageHandler_"+Oo);function Eo(e){if(typeof e=="string")return e;try{return jd(e,2).slice(0,1e3)}catch{return"<non-serializable>"}}function di(e,t){if(t===void 0&&(t=[]),!!e)return Yr[Do]&&Yr[Do](e,t.map(Eo))}function fi(e,t){if(t===void 0&&(t=[]),!!e)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:Oo,message:e,args:t.map(Eo)})))}function qd(e,t){if(!!!e)throw new Error(t)}const wo={Name:[],Document:["definitions"],OperationDefinition:["description","name","variableDefinitions","directives","selectionSet"],VariableDefinition:["description","variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["description","name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","directives","locations"],SchemaExtension:["directives","operationTypes"],DirectiveExtension:["name","directives"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"],TypeCoordinate:["name"],MemberCoordinate:["name","memberName"],ArgumentCoordinate:["name","fieldName","argumentName"],DirectiveCoordinate:["name"],DirectiveArgumentCoordinate:["name","argumentName"]},Vd=new Set(Object.keys(wo));function To(e){const t=e==null?void 0:e.kind;return typeof t=="string"&&Vd.has(t)}var xo;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(xo||(xo={}));var pi;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.DIRECTIVE_EXTENSION="DirectiveExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension",e.TYPE_COORDINATE="TypeCoordinate",e.MEMBER_COORDINATE="MemberCoordinate",e.ARGUMENT_COORDINATE="ArgumentCoordinate",e.DIRECTIVE_COORDINATE="DirectiveCoordinate",e.DIRECTIVE_ARGUMENT_COORDINATE="DirectiveArgumentCoordinate"})(pi||(pi={}));function $o(e){return e===9||e===32}function Bd(e,t){const r=e.replace(/"""/g,'\\"""'),n=r.split(/\r\n|[\n\r]/g),i=n.length===1,a=n.length>1&&n.slice(1).every(g=>g.length===0||$o(g.charCodeAt(0))),o=r.endsWith('\\"""'),u=e.endsWith('"')&&!o,s=e.endsWith("\\"),c=u||s,l=!i||e.length>70||c||a||o;let f="";const I=i&&$o(e.charCodeAt(0));return(l&&!I||a)&&(f+=`
`),f+=r,(l||c)&&(f+=`
`),'"""'+f+'"""'}const Rd=10,Fo=2;function Gd(e){return Qr(e,[])}function Qr(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return Ud(e,t);default:return String(e)}}function Ud(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const r=[...t,e];if(Hd(e)){const n=e.toJSON();if(n!==e)return typeof n=="string"?n:Qr(n,r)}else if(Array.isArray(e))return Wd(e,r);return zd(e,r)}function Hd(e){return typeof e.toJSON=="function"}function zd(e,t){const r=Object.entries(e);return r.length===0?"{}":t.length>Fo?"["+Yd(e)+"]":"{ "+r.map(([i,a])=>i+": "+Qr(a,t)).join(", ")+" }"}function Wd(e,t){if(e.length===0)return"[]";if(t.length>Fo)return"[Array]";const r=Math.min(Rd,e.length),n=e.length-r,i=[];for(let a=0;a<r;++a)i.push(Qr(e[a],t));return n===1?i.push("... 1 more item"):n>1&&i.push(`... ${n} more items`),"["+i.join(", ")+"]"}function Yd(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const r=e.constructor.name;if(typeof r=="string"&&r!=="")return r}return t}function Kd(e){return`"${e.replace(Qd,Jd)}"`}const Qd=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function Jd(e){return Zd[e.charCodeAt(0)]}const Zd=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],Xd=Object.freeze({});function ef(e,t,r=wo){const n=new Map;for(const C of Object.values(pi))n.set(C,tf(t,C));let i,a=Array.isArray(e),o=[e],u=-1,s=[],c=e,l,f;const I=[],g=[];do{u++;const C=u===o.length,h=C&&s.length!==0;if(C){if(l=g.length===0?void 0:I[I.length-1],c=f,f=g.pop(),h)if(a){c=c.slice();let E=0;for(const[y,S]of s){const p=y-E;S===null?(c.splice(p,1),E++):c[p]=S}}else{c={...c};for(const[E,y]of s)c[E]=y}u=i.index,o=i.keys,s=i.edits,a=i.inArray,i=i.prev}else if(f){if(l=a?u:o[u],c=f[l],c==null)continue;I.push(l)}let O;if(!Array.isArray(c)){var D,b;To(c)||qd(!1,`Invalid AST Node: ${Gd(c)}.`);const E=C?(D=n.get(c.kind))===null||D===void 0?void 0:D.leave:(b=n.get(c.kind))===null||b===void 0?void 0:b.enter;if(O=E==null?void 0:E.call(t,c,l,f,I,g),O===Xd)break;if(O===!1){if(!C){I.pop();continue}}else if(O!==void 0&&(s.push([l,O]),!C))if(To(O))c=O;else{I.pop();continue}}if(O===void 0&&h&&s.push([l,c]),C)I.pop();else{var _;i={inArray:a,index:u,keys:o,edits:s,prev:i},a=Array.isArray(c),o=a?c:(_=r[c.kind])!==null&&_!==void 0?_:[],u=-1,s=[],f&&g.push(f),f=c}}while(i!==void 0);return s.length!==0?s[s.length-1][1]:e}function tf(e,t){const r=e[t];return typeof r=="object"?r:typeof r=="function"?{enter:r,leave:void 0}:{enter:e.enter,leave:e.leave}}function rf(e){return ef(e,af)}const nf=80,af={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>M(e.definitions,`

`)},OperationDefinition:{leave(e){const t=mi(e.variableDefinitions)?z(`(
`,M(e.variableDefinitions,`
`),`
)`):z("(",M(e.variableDefinitions,", "),")"),r=z("",e.description,`
`)+M([e.operation,M([e.name,t]),M(e.directives," ")]," ");return(r==="query"?"":r+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:r,directives:n,description:i})=>z("",i,`
`)+e+": "+t+z(" = ",r)+z(" ",M(n," "))},SelectionSet:{leave:({selections:e})=>Ue(e)},Field:{leave({alias:e,name:t,arguments:r,directives:n,selectionSet:i}){const a=z("",e,": ")+t;let o=a+z("(",M(r,", "),")");return o.length>nf&&(o=a+z(`(
`,Jr(M(r,`
`)),`
)`)),M([o,M(n," "),i]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+z(" ",M(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:r})=>M(["...",z("on ",e),M(t," "),r]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:r,directives:n,selectionSet:i,description:a})=>z("",a,`
`)+`fragment ${e}${z("(",M(r,", "),")")} on ${t} ${z("",M(n," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?Bd(e):Kd(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+M(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+M(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+z("(",M(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:r})=>z("",e,`
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
`)))!==null&&t!==void 0?t:!1}function gi(e){return e!==null&&typeof e=="object"}function of(){}class Po{constructor(t=1/0,r=of){this.max=t,this.dispose=r,this.map=new Map,this.newest=null,this.oldest=null}has(t){return this.map.has(t)}get(t){const r=this.getNode(t);return r&&r.value}get size(){return this.map.size}getNode(t){const r=this.map.get(t);if(r&&r!==this.newest){const{older:n,newer:i}=r;i&&(i.older=n),n&&(n.newer=i),r.older=this.newest,r.older.newer=r,r.newer=null,this.newest=r,r===this.oldest&&(this.oldest=i)}return r}set(t,r){let n=this.getNode(t);return n?n.value=r:(n={key:t,value:r,newer:null,older:this.newest},this.newest&&(this.newest.newer=n),this.newest=n,this.oldest=this.oldest||n,this.map.set(t,n),n.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(t){const r=this.map.get(t);return r?(r===this.newest&&(this.newest=r.older),r===this.oldest&&(this.oldest=r.newer),r.newer&&(r.newer.older=r.older),r.older&&(r.older.newer=r.newer),this.map.delete(t),this.dispose(r.value,t),!0):!1}}function hi(){}const sf=hi,uf=typeof WeakRef<"u"?WeakRef:function(e){return{deref:()=>e}},cf=typeof WeakMap<"u"?WeakMap:Map,lf=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:hi,unregister:hi}},df=10024;class Mo{constructor(t=1/0,r=sf){this.max=t,this.dispose=r,this.map=new cf,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{const n=this.unfinalizedNodes.values();for(let i=0;i<df;i++){const a=n.next().value;if(!a)break;this.unfinalizedNodes.delete(a);const o=a.key;delete a.key,a.keyRef=new uf(o),this.registry.register(o,a,a)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new lf(this.deleteNode.bind(this))}has(t){return this.map.has(t)}get(t){const r=this.getNode(t);return r&&r.value}getNode(t){const r=this.map.get(t);if(r&&r!==this.newest){const{older:n,newer:i}=r;i&&(i.older=n),n&&(n.newer=i),r.older=this.newest,r.older.newer=r,r.newer=null,this.newest=r,r===this.oldest&&(this.oldest=i)}return r}set(t,r){let n=this.getNode(t);return n?n.value=r:(n={key:t,value:r,newer:null,older:this.newest},this.newest&&(this.newest.newer=n),this.newest=n,this.oldest=this.oldest||n,this.scheduleFinalization(n),this.map.set(t,n),this.size++,n.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(t){t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.size--;const r=t.key||t.keyRef&&t.keyRef.deref();this.dispose(t.value,r),t.keyRef?this.registry.unregister(t):this.unfinalizedNodes.delete(t),r&&this.map.delete(r)}delete(t){const r=this.map.get(t);return r?(this.deleteNode(r),!0):!1}scheduleFinalization(t){this.unfinalizedNodes.add(t),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}}var vi=new WeakSet;function No(e){e.size<=(e.max||-1)||vi.has(e)||(vi.add(e),setTimeout(function(){e.clean(),vi.delete(e)},100))}var ff=function(e,t){var r=new Mo(e,t);return r.set=function(n,i){var a=Mo.prototype.set.call(this,n,i);return No(this),a},r},pf=function(e,t){var r=new Po(e,t);return r.set=function(n,i){var a=Po.prototype.set.call(this,n,i);return No(this),a},r},mf=Symbol.for("apollo.cacheSize"),ko=Oe({},Yr[mf]),gf={};function Ao(e,t){gf[e]=t}var Lo=Object.assign(function(t){return JSON.stringify(t,hf)},{reset:function(){Lt=new pf(ko.canonicalStringify||1e3)}});globalThis.__DEV__!==!1&&Ao("canonicalStringify",function(){return Lt.size});var Lt;Lo.reset();function hf(e,t){if(t&&typeof t=="object"){var r=Object.getPrototypeOf(t);if(r===Object.prototype||r===null){var n=Object.keys(t);if(n.every(vf))return t;var i=JSON.stringify(n),a=Lt.get(i);if(!a){n.sort();var o=JSON.stringify(n);a=Lt.get(o)||n,Lt.set(i,a),Lt.set(o,a)}var u=Object.create(r);return a.forEach(function(s){u[s]=t[s]}),u}}return t}function vf(e,t,r){return t===0||r[t-1]<=e}var Sf=["connection","include","skip","client","rest","export","nonreactive"],mr=Lo;Object.assign(function(e,t,r){if(t&&r&&r.connection&&r.connection.key)if(r.connection.filter&&r.connection.filter.length>0){var n=r.connection.filter?r.connection.filter:[];n.sort();var i={};return n.forEach(function(u){i[u]=t[u]}),"".concat(r.connection.key,"(").concat(mr(i),")")}else return r.connection.key;var a=e;if(t){var o=mr(t);a+="(".concat(o,")")}return r&&Object.keys(r).forEach(function(u){Sf.indexOf(u)===-1&&(r[u]&&Object.keys(r[u]).length?a+="@".concat(u,"(").concat(mr(r[u]),")"):a+="@".concat(u))}),a},{setStringify:function(e){var t=mr;return mr=e,t}});function yf(e){return e.kind==="Field"}function jo(e){At(e&&e.kind==="Document",115);var t=e.definitions.filter(function(r){return r.kind!=="FragmentDefinition"}).map(function(r){if(r.kind!=="OperationDefinition")throw pr(116,r.kind);return r});return At(t.length<=1,117,t.length),e}function bf(e){return jo(e),e.definitions.filter(function(t){return t.kind==="OperationDefinition"})[0]}function If(e){return e.definitions.filter(function(t){return t.kind==="OperationDefinition"&&!!t.name}).map(function(t){return t.name.value})[0]||null}function _f(e){var t=bf(e);return At(t&&t.operation==="query",118),t}function Of(e){jo(e);for(var t,r=0,n=e.definitions;r<n.length;r++){var i=n[r];if(i.kind==="OperationDefinition"){var a=i.operation;if(a==="query"||a==="mutation"||a==="subscription")return i}i.kind==="FragmentDefinition"&&!t&&(t=i)}if(t)return t;throw pr(122)}let Ee=null;const qo={};let Cf=1;const Df=()=>class{constructor(){this.id=["slot",Cf++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let t=Ee;t;t=t.parent)if(this.id in t.slots){const r=t.slots[this.id];if(r===qo)break;return t!==Ee&&(Ee.slots[this.id]=r),!0}return Ee&&(Ee.slots[this.id]=qo),!1}getValue(){if(this.hasValue())return Ee.slots[this.id]}withValue(t,r,n,i){const a={__proto__:null,[this.id]:t},o=Ee;Ee={parent:o,slots:a};try{return r.apply(i,n)}finally{Ee=o}}static bind(t){const r=Ee;return function(){const n=Ee;try{return Ee=r,t.apply(this,arguments)}finally{Ee=n}}}static noContext(t,r,n){if(Ee){const i=Ee;try{return Ee=null,t.apply(n,r)}finally{Ee=i}}else return t.apply(n,r)}};function Vo(e){try{return e()}catch{}}const Si="@wry/context:Slot",Bo=Vo(()=>globalThis)||Vo(()=>global)||Object.create(null),yi=Bo[Si]||Array[Si]||function(e){try{Object.defineProperty(Bo,Si,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}}(Df()),{bind:PO,noContext:MO}=yi;new yi;var gr,bi=Object.assign(function(e){var t=gr.get(e);return t||(t=rf(e),gr.set(e,t)),t},{reset:function(){gr=new ff(ko.print||2e3)}});bi.reset(),globalThis.__DEV__!==!1&&Ao("print",function(){return gr?gr.size:0});function Ef(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=wf(e))||t){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wf(e,t){if(e){if(typeof e=="string")return Ro(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ro(e,t)}}function Ro(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Go(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ii(e,t,r){return t&&Go(e.prototype,t),r&&Go(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var _i=function(){return typeof Symbol=="function"},Oi=function(e){return _i()&&!!Symbol[e]},Ci=function(e){return Oi(e)?Symbol[e]:"@@"+e};_i()&&!Oi("observable")&&(Symbol.observable=Symbol("observable"));var Tf=Ci("iterator"),Di=Ci("observable"),Uo=Ci("species");function Zr(e,t){var r=e[t];if(r!=null){if(typeof r!="function")throw new TypeError(r+" is not a function");return r}}function hr(e){var t=e.constructor;return t!==void 0&&(t=t[Uo],t===null&&(t=void 0)),t!==void 0?t:be}function xf(e){return e instanceof be}function jt(e){jt.log?jt.log(e):setTimeout(function(){throw e})}function Xr(e){Promise.resolve().then(function(){try{e()}catch(t){jt(t)}})}function Ho(e){var t=e._cleanup;if(t!==void 0&&(e._cleanup=void 0,!!t))try{if(typeof t=="function")t();else{var r=Zr(t,"unsubscribe");r&&r.call(t)}}catch(n){jt(n)}}function Ei(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function $f(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var r=0;r<t.length&&(zo(e,t[r].type,t[r].value),e._state!=="closed");++r);}}function zo(e,t,r){e._state="running";var n=e._observer;try{var i=Zr(n,t);switch(t){case"next":i&&i.call(n,r);break;case"error":if(Ei(e),i)i.call(n,r);else throw r;break;case"complete":Ei(e),i&&i.call(n);break}}catch(a){jt(a)}e._state==="closed"?Ho(e):e._state==="running"&&(e._state="ready")}function wi(e,t,r){if(e._state!=="closed"){if(e._state==="buffering"){e._queue.push({type:t,value:r});return}if(e._state!=="ready"){e._state="buffering",e._queue=[{type:t,value:r}],Xr(function(){return $f(e)});return}zo(e,t,r)}}var Ff=function(){function e(r,n){this._cleanup=void 0,this._observer=r,this._queue=void 0,this._state="initializing";var i=new Pf(this);try{this._cleanup=n.call(void 0,i)}catch(a){i.error(a)}this._state==="initializing"&&(this._state="ready")}var t=e.prototype;return t.unsubscribe=function(){this._state!=="closed"&&(Ei(this),Ho(this))},Ii(e,[{key:"closed",get:function(){return this._state==="closed"}}]),e}(),Pf=function(){function e(r){this._subscription=r}var t=e.prototype;return t.next=function(n){wi(this._subscription,"next",n)},t.error=function(n){wi(this._subscription,"error",n)},t.complete=function(){wi(this._subscription,"complete")},Ii(e,[{key:"closed",get:function(){return this._subscription._state==="closed"}}]),e}(),be=function(){function e(r){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if(typeof r!="function")throw new TypeError("Observable initializer must be a function");this._subscriber=r}var t=e.prototype;return t.subscribe=function(n){return(typeof n!="object"||n===null)&&(n={next:n,error:arguments[1],complete:arguments[2]}),new Ff(n,this._subscriber)},t.forEach=function(n){var i=this;return new Promise(function(a,o){if(typeof n!="function"){o(new TypeError(n+" is not a function"));return}function u(){s.unsubscribe(),a()}var s=i.subscribe({next:function(c){try{n(c,u)}catch(l){o(l),s.unsubscribe()}},error:o,complete:a})})},t.map=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=hr(this);return new a(function(o){return i.subscribe({next:function(u){try{u=n(u)}catch(s){return o.error(s)}o.next(u)},error:function(u){o.error(u)},complete:function(){o.complete()}})})},t.filter=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=hr(this);return new a(function(o){return i.subscribe({next:function(u){try{if(!n(u))return}catch(s){return o.error(s)}o.next(u)},error:function(u){o.error(u)},complete:function(){o.complete()}})})},t.reduce=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=hr(this),o=arguments.length>1,u=!1,s=arguments[1],c=s;return new a(function(l){return i.subscribe({next:function(f){var I=!u;if(u=!0,!I||o)try{c=n(c,f)}catch(g){return l.error(g)}else c=f},error:function(f){l.error(f)},complete:function(){if(!u&&!o)return l.error(new TypeError("Cannot reduce an empty sequence"));l.next(c),l.complete()}})})},t.concat=function(){for(var n=this,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];var u=hr(this);return new u(function(s){var c,l=0;function f(I){c=I.subscribe({next:function(g){s.next(g)},error:function(g){s.error(g)},complete:function(){l===a.length?(c=void 0,s.complete()):f(u.from(a[l++]))}})}return f(n),function(){c&&(c.unsubscribe(),c=void 0)}})},t.flatMap=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=hr(this);return new a(function(o){var u=[],s=i.subscribe({next:function(l){if(n)try{l=n(l)}catch(I){return o.error(I)}var f=a.from(l).subscribe({next:function(I){o.next(I)},error:function(I){o.error(I)},complete:function(){var I=u.indexOf(f);I>=0&&u.splice(I,1),c()}});u.push(f)},error:function(l){o.error(l)},complete:function(){c()}});function c(){s.closed&&u.length===0&&o.complete()}return function(){u.forEach(function(l){return l.unsubscribe()}),s.unsubscribe()}})},t[Di]=function(){return this},e.from=function(n){var i=typeof this=="function"?this:e;if(n==null)throw new TypeError(n+" is not an object");var a=Zr(n,Di);if(a){var o=a.call(n);if(Object(o)!==o)throw new TypeError(o+" is not an object");return xf(o)&&o.constructor===i?o:new i(function(u){return o.subscribe(u)})}if(Oi("iterator")&&(a=Zr(n,Tf),a))return new i(function(u){Xr(function(){if(!u.closed){for(var s=Ef(a.call(n)),c;!(c=s()).done;){var l=c.value;if(u.next(l),u.closed)return}u.complete()}})});if(Array.isArray(n))return new i(function(u){Xr(function(){if(!u.closed){for(var s=0;s<n.length;++s)if(u.next(n[s]),u.closed)return;u.complete()}})});throw new TypeError(n+" is not observable")},e.of=function(){for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];var o=typeof this=="function"?this:e;return new o(function(u){Xr(function(){if(!u.closed){for(var s=0;s<i.length;++s)if(u.next(i[s]),u.closed)return;u.complete()}})})},Ii(e,null,[{key:Uo,get:function(){return this}}]),e}();_i()&&Object.defineProperty(be,Symbol("extensions"),{value:{symbol:Di,hostReportError:jt},configurable:!0});function Mf(e){var t,r=e.Symbol;if(typeof r=="function")if(r.observable)t=r.observable;else{typeof r.for=="function"?t=r.for("https://github.com/benlesh/symbol-observable"):t=r("https://github.com/benlesh/symbol-observable");try{r.observable=t}catch{}}else t="@@observable";return t}var qt;typeof self<"u"?qt=self:typeof window<"u"?qt=window:typeof global<"u"?qt=global:typeof module<"u"?qt=module:qt=Function("return this")(),Mf(qt);var Wo=be.prototype,Yo="@@observable";Wo[Yo]||(Wo[Yo]=function(){return this});var Ti,Nf=Symbol.for("apollo.deprecations"),Ko=Symbol.for("apollo.deprecations.slot"),xi=Yr,kf=(Ti=xi[Ko])!==null&&Ti!==void 0?Ti:xi[Ko]=new yi;function Af(e){return xi[Nf]||(kf.getValue()||[]).includes(e)}function Lf(e,t){Af(e)||t()}var Qo=function(e,t,r){var n=new Error(r);throw n.name="ServerError",n.response=e,n.statusCode=e.status,n.result=t,n};function jf(e){for(var t=["query","operationName","variables","extensions","context"],r=0,n=Object.keys(e);r<n.length;r++){var i=n[r];if(t.indexOf(i)<0)throw pr(58,i)}return e}function qf(e,t){var r=Oe({},e),n=function(a){typeof a=="function"?r=Oe(Oe({},r),a(r)):r=Oe(Oe({},r),a)},i=function(){return Oe({},r)};return Object.defineProperty(t,"setContext",{enumerable:!1,value:n}),Object.defineProperty(t,"getContext",{enumerable:!1,value:i}),t}function Vf(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName=typeof t.query!="string"?If(t.query)||void 0:""),t}function Jo(e,t){return t?t(e):be.of()}function vr(e){return typeof e=="function"?new Sr(e):e}function en(e){return e.request.length<=1}var Sr=function(){function e(t){t&&(this.request=t)}return e.empty=function(){return new e(function(){return be.of()})},e.from=function(t){return t.length===0?e.empty():t.map(vr).reduce(function(r,n){return r.concat(n)})},e.split=function(t,r,n){var i=vr(r),a=vr(n||new e(Jo)),o;return en(i)&&en(a)?o=new e(function(u){return t(u)?i.request(u)||be.of():a.request(u)||be.of()}):o=new e(function(u,s){return t(u)?i.request(u,s)||be.of():a.request(u,s)||be.of()}),Object.assign(o,{left:i,right:a})},e.execute=function(t,r){return t.request(qf(r.context,Vf(jf(r))))||be.of()},e.concat=function(t,r){var n=vr(t);if(en(n))return globalThis.__DEV__!==!1&&At.warn(47,n),n;var i=vr(r),a;return en(i)?a=new e(function(o){return n.request(o,function(u){return i.request(u)||be.of()})||be.of()}):a=new e(function(o,u){return n.request(o,function(s){return i.request(s,u)||be.of()})||be.of()}),Object.assign(a,{left:n,right:i})},e.prototype.split=function(t,r,n){return this.concat(e.split(t,r,n||new e(Jo)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(t,r){throw pr(48)},e.prototype.onError=function(t,r){if(globalThis.__DEV__!==!1&&Lf("onError",function(){globalThis.__DEV__!==!1&&At.warn(49)}),r&&r.error)return r.error(t),!1;throw t},e.prototype.setOnError=function(t){return globalThis.__DEV__!==!1&&globalThis.__DEV__!==!1&&At.warn(50),this.onError=t,this},e}(),Zo=Symbol();function Bf(e){return e.extensions?Array.isArray(e.extensions[Zo]):!1}var Rf=function(e){var t=Nt(Nt(Nt([],e.graphQLErrors,!0),e.clientErrors,!0),e.protocolErrors,!0);return e.networkError&&t.push(e.networkError),t.map(function(r){return gi(r)&&r.message||"Error message not found."}).join(`
`)},Gf=function(e){zr(t,e);function t(r){var n=r.graphQLErrors,i=r.protocolErrors,a=r.clientErrors,o=r.networkError,u=r.errorMessage,s=r.extraInfo,c=e.call(this,u)||this;return c.name="ApolloError",c.graphQLErrors=n||[],c.protocolErrors=i||[],c.clientErrors=a||[],c.networkError=o||null,c.message=u||Rf(c),c.extraInfo=s,c.cause=Nt(Nt(Nt([o],n||[],!0),i||[],!0),a||[],!0).find(function(l){return!!l})||null,c.__proto__=t.prototype,c}return t}(Error);function Uf(e){return gi(e)&&"code"in e&&"reason"in e}function Hf(e){var t;return gi(e)&&((t=e.target)===null||t===void 0?void 0:t.readyState)===WebSocket.CLOSED}var zf=function(e){zr(t,e);function t(r){var n=e.call(this)||this;return n.client=r,n}return t.prototype.request=function(r){var n=this;return new be(function(i){return n.client.subscribe(Oe(Oe({},r),{query:bi(r.query)}),{next:i.next.bind(i),complete:i.complete.bind(i),error:function(a){if(a instanceof Error)return i.error(a);var o=Uf(a);return o||Hf(a)?i.error(new Error("Socket closed".concat(o?" with event ".concat(a.code):"").concat(o?" ".concat(a.reason):""))):i.error(new Gf({graphQLErrors:Array.isArray(a)?a:[a]}))}})})},t}(Sr);function Ne(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function mt(e){return Ne(e)==="object"}function Wf(e){return Array.isArray(e)&&e.length>0&&e.every(t=>"message"in t)}function Xo(e,t){return e.length<124?e:t}const Yf="graphql-transport-ws";var Le;(function(e){e[e.InternalServerError=4500]="InternalServerError",e[e.InternalClientError=4005]="InternalClientError",e[e.BadRequest=4400]="BadRequest",e[e.BadResponse=4004]="BadResponse",e[e.Unauthorized=4401]="Unauthorized",e[e.Forbidden=4403]="Forbidden",e[e.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",e[e.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",e[e.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",e[e.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",e[e.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests"})(Le||(Le={}));var ve;(function(e){e.ConnectionInit="connection_init",e.ConnectionAck="connection_ack",e.Ping="ping",e.Pong="pong",e.Subscribe="subscribe",e.Next="next",e.Error="error",e.Complete="complete"})(ve||(ve={}));function es(e){if(!mt(e))throw new Error(`Message is expected to be an object, but got ${Ne(e)}`);if(!e.type)throw new Error("Message is missing the 'type' property");if(typeof e.type!="string")throw new Error(`Message is expects the 'type' property to be a string, but got ${Ne(e.type)}`);switch(e.type){case ve.ConnectionInit:case ve.ConnectionAck:case ve.Ping:case ve.Pong:{if(e.payload!=null&&!mt(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);break}case ve.Subscribe:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ne(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!mt(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Ne(e.payload)}`);if(typeof e.payload.query!="string")throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${Ne(e.payload.query)}`);if(e.payload.variables!=null&&!mt(e.payload.variables))throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Ne(e.payload.variables)}`);if(e.payload.operationName!=null&&Ne(e.payload.operationName)!=="string")throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Ne(e.payload.operationName)}`);if(e.payload.extensions!=null&&!mt(e.payload.extensions))throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Ne(e.payload.extensions)}`);break}case ve.Next:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ne(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!mt(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Ne(e.payload)}`);break}case ve.Error:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ne(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!Wf(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);break}case ve.Complete:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ne(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);break}default:throw new Error(`Invalid message 'type' property "${e.type}"`)}return e}function Kf(e,t){return es(typeof e=="string"?JSON.parse(e,t):e)}function yr(e,t){return es(e),JSON.stringify(e,t)}var Vt=function(e){return this instanceof Vt?(this.v=e,this):new Vt(e)},Qf=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(e,t||[]),i,a=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",o),i[Symbol.asyncIterator]=function(){return this},i;function o(g){return function(D){return Promise.resolve(D).then(g,f)}}function u(g,D){n[g]&&(i[g]=function(b){return new Promise(function(_,C){a.push([g,b,_,C])>1||s(g,b)})},D&&(i[g]=D(i[g])))}function s(g,D){try{c(n[g](D))}catch(b){I(a[0][3],b)}}function c(g){g.value instanceof Vt?Promise.resolve(g.value.v).then(l,f):I(a[0][2],g)}function l(g){s("next",g)}function f(g){s("throw",g)}function I(g,D){g(D),a.shift(),a.length&&s(a[0][0],a[0][1])}};function Jf(e){const{url:t,connectionParams:r,lazy:n=!0,onNonLazyError:i=console.error,lazyCloseTimeout:a=0,keepAlive:o=0,disablePong:u,connectionAckWaitTimeout:s=0,retryAttempts:c=5,retryWait:l=async function(k){let N=1e3;for(let B=0;B<k;B++)N*=2;await new Promise(B=>setTimeout(B,N+Math.floor(Math.random()*2700+300)))},shouldRetry:f=$i,isFatalConnectionProblem:I,on:g,webSocketImpl:D,generateID:b=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,k=>{const N=Math.random()*16|0;return(k=="x"?N:N&3|8).toString(16)})},jsonMessageReplacer:_,jsonMessageReviver:C}=e;let h;if(D){if(!Xf(D))throw new Error("Invalid WebSocket implementation provided");h=D}else typeof WebSocket<"u"?h=WebSocket:typeof global<"u"?h=global.WebSocket||global.MozWebSocket:typeof window<"u"&&(h=window.WebSocket||window.MozWebSocket);if(!h)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const O=h,E=(()=>{const F=(()=>{const N={};return{on(B,X){return N[B]=X,()=>{delete N[B]}},emit(B){var X;"id"in B&&((X=N[B.id])===null||X===void 0||X.call(N,B))}}})(),k={connecting:g!=null&&g.connecting?[g.connecting]:[],opened:g!=null&&g.opened?[g.opened]:[],connected:g!=null&&g.connected?[g.connected]:[],ping:g!=null&&g.ping?[g.ping]:[],pong:g!=null&&g.pong?[g.pong]:[],message:g!=null&&g.message?[F.emit,g.message]:[F.emit],closed:g!=null&&g.closed?[g.closed]:[],error:g!=null&&g.error?[g.error]:[]};return{onMessage:F.on,on(N,B){const X=k[N];return X.push(B),()=>{X.splice(X.indexOf(B),1)}},emit(N,...B){for(const X of[...k[N]])X(...B)}}})();function y(F){const k=[E.on("error",N=>{k.forEach(B=>B()),F(N)}),E.on("closed",N=>{k.forEach(B=>B()),F(N)})]}let S,p=0,w,x=!1,$=0,j=!1;async function H(){clearTimeout(w);const[F,k]=await(S??(S=new Promise((X,le)=>(async()=>{if(x){if(await l($),!p)return S=void 0,le({code:1e3,reason:"All Subscriptions Gone"});$++}E.emit("connecting",x);const P=new O(typeof t=="function"?await t():t,Yf);let A,U;function G(){isFinite(o)&&o>0&&(clearTimeout(U),U=setTimeout(()=>{P.readyState===O.OPEN&&(P.send(yr({type:ve.Ping})),E.emit("ping",!1,void 0))},o))}y(J=>{S=void 0,clearTimeout(A),clearTimeout(U),le(J),J instanceof ts&&(P.close(4499,"Terminated"),P.onerror=null,P.onclose=null)}),P.onerror=J=>E.emit("error",J),P.onclose=J=>E.emit("closed",J),P.onopen=async()=>{try{E.emit("opened",P);const J=typeof r=="function"?await r():r;if(P.readyState!==O.OPEN)return;P.send(yr(J?{type:ve.ConnectionInit,payload:J}:{type:ve.ConnectionInit},_)),isFinite(s)&&s>0&&(A=setTimeout(()=>{P.close(Le.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")},s)),G()}catch(J){E.emit("error",J),P.close(Le.InternalClientError,Xo(J instanceof Error?J.message:new Error(J).message,"Internal client error"))}};let W=!1;P.onmessage=({data:J})=>{try{const V=Kf(J,C);if(E.emit("message",V),V.type==="ping"||V.type==="pong"){E.emit(V.type,!0,V.payload),V.type==="pong"?G():u||(P.send(yr(V.payload?{type:ve.Pong,payload:V.payload}:{type:ve.Pong})),E.emit("pong",!1,V.payload));return}if(W)return;if(V.type!==ve.ConnectionAck)throw new Error(`First message cannot be of type ${V.type}`);clearTimeout(A),W=!0,E.emit("connected",P,V.payload,x),x=!1,$=0,X([P,new Promise((se,Pe)=>y(Pe))])}catch(V){P.onmessage=null,E.emit("error",V),P.close(Le.BadResponse,Xo(V instanceof Error?V.message:new Error(V).message,"Bad response"))}}})())));F.readyState===O.CLOSING&&await k;let N=()=>{};const B=new Promise(X=>N=X);return[F,N,Promise.race([B.then(()=>{if(!p){const X=()=>F.close(1e3,"Normal Closure");isFinite(a)&&a>0?w=setTimeout(()=>{F.readyState===O.OPEN&&X()},a):X()}}),k])]}function ie(F){if($i(F)&&(Zf(F.code)||[Le.InternalServerError,Le.InternalClientError,Le.BadRequest,Le.BadResponse,Le.Unauthorized,Le.SubprotocolNotAcceptable,Le.SubscriberAlreadyExists,Le.TooManyInitialisationRequests].includes(F.code)))throw F;if(j)return!1;if($i(F)&&F.code===1e3)return p>0;if(!c||$>=c||!f(F)||I!=null&&I(F))throw F;return x=!0}n||(async()=>{for(p++;;)try{const[,,F]=await H();await F}catch(F){try{if(!ie(F))return}catch(k){return i==null?void 0:i(k)}}})();function ee(F,k){const N=b(F);let B=!1,X=!1,le=()=>{p--,B=!0};return(async()=>{for(p++;;)try{const[P,A,U]=await H();if(B)return A();const G=E.onMessage(N,W=>{switch(W.type){case ve.Next:{k.next(W.payload);return}case ve.Error:{X=!0,B=!0,k.error(W.payload),le();return}case ve.Complete:{B=!0,le();return}}});P.send(yr({id:N,type:ve.Subscribe,payload:F},_)),le=()=>{!B&&P.readyState===O.OPEN&&P.send(yr({id:N,type:ve.Complete},_)),p--,B=!0,A()},await U.finally(G);return}catch(P){if(!ie(P))return}})().then(()=>{X||k.complete()}).catch(P=>{k.error(P)}),()=>{B||le()}}return{on:E.on,subscribe:ee,iterate(F){const k=[],N={done:!1,error:null,resolve:()=>{}},B=ee(F,{next(le){k.push(le),N.resolve()},error(le){N.done=!0,N.error=le,N.resolve()},complete(){N.done=!0,N.resolve()}}),X=function(){return Qf(this,arguments,function*(){for(;;){for(k.length||(yield Vt(new Promise(A=>N.resolve=A)));k.length;)yield yield Vt(k.shift());if(N.error)throw N.error;if(N.done)return yield Vt(void 0)}})}();return X.throw=async le=>(N.done||(N.done=!0,N.error=le,N.resolve()),{done:!0,value:void 0}),X.return=async()=>(B(),{done:!0,value:void 0}),X},async dispose(){if(j=!0,S){const[F]=await S;F.close(1e3,"Normal Closure")}},terminate(){S&&E.emit("closed",new ts)}}}class ts extends Error{constructor(){super(...arguments),this.name="TerminatedCloseEvent",this.message="4499: Terminated",this.code=4499,this.reason="Terminated",this.wasClean=!1}}function $i(e){return mt(e)&&"code"in e&&"reason"in e}function Zf(e){return[1e3,1001,1006,1005,1012,1013,1014].includes(e)?!1:e>=1e3&&e<=1999}function Xf(e){return typeof e=="function"&&"constructor"in e&&"CLOSED"in e&&"CLOSING"in e&&"CONNECTING"in e&&"OPEN"in e}function rs(e){return new Sr(function(t,r){return new be(function(n){var i,a,o;try{i=r(t).subscribe({next:function(u){if(u.errors?o=e({graphQLErrors:u.errors,response:u,operation:t,forward:r}):Bf(u)&&(o=e({protocolErrors:u.extensions[Zo],response:u,operation:t,forward:r})),o){a=o.subscribe({next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return}n.next(u)},error:function(u){if(o=e({operation:t,networkError:u,graphQLErrors:u&&u.result&&u.result.errors||void 0,forward:r}),o){a=o.subscribe({next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return}n.error(u)},complete:function(){o||n.complete.bind(n)()}})}catch(u){e({networkError:u,operation:t,forward:r}),n.error(u)}return function(){i&&i.unsubscribe(),a&&i.unsubscribe()}})})}(function(e){zr(t,e);function t(r){var n=e.call(this)||this;return n.link=rs(r),n}return t.prototype.request=function(r,n){return this.link.request(r,n)},t})(Sr);var ep=function(){if(typeof AbortController>"u")return{controller:!1,signal:!1};var e=new AbortController,t=e.signal;return{controller:e,signal:t}},ns=Object.prototype.hasOwnProperty;function tp(e,t){if(e.status>=300){var r=function(){try{return JSON.parse(t)}catch{return t}};Qo(e,r(),"Response not successful: Received status code ".concat(e.status))}try{return JSON.parse(t)}catch(i){var n=i;throw n.name="ServerParseError",n.response=e,n.statusCode=e.status,n.bodyText=t,n}}function rp(e){return function(t){return t.text().then(function(r){return tp(t,r)}).then(function(r){return!Array.isArray(r)&&!ns.call(r,"data")&&!ns.call(r,"errors")&&Qo(t,r,"Server response was missing for query '".concat(Array.isArray(e)?e.map(function(n){return n.operationName}):e.operationName,"'.")),r})}}var tn=function(e,t){var r;try{r=JSON.stringify(e)}catch(i){var n=pr(54,t,i.message);throw n.parseError=i,n}return r};function np(e,t){var r=[],n=function(f,I){r.push("".concat(f,"=").concat(encodeURIComponent(I)))};if("query"in t&&n("query",t.query),t.operationName&&n("operationName",t.operationName),t.variables){var i=void 0;try{i=tn(t.variables,"Variables map")}catch(f){return{parseError:f}}n("variables",i)}if(t.extensions){var a=void 0;try{a=tn(t.extensions,"Extensions map")}catch(f){return{parseError:f}}n("extensions",a)}var o="",u=e,s=e.indexOf("#");s!==-1&&(o=e.substr(s),u=e.substr(0,s));var c=u.indexOf("?")===-1?"?":"&",l=u+c+r.join("&")+o;return{newURI:l}}var ip={includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},ap={accept:"*/*","content-type":"application/json"},op={method:"POST"},sp={http:ip,headers:ap,options:op},up=function(e,t){return t(e)};function cp(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var i={},a={};r.forEach(function(f){i=Oe(Oe(Oe({},i),f.options),{headers:Oe(Oe({},i.headers),f.headers)}),f.credentials&&(i.credentials=f.credentials),a=Oe(Oe({},a),f.http)}),i.headers&&(i.headers=lp(i.headers,a.preserveHeaderCase));var o=e.operationName,u=e.extensions,s=e.variables,c=e.query,l={operationName:o,variables:s};return a.includeExtensions&&(l.extensions=u),a.includeQuery&&(l.query=t(c,bi)),{options:i,body:l}}function lp(e,t){if(!t){var r={};return Object.keys(Object(e)).forEach(function(a){r[a.toLowerCase()]=e[a]}),r}var n={};Object.keys(Object(e)).forEach(function(a){n[a.toLowerCase()]={originalName:a,value:e[a]}});var i={};return Object.keys(n).forEach(function(a){i[n[a].originalName]=n[a].value}),i}var dp=function(e,t){var r=e.getContext(),n=r.uri;return n||(typeof t=="function"?t(e):t||"/graphql")};function fp(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function pp(e,t,r=""){if(!arguments.length)throw new TypeError("Argument 1 `value` is required.");if(typeof t!="function")throw new TypeError("Argument 2 `isExtractable` must be a function.");if(typeof r!="string")throw new TypeError("Argument 3 `path` must be a string.");const n=new Map,i=new Map;function a(o,u,s){if(t(o)){const f=i.get(o);return f?f.push(u):i.set(o,[u]),null}const c=Array.isArray(o)||typeof FileList<"u"&&o instanceof FileList,l=fp(o);if(c||l){let f=n.get(o);const I=!f;if(I&&(f=c?[]:o instanceof Object?{}:Object.create(null),n.set(o,f)),!s.has(o)){const g=u?`${u}.`:"",D=new Set(s).add(o);if(c){let b=0;for(const _ of o){const C=a(_,g+b++,D);I&&f.push(C)}}else for(const b in o){const _=a(o[b],g+b,D);I&&(f[b]=_)}}return f}return o}return{clone:a(e,r,new Set),files:i}}function mp(e,t,r){"name"in r?e.append(t,r,r.name):e.append(t,r)}function gp(e){return typeof File<"u"&&e instanceof File||typeof Blob<"u"&&e instanceof Blob}function hp({uri:e="/graphql",useGETForQueries:t,isExtractableFile:r=gp,FormData:n,formDataAppendFile:i=mp,print:a=up,fetch:o,fetchOptions:u,credentials:s,headers:c,includeExtensions:l}={}){const f={http:{includeExtensions:l},options:u,credentials:s,headers:c};return new Sr(I=>{const g=I.getContext(),{clientAwareness:{name:D,version:b}={},headers:_}=g,C={http:g.http,options:g.fetchOptions,credentials:g.credentials,headers:{...D&&{"apollographql-client-name":D},...b&&{"apollographql-client-version":b},..._}},{options:h,body:O}=cp(I,a,sp,f,C),{clone:E,files:y}=pp(O,r,"");let S=dp(I,e);if(y.size){h.headers&&delete h.headers["content-type"];const x=n||FormData,$=new x;$.append("operations",tn(E,"Payload"));const j={};let H=0;y.forEach(ie=>{j[++H]=ie}),$.append("map",JSON.stringify(j)),H=0,y.forEach((ie,ee)=>{i($,String(++H),ee)}),h.body=$}else if(t&&!I.query.definitions.some(x=>x.kind==="OperationDefinition"&&x.operation==="mutation")&&(h.method="GET"),h.method==="GET"){const{newURI:x,parseError:$}=np(S,O);if($)return new be(j=>{j.error($)});S=x}else h.body=tn(E,"Payload");const{controller:p}=ep();typeof p!="boolean"&&(h.signal&&(h.signal.aborted?p.abort():h.signal.addEventListener("abort",()=>{p.abort()},{once:!0})),h.signal=p.signal);const w=o||fetch;return new be(x=>{let $;return w(S,h).then(j=>(I.setContext({response:j}),j)).then(rp(I)).then(j=>{x.next(j),x.complete()}).catch(j=>{$||(j.result&&j.result.errors&&j.result.data&&x.next(j.result),x.error(j))}),()=>{$=!0,typeof p!="boolean"&&p.abort()}})})}const st=e=>(t,{args:r,canRead:n,toReference:i})=>n(t)?t:i({__typename:e,id:r==null?void 0:r.id}),br=(e,{canRead:t})=>{if(e!==void 0)return t(e)?e:null},vp={Query:{fields:{findImage:{read:st("Image")},findPerformer:{read:st("Performer")},findStudio:{read:st("Studio")},findGroup:{read:st("Group")},findGallery:{read:st("Gallery")},findScene:{read:st("Scene")},findTag:{read:st("Tag")},findSavedFilter:{read:st("SavedFilter")}}},Scene:{fields:{studio:{read:br}}},Image:{fields:{studio:{read:br},paths:{merge:!1}}},Group:{fields:{studio:{read:br}}},Gallery:{fields:{studio:{read:br}}},Studio:{fields:{parent_studio:{read:br}}}},Sp={BaseFile:["VideoFile","ImageFile","GalleryFile"],VisualFile:["VideoFile","ImageFile"]},yp=(($l=document.querySelector("base"))==null?void 0:$l.getAttribute("href"))??"/",Fi=e=>{let t=new URL(window.location.origin+yp);return e&&(t.pathname+=e),t},bp=()=>{const e=Fi("graphql"),t=Fi("graphql");t.protocol==="https:"?t.protocol="wss:":t.protocol="ws:";const r=hp({uri:e.toString()}),n=Jf({url:t.toString(),retryAttempts:1/0,shouldRetry(){return!0}}),i=new zf(n),a=rs(({networkError:l})=>{if(l&&l.statusCode===401){const f=new URL(Fi("login"),window.location.toString());f.searchParams.append("returnURL",window.location.href),window.location.href=f.toString()}}),o=d.ApolloLink.split(({query:l})=>{const f=Of(l);return f.kind==="OperationDefinition"&&f.operation==="subscription"},i,r),u=d.ApolloLink.from([a,o]),s=new d.InMemoryCache({typePolicies:vp,possibleTypes:Sp}),c=new d.ApolloClient({link:u,cache:s});return c.subscribe({query:bd}).subscribe({next:()=>{c.resetStore()}}),{cache:s,client:c,wsClient:n}},{client:is}=bp();function as(e,t){const r={};for(const n of t){const{selections:i}=_f(n).selectionSet;for(const a of i){if(!yf(a))continue;const o=a.name.value;r[o]=(u,{DELETE:s})=>s}}e.modify({fields:r}),e.gc()}function os(e,t,r){const n=e.extract();for(const i in n){if(r!=null&&r.includes(i))continue;const o=n[i].__typename;if(o&&t[o]){const u={};for(const s of t[o])u[s]=(c,{DELETE:l})=>l;e.modify({id:i,fields:u})}}}const Ip=e=>yd({variables:{id:e},skip:e==="new"||e===""}),_p=e=>is.query({query:po,variables:{ids:e}}),ss=e=>is.query({query:po,variables:{filter:e.makeFindFilter(),tag_filter:e.makeFilter()}});function Op(e,t,r){e.modify({fields:{stats(n){return{...n,[t]:n[t]+r}}}})}const us={Tag:["parents","children"]},Cp=[ld,fd,pd,cd,ud,dd,fo],Dp=()=>ad({update(e,t){var i;const r=(i=t.data)==null?void 0:i.tagCreate;if(!r)return;Op(e,"tag_count",1);const n={__typename:"Tag",id:r.id};os(e,us,e.identify(n)),as(e,[fo])}}),Ep=()=>sd({update(e,t){var i;const r=(i=t.data)==null?void 0:i.tagUpdate;if(!r)return;const n={__typename:"Tag",id:r.id};os(e,us,e.identify(n)),as(e,Cp)}}),wp=e=>vd({variables:{path:e}}),Tp=200,Ir=["byte","kibibyte","mebibyte","gibibyte","tebibyte","pebibyte"],xp=["B","KiB","MiB","GiB","TiB","PiB"],$p=(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return{size:0,unit:Ir[0]};let t=0,r=e;for(;r>=1024&&t+1<Ir.length;)r/=1024,t++;return{size:r,unit:Ir[t]}},ce=class ce{constructor(t,r,n,i){this.singular=t,this.plural=r,this.shortString=n,this.secs=i}toString(){return this.shortString}};Z(ce,"SECOND",new ce("second","seconds","s",1)),Z(ce,"MINUTE",new ce("minute","minutes","m",60)),Z(ce,"HOUR",new ce("hour","hours","h",ce.MINUTE.secs*60)),Z(ce,"DAY",new ce("day","days","D",ce.HOUR.secs*24)),Z(ce,"WEEK",new ce("week","weeks","W",ce.DAY.secs*7)),Z(ce,"MONTH",new ce("month","months","M",ce.DAY.secs*30)),Z(ce,"YEAR",new ce("year","years","Y",ce.DAY.secs*365)),Z(ce,"DURATIONS",[ce.SECOND,ce.MINUTE,ce.HOUR,ce.DAY,ce.WEEK,ce.MONTH,ce.YEAR]);let gt=ce;class cs{constructor(t,r){this.count=t,this.duration=r}toString(){return this.count.toString()+this.duration.toString()}}const Fp=(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return[new cs(0,gt.DURATIONS[0])];const t=[];let r=e;for(let n=gt.DURATIONS.length-1;n>=0;n--){const i=Math.floor(r/gt.DURATIONS[n].secs);i!==0&&(r%=gt.DURATIONS[n].secs,t.push(new cs(i,gt.DURATIONS[n])))}return t},Pp=(e=0,t=2)=>Fp(e).slice(0,t).join(" "),Mp=e=>{const t=Ir.indexOf(e);return xp[t]},Np=e=>Ir.indexOf(e)>=3?1:0,rn=(e,t)=>{let r=!1;e<0&&(r=!0,e=-e);const n=e%1,i=Math.round(n*1e3);let a=Math.trunc(e);const o=a%60;a=(a-o)/60;const u=a%60;a=(a-u)/60;const s=a;let c=String(o).padStart(2,"0");return s===0?c=String(u)+":"+c:(c=String(u).padStart(2,"0")+":"+c,c=String(s)+":"+c),t&&i>0&&(c+="."+i.toString().padStart(3,"0")),r?"-"+c:c},kp=(e,t)=>t===void 0?rn(e):`${rn(e)}-${rn(t)}`,Ap=e=>{if(!e)return null;const t=e.split(":");if(t.length>3)return null;let r=t[t.length-1],n=0;if(r.includes(".")){const o=r.split(".");if(o.length!==2)return null;r=o[0];const u=parseInt(o[1],10);if(Number.isNaN(u))return null;n=u/1e3}let i=0,a=1;for(;t.length>0;){const o=t.pop();if(o===void 0)return null;const u=parseInt(o,10);if(Number.isNaN(u))return null;i+=a*u,a*=60}return i+n},Lp=e=>e?e.replace(/^.*[\\/]/,""):"No File Name",jp=e=>{if(!e)return null;const t=e.split("-");if(t.length!==3)return null;const r=Number(t[0]),n=Math.max(0,Number(t[1])-1),i=Number(t[2]);return new Date(r,n,i,0,0,0,0)},nn=e=>{if(!e)return null;const t=e.split("-");let r=Number(t[0]);Number.isNaN(r)&&(r=new Date().getFullYear());let n=0;t.length>1&&(n=Math.max(0,Number(t[1])-1),(n>11||Number.isNaN(n))&&(n=0));let i=1;return t.length>2&&(i=Number(t[2]),(i>31||Number.isNaN(i))&&(i=1)),new Date(r,n,i,0,0,0,0)},qp=e=>{if(!e)return null;const t=e.split(" ");let r=null;if(t.length>0&&(r=nn(t[0])),r||(r=new Date),t.length>1){const n=t[1].split(":");r&&n.length>0&&r.setHours(Number(n[0])),r&&n.length>1&&r.setMinutes(Number(n[1])),r&&n.length>2&&r.setSeconds(Number(n[2]))}return r};function ls(e){return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`}function Vp(e){return`${ls(e)} ${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`}const Bp=(e,t)=>{if(!e)return 0;const r=nn(e),n=t?nn(t):new Date;if(!r||!n)return 0;let i=n.getFullYear()-r.getFullYear();return(r.getMonth()>n.getMonth()||r.getMonth()>=n.getMonth()&&r.getDate()>n.getDate())&&(i-=1),i},Rp=e=>`${(e/1e6).toFixed(2)} megabits per second`,Gp=(e,t)=>{const r=e>t?t:e;if(r>=6144)return"HUGE";if(r>=3840)return"8K";if(r>=3584)return"7K";if(r>=3e3)return"6K";if(r>=2560)return"5K";if(r>=1920)return"4K";if(r>=1440)return"1440p";if(r>=1080)return"1080p";if(r>=720)return"720p";if(r>=540)return"540p";if(r>=480)return"480p";if(r>=360)return"360p";if(r>=240)return"240p";if(r>=144)return"144p"},ds=(e,t)=>!e||e.startsWith("http://")||e.startsWith("https://")?e:t?e.startsWith(t.host)?`${t.protocol}//${e}`:`${t.protocol}//${t.host}/${e}`:`https://${e}`,Up=(e,t)=>{if(t)return t.hostname;if(e){let r="";try{const n=ds(e);n&&(e=n),r=new URL(e).hostname}catch{r=e}return r}else return""},fs=(e,t,r=!0)=>t?e.formatDate(t,{format:"long",timeZone:r?"utc":void 0}):"",Hp=(e,t,r=!0)=>{if(!t)return"";const n=t.match(/^(\d{4})$/);if(n){const a=parseInt(n[1],10);return e.formatDate(Date.UTC(a,0),{year:"numeric",timeZone:r?"utc":void 0})}const i=t.match(/^(\d{4})-(\d{2})$/);if(i){const a=parseInt(i[1],10),o=parseInt(i[2],10)-1;return e.formatDate(Date.UTC(a,o),{year:"numeric",month:"long",timeZone:r?"utc":void 0})}return e.formatDate(t,{format:"long",timeZone:r?"utc":void 0})},zp=(e,t,r=!1)=>`${fs(e,t,r)} ${e.formatTime(t,{timeZone:r?"utc":void 0})}`,Pi=["","K","M","B"],ut={fileSize:$p,formatFileSizeUnit:Mp,fileSizeFractionalDigits:Np,secondsToTimestamp:rn,formatTimestampRange:kp,timestampToSeconds:Ap,fileNameFromPath:Lp,stringToDate:jp,stringToFuzzyDate:nn,stringToFuzzyDateTime:qp,dateToString:ls,dateTimeToString:Vp,age:Bp,bitRate:Rp,resolution:Gp,sanitiseURL:ds,domainFromURL:Up,formatDate:fs,formatFuzzyDate:Hp,formatDateTime:zp,secondsAsTimeString:Pp,abbreviateCounter:(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return{size:0,unit:Pi[0]};let t=0,r=0,n=e;for(;n>=1e3&&t+1<Pi.length;)n/=1e3,t++,r=1;return{size:n,unit:Pi[t],digits:r}},stripQuotes:e=>e.startsWith('"')&&e.endsWith('"')?e.slice(1,-1):e,addQuotes:e=>`"${e}"`},Wp={[m.Equals]:"criterion_modifier.equals",[m.NotEquals]:"criterion_modifier.not_equals",[m.GreaterThan]:"criterion_modifier.greater_than",[m.LessThan]:"criterion_modifier.less_than",[m.IsNull]:"criterion_modifier.is_null",[m.NotNull]:"criterion_modifier.not_null",[m.Includes]:"criterion_modifier.includes",[m.IncludesAll]:"criterion_modifier.includes_all",[m.Excludes]:"criterion_modifier.excludes",[m.MatchesRegex]:"criterion_modifier.matches_regex",[m.NotMatchesRegex]:"criterion_modifier.not_matches_regex",[m.Between]:"criterion_modifier.between",[m.NotBetween]:"criterion_modifier.not_between"};class ps{constructor(t){Z(this,"criterionOption");this.criterionOption=t}isValid(){return!0}clone(){const t=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return t.cloneValues(),t}cloneValues(){}getId(){return`${this.criterionOption.type}`}}class me extends ps{constructor(r,n){super(r);Z(this,"_modifier");Z(this,"_value");this.modifier=r.defaultModifier,this.value=n}get modifier(){return this._modifier}set modifier(r){this._modifier=r}get value(){return this._value}set value(r){this._value=r}isValid(){return!0}modifierCriterionOption(){return this.criterionOption}clone(){const r=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return r.cloneValues(),r}cloneValues(){}static getModifierLabel(r,n){const i=Wp[n];return i?r.formatMessage({id:i}):""}getLabel(r,n=!1){const i=me.getModifierLabel(r,this.modifier);let a="";this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(a=this.getLabelValue(r));const o=n?this.criterionOption.sfwMessageID??this.criterionOption.messageID:this.criterionOption.messageID;return r.formatMessage({id:"criterion_modifier.format_string"},{criterion:r.formatMessage({id:o}),modifierString:i,valueString:a})}toQueryParams(){const r={type:this.criterionOption.type,modifier:this.modifier};return this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(r.value=this.encodeValue()),r}encodeValue(){return this.value}decodeValue(r){r!=null&&(this.value=r)}fromDecodedParams(r){const n=r;this.modifier=n.modifier,this.decodeValue(n.value)}setFromSavedCriterion(r){const n=r;n.value!==void 0&&n.value!==null&&(this.value=n.value),this.modifier=n.modifier}applyToCriterionInput(r){r[this.criterionOption.type]=this.toCriterionInput()}applyToSavedCriterion(r){r[this.criterionOption.type]={value:this.value,modifier:this.modifier}}toCriterionInput(){return{value:this.value,modifier:this.modifier}}}class ms{constructor(t){Z(this,"type");Z(this,"messageID");Z(this,"makeCriterionFn");Z(this,"sfwMessageID");Z(this,"hidden",!1);this.type=t.type,this.messageID=t.messageID,this.makeCriterionFn=t.makeCriterion,this.hidden=t.hidden??!1,this.sfwMessageID=t.sfwMessageID}makeCriterion(t){return this.makeCriterionFn(this,t)}}class de extends ms{constructor(r){super(r);Z(this,"modifierOptions");Z(this,"defaultModifier");Z(this,"options");Z(this,"inputType");this.modifierOptions=r.modifierOptions??[],this.defaultModifier=r.defaultModifier??m.Equals,this.options=r.options,this.inputType=r.inputType}}class Mi extends de{constructor(t,r,n,i,a){const o=[m.Includes,m.Excludes,m.IsNull,m.NotNull];let u=m.Includes;n&&(o.unshift(m.IncludesAll),u=m.IncludesAll),super({messageID:t,type:r,modifierOptions:o,defaultModifier:u,inputType:i,makeCriterion:a||(()=>new _r(this))})}}class _r extends me{constructor(t,r=[]){super(t,r)}cloneValues(){this.value=this.value.map(t=>({...t}))}getLabelValue(t){return this.value.map(r=>r.label).join(", ")}toCriterionInput(){return{value:this.value.map(t=>t.id),modifier:this.modifier}}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull?!0:this.value.length>0}}class Or extends me{constructor(t,r={items:[],excluded:[],depth:0}){super(t,r)}cloneValues(){this.value={...this.value,items:this.value.items.map(t=>({...t})),excluded:this.value.excluded.map(t=>({...t}))}}get modifier(){return this._modifier}set modifier(t){this._modifier=t,this.value&&t!==m.Includes&&t!==m.IncludesAll&&(this.value.excluded=[])}setFromSavedCriterion(t){const{modifier:r,value:n}=t;n!==void 0&&(this.value={items:n.items||[],excluded:n.excluded||[],depth:n.depth||0});const i=this.criterionOption.modifierOptions??[];r===m.Excludes&&i.find(a=>a===m.Excludes)===void 0?(this.modifier=m.Includes,this.value.excluded=[...this.value.excluded,...this.value.items],this.value.items=[]):this.modifier=r}getLabelValue(t){const r=(this.value.items??[]).map(n=>n.label).join(", ");return this.value.depth===0?r:`${r} (+${this.value.depth>0?this.value.depth:"all"})`}toCriterionInput(){let t=[];const r=this.modifier===m.Equals?0:this.value.depth;return this.value.excluded&&(t=this.value.excluded.map(n=>n.id)),{value:this.value.items.map(n=>n.id),excludes:t,modifier:this.modifier,depth:r}}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull?!0:this.value.items.length>0||this.value.excluded&&this.value.excluded.length>0}getLabel(t,r){let n="criterion_modifier.format_string",i=me.getModifierLabel(t,this.modifier),a="",o="";this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(a=this.value.items.map(s=>s.label).join(", "),this.value.excluded&&this.value.excluded.length>0&&(this.value.items.length===0?(i=me.getModifierLabel(t,m.Excludes),a=this.value.excluded.map(s=>s.label).join(", ")):(n="criterion_modifier.format_string_excludes",o=this.value.excluded.map(s=>s.label).join(", "))),this.value.depth!==0&&(n+="_depth"));const u=r?this.criterionOption.sfwMessageID??this.criterionOption.messageID:this.criterionOption.messageID;return t.formatMessage({id:n},{criterion:t.formatMessage({id:u}),modifierString:i,valueString:a,excludedString:o,depth:this.value.depth})}}class an extends de{constructor(t){super({modifierOptions:[m.Equals,m.NotEquals,m.Includes,m.Excludes,m.IsNull,m.NotNull,m.MatchesRegex,m.NotMatchesRegex],defaultModifier:m.Equals,inputType:"text",makeCriterion:()=>new He(this),...t})}}function te(e,t,r){return new an({messageID:t??e,type:e,...r})}class Yp extends de{constructor(t,r){super({messageID:t,type:r,modifierOptions:[m.Equals,m.NotEquals,m.Includes,m.Excludes,m.MatchesRegex,m.NotMatchesRegex],defaultModifier:m.Equals,inputType:"text",makeCriterion:()=>new He(this)})}}function on(e,t){return new Yp(t??e,e)}class He extends me{constructor(t){super(t,"")}getLabelValue(t){return this.value}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull||this.value.length>0}}class Ni extends me{constructor(t,r=[]){super(t,r)}cloneValues(){this.value=this.value.slice()}getLabelValue(t){return this.value.join(", ")}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull||this.value.length>0}}class ht extends de{constructor(t,r,n){super({messageID:t,type:r,modifierOptions:[],defaultModifier:m.Equals,options:["true","false"],makeCriterion:n||(()=>new vt(this))})}}function sn(e,t){return new ht(e,e)}class vt extends He{toCriterionInput(){return this.value==="true"}isValid(){return this.value==="true"||this.value==="false"}}class gs extends de{constructor(t,r,n){super({messageID:t,type:r,options:["true","false"],makeCriterion:n||(()=>new ki(this))})}}class ki extends He{toCriterionInput(){return this.value}isValid(){return this.value==="true"||this.value==="false"}}class Kp extends de{constructor(t,r){super({messageID:t,type:r,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.IsNull,m.NotNull,m.Between,m.NotBetween],defaultModifier:m.Equals,inputType:"number",makeCriterion:()=>new Ai(this)})}}function hs(e,t){return new Kp(t??e,e)}class Qp extends de{constructor(t,r,n){super({messageID:t,type:r,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.Between,m.NotBetween,m.IsNull,m.NotNull],defaultModifier:m.Equals,inputType:"number",makeCriterion:n||(()=>new Ai(this))})}}class un extends de{constructor(t,r,n,i){super({messageID:t,type:r,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.Between,m.NotBetween],defaultModifier:m.Equals,inputType:"number",makeCriterion:n||(()=>new Ai(this)),...i})}}function K(e,t,r){return new un(t??e,e,void 0,r)}function Cr(e,t){return e===m.Between||e===m.NotBetween?{value:t.value,value2:t.value2}:{value:t.value}}function Jp(e){return typeof e.value=="object"?e.value:{value:e.value,value2:e.value2}}class Ai extends me{constructor(t){super(t,{value:void 0,value2:void 0})}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(t){typeof t!="object"?this._value={value:t,value2:void 0}:this._value=t}toCriterionInput(){var t,r;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??0,value2:(r=this.value)==null?void 0:r.value2}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return Cr(this.modifier,this.value)}getLabelValue(t){const{value:r,value2:n}=this.value;return this.modifier===m.Between||this.modifier===m.NotBetween?`${r}, ${n??0}`:`${r}`}isValid(){if(this.modifier===m.IsNull||this.modifier===m.NotNull)return!0;const{value:t,value2:r}=this.value;return!(t===void 0||r===void 0&&(this.modifier===m.Between||this.modifier===m.NotBetween))}}let Zp=class extends un{constructor(t,r){super(t,r,()=>new vs(this))}};function cn(e,t){return new Zp(e,e)}class Xp extends Qp{constructor(t,r){super(t,r,()=>new vs(this))}}function em(e,t){return new Xp(e,e)}class vs extends me{constructor(t){super(t,{value:void 0,value2:void 0})}cloneValues(){this.value={...this.value}}toCriterionInput(){var t,r;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??0,value2:(r=this.value)==null?void 0:r.value2}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return Cr(this.modifier,this.value)}getLabelValue(t){const r=ut.secondsToTimestamp(this.value.value??0),n=ut.secondsToTimestamp(this.value.value2??0);return this.modifier===m.Between||this.modifier===m.NotBetween?`${r}, ${n}`:r}isValid(){if(this.modifier===m.IsNull||this.modifier===m.NotNull)return!0;const{value:t,value2:r}=this.value;return!(t===void 0||r===void 0&&(this.modifier===m.Between||this.modifier===m.NotBetween))}}class tm extends de{constructor(t,r){super({messageID:t,type:r,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.IsNull,m.NotNull,m.Between,m.NotBetween],defaultModifier:m.Equals,inputType:"text",makeCriterion:()=>new rm(this)})}}function Xe(e){return new tm(e,e)}class rm extends me{constructor(t){super(t,{value:"",value2:void 0})}cloneValues(){this.value={...this.value}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return Cr(this.modifier,this.value)}toCriterionInput(){var t,r;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??"",value2:(r=this.value)==null?void 0:r.value2}}getLabelValue(){const{value:t}=this.value;return this.modifier===m.Between||this.modifier===m.NotBetween?`${t}, ${this.value.value2}`:`${t}`}isValid(){if(this.modifier===m.IsNull||this.modifier===m.NotNull)return!0;const{value:t,value2:r}=this.value;return!(!t||!r&&(this.modifier===m.Between||this.modifier===m.NotBetween))}}class nm extends de{constructor(t,r){super({messageID:t,type:r,modifierOptions:[m.GreaterThan,m.LessThan,m.Between,m.NotBetween],defaultModifier:m.GreaterThan,inputType:"text",makeCriterion:()=>new im(this)})}}function Ie(e){return new nm(e,e)}class im extends me{constructor(t){super(t,{value:"",value2:void 0})}cloneValues(){this.value={...this.value}}toCriterionInput(){return{modifier:this.modifier,value:this.transformValueToInput(this.value.value??""),value2:this.value.value2?this.transformValueToInput(this.value.value2):null}}setFromSavedCriterion(t){super.setFromSavedCriterion(t),this.value=Jp(t)}encodeValue(){return Cr(this.modifier,this.value)}getLabelValue(){const{value:t}=this.value;return this.modifier===m.Between||this.modifier===m.NotBetween?`${t}, ${this.value.value2}`:`${t}`}transformValueToInput(t){return t=t.trim(),/^\d{4}-\d{2}-\d{2}(( |T)\d{2}:\d{2})?$/.test(t)?t.replace(" ","T"):""}isValid(){if(this.modifier===m.IsNull||this.modifier===m.NotNull)return!0;const{value:t,value2:r}=this.value;return!(!t||!r&&(this.modifier===m.Between||this.modifier===m.NotBetween))}}class am extends an{constructor(t){super({messageID:"unsupported_criterion",type:t,makeCriterion:()=>new om(this)})}}class om extends He{getLabel(t){const r=me.getModifierLabel(t,this.modifier);let n="";return this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(n=this.getLabelValue(t)),t.formatMessage({id:"criterion_modifier.format_string"},{criterion:t.formatMessage({id:"criterion.unsupported"},{type:this.criterionOption.type}),modifierString:r,valueString:n})}applyToCriterionInput(){}applyToSavedCriterion(){}setFromSavedCriterion(){}}const Ss=new ht("favourite","filter_favorites",()=>new sm);class sm extends vt{constructor(){super(Ss)}}const ys=new ht("favourite","favorite",()=>new um);class um extends vt{constructor(){super(ys)}}const bs=new ht("favourite","favorite",()=>new cm);class cm extends vt{constructor(){super(bs)}}const ln=new ht("performer_favorite","performer_favorite",()=>new lm);class lm extends vt{constructor(){super(ln)}}class dm extends He{toCriterionInput(){return this.value}}class St extends de{constructor(t,r,n){super({messageID:t,type:r,options:n,modifierOptions:[],defaultModifier:m.Equals,makeCriterion:()=>new dm(this)})}}const fm=new St("isMissing","is_missing",["title","code","details","director","url","date","rating","cover","galleries","studio","group","performers","tags","stash_id"]),pm=new St("isMissing","is_missing",["title","details","photographer","url","date","code","rating","galleries","studio","performers","tags"]),mm=new St("isMissing","is_missing",["url","ethnicity","country","hair_color","eye_color","height","weight","measurements","fake_tits","penis_length","circumcised","career_start","career_end","tattoos","piercings","aliases","gender","birthdate","death_date","disambiguation","tags","image","details","rating","stash_id"]),gm=new St("isMissing","is_missing",["title","code","details","photographer","url","date","rating","cover","studio","performers","tags","scenes"]),hm=new St("isMissing","is_missing",["image","aliases","description","stash_id"]),vm=new St("isMissing","is_missing",["image","stash_id","details","url","aliases","tags","rating"]),Sm=new St("isMissing","is_missing",["aliases","description","director","date","url","rating","studio","performers","tags","front_image","back_image","scenes"]),dn=new ht("organized","organized",()=>new ym);class ym extends vt{constructor(){super(dn)}}const Is=new gs("hasChapters","has_chapters",()=>new bm);class bm extends ki{constructor(){super(Is)}}const Im=[m.IncludesAll,m.Includes,m.Equals,m.IsNull,m.NotNull],_m=m.IncludesAll,Om="performers",Bt=new de({messageID:"performers",type:"performers",modifierOptions:Im,defaultModifier:_m,inputType:Om,makeCriterion:()=>new Rt});class Rt extends me{constructor(){super(Bt,{items:[],excluded:[]})}cloneValues(){this.value={...this.value,items:this.value.items.map(t=>({...t})),excluded:this.value.excluded.map(t=>({...t}))}}get modifier(){return this._modifier}set modifier(t){this._modifier=t,t!==m.Includes&&t!==m.IncludesAll&&(this.value.excluded=[])}setFromSavedCriterion(t){const{modifier:r,value:n}=t;Array.isArray(n)?this.value={items:n,excluded:[]}:n!==void 0&&(this.value={items:n.items||[],excluded:n.excluded||[]}),r===m.Excludes?(this.modifier=m.Includes,this.value.excluded=[...this.value.excluded,...this.value.items],this.value.items=[]):this.modifier=r}getLabelValue(t){return this.value.items.map(r=>r.label).join(", ")}toCriterionInput(){let t=[];return this.value.excluded&&(t=this.value.excluded.map(r=>r.id)),{value:this.value.items.map(r=>r.id),excludes:t,modifier:this.modifier}}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull?!0:this.value.items.length>0||this.value.excluded&&this.value.excluded.length>0}getLabel(t){let r="criterion_modifier.format_string",n=me.getModifierLabel(t,this.modifier),i="",a="";return this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(i=this.value.items.map(o=>o.label).join(", "),this.value.excluded&&this.value.excluded.length>0&&(this.value.items.length===0?(n=me.getModifierLabel(t,m.Excludes),i=this.value.excluded.map(o=>o.label).join(", ")):(r="criterion_modifier.format_string_excludes",a=this.value.excluded.map(o=>o.label).join(", ")))),t.formatMessage({id:r},{criterion:t.formatMessage({id:this.criterionOption.messageID}),modifierString:n,valueString:i,excludedString:a})}}const _s=new Map([["144p",$e.VeryLow],["240p",$e.Low],["360p",$e.R360P],["480p",$e.Standard],["540p",$e.WebHd],["720p",$e.StandardHd],["1080p",$e.FullHd],["1440p",$e.QuadHd],["4k",$e.FourK],["5k",$e.FiveK],["6k",$e.SixK],["7k",$e.SevenK],["8k",$e.EightK],["Huge",$e.Huge]]),Cm=(e,t)=>e?_s.get(e):void 0,Dm=Array.from(_s.keys());class Os extends de{constructor(t,r){super({messageID:t,type:t,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan],options:Dm,makeCriterion:r})}}class Cs extends He{toCriterionInput(){const t=Cm(this.value);if(t!==void 0)return{value:t,modifier:this.modifier}}}const Li=new Os("resolution",()=>new Em);class Em extends Cs{constructor(){super(Li)}}const Ds=new Os("average_resolution",()=>new wm);class wm extends Cs{constructor(){super(Ds)}}const Es="scenes",ws=new Mi("scenes","scenes",!0,Es,()=>new Tm);class Tm extends _r{constructor(){super(ws)}}const xm=[m.Includes,m.Excludes],$m=m.Includes,Ts=new de({messageID:"scenes",type:"scenes",modifierOptions:xm,defaultModifier:$m,inputType:Es,makeCriterion:()=>new xs});class xs extends _r{constructor(){super(Ts)}}const Fm=[m.Includes,m.IsNull,m.NotNull],Pm=m.Includes,$s="studios",Gt=new de({messageID:"studios",type:"studios",modifierOptions:Fm,defaultModifier:Pm,inputType:$s,makeCriterion:()=>new Ut});class Ut extends Or{constructor(){super(Gt)}}const Fs=new Mi("parent_studios","parents",!1,$s,()=>new Ps);class Ps extends _r{constructor(){super(Fs)}}const Ms=[m.IncludesAll,m.Includes,m.Equals,m.IsNull,m.NotNull],ji=[m.IncludesAll,m.Includes,m.IsNull,m.NotNull],Mm=m.IncludesAll,Nm="tags";class Dr extends de{constructor(t,r,n){super({messageID:t,type:r,modifierOptions:n,defaultModifier:Mm,inputType:Nm,makeCriterion:()=>new fn(this)})}}const ct=new Dr("tags","tags",Ms),km=new Dr("scene_tags","scene_tags",Ms),qi=new Dr("performer_tags","performer_tags",ji),Ns=new Dr("parent_tags","parents",ji),ks=new Dr("sub_tags","children",ji);class fn extends Or{}const Vi=["title","path","rating","file_mod_time","tag_count","performer_count","random"];class _e{constructor(t,r,n,i){Z(this,"defaultSortBy","");Z(this,"sortByOptions",[]);Z(this,"displayModeOptions",[]);Z(this,"criterionOptions",[]);this.defaultSortBy=t,this.sortByOptions=[...r,_e.createSortBy("created_at"),_e.createSortBy("updated_at")],this.displayModeOptions=n,this.criterionOptions=i}static createSortBy(t){return{messageID:t,value:t}}}var ge=(e=>(e[e.Grid=0]="Grid",e[e.List=1]="List",e[e.Wall=2]="Wall",e[e.Tagger=3]="Tagger",e))(ge||{});const Am={type:"stars",starPrecision:"full"};function Lm(e,t){let r=t;r||(r=1);const n=1/r;return Math.round(e*n)/n}function jm(e){switch(e){case"full":return 1;case"half":return .5;case"quarter":return .25;case"tenth":return .1;default:return 1}}function Bi(e,t){if(!e)return null;const{type:r,starPrecision:n}=t,i=r==="decimal"?.1:jm(n??"full"),o=100/(r==="decimal"?10:5);return Lm(e/o,i)}function qm(e,t){const n=100/((t??"stars")==="decimal"?10:5);return Math.round(e*n)}const Vm=[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.Between,m.NotBetween,m.IsNull,m.NotNull];function Bm(e){return(e==null?void 0:e.ui.ratingSystemOptions)??Am}const yt=new de({messageID:"rating",type:"rating100",modifierOptions:Vm,defaultModifier:m.Equals,makeCriterion:(e,t)=>new Rm(Bm(t)),inputType:"number"});class Rm extends me{constructor(r){super(yt,{value:0,value2:void 0});Z(this,"ratingSystem");this.ratingSystem=r}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(r){typeof r!="object"?this._value={value:qm(r,this.ratingSystem.type),value2:void 0}:this._value=r}toCriterionInput(){return{modifier:this.modifier,value:this.value.value??0,value2:this.value.value2}}setFromSavedCriterion(r){super.setFromSavedCriterion(r)}encodeValue(){return Cr(this.modifier,this.value)}getLabelValue(){const{value:r,value2:n}=this.value;return this.modifier===m.Between||this.modifier===m.NotBetween?`${Bi(r,this.ratingSystem)??0}, ${Bi(n,this.ratingSystem)??0}`:`${Bi(r,this.ratingSystem)??0}`}}const pn=new an({messageID:"path",type:"path",defaultModifier:m.Includes,makeCriterion:()=>new Gm});class Gm extends He{constructor(){super(pn)}}function Um(){this.__data__=[],this.size=0}function As(e,t){return e===t||e!==e&&t!==t}function mn(e,t){for(var r=e.length;r--;)if(As(e[r][0],t))return r;return-1}var Hm=Array.prototype,zm=Hm.splice;function Wm(e){var t=this.__data__,r=mn(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():zm.call(t,r,1),--this.size,!0}function Ym(e){var t=this.__data__,r=mn(t,e);return r<0?void 0:t[r][1]}function Km(e){return mn(this.__data__,e)>-1}function Qm(e,t){var r=this.__data__,n=mn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function et(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}et.prototype.clear=Um,et.prototype.delete=Wm,et.prototype.get=Ym,et.prototype.has=Km,et.prototype.set=Qm;function Jm(){this.__data__=new et,this.size=0}function Zm(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Xm(e){return this.__data__.get(e)}function eg(e){return this.__data__.has(e)}var Ls=typeof global=="object"&&global&&global.Object===Object&&global,tg=typeof self=="object"&&self&&self.Object===Object&&self,ze=Ls||tg||Function("return this")(),Ht=ze.Symbol,js=Object.prototype,rg=js.hasOwnProperty,ng=js.toString,Er=Ht?Ht.toStringTag:void 0;function ig(e){var t=rg.call(e,Er),r=e[Er];try{e[Er]=void 0;var n=!0}catch{}var i=ng.call(e);return n&&(t?e[Er]=r:delete e[Er]),i}var ag=Object.prototype,og=ag.toString;function sg(e){return og.call(e)}var ug="[object Null]",cg="[object Undefined]",qs=Ht?Ht.toStringTag:void 0;function zt(e){return e==null?e===void 0?cg:ug:qs&&qs in Object(e)?ig(e):sg(e)}function bt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var lg="[object AsyncFunction]",dg="[object Function]",fg="[object GeneratorFunction]",pg="[object Proxy]";function Vs(e){if(!bt(e))return!1;var t=zt(e);return t==dg||t==fg||t==lg||t==pg}var Ri=ze["__core-js_shared__"],Bs=function(){var e=/[^.]+$/.exec(Ri&&Ri.keys&&Ri.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function mg(e){return!!Bs&&Bs in e}var gg=Function.prototype,hg=gg.toString;function It(e){if(e!=null){try{return hg.call(e)}catch{}try{return e+""}catch{}}return""}var vg=/[\\^$.*+?()[\]{}|]/g,Sg=/^\[object .+?Constructor\]$/,yg=Function.prototype,bg=Object.prototype,Ig=yg.toString,_g=bg.hasOwnProperty,Og=RegExp("^"+Ig.call(_g).replace(vg,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Cg(e){if(!bt(e)||mg(e))return!1;var t=Vs(e)?Og:Sg;return t.test(It(e))}function Dg(e,t){return e==null?void 0:e[t]}function _t(e,t){var r=Dg(e,t);return Cg(r)?r:void 0}var wr=_t(ze,"Map"),Tr=_t(Object,"create");function Eg(){this.__data__=Tr?Tr(null):{},this.size=0}function wg(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Tg="__lodash_hash_undefined__",xg=Object.prototype,$g=xg.hasOwnProperty;function Fg(e){var t=this.__data__;if(Tr){var r=t[e];return r===Tg?void 0:r}return $g.call(t,e)?t[e]:void 0}var Pg=Object.prototype,Mg=Pg.hasOwnProperty;function Ng(e){var t=this.__data__;return Tr?t[e]!==void 0:Mg.call(t,e)}var kg="__lodash_hash_undefined__";function Ag(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Tr&&t===void 0?kg:t,this}function Ot(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ot.prototype.clear=Eg,Ot.prototype.delete=wg,Ot.prototype.get=Fg,Ot.prototype.has=Ng,Ot.prototype.set=Ag;function Lg(){this.size=0,this.__data__={hash:new Ot,map:new(wr||et),string:new Ot}}function jg(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function gn(e,t){var r=e.__data__;return jg(t)?r[typeof t=="string"?"string":"hash"]:r.map}function qg(e){var t=gn(this,e).delete(e);return this.size-=t?1:0,t}function Vg(e){return gn(this,e).get(e)}function Bg(e){return gn(this,e).has(e)}function Rg(e,t){var r=gn(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function Wt(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Wt.prototype.clear=Lg,Wt.prototype.delete=qg,Wt.prototype.get=Vg,Wt.prototype.has=Bg,Wt.prototype.set=Rg;var Gg=200;function Ug(e,t){var r=this.__data__;if(r instanceof et){var n=r.__data__;if(!wr||n.length<Gg-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Wt(n)}return r.set(e,t),this.size=r.size,this}function Yt(e){var t=this.__data__=new et(e);this.size=t.size}Yt.prototype.clear=Jm,Yt.prototype.delete=Zm,Yt.prototype.get=Xm,Yt.prototype.has=eg,Yt.prototype.set=Ug;function Hg(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var Rs=function(){try{var e=_t(Object,"defineProperty");return e({},"",{}),e}catch{}}();function zg(e,t,r){t=="__proto__"&&Rs?Rs(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Wg=Object.prototype,Yg=Wg.hasOwnProperty;function Kg(e,t,r){var n=e[t];(!(Yg.call(e,t)&&As(n,r))||r===void 0&&!(t in e))&&zg(e,t,r)}function Qg(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Kt(e){return e!=null&&typeof e=="object"}var Jg="[object Arguments]";function Gs(e){return Kt(e)&&zt(e)==Jg}var Us=Object.prototype,Zg=Us.hasOwnProperty,Xg=Us.propertyIsEnumerable,eh=Gs(function(){return arguments}())?Gs:function(e){return Kt(e)&&Zg.call(e,"callee")&&!Xg.call(e,"callee")},Gi=Array.isArray;function th(){return!1}var Hs=typeof exports=="object"&&exports&&!exports.nodeType&&exports,zs=Hs&&typeof module=="object"&&module&&!module.nodeType&&module,rh=zs&&zs.exports===Hs,Ws=rh?ze.Buffer:void 0,nh=Ws?Ws.isBuffer:void 0,Ys=nh||th,ih=9007199254740991,ah=/^(?:0|[1-9]\d*)$/;function oh(e,t){var r=typeof e;return t=t??ih,!!t&&(r=="number"||r!="symbol"&&ah.test(e))&&e>-1&&e%1==0&&e<t}var sh=9007199254740991;function Ks(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=sh}var uh="[object Arguments]",ch="[object Array]",lh="[object Boolean]",dh="[object Date]",fh="[object Error]",ph="[object Function]",mh="[object Map]",gh="[object Number]",hh="[object Object]",vh="[object RegExp]",Sh="[object Set]",yh="[object String]",bh="[object WeakMap]",Ih="[object ArrayBuffer]",_h="[object DataView]",Oh="[object Float32Array]",Ch="[object Float64Array]",Dh="[object Int8Array]",Eh="[object Int16Array]",wh="[object Int32Array]",Th="[object Uint8Array]",xh="[object Uint8ClampedArray]",$h="[object Uint16Array]",Fh="[object Uint32Array]",pe={};pe[Oh]=pe[Ch]=pe[Dh]=pe[Eh]=pe[wh]=pe[Th]=pe[xh]=pe[$h]=pe[Fh]=!0,pe[uh]=pe[ch]=pe[Ih]=pe[lh]=pe[_h]=pe[dh]=pe[fh]=pe[ph]=pe[mh]=pe[gh]=pe[hh]=pe[vh]=pe[Sh]=pe[yh]=pe[bh]=!1;function Ph(e){return Kt(e)&&Ks(e.length)&&!!pe[zt(e)]}function Ui(e){return function(t){return e(t)}}var Qs=typeof exports=="object"&&exports&&!exports.nodeType&&exports,xr=Qs&&typeof module=="object"&&module&&!module.nodeType&&module,Mh=xr&&xr.exports===Qs,Hi=Mh&&Ls.process,Qt=function(){try{var e=xr&&xr.require&&xr.require("util").types;return e||Hi&&Hi.binding&&Hi.binding("util")}catch{}}(),Js=Qt&&Qt.isTypedArray,Nh=Js?Ui(Js):Ph,kh=Object.prototype,Ah=kh.hasOwnProperty;function Lh(e,t){var r=Gi(e),n=!r&&eh(e),i=!r&&!n&&Ys(e),a=!r&&!n&&!i&&Nh(e),o=r||n||i||a,u=o?Qg(e.length,String):[],s=u.length;for(var c in e)Ah.call(e,c)&&!(o&&(c=="length"||i&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||oh(c,s)))&&u.push(c);return u}var jh=Object.prototype;function Zs(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||jh;return e===r}function Xs(e,t){return function(r){return e(t(r))}}var qh=Xs(Object.keys,Object),Vh=Object.prototype,Bh=Vh.hasOwnProperty;function Rh(e){if(!Zs(e))return qh(e);var t=[];for(var r in Object(e))Bh.call(e,r)&&r!="constructor"&&t.push(r);return t}function Gh(e){return e!=null&&Ks(e.length)&&!Vs(e)}function Uh(e){return Gh(e)?Lh(e):Rh(e)}var eu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,tu=eu&&typeof module=="object"&&module&&!module.nodeType&&module,Hh=tu&&tu.exports===eu,ru=Hh?ze.Buffer:void 0;ru&&ru.allocUnsafe;function zh(e,t){return e.slice()}function Wh(e,t){for(var r=-1,n=e==null?0:e.length,i=0,a=[];++r<n;){var o=e[r];t(o,r,e)&&(a[i++]=o)}return a}function Yh(){return[]}var Kh=Object.prototype,Qh=Kh.propertyIsEnumerable,nu=Object.getOwnPropertySymbols,Jh=nu?function(e){return e==null?[]:(e=Object(e),Wh(nu(e),function(t){return Qh.call(e,t)}))}:Yh;function Zh(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}var Xh=Xs(Object.getPrototypeOf,Object);function ev(e,t,r){var n=t(e);return Gi(e)?n:Zh(n,r(e))}function tv(e){return ev(e,Uh,Jh)}var zi=_t(ze,"DataView"),Wi=_t(ze,"Promise"),Yi=_t(ze,"Set"),Ki=_t(ze,"WeakMap"),iu="[object Map]",rv="[object Object]",au="[object Promise]",ou="[object Set]",su="[object WeakMap]",uu="[object DataView]",nv=It(zi),iv=It(wr),av=It(Wi),ov=It(Yi),sv=It(Ki),tt=zt;(zi&&tt(new zi(new ArrayBuffer(1)))!=uu||wr&&tt(new wr)!=iu||Wi&&tt(Wi.resolve())!=au||Yi&&tt(new Yi)!=ou||Ki&&tt(new Ki)!=su)&&(tt=function(e){var t=zt(e),r=t==rv?e.constructor:void 0,n=r?It(r):"";if(n)switch(n){case nv:return uu;case iv:return iu;case av:return au;case ov:return ou;case sv:return su}return t});var uv=Object.prototype,cv=uv.hasOwnProperty;function lv(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&cv.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var cu=ze.Uint8Array;function Qi(e){var t=new e.constructor(e.byteLength);return new cu(t).set(new cu(e)),t}function dv(e,t){var r=Qi(e.buffer);return new e.constructor(r,e.byteOffset,e.byteLength)}var fv=/\w*$/;function pv(e){var t=new e.constructor(e.source,fv.exec(e));return t.lastIndex=e.lastIndex,t}var lu=Ht?Ht.prototype:void 0,du=lu?lu.valueOf:void 0;function mv(e){return du?Object(du.call(e)):{}}function gv(e,t){var r=Qi(e.buffer);return new e.constructor(r,e.byteOffset,e.length)}var hv="[object Boolean]",vv="[object Date]",Sv="[object Map]",yv="[object Number]",bv="[object RegExp]",Iv="[object Set]",_v="[object String]",Ov="[object Symbol]",Cv="[object ArrayBuffer]",Dv="[object DataView]",Ev="[object Float32Array]",wv="[object Float64Array]",Tv="[object Int8Array]",xv="[object Int16Array]",$v="[object Int32Array]",Fv="[object Uint8Array]",Pv="[object Uint8ClampedArray]",Mv="[object Uint16Array]",Nv="[object Uint32Array]";function kv(e,t,r){var n=e.constructor;switch(t){case Cv:return Qi(e);case hv:case vv:return new n(+e);case Dv:return dv(e);case Ev:case wv:case Tv:case xv:case $v:case Fv:case Pv:case Mv:case Nv:return gv(e);case Sv:return new n;case yv:case _v:return new n(e);case bv:return pv(e);case Iv:return new n;case Ov:return mv(e)}}var fu=Object.create,Av=function(){function e(){}return function(t){if(!bt(t))return{};if(fu)return fu(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();function Lv(e){return typeof e.constructor=="function"&&!Zs(e)?Av(Xh(e)):{}}var jv="[object Map]";function qv(e){return Kt(e)&&tt(e)==jv}var pu=Qt&&Qt.isMap,Vv=pu?Ui(pu):qv,Bv="[object Set]";function Rv(e){return Kt(e)&&tt(e)==Bv}var mu=Qt&&Qt.isSet,Gv=mu?Ui(mu):Rv,gu="[object Arguments]",Uv="[object Array]",Hv="[object Boolean]",zv="[object Date]",Wv="[object Error]",hu="[object Function]",Yv="[object GeneratorFunction]",Kv="[object Map]",Qv="[object Number]",vu="[object Object]",Jv="[object RegExp]",Zv="[object Set]",Xv="[object String]",eS="[object Symbol]",tS="[object WeakMap]",rS="[object ArrayBuffer]",nS="[object DataView]",iS="[object Float32Array]",aS="[object Float64Array]",oS="[object Int8Array]",sS="[object Int16Array]",uS="[object Int32Array]",cS="[object Uint8Array]",lS="[object Uint8ClampedArray]",dS="[object Uint16Array]",fS="[object Uint32Array]",fe={};fe[gu]=fe[Uv]=fe[rS]=fe[nS]=fe[Hv]=fe[zv]=fe[iS]=fe[aS]=fe[oS]=fe[sS]=fe[uS]=fe[Kv]=fe[Qv]=fe[vu]=fe[Jv]=fe[Zv]=fe[Xv]=fe[eS]=fe[cS]=fe[lS]=fe[dS]=fe[fS]=!0,fe[Wv]=fe[hu]=fe[tS]=!1;function hn(e,t,r,n,i,a){var o;if(o!==void 0)return o;if(!bt(e))return e;var u=Gi(e);if(u)o=lv(e);else{var s=tt(e),c=s==hu||s==Yv;if(Ys(e))return zh(e);if(s==vu||s==gu||c&&!i)o=c?{}:Lv(e);else{if(!fe[s])return i?e:{};o=kv(e,s)}}a||(a=new Yt);var l=a.get(e);if(l)return l;a.set(e,o),Gv(e)?e.forEach(function(g){o.add(hn(g,t,r,g,e,a))}):Vv(e)&&e.forEach(function(g,D){o.set(D,hn(g,t,r,D,e,a))});var f=tv,I=u?void 0:f(e);return Hg(I||e,function(g,D){I&&(D=g,g=e[D]),Kg(o,D,hn(g,t,r,D,e,a))}),o}var pS=1,mS=4;function vn(e){return hn(e,pS|mS)}function Su(e){return e?e.map(t=>t).join(", "):""}const lt=new ms({type:"custom_fields",messageID:"custom_fields.title",makeCriterion:()=>new yu});class yu extends ps{constructor(){super(lt);Z(this,"value",[])}isValid(){return this.value.length>0}applyToCriterionInput(r){r.custom_fields=vn(this.value)}applyToSavedCriterion(r){r.custom_fields=vn(this.value)}getLabel(r){var s;if(this.value.length===0)return"";const n=this.value[0];let i="",a="";n.modifier!==m.IsNull&&n.modifier!==m.NotNull&&(((s=n.value)==null?void 0:s.length)??0)>0&&(a=Su(n.value));const o=me.getModifierLabel(r,n.modifier),u={criterion:n.field,modifierString:o,valueString:a,others:""};return this.value.length===1?i="custom_fields.criteria_format_string":(i="custom_fields.criteria_format_string_others",u.others=(this.value.length-1).toString()),r.formatMessage({id:i},u)}getValueLabel(r,n){var u;let i="";n.modifier!==m.IsNull&&n.modifier!==m.NotNull&&(((u=n.value)==null?void 0:u.length)??0)>0&&(i=Su(n.value));const a=me.getModifierLabel(r,n.modifier),o={criterion:n.field,modifierString:a,valueString:i};return r.formatMessage({id:"custom_fields.criteria_format_string"},o)}toQueryParams(){return{type:this.criterionOption.type,value:this.value}}fromDecodedParams(r){const n=r;this.value=vn(n.value)}setFromSavedCriterion(r){this.value=vn(r)}}const bu=[m.Includes],Iu=m.Includes,_u="folders",Ji=new de({messageID:"folder",type:"folder",modifierOptions:bu,defaultModifier:Iu,inputType:_u,makeCriterion:()=>new gS}),Ou=new de({messageID:"parent_folder",type:"parent_folder",modifierOptions:bu,defaultModifier:Iu,inputType:_u,makeCriterion:()=>new hS});class gS extends Or{constructor(){super(Ji)}applyToCriterionInput(t){t.files_filter={parent_folder:this.toCriterionInput()}}}class hS extends Or{constructor(){super(Ou)}applyToCriterionInput(t){t.parent_folder=this.toCriterionInput()}}const vS="path",SS=["date",...Vi].map(_e.createSortBy).concat([{messageID:"performer_age",value:"performer_age"},{messageID:"image_count",value:"images_count"},{messageID:"zip_file_count",value:"file_count"}]),yS=[ge.Grid,ge.List,ge.Wall],bS=K("performer_age"),IS=[te("title"),te("code","scene_code"),te("details"),te("photographer"),pn,Ou,te("checksum","media_info.md5"),yt,dn,Ds,gm,ct,Is,K("tag_count"),qi,Bt,K("performer_count"),bS,ln,K("image_count"),ws,Gt,te("url"),K("file_count","zip_file_count"),Xe("date"),Ie("created_at"),Ie("updated_at"),lt],_S=new _e(vS,SS,yS,IS),Cu=new Map([["Landscape",Gr.Landscape],["Portrait",Gr.Portrait],["Square",Gr.Square]]),OS=(e,t)=>e?Cu.get(e):void 0,CS=Array.from(Cu.keys());class DS extends Ni{toCriterionInput(){return{value:this.value.map(t=>OS(t)).filter(t=>t)}}}class ES extends de{constructor(t){super({messageID:t,type:t,options:CS,makeCriterion:()=>new DS(this)})}}const Du=new ES("orientation"),wS="galleries",Zi=new Mi("galleries","galleries",!0,wS,()=>new Eu);class Eu extends _r{constructor(){super(Zi)}}const TS={phash:"media_info.phash",stash_id:"stash_id",title:"title",url:"url"},wu=["phash","stash_id","title","url"],Xi=new de({messageID:"media_info.phash",type:"phash_distance",inputType:"text",modifierOptions:[m.Equals,m.NotEquals,m.IsNull,m.NotNull],makeCriterion:()=>new ea});class ea extends me{constructor(){super(Xi,{value:"",distance:0})}cloneValues(){this.value={...this.value}}getLabelValue(){const{value:t,distance:r}=this.value;return(this.modifier===m.Equals||this.modifier===m.NotEquals)&&r?`${t} (${r})`:`${t}`}toCriterionInput(){return{value:this.value.value,modifier:this.modifier,distance:this.value.distance}}}const Tu=new de({messageID:"duplicated",type:"duplicated",modifierOptions:[],defaultModifier:m.Equals,makeCriterion:()=>new xS});class xS extends me{constructor(){super(Tu,{})}cloneValues(){this.value={...this.value}}getLabel(t){const r=[],n=t.formatMessage({id:"true"}),i=t.formatMessage({id:"false"});for(const a of wu){const o=this.value[a];if(o!==void 0){const u=t.formatMessage({id:TS[a]});r.push(`${u}: ${o?n:i}`)}}return r.length===0&&this.value.duplicated!==void 0?`${t.formatMessage({id:"duplicated_phash"})}: ${this.value.duplicated?n:i}`:r.length===0?t.formatMessage({id:"duplicated"}):r.join(", ")}getLabelValue(t){return t.formatMessage({id:"duplicated"})}toCriterionInput(){return{duplicated:this.value.duplicated,distance:this.value.distance,phash:this.value.phash,url:this.value.url,stash_id:this.value.stash_id,title:this.value.title}}setFromSavedCriterion(t){const r=t;r.value!==void 0?typeof r.value=="object"?this.value=r.value:typeof r.value=="string"&&(this.value={phash:r.value==="true"}):typeof r=="object"&&(this.value=r),r.modifier&&(this.modifier=r.modifier)}isValid(){return wu.some(r=>this.value[r]!==void 0)||this.value.duplicated!==void 0}}const $S="path",FS=["filesize","file_count","date","resolution","performer_age",...Vi].map(_e.createSortBy).concat([{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"}]),PS=[ge.Grid,ge.Wall],MS=K("performer_age"),NS=[te("title"),te("code","scene_code"),te("details"),te("photographer"),on("checksum","media_info.md5"),Xi,pn,Ji,Zi,dn,K("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Li,Du,pm,ct,yt,K("tag_count"),qi,Bt,K("performer_count"),MS,ln,Gt,te("url"),Xe("date"),K("file_count"),Ie("created_at"),Ie("updated_at"),lt],kS=new _e($S,FS,PS,NS),xu="groups",$u=[m.Includes,m.Excludes,m.IsNull,m.NotNull],Fu=m.Includes;class ta extends de{constructor(t,r){super({messageID:t,type:r,modifierOptions:$u,defaultModifier:Fu,inputType:xu,makeCriterion:()=>new $r(this)})}}const Sn=new ta("groups","groups");class $r extends Or{}const Pu=new ta("containing_groups","containing_groups"),Mu=new ta("sub_groups","sub_groups"),AS=new de({messageID:"groups",type:"movies",modifierOptions:$u,defaultModifier:Fu,inputType:xu,hidden:!0,makeCriterion:()=>new $r(Sn)}),LS="name",jS=["name","random","date","duration","rating","tag_count","sub_group_description","sub_group_order"].map(_e.createSortBy).concat([{messageID:"scene_count",value:"scenes_count"},{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"}]),qS=[ge.Grid],VS=[Gt,Sm,te("url"),te("name"),te("director"),te("synopsis"),cn("duration"),yt,Bt,Xe("date"),K("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Pu,Mu,K("containing_group_count"),K("sub_group_count"),ct,K("tag_count"),K("scene_count"),Ie("created_at"),Ie("updated_at"),lt],BS=new _e(LS,jS,qS,VS),Nu=new Map([["Female",Me.Female],["Male",Me.Male],["Transgender Male",Me.TransgenderMale],["Transgender Female",Me.TransgenderFemale],["Intersex",Me.Intersex],["Non-Binary",Me.NonBinary]]);Me.Female,Me.Male,Me.TransgenderFemale,Me.TransgenderMale,Me.Intersex,Me.NonBinary;const RS=(e,t)=>{if(!e)return;const r=Object.entries(Me).find(i=>i[1]===e);return r?r[1]:Nu.get(e)},GS=Array.from(Nu.keys()),ku=new de({messageID:"gender",type:"gender",options:GS,modifierOptions:[m.Includes,m.Excludes,m.IsNull,m.NotNull],defaultModifier:m.Includes,makeCriterion:()=>new US});class US extends Ni{constructor(t=[]){super(ku,t)}toCriterionInput(){return{value_list:this.value.map(r=>RS(r)),modifier:this.modifier}}setFromSavedCriterion(t){typeof t.value=="string"&&(t={...t,value:[t.value]}),super.setFromSavedCriterion(t)}}const Au=new Map([["Uncut",Rr.Uncut],["Cut",Rr.Cut]]),HS=(e,t)=>{if(!e)return;const r=Object.entries(Rr).find(i=>i[1]===e);return r?r[1]:Au.get(e)},zS=Array.from(Au.keys()),Lu=new de({messageID:"circumcised",type:"circumcised",modifierOptions:[m.Includes,m.Excludes,m.IsNull,m.NotNull],defaultModifier:m.Includes,options:zS,makeCriterion:()=>new WS});class WS extends Ni{constructor(){super(Lu)}toCriterionInput(){return{value:this.value.map(r=>HS(r)),modifier:this.modifier}}}const Fr=new de({messageID:"stash_id",type:"stash_id_endpoint",modifierOptions:[m.Equals,m.NotEquals,m.IsNull,m.NotNull],makeCriterion:()=>new YS});class YS extends me{constructor(){super(Fr,{endpoint:"",stashID:""})}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(t){typeof t!="object"?this._value={endpoint:"",stashID:t}:this._value=t}toCriterionInput(){return{endpoint:this.value.endpoint,stash_id:this.value.stashID,modifier:this.modifier}}getLabel(t){const r=me.getModifierLabel(t,this.modifier);let n="";return this.modifier!==m.IsNull&&this.modifier!==m.NotNull?n=this.getLabelValue(t):this.value.endpoint&&(n="("+this.value.endpoint+")"),t.formatMessage({id:"criterion_modifier.format_string"},{criterion:t.formatMessage({id:this.criterionOption.messageID}),modifierString:r,valueString:n})}getLabelValue(t){let r=this.value.stashID;return this.value.endpoint&&(r+=" ("+this.value.endpoint+")"),r}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}toQueryParams(){super.toQueryParams();let t;return(this.modifier===m.IsNull||this.modifier===m.NotNull)&&!this.value.endpoint?t={type:this.criterionOption.type,modifier:this.modifier}:t={type:this.criterionOption.type,value:this.value,modifier:this.modifier},t}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull||this.value.stashID.length>0}}var ju={};const KS=[["AF","AFG","004","ISO 3166-2:AF"],["AL","ALB","008","ISO 3166-2:AL"],["DZ","DZA","012","ISO 3166-2:DZ"],["AS","ASM","016","ISO 3166-2:AS"],["AD","AND","020","ISO 3166-2:AD"],["AO","AGO","024","ISO 3166-2:AO"],["AI","AIA","660","ISO 3166-2:AI"],["AQ","ATA","010","ISO 3166-2:AQ"],["AG","ATG","028","ISO 3166-2:AG"],["AR","ARG","032","ISO 3166-2:AR"],["AM","ARM","051","ISO 3166-2:AM"],["AW","ABW","533","ISO 3166-2:AW"],["AU","AUS","036","ISO 3166-2:AU"],["AT","AUT","040","ISO 3166-2:AT"],["AZ","AZE","031","ISO 3166-2:AZ"],["BS","BHS","044","ISO 3166-2:BS"],["BH","BHR","048","ISO 3166-2:BH"],["BD","BGD","050","ISO 3166-2:BD"],["BB","BRB","052","ISO 3166-2:BB"],["BY","BLR","112","ISO 3166-2:BY"],["BE","BEL","056","ISO 3166-2:BE"],["BZ","BLZ","084","ISO 3166-2:BZ"],["BJ","BEN","204","ISO 3166-2:BJ"],["BM","BMU","060","ISO 3166-2:BM"],["BT","BTN","064","ISO 3166-2:BT"],["BO","BOL","068","ISO 3166-2:BO"],["BA","BIH","070","ISO 3166-2:BA"],["BW","BWA","072","ISO 3166-2:BW"],["BV","BVT","074","ISO 3166-2:BV"],["BR","BRA","076","ISO 3166-2:BR"],["IO","IOT","086","ISO 3166-2:IO"],["BN","BRN","096","ISO 3166-2:BN"],["BG","BGR","100","ISO 3166-2:BG"],["BF","BFA","854","ISO 3166-2:BF"],["BI","BDI","108","ISO 3166-2:BI"],["KH","KHM","116","ISO 3166-2:KH"],["CM","CMR","120","ISO 3166-2:CM"],["CA","CAN","124","ISO 3166-2:CA"],["CV","CPV","132","ISO 3166-2:CV"],["KY","CYM","136","ISO 3166-2:KY"],["CF","CAF","140","ISO 3166-2:CF"],["TD","TCD","148","ISO 3166-2:TD"],["CL","CHL","152","ISO 3166-2:CL"],["CN","CHN","156","ISO 3166-2:CN"],["CX","CXR","162","ISO 3166-2:CX"],["CC","CCK","166","ISO 3166-2:CC"],["CO","COL","170","ISO 3166-2:CO"],["KM","COM","174","ISO 3166-2:KM"],["CG","COG","178","ISO 3166-2:CG"],["CD","COD","180","ISO 3166-2:CD"],["CK","COK","184","ISO 3166-2:CK"],["CR","CRI","188","ISO 3166-2:CR"],["CI","CIV","384","ISO 3166-2:CI"],["HR","HRV","191","ISO 3166-2:HR"],["CU","CUB","192","ISO 3166-2:CU"],["CY","CYP","196","ISO 3166-2:CY"],["CZ","CZE","203","ISO 3166-2:CZ"],["DK","DNK","208","ISO 3166-2:DK"],["DJ","DJI","262","ISO 3166-2:DJ"],["DM","DMA","212","ISO 3166-2:DM"],["DO","DOM","214","ISO 3166-2:DO"],["EC","ECU","218","ISO 3166-2:EC"],["EG","EGY","818","ISO 3166-2:EG"],["SV","SLV","222","ISO 3166-2:SV"],["GQ","GNQ","226","ISO 3166-2:GQ"],["ER","ERI","232","ISO 3166-2:ER"],["EE","EST","233","ISO 3166-2:EE"],["ET","ETH","231","ISO 3166-2:ET"],["FK","FLK","238","ISO 3166-2:FK"],["FO","FRO","234","ISO 3166-2:FO"],["FJ","FJI","242","ISO 3166-2:FJ"],["FI","FIN","246","ISO 3166-2:FI"],["FR","FRA","250","ISO 3166-2:FR"],["GF","GUF","254","ISO 3166-2:GF"],["PF","PYF","258","ISO 3166-2:PF"],["TF","ATF","260","ISO 3166-2:TF"],["GA","GAB","266","ISO 3166-2:GA"],["GM","GMB","270","ISO 3166-2:GM"],["GE","GEO","268","ISO 3166-2:GE"],["DE","DEU","276","ISO 3166-2:DE"],["GH","GHA","288","ISO 3166-2:GH"],["GI","GIB","292","ISO 3166-2:GI"],["GR","GRC","300","ISO 3166-2:GR"],["GL","GRL","304","ISO 3166-2:GL"],["GD","GRD","308","ISO 3166-2:GD"],["GP","GLP","312","ISO 3166-2:GP"],["GU","GUM","316","ISO 3166-2:GU"],["GT","GTM","320","ISO 3166-2:GT"],["GN","GIN","324","ISO 3166-2:GN"],["GW","GNB","624","ISO 3166-2:GW"],["GY","GUY","328","ISO 3166-2:GY"],["HT","HTI","332","ISO 3166-2:HT"],["HM","HMD","334","ISO 3166-2:HM"],["VA","VAT","336","ISO 3166-2:VA"],["HN","HND","340","ISO 3166-2:HN"],["HK","HKG","344","ISO 3166-2:HK"],["HU","HUN","348","ISO 3166-2:HU"],["IS","ISL","352","ISO 3166-2:IS"],["IN","IND","356","ISO 3166-2:IN"],["ID","IDN","360","ISO 3166-2:ID"],["IR","IRN","364","ISO 3166-2:IR"],["IQ","IRQ","368","ISO 3166-2:IQ"],["IE","IRL","372","ISO 3166-2:IE"],["IL","ISR","376","ISO 3166-2:IL"],["IT","ITA","380","ISO 3166-2:IT"],["JM","JAM","388","ISO 3166-2:JM"],["JP","JPN","392","ISO 3166-2:JP"],["JO","JOR","400","ISO 3166-2:JO"],["KZ","KAZ","398","ISO 3166-2:KZ"],["KE","KEN","404","ISO 3166-2:KE"],["KI","KIR","296","ISO 3166-2:KI"],["KP","PRK","408","ISO 3166-2:KP"],["KR","KOR","410","ISO 3166-2:KR"],["KW","KWT","414","ISO 3166-2:KW"],["KG","KGZ","417","ISO 3166-2:KG"],["LA","LAO","418","ISO 3166-2:LA"],["LV","LVA","428","ISO 3166-2:LV"],["LB","LBN","422","ISO 3166-2:LB"],["LS","LSO","426","ISO 3166-2:LS"],["LR","LBR","430","ISO 3166-2:LR"],["LY","LBY","434","ISO 3166-2:LY"],["LI","LIE","438","ISO 3166-2:LI"],["LT","LTU","440","ISO 3166-2:LT"],["LU","LUX","442","ISO 3166-2:LU"],["MO","MAC","446","ISO 3166-2:MO"],["MG","MDG","450","ISO 3166-2:MG"],["MW","MWI","454","ISO 3166-2:MW"],["MY","MYS","458","ISO 3166-2:MY"],["MV","MDV","462","ISO 3166-2:MV"],["ML","MLI","466","ISO 3166-2:ML"],["MT","MLT","470","ISO 3166-2:MT"],["MH","MHL","584","ISO 3166-2:MH"],["MQ","MTQ","474","ISO 3166-2:MQ"],["MR","MRT","478","ISO 3166-2:MR"],["MU","MUS","480","ISO 3166-2:MU"],["YT","MYT","175","ISO 3166-2:YT"],["MX","MEX","484","ISO 3166-2:MX"],["FM","FSM","583","ISO 3166-2:FM"],["MD","MDA","498","ISO 3166-2:MD"],["MC","MCO","492","ISO 3166-2:MC"],["MN","MNG","496","ISO 3166-2:MN"],["MS","MSR","500","ISO 3166-2:MS"],["MA","MAR","504","ISO 3166-2:MA"],["MZ","MOZ","508","ISO 3166-2:MZ"],["MM","MMR","104","ISO 3166-2:MM"],["NA","NAM","516","ISO 3166-2:NA"],["NR","NRU","520","ISO 3166-2:NR"],["NP","NPL","524","ISO 3166-2:NP"],["NL","NLD","528","ISO 3166-2:NL"],["NC","NCL","540","ISO 3166-2:NC"],["NZ","NZL","554","ISO 3166-2:NZ"],["NI","NIC","558","ISO 3166-2:NI"],["NE","NER","562","ISO 3166-2:NE"],["NG","NGA","566","ISO 3166-2:NG"],["NU","NIU","570","ISO 3166-2:NU"],["NF","NFK","574","ISO 3166-2:NF"],["MP","MNP","580","ISO 3166-2:MP"],["MK","MKD","807","ISO 3166-2:MK"],["NO","NOR","578","ISO 3166-2:NO"],["OM","OMN","512","ISO 3166-2:OM"],["PK","PAK","586","ISO 3166-2:PK"],["PW","PLW","585","ISO 3166-2:PW"],["PS","PSE","275","ISO 3166-2:PS"],["PA","PAN","591","ISO 3166-2:PA"],["PG","PNG","598","ISO 3166-2:PG"],["PY","PRY","600","ISO 3166-2:PY"],["PE","PER","604","ISO 3166-2:PE"],["PH","PHL","608","ISO 3166-2:PH"],["PN","PCN","612","ISO 3166-2:PN"],["PL","POL","616","ISO 3166-2:PL"],["PT","PRT","620","ISO 3166-2:PT"],["PR","PRI","630","ISO 3166-2:PR"],["QA","QAT","634","ISO 3166-2:QA"],["RE","REU","638","ISO 3166-2:RE"],["RO","ROU","642","ISO 3166-2:RO"],["RU","RUS","643","ISO 3166-2:RU"],["RW","RWA","646","ISO 3166-2:RW"],["SH","SHN","654","ISO 3166-2:SH"],["KN","KNA","659","ISO 3166-2:KN"],["LC","LCA","662","ISO 3166-2:LC"],["PM","SPM","666","ISO 3166-2:PM"],["VC","VCT","670","ISO 3166-2:VC"],["WS","WSM","882","ISO 3166-2:WS"],["SM","SMR","674","ISO 3166-2:SM"],["ST","STP","678","ISO 3166-2:ST"],["SA","SAU","682","ISO 3166-2:SA"],["SN","SEN","686","ISO 3166-2:SN"],["SC","SYC","690","ISO 3166-2:SC"],["SL","SLE","694","ISO 3166-2:SL"],["SG","SGP","702","ISO 3166-2:SG"],["SK","SVK","703","ISO 3166-2:SK"],["SI","SVN","705","ISO 3166-2:SI"],["SB","SLB","090","ISO 3166-2:SB"],["SO","SOM","706","ISO 3166-2:SO"],["ZA","ZAF","710","ISO 3166-2:ZA"],["GS","SGS","239","ISO 3166-2:GS"],["ES","ESP","724","ISO 3166-2:ES"],["LK","LKA","144","ISO 3166-2:LK"],["SD","SDN","729","ISO 3166-2:SD"],["SR","SUR","740","ISO 3166-2:SR"],["SJ","SJM","744","ISO 3166-2:SJ"],["SZ","SWZ","748","ISO 3166-2:SZ"],["SE","SWE","752","ISO 3166-2:SE"],["CH","CHE","756","ISO 3166-2:CH"],["SY","SYR","760","ISO 3166-2:SY"],["TW","TWN","158","ISO 3166-2:TW"],["TJ","TJK","762","ISO 3166-2:TJ"],["TZ","TZA","834","ISO 3166-2:TZ"],["TH","THA","764","ISO 3166-2:TH"],["TL","TLS","626","ISO 3166-2:TL"],["TG","TGO","768","ISO 3166-2:TG"],["TK","TKL","772","ISO 3166-2:TK"],["TO","TON","776","ISO 3166-2:TO"],["TT","TTO","780","ISO 3166-2:TT"],["TN","TUN","788","ISO 3166-2:TN"],["TR","TUR","792","ISO 3166-2:TR"],["TM","TKM","795","ISO 3166-2:TM"],["TC","TCA","796","ISO 3166-2:TC"],["TV","TUV","798","ISO 3166-2:TV"],["UG","UGA","800","ISO 3166-2:UG"],["UA","UKR","804","ISO 3166-2:UA"],["AE","ARE","784","ISO 3166-2:AE"],["GB","GBR","826","ISO 3166-2:GB"],["US","USA","840","ISO 3166-2:US"],["UM","UMI","581","ISO 3166-2:UM"],["UY","URY","858","ISO 3166-2:UY"],["UZ","UZB","860","ISO 3166-2:UZ"],["VU","VUT","548","ISO 3166-2:VU"],["VE","VEN","862","ISO 3166-2:VE"],["VN","VNM","704","ISO 3166-2:VN"],["VG","VGB","092","ISO 3166-2:VG"],["VI","VIR","850","ISO 3166-2:VI"],["WF","WLF","876","ISO 3166-2:WF"],["EH","ESH","732","ISO 3166-2:EH"],["YE","YEM","887","ISO 3166-2:YE"],["ZM","ZMB","894","ISO 3166-2:ZM"],["ZW","ZWE","716","ISO 3166-2:ZW"],["AX","ALA","248","ISO 3166-2:AX"],["BQ","BES","535","ISO 3166-2:BQ"],["CW","CUW","531","ISO 3166-2:CW"],["GG","GGY","831","ISO 3166-2:GG"],["IM","IMN","833","ISO 3166-2:IM"],["JE","JEY","832","ISO 3166-2:JE"],["ME","MNE","499","ISO 3166-2:ME"],["BL","BLM","652","ISO 3166-2:BL"],["MF","MAF","663","ISO 3166-2:MF"],["RS","SRB","688","ISO 3166-2:RS"],["SX","SXM","534","ISO 3166-2:SX"],["SS","SSD","728","ISO 3166-2:SS"],["XK","XKK","983","ISO 3166-2:XK"]],QS=["br","cy","dv","sw","eu","af","am","ha","ku","ml","mt","no","ps","sd","so","sq","ta","tg","tt","ug","ur","vi","ar","az","be","bg","bn","bs","ca","cs","da","de","el","en","es","et","fa","fi","fr","ga","gl","he","hi","hr","hu","hy","id","is","it","ja","ka","kk","km","ko","ky","lt","lv","mk","mn","mr","ms","nb","nl","nn","pl","pt","ro","ru","sk","sl","sr","sv","th","tk","tr","uk","uz","zh"];var yn={};yn.remove=JS;for(var bn=[{base:" ",chars:" "},{base:"0",chars:"߀"},{base:"A",chars:"ⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",chars:"Ꜳ"},{base:"AE",chars:"ÆǼǢ"},{base:"AO",chars:"Ꜵ"},{base:"AU",chars:"Ꜷ"},{base:"AV",chars:"ꜸꜺ"},{base:"AY",chars:"Ꜽ"},{base:"B",chars:"ⒷＢḂḄḆɃƁ"},{base:"C",chars:"ⒸＣꜾḈĆCĈĊČÇƇȻ"},{base:"D",chars:"ⒹＤḊĎḌḐḒḎĐƊƉᴅꝹ"},{base:"Dh",chars:"Ð"},{base:"DZ",chars:"ǱǄ"},{base:"Dz",chars:"ǲǅ"},{base:"E",chars:"ɛⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎᴇ"},{base:"F",chars:"ꝼⒻＦḞƑꝻ"},{base:"G",chars:"ⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾɢ"},{base:"H",chars:"ⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",chars:"ⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",chars:"ⒿＪĴɈȷ"},{base:"K",chars:"ⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",chars:"ⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",chars:"Ǉ"},{base:"Lj",chars:"ǈ"},{base:"M",chars:"ⓂＭḾṀṂⱮƜϻ"},{base:"N",chars:"ꞤȠⓃＮǸŃÑṄŇṆŅṊṈƝꞐᴎ"},{base:"NJ",chars:"Ǌ"},{base:"Nj",chars:"ǋ"},{base:"O",chars:"ⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OE",chars:"Œ"},{base:"OI",chars:"Ƣ"},{base:"OO",chars:"Ꝏ"},{base:"OU",chars:"Ȣ"},{base:"P",chars:"ⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",chars:"ⓆＱꝖꝘɊ"},{base:"R",chars:"ⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",chars:"ⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",chars:"ⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",chars:"Þ"},{base:"TZ",chars:"Ꜩ"},{base:"U",chars:"ⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",chars:"ⓋＶṼṾƲꝞɅ"},{base:"VY",chars:"Ꝡ"},{base:"W",chars:"ⓌＷẀẂŴẆẄẈⱲ"},{base:"X",chars:"ⓍＸẊẌ"},{base:"Y",chars:"ⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",chars:"ⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",chars:"ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",chars:"ꜳ"},{base:"ae",chars:"æǽǣ"},{base:"ao",chars:"ꜵ"},{base:"au",chars:"ꜷ"},{base:"av",chars:"ꜹꜻ"},{base:"ay",chars:"ꜽ"},{base:"b",chars:"ⓑｂḃḅḇƀƃɓƂ"},{base:"c",chars:"ｃⓒćĉċčçḉƈȼꜿↄ"},{base:"d",chars:"ⓓｄḋďḍḑḓḏđƌɖɗƋᏧԁꞪ"},{base:"dh",chars:"ð"},{base:"dz",chars:"ǳǆ"},{base:"e",chars:"ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇǝ"},{base:"f",chars:"ⓕｆḟƒ"},{base:"ff",chars:"ﬀ"},{base:"fi",chars:"ﬁ"},{base:"fl",chars:"ﬂ"},{base:"ffi",chars:"ﬃ"},{base:"ffl",chars:"ﬄ"},{base:"g",chars:"ⓖｇǵĝḡğġǧģǥɠꞡꝿᵹ"},{base:"h",chars:"ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",chars:"ƕ"},{base:"i",chars:"ⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",chars:"ⓙｊĵǰɉ"},{base:"k",chars:"ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",chars:"ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇɭ"},{base:"lj",chars:"ǉ"},{base:"m",chars:"ⓜｍḿṁṃɱɯ"},{base:"n",chars:"ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",chars:"ǌ"},{base:"o",chars:"ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿꝋꝍɵɔᴑ"},{base:"oe",chars:"œ"},{base:"oi",chars:"ƣ"},{base:"oo",chars:"ꝏ"},{base:"ou",chars:"ȣ"},{base:"p",chars:"ⓟｐṕṗƥᵽꝑꝓꝕρ"},{base:"q",chars:"ⓠｑɋꝗꝙ"},{base:"r",chars:"ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",chars:"ⓢｓśṥŝṡšṧṣṩșşȿꞩꞅẛʂ"},{base:"ss",chars:"ß"},{base:"t",chars:"ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",chars:"þ"},{base:"tz",chars:"ꜩ"},{base:"u",chars:"ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",chars:"ⓥｖṽṿʋꝟʌ"},{base:"vy",chars:"ꝡ"},{base:"w",chars:"ⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",chars:"ⓧｘẋẍ"},{base:"y",chars:"ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",chars:"ⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],ra={},In=0;In<bn.length;In+=1)for(var qu=bn[In].chars,na=0;na<qu.length;na+=1)ra[qu[na]]=bn[In].base;function JS(e){return e.replace(/[^\u0000-\u007e]/g,function(t){return ra[t]||t})}yn.replacementList=bn,yn.diacriticsMap=ra,function(e){const t=KS,r=QS,n=yn.remove,i={},a={},o={},u={},s={};t.forEach(function(y){const S=y;a[S[0]]=S[1],o[S[1]]=S[0],u[S[2]]=S[0],s[S[0]]=S[2]});function c(y){return("000"+(y||"")).slice(-3)}function l(y,S){return Object.prototype.hasOwnProperty.call(y,S)}function f(y,S){return Object.keys(y).reduce(function(p,w){const x=y[w];return p[w]=S(x,w),p},{})}function I(y,S){switch(y){case"official":return Array.isArray(S)?S[0]:S;case"all":return typeof S=="string"?[S]:S;case"alias":return Array.isArray(S)?S[1]||S[0]:S;default:throw new TypeError("LocaleNameType must be one of these: all, official, alias!")}}e.registerLocale=function(y){if(!y.locale)throw new TypeError("Missing localeData.locale");if(!y.countries)throw new TypeError("Missing localeData.countries");i[y.locale]=y.countries};function g(y){return o[y]}e.alpha3ToAlpha2=g;function D(y){return a[y]}e.alpha2ToAlpha3=D;function b(y){return s[g(y)]}e.alpha3ToNumeric=b;function _(y){return s[y]}e.alpha2ToNumeric=_;function C(y){const S=c(y);return D(u[S])}e.numericToAlpha3=C;function h(y){const S=c(y);return u[S]}e.numericToAlpha2=h;function O(y){if(typeof y=="string"){if(/^[0-9]*$/.test(y))return C(y);if(y.length===2)return D(y.toUpperCase());if(y.length===3)return y.toUpperCase()}if(typeof y=="number")return C(y)}e.toAlpha3=O;function E(y){if(typeof y=="string"){if(/^[0-9]*$/.test(y))return h(y);if(y.length===2)return y.toUpperCase();if(y.length===3)return g(y.toUpperCase())}if(typeof y=="number")return h(y)}e.toAlpha2=E,e.getName=function(y,S,p={}){"select"in p||(p.select="official");try{const x=i[S.toLowerCase()][E(y)];return I(p.select,x)}catch{return}},e.getNames=function(y,S={}){"select"in S||(S.select="official");const p=i[y.toLowerCase()];return p===void 0?{}:f(p,function(w){return I(S.select,w)})},e.getAlpha2Code=function(y,S){const p=x=>x.toLowerCase(),w=(x,$)=>p(x)===p($);try{const x=i[S.toLowerCase()];for(const $ in x)if(l(x,$)){if(typeof x[$]=="string"&&w(x[$],y))return $;if(Array.isArray(x[$])){for(const j of x[$])if(w(j,y))return $}}return}catch{return}},e.getSimpleAlpha2Code=function(y,S){const p=x=>n(x.toLowerCase()),w=(x,$)=>p(x)===p($);try{const x=i[S.toLowerCase()];for(const $ in x)if(l(x,$)){if(typeof x[$]=="string"&&w(x[$],y))return $;if(Array.isArray(x[$])){for(const j of x[$])if(w(j,y))return $}}return}catch{return}},e.getAlpha2Codes=function(){return a},e.getAlpha3Code=function(y,S){const p=e.getAlpha2Code(y,S);if(p)return e.toAlpha3(p)},e.getSimpleAlpha3Code=function(y,S){const p=e.getSimpleAlpha2Code(y,S);if(p)return e.toAlpha3(p)},e.getAlpha3Codes=function(){return o},e.getNumericCodes=function(){return u},e.langs=function(){return Object.keys(i)},e.getSupportedLanguages=function(){return r},e.isValid=function(y){if(!y)return!1;const S=y.toString().toUpperCase();return l(o,S)||l(a,S)||l(u,S)}}(ju);const Vu=Ra(ju),ZS=e=>e==="zh-CN"?"zh":e==="zh-TW"?"tw":e.slice(0,2),XS=(e,t="en")=>{if(!e)return;const r=Vu.getName(e,ZS(t));if(r)return r;if(t!=="en")return Vu.getName(e,"en")},Bu=new an({messageID:"country",type:"country",makeCriterion:()=>new Ru});class Ru extends He{constructor(){super(Bu)}getLabelValue(t){return this.modifier===m.Equals||this.modifier===m.NotEquals?XS(this.value,t.locale)??this.value:super.getLabelValue(t)}}const ey="name",ty=["name","height","birthdate","tag_count","random","rating","penis_length","play_count","last_played_at","latest_scene","career_start","career_end","weight","measurements","scenes_duration","scenes_size"].map(_e.createSortBy).concat([{messageID:"scene_count",value:"scenes_count"},{messageID:"image_count",value:"images_count"},{messageID:"gallery_count",value:"galleries_count"},{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"},{messageID:"last_o_at",value:"last_o_at",sfwMessageID:"last_o_at_sfw"}]),ry=[ge.Grid,ge.List,ge.Tagger],ny=["birth_year","death_year","age","weight","penis_length"],iy=["name","disambiguation","details","ethnicity","hair_color","eye_color","measurements","fake_tits","tattoos","piercings","aliases"],ay=[Ss,ku,Lu,mm,ct,Sn,Gt,Fr,te("url"),yt,K("tag_count"),K("scene_count"),K("image_count"),K("gallery_count"),K("play_count"),K("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),sn("ignore_auto_tag"),Bu,hs("height_cm","height"),...ny.map(e=>hs(e)),...iy.map(e=>te(e)),Xe("birthdate"),Xe("death_date"),Xe("career_start"),Xe("career_end"),Ie("created_at"),Ie("updated_at"),lt],oy=new _e(ey,ty,ry,ay),sy="title",uy=["duration","title","seconds","scene_id","random","scenes_updated_at"].map(_e.createSortBy),cy=[ge.Grid,ge.Wall],ly=[ct,Ts,km,Bt,em("duration"),Ie("created_at"),Ie("updated_at"),Xe("scene_date"),Ie("scene_created_at"),Ie("scene_updated_at")],dy=new _e(sy,uy,cy,ly),Gu=new gs("hasMarkers","has_markers",()=>new fy);class fy extends ki{constructor(){super(Gu)}}const Uu=new ht("interactive","interactive",()=>new py);class py extends vt{constructor(){super(Uu)}}const ia=new Map([["de","Deutsche"],["en","English"],["es","Español"],["fr","Français"],["it","Italiano"],["ja","日本"],["ko","한국인"],["nl","Holandés"],["pt","Português"],["ru","Русский"],["00","Unknown"]]),my=e=>{if(e)return Array.from(ia.keys()).find(t=>ia.get(t)===e)},gy=Array.from(ia.values()),Hu=new de({messageID:"captions",type:"captions",modifierOptions:[m.Includes,m.Excludes,m.IsNull,m.NotNull],defaultModifier:m.Includes,options:gy,makeCriterion:()=>new hy});class hy extends He{constructor(){super(Hu)}toCriterionInput(){return{value:my(this.value)??"",modifier:this.modifier}}}const vy="date",Sy=["organized","date","file_count","filesize","duration","framerate","resolution","bitrate","last_played_at","resume_time","play_duration","play_count","interactive","interactive_speed","perceptual_similarity","performer_age","studio",...Vi].map(_e.createSortBy).concat([{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"},{messageID:"last_o_at",value:"last_o_at",sfwMessageID:"last_o_at_sfw"},{messageID:"group_scene_number",value:"group_scene_number"},{messageID:"scene_code",value:"code"}]),yy=[ge.Grid,ge.List,ge.Wall,ge.Tagger],by=K("performer_age"),Iy=cn("duration"),_y=[te("title"),te("code","scene_code"),pn,Ji,te("details"),te("director"),on("oshash","media_info.oshash"),te("checksum","media_info.md5"),Xi,Tu,dn,yt,K("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Li,Du,K("framerate"),K("bitrate"),te("video_codec"),te("audio_codec"),Iy,cn("resume_time"),cn("play_duration"),K("play_count"),Ie("last_played_at"),Gu,fm,ct,K("tag_count"),qi,Bt,K("performer_count"),by,ln,Gt,Sn,AS,Zi,te("url"),Fr,K("stash_id_count"),Uu,Hu,K("interactive_speed"),K("file_count"),Xe("date"),Ie("created_at"),Ie("updated_at"),lt],Oy=new _e(vy,Sy,yy,_y),Cy="name",Dy=["name","tag_count","random","rating","scenes_duration","scenes_size","latest_scene"].map(_e.createSortBy).concat([{messageID:"gallery_count",value:"galleries_count"},{messageID:"image_count",value:"images_count"},{messageID:"scene_count",value:"scenes_count"},{messageID:"o_count",value:"o_counter"},{messageID:"o_count_all",value:"o_counter_all"},{messageID:"performer_count",value:"performer_count"},{messageID:"performer_count_all",value:"performer_count_all"},{messageID:"subsidiary_studio_count",value:"child_count"},{messageID:"scene_marker_count",value:"scene_markers_count"}]),Ey=[ge.Grid,ge.List,ge.Tagger],wy=[bs,on("name"),te("details"),Fs,vm,ct,yt,sn("ignore_auto_tag"),sn("organized"),K("tag_count"),K("scene_count"),K("image_count"),K("gallery_count"),te("url"),Fr,te("aliases"),K("child_count","subsidiary_studio_count"),Ie("created_at"),Ie("updated_at"),lt],Ty=new _e(Cy,Dy,Ey,wy),xy="name",$y=["name","random","scenes_duration","scenes_size"].map(_e.createSortBy).concat([{messageID:"gallery_count",value:"galleries_count"},{messageID:"image_count",value:"images_count"},{messageID:"performer_count",value:"performers_count"},{messageID:"scene_count",value:"scenes_count"},{messageID:"group_count",value:"groups_count"},{messageID:"marker_count",value:"scene_markers_count"},{messageID:"studio_count",value:"studios_count"}]),Fy=[ge.Grid,ge.List,ge.Tagger],Py=[ys,on("name"),te("sort_name"),hm,te("aliases"),te("description"),sn("ignore_auto_tag"),Fr,K("scene_count"),K("image_count"),K("gallery_count"),K("performer_count"),K("studio_count"),K("group_count"),K("marker_count"),Ns,new un("parent_tag_count","parent_count"),ks,new un("sub_tag_count","child_count"),Ie("created_at"),Ie("updated_at"),lt],My=new _e(xy,$y,Fy,Py);function zu(e){switch(e){case Y.Scenes:return Oy;case Y.Performers:return oy;case Y.Studios:return Ty;case Y.Galleries:return _S;case Y.SceneMarkers:return dy;case Y.Movies:case Y.Groups:return BS;case Y.Tags:return My;case Y.Images:return kS}}const rt={sortDirection:Ae.Asc,displayMode:ge.Grid,currentPage:1,itemsPerPage:40};class ne{constructor(t,r,n){Z(this,"mode");Z(this,"options");Z(this,"config");Z(this,"searchTerm","");Z(this,"currentPage",rt.currentPage);Z(this,"itemsPerPage",rt.itemsPerPage);Z(this,"sortDirection",rt.sortDirection);Z(this,"sortBy");Z(this,"displayMode",rt.displayMode);Z(this,"zoomIndex",1);Z(this,"criteria",[]);Z(this,"randomSeed",-1);Z(this,"defaultZoomIndex",1);this.mode=t,this.config=r,this.options=zu(t);const{defaultSortBy:i,displayModeOptions:a}=this.options;n!=null&&n.defaultSortBy?(this.sortBy=n.defaultSortBy,n.defaultSortDir&&(this.sortDirection=n.defaultSortDir)):(this.sortBy=i,this.sortBy==="date"&&(this.sortDirection=Ae.Desc)),this.displayMode=a[0],(n==null?void 0:n.defaultZoomIndex)!==void 0&&(this.defaultZoomIndex=n.defaultZoomIndex,this.zoomIndex=n.defaultZoomIndex)}clone(){const t=Object.assign(new ne(this.mode,this.config),this);return t.criteria=this.criteria.map(r=>r.clone()),t}empty(){return new ne(this.mode,this.config,{defaultZoomIndex:this.defaultZoomIndex})}metadataInfo(){const t=this.clone();return t.sortBy=void 0,t.randomSeed=-1,t.currentPage=1,t.sortDirection=rt.sortDirection,t.itemsPerPage=0,t.zoomIndex=1,t.displayMode=rt.displayMode,t}count(){return this.criteria.length}configureFromDecodedParams(t){if(t.perPage!==void 0&&(this.itemsPerPage=t.perPage),t.sortby!==void 0){this.sortBy=t.sortby;const r=this.sortBy.match(/^random_(\d+)$/);r&&(this.sortBy="random",this.randomSeed=Number.parseInt(r[1],10))}if(t.sortdir!==void 0?this.sortDirection=t.sortdir==="desc"?Ae.Desc:Ae.Asc:this.sortDirection=t.sortby==="date"?Ae.Desc:Ae.Asc,t.disp!==void 0&&(this.displayMode=t.disp),t.q!==void 0&&(this.searchTerm=t.q),this.currentPage=t.p??1,t.z!==void 0&&(this.zoomIndex=t.z),this.criteria=[],t.c!==void 0)for(const r of t.c)try{const{type:n,...i}=JSON.parse(r),a=this.makeCriterion(n);a.fromDecodedParams(i),this.criteria.push(a)}catch(n){console.error("Failed to parse encoded criterion:",n)}}static decodeParams(t){const r={};if(t.perPage&&(r.perPage=Number.parseInt(t.perPage,10)),t.sortby&&(r.sortby=t.sortby),t.sortdir&&(r.sortdir=t.sortdir),t.disp&&(r.disp=Number.parseInt(t.disp,10)),t.q&&(r.q=t.q),t.p&&(r.p=Number.parseInt(t.p,10)),t.z){const n=Number.parseInt(t.z,10);n>=0&&(r.z=n)}return t.c&&t.c.length!==0&&(r.c=t.c.map(n=>ne.translateJSON(n,!0))),r}static translateJSON(t,r){let n=!1,i=!1;return[...t].map(a=>{if(i)return i=!1,a;switch(a){case"\\":n&&(i=!0);break;case'"':n=!n;break;case"(":if(r&&!n)return"{";break;case")":if(r&&!n)return"}";break;case"{":if(!r&&!n)return"(";break;case"}":if(!r&&!n)return")";break}return a}).join("")}configureFromQueryString(t){const r=new URLSearchParams(t),n={perPage:r.get("perPage"),sortby:r.get("sortby"),sortdir:r.get("sortdir"),disp:r.get("disp"),q:r.get("q"),p:r.get("p"),z:r.get("z"),c:r.getAll("c")},i=ne.decodeParams(n);this.configureFromDecodedParams(i)}configureFromSavedFilter(t){var o;const{find_filter:r,object_filter:n,ui_options:i}=t;this.itemsPerPage=(r==null?void 0:r.per_page)??this.itemsPerPage,this.sortBy=(r==null?void 0:r.sort)??this.sortBy;const a=(o=this.sortBy)==null?void 0:o.match(/^random_(\d+)$/);if(a&&(this.sortBy="random",this.randomSeed=Number.parseInt(a[1],10)),this.sortDirection=(r==null?void 0:r.direction)??this.sortDirection,this.searchTerm=(r==null?void 0:r.q)??this.searchTerm,this.displayMode=(i==null?void 0:i.display_mode)??this.displayMode,this.zoomIndex=(i==null?void 0:i.zoom_index)??this.zoomIndex,this.currentPage=1,this.criteria=[],n)for(const[u,s]of Object.entries(n)){const c=this.makeCriterion(u);c.setFromSavedCriterion(s),this.criteria.push(c)}}setRandomSeed(){this.sortBy==="random"?this.randomSeed===-1&&(this.randomSeed=Math.floor(Math.random()*10**8)):this.randomSeed=-1}getSortBy(){return this.setRandomSeed(),this.sortBy==="random"?`random_${this.randomSeed.toString()}`:this.sortBy}getEncodedParams(){const t=this.criteria.map(r=>{const n=r.toQueryParams();let i=ne.translateJSON(JSON.stringify(n),!1);return i=encodeURI(i),i=i.replaceAll("?",encodeURIComponent("?")),i=i.replaceAll("#",encodeURIComponent("#")),i=i.replaceAll("&",encodeURIComponent("&")),i=i.replaceAll(";",encodeURIComponent(";")),i=i.replaceAll("=",encodeURIComponent("=")),i=i.replaceAll("+",encodeURIComponent("+")),i});return{perPage:this.itemsPerPage!==rt.itemsPerPage?String(this.itemsPerPage):void 0,sortby:this.getSortBy(),sortdir:this.sortBy==="date"?this.sortDirection===Ae.Asc?"asc":void 0:this.sortDirection===Ae.Desc?"desc":void 0,disp:this.displayMode!==rt.displayMode?String(this.displayMode):void 0,q:this.searchTerm?encodeURIComponent(this.searchTerm):void 0,p:this.currentPage!==rt.currentPage?String(this.currentPage):void 0,z:this.zoomIndex!==this.defaultZoomIndex?String(this.zoomIndex):void 0,c:t}}makeQueryParameters(){const t=[],r=this.getEncodedParams();if(r.q&&t.push(`q=${r.q}`),r.c)for(const n of r.c)t.push(`c=${n}`);return r.sortby&&t.push(`sortby=${r.sortby}`),r.sortdir&&t.push(`sortdir=${r.sortdir}`),r.perPage&&t.push(`perPage=${r.perPage}`),r.disp&&t.push(`disp=${r.disp}`),r.z&&t.push(`z=${r.z}`),r.p&&t.push(`p=${r.p}`),t.join("&")}makeCriterion(t){const{criterionOptions:r}=zu(this.mode),n=r.find(i=>i.type===t);return n?n.makeCriterion(this.config):new am(t).makeCriterion(this.config)}makeFindFilter(){return{q:this.searchTerm,page:this.currentPage,per_page:this.itemsPerPage,sort:this.getSortBy(),direction:this.sortDirection}}makeFilter(){const t={};for(const r of this.criteria)r.applyToCriterionInput(t);return t}makeSavedFilter(){const t={};for(const r of this.criteria)r.applyToSavedCriterion(t);return t}makeSavedUIOptions(){return{display_mode:this.displayMode,zoom_index:this.zoomIndex}}criteriaFor(t){return this.criteria.filter(r=>r.criterionOption.type===t)}replaceCriteria(t,r){const n=[...this.criteria.filter(i=>i.criterionOption.type!==t),...r];return this.setCriteria(n)}clearCriteria(t=!1){const r=this.clone();return t&&(r.searchTerm=""),r.criteria=[],r.currentPage=1,r}clearSearchTerm(){const t=this.clone();return t.searchTerm="",t.currentPage=1,t}setCriteria(t){const r=this.clone();return r.criteria=t,r.currentPage=1,r}removeCriterion(t){const r=this.clone(),n=r.criteria.find(a=>a.criterionOption.type===t);if(!n)return r;const i=r.criteria.filter(a=>a.getId()!==n.getId());return r.criteria=i,r.currentPage=1,r}removeCustomFieldCriterion(t,r){const n=this.clone(),i=n.criteria.find(a=>a.criterionOption.type===t);if(!i)return n;if(i instanceof yu){const a=i.value.filter((o,u)=>u!==r);i.value=a}return n}setPageSize(t){const r=this.clone();return r.itemsPerPage=t,r.currentPage=1,r}setSortBy(t){const r=this.clone();return r.sortBy=t,r.currentPage=1,r}toggleSortDirection(){const t=this.clone();return t.sortDirection===Ae.Asc?t.sortDirection=Ae.Desc:t.sortDirection=Ae.Asc,t.currentPage=1,t}reshuffleRandomSort(){const t=this.clone();return t.currentPage=1,t.randomSeed=-1,t}changePage(t){const r=this.clone();return r.currentPage=t,r}setZoom(t){const r=this.clone();return r.zoomIndex=t,r}setDisplayMode(t){const r=this.clone();return r.displayMode=t,r}}function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},R.apply(null,arguments)}function Ct(e){"@babel/helpers - typeof";return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ct(e)}function Ny(e,t){if(Ct(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ct(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Wu(e){var t=Ny(e,"string");return Ct(t)=="symbol"?t:t+""}function Jt(e,t,r){return(t=Wu(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Yu(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Yu(Object(r),!0).forEach(function(n){Jt(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Yu(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ky(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ku(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Wu(n.key),n)}}function Ay(e,t,r){return t&&Ku(e.prototype,t),r&&Ku(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function aa(e,t){return aa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},aa(e,t)}function Ly(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&aa(e,t)}function _n(e){return _n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_n(e)}function Qu(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Qu=function(){return!!e})()}function jy(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function qy(e,t){if(t&&(Ct(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return jy(e)}function Vy(e){var t=Qu();return function(){var r,n=_n(e);if(t){var i=_n(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return qy(this,r)}}function oa(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function By(e){if(Array.isArray(e))return oa(e)}function Ry(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ju(e,t){if(e){if(typeof e=="string")return oa(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?oa(e,t):void 0}}function Gy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zt(e){return By(e)||Ry(e)||Ju(e)||Gy()}function Uy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Hy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var zy=function(){function e(r){var n=this;this._insertTag=function(i){var a;n.tags.length===0?n.insertionPoint?a=n.insertionPoint.nextSibling:n.prepend?a=n.container.firstChild:a=n.before:a=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(i,a),n.tags.push(i)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Hy(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=Uy(i);try{a.insertRule(n,a.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){var i;return(i=n.parentNode)==null?void 0:i.removeChild(n)}),this.tags=[],this.ctr=0},e}(),xe="-ms-",On="-moz-",ae="-webkit-",Zu="comm",sa="rule",ua="decl",Wy="@import",Xu="@keyframes",Yy="@layer",Ky=Math.abs,Cn=String.fromCharCode,Qy=Object.assign;function Jy(e,t){return we(e,0)^45?(((t<<2^we(e,0))<<2^we(e,1))<<2^we(e,2))<<2^we(e,3):0}function ec(e){return e.trim()}function Zy(e,t){return(e=t.exec(e))?e[0]:e}function oe(e,t,r){return e.replace(t,r)}function ca(e,t){return e.indexOf(t)}function we(e,t){return e.charCodeAt(t)|0}function Pr(e,t,r){return e.slice(t,r)}function Ye(e){return e.length}function la(e){return e.length}function Dn(e,t){return t.push(e),e}function Xy(e,t){return e.map(t).join("")}var En=1,Xt=1,tc=0,ke=0,ye=0,er="";function wn(e,t,r,n,i,a,o){return{value:e,root:t,parent:r,type:n,props:i,children:a,line:En,column:Xt,length:o,return:""}}function Mr(e,t){return Qy(wn("",null,null,"",null,null,0),e,{length:-e.length},t)}function eb(){return ye}function tb(){return ye=ke>0?we(er,--ke):0,Xt--,ye===10&&(Xt=1,En--),ye}function je(){return ye=ke<tc?we(er,ke++):0,Xt++,ye===10&&(Xt=1,En++),ye}function Ke(){return we(er,ke)}function Tn(){return ke}function Nr(e,t){return Pr(er,e,t)}function kr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rc(e){return En=Xt=1,tc=Ye(er=e),ke=0,[]}function nc(e){return er="",e}function xn(e){return ec(Nr(ke-1,da(e===91?e+2:e===40?e+1:e)))}function rb(e){for(;(ye=Ke())&&ye<33;)je();return kr(e)>2||kr(ye)>3?"":" "}function nb(e,t){for(;--t&&je()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return Nr(e,Tn()+(t<6&&Ke()==32&&je()==32))}function da(e){for(;je();)switch(ye){case e:return ke;case 34:case 39:e!==34&&e!==39&&da(ye);break;case 40:e===41&&da(e);break;case 92:je();break}return ke}function ib(e,t){for(;je()&&e+ye!==57;)if(e+ye===84&&Ke()===47)break;return"/*"+Nr(t,ke-1)+"*"+Cn(e===47?e:je())}function ab(e){for(;!kr(Ke());)je();return Nr(e,ke)}function ob(e){return nc($n("",null,null,null,[""],e=rc(e),0,[0],e))}function $n(e,t,r,n,i,a,o,u,s){for(var c=0,l=0,f=o,I=0,g=0,D=0,b=1,_=1,C=1,h=0,O="",E=i,y=a,S=n,p=O;_;)switch(D=h,h=je()){case 40:if(D!=108&&we(p,f-1)==58){ca(p+=oe(xn(h),"&","&\f"),"&\f")!=-1&&(C=-1);break}case 34:case 39:case 91:p+=xn(h);break;case 9:case 10:case 13:case 32:p+=rb(D);break;case 92:p+=nb(Tn()-1,7);continue;case 47:switch(Ke()){case 42:case 47:Dn(sb(ib(je(),Tn()),t,r),s);break;default:p+="/"}break;case 123*b:u[c++]=Ye(p)*C;case 125*b:case 59:case 0:switch(h){case 0:case 125:_=0;case 59+l:C==-1&&(p=oe(p,/\f/g,"")),g>0&&Ye(p)-f&&Dn(g>32?ac(p+";",n,r,f-1):ac(oe(p," ","")+";",n,r,f-2),s);break;case 59:p+=";";default:if(Dn(S=ic(p,t,r,c,l,i,u,O,E=[],y=[],f),a),h===123)if(l===0)$n(p,t,S,S,E,a,f,u,y);else switch(I===99&&we(p,3)===110?100:I){case 100:case 108:case 109:case 115:$n(e,S,S,n&&Dn(ic(e,S,S,0,0,i,u,O,i,E=[],f),y),i,y,f,u,n?E:y);break;default:$n(p,S,S,S,[""],y,0,u,y)}}c=l=g=0,b=C=1,O=p="",f=o;break;case 58:f=1+Ye(p),g=D;default:if(b<1){if(h==123)--b;else if(h==125&&b++==0&&tb()==125)continue}switch(p+=Cn(h),h*b){case 38:C=l>0?1:(p+="\f",-1);break;case 44:u[c++]=(Ye(p)-1)*C,C=1;break;case 64:Ke()===45&&(p+=xn(je())),I=Ke(),l=f=Ye(O=p+=ab(Tn())),h++;break;case 45:D===45&&Ye(p)==2&&(b=0)}}return a}function ic(e,t,r,n,i,a,o,u,s,c,l){for(var f=i-1,I=i===0?a:[""],g=la(I),D=0,b=0,_=0;D<n;++D)for(var C=0,h=Pr(e,f+1,f=Ky(b=o[D])),O=e;C<g;++C)(O=ec(b>0?I[C]+" "+h:oe(h,/&\f/g,I[C])))&&(s[_++]=O);return wn(e,t,r,i===0?sa:u,s,c,l)}function sb(e,t,r){return wn(e,t,r,Zu,Cn(eb()),Pr(e,2,-2),0)}function ac(e,t,r,n){return wn(e,t,r,ua,Pr(e,0,n),Pr(e,n+1,-1),n)}function tr(e,t){for(var r="",n=la(e),i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function ub(e,t,r,n){switch(e.type){case Yy:if(e.children.length)break;case Wy:case ua:return e.return=e.return||e.value;case Zu:return"";case Xu:return e.return=e.value+"{"+tr(e.children,n)+"}";case sa:e.value=e.props.join(",")}return Ye(r=tr(e.children,n))?e.return=e.value+"{"+r+"}":""}function cb(e){var t=la(e);return function(r,n,i,a){for(var o="",u=0;u<t;u++)o+=e[u](r,n,i,a)||"";return o}}function lb(e){return function(t){t.root||(t=t.return)&&e(t)}}function db(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var fb=function(t,r,n){for(var i=0,a=0;i=a,a=Ke(),i===38&&a===12&&(r[n]=1),!kr(a);)je();return Nr(t,ke)},pb=function(t,r){var n=-1,i=44;do switch(kr(i)){case 0:i===38&&Ke()===12&&(r[n]=1),t[n]+=fb(ke-1,r,n);break;case 2:t[n]+=xn(i);break;case 4:if(i===44){t[++n]=Ke()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=Cn(i)}while(i=je());return t},mb=function(t,r){return nc(pb(rc(t),r))},oc=new WeakMap,gb=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,i=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!oc.get(n))&&!i){oc.set(t,!0);for(var a=[],o=mb(r,a),u=n.props,s=0,c=0;s<o.length;s++)for(var l=0;l<u.length;l++,c++)t.props[c]=a[s]?o[s].replace(/&\f/g,u[l]):u[l]+" "+o[s]}}},hb=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function sc(e,t){switch(Jy(e,t)){case 5103:return ae+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ae+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ae+e+On+e+xe+e+e;case 6828:case 4268:return ae+e+xe+e+e;case 6165:return ae+e+xe+"flex-"+e+e;case 5187:return ae+e+oe(e,/(\w+).+(:[^]+)/,ae+"box-$1$2"+xe+"flex-$1$2")+e;case 5443:return ae+e+xe+"flex-item-"+oe(e,/flex-|-self/,"")+e;case 4675:return ae+e+xe+"flex-line-pack"+oe(e,/align-content|flex-|-self/,"")+e;case 5548:return ae+e+xe+oe(e,"shrink","negative")+e;case 5292:return ae+e+xe+oe(e,"basis","preferred-size")+e;case 6060:return ae+"box-"+oe(e,"-grow","")+ae+e+xe+oe(e,"grow","positive")+e;case 4554:return ae+oe(e,/([^-])(transform)/g,"$1"+ae+"$2")+e;case 6187:return oe(oe(oe(e,/(zoom-|grab)/,ae+"$1"),/(image-set)/,ae+"$1"),e,"")+e;case 5495:case 3959:return oe(e,/(image-set\([^]*)/,ae+"$1$`$1");case 4968:return oe(oe(e,/(.+:)(flex-)?(.*)/,ae+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ae+e+e;case 4095:case 3583:case 4068:case 2532:return oe(e,/(.+)-inline(.+)/,ae+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ye(e)-1-t>6)switch(we(e,t+1)){case 109:if(we(e,t+4)!==45)break;case 102:return oe(e,/(.+:)(.+)-([^]+)/,"$1"+ae+"$2-$3$1"+On+(we(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ca(e,"stretch")?sc(oe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(we(e,t+1)!==115)break;case 6444:switch(we(e,Ye(e)-3-(~ca(e,"!important")&&10))){case 107:return oe(e,":",":"+ae)+e;case 101:return oe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ae+(we(e,14)===45?"inline-":"")+"box$3$1"+ae+"$2$3$1"+xe+"$2box$3")+e}break;case 5936:switch(we(e,t+11)){case 114:return ae+e+xe+oe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ae+e+xe+oe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ae+e+xe+oe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ae+e+xe+e+e}return e}var vb=function(t,r,n,i){if(t.length>-1&&!t.return)switch(t.type){case ua:t.return=sc(t.value,t.length);break;case Xu:return tr([Mr(t,{value:oe(t.value,"@","@"+ae)})],i);case sa:if(t.length)return Xy(t.props,function(a){switch(Zy(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return tr([Mr(t,{props:[oe(a,/:(read-\w+)/,":"+On+"$1")]})],i);case"::placeholder":return tr([Mr(t,{props:[oe(a,/:(plac\w+)/,":"+ae+"input-$1")]}),Mr(t,{props:[oe(a,/:(plac\w+)/,":"+On+"$1")]}),Mr(t,{props:[oe(a,/:(plac\w+)/,xe+"input-$1")]})],i)}return""})}},Sb=[vb],yb=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(b){var _=b.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(b),b.setAttribute("data-s",""))})}var i=t.stylisPlugins||Sb,a={},o,u=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(b){for(var _=b.getAttribute("data-emotion").split(" "),C=1;C<_.length;C++)a[_[C]]=!0;u.push(b)});var s,c=[gb,hb];{var l,f=[ub,lb(function(b){l.insert(b)})],I=cb(c.concat(i,f)),g=function(_){return tr(ob(_),I)};s=function(_,C,h,O){l=h,g(_?_+"{"+C.styles+"}":C.styles),O&&(D.inserted[C.name]=!0)}}var D={key:r,sheet:new zy({key:r,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:s};return D.sheet.hydrate(u),D},uc={exports:{}},ue={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ce=typeof Symbol=="function"&&Symbol.for,fa=Ce?Symbol.for("react.element"):60103,pa=Ce?Symbol.for("react.portal"):60106,Fn=Ce?Symbol.for("react.fragment"):60107,Pn=Ce?Symbol.for("react.strict_mode"):60108,Mn=Ce?Symbol.for("react.profiler"):60114,Nn=Ce?Symbol.for("react.provider"):60109,kn=Ce?Symbol.for("react.context"):60110,ma=Ce?Symbol.for("react.async_mode"):60111,An=Ce?Symbol.for("react.concurrent_mode"):60111,Ln=Ce?Symbol.for("react.forward_ref"):60112,jn=Ce?Symbol.for("react.suspense"):60113,bb=Ce?Symbol.for("react.suspense_list"):60120,qn=Ce?Symbol.for("react.memo"):60115,Vn=Ce?Symbol.for("react.lazy"):60116,Ib=Ce?Symbol.for("react.block"):60121,_b=Ce?Symbol.for("react.fundamental"):60117,Ob=Ce?Symbol.for("react.responder"):60118,Cb=Ce?Symbol.for("react.scope"):60119;function qe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case fa:switch(e=e.type,e){case ma:case An:case Fn:case Mn:case Pn:case jn:return e;default:switch(e=e&&e.$$typeof,e){case kn:case Ln:case Vn:case qn:case Nn:return e;default:return t}}case pa:return t}}}function cc(e){return qe(e)===An}ue.AsyncMode=ma,ue.ConcurrentMode=An,ue.ContextConsumer=kn,ue.ContextProvider=Nn,ue.Element=fa,ue.ForwardRef=Ln,ue.Fragment=Fn,ue.Lazy=Vn,ue.Memo=qn,ue.Portal=pa,ue.Profiler=Mn,ue.StrictMode=Pn,ue.Suspense=jn,ue.isAsyncMode=function(e){return cc(e)||qe(e)===ma},ue.isConcurrentMode=cc,ue.isContextConsumer=function(e){return qe(e)===kn},ue.isContextProvider=function(e){return qe(e)===Nn},ue.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===fa},ue.isForwardRef=function(e){return qe(e)===Ln},ue.isFragment=function(e){return qe(e)===Fn},ue.isLazy=function(e){return qe(e)===Vn},ue.isMemo=function(e){return qe(e)===qn},ue.isPortal=function(e){return qe(e)===pa},ue.isProfiler=function(e){return qe(e)===Mn},ue.isStrictMode=function(e){return qe(e)===Pn},ue.isSuspense=function(e){return qe(e)===jn},ue.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Fn||e===An||e===Mn||e===Pn||e===jn||e===bb||typeof e=="object"&&e!==null&&(e.$$typeof===Vn||e.$$typeof===qn||e.$$typeof===Nn||e.$$typeof===kn||e.$$typeof===Ln||e.$$typeof===_b||e.$$typeof===Ob||e.$$typeof===Cb||e.$$typeof===Ib)},ue.typeOf=qe,uc.exports=ue;var Db=uc.exports,lc=Db,Eb={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dc={};dc[lc.ForwardRef]=Eb,dc[lc.Memo]=wb;var Tb=!0;function xb(e,t,r){var n="";return r.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(n+=i+" ")}),n}var fc=function(t,r,n){var i=t.key+"-"+r.name;(n===!1||Tb===!1)&&t.registered[i]===void 0&&(t.registered[i]=r.styles)},$b=function(t,r,n){fc(t,r,n);var i=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var a=r;do t.insert(r===a?"."+i:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function Fb(e){for(var t=0,r,n=0,i=e.length;i>=4;++n,i-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Pb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Mb=/[A-Z]|^ms/g,Nb=/_EMO_([^_]+?)_([^]*?)_EMO_/g,pc=function(t){return t.charCodeAt(1)===45},mc=function(t){return t!=null&&typeof t!="boolean"},ga=db(function(e){return pc(e)?e:e.replace(Mb,"-$&").toLowerCase()}),gc=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(Nb,function(n,i,a){return Qe={name:i,styles:a,next:Qe},i})}return Pb[t]!==1&&!pc(t)&&typeof r=="number"&&r!==0?r+"px":r};function Ar(e,t,r){if(r==null)return"";var n=r;if(n.__emotion_styles!==void 0)return n;switch(typeof r){case"boolean":return"";case"object":{var i=r;if(i.anim===1)return Qe={name:i.name,styles:i.styles,next:Qe},i.name;var a=r;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)Qe={name:o.name,styles:o.styles,next:Qe},o=o.next;var u=a.styles+";";return u}return kb(e,t,r)}case"function":{if(e!==void 0){var s=Qe,c=r(e);return Qe=s,Ar(e,t,c)}break}}var l=r;return l}function kb(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=Ar(e,t,r[i])+";";else for(var a in r){var o=r[a];if(typeof o!="object"){var u=o;mc(u)&&(n+=ga(a)+":"+gc(a,u)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&t==null)for(var s=0;s<o.length;s++)mc(o[s])&&(n+=ga(a)+":"+gc(a,o[s])+";");else{var c=Ar(e,t,o);switch(a){case"animation":case"animationName":{n+=ga(a)+":"+c+";";break}default:n+=a+"{"+c+"}"}}}return n}var hc=/label:\s*([^\s;{]+)\s*(;|$)/g,Qe;function vc(e,t,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,i="";Qe=void 0;var a=e[0];if(a==null||a.raw===void 0)n=!1,i+=Ar(r,t,a);else{var o=a;i+=o[0]}for(var u=1;u<e.length;u++)if(i+=Ar(r,t,e[u]),n){var s=a;i+=s[u]}hc.lastIndex=0;for(var c="",l;(l=hc.exec(i))!==null;)c+="-"+l[1];var f=Fb(i)+c;return{name:f,styles:i,next:Qe}}var Ab=function(t){return t()},Lb=Q.useInsertionEffect?Q.useInsertionEffect:!1,jb=Lb||Ab,Sc=Q.createContext(typeof HTMLElement<"u"?yb({key:"css"}):null);Sc.Provider;var qb=function(t){return T.forwardRef(function(r,n){var i=T.useContext(Sc);return t(r,i,n)})},Vb=Q.createContext({}),ha={}.hasOwnProperty,va="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Bb=function(t,r){var n={};for(var i in r)ha.call(r,i)&&(n[i]=r[i]);return n[va]=t,n},Rb=function(t){var r=t.cache,n=t.serialized,i=t.isStringTag;return fc(r,n,i),jb(function(){return $b(r,n,i)}),null},Gb=qb(function(e,t,r){var n=e.css;typeof n=="string"&&t.registered[n]!==void 0&&(n=t.registered[n]);var i=e[va],a=[n],o="";typeof e.className=="string"?o=xb(t.registered,a,e.className):e.className!=null&&(o=e.className+" ");var u=vc(a,void 0,Q.useContext(Vb));o+=t.key+"-"+u.name;var s={};for(var c in e)ha.call(e,c)&&c!=="css"&&c!==va&&(s[c]=e[c]);return s.className=o,r&&(s.ref=r),Q.createElement(Q.Fragment,null,Q.createElement(Rb,{cache:t,serialized:u,isStringTag:typeof i=="string"}),Q.createElement(i,s))}),Ub=Gb,q=function(t,r){var n=arguments;if(r==null||!ha.call(r,"css"))return Q.createElement.apply(void 0,n);var i=n.length,a=new Array(i);a[0]=Ub,a[1]=Bb(t,r);for(var o=2;o<i;o++)a[o]=n[o];return Q.createElement.apply(null,a)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(q||(q={}));function Sa(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return vc(t)}function Hb(){var e=Sa.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function zb(e){if(Array.isArray(e))return e}function Wb(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,a,o,u=[],s=!0,c=!1;try{if(a=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);s=!0);}catch(l){c=!0,i=l}finally{try{if(!s&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw i}}return u}}function Yb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(e,t){return zb(e)||Wb(e,t)||Ju(e,t)||Yb()}function Kb(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function We(e,t){if(e==null)return{};var r,n,i=Kb(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function Qb(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const Jb=Math.min,Zb=Math.max,Bn=Math.round,Rn=Math.floor,Gn=e=>({x:e,y:e});function Xb(e){const{x:t,y:r,width:n,height:i}=e;return{width:n,height:i,top:r,left:t,right:t+n,bottom:r+i,x:t,y:r}}function Un(){return typeof window<"u"}function yc(e){return Ic(e)?(e.nodeName||"").toLowerCase():"#document"}function nt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function bc(e){var t;return(t=(Ic(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ic(e){return Un()?e instanceof Node||e instanceof nt(e).Node:!1}function e0(e){return Un()?e instanceof Element||e instanceof nt(e).Element:!1}function ya(e){return Un()?e instanceof HTMLElement||e instanceof nt(e).HTMLElement:!1}function _c(e){return!Un()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof nt(e).ShadowRoot}const t0=new Set(["inline","contents"]);function Oc(e){const{overflow:t,overflowX:r,overflowY:n,display:i}=ba(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!t0.has(i)}function r0(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const n0=new Set(["html","body","#document"]);function i0(e){return n0.has(yc(e))}function ba(e){return nt(e).getComputedStyle(e)}function a0(e){if(yc(e)==="html")return e;const t=e.assignedSlot||e.parentNode||_c(e)&&e.host||bc(e);return _c(t)?t.host:t}function Cc(e){const t=a0(e);return i0(t)?e.ownerDocument?e.ownerDocument.body:e.body:ya(t)&&Oc(t)?t:Cc(t)}function Hn(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const i=Cc(e),a=i===((n=e.ownerDocument)==null?void 0:n.body),o=nt(i);if(a){const u=Ia(o);return t.concat(o,o.visualViewport||[],Oc(i)?i:[],u&&r?Hn(u):[])}return t.concat(i,Hn(i,[],r))}function Ia(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function o0(e){const t=ba(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=ya(e),a=i?e.offsetWidth:r,o=i?e.offsetHeight:n,u=Bn(r)!==a||Bn(n)!==o;return u&&(r=a,n=o),{width:r,height:n,$:u}}function _a(e){return e0(e)?e:e.contextElement}function Dc(e){const t=_a(e);if(!ya(t))return Gn(1);const r=t.getBoundingClientRect(),{width:n,height:i,$:a}=o0(t);let o=(a?Bn(r.width):r.width)/n,u=(a?Bn(r.height):r.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!u||!Number.isFinite(u))&&(u=1),{x:o,y:u}}const s0=Gn(0);function u0(e){const t=nt(e);return!r0()||!t.visualViewport?s0:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function c0(e,t,r){return!1}function Ec(e,t,r,n){t===void 0&&(t=!1);const i=e.getBoundingClientRect(),a=_a(e);let o=Gn(1);t&&(o=Dc(e));const u=c0()?u0(a):Gn(0);let s=(i.left+u.x)/o.x,c=(i.top+u.y)/o.y,l=i.width/o.x,f=i.height/o.y;if(a){const I=nt(a),g=n;let D=I,b=Ia(D);for(;b&&n&&g!==D;){const _=Dc(b),C=b.getBoundingClientRect(),h=ba(b),O=C.left+(b.clientLeft+parseFloat(h.paddingLeft))*_.x,E=C.top+(b.clientTop+parseFloat(h.paddingTop))*_.y;s*=_.x,c*=_.y,l*=_.x,f*=_.y,s+=O,c+=E,D=nt(b),b=Ia(D)}}return Xb({width:l,height:f,x:s,y:c})}function wc(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function l0(e,t){let r=null,n;const i=bc(e);function a(){var u;clearTimeout(n),(u=r)==null||u.disconnect(),r=null}function o(u,s){u===void 0&&(u=!1),s===void 0&&(s=1),a();const c=e.getBoundingClientRect(),{left:l,top:f,width:I,height:g}=c;if(u||t(),!I||!g)return;const D=Rn(f),b=Rn(i.clientWidth-(l+I)),_=Rn(i.clientHeight-(f+g)),C=Rn(l),O={rootMargin:-D+"px "+-b+"px "+-_+"px "+-C+"px",threshold:Zb(0,Jb(1,s))||1};let E=!0;function y(S){const p=S[0].intersectionRatio;if(p!==s){if(!E)return o();p?o(!1,p):n=setTimeout(()=>{o(!1,1e-7)},1e3)}p===1&&!wc(c,e.getBoundingClientRect())&&o(),E=!1}try{r=new IntersectionObserver(y,{...O,root:i.ownerDocument})}catch{r=new IntersectionObserver(y,O)}r.observe(e)}return o(!0),a}function d0(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:u=typeof IntersectionObserver=="function",animationFrame:s=!1}=n,c=_a(e),l=i||a?[...c?Hn(c):[],...Hn(t)]:[];l.forEach(C=>{i&&C.addEventListener("scroll",r,{passive:!0}),a&&C.addEventListener("resize",r)});const f=c&&u?l0(c,r):null;let I=-1,g=null;o&&(g=new ResizeObserver(C=>{let[h]=C;h&&h.target===c&&g&&(g.unobserve(t),cancelAnimationFrame(I),I=requestAnimationFrame(()=>{var O;(O=g)==null||O.observe(t)})),r()}),c&&!s&&g.observe(c),g.observe(t));let D,b=s?Ec(e):null;s&&_();function _(){const C=Ec(e);b&&!wc(b,C)&&r(),b=C,D=requestAnimationFrame(_)}return r(),()=>{var C;l.forEach(h=>{i&&h.removeEventListener("scroll",r),a&&h.removeEventListener("resize",r)}),f==null||f(),(C=g)==null||C.disconnect(),g=null,s&&cancelAnimationFrame(D)}}var Oa=T.useLayoutEffect,f0=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],zn=function(){};function p0(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function m0(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];var a=[].concat(n);if(t&&e)for(var o in t)t.hasOwnProperty(o)&&t[o]&&a.push("".concat(p0(e,o)));return a.filter(function(u){return u}).map(function(u){return String(u).trim()}).join(" ")}var Wn=function(t){return C0(t)?t.filter(Boolean):Ct(t)==="object"&&t!==null?[t]:[]},Tc=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var r=We(t,f0);return L({},r)},he=function(t,r,n){var i=t.cx,a=t.getStyles,o=t.getClassNames,u=t.className;return{css:a(r,t),className:i(n??{},o(r,t),u)}};function g0(e,t,r){if(r){var n=r(e,t);if(typeof n=="string")return n}return e}function Yn(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function h0(e){return Yn(e)?window.innerHeight:e.clientHeight}function xc(e){return Yn(e)?window.pageYOffset:e.scrollTop}function Kn(e,t){if(Yn(e)){window.scrollTo(0,t);return}e.scrollTop=t}function v0(e){var t=getComputedStyle(e),r=t.position==="absolute",n=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(r&&t.position==="static")&&n.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function S0(e,t,r,n){return r*((e=e/n-1)*e*e+1)+t}function Qn(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:zn,i=xc(e),a=t-i,o=10,u=0;function s(){u+=o;var c=S0(u,i,a,r);Kn(e,c),u<r?window.requestAnimationFrame(s):n(e)}s()}function $c(e,t){var r=e.getBoundingClientRect(),n=t.getBoundingClientRect(),i=t.offsetHeight/3;n.bottom+i>r.bottom?Kn(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):n.top-i<r.top&&Kn(e,Math.max(t.offsetTop-i,0))}function y0(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Fc(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function b0(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Pc=!1,I0={get passive(){return Pc=!0}},Jn=typeof window<"u"?window:{};Jn.addEventListener&&Jn.removeEventListener&&(Jn.addEventListener("p",zn,I0),Jn.removeEventListener("p",zn,!1));var _0=Pc;function O0(e){return e!=null}function C0(e){return Array.isArray(e)}function Lr(e,t,r){return e?t:r}function qO(e){return e}function VO(e){return e}var D0=function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a=Object.entries(t).filter(function(o){var u=De(o,1),s=u[0];return!n.includes(s)});return a.reduce(function(o,u){var s=De(u,2),c=s[0],l=s[1];return o[c]=l,o},{})},E0=["children","innerProps"],w0=["children","innerProps"];function T0(e){var t=e.maxHeight,r=e.menuEl,n=e.minHeight,i=e.placement,a=e.shouldScroll,o=e.isFixedPosition,u=e.controlHeight,s=v0(r),c={placement:"bottom",maxHeight:t};if(!r||!r.offsetParent)return c;var l=s.getBoundingClientRect(),f=l.height,I=r.getBoundingClientRect(),g=I.bottom,D=I.height,b=I.top,_=r.offsetParent.getBoundingClientRect(),C=_.top,h=o?window.innerHeight:h0(s),O=xc(s),E=parseInt(getComputedStyle(r).marginBottom,10),y=parseInt(getComputedStyle(r).marginTop,10),S=C-y,p=h-b,w=S+O,x=f-O-b,$=g-h+O+E,j=O+b-y,H=160;switch(i){case"auto":case"bottom":if(p>=D)return{placement:"bottom",maxHeight:t};if(x>=D&&!o)return a&&Qn(s,$,H),{placement:"bottom",maxHeight:t};if(!o&&x>=n||o&&p>=n){a&&Qn(s,$,H);var ie=o?p-E:x-E;return{placement:"bottom",maxHeight:ie}}if(i==="auto"||o){var ee=t,F=o?S:w;return F>=n&&(ee=Math.min(F-E-u,t)),{placement:"top",maxHeight:ee}}if(i==="bottom")return a&&Kn(s,$),{placement:"bottom",maxHeight:t};break;case"top":if(S>=D)return{placement:"top",maxHeight:t};if(w>=D&&!o)return a&&Qn(s,j,H),{placement:"top",maxHeight:t};if(!o&&w>=n||o&&S>=n){var k=t;return(!o&&w>=n||o&&S>=n)&&(k=o?S-y:w-y),a&&Qn(s,j,H),{placement:"top",maxHeight:k}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function x0(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var Mc=function(t){return t==="auto"?"bottom":t},$0=function(t,r){var n,i=t.placement,a=t.theme,o=a.borderRadius,u=a.spacing,s=a.colors;return L((n={label:"menu"},Jt(n,x0(i),"100%"),Jt(n,"position","absolute"),Jt(n,"width","100%"),Jt(n,"zIndex",1),n),r?{}:{backgroundColor:s.neutral0,borderRadius:o,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:u.menuGutter,marginTop:u.menuGutter})},Nc=T.createContext(null),F0=function(t){var r=t.children,n=t.minMenuHeight,i=t.maxMenuHeight,a=t.menuPlacement,o=t.menuPosition,u=t.menuShouldScrollIntoView,s=t.theme,c=T.useContext(Nc)||{},l=c.setPortalPlacement,f=T.useRef(null),I=T.useState(i),g=De(I,2),D=g[0],b=g[1],_=T.useState(null),C=De(_,2),h=C[0],O=C[1],E=s.spacing.controlHeight;return Oa(function(){var y=f.current;if(y){var S=o==="fixed",p=u&&!S,w=T0({maxHeight:i,menuEl:y,minHeight:n,placement:a,shouldScroll:p,isFixedPosition:S,controlHeight:E});b(w.maxHeight),O(w.placement),l==null||l(w.placement)}},[i,a,o,u,n,l,E]),r({ref:f,placerProps:L(L({},t),{},{placement:h||Mc(a),maxHeight:D})})},P0=function(t){var r=t.children,n=t.innerRef,i=t.innerProps;return q("div",R({},he(t,"menu",{menu:!0}),{ref:n},i),r)},M0=P0,N0=function(t,r){var n=t.maxHeight,i=t.theme.spacing.baseUnit;return L({maxHeight:n,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:i,paddingTop:i})},k0=function(t){var r=t.children,n=t.innerProps,i=t.innerRef,a=t.isMulti;return q("div",R({},he(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:i},n),r)},kc=function(t,r){var n=t.theme,i=n.spacing.baseUnit,a=n.colors;return L({textAlign:"center"},r?{}:{color:a.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},A0=kc,L0=kc,j0=function(t){var r=t.children,n=r===void 0?"No options":r,i=t.innerProps,a=We(t,E0);return q("div",R({},he(L(L({},a),{},{children:n,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),n)},q0=function(t){var r=t.children,n=r===void 0?"Loading...":r,i=t.innerProps,a=We(t,w0);return q("div",R({},he(L(L({},a),{},{children:n,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),n)},V0=function(t){var r=t.rect,n=t.offset,i=t.position;return{left:r.left,position:i,top:n,width:r.width,zIndex:1}},B0=function(t){var r=t.appendTo,n=t.children,i=t.controlElement,a=t.innerProps,o=t.menuPlacement,u=t.menuPosition,s=T.useRef(null),c=T.useRef(null),l=T.useState(Mc(o)),f=De(l,2),I=f[0],g=f[1],D=T.useMemo(function(){return{setPortalPlacement:g}},[]),b=T.useState(null),_=De(b,2),C=_[0],h=_[1],O=T.useCallback(function(){if(i){var p=y0(i),w=u==="fixed"?0:window.pageYOffset,x=p[I]+w;(x!==(C==null?void 0:C.offset)||p.left!==(C==null?void 0:C.rect.left)||p.width!==(C==null?void 0:C.rect.width))&&h({offset:x,rect:p})}},[i,u,I,C==null?void 0:C.offset,C==null?void 0:C.rect.left,C==null?void 0:C.rect.width]);Oa(function(){O()},[O]);var E=T.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&s.current&&(c.current=d0(i,s.current,O,{elementResize:"ResizeObserver"in window}))},[i,O]);Oa(function(){E()},[E]);var y=T.useCallback(function(p){s.current=p,E()},[E]);if(!r&&u!=="fixed"||!C)return null;var S=q("div",R({ref:y},he(L(L({},t),{},{offset:C.offset,position:u,rect:C.rect}),"menuPortal",{"menu-portal":!0}),a),n);return q(Nc.Provider,{value:D},r?Pl.createPortal(S,r):S)},R0=function(t){var r=t.isDisabled,n=t.isRtl;return{label:"container",direction:n?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},G0=function(t){var r=t.children,n=t.innerProps,i=t.isDisabled,a=t.isRtl;return q("div",R({},he(t,"container",{"--is-disabled":i,"--is-rtl":a}),n),r)},U0=function(t,r){var n=t.theme.spacing,i=t.isMulti,a=t.hasValue,o=t.selectProps.controlShouldRenderValue;return L({alignItems:"center",display:i&&a&&o?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(n.baseUnit/2,"px ").concat(n.baseUnit*2,"px")})},H0=function(t){var r=t.children,n=t.innerProps,i=t.isMulti,a=t.hasValue;return q("div",R({},he(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":a}),n),r)},z0=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},W0=function(t){var r=t.children,n=t.innerProps;return q("div",R({},he(t,"indicatorsContainer",{indicators:!0}),n),r)},Ac,Y0=["size"],K0=["innerProps","isRtl","size"],Q0={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Lc=function(t){var r=t.size,n=We(t,Y0);return q("svg",R({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Q0},n))},Ca=function(t){return q(Lc,R({size:20},t),q("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},jc=function(t){return q(Lc,R({size:20},t),q("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},qc=function(t,r){var n=t.isFocused,i=t.theme,a=i.spacing.baseUnit,o=i.colors;return L({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:n?o.neutral60:o.neutral20,padding:a*2,":hover":{color:n?o.neutral80:o.neutral40}})},J0=qc,Z0=function(t){var r=t.children,n=t.innerProps;return q("div",R({},he(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),n),r||q(jc,null))},X0=qc,e1=function(t){var r=t.children,n=t.innerProps;return q("div",R({},he(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),n),r||q(Ca,null))},t1=function(t,r){var n=t.isDisabled,i=t.theme,a=i.spacing.baseUnit,o=i.colors;return L({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:n?o.neutral10:o.neutral20,marginBottom:a*2,marginTop:a*2})},r1=function(t){var r=t.innerProps;return q("span",R({},r,he(t,"indicatorSeparator",{"indicator-separator":!0})))},n1=Hb(Ac||(Ac=Qb([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),i1=function(t,r){var n=t.isFocused,i=t.size,a=t.theme,o=a.colors,u=a.spacing.baseUnit;return L({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},r?{}:{color:n?o.neutral60:o.neutral20,padding:u*2})},Da=function(t){var r=t.delay,n=t.offset;return q("span",{css:Sa({animation:"".concat(n1," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:n?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},a1=function(t){var r=t.innerProps,n=t.isRtl,i=t.size,a=i===void 0?4:i,o=We(t,K0);return q("div",R({},he(L(L({},o),{},{innerProps:r,isRtl:n,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),q(Da,{delay:0,offset:n}),q(Da,{delay:160,offset:!0}),q(Da,{delay:320,offset:!n}))},o1=function(t,r){var n=t.isDisabled,i=t.isFocused,a=t.theme,o=a.colors,u=a.borderRadius,s=a.spacing;return L({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:n?o.neutral5:o.neutral0,borderColor:n?o.neutral10:i?o.primary:o.neutral20,borderRadius:u,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(o.primary):void 0,"&:hover":{borderColor:i?o.primary:o.neutral30}})},s1=function(t){var r=t.children,n=t.isDisabled,i=t.isFocused,a=t.innerRef,o=t.innerProps,u=t.menuIsOpen;return q("div",R({ref:a},he(t,"control",{control:!0,"control--is-disabled":n,"control--is-focused":i,"control--menu-is-open":u}),o,{"aria-disabled":n||void 0}),r)},u1=s1,c1=["data"],l1=function(t,r){var n=t.theme.spacing;return r?{}:{paddingBottom:n.baseUnit*2,paddingTop:n.baseUnit*2}},d1=function(t){var r=t.children,n=t.cx,i=t.getStyles,a=t.getClassNames,o=t.Heading,u=t.headingProps,s=t.innerProps,c=t.label,l=t.theme,f=t.selectProps;return q("div",R({},he(t,"group",{group:!0}),s),q(o,R({},u,{selectProps:f,theme:l,getStyles:i,getClassNames:a,cx:n}),c),q("div",null,r))},f1=function(t,r){var n=t.theme,i=n.colors,a=n.spacing;return L({label:"group",cursor:"default",display:"block"},r?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},p1=function(t){var r=Tc(t);r.data;var n=We(r,c1);return q("div",R({},he(t,"groupHeading",{"group-heading":!0}),n))},m1=d1,g1=["innerRef","isDisabled","isHidden","inputClassName"],h1=function(t,r){var n=t.isDisabled,i=t.value,a=t.theme,o=a.spacing,u=a.colors;return L(L({visibility:n?"hidden":"visible",transform:i?"translateZ(0)":""},v1),r?{}:{margin:o.baseUnit/2,paddingBottom:o.baseUnit/2,paddingTop:o.baseUnit/2,color:u.neutral80})},Vc={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},v1={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":L({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Vc)},S1=function(t){return L({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Vc)},y1=function(t){var r=t.cx,n=t.value,i=Tc(t),a=i.innerRef,o=i.isDisabled,u=i.isHidden,s=i.inputClassName,c=We(i,g1);return q("div",R({},he(t,"input",{"input-container":!0}),{"data-value":n||""}),q("input",R({className:r({input:!0},s),ref:a,style:S1(u),disabled:o},c)))},b1=y1,I1=function(t,r){var n=t.theme,i=n.spacing,a=n.borderRadius,o=n.colors;return L({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:o.neutral10,borderRadius:a/2,margin:i.baseUnit/2})},_1=function(t,r){var n=t.theme,i=n.borderRadius,a=n.colors,o=t.cropWithEllipsis;return L({overflow:"hidden",textOverflow:o||o===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:i/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},O1=function(t,r){var n=t.theme,i=n.spacing,a=n.borderRadius,o=n.colors,u=t.isFocused;return L({alignItems:"center",display:"flex"},r?{}:{borderRadius:a/2,backgroundColor:u?o.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:o.dangerLight,color:o.danger}})},Bc=function(t){var r=t.children,n=t.innerProps;return q("div",n,r)},C1=Bc,D1=Bc;function E1(e){var t=e.children,r=e.innerProps;return q("div",R({role:"button"},r),t||q(Ca,{size:14}))}var w1=function(t){var r=t.children,n=t.components,i=t.data,a=t.innerProps,o=t.isDisabled,u=t.removeProps,s=t.selectProps,c=n.Container,l=n.Label,f=n.Remove;return q(c,{data:i,innerProps:L(L({},he(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":o})),a),selectProps:s},q(l,{data:i,innerProps:L({},he(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},r),q(f,{data:i,innerProps:L(L({},he(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},u),selectProps:s}))},T1=w1,x1=function(t,r){var n=t.isDisabled,i=t.isFocused,a=t.isSelected,o=t.theme,u=o.spacing,s=o.colors;return L({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:a?s.primary:i?s.primary25:"transparent",color:n?s.neutral20:a?s.neutral0:"inherit",padding:"".concat(u.baseUnit*2,"px ").concat(u.baseUnit*3,"px"),":active":{backgroundColor:n?void 0:a?s.primary:s.primary50}})},$1=function(t){var r=t.children,n=t.isDisabled,i=t.isFocused,a=t.isSelected,o=t.innerRef,u=t.innerProps;return q("div",R({},he(t,"option",{option:!0,"option--is-disabled":n,"option--is-focused":i,"option--is-selected":a}),{ref:o,"aria-disabled":n},u),r)},F1=$1,P1=function(t,r){var n=t.theme,i=n.spacing,a=n.colors;return L({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:a.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},M1=function(t){var r=t.children,n=t.innerProps;return q("div",R({},he(t,"placeholder",{placeholder:!0}),n),r)},N1=M1,k1=function(t,r){var n=t.isDisabled,i=t.theme,a=i.spacing,o=i.colors;return L({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:n?o.neutral40:o.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},A1=function(t){var r=t.children,n=t.isDisabled,i=t.innerProps;return q("div",R({},he(t,"singleValue",{"single-value":!0,"single-value--is-disabled":n}),i),r)},L1=A1,j1={ClearIndicator:e1,Control:u1,DropdownIndicator:Z0,DownChevron:jc,CrossIcon:Ca,Group:m1,GroupHeading:p1,IndicatorsContainer:W0,IndicatorSeparator:r1,Input:b1,LoadingIndicator:a1,Menu:M0,MenuList:k0,MenuPortal:B0,LoadingMessage:q0,NoOptionsMessage:j0,MultiValue:T1,MultiValueContainer:C1,MultiValueLabel:D1,MultiValueRemove:E1,Option:F1,Placeholder:N1,SelectContainer:G0,SingleValue:L1,ValueContainer:H0},q1=function(t){return L(L({},j1),t.components)},Rc=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function V1(e,t){return!!(e===t||Rc(e)&&Rc(t))}function B1(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!V1(e[r],t[r]))return!1;return!0}function R1(e,t){t===void 0&&(t=B1);var r=null;function n(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];if(r&&r.lastThis===this&&t(i,r.lastArgs))return r.lastResult;var o=e.apply(this,i);return r={lastResult:o,lastArgs:i,lastThis:this},o}return n.clear=function(){r=null},n}for(var G1={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},U1=function(t){return q("span",R({css:G1},t))},Gc=U1,H1={guidance:function(t){var r=t.isSearchable,n=t.isMulti,i=t.tabSelectsValue,a=t.context,o=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return o?"".concat(t["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(n?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var r=t.action,n=t.label,i=n===void 0?"":n,a=t.labels,o=t.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return o?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var r=t.context,n=t.focused,i=t.options,a=t.label,o=a===void 0?"":a,u=t.selectValue,s=t.isDisabled,c=t.isSelected,l=t.isAppleDevice,f=function(b,_){return b&&b.length?"".concat(b.indexOf(_)+1," of ").concat(b.length):""};if(r==="value"&&u)return"value ".concat(o," focused, ").concat(f(u,n),".");if(r==="menu"&&l){var I=s?" disabled":"",g="".concat(c?" selected":"").concat(I);return"".concat(o).concat(g,", ").concat(f(i,n),".")}return""},onFilter:function(t){var r=t.inputValue,n=t.resultsMessage;return"".concat(n).concat(r?" for search term "+r:"",".")}},z1=function(t){var r=t.ariaSelection,n=t.focusedOption,i=t.focusedValue,a=t.focusableOptions,o=t.isFocused,u=t.selectValue,s=t.selectProps,c=t.id,l=t.isAppleDevice,f=s.ariaLiveMessages,I=s.getOptionLabel,g=s.inputValue,D=s.isMulti,b=s.isOptionDisabled,_=s.isSearchable,C=s.menuIsOpen,h=s.options,O=s.screenReaderStatus,E=s.tabSelectsValue,y=s.isLoading,S=s["aria-label"],p=s["aria-live"],w=T.useMemo(function(){return L(L({},H1),f||{})},[f]),x=T.useMemo(function(){var F="";if(r&&w.onChange){var k=r.option,N=r.options,B=r.removedValue,X=r.removedValues,le=r.value,P=function(se){return Array.isArray(se)?null:se},A=B||k||P(le),U=A?I(A):"",G=N||X||void 0,W=G?G.map(I):[],J=L({isDisabled:A&&b(A,u),label:U,labels:W},r);F=w.onChange(J)}return F},[r,w,b,u,I]),$=T.useMemo(function(){var F="",k=n||i,N=!!(n&&u&&u.includes(n));if(k&&w.onFocus){var B={focused:k,label:I(k),isDisabled:b(k,u),isSelected:N,options:a,context:k===n?"menu":"value",selectValue:u,isAppleDevice:l};F=w.onFocus(B)}return F},[n,i,I,b,w,a,u,l]),j=T.useMemo(function(){var F="";if(C&&h.length&&!y&&w.onFilter){var k=O({count:a.length});F=w.onFilter({inputValue:g,resultsMessage:k})}return F},[a,g,C,w,h,O,y]),H=(r==null?void 0:r.action)==="initial-input-focus",ie=T.useMemo(function(){var F="";if(w.guidance){var k=i?"value":C?"menu":"input";F=w.guidance({"aria-label":S,context:k,isDisabled:n&&b(n,u),isMulti:D,isSearchable:_,tabSelectsValue:E,isInitialFocus:H})}return F},[S,n,i,D,b,_,C,w,u,E,H]),ee=q(T.Fragment,null,q("span",{id:"aria-selection"},x),q("span",{id:"aria-focused"},$),q("span",{id:"aria-results"},j),q("span",{id:"aria-guidance"},ie));return q(T.Fragment,null,q(Gc,{id:c},H&&ee),q(Gc,{"aria-live":p,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},o&&!H&&ee))},W1=z1,Ea=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Y1=new RegExp("["+Ea.map(function(e){return e.letters}).join("")+"]","g"),Uc={},wa=0;wa<Ea.length;wa++)for(var Ta=Ea[wa],xa=0;xa<Ta.letters.length;xa++)Uc[Ta.letters[xa]]=Ta.base;var Hc=function(t){return t.replace(Y1,function(r){return Uc[r]})},K1=R1(Hc),zc=function(t){return t.replace(/^\s+|\s+$/g,"")},Q1=function(t){return"".concat(t.label," ").concat(t.value)},J1=function(t){return function(r,n){if(r.data.__isNew__)return!0;var i=L({ignoreCase:!0,ignoreAccents:!0,stringify:Q1,trim:!0,matchFrom:"any"},t),a=i.ignoreCase,o=i.ignoreAccents,u=i.stringify,s=i.trim,c=i.matchFrom,l=s?zc(n):n,f=s?zc(u(r)):u(r);return a&&(l=l.toLowerCase(),f=f.toLowerCase()),o&&(l=K1(l),f=Hc(f)),c==="start"?f.substr(0,l.length)===l:f.indexOf(l)>-1}},Z1=["innerRef"];function X1(e){var t=e.innerRef,r=We(e,Z1),n=D0(r,"onExited","in","enter","exit","appear");return q("input",R({ref:t},n,{css:Sa({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var eI=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function tI(e){var t=e.isEnabled,r=e.onBottomArrive,n=e.onBottomLeave,i=e.onTopArrive,a=e.onTopLeave,o=T.useRef(!1),u=T.useRef(!1),s=T.useRef(0),c=T.useRef(null),l=T.useCallback(function(_,C){if(c.current!==null){var h=c.current,O=h.scrollTop,E=h.scrollHeight,y=h.clientHeight,S=c.current,p=C>0,w=E-y-O,x=!1;w>C&&o.current&&(n&&n(_),o.current=!1),p&&u.current&&(a&&a(_),u.current=!1),p&&C>w?(r&&!o.current&&r(_),S.scrollTop=E,x=!0,o.current=!0):!p&&-C>O&&(i&&!u.current&&i(_),S.scrollTop=0,x=!0,u.current=!0),x&&eI(_)}},[r,n,i,a]),f=T.useCallback(function(_){l(_,_.deltaY)},[l]),I=T.useCallback(function(_){s.current=_.changedTouches[0].clientY},[]),g=T.useCallback(function(_){var C=s.current-_.changedTouches[0].clientY;l(_,C)},[l]),D=T.useCallback(function(_){if(_){var C=_0?{passive:!1}:!1;_.addEventListener("wheel",f,C),_.addEventListener("touchstart",I,C),_.addEventListener("touchmove",g,C)}},[g,I,f]),b=T.useCallback(function(_){_&&(_.removeEventListener("wheel",f,!1),_.removeEventListener("touchstart",I,!1),_.removeEventListener("touchmove",g,!1))},[g,I,f]);return T.useEffect(function(){if(t){var _=c.current;return D(_),function(){b(_)}}},[t,D,b]),function(_){c.current=_}}var Wc=["boxSizing","height","overflow","paddingRight","position"],Yc={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Kc(e){e.cancelable&&e.preventDefault()}function Qc(e){e.stopPropagation()}function Jc(){var e=this.scrollTop,t=this.scrollHeight,r=e+this.offsetHeight;e===0?this.scrollTop=1:r===t&&(this.scrollTop=e-1)}function Zc(){return"ontouchstart"in window||navigator.maxTouchPoints}var Xc=!!(typeof window<"u"&&window.document&&window.document.createElement),jr=0,rr={capture:!1,passive:!1};function rI(e){var t=e.isEnabled,r=e.accountForScrollbars,n=r===void 0?!0:r,i=T.useRef({}),a=T.useRef(null),o=T.useCallback(function(s){if(Xc){var c=document.body,l=c&&c.style;if(n&&Wc.forEach(function(D){var b=l&&l[D];i.current[D]=b}),n&&jr<1){var f=parseInt(i.current.paddingRight,10)||0,I=document.body?document.body.clientWidth:0,g=window.innerWidth-I+f||0;Object.keys(Yc).forEach(function(D){var b=Yc[D];l&&(l[D]=b)}),l&&(l.paddingRight="".concat(g,"px"))}c&&Zc()&&(c.addEventListener("touchmove",Kc,rr),s&&(s.addEventListener("touchstart",Jc,rr),s.addEventListener("touchmove",Qc,rr))),jr+=1}},[n]),u=T.useCallback(function(s){if(Xc){var c=document.body,l=c&&c.style;jr=Math.max(jr-1,0),n&&jr<1&&Wc.forEach(function(f){var I=i.current[f];l&&(l[f]=I)}),c&&Zc()&&(c.removeEventListener("touchmove",Kc,rr),s&&(s.removeEventListener("touchstart",Jc,rr),s.removeEventListener("touchmove",Qc,rr)))}},[n]);return T.useEffect(function(){if(t){var s=a.current;return o(s),function(){u(s)}}},[t,o,u]),function(s){a.current=s}}var nI=function(t){var r=t.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},iI={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function aI(e){var t=e.children,r=e.lockEnabled,n=e.captureEnabled,i=n===void 0?!0:n,a=e.onBottomArrive,o=e.onBottomLeave,u=e.onTopArrive,s=e.onTopLeave,c=tI({isEnabled:i,onBottomArrive:a,onBottomLeave:o,onTopArrive:u,onTopLeave:s}),l=rI({isEnabled:r}),f=function(g){c(g),l(g)};return q(T.Fragment,null,r&&q("div",{onClick:nI,css:iI}),t(f))}var oI={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},sI=function(t){var r=t.name,n=t.onFocus;return q("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:n,css:oI,value:"",onChange:function(){}})},uI=sI;function $a(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function cI(){return $a(/^iPhone/i)}function el(){return $a(/^Mac/i)}function lI(){return $a(/^iPad/i)||el()&&navigator.maxTouchPoints>1}function dI(){return cI()||lI()}function fI(){return el()||dI()}var pI=function(t){return t.label},tl=function(t){return t.label},rl=function(t){return t.value},mI=function(t){return!!t.isDisabled},gI={clearIndicator:X0,container:R0,control:o1,dropdownIndicator:J0,group:l1,groupHeading:f1,indicatorsContainer:z0,indicatorSeparator:t1,input:h1,loadingIndicator:i1,loadingMessage:L0,menu:$0,menuList:N0,menuPortal:V0,multiValue:I1,multiValueLabel:_1,multiValueRemove:O1,noOptionsMessage:A0,option:x1,placeholder:P1,singleValue:k1,valueContainer:U0},hI={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},vI=4,nl=4,SI=38,yI=nl*2,bI={baseUnit:nl,controlHeight:SI,menuGutter:yI},Fa={borderRadius:vI,colors:hI,spacing:bI},II={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Fc(),captureMenuScroll:!Fc(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:J1(),formatGroupLabel:pI,getOptionLabel:tl,getOptionValue:rl,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:mI,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!b0(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var r=t.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function il(e,t,r,n){var i=cl(e,t,r),a=ll(e,t,r),o=ul(e,t),u=Xn(e,t);return{type:"option",data:t,isDisabled:i,isSelected:a,label:o,value:u,index:n}}function Zn(e,t){return e.options.map(function(r,n){if("options"in r){var i=r.options.map(function(o,u){return il(e,o,t,u)}).filter(function(o){return sl(e,o)});return i.length>0?{type:"group",data:r,options:i,index:n}:void 0}var a=il(e,r,t,n);return sl(e,a)?a:void 0}).filter(O0)}function al(e){return e.reduce(function(t,r){return r.type==="group"?t.push.apply(t,Zt(r.options.map(function(n){return n.data}))):t.push(r.data),t},[])}function ol(e,t){return e.reduce(function(r,n){return n.type==="group"?r.push.apply(r,Zt(n.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(n.index,"-").concat(i.index)}}))):r.push({data:n.data,id:"".concat(t,"-").concat(n.index)}),r},[])}function _I(e,t){return al(Zn(e,t))}function sl(e,t){var r=e.inputValue,n=r===void 0?"":r,i=t.data,a=t.isSelected,o=t.label,u=t.value;return(!fl(e)||!a)&&dl(e,{label:o,value:u,data:i},n)}function OI(e,t){var r=e.focusedValue,n=e.selectValue,i=n.indexOf(r);if(i>-1){var a=t.indexOf(r);if(a>-1)return r;if(i<t.length)return t[i]}return null}function CI(e,t){var r=e.focusedOption;return r&&t.indexOf(r)>-1?r:t[0]}var Pa=function(t,r){var n,i=(n=t.find(function(a){return a.data===r}))===null||n===void 0?void 0:n.id;return i||null},ul=function(t,r){return t.getOptionLabel(r)},Xn=function(t,r){return t.getOptionValue(r)};function cl(e,t,r){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,r):!1}function ll(e,t,r){if(r.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,r);var n=Xn(e,t);return r.some(function(i){return Xn(e,i)===n})}function dl(e,t,r){return e.filterOption?e.filterOption(t,r):!0}var fl=function(t){var r=t.hideSelectedOptions,n=t.isMulti;return r===void 0?n:r},DI=1,Ma=function(e){Ly(r,e);var t=Vy(r);function r(n){var i;if(ky(this,r),i=t.call(this,n),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,c){var l=i.props,f=l.onChange,I=l.name;c.name=I,i.ariaOnChange(s,c),f(s,c)},i.setValue=function(s,c,l){var f=i.props,I=f.closeMenuOnSelect,g=f.isMulti,D=f.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:D}),I&&(i.setState({inputIsHiddenAfterUpdate:!g}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:c,option:l})},i.selectOption=function(s){var c=i.props,l=c.blurInputOnSelect,f=c.isMulti,I=c.name,g=i.state.selectValue,D=f&&i.isOptionSelected(s,g),b=i.isOptionDisabled(s,g);if(D){var _=i.getOptionValue(s);i.setValue(g.filter(function(C){return i.getOptionValue(C)!==_}),"deselect-option",s)}else if(!b)f?i.setValue([].concat(Zt(g),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:I});return}l&&i.blurInput()},i.removeValue=function(s){var c=i.props.isMulti,l=i.state.selectValue,f=i.getOptionValue(s),I=l.filter(function(D){return i.getOptionValue(D)!==f}),g=Lr(c,I,I[0]||null);i.onChange(g,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Lr(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,c=i.state.selectValue,l=c[c.length-1],f=c.slice(0,c.length-1),I=Lr(s,f,f[0]||null);l&&i.onChange(I,{action:"pop-value",removedValue:l})},i.getFocusedOptionId=function(s){return Pa(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return ol(Zn(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];return m0.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(s){return ul(i.props,s)},i.getOptionValue=function(s){return Xn(i.props,s)},i.getStyles=function(s,c){var l=i.props.unstyled,f=gI[s](c,l);f.boxSizing="border-box";var I=i.props.styles[s];return I?I(f,c):f},i.getClassNames=function(s,c){var l,f;return(l=(f=i.props.classNames)[s])===null||l===void 0?void 0:l.call(f,c)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return q1(i.props)},i.buildCategorizedOptions=function(){return Zn(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return al(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,c){i.setState({ariaSelection:L({value:s},c)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var c=i.props,l=c.isMulti,f=c.menuIsOpen;i.focusInput(),f?(i.setState({inputIsHiddenAfterUpdate:!l}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&Yn(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var c=s.touches,l=c&&c.item(0);l&&(i.initialTouchX=l.clientX,i.initialTouchY=l.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var c=s.touches,l=c&&c.item(0);if(l){var f=Math.abs(l.clientX-i.initialTouchX),I=Math.abs(l.clientY-i.initialTouchY),g=5;i.userIsDragging=f>g||I>g}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var c=i.props.inputValue,l=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(l,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var c=i.getFocusableOptions(),l=c.indexOf(s);i.setState({focusedOption:s,focusedOptionId:l>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return fl(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var c=i.props,l=c.isMulti,f=c.backspaceRemovesValue,I=c.escapeClearsValue,g=c.inputValue,D=c.isClearable,b=c.isDisabled,_=c.menuIsOpen,C=c.onKeyDown,h=c.tabSelectsValue,O=c.openMenuOnFocus,E=i.state,y=E.focusedOption,S=E.focusedValue,p=E.selectValue;if(!b&&!(typeof C=="function"&&(C(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!l||g)return;i.focusValue("previous");break;case"ArrowRight":if(!l||g)return;i.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(S)i.removeValue(S);else{if(!f)return;l?i.popValue():D&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!_||!h||!y||O&&i.isOptionSelected(y,p))return;i.selectOption(y);break;case"Enter":if(s.keyCode===229)break;if(_){if(!y||i.isComposing)return;i.selectOption(y);break}return;case"Escape":_?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:g}),i.onMenuClose()):D&&I&&i.clearValue();break;case" ":if(g)return;if(!_){i.openMenu("first");break}if(!y)return;i.selectOption(y);break;case"ArrowUp":_?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":_?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!_)return;i.focusOption("pageup");break;case"PageDown":if(!_)return;i.focusOption("pagedown");break;case"Home":if(!_)return;i.focusOption("first");break;case"End":if(!_)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++DI),i.state.selectValue=Wn(n.value),n.menuIsOpen&&i.state.selectValue.length){var a=i.getFocusableOptionsWithIds(),o=i.buildFocusableOptions(),u=o.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=a,i.state.focusedOption=o[u],i.state.focusedOptionId=Pa(a,o[u])}return i}return Ay(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&$c(this.menuListRef,this.focusedOptionRef),fI()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var a=this.props,o=a.isDisabled,u=a.menuIsOpen,s=this.state.isFocused;(s&&!o&&i.isDisabled||s&&u&&!i.menuIsOpen)&&this.focusInput(),s&&o&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!o&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&($c(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,a){this.props.onInputChange(i,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var a=this,o=this.state,u=o.selectValue,s=o.isFocused,c=this.buildFocusableOptions(),l=i==="first"?0:c.length-1;if(!this.props.isMulti){var f=c.indexOf(u[0]);f>-1&&(l=f)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[l],focusedOptionId:this.getFocusedOptionId(c[l])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(i){var a=this.state,o=a.selectValue,u=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=o.indexOf(u);u||(s=-1);var c=o.length-1,l=-1;if(o.length){switch(i){case"previous":s===0?l=0:s===-1?l=c:l=s-1;break;case"next":s>-1&&s<c&&(l=s+1);break}this.setState({inputIsHidden:l!==-1,focusedValue:o[l]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,o=this.state.focusedOption,u=this.getFocusableOptions();if(u.length){var s=0,c=u.indexOf(o);o||(c=-1),i==="up"?s=c>0?c-1:u.length-1:i==="down"?s=(c+1)%u.length:i==="pageup"?(s=c-a,s<0&&(s=0)):i==="pagedown"?(s=c+a,s>u.length-1&&(s=u.length-1)):i==="last"&&(s=u.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:u[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(u[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Fa):L(L({},Fa),this.props.theme):Fa}},{key:"getCommonProps",value:function(){var i=this.clearValue,a=this.cx,o=this.getStyles,u=this.getClassNames,s=this.getValue,c=this.selectOption,l=this.setValue,f=this.props,I=f.isMulti,g=f.isRtl,D=f.options,b=this.hasValue();return{clearValue:i,cx:a,getStyles:o,getClassNames:u,getValue:s,hasValue:b,isMulti:I,isRtl:g,options:D,selectOption:c,selectProps:f,setValue:l,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,a=i.isClearable,o=i.isMulti;return a===void 0?o:a}},{key:"isOptionDisabled",value:function(i,a){return cl(this.props,i,a)}},{key:"isOptionSelected",value:function(i,a){return ll(this.props,i,a)}},{key:"filterOption",value:function(i,a){return dl(this.props,i,a)}},{key:"formatOptionLabel",value:function(i,a){if(typeof this.props.formatOptionLabel=="function"){var o=this.props.inputValue,u=this.state.selectValue;return this.props.formatOptionLabel(i,{context:a,inputValue:o,selectValue:u})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,a=i.isDisabled,o=i.isSearchable,u=i.inputId,s=i.inputValue,c=i.tabIndex,l=i.form,f=i.menuIsOpen,I=i.required,g=this.getComponents(),D=g.Input,b=this.state,_=b.inputIsHidden,C=b.ariaSelection,h=this.commonProps,O=u||this.getElementId("input"),E=L(L(L({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":I,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},f&&{"aria-controls":this.getElementId("listbox")}),!o&&{"aria-readonly":!0}),this.hasValue()?(C==null?void 0:C.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return o?Q.createElement(D,R({},h,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:O,innerRef:this.getInputRef,isDisabled:a,isHidden:_,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:l,type:"text",value:s},E)):Q.createElement(X1,R({id:O,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:zn,onFocus:this.onInputFocus,disabled:a,tabIndex:c,inputMode:"none",form:l,value:""},E))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,a=this.getComponents(),o=a.MultiValue,u=a.MultiValueContainer,s=a.MultiValueLabel,c=a.MultiValueRemove,l=a.SingleValue,f=a.Placeholder,I=this.commonProps,g=this.props,D=g.controlShouldRenderValue,b=g.isDisabled,_=g.isMulti,C=g.inputValue,h=g.placeholder,O=this.state,E=O.selectValue,y=O.focusedValue,S=O.isFocused;if(!this.hasValue()||!D)return C?null:Q.createElement(f,R({},I,{key:"placeholder",isDisabled:b,isFocused:S,innerProps:{id:this.getElementId("placeholder")}}),h);if(_)return E.map(function(w,x){var $=w===y,j="".concat(i.getOptionLabel(w),"-").concat(i.getOptionValue(w));return Q.createElement(o,R({},I,{components:{Container:u,Label:s,Remove:c},isFocused:$,isDisabled:b,key:j,index:x,removeProps:{onClick:function(){return i.removeValue(w)},onTouchEnd:function(){return i.removeValue(w)},onMouseDown:function(ie){ie.preventDefault()}},data:w}),i.formatOptionLabel(w,"value"))});if(C)return null;var p=E[0];return Q.createElement(l,R({},I,{data:p,isDisabled:b}),this.formatOptionLabel(p,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),a=i.ClearIndicator,o=this.commonProps,u=this.props,s=u.isDisabled,c=u.isLoading,l=this.state.isFocused;if(!this.isClearable()||!a||s||!this.hasValue()||c)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return Q.createElement(a,R({},o,{innerProps:f,isFocused:l}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),a=i.LoadingIndicator,o=this.commonProps,u=this.props,s=u.isDisabled,c=u.isLoading,l=this.state.isFocused;if(!a||!c)return null;var f={"aria-hidden":"true"};return Q.createElement(a,R({},o,{innerProps:f,isDisabled:s,isFocused:l}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),a=i.DropdownIndicator,o=i.IndicatorSeparator;if(!a||!o)return null;var u=this.commonProps,s=this.props.isDisabled,c=this.state.isFocused;return Q.createElement(o,R({},u,{isDisabled:s,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),a=i.DropdownIndicator;if(!a)return null;var o=this.commonProps,u=this.props.isDisabled,s=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return Q.createElement(a,R({},o,{innerProps:c,isDisabled:u,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,a=this.getComponents(),o=a.Group,u=a.GroupHeading,s=a.Menu,c=a.MenuList,l=a.MenuPortal,f=a.LoadingMessage,I=a.NoOptionsMessage,g=a.Option,D=this.commonProps,b=this.state.focusedOption,_=this.props,C=_.captureMenuScroll,h=_.inputValue,O=_.isLoading,E=_.loadingMessage,y=_.minMenuHeight,S=_.maxMenuHeight,p=_.menuIsOpen,w=_.menuPlacement,x=_.menuPosition,$=_.menuPortalTarget,j=_.menuShouldBlockScroll,H=_.menuShouldScrollIntoView,ie=_.noOptionsMessage,ee=_.onMenuScrollToTop,F=_.onMenuScrollToBottom;if(!p)return null;var k=function(U,G){var W=U.type,J=U.data,V=U.isDisabled,se=U.isSelected,Pe=U.label,Re=U.value,nr=b===J,xt=V?void 0:function(){return i.onOptionHover(J)},qa=V?void 0:function(){return i.selectOption(J)},ti="".concat(i.getElementId("option"),"-").concat(G),Vr={id:ti,onClick:qa,onMouseMove:xt,onMouseOver:xt,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:se};return Q.createElement(g,R({},D,{innerProps:Vr,data:J,isDisabled:V,isSelected:se,key:ti,label:Pe,type:W,value:Re,isFocused:nr,innerRef:nr?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(U.data,"menu"))},N;if(this.hasOptions())N=this.getCategorizedOptions().map(function(A){if(A.type==="group"){var U=A.data,G=A.options,W=A.index,J="".concat(i.getElementId("group"),"-").concat(W),V="".concat(J,"-heading");return Q.createElement(o,R({},D,{key:J,data:U,options:G,Heading:u,headingProps:{id:V,data:A.data},label:i.formatGroupLabel(A.data)}),A.options.map(function(se){return k(se,"".concat(W,"-").concat(se.index))}))}else if(A.type==="option")return k(A,"".concat(A.index))});else if(O){var B=E({inputValue:h});if(B===null)return null;N=Q.createElement(f,D,B)}else{var X=ie({inputValue:h});if(X===null)return null;N=Q.createElement(I,D,X)}var le={minMenuHeight:y,maxMenuHeight:S,menuPlacement:w,menuPosition:x,menuShouldScrollIntoView:H},P=Q.createElement(F0,R({},D,le),function(A){var U=A.ref,G=A.placerProps,W=G.placement,J=G.maxHeight;return Q.createElement(s,R({},D,le,{innerRef:U,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:O,placement:W}),Q.createElement(aI,{captureEnabled:C,onTopArrive:ee,onBottomArrive:F,lockEnabled:j},function(V){return Q.createElement(c,R({},D,{innerRef:function(Pe){i.getMenuListRef(Pe),V(Pe)},innerProps:{role:"listbox","aria-multiselectable":D.isMulti,id:i.getElementId("listbox")},isLoading:O,maxHeight:J,focusedOption:b}),N)}))});return $||x==="fixed"?Q.createElement(l,R({},D,{appendTo:$,controlElement:this.controlRef,menuPlacement:w,menuPosition:x}),P):P}},{key:"renderFormField",value:function(){var i=this,a=this.props,o=a.delimiter,u=a.isDisabled,s=a.isMulti,c=a.name,l=a.required,f=this.state.selectValue;if(l&&!this.hasValue()&&!u)return Q.createElement(uI,{name:c,onFocus:this.onValueInputFocus});if(!(!c||u))if(s)if(o){var I=f.map(function(b){return i.getOptionValue(b)}).join(o);return Q.createElement("input",{name:c,type:"hidden",value:I})}else{var g=f.length>0?f.map(function(b,_){return Q.createElement("input",{key:"i-".concat(_),name:c,type:"hidden",value:i.getOptionValue(b)})}):Q.createElement("input",{name:c,type:"hidden",value:""});return Q.createElement("div",null,g)}else{var D=f[0]?this.getOptionValue(f[0]):"";return Q.createElement("input",{name:c,type:"hidden",value:D})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,a=this.state,o=a.ariaSelection,u=a.focusedOption,s=a.focusedValue,c=a.isFocused,l=a.selectValue,f=this.getFocusableOptions();return Q.createElement(W1,R({},i,{id:this.getElementId("live-region"),ariaSelection:o,focusedOption:u,focusedValue:s,isFocused:c,selectValue:l,focusableOptions:f,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),a=i.Control,o=i.IndicatorsContainer,u=i.SelectContainer,s=i.ValueContainer,c=this.props,l=c.className,f=c.id,I=c.isDisabled,g=c.menuIsOpen,D=this.state.isFocused,b=this.commonProps=this.getCommonProps();return Q.createElement(u,R({},b,{className:l,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:I,isFocused:D}),this.renderLiveRegion(),Q.createElement(a,R({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:I,isFocused:D,menuIsOpen:g}),Q.createElement(s,R({},b,{isDisabled:I}),this.renderPlaceholderOrValue(),this.renderInput()),Q.createElement(o,R({},b,{isDisabled:I}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,a){var o=a.prevProps,u=a.clearFocusValueOnUpdate,s=a.inputIsHiddenAfterUpdate,c=a.ariaSelection,l=a.isFocused,f=a.prevWasFocused,I=a.instancePrefix,g=i.options,D=i.value,b=i.menuIsOpen,_=i.inputValue,C=i.isMulti,h=Wn(D),O={};if(o&&(D!==o.value||g!==o.options||b!==o.menuIsOpen||_!==o.inputValue)){var E=b?_I(i,h):[],y=b?ol(Zn(i,h),"".concat(I,"-option")):[],S=u?OI(a,h):null,p=CI(a,E),w=Pa(y,p);O={selectValue:h,focusedOption:p,focusedOptionId:w,focusableOptionsWithIds:y,focusedValue:S,clearFocusValueOnUpdate:!1}}var x=s!=null&&i!==o?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},$=c,j=l&&f;return l&&!j&&($={value:Lr(C,h,h[0]||null),options:h,action:"initial-input-focus"},j=!f),(c==null?void 0:c.action)==="initial-input-focus"&&($=null),L(L(L({},O),x),{},{prevProps:i,ariaSelection:$,prevWasFocused:j})}}]),r}(T.Component);Ma.defaultProps=II;var EI=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function pl(e){var t=e.defaultInputValue,r=t===void 0?"":t,n=e.defaultMenuIsOpen,i=n===void 0?!1:n,a=e.defaultValue,o=a===void 0?null:a,u=e.inputValue,s=e.menuIsOpen,c=e.onChange,l=e.onInputChange,f=e.onMenuClose,I=e.onMenuOpen,g=e.value,D=We(e,EI),b=T.useState(u!==void 0?u:r),_=De(b,2),C=_[0],h=_[1],O=T.useState(s!==void 0?s:i),E=De(O,2),y=E[0],S=E[1],p=T.useState(g!==void 0?g:o),w=De(p,2),x=w[0],$=w[1],j=T.useCallback(function(B,X){typeof c=="function"&&c(B,X),$(B)},[c]),H=T.useCallback(function(B,X){var le;typeof l=="function"&&(le=l(B,X)),h(le!==void 0?le:B)},[l]),ie=T.useCallback(function(){typeof I=="function"&&I(),S(!0)},[I]),ee=T.useCallback(function(){typeof f=="function"&&f(),S(!1)},[f]),F=u!==void 0?u:C,k=s!==void 0?s:y,N=g!==void 0?g:x;return L(L({},D),{},{inputValue:F,menuIsOpen:k,onChange:j,onInputChange:H,onMenuClose:ee,onMenuOpen:ie,value:N})}var wI=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function ml(e){var t=e.defaultOptions,r=t===void 0?!1:t,n=e.cacheOptions,i=n===void 0?!1:n,a=e.loadOptions;e.options;var o=e.isLoading,u=o===void 0?!1:o,s=e.onInputChange,c=e.filterOption,l=c===void 0?null:c,f=We(e,wI),I=f.inputValue,g=T.useRef(void 0),D=T.useRef(!1),b=T.useState(Array.isArray(r)?r:void 0),_=De(b,2),C=_[0],h=_[1],O=T.useState(typeof I<"u"?I:""),E=De(O,2),y=E[0],S=E[1],p=T.useState(r===!0),w=De(p,2),x=w[0],$=w[1],j=T.useState(void 0),H=De(j,2),ie=H[0],ee=H[1],F=T.useState([]),k=De(F,2),N=k[0],B=k[1],X=T.useState(!1),le=De(X,2),P=le[0],A=le[1],U=T.useState({}),G=De(U,2),W=G[0],J=G[1],V=T.useState(void 0),se=De(V,2),Pe=se[0],Re=se[1],nr=T.useState(void 0),xt=De(nr,2),qa=xt[0],ti=xt[1];i!==qa&&(J({}),ti(i)),r!==Pe&&(h(Array.isArray(r)?r:void 0),Re(r)),T.useEffect(function(){return D.current=!0,function(){D.current=!1}},[]);var Vr=T.useCallback(function(Br,ir){if(!a)return ir();var Be=a(Br,ir);Be&&typeof Be.then=="function"&&Be.then(ir,function(){return ir()})},[a]);T.useEffect(function(){r===!0&&Vr(y,function(Br){D.current&&(h(Br||[]),$(!!g.current))})},[]);var EO=T.useCallback(function(Br,ir){var Be=g0(Br,ir,s);if(!Be){g.current=void 0,S(""),ee(""),B([]),$(!1),A(!1);return}if(i&&W[Be])S(Be),ee(Be),B(W[Be]),$(!1),A(!1);else{var TO=g.current={};S(Be),$(!0),A(!ie),Vr(Be,function(Va){D&&TO===g.current&&(g.current=void 0,$(!1),ee(Be),B(Va||[]),A(!1),J(Va?L(L({},W),{},Jt({},Be,Va)):W))})}},[i,Vr,ie,W,s]),wO=P?[]:y&&ie?N:C||[];return L(L({},f),{},{options:wO,isLoading:x||u,onInputChange:EO,filterOption:l})}var TI=T.forwardRef(function(e,t){var r=ml(e),n=pl(r);return Q.createElement(Ma,R({ref:t},n))}),xI=TI,$I=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],gl=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,i=String(t).toLowerCase(),a=String(n.getOptionValue(r)).toLowerCase(),o=String(n.getOptionLabel(r)).toLowerCase();return a===i||o===i},Na={formatCreateLabel:function(t){return'Create "'.concat(t,'"')},isValidNewOption:function(t,r,n,i){return!(!t||r.some(function(a){return gl(t,a,i)})||n.some(function(a){return gl(t,a,i)}))},getNewOptionData:function(t,r){return{label:r,value:t,__isNew__:!0}}};function FI(e){var t=e.allowCreateWhileLoading,r=t===void 0?!1:t,n=e.createOptionPosition,i=n===void 0?"last":n,a=e.formatCreateLabel,o=a===void 0?Na.formatCreateLabel:a,u=e.isValidNewOption,s=u===void 0?Na.isValidNewOption:u,c=e.getNewOptionData,l=c===void 0?Na.getNewOptionData:c,f=e.onCreateOption,I=e.options,g=I===void 0?[]:I,D=e.onChange,b=We(e,$I),_=b.getOptionValue,C=_===void 0?rl:_,h=b.getOptionLabel,O=h===void 0?tl:h,E=b.inputValue,y=b.isLoading,S=b.isMulti,p=b.value,w=b.name,x=T.useMemo(function(){return s(E,Wn(p),g,{getOptionValue:C,getOptionLabel:O})?l(E,o(E)):void 0},[o,l,O,C,E,s,g,p]),$=T.useMemo(function(){return(r||!y)&&x?i==="first"?[x].concat(Zt(g)):[].concat(Zt(g),[x]):g},[r,i,y,x,g]),j=T.useCallback(function(H,ie){if(ie.action!=="select-option")return D(H,ie);var ee=Array.isArray(H)?H:[H];if(ee[ee.length-1]===x){if(f)f(E);else{var F=l(E,E),k={action:"create-option",name:w,option:F};D(Lr(S,[].concat(Zt(Wn(p)),[F]),F),k)}return}D(H,ie)},[l,E,S,w,x,f,D,p]);return L(L({},b),{},{options:$,onChange:j})}var PI=T.forwardRef(function(e,t){var r=ml(e),n=pl(r),i=FI(n);return Q.createElement(Ma,R({ref:t},i))}),MI=PI,NI="[object Symbol]";function kI(e){return typeof e=="symbol"||Kt(e)&&zt(e)==NI}var AI=/\s/;function LI(e){for(var t=e.length;t--&&AI.test(e.charAt(t)););return t}var jI=/^\s+/;function qI(e){return e&&e.slice(0,LI(e)+1).replace(jI,"")}var hl=NaN,VI=/^[-+]0x[0-9a-f]+$/i,BI=/^0b[01]+$/i,RI=/^0o[0-7]+$/i,GI=parseInt;function vl(e){if(typeof e=="number")return e;if(kI(e))return hl;if(bt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=bt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=qI(e);var r=BI.test(e);return r||RI.test(e)?GI(e.slice(2),r?2:8):VI.test(e)?hl:+e}var ka=function(){return ze.Date.now()},UI="Expected a function",HI=Math.max,zI=Math.min;function WI(e,t,r){var n,i,a,o,u,s,c=0,l=!1,f=!1,I=!0;if(typeof e!="function")throw new TypeError(UI);t=vl(t)||0,bt(r)&&(l=!!r.leading,f="maxWait"in r,a=f?HI(vl(r.maxWait)||0,t):a,I="trailing"in r?!!r.trailing:I);function g(S){var p=n,w=i;return n=i=void 0,c=S,o=e.apply(w,p),o}function D(S){return c=S,u=setTimeout(C,t),l?g(S):o}function b(S){var p=S-s,w=S-c,x=t-p;return f?zI(x,a-w):x}function _(S){var p=S-s,w=S-c;return s===void 0||p>=t||p<0||f&&w>=a}function C(){var S=ka();if(_(S))return h(S);u=setTimeout(C,b(S))}function h(S){return u=void 0,I&&n?g(S):(n=i=void 0,o)}function O(){u!==void 0&&clearTimeout(u),c=0,n=s=i=u=void 0}function E(){return u===void 0?o:h(ka())}function y(){var S=ka(),p=_(S);if(n=arguments,i=this,s=S,p){if(u===void 0)return D(s);if(f)return clearTimeout(u),u=setTimeout(C,t),g(s)}return u===void 0&&(u=setTimeout(C,t)),o}return y.cancel=O,y.flush=E,y}function Aa(e,t,r){const n=T.useRef(e);return n.current=e,T.useCallback(WI(function(){return n.current.apply(this,arguments)},t,r),[t,r==null?void 0:r.leading,r==null?void 0:r.trailing,r==null?void 0:r.maxWait])}const YI=e=>Array.isArray(e)?e:e?[e]:[],KI=e=>{const{selectedOptions:t,isDisabled:r=!1,creatable:n=!1,components:i,placeholder:a,showDropdown:o=!0,noOptionsMessageText:u="None"}=e,c={...e,styles:{option:l=>({...l,color:"#000"}),container:(l,f)=>({...l,zIndex:f.isFocused?10:l.zIndex}),multiValueRemove:(l,f)=>({...l,color:f.isFocused?l.color:"#333333"})},defaultOptions:!0,isClearable:!0,value:t??null,className:ot("react-select",e.className),classNamePrefix:"react-select",noOptionsMessage:()=>u,placeholder:r?"":a,components:{...i,IndicatorSeparator:()=>null,...(!o||r)&&{DropdownIndicator:()=>null},...r&&{MultiValueRemove:()=>null}}};return n?v.jsx(MI,{...c,isDisabled:r}):v.jsx(xI,{...c})},QI=e=>{const{values:t,isMulti:r,onSelect:n,creatable:i=!1,isValidNewOption:a,getNamedObject:o,loadOptions:u}=e,[s,c]=T.useState(!1),l=Nd(),f=T.useMemo(()=>{if(r&&t)return t.map(h=>({object:h,value:h.id}));if(t!=null&&t.length)return{object:t[0],value:t[0].id}},[t,r]),I=h=>{const O=YI(h);n==null||n(O.map(E=>E.object))},g=i&&e.onCreate?async h=>{try{c(!0);const{value:O,item:E,message:y}=await e.onCreate(h),S={object:E,value:O};I(r?[...f??[],S]:S),c(!1),l.success(v.jsxs("span",{children:[y,": ",v.jsx("b",{children:h})]}))}catch(O){l.error(O)}}:void 0,D=i&&o?(h,O)=>({value:"",object:o("",O)}):void 0,b=i&&a?(h,O,E)=>a(h,E.map(y=>y.object)):void 0,C=Aa((h,O)=>{u(h).then(O)},100);return v.jsx(KI,{...e,loadOptions:C,isLoading:e.isLoading||s,onChange:I,selectedOptions:f,onCreateOption:g,getNewOptionData:D,isValidNewOption:b})};function Sl(e){return{value:e.id,object:e}}function JI(e){return ZI(e)!==e}function ZI(e){const t=T.useRef();return T.useEffect(()=>{t.current=e},[e]),t.current}const yl=e=>{const{error:t,message:r=v.jsx(Te.FormattedMessage,{id:"errors.header"})}=e;return v.jsx("div",{className:"ErrorMessage-container",children:v.jsxs(re.Alert,{variant:"danger",className:"ErrorMessage",children:[v.jsxs(re.Alert.Heading,{className:"ErrorMessage-header",children:[v.jsx(Ze,{icon:Se.faWarning}),r]}),v.jsx("div",{className:"ErrorMessage-content code",children:t})]})})},bl="LoadingIndicator",XI=`${bl}-message`,Il=Fe("LoadingIndicator",({message:e,inline:t=!1,small:r=!1,card:n=!1})=>{const a=Te.useIntl().formatMessage({id:"loading.generic"});return v.jsxs("div",{className:ot(bl,{inline:t,small:r,"card-based":n}),children:[v.jsx(re.Spinner,{animation:"border",role:"status",size:r?"sm":void 0,children:v.jsx("span",{className:"sr-only",children:a})}),e!==""&&v.jsx("h4",{className:XI,children:e??a})]})}),_l=Fe("HoverPopover",({enterDelay:e=200,leaveDelay:t=200,content:r,children:n,className:i,placement:a="top",popperConfig:o,onOpen:u,onClose:s,target:c})=>{const[l,f]=T.useState(!1),[I,g]=T.useState(null),D=T.useRef(),b=T.useRef(),_=T.useRef(`hover-popover-${Math.random().toString(36).slice(2)}`),C=T.useCallback(y=>{g(y)},[]),h=T.useCallback(()=>(c==null?void 0:c.current)??I,[c,I]),O=T.useCallback(()=>{window.clearTimeout(b.current),D.current=window.setTimeout(()=>{f(!0),u==null||u()},e)},[e,u]),E=T.useCallback(()=>{window.clearTimeout(D.current),b.current=window.setTimeout(()=>{f(!1),s==null||s()},t)},[t,s]);return T.useEffect(()=>()=>{window.clearTimeout(D.current),window.clearTimeout(b.current)},[]),v.jsxs(v.Fragment,{children:[v.jsx("div",{className:i,onMouseEnter:O,onMouseLeave:E,ref:C,children:n}),h()&&v.jsx(re.Overlay,{show:l,placement:a,target:h,container:document.body,popperConfig:o,children:v.jsx(re.Popover,{onMouseEnter:O,onMouseLeave:E,id:_.current,className:"hover-popover-content",children:r})})]})});Fe("WarningHoverPopover",({children:e,...t})=>v.jsx(_l,{...t,className:"warning-hover-popover",children:v.jsx(Ze,{icon:Se.faExclamationTriangle})}));function e_(e){return e.title?e.title:e.files&&e.files.length>0?ut.fileNameFromPath(e.files[0].path):e.folder?ut.fileNameFromPath(e.folder.path):""}function t_(e){return e.title?e.title:e.files&&e.files.length>0?ut.fileNameFromPath(e.files[0].path):""}function qr(e,t){t&&t.length>0&&e.push(...t)}const r_=(e,t,r)=>{if(!e.id)return"#";const n=new ne(Y.Scenes,void 0),i=new Rt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),n.criteria.push(i),qr(n.criteria,r),`/scenes?${n.makeQueryParameters()}`},n_=(e,t,r)=>{if(!e.id)return"#";const n=new ne(Y.Images,void 0),i=new Rt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),n.criteria.push(i),qr(n.criteria,r),`/images?${n.makeQueryParameters()}`},i_=(e,t,r)=>{if(!e.id)return"#";const n=new ne(Y.Galleries,void 0),i=new Rt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),n.criteria.push(i),qr(n.criteria,r),`/galleries?${n.makeQueryParameters()}`},a_=(e,t,r)=>{if(!e.id)return"#";const n=new ne(Y.Groups,void 0),i=new Rt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),n.criteria.push(i),qr(n.criteria,r),`/groups?${n.makeQueryParameters()}`},o_=e=>{if(!e.id)return"#";const t=new ne(Y.SceneMarkers,void 0),r=new Rt;return r.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t.criteria.push(r),`/scenes/markers?${t.makeQueryParameters()}`},s_=e=>{if(!e.id)return"#";const t=new ne(Y.Performers,void 0),r=new Ru;return r.value=`${e.country}`,t.criteria.push(r),`/performers?${t.makeQueryParameters()}`},u_=e=>{if(!e.id)return"#";const t=new ne(Y.Scenes,void 0),r=new Ut;return r.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/scenes?${t.makeQueryParameters()}`},c_=e=>{if(!e.id)return"#";const t=new ne(Y.Images,void 0),r=new Ut;return r.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/images?${t.makeQueryParameters()}`},l_=e=>{if(!e.id)return"#";const t=new ne(Y.Galleries,void 0),r=new Ut;return r.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/galleries?${t.makeQueryParameters()}`},d_=e=>{if(!e.id)return"#";const t=new ne(Y.Groups,void 0),r=new Ut;return r.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/groups?${t.makeQueryParameters()}`},f_=e=>{if(!e.id)return"#";const t=new ne(Y.Performers,void 0),r=new Ut;return r.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/performers?${t.makeQueryParameters()}`},p_=e=>{if(!e.id)return"#";const t=new ne(Y.Studios,void 0),r=new Ps;return r.value=[{id:e.id,label:e.name||`Studio ${e.id}`}],t.criteria.push(r),`/studios?${t.makeQueryParameters()}`},m_=e=>{if(!e.id)return"#";const t=new ne(Y.Scenes,void 0),r=new $r(Sn);return r.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/scenes?${t.makeQueryParameters()}`},g_=e=>`/tags/${e}`,h_=e=>{if(!e.id)return"#";const t=new ne(Y.Tags,void 0),r=new fn(ks);return r.value={items:[{id:e.id,label:e.name||`Tag ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/tags?${t.makeQueryParameters()}`},v_=e=>{if(!e.id)return"#";const t=new ne(Y.Tags,void 0),r=new fn(Ns);return r.value={items:[{id:e.id,label:e.name||`Tag ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/tags?${t.makeQueryParameters()}`};function Dt(e,t){const r=new ne(e,void 0),n=new fn(ct);return n.value={items:[{id:t.id,label:t.name||`Tag ${t.id}`}],excluded:[],depth:0},r.criteria.push(n),r.makeQueryParameters()}const S_=e=>`/scenes?${Dt(Y.Scenes,e)}`,y_=e=>`/performers?${Dt(Y.Performers,e)}`,b_=e=>`/studios?${Dt(Y.Studios,e)}`,I_=e=>`/scenes/markers?${Dt(Y.SceneMarkers,e)}`,__=e=>`/galleries?${Dt(Y.Galleries,e)}`,O_=e=>`/images?${Dt(Y.Images,e)}`,C_=e=>`/groups?${Dt(Y.Groups,e)}`,D_=e=>!e.id||!e.scene?"#":`/scenes/${e.scene.id}?t=${e.seconds}`,E_=e=>{if(!e)return"#";const t=new ne(Y.Scenes,void 0),r=new ea;return r.value={value:e},t.criteria.push(r),`/scenes?${t.makeQueryParameters()}`},w_=e=>{if(!e)return"#";const t=new ne(Y.Images,void 0),r=new ea;return r.value={value:e},t.criteria.push(r),`/images?${t.makeQueryParameters()}`},T_=(e,t)=>{if(!e.id)return"#";const r=new ne(Y.Images,void 0),n=new Eu;return n.value=[{id:e.id,label:e_(e)}],r.criteria.push(n),qr(r.criteria,t),`/images?${r.makeQueryParameters()}`};function ei(e,t){const r=new He(e);return r.modifier=m.Equals,r.value=t,r}const it={makePerformerScenesUrl:r_,makePerformerImagesUrl:n_,makePerformerGalleriesUrl:i_,makePerformerGroupsUrl:a_,makePerformerSceneMarkersUrl:o_,makePerformersCountryUrl:s_,makeStudioScenesUrl:u_,makeStudioImagesUrl:c_,makeStudioGalleriesUrl:l_,makeStudioGroupsUrl:d_,makeStudioPerformersUrl:f_,makeTagUrl:g_,makeGroupUrl:e=>`/groups/${e}`,makeParentTagsUrl:h_,makeChildTagsUrl:v_,makeTagSceneMarkersUrl:I_,makeTagScenesUrl:S_,makeTagPerformersUrl:y_,makeTagStudiosUrl:b_,makeTagGalleriesUrl:__,makeTagImagesUrl:O_,makeTagGroupsUrl:C_,makeScenesPHashMatchUrl:E_,makeSceneMarkerUrl:D_,makeImagesPHashMatchUrl:w_,makeGroupScenesUrl:m_,makeChildStudiosUrl:p_,makeGalleryImagesUrl:T_,makeDirectorScenesUrl:e=>{if(e.length===0)return"#";const t=new ne(Y.Scenes,void 0);return t.criteria.push(ei(te("director"),e)),`/scenes?${t.makeQueryParameters()}`},makePhotographerGalleriesUrl:e=>{if(e.length===0)return"#";const t=new ne(Y.Galleries,void 0);return t.criteria.push(ei(te("photographer"),e)),`/galleries?${t.makeQueryParameters()}`},makePhotographerImagesUrl:e=>{if(e.length===0)return"#";const t=new ne(Y.Images,void 0);return t.criteria.push(ei(te("photographer"),e)),`/images?${t.makeQueryParameters()}`},makeDirectorGroupsUrl:e=>{if(e.length===0)return"#";const t=new ne(Y.Groups,void 0);return t.criteria.push(ei(te("director"),e)),`/groups?${t.makeQueryParameters()}`},makeContainingGroupsUrl:e=>{if(!e.id)return"#";const t=new ne(Y.Groups,void 0),r=new $r(Mu);return r.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/groups?${t.makeQueryParameters()}`},makeSubGroupsUrl:e=>{if(!e.id)return"#";const t=new ne(Y.Groups,void 0),r=new $r(Pu);return r.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/groups?${t.makeQueryParameters()}`},makeSceneMarkersSceneUrl:e=>{if(!e.id)return"#";const t=new ne(Y.SceneMarkers,void 0),r=new xs;return r.value=[{id:e.id,label:t_(e)}],t.criteria.push(r),`/scenes/markers?${t.makeQueryParameters()}`}},La="TruncatedText",x_=`${La}-tooltip`,Ol=Fe("TruncatedText",({text:e,className:t,lineCount:r=1,placement:n="bottom",delay:i=1e3})=>{const[a,o]=T.useState(!1),u=T.useRef(null),s=Aa(()=>o(!0),i);if(!e)return null;const c=I=>{(I.offsetWidth<I.scrollWidth||I.offsetHeight+10<I.scrollHeight)&&s()},l=()=>{s.cancel(),o(!1)},f=v.jsx(re.Overlay,{target:u.current,show:a,placement:n,children:v.jsx(re.Tooltip,{id:La,className:x_,children:e})});return v.jsxs("div",{className:ot(La,t),style:{WebkitLineClamp:r},ref:u,onMouseEnter:I=>c(I.currentTarget),onFocus:I=>c(I.currentTarget),onMouseLeave:l,onBlur:l,children:[e,f]})}),$_=()=>window.matchMedia("only screen and (max-width: 576px)").matches,F_=()=>window.matchMedia("(pointer: coarse)").matches;function P_(e){return window.matchMedia(e).matches}const M_={isMobile:$_,isTouch:F_,matchesMediaQuery:P_};var N_={exports:{}};(function(e){(function(t,r,n){if(!t)return;for(var i={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},a={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},o={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},u={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},s,c=1;c<20;++c)i[111+c]="f"+c;for(c=0;c<=9;++c)i[c+96]=c.toString();function l(p,w,x){if(p.addEventListener){p.addEventListener(w,x,!1);return}p.attachEvent("on"+w,x)}function f(p){if(p.type=="keypress"){var w=String.fromCharCode(p.which);return p.shiftKey||(w=w.toLowerCase()),w}return i[p.which]?i[p.which]:a[p.which]?a[p.which]:String.fromCharCode(p.which).toLowerCase()}function I(p,w){return p.sort().join(",")===w.sort().join(",")}function g(p){var w=[];return p.shiftKey&&w.push("shift"),p.altKey&&w.push("alt"),p.ctrlKey&&w.push("ctrl"),p.metaKey&&w.push("meta"),w}function D(p){if(p.preventDefault){p.preventDefault();return}p.returnValue=!1}function b(p){if(p.stopPropagation){p.stopPropagation();return}p.cancelBubble=!0}function _(p){return p=="shift"||p=="ctrl"||p=="alt"||p=="meta"}function C(){if(!s){s={};for(var p in i)p>95&&p<112||i.hasOwnProperty(p)&&(s[i[p]]=p)}return s}function h(p,w,x){return x||(x=C()[p]?"keydown":"keypress"),x=="keypress"&&w.length&&(x="keydown"),x}function O(p){return p==="+"?["+"]:(p=p.replace(/\+{2}/g,"+plus"),p.split("+"))}function E(p,w){var x,$,j,H=[];for(x=O(p),j=0;j<x.length;++j)$=x[j],u[$]&&($=u[$]),w&&w!="keypress"&&o[$]&&($=o[$],H.push("shift")),_($)&&H.push($);return w=h($,H,w),{key:$,modifiers:H,action:w}}function y(p,w){return p===null||p===r?!1:p===w?!0:y(p.parentNode,w)}function S(p){var w=this;if(p=p||r,!(w instanceof S))return new S(p);w.target=p,w._callbacks={},w._directMap={};var x={},$,j=!1,H=!1,ie=!1;function ee(P){P=P||{};var A=!1,U;for(U in x){if(P[U]){A=!0;continue}x[U]=0}A||(ie=!1)}function F(P,A,U,G,W,J){var V,se,Pe=[],Re=U.type;if(!w._callbacks[P])return[];for(Re=="keyup"&&_(P)&&(A=[P]),V=0;V<w._callbacks[P].length;++V)if(se=w._callbacks[P][V],!(!G&&se.seq&&x[se.seq]!=se.level)&&Re==se.action&&(Re=="keypress"&&!U.metaKey&&!U.ctrlKey||I(A,se.modifiers))){var nr=!G&&se.combo==W,xt=G&&se.seq==G&&se.level==J;(nr||xt)&&w._callbacks[P].splice(V,1),Pe.push(se)}return Pe}function k(P,A,U,G){w.stopCallback(A,A.target||A.srcElement,U,G)||P(A,U)===!1&&(D(A),b(A))}w._handleKey=function(P,A,U){var G=F(P,A,U),W,J={},V=0,se=!1;for(W=0;W<G.length;++W)G[W].seq&&(V=Math.max(V,G[W].level));for(W=0;W<G.length;++W){if(G[W].seq){if(G[W].level!=V)continue;se=!0,J[G[W].seq]=1,k(G[W].callback,U,G[W].combo,G[W].seq);continue}se||k(G[W].callback,U,G[W].combo)}var Pe=U.type=="keypress"&&H;U.type==ie&&!_(P)&&!Pe&&ee(J),H=se&&U.type=="keydown"};function N(P){typeof P.which!="number"&&(P.which=P.keyCode);var A=f(P);if(A){if(P.type=="keyup"&&j===A){j=!1;return}w.handleKey(A,g(P),P)}}function B(){clearTimeout($),$=setTimeout(ee,1e3)}function X(P,A,U,G){x[P]=0;function W(Re){return function(){ie=Re,++x[P],B()}}function J(Re){k(U,Re,P),G!=="keyup"&&(j=f(Re)),setTimeout(ee,10)}for(var V=0;V<A.length;++V){var se=V+1===A.length,Pe=se?J:W(G||E(A[V+1]).action);le(A[V],Pe,G,P,V)}}function le(P,A,U,G,W){w._directMap[P+":"+U]=A,P=P.replace(/\s+/g," ");var J=P.split(" "),V;if(J.length>1){X(P,J,A,U);return}V=E(P,U),w._callbacks[V.key]=w._callbacks[V.key]||[],F(V.key,V.modifiers,{type:V.action},G,P,W),w._callbacks[V.key][G?"unshift":"push"]({callback:A,modifiers:V.modifiers,action:V.action,seq:G,level:W,combo:P})}w._bindMultiple=function(P,A,U){for(var G=0;G<P.length;++G)le(P[G],A,U)},l(p,"keypress",N),l(p,"keydown",N),l(p,"keyup",N)}S.prototype.bind=function(p,w,x){var $=this;return p=p instanceof Array?p:[p],$._bindMultiple.call($,p,w,x),$},S.prototype.unbind=function(p,w){var x=this;return x.bind.call(x,p,function(){},w)},S.prototype.trigger=function(p,w){var x=this;return x._directMap[p+":"+w]&&x._directMap[p+":"+w]({},p),x},S.prototype.reset=function(){var p=this;return p._callbacks={},p._directMap={},p},S.prototype.stopCallback=function(p,w){var x=this;if((" "+w.className+" ").indexOf(" mousetrap ")>-1||y(w,x.target))return!1;if("composedPath"in p&&typeof p.composedPath=="function"){var $=p.composedPath()[0];$!==p.target&&(w=$)}return w.tagName=="INPUT"||w.tagName=="SELECT"||w.tagName=="TEXTAREA"||w.isContentEditable},S.prototype.handleKey=function(){var p=this;return p._handleKey.apply(p,arguments)},S.addKeycodes=function(p){for(var w in p)p.hasOwnProperty(w)&&(i[w]=p[w]);s=null},S.init=function(){var p=S(r);for(var w in p)w.charAt(0)!=="_"&&(S[w]=function(x){return function(){return p[x].apply(p,arguments)}}(w))},S.init(),t.Mousetrap=S,e.exports&&(e.exports=S)})(typeof window<"u"?window:null,typeof window<"u"?document:null)})(N_),T.createContext(null);const k_=T.createContext(null),A_={selectable:!1,selectedIds:new Set,getSelected:()=>[],onSelectChange:()=>{},onSelectAll:()=>{},onSelectNone:()=>{},onInvertSelection:()=>{},items:[],hasSelection:!1,selectedItems:[]};function L_(){const e=T.useContext(k_);return e===null?A_:e}T.createContext(null);var Cl=(e=>(e[e.BEFORE=0]="BEFORE",e[e.AFTER=1]="AFTER",e))(Cl||{});function j_(e){const{selectedIds:t}=L_(),[r,n]=T.useState(!1),[i,a]=T.useState(!1),[o,u]=T.useState(),s=e.onSelectedChanged&&e.selecting,c=!!e.objectId&&e.onMove&&r,l=s||c;function f(h){if(!l){h.preventDefault();return}if(!r&&e.selecting)h.dataTransfer.setData("text/plain",""),h.dataTransfer.effectAllowed="copy",h.stopPropagation();else if(r&&e.objectId){if(t.size>1&&t.has(e.objectId)){const O=Array.from(t.values()).join(",");h.dataTransfer.setData("text/plain",O)}else a(!0),h.dataTransfer.setData("text/plain",e.objectId);h.dataTransfer.effectAllowed="move",h.stopPropagation()}}function I(h){const O=h.nativeEvent.offsetX<h.currentTarget.clientWidth/2;O&&o!==0?u(0):!O&&o!==1&&u(1)}function g(h){const O=h,E=!1;if(O.dataTransfer.effectAllowed==="copy"){if(!e.onSelectedChanged)return;e.selecting&&!e.selected&&e.onSelectedChanged(!0,E),O.dataTransfer.dropEffect="copy",O.preventDefault()}else O.dataTransfer.effectAllowed==="move"&&!i?(I(h),O.dataTransfer.dropEffect="move",O.preventDefault()):O.dataTransfer.dropEffect="none"}function D(h){h.currentTarget.contains(h.relatedTarget)||u(void 0)}function b(h){h.dataTransfer.effectAllowed!=="move"||i||(I(h),h.preventDefault())}function _(){u(void 0),a(!1)}function C(h){const O=h;if(O.dataTransfer.effectAllowed==="copy"||!e.onMove||!e.objectId)return;const E=O.dataTransfer.getData("text/plain").split(","),y=e.objectId,S=o===1;e.onMove(E,y,S),_()}return{inHandle:r,setInHandle:n,moveTarget:o,dragProps:{draggable:l||void 0,onDragStart:f,onDragEnter:g,onDragLeave:D,onDragOver:b,onDragEnd:_,onDrop:C}}}const q_=e=>v.jsx("a",{target:"_blank",rel:"noopener noreferrer",...e}),V_=({selected:e=!1,onSelectedChanged:t})=>{let r=!1;return v.jsx(re.Form.Control,{type:"checkbox",className:"card-check mousetrap",checked:e,onChange:()=>t(!e,r),onClick:n=>{r=n.shiftKey,n.stopPropagation()}})},B_=({setInHandle:e})=>{function t(){e(!0)}function r(){e(!1)}return v.jsx("span",{onMouseEnter:t,onMouseLeave:r,children:v.jsx(Ze,{className:"card-drag-handle",icon:Se.faGripLines})})},R_=({children:e})=>v.jsx("div",{className:"card-controls",children:e}),G_=({dragSide:e})=>e===void 0?null:v.jsx("div",{className:`move-target move-target-${e===Cl.BEFORE?"before":"after"}`});function Dl(e){const{url:t,linkClassName:r,onClick:n,children:i}=e;return/^https?:\/\//i.test(t)?v.jsx(q_,{href:t,className:r,onClick:n,children:i}):v.jsx($t.Link,{to:t,className:r,onClick:n,children:i})}const U_=Fe("GridCard",e=>{const{setInHandle:t,moveTarget:r,dragProps:n}=j_({selecting:e.selecting||!1,selected:e.selected||!1,onSelectedChanged:e.onSelectedChanged,objectId:e.objectId,onMove:e.onMove});function i(u){const{shiftKey:s}=u;e.onSelectedChanged&&e.selecting&&(e.onSelectedChanged(!e.selected,s),u.preventDefault(),u.stopPropagation())}function a(){if(e.interactiveHeatmap)return v.jsx("img",{loading:"lazy",src:e.interactiveHeatmap,alt:"interactive heatmap",className:"interactive-heatmap"})}function o(){if(e.resumeTime&&e.duration&&e.duration>e.resumeTime){const u=100/e.duration*e.resumeTime,s=u+"%";return v.jsx("div",{title:Math.round(u)+"%",className:"progress-bar",children:v.jsx("div",{style:{width:s},className:"progress-indicator"})})}}return v.jsxs(re.Card,{className:ot(e.className,"grid-card"),onClick:i,...n,style:e.width&&!M_.isMobile()?{width:`${e.width}px`}:{},children:[r!==void 0&&v.jsx(G_,{dragSide:r}),v.jsxs(R_,{children:[e.onSelectedChanged&&v.jsx(V_,{selected:e.selected,onSelectedChanged:e.onSelectedChanged}),!!e.objectId&&e.onMove&&v.jsx(B_,{setInHandle:t})]}),v.jsxs("div",{className:ot(e.thumbnailSectionClassName,"thumbnail-section"),children:[v.jsx(Dl,{url:e.url,linkClassName:e.linkClassName,onClick:i,children:e.image}),e.overlays,o()]}),a(),v.jsxs("div",{className:"card-section",children:[v.jsx(Dl,{url:e.url,onClick:i,children:v.jsxs("h5",{className:"card-section-title flex-aligned",children:[e.pretitleIcon,v.jsx(Ol,{text:e.title,lineCount:2})]})}),e.details]}),e.popovers]})}),H_=({count:e})=>{const{configuration:t}=ui();if(!((t==null?void 0:t.ui.abbreviateCounters)??!1))return v.jsx("span",{children:e});const n=ut.abbreviateCounter(e);return v.jsxs("span",{children:[v.jsx(Te.FormattedNumber,{value:n.size,maximumFractionDigits:n.digits}),n.unit]})},Et=({className:e,url:t,type:r,count:n,showZero:i=!0})=>{const a=Te.useIntl();if(!i&&n===0)return null;function o(){switch(r){case"scene":return Se.faPlayCircle;case"image":return Se.faImage;case"gallery":return Se.faImages;case"marker":return Se.faMapMarkerAlt;case"group":case"sub_group":return Se.faFilm;case"performer":return Se.faUser;case"studio":return Se.faVideo}}function u(){switch(r){case"scene":return{one:"scene",other:"scenes"};case"image":return{one:"image",other:"images"};case"gallery":return{one:"gallery",other:"galleries"};case"marker":return{one:"marker",other:"markers"};case"group":return{one:"group",other:"groups"};case"sub_group":return{one:"sub_group",other:"sub_groups"};case"performer":return{one:"performer",other:"performers"};case"studio":return{one:"studio",other:"studios"}}}function s(){const c=a.formatPlural(n),l=u(),f=a.formatMessage({id:l[c]||l.other});return`${n} ${f}`}return v.jsx(re.OverlayTrigger,{overlay:v.jsx(re.Tooltip,{id:`${r}-count-tooltip`,children:s()}),placement:"bottom",children:v.jsx($t.Link,{className:e,to:t,children:v.jsxs(re.Button,{className:"minimal",children:[v.jsx(Ze,{icon:o()}),v.jsx(H_,{count:n})]})})})},z_=Fe("TagCard.Popovers",({tag:e})=>v.jsxs(v.Fragment,{children:[v.jsx("hr",{}),v.jsxs(re.ButtonGroup,{className:"card-popovers",children:[v.jsx(Et,{className:"scene-count",type:"scene",count:e.scene_count,url:it.makeTagScenesUrl(e),showZero:!1}),v.jsx(Et,{className:"image-count",type:"image",count:e.image_count,url:it.makeTagImagesUrl(e),showZero:!1}),v.jsx(Et,{className:"gallery-count",type:"gallery",count:e.gallery_count,url:it.makeTagGalleriesUrl(e),showZero:!1}),v.jsx(Et,{className:"group-count",type:"group",count:e.group_count,url:it.makeTagGroupsUrl(e),showZero:!1}),v.jsx(Et,{className:"marker-count",type:"marker",count:e.scene_marker_count,url:it.makeTagSceneMarkersUrl(e),showZero:!1}),v.jsx(Et,{className:"performer-count",type:"performer",count:e.performer_count,url:it.makeTagPerformersUrl(e),showZero:!1}),v.jsx(Et,{className:"studio-count",type:"studio",count:e.studio_count,url:it.makeTagStudiosUrl(e),showZero:!1})]})]})),W_=Fe("TagCard.Overlays",({tag:e})=>{const[t]=Ep();function r(){return v.jsx($t.Link,{to:"",onClick:i=>i.preventDefault(),children:v.jsx(re.Button,{className:ot("minimal","mousetrap","favorite-button",e.favorite?"favorite":"not-favorite"),onClick:()=>n(!e.favorite),children:v.jsx(Ze,{icon:Se.faHeart,size:"2x"})})})}function n(i){e.id&&t({variables:{input:{id:e.id,favorite:i}}})}return v.jsx(v.Fragment,{children:r()})}),Y_=Fe("TagCard.Details",({tag:e})=>{function t(){if(e.description)return v.jsx(Ol,{className:"tag-description",text:e.description,lineCount:3})}function r(){if(e.parents.length===1){const i=e.parents[0];return v.jsx("div",{className:"tag-parent-tags",children:v.jsx(Te.FormattedMessage,{id:"sub_tag_of",values:{parent:v.jsx($t.Link,{to:`/tags/${i.id}`,children:i.name})}})})}if(e.parents.length>1)return v.jsx("div",{className:"tag-parent-tags",children:v.jsx(Te.FormattedMessage,{id:"sub_tag_of",values:{parent:v.jsxs($t.Link,{to:it.makeParentTagsUrl(e),children:[e.parents.length," ",v.jsx(Te.FormattedMessage,{id:"countables.tags",values:{count:e.parents.length}})]})}})})}function n(){if(e.children.length>0)return v.jsx("div",{className:"tag-sub-tags",children:v.jsx(Te.FormattedMessage,{id:"parent_of",values:{children:v.jsxs($t.Link,{to:it.makeChildTagsUrl(e),children:[e.children.length," ",v.jsx(Te.FormattedMessage,{id:"countables.tags",values:{count:e.children.length}})]})}})})}return v.jsxs(v.Fragment,{children:[t(),r(),n()]})}),K_=Fe("TagCard.Image",({tag:e})=>v.jsx("img",{loading:"lazy",className:"tag-card-image",alt:e.name,src:e.image_path??""})),Q_=Fe("TagCard.Title",({tag:e})=>v.jsx(v.Fragment,{children:e.name??""})),J_=Fe("TagCard",e=>{const{tag:t,cardWidth:r,zoomIndex:n,selecting:i,selected:a,onSelectedChanged:o}=e;return v.jsx(U_,{className:`tag-card zoom-${n}`,url:`/tags/${t.id}`,width:r,title:v.jsx(Q_,{...e}),linkClassName:"tag-card-header",image:v.jsx(K_,{...e}),details:v.jsx(Y_,{...e}),overlays:v.jsx(W_,{...e}),popovers:v.jsx(z_,{...e}),selected:a,selecting:i,onSelectedChanged:o})}),Z_=({id:e})=>{const{data:t,loading:r,error:n}=Ip(e);if(r)return v.jsx("div",{className:"tag-popover-card-placeholder",children:v.jsx(Il,{card:!0,message:""})});if(n)return v.jsx(yl,{error:n.message});if(!(t!=null&&t.findTag))return v.jsx(yl,{error:`No tag found with id ${e}.`});const i=t.findTag;return v.jsx("div",{className:"tag-popover-card",children:v.jsx(J_,{tag:i,zoomIndex:0})})},El=({id:e,hide:t,children:r,placement:n="top",target:i})=>{const{configuration:a}=ui(),o=(a==null?void 0:a.ui.showTagCardOnHover)??!0;return t||!o?v.jsx(v.Fragment,{children:r}):v.jsx(_l,{target:i,placement:n,enterDelay:500,leaveDelay:100,content:v.jsx(Z_,{id:e}),children:r})};function X_(e,t,r,n){if(!e)return t;e=e.toLowerCase();const i={};function a(h,O){i[h.id]={...i[h.id],...O}}function o(h){var y,S;const O=(y=i[h.id])==null?void 0:y.aliases;if(O!==void 0)return O;if(!n)return[];const E=((S=n(h))==null?void 0:S.map(p=>p.trim().toLowerCase()))??[];return a(h,{aliases:E}),E}function u(h){var S;const O=(S=i[h.id])==null?void 0:S.aliasMatch;if(O!==void 0)return O;const y=o(h).some(p=>p===e);return a(h,{aliasMatch:y}),y}function s(h){var S;const O=(S=i[h.id])==null?void 0:S.aliasStartsWith;if(O!==void 0)return O;const y=o(h).some(p=>p.startsWith(e));return a(h,{aliasStartsWith:y}),y}function c(h){return h.trim().replace(/\s\s+/g," ").toLowerCase().split(" ")}function l(h){return c(r(h))}function f(h){return o(h).flatMap(E=>c(E))}function I(h){var S;const O=(S=i[h.id])==null?void 0:S.wordIndex;if(O!==void 0)return O;const y=l(h).indexOf(e);return a(h,{wordIndex:y}),y}function g(h){var S;const O=(S=i[h.id])==null?void 0:S.aliasWordIndex;if(O!==void 0)return O;const y=f(h).indexOf(e);return a(h,{aliasWordIndex:y}),y}function D(h){var S;const O=(S=i[h.id])==null?void 0:S.wordStartsWithIndex;if(O!==void 0)return O;const y=l(h).findIndex(p=>p.startsWith(e));return a(h,{wordStartsWithIndex:y}),y}function b(h){var S;const O=(S=i[h.id])==null?void 0:S.aliasWordStartsWithIndex;if(O!==void 0)return O;const y=f(h).findIndex(p=>p.startsWith(e));return a(h,{aliasWordStartsWithIndex:y}),y}function _(h){var S;const O=(S=i[h.id])==null?void 0:S.aliasIncludesIndex;if(O!==void 0)return O;const y=o(h).findIndex(p=>p.includes(e));return a(h,{aliasIncludesIndex:y}),y}function C(h,O){const E=r(h).trim().toLowerCase(),y=r(O).trim().toLowerCase(),S=u(h),p=u(O);if(E===e&&y!==e)return-1;if(E!==e&&y===e)return 1;if(S&&!p)return-1;if(!S&&p)return 1;if(E.startsWith(e)&&!y.startsWith(e))return-1;if(!E.startsWith(e)&&y.startsWith(e))return 1;const w=s(h),x=s(O);if(w&&!x)return-1;if(!w&&x)return 1;if(!e.includes(" ")){{const ee=I(h),F=I(O);if(ee!==-1&&F===-1)return-1;if(ee===-1&&F!==-1)return 1;if(ee!==-1&&F!==-1)return ee===F?E.localeCompare(y):ee-F;const k=g(h),N=g(O);if(k!==-1&&N===-1)return-1;if(k===-1&&N!==-1)return 1;if(k!==-1&&N!==-1)return k===N?E.localeCompare(y):k-N}{const ee=D(h),F=D(O);if(ee!==-1&&F===-1)return-1;if(ee===-1&&F!==-1)return 1;if(ee!==-1&&F!==-1)return ee===F?E.localeCompare(y):ee-F;const k=b(h),N=b(O);if(k!==-1&&N===-1)return-1;if(k===-1&&N!==-1)return 1;if(k!==-1&&N!==-1)return k===N?E.localeCompare(y):k-N}}const $=E.indexOf(e),j=y.indexOf(e);if($!==-1&&j===-1)return-1;if($===-1&&j!==-1)return 1;if($!==-1&&j!==-1)return $===j?E.localeCompare(y):$-j;const H=_(h),ie=_(O);return H!==-1&&ie===-1?-1:H===-1&&ie!==-1?1:H!==-1&&ie!==-1?H===ie?E.localeCompare(y):H-ie:E.localeCompare(y)}return t.slice().sort(C)}const eO=/^[0-9a-f]{8}-[0-9a-f]{4}-[47][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function tO(e){return eO.test(e.trim())}function rO(e,t){const r=e.makeCriterion("stash_id_endpoint");r.modifier=m.Equals,r.value={endpoint:"",stashID:t.trim()},e.criteria=[r]}function nO(e,t){return X_(e,t,r=>r.name,r=>r.aliases)}const iO=vo("TagSelect.sort",nO),aO=Fe("TagSelect",e=>{const[t]=Dp(),{configuration:r}=ui(),n=Te.useIntl(),i=(r==null?void 0:r.ui.maxOptionsShown)??Tp,a=!(r!=null&&r.interface.disableDropdownCreate.tag),o=T.useMemo(()=>e.excludeIds??[],[e.excludeIds]);function u(b){return!o.includes(b.id.toString())}async function s(b){const _=new ne(Y.Tags);if(_.currentPage=1,_.itemsPerPage=i,_.sortBy="name",_.sortDirection=Ae.Asc,tO(b)){rO(_,b);const E=(await ss(_)).data.findTags.tags.filter(u);if(E.length>0)return E.map(Sl);_.criteria=[]}_.searchTerm=b;const h=(await ss(_)).data.findTags.tags.filter(u);return iO(b,h).map(Sl)}const c=b=>{var y;let _=b;const{object:C}=b.data,{name:h}=C,{inputValue:O}=b.selectProps;let E="";return h.toLowerCase().includes(O.toLowerCase())||(E=(y=C.aliases)==null?void 0:y.find(S=>S.toLowerCase().includes(O.toLowerCase()))),_={...b,children:v.jsx(El,{id:C.id,placement:e.hoverPlacement??"right",children:v.jsxs("span",{className:"react-select-image-option",children:[v.jsx("span",{children:h}),E&&v.jsxs("span",{className:"alias",children:[" (",E,")"]})]})})},v.jsx(ri.components.Option,{..._})},l=b=>{let _=b;const{object:C}=b.data;return _={...b,children:v.jsx(El,{id:C.id,placement:e.hoverPlacementLabel??"top",children:v.jsx("span",{children:C.name})})},v.jsx(ri.components.MultiValueLabel,{..._})},f=b=>{let _=b;const{object:C}=b.data;return _={...b,children:v.jsx(v.Fragment,{children:C.name})},v.jsx(ri.components.SingleValue,{..._})},I=async b=>{const _=await t({variables:{input:{name:b}}});return{value:_.data.tagCreate.id,item:_.data.tagCreate,message:"Created tag"}},g=(b,_)=>({id:b,name:_,aliases:[],stash_ids:[]}),D=(b,_)=>!(!b||_.some(C=>{var h;return C.name.toLowerCase()===b.toLowerCase()||((h=C.aliases)==null?void 0:h.some(O=>O.toLowerCase()===b.toLowerCase()))}));return v.jsx(QI,{...e,className:ot("tag-select",{"tag-select-active":e.active},e.className),loadOptions:s,getNamedObject:g,isValidNewOption:D,components:{Option:c,MultiValueLabel:l,SingleValue:f},isMulti:e.isMulti??!1,creatable:e.creatable??a,onCreate:I,placeholder:e.noSelectionString??n.formatMessage({id:"actions.select_entity"},{entityType:n.formatMessage({id:e.isMulti?"tags":"tag"})}),closeMenuOnSelect:!e.isMulti})}),oO=Fe("TagIDSelect",e=>{const{ids:t,onSelect:r}=e,[n,i]=T.useState([]),a=JI(t);function o(u){i(u),r==null||r(u)}return T.useEffect(()=>{async function u(l){const f=await _p(l),{tags:I}=f.data.findTags;return I}if(!a)return;if(!t||(t==null?void 0:t.length)===0){i([]);return}if(n.filter(l=>t.includes(l.id.toString())).length===t.length)return;(async()=>{const f=[...await u(t)];f.sort((I,g)=>{const D=I.sort_name||I.name,b=g.sort_name||g.name;return D&&b?D.localeCompare(b):0}),i(f)})()},[t,a,n]),v.jsx(aO,{...e,values:n,onSelect:o})}),sO=(e,t)=>{const{data:r,loading:n,error:i}=wp(e),a=T.useRef(void 0);n||(a.current=r);const o=n?a.current:r,u=i&&t?[]:o==null?void 0:o.directory.directories,s=o==null?void 0:o.directory.parent;return{directories:u,parent:s,loading:n,error:i}},uO=Fe("FolderSelect",({currentDirectory:e,onChangeDirectory:t,defaultDirectories:r=[],appendButton:n,collapsible:i=!1,quotePath:a=!1,hideError:o=!1})=>{const u=Te.useIntl(),[s,c]=T.useState(!1),[l,f]=T.useState(e),I=a?ut.stripQuotes(l):l,{directories:g,parent:D,error:b,loading:_}=sO(I,o),C=(e?g:r)??r,h=Aa(f,250);function O(p){const w=a&&p.includes(" ")?ut.addQuotes(p):p;t(w),f(w)}function E(p){t(p),h(p)}function y(){r!=null&&r.includes(e)?O(""):D&&O(D)}const S=e&&D&&v.jsx("li",{className:"folder-list-parent folder-list-item",children:v.jsx(re.Button,{variant:"link",onClick:()=>y(),disabled:_,children:v.jsx("span",{children:v.jsx(Te.FormattedMessage,{id:"setup.folder.up_dir"})})})});return v.jsxs(v.Fragment,{children:[v.jsxs(re.InputGroup,{children:[v.jsx(re.Form.Control,{className:"btn-secondary",placeholder:u.formatMessage({id:"setup.folder.file_path"}),onChange:p=>{E(p.currentTarget.value)},value:e,spellCheck:!1}),n&&v.jsx(re.InputGroup.Append,{children:n}),i&&v.jsx(re.InputGroup.Append,{children:v.jsx(re.Button,{variant:"secondary",onClick:()=>c(!s),children:v.jsx(Ze,{icon:Se.faEllipsis})})}),(_||b)&&v.jsx(re.InputGroup.Append,{className:"align-self-center",children:_?v.jsx(Il,{inline:!0,small:!0,message:""}):!o&&v.jsx(Ze,{icon:Se.faTimes,color:"red",className:"ml-3"})})]}),!o&&b!==void 0&&v.jsxs("h5",{className:"mt-4 text-break",children:["Error: ",b.message]}),v.jsx(re.Collapse,{in:!i||s,children:v.jsxs("ul",{className:"folder-list",children:[S,C.map(p=>v.jsx("li",{className:"folder-list-item",children:v.jsx(re.Button,{variant:"link",onClick:()=>O(p),disabled:_,children:v.jsx("span",{children:p})})},p))]})})]})}),{PluginApi:wt}=window,{React:cO}=wt,{useState:Tt,useEffect:lO}=cO,dO=wt.libraries.Bootstrap,{Nav:fO,Button:wl,Form:Ve,Alert:pO,ProgressBar:mO,Spinner:gO}=dO,{NavLink:hO}=wt.libraries.ReactRouterDOM,{FontAwesomeIcon:vO}=wt.libraries.ReactFontAwesome,SO=wt.libraries.FontAwesomeSolid,yO="subtitleMarkers",Tl="/subtitle-markers",bO=1e3;function xl(e,t){return fetch("/graphql",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,variables:t})}).then(r=>r.json()).then(r=>{if(r.errors&&r.errors.length)throw new Error(r.errors.map(n=>n.message).join("; "));return r.data})}function IO(e,t){return xl(`mutation SubtitleMarkersRunTask($plugin_id: ID!, $description: String, $args_map: Map) {
      runPluginTask(plugin_id: $plugin_id, description: $description, args_map: $args_map)
    }`,{plugin_id:yO,description:t,args_map:e}).then(r=>r.runPluginTask)}function _O(e){return xl("query SubtitleMarkersFindJob($id: ID!) { findJob(input: { id: $id }) { status progress error } }",{id:e}).then(t=>t.findJob)}const ja=["READY","RUNNING","STOPPING"],OO={READY:"Starting…",RUNNING:"Searching…",STOPPING:"Stopping…",FINISHED:"Done.",CANCELLED:"Cancelled.",FAILED:"Failed."};function CO({libraryPaths:e}){const[t,r]=Tt(""),[n,i]=Tt(""),[a,o]=Tt(""),[u,s]=Tt(""),[c,l]=Tt(!1),[f,I]=Tt(null),[g,D]=Tt(null),b=c||g!==null&&ja.includes(g.status),_=!!t.trim()&&!!n.trim()&&!!a&&!b;lO(()=>{if(!f)return;let O=!1,E;const y=()=>{_O(f).then(S=>{O||(D(S),S&&ja.includes(S.status)&&(E=setTimeout(y,bO)))}).catch(S=>{O||D({status:"FAILED",progress:null,error:String(S&&S.message?S.message:S)})})};return y(),()=>{O=!0,clearTimeout(E)}},[f]);function C(){const O=n.trim();l(!0),D(null),IO({path:t.trim(),search:O,tagId:a,title:u.trim()},`Searching subtitles for "${O}"`).then(E=>{l(!1),I(E)}).catch(E=>{l(!1),D({status:"FAILED",progress:null,error:String(E&&E.message?E.message:E)})})}function h(){if(!g)return null;const O=Math.round((g.progress||0)*100);return v.jsxs("div",{className:"subtitle-markers-status mt-3",children:[ja.includes(g.status)&&v.jsx(mO,{now:O,label:`${O}%`,animated:!0}),v.jsxs("p",{className:g.status==="FAILED"?"text-danger":"text-muted",children:[OO[g.status],g.status==="FINISHED"&&" Marker preview generation has been queued for anything created. See Settings → Logs for how many markers were created."]}),g.error?v.jsx(pO,{variant:"danger",children:g.error}):null]})}return v.jsxs("div",{className:"subtitle-markers-page container-fluid",children:[v.jsx("h3",{children:"Subtitle Markers"}),v.jsx("p",{className:"text-muted",children:"Searches every .srt file under a folder (and its subfolders) for a phrase, and creates a scene marker wherever it's found - matched to the video file next to each subtitle, the same way Stash itself associates captions. Marker preview generation is queued automatically afterwards for anything created."}),v.jsxs(Ve.Group,{className:"subtitle-markers-folder",children:[v.jsx(Ve.Label,{children:"Folder"}),v.jsx(uO,{currentDirectory:t,onChangeDirectory:r,defaultDirectories:e}),v.jsx(Ve.Text,{className:"text-muted",children:"Searched recursively, including subfolders."})]}),v.jsxs(Ve.Group,{children:[v.jsx(Ve.Label,{children:"Search text"}),v.jsx(Ve.Control,{type:"text",value:n,placeholder:"Text to find in subtitle lines",onChange:O=>i(O.target.value),disabled:b}),v.jsx(Ve.Text,{className:"text-muted",children:"Case-insensitive, matched as plain text."})]}),v.jsxs(Ve.Group,{children:[v.jsx(Ve.Label,{children:"Tag"}),v.jsx(oO,{ids:a?[a]:[],isDisabled:b,onSelect:O=>{var E;return o(((E=O[0])==null?void 0:E.id)||"")}})]}),v.jsxs(Ve.Group,{children:[v.jsx(Ve.Label,{children:"Marker title"}),v.jsx(Ve.Control,{type:"text",value:u,placeholder:n||"Marker title",onChange:O=>s(O.target.value),disabled:b}),v.jsx(Ve.Text,{className:"text-muted",children:"Defaults to the search text if left blank."})]}),v.jsx(wl,{onClick:C,disabled:!_,children:b?"Running…":"Search & Create Markers"}),h()]})}function DO(){const{data:e}=gd();if(!(e!=null&&e.configuration))return v.jsx(gO,{animation:"border",className:"mt-3"});const t=e.configuration.general.stashes.map(r=>r.path);return v.jsx(Md,{children:v.jsx(Id,{configuration:e.configuration,children:v.jsx(CO,{libraryPaths:t})})})}wt.register.route(Tl,DO),wt.patch.before("MainNavBar.MenuItems",e=>{try{const t=v.jsx(fO.Link,{as:"div",className:"col-4 col-sm-3 col-md-2 col-lg-auto",children:v.jsx(hO,{exact:!0,to:Tl,activeClassName:"active",children:v.jsxs(wl,{className:"minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center",children:[v.jsx(vO,{icon:SO.faClosedCaptioning,className:"fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0"}),v.jsx("span",{children:"Marker"})]})})},"subtitle-markers");return[{...e,children:[...e.children||[],t]}]}catch(t){return console.error("[SubtitleMarkers] Failed to patch nav bar:",t),[e]}})})(PluginApi.React,PluginApi.libraries.Apollo,PluginApi.libraries.FontAwesomeSolid,PluginApi.libraries.Bootstrap,PluginApi.libraries.Intl,PluginApi.libraries.ReactFontAwesome,PluginApi.libraries.ReactSelect,PluginApi.ReactDOM,PluginApi.libraries.ReactRouterDOM);
