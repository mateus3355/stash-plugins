var $O=Object.defineProperty;var PO=(O,m,ce)=>m in O?$O(O,m,{enumerable:!0,configurable:!0,writable:!0,value:ce}):O[m]=ce;var X=(O,m,ce)=>PO(O,typeof m!="symbol"?m+"":m,ce);(function(O,m,ce,z,Se,Jd,Fi,Xd,Ke){"use strict";var Kd;function $s(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const K=$s(O),bn=$s(m);var cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ps(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Zd(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Ms={exports:{}},yn={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Fs=Object.getOwnPropertySymbols,ef=Object.prototype.hasOwnProperty,tf=Object.prototype.propertyIsEnumerable;function nf(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function rf(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}rf();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var af=O,Ns=60103;if(yn.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var ks=Symbol.for;Ns=ks("react.element"),yn.Fragment=ks("react.fragment")}var sf=af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,of=Object.prototype.hasOwnProperty,uf={key:!0,ref:!0,__self:!0,__source:!0};function As(e,t,n){var r,i={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)of.call(t,r)&&!uf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ns,type:e,key:a,ref:s,props:i,_owner:sf.current}}yn.jsx=As,yn.jsxs=As,Ms.exports=yn;var d=Ms.exports;const Sn={};var lr=(e=>(e.Cut="CUT",e.Uncut="UNCUT",e))(lr||{}),y=(e=>(e.Between="BETWEEN",e.Equals="EQUALS",e.Excludes="EXCLUDES",e.GreaterThan="GREATER_THAN",e.Includes="INCLUDES",e.IncludesAll="INCLUDES_ALL",e.IsNull="IS_NULL",e.LessThan="LESS_THAN",e.MatchesRegex="MATCHES_REGEX",e.NotBetween="NOT_BETWEEN",e.NotEquals="NOT_EQUALS",e.NotMatchesRegex="NOT_MATCHES_REGEX",e.NotNull="NOT_NULL",e))(y||{}),J=(e=>(e.Galleries="GALLERIES",e.Groups="GROUPS",e.Images="IMAGES",e.Movies="MOVIES",e.Performers="PERFORMERS",e.Scenes="SCENES",e.SceneMarkers="SCENE_MARKERS",e.Studios="STUDIOS",e.Tags="TAGS",e))(J||{}),Ie=(e=>(e.Female="FEMALE",e.Intersex="INTERSEX",e.Male="MALE",e.NonBinary="NON_BINARY",e.TransgenderFemale="TRANSGENDER_FEMALE",e.TransgenderMale="TRANSGENDER_MALE",e))(Ie||{}),dr=(e=>(e.Landscape="LANDSCAPE",e.Portrait="PORTRAIT",e.Square="SQUARE",e))(dr||{}),Le=(e=>(e.EightK="EIGHT_K",e.FiveK="FIVE_K",e.FourK="FOUR_K",e.FullHd="FULL_HD",e.Huge="HUGE",e.Low="LOW",e.QuadHd="QUAD_HD",e.R360P="R360P",e.SevenK="SEVEN_K",e.SixK="SIX_K",e.Standard="STANDARD",e.StandardHd="STANDARD_HD",e.VeryLow="VERY_LOW",e.VrHd="VR_HD",e.WebHd="WEB_HD",e))(Le||{}),Ve=(e=>(e.Asc="ASC",e.Desc="DESC",e))(Ve||{});const Ls=m.gql`
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
    `,js=m.gql`
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
    `,Bs=m.gql`
    fragment ConfigDLNAData on ConfigDLNAResult {
  serverName
  enabled
  port
  whitelistedIPs
  interfaces
  videoSortOrder
}
    `,Rs=m.gql`
    fragment ConfigScrapingData on ConfigScrapingResult {
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  excludeTagPatterns
}
    `,cf=m.gql`
    fragment ScraperSourceData on ScraperSource {
  stash_box_index
  stash_box_endpoint
  scraper_id
}
    `,lf=m.gql`
    fragment IdentifyFieldOptionsData on IdentifyFieldOptions {
  field
  strategy
  createMissing
}
    `,df=m.gql`
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
    ${lf}`,qs=m.gql`
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
    ${cf}
${df}`,ff=m.gql`
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
    ${Ls}
${js}
${Bs}
${Rs}
${qs}`;m.gql`
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
    `;const Ni=m.gql`
    fragment SelectFolderData on Folder {
  id
  path
  basename
}
    `,pf=m.gql`
    fragment RecursiveFolderData on Folder {
  ...SelectFolderData
  parent_folders {
    ...SelectFolderData
  }
}
    ${Ni}`,ki=m.gql`
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
    `,mf=m.gql`
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
    `,gf=m.gql`
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
    `,xn=m.gql`
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
    `,st=m.gql`
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
    `,Vs=m.gql`
    fragment SlimGroupData on Group {
  id
  name
  front_image_path
  rating100
}
    `,hf=m.gql`
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
    ${xn}
${st}
${Vs}`,Gs=m.gql`
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
    `,fr=m.gql`
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
    ${Gs}`,Us=m.gql`
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
    `,zs=m.gql`
    fragment FolderData on Folder {
  id
  basename
  path
}
    `,Ai=m.gql`
    fragment GalleryChapterData on GalleryChapter {
  id
  title
  image_index
  gallery {
    id
  }
}
    `,pt=m.gql`
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
    ${st}`,Hs=m.gql`
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
    `,In=m.gql`
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
    ${Hs}`,Rt=m.gql`
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
    ${Us}
${zs}
${Ai}
${xn}
${st}
${pt}
${In}`,vf=m.gql`
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
    ${Rt}
${xn}
${st}
${pt}
${Gs}`,Ws=m.gql`
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
    `,Ys=m.gql`
    fragment LogEntryData on LogEntry {
  time
  level
  message
}
    `,qt=m.gql`
    fragment PackageData on Package {
  package_id
  name
  version
  date
  metadata
  sourceURL
}
    `;m.gql`
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
    `;const bf=m.gql`
    fragment SelectPerformerData on Performer {
  id
  name
  disambiguation
  alias_list
  image_path
  birthdate
  death_date
}
    `,yf=m.gql`
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
    `,St=m.gql`
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
    ${yf}`,Qs=m.gql`
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
    ${Us}
${zs}`,_n=m.gql`
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
    ${xn}
${st}
${Vs}`,xt=m.gql`
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
    ${Hs}
${St}
${Qs}
${xn}
${_n}
${st}
${pt}`,Sf=m.gql`
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
    `,Je=m.gql`
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
    `,xf=m.gql`
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
    ${Je}`,Li=m.gql`
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
    ${Je}`,Ks=m.gql`
    fragment ScrapedGroupStudioData on ScrapedStudio {
  stored_id
  name
  urls
}
    `,If=m.gql`
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
    ${Ks}
${Je}`,pr=m.gql`
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
    ${Je}`,Cn=m.gql`
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
    ${Je}`,Js=m.gql`
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
    ${Ks}
${Je}`,ji=m.gql`
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
    ${pr}
${Je}
${Cn}
${Js}`,Xs=m.gql`
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
    ${pr}
${Je}
${Cn}`,Zs=m.gql`
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
    ${pr}
${Je}
${Cn}`;m.gql`
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
    ${pr}
${Je}
${Cn}
${Js}`,m.gql`
    fragment ScrapedStashBoxPerformerData on StashBoxPerformerQueryResult {
  query
  results {
    ...ScrapedScenePerformerData
  }
}
    ${Cn}`;const wn=m.gql`
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
    ${st}`,_f=m.gql`
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
    `,Vt=m.gql`
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
    ${st}`,Cf=m.gql`
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
    `,wf=m.gql`
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
    ${st}`;m.gql`
    mutation Setup($input: SetupInput!) {
  setup(input: $input)
}
    `,m.gql`
    mutation Migrate($input: MigrateInput!) {
  migrate(input: $input)
}
    `,m.gql`
    mutation DownloadFFMpeg {
  downloadFFMpeg
}
    `,m.gql`
    mutation ConfigureGeneral($input: ConfigGeneralInput!) {
  configureGeneral(input: $input) {
    ...ConfigGeneralData
  }
}
    ${Ls}`,m.gql`
    mutation ConfigureInterface($input: ConfigInterfaceInput!) {
  configureInterface(input: $input) {
    ...ConfigInterfaceData
  }
}
    ${js}`,m.gql`
    mutation ConfigureDLNA($input: ConfigDLNAInput!) {
  configureDLNA(input: $input) {
    ...ConfigDLNAData
  }
}
    ${Bs}`,m.gql`
    mutation ConfigureScraping($input: ConfigScrapingInput!) {
  configureScraping(input: $input) {
    ...ConfigScrapingData
  }
}
    ${Rs}`,m.gql`
    mutation ConfigureDefaults($input: ConfigDefaultSettingsInput!) {
  configureDefaults(input: $input) {
    ...ConfigDefaultSettingsData
  }
}
    ${qs}`,m.gql`
    mutation ConfigureUI($input: Map, $partial: Map) {
  configureUI(input: $input, partial: $partial)
}
    `,m.gql`
    mutation ConfigureUISetting($key: String!, $value: Any) {
  configureUISetting(key: $key, value: $value)
}
    `,m.gql`
    mutation GenerateAPIKey($input: GenerateAPIKeyInput!) {
  generateAPIKey(input: $input)
}
    `,m.gql`
    mutation EnableDLNA($input: EnableDLNAInput!) {
  enableDLNA(input: $input)
}
    `,m.gql`
    mutation DisableDLNA($input: DisableDLNAInput!) {
  disableDLNA(input: $input)
}
    `,m.gql`
    mutation AddTempDLNAIP($input: AddTempDLNAIPInput!) {
  addTempDLNAIP(input: $input)
}
    `,m.gql`
    mutation RemoveTempDLNAIP($input: RemoveTempDLNAIPInput!) {
  removeTempDLNAIP(input: $input)
}
    `,m.gql`
    mutation DeleteFiles($ids: [ID!]!) {
  deleteFiles(ids: $ids)
}
    `,m.gql`
    mutation RevealFileInFileManager($id: ID!) {
  revealFileInFileManager(id: $id)
}
    `,m.gql`
    mutation RevealFolderInFileManager($id: ID!) {
  revealFolderInFileManager(id: $id)
}
    `,m.gql`
    mutation SaveFilter($input: SaveFilterInput!) {
  saveFilter(input: $input) {
    ...SavedFilterData
  }
}
    ${ki}`,m.gql`
    mutation DestroySavedFilter($input: DestroyFilterInput!) {
  destroySavedFilter(input: $input)
}
    `,m.gql`
    mutation GalleryChapterCreate($title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterCreate(
    input: {title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${Ai}`,m.gql`
    mutation GalleryChapterUpdate($id: ID!, $title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterUpdate(
    input: {id: $id, title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${Ai}`,m.gql`
    mutation GalleryChapterDestroy($id: ID!) {
  galleryChapterDestroy(id: $id)
}
    `,m.gql`
    mutation GalleryCreate($input: GalleryCreateInput!) {
  galleryCreate(input: $input) {
    ...GalleryData
  }
}
    ${Rt}`,m.gql`
    mutation GalleryUpdate($input: GalleryUpdateInput!) {
  galleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${Rt}`,m.gql`
    mutation BulkGalleryUpdate($input: BulkGalleryUpdateInput!) {
  bulkGalleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${Rt}`,m.gql`
    mutation GalleriesUpdate($input: [GalleryUpdateInput!]!) {
  galleriesUpdate(input: $input) {
    ...GalleryData
  }
}
    ${Rt}`,m.gql`
    mutation GalleryDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  galleryDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,m.gql`
    mutation AddGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  addGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `,m.gql`
    mutation RemoveGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  removeGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `,m.gql`
    mutation SetGalleryCover($gallery_id: ID!, $cover_image_id: ID!) {
  setGalleryCover(
    input: {gallery_id: $gallery_id, cover_image_id: $cover_image_id}
  )
}
    `,m.gql`
    mutation ResetGalleryCover($gallery_id: ID!) {
  resetGalleryCover(input: {gallery_id: $gallery_id})
}
    `,m.gql`
    mutation GroupCreate($input: GroupCreateInput!) {
  groupCreate(input: $input) {
    ...GroupData
  }
}
    ${_n}`,m.gql`
    mutation GroupUpdate($input: GroupUpdateInput!) {
  groupUpdate(input: $input) {
    ...GroupData
  }
}
    ${_n}`,m.gql`
    mutation BulkGroupUpdate($input: BulkGroupUpdateInput!) {
  bulkGroupUpdate(input: $input) {
    ...GroupData
  }
}
    ${_n}`,m.gql`
    mutation GroupDestroy($id: ID!) {
  groupDestroy(input: {id: $id})
}
    `,m.gql`
    mutation GroupsDestroy($ids: [ID!]!) {
  groupsDestroy(ids: $ids)
}
    `,m.gql`
    mutation AddGroupSubGroups($input: GroupSubGroupAddInput!) {
  addGroupSubGroups(input: $input)
}
    `,m.gql`
    mutation RemoveGroupSubGroups($input: GroupSubGroupRemoveInput!) {
  removeGroupSubGroups(input: $input)
}
    `,m.gql`
    mutation ReorderSubGroups($input: ReorderSubGroupsInput!) {
  reorderSubGroups(input: $input)
}
    `,m.gql`
    mutation ImageUpdate($input: ImageUpdateInput!) {
  imageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${fr}`,m.gql`
    mutation BulkImageUpdate($input: BulkImageUpdateInput!) {
  bulkImageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${fr}`,m.gql`
    mutation ImagesUpdate($input: [ImageUpdateInput!]!) {
  imagesUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${fr}`,m.gql`
    mutation ImageIncrementO($id: ID!) {
  imageIncrementO(id: $id)
}
    `,m.gql`
    mutation ImageDecrementO($id: ID!) {
  imageDecrementO(id: $id)
}
    `,m.gql`
    mutation ImageResetO($id: ID!) {
  imageResetO(id: $id)
}
    `,m.gql`
    mutation ImageDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  imageDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,m.gql`
    mutation ImagesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  imagesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,m.gql`
    mutation StopJob($job_id: ID!) {
  stopJob(job_id: $job_id)
}
    `,m.gql`
    mutation StopAllJobs {
  stopAllJobs
}
    `,m.gql`
    mutation MetadataImport {
  metadataImport
}
    `,m.gql`
    mutation MetadataExport {
  metadataExport
}
    `,m.gql`
    mutation ExportObjects($input: ExportObjectsInput!) {
  exportObjects(input: $input)
}
    `,m.gql`
    mutation ImportObjects($input: ImportObjectsInput!) {
  importObjects(input: $input)
}
    `,m.gql`
    mutation MetadataScan($input: ScanMetadataInput!) {
  metadataScan(input: $input)
}
    `,m.gql`
    mutation MetadataGenerate($input: GenerateMetadataInput!) {
  metadataGenerate(input: $input)
}
    `,m.gql`
    mutation MetadataAutoTag($input: AutoTagMetadataInput!) {
  metadataAutoTag(input: $input)
}
    `,m.gql`
    mutation MetadataIdentify($input: IdentifyMetadataInput!) {
  metadataIdentify(input: $input)
}
    `,m.gql`
    mutation MetadataClean($input: CleanMetadataInput!) {
  metadataClean(input: $input)
}
    `,m.gql`
    mutation MetadataCleanGenerated($input: CleanGeneratedInput!) {
  metadataCleanGenerated(input: $input)
}
    `,m.gql`
    mutation MigrateHashNaming {
  migrateHashNaming
}
    `,m.gql`
    mutation BackupDatabase($input: BackupDatabaseInput!) {
  backupDatabase(input: $input)
}
    `,m.gql`
    mutation AnonymiseDatabase($input: AnonymiseDatabaseInput!) {
  anonymiseDatabase(input: $input)
}
    `,m.gql`
    mutation OptimiseDatabase {
  optimiseDatabase
}
    `,m.gql`
    mutation MigrateSceneScreenshots($input: MigrateSceneScreenshotsInput!) {
  migrateSceneScreenshots(input: $input)
}
    `,m.gql`
    mutation MigrateBlobs($input: MigrateBlobsInput!) {
  migrateBlobs(input: $input)
}
    `,m.gql`
    mutation PerformerCreate($input: PerformerCreateInput!) {
  performerCreate(input: $input) {
    ...PerformerData
  }
}
    ${pt}`,m.gql`
    mutation PerformerUpdate($input: PerformerUpdateInput!) {
  performerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${pt}`,m.gql`
    mutation BulkPerformerUpdate($input: BulkPerformerUpdateInput!) {
  bulkPerformerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${pt}`,m.gql`
    mutation PerformerDestroy($id: ID!) {
  performerDestroy(input: {id: $id})
}
    `,m.gql`
    mutation PerformersDestroy($ids: [ID!]!) {
  performersDestroy(ids: $ids)
}
    `,m.gql`
    mutation PerformerMerge($input: PerformerMergeInput!) {
  performerMerge(input: $input) {
    id
  }
}
    `,m.gql`
    mutation ReloadPlugins {
  reloadPlugins
}
    `,m.gql`
    mutation RunPluginTask($plugin_id: ID!, $task_name: String!, $args_map: Map) {
  runPluginTask(plugin_id: $plugin_id, task_name: $task_name, args_map: $args_map)
}
    `,m.gql`
    mutation ConfigurePlugin($plugin_id: ID!, $input: Map!) {
  configurePlugin(plugin_id: $plugin_id, input: $input)
}
    `,m.gql`
    mutation SetPluginsEnabled($enabledMap: BoolMap!) {
  setPluginsEnabled(enabledMap: $enabledMap)
}
    `,m.gql`
    mutation InstallPluginPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Plugin, packages: $packages)
}
    `,m.gql`
    mutation UpdatePluginPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Plugin, packages: $packages)
}
    `,m.gql`
    mutation UninstallPluginPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Plugin, packages: $packages)
}
    `,m.gql`
    mutation SceneMarkerCreate($title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerCreate(
    input: {title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${St}`,m.gql`
    mutation SceneMarkerUpdate($id: ID!, $title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerUpdate(
    input: {id: $id, title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${St}`,m.gql`
    mutation BulkSceneMarkerUpdate($input: BulkSceneMarkerUpdateInput!) {
  bulkSceneMarkerUpdate(input: $input) {
    ...SceneMarkerData
  }
}
    ${St}`,m.gql`
    mutation SceneMarkerDestroy($id: ID!) {
  sceneMarkerDestroy(id: $id)
}
    `,m.gql`
    mutation SceneMarkersDestroy($ids: [ID!]!) {
  sceneMarkersDestroy(ids: $ids)
}
    `,m.gql`
    mutation SceneCreate($input: SceneCreateInput!) {
  sceneCreate(input: $input) {
    ...SceneData
  }
}
    ${xt}`,m.gql`
    mutation SceneUpdate($input: SceneUpdateInput!) {
  sceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${xt}`,m.gql`
    mutation BulkSceneUpdate($input: BulkSceneUpdateInput!) {
  bulkSceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${xt}`,m.gql`
    mutation ScenesUpdate($input: [SceneUpdateInput!]!) {
  scenesUpdate(input: $input) {
    ...SceneData
  }
}
    ${xt}`,m.gql`
    mutation SceneSaveActivity($id: ID!, $resume_time: Float, $playDuration: Float) {
  sceneSaveActivity(
    id: $id
    resume_time: $resume_time
    playDuration: $playDuration
  )
}
    `,m.gql`
    mutation SceneResetActivity($id: ID!, $reset_resume: Boolean!, $reset_duration: Boolean!) {
  sceneResetActivity(
    id: $id
    reset_resume: $reset_resume
    reset_duration: $reset_duration
  )
}
    `,m.gql`
    mutation SceneAddPlay($id: ID!, $times: [Timestamp!]) {
  sceneAddPlay(id: $id, times: $times) {
    count
    history
  }
}
    `,m.gql`
    mutation SceneDeletePlay($id: ID!, $times: [Timestamp!]) {
  sceneDeletePlay(id: $id, times: $times) {
    count
    history
  }
}
    `,m.gql`
    mutation SceneResetPlayCount($id: ID!) {
  sceneResetPlayCount(id: $id)
}
    `,m.gql`
    mutation SceneAddO($id: ID!, $times: [Timestamp!]) {
  sceneAddO(id: $id, times: $times) {
    count
    history
  }
}
    `,m.gql`
    mutation SceneDeleteO($id: ID!, $times: [Timestamp!]) {
  sceneDeleteO(id: $id, times: $times) {
    count
    history
  }
}
    `,m.gql`
    mutation SceneResetO($id: ID!) {
  sceneResetO(id: $id)
}
    `,m.gql`
    mutation SceneDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  sceneDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,m.gql`
    mutation ScenesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  scenesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `,m.gql`
    mutation SceneGenerateScreenshot($id: ID!, $at: Float) {
  sceneGenerateScreenshot(id: $id, at: $at)
}
    `,m.gql`
    mutation SceneAssignFile($input: AssignSceneFileInput!) {
  sceneAssignFile(input: $input)
}
    `,m.gql`
    mutation SceneMerge($input: SceneMergeInput!) {
  sceneMerge(input: $input) {
    id
  }
}
    `,m.gql`
    mutation ReloadScrapers {
  reloadScrapers
}
    `,m.gql`
    mutation InstallScraperPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Scraper, packages: $packages)
}
    `,m.gql`
    mutation UpdateScraperPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Scraper, packages: $packages)
}
    `,m.gql`
    mutation UninstallScraperPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Scraper, packages: $packages)
}
    `,m.gql`
    mutation SubmitStashBoxFingerprints($input: StashBoxFingerprintSubmissionInput!) {
  submitStashBoxFingerprints(input: $input)
}
    `,m.gql`
    mutation StashBoxBatchPerformerTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchPerformerTag(input: $input)
}
    `,m.gql`
    mutation StashBoxBatchStudioTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchStudioTag(input: $input)
}
    `,m.gql`
    mutation StashBoxBatchTagTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchTagTag(input: $input)
}
    `,m.gql`
    mutation SubmitStashBoxSceneDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxSceneDraft(input: $input)
}
    `,m.gql`
    mutation SubmitStashBoxPerformerDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxPerformerDraft(input: $input)
}
    `,m.gql`
    mutation StudioCreate($input: StudioCreateInput!) {
  studioCreate(input: $input) {
    ...StudioData
  }
}
    ${wn}`,m.gql`
    mutation StudioUpdate($input: StudioUpdateInput!) {
  studioUpdate(input: $input) {
    ...StudioData
  }
}
    ${wn}`,m.gql`
    mutation BulkStudioUpdate($input: BulkStudioUpdateInput!) {
  bulkStudioUpdate(input: $input) {
    ...StudioData
  }
}
    ${wn}`,m.gql`
    mutation StudioDestroy($id: ID!) {
  studioDestroy(input: {id: $id})
}
    `,m.gql`
    mutation StudiosDestroy($ids: [ID!]!) {
  studiosDestroy(ids: $ids)
}
    `;const Of=m.gql`
    mutation TagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) {
    ...TagData
  }
}
    ${Vt}`;function Ef(e){const t={...Sn,...e};return bn.useMutation(Of,t)}m.gql`
    mutation TagDestroy($id: ID!) {
  tagDestroy(input: {id: $id})
}
    `,m.gql`
    mutation TagsDestroy($ids: [ID!]!) {
  tagsDestroy(ids: $ids)
}
    `;const Tf=m.gql`
    mutation TagUpdate($input: TagUpdateInput!) {
  tagUpdate(input: $input) {
    ...TagData
  }
}
    ${Vt}`;function Df(e){const t={...Sn,...e};return bn.useMutation(Tf,t)}m.gql`
    mutation BulkTagUpdate($input: BulkTagUpdateInput!) {
  bulkTagUpdate(input: $input) {
    ...TagData
  }
}
    ${Vt}`,m.gql`
    mutation TagsMerge($source: [ID!]!, $destination: ID!, $values: TagUpdateInput) {
  tagsMerge(input: {source: $source, destination: $destination, values: $values}) {
    ...TagData
  }
}
    ${Vt}`,m.gql`
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
    `,m.gql`
    query FindSavedFilter($id: ID!) {
  findSavedFilter(id: $id) {
    ...SavedFilterData
  }
}
    ${ki}`,m.gql`
    query FindSavedFilters($mode: FilterMode) {
  findSavedFilters(mode: $mode) {
    ...SavedFilterData
  }
}
    ${ki}`,m.gql`
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
    ${Ni}`,m.gql`
    query FindFoldersForQuery($filter: FindFilterType, $folder_filter: FolderFilterType, $ids: [ID!]) {
  findFolders(filter: $filter, folder_filter: $folder_filter, ids: $ids) {
    count
    folders {
      ...RecursiveFolderData
    }
  }
}
    ${pf}`,m.gql`
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
    ${Ni}`;const $f=m.gql`
    query FindGalleries($filter: FindFilterType, $gallery_filter: GalleryFilterType) {
  findGalleries(gallery_filter: $gallery_filter, filter: $filter) {
    count
    galleries {
      ...SlimGalleryData
    }
  }
}
    ${Qs}`;m.gql`
    query FindGallery($id: ID!) {
  findGallery(id: $id) {
    ...GalleryData
  }
}
    ${Rt}`,m.gql`
    query FindGalleriesForSelect($filter: FindFilterType, $gallery_filter: GalleryFilterType, $ids: [ID!]) {
  findGalleries(filter: $filter, gallery_filter: $gallery_filter, ids: $ids) {
    count
    galleries {
      ...SelectGalleryData
    }
  }
}
    ${mf}`,m.gql`
    query FindGalleryImageID($id: ID!, $index: Int!) {
  findGallery(id: $id) {
    image(index: $index) {
      id
    }
  }
}
    `;const Pf=m.gql`
    query FindImages($filter: FindFilterType, $image_filter: ImageFilterType, $image_ids: [Int!]) {
  findImages(filter: $filter, image_filter: $image_filter, image_ids: $image_ids) {
    count
    images {
      ...SlimImageData
    }
  }
}
    ${fr}`;m.gql`
    query FindImagesMetadata($filter: FindFilterType, $image_filter: ImageFilterType, $image_ids: [Int!]) {
  findImages(filter: $filter, image_filter: $image_filter, image_ids: $image_ids) {
    megapixels
    filesize
  }
}
    `,m.gql`
    query FindImage($id: ID!, $checksum: String) {
  findImage(id: $id, checksum: $checksum) {
    ...ImageData
  }
}
    ${vf}`,m.gql`
    query JobQueue {
  jobQueue {
    ...JobData
  }
}
    ${Ws}`,m.gql`
    query FindJob($input: FindJobInput!) {
  findJob(input: $input) {
    ...JobData
  }
}
    ${Ws}`,m.gql`
    query SceneWall($q: String) {
  sceneWall(q: $q) {
    ...SceneData
  }
}
    ${xt}`,m.gql`
    query MarkerWall($q: String) {
  markerWall(q: $q) {
    ...SceneMarkerData
  }
}
    ${St}`,m.gql`
    query MarkerStrings($q: String, $sort: String) {
  markerStrings(q: $q, sort: $sort) {
    id
    count
    title
  }
}
    `,m.gql`
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
    `,m.gql`
    query Logs {
  logs {
    ...LogEntryData
  }
}
    ${Ys}`,m.gql`
    query Version {
  version {
    version
    hash
    build_time
  }
}
    `,m.gql`
    query LatestVersion {
  latestversion {
    version
    shorthash
    release_date
    url
  }
}
    `;const Mf=m.gql`
    query FindGroups($filter: FindFilterType, $group_filter: GroupFilterType) {
  findGroups(filter: $filter, group_filter: $group_filter) {
    count
    groups {
      ...ListGroupData
    }
  }
}
    ${hf}`;m.gql`
    query FindGroup($id: ID!) {
  findGroup(id: $id) {
    ...GroupData
  }
}
    ${_n}`,m.gql`
    query FindGroupsForSelect($filter: FindFilterType, $group_filter: GroupFilterType, $ids: [ID!]) {
  findGroups(filter: $filter, group_filter: $group_filter, ids: $ids) {
    count
    groups {
      ...SelectGroupData
    }
  }
}
    ${gf}`;const Ff=m.gql`
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
    ${pt}`;m.gql`
    query FindPerformer($id: ID!) {
  findPerformer(id: $id) {
    ...PerformerData
  }
}
    ${pt}`,m.gql`
    query FindPerformersForSelect($filter: FindFilterType, $performer_filter: PerformerFilterType, $ids: [ID!]) {
  findPerformers(filter: $filter, performer_filter: $performer_filter, ids: $ids) {
    count
    performers {
      ...SelectPerformerData
    }
  }
}
    ${bf}`,m.gql`
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
    `,m.gql`
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
    `,m.gql`
    query InstalledPluginPackages {
  installedPackages(type: Plugin) {
    ...PackageData
  }
}
    ${qt}`,m.gql`
    query InstalledPluginPackagesStatus {
  installedPackages(type: Plugin) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${qt}`,m.gql`
    query AvailablePluginPackages($source: String!) {
  availablePackages(source: $source, type: Plugin) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${qt}`;const eo=m.gql`
    query FindSceneMarkers($filter: FindFilterType, $scene_marker_filter: SceneMarkerFilterType) {
  findSceneMarkers(filter: $filter, scene_marker_filter: $scene_marker_filter) {
    count
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${St}`,to=m.gql`
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
    ${In}`;m.gql`
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
    ${In}`,m.gql`
    query FindDuplicateScenes($distance: Int, $duration_diff: Float) {
  findDuplicateScenes(distance: $distance, duration_diff: $duration_diff) {
    ...SlimSceneData
  }
}
    ${In}`,m.gql`
    query FindScene($id: ID!, $checksum: String) {
  findScene(id: $id, checksum: $checksum) {
    ...SceneData
  }
}
    ${xt}`,m.gql`
    query FindFullScenes($ids: [Int!]) {
  findScenes(scene_ids: $ids) {
    scenes {
      ...SceneData
    }
  }
}
    ${xt}`,m.gql`
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
    ${St}`,m.gql`
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
    ${In}`,m.gql`
    query SceneStreams($id: ID!) {
  findScene(id: $id) {
    sceneStreams {
      url
      mime_type
      label
    }
  }
}
    `,m.gql`
    query FindScenesForSelect($filter: FindFilterType, $scene_filter: SceneFilterType, $ids: [ID!]) {
  findScenes(filter: $filter, scene_filter: $scene_filter, ids: $ids) {
    count
    scenes {
      ...SelectSceneData
    }
  }
}
    ${Sf}`,m.gql`
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
    `,m.gql`
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
    `,m.gql`
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
    `,m.gql`
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
    `,m.gql`
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
    `,m.gql`
    query ScrapeSingleStudio($source: ScraperSourceInput!, $input: ScrapeSingleStudioInput!) {
  scrapeSingleStudio(source: $source, input: $input) {
    ...ScrapedStudioData
  }
}
    ${xf}`,m.gql`
    query ScrapeSingleTag($source: ScraperSourceInput!, $input: ScrapeSingleTagInput!) {
  scrapeSingleTag(source: $source, input: $input) {
    ...ScrapedSceneTagData
  }
}
    ${Je}`,m.gql`
    query ScrapeSinglePerformer($source: ScraperSourceInput!, $input: ScrapeSinglePerformerInput!) {
  scrapeSinglePerformer(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${Li}`,m.gql`
    query ScrapeMultiPerformers($source: ScraperSourceInput!, $input: ScrapeMultiPerformersInput!) {
  scrapeMultiPerformers(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${Li}`,m.gql`
    query ScrapePerformerURL($url: String!) {
  scrapePerformerURL(url: $url) {
    ...ScrapedPerformerData
  }
}
    ${Li}`,m.gql`
    query ScrapeSingleScene($source: ScraperSourceInput!, $input: ScrapeSingleSceneInput!) {
  scrapeSingleScene(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${ji}`,m.gql`
    query ScrapeMultiScenes($source: ScraperSourceInput!, $input: ScrapeMultiScenesInput!) {
  scrapeMultiScenes(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${ji}`,m.gql`
    query ScrapeSceneURL($url: String!) {
  scrapeSceneURL(url: $url) {
    ...ScrapedSceneData
  }
}
    ${ji}`,m.gql`
    query ScrapeSingleGallery($source: ScraperSourceInput!, $input: ScrapeSingleGalleryInput!) {
  scrapeSingleGallery(source: $source, input: $input) {
    ...ScrapedGalleryData
  }
}
    ${Xs}`,m.gql`
    query ScrapeSingleImage($source: ScraperSourceInput!, $input: ScrapeSingleImageInput!) {
  scrapeSingleImage(source: $source, input: $input) {
    ...ScrapedImageData
  }
}
    ${Zs}`,m.gql`
    query ScrapeGalleryURL($url: String!) {
  scrapeGalleryURL(url: $url) {
    ...ScrapedGalleryData
  }
}
    ${Xs}`,m.gql`
    query ScrapeImageURL($url: String!) {
  scrapeImageURL(url: $url) {
    ...ScrapedImageData
  }
}
    ${Zs}`,m.gql`
    query ScrapeGroupURL($url: String!) {
  scrapeGroupURL(url: $url) {
    ...ScrapedGroupData
  }
}
    ${If}`,m.gql`
    query InstalledScraperPackages {
  installedPackages(type: Scraper) {
    ...PackageData
  }
}
    ${qt}`,m.gql`
    query InstalledScraperPackagesStatus {
  installedPackages(type: Scraper) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${qt}`,m.gql`
    query AvailableScraperPackages($source: String!) {
  availablePackages(source: $source, type: Scraper) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${qt}`;const Nf=m.gql`
    query Configuration {
  configuration {
    ...ConfigData
  }
}
    ${ff}`;function kf(e){const t={...Sn,...e};return bn.useQuery(Nf,t)}const Af=m.gql`
    query Directory($path: String) {
  directory(path: $path) {
    path
    parent
    directories
  }
}
    `;function Lf(e){const t={...Sn,...e};return bn.useQuery(Af,t)}m.gql`
    query ValidateStashBox($input: StashBoxInput!) {
  validateStashBoxCredentials(input: $input) {
    valid
    status
  }
}
    `,m.gql`
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
    `,m.gql`
    query FindStudios($filter: FindFilterType, $studio_filter: StudioFilterType) {
  findStudios(filter: $filter, studio_filter: $studio_filter) {
    count
    studios {
      ...StudioData
    }
  }
}
    ${wn}`,m.gql`
    query FindStudio($id: ID!) {
  findStudio(id: $id) {
    ...StudioData
  }
}
    ${wn}`,m.gql`
    query FindStudiosForSelect($filter: FindFilterType, $studio_filter: StudioFilterType, $ids: [ID!]) {
  findStudios(filter: $filter, studio_filter: $studio_filter, ids: $ids) {
    count
    studios {
      ...SelectStudioData
    }
  }
}
    ${_f}`;const no=m.gql`
    query FindTags($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...TagData
    }
  }
}
    ${Vt}`,jf=m.gql`
    query FindTag($id: ID!) {
  findTag(id: $id) {
    ...TagData
  }
}
    ${Vt}`;function Bf(e){const t={...Sn,...e};return bn.useQuery(jf,t)}const ro=m.gql`
    query FindTagsForSelect($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...SelectTagData
    }
  }
}
    ${Cf}`;m.gql`
    query FindTagsForList($filter: FindFilterType, $tag_filter: TagFilterType) {
  findTags(filter: $filter, tag_filter: $tag_filter) {
    count
    tags {
      ...TagListData
    }
  }
}
    ${wf}`,m.gql`
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
    `,m.gql`
    subscription LoggingSubscribe {
  loggingSubscribe {
    ...LogEntryData
  }
}
    ${Ys}`;const Rf=m.gql`
    subscription ScanCompleteSubscribe {
  scanCompleteSubscribe
}
    `,io=O.createContext(null),mt=()=>{const e=O.useContext(io);if(e===null)throw new Error("useConfigurationContext must be used within a ConfigurationProvider");return e},qf=({configuration:e,children:t})=>d.jsx(io.Provider,{value:{configuration:e},children:t}),ao={},Vf={},so={},Gf={};function Uf(e,t){if(ao[e])throw new Error("Component "+e+" has already been registered");return ao[e]=t,t}function zf(e,t,n,r){if(!e.length)return t.apply(n,r);let i=1;function a(){if(i>=e.length)return t;const s=e[i++];return new Proxy(s,{apply:(o,u,c)=>o.apply(u,c.concat(a()))})}return e[0].apply(n,r.concat(a()))}function oo(e,t){return new Proxy(t,{apply(n,r,i){let a;for(const s of Vf[e]||[])i=s.apply(r,i);so[e]?a=zf(so[e],n,r,i):a=n.apply(r,i);for(const s of Gf[e]||[])a=s.apply(r,i.concat(a));return a}})}function he(e,t){const n=oo(e,t);return Uf(e,n),n}const Ee=he("Icon",e=>d.jsx(Jd.FontAwesomeIcon,{...e,className:`fa-icon ${e.className??""}`})),Hf=()=>{},Wf=({children:e,show:t,icon:n,header:r,cancel:i,accept:a,onHide:s,isRunning:o,disabled:u,modalProps:c,dialogClassName:l,footerButtons:f,leftFooterButtons:g})=>d.jsxs(z.Modal,{className:"ModalComponent",keyboard:!1,onHide:s??Hf,show:t,dialogClassName:l,...c,children:[d.jsxs(z.Modal.Header,{children:[n?d.jsx(Ee,{icon:n}):"",d.jsx("span",{children:r??""})]}),d.jsx(z.Modal.Body,{children:e}),d.jsxs(z.Modal.Footer,{className:"ModalFooter",children:[d.jsx("div",{children:g}),d.jsxs("div",{children:[f,i?d.jsx(z.Button,{disabled:o,variant:i.variant??"primary",onClick:i.onClick,className:"ml-2",children:i.text??d.jsx(Se.FormattedMessage,{id:"actions.cancel",defaultMessage:"Cancel",description:"Cancels the current action and dismisses the modal."})}):"",d.jsx(z.Button,{disabled:o||u,variant:(a==null?void 0:a.variant)??"primary",onClick:a==null?void 0:a.onClick,className:"ml-2",children:o?d.jsx(z.Spinner,{animation:"border",role:"status",size:"sm"}):(a==null?void 0:a.text)??d.jsx(Se.FormattedMessage,{id:"actions.close",defaultMessage:"Close",description:"Closes the current modal."})})]})]})]});function Yf(e){let t="";return e instanceof Error&&(t=e.message),t||(t=String(e)),t||(t="Unknown error"),t}var uo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var a="",s=0;s<arguments.length;s++){var o=arguments[s];o&&(a=i(a,r(o)))}return a}function r(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return n.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var s="";for(var o in a)t.call(a,o)&&a[o]&&(s=i(s,o));return s}function i(a,s){return s?a?a+" "+s:a+s:a}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(uo);var Qf=uo.exports;const Ge=Ps(Qf),Kf=100,Jf=5e3;let Xf=0;const co=O.createContext(null),Zf=({children:e})=>{const[t,n]=O.useState(),[r,i]=O.useState(!1),[a,s]=O.useState(!1),o=O.useMemo(()=>{function l(){s(!0)}return!t||a?null:d.jsx(z.Toast,{autohide:!0,onClose:()=>i(!0),className:t.variant??"success",delay:t.delay??3e3,children:d.jsxs(z.Toast.Header,{children:[d.jsx("span",{className:"mr-auto",onClick:()=>l(),children:t.content}),t.variant==="danger"&&d.jsx(z.Button,{variant:"minimal",className:"expand-error-button",onClick:()=>l(),children:d.jsx(Ee,{icon:ce.faArrowUpRightFromSquare})})]})},t.id)},[t,a]);function u(l){(r||!t||(l.priority??0)>=(t.priority??0))&&(i(!1),n({...l,id:Xf++}))}function c(){const{content:l}=t??{};l&&typeof l=="string"&&navigator.clipboard&&navigator.clipboard.writeText(l)}return d.jsxs(co.Provider,{value:u,children:[e,a&&d.jsx(Wf,{dialogClassName:"toast-expanded-dialog",show:a,accept:{onClick:()=>{n(void 0),s(!1)}},header:d.jsx(Se.FormattedMessage,{id:"errors.header"}),icon:ce.faTriangleExclamation,footerButtons:!!navigator.clipboard&&d.jsx(z.Button,{variant:"secondary",onClick:()=>c(),children:d.jsx(Se.FormattedMessage,{id:"actions.copy_to_clipboard"})}),children:t==null?void 0:t.content}),d.jsx("div",{className:Ge("toast-container row",{hidden:!t||r}),children:o})]})},ep=()=>{const e=O.useContext(co);if(!e)throw new Error("useToast must be used within a ToastProvider");return O.useMemo(()=>({toast:e,success(t){e({content:t})},error(t){const n=Yf(t);console.error(t),e({variant:"danger",content:n,priority:Kf,delay:Jf})}}),[e])};var Bi=function(e,t){return Bi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Bi(e,t)};function mr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Bi(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Te=function(){return Te=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Te.apply(this,arguments)};function Gt(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}typeof SuppressedError=="function"&&SuppressedError;var Ri="Invariant Violation",lo=Object.setPrototypeOf,tp=lo===void 0?function(e,t){return e.__proto__=t,e}:lo,fo=function(e){mr(t,e);function t(n){n===void 0&&(n=Ri);var r=e.call(this,typeof n=="number"?Ri+": "+n+" (see https://github.com/apollographql/invariant-packages)":n)||this;return r.framesToPop=1,r.name=Ri,tp(r,t.prototype),r}return t}(Error);function It(e,t){if(!e)throw new fo(t)}var po=["debug","log","warn","error","silent"],np=po.indexOf("log");function gr(e){return function(){if(po.indexOf(e)>=np){var t=console[e]||console.log;return t.apply(console,arguments)}}}(function(e){e.debug=gr("debug"),e.log=gr("log"),e.warn=gr("warn"),e.error=gr("error")})(It||(It={}));var mo="3.14.1";function Ut(e){try{return e()}catch{}}const hr=Ut(function(){return globalThis})||Ut(function(){return window})||Ut(function(){return self})||Ut(function(){return global})||Ut(function(){return Ut.constructor("return this")()});var go=new Map;function rp(e){var t=go.get(e)||1;return go.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function ip(e,t){var n=rp("stringifyForDisplay");return JSON.stringify(e,function(r,i){return i===void 0?n:i},t).split(JSON.stringify(n)).join("<undefined>")}function vr(e){return function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(typeof t=="number"){var i=t;t=qi(i),t||(t=Vi(i,n),n=[])}e.apply(void 0,[t].concat(n))}}var zt=Object.assign(function(t,n){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];t||It(t,qi(n,r)||Vi(n,r))},{debug:vr(It.debug),log:vr(It.log),warn:vr(It.warn),error:vr(It.error)});function On(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new fo(qi(e,t)||Vi(e,t))}var ho=Symbol.for("ApolloErrorMessageHandler_"+mo);function vo(e){if(typeof e=="string")return e;try{return ip(e,2).slice(0,1e3)}catch{return"<non-serializable>"}}function qi(e,t){if(t===void 0&&(t=[]),!!e)return hr[ho]&&hr[ho](e,t.map(vo))}function Vi(e,t){if(t===void 0&&(t=[]),!!e)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:mo,message:e,args:t.map(vo)})))}function ap(e,t){if(!!!e)throw new Error(t)}const bo={Name:[],Document:["definitions"],OperationDefinition:["description","name","variableDefinitions","directives","selectionSet"],VariableDefinition:["description","variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["description","name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","directives","locations"],SchemaExtension:["directives","operationTypes"],DirectiveExtension:["name","directives"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"],TypeCoordinate:["name"],MemberCoordinate:["name","memberName"],ArgumentCoordinate:["name","fieldName","argumentName"],DirectiveCoordinate:["name"],DirectiveArgumentCoordinate:["name","argumentName"]},sp=new Set(Object.keys(bo));function yo(e){const t=e==null?void 0:e.kind;return typeof t=="string"&&sp.has(t)}var So;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(So||(So={}));var Gi;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.DIRECTIVE_EXTENSION="DirectiveExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension",e.TYPE_COORDINATE="TypeCoordinate",e.MEMBER_COORDINATE="MemberCoordinate",e.ARGUMENT_COORDINATE="ArgumentCoordinate",e.DIRECTIVE_COORDINATE="DirectiveCoordinate",e.DIRECTIVE_ARGUMENT_COORDINATE="DirectiveArgumentCoordinate"})(Gi||(Gi={}));function xo(e){return e===9||e===32}function op(e,t){const n=e.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),i=r.length===1,a=r.length>1&&r.slice(1).every(p=>p.length===0||xo(p.charCodeAt(0))),s=n.endsWith('\\"""'),o=e.endsWith('"')&&!s,u=e.endsWith("\\"),c=o||u,l=!i||e.length>70||c||a||s;let f="";const g=i&&xo(e.charCodeAt(0));return(l&&!g||a)&&(f+=`
`),f+=n,(l||c)&&(f+=`
`),'"""'+f+'"""'}const up=10,Io=2;function cp(e){return br(e,[])}function br(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return lp(e,t);default:return String(e)}}function lp(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const n=[...t,e];if(dp(e)){const r=e.toJSON();if(r!==e)return typeof r=="string"?r:br(r,n)}else if(Array.isArray(e))return pp(e,n);return fp(e,n)}function dp(e){return typeof e.toJSON=="function"}function fp(e,t){const n=Object.entries(e);return n.length===0?"{}":t.length>Io?"["+mp(e)+"]":"{ "+n.map(([i,a])=>i+": "+br(a,t)).join(", ")+" }"}function pp(e,t){if(e.length===0)return"[]";if(t.length>Io)return"[Array]";const n=Math.min(up,e.length),r=e.length-n,i=[];for(let a=0;a<n;++a)i.push(br(e[a],t));return r===1?i.push("... 1 more item"):r>1&&i.push(`... ${r} more items`),"["+i.join(", ")+"]"}function mp(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}function gp(e){return`"${e.replace(hp,vp)}"`}const hp=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function vp(e){return bp[e.charCodeAt(0)]}const bp=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],yp=Object.freeze({});function Sp(e,t,n=bo){const r=new Map;for(const x of Object.values(Gi))r.set(x,xp(t,x));let i,a=Array.isArray(e),s=[e],o=-1,u=[],c=e,l,f;const g=[],p=[];do{o++;const x=o===s.length,v=x&&u.length!==0;if(x){if(l=p.length===0?void 0:g[g.length-1],c=f,f=p.pop(),v)if(a){c=c.slice();let T=0;for(const[_,I]of u){const h=_-T;I===null?(c.splice(h,1),T++):c[h]=I}}else{c={...c};for(const[T,_]of u)c[T]=_}o=i.index,s=i.keys,u=i.edits,a=i.inArray,i=i.prev}else if(f){if(l=a?o:s[o],c=f[l],c==null)continue;g.push(l)}let w;if(!Array.isArray(c)){var C,S;yo(c)||ap(!1,`Invalid AST Node: ${cp(c)}.`);const T=x?(C=r.get(c.kind))===null||C===void 0?void 0:C.leave:(S=r.get(c.kind))===null||S===void 0?void 0:S.enter;if(w=T==null?void 0:T.call(t,c,l,f,g,p),w===yp)break;if(w===!1){if(!x){g.pop();continue}}else if(w!==void 0&&(u.push([l,w]),!x))if(yo(w))c=w;else{g.pop();continue}}if(w===void 0&&v&&u.push([l,c]),x)g.pop();else{var b;i={inArray:a,index:o,keys:s,edits:u,prev:i},a=Array.isArray(c),s=a?c:(b=n[c.kind])!==null&&b!==void 0?b:[],o=-1,u=[],f&&p.push(f),f=c}}while(i!==void 0);return u.length!==0?u[u.length-1][1]:e}function xp(e,t){const n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function Ip(e){return Sp(e,Cp)}const _p=80,Cp={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>N(e.definitions,`

`)},OperationDefinition:{leave(e){const t=Ui(e.variableDefinitions)?Q(`(
`,N(e.variableDefinitions,`
`),`
)`):Q("(",N(e.variableDefinitions,", "),")"),n=Q("",e.description,`
`)+N([e.operation,N([e.name,t]),N(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r,description:i})=>Q("",i,`
`)+e+": "+t+Q(" = ",n)+Q(" ",N(r," "))},SelectionSet:{leave:({selections:e})=>Xe(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:i}){const a=Q("",e,": ")+t;let s=a+Q("(",N(n,", "),")");return s.length>_p&&(s=a+Q(`(
`,yr(N(n,`
`)),`
)`)),N([s,N(r," "),i]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+Q(" ",N(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>N(["...",Q("on ",e),N(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:i,description:a})=>Q("",a,`
`)+`fragment ${e}${Q("(",N(n,", "),")")} on ${t} ${Q("",N(r," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?op(e):gp(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+N(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+N(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+Q("(",N(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>Q("",e,`
`)+N(["schema",N(t," "),Xe(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>Q("",e,`
`)+N(["scalar",t,N(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>Q("",e,`
`)+N(["type",t,Q("implements ",N(n," & ")),N(r," "),Xe(i)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:i})=>Q("",e,`
`)+t+(Ui(n)?Q(`(
`,yr(N(n,`
`)),`
)`):Q("(",N(n,", "),")"))+": "+r+Q(" ",N(i," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:i})=>Q("",e,`
`)+N([t+": "+n,Q("= ",r),N(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>Q("",e,`
`)+N(["interface",t,Q("implements ",N(n," & ")),N(r," "),Xe(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>Q("",e,`
`)+N(["union",t,N(n," "),Q("= ",N(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>Q("",e,`
`)+N(["enum",t,N(n," "),Xe(r)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>Q("",e,`
`)+N([t,N(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>Q("",e,`
`)+N(["input",t,N(n," "),Xe(r)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,directives:r,repeatable:i,locations:a})=>Q("",e,`
`)+"directive @"+t+(Ui(n)?Q(`(
`,yr(N(n,`
`)),`
)`):Q("(",N(n,", "),")"))+Q(" ",N(r," "))+(i?" repeatable":"")+" on "+N(a," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>N(["extend schema",N(e," "),Xe(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>N(["extend scalar",e,N(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>N(["extend type",e,Q("implements ",N(t," & ")),N(n," "),Xe(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>N(["extend interface",e,Q("implements ",N(t," & ")),N(n," "),Xe(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>N(["extend union",e,N(t," "),Q("= ",N(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>N(["extend enum",e,N(t," "),Xe(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>N(["extend input",e,N(t," "),Xe(n)]," ")},DirectiveExtension:{leave:({name:e,directives:t})=>N(["extend directive @"+e,N(t," ")]," ")},TypeCoordinate:{leave:({name:e})=>e},MemberCoordinate:{leave:({name:e,memberName:t})=>N([e,Q(".",t)])},ArgumentCoordinate:{leave:({name:e,fieldName:t,argumentName:n})=>N([e,Q(".",t),Q("(",n,":)")])},DirectiveCoordinate:{leave:({name:e})=>N(["@",e])},DirectiveArgumentCoordinate:{leave:({name:e,argumentName:t})=>N(["@",e,Q("(",t,":)")])}};function N(e,t=""){var n;return(n=e==null?void 0:e.filter(r=>r).join(t))!==null&&n!==void 0?n:""}function Xe(e){return Q(`{
`,yr(N(e,`
`)),`
}`)}function Q(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function yr(e){return Q("  ",e.replace(/\n/g,`
  `))}function Ui(e){var t;return(t=e==null?void 0:e.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}function zi(e){return e!==null&&typeof e=="object"}function wp(){}class _o{constructor(t=1/0,n=wp){this.max=t,this.dispose=n,this.map=new Map,this.newest=null,this.oldest=null}has(t){return this.map.has(t)}get(t){const n=this.getNode(t);return n&&n.value}get size(){return this.map.size}getNode(t){const n=this.map.get(t);if(n&&n!==this.newest){const{older:r,newer:i}=n;i&&(i.older=r),r&&(r.newer=i),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=i)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(t,r),r.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(t){const n=this.map.get(t);return n?(n===this.newest&&(this.newest=n.older),n===this.oldest&&(this.oldest=n.newer),n.newer&&(n.newer.older=n.older),n.older&&(n.older.newer=n.newer),this.map.delete(t),this.dispose(n.value,t),!0):!1}}function Hi(){}const Op=Hi,Ep=typeof WeakRef<"u"?WeakRef:function(e){return{deref:()=>e}},Tp=typeof WeakMap<"u"?WeakMap:Map,Dp=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:Hi,unregister:Hi}},$p=10024;class Co{constructor(t=1/0,n=Op){this.max=t,this.dispose=n,this.map=new Tp,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{const r=this.unfinalizedNodes.values();for(let i=0;i<$p;i++){const a=r.next().value;if(!a)break;this.unfinalizedNodes.delete(a);const s=a.key;delete a.key,a.keyRef=new Ep(s),this.registry.register(s,a,a)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new Dp(this.deleteNode.bind(this))}has(t){return this.map.has(t)}get(t){const n=this.getNode(t);return n&&n.value}getNode(t){const n=this.map.get(t);if(n&&n!==this.newest){const{older:r,newer:i}=n;i&&(i.older=r),r&&(r.newer=i),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=i)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.scheduleFinalization(r),this.map.set(t,r),this.size++,r.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(t){t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.size--;const n=t.key||t.keyRef&&t.keyRef.deref();this.dispose(t.value,n),t.keyRef?this.registry.unregister(t):this.unfinalizedNodes.delete(t),n&&this.map.delete(n)}delete(t){const n=this.map.get(t);return n?(this.deleteNode(n),!0):!1}scheduleFinalization(t){this.unfinalizedNodes.add(t),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}}var Wi=new WeakSet;function wo(e){e.size<=(e.max||-1)||Wi.has(e)||(Wi.add(e),setTimeout(function(){e.clean(),Wi.delete(e)},100))}var Pp=function(e,t){var n=new Co(e,t);return n.set=function(r,i){var a=Co.prototype.set.call(this,r,i);return wo(this),a},n},Mp=function(e,t){var n=new _o(e,t);return n.set=function(r,i){var a=_o.prototype.set.call(this,r,i);return wo(this),a},n},Fp=Symbol.for("apollo.cacheSize"),Oo=Te({},hr[Fp]),Np={};function Eo(e,t){Np[e]=t}var To=Object.assign(function(t){return JSON.stringify(t,kp)},{reset:function(){Ht=new Mp(Oo.canonicalStringify||1e3)}});globalThis.__DEV__!==!1&&Eo("canonicalStringify",function(){return Ht.size});var Ht;To.reset();function kp(e,t){if(t&&typeof t=="object"){var n=Object.getPrototypeOf(t);if(n===Object.prototype||n===null){var r=Object.keys(t);if(r.every(Ap))return t;var i=JSON.stringify(r),a=Ht.get(i);if(!a){r.sort();var s=JSON.stringify(r);a=Ht.get(s)||r,Ht.set(i,a),Ht.set(s,a)}var o=Object.create(n);return a.forEach(function(u){o[u]=t[u]}),o}}return t}function Ap(e,t,n){return t===0||n[t-1]<=e}var Lp=["connection","include","skip","client","rest","export","nonreactive"],En=To;Object.assign(function(e,t,n){if(t&&n&&n.connection&&n.connection.key)if(n.connection.filter&&n.connection.filter.length>0){var r=n.connection.filter?n.connection.filter:[];r.sort();var i={};return r.forEach(function(o){i[o]=t[o]}),"".concat(n.connection.key,"(").concat(En(i),")")}else return n.connection.key;var a=e;if(t){var s=En(t);a+="(".concat(s,")")}return n&&Object.keys(n).forEach(function(o){Lp.indexOf(o)===-1&&(n[o]&&Object.keys(n[o]).length?a+="@".concat(o,"(").concat(En(n[o]),")"):a+="@".concat(o))}),a},{setStringify:function(e){var t=En;return En=e,t}});function jp(e){return e.kind==="Field"}function Do(e){zt(e&&e.kind==="Document",115);var t=e.definitions.filter(function(n){return n.kind!=="FragmentDefinition"}).map(function(n){if(n.kind!=="OperationDefinition")throw On(116,n.kind);return n});return zt(t.length<=1,117,t.length),e}function Bp(e){return Do(e),e.definitions.filter(function(t){return t.kind==="OperationDefinition"})[0]}function Rp(e){return e.definitions.filter(function(t){return t.kind==="OperationDefinition"&&!!t.name}).map(function(t){return t.name.value})[0]||null}function qp(e){var t=Bp(e);return zt(t&&t.operation==="query",118),t}function Vp(e){Do(e);for(var t,n=0,r=e.definitions;n<r.length;n++){var i=r[n];if(i.kind==="OperationDefinition"){var a=i.operation;if(a==="query"||a==="mutation"||a==="subscription")return i}i.kind==="FragmentDefinition"&&!t&&(t=i)}if(t)return t;throw On(122)}let Me=null;const $o={};let Gp=1;const Up=()=>class{constructor(){this.id=["slot",Gp++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let t=Me;t;t=t.parent)if(this.id in t.slots){const n=t.slots[this.id];if(n===$o)break;return t!==Me&&(Me.slots[this.id]=n),!0}return Me&&(Me.slots[this.id]=$o),!1}getValue(){if(this.hasValue())return Me.slots[this.id]}withValue(t,n,r,i){const a={__proto__:null,[this.id]:t},s=Me;Me={parent:s,slots:a};try{return n.apply(i,r)}finally{Me=s}}static bind(t){const n=Me;return function(){const r=Me;try{return Me=n,t.apply(this,arguments)}finally{Me=r}}}static noContext(t,n,r){if(Me){const i=Me;try{return Me=null,t.apply(r,n)}finally{Me=i}}else return t.apply(r,n)}};function Po(e){try{return e()}catch{}}const Yi="@wry/context:Slot",Mo=Po(()=>globalThis)||Po(()=>global)||Object.create(null),Qi=Mo[Yi]||Array[Yi]||function(e){try{Object.defineProperty(Mo,Yi,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}}(Up()),{bind:FO,noContext:NO}=Qi;new Qi;var Tn,Ki=Object.assign(function(e){var t=Tn.get(e);return t||(t=Ip(e),Tn.set(e,t)),t},{reset:function(){Tn=new Pp(Oo.print||2e3)}});Ki.reset(),globalThis.__DEV__!==!1&&Eo("print",function(){return Tn?Tn.size:0});function zp(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=Hp(e))||t){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hp(e,t){if(e){if(typeof e=="string")return Fo(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fo(e,t)}}function Fo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function No(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ji(e,t,n){return t&&No(e.prototype,t),n&&No(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var Xi=function(){return typeof Symbol=="function"},Zi=function(e){return Xi()&&!!Symbol[e]},ea=function(e){return Zi(e)?Symbol[e]:"@@"+e};Xi()&&!Zi("observable")&&(Symbol.observable=Symbol("observable"));var Wp=ea("iterator"),ta=ea("observable"),ko=ea("species");function Sr(e,t){var n=e[t];if(n!=null){if(typeof n!="function")throw new TypeError(n+" is not a function");return n}}function Dn(e){var t=e.constructor;return t!==void 0&&(t=t[ko],t===null&&(t=void 0)),t!==void 0?t:Ce}function Yp(e){return e instanceof Ce}function Wt(e){Wt.log?Wt.log(e):setTimeout(function(){throw e})}function xr(e){Promise.resolve().then(function(){try{e()}catch(t){Wt(t)}})}function Ao(e){var t=e._cleanup;if(t!==void 0&&(e._cleanup=void 0,!!t))try{if(typeof t=="function")t();else{var n=Sr(t,"unsubscribe");n&&n.call(t)}}catch(r){Wt(r)}}function na(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function Qp(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var n=0;n<t.length&&(Lo(e,t[n].type,t[n].value),e._state!=="closed");++n);}}function Lo(e,t,n){e._state="running";var r=e._observer;try{var i=Sr(r,t);switch(t){case"next":i&&i.call(r,n);break;case"error":if(na(e),i)i.call(r,n);else throw n;break;case"complete":na(e),i&&i.call(r);break}}catch(a){Wt(a)}e._state==="closed"?Ao(e):e._state==="running"&&(e._state="ready")}function ra(e,t,n){if(e._state!=="closed"){if(e._state==="buffering"){e._queue.push({type:t,value:n});return}if(e._state!=="ready"){e._state="buffering",e._queue=[{type:t,value:n}],xr(function(){return Qp(e)});return}Lo(e,t,n)}}var Kp=function(){function e(n,r){this._cleanup=void 0,this._observer=n,this._queue=void 0,this._state="initializing";var i=new Jp(this);try{this._cleanup=r.call(void 0,i)}catch(a){i.error(a)}this._state==="initializing"&&(this._state="ready")}var t=e.prototype;return t.unsubscribe=function(){this._state!=="closed"&&(na(this),Ao(this))},Ji(e,[{key:"closed",get:function(){return this._state==="closed"}}]),e}(),Jp=function(){function e(n){this._subscription=n}var t=e.prototype;return t.next=function(r){ra(this._subscription,"next",r)},t.error=function(r){ra(this._subscription,"error",r)},t.complete=function(){ra(this._subscription,"complete")},Ji(e,[{key:"closed",get:function(){return this._subscription._state==="closed"}}]),e}(),Ce=function(){function e(n){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if(typeof n!="function")throw new TypeError("Observable initializer must be a function");this._subscriber=n}var t=e.prototype;return t.subscribe=function(r){return(typeof r!="object"||r===null)&&(r={next:r,error:arguments[1],complete:arguments[2]}),new Kp(r,this._subscriber)},t.forEach=function(r){var i=this;return new Promise(function(a,s){if(typeof r!="function"){s(new TypeError(r+" is not a function"));return}function o(){u.unsubscribe(),a()}var u=i.subscribe({next:function(c){try{r(c,o)}catch(l){s(l),u.unsubscribe()}},error:s,complete:a})})},t.map=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=Dn(this);return new a(function(s){return i.subscribe({next:function(o){try{o=r(o)}catch(u){return s.error(u)}s.next(o)},error:function(o){s.error(o)},complete:function(){s.complete()}})})},t.filter=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=Dn(this);return new a(function(s){return i.subscribe({next:function(o){try{if(!r(o))return}catch(u){return s.error(u)}s.next(o)},error:function(o){s.error(o)},complete:function(){s.complete()}})})},t.reduce=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=Dn(this),s=arguments.length>1,o=!1,u=arguments[1],c=u;return new a(function(l){return i.subscribe({next:function(f){var g=!o;if(o=!0,!g||s)try{c=r(c,f)}catch(p){return l.error(p)}else c=f},error:function(f){l.error(f)},complete:function(){if(!o&&!s)return l.error(new TypeError("Cannot reduce an empty sequence"));l.next(c),l.complete()}})})},t.concat=function(){for(var r=this,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];var o=Dn(this);return new o(function(u){var c,l=0;function f(g){c=g.subscribe({next:function(p){u.next(p)},error:function(p){u.error(p)},complete:function(){l===a.length?(c=void 0,u.complete()):f(o.from(a[l++]))}})}return f(r),function(){c&&(c.unsubscribe(),c=void 0)}})},t.flatMap=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=Dn(this);return new a(function(s){var o=[],u=i.subscribe({next:function(l){if(r)try{l=r(l)}catch(g){return s.error(g)}var f=a.from(l).subscribe({next:function(g){s.next(g)},error:function(g){s.error(g)},complete:function(){var g=o.indexOf(f);g>=0&&o.splice(g,1),c()}});o.push(f)},error:function(l){s.error(l)},complete:function(){c()}});function c(){u.closed&&o.length===0&&s.complete()}return function(){o.forEach(function(l){return l.unsubscribe()}),u.unsubscribe()}})},t[ta]=function(){return this},e.from=function(r){var i=typeof this=="function"?this:e;if(r==null)throw new TypeError(r+" is not an object");var a=Sr(r,ta);if(a){var s=a.call(r);if(Object(s)!==s)throw new TypeError(s+" is not an object");return Yp(s)&&s.constructor===i?s:new i(function(o){return s.subscribe(o)})}if(Zi("iterator")&&(a=Sr(r,Wp),a))return new i(function(o){xr(function(){if(!o.closed){for(var u=zp(a.call(r)),c;!(c=u()).done;){var l=c.value;if(o.next(l),o.closed)return}o.complete()}})});if(Array.isArray(r))return new i(function(o){xr(function(){if(!o.closed){for(var u=0;u<r.length;++u)if(o.next(r[u]),o.closed)return;o.complete()}})});throw new TypeError(r+" is not observable")},e.of=function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var s=typeof this=="function"?this:e;return new s(function(o){xr(function(){if(!o.closed){for(var u=0;u<i.length;++u)if(o.next(i[u]),o.closed)return;o.complete()}})})},Ji(e,null,[{key:ko,get:function(){return this}}]),e}();Xi()&&Object.defineProperty(Ce,Symbol("extensions"),{value:{symbol:ta,hostReportError:Wt},configurable:!0});function Xp(e){var t,n=e.Symbol;if(typeof n=="function")if(n.observable)t=n.observable;else{typeof n.for=="function"?t=n.for("https://github.com/benlesh/symbol-observable"):t=n("https://github.com/benlesh/symbol-observable");try{n.observable=t}catch{}}else t="@@observable";return t}var Yt;typeof self<"u"?Yt=self:typeof window<"u"?Yt=window:typeof global<"u"?Yt=global:typeof module<"u"?Yt=module:Yt=Function("return this")(),Xp(Yt);var jo=Ce.prototype,Bo="@@observable";jo[Bo]||(jo[Bo]=function(){return this});var ia,Zp=Symbol.for("apollo.deprecations"),Ro=Symbol.for("apollo.deprecations.slot"),aa=hr,em=(ia=aa[Ro])!==null&&ia!==void 0?ia:aa[Ro]=new Qi;function tm(e){return aa[Zp]||(em.getValue()||[]).includes(e)}function nm(e,t){tm(e)||t()}var qo=function(e,t,n){var r=new Error(n);throw r.name="ServerError",r.response=e,r.statusCode=e.status,r.result=t,r};function rm(e){for(var t=["query","operationName","variables","extensions","context"],n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];if(t.indexOf(i)<0)throw On(58,i)}return e}function im(e,t){var n=Te({},e),r=function(a){typeof a=="function"?n=Te(Te({},n),a(n)):n=Te(Te({},n),a)},i=function(){return Te({},n)};return Object.defineProperty(t,"setContext",{enumerable:!1,value:r}),Object.defineProperty(t,"getContext",{enumerable:!1,value:i}),t}function am(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName=typeof t.query!="string"?Rp(t.query)||void 0:""),t}function Vo(e,t){return t?t(e):Ce.of()}function $n(e){return typeof e=="function"?new Pn(e):e}function Ir(e){return e.request.length<=1}var Pn=function(){function e(t){t&&(this.request=t)}return e.empty=function(){return new e(function(){return Ce.of()})},e.from=function(t){return t.length===0?e.empty():t.map($n).reduce(function(n,r){return n.concat(r)})},e.split=function(t,n,r){var i=$n(n),a=$n(r||new e(Vo)),s;return Ir(i)&&Ir(a)?s=new e(function(o){return t(o)?i.request(o)||Ce.of():a.request(o)||Ce.of()}):s=new e(function(o,u){return t(o)?i.request(o,u)||Ce.of():a.request(o,u)||Ce.of()}),Object.assign(s,{left:i,right:a})},e.execute=function(t,n){return t.request(im(n.context,am(rm(n))))||Ce.of()},e.concat=function(t,n){var r=$n(t);if(Ir(r))return globalThis.__DEV__!==!1&&zt.warn(47,r),r;var i=$n(n),a;return Ir(i)?a=new e(function(s){return r.request(s,function(o){return i.request(o)||Ce.of()})||Ce.of()}):a=new e(function(s,o){return r.request(s,function(u){return i.request(u,o)||Ce.of()})||Ce.of()}),Object.assign(a,{left:r,right:i})},e.prototype.split=function(t,n,r){return this.concat(e.split(t,n,r||new e(Vo)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(t,n){throw On(48)},e.prototype.onError=function(t,n){if(globalThis.__DEV__!==!1&&nm("onError",function(){globalThis.__DEV__!==!1&&zt.warn(49)}),n&&n.error)return n.error(t),!1;throw t},e.prototype.setOnError=function(t){return globalThis.__DEV__!==!1&&globalThis.__DEV__!==!1&&zt.warn(50),this.onError=t,this},e}(),Go=Symbol();function sm(e){return e.extensions?Array.isArray(e.extensions[Go]):!1}var om=function(e){var t=Gt(Gt(Gt([],e.graphQLErrors,!0),e.clientErrors,!0),e.protocolErrors,!0);return e.networkError&&t.push(e.networkError),t.map(function(n){return zi(n)&&n.message||"Error message not found."}).join(`
`)},um=function(e){mr(t,e);function t(n){var r=n.graphQLErrors,i=n.protocolErrors,a=n.clientErrors,s=n.networkError,o=n.errorMessage,u=n.extraInfo,c=e.call(this,o)||this;return c.name="ApolloError",c.graphQLErrors=r||[],c.protocolErrors=i||[],c.clientErrors=a||[],c.networkError=s||null,c.message=o||om(c),c.extraInfo=u,c.cause=Gt(Gt(Gt([s],r||[],!0),i||[],!0),a||[],!0).find(function(l){return!!l})||null,c.__proto__=t.prototype,c}return t}(Error);function cm(e){return zi(e)&&"code"in e&&"reason"in e}function lm(e){var t;return zi(e)&&((t=e.target)===null||t===void 0?void 0:t.readyState)===WebSocket.CLOSED}var dm=function(e){mr(t,e);function t(n){var r=e.call(this)||this;return r.client=n,r}return t.prototype.request=function(n){var r=this;return new Ce(function(i){return r.client.subscribe(Te(Te({},n),{query:Ki(n.query)}),{next:i.next.bind(i),complete:i.complete.bind(i),error:function(a){if(a instanceof Error)return i.error(a);var s=cm(a);return s||lm(a)?i.error(new Error("Socket closed".concat(s?" with event ".concat(a.code):"").concat(s?" ".concat(a.reason):""))):i.error(new um({graphQLErrors:Array.isArray(a)?a:[a]}))}})})},t}(Pn);function Re(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function _t(e){return Re(e)==="object"}function fm(e){return Array.isArray(e)&&e.length>0&&e.every(t=>"message"in t)}function Uo(e,t){return e.length<124?e:t}const pm="graphql-transport-ws";var Ue;(function(e){e[e.InternalServerError=4500]="InternalServerError",e[e.InternalClientError=4005]="InternalClientError",e[e.BadRequest=4400]="BadRequest",e[e.BadResponse=4004]="BadResponse",e[e.Unauthorized=4401]="Unauthorized",e[e.Forbidden=4403]="Forbidden",e[e.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",e[e.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",e[e.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",e[e.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",e[e.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests"})(Ue||(Ue={}));var xe;(function(e){e.ConnectionInit="connection_init",e.ConnectionAck="connection_ack",e.Ping="ping",e.Pong="pong",e.Subscribe="subscribe",e.Next="next",e.Error="error",e.Complete="complete"})(xe||(xe={}));function zo(e){if(!_t(e))throw new Error(`Message is expected to be an object, but got ${Re(e)}`);if(!e.type)throw new Error("Message is missing the 'type' property");if(typeof e.type!="string")throw new Error(`Message is expects the 'type' property to be a string, but got ${Re(e.type)}`);switch(e.type){case xe.ConnectionInit:case xe.ConnectionAck:case xe.Ping:case xe.Pong:{if(e.payload!=null&&!_t(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);break}case xe.Subscribe:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Re(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!_t(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Re(e.payload)}`);if(typeof e.payload.query!="string")throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${Re(e.payload.query)}`);if(e.payload.variables!=null&&!_t(e.payload.variables))throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Re(e.payload.variables)}`);if(e.payload.operationName!=null&&Re(e.payload.operationName)!=="string")throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Re(e.payload.operationName)}`);if(e.payload.extensions!=null&&!_t(e.payload.extensions))throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Re(e.payload.extensions)}`);break}case xe.Next:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Re(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!_t(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Re(e.payload)}`);break}case xe.Error:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Re(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!fm(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);break}case xe.Complete:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Re(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);break}default:throw new Error(`Invalid message 'type' property "${e.type}"`)}return e}function mm(e,t){return zo(typeof e=="string"?JSON.parse(e,t):e)}function Mn(e,t){return zo(e),JSON.stringify(e,t)}var Qt=function(e){return this instanceof Qt?(this.v=e,this):new Qt(e)},gm=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,a=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),o("next"),o("throw"),o("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(p){return function(C){return Promise.resolve(C).then(p,f)}}function o(p,C){r[p]&&(i[p]=function(S){return new Promise(function(b,x){a.push([p,S,b,x])>1||u(p,S)})},C&&(i[p]=C(i[p])))}function u(p,C){try{c(r[p](C))}catch(S){g(a[0][3],S)}}function c(p){p.value instanceof Qt?Promise.resolve(p.value.v).then(l,f):g(a[0][2],p)}function l(p){u("next",p)}function f(p){u("throw",p)}function g(p,C){p(C),a.shift(),a.length&&u(a[0][0],a[0][1])}};function hm(e){const{url:t,connectionParams:n,lazy:r=!0,onNonLazyError:i=console.error,lazyCloseTimeout:a=0,keepAlive:s=0,disablePong:o,connectionAckWaitTimeout:u=0,retryAttempts:c=5,retryWait:l=async function(L){let k=1e3;for(let U=0;U<L;U++)k*=2;await new Promise(U=>setTimeout(U,k+Math.floor(Math.random()*2700+300)))},shouldRetry:f=sa,isFatalConnectionProblem:g,on:p,webSocketImpl:C,generateID:S=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,L=>{const k=Math.random()*16|0;return(L=="x"?k:k&3|8).toString(16)})},jsonMessageReplacer:b,jsonMessageReviver:x}=e;let v;if(C){if(!bm(C))throw new Error("Invalid WebSocket implementation provided");v=C}else typeof WebSocket<"u"?v=WebSocket:typeof global<"u"?v=global.WebSocket||global.MozWebSocket:typeof window<"u"&&(v=window.WebSocket||window.MozWebSocket);if(!v)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const w=v,T=(()=>{const M=(()=>{const k={};return{on(U,te){return k[U]=te,()=>{delete k[U]}},emit(U){var te;"id"in U&&((te=k[U.id])===null||te===void 0||te.call(k,U))}}})(),L={connecting:p!=null&&p.connecting?[p.connecting]:[],opened:p!=null&&p.opened?[p.opened]:[],connected:p!=null&&p.connected?[p.connected]:[],ping:p!=null&&p.ping?[p.ping]:[],pong:p!=null&&p.pong?[p.pong]:[],message:p!=null&&p.message?[M.emit,p.message]:[M.emit],closed:p!=null&&p.closed?[p.closed]:[],error:p!=null&&p.error?[p.error]:[]};return{onMessage:M.on,on(k,U){const te=L[k];return te.push(U),()=>{te.splice(te.indexOf(U),1)}},emit(k,...U){for(const te of[...L[k]])te(...U)}}})();function _(M){const L=[T.on("error",k=>{L.forEach(U=>U()),M(k)}),T.on("closed",k=>{L.forEach(U=>U()),M(k)})]}let I,h=0,E,D=!1,$=0,q=!1;async function W(){clearTimeout(E);const[M,L]=await(I??(I=new Promise((te,ue)=>(async()=>{if(D){if(await l($),!h)return I=void 0,ue({code:1e3,reason:"All Subscriptions Gone"});$++}T.emit("connecting",D);const F=new w(typeof t=="function"?await t():t,pm);let B,Y;function P(){isFinite(s)&&s>0&&(clearTimeout(Y),Y=setTimeout(()=>{F.readyState===w.OPEN&&(F.send(Mn({type:xe.Ping})),T.emit("ping",!1,void 0))},s))}_(R=>{I=void 0,clearTimeout(B),clearTimeout(Y),ue(R),R instanceof Ho&&(F.close(4499,"Terminated"),F.onerror=null,F.onclose=null)}),F.onerror=R=>T.emit("error",R),F.onclose=R=>T.emit("closed",R),F.onopen=async()=>{try{T.emit("opened",F);const R=typeof n=="function"?await n():n;if(F.readyState!==w.OPEN)return;F.send(Mn(R?{type:xe.ConnectionInit,payload:R}:{type:xe.ConnectionInit},b)),isFinite(u)&&u>0&&(B=setTimeout(()=>{F.close(Ue.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")},u)),P()}catch(R){T.emit("error",R),F.close(Ue.InternalClientError,Uo(R instanceof Error?R.message:new Error(R).message,"Internal client error"))}};let j=!1;F.onmessage=({data:R})=>{try{const A=mm(R,x);if(T.emit("message",A),A.type==="ping"||A.type==="pong"){T.emit(A.type,!0,A.payload),A.type==="pong"?P():o||(F.send(Mn(A.payload?{type:xe.Pong,payload:A.payload}:{type:xe.Pong})),T.emit("pong",!1,A.payload));return}if(j)return;if(A.type!==xe.ConnectionAck)throw new Error(`First message cannot be of type ${A.type}`);clearTimeout(B),j=!0,T.emit("connected",F,A.payload,D),D=!1,$=0,te([F,new Promise((ae,Pe)=>_(Pe))])}catch(A){F.onmessage=null,T.emit("error",A),F.close(Ue.BadResponse,Uo(A instanceof Error?A.message:new Error(A).message,"Bad response"))}}})())));M.readyState===w.CLOSING&&await L;let k=()=>{};const U=new Promise(te=>k=te);return[M,k,Promise.race([U.then(()=>{if(!h){const te=()=>M.close(1e3,"Normal Closure");isFinite(a)&&a>0?E=setTimeout(()=>{M.readyState===w.OPEN&&te()},a):te()}}),L])]}function ne(M){if(sa(M)&&(vm(M.code)||[Ue.InternalServerError,Ue.InternalClientError,Ue.BadRequest,Ue.BadResponse,Ue.Unauthorized,Ue.SubprotocolNotAcceptable,Ue.SubscriberAlreadyExists,Ue.TooManyInitialisationRequests].includes(M.code)))throw M;if(q)return!1;if(sa(M)&&M.code===1e3)return h>0;if(!c||$>=c||!f(M)||g!=null&&g(M))throw M;return D=!0}r||(async()=>{for(h++;;)try{const[,,M]=await W();await M}catch(M){try{if(!ne(M))return}catch(L){return i==null?void 0:i(L)}}})();function ee(M,L){const k=S(M);let U=!1,te=!1,ue=()=>{h--,U=!0};return(async()=>{for(h++;;)try{const[F,B,Y]=await W();if(U)return B();const P=T.onMessage(k,j=>{switch(j.type){case xe.Next:{L.next(j.payload);return}case xe.Error:{te=!0,U=!0,L.error(j.payload),ue();return}case xe.Complete:{U=!0,ue();return}}});F.send(Mn({id:k,type:xe.Subscribe,payload:M},b)),ue=()=>{!U&&F.readyState===w.OPEN&&F.send(Mn({id:k,type:xe.Complete},b)),h--,U=!0,B()},await Y.finally(P);return}catch(F){if(!ne(F))return}})().then(()=>{te||L.complete()}).catch(F=>{L.error(F)}),()=>{U||ue()}}return{on:T.on,subscribe:ee,iterate(M){const L=[],k={done:!1,error:null,resolve:()=>{}},U=ee(M,{next(ue){L.push(ue),k.resolve()},error(ue){k.done=!0,k.error=ue,k.resolve()},complete(){k.done=!0,k.resolve()}}),te=function(){return gm(this,arguments,function*(){for(;;){for(L.length||(yield Qt(new Promise(B=>k.resolve=B)));L.length;)yield yield Qt(L.shift());if(k.error)throw k.error;if(k.done)return yield Qt(void 0)}})}();return te.throw=async ue=>(k.done||(k.done=!0,k.error=ue,k.resolve()),{done:!0,value:void 0}),te.return=async()=>(U(),{done:!0,value:void 0}),te},async dispose(){if(q=!0,I){const[M]=await I;M.close(1e3,"Normal Closure")}},terminate(){I&&T.emit("closed",new Ho)}}}class Ho extends Error{constructor(){super(...arguments),this.name="TerminatedCloseEvent",this.message="4499: Terminated",this.code=4499,this.reason="Terminated",this.wasClean=!1}}function sa(e){return _t(e)&&"code"in e&&"reason"in e}function vm(e){return[1e3,1001,1006,1005,1012,1013,1014].includes(e)?!1:e>=1e3&&e<=1999}function bm(e){return typeof e=="function"&&"constructor"in e&&"CLOSED"in e&&"CLOSING"in e&&"CONNECTING"in e&&"OPEN"in e}function Wo(e){return new Pn(function(t,n){return new Ce(function(r){var i,a,s;try{i=n(t).subscribe({next:function(o){if(o.errors?s=e({graphQLErrors:o.errors,response:o,operation:t,forward:n}):sm(o)&&(s=e({protocolErrors:o.extensions[Go],response:o,operation:t,forward:n})),s){a=s.subscribe({next:r.next.bind(r),error:r.error.bind(r),complete:r.complete.bind(r)});return}r.next(o)},error:function(o){if(s=e({operation:t,networkError:o,graphQLErrors:o&&o.result&&o.result.errors||void 0,forward:n}),s){a=s.subscribe({next:r.next.bind(r),error:r.error.bind(r),complete:r.complete.bind(r)});return}r.error(o)},complete:function(){s||r.complete.bind(r)()}})}catch(o){e({networkError:o,operation:t,forward:n}),r.error(o)}return function(){i&&i.unsubscribe(),a&&i.unsubscribe()}})})}(function(e){mr(t,e);function t(n){var r=e.call(this)||this;return r.link=Wo(n),r}return t.prototype.request=function(n,r){return this.link.request(n,r)},t})(Pn);var ym=function(){if(typeof AbortController>"u")return{controller:!1,signal:!1};var e=new AbortController,t=e.signal;return{controller:e,signal:t}},Yo=Object.prototype.hasOwnProperty;function Sm(e,t){if(e.status>=300){var n=function(){try{return JSON.parse(t)}catch{return t}};qo(e,n(),"Response not successful: Received status code ".concat(e.status))}try{return JSON.parse(t)}catch(i){var r=i;throw r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,r}}function xm(e){return function(t){return t.text().then(function(n){return Sm(t,n)}).then(function(n){return!Array.isArray(n)&&!Yo.call(n,"data")&&!Yo.call(n,"errors")&&qo(t,n,"Server response was missing for query '".concat(Array.isArray(e)?e.map(function(r){return r.operationName}):e.operationName,"'.")),n})}}var _r=function(e,t){var n;try{n=JSON.stringify(e)}catch(i){var r=On(54,t,i.message);throw r.parseError=i,r}return n};function Im(e,t){var n=[],r=function(f,g){n.push("".concat(f,"=").concat(encodeURIComponent(g)))};if("query"in t&&r("query",t.query),t.operationName&&r("operationName",t.operationName),t.variables){var i=void 0;try{i=_r(t.variables,"Variables map")}catch(f){return{parseError:f}}r("variables",i)}if(t.extensions){var a=void 0;try{a=_r(t.extensions,"Extensions map")}catch(f){return{parseError:f}}r("extensions",a)}var s="",o=e,u=e.indexOf("#");u!==-1&&(s=e.substr(u),o=e.substr(0,u));var c=o.indexOf("?")===-1?"?":"&",l=o+c+n.join("&")+s;return{newURI:l}}var _m={includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},Cm={accept:"*/*","content-type":"application/json"},wm={method:"POST"},Om={http:_m,headers:Cm,options:wm},Em=function(e,t){return t(e)};function Tm(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={},a={};n.forEach(function(f){i=Te(Te(Te({},i),f.options),{headers:Te(Te({},i.headers),f.headers)}),f.credentials&&(i.credentials=f.credentials),a=Te(Te({},a),f.http)}),i.headers&&(i.headers=Dm(i.headers,a.preserveHeaderCase));var s=e.operationName,o=e.extensions,u=e.variables,c=e.query,l={operationName:s,variables:u};return a.includeExtensions&&(l.extensions=o),a.includeQuery&&(l.query=t(c,Ki)),{options:i,body:l}}function Dm(e,t){if(!t){var n={};return Object.keys(Object(e)).forEach(function(a){n[a.toLowerCase()]=e[a]}),n}var r={};Object.keys(Object(e)).forEach(function(a){r[a.toLowerCase()]={originalName:a,value:e[a]}});var i={};return Object.keys(r).forEach(function(a){i[r[a].originalName]=r[a].value}),i}var $m=function(e,t){var n=e.getContext(),r=n.uri;return r||(typeof t=="function"?t(e):t||"/graphql")};function Pm(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Mm(e,t,n=""){if(!arguments.length)throw new TypeError("Argument 1 `value` is required.");if(typeof t!="function")throw new TypeError("Argument 2 `isExtractable` must be a function.");if(typeof n!="string")throw new TypeError("Argument 3 `path` must be a string.");const r=new Map,i=new Map;function a(s,o,u){if(t(s)){const f=i.get(s);return f?f.push(o):i.set(s,[o]),null}const c=Array.isArray(s)||typeof FileList<"u"&&s instanceof FileList,l=Pm(s);if(c||l){let f=r.get(s);const g=!f;if(g&&(f=c?[]:s instanceof Object?{}:Object.create(null),r.set(s,f)),!u.has(s)){const p=o?`${o}.`:"",C=new Set(u).add(s);if(c){let S=0;for(const b of s){const x=a(b,p+S++,C);g&&f.push(x)}}else for(const S in s){const b=a(s[S],p+S,C);g&&(f[S]=b)}}return f}return s}return{clone:a(e,n,new Set),files:i}}function Fm(e,t,n){"name"in n?e.append(t,n,n.name):e.append(t,n)}function Nm(e){return typeof File<"u"&&e instanceof File||typeof Blob<"u"&&e instanceof Blob}function km({uri:e="/graphql",useGETForQueries:t,isExtractableFile:n=Nm,FormData:r,formDataAppendFile:i=Fm,print:a=Em,fetch:s,fetchOptions:o,credentials:u,headers:c,includeExtensions:l}={}){const f={http:{includeExtensions:l},options:o,credentials:u,headers:c};return new Pn(g=>{const p=g.getContext(),{clientAwareness:{name:C,version:S}={},headers:b}=p,x={http:p.http,options:p.fetchOptions,credentials:p.credentials,headers:{...C&&{"apollographql-client-name":C},...S&&{"apollographql-client-version":S},...b}},{options:v,body:w}=Tm(g,a,Om,f,x),{clone:T,files:_}=Mm(w,n,"");let I=$m(g,e);if(_.size){v.headers&&delete v.headers["content-type"];const D=r||FormData,$=new D;$.append("operations",_r(T,"Payload"));const q={};let W=0;_.forEach(ne=>{q[++W]=ne}),$.append("map",JSON.stringify(q)),W=0,_.forEach((ne,ee)=>{i($,String(++W),ee)}),v.body=$}else if(t&&!g.query.definitions.some(D=>D.kind==="OperationDefinition"&&D.operation==="mutation")&&(v.method="GET"),v.method==="GET"){const{newURI:D,parseError:$}=Im(I,w);if($)return new Ce(q=>{q.error($)});I=D}else v.body=_r(T,"Payload");const{controller:h}=ym();typeof h!="boolean"&&(v.signal&&(v.signal.aborted?h.abort():v.signal.addEventListener("abort",()=>{h.abort()},{once:!0})),v.signal=h.signal);const E=s||fetch;return new Ce(D=>{let $;return E(I,v).then(q=>(g.setContext({response:q}),q)).then(xm(g)).then(q=>{D.next(q),D.complete()}).catch(q=>{$||(q.result&&q.result.errors&&q.result.data&&D.next(q.result),D.error(q))}),()=>{$=!0,typeof h!="boolean"&&h.abort()}})})}const gt=e=>(t,{args:n,canRead:r,toReference:i})=>r(t)?t:i({__typename:e,id:n==null?void 0:n.id}),Fn=(e,{canRead:t})=>{if(e!==void 0)return t(e)?e:null},Am={Query:{fields:{findImage:{read:gt("Image")},findPerformer:{read:gt("Performer")},findStudio:{read:gt("Studio")},findGroup:{read:gt("Group")},findGallery:{read:gt("Gallery")},findScene:{read:gt("Scene")},findTag:{read:gt("Tag")},findSavedFilter:{read:gt("SavedFilter")}}},Scene:{fields:{studio:{read:Fn}}},Image:{fields:{studio:{read:Fn},paths:{merge:!1}}},Group:{fields:{studio:{read:Fn}}},Gallery:{fields:{studio:{read:Fn}}},Studio:{fields:{parent_studio:{read:Fn}}}},Lm={BaseFile:["VideoFile","ImageFile","GalleryFile"],VisualFile:["VideoFile","ImageFile"]},jm=((Kd=document.querySelector("base"))==null?void 0:Kd.getAttribute("href"))??"/",oa=e=>{let t=new URL(window.location.origin+jm);return e&&(t.pathname+=e),t},Bm=()=>{const e=oa("graphql"),t=oa("graphql");t.protocol==="https:"?t.protocol="wss:":t.protocol="ws:";const n=km({uri:e.toString()}),r=hm({url:t.toString(),retryAttempts:1/0,shouldRetry(){return!0}}),i=new dm(r),a=Wo(({networkError:l})=>{if(l&&l.statusCode===401){const f=new URL(oa("login"),window.location.toString());f.searchParams.append("returnURL",window.location.href),window.location.href=f.toString()}}),s=m.ApolloLink.split(({query:l})=>{const f=Vp(l);return f.kind==="OperationDefinition"&&f.operation==="subscription"},i,n),o=m.ApolloLink.from([a,s]),u=new m.InMemoryCache({typePolicies:Am,possibleTypes:Lm}),c=new m.ApolloClient({link:o,cache:u});return c.subscribe({query:Rf}).subscribe({next:()=>{c.resetStore()}}),{cache:u,client:c,wsClient:r}},{client:Cr}=Bm();function Qo(e,t){const n={};for(const r of t){const{selections:i}=qp(r).selectionSet;for(const a of i){if(!jp(a))continue;const s=a.name.value;n[s]=(o,{DELETE:u})=>u}}e.modify({fields:n}),e.gc()}function Ko(e,t,n){const r=e.extract();for(const i in r){if(n!=null&&n.includes(i))continue;const s=r[i].__typename;if(s&&t[s]){const o={};for(const u of t[s])o[u]=(c,{DELETE:l})=>l;e.modify({id:i,fields:o})}}}const Rm=e=>Cr.query({query:to,variables:{scene_ids:e}}),qm=e=>Cr.query({query:eo,variables:{filter:e.makeFindFilter(),scene_marker_filter:e.makeFilter()}}),Vm=e=>Bf({variables:{id:e},skip:e==="new"||e===""}),Gm=e=>Cr.query({query:ro,variables:{ids:e}}),Jo=e=>Cr.query({query:ro,variables:{filter:e.makeFindFilter(),tag_filter:e.makeFilter()}});function Um(e,t,n){e.modify({fields:{stats(r){return{...r,[t]:r[t]+n}}}})}const Xo={Tag:["parents","children"]},zm=[Mf,eo,to,Pf,$f,Ff,no],Hm=()=>Ef({update(e,t){var i;const n=(i=t.data)==null?void 0:i.tagCreate;if(!n)return;Um(e,"tag_count",1);const r={__typename:"Tag",id:n.id};Ko(e,Xo,e.identify(r)),Qo(e,[no])}}),Wm=()=>Df({update(e,t){var i;const n=(i=t.data)==null?void 0:i.tagUpdate;if(!n)return;const r={__typename:"Tag",id:n.id};Ko(e,Xo,e.identify(r)),Qo(e,zm)}}),Ym=e=>Lf({variables:{path:e}}),Qm=200,Km=25,Nn=["byte","kibibyte","mebibyte","gibibyte","tebibyte","pebibyte"],Jm=["B","KiB","MiB","GiB","TiB","PiB"],Xm=(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return{size:0,unit:Nn[0]};let t=0,n=e;for(;n>=1024&&t+1<Nn.length;)n/=1024,t++;return{size:n,unit:Nn[t]}},de=class de{constructor(t,n,r,i){this.singular=t,this.plural=n,this.shortString=r,this.secs=i}toString(){return this.shortString}};X(de,"SECOND",new de("second","seconds","s",1)),X(de,"MINUTE",new de("minute","minutes","m",60)),X(de,"HOUR",new de("hour","hours","h",de.MINUTE.secs*60)),X(de,"DAY",new de("day","days","D",de.HOUR.secs*24)),X(de,"WEEK",new de("week","weeks","W",de.DAY.secs*7)),X(de,"MONTH",new de("month","months","M",de.DAY.secs*30)),X(de,"YEAR",new de("year","years","Y",de.DAY.secs*365)),X(de,"DURATIONS",[de.SECOND,de.MINUTE,de.HOUR,de.DAY,de.WEEK,de.MONTH,de.YEAR]);let Ct=de;class Zo{constructor(t,n){this.count=t,this.duration=n}toString(){return this.count.toString()+this.duration.toString()}}const Zm=(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return[new Zo(0,Ct.DURATIONS[0])];const t=[];let n=e;for(let r=Ct.DURATIONS.length-1;r>=0;r--){const i=Math.floor(n/Ct.DURATIONS[r].secs);i!==0&&(n%=Ct.DURATIONS[r].secs,t.push(new Zo(i,Ct.DURATIONS[r])))}return t},eg=(e=0,t=2)=>Zm(e).slice(0,t).join(" "),tg=e=>{const t=Nn.indexOf(e);return Jm[t]},ng=e=>Nn.indexOf(e)>=3?1:0,wr=(e,t)=>{let n=!1;e<0&&(n=!0,e=-e);const r=e%1,i=Math.round(r*1e3);let a=Math.trunc(e);const s=a%60;a=(a-s)/60;const o=a%60;a=(a-o)/60;const u=a;let c=String(s).padStart(2,"0");return u===0?c=String(o)+":"+c:(c=String(o).padStart(2,"0")+":"+c,c=String(u)+":"+c),t&&i>0&&(c+="."+i.toString().padStart(3,"0")),n?"-"+c:c},rg=(e,t)=>t===void 0?wr(e):`${wr(e)}-${wr(t)}`,ig=e=>{if(!e)return null;const t=e.split(":");if(t.length>3)return null;let n=t[t.length-1],r=0;if(n.includes(".")){const s=n.split(".");if(s.length!==2)return null;n=s[0];const o=parseInt(s[1],10);if(Number.isNaN(o))return null;r=o/1e3}let i=0,a=1;for(;t.length>0;){const s=t.pop();if(s===void 0)return null;const o=parseInt(s,10);if(Number.isNaN(o))return null;i+=a*o,a*=60}return i+r},ag=e=>e?e.replace(/^.*[\\/]/,""):"No File Name",sg=e=>{if(!e)return null;const t=e.split("-");if(t.length!==3)return null;const n=Number(t[0]),r=Math.max(0,Number(t[1])-1),i=Number(t[2]);return new Date(n,r,i,0,0,0,0)},Or=e=>{if(!e)return null;const t=e.split("-");let n=Number(t[0]);Number.isNaN(n)&&(n=new Date().getFullYear());let r=0;t.length>1&&(r=Math.max(0,Number(t[1])-1),(r>11||Number.isNaN(r))&&(r=0));let i=1;return t.length>2&&(i=Number(t[2]),(i>31||Number.isNaN(i))&&(i=1)),new Date(n,r,i,0,0,0,0)},og=e=>{if(!e)return null;const t=e.split(" ");let n=null;if(t.length>0&&(n=Or(t[0])),n||(n=new Date),t.length>1){const r=t[1].split(":");n&&r.length>0&&n.setHours(Number(r[0])),n&&r.length>1&&n.setMinutes(Number(r[1])),n&&r.length>2&&n.setSeconds(Number(r[2]))}return n};function eu(e){return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`}function ug(e){return`${eu(e)} ${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`}const cg=(e,t)=>{if(!e)return 0;const n=Or(e),r=t?Or(t):new Date;if(!n||!r)return 0;let i=r.getFullYear()-n.getFullYear();return(n.getMonth()>r.getMonth()||n.getMonth()>=r.getMonth()&&n.getDate()>r.getDate())&&(i-=1),i},lg=e=>`${(e/1e6).toFixed(2)} megabits per second`,dg=(e,t)=>{const n=e>t?t:e;if(n>=6144)return"HUGE";if(n>=3840)return"8K";if(n>=3584)return"7K";if(n>=3e3)return"6K";if(n>=2560)return"5K";if(n>=1920)return"4K";if(n>=1440)return"1440p";if(n>=1080)return"1080p";if(n>=720)return"720p";if(n>=540)return"540p";if(n>=480)return"480p";if(n>=360)return"360p";if(n>=240)return"240p";if(n>=144)return"144p"},tu=(e,t)=>!e||e.startsWith("http://")||e.startsWith("https://")?e:t?e.startsWith(t.host)?`${t.protocol}//${e}`:`${t.protocol}//${t.host}/${e}`:`https://${e}`,fg=(e,t)=>{if(t)return t.hostname;if(e){let n="";try{const r=tu(e);r&&(e=r),n=new URL(e).hostname}catch{n=e}return n}else return""},nu=(e,t,n=!0)=>t?e.formatDate(t,{format:"long",timeZone:n?"utc":void 0}):"",pg=(e,t,n=!0)=>{if(!t)return"";const r=t.match(/^(\d{4})$/);if(r){const a=parseInt(r[1],10);return e.formatDate(Date.UTC(a,0),{year:"numeric",timeZone:n?"utc":void 0})}const i=t.match(/^(\d{4})-(\d{2})$/);if(i){const a=parseInt(i[1],10),s=parseInt(i[2],10)-1;return e.formatDate(Date.UTC(a,s),{year:"numeric",month:"long",timeZone:n?"utc":void 0})}return e.formatDate(t,{format:"long",timeZone:n?"utc":void 0})},mg=(e,t,n=!1)=>`${nu(e,t,n)} ${e.formatTime(t,{timeZone:n?"utc":void 0})}`,ua=["","K","M","B"],Fe={fileSize:Xm,formatFileSizeUnit:tg,fileSizeFractionalDigits:ng,secondsToTimestamp:wr,formatTimestampRange:rg,timestampToSeconds:ig,fileNameFromPath:ag,stringToDate:sg,stringToFuzzyDate:Or,stringToFuzzyDateTime:og,dateToString:eu,dateTimeToString:ug,age:cg,bitRate:lg,resolution:dg,sanitiseURL:tu,domainFromURL:fg,formatDate:nu,formatFuzzyDate:pg,formatDateTime:mg,secondsAsTimeString:eg,abbreviateCounter:(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return{size:0,unit:ua[0]};let t=0,n=0,r=e;for(;r>=1e3&&t+1<ua.length;)r/=1e3,t++,n=1;return{size:r,unit:ua[t],digits:n}},stripQuotes:e=>e.startsWith('"')&&e.endsWith('"')?e.slice(1,-1):e,addQuotes:e=>`"${e}"`},gg={[y.Equals]:"criterion_modifier.equals",[y.NotEquals]:"criterion_modifier.not_equals",[y.GreaterThan]:"criterion_modifier.greater_than",[y.LessThan]:"criterion_modifier.less_than",[y.IsNull]:"criterion_modifier.is_null",[y.NotNull]:"criterion_modifier.not_null",[y.Includes]:"criterion_modifier.includes",[y.IncludesAll]:"criterion_modifier.includes_all",[y.Excludes]:"criterion_modifier.excludes",[y.MatchesRegex]:"criterion_modifier.matches_regex",[y.NotMatchesRegex]:"criterion_modifier.not_matches_regex",[y.Between]:"criterion_modifier.between",[y.NotBetween]:"criterion_modifier.not_between"};class ru{constructor(t){X(this,"criterionOption");this.criterionOption=t}isValid(){return!0}clone(){const t=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return t.cloneValues(),t}cloneValues(){}getId(){return`${this.criterionOption.type}`}}class ve extends ru{constructor(n,r){super(n);X(this,"_modifier");X(this,"_value");this.modifier=n.defaultModifier,this.value=r}get modifier(){return this._modifier}set modifier(n){this._modifier=n}get value(){return this._value}set value(n){this._value=n}isValid(){return!0}modifierCriterionOption(){return this.criterionOption}clone(){const n=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return n.cloneValues(),n}cloneValues(){}static getModifierLabel(n,r){const i=gg[r];return i?n.formatMessage({id:i}):""}getLabel(n,r=!1){const i=ve.getModifierLabel(n,this.modifier);let a="";this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(a=this.getLabelValue(n));const s=r?this.criterionOption.sfwMessageID??this.criterionOption.messageID:this.criterionOption.messageID;return n.formatMessage({id:"criterion_modifier.format_string"},{criterion:n.formatMessage({id:s}),modifierString:i,valueString:a})}toQueryParams(){const n={type:this.criterionOption.type,modifier:this.modifier};return this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(n.value=this.encodeValue()),n}encodeValue(){return this.value}decodeValue(n){n!=null&&(this.value=n)}fromDecodedParams(n){const r=n;this.modifier=r.modifier,this.decodeValue(r.value)}setFromSavedCriterion(n){const r=n;r.value!==void 0&&r.value!==null&&(this.value=r.value),this.modifier=r.modifier}applyToCriterionInput(n){n[this.criterionOption.type]=this.toCriterionInput()}applyToSavedCriterion(n){n[this.criterionOption.type]={value:this.value,modifier:this.modifier}}toCriterionInput(){return{value:this.value,modifier:this.modifier}}}class iu{constructor(t){X(this,"type");X(this,"messageID");X(this,"makeCriterionFn");X(this,"sfwMessageID");X(this,"hidden",!1);this.type=t.type,this.messageID=t.messageID,this.makeCriterionFn=t.makeCriterion,this.hidden=t.hidden??!1,this.sfwMessageID=t.sfwMessageID}makeCriterion(t){return this.makeCriterionFn(this,t)}}class fe extends iu{constructor(n){super(n);X(this,"modifierOptions");X(this,"defaultModifier");X(this,"options");X(this,"inputType");this.modifierOptions=n.modifierOptions??[],this.defaultModifier=n.defaultModifier??y.Equals,this.options=n.options,this.inputType=n.inputType}}class ca extends fe{constructor(t,n,r,i,a){const s=[y.Includes,y.Excludes,y.IsNull,y.NotNull];let o=y.Includes;r&&(s.unshift(y.IncludesAll),o=y.IncludesAll),super({messageID:t,type:n,modifierOptions:s,defaultModifier:o,inputType:i,makeCriterion:a||(()=>new kn(this))})}}class kn extends ve{constructor(t,n=[]){super(t,n)}cloneValues(){this.value=this.value.map(t=>({...t}))}getLabelValue(t){return this.value.map(n=>n.label).join(", ")}toCriterionInput(){return{value:this.value.map(t=>t.id),modifier:this.modifier}}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull?!0:this.value.length>0}}class An extends ve{constructor(t,n={items:[],excluded:[],depth:0}){super(t,n)}cloneValues(){this.value={...this.value,items:this.value.items.map(t=>({...t})),excluded:this.value.excluded.map(t=>({...t}))}}get modifier(){return this._modifier}set modifier(t){this._modifier=t,this.value&&t!==y.Includes&&t!==y.IncludesAll&&(this.value.excluded=[])}setFromSavedCriterion(t){const{modifier:n,value:r}=t;r!==void 0&&(this.value={items:r.items||[],excluded:r.excluded||[],depth:r.depth||0});const i=this.criterionOption.modifierOptions??[];n===y.Excludes&&i.find(a=>a===y.Excludes)===void 0?(this.modifier=y.Includes,this.value.excluded=[...this.value.excluded,...this.value.items],this.value.items=[]):this.modifier=n}getLabelValue(t){const n=(this.value.items??[]).map(r=>r.label).join(", ");return this.value.depth===0?n:`${n} (+${this.value.depth>0?this.value.depth:"all"})`}toCriterionInput(){let t=[];const n=this.modifier===y.Equals?0:this.value.depth;return this.value.excluded&&(t=this.value.excluded.map(r=>r.id)),{value:this.value.items.map(r=>r.id),excludes:t,modifier:this.modifier,depth:n}}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull?!0:this.value.items.length>0||this.value.excluded&&this.value.excluded.length>0}getLabel(t,n){let r="criterion_modifier.format_string",i=ve.getModifierLabel(t,this.modifier),a="",s="";this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(a=this.value.items.map(u=>u.label).join(", "),this.value.excluded&&this.value.excluded.length>0&&(this.value.items.length===0?(i=ve.getModifierLabel(t,y.Excludes),a=this.value.excluded.map(u=>u.label).join(", ")):(r="criterion_modifier.format_string_excludes",s=this.value.excluded.map(u=>u.label).join(", "))),this.value.depth!==0&&(r+="_depth"));const o=n?this.criterionOption.sfwMessageID??this.criterionOption.messageID:this.criterionOption.messageID;return t.formatMessage({id:r},{criterion:t.formatMessage({id:o}),modifierString:i,valueString:a,excludedString:s,depth:this.value.depth})}}class Er extends fe{constructor(t){super({modifierOptions:[y.Equals,y.NotEquals,y.Includes,y.Excludes,y.IsNull,y.NotNull,y.MatchesRegex,y.NotMatchesRegex],defaultModifier:y.Equals,inputType:"text",makeCriterion:()=>new Ze(this),...t})}}function re(e,t,n){return new Er({messageID:t??e,type:e,...n})}class hg extends fe{constructor(t,n){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.Includes,y.Excludes,y.MatchesRegex,y.NotMatchesRegex],defaultModifier:y.Equals,inputType:"text",makeCriterion:()=>new Ze(this)})}}function Tr(e,t){return new hg(t??e,e)}class Ze extends ve{constructor(t){super(t,"")}getLabelValue(t){return this.value}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull||this.value.length>0}}class la extends ve{constructor(t,n=[]){super(t,n)}cloneValues(){this.value=this.value.slice()}getLabelValue(t){return this.value.join(", ")}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull||this.value.length>0}}class wt extends fe{constructor(t,n,r){super({messageID:t,type:n,modifierOptions:[],defaultModifier:y.Equals,options:["true","false"],makeCriterion:r||(()=>new Ot(this))})}}function Dr(e,t){return new wt(e,e)}class Ot extends Ze{toCriterionInput(){return this.value==="true"}isValid(){return this.value==="true"||this.value==="false"}}class au extends fe{constructor(t,n,r){super({messageID:t,type:n,options:["true","false"],makeCriterion:r||(()=>new da(this))})}}class da extends Ze{toCriterionInput(){return this.value}isValid(){return this.value==="true"||this.value==="false"}}class vg extends fe{constructor(t,n){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.IsNull,y.NotNull,y.Between,y.NotBetween],defaultModifier:y.Equals,inputType:"number",makeCriterion:()=>new fa(this)})}}function su(e,t){return new vg(t??e,e)}class bg extends fe{constructor(t,n,r){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.Between,y.NotBetween,y.IsNull,y.NotNull],defaultModifier:y.Equals,inputType:"number",makeCriterion:r||(()=>new fa(this))})}}class $r extends fe{constructor(t,n,r,i){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.Between,y.NotBetween],defaultModifier:y.Equals,inputType:"number",makeCriterion:r||(()=>new fa(this)),...i})}}function Z(e,t,n){return new $r(t??e,e,void 0,n)}function Ln(e,t){return e===y.Between||e===y.NotBetween?{value:t.value,value2:t.value2}:{value:t.value}}function yg(e){return typeof e.value=="object"?e.value:{value:e.value,value2:e.value2}}class fa extends ve{constructor(t){super(t,{value:void 0,value2:void 0})}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(t){typeof t!="object"?this._value={value:t,value2:void 0}:this._value=t}toCriterionInput(){var t,n;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??0,value2:(n=this.value)==null?void 0:n.value2}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return Ln(this.modifier,this.value)}getLabelValue(t){const{value:n,value2:r}=this.value;return this.modifier===y.Between||this.modifier===y.NotBetween?`${n}, ${r??0}`:`${n}`}isValid(){if(this.modifier===y.IsNull||this.modifier===y.NotNull)return!0;const{value:t,value2:n}=this.value;return!(t===void 0||n===void 0&&(this.modifier===y.Between||this.modifier===y.NotBetween))}}let Sg=class extends $r{constructor(t,n){super(t,n,()=>new ou(this))}};function Pr(e,t){return new Sg(e,e)}class xg extends bg{constructor(t,n){super(t,n,()=>new ou(this))}}function Ig(e,t){return new xg(e,e)}class ou extends ve{constructor(t){super(t,{value:void 0,value2:void 0})}cloneValues(){this.value={...this.value}}toCriterionInput(){var t,n;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??0,value2:(n=this.value)==null?void 0:n.value2}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return Ln(this.modifier,this.value)}getLabelValue(t){const n=Fe.secondsToTimestamp(this.value.value??0),r=Fe.secondsToTimestamp(this.value.value2??0);return this.modifier===y.Between||this.modifier===y.NotBetween?`${n}, ${r}`:n}isValid(){if(this.modifier===y.IsNull||this.modifier===y.NotNull)return!0;const{value:t,value2:n}=this.value;return!(t===void 0||n===void 0&&(this.modifier===y.Between||this.modifier===y.NotBetween))}}class _g extends fe{constructor(t,n){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.IsNull,y.NotNull,y.Between,y.NotBetween],defaultModifier:y.Equals,inputType:"text",makeCriterion:()=>new Cg(this)})}}function ot(e){return new _g(e,e)}class Cg extends ve{constructor(t){super(t,{value:"",value2:void 0})}cloneValues(){this.value={...this.value}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return Ln(this.modifier,this.value)}toCriterionInput(){var t,n;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??"",value2:(n=this.value)==null?void 0:n.value2}}getLabelValue(){const{value:t}=this.value;return this.modifier===y.Between||this.modifier===y.NotBetween?`${t}, ${this.value.value2}`:`${t}`}isValid(){if(this.modifier===y.IsNull||this.modifier===y.NotNull)return!0;const{value:t,value2:n}=this.value;return!(!t||!n&&(this.modifier===y.Between||this.modifier===y.NotBetween))}}class wg extends fe{constructor(t,n){super({messageID:t,type:n,modifierOptions:[y.GreaterThan,y.LessThan,y.Between,y.NotBetween],defaultModifier:y.GreaterThan,inputType:"text",makeCriterion:()=>new Og(this)})}}function we(e){return new wg(e,e)}class Og extends ve{constructor(t){super(t,{value:"",value2:void 0})}cloneValues(){this.value={...this.value}}toCriterionInput(){return{modifier:this.modifier,value:this.transformValueToInput(this.value.value??""),value2:this.value.value2?this.transformValueToInput(this.value.value2):null}}setFromSavedCriterion(t){super.setFromSavedCriterion(t),this.value=yg(t)}encodeValue(){return Ln(this.modifier,this.value)}getLabelValue(){const{value:t}=this.value;return this.modifier===y.Between||this.modifier===y.NotBetween?`${t}, ${this.value.value2}`:`${t}`}transformValueToInput(t){return t=t.trim(),/^\d{4}-\d{2}-\d{2}(( |T)\d{2}:\d{2})?$/.test(t)?t.replace(" ","T"):""}isValid(){if(this.modifier===y.IsNull||this.modifier===y.NotNull)return!0;const{value:t,value2:n}=this.value;return!(!t||!n&&(this.modifier===y.Between||this.modifier===y.NotBetween))}}class Eg extends Er{constructor(t){super({messageID:"unsupported_criterion",type:t,makeCriterion:()=>new Tg(this)})}}class Tg extends Ze{getLabel(t){const n=ve.getModifierLabel(t,this.modifier);let r="";return this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(r=this.getLabelValue(t)),t.formatMessage({id:"criterion_modifier.format_string"},{criterion:t.formatMessage({id:"criterion.unsupported"},{type:this.criterionOption.type}),modifierString:n,valueString:r})}applyToCriterionInput(){}applyToSavedCriterion(){}setFromSavedCriterion(){}}const uu=new wt("favourite","filter_favorites",()=>new Dg);class Dg extends Ot{constructor(){super(uu)}}const cu=new wt("favourite","favorite",()=>new $g);class $g extends Ot{constructor(){super(cu)}}const lu=new wt("favourite","favorite",()=>new Pg);class Pg extends Ot{constructor(){super(lu)}}const Mr=new wt("performer_favorite","performer_favorite",()=>new Mg);class Mg extends Ot{constructor(){super(Mr)}}class Fg extends Ze{toCriterionInput(){return this.value}}class Et extends fe{constructor(t,n,r){super({messageID:t,type:n,options:r,modifierOptions:[],defaultModifier:y.Equals,makeCriterion:()=>new Fg(this)})}}const Ng=new Et("isMissing","is_missing",["title","code","details","director","url","date","rating","cover","galleries","studio","group","performers","tags","stash_id"]),kg=new Et("isMissing","is_missing",["title","details","photographer","url","date","code","rating","galleries","studio","performers","tags"]),Ag=new Et("isMissing","is_missing",["url","ethnicity","country","hair_color","eye_color","height","weight","measurements","fake_tits","penis_length","circumcised","career_start","career_end","tattoos","piercings","aliases","gender","birthdate","death_date","disambiguation","tags","image","details","rating","stash_id"]),Lg=new Et("isMissing","is_missing",["title","code","details","photographer","url","date","rating","cover","studio","performers","tags","scenes"]),jg=new Et("isMissing","is_missing",["image","aliases","description","stash_id"]),Bg=new Et("isMissing","is_missing",["image","stash_id","details","url","aliases","tags","rating"]),Rg=new Et("isMissing","is_missing",["aliases","description","director","date","url","rating","studio","performers","tags","front_image","back_image","scenes"]),Fr=new wt("organized","organized",()=>new qg);class qg extends Ot{constructor(){super(Fr)}}const du=new au("hasChapters","has_chapters",()=>new Vg);class Vg extends da{constructor(){super(du)}}const Gg=[y.IncludesAll,y.Includes,y.Equals,y.IsNull,y.NotNull],Ug=y.IncludesAll,zg="performers",Kt=new fe({messageID:"performers",type:"performers",modifierOptions:Gg,defaultModifier:Ug,inputType:zg,makeCriterion:()=>new Jt});class Jt extends ve{constructor(){super(Kt,{items:[],excluded:[]})}cloneValues(){this.value={...this.value,items:this.value.items.map(t=>({...t})),excluded:this.value.excluded.map(t=>({...t}))}}get modifier(){return this._modifier}set modifier(t){this._modifier=t,t!==y.Includes&&t!==y.IncludesAll&&(this.value.excluded=[])}setFromSavedCriterion(t){const{modifier:n,value:r}=t;Array.isArray(r)?this.value={items:r,excluded:[]}:r!==void 0&&(this.value={items:r.items||[],excluded:r.excluded||[]}),n===y.Excludes?(this.modifier=y.Includes,this.value.excluded=[...this.value.excluded,...this.value.items],this.value.items=[]):this.modifier=n}getLabelValue(t){return this.value.items.map(n=>n.label).join(", ")}toCriterionInput(){let t=[];return this.value.excluded&&(t=this.value.excluded.map(n=>n.id)),{value:this.value.items.map(n=>n.id),excludes:t,modifier:this.modifier}}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull?!0:this.value.items.length>0||this.value.excluded&&this.value.excluded.length>0}getLabel(t){let n="criterion_modifier.format_string",r=ve.getModifierLabel(t,this.modifier),i="",a="";return this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(i=this.value.items.map(s=>s.label).join(", "),this.value.excluded&&this.value.excluded.length>0&&(this.value.items.length===0?(r=ve.getModifierLabel(t,y.Excludes),i=this.value.excluded.map(s=>s.label).join(", ")):(n="criterion_modifier.format_string_excludes",a=this.value.excluded.map(s=>s.label).join(", ")))),t.formatMessage({id:n},{criterion:t.formatMessage({id:this.criterionOption.messageID}),modifierString:r,valueString:i,excludedString:a})}}const fu=new Map([["144p",Le.VeryLow],["240p",Le.Low],["360p",Le.R360P],["480p",Le.Standard],["540p",Le.WebHd],["720p",Le.StandardHd],["1080p",Le.FullHd],["1440p",Le.QuadHd],["4k",Le.FourK],["5k",Le.FiveK],["6k",Le.SixK],["7k",Le.SevenK],["8k",Le.EightK],["Huge",Le.Huge]]),Hg=(e,t)=>e?fu.get(e):void 0,Wg=Array.from(fu.keys());class pu extends fe{constructor(t,n){super({messageID:t,type:t,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan],options:Wg,makeCriterion:n})}}class mu extends Ze{toCriterionInput(){const t=Hg(this.value);if(t!==void 0)return{value:t,modifier:this.modifier}}}const pa=new pu("resolution",()=>new Yg);class Yg extends mu{constructor(){super(pa)}}const gu=new pu("average_resolution",()=>new Qg);class Qg extends mu{constructor(){super(gu)}}const hu="scenes",vu=new ca("scenes","scenes",!0,hu,()=>new Kg);class Kg extends kn{constructor(){super(vu)}}const Jg=[y.Includes,y.Excludes],Xg=y.Includes,bu=new fe({messageID:"scenes",type:"scenes",modifierOptions:Jg,defaultModifier:Xg,inputType:hu,makeCriterion:()=>new yu});class yu extends kn{constructor(){super(bu)}}const Zg=[y.Includes,y.IsNull,y.NotNull],eh=y.Includes,Su="studios",Xt=new fe({messageID:"studios",type:"studios",modifierOptions:Zg,defaultModifier:eh,inputType:Su,makeCriterion:()=>new Zt});class Zt extends An{constructor(){super(Xt)}}const xu=new ca("parent_studios","parents",!1,Su,()=>new Iu);class Iu extends kn{constructor(){super(xu)}}const _u=[y.IncludesAll,y.Includes,y.Equals,y.IsNull,y.NotNull],ma=[y.IncludesAll,y.Includes,y.IsNull,y.NotNull],th=y.IncludesAll,nh="tags";class jn extends fe{constructor(t,n,r){super({messageID:t,type:n,modifierOptions:r,defaultModifier:th,inputType:nh,makeCriterion:()=>new Nr(this)})}}const ht=new jn("tags","tags",_u),rh=new jn("scene_tags","scene_tags",_u),ga=new jn("performer_tags","performer_tags",ma),Cu=new jn("parent_tags","parents",ma),wu=new jn("sub_tags","children",ma);class Nr extends An{}const ha=["title","path","rating","file_mod_time","tag_count","performer_count","random"];class Oe{constructor(t,n,r,i){X(this,"defaultSortBy","");X(this,"sortByOptions",[]);X(this,"displayModeOptions",[]);X(this,"criterionOptions",[]);this.defaultSortBy=t,this.sortByOptions=[...n,Oe.createSortBy("created_at"),Oe.createSortBy("updated_at")],this.displayModeOptions=r,this.criterionOptions=i}static createSortBy(t){return{messageID:t,value:t}}}var be=(e=>(e[e.Grid=0]="Grid",e[e.List=1]="List",e[e.Wall=2]="Wall",e[e.Tagger=3]="Tagger",e))(be||{}),Ou=(e=>(e.Stars="stars",e.Decimal="decimal",e))(Ou||{}),Eu=(e=>(e.Full="full",e.Half="half",e.Quarter="quarter",e.Tenth="tenth",e))(Eu||{});const Tu={type:"stars",starPrecision:"full"};function ih(e,t){let n=t;n||(n=1);const r=1/n;return Math.round(e*r)/r}function ah(e){switch(e){case"full":return 1;case"half":return .5;case"quarter":return .25;case"tenth":return .1;default:return 1}}function kr(e,t){if(!e)return null;const{type:n,starPrecision:r}=t,i=n==="decimal"?.1:ah(r??"full"),s=100/(n==="decimal"?10:5);return ih(e/s,i)}function sh(e,t){const r=100/((t??"stars")==="decimal"?10:5);return Math.round(e*r)}const oh=[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.Between,y.NotBetween,y.IsNull,y.NotNull];function uh(e){return(e==null?void 0:e.ui.ratingSystemOptions)??Tu}const Tt=new fe({messageID:"rating",type:"rating100",modifierOptions:oh,defaultModifier:y.Equals,makeCriterion:(e,t)=>new ch(uh(t)),inputType:"number"});class ch extends ve{constructor(n){super(Tt,{value:0,value2:void 0});X(this,"ratingSystem");this.ratingSystem=n}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(n){typeof n!="object"?this._value={value:sh(n,this.ratingSystem.type),value2:void 0}:this._value=n}toCriterionInput(){return{modifier:this.modifier,value:this.value.value??0,value2:this.value.value2}}setFromSavedCriterion(n){super.setFromSavedCriterion(n)}encodeValue(){return Ln(this.modifier,this.value)}getLabelValue(){const{value:n,value2:r}=this.value;return this.modifier===y.Between||this.modifier===y.NotBetween?`${kr(n,this.ratingSystem)??0}, ${kr(r,this.ratingSystem)??0}`:`${kr(n,this.ratingSystem)??0}`}}const Ar=new Er({messageID:"path",type:"path",defaultModifier:y.Includes,makeCriterion:()=>new lh});class lh extends Ze{constructor(){super(Ar)}}function dh(){this.__data__=[],this.size=0}function Du(e,t){return e===t||e!==e&&t!==t}function Lr(e,t){for(var n=e.length;n--;)if(Du(e[n][0],t))return n;return-1}var fh=Array.prototype,ph=fh.splice;function mh(e){var t=this.__data__,n=Lr(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():ph.call(t,n,1),--this.size,!0}function gh(e){var t=this.__data__,n=Lr(t,e);return n<0?void 0:t[n][1]}function hh(e){return Lr(this.__data__,e)>-1}function vh(e,t){var n=this.__data__,r=Lr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function ut(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ut.prototype.clear=dh,ut.prototype.delete=mh,ut.prototype.get=gh,ut.prototype.has=hh,ut.prototype.set=vh;function bh(){this.__data__=new ut,this.size=0}function yh(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Sh(e){return this.__data__.get(e)}function xh(e){return this.__data__.has(e)}var $u=typeof global=="object"&&global&&global.Object===Object&&global,Ih=typeof self=="object"&&self&&self.Object===Object&&self,et=$u||Ih||Function("return this")(),en=et.Symbol,Pu=Object.prototype,_h=Pu.hasOwnProperty,Ch=Pu.toString,Bn=en?en.toStringTag:void 0;function wh(e){var t=_h.call(e,Bn),n=e[Bn];try{e[Bn]=void 0;var r=!0}catch{}var i=Ch.call(e);return r&&(t?e[Bn]=n:delete e[Bn]),i}var Oh=Object.prototype,Eh=Oh.toString;function Th(e){return Eh.call(e)}var Dh="[object Null]",$h="[object Undefined]",Mu=en?en.toStringTag:void 0;function tn(e){return e==null?e===void 0?$h:Dh:Mu&&Mu in Object(e)?wh(e):Th(e)}function vt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Ph="[object AsyncFunction]",Mh="[object Function]",Fh="[object GeneratorFunction]",Nh="[object Proxy]";function Fu(e){if(!vt(e))return!1;var t=tn(e);return t==Mh||t==Fh||t==Ph||t==Nh}var va=et["__core-js_shared__"],Nu=function(){var e=/[^.]+$/.exec(va&&va.keys&&va.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function kh(e){return!!Nu&&Nu in e}var Ah=Function.prototype,Lh=Ah.toString;function Dt(e){if(e!=null){try{return Lh.call(e)}catch{}try{return e+""}catch{}}return""}var jh=/[\\^$.*+?()[\]{}|]/g,Bh=/^\[object .+?Constructor\]$/,Rh=Function.prototype,qh=Object.prototype,Vh=Rh.toString,Gh=qh.hasOwnProperty,Uh=RegExp("^"+Vh.call(Gh).replace(jh,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function zh(e){if(!vt(e)||kh(e))return!1;var t=Fu(e)?Uh:Bh;return t.test(Dt(e))}function Hh(e,t){return e==null?void 0:e[t]}function $t(e,t){var n=Hh(e,t);return zh(n)?n:void 0}var Rn=$t(et,"Map"),qn=$t(Object,"create");function Wh(){this.__data__=qn?qn(null):{},this.size=0}function Yh(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Qh="__lodash_hash_undefined__",Kh=Object.prototype,Jh=Kh.hasOwnProperty;function Xh(e){var t=this.__data__;if(qn){var n=t[e];return n===Qh?void 0:n}return Jh.call(t,e)?t[e]:void 0}var Zh=Object.prototype,ev=Zh.hasOwnProperty;function tv(e){var t=this.__data__;return qn?t[e]!==void 0:ev.call(t,e)}var nv="__lodash_hash_undefined__";function rv(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=qn&&t===void 0?nv:t,this}function Pt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Pt.prototype.clear=Wh,Pt.prototype.delete=Yh,Pt.prototype.get=Xh,Pt.prototype.has=tv,Pt.prototype.set=rv;function iv(){this.size=0,this.__data__={hash:new Pt,map:new(Rn||ut),string:new Pt}}function av(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function jr(e,t){var n=e.__data__;return av(t)?n[typeof t=="string"?"string":"hash"]:n.map}function sv(e){var t=jr(this,e).delete(e);return this.size-=t?1:0,t}function ov(e){return jr(this,e).get(e)}function uv(e){return jr(this,e).has(e)}function cv(e,t){var n=jr(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function nn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}nn.prototype.clear=iv,nn.prototype.delete=sv,nn.prototype.get=ov,nn.prototype.has=uv,nn.prototype.set=cv;var lv=200;function dv(e,t){var n=this.__data__;if(n instanceof ut){var r=n.__data__;if(!Rn||r.length<lv-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new nn(r)}return n.set(e,t),this.size=n.size,this}function rn(e){var t=this.__data__=new ut(e);this.size=t.size}rn.prototype.clear=bh,rn.prototype.delete=yh,rn.prototype.get=Sh,rn.prototype.has=xh,rn.prototype.set=dv;function fv(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var ku=function(){try{var e=$t(Object,"defineProperty");return e({},"",{}),e}catch{}}();function pv(e,t,n){t=="__proto__"&&ku?ku(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var mv=Object.prototype,gv=mv.hasOwnProperty;function hv(e,t,n){var r=e[t];(!(gv.call(e,t)&&Du(r,n))||n===void 0&&!(t in e))&&pv(e,t,n)}function vv(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function an(e){return e!=null&&typeof e=="object"}var bv="[object Arguments]";function Au(e){return an(e)&&tn(e)==bv}var Lu=Object.prototype,yv=Lu.hasOwnProperty,Sv=Lu.propertyIsEnumerable,xv=Au(function(){return arguments}())?Au:function(e){return an(e)&&yv.call(e,"callee")&&!Sv.call(e,"callee")},ba=Array.isArray;function Iv(){return!1}var ju=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Bu=ju&&typeof module=="object"&&module&&!module.nodeType&&module,_v=Bu&&Bu.exports===ju,Ru=_v?et.Buffer:void 0,Cv=Ru?Ru.isBuffer:void 0,qu=Cv||Iv,wv=9007199254740991,Ov=/^(?:0|[1-9]\d*)$/;function Ev(e,t){var n=typeof e;return t=t??wv,!!t&&(n=="number"||n!="symbol"&&Ov.test(e))&&e>-1&&e%1==0&&e<t}var Tv=9007199254740991;function Vu(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Tv}var Dv="[object Arguments]",$v="[object Array]",Pv="[object Boolean]",Mv="[object Date]",Fv="[object Error]",Nv="[object Function]",kv="[object Map]",Av="[object Number]",Lv="[object Object]",jv="[object RegExp]",Bv="[object Set]",Rv="[object String]",qv="[object WeakMap]",Vv="[object ArrayBuffer]",Gv="[object DataView]",Uv="[object Float32Array]",zv="[object Float64Array]",Hv="[object Int8Array]",Wv="[object Int16Array]",Yv="[object Int32Array]",Qv="[object Uint8Array]",Kv="[object Uint8ClampedArray]",Jv="[object Uint16Array]",Xv="[object Uint32Array]",ge={};ge[Uv]=ge[zv]=ge[Hv]=ge[Wv]=ge[Yv]=ge[Qv]=ge[Kv]=ge[Jv]=ge[Xv]=!0,ge[Dv]=ge[$v]=ge[Vv]=ge[Pv]=ge[Gv]=ge[Mv]=ge[Fv]=ge[Nv]=ge[kv]=ge[Av]=ge[Lv]=ge[jv]=ge[Bv]=ge[Rv]=ge[qv]=!1;function Zv(e){return an(e)&&Vu(e.length)&&!!ge[tn(e)]}function ya(e){return function(t){return e(t)}}var Gu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Vn=Gu&&typeof module=="object"&&module&&!module.nodeType&&module,e0=Vn&&Vn.exports===Gu,Sa=e0&&$u.process,sn=function(){try{var e=Vn&&Vn.require&&Vn.require("util").types;return e||Sa&&Sa.binding&&Sa.binding("util")}catch{}}(),Uu=sn&&sn.isTypedArray,t0=Uu?ya(Uu):Zv,n0=Object.prototype,r0=n0.hasOwnProperty;function i0(e,t){var n=ba(e),r=!n&&xv(e),i=!n&&!r&&qu(e),a=!n&&!r&&!i&&t0(e),s=n||r||i||a,o=s?vv(e.length,String):[],u=o.length;for(var c in e)r0.call(e,c)&&!(s&&(c=="length"||i&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Ev(c,u)))&&o.push(c);return o}var a0=Object.prototype;function zu(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||a0;return e===n}function Hu(e,t){return function(n){return e(t(n))}}var s0=Hu(Object.keys,Object),o0=Object.prototype,u0=o0.hasOwnProperty;function c0(e){if(!zu(e))return s0(e);var t=[];for(var n in Object(e))u0.call(e,n)&&n!="constructor"&&t.push(n);return t}function l0(e){return e!=null&&Vu(e.length)&&!Fu(e)}function d0(e){return l0(e)?i0(e):c0(e)}var Wu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Yu=Wu&&typeof module=="object"&&module&&!module.nodeType&&module,f0=Yu&&Yu.exports===Wu,Qu=f0?et.Buffer:void 0;Qu&&Qu.allocUnsafe;function p0(e,t){return e.slice()}function m0(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var s=e[n];t(s,n,e)&&(a[i++]=s)}return a}function g0(){return[]}var h0=Object.prototype,v0=h0.propertyIsEnumerable,Ku=Object.getOwnPropertySymbols,b0=Ku?function(e){return e==null?[]:(e=Object(e),m0(Ku(e),function(t){return v0.call(e,t)}))}:g0;function y0(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var S0=Hu(Object.getPrototypeOf,Object);function x0(e,t,n){var r=t(e);return ba(e)?r:y0(r,n(e))}function I0(e){return x0(e,d0,b0)}var xa=$t(et,"DataView"),Ia=$t(et,"Promise"),_a=$t(et,"Set"),Ca=$t(et,"WeakMap"),Ju="[object Map]",_0="[object Object]",Xu="[object Promise]",Zu="[object Set]",ec="[object WeakMap]",tc="[object DataView]",C0=Dt(xa),w0=Dt(Rn),O0=Dt(Ia),E0=Dt(_a),T0=Dt(Ca),ct=tn;(xa&&ct(new xa(new ArrayBuffer(1)))!=tc||Rn&&ct(new Rn)!=Ju||Ia&&ct(Ia.resolve())!=Xu||_a&&ct(new _a)!=Zu||Ca&&ct(new Ca)!=ec)&&(ct=function(e){var t=tn(e),n=t==_0?e.constructor:void 0,r=n?Dt(n):"";if(r)switch(r){case C0:return tc;case w0:return Ju;case O0:return Xu;case E0:return Zu;case T0:return ec}return t});var D0=Object.prototype,$0=D0.hasOwnProperty;function P0(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&$0.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var nc=et.Uint8Array;function wa(e){var t=new e.constructor(e.byteLength);return new nc(t).set(new nc(e)),t}function M0(e,t){var n=wa(e.buffer);return new e.constructor(n,e.byteOffset,e.byteLength)}var F0=/\w*$/;function N0(e){var t=new e.constructor(e.source,F0.exec(e));return t.lastIndex=e.lastIndex,t}var rc=en?en.prototype:void 0,ic=rc?rc.valueOf:void 0;function k0(e){return ic?Object(ic.call(e)):{}}function A0(e,t){var n=wa(e.buffer);return new e.constructor(n,e.byteOffset,e.length)}var L0="[object Boolean]",j0="[object Date]",B0="[object Map]",R0="[object Number]",q0="[object RegExp]",V0="[object Set]",G0="[object String]",U0="[object Symbol]",z0="[object ArrayBuffer]",H0="[object DataView]",W0="[object Float32Array]",Y0="[object Float64Array]",Q0="[object Int8Array]",K0="[object Int16Array]",J0="[object Int32Array]",X0="[object Uint8Array]",Z0="[object Uint8ClampedArray]",eb="[object Uint16Array]",tb="[object Uint32Array]";function nb(e,t,n){var r=e.constructor;switch(t){case z0:return wa(e);case L0:case j0:return new r(+e);case H0:return M0(e);case W0:case Y0:case Q0:case K0:case J0:case X0:case Z0:case eb:case tb:return A0(e);case B0:return new r;case R0:case G0:return new r(e);case q0:return N0(e);case V0:return new r;case U0:return k0(e)}}var ac=Object.create,rb=function(){function e(){}return function(t){if(!vt(t))return{};if(ac)return ac(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function ib(e){return typeof e.constructor=="function"&&!zu(e)?rb(S0(e)):{}}var ab="[object Map]";function sb(e){return an(e)&&ct(e)==ab}var sc=sn&&sn.isMap,ob=sc?ya(sc):sb,ub="[object Set]";function cb(e){return an(e)&&ct(e)==ub}var oc=sn&&sn.isSet,lb=oc?ya(oc):cb,uc="[object Arguments]",db="[object Array]",fb="[object Boolean]",pb="[object Date]",mb="[object Error]",cc="[object Function]",gb="[object GeneratorFunction]",hb="[object Map]",vb="[object Number]",lc="[object Object]",bb="[object RegExp]",yb="[object Set]",Sb="[object String]",xb="[object Symbol]",Ib="[object WeakMap]",_b="[object ArrayBuffer]",Cb="[object DataView]",wb="[object Float32Array]",Ob="[object Float64Array]",Eb="[object Int8Array]",Tb="[object Int16Array]",Db="[object Int32Array]",$b="[object Uint8Array]",Pb="[object Uint8ClampedArray]",Mb="[object Uint16Array]",Fb="[object Uint32Array]",pe={};pe[uc]=pe[db]=pe[_b]=pe[Cb]=pe[fb]=pe[pb]=pe[wb]=pe[Ob]=pe[Eb]=pe[Tb]=pe[Db]=pe[hb]=pe[vb]=pe[lc]=pe[bb]=pe[yb]=pe[Sb]=pe[xb]=pe[$b]=pe[Pb]=pe[Mb]=pe[Fb]=!0,pe[mb]=pe[cc]=pe[Ib]=!1;function Br(e,t,n,r,i,a){var s;if(s!==void 0)return s;if(!vt(e))return e;var o=ba(e);if(o)s=P0(e);else{var u=ct(e),c=u==cc||u==gb;if(qu(e))return p0(e);if(u==lc||u==uc||c&&!i)s=c?{}:ib(e);else{if(!pe[u])return i?e:{};s=nb(e,u)}}a||(a=new rn);var l=a.get(e);if(l)return l;a.set(e,s),lb(e)?e.forEach(function(p){s.add(Br(p,t,n,p,e,a))}):ob(e)&&e.forEach(function(p,C){s.set(C,Br(p,t,n,C,e,a))});var f=I0,g=o?void 0:f(e);return fv(g||e,function(p,C){g&&(C=p,p=e[C]),hv(s,C,Br(p,t,n,C,e,a))}),s}var Nb=1,kb=4;function Rr(e){return Br(e,Nb|kb)}function dc(e){return e?e.map(t=>t).join(", "):""}const bt=new iu({type:"custom_fields",messageID:"custom_fields.title",makeCriterion:()=>new fc});class fc extends ru{constructor(){super(bt);X(this,"value",[])}isValid(){return this.value.length>0}applyToCriterionInput(n){n.custom_fields=Rr(this.value)}applyToSavedCriterion(n){n.custom_fields=Rr(this.value)}getLabel(n){var u;if(this.value.length===0)return"";const r=this.value[0];let i="",a="";r.modifier!==y.IsNull&&r.modifier!==y.NotNull&&(((u=r.value)==null?void 0:u.length)??0)>0&&(a=dc(r.value));const s=ve.getModifierLabel(n,r.modifier),o={criterion:r.field,modifierString:s,valueString:a,others:""};return this.value.length===1?i="custom_fields.criteria_format_string":(i="custom_fields.criteria_format_string_others",o.others=(this.value.length-1).toString()),n.formatMessage({id:i},o)}getValueLabel(n,r){var o;let i="";r.modifier!==y.IsNull&&r.modifier!==y.NotNull&&(((o=r.value)==null?void 0:o.length)??0)>0&&(i=dc(r.value));const a=ve.getModifierLabel(n,r.modifier),s={criterion:r.field,modifierString:a,valueString:i};return n.formatMessage({id:"custom_fields.criteria_format_string"},s)}toQueryParams(){return{type:this.criterionOption.type,value:this.value}}fromDecodedParams(n){const r=n;this.value=Rr(r.value)}setFromSavedCriterion(n){this.value=Rr(n)}}const pc=[y.Includes],mc=y.Includes,gc="folders",Oa=new fe({messageID:"folder",type:"folder",modifierOptions:pc,defaultModifier:mc,inputType:gc,makeCriterion:()=>new Ab}),hc=new fe({messageID:"parent_folder",type:"parent_folder",modifierOptions:pc,defaultModifier:mc,inputType:gc,makeCriterion:()=>new Lb});class Ab extends An{constructor(){super(Oa)}applyToCriterionInput(t){t.files_filter={parent_folder:this.toCriterionInput()}}}class Lb extends An{constructor(){super(hc)}applyToCriterionInput(t){t.parent_folder=this.toCriterionInput()}}const jb="path",Bb=["date",...ha].map(Oe.createSortBy).concat([{messageID:"performer_age",value:"performer_age"},{messageID:"image_count",value:"images_count"},{messageID:"zip_file_count",value:"file_count"}]),Rb=[be.Grid,be.List,be.Wall],qb=Z("performer_age"),Vb=[re("title"),re("code","scene_code"),re("details"),re("photographer"),Ar,hc,re("checksum","media_info.md5"),Tt,Fr,gu,Lg,ht,du,Z("tag_count"),ga,Kt,Z("performer_count"),qb,Mr,Z("image_count"),vu,Xt,re("url"),Z("file_count","zip_file_count"),ot("date"),we("created_at"),we("updated_at"),bt],Gb=new Oe(jb,Bb,Rb,Vb),vc=new Map([["Landscape",dr.Landscape],["Portrait",dr.Portrait],["Square",dr.Square]]),Ub=(e,t)=>e?vc.get(e):void 0,zb=Array.from(vc.keys());class Hb extends la{toCriterionInput(){return{value:this.value.map(t=>Ub(t)).filter(t=>t)}}}class Wb extends fe{constructor(t){super({messageID:t,type:t,options:zb,makeCriterion:()=>new Hb(this)})}}const bc=new Wb("orientation"),Yb="galleries",Ea=new ca("galleries","galleries",!0,Yb,()=>new yc);class yc extends kn{constructor(){super(Ea)}}const Qb={phash:"media_info.phash",stash_id:"stash_id",title:"title",url:"url"},Sc=["phash","stash_id","title","url"],Ta=new fe({messageID:"media_info.phash",type:"phash_distance",inputType:"text",modifierOptions:[y.Equals,y.NotEquals,y.IsNull,y.NotNull],makeCriterion:()=>new Da});class Da extends ve{constructor(){super(Ta,{value:"",distance:0})}cloneValues(){this.value={...this.value}}getLabelValue(){const{value:t,distance:n}=this.value;return(this.modifier===y.Equals||this.modifier===y.NotEquals)&&n?`${t} (${n})`:`${t}`}toCriterionInput(){return{value:this.value.value,modifier:this.modifier,distance:this.value.distance}}}const xc=new fe({messageID:"duplicated",type:"duplicated",modifierOptions:[],defaultModifier:y.Equals,makeCriterion:()=>new Kb});class Kb extends ve{constructor(){super(xc,{})}cloneValues(){this.value={...this.value}}getLabel(t){const n=[],r=t.formatMessage({id:"true"}),i=t.formatMessage({id:"false"});for(const a of Sc){const s=this.value[a];if(s!==void 0){const o=t.formatMessage({id:Qb[a]});n.push(`${o}: ${s?r:i}`)}}return n.length===0&&this.value.duplicated!==void 0?`${t.formatMessage({id:"duplicated_phash"})}: ${this.value.duplicated?r:i}`:n.length===0?t.formatMessage({id:"duplicated"}):n.join(", ")}getLabelValue(t){return t.formatMessage({id:"duplicated"})}toCriterionInput(){return{duplicated:this.value.duplicated,distance:this.value.distance,phash:this.value.phash,url:this.value.url,stash_id:this.value.stash_id,title:this.value.title}}setFromSavedCriterion(t){const n=t;n.value!==void 0?typeof n.value=="object"?this.value=n.value:typeof n.value=="string"&&(this.value={phash:n.value==="true"}):typeof n=="object"&&(this.value=n),n.modifier&&(this.modifier=n.modifier)}isValid(){return Sc.some(n=>this.value[n]!==void 0)||this.value.duplicated!==void 0}}const Jb="path",Xb=["filesize","file_count","date","resolution","performer_age",...ha].map(Oe.createSortBy).concat([{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"}]),Zb=[be.Grid,be.Wall],ey=Z("performer_age"),ty=[re("title"),re("code","scene_code"),re("details"),re("photographer"),Tr("checksum","media_info.md5"),Ta,Ar,Oa,Ea,Fr,Z("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),pa,bc,kg,ht,Tt,Z("tag_count"),ga,Kt,Z("performer_count"),ey,Mr,Xt,re("url"),ot("date"),Z("file_count"),we("created_at"),we("updated_at"),bt],ny=new Oe(Jb,Xb,Zb,ty),Ic="groups",_c=[y.Includes,y.Excludes,y.IsNull,y.NotNull],Cc=y.Includes;class $a extends fe{constructor(t,n){super({messageID:t,type:n,modifierOptions:_c,defaultModifier:Cc,inputType:Ic,makeCriterion:()=>new Gn(this)})}}const qr=new $a("groups","groups");class Gn extends An{}const wc=new $a("containing_groups","containing_groups"),Oc=new $a("sub_groups","sub_groups"),ry=new fe({messageID:"groups",type:"movies",modifierOptions:_c,defaultModifier:Cc,inputType:Ic,hidden:!0,makeCriterion:()=>new Gn(qr)}),iy="name",ay=["name","random","date","duration","rating","tag_count","sub_group_description","sub_group_order"].map(Oe.createSortBy).concat([{messageID:"scene_count",value:"scenes_count"},{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"}]),sy=[be.Grid],oy=[Xt,Rg,re("url"),re("name"),re("director"),re("synopsis"),Pr("duration"),Tt,Kt,ot("date"),Z("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),wc,Oc,Z("containing_group_count"),Z("sub_group_count"),ht,Z("tag_count"),Z("scene_count"),we("created_at"),we("updated_at"),bt],uy=new Oe(iy,ay,sy,oy),Ec=new Map([["Female",Ie.Female],["Male",Ie.Male],["Transgender Male",Ie.TransgenderMale],["Transgender Female",Ie.TransgenderFemale],["Intersex",Ie.Intersex],["Non-Binary",Ie.NonBinary]]);Ie.Female,Ie.Male,Ie.TransgenderFemale,Ie.TransgenderMale,Ie.Intersex,Ie.NonBinary;const cy=(e,t)=>{if(!e)return;const n=Object.entries(Ie).find(i=>i[1]===e);return n?n[1]:Ec.get(e)},ly=Array.from(Ec.keys()),Tc=new fe({messageID:"gender",type:"gender",options:ly,modifierOptions:[y.Includes,y.Excludes,y.IsNull,y.NotNull],defaultModifier:y.Includes,makeCriterion:()=>new dy});class dy extends la{constructor(t=[]){super(Tc,t)}toCriterionInput(){return{value_list:this.value.map(n=>cy(n)),modifier:this.modifier}}setFromSavedCriterion(t){typeof t.value=="string"&&(t={...t,value:[t.value]}),super.setFromSavedCriterion(t)}}const Dc=new Map([["Uncut",lr.Uncut],["Cut",lr.Cut]]),fy=(e,t)=>{if(!e)return;const n=Object.entries(lr).find(i=>i[1]===e);return n?n[1]:Dc.get(e)},py=Array.from(Dc.keys()),$c=new fe({messageID:"circumcised",type:"circumcised",modifierOptions:[y.Includes,y.Excludes,y.IsNull,y.NotNull],defaultModifier:y.Includes,options:py,makeCriterion:()=>new my});class my extends la{constructor(){super($c)}toCriterionInput(){return{value:this.value.map(n=>fy(n)),modifier:this.modifier}}}const Un=new fe({messageID:"stash_id",type:"stash_id_endpoint",modifierOptions:[y.Equals,y.NotEquals,y.IsNull,y.NotNull],makeCriterion:()=>new gy});class gy extends ve{constructor(){super(Un,{endpoint:"",stashID:""})}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(t){typeof t!="object"?this._value={endpoint:"",stashID:t}:this._value=t}toCriterionInput(){return{endpoint:this.value.endpoint,stash_id:this.value.stashID,modifier:this.modifier}}getLabel(t){const n=ve.getModifierLabel(t,this.modifier);let r="";return this.modifier!==y.IsNull&&this.modifier!==y.NotNull?r=this.getLabelValue(t):this.value.endpoint&&(r="("+this.value.endpoint+")"),t.formatMessage({id:"criterion_modifier.format_string"},{criterion:t.formatMessage({id:this.criterionOption.messageID}),modifierString:n,valueString:r})}getLabelValue(t){let n=this.value.stashID;return this.value.endpoint&&(n+=" ("+this.value.endpoint+")"),n}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}toQueryParams(){super.toQueryParams();let t;return(this.modifier===y.IsNull||this.modifier===y.NotNull)&&!this.value.endpoint?t={type:this.criterionOption.type,modifier:this.modifier}:t={type:this.criterionOption.type,value:this.value,modifier:this.modifier},t}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull||this.value.stashID.length>0}}var Pc={};const hy=[["AF","AFG","004","ISO 3166-2:AF"],["AL","ALB","008","ISO 3166-2:AL"],["DZ","DZA","012","ISO 3166-2:DZ"],["AS","ASM","016","ISO 3166-2:AS"],["AD","AND","020","ISO 3166-2:AD"],["AO","AGO","024","ISO 3166-2:AO"],["AI","AIA","660","ISO 3166-2:AI"],["AQ","ATA","010","ISO 3166-2:AQ"],["AG","ATG","028","ISO 3166-2:AG"],["AR","ARG","032","ISO 3166-2:AR"],["AM","ARM","051","ISO 3166-2:AM"],["AW","ABW","533","ISO 3166-2:AW"],["AU","AUS","036","ISO 3166-2:AU"],["AT","AUT","040","ISO 3166-2:AT"],["AZ","AZE","031","ISO 3166-2:AZ"],["BS","BHS","044","ISO 3166-2:BS"],["BH","BHR","048","ISO 3166-2:BH"],["BD","BGD","050","ISO 3166-2:BD"],["BB","BRB","052","ISO 3166-2:BB"],["BY","BLR","112","ISO 3166-2:BY"],["BE","BEL","056","ISO 3166-2:BE"],["BZ","BLZ","084","ISO 3166-2:BZ"],["BJ","BEN","204","ISO 3166-2:BJ"],["BM","BMU","060","ISO 3166-2:BM"],["BT","BTN","064","ISO 3166-2:BT"],["BO","BOL","068","ISO 3166-2:BO"],["BA","BIH","070","ISO 3166-2:BA"],["BW","BWA","072","ISO 3166-2:BW"],["BV","BVT","074","ISO 3166-2:BV"],["BR","BRA","076","ISO 3166-2:BR"],["IO","IOT","086","ISO 3166-2:IO"],["BN","BRN","096","ISO 3166-2:BN"],["BG","BGR","100","ISO 3166-2:BG"],["BF","BFA","854","ISO 3166-2:BF"],["BI","BDI","108","ISO 3166-2:BI"],["KH","KHM","116","ISO 3166-2:KH"],["CM","CMR","120","ISO 3166-2:CM"],["CA","CAN","124","ISO 3166-2:CA"],["CV","CPV","132","ISO 3166-2:CV"],["KY","CYM","136","ISO 3166-2:KY"],["CF","CAF","140","ISO 3166-2:CF"],["TD","TCD","148","ISO 3166-2:TD"],["CL","CHL","152","ISO 3166-2:CL"],["CN","CHN","156","ISO 3166-2:CN"],["CX","CXR","162","ISO 3166-2:CX"],["CC","CCK","166","ISO 3166-2:CC"],["CO","COL","170","ISO 3166-2:CO"],["KM","COM","174","ISO 3166-2:KM"],["CG","COG","178","ISO 3166-2:CG"],["CD","COD","180","ISO 3166-2:CD"],["CK","COK","184","ISO 3166-2:CK"],["CR","CRI","188","ISO 3166-2:CR"],["CI","CIV","384","ISO 3166-2:CI"],["HR","HRV","191","ISO 3166-2:HR"],["CU","CUB","192","ISO 3166-2:CU"],["CY","CYP","196","ISO 3166-2:CY"],["CZ","CZE","203","ISO 3166-2:CZ"],["DK","DNK","208","ISO 3166-2:DK"],["DJ","DJI","262","ISO 3166-2:DJ"],["DM","DMA","212","ISO 3166-2:DM"],["DO","DOM","214","ISO 3166-2:DO"],["EC","ECU","218","ISO 3166-2:EC"],["EG","EGY","818","ISO 3166-2:EG"],["SV","SLV","222","ISO 3166-2:SV"],["GQ","GNQ","226","ISO 3166-2:GQ"],["ER","ERI","232","ISO 3166-2:ER"],["EE","EST","233","ISO 3166-2:EE"],["ET","ETH","231","ISO 3166-2:ET"],["FK","FLK","238","ISO 3166-2:FK"],["FO","FRO","234","ISO 3166-2:FO"],["FJ","FJI","242","ISO 3166-2:FJ"],["FI","FIN","246","ISO 3166-2:FI"],["FR","FRA","250","ISO 3166-2:FR"],["GF","GUF","254","ISO 3166-2:GF"],["PF","PYF","258","ISO 3166-2:PF"],["TF","ATF","260","ISO 3166-2:TF"],["GA","GAB","266","ISO 3166-2:GA"],["GM","GMB","270","ISO 3166-2:GM"],["GE","GEO","268","ISO 3166-2:GE"],["DE","DEU","276","ISO 3166-2:DE"],["GH","GHA","288","ISO 3166-2:GH"],["GI","GIB","292","ISO 3166-2:GI"],["GR","GRC","300","ISO 3166-2:GR"],["GL","GRL","304","ISO 3166-2:GL"],["GD","GRD","308","ISO 3166-2:GD"],["GP","GLP","312","ISO 3166-2:GP"],["GU","GUM","316","ISO 3166-2:GU"],["GT","GTM","320","ISO 3166-2:GT"],["GN","GIN","324","ISO 3166-2:GN"],["GW","GNB","624","ISO 3166-2:GW"],["GY","GUY","328","ISO 3166-2:GY"],["HT","HTI","332","ISO 3166-2:HT"],["HM","HMD","334","ISO 3166-2:HM"],["VA","VAT","336","ISO 3166-2:VA"],["HN","HND","340","ISO 3166-2:HN"],["HK","HKG","344","ISO 3166-2:HK"],["HU","HUN","348","ISO 3166-2:HU"],["IS","ISL","352","ISO 3166-2:IS"],["IN","IND","356","ISO 3166-2:IN"],["ID","IDN","360","ISO 3166-2:ID"],["IR","IRN","364","ISO 3166-2:IR"],["IQ","IRQ","368","ISO 3166-2:IQ"],["IE","IRL","372","ISO 3166-2:IE"],["IL","ISR","376","ISO 3166-2:IL"],["IT","ITA","380","ISO 3166-2:IT"],["JM","JAM","388","ISO 3166-2:JM"],["JP","JPN","392","ISO 3166-2:JP"],["JO","JOR","400","ISO 3166-2:JO"],["KZ","KAZ","398","ISO 3166-2:KZ"],["KE","KEN","404","ISO 3166-2:KE"],["KI","KIR","296","ISO 3166-2:KI"],["KP","PRK","408","ISO 3166-2:KP"],["KR","KOR","410","ISO 3166-2:KR"],["KW","KWT","414","ISO 3166-2:KW"],["KG","KGZ","417","ISO 3166-2:KG"],["LA","LAO","418","ISO 3166-2:LA"],["LV","LVA","428","ISO 3166-2:LV"],["LB","LBN","422","ISO 3166-2:LB"],["LS","LSO","426","ISO 3166-2:LS"],["LR","LBR","430","ISO 3166-2:LR"],["LY","LBY","434","ISO 3166-2:LY"],["LI","LIE","438","ISO 3166-2:LI"],["LT","LTU","440","ISO 3166-2:LT"],["LU","LUX","442","ISO 3166-2:LU"],["MO","MAC","446","ISO 3166-2:MO"],["MG","MDG","450","ISO 3166-2:MG"],["MW","MWI","454","ISO 3166-2:MW"],["MY","MYS","458","ISO 3166-2:MY"],["MV","MDV","462","ISO 3166-2:MV"],["ML","MLI","466","ISO 3166-2:ML"],["MT","MLT","470","ISO 3166-2:MT"],["MH","MHL","584","ISO 3166-2:MH"],["MQ","MTQ","474","ISO 3166-2:MQ"],["MR","MRT","478","ISO 3166-2:MR"],["MU","MUS","480","ISO 3166-2:MU"],["YT","MYT","175","ISO 3166-2:YT"],["MX","MEX","484","ISO 3166-2:MX"],["FM","FSM","583","ISO 3166-2:FM"],["MD","MDA","498","ISO 3166-2:MD"],["MC","MCO","492","ISO 3166-2:MC"],["MN","MNG","496","ISO 3166-2:MN"],["MS","MSR","500","ISO 3166-2:MS"],["MA","MAR","504","ISO 3166-2:MA"],["MZ","MOZ","508","ISO 3166-2:MZ"],["MM","MMR","104","ISO 3166-2:MM"],["NA","NAM","516","ISO 3166-2:NA"],["NR","NRU","520","ISO 3166-2:NR"],["NP","NPL","524","ISO 3166-2:NP"],["NL","NLD","528","ISO 3166-2:NL"],["NC","NCL","540","ISO 3166-2:NC"],["NZ","NZL","554","ISO 3166-2:NZ"],["NI","NIC","558","ISO 3166-2:NI"],["NE","NER","562","ISO 3166-2:NE"],["NG","NGA","566","ISO 3166-2:NG"],["NU","NIU","570","ISO 3166-2:NU"],["NF","NFK","574","ISO 3166-2:NF"],["MP","MNP","580","ISO 3166-2:MP"],["MK","MKD","807","ISO 3166-2:MK"],["NO","NOR","578","ISO 3166-2:NO"],["OM","OMN","512","ISO 3166-2:OM"],["PK","PAK","586","ISO 3166-2:PK"],["PW","PLW","585","ISO 3166-2:PW"],["PS","PSE","275","ISO 3166-2:PS"],["PA","PAN","591","ISO 3166-2:PA"],["PG","PNG","598","ISO 3166-2:PG"],["PY","PRY","600","ISO 3166-2:PY"],["PE","PER","604","ISO 3166-2:PE"],["PH","PHL","608","ISO 3166-2:PH"],["PN","PCN","612","ISO 3166-2:PN"],["PL","POL","616","ISO 3166-2:PL"],["PT","PRT","620","ISO 3166-2:PT"],["PR","PRI","630","ISO 3166-2:PR"],["QA","QAT","634","ISO 3166-2:QA"],["RE","REU","638","ISO 3166-2:RE"],["RO","ROU","642","ISO 3166-2:RO"],["RU","RUS","643","ISO 3166-2:RU"],["RW","RWA","646","ISO 3166-2:RW"],["SH","SHN","654","ISO 3166-2:SH"],["KN","KNA","659","ISO 3166-2:KN"],["LC","LCA","662","ISO 3166-2:LC"],["PM","SPM","666","ISO 3166-2:PM"],["VC","VCT","670","ISO 3166-2:VC"],["WS","WSM","882","ISO 3166-2:WS"],["SM","SMR","674","ISO 3166-2:SM"],["ST","STP","678","ISO 3166-2:ST"],["SA","SAU","682","ISO 3166-2:SA"],["SN","SEN","686","ISO 3166-2:SN"],["SC","SYC","690","ISO 3166-2:SC"],["SL","SLE","694","ISO 3166-2:SL"],["SG","SGP","702","ISO 3166-2:SG"],["SK","SVK","703","ISO 3166-2:SK"],["SI","SVN","705","ISO 3166-2:SI"],["SB","SLB","090","ISO 3166-2:SB"],["SO","SOM","706","ISO 3166-2:SO"],["ZA","ZAF","710","ISO 3166-2:ZA"],["GS","SGS","239","ISO 3166-2:GS"],["ES","ESP","724","ISO 3166-2:ES"],["LK","LKA","144","ISO 3166-2:LK"],["SD","SDN","729","ISO 3166-2:SD"],["SR","SUR","740","ISO 3166-2:SR"],["SJ","SJM","744","ISO 3166-2:SJ"],["SZ","SWZ","748","ISO 3166-2:SZ"],["SE","SWE","752","ISO 3166-2:SE"],["CH","CHE","756","ISO 3166-2:CH"],["SY","SYR","760","ISO 3166-2:SY"],["TW","TWN","158","ISO 3166-2:TW"],["TJ","TJK","762","ISO 3166-2:TJ"],["TZ","TZA","834","ISO 3166-2:TZ"],["TH","THA","764","ISO 3166-2:TH"],["TL","TLS","626","ISO 3166-2:TL"],["TG","TGO","768","ISO 3166-2:TG"],["TK","TKL","772","ISO 3166-2:TK"],["TO","TON","776","ISO 3166-2:TO"],["TT","TTO","780","ISO 3166-2:TT"],["TN","TUN","788","ISO 3166-2:TN"],["TR","TUR","792","ISO 3166-2:TR"],["TM","TKM","795","ISO 3166-2:TM"],["TC","TCA","796","ISO 3166-2:TC"],["TV","TUV","798","ISO 3166-2:TV"],["UG","UGA","800","ISO 3166-2:UG"],["UA","UKR","804","ISO 3166-2:UA"],["AE","ARE","784","ISO 3166-2:AE"],["GB","GBR","826","ISO 3166-2:GB"],["US","USA","840","ISO 3166-2:US"],["UM","UMI","581","ISO 3166-2:UM"],["UY","URY","858","ISO 3166-2:UY"],["UZ","UZB","860","ISO 3166-2:UZ"],["VU","VUT","548","ISO 3166-2:VU"],["VE","VEN","862","ISO 3166-2:VE"],["VN","VNM","704","ISO 3166-2:VN"],["VG","VGB","092","ISO 3166-2:VG"],["VI","VIR","850","ISO 3166-2:VI"],["WF","WLF","876","ISO 3166-2:WF"],["EH","ESH","732","ISO 3166-2:EH"],["YE","YEM","887","ISO 3166-2:YE"],["ZM","ZMB","894","ISO 3166-2:ZM"],["ZW","ZWE","716","ISO 3166-2:ZW"],["AX","ALA","248","ISO 3166-2:AX"],["BQ","BES","535","ISO 3166-2:BQ"],["CW","CUW","531","ISO 3166-2:CW"],["GG","GGY","831","ISO 3166-2:GG"],["IM","IMN","833","ISO 3166-2:IM"],["JE","JEY","832","ISO 3166-2:JE"],["ME","MNE","499","ISO 3166-2:ME"],["BL","BLM","652","ISO 3166-2:BL"],["MF","MAF","663","ISO 3166-2:MF"],["RS","SRB","688","ISO 3166-2:RS"],["SX","SXM","534","ISO 3166-2:SX"],["SS","SSD","728","ISO 3166-2:SS"],["XK","XKK","983","ISO 3166-2:XK"]],vy=["br","cy","dv","sw","eu","af","am","ha","ku","ml","mt","no","ps","sd","so","sq","ta","tg","tt","ug","ur","vi","ar","az","be","bg","bn","bs","ca","cs","da","de","el","en","es","et","fa","fi","fr","ga","gl","he","hi","hr","hu","hy","id","is","it","ja","ka","kk","km","ko","ky","lt","lv","mk","mn","mr","ms","nb","nl","nn","pl","pt","ro","ru","sk","sl","sr","sv","th","tk","tr","uk","uz","zh"];var Vr={};Vr.remove=by;for(var Gr=[{base:" ",chars:" "},{base:"0",chars:"߀"},{base:"A",chars:"ⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",chars:"Ꜳ"},{base:"AE",chars:"ÆǼǢ"},{base:"AO",chars:"Ꜵ"},{base:"AU",chars:"Ꜷ"},{base:"AV",chars:"ꜸꜺ"},{base:"AY",chars:"Ꜽ"},{base:"B",chars:"ⒷＢḂḄḆɃƁ"},{base:"C",chars:"ⒸＣꜾḈĆCĈĊČÇƇȻ"},{base:"D",chars:"ⒹＤḊĎḌḐḒḎĐƊƉᴅꝹ"},{base:"Dh",chars:"Ð"},{base:"DZ",chars:"ǱǄ"},{base:"Dz",chars:"ǲǅ"},{base:"E",chars:"ɛⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎᴇ"},{base:"F",chars:"ꝼⒻＦḞƑꝻ"},{base:"G",chars:"ⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾɢ"},{base:"H",chars:"ⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",chars:"ⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",chars:"ⒿＪĴɈȷ"},{base:"K",chars:"ⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",chars:"ⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",chars:"Ǉ"},{base:"Lj",chars:"ǈ"},{base:"M",chars:"ⓂＭḾṀṂⱮƜϻ"},{base:"N",chars:"ꞤȠⓃＮǸŃÑṄŇṆŅṊṈƝꞐᴎ"},{base:"NJ",chars:"Ǌ"},{base:"Nj",chars:"ǋ"},{base:"O",chars:"ⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OE",chars:"Œ"},{base:"OI",chars:"Ƣ"},{base:"OO",chars:"Ꝏ"},{base:"OU",chars:"Ȣ"},{base:"P",chars:"ⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",chars:"ⓆＱꝖꝘɊ"},{base:"R",chars:"ⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",chars:"ⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",chars:"ⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",chars:"Þ"},{base:"TZ",chars:"Ꜩ"},{base:"U",chars:"ⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",chars:"ⓋＶṼṾƲꝞɅ"},{base:"VY",chars:"Ꝡ"},{base:"W",chars:"ⓌＷẀẂŴẆẄẈⱲ"},{base:"X",chars:"ⓍＸẊẌ"},{base:"Y",chars:"ⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",chars:"ⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",chars:"ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",chars:"ꜳ"},{base:"ae",chars:"æǽǣ"},{base:"ao",chars:"ꜵ"},{base:"au",chars:"ꜷ"},{base:"av",chars:"ꜹꜻ"},{base:"ay",chars:"ꜽ"},{base:"b",chars:"ⓑｂḃḅḇƀƃɓƂ"},{base:"c",chars:"ｃⓒćĉċčçḉƈȼꜿↄ"},{base:"d",chars:"ⓓｄḋďḍḑḓḏđƌɖɗƋᏧԁꞪ"},{base:"dh",chars:"ð"},{base:"dz",chars:"ǳǆ"},{base:"e",chars:"ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇǝ"},{base:"f",chars:"ⓕｆḟƒ"},{base:"ff",chars:"ﬀ"},{base:"fi",chars:"ﬁ"},{base:"fl",chars:"ﬂ"},{base:"ffi",chars:"ﬃ"},{base:"ffl",chars:"ﬄ"},{base:"g",chars:"ⓖｇǵĝḡğġǧģǥɠꞡꝿᵹ"},{base:"h",chars:"ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",chars:"ƕ"},{base:"i",chars:"ⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",chars:"ⓙｊĵǰɉ"},{base:"k",chars:"ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",chars:"ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇɭ"},{base:"lj",chars:"ǉ"},{base:"m",chars:"ⓜｍḿṁṃɱɯ"},{base:"n",chars:"ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",chars:"ǌ"},{base:"o",chars:"ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿꝋꝍɵɔᴑ"},{base:"oe",chars:"œ"},{base:"oi",chars:"ƣ"},{base:"oo",chars:"ꝏ"},{base:"ou",chars:"ȣ"},{base:"p",chars:"ⓟｐṕṗƥᵽꝑꝓꝕρ"},{base:"q",chars:"ⓠｑɋꝗꝙ"},{base:"r",chars:"ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",chars:"ⓢｓśṥŝṡšṧṣṩșşȿꞩꞅẛʂ"},{base:"ss",chars:"ß"},{base:"t",chars:"ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",chars:"þ"},{base:"tz",chars:"ꜩ"},{base:"u",chars:"ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",chars:"ⓥｖṽṿʋꝟʌ"},{base:"vy",chars:"ꝡ"},{base:"w",chars:"ⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",chars:"ⓧｘẋẍ"},{base:"y",chars:"ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",chars:"ⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Pa={},Ur=0;Ur<Gr.length;Ur+=1)for(var Mc=Gr[Ur].chars,Ma=0;Ma<Mc.length;Ma+=1)Pa[Mc[Ma]]=Gr[Ur].base;function by(e){return e.replace(/[^\u0000-\u007e]/g,function(t){return Pa[t]||t})}Vr.replacementList=Gr,Vr.diacriticsMap=Pa,function(e){const t=hy,n=vy,r=Vr.remove,i={},a={},s={},o={},u={};t.forEach(function(_){const I=_;a[I[0]]=I[1],s[I[1]]=I[0],o[I[2]]=I[0],u[I[0]]=I[2]});function c(_){return("000"+(_||"")).slice(-3)}function l(_,I){return Object.prototype.hasOwnProperty.call(_,I)}function f(_,I){return Object.keys(_).reduce(function(h,E){const D=_[E];return h[E]=I(D,E),h},{})}function g(_,I){switch(_){case"official":return Array.isArray(I)?I[0]:I;case"all":return typeof I=="string"?[I]:I;case"alias":return Array.isArray(I)?I[1]||I[0]:I;default:throw new TypeError("LocaleNameType must be one of these: all, official, alias!")}}e.registerLocale=function(_){if(!_.locale)throw new TypeError("Missing localeData.locale");if(!_.countries)throw new TypeError("Missing localeData.countries");i[_.locale]=_.countries};function p(_){return s[_]}e.alpha3ToAlpha2=p;function C(_){return a[_]}e.alpha2ToAlpha3=C;function S(_){return u[p(_)]}e.alpha3ToNumeric=S;function b(_){return u[_]}e.alpha2ToNumeric=b;function x(_){const I=c(_);return C(o[I])}e.numericToAlpha3=x;function v(_){const I=c(_);return o[I]}e.numericToAlpha2=v;function w(_){if(typeof _=="string"){if(/^[0-9]*$/.test(_))return x(_);if(_.length===2)return C(_.toUpperCase());if(_.length===3)return _.toUpperCase()}if(typeof _=="number")return x(_)}e.toAlpha3=w;function T(_){if(typeof _=="string"){if(/^[0-9]*$/.test(_))return v(_);if(_.length===2)return _.toUpperCase();if(_.length===3)return p(_.toUpperCase())}if(typeof _=="number")return v(_)}e.toAlpha2=T,e.getName=function(_,I,h={}){"select"in h||(h.select="official");try{const D=i[I.toLowerCase()][T(_)];return g(h.select,D)}catch{return}},e.getNames=function(_,I={}){"select"in I||(I.select="official");const h=i[_.toLowerCase()];return h===void 0?{}:f(h,function(E){return g(I.select,E)})},e.getAlpha2Code=function(_,I){const h=D=>D.toLowerCase(),E=(D,$)=>h(D)===h($);try{const D=i[I.toLowerCase()];for(const $ in D)if(l(D,$)){if(typeof D[$]=="string"&&E(D[$],_))return $;if(Array.isArray(D[$])){for(const q of D[$])if(E(q,_))return $}}return}catch{return}},e.getSimpleAlpha2Code=function(_,I){const h=D=>r(D.toLowerCase()),E=(D,$)=>h(D)===h($);try{const D=i[I.toLowerCase()];for(const $ in D)if(l(D,$)){if(typeof D[$]=="string"&&E(D[$],_))return $;if(Array.isArray(D[$])){for(const q of D[$])if(E(q,_))return $}}return}catch{return}},e.getAlpha2Codes=function(){return a},e.getAlpha3Code=function(_,I){const h=e.getAlpha2Code(_,I);if(h)return e.toAlpha3(h)},e.getSimpleAlpha3Code=function(_,I){const h=e.getSimpleAlpha2Code(_,I);if(h)return e.toAlpha3(h)},e.getAlpha3Codes=function(){return s},e.getNumericCodes=function(){return o},e.langs=function(){return Object.keys(i)},e.getSupportedLanguages=function(){return n},e.isValid=function(_){if(!_)return!1;const I=_.toString().toUpperCase();return l(s,I)||l(a,I)||l(o,I)}}(Pc);const Fc=Ps(Pc),yy=e=>e==="zh-CN"?"zh":e==="zh-TW"?"tw":e.slice(0,2),Sy=(e,t="en")=>{if(!e)return;const n=Fc.getName(e,yy(t));if(n)return n;if(t!=="en")return Fc.getName(e,"en")},Nc=new Er({messageID:"country",type:"country",makeCriterion:()=>new kc});class kc extends Ze{constructor(){super(Nc)}getLabelValue(t){return this.modifier===y.Equals||this.modifier===y.NotEquals?Sy(this.value,t.locale)??this.value:super.getLabelValue(t)}}const xy="name",Iy=["name","height","birthdate","tag_count","random","rating","penis_length","play_count","last_played_at","latest_scene","career_start","career_end","weight","measurements","scenes_duration","scenes_size"].map(Oe.createSortBy).concat([{messageID:"scene_count",value:"scenes_count"},{messageID:"image_count",value:"images_count"},{messageID:"gallery_count",value:"galleries_count"},{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"},{messageID:"last_o_at",value:"last_o_at",sfwMessageID:"last_o_at_sfw"}]),_y=[be.Grid,be.List,be.Tagger],Cy=["birth_year","death_year","age","weight","penis_length"],wy=["name","disambiguation","details","ethnicity","hair_color","eye_color","measurements","fake_tits","tattoos","piercings","aliases"],Oy=[uu,Tc,$c,Ag,ht,qr,Xt,Un,re("url"),Tt,Z("tag_count"),Z("scene_count"),Z("image_count"),Z("gallery_count"),Z("play_count"),Z("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Dr("ignore_auto_tag"),Nc,su("height_cm","height"),...Cy.map(e=>su(e)),...wy.map(e=>re(e)),ot("birthdate"),ot("death_date"),ot("career_start"),ot("career_end"),we("created_at"),we("updated_at"),bt],Ey=new Oe(xy,Iy,_y,Oy),Ty="title",Dy=["duration","title","seconds","scene_id","random","scenes_updated_at"].map(Oe.createSortBy),$y=[be.Grid,be.Wall],Py=[ht,bu,rh,Kt,Ig("duration"),we("created_at"),we("updated_at"),ot("scene_date"),we("scene_created_at"),we("scene_updated_at")],My=new Oe(Ty,Dy,$y,Py),Ac=new au("hasMarkers","has_markers",()=>new Fy);class Fy extends da{constructor(){super(Ac)}}const Lc=new wt("interactive","interactive",()=>new Ny);class Ny extends Ot{constructor(){super(Lc)}}const Fa=new Map([["de","Deutsche"],["en","English"],["es","Español"],["fr","Français"],["it","Italiano"],["ja","日本"],["ko","한국인"],["nl","Holandés"],["pt","Português"],["ru","Русский"],["00","Unknown"]]),ky=e=>{if(e)return Array.from(Fa.keys()).find(t=>Fa.get(t)===e)},Ay=Array.from(Fa.values()),jc=new fe({messageID:"captions",type:"captions",modifierOptions:[y.Includes,y.Excludes,y.IsNull,y.NotNull],defaultModifier:y.Includes,options:Ay,makeCriterion:()=>new Ly});class Ly extends Ze{constructor(){super(jc)}toCriterionInput(){return{value:ky(this.value)??"",modifier:this.modifier}}}const jy="date",By=["organized","date","file_count","filesize","duration","framerate","resolution","bitrate","last_played_at","resume_time","play_duration","play_count","interactive","interactive_speed","perceptual_similarity","performer_age","studio",...ha].map(Oe.createSortBy).concat([{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"},{messageID:"last_o_at",value:"last_o_at",sfwMessageID:"last_o_at_sfw"},{messageID:"group_scene_number",value:"group_scene_number"},{messageID:"scene_code",value:"code"}]),Ry=[be.Grid,be.List,be.Wall,be.Tagger],qy=Z("performer_age"),Vy=Pr("duration"),Gy=[re("title"),re("code","scene_code"),Ar,Oa,re("details"),re("director"),Tr("oshash","media_info.oshash"),re("checksum","media_info.md5"),Ta,xc,Fr,Tt,Z("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),pa,bc,Z("framerate"),Z("bitrate"),re("video_codec"),re("audio_codec"),Vy,Pr("resume_time"),Pr("play_duration"),Z("play_count"),we("last_played_at"),Ac,Ng,ht,Z("tag_count"),ga,Kt,Z("performer_count"),qy,Mr,Xt,qr,ry,Ea,re("url"),Un,Z("stash_id_count"),Lc,jc,Z("interactive_speed"),Z("file_count"),ot("date"),we("created_at"),we("updated_at"),bt],Uy=new Oe(jy,By,Ry,Gy),zy="name",Hy=["name","tag_count","random","rating","scenes_duration","scenes_size","latest_scene"].map(Oe.createSortBy).concat([{messageID:"gallery_count",value:"galleries_count"},{messageID:"image_count",value:"images_count"},{messageID:"scene_count",value:"scenes_count"},{messageID:"o_count",value:"o_counter"},{messageID:"o_count_all",value:"o_counter_all"},{messageID:"performer_count",value:"performer_count"},{messageID:"performer_count_all",value:"performer_count_all"},{messageID:"subsidiary_studio_count",value:"child_count"},{messageID:"scene_marker_count",value:"scene_markers_count"}]),Wy=[be.Grid,be.List,be.Tagger],Yy=[lu,Tr("name"),re("details"),xu,Bg,ht,Tt,Dr("ignore_auto_tag"),Dr("organized"),Z("tag_count"),Z("scene_count"),Z("image_count"),Z("gallery_count"),re("url"),Un,re("aliases"),Z("child_count","subsidiary_studio_count"),we("created_at"),we("updated_at"),bt],Qy=new Oe(zy,Hy,Wy,Yy),Ky="name",Jy=["name","random","scenes_duration","scenes_size"].map(Oe.createSortBy).concat([{messageID:"gallery_count",value:"galleries_count"},{messageID:"image_count",value:"images_count"},{messageID:"performer_count",value:"performers_count"},{messageID:"scene_count",value:"scenes_count"},{messageID:"group_count",value:"groups_count"},{messageID:"marker_count",value:"scene_markers_count"},{messageID:"studio_count",value:"studios_count"}]),Xy=[be.Grid,be.List,be.Tagger],Zy=[cu,Tr("name"),re("sort_name"),jg,re("aliases"),re("description"),Dr("ignore_auto_tag"),Un,Z("scene_count"),Z("image_count"),Z("gallery_count"),Z("performer_count"),Z("studio_count"),Z("group_count"),Z("marker_count"),Cu,new $r("parent_tag_count","parent_count"),wu,new $r("sub_tag_count","child_count"),we("created_at"),we("updated_at"),bt],eS=new Oe(Ky,Jy,Xy,Zy);function Bc(e){switch(e){case J.Scenes:return Uy;case J.Performers:return Ey;case J.Studios:return Qy;case J.Galleries:return Gb;case J.SceneMarkers:return My;case J.Movies:case J.Groups:return uy;case J.Tags:return eS;case J.Images:return ny}}const lt={sortDirection:Ve.Asc,displayMode:be.Grid,currentPage:1,itemsPerPage:40};class ie{constructor(t,n,r){X(this,"mode");X(this,"options");X(this,"config");X(this,"searchTerm","");X(this,"currentPage",lt.currentPage);X(this,"itemsPerPage",lt.itemsPerPage);X(this,"sortDirection",lt.sortDirection);X(this,"sortBy");X(this,"displayMode",lt.displayMode);X(this,"zoomIndex",1);X(this,"criteria",[]);X(this,"randomSeed",-1);X(this,"defaultZoomIndex",1);this.mode=t,this.config=n,this.options=Bc(t);const{defaultSortBy:i,displayModeOptions:a}=this.options;r!=null&&r.defaultSortBy?(this.sortBy=r.defaultSortBy,r.defaultSortDir&&(this.sortDirection=r.defaultSortDir)):(this.sortBy=i,this.sortBy==="date"&&(this.sortDirection=Ve.Desc)),this.displayMode=a[0],(r==null?void 0:r.defaultZoomIndex)!==void 0&&(this.defaultZoomIndex=r.defaultZoomIndex,this.zoomIndex=r.defaultZoomIndex)}clone(){const t=Object.assign(new ie(this.mode,this.config),this);return t.criteria=this.criteria.map(n=>n.clone()),t}empty(){return new ie(this.mode,this.config,{defaultZoomIndex:this.defaultZoomIndex})}metadataInfo(){const t=this.clone();return t.sortBy=void 0,t.randomSeed=-1,t.currentPage=1,t.sortDirection=lt.sortDirection,t.itemsPerPage=0,t.zoomIndex=1,t.displayMode=lt.displayMode,t}count(){return this.criteria.length}configureFromDecodedParams(t){if(t.perPage!==void 0&&(this.itemsPerPage=t.perPage),t.sortby!==void 0){this.sortBy=t.sortby;const n=this.sortBy.match(/^random_(\d+)$/);n&&(this.sortBy="random",this.randomSeed=Number.parseInt(n[1],10))}if(t.sortdir!==void 0?this.sortDirection=t.sortdir==="desc"?Ve.Desc:Ve.Asc:this.sortDirection=t.sortby==="date"?Ve.Desc:Ve.Asc,t.disp!==void 0&&(this.displayMode=t.disp),t.q!==void 0&&(this.searchTerm=t.q),this.currentPage=t.p??1,t.z!==void 0&&(this.zoomIndex=t.z),this.criteria=[],t.c!==void 0)for(const n of t.c)try{const{type:r,...i}=JSON.parse(n),a=this.makeCriterion(r);a.fromDecodedParams(i),this.criteria.push(a)}catch(r){console.error("Failed to parse encoded criterion:",r)}}static decodeParams(t){const n={};if(t.perPage&&(n.perPage=Number.parseInt(t.perPage,10)),t.sortby&&(n.sortby=t.sortby),t.sortdir&&(n.sortdir=t.sortdir),t.disp&&(n.disp=Number.parseInt(t.disp,10)),t.q&&(n.q=t.q),t.p&&(n.p=Number.parseInt(t.p,10)),t.z){const r=Number.parseInt(t.z,10);r>=0&&(n.z=r)}return t.c&&t.c.length!==0&&(n.c=t.c.map(r=>ie.translateJSON(r,!0))),n}static translateJSON(t,n){let r=!1,i=!1;return[...t].map(a=>{if(i)return i=!1,a;switch(a){case"\\":r&&(i=!0);break;case'"':r=!r;break;case"(":if(n&&!r)return"{";break;case")":if(n&&!r)return"}";break;case"{":if(!n&&!r)return"(";break;case"}":if(!n&&!r)return")";break}return a}).join("")}configureFromQueryString(t){const n=new URLSearchParams(t),r={perPage:n.get("perPage"),sortby:n.get("sortby"),sortdir:n.get("sortdir"),disp:n.get("disp"),q:n.get("q"),p:n.get("p"),z:n.get("z"),c:n.getAll("c")},i=ie.decodeParams(r);this.configureFromDecodedParams(i)}configureFromSavedFilter(t){var s;const{find_filter:n,object_filter:r,ui_options:i}=t;this.itemsPerPage=(n==null?void 0:n.per_page)??this.itemsPerPage,this.sortBy=(n==null?void 0:n.sort)??this.sortBy;const a=(s=this.sortBy)==null?void 0:s.match(/^random_(\d+)$/);if(a&&(this.sortBy="random",this.randomSeed=Number.parseInt(a[1],10)),this.sortDirection=(n==null?void 0:n.direction)??this.sortDirection,this.searchTerm=(n==null?void 0:n.q)??this.searchTerm,this.displayMode=(i==null?void 0:i.display_mode)??this.displayMode,this.zoomIndex=(i==null?void 0:i.zoom_index)??this.zoomIndex,this.currentPage=1,this.criteria=[],r)for(const[o,u]of Object.entries(r)){const c=this.makeCriterion(o);c.setFromSavedCriterion(u),this.criteria.push(c)}}setRandomSeed(){this.sortBy==="random"?this.randomSeed===-1&&(this.randomSeed=Math.floor(Math.random()*10**8)):this.randomSeed=-1}getSortBy(){return this.setRandomSeed(),this.sortBy==="random"?`random_${this.randomSeed.toString()}`:this.sortBy}getEncodedParams(){const t=this.criteria.map(n=>{const r=n.toQueryParams();let i=ie.translateJSON(JSON.stringify(r),!1);return i=encodeURI(i),i=i.replaceAll("?",encodeURIComponent("?")),i=i.replaceAll("#",encodeURIComponent("#")),i=i.replaceAll("&",encodeURIComponent("&")),i=i.replaceAll(";",encodeURIComponent(";")),i=i.replaceAll("=",encodeURIComponent("=")),i=i.replaceAll("+",encodeURIComponent("+")),i});return{perPage:this.itemsPerPage!==lt.itemsPerPage?String(this.itemsPerPage):void 0,sortby:this.getSortBy(),sortdir:this.sortBy==="date"?this.sortDirection===Ve.Asc?"asc":void 0:this.sortDirection===Ve.Desc?"desc":void 0,disp:this.displayMode!==lt.displayMode?String(this.displayMode):void 0,q:this.searchTerm?encodeURIComponent(this.searchTerm):void 0,p:this.currentPage!==lt.currentPage?String(this.currentPage):void 0,z:this.zoomIndex!==this.defaultZoomIndex?String(this.zoomIndex):void 0,c:t}}makeQueryParameters(){const t=[],n=this.getEncodedParams();if(n.q&&t.push(`q=${n.q}`),n.c)for(const r of n.c)t.push(`c=${r}`);return n.sortby&&t.push(`sortby=${n.sortby}`),n.sortdir&&t.push(`sortdir=${n.sortdir}`),n.perPage&&t.push(`perPage=${n.perPage}`),n.disp&&t.push(`disp=${n.disp}`),n.z&&t.push(`z=${n.z}`),n.p&&t.push(`p=${n.p}`),t.join("&")}makeCriterion(t){const{criterionOptions:n}=Bc(this.mode),r=n.find(i=>i.type===t);return r?r.makeCriterion(this.config):new Eg(t).makeCriterion(this.config)}makeFindFilter(){return{q:this.searchTerm,page:this.currentPage,per_page:this.itemsPerPage,sort:this.getSortBy(),direction:this.sortDirection}}makeFilter(){const t={};for(const n of this.criteria)n.applyToCriterionInput(t);return t}makeSavedFilter(){const t={};for(const n of this.criteria)n.applyToSavedCriterion(t);return t}makeSavedUIOptions(){return{display_mode:this.displayMode,zoom_index:this.zoomIndex}}criteriaFor(t){return this.criteria.filter(n=>n.criterionOption.type===t)}replaceCriteria(t,n){const r=[...this.criteria.filter(i=>i.criterionOption.type!==t),...n];return this.setCriteria(r)}clearCriteria(t=!1){const n=this.clone();return t&&(n.searchTerm=""),n.criteria=[],n.currentPage=1,n}clearSearchTerm(){const t=this.clone();return t.searchTerm="",t.currentPage=1,t}setCriteria(t){const n=this.clone();return n.criteria=t,n.currentPage=1,n}removeCriterion(t){const n=this.clone(),r=n.criteria.find(a=>a.criterionOption.type===t);if(!r)return n;const i=n.criteria.filter(a=>a.getId()!==r.getId());return n.criteria=i,n.currentPage=1,n}removeCustomFieldCriterion(t,n){const r=this.clone(),i=r.criteria.find(a=>a.criterionOption.type===t);if(!i)return r;if(i instanceof fc){const a=i.value.filter((s,o)=>o!==n);i.value=a}return r}setPageSize(t){const n=this.clone();return n.itemsPerPage=t,n.currentPage=1,n}setSortBy(t){const n=this.clone();return n.sortBy=t,n.currentPage=1,n}toggleSortDirection(){const t=this.clone();return t.sortDirection===Ve.Asc?t.sortDirection=Ve.Desc:t.sortDirection=Ve.Asc,t.currentPage=1,t}reshuffleRandomSort(){const t=this.clone();return t.currentPage=1,t.randomSeed=-1,t}changePage(t){const n=this.clone();return n.currentPage=t,n}setZoom(t){const n=this.clone();return n.zoomIndex=t,n}setDisplayMode(t){const n=this.clone();return n.displayMode=t,n}}function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(null,arguments)}function Mt(e){"@babel/helpers - typeof";return Mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mt(e)}function tS(e,t){if(Mt(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Mt(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Rc(e){var t=tS(e,"string");return Mt(t)=="symbol"?t:t+""}function on(e,t,n){return(t=Rc(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qc(Object(n),!0).forEach(function(r){on(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Vc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Rc(r.key),r)}}function rS(e,t,n){return t&&Vc(e.prototype,t),n&&Vc(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Na(e,t){return Na=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Na(e,t)}function iS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Na(e,t)}function zr(e){return zr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},zr(e)}function Gc(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Gc=function(){return!!e})()}function aS(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sS(e,t){if(t&&(Mt(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return aS(e)}function oS(e){var t=Gc();return function(){var n,r=zr(e);if(t){var i=zr(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return sS(this,n)}}function ka(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function uS(e){if(Array.isArray(e))return ka(e)}function cS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Uc(e,t){if(e){if(typeof e=="string")return ka(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ka(e,t):void 0}}function lS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function un(e){return uS(e)||cS(e)||Uc(e)||lS()}function dS(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function fS(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var pS=function(){function e(n){var r=this;this._insertTag=function(i){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,a),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(fS(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=dS(i);try{a.insertRule(r,a.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ke="-ms-",Hr="-moz-",se="-webkit-",zc="comm",Aa="rule",La="decl",mS="@import",Hc="@keyframes",gS="@layer",hS=Math.abs,Wr=String.fromCharCode,vS=Object.assign;function bS(e,t){return Ne(e,0)^45?(((t<<2^Ne(e,0))<<2^Ne(e,1))<<2^Ne(e,2))<<2^Ne(e,3):0}function Wc(e){return e.trim()}function yS(e,t){return(e=t.exec(e))?e[0]:e}function oe(e,t,n){return e.replace(t,n)}function ja(e,t){return e.indexOf(t)}function Ne(e,t){return e.charCodeAt(t)|0}function zn(e,t,n){return e.slice(t,n)}function nt(e){return e.length}function Ba(e){return e.length}function Yr(e,t){return t.push(e),e}function SS(e,t){return e.map(t).join("")}var Qr=1,cn=1,Yc=0,qe=0,_e=0,ln="";function Kr(e,t,n,r,i,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Qr,column:cn,length:s,return:""}}function Hn(e,t){return vS(Kr("",null,null,"",null,null,0),e,{length:-e.length},t)}function xS(){return _e}function IS(){return _e=qe>0?Ne(ln,--qe):0,cn--,_e===10&&(cn=1,Qr--),_e}function ze(){return _e=qe<Yc?Ne(ln,qe++):0,cn++,_e===10&&(cn=1,Qr++),_e}function rt(){return Ne(ln,qe)}function Jr(){return qe}function Wn(e,t){return zn(ln,e,t)}function Yn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Qc(e){return Qr=cn=1,Yc=nt(ln=e),qe=0,[]}function Kc(e){return ln="",e}function Xr(e){return Wc(Wn(qe-1,Ra(e===91?e+2:e===40?e+1:e)))}function _S(e){for(;(_e=rt())&&_e<33;)ze();return Yn(e)>2||Yn(_e)>3?"":" "}function CS(e,t){for(;--t&&ze()&&!(_e<48||_e>102||_e>57&&_e<65||_e>70&&_e<97););return Wn(e,Jr()+(t<6&&rt()==32&&ze()==32))}function Ra(e){for(;ze();)switch(_e){case e:return qe;case 34:case 39:e!==34&&e!==39&&Ra(_e);break;case 40:e===41&&Ra(e);break;case 92:ze();break}return qe}function wS(e,t){for(;ze()&&e+_e!==57;)if(e+_e===84&&rt()===47)break;return"/*"+Wn(t,qe-1)+"*"+Wr(e===47?e:ze())}function OS(e){for(;!Yn(rt());)ze();return Wn(e,qe)}function ES(e){return Kc(Zr("",null,null,null,[""],e=Qc(e),0,[0],e))}function Zr(e,t,n,r,i,a,s,o,u){for(var c=0,l=0,f=s,g=0,p=0,C=0,S=1,b=1,x=1,v=0,w="",T=i,_=a,I=r,h=w;b;)switch(C=v,v=ze()){case 40:if(C!=108&&Ne(h,f-1)==58){ja(h+=oe(Xr(v),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:h+=Xr(v);break;case 9:case 10:case 13:case 32:h+=_S(C);break;case 92:h+=CS(Jr()-1,7);continue;case 47:switch(rt()){case 42:case 47:Yr(TS(wS(ze(),Jr()),t,n),u);break;default:h+="/"}break;case 123*S:o[c++]=nt(h)*x;case 125*S:case 59:case 0:switch(v){case 0:case 125:b=0;case 59+l:x==-1&&(h=oe(h,/\f/g,"")),p>0&&nt(h)-f&&Yr(p>32?Xc(h+";",r,n,f-1):Xc(oe(h," ","")+";",r,n,f-2),u);break;case 59:h+=";";default:if(Yr(I=Jc(h,t,n,c,l,i,o,w,T=[],_=[],f),a),v===123)if(l===0)Zr(h,t,I,I,T,a,f,o,_);else switch(g===99&&Ne(h,3)===110?100:g){case 100:case 108:case 109:case 115:Zr(e,I,I,r&&Yr(Jc(e,I,I,0,0,i,o,w,i,T=[],f),_),i,_,f,o,r?T:_);break;default:Zr(h,I,I,I,[""],_,0,o,_)}}c=l=p=0,S=x=1,w=h="",f=s;break;case 58:f=1+nt(h),p=C;default:if(S<1){if(v==123)--S;else if(v==125&&S++==0&&IS()==125)continue}switch(h+=Wr(v),v*S){case 38:x=l>0?1:(h+="\f",-1);break;case 44:o[c++]=(nt(h)-1)*x,x=1;break;case 64:rt()===45&&(h+=Xr(ze())),g=rt(),l=f=nt(w=h+=OS(Jr())),v++;break;case 45:C===45&&nt(h)==2&&(S=0)}}return a}function Jc(e,t,n,r,i,a,s,o,u,c,l){for(var f=i-1,g=i===0?a:[""],p=Ba(g),C=0,S=0,b=0;C<r;++C)for(var x=0,v=zn(e,f+1,f=hS(S=s[C])),w=e;x<p;++x)(w=Wc(S>0?g[x]+" "+v:oe(v,/&\f/g,g[x])))&&(u[b++]=w);return Kr(e,t,n,i===0?Aa:o,u,c,l)}function TS(e,t,n){return Kr(e,t,n,zc,Wr(xS()),zn(e,2,-2),0)}function Xc(e,t,n,r){return Kr(e,t,n,La,zn(e,0,r),zn(e,r+1,-1),r)}function dn(e,t){for(var n="",r=Ba(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function DS(e,t,n,r){switch(e.type){case gS:if(e.children.length)break;case mS:case La:return e.return=e.return||e.value;case zc:return"";case Hc:return e.return=e.value+"{"+dn(e.children,r)+"}";case Aa:e.value=e.props.join(",")}return nt(n=dn(e.children,r))?e.return=e.value+"{"+n+"}":""}function $S(e){var t=Ba(e);return function(n,r,i,a){for(var s="",o=0;o<t;o++)s+=e[o](n,r,i,a)||"";return s}}function PS(e){return function(t){t.root||(t=t.return)&&e(t)}}function MS(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var FS=function(t,n,r){for(var i=0,a=0;i=a,a=rt(),i===38&&a===12&&(n[r]=1),!Yn(a);)ze();return Wn(t,qe)},NS=function(t,n){var r=-1,i=44;do switch(Yn(i)){case 0:i===38&&rt()===12&&(n[r]=1),t[r]+=FS(qe-1,n,r);break;case 2:t[r]+=Xr(i);break;case 4:if(i===44){t[++r]=rt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Wr(i)}while(i=ze());return t},kS=function(t,n){return Kc(NS(Qc(t),n))},Zc=new WeakMap,AS=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Zc.get(r))&&!i){Zc.set(t,!0);for(var a=[],s=kS(n,a),o=r.props,u=0,c=0;u<s.length;u++)for(var l=0;l<o.length;l++,c++)t.props[c]=a[u]?s[u].replace(/&\f/g,o[l]):o[l]+" "+s[u]}}},LS=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function el(e,t){switch(bS(e,t)){case 5103:return se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return se+e+Hr+e+ke+e+e;case 6828:case 4268:return se+e+ke+e+e;case 6165:return se+e+ke+"flex-"+e+e;case 5187:return se+e+oe(e,/(\w+).+(:[^]+)/,se+"box-$1$2"+ke+"flex-$1$2")+e;case 5443:return se+e+ke+"flex-item-"+oe(e,/flex-|-self/,"")+e;case 4675:return se+e+ke+"flex-line-pack"+oe(e,/align-content|flex-|-self/,"")+e;case 5548:return se+e+ke+oe(e,"shrink","negative")+e;case 5292:return se+e+ke+oe(e,"basis","preferred-size")+e;case 6060:return se+"box-"+oe(e,"-grow","")+se+e+ke+oe(e,"grow","positive")+e;case 4554:return se+oe(e,/([^-])(transform)/g,"$1"+se+"$2")+e;case 6187:return oe(oe(oe(e,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),e,"")+e;case 5495:case 3959:return oe(e,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return oe(oe(e,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+e+e;case 4095:case 3583:case 4068:case 2532:return oe(e,/(.+)-inline(.+)/,se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nt(e)-1-t>6)switch(Ne(e,t+1)){case 109:if(Ne(e,t+4)!==45)break;case 102:return oe(e,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+Hr+(Ne(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ja(e,"stretch")?el(oe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ne(e,t+1)!==115)break;case 6444:switch(Ne(e,nt(e)-3-(~ja(e,"!important")&&10))){case 107:return oe(e,":",":"+se)+e;case 101:return oe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+se+(Ne(e,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+ke+"$2box$3")+e}break;case 5936:switch(Ne(e,t+11)){case 114:return se+e+ke+oe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return se+e+ke+oe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return se+e+ke+oe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return se+e+ke+e+e}return e}var jS=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case La:t.return=el(t.value,t.length);break;case Hc:return dn([Hn(t,{value:oe(t.value,"@","@"+se)})],i);case Aa:if(t.length)return SS(t.props,function(a){switch(yS(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return dn([Hn(t,{props:[oe(a,/:(read-\w+)/,":"+Hr+"$1")]})],i);case"::placeholder":return dn([Hn(t,{props:[oe(a,/:(plac\w+)/,":"+se+"input-$1")]}),Hn(t,{props:[oe(a,/:(plac\w+)/,":"+Hr+"$1")]}),Hn(t,{props:[oe(a,/:(plac\w+)/,ke+"input-$1")]})],i)}return""})}},BS=[jS],RS=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(S){var b=S.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var i=t.stylisPlugins||BS,a={},s,o=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(S){for(var b=S.getAttribute("data-emotion").split(" "),x=1;x<b.length;x++)a[b[x]]=!0;o.push(S)});var u,c=[AS,LS];{var l,f=[DS,PS(function(S){l.insert(S)})],g=$S(c.concat(i,f)),p=function(b){return dn(ES(b),g)};u=function(b,x,v,w){l=v,p(b?b+"{"+x.styles+"}":x.styles),w&&(C.inserted[x.name]=!0)}}var C={key:n,sheet:new pS({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:u};return C.sheet.hydrate(o),C},tl={exports:{}},le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var De=typeof Symbol=="function"&&Symbol.for,qa=De?Symbol.for("react.element"):60103,Va=De?Symbol.for("react.portal"):60106,ei=De?Symbol.for("react.fragment"):60107,ti=De?Symbol.for("react.strict_mode"):60108,ni=De?Symbol.for("react.profiler"):60114,ri=De?Symbol.for("react.provider"):60109,ii=De?Symbol.for("react.context"):60110,Ga=De?Symbol.for("react.async_mode"):60111,ai=De?Symbol.for("react.concurrent_mode"):60111,si=De?Symbol.for("react.forward_ref"):60112,oi=De?Symbol.for("react.suspense"):60113,qS=De?Symbol.for("react.suspense_list"):60120,ui=De?Symbol.for("react.memo"):60115,ci=De?Symbol.for("react.lazy"):60116,VS=De?Symbol.for("react.block"):60121,GS=De?Symbol.for("react.fundamental"):60117,US=De?Symbol.for("react.responder"):60118,zS=De?Symbol.for("react.scope"):60119;function He(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case qa:switch(e=e.type,e){case Ga:case ai:case ei:case ni:case ti:case oi:return e;default:switch(e=e&&e.$$typeof,e){case ii:case si:case ci:case ui:case ri:return e;default:return t}}case Va:return t}}}function nl(e){return He(e)===ai}le.AsyncMode=Ga,le.ConcurrentMode=ai,le.ContextConsumer=ii,le.ContextProvider=ri,le.Element=qa,le.ForwardRef=si,le.Fragment=ei,le.Lazy=ci,le.Memo=ui,le.Portal=Va,le.Profiler=ni,le.StrictMode=ti,le.Suspense=oi,le.isAsyncMode=function(e){return nl(e)||He(e)===Ga},le.isConcurrentMode=nl,le.isContextConsumer=function(e){return He(e)===ii},le.isContextProvider=function(e){return He(e)===ri},le.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===qa},le.isForwardRef=function(e){return He(e)===si},le.isFragment=function(e){return He(e)===ei},le.isLazy=function(e){return He(e)===ci},le.isMemo=function(e){return He(e)===ui},le.isPortal=function(e){return He(e)===Va},le.isProfiler=function(e){return He(e)===ni},le.isStrictMode=function(e){return He(e)===ti},le.isSuspense=function(e){return He(e)===oi},le.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ei||e===ai||e===ni||e===ti||e===oi||e===qS||typeof e=="object"&&e!==null&&(e.$$typeof===ci||e.$$typeof===ui||e.$$typeof===ri||e.$$typeof===ii||e.$$typeof===si||e.$$typeof===GS||e.$$typeof===US||e.$$typeof===zS||e.$$typeof===VS)},le.typeOf=He,tl.exports=le;var HS=tl.exports,rl=HS,WS={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},YS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},il={};il[rl.ForwardRef]=WS,il[rl.Memo]=YS;var QS=!0;function KS(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(r+=i+" ")}),r}var al=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||QS===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},JS=function(t,n,r){al(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+i:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function XS(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var ZS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},e1=/[A-Z]|^ms/g,t1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,sl=function(t){return t.charCodeAt(1)===45},ol=function(t){return t!=null&&typeof t!="boolean"},Ua=MS(function(e){return sl(e)?e:e.replace(e1,"-$&").toLowerCase()}),ul=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(t1,function(r,i,a){return it={name:i,styles:a,next:it},i})}return ZS[t]!==1&&!sl(t)&&typeof n=="number"&&n!==0?n+"px":n};function Qn(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return it={name:i.name,styles:i.styles,next:it},i.name;var a=n;if(a.styles!==void 0){var s=a.next;if(s!==void 0)for(;s!==void 0;)it={name:s.name,styles:s.styles,next:it},s=s.next;var o=a.styles+";";return o}return n1(e,t,n)}case"function":{if(e!==void 0){var u=it,c=n(e);return it=u,Qn(e,t,c)}break}}var l=n;return l}function n1(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Qn(e,t,n[i])+";";else for(var a in n){var s=n[a];if(typeof s!="object"){var o=s;ol(o)&&(r+=Ua(a)+":"+ul(a,o)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&t==null)for(var u=0;u<s.length;u++)ol(s[u])&&(r+=Ua(a)+":"+ul(a,s[u])+";");else{var c=Qn(e,t,s);switch(a){case"animation":case"animationName":{r+=Ua(a)+":"+c+";";break}default:r+=a+"{"+c+"}"}}}return r}var cl=/label:\s*([^\s;{]+)\s*(;|$)/g,it;function ll(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";it=void 0;var a=e[0];if(a==null||a.raw===void 0)r=!1,i+=Qn(n,t,a);else{var s=a;i+=s[0]}for(var o=1;o<e.length;o++)if(i+=Qn(n,t,e[o]),r){var u=a;i+=u[o]}cl.lastIndex=0;for(var c="",l;(l=cl.exec(i))!==null;)c+="-"+l[1];var f=XS(i)+c;return{name:f,styles:i,next:it}}var r1=function(t){return t()},i1=K.useInsertionEffect?K.useInsertionEffect:!1,a1=i1||r1,dl=K.createContext(typeof HTMLElement<"u"?RS({key:"css"}):null);dl.Provider;var s1=function(t){return O.forwardRef(function(n,r){var i=O.useContext(dl);return t(n,i,r)})},o1=K.createContext({}),za={}.hasOwnProperty,Ha="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",u1=function(t,n){var r={};for(var i in n)za.call(n,i)&&(r[i]=n[i]);return r[Ha]=t,r},c1=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return al(n,r,i),a1(function(){return JS(n,r,i)}),null},l1=s1(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Ha],a=[r],s="";typeof e.className=="string"?s=KS(t.registered,a,e.className):e.className!=null&&(s=e.className+" ");var o=ll(a,void 0,K.useContext(o1));s+=t.key+"-"+o.name;var u={};for(var c in e)za.call(e,c)&&c!=="css"&&c!==Ha&&(u[c]=e[c]);return u.className=s,n&&(u.ref=n),K.createElement(K.Fragment,null,K.createElement(c1,{cache:t,serialized:o,isStringTag:typeof i=="string"}),K.createElement(i,u))}),d1=l1,G=function(t,n){var r=arguments;if(n==null||!za.call(n,"css"))return K.createElement.apply(void 0,r);var i=r.length,a=new Array(i);a[0]=d1,a[1]=u1(t,n);for(var s=2;s<i;s++)a[s]=r[s];return K.createElement.apply(null,a)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(G||(G={}));function Wa(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ll(t)}function f1(){var e=Wa.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function p1(e){if(Array.isArray(e))return e}function m1(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,s,o=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);u=!0);}catch(l){c=!0,i=l}finally{try{if(!u&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw i}}return o}}function g1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(e,t){return p1(e)||m1(e,t)||Uc(e,t)||g1()}function h1(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function tt(e,t){if(e==null)return{};var n,r,i=h1(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function v1(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const b1=Math.min,y1=Math.max,li=Math.round,di=Math.floor,fi=e=>({x:e,y:e});function S1(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function pi(){return typeof window<"u"}function fl(e){return ml(e)?(e.nodeName||"").toLowerCase():"#document"}function dt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function pl(e){var t;return(t=(ml(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ml(e){return pi()?e instanceof Node||e instanceof dt(e).Node:!1}function x1(e){return pi()?e instanceof Element||e instanceof dt(e).Element:!1}function Ya(e){return pi()?e instanceof HTMLElement||e instanceof dt(e).HTMLElement:!1}function gl(e){return!pi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof dt(e).ShadowRoot}const I1=new Set(["inline","contents"]);function hl(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Qa(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!I1.has(i)}function _1(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const C1=new Set(["html","body","#document"]);function w1(e){return C1.has(fl(e))}function Qa(e){return dt(e).getComputedStyle(e)}function O1(e){if(fl(e)==="html")return e;const t=e.assignedSlot||e.parentNode||gl(e)&&e.host||pl(e);return gl(t)?t.host:t}function vl(e){const t=O1(e);return w1(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ya(t)&&hl(t)?t:vl(t)}function mi(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=vl(e),a=i===((r=e.ownerDocument)==null?void 0:r.body),s=dt(i);if(a){const o=Ka(s);return t.concat(s,s.visualViewport||[],hl(i)?i:[],o&&n?mi(o):[])}return t.concat(i,mi(i,[],n))}function Ka(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function E1(e){const t=Qa(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Ya(e),a=i?e.offsetWidth:n,s=i?e.offsetHeight:r,o=li(n)!==a||li(r)!==s;return o&&(n=a,r=s),{width:n,height:r,$:o}}function Ja(e){return x1(e)?e:e.contextElement}function bl(e){const t=Ja(e);if(!Ya(t))return fi(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:a}=E1(t);let s=(a?li(n.width):n.width)/r,o=(a?li(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!o||!Number.isFinite(o))&&(o=1),{x:s,y:o}}const T1=fi(0);function D1(e){const t=dt(e);return!_1()||!t.visualViewport?T1:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function $1(e,t,n){return!1}function yl(e,t,n,r){t===void 0&&(t=!1);const i=e.getBoundingClientRect(),a=Ja(e);let s=fi(1);t&&(s=bl(e));const o=$1()?D1(a):fi(0);let u=(i.left+o.x)/s.x,c=(i.top+o.y)/s.y,l=i.width/s.x,f=i.height/s.y;if(a){const g=dt(a),p=r;let C=g,S=Ka(C);for(;S&&r&&p!==C;){const b=bl(S),x=S.getBoundingClientRect(),v=Qa(S),w=x.left+(S.clientLeft+parseFloat(v.paddingLeft))*b.x,T=x.top+(S.clientTop+parseFloat(v.paddingTop))*b.y;u*=b.x,c*=b.y,l*=b.x,f*=b.y,u+=w,c+=T,C=dt(S),S=Ka(C)}}return S1({width:l,height:f,x:u,y:c})}function Sl(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function P1(e,t){let n=null,r;const i=pl(e);function a(){var o;clearTimeout(r),(o=n)==null||o.disconnect(),n=null}function s(o,u){o===void 0&&(o=!1),u===void 0&&(u=1),a();const c=e.getBoundingClientRect(),{left:l,top:f,width:g,height:p}=c;if(o||t(),!g||!p)return;const C=di(f),S=di(i.clientWidth-(l+g)),b=di(i.clientHeight-(f+p)),x=di(l),w={rootMargin:-C+"px "+-S+"px "+-b+"px "+-x+"px",threshold:y1(0,b1(1,u))||1};let T=!0;function _(I){const h=I[0].intersectionRatio;if(h!==u){if(!T)return s();h?s(!1,h):r=setTimeout(()=>{s(!1,1e-7)},1e3)}h===1&&!Sl(c,e.getBoundingClientRect())&&s(),T=!1}try{n=new IntersectionObserver(_,{...w,root:i.ownerDocument})}catch{n=new IntersectionObserver(_,w)}n.observe(e)}return s(!0),a}function M1(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,c=Ja(e),l=i||a?[...c?mi(c):[],...mi(t)]:[];l.forEach(x=>{i&&x.addEventListener("scroll",n,{passive:!0}),a&&x.addEventListener("resize",n)});const f=c&&o?P1(c,n):null;let g=-1,p=null;s&&(p=new ResizeObserver(x=>{let[v]=x;v&&v.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var w;(w=p)==null||w.observe(t)})),n()}),c&&!u&&p.observe(c),p.observe(t));let C,S=u?yl(e):null;u&&b();function b(){const x=yl(e);S&&!Sl(S,x)&&n(),S=x,C=requestAnimationFrame(b)}return n(),()=>{var x;l.forEach(v=>{i&&v.removeEventListener("scroll",n),a&&v.removeEventListener("resize",n)}),f==null||f(),(x=p)==null||x.disconnect(),p=null,u&&cancelAnimationFrame(C)}}var Xa=O.useLayoutEffect,F1=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],gi=function(){};function N1(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function k1(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=[].concat(r);if(t&&e)for(var s in t)t.hasOwnProperty(s)&&t[s]&&a.push("".concat(N1(e,s)));return a.filter(function(o){return o}).map(function(o){return String(o).trim()}).join(" ")}var hi=function(t){return z1(t)?t.filter(Boolean):Mt(t)==="object"&&t!==null?[t]:[]},xl=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=tt(t,F1);return V({},n)},ye=function(t,n,r){var i=t.cx,a=t.getStyles,s=t.getClassNames,o=t.className;return{css:a(n,t),className:i(r??{},s(n,t),o)}};function A1(e,t,n){if(n){var r=n(e,t);if(typeof r=="string")return r}return e}function vi(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function L1(e){return vi(e)?window.innerHeight:e.clientHeight}function Il(e){return vi(e)?window.pageYOffset:e.scrollTop}function bi(e,t){if(vi(e)){window.scrollTo(0,t);return}e.scrollTop=t}function j1(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function B1(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function yi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:gi,i=Il(e),a=t-i,s=10,o=0;function u(){o+=s;var c=B1(o,i,a,n);bi(e,c),o<n?window.requestAnimationFrame(u):r(e)}u()}function _l(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?bi(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&bi(e,Math.max(t.offsetTop-i,0))}function R1(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Cl(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function q1(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var wl=!1,V1={get passive(){return wl=!0}},Si=typeof window<"u"?window:{};Si.addEventListener&&Si.removeEventListener&&(Si.addEventListener("p",gi,V1),Si.removeEventListener("p",gi,!1));var G1=wl;function U1(e){return e!=null}function z1(e){return Array.isArray(e)}function Kn(e,t,n){return e?t:n}function RO(e){return e}function qO(e){return e}var H1=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a=Object.entries(t).filter(function(s){var o=$e(s,1),u=o[0];return!r.includes(u)});return a.reduce(function(s,o){var u=$e(o,2),c=u[0],l=u[1];return s[c]=l,s},{})},W1=["children","innerProps"],Y1=["children","innerProps"];function Q1(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,a=e.shouldScroll,s=e.isFixedPosition,o=e.controlHeight,u=j1(n),c={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return c;var l=u.getBoundingClientRect(),f=l.height,g=n.getBoundingClientRect(),p=g.bottom,C=g.height,S=g.top,b=n.offsetParent.getBoundingClientRect(),x=b.top,v=s?window.innerHeight:L1(u),w=Il(u),T=parseInt(getComputedStyle(n).marginBottom,10),_=parseInt(getComputedStyle(n).marginTop,10),I=x-_,h=v-S,E=I+w,D=f-w-S,$=p-v+w+T,q=w+S-_,W=160;switch(i){case"auto":case"bottom":if(h>=C)return{placement:"bottom",maxHeight:t};if(D>=C&&!s)return a&&yi(u,$,W),{placement:"bottom",maxHeight:t};if(!s&&D>=r||s&&h>=r){a&&yi(u,$,W);var ne=s?h-T:D-T;return{placement:"bottom",maxHeight:ne}}if(i==="auto"||s){var ee=t,M=s?I:E;return M>=r&&(ee=Math.min(M-T-o,t)),{placement:"top",maxHeight:ee}}if(i==="bottom")return a&&bi(u,$),{placement:"bottom",maxHeight:t};break;case"top":if(I>=C)return{placement:"top",maxHeight:t};if(E>=C&&!s)return a&&yi(u,q,W),{placement:"top",maxHeight:t};if(!s&&E>=r||s&&I>=r){var L=t;return(!s&&E>=r||s&&I>=r)&&(L=s?I-_:E-_),a&&yi(u,q,W),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function K1(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var Ol=function(t){return t==="auto"?"bottom":t},J1=function(t,n){var r,i=t.placement,a=t.theme,s=a.borderRadius,o=a.spacing,u=a.colors;return V((r={label:"menu"},on(r,K1(i),"100%"),on(r,"position","absolute"),on(r,"width","100%"),on(r,"zIndex",1),r),n?{}:{backgroundColor:u.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:o.menuGutter,marginTop:o.menuGutter})},El=O.createContext(null),X1=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,a=t.menuPlacement,s=t.menuPosition,o=t.menuShouldScrollIntoView,u=t.theme,c=O.useContext(El)||{},l=c.setPortalPlacement,f=O.useRef(null),g=O.useState(i),p=$e(g,2),C=p[0],S=p[1],b=O.useState(null),x=$e(b,2),v=x[0],w=x[1],T=u.spacing.controlHeight;return Xa(function(){var _=f.current;if(_){var I=s==="fixed",h=o&&!I,E=Q1({maxHeight:i,menuEl:_,minHeight:r,placement:a,shouldScroll:h,isFixedPosition:I,controlHeight:T});S(E.maxHeight),w(E.placement),l==null||l(E.placement)}},[i,a,s,o,r,l,T]),n({ref:f,placerProps:V(V({},t),{},{placement:v||Ol(a),maxHeight:C})})},Z1=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return G("div",H({},ye(t,"menu",{menu:!0}),{ref:r},i),n)},ex=Z1,tx=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return V({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},nx=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,a=t.isMulti;return G("div",H({},ye(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:i},r),n)},Tl=function(t,n){var r=t.theme,i=r.spacing.baseUnit,a=r.colors;return V({textAlign:"center"},n?{}:{color:a.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},rx=Tl,ix=Tl,ax=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,a=tt(t,W1);return G("div",H({},ye(V(V({},a),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},sx=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,a=tt(t,Y1);return G("div",H({},ye(V(V({},a),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},ox=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},ux=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,a=t.innerProps,s=t.menuPlacement,o=t.menuPosition,u=O.useRef(null),c=O.useRef(null),l=O.useState(Ol(s)),f=$e(l,2),g=f[0],p=f[1],C=O.useMemo(function(){return{setPortalPlacement:p}},[]),S=O.useState(null),b=$e(S,2),x=b[0],v=b[1],w=O.useCallback(function(){if(i){var h=R1(i),E=o==="fixed"?0:window.pageYOffset,D=h[g]+E;(D!==(x==null?void 0:x.offset)||h.left!==(x==null?void 0:x.rect.left)||h.width!==(x==null?void 0:x.rect.width))&&v({offset:D,rect:h})}},[i,o,g,x==null?void 0:x.offset,x==null?void 0:x.rect.left,x==null?void 0:x.rect.width]);Xa(function(){w()},[w]);var T=O.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&u.current&&(c.current=M1(i,u.current,w,{elementResize:"ResizeObserver"in window}))},[i,w]);Xa(function(){T()},[T]);var _=O.useCallback(function(h){u.current=h,T()},[T]);if(!n&&o!=="fixed"||!x)return null;var I=G("div",H({ref:_},ye(V(V({},t),{},{offset:x.offset,position:o,rect:x.rect}),"menuPortal",{"menu-portal":!0}),a),r);return G(El.Provider,{value:C},n?Xd.createPortal(I,n):I)},cx=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},lx=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,a=t.isRtl;return G("div",H({},ye(t,"container",{"--is-disabled":i,"--is-rtl":a}),r),n)},dx=function(t,n){var r=t.theme.spacing,i=t.isMulti,a=t.hasValue,s=t.selectProps.controlShouldRenderValue;return V({alignItems:"center",display:i&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},fx=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,a=t.hasValue;return G("div",H({},ye(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":a}),r),n)},px=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},mx=function(t){var n=t.children,r=t.innerProps;return G("div",H({},ye(t,"indicatorsContainer",{indicators:!0}),r),n)},Dl,gx=["size"],hx=["innerProps","isRtl","size"],vx={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},$l=function(t){var n=t.size,r=tt(t,gx);return G("svg",H({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:vx},r))},Za=function(t){return G($l,H({size:20},t),G("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Pl=function(t){return G($l,H({size:20},t),G("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Ml=function(t,n){var r=t.isFocused,i=t.theme,a=i.spacing.baseUnit,s=i.colors;return V({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?s.neutral60:s.neutral20,padding:a*2,":hover":{color:r?s.neutral80:s.neutral40}})},bx=Ml,yx=function(t){var n=t.children,r=t.innerProps;return G("div",H({},ye(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||G(Pl,null))},Sx=Ml,xx=function(t){var n=t.children,r=t.innerProps;return G("div",H({},ye(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||G(Za,null))},Ix=function(t,n){var r=t.isDisabled,i=t.theme,a=i.spacing.baseUnit,s=i.colors;return V({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},_x=function(t){var n=t.innerProps;return G("span",H({},n,ye(t,"indicatorSeparator",{"indicator-separator":!0})))},Cx=f1(Dl||(Dl=v1([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),wx=function(t,n){var r=t.isFocused,i=t.size,a=t.theme,s=a.colors,o=a.spacing.baseUnit;return V({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?s.neutral60:s.neutral20,padding:o*2})},es=function(t){var n=t.delay,r=t.offset;return G("span",{css:Wa({animation:"".concat(Cx," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Ox=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,a=i===void 0?4:i,s=tt(t,hx);return G("div",H({},ye(V(V({},s),{},{innerProps:n,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),G(es,{delay:0,offset:r}),G(es,{delay:160,offset:!0}),G(es,{delay:320,offset:!r}))},Ex=function(t,n){var r=t.isDisabled,i=t.isFocused,a=t.theme,s=a.colors,o=a.borderRadius,u=a.spacing;return V({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:u.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:i?s.primary:s.neutral20,borderRadius:o,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:i?s.primary:s.neutral30}})},Tx=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,a=t.innerRef,s=t.innerProps,o=t.menuIsOpen;return G("div",H({ref:a},ye(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":o}),s,{"aria-disabled":r||void 0}),n)},Dx=Tx,$x=["data"],Px=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Mx=function(t){var n=t.children,r=t.cx,i=t.getStyles,a=t.getClassNames,s=t.Heading,o=t.headingProps,u=t.innerProps,c=t.label,l=t.theme,f=t.selectProps;return G("div",H({},ye(t,"group",{group:!0}),u),G(s,H({},o,{selectProps:f,theme:l,getStyles:i,getClassNames:a,cx:r}),c),G("div",null,n))},Fx=function(t,n){var r=t.theme,i=r.colors,a=r.spacing;return V({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Nx=function(t){var n=xl(t);n.data;var r=tt(n,$x);return G("div",H({},ye(t,"groupHeading",{"group-heading":!0}),r))},kx=Mx,Ax=["innerRef","isDisabled","isHidden","inputClassName"],Lx=function(t,n){var r=t.isDisabled,i=t.value,a=t.theme,s=a.spacing,o=a.colors;return V(V({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},jx),n?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:o.neutral80})},Fl={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},jx={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":V({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Fl)},Bx=function(t){return V({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Fl)},Rx=function(t){var n=t.cx,r=t.value,i=xl(t),a=i.innerRef,s=i.isDisabled,o=i.isHidden,u=i.inputClassName,c=tt(i,Ax);return G("div",H({},ye(t,"input",{"input-container":!0}),{"data-value":r||""}),G("input",H({className:n({input:!0},u),ref:a,style:Bx(o),disabled:s},c)))},qx=Rx,Vx=function(t,n){var r=t.theme,i=r.spacing,a=r.borderRadius,s=r.colors;return V({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:i.baseUnit/2})},Gx=function(t,n){var r=t.theme,i=r.borderRadius,a=r.colors,s=t.cropWithEllipsis;return V({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Ux=function(t,n){var r=t.theme,i=r.spacing,a=r.borderRadius,s=r.colors,o=t.isFocused;return V({alignItems:"center",display:"flex"},n?{}:{borderRadius:a/2,backgroundColor:o?s.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Nl=function(t){var n=t.children,r=t.innerProps;return G("div",r,n)},zx=Nl,Hx=Nl;function Wx(e){var t=e.children,n=e.innerProps;return G("div",H({role:"button"},n),t||G(Za,{size:14}))}var Yx=function(t){var n=t.children,r=t.components,i=t.data,a=t.innerProps,s=t.isDisabled,o=t.removeProps,u=t.selectProps,c=r.Container,l=r.Label,f=r.Remove;return G(c,{data:i,innerProps:V(V({},ye(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:u},G(l,{data:i,innerProps:V({},ye(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:u},n),G(f,{data:i,innerProps:V(V({},ye(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},o),selectProps:u}))},Qx=Yx,Kx=function(t,n){var r=t.isDisabled,i=t.isFocused,a=t.isSelected,s=t.theme,o=s.spacing,u=s.colors;return V({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:a?u.primary:i?u.primary25:"transparent",color:r?u.neutral20:a?u.neutral0:"inherit",padding:"".concat(o.baseUnit*2,"px ").concat(o.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?u.primary:u.primary50}})},Jx=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,a=t.isSelected,s=t.innerRef,o=t.innerProps;return G("div",H({},ye(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":a}),{ref:s,"aria-disabled":r},o),n)},Xx=Jx,Zx=function(t,n){var r=t.theme,i=r.spacing,a=r.colors;return V({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:a.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},eI=function(t){var n=t.children,r=t.innerProps;return G("div",H({},ye(t,"placeholder",{placeholder:!0}),r),n)},tI=eI,nI=function(t,n){var r=t.isDisabled,i=t.theme,a=i.spacing,s=i.colors;return V({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},rI=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return G("div",H({},ye(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},iI=rI,aI={ClearIndicator:xx,Control:Dx,DropdownIndicator:yx,DownChevron:Pl,CrossIcon:Za,Group:kx,GroupHeading:Nx,IndicatorsContainer:mx,IndicatorSeparator:_x,Input:qx,LoadingIndicator:Ox,Menu:ex,MenuList:nx,MenuPortal:ux,LoadingMessage:sx,NoOptionsMessage:ax,MultiValue:Qx,MultiValueContainer:zx,MultiValueLabel:Hx,MultiValueRemove:Wx,Option:Xx,Placeholder:tI,SelectContainer:lx,SingleValue:iI,ValueContainer:fx},sI=function(t){return V(V({},aI),t.components)},kl=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function oI(e,t){return!!(e===t||kl(e)&&kl(t))}function uI(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!oI(e[n],t[n]))return!1;return!0}function cI(e,t){t===void 0&&(t=uI);var n=null;function r(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var s=e.apply(this,i);return n={lastResult:s,lastArgs:i,lastThis:this},s}return r.clear=function(){n=null},r}for(var lI={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},dI=function(t){return G("span",H({css:lI},t))},Al=dI,fI={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,a=t.context,s=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,a=t.labels,s=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,a=t.label,s=a===void 0?"":a,o=t.selectValue,u=t.isDisabled,c=t.isSelected,l=t.isAppleDevice,f=function(S,b){return S&&S.length?"".concat(S.indexOf(b)+1," of ").concat(S.length):""};if(n==="value"&&o)return"value ".concat(s," focused, ").concat(f(o,r),".");if(n==="menu"&&l){var g=u?" disabled":"",p="".concat(c?" selected":"").concat(g);return"".concat(s).concat(p,", ").concat(f(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},pI=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,a=t.focusableOptions,s=t.isFocused,o=t.selectValue,u=t.selectProps,c=t.id,l=t.isAppleDevice,f=u.ariaLiveMessages,g=u.getOptionLabel,p=u.inputValue,C=u.isMulti,S=u.isOptionDisabled,b=u.isSearchable,x=u.menuIsOpen,v=u.options,w=u.screenReaderStatus,T=u.tabSelectsValue,_=u.isLoading,I=u["aria-label"],h=u["aria-live"],E=O.useMemo(function(){return V(V({},fI),f||{})},[f]),D=O.useMemo(function(){var M="";if(n&&E.onChange){var L=n.option,k=n.options,U=n.removedValue,te=n.removedValues,ue=n.value,F=function(ae){return Array.isArray(ae)?null:ae},B=U||L||F(ue),Y=B?g(B):"",P=k||te||void 0,j=P?P.map(g):[],R=V({isDisabled:B&&S(B,o),label:Y,labels:j},n);M=E.onChange(R)}return M},[n,E,S,o,g]),$=O.useMemo(function(){var M="",L=r||i,k=!!(r&&o&&o.includes(r));if(L&&E.onFocus){var U={focused:L,label:g(L),isDisabled:S(L,o),isSelected:k,options:a,context:L===r?"menu":"value",selectValue:o,isAppleDevice:l};M=E.onFocus(U)}return M},[r,i,g,S,E,a,o,l]),q=O.useMemo(function(){var M="";if(x&&v.length&&!_&&E.onFilter){var L=w({count:a.length});M=E.onFilter({inputValue:p,resultsMessage:L})}return M},[a,p,x,E,v,w,_]),W=(n==null?void 0:n.action)==="initial-input-focus",ne=O.useMemo(function(){var M="";if(E.guidance){var L=i?"value":x?"menu":"input";M=E.guidance({"aria-label":I,context:L,isDisabled:r&&S(r,o),isMulti:C,isSearchable:b,tabSelectsValue:T,isInitialFocus:W})}return M},[I,r,i,C,S,b,x,E,o,T,W]),ee=G(O.Fragment,null,G("span",{id:"aria-selection"},D),G("span",{id:"aria-focused"},$),G("span",{id:"aria-results"},q),G("span",{id:"aria-guidance"},ne));return G(O.Fragment,null,G(Al,{id:c},W&&ee),G(Al,{"aria-live":h,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!W&&ee))},mI=pI,ts=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],gI=new RegExp("["+ts.map(function(e){return e.letters}).join("")+"]","g"),Ll={},ns=0;ns<ts.length;ns++)for(var rs=ts[ns],is=0;is<rs.letters.length;is++)Ll[rs.letters[is]]=rs.base;var jl=function(t){return t.replace(gI,function(n){return Ll[n]})},hI=cI(jl),Bl=function(t){return t.replace(/^\s+|\s+$/g,"")},vI=function(t){return"".concat(t.label," ").concat(t.value)},bI=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=V({ignoreCase:!0,ignoreAccents:!0,stringify:vI,trim:!0,matchFrom:"any"},t),a=i.ignoreCase,s=i.ignoreAccents,o=i.stringify,u=i.trim,c=i.matchFrom,l=u?Bl(r):r,f=u?Bl(o(n)):o(n);return a&&(l=l.toLowerCase(),f=f.toLowerCase()),s&&(l=hI(l),f=jl(f)),c==="start"?f.substr(0,l.length)===l:f.indexOf(l)>-1}},yI=["innerRef"];function SI(e){var t=e.innerRef,n=tt(e,yI),r=H1(n,"onExited","in","enter","exit","appear");return G("input",H({ref:t},r,{css:Wa({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var xI=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function II(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,a=e.onTopLeave,s=O.useRef(!1),o=O.useRef(!1),u=O.useRef(0),c=O.useRef(null),l=O.useCallback(function(b,x){if(c.current!==null){var v=c.current,w=v.scrollTop,T=v.scrollHeight,_=v.clientHeight,I=c.current,h=x>0,E=T-_-w,D=!1;E>x&&s.current&&(r&&r(b),s.current=!1),h&&o.current&&(a&&a(b),o.current=!1),h&&x>E?(n&&!s.current&&n(b),I.scrollTop=T,D=!0,s.current=!0):!h&&-x>w&&(i&&!o.current&&i(b),I.scrollTop=0,D=!0,o.current=!0),D&&xI(b)}},[n,r,i,a]),f=O.useCallback(function(b){l(b,b.deltaY)},[l]),g=O.useCallback(function(b){u.current=b.changedTouches[0].clientY},[]),p=O.useCallback(function(b){var x=u.current-b.changedTouches[0].clientY;l(b,x)},[l]),C=O.useCallback(function(b){if(b){var x=G1?{passive:!1}:!1;b.addEventListener("wheel",f,x),b.addEventListener("touchstart",g,x),b.addEventListener("touchmove",p,x)}},[p,g,f]),S=O.useCallback(function(b){b&&(b.removeEventListener("wheel",f,!1),b.removeEventListener("touchstart",g,!1),b.removeEventListener("touchmove",p,!1))},[p,g,f]);return O.useEffect(function(){if(t){var b=c.current;return C(b),function(){S(b)}}},[t,C,S]),function(b){c.current=b}}var Rl=["boxSizing","height","overflow","paddingRight","position"],ql={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Vl(e){e.cancelable&&e.preventDefault()}function Gl(e){e.stopPropagation()}function Ul(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function zl(){return"ontouchstart"in window||navigator.maxTouchPoints}var Hl=!!(typeof window<"u"&&window.document&&window.document.createElement),Jn=0,fn={capture:!1,passive:!1};function _I(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=O.useRef({}),a=O.useRef(null),s=O.useCallback(function(u){if(Hl){var c=document.body,l=c&&c.style;if(r&&Rl.forEach(function(C){var S=l&&l[C];i.current[C]=S}),r&&Jn<1){var f=parseInt(i.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,p=window.innerWidth-g+f||0;Object.keys(ql).forEach(function(C){var S=ql[C];l&&(l[C]=S)}),l&&(l.paddingRight="".concat(p,"px"))}c&&zl()&&(c.addEventListener("touchmove",Vl,fn),u&&(u.addEventListener("touchstart",Ul,fn),u.addEventListener("touchmove",Gl,fn))),Jn+=1}},[r]),o=O.useCallback(function(u){if(Hl){var c=document.body,l=c&&c.style;Jn=Math.max(Jn-1,0),r&&Jn<1&&Rl.forEach(function(f){var g=i.current[f];l&&(l[f]=g)}),c&&zl()&&(c.removeEventListener("touchmove",Vl,fn),u&&(u.removeEventListener("touchstart",Ul,fn),u.removeEventListener("touchmove",Gl,fn)))}},[r]);return O.useEffect(function(){if(t){var u=a.current;return s(u),function(){o(u)}}},[t,s,o]),function(u){a.current=u}}var CI=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},wI={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function OI(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,a=e.onBottomArrive,s=e.onBottomLeave,o=e.onTopArrive,u=e.onTopLeave,c=II({isEnabled:i,onBottomArrive:a,onBottomLeave:s,onTopArrive:o,onTopLeave:u}),l=_I({isEnabled:n}),f=function(p){c(p),l(p)};return G(O.Fragment,null,n&&G("div",{onClick:CI,css:wI}),t(f))}var EI={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},TI=function(t){var n=t.name,r=t.onFocus;return G("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:EI,value:"",onChange:function(){}})},DI=TI;function as(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function $I(){return as(/^iPhone/i)}function Wl(){return as(/^Mac/i)}function PI(){return as(/^iPad/i)||Wl()&&navigator.maxTouchPoints>1}function MI(){return $I()||PI()}function FI(){return Wl()||MI()}var NI=function(t){return t.label},Yl=function(t){return t.label},Ql=function(t){return t.value},kI=function(t){return!!t.isDisabled},AI={clearIndicator:Sx,container:cx,control:Ex,dropdownIndicator:bx,group:Px,groupHeading:Fx,indicatorsContainer:px,indicatorSeparator:Ix,input:Lx,loadingIndicator:wx,loadingMessage:ix,menu:J1,menuList:tx,menuPortal:ox,multiValue:Vx,multiValueLabel:Gx,multiValueRemove:Ux,noOptionsMessage:rx,option:Kx,placeholder:Zx,singleValue:nI,valueContainer:dx},LI={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},jI=4,Kl=4,BI=38,RI=Kl*2,qI={baseUnit:Kl,controlHeight:BI,menuGutter:RI},ss={borderRadius:jI,colors:LI,spacing:qI},VI={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Cl(),captureMenuScroll:!Cl(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:bI(),formatGroupLabel:NI,getOptionLabel:Yl,getOptionValue:Ql,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:kI,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!q1(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Jl(e,t,n,r){var i=nd(e,t,n),a=rd(e,t,n),s=td(e,t),o=Ii(e,t);return{type:"option",data:t,isDisabled:i,isSelected:a,label:s,value:o,index:r}}function xi(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(s,o){return Jl(e,s,t,o)}).filter(function(s){return ed(e,s)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var a=Jl(e,n,t,r);return ed(e,a)?a:void 0}).filter(U1)}function Xl(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,un(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function Zl(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,un(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function GI(e,t){return Xl(xi(e,t))}function ed(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,a=t.isSelected,s=t.label,o=t.value;return(!ad(e)||!a)&&id(e,{label:s,value:o,data:i},r)}function UI(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var a=t.indexOf(n);if(a>-1)return n;if(i<t.length)return t[i]}return null}function zI(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var os=function(t,n){var r,i=(r=t.find(function(a){return a.data===n}))===null||r===void 0?void 0:r.id;return i||null},td=function(t,n){return t.getOptionLabel(n)},Ii=function(t,n){return t.getOptionValue(n)};function nd(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function rd(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=Ii(e,t);return n.some(function(i){return Ii(e,i)===r})}function id(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var ad=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},HI=1,us=function(e){iS(n,e);var t=oS(n);function n(r){var i;if(nS(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(u){i.controlRef=u},i.focusedOptionRef=null,i.getFocusedOptionRef=function(u){i.focusedOptionRef=u},i.menuListRef=null,i.getMenuListRef=function(u){i.menuListRef=u},i.inputRef=null,i.getInputRef=function(u){i.inputRef=u},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(u,c){var l=i.props,f=l.onChange,g=l.name;c.name=g,i.ariaOnChange(u,c),f(u,c)},i.setValue=function(u,c,l){var f=i.props,g=f.closeMenuOnSelect,p=f.isMulti,C=f.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:C}),g&&(i.setState({inputIsHiddenAfterUpdate:!p}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(u,{action:c,option:l})},i.selectOption=function(u){var c=i.props,l=c.blurInputOnSelect,f=c.isMulti,g=c.name,p=i.state.selectValue,C=f&&i.isOptionSelected(u,p),S=i.isOptionDisabled(u,p);if(C){var b=i.getOptionValue(u);i.setValue(p.filter(function(x){return i.getOptionValue(x)!==b}),"deselect-option",u)}else if(!S)f?i.setValue([].concat(un(p),[u]),"select-option",u):i.setValue(u,"select-option");else{i.ariaOnChange(u,{action:"select-option",option:u,name:g});return}l&&i.blurInput()},i.removeValue=function(u){var c=i.props.isMulti,l=i.state.selectValue,f=i.getOptionValue(u),g=l.filter(function(C){return i.getOptionValue(C)!==f}),p=Kn(c,g,g[0]||null);i.onChange(p,{action:"remove-value",removedValue:u}),i.focusInput()},i.clearValue=function(){var u=i.state.selectValue;i.onChange(Kn(i.props.isMulti,[],null),{action:"clear",removedValues:u})},i.popValue=function(){var u=i.props.isMulti,c=i.state.selectValue,l=c[c.length-1],f=c.slice(0,c.length-1),g=Kn(u,f,f[0]||null);l&&i.onChange(g,{action:"pop-value",removedValue:l})},i.getFocusedOptionId=function(u){return os(i.state.focusableOptionsWithIds,u)},i.getFocusableOptionsWithIds=function(){return Zl(xi(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var u=arguments.length,c=new Array(u),l=0;l<u;l++)c[l]=arguments[l];return k1.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(u){return td(i.props,u)},i.getOptionValue=function(u){return Ii(i.props,u)},i.getStyles=function(u,c){var l=i.props.unstyled,f=AI[u](c,l);f.boxSizing="border-box";var g=i.props.styles[u];return g?g(f,c):f},i.getClassNames=function(u,c){var l,f;return(l=(f=i.props.classNames)[u])===null||l===void 0?void 0:l.call(f,c)},i.getElementId=function(u){return"".concat(i.state.instancePrefix,"-").concat(u)},i.getComponents=function(){return sI(i.props)},i.buildCategorizedOptions=function(){return xi(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return Xl(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(u,c){i.setState({ariaSelection:V({value:u},c)})},i.onMenuMouseDown=function(u){u.button===0&&(u.stopPropagation(),u.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(u){i.blockOptionHover=!1},i.onControlMouseDown=function(u){if(!u.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?u.target.tagName!=="INPUT"&&u.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),u.target.tagName!=="INPUT"&&u.target.tagName!=="TEXTAREA"&&u.preventDefault()}},i.onDropdownIndicatorMouseDown=function(u){if(!(u&&u.type==="mousedown"&&u.button!==0)&&!i.props.isDisabled){var c=i.props,l=c.isMulti,f=c.menuIsOpen;i.focusInput(),f?(i.setState({inputIsHiddenAfterUpdate:!l}),i.onMenuClose()):i.openMenu("first"),u.preventDefault()}},i.onClearIndicatorMouseDown=function(u){u&&u.type==="mousedown"&&u.button!==0||(i.clearValue(),u.preventDefault(),i.openAfterFocus=!1,u.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(u){typeof i.props.closeMenuOnScroll=="boolean"?u.target instanceof HTMLElement&&vi(u.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(u)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(u){var c=u.touches,l=c&&c.item(0);l&&(i.initialTouchX=l.clientX,i.initialTouchY=l.clientY,i.userIsDragging=!1)},i.onTouchMove=function(u){var c=u.touches,l=c&&c.item(0);if(l){var f=Math.abs(l.clientX-i.initialTouchX),g=Math.abs(l.clientY-i.initialTouchY),p=5;i.userIsDragging=f>p||g>p}},i.onTouchEnd=function(u){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(u.target)&&i.menuListRef&&!i.menuListRef.contains(u.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(u){i.userIsDragging||i.onControlMouseDown(u)},i.onClearIndicatorTouchEnd=function(u){i.userIsDragging||i.onClearIndicatorMouseDown(u)},i.onDropdownIndicatorTouchEnd=function(u){i.userIsDragging||i.onDropdownIndicatorMouseDown(u)},i.handleInputChange=function(u){var c=i.props.inputValue,l=u.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(l,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(u){i.props.onFocus&&i.props.onFocus(u),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(u){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(u),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(u){if(!(i.blockOptionHover||i.state.focusedOption===u)){var c=i.getFocusableOptions(),l=c.indexOf(u);i.setState({focusedOption:u,focusedOptionId:l>-1?i.getFocusedOptionId(u):null})}},i.shouldHideSelectedOptions=function(){return ad(i.props)},i.onValueInputFocus=function(u){u.preventDefault(),u.stopPropagation(),i.focus()},i.onKeyDown=function(u){var c=i.props,l=c.isMulti,f=c.backspaceRemovesValue,g=c.escapeClearsValue,p=c.inputValue,C=c.isClearable,S=c.isDisabled,b=c.menuIsOpen,x=c.onKeyDown,v=c.tabSelectsValue,w=c.openMenuOnFocus,T=i.state,_=T.focusedOption,I=T.focusedValue,h=T.selectValue;if(!S&&!(typeof x=="function"&&(x(u),u.defaultPrevented))){switch(i.blockOptionHover=!0,u.key){case"ArrowLeft":if(!l||p)return;i.focusValue("previous");break;case"ArrowRight":if(!l||p)return;i.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(I)i.removeValue(I);else{if(!f)return;l?i.popValue():C&&i.clearValue()}break;case"Tab":if(i.isComposing||u.shiftKey||!b||!v||!_||w&&i.isOptionSelected(_,h))return;i.selectOption(_);break;case"Enter":if(u.keyCode===229)break;if(b){if(!_||i.isComposing)return;i.selectOption(_);break}return;case"Escape":b?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:p}),i.onMenuClose()):C&&g&&i.clearValue();break;case" ":if(p)return;if(!b){i.openMenu("first");break}if(!_)return;i.selectOption(_);break;case"ArrowUp":b?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":b?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!b)return;i.focusOption("pageup");break;case"PageDown":if(!b)return;i.focusOption("pagedown");break;case"Home":if(!b)return;i.focusOption("first");break;case"End":if(!b)return;i.focusOption("last");break;default:return}u.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++HI),i.state.selectValue=hi(r.value),r.menuIsOpen&&i.state.selectValue.length){var a=i.getFocusableOptionsWithIds(),s=i.buildFocusableOptions(),o=s.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=a,i.state.focusedOption=s[o],i.state.focusedOptionId=os(a,s[o])}return i}return rS(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&_l(this.menuListRef,this.focusedOptionRef),FI()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var a=this.props,s=a.isDisabled,o=a.menuIsOpen,u=this.state.isFocused;(u&&!s&&i.isDisabled||u&&o&&!i.menuIsOpen)&&this.focusInput(),u&&s&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!u&&!s&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(_l(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,a){this.props.onInputChange(i,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var a=this,s=this.state,o=s.selectValue,u=s.isFocused,c=this.buildFocusableOptions(),l=i==="first"?0:c.length-1;if(!this.props.isMulti){var f=c.indexOf(o[0]);f>-1&&(l=f)}this.scrollToFocusedOptionOnUpdate=!(u&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[l],focusedOptionId:this.getFocusedOptionId(c[l])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(i){var a=this.state,s=a.selectValue,o=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var u=s.indexOf(o);o||(u=-1);var c=s.length-1,l=-1;if(s.length){switch(i){case"previous":u===0?l=0:u===-1?l=c:l=u-1;break;case"next":u>-1&&u<c&&(l=u+1);break}this.setState({inputIsHidden:l!==-1,focusedValue:s[l]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,o=this.getFocusableOptions();if(o.length){var u=0,c=o.indexOf(s);s||(c=-1),i==="up"?u=c>0?c-1:o.length-1:i==="down"?u=(c+1)%o.length:i==="pageup"?(u=c-a,u<0&&(u=0)):i==="pagedown"?(u=c+a,u>o.length-1&&(u=o.length-1)):i==="last"&&(u=o.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:o[u],focusedValue:null,focusedOptionId:this.getFocusedOptionId(o[u])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(ss):V(V({},ss),this.props.theme):ss}},{key:"getCommonProps",value:function(){var i=this.clearValue,a=this.cx,s=this.getStyles,o=this.getClassNames,u=this.getValue,c=this.selectOption,l=this.setValue,f=this.props,g=f.isMulti,p=f.isRtl,C=f.options,S=this.hasValue();return{clearValue:i,cx:a,getStyles:s,getClassNames:o,getValue:u,hasValue:S,isMulti:g,isRtl:p,options:C,selectOption:c,selectProps:f,setValue:l,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,a=i.isClearable,s=i.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(i,a){return nd(this.props,i,a)}},{key:"isOptionSelected",value:function(i,a){return rd(this.props,i,a)}},{key:"filterOption",value:function(i,a){return id(this.props,i,a)}},{key:"formatOptionLabel",value:function(i,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,o=this.state.selectValue;return this.props.formatOptionLabel(i,{context:a,inputValue:s,selectValue:o})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,a=i.isDisabled,s=i.isSearchable,o=i.inputId,u=i.inputValue,c=i.tabIndex,l=i.form,f=i.menuIsOpen,g=i.required,p=this.getComponents(),C=p.Input,S=this.state,b=S.inputIsHidden,x=S.ariaSelection,v=this.commonProps,w=o||this.getElementId("input"),T=V(V(V({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},f&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(x==null?void 0:x.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?K.createElement(C,H({},v,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:w,innerRef:this.getInputRef,isDisabled:a,isHidden:b,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:l,type:"text",value:u},T)):K.createElement(SI,H({id:w,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:gi,onFocus:this.onInputFocus,disabled:a,tabIndex:c,inputMode:"none",form:l,value:""},T))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,a=this.getComponents(),s=a.MultiValue,o=a.MultiValueContainer,u=a.MultiValueLabel,c=a.MultiValueRemove,l=a.SingleValue,f=a.Placeholder,g=this.commonProps,p=this.props,C=p.controlShouldRenderValue,S=p.isDisabled,b=p.isMulti,x=p.inputValue,v=p.placeholder,w=this.state,T=w.selectValue,_=w.focusedValue,I=w.isFocused;if(!this.hasValue()||!C)return x?null:K.createElement(f,H({},g,{key:"placeholder",isDisabled:S,isFocused:I,innerProps:{id:this.getElementId("placeholder")}}),v);if(b)return T.map(function(E,D){var $=E===_,q="".concat(i.getOptionLabel(E),"-").concat(i.getOptionValue(E));return K.createElement(s,H({},g,{components:{Container:o,Label:u,Remove:c},isFocused:$,isDisabled:S,key:q,index:D,removeProps:{onClick:function(){return i.removeValue(E)},onTouchEnd:function(){return i.removeValue(E)},onMouseDown:function(ne){ne.preventDefault()}},data:E}),i.formatOptionLabel(E,"value"))});if(x)return null;var h=T[0];return K.createElement(l,H({},g,{data:h,isDisabled:S}),this.formatOptionLabel(h,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),a=i.ClearIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,c=o.isLoading,l=this.state.isFocused;if(!this.isClearable()||!a||u||!this.hasValue()||c)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return K.createElement(a,H({},s,{innerProps:f,isFocused:l}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),a=i.LoadingIndicator,s=this.commonProps,o=this.props,u=o.isDisabled,c=o.isLoading,l=this.state.isFocused;if(!a||!c)return null;var f={"aria-hidden":"true"};return K.createElement(a,H({},s,{innerProps:f,isDisabled:u,isFocused:l}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),a=i.DropdownIndicator,s=i.IndicatorSeparator;if(!a||!s)return null;var o=this.commonProps,u=this.props.isDisabled,c=this.state.isFocused;return K.createElement(s,H({},o,{isDisabled:u,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),a=i.DropdownIndicator;if(!a)return null;var s=this.commonProps,o=this.props.isDisabled,u=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return K.createElement(a,H({},s,{innerProps:c,isDisabled:o,isFocused:u}))}},{key:"renderMenu",value:function(){var i=this,a=this.getComponents(),s=a.Group,o=a.GroupHeading,u=a.Menu,c=a.MenuList,l=a.MenuPortal,f=a.LoadingMessage,g=a.NoOptionsMessage,p=a.Option,C=this.commonProps,S=this.state.focusedOption,b=this.props,x=b.captureMenuScroll,v=b.inputValue,w=b.isLoading,T=b.loadingMessage,_=b.minMenuHeight,I=b.maxMenuHeight,h=b.menuIsOpen,E=b.menuPlacement,D=b.menuPosition,$=b.menuPortalTarget,q=b.menuShouldBlockScroll,W=b.menuShouldScrollIntoView,ne=b.noOptionsMessage,ee=b.onMenuScrollToTop,M=b.onMenuScrollToBottom;if(!h)return null;var L=function(Y,P){var j=Y.type,R=Y.data,A=Y.isDisabled,ae=Y.isSelected,Pe=Y.label,Be=Y.value,hn=S===R,Bt=A?void 0:function(){return i.onOptionHover(R)},Ts=A?void 0:function(){return i.selectOption(R)},Mi="".concat(i.getElementId("option"),"-").concat(P),or={id:Mi,onClick:Ts,onMouseMove:Bt,onMouseOver:Bt,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:ae};return K.createElement(p,H({},C,{innerProps:or,data:R,isDisabled:A,isSelected:ae,key:Mi,label:Pe,type:j,value:Be,isFocused:hn,innerRef:hn?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(Y.data,"menu"))},k;if(this.hasOptions())k=this.getCategorizedOptions().map(function(B){if(B.type==="group"){var Y=B.data,P=B.options,j=B.index,R="".concat(i.getElementId("group"),"-").concat(j),A="".concat(R,"-heading");return K.createElement(s,H({},C,{key:R,data:Y,options:P,Heading:o,headingProps:{id:A,data:B.data},label:i.formatGroupLabel(B.data)}),B.options.map(function(ae){return L(ae,"".concat(j,"-").concat(ae.index))}))}else if(B.type==="option")return L(B,"".concat(B.index))});else if(w){var U=T({inputValue:v});if(U===null)return null;k=K.createElement(f,C,U)}else{var te=ne({inputValue:v});if(te===null)return null;k=K.createElement(g,C,te)}var ue={minMenuHeight:_,maxMenuHeight:I,menuPlacement:E,menuPosition:D,menuShouldScrollIntoView:W},F=K.createElement(X1,H({},C,ue),function(B){var Y=B.ref,P=B.placerProps,j=P.placement,R=P.maxHeight;return K.createElement(u,H({},C,ue,{innerRef:Y,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:w,placement:j}),K.createElement(OI,{captureEnabled:x,onTopArrive:ee,onBottomArrive:M,lockEnabled:q},function(A){return K.createElement(c,H({},C,{innerRef:function(Pe){i.getMenuListRef(Pe),A(Pe)},innerProps:{role:"listbox","aria-multiselectable":C.isMulti,id:i.getElementId("listbox")},isLoading:w,maxHeight:R,focusedOption:S}),k)}))});return $||D==="fixed"?K.createElement(l,H({},C,{appendTo:$,controlElement:this.controlRef,menuPlacement:E,menuPosition:D}),F):F}},{key:"renderFormField",value:function(){var i=this,a=this.props,s=a.delimiter,o=a.isDisabled,u=a.isMulti,c=a.name,l=a.required,f=this.state.selectValue;if(l&&!this.hasValue()&&!o)return K.createElement(DI,{name:c,onFocus:this.onValueInputFocus});if(!(!c||o))if(u)if(s){var g=f.map(function(S){return i.getOptionValue(S)}).join(s);return K.createElement("input",{name:c,type:"hidden",value:g})}else{var p=f.length>0?f.map(function(S,b){return K.createElement("input",{key:"i-".concat(b),name:c,type:"hidden",value:i.getOptionValue(S)})}):K.createElement("input",{name:c,type:"hidden",value:""});return K.createElement("div",null,p)}else{var C=f[0]?this.getOptionValue(f[0]):"";return K.createElement("input",{name:c,type:"hidden",value:C})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,a=this.state,s=a.ariaSelection,o=a.focusedOption,u=a.focusedValue,c=a.isFocused,l=a.selectValue,f=this.getFocusableOptions();return K.createElement(mI,H({},i,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:o,focusedValue:u,isFocused:c,selectValue:l,focusableOptions:f,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),a=i.Control,s=i.IndicatorsContainer,o=i.SelectContainer,u=i.ValueContainer,c=this.props,l=c.className,f=c.id,g=c.isDisabled,p=c.menuIsOpen,C=this.state.isFocused,S=this.commonProps=this.getCommonProps();return K.createElement(o,H({},S,{className:l,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:C}),this.renderLiveRegion(),K.createElement(a,H({},S,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:C,menuIsOpen:p}),K.createElement(u,H({},S,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),K.createElement(s,H({},S,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,a){var s=a.prevProps,o=a.clearFocusValueOnUpdate,u=a.inputIsHiddenAfterUpdate,c=a.ariaSelection,l=a.isFocused,f=a.prevWasFocused,g=a.instancePrefix,p=i.options,C=i.value,S=i.menuIsOpen,b=i.inputValue,x=i.isMulti,v=hi(C),w={};if(s&&(C!==s.value||p!==s.options||S!==s.menuIsOpen||b!==s.inputValue)){var T=S?GI(i,v):[],_=S?Zl(xi(i,v),"".concat(g,"-option")):[],I=o?UI(a,v):null,h=zI(a,T),E=os(_,h);w={selectValue:v,focusedOption:h,focusedOptionId:E,focusableOptionsWithIds:_,focusedValue:I,clearFocusValueOnUpdate:!1}}var D=u!=null&&i!==s?{inputIsHidden:u,inputIsHiddenAfterUpdate:void 0}:{},$=c,q=l&&f;return l&&!q&&($={value:Kn(x,v,v[0]||null),options:v,action:"initial-input-focus"},q=!f),(c==null?void 0:c.action)==="initial-input-focus"&&($=null),V(V(V({},w),D),{},{prevProps:i,ariaSelection:$,prevWasFocused:q})}}]),n}(O.Component);us.defaultProps=VI;var WI=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function sd(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,a=e.defaultValue,s=a===void 0?null:a,o=e.inputValue,u=e.menuIsOpen,c=e.onChange,l=e.onInputChange,f=e.onMenuClose,g=e.onMenuOpen,p=e.value,C=tt(e,WI),S=O.useState(o!==void 0?o:n),b=$e(S,2),x=b[0],v=b[1],w=O.useState(u!==void 0?u:i),T=$e(w,2),_=T[0],I=T[1],h=O.useState(p!==void 0?p:s),E=$e(h,2),D=E[0],$=E[1],q=O.useCallback(function(U,te){typeof c=="function"&&c(U,te),$(U)},[c]),W=O.useCallback(function(U,te){var ue;typeof l=="function"&&(ue=l(U,te)),v(ue!==void 0?ue:U)},[l]),ne=O.useCallback(function(){typeof g=="function"&&g(),I(!0)},[g]),ee=O.useCallback(function(){typeof f=="function"&&f(),I(!1)},[f]),M=o!==void 0?o:x,L=u!==void 0?u:_,k=p!==void 0?p:D;return V(V({},C),{},{inputValue:M,menuIsOpen:L,onChange:q,onInputChange:W,onMenuClose:ee,onMenuOpen:ne,value:k})}var YI=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function od(e){var t=e.defaultOptions,n=t===void 0?!1:t,r=e.cacheOptions,i=r===void 0?!1:r,a=e.loadOptions;e.options;var s=e.isLoading,o=s===void 0?!1:s,u=e.onInputChange,c=e.filterOption,l=c===void 0?null:c,f=tt(e,YI),g=f.inputValue,p=O.useRef(void 0),C=O.useRef(!1),S=O.useState(Array.isArray(n)?n:void 0),b=$e(S,2),x=b[0],v=b[1],w=O.useState(typeof g<"u"?g:""),T=$e(w,2),_=T[0],I=T[1],h=O.useState(n===!0),E=$e(h,2),D=E[0],$=E[1],q=O.useState(void 0),W=$e(q,2),ne=W[0],ee=W[1],M=O.useState([]),L=$e(M,2),k=L[0],U=L[1],te=O.useState(!1),ue=$e(te,2),F=ue[0],B=ue[1],Y=O.useState({}),P=$e(Y,2),j=P[0],R=P[1],A=O.useState(void 0),ae=$e(A,2),Pe=ae[0],Be=ae[1],hn=O.useState(void 0),Bt=$e(hn,2),Ts=Bt[0],Mi=Bt[1];i!==Ts&&(R({}),Mi(i)),n!==Pe&&(v(Array.isArray(n)?n:void 0),Be(n)),O.useEffect(function(){return C.current=!0,function(){C.current=!1}},[]);var or=O.useCallback(function(ur,vn){if(!a)return vn();var Qe=a(ur,vn);Qe&&typeof Qe.then=="function"&&Qe.then(vn,function(){return vn()})},[a]);O.useEffect(function(){n===!0&&or(_,function(ur){C.current&&(v(ur||[]),$(!!p.current))})},[]);var EO=O.useCallback(function(ur,vn){var Qe=A1(ur,vn,u);if(!Qe){p.current=void 0,I(""),ee(""),U([]),$(!1),B(!1);return}if(i&&j[Qe])I(Qe),ee(Qe),U(j[Qe]),$(!1),B(!1);else{var DO=p.current={};I(Qe),$(!0),B(!ne),or(Qe,function(Ds){C&&DO===p.current&&(p.current=void 0,$(!1),ee(Qe),U(Ds||[]),B(!1),R(Ds?V(V({},j),{},on({},Qe,Ds)):j))})}},[i,or,ne,j,u]),TO=F?[]:_&&ne?k:x||[];return V(V({},f),{},{options:TO,isLoading:D||o,onInputChange:EO,filterOption:l})}var QI=O.forwardRef(function(e,t){var n=od(e),r=sd(n);return K.createElement(us,H({ref:t},r))}),KI=QI,JI=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],ud=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=String(t).toLowerCase(),a=String(r.getOptionValue(n)).toLowerCase(),s=String(r.getOptionLabel(n)).toLowerCase();return a===i||s===i},cs={formatCreateLabel:function(t){return'Create "'.concat(t,'"')},isValidNewOption:function(t,n,r,i){return!(!t||n.some(function(a){return ud(t,a,i)})||r.some(function(a){return ud(t,a,i)}))},getNewOptionData:function(t,n){return{label:n,value:t,__isNew__:!0}}};function XI(e){var t=e.allowCreateWhileLoading,n=t===void 0?!1:t,r=e.createOptionPosition,i=r===void 0?"last":r,a=e.formatCreateLabel,s=a===void 0?cs.formatCreateLabel:a,o=e.isValidNewOption,u=o===void 0?cs.isValidNewOption:o,c=e.getNewOptionData,l=c===void 0?cs.getNewOptionData:c,f=e.onCreateOption,g=e.options,p=g===void 0?[]:g,C=e.onChange,S=tt(e,JI),b=S.getOptionValue,x=b===void 0?Ql:b,v=S.getOptionLabel,w=v===void 0?Yl:v,T=S.inputValue,_=S.isLoading,I=S.isMulti,h=S.value,E=S.name,D=O.useMemo(function(){return u(T,hi(h),p,{getOptionValue:x,getOptionLabel:w})?l(T,s(T)):void 0},[s,l,w,x,T,u,p,h]),$=O.useMemo(function(){return(n||!_)&&D?i==="first"?[D].concat(un(p)):[].concat(un(p),[D]):p},[n,i,_,D,p]),q=O.useCallback(function(W,ne){if(ne.action!=="select-option")return C(W,ne);var ee=Array.isArray(W)?W:[W];if(ee[ee.length-1]===D){if(f)f(T);else{var M=l(T,T),L={action:"create-option",name:E,option:M};C(Kn(I,[].concat(un(hi(h)),[M]),M),L)}return}C(W,ne)},[l,T,I,E,D,f,C,h]);return V(V({},S),{},{options:$,onChange:q})}var ZI=O.forwardRef(function(e,t){var n=od(e),r=sd(n),i=XI(r);return K.createElement(us,H({ref:t},i))}),e_=ZI,t_="[object Symbol]";function n_(e){return typeof e=="symbol"||an(e)&&tn(e)==t_}var r_=/\s/;function i_(e){for(var t=e.length;t--&&r_.test(e.charAt(t)););return t}var a_=/^\s+/;function s_(e){return e&&e.slice(0,i_(e)+1).replace(a_,"")}var cd=NaN,o_=/^[-+]0x[0-9a-f]+$/i,u_=/^0b[01]+$/i,c_=/^0o[0-7]+$/i,l_=parseInt;function ld(e){if(typeof e=="number")return e;if(n_(e))return cd;if(vt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=vt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=s_(e);var n=u_.test(e);return n||c_.test(e)?l_(e.slice(2),n?2:8):o_.test(e)?cd:+e}var ls=function(){return et.Date.now()},d_="Expected a function",f_=Math.max,p_=Math.min;function dd(e,t,n){var r,i,a,s,o,u,c=0,l=!1,f=!1,g=!0;if(typeof e!="function")throw new TypeError(d_);t=ld(t)||0,vt(n)&&(l=!!n.leading,f="maxWait"in n,a=f?f_(ld(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g);function p(I){var h=r,E=i;return r=i=void 0,c=I,s=e.apply(E,h),s}function C(I){return c=I,o=setTimeout(x,t),l?p(I):s}function S(I){var h=I-u,E=I-c,D=t-h;return f?p_(D,a-E):D}function b(I){var h=I-u,E=I-c;return u===void 0||h>=t||h<0||f&&E>=a}function x(){var I=ls();if(b(I))return v(I);o=setTimeout(x,S(I))}function v(I){return o=void 0,g&&r?p(I):(r=i=void 0,s)}function w(){o!==void 0&&clearTimeout(o),c=0,r=u=i=o=void 0}function T(){return o===void 0?s:v(ls())}function _(){var I=ls(),h=b(I);if(r=arguments,i=this,u=I,h){if(o===void 0)return C(u);if(f)return clearTimeout(o),o=setTimeout(x,t),p(u)}return o===void 0&&(o=setTimeout(x,t)),s}return _.cancel=w,_.flush=T,_}var m_="Expected a function";function g_(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(m_);return vt(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),dd(e,t,{leading:r,maxWait:t,trailing:i})}function _i(e,t,n){const r=O.useRef(e);return r.current=e,O.useCallback(dd(function(){return r.current.apply(this,arguments)},t,n),[t,n==null?void 0:n.leading,n==null?void 0:n.trailing,n==null?void 0:n.maxWait])}const h_=e=>Array.isArray(e)?e:e?[e]:[],v_=e=>{const{selectedOptions:t,isDisabled:n=!1,creatable:r=!1,components:i,placeholder:a,showDropdown:s=!0,noOptionsMessageText:o="None"}=e,c={...e,styles:{option:l=>({...l,color:"#000"}),container:(l,f)=>({...l,zIndex:f.isFocused?10:l.zIndex}),multiValueRemove:(l,f)=>({...l,color:f.isFocused?l.color:"#333333"})},defaultOptions:!0,isClearable:!0,value:t??null,className:Ge("react-select",e.className),classNamePrefix:"react-select",noOptionsMessage:()=>o,placeholder:n?"":a,components:{...i,IndicatorSeparator:()=>null,...(!s||n)&&{DropdownIndicator:()=>null},...n&&{MultiValueRemove:()=>null}}};return r?d.jsx(e_,{...c,isDisabled:n}):d.jsx(KI,{...c})},b_=e=>{const{values:t,isMulti:n,onSelect:r,creatable:i=!1,isValidNewOption:a,getNamedObject:s,loadOptions:o}=e,[u,c]=O.useState(!1),l=ep(),f=O.useMemo(()=>{if(n&&t)return t.map(v=>({object:v,value:v.id}));if(t!=null&&t.length)return{object:t[0],value:t[0].id}},[t,n]),g=v=>{const w=h_(v);r==null||r(w.map(T=>T.object))},p=i&&e.onCreate?async v=>{try{c(!0);const{value:w,item:T,message:_}=await e.onCreate(v),I={object:T,value:w};g(n?[...f??[],I]:I),c(!1),l.success(d.jsxs("span",{children:[_,": ",d.jsx("b",{children:v})]}))}catch(w){l.error(w)}}:void 0,C=i&&s?(v,w)=>({value:"",object:s("",w)}):void 0,S=i&&a?(v,w,T)=>a(v,T.map(_=>_.object)):void 0,x=_i((v,w)=>{o(v).then(w)},100);return d.jsx(v_,{...e,loadOptions:x,isLoading:e.isLoading||u,onChange:g,selectedOptions:f,onCreateOption:p,getNewOptionData:C,isValidNewOption:S})};function fd(e){return{value:e.id,object:e}}function y_(e){return S_(e)!==e}function S_(e){const t=O.useRef();return O.useEffect(()=>{t.current=e},[e]),t.current}const pd=e=>{const{error:t,message:n=d.jsx(Se.FormattedMessage,{id:"errors.header"})}=e;return d.jsx("div",{className:"ErrorMessage-container",children:d.jsxs(z.Alert,{variant:"danger",className:"ErrorMessage",children:[d.jsxs(z.Alert.Heading,{className:"ErrorMessage-header",children:[d.jsx(Ee,{icon:ce.faWarning}),n]}),d.jsx("div",{className:"ErrorMessage-content code",children:t})]})})},md="LoadingIndicator",x_=`${md}-message`,gd=he("LoadingIndicator",({message:e,inline:t=!1,small:n=!1,card:r=!1})=>{const a=Se.useIntl().formatMessage({id:"loading.generic"});return d.jsxs("div",{className:Ge(md,{inline:t,small:n,"card-based":r}),children:[d.jsx(z.Spinner,{animation:"border",role:"status",size:n?"sm":void 0,children:d.jsx("span",{className:"sr-only",children:a})}),e!==""&&d.jsx("h4",{className:x_,children:e??a})]})}),Ft=he("HoverPopover",({enterDelay:e=200,leaveDelay:t=200,content:n,children:r,className:i,placement:a="top",popperConfig:s,onOpen:o,onClose:u,target:c})=>{const[l,f]=O.useState(!1),[g,p]=O.useState(null),C=O.useRef(),S=O.useRef(),b=O.useRef(`hover-popover-${Math.random().toString(36).slice(2)}`),x=O.useCallback(_=>{p(_)},[]),v=O.useCallback(()=>(c==null?void 0:c.current)??g,[c,g]),w=O.useCallback(()=>{window.clearTimeout(S.current),C.current=window.setTimeout(()=>{f(!0),o==null||o()},e)},[e,o]),T=O.useCallback(()=>{window.clearTimeout(C.current),S.current=window.setTimeout(()=>{f(!1),u==null||u()},t)},[t,u]);return O.useEffect(()=>()=>{window.clearTimeout(C.current),window.clearTimeout(S.current)},[]),d.jsxs(d.Fragment,{children:[d.jsx("div",{className:i,onMouseEnter:w,onMouseLeave:T,ref:x,children:r}),v()&&d.jsx(z.Overlay,{show:l,placement:a,target:v,container:document.body,popperConfig:s,children:d.jsx(z.Popover,{onMouseEnter:w,onMouseLeave:T,id:b.current,className:"hover-popover-content",children:n})})]})});he("WarningHoverPopover",({children:e,...t})=>d.jsx(Ft,{...t,className:"warning-hover-popover",children:d.jsx(Ee,{icon:ce.faExclamationTriangle})}));function hd(e){return e.title?e.title:e.files&&e.files.length>0?Fe.fileNameFromPath(e.files[0].path):e.folder?Fe.fileNameFromPath(e.folder.path):""}function vd(e){return e.title?e.title:e.files&&e.files.length>0?Fe.fileNameFromPath(e.files[0].path):""}function I_(e){return e.files&&e.files.length>0?e.files[0].path:""}function Xn(e,t){t&&t.length>0&&e.push(...t)}const __=(e,t,n)=>{if(!e.id)return"#";const r=new ie(J.Scenes,void 0),i=new Jt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),Xn(r.criteria,n),`/scenes?${r.makeQueryParameters()}`},C_=(e,t,n)=>{if(!e.id)return"#";const r=new ie(J.Images,void 0),i=new Jt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),Xn(r.criteria,n),`/images?${r.makeQueryParameters()}`},w_=(e,t,n)=>{if(!e.id)return"#";const r=new ie(J.Galleries,void 0),i=new Jt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),Xn(r.criteria,n),`/galleries?${r.makeQueryParameters()}`},O_=(e,t,n)=>{if(!e.id)return"#";const r=new ie(J.Groups,void 0),i=new Jt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),Xn(r.criteria,n),`/groups?${r.makeQueryParameters()}`},E_=e=>{if(!e.id)return"#";const t=new ie(J.SceneMarkers,void 0),n=new Jt;return n.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t.criteria.push(n),`/scenes/markers?${t.makeQueryParameters()}`},T_=e=>{if(!e.id)return"#";const t=new ie(J.Performers,void 0),n=new kc;return n.value=`${e.country}`,t.criteria.push(n),`/performers?${t.makeQueryParameters()}`},D_=e=>{if(!e.id)return"#";const t=new ie(J.Scenes,void 0),n=new Zt;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/scenes?${t.makeQueryParameters()}`},$_=e=>{if(!e.id)return"#";const t=new ie(J.Images,void 0),n=new Zt;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/images?${t.makeQueryParameters()}`},P_=e=>{if(!e.id)return"#";const t=new ie(J.Galleries,void 0),n=new Zt;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/galleries?${t.makeQueryParameters()}`},M_=e=>{if(!e.id)return"#";const t=new ie(J.Groups,void 0),n=new Zt;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/groups?${t.makeQueryParameters()}`},F_=e=>{if(!e.id)return"#";const t=new ie(J.Performers,void 0),n=new Zt;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/performers?${t.makeQueryParameters()}`},N_=e=>{if(!e.id)return"#";const t=new ie(J.Studios,void 0),n=new Iu;return n.value=[{id:e.id,label:e.name||`Studio ${e.id}`}],t.criteria.push(n),`/studios?${t.makeQueryParameters()}`},k_=e=>{if(!e.id)return"#";const t=new ie(J.Scenes,void 0),n=new Gn(qr);return n.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/scenes?${t.makeQueryParameters()}`},A_=e=>`/tags/${e}`,L_=e=>{if(!e.id)return"#";const t=new ie(J.Tags,void 0),n=new Nr(wu);return n.value={items:[{id:e.id,label:e.name||`Tag ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/tags?${t.makeQueryParameters()}`},j_=e=>{if(!e.id)return"#";const t=new ie(J.Tags,void 0),n=new Nr(Cu);return n.value={items:[{id:e.id,label:e.name||`Tag ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/tags?${t.makeQueryParameters()}`};function Nt(e,t){const n=new ie(e,void 0),r=new Nr(ht);return r.value={items:[{id:t.id,label:t.name||`Tag ${t.id}`}],excluded:[],depth:0},n.criteria.push(r),n.makeQueryParameters()}const B_=e=>`/scenes?${Nt(J.Scenes,e)}`,R_=e=>`/performers?${Nt(J.Performers,e)}`,q_=e=>`/studios?${Nt(J.Studios,e)}`,V_=e=>`/scenes/markers?${Nt(J.SceneMarkers,e)}`,G_=e=>`/galleries?${Nt(J.Galleries,e)}`,U_=e=>`/images?${Nt(J.Images,e)}`,z_=e=>`/groups?${Nt(J.Groups,e)}`,H_=e=>!e.id||!e.scene?"#":`/scenes/${e.scene.id}?t=${e.seconds}`,W_=e=>{if(!e)return"#";const t=new ie(J.Scenes,void 0),n=new Da;return n.value={value:e},t.criteria.push(n),`/scenes?${t.makeQueryParameters()}`},Y_=e=>{if(!e)return"#";const t=new ie(J.Images,void 0),n=new Da;return n.value={value:e},t.criteria.push(n),`/images?${t.makeQueryParameters()}`},Q_=(e,t)=>{if(!e.id)return"#";const n=new ie(J.Images,void 0),r=new yc;return r.value=[{id:e.id,label:hd(e)}],n.criteria.push(r),Xn(n.criteria,t),`/images?${n.makeQueryParameters()}`};function Ci(e,t){const n=new Ze(e);return n.modifier=y.Equals,n.value=t,n}const me={makePerformerScenesUrl:__,makePerformerImagesUrl:C_,makePerformerGalleriesUrl:w_,makePerformerGroupsUrl:O_,makePerformerSceneMarkersUrl:E_,makePerformersCountryUrl:T_,makeStudioScenesUrl:D_,makeStudioImagesUrl:$_,makeStudioGalleriesUrl:P_,makeStudioGroupsUrl:M_,makeStudioPerformersUrl:F_,makeTagUrl:A_,makeGroupUrl:e=>`/groups/${e}`,makeParentTagsUrl:L_,makeChildTagsUrl:j_,makeTagSceneMarkersUrl:V_,makeTagScenesUrl:B_,makeTagPerformersUrl:R_,makeTagStudiosUrl:q_,makeTagGalleriesUrl:G_,makeTagImagesUrl:U_,makeTagGroupsUrl:z_,makeScenesPHashMatchUrl:W_,makeSceneMarkerUrl:H_,makeImagesPHashMatchUrl:Y_,makeGroupScenesUrl:k_,makeChildStudiosUrl:N_,makeGalleryImagesUrl:Q_,makeDirectorScenesUrl:e=>{if(e.length===0)return"#";const t=new ie(J.Scenes,void 0);return t.criteria.push(Ci(re("director"),e)),`/scenes?${t.makeQueryParameters()}`},makePhotographerGalleriesUrl:e=>{if(e.length===0)return"#";const t=new ie(J.Galleries,void 0);return t.criteria.push(Ci(re("photographer"),e)),`/galleries?${t.makeQueryParameters()}`},makePhotographerImagesUrl:e=>{if(e.length===0)return"#";const t=new ie(J.Images,void 0);return t.criteria.push(Ci(re("photographer"),e)),`/images?${t.makeQueryParameters()}`},makeDirectorGroupsUrl:e=>{if(e.length===0)return"#";const t=new ie(J.Groups,void 0);return t.criteria.push(Ci(re("director"),e)),`/groups?${t.makeQueryParameters()}`},makeContainingGroupsUrl:e=>{if(!e.id)return"#";const t=new ie(J.Groups,void 0),n=new Gn(Oc);return n.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/groups?${t.makeQueryParameters()}`},makeSubGroupsUrl:e=>{if(!e.id)return"#";const t=new ie(J.Groups,void 0),n=new Gn(wc);return n.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/groups?${t.makeQueryParameters()}`},makeSceneMarkersSceneUrl:e=>{if(!e.id)return"#";const t=new ie(J.SceneMarkers,void 0),n=new yu;return n.value=[{id:e.id,label:vd(e)}],t.criteria.push(n),`/scenes/markers?${t.makeQueryParameters()}`}},ds="TruncatedText",K_=`${ds}-tooltip`,Zn=he("TruncatedText",({text:e,className:t,lineCount:n=1,placement:r="bottom",delay:i=1e3})=>{const[a,s]=O.useState(!1),o=O.useRef(null),u=_i(()=>s(!0),i);if(!e)return null;const c=g=>{(g.offsetWidth<g.scrollWidth||g.offsetHeight+10<g.scrollHeight)&&u()},l=()=>{u.cancel(),s(!1)},f=d.jsx(z.Overlay,{target:o.current,show:a,placement:r,children:d.jsx(z.Tooltip,{id:ds,className:K_,children:e})});return d.jsxs("div",{className:Ge(ds,t),style:{WebkitLineClamp:n},ref:o,onMouseEnter:g=>c(g.currentTarget),onFocus:g=>c(g.currentTarget),onMouseLeave:l,onBlur:l,children:[e,f]})}),J_=()=>window.matchMedia("only screen and (max-width: 576px)").matches,X_=()=>window.matchMedia("(pointer: coarse)").matches;function Z_(e){return window.matchMedia(e).matches}const bd={isMobile:J_,isTouch:X_,matchesMediaQuery:Z_};var kt=[],eC=function(){return kt.some(function(e){return e.activeTargets.length>0})},tC=function(){return kt.some(function(e){return e.skippedTargets.length>0})},yd="ResizeObserver loop completed with undelivered notifications.",nC=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:yd}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=yd),window.dispatchEvent(e)},er;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(er||(er={}));var At=function(e){return Object.freeze(e)},rC=function(){function e(t,n){this.inlineSize=t,this.blockSize=n,At(this)}return e}(),Sd=function(){function e(t,n,r,i){return this.x=t,this.y=n,this.width=r,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,At(this)}return e.prototype.toJSON=function(){var t=this,n=t.x,r=t.y,i=t.top,a=t.right,s=t.bottom,o=t.left,u=t.width,c=t.height;return{x:n,y:r,top:i,right:a,bottom:s,left:o,width:u,height:c}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),fs=function(e){return e instanceof SVGElement&&"getBBox"in e},xd=function(e){if(fs(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e,a=i.offsetWidth,s=i.offsetHeight;return!(a||s||e.getClientRects().length)},Id=function(e){var t;if(e instanceof Element)return!0;var n=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},iC=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},tr=typeof window<"u"?window:{},wi=new WeakMap,_d=/auto|scroll/,aC=/^tb|vertical/,sC=/msie|trident/i.test(tr.navigator&&tr.navigator.userAgent),at=function(e){return parseFloat(e||"0")},pn=function(e,t,n){return e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=!1),new rC((n?t:e)||0,(n?e:t)||0)},Cd=At({devicePixelContentBoxSize:pn(),borderBoxSize:pn(),contentBoxSize:pn(),contentRect:new Sd(0,0,0,0)}),wd=function(e,t){if(t===void 0&&(t=!1),wi.has(e)&&!t)return wi.get(e);if(xd(e))return wi.set(e,Cd),Cd;var n=getComputedStyle(e),r=fs(e)&&e.ownerSVGElement&&e.getBBox(),i=!sC&&n.boxSizing==="border-box",a=aC.test(n.writingMode||""),s=!r&&_d.test(n.overflowY||""),o=!r&&_d.test(n.overflowX||""),u=r?0:at(n.paddingTop),c=r?0:at(n.paddingRight),l=r?0:at(n.paddingBottom),f=r?0:at(n.paddingLeft),g=r?0:at(n.borderTopWidth),p=r?0:at(n.borderRightWidth),C=r?0:at(n.borderBottomWidth),S=r?0:at(n.borderLeftWidth),b=f+c,x=u+l,v=S+p,w=g+C,T=o?e.offsetHeight-w-e.clientHeight:0,_=s?e.offsetWidth-v-e.clientWidth:0,I=i?b+v:0,h=i?x+w:0,E=r?r.width:at(n.width)-I-_,D=r?r.height:at(n.height)-h-T,$=E+b+_+v,q=D+x+T+w,W=At({devicePixelContentBoxSize:pn(Math.round(E*devicePixelRatio),Math.round(D*devicePixelRatio),a),borderBoxSize:pn($,q,a),contentBoxSize:pn(E,D,a),contentRect:new Sd(f,u,E,D)});return wi.set(e,W),W},Od=function(e,t,n){var r=wd(e,n),i=r.borderBoxSize,a=r.contentBoxSize,s=r.devicePixelContentBoxSize;switch(t){case er.DEVICE_PIXEL_CONTENT_BOX:return s;case er.BORDER_BOX:return i;default:return a}},oC=function(){function e(t){var n=wd(t);this.target=t,this.contentRect=n.contentRect,this.borderBoxSize=At([n.borderBoxSize]),this.contentBoxSize=At([n.contentBoxSize]),this.devicePixelContentBoxSize=At([n.devicePixelContentBoxSize])}return e}(),Ed=function(e){if(xd(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},uC=function(){var e=1/0,t=[];kt.forEach(function(s){if(s.activeTargets.length!==0){var o=[];s.activeTargets.forEach(function(c){var l=new oC(c.target),f=Ed(c.target);o.push(l),c.lastReportedSize=Od(c.target,c.observedBox),f<e&&(e=f)}),t.push(function(){s.callback.call(s.observer,o,s.observer)}),s.activeTargets.splice(0,s.activeTargets.length)}});for(var n=0,r=t;n<r.length;n++){var i=r[n];i()}return e},Td=function(e){kt.forEach(function(n){n.activeTargets.splice(0,n.activeTargets.length),n.skippedTargets.splice(0,n.skippedTargets.length),n.observationTargets.forEach(function(i){i.isActive()&&(Ed(i.target)>e?n.activeTargets.push(i):n.skippedTargets.push(i))})})},cC=function(){var e=0;for(Td(e);eC();)e=uC(),Td(e);return tC()&&nC(),e>0},ps,Dd=[],lC=function(){return Dd.splice(0).forEach(function(e){return e()})},dC=function(e){if(!ps){var t=0,n=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return lC()}).observe(n,r),ps=function(){n.textContent="".concat(t?t--:t++)}}Dd.push(e),ps()},fC=function(e){dC(function(){requestAnimationFrame(e)})},Oi=0,pC=function(){return!!Oi},mC=250,gC={attributes:!0,characterData:!0,childList:!0,subtree:!0},$d=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Pd=function(e){return e===void 0&&(e=0),Date.now()+e},ms=!1,hC=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var n=this;if(t===void 0&&(t=mC),!ms){ms=!0;var r=Pd(t);fC(function(){var i=!1;try{i=cC()}finally{if(ms=!1,t=r-Pd(),!pC())return;i?n.run(1e3):t>0?n.run(t):n.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,n=function(){return t.observer&&t.observer.observe(document.body,gC)};document.body?n():tr.addEventListener("DOMContentLoaded",n)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),$d.forEach(function(n){return tr.addEventListener(n,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),$d.forEach(function(n){return tr.removeEventListener(n,t.listener,!0)}),this.stopped=!0)},e}(),gs=new hC,Md=function(e){!Oi&&e>0&&gs.start(),Oi+=e,!Oi&&gs.stop()},vC=function(e){return!fs(e)&&!iC(e)&&getComputedStyle(e).display==="inline"},bC=function(){function e(t,n){this.target=t,this.observedBox=n||er.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=Od(this.target,this.observedBox,!0);return vC(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),yC=function(){function e(t,n){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=n}return e}(),Ei=new WeakMap,Fd=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},Ti=function(){function e(){}return e.connect=function(t,n){var r=new yC(t,n);Ei.set(t,r)},e.observe=function(t,n,r){var i=Ei.get(t),a=i.observationTargets.length===0;Fd(i.observationTargets,n)<0&&(a&&kt.push(i),i.observationTargets.push(new bC(n,r&&r.box)),Md(1),gs.schedule())},e.unobserve=function(t,n){var r=Ei.get(t),i=Fd(r.observationTargets,n),a=r.observationTargets.length===1;i>=0&&(a&&kt.splice(kt.indexOf(r),1),r.observationTargets.splice(i,1),Md(-1))},e.disconnect=function(t){var n=this,r=Ei.get(t);r.observationTargets.slice().forEach(function(i){return n.unobserve(t,i.target)}),r.activeTargets.splice(0,r.activeTargets.length)},e}(),SC=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Ti.connect(this,t)}return e.prototype.observe=function(t,n){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Id(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Ti.observe(this,t,n)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Id(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Ti.unobserve(this,t)},e.prototype.disconnect=function(){Ti.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();const xC=O[typeof document<"u"&&document.createElement!==void 0?"useLayoutEffect":"useEffect"],IC=e=>{const t=K.useRef(e);return K.useEffect(()=>{t.current=e}),t},_C=typeof window<"u"&&"ResizeObserver"in window?window.ResizeObserver:SC;function CC(){}function wC(e,t){const n=EC(),r=IC(t);return xC(()=>{let i=!1;const a=e&&"current"in e?e.current:e;if(!a)return CC;function s(o,u){i||r.current(o,u)}return n.subscribe(a,s),()=>{i=!0,n.unsubscribe(a,s)}},[e,n,r]),n.observer}function OC(){let e=!1,t=[];const n=new Map,r=new _C((i,a)=>{t=t.concat(i);function s(){const o=new Set;for(let u=0;u<t.length;u++){if(o.has(t[u].target))continue;o.add(t[u].target);const c=n.get(t[u].target);c==null||c.forEach(l=>l(t[u],a))}t=[],e=!1}e||window.requestAnimationFrame(s),e=!0});return{observer:r,subscribe(i,a){var s;r.observe(i);const o=(s=n.get(i))!==null&&s!==void 0?s:[];o.push(a),n.set(i,o)},unsubscribe(i,a){var s;const o=(s=n.get(i))!==null&&s!==void 0?s:[];if(o.length===1){r.unobserve(i),n.delete(i);return}const u=o.indexOf(a);u!==-1&&o.splice(u,1),n.set(i,o)}}}let hs;const EC=()=>hs||(hs=OC());var TC={exports:{}};(function(e){(function(t,n,r){if(!t)return;for(var i={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},a={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},s={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},o={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},u,c=1;c<20;++c)i[111+c]="f"+c;for(c=0;c<=9;++c)i[c+96]=c.toString();function l(h,E,D){if(h.addEventListener){h.addEventListener(E,D,!1);return}h.attachEvent("on"+E,D)}function f(h){if(h.type=="keypress"){var E=String.fromCharCode(h.which);return h.shiftKey||(E=E.toLowerCase()),E}return i[h.which]?i[h.which]:a[h.which]?a[h.which]:String.fromCharCode(h.which).toLowerCase()}function g(h,E){return h.sort().join(",")===E.sort().join(",")}function p(h){var E=[];return h.shiftKey&&E.push("shift"),h.altKey&&E.push("alt"),h.ctrlKey&&E.push("ctrl"),h.metaKey&&E.push("meta"),E}function C(h){if(h.preventDefault){h.preventDefault();return}h.returnValue=!1}function S(h){if(h.stopPropagation){h.stopPropagation();return}h.cancelBubble=!0}function b(h){return h=="shift"||h=="ctrl"||h=="alt"||h=="meta"}function x(){if(!u){u={};for(var h in i)h>95&&h<112||i.hasOwnProperty(h)&&(u[i[h]]=h)}return u}function v(h,E,D){return D||(D=x()[h]?"keydown":"keypress"),D=="keypress"&&E.length&&(D="keydown"),D}function w(h){return h==="+"?["+"]:(h=h.replace(/\+{2}/g,"+plus"),h.split("+"))}function T(h,E){var D,$,q,W=[];for(D=w(h),q=0;q<D.length;++q)$=D[q],o[$]&&($=o[$]),E&&E!="keypress"&&s[$]&&($=s[$],W.push("shift")),b($)&&W.push($);return E=v($,W,E),{key:$,modifiers:W,action:E}}function _(h,E){return h===null||h===n?!1:h===E?!0:_(h.parentNode,E)}function I(h){var E=this;if(h=h||n,!(E instanceof I))return new I(h);E.target=h,E._callbacks={},E._directMap={};var D={},$,q=!1,W=!1,ne=!1;function ee(F){F=F||{};var B=!1,Y;for(Y in D){if(F[Y]){B=!0;continue}D[Y]=0}B||(ne=!1)}function M(F,B,Y,P,j,R){var A,ae,Pe=[],Be=Y.type;if(!E._callbacks[F])return[];for(Be=="keyup"&&b(F)&&(B=[F]),A=0;A<E._callbacks[F].length;++A)if(ae=E._callbacks[F][A],!(!P&&ae.seq&&D[ae.seq]!=ae.level)&&Be==ae.action&&(Be=="keypress"&&!Y.metaKey&&!Y.ctrlKey||g(B,ae.modifiers))){var hn=!P&&ae.combo==j,Bt=P&&ae.seq==P&&ae.level==R;(hn||Bt)&&E._callbacks[F].splice(A,1),Pe.push(ae)}return Pe}function L(F,B,Y,P){E.stopCallback(B,B.target||B.srcElement,Y,P)||F(B,Y)===!1&&(C(B),S(B))}E._handleKey=function(F,B,Y){var P=M(F,B,Y),j,R={},A=0,ae=!1;for(j=0;j<P.length;++j)P[j].seq&&(A=Math.max(A,P[j].level));for(j=0;j<P.length;++j){if(P[j].seq){if(P[j].level!=A)continue;ae=!0,R[P[j].seq]=1,L(P[j].callback,Y,P[j].combo,P[j].seq);continue}ae||L(P[j].callback,Y,P[j].combo)}var Pe=Y.type=="keypress"&&W;Y.type==ne&&!b(F)&&!Pe&&ee(R),W=ae&&Y.type=="keydown"};function k(F){typeof F.which!="number"&&(F.which=F.keyCode);var B=f(F);if(B){if(F.type=="keyup"&&q===B){q=!1;return}E.handleKey(B,p(F),F)}}function U(){clearTimeout($),$=setTimeout(ee,1e3)}function te(F,B,Y,P){D[F]=0;function j(Be){return function(){ne=Be,++D[F],U()}}function R(Be){L(Y,Be,F),P!=="keyup"&&(q=f(Be)),setTimeout(ee,10)}for(var A=0;A<B.length;++A){var ae=A+1===B.length,Pe=ae?R:j(P||T(B[A+1]).action);ue(B[A],Pe,P,F,A)}}function ue(F,B,Y,P,j){E._directMap[F+":"+Y]=B,F=F.replace(/\s+/g," ");var R=F.split(" "),A;if(R.length>1){te(F,R,B,Y);return}A=T(F,Y),E._callbacks[A.key]=E._callbacks[A.key]||[],M(A.key,A.modifiers,{type:A.action},P,F,j),E._callbacks[A.key][P?"unshift":"push"]({callback:B,modifiers:A.modifiers,action:A.action,seq:P,level:j,combo:F})}E._bindMultiple=function(F,B,Y){for(var P=0;P<F.length;++P)ue(F[P],B,Y)},l(h,"keypress",k),l(h,"keydown",k),l(h,"keyup",k)}I.prototype.bind=function(h,E,D){var $=this;return h=h instanceof Array?h:[h],$._bindMultiple.call($,h,E,D),$},I.prototype.unbind=function(h,E){var D=this;return D.bind.call(D,h,function(){},E)},I.prototype.trigger=function(h,E){var D=this;return D._directMap[h+":"+E]&&D._directMap[h+":"+E]({},h),D},I.prototype.reset=function(){var h=this;return h._callbacks={},h._directMap={},h},I.prototype.stopCallback=function(h,E){var D=this;if((" "+E.className+" ").indexOf(" mousetrap ")>-1||_(E,D.target))return!1;if("composedPath"in h&&typeof h.composedPath=="function"){var $=h.composedPath()[0];$!==h.target&&(E=$)}return E.tagName=="INPUT"||E.tagName=="SELECT"||E.tagName=="TEXTAREA"||E.isContentEditable},I.prototype.handleKey=function(){var h=this;return h._handleKey.apply(h,arguments)},I.addKeycodes=function(h){for(var E in h)h.hasOwnProperty(E)&&(i[E]=h[E]);u=null},I.init=function(){var h=I(n);for(var E in h)E.charAt(0)!=="_"&&(I[E]=function(D){return function(){return h[D].apply(h,arguments)}}(E))},I.init(),t.Mousetrap=I,e.exports&&(e.exports=I)})(typeof window<"u"?window:null,typeof window<"u"?document:null)})(TC),O.createContext(null);const DC=O.createContext(null),$C={selectable:!1,selectedIds:new Set,getSelected:()=>[],onSelectChange:()=>{},onSelectAll:()=>{},onSelectNone:()=>{},onInvertSelection:()=>{},items:[],hasSelection:!1,selectedItems:[]};function PC(){const e=O.useContext(DC);return e===null?$C:e}O.createContext(null);var Nd=(e=>(e[e.BEFORE=0]="BEFORE",e[e.AFTER=1]="AFTER",e))(Nd||{});function MC(e){const{selectedIds:t}=PC(),[n,r]=O.useState(!1),[i,a]=O.useState(!1),[s,o]=O.useState(),u=e.onSelectedChanged&&e.selecting,c=!!e.objectId&&e.onMove&&n,l=u||c;function f(v){if(!l){v.preventDefault();return}if(!n&&e.selecting)v.dataTransfer.setData("text/plain",""),v.dataTransfer.effectAllowed="copy",v.stopPropagation();else if(n&&e.objectId){if(t.size>1&&t.has(e.objectId)){const w=Array.from(t.values()).join(",");v.dataTransfer.setData("text/plain",w)}else a(!0),v.dataTransfer.setData("text/plain",e.objectId);v.dataTransfer.effectAllowed="move",v.stopPropagation()}}function g(v){const w=v.nativeEvent.offsetX<v.currentTarget.clientWidth/2;w&&s!==0?o(0):!w&&s!==1&&o(1)}function p(v){const w=v,T=!1;if(w.dataTransfer.effectAllowed==="copy"){if(!e.onSelectedChanged)return;e.selecting&&!e.selected&&e.onSelectedChanged(!0,T),w.dataTransfer.dropEffect="copy",w.preventDefault()}else w.dataTransfer.effectAllowed==="move"&&!i?(g(v),w.dataTransfer.dropEffect="move",w.preventDefault()):w.dataTransfer.dropEffect="none"}function C(v){v.currentTarget.contains(v.relatedTarget)||o(void 0)}function S(v){v.dataTransfer.effectAllowed!=="move"||i||(g(v),v.preventDefault())}function b(){o(void 0),a(!1)}function x(v){const w=v;if(w.dataTransfer.effectAllowed==="copy"||!e.onMove||!e.objectId)return;const T=w.dataTransfer.getData("text/plain").split(","),_=e.objectId,I=s===1;e.onMove(T,_,I),b()}return{inHandle:n,setInHandle:r,moveTarget:s,dragProps:{draggable:l||void 0,onDragStart:f,onDragEnter:p,onDragLeave:C,onDragOver:S,onDragEnd:b,onDrop:x}}}const FC=e=>d.jsx("a",{target:"_blank",rel:"noopener noreferrer",...e}),NC=(e,t)=>{const i=e-30,a=Math.ceil(i/t);return i/a-10},kC=(e=20)=>{const t=O.useRef(null),[n,r]=O.useState({width:0,height:0}),i=_i(a=>{const{inlineSize:s,blockSize:o}=a.contentBoxSize[0];Math.abs(n.width-s)>e&&r({width:s,height:o})},50);return wC(t,i),[t,n]};function AC(e,t,n){return O.useMemo(()=>{if(bd.isMobile()||t>=n.length)return;if(!e)return n[t];const i=n[t];return NC(e,i)},[e,t,n])}const LC=({selected:e=!1,onSelectedChanged:t})=>{let n=!1;return d.jsx(z.Form.Control,{type:"checkbox",className:"card-check mousetrap",checked:e,onChange:()=>t(!e,n),onClick:r=>{n=r.shiftKey,r.stopPropagation()}})},jC=({setInHandle:e})=>{function t(){e(!0)}function n(){e(!1)}return d.jsx("span",{onMouseEnter:t,onMouseLeave:n,children:d.jsx(Ee,{className:"card-drag-handle",icon:ce.faGripLines})})},BC=({children:e})=>d.jsx("div",{className:"card-controls",children:e}),RC=({dragSide:e})=>e===void 0?null:d.jsx("div",{className:`move-target move-target-${e===Nd.BEFORE?"before":"after"}`});function kd(e){const{url:t,linkClassName:n,onClick:r,children:i}=e;return/^https?:\/\//i.test(t)?d.jsx(FC,{href:t,className:n,onClick:r,children:i}):d.jsx(Ke.Link,{to:t,className:n,onClick:r,children:i})}const Ad=he("GridCard",e=>{const{setInHandle:t,moveTarget:n,dragProps:r}=MC({selecting:e.selecting||!1,selected:e.selected||!1,onSelectedChanged:e.onSelectedChanged,objectId:e.objectId,onMove:e.onMove});function i(o){const{shiftKey:u}=o;e.onSelectedChanged&&e.selecting&&(e.onSelectedChanged(!e.selected,u),o.preventDefault(),o.stopPropagation())}function a(){if(e.interactiveHeatmap)return d.jsx("img",{loading:"lazy",src:e.interactiveHeatmap,alt:"interactive heatmap",className:"interactive-heatmap"})}function s(){if(e.resumeTime&&e.duration&&e.duration>e.resumeTime){const o=100/e.duration*e.resumeTime,u=o+"%";return d.jsx("div",{title:Math.round(o)+"%",className:"progress-bar",children:d.jsx("div",{style:{width:u},className:"progress-indicator"})})}}return d.jsxs(z.Card,{className:Ge(e.className,"grid-card"),onClick:i,...r,style:e.width&&!bd.isMobile()?{width:`${e.width}px`}:{},children:[n!==void 0&&d.jsx(RC,{dragSide:n}),d.jsxs(BC,{children:[e.onSelectedChanged&&d.jsx(LC,{selected:e.selected,onSelectedChanged:e.onSelectedChanged}),!!e.objectId&&e.onMove&&d.jsx(jC,{setInHandle:t})]}),d.jsxs("div",{className:Ge(e.thumbnailSectionClassName,"thumbnail-section"),children:[d.jsx(kd,{url:e.url,linkClassName:e.linkClassName,onClick:i,children:e.image}),e.overlays,s()]}),a(),d.jsxs("div",{className:"card-section",children:[d.jsx(kd,{url:e.url,onClick:i,children:d.jsxs("h5",{className:"card-section-title flex-aligned",children:[e.pretitleIcon,d.jsx(Zn,{text:e.title,lineCount:2})]})}),e.details]}),e.popovers]})}),qC=({count:e})=>{const{configuration:t}=mt();if(!((t==null?void 0:t.ui.abbreviateCounters)??!1))return d.jsx("span",{children:e});const r=Fe.abbreviateCounter(e);return d.jsxs("span",{children:[d.jsx(Se.FormattedNumber,{value:r.size,maximumFractionDigits:r.digits}),r.unit]})},Lt=({className:e,url:t,type:n,count:r,showZero:i=!0})=>{const a=Se.useIntl();if(!i&&r===0)return null;function s(){switch(n){case"scene":return ce.faPlayCircle;case"image":return ce.faImage;case"gallery":return ce.faImages;case"marker":return ce.faMapMarkerAlt;case"group":case"sub_group":return ce.faFilm;case"performer":return ce.faUser;case"studio":return ce.faVideo}}function o(){switch(n){case"scene":return{one:"scene",other:"scenes"};case"image":return{one:"image",other:"images"};case"gallery":return{one:"gallery",other:"galleries"};case"marker":return{one:"marker",other:"markers"};case"group":return{one:"group",other:"groups"};case"sub_group":return{one:"sub_group",other:"sub_groups"};case"performer":return{one:"performer",other:"performers"};case"studio":return{one:"studio",other:"studios"}}}function u(){const c=a.formatPlural(r),l=o(),f=a.formatMessage({id:l[c]||l.other});return`${r} ${f}`}return d.jsx(z.OverlayTrigger,{overlay:d.jsx(z.Tooltip,{id:`${n}-count-tooltip`,children:u()}),placement:"bottom",children:d.jsx(Ke.Link,{className:e,to:t,children:d.jsxs(z.Button,{className:"minimal",children:[d.jsx(Ee,{icon:s()}),d.jsx(qC,{count:r})]})})})},VC=he("TagCard.Popovers",({tag:e})=>d.jsxs(d.Fragment,{children:[d.jsx("hr",{}),d.jsxs(z.ButtonGroup,{className:"card-popovers",children:[d.jsx(Lt,{className:"scene-count",type:"scene",count:e.scene_count,url:me.makeTagScenesUrl(e),showZero:!1}),d.jsx(Lt,{className:"image-count",type:"image",count:e.image_count,url:me.makeTagImagesUrl(e),showZero:!1}),d.jsx(Lt,{className:"gallery-count",type:"gallery",count:e.gallery_count,url:me.makeTagGalleriesUrl(e),showZero:!1}),d.jsx(Lt,{className:"group-count",type:"group",count:e.group_count,url:me.makeTagGroupsUrl(e),showZero:!1}),d.jsx(Lt,{className:"marker-count",type:"marker",count:e.scene_marker_count,url:me.makeTagSceneMarkersUrl(e),showZero:!1}),d.jsx(Lt,{className:"performer-count",type:"performer",count:e.performer_count,url:me.makeTagPerformersUrl(e),showZero:!1}),d.jsx(Lt,{className:"studio-count",type:"studio",count:e.studio_count,url:me.makeTagStudiosUrl(e),showZero:!1})]})]})),GC=he("TagCard.Overlays",({tag:e})=>{const[t]=Wm();function n(){return d.jsx(Ke.Link,{to:"",onClick:i=>i.preventDefault(),children:d.jsx(z.Button,{className:Ge("minimal","mousetrap","favorite-button",e.favorite?"favorite":"not-favorite"),onClick:()=>r(!e.favorite),children:d.jsx(Ee,{icon:ce.faHeart,size:"2x"})})})}function r(i){e.id&&t({variables:{input:{id:e.id,favorite:i}}})}return d.jsx(d.Fragment,{children:n()})}),UC=he("TagCard.Details",({tag:e})=>{function t(){if(e.description)return d.jsx(Zn,{className:"tag-description",text:e.description,lineCount:3})}function n(){if(e.parents.length===1){const i=e.parents[0];return d.jsx("div",{className:"tag-parent-tags",children:d.jsx(Se.FormattedMessage,{id:"sub_tag_of",values:{parent:d.jsx(Ke.Link,{to:`/tags/${i.id}`,children:i.name})}})})}if(e.parents.length>1)return d.jsx("div",{className:"tag-parent-tags",children:d.jsx(Se.FormattedMessage,{id:"sub_tag_of",values:{parent:d.jsxs(Ke.Link,{to:me.makeParentTagsUrl(e),children:[e.parents.length," ",d.jsx(Se.FormattedMessage,{id:"countables.tags",values:{count:e.parents.length}})]})}})})}function r(){if(e.children.length>0)return d.jsx("div",{className:"tag-sub-tags",children:d.jsx(Se.FormattedMessage,{id:"parent_of",values:{children:d.jsxs(Ke.Link,{to:me.makeChildTagsUrl(e),children:[e.children.length," ",d.jsx(Se.FormattedMessage,{id:"countables.tags",values:{count:e.children.length}})]})}})})}return d.jsxs(d.Fragment,{children:[t(),n(),r()]})}),zC=he("TagCard.Image",({tag:e})=>d.jsx("img",{loading:"lazy",className:"tag-card-image",alt:e.name,src:e.image_path??""})),HC=he("TagCard.Title",({tag:e})=>d.jsx(d.Fragment,{children:e.name??""})),WC=he("TagCard",e=>{const{tag:t,cardWidth:n,zoomIndex:r,selecting:i,selected:a,onSelectedChanged:s}=e;return d.jsx(Ad,{className:`tag-card zoom-${r}`,url:`/tags/${t.id}`,width:n,title:d.jsx(HC,{...e}),linkClassName:"tag-card-header",image:d.jsx(zC,{...e}),details:d.jsx(UC,{...e}),overlays:d.jsx(GC,{...e}),popovers:d.jsx(VC,{...e}),selected:a,selecting:i,onSelectedChanged:s})}),YC=({id:e})=>{const{data:t,loading:n,error:r}=Vm(e);if(n)return d.jsx("div",{className:"tag-popover-card-placeholder",children:d.jsx(gd,{card:!0,message:""})});if(r)return d.jsx(pd,{error:r.message});if(!(t!=null&&t.findTag))return d.jsx(pd,{error:`No tag found with id ${e}.`});const i=t.findTag;return d.jsx("div",{className:"tag-popover-card",children:d.jsx(WC,{tag:i,zoomIndex:0})})},vs=({id:e,hide:t,children:n,placement:r="top",target:i})=>{const{configuration:a}=mt(),s=(a==null?void 0:a.ui.showTagCardOnHover)??!0;return t||!s?d.jsx(d.Fragment,{children:n}):d.jsx(Ft,{target:i,placement:r,enterDelay:500,leaveDelay:100,content:d.jsx(YC,{id:e}),children:n})};function QC(e,t,n,r){if(!e)return t;e=e.toLowerCase();const i={};function a(v,w){i[v.id]={...i[v.id],...w}}function s(v){var _,I;const w=(_=i[v.id])==null?void 0:_.aliases;if(w!==void 0)return w;if(!r)return[];const T=((I=r(v))==null?void 0:I.map(h=>h.trim().toLowerCase()))??[];return a(v,{aliases:T}),T}function o(v){var I;const w=(I=i[v.id])==null?void 0:I.aliasMatch;if(w!==void 0)return w;const _=s(v).some(h=>h===e);return a(v,{aliasMatch:_}),_}function u(v){var I;const w=(I=i[v.id])==null?void 0:I.aliasStartsWith;if(w!==void 0)return w;const _=s(v).some(h=>h.startsWith(e));return a(v,{aliasStartsWith:_}),_}function c(v){return v.trim().replace(/\s\s+/g," ").toLowerCase().split(" ")}function l(v){return c(n(v))}function f(v){return s(v).flatMap(T=>c(T))}function g(v){var I;const w=(I=i[v.id])==null?void 0:I.wordIndex;if(w!==void 0)return w;const _=l(v).indexOf(e);return a(v,{wordIndex:_}),_}function p(v){var I;const w=(I=i[v.id])==null?void 0:I.aliasWordIndex;if(w!==void 0)return w;const _=f(v).indexOf(e);return a(v,{aliasWordIndex:_}),_}function C(v){var I;const w=(I=i[v.id])==null?void 0:I.wordStartsWithIndex;if(w!==void 0)return w;const _=l(v).findIndex(h=>h.startsWith(e));return a(v,{wordStartsWithIndex:_}),_}function S(v){var I;const w=(I=i[v.id])==null?void 0:I.aliasWordStartsWithIndex;if(w!==void 0)return w;const _=f(v).findIndex(h=>h.startsWith(e));return a(v,{aliasWordStartsWithIndex:_}),_}function b(v){var I;const w=(I=i[v.id])==null?void 0:I.aliasIncludesIndex;if(w!==void 0)return w;const _=s(v).findIndex(h=>h.includes(e));return a(v,{aliasIncludesIndex:_}),_}function x(v,w){const T=n(v).trim().toLowerCase(),_=n(w).trim().toLowerCase(),I=o(v),h=o(w);if(T===e&&_!==e)return-1;if(T!==e&&_===e)return 1;if(I&&!h)return-1;if(!I&&h)return 1;if(T.startsWith(e)&&!_.startsWith(e))return-1;if(!T.startsWith(e)&&_.startsWith(e))return 1;const E=u(v),D=u(w);if(E&&!D)return-1;if(!E&&D)return 1;if(!e.includes(" ")){{const ee=g(v),M=g(w);if(ee!==-1&&M===-1)return-1;if(ee===-1&&M!==-1)return 1;if(ee!==-1&&M!==-1)return ee===M?T.localeCompare(_):ee-M;const L=p(v),k=p(w);if(L!==-1&&k===-1)return-1;if(L===-1&&k!==-1)return 1;if(L!==-1&&k!==-1)return L===k?T.localeCompare(_):L-k}{const ee=C(v),M=C(w);if(ee!==-1&&M===-1)return-1;if(ee===-1&&M!==-1)return 1;if(ee!==-1&&M!==-1)return ee===M?T.localeCompare(_):ee-M;const L=S(v),k=S(w);if(L!==-1&&k===-1)return-1;if(L===-1&&k!==-1)return 1;if(L!==-1&&k!==-1)return L===k?T.localeCompare(_):L-k}}const $=T.indexOf(e),q=_.indexOf(e);if($!==-1&&q===-1)return-1;if($===-1&&q!==-1)return 1;if($!==-1&&q!==-1)return $===q?T.localeCompare(_):$-q;const W=b(v),ne=b(w);return W!==-1&&ne===-1?-1:W===-1&&ne!==-1?1:W!==-1&&ne!==-1?W===ne?T.localeCompare(_):W-ne:T.localeCompare(_)}return t.slice().sort(x)}const KC=/^[0-9a-f]{8}-[0-9a-f]{4}-[47][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function JC(e){return KC.test(e.trim())}function XC(e,t){const n=e.makeCriterion("stash_id_endpoint");n.modifier=y.Equals,n.value={endpoint:"",stashID:t.trim()},e.criteria=[n]}function ZC(e,t){return QC(e,t,n=>n.name,n=>n.aliases)}const ew=oo("TagSelect.sort",ZC),tw=he("TagSelect",e=>{const[t]=Hm(),{configuration:n}=mt(),r=Se.useIntl(),i=(n==null?void 0:n.ui.maxOptionsShown)??Qm,a=!(n!=null&&n.interface.disableDropdownCreate.tag),s=O.useMemo(()=>e.excludeIds??[],[e.excludeIds]);function o(S){return!s.includes(S.id.toString())}async function u(S){const b=new ie(J.Tags);if(b.currentPage=1,b.itemsPerPage=i,b.sortBy="name",b.sortDirection=Ve.Asc,JC(S)){XC(b,S);const T=(await Jo(b)).data.findTags.tags.filter(o);if(T.length>0)return T.map(fd);b.criteria=[]}b.searchTerm=S;const v=(await Jo(b)).data.findTags.tags.filter(o);return ew(S,v).map(fd)}const c=S=>{var _;let b=S;const{object:x}=S.data,{name:v}=x,{inputValue:w}=S.selectProps;let T="";return v.toLowerCase().includes(w.toLowerCase())||(T=(_=x.aliases)==null?void 0:_.find(I=>I.toLowerCase().includes(w.toLowerCase()))),b={...S,children:d.jsx(vs,{id:x.id,placement:e.hoverPlacement??"right",children:d.jsxs("span",{className:"react-select-image-option",children:[d.jsx("span",{children:v}),T&&d.jsxs("span",{className:"alias",children:[" (",T,")"]})]})})},d.jsx(Fi.components.Option,{...b})},l=S=>{let b=S;const{object:x}=S.data;return b={...S,children:d.jsx(vs,{id:x.id,placement:e.hoverPlacementLabel??"top",children:d.jsx("span",{children:x.name})})},d.jsx(Fi.components.MultiValueLabel,{...b})},f=S=>{let b=S;const{object:x}=S.data;return b={...S,children:d.jsx(d.Fragment,{children:x.name})},d.jsx(Fi.components.SingleValue,{...b})},g=async S=>{const b=await t({variables:{input:{name:S}}});return{value:b.data.tagCreate.id,item:b.data.tagCreate,message:"Created tag"}},p=(S,b)=>({id:S,name:b,aliases:[],stash_ids:[]}),C=(S,b)=>!(!S||b.some(x=>{var v;return x.name.toLowerCase()===S.toLowerCase()||((v=x.aliases)==null?void 0:v.some(w=>w.toLowerCase()===S.toLowerCase()))}));return d.jsx(b_,{...e,className:Ge("tag-select",{"tag-select-active":e.active},e.className),loadOptions:u,getNamedObject:p,isValidNewOption:C,components:{Option:c,MultiValueLabel:l,SingleValue:f},isMulti:e.isMulti??!1,creatable:e.creatable??a,onCreate:g,placeholder:e.noSelectionString??r.formatMessage({id:"actions.select_entity"},{entityType:r.formatMessage({id:e.isMulti?"tags":"tag"})}),closeMenuOnSelect:!e.isMulti})}),nw=he("TagIDSelect",e=>{const{ids:t,onSelect:n}=e,[r,i]=O.useState([]),a=y_(t);function s(o){i(o),n==null||n(o)}return O.useEffect(()=>{async function o(l){const f=await Gm(l),{tags:g}=f.data.findTags;return g}if(!a)return;if(!t||(t==null?void 0:t.length)===0){i([]);return}if(r.filter(l=>t.includes(l.id.toString())).length===t.length)return;(async()=>{const f=[...await o(t)];f.sort((g,p)=>{const C=g.sort_name||g.name,S=p.sort_name||p.name;return C&&S?C.localeCompare(S):0}),i(f)})()},[t,a,r]),d.jsx(tw,{...e,values:r,onSelect:s})}),rw=(e,t)=>{const{data:n,loading:r,error:i}=Ym(e),a=O.useRef(void 0);r||(a.current=n);const s=r?a.current:n,o=i&&t?[]:s==null?void 0:s.directory.directories,u=s==null?void 0:s.directory.parent;return{directories:o,parent:u,loading:r,error:i}},iw=he("FolderSelect",({currentDirectory:e,onChangeDirectory:t,defaultDirectories:n=[],appendButton:r,collapsible:i=!1,quotePath:a=!1,hideError:s=!1})=>{const o=Se.useIntl(),[u,c]=O.useState(!1),[l,f]=O.useState(e),g=a?Fe.stripQuotes(l):l,{directories:p,parent:C,error:S,loading:b}=rw(g,s),x=(e?p:n)??n,v=_i(f,250);function w(h){const E=a&&h.includes(" ")?Fe.addQuotes(h):h;t(E),f(E)}function T(h){t(h),v(h)}function _(){n!=null&&n.includes(e)?w(""):C&&w(C)}const I=e&&C&&d.jsx("li",{className:"folder-list-parent folder-list-item",children:d.jsx(z.Button,{variant:"link",onClick:()=>_(),disabled:b,children:d.jsx("span",{children:d.jsx(Se.FormattedMessage,{id:"setup.folder.up_dir"})})})});return d.jsxs(d.Fragment,{children:[d.jsxs(z.InputGroup,{children:[d.jsx(z.Form.Control,{className:"btn-secondary",placeholder:o.formatMessage({id:"setup.folder.file_path"}),onChange:h=>{T(h.currentTarget.value)},value:e,spellCheck:!1}),r&&d.jsx(z.InputGroup.Append,{children:r}),i&&d.jsx(z.InputGroup.Append,{children:d.jsx(z.Button,{variant:"secondary",onClick:()=>c(!u),children:d.jsx(Ee,{icon:ce.faEllipsis})})}),(b||S)&&d.jsx(z.InputGroup.Append,{className:"align-self-center",children:b?d.jsx(gd,{inline:!0,small:!0,message:""}):!s&&d.jsx(Ee,{icon:ce.faTimes,color:"red",className:"ml-3"})})]}),!s&&S!==void 0&&d.jsxs("h5",{className:"mt-4 text-break",children:["Error: ",S.message]}),d.jsx(z.Collapse,{in:!i||u,children:d.jsxs("ul",{className:"folder-list",children:[I,x.map(h=>d.jsx("li",{className:"folder-list-item",children:d.jsx(z.Button,{variant:"link",onClick:()=>w(h),disabled:b,children:d.jsx("span",{children:h})})},h))]})})]})});function aw(e){var t,n;return e.title?e.title:(t=e.primary_tag)!=null&&t.name?(n=e.primary_tag)==null?void 0:n.name:""}const sw=({link:e,sortName:t,className:n,children:r})=>d.jsx(z.Badge,{"data-name":n,"data-sort-name":t,className:Ge("tag-item tag-link",n),variant:"secondary",children:d.jsx(Ke.Link,{to:e,children:r})}),Di=({link:e,className:t,children:n})=>d.jsx(z.Badge,{className:Ge("tag-item tag-link",t),variant:"secondary",children:d.jsx(Ke.Link,{to:e,children:n})}),ow=({performer:e,linkType:t="scene",className:n})=>{const r=O.useMemo(()=>{switch(t){case"gallery":return me.makePerformerGalleriesUrl(e);case"image":return me.makePerformerImagesUrl(e);case"scene_marker":return me.makePerformerSceneMarkersUrl(e);default:return me.makePerformerScenesUrl(e)}},[e,t]),i=e.name||"";return d.jsxs(Di,{link:r,className:n,children:[d.jsx("span",{children:i}),e.disambiguation&&d.jsx("span",{className:"performer-disambiguation",children:` (${e.disambiguation})`})]})},uw=({group:e,description:t,linkType:n="scene",className:r})=>{const i=O.useMemo(()=>{switch(n){case"scene":return me.makeGroupScenesUrl(e);case"sub_group":return me.makeSubGroupsUrl(e);case"details":return me.makeGroupUrl(e.id??"")}},[e,n]),a=e.name||"";return d.jsxs(Di,{link:i,className:r,children:[a," ",t&&d.jsxs("span",{className:"group-description",children:["(",t,")"]})]})},cw=({marker:e,linkType:t="scene",className:n})=>{const r=O.useMemo(()=>{switch(t){case"scene":return me.makeSceneMarkerUrl(e)}},[e,t]),i=`${aw(e)} - ${Fe.secondsToTimestamp(e.seconds||0)}`;return d.jsx(Di,{link:r,className:n,children:i})},lw=({gallery:e,linkType:t="details",className:n})=>{const r=O.useMemo(()=>{switch(t){case"details":return`/galleries/${e.id}`}},[e,t]),i=hd(e);return d.jsx(Di,{link:r,className:n,children:i})},dw=he("TagLink",({tag:e,linkType:t="scene",className:n,hoverPlacement:r,showHierarchyIcon:i=!1,hierarchyTooltipID:a})=>{const s=O.useMemo(()=>{switch(t){case"scene":return me.makeTagScenesUrl(e);case"performer":return me.makeTagPerformersUrl(e);case"studio":return me.makeTagStudiosUrl(e);case"gallery":return me.makeTagGalleriesUrl(e);case"image":return me.makeTagImagesUrl(e);case"group":return me.makeTagGroupsUrl(e);case"scene_marker":return me.makeTagSceneMarkersUrl(e);case"details":return me.makeTagUrl(e.id??"")}},[e,t]),o=e.name||"",u=O.useMemo(()=>a?d.jsx(z.Tooltip,{id:"tag-hierarchy-tooltip",children:d.jsx(Se.FormattedMessage,{id:a})}):d.jsx(d.Fragment,{}),[a]);return d.jsx(sw,{sortName:e.sort_name||o,link:s,className:n,children:d.jsxs(vs,{id:e.id??"",placement:r,children:[o,i&&d.jsx(z.OverlayTrigger,{placement:"top",overlay:u,children:d.jsxs("span",{className:"icon-wrapper",children:[d.jsx("span",{className:"vertical-line",children:"|"}),d.jsx(Ee,{icon:ce.faFolderTree,className:"tag-icon"})]})})]})})});function fw(e){const t=e.slice();return t.sort((n,r)=>{if(n.gender===r.gender)return(n.name??"").localeCompare(r.name??"");const i=[Ie.Female,Ie.TransgenderFemale,Ie.Male,Ie.TransgenderMale,Ie.Intersex,Ie.NonBinary],a=n.gender?i.indexOf(n.gender):i.length,s=r.gender?i.indexOf(r.gender):i.length;return a-s}),t}const pw=({performers:e,linkType:t})=>{const r=fw(e).map(i=>d.jsxs("div",{className:"performer-tag-container row",children:[d.jsx(Ke.Link,{to:`/performers/${i.id}`,className:"performer-tag col m-auto zoom-2",children:d.jsx("img",{className:"image-thumbnail",alt:i.name??"",src:i.image_path??""})}),d.jsx(ow,{performer:i,className:"d-block",linkType:t},i.id)]},i.id));return d.jsx(Ft,{className:"performer-count",placement:"bottom",content:r,children:d.jsxs(z.Button,{className:"minimal",children:[d.jsx(Ee,{icon:ce.faUser}),d.jsx("span",{children:e.length})]})})},mw=({rating:e})=>{const{configuration:t}=mt(),n=(t==null?void 0:t.ui.ratingSystemOptions)??Tu,r=n.type===Ou.Stars&&n.starPrecision===Eu.Full,i=kr(e??void 0,n);return e?d.jsxs("div",{className:r?`rating-banner rating-${i}`:`rating-banner rating-100-${Math.trunc(e/5)}`,"data-rating100":e,"data-rating-system":n.type,style:{"--rating-100":e},children:[d.jsx(Se.FormattedMessage,{id:"rating"}),": ",i]}):null};var Ld={exports:{}},nr;typeof window<"u"?nr=window:typeof cr<"u"?nr=cr:typeof self<"u"?nr=self:nr={};var gw=nr;const hw=Zd(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));var jd=typeof cr<"u"?cr:typeof window<"u"?window:{},vw=hw,rr;typeof document<"u"?rr=document:(rr=jd["__GLOBAL_DOCUMENT_CACHE@4"],rr||(rr=jd["__GLOBAL_DOCUMENT_CACHE@4"]=vw));var bw=rr,Bd=bw,bs=Object.create||function(){function e(){}return function(t){if(arguments.length!==1)throw new Error("Object.create shim only accepts one parameter.");return e.prototype=t,new e}}();function We(e,t){this.name="ParsingError",this.code=e.code,this.message=t||e.message}We.prototype=bs(Error.prototype),We.prototype.constructor=We,We.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}};function ys(e){function t(r,i,a,s){return(r|0)*3600+(i|0)*60+(a|0)+(s|0)/1e3}var n=e.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);return n?n[3]?t(n[1],n[2],n[3].replace(":",""),n[4]):n[1]>59?t(n[1],n[2],0,n[4]):t(0,n[1],n[2],n[4]):null}function ir(){this.values=bs(null)}ir.prototype={set:function(e,t){!this.get(e)&&t!==""&&(this.values[e]=t)},get:function(e,t,n){return n?this.has(e)?this.values[e]:t[n]:this.has(e)?this.values[e]:t},has:function(e){return e in this.values},alt:function(e,t,n){for(var r=0;r<n.length;++r)if(t===n[r]){this.set(e,t);break}},integer:function(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))},percent:function(e,t){return t.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&(t=parseFloat(t),t>=0&&t<=100)?(this.set(e,t),!0):!1}};function ar(e,t,n,r){var i=r?e.split(r):[e];for(var a in i)if(typeof i[a]=="string"){var s=i[a].split(n);if(s.length===2){var o=s[0].trim(),u=s[1].trim();t(o,u)}}}function yw(e,t,n){var r=e;function i(){var o=ys(e);if(o===null)throw new We(We.Errors.BadTimeStamp,"Malformed timestamp: "+r);return e=e.replace(/^[^\sa-zA-Z-]+/,""),o}function a(o,u){var c=new ir;ar(o,function(l,f){switch(l){case"region":for(var g=n.length-1;g>=0;g--)if(n[g].id===f){c.set(l,n[g].region);break}break;case"vertical":c.alt(l,f,["rl","lr"]);break;case"line":var p=f.split(","),C=p[0];c.integer(l,C),c.percent(l,C)&&c.set("snapToLines",!1),c.alt(l,C,["auto"]),p.length===2&&c.alt("lineAlign",p[1],["start","center","end"]);break;case"position":p=f.split(","),c.percent(l,p[0]),p.length===2&&c.alt("positionAlign",p[1],["start","center","end"]);break;case"size":c.percent(l,f);break;case"align":c.alt(l,f,["start","center","end","left","right"]);break}},/:/,/\s/),u.region=c.get("region",null),u.vertical=c.get("vertical","");try{u.line=c.get("line","auto")}catch{}u.lineAlign=c.get("lineAlign","start"),u.snapToLines=c.get("snapToLines",!0),u.size=c.get("size",100);try{u.align=c.get("align","center")}catch{u.align=c.get("align","middle")}try{u.position=c.get("position","auto")}catch{u.position=c.get("position",{start:0,left:0,center:50,middle:50,end:100,right:100},u.align)}u.positionAlign=c.get("positionAlign",{start:"start",left:"start",center:"center",middle:"center",end:"end",right:"end"},u.align)}function s(){e=e.replace(/^\s+/,"")}if(s(),t.startTime=i(),s(),e.substr(0,3)!=="-->")throw new We(We.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '-->'): "+r);e=e.substr(3),s(),t.endTime=i(),s(),a(e,t)}var Ss=Bd.createElement&&Bd.createElement("textarea"),Sw={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},Rd={white:"rgba(255,255,255,1)",lime:"rgba(0,255,0,1)",cyan:"rgba(0,255,255,1)",red:"rgba(255,0,0,1)",yellow:"rgba(255,255,0,1)",magenta:"rgba(255,0,255,1)",blue:"rgba(0,0,255,1)",black:"rgba(0,0,0,1)"},xw={v:"title",lang:"lang"},qd={rt:"ruby"};function Vd(e,t){function n(){if(!t)return null;function C(b){return t=t.substr(b.length),b}var S=t.match(/^([^<]*)(<[^>]*>?)?/);return C(S[1]?S[1]:S[2])}function r(C){return Ss.innerHTML=C,C=Ss.textContent,Ss.textContent="",C}function i(C,S){return!qd[S.localName]||qd[S.localName]===C.localName}function a(C,S){var b=Sw[C];if(!b)return null;var x=e.document.createElement(b),v=xw[C];return v&&S&&(x[v]=S.trim()),x}for(var s=e.document.createElement("div"),o=s,u,c=[];(u=n())!==null;){if(u[0]==="<"){if(u[1]==="/"){c.length&&c[c.length-1]===u.substr(2).replace(">","")&&(c.pop(),o=o.parentNode);continue}var l=ys(u.substr(1,u.length-2)),f;if(l){f=e.document.createProcessingInstruction("timestamp",l),o.appendChild(f);continue}var g=u.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!g||(f=a(g[1],g[3]),!f)||!i(o,f))continue;if(g[2]){var p=g[2].split(".");p.forEach(function(C){var S=/^bg_/.test(C),b=S?C.slice(3):C;if(Rd.hasOwnProperty(b)){var x=S?"background-color":"color",v=Rd[b];f.style[x]=v}}),f.className=p.join(" ")}c.push(g[1]),o.appendChild(f),o=f;continue}o.appendChild(e.document.createTextNode(r(u)))}return s}var Gd=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];function Iw(e){for(var t=0;t<Gd.length;t++){var n=Gd[t];if(e>=n[0]&&e<=n[1])return!0}return!1}function _w(e){var t=[],n="",r;if(!e||!e.childNodes)return"ltr";function i(o,u){for(var c=u.childNodes.length-1;c>=0;c--)o.push(u.childNodes[c])}function a(o){if(!o||!o.length)return null;var u=o.pop(),c=u.textContent||u.innerText;if(c){var l=c.match(/^.*(\n|\r)/);return l?(o.length=0,l[0]):c}if(u.tagName==="ruby")return a(o);if(u.childNodes)return i(o,u),a(o)}for(i(t,e);n=a(t);)for(var s=0;s<n.length;s++)if(r=n.charCodeAt(s),Iw(r))return"rtl";return"ltr"}function Cw(e){if(typeof e.line=="number"&&(e.snapToLines||e.line>=0&&e.line<=100))return e.line;if(!e.track||!e.track.textTrackList||!e.track.textTrackList.mediaElement)return-1;for(var t=e.track,n=t.textTrackList,r=0,i=0;i<n.length&&n[i]!==t;i++)n[i].mode==="showing"&&r++;return++r*-1}function $i(){}$i.prototype.applyStyles=function(e,t){t=t||this.div;for(var n in e)e.hasOwnProperty(n)&&(t.style[n]=e[n])},$i.prototype.formatStyle=function(e,t){return e===0?0:e+t};function Pi(e,t,n){$i.call(this),this.cue=t,this.cueDiv=Vd(e,t.text);var r={color:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(0, 0, 0, 0.8)",position:"relative",left:0,right:0,top:0,bottom:0,display:"inline",writingMode:t.vertical===""?"horizontal-tb":t.vertical==="lr"?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext"};this.applyStyles(r,this.cueDiv),this.div=e.document.createElement("div"),r={direction:_w(this.cueDiv),writingMode:t.vertical===""?"horizontal-tb":t.vertical==="lr"?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext",textAlign:t.align==="middle"?"center":t.align,font:n.font,whiteSpace:"pre-line",position:"absolute"},this.applyStyles(r),this.div.appendChild(this.cueDiv);var i=0;switch(t.positionAlign){case"start":case"line-left":i=t.position;break;case"center":i=t.position-t.size/2;break;case"end":case"line-right":i=t.position-t.size;break}t.vertical===""?this.applyStyles({left:this.formatStyle(i,"%"),width:this.formatStyle(t.size,"%")}):this.applyStyles({top:this.formatStyle(i,"%"),height:this.formatStyle(t.size,"%")}),this.move=function(a){this.applyStyles({top:this.formatStyle(a.top,"px"),bottom:this.formatStyle(a.bottom,"px"),left:this.formatStyle(a.left,"px"),right:this.formatStyle(a.right,"px"),height:this.formatStyle(a.height,"px"),width:this.formatStyle(a.width,"px")})}}Pi.prototype=bs($i.prototype),Pi.prototype.constructor=Pi;function je(e){var t,n,r,i;if(e.div){n=e.div.offsetHeight,r=e.div.offsetWidth,i=e.div.offsetTop;var a=(a=e.div.childNodes)&&(a=a[0])&&a.getClientRects&&a.getClientRects();e=e.div.getBoundingClientRect(),t=a?Math.max(a[0]&&a[0].height||0,e.height/a.length):0}this.left=e.left,this.right=e.right,this.top=e.top||i,this.height=e.height||n,this.bottom=e.bottom||i+(e.height||n),this.width=e.width||r,this.lineHeight=t!==void 0?t:e.lineHeight}je.prototype.move=function(e,t){switch(t=t!==void 0?t:this.lineHeight,e){case"+x":this.left+=t,this.right+=t;break;case"-x":this.left-=t,this.right-=t;break;case"+y":this.top+=t,this.bottom+=t;break;case"-y":this.top-=t,this.bottom-=t;break}},je.prototype.overlaps=function(e){return this.left<e.right&&this.right>e.left&&this.top<e.bottom&&this.bottom>e.top},je.prototype.overlapsAny=function(e){for(var t=0;t<e.length;t++)if(this.overlaps(e[t]))return!0;return!1},je.prototype.within=function(e){return this.top>=e.top&&this.bottom<=e.bottom&&this.left>=e.left&&this.right<=e.right},je.prototype.overlapsOppositeAxis=function(e,t){switch(t){case"+x":return this.left<e.left;case"-x":return this.right>e.right;case"+y":return this.top<e.top;case"-y":return this.bottom>e.bottom}},je.prototype.intersectPercentage=function(e){var t=Math.max(0,Math.min(this.right,e.right)-Math.max(this.left,e.left)),n=Math.max(0,Math.min(this.bottom,e.bottom)-Math.max(this.top,e.top)),r=t*n;return r/(this.height*this.width)},je.prototype.toCSSCompatValues=function(e){return{top:this.top-e.top,bottom:e.bottom-this.bottom,left:this.left-e.left,right:e.right-this.right,height:this.height,width:this.width}},je.getSimpleBoxPosition=function(e){var t=e.div?e.div.offsetHeight:e.tagName?e.offsetHeight:0,n=e.div?e.div.offsetWidth:e.tagName?e.offsetWidth:0,r=e.div?e.div.offsetTop:e.tagName?e.offsetTop:0;e=e.div?e.div.getBoundingClientRect():e.tagName?e.getBoundingClientRect():e;var i={left:e.left,right:e.right,top:e.top||r,height:e.height||t,bottom:e.bottom||r+(e.height||t),width:e.width||n};return i};function ww(e,t,n,r){function i(b,x){for(var v,w=new je(b),T=1,_=0;_<x.length;_++){for(;b.overlapsOppositeAxis(n,x[_])||b.within(n)&&b.overlapsAny(r);)b.move(x[_]);if(b.within(n))return b;var I=b.intersectPercentage(n);T>I&&(v=new je(b),T=I),b=new je(w)}return v||w}var a=new je(t),s=t.cue,o=Cw(s),u=[];if(s.snapToLines){var c;switch(s.vertical){case"":u=["+y","-y"],c="height";break;case"rl":u=["+x","-x"],c="width";break;case"lr":u=["-x","+x"],c="width";break}var l=a.lineHeight,f=l*Math.round(o),g=n[c]+l,p=u[0];Math.abs(f)>g&&(f=f<0?-1:1,f*=Math.ceil(g/l)*l),o<0&&(f+=s.vertical===""?n.height:n.width,u=u.reverse()),a.move(p,f)}else{var C=a.lineHeight/n.height*100;switch(s.lineAlign){case"center":o-=C/2;break;case"end":o-=C;break}switch(s.vertical){case"":t.applyStyles({top:t.formatStyle(o,"%")});break;case"rl":t.applyStyles({left:t.formatStyle(o,"%")});break;case"lr":t.applyStyles({right:t.formatStyle(o,"%")});break}u=["+y","-x","+x","-y"],a=new je(t)}var S=i(a,u);t.move(S.toCSSCompatValues(n))}function mn(){}mn.StringDecoder=function(){return{decode:function(e){if(!e)return"";if(typeof e!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}},mn.convertCueToDOMTree=function(e,t){return!e||!t?null:Vd(e,t)};var Ow=.05,Ew="sans-serif",Tw="1.5%";mn.processCues=function(e,t,n){if(!e||!t||!n)return null;for(;n.firstChild;)n.removeChild(n.firstChild);var r=e.document.createElement("div");r.style.position="absolute",r.style.left="0",r.style.right="0",r.style.top="0",r.style.bottom="0",r.style.margin=Tw,n.appendChild(r);function i(l){for(var f=0;f<l.length;f++)if(l[f].hasBeenReset||!l[f].displayState)return!0;return!1}if(!i(t)){for(var a=0;a<t.length;a++)r.appendChild(t[a].displayState);return}var s=[],o=je.getSimpleBoxPosition(r),u=Math.round(o.height*Ow*100)/100,c={font:u+"px "+Ew};(function(){for(var l,f,g=0;g<t.length;g++)f=t[g],l=new Pi(e,f,c),r.appendChild(l.div),ww(e,l,o,s),f.displayState=l.div,s.push(je.getSimpleBoxPosition(l))})()},mn.Parser=function(e,t,n){n||(n=t,t={}),t||(t={}),this.window=e,this.vttjs=t,this.state="INITIAL",this.buffer="",this.decoder=n||new TextDecoder("utf8"),this.regionList=[]},mn.Parser.prototype={reportOrThrowError:function(e){if(e instanceof We)this.onparsingerror&&this.onparsingerror(e);else throw e},parse:function(e){var t=this;e&&(t.buffer+=t.decoder.decode(e,{stream:!0}));function n(){for(var l=t.buffer,f=0;f<l.length&&l[f]!=="\r"&&l[f]!==`
`;)++f;var g=l.substr(0,f);return l[f]==="\r"&&++f,l[f]===`
`&&++f,t.buffer=l.substr(f),g}function r(l){var f=new ir;if(ar(l,function(p,C){switch(p){case"id":f.set(p,C);break;case"width":f.percent(p,C);break;case"lines":f.integer(p,C);break;case"regionanchor":case"viewportanchor":var S=C.split(",");if(S.length!==2)break;var b=new ir;if(b.percent("x",S[0]),b.percent("y",S[1]),!b.has("x")||!b.has("y"))break;f.set(p+"X",b.get("x")),f.set(p+"Y",b.get("y"));break;case"scroll":f.alt(p,C,["up"]);break}},/=/,/\s/),f.has("id")){var g=new(t.vttjs.VTTRegion||t.window.VTTRegion);g.width=f.get("width",100),g.lines=f.get("lines",3),g.regionAnchorX=f.get("regionanchorX",0),g.regionAnchorY=f.get("regionanchorY",100),g.viewportAnchorX=f.get("viewportanchorX",0),g.viewportAnchorY=f.get("viewportanchorY",100),g.scroll=f.get("scroll",""),t.onregion&&t.onregion(g),t.regionList.push({id:f.get("id"),region:g})}}function i(l){var f=new ir;ar(l,function(g,p){switch(g){case"MPEGT":f.integer(g+"S",p);break;case"LOCA":f.set(g+"L",ys(p));break}},/[^\d]:/,/,/),t.ontimestampmap&&t.ontimestampmap({MPEGTS:f.get("MPEGTS"),LOCAL:f.get("LOCAL")})}function a(l){l.match(/X-TIMESTAMP-MAP/)?ar(l,function(f,g){switch(f){case"X-TIMESTAMP-MAP":i(g);break}},/=/):ar(l,function(f,g){switch(f){case"Region":r(g);break}},/:/)}try{var s;if(t.state==="INITIAL"){if(!/\r\n|\n/.test(t.buffer))return this;s=n();var o=s.match(/^WEBVTT([ \t].*)?$/);if(!o||!o[0])throw new We(We.Errors.BadSignature);t.state="HEADER"}for(var u=!1;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this;switch(u?u=!1:s=n(),t.state){case"HEADER":/:/.test(s)?a(s):s||(t.state="ID");continue;case"NOTE":s||(t.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(s)){t.state="NOTE";break}if(!s)continue;t.cue=new(t.vttjs.VTTCue||t.window.VTTCue)(0,0,"");try{t.cue.align="center"}catch{t.cue.align="middle"}if(t.state="CUE",s.indexOf("-->")===-1){t.cue.id=s;continue}case"CUE":try{yw(s,t.cue,t.regionList)}catch(l){t.reportOrThrowError(l),t.cue=null,t.state="BADCUE";continue}t.state="CUETEXT";continue;case"CUETEXT":var c=s.indexOf("-->")!==-1;if(!s||c&&(u=!0)){t.oncue&&t.oncue(t.cue),t.cue=null,t.state="ID";continue}t.cue.text&&(t.cue.text+=`
`),t.cue.text+=s.replace(/\u2028/g,`
`).replace(/u2029/g,`
`);continue;case"BADCUE":s||(t.state="ID");continue}}}catch(l){t.reportOrThrowError(l),t.state==="CUETEXT"&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state=t.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this},flush:function(){var e=this;try{if(e.buffer+=e.decoder.decode(),(e.cue||e.state==="HEADER")&&(e.buffer+=`

`,e.parse()),e.state==="INITIAL")throw new We(We.Errors.BadSignature)}catch(t){e.reportOrThrowError(t)}return e.onflush&&e.onflush(),this}};var Dw=mn,$w="auto",Pw={"":1,lr:1,rl:1},Mw={start:1,center:1,end:1,left:1,right:1,auto:1,"line-left":1,"line-right":1};function Fw(e){if(typeof e!="string")return!1;var t=Pw[e.toLowerCase()];return t?e.toLowerCase():!1}function xs(e){if(typeof e!="string")return!1;var t=Mw[e.toLowerCase()];return t?e.toLowerCase():!1}function Ud(e,t,n){this.hasBeenReset=!1;var r="",i=!1,a=e,s=t,o=n,u=null,c="",l=!0,f="auto",g="start",p="auto",C="auto",S=100,b="center";Object.defineProperties(this,{id:{enumerable:!0,get:function(){return r},set:function(x){r=""+x}},pauseOnExit:{enumerable:!0,get:function(){return i},set:function(x){i=!!x}},startTime:{enumerable:!0,get:function(){return a},set:function(x){if(typeof x!="number")throw new TypeError("Start time must be set to a number.");a=x,this.hasBeenReset=!0}},endTime:{enumerable:!0,get:function(){return s},set:function(x){if(typeof x!="number")throw new TypeError("End time must be set to a number.");s=x,this.hasBeenReset=!0}},text:{enumerable:!0,get:function(){return o},set:function(x){o=""+x,this.hasBeenReset=!0}},region:{enumerable:!0,get:function(){return u},set:function(x){u=x,this.hasBeenReset=!0}},vertical:{enumerable:!0,get:function(){return c},set:function(x){var v=Fw(x);if(v===!1)throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.");c=v,this.hasBeenReset=!0}},snapToLines:{enumerable:!0,get:function(){return l},set:function(x){l=!!x,this.hasBeenReset=!0}},line:{enumerable:!0,get:function(){return f},set:function(x){if(typeof x!="number"&&x!==$w)throw new SyntaxError("Line: an invalid number or illegal string was specified.");f=x,this.hasBeenReset=!0}},lineAlign:{enumerable:!0,get:function(){return g},set:function(x){var v=xs(x);v?(g=v,this.hasBeenReset=!0):console.warn("lineAlign: an invalid or illegal string was specified.")}},position:{enumerable:!0,get:function(){return p},set:function(x){if(x<0||x>100)throw new Error("Position must be between 0 and 100.");p=x,this.hasBeenReset=!0}},positionAlign:{enumerable:!0,get:function(){return C},set:function(x){var v=xs(x);v?(C=v,this.hasBeenReset=!0):console.warn("positionAlign: an invalid or illegal string was specified.")}},size:{enumerable:!0,get:function(){return S},set:function(x){if(x<0||x>100)throw new Error("Size must be between 0 and 100.");S=x,this.hasBeenReset=!0}},align:{enumerable:!0,get:function(){return b},set:function(x){var v=xs(x);if(!v)throw new SyntaxError("align: an invalid or illegal alignment string was specified.");b=v,this.hasBeenReset=!0}}}),this.displayState=void 0}Ud.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)};var Nw=Ud,kw={"":!0,up:!0};function Aw(e){if(typeof e!="string")return!1;var t=kw[e.toLowerCase()];return t?e.toLowerCase():!1}function sr(e){return typeof e=="number"&&e>=0&&e<=100}function Lw(){var e=100,t=3,n=0,r=100,i=0,a=100,s="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return e},set:function(o){if(!sr(o))throw new Error("Width must be between 0 and 100.");e=o}},lines:{enumerable:!0,get:function(){return t},set:function(o){if(typeof o!="number")throw new TypeError("Lines must be set to a number.");t=o}},regionAnchorY:{enumerable:!0,get:function(){return r},set:function(o){if(!sr(o))throw new Error("RegionAnchorX must be between 0 and 100.");r=o}},regionAnchorX:{enumerable:!0,get:function(){return n},set:function(o){if(!sr(o))throw new Error("RegionAnchorY must be between 0 and 100.");n=o}},viewportAnchorY:{enumerable:!0,get:function(){return a},set:function(o){if(!sr(o))throw new Error("ViewportAnchorY must be between 0 and 100.");a=o}},viewportAnchorX:{enumerable:!0,get:function(){return i},set:function(o){if(!sr(o))throw new Error("ViewportAnchorX must be between 0 and 100.");i=o}},scroll:{enumerable:!0,get:function(){return s},set:function(o){var u=Aw(o);u===!1?console.warn("Scroll: an invalid or illegal string was specified."):s=u}}})}var jw=Lw,ft=gw,jt=Ld.exports={WebVTT:Dw,VTTCue:Nw,VTTRegion:jw};ft.vttjs=jt,ft.WebVTT=jt.WebVTT;var Bw=jt.VTTCue,Rw=jt.VTTRegion,qw=ft.VTTCue,Vw=ft.VTTRegion;jt.shim=function(){ft.VTTCue=Bw,ft.VTTRegion=Rw},jt.restore=function(){ft.VTTCue=qw,ft.VTTRegion=Vw},ft.VTTCue||jt.shim();var zd=Ld.exports;function Gw(e,t){const n=[],r=new zd.WebVTT.Parser(window,zd.WebVTT.StringDecoder());return r.oncue=i=>{const a=i.text.match(/^([^#]*)#xywh=(\d+),(\d+),(\d+),(\d+)$/i);a&&n.push({url:new URL(a[1],e).href,start:i.startTime,end:i.endTime,x:Number(a[2]),y:Number(a[3]),w:Number(a[4]),h:Number(a[5])})},r.parse(t),r.flush(),n}function Uw(e){const[t,n]=O.useState();return O.useEffect(()=>{if(!e){n(void 0);return}fetch(e).then(r=>{if(!r.ok){n(null);return}r.text().then(i=>{n(Gw(e,i))})})},[e]),t}function zw(e,t,n){const r=O.useRef(e);return r.current=e,O.useCallback(g_(function(){return r.current.apply(this,arguments)},t,n),[t,n==null?void 0:n.leading,n==null?void 0:n.trailing,n==null?void 0:n.maxWait])}const Is=window.TouchEvent!==void 0,Hw=({totalSprites:e,activeIndex:t,setActiveIndex:n,onClick:r,disabled:i})=>{function a(l){const{width:f}=l.currentTarget.getBoundingClientRect();let g=0;l.nativeEvent instanceof MouseEvent?g=l.nativeEvent.offsetX:Is&&l.nativeEvent instanceof TouchEvent&&(g=l.nativeEvent.touches[0].clientX-l.currentTarget.getBoundingClientRect().x);const p=Math.round(g/f*(e-1));return p<0?0:p>=e?e-1:p}function s(l){const f=l.currentTarget;l instanceof MouseEvent&&f!==l.target||Is&&l instanceof TouchEvent&&document.elementFromPoint(l.touches[0].clientX,l.touches[0].clientY)||n(a(l))}function o(){n(void 0)}function u(l){if(!r)return;if(i){l.preventDefault();return}const f=l.currentTarget;if(l instanceof MouseEvent&&f!==l.target||Is&&l instanceof TouchEvent&&document.elementFromPoint(l.touches[0].clientX,l.touches[0].clientY))return;l.preventDefault(),l.stopPropagation();const g=a(l);g!==void 0&&r(g)}const c=O.useMemo(()=>t===void 0||!e?{}:{width:`${(t+1)/e*100}%`},[t,e]);return d.jsxs("div",{className:Ge("hover-scrubber",{"hover-scrubber-inactive":!e}),children:[d.jsx("div",{className:"hover-scrubber-area",onMouseMove:s,onTouchMove:s,onMouseLeave:o,onTouchEnd:o,onTouchCancel:o,onClick:u}),d.jsx("div",{className:"hover-scrubber-indicator",children:t!==void 0&&d.jsx("div",{className:"hover-scrubber-indicator-marker",style:c})})]})};function Ww(e,t){const n=t.width/e.w,r=t.height/e.h;return e.w>e.h?Math.max(n,r):Math.min(n,r)}const Yw=81,Qw=({vttPath:e,onClick:t,disabled:n})=>{const r=O.useRef(null),[i,a]=O.useState({}),[s,o]=O.useState(),u=zw(o,50),[c,l]=O.useState(!1),f=Uw(c?e:void 0),g=O.useMemo(()=>{if(!f)return{x:0,y:0};const b=Math.max(...f.map(v=>v.x+v.w)),x=Math.max(...f.map(v=>v.y+v.h));return{x:b,y:x}},[f]),p=O.useMemo(()=>{if(!(!f||s===void 0))return f[s]},[s,f]);O.useEffect(()=>{s!==void 0&&l(!0)},[s]),O.useLayoutEffect(()=>{const b=r.current;if(!p||!b)return a({});const x=b.getBoundingClientRect(),v=Ww(p,x);a({backgroundPosition:`${-p.x*v}px ${-p.y*v}px`,backgroundImage:`url(${p.url})`,backgroundSize:`${g.x*v}px ${g.y*v}px`,width:`${p.w*v}px`,height:`${p.h*v}px`})},[p,g]);const C=O.useMemo(()=>p?Fe.secondsToTimestamp(p.start):void 0,[p]);function S(b){if(!t||!f)return;const x=f[b];t(x.start)}return f===null||!e?null:d.jsxs("div",{className:"preview-scrubber",children:[p&&d.jsxs("div",{className:"scene-card-preview-image",ref:r,children:[d.jsx("div",{className:"scrubber-image",style:i}),C!==void 0&&d.jsx("div",{className:"scrubber-timestamp",children:C})]}),d.jsx(Hw,{totalSprites:(f==null?void 0:f.length)??Yw,activeIndex:s,setActiveIndex:b=>u(b),onClick:S,disabled:n})]})},Kw=({studio:e,disabled:t})=>{const{configuration:n}=mt(),r=n==null?void 0:n.interface.showStudioAsText,i=O.useMemo(()=>!!(r||!(e!=null&&e.image_path)||new URL(e.image_path).searchParams.get("default")==="true"),[r,e==null?void 0:e.image_path]);function a(s){t&&s.preventDefault()}return e?d.jsx("div",{className:"studio-overlay",children:d.jsx(Ke.Link,{to:`/studios/${e.id}`,onClick:a,children:i?e.name:d.jsx("img",{className:"image-thumbnail",loading:"lazy",alt:e.name,src:e.image_path??""})})}):null},Jw=({group:e,linkType:t,description:n})=>d.jsxs("div",{className:"group-tag-container",children:[d.jsx(Ke.Link,{to:`/groups/${e.id}`,className:"group-tag col m-auto zoom-2",children:d.jsx("img",{className:"image-thumbnail",alt:e.name??"",src:e.front_image_path??""})}),d.jsx(uw,{group:e,description:n,linkType:t,className:"d-block"})]}),Xw=({size:e})=>{const{size:t,unit:n}=Fe.fileSize(e);return d.jsxs(d.Fragment,{children:[d.jsx(Se.FormattedNumber,{value:t,maximumFractionDigits:Fe.fileSizeFractionalDigits(n)}),` ${Fe.formatFileSizeUnit(n)}`]})},Zw=he("SweatDrops",()=>d.jsx("span",{children:d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",style:{transform:"rotate(360deg)"},preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 36 36",children:[d.jsx("path",{fill:"currentColor",d:"M22.855.758L7.875 7.024l12.537 9.733c2.633 2.224 6.377 2.937 9.77 1.518c4.826-2.018 7.096-7.576 5.072-12.413C33.232 1.024 27.68-1.261 22.855.758zm-9.962 17.924L2.05 10.284L.137 23.529a7.993 7.993 0 0 0 2.958 7.803a8.001 8.001 0 0 0 9.798-12.65zm15.339 7.015l-8.156-4.69l-.033 9.223c-.088 2 .904 3.98 2.75 5.041a5.462 5.462 0 0 0 7.479-2.051c1.499-2.644.589-6.013-2.04-7.523z"}),d.jsx("rect",{x:"0",y:"0",width:"36",height:"36",fill:"rgba(0, 0, 0, 0)"})]})})),eO=({value:e,icon:t,onIncrement:n,onValueClicked:r,title:i,countTitle:a,dataAction:s})=>d.jsxs(z.ButtonGroup,{className:Ge("count-button",{"increment-only":!r}),"data-action":s,children:[d.jsx(z.Button,{className:"minimal count-icon",variant:"secondary",onClick:()=>n==null?void 0:n(),title:i,children:t}),d.jsx(z.Button,{className:"minimal count-value",variant:"secondary",onClick:()=>{var o;return(o=r??n)==null?void 0:o()},title:r?a:void 0,children:d.jsx("span",{children:e})})]}),tO=e=>{const t=Se.useIntl(),{configuration:n}=mt(),{sfwContentMode:r}=n.interface,i=r?d.jsx(Ee,{icon:ce.faThumbsUp}):d.jsx(Zw,{}),a=r?"o_count_sfw":"o_count";return d.jsx(eO,{...e,icon:i,title:t.formatMessage({id:a}),countTitle:t.formatMessage({id:"actions.view_history"}),dataAction:"o-counter"})},nO=O.memo(({image:e,video:t,isPortrait:n,soundActive:r,vttPath:i,onScrubberClick:a,disabled:s,volume:o})=>{const u=O.useRef(null);return O.useEffect(()=>{const c=new IntersectionObserver(l=>{l.forEach(f=>{var g,p,C;f.intersectionRatio>0?(p=(g=u.current)==null?void 0:g.play())==null||p.catch(()=>{}):(C=u.current)==null||C.pause()})});return u.current&&c.observe(u.current),()=>c.disconnect()},[]),O.useEffect(()=>{var c;(c=u==null?void 0:u.current)!=null&&c.volume&&(u.current.volume=r?(o??0)/100:0)},[o,r]),d.jsxs("div",{className:Ge("scene-card-preview",{portrait:n}),children:[d.jsx("img",{className:"scene-card-preview-image",loading:"lazy",src:e,alt:""}),d.jsx("video",{disableRemotePlayback:!0,playsInline:!0,muted:!r,className:"scene-card-preview-video",loop:!0,preload:"none",ref:u,src:t}),d.jsx(Qw,{vttPath:i,onClick:a,disabled:s})]})}),rO=({sceneNumber:e})=>e?d.jsxs(d.Fragment,{children:[d.jsx("hr",{}),e!==void 0&&d.jsxs("span",{className:"scene-group-scene-number",children:[d.jsx(Se.FormattedMessage,{id:"scene"})," #",e]})]}):null,iO=O.memo(he("SceneCard.Popovers",e=>{const t=O.useMemo(()=>e.scene.files.length>0?e.scene.files[0]:void 0,[e.scene]),n=O.useMemo(()=>{if(!e.fromGroupId)return;const g=e.scene.groups.find(p=>p.group.id===e.fromGroupId);return(g==null?void 0:g.scene_index)??void 0},[e.fromGroupId,e.scene.groups]);function r(){if(e.scene.tags.length<=0)return;const g=e.scene.tags.map(p=>d.jsx(dw,{tag:p},p.id));return d.jsx(Ft,{className:"tag-count",placement:"bottom",content:g,children:d.jsxs(z.Button,{className:"minimal",children:[d.jsx(Ee,{icon:ce.faTag}),d.jsx("span",{children:e.scene.tags.length})]})})}function i(){if(!(e.scene.performers.length<=0))return d.jsx(pw,{performers:e.scene.performers,linkType:"scene"})}function a(){if(e.scene.groups.length<=0)return;const g=e.scene.groups.map(p=>d.jsx(Jw,{group:p.group},p.group.id));return d.jsx(Ft,{placement:"bottom",content:g,className:"group-count tag-tooltip",children:d.jsxs(z.Button,{className:"minimal",children:[d.jsx(Ee,{icon:ce.faFilm}),d.jsx("span",{children:e.scene.groups.length})]})})}function s(){if(e.scene.scene_markers.length<=0)return;const g=e.scene.scene_markers.map(p=>{const C={...p,scene:{id:e.scene.id}};return d.jsx(cw,{marker:C},p.id)});return d.jsx(Ft,{className:"marker-count",placement:"bottom",content:g,children:d.jsxs(z.Button,{className:"minimal",children:[d.jsx(Ee,{icon:ce.faMapMarkerAlt}),d.jsx("span",{children:e.scene.scene_markers.length})]})})}function o(){if(e.scene.o_counter)return d.jsx(tO,{value:e.scene.o_counter})}function u(){if(e.scene.galleries.length<=0)return;const g=e.scene.galleries.map(p=>d.jsx(lw,{gallery:p},p.id));return d.jsx(Ft,{className:"gallery-count",placement:"bottom",content:g,children:d.jsxs(z.Button,{className:"minimal",children:[d.jsx(Ee,{icon:ce.faImages}),d.jsx("span",{children:e.scene.galleries.length})]})})}function c(){if(e.scene.organized)return d.jsx(z.OverlayTrigger,{overlay:d.jsx(z.Tooltip,{id:"organised-tooltip",children:"Organized"}),placement:"bottom",children:d.jsx("div",{className:"organized",children:d.jsx(z.Button,{className:"minimal",children:d.jsx(Ee,{icon:ce.faBox})})})})}function l(){const g=t?t.fingerprints.find(p=>p.type==="phash"):void 0;if(g)return d.jsx("div",{className:"other-copies extra-scene-info",children:d.jsx(z.Button,{href:me.makeScenesPHashMatchUrl(g.value),className:"minimal",children:d.jsx(Ee,{icon:ce.faCopy})})})}function f(){var g;if(!e.compact&&(e.scene.tags.length>0||e.scene.performers.length>0||e.scene.groups.length>0||e.scene.scene_markers.length>0||(g=e.scene)!=null&&g.o_counter||e.scene.galleries.length>0||e.scene.organized||n!==void 0))return d.jsxs(d.Fragment,{children:[d.jsx(rO,{sceneNumber:n}),d.jsx("hr",{}),d.jsxs(z.ButtonGroup,{className:"card-popovers",children:[r(),i(),a(),s(),o(),u(),c(),l()]})]})}return d.jsx(d.Fragment,{children:f()})})),aO=O.memo(he("SceneCard.Details",e=>d.jsxs("div",{className:"scene-card__details",children:[d.jsx("span",{className:"scene-card__date",children:e.scene.date}),d.jsx("span",{className:"file-path extra-scene-info",children:I_(e.scene)}),d.jsx(Zn,{className:"scene-card__description",text:e.scene.details,lineCount:3})]}))),sO=O.memo(he("SceneCard.Overlays",e=>O.useMemo(()=>d.jsx(Kw,{studio:e.scene.studio,disabled:e.selecting}),[e.scene.studio,e.selecting]))),oO=O.memo(he("SceneCard.SceneSpecs",({scene:e})=>{var n;const t=(n=e.files)==null?void 0:n[0];return t?d.jsxs("div",{className:"scene-specs-overlay",children:[d.jsx("span",{className:"overlay-filesize extra-scene-info",children:d.jsx(Xw,{size:t.size})}),t.width&&t.height?d.jsx("span",{className:"overlay-resolution",children:Fe.resolution(t.width,t.height)}):"",t.duration>0?d.jsx("span",{className:"overlay-duration",children:Fe.secondsToTimestamp(t.duration)}):""]}):null})),uO=O.memo(he("SceneCard.Image",e=>{var u;const t=Ke.useHistory(),{configuration:n}=mt(),r=(n==null?void 0:n.interface.continuePlaylistDefault)??!1,i=O.useMemo(()=>e.scene.files.length>0?e.scene.files[0]:void 0,[e.scene]);function a(){return d.jsx("div",{className:"scene-interactive-speed-overlay",children:e.scene.interactive_speed??""})}const s=O.useCallback(c=>{if(e.selecting)return;const l=e.queue?e.queue.makeLink(e.scene.id,{sceneIndex:e.index,continue:r,start:c}):`/scenes/${e.scene.id}?t=${c}`;t.push(l)},[e.selecting,e.queue,e.scene.id,e.index,r,t]);function o(){const c=i!=null&&i.width?i.width:0;return(i!=null&&i.height?i.height:0)>c}return d.jsxs(d.Fragment,{children:[d.jsx(nO,{image:e.scene.paths.screenshot??void 0,video:e.scene.paths.preview??void 0,isPortrait:o(),soundActive:((u=n==null?void 0:n.interface)==null?void 0:u.soundOnPreview)??!1,volume:(n==null?void 0:n.ui.previewVolume)??Km,vttPath:e.scene.paths.vtt??void 0,onScrubberClick:s,disabled:e.selecting}),d.jsx(mw,{rating:e.scene.rating100}),d.jsx(oO,{scene:e.scene}),a()]})})),cO=O.memo(he("SceneCard",e=>{const{configuration:t}=mt(),n=O.useMemo(()=>e.scene.files.length>0?e.scene.files[0]:void 0,[e.scene]);function r(){return!e.compact&&e.zoomIndex!==void 0?`zoom-${e.zoomIndex}`:""}function i(){return e.scene.files.length?"":"fileless"}const a=(t==null?void 0:t.interface.continuePlaylistDefault)??!1,s=e.queue?e.queue.makeLink(e.scene.id,{sceneIndex:e.index,continue:a}):`/scenes/${e.scene.id}`;return d.jsx(Ad,{className:`scene-card ${r()} ${i()}`,url:s,title:vd(e.scene),width:e.width,linkClassName:"scene-card-link",thumbnailSectionClassName:"video-section",resumeTime:e.scene.resume_time??void 0,duration:(n==null?void 0:n.duration)??void 0,interactiveHeatmap:e.scene.interactive_speed?e.scene.paths.interactive_heatmap??void 0:void 0,image:d.jsx(uO,{...e}),overlays:d.jsx(sO,{...e}),details:d.jsx(aO,{...e}),popovers:d.jsx(iO,{...e}),selected:e.selected,selecting:e.selecting,onSelectedChanged:e.onSelectedChanged})}));class gn{constructor(){X(this,"query");X(this,"entries");X(this,"originalQueryPage");X(this,"originalQueryPageSize")}static fromListFilterModel(t){const n=new gn,r=t.clone();return r.itemsPerPage=40,n.originalQueryPage=t.currentPage,n.originalQueryPageSize=t.itemsPerPage,n.query=r,n}static fromSceneIDList(t){const n=new gn;return n.entries=t.map(r=>({id:Number(r)})),n}static fromSceneIDTimeList(t){const n=new gn;return n.entries=t.map(r=>({id:Number(r.id),start:r.start})),n}makeQueryParameters(t,n){const r=[];if(this.query){const i=this.query.getEncodedParams();i.sortby&&r.push(`qsort=${i.sortby}`),i.sortdir&&r.push(`qsortd=${i.sortdir}`),i.q&&r.push(`qfq=${i.q}`);for(const s of i.c??[])r.push(`qfc=${s}`);let a=i.p??"1";if(n!==void 0)a=String(n);else if(t!==void 0&&this.originalQueryPage!==void 0&&this.originalQueryPageSize!==void 0){const s=t+(this.originalQueryPage-1)*this.originalQueryPageSize,o=Math.floor(s/this.query.itemsPerPage)+1;a=String(o)}r.push(`qfp=${a}`)}else if(this.entries&&this.entries.length>0){const i=this.entries.some(a=>a.start!==void 0);for(const a of this.entries)r.push(`qs=${a.id}`);if(i)for(const a of this.entries)r.push(`qt=${a.start!==void 0?a.start:""}`);t!==void 0&&r.push(`qi=${t}`)}return r.join("&")}static fromQueryParameters(t){const n=new gn;if(t.has("qfp")){const r={sortby:t.get("qsort"),sortdir:t.get("qsortd"),q:t.get("qfq"),p:t.get("qfp"),c:t.getAll("qfc")},i=ie.decodeParams(r),a=new ie(J.Scenes);a.configureFromDecodedParams(i),n.query=a}else if(t.has("qs")){const r=t.getAll("qs"),i=t.has("qt")?t.getAll("qt"):void 0;n.entries=r.map((a,s)=>{const o=Number(a),u=i==null?void 0:i[s];if(!u)return{id:o};const c=Number(u);return{id:o,start:Number.isNaN(c)?void 0:c}})}return n}makeLink(t,n){const r=[this.makeQueryParameters(n.sceneIndex,n.newPage)];return n.autoPlay&&r.push("autoplay=true"),n.continue!==void 0&&r.push("continue="+n.continue),n.start!==void 0&&r.push("t="+n.start),`/scenes/${t}${r.length?"?"+r.join("&"):""}`}}const{PluginApi:yt}=window,{React:Hd}=yt,{useState:Ye,useEffect:lO}=Hd,dO=yt.libraries.Bootstrap,{Nav:fO,Button:_s,Form:Ae,Alert:Cs,ProgressBar:pO,Spinner:ws}=dO,{NavLink:mO}=yt.libraries.ReactRouterDOM,{FontAwesomeIcon:gO}=yt.libraries.ReactFontAwesome,hO=yt.libraries.FontAwesomeSolid,Wd="subtitleMarkers",Yd="/subtitle-markers",vO=1e3;function Os(e,t){return fetch("/graphql",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,variables:t})}).then(n=>n.json()).then(n=>{if(n.errors&&n.errors.length)throw new Error(n.errors.map(r=>r.message).join("; "));return n.data})}function bO(e,t){return Os(`mutation SubtitleMarkersRunTask($plugin_id: ID!, $description: String, $args_map: Map) {
      runPluginTask(plugin_id: $plugin_id, description: $description, args_map: $args_map)
    }`,{plugin_id:Wd,description:t,args_map:e}).then(n=>n.runPluginTask)}function yO(e){return Os("query SubtitleMarkersFindJob($id: ID!) { findJob(input: { id: $id }) { status progress error } }",{id:e}).then(t=>t.findJob)}function SO(e){return Os(`mutation SubtitleMarkersSearch($plugin_id: ID!, $args: Map) {
      runPluginOperation(plugin_id: $plugin_id, args: $args)
    }`,{plugin_id:Wd,args:e}).then(t=>t.runPluginOperation)}const Es=["READY","RUNNING","STOPPING"],xO={READY:"Starting…",RUNNING:"Searching…",STOPPING:"Stopping…",FINISHED:"Done.",CANCELLED:"Cancelled.",FAILED:"Failed."};function IO({libraryPaths:e}){const[t,n]=Ye(""),[r,i]=Ye(""),[a,s]=Ye(!1),[o,u]=Ye(""),[c,l]=Ye(""),[f,g]=Ye(!1),[p,C]=Ye(null),[S,b]=Ye(null),[x,v]=Ye(!1),[w,T]=Ye(null),[_,I]=Ye(null),[h,E]=Ye(null),[D,$]=Ye(null),[q,{width:W}]=kC(),ne=AC(W,1,[280,340,480,640]),ee=f||S!==null&&Es.includes(S.status),M=ee||x,L=!!t.trim()&&!!r.trim()&&(!a||!!o)&&!M;lO(()=>{if(!p)return;let P=!1,j;const R=()=>{yO(p).then(A=>{P||(b(A),A&&Es.includes(A.status)&&(j=setTimeout(R,vO)))}).catch(A=>{P||b({status:"FAILED",progress:null,error:String(A&&A.message?A.message:A)})})};return R(),()=>{P=!0,clearTimeout(j)}},[p]);function k(){const P=r.trim();g(!0),b(null),bO({path:t.trim(),search:P,tagId:o,title:c.trim()},`Searching subtitles for "${P}"`).then(j=>{g(!1),C(j)}).catch(j=>{g(!1),b({status:"FAILED",progress:null,error:String(j&&j.message?j.message:j)})})}function U(){v(!0),I(null),T(null),E(null),$(null),SO({mode:"search",path:t.trim(),search:r.trim()}).then(P=>{v(!1),T(P.results),te(P.results)}).catch(P=>{v(!1),I(String(P&&P.message?P.message:P))})}function te(P){const j=Array.from(new Set(P.map(R=>Number(R.sceneId)))).filter(R=>!Number.isNaN(R));if(j.length===0){E(new Map);return}Rm(j).then(R=>{var ae,Pe;const A=new Map;(((Pe=(ae=R.data)==null?void 0:ae.findScenes)==null?void 0:Pe.scenes)??[]).forEach(Be=>A.set(Be.id,Be)),E(A)}).catch(R=>{$(String(R&&R.message?R.message:R)),E(new Map)})}function ue(P,j){const R=P.target;!R.closest(".scene-card-link")&&!R.closest(".card-section-title")||(P.preventDefault(),P.stopPropagation(),window.open(`/scenes/${j.sceneId}?t=${j.seconds}`,"_blank"))}function F(){a?k():U()}function B(){if(!S)return null;const P=Math.round((S.progress||0)*100);return d.jsxs("div",{className:"subtitle-markers-status mt-3",children:[Es.includes(S.status)&&d.jsx(pO,{now:P,label:`${P}%`,animated:!0}),d.jsxs("p",{className:S.status==="FAILED"?"text-danger":"text-muted",children:[xO[S.status],S.status==="FINISHED"&&" Marker preview generation has been queued for anything created. See Settings → Logs for how many markers were created."]}),S.error?d.jsx(Cs,{variant:"danger",children:S.error}):null]})}function Y(){return x?d.jsxs("div",{className:"subtitle-markers-results mt-3 text-muted",children:[d.jsx(ws,{animation:"border",size:"sm",className:"mr-2"}),"Searching…"]}):_?d.jsx(Cs,{variant:"danger",className:"mt-3",children:_}):w===null?null:w.length===0?d.jsx("p",{className:"subtitle-markers-results mt-3 text-muted",children:"No matches found."}):d.jsxs("div",{className:"subtitle-markers-results mt-3",children:[d.jsxs("p",{className:"text-muted",children:[w.length," match",w.length===1?"":"es",":"]}),d.jsx(_s,{size:"sm",variant:"secondary",className:"mb-2",onClick:()=>CO(w),children:"Play All in Queue"}),D?d.jsxs(Cs,{variant:"warning",className:"mt-2",children:["Couldn't load scene previews (",D,") - showing plain links instead."]}):null,h?d.jsx("div",{className:"row justify-content-center subtitle-markers-result-cards",ref:q,style:{gap:"12px"},children:w.map((P,j)=>{const R=h.get(P.sceneId);return R?d.jsxs("div",{className:"subtitle-markers-result-card",style:ne?{width:ne}:void 0,onClickCapture:A=>ue(A,P),children:[d.jsx(cO,{scene:R,width:ne}),d.jsx(Zn,{className:"text-muted subtitle-markers-result-text",text:`@ ${Fe.secondsToTimestamp(P.seconds)} — ${P.text}`,lineCount:2})]},j):d.jsxs("div",{className:"subtitle-markers-result subtitle-markers-result-fallback",style:ne?{width:ne}:void 0,children:[d.jsxs("a",{href:`/scenes/${P.sceneId}?t=${P.seconds}`,target:"_blank",rel:"noreferrer",children:[P.sceneTitle||`Scene ${P.sceneId}`," @ ",Fe.secondsToTimestamp(P.seconds)]}),d.jsx(Zn,{className:"text-muted subtitle-markers-result-text",text:P.text,lineCount:2})]},j)})}):d.jsxs("div",{className:"text-muted mt-2",children:[d.jsx(ws,{animation:"border",size:"sm",className:"mr-2"}),"Loading scene previews…"]})]})}return d.jsxs("div",{className:"subtitle-markers-page container-fluid",children:[d.jsx("h3",{children:"Subtitle Markers"}),d.jsx("p",{className:"text-muted",children:"Searches every .srt file under a folder (and its subfolders) for a phrase - matched to the video file next to each subtitle, the same way Stash itself associates captions. Either jump straight to each match's timestamp, or (optionally) create a scene marker for each one, with preview generation queued automatically afterwards."}),d.jsxs(Ae.Group,{className:"subtitle-markers-folder",children:[d.jsx(Ae.Label,{children:"Folder"}),d.jsx(iw,{currentDirectory:t,onChangeDirectory:n,defaultDirectories:e}),d.jsx(Ae.Text,{className:"text-muted",children:"Searched recursively, including subfolders."})]}),d.jsxs(Ae.Group,{children:[d.jsx(Ae.Label,{children:"Search text"}),d.jsx(Ae.Control,{type:"text",value:r,placeholder:"Text to find in subtitle lines",onChange:P=>i(P.target.value),disabled:M}),d.jsx(Ae.Text,{className:"text-muted",children:"Case-insensitive, matched as plain text."})]}),d.jsxs(Ae.Group,{children:[d.jsx(Ae.Check,{type:"checkbox",id:"subtitle-markers-create-markers",label:"Also create scene markers",checked:a,disabled:M,onChange:P=>s(P.target.checked)}),d.jsx(Ae.Text,{className:"text-muted",children:"Off by default: just search, and link to each match's timestamp. Turn this on to also create a scene marker for each match, using the tag and title below."})]}),a&&d.jsxs(d.Fragment,{children:[d.jsxs(Ae.Group,{children:[d.jsx(Ae.Label,{children:"Tag"}),d.jsx(nw,{ids:o?[o]:[],isDisabled:M,onSelect:P=>{var j;return u(((j=P[0])==null?void 0:j.id)||"")}})]}),d.jsxs(Ae.Group,{children:[d.jsx(Ae.Label,{children:"Marker title"}),d.jsx(Ae.Control,{type:"text",value:c,placeholder:r||"Marker title",onChange:P=>l(P.target.value),disabled:M}),d.jsx(Ae.Text,{className:"text-muted",children:"Defaults to the search text if left blank."})]})]}),d.jsx(_s,{onClick:F,disabled:!L,children:ee?"Running…":x?"Searching…":a?"Search & Create Markers":"Search"}),a?B():Y()]})}function _O(){const{data:e}=kf();if(!(e!=null&&e.configuration))return d.jsx(ws,{animation:"border",className:"mt-3"});const t=e.configuration.general.stashes.map(n=>n.path);return d.jsx(Zf,{children:d.jsx(qf,{configuration:e.configuration,children:d.jsx(IO,{libraryPaths:t})})})}yt.register.route(Yd,_O),yt.patch.before("MainNavBar.MenuItems",e=>{try{const t=d.jsx(fO.Link,{as:"div",className:"col-4 col-sm-3 col-md-2 col-lg-auto",children:d.jsx(mO,{exact:!0,to:Yd,activeClassName:"active",children:d.jsxs(_s,{className:"minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center",children:[d.jsx(gO,{icon:hO.faClosedCaptioning,className:"fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0"}),d.jsx("span",{children:"Marker"})]})})},"subtitle-markers");return[{...e,children:[...Hd.Children.toArray(e.children),t]}]}catch(t){return console.error("[SubtitleMarkers] Failed to patch nav bar:",t),[e]}});function Qd(e){if(!e||e.length===0)return;const t=gn.fromSceneIDTimeList(e.map(n=>({id:n.sceneId,start:n.seconds})));window.open(t.makeLink(e[0].sceneId,{sceneIndex:0,start:e[0].seconds,autoPlay:!0,continue:!0}),"_blank")}function CO(e){Qd(e)}const wO=1e3;async function OO(e,t,n){var r,i;try{const s=(n?n(t.clone()):t).clone();s.currentPage=1,s.itemsPerPage=wO;const c=(((i=(r=(await qm(s)).data)==null?void 0:r.findSceneMarkers)==null?void 0:i.scene_markers)??[]).map(l=>({sceneId:l.scene.id,seconds:l.seconds}));Qd(c)}catch(a){console.error("[SubtitleMarkers] Failed to start the filtered-markers queue:",a)}}yt.patch.before("FilteredSceneMarkerList",e=>{try{const t=e.filterHook,n={text:"Play All (Filtered)",onClick:(r,i)=>OO(r,i,t),isDisplayed:r=>{var i,a;return(((a=(i=r==null?void 0:r.data)==null?void 0:i.findSceneMarkers)==null?void 0:a.count)??0)>0}};return[{...e,extraOperations:[...e.extraOperations||[],n]}]}catch(t){return console.error('[SubtitleMarkers] Failed to add the "Play All (Filtered)" operation:',t),[e]}})})(PluginApi.React,PluginApi.libraries.Apollo,PluginApi.libraries.FontAwesomeSolid,PluginApi.libraries.Bootstrap,PluginApi.libraries.Intl,PluginApi.libraries.ReactFontAwesome,PluginApi.libraries.ReactSelect,PluginApi.ReactDOM,PluginApi.libraries.ReactRouterDOM);
