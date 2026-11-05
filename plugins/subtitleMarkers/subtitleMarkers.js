var ZO=Object.defineProperty;var XO=(x,d,Se)=>d in x?ZO(x,d,{enumerable:!0,configurable:!0,writable:!0,value:Se}):x[d]=Se;var Z=(x,d,Se)=>XO(x,typeof d!="symbol"?d+"":d,Se);(function(x,d,Se,re,Te,Kl,ci,Jl,$t){"use strict";var Yl;function Xa(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const K=Xa(x),on=Xa(d);function es(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ts={exports:{}},un={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ns=Object.getOwnPropertySymbols,Zl=Object.prototype.hasOwnProperty,Xl=Object.prototype.propertyIsEnumerable;function ed(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function td(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}td();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd=x,rs=60103;if(un.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var is=Symbol.for;rs=is("react.element"),un.Fragment=is("react.fragment")}var rd=nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,id=Object.prototype.hasOwnProperty,ad={key:!0,ref:!0,__self:!0,__source:!0};function as(e,t,n){var r,i={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)id.call(t,r)&&!ad.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:rs,type:e,key:a,ref:s,props:i,_owner:rd.current}}un.jsx=as,un.jsxs=as,ts.exports=un;var g=ts.exports;const cn={};var Qn=(e=>(e.Cut="CUT",e.Uncut="UNCUT",e))(Qn||{}),m=(e=>(e.Between="BETWEEN",e.Equals="EQUALS",e.Excludes="EXCLUDES",e.GreaterThan="GREATER_THAN",e.Includes="INCLUDES",e.IncludesAll="INCLUDES_ALL",e.IsNull="IS_NULL",e.LessThan="LESS_THAN",e.MatchesRegex="MATCHES_REGEX",e.NotBetween="NOT_BETWEEN",e.NotEquals="NOT_EQUALS",e.NotMatchesRegex="NOT_MATCHES_REGEX",e.NotNull="NOT_NULL",e))(m||{}),Q=(e=>(e.Galleries="GALLERIES",e.Groups="GROUPS",e.Images="IMAGES",e.Movies="MOVIES",e.Performers="PERFORMERS",e.Scenes="SCENES",e.SceneMarkers="SCENE_MARKERS",e.Studios="STUDIOS",e.Tags="TAGS",e))(Q||{}),Ne=(e=>(e.Female="FEMALE",e.Intersex="INTERSEX",e.Male="MALE",e.NonBinary="NON_BINARY",e.TransgenderFemale="TRANSGENDER_FEMALE",e.TransgenderMale="TRANSGENDER_MALE",e))(Ne||{}),Yn=(e=>(e.Landscape="LANDSCAPE",e.Portrait="PORTRAIT",e.Square="SQUARE",e))(Yn||{}),Fe=(e=>(e.EightK="EIGHT_K",e.FiveK="FIVE_K",e.FourK="FOUR_K",e.FullHd="FULL_HD",e.Huge="HUGE",e.Low="LOW",e.QuadHd="QUAD_HD",e.R360P="R360P",e.SevenK="SEVEN_K",e.SixK="SIX_K",e.Standard="STANDARD",e.StandardHd="STANDARD_HD",e.VeryLow="VERY_LOW",e.VrHd="VR_HD",e.WebHd="WEB_HD",e))(Fe||{}),Le=(e=>(e.Asc="ASC",e.Desc="DESC",e))(Le||{});const ss=d.gql`
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
    `,os=d.gql`
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
    `,us=d.gql`
    fragment ConfigDLNAData on ConfigDLNAResult {
  serverName
  enabled
  port
  whitelistedIPs
  interfaces
  videoSortOrder
}
    `,cs=d.gql`
    fragment ConfigScrapingData on ConfigScrapingResult {
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  excludeTagPatterns
}
    `,sd=d.gql`
    fragment ScraperSourceData on ScraperSource {
  stash_box_index
  stash_box_endpoint
  scraper_id
}
    `,od=d.gql`
    fragment IdentifyFieldOptionsData on IdentifyFieldOptions {
  field
  strategy
  createMissing
}
    `,ud=d.gql`
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
    ${od}`,ls=d.gql`
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
    ${sd}
${ud}`,cd=d.gql`
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
    ${ss}
${os}
${us}
${cs}
${ls}`;d.gql`
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
    `;const li=d.gql`
    fragment SelectFolderData on Folder {
  id
  path
  basename
}
    `,ld=d.gql`
    fragment RecursiveFolderData on Folder {
  ...SelectFolderData
  parent_folders {
    ...SelectFolderData
  }
}
    ${li}`,di=d.gql`
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
    `,dd=d.gql`
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
    `,fd=d.gql`
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
    `,ln=d.gql`
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
    `,ds=d.gql`
    fragment SlimGroupData on Group {
  id
  name
  front_image_path
  rating100
}
    `,pd=d.gql`
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
    ${ln}
${Ze}
${ds}`,fs=d.gql`
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
    `,Kn=d.gql`
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
    ${fs}`,ps=d.gql`
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
    `,ms=d.gql`
    fragment FolderData on Folder {
  id
  basename
  path
}
    `,fi=d.gql`
    fragment GalleryChapterData on GalleryChapter {
  id
  title
  image_index
  gallery {
    id
  }
}
    `,ut=d.gql`
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
    ${Ze}`,gs=d.gql`
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
    `,dn=d.gql`
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
    ${gs}`,Ft=d.gql`
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
    ${ps}
${ms}
${fi}
${ln}
${Ze}
${ut}
${dn}`,md=d.gql`
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
${ln}
${Ze}
${ut}
${fs}`,hs=d.gql`
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
    `,vs=d.gql`
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
    `;const gd=d.gql`
    fragment SelectPerformerData on Performer {
  id
  name
  disambiguation
  alias_list
  image_path
  birthdate
  death_date
}
    `,hd=d.gql`
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
    `,pt=d.gql`
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
    ${hd}`,Ss=d.gql`
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
    ${ps}
${ms}`,fn=d.gql`
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
    ${ln}
${Ze}
${ds}`,mt=d.gql`
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
    ${gs}
${pt}
${Ss}
${ln}
${fn}
${Ze}
${ut}`,vd=d.gql`
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
    `,Sd=d.gql`
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
    ${Ge}`,pi=d.gql`
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
    ${Ge}`,ys=d.gql`
    fragment ScrapedGroupStudioData on ScrapedStudio {
  stored_id
  name
  urls
}
    `,yd=d.gql`
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
    ${ys}
${Ge}`,Jn=d.gql`
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
    ${Ge}`,pn=d.gql`
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
    ${Ge}`,bs=d.gql`
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
    ${ys}
${Ge}`,mi=d.gql`
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
    ${Jn}
${Ge}
${pn}
${bs}`,Is=d.gql`
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
    ${Jn}
${Ge}
${pn}`,_s=d.gql`
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
    ${Jn}
${Ge}
${pn}`;d.gql`
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
    ${Jn}
${Ge}
${pn}
${bs}`,d.gql`
    fragment ScrapedStashBoxPerformerData on StashBoxPerformerQueryResult {
  query
  results {
    ...ScrapedScenePerformerData
  }
}
    ${pn}`;const mn=d.gql`
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
    ${Ze}`,bd=d.gql`
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
    ${Ze}`,Id=d.gql`
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
    `,_d=d.gql`
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
    ${ss}`,d.gql`
    mutation ConfigureInterface($input: ConfigInterfaceInput!) {
  configureInterface(input: $input) {
    ...ConfigInterfaceData
  }
}
    ${os}`,d.gql`
    mutation ConfigureDLNA($input: ConfigDLNAInput!) {
  configureDLNA(input: $input) {
    ...ConfigDLNAData
  }
}
    ${us}`,d.gql`
    mutation ConfigureScraping($input: ConfigScrapingInput!) {
  configureScraping(input: $input) {
    ...ConfigScrapingData
  }
}
    ${cs}`,d.gql`
    mutation ConfigureDefaults($input: ConfigDefaultSettingsInput!) {
  configureDefaults(input: $input) {
    ...ConfigDefaultSettingsData
  }
}
    ${ls}`,d.gql`
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
    ${di}`,d.gql`
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
    ${fi}`,d.gql`
    mutation GalleryChapterUpdate($id: ID!, $title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterUpdate(
    input: {id: $id, title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${fi}`,d.gql`
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
    ${fn}`,d.gql`
    mutation GroupUpdate($input: GroupUpdateInput!) {
  groupUpdate(input: $input) {
    ...GroupData
  }
}
    ${fn}`,d.gql`
    mutation BulkGroupUpdate($input: BulkGroupUpdateInput!) {
  bulkGroupUpdate(input: $input) {
    ...GroupData
  }
}
    ${fn}`,d.gql`
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
    ${Kn}`,d.gql`
    mutation BulkImageUpdate($input: BulkImageUpdateInput!) {
  bulkImageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Kn}`,d.gql`
    mutation ImagesUpdate($input: [ImageUpdateInput!]!) {
  imagesUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Kn}`,d.gql`
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
    ${ut}`,d.gql`
    mutation PerformerUpdate($input: PerformerUpdateInput!) {
  performerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${ut}`,d.gql`
    mutation BulkPerformerUpdate($input: BulkPerformerUpdateInput!) {
  bulkPerformerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${ut}`,d.gql`
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
    ${pt}`,d.gql`
    mutation SceneMarkerUpdate($id: ID!, $title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerUpdate(
    input: {id: $id, title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${pt}`,d.gql`
    mutation BulkSceneMarkerUpdate($input: BulkSceneMarkerUpdateInput!) {
  bulkSceneMarkerUpdate(input: $input) {
    ...SceneMarkerData
  }
}
    ${pt}`,d.gql`
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
    ${mt}`,d.gql`
    mutation SceneUpdate($input: SceneUpdateInput!) {
  sceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${mt}`,d.gql`
    mutation BulkSceneUpdate($input: BulkSceneUpdateInput!) {
  bulkSceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${mt}`,d.gql`
    mutation ScenesUpdate($input: [SceneUpdateInput!]!) {
  scenesUpdate(input: $input) {
    ...SceneData
  }
}
    ${mt}`,d.gql`
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
    ${mn}`,d.gql`
    mutation StudioUpdate($input: StudioUpdateInput!) {
  studioUpdate(input: $input) {
    ...StudioData
  }
}
    ${mn}`,d.gql`
    mutation BulkStudioUpdate($input: BulkStudioUpdateInput!) {
  bulkStudioUpdate(input: $input) {
    ...StudioData
  }
}
    ${mn}`,d.gql`
    mutation StudioDestroy($id: ID!) {
  studioDestroy(input: {id: $id})
}
    `,d.gql`
    mutation StudiosDestroy($ids: [ID!]!) {
  studiosDestroy(ids: $ids)
}
    `;const Od=d.gql`
    mutation TagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) {
    ...TagData
  }
}
    ${Mt}`;function Cd(e){const t={...cn,...e};return on.useMutation(Od,t)}d.gql`
    mutation TagDestroy($id: ID!) {
  tagDestroy(input: {id: $id})
}
    `,d.gql`
    mutation TagsDestroy($ids: [ID!]!) {
  tagsDestroy(ids: $ids)
}
    `;const Dd=d.gql`
    mutation TagUpdate($input: TagUpdateInput!) {
  tagUpdate(input: $input) {
    ...TagData
  }
}
    ${Mt}`;function Ed(e){const t={...cn,...e};return on.useMutation(Dd,t)}d.gql`
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
    ${di}`,d.gql`
    query FindSavedFilters($mode: FilterMode) {
  findSavedFilters(mode: $mode) {
    ...SavedFilterData
  }
}
    ${di}`,d.gql`
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
    ${li}`,d.gql`
    query FindFoldersForQuery($filter: FindFilterType, $folder_filter: FolderFilterType, $ids: [ID!]) {
  findFolders(filter: $filter, folder_filter: $folder_filter, ids: $ids) {
    count
    folders {
      ...RecursiveFolderData
    }
  }
}
    ${ld}`,d.gql`
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
    ${li}`;const wd=d.gql`
    query FindGalleries($filter: FindFilterType, $gallery_filter: GalleryFilterType) {
  findGalleries(gallery_filter: $gallery_filter, filter: $filter) {
    count
    galleries {
      ...SlimGalleryData
    }
  }
}
    ${Ss}`;d.gql`
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
    ${dd}`,d.gql`
    query FindGalleryImageID($id: ID!, $index: Int!) {
  findGallery(id: $id) {
    image(index: $index) {
      id
    }
  }
}
    `;const Td=d.gql`
    query FindImages($filter: FindFilterType, $image_filter: ImageFilterType, $image_ids: [Int!]) {
  findImages(filter: $filter, image_filter: $image_filter, image_ids: $image_ids) {
    count
    images {
      ...SlimImageData
    }
  }
}
    ${Kn}`;d.gql`
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
    ${md}`,d.gql`
    query JobQueue {
  jobQueue {
    ...JobData
  }
}
    ${hs}`,d.gql`
    query FindJob($input: FindJobInput!) {
  findJob(input: $input) {
    ...JobData
  }
}
    ${hs}`,d.gql`
    query SceneWall($q: String) {
  sceneWall(q: $q) {
    ...SceneData
  }
}
    ${mt}`,d.gql`
    query MarkerWall($q: String) {
  markerWall(q: $q) {
    ...SceneMarkerData
  }
}
    ${pt}`,d.gql`
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
    ${vs}`,d.gql`
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
    `;const xd=d.gql`
    query FindGroups($filter: FindFilterType, $group_filter: GroupFilterType) {
  findGroups(filter: $filter, group_filter: $group_filter) {
    count
    groups {
      ...ListGroupData
    }
  }
}
    ${pd}`;d.gql`
    query FindGroup($id: ID!) {
  findGroup(id: $id) {
    ...GroupData
  }
}
    ${fn}`,d.gql`
    query FindGroupsForSelect($filter: FindFilterType, $group_filter: GroupFilterType, $ids: [ID!]) {
  findGroups(filter: $filter, group_filter: $group_filter, ids: $ids) {
    count
    groups {
      ...SelectGroupData
    }
  }
}
    ${fd}`;const $d=d.gql`
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
    ${ut}`;d.gql`
    query FindPerformer($id: ID!) {
  findPerformer(id: $id) {
    ...PerformerData
  }
}
    ${ut}`,d.gql`
    query FindPerformersForSelect($filter: FindFilterType, $performer_filter: PerformerFilterType, $ids: [ID!]) {
  findPerformers(filter: $filter, performer_filter: $performer_filter, ids: $ids) {
    count
    performers {
      ...SelectPerformerData
    }
  }
}
    ${gd}`,d.gql`
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
    ${Pt}`;const Os=d.gql`
    query FindSceneMarkers($filter: FindFilterType, $scene_marker_filter: SceneMarkerFilterType) {
  findSceneMarkers(filter: $filter, scene_marker_filter: $scene_marker_filter) {
    count
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${pt}`,Fd=d.gql`
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
    ${dn}`;d.gql`
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
    ${dn}`,d.gql`
    query FindDuplicateScenes($distance: Int, $duration_diff: Float) {
  findDuplicateScenes(distance: $distance, duration_diff: $duration_diff) {
    ...SlimSceneData
  }
}
    ${dn}`,d.gql`
    query FindScene($id: ID!, $checksum: String) {
  findScene(id: $id, checksum: $checksum) {
    ...SceneData
  }
}
    ${mt}`,d.gql`
    query FindFullScenes($ids: [Int!]) {
  findScenes(scene_ids: $ids) {
    scenes {
      ...SceneData
    }
  }
}
    ${mt}`,d.gql`
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
    ${pt}`,d.gql`
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
    ${dn}`,d.gql`
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
    ${vd}`,d.gql`
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
    ${Sd}`,d.gql`
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
    ${pi}`,d.gql`
    query ScrapeMultiPerformers($source: ScraperSourceInput!, $input: ScrapeMultiPerformersInput!) {
  scrapeMultiPerformers(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${pi}`,d.gql`
    query ScrapePerformerURL($url: String!) {
  scrapePerformerURL(url: $url) {
    ...ScrapedPerformerData
  }
}
    ${pi}`,d.gql`
    query ScrapeSingleScene($source: ScraperSourceInput!, $input: ScrapeSingleSceneInput!) {
  scrapeSingleScene(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${mi}`,d.gql`
    query ScrapeMultiScenes($source: ScraperSourceInput!, $input: ScrapeMultiScenesInput!) {
  scrapeMultiScenes(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${mi}`,d.gql`
    query ScrapeSceneURL($url: String!) {
  scrapeSceneURL(url: $url) {
    ...ScrapedSceneData
  }
}
    ${mi}`,d.gql`
    query ScrapeSingleGallery($source: ScraperSourceInput!, $input: ScrapeSingleGalleryInput!) {
  scrapeSingleGallery(source: $source, input: $input) {
    ...ScrapedGalleryData
  }
}
    ${Is}`,d.gql`
    query ScrapeSingleImage($source: ScraperSourceInput!, $input: ScrapeSingleImageInput!) {
  scrapeSingleImage(source: $source, input: $input) {
    ...ScrapedImageData
  }
}
    ${_s}`,d.gql`
    query ScrapeGalleryURL($url: String!) {
  scrapeGalleryURL(url: $url) {
    ...ScrapedGalleryData
  }
}
    ${Is}`,d.gql`
    query ScrapeImageURL($url: String!) {
  scrapeImageURL(url: $url) {
    ...ScrapedImageData
  }
}
    ${_s}`,d.gql`
    query ScrapeGroupURL($url: String!) {
  scrapeGroupURL(url: $url) {
    ...ScrapedGroupData
  }
}
    ${yd}`,d.gql`
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
    ${Pt}`;const Pd=d.gql`
    query Configuration {
  configuration {
    ...ConfigData
  }
}
    ${cd}`;function Md(e){const t={...cn,...e};return on.useQuery(Pd,t)}const Nd=d.gql`
    query Directory($path: String) {
  directory(path: $path) {
    path
    parent
    directories
  }
}
    `;function kd(e){const t={...cn,...e};return on.useQuery(Nd,t)}d.gql`
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
    ${mn}`,d.gql`
    query FindStudio($id: ID!) {
  findStudio(id: $id) {
    ...StudioData
  }
}
    ${mn}`,d.gql`
    query FindStudiosForSelect($filter: FindFilterType, $studio_filter: StudioFilterType, $ids: [ID!]) {
  findStudios(filter: $filter, studio_filter: $studio_filter, ids: $ids) {
    count
    studios {
      ...SelectStudioData
    }
  }
}
    ${bd}`;const Cs=d.gql`
    query FindTags($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...TagData
    }
  }
}
    ${Mt}`,Ad=d.gql`
    query FindTag($id: ID!) {
  findTag(id: $id) {
    ...TagData
  }
}
    ${Mt}`;function Ld(e){const t={...cn,...e};return on.useQuery(Ad,t)}const Ds=d.gql`
    query FindTagsForSelect($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...SelectTagData
    }
  }
}
    ${Id}`;d.gql`
    query FindTagsForList($filter: FindFilterType, $tag_filter: TagFilterType) {
  findTags(filter: $filter, tag_filter: $tag_filter) {
    count
    tags {
      ...TagListData
    }
  }
}
    ${_d}`,d.gql`
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
    ${vs}`;const jd=d.gql`
    subscription ScanCompleteSubscribe {
  scanCompleteSubscribe
}
    `,Es=x.createContext(null),gi=()=>{const e=x.useContext(Es);if(e===null)throw new Error("useConfigurationContext must be used within a ConfigurationProvider");return e},qd=({configuration:e,children:t})=>g.jsx(Es.Provider,{value:{configuration:e},children:t}),ws={},Vd={},Ts={},Rd={};function Bd(e,t){if(ws[e])throw new Error("Component "+e+" has already been registered");return ws[e]=t,t}function Gd(e,t,n,r){if(!e.length)return t.apply(n,r);let i=1;function a(){if(i>=e.length)return t;const s=e[i++];return new Proxy(s,{apply:(u,o,c)=>u.apply(o,c.concat(a()))})}return e[0].apply(n,r.concat(a()))}function xs(e,t){return new Proxy(t,{apply(n,r,i){let a;for(const s of Vd[e]||[])i=s.apply(r,i);Ts[e]?a=Gd(Ts[e],n,r,i):a=n.apply(r,i);for(const s of Rd[e]||[])a=s.apply(r,i.concat(a));return a}})}function Pe(e,t){const n=xs(e,t);return Bd(e,n),n}const Xe=Pe("Icon",e=>g.jsx(Kl.FontAwesomeIcon,{...e,className:`fa-icon ${e.className??""}`})),Ud=()=>{},Hd=({children:e,show:t,icon:n,header:r,cancel:i,accept:a,onHide:s,isRunning:u,disabled:o,modalProps:c,dialogClassName:l,footerButtons:f,leftFooterButtons:I})=>g.jsxs(re.Modal,{className:"ModalComponent",keyboard:!1,onHide:s??Ud,show:t,dialogClassName:l,...c,children:[g.jsxs(re.Modal.Header,{children:[n?g.jsx(Xe,{icon:n}):"",g.jsx("span",{children:r??""})]}),g.jsx(re.Modal.Body,{children:e}),g.jsxs(re.Modal.Footer,{className:"ModalFooter",children:[g.jsx("div",{children:I}),g.jsxs("div",{children:[f,i?g.jsx(re.Button,{disabled:u,variant:i.variant??"primary",onClick:i.onClick,className:"ml-2",children:i.text??g.jsx(Te.FormattedMessage,{id:"actions.cancel",defaultMessage:"Cancel",description:"Cancels the current action and dismisses the modal."})}):"",g.jsx(re.Button,{disabled:u||o,variant:(a==null?void 0:a.variant)??"primary",onClick:a==null?void 0:a.onClick,className:"ml-2",children:u?g.jsx(re.Spinner,{animation:"border",role:"status",size:"sm"}):(a==null?void 0:a.text)??g.jsx(Te.FormattedMessage,{id:"actions.close",defaultMessage:"Close",description:"Closes the current modal."})})]})]})]});function zd(e){let t="";return e instanceof Error&&(t=e.message),t||(t=String(e)),t||(t="Unknown error"),t}var $s={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var a="",s=0;s<arguments.length;s++){var u=arguments[s];u&&(a=i(a,r(u)))}return a}function r(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return n.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var s="";for(var u in a)t.call(a,u)&&a[u]&&(s=i(s,u));return s}function i(a,s){return s?a?a+" "+s:a+s:a}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})($s);var Wd=$s.exports;const ct=es(Wd),Qd=100,Yd=5e3;let Kd=0;const Fs=x.createContext(null),Jd=({children:e})=>{const[t,n]=x.useState(),[r,i]=x.useState(!1),[a,s]=x.useState(!1),u=x.useMemo(()=>{function l(){s(!0)}return!t||a?null:g.jsx(re.Toast,{autohide:!0,onClose:()=>i(!0),className:t.variant??"success",delay:t.delay??3e3,children:g.jsxs(re.Toast.Header,{children:[g.jsx("span",{className:"mr-auto",onClick:()=>l(),children:t.content}),t.variant==="danger"&&g.jsx(re.Button,{variant:"minimal",className:"expand-error-button",onClick:()=>l(),children:g.jsx(Xe,{icon:Se.faArrowUpRightFromSquare})})]})},t.id)},[t,a]);function o(l){(r||!t||(l.priority??0)>=(t.priority??0))&&(i(!1),n({...l,id:Kd++}))}function c(){const{content:l}=t??{};l&&typeof l=="string"&&navigator.clipboard&&navigator.clipboard.writeText(l)}return g.jsxs(Fs.Provider,{value:o,children:[e,a&&g.jsx(Hd,{dialogClassName:"toast-expanded-dialog",show:a,accept:{onClick:()=>{n(void 0),s(!1)}},header:g.jsx(Te.FormattedMessage,{id:"errors.header"}),icon:Se.faTriangleExclamation,footerButtons:!!navigator.clipboard&&g.jsx(re.Button,{variant:"secondary",onClick:()=>c(),children:g.jsx(Te.FormattedMessage,{id:"actions.copy_to_clipboard"})}),children:t==null?void 0:t.content}),g.jsx("div",{className:ct("toast-container row",{hidden:!t||r}),children:u})]})},Zd=()=>{const e=x.useContext(Fs);if(!e)throw new Error("useToast must be used within a ToastProvider");return x.useMemo(()=>({toast:e,success(t){e({content:t})},error(t){const n=zd(t);console.error(t),e({variant:"danger",content:n,priority:Qd,delay:Yd})}}),[e])};var hi=function(e,t){return hi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},hi(e,t)};function Zn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");hi(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Oe=function(){return Oe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Oe.apply(this,arguments)};function Nt(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}typeof SuppressedError=="function"&&SuppressedError;var vi="Invariant Violation",Ps=Object.setPrototypeOf,Xd=Ps===void 0?function(e,t){return e.__proto__=t,e}:Ps,Ms=function(e){Zn(t,e);function t(n){n===void 0&&(n=vi);var r=e.call(this,typeof n=="number"?vi+": "+n+" (see https://github.com/apollographql/invariant-packages)":n)||this;return r.framesToPop=1,r.name=vi,Xd(r,t.prototype),r}return t}(Error);function gt(e,t){if(!e)throw new Ms(t)}var Ns=["debug","log","warn","error","silent"],ef=Ns.indexOf("log");function Xn(e){return function(){if(Ns.indexOf(e)>=ef){var t=console[e]||console.log;return t.apply(console,arguments)}}}(function(e){e.debug=Xn("debug"),e.log=Xn("log"),e.warn=Xn("warn"),e.error=Xn("error")})(gt||(gt={}));var ks="3.14.1";function kt(e){try{return e()}catch{}}const er=kt(function(){return globalThis})||kt(function(){return window})||kt(function(){return self})||kt(function(){return global})||kt(function(){return kt.constructor("return this")()});var As=new Map;function tf(e){var t=As.get(e)||1;return As.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function nf(e,t){var n=tf("stringifyForDisplay");return JSON.stringify(e,function(r,i){return i===void 0?n:i},t).split(JSON.stringify(n)).join("<undefined>")}function tr(e){return function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(typeof t=="number"){var i=t;t=Si(i),t||(t=yi(i,n),n=[])}e.apply(void 0,[t].concat(n))}}var At=Object.assign(function(t,n){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];t||gt(t,Si(n,r)||yi(n,r))},{debug:tr(gt.debug),log:tr(gt.log),warn:tr(gt.warn),error:tr(gt.error)});function gn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Ms(Si(e,t)||yi(e,t))}var Ls=Symbol.for("ApolloErrorMessageHandler_"+ks);function js(e){if(typeof e=="string")return e;try{return nf(e,2).slice(0,1e3)}catch{return"<non-serializable>"}}function Si(e,t){if(t===void 0&&(t=[]),!!e)return er[Ls]&&er[Ls](e,t.map(js))}function yi(e,t){if(t===void 0&&(t=[]),!!e)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:ks,message:e,args:t.map(js)})))}function rf(e,t){if(!!!e)throw new Error(t)}const qs={Name:[],Document:["definitions"],OperationDefinition:["description","name","variableDefinitions","directives","selectionSet"],VariableDefinition:["description","variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["description","name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","directives","locations"],SchemaExtension:["directives","operationTypes"],DirectiveExtension:["name","directives"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"],TypeCoordinate:["name"],MemberCoordinate:["name","memberName"],ArgumentCoordinate:["name","fieldName","argumentName"],DirectiveCoordinate:["name"],DirectiveArgumentCoordinate:["name","argumentName"]},af=new Set(Object.keys(qs));function Vs(e){const t=e==null?void 0:e.kind;return typeof t=="string"&&af.has(t)}var Rs;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(Rs||(Rs={}));var bi;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.DIRECTIVE_EXTENSION="DirectiveExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension",e.TYPE_COORDINATE="TypeCoordinate",e.MEMBER_COORDINATE="MemberCoordinate",e.ARGUMENT_COORDINATE="ArgumentCoordinate",e.DIRECTIVE_COORDINATE="DirectiveCoordinate",e.DIRECTIVE_ARGUMENT_COORDINATE="DirectiveArgumentCoordinate"})(bi||(bi={}));function Bs(e){return e===9||e===32}function sf(e,t){const n=e.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),i=r.length===1,a=r.length>1&&r.slice(1).every(h=>h.length===0||Bs(h.charCodeAt(0))),s=n.endsWith('\\"""'),u=e.endsWith('"')&&!s,o=e.endsWith("\\"),c=u||o,l=!i||e.length>70||c||a||s;let f="";const I=i&&Bs(e.charCodeAt(0));return(l&&!I||a)&&(f+=`
`),f+=n,(l||c)&&(f+=`
`),'"""'+f+'"""'}const of=10,Gs=2;function uf(e){return nr(e,[])}function nr(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return cf(e,t);default:return String(e)}}function cf(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const n=[...t,e];if(lf(e)){const r=e.toJSON();if(r!==e)return typeof r=="string"?r:nr(r,n)}else if(Array.isArray(e))return ff(e,n);return df(e,n)}function lf(e){return typeof e.toJSON=="function"}function df(e,t){const n=Object.entries(e);return n.length===0?"{}":t.length>Gs?"["+pf(e)+"]":"{ "+n.map(([i,a])=>i+": "+nr(a,t)).join(", ")+" }"}function ff(e,t){if(e.length===0)return"[]";if(t.length>Gs)return"[Array]";const n=Math.min(of,e.length),r=e.length-n,i=[];for(let a=0;a<n;++a)i.push(nr(e[a],t));return r===1?i.push("... 1 more item"):r>1&&i.push(`... ${r} more items`),"["+i.join(", ")+"]"}function pf(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}function mf(e){return`"${e.replace(gf,hf)}"`}const gf=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function hf(e){return vf[e.charCodeAt(0)]}const vf=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],Sf=Object.freeze({});function yf(e,t,n=qs){const r=new Map;for(const C of Object.values(bi))r.set(C,bf(t,C));let i,a=Array.isArray(e),s=[e],u=-1,o=[],c=e,l,f;const I=[],h=[];do{u++;const C=u===s.length,v=C&&o.length!==0;if(C){if(l=h.length===0?void 0:I[I.length-1],c=f,f=h.pop(),v)if(a){c=c.slice();let w=0;for(const[b,y]of o){const p=b-w;y===null?(c.splice(p,1),w++):c[p]=y}}else{c={...c};for(const[w,b]of o)c[w]=b}u=i.index,s=i.keys,o=i.edits,a=i.inArray,i=i.prev}else if(f){if(l=a?u:s[u],c=f[l],c==null)continue;I.push(l)}let O;if(!Array.isArray(c)){var E,S;Vs(c)||rf(!1,`Invalid AST Node: ${uf(c)}.`);const w=C?(E=r.get(c.kind))===null||E===void 0?void 0:E.leave:(S=r.get(c.kind))===null||S===void 0?void 0:S.enter;if(O=w==null?void 0:w.call(t,c,l,f,I,h),O===Sf)break;if(O===!1){if(!C){I.pop();continue}}else if(O!==void 0&&(o.push([l,O]),!C))if(Vs(O))c=O;else{I.pop();continue}}if(O===void 0&&v&&o.push([l,c]),C)I.pop();else{var _;i={inArray:a,index:u,keys:s,edits:o,prev:i},a=Array.isArray(c),s=a?c:(_=n[c.kind])!==null&&_!==void 0?_:[],u=-1,o=[],f&&h.push(f),f=c}}while(i!==void 0);return o.length!==0?o[o.length-1][1]:e}function bf(e,t){const n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function If(e){return yf(e,Of)}const _f=80,Of={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>k(e.definitions,`

`)},OperationDefinition:{leave(e){const t=Ii(e.variableDefinitions)?z(`(
`,k(e.variableDefinitions,`
`),`
)`):z("(",k(e.variableDefinitions,", "),")"),n=z("",e.description,`
`)+k([e.operation,k([e.name,t]),k(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r,description:i})=>z("",i,`
`)+e+": "+t+z(" = ",n)+z(" ",k(r," "))},SelectionSet:{leave:({selections:e})=>Ue(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:i}){const a=z("",e,": ")+t;let s=a+z("(",k(n,", "),")");return s.length>_f&&(s=a+z(`(
`,rr(k(n,`
`)),`
)`)),k([s,k(r," "),i]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+z(" ",k(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>k(["...",z("on ",e),k(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:i,description:a})=>z("",a,`
`)+`fragment ${e}${z("(",k(n,", "),")")} on ${t} ${z("",k(r," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?sf(e):mf(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+k(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+k(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+z("(",k(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>z("",e,`
`)+k(["schema",k(t," "),Ue(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>z("",e,`
`)+k(["scalar",t,k(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>z("",e,`
`)+k(["type",t,z("implements ",k(n," & ")),k(r," "),Ue(i)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:i})=>z("",e,`
`)+t+(Ii(n)?z(`(
`,rr(k(n,`
`)),`
)`):z("(",k(n,", "),")"))+": "+r+z(" ",k(i," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:i})=>z("",e,`
`)+k([t+": "+n,z("= ",r),k(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>z("",e,`
`)+k(["interface",t,z("implements ",k(n," & ")),k(r," "),Ue(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>z("",e,`
`)+k(["union",t,k(n," "),z("= ",k(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>z("",e,`
`)+k(["enum",t,k(n," "),Ue(r)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>z("",e,`
`)+k([t,k(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>z("",e,`
`)+k(["input",t,k(n," "),Ue(r)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,directives:r,repeatable:i,locations:a})=>z("",e,`
`)+"directive @"+t+(Ii(n)?z(`(
`,rr(k(n,`
`)),`
)`):z("(",k(n,", "),")"))+z(" ",k(r," "))+(i?" repeatable":"")+" on "+k(a," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>k(["extend schema",k(e," "),Ue(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>k(["extend scalar",e,k(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>k(["extend type",e,z("implements ",k(t," & ")),k(n," "),Ue(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>k(["extend interface",e,z("implements ",k(t," & ")),k(n," "),Ue(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>k(["extend union",e,k(t," "),z("= ",k(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>k(["extend enum",e,k(t," "),Ue(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>k(["extend input",e,k(t," "),Ue(n)]," ")},DirectiveExtension:{leave:({name:e,directives:t})=>k(["extend directive @"+e,k(t," ")]," ")},TypeCoordinate:{leave:({name:e})=>e},MemberCoordinate:{leave:({name:e,memberName:t})=>k([e,z(".",t)])},ArgumentCoordinate:{leave:({name:e,fieldName:t,argumentName:n})=>k([e,z(".",t),z("(",n,":)")])},DirectiveCoordinate:{leave:({name:e})=>k(["@",e])},DirectiveArgumentCoordinate:{leave:({name:e,argumentName:t})=>k(["@",e,z("(",t,":)")])}};function k(e,t=""){var n;return(n=e==null?void 0:e.filter(r=>r).join(t))!==null&&n!==void 0?n:""}function Ue(e){return z(`{
`,rr(k(e,`
`)),`
}`)}function z(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function rr(e){return z("  ",e.replace(/\n/g,`
  `))}function Ii(e){var t;return(t=e==null?void 0:e.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}function _i(e){return e!==null&&typeof e=="object"}function Cf(){}class Us{constructor(t=1/0,n=Cf){this.max=t,this.dispose=n,this.map=new Map,this.newest=null,this.oldest=null}has(t){return this.map.has(t)}get(t){const n=this.getNode(t);return n&&n.value}get size(){return this.map.size}getNode(t){const n=this.map.get(t);if(n&&n!==this.newest){const{older:r,newer:i}=n;i&&(i.older=r),r&&(r.newer=i),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=i)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(t,r),r.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(t){const n=this.map.get(t);return n?(n===this.newest&&(this.newest=n.older),n===this.oldest&&(this.oldest=n.newer),n.newer&&(n.newer.older=n.older),n.older&&(n.older.newer=n.newer),this.map.delete(t),this.dispose(n.value,t),!0):!1}}function Oi(){}const Df=Oi,Ef=typeof WeakRef<"u"?WeakRef:function(e){return{deref:()=>e}},wf=typeof WeakMap<"u"?WeakMap:Map,Tf=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:Oi,unregister:Oi}},xf=10024;class Hs{constructor(t=1/0,n=Df){this.max=t,this.dispose=n,this.map=new wf,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{const r=this.unfinalizedNodes.values();for(let i=0;i<xf;i++){const a=r.next().value;if(!a)break;this.unfinalizedNodes.delete(a);const s=a.key;delete a.key,a.keyRef=new Ef(s),this.registry.register(s,a,a)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new Tf(this.deleteNode.bind(this))}has(t){return this.map.has(t)}get(t){const n=this.getNode(t);return n&&n.value}getNode(t){const n=this.map.get(t);if(n&&n!==this.newest){const{older:r,newer:i}=n;i&&(i.older=r),r&&(r.newer=i),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=i)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.scheduleFinalization(r),this.map.set(t,r),this.size++,r.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(t){t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.size--;const n=t.key||t.keyRef&&t.keyRef.deref();this.dispose(t.value,n),t.keyRef?this.registry.unregister(t):this.unfinalizedNodes.delete(t),n&&this.map.delete(n)}delete(t){const n=this.map.get(t);return n?(this.deleteNode(n),!0):!1}scheduleFinalization(t){this.unfinalizedNodes.add(t),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}}var Ci=new WeakSet;function zs(e){e.size<=(e.max||-1)||Ci.has(e)||(Ci.add(e),setTimeout(function(){e.clean(),Ci.delete(e)},100))}var $f=function(e,t){var n=new Hs(e,t);return n.set=function(r,i){var a=Hs.prototype.set.call(this,r,i);return zs(this),a},n},Ff=function(e,t){var n=new Us(e,t);return n.set=function(r,i){var a=Us.prototype.set.call(this,r,i);return zs(this),a},n},Pf=Symbol.for("apollo.cacheSize"),Ws=Oe({},er[Pf]),Mf={};function Qs(e,t){Mf[e]=t}var Ys=Object.assign(function(t){return JSON.stringify(t,Nf)},{reset:function(){Lt=new Ff(Ws.canonicalStringify||1e3)}});globalThis.__DEV__!==!1&&Qs("canonicalStringify",function(){return Lt.size});var Lt;Ys.reset();function Nf(e,t){if(t&&typeof t=="object"){var n=Object.getPrototypeOf(t);if(n===Object.prototype||n===null){var r=Object.keys(t);if(r.every(kf))return t;var i=JSON.stringify(r),a=Lt.get(i);if(!a){r.sort();var s=JSON.stringify(r);a=Lt.get(s)||r,Lt.set(i,a),Lt.set(s,a)}var u=Object.create(n);return a.forEach(function(o){u[o]=t[o]}),u}}return t}function kf(e,t,n){return t===0||n[t-1]<=e}var Af=["connection","include","skip","client","rest","export","nonreactive"],hn=Ys;Object.assign(function(e,t,n){if(t&&n&&n.connection&&n.connection.key)if(n.connection.filter&&n.connection.filter.length>0){var r=n.connection.filter?n.connection.filter:[];r.sort();var i={};return r.forEach(function(u){i[u]=t[u]}),"".concat(n.connection.key,"(").concat(hn(i),")")}else return n.connection.key;var a=e;if(t){var s=hn(t);a+="(".concat(s,")")}return n&&Object.keys(n).forEach(function(u){Af.indexOf(u)===-1&&(n[u]&&Object.keys(n[u]).length?a+="@".concat(u,"(").concat(hn(n[u]),")"):a+="@".concat(u))}),a},{setStringify:function(e){var t=hn;return hn=e,t}});function Lf(e){return e.kind==="Field"}function Ks(e){At(e&&e.kind==="Document",115);var t=e.definitions.filter(function(n){return n.kind!=="FragmentDefinition"}).map(function(n){if(n.kind!=="OperationDefinition")throw gn(116,n.kind);return n});return At(t.length<=1,117,t.length),e}function jf(e){return Ks(e),e.definitions.filter(function(t){return t.kind==="OperationDefinition"})[0]}function qf(e){return e.definitions.filter(function(t){return t.kind==="OperationDefinition"&&!!t.name}).map(function(t){return t.name.value})[0]||null}function Vf(e){var t=jf(e);return At(t&&t.operation==="query",118),t}function Rf(e){Ks(e);for(var t,n=0,r=e.definitions;n<r.length;n++){var i=r[n];if(i.kind==="OperationDefinition"){var a=i.operation;if(a==="query"||a==="mutation"||a==="subscription")return i}i.kind==="FragmentDefinition"&&!t&&(t=i)}if(t)return t;throw gn(122)}let Ee=null;const Js={};let Bf=1;const Gf=()=>class{constructor(){this.id=["slot",Bf++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let t=Ee;t;t=t.parent)if(this.id in t.slots){const n=t.slots[this.id];if(n===Js)break;return t!==Ee&&(Ee.slots[this.id]=n),!0}return Ee&&(Ee.slots[this.id]=Js),!1}getValue(){if(this.hasValue())return Ee.slots[this.id]}withValue(t,n,r,i){const a={__proto__:null,[this.id]:t},s=Ee;Ee={parent:s,slots:a};try{return n.apply(i,r)}finally{Ee=s}}static bind(t){const n=Ee;return function(){const r=Ee;try{return Ee=n,t.apply(this,arguments)}finally{Ee=r}}}static noContext(t,n,r){if(Ee){const i=Ee;try{return Ee=null,t.apply(r,n)}finally{Ee=i}}else return t.apply(r,n)}};function Zs(e){try{return e()}catch{}}const Di="@wry/context:Slot",Xs=Zs(()=>globalThis)||Zs(()=>global)||Object.create(null),Ei=Xs[Di]||Array[Di]||function(e){try{Object.defineProperty(Xs,Di,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}}(Gf()),{bind:tC,noContext:nC}=Ei;new Ei;var vn,wi=Object.assign(function(e){var t=vn.get(e);return t||(t=If(e),vn.set(e,t)),t},{reset:function(){vn=new $f(Ws.print||2e3)}});wi.reset(),globalThis.__DEV__!==!1&&Qs("print",function(){return vn?vn.size:0});function Uf(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=Hf(e))||t){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hf(e,t){if(e){if(typeof e=="string")return eo(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return eo(e,t)}}function eo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function to(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ti(e,t,n){return t&&to(e.prototype,t),n&&to(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var xi=function(){return typeof Symbol=="function"},$i=function(e){return xi()&&!!Symbol[e]},Fi=function(e){return $i(e)?Symbol[e]:"@@"+e};xi()&&!$i("observable")&&(Symbol.observable=Symbol("observable"));var zf=Fi("iterator"),Pi=Fi("observable"),no=Fi("species");function ir(e,t){var n=e[t];if(n!=null){if(typeof n!="function")throw new TypeError(n+" is not a function");return n}}function Sn(e){var t=e.constructor;return t!==void 0&&(t=t[no],t===null&&(t=void 0)),t!==void 0?t:be}function Wf(e){return e instanceof be}function jt(e){jt.log?jt.log(e):setTimeout(function(){throw e})}function ar(e){Promise.resolve().then(function(){try{e()}catch(t){jt(t)}})}function ro(e){var t=e._cleanup;if(t!==void 0&&(e._cleanup=void 0,!!t))try{if(typeof t=="function")t();else{var n=ir(t,"unsubscribe");n&&n.call(t)}}catch(r){jt(r)}}function Mi(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function Qf(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var n=0;n<t.length&&(io(e,t[n].type,t[n].value),e._state!=="closed");++n);}}function io(e,t,n){e._state="running";var r=e._observer;try{var i=ir(r,t);switch(t){case"next":i&&i.call(r,n);break;case"error":if(Mi(e),i)i.call(r,n);else throw n;break;case"complete":Mi(e),i&&i.call(r);break}}catch(a){jt(a)}e._state==="closed"?ro(e):e._state==="running"&&(e._state="ready")}function Ni(e,t,n){if(e._state!=="closed"){if(e._state==="buffering"){e._queue.push({type:t,value:n});return}if(e._state!=="ready"){e._state="buffering",e._queue=[{type:t,value:n}],ar(function(){return Qf(e)});return}io(e,t,n)}}var Yf=function(){function e(n,r){this._cleanup=void 0,this._observer=n,this._queue=void 0,this._state="initializing";var i=new Kf(this);try{this._cleanup=r.call(void 0,i)}catch(a){i.error(a)}this._state==="initializing"&&(this._state="ready")}var t=e.prototype;return t.unsubscribe=function(){this._state!=="closed"&&(Mi(this),ro(this))},Ti(e,[{key:"closed",get:function(){return this._state==="closed"}}]),e}(),Kf=function(){function e(n){this._subscription=n}var t=e.prototype;return t.next=function(r){Ni(this._subscription,"next",r)},t.error=function(r){Ni(this._subscription,"error",r)},t.complete=function(){Ni(this._subscription,"complete")},Ti(e,[{key:"closed",get:function(){return this._subscription._state==="closed"}}]),e}(),be=function(){function e(n){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if(typeof n!="function")throw new TypeError("Observable initializer must be a function");this._subscriber=n}var t=e.prototype;return t.subscribe=function(r){return(typeof r!="object"||r===null)&&(r={next:r,error:arguments[1],complete:arguments[2]}),new Yf(r,this._subscriber)},t.forEach=function(r){var i=this;return new Promise(function(a,s){if(typeof r!="function"){s(new TypeError(r+" is not a function"));return}function u(){o.unsubscribe(),a()}var o=i.subscribe({next:function(c){try{r(c,u)}catch(l){s(l),o.unsubscribe()}},error:s,complete:a})})},t.map=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=Sn(this);return new a(function(s){return i.subscribe({next:function(u){try{u=r(u)}catch(o){return s.error(o)}s.next(u)},error:function(u){s.error(u)},complete:function(){s.complete()}})})},t.filter=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=Sn(this);return new a(function(s){return i.subscribe({next:function(u){try{if(!r(u))return}catch(o){return s.error(o)}s.next(u)},error:function(u){s.error(u)},complete:function(){s.complete()}})})},t.reduce=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=Sn(this),s=arguments.length>1,u=!1,o=arguments[1],c=o;return new a(function(l){return i.subscribe({next:function(f){var I=!u;if(u=!0,!I||s)try{c=r(c,f)}catch(h){return l.error(h)}else c=f},error:function(f){l.error(f)},complete:function(){if(!u&&!s)return l.error(new TypeError("Cannot reduce an empty sequence"));l.next(c),l.complete()}})})},t.concat=function(){for(var r=this,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];var u=Sn(this);return new u(function(o){var c,l=0;function f(I){c=I.subscribe({next:function(h){o.next(h)},error:function(h){o.error(h)},complete:function(){l===a.length?(c=void 0,o.complete()):f(u.from(a[l++]))}})}return f(r),function(){c&&(c.unsubscribe(),c=void 0)}})},t.flatMap=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=Sn(this);return new a(function(s){var u=[],o=i.subscribe({next:function(l){if(r)try{l=r(l)}catch(I){return s.error(I)}var f=a.from(l).subscribe({next:function(I){s.next(I)},error:function(I){s.error(I)},complete:function(){var I=u.indexOf(f);I>=0&&u.splice(I,1),c()}});u.push(f)},error:function(l){s.error(l)},complete:function(){c()}});function c(){o.closed&&u.length===0&&s.complete()}return function(){u.forEach(function(l){return l.unsubscribe()}),o.unsubscribe()}})},t[Pi]=function(){return this},e.from=function(r){var i=typeof this=="function"?this:e;if(r==null)throw new TypeError(r+" is not an object");var a=ir(r,Pi);if(a){var s=a.call(r);if(Object(s)!==s)throw new TypeError(s+" is not an object");return Wf(s)&&s.constructor===i?s:new i(function(u){return s.subscribe(u)})}if($i("iterator")&&(a=ir(r,zf),a))return new i(function(u){ar(function(){if(!u.closed){for(var o=Uf(a.call(r)),c;!(c=o()).done;){var l=c.value;if(u.next(l),u.closed)return}u.complete()}})});if(Array.isArray(r))return new i(function(u){ar(function(){if(!u.closed){for(var o=0;o<r.length;++o)if(u.next(r[o]),u.closed)return;u.complete()}})});throw new TypeError(r+" is not observable")},e.of=function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var s=typeof this=="function"?this:e;return new s(function(u){ar(function(){if(!u.closed){for(var o=0;o<i.length;++o)if(u.next(i[o]),u.closed)return;u.complete()}})})},Ti(e,null,[{key:no,get:function(){return this}}]),e}();xi()&&Object.defineProperty(be,Symbol("extensions"),{value:{symbol:Pi,hostReportError:jt},configurable:!0});function Jf(e){var t,n=e.Symbol;if(typeof n=="function")if(n.observable)t=n.observable;else{typeof n.for=="function"?t=n.for("https://github.com/benlesh/symbol-observable"):t=n("https://github.com/benlesh/symbol-observable");try{n.observable=t}catch{}}else t="@@observable";return t}var qt;typeof self<"u"?qt=self:typeof window<"u"?qt=window:typeof global<"u"?qt=global:typeof module<"u"?qt=module:qt=Function("return this")(),Jf(qt);var ao=be.prototype,so="@@observable";ao[so]||(ao[so]=function(){return this});var ki,Zf=Symbol.for("apollo.deprecations"),oo=Symbol.for("apollo.deprecations.slot"),Ai=er,Xf=(ki=Ai[oo])!==null&&ki!==void 0?ki:Ai[oo]=new Ei;function ep(e){return Ai[Zf]||(Xf.getValue()||[]).includes(e)}function tp(e,t){ep(e)||t()}var uo=function(e,t,n){var r=new Error(n);throw r.name="ServerError",r.response=e,r.statusCode=e.status,r.result=t,r};function np(e){for(var t=["query","operationName","variables","extensions","context"],n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];if(t.indexOf(i)<0)throw gn(58,i)}return e}function rp(e,t){var n=Oe({},e),r=function(a){typeof a=="function"?n=Oe(Oe({},n),a(n)):n=Oe(Oe({},n),a)},i=function(){return Oe({},n)};return Object.defineProperty(t,"setContext",{enumerable:!1,value:r}),Object.defineProperty(t,"getContext",{enumerable:!1,value:i}),t}function ip(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName=typeof t.query!="string"?qf(t.query)||void 0:""),t}function co(e,t){return t?t(e):be.of()}function yn(e){return typeof e=="function"?new bn(e):e}function sr(e){return e.request.length<=1}var bn=function(){function e(t){t&&(this.request=t)}return e.empty=function(){return new e(function(){return be.of()})},e.from=function(t){return t.length===0?e.empty():t.map(yn).reduce(function(n,r){return n.concat(r)})},e.split=function(t,n,r){var i=yn(n),a=yn(r||new e(co)),s;return sr(i)&&sr(a)?s=new e(function(u){return t(u)?i.request(u)||be.of():a.request(u)||be.of()}):s=new e(function(u,o){return t(u)?i.request(u,o)||be.of():a.request(u,o)||be.of()}),Object.assign(s,{left:i,right:a})},e.execute=function(t,n){return t.request(rp(n.context,ip(np(n))))||be.of()},e.concat=function(t,n){var r=yn(t);if(sr(r))return globalThis.__DEV__!==!1&&At.warn(47,r),r;var i=yn(n),a;return sr(i)?a=new e(function(s){return r.request(s,function(u){return i.request(u)||be.of()})||be.of()}):a=new e(function(s,u){return r.request(s,function(o){return i.request(o,u)||be.of()})||be.of()}),Object.assign(a,{left:r,right:i})},e.prototype.split=function(t,n,r){return this.concat(e.split(t,n,r||new e(co)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(t,n){throw gn(48)},e.prototype.onError=function(t,n){if(globalThis.__DEV__!==!1&&tp("onError",function(){globalThis.__DEV__!==!1&&At.warn(49)}),n&&n.error)return n.error(t),!1;throw t},e.prototype.setOnError=function(t){return globalThis.__DEV__!==!1&&globalThis.__DEV__!==!1&&At.warn(50),this.onError=t,this},e}(),lo=Symbol();function ap(e){return e.extensions?Array.isArray(e.extensions[lo]):!1}var sp=function(e){var t=Nt(Nt(Nt([],e.graphQLErrors,!0),e.clientErrors,!0),e.protocolErrors,!0);return e.networkError&&t.push(e.networkError),t.map(function(n){return _i(n)&&n.message||"Error message not found."}).join(`
`)},op=function(e){Zn(t,e);function t(n){var r=n.graphQLErrors,i=n.protocolErrors,a=n.clientErrors,s=n.networkError,u=n.errorMessage,o=n.extraInfo,c=e.call(this,u)||this;return c.name="ApolloError",c.graphQLErrors=r||[],c.protocolErrors=i||[],c.clientErrors=a||[],c.networkError=s||null,c.message=u||sp(c),c.extraInfo=o,c.cause=Nt(Nt(Nt([s],r||[],!0),i||[],!0),a||[],!0).find(function(l){return!!l})||null,c.__proto__=t.prototype,c}return t}(Error);function up(e){return _i(e)&&"code"in e&&"reason"in e}function cp(e){var t;return _i(e)&&((t=e.target)===null||t===void 0?void 0:t.readyState)===WebSocket.CLOSED}var lp=function(e){Zn(t,e);function t(n){var r=e.call(this)||this;return r.client=n,r}return t.prototype.request=function(n){var r=this;return new be(function(i){return r.client.subscribe(Oe(Oe({},n),{query:wi(n.query)}),{next:i.next.bind(i),complete:i.complete.bind(i),error:function(a){if(a instanceof Error)return i.error(a);var s=up(a);return s||cp(a)?i.error(new Error("Socket closed".concat(s?" with event ".concat(a.code):"").concat(s?" ".concat(a.reason):""))):i.error(new op({graphQLErrors:Array.isArray(a)?a:[a]}))}})})},t}(bn);function ke(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function ht(e){return ke(e)==="object"}function dp(e){return Array.isArray(e)&&e.length>0&&e.every(t=>"message"in t)}function fo(e,t){return e.length<124?e:t}const fp="graphql-transport-ws";var je;(function(e){e[e.InternalServerError=4500]="InternalServerError",e[e.InternalClientError=4005]="InternalClientError",e[e.BadRequest=4400]="BadRequest",e[e.BadResponse=4004]="BadResponse",e[e.Unauthorized=4401]="Unauthorized",e[e.Forbidden=4403]="Forbidden",e[e.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",e[e.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",e[e.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",e[e.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",e[e.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests"})(je||(je={}));var ve;(function(e){e.ConnectionInit="connection_init",e.ConnectionAck="connection_ack",e.Ping="ping",e.Pong="pong",e.Subscribe="subscribe",e.Next="next",e.Error="error",e.Complete="complete"})(ve||(ve={}));function po(e){if(!ht(e))throw new Error(`Message is expected to be an object, but got ${ke(e)}`);if(!e.type)throw new Error("Message is missing the 'type' property");if(typeof e.type!="string")throw new Error(`Message is expects the 'type' property to be a string, but got ${ke(e.type)}`);switch(e.type){case ve.ConnectionInit:case ve.ConnectionAck:case ve.Ping:case ve.Pong:{if(e.payload!=null&&!ht(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);break}case ve.Subscribe:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ke(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!ht(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ke(e.payload)}`);if(typeof e.payload.query!="string")throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${ke(e.payload.query)}`);if(e.payload.variables!=null&&!ht(e.payload.variables))throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${ke(e.payload.variables)}`);if(e.payload.operationName!=null&&ke(e.payload.operationName)!=="string")throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${ke(e.payload.operationName)}`);if(e.payload.extensions!=null&&!ht(e.payload.extensions))throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${ke(e.payload.extensions)}`);break}case ve.Next:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ke(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!ht(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${ke(e.payload)}`);break}case ve.Error:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ke(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!dp(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);break}case ve.Complete:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${ke(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);break}default:throw new Error(`Invalid message 'type' property "${e.type}"`)}return e}function pp(e,t){return po(typeof e=="string"?JSON.parse(e,t):e)}function In(e,t){return po(e),JSON.stringify(e,t)}var Vt=function(e){return this instanceof Vt?(this.v=e,this):new Vt(e)},mp=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,a=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(h){return function(E){return Promise.resolve(E).then(h,f)}}function u(h,E){r[h]&&(i[h]=function(S){return new Promise(function(_,C){a.push([h,S,_,C])>1||o(h,S)})},E&&(i[h]=E(i[h])))}function o(h,E){try{c(r[h](E))}catch(S){I(a[0][3],S)}}function c(h){h.value instanceof Vt?Promise.resolve(h.value.v).then(l,f):I(a[0][2],h)}function l(h){o("next",h)}function f(h){o("throw",h)}function I(h,E){h(E),a.shift(),a.length&&o(a[0][0],a[0][1])}};function gp(e){const{url:t,connectionParams:n,lazy:r=!0,onNonLazyError:i=console.error,lazyCloseTimeout:a=0,keepAlive:s=0,disablePong:u,connectionAckWaitTimeout:o=0,retryAttempts:c=5,retryWait:l=async function(P){let N=1e3;for(let L=0;L<P;L++)N*=2;await new Promise(L=>setTimeout(L,N+Math.floor(Math.random()*2700+300)))},shouldRetry:f=Li,isFatalConnectionProblem:I,on:h,webSocketImpl:E,generateID:S=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,P=>{const N=Math.random()*16|0;return(P=="x"?N:N&3|8).toString(16)})},jsonMessageReplacer:_,jsonMessageReviver:C}=e;let v;if(E){if(!vp(E))throw new Error("Invalid WebSocket implementation provided");v=E}else typeof WebSocket<"u"?v=WebSocket:typeof global<"u"?v=global.WebSocket||global.MozWebSocket:typeof window<"u"&&(v=window.WebSocket||window.MozWebSocket);if(!v)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const O=v,w=(()=>{const $=(()=>{const N={};return{on(L,ee){return N[L]=ee,()=>{delete N[L]}},emit(L){var ee;"id"in L&&((ee=N[L.id])===null||ee===void 0||ee.call(N,L))}}})(),P={connecting:h!=null&&h.connecting?[h.connecting]:[],opened:h!=null&&h.opened?[h.opened]:[],connected:h!=null&&h.connected?[h.connected]:[],ping:h!=null&&h.ping?[h.ping]:[],pong:h!=null&&h.pong?[h.pong]:[],message:h!=null&&h.message?[$.emit,h.message]:[$.emit],closed:h!=null&&h.closed?[h.closed]:[],error:h!=null&&h.error?[h.error]:[]};return{onMessage:$.on,on(N,L){const ee=P[N];return ee.push(L),()=>{ee.splice(ee.indexOf(L),1)}},emit(N,...L){for(const ee of[...P[N]])ee(...L)}}})();function b($){const P=[w.on("error",N=>{P.forEach(L=>L()),$(N)}),w.on("closed",N=>{P.forEach(L=>L()),$(N)})]}let y,p=0,D,T=!1,F=0,q=!1;async function U(){clearTimeout(D);const[$,P]=await(y??(y=new Promise((ee,le)=>(async()=>{if(T){if(await l(F),!p)return y=void 0,le({code:1e3,reason:"All Subscriptions Gone"});F++}w.emit("connecting",T);const M=new O(typeof t=="function"?await t():t,fp);let A,H;function G(){isFinite(s)&&s>0&&(clearTimeout(H),H=setTimeout(()=>{M.readyState===O.OPEN&&(M.send(In({type:ve.Ping})),w.emit("ping",!1,void 0))},s))}b(J=>{y=void 0,clearTimeout(A),clearTimeout(H),le(J),J instanceof mo&&(M.close(4499,"Terminated"),M.onerror=null,M.onclose=null)}),M.onerror=J=>w.emit("error",J),M.onclose=J=>w.emit("closed",J),M.onopen=async()=>{try{w.emit("opened",M);const J=typeof n=="function"?await n():n;if(M.readyState!==O.OPEN)return;M.send(In(J?{type:ve.ConnectionInit,payload:J}:{type:ve.ConnectionInit},_)),isFinite(o)&&o>0&&(A=setTimeout(()=>{M.close(je.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")},o)),G()}catch(J){w.emit("error",J),M.close(je.InternalClientError,fo(J instanceof Error?J.message:new Error(J).message,"Internal client error"))}};let W=!1;M.onmessage=({data:J})=>{try{const R=pp(J,C);if(w.emit("message",R),R.type==="ping"||R.type==="pong"){w.emit(R.type,!0,R.payload),R.type==="pong"?G():u||(M.send(In(R.payload?{type:ve.Pong,payload:R.payload}:{type:ve.Pong})),w.emit("pong",!1,R.payload));return}if(W)return;if(R.type!==ve.ConnectionAck)throw new Error(`First message cannot be of type ${R.type}`);clearTimeout(A),W=!0,w.emit("connected",M,R.payload,T),T=!1,F=0,ee([M,new Promise((oe,Me)=>b(Me))])}catch(R){M.onmessage=null,w.emit("error",R),M.close(je.BadResponse,fo(R instanceof Error?R.message:new Error(R).message,"Bad response"))}}})())));$.readyState===O.CLOSING&&await P;let N=()=>{};const L=new Promise(ee=>N=ee);return[$,N,Promise.race([L.then(()=>{if(!p){const ee=()=>$.close(1e3,"Normal Closure");isFinite(a)&&a>0?D=setTimeout(()=>{$.readyState===O.OPEN&&ee()},a):ee()}}),P])]}function ne($){if(Li($)&&(hp($.code)||[je.InternalServerError,je.InternalClientError,je.BadRequest,je.BadResponse,je.Unauthorized,je.SubprotocolNotAcceptable,je.SubscriberAlreadyExists,je.TooManyInitialisationRequests].includes($.code)))throw $;if(q)return!1;if(Li($)&&$.code===1e3)return p>0;if(!c||F>=c||!f($)||I!=null&&I($))throw $;return T=!0}r||(async()=>{for(p++;;)try{const[,,$]=await U();await $}catch($){try{if(!ne($))return}catch(P){return i==null?void 0:i(P)}}})();function X($,P){const N=S($);let L=!1,ee=!1,le=()=>{p--,L=!0};return(async()=>{for(p++;;)try{const[M,A,H]=await U();if(L)return A();const G=w.onMessage(N,W=>{switch(W.type){case ve.Next:{P.next(W.payload);return}case ve.Error:{ee=!0,L=!0,P.error(W.payload),le();return}case ve.Complete:{L=!0,le();return}}});M.send(In({id:N,type:ve.Subscribe,payload:$},_)),le=()=>{!L&&M.readyState===O.OPEN&&M.send(In({id:N,type:ve.Complete},_)),p--,L=!0,A()},await H.finally(G);return}catch(M){if(!ne(M))return}})().then(()=>{ee||P.complete()}).catch(M=>{P.error(M)}),()=>{L||le()}}return{on:w.on,subscribe:X,iterate($){const P=[],N={done:!1,error:null,resolve:()=>{}},L=X($,{next(le){P.push(le),N.resolve()},error(le){N.done=!0,N.error=le,N.resolve()},complete(){N.done=!0,N.resolve()}}),ee=function(){return mp(this,arguments,function*(){for(;;){for(P.length||(yield Vt(new Promise(A=>N.resolve=A)));P.length;)yield yield Vt(P.shift());if(N.error)throw N.error;if(N.done)return yield Vt(void 0)}})}();return ee.throw=async le=>(N.done||(N.done=!0,N.error=le,N.resolve()),{done:!0,value:void 0}),ee.return=async()=>(L(),{done:!0,value:void 0}),ee},async dispose(){if(q=!0,y){const[$]=await y;$.close(1e3,"Normal Closure")}},terminate(){y&&w.emit("closed",new mo)}}}class mo extends Error{constructor(){super(...arguments),this.name="TerminatedCloseEvent",this.message="4499: Terminated",this.code=4499,this.reason="Terminated",this.wasClean=!1}}function Li(e){return ht(e)&&"code"in e&&"reason"in e}function hp(e){return[1e3,1001,1006,1005,1012,1013,1014].includes(e)?!1:e>=1e3&&e<=1999}function vp(e){return typeof e=="function"&&"constructor"in e&&"CLOSED"in e&&"CLOSING"in e&&"CONNECTING"in e&&"OPEN"in e}function go(e){return new bn(function(t,n){return new be(function(r){var i,a,s;try{i=n(t).subscribe({next:function(u){if(u.errors?s=e({graphQLErrors:u.errors,response:u,operation:t,forward:n}):ap(u)&&(s=e({protocolErrors:u.extensions[lo],response:u,operation:t,forward:n})),s){a=s.subscribe({next:r.next.bind(r),error:r.error.bind(r),complete:r.complete.bind(r)});return}r.next(u)},error:function(u){if(s=e({operation:t,networkError:u,graphQLErrors:u&&u.result&&u.result.errors||void 0,forward:n}),s){a=s.subscribe({next:r.next.bind(r),error:r.error.bind(r),complete:r.complete.bind(r)});return}r.error(u)},complete:function(){s||r.complete.bind(r)()}})}catch(u){e({networkError:u,operation:t,forward:n}),r.error(u)}return function(){i&&i.unsubscribe(),a&&i.unsubscribe()}})})}(function(e){Zn(t,e);function t(n){var r=e.call(this)||this;return r.link=go(n),r}return t.prototype.request=function(n,r){return this.link.request(n,r)},t})(bn);var Sp=function(){if(typeof AbortController>"u")return{controller:!1,signal:!1};var e=new AbortController,t=e.signal;return{controller:e,signal:t}},ho=Object.prototype.hasOwnProperty;function yp(e,t){if(e.status>=300){var n=function(){try{return JSON.parse(t)}catch{return t}};uo(e,n(),"Response not successful: Received status code ".concat(e.status))}try{return JSON.parse(t)}catch(i){var r=i;throw r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,r}}function bp(e){return function(t){return t.text().then(function(n){return yp(t,n)}).then(function(n){return!Array.isArray(n)&&!ho.call(n,"data")&&!ho.call(n,"errors")&&uo(t,n,"Server response was missing for query '".concat(Array.isArray(e)?e.map(function(r){return r.operationName}):e.operationName,"'.")),n})}}var or=function(e,t){var n;try{n=JSON.stringify(e)}catch(i){var r=gn(54,t,i.message);throw r.parseError=i,r}return n};function Ip(e,t){var n=[],r=function(f,I){n.push("".concat(f,"=").concat(encodeURIComponent(I)))};if("query"in t&&r("query",t.query),t.operationName&&r("operationName",t.operationName),t.variables){var i=void 0;try{i=or(t.variables,"Variables map")}catch(f){return{parseError:f}}r("variables",i)}if(t.extensions){var a=void 0;try{a=or(t.extensions,"Extensions map")}catch(f){return{parseError:f}}r("extensions",a)}var s="",u=e,o=e.indexOf("#");o!==-1&&(s=e.substr(o),u=e.substr(0,o));var c=u.indexOf("?")===-1?"?":"&",l=u+c+n.join("&")+s;return{newURI:l}}var _p={includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},Op={accept:"*/*","content-type":"application/json"},Cp={method:"POST"},Dp={http:_p,headers:Op,options:Cp},Ep=function(e,t){return t(e)};function wp(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={},a={};n.forEach(function(f){i=Oe(Oe(Oe({},i),f.options),{headers:Oe(Oe({},i.headers),f.headers)}),f.credentials&&(i.credentials=f.credentials),a=Oe(Oe({},a),f.http)}),i.headers&&(i.headers=Tp(i.headers,a.preserveHeaderCase));var s=e.operationName,u=e.extensions,o=e.variables,c=e.query,l={operationName:s,variables:o};return a.includeExtensions&&(l.extensions=u),a.includeQuery&&(l.query=t(c,wi)),{options:i,body:l}}function Tp(e,t){if(!t){var n={};return Object.keys(Object(e)).forEach(function(a){n[a.toLowerCase()]=e[a]}),n}var r={};Object.keys(Object(e)).forEach(function(a){r[a.toLowerCase()]={originalName:a,value:e[a]}});var i={};return Object.keys(r).forEach(function(a){i[r[a].originalName]=r[a].value}),i}var xp=function(e,t){var n=e.getContext(),r=n.uri;return r||(typeof t=="function"?t(e):t||"/graphql")};function $p(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Fp(e,t,n=""){if(!arguments.length)throw new TypeError("Argument 1 `value` is required.");if(typeof t!="function")throw new TypeError("Argument 2 `isExtractable` must be a function.");if(typeof n!="string")throw new TypeError("Argument 3 `path` must be a string.");const r=new Map,i=new Map;function a(s,u,o){if(t(s)){const f=i.get(s);return f?f.push(u):i.set(s,[u]),null}const c=Array.isArray(s)||typeof FileList<"u"&&s instanceof FileList,l=$p(s);if(c||l){let f=r.get(s);const I=!f;if(I&&(f=c?[]:s instanceof Object?{}:Object.create(null),r.set(s,f)),!o.has(s)){const h=u?`${u}.`:"",E=new Set(o).add(s);if(c){let S=0;for(const _ of s){const C=a(_,h+S++,E);I&&f.push(C)}}else for(const S in s){const _=a(s[S],h+S,E);I&&(f[S]=_)}}return f}return s}return{clone:a(e,n,new Set),files:i}}function Pp(e,t,n){"name"in n?e.append(t,n,n.name):e.append(t,n)}function Mp(e){return typeof File<"u"&&e instanceof File||typeof Blob<"u"&&e instanceof Blob}function Np({uri:e="/graphql",useGETForQueries:t,isExtractableFile:n=Mp,FormData:r,formDataAppendFile:i=Pp,print:a=Ep,fetch:s,fetchOptions:u,credentials:o,headers:c,includeExtensions:l}={}){const f={http:{includeExtensions:l},options:u,credentials:o,headers:c};return new bn(I=>{const h=I.getContext(),{clientAwareness:{name:E,version:S}={},headers:_}=h,C={http:h.http,options:h.fetchOptions,credentials:h.credentials,headers:{...E&&{"apollographql-client-name":E},...S&&{"apollographql-client-version":S},..._}},{options:v,body:O}=wp(I,a,Dp,f,C),{clone:w,files:b}=Fp(O,n,"");let y=xp(I,e);if(b.size){v.headers&&delete v.headers["content-type"];const T=r||FormData,F=new T;F.append("operations",or(w,"Payload"));const q={};let U=0;b.forEach(ne=>{q[++U]=ne}),F.append("map",JSON.stringify(q)),U=0,b.forEach((ne,X)=>{i(F,String(++U),X)}),v.body=F}else if(t&&!I.query.definitions.some(T=>T.kind==="OperationDefinition"&&T.operation==="mutation")&&(v.method="GET"),v.method==="GET"){const{newURI:T,parseError:F}=Ip(y,O);if(F)return new be(q=>{q.error(F)});y=T}else v.body=or(w,"Payload");const{controller:p}=Sp();typeof p!="boolean"&&(v.signal&&(v.signal.aborted?p.abort():v.signal.addEventListener("abort",()=>{p.abort()},{once:!0})),v.signal=p.signal);const D=s||fetch;return new be(T=>{let F;return D(y,v).then(q=>(I.setContext({response:q}),q)).then(bp(I)).then(q=>{T.next(q),T.complete()}).catch(q=>{F||(q.result&&q.result.errors&&q.result.data&&T.next(q.result),T.error(q))}),()=>{F=!0,typeof p!="boolean"&&p.abort()}})})}const lt=e=>(t,{args:n,canRead:r,toReference:i})=>r(t)?t:i({__typename:e,id:n==null?void 0:n.id}),_n=(e,{canRead:t})=>{if(e!==void 0)return t(e)?e:null},kp={Query:{fields:{findImage:{read:lt("Image")},findPerformer:{read:lt("Performer")},findStudio:{read:lt("Studio")},findGroup:{read:lt("Group")},findGallery:{read:lt("Gallery")},findScene:{read:lt("Scene")},findTag:{read:lt("Tag")},findSavedFilter:{read:lt("SavedFilter")}}},Scene:{fields:{studio:{read:_n}}},Image:{fields:{studio:{read:_n},paths:{merge:!1}}},Group:{fields:{studio:{read:_n}}},Gallery:{fields:{studio:{read:_n}}},Studio:{fields:{parent_studio:{read:_n}}}},Ap={BaseFile:["VideoFile","ImageFile","GalleryFile"],VisualFile:["VideoFile","ImageFile"]},Lp=((Yl=document.querySelector("base"))==null?void 0:Yl.getAttribute("href"))??"/",ji=e=>{let t=new URL(window.location.origin+Lp);return e&&(t.pathname+=e),t},jp=()=>{const e=ji("graphql"),t=ji("graphql");t.protocol==="https:"?t.protocol="wss:":t.protocol="ws:";const n=Np({uri:e.toString()}),r=gp({url:t.toString(),retryAttempts:1/0,shouldRetry(){return!0}}),i=new lp(r),a=go(({networkError:l})=>{if(l&&l.statusCode===401){const f=new URL(ji("login"),window.location.toString());f.searchParams.append("returnURL",window.location.href),window.location.href=f.toString()}}),s=d.ApolloLink.split(({query:l})=>{const f=Rf(l);return f.kind==="OperationDefinition"&&f.operation==="subscription"},i,n),u=d.ApolloLink.from([a,s]),o=new d.InMemoryCache({typePolicies:kp,possibleTypes:Ap}),c=new d.ApolloClient({link:u,cache:o});return c.subscribe({query:jd}).subscribe({next:()=>{c.resetStore()}}),{cache:o,client:c,wsClient:r}},{client:qi}=jp();function vo(e,t){const n={};for(const r of t){const{selections:i}=Vf(r).selectionSet;for(const a of i){if(!Lf(a))continue;const s=a.name.value;n[s]=(u,{DELETE:o})=>o}}e.modify({fields:n}),e.gc()}function So(e,t,n){const r=e.extract();for(const i in r){if(n!=null&&n.includes(i))continue;const s=r[i].__typename;if(s&&t[s]){const u={};for(const o of t[s])u[o]=(c,{DELETE:l})=>l;e.modify({id:i,fields:u})}}}const qp=e=>qi.query({query:Os,variables:{filter:e.makeFindFilter(),scene_marker_filter:e.makeFilter()}}),Vp=e=>Ld({variables:{id:e},skip:e==="new"||e===""}),Rp=e=>qi.query({query:Ds,variables:{ids:e}}),yo=e=>qi.query({query:Ds,variables:{filter:e.makeFindFilter(),tag_filter:e.makeFilter()}});function Bp(e,t,n){e.modify({fields:{stats(r){return{...r,[t]:r[t]+n}}}})}const bo={Tag:["parents","children"]},Gp=[xd,Os,Fd,Td,wd,$d,Cs],Up=()=>Cd({update(e,t){var i;const n=(i=t.data)==null?void 0:i.tagCreate;if(!n)return;Bp(e,"tag_count",1);const r={__typename:"Tag",id:n.id};So(e,bo,e.identify(r)),vo(e,[Cs])}}),Hp=()=>Ed({update(e,t){var i;const n=(i=t.data)==null?void 0:i.tagUpdate;if(!n)return;const r={__typename:"Tag",id:n.id};So(e,bo,e.identify(r)),vo(e,Gp)}}),zp=e=>kd({variables:{path:e}}),Wp=200,On=["byte","kibibyte","mebibyte","gibibyte","tebibyte","pebibyte"],Qp=["B","KiB","MiB","GiB","TiB","PiB"],Yp=(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return{size:0,unit:On[0]};let t=0,n=e;for(;n>=1024&&t+1<On.length;)n/=1024,t++;return{size:n,unit:On[t]}},ce=class ce{constructor(t,n,r,i){this.singular=t,this.plural=n,this.shortString=r,this.secs=i}toString(){return this.shortString}};Z(ce,"SECOND",new ce("second","seconds","s",1)),Z(ce,"MINUTE",new ce("minute","minutes","m",60)),Z(ce,"HOUR",new ce("hour","hours","h",ce.MINUTE.secs*60)),Z(ce,"DAY",new ce("day","days","D",ce.HOUR.secs*24)),Z(ce,"WEEK",new ce("week","weeks","W",ce.DAY.secs*7)),Z(ce,"MONTH",new ce("month","months","M",ce.DAY.secs*30)),Z(ce,"YEAR",new ce("year","years","Y",ce.DAY.secs*365)),Z(ce,"DURATIONS",[ce.SECOND,ce.MINUTE,ce.HOUR,ce.DAY,ce.WEEK,ce.MONTH,ce.YEAR]);let vt=ce;class Io{constructor(t,n){this.count=t,this.duration=n}toString(){return this.count.toString()+this.duration.toString()}}const Kp=(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return[new Io(0,vt.DURATIONS[0])];const t=[];let n=e;for(let r=vt.DURATIONS.length-1;r>=0;r--){const i=Math.floor(n/vt.DURATIONS[r].secs);i!==0&&(n%=vt.DURATIONS[r].secs,t.push(new Io(i,vt.DURATIONS[r])))}return t},Jp=(e=0,t=2)=>Kp(e).slice(0,t).join(" "),Zp=e=>{const t=On.indexOf(e);return Qp[t]},Xp=e=>On.indexOf(e)>=3?1:0,ur=(e,t)=>{let n=!1;e<0&&(n=!0,e=-e);const r=e%1,i=Math.round(r*1e3);let a=Math.trunc(e);const s=a%60;a=(a-s)/60;const u=a%60;a=(a-u)/60;const o=a;let c=String(s).padStart(2,"0");return o===0?c=String(u)+":"+c:(c=String(u).padStart(2,"0")+":"+c,c=String(o)+":"+c),t&&i>0&&(c+="."+i.toString().padStart(3,"0")),n?"-"+c:c},em=(e,t)=>t===void 0?ur(e):`${ur(e)}-${ur(t)}`,tm=e=>{if(!e)return null;const t=e.split(":");if(t.length>3)return null;let n=t[t.length-1],r=0;if(n.includes(".")){const s=n.split(".");if(s.length!==2)return null;n=s[0];const u=parseInt(s[1],10);if(Number.isNaN(u))return null;r=u/1e3}let i=0,a=1;for(;t.length>0;){const s=t.pop();if(s===void 0)return null;const u=parseInt(s,10);if(Number.isNaN(u))return null;i+=a*u,a*=60}return i+r},nm=e=>e?e.replace(/^.*[\\/]/,""):"No File Name",rm=e=>{if(!e)return null;const t=e.split("-");if(t.length!==3)return null;const n=Number(t[0]),r=Math.max(0,Number(t[1])-1),i=Number(t[2]);return new Date(n,r,i,0,0,0,0)},cr=e=>{if(!e)return null;const t=e.split("-");let n=Number(t[0]);Number.isNaN(n)&&(n=new Date().getFullYear());let r=0;t.length>1&&(r=Math.max(0,Number(t[1])-1),(r>11||Number.isNaN(r))&&(r=0));let i=1;return t.length>2&&(i=Number(t[2]),(i>31||Number.isNaN(i))&&(i=1)),new Date(n,r,i,0,0,0,0)},im=e=>{if(!e)return null;const t=e.split(" ");let n=null;if(t.length>0&&(n=cr(t[0])),n||(n=new Date),t.length>1){const r=t[1].split(":");n&&r.length>0&&n.setHours(Number(r[0])),n&&r.length>1&&n.setMinutes(Number(r[1])),n&&r.length>2&&n.setSeconds(Number(r[2]))}return n};function _o(e){return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`}function am(e){return`${_o(e)} ${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`}const sm=(e,t)=>{if(!e)return 0;const n=cr(e),r=t?cr(t):new Date;if(!n||!r)return 0;let i=r.getFullYear()-n.getFullYear();return(n.getMonth()>r.getMonth()||n.getMonth()>=r.getMonth()&&n.getDate()>r.getDate())&&(i-=1),i},om=e=>`${(e/1e6).toFixed(2)} megabits per second`,um=(e,t)=>{const n=e>t?t:e;if(n>=6144)return"HUGE";if(n>=3840)return"8K";if(n>=3584)return"7K";if(n>=3e3)return"6K";if(n>=2560)return"5K";if(n>=1920)return"4K";if(n>=1440)return"1440p";if(n>=1080)return"1080p";if(n>=720)return"720p";if(n>=540)return"540p";if(n>=480)return"480p";if(n>=360)return"360p";if(n>=240)return"240p";if(n>=144)return"144p"},Oo=(e,t)=>!e||e.startsWith("http://")||e.startsWith("https://")?e:t?e.startsWith(t.host)?`${t.protocol}//${e}`:`${t.protocol}//${t.host}/${e}`:`https://${e}`,cm=(e,t)=>{if(t)return t.hostname;if(e){let n="";try{const r=Oo(e);r&&(e=r),n=new URL(e).hostname}catch{n=e}return n}else return""},Co=(e,t,n=!0)=>t?e.formatDate(t,{format:"long",timeZone:n?"utc":void 0}):"",lm=(e,t,n=!0)=>{if(!t)return"";const r=t.match(/^(\d{4})$/);if(r){const a=parseInt(r[1],10);return e.formatDate(Date.UTC(a,0),{year:"numeric",timeZone:n?"utc":void 0})}const i=t.match(/^(\d{4})-(\d{2})$/);if(i){const a=parseInt(i[1],10),s=parseInt(i[2],10)-1;return e.formatDate(Date.UTC(a,s),{year:"numeric",month:"long",timeZone:n?"utc":void 0})}return e.formatDate(t,{format:"long",timeZone:n?"utc":void 0})},dm=(e,t,n=!1)=>`${Co(e,t,n)} ${e.formatTime(t,{timeZone:n?"utc":void 0})}`,Vi=["","K","M","B"],et={fileSize:Yp,formatFileSizeUnit:Zp,fileSizeFractionalDigits:Xp,secondsToTimestamp:ur,formatTimestampRange:em,timestampToSeconds:tm,fileNameFromPath:nm,stringToDate:rm,stringToFuzzyDate:cr,stringToFuzzyDateTime:im,dateToString:_o,dateTimeToString:am,age:sm,bitRate:om,resolution:um,sanitiseURL:Oo,domainFromURL:cm,formatDate:Co,formatFuzzyDate:lm,formatDateTime:dm,secondsAsTimeString:Jp,abbreviateCounter:(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return{size:0,unit:Vi[0]};let t=0,n=0,r=e;for(;r>=1e3&&t+1<Vi.length;)r/=1e3,t++,n=1;return{size:r,unit:Vi[t],digits:n}},stripQuotes:e=>e.startsWith('"')&&e.endsWith('"')?e.slice(1,-1):e,addQuotes:e=>`"${e}"`},fm={[m.Equals]:"criterion_modifier.equals",[m.NotEquals]:"criterion_modifier.not_equals",[m.GreaterThan]:"criterion_modifier.greater_than",[m.LessThan]:"criterion_modifier.less_than",[m.IsNull]:"criterion_modifier.is_null",[m.NotNull]:"criterion_modifier.not_null",[m.Includes]:"criterion_modifier.includes",[m.IncludesAll]:"criterion_modifier.includes_all",[m.Excludes]:"criterion_modifier.excludes",[m.MatchesRegex]:"criterion_modifier.matches_regex",[m.NotMatchesRegex]:"criterion_modifier.not_matches_regex",[m.Between]:"criterion_modifier.between",[m.NotBetween]:"criterion_modifier.not_between"};class Do{constructor(t){Z(this,"criterionOption");this.criterionOption=t}isValid(){return!0}clone(){const t=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return t.cloneValues(),t}cloneValues(){}getId(){return`${this.criterionOption.type}`}}class me extends Do{constructor(n,r){super(n);Z(this,"_modifier");Z(this,"_value");this.modifier=n.defaultModifier,this.value=r}get modifier(){return this._modifier}set modifier(n){this._modifier=n}get value(){return this._value}set value(n){this._value=n}isValid(){return!0}modifierCriterionOption(){return this.criterionOption}clone(){const n=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return n.cloneValues(),n}cloneValues(){}static getModifierLabel(n,r){const i=fm[r];return i?n.formatMessage({id:i}):""}getLabel(n,r=!1){const i=me.getModifierLabel(n,this.modifier);let a="";this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(a=this.getLabelValue(n));const s=r?this.criterionOption.sfwMessageID??this.criterionOption.messageID:this.criterionOption.messageID;return n.formatMessage({id:"criterion_modifier.format_string"},{criterion:n.formatMessage({id:s}),modifierString:i,valueString:a})}toQueryParams(){const n={type:this.criterionOption.type,modifier:this.modifier};return this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(n.value=this.encodeValue()),n}encodeValue(){return this.value}decodeValue(n){n!=null&&(this.value=n)}fromDecodedParams(n){const r=n;this.modifier=r.modifier,this.decodeValue(r.value)}setFromSavedCriterion(n){const r=n;r.value!==void 0&&r.value!==null&&(this.value=r.value),this.modifier=r.modifier}applyToCriterionInput(n){n[this.criterionOption.type]=this.toCriterionInput()}applyToSavedCriterion(n){n[this.criterionOption.type]={value:this.value,modifier:this.modifier}}toCriterionInput(){return{value:this.value,modifier:this.modifier}}}class Eo{constructor(t){Z(this,"type");Z(this,"messageID");Z(this,"makeCriterionFn");Z(this,"sfwMessageID");Z(this,"hidden",!1);this.type=t.type,this.messageID=t.messageID,this.makeCriterionFn=t.makeCriterion,this.hidden=t.hidden??!1,this.sfwMessageID=t.sfwMessageID}makeCriterion(t){return this.makeCriterionFn(this,t)}}class de extends Eo{constructor(n){super(n);Z(this,"modifierOptions");Z(this,"defaultModifier");Z(this,"options");Z(this,"inputType");this.modifierOptions=n.modifierOptions??[],this.defaultModifier=n.defaultModifier??m.Equals,this.options=n.options,this.inputType=n.inputType}}class Ri extends de{constructor(t,n,r,i,a){const s=[m.Includes,m.Excludes,m.IsNull,m.NotNull];let u=m.Includes;r&&(s.unshift(m.IncludesAll),u=m.IncludesAll),super({messageID:t,type:n,modifierOptions:s,defaultModifier:u,inputType:i,makeCriterion:a||(()=>new Cn(this))})}}class Cn extends me{constructor(t,n=[]){super(t,n)}cloneValues(){this.value=this.value.map(t=>({...t}))}getLabelValue(t){return this.value.map(n=>n.label).join(", ")}toCriterionInput(){return{value:this.value.map(t=>t.id),modifier:this.modifier}}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull?!0:this.value.length>0}}class Dn extends me{constructor(t,n={items:[],excluded:[],depth:0}){super(t,n)}cloneValues(){this.value={...this.value,items:this.value.items.map(t=>({...t})),excluded:this.value.excluded.map(t=>({...t}))}}get modifier(){return this._modifier}set modifier(t){this._modifier=t,this.value&&t!==m.Includes&&t!==m.IncludesAll&&(this.value.excluded=[])}setFromSavedCriterion(t){const{modifier:n,value:r}=t;r!==void 0&&(this.value={items:r.items||[],excluded:r.excluded||[],depth:r.depth||0});const i=this.criterionOption.modifierOptions??[];n===m.Excludes&&i.find(a=>a===m.Excludes)===void 0?(this.modifier=m.Includes,this.value.excluded=[...this.value.excluded,...this.value.items],this.value.items=[]):this.modifier=n}getLabelValue(t){const n=(this.value.items??[]).map(r=>r.label).join(", ");return this.value.depth===0?n:`${n} (+${this.value.depth>0?this.value.depth:"all"})`}toCriterionInput(){let t=[];const n=this.modifier===m.Equals?0:this.value.depth;return this.value.excluded&&(t=this.value.excluded.map(r=>r.id)),{value:this.value.items.map(r=>r.id),excludes:t,modifier:this.modifier,depth:n}}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull?!0:this.value.items.length>0||this.value.excluded&&this.value.excluded.length>0}getLabel(t,n){let r="criterion_modifier.format_string",i=me.getModifierLabel(t,this.modifier),a="",s="";this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(a=this.value.items.map(o=>o.label).join(", "),this.value.excluded&&this.value.excluded.length>0&&(this.value.items.length===0?(i=me.getModifierLabel(t,m.Excludes),a=this.value.excluded.map(o=>o.label).join(", ")):(r="criterion_modifier.format_string_excludes",s=this.value.excluded.map(o=>o.label).join(", "))),this.value.depth!==0&&(r+="_depth"));const u=n?this.criterionOption.sfwMessageID??this.criterionOption.messageID:this.criterionOption.messageID;return t.formatMessage({id:r},{criterion:t.formatMessage({id:u}),modifierString:i,valueString:a,excludedString:s,depth:this.value.depth})}}class lr extends de{constructor(t){super({modifierOptions:[m.Equals,m.NotEquals,m.Includes,m.Excludes,m.IsNull,m.NotNull,m.MatchesRegex,m.NotMatchesRegex],defaultModifier:m.Equals,inputType:"text",makeCriterion:()=>new He(this),...t})}}function te(e,t,n){return new lr({messageID:t??e,type:e,...n})}class pm extends de{constructor(t,n){super({messageID:t,type:n,modifierOptions:[m.Equals,m.NotEquals,m.Includes,m.Excludes,m.MatchesRegex,m.NotMatchesRegex],defaultModifier:m.Equals,inputType:"text",makeCriterion:()=>new He(this)})}}function dr(e,t){return new pm(t??e,e)}class He extends me{constructor(t){super(t,"")}getLabelValue(t){return this.value}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull||this.value.length>0}}class Bi extends me{constructor(t,n=[]){super(t,n)}cloneValues(){this.value=this.value.slice()}getLabelValue(t){return this.value.join(", ")}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull||this.value.length>0}}class St extends de{constructor(t,n,r){super({messageID:t,type:n,modifierOptions:[],defaultModifier:m.Equals,options:["true","false"],makeCriterion:r||(()=>new yt(this))})}}function fr(e,t){return new St(e,e)}class yt extends He{toCriterionInput(){return this.value==="true"}isValid(){return this.value==="true"||this.value==="false"}}class wo extends de{constructor(t,n,r){super({messageID:t,type:n,options:["true","false"],makeCriterion:r||(()=>new Gi(this))})}}class Gi extends He{toCriterionInput(){return this.value}isValid(){return this.value==="true"||this.value==="false"}}class mm extends de{constructor(t,n){super({messageID:t,type:n,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.IsNull,m.NotNull,m.Between,m.NotBetween],defaultModifier:m.Equals,inputType:"number",makeCriterion:()=>new Ui(this)})}}function To(e,t){return new mm(t??e,e)}class gm extends de{constructor(t,n,r){super({messageID:t,type:n,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.Between,m.NotBetween,m.IsNull,m.NotNull],defaultModifier:m.Equals,inputType:"number",makeCriterion:r||(()=>new Ui(this))})}}class pr extends de{constructor(t,n,r,i){super({messageID:t,type:n,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.Between,m.NotBetween],defaultModifier:m.Equals,inputType:"number",makeCriterion:r||(()=>new Ui(this)),...i})}}function Y(e,t,n){return new pr(t??e,e,void 0,n)}function En(e,t){return e===m.Between||e===m.NotBetween?{value:t.value,value2:t.value2}:{value:t.value}}function hm(e){return typeof e.value=="object"?e.value:{value:e.value,value2:e.value2}}class Ui extends me{constructor(t){super(t,{value:void 0,value2:void 0})}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(t){typeof t!="object"?this._value={value:t,value2:void 0}:this._value=t}toCriterionInput(){var t,n;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??0,value2:(n=this.value)==null?void 0:n.value2}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return En(this.modifier,this.value)}getLabelValue(t){const{value:n,value2:r}=this.value;return this.modifier===m.Between||this.modifier===m.NotBetween?`${n}, ${r??0}`:`${n}`}isValid(){if(this.modifier===m.IsNull||this.modifier===m.NotNull)return!0;const{value:t,value2:n}=this.value;return!(t===void 0||n===void 0&&(this.modifier===m.Between||this.modifier===m.NotBetween))}}let vm=class extends pr{constructor(t,n){super(t,n,()=>new xo(this))}};function mr(e,t){return new vm(e,e)}class Sm extends gm{constructor(t,n){super(t,n,()=>new xo(this))}}function ym(e,t){return new Sm(e,e)}class xo extends me{constructor(t){super(t,{value:void 0,value2:void 0})}cloneValues(){this.value={...this.value}}toCriterionInput(){var t,n;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??0,value2:(n=this.value)==null?void 0:n.value2}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return En(this.modifier,this.value)}getLabelValue(t){const n=et.secondsToTimestamp(this.value.value??0),r=et.secondsToTimestamp(this.value.value2??0);return this.modifier===m.Between||this.modifier===m.NotBetween?`${n}, ${r}`:n}isValid(){if(this.modifier===m.IsNull||this.modifier===m.NotNull)return!0;const{value:t,value2:n}=this.value;return!(t===void 0||n===void 0&&(this.modifier===m.Between||this.modifier===m.NotBetween))}}class bm extends de{constructor(t,n){super({messageID:t,type:n,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.IsNull,m.NotNull,m.Between,m.NotBetween],defaultModifier:m.Equals,inputType:"text",makeCriterion:()=>new Im(this)})}}function tt(e){return new bm(e,e)}class Im extends me{constructor(t){super(t,{value:"",value2:void 0})}cloneValues(){this.value={...this.value}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return En(this.modifier,this.value)}toCriterionInput(){var t,n;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??"",value2:(n=this.value)==null?void 0:n.value2}}getLabelValue(){const{value:t}=this.value;return this.modifier===m.Between||this.modifier===m.NotBetween?`${t}, ${this.value.value2}`:`${t}`}isValid(){if(this.modifier===m.IsNull||this.modifier===m.NotNull)return!0;const{value:t,value2:n}=this.value;return!(!t||!n&&(this.modifier===m.Between||this.modifier===m.NotBetween))}}class _m extends de{constructor(t,n){super({messageID:t,type:n,modifierOptions:[m.GreaterThan,m.LessThan,m.Between,m.NotBetween],defaultModifier:m.GreaterThan,inputType:"text",makeCriterion:()=>new Om(this)})}}function Ie(e){return new _m(e,e)}class Om extends me{constructor(t){super(t,{value:"",value2:void 0})}cloneValues(){this.value={...this.value}}toCriterionInput(){return{modifier:this.modifier,value:this.transformValueToInput(this.value.value??""),value2:this.value.value2?this.transformValueToInput(this.value.value2):null}}setFromSavedCriterion(t){super.setFromSavedCriterion(t),this.value=hm(t)}encodeValue(){return En(this.modifier,this.value)}getLabelValue(){const{value:t}=this.value;return this.modifier===m.Between||this.modifier===m.NotBetween?`${t}, ${this.value.value2}`:`${t}`}transformValueToInput(t){return t=t.trim(),/^\d{4}-\d{2}-\d{2}(( |T)\d{2}:\d{2})?$/.test(t)?t.replace(" ","T"):""}isValid(){if(this.modifier===m.IsNull||this.modifier===m.NotNull)return!0;const{value:t,value2:n}=this.value;return!(!t||!n&&(this.modifier===m.Between||this.modifier===m.NotBetween))}}class Cm extends lr{constructor(t){super({messageID:"unsupported_criterion",type:t,makeCriterion:()=>new Dm(this)})}}class Dm extends He{getLabel(t){const n=me.getModifierLabel(t,this.modifier);let r="";return this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(r=this.getLabelValue(t)),t.formatMessage({id:"criterion_modifier.format_string"},{criterion:t.formatMessage({id:"criterion.unsupported"},{type:this.criterionOption.type}),modifierString:n,valueString:r})}applyToCriterionInput(){}applyToSavedCriterion(){}setFromSavedCriterion(){}}const $o=new St("favourite","filter_favorites",()=>new Em);class Em extends yt{constructor(){super($o)}}const Fo=new St("favourite","favorite",()=>new wm);class wm extends yt{constructor(){super(Fo)}}const Po=new St("favourite","favorite",()=>new Tm);class Tm extends yt{constructor(){super(Po)}}const gr=new St("performer_favorite","performer_favorite",()=>new xm);class xm extends yt{constructor(){super(gr)}}class $m extends He{toCriterionInput(){return this.value}}class bt extends de{constructor(t,n,r){super({messageID:t,type:n,options:r,modifierOptions:[],defaultModifier:m.Equals,makeCriterion:()=>new $m(this)})}}const Fm=new bt("isMissing","is_missing",["title","code","details","director","url","date","rating","cover","galleries","studio","group","performers","tags","stash_id"]),Pm=new bt("isMissing","is_missing",["title","details","photographer","url","date","code","rating","galleries","studio","performers","tags"]),Mm=new bt("isMissing","is_missing",["url","ethnicity","country","hair_color","eye_color","height","weight","measurements","fake_tits","penis_length","circumcised","career_start","career_end","tattoos","piercings","aliases","gender","birthdate","death_date","disambiguation","tags","image","details","rating","stash_id"]),Nm=new bt("isMissing","is_missing",["title","code","details","photographer","url","date","rating","cover","studio","performers","tags","scenes"]),km=new bt("isMissing","is_missing",["image","aliases","description","stash_id"]),Am=new bt("isMissing","is_missing",["image","stash_id","details","url","aliases","tags","rating"]),Lm=new bt("isMissing","is_missing",["aliases","description","director","date","url","rating","studio","performers","tags","front_image","back_image","scenes"]),hr=new St("organized","organized",()=>new jm);class jm extends yt{constructor(){super(hr)}}const Mo=new wo("hasChapters","has_chapters",()=>new qm);class qm extends Gi{constructor(){super(Mo)}}const Vm=[m.IncludesAll,m.Includes,m.Equals,m.IsNull,m.NotNull],Rm=m.IncludesAll,Bm="performers",Rt=new de({messageID:"performers",type:"performers",modifierOptions:Vm,defaultModifier:Rm,inputType:Bm,makeCriterion:()=>new Bt});class Bt extends me{constructor(){super(Rt,{items:[],excluded:[]})}cloneValues(){this.value={...this.value,items:this.value.items.map(t=>({...t})),excluded:this.value.excluded.map(t=>({...t}))}}get modifier(){return this._modifier}set modifier(t){this._modifier=t,t!==m.Includes&&t!==m.IncludesAll&&(this.value.excluded=[])}setFromSavedCriterion(t){const{modifier:n,value:r}=t;Array.isArray(r)?this.value={items:r,excluded:[]}:r!==void 0&&(this.value={items:r.items||[],excluded:r.excluded||[]}),n===m.Excludes?(this.modifier=m.Includes,this.value.excluded=[...this.value.excluded,...this.value.items],this.value.items=[]):this.modifier=n}getLabelValue(t){return this.value.items.map(n=>n.label).join(", ")}toCriterionInput(){let t=[];return this.value.excluded&&(t=this.value.excluded.map(n=>n.id)),{value:this.value.items.map(n=>n.id),excludes:t,modifier:this.modifier}}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull?!0:this.value.items.length>0||this.value.excluded&&this.value.excluded.length>0}getLabel(t){let n="criterion_modifier.format_string",r=me.getModifierLabel(t,this.modifier),i="",a="";return this.modifier!==m.IsNull&&this.modifier!==m.NotNull&&(i=this.value.items.map(s=>s.label).join(", "),this.value.excluded&&this.value.excluded.length>0&&(this.value.items.length===0?(r=me.getModifierLabel(t,m.Excludes),i=this.value.excluded.map(s=>s.label).join(", ")):(n="criterion_modifier.format_string_excludes",a=this.value.excluded.map(s=>s.label).join(", ")))),t.formatMessage({id:n},{criterion:t.formatMessage({id:this.criterionOption.messageID}),modifierString:r,valueString:i,excludedString:a})}}const No=new Map([["144p",Fe.VeryLow],["240p",Fe.Low],["360p",Fe.R360P],["480p",Fe.Standard],["540p",Fe.WebHd],["720p",Fe.StandardHd],["1080p",Fe.FullHd],["1440p",Fe.QuadHd],["4k",Fe.FourK],["5k",Fe.FiveK],["6k",Fe.SixK],["7k",Fe.SevenK],["8k",Fe.EightK],["Huge",Fe.Huge]]),Gm=(e,t)=>e?No.get(e):void 0,Um=Array.from(No.keys());class ko extends de{constructor(t,n){super({messageID:t,type:t,modifierOptions:[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan],options:Um,makeCriterion:n})}}class Ao extends He{toCriterionInput(){const t=Gm(this.value);if(t!==void 0)return{value:t,modifier:this.modifier}}}const Hi=new ko("resolution",()=>new Hm);class Hm extends Ao{constructor(){super(Hi)}}const Lo=new ko("average_resolution",()=>new zm);class zm extends Ao{constructor(){super(Lo)}}const jo="scenes",qo=new Ri("scenes","scenes",!0,jo,()=>new Wm);class Wm extends Cn{constructor(){super(qo)}}const Qm=[m.Includes,m.Excludes],Ym=m.Includes,Vo=new de({messageID:"scenes",type:"scenes",modifierOptions:Qm,defaultModifier:Ym,inputType:jo,makeCriterion:()=>new Ro});class Ro extends Cn{constructor(){super(Vo)}}const Km=[m.Includes,m.IsNull,m.NotNull],Jm=m.Includes,Bo="studios",Gt=new de({messageID:"studios",type:"studios",modifierOptions:Km,defaultModifier:Jm,inputType:Bo,makeCriterion:()=>new Ut});class Ut extends Dn{constructor(){super(Gt)}}const Go=new Ri("parent_studios","parents",!1,Bo,()=>new Uo);class Uo extends Cn{constructor(){super(Go)}}const Ho=[m.IncludesAll,m.Includes,m.Equals,m.IsNull,m.NotNull],zi=[m.IncludesAll,m.Includes,m.IsNull,m.NotNull],Zm=m.IncludesAll,Xm="tags";class wn extends de{constructor(t,n,r){super({messageID:t,type:n,modifierOptions:r,defaultModifier:Zm,inputType:Xm,makeCriterion:()=>new vr(this)})}}const dt=new wn("tags","tags",Ho),eg=new wn("scene_tags","scene_tags",Ho),Wi=new wn("performer_tags","performer_tags",zi),zo=new wn("parent_tags","parents",zi),Wo=new wn("sub_tags","children",zi);class vr extends Dn{}const Qi=["title","path","rating","file_mod_time","tag_count","performer_count","random"];class _e{constructor(t,n,r,i){Z(this,"defaultSortBy","");Z(this,"sortByOptions",[]);Z(this,"displayModeOptions",[]);Z(this,"criterionOptions",[]);this.defaultSortBy=t,this.sortByOptions=[...n,_e.createSortBy("created_at"),_e.createSortBy("updated_at")],this.displayModeOptions=r,this.criterionOptions=i}static createSortBy(t){return{messageID:t,value:t}}}var ge=(e=>(e[e.Grid=0]="Grid",e[e.List=1]="List",e[e.Wall=2]="Wall",e[e.Tagger=3]="Tagger",e))(ge||{});const tg={type:"stars",starPrecision:"full"};function ng(e,t){let n=t;n||(n=1);const r=1/n;return Math.round(e*r)/r}function rg(e){switch(e){case"full":return 1;case"half":return .5;case"quarter":return .25;case"tenth":return .1;default:return 1}}function Yi(e,t){if(!e)return null;const{type:n,starPrecision:r}=t,i=n==="decimal"?.1:rg(r??"full"),s=100/(n==="decimal"?10:5);return ng(e/s,i)}function ig(e,t){const r=100/((t??"stars")==="decimal"?10:5);return Math.round(e*r)}const ag=[m.Equals,m.NotEquals,m.GreaterThan,m.LessThan,m.Between,m.NotBetween,m.IsNull,m.NotNull];function sg(e){return(e==null?void 0:e.ui.ratingSystemOptions)??tg}const It=new de({messageID:"rating",type:"rating100",modifierOptions:ag,defaultModifier:m.Equals,makeCriterion:(e,t)=>new og(sg(t)),inputType:"number"});class og extends me{constructor(n){super(It,{value:0,value2:void 0});Z(this,"ratingSystem");this.ratingSystem=n}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(n){typeof n!="object"?this._value={value:ig(n,this.ratingSystem.type),value2:void 0}:this._value=n}toCriterionInput(){return{modifier:this.modifier,value:this.value.value??0,value2:this.value.value2}}setFromSavedCriterion(n){super.setFromSavedCriterion(n)}encodeValue(){return En(this.modifier,this.value)}getLabelValue(){const{value:n,value2:r}=this.value;return this.modifier===m.Between||this.modifier===m.NotBetween?`${Yi(n,this.ratingSystem)??0}, ${Yi(r,this.ratingSystem)??0}`:`${Yi(n,this.ratingSystem)??0}`}}const Sr=new lr({messageID:"path",type:"path",defaultModifier:m.Includes,makeCriterion:()=>new ug});class ug extends He{constructor(){super(Sr)}}function cg(){this.__data__=[],this.size=0}function Qo(e,t){return e===t||e!==e&&t!==t}function yr(e,t){for(var n=e.length;n--;)if(Qo(e[n][0],t))return n;return-1}var lg=Array.prototype,dg=lg.splice;function fg(e){var t=this.__data__,n=yr(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():dg.call(t,n,1),--this.size,!0}function pg(e){var t=this.__data__,n=yr(t,e);return n<0?void 0:t[n][1]}function mg(e){return yr(this.__data__,e)>-1}function gg(e,t){var n=this.__data__,r=yr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function nt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}nt.prototype.clear=cg,nt.prototype.delete=fg,nt.prototype.get=pg,nt.prototype.has=mg,nt.prototype.set=gg;function hg(){this.__data__=new nt,this.size=0}function vg(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Sg(e){return this.__data__.get(e)}function yg(e){return this.__data__.has(e)}var Yo=typeof global=="object"&&global&&global.Object===Object&&global,bg=typeof self=="object"&&self&&self.Object===Object&&self,ze=Yo||bg||Function("return this")(),Ht=ze.Symbol,Ko=Object.prototype,Ig=Ko.hasOwnProperty,_g=Ko.toString,Tn=Ht?Ht.toStringTag:void 0;function Og(e){var t=Ig.call(e,Tn),n=e[Tn];try{e[Tn]=void 0;var r=!0}catch{}var i=_g.call(e);return r&&(t?e[Tn]=n:delete e[Tn]),i}var Cg=Object.prototype,Dg=Cg.toString;function Eg(e){return Dg.call(e)}var wg="[object Null]",Tg="[object Undefined]",Jo=Ht?Ht.toStringTag:void 0;function zt(e){return e==null?e===void 0?Tg:wg:Jo&&Jo in Object(e)?Og(e):Eg(e)}function _t(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var xg="[object AsyncFunction]",$g="[object Function]",Fg="[object GeneratorFunction]",Pg="[object Proxy]";function Zo(e){if(!_t(e))return!1;var t=zt(e);return t==$g||t==Fg||t==xg||t==Pg}var Ki=ze["__core-js_shared__"],Xo=function(){var e=/[^.]+$/.exec(Ki&&Ki.keys&&Ki.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Mg(e){return!!Xo&&Xo in e}var Ng=Function.prototype,kg=Ng.toString;function Ot(e){if(e!=null){try{return kg.call(e)}catch{}try{return e+""}catch{}}return""}var Ag=/[\\^$.*+?()[\]{}|]/g,Lg=/^\[object .+?Constructor\]$/,jg=Function.prototype,qg=Object.prototype,Vg=jg.toString,Rg=qg.hasOwnProperty,Bg=RegExp("^"+Vg.call(Rg).replace(Ag,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Gg(e){if(!_t(e)||Mg(e))return!1;var t=Zo(e)?Bg:Lg;return t.test(Ot(e))}function Ug(e,t){return e==null?void 0:e[t]}function Ct(e,t){var n=Ug(e,t);return Gg(n)?n:void 0}var xn=Ct(ze,"Map"),$n=Ct(Object,"create");function Hg(){this.__data__=$n?$n(null):{},this.size=0}function zg(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Wg="__lodash_hash_undefined__",Qg=Object.prototype,Yg=Qg.hasOwnProperty;function Kg(e){var t=this.__data__;if($n){var n=t[e];return n===Wg?void 0:n}return Yg.call(t,e)?t[e]:void 0}var Jg=Object.prototype,Zg=Jg.hasOwnProperty;function Xg(e){var t=this.__data__;return $n?t[e]!==void 0:Zg.call(t,e)}var eh="__lodash_hash_undefined__";function th(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=$n&&t===void 0?eh:t,this}function Dt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Dt.prototype.clear=Hg,Dt.prototype.delete=zg,Dt.prototype.get=Kg,Dt.prototype.has=Xg,Dt.prototype.set=th;function nh(){this.size=0,this.__data__={hash:new Dt,map:new(xn||nt),string:new Dt}}function rh(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function br(e,t){var n=e.__data__;return rh(t)?n[typeof t=="string"?"string":"hash"]:n.map}function ih(e){var t=br(this,e).delete(e);return this.size-=t?1:0,t}function ah(e){return br(this,e).get(e)}function sh(e){return br(this,e).has(e)}function oh(e,t){var n=br(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Wt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Wt.prototype.clear=nh,Wt.prototype.delete=ih,Wt.prototype.get=ah,Wt.prototype.has=sh,Wt.prototype.set=oh;var uh=200;function ch(e,t){var n=this.__data__;if(n instanceof nt){var r=n.__data__;if(!xn||r.length<uh-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Wt(r)}return n.set(e,t),this.size=n.size,this}function Qt(e){var t=this.__data__=new nt(e);this.size=t.size}Qt.prototype.clear=hg,Qt.prototype.delete=vg,Qt.prototype.get=Sg,Qt.prototype.has=yg,Qt.prototype.set=ch;function lh(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var eu=function(){try{var e=Ct(Object,"defineProperty");return e({},"",{}),e}catch{}}();function dh(e,t,n){t=="__proto__"&&eu?eu(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var fh=Object.prototype,ph=fh.hasOwnProperty;function mh(e,t,n){var r=e[t];(!(ph.call(e,t)&&Qo(r,n))||n===void 0&&!(t in e))&&dh(e,t,n)}function gh(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Yt(e){return e!=null&&typeof e=="object"}var hh="[object Arguments]";function tu(e){return Yt(e)&&zt(e)==hh}var nu=Object.prototype,vh=nu.hasOwnProperty,Sh=nu.propertyIsEnumerable,yh=tu(function(){return arguments}())?tu:function(e){return Yt(e)&&vh.call(e,"callee")&&!Sh.call(e,"callee")},Ji=Array.isArray;function bh(){return!1}var ru=typeof exports=="object"&&exports&&!exports.nodeType&&exports,iu=ru&&typeof module=="object"&&module&&!module.nodeType&&module,Ih=iu&&iu.exports===ru,au=Ih?ze.Buffer:void 0,_h=au?au.isBuffer:void 0,su=_h||bh,Oh=9007199254740991,Ch=/^(?:0|[1-9]\d*)$/;function Dh(e,t){var n=typeof e;return t=t??Oh,!!t&&(n=="number"||n!="symbol"&&Ch.test(e))&&e>-1&&e%1==0&&e<t}var Eh=9007199254740991;function ou(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Eh}var wh="[object Arguments]",Th="[object Array]",xh="[object Boolean]",$h="[object Date]",Fh="[object Error]",Ph="[object Function]",Mh="[object Map]",Nh="[object Number]",kh="[object Object]",Ah="[object RegExp]",Lh="[object Set]",jh="[object String]",qh="[object WeakMap]",Vh="[object ArrayBuffer]",Rh="[object DataView]",Bh="[object Float32Array]",Gh="[object Float64Array]",Uh="[object Int8Array]",Hh="[object Int16Array]",zh="[object Int32Array]",Wh="[object Uint8Array]",Qh="[object Uint8ClampedArray]",Yh="[object Uint16Array]",Kh="[object Uint32Array]",pe={};pe[Bh]=pe[Gh]=pe[Uh]=pe[Hh]=pe[zh]=pe[Wh]=pe[Qh]=pe[Yh]=pe[Kh]=!0,pe[wh]=pe[Th]=pe[Vh]=pe[xh]=pe[Rh]=pe[$h]=pe[Fh]=pe[Ph]=pe[Mh]=pe[Nh]=pe[kh]=pe[Ah]=pe[Lh]=pe[jh]=pe[qh]=!1;function Jh(e){return Yt(e)&&ou(e.length)&&!!pe[zt(e)]}function Zi(e){return function(t){return e(t)}}var uu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Fn=uu&&typeof module=="object"&&module&&!module.nodeType&&module,Zh=Fn&&Fn.exports===uu,Xi=Zh&&Yo.process,Kt=function(){try{var e=Fn&&Fn.require&&Fn.require("util").types;return e||Xi&&Xi.binding&&Xi.binding("util")}catch{}}(),cu=Kt&&Kt.isTypedArray,Xh=cu?Zi(cu):Jh,ev=Object.prototype,tv=ev.hasOwnProperty;function nv(e,t){var n=Ji(e),r=!n&&yh(e),i=!n&&!r&&su(e),a=!n&&!r&&!i&&Xh(e),s=n||r||i||a,u=s?gh(e.length,String):[],o=u.length;for(var c in e)tv.call(e,c)&&!(s&&(c=="length"||i&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Dh(c,o)))&&u.push(c);return u}var rv=Object.prototype;function lu(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||rv;return e===n}function du(e,t){return function(n){return e(t(n))}}var iv=du(Object.keys,Object),av=Object.prototype,sv=av.hasOwnProperty;function ov(e){if(!lu(e))return iv(e);var t=[];for(var n in Object(e))sv.call(e,n)&&n!="constructor"&&t.push(n);return t}function uv(e){return e!=null&&ou(e.length)&&!Zo(e)}function cv(e){return uv(e)?nv(e):ov(e)}var fu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,pu=fu&&typeof module=="object"&&module&&!module.nodeType&&module,lv=pu&&pu.exports===fu,mu=lv?ze.Buffer:void 0;mu&&mu.allocUnsafe;function dv(e,t){return e.slice()}function fv(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var s=e[n];t(s,n,e)&&(a[i++]=s)}return a}function pv(){return[]}var mv=Object.prototype,gv=mv.propertyIsEnumerable,gu=Object.getOwnPropertySymbols,hv=gu?function(e){return e==null?[]:(e=Object(e),fv(gu(e),function(t){return gv.call(e,t)}))}:pv;function vv(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var Sv=du(Object.getPrototypeOf,Object);function yv(e,t,n){var r=t(e);return Ji(e)?r:vv(r,n(e))}function bv(e){return yv(e,cv,hv)}var ea=Ct(ze,"DataView"),ta=Ct(ze,"Promise"),na=Ct(ze,"Set"),ra=Ct(ze,"WeakMap"),hu="[object Map]",Iv="[object Object]",vu="[object Promise]",Su="[object Set]",yu="[object WeakMap]",bu="[object DataView]",_v=Ot(ea),Ov=Ot(xn),Cv=Ot(ta),Dv=Ot(na),Ev=Ot(ra),rt=zt;(ea&&rt(new ea(new ArrayBuffer(1)))!=bu||xn&&rt(new xn)!=hu||ta&&rt(ta.resolve())!=vu||na&&rt(new na)!=Su||ra&&rt(new ra)!=yu)&&(rt=function(e){var t=zt(e),n=t==Iv?e.constructor:void 0,r=n?Ot(n):"";if(r)switch(r){case _v:return bu;case Ov:return hu;case Cv:return vu;case Dv:return Su;case Ev:return yu}return t});var wv=Object.prototype,Tv=wv.hasOwnProperty;function xv(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&Tv.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var Iu=ze.Uint8Array;function ia(e){var t=new e.constructor(e.byteLength);return new Iu(t).set(new Iu(e)),t}function $v(e,t){var n=ia(e.buffer);return new e.constructor(n,e.byteOffset,e.byteLength)}var Fv=/\w*$/;function Pv(e){var t=new e.constructor(e.source,Fv.exec(e));return t.lastIndex=e.lastIndex,t}var _u=Ht?Ht.prototype:void 0,Ou=_u?_u.valueOf:void 0;function Mv(e){return Ou?Object(Ou.call(e)):{}}function Nv(e,t){var n=ia(e.buffer);return new e.constructor(n,e.byteOffset,e.length)}var kv="[object Boolean]",Av="[object Date]",Lv="[object Map]",jv="[object Number]",qv="[object RegExp]",Vv="[object Set]",Rv="[object String]",Bv="[object Symbol]",Gv="[object ArrayBuffer]",Uv="[object DataView]",Hv="[object Float32Array]",zv="[object Float64Array]",Wv="[object Int8Array]",Qv="[object Int16Array]",Yv="[object Int32Array]",Kv="[object Uint8Array]",Jv="[object Uint8ClampedArray]",Zv="[object Uint16Array]",Xv="[object Uint32Array]";function eS(e,t,n){var r=e.constructor;switch(t){case Gv:return ia(e);case kv:case Av:return new r(+e);case Uv:return $v(e);case Hv:case zv:case Wv:case Qv:case Yv:case Kv:case Jv:case Zv:case Xv:return Nv(e);case Lv:return new r;case jv:case Rv:return new r(e);case qv:return Pv(e);case Vv:return new r;case Bv:return Mv(e)}}var Cu=Object.create,tS=function(){function e(){}return function(t){if(!_t(t))return{};if(Cu)return Cu(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function nS(e){return typeof e.constructor=="function"&&!lu(e)?tS(Sv(e)):{}}var rS="[object Map]";function iS(e){return Yt(e)&&rt(e)==rS}var Du=Kt&&Kt.isMap,aS=Du?Zi(Du):iS,sS="[object Set]";function oS(e){return Yt(e)&&rt(e)==sS}var Eu=Kt&&Kt.isSet,uS=Eu?Zi(Eu):oS,wu="[object Arguments]",cS="[object Array]",lS="[object Boolean]",dS="[object Date]",fS="[object Error]",Tu="[object Function]",pS="[object GeneratorFunction]",mS="[object Map]",gS="[object Number]",xu="[object Object]",hS="[object RegExp]",vS="[object Set]",SS="[object String]",yS="[object Symbol]",bS="[object WeakMap]",IS="[object ArrayBuffer]",_S="[object DataView]",OS="[object Float32Array]",CS="[object Float64Array]",DS="[object Int8Array]",ES="[object Int16Array]",wS="[object Int32Array]",TS="[object Uint8Array]",xS="[object Uint8ClampedArray]",$S="[object Uint16Array]",FS="[object Uint32Array]",fe={};fe[wu]=fe[cS]=fe[IS]=fe[_S]=fe[lS]=fe[dS]=fe[OS]=fe[CS]=fe[DS]=fe[ES]=fe[wS]=fe[mS]=fe[gS]=fe[xu]=fe[hS]=fe[vS]=fe[SS]=fe[yS]=fe[TS]=fe[xS]=fe[$S]=fe[FS]=!0,fe[fS]=fe[Tu]=fe[bS]=!1;function Ir(e,t,n,r,i,a){var s;if(s!==void 0)return s;if(!_t(e))return e;var u=Ji(e);if(u)s=xv(e);else{var o=rt(e),c=o==Tu||o==pS;if(su(e))return dv(e);if(o==xu||o==wu||c&&!i)s=c?{}:nS(e);else{if(!fe[o])return i?e:{};s=eS(e,o)}}a||(a=new Qt);var l=a.get(e);if(l)return l;a.set(e,s),uS(e)?e.forEach(function(h){s.add(Ir(h,t,n,h,e,a))}):aS(e)&&e.forEach(function(h,E){s.set(E,Ir(h,t,n,E,e,a))});var f=bv,I=u?void 0:f(e);return lh(I||e,function(h,E){I&&(E=h,h=e[E]),mh(s,E,Ir(h,t,n,E,e,a))}),s}var PS=1,MS=4;function _r(e){return Ir(e,PS|MS)}function $u(e){return e?e.map(t=>t).join(", "):""}const ft=new Eo({type:"custom_fields",messageID:"custom_fields.title",makeCriterion:()=>new Fu});class Fu extends Do{constructor(){super(ft);Z(this,"value",[])}isValid(){return this.value.length>0}applyToCriterionInput(n){n.custom_fields=_r(this.value)}applyToSavedCriterion(n){n.custom_fields=_r(this.value)}getLabel(n){var o;if(this.value.length===0)return"";const r=this.value[0];let i="",a="";r.modifier!==m.IsNull&&r.modifier!==m.NotNull&&(((o=r.value)==null?void 0:o.length)??0)>0&&(a=$u(r.value));const s=me.getModifierLabel(n,r.modifier),u={criterion:r.field,modifierString:s,valueString:a,others:""};return this.value.length===1?i="custom_fields.criteria_format_string":(i="custom_fields.criteria_format_string_others",u.others=(this.value.length-1).toString()),n.formatMessage({id:i},u)}getValueLabel(n,r){var u;let i="";r.modifier!==m.IsNull&&r.modifier!==m.NotNull&&(((u=r.value)==null?void 0:u.length)??0)>0&&(i=$u(r.value));const a=me.getModifierLabel(n,r.modifier),s={criterion:r.field,modifierString:a,valueString:i};return n.formatMessage({id:"custom_fields.criteria_format_string"},s)}toQueryParams(){return{type:this.criterionOption.type,value:this.value}}fromDecodedParams(n){const r=n;this.value=_r(r.value)}setFromSavedCriterion(n){this.value=_r(n)}}const Pu=[m.Includes],Mu=m.Includes,Nu="folders",aa=new de({messageID:"folder",type:"folder",modifierOptions:Pu,defaultModifier:Mu,inputType:Nu,makeCriterion:()=>new NS}),ku=new de({messageID:"parent_folder",type:"parent_folder",modifierOptions:Pu,defaultModifier:Mu,inputType:Nu,makeCriterion:()=>new kS});class NS extends Dn{constructor(){super(aa)}applyToCriterionInput(t){t.files_filter={parent_folder:this.toCriterionInput()}}}class kS extends Dn{constructor(){super(ku)}applyToCriterionInput(t){t.parent_folder=this.toCriterionInput()}}const AS="path",LS=["date",...Qi].map(_e.createSortBy).concat([{messageID:"performer_age",value:"performer_age"},{messageID:"image_count",value:"images_count"},{messageID:"zip_file_count",value:"file_count"}]),jS=[ge.Grid,ge.List,ge.Wall],qS=Y("performer_age"),VS=[te("title"),te("code","scene_code"),te("details"),te("photographer"),Sr,ku,te("checksum","media_info.md5"),It,hr,Lo,Nm,dt,Mo,Y("tag_count"),Wi,Rt,Y("performer_count"),qS,gr,Y("image_count"),qo,Gt,te("url"),Y("file_count","zip_file_count"),tt("date"),Ie("created_at"),Ie("updated_at"),ft],RS=new _e(AS,LS,jS,VS),Au=new Map([["Landscape",Yn.Landscape],["Portrait",Yn.Portrait],["Square",Yn.Square]]),BS=(e,t)=>e?Au.get(e):void 0,GS=Array.from(Au.keys());class US extends Bi{toCriterionInput(){return{value:this.value.map(t=>BS(t)).filter(t=>t)}}}class HS extends de{constructor(t){super({messageID:t,type:t,options:GS,makeCriterion:()=>new US(this)})}}const Lu=new HS("orientation"),zS="galleries",sa=new Ri("galleries","galleries",!0,zS,()=>new ju);class ju extends Cn{constructor(){super(sa)}}const WS={phash:"media_info.phash",stash_id:"stash_id",title:"title",url:"url"},qu=["phash","stash_id","title","url"],oa=new de({messageID:"media_info.phash",type:"phash_distance",inputType:"text",modifierOptions:[m.Equals,m.NotEquals,m.IsNull,m.NotNull],makeCriterion:()=>new ua});class ua extends me{constructor(){super(oa,{value:"",distance:0})}cloneValues(){this.value={...this.value}}getLabelValue(){const{value:t,distance:n}=this.value;return(this.modifier===m.Equals||this.modifier===m.NotEquals)&&n?`${t} (${n})`:`${t}`}toCriterionInput(){return{value:this.value.value,modifier:this.modifier,distance:this.value.distance}}}const Vu=new de({messageID:"duplicated",type:"duplicated",modifierOptions:[],defaultModifier:m.Equals,makeCriterion:()=>new QS});class QS extends me{constructor(){super(Vu,{})}cloneValues(){this.value={...this.value}}getLabel(t){const n=[],r=t.formatMessage({id:"true"}),i=t.formatMessage({id:"false"});for(const a of qu){const s=this.value[a];if(s!==void 0){const u=t.formatMessage({id:WS[a]});n.push(`${u}: ${s?r:i}`)}}return n.length===0&&this.value.duplicated!==void 0?`${t.formatMessage({id:"duplicated_phash"})}: ${this.value.duplicated?r:i}`:n.length===0?t.formatMessage({id:"duplicated"}):n.join(", ")}getLabelValue(t){return t.formatMessage({id:"duplicated"})}toCriterionInput(){return{duplicated:this.value.duplicated,distance:this.value.distance,phash:this.value.phash,url:this.value.url,stash_id:this.value.stash_id,title:this.value.title}}setFromSavedCriterion(t){const n=t;n.value!==void 0?typeof n.value=="object"?this.value=n.value:typeof n.value=="string"&&(this.value={phash:n.value==="true"}):typeof n=="object"&&(this.value=n),n.modifier&&(this.modifier=n.modifier)}isValid(){return qu.some(n=>this.value[n]!==void 0)||this.value.duplicated!==void 0}}const YS="path",KS=["filesize","file_count","date","resolution","performer_age",...Qi].map(_e.createSortBy).concat([{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"}]),JS=[ge.Grid,ge.Wall],ZS=Y("performer_age"),XS=[te("title"),te("code","scene_code"),te("details"),te("photographer"),dr("checksum","media_info.md5"),oa,Sr,aa,sa,hr,Y("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Hi,Lu,Pm,dt,It,Y("tag_count"),Wi,Rt,Y("performer_count"),ZS,gr,Gt,te("url"),tt("date"),Y("file_count"),Ie("created_at"),Ie("updated_at"),ft],ey=new _e(YS,KS,JS,XS),Ru="groups",Bu=[m.Includes,m.Excludes,m.IsNull,m.NotNull],Gu=m.Includes;class ca extends de{constructor(t,n){super({messageID:t,type:n,modifierOptions:Bu,defaultModifier:Gu,inputType:Ru,makeCriterion:()=>new Pn(this)})}}const Or=new ca("groups","groups");class Pn extends Dn{}const Uu=new ca("containing_groups","containing_groups"),Hu=new ca("sub_groups","sub_groups"),ty=new de({messageID:"groups",type:"movies",modifierOptions:Bu,defaultModifier:Gu,inputType:Ru,hidden:!0,makeCriterion:()=>new Pn(Or)}),ny="name",ry=["name","random","date","duration","rating","tag_count","sub_group_description","sub_group_order"].map(_e.createSortBy).concat([{messageID:"scene_count",value:"scenes_count"},{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"}]),iy=[ge.Grid],ay=[Gt,Lm,te("url"),te("name"),te("director"),te("synopsis"),mr("duration"),It,Rt,tt("date"),Y("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Uu,Hu,Y("containing_group_count"),Y("sub_group_count"),dt,Y("tag_count"),Y("scene_count"),Ie("created_at"),Ie("updated_at"),ft],sy=new _e(ny,ry,iy,ay),zu=new Map([["Female",Ne.Female],["Male",Ne.Male],["Transgender Male",Ne.TransgenderMale],["Transgender Female",Ne.TransgenderFemale],["Intersex",Ne.Intersex],["Non-Binary",Ne.NonBinary]]);Ne.Female,Ne.Male,Ne.TransgenderFemale,Ne.TransgenderMale,Ne.Intersex,Ne.NonBinary;const oy=(e,t)=>{if(!e)return;const n=Object.entries(Ne).find(i=>i[1]===e);return n?n[1]:zu.get(e)},uy=Array.from(zu.keys()),Wu=new de({messageID:"gender",type:"gender",options:uy,modifierOptions:[m.Includes,m.Excludes,m.IsNull,m.NotNull],defaultModifier:m.Includes,makeCriterion:()=>new cy});class cy extends Bi{constructor(t=[]){super(Wu,t)}toCriterionInput(){return{value_list:this.value.map(n=>oy(n)),modifier:this.modifier}}setFromSavedCriterion(t){typeof t.value=="string"&&(t={...t,value:[t.value]}),super.setFromSavedCriterion(t)}}const Qu=new Map([["Uncut",Qn.Uncut],["Cut",Qn.Cut]]),ly=(e,t)=>{if(!e)return;const n=Object.entries(Qn).find(i=>i[1]===e);return n?n[1]:Qu.get(e)},dy=Array.from(Qu.keys()),Yu=new de({messageID:"circumcised",type:"circumcised",modifierOptions:[m.Includes,m.Excludes,m.IsNull,m.NotNull],defaultModifier:m.Includes,options:dy,makeCriterion:()=>new fy});class fy extends Bi{constructor(){super(Yu)}toCriterionInput(){return{value:this.value.map(n=>ly(n)),modifier:this.modifier}}}const Mn=new de({messageID:"stash_id",type:"stash_id_endpoint",modifierOptions:[m.Equals,m.NotEquals,m.IsNull,m.NotNull],makeCriterion:()=>new py});class py extends me{constructor(){super(Mn,{endpoint:"",stashID:""})}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(t){typeof t!="object"?this._value={endpoint:"",stashID:t}:this._value=t}toCriterionInput(){return{endpoint:this.value.endpoint,stash_id:this.value.stashID,modifier:this.modifier}}getLabel(t){const n=me.getModifierLabel(t,this.modifier);let r="";return this.modifier!==m.IsNull&&this.modifier!==m.NotNull?r=this.getLabelValue(t):this.value.endpoint&&(r="("+this.value.endpoint+")"),t.formatMessage({id:"criterion_modifier.format_string"},{criterion:t.formatMessage({id:this.criterionOption.messageID}),modifierString:n,valueString:r})}getLabelValue(t){let n=this.value.stashID;return this.value.endpoint&&(n+=" ("+this.value.endpoint+")"),n}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}toQueryParams(){super.toQueryParams();let t;return(this.modifier===m.IsNull||this.modifier===m.NotNull)&&!this.value.endpoint?t={type:this.criterionOption.type,modifier:this.modifier}:t={type:this.criterionOption.type,value:this.value,modifier:this.modifier},t}isValid(){return this.modifier===m.IsNull||this.modifier===m.NotNull||this.value.stashID.length>0}}var Ku={};const my=[["AF","AFG","004","ISO 3166-2:AF"],["AL","ALB","008","ISO 3166-2:AL"],["DZ","DZA","012","ISO 3166-2:DZ"],["AS","ASM","016","ISO 3166-2:AS"],["AD","AND","020","ISO 3166-2:AD"],["AO","AGO","024","ISO 3166-2:AO"],["AI","AIA","660","ISO 3166-2:AI"],["AQ","ATA","010","ISO 3166-2:AQ"],["AG","ATG","028","ISO 3166-2:AG"],["AR","ARG","032","ISO 3166-2:AR"],["AM","ARM","051","ISO 3166-2:AM"],["AW","ABW","533","ISO 3166-2:AW"],["AU","AUS","036","ISO 3166-2:AU"],["AT","AUT","040","ISO 3166-2:AT"],["AZ","AZE","031","ISO 3166-2:AZ"],["BS","BHS","044","ISO 3166-2:BS"],["BH","BHR","048","ISO 3166-2:BH"],["BD","BGD","050","ISO 3166-2:BD"],["BB","BRB","052","ISO 3166-2:BB"],["BY","BLR","112","ISO 3166-2:BY"],["BE","BEL","056","ISO 3166-2:BE"],["BZ","BLZ","084","ISO 3166-2:BZ"],["BJ","BEN","204","ISO 3166-2:BJ"],["BM","BMU","060","ISO 3166-2:BM"],["BT","BTN","064","ISO 3166-2:BT"],["BO","BOL","068","ISO 3166-2:BO"],["BA","BIH","070","ISO 3166-2:BA"],["BW","BWA","072","ISO 3166-2:BW"],["BV","BVT","074","ISO 3166-2:BV"],["BR","BRA","076","ISO 3166-2:BR"],["IO","IOT","086","ISO 3166-2:IO"],["BN","BRN","096","ISO 3166-2:BN"],["BG","BGR","100","ISO 3166-2:BG"],["BF","BFA","854","ISO 3166-2:BF"],["BI","BDI","108","ISO 3166-2:BI"],["KH","KHM","116","ISO 3166-2:KH"],["CM","CMR","120","ISO 3166-2:CM"],["CA","CAN","124","ISO 3166-2:CA"],["CV","CPV","132","ISO 3166-2:CV"],["KY","CYM","136","ISO 3166-2:KY"],["CF","CAF","140","ISO 3166-2:CF"],["TD","TCD","148","ISO 3166-2:TD"],["CL","CHL","152","ISO 3166-2:CL"],["CN","CHN","156","ISO 3166-2:CN"],["CX","CXR","162","ISO 3166-2:CX"],["CC","CCK","166","ISO 3166-2:CC"],["CO","COL","170","ISO 3166-2:CO"],["KM","COM","174","ISO 3166-2:KM"],["CG","COG","178","ISO 3166-2:CG"],["CD","COD","180","ISO 3166-2:CD"],["CK","COK","184","ISO 3166-2:CK"],["CR","CRI","188","ISO 3166-2:CR"],["CI","CIV","384","ISO 3166-2:CI"],["HR","HRV","191","ISO 3166-2:HR"],["CU","CUB","192","ISO 3166-2:CU"],["CY","CYP","196","ISO 3166-2:CY"],["CZ","CZE","203","ISO 3166-2:CZ"],["DK","DNK","208","ISO 3166-2:DK"],["DJ","DJI","262","ISO 3166-2:DJ"],["DM","DMA","212","ISO 3166-2:DM"],["DO","DOM","214","ISO 3166-2:DO"],["EC","ECU","218","ISO 3166-2:EC"],["EG","EGY","818","ISO 3166-2:EG"],["SV","SLV","222","ISO 3166-2:SV"],["GQ","GNQ","226","ISO 3166-2:GQ"],["ER","ERI","232","ISO 3166-2:ER"],["EE","EST","233","ISO 3166-2:EE"],["ET","ETH","231","ISO 3166-2:ET"],["FK","FLK","238","ISO 3166-2:FK"],["FO","FRO","234","ISO 3166-2:FO"],["FJ","FJI","242","ISO 3166-2:FJ"],["FI","FIN","246","ISO 3166-2:FI"],["FR","FRA","250","ISO 3166-2:FR"],["GF","GUF","254","ISO 3166-2:GF"],["PF","PYF","258","ISO 3166-2:PF"],["TF","ATF","260","ISO 3166-2:TF"],["GA","GAB","266","ISO 3166-2:GA"],["GM","GMB","270","ISO 3166-2:GM"],["GE","GEO","268","ISO 3166-2:GE"],["DE","DEU","276","ISO 3166-2:DE"],["GH","GHA","288","ISO 3166-2:GH"],["GI","GIB","292","ISO 3166-2:GI"],["GR","GRC","300","ISO 3166-2:GR"],["GL","GRL","304","ISO 3166-2:GL"],["GD","GRD","308","ISO 3166-2:GD"],["GP","GLP","312","ISO 3166-2:GP"],["GU","GUM","316","ISO 3166-2:GU"],["GT","GTM","320","ISO 3166-2:GT"],["GN","GIN","324","ISO 3166-2:GN"],["GW","GNB","624","ISO 3166-2:GW"],["GY","GUY","328","ISO 3166-2:GY"],["HT","HTI","332","ISO 3166-2:HT"],["HM","HMD","334","ISO 3166-2:HM"],["VA","VAT","336","ISO 3166-2:VA"],["HN","HND","340","ISO 3166-2:HN"],["HK","HKG","344","ISO 3166-2:HK"],["HU","HUN","348","ISO 3166-2:HU"],["IS","ISL","352","ISO 3166-2:IS"],["IN","IND","356","ISO 3166-2:IN"],["ID","IDN","360","ISO 3166-2:ID"],["IR","IRN","364","ISO 3166-2:IR"],["IQ","IRQ","368","ISO 3166-2:IQ"],["IE","IRL","372","ISO 3166-2:IE"],["IL","ISR","376","ISO 3166-2:IL"],["IT","ITA","380","ISO 3166-2:IT"],["JM","JAM","388","ISO 3166-2:JM"],["JP","JPN","392","ISO 3166-2:JP"],["JO","JOR","400","ISO 3166-2:JO"],["KZ","KAZ","398","ISO 3166-2:KZ"],["KE","KEN","404","ISO 3166-2:KE"],["KI","KIR","296","ISO 3166-2:KI"],["KP","PRK","408","ISO 3166-2:KP"],["KR","KOR","410","ISO 3166-2:KR"],["KW","KWT","414","ISO 3166-2:KW"],["KG","KGZ","417","ISO 3166-2:KG"],["LA","LAO","418","ISO 3166-2:LA"],["LV","LVA","428","ISO 3166-2:LV"],["LB","LBN","422","ISO 3166-2:LB"],["LS","LSO","426","ISO 3166-2:LS"],["LR","LBR","430","ISO 3166-2:LR"],["LY","LBY","434","ISO 3166-2:LY"],["LI","LIE","438","ISO 3166-2:LI"],["LT","LTU","440","ISO 3166-2:LT"],["LU","LUX","442","ISO 3166-2:LU"],["MO","MAC","446","ISO 3166-2:MO"],["MG","MDG","450","ISO 3166-2:MG"],["MW","MWI","454","ISO 3166-2:MW"],["MY","MYS","458","ISO 3166-2:MY"],["MV","MDV","462","ISO 3166-2:MV"],["ML","MLI","466","ISO 3166-2:ML"],["MT","MLT","470","ISO 3166-2:MT"],["MH","MHL","584","ISO 3166-2:MH"],["MQ","MTQ","474","ISO 3166-2:MQ"],["MR","MRT","478","ISO 3166-2:MR"],["MU","MUS","480","ISO 3166-2:MU"],["YT","MYT","175","ISO 3166-2:YT"],["MX","MEX","484","ISO 3166-2:MX"],["FM","FSM","583","ISO 3166-2:FM"],["MD","MDA","498","ISO 3166-2:MD"],["MC","MCO","492","ISO 3166-2:MC"],["MN","MNG","496","ISO 3166-2:MN"],["MS","MSR","500","ISO 3166-2:MS"],["MA","MAR","504","ISO 3166-2:MA"],["MZ","MOZ","508","ISO 3166-2:MZ"],["MM","MMR","104","ISO 3166-2:MM"],["NA","NAM","516","ISO 3166-2:NA"],["NR","NRU","520","ISO 3166-2:NR"],["NP","NPL","524","ISO 3166-2:NP"],["NL","NLD","528","ISO 3166-2:NL"],["NC","NCL","540","ISO 3166-2:NC"],["NZ","NZL","554","ISO 3166-2:NZ"],["NI","NIC","558","ISO 3166-2:NI"],["NE","NER","562","ISO 3166-2:NE"],["NG","NGA","566","ISO 3166-2:NG"],["NU","NIU","570","ISO 3166-2:NU"],["NF","NFK","574","ISO 3166-2:NF"],["MP","MNP","580","ISO 3166-2:MP"],["MK","MKD","807","ISO 3166-2:MK"],["NO","NOR","578","ISO 3166-2:NO"],["OM","OMN","512","ISO 3166-2:OM"],["PK","PAK","586","ISO 3166-2:PK"],["PW","PLW","585","ISO 3166-2:PW"],["PS","PSE","275","ISO 3166-2:PS"],["PA","PAN","591","ISO 3166-2:PA"],["PG","PNG","598","ISO 3166-2:PG"],["PY","PRY","600","ISO 3166-2:PY"],["PE","PER","604","ISO 3166-2:PE"],["PH","PHL","608","ISO 3166-2:PH"],["PN","PCN","612","ISO 3166-2:PN"],["PL","POL","616","ISO 3166-2:PL"],["PT","PRT","620","ISO 3166-2:PT"],["PR","PRI","630","ISO 3166-2:PR"],["QA","QAT","634","ISO 3166-2:QA"],["RE","REU","638","ISO 3166-2:RE"],["RO","ROU","642","ISO 3166-2:RO"],["RU","RUS","643","ISO 3166-2:RU"],["RW","RWA","646","ISO 3166-2:RW"],["SH","SHN","654","ISO 3166-2:SH"],["KN","KNA","659","ISO 3166-2:KN"],["LC","LCA","662","ISO 3166-2:LC"],["PM","SPM","666","ISO 3166-2:PM"],["VC","VCT","670","ISO 3166-2:VC"],["WS","WSM","882","ISO 3166-2:WS"],["SM","SMR","674","ISO 3166-2:SM"],["ST","STP","678","ISO 3166-2:ST"],["SA","SAU","682","ISO 3166-2:SA"],["SN","SEN","686","ISO 3166-2:SN"],["SC","SYC","690","ISO 3166-2:SC"],["SL","SLE","694","ISO 3166-2:SL"],["SG","SGP","702","ISO 3166-2:SG"],["SK","SVK","703","ISO 3166-2:SK"],["SI","SVN","705","ISO 3166-2:SI"],["SB","SLB","090","ISO 3166-2:SB"],["SO","SOM","706","ISO 3166-2:SO"],["ZA","ZAF","710","ISO 3166-2:ZA"],["GS","SGS","239","ISO 3166-2:GS"],["ES","ESP","724","ISO 3166-2:ES"],["LK","LKA","144","ISO 3166-2:LK"],["SD","SDN","729","ISO 3166-2:SD"],["SR","SUR","740","ISO 3166-2:SR"],["SJ","SJM","744","ISO 3166-2:SJ"],["SZ","SWZ","748","ISO 3166-2:SZ"],["SE","SWE","752","ISO 3166-2:SE"],["CH","CHE","756","ISO 3166-2:CH"],["SY","SYR","760","ISO 3166-2:SY"],["TW","TWN","158","ISO 3166-2:TW"],["TJ","TJK","762","ISO 3166-2:TJ"],["TZ","TZA","834","ISO 3166-2:TZ"],["TH","THA","764","ISO 3166-2:TH"],["TL","TLS","626","ISO 3166-2:TL"],["TG","TGO","768","ISO 3166-2:TG"],["TK","TKL","772","ISO 3166-2:TK"],["TO","TON","776","ISO 3166-2:TO"],["TT","TTO","780","ISO 3166-2:TT"],["TN","TUN","788","ISO 3166-2:TN"],["TR","TUR","792","ISO 3166-2:TR"],["TM","TKM","795","ISO 3166-2:TM"],["TC","TCA","796","ISO 3166-2:TC"],["TV","TUV","798","ISO 3166-2:TV"],["UG","UGA","800","ISO 3166-2:UG"],["UA","UKR","804","ISO 3166-2:UA"],["AE","ARE","784","ISO 3166-2:AE"],["GB","GBR","826","ISO 3166-2:GB"],["US","USA","840","ISO 3166-2:US"],["UM","UMI","581","ISO 3166-2:UM"],["UY","URY","858","ISO 3166-2:UY"],["UZ","UZB","860","ISO 3166-2:UZ"],["VU","VUT","548","ISO 3166-2:VU"],["VE","VEN","862","ISO 3166-2:VE"],["VN","VNM","704","ISO 3166-2:VN"],["VG","VGB","092","ISO 3166-2:VG"],["VI","VIR","850","ISO 3166-2:VI"],["WF","WLF","876","ISO 3166-2:WF"],["EH","ESH","732","ISO 3166-2:EH"],["YE","YEM","887","ISO 3166-2:YE"],["ZM","ZMB","894","ISO 3166-2:ZM"],["ZW","ZWE","716","ISO 3166-2:ZW"],["AX","ALA","248","ISO 3166-2:AX"],["BQ","BES","535","ISO 3166-2:BQ"],["CW","CUW","531","ISO 3166-2:CW"],["GG","GGY","831","ISO 3166-2:GG"],["IM","IMN","833","ISO 3166-2:IM"],["JE","JEY","832","ISO 3166-2:JE"],["ME","MNE","499","ISO 3166-2:ME"],["BL","BLM","652","ISO 3166-2:BL"],["MF","MAF","663","ISO 3166-2:MF"],["RS","SRB","688","ISO 3166-2:RS"],["SX","SXM","534","ISO 3166-2:SX"],["SS","SSD","728","ISO 3166-2:SS"],["XK","XKK","983","ISO 3166-2:XK"]],gy=["br","cy","dv","sw","eu","af","am","ha","ku","ml","mt","no","ps","sd","so","sq","ta","tg","tt","ug","ur","vi","ar","az","be","bg","bn","bs","ca","cs","da","de","el","en","es","et","fa","fi","fr","ga","gl","he","hi","hr","hu","hy","id","is","it","ja","ka","kk","km","ko","ky","lt","lv","mk","mn","mr","ms","nb","nl","nn","pl","pt","ro","ru","sk","sl","sr","sv","th","tk","tr","uk","uz","zh"];var Cr={};Cr.remove=hy;for(var Dr=[{base:" ",chars:" "},{base:"0",chars:"߀"},{base:"A",chars:"ⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",chars:"Ꜳ"},{base:"AE",chars:"ÆǼǢ"},{base:"AO",chars:"Ꜵ"},{base:"AU",chars:"Ꜷ"},{base:"AV",chars:"ꜸꜺ"},{base:"AY",chars:"Ꜽ"},{base:"B",chars:"ⒷＢḂḄḆɃƁ"},{base:"C",chars:"ⒸＣꜾḈĆCĈĊČÇƇȻ"},{base:"D",chars:"ⒹＤḊĎḌḐḒḎĐƊƉᴅꝹ"},{base:"Dh",chars:"Ð"},{base:"DZ",chars:"ǱǄ"},{base:"Dz",chars:"ǲǅ"},{base:"E",chars:"ɛⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎᴇ"},{base:"F",chars:"ꝼⒻＦḞƑꝻ"},{base:"G",chars:"ⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾɢ"},{base:"H",chars:"ⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",chars:"ⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",chars:"ⒿＪĴɈȷ"},{base:"K",chars:"ⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",chars:"ⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",chars:"Ǉ"},{base:"Lj",chars:"ǈ"},{base:"M",chars:"ⓂＭḾṀṂⱮƜϻ"},{base:"N",chars:"ꞤȠⓃＮǸŃÑṄŇṆŅṊṈƝꞐᴎ"},{base:"NJ",chars:"Ǌ"},{base:"Nj",chars:"ǋ"},{base:"O",chars:"ⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OE",chars:"Œ"},{base:"OI",chars:"Ƣ"},{base:"OO",chars:"Ꝏ"},{base:"OU",chars:"Ȣ"},{base:"P",chars:"ⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",chars:"ⓆＱꝖꝘɊ"},{base:"R",chars:"ⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",chars:"ⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",chars:"ⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",chars:"Þ"},{base:"TZ",chars:"Ꜩ"},{base:"U",chars:"ⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",chars:"ⓋＶṼṾƲꝞɅ"},{base:"VY",chars:"Ꝡ"},{base:"W",chars:"ⓌＷẀẂŴẆẄẈⱲ"},{base:"X",chars:"ⓍＸẊẌ"},{base:"Y",chars:"ⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",chars:"ⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",chars:"ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",chars:"ꜳ"},{base:"ae",chars:"æǽǣ"},{base:"ao",chars:"ꜵ"},{base:"au",chars:"ꜷ"},{base:"av",chars:"ꜹꜻ"},{base:"ay",chars:"ꜽ"},{base:"b",chars:"ⓑｂḃḅḇƀƃɓƂ"},{base:"c",chars:"ｃⓒćĉċčçḉƈȼꜿↄ"},{base:"d",chars:"ⓓｄḋďḍḑḓḏđƌɖɗƋᏧԁꞪ"},{base:"dh",chars:"ð"},{base:"dz",chars:"ǳǆ"},{base:"e",chars:"ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇǝ"},{base:"f",chars:"ⓕｆḟƒ"},{base:"ff",chars:"ﬀ"},{base:"fi",chars:"ﬁ"},{base:"fl",chars:"ﬂ"},{base:"ffi",chars:"ﬃ"},{base:"ffl",chars:"ﬄ"},{base:"g",chars:"ⓖｇǵĝḡğġǧģǥɠꞡꝿᵹ"},{base:"h",chars:"ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",chars:"ƕ"},{base:"i",chars:"ⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",chars:"ⓙｊĵǰɉ"},{base:"k",chars:"ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",chars:"ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇɭ"},{base:"lj",chars:"ǉ"},{base:"m",chars:"ⓜｍḿṁṃɱɯ"},{base:"n",chars:"ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",chars:"ǌ"},{base:"o",chars:"ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿꝋꝍɵɔᴑ"},{base:"oe",chars:"œ"},{base:"oi",chars:"ƣ"},{base:"oo",chars:"ꝏ"},{base:"ou",chars:"ȣ"},{base:"p",chars:"ⓟｐṕṗƥᵽꝑꝓꝕρ"},{base:"q",chars:"ⓠｑɋꝗꝙ"},{base:"r",chars:"ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",chars:"ⓢｓśṥŝṡšṧṣṩșşȿꞩꞅẛʂ"},{base:"ss",chars:"ß"},{base:"t",chars:"ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",chars:"þ"},{base:"tz",chars:"ꜩ"},{base:"u",chars:"ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",chars:"ⓥｖṽṿʋꝟʌ"},{base:"vy",chars:"ꝡ"},{base:"w",chars:"ⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",chars:"ⓧｘẋẍ"},{base:"y",chars:"ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",chars:"ⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],la={},Er=0;Er<Dr.length;Er+=1)for(var Ju=Dr[Er].chars,da=0;da<Ju.length;da+=1)la[Ju[da]]=Dr[Er].base;function hy(e){return e.replace(/[^\u0000-\u007e]/g,function(t){return la[t]||t})}Cr.replacementList=Dr,Cr.diacriticsMap=la,function(e){const t=my,n=gy,r=Cr.remove,i={},a={},s={},u={},o={};t.forEach(function(b){const y=b;a[y[0]]=y[1],s[y[1]]=y[0],u[y[2]]=y[0],o[y[0]]=y[2]});function c(b){return("000"+(b||"")).slice(-3)}function l(b,y){return Object.prototype.hasOwnProperty.call(b,y)}function f(b,y){return Object.keys(b).reduce(function(p,D){const T=b[D];return p[D]=y(T,D),p},{})}function I(b,y){switch(b){case"official":return Array.isArray(y)?y[0]:y;case"all":return typeof y=="string"?[y]:y;case"alias":return Array.isArray(y)?y[1]||y[0]:y;default:throw new TypeError("LocaleNameType must be one of these: all, official, alias!")}}e.registerLocale=function(b){if(!b.locale)throw new TypeError("Missing localeData.locale");if(!b.countries)throw new TypeError("Missing localeData.countries");i[b.locale]=b.countries};function h(b){return s[b]}e.alpha3ToAlpha2=h;function E(b){return a[b]}e.alpha2ToAlpha3=E;function S(b){return o[h(b)]}e.alpha3ToNumeric=S;function _(b){return o[b]}e.alpha2ToNumeric=_;function C(b){const y=c(b);return E(u[y])}e.numericToAlpha3=C;function v(b){const y=c(b);return u[y]}e.numericToAlpha2=v;function O(b){if(typeof b=="string"){if(/^[0-9]*$/.test(b))return C(b);if(b.length===2)return E(b.toUpperCase());if(b.length===3)return b.toUpperCase()}if(typeof b=="number")return C(b)}e.toAlpha3=O;function w(b){if(typeof b=="string"){if(/^[0-9]*$/.test(b))return v(b);if(b.length===2)return b.toUpperCase();if(b.length===3)return h(b.toUpperCase())}if(typeof b=="number")return v(b)}e.toAlpha2=w,e.getName=function(b,y,p={}){"select"in p||(p.select="official");try{const T=i[y.toLowerCase()][w(b)];return I(p.select,T)}catch{return}},e.getNames=function(b,y={}){"select"in y||(y.select="official");const p=i[b.toLowerCase()];return p===void 0?{}:f(p,function(D){return I(y.select,D)})},e.getAlpha2Code=function(b,y){const p=T=>T.toLowerCase(),D=(T,F)=>p(T)===p(F);try{const T=i[y.toLowerCase()];for(const F in T)if(l(T,F)){if(typeof T[F]=="string"&&D(T[F],b))return F;if(Array.isArray(T[F])){for(const q of T[F])if(D(q,b))return F}}return}catch{return}},e.getSimpleAlpha2Code=function(b,y){const p=T=>r(T.toLowerCase()),D=(T,F)=>p(T)===p(F);try{const T=i[y.toLowerCase()];for(const F in T)if(l(T,F)){if(typeof T[F]=="string"&&D(T[F],b))return F;if(Array.isArray(T[F])){for(const q of T[F])if(D(q,b))return F}}return}catch{return}},e.getAlpha2Codes=function(){return a},e.getAlpha3Code=function(b,y){const p=e.getAlpha2Code(b,y);if(p)return e.toAlpha3(p)},e.getSimpleAlpha3Code=function(b,y){const p=e.getSimpleAlpha2Code(b,y);if(p)return e.toAlpha3(p)},e.getAlpha3Codes=function(){return s},e.getNumericCodes=function(){return u},e.langs=function(){return Object.keys(i)},e.getSupportedLanguages=function(){return n},e.isValid=function(b){if(!b)return!1;const y=b.toString().toUpperCase();return l(s,y)||l(a,y)||l(u,y)}}(Ku);const Zu=es(Ku),vy=e=>e==="zh-CN"?"zh":e==="zh-TW"?"tw":e.slice(0,2),Sy=(e,t="en")=>{if(!e)return;const n=Zu.getName(e,vy(t));if(n)return n;if(t!=="en")return Zu.getName(e,"en")},Xu=new lr({messageID:"country",type:"country",makeCriterion:()=>new ec});class ec extends He{constructor(){super(Xu)}getLabelValue(t){return this.modifier===m.Equals||this.modifier===m.NotEquals?Sy(this.value,t.locale)??this.value:super.getLabelValue(t)}}const yy="name",by=["name","height","birthdate","tag_count","random","rating","penis_length","play_count","last_played_at","latest_scene","career_start","career_end","weight","measurements","scenes_duration","scenes_size"].map(_e.createSortBy).concat([{messageID:"scene_count",value:"scenes_count"},{messageID:"image_count",value:"images_count"},{messageID:"gallery_count",value:"galleries_count"},{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"},{messageID:"last_o_at",value:"last_o_at",sfwMessageID:"last_o_at_sfw"}]),Iy=[ge.Grid,ge.List,ge.Tagger],_y=["birth_year","death_year","age","weight","penis_length"],Oy=["name","disambiguation","details","ethnicity","hair_color","eye_color","measurements","fake_tits","tattoos","piercings","aliases"],Cy=[$o,Wu,Yu,Mm,dt,Or,Gt,Mn,te("url"),It,Y("tag_count"),Y("scene_count"),Y("image_count"),Y("gallery_count"),Y("play_count"),Y("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),fr("ignore_auto_tag"),Xu,To("height_cm","height"),..._y.map(e=>To(e)),...Oy.map(e=>te(e)),tt("birthdate"),tt("death_date"),tt("career_start"),tt("career_end"),Ie("created_at"),Ie("updated_at"),ft],Dy=new _e(yy,by,Iy,Cy),Ey="title",wy=["duration","title","seconds","scene_id","random","scenes_updated_at"].map(_e.createSortBy),Ty=[ge.Grid,ge.Wall],xy=[dt,Vo,eg,Rt,ym("duration"),Ie("created_at"),Ie("updated_at"),tt("scene_date"),Ie("scene_created_at"),Ie("scene_updated_at")],$y=new _e(Ey,wy,Ty,xy),tc=new wo("hasMarkers","has_markers",()=>new Fy);class Fy extends Gi{constructor(){super(tc)}}const nc=new St("interactive","interactive",()=>new Py);class Py extends yt{constructor(){super(nc)}}const fa=new Map([["de","Deutsche"],["en","English"],["es","Español"],["fr","Français"],["it","Italiano"],["ja","日本"],["ko","한국인"],["nl","Holandés"],["pt","Português"],["ru","Русский"],["00","Unknown"]]),My=e=>{if(e)return Array.from(fa.keys()).find(t=>fa.get(t)===e)},Ny=Array.from(fa.values()),rc=new de({messageID:"captions",type:"captions",modifierOptions:[m.Includes,m.Excludes,m.IsNull,m.NotNull],defaultModifier:m.Includes,options:Ny,makeCriterion:()=>new ky});class ky extends He{constructor(){super(rc)}toCriterionInput(){return{value:My(this.value)??"",modifier:this.modifier}}}const Ay="date",Ly=["organized","date","file_count","filesize","duration","framerate","resolution","bitrate","last_played_at","resume_time","play_duration","play_count","interactive","interactive_speed","perceptual_similarity","performer_age","studio",...Qi].map(_e.createSortBy).concat([{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"},{messageID:"last_o_at",value:"last_o_at",sfwMessageID:"last_o_at_sfw"},{messageID:"group_scene_number",value:"group_scene_number"},{messageID:"scene_code",value:"code"}]),jy=[ge.Grid,ge.List,ge.Wall,ge.Tagger],qy=Y("performer_age"),Vy=mr("duration"),Ry=[te("title"),te("code","scene_code"),Sr,aa,te("details"),te("director"),dr("oshash","media_info.oshash"),te("checksum","media_info.md5"),oa,Vu,hr,It,Y("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Hi,Lu,Y("framerate"),Y("bitrate"),te("video_codec"),te("audio_codec"),Vy,mr("resume_time"),mr("play_duration"),Y("play_count"),Ie("last_played_at"),tc,Fm,dt,Y("tag_count"),Wi,Rt,Y("performer_count"),qy,gr,Gt,Or,ty,sa,te("url"),Mn,Y("stash_id_count"),nc,rc,Y("interactive_speed"),Y("file_count"),tt("date"),Ie("created_at"),Ie("updated_at"),ft],By=new _e(Ay,Ly,jy,Ry),Gy="name",Uy=["name","tag_count","random","rating","scenes_duration","scenes_size","latest_scene"].map(_e.createSortBy).concat([{messageID:"gallery_count",value:"galleries_count"},{messageID:"image_count",value:"images_count"},{messageID:"scene_count",value:"scenes_count"},{messageID:"o_count",value:"o_counter"},{messageID:"o_count_all",value:"o_counter_all"},{messageID:"performer_count",value:"performer_count"},{messageID:"performer_count_all",value:"performer_count_all"},{messageID:"subsidiary_studio_count",value:"child_count"},{messageID:"scene_marker_count",value:"scene_markers_count"}]),Hy=[ge.Grid,ge.List,ge.Tagger],zy=[Po,dr("name"),te("details"),Go,Am,dt,It,fr("ignore_auto_tag"),fr("organized"),Y("tag_count"),Y("scene_count"),Y("image_count"),Y("gallery_count"),te("url"),Mn,te("aliases"),Y("child_count","subsidiary_studio_count"),Ie("created_at"),Ie("updated_at"),ft],Wy=new _e(Gy,Uy,Hy,zy),Qy="name",Yy=["name","random","scenes_duration","scenes_size"].map(_e.createSortBy).concat([{messageID:"gallery_count",value:"galleries_count"},{messageID:"image_count",value:"images_count"},{messageID:"performer_count",value:"performers_count"},{messageID:"scene_count",value:"scenes_count"},{messageID:"group_count",value:"groups_count"},{messageID:"marker_count",value:"scene_markers_count"},{messageID:"studio_count",value:"studios_count"}]),Ky=[ge.Grid,ge.List,ge.Tagger],Jy=[Fo,dr("name"),te("sort_name"),km,te("aliases"),te("description"),fr("ignore_auto_tag"),Mn,Y("scene_count"),Y("image_count"),Y("gallery_count"),Y("performer_count"),Y("studio_count"),Y("group_count"),Y("marker_count"),zo,new pr("parent_tag_count","parent_count"),Wo,new pr("sub_tag_count","child_count"),Ie("created_at"),Ie("updated_at"),ft],Zy=new _e(Qy,Yy,Ky,Jy);function ic(e){switch(e){case Q.Scenes:return By;case Q.Performers:return Dy;case Q.Studios:return Wy;case Q.Galleries:return RS;case Q.SceneMarkers:return $y;case Q.Movies:case Q.Groups:return sy;case Q.Tags:return Zy;case Q.Images:return ey}}const it={sortDirection:Le.Asc,displayMode:ge.Grid,currentPage:1,itemsPerPage:40};class ie{constructor(t,n,r){Z(this,"mode");Z(this,"options");Z(this,"config");Z(this,"searchTerm","");Z(this,"currentPage",it.currentPage);Z(this,"itemsPerPage",it.itemsPerPage);Z(this,"sortDirection",it.sortDirection);Z(this,"sortBy");Z(this,"displayMode",it.displayMode);Z(this,"zoomIndex",1);Z(this,"criteria",[]);Z(this,"randomSeed",-1);Z(this,"defaultZoomIndex",1);this.mode=t,this.config=n,this.options=ic(t);const{defaultSortBy:i,displayModeOptions:a}=this.options;r!=null&&r.defaultSortBy?(this.sortBy=r.defaultSortBy,r.defaultSortDir&&(this.sortDirection=r.defaultSortDir)):(this.sortBy=i,this.sortBy==="date"&&(this.sortDirection=Le.Desc)),this.displayMode=a[0],(r==null?void 0:r.defaultZoomIndex)!==void 0&&(this.defaultZoomIndex=r.defaultZoomIndex,this.zoomIndex=r.defaultZoomIndex)}clone(){const t=Object.assign(new ie(this.mode,this.config),this);return t.criteria=this.criteria.map(n=>n.clone()),t}empty(){return new ie(this.mode,this.config,{defaultZoomIndex:this.defaultZoomIndex})}metadataInfo(){const t=this.clone();return t.sortBy=void 0,t.randomSeed=-1,t.currentPage=1,t.sortDirection=it.sortDirection,t.itemsPerPage=0,t.zoomIndex=1,t.displayMode=it.displayMode,t}count(){return this.criteria.length}configureFromDecodedParams(t){if(t.perPage!==void 0&&(this.itemsPerPage=t.perPage),t.sortby!==void 0){this.sortBy=t.sortby;const n=this.sortBy.match(/^random_(\d+)$/);n&&(this.sortBy="random",this.randomSeed=Number.parseInt(n[1],10))}if(t.sortdir!==void 0?this.sortDirection=t.sortdir==="desc"?Le.Desc:Le.Asc:this.sortDirection=t.sortby==="date"?Le.Desc:Le.Asc,t.disp!==void 0&&(this.displayMode=t.disp),t.q!==void 0&&(this.searchTerm=t.q),this.currentPage=t.p??1,t.z!==void 0&&(this.zoomIndex=t.z),this.criteria=[],t.c!==void 0)for(const n of t.c)try{const{type:r,...i}=JSON.parse(n),a=this.makeCriterion(r);a.fromDecodedParams(i),this.criteria.push(a)}catch(r){console.error("Failed to parse encoded criterion:",r)}}static decodeParams(t){const n={};if(t.perPage&&(n.perPage=Number.parseInt(t.perPage,10)),t.sortby&&(n.sortby=t.sortby),t.sortdir&&(n.sortdir=t.sortdir),t.disp&&(n.disp=Number.parseInt(t.disp,10)),t.q&&(n.q=t.q),t.p&&(n.p=Number.parseInt(t.p,10)),t.z){const r=Number.parseInt(t.z,10);r>=0&&(n.z=r)}return t.c&&t.c.length!==0&&(n.c=t.c.map(r=>ie.translateJSON(r,!0))),n}static translateJSON(t,n){let r=!1,i=!1;return[...t].map(a=>{if(i)return i=!1,a;switch(a){case"\\":r&&(i=!0);break;case'"':r=!r;break;case"(":if(n&&!r)return"{";break;case")":if(n&&!r)return"}";break;case"{":if(!n&&!r)return"(";break;case"}":if(!n&&!r)return")";break}return a}).join("")}configureFromQueryString(t){const n=new URLSearchParams(t),r={perPage:n.get("perPage"),sortby:n.get("sortby"),sortdir:n.get("sortdir"),disp:n.get("disp"),q:n.get("q"),p:n.get("p"),z:n.get("z"),c:n.getAll("c")},i=ie.decodeParams(r);this.configureFromDecodedParams(i)}configureFromSavedFilter(t){var s;const{find_filter:n,object_filter:r,ui_options:i}=t;this.itemsPerPage=(n==null?void 0:n.per_page)??this.itemsPerPage,this.sortBy=(n==null?void 0:n.sort)??this.sortBy;const a=(s=this.sortBy)==null?void 0:s.match(/^random_(\d+)$/);if(a&&(this.sortBy="random",this.randomSeed=Number.parseInt(a[1],10)),this.sortDirection=(n==null?void 0:n.direction)??this.sortDirection,this.searchTerm=(n==null?void 0:n.q)??this.searchTerm,this.displayMode=(i==null?void 0:i.display_mode)??this.displayMode,this.zoomIndex=(i==null?void 0:i.zoom_index)??this.zoomIndex,this.currentPage=1,this.criteria=[],r)for(const[u,o]of Object.entries(r)){const c=this.makeCriterion(u);c.setFromSavedCriterion(o),this.criteria.push(c)}}setRandomSeed(){this.sortBy==="random"?this.randomSeed===-1&&(this.randomSeed=Math.floor(Math.random()*10**8)):this.randomSeed=-1}getSortBy(){return this.setRandomSeed(),this.sortBy==="random"?`random_${this.randomSeed.toString()}`:this.sortBy}getEncodedParams(){const t=this.criteria.map(n=>{const r=n.toQueryParams();let i=ie.translateJSON(JSON.stringify(r),!1);return i=encodeURI(i),i=i.replaceAll("?",encodeURIComponent("?")),i=i.replaceAll("#",encodeURIComponent("#")),i=i.replaceAll("&",encodeURIComponent("&")),i=i.replaceAll(";",encodeURIComponent(";")),i=i.replaceAll("=",encodeURIComponent("=")),i=i.replaceAll("+",encodeURIComponent("+")),i});return{perPage:this.itemsPerPage!==it.itemsPerPage?String(this.itemsPerPage):void 0,sortby:this.getSortBy(),sortdir:this.sortBy==="date"?this.sortDirection===Le.Asc?"asc":void 0:this.sortDirection===Le.Desc?"desc":void 0,disp:this.displayMode!==it.displayMode?String(this.displayMode):void 0,q:this.searchTerm?encodeURIComponent(this.searchTerm):void 0,p:this.currentPage!==it.currentPage?String(this.currentPage):void 0,z:this.zoomIndex!==this.defaultZoomIndex?String(this.zoomIndex):void 0,c:t}}makeQueryParameters(){const t=[],n=this.getEncodedParams();if(n.q&&t.push(`q=${n.q}`),n.c)for(const r of n.c)t.push(`c=${r}`);return n.sortby&&t.push(`sortby=${n.sortby}`),n.sortdir&&t.push(`sortdir=${n.sortdir}`),n.perPage&&t.push(`perPage=${n.perPage}`),n.disp&&t.push(`disp=${n.disp}`),n.z&&t.push(`z=${n.z}`),n.p&&t.push(`p=${n.p}`),t.join("&")}makeCriterion(t){const{criterionOptions:n}=ic(this.mode),r=n.find(i=>i.type===t);return r?r.makeCriterion(this.config):new Cm(t).makeCriterion(this.config)}makeFindFilter(){return{q:this.searchTerm,page:this.currentPage,per_page:this.itemsPerPage,sort:this.getSortBy(),direction:this.sortDirection}}makeFilter(){const t={};for(const n of this.criteria)n.applyToCriterionInput(t);return t}makeSavedFilter(){const t={};for(const n of this.criteria)n.applyToSavedCriterion(t);return t}makeSavedUIOptions(){return{display_mode:this.displayMode,zoom_index:this.zoomIndex}}criteriaFor(t){return this.criteria.filter(n=>n.criterionOption.type===t)}replaceCriteria(t,n){const r=[...this.criteria.filter(i=>i.criterionOption.type!==t),...n];return this.setCriteria(r)}clearCriteria(t=!1){const n=this.clone();return t&&(n.searchTerm=""),n.criteria=[],n.currentPage=1,n}clearSearchTerm(){const t=this.clone();return t.searchTerm="",t.currentPage=1,t}setCriteria(t){const n=this.clone();return n.criteria=t,n.currentPage=1,n}removeCriterion(t){const n=this.clone(),r=n.criteria.find(a=>a.criterionOption.type===t);if(!r)return n;const i=n.criteria.filter(a=>a.getId()!==r.getId());return n.criteria=i,n.currentPage=1,n}removeCustomFieldCriterion(t,n){const r=this.clone(),i=r.criteria.find(a=>a.criterionOption.type===t);if(!i)return r;if(i instanceof Fu){const a=i.value.filter((s,u)=>u!==n);i.value=a}return r}setPageSize(t){const n=this.clone();return n.itemsPerPage=t,n.currentPage=1,n}setSortBy(t){const n=this.clone();return n.sortBy=t,n.currentPage=1,n}toggleSortDirection(){const t=this.clone();return t.sortDirection===Le.Asc?t.sortDirection=Le.Desc:t.sortDirection=Le.Asc,t.currentPage=1,t}reshuffleRandomSort(){const t=this.clone();return t.currentPage=1,t.randomSeed=-1,t}changePage(t){const n=this.clone();return n.currentPage=t,n}setZoom(t){const n=this.clone();return n.zoomIndex=t,n}setDisplayMode(t){const n=this.clone();return n.displayMode=t,n}}function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(null,arguments)}function Et(e){"@babel/helpers - typeof";return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Et(e)}function Xy(e,t){if(Et(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Et(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ac(e){var t=Xy(e,"string");return Et(t)=="symbol"?t:t+""}function Jt(e,t,n){return(t=ac(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sc(Object(n),!0).forEach(function(r){Jt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function eb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ac(r.key),r)}}function tb(e,t,n){return t&&oc(e.prototype,t),n&&oc(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function pa(e,t){return pa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},pa(e,t)}function nb(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&pa(e,t)}function wr(e){return wr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},wr(e)}function uc(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(uc=function(){return!!e})()}function rb(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ib(e,t){if(t&&(Et(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return rb(e)}function ab(e){var t=uc();return function(){var n,r=wr(e);if(t){var i=wr(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return ib(this,n)}}function ma(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function sb(e){if(Array.isArray(e))return ma(e)}function ob(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function cc(e,t){if(e){if(typeof e=="string")return ma(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ma(e,t):void 0}}function ub(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zt(e){return sb(e)||ob(e)||cc(e)||ub()}function cb(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function lb(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var db=function(){function e(n){var r=this;this._insertTag=function(i){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,a),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(lb(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=cb(i);try{a.insertRule(r,a.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),xe="-ms-",Tr="-moz-",ae="-webkit-",lc="comm",ga="rule",ha="decl",fb="@import",dc="@keyframes",pb="@layer",mb=Math.abs,xr=String.fromCharCode,gb=Object.assign;function hb(e,t){return we(e,0)^45?(((t<<2^we(e,0))<<2^we(e,1))<<2^we(e,2))<<2^we(e,3):0}function fc(e){return e.trim()}function vb(e,t){return(e=t.exec(e))?e[0]:e}function se(e,t,n){return e.replace(t,n)}function va(e,t){return e.indexOf(t)}function we(e,t){return e.charCodeAt(t)|0}function Nn(e,t,n){return e.slice(t,n)}function Ye(e){return e.length}function Sa(e){return e.length}function $r(e,t){return t.push(e),e}function Sb(e,t){return e.map(t).join("")}var Fr=1,Xt=1,pc=0,Ae=0,ye=0,en="";function Pr(e,t,n,r,i,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Fr,column:Xt,length:s,return:""}}function kn(e,t){return gb(Pr("",null,null,"",null,null,0),e,{length:-e.length},t)}function yb(){return ye}function bb(){return ye=Ae>0?we(en,--Ae):0,Xt--,ye===10&&(Xt=1,Fr--),ye}function qe(){return ye=Ae<pc?we(en,Ae++):0,Xt++,ye===10&&(Xt=1,Fr++),ye}function Ke(){return we(en,Ae)}function Mr(){return Ae}function An(e,t){return Nn(en,e,t)}function Ln(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mc(e){return Fr=Xt=1,pc=Ye(en=e),Ae=0,[]}function gc(e){return en="",e}function Nr(e){return fc(An(Ae-1,ya(e===91?e+2:e===40?e+1:e)))}function Ib(e){for(;(ye=Ke())&&ye<33;)qe();return Ln(e)>2||Ln(ye)>3?"":" "}function _b(e,t){for(;--t&&qe()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return An(e,Mr()+(t<6&&Ke()==32&&qe()==32))}function ya(e){for(;qe();)switch(ye){case e:return Ae;case 34:case 39:e!==34&&e!==39&&ya(ye);break;case 40:e===41&&ya(e);break;case 92:qe();break}return Ae}function Ob(e,t){for(;qe()&&e+ye!==57;)if(e+ye===84&&Ke()===47)break;return"/*"+An(t,Ae-1)+"*"+xr(e===47?e:qe())}function Cb(e){for(;!Ln(Ke());)qe();return An(e,Ae)}function Db(e){return gc(kr("",null,null,null,[""],e=mc(e),0,[0],e))}function kr(e,t,n,r,i,a,s,u,o){for(var c=0,l=0,f=s,I=0,h=0,E=0,S=1,_=1,C=1,v=0,O="",w=i,b=a,y=r,p=O;_;)switch(E=v,v=qe()){case 40:if(E!=108&&we(p,f-1)==58){va(p+=se(Nr(v),"&","&\f"),"&\f")!=-1&&(C=-1);break}case 34:case 39:case 91:p+=Nr(v);break;case 9:case 10:case 13:case 32:p+=Ib(E);break;case 92:p+=_b(Mr()-1,7);continue;case 47:switch(Ke()){case 42:case 47:$r(Eb(Ob(qe(),Mr()),t,n),o);break;default:p+="/"}break;case 123*S:u[c++]=Ye(p)*C;case 125*S:case 59:case 0:switch(v){case 0:case 125:_=0;case 59+l:C==-1&&(p=se(p,/\f/g,"")),h>0&&Ye(p)-f&&$r(h>32?vc(p+";",r,n,f-1):vc(se(p," ","")+";",r,n,f-2),o);break;case 59:p+=";";default:if($r(y=hc(p,t,n,c,l,i,u,O,w=[],b=[],f),a),v===123)if(l===0)kr(p,t,y,y,w,a,f,u,b);else switch(I===99&&we(p,3)===110?100:I){case 100:case 108:case 109:case 115:kr(e,y,y,r&&$r(hc(e,y,y,0,0,i,u,O,i,w=[],f),b),i,b,f,u,r?w:b);break;default:kr(p,y,y,y,[""],b,0,u,b)}}c=l=h=0,S=C=1,O=p="",f=s;break;case 58:f=1+Ye(p),h=E;default:if(S<1){if(v==123)--S;else if(v==125&&S++==0&&bb()==125)continue}switch(p+=xr(v),v*S){case 38:C=l>0?1:(p+="\f",-1);break;case 44:u[c++]=(Ye(p)-1)*C,C=1;break;case 64:Ke()===45&&(p+=Nr(qe())),I=Ke(),l=f=Ye(O=p+=Cb(Mr())),v++;break;case 45:E===45&&Ye(p)==2&&(S=0)}}return a}function hc(e,t,n,r,i,a,s,u,o,c,l){for(var f=i-1,I=i===0?a:[""],h=Sa(I),E=0,S=0,_=0;E<r;++E)for(var C=0,v=Nn(e,f+1,f=mb(S=s[E])),O=e;C<h;++C)(O=fc(S>0?I[C]+" "+v:se(v,/&\f/g,I[C])))&&(o[_++]=O);return Pr(e,t,n,i===0?ga:u,o,c,l)}function Eb(e,t,n){return Pr(e,t,n,lc,xr(yb()),Nn(e,2,-2),0)}function vc(e,t,n,r){return Pr(e,t,n,ha,Nn(e,0,r),Nn(e,r+1,-1),r)}function tn(e,t){for(var n="",r=Sa(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function wb(e,t,n,r){switch(e.type){case pb:if(e.children.length)break;case fb:case ha:return e.return=e.return||e.value;case lc:return"";case dc:return e.return=e.value+"{"+tn(e.children,r)+"}";case ga:e.value=e.props.join(",")}return Ye(n=tn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Tb(e){var t=Sa(e);return function(n,r,i,a){for(var s="",u=0;u<t;u++)s+=e[u](n,r,i,a)||"";return s}}function xb(e){return function(t){t.root||(t=t.return)&&e(t)}}function $b(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Fb=function(t,n,r){for(var i=0,a=0;i=a,a=Ke(),i===38&&a===12&&(n[r]=1),!Ln(a);)qe();return An(t,Ae)},Pb=function(t,n){var r=-1,i=44;do switch(Ln(i)){case 0:i===38&&Ke()===12&&(n[r]=1),t[r]+=Fb(Ae-1,n,r);break;case 2:t[r]+=Nr(i);break;case 4:if(i===44){t[++r]=Ke()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=xr(i)}while(i=qe());return t},Mb=function(t,n){return gc(Pb(mc(t),n))},Sc=new WeakMap,Nb=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Sc.get(r))&&!i){Sc.set(t,!0);for(var a=[],s=Mb(n,a),u=r.props,o=0,c=0;o<s.length;o++)for(var l=0;l<u.length;l++,c++)t.props[c]=a[o]?s[o].replace(/&\f/g,u[l]):u[l]+" "+s[o]}}},kb=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function yc(e,t){switch(hb(e,t)){case 5103:return ae+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ae+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ae+e+Tr+e+xe+e+e;case 6828:case 4268:return ae+e+xe+e+e;case 6165:return ae+e+xe+"flex-"+e+e;case 5187:return ae+e+se(e,/(\w+).+(:[^]+)/,ae+"box-$1$2"+xe+"flex-$1$2")+e;case 5443:return ae+e+xe+"flex-item-"+se(e,/flex-|-self/,"")+e;case 4675:return ae+e+xe+"flex-line-pack"+se(e,/align-content|flex-|-self/,"")+e;case 5548:return ae+e+xe+se(e,"shrink","negative")+e;case 5292:return ae+e+xe+se(e,"basis","preferred-size")+e;case 6060:return ae+"box-"+se(e,"-grow","")+ae+e+xe+se(e,"grow","positive")+e;case 4554:return ae+se(e,/([^-])(transform)/g,"$1"+ae+"$2")+e;case 6187:return se(se(se(e,/(zoom-|grab)/,ae+"$1"),/(image-set)/,ae+"$1"),e,"")+e;case 5495:case 3959:return se(e,/(image-set\([^]*)/,ae+"$1$`$1");case 4968:return se(se(e,/(.+:)(flex-)?(.*)/,ae+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ae+e+e;case 4095:case 3583:case 4068:case 2532:return se(e,/(.+)-inline(.+)/,ae+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ye(e)-1-t>6)switch(we(e,t+1)){case 109:if(we(e,t+4)!==45)break;case 102:return se(e,/(.+:)(.+)-([^]+)/,"$1"+ae+"$2-$3$1"+Tr+(we(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~va(e,"stretch")?yc(se(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(we(e,t+1)!==115)break;case 6444:switch(we(e,Ye(e)-3-(~va(e,"!important")&&10))){case 107:return se(e,":",":"+ae)+e;case 101:return se(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ae+(we(e,14)===45?"inline-":"")+"box$3$1"+ae+"$2$3$1"+xe+"$2box$3")+e}break;case 5936:switch(we(e,t+11)){case 114:return ae+e+xe+se(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ae+e+xe+se(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ae+e+xe+se(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ae+e+xe+e+e}return e}var Ab=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case ha:t.return=yc(t.value,t.length);break;case dc:return tn([kn(t,{value:se(t.value,"@","@"+ae)})],i);case ga:if(t.length)return Sb(t.props,function(a){switch(vb(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return tn([kn(t,{props:[se(a,/:(read-\w+)/,":"+Tr+"$1")]})],i);case"::placeholder":return tn([kn(t,{props:[se(a,/:(plac\w+)/,":"+ae+"input-$1")]}),kn(t,{props:[se(a,/:(plac\w+)/,":"+Tr+"$1")]}),kn(t,{props:[se(a,/:(plac\w+)/,xe+"input-$1")]})],i)}return""})}},Lb=[Ab],jb=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(S){var _=S.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var i=t.stylisPlugins||Lb,a={},s,u=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(S){for(var _=S.getAttribute("data-emotion").split(" "),C=1;C<_.length;C++)a[_[C]]=!0;u.push(S)});var o,c=[Nb,kb];{var l,f=[wb,xb(function(S){l.insert(S)})],I=Tb(c.concat(i,f)),h=function(_){return tn(Db(_),I)};o=function(_,C,v,O){l=v,h(_?_+"{"+C.styles+"}":C.styles),O&&(E.inserted[C.name]=!0)}}var E={key:n,sheet:new db({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:o};return E.sheet.hydrate(u),E},bc={exports:{}},ue={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ce=typeof Symbol=="function"&&Symbol.for,ba=Ce?Symbol.for("react.element"):60103,Ia=Ce?Symbol.for("react.portal"):60106,Ar=Ce?Symbol.for("react.fragment"):60107,Lr=Ce?Symbol.for("react.strict_mode"):60108,jr=Ce?Symbol.for("react.profiler"):60114,qr=Ce?Symbol.for("react.provider"):60109,Vr=Ce?Symbol.for("react.context"):60110,_a=Ce?Symbol.for("react.async_mode"):60111,Rr=Ce?Symbol.for("react.concurrent_mode"):60111,Br=Ce?Symbol.for("react.forward_ref"):60112,Gr=Ce?Symbol.for("react.suspense"):60113,qb=Ce?Symbol.for("react.suspense_list"):60120,Ur=Ce?Symbol.for("react.memo"):60115,Hr=Ce?Symbol.for("react.lazy"):60116,Vb=Ce?Symbol.for("react.block"):60121,Rb=Ce?Symbol.for("react.fundamental"):60117,Bb=Ce?Symbol.for("react.responder"):60118,Gb=Ce?Symbol.for("react.scope"):60119;function Ve(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ba:switch(e=e.type,e){case _a:case Rr:case Ar:case jr:case Lr:case Gr:return e;default:switch(e=e&&e.$$typeof,e){case Vr:case Br:case Hr:case Ur:case qr:return e;default:return t}}case Ia:return t}}}function Ic(e){return Ve(e)===Rr}ue.AsyncMode=_a,ue.ConcurrentMode=Rr,ue.ContextConsumer=Vr,ue.ContextProvider=qr,ue.Element=ba,ue.ForwardRef=Br,ue.Fragment=Ar,ue.Lazy=Hr,ue.Memo=Ur,ue.Portal=Ia,ue.Profiler=jr,ue.StrictMode=Lr,ue.Suspense=Gr,ue.isAsyncMode=function(e){return Ic(e)||Ve(e)===_a},ue.isConcurrentMode=Ic,ue.isContextConsumer=function(e){return Ve(e)===Vr},ue.isContextProvider=function(e){return Ve(e)===qr},ue.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ba},ue.isForwardRef=function(e){return Ve(e)===Br},ue.isFragment=function(e){return Ve(e)===Ar},ue.isLazy=function(e){return Ve(e)===Hr},ue.isMemo=function(e){return Ve(e)===Ur},ue.isPortal=function(e){return Ve(e)===Ia},ue.isProfiler=function(e){return Ve(e)===jr},ue.isStrictMode=function(e){return Ve(e)===Lr},ue.isSuspense=function(e){return Ve(e)===Gr},ue.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ar||e===Rr||e===jr||e===Lr||e===Gr||e===qb||typeof e=="object"&&e!==null&&(e.$$typeof===Hr||e.$$typeof===Ur||e.$$typeof===qr||e.$$typeof===Vr||e.$$typeof===Br||e.$$typeof===Rb||e.$$typeof===Bb||e.$$typeof===Gb||e.$$typeof===Vb)},ue.typeOf=Ve,bc.exports=ue;var Ub=bc.exports,_c=Ub,Hb={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Oc={};Oc[_c.ForwardRef]=Hb,Oc[_c.Memo]=zb;var Wb=!0;function Qb(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(r+=i+" ")}),r}var Cc=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||Wb===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Yb=function(t,n,r){Cc(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+i:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function Kb(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Jb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Zb=/[A-Z]|^ms/g,Xb=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Dc=function(t){return t.charCodeAt(1)===45},Ec=function(t){return t!=null&&typeof t!="boolean"},Oa=$b(function(e){return Dc(e)?e:e.replace(Zb,"-$&").toLowerCase()}),wc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Xb,function(r,i,a){return Je={name:i,styles:a,next:Je},i})}return Jb[t]!==1&&!Dc(t)&&typeof n=="number"&&n!==0?n+"px":n};function jn(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return Je={name:i.name,styles:i.styles,next:Je},i.name;var a=n;if(a.styles!==void 0){var s=a.next;if(s!==void 0)for(;s!==void 0;)Je={name:s.name,styles:s.styles,next:Je},s=s.next;var u=a.styles+";";return u}return e0(e,t,n)}case"function":{if(e!==void 0){var o=Je,c=n(e);return Je=o,jn(e,t,c)}break}}var l=n;return l}function e0(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=jn(e,t,n[i])+";";else for(var a in n){var s=n[a];if(typeof s!="object"){var u=s;Ec(u)&&(r+=Oa(a)+":"+wc(a,u)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&t==null)for(var o=0;o<s.length;o++)Ec(s[o])&&(r+=Oa(a)+":"+wc(a,s[o])+";");else{var c=jn(e,t,s);switch(a){case"animation":case"animationName":{r+=Oa(a)+":"+c+";";break}default:r+=a+"{"+c+"}"}}}return r}var Tc=/label:\s*([^\s;{]+)\s*(;|$)/g,Je;function xc(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";Je=void 0;var a=e[0];if(a==null||a.raw===void 0)r=!1,i+=jn(n,t,a);else{var s=a;i+=s[0]}for(var u=1;u<e.length;u++)if(i+=jn(n,t,e[u]),r){var o=a;i+=o[u]}Tc.lastIndex=0;for(var c="",l;(l=Tc.exec(i))!==null;)c+="-"+l[1];var f=Kb(i)+c;return{name:f,styles:i,next:Je}}var t0=function(t){return t()},n0=K.useInsertionEffect?K.useInsertionEffect:!1,r0=n0||t0,$c=K.createContext(typeof HTMLElement<"u"?jb({key:"css"}):null);$c.Provider;var i0=function(t){return x.forwardRef(function(n,r){var i=x.useContext($c);return t(n,i,r)})},a0=K.createContext({}),Ca={}.hasOwnProperty,Da="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",s0=function(t,n){var r={};for(var i in n)Ca.call(n,i)&&(r[i]=n[i]);return r[Da]=t,r},o0=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Cc(n,r,i),r0(function(){return Yb(n,r,i)}),null},u0=i0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Da],a=[r],s="";typeof e.className=="string"?s=Qb(t.registered,a,e.className):e.className!=null&&(s=e.className+" ");var u=xc(a,void 0,K.useContext(a0));s+=t.key+"-"+u.name;var o={};for(var c in e)Ca.call(e,c)&&c!=="css"&&c!==Da&&(o[c]=e[c]);return o.className=s,n&&(o.ref=n),K.createElement(K.Fragment,null,K.createElement(o0,{cache:t,serialized:u,isStringTag:typeof i=="string"}),K.createElement(i,o))}),c0=u0,V=function(t,n){var r=arguments;if(n==null||!Ca.call(n,"css"))return K.createElement.apply(void 0,r);var i=r.length,a=new Array(i);a[0]=c0,a[1]=s0(t,n);for(var s=2;s<i;s++)a[s]=r[s];return K.createElement.apply(null,a)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(V||(V={}));function Ea(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return xc(t)}function l0(){var e=Ea.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function d0(e){if(Array.isArray(e))return e}function f0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,s,u=[],o=!0,c=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);o=!0);}catch(l){c=!0,i=l}finally{try{if(!o&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw i}}return u}}function p0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(e,t){return d0(e)||f0(e,t)||cc(e,t)||p0()}function m0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function We(e,t){if(e==null)return{};var n,r,i=m0(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function g0(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const h0=Math.min,v0=Math.max,zr=Math.round,Wr=Math.floor,Qr=e=>({x:e,y:e});function S0(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Yr(){return typeof window<"u"}function Fc(e){return Mc(e)?(e.nodeName||"").toLowerCase():"#document"}function at(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Pc(e){var t;return(t=(Mc(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Mc(e){return Yr()?e instanceof Node||e instanceof at(e).Node:!1}function y0(e){return Yr()?e instanceof Element||e instanceof at(e).Element:!1}function wa(e){return Yr()?e instanceof HTMLElement||e instanceof at(e).HTMLElement:!1}function Nc(e){return!Yr()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof at(e).ShadowRoot}const b0=new Set(["inline","contents"]);function kc(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Ta(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!b0.has(i)}function I0(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const _0=new Set(["html","body","#document"]);function O0(e){return _0.has(Fc(e))}function Ta(e){return at(e).getComputedStyle(e)}function C0(e){if(Fc(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Nc(e)&&e.host||Pc(e);return Nc(t)?t.host:t}function Ac(e){const t=C0(e);return O0(t)?e.ownerDocument?e.ownerDocument.body:e.body:wa(t)&&kc(t)?t:Ac(t)}function Kr(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Ac(e),a=i===((r=e.ownerDocument)==null?void 0:r.body),s=at(i);if(a){const u=xa(s);return t.concat(s,s.visualViewport||[],kc(i)?i:[],u&&n?Kr(u):[])}return t.concat(i,Kr(i,[],n))}function xa(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function D0(e){const t=Ta(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=wa(e),a=i?e.offsetWidth:n,s=i?e.offsetHeight:r,u=zr(n)!==a||zr(r)!==s;return u&&(n=a,r=s),{width:n,height:r,$:u}}function $a(e){return y0(e)?e:e.contextElement}function Lc(e){const t=$a(e);if(!wa(t))return Qr(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:a}=D0(t);let s=(a?zr(n.width):n.width)/r,u=(a?zr(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!u||!Number.isFinite(u))&&(u=1),{x:s,y:u}}const E0=Qr(0);function w0(e){const t=at(e);return!I0()||!t.visualViewport?E0:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function T0(e,t,n){return!1}function jc(e,t,n,r){t===void 0&&(t=!1);const i=e.getBoundingClientRect(),a=$a(e);let s=Qr(1);t&&(s=Lc(e));const u=T0()?w0(a):Qr(0);let o=(i.left+u.x)/s.x,c=(i.top+u.y)/s.y,l=i.width/s.x,f=i.height/s.y;if(a){const I=at(a),h=r;let E=I,S=xa(E);for(;S&&r&&h!==E;){const _=Lc(S),C=S.getBoundingClientRect(),v=Ta(S),O=C.left+(S.clientLeft+parseFloat(v.paddingLeft))*_.x,w=C.top+(S.clientTop+parseFloat(v.paddingTop))*_.y;o*=_.x,c*=_.y,l*=_.x,f*=_.y,o+=O,c+=w,E=at(S),S=xa(E)}}return S0({width:l,height:f,x:o,y:c})}function qc(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function x0(e,t){let n=null,r;const i=Pc(e);function a(){var u;clearTimeout(r),(u=n)==null||u.disconnect(),n=null}function s(u,o){u===void 0&&(u=!1),o===void 0&&(o=1),a();const c=e.getBoundingClientRect(),{left:l,top:f,width:I,height:h}=c;if(u||t(),!I||!h)return;const E=Wr(f),S=Wr(i.clientWidth-(l+I)),_=Wr(i.clientHeight-(f+h)),C=Wr(l),O={rootMargin:-E+"px "+-S+"px "+-_+"px "+-C+"px",threshold:v0(0,h0(1,o))||1};let w=!0;function b(y){const p=y[0].intersectionRatio;if(p!==o){if(!w)return s();p?s(!1,p):r=setTimeout(()=>{s(!1,1e-7)},1e3)}p===1&&!qc(c,e.getBoundingClientRect())&&s(),w=!1}try{n=new IntersectionObserver(b,{...O,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,O)}n.observe(e)}return s(!0),a}function $0(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:u=typeof IntersectionObserver=="function",animationFrame:o=!1}=r,c=$a(e),l=i||a?[...c?Kr(c):[],...Kr(t)]:[];l.forEach(C=>{i&&C.addEventListener("scroll",n,{passive:!0}),a&&C.addEventListener("resize",n)});const f=c&&u?x0(c,n):null;let I=-1,h=null;s&&(h=new ResizeObserver(C=>{let[v]=C;v&&v.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(I),I=requestAnimationFrame(()=>{var O;(O=h)==null||O.observe(t)})),n()}),c&&!o&&h.observe(c),h.observe(t));let E,S=o?jc(e):null;o&&_();function _(){const C=jc(e);S&&!qc(S,C)&&n(),S=C,E=requestAnimationFrame(_)}return n(),()=>{var C;l.forEach(v=>{i&&v.removeEventListener("scroll",n),a&&v.removeEventListener("resize",n)}),f==null||f(),(C=h)==null||C.disconnect(),h=null,o&&cancelAnimationFrame(E)}}var Fa=x.useLayoutEffect,F0=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Jr=function(){};function P0(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function M0(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=[].concat(r);if(t&&e)for(var s in t)t.hasOwnProperty(s)&&t[s]&&a.push("".concat(P0(e,s)));return a.filter(function(u){return u}).map(function(u){return String(u).trim()}).join(" ")}var Zr=function(t){return G0(t)?t.filter(Boolean):Et(t)==="object"&&t!==null?[t]:[]},Vc=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=We(t,F0);return j({},n)},he=function(t,n,r){var i=t.cx,a=t.getStyles,s=t.getClassNames,u=t.className;return{css:a(n,t),className:i(r??{},s(n,t),u)}};function N0(e,t,n){if(n){var r=n(e,t);if(typeof r=="string")return r}return e}function Xr(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function k0(e){return Xr(e)?window.innerHeight:e.clientHeight}function Rc(e){return Xr(e)?window.pageYOffset:e.scrollTop}function ei(e,t){if(Xr(e)){window.scrollTo(0,t);return}e.scrollTop=t}function A0(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function L0(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function ti(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Jr,i=Rc(e),a=t-i,s=10,u=0;function o(){u+=s;var c=L0(u,i,a,n);ei(e,c),u<n?window.requestAnimationFrame(o):r(e)}o()}function Bc(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?ei(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&ei(e,Math.max(t.offsetTop-i,0))}function j0(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Gc(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function q0(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Uc=!1,V0={get passive(){return Uc=!0}},ni=typeof window<"u"?window:{};ni.addEventListener&&ni.removeEventListener&&(ni.addEventListener("p",Jr,V0),ni.removeEventListener("p",Jr,!1));var R0=Uc;function B0(e){return e!=null}function G0(e){return Array.isArray(e)}function qn(e,t,n){return e?t:n}function uC(e){return e}function cC(e){return e}var U0=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a=Object.entries(t).filter(function(s){var u=De(s,1),o=u[0];return!r.includes(o)});return a.reduce(function(s,u){var o=De(u,2),c=o[0],l=o[1];return s[c]=l,s},{})},H0=["children","innerProps"],z0=["children","innerProps"];function W0(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,a=e.shouldScroll,s=e.isFixedPosition,u=e.controlHeight,o=A0(n),c={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return c;var l=o.getBoundingClientRect(),f=l.height,I=n.getBoundingClientRect(),h=I.bottom,E=I.height,S=I.top,_=n.offsetParent.getBoundingClientRect(),C=_.top,v=s?window.innerHeight:k0(o),O=Rc(o),w=parseInt(getComputedStyle(n).marginBottom,10),b=parseInt(getComputedStyle(n).marginTop,10),y=C-b,p=v-S,D=y+O,T=f-O-S,F=h-v+O+w,q=O+S-b,U=160;switch(i){case"auto":case"bottom":if(p>=E)return{placement:"bottom",maxHeight:t};if(T>=E&&!s)return a&&ti(o,F,U),{placement:"bottom",maxHeight:t};if(!s&&T>=r||s&&p>=r){a&&ti(o,F,U);var ne=s?p-w:T-w;return{placement:"bottom",maxHeight:ne}}if(i==="auto"||s){var X=t,$=s?y:D;return $>=r&&(X=Math.min($-w-u,t)),{placement:"top",maxHeight:X}}if(i==="bottom")return a&&ei(o,F),{placement:"bottom",maxHeight:t};break;case"top":if(y>=E)return{placement:"top",maxHeight:t};if(D>=E&&!s)return a&&ti(o,q,U),{placement:"top",maxHeight:t};if(!s&&D>=r||s&&y>=r){var P=t;return(!s&&D>=r||s&&y>=r)&&(P=s?y-b:D-b),a&&ti(o,q,U),{placement:"top",maxHeight:P}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function Q0(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var Hc=function(t){return t==="auto"?"bottom":t},Y0=function(t,n){var r,i=t.placement,a=t.theme,s=a.borderRadius,u=a.spacing,o=a.colors;return j((r={label:"menu"},Jt(r,Q0(i),"100%"),Jt(r,"position","absolute"),Jt(r,"width","100%"),Jt(r,"zIndex",1),r),n?{}:{backgroundColor:o.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:u.menuGutter,marginTop:u.menuGutter})},zc=x.createContext(null),K0=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,a=t.menuPlacement,s=t.menuPosition,u=t.menuShouldScrollIntoView,o=t.theme,c=x.useContext(zc)||{},l=c.setPortalPlacement,f=x.useRef(null),I=x.useState(i),h=De(I,2),E=h[0],S=h[1],_=x.useState(null),C=De(_,2),v=C[0],O=C[1],w=o.spacing.controlHeight;return Fa(function(){var b=f.current;if(b){var y=s==="fixed",p=u&&!y,D=W0({maxHeight:i,menuEl:b,minHeight:r,placement:a,shouldScroll:p,isFixedPosition:y,controlHeight:w});S(D.maxHeight),O(D.placement),l==null||l(D.placement)}},[i,a,s,u,r,l,w]),n({ref:f,placerProps:j(j({},t),{},{placement:v||Hc(a),maxHeight:E})})},J0=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return V("div",B({},he(t,"menu",{menu:!0}),{ref:r},i),n)},Z0=J0,X0=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return j({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},e1=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,a=t.isMulti;return V("div",B({},he(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:i},r),n)},Wc=function(t,n){var r=t.theme,i=r.spacing.baseUnit,a=r.colors;return j({textAlign:"center"},n?{}:{color:a.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},t1=Wc,n1=Wc,r1=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,a=We(t,H0);return V("div",B({},he(j(j({},a),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},i1=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,a=We(t,z0);return V("div",B({},he(j(j({},a),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},a1=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},s1=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,a=t.innerProps,s=t.menuPlacement,u=t.menuPosition,o=x.useRef(null),c=x.useRef(null),l=x.useState(Hc(s)),f=De(l,2),I=f[0],h=f[1],E=x.useMemo(function(){return{setPortalPlacement:h}},[]),S=x.useState(null),_=De(S,2),C=_[0],v=_[1],O=x.useCallback(function(){if(i){var p=j0(i),D=u==="fixed"?0:window.pageYOffset,T=p[I]+D;(T!==(C==null?void 0:C.offset)||p.left!==(C==null?void 0:C.rect.left)||p.width!==(C==null?void 0:C.rect.width))&&v({offset:T,rect:p})}},[i,u,I,C==null?void 0:C.offset,C==null?void 0:C.rect.left,C==null?void 0:C.rect.width]);Fa(function(){O()},[O]);var w=x.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&o.current&&(c.current=$0(i,o.current,O,{elementResize:"ResizeObserver"in window}))},[i,O]);Fa(function(){w()},[w]);var b=x.useCallback(function(p){o.current=p,w()},[w]);if(!n&&u!=="fixed"||!C)return null;var y=V("div",B({ref:b},he(j(j({},t),{},{offset:C.offset,position:u,rect:C.rect}),"menuPortal",{"menu-portal":!0}),a),r);return V(zc.Provider,{value:E},n?Jl.createPortal(y,n):y)},o1=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},u1=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,a=t.isRtl;return V("div",B({},he(t,"container",{"--is-disabled":i,"--is-rtl":a}),r),n)},c1=function(t,n){var r=t.theme.spacing,i=t.isMulti,a=t.hasValue,s=t.selectProps.controlShouldRenderValue;return j({alignItems:"center",display:i&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},l1=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,a=t.hasValue;return V("div",B({},he(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":a}),r),n)},d1=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},f1=function(t){var n=t.children,r=t.innerProps;return V("div",B({},he(t,"indicatorsContainer",{indicators:!0}),r),n)},Qc,p1=["size"],m1=["innerProps","isRtl","size"],g1={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Yc=function(t){var n=t.size,r=We(t,p1);return V("svg",B({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:g1},r))},Pa=function(t){return V(Yc,B({size:20},t),V("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Kc=function(t){return V(Yc,B({size:20},t),V("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Jc=function(t,n){var r=t.isFocused,i=t.theme,a=i.spacing.baseUnit,s=i.colors;return j({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?s.neutral60:s.neutral20,padding:a*2,":hover":{color:r?s.neutral80:s.neutral40}})},h1=Jc,v1=function(t){var n=t.children,r=t.innerProps;return V("div",B({},he(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||V(Kc,null))},S1=Jc,y1=function(t){var n=t.children,r=t.innerProps;return V("div",B({},he(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||V(Pa,null))},b1=function(t,n){var r=t.isDisabled,i=t.theme,a=i.spacing.baseUnit,s=i.colors;return j({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},I1=function(t){var n=t.innerProps;return V("span",B({},n,he(t,"indicatorSeparator",{"indicator-separator":!0})))},_1=l0(Qc||(Qc=g0([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),O1=function(t,n){var r=t.isFocused,i=t.size,a=t.theme,s=a.colors,u=a.spacing.baseUnit;return j({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?s.neutral60:s.neutral20,padding:u*2})},Ma=function(t){var n=t.delay,r=t.offset;return V("span",{css:Ea({animation:"".concat(_1," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},C1=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,a=i===void 0?4:i,s=We(t,m1);return V("div",B({},he(j(j({},s),{},{innerProps:n,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),V(Ma,{delay:0,offset:r}),V(Ma,{delay:160,offset:!0}),V(Ma,{delay:320,offset:!r}))},D1=function(t,n){var r=t.isDisabled,i=t.isFocused,a=t.theme,s=a.colors,u=a.borderRadius,o=a.spacing;return j({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:o.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:i?s.primary:s.neutral20,borderRadius:u,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:i?s.primary:s.neutral30}})},E1=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,a=t.innerRef,s=t.innerProps,u=t.menuIsOpen;return V("div",B({ref:a},he(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":u}),s,{"aria-disabled":r||void 0}),n)},w1=E1,T1=["data"],x1=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},$1=function(t){var n=t.children,r=t.cx,i=t.getStyles,a=t.getClassNames,s=t.Heading,u=t.headingProps,o=t.innerProps,c=t.label,l=t.theme,f=t.selectProps;return V("div",B({},he(t,"group",{group:!0}),o),V(s,B({},u,{selectProps:f,theme:l,getStyles:i,getClassNames:a,cx:r}),c),V("div",null,n))},F1=function(t,n){var r=t.theme,i=r.colors,a=r.spacing;return j({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},P1=function(t){var n=Vc(t);n.data;var r=We(n,T1);return V("div",B({},he(t,"groupHeading",{"group-heading":!0}),r))},M1=$1,N1=["innerRef","isDisabled","isHidden","inputClassName"],k1=function(t,n){var r=t.isDisabled,i=t.value,a=t.theme,s=a.spacing,u=a.colors;return j(j({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},A1),n?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:u.neutral80})},Zc={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},A1={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":j({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Zc)},L1=function(t){return j({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Zc)},j1=function(t){var n=t.cx,r=t.value,i=Vc(t),a=i.innerRef,s=i.isDisabled,u=i.isHidden,o=i.inputClassName,c=We(i,N1);return V("div",B({},he(t,"input",{"input-container":!0}),{"data-value":r||""}),V("input",B({className:n({input:!0},o),ref:a,style:L1(u),disabled:s},c)))},q1=j1,V1=function(t,n){var r=t.theme,i=r.spacing,a=r.borderRadius,s=r.colors;return j({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:i.baseUnit/2})},R1=function(t,n){var r=t.theme,i=r.borderRadius,a=r.colors,s=t.cropWithEllipsis;return j({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},B1=function(t,n){var r=t.theme,i=r.spacing,a=r.borderRadius,s=r.colors,u=t.isFocused;return j({alignItems:"center",display:"flex"},n?{}:{borderRadius:a/2,backgroundColor:u?s.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Xc=function(t){var n=t.children,r=t.innerProps;return V("div",r,n)},G1=Xc,U1=Xc;function H1(e){var t=e.children,n=e.innerProps;return V("div",B({role:"button"},n),t||V(Pa,{size:14}))}var z1=function(t){var n=t.children,r=t.components,i=t.data,a=t.innerProps,s=t.isDisabled,u=t.removeProps,o=t.selectProps,c=r.Container,l=r.Label,f=r.Remove;return V(c,{data:i,innerProps:j(j({},he(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:o},V(l,{data:i,innerProps:j({},he(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:o},n),V(f,{data:i,innerProps:j(j({},he(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},u),selectProps:o}))},W1=z1,Q1=function(t,n){var r=t.isDisabled,i=t.isFocused,a=t.isSelected,s=t.theme,u=s.spacing,o=s.colors;return j({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:a?o.primary:i?o.primary25:"transparent",color:r?o.neutral20:a?o.neutral0:"inherit",padding:"".concat(u.baseUnit*2,"px ").concat(u.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?o.primary:o.primary50}})},Y1=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,a=t.isSelected,s=t.innerRef,u=t.innerProps;return V("div",B({},he(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":a}),{ref:s,"aria-disabled":r},u),n)},K1=Y1,J1=function(t,n){var r=t.theme,i=r.spacing,a=r.colors;return j({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:a.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},Z1=function(t){var n=t.children,r=t.innerProps;return V("div",B({},he(t,"placeholder",{placeholder:!0}),r),n)},X1=Z1,eI=function(t,n){var r=t.isDisabled,i=t.theme,a=i.spacing,s=i.colors;return j({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},tI=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return V("div",B({},he(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},nI=tI,rI={ClearIndicator:y1,Control:w1,DropdownIndicator:v1,DownChevron:Kc,CrossIcon:Pa,Group:M1,GroupHeading:P1,IndicatorsContainer:f1,IndicatorSeparator:I1,Input:q1,LoadingIndicator:C1,Menu:Z0,MenuList:e1,MenuPortal:s1,LoadingMessage:i1,NoOptionsMessage:r1,MultiValue:W1,MultiValueContainer:G1,MultiValueLabel:U1,MultiValueRemove:H1,Option:K1,Placeholder:X1,SelectContainer:u1,SingleValue:nI,ValueContainer:l1},iI=function(t){return j(j({},rI),t.components)},el=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function aI(e,t){return!!(e===t||el(e)&&el(t))}function sI(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!aI(e[n],t[n]))return!1;return!0}function oI(e,t){t===void 0&&(t=sI);var n=null;function r(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var s=e.apply(this,i);return n={lastResult:s,lastArgs:i,lastThis:this},s}return r.clear=function(){n=null},r}for(var uI={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},cI=function(t){return V("span",B({css:uI},t))},tl=cI,lI={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,a=t.context,s=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,a=t.labels,s=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,a=t.label,s=a===void 0?"":a,u=t.selectValue,o=t.isDisabled,c=t.isSelected,l=t.isAppleDevice,f=function(S,_){return S&&S.length?"".concat(S.indexOf(_)+1," of ").concat(S.length):""};if(n==="value"&&u)return"value ".concat(s," focused, ").concat(f(u,r),".");if(n==="menu"&&l){var I=o?" disabled":"",h="".concat(c?" selected":"").concat(I);return"".concat(s).concat(h,", ").concat(f(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},dI=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,a=t.focusableOptions,s=t.isFocused,u=t.selectValue,o=t.selectProps,c=t.id,l=t.isAppleDevice,f=o.ariaLiveMessages,I=o.getOptionLabel,h=o.inputValue,E=o.isMulti,S=o.isOptionDisabled,_=o.isSearchable,C=o.menuIsOpen,v=o.options,O=o.screenReaderStatus,w=o.tabSelectsValue,b=o.isLoading,y=o["aria-label"],p=o["aria-live"],D=x.useMemo(function(){return j(j({},lI),f||{})},[f]),T=x.useMemo(function(){var $="";if(n&&D.onChange){var P=n.option,N=n.options,L=n.removedValue,ee=n.removedValues,le=n.value,M=function(oe){return Array.isArray(oe)?null:oe},A=L||P||M(le),H=A?I(A):"",G=N||ee||void 0,W=G?G.map(I):[],J=j({isDisabled:A&&S(A,u),label:H,labels:W},n);$=D.onChange(J)}return $},[n,D,S,u,I]),F=x.useMemo(function(){var $="",P=r||i,N=!!(r&&u&&u.includes(r));if(P&&D.onFocus){var L={focused:P,label:I(P),isDisabled:S(P,u),isSelected:N,options:a,context:P===r?"menu":"value",selectValue:u,isAppleDevice:l};$=D.onFocus(L)}return $},[r,i,I,S,D,a,u,l]),q=x.useMemo(function(){var $="";if(C&&v.length&&!b&&D.onFilter){var P=O({count:a.length});$=D.onFilter({inputValue:h,resultsMessage:P})}return $},[a,h,C,D,v,O,b]),U=(n==null?void 0:n.action)==="initial-input-focus",ne=x.useMemo(function(){var $="";if(D.guidance){var P=i?"value":C?"menu":"input";$=D.guidance({"aria-label":y,context:P,isDisabled:r&&S(r,u),isMulti:E,isSearchable:_,tabSelectsValue:w,isInitialFocus:U})}return $},[y,r,i,E,S,_,C,D,u,w,U]),X=V(x.Fragment,null,V("span",{id:"aria-selection"},T),V("span",{id:"aria-focused"},F),V("span",{id:"aria-results"},q),V("span",{id:"aria-guidance"},ne));return V(x.Fragment,null,V(tl,{id:c},U&&X),V(tl,{"aria-live":p,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!U&&X))},fI=dI,Na=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],pI=new RegExp("["+Na.map(function(e){return e.letters}).join("")+"]","g"),nl={},ka=0;ka<Na.length;ka++)for(var Aa=Na[ka],La=0;La<Aa.letters.length;La++)nl[Aa.letters[La]]=Aa.base;var rl=function(t){return t.replace(pI,function(n){return nl[n]})},mI=oI(rl),il=function(t){return t.replace(/^\s+|\s+$/g,"")},gI=function(t){return"".concat(t.label," ").concat(t.value)},hI=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=j({ignoreCase:!0,ignoreAccents:!0,stringify:gI,trim:!0,matchFrom:"any"},t),a=i.ignoreCase,s=i.ignoreAccents,u=i.stringify,o=i.trim,c=i.matchFrom,l=o?il(r):r,f=o?il(u(n)):u(n);return a&&(l=l.toLowerCase(),f=f.toLowerCase()),s&&(l=mI(l),f=rl(f)),c==="start"?f.substr(0,l.length)===l:f.indexOf(l)>-1}},vI=["innerRef"];function SI(e){var t=e.innerRef,n=We(e,vI),r=U0(n,"onExited","in","enter","exit","appear");return V("input",B({ref:t},r,{css:Ea({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var yI=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function bI(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,a=e.onTopLeave,s=x.useRef(!1),u=x.useRef(!1),o=x.useRef(0),c=x.useRef(null),l=x.useCallback(function(_,C){if(c.current!==null){var v=c.current,O=v.scrollTop,w=v.scrollHeight,b=v.clientHeight,y=c.current,p=C>0,D=w-b-O,T=!1;D>C&&s.current&&(r&&r(_),s.current=!1),p&&u.current&&(a&&a(_),u.current=!1),p&&C>D?(n&&!s.current&&n(_),y.scrollTop=w,T=!0,s.current=!0):!p&&-C>O&&(i&&!u.current&&i(_),y.scrollTop=0,T=!0,u.current=!0),T&&yI(_)}},[n,r,i,a]),f=x.useCallback(function(_){l(_,_.deltaY)},[l]),I=x.useCallback(function(_){o.current=_.changedTouches[0].clientY},[]),h=x.useCallback(function(_){var C=o.current-_.changedTouches[0].clientY;l(_,C)},[l]),E=x.useCallback(function(_){if(_){var C=R0?{passive:!1}:!1;_.addEventListener("wheel",f,C),_.addEventListener("touchstart",I,C),_.addEventListener("touchmove",h,C)}},[h,I,f]),S=x.useCallback(function(_){_&&(_.removeEventListener("wheel",f,!1),_.removeEventListener("touchstart",I,!1),_.removeEventListener("touchmove",h,!1))},[h,I,f]);return x.useEffect(function(){if(t){var _=c.current;return E(_),function(){S(_)}}},[t,E,S]),function(_){c.current=_}}var al=["boxSizing","height","overflow","paddingRight","position"],sl={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function ol(e){e.cancelable&&e.preventDefault()}function ul(e){e.stopPropagation()}function cl(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function ll(){return"ontouchstart"in window||navigator.maxTouchPoints}var dl=!!(typeof window<"u"&&window.document&&window.document.createElement),Vn=0,nn={capture:!1,passive:!1};function II(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=x.useRef({}),a=x.useRef(null),s=x.useCallback(function(o){if(dl){var c=document.body,l=c&&c.style;if(r&&al.forEach(function(E){var S=l&&l[E];i.current[E]=S}),r&&Vn<1){var f=parseInt(i.current.paddingRight,10)||0,I=document.body?document.body.clientWidth:0,h=window.innerWidth-I+f||0;Object.keys(sl).forEach(function(E){var S=sl[E];l&&(l[E]=S)}),l&&(l.paddingRight="".concat(h,"px"))}c&&ll()&&(c.addEventListener("touchmove",ol,nn),o&&(o.addEventListener("touchstart",cl,nn),o.addEventListener("touchmove",ul,nn))),Vn+=1}},[r]),u=x.useCallback(function(o){if(dl){var c=document.body,l=c&&c.style;Vn=Math.max(Vn-1,0),r&&Vn<1&&al.forEach(function(f){var I=i.current[f];l&&(l[f]=I)}),c&&ll()&&(c.removeEventListener("touchmove",ol,nn),o&&(o.removeEventListener("touchstart",cl,nn),o.removeEventListener("touchmove",ul,nn)))}},[r]);return x.useEffect(function(){if(t){var o=a.current;return s(o),function(){u(o)}}},[t,s,u]),function(o){a.current=o}}var _I=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},OI={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function CI(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,a=e.onBottomArrive,s=e.onBottomLeave,u=e.onTopArrive,o=e.onTopLeave,c=bI({isEnabled:i,onBottomArrive:a,onBottomLeave:s,onTopArrive:u,onTopLeave:o}),l=II({isEnabled:n}),f=function(h){c(h),l(h)};return V(x.Fragment,null,n&&V("div",{onClick:_I,css:OI}),t(f))}var DI={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},EI=function(t){var n=t.name,r=t.onFocus;return V("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:DI,value:"",onChange:function(){}})},wI=EI;function ja(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function TI(){return ja(/^iPhone/i)}function fl(){return ja(/^Mac/i)}function xI(){return ja(/^iPad/i)||fl()&&navigator.maxTouchPoints>1}function $I(){return TI()||xI()}function FI(){return fl()||$I()}var PI=function(t){return t.label},pl=function(t){return t.label},ml=function(t){return t.value},MI=function(t){return!!t.isDisabled},NI={clearIndicator:S1,container:o1,control:D1,dropdownIndicator:h1,group:x1,groupHeading:F1,indicatorsContainer:d1,indicatorSeparator:b1,input:k1,loadingIndicator:O1,loadingMessage:n1,menu:Y0,menuList:X0,menuPortal:a1,multiValue:V1,multiValueLabel:R1,multiValueRemove:B1,noOptionsMessage:t1,option:Q1,placeholder:J1,singleValue:eI,valueContainer:c1},kI={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},AI=4,gl=4,LI=38,jI=gl*2,qI={baseUnit:gl,controlHeight:LI,menuGutter:jI},qa={borderRadius:AI,colors:kI,spacing:qI},VI={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Gc(),captureMenuScroll:!Gc(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:hI(),formatGroupLabel:PI,getOptionLabel:pl,getOptionValue:ml,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:MI,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!q0(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function hl(e,t,n,r){var i=Il(e,t,n),a=_l(e,t,n),s=bl(e,t),u=ii(e,t);return{type:"option",data:t,isDisabled:i,isSelected:a,label:s,value:u,index:r}}function ri(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(s,u){return hl(e,s,t,u)}).filter(function(s){return yl(e,s)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var a=hl(e,n,t,r);return yl(e,a)?a:void 0}).filter(B0)}function vl(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,Zt(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function Sl(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,Zt(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function RI(e,t){return vl(ri(e,t))}function yl(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,a=t.isSelected,s=t.label,u=t.value;return(!Cl(e)||!a)&&Ol(e,{label:s,value:u,data:i},r)}function BI(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var a=t.indexOf(n);if(a>-1)return n;if(i<t.length)return t[i]}return null}function GI(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Va=function(t,n){var r,i=(r=t.find(function(a){return a.data===n}))===null||r===void 0?void 0:r.id;return i||null},bl=function(t,n){return t.getOptionLabel(n)},ii=function(t,n){return t.getOptionValue(n)};function Il(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function _l(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=ii(e,t);return n.some(function(i){return ii(e,i)===r})}function Ol(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var Cl=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},UI=1,Ra=function(e){nb(n,e);var t=ab(n);function n(r){var i;if(eb(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(o){i.controlRef=o},i.focusedOptionRef=null,i.getFocusedOptionRef=function(o){i.focusedOptionRef=o},i.menuListRef=null,i.getMenuListRef=function(o){i.menuListRef=o},i.inputRef=null,i.getInputRef=function(o){i.inputRef=o},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(o,c){var l=i.props,f=l.onChange,I=l.name;c.name=I,i.ariaOnChange(o,c),f(o,c)},i.setValue=function(o,c,l){var f=i.props,I=f.closeMenuOnSelect,h=f.isMulti,E=f.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:E}),I&&(i.setState({inputIsHiddenAfterUpdate:!h}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(o,{action:c,option:l})},i.selectOption=function(o){var c=i.props,l=c.blurInputOnSelect,f=c.isMulti,I=c.name,h=i.state.selectValue,E=f&&i.isOptionSelected(o,h),S=i.isOptionDisabled(o,h);if(E){var _=i.getOptionValue(o);i.setValue(h.filter(function(C){return i.getOptionValue(C)!==_}),"deselect-option",o)}else if(!S)f?i.setValue([].concat(Zt(h),[o]),"select-option",o):i.setValue(o,"select-option");else{i.ariaOnChange(o,{action:"select-option",option:o,name:I});return}l&&i.blurInput()},i.removeValue=function(o){var c=i.props.isMulti,l=i.state.selectValue,f=i.getOptionValue(o),I=l.filter(function(E){return i.getOptionValue(E)!==f}),h=qn(c,I,I[0]||null);i.onChange(h,{action:"remove-value",removedValue:o}),i.focusInput()},i.clearValue=function(){var o=i.state.selectValue;i.onChange(qn(i.props.isMulti,[],null),{action:"clear",removedValues:o})},i.popValue=function(){var o=i.props.isMulti,c=i.state.selectValue,l=c[c.length-1],f=c.slice(0,c.length-1),I=qn(o,f,f[0]||null);l&&i.onChange(I,{action:"pop-value",removedValue:l})},i.getFocusedOptionId=function(o){return Va(i.state.focusableOptionsWithIds,o)},i.getFocusableOptionsWithIds=function(){return Sl(ri(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return M0.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(o){return bl(i.props,o)},i.getOptionValue=function(o){return ii(i.props,o)},i.getStyles=function(o,c){var l=i.props.unstyled,f=NI[o](c,l);f.boxSizing="border-box";var I=i.props.styles[o];return I?I(f,c):f},i.getClassNames=function(o,c){var l,f;return(l=(f=i.props.classNames)[o])===null||l===void 0?void 0:l.call(f,c)},i.getElementId=function(o){return"".concat(i.state.instancePrefix,"-").concat(o)},i.getComponents=function(){return iI(i.props)},i.buildCategorizedOptions=function(){return ri(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return vl(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(o,c){i.setState({ariaSelection:j({value:o},c)})},i.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(o){i.blockOptionHover=!1},i.onControlMouseDown=function(o){if(!o.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},i.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!i.props.isDisabled){var c=i.props,l=c.isMulti,f=c.menuIsOpen;i.focusInput(),f?(i.setState({inputIsHiddenAfterUpdate:!l}),i.onMenuClose()):i.openMenu("first"),o.preventDefault()}},i.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(i.clearValue(),o.preventDefault(),i.openAfterFocus=!1,o.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(o){typeof i.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&Xr(o.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(o)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(o){var c=o.touches,l=c&&c.item(0);l&&(i.initialTouchX=l.clientX,i.initialTouchY=l.clientY,i.userIsDragging=!1)},i.onTouchMove=function(o){var c=o.touches,l=c&&c.item(0);if(l){var f=Math.abs(l.clientX-i.initialTouchX),I=Math.abs(l.clientY-i.initialTouchY),h=5;i.userIsDragging=f>h||I>h}},i.onTouchEnd=function(o){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(o.target)&&i.menuListRef&&!i.menuListRef.contains(o.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(o){i.userIsDragging||i.onControlMouseDown(o)},i.onClearIndicatorTouchEnd=function(o){i.userIsDragging||i.onClearIndicatorMouseDown(o)},i.onDropdownIndicatorTouchEnd=function(o){i.userIsDragging||i.onDropdownIndicatorMouseDown(o)},i.handleInputChange=function(o){var c=i.props.inputValue,l=o.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(l,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(o){i.props.onFocus&&i.props.onFocus(o),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(o){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(o),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(o){if(!(i.blockOptionHover||i.state.focusedOption===o)){var c=i.getFocusableOptions(),l=c.indexOf(o);i.setState({focusedOption:o,focusedOptionId:l>-1?i.getFocusedOptionId(o):null})}},i.shouldHideSelectedOptions=function(){return Cl(i.props)},i.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),i.focus()},i.onKeyDown=function(o){var c=i.props,l=c.isMulti,f=c.backspaceRemovesValue,I=c.escapeClearsValue,h=c.inputValue,E=c.isClearable,S=c.isDisabled,_=c.menuIsOpen,C=c.onKeyDown,v=c.tabSelectsValue,O=c.openMenuOnFocus,w=i.state,b=w.focusedOption,y=w.focusedValue,p=w.selectValue;if(!S&&!(typeof C=="function"&&(C(o),o.defaultPrevented))){switch(i.blockOptionHover=!0,o.key){case"ArrowLeft":if(!l||h)return;i.focusValue("previous");break;case"ArrowRight":if(!l||h)return;i.focusValue("next");break;case"Delete":case"Backspace":if(h)return;if(y)i.removeValue(y);else{if(!f)return;l?i.popValue():E&&i.clearValue()}break;case"Tab":if(i.isComposing||o.shiftKey||!_||!v||!b||O&&i.isOptionSelected(b,p))return;i.selectOption(b);break;case"Enter":if(o.keyCode===229)break;if(_){if(!b||i.isComposing)return;i.selectOption(b);break}return;case"Escape":_?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:h}),i.onMenuClose()):E&&I&&i.clearValue();break;case" ":if(h)return;if(!_){i.openMenu("first");break}if(!b)return;i.selectOption(b);break;case"ArrowUp":_?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":_?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!_)return;i.focusOption("pageup");break;case"PageDown":if(!_)return;i.focusOption("pagedown");break;case"Home":if(!_)return;i.focusOption("first");break;case"End":if(!_)return;i.focusOption("last");break;default:return}o.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++UI),i.state.selectValue=Zr(r.value),r.menuIsOpen&&i.state.selectValue.length){var a=i.getFocusableOptionsWithIds(),s=i.buildFocusableOptions(),u=s.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=a,i.state.focusedOption=s[u],i.state.focusedOptionId=Va(a,s[u])}return i}return tb(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Bc(this.menuListRef,this.focusedOptionRef),FI()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var a=this.props,s=a.isDisabled,u=a.menuIsOpen,o=this.state.isFocused;(o&&!s&&i.isDisabled||o&&u&&!i.menuIsOpen)&&this.focusInput(),o&&s&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!o&&!s&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Bc(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,a){this.props.onInputChange(i,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var a=this,s=this.state,u=s.selectValue,o=s.isFocused,c=this.buildFocusableOptions(),l=i==="first"?0:c.length-1;if(!this.props.isMulti){var f=c.indexOf(u[0]);f>-1&&(l=f)}this.scrollToFocusedOptionOnUpdate=!(o&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[l],focusedOptionId:this.getFocusedOptionId(c[l])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(i){var a=this.state,s=a.selectValue,u=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var o=s.indexOf(u);u||(o=-1);var c=s.length-1,l=-1;if(s.length){switch(i){case"previous":o===0?l=0:o===-1?l=c:l=o-1;break;case"next":o>-1&&o<c&&(l=o+1);break}this.setState({inputIsHidden:l!==-1,focusedValue:s[l]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,u=this.getFocusableOptions();if(u.length){var o=0,c=u.indexOf(s);s||(c=-1),i==="up"?o=c>0?c-1:u.length-1:i==="down"?o=(c+1)%u.length:i==="pageup"?(o=c-a,o<0&&(o=0)):i==="pagedown"?(o=c+a,o>u.length-1&&(o=u.length-1)):i==="last"&&(o=u.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:u[o],focusedValue:null,focusedOptionId:this.getFocusedOptionId(u[o])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(qa):j(j({},qa),this.props.theme):qa}},{key:"getCommonProps",value:function(){var i=this.clearValue,a=this.cx,s=this.getStyles,u=this.getClassNames,o=this.getValue,c=this.selectOption,l=this.setValue,f=this.props,I=f.isMulti,h=f.isRtl,E=f.options,S=this.hasValue();return{clearValue:i,cx:a,getStyles:s,getClassNames:u,getValue:o,hasValue:S,isMulti:I,isRtl:h,options:E,selectOption:c,selectProps:f,setValue:l,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,a=i.isClearable,s=i.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(i,a){return Il(this.props,i,a)}},{key:"isOptionSelected",value:function(i,a){return _l(this.props,i,a)}},{key:"filterOption",value:function(i,a){return Ol(this.props,i,a)}},{key:"formatOptionLabel",value:function(i,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,u=this.state.selectValue;return this.props.formatOptionLabel(i,{context:a,inputValue:s,selectValue:u})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,a=i.isDisabled,s=i.isSearchable,u=i.inputId,o=i.inputValue,c=i.tabIndex,l=i.form,f=i.menuIsOpen,I=i.required,h=this.getComponents(),E=h.Input,S=this.state,_=S.inputIsHidden,C=S.ariaSelection,v=this.commonProps,O=u||this.getElementId("input"),w=j(j(j({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":I,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},f&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(C==null?void 0:C.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?K.createElement(E,B({},v,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:O,innerRef:this.getInputRef,isDisabled:a,isHidden:_,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:l,type:"text",value:o},w)):K.createElement(SI,B({id:O,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Jr,onFocus:this.onInputFocus,disabled:a,tabIndex:c,inputMode:"none",form:l,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,a=this.getComponents(),s=a.MultiValue,u=a.MultiValueContainer,o=a.MultiValueLabel,c=a.MultiValueRemove,l=a.SingleValue,f=a.Placeholder,I=this.commonProps,h=this.props,E=h.controlShouldRenderValue,S=h.isDisabled,_=h.isMulti,C=h.inputValue,v=h.placeholder,O=this.state,w=O.selectValue,b=O.focusedValue,y=O.isFocused;if(!this.hasValue()||!E)return C?null:K.createElement(f,B({},I,{key:"placeholder",isDisabled:S,isFocused:y,innerProps:{id:this.getElementId("placeholder")}}),v);if(_)return w.map(function(D,T){var F=D===b,q="".concat(i.getOptionLabel(D),"-").concat(i.getOptionValue(D));return K.createElement(s,B({},I,{components:{Container:u,Label:o,Remove:c},isFocused:F,isDisabled:S,key:q,index:T,removeProps:{onClick:function(){return i.removeValue(D)},onTouchEnd:function(){return i.removeValue(D)},onMouseDown:function(ne){ne.preventDefault()}},data:D}),i.formatOptionLabel(D,"value"))});if(C)return null;var p=w[0];return K.createElement(l,B({},I,{data:p,isDisabled:S}),this.formatOptionLabel(p,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),a=i.ClearIndicator,s=this.commonProps,u=this.props,o=u.isDisabled,c=u.isLoading,l=this.state.isFocused;if(!this.isClearable()||!a||o||!this.hasValue()||c)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return K.createElement(a,B({},s,{innerProps:f,isFocused:l}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),a=i.LoadingIndicator,s=this.commonProps,u=this.props,o=u.isDisabled,c=u.isLoading,l=this.state.isFocused;if(!a||!c)return null;var f={"aria-hidden":"true"};return K.createElement(a,B({},s,{innerProps:f,isDisabled:o,isFocused:l}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),a=i.DropdownIndicator,s=i.IndicatorSeparator;if(!a||!s)return null;var u=this.commonProps,o=this.props.isDisabled,c=this.state.isFocused;return K.createElement(s,B({},u,{isDisabled:o,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),a=i.DropdownIndicator;if(!a)return null;var s=this.commonProps,u=this.props.isDisabled,o=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return K.createElement(a,B({},s,{innerProps:c,isDisabled:u,isFocused:o}))}},{key:"renderMenu",value:function(){var i=this,a=this.getComponents(),s=a.Group,u=a.GroupHeading,o=a.Menu,c=a.MenuList,l=a.MenuPortal,f=a.LoadingMessage,I=a.NoOptionsMessage,h=a.Option,E=this.commonProps,S=this.state.focusedOption,_=this.props,C=_.captureMenuScroll,v=_.inputValue,O=_.isLoading,w=_.loadingMessage,b=_.minMenuHeight,y=_.maxMenuHeight,p=_.menuIsOpen,D=_.menuPlacement,T=_.menuPosition,F=_.menuPortalTarget,q=_.menuShouldBlockScroll,U=_.menuShouldScrollIntoView,ne=_.noOptionsMessage,X=_.onMenuScrollToTop,$=_.onMenuScrollToBottom;if(!p)return null;var P=function(H,G){var W=H.type,J=H.data,R=H.isDisabled,oe=H.isSelected,Me=H.label,Be=H.value,an=S===J,xt=R?void 0:function(){return i.onOptionHover(J)},Ja=R?void 0:function(){return i.selectOption(J)},ui="".concat(i.getElementId("option"),"-").concat(G),zn={id:ui,onClick:Ja,onMouseMove:xt,onMouseOver:xt,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:oe};return K.createElement(h,B({},E,{innerProps:zn,data:J,isDisabled:R,isSelected:oe,key:ui,label:Me,type:W,value:Be,isFocused:an,innerRef:an?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(H.data,"menu"))},N;if(this.hasOptions())N=this.getCategorizedOptions().map(function(A){if(A.type==="group"){var H=A.data,G=A.options,W=A.index,J="".concat(i.getElementId("group"),"-").concat(W),R="".concat(J,"-heading");return K.createElement(s,B({},E,{key:J,data:H,options:G,Heading:u,headingProps:{id:R,data:A.data},label:i.formatGroupLabel(A.data)}),A.options.map(function(oe){return P(oe,"".concat(W,"-").concat(oe.index))}))}else if(A.type==="option")return P(A,"".concat(A.index))});else if(O){var L=w({inputValue:v});if(L===null)return null;N=K.createElement(f,E,L)}else{var ee=ne({inputValue:v});if(ee===null)return null;N=K.createElement(I,E,ee)}var le={minMenuHeight:b,maxMenuHeight:y,menuPlacement:D,menuPosition:T,menuShouldScrollIntoView:U},M=K.createElement(K0,B({},E,le),function(A){var H=A.ref,G=A.placerProps,W=G.placement,J=G.maxHeight;return K.createElement(o,B({},E,le,{innerRef:H,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:O,placement:W}),K.createElement(CI,{captureEnabled:C,onTopArrive:X,onBottomArrive:$,lockEnabled:q},function(R){return K.createElement(c,B({},E,{innerRef:function(Me){i.getMenuListRef(Me),R(Me)},innerProps:{role:"listbox","aria-multiselectable":E.isMulti,id:i.getElementId("listbox")},isLoading:O,maxHeight:J,focusedOption:S}),N)}))});return F||T==="fixed"?K.createElement(l,B({},E,{appendTo:F,controlElement:this.controlRef,menuPlacement:D,menuPosition:T}),M):M}},{key:"renderFormField",value:function(){var i=this,a=this.props,s=a.delimiter,u=a.isDisabled,o=a.isMulti,c=a.name,l=a.required,f=this.state.selectValue;if(l&&!this.hasValue()&&!u)return K.createElement(wI,{name:c,onFocus:this.onValueInputFocus});if(!(!c||u))if(o)if(s){var I=f.map(function(S){return i.getOptionValue(S)}).join(s);return K.createElement("input",{name:c,type:"hidden",value:I})}else{var h=f.length>0?f.map(function(S,_){return K.createElement("input",{key:"i-".concat(_),name:c,type:"hidden",value:i.getOptionValue(S)})}):K.createElement("input",{name:c,type:"hidden",value:""});return K.createElement("div",null,h)}else{var E=f[0]?this.getOptionValue(f[0]):"";return K.createElement("input",{name:c,type:"hidden",value:E})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,a=this.state,s=a.ariaSelection,u=a.focusedOption,o=a.focusedValue,c=a.isFocused,l=a.selectValue,f=this.getFocusableOptions();return K.createElement(fI,B({},i,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:u,focusedValue:o,isFocused:c,selectValue:l,focusableOptions:f,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),a=i.Control,s=i.IndicatorsContainer,u=i.SelectContainer,o=i.ValueContainer,c=this.props,l=c.className,f=c.id,I=c.isDisabled,h=c.menuIsOpen,E=this.state.isFocused,S=this.commonProps=this.getCommonProps();return K.createElement(u,B({},S,{className:l,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:I,isFocused:E}),this.renderLiveRegion(),K.createElement(a,B({},S,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:I,isFocused:E,menuIsOpen:h}),K.createElement(o,B({},S,{isDisabled:I}),this.renderPlaceholderOrValue(),this.renderInput()),K.createElement(s,B({},S,{isDisabled:I}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,a){var s=a.prevProps,u=a.clearFocusValueOnUpdate,o=a.inputIsHiddenAfterUpdate,c=a.ariaSelection,l=a.isFocused,f=a.prevWasFocused,I=a.instancePrefix,h=i.options,E=i.value,S=i.menuIsOpen,_=i.inputValue,C=i.isMulti,v=Zr(E),O={};if(s&&(E!==s.value||h!==s.options||S!==s.menuIsOpen||_!==s.inputValue)){var w=S?RI(i,v):[],b=S?Sl(ri(i,v),"".concat(I,"-option")):[],y=u?BI(a,v):null,p=GI(a,w),D=Va(b,p);O={selectValue:v,focusedOption:p,focusedOptionId:D,focusableOptionsWithIds:b,focusedValue:y,clearFocusValueOnUpdate:!1}}var T=o!=null&&i!==s?{inputIsHidden:o,inputIsHiddenAfterUpdate:void 0}:{},F=c,q=l&&f;return l&&!q&&(F={value:qn(C,v,v[0]||null),options:v,action:"initial-input-focus"},q=!f),(c==null?void 0:c.action)==="initial-input-focus"&&(F=null),j(j(j({},O),T),{},{prevProps:i,ariaSelection:F,prevWasFocused:q})}}]),n}(x.Component);Ra.defaultProps=VI;var HI=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Dl(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,a=e.defaultValue,s=a===void 0?null:a,u=e.inputValue,o=e.menuIsOpen,c=e.onChange,l=e.onInputChange,f=e.onMenuClose,I=e.onMenuOpen,h=e.value,E=We(e,HI),S=x.useState(u!==void 0?u:n),_=De(S,2),C=_[0],v=_[1],O=x.useState(o!==void 0?o:i),w=De(O,2),b=w[0],y=w[1],p=x.useState(h!==void 0?h:s),D=De(p,2),T=D[0],F=D[1],q=x.useCallback(function(L,ee){typeof c=="function"&&c(L,ee),F(L)},[c]),U=x.useCallback(function(L,ee){var le;typeof l=="function"&&(le=l(L,ee)),v(le!==void 0?le:L)},[l]),ne=x.useCallback(function(){typeof I=="function"&&I(),y(!0)},[I]),X=x.useCallback(function(){typeof f=="function"&&f(),y(!1)},[f]),$=u!==void 0?u:C,P=o!==void 0?o:b,N=h!==void 0?h:T;return j(j({},E),{},{inputValue:$,menuIsOpen:P,onChange:q,onInputChange:U,onMenuClose:X,onMenuOpen:ne,value:N})}var zI=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function El(e){var t=e.defaultOptions,n=t===void 0?!1:t,r=e.cacheOptions,i=r===void 0?!1:r,a=e.loadOptions;e.options;var s=e.isLoading,u=s===void 0?!1:s,o=e.onInputChange,c=e.filterOption,l=c===void 0?null:c,f=We(e,zI),I=f.inputValue,h=x.useRef(void 0),E=x.useRef(!1),S=x.useState(Array.isArray(n)?n:void 0),_=De(S,2),C=_[0],v=_[1],O=x.useState(typeof I<"u"?I:""),w=De(O,2),b=w[0],y=w[1],p=x.useState(n===!0),D=De(p,2),T=D[0],F=D[1],q=x.useState(void 0),U=De(q,2),ne=U[0],X=U[1],$=x.useState([]),P=De($,2),N=P[0],L=P[1],ee=x.useState(!1),le=De(ee,2),M=le[0],A=le[1],H=x.useState({}),G=De(H,2),W=G[0],J=G[1],R=x.useState(void 0),oe=De(R,2),Me=oe[0],Be=oe[1],an=x.useState(void 0),xt=De(an,2),Ja=xt[0],ui=xt[1];i!==Ja&&(J({}),ui(i)),n!==Me&&(v(Array.isArray(n)?n:void 0),Be(n)),x.useEffect(function(){return E.current=!0,function(){E.current=!1}},[]);var zn=x.useCallback(function(Wn,sn){if(!a)return sn();var Re=a(Wn,sn);Re&&typeof Re.then=="function"&&Re.then(sn,function(){return sn()})},[a]);x.useEffect(function(){n===!0&&zn(b,function(Wn){E.current&&(v(Wn||[]),F(!!h.current))})},[]);var YO=x.useCallback(function(Wn,sn){var Re=N0(Wn,sn,o);if(!Re){h.current=void 0,y(""),X(""),L([]),F(!1),A(!1);return}if(i&&W[Re])y(Re),X(Re),L(W[Re]),F(!1),A(!1);else{var JO=h.current={};y(Re),F(!0),A(!ne),zn(Re,function(Za){E&&JO===h.current&&(h.current=void 0,F(!1),X(Re),L(Za||[]),A(!1),J(Za?j(j({},W),{},Jt({},Re,Za)):W))})}},[i,zn,ne,W,o]),KO=M?[]:b&&ne?N:C||[];return j(j({},f),{},{options:KO,isLoading:T||u,onInputChange:YO,filterOption:l})}var WI=x.forwardRef(function(e,t){var n=El(e),r=Dl(n);return K.createElement(Ra,B({ref:t},r))}),QI=WI,YI=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],wl=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=String(t).toLowerCase(),a=String(r.getOptionValue(n)).toLowerCase(),s=String(r.getOptionLabel(n)).toLowerCase();return a===i||s===i},Ba={formatCreateLabel:function(t){return'Create "'.concat(t,'"')},isValidNewOption:function(t,n,r,i){return!(!t||n.some(function(a){return wl(t,a,i)})||r.some(function(a){return wl(t,a,i)}))},getNewOptionData:function(t,n){return{label:n,value:t,__isNew__:!0}}};function KI(e){var t=e.allowCreateWhileLoading,n=t===void 0?!1:t,r=e.createOptionPosition,i=r===void 0?"last":r,a=e.formatCreateLabel,s=a===void 0?Ba.formatCreateLabel:a,u=e.isValidNewOption,o=u===void 0?Ba.isValidNewOption:u,c=e.getNewOptionData,l=c===void 0?Ba.getNewOptionData:c,f=e.onCreateOption,I=e.options,h=I===void 0?[]:I,E=e.onChange,S=We(e,YI),_=S.getOptionValue,C=_===void 0?ml:_,v=S.getOptionLabel,O=v===void 0?pl:v,w=S.inputValue,b=S.isLoading,y=S.isMulti,p=S.value,D=S.name,T=x.useMemo(function(){return o(w,Zr(p),h,{getOptionValue:C,getOptionLabel:O})?l(w,s(w)):void 0},[s,l,O,C,w,o,h,p]),F=x.useMemo(function(){return(n||!b)&&T?i==="first"?[T].concat(Zt(h)):[].concat(Zt(h),[T]):h},[n,i,b,T,h]),q=x.useCallback(function(U,ne){if(ne.action!=="select-option")return E(U,ne);var X=Array.isArray(U)?U:[U];if(X[X.length-1]===T){if(f)f(w);else{var $=l(w,w),P={action:"create-option",name:D,option:$};E(qn(y,[].concat(Zt(Zr(p)),[$]),$),P)}return}E(U,ne)},[l,w,y,D,T,f,E,p]);return j(j({},S),{},{options:F,onChange:q})}var JI=x.forwardRef(function(e,t){var n=El(e),r=Dl(n),i=KI(r);return K.createElement(Ra,B({ref:t},i))}),ZI=JI,XI="[object Symbol]";function e_(e){return typeof e=="symbol"||Yt(e)&&zt(e)==XI}var t_=/\s/;function n_(e){for(var t=e.length;t--&&t_.test(e.charAt(t)););return t}var r_=/^\s+/;function i_(e){return e&&e.slice(0,n_(e)+1).replace(r_,"")}var Tl=NaN,a_=/^[-+]0x[0-9a-f]+$/i,s_=/^0b[01]+$/i,o_=/^0o[0-7]+$/i,u_=parseInt;function xl(e){if(typeof e=="number")return e;if(e_(e))return Tl;if(_t(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=_t(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=i_(e);var n=s_.test(e);return n||o_.test(e)?u_(e.slice(2),n?2:8):a_.test(e)?Tl:+e}var Ga=function(){return ze.Date.now()},c_="Expected a function",l_=Math.max,d_=Math.min;function f_(e,t,n){var r,i,a,s,u,o,c=0,l=!1,f=!1,I=!0;if(typeof e!="function")throw new TypeError(c_);t=xl(t)||0,_t(n)&&(l=!!n.leading,f="maxWait"in n,a=f?l_(xl(n.maxWait)||0,t):a,I="trailing"in n?!!n.trailing:I);function h(y){var p=r,D=i;return r=i=void 0,c=y,s=e.apply(D,p),s}function E(y){return c=y,u=setTimeout(C,t),l?h(y):s}function S(y){var p=y-o,D=y-c,T=t-p;return f?d_(T,a-D):T}function _(y){var p=y-o,D=y-c;return o===void 0||p>=t||p<0||f&&D>=a}function C(){var y=Ga();if(_(y))return v(y);u=setTimeout(C,S(y))}function v(y){return u=void 0,I&&r?h(y):(r=i=void 0,s)}function O(){u!==void 0&&clearTimeout(u),c=0,r=o=i=u=void 0}function w(){return u===void 0?s:v(Ga())}function b(){var y=Ga(),p=_(y);if(r=arguments,i=this,o=y,p){if(u===void 0)return E(o);if(f)return clearTimeout(u),u=setTimeout(C,t),h(o)}return u===void 0&&(u=setTimeout(C,t)),s}return b.cancel=O,b.flush=w,b}function Ua(e,t,n){const r=x.useRef(e);return r.current=e,x.useCallback(f_(function(){return r.current.apply(this,arguments)},t,n),[t,n==null?void 0:n.leading,n==null?void 0:n.trailing,n==null?void 0:n.maxWait])}const p_=e=>Array.isArray(e)?e:e?[e]:[],m_=e=>{const{selectedOptions:t,isDisabled:n=!1,creatable:r=!1,components:i,placeholder:a,showDropdown:s=!0,noOptionsMessageText:u="None"}=e,c={...e,styles:{option:l=>({...l,color:"#000"}),container:(l,f)=>({...l,zIndex:f.isFocused?10:l.zIndex}),multiValueRemove:(l,f)=>({...l,color:f.isFocused?l.color:"#333333"})},defaultOptions:!0,isClearable:!0,value:t??null,className:ct("react-select",e.className),classNamePrefix:"react-select",noOptionsMessage:()=>u,placeholder:n?"":a,components:{...i,IndicatorSeparator:()=>null,...(!s||n)&&{DropdownIndicator:()=>null},...n&&{MultiValueRemove:()=>null}}};return r?g.jsx(ZI,{...c,isDisabled:n}):g.jsx(QI,{...c})},g_=e=>{const{values:t,isMulti:n,onSelect:r,creatable:i=!1,isValidNewOption:a,getNamedObject:s,loadOptions:u}=e,[o,c]=x.useState(!1),l=Zd(),f=x.useMemo(()=>{if(n&&t)return t.map(v=>({object:v,value:v.id}));if(t!=null&&t.length)return{object:t[0],value:t[0].id}},[t,n]),I=v=>{const O=p_(v);r==null||r(O.map(w=>w.object))},h=i&&e.onCreate?async v=>{try{c(!0);const{value:O,item:w,message:b}=await e.onCreate(v),y={object:w,value:O};I(n?[...f??[],y]:y),c(!1),l.success(g.jsxs("span",{children:[b,": ",g.jsx("b",{children:v})]}))}catch(O){l.error(O)}}:void 0,E=i&&s?(v,O)=>({value:"",object:s("",O)}):void 0,S=i&&a?(v,O,w)=>a(v,w.map(b=>b.object)):void 0,C=Ua((v,O)=>{u(v).then(O)},100);return g.jsx(m_,{...e,loadOptions:C,isLoading:e.isLoading||o,onChange:I,selectedOptions:f,onCreateOption:h,getNewOptionData:E,isValidNewOption:S})};function $l(e){return{value:e.id,object:e}}function h_(e){return v_(e)!==e}function v_(e){const t=x.useRef();return x.useEffect(()=>{t.current=e},[e]),t.current}const Fl=e=>{const{error:t,message:n=g.jsx(Te.FormattedMessage,{id:"errors.header"})}=e;return g.jsx("div",{className:"ErrorMessage-container",children:g.jsxs(re.Alert,{variant:"danger",className:"ErrorMessage",children:[g.jsxs(re.Alert.Heading,{className:"ErrorMessage-header",children:[g.jsx(Xe,{icon:Se.faWarning}),n]}),g.jsx("div",{className:"ErrorMessage-content code",children:t})]})})},Pl="LoadingIndicator",S_=`${Pl}-message`,Ml=Pe("LoadingIndicator",({message:e,inline:t=!1,small:n=!1,card:r=!1})=>{const a=Te.useIntl().formatMessage({id:"loading.generic"});return g.jsxs("div",{className:ct(Pl,{inline:t,small:n,"card-based":r}),children:[g.jsx(re.Spinner,{animation:"border",role:"status",size:n?"sm":void 0,children:g.jsx("span",{className:"sr-only",children:a})}),e!==""&&g.jsx("h4",{className:S_,children:e??a})]})}),Nl=Pe("HoverPopover",({enterDelay:e=200,leaveDelay:t=200,content:n,children:r,className:i,placement:a="top",popperConfig:s,onOpen:u,onClose:o,target:c})=>{const[l,f]=x.useState(!1),[I,h]=x.useState(null),E=x.useRef(),S=x.useRef(),_=x.useRef(`hover-popover-${Math.random().toString(36).slice(2)}`),C=x.useCallback(b=>{h(b)},[]),v=x.useCallback(()=>(c==null?void 0:c.current)??I,[c,I]),O=x.useCallback(()=>{window.clearTimeout(S.current),E.current=window.setTimeout(()=>{f(!0),u==null||u()},e)},[e,u]),w=x.useCallback(()=>{window.clearTimeout(E.current),S.current=window.setTimeout(()=>{f(!1),o==null||o()},t)},[t,o]);return x.useEffect(()=>()=>{window.clearTimeout(E.current),window.clearTimeout(S.current)},[]),g.jsxs(g.Fragment,{children:[g.jsx("div",{className:i,onMouseEnter:O,onMouseLeave:w,ref:C,children:r}),v()&&g.jsx(re.Overlay,{show:l,placement:a,target:v,container:document.body,popperConfig:s,children:g.jsx(re.Popover,{onMouseEnter:O,onMouseLeave:w,id:_.current,className:"hover-popover-content",children:n})})]})});Pe("WarningHoverPopover",({children:e,...t})=>g.jsx(Nl,{...t,className:"warning-hover-popover",children:g.jsx(Xe,{icon:Se.faExclamationTriangle})}));function y_(e){return e.title?e.title:e.files&&e.files.length>0?et.fileNameFromPath(e.files[0].path):e.folder?et.fileNameFromPath(e.folder.path):""}function b_(e){return e.title?e.title:e.files&&e.files.length>0?et.fileNameFromPath(e.files[0].path):""}function Rn(e,t){t&&t.length>0&&e.push(...t)}const I_=(e,t,n)=>{if(!e.id)return"#";const r=new ie(Q.Scenes,void 0),i=new Bt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),Rn(r.criteria,n),`/scenes?${r.makeQueryParameters()}`},__=(e,t,n)=>{if(!e.id)return"#";const r=new ie(Q.Images,void 0),i=new Bt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),Rn(r.criteria,n),`/images?${r.makeQueryParameters()}`},O_=(e,t,n)=>{if(!e.id)return"#";const r=new ie(Q.Galleries,void 0),i=new Bt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),Rn(r.criteria,n),`/galleries?${r.makeQueryParameters()}`},C_=(e,t,n)=>{if(!e.id)return"#";const r=new ie(Q.Groups,void 0),i=new Bt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),Rn(r.criteria,n),`/groups?${r.makeQueryParameters()}`},D_=e=>{if(!e.id)return"#";const t=new ie(Q.SceneMarkers,void 0),n=new Bt;return n.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t.criteria.push(n),`/scenes/markers?${t.makeQueryParameters()}`},E_=e=>{if(!e.id)return"#";const t=new ie(Q.Performers,void 0),n=new ec;return n.value=`${e.country}`,t.criteria.push(n),`/performers?${t.makeQueryParameters()}`},w_=e=>{if(!e.id)return"#";const t=new ie(Q.Scenes,void 0),n=new Ut;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/scenes?${t.makeQueryParameters()}`},T_=e=>{if(!e.id)return"#";const t=new ie(Q.Images,void 0),n=new Ut;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/images?${t.makeQueryParameters()}`},x_=e=>{if(!e.id)return"#";const t=new ie(Q.Galleries,void 0),n=new Ut;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/galleries?${t.makeQueryParameters()}`},$_=e=>{if(!e.id)return"#";const t=new ie(Q.Groups,void 0),n=new Ut;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/groups?${t.makeQueryParameters()}`},F_=e=>{if(!e.id)return"#";const t=new ie(Q.Performers,void 0),n=new Ut;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/performers?${t.makeQueryParameters()}`},P_=e=>{if(!e.id)return"#";const t=new ie(Q.Studios,void 0),n=new Uo;return n.value=[{id:e.id,label:e.name||`Studio ${e.id}`}],t.criteria.push(n),`/studios?${t.makeQueryParameters()}`},M_=e=>{if(!e.id)return"#";const t=new ie(Q.Scenes,void 0),n=new Pn(Or);return n.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/scenes?${t.makeQueryParameters()}`},N_=e=>`/tags/${e}`,k_=e=>{if(!e.id)return"#";const t=new ie(Q.Tags,void 0),n=new vr(Wo);return n.value={items:[{id:e.id,label:e.name||`Tag ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/tags?${t.makeQueryParameters()}`},A_=e=>{if(!e.id)return"#";const t=new ie(Q.Tags,void 0),n=new vr(zo);return n.value={items:[{id:e.id,label:e.name||`Tag ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/tags?${t.makeQueryParameters()}`};function wt(e,t){const n=new ie(e,void 0),r=new vr(dt);return r.value={items:[{id:t.id,label:t.name||`Tag ${t.id}`}],excluded:[],depth:0},n.criteria.push(r),n.makeQueryParameters()}const L_=e=>`/scenes?${wt(Q.Scenes,e)}`,j_=e=>`/performers?${wt(Q.Performers,e)}`,q_=e=>`/studios?${wt(Q.Studios,e)}`,V_=e=>`/scenes/markers?${wt(Q.SceneMarkers,e)}`,R_=e=>`/galleries?${wt(Q.Galleries,e)}`,B_=e=>`/images?${wt(Q.Images,e)}`,G_=e=>`/groups?${wt(Q.Groups,e)}`,U_=e=>!e.id||!e.scene?"#":`/scenes/${e.scene.id}?t=${e.seconds}`,H_=e=>{if(!e)return"#";const t=new ie(Q.Scenes,void 0),n=new ua;return n.value={value:e},t.criteria.push(n),`/scenes?${t.makeQueryParameters()}`},z_=e=>{if(!e)return"#";const t=new ie(Q.Images,void 0),n=new ua;return n.value={value:e},t.criteria.push(n),`/images?${t.makeQueryParameters()}`},W_=(e,t)=>{if(!e.id)return"#";const n=new ie(Q.Images,void 0),r=new ju;return r.value=[{id:e.id,label:y_(e)}],n.criteria.push(r),Rn(n.criteria,t),`/images?${n.makeQueryParameters()}`};function ai(e,t){const n=new He(e);return n.modifier=m.Equals,n.value=t,n}const st={makePerformerScenesUrl:I_,makePerformerImagesUrl:__,makePerformerGalleriesUrl:O_,makePerformerGroupsUrl:C_,makePerformerSceneMarkersUrl:D_,makePerformersCountryUrl:E_,makeStudioScenesUrl:w_,makeStudioImagesUrl:T_,makeStudioGalleriesUrl:x_,makeStudioGroupsUrl:$_,makeStudioPerformersUrl:F_,makeTagUrl:N_,makeGroupUrl:e=>`/groups/${e}`,makeParentTagsUrl:k_,makeChildTagsUrl:A_,makeTagSceneMarkersUrl:V_,makeTagScenesUrl:L_,makeTagPerformersUrl:j_,makeTagStudiosUrl:q_,makeTagGalleriesUrl:R_,makeTagImagesUrl:B_,makeTagGroupsUrl:G_,makeScenesPHashMatchUrl:H_,makeSceneMarkerUrl:U_,makeImagesPHashMatchUrl:z_,makeGroupScenesUrl:M_,makeChildStudiosUrl:P_,makeGalleryImagesUrl:W_,makeDirectorScenesUrl:e=>{if(e.length===0)return"#";const t=new ie(Q.Scenes,void 0);return t.criteria.push(ai(te("director"),e)),`/scenes?${t.makeQueryParameters()}`},makePhotographerGalleriesUrl:e=>{if(e.length===0)return"#";const t=new ie(Q.Galleries,void 0);return t.criteria.push(ai(te("photographer"),e)),`/galleries?${t.makeQueryParameters()}`},makePhotographerImagesUrl:e=>{if(e.length===0)return"#";const t=new ie(Q.Images,void 0);return t.criteria.push(ai(te("photographer"),e)),`/images?${t.makeQueryParameters()}`},makeDirectorGroupsUrl:e=>{if(e.length===0)return"#";const t=new ie(Q.Groups,void 0);return t.criteria.push(ai(te("director"),e)),`/groups?${t.makeQueryParameters()}`},makeContainingGroupsUrl:e=>{if(!e.id)return"#";const t=new ie(Q.Groups,void 0),n=new Pn(Hu);return n.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/groups?${t.makeQueryParameters()}`},makeSubGroupsUrl:e=>{if(!e.id)return"#";const t=new ie(Q.Groups,void 0),n=new Pn(Uu);return n.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/groups?${t.makeQueryParameters()}`},makeSceneMarkersSceneUrl:e=>{if(!e.id)return"#";const t=new ie(Q.SceneMarkers,void 0),n=new Ro;return n.value=[{id:e.id,label:b_(e)}],t.criteria.push(n),`/scenes/markers?${t.makeQueryParameters()}`}},Ha="TruncatedText",Q_=`${Ha}-tooltip`,kl=Pe("TruncatedText",({text:e,className:t,lineCount:n=1,placement:r="bottom",delay:i=1e3})=>{const[a,s]=x.useState(!1),u=x.useRef(null),o=Ua(()=>s(!0),i);if(!e)return null;const c=I=>{(I.offsetWidth<I.scrollWidth||I.offsetHeight+10<I.scrollHeight)&&o()},l=()=>{o.cancel(),s(!1)},f=g.jsx(re.Overlay,{target:u.current,show:a,placement:r,children:g.jsx(re.Tooltip,{id:Ha,className:Q_,children:e})});return g.jsxs("div",{className:ct(Ha,t),style:{WebkitLineClamp:n},ref:u,onMouseEnter:I=>c(I.currentTarget),onFocus:I=>c(I.currentTarget),onMouseLeave:l,onBlur:l,children:[e,f]})}),Y_=()=>window.matchMedia("only screen and (max-width: 576px)").matches,K_=()=>window.matchMedia("(pointer: coarse)").matches;function J_(e){return window.matchMedia(e).matches}const Z_={isMobile:Y_,isTouch:K_,matchesMediaQuery:J_};var X_={exports:{}};(function(e){(function(t,n,r){if(!t)return;for(var i={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},a={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},s={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},u={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},o,c=1;c<20;++c)i[111+c]="f"+c;for(c=0;c<=9;++c)i[c+96]=c.toString();function l(p,D,T){if(p.addEventListener){p.addEventListener(D,T,!1);return}p.attachEvent("on"+D,T)}function f(p){if(p.type=="keypress"){var D=String.fromCharCode(p.which);return p.shiftKey||(D=D.toLowerCase()),D}return i[p.which]?i[p.which]:a[p.which]?a[p.which]:String.fromCharCode(p.which).toLowerCase()}function I(p,D){return p.sort().join(",")===D.sort().join(",")}function h(p){var D=[];return p.shiftKey&&D.push("shift"),p.altKey&&D.push("alt"),p.ctrlKey&&D.push("ctrl"),p.metaKey&&D.push("meta"),D}function E(p){if(p.preventDefault){p.preventDefault();return}p.returnValue=!1}function S(p){if(p.stopPropagation){p.stopPropagation();return}p.cancelBubble=!0}function _(p){return p=="shift"||p=="ctrl"||p=="alt"||p=="meta"}function C(){if(!o){o={};for(var p in i)p>95&&p<112||i.hasOwnProperty(p)&&(o[i[p]]=p)}return o}function v(p,D,T){return T||(T=C()[p]?"keydown":"keypress"),T=="keypress"&&D.length&&(T="keydown"),T}function O(p){return p==="+"?["+"]:(p=p.replace(/\+{2}/g,"+plus"),p.split("+"))}function w(p,D){var T,F,q,U=[];for(T=O(p),q=0;q<T.length;++q)F=T[q],u[F]&&(F=u[F]),D&&D!="keypress"&&s[F]&&(F=s[F],U.push("shift")),_(F)&&U.push(F);return D=v(F,U,D),{key:F,modifiers:U,action:D}}function b(p,D){return p===null||p===n?!1:p===D?!0:b(p.parentNode,D)}function y(p){var D=this;if(p=p||n,!(D instanceof y))return new y(p);D.target=p,D._callbacks={},D._directMap={};var T={},F,q=!1,U=!1,ne=!1;function X(M){M=M||{};var A=!1,H;for(H in T){if(M[H]){A=!0;continue}T[H]=0}A||(ne=!1)}function $(M,A,H,G,W,J){var R,oe,Me=[],Be=H.type;if(!D._callbacks[M])return[];for(Be=="keyup"&&_(M)&&(A=[M]),R=0;R<D._callbacks[M].length;++R)if(oe=D._callbacks[M][R],!(!G&&oe.seq&&T[oe.seq]!=oe.level)&&Be==oe.action&&(Be=="keypress"&&!H.metaKey&&!H.ctrlKey||I(A,oe.modifiers))){var an=!G&&oe.combo==W,xt=G&&oe.seq==G&&oe.level==J;(an||xt)&&D._callbacks[M].splice(R,1),Me.push(oe)}return Me}function P(M,A,H,G){D.stopCallback(A,A.target||A.srcElement,H,G)||M(A,H)===!1&&(E(A),S(A))}D._handleKey=function(M,A,H){var G=$(M,A,H),W,J={},R=0,oe=!1;for(W=0;W<G.length;++W)G[W].seq&&(R=Math.max(R,G[W].level));for(W=0;W<G.length;++W){if(G[W].seq){if(G[W].level!=R)continue;oe=!0,J[G[W].seq]=1,P(G[W].callback,H,G[W].combo,G[W].seq);continue}oe||P(G[W].callback,H,G[W].combo)}var Me=H.type=="keypress"&&U;H.type==ne&&!_(M)&&!Me&&X(J),U=oe&&H.type=="keydown"};function N(M){typeof M.which!="number"&&(M.which=M.keyCode);var A=f(M);if(A){if(M.type=="keyup"&&q===A){q=!1;return}D.handleKey(A,h(M),M)}}function L(){clearTimeout(F),F=setTimeout(X,1e3)}function ee(M,A,H,G){T[M]=0;function W(Be){return function(){ne=Be,++T[M],L()}}function J(Be){P(H,Be,M),G!=="keyup"&&(q=f(Be)),setTimeout(X,10)}for(var R=0;R<A.length;++R){var oe=R+1===A.length,Me=oe?J:W(G||w(A[R+1]).action);le(A[R],Me,G,M,R)}}function le(M,A,H,G,W){D._directMap[M+":"+H]=A,M=M.replace(/\s+/g," ");var J=M.split(" "),R;if(J.length>1){ee(M,J,A,H);return}R=w(M,H),D._callbacks[R.key]=D._callbacks[R.key]||[],$(R.key,R.modifiers,{type:R.action},G,M,W),D._callbacks[R.key][G?"unshift":"push"]({callback:A,modifiers:R.modifiers,action:R.action,seq:G,level:W,combo:M})}D._bindMultiple=function(M,A,H){for(var G=0;G<M.length;++G)le(M[G],A,H)},l(p,"keypress",N),l(p,"keydown",N),l(p,"keyup",N)}y.prototype.bind=function(p,D,T){var F=this;return p=p instanceof Array?p:[p],F._bindMultiple.call(F,p,D,T),F},y.prototype.unbind=function(p,D){var T=this;return T.bind.call(T,p,function(){},D)},y.prototype.trigger=function(p,D){var T=this;return T._directMap[p+":"+D]&&T._directMap[p+":"+D]({},p),T},y.prototype.reset=function(){var p=this;return p._callbacks={},p._directMap={},p},y.prototype.stopCallback=function(p,D){var T=this;if((" "+D.className+" ").indexOf(" mousetrap ")>-1||b(D,T.target))return!1;if("composedPath"in p&&typeof p.composedPath=="function"){var F=p.composedPath()[0];F!==p.target&&(D=F)}return D.tagName=="INPUT"||D.tagName=="SELECT"||D.tagName=="TEXTAREA"||D.isContentEditable},y.prototype.handleKey=function(){var p=this;return p._handleKey.apply(p,arguments)},y.addKeycodes=function(p){for(var D in p)p.hasOwnProperty(D)&&(i[D]=p[D]);o=null},y.init=function(){var p=y(n);for(var D in p)D.charAt(0)!=="_"&&(y[D]=function(T){return function(){return p[T].apply(p,arguments)}}(D))},y.init(),t.Mousetrap=y,e.exports&&(e.exports=y)})(typeof window<"u"?window:null,typeof window<"u"?document:null)})(X_),x.createContext(null);const eO=x.createContext(null),tO={selectable:!1,selectedIds:new Set,getSelected:()=>[],onSelectChange:()=>{},onSelectAll:()=>{},onSelectNone:()=>{},onInvertSelection:()=>{},items:[],hasSelection:!1,selectedItems:[]};function nO(){const e=x.useContext(eO);return e===null?tO:e}x.createContext(null);var Al=(e=>(e[e.BEFORE=0]="BEFORE",e[e.AFTER=1]="AFTER",e))(Al||{});function rO(e){const{selectedIds:t}=nO(),[n,r]=x.useState(!1),[i,a]=x.useState(!1),[s,u]=x.useState(),o=e.onSelectedChanged&&e.selecting,c=!!e.objectId&&e.onMove&&n,l=o||c;function f(v){if(!l){v.preventDefault();return}if(!n&&e.selecting)v.dataTransfer.setData("text/plain",""),v.dataTransfer.effectAllowed="copy",v.stopPropagation();else if(n&&e.objectId){if(t.size>1&&t.has(e.objectId)){const O=Array.from(t.values()).join(",");v.dataTransfer.setData("text/plain",O)}else a(!0),v.dataTransfer.setData("text/plain",e.objectId);v.dataTransfer.effectAllowed="move",v.stopPropagation()}}function I(v){const O=v.nativeEvent.offsetX<v.currentTarget.clientWidth/2;O&&s!==0?u(0):!O&&s!==1&&u(1)}function h(v){const O=v,w=!1;if(O.dataTransfer.effectAllowed==="copy"){if(!e.onSelectedChanged)return;e.selecting&&!e.selected&&e.onSelectedChanged(!0,w),O.dataTransfer.dropEffect="copy",O.preventDefault()}else O.dataTransfer.effectAllowed==="move"&&!i?(I(v),O.dataTransfer.dropEffect="move",O.preventDefault()):O.dataTransfer.dropEffect="none"}function E(v){v.currentTarget.contains(v.relatedTarget)||u(void 0)}function S(v){v.dataTransfer.effectAllowed!=="move"||i||(I(v),v.preventDefault())}function _(){u(void 0),a(!1)}function C(v){const O=v;if(O.dataTransfer.effectAllowed==="copy"||!e.onMove||!e.objectId)return;const w=O.dataTransfer.getData("text/plain").split(","),b=e.objectId,y=s===1;e.onMove(w,b,y),_()}return{inHandle:n,setInHandle:r,moveTarget:s,dragProps:{draggable:l||void 0,onDragStart:f,onDragEnter:h,onDragLeave:E,onDragOver:S,onDragEnd:_,onDrop:C}}}const iO=e=>g.jsx("a",{target:"_blank",rel:"noopener noreferrer",...e}),aO=({selected:e=!1,onSelectedChanged:t})=>{let n=!1;return g.jsx(re.Form.Control,{type:"checkbox",className:"card-check mousetrap",checked:e,onChange:()=>t(!e,n),onClick:r=>{n=r.shiftKey,r.stopPropagation()}})},sO=({setInHandle:e})=>{function t(){e(!0)}function n(){e(!1)}return g.jsx("span",{onMouseEnter:t,onMouseLeave:n,children:g.jsx(Xe,{className:"card-drag-handle",icon:Se.faGripLines})})},oO=({children:e})=>g.jsx("div",{className:"card-controls",children:e}),uO=({dragSide:e})=>e===void 0?null:g.jsx("div",{className:`move-target move-target-${e===Al.BEFORE?"before":"after"}`});function Ll(e){const{url:t,linkClassName:n,onClick:r,children:i}=e;return/^https?:\/\//i.test(t)?g.jsx(iO,{href:t,className:n,onClick:r,children:i}):g.jsx($t.Link,{to:t,className:n,onClick:r,children:i})}const cO=Pe("GridCard",e=>{const{setInHandle:t,moveTarget:n,dragProps:r}=rO({selecting:e.selecting||!1,selected:e.selected||!1,onSelectedChanged:e.onSelectedChanged,objectId:e.objectId,onMove:e.onMove});function i(u){const{shiftKey:o}=u;e.onSelectedChanged&&e.selecting&&(e.onSelectedChanged(!e.selected,o),u.preventDefault(),u.stopPropagation())}function a(){if(e.interactiveHeatmap)return g.jsx("img",{loading:"lazy",src:e.interactiveHeatmap,alt:"interactive heatmap",className:"interactive-heatmap"})}function s(){if(e.resumeTime&&e.duration&&e.duration>e.resumeTime){const u=100/e.duration*e.resumeTime,o=u+"%";return g.jsx("div",{title:Math.round(u)+"%",className:"progress-bar",children:g.jsx("div",{style:{width:o},className:"progress-indicator"})})}}return g.jsxs(re.Card,{className:ct(e.className,"grid-card"),onClick:i,...r,style:e.width&&!Z_.isMobile()?{width:`${e.width}px`}:{},children:[n!==void 0&&g.jsx(uO,{dragSide:n}),g.jsxs(oO,{children:[e.onSelectedChanged&&g.jsx(aO,{selected:e.selected,onSelectedChanged:e.onSelectedChanged}),!!e.objectId&&e.onMove&&g.jsx(sO,{setInHandle:t})]}),g.jsxs("div",{className:ct(e.thumbnailSectionClassName,"thumbnail-section"),children:[g.jsx(Ll,{url:e.url,linkClassName:e.linkClassName,onClick:i,children:e.image}),e.overlays,s()]}),a(),g.jsxs("div",{className:"card-section",children:[g.jsx(Ll,{url:e.url,onClick:i,children:g.jsxs("h5",{className:"card-section-title flex-aligned",children:[e.pretitleIcon,g.jsx(kl,{text:e.title,lineCount:2})]})}),e.details]}),e.popovers]})}),lO=({count:e})=>{const{configuration:t}=gi();if(!((t==null?void 0:t.ui.abbreviateCounters)??!1))return g.jsx("span",{children:e});const r=et.abbreviateCounter(e);return g.jsxs("span",{children:[g.jsx(Te.FormattedNumber,{value:r.size,maximumFractionDigits:r.digits}),r.unit]})},Tt=({className:e,url:t,type:n,count:r,showZero:i=!0})=>{const a=Te.useIntl();if(!i&&r===0)return null;function s(){switch(n){case"scene":return Se.faPlayCircle;case"image":return Se.faImage;case"gallery":return Se.faImages;case"marker":return Se.faMapMarkerAlt;case"group":case"sub_group":return Se.faFilm;case"performer":return Se.faUser;case"studio":return Se.faVideo}}function u(){switch(n){case"scene":return{one:"scene",other:"scenes"};case"image":return{one:"image",other:"images"};case"gallery":return{one:"gallery",other:"galleries"};case"marker":return{one:"marker",other:"markers"};case"group":return{one:"group",other:"groups"};case"sub_group":return{one:"sub_group",other:"sub_groups"};case"performer":return{one:"performer",other:"performers"};case"studio":return{one:"studio",other:"studios"}}}function o(){const c=a.formatPlural(r),l=u(),f=a.formatMessage({id:l[c]||l.other});return`${r} ${f}`}return g.jsx(re.OverlayTrigger,{overlay:g.jsx(re.Tooltip,{id:`${n}-count-tooltip`,children:o()}),placement:"bottom",children:g.jsx($t.Link,{className:e,to:t,children:g.jsxs(re.Button,{className:"minimal",children:[g.jsx(Xe,{icon:s()}),g.jsx(lO,{count:r})]})})})},dO=Pe("TagCard.Popovers",({tag:e})=>g.jsxs(g.Fragment,{children:[g.jsx("hr",{}),g.jsxs(re.ButtonGroup,{className:"card-popovers",children:[g.jsx(Tt,{className:"scene-count",type:"scene",count:e.scene_count,url:st.makeTagScenesUrl(e),showZero:!1}),g.jsx(Tt,{className:"image-count",type:"image",count:e.image_count,url:st.makeTagImagesUrl(e),showZero:!1}),g.jsx(Tt,{className:"gallery-count",type:"gallery",count:e.gallery_count,url:st.makeTagGalleriesUrl(e),showZero:!1}),g.jsx(Tt,{className:"group-count",type:"group",count:e.group_count,url:st.makeTagGroupsUrl(e),showZero:!1}),g.jsx(Tt,{className:"marker-count",type:"marker",count:e.scene_marker_count,url:st.makeTagSceneMarkersUrl(e),showZero:!1}),g.jsx(Tt,{className:"performer-count",type:"performer",count:e.performer_count,url:st.makeTagPerformersUrl(e),showZero:!1}),g.jsx(Tt,{className:"studio-count",type:"studio",count:e.studio_count,url:st.makeTagStudiosUrl(e),showZero:!1})]})]})),fO=Pe("TagCard.Overlays",({tag:e})=>{const[t]=Hp();function n(){return g.jsx($t.Link,{to:"",onClick:i=>i.preventDefault(),children:g.jsx(re.Button,{className:ct("minimal","mousetrap","favorite-button",e.favorite?"favorite":"not-favorite"),onClick:()=>r(!e.favorite),children:g.jsx(Xe,{icon:Se.faHeart,size:"2x"})})})}function r(i){e.id&&t({variables:{input:{id:e.id,favorite:i}}})}return g.jsx(g.Fragment,{children:n()})}),pO=Pe("TagCard.Details",({tag:e})=>{function t(){if(e.description)return g.jsx(kl,{className:"tag-description",text:e.description,lineCount:3})}function n(){if(e.parents.length===1){const i=e.parents[0];return g.jsx("div",{className:"tag-parent-tags",children:g.jsx(Te.FormattedMessage,{id:"sub_tag_of",values:{parent:g.jsx($t.Link,{to:`/tags/${i.id}`,children:i.name})}})})}if(e.parents.length>1)return g.jsx("div",{className:"tag-parent-tags",children:g.jsx(Te.FormattedMessage,{id:"sub_tag_of",values:{parent:g.jsxs($t.Link,{to:st.makeParentTagsUrl(e),children:[e.parents.length," ",g.jsx(Te.FormattedMessage,{id:"countables.tags",values:{count:e.parents.length}})]})}})})}function r(){if(e.children.length>0)return g.jsx("div",{className:"tag-sub-tags",children:g.jsx(Te.FormattedMessage,{id:"parent_of",values:{children:g.jsxs($t.Link,{to:st.makeChildTagsUrl(e),children:[e.children.length," ",g.jsx(Te.FormattedMessage,{id:"countables.tags",values:{count:e.children.length}})]})}})})}return g.jsxs(g.Fragment,{children:[t(),n(),r()]})}),mO=Pe("TagCard.Image",({tag:e})=>g.jsx("img",{loading:"lazy",className:"tag-card-image",alt:e.name,src:e.image_path??""})),gO=Pe("TagCard.Title",({tag:e})=>g.jsx(g.Fragment,{children:e.name??""})),hO=Pe("TagCard",e=>{const{tag:t,cardWidth:n,zoomIndex:r,selecting:i,selected:a,onSelectedChanged:s}=e;return g.jsx(cO,{className:`tag-card zoom-${r}`,url:`/tags/${t.id}`,width:n,title:g.jsx(gO,{...e}),linkClassName:"tag-card-header",image:g.jsx(mO,{...e}),details:g.jsx(pO,{...e}),overlays:g.jsx(fO,{...e}),popovers:g.jsx(dO,{...e}),selected:a,selecting:i,onSelectedChanged:s})}),vO=({id:e})=>{const{data:t,loading:n,error:r}=Vp(e);if(n)return g.jsx("div",{className:"tag-popover-card-placeholder",children:g.jsx(Ml,{card:!0,message:""})});if(r)return g.jsx(Fl,{error:r.message});if(!(t!=null&&t.findTag))return g.jsx(Fl,{error:`No tag found with id ${e}.`});const i=t.findTag;return g.jsx("div",{className:"tag-popover-card",children:g.jsx(hO,{tag:i,zoomIndex:0})})},jl=({id:e,hide:t,children:n,placement:r="top",target:i})=>{const{configuration:a}=gi(),s=(a==null?void 0:a.ui.showTagCardOnHover)??!0;return t||!s?g.jsx(g.Fragment,{children:n}):g.jsx(Nl,{target:i,placement:r,enterDelay:500,leaveDelay:100,content:g.jsx(vO,{id:e}),children:n})};function SO(e,t,n,r){if(!e)return t;e=e.toLowerCase();const i={};function a(v,O){i[v.id]={...i[v.id],...O}}function s(v){var b,y;const O=(b=i[v.id])==null?void 0:b.aliases;if(O!==void 0)return O;if(!r)return[];const w=((y=r(v))==null?void 0:y.map(p=>p.trim().toLowerCase()))??[];return a(v,{aliases:w}),w}function u(v){var y;const O=(y=i[v.id])==null?void 0:y.aliasMatch;if(O!==void 0)return O;const b=s(v).some(p=>p===e);return a(v,{aliasMatch:b}),b}function o(v){var y;const O=(y=i[v.id])==null?void 0:y.aliasStartsWith;if(O!==void 0)return O;const b=s(v).some(p=>p.startsWith(e));return a(v,{aliasStartsWith:b}),b}function c(v){return v.trim().replace(/\s\s+/g," ").toLowerCase().split(" ")}function l(v){return c(n(v))}function f(v){return s(v).flatMap(w=>c(w))}function I(v){var y;const O=(y=i[v.id])==null?void 0:y.wordIndex;if(O!==void 0)return O;const b=l(v).indexOf(e);return a(v,{wordIndex:b}),b}function h(v){var y;const O=(y=i[v.id])==null?void 0:y.aliasWordIndex;if(O!==void 0)return O;const b=f(v).indexOf(e);return a(v,{aliasWordIndex:b}),b}function E(v){var y;const O=(y=i[v.id])==null?void 0:y.wordStartsWithIndex;if(O!==void 0)return O;const b=l(v).findIndex(p=>p.startsWith(e));return a(v,{wordStartsWithIndex:b}),b}function S(v){var y;const O=(y=i[v.id])==null?void 0:y.aliasWordStartsWithIndex;if(O!==void 0)return O;const b=f(v).findIndex(p=>p.startsWith(e));return a(v,{aliasWordStartsWithIndex:b}),b}function _(v){var y;const O=(y=i[v.id])==null?void 0:y.aliasIncludesIndex;if(O!==void 0)return O;const b=s(v).findIndex(p=>p.includes(e));return a(v,{aliasIncludesIndex:b}),b}function C(v,O){const w=n(v).trim().toLowerCase(),b=n(O).trim().toLowerCase(),y=u(v),p=u(O);if(w===e&&b!==e)return-1;if(w!==e&&b===e)return 1;if(y&&!p)return-1;if(!y&&p)return 1;if(w.startsWith(e)&&!b.startsWith(e))return-1;if(!w.startsWith(e)&&b.startsWith(e))return 1;const D=o(v),T=o(O);if(D&&!T)return-1;if(!D&&T)return 1;if(!e.includes(" ")){{const X=I(v),$=I(O);if(X!==-1&&$===-1)return-1;if(X===-1&&$!==-1)return 1;if(X!==-1&&$!==-1)return X===$?w.localeCompare(b):X-$;const P=h(v),N=h(O);if(P!==-1&&N===-1)return-1;if(P===-1&&N!==-1)return 1;if(P!==-1&&N!==-1)return P===N?w.localeCompare(b):P-N}{const X=E(v),$=E(O);if(X!==-1&&$===-1)return-1;if(X===-1&&$!==-1)return 1;if(X!==-1&&$!==-1)return X===$?w.localeCompare(b):X-$;const P=S(v),N=S(O);if(P!==-1&&N===-1)return-1;if(P===-1&&N!==-1)return 1;if(P!==-1&&N!==-1)return P===N?w.localeCompare(b):P-N}}const F=w.indexOf(e),q=b.indexOf(e);if(F!==-1&&q===-1)return-1;if(F===-1&&q!==-1)return 1;if(F!==-1&&q!==-1)return F===q?w.localeCompare(b):F-q;const U=_(v),ne=_(O);return U!==-1&&ne===-1?-1:U===-1&&ne!==-1?1:U!==-1&&ne!==-1?U===ne?w.localeCompare(b):U-ne:w.localeCompare(b)}return t.slice().sort(C)}const yO=/^[0-9a-f]{8}-[0-9a-f]{4}-[47][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function bO(e){return yO.test(e.trim())}function IO(e,t){const n=e.makeCriterion("stash_id_endpoint");n.modifier=m.Equals,n.value={endpoint:"",stashID:t.trim()},e.criteria=[n]}function _O(e,t){return SO(e,t,n=>n.name,n=>n.aliases)}const OO=xs("TagSelect.sort",_O),CO=Pe("TagSelect",e=>{const[t]=Up(),{configuration:n}=gi(),r=Te.useIntl(),i=(n==null?void 0:n.ui.maxOptionsShown)??Wp,a=!(n!=null&&n.interface.disableDropdownCreate.tag),s=x.useMemo(()=>e.excludeIds??[],[e.excludeIds]);function u(S){return!s.includes(S.id.toString())}async function o(S){const _=new ie(Q.Tags);if(_.currentPage=1,_.itemsPerPage=i,_.sortBy="name",_.sortDirection=Le.Asc,bO(S)){IO(_,S);const w=(await yo(_)).data.findTags.tags.filter(u);if(w.length>0)return w.map($l);_.criteria=[]}_.searchTerm=S;const v=(await yo(_)).data.findTags.tags.filter(u);return OO(S,v).map($l)}const c=S=>{var b;let _=S;const{object:C}=S.data,{name:v}=C,{inputValue:O}=S.selectProps;let w="";return v.toLowerCase().includes(O.toLowerCase())||(w=(b=C.aliases)==null?void 0:b.find(y=>y.toLowerCase().includes(O.toLowerCase()))),_={...S,children:g.jsx(jl,{id:C.id,placement:e.hoverPlacement??"right",children:g.jsxs("span",{className:"react-select-image-option",children:[g.jsx("span",{children:v}),w&&g.jsxs("span",{className:"alias",children:[" (",w,")"]})]})})},g.jsx(ci.components.Option,{..._})},l=S=>{let _=S;const{object:C}=S.data;return _={...S,children:g.jsx(jl,{id:C.id,placement:e.hoverPlacementLabel??"top",children:g.jsx("span",{children:C.name})})},g.jsx(ci.components.MultiValueLabel,{..._})},f=S=>{let _=S;const{object:C}=S.data;return _={...S,children:g.jsx(g.Fragment,{children:C.name})},g.jsx(ci.components.SingleValue,{..._})},I=async S=>{const _=await t({variables:{input:{name:S}}});return{value:_.data.tagCreate.id,item:_.data.tagCreate,message:"Created tag"}},h=(S,_)=>({id:S,name:_,aliases:[],stash_ids:[]}),E=(S,_)=>!(!S||_.some(C=>{var v;return C.name.toLowerCase()===S.toLowerCase()||((v=C.aliases)==null?void 0:v.some(O=>O.toLowerCase()===S.toLowerCase()))}));return g.jsx(g_,{...e,className:ct("tag-select",{"tag-select-active":e.active},e.className),loadOptions:o,getNamedObject:h,isValidNewOption:E,components:{Option:c,MultiValueLabel:l,SingleValue:f},isMulti:e.isMulti??!1,creatable:e.creatable??a,onCreate:I,placeholder:e.noSelectionString??r.formatMessage({id:"actions.select_entity"},{entityType:r.formatMessage({id:e.isMulti?"tags":"tag"})}),closeMenuOnSelect:!e.isMulti})}),DO=Pe("TagIDSelect",e=>{const{ids:t,onSelect:n}=e,[r,i]=x.useState([]),a=h_(t);function s(u){i(u),n==null||n(u)}return x.useEffect(()=>{async function u(l){const f=await Rp(l),{tags:I}=f.data.findTags;return I}if(!a)return;if(!t||(t==null?void 0:t.length)===0){i([]);return}if(r.filter(l=>t.includes(l.id.toString())).length===t.length)return;(async()=>{const f=[...await u(t)];f.sort((I,h)=>{const E=I.sort_name||I.name,S=h.sort_name||h.name;return E&&S?E.localeCompare(S):0}),i(f)})()},[t,a,r]),g.jsx(CO,{...e,values:r,onSelect:s})}),EO=(e,t)=>{const{data:n,loading:r,error:i}=zp(e),a=x.useRef(void 0);r||(a.current=n);const s=r?a.current:n,u=i&&t?[]:s==null?void 0:s.directory.directories,o=s==null?void 0:s.directory.parent;return{directories:u,parent:o,loading:r,error:i}},wO=Pe("FolderSelect",({currentDirectory:e,onChangeDirectory:t,defaultDirectories:n=[],appendButton:r,collapsible:i=!1,quotePath:a=!1,hideError:s=!1})=>{const u=Te.useIntl(),[o,c]=x.useState(!1),[l,f]=x.useState(e),I=a?et.stripQuotes(l):l,{directories:h,parent:E,error:S,loading:_}=EO(I,s),C=(e?h:n)??n,v=Ua(f,250);function O(p){const D=a&&p.includes(" ")?et.addQuotes(p):p;t(D),f(D)}function w(p){t(p),v(p)}function b(){n!=null&&n.includes(e)?O(""):E&&O(E)}const y=e&&E&&g.jsx("li",{className:"folder-list-parent folder-list-item",children:g.jsx(re.Button,{variant:"link",onClick:()=>b(),disabled:_,children:g.jsx("span",{children:g.jsx(Te.FormattedMessage,{id:"setup.folder.up_dir"})})})});return g.jsxs(g.Fragment,{children:[g.jsxs(re.InputGroup,{children:[g.jsx(re.Form.Control,{className:"btn-secondary",placeholder:u.formatMessage({id:"setup.folder.file_path"}),onChange:p=>{w(p.currentTarget.value)},value:e,spellCheck:!1}),r&&g.jsx(re.InputGroup.Append,{children:r}),i&&g.jsx(re.InputGroup.Append,{children:g.jsx(re.Button,{variant:"secondary",onClick:()=>c(!o),children:g.jsx(Xe,{icon:Se.faEllipsis})})}),(_||S)&&g.jsx(re.InputGroup.Append,{className:"align-self-center",children:_?g.jsx(Ml,{inline:!0,small:!0,message:""}):!s&&g.jsx(Xe,{icon:Se.faTimes,color:"red",className:"ml-3"})})]}),!s&&S!==void 0&&g.jsxs("h5",{className:"mt-4 text-break",children:["Error: ",S.message]}),g.jsx(re.Collapse,{in:!i||o,children:g.jsxs("ul",{className:"folder-list",children:[y,C.map(p=>g.jsx("li",{className:"folder-list-item",children:g.jsx(re.Button,{variant:"link",onClick:()=>O(p),disabled:_,children:g.jsx("span",{children:p})})},p))]})})]})}),{PluginApi:ot}=window,{React:ql}=ot,{useState:Qe,useEffect:TO}=ql,xO=ot.libraries.Bootstrap,{Nav:$O,Button:rn,Form:$e,Alert:Vl,ProgressBar:FO,Spinner:Rl}=xO,{NavLink:PO}=ot.libraries.ReactRouterDOM,{FontAwesomeIcon:MO}=ot.libraries.ReactFontAwesome,NO=ot.libraries.FontAwesomeSolid,Bl="subtitleMarkers",Gl="/subtitle-markers",kO=1e3;function za(e,t){return fetch("/graphql",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,variables:t})}).then(n=>n.json()).then(n=>{if(n.errors&&n.errors.length)throw new Error(n.errors.map(r=>r.message).join("; "));return n.data})}function AO(e,t){return za(`mutation SubtitleMarkersRunTask($plugin_id: ID!, $description: String, $args_map: Map) {
      runPluginTask(plugin_id: $plugin_id, description: $description, args_map: $args_map)
    }`,{plugin_id:Bl,description:t,args_map:e}).then(n=>n.runPluginTask)}function LO(e){return za("query SubtitleMarkersFindJob($id: ID!) { findJob(input: { id: $id }) { status progress error } }",{id:e}).then(t=>t.findJob)}function jO(e){return za(`mutation SubtitleMarkersSearch($plugin_id: ID!, $args: Map) {
      runPluginOperation(plugin_id: $plugin_id, args: $args)
    }`,{plugin_id:Bl,args:e}).then(t=>t.runPluginOperation)}const Wa=["READY","RUNNING","STOPPING"],qO={READY:"Starting…",RUNNING:"Searching…",STOPPING:"Stopping…",FINISHED:"Done.",CANCELLED:"Cancelled.",FAILED:"Failed."};function VO({libraryPaths:e}){const[t,n]=Qe(""),[r,i]=Qe(""),[a,s]=Qe(!1),[u,o]=Qe(""),[c,l]=Qe(""),[f,I]=Qe(!1),[h,E]=Qe(null),[S,_]=Qe(null),[C,v]=Qe(!1),[O,w]=Qe(null),[b,y]=Qe(null),p=f||S!==null&&Wa.includes(S.status),D=p||C,T=!!t.trim()&&!!r.trim()&&(!a||!!u)&&!D;TO(()=>{if(!h)return;let $=!1,P;const N=()=>{LO(h).then(L=>{$||(_(L),L&&Wa.includes(L.status)&&(P=setTimeout(N,kO)))}).catch(L=>{$||_({status:"FAILED",progress:null,error:String(L&&L.message?L.message:L)})})};return N(),()=>{$=!0,clearTimeout(P)}},[h]);function F(){const $=r.trim();I(!0),_(null),AO({path:t.trim(),search:$,tagId:u,title:c.trim()},`Searching subtitles for "${$}"`).then(P=>{I(!1),E(P)}).catch(P=>{I(!1),_({status:"FAILED",progress:null,error:String(P&&P.message?P.message:P)})})}function q(){v(!0),y(null),w(null),jO({mode:"search",path:t.trim(),search:r.trim()}).then($=>{v(!1),w($.results)}).catch($=>{v(!1),y(String($&&$.message?$.message:$))})}function U(){a?F():q()}function ne(){if(!S)return null;const $=Math.round((S.progress||0)*100);return g.jsxs("div",{className:"subtitle-markers-status mt-3",children:[Wa.includes(S.status)&&g.jsx(FO,{now:$,label:`${$}%`,animated:!0}),g.jsxs("p",{className:S.status==="FAILED"?"text-danger":"text-muted",children:[qO[S.status],S.status==="FINISHED"&&" Marker preview generation has been queued for anything created. See Settings → Logs for how many markers were created."]}),S.error?g.jsx(Vl,{variant:"danger",children:S.error}):null]})}function X(){return C?g.jsxs("div",{className:"subtitle-markers-results mt-3 text-muted",children:[g.jsx(Rl,{animation:"border",size:"sm",className:"mr-2"}),"Searching…"]}):b?g.jsx(Vl,{variant:"danger",className:"mt-3",children:b}):O===null?null:O.length===0?g.jsx("p",{className:"subtitle-markers-results mt-3 text-muted",children:"No matches found."}):g.jsxs("div",{className:"subtitle-markers-results mt-3",children:[g.jsxs("p",{className:"text-muted",children:[O.length," match",O.length===1?"":"es",":"]}),g.jsx(rn,{size:"sm",variant:"secondary",className:"mb-2",onClick:()=>GO(O),children:"Play All in Queue"}),g.jsx("ul",{className:"list-unstyled",children:O.map(($,P)=>g.jsxs("li",{className:"subtitle-markers-result",children:[g.jsxs("a",{href:`/scenes/${$.sceneId}?t=${$.seconds}`,target:"_blank",rel:"noreferrer",children:[$.sceneTitle||`Scene ${$.sceneId}`," @ ",et.secondsToTimestamp($.seconds)]}),g.jsx("div",{className:"text-muted subtitle-markers-result-text",children:$.text})]},P))})]})}return g.jsxs("div",{className:"subtitle-markers-page container-fluid",children:[g.jsx("h3",{children:"Subtitle Markers"}),g.jsx("p",{className:"text-muted",children:"Searches every .srt file under a folder (and its subfolders) for a phrase - matched to the video file next to each subtitle, the same way Stash itself associates captions. Either jump straight to each match's timestamp, or (optionally) create a scene marker for each one, with preview generation queued automatically afterwards."}),g.jsxs($e.Group,{className:"subtitle-markers-folder",children:[g.jsx($e.Label,{children:"Folder"}),g.jsx(wO,{currentDirectory:t,onChangeDirectory:n,defaultDirectories:e}),g.jsx($e.Text,{className:"text-muted",children:"Searched recursively, including subfolders."})]}),g.jsxs($e.Group,{children:[g.jsx($e.Label,{children:"Search text"}),g.jsx($e.Control,{type:"text",value:r,placeholder:"Text to find in subtitle lines",onChange:$=>i($.target.value),disabled:D}),g.jsx($e.Text,{className:"text-muted",children:"Case-insensitive, matched as plain text."})]}),g.jsxs($e.Group,{children:[g.jsx($e.Check,{type:"checkbox",id:"subtitle-markers-create-markers",label:"Also create scene markers",checked:a,disabled:D,onChange:$=>s($.target.checked)}),g.jsx($e.Text,{className:"text-muted",children:"Off by default: just search, and link to each match's timestamp. Turn this on to also create a scene marker for each match, using the tag and title below."})]}),a&&g.jsxs(g.Fragment,{children:[g.jsxs($e.Group,{children:[g.jsx($e.Label,{children:"Tag"}),g.jsx(DO,{ids:u?[u]:[],isDisabled:D,onSelect:$=>{var P;return o(((P=$[0])==null?void 0:P.id)||"")}})]}),g.jsxs($e.Group,{children:[g.jsx($e.Label,{children:"Marker title"}),g.jsx($e.Control,{type:"text",value:c,placeholder:r||"Marker title",onChange:$=>l($.target.value),disabled:D}),g.jsx($e.Text,{className:"text-muted",children:"Defaults to the search text if left blank."})]})]}),g.jsx(rn,{onClick:U,disabled:!T,children:p?"Running…":C?"Searching…":a?"Search & Create Markers":"Search"}),a?ne():X()]})}function RO(){const{data:e}=Md();if(!(e!=null&&e.configuration))return g.jsx(Rl,{animation:"border",className:"mt-3"});const t=e.configuration.general.stashes.map(n=>n.path);return g.jsx(Jd,{children:g.jsx(qd,{configuration:e.configuration,children:g.jsx(VO,{libraryPaths:t})})})}ot.register.route(Gl,RO),ot.patch.before("MainNavBar.MenuItems",e=>{try{const t=g.jsx($O.Link,{as:"div",className:"col-4 col-sm-3 col-md-2 col-lg-auto",children:g.jsx(PO,{exact:!0,to:Gl,activeClassName:"active",children:g.jsxs(rn,{className:"minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center",children:[g.jsx(MO,{icon:NO.faClosedCaptioning,className:"fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0"}),g.jsx("span",{children:"Marker"})]})})},"subtitle-markers");return[{...e,children:[...ql.Children.toArray(e.children),t]}]}catch(t){return console.error("[SubtitleMarkers] Failed to patch nav bar:",t),[e]}});const Qa="subtitleMarkersQueue",Ya="subtitle-markers-queue-widget",BO=20;function si(){try{const e=window.sessionStorage.getItem(Qa);if(!e)return null;const t=JSON.parse(e);return!t||!Array.isArray(t.items)||typeof t.index!="number"||t.index<0||t.index>=t.items.length?null:t}catch{return null}}function Ul(e){try{window.sessionStorage.setItem(Qa,JSON.stringify(e))}catch{}}function Hl(){try{window.sessionStorage.removeItem(Qa)}catch{}}function Bn(){const e=window.location.pathname.match(/^\/scenes\/([^/?]+)/);return e?e[1]:null}function zl(e){return`/scenes/${e.sceneId}?t=${e.seconds}&continue=true&autoplay=true`}function Wl(e){!e||e.length===0||(Ul({items:e,index:0}),window.open(zl(e[0]),"_blank"))}function GO(e){Wl(e)}let Gn=null;function Un(){Gn!==null&&(clearTimeout(Gn),Gn=null)}function Hn(){Un();const e=document.getElementById(Ya);e&&e.remove()}function oi(e,t){if(Un(),t<0||t>=e.items.length){Hl(),Hn();return}const n=e.items[t];if(Ul({items:e.items,index:t}),n.sceneId===Bn()){const r=document.querySelector(".video-js video");r&&(r.currentTime=n.seconds,r.play().catch(()=>{})),Ka()}else Hn(),window.location.assign(zl(n))}function UO(e){const t=e.target;if(!t||t.tagName!=="VIDEO")return;const n=si();!n||n.items[n.index].sceneId!==Bn()||oi(n,n.index+1)}function Ql(){Un();const e=si();!e||e.items[e.index].sceneId!==Bn()||(Gn=setTimeout(()=>{Gn=null;const t=si();if(!t||t.items[t.index].sceneId!==Bn())return;const n=document.querySelector(".video-js video");n&&n.paused||oi(t,t.index+1)},BO*1e3))}function HO(e){const t=e.target;!t||t.tagName!=="VIDEO"||Ql()}function zO(e){const t=e.target;!t||t.tagName!=="VIDEO"||Un()}document.addEventListener("ended",UO,!0),document.addEventListener("play",HO,!0),document.addEventListener("pause",zO,!0);function Ka(){try{const e=si(),t=Bn();if(!e||!t||t!==e.items[e.index].sceneId){Hn();return}let n=document.getElementById(Ya);n||(n=document.createElement("div"),n.id=Ya,document.body.appendChild(n));const r=t+":"+e.index;if(n.dataset.subtitleMarkersQueueKey===r)return;n.dataset.subtitleMarkersQueueKey=r;const i=e.items[e.index],a=document.querySelector(".video-js video");a&&!a.paused?Ql():Un();const s={position:"fixed",right:"16px",bottom:"16px",zIndex:"2000",background:"rgba(0, 0, 0, 0.85)",color:"#fff",padding:"10px 14px",borderRadius:"6px",maxWidth:"320px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.5)"};ot.ReactDOM.render(g.jsxs("div",{className:"subtitle-markers-queue-widget",style:s,children:[g.jsx("div",{className:"subtitle-markers-queue-position",children:g.jsxs("strong",{children:["Marker ",e.index+1," of ",e.items.length]})}),g.jsx("div",{className:"subtitle-markers-queue-text text-truncate",style:{opacity:.85,margin:"4px 0"},children:i.text}),g.jsxs("div",{className:"subtitle-markers-queue-controls",children:[g.jsx(rn,{size:"sm",variant:"secondary",className:"mr-1",disabled:e.index===0,onClick:()=>oi(e,e.index-1),children:"Prev"}),g.jsx(rn,{size:"sm",variant:"secondary",className:"mr-1",disabled:e.index===e.items.length-1,onClick:()=>oi(e,e.index+1),children:"Next"}),g.jsx(rn,{size:"sm",variant:"danger",onClick:()=>{Hl(),Hn()},children:"Stop"})]})]}),n)}catch(e){console.error("[SubtitleMarkers] Failed to update the queue widget:",e),Hn()}}new MutationObserver(Ka).observe(document.body,{childList:!0,subtree:!0}),Ka();const WO=1e3;async function QO(e,t,n){var r,i;try{const s=(n?n(t.clone()):t).clone();s.currentPage=1,s.itemsPerPage=WO;const c=(((i=(r=(await qp(s)).data)==null?void 0:r.findSceneMarkers)==null?void 0:i.scene_markers)??[]).map(l=>{var f;return{sceneId:l.scene.id,sceneTitle:l.scene.title||`Scene ${l.scene.id}`,seconds:l.seconds,text:l.title||((f=l.primary_tag)==null?void 0:f.name)||""}});Wl(c)}catch(a){console.error("[SubtitleMarkers] Failed to start the filtered-markers queue:",a)}}ot.patch.before("FilteredSceneMarkerList",e=>{try{const t=e.filterHook,n={text:"Play All (Filtered)",onClick:(r,i)=>QO(r,i,t),isDisplayed:r=>{var i,a;return(((a=(i=r==null?void 0:r.data)==null?void 0:i.findSceneMarkers)==null?void 0:a.count)??0)>0}};return[{...e,extraOperations:[...e.extraOperations||[],n]}]}catch(t){return console.error('[SubtitleMarkers] Failed to add the "Play All (Filtered)" operation:',t),[e]}})})(PluginApi.React,PluginApi.libraries.Apollo,PluginApi.libraries.FontAwesomeSolid,PluginApi.libraries.Bootstrap,PluginApi.libraries.Intl,PluginApi.libraries.ReactFontAwesome,PluginApi.libraries.ReactSelect,PluginApi.ReactDOM,PluginApi.libraries.ReactRouterDOM);
