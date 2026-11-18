var LO=Object.defineProperty;var jO=(O,m,le)=>m in O?LO(O,m,{enumerable:!0,configurable:!0,writable:!0,value:le}):O[m]=le;var Z=(O,m,le)=>jO(O,typeof m!="symbol"?m+"":m,le);(function(O,m,le,U,Ce,rf,Bi,af,Ze){"use strict";var nf;function Ns(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const J=Ns(O),In=Ns(m);var fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ks(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function sf(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var As={exports:{}},_n={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Ls=Object.getOwnPropertySymbols,of=Object.prototype.hasOwnProperty,uf=Object.prototype.propertyIsEnumerable;function cf(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function lf(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}lf();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var df=O,js=60103;if(_n.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var qs=Symbol.for;js=qs("react.element"),_n.Fragment=qs("react.fragment")}var ff=df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pf=Object.prototype.hasOwnProperty,mf={key:!0,ref:!0,__self:!0,__source:!0};function Bs(e,t,n){var r,i={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)pf.call(t,r)&&!mf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:js,type:e,key:a,ref:s,props:i,_owner:ff.current}}_n.jsx=Bs,_n.jsxs=Bs,As.exports=_n;var d=As.exports;const Cn={};var pr=(e=>(e.Cut="CUT",e.Uncut="UNCUT",e))(pr||{}),y=(e=>(e.Between="BETWEEN",e.Equals="EQUALS",e.Excludes="EXCLUDES",e.GreaterThan="GREATER_THAN",e.Includes="INCLUDES",e.IncludesAll="INCLUDES_ALL",e.IsNull="IS_NULL",e.LessThan="LESS_THAN",e.MatchesRegex="MATCHES_REGEX",e.NotBetween="NOT_BETWEEN",e.NotEquals="NOT_EQUALS",e.NotMatchesRegex="NOT_MATCHES_REGEX",e.NotNull="NOT_NULL",e))(y||{}),X=(e=>(e.Galleries="GALLERIES",e.Groups="GROUPS",e.Images="IMAGES",e.Movies="MOVIES",e.Performers="PERFORMERS",e.Scenes="SCENES",e.SceneMarkers="SCENE_MARKERS",e.Studios="STUDIOS",e.Tags="TAGS",e))(X||{}),Oe=(e=>(e.Female="FEMALE",e.Intersex="INTERSEX",e.Male="MALE",e.NonBinary="NON_BINARY",e.TransgenderFemale="TRANSGENDER_FEMALE",e.TransgenderMale="TRANSGENDER_MALE",e))(Oe||{}),mr=(e=>(e.Landscape="LANDSCAPE",e.Portrait="PORTRAIT",e.Square="SQUARE",e))(mr||{}),Ve=(e=>(e.EightK="EIGHT_K",e.FiveK="FIVE_K",e.FourK="FOUR_K",e.FullHd="FULL_HD",e.Huge="HUGE",e.Low="LOW",e.QuadHd="QUAD_HD",e.R360P="R360P",e.SevenK="SEVEN_K",e.SixK="SIX_K",e.Standard="STANDARD",e.StandardHd="STANDARD_HD",e.VeryLow="VERY_LOW",e.VrHd="VR_HD",e.WebHd="WEB_HD",e))(Ve||{}),He=(e=>(e.Asc="ASC",e.Desc="DESC",e))(He||{});const Rs=m.gql`
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
    `,Vs=m.gql`
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
    `,Gs=m.gql`
    fragment ConfigDLNAData on ConfigDLNAResult {
  serverName
  enabled
  port
  whitelistedIPs
  interfaces
  videoSortOrder
}
    `,Us=m.gql`
    fragment ConfigScrapingData on ConfigScrapingResult {
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  excludeTagPatterns
}
    `,gf=m.gql`
    fragment ScraperSourceData on ScraperSource {
  stash_box_index
  stash_box_endpoint
  scraper_id
}
    `,hf=m.gql`
    fragment IdentifyFieldOptionsData on IdentifyFieldOptions {
  field
  strategy
  createMissing
}
    `,vf=m.gql`
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
    ${hf}`,zs=m.gql`
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
    ${gf}
${vf}`,bf=m.gql`
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
    ${Rs}
${Vs}
${Gs}
${Us}
${zs}`;m.gql`
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
    `;const Ri=m.gql`
    fragment SelectFolderData on Folder {
  id
  path
  basename
}
    `,yf=m.gql`
    fragment RecursiveFolderData on Folder {
  ...SelectFolderData
  parent_folders {
    ...SelectFolderData
  }
}
    ${Ri}`,Vi=m.gql`
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
    `,Sf=m.gql`
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
    `,xf=m.gql`
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
    `,wn=m.gql`
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
    `,lt=m.gql`
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
    `,Hs=m.gql`
    fragment SlimGroupData on Group {
  id
  name
  front_image_path
  rating100
}
    `,If=m.gql`
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
    ${wn}
${lt}
${Hs}`,Ws=m.gql`
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
    `,gr=m.gql`
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
    ${Ws}`,Ys=m.gql`
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
    `,Qs=m.gql`
    fragment FolderData on Folder {
  id
  basename
  path
}
    `,Gi=m.gql`
    fragment GalleryChapterData on GalleryChapter {
  id
  title
  image_index
  gallery {
    id
  }
}
    `,vt=m.gql`
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
    ${lt}`,Ks=m.gql`
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
    `,On=m.gql`
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
    ${Ks}`,zt=m.gql`
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
    ${Ys}
${Qs}
${Gi}
${wn}
${lt}
${vt}
${On}`,_f=m.gql`
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
    ${zt}
${wn}
${lt}
${vt}
${Ws}`,Js=m.gql`
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
    `,Xs=m.gql`
    fragment LogEntryData on LogEntry {
  time
  level
  message
}
    `,Ht=m.gql`
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
    `;const Cf=m.gql`
    fragment SelectPerformerData on Performer {
  id
  name
  disambiguation
  alias_list
  image_path
  birthdate
  death_date
}
    `,wf=m.gql`
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
    `,wt=m.gql`
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
    ${wf}`,Zs=m.gql`
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
    ${Ys}
${Qs}`,En=m.gql`
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
    ${wn}
${lt}
${Hs}`,Ot=m.gql`
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
    ${Ks}
${wt}
${Zs}
${wn}
${En}
${lt}
${vt}`,Of=m.gql`
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
    `,et=m.gql`
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
    `,Ef=m.gql`
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
    ${et}`,Ui=m.gql`
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
    ${et}`,eo=m.gql`
    fragment ScrapedGroupStudioData on ScrapedStudio {
  stored_id
  name
  urls
}
    `,Tf=m.gql`
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
    ${eo}
${et}`,hr=m.gql`
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
    ${et}`,Tn=m.gql`
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
    ${et}`,to=m.gql`
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
    ${eo}
${et}`,zi=m.gql`
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
    ${hr}
${et}
${Tn}
${to}`,no=m.gql`
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
    ${hr}
${et}
${Tn}`,ro=m.gql`
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
    ${hr}
${et}
${Tn}`;m.gql`
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
    ${hr}
${et}
${Tn}
${to}`,m.gql`
    fragment ScrapedStashBoxPerformerData on StashBoxPerformerQueryResult {
  query
  results {
    ...ScrapedScenePerformerData
  }
}
    ${Tn}`;const Dn=m.gql`
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
    ${lt}`,Df=m.gql`
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
    `,Wt=m.gql`
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
    ${lt}`,$f=m.gql`
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
    `,Pf=m.gql`
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
    ${lt}`;m.gql`
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
    ${Rs}`,m.gql`
    mutation ConfigureInterface($input: ConfigInterfaceInput!) {
  configureInterface(input: $input) {
    ...ConfigInterfaceData
  }
}
    ${Vs}`,m.gql`
    mutation ConfigureDLNA($input: ConfigDLNAInput!) {
  configureDLNA(input: $input) {
    ...ConfigDLNAData
  }
}
    ${Gs}`,m.gql`
    mutation ConfigureScraping($input: ConfigScrapingInput!) {
  configureScraping(input: $input) {
    ...ConfigScrapingData
  }
}
    ${Us}`,m.gql`
    mutation ConfigureDefaults($input: ConfigDefaultSettingsInput!) {
  configureDefaults(input: $input) {
    ...ConfigDefaultSettingsData
  }
}
    ${zs}`,m.gql`
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
    ${Vi}`,m.gql`
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
    ${Gi}`,m.gql`
    mutation GalleryChapterUpdate($id: ID!, $title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterUpdate(
    input: {id: $id, title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${Gi}`,m.gql`
    mutation GalleryChapterDestroy($id: ID!) {
  galleryChapterDestroy(id: $id)
}
    `,m.gql`
    mutation GalleryCreate($input: GalleryCreateInput!) {
  galleryCreate(input: $input) {
    ...GalleryData
  }
}
    ${zt}`,m.gql`
    mutation GalleryUpdate($input: GalleryUpdateInput!) {
  galleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${zt}`,m.gql`
    mutation BulkGalleryUpdate($input: BulkGalleryUpdateInput!) {
  bulkGalleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${zt}`,m.gql`
    mutation GalleriesUpdate($input: [GalleryUpdateInput!]!) {
  galleriesUpdate(input: $input) {
    ...GalleryData
  }
}
    ${zt}`,m.gql`
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
    ${En}`,m.gql`
    mutation GroupUpdate($input: GroupUpdateInput!) {
  groupUpdate(input: $input) {
    ...GroupData
  }
}
    ${En}`,m.gql`
    mutation BulkGroupUpdate($input: BulkGroupUpdateInput!) {
  bulkGroupUpdate(input: $input) {
    ...GroupData
  }
}
    ${En}`,m.gql`
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
    ${gr}`,m.gql`
    mutation BulkImageUpdate($input: BulkImageUpdateInput!) {
  bulkImageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${gr}`,m.gql`
    mutation ImagesUpdate($input: [ImageUpdateInput!]!) {
  imagesUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${gr}`,m.gql`
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
    ${vt}`,m.gql`
    mutation PerformerUpdate($input: PerformerUpdateInput!) {
  performerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${vt}`,m.gql`
    mutation BulkPerformerUpdate($input: BulkPerformerUpdateInput!) {
  bulkPerformerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${vt}`,m.gql`
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
    ${wt}`,m.gql`
    mutation SceneMarkerUpdate($id: ID!, $title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerUpdate(
    input: {id: $id, title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${wt}`,m.gql`
    mutation BulkSceneMarkerUpdate($input: BulkSceneMarkerUpdateInput!) {
  bulkSceneMarkerUpdate(input: $input) {
    ...SceneMarkerData
  }
}
    ${wt}`,m.gql`
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
    ${Ot}`,m.gql`
    mutation SceneUpdate($input: SceneUpdateInput!) {
  sceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${Ot}`,m.gql`
    mutation BulkSceneUpdate($input: BulkSceneUpdateInput!) {
  bulkSceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${Ot}`,m.gql`
    mutation ScenesUpdate($input: [SceneUpdateInput!]!) {
  scenesUpdate(input: $input) {
    ...SceneData
  }
}
    ${Ot}`,m.gql`
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
    ${Dn}`,m.gql`
    mutation StudioUpdate($input: StudioUpdateInput!) {
  studioUpdate(input: $input) {
    ...StudioData
  }
}
    ${Dn}`,m.gql`
    mutation BulkStudioUpdate($input: BulkStudioUpdateInput!) {
  bulkStudioUpdate(input: $input) {
    ...StudioData
  }
}
    ${Dn}`,m.gql`
    mutation StudioDestroy($id: ID!) {
  studioDestroy(input: {id: $id})
}
    `,m.gql`
    mutation StudiosDestroy($ids: [ID!]!) {
  studiosDestroy(ids: $ids)
}
    `;const Mf=m.gql`
    mutation TagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) {
    ...TagData
  }
}
    ${Wt}`;function Ff(e){const t={...Cn,...e};return In.useMutation(Mf,t)}m.gql`
    mutation TagDestroy($id: ID!) {
  tagDestroy(input: {id: $id})
}
    `,m.gql`
    mutation TagsDestroy($ids: [ID!]!) {
  tagsDestroy(ids: $ids)
}
    `;const Nf=m.gql`
    mutation TagUpdate($input: TagUpdateInput!) {
  tagUpdate(input: $input) {
    ...TagData
  }
}
    ${Wt}`;function kf(e){const t={...Cn,...e};return In.useMutation(Nf,t)}m.gql`
    mutation BulkTagUpdate($input: BulkTagUpdateInput!) {
  bulkTagUpdate(input: $input) {
    ...TagData
  }
}
    ${Wt}`,m.gql`
    mutation TagsMerge($source: [ID!]!, $destination: ID!, $values: TagUpdateInput) {
  tagsMerge(input: {source: $source, destination: $destination, values: $values}) {
    ...TagData
  }
}
    ${Wt}`,m.gql`
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
    ${Vi}`,m.gql`
    query FindSavedFilters($mode: FilterMode) {
  findSavedFilters(mode: $mode) {
    ...SavedFilterData
  }
}
    ${Vi}`,m.gql`
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
    ${Ri}`,m.gql`
    query FindFoldersForQuery($filter: FindFilterType, $folder_filter: FolderFilterType, $ids: [ID!]) {
  findFolders(filter: $filter, folder_filter: $folder_filter, ids: $ids) {
    count
    folders {
      ...RecursiveFolderData
    }
  }
}
    ${yf}`,m.gql`
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
    ${Ri}`;const Af=m.gql`
    query FindGalleries($filter: FindFilterType, $gallery_filter: GalleryFilterType) {
  findGalleries(gallery_filter: $gallery_filter, filter: $filter) {
    count
    galleries {
      ...SlimGalleryData
    }
  }
}
    ${Zs}`;m.gql`
    query FindGallery($id: ID!) {
  findGallery(id: $id) {
    ...GalleryData
  }
}
    ${zt}`,m.gql`
    query FindGalleriesForSelect($filter: FindFilterType, $gallery_filter: GalleryFilterType, $ids: [ID!]) {
  findGalleries(filter: $filter, gallery_filter: $gallery_filter, ids: $ids) {
    count
    galleries {
      ...SelectGalleryData
    }
  }
}
    ${Sf}`,m.gql`
    query FindGalleryImageID($id: ID!, $index: Int!) {
  findGallery(id: $id) {
    image(index: $index) {
      id
    }
  }
}
    `;const Lf=m.gql`
    query FindImages($filter: FindFilterType, $image_filter: ImageFilterType, $image_ids: [Int!]) {
  findImages(filter: $filter, image_filter: $image_filter, image_ids: $image_ids) {
    count
    images {
      ...SlimImageData
    }
  }
}
    ${gr}`;m.gql`
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
    ${_f}`,m.gql`
    query JobQueue {
  jobQueue {
    ...JobData
  }
}
    ${Js}`,m.gql`
    query FindJob($input: FindJobInput!) {
  findJob(input: $input) {
    ...JobData
  }
}
    ${Js}`,m.gql`
    query SceneWall($q: String) {
  sceneWall(q: $q) {
    ...SceneData
  }
}
    ${Ot}`,m.gql`
    query MarkerWall($q: String) {
  markerWall(q: $q) {
    ...SceneMarkerData
  }
}
    ${wt}`,m.gql`
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
    ${Xs}`,m.gql`
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
    `;const jf=m.gql`
    query FindGroups($filter: FindFilterType, $group_filter: GroupFilterType) {
  findGroups(filter: $filter, group_filter: $group_filter) {
    count
    groups {
      ...ListGroupData
    }
  }
}
    ${If}`;m.gql`
    query FindGroup($id: ID!) {
  findGroup(id: $id) {
    ...GroupData
  }
}
    ${En}`,m.gql`
    query FindGroupsForSelect($filter: FindFilterType, $group_filter: GroupFilterType, $ids: [ID!]) {
  findGroups(filter: $filter, group_filter: $group_filter, ids: $ids) {
    count
    groups {
      ...SelectGroupData
    }
  }
}
    ${xf}`;const qf=m.gql`
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
    ${vt}`;m.gql`
    query FindPerformer($id: ID!) {
  findPerformer(id: $id) {
    ...PerformerData
  }
}
    ${vt}`,m.gql`
    query FindPerformersForSelect($filter: FindFilterType, $performer_filter: PerformerFilterType, $ids: [ID!]) {
  findPerformers(filter: $filter, performer_filter: $performer_filter, ids: $ids) {
    count
    performers {
      ...SelectPerformerData
    }
  }
}
    ${Cf}`,m.gql`
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
    ${Ht}`,m.gql`
    query InstalledPluginPackagesStatus {
  installedPackages(type: Plugin) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${Ht}`,m.gql`
    query AvailablePluginPackages($source: String!) {
  availablePackages(source: $source, type: Plugin) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${Ht}`;const io=m.gql`
    query FindSceneMarkers($filter: FindFilterType, $scene_marker_filter: SceneMarkerFilterType) {
  findSceneMarkers(filter: $filter, scene_marker_filter: $scene_marker_filter) {
    count
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${wt}`,ao=m.gql`
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
    ${On}`;m.gql`
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
    ${On}`,m.gql`
    query FindDuplicateScenes($distance: Int, $duration_diff: Float) {
  findDuplicateScenes(distance: $distance, duration_diff: $duration_diff) {
    ...SlimSceneData
  }
}
    ${On}`,m.gql`
    query FindScene($id: ID!, $checksum: String) {
  findScene(id: $id, checksum: $checksum) {
    ...SceneData
  }
}
    ${Ot}`,m.gql`
    query FindFullScenes($ids: [Int!]) {
  findScenes(scene_ids: $ids) {
    scenes {
      ...SceneData
    }
  }
}
    ${Ot}`,m.gql`
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
    ${wt}`,m.gql`
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
    ${On}`,m.gql`
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
    ${Of}`,m.gql`
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
    ${Ef}`,m.gql`
    query ScrapeSingleTag($source: ScraperSourceInput!, $input: ScrapeSingleTagInput!) {
  scrapeSingleTag(source: $source, input: $input) {
    ...ScrapedSceneTagData
  }
}
    ${et}`,m.gql`
    query ScrapeSinglePerformer($source: ScraperSourceInput!, $input: ScrapeSinglePerformerInput!) {
  scrapeSinglePerformer(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${Ui}`,m.gql`
    query ScrapeMultiPerformers($source: ScraperSourceInput!, $input: ScrapeMultiPerformersInput!) {
  scrapeMultiPerformers(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${Ui}`,m.gql`
    query ScrapePerformerURL($url: String!) {
  scrapePerformerURL(url: $url) {
    ...ScrapedPerformerData
  }
}
    ${Ui}`,m.gql`
    query ScrapeSingleScene($source: ScraperSourceInput!, $input: ScrapeSingleSceneInput!) {
  scrapeSingleScene(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${zi}`,m.gql`
    query ScrapeMultiScenes($source: ScraperSourceInput!, $input: ScrapeMultiScenesInput!) {
  scrapeMultiScenes(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${zi}`,m.gql`
    query ScrapeSceneURL($url: String!) {
  scrapeSceneURL(url: $url) {
    ...ScrapedSceneData
  }
}
    ${zi}`,m.gql`
    query ScrapeSingleGallery($source: ScraperSourceInput!, $input: ScrapeSingleGalleryInput!) {
  scrapeSingleGallery(source: $source, input: $input) {
    ...ScrapedGalleryData
  }
}
    ${no}`,m.gql`
    query ScrapeSingleImage($source: ScraperSourceInput!, $input: ScrapeSingleImageInput!) {
  scrapeSingleImage(source: $source, input: $input) {
    ...ScrapedImageData
  }
}
    ${ro}`,m.gql`
    query ScrapeGalleryURL($url: String!) {
  scrapeGalleryURL(url: $url) {
    ...ScrapedGalleryData
  }
}
    ${no}`,m.gql`
    query ScrapeImageURL($url: String!) {
  scrapeImageURL(url: $url) {
    ...ScrapedImageData
  }
}
    ${ro}`,m.gql`
    query ScrapeGroupURL($url: String!) {
  scrapeGroupURL(url: $url) {
    ...ScrapedGroupData
  }
}
    ${Tf}`,m.gql`
    query InstalledScraperPackages {
  installedPackages(type: Scraper) {
    ...PackageData
  }
}
    ${Ht}`,m.gql`
    query InstalledScraperPackagesStatus {
  installedPackages(type: Scraper) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${Ht}`,m.gql`
    query AvailableScraperPackages($source: String!) {
  availablePackages(source: $source, type: Scraper) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${Ht}`;const Bf=m.gql`
    query Configuration {
  configuration {
    ...ConfigData
  }
}
    ${bf}`;function Rf(e){const t={...Cn,...e};return In.useQuery(Bf,t)}const Vf=m.gql`
    query Directory($path: String) {
  directory(path: $path) {
    path
    parent
    directories
  }
}
    `;function Gf(e){const t={...Cn,...e};return In.useQuery(Vf,t)}m.gql`
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
    ${Dn}`,m.gql`
    query FindStudio($id: ID!) {
  findStudio(id: $id) {
    ...StudioData
  }
}
    ${Dn}`,m.gql`
    query FindStudiosForSelect($filter: FindFilterType, $studio_filter: StudioFilterType, $ids: [ID!]) {
  findStudios(filter: $filter, studio_filter: $studio_filter, ids: $ids) {
    count
    studios {
      ...SelectStudioData
    }
  }
}
    ${Df}`;const so=m.gql`
    query FindTags($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...TagData
    }
  }
}
    ${Wt}`,Uf=m.gql`
    query FindTag($id: ID!) {
  findTag(id: $id) {
    ...TagData
  }
}
    ${Wt}`;function zf(e){const t={...Cn,...e};return In.useQuery(Uf,t)}const oo=m.gql`
    query FindTagsForSelect($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...SelectTagData
    }
  }
}
    ${$f}`;m.gql`
    query FindTagsForList($filter: FindFilterType, $tag_filter: TagFilterType) {
  findTags(filter: $filter, tag_filter: $tag_filter) {
    count
    tags {
      ...TagListData
    }
  }
}
    ${Pf}`,m.gql`
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
    ${Xs}`;const Hf=m.gql`
    subscription ScanCompleteSubscribe {
  scanCompleteSubscribe
}
    `,uo=O.createContext(null),bt=()=>{const e=O.useContext(uo);if(e===null)throw new Error("useConfigurationContext must be used within a ConfigurationProvider");return e},Wf=({configuration:e,children:t})=>d.jsx(uo.Provider,{value:{configuration:e},children:t}),co={},Yf={},lo={},Qf={};function Kf(e,t){if(co[e])throw new Error("Component "+e+" has already been registered");return co[e]=t,t}function Jf(e,t,n,r){if(!e.length)return t.apply(n,r);let i=1;function a(){if(i>=e.length)return t;const s=e[i++];return new Proxy(s,{apply:(u,o,c)=>u.apply(o,c.concat(a()))})}return e[0].apply(n,r.concat(a()))}function fo(e,t){return new Proxy(t,{apply(n,r,i){let a;for(const s of Yf[e]||[])i=s.apply(r,i);lo[e]?a=Jf(lo[e],n,r,i):a=n.apply(r,i);for(const s of Qf[e]||[])a=s.apply(r,i.concat(a));return a}})}function Se(e,t){const n=fo(e,t);return Kf(e,n),n}const Me=Se("Icon",e=>d.jsx(rf.FontAwesomeIcon,{...e,className:`fa-icon ${e.className??""}`})),Xf=()=>{},Zf=({children:e,show:t,icon:n,header:r,cancel:i,accept:a,onHide:s,isRunning:u,disabled:o,modalProps:c,dialogClassName:l,footerButtons:f,leftFooterButtons:g})=>d.jsxs(U.Modal,{className:"ModalComponent",keyboard:!1,onHide:s??Xf,show:t,dialogClassName:l,...c,children:[d.jsxs(U.Modal.Header,{children:[n?d.jsx(Me,{icon:n}):"",d.jsx("span",{children:r??""})]}),d.jsx(U.Modal.Body,{children:e}),d.jsxs(U.Modal.Footer,{className:"ModalFooter",children:[d.jsx("div",{children:g}),d.jsxs("div",{children:[f,i?d.jsx(U.Button,{disabled:u,variant:i.variant??"primary",onClick:i.onClick,className:"ml-2",children:i.text??d.jsx(Ce.FormattedMessage,{id:"actions.cancel",defaultMessage:"Cancel",description:"Cancels the current action and dismisses the modal."})}):"",d.jsx(U.Button,{disabled:u||o,variant:(a==null?void 0:a.variant)??"primary",onClick:a==null?void 0:a.onClick,className:"ml-2",children:u?d.jsx(U.Spinner,{animation:"border",role:"status",size:"sm"}):(a==null?void 0:a.text)??d.jsx(Ce.FormattedMessage,{id:"actions.close",defaultMessage:"Close",description:"Closes the current modal."})})]})]})]});function ep(e){let t="";return e instanceof Error&&(t=e.message),t||(t=String(e)),t||(t="Unknown error"),t}var po={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var a="",s=0;s<arguments.length;s++){var u=arguments[s];u&&(a=i(a,r(u)))}return a}function r(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return n.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var s="";for(var u in a)t.call(a,u)&&a[u]&&(s=i(s,u));return s}function i(a,s){return s?a?a+" "+s:a+s:a}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(po);var tp=po.exports;const We=ks(tp),np=100,rp=5e3;let ip=0;const mo=O.createContext(null),ap=({children:e})=>{const[t,n]=O.useState(),[r,i]=O.useState(!1),[a,s]=O.useState(!1),u=O.useMemo(()=>{function l(){s(!0)}return!t||a?null:d.jsx(U.Toast,{autohide:!0,onClose:()=>i(!0),className:t.variant??"success",delay:t.delay??3e3,children:d.jsxs(U.Toast.Header,{children:[d.jsx("span",{className:"mr-auto",onClick:()=>l(),children:t.content}),t.variant==="danger"&&d.jsx(U.Button,{variant:"minimal",className:"expand-error-button",onClick:()=>l(),children:d.jsx(Me,{icon:le.faArrowUpRightFromSquare})})]})},t.id)},[t,a]);function o(l){(r||!t||(l.priority??0)>=(t.priority??0))&&(i(!1),n({...l,id:ip++}))}function c(){const{content:l}=t??{};l&&typeof l=="string"&&navigator.clipboard&&navigator.clipboard.writeText(l)}return d.jsxs(mo.Provider,{value:o,children:[e,a&&d.jsx(Zf,{dialogClassName:"toast-expanded-dialog",show:a,accept:{onClick:()=>{n(void 0),s(!1)}},header:d.jsx(Ce.FormattedMessage,{id:"errors.header"}),icon:le.faTriangleExclamation,footerButtons:!!navigator.clipboard&&d.jsx(U.Button,{variant:"secondary",onClick:()=>c(),children:d.jsx(Ce.FormattedMessage,{id:"actions.copy_to_clipboard"})}),children:t==null?void 0:t.content}),d.jsx("div",{className:We("toast-container row",{hidden:!t||r}),children:u})]})},sp=()=>{const e=O.useContext(mo);if(!e)throw new Error("useToast must be used within a ToastProvider");return O.useMemo(()=>({toast:e,success(t){e({content:t})},error(t){const n=ep(t);console.error(t),e({variant:"danger",content:n,priority:np,delay:rp})}}),[e])};var Hi=function(e,t){return Hi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Hi(e,t)};function vr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Hi(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Fe=function(){return Fe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Fe.apply(this,arguments)};function Yt(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}typeof SuppressedError=="function"&&SuppressedError;var Wi="Invariant Violation",go=Object.setPrototypeOf,op=go===void 0?function(e,t){return e.__proto__=t,e}:go,ho=function(e){vr(t,e);function t(n){n===void 0&&(n=Wi);var r=e.call(this,typeof n=="number"?Wi+": "+n+" (see https://github.com/apollographql/invariant-packages)":n)||this;return r.framesToPop=1,r.name=Wi,op(r,t.prototype),r}return t}(Error);function Et(e,t){if(!e)throw new ho(t)}var vo=["debug","log","warn","error","silent"],up=vo.indexOf("log");function br(e){return function(){if(vo.indexOf(e)>=up){var t=console[e]||console.log;return t.apply(console,arguments)}}}(function(e){e.debug=br("debug"),e.log=br("log"),e.warn=br("warn"),e.error=br("error")})(Et||(Et={}));var bo="3.14.1";function Qt(e){try{return e()}catch{}}const yr=Qt(function(){return globalThis})||Qt(function(){return window})||Qt(function(){return self})||Qt(function(){return global})||Qt(function(){return Qt.constructor("return this")()});var yo=new Map;function cp(e){var t=yo.get(e)||1;return yo.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function lp(e,t){var n=cp("stringifyForDisplay");return JSON.stringify(e,function(r,i){return i===void 0?n:i},t).split(JSON.stringify(n)).join("<undefined>")}function Sr(e){return function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(typeof t=="number"){var i=t;t=Yi(i),t||(t=Qi(i,n),n=[])}e.apply(void 0,[t].concat(n))}}var Kt=Object.assign(function(t,n){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];t||Et(t,Yi(n,r)||Qi(n,r))},{debug:Sr(Et.debug),log:Sr(Et.log),warn:Sr(Et.warn),error:Sr(Et.error)});function $n(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new ho(Yi(e,t)||Qi(e,t))}var So=Symbol.for("ApolloErrorMessageHandler_"+bo);function xo(e){if(typeof e=="string")return e;try{return lp(e,2).slice(0,1e3)}catch{return"<non-serializable>"}}function Yi(e,t){if(t===void 0&&(t=[]),!!e)return yr[So]&&yr[So](e,t.map(xo))}function Qi(e,t){if(t===void 0&&(t=[]),!!e)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:bo,message:e,args:t.map(xo)})))}function dp(e,t){if(!!!e)throw new Error(t)}const Io={Name:[],Document:["definitions"],OperationDefinition:["description","name","variableDefinitions","directives","selectionSet"],VariableDefinition:["description","variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["description","name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","directives","locations"],SchemaExtension:["directives","operationTypes"],DirectiveExtension:["name","directives"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"],TypeCoordinate:["name"],MemberCoordinate:["name","memberName"],ArgumentCoordinate:["name","fieldName","argumentName"],DirectiveCoordinate:["name"],DirectiveArgumentCoordinate:["name","argumentName"]},fp=new Set(Object.keys(Io));function _o(e){const t=e==null?void 0:e.kind;return typeof t=="string"&&fp.has(t)}var Co;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(Co||(Co={}));var Ki;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.DIRECTIVE_EXTENSION="DirectiveExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension",e.TYPE_COORDINATE="TypeCoordinate",e.MEMBER_COORDINATE="MemberCoordinate",e.ARGUMENT_COORDINATE="ArgumentCoordinate",e.DIRECTIVE_COORDINATE="DirectiveCoordinate",e.DIRECTIVE_ARGUMENT_COORDINATE="DirectiveArgumentCoordinate"})(Ki||(Ki={}));function wo(e){return e===9||e===32}function pp(e,t){const n=e.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),i=r.length===1,a=r.length>1&&r.slice(1).every(p=>p.length===0||wo(p.charCodeAt(0))),s=n.endsWith('\\"""'),u=e.endsWith('"')&&!s,o=e.endsWith("\\"),c=u||o,l=!i||e.length>70||c||a||s;let f="";const g=i&&wo(e.charCodeAt(0));return(l&&!g||a)&&(f+=`
`),f+=n,(l||c)&&(f+=`
`),'"""'+f+'"""'}const mp=10,Oo=2;function gp(e){return xr(e,[])}function xr(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return hp(e,t);default:return String(e)}}function hp(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const n=[...t,e];if(vp(e)){const r=e.toJSON();if(r!==e)return typeof r=="string"?r:xr(r,n)}else if(Array.isArray(e))return yp(e,n);return bp(e,n)}function vp(e){return typeof e.toJSON=="function"}function bp(e,t){const n=Object.entries(e);return n.length===0?"{}":t.length>Oo?"["+Sp(e)+"]":"{ "+n.map(([i,a])=>i+": "+xr(a,t)).join(", ")+" }"}function yp(e,t){if(e.length===0)return"[]";if(t.length>Oo)return"[Array]";const n=Math.min(mp,e.length),r=e.length-n,i=[];for(let a=0;a<n;++a)i.push(xr(e[a],t));return r===1?i.push("... 1 more item"):r>1&&i.push(`... ${r} more items`),"["+i.join(", ")+"]"}function Sp(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}function xp(e){return`"${e.replace(Ip,_p)}"`}const Ip=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function _p(e){return Cp[e.charCodeAt(0)]}const Cp=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],wp=Object.freeze({});function Op(e,t,n=Io){const r=new Map;for(const S of Object.values(Ki))r.set(S,Ep(t,S));let i,a=Array.isArray(e),s=[e],u=-1,o=[],c=e,l,f;const g=[],p=[];do{u++;const S=u===s.length,v=S&&o.length!==0;if(S){if(l=p.length===0?void 0:g[g.length-1],c=f,f=p.pop(),v)if(a){c=c.slice();let E=0;for(const[C,_]of o){const h=C-E;_===null?(c.splice(h,1),E++):c[h]=_}}else{c={...c};for(const[E,C]of o)c[E]=C}u=i.index,s=i.keys,o=i.edits,a=i.inArray,i=i.prev}else if(f){if(l=a?u:s[u],c=f[l],c==null)continue;g.push(l)}let w;if(!Array.isArray(c)){var I,x;_o(c)||dp(!1,`Invalid AST Node: ${gp(c)}.`);const E=S?(I=r.get(c.kind))===null||I===void 0?void 0:I.leave:(x=r.get(c.kind))===null||x===void 0?void 0:x.enter;if(w=E==null?void 0:E.call(t,c,l,f,g,p),w===wp)break;if(w===!1){if(!S){g.pop();continue}}else if(w!==void 0&&(o.push([l,w]),!S))if(_o(w))c=w;else{g.pop();continue}}if(w===void 0&&v&&o.push([l,c]),S)g.pop();else{var b;i={inArray:a,index:u,keys:s,edits:o,prev:i},a=Array.isArray(c),s=a?c:(b=n[c.kind])!==null&&b!==void 0?b:[],u=-1,o=[],f&&p.push(f),f=c}}while(i!==void 0);return o.length!==0?o[o.length-1][1]:e}function Ep(e,t){const n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function Tp(e){return Op(e,$p)}const Dp=80,$p={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>N(e.definitions,`

`)},OperationDefinition:{leave(e){const t=Ji(e.variableDefinitions)?K(`(
`,N(e.variableDefinitions,`
`),`
)`):K("(",N(e.variableDefinitions,", "),")"),n=K("",e.description,`
`)+N([e.operation,N([e.name,t]),N(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r,description:i})=>K("",i,`
`)+e+": "+t+K(" = ",n)+K(" ",N(r," "))},SelectionSet:{leave:({selections:e})=>tt(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:i}){const a=K("",e,": ")+t;let s=a+K("(",N(n,", "),")");return s.length>Dp&&(s=a+K(`(
`,Ir(N(n,`
`)),`
)`)),N([s,N(r," "),i]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+K(" ",N(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>N(["...",K("on ",e),N(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:i,description:a})=>K("",a,`
`)+`fragment ${e}${K("(",N(n,", "),")")} on ${t} ${K("",N(r," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?pp(e):xp(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+N(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+N(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+K("(",N(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>K("",e,`
`)+N(["schema",N(t," "),tt(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>K("",e,`
`)+N(["scalar",t,N(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>K("",e,`
`)+N(["type",t,K("implements ",N(n," & ")),N(r," "),tt(i)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:i})=>K("",e,`
`)+t+(Ji(n)?K(`(
`,Ir(N(n,`
`)),`
)`):K("(",N(n,", "),")"))+": "+r+K(" ",N(i," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:i})=>K("",e,`
`)+N([t+": "+n,K("= ",r),N(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>K("",e,`
`)+N(["interface",t,K("implements ",N(n," & ")),N(r," "),tt(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>K("",e,`
`)+N(["union",t,N(n," "),K("= ",N(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>K("",e,`
`)+N(["enum",t,N(n," "),tt(r)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>K("",e,`
`)+N([t,N(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>K("",e,`
`)+N(["input",t,N(n," "),tt(r)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,directives:r,repeatable:i,locations:a})=>K("",e,`
`)+"directive @"+t+(Ji(n)?K(`(
`,Ir(N(n,`
`)),`
)`):K("(",N(n,", "),")"))+K(" ",N(r," "))+(i?" repeatable":"")+" on "+N(a," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>N(["extend schema",N(e," "),tt(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>N(["extend scalar",e,N(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>N(["extend type",e,K("implements ",N(t," & ")),N(n," "),tt(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>N(["extend interface",e,K("implements ",N(t," & ")),N(n," "),tt(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>N(["extend union",e,N(t," "),K("= ",N(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>N(["extend enum",e,N(t," "),tt(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>N(["extend input",e,N(t," "),tt(n)]," ")},DirectiveExtension:{leave:({name:e,directives:t})=>N(["extend directive @"+e,N(t," ")]," ")},TypeCoordinate:{leave:({name:e})=>e},MemberCoordinate:{leave:({name:e,memberName:t})=>N([e,K(".",t)])},ArgumentCoordinate:{leave:({name:e,fieldName:t,argumentName:n})=>N([e,K(".",t),K("(",n,":)")])},DirectiveCoordinate:{leave:({name:e})=>N(["@",e])},DirectiveArgumentCoordinate:{leave:({name:e,argumentName:t})=>N(["@",e,K("(",t,":)")])}};function N(e,t=""){var n;return(n=e==null?void 0:e.filter(r=>r).join(t))!==null&&n!==void 0?n:""}function tt(e){return K(`{
`,Ir(N(e,`
`)),`
}`)}function K(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function Ir(e){return K("  ",e.replace(/\n/g,`
  `))}function Ji(e){var t;return(t=e==null?void 0:e.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}function Xi(e){return e!==null&&typeof e=="object"}function Pp(){}class Eo{constructor(t=1/0,n=Pp){this.max=t,this.dispose=n,this.map=new Map,this.newest=null,this.oldest=null}has(t){return this.map.has(t)}get(t){const n=this.getNode(t);return n&&n.value}get size(){return this.map.size}getNode(t){const n=this.map.get(t);if(n&&n!==this.newest){const{older:r,newer:i}=n;i&&(i.older=r),r&&(r.newer=i),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=i)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(t,r),r.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(t){const n=this.map.get(t);return n?(n===this.newest&&(this.newest=n.older),n===this.oldest&&(this.oldest=n.newer),n.newer&&(n.newer.older=n.older),n.older&&(n.older.newer=n.newer),this.map.delete(t),this.dispose(n.value,t),!0):!1}}function Zi(){}const Mp=Zi,Fp=typeof WeakRef<"u"?WeakRef:function(e){return{deref:()=>e}},Np=typeof WeakMap<"u"?WeakMap:Map,kp=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:Zi,unregister:Zi}},Ap=10024;class To{constructor(t=1/0,n=Mp){this.max=t,this.dispose=n,this.map=new Np,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{const r=this.unfinalizedNodes.values();for(let i=0;i<Ap;i++){const a=r.next().value;if(!a)break;this.unfinalizedNodes.delete(a);const s=a.key;delete a.key,a.keyRef=new Fp(s),this.registry.register(s,a,a)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new kp(this.deleteNode.bind(this))}has(t){return this.map.has(t)}get(t){const n=this.getNode(t);return n&&n.value}getNode(t){const n=this.map.get(t);if(n&&n!==this.newest){const{older:r,newer:i}=n;i&&(i.older=r),r&&(r.newer=i),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=i)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.scheduleFinalization(r),this.map.set(t,r),this.size++,r.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(t){t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.size--;const n=t.key||t.keyRef&&t.keyRef.deref();this.dispose(t.value,n),t.keyRef?this.registry.unregister(t):this.unfinalizedNodes.delete(t),n&&this.map.delete(n)}delete(t){const n=this.map.get(t);return n?(this.deleteNode(n),!0):!1}scheduleFinalization(t){this.unfinalizedNodes.add(t),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}}var ea=new WeakSet;function Do(e){e.size<=(e.max||-1)||ea.has(e)||(ea.add(e),setTimeout(function(){e.clean(),ea.delete(e)},100))}var Lp=function(e,t){var n=new To(e,t);return n.set=function(r,i){var a=To.prototype.set.call(this,r,i);return Do(this),a},n},jp=function(e,t){var n=new Eo(e,t);return n.set=function(r,i){var a=Eo.prototype.set.call(this,r,i);return Do(this),a},n},qp=Symbol.for("apollo.cacheSize"),$o=Fe({},yr[qp]),Bp={};function Po(e,t){Bp[e]=t}var Mo=Object.assign(function(t){return JSON.stringify(t,Rp)},{reset:function(){Jt=new jp($o.canonicalStringify||1e3)}});globalThis.__DEV__!==!1&&Po("canonicalStringify",function(){return Jt.size});var Jt;Mo.reset();function Rp(e,t){if(t&&typeof t=="object"){var n=Object.getPrototypeOf(t);if(n===Object.prototype||n===null){var r=Object.keys(t);if(r.every(Vp))return t;var i=JSON.stringify(r),a=Jt.get(i);if(!a){r.sort();var s=JSON.stringify(r);a=Jt.get(s)||r,Jt.set(i,a),Jt.set(s,a)}var u=Object.create(n);return a.forEach(function(o){u[o]=t[o]}),u}}return t}function Vp(e,t,n){return t===0||n[t-1]<=e}var Gp=["connection","include","skip","client","rest","export","nonreactive"],Pn=Mo;Object.assign(function(e,t,n){if(t&&n&&n.connection&&n.connection.key)if(n.connection.filter&&n.connection.filter.length>0){var r=n.connection.filter?n.connection.filter:[];r.sort();var i={};return r.forEach(function(u){i[u]=t[u]}),"".concat(n.connection.key,"(").concat(Pn(i),")")}else return n.connection.key;var a=e;if(t){var s=Pn(t);a+="(".concat(s,")")}return n&&Object.keys(n).forEach(function(u){Gp.indexOf(u)===-1&&(n[u]&&Object.keys(n[u]).length?a+="@".concat(u,"(").concat(Pn(n[u]),")"):a+="@".concat(u))}),a},{setStringify:function(e){var t=Pn;return Pn=e,t}});function Up(e){return e.kind==="Field"}function Fo(e){Kt(e&&e.kind==="Document",115);var t=e.definitions.filter(function(n){return n.kind!=="FragmentDefinition"}).map(function(n){if(n.kind!=="OperationDefinition")throw $n(116,n.kind);return n});return Kt(t.length<=1,117,t.length),e}function zp(e){return Fo(e),e.definitions.filter(function(t){return t.kind==="OperationDefinition"})[0]}function Hp(e){return e.definitions.filter(function(t){return t.kind==="OperationDefinition"&&!!t.name}).map(function(t){return t.name.value})[0]||null}function Wp(e){var t=zp(e);return Kt(t&&t.operation==="query",118),t}function Yp(e){Fo(e);for(var t,n=0,r=e.definitions;n<r.length;n++){var i=r[n];if(i.kind==="OperationDefinition"){var a=i.operation;if(a==="query"||a==="mutation"||a==="subscription")return i}i.kind==="FragmentDefinition"&&!t&&(t=i)}if(t)return t;throw $n(122)}let Le=null;const No={};let Qp=1;const Kp=()=>class{constructor(){this.id=["slot",Qp++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let t=Le;t;t=t.parent)if(this.id in t.slots){const n=t.slots[this.id];if(n===No)break;return t!==Le&&(Le.slots[this.id]=n),!0}return Le&&(Le.slots[this.id]=No),!1}getValue(){if(this.hasValue())return Le.slots[this.id]}withValue(t,n,r,i){const a={__proto__:null,[this.id]:t},s=Le;Le={parent:s,slots:a};try{return n.apply(i,r)}finally{Le=s}}static bind(t){const n=Le;return function(){const r=Le;try{return Le=n,t.apply(this,arguments)}finally{Le=r}}}static noContext(t,n,r){if(Le){const i=Le;try{return Le=null,t.apply(r,n)}finally{Le=i}}else return t.apply(r,n)}};function ko(e){try{return e()}catch{}}const ta="@wry/context:Slot",Ao=ko(()=>globalThis)||ko(()=>global)||Object.create(null),na=Ao[ta]||Array[ta]||function(e){try{Object.defineProperty(Ao,ta,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}}(Kp()),{bind:BO,noContext:RO}=na;new na;var Mn,ra=Object.assign(function(e){var t=Mn.get(e);return t||(t=Tp(e),Mn.set(e,t)),t},{reset:function(){Mn=new Lp($o.print||2e3)}});ra.reset(),globalThis.__DEV__!==!1&&Po("print",function(){return Mn?Mn.size:0});function Jp(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=Xp(e))||t){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xp(e,t){if(e){if(typeof e=="string")return Lo(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Lo(e,t)}}function Lo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function jo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ia(e,t,n){return t&&jo(e.prototype,t),n&&jo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var aa=function(){return typeof Symbol=="function"},sa=function(e){return aa()&&!!Symbol[e]},oa=function(e){return sa(e)?Symbol[e]:"@@"+e};aa()&&!sa("observable")&&(Symbol.observable=Symbol("observable"));var Zp=oa("iterator"),ua=oa("observable"),qo=oa("species");function _r(e,t){var n=e[t];if(n!=null){if(typeof n!="function")throw new TypeError(n+" is not a function");return n}}function Fn(e){var t=e.constructor;return t!==void 0&&(t=t[qo],t===null&&(t=void 0)),t!==void 0?t:Te}function em(e){return e instanceof Te}function Xt(e){Xt.log?Xt.log(e):setTimeout(function(){throw e})}function Cr(e){Promise.resolve().then(function(){try{e()}catch(t){Xt(t)}})}function Bo(e){var t=e._cleanup;if(t!==void 0&&(e._cleanup=void 0,!!t))try{if(typeof t=="function")t();else{var n=_r(t,"unsubscribe");n&&n.call(t)}}catch(r){Xt(r)}}function ca(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function tm(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var n=0;n<t.length&&(Ro(e,t[n].type,t[n].value),e._state!=="closed");++n);}}function Ro(e,t,n){e._state="running";var r=e._observer;try{var i=_r(r,t);switch(t){case"next":i&&i.call(r,n);break;case"error":if(ca(e),i)i.call(r,n);else throw n;break;case"complete":ca(e),i&&i.call(r);break}}catch(a){Xt(a)}e._state==="closed"?Bo(e):e._state==="running"&&(e._state="ready")}function la(e,t,n){if(e._state!=="closed"){if(e._state==="buffering"){e._queue.push({type:t,value:n});return}if(e._state!=="ready"){e._state="buffering",e._queue=[{type:t,value:n}],Cr(function(){return tm(e)});return}Ro(e,t,n)}}var nm=function(){function e(n,r){this._cleanup=void 0,this._observer=n,this._queue=void 0,this._state="initializing";var i=new rm(this);try{this._cleanup=r.call(void 0,i)}catch(a){i.error(a)}this._state==="initializing"&&(this._state="ready")}var t=e.prototype;return t.unsubscribe=function(){this._state!=="closed"&&(ca(this),Bo(this))},ia(e,[{key:"closed",get:function(){return this._state==="closed"}}]),e}(),rm=function(){function e(n){this._subscription=n}var t=e.prototype;return t.next=function(r){la(this._subscription,"next",r)},t.error=function(r){la(this._subscription,"error",r)},t.complete=function(){la(this._subscription,"complete")},ia(e,[{key:"closed",get:function(){return this._subscription._state==="closed"}}]),e}(),Te=function(){function e(n){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if(typeof n!="function")throw new TypeError("Observable initializer must be a function");this._subscriber=n}var t=e.prototype;return t.subscribe=function(r){return(typeof r!="object"||r===null)&&(r={next:r,error:arguments[1],complete:arguments[2]}),new nm(r,this._subscriber)},t.forEach=function(r){var i=this;return new Promise(function(a,s){if(typeof r!="function"){s(new TypeError(r+" is not a function"));return}function u(){o.unsubscribe(),a()}var o=i.subscribe({next:function(c){try{r(c,u)}catch(l){s(l),o.unsubscribe()}},error:s,complete:a})})},t.map=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=Fn(this);return new a(function(s){return i.subscribe({next:function(u){try{u=r(u)}catch(o){return s.error(o)}s.next(u)},error:function(u){s.error(u)},complete:function(){s.complete()}})})},t.filter=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=Fn(this);return new a(function(s){return i.subscribe({next:function(u){try{if(!r(u))return}catch(o){return s.error(o)}s.next(u)},error:function(u){s.error(u)},complete:function(){s.complete()}})})},t.reduce=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=Fn(this),s=arguments.length>1,u=!1,o=arguments[1],c=o;return new a(function(l){return i.subscribe({next:function(f){var g=!u;if(u=!0,!g||s)try{c=r(c,f)}catch(p){return l.error(p)}else c=f},error:function(f){l.error(f)},complete:function(){if(!u&&!s)return l.error(new TypeError("Cannot reduce an empty sequence"));l.next(c),l.complete()}})})},t.concat=function(){for(var r=this,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];var u=Fn(this);return new u(function(o){var c,l=0;function f(g){c=g.subscribe({next:function(p){o.next(p)},error:function(p){o.error(p)},complete:function(){l===a.length?(c=void 0,o.complete()):f(u.from(a[l++]))}})}return f(r),function(){c&&(c.unsubscribe(),c=void 0)}})},t.flatMap=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=Fn(this);return new a(function(s){var u=[],o=i.subscribe({next:function(l){if(r)try{l=r(l)}catch(g){return s.error(g)}var f=a.from(l).subscribe({next:function(g){s.next(g)},error:function(g){s.error(g)},complete:function(){var g=u.indexOf(f);g>=0&&u.splice(g,1),c()}});u.push(f)},error:function(l){s.error(l)},complete:function(){c()}});function c(){o.closed&&u.length===0&&s.complete()}return function(){u.forEach(function(l){return l.unsubscribe()}),o.unsubscribe()}})},t[ua]=function(){return this},e.from=function(r){var i=typeof this=="function"?this:e;if(r==null)throw new TypeError(r+" is not an object");var a=_r(r,ua);if(a){var s=a.call(r);if(Object(s)!==s)throw new TypeError(s+" is not an object");return em(s)&&s.constructor===i?s:new i(function(u){return s.subscribe(u)})}if(sa("iterator")&&(a=_r(r,Zp),a))return new i(function(u){Cr(function(){if(!u.closed){for(var o=Jp(a.call(r)),c;!(c=o()).done;){var l=c.value;if(u.next(l),u.closed)return}u.complete()}})});if(Array.isArray(r))return new i(function(u){Cr(function(){if(!u.closed){for(var o=0;o<r.length;++o)if(u.next(r[o]),u.closed)return;u.complete()}})});throw new TypeError(r+" is not observable")},e.of=function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var s=typeof this=="function"?this:e;return new s(function(u){Cr(function(){if(!u.closed){for(var o=0;o<i.length;++o)if(u.next(i[o]),u.closed)return;u.complete()}})})},ia(e,null,[{key:qo,get:function(){return this}}]),e}();aa()&&Object.defineProperty(Te,Symbol("extensions"),{value:{symbol:ua,hostReportError:Xt},configurable:!0});function im(e){var t,n=e.Symbol;if(typeof n=="function")if(n.observable)t=n.observable;else{typeof n.for=="function"?t=n.for("https://github.com/benlesh/symbol-observable"):t=n("https://github.com/benlesh/symbol-observable");try{n.observable=t}catch{}}else t="@@observable";return t}var Zt;typeof self<"u"?Zt=self:typeof window<"u"?Zt=window:typeof global<"u"?Zt=global:typeof module<"u"?Zt=module:Zt=Function("return this")(),im(Zt);var Vo=Te.prototype,Go="@@observable";Vo[Go]||(Vo[Go]=function(){return this});var da,am=Symbol.for("apollo.deprecations"),Uo=Symbol.for("apollo.deprecations.slot"),fa=yr,sm=(da=fa[Uo])!==null&&da!==void 0?da:fa[Uo]=new na;function om(e){return fa[am]||(sm.getValue()||[]).includes(e)}function um(e,t){om(e)||t()}var zo=function(e,t,n){var r=new Error(n);throw r.name="ServerError",r.response=e,r.statusCode=e.status,r.result=t,r};function cm(e){for(var t=["query","operationName","variables","extensions","context"],n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];if(t.indexOf(i)<0)throw $n(58,i)}return e}function lm(e,t){var n=Fe({},e),r=function(a){typeof a=="function"?n=Fe(Fe({},n),a(n)):n=Fe(Fe({},n),a)},i=function(){return Fe({},n)};return Object.defineProperty(t,"setContext",{enumerable:!1,value:r}),Object.defineProperty(t,"getContext",{enumerable:!1,value:i}),t}function dm(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName=typeof t.query!="string"?Hp(t.query)||void 0:""),t}function Ho(e,t){return t?t(e):Te.of()}function Nn(e){return typeof e=="function"?new kn(e):e}function wr(e){return e.request.length<=1}var kn=function(){function e(t){t&&(this.request=t)}return e.empty=function(){return new e(function(){return Te.of()})},e.from=function(t){return t.length===0?e.empty():t.map(Nn).reduce(function(n,r){return n.concat(r)})},e.split=function(t,n,r){var i=Nn(n),a=Nn(r||new e(Ho)),s;return wr(i)&&wr(a)?s=new e(function(u){return t(u)?i.request(u)||Te.of():a.request(u)||Te.of()}):s=new e(function(u,o){return t(u)?i.request(u,o)||Te.of():a.request(u,o)||Te.of()}),Object.assign(s,{left:i,right:a})},e.execute=function(t,n){return t.request(lm(n.context,dm(cm(n))))||Te.of()},e.concat=function(t,n){var r=Nn(t);if(wr(r))return globalThis.__DEV__!==!1&&Kt.warn(47,r),r;var i=Nn(n),a;return wr(i)?a=new e(function(s){return r.request(s,function(u){return i.request(u)||Te.of()})||Te.of()}):a=new e(function(s,u){return r.request(s,function(o){return i.request(o,u)||Te.of()})||Te.of()}),Object.assign(a,{left:r,right:i})},e.prototype.split=function(t,n,r){return this.concat(e.split(t,n,r||new e(Ho)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(t,n){throw $n(48)},e.prototype.onError=function(t,n){if(globalThis.__DEV__!==!1&&um("onError",function(){globalThis.__DEV__!==!1&&Kt.warn(49)}),n&&n.error)return n.error(t),!1;throw t},e.prototype.setOnError=function(t){return globalThis.__DEV__!==!1&&globalThis.__DEV__!==!1&&Kt.warn(50),this.onError=t,this},e}(),Wo=Symbol();function fm(e){return e.extensions?Array.isArray(e.extensions[Wo]):!1}var pm=function(e){var t=Yt(Yt(Yt([],e.graphQLErrors,!0),e.clientErrors,!0),e.protocolErrors,!0);return e.networkError&&t.push(e.networkError),t.map(function(n){return Xi(n)&&n.message||"Error message not found."}).join(`
`)},mm=function(e){vr(t,e);function t(n){var r=n.graphQLErrors,i=n.protocolErrors,a=n.clientErrors,s=n.networkError,u=n.errorMessage,o=n.extraInfo,c=e.call(this,u)||this;return c.name="ApolloError",c.graphQLErrors=r||[],c.protocolErrors=i||[],c.clientErrors=a||[],c.networkError=s||null,c.message=u||pm(c),c.extraInfo=o,c.cause=Yt(Yt(Yt([s],r||[],!0),i||[],!0),a||[],!0).find(function(l){return!!l})||null,c.__proto__=t.prototype,c}return t}(Error);function gm(e){return Xi(e)&&"code"in e&&"reason"in e}function hm(e){var t;return Xi(e)&&((t=e.target)===null||t===void 0?void 0:t.readyState)===WebSocket.CLOSED}var vm=function(e){vr(t,e);function t(n){var r=e.call(this)||this;return r.client=n,r}return t.prototype.request=function(n){var r=this;return new Te(function(i){return r.client.subscribe(Fe(Fe({},n),{query:ra(n.query)}),{next:i.next.bind(i),complete:i.complete.bind(i),error:function(a){if(a instanceof Error)return i.error(a);var s=gm(a);return s||hm(a)?i.error(new Error("Socket closed".concat(s?" with event ".concat(a.code):"").concat(s?" ".concat(a.reason):""))):i.error(new mm({graphQLErrors:Array.isArray(a)?a:[a]}))}})})},t}(kn);function Ue(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function Tt(e){return Ue(e)==="object"}function bm(e){return Array.isArray(e)&&e.length>0&&e.every(t=>"message"in t)}function Yo(e,t){return e.length<124?e:t}const ym="graphql-transport-ws";var Ye;(function(e){e[e.InternalServerError=4500]="InternalServerError",e[e.InternalClientError=4005]="InternalClientError",e[e.BadRequest=4400]="BadRequest",e[e.BadResponse=4004]="BadResponse",e[e.Unauthorized=4401]="Unauthorized",e[e.Forbidden=4403]="Forbidden",e[e.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",e[e.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",e[e.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",e[e.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",e[e.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests"})(Ye||(Ye={}));var we;(function(e){e.ConnectionInit="connection_init",e.ConnectionAck="connection_ack",e.Ping="ping",e.Pong="pong",e.Subscribe="subscribe",e.Next="next",e.Error="error",e.Complete="complete"})(we||(we={}));function Qo(e){if(!Tt(e))throw new Error(`Message is expected to be an object, but got ${Ue(e)}`);if(!e.type)throw new Error("Message is missing the 'type' property");if(typeof e.type!="string")throw new Error(`Message is expects the 'type' property to be a string, but got ${Ue(e.type)}`);switch(e.type){case we.ConnectionInit:case we.ConnectionAck:case we.Ping:case we.Pong:{if(e.payload!=null&&!Tt(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);break}case we.Subscribe:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ue(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!Tt(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Ue(e.payload)}`);if(typeof e.payload.query!="string")throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${Ue(e.payload.query)}`);if(e.payload.variables!=null&&!Tt(e.payload.variables))throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Ue(e.payload.variables)}`);if(e.payload.operationName!=null&&Ue(e.payload.operationName)!=="string")throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Ue(e.payload.operationName)}`);if(e.payload.extensions!=null&&!Tt(e.payload.extensions))throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Ue(e.payload.extensions)}`);break}case we.Next:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ue(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!Tt(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Ue(e.payload)}`);break}case we.Error:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ue(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!bm(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);break}case we.Complete:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ue(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);break}default:throw new Error(`Invalid message 'type' property "${e.type}"`)}return e}function Sm(e,t){return Qo(typeof e=="string"?JSON.parse(e,t):e)}function An(e,t){return Qo(e),JSON.stringify(e,t)}var en=function(e){return this instanceof en?(this.v=e,this):new en(e)},xm=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,a=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(p){return function(I){return Promise.resolve(I).then(p,f)}}function u(p,I){r[p]&&(i[p]=function(x){return new Promise(function(b,S){a.push([p,x,b,S])>1||o(p,x)})},I&&(i[p]=I(i[p])))}function o(p,I){try{c(r[p](I))}catch(x){g(a[0][3],x)}}function c(p){p.value instanceof en?Promise.resolve(p.value.v).then(l,f):g(a[0][2],p)}function l(p){o("next",p)}function f(p){o("throw",p)}function g(p,I){p(I),a.shift(),a.length&&o(a[0][0],a[0][1])}};function Im(e){const{url:t,connectionParams:n,lazy:r=!0,onNonLazyError:i=console.error,lazyCloseTimeout:a=0,keepAlive:s=0,disablePong:u,connectionAckWaitTimeout:o=0,retryAttempts:c=5,retryWait:l=async function(k){let F=1e3;for(let V=0;V<k;V++)F*=2;await new Promise(V=>setTimeout(V,F+Math.floor(Math.random()*2700+300)))},shouldRetry:f=pa,isFatalConnectionProblem:g,on:p,webSocketImpl:I,generateID:x=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,k=>{const F=Math.random()*16|0;return(k=="x"?F:F&3|8).toString(16)})},jsonMessageReplacer:b,jsonMessageReviver:S}=e;let v;if(I){if(!Cm(I))throw new Error("Invalid WebSocket implementation provided");v=I}else typeof WebSocket<"u"?v=WebSocket:typeof global<"u"?v=global.WebSocket||global.MozWebSocket:typeof window<"u"&&(v=window.WebSocket||window.MozWebSocket);if(!v)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const w=v,E=(()=>{const P=(()=>{const F={};return{on(V,Q){return F[V]=Q,()=>{delete F[V]}},emit(V){var Q;"id"in V&&((Q=F[V.id])===null||Q===void 0||Q.call(F,V))}}})(),k={connecting:p!=null&&p.connecting?[p.connecting]:[],opened:p!=null&&p.opened?[p.opened]:[],connected:p!=null&&p.connected?[p.connected]:[],ping:p!=null&&p.ping?[p.ping]:[],pong:p!=null&&p.pong?[p.pong]:[],message:p!=null&&p.message?[P.emit,p.message]:[P.emit],closed:p!=null&&p.closed?[p.closed]:[],error:p!=null&&p.error?[p.error]:[]};return{onMessage:P.on,on(F,V){const Q=k[F];return Q.push(V),()=>{Q.splice(Q.indexOf(V),1)}},emit(F,...V){for(const Q of[...k[F]])Q(...V)}}})();function C(P){const k=[E.on("error",F=>{k.forEach(V=>V()),P(F)}),E.on("closed",F=>{k.forEach(V=>V()),P(F)})]}let _,h=0,T,D=!1,$=0,L=!1;async function G(){clearTimeout(T);const[P,k]=await(_??(_=new Promise((Q,ce)=>(async()=>{if(D){if(await l($),!h)return _=void 0,ce({code:1e3,reason:"All Subscriptions Gone"});$++}E.emit("connecting",D);const M=new w(typeof t=="function"?await t():t,ym);let A,W;function H(){isFinite(s)&&s>0&&(clearTimeout(W),W=setTimeout(()=>{M.readyState===w.OPEN&&(M.send(An({type:we.Ping})),E.emit("ping",!1,void 0))},s))}C(te=>{_=void 0,clearTimeout(A),clearTimeout(W),ce(te),te instanceof Ko&&(M.close(4499,"Terminated"),M.onerror=null,M.onclose=null)}),M.onerror=te=>E.emit("error",te),M.onclose=te=>E.emit("closed",te),M.onopen=async()=>{try{E.emit("opened",M);const te=typeof n=="function"?await n():n;if(M.readyState!==w.OPEN)return;M.send(An(te?{type:we.ConnectionInit,payload:te}:{type:we.ConnectionInit},b)),isFinite(o)&&o>0&&(A=setTimeout(()=>{M.close(Ye.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")},o)),H()}catch(te){E.emit("error",te),M.close(Ye.InternalClientError,Yo(te instanceof Error?te.message:new Error(te).message,"Internal client error"))}};let Y=!1;M.onmessage=({data:te})=>{try{const B=Sm(te,S);if(E.emit("message",B),B.type==="ping"||B.type==="pong"){E.emit(B.type,!0,B.payload),B.type==="pong"?H():u||(M.send(An(B.payload?{type:we.Pong,payload:B.payload}:{type:we.Pong})),E.emit("pong",!1,B.payload));return}if(Y)return;if(B.type!==we.ConnectionAck)throw new Error(`First message cannot be of type ${B.type}`);clearTimeout(A),Y=!0,E.emit("connected",M,B.payload,D),D=!1,$=0,Q([M,new Promise((se,qe)=>C(qe))])}catch(B){M.onmessage=null,E.emit("error",B),M.close(Ye.BadResponse,Yo(B instanceof Error?B.message:new Error(B).message,"Bad response"))}}})())));P.readyState===w.CLOSING&&await k;let F=()=>{};const V=new Promise(Q=>F=Q);return[P,F,Promise.race([V.then(()=>{if(!h){const Q=()=>P.close(1e3,"Normal Closure");isFinite(a)&&a>0?T=setTimeout(()=>{P.readyState===w.OPEN&&Q()},a):Q()}}),k])]}function re(P){if(pa(P)&&(_m(P.code)||[Ye.InternalServerError,Ye.InternalClientError,Ye.BadRequest,Ye.BadResponse,Ye.Unauthorized,Ye.SubprotocolNotAcceptable,Ye.SubscriberAlreadyExists,Ye.TooManyInitialisationRequests].includes(P.code)))throw P;if(L)return!1;if(pa(P)&&P.code===1e3)return h>0;if(!c||$>=c||!f(P)||g!=null&&g(P))throw P;return D=!0}r||(async()=>{for(h++;;)try{const[,,P]=await G();await P}catch(P){try{if(!re(P))return}catch(k){return i==null?void 0:i(k)}}})();function ne(P,k){const F=x(P);let V=!1,Q=!1,ce=()=>{h--,V=!0};return(async()=>{for(h++;;)try{const[M,A,W]=await G();if(V)return A();const H=E.onMessage(F,Y=>{switch(Y.type){case we.Next:{k.next(Y.payload);return}case we.Error:{Q=!0,V=!0,k.error(Y.payload),ce();return}case we.Complete:{V=!0,ce();return}}});M.send(An({id:F,type:we.Subscribe,payload:P},b)),ce=()=>{!V&&M.readyState===w.OPEN&&M.send(An({id:F,type:we.Complete},b)),h--,V=!0,A()},await W.finally(H);return}catch(M){if(!re(M))return}})().then(()=>{Q||k.complete()}).catch(M=>{k.error(M)}),()=>{V||ce()}}return{on:E.on,subscribe:ne,iterate(P){const k=[],F={done:!1,error:null,resolve:()=>{}},V=ne(P,{next(ce){k.push(ce),F.resolve()},error(ce){F.done=!0,F.error=ce,F.resolve()},complete(){F.done=!0,F.resolve()}}),Q=function(){return xm(this,arguments,function*(){for(;;){for(k.length||(yield en(new Promise(A=>F.resolve=A)));k.length;)yield yield en(k.shift());if(F.error)throw F.error;if(F.done)return yield en(void 0)}})}();return Q.throw=async ce=>(F.done||(F.done=!0,F.error=ce,F.resolve()),{done:!0,value:void 0}),Q.return=async()=>(V(),{done:!0,value:void 0}),Q},async dispose(){if(L=!0,_){const[P]=await _;P.close(1e3,"Normal Closure")}},terminate(){_&&E.emit("closed",new Ko)}}}class Ko extends Error{constructor(){super(...arguments),this.name="TerminatedCloseEvent",this.message="4499: Terminated",this.code=4499,this.reason="Terminated",this.wasClean=!1}}function pa(e){return Tt(e)&&"code"in e&&"reason"in e}function _m(e){return[1e3,1001,1006,1005,1012,1013,1014].includes(e)?!1:e>=1e3&&e<=1999}function Cm(e){return typeof e=="function"&&"constructor"in e&&"CLOSED"in e&&"CLOSING"in e&&"CONNECTING"in e&&"OPEN"in e}function Jo(e){return new kn(function(t,n){return new Te(function(r){var i,a,s;try{i=n(t).subscribe({next:function(u){if(u.errors?s=e({graphQLErrors:u.errors,response:u,operation:t,forward:n}):fm(u)&&(s=e({protocolErrors:u.extensions[Wo],response:u,operation:t,forward:n})),s){a=s.subscribe({next:r.next.bind(r),error:r.error.bind(r),complete:r.complete.bind(r)});return}r.next(u)},error:function(u){if(s=e({operation:t,networkError:u,graphQLErrors:u&&u.result&&u.result.errors||void 0,forward:n}),s){a=s.subscribe({next:r.next.bind(r),error:r.error.bind(r),complete:r.complete.bind(r)});return}r.error(u)},complete:function(){s||r.complete.bind(r)()}})}catch(u){e({networkError:u,operation:t,forward:n}),r.error(u)}return function(){i&&i.unsubscribe(),a&&i.unsubscribe()}})})}(function(e){vr(t,e);function t(n){var r=e.call(this)||this;return r.link=Jo(n),r}return t.prototype.request=function(n,r){return this.link.request(n,r)},t})(kn);var wm=function(){if(typeof AbortController>"u")return{controller:!1,signal:!1};var e=new AbortController,t=e.signal;return{controller:e,signal:t}},Xo=Object.prototype.hasOwnProperty;function Om(e,t){if(e.status>=300){var n=function(){try{return JSON.parse(t)}catch{return t}};zo(e,n(),"Response not successful: Received status code ".concat(e.status))}try{return JSON.parse(t)}catch(i){var r=i;throw r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,r}}function Em(e){return function(t){return t.text().then(function(n){return Om(t,n)}).then(function(n){return!Array.isArray(n)&&!Xo.call(n,"data")&&!Xo.call(n,"errors")&&zo(t,n,"Server response was missing for query '".concat(Array.isArray(e)?e.map(function(r){return r.operationName}):e.operationName,"'.")),n})}}var Or=function(e,t){var n;try{n=JSON.stringify(e)}catch(i){var r=$n(54,t,i.message);throw r.parseError=i,r}return n};function Tm(e,t){var n=[],r=function(f,g){n.push("".concat(f,"=").concat(encodeURIComponent(g)))};if("query"in t&&r("query",t.query),t.operationName&&r("operationName",t.operationName),t.variables){var i=void 0;try{i=Or(t.variables,"Variables map")}catch(f){return{parseError:f}}r("variables",i)}if(t.extensions){var a=void 0;try{a=Or(t.extensions,"Extensions map")}catch(f){return{parseError:f}}r("extensions",a)}var s="",u=e,o=e.indexOf("#");o!==-1&&(s=e.substr(o),u=e.substr(0,o));var c=u.indexOf("?")===-1?"?":"&",l=u+c+n.join("&")+s;return{newURI:l}}var Dm={includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},$m={accept:"*/*","content-type":"application/json"},Pm={method:"POST"},Mm={http:Dm,headers:$m,options:Pm},Fm=function(e,t){return t(e)};function Nm(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={},a={};n.forEach(function(f){i=Fe(Fe(Fe({},i),f.options),{headers:Fe(Fe({},i.headers),f.headers)}),f.credentials&&(i.credentials=f.credentials),a=Fe(Fe({},a),f.http)}),i.headers&&(i.headers=km(i.headers,a.preserveHeaderCase));var s=e.operationName,u=e.extensions,o=e.variables,c=e.query,l={operationName:s,variables:o};return a.includeExtensions&&(l.extensions=u),a.includeQuery&&(l.query=t(c,ra)),{options:i,body:l}}function km(e,t){if(!t){var n={};return Object.keys(Object(e)).forEach(function(a){n[a.toLowerCase()]=e[a]}),n}var r={};Object.keys(Object(e)).forEach(function(a){r[a.toLowerCase()]={originalName:a,value:e[a]}});var i={};return Object.keys(r).forEach(function(a){i[r[a].originalName]=r[a].value}),i}var Am=function(e,t){var n=e.getContext(),r=n.uri;return r||(typeof t=="function"?t(e):t||"/graphql")};function Lm(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function jm(e,t,n=""){if(!arguments.length)throw new TypeError("Argument 1 `value` is required.");if(typeof t!="function")throw new TypeError("Argument 2 `isExtractable` must be a function.");if(typeof n!="string")throw new TypeError("Argument 3 `path` must be a string.");const r=new Map,i=new Map;function a(s,u,o){if(t(s)){const f=i.get(s);return f?f.push(u):i.set(s,[u]),null}const c=Array.isArray(s)||typeof FileList<"u"&&s instanceof FileList,l=Lm(s);if(c||l){let f=r.get(s);const g=!f;if(g&&(f=c?[]:s instanceof Object?{}:Object.create(null),r.set(s,f)),!o.has(s)){const p=u?`${u}.`:"",I=new Set(o).add(s);if(c){let x=0;for(const b of s){const S=a(b,p+x++,I);g&&f.push(S)}}else for(const x in s){const b=a(s[x],p+x,I);g&&(f[x]=b)}}return f}return s}return{clone:a(e,n,new Set),files:i}}function qm(e,t,n){"name"in n?e.append(t,n,n.name):e.append(t,n)}function Bm(e){return typeof File<"u"&&e instanceof File||typeof Blob<"u"&&e instanceof Blob}function Rm({uri:e="/graphql",useGETForQueries:t,isExtractableFile:n=Bm,FormData:r,formDataAppendFile:i=qm,print:a=Fm,fetch:s,fetchOptions:u,credentials:o,headers:c,includeExtensions:l}={}){const f={http:{includeExtensions:l},options:u,credentials:o,headers:c};return new kn(g=>{const p=g.getContext(),{clientAwareness:{name:I,version:x}={},headers:b}=p,S={http:p.http,options:p.fetchOptions,credentials:p.credentials,headers:{...I&&{"apollographql-client-name":I},...x&&{"apollographql-client-version":x},...b}},{options:v,body:w}=Nm(g,a,Mm,f,S),{clone:E,files:C}=jm(w,n,"");let _=Am(g,e);if(C.size){v.headers&&delete v.headers["content-type"];const D=r||FormData,$=new D;$.append("operations",Or(E,"Payload"));const L={};let G=0;C.forEach(re=>{L[++G]=re}),$.append("map",JSON.stringify(L)),G=0,C.forEach((re,ne)=>{i($,String(++G),ne)}),v.body=$}else if(t&&!g.query.definitions.some(D=>D.kind==="OperationDefinition"&&D.operation==="mutation")&&(v.method="GET"),v.method==="GET"){const{newURI:D,parseError:$}=Tm(_,w);if($)return new Te(L=>{L.error($)});_=D}else v.body=Or(E,"Payload");const{controller:h}=wm();typeof h!="boolean"&&(v.signal&&(v.signal.aborted?h.abort():v.signal.addEventListener("abort",()=>{h.abort()},{once:!0})),v.signal=h.signal);const T=s||fetch;return new Te(D=>{let $;return T(_,v).then(L=>(g.setContext({response:L}),L)).then(Em(g)).then(L=>{D.next(L),D.complete()}).catch(L=>{$||(L.result&&L.result.errors&&L.result.data&&D.next(L.result),D.error(L))}),()=>{$=!0,typeof h!="boolean"&&h.abort()}})})}const yt=e=>(t,{args:n,canRead:r,toReference:i})=>r(t)?t:i({__typename:e,id:n==null?void 0:n.id}),Ln=(e,{canRead:t})=>{if(e!==void 0)return t(e)?e:null},Vm={Query:{fields:{findImage:{read:yt("Image")},findPerformer:{read:yt("Performer")},findStudio:{read:yt("Studio")},findGroup:{read:yt("Group")},findGallery:{read:yt("Gallery")},findScene:{read:yt("Scene")},findTag:{read:yt("Tag")},findSavedFilter:{read:yt("SavedFilter")}}},Scene:{fields:{studio:{read:Ln}}},Image:{fields:{studio:{read:Ln},paths:{merge:!1}}},Group:{fields:{studio:{read:Ln}}},Gallery:{fields:{studio:{read:Ln}}},Studio:{fields:{parent_studio:{read:Ln}}}},Gm={BaseFile:["VideoFile","ImageFile","GalleryFile"],VisualFile:["VideoFile","ImageFile"]},Um=((nf=document.querySelector("base"))==null?void 0:nf.getAttribute("href"))??"/",ma=e=>{let t=new URL(window.location.origin+Um);return e&&(t.pathname+=e),t},zm=()=>{const e=ma("graphql"),t=ma("graphql");t.protocol==="https:"?t.protocol="wss:":t.protocol="ws:";const n=Rm({uri:e.toString()}),r=Im({url:t.toString(),retryAttempts:1/0,shouldRetry(){return!0}}),i=new vm(r),a=Jo(({networkError:l})=>{if(l&&l.statusCode===401){const f=new URL(ma("login"),window.location.toString());f.searchParams.append("returnURL",window.location.href),window.location.href=f.toString()}}),s=m.ApolloLink.split(({query:l})=>{const f=Yp(l);return f.kind==="OperationDefinition"&&f.operation==="subscription"},i,n),u=m.ApolloLink.from([a,s]),o=new m.InMemoryCache({typePolicies:Vm,possibleTypes:Gm}),c=new m.ApolloClient({link:u,cache:o});return c.subscribe({query:Hf}).subscribe({next:()=>{c.resetStore()}}),{cache:o,client:c,wsClient:r}},{client:Er}=zm();function Zo(e,t){const n={};for(const r of t){const{selections:i}=Wp(r).selectionSet;for(const a of i){if(!Up(a))continue;const s=a.name.value;n[s]=(u,{DELETE:o})=>o}}e.modify({fields:n}),e.gc()}function eu(e,t,n){const r=e.extract();for(const i in r){if(n!=null&&n.includes(i))continue;const s=r[i].__typename;if(s&&t[s]){const u={};for(const o of t[s])u[o]=(c,{DELETE:l})=>l;e.modify({id:i,fields:u})}}}const Hm=e=>Er.query({query:ao,variables:{scene_ids:e}}),Wm=e=>Er.query({query:io,variables:{filter:e.makeFindFilter(),scene_marker_filter:e.makeFilter()}}),Ym=e=>zf({variables:{id:e},skip:e==="new"||e===""}),Qm=e=>Er.query({query:oo,variables:{ids:e}}),tu=e=>Er.query({query:oo,variables:{filter:e.makeFindFilter(),tag_filter:e.makeFilter()}});function Km(e,t,n){e.modify({fields:{stats(r){return{...r,[t]:r[t]+n}}}})}const nu={Tag:["parents","children"]},Jm=[jf,io,ao,Lf,Af,qf,so],Xm=()=>Ff({update(e,t){var i;const n=(i=t.data)==null?void 0:i.tagCreate;if(!n)return;Km(e,"tag_count",1);const r={__typename:"Tag",id:n.id};eu(e,nu,e.identify(r)),Zo(e,[so])}}),Zm=()=>kf({update(e,t){var i;const n=(i=t.data)==null?void 0:i.tagUpdate;if(!n)return;const r={__typename:"Tag",id:n.id};eu(e,nu,e.identify(r)),Zo(e,Jm)}}),eg=e=>Gf({variables:{path:e}}),tg=200,ng=25,jn=["byte","kibibyte","mebibyte","gibibyte","tebibyte","pebibyte"],rg=["B","KiB","MiB","GiB","TiB","PiB"],ig=(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return{size:0,unit:jn[0]};let t=0,n=e;for(;n>=1024&&t+1<jn.length;)n/=1024,t++;return{size:n,unit:jn[t]}},fe=class fe{constructor(t,n,r,i){this.singular=t,this.plural=n,this.shortString=r,this.secs=i}toString(){return this.shortString}};Z(fe,"SECOND",new fe("second","seconds","s",1)),Z(fe,"MINUTE",new fe("minute","minutes","m",60)),Z(fe,"HOUR",new fe("hour","hours","h",fe.MINUTE.secs*60)),Z(fe,"DAY",new fe("day","days","D",fe.HOUR.secs*24)),Z(fe,"WEEK",new fe("week","weeks","W",fe.DAY.secs*7)),Z(fe,"MONTH",new fe("month","months","M",fe.DAY.secs*30)),Z(fe,"YEAR",new fe("year","years","Y",fe.DAY.secs*365)),Z(fe,"DURATIONS",[fe.SECOND,fe.MINUTE,fe.HOUR,fe.DAY,fe.WEEK,fe.MONTH,fe.YEAR]);let Dt=fe;class ru{constructor(t,n){this.count=t,this.duration=n}toString(){return this.count.toString()+this.duration.toString()}}const ag=(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return[new ru(0,Dt.DURATIONS[0])];const t=[];let n=e;for(let r=Dt.DURATIONS.length-1;r>=0;r--){const i=Math.floor(n/Dt.DURATIONS[r].secs);i!==0&&(n%=Dt.DURATIONS[r].secs,t.push(new ru(i,Dt.DURATIONS[r])))}return t},sg=(e=0,t=2)=>ag(e).slice(0,t).join(" "),og=e=>{const t=jn.indexOf(e);return rg[t]},ug=e=>jn.indexOf(e)>=3?1:0,Tr=(e,t)=>{let n=!1;e<0&&(n=!0,e=-e);const r=e%1,i=Math.round(r*1e3);let a=Math.trunc(e);const s=a%60;a=(a-s)/60;const u=a%60;a=(a-u)/60;const o=a;let c=String(s).padStart(2,"0");return o===0?c=String(u)+":"+c:(c=String(u).padStart(2,"0")+":"+c,c=String(o)+":"+c),t&&i>0&&(c+="."+i.toString().padStart(3,"0")),n?"-"+c:c},cg=(e,t)=>t===void 0?Tr(e):`${Tr(e)}-${Tr(t)}`,lg=e=>{if(!e)return null;const t=e.split(":");if(t.length>3)return null;let n=t[t.length-1],r=0;if(n.includes(".")){const s=n.split(".");if(s.length!==2)return null;n=s[0];const u=parseInt(s[1],10);if(Number.isNaN(u))return null;r=u/1e3}let i=0,a=1;for(;t.length>0;){const s=t.pop();if(s===void 0)return null;const u=parseInt(s,10);if(Number.isNaN(u))return null;i+=a*u,a*=60}return i+r},dg=e=>e?e.replace(/^.*[\\/]/,""):"No File Name",fg=e=>{if(!e)return null;const t=e.split("-");if(t.length!==3)return null;const n=Number(t[0]),r=Math.max(0,Number(t[1])-1),i=Number(t[2]);return new Date(n,r,i,0,0,0,0)},Dr=e=>{if(!e)return null;const t=e.split("-");let n=Number(t[0]);Number.isNaN(n)&&(n=new Date().getFullYear());let r=0;t.length>1&&(r=Math.max(0,Number(t[1])-1),(r>11||Number.isNaN(r))&&(r=0));let i=1;return t.length>2&&(i=Number(t[2]),(i>31||Number.isNaN(i))&&(i=1)),new Date(n,r,i,0,0,0,0)},pg=e=>{if(!e)return null;const t=e.split(" ");let n=null;if(t.length>0&&(n=Dr(t[0])),n||(n=new Date),t.length>1){const r=t[1].split(":");n&&r.length>0&&n.setHours(Number(r[0])),n&&r.length>1&&n.setMinutes(Number(r[1])),n&&r.length>2&&n.setSeconds(Number(r[2]))}return n};function iu(e){return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`}function mg(e){return`${iu(e)} ${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`}const gg=(e,t)=>{if(!e)return 0;const n=Dr(e),r=t?Dr(t):new Date;if(!n||!r)return 0;let i=r.getFullYear()-n.getFullYear();return(n.getMonth()>r.getMonth()||n.getMonth()>=r.getMonth()&&n.getDate()>r.getDate())&&(i-=1),i},hg=e=>`${(e/1e6).toFixed(2)} megabits per second`,vg=(e,t)=>{const n=e>t?t:e;if(n>=6144)return"HUGE";if(n>=3840)return"8K";if(n>=3584)return"7K";if(n>=3e3)return"6K";if(n>=2560)return"5K";if(n>=1920)return"4K";if(n>=1440)return"1440p";if(n>=1080)return"1080p";if(n>=720)return"720p";if(n>=540)return"540p";if(n>=480)return"480p";if(n>=360)return"360p";if(n>=240)return"240p";if(n>=144)return"144p"},au=(e,t)=>!e||e.startsWith("http://")||e.startsWith("https://")?e:t?e.startsWith(t.host)?`${t.protocol}//${e}`:`${t.protocol}//${t.host}/${e}`:`https://${e}`,bg=(e,t)=>{if(t)return t.hostname;if(e){let n="";try{const r=au(e);r&&(e=r),n=new URL(e).hostname}catch{n=e}return n}else return""},su=(e,t,n=!0)=>t?e.formatDate(t,{format:"long",timeZone:n?"utc":void 0}):"",yg=(e,t,n=!0)=>{if(!t)return"";const r=t.match(/^(\d{4})$/);if(r){const a=parseInt(r[1],10);return e.formatDate(Date.UTC(a,0),{year:"numeric",timeZone:n?"utc":void 0})}const i=t.match(/^(\d{4})-(\d{2})$/);if(i){const a=parseInt(i[1],10),s=parseInt(i[2],10)-1;return e.formatDate(Date.UTC(a,s),{year:"numeric",month:"long",timeZone:n?"utc":void 0})}return e.formatDate(t,{format:"long",timeZone:n?"utc":void 0})},Sg=(e,t,n=!1)=>`${su(e,t,n)} ${e.formatTime(t,{timeZone:n?"utc":void 0})}`,ga=["","K","M","B"],Ne={fileSize:ig,formatFileSizeUnit:og,fileSizeFractionalDigits:ug,secondsToTimestamp:Tr,formatTimestampRange:cg,timestampToSeconds:lg,fileNameFromPath:dg,stringToDate:fg,stringToFuzzyDate:Dr,stringToFuzzyDateTime:pg,dateToString:iu,dateTimeToString:mg,age:gg,bitRate:hg,resolution:vg,sanitiseURL:au,domainFromURL:bg,formatDate:su,formatFuzzyDate:yg,formatDateTime:Sg,secondsAsTimeString:sg,abbreviateCounter:(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return{size:0,unit:ga[0]};let t=0,n=0,r=e;for(;r>=1e3&&t+1<ga.length;)r/=1e3,t++,n=1;return{size:r,unit:ga[t],digits:n}},stripQuotes:e=>e.startsWith('"')&&e.endsWith('"')?e.slice(1,-1):e,addQuotes:e=>`"${e}"`},xg={[y.Equals]:"criterion_modifier.equals",[y.NotEquals]:"criterion_modifier.not_equals",[y.GreaterThan]:"criterion_modifier.greater_than",[y.LessThan]:"criterion_modifier.less_than",[y.IsNull]:"criterion_modifier.is_null",[y.NotNull]:"criterion_modifier.not_null",[y.Includes]:"criterion_modifier.includes",[y.IncludesAll]:"criterion_modifier.includes_all",[y.Excludes]:"criterion_modifier.excludes",[y.MatchesRegex]:"criterion_modifier.matches_regex",[y.NotMatchesRegex]:"criterion_modifier.not_matches_regex",[y.Between]:"criterion_modifier.between",[y.NotBetween]:"criterion_modifier.not_between"};class ou{constructor(t){Z(this,"criterionOption");this.criterionOption=t}isValid(){return!0}clone(){const t=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return t.cloneValues(),t}cloneValues(){}getId(){return`${this.criterionOption.type}`}}class xe extends ou{constructor(n,r){super(n);Z(this,"_modifier");Z(this,"_value");this.modifier=n.defaultModifier,this.value=r}get modifier(){return this._modifier}set modifier(n){this._modifier=n}get value(){return this._value}set value(n){this._value=n}isValid(){return!0}modifierCriterionOption(){return this.criterionOption}clone(){const n=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return n.cloneValues(),n}cloneValues(){}static getModifierLabel(n,r){const i=xg[r];return i?n.formatMessage({id:i}):""}getLabel(n,r=!1){const i=xe.getModifierLabel(n,this.modifier);let a="";this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(a=this.getLabelValue(n));const s=r?this.criterionOption.sfwMessageID??this.criterionOption.messageID:this.criterionOption.messageID;return n.formatMessage({id:"criterion_modifier.format_string"},{criterion:n.formatMessage({id:s}),modifierString:i,valueString:a})}toQueryParams(){const n={type:this.criterionOption.type,modifier:this.modifier};return this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(n.value=this.encodeValue()),n}encodeValue(){return this.value}decodeValue(n){n!=null&&(this.value=n)}fromDecodedParams(n){const r=n;this.modifier=r.modifier,this.decodeValue(r.value)}setFromSavedCriterion(n){const r=n;r.value!==void 0&&r.value!==null&&(this.value=r.value),this.modifier=r.modifier}applyToCriterionInput(n){n[this.criterionOption.type]=this.toCriterionInput()}applyToSavedCriterion(n){n[this.criterionOption.type]={value:this.value,modifier:this.modifier}}toCriterionInput(){return{value:this.value,modifier:this.modifier}}}class uu{constructor(t){Z(this,"type");Z(this,"messageID");Z(this,"makeCriterionFn");Z(this,"sfwMessageID");Z(this,"hidden",!1);this.type=t.type,this.messageID=t.messageID,this.makeCriterionFn=t.makeCriterion,this.hidden=t.hidden??!1,this.sfwMessageID=t.sfwMessageID}makeCriterion(t){return this.makeCriterionFn(this,t)}}class pe extends uu{constructor(n){super(n);Z(this,"modifierOptions");Z(this,"defaultModifier");Z(this,"options");Z(this,"inputType");this.modifierOptions=n.modifierOptions??[],this.defaultModifier=n.defaultModifier??y.Equals,this.options=n.options,this.inputType=n.inputType}}class ha extends pe{constructor(t,n,r,i,a){const s=[y.Includes,y.Excludes,y.IsNull,y.NotNull];let u=y.Includes;r&&(s.unshift(y.IncludesAll),u=y.IncludesAll),super({messageID:t,type:n,modifierOptions:s,defaultModifier:u,inputType:i,makeCriterion:a||(()=>new qn(this))})}}class qn extends xe{constructor(t,n=[]){super(t,n)}cloneValues(){this.value=this.value.map(t=>({...t}))}getLabelValue(t){return this.value.map(n=>n.label).join(", ")}toCriterionInput(){return{value:this.value.map(t=>t.id),modifier:this.modifier}}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull?!0:this.value.length>0}}class Bn extends xe{constructor(t,n={items:[],excluded:[],depth:0}){super(t,n)}cloneValues(){this.value={...this.value,items:this.value.items.map(t=>({...t})),excluded:this.value.excluded.map(t=>({...t}))}}get modifier(){return this._modifier}set modifier(t){this._modifier=t,this.value&&t!==y.Includes&&t!==y.IncludesAll&&(this.value.excluded=[])}setFromSavedCriterion(t){const{modifier:n,value:r}=t;r!==void 0&&(this.value={items:r.items||[],excluded:r.excluded||[],depth:r.depth||0});const i=this.criterionOption.modifierOptions??[];n===y.Excludes&&i.find(a=>a===y.Excludes)===void 0?(this.modifier=y.Includes,this.value.excluded=[...this.value.excluded,...this.value.items],this.value.items=[]):this.modifier=n}getLabelValue(t){const n=(this.value.items??[]).map(r=>r.label).join(", ");return this.value.depth===0?n:`${n} (+${this.value.depth>0?this.value.depth:"all"})`}toCriterionInput(){let t=[];const n=this.modifier===y.Equals?0:this.value.depth;return this.value.excluded&&(t=this.value.excluded.map(r=>r.id)),{value:this.value.items.map(r=>r.id),excludes:t,modifier:this.modifier,depth:n}}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull?!0:this.value.items.length>0||this.value.excluded&&this.value.excluded.length>0}getLabel(t,n){let r="criterion_modifier.format_string",i=xe.getModifierLabel(t,this.modifier),a="",s="";this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(a=this.value.items.map(o=>o.label).join(", "),this.value.excluded&&this.value.excluded.length>0&&(this.value.items.length===0?(i=xe.getModifierLabel(t,y.Excludes),a=this.value.excluded.map(o=>o.label).join(", ")):(r="criterion_modifier.format_string_excludes",s=this.value.excluded.map(o=>o.label).join(", "))),this.value.depth!==0&&(r+="_depth"));const u=n?this.criterionOption.sfwMessageID??this.criterionOption.messageID:this.criterionOption.messageID;return t.formatMessage({id:r},{criterion:t.formatMessage({id:u}),modifierString:i,valueString:a,excludedString:s,depth:this.value.depth})}}class $r extends pe{constructor(t){super({modifierOptions:[y.Equals,y.NotEquals,y.Includes,y.Excludes,y.IsNull,y.NotNull,y.MatchesRegex,y.NotMatchesRegex],defaultModifier:y.Equals,inputType:"text",makeCriterion:()=>new nt(this),...t})}}function ie(e,t,n){return new $r({messageID:t??e,type:e,...n})}class Ig extends pe{constructor(t,n){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.Includes,y.Excludes,y.MatchesRegex,y.NotMatchesRegex],defaultModifier:y.Equals,inputType:"text",makeCriterion:()=>new nt(this)})}}function Pr(e,t){return new Ig(t??e,e)}class nt extends xe{constructor(t){super(t,"")}getLabelValue(t){return this.value}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull||this.value.length>0}}class va extends xe{constructor(t,n=[]){super(t,n)}cloneValues(){this.value=this.value.slice()}getLabelValue(t){return this.value.join(", ")}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull||this.value.length>0}}class $t extends pe{constructor(t,n,r){super({messageID:t,type:n,modifierOptions:[],defaultModifier:y.Equals,options:["true","false"],makeCriterion:r||(()=>new Pt(this))})}}function Mr(e,t){return new $t(e,e)}class Pt extends nt{toCriterionInput(){return this.value==="true"}isValid(){return this.value==="true"||this.value==="false"}}class cu extends pe{constructor(t,n,r){super({messageID:t,type:n,options:["true","false"],makeCriterion:r||(()=>new ba(this))})}}class ba extends nt{toCriterionInput(){return this.value}isValid(){return this.value==="true"||this.value==="false"}}class _g extends pe{constructor(t,n){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.IsNull,y.NotNull,y.Between,y.NotBetween],defaultModifier:y.Equals,inputType:"number",makeCriterion:()=>new ya(this)})}}function lu(e,t){return new _g(t??e,e)}class Cg extends pe{constructor(t,n,r){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.Between,y.NotBetween,y.IsNull,y.NotNull],defaultModifier:y.Equals,inputType:"number",makeCriterion:r||(()=>new ya(this))})}}class Fr extends pe{constructor(t,n,r,i){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.Between,y.NotBetween],defaultModifier:y.Equals,inputType:"number",makeCriterion:r||(()=>new ya(this)),...i})}}function ee(e,t,n){return new Fr(t??e,e,void 0,n)}function Rn(e,t){return e===y.Between||e===y.NotBetween?{value:t.value,value2:t.value2}:{value:t.value}}function wg(e){return typeof e.value=="object"?e.value:{value:e.value,value2:e.value2}}class ya extends xe{constructor(t){super(t,{value:void 0,value2:void 0})}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(t){typeof t!="object"?this._value={value:t,value2:void 0}:this._value=t}toCriterionInput(){var t,n;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??0,value2:(n=this.value)==null?void 0:n.value2}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return Rn(this.modifier,this.value)}getLabelValue(t){const{value:n,value2:r}=this.value;return this.modifier===y.Between||this.modifier===y.NotBetween?`${n}, ${r??0}`:`${n}`}isValid(){if(this.modifier===y.IsNull||this.modifier===y.NotNull)return!0;const{value:t,value2:n}=this.value;return!(t===void 0||n===void 0&&(this.modifier===y.Between||this.modifier===y.NotBetween))}}let Og=class extends Fr{constructor(t,n){super(t,n,()=>new du(this))}};function Nr(e,t){return new Og(e,e)}class Eg extends Cg{constructor(t,n){super(t,n,()=>new du(this))}}function Tg(e,t){return new Eg(e,e)}class du extends xe{constructor(t){super(t,{value:void 0,value2:void 0})}cloneValues(){this.value={...this.value}}toCriterionInput(){var t,n;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??0,value2:(n=this.value)==null?void 0:n.value2}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return Rn(this.modifier,this.value)}getLabelValue(t){const n=Ne.secondsToTimestamp(this.value.value??0),r=Ne.secondsToTimestamp(this.value.value2??0);return this.modifier===y.Between||this.modifier===y.NotBetween?`${n}, ${r}`:n}isValid(){if(this.modifier===y.IsNull||this.modifier===y.NotNull)return!0;const{value:t,value2:n}=this.value;return!(t===void 0||n===void 0&&(this.modifier===y.Between||this.modifier===y.NotBetween))}}class Dg extends pe{constructor(t,n){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.IsNull,y.NotNull,y.Between,y.NotBetween],defaultModifier:y.Equals,inputType:"text",makeCriterion:()=>new $g(this)})}}function dt(e){return new Dg(e,e)}class $g extends xe{constructor(t){super(t,{value:"",value2:void 0})}cloneValues(){this.value={...this.value}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return Rn(this.modifier,this.value)}toCriterionInput(){var t,n;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??"",value2:(n=this.value)==null?void 0:n.value2}}getLabelValue(){const{value:t}=this.value;return this.modifier===y.Between||this.modifier===y.NotBetween?`${t}, ${this.value.value2}`:`${t}`}isValid(){if(this.modifier===y.IsNull||this.modifier===y.NotNull)return!0;const{value:t,value2:n}=this.value;return!(!t||!n&&(this.modifier===y.Between||this.modifier===y.NotBetween))}}class Pg extends pe{constructor(t,n){super({messageID:t,type:n,modifierOptions:[y.GreaterThan,y.LessThan,y.Between,y.NotBetween],defaultModifier:y.GreaterThan,inputType:"text",makeCriterion:()=>new Mg(this)})}}function De(e){return new Pg(e,e)}class Mg extends xe{constructor(t){super(t,{value:"",value2:void 0})}cloneValues(){this.value={...this.value}}toCriterionInput(){return{modifier:this.modifier,value:this.transformValueToInput(this.value.value??""),value2:this.value.value2?this.transformValueToInput(this.value.value2):null}}setFromSavedCriterion(t){super.setFromSavedCriterion(t),this.value=wg(t)}encodeValue(){return Rn(this.modifier,this.value)}getLabelValue(){const{value:t}=this.value;return this.modifier===y.Between||this.modifier===y.NotBetween?`${t}, ${this.value.value2}`:`${t}`}transformValueToInput(t){return t=t.trim(),/^\d{4}-\d{2}-\d{2}(( |T)\d{2}:\d{2})?$/.test(t)?t.replace(" ","T"):""}isValid(){if(this.modifier===y.IsNull||this.modifier===y.NotNull)return!0;const{value:t,value2:n}=this.value;return!(!t||!n&&(this.modifier===y.Between||this.modifier===y.NotBetween))}}class Fg extends $r{constructor(t){super({messageID:"unsupported_criterion",type:t,makeCriterion:()=>new Ng(this)})}}class Ng extends nt{getLabel(t){const n=xe.getModifierLabel(t,this.modifier);let r="";return this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(r=this.getLabelValue(t)),t.formatMessage({id:"criterion_modifier.format_string"},{criterion:t.formatMessage({id:"criterion.unsupported"},{type:this.criterionOption.type}),modifierString:n,valueString:r})}applyToCriterionInput(){}applyToSavedCriterion(){}setFromSavedCriterion(){}}const fu=new $t("favourite","filter_favorites",()=>new kg);class kg extends Pt{constructor(){super(fu)}}const pu=new $t("favourite","favorite",()=>new Ag);class Ag extends Pt{constructor(){super(pu)}}const mu=new $t("favourite","favorite",()=>new Lg);class Lg extends Pt{constructor(){super(mu)}}const kr=new $t("performer_favorite","performer_favorite",()=>new jg);class jg extends Pt{constructor(){super(kr)}}class qg extends nt{toCriterionInput(){return this.value}}class Mt extends pe{constructor(t,n,r){super({messageID:t,type:n,options:r,modifierOptions:[],defaultModifier:y.Equals,makeCriterion:()=>new qg(this)})}}const Bg=new Mt("isMissing","is_missing",["title","code","details","director","url","date","rating","cover","galleries","studio","group","performers","tags","stash_id"]),Rg=new Mt("isMissing","is_missing",["title","details","photographer","url","date","code","rating","galleries","studio","performers","tags"]),Vg=new Mt("isMissing","is_missing",["url","ethnicity","country","hair_color","eye_color","height","weight","measurements","fake_tits","penis_length","circumcised","career_start","career_end","tattoos","piercings","aliases","gender","birthdate","death_date","disambiguation","tags","image","details","rating","stash_id"]),Gg=new Mt("isMissing","is_missing",["title","code","details","photographer","url","date","rating","cover","studio","performers","tags","scenes"]),Ug=new Mt("isMissing","is_missing",["image","aliases","description","stash_id"]),zg=new Mt("isMissing","is_missing",["image","stash_id","details","url","aliases","tags","rating"]),Hg=new Mt("isMissing","is_missing",["aliases","description","director","date","url","rating","studio","performers","tags","front_image","back_image","scenes"]),Ar=new $t("organized","organized",()=>new Wg);class Wg extends Pt{constructor(){super(Ar)}}const gu=new cu("hasChapters","has_chapters",()=>new Yg);class Yg extends ba{constructor(){super(gu)}}const Qg=[y.IncludesAll,y.Includes,y.Equals,y.IsNull,y.NotNull],Kg=y.IncludesAll,Jg="performers",tn=new pe({messageID:"performers",type:"performers",modifierOptions:Qg,defaultModifier:Kg,inputType:Jg,makeCriterion:()=>new nn});class nn extends xe{constructor(){super(tn,{items:[],excluded:[]})}cloneValues(){this.value={...this.value,items:this.value.items.map(t=>({...t})),excluded:this.value.excluded.map(t=>({...t}))}}get modifier(){return this._modifier}set modifier(t){this._modifier=t,t!==y.Includes&&t!==y.IncludesAll&&(this.value.excluded=[])}setFromSavedCriterion(t){const{modifier:n,value:r}=t;Array.isArray(r)?this.value={items:r,excluded:[]}:r!==void 0&&(this.value={items:r.items||[],excluded:r.excluded||[]}),n===y.Excludes?(this.modifier=y.Includes,this.value.excluded=[...this.value.excluded,...this.value.items],this.value.items=[]):this.modifier=n}getLabelValue(t){return this.value.items.map(n=>n.label).join(", ")}toCriterionInput(){let t=[];return this.value.excluded&&(t=this.value.excluded.map(n=>n.id)),{value:this.value.items.map(n=>n.id),excludes:t,modifier:this.modifier}}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull?!0:this.value.items.length>0||this.value.excluded&&this.value.excluded.length>0}getLabel(t){let n="criterion_modifier.format_string",r=xe.getModifierLabel(t,this.modifier),i="",a="";return this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(i=this.value.items.map(s=>s.label).join(", "),this.value.excluded&&this.value.excluded.length>0&&(this.value.items.length===0?(r=xe.getModifierLabel(t,y.Excludes),i=this.value.excluded.map(s=>s.label).join(", ")):(n="criterion_modifier.format_string_excludes",a=this.value.excluded.map(s=>s.label).join(", ")))),t.formatMessage({id:n},{criterion:t.formatMessage({id:this.criterionOption.messageID}),modifierString:r,valueString:i,excludedString:a})}}const hu=new Map([["144p",Ve.VeryLow],["240p",Ve.Low],["360p",Ve.R360P],["480p",Ve.Standard],["540p",Ve.WebHd],["720p",Ve.StandardHd],["1080p",Ve.FullHd],["1440p",Ve.QuadHd],["4k",Ve.FourK],["5k",Ve.FiveK],["6k",Ve.SixK],["7k",Ve.SevenK],["8k",Ve.EightK],["Huge",Ve.Huge]]),Xg=(e,t)=>e?hu.get(e):void 0,Zg=Array.from(hu.keys());class vu extends pe{constructor(t,n){super({messageID:t,type:t,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan],options:Zg,makeCriterion:n})}}class bu extends nt{toCriterionInput(){const t=Xg(this.value);if(t!==void 0)return{value:t,modifier:this.modifier}}}const Sa=new vu("resolution",()=>new eh);class eh extends bu{constructor(){super(Sa)}}const yu=new vu("average_resolution",()=>new th);class th extends bu{constructor(){super(yu)}}const Su="scenes",xu=new ha("scenes","scenes",!0,Su,()=>new nh);class nh extends qn{constructor(){super(xu)}}const rh=[y.Includes,y.Excludes],ih=y.Includes,Iu=new pe({messageID:"scenes",type:"scenes",modifierOptions:rh,defaultModifier:ih,inputType:Su,makeCriterion:()=>new _u});class _u extends qn{constructor(){super(Iu)}}const ah=[y.Includes,y.IsNull,y.NotNull],sh=y.Includes,Cu="studios",rn=new pe({messageID:"studios",type:"studios",modifierOptions:ah,defaultModifier:sh,inputType:Cu,makeCriterion:()=>new an});class an extends Bn{constructor(){super(rn)}}const wu=new ha("parent_studios","parents",!1,Cu,()=>new Ou);class Ou extends qn{constructor(){super(wu)}}const Eu=[y.IncludesAll,y.Includes,y.Equals,y.IsNull,y.NotNull],xa=[y.IncludesAll,y.Includes,y.IsNull,y.NotNull],oh=y.IncludesAll,uh="tags";class Vn extends pe{constructor(t,n,r){super({messageID:t,type:n,modifierOptions:r,defaultModifier:oh,inputType:uh,makeCriterion:()=>new Lr(this)})}}const St=new Vn("tags","tags",Eu),ch=new Vn("scene_tags","scene_tags",Eu),Ia=new Vn("performer_tags","performer_tags",xa),Tu=new Vn("parent_tags","parents",xa),Du=new Vn("sub_tags","children",xa);class Lr extends Bn{}const _a=["title","path","rating","file_mod_time","tag_count","performer_count","random"];class $e{constructor(t,n,r,i){Z(this,"defaultSortBy","");Z(this,"sortByOptions",[]);Z(this,"displayModeOptions",[]);Z(this,"criterionOptions",[]);this.defaultSortBy=t,this.sortByOptions=[...n,$e.createSortBy("created_at"),$e.createSortBy("updated_at")],this.displayModeOptions=r,this.criterionOptions=i}static createSortBy(t){return{messageID:t,value:t}}}var Ie=(e=>(e[e.Grid=0]="Grid",e[e.List=1]="List",e[e.Wall=2]="Wall",e[e.Tagger=3]="Tagger",e))(Ie||{}),$u=(e=>(e.Stars="stars",e.Decimal="decimal",e))($u||{}),Pu=(e=>(e.Full="full",e.Half="half",e.Quarter="quarter",e.Tenth="tenth",e))(Pu||{});const Mu={type:"stars",starPrecision:"full"};function lh(e,t){let n=t;n||(n=1);const r=1/n;return Math.round(e*r)/r}function dh(e){switch(e){case"full":return 1;case"half":return .5;case"quarter":return .25;case"tenth":return .1;default:return 1}}function jr(e,t){if(!e)return null;const{type:n,starPrecision:r}=t,i=n==="decimal"?.1:dh(r??"full"),s=100/(n==="decimal"?10:5);return lh(e/s,i)}function fh(e,t){const r=100/((t??"stars")==="decimal"?10:5);return Math.round(e*r)}const ph=[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.Between,y.NotBetween,y.IsNull,y.NotNull];function mh(e){return(e==null?void 0:e.ui.ratingSystemOptions)??Mu}const Ft=new pe({messageID:"rating",type:"rating100",modifierOptions:ph,defaultModifier:y.Equals,makeCriterion:(e,t)=>new gh(mh(t)),inputType:"number"});class gh extends xe{constructor(n){super(Ft,{value:0,value2:void 0});Z(this,"ratingSystem");this.ratingSystem=n}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(n){typeof n!="object"?this._value={value:fh(n,this.ratingSystem.type),value2:void 0}:this._value=n}toCriterionInput(){return{modifier:this.modifier,value:this.value.value??0,value2:this.value.value2}}setFromSavedCriterion(n){super.setFromSavedCriterion(n)}encodeValue(){return Rn(this.modifier,this.value)}getLabelValue(){const{value:n,value2:r}=this.value;return this.modifier===y.Between||this.modifier===y.NotBetween?`${jr(n,this.ratingSystem)??0}, ${jr(r,this.ratingSystem)??0}`:`${jr(n,this.ratingSystem)??0}`}}const qr=new $r({messageID:"path",type:"path",defaultModifier:y.Includes,makeCriterion:()=>new hh});class hh extends nt{constructor(){super(qr)}}function vh(){this.__data__=[],this.size=0}function Fu(e,t){return e===t||e!==e&&t!==t}function Br(e,t){for(var n=e.length;n--;)if(Fu(e[n][0],t))return n;return-1}var bh=Array.prototype,yh=bh.splice;function Sh(e){var t=this.__data__,n=Br(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():yh.call(t,n,1),--this.size,!0}function xh(e){var t=this.__data__,n=Br(t,e);return n<0?void 0:t[n][1]}function Ih(e){return Br(this.__data__,e)>-1}function _h(e,t){var n=this.__data__,r=Br(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function ft(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ft.prototype.clear=vh,ft.prototype.delete=Sh,ft.prototype.get=xh,ft.prototype.has=Ih,ft.prototype.set=_h;function Ch(){this.__data__=new ft,this.size=0}function wh(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Oh(e){return this.__data__.get(e)}function Eh(e){return this.__data__.has(e)}var Nu=typeof global=="object"&&global&&global.Object===Object&&global,Th=typeof self=="object"&&self&&self.Object===Object&&self,rt=Nu||Th||Function("return this")(),sn=rt.Symbol,ku=Object.prototype,Dh=ku.hasOwnProperty,$h=ku.toString,Gn=sn?sn.toStringTag:void 0;function Ph(e){var t=Dh.call(e,Gn),n=e[Gn];try{e[Gn]=void 0;var r=!0}catch{}var i=$h.call(e);return r&&(t?e[Gn]=n:delete e[Gn]),i}var Mh=Object.prototype,Fh=Mh.toString;function Nh(e){return Fh.call(e)}var kh="[object Null]",Ah="[object Undefined]",Au=sn?sn.toStringTag:void 0;function on(e){return e==null?e===void 0?Ah:kh:Au&&Au in Object(e)?Ph(e):Nh(e)}function xt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Lh="[object AsyncFunction]",jh="[object Function]",qh="[object GeneratorFunction]",Bh="[object Proxy]";function Lu(e){if(!xt(e))return!1;var t=on(e);return t==jh||t==qh||t==Lh||t==Bh}var Ca=rt["__core-js_shared__"],ju=function(){var e=/[^.]+$/.exec(Ca&&Ca.keys&&Ca.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Rh(e){return!!ju&&ju in e}var Vh=Function.prototype,Gh=Vh.toString;function Nt(e){if(e!=null){try{return Gh.call(e)}catch{}try{return e+""}catch{}}return""}var Uh=/[\\^$.*+?()[\]{}|]/g,zh=/^\[object .+?Constructor\]$/,Hh=Function.prototype,Wh=Object.prototype,Yh=Hh.toString,Qh=Wh.hasOwnProperty,Kh=RegExp("^"+Yh.call(Qh).replace(Uh,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Jh(e){if(!xt(e)||Rh(e))return!1;var t=Lu(e)?Kh:zh;return t.test(Nt(e))}function Xh(e,t){return e==null?void 0:e[t]}function kt(e,t){var n=Xh(e,t);return Jh(n)?n:void 0}var Un=kt(rt,"Map"),zn=kt(Object,"create");function Zh(){this.__data__=zn?zn(null):{},this.size=0}function ev(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var tv="__lodash_hash_undefined__",nv=Object.prototype,rv=nv.hasOwnProperty;function iv(e){var t=this.__data__;if(zn){var n=t[e];return n===tv?void 0:n}return rv.call(t,e)?t[e]:void 0}var av=Object.prototype,sv=av.hasOwnProperty;function ov(e){var t=this.__data__;return zn?t[e]!==void 0:sv.call(t,e)}var uv="__lodash_hash_undefined__";function cv(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=zn&&t===void 0?uv:t,this}function At(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}At.prototype.clear=Zh,At.prototype.delete=ev,At.prototype.get=iv,At.prototype.has=ov,At.prototype.set=cv;function lv(){this.size=0,this.__data__={hash:new At,map:new(Un||ft),string:new At}}function dv(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Rr(e,t){var n=e.__data__;return dv(t)?n[typeof t=="string"?"string":"hash"]:n.map}function fv(e){var t=Rr(this,e).delete(e);return this.size-=t?1:0,t}function pv(e){return Rr(this,e).get(e)}function mv(e){return Rr(this,e).has(e)}function gv(e,t){var n=Rr(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function un(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}un.prototype.clear=lv,un.prototype.delete=fv,un.prototype.get=pv,un.prototype.has=mv,un.prototype.set=gv;var hv=200;function vv(e,t){var n=this.__data__;if(n instanceof ft){var r=n.__data__;if(!Un||r.length<hv-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new un(r)}return n.set(e,t),this.size=n.size,this}function cn(e){var t=this.__data__=new ft(e);this.size=t.size}cn.prototype.clear=Ch,cn.prototype.delete=wh,cn.prototype.get=Oh,cn.prototype.has=Eh,cn.prototype.set=vv;function bv(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var qu=function(){try{var e=kt(Object,"defineProperty");return e({},"",{}),e}catch{}}();function yv(e,t,n){t=="__proto__"&&qu?qu(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Sv=Object.prototype,xv=Sv.hasOwnProperty;function Iv(e,t,n){var r=e[t];(!(xv.call(e,t)&&Fu(r,n))||n===void 0&&!(t in e))&&yv(e,t,n)}function _v(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function ln(e){return e!=null&&typeof e=="object"}var Cv="[object Arguments]";function Bu(e){return ln(e)&&on(e)==Cv}var Ru=Object.prototype,wv=Ru.hasOwnProperty,Ov=Ru.propertyIsEnumerable,Ev=Bu(function(){return arguments}())?Bu:function(e){return ln(e)&&wv.call(e,"callee")&&!Ov.call(e,"callee")},wa=Array.isArray;function Tv(){return!1}var Vu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Gu=Vu&&typeof module=="object"&&module&&!module.nodeType&&module,Dv=Gu&&Gu.exports===Vu,Uu=Dv?rt.Buffer:void 0,$v=Uu?Uu.isBuffer:void 0,zu=$v||Tv,Pv=9007199254740991,Mv=/^(?:0|[1-9]\d*)$/;function Fv(e,t){var n=typeof e;return t=t??Pv,!!t&&(n=="number"||n!="symbol"&&Mv.test(e))&&e>-1&&e%1==0&&e<t}var Nv=9007199254740991;function Hu(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Nv}var kv="[object Arguments]",Av="[object Array]",Lv="[object Boolean]",jv="[object Date]",qv="[object Error]",Bv="[object Function]",Rv="[object Map]",Vv="[object Number]",Gv="[object Object]",Uv="[object RegExp]",zv="[object Set]",Hv="[object String]",Wv="[object WeakMap]",Yv="[object ArrayBuffer]",Qv="[object DataView]",Kv="[object Float32Array]",Jv="[object Float64Array]",Xv="[object Int8Array]",Zv="[object Int16Array]",e0="[object Int32Array]",t0="[object Uint8Array]",n0="[object Uint8ClampedArray]",r0="[object Uint16Array]",i0="[object Uint32Array]",ye={};ye[Kv]=ye[Jv]=ye[Xv]=ye[Zv]=ye[e0]=ye[t0]=ye[n0]=ye[r0]=ye[i0]=!0,ye[kv]=ye[Av]=ye[Yv]=ye[Lv]=ye[Qv]=ye[jv]=ye[qv]=ye[Bv]=ye[Rv]=ye[Vv]=ye[Gv]=ye[Uv]=ye[zv]=ye[Hv]=ye[Wv]=!1;function a0(e){return ln(e)&&Hu(e.length)&&!!ye[on(e)]}function Oa(e){return function(t){return e(t)}}var Wu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Hn=Wu&&typeof module=="object"&&module&&!module.nodeType&&module,s0=Hn&&Hn.exports===Wu,Ea=s0&&Nu.process,dn=function(){try{var e=Hn&&Hn.require&&Hn.require("util").types;return e||Ea&&Ea.binding&&Ea.binding("util")}catch{}}(),Yu=dn&&dn.isTypedArray,o0=Yu?Oa(Yu):a0,u0=Object.prototype,c0=u0.hasOwnProperty;function l0(e,t){var n=wa(e),r=!n&&Ev(e),i=!n&&!r&&zu(e),a=!n&&!r&&!i&&o0(e),s=n||r||i||a,u=s?_v(e.length,String):[],o=u.length;for(var c in e)c0.call(e,c)&&!(s&&(c=="length"||i&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Fv(c,o)))&&u.push(c);return u}var d0=Object.prototype;function Qu(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||d0;return e===n}function Ku(e,t){return function(n){return e(t(n))}}var f0=Ku(Object.keys,Object),p0=Object.prototype,m0=p0.hasOwnProperty;function g0(e){if(!Qu(e))return f0(e);var t=[];for(var n in Object(e))m0.call(e,n)&&n!="constructor"&&t.push(n);return t}function h0(e){return e!=null&&Hu(e.length)&&!Lu(e)}function v0(e){return h0(e)?l0(e):g0(e)}var Ju=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Xu=Ju&&typeof module=="object"&&module&&!module.nodeType&&module,b0=Xu&&Xu.exports===Ju,Zu=b0?rt.Buffer:void 0;Zu&&Zu.allocUnsafe;function y0(e,t){return e.slice()}function S0(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var s=e[n];t(s,n,e)&&(a[i++]=s)}return a}function x0(){return[]}var I0=Object.prototype,_0=I0.propertyIsEnumerable,ec=Object.getOwnPropertySymbols,C0=ec?function(e){return e==null?[]:(e=Object(e),S0(ec(e),function(t){return _0.call(e,t)}))}:x0;function w0(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var O0=Ku(Object.getPrototypeOf,Object);function E0(e,t,n){var r=t(e);return wa(e)?r:w0(r,n(e))}function T0(e){return E0(e,v0,C0)}var Ta=kt(rt,"DataView"),Da=kt(rt,"Promise"),$a=kt(rt,"Set"),Pa=kt(rt,"WeakMap"),tc="[object Map]",D0="[object Object]",nc="[object Promise]",rc="[object Set]",ic="[object WeakMap]",ac="[object DataView]",$0=Nt(Ta),P0=Nt(Un),M0=Nt(Da),F0=Nt($a),N0=Nt(Pa),pt=on;(Ta&&pt(new Ta(new ArrayBuffer(1)))!=ac||Un&&pt(new Un)!=tc||Da&&pt(Da.resolve())!=nc||$a&&pt(new $a)!=rc||Pa&&pt(new Pa)!=ic)&&(pt=function(e){var t=on(e),n=t==D0?e.constructor:void 0,r=n?Nt(n):"";if(r)switch(r){case $0:return ac;case P0:return tc;case M0:return nc;case F0:return rc;case N0:return ic}return t});var k0=Object.prototype,A0=k0.hasOwnProperty;function L0(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&A0.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var sc=rt.Uint8Array;function Ma(e){var t=new e.constructor(e.byteLength);return new sc(t).set(new sc(e)),t}function j0(e,t){var n=Ma(e.buffer);return new e.constructor(n,e.byteOffset,e.byteLength)}var q0=/\w*$/;function B0(e){var t=new e.constructor(e.source,q0.exec(e));return t.lastIndex=e.lastIndex,t}var oc=sn?sn.prototype:void 0,uc=oc?oc.valueOf:void 0;function R0(e){return uc?Object(uc.call(e)):{}}function V0(e,t){var n=Ma(e.buffer);return new e.constructor(n,e.byteOffset,e.length)}var G0="[object Boolean]",U0="[object Date]",z0="[object Map]",H0="[object Number]",W0="[object RegExp]",Y0="[object Set]",Q0="[object String]",K0="[object Symbol]",J0="[object ArrayBuffer]",X0="[object DataView]",Z0="[object Float32Array]",eb="[object Float64Array]",tb="[object Int8Array]",nb="[object Int16Array]",rb="[object Int32Array]",ib="[object Uint8Array]",ab="[object Uint8ClampedArray]",sb="[object Uint16Array]",ob="[object Uint32Array]";function ub(e,t,n){var r=e.constructor;switch(t){case J0:return Ma(e);case G0:case U0:return new r(+e);case X0:return j0(e);case Z0:case eb:case tb:case nb:case rb:case ib:case ab:case sb:case ob:return V0(e);case z0:return new r;case H0:case Q0:return new r(e);case W0:return B0(e);case Y0:return new r;case K0:return R0(e)}}var cc=Object.create,cb=function(){function e(){}return function(t){if(!xt(t))return{};if(cc)return cc(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function lb(e){return typeof e.constructor=="function"&&!Qu(e)?cb(O0(e)):{}}var db="[object Map]";function fb(e){return ln(e)&&pt(e)==db}var lc=dn&&dn.isMap,pb=lc?Oa(lc):fb,mb="[object Set]";function gb(e){return ln(e)&&pt(e)==mb}var dc=dn&&dn.isSet,hb=dc?Oa(dc):gb,fc="[object Arguments]",vb="[object Array]",bb="[object Boolean]",yb="[object Date]",Sb="[object Error]",pc="[object Function]",xb="[object GeneratorFunction]",Ib="[object Map]",_b="[object Number]",mc="[object Object]",Cb="[object RegExp]",wb="[object Set]",Ob="[object String]",Eb="[object Symbol]",Tb="[object WeakMap]",Db="[object ArrayBuffer]",$b="[object DataView]",Pb="[object Float32Array]",Mb="[object Float64Array]",Fb="[object Int8Array]",Nb="[object Int16Array]",kb="[object Int32Array]",Ab="[object Uint8Array]",Lb="[object Uint8ClampedArray]",jb="[object Uint16Array]",qb="[object Uint32Array]",he={};he[fc]=he[vb]=he[Db]=he[$b]=he[bb]=he[yb]=he[Pb]=he[Mb]=he[Fb]=he[Nb]=he[kb]=he[Ib]=he[_b]=he[mc]=he[Cb]=he[wb]=he[Ob]=he[Eb]=he[Ab]=he[Lb]=he[jb]=he[qb]=!0,he[Sb]=he[pc]=he[Tb]=!1;function Vr(e,t,n,r,i,a){var s;if(s!==void 0)return s;if(!xt(e))return e;var u=wa(e);if(u)s=L0(e);else{var o=pt(e),c=o==pc||o==xb;if(zu(e))return y0(e);if(o==mc||o==fc||c&&!i)s=c?{}:lb(e);else{if(!he[o])return i?e:{};s=ub(e,o)}}a||(a=new cn);var l=a.get(e);if(l)return l;a.set(e,s),hb(e)?e.forEach(function(p){s.add(Vr(p,t,n,p,e,a))}):pb(e)&&e.forEach(function(p,I){s.set(I,Vr(p,t,n,I,e,a))});var f=T0,g=u?void 0:f(e);return bv(g||e,function(p,I){g&&(I=p,p=e[I]),Iv(s,I,Vr(p,t,n,I,e,a))}),s}var Bb=1,Rb=4;function Gr(e){return Vr(e,Bb|Rb)}function gc(e){return e?e.map(t=>t).join(", "):""}const It=new uu({type:"custom_fields",messageID:"custom_fields.title",makeCriterion:()=>new hc});class hc extends ou{constructor(){super(It);Z(this,"value",[])}isValid(){return this.value.length>0}applyToCriterionInput(n){n.custom_fields=Gr(this.value)}applyToSavedCriterion(n){n.custom_fields=Gr(this.value)}getLabel(n){var o;if(this.value.length===0)return"";const r=this.value[0];let i="",a="";r.modifier!==y.IsNull&&r.modifier!==y.NotNull&&(((o=r.value)==null?void 0:o.length)??0)>0&&(a=gc(r.value));const s=xe.getModifierLabel(n,r.modifier),u={criterion:r.field,modifierString:s,valueString:a,others:""};return this.value.length===1?i="custom_fields.criteria_format_string":(i="custom_fields.criteria_format_string_others",u.others=(this.value.length-1).toString()),n.formatMessage({id:i},u)}getValueLabel(n,r){var u;let i="";r.modifier!==y.IsNull&&r.modifier!==y.NotNull&&(((u=r.value)==null?void 0:u.length)??0)>0&&(i=gc(r.value));const a=xe.getModifierLabel(n,r.modifier),s={criterion:r.field,modifierString:a,valueString:i};return n.formatMessage({id:"custom_fields.criteria_format_string"},s)}toQueryParams(){return{type:this.criterionOption.type,value:this.value}}fromDecodedParams(n){const r=n;this.value=Gr(r.value)}setFromSavedCriterion(n){this.value=Gr(n)}}const vc=[y.Includes],bc=y.Includes,yc="folders",Fa=new pe({messageID:"folder",type:"folder",modifierOptions:vc,defaultModifier:bc,inputType:yc,makeCriterion:()=>new Vb}),Sc=new pe({messageID:"parent_folder",type:"parent_folder",modifierOptions:vc,defaultModifier:bc,inputType:yc,makeCriterion:()=>new Gb});class Vb extends Bn{constructor(){super(Fa)}applyToCriterionInput(t){t.files_filter={parent_folder:this.toCriterionInput()}}}class Gb extends Bn{constructor(){super(Sc)}applyToCriterionInput(t){t.parent_folder=this.toCriterionInput()}}const Ub="path",zb=["date",..._a].map($e.createSortBy).concat([{messageID:"performer_age",value:"performer_age"},{messageID:"image_count",value:"images_count"},{messageID:"zip_file_count",value:"file_count"}]),Hb=[Ie.Grid,Ie.List,Ie.Wall],Wb=ee("performer_age"),Yb=[ie("title"),ie("code","scene_code"),ie("details"),ie("photographer"),qr,Sc,ie("checksum","media_info.md5"),Ft,Ar,yu,Gg,St,gu,ee("tag_count"),Ia,tn,ee("performer_count"),Wb,kr,ee("image_count"),xu,rn,ie("url"),ee("file_count","zip_file_count"),dt("date"),De("created_at"),De("updated_at"),It],Qb=new $e(Ub,zb,Hb,Yb),xc=new Map([["Landscape",mr.Landscape],["Portrait",mr.Portrait],["Square",mr.Square]]),Kb=(e,t)=>e?xc.get(e):void 0,Jb=Array.from(xc.keys());class Xb extends va{toCriterionInput(){return{value:this.value.map(t=>Kb(t)).filter(t=>t)}}}class Zb extends pe{constructor(t){super({messageID:t,type:t,options:Jb,makeCriterion:()=>new Xb(this)})}}const Ic=new Zb("orientation"),ey="galleries",Na=new ha("galleries","galleries",!0,ey,()=>new _c);class _c extends qn{constructor(){super(Na)}}const ty={phash:"media_info.phash",stash_id:"stash_id",title:"title",url:"url"},Cc=["phash","stash_id","title","url"],ka=new pe({messageID:"media_info.phash",type:"phash_distance",inputType:"text",modifierOptions:[y.Equals,y.NotEquals,y.IsNull,y.NotNull],makeCriterion:()=>new Aa});class Aa extends xe{constructor(){super(ka,{value:"",distance:0})}cloneValues(){this.value={...this.value}}getLabelValue(){const{value:t,distance:n}=this.value;return(this.modifier===y.Equals||this.modifier===y.NotEquals)&&n?`${t} (${n})`:`${t}`}toCriterionInput(){return{value:this.value.value,modifier:this.modifier,distance:this.value.distance}}}const wc=new pe({messageID:"duplicated",type:"duplicated",modifierOptions:[],defaultModifier:y.Equals,makeCriterion:()=>new ny});class ny extends xe{constructor(){super(wc,{})}cloneValues(){this.value={...this.value}}getLabel(t){const n=[],r=t.formatMessage({id:"true"}),i=t.formatMessage({id:"false"});for(const a of Cc){const s=this.value[a];if(s!==void 0){const u=t.formatMessage({id:ty[a]});n.push(`${u}: ${s?r:i}`)}}return n.length===0&&this.value.duplicated!==void 0?`${t.formatMessage({id:"duplicated_phash"})}: ${this.value.duplicated?r:i}`:n.length===0?t.formatMessage({id:"duplicated"}):n.join(", ")}getLabelValue(t){return t.formatMessage({id:"duplicated"})}toCriterionInput(){return{duplicated:this.value.duplicated,distance:this.value.distance,phash:this.value.phash,url:this.value.url,stash_id:this.value.stash_id,title:this.value.title}}setFromSavedCriterion(t){const n=t;n.value!==void 0?typeof n.value=="object"?this.value=n.value:typeof n.value=="string"&&(this.value={phash:n.value==="true"}):typeof n=="object"&&(this.value=n),n.modifier&&(this.modifier=n.modifier)}isValid(){return Cc.some(n=>this.value[n]!==void 0)||this.value.duplicated!==void 0}}const ry="path",iy=["filesize","file_count","date","resolution","performer_age",..._a].map($e.createSortBy).concat([{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"}]),ay=[Ie.Grid,Ie.Wall],sy=ee("performer_age"),oy=[ie("title"),ie("code","scene_code"),ie("details"),ie("photographer"),Pr("checksum","media_info.md5"),ka,qr,Fa,Na,Ar,ee("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Sa,Ic,Rg,St,Ft,ee("tag_count"),Ia,tn,ee("performer_count"),sy,kr,rn,ie("url"),dt("date"),ee("file_count"),De("created_at"),De("updated_at"),It],uy=new $e(ry,iy,ay,oy),Oc="groups",Ec=[y.Includes,y.Excludes,y.IsNull,y.NotNull],Tc=y.Includes;class La extends pe{constructor(t,n){super({messageID:t,type:n,modifierOptions:Ec,defaultModifier:Tc,inputType:Oc,makeCriterion:()=>new Wn(this)})}}const Ur=new La("groups","groups");class Wn extends Bn{}const Dc=new La("containing_groups","containing_groups"),$c=new La("sub_groups","sub_groups"),cy=new pe({messageID:"groups",type:"movies",modifierOptions:Ec,defaultModifier:Tc,inputType:Oc,hidden:!0,makeCriterion:()=>new Wn(Ur)}),ly="name",dy=["name","random","date","duration","rating","tag_count","sub_group_description","sub_group_order"].map($e.createSortBy).concat([{messageID:"scene_count",value:"scenes_count"},{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"}]),fy=[Ie.Grid],py=[rn,Hg,ie("url"),ie("name"),ie("director"),ie("synopsis"),Nr("duration"),Ft,tn,dt("date"),ee("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Dc,$c,ee("containing_group_count"),ee("sub_group_count"),St,ee("tag_count"),ee("scene_count"),De("created_at"),De("updated_at"),It],my=new $e(ly,dy,fy,py),Pc=new Map([["Female",Oe.Female],["Male",Oe.Male],["Transgender Male",Oe.TransgenderMale],["Transgender Female",Oe.TransgenderFemale],["Intersex",Oe.Intersex],["Non-Binary",Oe.NonBinary]]);Oe.Female,Oe.Male,Oe.TransgenderFemale,Oe.TransgenderMale,Oe.Intersex,Oe.NonBinary;const gy=(e,t)=>{if(!e)return;const n=Object.entries(Oe).find(i=>i[1]===e);return n?n[1]:Pc.get(e)},hy=Array.from(Pc.keys()),Mc=new pe({messageID:"gender",type:"gender",options:hy,modifierOptions:[y.Includes,y.Excludes,y.IsNull,y.NotNull],defaultModifier:y.Includes,makeCriterion:()=>new vy});class vy extends va{constructor(t=[]){super(Mc,t)}toCriterionInput(){return{value_list:this.value.map(n=>gy(n)),modifier:this.modifier}}setFromSavedCriterion(t){typeof t.value=="string"&&(t={...t,value:[t.value]}),super.setFromSavedCriterion(t)}}const Fc=new Map([["Uncut",pr.Uncut],["Cut",pr.Cut]]),by=(e,t)=>{if(!e)return;const n=Object.entries(pr).find(i=>i[1]===e);return n?n[1]:Fc.get(e)},yy=Array.from(Fc.keys()),Nc=new pe({messageID:"circumcised",type:"circumcised",modifierOptions:[y.Includes,y.Excludes,y.IsNull,y.NotNull],defaultModifier:y.Includes,options:yy,makeCriterion:()=>new Sy});class Sy extends va{constructor(){super(Nc)}toCriterionInput(){return{value:this.value.map(n=>by(n)),modifier:this.modifier}}}const Yn=new pe({messageID:"stash_id",type:"stash_id_endpoint",modifierOptions:[y.Equals,y.NotEquals,y.IsNull,y.NotNull],makeCriterion:()=>new xy});class xy extends xe{constructor(){super(Yn,{endpoint:"",stashID:""})}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(t){typeof t!="object"?this._value={endpoint:"",stashID:t}:this._value=t}toCriterionInput(){return{endpoint:this.value.endpoint,stash_id:this.value.stashID,modifier:this.modifier}}getLabel(t){const n=xe.getModifierLabel(t,this.modifier);let r="";return this.modifier!==y.IsNull&&this.modifier!==y.NotNull?r=this.getLabelValue(t):this.value.endpoint&&(r="("+this.value.endpoint+")"),t.formatMessage({id:"criterion_modifier.format_string"},{criterion:t.formatMessage({id:this.criterionOption.messageID}),modifierString:n,valueString:r})}getLabelValue(t){let n=this.value.stashID;return this.value.endpoint&&(n+=" ("+this.value.endpoint+")"),n}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}toQueryParams(){super.toQueryParams();let t;return(this.modifier===y.IsNull||this.modifier===y.NotNull)&&!this.value.endpoint?t={type:this.criterionOption.type,modifier:this.modifier}:t={type:this.criterionOption.type,value:this.value,modifier:this.modifier},t}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull||this.value.stashID.length>0}}var kc={};const Iy=[["AF","AFG","004","ISO 3166-2:AF"],["AL","ALB","008","ISO 3166-2:AL"],["DZ","DZA","012","ISO 3166-2:DZ"],["AS","ASM","016","ISO 3166-2:AS"],["AD","AND","020","ISO 3166-2:AD"],["AO","AGO","024","ISO 3166-2:AO"],["AI","AIA","660","ISO 3166-2:AI"],["AQ","ATA","010","ISO 3166-2:AQ"],["AG","ATG","028","ISO 3166-2:AG"],["AR","ARG","032","ISO 3166-2:AR"],["AM","ARM","051","ISO 3166-2:AM"],["AW","ABW","533","ISO 3166-2:AW"],["AU","AUS","036","ISO 3166-2:AU"],["AT","AUT","040","ISO 3166-2:AT"],["AZ","AZE","031","ISO 3166-2:AZ"],["BS","BHS","044","ISO 3166-2:BS"],["BH","BHR","048","ISO 3166-2:BH"],["BD","BGD","050","ISO 3166-2:BD"],["BB","BRB","052","ISO 3166-2:BB"],["BY","BLR","112","ISO 3166-2:BY"],["BE","BEL","056","ISO 3166-2:BE"],["BZ","BLZ","084","ISO 3166-2:BZ"],["BJ","BEN","204","ISO 3166-2:BJ"],["BM","BMU","060","ISO 3166-2:BM"],["BT","BTN","064","ISO 3166-2:BT"],["BO","BOL","068","ISO 3166-2:BO"],["BA","BIH","070","ISO 3166-2:BA"],["BW","BWA","072","ISO 3166-2:BW"],["BV","BVT","074","ISO 3166-2:BV"],["BR","BRA","076","ISO 3166-2:BR"],["IO","IOT","086","ISO 3166-2:IO"],["BN","BRN","096","ISO 3166-2:BN"],["BG","BGR","100","ISO 3166-2:BG"],["BF","BFA","854","ISO 3166-2:BF"],["BI","BDI","108","ISO 3166-2:BI"],["KH","KHM","116","ISO 3166-2:KH"],["CM","CMR","120","ISO 3166-2:CM"],["CA","CAN","124","ISO 3166-2:CA"],["CV","CPV","132","ISO 3166-2:CV"],["KY","CYM","136","ISO 3166-2:KY"],["CF","CAF","140","ISO 3166-2:CF"],["TD","TCD","148","ISO 3166-2:TD"],["CL","CHL","152","ISO 3166-2:CL"],["CN","CHN","156","ISO 3166-2:CN"],["CX","CXR","162","ISO 3166-2:CX"],["CC","CCK","166","ISO 3166-2:CC"],["CO","COL","170","ISO 3166-2:CO"],["KM","COM","174","ISO 3166-2:KM"],["CG","COG","178","ISO 3166-2:CG"],["CD","COD","180","ISO 3166-2:CD"],["CK","COK","184","ISO 3166-2:CK"],["CR","CRI","188","ISO 3166-2:CR"],["CI","CIV","384","ISO 3166-2:CI"],["HR","HRV","191","ISO 3166-2:HR"],["CU","CUB","192","ISO 3166-2:CU"],["CY","CYP","196","ISO 3166-2:CY"],["CZ","CZE","203","ISO 3166-2:CZ"],["DK","DNK","208","ISO 3166-2:DK"],["DJ","DJI","262","ISO 3166-2:DJ"],["DM","DMA","212","ISO 3166-2:DM"],["DO","DOM","214","ISO 3166-2:DO"],["EC","ECU","218","ISO 3166-2:EC"],["EG","EGY","818","ISO 3166-2:EG"],["SV","SLV","222","ISO 3166-2:SV"],["GQ","GNQ","226","ISO 3166-2:GQ"],["ER","ERI","232","ISO 3166-2:ER"],["EE","EST","233","ISO 3166-2:EE"],["ET","ETH","231","ISO 3166-2:ET"],["FK","FLK","238","ISO 3166-2:FK"],["FO","FRO","234","ISO 3166-2:FO"],["FJ","FJI","242","ISO 3166-2:FJ"],["FI","FIN","246","ISO 3166-2:FI"],["FR","FRA","250","ISO 3166-2:FR"],["GF","GUF","254","ISO 3166-2:GF"],["PF","PYF","258","ISO 3166-2:PF"],["TF","ATF","260","ISO 3166-2:TF"],["GA","GAB","266","ISO 3166-2:GA"],["GM","GMB","270","ISO 3166-2:GM"],["GE","GEO","268","ISO 3166-2:GE"],["DE","DEU","276","ISO 3166-2:DE"],["GH","GHA","288","ISO 3166-2:GH"],["GI","GIB","292","ISO 3166-2:GI"],["GR","GRC","300","ISO 3166-2:GR"],["GL","GRL","304","ISO 3166-2:GL"],["GD","GRD","308","ISO 3166-2:GD"],["GP","GLP","312","ISO 3166-2:GP"],["GU","GUM","316","ISO 3166-2:GU"],["GT","GTM","320","ISO 3166-2:GT"],["GN","GIN","324","ISO 3166-2:GN"],["GW","GNB","624","ISO 3166-2:GW"],["GY","GUY","328","ISO 3166-2:GY"],["HT","HTI","332","ISO 3166-2:HT"],["HM","HMD","334","ISO 3166-2:HM"],["VA","VAT","336","ISO 3166-2:VA"],["HN","HND","340","ISO 3166-2:HN"],["HK","HKG","344","ISO 3166-2:HK"],["HU","HUN","348","ISO 3166-2:HU"],["IS","ISL","352","ISO 3166-2:IS"],["IN","IND","356","ISO 3166-2:IN"],["ID","IDN","360","ISO 3166-2:ID"],["IR","IRN","364","ISO 3166-2:IR"],["IQ","IRQ","368","ISO 3166-2:IQ"],["IE","IRL","372","ISO 3166-2:IE"],["IL","ISR","376","ISO 3166-2:IL"],["IT","ITA","380","ISO 3166-2:IT"],["JM","JAM","388","ISO 3166-2:JM"],["JP","JPN","392","ISO 3166-2:JP"],["JO","JOR","400","ISO 3166-2:JO"],["KZ","KAZ","398","ISO 3166-2:KZ"],["KE","KEN","404","ISO 3166-2:KE"],["KI","KIR","296","ISO 3166-2:KI"],["KP","PRK","408","ISO 3166-2:KP"],["KR","KOR","410","ISO 3166-2:KR"],["KW","KWT","414","ISO 3166-2:KW"],["KG","KGZ","417","ISO 3166-2:KG"],["LA","LAO","418","ISO 3166-2:LA"],["LV","LVA","428","ISO 3166-2:LV"],["LB","LBN","422","ISO 3166-2:LB"],["LS","LSO","426","ISO 3166-2:LS"],["LR","LBR","430","ISO 3166-2:LR"],["LY","LBY","434","ISO 3166-2:LY"],["LI","LIE","438","ISO 3166-2:LI"],["LT","LTU","440","ISO 3166-2:LT"],["LU","LUX","442","ISO 3166-2:LU"],["MO","MAC","446","ISO 3166-2:MO"],["MG","MDG","450","ISO 3166-2:MG"],["MW","MWI","454","ISO 3166-2:MW"],["MY","MYS","458","ISO 3166-2:MY"],["MV","MDV","462","ISO 3166-2:MV"],["ML","MLI","466","ISO 3166-2:ML"],["MT","MLT","470","ISO 3166-2:MT"],["MH","MHL","584","ISO 3166-2:MH"],["MQ","MTQ","474","ISO 3166-2:MQ"],["MR","MRT","478","ISO 3166-2:MR"],["MU","MUS","480","ISO 3166-2:MU"],["YT","MYT","175","ISO 3166-2:YT"],["MX","MEX","484","ISO 3166-2:MX"],["FM","FSM","583","ISO 3166-2:FM"],["MD","MDA","498","ISO 3166-2:MD"],["MC","MCO","492","ISO 3166-2:MC"],["MN","MNG","496","ISO 3166-2:MN"],["MS","MSR","500","ISO 3166-2:MS"],["MA","MAR","504","ISO 3166-2:MA"],["MZ","MOZ","508","ISO 3166-2:MZ"],["MM","MMR","104","ISO 3166-2:MM"],["NA","NAM","516","ISO 3166-2:NA"],["NR","NRU","520","ISO 3166-2:NR"],["NP","NPL","524","ISO 3166-2:NP"],["NL","NLD","528","ISO 3166-2:NL"],["NC","NCL","540","ISO 3166-2:NC"],["NZ","NZL","554","ISO 3166-2:NZ"],["NI","NIC","558","ISO 3166-2:NI"],["NE","NER","562","ISO 3166-2:NE"],["NG","NGA","566","ISO 3166-2:NG"],["NU","NIU","570","ISO 3166-2:NU"],["NF","NFK","574","ISO 3166-2:NF"],["MP","MNP","580","ISO 3166-2:MP"],["MK","MKD","807","ISO 3166-2:MK"],["NO","NOR","578","ISO 3166-2:NO"],["OM","OMN","512","ISO 3166-2:OM"],["PK","PAK","586","ISO 3166-2:PK"],["PW","PLW","585","ISO 3166-2:PW"],["PS","PSE","275","ISO 3166-2:PS"],["PA","PAN","591","ISO 3166-2:PA"],["PG","PNG","598","ISO 3166-2:PG"],["PY","PRY","600","ISO 3166-2:PY"],["PE","PER","604","ISO 3166-2:PE"],["PH","PHL","608","ISO 3166-2:PH"],["PN","PCN","612","ISO 3166-2:PN"],["PL","POL","616","ISO 3166-2:PL"],["PT","PRT","620","ISO 3166-2:PT"],["PR","PRI","630","ISO 3166-2:PR"],["QA","QAT","634","ISO 3166-2:QA"],["RE","REU","638","ISO 3166-2:RE"],["RO","ROU","642","ISO 3166-2:RO"],["RU","RUS","643","ISO 3166-2:RU"],["RW","RWA","646","ISO 3166-2:RW"],["SH","SHN","654","ISO 3166-2:SH"],["KN","KNA","659","ISO 3166-2:KN"],["LC","LCA","662","ISO 3166-2:LC"],["PM","SPM","666","ISO 3166-2:PM"],["VC","VCT","670","ISO 3166-2:VC"],["WS","WSM","882","ISO 3166-2:WS"],["SM","SMR","674","ISO 3166-2:SM"],["ST","STP","678","ISO 3166-2:ST"],["SA","SAU","682","ISO 3166-2:SA"],["SN","SEN","686","ISO 3166-2:SN"],["SC","SYC","690","ISO 3166-2:SC"],["SL","SLE","694","ISO 3166-2:SL"],["SG","SGP","702","ISO 3166-2:SG"],["SK","SVK","703","ISO 3166-2:SK"],["SI","SVN","705","ISO 3166-2:SI"],["SB","SLB","090","ISO 3166-2:SB"],["SO","SOM","706","ISO 3166-2:SO"],["ZA","ZAF","710","ISO 3166-2:ZA"],["GS","SGS","239","ISO 3166-2:GS"],["ES","ESP","724","ISO 3166-2:ES"],["LK","LKA","144","ISO 3166-2:LK"],["SD","SDN","729","ISO 3166-2:SD"],["SR","SUR","740","ISO 3166-2:SR"],["SJ","SJM","744","ISO 3166-2:SJ"],["SZ","SWZ","748","ISO 3166-2:SZ"],["SE","SWE","752","ISO 3166-2:SE"],["CH","CHE","756","ISO 3166-2:CH"],["SY","SYR","760","ISO 3166-2:SY"],["TW","TWN","158","ISO 3166-2:TW"],["TJ","TJK","762","ISO 3166-2:TJ"],["TZ","TZA","834","ISO 3166-2:TZ"],["TH","THA","764","ISO 3166-2:TH"],["TL","TLS","626","ISO 3166-2:TL"],["TG","TGO","768","ISO 3166-2:TG"],["TK","TKL","772","ISO 3166-2:TK"],["TO","TON","776","ISO 3166-2:TO"],["TT","TTO","780","ISO 3166-2:TT"],["TN","TUN","788","ISO 3166-2:TN"],["TR","TUR","792","ISO 3166-2:TR"],["TM","TKM","795","ISO 3166-2:TM"],["TC","TCA","796","ISO 3166-2:TC"],["TV","TUV","798","ISO 3166-2:TV"],["UG","UGA","800","ISO 3166-2:UG"],["UA","UKR","804","ISO 3166-2:UA"],["AE","ARE","784","ISO 3166-2:AE"],["GB","GBR","826","ISO 3166-2:GB"],["US","USA","840","ISO 3166-2:US"],["UM","UMI","581","ISO 3166-2:UM"],["UY","URY","858","ISO 3166-2:UY"],["UZ","UZB","860","ISO 3166-2:UZ"],["VU","VUT","548","ISO 3166-2:VU"],["VE","VEN","862","ISO 3166-2:VE"],["VN","VNM","704","ISO 3166-2:VN"],["VG","VGB","092","ISO 3166-2:VG"],["VI","VIR","850","ISO 3166-2:VI"],["WF","WLF","876","ISO 3166-2:WF"],["EH","ESH","732","ISO 3166-2:EH"],["YE","YEM","887","ISO 3166-2:YE"],["ZM","ZMB","894","ISO 3166-2:ZM"],["ZW","ZWE","716","ISO 3166-2:ZW"],["AX","ALA","248","ISO 3166-2:AX"],["BQ","BES","535","ISO 3166-2:BQ"],["CW","CUW","531","ISO 3166-2:CW"],["GG","GGY","831","ISO 3166-2:GG"],["IM","IMN","833","ISO 3166-2:IM"],["JE","JEY","832","ISO 3166-2:JE"],["ME","MNE","499","ISO 3166-2:ME"],["BL","BLM","652","ISO 3166-2:BL"],["MF","MAF","663","ISO 3166-2:MF"],["RS","SRB","688","ISO 3166-2:RS"],["SX","SXM","534","ISO 3166-2:SX"],["SS","SSD","728","ISO 3166-2:SS"],["XK","XKK","983","ISO 3166-2:XK"]],_y=["br","cy","dv","sw","eu","af","am","ha","ku","ml","mt","no","ps","sd","so","sq","ta","tg","tt","ug","ur","vi","ar","az","be","bg","bn","bs","ca","cs","da","de","el","en","es","et","fa","fi","fr","ga","gl","he","hi","hr","hu","hy","id","is","it","ja","ka","kk","km","ko","ky","lt","lv","mk","mn","mr","ms","nb","nl","nn","pl","pt","ro","ru","sk","sl","sr","sv","th","tk","tr","uk","uz","zh"];var zr={};zr.remove=Cy;for(var Hr=[{base:" ",chars:" "},{base:"0",chars:"߀"},{base:"A",chars:"ⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",chars:"Ꜳ"},{base:"AE",chars:"ÆǼǢ"},{base:"AO",chars:"Ꜵ"},{base:"AU",chars:"Ꜷ"},{base:"AV",chars:"ꜸꜺ"},{base:"AY",chars:"Ꜽ"},{base:"B",chars:"ⒷＢḂḄḆɃƁ"},{base:"C",chars:"ⒸＣꜾḈĆCĈĊČÇƇȻ"},{base:"D",chars:"ⒹＤḊĎḌḐḒḎĐƊƉᴅꝹ"},{base:"Dh",chars:"Ð"},{base:"DZ",chars:"ǱǄ"},{base:"Dz",chars:"ǲǅ"},{base:"E",chars:"ɛⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎᴇ"},{base:"F",chars:"ꝼⒻＦḞƑꝻ"},{base:"G",chars:"ⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾɢ"},{base:"H",chars:"ⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",chars:"ⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",chars:"ⒿＪĴɈȷ"},{base:"K",chars:"ⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",chars:"ⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",chars:"Ǉ"},{base:"Lj",chars:"ǈ"},{base:"M",chars:"ⓂＭḾṀṂⱮƜϻ"},{base:"N",chars:"ꞤȠⓃＮǸŃÑṄŇṆŅṊṈƝꞐᴎ"},{base:"NJ",chars:"Ǌ"},{base:"Nj",chars:"ǋ"},{base:"O",chars:"ⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OE",chars:"Œ"},{base:"OI",chars:"Ƣ"},{base:"OO",chars:"Ꝏ"},{base:"OU",chars:"Ȣ"},{base:"P",chars:"ⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",chars:"ⓆＱꝖꝘɊ"},{base:"R",chars:"ⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",chars:"ⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",chars:"ⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",chars:"Þ"},{base:"TZ",chars:"Ꜩ"},{base:"U",chars:"ⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",chars:"ⓋＶṼṾƲꝞɅ"},{base:"VY",chars:"Ꝡ"},{base:"W",chars:"ⓌＷẀẂŴẆẄẈⱲ"},{base:"X",chars:"ⓍＸẊẌ"},{base:"Y",chars:"ⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",chars:"ⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",chars:"ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",chars:"ꜳ"},{base:"ae",chars:"æǽǣ"},{base:"ao",chars:"ꜵ"},{base:"au",chars:"ꜷ"},{base:"av",chars:"ꜹꜻ"},{base:"ay",chars:"ꜽ"},{base:"b",chars:"ⓑｂḃḅḇƀƃɓƂ"},{base:"c",chars:"ｃⓒćĉċčçḉƈȼꜿↄ"},{base:"d",chars:"ⓓｄḋďḍḑḓḏđƌɖɗƋᏧԁꞪ"},{base:"dh",chars:"ð"},{base:"dz",chars:"ǳǆ"},{base:"e",chars:"ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇǝ"},{base:"f",chars:"ⓕｆḟƒ"},{base:"ff",chars:"ﬀ"},{base:"fi",chars:"ﬁ"},{base:"fl",chars:"ﬂ"},{base:"ffi",chars:"ﬃ"},{base:"ffl",chars:"ﬄ"},{base:"g",chars:"ⓖｇǵĝḡğġǧģǥɠꞡꝿᵹ"},{base:"h",chars:"ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",chars:"ƕ"},{base:"i",chars:"ⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",chars:"ⓙｊĵǰɉ"},{base:"k",chars:"ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",chars:"ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇɭ"},{base:"lj",chars:"ǉ"},{base:"m",chars:"ⓜｍḿṁṃɱɯ"},{base:"n",chars:"ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",chars:"ǌ"},{base:"o",chars:"ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿꝋꝍɵɔᴑ"},{base:"oe",chars:"œ"},{base:"oi",chars:"ƣ"},{base:"oo",chars:"ꝏ"},{base:"ou",chars:"ȣ"},{base:"p",chars:"ⓟｐṕṗƥᵽꝑꝓꝕρ"},{base:"q",chars:"ⓠｑɋꝗꝙ"},{base:"r",chars:"ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",chars:"ⓢｓśṥŝṡšṧṣṩșşȿꞩꞅẛʂ"},{base:"ss",chars:"ß"},{base:"t",chars:"ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",chars:"þ"},{base:"tz",chars:"ꜩ"},{base:"u",chars:"ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",chars:"ⓥｖṽṿʋꝟʌ"},{base:"vy",chars:"ꝡ"},{base:"w",chars:"ⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",chars:"ⓧｘẋẍ"},{base:"y",chars:"ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",chars:"ⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],ja={},Wr=0;Wr<Hr.length;Wr+=1)for(var Ac=Hr[Wr].chars,qa=0;qa<Ac.length;qa+=1)ja[Ac[qa]]=Hr[Wr].base;function Cy(e){return e.replace(/[^\u0000-\u007e]/g,function(t){return ja[t]||t})}zr.replacementList=Hr,zr.diacriticsMap=ja,function(e){const t=Iy,n=_y,r=zr.remove,i={},a={},s={},u={},o={};t.forEach(function(C){const _=C;a[_[0]]=_[1],s[_[1]]=_[0],u[_[2]]=_[0],o[_[0]]=_[2]});function c(C){return("000"+(C||"")).slice(-3)}function l(C,_){return Object.prototype.hasOwnProperty.call(C,_)}function f(C,_){return Object.keys(C).reduce(function(h,T){const D=C[T];return h[T]=_(D,T),h},{})}function g(C,_){switch(C){case"official":return Array.isArray(_)?_[0]:_;case"all":return typeof _=="string"?[_]:_;case"alias":return Array.isArray(_)?_[1]||_[0]:_;default:throw new TypeError("LocaleNameType must be one of these: all, official, alias!")}}e.registerLocale=function(C){if(!C.locale)throw new TypeError("Missing localeData.locale");if(!C.countries)throw new TypeError("Missing localeData.countries");i[C.locale]=C.countries};function p(C){return s[C]}e.alpha3ToAlpha2=p;function I(C){return a[C]}e.alpha2ToAlpha3=I;function x(C){return o[p(C)]}e.alpha3ToNumeric=x;function b(C){return o[C]}e.alpha2ToNumeric=b;function S(C){const _=c(C);return I(u[_])}e.numericToAlpha3=S;function v(C){const _=c(C);return u[_]}e.numericToAlpha2=v;function w(C){if(typeof C=="string"){if(/^[0-9]*$/.test(C))return S(C);if(C.length===2)return I(C.toUpperCase());if(C.length===3)return C.toUpperCase()}if(typeof C=="number")return S(C)}e.toAlpha3=w;function E(C){if(typeof C=="string"){if(/^[0-9]*$/.test(C))return v(C);if(C.length===2)return C.toUpperCase();if(C.length===3)return p(C.toUpperCase())}if(typeof C=="number")return v(C)}e.toAlpha2=E,e.getName=function(C,_,h={}){"select"in h||(h.select="official");try{const D=i[_.toLowerCase()][E(C)];return g(h.select,D)}catch{return}},e.getNames=function(C,_={}){"select"in _||(_.select="official");const h=i[C.toLowerCase()];return h===void 0?{}:f(h,function(T){return g(_.select,T)})},e.getAlpha2Code=function(C,_){const h=D=>D.toLowerCase(),T=(D,$)=>h(D)===h($);try{const D=i[_.toLowerCase()];for(const $ in D)if(l(D,$)){if(typeof D[$]=="string"&&T(D[$],C))return $;if(Array.isArray(D[$])){for(const L of D[$])if(T(L,C))return $}}return}catch{return}},e.getSimpleAlpha2Code=function(C,_){const h=D=>r(D.toLowerCase()),T=(D,$)=>h(D)===h($);try{const D=i[_.toLowerCase()];for(const $ in D)if(l(D,$)){if(typeof D[$]=="string"&&T(D[$],C))return $;if(Array.isArray(D[$])){for(const L of D[$])if(T(L,C))return $}}return}catch{return}},e.getAlpha2Codes=function(){return a},e.getAlpha3Code=function(C,_){const h=e.getAlpha2Code(C,_);if(h)return e.toAlpha3(h)},e.getSimpleAlpha3Code=function(C,_){const h=e.getSimpleAlpha2Code(C,_);if(h)return e.toAlpha3(h)},e.getAlpha3Codes=function(){return s},e.getNumericCodes=function(){return u},e.langs=function(){return Object.keys(i)},e.getSupportedLanguages=function(){return n},e.isValid=function(C){if(!C)return!1;const _=C.toString().toUpperCase();return l(s,_)||l(a,_)||l(u,_)}}(kc);const Lc=ks(kc),wy=e=>e==="zh-CN"?"zh":e==="zh-TW"?"tw":e.slice(0,2),Oy=(e,t="en")=>{if(!e)return;const n=Lc.getName(e,wy(t));if(n)return n;if(t!=="en")return Lc.getName(e,"en")},jc=new $r({messageID:"country",type:"country",makeCriterion:()=>new qc});class qc extends nt{constructor(){super(jc)}getLabelValue(t){return this.modifier===y.Equals||this.modifier===y.NotEquals?Oy(this.value,t.locale)??this.value:super.getLabelValue(t)}}const Ey="name",Ty=["name","height","birthdate","tag_count","random","rating","penis_length","play_count","last_played_at","latest_scene","career_start","career_end","weight","measurements","scenes_duration","scenes_size"].map($e.createSortBy).concat([{messageID:"scene_count",value:"scenes_count"},{messageID:"image_count",value:"images_count"},{messageID:"gallery_count",value:"galleries_count"},{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"},{messageID:"last_o_at",value:"last_o_at",sfwMessageID:"last_o_at_sfw"}]),Dy=[Ie.Grid,Ie.List,Ie.Tagger],$y=["birth_year","death_year","age","weight","penis_length"],Py=["name","disambiguation","details","ethnicity","hair_color","eye_color","measurements","fake_tits","tattoos","piercings","aliases"],My=[fu,Mc,Nc,Vg,St,Ur,rn,Yn,ie("url"),Ft,ee("tag_count"),ee("scene_count"),ee("image_count"),ee("gallery_count"),ee("play_count"),ee("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Mr("ignore_auto_tag"),jc,lu("height_cm","height"),...$y.map(e=>lu(e)),...Py.map(e=>ie(e)),dt("birthdate"),dt("death_date"),dt("career_start"),dt("career_end"),De("created_at"),De("updated_at"),It],Fy=new $e(Ey,Ty,Dy,My),Ny="title",ky=["duration","title","seconds","scene_id","random","scenes_updated_at"].map($e.createSortBy),Ay=[Ie.Grid,Ie.Wall],Ly=[St,Iu,ch,tn,Tg("duration"),De("created_at"),De("updated_at"),dt("scene_date"),De("scene_created_at"),De("scene_updated_at")],jy=new $e(Ny,ky,Ay,Ly),Bc=new cu("hasMarkers","has_markers",()=>new qy);class qy extends ba{constructor(){super(Bc)}}const Rc=new $t("interactive","interactive",()=>new By);class By extends Pt{constructor(){super(Rc)}}const Ba=new Map([["de","Deutsche"],["en","English"],["es","Español"],["fr","Français"],["it","Italiano"],["ja","日本"],["ko","한국인"],["nl","Holandés"],["pt","Português"],["ru","Русский"],["00","Unknown"]]),Ry=e=>{if(e)return Array.from(Ba.keys()).find(t=>Ba.get(t)===e)},Vy=Array.from(Ba.values()),Vc=new pe({messageID:"captions",type:"captions",modifierOptions:[y.Includes,y.Excludes,y.IsNull,y.NotNull],defaultModifier:y.Includes,options:Vy,makeCriterion:()=>new Gy});class Gy extends nt{constructor(){super(Vc)}toCriterionInput(){return{value:Ry(this.value)??"",modifier:this.modifier}}}const Uy="date",zy=["organized","date","file_count","filesize","duration","framerate","resolution","bitrate","last_played_at","resume_time","play_duration","play_count","interactive","interactive_speed","perceptual_similarity","performer_age","studio",..._a].map($e.createSortBy).concat([{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"},{messageID:"last_o_at",value:"last_o_at",sfwMessageID:"last_o_at_sfw"},{messageID:"group_scene_number",value:"group_scene_number"},{messageID:"scene_code",value:"code"}]),Hy=[Ie.Grid,Ie.List,Ie.Wall,Ie.Tagger],Wy=ee("performer_age"),Yy=Nr("duration"),Qy=[ie("title"),ie("code","scene_code"),qr,Fa,ie("details"),ie("director"),Pr("oshash","media_info.oshash"),ie("checksum","media_info.md5"),ka,wc,Ar,Ft,ee("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Sa,Ic,ee("framerate"),ee("bitrate"),ie("video_codec"),ie("audio_codec"),Yy,Nr("resume_time"),Nr("play_duration"),ee("play_count"),De("last_played_at"),Bc,Bg,St,ee("tag_count"),Ia,tn,ee("performer_count"),Wy,kr,rn,Ur,cy,Na,ie("url"),Yn,ee("stash_id_count"),Rc,Vc,ee("interactive_speed"),ee("file_count"),dt("date"),De("created_at"),De("updated_at"),It],Ky=new $e(Uy,zy,Hy,Qy),Jy="name",Xy=["name","tag_count","random","rating","scenes_duration","scenes_size","latest_scene"].map($e.createSortBy).concat([{messageID:"gallery_count",value:"galleries_count"},{messageID:"image_count",value:"images_count"},{messageID:"scene_count",value:"scenes_count"},{messageID:"o_count",value:"o_counter"},{messageID:"o_count_all",value:"o_counter_all"},{messageID:"performer_count",value:"performer_count"},{messageID:"performer_count_all",value:"performer_count_all"},{messageID:"subsidiary_studio_count",value:"child_count"},{messageID:"scene_marker_count",value:"scene_markers_count"}]),Zy=[Ie.Grid,Ie.List,Ie.Tagger],eS=[mu,Pr("name"),ie("details"),wu,zg,St,Ft,Mr("ignore_auto_tag"),Mr("organized"),ee("tag_count"),ee("scene_count"),ee("image_count"),ee("gallery_count"),ie("url"),Yn,ie("aliases"),ee("child_count","subsidiary_studio_count"),De("created_at"),De("updated_at"),It],tS=new $e(Jy,Xy,Zy,eS),nS="name",rS=["name","random","scenes_duration","scenes_size"].map($e.createSortBy).concat([{messageID:"gallery_count",value:"galleries_count"},{messageID:"image_count",value:"images_count"},{messageID:"performer_count",value:"performers_count"},{messageID:"scene_count",value:"scenes_count"},{messageID:"group_count",value:"groups_count"},{messageID:"marker_count",value:"scene_markers_count"},{messageID:"studio_count",value:"studios_count"}]),iS=[Ie.Grid,Ie.List,Ie.Tagger],aS=[pu,Pr("name"),ie("sort_name"),Ug,ie("aliases"),ie("description"),Mr("ignore_auto_tag"),Yn,ee("scene_count"),ee("image_count"),ee("gallery_count"),ee("performer_count"),ee("studio_count"),ee("group_count"),ee("marker_count"),Tu,new Fr("parent_tag_count","parent_count"),Du,new Fr("sub_tag_count","child_count"),De("created_at"),De("updated_at"),It],sS=new $e(nS,rS,iS,aS);function Gc(e){switch(e){case X.Scenes:return Ky;case X.Performers:return Fy;case X.Studios:return tS;case X.Galleries:return Qb;case X.SceneMarkers:return jy;case X.Movies:case X.Groups:return my;case X.Tags:return sS;case X.Images:return uy}}const mt={sortDirection:He.Asc,displayMode:Ie.Grid,currentPage:1,itemsPerPage:40};class ae{constructor(t,n,r){Z(this,"mode");Z(this,"options");Z(this,"config");Z(this,"searchTerm","");Z(this,"currentPage",mt.currentPage);Z(this,"itemsPerPage",mt.itemsPerPage);Z(this,"sortDirection",mt.sortDirection);Z(this,"sortBy");Z(this,"displayMode",mt.displayMode);Z(this,"zoomIndex",1);Z(this,"criteria",[]);Z(this,"randomSeed",-1);Z(this,"defaultZoomIndex",1);this.mode=t,this.config=n,this.options=Gc(t);const{defaultSortBy:i,displayModeOptions:a}=this.options;r!=null&&r.defaultSortBy?(this.sortBy=r.defaultSortBy,r.defaultSortDir&&(this.sortDirection=r.defaultSortDir)):(this.sortBy=i,this.sortBy==="date"&&(this.sortDirection=He.Desc)),this.displayMode=a[0],(r==null?void 0:r.defaultZoomIndex)!==void 0&&(this.defaultZoomIndex=r.defaultZoomIndex,this.zoomIndex=r.defaultZoomIndex)}clone(){const t=Object.assign(new ae(this.mode,this.config),this);return t.criteria=this.criteria.map(n=>n.clone()),t}empty(){return new ae(this.mode,this.config,{defaultZoomIndex:this.defaultZoomIndex})}metadataInfo(){const t=this.clone();return t.sortBy=void 0,t.randomSeed=-1,t.currentPage=1,t.sortDirection=mt.sortDirection,t.itemsPerPage=0,t.zoomIndex=1,t.displayMode=mt.displayMode,t}count(){return this.criteria.length}configureFromDecodedParams(t){if(t.perPage!==void 0&&(this.itemsPerPage=t.perPage),t.sortby!==void 0){this.sortBy=t.sortby;const n=this.sortBy.match(/^random_(\d+)$/);n&&(this.sortBy="random",this.randomSeed=Number.parseInt(n[1],10))}if(t.sortdir!==void 0?this.sortDirection=t.sortdir==="desc"?He.Desc:He.Asc:this.sortDirection=t.sortby==="date"?He.Desc:He.Asc,t.disp!==void 0&&(this.displayMode=t.disp),t.q!==void 0&&(this.searchTerm=t.q),this.currentPage=t.p??1,t.z!==void 0&&(this.zoomIndex=t.z),this.criteria=[],t.c!==void 0)for(const n of t.c)try{const{type:r,...i}=JSON.parse(n),a=this.makeCriterion(r);a.fromDecodedParams(i),this.criteria.push(a)}catch(r){console.error("Failed to parse encoded criterion:",r)}}static decodeParams(t){const n={};if(t.perPage&&(n.perPage=Number.parseInt(t.perPage,10)),t.sortby&&(n.sortby=t.sortby),t.sortdir&&(n.sortdir=t.sortdir),t.disp&&(n.disp=Number.parseInt(t.disp,10)),t.q&&(n.q=t.q),t.p&&(n.p=Number.parseInt(t.p,10)),t.z){const r=Number.parseInt(t.z,10);r>=0&&(n.z=r)}return t.c&&t.c.length!==0&&(n.c=t.c.map(r=>ae.translateJSON(r,!0))),n}static translateJSON(t,n){let r=!1,i=!1;return[...t].map(a=>{if(i)return i=!1,a;switch(a){case"\\":r&&(i=!0);break;case'"':r=!r;break;case"(":if(n&&!r)return"{";break;case")":if(n&&!r)return"}";break;case"{":if(!n&&!r)return"(";break;case"}":if(!n&&!r)return")";break}return a}).join("")}configureFromQueryString(t){const n=new URLSearchParams(t),r={perPage:n.get("perPage"),sortby:n.get("sortby"),sortdir:n.get("sortdir"),disp:n.get("disp"),q:n.get("q"),p:n.get("p"),z:n.get("z"),c:n.getAll("c")},i=ae.decodeParams(r);this.configureFromDecodedParams(i)}configureFromSavedFilter(t){var s;const{find_filter:n,object_filter:r,ui_options:i}=t;this.itemsPerPage=(n==null?void 0:n.per_page)??this.itemsPerPage,this.sortBy=(n==null?void 0:n.sort)??this.sortBy;const a=(s=this.sortBy)==null?void 0:s.match(/^random_(\d+)$/);if(a&&(this.sortBy="random",this.randomSeed=Number.parseInt(a[1],10)),this.sortDirection=(n==null?void 0:n.direction)??this.sortDirection,this.searchTerm=(n==null?void 0:n.q)??this.searchTerm,this.displayMode=(i==null?void 0:i.display_mode)??this.displayMode,this.zoomIndex=(i==null?void 0:i.zoom_index)??this.zoomIndex,this.currentPage=1,this.criteria=[],r)for(const[u,o]of Object.entries(r)){const c=this.makeCriterion(u);c.setFromSavedCriterion(o),this.criteria.push(c)}}setRandomSeed(){this.sortBy==="random"?this.randomSeed===-1&&(this.randomSeed=Math.floor(Math.random()*10**8)):this.randomSeed=-1}getSortBy(){return this.setRandomSeed(),this.sortBy==="random"?`random_${this.randomSeed.toString()}`:this.sortBy}getEncodedParams(){const t=this.criteria.map(n=>{const r=n.toQueryParams();let i=ae.translateJSON(JSON.stringify(r),!1);return i=encodeURI(i),i=i.replaceAll("?",encodeURIComponent("?")),i=i.replaceAll("#",encodeURIComponent("#")),i=i.replaceAll("&",encodeURIComponent("&")),i=i.replaceAll(";",encodeURIComponent(";")),i=i.replaceAll("=",encodeURIComponent("=")),i=i.replaceAll("+",encodeURIComponent("+")),i});return{perPage:this.itemsPerPage!==mt.itemsPerPage?String(this.itemsPerPage):void 0,sortby:this.getSortBy(),sortdir:this.sortBy==="date"?this.sortDirection===He.Asc?"asc":void 0:this.sortDirection===He.Desc?"desc":void 0,disp:this.displayMode!==mt.displayMode?String(this.displayMode):void 0,q:this.searchTerm?encodeURIComponent(this.searchTerm):void 0,p:this.currentPage!==mt.currentPage?String(this.currentPage):void 0,z:this.zoomIndex!==this.defaultZoomIndex?String(this.zoomIndex):void 0,c:t}}makeQueryParameters(){const t=[],n=this.getEncodedParams();if(n.q&&t.push(`q=${n.q}`),n.c)for(const r of n.c)t.push(`c=${r}`);return n.sortby&&t.push(`sortby=${n.sortby}`),n.sortdir&&t.push(`sortdir=${n.sortdir}`),n.perPage&&t.push(`perPage=${n.perPage}`),n.disp&&t.push(`disp=${n.disp}`),n.z&&t.push(`z=${n.z}`),n.p&&t.push(`p=${n.p}`),t.join("&")}makeCriterion(t){const{criterionOptions:n}=Gc(this.mode),r=n.find(i=>i.type===t);return r?r.makeCriterion(this.config):new Fg(t).makeCriterion(this.config)}makeFindFilter(){return{q:this.searchTerm,page:this.currentPage,per_page:this.itemsPerPage,sort:this.getSortBy(),direction:this.sortDirection}}makeFilter(){const t={};for(const n of this.criteria)n.applyToCriterionInput(t);return t}makeSavedFilter(){const t={};for(const n of this.criteria)n.applyToSavedCriterion(t);return t}makeSavedUIOptions(){return{display_mode:this.displayMode,zoom_index:this.zoomIndex}}criteriaFor(t){return this.criteria.filter(n=>n.criterionOption.type===t)}replaceCriteria(t,n){const r=[...this.criteria.filter(i=>i.criterionOption.type!==t),...n];return this.setCriteria(r)}clearCriteria(t=!1){const n=this.clone();return t&&(n.searchTerm=""),n.criteria=[],n.currentPage=1,n}clearSearchTerm(){const t=this.clone();return t.searchTerm="",t.currentPage=1,t}setCriteria(t){const n=this.clone();return n.criteria=t,n.currentPage=1,n}removeCriterion(t){const n=this.clone(),r=n.criteria.find(a=>a.criterionOption.type===t);if(!r)return n;const i=n.criteria.filter(a=>a.getId()!==r.getId());return n.criteria=i,n.currentPage=1,n}removeCustomFieldCriterion(t,n){const r=this.clone(),i=r.criteria.find(a=>a.criterionOption.type===t);if(!i)return r;if(i instanceof hc){const a=i.value.filter((s,u)=>u!==n);i.value=a}return r}setPageSize(t){const n=this.clone();return n.itemsPerPage=t,n.currentPage=1,n}setSortBy(t){const n=this.clone();return n.sortBy=t,n.currentPage=1,n}toggleSortDirection(){const t=this.clone();return t.sortDirection===He.Asc?t.sortDirection=He.Desc:t.sortDirection=He.Asc,t.currentPage=1,t}reshuffleRandomSort(){const t=this.clone();return t.currentPage=1,t.randomSeed=-1,t}changePage(t){const n=this.clone();return n.currentPage=t,n}setZoom(t){const n=this.clone();return n.zoomIndex=t,n}setDisplayMode(t){const n=this.clone();return n.displayMode=t,n}}function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z.apply(null,arguments)}function Lt(e){"@babel/helpers - typeof";return Lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Lt(e)}function oS(e,t){if(Lt(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Lt(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Uc(e){var t=oS(e,"string");return Lt(t)=="symbol"?t:t+""}function fn(e,t,n){return(t=Uc(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zc(Object(n),!0).forEach(function(r){fn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function uS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Hc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Uc(r.key),r)}}function cS(e,t,n){return t&&Hc(e.prototype,t),n&&Hc(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ra(e,t){return Ra=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Ra(e,t)}function lS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ra(e,t)}function Yr(e){return Yr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Yr(e)}function Wc(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Wc=function(){return!!e})()}function dS(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fS(e,t){if(t&&(Lt(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dS(e)}function pS(e){var t=Wc();return function(){var n,r=Yr(e);if(t){var i=Yr(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return fS(this,n)}}function Va(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function mS(e){if(Array.isArray(e))return Va(e)}function gS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Yc(e,t){if(e){if(typeof e=="string")return Va(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Va(e,t):void 0}}function hS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pn(e){return mS(e)||gS(e)||Yc(e)||hS()}function vS(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function bS(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var yS=function(){function e(n){var r=this;this._insertTag=function(i){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,a),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(bS(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=vS(i);try{a.insertRule(r,a.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Re="-ms-",Qr="-moz-",oe="-webkit-",Qc="comm",Ga="rule",Ua="decl",SS="@import",Kc="@keyframes",xS="@layer",IS=Math.abs,Kr=String.fromCharCode,_S=Object.assign;function CS(e,t){return je(e,0)^45?(((t<<2^je(e,0))<<2^je(e,1))<<2^je(e,2))<<2^je(e,3):0}function Jc(e){return e.trim()}function wS(e,t){return(e=t.exec(e))?e[0]:e}function ue(e,t,n){return e.replace(t,n)}function za(e,t){return e.indexOf(t)}function je(e,t){return e.charCodeAt(t)|0}function Qn(e,t,n){return e.slice(t,n)}function at(e){return e.length}function Ha(e){return e.length}function Jr(e,t){return t.push(e),e}function OS(e,t){return e.map(t).join("")}var Xr=1,mn=1,Xc=0,ze=0,Ee=0,gn="";function Zr(e,t,n,r,i,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Xr,column:mn,length:s,return:""}}function Kn(e,t){return _S(Zr("",null,null,"",null,null,0),e,{length:-e.length},t)}function ES(){return Ee}function TS(){return Ee=ze>0?je(gn,--ze):0,mn--,Ee===10&&(mn=1,Xr--),Ee}function Qe(){return Ee=ze<Xc?je(gn,ze++):0,mn++,Ee===10&&(mn=1,Xr++),Ee}function st(){return je(gn,ze)}function ei(){return ze}function Jn(e,t){return Qn(gn,e,t)}function Xn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Zc(e){return Xr=mn=1,Xc=at(gn=e),ze=0,[]}function el(e){return gn="",e}function ti(e){return Jc(Jn(ze-1,Wa(e===91?e+2:e===40?e+1:e)))}function DS(e){for(;(Ee=st())&&Ee<33;)Qe();return Xn(e)>2||Xn(Ee)>3?"":" "}function $S(e,t){for(;--t&&Qe()&&!(Ee<48||Ee>102||Ee>57&&Ee<65||Ee>70&&Ee<97););return Jn(e,ei()+(t<6&&st()==32&&Qe()==32))}function Wa(e){for(;Qe();)switch(Ee){case e:return ze;case 34:case 39:e!==34&&e!==39&&Wa(Ee);break;case 40:e===41&&Wa(e);break;case 92:Qe();break}return ze}function PS(e,t){for(;Qe()&&e+Ee!==57;)if(e+Ee===84&&st()===47)break;return"/*"+Jn(t,ze-1)+"*"+Kr(e===47?e:Qe())}function MS(e){for(;!Xn(st());)Qe();return Jn(e,ze)}function FS(e){return el(ni("",null,null,null,[""],e=Zc(e),0,[0],e))}function ni(e,t,n,r,i,a,s,u,o){for(var c=0,l=0,f=s,g=0,p=0,I=0,x=1,b=1,S=1,v=0,w="",E=i,C=a,_=r,h=w;b;)switch(I=v,v=Qe()){case 40:if(I!=108&&je(h,f-1)==58){za(h+=ue(ti(v),"&","&\f"),"&\f")!=-1&&(S=-1);break}case 34:case 39:case 91:h+=ti(v);break;case 9:case 10:case 13:case 32:h+=DS(I);break;case 92:h+=$S(ei()-1,7);continue;case 47:switch(st()){case 42:case 47:Jr(NS(PS(Qe(),ei()),t,n),o);break;default:h+="/"}break;case 123*x:u[c++]=at(h)*S;case 125*x:case 59:case 0:switch(v){case 0:case 125:b=0;case 59+l:S==-1&&(h=ue(h,/\f/g,"")),p>0&&at(h)-f&&Jr(p>32?nl(h+";",r,n,f-1):nl(ue(h," ","")+";",r,n,f-2),o);break;case 59:h+=";";default:if(Jr(_=tl(h,t,n,c,l,i,u,w,E=[],C=[],f),a),v===123)if(l===0)ni(h,t,_,_,E,a,f,u,C);else switch(g===99&&je(h,3)===110?100:g){case 100:case 108:case 109:case 115:ni(e,_,_,r&&Jr(tl(e,_,_,0,0,i,u,w,i,E=[],f),C),i,C,f,u,r?E:C);break;default:ni(h,_,_,_,[""],C,0,u,C)}}c=l=p=0,x=S=1,w=h="",f=s;break;case 58:f=1+at(h),p=I;default:if(x<1){if(v==123)--x;else if(v==125&&x++==0&&TS()==125)continue}switch(h+=Kr(v),v*x){case 38:S=l>0?1:(h+="\f",-1);break;case 44:u[c++]=(at(h)-1)*S,S=1;break;case 64:st()===45&&(h+=ti(Qe())),g=st(),l=f=at(w=h+=MS(ei())),v++;break;case 45:I===45&&at(h)==2&&(x=0)}}return a}function tl(e,t,n,r,i,a,s,u,o,c,l){for(var f=i-1,g=i===0?a:[""],p=Ha(g),I=0,x=0,b=0;I<r;++I)for(var S=0,v=Qn(e,f+1,f=IS(x=s[I])),w=e;S<p;++S)(w=Jc(x>0?g[S]+" "+v:ue(v,/&\f/g,g[S])))&&(o[b++]=w);return Zr(e,t,n,i===0?Ga:u,o,c,l)}function NS(e,t,n){return Zr(e,t,n,Qc,Kr(ES()),Qn(e,2,-2),0)}function nl(e,t,n,r){return Zr(e,t,n,Ua,Qn(e,0,r),Qn(e,r+1,-1),r)}function hn(e,t){for(var n="",r=Ha(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function kS(e,t,n,r){switch(e.type){case xS:if(e.children.length)break;case SS:case Ua:return e.return=e.return||e.value;case Qc:return"";case Kc:return e.return=e.value+"{"+hn(e.children,r)+"}";case Ga:e.value=e.props.join(",")}return at(n=hn(e.children,r))?e.return=e.value+"{"+n+"}":""}function AS(e){var t=Ha(e);return function(n,r,i,a){for(var s="",u=0;u<t;u++)s+=e[u](n,r,i,a)||"";return s}}function LS(e){return function(t){t.root||(t=t.return)&&e(t)}}function jS(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var qS=function(t,n,r){for(var i=0,a=0;i=a,a=st(),i===38&&a===12&&(n[r]=1),!Xn(a);)Qe();return Jn(t,ze)},BS=function(t,n){var r=-1,i=44;do switch(Xn(i)){case 0:i===38&&st()===12&&(n[r]=1),t[r]+=qS(ze-1,n,r);break;case 2:t[r]+=ti(i);break;case 4:if(i===44){t[++r]=st()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Kr(i)}while(i=Qe());return t},RS=function(t,n){return el(BS(Zc(t),n))},rl=new WeakMap,VS=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!rl.get(r))&&!i){rl.set(t,!0);for(var a=[],s=RS(n,a),u=r.props,o=0,c=0;o<s.length;o++)for(var l=0;l<u.length;l++,c++)t.props[c]=a[o]?s[o].replace(/&\f/g,u[l]):u[l]+" "+s[o]}}},GS=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function il(e,t){switch(CS(e,t)){case 5103:return oe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return oe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return oe+e+Qr+e+Re+e+e;case 6828:case 4268:return oe+e+Re+e+e;case 6165:return oe+e+Re+"flex-"+e+e;case 5187:return oe+e+ue(e,/(\w+).+(:[^]+)/,oe+"box-$1$2"+Re+"flex-$1$2")+e;case 5443:return oe+e+Re+"flex-item-"+ue(e,/flex-|-self/,"")+e;case 4675:return oe+e+Re+"flex-line-pack"+ue(e,/align-content|flex-|-self/,"")+e;case 5548:return oe+e+Re+ue(e,"shrink","negative")+e;case 5292:return oe+e+Re+ue(e,"basis","preferred-size")+e;case 6060:return oe+"box-"+ue(e,"-grow","")+oe+e+Re+ue(e,"grow","positive")+e;case 4554:return oe+ue(e,/([^-])(transform)/g,"$1"+oe+"$2")+e;case 6187:return ue(ue(ue(e,/(zoom-|grab)/,oe+"$1"),/(image-set)/,oe+"$1"),e,"")+e;case 5495:case 3959:return ue(e,/(image-set\([^]*)/,oe+"$1$`$1");case 4968:return ue(ue(e,/(.+:)(flex-)?(.*)/,oe+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+oe+e+e;case 4095:case 3583:case 4068:case 2532:return ue(e,/(.+)-inline(.+)/,oe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(at(e)-1-t>6)switch(je(e,t+1)){case 109:if(je(e,t+4)!==45)break;case 102:return ue(e,/(.+:)(.+)-([^]+)/,"$1"+oe+"$2-$3$1"+Qr+(je(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~za(e,"stretch")?il(ue(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(je(e,t+1)!==115)break;case 6444:switch(je(e,at(e)-3-(~za(e,"!important")&&10))){case 107:return ue(e,":",":"+oe)+e;case 101:return ue(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+oe+(je(e,14)===45?"inline-":"")+"box$3$1"+oe+"$2$3$1"+Re+"$2box$3")+e}break;case 5936:switch(je(e,t+11)){case 114:return oe+e+Re+ue(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return oe+e+Re+ue(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return oe+e+Re+ue(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return oe+e+Re+e+e}return e}var US=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Ua:t.return=il(t.value,t.length);break;case Kc:return hn([Kn(t,{value:ue(t.value,"@","@"+oe)})],i);case Ga:if(t.length)return OS(t.props,function(a){switch(wS(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return hn([Kn(t,{props:[ue(a,/:(read-\w+)/,":"+Qr+"$1")]})],i);case"::placeholder":return hn([Kn(t,{props:[ue(a,/:(plac\w+)/,":"+oe+"input-$1")]}),Kn(t,{props:[ue(a,/:(plac\w+)/,":"+Qr+"$1")]}),Kn(t,{props:[ue(a,/:(plac\w+)/,Re+"input-$1")]})],i)}return""})}},zS=[US],HS=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(x){var b=x.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var i=t.stylisPlugins||zS,a={},s,u=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var b=x.getAttribute("data-emotion").split(" "),S=1;S<b.length;S++)a[b[S]]=!0;u.push(x)});var o,c=[VS,GS];{var l,f=[kS,LS(function(x){l.insert(x)})],g=AS(c.concat(i,f)),p=function(b){return hn(FS(b),g)};o=function(b,S,v,w){l=v,p(b?b+"{"+S.styles+"}":S.styles),w&&(I.inserted[S.name]=!0)}}var I={key:n,sheet:new yS({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:o};return I.sheet.hydrate(u),I},al={exports:{}},de={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ke=typeof Symbol=="function"&&Symbol.for,Ya=ke?Symbol.for("react.element"):60103,Qa=ke?Symbol.for("react.portal"):60106,ri=ke?Symbol.for("react.fragment"):60107,ii=ke?Symbol.for("react.strict_mode"):60108,ai=ke?Symbol.for("react.profiler"):60114,si=ke?Symbol.for("react.provider"):60109,oi=ke?Symbol.for("react.context"):60110,Ka=ke?Symbol.for("react.async_mode"):60111,ui=ke?Symbol.for("react.concurrent_mode"):60111,ci=ke?Symbol.for("react.forward_ref"):60112,li=ke?Symbol.for("react.suspense"):60113,WS=ke?Symbol.for("react.suspense_list"):60120,di=ke?Symbol.for("react.memo"):60115,fi=ke?Symbol.for("react.lazy"):60116,YS=ke?Symbol.for("react.block"):60121,QS=ke?Symbol.for("react.fundamental"):60117,KS=ke?Symbol.for("react.responder"):60118,JS=ke?Symbol.for("react.scope"):60119;function Ke(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ya:switch(e=e.type,e){case Ka:case ui:case ri:case ai:case ii:case li:return e;default:switch(e=e&&e.$$typeof,e){case oi:case ci:case fi:case di:case si:return e;default:return t}}case Qa:return t}}}function sl(e){return Ke(e)===ui}de.AsyncMode=Ka,de.ConcurrentMode=ui,de.ContextConsumer=oi,de.ContextProvider=si,de.Element=Ya,de.ForwardRef=ci,de.Fragment=ri,de.Lazy=fi,de.Memo=di,de.Portal=Qa,de.Profiler=ai,de.StrictMode=ii,de.Suspense=li,de.isAsyncMode=function(e){return sl(e)||Ke(e)===Ka},de.isConcurrentMode=sl,de.isContextConsumer=function(e){return Ke(e)===oi},de.isContextProvider=function(e){return Ke(e)===si},de.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ya},de.isForwardRef=function(e){return Ke(e)===ci},de.isFragment=function(e){return Ke(e)===ri},de.isLazy=function(e){return Ke(e)===fi},de.isMemo=function(e){return Ke(e)===di},de.isPortal=function(e){return Ke(e)===Qa},de.isProfiler=function(e){return Ke(e)===ai},de.isStrictMode=function(e){return Ke(e)===ii},de.isSuspense=function(e){return Ke(e)===li},de.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ri||e===ui||e===ai||e===ii||e===li||e===WS||typeof e=="object"&&e!==null&&(e.$$typeof===fi||e.$$typeof===di||e.$$typeof===si||e.$$typeof===oi||e.$$typeof===ci||e.$$typeof===QS||e.$$typeof===KS||e.$$typeof===JS||e.$$typeof===YS)},de.typeOf=Ke,al.exports=de;var XS=al.exports,ol=XS,ZS={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},e1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ul={};ul[ol.ForwardRef]=ZS,ul[ol.Memo]=e1;var t1=!0;function n1(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(r+=i+" ")}),r}var cl=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||t1===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},r1=function(t,n,r){cl(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+i:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function i1(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var a1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},s1=/[A-Z]|^ms/g,o1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ll=function(t){return t.charCodeAt(1)===45},dl=function(t){return t!=null&&typeof t!="boolean"},Ja=jS(function(e){return ll(e)?e:e.replace(s1,"-$&").toLowerCase()}),fl=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(o1,function(r,i,a){return ot={name:i,styles:a,next:ot},i})}return a1[t]!==1&&!ll(t)&&typeof n=="number"&&n!==0?n+"px":n};function Zn(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return ot={name:i.name,styles:i.styles,next:ot},i.name;var a=n;if(a.styles!==void 0){var s=a.next;if(s!==void 0)for(;s!==void 0;)ot={name:s.name,styles:s.styles,next:ot},s=s.next;var u=a.styles+";";return u}return u1(e,t,n)}case"function":{if(e!==void 0){var o=ot,c=n(e);return ot=o,Zn(e,t,c)}break}}var l=n;return l}function u1(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Zn(e,t,n[i])+";";else for(var a in n){var s=n[a];if(typeof s!="object"){var u=s;dl(u)&&(r+=Ja(a)+":"+fl(a,u)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&t==null)for(var o=0;o<s.length;o++)dl(s[o])&&(r+=Ja(a)+":"+fl(a,s[o])+";");else{var c=Zn(e,t,s);switch(a){case"animation":case"animationName":{r+=Ja(a)+":"+c+";";break}default:r+=a+"{"+c+"}"}}}return r}var pl=/label:\s*([^\s;{]+)\s*(;|$)/g,ot;function ml(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";ot=void 0;var a=e[0];if(a==null||a.raw===void 0)r=!1,i+=Zn(n,t,a);else{var s=a;i+=s[0]}for(var u=1;u<e.length;u++)if(i+=Zn(n,t,e[u]),r){var o=a;i+=o[u]}pl.lastIndex=0;for(var c="",l;(l=pl.exec(i))!==null;)c+="-"+l[1];var f=i1(i)+c;return{name:f,styles:i,next:ot}}var c1=function(t){return t()},l1=J.useInsertionEffect?J.useInsertionEffect:!1,d1=l1||c1,gl=J.createContext(typeof HTMLElement<"u"?HS({key:"css"}):null);gl.Provider;var f1=function(t){return O.forwardRef(function(n,r){var i=O.useContext(gl);return t(n,i,r)})},p1=J.createContext({}),Xa={}.hasOwnProperty,Za="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",m1=function(t,n){var r={};for(var i in n)Xa.call(n,i)&&(r[i]=n[i]);return r[Za]=t,r},g1=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return cl(n,r,i),d1(function(){return r1(n,r,i)}),null},h1=f1(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Za],a=[r],s="";typeof e.className=="string"?s=n1(t.registered,a,e.className):e.className!=null&&(s=e.className+" ");var u=ml(a,void 0,J.useContext(p1));s+=t.key+"-"+u.name;var o={};for(var c in e)Xa.call(e,c)&&c!=="css"&&c!==Za&&(o[c]=e[c]);return o.className=s,n&&(o.ref=n),J.createElement(J.Fragment,null,J.createElement(g1,{cache:t,serialized:u,isStringTag:typeof i=="string"}),J.createElement(i,o))}),v1=h1,R=function(t,n){var r=arguments;if(n==null||!Xa.call(n,"css"))return J.createElement.apply(void 0,r);var i=r.length,a=new Array(i);a[0]=v1,a[1]=m1(t,n);for(var s=2;s<i;s++)a[s]=r[s];return J.createElement.apply(null,a)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(R||(R={}));function es(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ml(t)}function b1(){var e=es.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function y1(e){if(Array.isArray(e))return e}function S1(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,s,u=[],o=!0,c=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);o=!0);}catch(l){c=!0,i=l}finally{try{if(!o&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw i}}return u}}function x1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ae(e,t){return y1(e)||S1(e,t)||Yc(e,t)||x1()}function I1(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function it(e,t){if(e==null)return{};var n,r,i=I1(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function _1(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const C1=Math.min,w1=Math.max,pi=Math.round,mi=Math.floor,gi=e=>({x:e,y:e});function O1(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function hi(){return typeof window<"u"}function hl(e){return bl(e)?(e.nodeName||"").toLowerCase():"#document"}function gt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function vl(e){var t;return(t=(bl(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function bl(e){return hi()?e instanceof Node||e instanceof gt(e).Node:!1}function E1(e){return hi()?e instanceof Element||e instanceof gt(e).Element:!1}function ts(e){return hi()?e instanceof HTMLElement||e instanceof gt(e).HTMLElement:!1}function yl(e){return!hi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof gt(e).ShadowRoot}const T1=new Set(["inline","contents"]);function Sl(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=ns(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!T1.has(i)}function D1(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const $1=new Set(["html","body","#document"]);function P1(e){return $1.has(hl(e))}function ns(e){return gt(e).getComputedStyle(e)}function M1(e){if(hl(e)==="html")return e;const t=e.assignedSlot||e.parentNode||yl(e)&&e.host||vl(e);return yl(t)?t.host:t}function xl(e){const t=M1(e);return P1(t)?e.ownerDocument?e.ownerDocument.body:e.body:ts(t)&&Sl(t)?t:xl(t)}function vi(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=xl(e),a=i===((r=e.ownerDocument)==null?void 0:r.body),s=gt(i);if(a){const u=rs(s);return t.concat(s,s.visualViewport||[],Sl(i)?i:[],u&&n?vi(u):[])}return t.concat(i,vi(i,[],n))}function rs(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function F1(e){const t=ns(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=ts(e),a=i?e.offsetWidth:n,s=i?e.offsetHeight:r,u=pi(n)!==a||pi(r)!==s;return u&&(n=a,r=s),{width:n,height:r,$:u}}function is(e){return E1(e)?e:e.contextElement}function Il(e){const t=is(e);if(!ts(t))return gi(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:a}=F1(t);let s=(a?pi(n.width):n.width)/r,u=(a?pi(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!u||!Number.isFinite(u))&&(u=1),{x:s,y:u}}const N1=gi(0);function k1(e){const t=gt(e);return!D1()||!t.visualViewport?N1:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function A1(e,t,n){return!1}function _l(e,t,n,r){t===void 0&&(t=!1);const i=e.getBoundingClientRect(),a=is(e);let s=gi(1);t&&(s=Il(e));const u=A1()?k1(a):gi(0);let o=(i.left+u.x)/s.x,c=(i.top+u.y)/s.y,l=i.width/s.x,f=i.height/s.y;if(a){const g=gt(a),p=r;let I=g,x=rs(I);for(;x&&r&&p!==I;){const b=Il(x),S=x.getBoundingClientRect(),v=ns(x),w=S.left+(x.clientLeft+parseFloat(v.paddingLeft))*b.x,E=S.top+(x.clientTop+parseFloat(v.paddingTop))*b.y;o*=b.x,c*=b.y,l*=b.x,f*=b.y,o+=w,c+=E,I=gt(x),x=rs(I)}}return O1({width:l,height:f,x:o,y:c})}function Cl(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function L1(e,t){let n=null,r;const i=vl(e);function a(){var u;clearTimeout(r),(u=n)==null||u.disconnect(),n=null}function s(u,o){u===void 0&&(u=!1),o===void 0&&(o=1),a();const c=e.getBoundingClientRect(),{left:l,top:f,width:g,height:p}=c;if(u||t(),!g||!p)return;const I=mi(f),x=mi(i.clientWidth-(l+g)),b=mi(i.clientHeight-(f+p)),S=mi(l),w={rootMargin:-I+"px "+-x+"px "+-b+"px "+-S+"px",threshold:w1(0,C1(1,o))||1};let E=!0;function C(_){const h=_[0].intersectionRatio;if(h!==o){if(!E)return s();h?s(!1,h):r=setTimeout(()=>{s(!1,1e-7)},1e3)}h===1&&!Cl(c,e.getBoundingClientRect())&&s(),E=!1}try{n=new IntersectionObserver(C,{...w,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,w)}n.observe(e)}return s(!0),a}function j1(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:u=typeof IntersectionObserver=="function",animationFrame:o=!1}=r,c=is(e),l=i||a?[...c?vi(c):[],...vi(t)]:[];l.forEach(S=>{i&&S.addEventListener("scroll",n,{passive:!0}),a&&S.addEventListener("resize",n)});const f=c&&u?L1(c,n):null;let g=-1,p=null;s&&(p=new ResizeObserver(S=>{let[v]=S;v&&v.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var w;(w=p)==null||w.observe(t)})),n()}),c&&!o&&p.observe(c),p.observe(t));let I,x=o?_l(e):null;o&&b();function b(){const S=_l(e);x&&!Cl(x,S)&&n(),x=S,I=requestAnimationFrame(b)}return n(),()=>{var S;l.forEach(v=>{i&&v.removeEventListener("scroll",n),a&&v.removeEventListener("resize",n)}),f==null||f(),(S=p)==null||S.disconnect(),p=null,o&&cancelAnimationFrame(I)}}var as=O.useLayoutEffect,q1=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],bi=function(){};function B1(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function R1(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=[].concat(r);if(t&&e)for(var s in t)t.hasOwnProperty(s)&&t[s]&&a.push("".concat(B1(e,s)));return a.filter(function(u){return u}).map(function(u){return String(u).trim()}).join(" ")}var yi=function(t){return J1(t)?t.filter(Boolean):Lt(t)==="object"&&t!==null?[t]:[]},wl=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=it(t,q1);return q({},n)},_e=function(t,n,r){var i=t.cx,a=t.getStyles,s=t.getClassNames,u=t.className;return{css:a(n,t),className:i(r??{},s(n,t),u)}};function V1(e,t,n){if(n){var r=n(e,t);if(typeof r=="string")return r}return e}function Si(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function G1(e){return Si(e)?window.innerHeight:e.clientHeight}function Ol(e){return Si(e)?window.pageYOffset:e.scrollTop}function xi(e,t){if(Si(e)){window.scrollTo(0,t);return}e.scrollTop=t}function U1(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function z1(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Ii(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:bi,i=Ol(e),a=t-i,s=10,u=0;function o(){u+=s;var c=z1(u,i,a,n);xi(e,c),u<n?window.requestAnimationFrame(o):r(e)}o()}function El(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?xi(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&xi(e,Math.max(t.offsetTop-i,0))}function H1(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Tl(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function W1(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Dl=!1,Y1={get passive(){return Dl=!0}},_i=typeof window<"u"?window:{};_i.addEventListener&&_i.removeEventListener&&(_i.addEventListener("p",bi,Y1),_i.removeEventListener("p",bi,!1));var Q1=Dl;function K1(e){return e!=null}function J1(e){return Array.isArray(e)}function er(e,t,n){return e?t:n}function WO(e){return e}function YO(e){return e}var X1=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a=Object.entries(t).filter(function(s){var u=Ae(s,1),o=u[0];return!r.includes(o)});return a.reduce(function(s,u){var o=Ae(u,2),c=o[0],l=o[1];return s[c]=l,s},{})},Z1=["children","innerProps"],ex=["children","innerProps"];function tx(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,a=e.shouldScroll,s=e.isFixedPosition,u=e.controlHeight,o=U1(n),c={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return c;var l=o.getBoundingClientRect(),f=l.height,g=n.getBoundingClientRect(),p=g.bottom,I=g.height,x=g.top,b=n.offsetParent.getBoundingClientRect(),S=b.top,v=s?window.innerHeight:G1(o),w=Ol(o),E=parseInt(getComputedStyle(n).marginBottom,10),C=parseInt(getComputedStyle(n).marginTop,10),_=S-C,h=v-x,T=_+w,D=f-w-x,$=p-v+w+E,L=w+x-C,G=160;switch(i){case"auto":case"bottom":if(h>=I)return{placement:"bottom",maxHeight:t};if(D>=I&&!s)return a&&Ii(o,$,G),{placement:"bottom",maxHeight:t};if(!s&&D>=r||s&&h>=r){a&&Ii(o,$,G);var re=s?h-E:D-E;return{placement:"bottom",maxHeight:re}}if(i==="auto"||s){var ne=t,P=s?_:T;return P>=r&&(ne=Math.min(P-E-u,t)),{placement:"top",maxHeight:ne}}if(i==="bottom")return a&&xi(o,$),{placement:"bottom",maxHeight:t};break;case"top":if(_>=I)return{placement:"top",maxHeight:t};if(T>=I&&!s)return a&&Ii(o,L,G),{placement:"top",maxHeight:t};if(!s&&T>=r||s&&_>=r){var k=t;return(!s&&T>=r||s&&_>=r)&&(k=s?_-C:T-C),a&&Ii(o,L,G),{placement:"top",maxHeight:k}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function nx(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var $l=function(t){return t==="auto"?"bottom":t},rx=function(t,n){var r,i=t.placement,a=t.theme,s=a.borderRadius,u=a.spacing,o=a.colors;return q((r={label:"menu"},fn(r,nx(i),"100%"),fn(r,"position","absolute"),fn(r,"width","100%"),fn(r,"zIndex",1),r),n?{}:{backgroundColor:o.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:u.menuGutter,marginTop:u.menuGutter})},Pl=O.createContext(null),ix=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,a=t.menuPlacement,s=t.menuPosition,u=t.menuShouldScrollIntoView,o=t.theme,c=O.useContext(Pl)||{},l=c.setPortalPlacement,f=O.useRef(null),g=O.useState(i),p=Ae(g,2),I=p[0],x=p[1],b=O.useState(null),S=Ae(b,2),v=S[0],w=S[1],E=o.spacing.controlHeight;return as(function(){var C=f.current;if(C){var _=s==="fixed",h=u&&!_,T=tx({maxHeight:i,menuEl:C,minHeight:r,placement:a,shouldScroll:h,isFixedPosition:_,controlHeight:E});x(T.maxHeight),w(T.placement),l==null||l(T.placement)}},[i,a,s,u,r,l,E]),n({ref:f,placerProps:q(q({},t),{},{placement:v||$l(a),maxHeight:I})})},ax=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return R("div",z({},_e(t,"menu",{menu:!0}),{ref:r},i),n)},sx=ax,ox=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return q({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},ux=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,a=t.isMulti;return R("div",z({},_e(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:i},r),n)},Ml=function(t,n){var r=t.theme,i=r.spacing.baseUnit,a=r.colors;return q({textAlign:"center"},n?{}:{color:a.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},cx=Ml,lx=Ml,dx=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,a=it(t,Z1);return R("div",z({},_e(q(q({},a),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},fx=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,a=it(t,ex);return R("div",z({},_e(q(q({},a),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},px=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},mx=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,a=t.innerProps,s=t.menuPlacement,u=t.menuPosition,o=O.useRef(null),c=O.useRef(null),l=O.useState($l(s)),f=Ae(l,2),g=f[0],p=f[1],I=O.useMemo(function(){return{setPortalPlacement:p}},[]),x=O.useState(null),b=Ae(x,2),S=b[0],v=b[1],w=O.useCallback(function(){if(i){var h=H1(i),T=u==="fixed"?0:window.pageYOffset,D=h[g]+T;(D!==(S==null?void 0:S.offset)||h.left!==(S==null?void 0:S.rect.left)||h.width!==(S==null?void 0:S.rect.width))&&v({offset:D,rect:h})}},[i,u,g,S==null?void 0:S.offset,S==null?void 0:S.rect.left,S==null?void 0:S.rect.width]);as(function(){w()},[w]);var E=O.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&o.current&&(c.current=j1(i,o.current,w,{elementResize:"ResizeObserver"in window}))},[i,w]);as(function(){E()},[E]);var C=O.useCallback(function(h){o.current=h,E()},[E]);if(!n&&u!=="fixed"||!S)return null;var _=R("div",z({ref:C},_e(q(q({},t),{},{offset:S.offset,position:u,rect:S.rect}),"menuPortal",{"menu-portal":!0}),a),r);return R(Pl.Provider,{value:I},n?af.createPortal(_,n):_)},gx=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},hx=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,a=t.isRtl;return R("div",z({},_e(t,"container",{"--is-disabled":i,"--is-rtl":a}),r),n)},vx=function(t,n){var r=t.theme.spacing,i=t.isMulti,a=t.hasValue,s=t.selectProps.controlShouldRenderValue;return q({alignItems:"center",display:i&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},bx=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,a=t.hasValue;return R("div",z({},_e(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":a}),r),n)},yx=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Sx=function(t){var n=t.children,r=t.innerProps;return R("div",z({},_e(t,"indicatorsContainer",{indicators:!0}),r),n)},Fl,xx=["size"],Ix=["innerProps","isRtl","size"],_x={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Nl=function(t){var n=t.size,r=it(t,xx);return R("svg",z({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:_x},r))},ss=function(t){return R(Nl,z({size:20},t),R("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},kl=function(t){return R(Nl,z({size:20},t),R("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Al=function(t,n){var r=t.isFocused,i=t.theme,a=i.spacing.baseUnit,s=i.colors;return q({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?s.neutral60:s.neutral20,padding:a*2,":hover":{color:r?s.neutral80:s.neutral40}})},Cx=Al,wx=function(t){var n=t.children,r=t.innerProps;return R("div",z({},_e(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||R(kl,null))},Ox=Al,Ex=function(t){var n=t.children,r=t.innerProps;return R("div",z({},_e(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||R(ss,null))},Tx=function(t,n){var r=t.isDisabled,i=t.theme,a=i.spacing.baseUnit,s=i.colors;return q({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},Dx=function(t){var n=t.innerProps;return R("span",z({},n,_e(t,"indicatorSeparator",{"indicator-separator":!0})))},$x=b1(Fl||(Fl=_1([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Px=function(t,n){var r=t.isFocused,i=t.size,a=t.theme,s=a.colors,u=a.spacing.baseUnit;return q({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?s.neutral60:s.neutral20,padding:u*2})},os=function(t){var n=t.delay,r=t.offset;return R("span",{css:es({animation:"".concat($x," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Mx=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,a=i===void 0?4:i,s=it(t,Ix);return R("div",z({},_e(q(q({},s),{},{innerProps:n,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),R(os,{delay:0,offset:r}),R(os,{delay:160,offset:!0}),R(os,{delay:320,offset:!r}))},Fx=function(t,n){var r=t.isDisabled,i=t.isFocused,a=t.theme,s=a.colors,u=a.borderRadius,o=a.spacing;return q({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:o.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:i?s.primary:s.neutral20,borderRadius:u,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:i?s.primary:s.neutral30}})},Nx=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,a=t.innerRef,s=t.innerProps,u=t.menuIsOpen;return R("div",z({ref:a},_e(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":u}),s,{"aria-disabled":r||void 0}),n)},kx=Nx,Ax=["data"],Lx=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},jx=function(t){var n=t.children,r=t.cx,i=t.getStyles,a=t.getClassNames,s=t.Heading,u=t.headingProps,o=t.innerProps,c=t.label,l=t.theme,f=t.selectProps;return R("div",z({},_e(t,"group",{group:!0}),o),R(s,z({},u,{selectProps:f,theme:l,getStyles:i,getClassNames:a,cx:r}),c),R("div",null,n))},qx=function(t,n){var r=t.theme,i=r.colors,a=r.spacing;return q({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Bx=function(t){var n=wl(t);n.data;var r=it(n,Ax);return R("div",z({},_e(t,"groupHeading",{"group-heading":!0}),r))},Rx=jx,Vx=["innerRef","isDisabled","isHidden","inputClassName"],Gx=function(t,n){var r=t.isDisabled,i=t.value,a=t.theme,s=a.spacing,u=a.colors;return q(q({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},Ux),n?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:u.neutral80})},Ll={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Ux={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":q({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Ll)},zx=function(t){return q({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Ll)},Hx=function(t){var n=t.cx,r=t.value,i=wl(t),a=i.innerRef,s=i.isDisabled,u=i.isHidden,o=i.inputClassName,c=it(i,Vx);return R("div",z({},_e(t,"input",{"input-container":!0}),{"data-value":r||""}),R("input",z({className:n({input:!0},o),ref:a,style:zx(u),disabled:s},c)))},Wx=Hx,Yx=function(t,n){var r=t.theme,i=r.spacing,a=r.borderRadius,s=r.colors;return q({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:i.baseUnit/2})},Qx=function(t,n){var r=t.theme,i=r.borderRadius,a=r.colors,s=t.cropWithEllipsis;return q({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Kx=function(t,n){var r=t.theme,i=r.spacing,a=r.borderRadius,s=r.colors,u=t.isFocused;return q({alignItems:"center",display:"flex"},n?{}:{borderRadius:a/2,backgroundColor:u?s.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},jl=function(t){var n=t.children,r=t.innerProps;return R("div",r,n)},Jx=jl,Xx=jl;function Zx(e){var t=e.children,n=e.innerProps;return R("div",z({role:"button"},n),t||R(ss,{size:14}))}var eI=function(t){var n=t.children,r=t.components,i=t.data,a=t.innerProps,s=t.isDisabled,u=t.removeProps,o=t.selectProps,c=r.Container,l=r.Label,f=r.Remove;return R(c,{data:i,innerProps:q(q({},_e(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:o},R(l,{data:i,innerProps:q({},_e(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:o},n),R(f,{data:i,innerProps:q(q({},_e(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},u),selectProps:o}))},tI=eI,nI=function(t,n){var r=t.isDisabled,i=t.isFocused,a=t.isSelected,s=t.theme,u=s.spacing,o=s.colors;return q({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:a?o.primary:i?o.primary25:"transparent",color:r?o.neutral20:a?o.neutral0:"inherit",padding:"".concat(u.baseUnit*2,"px ").concat(u.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?o.primary:o.primary50}})},rI=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,a=t.isSelected,s=t.innerRef,u=t.innerProps;return R("div",z({},_e(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":a}),{ref:s,"aria-disabled":r},u),n)},iI=rI,aI=function(t,n){var r=t.theme,i=r.spacing,a=r.colors;return q({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:a.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},sI=function(t){var n=t.children,r=t.innerProps;return R("div",z({},_e(t,"placeholder",{placeholder:!0}),r),n)},oI=sI,uI=function(t,n){var r=t.isDisabled,i=t.theme,a=i.spacing,s=i.colors;return q({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},cI=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return R("div",z({},_e(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},lI=cI,dI={ClearIndicator:Ex,Control:kx,DropdownIndicator:wx,DownChevron:kl,CrossIcon:ss,Group:Rx,GroupHeading:Bx,IndicatorsContainer:Sx,IndicatorSeparator:Dx,Input:Wx,LoadingIndicator:Mx,Menu:sx,MenuList:ux,MenuPortal:mx,LoadingMessage:fx,NoOptionsMessage:dx,MultiValue:tI,MultiValueContainer:Jx,MultiValueLabel:Xx,MultiValueRemove:Zx,Option:iI,Placeholder:oI,SelectContainer:hx,SingleValue:lI,ValueContainer:bx},fI=function(t){return q(q({},dI),t.components)},ql=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function pI(e,t){return!!(e===t||ql(e)&&ql(t))}function mI(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!pI(e[n],t[n]))return!1;return!0}function gI(e,t){t===void 0&&(t=mI);var n=null;function r(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var s=e.apply(this,i);return n={lastResult:s,lastArgs:i,lastThis:this},s}return r.clear=function(){n=null},r}for(var hI={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},vI=function(t){return R("span",z({css:hI},t))},Bl=vI,bI={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,a=t.context,s=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,a=t.labels,s=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,a=t.label,s=a===void 0?"":a,u=t.selectValue,o=t.isDisabled,c=t.isSelected,l=t.isAppleDevice,f=function(x,b){return x&&x.length?"".concat(x.indexOf(b)+1," of ").concat(x.length):""};if(n==="value"&&u)return"value ".concat(s," focused, ").concat(f(u,r),".");if(n==="menu"&&l){var g=o?" disabled":"",p="".concat(c?" selected":"").concat(g);return"".concat(s).concat(p,", ").concat(f(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},yI=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,a=t.focusableOptions,s=t.isFocused,u=t.selectValue,o=t.selectProps,c=t.id,l=t.isAppleDevice,f=o.ariaLiveMessages,g=o.getOptionLabel,p=o.inputValue,I=o.isMulti,x=o.isOptionDisabled,b=o.isSearchable,S=o.menuIsOpen,v=o.options,w=o.screenReaderStatus,E=o.tabSelectsValue,C=o.isLoading,_=o["aria-label"],h=o["aria-live"],T=O.useMemo(function(){return q(q({},bI),f||{})},[f]),D=O.useMemo(function(){var P="";if(n&&T.onChange){var k=n.option,F=n.options,V=n.removedValue,Q=n.removedValues,ce=n.value,M=function(se){return Array.isArray(se)?null:se},A=V||k||M(ce),W=A?g(A):"",H=F||Q||void 0,Y=H?H.map(g):[],te=q({isDisabled:A&&x(A,u),label:W,labels:Y},n);P=T.onChange(te)}return P},[n,T,x,u,g]),$=O.useMemo(function(){var P="",k=r||i,F=!!(r&&u&&u.includes(r));if(k&&T.onFocus){var V={focused:k,label:g(k),isDisabled:x(k,u),isSelected:F,options:a,context:k===r?"menu":"value",selectValue:u,isAppleDevice:l};P=T.onFocus(V)}return P},[r,i,g,x,T,a,u,l]),L=O.useMemo(function(){var P="";if(S&&v.length&&!C&&T.onFilter){var k=w({count:a.length});P=T.onFilter({inputValue:p,resultsMessage:k})}return P},[a,p,S,T,v,w,C]),G=(n==null?void 0:n.action)==="initial-input-focus",re=O.useMemo(function(){var P="";if(T.guidance){var k=i?"value":S?"menu":"input";P=T.guidance({"aria-label":_,context:k,isDisabled:r&&x(r,u),isMulti:I,isSearchable:b,tabSelectsValue:E,isInitialFocus:G})}return P},[_,r,i,I,x,b,S,T,u,E,G]),ne=R(O.Fragment,null,R("span",{id:"aria-selection"},D),R("span",{id:"aria-focused"},$),R("span",{id:"aria-results"},L),R("span",{id:"aria-guidance"},re));return R(O.Fragment,null,R(Bl,{id:c},G&&ne),R(Bl,{"aria-live":h,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!G&&ne))},SI=yI,us=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],xI=new RegExp("["+us.map(function(e){return e.letters}).join("")+"]","g"),Rl={},cs=0;cs<us.length;cs++)for(var ls=us[cs],ds=0;ds<ls.letters.length;ds++)Rl[ls.letters[ds]]=ls.base;var Vl=function(t){return t.replace(xI,function(n){return Rl[n]})},II=gI(Vl),Gl=function(t){return t.replace(/^\s+|\s+$/g,"")},_I=function(t){return"".concat(t.label," ").concat(t.value)},CI=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=q({ignoreCase:!0,ignoreAccents:!0,stringify:_I,trim:!0,matchFrom:"any"},t),a=i.ignoreCase,s=i.ignoreAccents,u=i.stringify,o=i.trim,c=i.matchFrom,l=o?Gl(r):r,f=o?Gl(u(n)):u(n);return a&&(l=l.toLowerCase(),f=f.toLowerCase()),s&&(l=II(l),f=Vl(f)),c==="start"?f.substr(0,l.length)===l:f.indexOf(l)>-1}},wI=["innerRef"];function OI(e){var t=e.innerRef,n=it(e,wI),r=X1(n,"onExited","in","enter","exit","appear");return R("input",z({ref:t},r,{css:es({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var EI=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function TI(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,a=e.onTopLeave,s=O.useRef(!1),u=O.useRef(!1),o=O.useRef(0),c=O.useRef(null),l=O.useCallback(function(b,S){if(c.current!==null){var v=c.current,w=v.scrollTop,E=v.scrollHeight,C=v.clientHeight,_=c.current,h=S>0,T=E-C-w,D=!1;T>S&&s.current&&(r&&r(b),s.current=!1),h&&u.current&&(a&&a(b),u.current=!1),h&&S>T?(n&&!s.current&&n(b),_.scrollTop=E,D=!0,s.current=!0):!h&&-S>w&&(i&&!u.current&&i(b),_.scrollTop=0,D=!0,u.current=!0),D&&EI(b)}},[n,r,i,a]),f=O.useCallback(function(b){l(b,b.deltaY)},[l]),g=O.useCallback(function(b){o.current=b.changedTouches[0].clientY},[]),p=O.useCallback(function(b){var S=o.current-b.changedTouches[0].clientY;l(b,S)},[l]),I=O.useCallback(function(b){if(b){var S=Q1?{passive:!1}:!1;b.addEventListener("wheel",f,S),b.addEventListener("touchstart",g,S),b.addEventListener("touchmove",p,S)}},[p,g,f]),x=O.useCallback(function(b){b&&(b.removeEventListener("wheel",f,!1),b.removeEventListener("touchstart",g,!1),b.removeEventListener("touchmove",p,!1))},[p,g,f]);return O.useEffect(function(){if(t){var b=c.current;return I(b),function(){x(b)}}},[t,I,x]),function(b){c.current=b}}var Ul=["boxSizing","height","overflow","paddingRight","position"],zl={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Hl(e){e.cancelable&&e.preventDefault()}function Wl(e){e.stopPropagation()}function Yl(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function Ql(){return"ontouchstart"in window||navigator.maxTouchPoints}var Kl=!!(typeof window<"u"&&window.document&&window.document.createElement),tr=0,vn={capture:!1,passive:!1};function DI(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=O.useRef({}),a=O.useRef(null),s=O.useCallback(function(o){if(Kl){var c=document.body,l=c&&c.style;if(r&&Ul.forEach(function(I){var x=l&&l[I];i.current[I]=x}),r&&tr<1){var f=parseInt(i.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,p=window.innerWidth-g+f||0;Object.keys(zl).forEach(function(I){var x=zl[I];l&&(l[I]=x)}),l&&(l.paddingRight="".concat(p,"px"))}c&&Ql()&&(c.addEventListener("touchmove",Hl,vn),o&&(o.addEventListener("touchstart",Yl,vn),o.addEventListener("touchmove",Wl,vn))),tr+=1}},[r]),u=O.useCallback(function(o){if(Kl){var c=document.body,l=c&&c.style;tr=Math.max(tr-1,0),r&&tr<1&&Ul.forEach(function(f){var g=i.current[f];l&&(l[f]=g)}),c&&Ql()&&(c.removeEventListener("touchmove",Hl,vn),o&&(o.removeEventListener("touchstart",Yl,vn),o.removeEventListener("touchmove",Wl,vn)))}},[r]);return O.useEffect(function(){if(t){var o=a.current;return s(o),function(){u(o)}}},[t,s,u]),function(o){a.current=o}}var $I=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},PI={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function MI(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,a=e.onBottomArrive,s=e.onBottomLeave,u=e.onTopArrive,o=e.onTopLeave,c=TI({isEnabled:i,onBottomArrive:a,onBottomLeave:s,onTopArrive:u,onTopLeave:o}),l=DI({isEnabled:n}),f=function(p){c(p),l(p)};return R(O.Fragment,null,n&&R("div",{onClick:$I,css:PI}),t(f))}var FI={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},NI=function(t){var n=t.name,r=t.onFocus;return R("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:FI,value:"",onChange:function(){}})},kI=NI;function fs(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function AI(){return fs(/^iPhone/i)}function Jl(){return fs(/^Mac/i)}function LI(){return fs(/^iPad/i)||Jl()&&navigator.maxTouchPoints>1}function jI(){return AI()||LI()}function qI(){return Jl()||jI()}var BI=function(t){return t.label},Xl=function(t){return t.label},Zl=function(t){return t.value},RI=function(t){return!!t.isDisabled},VI={clearIndicator:Ox,container:gx,control:Fx,dropdownIndicator:Cx,group:Lx,groupHeading:qx,indicatorsContainer:yx,indicatorSeparator:Tx,input:Gx,loadingIndicator:Px,loadingMessage:lx,menu:rx,menuList:ox,menuPortal:px,multiValue:Yx,multiValueLabel:Qx,multiValueRemove:Kx,noOptionsMessage:cx,option:nI,placeholder:aI,singleValue:uI,valueContainer:vx},GI={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},UI=4,ed=4,zI=38,HI=ed*2,WI={baseUnit:ed,controlHeight:zI,menuGutter:HI},ps={borderRadius:UI,colors:GI,spacing:WI},YI={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Tl(),captureMenuScroll:!Tl(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:CI(),formatGroupLabel:BI,getOptionLabel:Xl,getOptionValue:Zl,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:RI,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!W1(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function td(e,t,n,r){var i=sd(e,t,n),a=od(e,t,n),s=ad(e,t),u=wi(e,t);return{type:"option",data:t,isDisabled:i,isSelected:a,label:s,value:u,index:r}}function Ci(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(s,u){return td(e,s,t,u)}).filter(function(s){return id(e,s)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var a=td(e,n,t,r);return id(e,a)?a:void 0}).filter(K1)}function nd(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,pn(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function rd(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,pn(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function QI(e,t){return nd(Ci(e,t))}function id(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,a=t.isSelected,s=t.label,u=t.value;return(!cd(e)||!a)&&ud(e,{label:s,value:u,data:i},r)}function KI(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var a=t.indexOf(n);if(a>-1)return n;if(i<t.length)return t[i]}return null}function JI(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var ms=function(t,n){var r,i=(r=t.find(function(a){return a.data===n}))===null||r===void 0?void 0:r.id;return i||null},ad=function(t,n){return t.getOptionLabel(n)},wi=function(t,n){return t.getOptionValue(n)};function sd(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function od(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=wi(e,t);return n.some(function(i){return wi(e,i)===r})}function ud(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var cd=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},XI=1,gs=function(e){lS(n,e);var t=pS(n);function n(r){var i;if(uS(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(o){i.controlRef=o},i.focusedOptionRef=null,i.getFocusedOptionRef=function(o){i.focusedOptionRef=o},i.menuListRef=null,i.getMenuListRef=function(o){i.menuListRef=o},i.inputRef=null,i.getInputRef=function(o){i.inputRef=o},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(o,c){var l=i.props,f=l.onChange,g=l.name;c.name=g,i.ariaOnChange(o,c),f(o,c)},i.setValue=function(o,c,l){var f=i.props,g=f.closeMenuOnSelect,p=f.isMulti,I=f.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:I}),g&&(i.setState({inputIsHiddenAfterUpdate:!p}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(o,{action:c,option:l})},i.selectOption=function(o){var c=i.props,l=c.blurInputOnSelect,f=c.isMulti,g=c.name,p=i.state.selectValue,I=f&&i.isOptionSelected(o,p),x=i.isOptionDisabled(o,p);if(I){var b=i.getOptionValue(o);i.setValue(p.filter(function(S){return i.getOptionValue(S)!==b}),"deselect-option",o)}else if(!x)f?i.setValue([].concat(pn(p),[o]),"select-option",o):i.setValue(o,"select-option");else{i.ariaOnChange(o,{action:"select-option",option:o,name:g});return}l&&i.blurInput()},i.removeValue=function(o){var c=i.props.isMulti,l=i.state.selectValue,f=i.getOptionValue(o),g=l.filter(function(I){return i.getOptionValue(I)!==f}),p=er(c,g,g[0]||null);i.onChange(p,{action:"remove-value",removedValue:o}),i.focusInput()},i.clearValue=function(){var o=i.state.selectValue;i.onChange(er(i.props.isMulti,[],null),{action:"clear",removedValues:o})},i.popValue=function(){var o=i.props.isMulti,c=i.state.selectValue,l=c[c.length-1],f=c.slice(0,c.length-1),g=er(o,f,f[0]||null);l&&i.onChange(g,{action:"pop-value",removedValue:l})},i.getFocusedOptionId=function(o){return ms(i.state.focusableOptionsWithIds,o)},i.getFocusableOptionsWithIds=function(){return rd(Ci(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return R1.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(o){return ad(i.props,o)},i.getOptionValue=function(o){return wi(i.props,o)},i.getStyles=function(o,c){var l=i.props.unstyled,f=VI[o](c,l);f.boxSizing="border-box";var g=i.props.styles[o];return g?g(f,c):f},i.getClassNames=function(o,c){var l,f;return(l=(f=i.props.classNames)[o])===null||l===void 0?void 0:l.call(f,c)},i.getElementId=function(o){return"".concat(i.state.instancePrefix,"-").concat(o)},i.getComponents=function(){return fI(i.props)},i.buildCategorizedOptions=function(){return Ci(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return nd(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(o,c){i.setState({ariaSelection:q({value:o},c)})},i.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(o){i.blockOptionHover=!1},i.onControlMouseDown=function(o){if(!o.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},i.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!i.props.isDisabled){var c=i.props,l=c.isMulti,f=c.menuIsOpen;i.focusInput(),f?(i.setState({inputIsHiddenAfterUpdate:!l}),i.onMenuClose()):i.openMenu("first"),o.preventDefault()}},i.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(i.clearValue(),o.preventDefault(),i.openAfterFocus=!1,o.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(o){typeof i.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&Si(o.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(o)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(o){var c=o.touches,l=c&&c.item(0);l&&(i.initialTouchX=l.clientX,i.initialTouchY=l.clientY,i.userIsDragging=!1)},i.onTouchMove=function(o){var c=o.touches,l=c&&c.item(0);if(l){var f=Math.abs(l.clientX-i.initialTouchX),g=Math.abs(l.clientY-i.initialTouchY),p=5;i.userIsDragging=f>p||g>p}},i.onTouchEnd=function(o){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(o.target)&&i.menuListRef&&!i.menuListRef.contains(o.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(o){i.userIsDragging||i.onControlMouseDown(o)},i.onClearIndicatorTouchEnd=function(o){i.userIsDragging||i.onClearIndicatorMouseDown(o)},i.onDropdownIndicatorTouchEnd=function(o){i.userIsDragging||i.onDropdownIndicatorMouseDown(o)},i.handleInputChange=function(o){var c=i.props.inputValue,l=o.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(l,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(o){i.props.onFocus&&i.props.onFocus(o),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(o){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(o),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(o){if(!(i.blockOptionHover||i.state.focusedOption===o)){var c=i.getFocusableOptions(),l=c.indexOf(o);i.setState({focusedOption:o,focusedOptionId:l>-1?i.getFocusedOptionId(o):null})}},i.shouldHideSelectedOptions=function(){return cd(i.props)},i.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),i.focus()},i.onKeyDown=function(o){var c=i.props,l=c.isMulti,f=c.backspaceRemovesValue,g=c.escapeClearsValue,p=c.inputValue,I=c.isClearable,x=c.isDisabled,b=c.menuIsOpen,S=c.onKeyDown,v=c.tabSelectsValue,w=c.openMenuOnFocus,E=i.state,C=E.focusedOption,_=E.focusedValue,h=E.selectValue;if(!x&&!(typeof S=="function"&&(S(o),o.defaultPrevented))){switch(i.blockOptionHover=!0,o.key){case"ArrowLeft":if(!l||p)return;i.focusValue("previous");break;case"ArrowRight":if(!l||p)return;i.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(_)i.removeValue(_);else{if(!f)return;l?i.popValue():I&&i.clearValue()}break;case"Tab":if(i.isComposing||o.shiftKey||!b||!v||!C||w&&i.isOptionSelected(C,h))return;i.selectOption(C);break;case"Enter":if(o.keyCode===229)break;if(b){if(!C||i.isComposing)return;i.selectOption(C);break}return;case"Escape":b?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:p}),i.onMenuClose()):I&&g&&i.clearValue();break;case" ":if(p)return;if(!b){i.openMenu("first");break}if(!C)return;i.selectOption(C);break;case"ArrowUp":b?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":b?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!b)return;i.focusOption("pageup");break;case"PageDown":if(!b)return;i.focusOption("pagedown");break;case"Home":if(!b)return;i.focusOption("first");break;case"End":if(!b)return;i.focusOption("last");break;default:return}o.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++XI),i.state.selectValue=yi(r.value),r.menuIsOpen&&i.state.selectValue.length){var a=i.getFocusableOptionsWithIds(),s=i.buildFocusableOptions(),u=s.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=a,i.state.focusedOption=s[u],i.state.focusedOptionId=ms(a,s[u])}return i}return cS(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&El(this.menuListRef,this.focusedOptionRef),qI()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var a=this.props,s=a.isDisabled,u=a.menuIsOpen,o=this.state.isFocused;(o&&!s&&i.isDisabled||o&&u&&!i.menuIsOpen)&&this.focusInput(),o&&s&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!o&&!s&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(El(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,a){this.props.onInputChange(i,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var a=this,s=this.state,u=s.selectValue,o=s.isFocused,c=this.buildFocusableOptions(),l=i==="first"?0:c.length-1;if(!this.props.isMulti){var f=c.indexOf(u[0]);f>-1&&(l=f)}this.scrollToFocusedOptionOnUpdate=!(o&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[l],focusedOptionId:this.getFocusedOptionId(c[l])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(i){var a=this.state,s=a.selectValue,u=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var o=s.indexOf(u);u||(o=-1);var c=s.length-1,l=-1;if(s.length){switch(i){case"previous":o===0?l=0:o===-1?l=c:l=o-1;break;case"next":o>-1&&o<c&&(l=o+1);break}this.setState({inputIsHidden:l!==-1,focusedValue:s[l]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,u=this.getFocusableOptions();if(u.length){var o=0,c=u.indexOf(s);s||(c=-1),i==="up"?o=c>0?c-1:u.length-1:i==="down"?o=(c+1)%u.length:i==="pageup"?(o=c-a,o<0&&(o=0)):i==="pagedown"?(o=c+a,o>u.length-1&&(o=u.length-1)):i==="last"&&(o=u.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:u[o],focusedValue:null,focusedOptionId:this.getFocusedOptionId(u[o])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(ps):q(q({},ps),this.props.theme):ps}},{key:"getCommonProps",value:function(){var i=this.clearValue,a=this.cx,s=this.getStyles,u=this.getClassNames,o=this.getValue,c=this.selectOption,l=this.setValue,f=this.props,g=f.isMulti,p=f.isRtl,I=f.options,x=this.hasValue();return{clearValue:i,cx:a,getStyles:s,getClassNames:u,getValue:o,hasValue:x,isMulti:g,isRtl:p,options:I,selectOption:c,selectProps:f,setValue:l,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,a=i.isClearable,s=i.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(i,a){return sd(this.props,i,a)}},{key:"isOptionSelected",value:function(i,a){return od(this.props,i,a)}},{key:"filterOption",value:function(i,a){return ud(this.props,i,a)}},{key:"formatOptionLabel",value:function(i,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,u=this.state.selectValue;return this.props.formatOptionLabel(i,{context:a,inputValue:s,selectValue:u})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,a=i.isDisabled,s=i.isSearchable,u=i.inputId,o=i.inputValue,c=i.tabIndex,l=i.form,f=i.menuIsOpen,g=i.required,p=this.getComponents(),I=p.Input,x=this.state,b=x.inputIsHidden,S=x.ariaSelection,v=this.commonProps,w=u||this.getElementId("input"),E=q(q(q({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},f&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(S==null?void 0:S.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?J.createElement(I,z({},v,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:w,innerRef:this.getInputRef,isDisabled:a,isHidden:b,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:l,type:"text",value:o},E)):J.createElement(OI,z({id:w,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:bi,onFocus:this.onInputFocus,disabled:a,tabIndex:c,inputMode:"none",form:l,value:""},E))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,a=this.getComponents(),s=a.MultiValue,u=a.MultiValueContainer,o=a.MultiValueLabel,c=a.MultiValueRemove,l=a.SingleValue,f=a.Placeholder,g=this.commonProps,p=this.props,I=p.controlShouldRenderValue,x=p.isDisabled,b=p.isMulti,S=p.inputValue,v=p.placeholder,w=this.state,E=w.selectValue,C=w.focusedValue,_=w.isFocused;if(!this.hasValue()||!I)return S?null:J.createElement(f,z({},g,{key:"placeholder",isDisabled:x,isFocused:_,innerProps:{id:this.getElementId("placeholder")}}),v);if(b)return E.map(function(T,D){var $=T===C,L="".concat(i.getOptionLabel(T),"-").concat(i.getOptionValue(T));return J.createElement(s,z({},g,{components:{Container:u,Label:o,Remove:c},isFocused:$,isDisabled:x,key:L,index:D,removeProps:{onClick:function(){return i.removeValue(T)},onTouchEnd:function(){return i.removeValue(T)},onMouseDown:function(re){re.preventDefault()}},data:T}),i.formatOptionLabel(T,"value"))});if(S)return null;var h=E[0];return J.createElement(l,z({},g,{data:h,isDisabled:x}),this.formatOptionLabel(h,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),a=i.ClearIndicator,s=this.commonProps,u=this.props,o=u.isDisabled,c=u.isLoading,l=this.state.isFocused;if(!this.isClearable()||!a||o||!this.hasValue()||c)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return J.createElement(a,z({},s,{innerProps:f,isFocused:l}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),a=i.LoadingIndicator,s=this.commonProps,u=this.props,o=u.isDisabled,c=u.isLoading,l=this.state.isFocused;if(!a||!c)return null;var f={"aria-hidden":"true"};return J.createElement(a,z({},s,{innerProps:f,isDisabled:o,isFocused:l}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),a=i.DropdownIndicator,s=i.IndicatorSeparator;if(!a||!s)return null;var u=this.commonProps,o=this.props.isDisabled,c=this.state.isFocused;return J.createElement(s,z({},u,{isDisabled:o,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),a=i.DropdownIndicator;if(!a)return null;var s=this.commonProps,u=this.props.isDisabled,o=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return J.createElement(a,z({},s,{innerProps:c,isDisabled:u,isFocused:o}))}},{key:"renderMenu",value:function(){var i=this,a=this.getComponents(),s=a.Group,u=a.GroupHeading,o=a.Menu,c=a.MenuList,l=a.MenuPortal,f=a.LoadingMessage,g=a.NoOptionsMessage,p=a.Option,I=this.commonProps,x=this.state.focusedOption,b=this.props,S=b.captureMenuScroll,v=b.inputValue,w=b.isLoading,E=b.loadingMessage,C=b.minMenuHeight,_=b.maxMenuHeight,h=b.menuIsOpen,T=b.menuPlacement,D=b.menuPosition,$=b.menuPortalTarget,L=b.menuShouldBlockScroll,G=b.menuShouldScrollIntoView,re=b.noOptionsMessage,ne=b.onMenuScrollToTop,P=b.onMenuScrollToBottom;if(!h)return null;var k=function(W,H){var Y=W.type,te=W.data,B=W.isDisabled,se=W.isSelected,qe=W.label,j=W.value,me=x===te,ge=B?void 0:function(){return i.onOptionHover(te)},Be=B?void 0:function(){return i.selectOption(te)},Ut="".concat(i.getElementId("option"),"-").concat(H),Ct={id:Ut,onClick:Be,onMouseMove:ge,onMouseOver:ge,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:se};return J.createElement(p,z({},I,{innerProps:Ct,data:te,isDisabled:B,isSelected:se,key:Ut,label:qe,type:Y,value:j,isFocused:me,innerRef:me?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(W.data,"menu"))},F;if(this.hasOptions())F=this.getCategorizedOptions().map(function(A){if(A.type==="group"){var W=A.data,H=A.options,Y=A.index,te="".concat(i.getElementId("group"),"-").concat(Y),B="".concat(te,"-heading");return J.createElement(s,z({},I,{key:te,data:W,options:H,Heading:u,headingProps:{id:B,data:A.data},label:i.formatGroupLabel(A.data)}),A.options.map(function(se){return k(se,"".concat(Y,"-").concat(se.index))}))}else if(A.type==="option")return k(A,"".concat(A.index))});else if(w){var V=E({inputValue:v});if(V===null)return null;F=J.createElement(f,I,V)}else{var Q=re({inputValue:v});if(Q===null)return null;F=J.createElement(g,I,Q)}var ce={minMenuHeight:C,maxMenuHeight:_,menuPlacement:T,menuPosition:D,menuShouldScrollIntoView:G},M=J.createElement(ix,z({},I,ce),function(A){var W=A.ref,H=A.placerProps,Y=H.placement,te=H.maxHeight;return J.createElement(o,z({},I,ce,{innerRef:W,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:w,placement:Y}),J.createElement(MI,{captureEnabled:S,onTopArrive:ne,onBottomArrive:P,lockEnabled:L},function(B){return J.createElement(c,z({},I,{innerRef:function(qe){i.getMenuListRef(qe),B(qe)},innerProps:{role:"listbox","aria-multiselectable":I.isMulti,id:i.getElementId("listbox")},isLoading:w,maxHeight:te,focusedOption:x}),F)}))});return $||D==="fixed"?J.createElement(l,z({},I,{appendTo:$,controlElement:this.controlRef,menuPlacement:T,menuPosition:D}),M):M}},{key:"renderFormField",value:function(){var i=this,a=this.props,s=a.delimiter,u=a.isDisabled,o=a.isMulti,c=a.name,l=a.required,f=this.state.selectValue;if(l&&!this.hasValue()&&!u)return J.createElement(kI,{name:c,onFocus:this.onValueInputFocus});if(!(!c||u))if(o)if(s){var g=f.map(function(x){return i.getOptionValue(x)}).join(s);return J.createElement("input",{name:c,type:"hidden",value:g})}else{var p=f.length>0?f.map(function(x,b){return J.createElement("input",{key:"i-".concat(b),name:c,type:"hidden",value:i.getOptionValue(x)})}):J.createElement("input",{name:c,type:"hidden",value:""});return J.createElement("div",null,p)}else{var I=f[0]?this.getOptionValue(f[0]):"";return J.createElement("input",{name:c,type:"hidden",value:I})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,a=this.state,s=a.ariaSelection,u=a.focusedOption,o=a.focusedValue,c=a.isFocused,l=a.selectValue,f=this.getFocusableOptions();return J.createElement(SI,z({},i,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:u,focusedValue:o,isFocused:c,selectValue:l,focusableOptions:f,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),a=i.Control,s=i.IndicatorsContainer,u=i.SelectContainer,o=i.ValueContainer,c=this.props,l=c.className,f=c.id,g=c.isDisabled,p=c.menuIsOpen,I=this.state.isFocused,x=this.commonProps=this.getCommonProps();return J.createElement(u,z({},x,{className:l,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:I}),this.renderLiveRegion(),J.createElement(a,z({},x,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:I,menuIsOpen:p}),J.createElement(o,z({},x,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),J.createElement(s,z({},x,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,a){var s=a.prevProps,u=a.clearFocusValueOnUpdate,o=a.inputIsHiddenAfterUpdate,c=a.ariaSelection,l=a.isFocused,f=a.prevWasFocused,g=a.instancePrefix,p=i.options,I=i.value,x=i.menuIsOpen,b=i.inputValue,S=i.isMulti,v=yi(I),w={};if(s&&(I!==s.value||p!==s.options||x!==s.menuIsOpen||b!==s.inputValue)){var E=x?QI(i,v):[],C=x?rd(Ci(i,v),"".concat(g,"-option")):[],_=u?KI(a,v):null,h=JI(a,E),T=ms(C,h);w={selectValue:v,focusedOption:h,focusedOptionId:T,focusableOptionsWithIds:C,focusedValue:_,clearFocusValueOnUpdate:!1}}var D=o!=null&&i!==s?{inputIsHidden:o,inputIsHiddenAfterUpdate:void 0}:{},$=c,L=l&&f;return l&&!L&&($={value:er(S,v,v[0]||null),options:v,action:"initial-input-focus"},L=!f),(c==null?void 0:c.action)==="initial-input-focus"&&($=null),q(q(q({},w),D),{},{prevProps:i,ariaSelection:$,prevWasFocused:L})}}]),n}(O.Component);gs.defaultProps=YI;var ZI=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function ld(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,a=e.defaultValue,s=a===void 0?null:a,u=e.inputValue,o=e.menuIsOpen,c=e.onChange,l=e.onInputChange,f=e.onMenuClose,g=e.onMenuOpen,p=e.value,I=it(e,ZI),x=O.useState(u!==void 0?u:n),b=Ae(x,2),S=b[0],v=b[1],w=O.useState(o!==void 0?o:i),E=Ae(w,2),C=E[0],_=E[1],h=O.useState(p!==void 0?p:s),T=Ae(h,2),D=T[0],$=T[1],L=O.useCallback(function(V,Q){typeof c=="function"&&c(V,Q),$(V)},[c]),G=O.useCallback(function(V,Q){var ce;typeof l=="function"&&(ce=l(V,Q)),v(ce!==void 0?ce:V)},[l]),re=O.useCallback(function(){typeof g=="function"&&g(),_(!0)},[g]),ne=O.useCallback(function(){typeof f=="function"&&f(),_(!1)},[f]),P=u!==void 0?u:S,k=o!==void 0?o:C,F=p!==void 0?p:D;return q(q({},I),{},{inputValue:P,menuIsOpen:k,onChange:L,onInputChange:G,onMenuClose:ne,onMenuOpen:re,value:F})}var e_=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function dd(e){var t=e.defaultOptions,n=t===void 0?!1:t,r=e.cacheOptions,i=r===void 0?!1:r,a=e.loadOptions;e.options;var s=e.isLoading,u=s===void 0?!1:s,o=e.onInputChange,c=e.filterOption,l=c===void 0?null:c,f=it(e,e_),g=f.inputValue,p=O.useRef(void 0),I=O.useRef(!1),x=O.useState(Array.isArray(n)?n:void 0),b=Ae(x,2),S=b[0],v=b[1],w=O.useState(typeof g<"u"?g:""),E=Ae(w,2),C=E[0],_=E[1],h=O.useState(n===!0),T=Ae(h,2),D=T[0],$=T[1],L=O.useState(void 0),G=Ae(L,2),re=G[0],ne=G[1],P=O.useState([]),k=Ae(P,2),F=k[0],V=k[1],Q=O.useState(!1),ce=Ae(Q,2),M=ce[0],A=ce[1],W=O.useState({}),H=Ae(W,2),Y=H[0],te=H[1],B=O.useState(void 0),se=Ae(B,2),qe=se[0],j=se[1],me=O.useState(void 0),ge=Ae(me,2),Be=ge[0],Ut=ge[1];i!==Be&&(te({}),Ut(i)),n!==qe&&(v(Array.isArray(n)?n:void 0),j(n)),O.useEffect(function(){return I.current=!0,function(){I.current=!1}},[]);var Ct=O.useCallback(function(dr,xn){if(!a)return xn();var Xe=a(dr,xn);Xe&&typeof Xe.then=="function"&&Xe.then(xn,function(){return xn()})},[a]);O.useEffect(function(){n===!0&&Ct(C,function(dr){I.current&&(v(dr||[]),$(!!p.current))})},[]);var qi=O.useCallback(function(dr,xn){var Xe=V1(dr,xn,o);if(!Xe){p.current=void 0,_(""),ne(""),V([]),$(!1),A(!1);return}if(i&&Y[Xe])_(Xe),ne(Xe),V(Y[Xe]),$(!1),A(!1);else{var AO=p.current={};_(Xe),$(!0),A(!re),Ct(Xe,function(Fs){I&&AO===p.current&&(p.current=void 0,$(!1),ne(Xe),V(Fs||[]),A(!1),te(Fs?q(q({},Y),{},fn({},Xe,Fs)):Y))})}},[i,Ct,re,Y,o]),kO=M?[]:C&&re?F:S||[];return q(q({},f),{},{options:kO,isLoading:D||u,onInputChange:qi,filterOption:l})}var t_=O.forwardRef(function(e,t){var n=dd(e),r=ld(n);return J.createElement(gs,z({ref:t},r))}),n_=t_,r_=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],fd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=String(t).toLowerCase(),a=String(r.getOptionValue(n)).toLowerCase(),s=String(r.getOptionLabel(n)).toLowerCase();return a===i||s===i},hs={formatCreateLabel:function(t){return'Create "'.concat(t,'"')},isValidNewOption:function(t,n,r,i){return!(!t||n.some(function(a){return fd(t,a,i)})||r.some(function(a){return fd(t,a,i)}))},getNewOptionData:function(t,n){return{label:n,value:t,__isNew__:!0}}};function i_(e){var t=e.allowCreateWhileLoading,n=t===void 0?!1:t,r=e.createOptionPosition,i=r===void 0?"last":r,a=e.formatCreateLabel,s=a===void 0?hs.formatCreateLabel:a,u=e.isValidNewOption,o=u===void 0?hs.isValidNewOption:u,c=e.getNewOptionData,l=c===void 0?hs.getNewOptionData:c,f=e.onCreateOption,g=e.options,p=g===void 0?[]:g,I=e.onChange,x=it(e,r_),b=x.getOptionValue,S=b===void 0?Zl:b,v=x.getOptionLabel,w=v===void 0?Xl:v,E=x.inputValue,C=x.isLoading,_=x.isMulti,h=x.value,T=x.name,D=O.useMemo(function(){return o(E,yi(h),p,{getOptionValue:S,getOptionLabel:w})?l(E,s(E)):void 0},[s,l,w,S,E,o,p,h]),$=O.useMemo(function(){return(n||!C)&&D?i==="first"?[D].concat(pn(p)):[].concat(pn(p),[D]):p},[n,i,C,D,p]),L=O.useCallback(function(G,re){if(re.action!=="select-option")return I(G,re);var ne=Array.isArray(G)?G:[G];if(ne[ne.length-1]===D){if(f)f(E);else{var P=l(E,E),k={action:"create-option",name:T,option:P};I(er(_,[].concat(pn(yi(h)),[P]),P),k)}return}I(G,re)},[l,E,_,T,D,f,I,h]);return q(q({},x),{},{options:$,onChange:L})}var a_=O.forwardRef(function(e,t){var n=dd(e),r=ld(n),i=i_(r);return J.createElement(gs,z({ref:t},i))}),s_=a_,o_="[object Symbol]";function u_(e){return typeof e=="symbol"||ln(e)&&on(e)==o_}var c_=/\s/;function l_(e){for(var t=e.length;t--&&c_.test(e.charAt(t)););return t}var d_=/^\s+/;function f_(e){return e&&e.slice(0,l_(e)+1).replace(d_,"")}var pd=NaN,p_=/^[-+]0x[0-9a-f]+$/i,m_=/^0b[01]+$/i,g_=/^0o[0-7]+$/i,h_=parseInt;function md(e){if(typeof e=="number")return e;if(u_(e))return pd;if(xt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=xt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=f_(e);var n=m_.test(e);return n||g_.test(e)?h_(e.slice(2),n?2:8):p_.test(e)?pd:+e}var vs=function(){return rt.Date.now()},v_="Expected a function",b_=Math.max,y_=Math.min;function gd(e,t,n){var r,i,a,s,u,o,c=0,l=!1,f=!1,g=!0;if(typeof e!="function")throw new TypeError(v_);t=md(t)||0,xt(n)&&(l=!!n.leading,f="maxWait"in n,a=f?b_(md(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g);function p(_){var h=r,T=i;return r=i=void 0,c=_,s=e.apply(T,h),s}function I(_){return c=_,u=setTimeout(S,t),l?p(_):s}function x(_){var h=_-o,T=_-c,D=t-h;return f?y_(D,a-T):D}function b(_){var h=_-o,T=_-c;return o===void 0||h>=t||h<0||f&&T>=a}function S(){var _=vs();if(b(_))return v(_);u=setTimeout(S,x(_))}function v(_){return u=void 0,g&&r?p(_):(r=i=void 0,s)}function w(){u!==void 0&&clearTimeout(u),c=0,r=o=i=u=void 0}function E(){return u===void 0?s:v(vs())}function C(){var _=vs(),h=b(_);if(r=arguments,i=this,o=_,h){if(u===void 0)return I(o);if(f)return clearTimeout(u),u=setTimeout(S,t),p(o)}return u===void 0&&(u=setTimeout(S,t)),s}return C.cancel=w,C.flush=E,C}var S_="Expected a function";function x_(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(S_);return xt(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),gd(e,t,{leading:r,maxWait:t,trailing:i})}function Oi(e,t,n){const r=O.useRef(e);return r.current=e,O.useCallback(gd(function(){return r.current.apply(this,arguments)},t,n),[t,n==null?void 0:n.leading,n==null?void 0:n.trailing,n==null?void 0:n.maxWait])}const I_=e=>Array.isArray(e)?e:e?[e]:[],__=e=>{const{selectedOptions:t,isDisabled:n=!1,creatable:r=!1,components:i,placeholder:a,showDropdown:s=!0,noOptionsMessageText:u="None"}=e,c={...e,styles:{option:l=>({...l,color:"#000"}),container:(l,f)=>({...l,zIndex:f.isFocused?10:l.zIndex}),multiValueRemove:(l,f)=>({...l,color:f.isFocused?l.color:"#333333"})},defaultOptions:!0,isClearable:!0,value:t??null,className:We("react-select",e.className),classNamePrefix:"react-select",noOptionsMessage:()=>u,placeholder:n?"":a,components:{...i,IndicatorSeparator:()=>null,...(!s||n)&&{DropdownIndicator:()=>null},...n&&{MultiValueRemove:()=>null}}};return r?d.jsx(s_,{...c,isDisabled:n}):d.jsx(n_,{...c})},C_=e=>{const{values:t,isMulti:n,onSelect:r,creatable:i=!1,isValidNewOption:a,getNamedObject:s,loadOptions:u}=e,[o,c]=O.useState(!1),l=sp(),f=O.useMemo(()=>{if(n&&t)return t.map(v=>({object:v,value:v.id}));if(t!=null&&t.length)return{object:t[0],value:t[0].id}},[t,n]),g=v=>{const w=I_(v);r==null||r(w.map(E=>E.object))},p=i&&e.onCreate?async v=>{try{c(!0);const{value:w,item:E,message:C}=await e.onCreate(v),_={object:E,value:w};g(n?[...f??[],_]:_),c(!1),l.success(d.jsxs("span",{children:[C,": ",d.jsx("b",{children:v})]}))}catch(w){l.error(w)}}:void 0,I=i&&s?(v,w)=>({value:"",object:s("",w)}):void 0,x=i&&a?(v,w,E)=>a(v,E.map(C=>C.object)):void 0,S=Oi((v,w)=>{u(v).then(w)},100);return d.jsx(__,{...e,loadOptions:S,isLoading:e.isLoading||o,onChange:g,selectedOptions:f,onCreateOption:p,getNewOptionData:I,isValidNewOption:x})};function hd(e){return{value:e.id,object:e}}function w_(e){return O_(e)!==e}function O_(e){const t=O.useRef();return O.useEffect(()=>{t.current=e},[e]),t.current}const vd=e=>{const{error:t,message:n=d.jsx(Ce.FormattedMessage,{id:"errors.header"})}=e;return d.jsx("div",{className:"ErrorMessage-container",children:d.jsxs(U.Alert,{variant:"danger",className:"ErrorMessage",children:[d.jsxs(U.Alert.Heading,{className:"ErrorMessage-header",children:[d.jsx(Me,{icon:le.faWarning}),n]}),d.jsx("div",{className:"ErrorMessage-content code",children:t})]})})},bd="LoadingIndicator",E_=`${bd}-message`,yd=Se("LoadingIndicator",({message:e,inline:t=!1,small:n=!1,card:r=!1})=>{const a=Ce.useIntl().formatMessage({id:"loading.generic"});return d.jsxs("div",{className:We(bd,{inline:t,small:n,"card-based":r}),children:[d.jsx(U.Spinner,{animation:"border",role:"status",size:n?"sm":void 0,children:d.jsx("span",{className:"sr-only",children:a})}),e!==""&&d.jsx("h4",{className:E_,children:e??a})]})}),jt=Se("HoverPopover",({enterDelay:e=200,leaveDelay:t=200,content:n,children:r,className:i,placement:a="top",popperConfig:s,onOpen:u,onClose:o,target:c})=>{const[l,f]=O.useState(!1),[g,p]=O.useState(null),I=O.useRef(),x=O.useRef(),b=O.useRef(`hover-popover-${Math.random().toString(36).slice(2)}`),S=O.useCallback(C=>{p(C)},[]),v=O.useCallback(()=>(c==null?void 0:c.current)??g,[c,g]),w=O.useCallback(()=>{window.clearTimeout(x.current),I.current=window.setTimeout(()=>{f(!0),u==null||u()},e)},[e,u]),E=O.useCallback(()=>{window.clearTimeout(I.current),x.current=window.setTimeout(()=>{f(!1),o==null||o()},t)},[t,o]);return O.useEffect(()=>()=>{window.clearTimeout(I.current),window.clearTimeout(x.current)},[]),d.jsxs(d.Fragment,{children:[d.jsx("div",{className:i,onMouseEnter:w,onMouseLeave:E,ref:S,children:r}),v()&&d.jsx(U.Overlay,{show:l,placement:a,target:v,container:document.body,popperConfig:s,children:d.jsx(U.Popover,{onMouseEnter:w,onMouseLeave:E,id:b.current,className:"hover-popover-content",children:n})})]})});Se("WarningHoverPopover",({children:e,...t})=>d.jsx(jt,{...t,className:"warning-hover-popover",children:d.jsx(Me,{icon:le.faExclamationTriangle})}));function Sd(e){return e.title?e.title:e.files&&e.files.length>0?Ne.fileNameFromPath(e.files[0].path):e.folder?Ne.fileNameFromPath(e.folder.path):""}function xd(e){return e.title?e.title:e.files&&e.files.length>0?Ne.fileNameFromPath(e.files[0].path):""}function T_(e){return e.files&&e.files.length>0?e.files[0].path:""}function nr(e,t){t&&t.length>0&&e.push(...t)}const D_=(e,t,n)=>{if(!e.id)return"#";const r=new ae(X.Scenes,void 0),i=new nn;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),nr(r.criteria,n),`/scenes?${r.makeQueryParameters()}`},$_=(e,t,n)=>{if(!e.id)return"#";const r=new ae(X.Images,void 0),i=new nn;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),nr(r.criteria,n),`/images?${r.makeQueryParameters()}`},P_=(e,t,n)=>{if(!e.id)return"#";const r=new ae(X.Galleries,void 0),i=new nn;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),nr(r.criteria,n),`/galleries?${r.makeQueryParameters()}`},M_=(e,t,n)=>{if(!e.id)return"#";const r=new ae(X.Groups,void 0),i=new nn;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),nr(r.criteria,n),`/groups?${r.makeQueryParameters()}`},F_=e=>{if(!e.id)return"#";const t=new ae(X.SceneMarkers,void 0),n=new nn;return n.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t.criteria.push(n),`/scenes/markers?${t.makeQueryParameters()}`},N_=e=>{if(!e.id)return"#";const t=new ae(X.Performers,void 0),n=new qc;return n.value=`${e.country}`,t.criteria.push(n),`/performers?${t.makeQueryParameters()}`},k_=e=>{if(!e.id)return"#";const t=new ae(X.Scenes,void 0),n=new an;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/scenes?${t.makeQueryParameters()}`},A_=e=>{if(!e.id)return"#";const t=new ae(X.Images,void 0),n=new an;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/images?${t.makeQueryParameters()}`},L_=e=>{if(!e.id)return"#";const t=new ae(X.Galleries,void 0),n=new an;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/galleries?${t.makeQueryParameters()}`},j_=e=>{if(!e.id)return"#";const t=new ae(X.Groups,void 0),n=new an;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/groups?${t.makeQueryParameters()}`},q_=e=>{if(!e.id)return"#";const t=new ae(X.Performers,void 0),n=new an;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/performers?${t.makeQueryParameters()}`},B_=e=>{if(!e.id)return"#";const t=new ae(X.Studios,void 0),n=new Ou;return n.value=[{id:e.id,label:e.name||`Studio ${e.id}`}],t.criteria.push(n),`/studios?${t.makeQueryParameters()}`},R_=e=>{if(!e.id)return"#";const t=new ae(X.Scenes,void 0),n=new Wn(Ur);return n.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/scenes?${t.makeQueryParameters()}`},V_=e=>`/tags/${e}`,G_=e=>{if(!e.id)return"#";const t=new ae(X.Tags,void 0),n=new Lr(Du);return n.value={items:[{id:e.id,label:e.name||`Tag ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/tags?${t.makeQueryParameters()}`},U_=e=>{if(!e.id)return"#";const t=new ae(X.Tags,void 0),n=new Lr(Tu);return n.value={items:[{id:e.id,label:e.name||`Tag ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/tags?${t.makeQueryParameters()}`};function qt(e,t){const n=new ae(e,void 0),r=new Lr(St);return r.value={items:[{id:t.id,label:t.name||`Tag ${t.id}`}],excluded:[],depth:0},n.criteria.push(r),n.makeQueryParameters()}const z_=e=>`/scenes?${qt(X.Scenes,e)}`,H_=e=>`/performers?${qt(X.Performers,e)}`,W_=e=>`/studios?${qt(X.Studios,e)}`,Y_=e=>`/scenes/markers?${qt(X.SceneMarkers,e)}`,Q_=e=>`/galleries?${qt(X.Galleries,e)}`,K_=e=>`/images?${qt(X.Images,e)}`,J_=e=>`/groups?${qt(X.Groups,e)}`,X_=e=>!e.id||!e.scene?"#":`/scenes/${e.scene.id}?t=${e.seconds}`,Z_=e=>{if(!e)return"#";const t=new ae(X.Scenes,void 0),n=new Aa;return n.value={value:e},t.criteria.push(n),`/scenes?${t.makeQueryParameters()}`},eC=e=>{if(!e)return"#";const t=new ae(X.Images,void 0),n=new Aa;return n.value={value:e},t.criteria.push(n),`/images?${t.makeQueryParameters()}`},tC=(e,t)=>{if(!e.id)return"#";const n=new ae(X.Images,void 0),r=new _c;return r.value=[{id:e.id,label:Sd(e)}],n.criteria.push(r),nr(n.criteria,t),`/images?${n.makeQueryParameters()}`};function Ei(e,t){const n=new nt(e);return n.modifier=y.Equals,n.value=t,n}const ve={makePerformerScenesUrl:D_,makePerformerImagesUrl:$_,makePerformerGalleriesUrl:P_,makePerformerGroupsUrl:M_,makePerformerSceneMarkersUrl:F_,makePerformersCountryUrl:N_,makeStudioScenesUrl:k_,makeStudioImagesUrl:A_,makeStudioGalleriesUrl:L_,makeStudioGroupsUrl:j_,makeStudioPerformersUrl:q_,makeTagUrl:V_,makeGroupUrl:e=>`/groups/${e}`,makeParentTagsUrl:G_,makeChildTagsUrl:U_,makeTagSceneMarkersUrl:Y_,makeTagScenesUrl:z_,makeTagPerformersUrl:H_,makeTagStudiosUrl:W_,makeTagGalleriesUrl:Q_,makeTagImagesUrl:K_,makeTagGroupsUrl:J_,makeScenesPHashMatchUrl:Z_,makeSceneMarkerUrl:X_,makeImagesPHashMatchUrl:eC,makeGroupScenesUrl:R_,makeChildStudiosUrl:B_,makeGalleryImagesUrl:tC,makeDirectorScenesUrl:e=>{if(e.length===0)return"#";const t=new ae(X.Scenes,void 0);return t.criteria.push(Ei(ie("director"),e)),`/scenes?${t.makeQueryParameters()}`},makePhotographerGalleriesUrl:e=>{if(e.length===0)return"#";const t=new ae(X.Galleries,void 0);return t.criteria.push(Ei(ie("photographer"),e)),`/galleries?${t.makeQueryParameters()}`},makePhotographerImagesUrl:e=>{if(e.length===0)return"#";const t=new ae(X.Images,void 0);return t.criteria.push(Ei(ie("photographer"),e)),`/images?${t.makeQueryParameters()}`},makeDirectorGroupsUrl:e=>{if(e.length===0)return"#";const t=new ae(X.Groups,void 0);return t.criteria.push(Ei(ie("director"),e)),`/groups?${t.makeQueryParameters()}`},makeContainingGroupsUrl:e=>{if(!e.id)return"#";const t=new ae(X.Groups,void 0),n=new Wn($c);return n.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/groups?${t.makeQueryParameters()}`},makeSubGroupsUrl:e=>{if(!e.id)return"#";const t=new ae(X.Groups,void 0),n=new Wn(Dc);return n.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/groups?${t.makeQueryParameters()}`},makeSceneMarkersSceneUrl:e=>{if(!e.id)return"#";const t=new ae(X.SceneMarkers,void 0),n=new _u;return n.value=[{id:e.id,label:xd(e)}],t.criteria.push(n),`/scenes/markers?${t.makeQueryParameters()}`}},bs="TruncatedText",nC=`${bs}-tooltip`,rr=Se("TruncatedText",({text:e,className:t,lineCount:n=1,placement:r="bottom",delay:i=1e3})=>{const[a,s]=O.useState(!1),u=O.useRef(null),o=Oi(()=>s(!0),i);if(!e)return null;const c=g=>{(g.offsetWidth<g.scrollWidth||g.offsetHeight+10<g.scrollHeight)&&o()},l=()=>{o.cancel(),s(!1)},f=d.jsx(U.Overlay,{target:u.current,show:a,placement:r,children:d.jsx(U.Tooltip,{id:bs,className:nC,children:e})});return d.jsxs("div",{className:We(bs,t),style:{WebkitLineClamp:n},ref:u,onMouseEnter:g=>c(g.currentTarget),onFocus:g=>c(g.currentTarget),onMouseLeave:l,onBlur:l,children:[e,f]})}),rC=()=>window.matchMedia("only screen and (max-width: 576px)").matches,iC=()=>window.matchMedia("(pointer: coarse)").matches;function aC(e){return window.matchMedia(e).matches}const Id={isMobile:rC,isTouch:iC,matchesMediaQuery:aC};var Bt=[],sC=function(){return Bt.some(function(e){return e.activeTargets.length>0})},oC=function(){return Bt.some(function(e){return e.skippedTargets.length>0})},_d="ResizeObserver loop completed with undelivered notifications.",uC=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:_d}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=_d),window.dispatchEvent(e)},ir;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(ir||(ir={}));var Rt=function(e){return Object.freeze(e)},cC=function(){function e(t,n){this.inlineSize=t,this.blockSize=n,Rt(this)}return e}(),Cd=function(){function e(t,n,r,i){return this.x=t,this.y=n,this.width=r,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Rt(this)}return e.prototype.toJSON=function(){var t=this,n=t.x,r=t.y,i=t.top,a=t.right,s=t.bottom,u=t.left,o=t.width,c=t.height;return{x:n,y:r,top:i,right:a,bottom:s,left:u,width:o,height:c}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),ys=function(e){return e instanceof SVGElement&&"getBBox"in e},wd=function(e){if(ys(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e,a=i.offsetWidth,s=i.offsetHeight;return!(a||s||e.getClientRects().length)},Od=function(e){var t;if(e instanceof Element)return!0;var n=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},lC=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},ar=typeof window<"u"?window:{},Ti=new WeakMap,Ed=/auto|scroll/,dC=/^tb|vertical/,fC=/msie|trident/i.test(ar.navigator&&ar.navigator.userAgent),ut=function(e){return parseFloat(e||"0")},bn=function(e,t,n){return e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=!1),new cC((n?t:e)||0,(n?e:t)||0)},Td=Rt({devicePixelContentBoxSize:bn(),borderBoxSize:bn(),contentBoxSize:bn(),contentRect:new Cd(0,0,0,0)}),Dd=function(e,t){if(t===void 0&&(t=!1),Ti.has(e)&&!t)return Ti.get(e);if(wd(e))return Ti.set(e,Td),Td;var n=getComputedStyle(e),r=ys(e)&&e.ownerSVGElement&&e.getBBox(),i=!fC&&n.boxSizing==="border-box",a=dC.test(n.writingMode||""),s=!r&&Ed.test(n.overflowY||""),u=!r&&Ed.test(n.overflowX||""),o=r?0:ut(n.paddingTop),c=r?0:ut(n.paddingRight),l=r?0:ut(n.paddingBottom),f=r?0:ut(n.paddingLeft),g=r?0:ut(n.borderTopWidth),p=r?0:ut(n.borderRightWidth),I=r?0:ut(n.borderBottomWidth),x=r?0:ut(n.borderLeftWidth),b=f+c,S=o+l,v=x+p,w=g+I,E=u?e.offsetHeight-w-e.clientHeight:0,C=s?e.offsetWidth-v-e.clientWidth:0,_=i?b+v:0,h=i?S+w:0,T=r?r.width:ut(n.width)-_-C,D=r?r.height:ut(n.height)-h-E,$=T+b+C+v,L=D+S+E+w,G=Rt({devicePixelContentBoxSize:bn(Math.round(T*devicePixelRatio),Math.round(D*devicePixelRatio),a),borderBoxSize:bn($,L,a),contentBoxSize:bn(T,D,a),contentRect:new Cd(f,o,T,D)});return Ti.set(e,G),G},$d=function(e,t,n){var r=Dd(e,n),i=r.borderBoxSize,a=r.contentBoxSize,s=r.devicePixelContentBoxSize;switch(t){case ir.DEVICE_PIXEL_CONTENT_BOX:return s;case ir.BORDER_BOX:return i;default:return a}},pC=function(){function e(t){var n=Dd(t);this.target=t,this.contentRect=n.contentRect,this.borderBoxSize=Rt([n.borderBoxSize]),this.contentBoxSize=Rt([n.contentBoxSize]),this.devicePixelContentBoxSize=Rt([n.devicePixelContentBoxSize])}return e}(),Pd=function(e){if(wd(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},mC=function(){var e=1/0,t=[];Bt.forEach(function(s){if(s.activeTargets.length!==0){var u=[];s.activeTargets.forEach(function(c){var l=new pC(c.target),f=Pd(c.target);u.push(l),c.lastReportedSize=$d(c.target,c.observedBox),f<e&&(e=f)}),t.push(function(){s.callback.call(s.observer,u,s.observer)}),s.activeTargets.splice(0,s.activeTargets.length)}});for(var n=0,r=t;n<r.length;n++){var i=r[n];i()}return e},Md=function(e){Bt.forEach(function(n){n.activeTargets.splice(0,n.activeTargets.length),n.skippedTargets.splice(0,n.skippedTargets.length),n.observationTargets.forEach(function(i){i.isActive()&&(Pd(i.target)>e?n.activeTargets.push(i):n.skippedTargets.push(i))})})},gC=function(){var e=0;for(Md(e);sC();)e=mC(),Md(e);return oC()&&uC(),e>0},Ss,Fd=[],hC=function(){return Fd.splice(0).forEach(function(e){return e()})},vC=function(e){if(!Ss){var t=0,n=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return hC()}).observe(n,r),Ss=function(){n.textContent="".concat(t?t--:t++)}}Fd.push(e),Ss()},bC=function(e){vC(function(){requestAnimationFrame(e)})},Di=0,yC=function(){return!!Di},SC=250,xC={attributes:!0,characterData:!0,childList:!0,subtree:!0},Nd=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],kd=function(e){return e===void 0&&(e=0),Date.now()+e},xs=!1,IC=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var n=this;if(t===void 0&&(t=SC),!xs){xs=!0;var r=kd(t);bC(function(){var i=!1;try{i=gC()}finally{if(xs=!1,t=r-kd(),!yC())return;i?n.run(1e3):t>0?n.run(t):n.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,n=function(){return t.observer&&t.observer.observe(document.body,xC)};document.body?n():ar.addEventListener("DOMContentLoaded",n)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Nd.forEach(function(n){return ar.addEventListener(n,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),Nd.forEach(function(n){return ar.removeEventListener(n,t.listener,!0)}),this.stopped=!0)},e}(),Is=new IC,Ad=function(e){!Di&&e>0&&Is.start(),Di+=e,!Di&&Is.stop()},_C=function(e){return!ys(e)&&!lC(e)&&getComputedStyle(e).display==="inline"},CC=function(){function e(t,n){this.target=t,this.observedBox=n||ir.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=$d(this.target,this.observedBox,!0);return _C(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),wC=function(){function e(t,n){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=n}return e}(),$i=new WeakMap,Ld=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},Pi=function(){function e(){}return e.connect=function(t,n){var r=new wC(t,n);$i.set(t,r)},e.observe=function(t,n,r){var i=$i.get(t),a=i.observationTargets.length===0;Ld(i.observationTargets,n)<0&&(a&&Bt.push(i),i.observationTargets.push(new CC(n,r&&r.box)),Ad(1),Is.schedule())},e.unobserve=function(t,n){var r=$i.get(t),i=Ld(r.observationTargets,n),a=r.observationTargets.length===1;i>=0&&(a&&Bt.splice(Bt.indexOf(r),1),r.observationTargets.splice(i,1),Ad(-1))},e.disconnect=function(t){var n=this,r=$i.get(t);r.observationTargets.slice().forEach(function(i){return n.unobserve(t,i.target)}),r.activeTargets.splice(0,r.activeTargets.length)},e}(),OC=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Pi.connect(this,t)}return e.prototype.observe=function(t,n){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Od(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Pi.observe(this,t,n)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Od(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Pi.unobserve(this,t)},e.prototype.disconnect=function(){Pi.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();const EC=O[typeof document<"u"&&document.createElement!==void 0?"useLayoutEffect":"useEffect"],TC=e=>{const t=J.useRef(e);return J.useEffect(()=>{t.current=e}),t},DC=typeof window<"u"&&"ResizeObserver"in window?window.ResizeObserver:OC;function $C(){}function PC(e,t){const n=FC(),r=TC(t);return EC(()=>{let i=!1;const a=e&&"current"in e?e.current:e;if(!a)return $C;function s(u,o){i||r.current(u,o)}return n.subscribe(a,s),()=>{i=!0,n.unsubscribe(a,s)}},[e,n,r]),n.observer}function MC(){let e=!1,t=[];const n=new Map,r=new DC((i,a)=>{t=t.concat(i);function s(){const u=new Set;for(let o=0;o<t.length;o++){if(u.has(t[o].target))continue;u.add(t[o].target);const c=n.get(t[o].target);c==null||c.forEach(l=>l(t[o],a))}t=[],e=!1}e||window.requestAnimationFrame(s),e=!0});return{observer:r,subscribe(i,a){var s;r.observe(i);const u=(s=n.get(i))!==null&&s!==void 0?s:[];u.push(a),n.set(i,u)},unsubscribe(i,a){var s;const u=(s=n.get(i))!==null&&s!==void 0?s:[];if(u.length===1){r.unobserve(i),n.delete(i);return}const o=u.indexOf(a);o!==-1&&u.splice(o,1),n.set(i,u)}}}let _s;const FC=()=>_s||(_s=MC());var NC={exports:{}};(function(e){(function(t,n,r){if(!t)return;for(var i={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},a={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},s={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},u={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},o,c=1;c<20;++c)i[111+c]="f"+c;for(c=0;c<=9;++c)i[c+96]=c.toString();function l(h,T,D){if(h.addEventListener){h.addEventListener(T,D,!1);return}h.attachEvent("on"+T,D)}function f(h){if(h.type=="keypress"){var T=String.fromCharCode(h.which);return h.shiftKey||(T=T.toLowerCase()),T}return i[h.which]?i[h.which]:a[h.which]?a[h.which]:String.fromCharCode(h.which).toLowerCase()}function g(h,T){return h.sort().join(",")===T.sort().join(",")}function p(h){var T=[];return h.shiftKey&&T.push("shift"),h.altKey&&T.push("alt"),h.ctrlKey&&T.push("ctrl"),h.metaKey&&T.push("meta"),T}function I(h){if(h.preventDefault){h.preventDefault();return}h.returnValue=!1}function x(h){if(h.stopPropagation){h.stopPropagation();return}h.cancelBubble=!0}function b(h){return h=="shift"||h=="ctrl"||h=="alt"||h=="meta"}function S(){if(!o){o={};for(var h in i)h>95&&h<112||i.hasOwnProperty(h)&&(o[i[h]]=h)}return o}function v(h,T,D){return D||(D=S()[h]?"keydown":"keypress"),D=="keypress"&&T.length&&(D="keydown"),D}function w(h){return h==="+"?["+"]:(h=h.replace(/\+{2}/g,"+plus"),h.split("+"))}function E(h,T){var D,$,L,G=[];for(D=w(h),L=0;L<D.length;++L)$=D[L],u[$]&&($=u[$]),T&&T!="keypress"&&s[$]&&($=s[$],G.push("shift")),b($)&&G.push($);return T=v($,G,T),{key:$,modifiers:G,action:T}}function C(h,T){return h===null||h===n?!1:h===T?!0:C(h.parentNode,T)}function _(h){var T=this;if(h=h||n,!(T instanceof _))return new _(h);T.target=h,T._callbacks={},T._directMap={};var D={},$,L=!1,G=!1,re=!1;function ne(M){M=M||{};var A=!1,W;for(W in D){if(M[W]){A=!0;continue}D[W]=0}A||(re=!1)}function P(M,A,W,H,Y,te){var B,se,qe=[],j=W.type;if(!T._callbacks[M])return[];for(j=="keyup"&&b(M)&&(A=[M]),B=0;B<T._callbacks[M].length;++B)if(se=T._callbacks[M][B],!(!H&&se.seq&&D[se.seq]!=se.level)&&j==se.action&&(j=="keypress"&&!W.metaKey&&!W.ctrlKey||g(A,se.modifiers))){var me=!H&&se.combo==Y,ge=H&&se.seq==H&&se.level==te;(me||ge)&&T._callbacks[M].splice(B,1),qe.push(se)}return qe}function k(M,A,W,H){T.stopCallback(A,A.target||A.srcElement,W,H)||M(A,W)===!1&&(I(A),x(A))}T._handleKey=function(M,A,W){var H=P(M,A,W),Y,te={},B=0,se=!1;for(Y=0;Y<H.length;++Y)H[Y].seq&&(B=Math.max(B,H[Y].level));for(Y=0;Y<H.length;++Y){if(H[Y].seq){if(H[Y].level!=B)continue;se=!0,te[H[Y].seq]=1,k(H[Y].callback,W,H[Y].combo,H[Y].seq);continue}se||k(H[Y].callback,W,H[Y].combo)}var qe=W.type=="keypress"&&G;W.type==re&&!b(M)&&!qe&&ne(te),G=se&&W.type=="keydown"};function F(M){typeof M.which!="number"&&(M.which=M.keyCode);var A=f(M);if(A){if(M.type=="keyup"&&L===A){L=!1;return}T.handleKey(A,p(M),M)}}function V(){clearTimeout($),$=setTimeout(ne,1e3)}function Q(M,A,W,H){D[M]=0;function Y(j){return function(){re=j,++D[M],V()}}function te(j){k(W,j,M),H!=="keyup"&&(L=f(j)),setTimeout(ne,10)}for(var B=0;B<A.length;++B){var se=B+1===A.length,qe=se?te:Y(H||E(A[B+1]).action);ce(A[B],qe,H,M,B)}}function ce(M,A,W,H,Y){T._directMap[M+":"+W]=A,M=M.replace(/\s+/g," ");var te=M.split(" "),B;if(te.length>1){Q(M,te,A,W);return}B=E(M,W),T._callbacks[B.key]=T._callbacks[B.key]||[],P(B.key,B.modifiers,{type:B.action},H,M,Y),T._callbacks[B.key][H?"unshift":"push"]({callback:A,modifiers:B.modifiers,action:B.action,seq:H,level:Y,combo:M})}T._bindMultiple=function(M,A,W){for(var H=0;H<M.length;++H)ce(M[H],A,W)},l(h,"keypress",F),l(h,"keydown",F),l(h,"keyup",F)}_.prototype.bind=function(h,T,D){var $=this;return h=h instanceof Array?h:[h],$._bindMultiple.call($,h,T,D),$},_.prototype.unbind=function(h,T){var D=this;return D.bind.call(D,h,function(){},T)},_.prototype.trigger=function(h,T){var D=this;return D._directMap[h+":"+T]&&D._directMap[h+":"+T]({},h),D},_.prototype.reset=function(){var h=this;return h._callbacks={},h._directMap={},h},_.prototype.stopCallback=function(h,T){var D=this;if((" "+T.className+" ").indexOf(" mousetrap ")>-1||C(T,D.target))return!1;if("composedPath"in h&&typeof h.composedPath=="function"){var $=h.composedPath()[0];$!==h.target&&(T=$)}return T.tagName=="INPUT"||T.tagName=="SELECT"||T.tagName=="TEXTAREA"||T.isContentEditable},_.prototype.handleKey=function(){var h=this;return h._handleKey.apply(h,arguments)},_.addKeycodes=function(h){for(var T in h)h.hasOwnProperty(T)&&(i[T]=h[T]);o=null},_.init=function(){var h=_(n);for(var T in h)T.charAt(0)!=="_"&&(_[T]=function(D){return function(){return h[D].apply(h,arguments)}}(T))},_.init(),t.Mousetrap=_,e.exports&&(e.exports=_)})(typeof window<"u"?window:null,typeof window<"u"?document:null)})(NC),O.createContext(null);const kC=O.createContext(null),AC={selectable:!1,selectedIds:new Set,getSelected:()=>[],onSelectChange:()=>{},onSelectAll:()=>{},onSelectNone:()=>{},onInvertSelection:()=>{},items:[],hasSelection:!1,selectedItems:[]};function LC(){const e=O.useContext(kC);return e===null?AC:e}O.createContext(null);var jd=(e=>(e[e.BEFORE=0]="BEFORE",e[e.AFTER=1]="AFTER",e))(jd||{});function jC(e){const{selectedIds:t}=LC(),[n,r]=O.useState(!1),[i,a]=O.useState(!1),[s,u]=O.useState(),o=e.onSelectedChanged&&e.selecting,c=!!e.objectId&&e.onMove&&n,l=o||c;function f(v){if(!l){v.preventDefault();return}if(!n&&e.selecting)v.dataTransfer.setData("text/plain",""),v.dataTransfer.effectAllowed="copy",v.stopPropagation();else if(n&&e.objectId){if(t.size>1&&t.has(e.objectId)){const w=Array.from(t.values()).join(",");v.dataTransfer.setData("text/plain",w)}else a(!0),v.dataTransfer.setData("text/plain",e.objectId);v.dataTransfer.effectAllowed="move",v.stopPropagation()}}function g(v){const w=v.nativeEvent.offsetX<v.currentTarget.clientWidth/2;w&&s!==0?u(0):!w&&s!==1&&u(1)}function p(v){const w=v,E=!1;if(w.dataTransfer.effectAllowed==="copy"){if(!e.onSelectedChanged)return;e.selecting&&!e.selected&&e.onSelectedChanged(!0,E),w.dataTransfer.dropEffect="copy",w.preventDefault()}else w.dataTransfer.effectAllowed==="move"&&!i?(g(v),w.dataTransfer.dropEffect="move",w.preventDefault()):w.dataTransfer.dropEffect="none"}function I(v){v.currentTarget.contains(v.relatedTarget)||u(void 0)}function x(v){v.dataTransfer.effectAllowed!=="move"||i||(g(v),v.preventDefault())}function b(){u(void 0),a(!1)}function S(v){const w=v;if(w.dataTransfer.effectAllowed==="copy"||!e.onMove||!e.objectId)return;const E=w.dataTransfer.getData("text/plain").split(","),C=e.objectId,_=s===1;e.onMove(E,C,_),b()}return{inHandle:n,setInHandle:r,moveTarget:s,dragProps:{draggable:l||void 0,onDragStart:f,onDragEnter:p,onDragLeave:I,onDragOver:x,onDragEnd:b,onDrop:S}}}const qC=e=>d.jsx("a",{target:"_blank",rel:"noopener noreferrer",...e}),BC=(e,t)=>{const i=e-30,a=Math.ceil(i/t);return i/a-10},RC=(e=20)=>{const t=O.useRef(null),[n,r]=O.useState({width:0,height:0}),i=Oi(a=>{const{inlineSize:s,blockSize:u}=a.contentBoxSize[0];Math.abs(n.width-s)>e&&r({width:s,height:u})},50);return PC(t,i),[t,n]};function VC(e,t,n){return O.useMemo(()=>{if(Id.isMobile()||t>=n.length)return;if(!e)return n[t];const i=n[t];return BC(e,i)},[e,t,n])}const GC=({selected:e=!1,onSelectedChanged:t})=>{let n=!1;return d.jsx(U.Form.Control,{type:"checkbox",className:"card-check mousetrap",checked:e,onChange:()=>t(!e,n),onClick:r=>{n=r.shiftKey,r.stopPropagation()}})},UC=({setInHandle:e})=>{function t(){e(!0)}function n(){e(!1)}return d.jsx("span",{onMouseEnter:t,onMouseLeave:n,children:d.jsx(Me,{className:"card-drag-handle",icon:le.faGripLines})})},zC=({children:e})=>d.jsx("div",{className:"card-controls",children:e}),HC=({dragSide:e})=>e===void 0?null:d.jsx("div",{className:`move-target move-target-${e===jd.BEFORE?"before":"after"}`});function qd(e){const{url:t,linkClassName:n,onClick:r,children:i}=e;return/^https?:\/\//i.test(t)?d.jsx(qC,{href:t,className:n,onClick:r,children:i}):d.jsx(Ze.Link,{to:t,className:n,onClick:r,children:i})}const Bd=Se("GridCard",e=>{const{setInHandle:t,moveTarget:n,dragProps:r}=jC({selecting:e.selecting||!1,selected:e.selected||!1,onSelectedChanged:e.onSelectedChanged,objectId:e.objectId,onMove:e.onMove});function i(u){const{shiftKey:o}=u;e.onSelectedChanged&&e.selecting&&(e.onSelectedChanged(!e.selected,o),u.preventDefault(),u.stopPropagation())}function a(){if(e.interactiveHeatmap)return d.jsx("img",{loading:"lazy",src:e.interactiveHeatmap,alt:"interactive heatmap",className:"interactive-heatmap"})}function s(){if(e.resumeTime&&e.duration&&e.duration>e.resumeTime){const u=100/e.duration*e.resumeTime,o=u+"%";return d.jsx("div",{title:Math.round(u)+"%",className:"progress-bar",children:d.jsx("div",{style:{width:o},className:"progress-indicator"})})}}return d.jsxs(U.Card,{className:We(e.className,"grid-card"),onClick:i,...r,style:e.width&&!Id.isMobile()?{width:`${e.width}px`}:{},children:[n!==void 0&&d.jsx(HC,{dragSide:n}),d.jsxs(zC,{children:[e.onSelectedChanged&&d.jsx(GC,{selected:e.selected,onSelectedChanged:e.onSelectedChanged}),!!e.objectId&&e.onMove&&d.jsx(UC,{setInHandle:t})]}),d.jsxs("div",{className:We(e.thumbnailSectionClassName,"thumbnail-section"),children:[d.jsx(qd,{url:e.url,linkClassName:e.linkClassName,onClick:i,children:e.image}),e.overlays,s()]}),a(),d.jsxs("div",{className:"card-section",children:[d.jsx(qd,{url:e.url,onClick:i,children:d.jsxs("h5",{className:"card-section-title flex-aligned",children:[e.pretitleIcon,d.jsx(rr,{text:e.title,lineCount:2})]})}),e.details]}),e.popovers]})}),WC=({count:e})=>{const{configuration:t}=bt();if(!((t==null?void 0:t.ui.abbreviateCounters)??!1))return d.jsx("span",{children:e});const r=Ne.abbreviateCounter(e);return d.jsxs("span",{children:[d.jsx(Ce.FormattedNumber,{value:r.size,maximumFractionDigits:r.digits}),r.unit]})},Vt=({className:e,url:t,type:n,count:r,showZero:i=!0})=>{const a=Ce.useIntl();if(!i&&r===0)return null;function s(){switch(n){case"scene":return le.faPlayCircle;case"image":return le.faImage;case"gallery":return le.faImages;case"marker":return le.faMapMarkerAlt;case"group":case"sub_group":return le.faFilm;case"performer":return le.faUser;case"studio":return le.faVideo}}function u(){switch(n){case"scene":return{one:"scene",other:"scenes"};case"image":return{one:"image",other:"images"};case"gallery":return{one:"gallery",other:"galleries"};case"marker":return{one:"marker",other:"markers"};case"group":return{one:"group",other:"groups"};case"sub_group":return{one:"sub_group",other:"sub_groups"};case"performer":return{one:"performer",other:"performers"};case"studio":return{one:"studio",other:"studios"}}}function o(){const c=a.formatPlural(r),l=u(),f=a.formatMessage({id:l[c]||l.other});return`${r} ${f}`}return d.jsx(U.OverlayTrigger,{overlay:d.jsx(U.Tooltip,{id:`${n}-count-tooltip`,children:o()}),placement:"bottom",children:d.jsx(Ze.Link,{className:e,to:t,children:d.jsxs(U.Button,{className:"minimal",children:[d.jsx(Me,{icon:s()}),d.jsx(WC,{count:r})]})})})},YC=Se("TagCard.Popovers",({tag:e})=>d.jsxs(d.Fragment,{children:[d.jsx("hr",{}),d.jsxs(U.ButtonGroup,{className:"card-popovers",children:[d.jsx(Vt,{className:"scene-count",type:"scene",count:e.scene_count,url:ve.makeTagScenesUrl(e),showZero:!1}),d.jsx(Vt,{className:"image-count",type:"image",count:e.image_count,url:ve.makeTagImagesUrl(e),showZero:!1}),d.jsx(Vt,{className:"gallery-count",type:"gallery",count:e.gallery_count,url:ve.makeTagGalleriesUrl(e),showZero:!1}),d.jsx(Vt,{className:"group-count",type:"group",count:e.group_count,url:ve.makeTagGroupsUrl(e),showZero:!1}),d.jsx(Vt,{className:"marker-count",type:"marker",count:e.scene_marker_count,url:ve.makeTagSceneMarkersUrl(e),showZero:!1}),d.jsx(Vt,{className:"performer-count",type:"performer",count:e.performer_count,url:ve.makeTagPerformersUrl(e),showZero:!1}),d.jsx(Vt,{className:"studio-count",type:"studio",count:e.studio_count,url:ve.makeTagStudiosUrl(e),showZero:!1})]})]})),QC=Se("TagCard.Overlays",({tag:e})=>{const[t]=Zm();function n(){return d.jsx(Ze.Link,{to:"",onClick:i=>i.preventDefault(),children:d.jsx(U.Button,{className:We("minimal","mousetrap","favorite-button",e.favorite?"favorite":"not-favorite"),onClick:()=>r(!e.favorite),children:d.jsx(Me,{icon:le.faHeart,size:"2x"})})})}function r(i){e.id&&t({variables:{input:{id:e.id,favorite:i}}})}return d.jsx(d.Fragment,{children:n()})}),KC=Se("TagCard.Details",({tag:e})=>{function t(){if(e.description)return d.jsx(rr,{className:"tag-description",text:e.description,lineCount:3})}function n(){if(e.parents.length===1){const i=e.parents[0];return d.jsx("div",{className:"tag-parent-tags",children:d.jsx(Ce.FormattedMessage,{id:"sub_tag_of",values:{parent:d.jsx(Ze.Link,{to:`/tags/${i.id}`,children:i.name})}})})}if(e.parents.length>1)return d.jsx("div",{className:"tag-parent-tags",children:d.jsx(Ce.FormattedMessage,{id:"sub_tag_of",values:{parent:d.jsxs(Ze.Link,{to:ve.makeParentTagsUrl(e),children:[e.parents.length," ",d.jsx(Ce.FormattedMessage,{id:"countables.tags",values:{count:e.parents.length}})]})}})})}function r(){if(e.children.length>0)return d.jsx("div",{className:"tag-sub-tags",children:d.jsx(Ce.FormattedMessage,{id:"parent_of",values:{children:d.jsxs(Ze.Link,{to:ve.makeChildTagsUrl(e),children:[e.children.length," ",d.jsx(Ce.FormattedMessage,{id:"countables.tags",values:{count:e.children.length}})]})}})})}return d.jsxs(d.Fragment,{children:[t(),n(),r()]})}),JC=Se("TagCard.Image",({tag:e})=>d.jsx("img",{loading:"lazy",className:"tag-card-image",alt:e.name,src:e.image_path??""})),XC=Se("TagCard.Title",({tag:e})=>d.jsx(d.Fragment,{children:e.name??""})),ZC=Se("TagCard",e=>{const{tag:t,cardWidth:n,zoomIndex:r,selecting:i,selected:a,onSelectedChanged:s}=e;return d.jsx(Bd,{className:`tag-card zoom-${r}`,url:`/tags/${t.id}`,width:n,title:d.jsx(XC,{...e}),linkClassName:"tag-card-header",image:d.jsx(JC,{...e}),details:d.jsx(KC,{...e}),overlays:d.jsx(QC,{...e}),popovers:d.jsx(YC,{...e}),selected:a,selecting:i,onSelectedChanged:s})}),ew=({id:e})=>{const{data:t,loading:n,error:r}=Ym(e);if(n)return d.jsx("div",{className:"tag-popover-card-placeholder",children:d.jsx(yd,{card:!0,message:""})});if(r)return d.jsx(vd,{error:r.message});if(!(t!=null&&t.findTag))return d.jsx(vd,{error:`No tag found with id ${e}.`});const i=t.findTag;return d.jsx("div",{className:"tag-popover-card",children:d.jsx(ZC,{tag:i,zoomIndex:0})})},Cs=({id:e,hide:t,children:n,placement:r="top",target:i})=>{const{configuration:a}=bt(),s=(a==null?void 0:a.ui.showTagCardOnHover)??!0;return t||!s?d.jsx(d.Fragment,{children:n}):d.jsx(jt,{target:i,placement:r,enterDelay:500,leaveDelay:100,content:d.jsx(ew,{id:e}),children:n})};function tw(e,t,n,r){if(!e)return t;e=e.toLowerCase();const i={};function a(v,w){i[v.id]={...i[v.id],...w}}function s(v){var C,_;const w=(C=i[v.id])==null?void 0:C.aliases;if(w!==void 0)return w;if(!r)return[];const E=((_=r(v))==null?void 0:_.map(h=>h.trim().toLowerCase()))??[];return a(v,{aliases:E}),E}function u(v){var _;const w=(_=i[v.id])==null?void 0:_.aliasMatch;if(w!==void 0)return w;const C=s(v).some(h=>h===e);return a(v,{aliasMatch:C}),C}function o(v){var _;const w=(_=i[v.id])==null?void 0:_.aliasStartsWith;if(w!==void 0)return w;const C=s(v).some(h=>h.startsWith(e));return a(v,{aliasStartsWith:C}),C}function c(v){return v.trim().replace(/\s\s+/g," ").toLowerCase().split(" ")}function l(v){return c(n(v))}function f(v){return s(v).flatMap(E=>c(E))}function g(v){var _;const w=(_=i[v.id])==null?void 0:_.wordIndex;if(w!==void 0)return w;const C=l(v).indexOf(e);return a(v,{wordIndex:C}),C}function p(v){var _;const w=(_=i[v.id])==null?void 0:_.aliasWordIndex;if(w!==void 0)return w;const C=f(v).indexOf(e);return a(v,{aliasWordIndex:C}),C}function I(v){var _;const w=(_=i[v.id])==null?void 0:_.wordStartsWithIndex;if(w!==void 0)return w;const C=l(v).findIndex(h=>h.startsWith(e));return a(v,{wordStartsWithIndex:C}),C}function x(v){var _;const w=(_=i[v.id])==null?void 0:_.aliasWordStartsWithIndex;if(w!==void 0)return w;const C=f(v).findIndex(h=>h.startsWith(e));return a(v,{aliasWordStartsWithIndex:C}),C}function b(v){var _;const w=(_=i[v.id])==null?void 0:_.aliasIncludesIndex;if(w!==void 0)return w;const C=s(v).findIndex(h=>h.includes(e));return a(v,{aliasIncludesIndex:C}),C}function S(v,w){const E=n(v).trim().toLowerCase(),C=n(w).trim().toLowerCase(),_=u(v),h=u(w);if(E===e&&C!==e)return-1;if(E!==e&&C===e)return 1;if(_&&!h)return-1;if(!_&&h)return 1;if(E.startsWith(e)&&!C.startsWith(e))return-1;if(!E.startsWith(e)&&C.startsWith(e))return 1;const T=o(v),D=o(w);if(T&&!D)return-1;if(!T&&D)return 1;if(!e.includes(" ")){{const ne=g(v),P=g(w);if(ne!==-1&&P===-1)return-1;if(ne===-1&&P!==-1)return 1;if(ne!==-1&&P!==-1)return ne===P?E.localeCompare(C):ne-P;const k=p(v),F=p(w);if(k!==-1&&F===-1)return-1;if(k===-1&&F!==-1)return 1;if(k!==-1&&F!==-1)return k===F?E.localeCompare(C):k-F}{const ne=I(v),P=I(w);if(ne!==-1&&P===-1)return-1;if(ne===-1&&P!==-1)return 1;if(ne!==-1&&P!==-1)return ne===P?E.localeCompare(C):ne-P;const k=x(v),F=x(w);if(k!==-1&&F===-1)return-1;if(k===-1&&F!==-1)return 1;if(k!==-1&&F!==-1)return k===F?E.localeCompare(C):k-F}}const $=E.indexOf(e),L=C.indexOf(e);if($!==-1&&L===-1)return-1;if($===-1&&L!==-1)return 1;if($!==-1&&L!==-1)return $===L?E.localeCompare(C):$-L;const G=b(v),re=b(w);return G!==-1&&re===-1?-1:G===-1&&re!==-1?1:G!==-1&&re!==-1?G===re?E.localeCompare(C):G-re:E.localeCompare(C)}return t.slice().sort(S)}const nw=/^[0-9a-f]{8}-[0-9a-f]{4}-[47][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function rw(e){return nw.test(e.trim())}function iw(e,t){const n=e.makeCriterion("stash_id_endpoint");n.modifier=y.Equals,n.value={endpoint:"",stashID:t.trim()},e.criteria=[n]}function aw(e,t){return tw(e,t,n=>n.name,n=>n.aliases)}const sw=fo("TagSelect.sort",aw),ow=Se("TagSelect",e=>{const[t]=Xm(),{configuration:n}=bt(),r=Ce.useIntl(),i=(n==null?void 0:n.ui.maxOptionsShown)??tg,a=!(n!=null&&n.interface.disableDropdownCreate.tag),s=O.useMemo(()=>e.excludeIds??[],[e.excludeIds]);function u(x){return!s.includes(x.id.toString())}async function o(x){const b=new ae(X.Tags);if(b.currentPage=1,b.itemsPerPage=i,b.sortBy="name",b.sortDirection=He.Asc,rw(x)){iw(b,x);const E=(await tu(b)).data.findTags.tags.filter(u);if(E.length>0)return E.map(hd);b.criteria=[]}b.searchTerm=x;const v=(await tu(b)).data.findTags.tags.filter(u);return sw(x,v).map(hd)}const c=x=>{var C;let b=x;const{object:S}=x.data,{name:v}=S,{inputValue:w}=x.selectProps;let E="";return v.toLowerCase().includes(w.toLowerCase())||(E=(C=S.aliases)==null?void 0:C.find(_=>_.toLowerCase().includes(w.toLowerCase()))),b={...x,children:d.jsx(Cs,{id:S.id,placement:e.hoverPlacement??"right",children:d.jsxs("span",{className:"react-select-image-option",children:[d.jsx("span",{children:v}),E&&d.jsxs("span",{className:"alias",children:[" (",E,")"]})]})})},d.jsx(Bi.components.Option,{...b})},l=x=>{let b=x;const{object:S}=x.data;return b={...x,children:d.jsx(Cs,{id:S.id,placement:e.hoverPlacementLabel??"top",children:d.jsx("span",{children:S.name})})},d.jsx(Bi.components.MultiValueLabel,{...b})},f=x=>{let b=x;const{object:S}=x.data;return b={...x,children:d.jsx(d.Fragment,{children:S.name})},d.jsx(Bi.components.SingleValue,{...b})},g=async x=>{const b=await t({variables:{input:{name:x}}});return{value:b.data.tagCreate.id,item:b.data.tagCreate,message:"Created tag"}},p=(x,b)=>({id:x,name:b,aliases:[],stash_ids:[]}),I=(x,b)=>!(!x||b.some(S=>{var v;return S.name.toLowerCase()===x.toLowerCase()||((v=S.aliases)==null?void 0:v.some(w=>w.toLowerCase()===x.toLowerCase()))}));return d.jsx(C_,{...e,className:We("tag-select",{"tag-select-active":e.active},e.className),loadOptions:o,getNamedObject:p,isValidNewOption:I,components:{Option:c,MultiValueLabel:l,SingleValue:f},isMulti:e.isMulti??!1,creatable:e.creatable??a,onCreate:g,placeholder:e.noSelectionString??r.formatMessage({id:"actions.select_entity"},{entityType:r.formatMessage({id:e.isMulti?"tags":"tag"})}),closeMenuOnSelect:!e.isMulti})}),uw=Se("TagIDSelect",e=>{const{ids:t,onSelect:n}=e,[r,i]=O.useState([]),a=w_(t);function s(u){i(u),n==null||n(u)}return O.useEffect(()=>{async function u(l){const f=await Qm(l),{tags:g}=f.data.findTags;return g}if(!a)return;if(!t||(t==null?void 0:t.length)===0){i([]);return}if(r.filter(l=>t.includes(l.id.toString())).length===t.length)return;(async()=>{const f=[...await u(t)];f.sort((g,p)=>{const I=g.sort_name||g.name,x=p.sort_name||p.name;return I&&x?I.localeCompare(x):0}),i(f)})()},[t,a,r]),d.jsx(ow,{...e,values:r,onSelect:s})}),cw=(e,t)=>{const{data:n,loading:r,error:i}=eg(e),a=O.useRef(void 0);r||(a.current=n);const s=r?a.current:n,u=i&&t?[]:s==null?void 0:s.directory.directories,o=s==null?void 0:s.directory.parent;return{directories:u,parent:o,loading:r,error:i}},lw=Se("FolderSelect",({currentDirectory:e,onChangeDirectory:t,defaultDirectories:n=[],appendButton:r,collapsible:i=!1,quotePath:a=!1,hideError:s=!1})=>{const u=Ce.useIntl(),[o,c]=O.useState(!1),[l,f]=O.useState(e),g=a?Ne.stripQuotes(l):l,{directories:p,parent:I,error:x,loading:b}=cw(g,s),S=(e?p:n)??n,v=Oi(f,250);function w(h){const T=a&&h.includes(" ")?Ne.addQuotes(h):h;t(T),f(T)}function E(h){t(h),v(h)}function C(){n!=null&&n.includes(e)?w(""):I&&w(I)}const _=e&&I&&d.jsx("li",{className:"folder-list-parent folder-list-item",children:d.jsx(U.Button,{variant:"link",onClick:()=>C(),disabled:b,children:d.jsx("span",{children:d.jsx(Ce.FormattedMessage,{id:"setup.folder.up_dir"})})})});return d.jsxs(d.Fragment,{children:[d.jsxs(U.InputGroup,{children:[d.jsx(U.Form.Control,{className:"btn-secondary",placeholder:u.formatMessage({id:"setup.folder.file_path"}),onChange:h=>{E(h.currentTarget.value)},value:e,spellCheck:!1}),r&&d.jsx(U.InputGroup.Append,{children:r}),i&&d.jsx(U.InputGroup.Append,{children:d.jsx(U.Button,{variant:"secondary",onClick:()=>c(!o),children:d.jsx(Me,{icon:le.faEllipsis})})}),(b||x)&&d.jsx(U.InputGroup.Append,{className:"align-self-center",children:b?d.jsx(yd,{inline:!0,small:!0,message:""}):!s&&d.jsx(Me,{icon:le.faTimes,color:"red",className:"ml-3"})})]}),!s&&x!==void 0&&d.jsxs("h5",{className:"mt-4 text-break",children:["Error: ",x.message]}),d.jsx(U.Collapse,{in:!i||o,children:d.jsxs("ul",{className:"folder-list",children:[_,S.map(h=>d.jsx("li",{className:"folder-list-item",children:d.jsx(U.Button,{variant:"link",onClick:()=>w(h),disabled:b,children:d.jsx("span",{children:h})})},h))]})})]})});function dw(e){var t,n;return e.title?e.title:(t=e.primary_tag)!=null&&t.name?(n=e.primary_tag)==null?void 0:n.name:""}const fw=({link:e,sortName:t,className:n,children:r})=>d.jsx(U.Badge,{"data-name":n,"data-sort-name":t,className:We("tag-item tag-link",n),variant:"secondary",children:d.jsx(Ze.Link,{to:e,children:r})}),Mi=({link:e,className:t,children:n})=>d.jsx(U.Badge,{className:We("tag-item tag-link",t),variant:"secondary",children:d.jsx(Ze.Link,{to:e,children:n})}),pw=({performer:e,linkType:t="scene",className:n})=>{const r=O.useMemo(()=>{switch(t){case"gallery":return ve.makePerformerGalleriesUrl(e);case"image":return ve.makePerformerImagesUrl(e);case"scene_marker":return ve.makePerformerSceneMarkersUrl(e);default:return ve.makePerformerScenesUrl(e)}},[e,t]),i=e.name||"";return d.jsxs(Mi,{link:r,className:n,children:[d.jsx("span",{children:i}),e.disambiguation&&d.jsx("span",{className:"performer-disambiguation",children:` (${e.disambiguation})`})]})},mw=({group:e,description:t,linkType:n="scene",className:r})=>{const i=O.useMemo(()=>{switch(n){case"scene":return ve.makeGroupScenesUrl(e);case"sub_group":return ve.makeSubGroupsUrl(e);case"details":return ve.makeGroupUrl(e.id??"")}},[e,n]),a=e.name||"";return d.jsxs(Mi,{link:i,className:r,children:[a," ",t&&d.jsxs("span",{className:"group-description",children:["(",t,")"]})]})},gw=({marker:e,linkType:t="scene",className:n})=>{const r=O.useMemo(()=>{switch(t){case"scene":return ve.makeSceneMarkerUrl(e)}},[e,t]),i=`${dw(e)} - ${Ne.secondsToTimestamp(e.seconds||0)}`;return d.jsx(Mi,{link:r,className:n,children:i})},hw=({gallery:e,linkType:t="details",className:n})=>{const r=O.useMemo(()=>{switch(t){case"details":return`/galleries/${e.id}`}},[e,t]),i=Sd(e);return d.jsx(Mi,{link:r,className:n,children:i})},vw=Se("TagLink",({tag:e,linkType:t="scene",className:n,hoverPlacement:r,showHierarchyIcon:i=!1,hierarchyTooltipID:a})=>{const s=O.useMemo(()=>{switch(t){case"scene":return ve.makeTagScenesUrl(e);case"performer":return ve.makeTagPerformersUrl(e);case"studio":return ve.makeTagStudiosUrl(e);case"gallery":return ve.makeTagGalleriesUrl(e);case"image":return ve.makeTagImagesUrl(e);case"group":return ve.makeTagGroupsUrl(e);case"scene_marker":return ve.makeTagSceneMarkersUrl(e);case"details":return ve.makeTagUrl(e.id??"")}},[e,t]),u=e.name||"",o=O.useMemo(()=>a?d.jsx(U.Tooltip,{id:"tag-hierarchy-tooltip",children:d.jsx(Ce.FormattedMessage,{id:a})}):d.jsx(d.Fragment,{}),[a]);return d.jsx(fw,{sortName:e.sort_name||u,link:s,className:n,children:d.jsxs(Cs,{id:e.id??"",placement:r,children:[u,i&&d.jsx(U.OverlayTrigger,{placement:"top",overlay:o,children:d.jsxs("span",{className:"icon-wrapper",children:[d.jsx("span",{className:"vertical-line",children:"|"}),d.jsx(Me,{icon:le.faFolderTree,className:"tag-icon"})]})})]})})});function bw(e){const t=e.slice();return t.sort((n,r)=>{if(n.gender===r.gender)return(n.name??"").localeCompare(r.name??"");const i=[Oe.Female,Oe.TransgenderFemale,Oe.Male,Oe.TransgenderMale,Oe.Intersex,Oe.NonBinary],a=n.gender?i.indexOf(n.gender):i.length,s=r.gender?i.indexOf(r.gender):i.length;return a-s}),t}const yw=({performers:e,linkType:t})=>{const r=bw(e).map(i=>d.jsxs("div",{className:"performer-tag-container row",children:[d.jsx(Ze.Link,{to:`/performers/${i.id}`,className:"performer-tag col m-auto zoom-2",children:d.jsx("img",{className:"image-thumbnail",alt:i.name??"",src:i.image_path??""})}),d.jsx(pw,{performer:i,className:"d-block",linkType:t},i.id)]},i.id));return d.jsx(jt,{className:"performer-count",placement:"bottom",content:r,children:d.jsxs(U.Button,{className:"minimal",children:[d.jsx(Me,{icon:le.faUser}),d.jsx("span",{children:e.length})]})})},Sw=({rating:e})=>{const{configuration:t}=bt(),n=(t==null?void 0:t.ui.ratingSystemOptions)??Mu,r=n.type===$u.Stars&&n.starPrecision===Pu.Full,i=jr(e??void 0,n);return e?d.jsxs("div",{className:r?`rating-banner rating-${i}`:`rating-banner rating-100-${Math.trunc(e/5)}`,"data-rating100":e,"data-rating-system":n.type,style:{"--rating-100":e},children:[d.jsx(Ce.FormattedMessage,{id:"rating"}),": ",i]}):null};var Rd={exports:{}},sr;typeof window<"u"?sr=window:typeof fr<"u"?sr=fr:typeof self<"u"?sr=self:sr={};var xw=sr;const Iw=sf(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));var Vd=typeof fr<"u"?fr:typeof window<"u"?window:{},_w=Iw,or;typeof document<"u"?or=document:(or=Vd["__GLOBAL_DOCUMENT_CACHE@4"],or||(or=Vd["__GLOBAL_DOCUMENT_CACHE@4"]=_w));var Cw=or,Gd=Cw,ws=Object.create||function(){function e(){}return function(t){if(arguments.length!==1)throw new Error("Object.create shim only accepts one parameter.");return e.prototype=t,new e}}();function Je(e,t){this.name="ParsingError",this.code=e.code,this.message=t||e.message}Je.prototype=ws(Error.prototype),Je.prototype.constructor=Je,Je.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}};function Os(e){function t(r,i,a,s){return(r|0)*3600+(i|0)*60+(a|0)+(s|0)/1e3}var n=e.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);return n?n[3]?t(n[1],n[2],n[3].replace(":",""),n[4]):n[1]>59?t(n[1],n[2],0,n[4]):t(0,n[1],n[2],n[4]):null}function ur(){this.values=ws(null)}ur.prototype={set:function(e,t){!this.get(e)&&t!==""&&(this.values[e]=t)},get:function(e,t,n){return n?this.has(e)?this.values[e]:t[n]:this.has(e)?this.values[e]:t},has:function(e){return e in this.values},alt:function(e,t,n){for(var r=0;r<n.length;++r)if(t===n[r]){this.set(e,t);break}},integer:function(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))},percent:function(e,t){return t.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&(t=parseFloat(t),t>=0&&t<=100)?(this.set(e,t),!0):!1}};function cr(e,t,n,r){var i=r?e.split(r):[e];for(var a in i)if(typeof i[a]=="string"){var s=i[a].split(n);if(s.length===2){var u=s[0].trim(),o=s[1].trim();t(u,o)}}}function ww(e,t,n){var r=e;function i(){var u=Os(e);if(u===null)throw new Je(Je.Errors.BadTimeStamp,"Malformed timestamp: "+r);return e=e.replace(/^[^\sa-zA-Z-]+/,""),u}function a(u,o){var c=new ur;cr(u,function(l,f){switch(l){case"region":for(var g=n.length-1;g>=0;g--)if(n[g].id===f){c.set(l,n[g].region);break}break;case"vertical":c.alt(l,f,["rl","lr"]);break;case"line":var p=f.split(","),I=p[0];c.integer(l,I),c.percent(l,I)&&c.set("snapToLines",!1),c.alt(l,I,["auto"]),p.length===2&&c.alt("lineAlign",p[1],["start","center","end"]);break;case"position":p=f.split(","),c.percent(l,p[0]),p.length===2&&c.alt("positionAlign",p[1],["start","center","end"]);break;case"size":c.percent(l,f);break;case"align":c.alt(l,f,["start","center","end","left","right"]);break}},/:/,/\s/),o.region=c.get("region",null),o.vertical=c.get("vertical","");try{o.line=c.get("line","auto")}catch{}o.lineAlign=c.get("lineAlign","start"),o.snapToLines=c.get("snapToLines",!0),o.size=c.get("size",100);try{o.align=c.get("align","center")}catch{o.align=c.get("align","middle")}try{o.position=c.get("position","auto")}catch{o.position=c.get("position",{start:0,left:0,center:50,middle:50,end:100,right:100},o.align)}o.positionAlign=c.get("positionAlign",{start:"start",left:"start",center:"center",middle:"center",end:"end",right:"end"},o.align)}function s(){e=e.replace(/^\s+/,"")}if(s(),t.startTime=i(),s(),e.substr(0,3)!=="-->")throw new Je(Je.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '-->'): "+r);e=e.substr(3),s(),t.endTime=i(),s(),a(e,t)}var Es=Gd.createElement&&Gd.createElement("textarea"),Ow={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},Ud={white:"rgba(255,255,255,1)",lime:"rgba(0,255,0,1)",cyan:"rgba(0,255,255,1)",red:"rgba(255,0,0,1)",yellow:"rgba(255,255,0,1)",magenta:"rgba(255,0,255,1)",blue:"rgba(0,0,255,1)",black:"rgba(0,0,0,1)"},Ew={v:"title",lang:"lang"},zd={rt:"ruby"};function Hd(e,t){function n(){if(!t)return null;function I(b){return t=t.substr(b.length),b}var x=t.match(/^([^<]*)(<[^>]*>?)?/);return I(x[1]?x[1]:x[2])}function r(I){return Es.innerHTML=I,I=Es.textContent,Es.textContent="",I}function i(I,x){return!zd[x.localName]||zd[x.localName]===I.localName}function a(I,x){var b=Ow[I];if(!b)return null;var S=e.document.createElement(b),v=Ew[I];return v&&x&&(S[v]=x.trim()),S}for(var s=e.document.createElement("div"),u=s,o,c=[];(o=n())!==null;){if(o[0]==="<"){if(o[1]==="/"){c.length&&c[c.length-1]===o.substr(2).replace(">","")&&(c.pop(),u=u.parentNode);continue}var l=Os(o.substr(1,o.length-2)),f;if(l){f=e.document.createProcessingInstruction("timestamp",l),u.appendChild(f);continue}var g=o.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!g||(f=a(g[1],g[3]),!f)||!i(u,f))continue;if(g[2]){var p=g[2].split(".");p.forEach(function(I){var x=/^bg_/.test(I),b=x?I.slice(3):I;if(Ud.hasOwnProperty(b)){var S=x?"background-color":"color",v=Ud[b];f.style[S]=v}}),f.className=p.join(" ")}c.push(g[1]),u.appendChild(f),u=f;continue}u.appendChild(e.document.createTextNode(r(o)))}return s}var Wd=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];function Tw(e){for(var t=0;t<Wd.length;t++){var n=Wd[t];if(e>=n[0]&&e<=n[1])return!0}return!1}function Dw(e){var t=[],n="",r;if(!e||!e.childNodes)return"ltr";function i(u,o){for(var c=o.childNodes.length-1;c>=0;c--)u.push(o.childNodes[c])}function a(u){if(!u||!u.length)return null;var o=u.pop(),c=o.textContent||o.innerText;if(c){var l=c.match(/^.*(\n|\r)/);return l?(u.length=0,l[0]):c}if(o.tagName==="ruby")return a(u);if(o.childNodes)return i(u,o),a(u)}for(i(t,e);n=a(t);)for(var s=0;s<n.length;s++)if(r=n.charCodeAt(s),Tw(r))return"rtl";return"ltr"}function $w(e){if(typeof e.line=="number"&&(e.snapToLines||e.line>=0&&e.line<=100))return e.line;if(!e.track||!e.track.textTrackList||!e.track.textTrackList.mediaElement)return-1;for(var t=e.track,n=t.textTrackList,r=0,i=0;i<n.length&&n[i]!==t;i++)n[i].mode==="showing"&&r++;return++r*-1}function Fi(){}Fi.prototype.applyStyles=function(e,t){t=t||this.div;for(var n in e)e.hasOwnProperty(n)&&(t.style[n]=e[n])},Fi.prototype.formatStyle=function(e,t){return e===0?0:e+t};function Ni(e,t,n){Fi.call(this),this.cue=t,this.cueDiv=Hd(e,t.text);var r={color:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(0, 0, 0, 0.8)",position:"relative",left:0,right:0,top:0,bottom:0,display:"inline",writingMode:t.vertical===""?"horizontal-tb":t.vertical==="lr"?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext"};this.applyStyles(r,this.cueDiv),this.div=e.document.createElement("div"),r={direction:Dw(this.cueDiv),writingMode:t.vertical===""?"horizontal-tb":t.vertical==="lr"?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext",textAlign:t.align==="middle"?"center":t.align,font:n.font,whiteSpace:"pre-line",position:"absolute"},this.applyStyles(r),this.div.appendChild(this.cueDiv);var i=0;switch(t.positionAlign){case"start":case"line-left":i=t.position;break;case"center":i=t.position-t.size/2;break;case"end":case"line-right":i=t.position-t.size;break}t.vertical===""?this.applyStyles({left:this.formatStyle(i,"%"),width:this.formatStyle(t.size,"%")}):this.applyStyles({top:this.formatStyle(i,"%"),height:this.formatStyle(t.size,"%")}),this.move=function(a){this.applyStyles({top:this.formatStyle(a.top,"px"),bottom:this.formatStyle(a.bottom,"px"),left:this.formatStyle(a.left,"px"),right:this.formatStyle(a.right,"px"),height:this.formatStyle(a.height,"px"),width:this.formatStyle(a.width,"px")})}}Ni.prototype=ws(Fi.prototype),Ni.prototype.constructor=Ni;function Ge(e){var t,n,r,i;if(e.div){n=e.div.offsetHeight,r=e.div.offsetWidth,i=e.div.offsetTop;var a=(a=e.div.childNodes)&&(a=a[0])&&a.getClientRects&&a.getClientRects();e=e.div.getBoundingClientRect(),t=a?Math.max(a[0]&&a[0].height||0,e.height/a.length):0}this.left=e.left,this.right=e.right,this.top=e.top||i,this.height=e.height||n,this.bottom=e.bottom||i+(e.height||n),this.width=e.width||r,this.lineHeight=t!==void 0?t:e.lineHeight}Ge.prototype.move=function(e,t){switch(t=t!==void 0?t:this.lineHeight,e){case"+x":this.left+=t,this.right+=t;break;case"-x":this.left-=t,this.right-=t;break;case"+y":this.top+=t,this.bottom+=t;break;case"-y":this.top-=t,this.bottom-=t;break}},Ge.prototype.overlaps=function(e){return this.left<e.right&&this.right>e.left&&this.top<e.bottom&&this.bottom>e.top},Ge.prototype.overlapsAny=function(e){for(var t=0;t<e.length;t++)if(this.overlaps(e[t]))return!0;return!1},Ge.prototype.within=function(e){return this.top>=e.top&&this.bottom<=e.bottom&&this.left>=e.left&&this.right<=e.right},Ge.prototype.overlapsOppositeAxis=function(e,t){switch(t){case"+x":return this.left<e.left;case"-x":return this.right>e.right;case"+y":return this.top<e.top;case"-y":return this.bottom>e.bottom}},Ge.prototype.intersectPercentage=function(e){var t=Math.max(0,Math.min(this.right,e.right)-Math.max(this.left,e.left)),n=Math.max(0,Math.min(this.bottom,e.bottom)-Math.max(this.top,e.top)),r=t*n;return r/(this.height*this.width)},Ge.prototype.toCSSCompatValues=function(e){return{top:this.top-e.top,bottom:e.bottom-this.bottom,left:this.left-e.left,right:e.right-this.right,height:this.height,width:this.width}},Ge.getSimpleBoxPosition=function(e){var t=e.div?e.div.offsetHeight:e.tagName?e.offsetHeight:0,n=e.div?e.div.offsetWidth:e.tagName?e.offsetWidth:0,r=e.div?e.div.offsetTop:e.tagName?e.offsetTop:0;e=e.div?e.div.getBoundingClientRect():e.tagName?e.getBoundingClientRect():e;var i={left:e.left,right:e.right,top:e.top||r,height:e.height||t,bottom:e.bottom||r+(e.height||t),width:e.width||n};return i};function Pw(e,t,n,r){function i(b,S){for(var v,w=new Ge(b),E=1,C=0;C<S.length;C++){for(;b.overlapsOppositeAxis(n,S[C])||b.within(n)&&b.overlapsAny(r);)b.move(S[C]);if(b.within(n))return b;var _=b.intersectPercentage(n);E>_&&(v=new Ge(b),E=_),b=new Ge(w)}return v||w}var a=new Ge(t),s=t.cue,u=$w(s),o=[];if(s.snapToLines){var c;switch(s.vertical){case"":o=["+y","-y"],c="height";break;case"rl":o=["+x","-x"],c="width";break;case"lr":o=["-x","+x"],c="width";break}var l=a.lineHeight,f=l*Math.round(u),g=n[c]+l,p=o[0];Math.abs(f)>g&&(f=f<0?-1:1,f*=Math.ceil(g/l)*l),u<0&&(f+=s.vertical===""?n.height:n.width,o=o.reverse()),a.move(p,f)}else{var I=a.lineHeight/n.height*100;switch(s.lineAlign){case"center":u-=I/2;break;case"end":u-=I;break}switch(s.vertical){case"":t.applyStyles({top:t.formatStyle(u,"%")});break;case"rl":t.applyStyles({left:t.formatStyle(u,"%")});break;case"lr":t.applyStyles({right:t.formatStyle(u,"%")});break}o=["+y","-x","+x","-y"],a=new Ge(t)}var x=i(a,o);t.move(x.toCSSCompatValues(n))}function yn(){}yn.StringDecoder=function(){return{decode:function(e){if(!e)return"";if(typeof e!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}},yn.convertCueToDOMTree=function(e,t){return!e||!t?null:Hd(e,t)};var Mw=.05,Fw="sans-serif",Nw="1.5%";yn.processCues=function(e,t,n){if(!e||!t||!n)return null;for(;n.firstChild;)n.removeChild(n.firstChild);var r=e.document.createElement("div");r.style.position="absolute",r.style.left="0",r.style.right="0",r.style.top="0",r.style.bottom="0",r.style.margin=Nw,n.appendChild(r);function i(l){for(var f=0;f<l.length;f++)if(l[f].hasBeenReset||!l[f].displayState)return!0;return!1}if(!i(t)){for(var a=0;a<t.length;a++)r.appendChild(t[a].displayState);return}var s=[],u=Ge.getSimpleBoxPosition(r),o=Math.round(u.height*Mw*100)/100,c={font:o+"px "+Fw};(function(){for(var l,f,g=0;g<t.length;g++)f=t[g],l=new Ni(e,f,c),r.appendChild(l.div),Pw(e,l,u,s),f.displayState=l.div,s.push(Ge.getSimpleBoxPosition(l))})()},yn.Parser=function(e,t,n){n||(n=t,t={}),t||(t={}),this.window=e,this.vttjs=t,this.state="INITIAL",this.buffer="",this.decoder=n||new TextDecoder("utf8"),this.regionList=[]},yn.Parser.prototype={reportOrThrowError:function(e){if(e instanceof Je)this.onparsingerror&&this.onparsingerror(e);else throw e},parse:function(e){var t=this;e&&(t.buffer+=t.decoder.decode(e,{stream:!0}));function n(){for(var l=t.buffer,f=0;f<l.length&&l[f]!=="\r"&&l[f]!==`
`;)++f;var g=l.substr(0,f);return l[f]==="\r"&&++f,l[f]===`
`&&++f,t.buffer=l.substr(f),g}function r(l){var f=new ur;if(cr(l,function(p,I){switch(p){case"id":f.set(p,I);break;case"width":f.percent(p,I);break;case"lines":f.integer(p,I);break;case"regionanchor":case"viewportanchor":var x=I.split(",");if(x.length!==2)break;var b=new ur;if(b.percent("x",x[0]),b.percent("y",x[1]),!b.has("x")||!b.has("y"))break;f.set(p+"X",b.get("x")),f.set(p+"Y",b.get("y"));break;case"scroll":f.alt(p,I,["up"]);break}},/=/,/\s/),f.has("id")){var g=new(t.vttjs.VTTRegion||t.window.VTTRegion);g.width=f.get("width",100),g.lines=f.get("lines",3),g.regionAnchorX=f.get("regionanchorX",0),g.regionAnchorY=f.get("regionanchorY",100),g.viewportAnchorX=f.get("viewportanchorX",0),g.viewportAnchorY=f.get("viewportanchorY",100),g.scroll=f.get("scroll",""),t.onregion&&t.onregion(g),t.regionList.push({id:f.get("id"),region:g})}}function i(l){var f=new ur;cr(l,function(g,p){switch(g){case"MPEGT":f.integer(g+"S",p);break;case"LOCA":f.set(g+"L",Os(p));break}},/[^\d]:/,/,/),t.ontimestampmap&&t.ontimestampmap({MPEGTS:f.get("MPEGTS"),LOCAL:f.get("LOCAL")})}function a(l){l.match(/X-TIMESTAMP-MAP/)?cr(l,function(f,g){switch(f){case"X-TIMESTAMP-MAP":i(g);break}},/=/):cr(l,function(f,g){switch(f){case"Region":r(g);break}},/:/)}try{var s;if(t.state==="INITIAL"){if(!/\r\n|\n/.test(t.buffer))return this;s=n();var u=s.match(/^WEBVTT([ \t].*)?$/);if(!u||!u[0])throw new Je(Je.Errors.BadSignature);t.state="HEADER"}for(var o=!1;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this;switch(o?o=!1:s=n(),t.state){case"HEADER":/:/.test(s)?a(s):s||(t.state="ID");continue;case"NOTE":s||(t.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(s)){t.state="NOTE";break}if(!s)continue;t.cue=new(t.vttjs.VTTCue||t.window.VTTCue)(0,0,"");try{t.cue.align="center"}catch{t.cue.align="middle"}if(t.state="CUE",s.indexOf("-->")===-1){t.cue.id=s;continue}case"CUE":try{ww(s,t.cue,t.regionList)}catch(l){t.reportOrThrowError(l),t.cue=null,t.state="BADCUE";continue}t.state="CUETEXT";continue;case"CUETEXT":var c=s.indexOf("-->")!==-1;if(!s||c&&(o=!0)){t.oncue&&t.oncue(t.cue),t.cue=null,t.state="ID";continue}t.cue.text&&(t.cue.text+=`
`),t.cue.text+=s.replace(/\u2028/g,`
`).replace(/u2029/g,`
`);continue;case"BADCUE":s||(t.state="ID");continue}}}catch(l){t.reportOrThrowError(l),t.state==="CUETEXT"&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state=t.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this},flush:function(){var e=this;try{if(e.buffer+=e.decoder.decode(),(e.cue||e.state==="HEADER")&&(e.buffer+=`

`,e.parse()),e.state==="INITIAL")throw new Je(Je.Errors.BadSignature)}catch(t){e.reportOrThrowError(t)}return e.onflush&&e.onflush(),this}};var kw=yn,Aw="auto",Lw={"":1,lr:1,rl:1},jw={start:1,center:1,end:1,left:1,right:1,auto:1,"line-left":1,"line-right":1};function qw(e){if(typeof e!="string")return!1;var t=Lw[e.toLowerCase()];return t?e.toLowerCase():!1}function Ts(e){if(typeof e!="string")return!1;var t=jw[e.toLowerCase()];return t?e.toLowerCase():!1}function Yd(e,t,n){this.hasBeenReset=!1;var r="",i=!1,a=e,s=t,u=n,o=null,c="",l=!0,f="auto",g="start",p="auto",I="auto",x=100,b="center";Object.defineProperties(this,{id:{enumerable:!0,get:function(){return r},set:function(S){r=""+S}},pauseOnExit:{enumerable:!0,get:function(){return i},set:function(S){i=!!S}},startTime:{enumerable:!0,get:function(){return a},set:function(S){if(typeof S!="number")throw new TypeError("Start time must be set to a number.");a=S,this.hasBeenReset=!0}},endTime:{enumerable:!0,get:function(){return s},set:function(S){if(typeof S!="number")throw new TypeError("End time must be set to a number.");s=S,this.hasBeenReset=!0}},text:{enumerable:!0,get:function(){return u},set:function(S){u=""+S,this.hasBeenReset=!0}},region:{enumerable:!0,get:function(){return o},set:function(S){o=S,this.hasBeenReset=!0}},vertical:{enumerable:!0,get:function(){return c},set:function(S){var v=qw(S);if(v===!1)throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.");c=v,this.hasBeenReset=!0}},snapToLines:{enumerable:!0,get:function(){return l},set:function(S){l=!!S,this.hasBeenReset=!0}},line:{enumerable:!0,get:function(){return f},set:function(S){if(typeof S!="number"&&S!==Aw)throw new SyntaxError("Line: an invalid number or illegal string was specified.");f=S,this.hasBeenReset=!0}},lineAlign:{enumerable:!0,get:function(){return g},set:function(S){var v=Ts(S);v?(g=v,this.hasBeenReset=!0):console.warn("lineAlign: an invalid or illegal string was specified.")}},position:{enumerable:!0,get:function(){return p},set:function(S){if(S<0||S>100)throw new Error("Position must be between 0 and 100.");p=S,this.hasBeenReset=!0}},positionAlign:{enumerable:!0,get:function(){return I},set:function(S){var v=Ts(S);v?(I=v,this.hasBeenReset=!0):console.warn("positionAlign: an invalid or illegal string was specified.")}},size:{enumerable:!0,get:function(){return x},set:function(S){if(S<0||S>100)throw new Error("Size must be between 0 and 100.");x=S,this.hasBeenReset=!0}},align:{enumerable:!0,get:function(){return b},set:function(S){var v=Ts(S);if(!v)throw new SyntaxError("align: an invalid or illegal alignment string was specified.");b=v,this.hasBeenReset=!0}}}),this.displayState=void 0}Yd.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)};var Bw=Yd,Rw={"":!0,up:!0};function Vw(e){if(typeof e!="string")return!1;var t=Rw[e.toLowerCase()];return t?e.toLowerCase():!1}function lr(e){return typeof e=="number"&&e>=0&&e<=100}function Gw(){var e=100,t=3,n=0,r=100,i=0,a=100,s="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return e},set:function(u){if(!lr(u))throw new Error("Width must be between 0 and 100.");e=u}},lines:{enumerable:!0,get:function(){return t},set:function(u){if(typeof u!="number")throw new TypeError("Lines must be set to a number.");t=u}},regionAnchorY:{enumerable:!0,get:function(){return r},set:function(u){if(!lr(u))throw new Error("RegionAnchorX must be between 0 and 100.");r=u}},regionAnchorX:{enumerable:!0,get:function(){return n},set:function(u){if(!lr(u))throw new Error("RegionAnchorY must be between 0 and 100.");n=u}},viewportAnchorY:{enumerable:!0,get:function(){return a},set:function(u){if(!lr(u))throw new Error("ViewportAnchorY must be between 0 and 100.");a=u}},viewportAnchorX:{enumerable:!0,get:function(){return i},set:function(u){if(!lr(u))throw new Error("ViewportAnchorX must be between 0 and 100.");i=u}},scroll:{enumerable:!0,get:function(){return s},set:function(u){var o=Vw(u);o===!1?console.warn("Scroll: an invalid or illegal string was specified."):s=o}}})}var Uw=Gw,ht=xw,Gt=Rd.exports={WebVTT:kw,VTTCue:Bw,VTTRegion:Uw};ht.vttjs=Gt,ht.WebVTT=Gt.WebVTT;var zw=Gt.VTTCue,Hw=Gt.VTTRegion,Ww=ht.VTTCue,Yw=ht.VTTRegion;Gt.shim=function(){ht.VTTCue=zw,ht.VTTRegion=Hw},Gt.restore=function(){ht.VTTCue=Ww,ht.VTTRegion=Yw},ht.VTTCue||Gt.shim();var Qd=Rd.exports;function Qw(e,t){const n=[],r=new Qd.WebVTT.Parser(window,Qd.WebVTT.StringDecoder());return r.oncue=i=>{const a=i.text.match(/^([^#]*)#xywh=(\d+),(\d+),(\d+),(\d+)$/i);a&&n.push({url:new URL(a[1],e).href,start:i.startTime,end:i.endTime,x:Number(a[2]),y:Number(a[3]),w:Number(a[4]),h:Number(a[5])})},r.parse(t),r.flush(),n}function Kw(e){const[t,n]=O.useState();return O.useEffect(()=>{if(!e){n(void 0);return}fetch(e).then(r=>{if(!r.ok){n(null);return}r.text().then(i=>{n(Qw(e,i))})})},[e]),t}function Jw(e,t,n){const r=O.useRef(e);return r.current=e,O.useCallback(x_(function(){return r.current.apply(this,arguments)},t,n),[t,n==null?void 0:n.leading,n==null?void 0:n.trailing,n==null?void 0:n.maxWait])}const Ds=window.TouchEvent!==void 0,Xw=({totalSprites:e,activeIndex:t,setActiveIndex:n,onClick:r,disabled:i})=>{function a(l){const{width:f}=l.currentTarget.getBoundingClientRect();let g=0;l.nativeEvent instanceof MouseEvent?g=l.nativeEvent.offsetX:Ds&&l.nativeEvent instanceof TouchEvent&&(g=l.nativeEvent.touches[0].clientX-l.currentTarget.getBoundingClientRect().x);const p=Math.round(g/f*(e-1));return p<0?0:p>=e?e-1:p}function s(l){const f=l.currentTarget;l instanceof MouseEvent&&f!==l.target||Ds&&l instanceof TouchEvent&&document.elementFromPoint(l.touches[0].clientX,l.touches[0].clientY)||n(a(l))}function u(){n(void 0)}function o(l){if(!r)return;if(i){l.preventDefault();return}const f=l.currentTarget;if(l instanceof MouseEvent&&f!==l.target||Ds&&l instanceof TouchEvent&&document.elementFromPoint(l.touches[0].clientX,l.touches[0].clientY))return;l.preventDefault(),l.stopPropagation();const g=a(l);g!==void 0&&r(g)}const c=O.useMemo(()=>t===void 0||!e?{}:{width:`${(t+1)/e*100}%`},[t,e]);return d.jsxs("div",{className:We("hover-scrubber",{"hover-scrubber-inactive":!e}),children:[d.jsx("div",{className:"hover-scrubber-area",onMouseMove:s,onTouchMove:s,onMouseLeave:u,onTouchEnd:u,onTouchCancel:u,onClick:o}),d.jsx("div",{className:"hover-scrubber-indicator",children:t!==void 0&&d.jsx("div",{className:"hover-scrubber-indicator-marker",style:c})})]})};function Zw(e,t){const n=t.width/e.w,r=t.height/e.h;return e.w>e.h?Math.max(n,r):Math.min(n,r)}const eO=81,tO=({vttPath:e,onClick:t,disabled:n})=>{const r=O.useRef(null),[i,a]=O.useState({}),[s,u]=O.useState(),o=Jw(u,50),[c,l]=O.useState(!1),f=Kw(c?e:void 0),g=O.useMemo(()=>{if(!f)return{x:0,y:0};const b=Math.max(...f.map(v=>v.x+v.w)),S=Math.max(...f.map(v=>v.y+v.h));return{x:b,y:S}},[f]),p=O.useMemo(()=>{if(!(!f||s===void 0))return f[s]},[s,f]);O.useEffect(()=>{s!==void 0&&l(!0)},[s]),O.useLayoutEffect(()=>{const b=r.current;if(!p||!b)return a({});const S=b.getBoundingClientRect(),v=Zw(p,S);a({backgroundPosition:`${-p.x*v}px ${-p.y*v}px`,backgroundImage:`url(${p.url})`,backgroundSize:`${g.x*v}px ${g.y*v}px`,width:`${p.w*v}px`,height:`${p.h*v}px`})},[p,g]);const I=O.useMemo(()=>p?Ne.secondsToTimestamp(p.start):void 0,[p]);function x(b){if(!t||!f)return;const S=f[b];t(S.start)}return f===null||!e?null:d.jsxs("div",{className:"preview-scrubber",children:[p&&d.jsxs("div",{className:"scene-card-preview-image",ref:r,children:[d.jsx("div",{className:"scrubber-image",style:i}),I!==void 0&&d.jsx("div",{className:"scrubber-timestamp",children:I})]}),d.jsx(Xw,{totalSprites:(f==null?void 0:f.length)??eO,activeIndex:s,setActiveIndex:b=>o(b),onClick:x,disabled:n})]})},nO=({studio:e,disabled:t})=>{const{configuration:n}=bt(),r=n==null?void 0:n.interface.showStudioAsText,i=O.useMemo(()=>!!(r||!(e!=null&&e.image_path)||new URL(e.image_path).searchParams.get("default")==="true"),[r,e==null?void 0:e.image_path]);function a(s){t&&s.preventDefault()}return e?d.jsx("div",{className:"studio-overlay",children:d.jsx(Ze.Link,{to:`/studios/${e.id}`,onClick:a,children:i?e.name:d.jsx("img",{className:"image-thumbnail",loading:"lazy",alt:e.name,src:e.image_path??""})})}):null},rO=({group:e,linkType:t,description:n})=>d.jsxs("div",{className:"group-tag-container",children:[d.jsx(Ze.Link,{to:`/groups/${e.id}`,className:"group-tag col m-auto zoom-2",children:d.jsx("img",{className:"image-thumbnail",alt:e.name??"",src:e.front_image_path??""})}),d.jsx(mw,{group:e,description:n,linkType:t,className:"d-block"})]}),iO=({size:e})=>{const{size:t,unit:n}=Ne.fileSize(e);return d.jsxs(d.Fragment,{children:[d.jsx(Ce.FormattedNumber,{value:t,maximumFractionDigits:Ne.fileSizeFractionalDigits(n)}),` ${Ne.formatFileSizeUnit(n)}`]})},aO=Se("SweatDrops",()=>d.jsx("span",{children:d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",style:{transform:"rotate(360deg)"},preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 36 36",children:[d.jsx("path",{fill:"currentColor",d:"M22.855.758L7.875 7.024l12.537 9.733c2.633 2.224 6.377 2.937 9.77 1.518c4.826-2.018 7.096-7.576 5.072-12.413C33.232 1.024 27.68-1.261 22.855.758zm-9.962 17.924L2.05 10.284L.137 23.529a7.993 7.993 0 0 0 2.958 7.803a8.001 8.001 0 0 0 9.798-12.65zm15.339 7.015l-8.156-4.69l-.033 9.223c-.088 2 .904 3.98 2.75 5.041a5.462 5.462 0 0 0 7.479-2.051c1.499-2.644.589-6.013-2.04-7.523z"}),d.jsx("rect",{x:"0",y:"0",width:"36",height:"36",fill:"rgba(0, 0, 0, 0)"})]})})),sO=({value:e,icon:t,onIncrement:n,onValueClicked:r,title:i,countTitle:a,dataAction:s})=>d.jsxs(U.ButtonGroup,{className:We("count-button",{"increment-only":!r}),"data-action":s,children:[d.jsx(U.Button,{className:"minimal count-icon",variant:"secondary",onClick:()=>n==null?void 0:n(),title:i,children:t}),d.jsx(U.Button,{className:"minimal count-value",variant:"secondary",onClick:()=>{var u;return(u=r??n)==null?void 0:u()},title:r?a:void 0,children:d.jsx("span",{children:e})})]}),oO=e=>{const t=Ce.useIntl(),{configuration:n}=bt(),{sfwContentMode:r}=n.interface,i=r?d.jsx(Me,{icon:le.faThumbsUp}):d.jsx(aO,{}),a=r?"o_count_sfw":"o_count";return d.jsx(sO,{...e,icon:i,title:t.formatMessage({id:a}),countTitle:t.formatMessage({id:"actions.view_history"}),dataAction:"o-counter"})},uO=O.memo(({image:e,video:t,isPortrait:n,soundActive:r,vttPath:i,onScrubberClick:a,disabled:s,volume:u})=>{const o=O.useRef(null);return O.useEffect(()=>{const c=new IntersectionObserver(l=>{l.forEach(f=>{var g,p,I;f.intersectionRatio>0?(p=(g=o.current)==null?void 0:g.play())==null||p.catch(()=>{}):(I=o.current)==null||I.pause()})});return o.current&&c.observe(o.current),()=>c.disconnect()},[]),O.useEffect(()=>{var c;(c=o==null?void 0:o.current)!=null&&c.volume&&(o.current.volume=r?(u??0)/100:0)},[u,r]),d.jsxs("div",{className:We("scene-card-preview",{portrait:n}),children:[d.jsx("img",{className:"scene-card-preview-image",loading:"lazy",src:e,alt:""}),d.jsx("video",{disableRemotePlayback:!0,playsInline:!0,muted:!r,className:"scene-card-preview-video",loop:!0,preload:"none",ref:o,src:t}),d.jsx(tO,{vttPath:i,onClick:a,disabled:s})]})}),cO=({sceneNumber:e})=>e?d.jsxs(d.Fragment,{children:[d.jsx("hr",{}),e!==void 0&&d.jsxs("span",{className:"scene-group-scene-number",children:[d.jsx(Ce.FormattedMessage,{id:"scene"})," #",e]})]}):null,lO=O.memo(Se("SceneCard.Popovers",e=>{const t=O.useMemo(()=>e.scene.files.length>0?e.scene.files[0]:void 0,[e.scene]),n=O.useMemo(()=>{if(!e.fromGroupId)return;const g=e.scene.groups.find(p=>p.group.id===e.fromGroupId);return(g==null?void 0:g.scene_index)??void 0},[e.fromGroupId,e.scene.groups]);function r(){if(e.scene.tags.length<=0)return;const g=e.scene.tags.map(p=>d.jsx(vw,{tag:p},p.id));return d.jsx(jt,{className:"tag-count",placement:"bottom",content:g,children:d.jsxs(U.Button,{className:"minimal",children:[d.jsx(Me,{icon:le.faTag}),d.jsx("span",{children:e.scene.tags.length})]})})}function i(){if(!(e.scene.performers.length<=0))return d.jsx(yw,{performers:e.scene.performers,linkType:"scene"})}function a(){if(e.scene.groups.length<=0)return;const g=e.scene.groups.map(p=>d.jsx(rO,{group:p.group},p.group.id));return d.jsx(jt,{placement:"bottom",content:g,className:"group-count tag-tooltip",children:d.jsxs(U.Button,{className:"minimal",children:[d.jsx(Me,{icon:le.faFilm}),d.jsx("span",{children:e.scene.groups.length})]})})}function s(){if(e.scene.scene_markers.length<=0)return;const g=e.scene.scene_markers.map(p=>{const I={...p,scene:{id:e.scene.id}};return d.jsx(gw,{marker:I},p.id)});return d.jsx(jt,{className:"marker-count",placement:"bottom",content:g,children:d.jsxs(U.Button,{className:"minimal",children:[d.jsx(Me,{icon:le.faMapMarkerAlt}),d.jsx("span",{children:e.scene.scene_markers.length})]})})}function u(){if(e.scene.o_counter)return d.jsx(oO,{value:e.scene.o_counter})}function o(){if(e.scene.galleries.length<=0)return;const g=e.scene.galleries.map(p=>d.jsx(hw,{gallery:p},p.id));return d.jsx(jt,{className:"gallery-count",placement:"bottom",content:g,children:d.jsxs(U.Button,{className:"minimal",children:[d.jsx(Me,{icon:le.faImages}),d.jsx("span",{children:e.scene.galleries.length})]})})}function c(){if(e.scene.organized)return d.jsx(U.OverlayTrigger,{overlay:d.jsx(U.Tooltip,{id:"organised-tooltip",children:"Organized"}),placement:"bottom",children:d.jsx("div",{className:"organized",children:d.jsx(U.Button,{className:"minimal",children:d.jsx(Me,{icon:le.faBox})})})})}function l(){const g=t?t.fingerprints.find(p=>p.type==="phash"):void 0;if(g)return d.jsx("div",{className:"other-copies extra-scene-info",children:d.jsx(U.Button,{href:ve.makeScenesPHashMatchUrl(g.value),className:"minimal",children:d.jsx(Me,{icon:le.faCopy})})})}function f(){var g;if(!e.compact&&(e.scene.tags.length>0||e.scene.performers.length>0||e.scene.groups.length>0||e.scene.scene_markers.length>0||(g=e.scene)!=null&&g.o_counter||e.scene.galleries.length>0||e.scene.organized||n!==void 0))return d.jsxs(d.Fragment,{children:[d.jsx(cO,{sceneNumber:n}),d.jsx("hr",{}),d.jsxs(U.ButtonGroup,{className:"card-popovers",children:[r(),i(),a(),s(),u(),o(),c(),l()]})]})}return d.jsx(d.Fragment,{children:f()})})),dO=O.memo(Se("SceneCard.Details",e=>d.jsxs("div",{className:"scene-card__details",children:[d.jsx("span",{className:"scene-card__date",children:e.scene.date}),d.jsx("span",{className:"file-path extra-scene-info",children:T_(e.scene)}),d.jsx(rr,{className:"scene-card__description",text:e.scene.details,lineCount:3})]}))),fO=O.memo(Se("SceneCard.Overlays",e=>O.useMemo(()=>d.jsx(nO,{studio:e.scene.studio,disabled:e.selecting}),[e.scene.studio,e.selecting]))),pO=O.memo(Se("SceneCard.SceneSpecs",({scene:e})=>{var n;const t=(n=e.files)==null?void 0:n[0];return t?d.jsxs("div",{className:"scene-specs-overlay",children:[d.jsx("span",{className:"overlay-filesize extra-scene-info",children:d.jsx(iO,{size:t.size})}),t.width&&t.height?d.jsx("span",{className:"overlay-resolution",children:Ne.resolution(t.width,t.height)}):"",t.duration>0?d.jsx("span",{className:"overlay-duration",children:Ne.secondsToTimestamp(t.duration)}):""]}):null})),mO=O.memo(Se("SceneCard.Image",e=>{var o;const t=Ze.useHistory(),{configuration:n}=bt(),r=(n==null?void 0:n.interface.continuePlaylistDefault)??!1,i=O.useMemo(()=>e.scene.files.length>0?e.scene.files[0]:void 0,[e.scene]);function a(){return d.jsx("div",{className:"scene-interactive-speed-overlay",children:e.scene.interactive_speed??""})}const s=O.useCallback(c=>{if(e.selecting)return;const l=e.queue?e.queue.makeLink(e.scene.id,{sceneIndex:e.index,continue:r,start:c}):`/scenes/${e.scene.id}?t=${c}`;t.push(l)},[e.selecting,e.queue,e.scene.id,e.index,r,t]);function u(){const c=i!=null&&i.width?i.width:0;return(i!=null&&i.height?i.height:0)>c}return d.jsxs(d.Fragment,{children:[d.jsx(uO,{image:e.scene.paths.screenshot??void 0,video:e.scene.paths.preview??void 0,isPortrait:u(),soundActive:((o=n==null?void 0:n.interface)==null?void 0:o.soundOnPreview)??!1,volume:(n==null?void 0:n.ui.previewVolume)??ng,vttPath:e.scene.paths.vtt??void 0,onScrubberClick:s,disabled:e.selecting}),d.jsx(Sw,{rating:e.scene.rating100}),d.jsx(pO,{scene:e.scene}),a()]})})),gO=O.memo(Se("SceneCard",e=>{const{configuration:t}=bt(),n=O.useMemo(()=>e.scene.files.length>0?e.scene.files[0]:void 0,[e.scene]);function r(){return!e.compact&&e.zoomIndex!==void 0?`zoom-${e.zoomIndex}`:""}function i(){return e.scene.files.length?"":"fileless"}const a=(t==null?void 0:t.interface.continuePlaylistDefault)??!1,s=e.queue?e.queue.makeLink(e.scene.id,{sceneIndex:e.index,continue:a}):`/scenes/${e.scene.id}`;return d.jsx(Bd,{className:`scene-card ${r()} ${i()}`,url:s,title:xd(e.scene),width:e.width,linkClassName:"scene-card-link",thumbnailSectionClassName:"video-section",resumeTime:e.scene.resume_time??void 0,duration:(n==null?void 0:n.duration)??void 0,interactiveHeatmap:e.scene.interactive_speed?e.scene.paths.interactive_heatmap??void 0:void 0,image:d.jsx(mO,{...e}),overlays:d.jsx(fO,{...e}),details:d.jsx(dO,{...e}),popovers:d.jsx(lO,{...e}),selected:e.selected,selecting:e.selecting,onSelectedChanged:e.onSelectedChanged})}));class Sn{constructor(){Z(this,"query");Z(this,"entries");Z(this,"originalQueryPage");Z(this,"originalQueryPageSize")}static fromListFilterModel(t){const n=new Sn,r=t.clone();return r.itemsPerPage=40,n.originalQueryPage=t.currentPage,n.originalQueryPageSize=t.itemsPerPage,n.query=r,n}static fromSceneIDList(t){const n=new Sn;return n.entries=t.map(r=>({id:Number(r)})),n}static fromSceneIDTimeList(t){const n=new Sn;return n.entries=t.map(r=>({id:Number(r.id),start:r.start})),n}makeQueryParameters(t,n){const r=[];if(this.query){const i=this.query.getEncodedParams();i.sortby&&r.push(`qsort=${i.sortby}`),i.sortdir&&r.push(`qsortd=${i.sortdir}`),i.q&&r.push(`qfq=${i.q}`);for(const s of i.c??[])r.push(`qfc=${s}`);let a=i.p??"1";if(n!==void 0)a=String(n);else if(t!==void 0&&this.originalQueryPage!==void 0&&this.originalQueryPageSize!==void 0){const s=t+(this.originalQueryPage-1)*this.originalQueryPageSize,u=Math.floor(s/this.query.itemsPerPage)+1;a=String(u)}r.push(`qfp=${a}`)}else if(this.entries&&this.entries.length>0){const i=this.entries.map(o=>o.id),a=Array.from(new Set(i)),s=a.length!==i.length,u=this.entries.some(o=>o.start!==void 0);if(s){for(const o of a)r.push(`qs=${o}`);for(const o of this.entries){const c=a.indexOf(o.id);r.push(`qe=${c}${o.start!==void 0?":"+o.start:""}`)}}else{for(const o of this.entries)r.push(`qs=${o.id}`);if(u)for(const o of this.entries)r.push(`qt=${o.start!==void 0?o.start:""}`)}t!==void 0&&r.push(`qi=${t}`)}return r.join("&")}static fromQueryParameters(t){const n=new Sn;if(t.has("qfp")){const r={sortby:t.get("qsort"),sortdir:t.get("qsortd"),q:t.get("qfq"),p:t.get("qfp"),c:t.getAll("qfc")},i=ae.decodeParams(r),a=new ae(X.Scenes);a.configureFromDecodedParams(i),n.query=a}else if(t.has("qs")){const r=t.getAll("qs").map(i=>Number(i));if(t.has("qe"))n.entries=t.getAll("qe").map(i=>{const a=i.indexOf(":"),s=a===-1?i:i.slice(0,a),u=r[Number(s)];if(u===void 0)return;if(a===-1)return{id:u};const o=Number(i.slice(a+1));return Number.isNaN(o)?{id:u}:{id:u,start:o}}).filter(i=>i!==void 0);else{const i=t.has("qt")?t.getAll("qt"):void 0;n.entries=r.map((a,s)=>{const u=i==null?void 0:i[s];if(!u)return{id:a};const o=Number(u);return Number.isNaN(o)?{id:a}:{id:a,start:o}})}}return n}makeLink(t,n){const r=[this.makeQueryParameters(n.sceneIndex,n.newPage)];return n.autoPlay&&r.push("autoplay=true"),n.continue!==void 0&&r.push("continue="+n.continue),n.start!==void 0&&r.push("t="+n.start),`/scenes/${t}${r.length?"?"+r.join("&"):""}`}}const{PluginApi:ct}=window,{React:ki}=ct,{useState:Pe,useEffect:Ai}=ki,hO=ct.libraries.Bootstrap,{Nav:$s,Tab:vO,Button:_t,Form:be,Alert:Li,ProgressBar:bO,Spinner:ji}=hO,{NavLink:yO}=ct.libraries.ReactRouterDOM,{FontAwesomeIcon:SO}=ct.libraries.ReactFontAwesome,xO=ct.libraries.FontAwesomeSolid,Kd="subtitleMarkers",Jd="/subtitle-markers",IO=1e3;function Ps(e,t){return fetch("/graphql",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,variables:t})}).then(n=>n.json()).then(n=>{if(n.errors&&n.errors.length)throw new Error(n.errors.map(r=>r.message).join("; "));return n.data})}function _O(e,t){return Ps(`mutation SubtitleMarkersRunTask($plugin_id: ID!, $description: String, $args_map: Map) {
      runPluginTask(plugin_id: $plugin_id, description: $description, args_map: $args_map)
    }`,{plugin_id:Kd,description:t,args_map:e}).then(n=>n.runPluginTask)}function CO(e){return Ps("query SubtitleMarkersFindJob($id: ID!) { findJob(input: { id: $id }) { status progress error } }",{id:e}).then(t=>t.findJob)}function wO(e){return Ps(`mutation SubtitleMarkersSearch($plugin_id: ID!, $args: Map) {
      runPluginOperation(plugin_id: $plugin_id, args: $args)
    }`,{plugin_id:Kd,args:e}).then(t=>t.runPluginOperation)}const Ms=["READY","RUNNING","STOPPING"],OO={READY:"Starting…",RUNNING:"Searching…",STOPPING:"Stopping…",FINISHED:"Done.",CANCELLED:"Cancelled.",FAILED:"Failed."};function EO({libraryPaths:e}){const[t,n]=Pe(""),[r,i]=Pe(!1),[a,s]=Pe(""),[u,o]=Pe(!1),[c,l]=Pe(!1),[f,g]=Pe(""),[p,I]=Pe(""),[x,b]=Pe(!1),[S,v]=Pe(null),[w,E]=Pe(null),[C,_]=Pe(!1),[h,T]=Pe(null),[D,$]=Pe(null),[L,G]=Pe(null),[re,ne]=Pe(null),[P,{width:k}]=RC(),F=VC(k,1,[280,340,480,640]),V=x||w!==null&&Ms.includes(w.status),Q=V||C,M=(r?e.length>0:!!t.trim())&&!!a.trim()&&(!c||!!f)&&!Q;Ai(()=>{if(!S)return;let j=!1,me;const ge=()=>{CO(S).then(Be=>{j||(E(Be),Be&&Ms.includes(Be.status)&&(me=setTimeout(ge,IO)))}).catch(Be=>{j||E({status:"FAILED",progress:null,error:String(Be&&Be.message?Be.message:Be)})})};return ge(),()=>{j=!0,clearTimeout(me)}},[S]);function A(){return r?{allLibraries:"true"}:{path:t.trim()}}function W(){const j=a.trim();b(!0),E(null),_O({...A(),search:j,wholeWord:String(u),tagId:f,title:p.trim()},`Searching subtitles for "${j}"`).then(me=>{b(!1),v(me)}).catch(me=>{b(!1),E({status:"FAILED",progress:null,error:String(me&&me.message?me.message:me)})})}function H(){_(!0),$(null),T(null),G(null),ne(null),wO({mode:"search",...A(),search:a.trim(),wholeWord:String(u)}).then(j=>{_(!1),T(j.results),Y(j.results)}).catch(j=>{_(!1),$(String(j&&j.message?j.message:j))})}function Y(j){const me=Array.from(new Set(j.map(ge=>Number(ge.sceneId)))).filter(ge=>!Number.isNaN(ge));if(me.length===0){G(new Map);return}Hm(me).then(ge=>{var Ut,Ct;const Be=new Map;(((Ct=(Ut=ge.data)==null?void 0:Ut.findScenes)==null?void 0:Ct.scenes)??[]).forEach(qi=>Be.set(qi.id,qi)),G(Be)}).catch(ge=>{ne(String(ge&&ge.message?ge.message:ge)),G(new Map)})}function te(j,me){const ge=j.target;!ge.closest(".scene-card-link")&&!ge.closest(".card-section-title")||(j.preventDefault(),j.stopPropagation(),window.open(`/scenes/${me.sceneId}?t=${me.seconds}`,"_blank"))}function B(){c?W():H()}function se(){if(!w)return null;const j=Math.round((w.progress||0)*100);return d.jsxs("div",{className:"subtitle-markers-status mt-3",children:[Ms.includes(w.status)&&d.jsx(bO,{now:j,label:`${j}%`,animated:!0}),d.jsxs("p",{className:w.status==="FAILED"?"text-danger":"text-muted",children:[OO[w.status],w.status==="FINISHED"&&" Marker preview generation has been queued for anything created. See Settings → Logs for how many markers were created."]}),w.error?d.jsx(Li,{variant:"danger",children:w.error}):null]})}function qe(){return C?d.jsxs("div",{className:"subtitle-markers-results mt-3 text-muted",children:[d.jsx(ji,{animation:"border",size:"sm",className:"mr-2"}),"Searching…"]}):D?d.jsx(Li,{variant:"danger",className:"mt-3",children:D}):h===null?null:h.length===0?d.jsx("p",{className:"subtitle-markers-results mt-3 text-muted",children:"No matches found."}):d.jsxs("div",{className:"subtitle-markers-results mt-3",children:[d.jsxs("p",{className:"text-muted",children:[h.length," match",h.length===1?"":"es",":"]}),d.jsx(_t,{size:"sm",variant:"secondary",className:"mb-2",onClick:()=>DO(h),children:"Play All in Queue"}),re?d.jsxs(Li,{variant:"warning",className:"mt-2",children:["Couldn't load scene previews (",re,") - showing plain links instead."]}):null,L?d.jsx("div",{className:"row justify-content-center subtitle-markers-result-cards",ref:P,style:{gap:"12px"},children:h.map((j,me)=>{const ge=L.get(j.sceneId);return ge?d.jsxs("div",{className:"subtitle-markers-result-card",style:F?{width:F}:void 0,onClickCapture:Be=>te(Be,j),children:[d.jsx(gO,{scene:ge,width:F}),d.jsx(rr,{className:"text-muted subtitle-markers-result-text",text:`@ ${Ne.secondsToTimestamp(j.seconds)} — ${j.text}`,lineCount:2})]},me):d.jsxs("div",{className:"subtitle-markers-result subtitle-markers-result-fallback",style:F?{width:F}:void 0,children:[d.jsxs("a",{href:`/scenes/${j.sceneId}?t=${j.seconds}`,target:"_blank",rel:"noreferrer",children:[j.sceneTitle||`Scene ${j.sceneId}`," @ ",Ne.secondsToTimestamp(j.seconds)]}),d.jsx(rr,{className:"text-muted subtitle-markers-result-text",text:j.text,lineCount:2})]},me)})}):d.jsxs("div",{className:"text-muted mt-2",children:[d.jsx(ji,{animation:"border",size:"sm",className:"mr-2"}),"Loading scene previews…"]})]})}return d.jsxs("div",{className:"subtitle-markers-page container-fluid",children:[d.jsx("h3",{children:"Subtitle Markers"}),d.jsx("p",{className:"text-muted",children:"Searches every .srt file under a folder (or every library) and its subfolders for a phrase - matched to the video file next to each subtitle, the same way Stash itself associates captions. Either jump straight to each match's timestamp, or (optionally) create a scene marker for each one, with preview generation queued automatically afterwards."}),d.jsxs(be.Group,{className:"subtitle-markers-folder",children:[d.jsx(be.Label,{children:"Folder"}),d.jsx(be.Check,{type:"checkbox",id:"subtitle-markers-all-libraries",className:"mb-2",label:"Search all libraries",checked:r,onChange:j=>i(j.target.checked),disabled:Q}),r?d.jsx(be.Text,{className:"text-muted subtitle-markers-all-libraries-list",children:e.length>0?`Searching every library, recursively: ${e.join(", ")}`:"No libraries are configured in Stash."}):d.jsxs(d.Fragment,{children:[d.jsx(lw,{currentDirectory:t,onChangeDirectory:n,defaultDirectories:e}),d.jsx(be.Text,{className:"text-muted",children:"Searched recursively, including subfolders."})]})]}),d.jsxs(be.Group,{children:[d.jsx(be.Label,{children:"Search text"}),d.jsx(be.Control,{type:"text",value:a,placeholder:"Text to find in subtitle lines",onChange:j=>s(j.target.value),disabled:Q}),d.jsx(be.Text,{className:"text-muted",children:"Case-insensitive, matched as plain text."})]}),d.jsxs(be.Group,{children:[d.jsx(be.Check,{type:"checkbox",id:"subtitle-markers-whole-word",label:"Match whole word only",checked:u,disabled:Q,onChange:j=>o(j.target.checked)}),d.jsx(be.Text,{className:"text-muted",children:'Off by default: "fail" also matches "failed"/"failure". Turn this on to require the exact word (or phrase), so "fail" no longer matches those.'})]}),d.jsxs(be.Group,{children:[d.jsx(be.Check,{type:"checkbox",id:"subtitle-markers-create-markers",label:"Also create scene markers",checked:c,disabled:Q,onChange:j=>l(j.target.checked)}),d.jsx(be.Text,{className:"text-muted",children:"Off by default: just search, and link to each match's timestamp. Turn this on to also create a scene marker for each match, using the tag and title below."})]}),c&&d.jsxs(d.Fragment,{children:[d.jsxs(be.Group,{children:[d.jsx(be.Label,{children:"Tag"}),d.jsx(uw,{ids:f?[f]:[],isDisabled:Q,onSelect:j=>{var me;return g(((me=j[0])==null?void 0:me.id)||"")}})]}),d.jsxs(be.Group,{children:[d.jsx(be.Label,{children:"Marker title"}),d.jsx(be.Control,{type:"text",value:p,placeholder:a||"Marker title",onChange:j=>I(j.target.value),disabled:Q}),d.jsx(be.Text,{className:"text-muted",children:"Defaults to the search text if left blank."})]})]}),d.jsx(_t,{onClick:B,disabled:!M,children:V?"Running…":C?"Searching…":c?"Search & Create Markers":"Search"}),c?se():qe()]})}function TO(){const{data:e}=Rf();if(!(e!=null&&e.configuration))return d.jsx(ji,{animation:"border",className:"mt-3"});const t=e.configuration.general.stashes.filter(n=>!n.excludeVideo).map(n=>n.path);return d.jsx(ap,{children:d.jsx(Wf,{configuration:e.configuration,children:d.jsx(EO,{libraryPaths:t})})})}ct.register.route(Jd,TO),ct.patch.before("MainNavBar.MenuItems",e=>{try{const t=d.jsx($s.Link,{as:"div",className:"col-4 col-sm-3 col-md-2 col-lg-auto",children:d.jsx(yO,{exact:!0,to:Jd,activeClassName:"active",children:d.jsxs(_t,{className:"minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center",children:[d.jsx(SO,{icon:xO.faClosedCaptioning,className:"fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0"}),d.jsx("span",{children:"Marker"})]})})},"subtitle-markers");return[{...e,children:[...ki.Children.toArray(e.children),t]}]}catch(t){return console.error("[SubtitleMarkers] Failed to patch nav bar:",t),[e]}});function Xd(e){if(!e||e.length===0)return;const t=Sn.fromSceneIDTimeList(e.map(n=>({id:n.sceneId,start:n.seconds})));window.open(t.makeLink(e[0].sceneId,{sceneIndex:0,start:e[0].seconds,autoPlay:!0,continue:!0}),"_blank")}function DO(e){Xd(e)}const $O=1e3;async function PO(e,t,n){var r,i;try{const s=(n?n(t.clone()):t).clone();s.currentPage=1,s.itemsPerPage=$O;const c=(((i=(r=(await Wm(s)).data)==null?void 0:r.findSceneMarkers)==null?void 0:i.scene_markers)??[]).map(l=>({sceneId:l.scene.id,seconds:l.seconds}));Xd(c)}catch(a){console.error("[SubtitleMarkers] Failed to start the filtered-markers queue:",a)}}ct.patch.before("FilteredSceneMarkerList",e=>{try{const t=e.filterHook,n={text:"Play All (Filtered)",onClick:(r,i)=>PO(r,i,t),isDisplayed:r=>{var i,a;return(((a=(i=r==null?void 0:r.data)==null?void 0:i.findSceneMarkers)==null?void 0:a.count)??0)>0}};return[{...e,extraOperations:[...e.extraOperations||[],n]}]}catch(t){return console.error('[SubtitleMarkers] Failed to add the "Play All (Filtered)" operation:',t),[e]}});const Zd="subtitle-markers-subtitles-tab";function ef(e){var t;return!!((t=e==null?void 0:e.paths)!=null&&t.caption&&(e!=null&&e.captions)&&e.captions.length>0)}function MO(e){return e.replace(/<[^>]*>/g,"").replace(/\s+/g," ").trim()}function FO(e,t){const n=e.player,r=n?n.textTracks():null;if(!r)return null;let i=null;for(let a=0;a<r.length;a++){const s=r[a];if(!(s.kind!=="captions"&&s.kind!=="subtitles")&&(i||(i=s),t&&s.language===t))return s}return i}function tf(e,t,n){return`subtitleMarkersOffset:${e}:${t}:${n}`}function NO({scene:e,setTimestamp:t}){const n=e.captions||[],[r,i]=Pe(0),a=n[r],[s,u]=Pe(null),[o,c]=Pe(0),[l,f]=Pe(null);Ai(()=>{if(a)try{const p=window.localStorage.getItem(tf(e.id,a.language_code,a.caption_type));c(p&&Number(p)||0)}catch{c(0)}},[e.id,a==null?void 0:a.language_code,a==null?void 0:a.caption_type]),Ai(()=>{if(!a)return;u(null),f(null);let p=!1,I=0;function x(){if(p)return;const b=document.querySelector(".video-js"),S=b?FO(b,a.language_code):null;if(!S){if(I++,I>40){f("Couldn't find the subtitle track in the player - try reloading the page.");return}setTimeout(x,250);return}S.mode==="disabled"&&(S.mode="hidden");function v(){if(p)return;const w=S.cues;if(!w||w.length===0){if(I++,I>40){f("The subtitle track loaded but has no cues.");return}setTimeout(x,250);return}const E=[];for(let C=0;C<w.length;C++){const _=w[C];E.push({cue:_,originalStart:_.startTime,originalEnd:_.endTime})}u(E)}S.cues&&S.cues.length>0?v():(S.addEventListener("loadeddata",v,{once:!0}),setTimeout(v,300))}return x(),()=>{p=!0}},[e.id,a==null?void 0:a.language_code,a==null?void 0:a.caption_type]),Ai(()=>{if(s)for(const p of s)p.cue.startTime=Math.max(0,p.originalStart+o),p.cue.endTime=Math.max(0,p.originalEnd+o)},[s,o]);function g(p){const I=Math.round(p*10)/10;if(c(I),a)try{window.localStorage.setItem(tf(e.id,a.language_code,a.caption_type),String(I))}catch{}}return a?d.jsxs("div",{className:"subtitle-markers-subtitles-panel",children:[n.length>1&&d.jsxs(be.Group,{children:[d.jsx(be.Label,{children:"Language"}),d.jsx(be.Control,{as:"select",value:r,onChange:p=>i(Number(p.target.value)),children:n.map((p,I)=>d.jsxs("option",{value:I,children:[p.language_code," (",p.caption_type,")"]},I))})]}),d.jsxs("div",{className:"subtitle-markers-offset-controls d-flex align-items-center mb-2",children:[d.jsx("span",{className:"mr-2",children:"Sync offset:"}),d.jsx(_t,{size:"sm",variant:"secondary",className:"mr-1",onClick:()=>g(o-1),children:"-1s"}),d.jsx(_t,{size:"sm",variant:"secondary",className:"mr-1",onClick:()=>g(o-.1),children:"-0.1s"}),d.jsx(be.Control,{type:"number",step:"0.1",value:o,onChange:p=>g(Number(p.target.value)||0),style:{width:"90px"},className:"mx-1 d-inline-block"}),d.jsx(_t,{size:"sm",variant:"secondary",className:"mx-1",onClick:()=>g(o+.1),children:"+0.1s"}),d.jsx(_t,{size:"sm",variant:"secondary",className:"mr-2",onClick:()=>g(o+1),children:"+1s"}),o!==0&&d.jsx(_t,{size:"sm",variant:"outline-secondary",onClick:()=>g(0),children:"Reset"})]}),d.jsx(be.Text,{className:"text-muted mb-3 d-block",children:"Shifts the subtitles actually shown during playback (positive = later, negative = earlier), not just this list - remembered for this scene."}),l?d.jsx(Li,{variant:"danger",children:l}):null,!l&&!s&&d.jsxs("div",{className:"text-muted",children:[d.jsx(ji,{animation:"border",size:"sm",className:"mr-2"}),"Loading subtitles…"]}),s&&s.length===0&&d.jsx("p",{className:"text-muted",children:"No cues found in this subtitle track."}),s&&s.length>0&&d.jsx("ul",{className:"list-unstyled subtitle-markers-subtitles-list",children:s.map((p,I)=>{const x=Math.max(0,p.originalStart+o);return d.jsxs("li",{className:"subtitle-markers-subtitles-cue",onClick:()=>t(x,!0),style:{cursor:"pointer"},children:[d.jsx("span",{className:"text-muted mr-2",children:Ne.secondsToTimestamp(x)}),MO(p.cue.text)]},I)})})]}):null}ct.patch.before("ScenePage.Tabs",e=>{try{if(!ef(e.scene))return[e];const t=d.jsx($s.Item,{children:d.jsx($s.Link,{eventKey:Zd,children:"Subtitles"})},"subtitle-markers-subtitles-tab-nav");return[{...e,children:[...ki.Children.toArray(e.children),t]}]}catch(t){return console.error("[SubtitleMarkers] Failed to add the Subtitles tab:",t),[e]}}),ct.patch.before("ScenePage.TabContent",e=>{try{if(!ef(e.scene))return[e];const t=d.jsx(vO.Pane,{eventKey:Zd,children:d.jsx(NO,{scene:e.scene,setTimestamp:e.setTimestamp})},"subtitle-markers-subtitles-tab-pane");return[{...e,children:[...ki.Children.toArray(e.children),t]}]}catch(t){return console.error("[SubtitleMarkers] Failed to add the Subtitles tab content:",t),[e]}})})(PluginApi.React,PluginApi.libraries.Apollo,PluginApi.libraries.FontAwesomeSolid,PluginApi.libraries.Bootstrap,PluginApi.libraries.Intl,PluginApi.libraries.ReactFontAwesome,PluginApi.libraries.ReactSelect,PluginApi.ReactDOM,PluginApi.libraries.ReactRouterDOM);
