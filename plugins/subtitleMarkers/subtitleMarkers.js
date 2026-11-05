var $O=Object.defineProperty;var FO=(x,d,Se)=>d in x?$O(x,d,{enumerable:!0,configurable:!0,writable:!0,value:Se}):x[d]=Se;var Z=(x,d,Se)=>FO(x,typeof d!="symbol"?d+"":d,Se);(function(x,d,Se,ne,Te,Nl,ri,kl,$t){"use strict";var Ml;function Ra(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const r in e)if(r!=="default"){const n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>e[r]})}}return t.default=e,Object.freeze(t)}const Q=Ra(x),ar=Ra(d);function Ga(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ua={exports:{}},or={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Ha=Object.getOwnPropertySymbols,Al=Object.prototype.hasOwnProperty,Ll=Object.prototype.propertyIsEnumerable;function jl(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function ql(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(n.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}ql();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vl=x,za=60103;if(or.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var Wa=Symbol.for;za=Wa("react.element"),or.Fragment=Wa("react.fragment")}var Bl=Vl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rl=Object.prototype.hasOwnProperty,Gl={key:!0,ref:!0,__self:!0,__source:!0};function Ya(e,t,r){var n,i={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)Rl.call(t,n)&&!Gl.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:za,type:e,key:a,ref:o,props:i,_owner:Bl.current}}or.jsx=Ya,or.jsxs=Ya,Ua.exports=or;var h=Ua.exports;const sr={};var Rr=(e=>(e.Cut="CUT",e.Uncut="UNCUT",e))(Rr||{}),m=(e=>(e.Between="BETWEEN",e.Equals="EQUALS",e.Excludes="EXCLUDES",e.GreaterThan="GREATER_THAN",e.Includes="INCLUDES",e.IncludesAll="INCLUDES_ALL",e.IsNull="IS_NULL",e.LessThan="LESS_THAN",e.MatchesRegex="MATCHES_REGEX",e.NotBetween="NOT_BETWEEN",e.NotEquals="NOT_EQUALS",e.NotMatchesRegex="NOT_MATCHES_REGEX",e.NotNull="NOT_NULL",e))(m||{}),Y=(e=>(e.Galleries="GALLERIES",e.Groups="GROUPS",e.Images="IMAGES",e.Movies="MOVIES",e.Performers="PERFORMERS",e.Scenes="SCENES",e.SceneMarkers="SCENE_MARKERS",e.Studios="STUDIOS",e.Tags="TAGS",e))(Y||{}),Ne=(e=>(e.Female="FEMALE",e.Intersex="INTERSEX",e.Male="MALE",e.NonBinary="NON_BINARY",e.TransgenderFemale="TRANSGENDER_FEMALE",e.TransgenderMale="TRANSGENDER_MALE",e))(Ne||{}),Gr=(e=>(e.Landscape="LANDSCAPE",e.Portrait="PORTRAIT",e.Square="SQUARE",e))(Gr||{}),Fe=(e=>(e.EightK="EIGHT_K",e.FiveK="FIVE_K",e.FourK="FOUR_K",e.FullHd="FULL_HD",e.Huge="HUGE",e.Low="LOW",e.QuadHd="QUAD_HD",e.R360P="R360P",e.SevenK="SEVEN_K",e.SixK="SIX_K",e.Standard="STANDARD",e.StandardHd="STANDARD_HD",e.VeryLow="VERY_LOW",e.VrHd="VR_HD",e.WebHd="WEB_HD",e))(Fe||{}),Le=(e=>(e.Asc="ASC",e.Desc="DESC",e))(Le||{});const Ka=d.gql`
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
    `,Qa=d.gql`
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
    `,Ja=d.gql`
    fragment ConfigDLNAData on ConfigDLNAResult {
  serverName
  enabled
  port
  whitelistedIPs
  interfaces
  videoSortOrder
}
    `,Za=d.gql`
    fragment ConfigScrapingData on ConfigScrapingResult {
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  excludeTagPatterns
}
    `,Ul=d.gql`
    fragment ScraperSourceData on ScraperSource {
  stash_box_index
  stash_box_endpoint
  scraper_id
}
    `,Hl=d.gql`
    fragment IdentifyFieldOptionsData on IdentifyFieldOptions {
  field
  strategy
  createMissing
}
    `,zl=d.gql`
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
    ${Hl}`,Xa=d.gql`
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
    ${Ul}
${zl}`,Wl=d.gql`
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
    ${Ka}
${Qa}
${Ja}
${Za}
${Xa}`;d.gql`
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
    `,Yl=d.gql`
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
    `,Kl=d.gql`
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
    `,Ql=d.gql`
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
    `,Ze=d.gql`
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
    `,eo=d.gql`
    fragment SlimGroupData on Group {
  id
  name
  front_image_path
  rating100
}
    `,Jl=d.gql`
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
${Ze}
${eo}`,to=d.gql`
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
    ${to}`,ro=d.gql`
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
    `,no=d.gql`
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
    `,st=d.gql`
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
    ${Ze}`,io=d.gql`
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
    ${io}`,Ft=d.gql`
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
    ${ro}
${no}
${ai}
${ur}
${Ze}
${st}
${cr}`,Zl=d.gql`
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
${Ze}
${st}
${to}`,ao=d.gql`
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
    `,oo=d.gql`
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
    `;const Xl=d.gql`
    fragment SelectPerformerData on Performer {
  id
  name
  disambiguation
  alias_list
  image_path
  birthdate
  death_date
}
    `,ed=d.gql`
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
    `,ft=d.gql`
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
    ${ed}`,so=d.gql`
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
    ${ro}
${no}`,lr=d.gql`
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
${Ze}
${eo}`,pt=d.gql`
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
    ${io}
${ft}
${so}
${ur}
${lr}
${Ze}
${st}`,td=d.gql`
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
    `,rd=d.gql`
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
    ${Ge}`,uo=d.gql`
    fragment ScrapedGroupStudioData on ScrapedStudio {
  stored_id
  name
  urls
}
    `,nd=d.gql`
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
    ${uo}
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
    ${Ge}`,co=d.gql`
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
    ${uo}
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
${co}`,lo=d.gql`
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
${dr}`,fo=d.gql`
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
${co}`,d.gql`
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
    ${Ze}`,id=d.gql`
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
    ${Ze}`,ad=d.gql`
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
    `,od=d.gql`
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
    ${Ze}`;d.gql`
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
    ${Ka}`,d.gql`
    mutation ConfigureInterface($input: ConfigInterfaceInput!) {
  configureInterface(input: $input) {
    ...ConfigInterfaceData
  }
}
    ${Qa}`,d.gql`
    mutation ConfigureDLNA($input: ConfigDLNAInput!) {
  configureDLNA(input: $input) {
    ...ConfigDLNAData
  }
}
    ${Ja}`,d.gql`
    mutation ConfigureScraping($input: ConfigScrapingInput!) {
  configureScraping(input: $input) {
    ...ConfigScrapingData
  }
}
    ${Za}`,d.gql`
    mutation ConfigureDefaults($input: ConfigDefaultSettingsInput!) {
  configureDefaults(input: $input) {
    ...ConfigDefaultSettingsData
  }
}
    ${Xa}`,d.gql`
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
    ${st}`,d.gql`
    mutation PerformerUpdate($input: PerformerUpdateInput!) {
  performerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${st}`,d.gql`
    mutation BulkPerformerUpdate($input: BulkPerformerUpdateInput!) {
  bulkPerformerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${st}`,d.gql`
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
    ${ft}`,d.gql`
    mutation SceneMarkerUpdate($id: ID!, $title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerUpdate(
    input: {id: $id, title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${ft}`,d.gql`
    mutation BulkSceneMarkerUpdate($input: BulkSceneMarkerUpdateInput!) {
  bulkSceneMarkerUpdate(input: $input) {
    ...SceneMarkerData
  }
}
    ${ft}`,d.gql`
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
    ${pt}`,d.gql`
    mutation SceneUpdate($input: SceneUpdateInput!) {
  sceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${pt}`,d.gql`
    mutation BulkSceneUpdate($input: BulkSceneUpdateInput!) {
  bulkSceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${pt}`,d.gql`
    mutation ScenesUpdate($input: [SceneUpdateInput!]!) {
  scenesUpdate(input: $input) {
    ...SceneData
  }
}
    ${pt}`,d.gql`
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
    `;const sd=d.gql`
    mutation TagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) {
    ...TagData
  }
}
    ${Mt}`;function ud(e){const t={...sr,...e};return ar.useMutation(sd,t)}d.gql`
    mutation TagDestroy($id: ID!) {
  tagDestroy(input: {id: $id})
}
    `,d.gql`
    mutation TagsDestroy($ids: [ID!]!) {
  tagsDestroy(ids: $ids)
}
    `;const cd=d.gql`
    mutation TagUpdate($input: TagUpdateInput!) {
  tagUpdate(input: $input) {
    ...TagData
  }
}
    ${Mt}`;function ld(e){const t={...sr,...e};return ar.useMutation(cd,t)}d.gql`
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
    ${Yl}`,d.gql`
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
    ${ni}`;const dd=d.gql`
    query FindGalleries($filter: FindFilterType, $gallery_filter: GalleryFilterType) {
  findGalleries(gallery_filter: $gallery_filter, filter: $filter) {
    count
    galleries {
      ...SlimGalleryData
    }
  }
}
    ${so}`;d.gql`
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
    ${Kl}`,d.gql`
    query FindGalleryImageID($id: ID!, $index: Int!) {
  findGallery(id: $id) {
    image(index: $index) {
      id
    }
  }
}
    `;const fd=d.gql`
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
    ${Zl}`,d.gql`
    query JobQueue {
  jobQueue {
    ...JobData
  }
}
    ${ao}`,d.gql`
    query FindJob($input: FindJobInput!) {
  findJob(input: $input) {
    ...JobData
  }
}
    ${ao}`,d.gql`
    query SceneWall($q: String) {
  sceneWall(q: $q) {
    ...SceneData
  }
}
    ${pt}`,d.gql`
    query MarkerWall($q: String) {
  markerWall(q: $q) {
    ...SceneMarkerData
  }
}
    ${ft}`,d.gql`
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
    ${oo}`,d.gql`
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
    `;const pd=d.gql`
    query FindGroups($filter: FindFilterType, $group_filter: GroupFilterType) {
  findGroups(filter: $filter, group_filter: $group_filter) {
    count
    groups {
      ...ListGroupData
    }
  }
}
    ${Jl}`;d.gql`
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
    ${Ql}`;const md=d.gql`
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
    ${st}`;d.gql`
    query FindPerformer($id: ID!) {
  findPerformer(id: $id) {
    ...PerformerData
  }
}
    ${st}`,d.gql`
    query FindPerformersForSelect($filter: FindFilterType, $performer_filter: PerformerFilterType, $ids: [ID!]) {
  findPerformers(filter: $filter, performer_filter: $performer_filter, ids: $ids) {
    count
    performers {
      ...SelectPerformerData
    }
  }
}
    ${Xl}`,d.gql`
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
    ${Pt}`;const gd=d.gql`
    query FindSceneMarkers($filter: FindFilterType, $scene_marker_filter: SceneMarkerFilterType) {
  findSceneMarkers(filter: $filter, scene_marker_filter: $scene_marker_filter) {
    count
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${ft}`,hd=d.gql`
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
    ${pt}`,d.gql`
    query FindFullScenes($ids: [Int!]) {
  findScenes(scene_ids: $ids) {
    scenes {
      ...SceneData
    }
  }
}
    ${pt}`,d.gql`
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
    ${ft}`,d.gql`
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
    ${td}`,d.gql`
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
    ${rd}`,d.gql`
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
    ${lo}`,d.gql`
    query ScrapeSingleImage($source: ScraperSourceInput!, $input: ScrapeSingleImageInput!) {
  scrapeSingleImage(source: $source, input: $input) {
    ...ScrapedImageData
  }
}
    ${fo}`,d.gql`
    query ScrapeGalleryURL($url: String!) {
  scrapeGalleryURL(url: $url) {
    ...ScrapedGalleryData
  }
}
    ${lo}`,d.gql`
    query ScrapeImageURL($url: String!) {
  scrapeImageURL(url: $url) {
    ...ScrapedImageData
  }
}
    ${fo}`,d.gql`
    query ScrapeGroupURL($url: String!) {
  scrapeGroupURL(url: $url) {
    ...ScrapedGroupData
  }
}
    ${nd}`,d.gql`
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
    ${Pt}`;const vd=d.gql`
    query Configuration {
  configuration {
    ...ConfigData
  }
}
    ${Wl}`;function Sd(e){const t={...sr,...e};return ar.useQuery(vd,t)}const yd=d.gql`
    query Directory($path: String) {
  directory(path: $path) {
    path
    parent
    directories
  }
}
    `;function bd(e){const t={...sr,...e};return ar.useQuery(yd,t)}d.gql`
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
    ${id}`;const po=d.gql`
    query FindTags($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...TagData
    }
  }
}
    ${Mt}`,Id=d.gql`
    query FindTag($id: ID!) {
  findTag(id: $id) {
    ...TagData
  }
}
    ${Mt}`;function _d(e){const t={...sr,...e};return ar.useQuery(Id,t)}const mo=d.gql`
    query FindTagsForSelect($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...SelectTagData
    }
  }
}
    ${ad}`;d.gql`
    query FindTagsForList($filter: FindFilterType, $tag_filter: TagFilterType) {
  findTags(filter: $filter, tag_filter: $tag_filter) {
    count
    tags {
      ...TagListData
    }
  }
}
    ${od}`,d.gql`
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
    ${oo}`;const Od=d.gql`
    subscription ScanCompleteSubscribe {
  scanCompleteSubscribe
}
    `,go=x.createContext(null),ui=()=>{const e=x.useContext(go);if(e===null)throw new Error("useConfigurationContext must be used within a ConfigurationProvider");return e},Cd=({configuration:e,children:t})=>h.jsx(go.Provider,{value:{configuration:e},children:t}),ho={},Dd={},vo={},Ed={};function wd(e,t){if(ho[e])throw new Error("Component "+e+" has already been registered");return ho[e]=t,t}function Td(e,t,r,n){if(!e.length)return t.apply(r,n);let i=1;function a(){if(i>=e.length)return t;const o=e[i++];return new Proxy(o,{apply:(u,s,c)=>u.apply(s,c.concat(a()))})}return e[0].apply(r,n.concat(a()))}function So(e,t){return new Proxy(t,{apply(r,n,i){let a;for(const o of Dd[e]||[])i=o.apply(n,i);vo[e]?a=Td(vo[e],r,n,i):a=r.apply(n,i);for(const o of Ed[e]||[])a=o.apply(n,i.concat(a));return a}})}function Pe(e,t){const r=So(e,t);return wd(e,r),r}const Xe=Pe("Icon",e=>h.jsx(Nl.FontAwesomeIcon,{...e,className:`fa-icon ${e.className??""}`})),xd=()=>{},$d=({children:e,show:t,icon:r,header:n,cancel:i,accept:a,onHide:o,isRunning:u,disabled:s,modalProps:c,dialogClassName:l,footerButtons:p,leftFooterButtons:I})=>h.jsxs(ne.Modal,{className:"ModalComponent",keyboard:!1,onHide:o??xd,show:t,dialogClassName:l,...c,children:[h.jsxs(ne.Modal.Header,{children:[r?h.jsx(Xe,{icon:r}):"",h.jsx("span",{children:n??""})]}),h.jsx(ne.Modal.Body,{children:e}),h.jsxs(ne.Modal.Footer,{className:"ModalFooter",children:[h.jsx("div",{children:I}),h.jsxs("div",{children:[p,i?h.jsx(ne.Button,{disabled:u,variant:i.variant??"primary",onClick:i.onClick,className:"ml-2",children:i.text??h.jsx(Te.FormattedMessage,{id:"actions.cancel",defaultMessage:"Cancel",description:"Cancels the current action and dismisses the modal."})}):"",h.jsx(ne.Button,{disabled:u||s,variant:(a==null?void 0:a.variant)??"primary",onClick:a==null?void 0:a.onClick,className:"ml-2",children:u?h.jsx(ne.Spinner,{animation:"border",role:"status",size:"sm"}):(a==null?void 0:a.text)??h.jsx(Te.FormattedMessage,{id:"actions.close",defaultMessage:"Close",description:"Closes the current modal."})})]})]})]});function Fd(e){let t="";return e instanceof Error&&(t=e.message),t||(t=String(e)),t||(t="Unknown error"),t}var yo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var a="",o=0;o<arguments.length;o++){var u=arguments[o];u&&(a=i(a,n(u)))}return a}function n(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var o="";for(var u in a)t.call(a,u)&&a[u]&&(o=i(o,u));return o}function i(a,o){return o?a?a+" "+o:a+o:a}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(yo);var Pd=yo.exports;const ut=Ga(Pd),Md=100,Nd=5e3;let kd=0;const bo=x.createContext(null),Ad=({children:e})=>{const[t,r]=x.useState(),[n,i]=x.useState(!1),[a,o]=x.useState(!1),u=x.useMemo(()=>{function l(){o(!0)}return!t||a?null:h.jsx(ne.Toast,{autohide:!0,onClose:()=>i(!0),className:t.variant??"success",delay:t.delay??3e3,children:h.jsxs(ne.Toast.Header,{children:[h.jsx("span",{className:"mr-auto",onClick:()=>l(),children:t.content}),t.variant==="danger"&&h.jsx(ne.Button,{variant:"minimal",className:"expand-error-button",onClick:()=>l(),children:h.jsx(Xe,{icon:Se.faArrowUpRightFromSquare})})]})},t.id)},[t,a]);function s(l){(n||!t||(l.priority??0)>=(t.priority??0))&&(i(!1),r({...l,id:kd++}))}function c(){const{content:l}=t??{};l&&typeof l=="string"&&navigator.clipboard&&navigator.clipboard.writeText(l)}return h.jsxs(bo.Provider,{value:s,children:[e,a&&h.jsx($d,{dialogClassName:"toast-expanded-dialog",show:a,accept:{onClick:()=>{r(void 0),o(!1)}},header:h.jsx(Te.FormattedMessage,{id:"errors.header"}),icon:Se.faTriangleExclamation,footerButtons:!!navigator.clipboard&&h.jsx(ne.Button,{variant:"secondary",onClick:()=>c(),children:h.jsx(Te.FormattedMessage,{id:"actions.copy_to_clipboard"})}),children:t==null?void 0:t.content}),h.jsx("div",{className:ut("toast-container row",{hidden:!t||n}),children:u})]})},Ld=()=>{const e=x.useContext(bo);if(!e)throw new Error("useToast must be used within a ToastProvider");return x.useMemo(()=>({toast:e,success(t){e({content:t})},error(t){const r=Fd(t);console.error(t),e({variant:"danger",content:r,priority:Md,delay:Nd})}}),[e])};var ci=function(e,t){return ci=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])},ci(e,t)};function zr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");ci(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var Oe=function(){return Oe=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},Oe.apply(this,arguments)};function Nt(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,a;n<i;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}typeof SuppressedError=="function"&&SuppressedError;var li="Invariant Violation",Io=Object.setPrototypeOf,jd=Io===void 0?function(e,t){return e.__proto__=t,e}:Io,_o=function(e){zr(t,e);function t(r){r===void 0&&(r=li);var n=e.call(this,typeof r=="number"?li+": "+r+" (see https://github.com/apollographql/invariant-packages)":r)||this;return n.framesToPop=1,n.name=li,jd(n,t.prototype),n}return t}(Error);function mt(e,t){if(!e)throw new _o(t)}var Oo=["debug","log","warn","error","silent"],qd=Oo.indexOf("log");function Wr(e){return function(){if(Oo.indexOf(e)>=qd){var t=console[e]||console.log;return t.apply(console,arguments)}}}(function(e){e.debug=Wr("debug"),e.log=Wr("log"),e.warn=Wr("warn"),e.error=Wr("error")})(mt||(mt={}));var Co="3.14.1";function kt(e){try{return e()}catch{}}const Yr=kt(function(){return globalThis})||kt(function(){return window})||kt(function(){return self})||kt(function(){return global})||kt(function(){return kt.constructor("return this")()});var Do=new Map;function Vd(e){var t=Do.get(e)||1;return Do.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function Bd(e,t){var r=Vd("stringifyForDisplay");return JSON.stringify(e,function(n,i){return i===void 0?r:i},t).split(JSON.stringify(r)).join("<undefined>")}function Kr(e){return function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];if(typeof t=="number"){var i=t;t=di(i),t||(t=fi(i,r),r=[])}e.apply(void 0,[t].concat(r))}}var At=Object.assign(function(t,r){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];t||mt(t,di(r,n)||fi(r,n))},{debug:Kr(mt.debug),log:Kr(mt.log),warn:Kr(mt.warn),error:Kr(mt.error)});function pr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new _o(di(e,t)||fi(e,t))}var Eo=Symbol.for("ApolloErrorMessageHandler_"+Co);function wo(e){if(typeof e=="string")return e;try{return Bd(e,2).slice(0,1e3)}catch{return"<non-serializable>"}}function di(e,t){if(t===void 0&&(t=[]),!!e)return Yr[Eo]&&Yr[Eo](e,t.map(wo))}function fi(e,t){if(t===void 0&&(t=[]),!!e)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:Co,message:e,args:t.map(wo)})))}function Rd(e,t){if(!!!e)throw new Error(t)}const To={Name:[],Document:["definitions"],OperationDefinition:["description","name","variableDefinitions","directives","selectionSet"],VariableDefinition:["description","variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["description","name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","directives","locations"],SchemaExtension:["directives","operationTypes"],DirectiveExtension:["name","directives"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"],TypeCoordinate:["name"],MemberCoordinate:["name","memberName"],ArgumentCoordinate:["name","fieldName","argumentName"],DirectiveCoordinate:["name"],DirectiveArgumentCoordinate:["name","argumentName"]},Gd=new Set(Object.keys(To));function xo(e){const t=e==null?void 0:e.kind;return typeof t=="string"&&Gd.has(t)}var $o;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})($o||($o={}));var pi;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.DIRECTIVE_EXTENSION="DirectiveExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension",e.TYPE_COORDINATE="TypeCoordinate",e.MEMBER_COORDINATE="MemberCoordinate",e.ARGUMENT_COORDINATE="ArgumentCoordinate",e.DIRECTIVE_COORDINATE="DirectiveCoordinate",e.DIRECTIVE_ARGUMENT_COORDINATE="DirectiveArgumentCoordinate"})(pi||(pi={}));function Fo(e){return e===9||e===32}function Ud(e,t){const r=e.replace(/"""/g,'\\"""'),n=r.split(/\r\n|[\n\r]/g),i=n.length===1,a=n.length>1&&n.slice(1).every(g=>g.length===0||Fo(g.charCodeAt(0))),o=r.endsWith('\\"""'),u=e.endsWith('"')&&!o,s=e.endsWith("\\"),c=u||s,l=!i||e.length>70||c||a||o;let p="";const I=i&&Fo(e.charCodeAt(0));return(l&&!I||a)&&(p+=`
`),p+=r,(l||c)&&(p+=`
`),'"""'+p+'"""'}const Hd=10,Po=2;function zd(e){return Qr(e,[])}function Qr(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return Wd(e,t);default:return String(e)}}function Wd(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const r=[...t,e];if(Yd(e)){const n=e.toJSON();if(n!==e)return typeof n=="string"?n:Qr(n,r)}else if(Array.isArray(e))return Qd(e,r);return Kd(e,r)}function Yd(e){return typeof e.toJSON=="function"}function Kd(e,t){const r=Object.entries(e);return r.length===0?"{}":t.length>Po?"["+Jd(e)+"]":"{ "+r.map(([i,a])=>i+": "+Qr(a,t)).join(", ")+" }"}function Qd(e,t){if(e.length===0)return"[]";if(t.length>Po)return"[Array]";const r=Math.min(Hd,e.length),n=e.length-r,i=[];for(let a=0;a<r;++a)i.push(Qr(e[a],t));return n===1?i.push("... 1 more item"):n>1&&i.push(`... ${n} more items`),"["+i.join(", ")+"]"}function Jd(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const r=e.constructor.name;if(typeof r=="string"&&r!=="")return r}return t}function Zd(e){return`"${e.replace(Xd,ef)}"`}const Xd=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function ef(e){return tf[e.charCodeAt(0)]}const tf=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],rf=Object.freeze({});function nf(e,t,r=To){const n=new Map;for(const C of Object.values(pi))n.set(C,af(t,C));let i,a=Array.isArray(e),o=[e],u=-1,s=[],c=e,l,p;const I=[],g=[];do{u++;const C=u===o.length,v=C&&s.length!==0;if(C){if(l=g.length===0?void 0:I[I.length-1],c=p,p=g.pop(),v)if(a){c=c.slice();let w=0;for(const[b,y]of s){const f=b-w;y===null?(c.splice(f,1),w++):c[f]=y}}else{c={...c};for(const[w,b]of s)c[w]=b}u=i.index,o=i.keys,s=i.edits,a=i.inArray,i=i.prev}else if(p){if(l=a?u:o[u],c=p[l],c==null)continue;I.push(l)}let O;if(!Array.isArray(c)){var E,S;xo(c)||Rd(!1,`Invalid AST Node: ${zd(c)}.`);const w=C?(E=n.get(c.kind))===null||E===void 0?void 0:E.leave:(S=n.get(c.kind))===null||S===void 0?void 0:S.enter;if(O=w==null?void 0:w.call(t,c,l,p,I,g),O===rf)break;if(O===!1){if(!C){I.pop();continue}}else if(O!==void 0&&(s.push([l,O]),!C))if(xo(O))c=O;else{I.pop();continue}}if(O===void 0&&v&&s.push([l,c]),C)I.pop();else{var _;i={inArray:a,index:u,keys:o,edits:s,prev:i},a=Array.isArray(c),o=a?c:(_=r[c.kind])!==null&&_!==void 0?_:[],u=-1,s=[],p&&g.push(p),p=c}}while(i!==void 0);return s.length!==0?s[s.length-1][1]:e}function af(e,t){const r=e[t];return typeof r=="object"?r:typeof r=="function"?{enter:r,leave:void 0}:{enter:e.enter,leave:e.leave}}function of(e){return nf(e,uf)}const sf=80,uf={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>k(e.definitions,`

`)},OperationDefinition:{leave(e){const t=mi(e.variableDefinitions)?z(`(
`,k(e.variableDefinitions,`
`),`
)`):z("(",k(e.variableDefinitions,", "),")"),r=z("",e.description,`
`)+k([e.operation,k([e.name,t]),k(e.directives," ")]," ");return(r==="query"?"":r+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:r,directives:n,description:i})=>z("",i,`
`)+e+": "+t+z(" = ",r)+z(" ",k(n," "))},SelectionSet:{leave:({selections:e})=>Ue(e)},Field:{leave({alias:e,name:t,arguments:r,directives:n,selectionSet:i}){const a=z("",e,": ")+t;let o=a+z("(",k(r,", "),")");return o.length>sf&&(o=a+z(`(
`,Jr(k(r,`
`)),`
)`)),k([o,k(n," "),i]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+z(" ",k(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:r})=>k(["...",z("on ",e),k(t," "),r]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:r,directives:n,selectionSet:i,description:a})=>z("",a,`
`)+`fragment ${e}${z("(",k(r,", "),")")} on ${t} ${z("",k(n," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?Ud(e):Zd(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+k(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+k(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+z("(",k(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:r})=>z("",e,`
`)+k(["schema",k(t," "),Ue(r)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:r})=>z("",e,`
`)+k(["scalar",t,k(r," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:r,directives:n,fields:i})=>z("",e,`
`)+k(["type",t,z("implements ",k(r," & ")),k(n," "),Ue(i)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:r,type:n,directives:i})=>z("",e,`
`)+t+(mi(r)?z(`(
`,Jr(k(r,`
`)),`
)`):z("(",k(r,", "),")"))+": "+n+z(" ",k(i," "))},InputValueDefinition:{leave:({description:e,name:t,type:r,defaultValue:n,directives:i})=>z("",e,`
`)+k([t+": "+r,z("= ",n),k(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:r,directives:n,fields:i})=>z("",e,`
`)+k(["interface",t,z("implements ",k(r," & ")),k(n," "),Ue(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:r,types:n})=>z("",e,`
`)+k(["union",t,k(r," "),z("= ",k(n," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:r,values:n})=>z("",e,`
`)+k(["enum",t,k(r," "),Ue(n)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:r})=>z("",e,`
`)+k([t,k(r," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:r,fields:n})=>z("",e,`
`)+k(["input",t,k(r," "),Ue(n)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:r,directives:n,repeatable:i,locations:a})=>z("",e,`
`)+"directive @"+t+(mi(r)?z(`(
`,Jr(k(r,`
`)),`
)`):z("(",k(r,", "),")"))+z(" ",k(n," "))+(i?" repeatable":"")+" on "+k(a," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>k(["extend schema",k(e," "),Ue(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>k(["extend scalar",e,k(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:r,fields:n})=>k(["extend type",e,z("implements ",k(t," & ")),k(r," "),Ue(n)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:r,fields:n})=>k(["extend interface",e,z("implements ",k(t," & ")),k(r," "),Ue(n)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:r})=>k(["extend union",e,k(t," "),z("= ",k(r," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:r})=>k(["extend enum",e,k(t," "),Ue(r)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:r})=>k(["extend input",e,k(t," "),Ue(r)]," ")},DirectiveExtension:{leave:({name:e,directives:t})=>k(["extend directive @"+e,k(t," ")]," ")},TypeCoordinate:{leave:({name:e})=>e},MemberCoordinate:{leave:({name:e,memberName:t})=>k([e,z(".",t)])},ArgumentCoordinate:{leave:({name:e,fieldName:t,argumentName:r})=>k([e,z(".",t),z("(",r,":)")])},DirectiveCoordinate:{leave:({name:e})=>k(["@",e])},DirectiveArgumentCoordinate:{leave:({name:e,argumentName:t})=>k(["@",e,z("(",t,":)")])}};function k(e,t=""){var r;return(r=e==null?void 0:e.filter(n=>n).join(t))!==null&&r!==void 0?r:""}function Ue(e){return z(`{
`,Jr(k(e,`
`)),`
}`)}function z(e,t,r=""){return t!=null&&t!==""?e+t+r:""}function Jr(e){return z("  ",e.replace(/\n/g,`
  `))}function mi(e){var t;return(t=e==null?void 0:e.some(r=>r.includes(`
`)))!==null&&t!==void 0?t:!1}function gi(e){return e!==null&&typeof e=="object"}function cf(){}class Mo{constructor(t=1/0,r=cf){this.max=t,this.dispose=r,this.map=new Map,this.newest=null,this.oldest=null}has(t){return this.map.has(t)}get(t){const r=this.getNode(t);return r&&r.value}get size(){return this.map.size}getNode(t){const r=this.map.get(t);if(r&&r!==this.newest){const{older:n,newer:i}=r;i&&(i.older=n),n&&(n.newer=i),r.older=this.newest,r.older.newer=r,r.newer=null,this.newest=r,r===this.oldest&&(this.oldest=i)}return r}set(t,r){let n=this.getNode(t);return n?n.value=r:(n={key:t,value:r,newer:null,older:this.newest},this.newest&&(this.newest.newer=n),this.newest=n,this.oldest=this.oldest||n,this.map.set(t,n),n.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(t){const r=this.map.get(t);return r?(r===this.newest&&(this.newest=r.older),r===this.oldest&&(this.oldest=r.newer),r.newer&&(r.newer.older=r.older),r.older&&(r.older.newer=r.newer),this.map.delete(t),this.dispose(r.value,t),!0):!1}}function hi(){}const lf=hi,df=typeof WeakRef<"u"?WeakRef:function(e){return{deref:()=>e}},ff=typeof WeakMap<"u"?WeakMap:Map,pf=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:hi,unregister:hi}},mf=10024;class No{constructor(t=1/0,r=lf){this.max=t,this.dispose=r,this.map=new ff,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{const n=this.unfinalizedNodes.values();for(let i=0;i<mf;i++){const a=n.next().value;if(!a)break;this.unfinalizedNodes.delete(a);const o=a.key;delete a.key,a.keyRef=new df(o),this.registry.register(o,a,a)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new pf(this.deleteNode.bind(this))}has(t){return this.map.has(t)}get(t){const r=this.getNode(t);return r&&r.value}getNode(t){const r=this.map.get(t);if(r&&r!==this.newest){const{older:n,newer:i}=r;i&&(i.older=n),n&&(n.newer=i),r.older=this.newest,r.older.newer=r,r.newer=null,this.newest=r,r===this.oldest&&(this.oldest=i)}return r}set(t,r){let n=this.getNode(t);return n?n.value=r:(n={key:t,value:r,newer:null,older:this.newest},this.newest&&(this.newest.newer=n),this.newest=n,this.oldest=this.oldest||n,this.scheduleFinalization(n),this.map.set(t,n),this.size++,n.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(t){t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.size--;const r=t.key||t.keyRef&&t.keyRef.deref();this.dispose(t.value,r),t.keyRef?this.registry.unregister(t):this.unfinalizedNodes.delete(t),r&&this.map.delete(r)}delete(t){const r=this.map.get(t);return r?(this.deleteNode(r),!0):!1}scheduleFinalization(t){this.unfinalizedNodes.add(t),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}}var vi=new WeakSet;function ko(e){e.size<=(e.max||-1)||vi.has(e)||(vi.add(e),setTimeout(function(){e.clean(),vi.delete(e)},100))}var gf=function(e,t){var r=new No(e,t);return r.set=function(n,i){var a=No.prototype.set.call(this,n,i);return ko(this),a},r},hf=function(e,t){var r=new Mo(e,t);return r.set=function(n,i){var a=Mo.prototype.set.call(this,n,i);return ko(this),a},r},vf=Symbol.for("apollo.cacheSize"),Ao=Oe({},Yr[vf]),Sf={};function Lo(e,t){Sf[e]=t}var jo=Object.assign(function(t){return JSON.stringify(t,yf)},{reset:function(){Lt=new hf(Ao.canonicalStringify||1e3)}});globalThis.__DEV__!==!1&&Lo("canonicalStringify",function(){return Lt.size});var Lt;jo.reset();function yf(e,t){if(t&&typeof t=="object"){var r=Object.getPrototypeOf(t);if(r===Object.prototype||r===null){var n=Object.keys(t);if(n.every(bf))return t;var i=JSON.stringify(n),a=Lt.get(i);if(!a){n.sort();var o=JSON.stringify(n);a=Lt.get(o)||n,Lt.set(i,a),Lt.set(o,a)}var u=Object.create(r);return a.forEach(function(s){u[s]=t[s]}),u}}return t}function bf(e,t,r){return t===0||r[t-1]<=e}var If=["connection","include","skip","client","rest","export","nonreactive"],mr=jo;Object.assign(function(e,t,r){if(t&&r&&r.connection&&r.connection.key)if(r.connection.filter&&r.connection.filter.length>0){var n=r.connection.filter?r.connection.filter:[];n.sort();var i={};return n.forEach(function(u){i[u]=t[u]}),"".concat(r.connection.key,"(").concat(mr(i),")")}else return r.connection.key;var a=e;if(t){var o=mr(t);a+="(".concat(o,")")}return r&&Object.keys(r).forEach(function(u){If.indexOf(u)===-1&&(r[u]&&Object.keys(r[u]).length?a+="@".concat(u,"(").concat(mr(r[u]),")"):a+="@".concat(u))}),a},{setStringify:function(e){var t=mr;return mr=e,t}});function _f(e){return e.kind==="Field"}function qo(e){At(e&&e.kind==="Document",115);var t=e.definitions.filter(function(r){return r.kind!=="FragmentDefinition"}).map(function(r){if(r.kind!=="OperationDefinition")throw pr(116,r.kind);return r});return At(t.length<=1,117,t.length),e}function Of(e){return qo(e),e.definitions.filter(function(t){return t.kind==="OperationDefinition"})[0]}function Cf(e){return e.definitions.filter(function(t){return t.kind==="OperationDefinition"&&!!t.name}).map(function(t){return t.name.value})[0]||null}function Df(e){var t=Of(e);return At(t&&t.operation==="query",118),t}function Ef(e){qo(e);for(var t,r=0,n=e.definitions;r<n.length;r++){var i=n[r];if(i.kind==="OperationDefinition"){var a=i.operation;if(a==="query"||a==="mutation"||a==="subscription")return i}i.kind==="FragmentDefinition"&&!t&&(t=i)}if(t)return t;throw pr(122)}let Ee=null;const Vo={};let wf=1;const Tf=()=>class{constructor(){this.id=["slot",wf++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let t=Ee;t;t=t.parent)if(this.id in t.slots){const r=t.slots[this.id];if(r===Vo)break;return t!==Ee&&(Ee.slots[this.id]=r),!0}return Ee&&(Ee.slots[this.id]=Vo),!1}getValue(){if(this.hasValue())return Ee.slots[this.id]}withValue(t,r,n,i){const a={__proto__:null,[this.id]:t},o=Ee;Ee={parent:o,slots:a};try{return r.apply(i,n)}finally{Ee=o}}static bind(t){const r=Ee;return function(){const n=Ee;try{return Ee=r,t.apply(this,arguments)}finally{Ee=n}}}static noContext(t,r,n){if(Ee){const i=Ee;try{return Ee=null,t.apply(n,r)}finally{Ee=i}}else return t.apply(n,r)}};function Bo(e){try{return e()}catch{}}const Si="@wry/context:Slot",Ro=Bo(()=>globalThis)||Bo(()=>global)||Object.create(null),yi=Ro[Si]||Array[Si]||function(e){try{Object.defineProperty(Ro,Si,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}}(Tf()),{bind:MO,noContext:NO}=yi;new yi;var gr,bi=Object.assign(function(e){var t=gr.get(e);return t||(t=of(e),gr.set(e,t)),t},{reset:function(){gr=new gf(Ao.print||2e3)}});bi.reset(),globalThis.__DEV__!==!1&&Lo("print",function(){return gr?gr.size:0});function xf(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=$f(e))||t){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $f(e,t){if(e){if(typeof e=="string")return Go(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Go(e,t)}}function Go(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Uo(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ii(e,t,r){return t&&Uo(e.prototype,t),r&&Uo(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var _i=function(){return typeof Symbol=="function"},Oi=function(e){return _i()&&!!Symbol[e]},Ci=function(e){return Oi(e)?Symbol[e]:"@@"+e};_i()&&!Oi("observable")&&(Symbol.observable=Symbol("observable"));var Ff=Ci("iterator"),Di=Ci("observable"),Ho=Ci("species");function Zr(e,t){var r=e[t];if(r!=null){if(typeof r!="function")throw new TypeError(r+" is not a function");return r}}function hr(e){var t=e.constructor;return t!==void 0&&(t=t[Ho],t===null&&(t=void 0)),t!==void 0?t:be}function Pf(e){return e instanceof be}function jt(e){jt.log?jt.log(e):setTimeout(function(){throw e})}function Xr(e){Promise.resolve().then(function(){try{e()}catch(t){jt(t)}})}function zo(e){var t=e._cleanup;if(t!==void 0&&(e._cleanup=void 0,!!t))try{if(typeof t=="function")t();else{var r=Zr(t,"unsubscribe");r&&r.call(t)}}catch(n){jt(n)}}function Ei(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function Mf(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var r=0;r<t.length&&(Wo(e,t[r].type,t[r].value),e._state!=="closed");++r);}}function Wo(e,t,r){e._state="running";var n=e._observer;try{var i=Zr(n,t);switch(t){case"next":i&&i.call(n,r);break;case"error":if(Ei(e),i)i.call(n,r);else throw r;break;case"complete":Ei(e),i&&i.call(n);break}}catch(a){jt(a)}e._state==="closed"?zo(e):e._state==="running"&&(e._state="ready")}function wi(e,t,r){if(e._state!=="closed"){if(e._state==="buffering"){e._queue.push({type:t,value:r});return}if(e._state!=="ready"){e._state="buffering",e._queue=[{type:t,value:r}],Xr(function(){return Mf(e)});return}Wo(e,t,r)}}var Nf=function(){function e(r,n){this._cleanup=void 0,this._observer=r,this._queue=void 0,this._state="initializing";var i=new kf(this);try{this._cleanup=n.call(void 0,i)}catch(a){i.error(a)}this._state==="initializing"&&(this._state="ready")}var t=e.prototype;return t.unsubscribe=function(){this._state!=="closed"&&(Ei(this),zo(this))},Ii(e,[{key:"closed",get:function(){return this._state==="closed"}}]),e}(),kf=function(){function e(r){this._subscription=r}var t=e.prototype;return t.next=function(n){wi(this._subscription,"next",n)},t.error=function(n){wi(this._subscription,"error",n)},t.complete=function(){wi(this._subscription,"complete")},Ii(e,[{key:"closed",get:function(){return this._subscription._state==="closed"}}]),e}(),be=function(){function e(r){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if(typeof r!="function")throw new TypeError("Observable initializer must be a function");this._subscriber=r}var t=e.prototype;return t.subscribe=function(n){return(typeof n!="object"||n===null)&&(n={next:n,error:arguments[1],complete:arguments[2]}),new Nf(n,this._subscriber)},t.forEach=function(n){var i=this;return new Promise(function(a,o){if(typeof n!="function"){o(new TypeError(n+" is not a function"));return}function u(){s.unsubscribe(),a()}var s=i.subscribe({next:function(c){try{n(c,u)}catch(l){o(l),s.unsubscribe()}},error:o,complete:a})})},t.map=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=hr(this);return new a(function(o){return i.subscribe({next:function(u){try{u=n(u)}catch(s){return o.error(s)}o.next(u)},error:function(u){o.error(u)},complete:function(){o.complete()}})})},t.filter=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=hr(this);return new a(function(o){return i.subscribe({next:function(u){try{if(!n(u))return}catch(s){return o.error(s)}o.next(u)},error:function(u){o.error(u)},complete:function(){o.complete()}})})},t.reduce=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=hr(this),o=arguments.length>1,u=!1,s=arguments[1],c=s;return new a(function(l){return i.subscribe({next:function(p){var I=!u;if(u=!0,!I||o)try{c=n(c,p)}catch(g){return l.error(g)}else c=p},error:function(p){l.error(p)},complete:function(){if(!u&&!o)return l.error(new TypeError("Cannot reduce an empty sequence"));l.next(c),l.complete()}})})},t.concat=function(){for(var n=this,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];var u=hr(this);return new u(function(s){var c,l=0;function p(I){c=I.subscribe({next:function(g){s.next(g)},error:function(g){s.error(g)},complete:function(){l===a.length?(c=void 0,s.complete()):p(u.from(a[l++]))}})}return p(n),function(){c&&(c.unsubscribe(),c=void 0)}})},t.flatMap=function(n){var i=this;if(typeof n!="function")throw new TypeError(n+" is not a function");var a=hr(this);return new a(function(o){var u=[],s=i.subscribe({next:function(l){if(n)try{l=n(l)}catch(I){return o.error(I)}var p=a.from(l).subscribe({next:function(I){o.next(I)},error:function(I){o.error(I)},complete:function(){var I=u.indexOf(p);I>=0&&u.splice(I,1),c()}});u.push(p)},error:function(l){o.error(l)},complete:function(){c()}});function c(){s.closed&&u.length===0&&o.complete()}return function(){u.forEach(function(l){return l.unsubscribe()}),s.unsubscribe()}})},t[Di]=function(){return this},e.from=function(n){var i=typeof this=="function"?this:e;if(n==null)throw new TypeError(n+" is not an object");var a=Zr(n,Di);if(a){var o=a.call(n);if(Object(o)!==o)throw new TypeError(o+" is not an object");return Pf(o)&&o.constructor===i?o:new i(function(u){return o.subscribe(u)})}if(Oi("iterator")&&(a=Zr(n,Ff),a))return new i(function(u){Xr(function(){if(!u.closed){for(var s=xf(a.call(n)),c;!(c=s()).done;){var l=c.value;if(u.next(l),u.closed)return}u.complete()}})});if(Array.isArray(n))return new i(function(u){Xr(function(){if(!u.closed){for(var s=0;s<n.length;++s)if(u.next(n[s]),u.closed)return;u.complete()}})});throw new TypeError(n+" is not observable")},e.of=function(){for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];var o=typeof this=="function"?this:e;return new o(function(u){Xr(function(){if(!u.closed){for(var s=0;s<i.length;++s)if(u.next(i[s]),u.closed)return;u.complete()}})})},Ii(e,null,[{key:Ho,get:function(){return this}}]),e}();_i()&&Object.defineProperty(be,Symbol("extensions"),{value:{symbol:Di,hostReportError:jt},configurable:!0});function Af(e){var t,r=e.Symbol;if(typeof r=="function")if(r.observable)t=r.observable;else{typeof r.for=="function"?t=r.for("https://github.com/benlesh/symbol-observable"):t=r("https://github.com/benlesh/symbol-observable");try{r.observable=t}catch{}}else t="@@observable";return t}var qt;typeof self<"u"?qt=self:typeof window<"u"?qt=window:typeof global<"u"?qt=global:typeof module<"u"?qt=module:qt=Function("return this")(),Af(qt);var Yo=be.prototype,Ko="@@observable";Yo[Ko]||(Yo[Ko]=function(){return this});var Ti,Lf=Symbol.for("apollo.deprecations"),Qo=Symbol.for("apollo.deprecations.slot"),xi=Yr,jf=(Ti=xi[Qo])!==null&&Ti!==void 0?Ti:xi[Qo]=new yi;function qf(e){return xi[Lf]||(jf.getValue()||[]).includes(e)}function Vf(e,t){qf(e)||t()}var Jo=function(e,t,r){var n=new Error(r);throw n.name="ServerError",n.response=e,n.statusCode=e.status,n.result=t,n};function Bf(e){for(var t=["query","operationName","variables","extensions","context"],r=0,n=Object.keys(e);r<n.length;r++){var i=n[r];if(t.indexOf(i)<0)throw pr(58,i)}return e}function Rf(e,t){var r=Oe({},e),n=function(a){typeof a=="function"?r=Oe(Oe({},r),a(r)):r=Oe(Oe({},r),a)},i=function(){return Oe({},r)};return Object.defineProperty(t,"setContext",{enumerable:!1,value:n}),Object.defineProperty(t,"getContext",{enumerable:!1,value:i}),t}function Gf(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName=typeof t.query!="string"?Cf(t.query)||void 0:""),t}function Zo(e,t){return t?t(e):be.of()}function vr(e){return typeof e=="function"?new Sr(e):e}function en(e){return e.request.length<=1}var Sr=function(){function e(t){t&&(this.request=t)}return e.empty=function(){return new e(function(){return be.of()})},e.from=function(t){return t.length===0?e.empty():t.map(vr).reduce(function(r,n){return r.concat(n)})},e.split=function(t,r,n){var i=vr(r),a=vr(n||new e(Zo)),o;return en(i)&&en(a)?o=new e(function(u){return t(u)?i.request(u)||be.of():a.request(u)||be.of()}):o=new e(function(u,s){return t(u)?i.request(u,s)||be.of():a.request(u,s)||be.of()}),Object.assign(o,{left:i,right:a})},e.execute=function(t,r){return t.request(Rf(r.context,Gf(Bf(r))))||be.of()},e.concat=function(t,r){var n=vr(t);if(en(n))return globalThis.__DEV__!==!1&&At.warn(47,n),n;var i=vr(r),a;return en(i)?a=new e(function(o){return n.request(o,function(u){return i.request(u)||be.of()})||be.of()}):a=new e(function(o,u){return n.request(o,function(s){return i.request(s,u)||be.of()})||be.of()}),Object.assign(a,{left:n,right:i})},e.prototype.split=function(t,r,n){return this.concat(e.split(t,r,n||new e(Zo)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(t,r){throw pr(48)},e.prototype.onError=function(t,r){if(globalThis.__DEV__!==!1&&Vf("onError",function(){globalThis.__DEV__!==!1&&At.warn(49)}),r&&r.error)return r.error(t),!1;throw t},e.prototype.setOnError=function(t){return globalThis.__DEV__!==!1&&globalThis.__DEV__!==!1&&At.warn(50),this.onError=t,this},e}(),Xo=Symbol();function Uf(e){return e.extensions?Array.isArray(e.extensions[Xo]):!1}var Hf=function(e){var t=Nt(Nt(Nt([],e.graphQLErrors,!0),e.clientErrors,!0),e.protocolErrors,!0);return e.networkError&&t.push(e.networkError),t.map(function(r){return gi(r)&&r.message||"Error message not found."}).join(`
`)},zf=function(e){zr(t,e);function t(r){var n=r.graphQLErrors,i=r.protocolErrors,a=r.clientErrors,o=r.networkError,u=r.errorMessage,s=r.extraInfo,c=e.call(this,u)||this;return c.name="ApolloError",c.graphQLErrors=n||[],c.protocolErrors=i||[],c.clientErrors=a||[],c.networkError=o||null,c.message=u||Hf(c),c.extraInfo=s,c.cause=Nt(Nt(Nt([o],n||[],!0),i||[],!0),a||[],!0).find(function(l){return!!l})||null,c.__proto__=t.prototype,c}return t}(Error);function Wf(e){return gi(e)&&"code"in e&&"reason"in e}function Yf(e){var t;return gi(e)&&((t=e.target)===null||t===void 0?void 0:t.readyState)===WebSocket.CLOSED}var Kf=function(e){zr(t,e);function t(r){var n=e.call(this)||this;return n.client=r,n}return t.prototype.request=function(r){var n=this;return new be(function(i){return n.client.subscribe(Oe(Oe({},r),{query:bi(r.query)}),{next:i.next.bind(i),complete:i.complete.bind(i),error:function(a){if(a instanceof Error)return i.error(a);var o=Wf(a);return o||Yf(a)?i.error(new Error("Socket closed".concat(o?" with event ".concat(a.code):"").concat(o?" ".concat(a.reason):""))):i.error(new zf({graphQLErrors:Array.isArray(a)?a:[a]}))}})})},t}(Sr);function ke(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function gt(e){return ke(e)==="object"}function Qf(e){return Array.isArray(e)&&e.length>0&&e.every(t=>"message"in t)}function es(e,t){return e.length<124?e:t}const Jf="graphql-transport-ws";var je;(function(e){e[e.InternalServerError=4500]="InternalServerError",e[e.InternalClientError=4005]="InternalClientError",e[e.BadRequest=4400]="BadRequest",e[e.BadResponse=4004]="BadResponse",e[e.Unauthorized=4401]="Unauthorized",e[e.Forbidden=4403]="Forbidden",e[e.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",e[e.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",e[e.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",e[e.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",e[e.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests"})(je||(je={}));var ve;(function(e){e.ConnectionInit="connection_init",e.ConnectionAck="connection_ack",e.Ping="ping",e.Pong="pong",e.Subscribe="subscribe",e.Next="next",e.Error="error",e.Complete="complete"})(ve||(ve={}));function ts(e){if(!gt(e))throw new Error(`Message is expected to be an object, but got ${ke(e)}`);if(!e.type)throw new Error("Message is missing the 'type' property");if(typeof e.type!="string")throw new Error(`Message is expects the 'type' property to be a string, but got ${ke(e.type)}`);switch(e.type){case ve.ConnectionInit:case ve.ConnectionAck:case ve.Ping:case ve.Pong:{if(e.payload!=null&&!gt(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);break}case ve.Subscribe:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ke(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!gt(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ke(e.payload)}`);if(typeof e.payload.query!="string")throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${ke(e.payload.query)}`);if(e.payload.variables!=null&&!gt(e.payload.variables))throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${ke(e.payload.variables)}`);if(e.payload.operationName!=null&&ke(e.payload.operationName)!=="string")throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${ke(e.payload.operationName)}`);if(e.payload.extensions!=null&&!gt(e.payload.extensions))throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${ke(e.payload.extensions)}`);break}case ve.Next:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ke(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!gt(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ke(e.payload)}`);break}case ve.Error:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ke(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!Qf(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);break}case ve.Complete:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ke(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);break}default:throw new Error(`Invalid message 'type' property "${e.type}"`)}return e}function Zf(e,t){return ts(typeof e=="string"?JSON.parse(e,t):e)}function yr(e,t){return ts(e),JSON.stringify(e,t)}var Vt=function(e){return this instanceof Vt?(this.v=e,this):new Vt(e)},Xf=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(e,t||[]),i,a=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",o),i[Symbol.asyncIterator]=function(){return this},i;function o(g){return function(E){return Promise.resolve(E).then(g,p)}}function u(g,E){n[g]&&(i[g]=function(S){return new Promise(function(_,C){a.push([g,S,_,C])>1||s(g,S)})},E&&(i[g]=E(i[g])))}function s(g,E){try{c(n[g](E))}catch(S){I(a[0][3],S)}}function c(g){g.value instanceof Vt?Promise.resolve(g.value.v).then(l,p):I(a[0][2],g)}function l(g){s("next",g)}function p(g){s("throw",g)}function I(g,E){g(E),a.shift(),a.length&&s(a[0][0],a[0][1])}};function ep(e){const{url:t,connectionParams:r,lazy:n=!0,onNonLazyError:i=console.error,lazyCloseTimeout:a=0,keepAlive:o=0,disablePong:u,connectionAckWaitTimeout:s=0,retryAttempts:c=5,retryWait:l=async function(P){let N=1e3;for(let L=0;L<P;L++)N*=2;await new Promise(L=>setTimeout(L,N+Math.floor(Math.random()*2700+300)))},shouldRetry:p=$i,isFatalConnectionProblem:I,on:g,webSocketImpl:E,generateID:S=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,P=>{const N=Math.random()*16|0;return(P=="x"?N:N&3|8).toString(16)})},jsonMessageReplacer:_,jsonMessageReviver:C}=e;let v;if(E){if(!rp(E))throw new Error("Invalid WebSocket implementation provided");v=E}else typeof WebSocket<"u"?v=WebSocket:typeof global<"u"?v=global.WebSocket||global.MozWebSocket:typeof window<"u"&&(v=window.WebSocket||window.MozWebSocket);if(!v)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const O=v,w=(()=>{const $=(()=>{const N={};return{on(L,ee){return N[L]=ee,()=>{delete N[L]}},emit(L){var ee;"id"in L&&((ee=N[L.id])===null||ee===void 0||ee.call(N,L))}}})(),P={connecting:g!=null&&g.connecting?[g.connecting]:[],opened:g!=null&&g.opened?[g.opened]:[],connected:g!=null&&g.connected?[g.connected]:[],ping:g!=null&&g.ping?[g.ping]:[],pong:g!=null&&g.pong?[g.pong]:[],message:g!=null&&g.message?[$.emit,g.message]:[$.emit],closed:g!=null&&g.closed?[g.closed]:[],error:g!=null&&g.error?[g.error]:[]};return{onMessage:$.on,on(N,L){const ee=P[N];return ee.push(L),()=>{ee.splice(ee.indexOf(L),1)}},emit(N,...L){for(const ee of[...P[N]])ee(...L)}}})();function b($){const P=[w.on("error",N=>{P.forEach(L=>L()),$(N)}),w.on("closed",N=>{P.forEach(L=>L()),$(N)})]}let y,f=0,D,T=!1,F=0,q=!1;async function U(){clearTimeout(D);const[$,P]=await(y??(y=new Promise((ee,le)=>(async()=>{if(T){if(await l(F),!f)return y=void 0,le({code:1e3,reason:"All Subscriptions Gone"});F++}w.emit("connecting",T);const M=new O(typeof t=="function"?await t():t,Jf);let A,H;function G(){isFinite(o)&&o>0&&(clearTimeout(H),H=setTimeout(()=>{M.readyState===O.OPEN&&(M.send(yr({type:ve.Ping})),w.emit("ping",!1,void 0))},o))}b(J=>{y=void 0,clearTimeout(A),clearTimeout(H),le(J),J instanceof rs&&(M.close(4499,"Terminated"),M.onerror=null,M.onclose=null)}),M.onerror=J=>w.emit("error",J),M.onclose=J=>w.emit("closed",J),M.onopen=async()=>{try{w.emit("opened",M);const J=typeof r=="function"?await r():r;if(M.readyState!==O.OPEN)return;M.send(yr(J?{type:ve.ConnectionInit,payload:J}:{type:ve.ConnectionInit},_)),isFinite(s)&&s>0&&(A=setTimeout(()=>{M.close(je.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")},s)),G()}catch(J){w.emit("error",J),M.close(je.InternalClientError,es(J instanceof Error?J.message:new Error(J).message,"Internal client error"))}};let W=!1;M.onmessage=({data:J})=>{try{const B=Zf(J,C);if(w.emit("message",B),B.type==="ping"||B.type==="pong"){w.emit(B.type,!0,B.payload),B.type==="pong"?G():u||(M.send(yr(B.payload?{type:ve.Pong,payload:B.payload}:{type:ve.Pong})),w.emit("pong",!1,B.payload));return}if(W)return;if(B.type!==ve.ConnectionAck)throw new Error(`First message cannot be of type ${B.type}`);clearTimeout(A),W=!0,w.emit("connected",M,B.payload,T),T=!1,F=0,ee([M,new Promise((se,Me)=>b(Me))])}catch(B){M.onmessage=null,w.emit("error",B),M.close(je.BadResponse,es(B instanceof Error?B.message:new Error(B).message,"Bad response"))}}})())));$.readyState===O.CLOSING&&await P;let N=()=>{};const L=new Promise(ee=>N=ee);return[$,N,Promise.race([L.then(()=>{if(!f){const ee=()=>$.close(1e3,"Normal Closure");isFinite(a)&&a>0?D=setTimeout(()=>{$.readyState===O.OPEN&&ee()},a):ee()}}),P])]}function re($){if($i($)&&(tp($.code)||[je.InternalServerError,je.InternalClientError,je.BadRequest,je.BadResponse,je.Unauthorized,je.SubprotocolNotAcceptable,je.SubscriberAlreadyExists,je.TooManyInitialisationRequests].includes($.code)))throw $;if(q)return!1;if($i($)&&$.code===1e3)return f>0;if(!c||F>=c||!p($)||I!=null&&I($))throw $;return T=!0}n||(async()=>{for(f++;;)try{const[,,$]=await U();await $}catch($){try{if(!re($))return}catch(P){return i==null?void 0:i(P)}}})();function X($,P){const N=S($);let L=!1,ee=!1,le=()=>{f--,L=!0};return(async()=>{for(f++;;)try{const[M,A,H]=await U();if(L)return A();const G=w.onMessage(N,W=>{switch(W.type){case ve.Next:{P.next(W.payload);return}case ve.Error:{ee=!0,L=!0,P.error(W.payload),le();return}case ve.Complete:{L=!0,le();return}}});M.send(yr({id:N,type:ve.Subscribe,payload:$},_)),le=()=>{!L&&M.readyState===O.OPEN&&M.send(yr({id:N,type:ve.Complete},_)),f--,L=!0,A()},await H.finally(G);return}catch(M){if(!re(M))return}})().then(()=>{ee||P.complete()}).catch(M=>{P.error(M)}),()=>{L||le()}}return{on:w.on,subscribe:X,iterate($){const P=[],N={done:!1,error:null,resolve:()=>{}},L=X($,{next(le){P.push(le),N.resolve()},error(le){N.done=!0,N.error=le,N.resolve()},complete(){N.done=!0,N.resolve()}}),ee=function(){return Xf(this,arguments,function*(){for(;;){for(P.length||(yield Vt(new Promise(A=>N.resolve=A)));P.length;)yield yield Vt(P.shift());if(N.error)throw N.error;if(N.done)return yield Vt(void 0)}})}();return ee.throw=async le=>(N.done||(N.done=!0,N.error=le,N.resolve()),{done:!0,value:void 0}),ee.return=async()=>(L(),{done:!0,value:void 0}),ee},async dispose(){if(q=!0,y){const[$]=await y;$.close(1e3,"Normal Closure")}},terminate(){y&&w.emit("closed",new rs)}}}class rs extends Error{constructor(){super(...arguments),this.name="TerminatedCloseEvent",this.message="4499: Terminated",this.code=4499,this.reason="Terminated",this.wasClean=!1}}function $i(e){return gt(e)&&"code"in e&&"reason"in e}function tp(e){return[1e3,1001,1006,1005,1012,1013,1014].includes(e)?!1:e>=1e3&&e<=1999}function rp(e){return typeof e=="function"&&"constructor"in e&&"CLOSED"in e&&"CLOSING"in e&&"CONNECTING"in e&&"OPEN"in e}function ns(e){return new Sr(function(t,r){return new be(function(n){var i,a,o;try{i=r(t).subscribe({next:function(u){if(u.errors?o=e({graphQLErrors:u.errors,response:u,operation:t,forward:r}):Uf(u)&&(o=e({protocolErrors:u.extensions[Xo],response:u,operation:t,forward:r})),o){a=o.subscribe({next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return}n.next(u)},error:function(u){if(o=e({operation:t,networkError:u,graphQLErrors:u&&u.result&&u.result.errors||void 0,forward:r}),o){a=o.subscribe({next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return}n.error(u)},complete:function(){o||n.complete.bind(n)()}})}catch(u){e({networkError:u,operation:t,forward:r}),n.error(u)}return function(){i&&i.unsubscribe(),a&&i.unsubscribe()}})})}(function(e){zr(t,e);function t(r){var n=e.call(this)||this;return n.link=ns(r),n}return t.prototype.request=function(r,n){return this.link.request(r,n)},t})(Sr);var np=function(){if(typeof AbortController>"u")return{controller:!1,signal:!1};var e=new AbortController,t=e.signal;return{controller:e,signal:t}},is=Object.prototype.hasOwnProperty;function ip(e,t){if(e.status>=300){var r=function(){try{return JSON.parse(t)}catch{return t}};Jo(e,r(),"Response not successful: Received status code ".concat(e.status))}try{return JSON.parse(t)}catch(i){var n=i;throw n.name="ServerParseError",n.response=e,n.statusCode=e.status,n.bodyText=t,n}}function ap(e){return function(t){return t.text().then(function(r){return ip(t,r)}).then(function(r){return!Array.isArray(r)&&!is.call(r,"data")&&!is.call(r,"errors")&&Jo(t,r,"Server response was missing for query '".concat(Array.isArray(e)?e.map(function(n){return n.operationName}):e.operationName,"'.")),r})}}var tn=function(e,t){var r;try{r=JSON.stringify(e)}catch(i){var n=pr(54,t,i.message);throw n.parseError=i,n}return r};function op(e,t){var r=[],n=function(p,I){r.push("".concat(p,"=").concat(encodeURIComponent(I)))};if("query"in t&&n("query",t.query),t.operationName&&n("operationName",t.operationName),t.variables){var i=void 0;try{i=tn(t.variables,"Variables map")}catch(p){return{parseError:p}}n("variables",i)}if(t.extensions){var a=void 0;try{a=tn(t.extensions,"Extensions map")}catch(p){return{parseError:p}}n("extensions",a)}var o="",u=e,s=e.indexOf("#");s!==-1&&(o=e.substr(s),u=e.substr(0,s));var c=u.indexOf("?")===-1?"?":"&",l=u+c+r.join("&")+o;return{newURI:l}}var sp={includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},up={accept:"*/*","content-type":"application/json"},cp={method:"POST"},lp={http:sp,headers:up,options:cp},dp=function(e,t){return t(e)};function fp(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var i={},a={};r.forEach(function(p){i=Oe(Oe(Oe({},i),p.options),{headers:Oe(Oe({},i.headers),p.headers)}),p.credentials&&(i.credentials=p.credentials),a=Oe(Oe({},a),p.http)}),i.headers&&(i.headers=pp(i.headers,a.preserveHeaderCase));var o=e.operationName,u=e.extensions,s=e.variables,c=e.query,l={operationName:o,variables:s};return a.includeExtensions&&(l.extensions=u),a.includeQuery&&(l.query=t(c,bi)),{options:i,body:l}}function pp(e,t){if(!t){var r={};return Object.keys(Object(e)).forEach(function(a){r[a.toLowerCase()]=e[a]}),r}var n={};Object.keys(Object(e)).forEach(function(a){n[a.toLowerCase()]={originalName:a,value:e[a]}});var i={};return Object.keys(n).forEach(function(a){i[n[a].originalName]=n[a].value}),i}var mp=function(e,t){var r=e.getContext(),n=r.uri;return n||(typeof t=="function"?t(e):t||"/graphql")};function gp(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function hp(e,t,r=""){if(!arguments.length)throw new TypeError("Argument 1 `value` is required.");if(typeof t!="function")throw new TypeError("Argument 2 `isExtractable` must be a function.");if(typeof r!="string")throw new TypeError("Argument 3 `path` must be a string.");const n=new Map,i=new Map;function a(o,u,s){if(t(o)){const p=i.get(o);return p?p.push(u):i.set(o,[u]),null}const c=Array.isArray(o)||typeof FileList<"u"&&o instanceof FileList,l=gp(o);if(c||l){let p=n.get(o);const I=!p;if(I&&(p=c?[]:o instanceof Object?{}:Object.create(null),n.set(o,p)),!s.has(o)){const g=u?`${u}.`:"",E=new Set(s).add(o);if(c){let S=0;for(const _ of o){const C=a(_,g+S++,E);I&&p.push(C)}}else for(const S in o){const _=a(o[S],g+S,E);I&&(p[S]=_)}}return p}return o}return{clone:a(e,r,new Set),files:i}}function vp(e,t,r){"name"in r?e.append(t,r,r.name):e.append(t,r)}function Sp(e){return typeof File<"u"&&e instanceof File||typeof Blob<"u"&&e instanceof Blob}function yp({uri:e="/graphql",useGETForQueries:t,isExtractableFile:r=Sp,FormData:n,formDataAppendFile:i=vp,print:a=dp,fetch:o,fetchOptions:u,credentials:s,headers:c,includeExtensions:l}={}){const p={http:{includeExtensions:l},options:u,credentials:s,headers:c};return new Sr(I=>{const g=I.getContext(),{clientAwareness:{name:E,version:S}={},headers:_}=g,C={http:g.http,options:g.fetchOptions,credentials:g.credentials,headers:{...E&&{"apollographql-client-name":E},...S&&{"apollographql-client-version":S},..._}},{options:v,body:O}=fp(I,a,lp,p,C),{clone:w,files:b}=hp(O,r,"");let y=mp(I,e);if(b.size){v.headers&&delete v.headers["content-type"];const T=n||FormData,F=new T;F.append("operations",tn(w,"Payload"));const q={};let U=0;b.forEach(re=>{q[++U]=re}),F.append("map",JSON.stringify(q)),U=0,b.forEach((re,X)=>{i(F,String(++U),X)}),v.body=F}else if(t&&!I.query.definitions.some(T=>T.kind==="OperationDefinition"&&T.operation==="mutation")&&(v.method="GET"),v.method==="GET"){const{newURI:T,parseError:F}=op(y,O);if(F)return new be(q=>{q.error(F)});y=T}else v.body=tn(w,"Payload");const{controller:f}=np();typeof f!="boolean"&&(v.signal&&(v.signal.aborted?f.abort():v.signal.addEventListener("abort",()=>{f.abort()},{once:!0})),v.signal=f.signal);const D=o||fetch;return new be(T=>{let F;return D(y,v).then(q=>(I.setContext({response:q}),q)).then(ap(I)).then(q=>{T.next(q),T.complete()}).catch(q=>{F||(q.result&&q.result.errors&&q.result.data&&T.next(q.result),T.error(q))}),()=>{F=!0,typeof f!="boolean"&&f.abort()}})})}const ct=e=>(t,{args:r,canRead:n,toReference:i})=>n(t)?t:i({__typename:e,id:r==null?void 0:r.id}),br=(e,{canRead:t})=>{if(e!==void 0)return t(e)?e:null},bp={Query:{fields:{findImage:{read:ct("Image")},findPerformer:{read:ct("Performer")},findStudio:{read:ct("Studio")},findGroup:{read:ct("Group")},findGallery:{read:ct("Gallery")},findScene:{read:ct("Scene")},findTag:{read:ct("Tag")},findSavedFilter:{read:ct("SavedFilter")}}},Scene:{fields:{studio:{read:br}}},Image:{fields:{studio:{read:br},paths:{merge:!1}}},Group:{fields:{studio:{read:br}}},Gallery:{fields:{studio:{read:br}}},Studio:{fields:{parent_studio:{read:br}}}},Ip={BaseFile:["VideoFile","ImageFile","GalleryFile"],VisualFile:["VideoFile","ImageFile"]},_p=((Ml=document.querySelector("base"))==null?void 0:Ml.getAttribute("href"))??"/",Fi=e=>{let t=new URL(window.location.origin+_p);return e&&(t.pathname+=e),t},Op=()=>{const e=Fi("graphql"),t=Fi("graphql");t.protocol==="https:"?t.protocol="wss:":t.protocol="ws:";const r=yp({uri:e.toString()}),n=ep({url:t.toString(),retryAttempts:1/0,shouldRetry(){return!0}}),i=new Kf(n),a=ns(({networkError:l})=>{if(l&&l.statusCode===401){const p=new URL(Fi("login"),window.location.toString());p.searchParams.append("returnURL",window.location.href),window.location.href=p.toString()}}),o=d.ApolloLink.split(({query:l})=>{const p=Ef(l);return p.kind==="OperationDefinition"&&p.operation==="subscription"},i,r),u=d.ApolloLink.from([a,o]),s=new d.InMemoryCache({typePolicies:bp,possibleTypes:Ip}),c=new d.ApolloClient({link:u,cache:s});return c.subscribe({query:Od}).subscribe({next:()=>{c.resetStore()}}),{cache:s,client:c,wsClient:n}},{client:as}=Op();function os(e,t){const r={};for(const n of t){const{selections:i}=Df(n).selectionSet;for(const a of i){if(!_f(a))continue;const o=a.name.value;r[o]=(u,{DELETE:s})=>s}}e.modify({fields:r}),e.gc()}function ss(e,t,r){const n=e.extract();for(const i in n){if(r!=null&&r.includes(i))continue;const o=n[i].__typename;if(o&&t[o]){const u={};for(const s of t[o])u[s]=(c,{DELETE:l})=>l;e.modify({id:i,fields:u})}}}const Cp=e=>_d({variables:{id:e},skip:e==="new"||e===""}),Dp=e=>as.query({query:mo,variables:{ids:e}}),us=e=>as.query({query:mo,variables:{filter:e.makeFindFilter(),tag_filter:e.makeFilter()}});function Ep(e,t,r){e.modify({fields:{stats(n){return{...n,[t]:n[t]+r}}}})}const cs={Tag:["parents","children"]},wp=[pd,gd,hd,fd,dd,md,po],Tp=()=>ud({update(e,t){var i;const r=(i=t.data)==null?void 0:i.tagCreate;if(!r)return;Ep(e,"tag_count",1);const n={__typename:"Tag",id:r.id};ss(e,cs,e.identify(n)),os(e,[po])}}),xp=()=>ld({update(e,t){var i;const r=(i=t.data)==null?void 0:i.tagUpdate;if(!r)return;const n={__typename:"Tag",id:r.id};ss(e,cs,e.identify(n)),os(e,wp)}}),$p=e=>bd({variables:{path:e}}),Fp=200,Ir=["byte","kibibyte","mebibyte","gibibyte","tebibyte","pebibyte"],Pp=["B","KiB","MiB","GiB","TiB","PiB"],Mp=(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return{size:0,unit:Ir[0]};let t=0,r=e;for(;r>=1024&&t+1<Ir.length;)r/=1024,t++;return{size:r,unit:Ir[t]}},ce=class ce{constructor(t,r,n,i){this.singular=t,this.plural=r,this.shortString=n,this.secs=i}toString(){return this.shortString}};Z(ce,"SECOND",new ce("second","seconds","s",1)),Z(ce,"MINUTE",new ce("minute","minutes","m",60)),Z(ce,"HOUR",new ce("hour","hours","h",ce.MINUTE.secs*60)),Z(ce,"DAY",new ce("day","days","D",ce.HOUR.secs*24)),Z(ce,"WEEK",new ce("week","weeks","W",ce.DAY.secs*7)),Z(ce,"MONTH",new ce("month","months","M",ce.DAY.secs*30)),Z(ce,"YEAR",new ce("year","years","Y",ce.DAY.secs*365)),Z(ce,"DURATIONS",[ce.SECOND,ce.MINUTE,ce.HOUR,ce.DAY,ce.WEEK,ce.MONTH,ce.YEAR]);let ht=ce;class ls{constructor(t,r){this.count=t,this.duration=r}toString(){return this.count.toString()+this.duration.toString()}}const Np=(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return[new ls(0,ht.DURATIONS[0])];const t=[];let r=e;for(let n=ht.DURATIONS.length-1;n>=0;n--){const i=Math.floor(r/ht.DURATIONS[n].secs);i!==0&&(r%=ht.DURATIONS[n].secs,t.push(new ls(i,ht.DURATIONS[n])))}return t},kp=(e=0,t=2)=>Np(e).slice(0,t).join(" "),Ap=e=>{const t=Ir.indexOf(e);return Pp[t]},Lp=e=>Ir.indexOf(e)>=3?1:0,rn=(e,t)=>{let r=!1;e<0&&(r=!0,e=-e);const n=e%1,i=Math.round(n*1e3);let a=Math.trunc(e);const o=a%60;a=(a-o)/60;const u=a%60;a=(a-u)/60;const s=a;let c=String(o).padStart(2,"0");return s===0?c=String(u)+":"+c:(c=String(u).padStart(2,"0")+":"+c,c=String(s)+":"+c),t&&i>0&&(c+="."+i.toString().padStart(3,"0")),r?"-"+c:c},jp=(e,t)=>t===void 0?rn(e):`${rn(e)}-${rn(t)}`,qp=e=>{if(!e)return null;const t=e.split(":");if(t.length>3)return null;let r=t[t.length-1],n=0;if(r.includes(".")){const o=r.split(".");if(o.length!==2)return null;r=o[0];const u=parseInt(o[1],10);if(Number.isNaN(u))return null;n=u/1e3}let i=0,a=1;for(;t.length>0;){const o=t.pop();if(o===void 0)return null;const u=parseInt(o,10);if(Number.isNaN(u))return null;i+=a*u,a*=60}return i+n},Vp=e=>e?e.replace(/^.*[\\/]/,""):"No File Name",Bp=e=>{if(!e)return null;const t=e.split("-");if(t.length!==3)return null;const r=Number(t[0]),n=Math.max(0,Number(t[1])-1),i=Number(t[2]);return new Date(r,n,i,0,0,0,0)},nn=e=>{if(!e)return null;const t=e.split("-");let r=Number(t[0]);Number.isNaN(r)&&(r=new Date().getFullYear());let n=0;t.length>1&&(n=Math.max(0,Number(t[1])-1),(n>11||Number.isNaN(n))&&(n=0));let i=1;return t.length>2&&(i=Number(t[2]),(i>31||Number.isNaN(i))&&(i=1)),new Date(r,n,i,0,0,0,0)},Rp=e=>{if(!e)return null;const t=e.split(" ");let r=null;if(t.length>0&&(r=nn(t[0])),r||(r=new Date),t.length>1){const n=t[1].split(":");r&&n.length>0&&r.setHours(Number(n[0])),r&&n.length>1&&r.setMinutes(Number(n[1])),r&&n.length>2&&r.setSeconds(Number(n[2]))}return r};function ds(e){return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`}function Gp(e){return`${ds(e)} ${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`}const Up=(e,t)=>{if(!e)return 0;const r=nn(e),n=t?nn(t):new Date;if(!r||!n)return 0;let i=n.getFullYear()-r.getFullYear();return(r.getMonth()>n.getMonth()||r.getMonth()>=n.getMonth()&&r.getDate()>n.getDate())&&(i-=1),i},Hp=e=>`${(e/1e6).toFixed(2)} megabits per second`,zp=(e,t)=>{const r=e>t?t:e;if(r>=6144)return"HUGE";if(r>=3840)return"8K";if(r>=3584)return"7K";if(r>=3e3)return"6K";if(r>=2560)return"5K";if(r>=1920)return"4K";if(r>=1440)return"1440p";if(r>=1080)return"1080p";if(r>=720)return"720p";if(r>=540)return"540p";if(r>=480)return"480p";if(r>=360)return"360p";if(r>=240)return"240p";if(r>=144)return"144p"},fs=(e,t)=>!e||e.startsWith("http://")||e.startsWith("https://")?e:t?e.startsWith(t.host)?`${t.protocol}//${e}`:`${t.protocol}//${t.host}/${e}`:`https://${e}`,Wp=(e,t)=>{if(t)return t.hostname;if(e){let r="";try{const n=fs(e);n&&(e=n),r=new URL(e).hostname}catch{r=e}return r}else return""},ps=(e,t,r=!0)=>t?e.formatDate(t,{format:"long",timeZone:r?"utc":void 0}):"",Yp=(e,t,r=!0)=>{if(!t)return"";const n=t.match(/^(\d{4})$/);if(n){const a=parseInt(n[1],10);return e.formatDate(Date.UTC(a,0),{year:"numeric",timeZone:r?"utc":void 0})}const i=t.match(/^(\d{4})-(\d{2})$/);if(i){const a=parseInt(i[1],10),o=parseInt(i[2],10)-1;return e.formatDate(Date.UTC(a,o),{year:"numeric",month:"long",timeZone:r?"utc":void 0})}return e.formatDate(t,{format:"long",timeZone:r?"utc":void 0})},Kp=(e,t,r=!1)=>`${ps(e,t,r)} ${e.formatTime(t,{timeZone:r?"utc":void 0})}`,Pi=["","K","M","B"],et={fileSize:Mp,formatFileSizeUnit:Ap,fileSizeFractionalDigits:Lp,secondsToTimestamp:rn,formatTimestampRange:jp,timestampToSeconds:qp,fileNameFromPath:Vp,stringToDate:Bp,stringToFuzzyDate:nn,stringToFuzzyDateTime:Rp,dateToString:ds,dateTimeToString:Gp,age:Up,bitRate:Hp,resolution:zp,sanitiseURL:fs,domainFromURL:Wp,formatDate:ps,formatFuzzyDate:Yp,formatDateTime:Kp,secondsAsTimeString:kp,abbreviateCounter:(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return{size:0,unit:Pi[0]};let t=0,r=0,n=e;for(;n>=1e3&&t+1<Pi.length;)n/=1e3,t++,r=1;return{size:n,unit:Pi[t],digits:r}},stripQuotes:e=>e.startsWith('"')&&e.endsWith('"')?e.slice(1,-1):e,addQuotes:e=>`"${e}"`},Qp={[m.Equals]:"criterion_modifier.equals",[m.NotEquals]:"criterion_modifier.not_equals",[m.GreaterThan]:"criterion_modifier.greater_than",[m.LessThan]:"criterion_modifier.less_than",[m.IsNull]:"criterion_modifier.is_null",[m.NotNull]:"criterion_modifier.not_null",[m.Includes]:"criterion_modifier.includes",[m.IncludesAll]:"criterion_modifier.includes_all",[m.Excludes]:"criterion_modifier.excludes",[m.MatchesRegex]:"criterion_modifier.matches_regex",[m.NotMatchesRegex]:"criterion_modifier.not_matches_regex",[m.Between]:"criterion_modifier.between",[m.NotBetween]:"criterion_modifier.not_between"};class ms{constructor(t){Z(this,"criterionOption");this.criterionOption=t}isValid(){return!0}clone(){const t=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return t.cloneValues(),t}cloneValues(){}getId(){return`${this.criterionOption.type}`}}class me extends ms{constructor(r,n){super(r);Z(this,"_modifier");Z(this,"_value");this.modifier=r.defaultModifier,this.value=n}get modifier(){return this._modifier}set modifier(r){this._modifier=r}get value(){return this._value}set value(r){this._value=r}isValid(){return!0}modifierCriterionOption(){return this.criterionOption}clone(){const r=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return r.cloneValues(),r}cloneValues(){}static getModifierLabel(r,n){const i=Qp[n];return i?r.formatMessage({id:i}):""}getLabel(r,n=!1){const i=me.getModifierLabel(r,this.modifier);let a="";this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(a=this.getLabelValue(r));const o=n?this.criterionOption.sfwMessageID??this.criterionOption.messageID:this.criterionOption.messageID;return r.formatMessage({id:"criterion_modifier.format_string"},{criterion:r.formatMessage({id:o}),modifierString:i,valueString:a})}toQueryParams(){const r={type:this.criterionOption.type,modifier:this.modifier};return this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(r.value=this.encodeValue()),r}encodeValue(){return this.value}decodeValue(r){r!=null&&(this.value=r)}fromDecodedParams(r){const n=r;this.modifier=n.modifier,this.decodeValue(n.value)}setFromSavedCriterion(r){const n=r;n.value!==void 0&&n.value!==null&&(this.value=n.value),this.modifier=n.modifier}applyToCriterionInput(r){r[this.criterionOption.type]=this.toCriterionInput()}applyToSavedCriterion(r){r[this.criterionOption.type]={value:this.value,modifier:this.modifier}}toCriterionInput(){return{value:this.value,modifier:this.modifier}}}class gs{constructor(t){Z(this,"type");Z(this,"messageID");Z(this,"makeCriterionFn");Z(this,"sfwMessageID");Z(this,"hidden",!1);this.type=t.type,this.messageID=t.messageID,this.makeCriterionFn=t.makeCriterion,this.hidden=t.hidden??!1,this.sfwMessageID=t.sfwMessageID}makeCriterion(t){return this.makeCriterionFn(this,t)}}class de extends gs{constructor(r){super(r);Z(this,"modifierOptions");Z(this,"defaultModifier");Z(this,"options");Z(this,"inputType");this.modifierOptions=r.modifierOptions??[],this.defaultModifier=r.defaultModifier??m.Equals,this.options=r.options,this.inputType=r.inputType}}class Mi extends de{constructor(t,r,n,i,a){const o=[m.Includes,m.Excludes,m.IsNull,m.NotNull];let u=m.Includes;n&&(o.unshift(m.IncludesAll),u=m.IncludesAll),super({messageID:t,type:r,modifierOptions:o,defaultModifier:u,inputType:i,makeCriterion:a||(()=>new _r(this))})}}class _r extends me{constructor(t,r=[]){super(t,r)}cloneValues(){this.value=this.value.map(t=>({...t}))}getLabelValue(t){return this.value.map(r=>r.label).join(", ")}toCriterionInput(){return{value:this.value.map(t=>t.id),modifier:this.modifier}}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull?!0:this.value.length>0}}class Or extends me{constructor(t,r={items:[],excluded:[],depth:0}){super(t,r)}cloneValues(){this.value={...this.value,items:this.value.items.map(t=>({...t})),excluded:this.value.excluded.map(t=>({...t}))}}get modifier(){return this._modifier}set modifier(t){this._modifier=t,this.value&&t!==m.Includes&&t!==m.IncludesAll&&(this.value.excluded=[])}setFromSavedCriterion(t){const{modifier:r,value:n}=t;n!==void 0&&(this.value={items:n.items||[],excluded:n.excluded||[],depth:n.depth||0});const i=this.criterionOption.modifierOptions??[];r===m.Excludes&&i.find(a=>a===m.Excludes)===void 0?(this.modifier=m.Includes,this.value.excluded=[...this.value.excluded,...this.value.items],this.value.items=[]):this.modifier=r}getLabelValue(t){const r=(this.value.items??[]).map(n=>n.label).join(", ");return this.value.depth===0?r:`${r} (+${this.value.depth>0?this.value.depth:"all"})`}toCriterionInput(){let t=[];const r=this.modifier===m.Equals?0:this.value.depth;return this.value.excluded&&(t=this.value.excluded.map(n=>n.id)),{value:this.value.items.map(n=>n.id),excludes:t,modifier:this.modifier,depth:r}}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull?!0:this.value.items.length>0||this.value.excluded&&this.value.excluded.length>0}getLabel(t,r){let n="criterion_modifier.format_string",i=me.getModifierLabel(t,this.modifier),a="",o="";this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(a=this.value.items.map(s=>s.label).join(", "),this.value.excluded&&this.value.excluded.length>0&&(this.value.items.length===0?(i=me.getModifierLabel(t,m.Excludes),a=this.value.excluded.map(s=>s.label).join(", ")):(n="criterion_modifier.format_string_excludes",o=this.value.excluded.map(s=>s.label).join(", "))),this.value.depth!==0&&(n+="_depth"));const u=r?this.criterionOption.sfwMessageID??this.criterionOption.messageID:this.criterionOption.messageID;return t.formatMessage({id:n},{criterion:t.formatMessage({id:u}),modifierString:i,valueString:a,excludedString:o,depth:this.value.depth})}}class an extends de{constructor(t){super({modifierOptions:[m.Equals,m.NotEquals,m.Includes,m.Excludes,m.IsNull,m.NotNull,m.MatchesRegex,m.NotMatchesRegex],defaultModifier:m.Equals,inputType:"text",makeCriterion:()=>new He(this),...t})}}function te(e,t,r){return new an({messageID:t??e,type:e,...r})}class Jp extends de{constructor(t,r){super({messageID:t,type:r,modifierOptions:[m.Equals,m.NotEquals,m.Includes,m.Excludes,m.MatchesRegex,m.NotMatchesRegex],defaultModifier:m.Equals,inputType:"text",makeCriterion:()=>new He(this)})}}function on(e,t){return new Jp(t??e,e)}class He extends me{constructor(t){super(t,"")}getLabelValue(t){return this.value}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull||this.value.length>0}}class Ni extends me{constructor(t,r=[]){super(t,r)}cloneValues(){this.value=this.value.slice()}getLabelValue(t){return this.value.join(", ")}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull||this.value.length>0}}class vt extends de{constructor(t,r,n){super({messageID:t,type:r,modifierOptions:[],defaultModifier:m.Equals,options:["true","false"],makeCriterion:n||(()=>new St(this))})}}function sn(e,t){return new vt(e,e)}class St extends He{toCriterionInput(){return this.value==="true"}isValid(){return this.value==="true"||this.value==="false"}}class hs extends de{constructor(t,r,n){super({messageID:t,type:r,options:["true","false"],makeCriterion:n||(()=>new ki(this))})}}class ki extends He{toCriterionInput(){return this.value}isValid(){return this.value==="true"||this.value==="false"}}class Zp extends de{constructor(t,r){super({messageID:t,type:r,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.IsNull,m.NotNull,m.Between,m.NotBetween],defaultModifier:m.Equals,inputType:"number",makeCriterion:()=>new Ai(this)})}}function vs(e,t){return new Zp(t??e,e)}class Xp extends de{constructor(t,r,n){super({messageID:t,type:r,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.Between,m.NotBetween,m.IsNull,m.NotNull],defaultModifier:m.Equals,inputType:"number",makeCriterion:n||(()=>new Ai(this))})}}class un extends de{constructor(t,r,n,i){super({messageID:t,type:r,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.Between,m.NotBetween],defaultModifier:m.Equals,inputType:"number",makeCriterion:n||(()=>new Ai(this)),...i})}}function K(e,t,r){return new un(t??e,e,void 0,r)}function Cr(e,t){return e===m.Between||e===m.NotBetween?{value:t.value,value2:t.value2}:{value:t.value}}function em(e){return typeof e.value=="object"?e.value:{value:e.value,value2:e.value2}}class Ai extends me{constructor(t){super(t,{value:void 0,value2:void 0})}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(t){typeof t!="object"?this._value={value:t,value2:void 0}:this._value=t}toCriterionInput(){var t,r;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??0,value2:(r=this.value)==null?void 0:r.value2}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return Cr(this.modifier,this.value)}getLabelValue(t){const{value:r,value2:n}=this.value;return this.modifier===m.Between||this.modifier===m.NotBetween?`${r}, ${n??0}`:`${r}`}isValid(){if(this.modifier===m.IsNull||this.modifier===m.NotNull)return!0;const{value:t,value2:r}=this.value;return!(t===void 0||r===void 0&&(this.modifier===m.Between||this.modifier===m.NotBetween))}}let tm=class extends un{constructor(t,r){super(t,r,()=>new Ss(this))}};function cn(e,t){return new tm(e,e)}class rm extends Xp{constructor(t,r){super(t,r,()=>new Ss(this))}}function nm(e,t){return new rm(e,e)}class Ss extends me{constructor(t){super(t,{value:void 0,value2:void 0})}cloneValues(){this.value={...this.value}}toCriterionInput(){var t,r;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??0,value2:(r=this.value)==null?void 0:r.value2}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return Cr(this.modifier,this.value)}getLabelValue(t){const r=et.secondsToTimestamp(this.value.value??0),n=et.secondsToTimestamp(this.value.value2??0);return this.modifier===m.Between||this.modifier===m.NotBetween?`${r}, ${n}`:r}isValid(){if(this.modifier===m.IsNull||this.modifier===m.NotNull)return!0;const{value:t,value2:r}=this.value;return!(t===void 0||r===void 0&&(this.modifier===m.Between||this.modifier===m.NotBetween))}}class im extends de{constructor(t,r){super({messageID:t,type:r,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.IsNull,m.NotNull,m.Between,m.NotBetween],defaultModifier:m.Equals,inputType:"text",makeCriterion:()=>new am(this)})}}function tt(e){return new im(e,e)}class am extends me{constructor(t){super(t,{value:"",value2:void 0})}cloneValues(){this.value={...this.value}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return Cr(this.modifier,this.value)}toCriterionInput(){var t,r;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??"",value2:(r=this.value)==null?void 0:r.value2}}getLabelValue(){const{value:t}=this.value;return this.modifier===m.Between||this.modifier===m.NotBetween?`${t}, ${this.value.value2}`:`${t}`}isValid(){if(this.modifier===m.IsNull||this.modifier===m.NotNull)return!0;const{value:t,value2:r}=this.value;return!(!t||!r&&(this.modifier===m.Between||this.modifier===m.NotBetween))}}class om extends de{constructor(t,r){super({messageID:t,type:r,modifierOptions:[m.GreaterThan,m.LessThan,m.Between,m.NotBetween],defaultModifier:m.GreaterThan,inputType:"text",makeCriterion:()=>new sm(this)})}}function Ie(e){return new om(e,e)}class sm extends me{constructor(t){super(t,{value:"",value2:void 0})}cloneValues(){this.value={...this.value}}toCriterionInput(){return{modifier:this.modifier,value:this.transformValueToInput(this.value.value??""),value2:this.value.value2?this.transformValueToInput(this.value.value2):null}}setFromSavedCriterion(t){super.setFromSavedCriterion(t),this.value=em(t)}encodeValue(){return Cr(this.modifier,this.value)}getLabelValue(){const{value:t}=this.value;return this.modifier===m.Between||this.modifier===m.NotBetween?`${t}, ${this.value.value2}`:`${t}`}transformValueToInput(t){return t=t.trim(),/^\d{4}-\d{2}-\d{2}(( |T)\d{2}:\d{2})?$/.test(t)?t.replace(" ","T"):""}isValid(){if(this.modifier===m.IsNull||this.modifier===m.NotNull)return!0;const{value:t,value2:r}=this.value;return!(!t||!r&&(this.modifier===m.Between||this.modifier===m.NotBetween))}}class um extends an{constructor(t){super({messageID:"unsupported_criterion",type:t,makeCriterion:()=>new cm(this)})}}class cm extends He{getLabel(t){const r=me.getModifierLabel(t,this.modifier);let n="";return this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(n=this.getLabelValue(t)),t.formatMessage({id:"criterion_modifier.format_string"},{criterion:t.formatMessage({id:"criterion.unsupported"},{type:this.criterionOption.type}),modifierString:r,valueString:n})}applyToCriterionInput(){}applyToSavedCriterion(){}setFromSavedCriterion(){}}const ys=new vt("favourite","filter_favorites",()=>new lm);class lm extends St{constructor(){super(ys)}}const bs=new vt("favourite","favorite",()=>new dm);class dm extends St{constructor(){super(bs)}}const Is=new vt("favourite","favorite",()=>new fm);class fm extends St{constructor(){super(Is)}}const ln=new vt("performer_favorite","performer_favorite",()=>new pm);class pm extends St{constructor(){super(ln)}}class mm extends He{toCriterionInput(){return this.value}}class yt extends de{constructor(t,r,n){super({messageID:t,type:r,options:n,modifierOptions:[],defaultModifier:m.Equals,makeCriterion:()=>new mm(this)})}}const gm=new yt("isMissing","is_missing",["title","code","details","director","url","date","rating","cover","galleries","studio","group","performers","tags","stash_id"]),hm=new yt("isMissing","is_missing",["title","details","photographer","url","date","code","rating","galleries","studio","performers","tags"]),vm=new yt("isMissing","is_missing",["url","ethnicity","country","hair_color","eye_color","height","weight","measurements","fake_tits","penis_length","circumcised","career_start","career_end","tattoos","piercings","aliases","gender","birthdate","death_date","disambiguation","tags","image","details","rating","stash_id"]),Sm=new yt("isMissing","is_missing",["title","code","details","photographer","url","date","rating","cover","studio","performers","tags","scenes"]),ym=new yt("isMissing","is_missing",["image","aliases","description","stash_id"]),bm=new yt("isMissing","is_missing",["image","stash_id","details","url","aliases","tags","rating"]),Im=new yt("isMissing","is_missing",["aliases","description","director","date","url","rating","studio","performers","tags","front_image","back_image","scenes"]),dn=new vt("organized","organized",()=>new _m);class _m extends St{constructor(){super(dn)}}const _s=new hs("hasChapters","has_chapters",()=>new Om);class Om extends ki{constructor(){super(_s)}}const Cm=[m.IncludesAll,m.Includes,m.Equals,m.IsNull,m.NotNull],Dm=m.IncludesAll,Em="performers",Bt=new de({messageID:"performers",type:"performers",modifierOptions:Cm,defaultModifier:Dm,inputType:Em,makeCriterion:()=>new Rt});class Rt extends me{constructor(){super(Bt,{items:[],excluded:[]})}cloneValues(){this.value={...this.value,items:this.value.items.map(t=>({...t})),excluded:this.value.excluded.map(t=>({...t}))}}get modifier(){return this._modifier}set modifier(t){this._modifier=t,t!==m.Includes&&t!==m.IncludesAll&&(this.value.excluded=[])}setFromSavedCriterion(t){const{modifier:r,value:n}=t;Array.isArray(n)?this.value={items:n,excluded:[]}:n!==void 0&&(this.value={items:n.items||[],excluded:n.excluded||[]}),r===m.Excludes?(this.modifier=m.Includes,this.value.excluded=[...this.value.excluded,...this.value.items],this.value.items=[]):this.modifier=r}getLabelValue(t){return this.value.items.map(r=>r.label).join(", ")}toCriterionInput(){let t=[];return this.value.excluded&&(t=this.value.excluded.map(r=>r.id)),{value:this.value.items.map(r=>r.id),excludes:t,modifier:this.modifier}}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull?!0:this.value.items.length>0||this.value.excluded&&this.value.excluded.length>0}getLabel(t){let r="criterion_modifier.format_string",n=me.getModifierLabel(t,this.modifier),i="",a="";return this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(i=this.value.items.map(o=>o.label).join(", "),this.value.excluded&&this.value.excluded.length>0&&(this.value.items.length===0?(n=me.getModifierLabel(t,m.Excludes),i=this.value.excluded.map(o=>o.label).join(", ")):(r="criterion_modifier.format_string_excludes",a=this.value.excluded.map(o=>o.label).join(", ")))),t.formatMessage({id:r},{criterion:t.formatMessage({id:this.criterionOption.messageID}),modifierString:n,valueString:i,excludedString:a})}}const Os=new Map([["144p",Fe.VeryLow],["240p",Fe.Low],["360p",Fe.R360P],["480p",Fe.Standard],["540p",Fe.WebHd],["720p",Fe.StandardHd],["1080p",Fe.FullHd],["1440p",Fe.QuadHd],["4k",Fe.FourK],["5k",Fe.FiveK],["6k",Fe.SixK],["7k",Fe.SevenK],["8k",Fe.EightK],["Huge",Fe.Huge]]),wm=(e,t)=>e?Os.get(e):void 0,Tm=Array.from(Os.keys());class Cs extends de{constructor(t,r){super({messageID:t,type:t,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan],options:Tm,makeCriterion:r})}}class Ds extends He{toCriterionInput(){const t=wm(this.value);if(t!==void 0)return{value:t,modifier:this.modifier}}}const Li=new Cs("resolution",()=>new xm);class xm extends Ds{constructor(){super(Li)}}const Es=new Cs("average_resolution",()=>new $m);class $m extends Ds{constructor(){super(Es)}}const ws="scenes",Ts=new Mi("scenes","scenes",!0,ws,()=>new Fm);class Fm extends _r{constructor(){super(Ts)}}const Pm=[m.Includes,m.Excludes],Mm=m.Includes,xs=new de({messageID:"scenes",type:"scenes",modifierOptions:Pm,defaultModifier:Mm,inputType:ws,makeCriterion:()=>new $s});class $s extends _r{constructor(){super(xs)}}const Nm=[m.Includes,m.IsNull,m.NotNull],km=m.Includes,Fs="studios",Gt=new de({messageID:"studios",type:"studios",modifierOptions:Nm,defaultModifier:km,inputType:Fs,makeCriterion:()=>new Ut});class Ut extends Or{constructor(){super(Gt)}}const Ps=new Mi("parent_studios","parents",!1,Fs,()=>new Ms);class Ms extends _r{constructor(){super(Ps)}}const Ns=[m.IncludesAll,m.Includes,m.Equals,m.IsNull,m.NotNull],ji=[m.IncludesAll,m.Includes,m.IsNull,m.NotNull],Am=m.IncludesAll,Lm="tags";class Dr extends de{constructor(t,r,n){super({messageID:t,type:r,modifierOptions:n,defaultModifier:Am,inputType:Lm,makeCriterion:()=>new fn(this)})}}const lt=new Dr("tags","tags",Ns),jm=new Dr("scene_tags","scene_tags",Ns),qi=new Dr("performer_tags","performer_tags",ji),ks=new Dr("parent_tags","parents",ji),As=new Dr("sub_tags","children",ji);class fn extends Or{}const Vi=["title","path","rating","file_mod_time","tag_count","performer_count","random"];class _e{constructor(t,r,n,i){Z(this,"defaultSortBy","");Z(this,"sortByOptions",[]);Z(this,"displayModeOptions",[]);Z(this,"criterionOptions",[]);this.defaultSortBy=t,this.sortByOptions=[...r,_e.createSortBy("created_at"),_e.createSortBy("updated_at")],this.displayModeOptions=n,this.criterionOptions=i}static createSortBy(t){return{messageID:t,value:t}}}var ge=(e=>(e[e.Grid=0]="Grid",e[e.List=1]="List",e[e.Wall=2]="Wall",e[e.Tagger=3]="Tagger",e))(ge||{});const qm={type:"stars",starPrecision:"full"};function Vm(e,t){let r=t;r||(r=1);const n=1/r;return Math.round(e*n)/n}function Bm(e){switch(e){case"full":return 1;case"half":return .5;case"quarter":return .25;case"tenth":return .1;default:return 1}}function Bi(e,t){if(!e)return null;const{type:r,starPrecision:n}=t,i=r==="decimal"?.1:Bm(n??"full"),o=100/(r==="decimal"?10:5);return Vm(e/o,i)}function Rm(e,t){const n=100/((t??"stars")==="decimal"?10:5);return Math.round(e*n)}const Gm=[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.Between,m.NotBetween,m.IsNull,m.NotNull];function Um(e){return(e==null?void 0:e.ui.ratingSystemOptions)??qm}const bt=new de({messageID:"rating",type:"rating100",modifierOptions:Gm,defaultModifier:m.Equals,makeCriterion:(e,t)=>new Hm(Um(t)),inputType:"number"});class Hm extends me{constructor(r){super(bt,{value:0,value2:void 0});Z(this,"ratingSystem");this.ratingSystem=r}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(r){typeof r!="object"?this._value={value:Rm(r,this.ratingSystem.type),value2:void 0}:this._value=r}toCriterionInput(){return{modifier:this.modifier,value:this.value.value??0,value2:this.value.value2}}setFromSavedCriterion(r){super.setFromSavedCriterion(r)}encodeValue(){return Cr(this.modifier,this.value)}getLabelValue(){const{value:r,value2:n}=this.value;return this.modifier===m.Between||this.modifier===m.NotBetween?`${Bi(r,this.ratingSystem)??0}, ${Bi(n,this.ratingSystem)??0}`:`${Bi(r,this.ratingSystem)??0}`}}const pn=new an({messageID:"path",type:"path",defaultModifier:m.Includes,makeCriterion:()=>new zm});class zm extends He{constructor(){super(pn)}}function Wm(){this.__data__=[],this.size=0}function Ls(e,t){return e===t||e!==e&&t!==t}function mn(e,t){for(var r=e.length;r--;)if(Ls(e[r][0],t))return r;return-1}var Ym=Array.prototype,Km=Ym.splice;function Qm(e){var t=this.__data__,r=mn(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Km.call(t,r,1),--this.size,!0}function Jm(e){var t=this.__data__,r=mn(t,e);return r<0?void 0:t[r][1]}function Zm(e){return mn(this.__data__,e)>-1}function Xm(e,t){var r=this.__data__,n=mn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function rt(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}rt.prototype.clear=Wm,rt.prototype.delete=Qm,rt.prototype.get=Jm,rt.prototype.has=Zm,rt.prototype.set=Xm;function eg(){this.__data__=new rt,this.size=0}function tg(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function rg(e){return this.__data__.get(e)}function ng(e){return this.__data__.has(e)}var js=typeof global=="object"&&global&&global.Object===Object&&global,ig=typeof self=="object"&&self&&self.Object===Object&&self,ze=js||ig||Function("return this")(),Ht=ze.Symbol,qs=Object.prototype,ag=qs.hasOwnProperty,og=qs.toString,Er=Ht?Ht.toStringTag:void 0;function sg(e){var t=ag.call(e,Er),r=e[Er];try{e[Er]=void 0;var n=!0}catch{}var i=og.call(e);return n&&(t?e[Er]=r:delete e[Er]),i}var ug=Object.prototype,cg=ug.toString;function lg(e){return cg.call(e)}var dg="[object Null]",fg="[object Undefined]",Vs=Ht?Ht.toStringTag:void 0;function zt(e){return e==null?e===void 0?fg:dg:Vs&&Vs in Object(e)?sg(e):lg(e)}function It(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var pg="[object AsyncFunction]",mg="[object Function]",gg="[object GeneratorFunction]",hg="[object Proxy]";function Bs(e){if(!It(e))return!1;var t=zt(e);return t==mg||t==gg||t==pg||t==hg}var Ri=ze["__core-js_shared__"],Rs=function(){var e=/[^.]+$/.exec(Ri&&Ri.keys&&Ri.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function vg(e){return!!Rs&&Rs in e}var Sg=Function.prototype,yg=Sg.toString;function _t(e){if(e!=null){try{return yg.call(e)}catch{}try{return e+""}catch{}}return""}var bg=/[\\^$.*+?()[\]{}|]/g,Ig=/^\[object .+?Constructor\]$/,_g=Function.prototype,Og=Object.prototype,Cg=_g.toString,Dg=Og.hasOwnProperty,Eg=RegExp("^"+Cg.call(Dg).replace(bg,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function wg(e){if(!It(e)||vg(e))return!1;var t=Bs(e)?Eg:Ig;return t.test(_t(e))}function Tg(e,t){return e==null?void 0:e[t]}function Ot(e,t){var r=Tg(e,t);return wg(r)?r:void 0}var wr=Ot(ze,"Map"),Tr=Ot(Object,"create");function xg(){this.__data__=Tr?Tr(null):{},this.size=0}function $g(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Fg="__lodash_hash_undefined__",Pg=Object.prototype,Mg=Pg.hasOwnProperty;function Ng(e){var t=this.__data__;if(Tr){var r=t[e];return r===Fg?void 0:r}return Mg.call(t,e)?t[e]:void 0}var kg=Object.prototype,Ag=kg.hasOwnProperty;function Lg(e){var t=this.__data__;return Tr?t[e]!==void 0:Ag.call(t,e)}var jg="__lodash_hash_undefined__";function qg(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Tr&&t===void 0?jg:t,this}function Ct(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ct.prototype.clear=xg,Ct.prototype.delete=$g,Ct.prototype.get=Ng,Ct.prototype.has=Lg,Ct.prototype.set=qg;function Vg(){this.size=0,this.__data__={hash:new Ct,map:new(wr||rt),string:new Ct}}function Bg(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function gn(e,t){var r=e.__data__;return Bg(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Rg(e){var t=gn(this,e).delete(e);return this.size-=t?1:0,t}function Gg(e){return gn(this,e).get(e)}function Ug(e){return gn(this,e).has(e)}function Hg(e,t){var r=gn(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function Wt(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Wt.prototype.clear=Vg,Wt.prototype.delete=Rg,Wt.prototype.get=Gg,Wt.prototype.has=Ug,Wt.prototype.set=Hg;var zg=200;function Wg(e,t){var r=this.__data__;if(r instanceof rt){var n=r.__data__;if(!wr||n.length<zg-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Wt(n)}return r.set(e,t),this.size=r.size,this}function Yt(e){var t=this.__data__=new rt(e);this.size=t.size}Yt.prototype.clear=eg,Yt.prototype.delete=tg,Yt.prototype.get=rg,Yt.prototype.has=ng,Yt.prototype.set=Wg;function Yg(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var Gs=function(){try{var e=Ot(Object,"defineProperty");return e({},"",{}),e}catch{}}();function Kg(e,t,r){t=="__proto__"&&Gs?Gs(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Qg=Object.prototype,Jg=Qg.hasOwnProperty;function Zg(e,t,r){var n=e[t];(!(Jg.call(e,t)&&Ls(n,r))||r===void 0&&!(t in e))&&Kg(e,t,r)}function Xg(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Kt(e){return e!=null&&typeof e=="object"}var eh="[object Arguments]";function Us(e){return Kt(e)&&zt(e)==eh}var Hs=Object.prototype,th=Hs.hasOwnProperty,rh=Hs.propertyIsEnumerable,nh=Us(function(){return arguments}())?Us:function(e){return Kt(e)&&th.call(e,"callee")&&!rh.call(e,"callee")},Gi=Array.isArray;function ih(){return!1}var zs=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ws=zs&&typeof module=="object"&&module&&!module.nodeType&&module,ah=Ws&&Ws.exports===zs,Ys=ah?ze.Buffer:void 0,oh=Ys?Ys.isBuffer:void 0,Ks=oh||ih,sh=9007199254740991,uh=/^(?:0|[1-9]\d*)$/;function ch(e,t){var r=typeof e;return t=t??sh,!!t&&(r=="number"||r!="symbol"&&uh.test(e))&&e>-1&&e%1==0&&e<t}var lh=9007199254740991;function Qs(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=lh}var dh="[object Arguments]",fh="[object Array]",ph="[object Boolean]",mh="[object Date]",gh="[object Error]",hh="[object Function]",vh="[object Map]",Sh="[object Number]",yh="[object Object]",bh="[object RegExp]",Ih="[object Set]",_h="[object String]",Oh="[object WeakMap]",Ch="[object ArrayBuffer]",Dh="[object DataView]",Eh="[object Float32Array]",wh="[object Float64Array]",Th="[object Int8Array]",xh="[object Int16Array]",$h="[object Int32Array]",Fh="[object Uint8Array]",Ph="[object Uint8ClampedArray]",Mh="[object Uint16Array]",Nh="[object Uint32Array]",pe={};pe[Eh]=pe[wh]=pe[Th]=pe[xh]=pe[$h]=pe[Fh]=pe[Ph]=pe[Mh]=pe[Nh]=!0,pe[dh]=pe[fh]=pe[Ch]=pe[ph]=pe[Dh]=pe[mh]=pe[gh]=pe[hh]=pe[vh]=pe[Sh]=pe[yh]=pe[bh]=pe[Ih]=pe[_h]=pe[Oh]=!1;function kh(e){return Kt(e)&&Qs(e.length)&&!!pe[zt(e)]}function Ui(e){return function(t){return e(t)}}var Js=typeof exports=="object"&&exports&&!exports.nodeType&&exports,xr=Js&&typeof module=="object"&&module&&!module.nodeType&&module,Ah=xr&&xr.exports===Js,Hi=Ah&&js.process,Qt=function(){try{var e=xr&&xr.require&&xr.require("util").types;return e||Hi&&Hi.binding&&Hi.binding("util")}catch{}}(),Zs=Qt&&Qt.isTypedArray,Lh=Zs?Ui(Zs):kh,jh=Object.prototype,qh=jh.hasOwnProperty;function Vh(e,t){var r=Gi(e),n=!r&&nh(e),i=!r&&!n&&Ks(e),a=!r&&!n&&!i&&Lh(e),o=r||n||i||a,u=o?Xg(e.length,String):[],s=u.length;for(var c in e)qh.call(e,c)&&!(o&&(c=="length"||i&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||ch(c,s)))&&u.push(c);return u}var Bh=Object.prototype;function Xs(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Bh;return e===r}function eu(e,t){return function(r){return e(t(r))}}var Rh=eu(Object.keys,Object),Gh=Object.prototype,Uh=Gh.hasOwnProperty;function Hh(e){if(!Xs(e))return Rh(e);var t=[];for(var r in Object(e))Uh.call(e,r)&&r!="constructor"&&t.push(r);return t}function zh(e){return e!=null&&Qs(e.length)&&!Bs(e)}function Wh(e){return zh(e)?Vh(e):Hh(e)}var tu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ru=tu&&typeof module=="object"&&module&&!module.nodeType&&module,Yh=ru&&ru.exports===tu,nu=Yh?ze.Buffer:void 0;nu&&nu.allocUnsafe;function Kh(e,t){return e.slice()}function Qh(e,t){for(var r=-1,n=e==null?0:e.length,i=0,a=[];++r<n;){var o=e[r];t(o,r,e)&&(a[i++]=o)}return a}function Jh(){return[]}var Zh=Object.prototype,Xh=Zh.propertyIsEnumerable,iu=Object.getOwnPropertySymbols,ev=iu?function(e){return e==null?[]:(e=Object(e),Qh(iu(e),function(t){return Xh.call(e,t)}))}:Jh;function tv(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}var rv=eu(Object.getPrototypeOf,Object);function nv(e,t,r){var n=t(e);return Gi(e)?n:tv(n,r(e))}function iv(e){return nv(e,Wh,ev)}var zi=Ot(ze,"DataView"),Wi=Ot(ze,"Promise"),Yi=Ot(ze,"Set"),Ki=Ot(ze,"WeakMap"),au="[object Map]",av="[object Object]",ou="[object Promise]",su="[object Set]",uu="[object WeakMap]",cu="[object DataView]",ov=_t(zi),sv=_t(wr),uv=_t(Wi),cv=_t(Yi),lv=_t(Ki),nt=zt;(zi&&nt(new zi(new ArrayBuffer(1)))!=cu||wr&&nt(new wr)!=au||Wi&&nt(Wi.resolve())!=ou||Yi&&nt(new Yi)!=su||Ki&&nt(new Ki)!=uu)&&(nt=function(e){var t=zt(e),r=t==av?e.constructor:void 0,n=r?_t(r):"";if(n)switch(n){case ov:return cu;case sv:return au;case uv:return ou;case cv:return su;case lv:return uu}return t});var dv=Object.prototype,fv=dv.hasOwnProperty;function pv(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&fv.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var lu=ze.Uint8Array;function Qi(e){var t=new e.constructor(e.byteLength);return new lu(t).set(new lu(e)),t}function mv(e,t){var r=Qi(e.buffer);return new e.constructor(r,e.byteOffset,e.byteLength)}var gv=/\w*$/;function hv(e){var t=new e.constructor(e.source,gv.exec(e));return t.lastIndex=e.lastIndex,t}var du=Ht?Ht.prototype:void 0,fu=du?du.valueOf:void 0;function vv(e){return fu?Object(fu.call(e)):{}}function Sv(e,t){var r=Qi(e.buffer);return new e.constructor(r,e.byteOffset,e.length)}var yv="[object Boolean]",bv="[object Date]",Iv="[object Map]",_v="[object Number]",Ov="[object RegExp]",Cv="[object Set]",Dv="[object String]",Ev="[object Symbol]",wv="[object ArrayBuffer]",Tv="[object DataView]",xv="[object Float32Array]",$v="[object Float64Array]",Fv="[object Int8Array]",Pv="[object Int16Array]",Mv="[object Int32Array]",Nv="[object Uint8Array]",kv="[object Uint8ClampedArray]",Av="[object Uint16Array]",Lv="[object Uint32Array]";function jv(e,t,r){var n=e.constructor;switch(t){case wv:return Qi(e);case yv:case bv:return new n(+e);case Tv:return mv(e);case xv:case $v:case Fv:case Pv:case Mv:case Nv:case kv:case Av:case Lv:return Sv(e);case Iv:return new n;case _v:case Dv:return new n(e);case Ov:return hv(e);case Cv:return new n;case Ev:return vv(e)}}var pu=Object.create,qv=function(){function e(){}return function(t){if(!It(t))return{};if(pu)return pu(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();function Vv(e){return typeof e.constructor=="function"&&!Xs(e)?qv(rv(e)):{}}var Bv="[object Map]";function Rv(e){return Kt(e)&&nt(e)==Bv}var mu=Qt&&Qt.isMap,Gv=mu?Ui(mu):Rv,Uv="[object Set]";function Hv(e){return Kt(e)&&nt(e)==Uv}var gu=Qt&&Qt.isSet,zv=gu?Ui(gu):Hv,hu="[object Arguments]",Wv="[object Array]",Yv="[object Boolean]",Kv="[object Date]",Qv="[object Error]",vu="[object Function]",Jv="[object GeneratorFunction]",Zv="[object Map]",Xv="[object Number]",Su="[object Object]",eS="[object RegExp]",tS="[object Set]",rS="[object String]",nS="[object Symbol]",iS="[object WeakMap]",aS="[object ArrayBuffer]",oS="[object DataView]",sS="[object Float32Array]",uS="[object Float64Array]",cS="[object Int8Array]",lS="[object Int16Array]",dS="[object Int32Array]",fS="[object Uint8Array]",pS="[object Uint8ClampedArray]",mS="[object Uint16Array]",gS="[object Uint32Array]",fe={};fe[hu]=fe[Wv]=fe[aS]=fe[oS]=fe[Yv]=fe[Kv]=fe[sS]=fe[uS]=fe[cS]=fe[lS]=fe[dS]=fe[Zv]=fe[Xv]=fe[Su]=fe[eS]=fe[tS]=fe[rS]=fe[nS]=fe[fS]=fe[pS]=fe[mS]=fe[gS]=!0,fe[Qv]=fe[vu]=fe[iS]=!1;function hn(e,t,r,n,i,a){var o;if(o!==void 0)return o;if(!It(e))return e;var u=Gi(e);if(u)o=pv(e);else{var s=nt(e),c=s==vu||s==Jv;if(Ks(e))return Kh(e);if(s==Su||s==hu||c&&!i)o=c?{}:Vv(e);else{if(!fe[s])return i?e:{};o=jv(e,s)}}a||(a=new Yt);var l=a.get(e);if(l)return l;a.set(e,o),zv(e)?e.forEach(function(g){o.add(hn(g,t,r,g,e,a))}):Gv(e)&&e.forEach(function(g,E){o.set(E,hn(g,t,r,E,e,a))});var p=iv,I=u?void 0:p(e);return Yg(I||e,function(g,E){I&&(E=g,g=e[E]),Zg(o,E,hn(g,t,r,E,e,a))}),o}var hS=1,vS=4;function vn(e){return hn(e,hS|vS)}function yu(e){return e?e.map(t=>t).join(", "):""}const dt=new gs({type:"custom_fields",messageID:"custom_fields.title",makeCriterion:()=>new bu});class bu extends ms{constructor(){super(dt);Z(this,"value",[])}isValid(){return this.value.length>0}applyToCriterionInput(r){r.custom_fields=vn(this.value)}applyToSavedCriterion(r){r.custom_fields=vn(this.value)}getLabel(r){var s;if(this.value.length===0)return"";const n=this.value[0];let i="",a="";n.modifier!==m.IsNull&&n.modifier!==m.NotNull&&(((s=n.value)==null?void 0:s.length)??0)>0&&(a=yu(n.value));const o=me.getModifierLabel(r,n.modifier),u={criterion:n.field,modifierString:o,valueString:a,others:""};return this.value.length===1?i="custom_fields.criteria_format_string":(i="custom_fields.criteria_format_string_others",u.others=(this.value.length-1).toString()),r.formatMessage({id:i},u)}getValueLabel(r,n){var u;let i="";n.modifier!==m.IsNull&&n.modifier!==m.NotNull&&(((u=n.value)==null?void 0:u.length)??0)>0&&(i=yu(n.value));const a=me.getModifierLabel(r,n.modifier),o={criterion:n.field,modifierString:a,valueString:i};return r.formatMessage({id:"custom_fields.criteria_format_string"},o)}toQueryParams(){return{type:this.criterionOption.type,value:this.value}}fromDecodedParams(r){const n=r;this.value=vn(n.value)}setFromSavedCriterion(r){this.value=vn(r)}}const Iu=[m.Includes],_u=m.Includes,Ou="folders",Ji=new de({messageID:"folder",type:"folder",modifierOptions:Iu,defaultModifier:_u,inputType:Ou,makeCriterion:()=>new SS}),Cu=new de({messageID:"parent_folder",type:"parent_folder",modifierOptions:Iu,defaultModifier:_u,inputType:Ou,makeCriterion:()=>new yS});class SS extends Or{constructor(){super(Ji)}applyToCriterionInput(t){t.files_filter={parent_folder:this.toCriterionInput()}}}class yS extends Or{constructor(){super(Cu)}applyToCriterionInput(t){t.parent_folder=this.toCriterionInput()}}const bS="path",IS=["date",...Vi].map(_e.createSortBy).concat([{messageID:"performer_age",value:"performer_age"},{messageID:"image_count",value:"images_count"},{messageID:"zip_file_count",value:"file_count"}]),_S=[ge.Grid,ge.List,ge.Wall],OS=K("performer_age"),CS=[te("title"),te("code","scene_code"),te("details"),te("photographer"),pn,Cu,te("checksum","media_info.md5"),bt,dn,Es,Sm,lt,_s,K("tag_count"),qi,Bt,K("performer_count"),OS,ln,K("image_count"),Ts,Gt,te("url"),K("file_count","zip_file_count"),tt("date"),Ie("created_at"),Ie("updated_at"),dt],DS=new _e(bS,IS,_S,CS),Du=new Map([["Landscape",Gr.Landscape],["Portrait",Gr.Portrait],["Square",Gr.Square]]),ES=(e,t)=>e?Du.get(e):void 0,wS=Array.from(Du.keys());class TS extends Ni{toCriterionInput(){return{value:this.value.map(t=>ES(t)).filter(t=>t)}}}class xS extends de{constructor(t){super({messageID:t,type:t,options:wS,makeCriterion:()=>new TS(this)})}}const Eu=new xS("orientation"),$S="galleries",Zi=new Mi("galleries","galleries",!0,$S,()=>new wu);class wu extends _r{constructor(){super(Zi)}}const FS={phash:"media_info.phash",stash_id:"stash_id",title:"title",url:"url"},Tu=["phash","stash_id","title","url"],Xi=new de({messageID:"media_info.phash",type:"phash_distance",inputType:"text",modifierOptions:[m.Equals,m.NotEquals,m.IsNull,m.NotNull],makeCriterion:()=>new ea});class ea extends me{constructor(){super(Xi,{value:"",distance:0})}cloneValues(){this.value={...this.value}}getLabelValue(){const{value:t,distance:r}=this.value;return(this.modifier===m.Equals||this.modifier===m.NotEquals)&&r?`${t} (${r})`:`${t}`}toCriterionInput(){return{value:this.value.value,modifier:this.modifier,distance:this.value.distance}}}const xu=new de({messageID:"duplicated",type:"duplicated",modifierOptions:[],defaultModifier:m.Equals,makeCriterion:()=>new PS});class PS extends me{constructor(){super(xu,{})}cloneValues(){this.value={...this.value}}getLabel(t){const r=[],n=t.formatMessage({id:"true"}),i=t.formatMessage({id:"false"});for(const a of Tu){const o=this.value[a];if(o!==void 0){const u=t.formatMessage({id:FS[a]});r.push(`${u}: ${o?n:i}`)}}return r.length===0&&this.value.duplicated!==void 0?`${t.formatMessage({id:"duplicated_phash"})}: ${this.value.duplicated?n:i}`:r.length===0?t.formatMessage({id:"duplicated"}):r.join(", ")}getLabelValue(t){return t.formatMessage({id:"duplicated"})}toCriterionInput(){return{duplicated:this.value.duplicated,distance:this.value.distance,phash:this.value.phash,url:this.value.url,stash_id:this.value.stash_id,title:this.value.title}}setFromSavedCriterion(t){const r=t;r.value!==void 0?typeof r.value=="object"?this.value=r.value:typeof r.value=="string"&&(this.value={phash:r.value==="true"}):typeof r=="object"&&(this.value=r),r.modifier&&(this.modifier=r.modifier)}isValid(){return Tu.some(r=>this.value[r]!==void 0)||this.value.duplicated!==void 0}}const MS="path",NS=["filesize","file_count","date","resolution","performer_age",...Vi].map(_e.createSortBy).concat([{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"}]),kS=[ge.Grid,ge.Wall],AS=K("performer_age"),LS=[te("title"),te("code","scene_code"),te("details"),te("photographer"),on("checksum","media_info.md5"),Xi,pn,Ji,Zi,dn,K("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Li,Eu,hm,lt,bt,K("tag_count"),qi,Bt,K("performer_count"),AS,ln,Gt,te("url"),tt("date"),K("file_count"),Ie("created_at"),Ie("updated_at"),dt],jS=new _e(MS,NS,kS,LS),$u="groups",Fu=[m.Includes,m.Excludes,m.IsNull,m.NotNull],Pu=m.Includes;class ta extends de{constructor(t,r){super({messageID:t,type:r,modifierOptions:Fu,defaultModifier:Pu,inputType:$u,makeCriterion:()=>new $r(this)})}}const Sn=new ta("groups","groups");class $r extends Or{}const Mu=new ta("containing_groups","containing_groups"),Nu=new ta("sub_groups","sub_groups"),qS=new de({messageID:"groups",type:"movies",modifierOptions:Fu,defaultModifier:Pu,inputType:$u,hidden:!0,makeCriterion:()=>new $r(Sn)}),VS="name",BS=["name","random","date","duration","rating","tag_count","sub_group_description","sub_group_order"].map(_e.createSortBy).concat([{messageID:"scene_count",value:"scenes_count"},{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"}]),RS=[ge.Grid],GS=[Gt,Im,te("url"),te("name"),te("director"),te("synopsis"),cn("duration"),bt,Bt,tt("date"),K("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Mu,Nu,K("containing_group_count"),K("sub_group_count"),lt,K("tag_count"),K("scene_count"),Ie("created_at"),Ie("updated_at"),dt],US=new _e(VS,BS,RS,GS),ku=new Map([["Female",Ne.Female],["Male",Ne.Male],["Transgender Male",Ne.TransgenderMale],["Transgender Female",Ne.TransgenderFemale],["Intersex",Ne.Intersex],["Non-Binary",Ne.NonBinary]]);Ne.Female,Ne.Male,Ne.TransgenderFemale,Ne.TransgenderMale,Ne.Intersex,Ne.NonBinary;const HS=(e,t)=>{if(!e)return;const r=Object.entries(Ne).find(i=>i[1]===e);return r?r[1]:ku.get(e)},zS=Array.from(ku.keys()),Au=new de({messageID:"gender",type:"gender",options:zS,modifierOptions:[m.Includes,m.Excludes,m.IsNull,m.NotNull],defaultModifier:m.Includes,makeCriterion:()=>new WS});class WS extends Ni{constructor(t=[]){super(Au,t)}toCriterionInput(){return{value_list:this.value.map(r=>HS(r)),modifier:this.modifier}}setFromSavedCriterion(t){typeof t.value=="string"&&(t={...t,value:[t.value]}),super.setFromSavedCriterion(t)}}const Lu=new Map([["Uncut",Rr.Uncut],["Cut",Rr.Cut]]),YS=(e,t)=>{if(!e)return;const r=Object.entries(Rr).find(i=>i[1]===e);return r?r[1]:Lu.get(e)},KS=Array.from(Lu.keys()),ju=new de({messageID:"circumcised",type:"circumcised",modifierOptions:[m.Includes,m.Excludes,m.IsNull,m.NotNull],defaultModifier:m.Includes,options:KS,makeCriterion:()=>new QS});class QS extends Ni{constructor(){super(ju)}toCriterionInput(){return{value:this.value.map(r=>YS(r)),modifier:this.modifier}}}const Fr=new de({messageID:"stash_id",type:"stash_id_endpoint",modifierOptions:[m.Equals,m.NotEquals,m.IsNull,m.NotNull],makeCriterion:()=>new JS});class JS extends me{constructor(){super(Fr,{endpoint:"",stashID:""})}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(t){typeof t!="object"?this._value={endpoint:"",stashID:t}:this._value=t}toCriterionInput(){return{endpoint:this.value.endpoint,stash_id:this.value.stashID,modifier:this.modifier}}getLabel(t){const r=me.getModifierLabel(t,this.modifier);let n="";return this.modifier!==m.IsNull&&this.modifier!==m.NotNull?n=this.getLabelValue(t):this.value.endpoint&&(n="("+this.value.endpoint+")"),t.formatMessage({id:"criterion_modifier.format_string"},{criterion:t.formatMessage({id:this.criterionOption.messageID}),modifierString:r,valueString:n})}getLabelValue(t){let r=this.value.stashID;return this.value.endpoint&&(r+=" ("+this.value.endpoint+")"),r}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}toQueryParams(){super.toQueryParams();let t;return(this.modifier===m.IsNull||this.modifier===m.NotNull)&&!this.value.endpoint?t={type:this.criterionOption.type,modifier:this.modifier}:t={type:this.criterionOption.type,value:this.value,modifier:this.modifier},t}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull||this.value.stashID.length>0}}var qu={};const ZS=[["AF","AFG","004","ISO 3166-2:AF"],["AL","ALB","008","ISO 3166-2:AL"],["DZ","DZA","012","ISO 3166-2:DZ"],["AS","ASM","016","ISO 3166-2:AS"],["AD","AND","020","ISO 3166-2:AD"],["AO","AGO","024","ISO 3166-2:AO"],["AI","AIA","660","ISO 3166-2:AI"],["AQ","ATA","010","ISO 3166-2:AQ"],["AG","ATG","028","ISO 3166-2:AG"],["AR","ARG","032","ISO 3166-2:AR"],["AM","ARM","051","ISO 3166-2:AM"],["AW","ABW","533","ISO 3166-2:AW"],["AU","AUS","036","ISO 3166-2:AU"],["AT","AUT","040","ISO 3166-2:AT"],["AZ","AZE","031","ISO 3166-2:AZ"],["BS","BHS","044","ISO 3166-2:BS"],["BH","BHR","048","ISO 3166-2:BH"],["BD","BGD","050","ISO 3166-2:BD"],["BB","BRB","052","ISO 3166-2:BB"],["BY","BLR","112","ISO 3166-2:BY"],["BE","BEL","056","ISO 3166-2:BE"],["BZ","BLZ","084","ISO 3166-2:BZ"],["BJ","BEN","204","ISO 3166-2:BJ"],["BM","BMU","060","ISO 3166-2:BM"],["BT","BTN","064","ISO 3166-2:BT"],["BO","BOL","068","ISO 3166-2:BO"],["BA","BIH","070","ISO 3166-2:BA"],["BW","BWA","072","ISO 3166-2:BW"],["BV","BVT","074","ISO 3166-2:BV"],["BR","BRA","076","ISO 3166-2:BR"],["IO","IOT","086","ISO 3166-2:IO"],["BN","BRN","096","ISO 3166-2:BN"],["BG","BGR","100","ISO 3166-2:BG"],["BF","BFA","854","ISO 3166-2:BF"],["BI","BDI","108","ISO 3166-2:BI"],["KH","KHM","116","ISO 3166-2:KH"],["CM","CMR","120","ISO 3166-2:CM"],["CA","CAN","124","ISO 3166-2:CA"],["CV","CPV","132","ISO 3166-2:CV"],["KY","CYM","136","ISO 3166-2:KY"],["CF","CAF","140","ISO 3166-2:CF"],["TD","TCD","148","ISO 3166-2:TD"],["CL","CHL","152","ISO 3166-2:CL"],["CN","CHN","156","ISO 3166-2:CN"],["CX","CXR","162","ISO 3166-2:CX"],["CC","CCK","166","ISO 3166-2:CC"],["CO","COL","170","ISO 3166-2:CO"],["KM","COM","174","ISO 3166-2:KM"],["CG","COG","178","ISO 3166-2:CG"],["CD","COD","180","ISO 3166-2:CD"],["CK","COK","184","ISO 3166-2:CK"],["CR","CRI","188","ISO 3166-2:CR"],["CI","CIV","384","ISO 3166-2:CI"],["HR","HRV","191","ISO 3166-2:HR"],["CU","CUB","192","ISO 3166-2:CU"],["CY","CYP","196","ISO 3166-2:CY"],["CZ","CZE","203","ISO 3166-2:CZ"],["DK","DNK","208","ISO 3166-2:DK"],["DJ","DJI","262","ISO 3166-2:DJ"],["DM","DMA","212","ISO 3166-2:DM"],["DO","DOM","214","ISO 3166-2:DO"],["EC","ECU","218","ISO 3166-2:EC"],["EG","EGY","818","ISO 3166-2:EG"],["SV","SLV","222","ISO 3166-2:SV"],["GQ","GNQ","226","ISO 3166-2:GQ"],["ER","ERI","232","ISO 3166-2:ER"],["EE","EST","233","ISO 3166-2:EE"],["ET","ETH","231","ISO 3166-2:ET"],["FK","FLK","238","ISO 3166-2:FK"],["FO","FRO","234","ISO 3166-2:FO"],["FJ","FJI","242","ISO 3166-2:FJ"],["FI","FIN","246","ISO 3166-2:FI"],["FR","FRA","250","ISO 3166-2:FR"],["GF","GUF","254","ISO 3166-2:GF"],["PF","PYF","258","ISO 3166-2:PF"],["TF","ATF","260","ISO 3166-2:TF"],["GA","GAB","266","ISO 3166-2:GA"],["GM","GMB","270","ISO 3166-2:GM"],["GE","GEO","268","ISO 3166-2:GE"],["DE","DEU","276","ISO 3166-2:DE"],["GH","GHA","288","ISO 3166-2:GH"],["GI","GIB","292","ISO 3166-2:GI"],["GR","GRC","300","ISO 3166-2:GR"],["GL","GRL","304","ISO 3166-2:GL"],["GD","GRD","308","ISO 3166-2:GD"],["GP","GLP","312","ISO 3166-2:GP"],["GU","GUM","316","ISO 3166-2:GU"],["GT","GTM","320","ISO 3166-2:GT"],["GN","GIN","324","ISO 3166-2:GN"],["GW","GNB","624","ISO 3166-2:GW"],["GY","GUY","328","ISO 3166-2:GY"],["HT","HTI","332","ISO 3166-2:HT"],["HM","HMD","334","ISO 3166-2:HM"],["VA","VAT","336","ISO 3166-2:VA"],["HN","HND","340","ISO 3166-2:HN"],["HK","HKG","344","ISO 3166-2:HK"],["HU","HUN","348","ISO 3166-2:HU"],["IS","ISL","352","ISO 3166-2:IS"],["IN","IND","356","ISO 3166-2:IN"],["ID","IDN","360","ISO 3166-2:ID"],["IR","IRN","364","ISO 3166-2:IR"],["IQ","IRQ","368","ISO 3166-2:IQ"],["IE","IRL","372","ISO 3166-2:IE"],["IL","ISR","376","ISO 3166-2:IL"],["IT","ITA","380","ISO 3166-2:IT"],["JM","JAM","388","ISO 3166-2:JM"],["JP","JPN","392","ISO 3166-2:JP"],["JO","JOR","400","ISO 3166-2:JO"],["KZ","KAZ","398","ISO 3166-2:KZ"],["KE","KEN","404","ISO 3166-2:KE"],["KI","KIR","296","ISO 3166-2:KI"],["KP","PRK","408","ISO 3166-2:KP"],["KR","KOR","410","ISO 3166-2:KR"],["KW","KWT","414","ISO 3166-2:KW"],["KG","KGZ","417","ISO 3166-2:KG"],["LA","LAO","418","ISO 3166-2:LA"],["LV","LVA","428","ISO 3166-2:LV"],["LB","LBN","422","ISO 3166-2:LB"],["LS","LSO","426","ISO 3166-2:LS"],["LR","LBR","430","ISO 3166-2:LR"],["LY","LBY","434","ISO 3166-2:LY"],["LI","LIE","438","ISO 3166-2:LI"],["LT","LTU","440","ISO 3166-2:LT"],["LU","LUX","442","ISO 3166-2:LU"],["MO","MAC","446","ISO 3166-2:MO"],["MG","MDG","450","ISO 3166-2:MG"],["MW","MWI","454","ISO 3166-2:MW"],["MY","MYS","458","ISO 3166-2:MY"],["MV","MDV","462","ISO 3166-2:MV"],["ML","MLI","466","ISO 3166-2:ML"],["MT","MLT","470","ISO 3166-2:MT"],["MH","MHL","584","ISO 3166-2:MH"],["MQ","MTQ","474","ISO 3166-2:MQ"],["MR","MRT","478","ISO 3166-2:MR"],["MU","MUS","480","ISO 3166-2:MU"],["YT","MYT","175","ISO 3166-2:YT"],["MX","MEX","484","ISO 3166-2:MX"],["FM","FSM","583","ISO 3166-2:FM"],["MD","MDA","498","ISO 3166-2:MD"],["MC","MCO","492","ISO 3166-2:MC"],["MN","MNG","496","ISO 3166-2:MN"],["MS","MSR","500","ISO 3166-2:MS"],["MA","MAR","504","ISO 3166-2:MA"],["MZ","MOZ","508","ISO 3166-2:MZ"],["MM","MMR","104","ISO 3166-2:MM"],["NA","NAM","516","ISO 3166-2:NA"],["NR","NRU","520","ISO 3166-2:NR"],["NP","NPL","524","ISO 3166-2:NP"],["NL","NLD","528","ISO 3166-2:NL"],["NC","NCL","540","ISO 3166-2:NC"],["NZ","NZL","554","ISO 3166-2:NZ"],["NI","NIC","558","ISO 3166-2:NI"],["NE","NER","562","ISO 3166-2:NE"],["NG","NGA","566","ISO 3166-2:NG"],["NU","NIU","570","ISO 3166-2:NU"],["NF","NFK","574","ISO 3166-2:NF"],["MP","MNP","580","ISO 3166-2:MP"],["MK","MKD","807","ISO 3166-2:MK"],["NO","NOR","578","ISO 3166-2:NO"],["OM","OMN","512","ISO 3166-2:OM"],["PK","PAK","586","ISO 3166-2:PK"],["PW","PLW","585","ISO 3166-2:PW"],["PS","PSE","275","ISO 3166-2:PS"],["PA","PAN","591","ISO 3166-2:PA"],["PG","PNG","598","ISO 3166-2:PG"],["PY","PRY","600","ISO 3166-2:PY"],["PE","PER","604","ISO 3166-2:PE"],["PH","PHL","608","ISO 3166-2:PH"],["PN","PCN","612","ISO 3166-2:PN"],["PL","POL","616","ISO 3166-2:PL"],["PT","PRT","620","ISO 3166-2:PT"],["PR","PRI","630","ISO 3166-2:PR"],["QA","QAT","634","ISO 3166-2:QA"],["RE","REU","638","ISO 3166-2:RE"],["RO","ROU","642","ISO 3166-2:RO"],["RU","RUS","643","ISO 3166-2:RU"],["RW","RWA","646","ISO 3166-2:RW"],["SH","SHN","654","ISO 3166-2:SH"],["KN","KNA","659","ISO 3166-2:KN"],["LC","LCA","662","ISO 3166-2:LC"],["PM","SPM","666","ISO 3166-2:PM"],["VC","VCT","670","ISO 3166-2:VC"],["WS","WSM","882","ISO 3166-2:WS"],["SM","SMR","674","ISO 3166-2:SM"],["ST","STP","678","ISO 3166-2:ST"],["SA","SAU","682","ISO 3166-2:SA"],["SN","SEN","686","ISO 3166-2:SN"],["SC","SYC","690","ISO 3166-2:SC"],["SL","SLE","694","ISO 3166-2:SL"],["SG","SGP","702","ISO 3166-2:SG"],["SK","SVK","703","ISO 3166-2:SK"],["SI","SVN","705","ISO 3166-2:SI"],["SB","SLB","090","ISO 3166-2:SB"],["SO","SOM","706","ISO 3166-2:SO"],["ZA","ZAF","710","ISO 3166-2:ZA"],["GS","SGS","239","ISO 3166-2:GS"],["ES","ESP","724","ISO 3166-2:ES"],["LK","LKA","144","ISO 3166-2:LK"],["SD","SDN","729","ISO 3166-2:SD"],["SR","SUR","740","ISO 3166-2:SR"],["SJ","SJM","744","ISO 3166-2:SJ"],["SZ","SWZ","748","ISO 3166-2:SZ"],["SE","SWE","752","ISO 3166-2:SE"],["CH","CHE","756","ISO 3166-2:CH"],["SY","SYR","760","ISO 3166-2:SY"],["TW","TWN","158","ISO 3166-2:TW"],["TJ","TJK","762","ISO 3166-2:TJ"],["TZ","TZA","834","ISO 3166-2:TZ"],["TH","THA","764","ISO 3166-2:TH"],["TL","TLS","626","ISO 3166-2:TL"],["TG","TGO","768","ISO 3166-2:TG"],["TK","TKL","772","ISO 3166-2:TK"],["TO","TON","776","ISO 3166-2:TO"],["TT","TTO","780","ISO 3166-2:TT"],["TN","TUN","788","ISO 3166-2:TN"],["TR","TUR","792","ISO 3166-2:TR"],["TM","TKM","795","ISO 3166-2:TM"],["TC","TCA","796","ISO 3166-2:TC"],["TV","TUV","798","ISO 3166-2:TV"],["UG","UGA","800","ISO 3166-2:UG"],["UA","UKR","804","ISO 3166-2:UA"],["AE","ARE","784","ISO 3166-2:AE"],["GB","GBR","826","ISO 3166-2:GB"],["US","USA","840","ISO 3166-2:US"],["UM","UMI","581","ISO 3166-2:UM"],["UY","URY","858","ISO 3166-2:UY"],["UZ","UZB","860","ISO 3166-2:UZ"],["VU","VUT","548","ISO 3166-2:VU"],["VE","VEN","862","ISO 3166-2:VE"],["VN","VNM","704","ISO 3166-2:VN"],["VG","VGB","092","ISO 3166-2:VG"],["VI","VIR","850","ISO 3166-2:VI"],["WF","WLF","876","ISO 3166-2:WF"],["EH","ESH","732","ISO 3166-2:EH"],["YE","YEM","887","ISO 3166-2:YE"],["ZM","ZMB","894","ISO 3166-2:ZM"],["ZW","ZWE","716","ISO 3166-2:ZW"],["AX","ALA","248","ISO 3166-2:AX"],["BQ","BES","535","ISO 3166-2:BQ"],["CW","CUW","531","ISO 3166-2:CW"],["GG","GGY","831","ISO 3166-2:GG"],["IM","IMN","833","ISO 3166-2:IM"],["JE","JEY","832","ISO 3166-2:JE"],["ME","MNE","499","ISO 3166-2:ME"],["BL","BLM","652","ISO 3166-2:BL"],["MF","MAF","663","ISO 3166-2:MF"],["RS","SRB","688","ISO 3166-2:RS"],["SX","SXM","534","ISO 3166-2:SX"],["SS","SSD","728","ISO 3166-2:SS"],["XK","XKK","983","ISO 3166-2:XK"]],XS=["br","cy","dv","sw","eu","af","am","ha","ku","ml","mt","no","ps","sd","so","sq","ta","tg","tt","ug","ur","vi","ar","az","be","bg","bn","bs","ca","cs","da","de","el","en","es","et","fa","fi","fr","ga","gl","he","hi","hr","hu","hy","id","is","it","ja","ka","kk","km","ko","ky","lt","lv","mk","mn","mr","ms","nb","nl","nn","pl","pt","ro","ru","sk","sl","sr","sv","th","tk","tr","uk","uz","zh"];var yn={};yn.remove=ey;for(var bn=[{base:" ",chars:" "},{base:"0",chars:"߀"},{base:"A",chars:"ⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",chars:"Ꜳ"},{base:"AE",chars:"ÆǼǢ"},{base:"AO",chars:"Ꜵ"},{base:"AU",chars:"Ꜷ"},{base:"AV",chars:"ꜸꜺ"},{base:"AY",chars:"Ꜽ"},{base:"B",chars:"ⒷＢḂḄḆɃƁ"},{base:"C",chars:"ⒸＣꜾḈĆCĈĊČÇƇȻ"},{base:"D",chars:"ⒹＤḊĎḌḐḒḎĐƊƉᴅꝹ"},{base:"Dh",chars:"Ð"},{base:"DZ",chars:"ǱǄ"},{base:"Dz",chars:"ǲǅ"},{base:"E",chars:"ɛⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎᴇ"},{base:"F",chars:"ꝼⒻＦḞƑꝻ"},{base:"G",chars:"ⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾɢ"},{base:"H",chars:"ⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",chars:"ⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",chars:"ⒿＪĴɈȷ"},{base:"K",chars:"ⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",chars:"ⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",chars:"Ǉ"},{base:"Lj",chars:"ǈ"},{base:"M",chars:"ⓂＭḾṀṂⱮƜϻ"},{base:"N",chars:"ꞤȠⓃＮǸŃÑṄŇṆŅṊṈƝꞐᴎ"},{base:"NJ",chars:"Ǌ"},{base:"Nj",chars:"ǋ"},{base:"O",chars:"ⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OE",chars:"Œ"},{base:"OI",chars:"Ƣ"},{base:"OO",chars:"Ꝏ"},{base:"OU",chars:"Ȣ"},{base:"P",chars:"ⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",chars:"ⓆＱꝖꝘɊ"},{base:"R",chars:"ⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",chars:"ⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",chars:"ⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",chars:"Þ"},{base:"TZ",chars:"Ꜩ"},{base:"U",chars:"ⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",chars:"ⓋＶṼṾƲꝞɅ"},{base:"VY",chars:"Ꝡ"},{base:"W",chars:"ⓌＷẀẂŴẆẄẈⱲ"},{base:"X",chars:"ⓍＸẊẌ"},{base:"Y",chars:"ⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",chars:"ⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",chars:"ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",chars:"ꜳ"},{base:"ae",chars:"æǽǣ"},{base:"ao",chars:"ꜵ"},{base:"au",chars:"ꜷ"},{base:"av",chars:"ꜹꜻ"},{base:"ay",chars:"ꜽ"},{base:"b",chars:"ⓑｂḃḅḇƀƃɓƂ"},{base:"c",chars:"ｃⓒćĉċčçḉƈȼꜿↄ"},{base:"d",chars:"ⓓｄḋďḍḑḓḏđƌɖɗƋᏧԁꞪ"},{base:"dh",chars:"ð"},{base:"dz",chars:"ǳǆ"},{base:"e",chars:"ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇǝ"},{base:"f",chars:"ⓕｆḟƒ"},{base:"ff",chars:"ﬀ"},{base:"fi",chars:"ﬁ"},{base:"fl",chars:"ﬂ"},{base:"ffi",chars:"ﬃ"},{base:"ffl",chars:"ﬄ"},{base:"g",chars:"ⓖｇǵĝḡğġǧģǥɠꞡꝿᵹ"},{base:"h",chars:"ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",chars:"ƕ"},{base:"i",chars:"ⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",chars:"ⓙｊĵǰɉ"},{base:"k",chars:"ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",chars:"ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇɭ"},{base:"lj",chars:"ǉ"},{base:"m",chars:"ⓜｍḿṁṃɱɯ"},{base:"n",chars:"ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",chars:"ǌ"},{base:"o",chars:"ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿꝋꝍɵɔᴑ"},{base:"oe",chars:"œ"},{base:"oi",chars:"ƣ"},{base:"oo",chars:"ꝏ"},{base:"ou",chars:"ȣ"},{base:"p",chars:"ⓟｐṕṗƥᵽꝑꝓꝕρ"},{base:"q",chars:"ⓠｑɋꝗꝙ"},{base:"r",chars:"ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",chars:"ⓢｓśṥŝṡšṧṣṩșşȿꞩꞅẛʂ"},{base:"ss",chars:"ß"},{base:"t",chars:"ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",chars:"þ"},{base:"tz",chars:"ꜩ"},{base:"u",chars:"ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",chars:"ⓥｖṽṿʋꝟʌ"},{base:"vy",chars:"ꝡ"},{base:"w",chars:"ⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",chars:"ⓧｘẋẍ"},{base:"y",chars:"ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",chars:"ⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],ra={},In=0;In<bn.length;In+=1)for(var Vu=bn[In].chars,na=0;na<Vu.length;na+=1)ra[Vu[na]]=bn[In].base;function ey(e){return e.replace(/[^\u0000-\u007e]/g,function(t){return ra[t]||t})}yn.replacementList=bn,yn.diacriticsMap=ra,function(e){const t=ZS,r=XS,n=yn.remove,i={},a={},o={},u={},s={};t.forEach(function(b){const y=b;a[y[0]]=y[1],o[y[1]]=y[0],u[y[2]]=y[0],s[y[0]]=y[2]});function c(b){return("000"+(b||"")).slice(-3)}function l(b,y){return Object.prototype.hasOwnProperty.call(b,y)}function p(b,y){return Object.keys(b).reduce(function(f,D){const T=b[D];return f[D]=y(T,D),f},{})}function I(b,y){switch(b){case"official":return Array.isArray(y)?y[0]:y;case"all":return typeof y=="string"?[y]:y;case"alias":return Array.isArray(y)?y[1]||y[0]:y;default:throw new TypeError("LocaleNameType must be one of these: all, official, alias!")}}e.registerLocale=function(b){if(!b.locale)throw new TypeError("Missing localeData.locale");if(!b.countries)throw new TypeError("Missing localeData.countries");i[b.locale]=b.countries};function g(b){return o[b]}e.alpha3ToAlpha2=g;function E(b){return a[b]}e.alpha2ToAlpha3=E;function S(b){return s[g(b)]}e.alpha3ToNumeric=S;function _(b){return s[b]}e.alpha2ToNumeric=_;function C(b){const y=c(b);return E(u[y])}e.numericToAlpha3=C;function v(b){const y=c(b);return u[y]}e.numericToAlpha2=v;function O(b){if(typeof b=="string"){if(/^[0-9]*$/.test(b))return C(b);if(b.length===2)return E(b.toUpperCase());if(b.length===3)return b.toUpperCase()}if(typeof b=="number")return C(b)}e.toAlpha3=O;function w(b){if(typeof b=="string"){if(/^[0-9]*$/.test(b))return v(b);if(b.length===2)return b.toUpperCase();if(b.length===3)return g(b.toUpperCase())}if(typeof b=="number")return v(b)}e.toAlpha2=w,e.getName=function(b,y,f={}){"select"in f||(f.select="official");try{const T=i[y.toLowerCase()][w(b)];return I(f.select,T)}catch{return}},e.getNames=function(b,y={}){"select"in y||(y.select="official");const f=i[b.toLowerCase()];return f===void 0?{}:p(f,function(D){return I(y.select,D)})},e.getAlpha2Code=function(b,y){const f=T=>T.toLowerCase(),D=(T,F)=>f(T)===f(F);try{const T=i[y.toLowerCase()];for(const F in T)if(l(T,F)){if(typeof T[F]=="string"&&D(T[F],b))return F;if(Array.isArray(T[F])){for(const q of T[F])if(D(q,b))return F}}return}catch{return}},e.getSimpleAlpha2Code=function(b,y){const f=T=>n(T.toLowerCase()),D=(T,F)=>f(T)===f(F);try{const T=i[y.toLowerCase()];for(const F in T)if(l(T,F)){if(typeof T[F]=="string"&&D(T[F],b))return F;if(Array.isArray(T[F])){for(const q of T[F])if(D(q,b))return F}}return}catch{return}},e.getAlpha2Codes=function(){return a},e.getAlpha3Code=function(b,y){const f=e.getAlpha2Code(b,y);if(f)return e.toAlpha3(f)},e.getSimpleAlpha3Code=function(b,y){const f=e.getSimpleAlpha2Code(b,y);if(f)return e.toAlpha3(f)},e.getAlpha3Codes=function(){return o},e.getNumericCodes=function(){return u},e.langs=function(){return Object.keys(i)},e.getSupportedLanguages=function(){return r},e.isValid=function(b){if(!b)return!1;const y=b.toString().toUpperCase();return l(o,y)||l(a,y)||l(u,y)}}(qu);const Bu=Ga(qu),ty=e=>e==="zh-CN"?"zh":e==="zh-TW"?"tw":e.slice(0,2),ry=(e,t="en")=>{if(!e)return;const r=Bu.getName(e,ty(t));if(r)return r;if(t!=="en")return Bu.getName(e,"en")},Ru=new an({messageID:"country",type:"country",makeCriterion:()=>new Gu});class Gu extends He{constructor(){super(Ru)}getLabelValue(t){return this.modifier===m.Equals||this.modifier===m.NotEquals?ry(this.value,t.locale)??this.value:super.getLabelValue(t)}}const ny="name",iy=["name","height","birthdate","tag_count","random","rating","penis_length","play_count","last_played_at","latest_scene","career_start","career_end","weight","measurements","scenes_duration","scenes_size"].map(_e.createSortBy).concat([{messageID:"scene_count",value:"scenes_count"},{messageID:"image_count",value:"images_count"},{messageID:"gallery_count",value:"galleries_count"},{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"},{messageID:"last_o_at",value:"last_o_at",sfwMessageID:"last_o_at_sfw"}]),ay=[ge.Grid,ge.List,ge.Tagger],oy=["birth_year","death_year","age","weight","penis_length"],sy=["name","disambiguation","details","ethnicity","hair_color","eye_color","measurements","fake_tits","tattoos","piercings","aliases"],uy=[ys,Au,ju,vm,lt,Sn,Gt,Fr,te("url"),bt,K("tag_count"),K("scene_count"),K("image_count"),K("gallery_count"),K("play_count"),K("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),sn("ignore_auto_tag"),Ru,vs("height_cm","height"),...oy.map(e=>vs(e)),...sy.map(e=>te(e)),tt("birthdate"),tt("death_date"),tt("career_start"),tt("career_end"),Ie("created_at"),Ie("updated_at"),dt],cy=new _e(ny,iy,ay,uy),ly="title",dy=["duration","title","seconds","scene_id","random","scenes_updated_at"].map(_e.createSortBy),fy=[ge.Grid,ge.Wall],py=[lt,xs,jm,Bt,nm("duration"),Ie("created_at"),Ie("updated_at"),tt("scene_date"),Ie("scene_created_at"),Ie("scene_updated_at")],my=new _e(ly,dy,fy,py),Uu=new hs("hasMarkers","has_markers",()=>new gy);class gy extends ki{constructor(){super(Uu)}}const Hu=new vt("interactive","interactive",()=>new hy);class hy extends St{constructor(){super(Hu)}}const ia=new Map([["de","Deutsche"],["en","English"],["es","Español"],["fr","Français"],["it","Italiano"],["ja","日本"],["ko","한국인"],["nl","Holandés"],["pt","Português"],["ru","Русский"],["00","Unknown"]]),vy=e=>{if(e)return Array.from(ia.keys()).find(t=>ia.get(t)===e)},Sy=Array.from(ia.values()),zu=new de({messageID:"captions",type:"captions",modifierOptions:[m.Includes,m.Excludes,m.IsNull,m.NotNull],defaultModifier:m.Includes,options:Sy,makeCriterion:()=>new yy});class yy extends He{constructor(){super(zu)}toCriterionInput(){return{value:vy(this.value)??"",modifier:this.modifier}}}const by="date",Iy=["organized","date","file_count","filesize","duration","framerate","resolution","bitrate","last_played_at","resume_time","play_duration","play_count","interactive","interactive_speed","perceptual_similarity","performer_age","studio",...Vi].map(_e.createSortBy).concat([{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"},{messageID:"last_o_at",value:"last_o_at",sfwMessageID:"last_o_at_sfw"},{messageID:"group_scene_number",value:"group_scene_number"},{messageID:"scene_code",value:"code"}]),_y=[ge.Grid,ge.List,ge.Wall,ge.Tagger],Oy=K("performer_age"),Cy=cn("duration"),Dy=[te("title"),te("code","scene_code"),pn,Ji,te("details"),te("director"),on("oshash","media_info.oshash"),te("checksum","media_info.md5"),Xi,xu,dn,bt,K("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Li,Eu,K("framerate"),K("bitrate"),te("video_codec"),te("audio_codec"),Cy,cn("resume_time"),cn("play_duration"),K("play_count"),Ie("last_played_at"),Uu,gm,lt,K("tag_count"),qi,Bt,K("performer_count"),Oy,ln,Gt,Sn,qS,Zi,te("url"),Fr,K("stash_id_count"),Hu,zu,K("interactive_speed"),K("file_count"),tt("date"),Ie("created_at"),Ie("updated_at"),dt],Ey=new _e(by,Iy,_y,Dy),wy="name",Ty=["name","tag_count","random","rating","scenes_duration","scenes_size","latest_scene"].map(_e.createSortBy).concat([{messageID:"gallery_count",value:"galleries_count"},{messageID:"image_count",value:"images_count"},{messageID:"scene_count",value:"scenes_count"},{messageID:"o_count",value:"o_counter"},{messageID:"o_count_all",value:"o_counter_all"},{messageID:"performer_count",value:"performer_count"},{messageID:"performer_count_all",value:"performer_count_all"},{messageID:"subsidiary_studio_count",value:"child_count"},{messageID:"scene_marker_count",value:"scene_markers_count"}]),xy=[ge.Grid,ge.List,ge.Tagger],$y=[Is,on("name"),te("details"),Ps,bm,lt,bt,sn("ignore_auto_tag"),sn("organized"),K("tag_count"),K("scene_count"),K("image_count"),K("gallery_count"),te("url"),Fr,te("aliases"),K("child_count","subsidiary_studio_count"),Ie("created_at"),Ie("updated_at"),dt],Fy=new _e(wy,Ty,xy,$y),Py="name",My=["name","random","scenes_duration","scenes_size"].map(_e.createSortBy).concat([{messageID:"gallery_count",value:"galleries_count"},{messageID:"image_count",value:"images_count"},{messageID:"performer_count",value:"performers_count"},{messageID:"scene_count",value:"scenes_count"},{messageID:"group_count",value:"groups_count"},{messageID:"marker_count",value:"scene_markers_count"},{messageID:"studio_count",value:"studios_count"}]),Ny=[ge.Grid,ge.List,ge.Tagger],ky=[bs,on("name"),te("sort_name"),ym,te("aliases"),te("description"),sn("ignore_auto_tag"),Fr,K("scene_count"),K("image_count"),K("gallery_count"),K("performer_count"),K("studio_count"),K("group_count"),K("marker_count"),ks,new un("parent_tag_count","parent_count"),As,new un("sub_tag_count","child_count"),Ie("created_at"),Ie("updated_at"),dt],Ay=new _e(Py,My,Ny,ky);function Wu(e){switch(e){case Y.Scenes:return Ey;case Y.Performers:return cy;case Y.Studios:return Fy;case Y.Galleries:return DS;case Y.SceneMarkers:return my;case Y.Movies:case Y.Groups:return US;case Y.Tags:return Ay;case Y.Images:return jS}}const it={sortDirection:Le.Asc,displayMode:ge.Grid,currentPage:1,itemsPerPage:40};class ie{constructor(t,r,n){Z(this,"mode");Z(this,"options");Z(this,"config");Z(this,"searchTerm","");Z(this,"currentPage",it.currentPage);Z(this,"itemsPerPage",it.itemsPerPage);Z(this,"sortDirection",it.sortDirection);Z(this,"sortBy");Z(this,"displayMode",it.displayMode);Z(this,"zoomIndex",1);Z(this,"criteria",[]);Z(this,"randomSeed",-1);Z(this,"defaultZoomIndex",1);this.mode=t,this.config=r,this.options=Wu(t);const{defaultSortBy:i,displayModeOptions:a}=this.options;n!=null&&n.defaultSortBy?(this.sortBy=n.defaultSortBy,n.defaultSortDir&&(this.sortDirection=n.defaultSortDir)):(this.sortBy=i,this.sortBy==="date"&&(this.sortDirection=Le.Desc)),this.displayMode=a[0],(n==null?void 0:n.defaultZoomIndex)!==void 0&&(this.defaultZoomIndex=n.defaultZoomIndex,this.zoomIndex=n.defaultZoomIndex)}clone(){const t=Object.assign(new ie(this.mode,this.config),this);return t.criteria=this.criteria.map(r=>r.clone()),t}empty(){return new ie(this.mode,this.config,{defaultZoomIndex:this.defaultZoomIndex})}metadataInfo(){const t=this.clone();return t.sortBy=void 0,t.randomSeed=-1,t.currentPage=1,t.sortDirection=it.sortDirection,t.itemsPerPage=0,t.zoomIndex=1,t.displayMode=it.displayMode,t}count(){return this.criteria.length}configureFromDecodedParams(t){if(t.perPage!==void 0&&(this.itemsPerPage=t.perPage),t.sortby!==void 0){this.sortBy=t.sortby;const r=this.sortBy.match(/^random_(\d+)$/);r&&(this.sortBy="random",this.randomSeed=Number.parseInt(r[1],10))}if(t.sortdir!==void 0?this.sortDirection=t.sortdir==="desc"?Le.Desc:Le.Asc:this.sortDirection=t.sortby==="date"?Le.Desc:Le.Asc,t.disp!==void 0&&(this.displayMode=t.disp),t.q!==void 0&&(this.searchTerm=t.q),this.currentPage=t.p??1,t.z!==void 0&&(this.zoomIndex=t.z),this.criteria=[],t.c!==void 0)for(const r of t.c)try{const{type:n,...i}=JSON.parse(r),a=this.makeCriterion(n);a.fromDecodedParams(i),this.criteria.push(a)}catch(n){console.error("Failed to parse encoded criterion:",n)}}static decodeParams(t){const r={};if(t.perPage&&(r.perPage=Number.parseInt(t.perPage,10)),t.sortby&&(r.sortby=t.sortby),t.sortdir&&(r.sortdir=t.sortdir),t.disp&&(r.disp=Number.parseInt(t.disp,10)),t.q&&(r.q=t.q),t.p&&(r.p=Number.parseInt(t.p,10)),t.z){const n=Number.parseInt(t.z,10);n>=0&&(r.z=n)}return t.c&&t.c.length!==0&&(r.c=t.c.map(n=>ie.translateJSON(n,!0))),r}static translateJSON(t,r){let n=!1,i=!1;return[...t].map(a=>{if(i)return i=!1,a;switch(a){case"\\":n&&(i=!0);break;case'"':n=!n;break;case"(":if(r&&!n)return"{";break;case")":if(r&&!n)return"}";break;case"{":if(!r&&!n)return"(";break;case"}":if(!r&&!n)return")";break}return a}).join("")}configureFromQueryString(t){const r=new URLSearchParams(t),n={perPage:r.get("perPage"),sortby:r.get("sortby"),sortdir:r.get("sortdir"),disp:r.get("disp"),q:r.get("q"),p:r.get("p"),z:r.get("z"),c:r.getAll("c")},i=ie.decodeParams(n);this.configureFromDecodedParams(i)}configureFromSavedFilter(t){var o;const{find_filter:r,object_filter:n,ui_options:i}=t;this.itemsPerPage=(r==null?void 0:r.per_page)??this.itemsPerPage,this.sortBy=(r==null?void 0:r.sort)??this.sortBy;const a=(o=this.sortBy)==null?void 0:o.match(/^random_(\d+)$/);if(a&&(this.sortBy="random",this.randomSeed=Number.parseInt(a[1],10)),this.sortDirection=(r==null?void 0:r.direction)??this.sortDirection,this.searchTerm=(r==null?void 0:r.q)??this.searchTerm,this.displayMode=(i==null?void 0:i.display_mode)??this.displayMode,this.zoomIndex=(i==null?void 0:i.zoom_index)??this.zoomIndex,this.currentPage=1,this.criteria=[],n)for(const[u,s]of Object.entries(n)){const c=this.makeCriterion(u);c.setFromSavedCriterion(s),this.criteria.push(c)}}setRandomSeed(){this.sortBy==="random"?this.randomSeed===-1&&(this.randomSeed=Math.floor(Math.random()*10**8)):this.randomSeed=-1}getSortBy(){return this.setRandomSeed(),this.sortBy==="random"?`random_${this.randomSeed.toString()}`:this.sortBy}getEncodedParams(){const t=this.criteria.map(r=>{const n=r.toQueryParams();let i=ie.translateJSON(JSON.stringify(n),!1);return i=encodeURI(i),i=i.replaceAll("?",encodeURIComponent("?")),i=i.replaceAll("#",encodeURIComponent("#")),i=i.replaceAll("&",encodeURIComponent("&")),i=i.replaceAll(";",encodeURIComponent(";")),i=i.replaceAll("=",encodeURIComponent("=")),i=i.replaceAll("+",encodeURIComponent("+")),i});return{perPage:this.itemsPerPage!==it.itemsPerPage?String(this.itemsPerPage):void 0,sortby:this.getSortBy(),sortdir:this.sortBy==="date"?this.sortDirection===Le.Asc?"asc":void 0:this.sortDirection===Le.Desc?"desc":void 0,disp:this.displayMode!==it.displayMode?String(this.displayMode):void 0,q:this.searchTerm?encodeURIComponent(this.searchTerm):void 0,p:this.currentPage!==it.currentPage?String(this.currentPage):void 0,z:this.zoomIndex!==this.defaultZoomIndex?String(this.zoomIndex):void 0,c:t}}makeQueryParameters(){const t=[],r=this.getEncodedParams();if(r.q&&t.push(`q=${r.q}`),r.c)for(const n of r.c)t.push(`c=${n}`);return r.sortby&&t.push(`sortby=${r.sortby}`),r.sortdir&&t.push(`sortdir=${r.sortdir}`),r.perPage&&t.push(`perPage=${r.perPage}`),r.disp&&t.push(`disp=${r.disp}`),r.z&&t.push(`z=${r.z}`),r.p&&t.push(`p=${r.p}`),t.join("&")}makeCriterion(t){const{criterionOptions:r}=Wu(this.mode),n=r.find(i=>i.type===t);return n?n.makeCriterion(this.config):new um(t).makeCriterion(this.config)}makeFindFilter(){return{q:this.searchTerm,page:this.currentPage,per_page:this.itemsPerPage,sort:this.getSortBy(),direction:this.sortDirection}}makeFilter(){const t={};for(const r of this.criteria)r.applyToCriterionInput(t);return t}makeSavedFilter(){const t={};for(const r of this.criteria)r.applyToSavedCriterion(t);return t}makeSavedUIOptions(){return{display_mode:this.displayMode,zoom_index:this.zoomIndex}}criteriaFor(t){return this.criteria.filter(r=>r.criterionOption.type===t)}replaceCriteria(t,r){const n=[...this.criteria.filter(i=>i.criterionOption.type!==t),...r];return this.setCriteria(n)}clearCriteria(t=!1){const r=this.clone();return t&&(r.searchTerm=""),r.criteria=[],r.currentPage=1,r}clearSearchTerm(){const t=this.clone();return t.searchTerm="",t.currentPage=1,t}setCriteria(t){const r=this.clone();return r.criteria=t,r.currentPage=1,r}removeCriterion(t){const r=this.clone(),n=r.criteria.find(a=>a.criterionOption.type===t);if(!n)return r;const i=r.criteria.filter(a=>a.getId()!==n.getId());return r.criteria=i,r.currentPage=1,r}removeCustomFieldCriterion(t,r){const n=this.clone(),i=n.criteria.find(a=>a.criterionOption.type===t);if(!i)return n;if(i instanceof bu){const a=i.value.filter((o,u)=>u!==r);i.value=a}return n}setPageSize(t){const r=this.clone();return r.itemsPerPage=t,r.currentPage=1,r}setSortBy(t){const r=this.clone();return r.sortBy=t,r.currentPage=1,r}toggleSortDirection(){const t=this.clone();return t.sortDirection===Le.Asc?t.sortDirection=Le.Desc:t.sortDirection=Le.Asc,t.currentPage=1,t}reshuffleRandomSort(){const t=this.clone();return t.currentPage=1,t.randomSeed=-1,t}changePage(t){const r=this.clone();return r.currentPage=t,r}setZoom(t){const r=this.clone();return r.zoomIndex=t,r}setDisplayMode(t){const r=this.clone();return r.displayMode=t,r}}function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},R.apply(null,arguments)}function Dt(e){"@babel/helpers - typeof";return Dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dt(e)}function Ly(e,t){if(Dt(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Dt(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Yu(e){var t=Ly(e,"string");return Dt(t)=="symbol"?t:t+""}function Jt(e,t,r){return(t=Yu(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ku(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ku(Object(r),!0).forEach(function(n){Jt(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ku(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function jy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qu(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Yu(n.key),n)}}function qy(e,t,r){return t&&Qu(e.prototype,t),r&&Qu(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function aa(e,t){return aa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},aa(e,t)}function Vy(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&aa(e,t)}function _n(e){return _n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_n(e)}function Ju(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ju=function(){return!!e})()}function By(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ry(e,t){if(t&&(Dt(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return By(e)}function Gy(e){var t=Ju();return function(){var r,n=_n(e);if(t){var i=_n(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Ry(this,r)}}function oa(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function Uy(e){if(Array.isArray(e))return oa(e)}function Hy(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Zu(e,t){if(e){if(typeof e=="string")return oa(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?oa(e,t):void 0}}function zy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zt(e){return Uy(e)||Hy(e)||Zu(e)||zy()}function Wy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Yy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Ky=function(){function e(r){var n=this;this._insertTag=function(i){var a;n.tags.length===0?n.insertionPoint?a=n.insertionPoint.nextSibling:n.prepend?a=n.container.firstChild:a=n.before:a=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(i,a),n.tags.push(i)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Yy(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=Wy(i);try{a.insertRule(n,a.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){var i;return(i=n.parentNode)==null?void 0:i.removeChild(n)}),this.tags=[],this.ctr=0},e}(),xe="-ms-",On="-moz-",ae="-webkit-",Xu="comm",sa="rule",ua="decl",Qy="@import",ec="@keyframes",Jy="@layer",Zy=Math.abs,Cn=String.fromCharCode,Xy=Object.assign;function eb(e,t){return we(e,0)^45?(((t<<2^we(e,0))<<2^we(e,1))<<2^we(e,2))<<2^we(e,3):0}function tc(e){return e.trim()}function tb(e,t){return(e=t.exec(e))?e[0]:e}function oe(e,t,r){return e.replace(t,r)}function ca(e,t){return e.indexOf(t)}function we(e,t){return e.charCodeAt(t)|0}function Pr(e,t,r){return e.slice(t,r)}function Ke(e){return e.length}function la(e){return e.length}function Dn(e,t){return t.push(e),e}function rb(e,t){return e.map(t).join("")}var En=1,Xt=1,rc=0,Ae=0,ye=0,er="";function wn(e,t,r,n,i,a,o){return{value:e,root:t,parent:r,type:n,props:i,children:a,line:En,column:Xt,length:o,return:""}}function Mr(e,t){return Xy(wn("",null,null,"",null,null,0),e,{length:-e.length},t)}function nb(){return ye}function ib(){return ye=Ae>0?we(er,--Ae):0,Xt--,ye===10&&(Xt=1,En--),ye}function qe(){return ye=Ae<rc?we(er,Ae++):0,Xt++,ye===10&&(Xt=1,En++),ye}function Qe(){return we(er,Ae)}function Tn(){return Ae}function Nr(e,t){return Pr(er,e,t)}function kr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function nc(e){return En=Xt=1,rc=Ke(er=e),Ae=0,[]}function ic(e){return er="",e}function xn(e){return tc(Nr(Ae-1,da(e===91?e+2:e===40?e+1:e)))}function ab(e){for(;(ye=Qe())&&ye<33;)qe();return kr(e)>2||kr(ye)>3?"":" "}function ob(e,t){for(;--t&&qe()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return Nr(e,Tn()+(t<6&&Qe()==32&&qe()==32))}function da(e){for(;qe();)switch(ye){case e:return Ae;case 34:case 39:e!==34&&e!==39&&da(ye);break;case 40:e===41&&da(e);break;case 92:qe();break}return Ae}function sb(e,t){for(;qe()&&e+ye!==57;)if(e+ye===84&&Qe()===47)break;return"/*"+Nr(t,Ae-1)+"*"+Cn(e===47?e:qe())}function ub(e){for(;!kr(Qe());)qe();return Nr(e,Ae)}function cb(e){return ic($n("",null,null,null,[""],e=nc(e),0,[0],e))}function $n(e,t,r,n,i,a,o,u,s){for(var c=0,l=0,p=o,I=0,g=0,E=0,S=1,_=1,C=1,v=0,O="",w=i,b=a,y=n,f=O;_;)switch(E=v,v=qe()){case 40:if(E!=108&&we(f,p-1)==58){ca(f+=oe(xn(v),"&","&\f"),"&\f")!=-1&&(C=-1);break}case 34:case 39:case 91:f+=xn(v);break;case 9:case 10:case 13:case 32:f+=ab(E);break;case 92:f+=ob(Tn()-1,7);continue;case 47:switch(Qe()){case 42:case 47:Dn(lb(sb(qe(),Tn()),t,r),s);break;default:f+="/"}break;case 123*S:u[c++]=Ke(f)*C;case 125*S:case 59:case 0:switch(v){case 0:case 125:_=0;case 59+l:C==-1&&(f=oe(f,/\f/g,"")),g>0&&Ke(f)-p&&Dn(g>32?oc(f+";",n,r,p-1):oc(oe(f," ","")+";",n,r,p-2),s);break;case 59:f+=";";default:if(Dn(y=ac(f,t,r,c,l,i,u,O,w=[],b=[],p),a),v===123)if(l===0)$n(f,t,y,y,w,a,p,u,b);else switch(I===99&&we(f,3)===110?100:I){case 100:case 108:case 109:case 115:$n(e,y,y,n&&Dn(ac(e,y,y,0,0,i,u,O,i,w=[],p),b),i,b,p,u,n?w:b);break;default:$n(f,y,y,y,[""],b,0,u,b)}}c=l=g=0,S=C=1,O=f="",p=o;break;case 58:p=1+Ke(f),g=E;default:if(S<1){if(v==123)--S;else if(v==125&&S++==0&&ib()==125)continue}switch(f+=Cn(v),v*S){case 38:C=l>0?1:(f+="\f",-1);break;case 44:u[c++]=(Ke(f)-1)*C,C=1;break;case 64:Qe()===45&&(f+=xn(qe())),I=Qe(),l=p=Ke(O=f+=ub(Tn())),v++;break;case 45:E===45&&Ke(f)==2&&(S=0)}}return a}function ac(e,t,r,n,i,a,o,u,s,c,l){for(var p=i-1,I=i===0?a:[""],g=la(I),E=0,S=0,_=0;E<n;++E)for(var C=0,v=Pr(e,p+1,p=Zy(S=o[E])),O=e;C<g;++C)(O=tc(S>0?I[C]+" "+v:oe(v,/&\f/g,I[C])))&&(s[_++]=O);return wn(e,t,r,i===0?sa:u,s,c,l)}function lb(e,t,r){return wn(e,t,r,Xu,Cn(nb()),Pr(e,2,-2),0)}function oc(e,t,r,n){return wn(e,t,r,ua,Pr(e,0,n),Pr(e,n+1,-1),n)}function tr(e,t){for(var r="",n=la(e),i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function db(e,t,r,n){switch(e.type){case Jy:if(e.children.length)break;case Qy:case ua:return e.return=e.return||e.value;case Xu:return"";case ec:return e.return=e.value+"{"+tr(e.children,n)+"}";case sa:e.value=e.props.join(",")}return Ke(r=tr(e.children,n))?e.return=e.value+"{"+r+"}":""}function fb(e){var t=la(e);return function(r,n,i,a){for(var o="",u=0;u<t;u++)o+=e[u](r,n,i,a)||"";return o}}function pb(e){return function(t){t.root||(t=t.return)&&e(t)}}function mb(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var gb=function(t,r,n){for(var i=0,a=0;i=a,a=Qe(),i===38&&a===12&&(r[n]=1),!kr(a);)qe();return Nr(t,Ae)},hb=function(t,r){var n=-1,i=44;do switch(kr(i)){case 0:i===38&&Qe()===12&&(r[n]=1),t[n]+=gb(Ae-1,r,n);break;case 2:t[n]+=xn(i);break;case 4:if(i===44){t[++n]=Qe()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=Cn(i)}while(i=qe());return t},vb=function(t,r){return ic(hb(nc(t),r))},sc=new WeakMap,Sb=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,i=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!sc.get(n))&&!i){sc.set(t,!0);for(var a=[],o=vb(r,a),u=n.props,s=0,c=0;s<o.length;s++)for(var l=0;l<u.length;l++,c++)t.props[c]=a[s]?o[s].replace(/&\f/g,u[l]):u[l]+" "+o[s]}}},yb=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function uc(e,t){switch(eb(e,t)){case 5103:return ae+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ae+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ae+e+On+e+xe+e+e;case 6828:case 4268:return ae+e+xe+e+e;case 6165:return ae+e+xe+"flex-"+e+e;case 5187:return ae+e+oe(e,/(\w+).+(:[^]+)/,ae+"box-$1$2"+xe+"flex-$1$2")+e;case 5443:return ae+e+xe+"flex-item-"+oe(e,/flex-|-self/,"")+e;case 4675:return ae+e+xe+"flex-line-pack"+oe(e,/align-content|flex-|-self/,"")+e;case 5548:return ae+e+xe+oe(e,"shrink","negative")+e;case 5292:return ae+e+xe+oe(e,"basis","preferred-size")+e;case 6060:return ae+"box-"+oe(e,"-grow","")+ae+e+xe+oe(e,"grow","positive")+e;case 4554:return ae+oe(e,/([^-])(transform)/g,"$1"+ae+"$2")+e;case 6187:return oe(oe(oe(e,/(zoom-|grab)/,ae+"$1"),/(image-set)/,ae+"$1"),e,"")+e;case 5495:case 3959:return oe(e,/(image-set\([^]*)/,ae+"$1$`$1");case 4968:return oe(oe(e,/(.+:)(flex-)?(.*)/,ae+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ae+e+e;case 4095:case 3583:case 4068:case 2532:return oe(e,/(.+)-inline(.+)/,ae+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ke(e)-1-t>6)switch(we(e,t+1)){case 109:if(we(e,t+4)!==45)break;case 102:return oe(e,/(.+:)(.+)-([^]+)/,"$1"+ae+"$2-$3$1"+On+(we(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ca(e,"stretch")?uc(oe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(we(e,t+1)!==115)break;case 6444:switch(we(e,Ke(e)-3-(~ca(e,"!important")&&10))){case 107:return oe(e,":",":"+ae)+e;case 101:return oe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ae+(we(e,14)===45?"inline-":"")+"box$3$1"+ae+"$2$3$1"+xe+"$2box$3")+e}break;case 5936:switch(we(e,t+11)){case 114:return ae+e+xe+oe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ae+e+xe+oe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ae+e+xe+oe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ae+e+xe+e+e}return e}var bb=function(t,r,n,i){if(t.length>-1&&!t.return)switch(t.type){case ua:t.return=uc(t.value,t.length);break;case ec:return tr([Mr(t,{value:oe(t.value,"@","@"+ae)})],i);case sa:if(t.length)return rb(t.props,function(a){switch(tb(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return tr([Mr(t,{props:[oe(a,/:(read-\w+)/,":"+On+"$1")]})],i);case"::placeholder":return tr([Mr(t,{props:[oe(a,/:(plac\w+)/,":"+ae+"input-$1")]}),Mr(t,{props:[oe(a,/:(plac\w+)/,":"+On+"$1")]}),Mr(t,{props:[oe(a,/:(plac\w+)/,xe+"input-$1")]})],i)}return""})}},Ib=[bb],_b=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(S){var _=S.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var i=t.stylisPlugins||Ib,a={},o,u=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(S){for(var _=S.getAttribute("data-emotion").split(" "),C=1;C<_.length;C++)a[_[C]]=!0;u.push(S)});var s,c=[Sb,yb];{var l,p=[db,pb(function(S){l.insert(S)})],I=fb(c.concat(i,p)),g=function(_){return tr(cb(_),I)};s=function(_,C,v,O){l=v,g(_?_+"{"+C.styles+"}":C.styles),O&&(E.inserted[C.name]=!0)}}var E={key:r,sheet:new Ky({key:r,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:s};return E.sheet.hydrate(u),E},cc={exports:{}},ue={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ce=typeof Symbol=="function"&&Symbol.for,fa=Ce?Symbol.for("react.element"):60103,pa=Ce?Symbol.for("react.portal"):60106,Fn=Ce?Symbol.for("react.fragment"):60107,Pn=Ce?Symbol.for("react.strict_mode"):60108,Mn=Ce?Symbol.for("react.profiler"):60114,Nn=Ce?Symbol.for("react.provider"):60109,kn=Ce?Symbol.for("react.context"):60110,ma=Ce?Symbol.for("react.async_mode"):60111,An=Ce?Symbol.for("react.concurrent_mode"):60111,Ln=Ce?Symbol.for("react.forward_ref"):60112,jn=Ce?Symbol.for("react.suspense"):60113,Ob=Ce?Symbol.for("react.suspense_list"):60120,qn=Ce?Symbol.for("react.memo"):60115,Vn=Ce?Symbol.for("react.lazy"):60116,Cb=Ce?Symbol.for("react.block"):60121,Db=Ce?Symbol.for("react.fundamental"):60117,Eb=Ce?Symbol.for("react.responder"):60118,wb=Ce?Symbol.for("react.scope"):60119;function Ve(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case fa:switch(e=e.type,e){case ma:case An:case Fn:case Mn:case Pn:case jn:return e;default:switch(e=e&&e.$$typeof,e){case kn:case Ln:case Vn:case qn:case Nn:return e;default:return t}}case pa:return t}}}function lc(e){return Ve(e)===An}ue.AsyncMode=ma,ue.ConcurrentMode=An,ue.ContextConsumer=kn,ue.ContextProvider=Nn,ue.Element=fa,ue.ForwardRef=Ln,ue.Fragment=Fn,ue.Lazy=Vn,ue.Memo=qn,ue.Portal=pa,ue.Profiler=Mn,ue.StrictMode=Pn,ue.Suspense=jn,ue.isAsyncMode=function(e){return lc(e)||Ve(e)===ma},ue.isConcurrentMode=lc,ue.isContextConsumer=function(e){return Ve(e)===kn},ue.isContextProvider=function(e){return Ve(e)===Nn},ue.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===fa},ue.isForwardRef=function(e){return Ve(e)===Ln},ue.isFragment=function(e){return Ve(e)===Fn},ue.isLazy=function(e){return Ve(e)===Vn},ue.isMemo=function(e){return Ve(e)===qn},ue.isPortal=function(e){return Ve(e)===pa},ue.isProfiler=function(e){return Ve(e)===Mn},ue.isStrictMode=function(e){return Ve(e)===Pn},ue.isSuspense=function(e){return Ve(e)===jn},ue.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Fn||e===An||e===Mn||e===Pn||e===jn||e===Ob||typeof e=="object"&&e!==null&&(e.$$typeof===Vn||e.$$typeof===qn||e.$$typeof===Nn||e.$$typeof===kn||e.$$typeof===Ln||e.$$typeof===Db||e.$$typeof===Eb||e.$$typeof===wb||e.$$typeof===Cb)},ue.typeOf=Ve,cc.exports=ue;var Tb=cc.exports,dc=Tb,xb={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$b={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fc={};fc[dc.ForwardRef]=xb,fc[dc.Memo]=$b;var Fb=!0;function Pb(e,t,r){var n="";return r.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(n+=i+" ")}),n}var pc=function(t,r,n){var i=t.key+"-"+r.name;(n===!1||Fb===!1)&&t.registered[i]===void 0&&(t.registered[i]=r.styles)},Mb=function(t,r,n){pc(t,r,n);var i=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var a=r;do t.insert(r===a?"."+i:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function Nb(e){for(var t=0,r,n=0,i=e.length;i>=4;++n,i-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var kb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ab=/[A-Z]|^ms/g,Lb=/_EMO_([^_]+?)_([^]*?)_EMO_/g,mc=function(t){return t.charCodeAt(1)===45},gc=function(t){return t!=null&&typeof t!="boolean"},ga=mb(function(e){return mc(e)?e:e.replace(Ab,"-$&").toLowerCase()}),hc=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(Lb,function(n,i,a){return Je={name:i,styles:a,next:Je},i})}return kb[t]!==1&&!mc(t)&&typeof r=="number"&&r!==0?r+"px":r};function Ar(e,t,r){if(r==null)return"";var n=r;if(n.__emotion_styles!==void 0)return n;switch(typeof r){case"boolean":return"";case"object":{var i=r;if(i.anim===1)return Je={name:i.name,styles:i.styles,next:Je},i.name;var a=r;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)Je={name:o.name,styles:o.styles,next:Je},o=o.next;var u=a.styles+";";return u}return jb(e,t,r)}case"function":{if(e!==void 0){var s=Je,c=r(e);return Je=s,Ar(e,t,c)}break}}var l=r;return l}function jb(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=Ar(e,t,r[i])+";";else for(var a in r){var o=r[a];if(typeof o!="object"){var u=o;gc(u)&&(n+=ga(a)+":"+hc(a,u)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&t==null)for(var s=0;s<o.length;s++)gc(o[s])&&(n+=ga(a)+":"+hc(a,o[s])+";");else{var c=Ar(e,t,o);switch(a){case"animation":case"animationName":{n+=ga(a)+":"+c+";";break}default:n+=a+"{"+c+"}"}}}return n}var vc=/label:\s*([^\s;{]+)\s*(;|$)/g,Je;function Sc(e,t,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,i="";Je=void 0;var a=e[0];if(a==null||a.raw===void 0)n=!1,i+=Ar(r,t,a);else{var o=a;i+=o[0]}for(var u=1;u<e.length;u++)if(i+=Ar(r,t,e[u]),n){var s=a;i+=s[u]}vc.lastIndex=0;for(var c="",l;(l=vc.exec(i))!==null;)c+="-"+l[1];var p=Nb(i)+c;return{name:p,styles:i,next:Je}}var qb=function(t){return t()},Vb=Q.useInsertionEffect?Q.useInsertionEffect:!1,Bb=Vb||qb,yc=Q.createContext(typeof HTMLElement<"u"?_b({key:"css"}):null);yc.Provider;var Rb=function(t){return x.forwardRef(function(r,n){var i=x.useContext(yc);return t(r,i,n)})},Gb=Q.createContext({}),ha={}.hasOwnProperty,va="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ub=function(t,r){var n={};for(var i in r)ha.call(r,i)&&(n[i]=r[i]);return n[va]=t,n},Hb=function(t){var r=t.cache,n=t.serialized,i=t.isStringTag;return pc(r,n,i),Bb(function(){return Mb(r,n,i)}),null},zb=Rb(function(e,t,r){var n=e.css;typeof n=="string"&&t.registered[n]!==void 0&&(n=t.registered[n]);var i=e[va],a=[n],o="";typeof e.className=="string"?o=Pb(t.registered,a,e.className):e.className!=null&&(o=e.className+" ");var u=Sc(a,void 0,Q.useContext(Gb));o+=t.key+"-"+u.name;var s={};for(var c in e)ha.call(e,c)&&c!=="css"&&c!==va&&(s[c]=e[c]);return s.className=o,r&&(s.ref=r),Q.createElement(Q.Fragment,null,Q.createElement(Hb,{cache:t,serialized:u,isStringTag:typeof i=="string"}),Q.createElement(i,s))}),Wb=zb,V=function(t,r){var n=arguments;if(r==null||!ha.call(r,"css"))return Q.createElement.apply(void 0,n);var i=n.length,a=new Array(i);a[0]=Wb,a[1]=Ub(t,r);for(var o=2;o<i;o++)a[o]=n[o];return Q.createElement.apply(null,a)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(V||(V={}));function Sa(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Sc(t)}function Yb(){var e=Sa.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function Kb(e){if(Array.isArray(e))return e}function Qb(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,a,o,u=[],s=!0,c=!1;try{if(a=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);s=!0);}catch(l){c=!0,i=l}finally{try{if(!s&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw i}}return u}}function Jb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(e,t){return Kb(e)||Qb(e,t)||Zu(e,t)||Jb()}function Zb(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function We(e,t){if(e==null)return{};var r,n,i=Zb(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function Xb(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const e0=Math.min,t0=Math.max,Bn=Math.round,Rn=Math.floor,Gn=e=>({x:e,y:e});function r0(e){const{x:t,y:r,width:n,height:i}=e;return{width:n,height:i,top:r,left:t,right:t+n,bottom:r+i,x:t,y:r}}function Un(){return typeof window<"u"}function bc(e){return _c(e)?(e.nodeName||"").toLowerCase():"#document"}function at(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ic(e){var t;return(t=(_c(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function _c(e){return Un()?e instanceof Node||e instanceof at(e).Node:!1}function n0(e){return Un()?e instanceof Element||e instanceof at(e).Element:!1}function ya(e){return Un()?e instanceof HTMLElement||e instanceof at(e).HTMLElement:!1}function Oc(e){return!Un()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof at(e).ShadowRoot}const i0=new Set(["inline","contents"]);function Cc(e){const{overflow:t,overflowX:r,overflowY:n,display:i}=ba(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!i0.has(i)}function a0(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const o0=new Set(["html","body","#document"]);function s0(e){return o0.has(bc(e))}function ba(e){return at(e).getComputedStyle(e)}function u0(e){if(bc(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Oc(e)&&e.host||Ic(e);return Oc(t)?t.host:t}function Dc(e){const t=u0(e);return s0(t)?e.ownerDocument?e.ownerDocument.body:e.body:ya(t)&&Cc(t)?t:Dc(t)}function Hn(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const i=Dc(e),a=i===((n=e.ownerDocument)==null?void 0:n.body),o=at(i);if(a){const u=Ia(o);return t.concat(o,o.visualViewport||[],Cc(i)?i:[],u&&r?Hn(u):[])}return t.concat(i,Hn(i,[],r))}function Ia(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function c0(e){const t=ba(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=ya(e),a=i?e.offsetWidth:r,o=i?e.offsetHeight:n,u=Bn(r)!==a||Bn(n)!==o;return u&&(r=a,n=o),{width:r,height:n,$:u}}function _a(e){return n0(e)?e:e.contextElement}function Ec(e){const t=_a(e);if(!ya(t))return Gn(1);const r=t.getBoundingClientRect(),{width:n,height:i,$:a}=c0(t);let o=(a?Bn(r.width):r.width)/n,u=(a?Bn(r.height):r.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!u||!Number.isFinite(u))&&(u=1),{x:o,y:u}}const l0=Gn(0);function d0(e){const t=at(e);return!a0()||!t.visualViewport?l0:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function f0(e,t,r){return!1}function wc(e,t,r,n){t===void 0&&(t=!1);const i=e.getBoundingClientRect(),a=_a(e);let o=Gn(1);t&&(o=Ec(e));const u=f0()?d0(a):Gn(0);let s=(i.left+u.x)/o.x,c=(i.top+u.y)/o.y,l=i.width/o.x,p=i.height/o.y;if(a){const I=at(a),g=n;let E=I,S=Ia(E);for(;S&&n&&g!==E;){const _=Ec(S),C=S.getBoundingClientRect(),v=ba(S),O=C.left+(S.clientLeft+parseFloat(v.paddingLeft))*_.x,w=C.top+(S.clientTop+parseFloat(v.paddingTop))*_.y;s*=_.x,c*=_.y,l*=_.x,p*=_.y,s+=O,c+=w,E=at(S),S=Ia(E)}}return r0({width:l,height:p,x:s,y:c})}function Tc(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function p0(e,t){let r=null,n;const i=Ic(e);function a(){var u;clearTimeout(n),(u=r)==null||u.disconnect(),r=null}function o(u,s){u===void 0&&(u=!1),s===void 0&&(s=1),a();const c=e.getBoundingClientRect(),{left:l,top:p,width:I,height:g}=c;if(u||t(),!I||!g)return;const E=Rn(p),S=Rn(i.clientWidth-(l+I)),_=Rn(i.clientHeight-(p+g)),C=Rn(l),O={rootMargin:-E+"px "+-S+"px "+-_+"px "+-C+"px",threshold:t0(0,e0(1,s))||1};let w=!0;function b(y){const f=y[0].intersectionRatio;if(f!==s){if(!w)return o();f?o(!1,f):n=setTimeout(()=>{o(!1,1e-7)},1e3)}f===1&&!Tc(c,e.getBoundingClientRect())&&o(),w=!1}try{r=new IntersectionObserver(b,{...O,root:i.ownerDocument})}catch{r=new IntersectionObserver(b,O)}r.observe(e)}return o(!0),a}function m0(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:u=typeof IntersectionObserver=="function",animationFrame:s=!1}=n,c=_a(e),l=i||a?[...c?Hn(c):[],...Hn(t)]:[];l.forEach(C=>{i&&C.addEventListener("scroll",r,{passive:!0}),a&&C.addEventListener("resize",r)});const p=c&&u?p0(c,r):null;let I=-1,g=null;o&&(g=new ResizeObserver(C=>{let[v]=C;v&&v.target===c&&g&&(g.unobserve(t),cancelAnimationFrame(I),I=requestAnimationFrame(()=>{var O;(O=g)==null||O.observe(t)})),r()}),c&&!s&&g.observe(c),g.observe(t));let E,S=s?wc(e):null;s&&_();function _(){const C=wc(e);S&&!Tc(S,C)&&r(),S=C,E=requestAnimationFrame(_)}return r(),()=>{var C;l.forEach(v=>{i&&v.removeEventListener("scroll",r),a&&v.removeEventListener("resize",r)}),p==null||p(),(C=g)==null||C.disconnect(),g=null,s&&cancelAnimationFrame(E)}}var Oa=x.useLayoutEffect,g0=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],zn=function(){};function h0(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function v0(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];var a=[].concat(n);if(t&&e)for(var o in t)t.hasOwnProperty(o)&&t[o]&&a.push("".concat(h0(e,o)));return a.filter(function(u){return u}).map(function(u){return String(u).trim()}).join(" ")}var Wn=function(t){return w0(t)?t.filter(Boolean):Dt(t)==="object"&&t!==null?[t]:[]},xc=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var r=We(t,g0);return j({},r)},he=function(t,r,n){var i=t.cx,a=t.getStyles,o=t.getClassNames,u=t.className;return{css:a(r,t),className:i(n??{},o(r,t),u)}};function S0(e,t,r){if(r){var n=r(e,t);if(typeof n=="string")return n}return e}function Yn(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function y0(e){return Yn(e)?window.innerHeight:e.clientHeight}function $c(e){return Yn(e)?window.pageYOffset:e.scrollTop}function Kn(e,t){if(Yn(e)){window.scrollTo(0,t);return}e.scrollTop=t}function b0(e){var t=getComputedStyle(e),r=t.position==="absolute",n=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(r&&t.position==="static")&&n.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function I0(e,t,r,n){return r*((e=e/n-1)*e*e+1)+t}function Qn(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:zn,i=$c(e),a=t-i,o=10,u=0;function s(){u+=o;var c=I0(u,i,a,r);Kn(e,c),u<r?window.requestAnimationFrame(s):n(e)}s()}function Fc(e,t){var r=e.getBoundingClientRect(),n=t.getBoundingClientRect(),i=t.offsetHeight/3;n.bottom+i>r.bottom?Kn(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):n.top-i<r.top&&Kn(e,Math.max(t.offsetTop-i,0))}function _0(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Pc(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function O0(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Mc=!1,C0={get passive(){return Mc=!0}},Jn=typeof window<"u"?window:{};Jn.addEventListener&&Jn.removeEventListener&&(Jn.addEventListener("p",zn,C0),Jn.removeEventListener("p",zn,!1));var D0=Mc;function E0(e){return e!=null}function w0(e){return Array.isArray(e)}function Lr(e,t,r){return e?t:r}function VO(e){return e}function BO(e){return e}var T0=function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a=Object.entries(t).filter(function(o){var u=De(o,1),s=u[0];return!n.includes(s)});return a.reduce(function(o,u){var s=De(u,2),c=s[0],l=s[1];return o[c]=l,o},{})},x0=["children","innerProps"],$0=["children","innerProps"];function F0(e){var t=e.maxHeight,r=e.menuEl,n=e.minHeight,i=e.placement,a=e.shouldScroll,o=e.isFixedPosition,u=e.controlHeight,s=b0(r),c={placement:"bottom",maxHeight:t};if(!r||!r.offsetParent)return c;var l=s.getBoundingClientRect(),p=l.height,I=r.getBoundingClientRect(),g=I.bottom,E=I.height,S=I.top,_=r.offsetParent.getBoundingClientRect(),C=_.top,v=o?window.innerHeight:y0(s),O=$c(s),w=parseInt(getComputedStyle(r).marginBottom,10),b=parseInt(getComputedStyle(r).marginTop,10),y=C-b,f=v-S,D=y+O,T=p-O-S,F=g-v+O+w,q=O+S-b,U=160;switch(i){case"auto":case"bottom":if(f>=E)return{placement:"bottom",maxHeight:t};if(T>=E&&!o)return a&&Qn(s,F,U),{placement:"bottom",maxHeight:t};if(!o&&T>=n||o&&f>=n){a&&Qn(s,F,U);var re=o?f-w:T-w;return{placement:"bottom",maxHeight:re}}if(i==="auto"||o){var X=t,$=o?y:D;return $>=n&&(X=Math.min($-w-u,t)),{placement:"top",maxHeight:X}}if(i==="bottom")return a&&Kn(s,F),{placement:"bottom",maxHeight:t};break;case"top":if(y>=E)return{placement:"top",maxHeight:t};if(D>=E&&!o)return a&&Qn(s,q,U),{placement:"top",maxHeight:t};if(!o&&D>=n||o&&y>=n){var P=t;return(!o&&D>=n||o&&y>=n)&&(P=o?y-b:D-b),a&&Qn(s,q,U),{placement:"top",maxHeight:P}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function P0(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var Nc=function(t){return t==="auto"?"bottom":t},M0=function(t,r){var n,i=t.placement,a=t.theme,o=a.borderRadius,u=a.spacing,s=a.colors;return j((n={label:"menu"},Jt(n,P0(i),"100%"),Jt(n,"position","absolute"),Jt(n,"width","100%"),Jt(n,"zIndex",1),n),r?{}:{backgroundColor:s.neutral0,borderRadius:o,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:u.menuGutter,marginTop:u.menuGutter})},kc=x.createContext(null),N0=function(t){var r=t.children,n=t.minMenuHeight,i=t.maxMenuHeight,a=t.menuPlacement,o=t.menuPosition,u=t.menuShouldScrollIntoView,s=t.theme,c=x.useContext(kc)||{},l=c.setPortalPlacement,p=x.useRef(null),I=x.useState(i),g=De(I,2),E=g[0],S=g[1],_=x.useState(null),C=De(_,2),v=C[0],O=C[1],w=s.spacing.controlHeight;return Oa(function(){var b=p.current;if(b){var y=o==="fixed",f=u&&!y,D=F0({maxHeight:i,menuEl:b,minHeight:n,placement:a,shouldScroll:f,isFixedPosition:y,controlHeight:w});S(D.maxHeight),O(D.placement),l==null||l(D.placement)}},[i,a,o,u,n,l,w]),r({ref:p,placerProps:j(j({},t),{},{placement:v||Nc(a),maxHeight:E})})},k0=function(t){var r=t.children,n=t.innerRef,i=t.innerProps;return V("div",R({},he(t,"menu",{menu:!0}),{ref:n},i),r)},A0=k0,L0=function(t,r){var n=t.maxHeight,i=t.theme.spacing.baseUnit;return j({maxHeight:n,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:i,paddingTop:i})},j0=function(t){var r=t.children,n=t.innerProps,i=t.innerRef,a=t.isMulti;return V("div",R({},he(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:i},n),r)},Ac=function(t,r){var n=t.theme,i=n.spacing.baseUnit,a=n.colors;return j({textAlign:"center"},r?{}:{color:a.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},q0=Ac,V0=Ac,B0=function(t){var r=t.children,n=r===void 0?"No options":r,i=t.innerProps,a=We(t,x0);return V("div",R({},he(j(j({},a),{},{children:n,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),n)},R0=function(t){var r=t.children,n=r===void 0?"Loading...":r,i=t.innerProps,a=We(t,$0);return V("div",R({},he(j(j({},a),{},{children:n,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),n)},G0=function(t){var r=t.rect,n=t.offset,i=t.position;return{left:r.left,position:i,top:n,width:r.width,zIndex:1}},U0=function(t){var r=t.appendTo,n=t.children,i=t.controlElement,a=t.innerProps,o=t.menuPlacement,u=t.menuPosition,s=x.useRef(null),c=x.useRef(null),l=x.useState(Nc(o)),p=De(l,2),I=p[0],g=p[1],E=x.useMemo(function(){return{setPortalPlacement:g}},[]),S=x.useState(null),_=De(S,2),C=_[0],v=_[1],O=x.useCallback(function(){if(i){var f=_0(i),D=u==="fixed"?0:window.pageYOffset,T=f[I]+D;(T!==(C==null?void 0:C.offset)||f.left!==(C==null?void 0:C.rect.left)||f.width!==(C==null?void 0:C.rect.width))&&v({offset:T,rect:f})}},[i,u,I,C==null?void 0:C.offset,C==null?void 0:C.rect.left,C==null?void 0:C.rect.width]);Oa(function(){O()},[O]);var w=x.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&s.current&&(c.current=m0(i,s.current,O,{elementResize:"ResizeObserver"in window}))},[i,O]);Oa(function(){w()},[w]);var b=x.useCallback(function(f){s.current=f,w()},[w]);if(!r&&u!=="fixed"||!C)return null;var y=V("div",R({ref:b},he(j(j({},t),{},{offset:C.offset,position:u,rect:C.rect}),"menuPortal",{"menu-portal":!0}),a),n);return V(kc.Provider,{value:E},r?kl.createPortal(y,r):y)},H0=function(t){var r=t.isDisabled,n=t.isRtl;return{label:"container",direction:n?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},z0=function(t){var r=t.children,n=t.innerProps,i=t.isDisabled,a=t.isRtl;return V("div",R({},he(t,"container",{"--is-disabled":i,"--is-rtl":a}),n),r)},W0=function(t,r){var n=t.theme.spacing,i=t.isMulti,a=t.hasValue,o=t.selectProps.controlShouldRenderValue;return j({alignItems:"center",display:i&&a&&o?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(n.baseUnit/2,"px ").concat(n.baseUnit*2,"px")})},Y0=function(t){var r=t.children,n=t.innerProps,i=t.isMulti,a=t.hasValue;return V("div",R({},he(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":a}),n),r)},K0=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Q0=function(t){var r=t.children,n=t.innerProps;return V("div",R({},he(t,"indicatorsContainer",{indicators:!0}),n),r)},Lc,J0=["size"],Z0=["innerProps","isRtl","size"],X0={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},jc=function(t){var r=t.size,n=We(t,J0);return V("svg",R({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:X0},n))},Ca=function(t){return V(jc,R({size:20},t),V("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},qc=function(t){return V(jc,R({size:20},t),V("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Vc=function(t,r){var n=t.isFocused,i=t.theme,a=i.spacing.baseUnit,o=i.colors;return j({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:n?o.neutral60:o.neutral20,padding:a*2,":hover":{color:n?o.neutral80:o.neutral40}})},e1=Vc,t1=function(t){var r=t.children,n=t.innerProps;return V("div",R({},he(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),n),r||V(qc,null))},r1=Vc,n1=function(t){var r=t.children,n=t.innerProps;return V("div",R({},he(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),n),r||V(Ca,null))},i1=function(t,r){var n=t.isDisabled,i=t.theme,a=i.spacing.baseUnit,o=i.colors;return j({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:n?o.neutral10:o.neutral20,marginBottom:a*2,marginTop:a*2})},a1=function(t){var r=t.innerProps;return V("span",R({},r,he(t,"indicatorSeparator",{"indicator-separator":!0})))},o1=Yb(Lc||(Lc=Xb([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),s1=function(t,r){var n=t.isFocused,i=t.size,a=t.theme,o=a.colors,u=a.spacing.baseUnit;return j({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},r?{}:{color:n?o.neutral60:o.neutral20,padding:u*2})},Da=function(t){var r=t.delay,n=t.offset;return V("span",{css:Sa({animation:"".concat(o1," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:n?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},u1=function(t){var r=t.innerProps,n=t.isRtl,i=t.size,a=i===void 0?4:i,o=We(t,Z0);return V("div",R({},he(j(j({},o),{},{innerProps:r,isRtl:n,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),V(Da,{delay:0,offset:n}),V(Da,{delay:160,offset:!0}),V(Da,{delay:320,offset:!n}))},c1=function(t,r){var n=t.isDisabled,i=t.isFocused,a=t.theme,o=a.colors,u=a.borderRadius,s=a.spacing;return j({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:n?o.neutral5:o.neutral0,borderColor:n?o.neutral10:i?o.primary:o.neutral20,borderRadius:u,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(o.primary):void 0,"&:hover":{borderColor:i?o.primary:o.neutral30}})},l1=function(t){var r=t.children,n=t.isDisabled,i=t.isFocused,a=t.innerRef,o=t.innerProps,u=t.menuIsOpen;return V("div",R({ref:a},he(t,"control",{control:!0,"control--is-disabled":n,"control--is-focused":i,"control--menu-is-open":u}),o,{"aria-disabled":n||void 0}),r)},d1=l1,f1=["data"],p1=function(t,r){var n=t.theme.spacing;return r?{}:{paddingBottom:n.baseUnit*2,paddingTop:n.baseUnit*2}},m1=function(t){var r=t.children,n=t.cx,i=t.getStyles,a=t.getClassNames,o=t.Heading,u=t.headingProps,s=t.innerProps,c=t.label,l=t.theme,p=t.selectProps;return V("div",R({},he(t,"group",{group:!0}),s),V(o,R({},u,{selectProps:p,theme:l,getStyles:i,getClassNames:a,cx:n}),c),V("div",null,r))},g1=function(t,r){var n=t.theme,i=n.colors,a=n.spacing;return j({label:"group",cursor:"default",display:"block"},r?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},h1=function(t){var r=xc(t);r.data;var n=We(r,f1);return V("div",R({},he(t,"groupHeading",{"group-heading":!0}),n))},v1=m1,S1=["innerRef","isDisabled","isHidden","inputClassName"],y1=function(t,r){var n=t.isDisabled,i=t.value,a=t.theme,o=a.spacing,u=a.colors;return j(j({visibility:n?"hidden":"visible",transform:i?"translateZ(0)":""},b1),r?{}:{margin:o.baseUnit/2,paddingBottom:o.baseUnit/2,paddingTop:o.baseUnit/2,color:u.neutral80})},Bc={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},b1={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":j({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Bc)},I1=function(t){return j({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Bc)},_1=function(t){var r=t.cx,n=t.value,i=xc(t),a=i.innerRef,o=i.isDisabled,u=i.isHidden,s=i.inputClassName,c=We(i,S1);return V("div",R({},he(t,"input",{"input-container":!0}),{"data-value":n||""}),V("input",R({className:r({input:!0},s),ref:a,style:I1(u),disabled:o},c)))},O1=_1,C1=function(t,r){var n=t.theme,i=n.spacing,a=n.borderRadius,o=n.colors;return j({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:o.neutral10,borderRadius:a/2,margin:i.baseUnit/2})},D1=function(t,r){var n=t.theme,i=n.borderRadius,a=n.colors,o=t.cropWithEllipsis;return j({overflow:"hidden",textOverflow:o||o===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:i/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},E1=function(t,r){var n=t.theme,i=n.spacing,a=n.borderRadius,o=n.colors,u=t.isFocused;return j({alignItems:"center",display:"flex"},r?{}:{borderRadius:a/2,backgroundColor:u?o.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:o.dangerLight,color:o.danger}})},Rc=function(t){var r=t.children,n=t.innerProps;return V("div",n,r)},w1=Rc,T1=Rc;function x1(e){var t=e.children,r=e.innerProps;return V("div",R({role:"button"},r),t||V(Ca,{size:14}))}var $1=function(t){var r=t.children,n=t.components,i=t.data,a=t.innerProps,o=t.isDisabled,u=t.removeProps,s=t.selectProps,c=n.Container,l=n.Label,p=n.Remove;return V(c,{data:i,innerProps:j(j({},he(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":o})),a),selectProps:s},V(l,{data:i,innerProps:j({},he(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},r),V(p,{data:i,innerProps:j(j({},he(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},u),selectProps:s}))},F1=$1,P1=function(t,r){var n=t.isDisabled,i=t.isFocused,a=t.isSelected,o=t.theme,u=o.spacing,s=o.colors;return j({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:a?s.primary:i?s.primary25:"transparent",color:n?s.neutral20:a?s.neutral0:"inherit",padding:"".concat(u.baseUnit*2,"px ").concat(u.baseUnit*3,"px"),":active":{backgroundColor:n?void 0:a?s.primary:s.primary50}})},M1=function(t){var r=t.children,n=t.isDisabled,i=t.isFocused,a=t.isSelected,o=t.innerRef,u=t.innerProps;return V("div",R({},he(t,"option",{option:!0,"option--is-disabled":n,"option--is-focused":i,"option--is-selected":a}),{ref:o,"aria-disabled":n},u),r)},N1=M1,k1=function(t,r){var n=t.theme,i=n.spacing,a=n.colors;return j({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:a.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},A1=function(t){var r=t.children,n=t.innerProps;return V("div",R({},he(t,"placeholder",{placeholder:!0}),n),r)},L1=A1,j1=function(t,r){var n=t.isDisabled,i=t.theme,a=i.spacing,o=i.colors;return j({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:n?o.neutral40:o.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},q1=function(t){var r=t.children,n=t.isDisabled,i=t.innerProps;return V("div",R({},he(t,"singleValue",{"single-value":!0,"single-value--is-disabled":n}),i),r)},V1=q1,B1={ClearIndicator:n1,Control:d1,DropdownIndicator:t1,DownChevron:qc,CrossIcon:Ca,Group:v1,GroupHeading:h1,IndicatorsContainer:Q0,IndicatorSeparator:a1,Input:O1,LoadingIndicator:u1,Menu:A0,MenuList:j0,MenuPortal:U0,LoadingMessage:R0,NoOptionsMessage:B0,MultiValue:F1,MultiValueContainer:w1,MultiValueLabel:T1,MultiValueRemove:x1,Option:N1,Placeholder:L1,SelectContainer:z0,SingleValue:V1,ValueContainer:Y0},R1=function(t){return j(j({},B1),t.components)},Gc=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function G1(e,t){return!!(e===t||Gc(e)&&Gc(t))}function U1(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!G1(e[r],t[r]))return!1;return!0}function H1(e,t){t===void 0&&(t=U1);var r=null;function n(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];if(r&&r.lastThis===this&&t(i,r.lastArgs))return r.lastResult;var o=e.apply(this,i);return r={lastResult:o,lastArgs:i,lastThis:this},o}return n.clear=function(){r=null},n}for(var z1={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},W1=function(t){return V("span",R({css:z1},t))},Uc=W1,Y1={guidance:function(t){var r=t.isSearchable,n=t.isMulti,i=t.tabSelectsValue,a=t.context,o=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return o?"".concat(t["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(n?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var r=t.action,n=t.label,i=n===void 0?"":n,a=t.labels,o=t.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return o?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var r=t.context,n=t.focused,i=t.options,a=t.label,o=a===void 0?"":a,u=t.selectValue,s=t.isDisabled,c=t.isSelected,l=t.isAppleDevice,p=function(S,_){return S&&S.length?"".concat(S.indexOf(_)+1," of ").concat(S.length):""};if(r==="value"&&u)return"value ".concat(o," focused, ").concat(p(u,n),".");if(r==="menu"&&l){var I=s?" disabled":"",g="".concat(c?" selected":"").concat(I);return"".concat(o).concat(g,", ").concat(p(i,n),".")}return""},onFilter:function(t){var r=t.inputValue,n=t.resultsMessage;return"".concat(n).concat(r?" for search term "+r:"",".")}},K1=function(t){var r=t.ariaSelection,n=t.focusedOption,i=t.focusedValue,a=t.focusableOptions,o=t.isFocused,u=t.selectValue,s=t.selectProps,c=t.id,l=t.isAppleDevice,p=s.ariaLiveMessages,I=s.getOptionLabel,g=s.inputValue,E=s.isMulti,S=s.isOptionDisabled,_=s.isSearchable,C=s.menuIsOpen,v=s.options,O=s.screenReaderStatus,w=s.tabSelectsValue,b=s.isLoading,y=s["aria-label"],f=s["aria-live"],D=x.useMemo(function(){return j(j({},Y1),p||{})},[p]),T=x.useMemo(function(){var $="";if(r&&D.onChange){var P=r.option,N=r.options,L=r.removedValue,ee=r.removedValues,le=r.value,M=function(se){return Array.isArray(se)?null:se},A=L||P||M(le),H=A?I(A):"",G=N||ee||void 0,W=G?G.map(I):[],J=j({isDisabled:A&&S(A,u),label:H,labels:W},r);$=D.onChange(J)}return $},[r,D,S,u,I]),F=x.useMemo(function(){var $="",P=n||i,N=!!(n&&u&&u.includes(n));if(P&&D.onFocus){var L={focused:P,label:I(P),isDisabled:S(P,u),isSelected:N,options:a,context:P===n?"menu":"value",selectValue:u,isAppleDevice:l};$=D.onFocus(L)}return $},[n,i,I,S,D,a,u,l]),q=x.useMemo(function(){var $="";if(C&&v.length&&!b&&D.onFilter){var P=O({count:a.length});$=D.onFilter({inputValue:g,resultsMessage:P})}return $},[a,g,C,D,v,O,b]),U=(r==null?void 0:r.action)==="initial-input-focus",re=x.useMemo(function(){var $="";if(D.guidance){var P=i?"value":C?"menu":"input";$=D.guidance({"aria-label":y,context:P,isDisabled:n&&S(n,u),isMulti:E,isSearchable:_,tabSelectsValue:w,isInitialFocus:U})}return $},[y,n,i,E,S,_,C,D,u,w,U]),X=V(x.Fragment,null,V("span",{id:"aria-selection"},T),V("span",{id:"aria-focused"},F),V("span",{id:"aria-results"},q),V("span",{id:"aria-guidance"},re));return V(x.Fragment,null,V(Uc,{id:c},U&&X),V(Uc,{"aria-live":f,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},o&&!U&&X))},Q1=K1,Ea=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],J1=new RegExp("["+Ea.map(function(e){return e.letters}).join("")+"]","g"),Hc={},wa=0;wa<Ea.length;wa++)for(var Ta=Ea[wa],xa=0;xa<Ta.letters.length;xa++)Hc[Ta.letters[xa]]=Ta.base;var zc=function(t){return t.replace(J1,function(r){return Hc[r]})},Z1=H1(zc),Wc=function(t){return t.replace(/^\s+|\s+$/g,"")},X1=function(t){return"".concat(t.label," ").concat(t.value)},eI=function(t){return function(r,n){if(r.data.__isNew__)return!0;var i=j({ignoreCase:!0,ignoreAccents:!0,stringify:X1,trim:!0,matchFrom:"any"},t),a=i.ignoreCase,o=i.ignoreAccents,u=i.stringify,s=i.trim,c=i.matchFrom,l=s?Wc(n):n,p=s?Wc(u(r)):u(r);return a&&(l=l.toLowerCase(),p=p.toLowerCase()),o&&(l=Z1(l),p=zc(p)),c==="start"?p.substr(0,l.length)===l:p.indexOf(l)>-1}},tI=["innerRef"];function rI(e){var t=e.innerRef,r=We(e,tI),n=T0(r,"onExited","in","enter","exit","appear");return V("input",R({ref:t},n,{css:Sa({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var nI=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function iI(e){var t=e.isEnabled,r=e.onBottomArrive,n=e.onBottomLeave,i=e.onTopArrive,a=e.onTopLeave,o=x.useRef(!1),u=x.useRef(!1),s=x.useRef(0),c=x.useRef(null),l=x.useCallback(function(_,C){if(c.current!==null){var v=c.current,O=v.scrollTop,w=v.scrollHeight,b=v.clientHeight,y=c.current,f=C>0,D=w-b-O,T=!1;D>C&&o.current&&(n&&n(_),o.current=!1),f&&u.current&&(a&&a(_),u.current=!1),f&&C>D?(r&&!o.current&&r(_),y.scrollTop=w,T=!0,o.current=!0):!f&&-C>O&&(i&&!u.current&&i(_),y.scrollTop=0,T=!0,u.current=!0),T&&nI(_)}},[r,n,i,a]),p=x.useCallback(function(_){l(_,_.deltaY)},[l]),I=x.useCallback(function(_){s.current=_.changedTouches[0].clientY},[]),g=x.useCallback(function(_){var C=s.current-_.changedTouches[0].clientY;l(_,C)},[l]),E=x.useCallback(function(_){if(_){var C=D0?{passive:!1}:!1;_.addEventListener("wheel",p,C),_.addEventListener("touchstart",I,C),_.addEventListener("touchmove",g,C)}},[g,I,p]),S=x.useCallback(function(_){_&&(_.removeEventListener("wheel",p,!1),_.removeEventListener("touchstart",I,!1),_.removeEventListener("touchmove",g,!1))},[g,I,p]);return x.useEffect(function(){if(t){var _=c.current;return E(_),function(){S(_)}}},[t,E,S]),function(_){c.current=_}}var Yc=["boxSizing","height","overflow","paddingRight","position"],Kc={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Qc(e){e.cancelable&&e.preventDefault()}function Jc(e){e.stopPropagation()}function Zc(){var e=this.scrollTop,t=this.scrollHeight,r=e+this.offsetHeight;e===0?this.scrollTop=1:r===t&&(this.scrollTop=e-1)}function Xc(){return"ontouchstart"in window||navigator.maxTouchPoints}var el=!!(typeof window<"u"&&window.document&&window.document.createElement),jr=0,rr={capture:!1,passive:!1};function aI(e){var t=e.isEnabled,r=e.accountForScrollbars,n=r===void 0?!0:r,i=x.useRef({}),a=x.useRef(null),o=x.useCallback(function(s){if(el){var c=document.body,l=c&&c.style;if(n&&Yc.forEach(function(E){var S=l&&l[E];i.current[E]=S}),n&&jr<1){var p=parseInt(i.current.paddingRight,10)||0,I=document.body?document.body.clientWidth:0,g=window.innerWidth-I+p||0;Object.keys(Kc).forEach(function(E){var S=Kc[E];l&&(l[E]=S)}),l&&(l.paddingRight="".concat(g,"px"))}c&&Xc()&&(c.addEventListener("touchmove",Qc,rr),s&&(s.addEventListener("touchstart",Zc,rr),s.addEventListener("touchmove",Jc,rr))),jr+=1}},[n]),u=x.useCallback(function(s){if(el){var c=document.body,l=c&&c.style;jr=Math.max(jr-1,0),n&&jr<1&&Yc.forEach(function(p){var I=i.current[p];l&&(l[p]=I)}),c&&Xc()&&(c.removeEventListener("touchmove",Qc,rr),s&&(s.removeEventListener("touchstart",Zc,rr),s.removeEventListener("touchmove",Jc,rr)))}},[n]);return x.useEffect(function(){if(t){var s=a.current;return o(s),function(){u(s)}}},[t,o,u]),function(s){a.current=s}}var oI=function(t){var r=t.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},sI={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function uI(e){var t=e.children,r=e.lockEnabled,n=e.captureEnabled,i=n===void 0?!0:n,a=e.onBottomArrive,o=e.onBottomLeave,u=e.onTopArrive,s=e.onTopLeave,c=iI({isEnabled:i,onBottomArrive:a,onBottomLeave:o,onTopArrive:u,onTopLeave:s}),l=aI({isEnabled:r}),p=function(g){c(g),l(g)};return V(x.Fragment,null,r&&V("div",{onClick:oI,css:sI}),t(p))}var cI={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},lI=function(t){var r=t.name,n=t.onFocus;return V("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:n,css:cI,value:"",onChange:function(){}})},dI=lI;function $a(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function fI(){return $a(/^iPhone/i)}function tl(){return $a(/^Mac/i)}function pI(){return $a(/^iPad/i)||tl()&&navigator.maxTouchPoints>1}function mI(){return fI()||pI()}function gI(){return tl()||mI()}var hI=function(t){return t.label},rl=function(t){return t.label},nl=function(t){return t.value},vI=function(t){return!!t.isDisabled},SI={clearIndicator:r1,container:H0,control:c1,dropdownIndicator:e1,group:p1,groupHeading:g1,indicatorsContainer:K0,indicatorSeparator:i1,input:y1,loadingIndicator:s1,loadingMessage:V0,menu:M0,menuList:L0,menuPortal:G0,multiValue:C1,multiValueLabel:D1,multiValueRemove:E1,noOptionsMessage:q0,option:P1,placeholder:k1,singleValue:j1,valueContainer:W0},yI={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},bI=4,il=4,II=38,_I=il*2,OI={baseUnit:il,controlHeight:II,menuGutter:_I},Fa={borderRadius:bI,colors:yI,spacing:OI},CI={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Pc(),captureMenuScroll:!Pc(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:eI(),formatGroupLabel:hI,getOptionLabel:rl,getOptionValue:nl,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:vI,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!O0(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var r=t.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function al(e,t,r,n){var i=ll(e,t,r),a=dl(e,t,r),o=cl(e,t),u=Xn(e,t);return{type:"option",data:t,isDisabled:i,isSelected:a,label:o,value:u,index:n}}function Zn(e,t){return e.options.map(function(r,n){if("options"in r){var i=r.options.map(function(o,u){return al(e,o,t,u)}).filter(function(o){return ul(e,o)});return i.length>0?{type:"group",data:r,options:i,index:n}:void 0}var a=al(e,r,t,n);return ul(e,a)?a:void 0}).filter(E0)}function ol(e){return e.reduce(function(t,r){return r.type==="group"?t.push.apply(t,Zt(r.options.map(function(n){return n.data}))):t.push(r.data),t},[])}function sl(e,t){return e.reduce(function(r,n){return n.type==="group"?r.push.apply(r,Zt(n.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(n.index,"-").concat(i.index)}}))):r.push({data:n.data,id:"".concat(t,"-").concat(n.index)}),r},[])}function DI(e,t){return ol(Zn(e,t))}function ul(e,t){var r=e.inputValue,n=r===void 0?"":r,i=t.data,a=t.isSelected,o=t.label,u=t.value;return(!pl(e)||!a)&&fl(e,{label:o,value:u,data:i},n)}function EI(e,t){var r=e.focusedValue,n=e.selectValue,i=n.indexOf(r);if(i>-1){var a=t.indexOf(r);if(a>-1)return r;if(i<t.length)return t[i]}return null}function wI(e,t){var r=e.focusedOption;return r&&t.indexOf(r)>-1?r:t[0]}var Pa=function(t,r){var n,i=(n=t.find(function(a){return a.data===r}))===null||n===void 0?void 0:n.id;return i||null},cl=function(t,r){return t.getOptionLabel(r)},Xn=function(t,r){return t.getOptionValue(r)};function ll(e,t,r){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,r):!1}function dl(e,t,r){if(r.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,r);var n=Xn(e,t);return r.some(function(i){return Xn(e,i)===n})}function fl(e,t,r){return e.filterOption?e.filterOption(t,r):!0}var pl=function(t){var r=t.hideSelectedOptions,n=t.isMulti;return r===void 0?n:r},TI=1,Ma=function(e){Vy(r,e);var t=Gy(r);function r(n){var i;if(jy(this,r),i=t.call(this,n),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,c){var l=i.props,p=l.onChange,I=l.name;c.name=I,i.ariaOnChange(s,c),p(s,c)},i.setValue=function(s,c,l){var p=i.props,I=p.closeMenuOnSelect,g=p.isMulti,E=p.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:E}),I&&(i.setState({inputIsHiddenAfterUpdate:!g}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:c,option:l})},i.selectOption=function(s){var c=i.props,l=c.blurInputOnSelect,p=c.isMulti,I=c.name,g=i.state.selectValue,E=p&&i.isOptionSelected(s,g),S=i.isOptionDisabled(s,g);if(E){var _=i.getOptionValue(s);i.setValue(g.filter(function(C){return i.getOptionValue(C)!==_}),"deselect-option",s)}else if(!S)p?i.setValue([].concat(Zt(g),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:I});return}l&&i.blurInput()},i.removeValue=function(s){var c=i.props.isMulti,l=i.state.selectValue,p=i.getOptionValue(s),I=l.filter(function(E){return i.getOptionValue(E)!==p}),g=Lr(c,I,I[0]||null);i.onChange(g,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Lr(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,c=i.state.selectValue,l=c[c.length-1],p=c.slice(0,c.length-1),I=Lr(s,p,p[0]||null);l&&i.onChange(I,{action:"pop-value",removedValue:l})},i.getFocusedOptionId=function(s){return Pa(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return sl(Zn(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];return v0.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(s){return cl(i.props,s)},i.getOptionValue=function(s){return Xn(i.props,s)},i.getStyles=function(s,c){var l=i.props.unstyled,p=SI[s](c,l);p.boxSizing="border-box";var I=i.props.styles[s];return I?I(p,c):p},i.getClassNames=function(s,c){var l,p;return(l=(p=i.props.classNames)[s])===null||l===void 0?void 0:l.call(p,c)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return R1(i.props)},i.buildCategorizedOptions=function(){return Zn(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return ol(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,c){i.setState({ariaSelection:j({value:s},c)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var c=i.props,l=c.isMulti,p=c.menuIsOpen;i.focusInput(),p?(i.setState({inputIsHiddenAfterUpdate:!l}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&Yn(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var c=s.touches,l=c&&c.item(0);l&&(i.initialTouchX=l.clientX,i.initialTouchY=l.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var c=s.touches,l=c&&c.item(0);if(l){var p=Math.abs(l.clientX-i.initialTouchX),I=Math.abs(l.clientY-i.initialTouchY),g=5;i.userIsDragging=p>g||I>g}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var c=i.props.inputValue,l=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(l,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var c=i.getFocusableOptions(),l=c.indexOf(s);i.setState({focusedOption:s,focusedOptionId:l>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return pl(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var c=i.props,l=c.isMulti,p=c.backspaceRemovesValue,I=c.escapeClearsValue,g=c.inputValue,E=c.isClearable,S=c.isDisabled,_=c.menuIsOpen,C=c.onKeyDown,v=c.tabSelectsValue,O=c.openMenuOnFocus,w=i.state,b=w.focusedOption,y=w.focusedValue,f=w.selectValue;if(!S&&!(typeof C=="function"&&(C(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!l||g)return;i.focusValue("previous");break;case"ArrowRight":if(!l||g)return;i.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(y)i.removeValue(y);else{if(!p)return;l?i.popValue():E&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!_||!v||!b||O&&i.isOptionSelected(b,f))return;i.selectOption(b);break;case"Enter":if(s.keyCode===229)break;if(_){if(!b||i.isComposing)return;i.selectOption(b);break}return;case"Escape":_?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:g}),i.onMenuClose()):E&&I&&i.clearValue();break;case" ":if(g)return;if(!_){i.openMenu("first");break}if(!b)return;i.selectOption(b);break;case"ArrowUp":_?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":_?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!_)return;i.focusOption("pageup");break;case"PageDown":if(!_)return;i.focusOption("pagedown");break;case"Home":if(!_)return;i.focusOption("first");break;case"End":if(!_)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++TI),i.state.selectValue=Wn(n.value),n.menuIsOpen&&i.state.selectValue.length){var a=i.getFocusableOptionsWithIds(),o=i.buildFocusableOptions(),u=o.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=a,i.state.focusedOption=o[u],i.state.focusedOptionId=Pa(a,o[u])}return i}return qy(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Fc(this.menuListRef,this.focusedOptionRef),gI()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var a=this.props,o=a.isDisabled,u=a.menuIsOpen,s=this.state.isFocused;(s&&!o&&i.isDisabled||s&&u&&!i.menuIsOpen)&&this.focusInput(),s&&o&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!o&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Fc(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,a){this.props.onInputChange(i,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var a=this,o=this.state,u=o.selectValue,s=o.isFocused,c=this.buildFocusableOptions(),l=i==="first"?0:c.length-1;if(!this.props.isMulti){var p=c.indexOf(u[0]);p>-1&&(l=p)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[l],focusedOptionId:this.getFocusedOptionId(c[l])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(i){var a=this.state,o=a.selectValue,u=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=o.indexOf(u);u||(s=-1);var c=o.length-1,l=-1;if(o.length){switch(i){case"previous":s===0?l=0:s===-1?l=c:l=s-1;break;case"next":s>-1&&s<c&&(l=s+1);break}this.setState({inputIsHidden:l!==-1,focusedValue:o[l]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,o=this.state.focusedOption,u=this.getFocusableOptions();if(u.length){var s=0,c=u.indexOf(o);o||(c=-1),i==="up"?s=c>0?c-1:u.length-1:i==="down"?s=(c+1)%u.length:i==="pageup"?(s=c-a,s<0&&(s=0)):i==="pagedown"?(s=c+a,s>u.length-1&&(s=u.length-1)):i==="last"&&(s=u.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:u[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(u[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Fa):j(j({},Fa),this.props.theme):Fa}},{key:"getCommonProps",value:function(){var i=this.clearValue,a=this.cx,o=this.getStyles,u=this.getClassNames,s=this.getValue,c=this.selectOption,l=this.setValue,p=this.props,I=p.isMulti,g=p.isRtl,E=p.options,S=this.hasValue();return{clearValue:i,cx:a,getStyles:o,getClassNames:u,getValue:s,hasValue:S,isMulti:I,isRtl:g,options:E,selectOption:c,selectProps:p,setValue:l,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,a=i.isClearable,o=i.isMulti;return a===void 0?o:a}},{key:"isOptionDisabled",value:function(i,a){return ll(this.props,i,a)}},{key:"isOptionSelected",value:function(i,a){return dl(this.props,i,a)}},{key:"filterOption",value:function(i,a){return fl(this.props,i,a)}},{key:"formatOptionLabel",value:function(i,a){if(typeof this.props.formatOptionLabel=="function"){var o=this.props.inputValue,u=this.state.selectValue;return this.props.formatOptionLabel(i,{context:a,inputValue:o,selectValue:u})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,a=i.isDisabled,o=i.isSearchable,u=i.inputId,s=i.inputValue,c=i.tabIndex,l=i.form,p=i.menuIsOpen,I=i.required,g=this.getComponents(),E=g.Input,S=this.state,_=S.inputIsHidden,C=S.ariaSelection,v=this.commonProps,O=u||this.getElementId("input"),w=j(j(j({"aria-autocomplete":"list","aria-expanded":p,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":I,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},p&&{"aria-controls":this.getElementId("listbox")}),!o&&{"aria-readonly":!0}),this.hasValue()?(C==null?void 0:C.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return o?Q.createElement(E,R({},v,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:O,innerRef:this.getInputRef,isDisabled:a,isHidden:_,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:l,type:"text",value:s},w)):Q.createElement(rI,R({id:O,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:zn,onFocus:this.onInputFocus,disabled:a,tabIndex:c,inputMode:"none",form:l,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,a=this.getComponents(),o=a.MultiValue,u=a.MultiValueContainer,s=a.MultiValueLabel,c=a.MultiValueRemove,l=a.SingleValue,p=a.Placeholder,I=this.commonProps,g=this.props,E=g.controlShouldRenderValue,S=g.isDisabled,_=g.isMulti,C=g.inputValue,v=g.placeholder,O=this.state,w=O.selectValue,b=O.focusedValue,y=O.isFocused;if(!this.hasValue()||!E)return C?null:Q.createElement(p,R({},I,{key:"placeholder",isDisabled:S,isFocused:y,innerProps:{id:this.getElementId("placeholder")}}),v);if(_)return w.map(function(D,T){var F=D===b,q="".concat(i.getOptionLabel(D),"-").concat(i.getOptionValue(D));return Q.createElement(o,R({},I,{components:{Container:u,Label:s,Remove:c},isFocused:F,isDisabled:S,key:q,index:T,removeProps:{onClick:function(){return i.removeValue(D)},onTouchEnd:function(){return i.removeValue(D)},onMouseDown:function(re){re.preventDefault()}},data:D}),i.formatOptionLabel(D,"value"))});if(C)return null;var f=w[0];return Q.createElement(l,R({},I,{data:f,isDisabled:S}),this.formatOptionLabel(f,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),a=i.ClearIndicator,o=this.commonProps,u=this.props,s=u.isDisabled,c=u.isLoading,l=this.state.isFocused;if(!this.isClearable()||!a||s||!this.hasValue()||c)return null;var p={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return Q.createElement(a,R({},o,{innerProps:p,isFocused:l}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),a=i.LoadingIndicator,o=this.commonProps,u=this.props,s=u.isDisabled,c=u.isLoading,l=this.state.isFocused;if(!a||!c)return null;var p={"aria-hidden":"true"};return Q.createElement(a,R({},o,{innerProps:p,isDisabled:s,isFocused:l}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),a=i.DropdownIndicator,o=i.IndicatorSeparator;if(!a||!o)return null;var u=this.commonProps,s=this.props.isDisabled,c=this.state.isFocused;return Q.createElement(o,R({},u,{isDisabled:s,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),a=i.DropdownIndicator;if(!a)return null;var o=this.commonProps,u=this.props.isDisabled,s=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return Q.createElement(a,R({},o,{innerProps:c,isDisabled:u,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,a=this.getComponents(),o=a.Group,u=a.GroupHeading,s=a.Menu,c=a.MenuList,l=a.MenuPortal,p=a.LoadingMessage,I=a.NoOptionsMessage,g=a.Option,E=this.commonProps,S=this.state.focusedOption,_=this.props,C=_.captureMenuScroll,v=_.inputValue,O=_.isLoading,w=_.loadingMessage,b=_.minMenuHeight,y=_.maxMenuHeight,f=_.menuIsOpen,D=_.menuPlacement,T=_.menuPosition,F=_.menuPortalTarget,q=_.menuShouldBlockScroll,U=_.menuShouldScrollIntoView,re=_.noOptionsMessage,X=_.onMenuScrollToTop,$=_.onMenuScrollToBottom;if(!f)return null;var P=function(H,G){var W=H.type,J=H.data,B=H.isDisabled,se=H.isSelected,Me=H.label,Re=H.value,nr=S===J,xt=B?void 0:function(){return i.onOptionHover(J)},Va=B?void 0:function(){return i.selectOption(J)},ti="".concat(i.getElementId("option"),"-").concat(G),Vr={id:ti,onClick:Va,onMouseMove:xt,onMouseOver:xt,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:se};return Q.createElement(g,R({},E,{innerProps:Vr,data:J,isDisabled:B,isSelected:se,key:ti,label:Me,type:W,value:Re,isFocused:nr,innerRef:nr?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(H.data,"menu"))},N;if(this.hasOptions())N=this.getCategorizedOptions().map(function(A){if(A.type==="group"){var H=A.data,G=A.options,W=A.index,J="".concat(i.getElementId("group"),"-").concat(W),B="".concat(J,"-heading");return Q.createElement(o,R({},E,{key:J,data:H,options:G,Heading:u,headingProps:{id:B,data:A.data},label:i.formatGroupLabel(A.data)}),A.options.map(function(se){return P(se,"".concat(W,"-").concat(se.index))}))}else if(A.type==="option")return P(A,"".concat(A.index))});else if(O){var L=w({inputValue:v});if(L===null)return null;N=Q.createElement(p,E,L)}else{var ee=re({inputValue:v});if(ee===null)return null;N=Q.createElement(I,E,ee)}var le={minMenuHeight:b,maxMenuHeight:y,menuPlacement:D,menuPosition:T,menuShouldScrollIntoView:U},M=Q.createElement(N0,R({},E,le),function(A){var H=A.ref,G=A.placerProps,W=G.placement,J=G.maxHeight;return Q.createElement(s,R({},E,le,{innerRef:H,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:O,placement:W}),Q.createElement(uI,{captureEnabled:C,onTopArrive:X,onBottomArrive:$,lockEnabled:q},function(B){return Q.createElement(c,R({},E,{innerRef:function(Me){i.getMenuListRef(Me),B(Me)},innerProps:{role:"listbox","aria-multiselectable":E.isMulti,id:i.getElementId("listbox")},isLoading:O,maxHeight:J,focusedOption:S}),N)}))});return F||T==="fixed"?Q.createElement(l,R({},E,{appendTo:F,controlElement:this.controlRef,menuPlacement:D,menuPosition:T}),M):M}},{key:"renderFormField",value:function(){var i=this,a=this.props,o=a.delimiter,u=a.isDisabled,s=a.isMulti,c=a.name,l=a.required,p=this.state.selectValue;if(l&&!this.hasValue()&&!u)return Q.createElement(dI,{name:c,onFocus:this.onValueInputFocus});if(!(!c||u))if(s)if(o){var I=p.map(function(S){return i.getOptionValue(S)}).join(o);return Q.createElement("input",{name:c,type:"hidden",value:I})}else{var g=p.length>0?p.map(function(S,_){return Q.createElement("input",{key:"i-".concat(_),name:c,type:"hidden",value:i.getOptionValue(S)})}):Q.createElement("input",{name:c,type:"hidden",value:""});return Q.createElement("div",null,g)}else{var E=p[0]?this.getOptionValue(p[0]):"";return Q.createElement("input",{name:c,type:"hidden",value:E})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,a=this.state,o=a.ariaSelection,u=a.focusedOption,s=a.focusedValue,c=a.isFocused,l=a.selectValue,p=this.getFocusableOptions();return Q.createElement(Q1,R({},i,{id:this.getElementId("live-region"),ariaSelection:o,focusedOption:u,focusedValue:s,isFocused:c,selectValue:l,focusableOptions:p,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),a=i.Control,o=i.IndicatorsContainer,u=i.SelectContainer,s=i.ValueContainer,c=this.props,l=c.className,p=c.id,I=c.isDisabled,g=c.menuIsOpen,E=this.state.isFocused,S=this.commonProps=this.getCommonProps();return Q.createElement(u,R({},S,{className:l,innerProps:{id:p,onKeyDown:this.onKeyDown},isDisabled:I,isFocused:E}),this.renderLiveRegion(),Q.createElement(a,R({},S,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:I,isFocused:E,menuIsOpen:g}),Q.createElement(s,R({},S,{isDisabled:I}),this.renderPlaceholderOrValue(),this.renderInput()),Q.createElement(o,R({},S,{isDisabled:I}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,a){var o=a.prevProps,u=a.clearFocusValueOnUpdate,s=a.inputIsHiddenAfterUpdate,c=a.ariaSelection,l=a.isFocused,p=a.prevWasFocused,I=a.instancePrefix,g=i.options,E=i.value,S=i.menuIsOpen,_=i.inputValue,C=i.isMulti,v=Wn(E),O={};if(o&&(E!==o.value||g!==o.options||S!==o.menuIsOpen||_!==o.inputValue)){var w=S?DI(i,v):[],b=S?sl(Zn(i,v),"".concat(I,"-option")):[],y=u?EI(a,v):null,f=wI(a,w),D=Pa(b,f);O={selectValue:v,focusedOption:f,focusedOptionId:D,focusableOptionsWithIds:b,focusedValue:y,clearFocusValueOnUpdate:!1}}var T=s!=null&&i!==o?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},F=c,q=l&&p;return l&&!q&&(F={value:Lr(C,v,v[0]||null),options:v,action:"initial-input-focus"},q=!p),(c==null?void 0:c.action)==="initial-input-focus"&&(F=null),j(j(j({},O),T),{},{prevProps:i,ariaSelection:F,prevWasFocused:q})}}]),r}(x.Component);Ma.defaultProps=CI;var xI=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function ml(e){var t=e.defaultInputValue,r=t===void 0?"":t,n=e.defaultMenuIsOpen,i=n===void 0?!1:n,a=e.defaultValue,o=a===void 0?null:a,u=e.inputValue,s=e.menuIsOpen,c=e.onChange,l=e.onInputChange,p=e.onMenuClose,I=e.onMenuOpen,g=e.value,E=We(e,xI),S=x.useState(u!==void 0?u:r),_=De(S,2),C=_[0],v=_[1],O=x.useState(s!==void 0?s:i),w=De(O,2),b=w[0],y=w[1],f=x.useState(g!==void 0?g:o),D=De(f,2),T=D[0],F=D[1],q=x.useCallback(function(L,ee){typeof c=="function"&&c(L,ee),F(L)},[c]),U=x.useCallback(function(L,ee){var le;typeof l=="function"&&(le=l(L,ee)),v(le!==void 0?le:L)},[l]),re=x.useCallback(function(){typeof I=="function"&&I(),y(!0)},[I]),X=x.useCallback(function(){typeof p=="function"&&p(),y(!1)},[p]),$=u!==void 0?u:C,P=s!==void 0?s:b,N=g!==void 0?g:T;return j(j({},E),{},{inputValue:$,menuIsOpen:P,onChange:q,onInputChange:U,onMenuClose:X,onMenuOpen:re,value:N})}var $I=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function gl(e){var t=e.defaultOptions,r=t===void 0?!1:t,n=e.cacheOptions,i=n===void 0?!1:n,a=e.loadOptions;e.options;var o=e.isLoading,u=o===void 0?!1:o,s=e.onInputChange,c=e.filterOption,l=c===void 0?null:c,p=We(e,$I),I=p.inputValue,g=x.useRef(void 0),E=x.useRef(!1),S=x.useState(Array.isArray(r)?r:void 0),_=De(S,2),C=_[0],v=_[1],O=x.useState(typeof I<"u"?I:""),w=De(O,2),b=w[0],y=w[1],f=x.useState(r===!0),D=De(f,2),T=D[0],F=D[1],q=x.useState(void 0),U=De(q,2),re=U[0],X=U[1],$=x.useState([]),P=De($,2),N=P[0],L=P[1],ee=x.useState(!1),le=De(ee,2),M=le[0],A=le[1],H=x.useState({}),G=De(H,2),W=G[0],J=G[1],B=x.useState(void 0),se=De(B,2),Me=se[0],Re=se[1],nr=x.useState(void 0),xt=De(nr,2),Va=xt[0],ti=xt[1];i!==Va&&(J({}),ti(i)),r!==Me&&(v(Array.isArray(r)?r:void 0),Re(r)),x.useEffect(function(){return E.current=!0,function(){E.current=!1}},[]);var Vr=x.useCallback(function(Br,ir){if(!a)return ir();var Be=a(Br,ir);Be&&typeof Be.then=="function"&&Be.then(ir,function(){return ir()})},[a]);x.useEffect(function(){r===!0&&Vr(b,function(Br){E.current&&(v(Br||[]),F(!!g.current))})},[]);var wO=x.useCallback(function(Br,ir){var Be=S0(Br,ir,s);if(!Be){g.current=void 0,y(""),X(""),L([]),F(!1),A(!1);return}if(i&&W[Be])y(Be),X(Be),L(W[Be]),F(!1),A(!1);else{var xO=g.current={};y(Be),F(!0),A(!re),Vr(Be,function(Ba){E&&xO===g.current&&(g.current=void 0,F(!1),X(Be),L(Ba||[]),A(!1),J(Ba?j(j({},W),{},Jt({},Be,Ba)):W))})}},[i,Vr,re,W,s]),TO=M?[]:b&&re?N:C||[];return j(j({},p),{},{options:TO,isLoading:T||u,onInputChange:wO,filterOption:l})}var FI=x.forwardRef(function(e,t){var r=gl(e),n=ml(r);return Q.createElement(Ma,R({ref:t},n))}),PI=FI,MI=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],hl=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,i=String(t).toLowerCase(),a=String(n.getOptionValue(r)).toLowerCase(),o=String(n.getOptionLabel(r)).toLowerCase();return a===i||o===i},Na={formatCreateLabel:function(t){return'Create "'.concat(t,'"')},isValidNewOption:function(t,r,n,i){return!(!t||r.some(function(a){return hl(t,a,i)})||n.some(function(a){return hl(t,a,i)}))},getNewOptionData:function(t,r){return{label:r,value:t,__isNew__:!0}}};function NI(e){var t=e.allowCreateWhileLoading,r=t===void 0?!1:t,n=e.createOptionPosition,i=n===void 0?"last":n,a=e.formatCreateLabel,o=a===void 0?Na.formatCreateLabel:a,u=e.isValidNewOption,s=u===void 0?Na.isValidNewOption:u,c=e.getNewOptionData,l=c===void 0?Na.getNewOptionData:c,p=e.onCreateOption,I=e.options,g=I===void 0?[]:I,E=e.onChange,S=We(e,MI),_=S.getOptionValue,C=_===void 0?nl:_,v=S.getOptionLabel,O=v===void 0?rl:v,w=S.inputValue,b=S.isLoading,y=S.isMulti,f=S.value,D=S.name,T=x.useMemo(function(){return s(w,Wn(f),g,{getOptionValue:C,getOptionLabel:O})?l(w,o(w)):void 0},[o,l,O,C,w,s,g,f]),F=x.useMemo(function(){return(r||!b)&&T?i==="first"?[T].concat(Zt(g)):[].concat(Zt(g),[T]):g},[r,i,b,T,g]),q=x.useCallback(function(U,re){if(re.action!=="select-option")return E(U,re);var X=Array.isArray(U)?U:[U];if(X[X.length-1]===T){if(p)p(w);else{var $=l(w,w),P={action:"create-option",name:D,option:$};E(Lr(y,[].concat(Zt(Wn(f)),[$]),$),P)}return}E(U,re)},[l,w,y,D,T,p,E,f]);return j(j({},S),{},{options:F,onChange:q})}var kI=x.forwardRef(function(e,t){var r=gl(e),n=ml(r),i=NI(n);return Q.createElement(Ma,R({ref:t},i))}),AI=kI,LI="[object Symbol]";function jI(e){return typeof e=="symbol"||Kt(e)&&zt(e)==LI}var qI=/\s/;function VI(e){for(var t=e.length;t--&&qI.test(e.charAt(t)););return t}var BI=/^\s+/;function RI(e){return e&&e.slice(0,VI(e)+1).replace(BI,"")}var vl=NaN,GI=/^[-+]0x[0-9a-f]+$/i,UI=/^0b[01]+$/i,HI=/^0o[0-7]+$/i,zI=parseInt;function Sl(e){if(typeof e=="number")return e;if(jI(e))return vl;if(It(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=It(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=RI(e);var r=UI.test(e);return r||HI.test(e)?zI(e.slice(2),r?2:8):GI.test(e)?vl:+e}var ka=function(){return ze.Date.now()},WI="Expected a function",YI=Math.max,KI=Math.min;function QI(e,t,r){var n,i,a,o,u,s,c=0,l=!1,p=!1,I=!0;if(typeof e!="function")throw new TypeError(WI);t=Sl(t)||0,It(r)&&(l=!!r.leading,p="maxWait"in r,a=p?YI(Sl(r.maxWait)||0,t):a,I="trailing"in r?!!r.trailing:I);function g(y){var f=n,D=i;return n=i=void 0,c=y,o=e.apply(D,f),o}function E(y){return c=y,u=setTimeout(C,t),l?g(y):o}function S(y){var f=y-s,D=y-c,T=t-f;return p?KI(T,a-D):T}function _(y){var f=y-s,D=y-c;return s===void 0||f>=t||f<0||p&&D>=a}function C(){var y=ka();if(_(y))return v(y);u=setTimeout(C,S(y))}function v(y){return u=void 0,I&&n?g(y):(n=i=void 0,o)}function O(){u!==void 0&&clearTimeout(u),c=0,n=s=i=u=void 0}function w(){return u===void 0?o:v(ka())}function b(){var y=ka(),f=_(y);if(n=arguments,i=this,s=y,f){if(u===void 0)return E(s);if(p)return clearTimeout(u),u=setTimeout(C,t),g(s)}return u===void 0&&(u=setTimeout(C,t)),o}return b.cancel=O,b.flush=w,b}function Aa(e,t,r){const n=x.useRef(e);return n.current=e,x.useCallback(QI(function(){return n.current.apply(this,arguments)},t,r),[t,r==null?void 0:r.leading,r==null?void 0:r.trailing,r==null?void 0:r.maxWait])}const JI=e=>Array.isArray(e)?e:e?[e]:[],ZI=e=>{const{selectedOptions:t,isDisabled:r=!1,creatable:n=!1,components:i,placeholder:a,showDropdown:o=!0,noOptionsMessageText:u="None"}=e,c={...e,styles:{option:l=>({...l,color:"#000"}),container:(l,p)=>({...l,zIndex:p.isFocused?10:l.zIndex}),multiValueRemove:(l,p)=>({...l,color:p.isFocused?l.color:"#333333"})},defaultOptions:!0,isClearable:!0,value:t??null,className:ut("react-select",e.className),classNamePrefix:"react-select",noOptionsMessage:()=>u,placeholder:r?"":a,components:{...i,IndicatorSeparator:()=>null,...(!o||r)&&{DropdownIndicator:()=>null},...r&&{MultiValueRemove:()=>null}}};return n?h.jsx(AI,{...c,isDisabled:r}):h.jsx(PI,{...c})},XI=e=>{const{values:t,isMulti:r,onSelect:n,creatable:i=!1,isValidNewOption:a,getNamedObject:o,loadOptions:u}=e,[s,c]=x.useState(!1),l=Ld(),p=x.useMemo(()=>{if(r&&t)return t.map(v=>({object:v,value:v.id}));if(t!=null&&t.length)return{object:t[0],value:t[0].id}},[t,r]),I=v=>{const O=JI(v);n==null||n(O.map(w=>w.object))},g=i&&e.onCreate?async v=>{try{c(!0);const{value:O,item:w,message:b}=await e.onCreate(v),y={object:w,value:O};I(r?[...p??[],y]:y),c(!1),l.success(h.jsxs("span",{children:[b,": ",h.jsx("b",{children:v})]}))}catch(O){l.error(O)}}:void 0,E=i&&o?(v,O)=>({value:"",object:o("",O)}):void 0,S=i&&a?(v,O,w)=>a(v,w.map(b=>b.object)):void 0,C=Aa((v,O)=>{u(v).then(O)},100);return h.jsx(ZI,{...e,loadOptions:C,isLoading:e.isLoading||s,onChange:I,selectedOptions:p,onCreateOption:g,getNewOptionData:E,isValidNewOption:S})};function yl(e){return{value:e.id,object:e}}function e_(e){return t_(e)!==e}function t_(e){const t=x.useRef();return x.useEffect(()=>{t.current=e},[e]),t.current}const bl=e=>{const{error:t,message:r=h.jsx(Te.FormattedMessage,{id:"errors.header"})}=e;return h.jsx("div",{className:"ErrorMessage-container",children:h.jsxs(ne.Alert,{variant:"danger",className:"ErrorMessage",children:[h.jsxs(ne.Alert.Heading,{className:"ErrorMessage-header",children:[h.jsx(Xe,{icon:Se.faWarning}),r]}),h.jsx("div",{className:"ErrorMessage-content code",children:t})]})})},Il="LoadingIndicator",r_=`${Il}-message`,_l=Pe("LoadingIndicator",({message:e,inline:t=!1,small:r=!1,card:n=!1})=>{const a=Te.useIntl().formatMessage({id:"loading.generic"});return h.jsxs("div",{className:ut(Il,{inline:t,small:r,"card-based":n}),children:[h.jsx(ne.Spinner,{animation:"border",role:"status",size:r?"sm":void 0,children:h.jsx("span",{className:"sr-only",children:a})}),e!==""&&h.jsx("h4",{className:r_,children:e??a})]})}),Ol=Pe("HoverPopover",({enterDelay:e=200,leaveDelay:t=200,content:r,children:n,className:i,placement:a="top",popperConfig:o,onOpen:u,onClose:s,target:c})=>{const[l,p]=x.useState(!1),[I,g]=x.useState(null),E=x.useRef(),S=x.useRef(),_=x.useRef(`hover-popover-${Math.random().toString(36).slice(2)}`),C=x.useCallback(b=>{g(b)},[]),v=x.useCallback(()=>(c==null?void 0:c.current)??I,[c,I]),O=x.useCallback(()=>{window.clearTimeout(S.current),E.current=window.setTimeout(()=>{p(!0),u==null||u()},e)},[e,u]),w=x.useCallback(()=>{window.clearTimeout(E.current),S.current=window.setTimeout(()=>{p(!1),s==null||s()},t)},[t,s]);return x.useEffect(()=>()=>{window.clearTimeout(E.current),window.clearTimeout(S.current)},[]),h.jsxs(h.Fragment,{children:[h.jsx("div",{className:i,onMouseEnter:O,onMouseLeave:w,ref:C,children:n}),v()&&h.jsx(ne.Overlay,{show:l,placement:a,target:v,container:document.body,popperConfig:o,children:h.jsx(ne.Popover,{onMouseEnter:O,onMouseLeave:w,id:_.current,className:"hover-popover-content",children:r})})]})});Pe("WarningHoverPopover",({children:e,...t})=>h.jsx(Ol,{...t,className:"warning-hover-popover",children:h.jsx(Xe,{icon:Se.faExclamationTriangle})}));function n_(e){return e.title?e.title:e.files&&e.files.length>0?et.fileNameFromPath(e.files[0].path):e.folder?et.fileNameFromPath(e.folder.path):""}function i_(e){return e.title?e.title:e.files&&e.files.length>0?et.fileNameFromPath(e.files[0].path):""}function qr(e,t){t&&t.length>0&&e.push(...t)}const a_=(e,t,r)=>{if(!e.id)return"#";const n=new ie(Y.Scenes,void 0),i=new Rt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),n.criteria.push(i),qr(n.criteria,r),`/scenes?${n.makeQueryParameters()}`},o_=(e,t,r)=>{if(!e.id)return"#";const n=new ie(Y.Images,void 0),i=new Rt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),n.criteria.push(i),qr(n.criteria,r),`/images?${n.makeQueryParameters()}`},s_=(e,t,r)=>{if(!e.id)return"#";const n=new ie(Y.Galleries,void 0),i=new Rt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),n.criteria.push(i),qr(n.criteria,r),`/galleries?${n.makeQueryParameters()}`},u_=(e,t,r)=>{if(!e.id)return"#";const n=new ie(Y.Groups,void 0),i=new Rt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),n.criteria.push(i),qr(n.criteria,r),`/groups?${n.makeQueryParameters()}`},c_=e=>{if(!e.id)return"#";const t=new ie(Y.SceneMarkers,void 0),r=new Rt;return r.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t.criteria.push(r),`/scenes/markers?${t.makeQueryParameters()}`},l_=e=>{if(!e.id)return"#";const t=new ie(Y.Performers,void 0),r=new Gu;return r.value=`${e.country}`,t.criteria.push(r),`/performers?${t.makeQueryParameters()}`},d_=e=>{if(!e.id)return"#";const t=new ie(Y.Scenes,void 0),r=new Ut;return r.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/scenes?${t.makeQueryParameters()}`},f_=e=>{if(!e.id)return"#";const t=new ie(Y.Images,void 0),r=new Ut;return r.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/images?${t.makeQueryParameters()}`},p_=e=>{if(!e.id)return"#";const t=new ie(Y.Galleries,void 0),r=new Ut;return r.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/galleries?${t.makeQueryParameters()}`},m_=e=>{if(!e.id)return"#";const t=new ie(Y.Groups,void 0),r=new Ut;return r.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/groups?${t.makeQueryParameters()}`},g_=e=>{if(!e.id)return"#";const t=new ie(Y.Performers,void 0),r=new Ut;return r.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/performers?${t.makeQueryParameters()}`},h_=e=>{if(!e.id)return"#";const t=new ie(Y.Studios,void 0),r=new Ms;return r.value=[{id:e.id,label:e.name||`Studio ${e.id}`}],t.criteria.push(r),`/studios?${t.makeQueryParameters()}`},v_=e=>{if(!e.id)return"#";const t=new ie(Y.Scenes,void 0),r=new $r(Sn);return r.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/scenes?${t.makeQueryParameters()}`},S_=e=>`/tags/${e}`,y_=e=>{if(!e.id)return"#";const t=new ie(Y.Tags,void 0),r=new fn(As);return r.value={items:[{id:e.id,label:e.name||`Tag ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/tags?${t.makeQueryParameters()}`},b_=e=>{if(!e.id)return"#";const t=new ie(Y.Tags,void 0),r=new fn(ks);return r.value={items:[{id:e.id,label:e.name||`Tag ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/tags?${t.makeQueryParameters()}`};function Et(e,t){const r=new ie(e,void 0),n=new fn(lt);return n.value={items:[{id:t.id,label:t.name||`Tag ${t.id}`}],excluded:[],depth:0},r.criteria.push(n),r.makeQueryParameters()}const I_=e=>`/scenes?${Et(Y.Scenes,e)}`,__=e=>`/performers?${Et(Y.Performers,e)}`,O_=e=>`/studios?${Et(Y.Studios,e)}`,C_=e=>`/scenes/markers?${Et(Y.SceneMarkers,e)}`,D_=e=>`/galleries?${Et(Y.Galleries,e)}`,E_=e=>`/images?${Et(Y.Images,e)}`,w_=e=>`/groups?${Et(Y.Groups,e)}`,T_=e=>!e.id||!e.scene?"#":`/scenes/${e.scene.id}?t=${e.seconds}`,x_=e=>{if(!e)return"#";const t=new ie(Y.Scenes,void 0),r=new ea;return r.value={value:e},t.criteria.push(r),`/scenes?${t.makeQueryParameters()}`},$_=e=>{if(!e)return"#";const t=new ie(Y.Images,void 0),r=new ea;return r.value={value:e},t.criteria.push(r),`/images?${t.makeQueryParameters()}`},F_=(e,t)=>{if(!e.id)return"#";const r=new ie(Y.Images,void 0),n=new wu;return n.value=[{id:e.id,label:n_(e)}],r.criteria.push(n),qr(r.criteria,t),`/images?${r.makeQueryParameters()}`};function ei(e,t){const r=new He(e);return r.modifier=m.Equals,r.value=t,r}const ot={makePerformerScenesUrl:a_,makePerformerImagesUrl:o_,makePerformerGalleriesUrl:s_,makePerformerGroupsUrl:u_,makePerformerSceneMarkersUrl:c_,makePerformersCountryUrl:l_,makeStudioScenesUrl:d_,makeStudioImagesUrl:f_,makeStudioGalleriesUrl:p_,makeStudioGroupsUrl:m_,makeStudioPerformersUrl:g_,makeTagUrl:S_,makeGroupUrl:e=>`/groups/${e}`,makeParentTagsUrl:y_,makeChildTagsUrl:b_,makeTagSceneMarkersUrl:C_,makeTagScenesUrl:I_,makeTagPerformersUrl:__,makeTagStudiosUrl:O_,makeTagGalleriesUrl:D_,makeTagImagesUrl:E_,makeTagGroupsUrl:w_,makeScenesPHashMatchUrl:x_,makeSceneMarkerUrl:T_,makeImagesPHashMatchUrl:$_,makeGroupScenesUrl:v_,makeChildStudiosUrl:h_,makeGalleryImagesUrl:F_,makeDirectorScenesUrl:e=>{if(e.length===0)return"#";const t=new ie(Y.Scenes,void 0);return t.criteria.push(ei(te("director"),e)),`/scenes?${t.makeQueryParameters()}`},makePhotographerGalleriesUrl:e=>{if(e.length===0)return"#";const t=new ie(Y.Galleries,void 0);return t.criteria.push(ei(te("photographer"),e)),`/galleries?${t.makeQueryParameters()}`},makePhotographerImagesUrl:e=>{if(e.length===0)return"#";const t=new ie(Y.Images,void 0);return t.criteria.push(ei(te("photographer"),e)),`/images?${t.makeQueryParameters()}`},makeDirectorGroupsUrl:e=>{if(e.length===0)return"#";const t=new ie(Y.Groups,void 0);return t.criteria.push(ei(te("director"),e)),`/groups?${t.makeQueryParameters()}`},makeContainingGroupsUrl:e=>{if(!e.id)return"#";const t=new ie(Y.Groups,void 0),r=new $r(Nu);return r.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/groups?${t.makeQueryParameters()}`},makeSubGroupsUrl:e=>{if(!e.id)return"#";const t=new ie(Y.Groups,void 0),r=new $r(Mu);return r.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(r),`/groups?${t.makeQueryParameters()}`},makeSceneMarkersSceneUrl:e=>{if(!e.id)return"#";const t=new ie(Y.SceneMarkers,void 0),r=new $s;return r.value=[{id:e.id,label:i_(e)}],t.criteria.push(r),`/scenes/markers?${t.makeQueryParameters()}`}},La="TruncatedText",P_=`${La}-tooltip`,Cl=Pe("TruncatedText",({text:e,className:t,lineCount:r=1,placement:n="bottom",delay:i=1e3})=>{const[a,o]=x.useState(!1),u=x.useRef(null),s=Aa(()=>o(!0),i);if(!e)return null;const c=I=>{(I.offsetWidth<I.scrollWidth||I.offsetHeight+10<I.scrollHeight)&&s()},l=()=>{s.cancel(),o(!1)},p=h.jsx(ne.Overlay,{target:u.current,show:a,placement:n,children:h.jsx(ne.Tooltip,{id:La,className:P_,children:e})});return h.jsxs("div",{className:ut(La,t),style:{WebkitLineClamp:r},ref:u,onMouseEnter:I=>c(I.currentTarget),onFocus:I=>c(I.currentTarget),onMouseLeave:l,onBlur:l,children:[e,p]})}),M_=()=>window.matchMedia("only screen and (max-width: 576px)").matches,N_=()=>window.matchMedia("(pointer: coarse)").matches;function k_(e){return window.matchMedia(e).matches}const A_={isMobile:M_,isTouch:N_,matchesMediaQuery:k_};var L_={exports:{}};(function(e){(function(t,r,n){if(!t)return;for(var i={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},a={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},o={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},u={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},s,c=1;c<20;++c)i[111+c]="f"+c;for(c=0;c<=9;++c)i[c+96]=c.toString();function l(f,D,T){if(f.addEventListener){f.addEventListener(D,T,!1);return}f.attachEvent("on"+D,T)}function p(f){if(f.type=="keypress"){var D=String.fromCharCode(f.which);return f.shiftKey||(D=D.toLowerCase()),D}return i[f.which]?i[f.which]:a[f.which]?a[f.which]:String.fromCharCode(f.which).toLowerCase()}function I(f,D){return f.sort().join(",")===D.sort().join(",")}function g(f){var D=[];return f.shiftKey&&D.push("shift"),f.altKey&&D.push("alt"),f.ctrlKey&&D.push("ctrl"),f.metaKey&&D.push("meta"),D}function E(f){if(f.preventDefault){f.preventDefault();return}f.returnValue=!1}function S(f){if(f.stopPropagation){f.stopPropagation();return}f.cancelBubble=!0}function _(f){return f=="shift"||f=="ctrl"||f=="alt"||f=="meta"}function C(){if(!s){s={};for(var f in i)f>95&&f<112||i.hasOwnProperty(f)&&(s[i[f]]=f)}return s}function v(f,D,T){return T||(T=C()[f]?"keydown":"keypress"),T=="keypress"&&D.length&&(T="keydown"),T}function O(f){return f==="+"?["+"]:(f=f.replace(/\+{2}/g,"+plus"),f.split("+"))}function w(f,D){var T,F,q,U=[];for(T=O(f),q=0;q<T.length;++q)F=T[q],u[F]&&(F=u[F]),D&&D!="keypress"&&o[F]&&(F=o[F],U.push("shift")),_(F)&&U.push(F);return D=v(F,U,D),{key:F,modifiers:U,action:D}}function b(f,D){return f===null||f===r?!1:f===D?!0:b(f.parentNode,D)}function y(f){var D=this;if(f=f||r,!(D instanceof y))return new y(f);D.target=f,D._callbacks={},D._directMap={};var T={},F,q=!1,U=!1,re=!1;function X(M){M=M||{};var A=!1,H;for(H in T){if(M[H]){A=!0;continue}T[H]=0}A||(re=!1)}function $(M,A,H,G,W,J){var B,se,Me=[],Re=H.type;if(!D._callbacks[M])return[];for(Re=="keyup"&&_(M)&&(A=[M]),B=0;B<D._callbacks[M].length;++B)if(se=D._callbacks[M][B],!(!G&&se.seq&&T[se.seq]!=se.level)&&Re==se.action&&(Re=="keypress"&&!H.metaKey&&!H.ctrlKey||I(A,se.modifiers))){var nr=!G&&se.combo==W,xt=G&&se.seq==G&&se.level==J;(nr||xt)&&D._callbacks[M].splice(B,1),Me.push(se)}return Me}function P(M,A,H,G){D.stopCallback(A,A.target||A.srcElement,H,G)||M(A,H)===!1&&(E(A),S(A))}D._handleKey=function(M,A,H){var G=$(M,A,H),W,J={},B=0,se=!1;for(W=0;W<G.length;++W)G[W].seq&&(B=Math.max(B,G[W].level));for(W=0;W<G.length;++W){if(G[W].seq){if(G[W].level!=B)continue;se=!0,J[G[W].seq]=1,P(G[W].callback,H,G[W].combo,G[W].seq);continue}se||P(G[W].callback,H,G[W].combo)}var Me=H.type=="keypress"&&U;H.type==re&&!_(M)&&!Me&&X(J),U=se&&H.type=="keydown"};function N(M){typeof M.which!="number"&&(M.which=M.keyCode);var A=p(M);if(A){if(M.type=="keyup"&&q===A){q=!1;return}D.handleKey(A,g(M),M)}}function L(){clearTimeout(F),F=setTimeout(X,1e3)}function ee(M,A,H,G){T[M]=0;function W(Re){return function(){re=Re,++T[M],L()}}function J(Re){P(H,Re,M),G!=="keyup"&&(q=p(Re)),setTimeout(X,10)}for(var B=0;B<A.length;++B){var se=B+1===A.length,Me=se?J:W(G||w(A[B+1]).action);le(A[B],Me,G,M,B)}}function le(M,A,H,G,W){D._directMap[M+":"+H]=A,M=M.replace(/\s+/g," ");var J=M.split(" "),B;if(J.length>1){ee(M,J,A,H);return}B=w(M,H),D._callbacks[B.key]=D._callbacks[B.key]||[],$(B.key,B.modifiers,{type:B.action},G,M,W),D._callbacks[B.key][G?"unshift":"push"]({callback:A,modifiers:B.modifiers,action:B.action,seq:G,level:W,combo:M})}D._bindMultiple=function(M,A,H){for(var G=0;G<M.length;++G)le(M[G],A,H)},l(f,"keypress",N),l(f,"keydown",N),l(f,"keyup",N)}y.prototype.bind=function(f,D,T){var F=this;return f=f instanceof Array?f:[f],F._bindMultiple.call(F,f,D,T),F},y.prototype.unbind=function(f,D){var T=this;return T.bind.call(T,f,function(){},D)},y.prototype.trigger=function(f,D){var T=this;return T._directMap[f+":"+D]&&T._directMap[f+":"+D]({},f),T},y.prototype.reset=function(){var f=this;return f._callbacks={},f._directMap={},f},y.prototype.stopCallback=function(f,D){var T=this;if((" "+D.className+" ").indexOf(" mousetrap ")>-1||b(D,T.target))return!1;if("composedPath"in f&&typeof f.composedPath=="function"){var F=f.composedPath()[0];F!==f.target&&(D=F)}return D.tagName=="INPUT"||D.tagName=="SELECT"||D.tagName=="TEXTAREA"||D.isContentEditable},y.prototype.handleKey=function(){var f=this;return f._handleKey.apply(f,arguments)},y.addKeycodes=function(f){for(var D in f)f.hasOwnProperty(D)&&(i[D]=f[D]);s=null},y.init=function(){var f=y(r);for(var D in f)D.charAt(0)!=="_"&&(y[D]=function(T){return function(){return f[T].apply(f,arguments)}}(D))},y.init(),t.Mousetrap=y,e.exports&&(e.exports=y)})(typeof window<"u"?window:null,typeof window<"u"?document:null)})(L_),x.createContext(null);const j_=x.createContext(null),q_={selectable:!1,selectedIds:new Set,getSelected:()=>[],onSelectChange:()=>{},onSelectAll:()=>{},onSelectNone:()=>{},onInvertSelection:()=>{},items:[],hasSelection:!1,selectedItems:[]};function V_(){const e=x.useContext(j_);return e===null?q_:e}x.createContext(null);var Dl=(e=>(e[e.BEFORE=0]="BEFORE",e[e.AFTER=1]="AFTER",e))(Dl||{});function B_(e){const{selectedIds:t}=V_(),[r,n]=x.useState(!1),[i,a]=x.useState(!1),[o,u]=x.useState(),s=e.onSelectedChanged&&e.selecting,c=!!e.objectId&&e.onMove&&r,l=s||c;function p(v){if(!l){v.preventDefault();return}if(!r&&e.selecting)v.dataTransfer.setData("text/plain",""),v.dataTransfer.effectAllowed="copy",v.stopPropagation();else if(r&&e.objectId){if(t.size>1&&t.has(e.objectId)){const O=Array.from(t.values()).join(",");v.dataTransfer.setData("text/plain",O)}else a(!0),v.dataTransfer.setData("text/plain",e.objectId);v.dataTransfer.effectAllowed="move",v.stopPropagation()}}function I(v){const O=v.nativeEvent.offsetX<v.currentTarget.clientWidth/2;O&&o!==0?u(0):!O&&o!==1&&u(1)}function g(v){const O=v,w=!1;if(O.dataTransfer.effectAllowed==="copy"){if(!e.onSelectedChanged)return;e.selecting&&!e.selected&&e.onSelectedChanged(!0,w),O.dataTransfer.dropEffect="copy",O.preventDefault()}else O.dataTransfer.effectAllowed==="move"&&!i?(I(v),O.dataTransfer.dropEffect="move",O.preventDefault()):O.dataTransfer.dropEffect="none"}function E(v){v.currentTarget.contains(v.relatedTarget)||u(void 0)}function S(v){v.dataTransfer.effectAllowed!=="move"||i||(I(v),v.preventDefault())}function _(){u(void 0),a(!1)}function C(v){const O=v;if(O.dataTransfer.effectAllowed==="copy"||!e.onMove||!e.objectId)return;const w=O.dataTransfer.getData("text/plain").split(","),b=e.objectId,y=o===1;e.onMove(w,b,y),_()}return{inHandle:r,setInHandle:n,moveTarget:o,dragProps:{draggable:l||void 0,onDragStart:p,onDragEnter:g,onDragLeave:E,onDragOver:S,onDragEnd:_,onDrop:C}}}const R_=e=>h.jsx("a",{target:"_blank",rel:"noopener noreferrer",...e}),G_=({selected:e=!1,onSelectedChanged:t})=>{let r=!1;return h.jsx(ne.Form.Control,{type:"checkbox",className:"card-check mousetrap",checked:e,onChange:()=>t(!e,r),onClick:n=>{r=n.shiftKey,n.stopPropagation()}})},U_=({setInHandle:e})=>{function t(){e(!0)}function r(){e(!1)}return h.jsx("span",{onMouseEnter:t,onMouseLeave:r,children:h.jsx(Xe,{className:"card-drag-handle",icon:Se.faGripLines})})},H_=({children:e})=>h.jsx("div",{className:"card-controls",children:e}),z_=({dragSide:e})=>e===void 0?null:h.jsx("div",{className:`move-target move-target-${e===Dl.BEFORE?"before":"after"}`});function El(e){const{url:t,linkClassName:r,onClick:n,children:i}=e;return/^https?:\/\//i.test(t)?h.jsx(R_,{href:t,className:r,onClick:n,children:i}):h.jsx($t.Link,{to:t,className:r,onClick:n,children:i})}const W_=Pe("GridCard",e=>{const{setInHandle:t,moveTarget:r,dragProps:n}=B_({selecting:e.selecting||!1,selected:e.selected||!1,onSelectedChanged:e.onSelectedChanged,objectId:e.objectId,onMove:e.onMove});function i(u){const{shiftKey:s}=u;e.onSelectedChanged&&e.selecting&&(e.onSelectedChanged(!e.selected,s),u.preventDefault(),u.stopPropagation())}function a(){if(e.interactiveHeatmap)return h.jsx("img",{loading:"lazy",src:e.interactiveHeatmap,alt:"interactive heatmap",className:"interactive-heatmap"})}function o(){if(e.resumeTime&&e.duration&&e.duration>e.resumeTime){const u=100/e.duration*e.resumeTime,s=u+"%";return h.jsx("div",{title:Math.round(u)+"%",className:"progress-bar",children:h.jsx("div",{style:{width:s},className:"progress-indicator"})})}}return h.jsxs(ne.Card,{className:ut(e.className,"grid-card"),onClick:i,...n,style:e.width&&!A_.isMobile()?{width:`${e.width}px`}:{},children:[r!==void 0&&h.jsx(z_,{dragSide:r}),h.jsxs(H_,{children:[e.onSelectedChanged&&h.jsx(G_,{selected:e.selected,onSelectedChanged:e.onSelectedChanged}),!!e.objectId&&e.onMove&&h.jsx(U_,{setInHandle:t})]}),h.jsxs("div",{className:ut(e.thumbnailSectionClassName,"thumbnail-section"),children:[h.jsx(El,{url:e.url,linkClassName:e.linkClassName,onClick:i,children:e.image}),e.overlays,o()]}),a(),h.jsxs("div",{className:"card-section",children:[h.jsx(El,{url:e.url,onClick:i,children:h.jsxs("h5",{className:"card-section-title flex-aligned",children:[e.pretitleIcon,h.jsx(Cl,{text:e.title,lineCount:2})]})}),e.details]}),e.popovers]})}),Y_=({count:e})=>{const{configuration:t}=ui();if(!((t==null?void 0:t.ui.abbreviateCounters)??!1))return h.jsx("span",{children:e});const n=et.abbreviateCounter(e);return h.jsxs("span",{children:[h.jsx(Te.FormattedNumber,{value:n.size,maximumFractionDigits:n.digits}),n.unit]})},wt=({className:e,url:t,type:r,count:n,showZero:i=!0})=>{const a=Te.useIntl();if(!i&&n===0)return null;function o(){switch(r){case"scene":return Se.faPlayCircle;case"image":return Se.faImage;case"gallery":return Se.faImages;case"marker":return Se.faMapMarkerAlt;case"group":case"sub_group":return Se.faFilm;case"performer":return Se.faUser;case"studio":return Se.faVideo}}function u(){switch(r){case"scene":return{one:"scene",other:"scenes"};case"image":return{one:"image",other:"images"};case"gallery":return{one:"gallery",other:"galleries"};case"marker":return{one:"marker",other:"markers"};case"group":return{one:"group",other:"groups"};case"sub_group":return{one:"sub_group",other:"sub_groups"};case"performer":return{one:"performer",other:"performers"};case"studio":return{one:"studio",other:"studios"}}}function s(){const c=a.formatPlural(n),l=u(),p=a.formatMessage({id:l[c]||l.other});return`${n} ${p}`}return h.jsx(ne.OverlayTrigger,{overlay:h.jsx(ne.Tooltip,{id:`${r}-count-tooltip`,children:s()}),placement:"bottom",children:h.jsx($t.Link,{className:e,to:t,children:h.jsxs(ne.Button,{className:"minimal",children:[h.jsx(Xe,{icon:o()}),h.jsx(Y_,{count:n})]})})})},K_=Pe("TagCard.Popovers",({tag:e})=>h.jsxs(h.Fragment,{children:[h.jsx("hr",{}),h.jsxs(ne.ButtonGroup,{className:"card-popovers",children:[h.jsx(wt,{className:"scene-count",type:"scene",count:e.scene_count,url:ot.makeTagScenesUrl(e),showZero:!1}),h.jsx(wt,{className:"image-count",type:"image",count:e.image_count,url:ot.makeTagImagesUrl(e),showZero:!1}),h.jsx(wt,{className:"gallery-count",type:"gallery",count:e.gallery_count,url:ot.makeTagGalleriesUrl(e),showZero:!1}),h.jsx(wt,{className:"group-count",type:"group",count:e.group_count,url:ot.makeTagGroupsUrl(e),showZero:!1}),h.jsx(wt,{className:"marker-count",type:"marker",count:e.scene_marker_count,url:ot.makeTagSceneMarkersUrl(e),showZero:!1}),h.jsx(wt,{className:"performer-count",type:"performer",count:e.performer_count,url:ot.makeTagPerformersUrl(e),showZero:!1}),h.jsx(wt,{className:"studio-count",type:"studio",count:e.studio_count,url:ot.makeTagStudiosUrl(e),showZero:!1})]})]})),Q_=Pe("TagCard.Overlays",({tag:e})=>{const[t]=xp();function r(){return h.jsx($t.Link,{to:"",onClick:i=>i.preventDefault(),children:h.jsx(ne.Button,{className:ut("minimal","mousetrap","favorite-button",e.favorite?"favorite":"not-favorite"),onClick:()=>n(!e.favorite),children:h.jsx(Xe,{icon:Se.faHeart,size:"2x"})})})}function n(i){e.id&&t({variables:{input:{id:e.id,favorite:i}}})}return h.jsx(h.Fragment,{children:r()})}),J_=Pe("TagCard.Details",({tag:e})=>{function t(){if(e.description)return h.jsx(Cl,{className:"tag-description",text:e.description,lineCount:3})}function r(){if(e.parents.length===1){const i=e.parents[0];return h.jsx("div",{className:"tag-parent-tags",children:h.jsx(Te.FormattedMessage,{id:"sub_tag_of",values:{parent:h.jsx($t.Link,{to:`/tags/${i.id}`,children:i.name})}})})}if(e.parents.length>1)return h.jsx("div",{className:"tag-parent-tags",children:h.jsx(Te.FormattedMessage,{id:"sub_tag_of",values:{parent:h.jsxs($t.Link,{to:ot.makeParentTagsUrl(e),children:[e.parents.length," ",h.jsx(Te.FormattedMessage,{id:"countables.tags",values:{count:e.parents.length}})]})}})})}function n(){if(e.children.length>0)return h.jsx("div",{className:"tag-sub-tags",children:h.jsx(Te.FormattedMessage,{id:"parent_of",values:{children:h.jsxs($t.Link,{to:ot.makeChildTagsUrl(e),children:[e.children.length," ",h.jsx(Te.FormattedMessage,{id:"countables.tags",values:{count:e.children.length}})]})}})})}return h.jsxs(h.Fragment,{children:[t(),r(),n()]})}),Z_=Pe("TagCard.Image",({tag:e})=>h.jsx("img",{loading:"lazy",className:"tag-card-image",alt:e.name,src:e.image_path??""})),X_=Pe("TagCard.Title",({tag:e})=>h.jsx(h.Fragment,{children:e.name??""})),eO=Pe("TagCard",e=>{const{tag:t,cardWidth:r,zoomIndex:n,selecting:i,selected:a,onSelectedChanged:o}=e;return h.jsx(W_,{className:`tag-card zoom-${n}`,url:`/tags/${t.id}`,width:r,title:h.jsx(X_,{...e}),linkClassName:"tag-card-header",image:h.jsx(Z_,{...e}),details:h.jsx(J_,{...e}),overlays:h.jsx(Q_,{...e}),popovers:h.jsx(K_,{...e}),selected:a,selecting:i,onSelectedChanged:o})}),tO=({id:e})=>{const{data:t,loading:r,error:n}=Cp(e);if(r)return h.jsx("div",{className:"tag-popover-card-placeholder",children:h.jsx(_l,{card:!0,message:""})});if(n)return h.jsx(bl,{error:n.message});if(!(t!=null&&t.findTag))return h.jsx(bl,{error:`No tag found with id ${e}.`});const i=t.findTag;return h.jsx("div",{className:"tag-popover-card",children:h.jsx(eO,{tag:i,zoomIndex:0})})},wl=({id:e,hide:t,children:r,placement:n="top",target:i})=>{const{configuration:a}=ui(),o=(a==null?void 0:a.ui.showTagCardOnHover)??!0;return t||!o?h.jsx(h.Fragment,{children:r}):h.jsx(Ol,{target:i,placement:n,enterDelay:500,leaveDelay:100,content:h.jsx(tO,{id:e}),children:r})};function rO(e,t,r,n){if(!e)return t;e=e.toLowerCase();const i={};function a(v,O){i[v.id]={...i[v.id],...O}}function o(v){var b,y;const O=(b=i[v.id])==null?void 0:b.aliases;if(O!==void 0)return O;if(!n)return[];const w=((y=n(v))==null?void 0:y.map(f=>f.trim().toLowerCase()))??[];return a(v,{aliases:w}),w}function u(v){var y;const O=(y=i[v.id])==null?void 0:y.aliasMatch;if(O!==void 0)return O;const b=o(v).some(f=>f===e);return a(v,{aliasMatch:b}),b}function s(v){var y;const O=(y=i[v.id])==null?void 0:y.aliasStartsWith;if(O!==void 0)return O;const b=o(v).some(f=>f.startsWith(e));return a(v,{aliasStartsWith:b}),b}function c(v){return v.trim().replace(/\s\s+/g," ").toLowerCase().split(" ")}function l(v){return c(r(v))}function p(v){return o(v).flatMap(w=>c(w))}function I(v){var y;const O=(y=i[v.id])==null?void 0:y.wordIndex;if(O!==void 0)return O;const b=l(v).indexOf(e);return a(v,{wordIndex:b}),b}function g(v){var y;const O=(y=i[v.id])==null?void 0:y.aliasWordIndex;if(O!==void 0)return O;const b=p(v).indexOf(e);return a(v,{aliasWordIndex:b}),b}function E(v){var y;const O=(y=i[v.id])==null?void 0:y.wordStartsWithIndex;if(O!==void 0)return O;const b=l(v).findIndex(f=>f.startsWith(e));return a(v,{wordStartsWithIndex:b}),b}function S(v){var y;const O=(y=i[v.id])==null?void 0:y.aliasWordStartsWithIndex;if(O!==void 0)return O;const b=p(v).findIndex(f=>f.startsWith(e));return a(v,{aliasWordStartsWithIndex:b}),b}function _(v){var y;const O=(y=i[v.id])==null?void 0:y.aliasIncludesIndex;if(O!==void 0)return O;const b=o(v).findIndex(f=>f.includes(e));return a(v,{aliasIncludesIndex:b}),b}function C(v,O){const w=r(v).trim().toLowerCase(),b=r(O).trim().toLowerCase(),y=u(v),f=u(O);if(w===e&&b!==e)return-1;if(w!==e&&b===e)return 1;if(y&&!f)return-1;if(!y&&f)return 1;if(w.startsWith(e)&&!b.startsWith(e))return-1;if(!w.startsWith(e)&&b.startsWith(e))return 1;const D=s(v),T=s(O);if(D&&!T)return-1;if(!D&&T)return 1;if(!e.includes(" ")){{const X=I(v),$=I(O);if(X!==-1&&$===-1)return-1;if(X===-1&&$!==-1)return 1;if(X!==-1&&$!==-1)return X===$?w.localeCompare(b):X-$;const P=g(v),N=g(O);if(P!==-1&&N===-1)return-1;if(P===-1&&N!==-1)return 1;if(P!==-1&&N!==-1)return P===N?w.localeCompare(b):P-N}{const X=E(v),$=E(O);if(X!==-1&&$===-1)return-1;if(X===-1&&$!==-1)return 1;if(X!==-1&&$!==-1)return X===$?w.localeCompare(b):X-$;const P=S(v),N=S(O);if(P!==-1&&N===-1)return-1;if(P===-1&&N!==-1)return 1;if(P!==-1&&N!==-1)return P===N?w.localeCompare(b):P-N}}const F=w.indexOf(e),q=b.indexOf(e);if(F!==-1&&q===-1)return-1;if(F===-1&&q!==-1)return 1;if(F!==-1&&q!==-1)return F===q?w.localeCompare(b):F-q;const U=_(v),re=_(O);return U!==-1&&re===-1?-1:U===-1&&re!==-1?1:U!==-1&&re!==-1?U===re?w.localeCompare(b):U-re:w.localeCompare(b)}return t.slice().sort(C)}const nO=/^[0-9a-f]{8}-[0-9a-f]{4}-[47][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function iO(e){return nO.test(e.trim())}function aO(e,t){const r=e.makeCriterion("stash_id_endpoint");r.modifier=m.Equals,r.value={endpoint:"",stashID:t.trim()},e.criteria=[r]}function oO(e,t){return rO(e,t,r=>r.name,r=>r.aliases)}const sO=So("TagSelect.sort",oO),uO=Pe("TagSelect",e=>{const[t]=Tp(),{configuration:r}=ui(),n=Te.useIntl(),i=(r==null?void 0:r.ui.maxOptionsShown)??Fp,a=!(r!=null&&r.interface.disableDropdownCreate.tag),o=x.useMemo(()=>e.excludeIds??[],[e.excludeIds]);function u(S){return!o.includes(S.id.toString())}async function s(S){const _=new ie(Y.Tags);if(_.currentPage=1,_.itemsPerPage=i,_.sortBy="name",_.sortDirection=Le.Asc,iO(S)){aO(_,S);const w=(await us(_)).data.findTags.tags.filter(u);if(w.length>0)return w.map(yl);_.criteria=[]}_.searchTerm=S;const v=(await us(_)).data.findTags.tags.filter(u);return sO(S,v).map(yl)}const c=S=>{var b;let _=S;const{object:C}=S.data,{name:v}=C,{inputValue:O}=S.selectProps;let w="";return v.toLowerCase().includes(O.toLowerCase())||(w=(b=C.aliases)==null?void 0:b.find(y=>y.toLowerCase().includes(O.toLowerCase()))),_={...S,children:h.jsx(wl,{id:C.id,placement:e.hoverPlacement??"right",children:h.jsxs("span",{className:"react-select-image-option",children:[h.jsx("span",{children:v}),w&&h.jsxs("span",{className:"alias",children:[" (",w,")"]})]})})},h.jsx(ri.components.Option,{..._})},l=S=>{let _=S;const{object:C}=S.data;return _={...S,children:h.jsx(wl,{id:C.id,placement:e.hoverPlacementLabel??"top",children:h.jsx("span",{children:C.name})})},h.jsx(ri.components.MultiValueLabel,{..._})},p=S=>{let _=S;const{object:C}=S.data;return _={...S,children:h.jsx(h.Fragment,{children:C.name})},h.jsx(ri.components.SingleValue,{..._})},I=async S=>{const _=await t({variables:{input:{name:S}}});return{value:_.data.tagCreate.id,item:_.data.tagCreate,message:"Created tag"}},g=(S,_)=>({id:S,name:_,aliases:[],stash_ids:[]}),E=(S,_)=>!(!S||_.some(C=>{var v;return C.name.toLowerCase()===S.toLowerCase()||((v=C.aliases)==null?void 0:v.some(O=>O.toLowerCase()===S.toLowerCase()))}));return h.jsx(XI,{...e,className:ut("tag-select",{"tag-select-active":e.active},e.className),loadOptions:s,getNamedObject:g,isValidNewOption:E,components:{Option:c,MultiValueLabel:l,SingleValue:p},isMulti:e.isMulti??!1,creatable:e.creatable??a,onCreate:I,placeholder:e.noSelectionString??n.formatMessage({id:"actions.select_entity"},{entityType:n.formatMessage({id:e.isMulti?"tags":"tag"})}),closeMenuOnSelect:!e.isMulti})}),cO=Pe("TagIDSelect",e=>{const{ids:t,onSelect:r}=e,[n,i]=x.useState([]),a=e_(t);function o(u){i(u),r==null||r(u)}return x.useEffect(()=>{async function u(l){const p=await Dp(l),{tags:I}=p.data.findTags;return I}if(!a)return;if(!t||(t==null?void 0:t.length)===0){i([]);return}if(n.filter(l=>t.includes(l.id.toString())).length===t.length)return;(async()=>{const p=[...await u(t)];p.sort((I,g)=>{const E=I.sort_name||I.name,S=g.sort_name||g.name;return E&&S?E.localeCompare(S):0}),i(p)})()},[t,a,n]),h.jsx(uO,{...e,values:n,onSelect:o})}),lO=(e,t)=>{const{data:r,loading:n,error:i}=$p(e),a=x.useRef(void 0);n||(a.current=r);const o=n?a.current:r,u=i&&t?[]:o==null?void 0:o.directory.directories,s=o==null?void 0:o.directory.parent;return{directories:u,parent:s,loading:n,error:i}},dO=Pe("FolderSelect",({currentDirectory:e,onChangeDirectory:t,defaultDirectories:r=[],appendButton:n,collapsible:i=!1,quotePath:a=!1,hideError:o=!1})=>{const u=Te.useIntl(),[s,c]=x.useState(!1),[l,p]=x.useState(e),I=a?et.stripQuotes(l):l,{directories:g,parent:E,error:S,loading:_}=lO(I,o),C=(e?g:r)??r,v=Aa(p,250);function O(f){const D=a&&f.includes(" ")?et.addQuotes(f):f;t(D),p(D)}function w(f){t(f),v(f)}function b(){r!=null&&r.includes(e)?O(""):E&&O(E)}const y=e&&E&&h.jsx("li",{className:"folder-list-parent folder-list-item",children:h.jsx(ne.Button,{variant:"link",onClick:()=>b(),disabled:_,children:h.jsx("span",{children:h.jsx(Te.FormattedMessage,{id:"setup.folder.up_dir"})})})});return h.jsxs(h.Fragment,{children:[h.jsxs(ne.InputGroup,{children:[h.jsx(ne.Form.Control,{className:"btn-secondary",placeholder:u.formatMessage({id:"setup.folder.file_path"}),onChange:f=>{w(f.currentTarget.value)},value:e,spellCheck:!1}),n&&h.jsx(ne.InputGroup.Append,{children:n}),i&&h.jsx(ne.InputGroup.Append,{children:h.jsx(ne.Button,{variant:"secondary",onClick:()=>c(!s),children:h.jsx(Xe,{icon:Se.faEllipsis})})}),(_||S)&&h.jsx(ne.InputGroup.Append,{className:"align-self-center",children:_?h.jsx(_l,{inline:!0,small:!0,message:""}):!o&&h.jsx(Xe,{icon:Se.faTimes,color:"red",className:"ml-3"})})]}),!o&&S!==void 0&&h.jsxs("h5",{className:"mt-4 text-break",children:["Error: ",S.message]}),h.jsx(ne.Collapse,{in:!i||s,children:h.jsxs("ul",{className:"folder-list",children:[y,C.map(f=>h.jsx("li",{className:"folder-list-item",children:h.jsx(ne.Button,{variant:"link",onClick:()=>O(f),disabled:_,children:h.jsx("span",{children:f})})},f))]})})]})}),{PluginApi:Tt}=window,{React:fO}=Tt,{useState:Ye,useEffect:pO}=fO,mO=Tt.libraries.Bootstrap,{Nav:gO,Button:Tl,Form:$e,Alert:xl,ProgressBar:hO,Spinner:$l}=mO,{NavLink:vO}=Tt.libraries.ReactRouterDOM,{FontAwesomeIcon:SO}=Tt.libraries.ReactFontAwesome,yO=Tt.libraries.FontAwesomeSolid,Fl="subtitleMarkers",Pl="/subtitle-markers",bO=1e3;function ja(e,t){return fetch("/graphql",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,variables:t})}).then(r=>r.json()).then(r=>{if(r.errors&&r.errors.length)throw new Error(r.errors.map(n=>n.message).join("; "));return r.data})}function IO(e,t){return ja(`mutation SubtitleMarkersRunTask($plugin_id: ID!, $description: String, $args_map: Map) {
      runPluginTask(plugin_id: $plugin_id, description: $description, args_map: $args_map)
    }`,{plugin_id:Fl,description:t,args_map:e}).then(r=>r.runPluginTask)}function _O(e){return ja("query SubtitleMarkersFindJob($id: ID!) { findJob(input: { id: $id }) { status progress error } }",{id:e}).then(t=>t.findJob)}function OO(e){return ja(`mutation SubtitleMarkersSearch($plugin_id: ID!, $args: Map) {
      runPluginOperation(plugin_id: $plugin_id, args: $args)
    }`,{plugin_id:Fl,args:e}).then(t=>t.runPluginOperation)}const qa=["READY","RUNNING","STOPPING"],CO={READY:"Starting…",RUNNING:"Searching…",STOPPING:"Stopping…",FINISHED:"Done.",CANCELLED:"Cancelled.",FAILED:"Failed."};function DO({libraryPaths:e}){const[t,r]=Ye(""),[n,i]=Ye(""),[a,o]=Ye(!1),[u,s]=Ye(""),[c,l]=Ye(""),[p,I]=Ye(!1),[g,E]=Ye(null),[S,_]=Ye(null),[C,v]=Ye(!1),[O,w]=Ye(null),[b,y]=Ye(null),f=p||S!==null&&qa.includes(S.status),D=f||C,T=!!t.trim()&&!!n.trim()&&(!a||!!u)&&!D;pO(()=>{if(!g)return;let $=!1,P;const N=()=>{_O(g).then(L=>{$||(_(L),L&&qa.includes(L.status)&&(P=setTimeout(N,bO)))}).catch(L=>{$||_({status:"FAILED",progress:null,error:String(L&&L.message?L.message:L)})})};return N(),()=>{$=!0,clearTimeout(P)}},[g]);function F(){const $=n.trim();I(!0),_(null),IO({path:t.trim(),search:$,tagId:u,title:c.trim()},`Searching subtitles for "${$}"`).then(P=>{I(!1),E(P)}).catch(P=>{I(!1),_({status:"FAILED",progress:null,error:String(P&&P.message?P.message:P)})})}function q(){v(!0),y(null),w(null),OO({mode:"search",path:t.trim(),search:n.trim()}).then($=>{v(!1),w($.results)}).catch($=>{v(!1),y(String($&&$.message?$.message:$))})}function U(){a?F():q()}function re(){if(!S)return null;const $=Math.round((S.progress||0)*100);return h.jsxs("div",{className:"subtitle-markers-status mt-3",children:[qa.includes(S.status)&&h.jsx(hO,{now:$,label:`${$}%`,animated:!0}),h.jsxs("p",{className:S.status==="FAILED"?"text-danger":"text-muted",children:[CO[S.status],S.status==="FINISHED"&&" Marker preview generation has been queued for anything created. See Settings → Logs for how many markers were created."]}),S.error?h.jsx(xl,{variant:"danger",children:S.error}):null]})}function X(){return C?h.jsxs("div",{className:"subtitle-markers-results mt-3 text-muted",children:[h.jsx($l,{animation:"border",size:"sm",className:"mr-2"}),"Searching…"]}):b?h.jsx(xl,{variant:"danger",className:"mt-3",children:b}):O===null?null:O.length===0?h.jsx("p",{className:"subtitle-markers-results mt-3 text-muted",children:"No matches found."}):h.jsxs("div",{className:"subtitle-markers-results mt-3",children:[h.jsxs("p",{className:"text-muted",children:[O.length," match",O.length===1?"":"es",":"]}),h.jsx("ul",{className:"list-unstyled",children:O.map(($,P)=>h.jsxs("li",{className:"subtitle-markers-result",children:[h.jsxs("a",{href:`/scenes/${$.sceneId}?t=${$.seconds}`,target:"_blank",rel:"noreferrer",children:[$.sceneTitle||`Scene ${$.sceneId}`," @ ",et.secondsToTimestamp($.seconds)]}),h.jsx("div",{className:"text-muted subtitle-markers-result-text",children:$.text})]},P))})]})}return h.jsxs("div",{className:"subtitle-markers-page container-fluid",children:[h.jsx("h3",{children:"Subtitle Markers"}),h.jsx("p",{className:"text-muted",children:"Searches every .srt file under a folder (and its subfolders) for a phrase - matched to the video file next to each subtitle, the same way Stash itself associates captions. Either jump straight to each match's timestamp, or (optionally) create a scene marker for each one, with preview generation queued automatically afterwards."}),h.jsxs($e.Group,{className:"subtitle-markers-folder",children:[h.jsx($e.Label,{children:"Folder"}),h.jsx(dO,{currentDirectory:t,onChangeDirectory:r,defaultDirectories:e}),h.jsx($e.Text,{className:"text-muted",children:"Searched recursively, including subfolders."})]}),h.jsxs($e.Group,{children:[h.jsx($e.Label,{children:"Search text"}),h.jsx($e.Control,{type:"text",value:n,placeholder:"Text to find in subtitle lines",onChange:$=>i($.target.value),disabled:D}),h.jsx($e.Text,{className:"text-muted",children:"Case-insensitive, matched as plain text."})]}),h.jsxs($e.Group,{children:[h.jsx($e.Check,{type:"checkbox",id:"subtitle-markers-create-markers",label:"Also create scene markers",checked:a,disabled:D,onChange:$=>o($.target.checked)}),h.jsx($e.Text,{className:"text-muted",children:"Off by default: just search, and link to each match's timestamp. Turn this on to also create a scene marker for each match, using the tag and title below."})]}),a&&h.jsxs(h.Fragment,{children:[h.jsxs($e.Group,{children:[h.jsx($e.Label,{children:"Tag"}),h.jsx(cO,{ids:u?[u]:[],isDisabled:D,onSelect:$=>{var P;return s(((P=$[0])==null?void 0:P.id)||"")}})]}),h.jsxs($e.Group,{children:[h.jsx($e.Label,{children:"Marker title"}),h.jsx($e.Control,{type:"text",value:c,placeholder:n||"Marker title",onChange:$=>l($.target.value),disabled:D}),h.jsx($e.Text,{className:"text-muted",children:"Defaults to the search text if left blank."})]})]}),h.jsx(Tl,{onClick:U,disabled:!T,children:f?"Running…":C?"Searching…":a?"Search & Create Markers":"Search"}),a?re():X()]})}function EO(){const{data:e}=Sd();if(!(e!=null&&e.configuration))return h.jsx($l,{animation:"border",className:"mt-3"});const t=e.configuration.general.stashes.map(r=>r.path);return h.jsx(Ad,{children:h.jsx(Cd,{configuration:e.configuration,children:h.jsx(DO,{libraryPaths:t})})})}Tt.register.route(Pl,EO),Tt.patch.before("MainNavBar.MenuItems",e=>{try{const t=h.jsx(gO.Link,{as:"div",className:"col-4 col-sm-3 col-md-2 col-lg-auto",children:h.jsx(vO,{exact:!0,to:Pl,activeClassName:"active",children:h.jsxs(Tl,{className:"minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center",children:[h.jsx(SO,{icon:yO.faClosedCaptioning,className:"fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0"}),h.jsx("span",{children:"Marker"})]})})},"subtitle-markers");return[{...e,children:[...e.children||[],t]}]}catch(t){return console.error("[SubtitleMarkers] Failed to patch nav bar:",t),[e]}})})(PluginApi.React,PluginApi.libraries.Apollo,PluginApi.libraries.FontAwesomeSolid,PluginApi.libraries.Bootstrap,PluginApi.libraries.Intl,PluginApi.libraries.ReactFontAwesome,PluginApi.libraries.ReactSelect,PluginApi.ReactDOM,PluginApi.libraries.ReactRouterDOM);
