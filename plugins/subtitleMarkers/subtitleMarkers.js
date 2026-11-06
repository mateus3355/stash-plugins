var WO=Object.defineProperty;var YO=(O,m,ce)=>m in O?WO(O,m,{enumerable:!0,configurable:!0,writable:!0,value:ce}):O[m]=ce;var ne=(O,m,ce)=>YO(O,typeof m!="symbol"?m+"":m,ce);(function(O,m,ce,U,Se,lf,Bi,df,Ke){"use strict";var cf;function js(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const K=js(O),bn=js(m);var pr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ff(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Rs={exports:{}},yn={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Vs=Object.getOwnPropertySymbols,pf=Object.prototype.hasOwnProperty,mf=Object.prototype.propertyIsEnumerable;function gf(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function hf(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}hf();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vf=O,qs=60103;if(yn.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var Gs=Symbol.for;qs=Gs("react.element"),yn.Fragment=Gs("react.fragment")}var bf=vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yf=Object.prototype.hasOwnProperty,Sf={key:!0,ref:!0,__self:!0,__source:!0};function Us(e,t,n){var r,i={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)yf.call(t,r)&&!Sf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:qs,type:e,key:a,ref:s,props:i,_owner:bf.current}}yn.jsx=Us,yn.jsxs=Us,Rs.exports=yn;var d=Rs.exports;const Sn={};var mr=(e=>(e.Cut="CUT",e.Uncut="UNCUT",e))(mr||{}),y=(e=>(e.Between="BETWEEN",e.Equals="EQUALS",e.Excludes="EXCLUDES",e.GreaterThan="GREATER_THAN",e.Includes="INCLUDES",e.IncludesAll="INCLUDES_ALL",e.IsNull="IS_NULL",e.LessThan="LESS_THAN",e.MatchesRegex="MATCHES_REGEX",e.NotBetween="NOT_BETWEEN",e.NotEquals="NOT_EQUALS",e.NotMatchesRegex="NOT_MATCHES_REGEX",e.NotNull="NOT_NULL",e))(y||{}),X=(e=>(e.Galleries="GALLERIES",e.Groups="GROUPS",e.Images="IMAGES",e.Movies="MOVIES",e.Performers="PERFORMERS",e.Scenes="SCENES",e.SceneMarkers="SCENE_MARKERS",e.Studios="STUDIOS",e.Tags="TAGS",e))(X||{}),Ie=(e=>(e.Female="FEMALE",e.Intersex="INTERSEX",e.Male="MALE",e.NonBinary="NON_BINARY",e.TransgenderFemale="TRANSGENDER_FEMALE",e.TransgenderMale="TRANSGENDER_MALE",e))(Ie||{}),gr=(e=>(e.Landscape="LANDSCAPE",e.Portrait="PORTRAIT",e.Square="SQUARE",e))(gr||{}),Le=(e=>(e.EightK="EIGHT_K",e.FiveK="FIVE_K",e.FourK="FOUR_K",e.FullHd="FULL_HD",e.Huge="HUGE",e.Low="LOW",e.QuadHd="QUAD_HD",e.R360P="R360P",e.SevenK="SEVEN_K",e.SixK="SIX_K",e.Standard="STANDARD",e.StandardHd="STANDARD_HD",e.VeryLow="VERY_LOW",e.VrHd="VR_HD",e.WebHd="WEB_HD",e))(Le||{}),qe=(e=>(e.Asc="ASC",e.Desc="DESC",e))(qe||{});const zs=m.gql`
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
    `,Hs=m.gql`
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
    `,Ws=m.gql`
    fragment ConfigDLNAData on ConfigDLNAResult {
  serverName
  enabled
  port
  whitelistedIPs
  interfaces
  videoSortOrder
}
    `,Ys=m.gql`
    fragment ConfigScrapingData on ConfigScrapingResult {
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  excludeTagPatterns
}
    `,xf=m.gql`
    fragment ScraperSourceData on ScraperSource {
  stash_box_index
  stash_box_endpoint
  scraper_id
}
    `,If=m.gql`
    fragment IdentifyFieldOptionsData on IdentifyFieldOptions {
  field
  strategy
  createMissing
}
    `,_f=m.gql`
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
    ${If}`,Qs=m.gql`
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
    ${xf}
${_f}`,wf=m.gql`
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
    ${zs}
${Hs}
${Ws}
${Ys}
${Qs}`;m.gql`
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
    `,Cf=m.gql`
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
    `,Of=m.gql`
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
    `,Ef=m.gql`
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
    `,Ks=m.gql`
    fragment SlimGroupData on Group {
  id
  name
  front_image_path
  rating100
}
    `,Tf=m.gql`
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
${Ks}`,Js=m.gql`
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
    `,hr=m.gql`
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
    ${Js}`,Xs=m.gql`
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
    `,Zs=m.gql`
    fragment FolderData on Folder {
  id
  basename
  path
}
    `,qi=m.gql`
    fragment GalleryChapterData on GalleryChapter {
  id
  title
  image_index
  gallery {
    id
  }
}
    `,gt=m.gql`
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
    ${st}`,eo=m.gql`
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
    ${eo}`,Vt=m.gql`
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
    ${Xs}
${Zs}
${qi}
${xn}
${st}
${gt}
${In}`,Df=m.gql`
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
    ${Vt}
${xn}
${st}
${gt}
${Js}`,to=m.gql`
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
    `,no=m.gql`
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
    `;const $f=m.gql`
    fragment SelectPerformerData on Performer {
  id
  name
  disambiguation
  alias_list
  image_path
  birthdate
  death_date
}
    `,Mf=m.gql`
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
    `,xt=m.gql`
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
    ${Mf}`,ro=m.gql`
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
    ${Xs}
${Zs}`,_n=m.gql`
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
${Ks}`,It=m.gql`
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
    ${eo}
${xt}
${ro}
${xn}
${_n}
${st}
${gt}`,Pf=m.gql`
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
    `,Ff=m.gql`
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
    ${Je}`,Gi=m.gql`
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
    ${Je}`,io=m.gql`
    fragment ScrapedGroupStudioData on ScrapedStudio {
  stored_id
  name
  urls
}
    `,Nf=m.gql`
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
    ${io}
${Je}`,vr=m.gql`
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
    ${Je}`,wn=m.gql`
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
    ${Je}`,ao=m.gql`
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
    ${io}
${Je}`,Ui=m.gql`
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
    ${vr}
${Je}
${wn}
${ao}`,so=m.gql`
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
    ${vr}
${Je}
${wn}`,oo=m.gql`
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
    ${vr}
${Je}
${wn}`;m.gql`
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
    ${vr}
${Je}
${wn}
${ao}`,m.gql`
    fragment ScrapedStashBoxPerformerData on StashBoxPerformerQueryResult {
  query
  results {
    ...ScrapedScenePerformerData
  }
}
    ${wn}`;const Cn=m.gql`
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
    ${st}`,kf=m.gql`
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
    `,Gt=m.gql`
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
    ${st}`,Af=m.gql`
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
    `,Lf=m.gql`
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
    ${zs}`,m.gql`
    mutation ConfigureInterface($input: ConfigInterfaceInput!) {
  configureInterface(input: $input) {
    ...ConfigInterfaceData
  }
}
    ${Hs}`,m.gql`
    mutation ConfigureDLNA($input: ConfigDLNAInput!) {
  configureDLNA(input: $input) {
    ...ConfigDLNAData
  }
}
    ${Ws}`,m.gql`
    mutation ConfigureScraping($input: ConfigScrapingInput!) {
  configureScraping(input: $input) {
    ...ConfigScrapingData
  }
}
    ${Ys}`,m.gql`
    mutation ConfigureDefaults($input: ConfigDefaultSettingsInput!) {
  configureDefaults(input: $input) {
    ...ConfigDefaultSettingsData
  }
}
    ${Qs}`,m.gql`
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
    ${qi}`,m.gql`
    mutation GalleryChapterUpdate($id: ID!, $title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterUpdate(
    input: {id: $id, title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${qi}`,m.gql`
    mutation GalleryChapterDestroy($id: ID!) {
  galleryChapterDestroy(id: $id)
}
    `,m.gql`
    mutation GalleryCreate($input: GalleryCreateInput!) {
  galleryCreate(input: $input) {
    ...GalleryData
  }
}
    ${Vt}`,m.gql`
    mutation GalleryUpdate($input: GalleryUpdateInput!) {
  galleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${Vt}`,m.gql`
    mutation BulkGalleryUpdate($input: BulkGalleryUpdateInput!) {
  bulkGalleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${Vt}`,m.gql`
    mutation GalleriesUpdate($input: [GalleryUpdateInput!]!) {
  galleriesUpdate(input: $input) {
    ...GalleryData
  }
}
    ${Vt}`,m.gql`
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
    ${hr}`,m.gql`
    mutation BulkImageUpdate($input: BulkImageUpdateInput!) {
  bulkImageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${hr}`,m.gql`
    mutation ImagesUpdate($input: [ImageUpdateInput!]!) {
  imagesUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${hr}`,m.gql`
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
    ${gt}`,m.gql`
    mutation PerformerUpdate($input: PerformerUpdateInput!) {
  performerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${gt}`,m.gql`
    mutation BulkPerformerUpdate($input: BulkPerformerUpdateInput!) {
  bulkPerformerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${gt}`,m.gql`
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
    ${xt}`,m.gql`
    mutation SceneMarkerUpdate($id: ID!, $title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerUpdate(
    input: {id: $id, title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${xt}`,m.gql`
    mutation BulkSceneMarkerUpdate($input: BulkSceneMarkerUpdateInput!) {
  bulkSceneMarkerUpdate(input: $input) {
    ...SceneMarkerData
  }
}
    ${xt}`,m.gql`
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
    ${It}`,m.gql`
    mutation SceneUpdate($input: SceneUpdateInput!) {
  sceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${It}`,m.gql`
    mutation BulkSceneUpdate($input: BulkSceneUpdateInput!) {
  bulkSceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${It}`,m.gql`
    mutation ScenesUpdate($input: [SceneUpdateInput!]!) {
  scenesUpdate(input: $input) {
    ...SceneData
  }
}
    ${It}`,m.gql`
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
    ${Cn}`,m.gql`
    mutation StudioUpdate($input: StudioUpdateInput!) {
  studioUpdate(input: $input) {
    ...StudioData
  }
}
    ${Cn}`,m.gql`
    mutation BulkStudioUpdate($input: BulkStudioUpdateInput!) {
  bulkStudioUpdate(input: $input) {
    ...StudioData
  }
}
    ${Cn}`,m.gql`
    mutation StudioDestroy($id: ID!) {
  studioDestroy(input: {id: $id})
}
    `,m.gql`
    mutation StudiosDestroy($ids: [ID!]!) {
  studiosDestroy(ids: $ids)
}
    `;const jf=m.gql`
    mutation TagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) {
    ...TagData
  }
}
    ${Gt}`;function Bf(e){const t={...Sn,...e};return bn.useMutation(jf,t)}m.gql`
    mutation TagDestroy($id: ID!) {
  tagDestroy(input: {id: $id})
}
    `,m.gql`
    mutation TagsDestroy($ids: [ID!]!) {
  tagsDestroy(ids: $ids)
}
    `;const Rf=m.gql`
    mutation TagUpdate($input: TagUpdateInput!) {
  tagUpdate(input: $input) {
    ...TagData
  }
}
    ${Gt}`;function Vf(e){const t={...Sn,...e};return bn.useMutation(Rf,t)}m.gql`
    mutation BulkTagUpdate($input: BulkTagUpdateInput!) {
  bulkTagUpdate(input: $input) {
    ...TagData
  }
}
    ${Gt}`,m.gql`
    mutation TagsMerge($source: [ID!]!, $destination: ID!, $values: TagUpdateInput) {
  tagsMerge(input: {source: $source, destination: $destination, values: $values}) {
    ...TagData
  }
}
    ${Gt}`,m.gql`
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
    ${Cf}`,m.gql`
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
    ${Ri}`;const qf=m.gql`
    query FindGalleries($filter: FindFilterType, $gallery_filter: GalleryFilterType) {
  findGalleries(gallery_filter: $gallery_filter, filter: $filter) {
    count
    galleries {
      ...SlimGalleryData
    }
  }
}
    ${ro}`;m.gql`
    query FindGallery($id: ID!) {
  findGallery(id: $id) {
    ...GalleryData
  }
}
    ${Vt}`,m.gql`
    query FindGalleriesForSelect($filter: FindFilterType, $gallery_filter: GalleryFilterType, $ids: [ID!]) {
  findGalleries(filter: $filter, gallery_filter: $gallery_filter, ids: $ids) {
    count
    galleries {
      ...SelectGalleryData
    }
  }
}
    ${Of}`,m.gql`
    query FindGalleryImageID($id: ID!, $index: Int!) {
  findGallery(id: $id) {
    image(index: $index) {
      id
    }
  }
}
    `;const Gf=m.gql`
    query FindImages($filter: FindFilterType, $image_filter: ImageFilterType, $image_ids: [Int!]) {
  findImages(filter: $filter, image_filter: $image_filter, image_ids: $image_ids) {
    count
    images {
      ...SlimImageData
    }
  }
}
    ${hr}`;m.gql`
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
    ${Df}`,m.gql`
    query JobQueue {
  jobQueue {
    ...JobData
  }
}
    ${to}`,m.gql`
    query FindJob($input: FindJobInput!) {
  findJob(input: $input) {
    ...JobData
  }
}
    ${to}`,m.gql`
    query SceneWall($q: String) {
  sceneWall(q: $q) {
    ...SceneData
  }
}
    ${It}`,m.gql`
    query MarkerWall($q: String) {
  markerWall(q: $q) {
    ...SceneMarkerData
  }
}
    ${xt}`,m.gql`
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
    ${no}`,m.gql`
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
    `;const Uf=m.gql`
    query FindGroups($filter: FindFilterType, $group_filter: GroupFilterType) {
  findGroups(filter: $filter, group_filter: $group_filter) {
    count
    groups {
      ...ListGroupData
    }
  }
}
    ${Tf}`;m.gql`
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
    ${Ef}`;const zf=m.gql`
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
    ${gt}`;m.gql`
    query FindPerformer($id: ID!) {
  findPerformer(id: $id) {
    ...PerformerData
  }
}
    ${gt}`,m.gql`
    query FindPerformersForSelect($filter: FindFilterType, $performer_filter: PerformerFilterType, $ids: [ID!]) {
  findPerformers(filter: $filter, performer_filter: $performer_filter, ids: $ids) {
    count
    performers {
      ...SelectPerformerData
    }
  }
}
    ${$f}`,m.gql`
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
    ${qt}`;const uo=m.gql`
    query FindSceneMarkers($filter: FindFilterType, $scene_marker_filter: SceneMarkerFilterType) {
  findSceneMarkers(filter: $filter, scene_marker_filter: $scene_marker_filter) {
    count
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${xt}`,co=m.gql`
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
    ${It}`,m.gql`
    query FindFullScenes($ids: [Int!]) {
  findScenes(scene_ids: $ids) {
    scenes {
      ...SceneData
    }
  }
}
    ${It}`,m.gql`
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
    ${xt}`,m.gql`
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
    ${Pf}`,m.gql`
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
    ${Ff}`,m.gql`
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
    ${Gi}`,m.gql`
    query ScrapeMultiPerformers($source: ScraperSourceInput!, $input: ScrapeMultiPerformersInput!) {
  scrapeMultiPerformers(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${Gi}`,m.gql`
    query ScrapePerformerURL($url: String!) {
  scrapePerformerURL(url: $url) {
    ...ScrapedPerformerData
  }
}
    ${Gi}`,m.gql`
    query ScrapeSingleScene($source: ScraperSourceInput!, $input: ScrapeSingleSceneInput!) {
  scrapeSingleScene(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${Ui}`,m.gql`
    query ScrapeMultiScenes($source: ScraperSourceInput!, $input: ScrapeMultiScenesInput!) {
  scrapeMultiScenes(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${Ui}`,m.gql`
    query ScrapeSceneURL($url: String!) {
  scrapeSceneURL(url: $url) {
    ...ScrapedSceneData
  }
}
    ${Ui}`,m.gql`
    query ScrapeSingleGallery($source: ScraperSourceInput!, $input: ScrapeSingleGalleryInput!) {
  scrapeSingleGallery(source: $source, input: $input) {
    ...ScrapedGalleryData
  }
}
    ${so}`,m.gql`
    query ScrapeSingleImage($source: ScraperSourceInput!, $input: ScrapeSingleImageInput!) {
  scrapeSingleImage(source: $source, input: $input) {
    ...ScrapedImageData
  }
}
    ${oo}`,m.gql`
    query ScrapeGalleryURL($url: String!) {
  scrapeGalleryURL(url: $url) {
    ...ScrapedGalleryData
  }
}
    ${so}`,m.gql`
    query ScrapeImageURL($url: String!) {
  scrapeImageURL(url: $url) {
    ...ScrapedImageData
  }
}
    ${oo}`,m.gql`
    query ScrapeGroupURL($url: String!) {
  scrapeGroupURL(url: $url) {
    ...ScrapedGroupData
  }
}
    ${Nf}`,m.gql`
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
    ${qt}`;const Hf=m.gql`
    query Configuration {
  configuration {
    ...ConfigData
  }
}
    ${wf}`;function Wf(e){const t={...Sn,...e};return bn.useQuery(Hf,t)}const Yf=m.gql`
    query Directory($path: String) {
  directory(path: $path) {
    path
    parent
    directories
  }
}
    `;function Qf(e){const t={...Sn,...e};return bn.useQuery(Yf,t)}m.gql`
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
    ${Cn}`,m.gql`
    query FindStudio($id: ID!) {
  findStudio(id: $id) {
    ...StudioData
  }
}
    ${Cn}`,m.gql`
    query FindStudiosForSelect($filter: FindFilterType, $studio_filter: StudioFilterType, $ids: [ID!]) {
  findStudios(filter: $filter, studio_filter: $studio_filter, ids: $ids) {
    count
    studios {
      ...SelectStudioData
    }
  }
}
    ${kf}`;const lo=m.gql`
    query FindTags($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...TagData
    }
  }
}
    ${Gt}`,Kf=m.gql`
    query FindTag($id: ID!) {
  findTag(id: $id) {
    ...TagData
  }
}
    ${Gt}`;function Jf(e){const t={...Sn,...e};return bn.useQuery(Kf,t)}const fo=m.gql`
    query FindTagsForSelect($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...SelectTagData
    }
  }
}
    ${Af}`;m.gql`
    query FindTagsForList($filter: FindFilterType, $tag_filter: TagFilterType) {
  findTags(filter: $filter, tag_filter: $tag_filter) {
    count
    tags {
      ...TagListData
    }
  }
}
    ${Lf}`,m.gql`
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
    ${no}`;const Xf=m.gql`
    subscription ScanCompleteSubscribe {
  scanCompleteSubscribe
}
    `,po=O.createContext(null),ht=()=>{const e=O.useContext(po);if(e===null)throw new Error("useConfigurationContext must be used within a ConfigurationProvider");return e},Zf=({configuration:e,children:t})=>d.jsx(po.Provider,{value:{configuration:e},children:t}),mo={},ep={},go={},tp={};function np(e,t){if(mo[e])throw new Error("Component "+e+" has already been registered");return mo[e]=t,t}function rp(e,t,n,r){if(!e.length)return t.apply(n,r);let i=1;function a(){if(i>=e.length)return t;const s=e[i++];return new Proxy(s,{apply:(u,o,c)=>u.apply(o,c.concat(a()))})}return e[0].apply(n,r.concat(a()))}function ho(e,t){return new Proxy(t,{apply(n,r,i){let a;for(const s of ep[e]||[])i=s.apply(r,i);go[e]?a=rp(go[e],n,r,i):a=n.apply(r,i);for(const s of tp[e]||[])a=s.apply(r,i.concat(a));return a}})}function he(e,t){const n=ho(e,t);return np(e,n),n}const Ee=he("Icon",e=>d.jsx(lf.FontAwesomeIcon,{...e,className:`fa-icon ${e.className??""}`})),ip=()=>{},ap=({children:e,show:t,icon:n,header:r,cancel:i,accept:a,onHide:s,isRunning:u,disabled:o,modalProps:c,dialogClassName:l,footerButtons:f,leftFooterButtons:g})=>d.jsxs(U.Modal,{className:"ModalComponent",keyboard:!1,onHide:s??ip,show:t,dialogClassName:l,...c,children:[d.jsxs(U.Modal.Header,{children:[n?d.jsx(Ee,{icon:n}):"",d.jsx("span",{children:r??""})]}),d.jsx(U.Modal.Body,{children:e}),d.jsxs(U.Modal.Footer,{className:"ModalFooter",children:[d.jsx("div",{children:g}),d.jsxs("div",{children:[f,i?d.jsx(U.Button,{disabled:u,variant:i.variant??"primary",onClick:i.onClick,className:"ml-2",children:i.text??d.jsx(Se.FormattedMessage,{id:"actions.cancel",defaultMessage:"Cancel",description:"Cancels the current action and dismisses the modal."})}):"",d.jsx(U.Button,{disabled:u||o,variant:(a==null?void 0:a.variant)??"primary",onClick:a==null?void 0:a.onClick,className:"ml-2",children:u?d.jsx(U.Spinner,{animation:"border",role:"status",size:"sm"}):(a==null?void 0:a.text)??d.jsx(Se.FormattedMessage,{id:"actions.close",defaultMessage:"Close",description:"Closes the current modal."})})]})]})]});function sp(e){let t="";return e instanceof Error&&(t=e.message),t||(t=String(e)),t||(t="Unknown error"),t}var vo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var a="",s=0;s<arguments.length;s++){var u=arguments[s];u&&(a=i(a,r(u)))}return a}function r(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return n.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var s="";for(var u in a)t.call(a,u)&&a[u]&&(s=i(s,u));return s}function i(a,s){return s?a?a+" "+s:a+s:a}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(vo);var op=vo.exports;const Ge=Bs(op),up=100,cp=5e3;let lp=0;const bo=O.createContext(null),dp=({children:e})=>{const[t,n]=O.useState(),[r,i]=O.useState(!1),[a,s]=O.useState(!1),u=O.useMemo(()=>{function l(){s(!0)}return!t||a?null:d.jsx(U.Toast,{autohide:!0,onClose:()=>i(!0),className:t.variant??"success",delay:t.delay??3e3,children:d.jsxs(U.Toast.Header,{children:[d.jsx("span",{className:"mr-auto",onClick:()=>l(),children:t.content}),t.variant==="danger"&&d.jsx(U.Button,{variant:"minimal",className:"expand-error-button",onClick:()=>l(),children:d.jsx(Ee,{icon:ce.faArrowUpRightFromSquare})})]})},t.id)},[t,a]);function o(l){(r||!t||(l.priority??0)>=(t.priority??0))&&(i(!1),n({...l,id:lp++}))}function c(){const{content:l}=t??{};l&&typeof l=="string"&&navigator.clipboard&&navigator.clipboard.writeText(l)}return d.jsxs(bo.Provider,{value:o,children:[e,a&&d.jsx(ap,{dialogClassName:"toast-expanded-dialog",show:a,accept:{onClick:()=>{n(void 0),s(!1)}},header:d.jsx(Se.FormattedMessage,{id:"errors.header"}),icon:ce.faTriangleExclamation,footerButtons:!!navigator.clipboard&&d.jsx(U.Button,{variant:"secondary",onClick:()=>c(),children:d.jsx(Se.FormattedMessage,{id:"actions.copy_to_clipboard"})}),children:t==null?void 0:t.content}),d.jsx("div",{className:Ge("toast-container row",{hidden:!t||r}),children:u})]})},fp=()=>{const e=O.useContext(bo);if(!e)throw new Error("useToast must be used within a ToastProvider");return O.useMemo(()=>({toast:e,success(t){e({content:t})},error(t){const n=sp(t);console.error(t),e({variant:"danger",content:n,priority:up,delay:cp})}}),[e])};var zi=function(e,t){return zi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},zi(e,t)};function br(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");zi(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Te=function(){return Te=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Te.apply(this,arguments)};function Ut(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}typeof SuppressedError=="function"&&SuppressedError;var Hi="Invariant Violation",yo=Object.setPrototypeOf,pp=yo===void 0?function(e,t){return e.__proto__=t,e}:yo,So=function(e){br(t,e);function t(n){n===void 0&&(n=Hi);var r=e.call(this,typeof n=="number"?Hi+": "+n+" (see https://github.com/apollographql/invariant-packages)":n)||this;return r.framesToPop=1,r.name=Hi,pp(r,t.prototype),r}return t}(Error);function _t(e,t){if(!e)throw new So(t)}var xo=["debug","log","warn","error","silent"],mp=xo.indexOf("log");function yr(e){return function(){if(xo.indexOf(e)>=mp){var t=console[e]||console.log;return t.apply(console,arguments)}}}(function(e){e.debug=yr("debug"),e.log=yr("log"),e.warn=yr("warn"),e.error=yr("error")})(_t||(_t={}));var Io="3.14.1";function zt(e){try{return e()}catch{}}const Sr=zt(function(){return globalThis})||zt(function(){return window})||zt(function(){return self})||zt(function(){return global})||zt(function(){return zt.constructor("return this")()});var _o=new Map;function gp(e){var t=_o.get(e)||1;return _o.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function hp(e,t){var n=gp("stringifyForDisplay");return JSON.stringify(e,function(r,i){return i===void 0?n:i},t).split(JSON.stringify(n)).join("<undefined>")}function xr(e){return function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(typeof t=="number"){var i=t;t=Wi(i),t||(t=Yi(i,n),n=[])}e.apply(void 0,[t].concat(n))}}var Ht=Object.assign(function(t,n){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];t||_t(t,Wi(n,r)||Yi(n,r))},{debug:xr(_t.debug),log:xr(_t.log),warn:xr(_t.warn),error:xr(_t.error)});function On(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new So(Wi(e,t)||Yi(e,t))}var wo=Symbol.for("ApolloErrorMessageHandler_"+Io);function Co(e){if(typeof e=="string")return e;try{return hp(e,2).slice(0,1e3)}catch{return"<non-serializable>"}}function Wi(e,t){if(t===void 0&&(t=[]),!!e)return Sr[wo]&&Sr[wo](e,t.map(Co))}function Yi(e,t){if(t===void 0&&(t=[]),!!e)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:Io,message:e,args:t.map(Co)})))}function vp(e,t){if(!!!e)throw new Error(t)}const Oo={Name:[],Document:["definitions"],OperationDefinition:["description","name","variableDefinitions","directives","selectionSet"],VariableDefinition:["description","variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["description","name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","directives","locations"],SchemaExtension:["directives","operationTypes"],DirectiveExtension:["name","directives"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"],TypeCoordinate:["name"],MemberCoordinate:["name","memberName"],ArgumentCoordinate:["name","fieldName","argumentName"],DirectiveCoordinate:["name"],DirectiveArgumentCoordinate:["name","argumentName"]},bp=new Set(Object.keys(Oo));function Eo(e){const t=e==null?void 0:e.kind;return typeof t=="string"&&bp.has(t)}var To;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(To||(To={}));var Qi;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.DIRECTIVE_EXTENSION="DirectiveExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension",e.TYPE_COORDINATE="TypeCoordinate",e.MEMBER_COORDINATE="MemberCoordinate",e.ARGUMENT_COORDINATE="ArgumentCoordinate",e.DIRECTIVE_COORDINATE="DirectiveCoordinate",e.DIRECTIVE_ARGUMENT_COORDINATE="DirectiveArgumentCoordinate"})(Qi||(Qi={}));function Do(e){return e===9||e===32}function yp(e,t){const n=e.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),i=r.length===1,a=r.length>1&&r.slice(1).every(p=>p.length===0||Do(p.charCodeAt(0))),s=n.endsWith('\\"""'),u=e.endsWith('"')&&!s,o=e.endsWith("\\"),c=u||o,l=!i||e.length>70||c||a||s;let f="";const g=i&&Do(e.charCodeAt(0));return(l&&!g||a)&&(f+=`
`),f+=n,(l||c)&&(f+=`
`),'"""'+f+'"""'}const Sp=10,$o=2;function xp(e){return Ir(e,[])}function Ir(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return Ip(e,t);default:return String(e)}}function Ip(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const n=[...t,e];if(_p(e)){const r=e.toJSON();if(r!==e)return typeof r=="string"?r:Ir(r,n)}else if(Array.isArray(e))return Cp(e,n);return wp(e,n)}function _p(e){return typeof e.toJSON=="function"}function wp(e,t){const n=Object.entries(e);return n.length===0?"{}":t.length>$o?"["+Op(e)+"]":"{ "+n.map(([i,a])=>i+": "+Ir(a,t)).join(", ")+" }"}function Cp(e,t){if(e.length===0)return"[]";if(t.length>$o)return"[Array]";const n=Math.min(Sp,e.length),r=e.length-n,i=[];for(let a=0;a<n;++a)i.push(Ir(e[a],t));return r===1?i.push("... 1 more item"):r>1&&i.push(`... ${r} more items`),"["+i.join(", ")+"]"}function Op(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}function Ep(e){return`"${e.replace(Tp,Dp)}"`}const Tp=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function Dp(e){return $p[e.charCodeAt(0)]}const $p=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],Mp=Object.freeze({});function Pp(e,t,n=Oo){const r=new Map;for(const x of Object.values(Qi))r.set(x,Fp(t,x));let i,a=Array.isArray(e),s=[e],u=-1,o=[],c=e,l,f;const g=[],p=[];do{u++;const x=u===s.length,v=x&&o.length!==0;if(x){if(l=p.length===0?void 0:g[g.length-1],c=f,f=p.pop(),v)if(a){c=c.slice();let T=0;for(const[_,I]of o){const h=_-T;I===null?(c.splice(h,1),T++):c[h]=I}}else{c={...c};for(const[T,_]of o)c[T]=_}u=i.index,s=i.keys,o=i.edits,a=i.inArray,i=i.prev}else if(f){if(l=a?u:s[u],c=f[l],c==null)continue;g.push(l)}let C;if(!Array.isArray(c)){var w,S;Eo(c)||vp(!1,`Invalid AST Node: ${xp(c)}.`);const T=x?(w=r.get(c.kind))===null||w===void 0?void 0:w.leave:(S=r.get(c.kind))===null||S===void 0?void 0:S.enter;if(C=T==null?void 0:T.call(t,c,l,f,g,p),C===Mp)break;if(C===!1){if(!x){g.pop();continue}}else if(C!==void 0&&(o.push([l,C]),!x))if(Eo(C))c=C;else{g.pop();continue}}if(C===void 0&&v&&o.push([l,c]),x)g.pop();else{var b;i={inArray:a,index:u,keys:s,edits:o,prev:i},a=Array.isArray(c),s=a?c:(b=n[c.kind])!==null&&b!==void 0?b:[],u=-1,o=[],f&&p.push(f),f=c}}while(i!==void 0);return o.length!==0?o[o.length-1][1]:e}function Fp(e,t){const n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function Np(e){return Pp(e,Ap)}const kp=80,Ap={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>k(e.definitions,`

`)},OperationDefinition:{leave(e){const t=Ki(e.variableDefinitions)?Q(`(
`,k(e.variableDefinitions,`
`),`
)`):Q("(",k(e.variableDefinitions,", "),")"),n=Q("",e.description,`
`)+k([e.operation,k([e.name,t]),k(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r,description:i})=>Q("",i,`
`)+e+": "+t+Q(" = ",n)+Q(" ",k(r," "))},SelectionSet:{leave:({selections:e})=>Xe(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:i}){const a=Q("",e,": ")+t;let s=a+Q("(",k(n,", "),")");return s.length>kp&&(s=a+Q(`(
`,_r(k(n,`
`)),`
)`)),k([s,k(r," "),i]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+Q(" ",k(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>k(["...",Q("on ",e),k(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:i,description:a})=>Q("",a,`
`)+`fragment ${e}${Q("(",k(n,", "),")")} on ${t} ${Q("",k(r," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?yp(e):Ep(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+k(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+k(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+Q("(",k(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>Q("",e,`
`)+k(["schema",k(t," "),Xe(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>Q("",e,`
`)+k(["scalar",t,k(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>Q("",e,`
`)+k(["type",t,Q("implements ",k(n," & ")),k(r," "),Xe(i)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:i})=>Q("",e,`
`)+t+(Ki(n)?Q(`(
`,_r(k(n,`
`)),`
)`):Q("(",k(n,", "),")"))+": "+r+Q(" ",k(i," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:i})=>Q("",e,`
`)+k([t+": "+n,Q("= ",r),k(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>Q("",e,`
`)+k(["interface",t,Q("implements ",k(n," & ")),k(r," "),Xe(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>Q("",e,`
`)+k(["union",t,k(n," "),Q("= ",k(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>Q("",e,`
`)+k(["enum",t,k(n," "),Xe(r)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>Q("",e,`
`)+k([t,k(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>Q("",e,`
`)+k(["input",t,k(n," "),Xe(r)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,directives:r,repeatable:i,locations:a})=>Q("",e,`
`)+"directive @"+t+(Ki(n)?Q(`(
`,_r(k(n,`
`)),`
)`):Q("(",k(n,", "),")"))+Q(" ",k(r," "))+(i?" repeatable":"")+" on "+k(a," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>k(["extend schema",k(e," "),Xe(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>k(["extend scalar",e,k(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>k(["extend type",e,Q("implements ",k(t," & ")),k(n," "),Xe(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>k(["extend interface",e,Q("implements ",k(t," & ")),k(n," "),Xe(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>k(["extend union",e,k(t," "),Q("= ",k(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>k(["extend enum",e,k(t," "),Xe(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>k(["extend input",e,k(t," "),Xe(n)]," ")},DirectiveExtension:{leave:({name:e,directives:t})=>k(["extend directive @"+e,k(t," ")]," ")},TypeCoordinate:{leave:({name:e})=>e},MemberCoordinate:{leave:({name:e,memberName:t})=>k([e,Q(".",t)])},ArgumentCoordinate:{leave:({name:e,fieldName:t,argumentName:n})=>k([e,Q(".",t),Q("(",n,":)")])},DirectiveCoordinate:{leave:({name:e})=>k(["@",e])},DirectiveArgumentCoordinate:{leave:({name:e,argumentName:t})=>k(["@",e,Q("(",t,":)")])}};function k(e,t=""){var n;return(n=e==null?void 0:e.filter(r=>r).join(t))!==null&&n!==void 0?n:""}function Xe(e){return Q(`{
`,_r(k(e,`
`)),`
}`)}function Q(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function _r(e){return Q("  ",e.replace(/\n/g,`
  `))}function Ki(e){var t;return(t=e==null?void 0:e.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}function Ji(e){return e!==null&&typeof e=="object"}function Lp(){}class Mo{constructor(t=1/0,n=Lp){this.max=t,this.dispose=n,this.map=new Map,this.newest=null,this.oldest=null}has(t){return this.map.has(t)}get(t){const n=this.getNode(t);return n&&n.value}get size(){return this.map.size}getNode(t){const n=this.map.get(t);if(n&&n!==this.newest){const{older:r,newer:i}=n;i&&(i.older=r),r&&(r.newer=i),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=i)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(t,r),r.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(t){const n=this.map.get(t);return n?(n===this.newest&&(this.newest=n.older),n===this.oldest&&(this.oldest=n.newer),n.newer&&(n.newer.older=n.older),n.older&&(n.older.newer=n.newer),this.map.delete(t),this.dispose(n.value,t),!0):!1}}function Xi(){}const jp=Xi,Bp=typeof WeakRef<"u"?WeakRef:function(e){return{deref:()=>e}},Rp=typeof WeakMap<"u"?WeakMap:Map,Vp=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:Xi,unregister:Xi}},qp=10024;class Po{constructor(t=1/0,n=jp){this.max=t,this.dispose=n,this.map=new Rp,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{const r=this.unfinalizedNodes.values();for(let i=0;i<qp;i++){const a=r.next().value;if(!a)break;this.unfinalizedNodes.delete(a);const s=a.key;delete a.key,a.keyRef=new Bp(s),this.registry.register(s,a,a)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new Vp(this.deleteNode.bind(this))}has(t){return this.map.has(t)}get(t){const n=this.getNode(t);return n&&n.value}getNode(t){const n=this.map.get(t);if(n&&n!==this.newest){const{older:r,newer:i}=n;i&&(i.older=r),r&&(r.newer=i),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=i)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.scheduleFinalization(r),this.map.set(t,r),this.size++,r.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(t){t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.size--;const n=t.key||t.keyRef&&t.keyRef.deref();this.dispose(t.value,n),t.keyRef?this.registry.unregister(t):this.unfinalizedNodes.delete(t),n&&this.map.delete(n)}delete(t){const n=this.map.get(t);return n?(this.deleteNode(n),!0):!1}scheduleFinalization(t){this.unfinalizedNodes.add(t),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}}var Zi=new WeakSet;function Fo(e){e.size<=(e.max||-1)||Zi.has(e)||(Zi.add(e),setTimeout(function(){e.clean(),Zi.delete(e)},100))}var Gp=function(e,t){var n=new Po(e,t);return n.set=function(r,i){var a=Po.prototype.set.call(this,r,i);return Fo(this),a},n},Up=function(e,t){var n=new Mo(e,t);return n.set=function(r,i){var a=Mo.prototype.set.call(this,r,i);return Fo(this),a},n},zp=Symbol.for("apollo.cacheSize"),No=Te({},Sr[zp]),Hp={};function ko(e,t){Hp[e]=t}var Ao=Object.assign(function(t){return JSON.stringify(t,Wp)},{reset:function(){Wt=new Up(No.canonicalStringify||1e3)}});globalThis.__DEV__!==!1&&ko("canonicalStringify",function(){return Wt.size});var Wt;Ao.reset();function Wp(e,t){if(t&&typeof t=="object"){var n=Object.getPrototypeOf(t);if(n===Object.prototype||n===null){var r=Object.keys(t);if(r.every(Yp))return t;var i=JSON.stringify(r),a=Wt.get(i);if(!a){r.sort();var s=JSON.stringify(r);a=Wt.get(s)||r,Wt.set(i,a),Wt.set(s,a)}var u=Object.create(n);return a.forEach(function(o){u[o]=t[o]}),u}}return t}function Yp(e,t,n){return t===0||n[t-1]<=e}var Qp=["connection","include","skip","client","rest","export","nonreactive"],En=Ao;Object.assign(function(e,t,n){if(t&&n&&n.connection&&n.connection.key)if(n.connection.filter&&n.connection.filter.length>0){var r=n.connection.filter?n.connection.filter:[];r.sort();var i={};return r.forEach(function(u){i[u]=t[u]}),"".concat(n.connection.key,"(").concat(En(i),")")}else return n.connection.key;var a=e;if(t){var s=En(t);a+="(".concat(s,")")}return n&&Object.keys(n).forEach(function(u){Qp.indexOf(u)===-1&&(n[u]&&Object.keys(n[u]).length?a+="@".concat(u,"(").concat(En(n[u]),")"):a+="@".concat(u))}),a},{setStringify:function(e){var t=En;return En=e,t}});function Kp(e){return e.kind==="Field"}function Lo(e){Ht(e&&e.kind==="Document",115);var t=e.definitions.filter(function(n){return n.kind!=="FragmentDefinition"}).map(function(n){if(n.kind!=="OperationDefinition")throw On(116,n.kind);return n});return Ht(t.length<=1,117,t.length),e}function Jp(e){return Lo(e),e.definitions.filter(function(t){return t.kind==="OperationDefinition"})[0]}function Xp(e){return e.definitions.filter(function(t){return t.kind==="OperationDefinition"&&!!t.name}).map(function(t){return t.name.value})[0]||null}function Zp(e){var t=Jp(e);return Ht(t&&t.operation==="query",118),t}function em(e){Lo(e);for(var t,n=0,r=e.definitions;n<r.length;n++){var i=r[n];if(i.kind==="OperationDefinition"){var a=i.operation;if(a==="query"||a==="mutation"||a==="subscription")return i}i.kind==="FragmentDefinition"&&!t&&(t=i)}if(t)return t;throw On(122)}let Pe=null;const jo={};let tm=1;const nm=()=>class{constructor(){this.id=["slot",tm++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let t=Pe;t;t=t.parent)if(this.id in t.slots){const n=t.slots[this.id];if(n===jo)break;return t!==Pe&&(Pe.slots[this.id]=n),!0}return Pe&&(Pe.slots[this.id]=jo),!1}getValue(){if(this.hasValue())return Pe.slots[this.id]}withValue(t,n,r,i){const a={__proto__:null,[this.id]:t},s=Pe;Pe={parent:s,slots:a};try{return n.apply(i,r)}finally{Pe=s}}static bind(t){const n=Pe;return function(){const r=Pe;try{return Pe=n,t.apply(this,arguments)}finally{Pe=r}}}static noContext(t,n,r){if(Pe){const i=Pe;try{return Pe=null,t.apply(r,n)}finally{Pe=i}}else return t.apply(r,n)}};function Bo(e){try{return e()}catch{}}const ea="@wry/context:Slot",Ro=Bo(()=>globalThis)||Bo(()=>global)||Object.create(null),ta=Ro[ea]||Array[ea]||function(e){try{Object.defineProperty(Ro,ea,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}}(nm()),{bind:KO,noContext:JO}=ta;new ta;var Tn,na=Object.assign(function(e){var t=Tn.get(e);return t||(t=Np(e),Tn.set(e,t)),t},{reset:function(){Tn=new Gp(No.print||2e3)}});na.reset(),globalThis.__DEV__!==!1&&ko("print",function(){return Tn?Tn.size:0});function rm(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=im(e))||t){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function im(e,t){if(e){if(typeof e=="string")return Vo(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vo(e,t)}}function Vo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function qo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ra(e,t,n){return t&&qo(e.prototype,t),n&&qo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var ia=function(){return typeof Symbol=="function"},aa=function(e){return ia()&&!!Symbol[e]},sa=function(e){return aa(e)?Symbol[e]:"@@"+e};ia()&&!aa("observable")&&(Symbol.observable=Symbol("observable"));var am=sa("iterator"),oa=sa("observable"),Go=sa("species");function wr(e,t){var n=e[t];if(n!=null){if(typeof n!="function")throw new TypeError(n+" is not a function");return n}}function Dn(e){var t=e.constructor;return t!==void 0&&(t=t[Go],t===null&&(t=void 0)),t!==void 0?t:we}function sm(e){return e instanceof we}function Yt(e){Yt.log?Yt.log(e):setTimeout(function(){throw e})}function Cr(e){Promise.resolve().then(function(){try{e()}catch(t){Yt(t)}})}function Uo(e){var t=e._cleanup;if(t!==void 0&&(e._cleanup=void 0,!!t))try{if(typeof t=="function")t();else{var n=wr(t,"unsubscribe");n&&n.call(t)}}catch(r){Yt(r)}}function ua(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function om(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var n=0;n<t.length&&(zo(e,t[n].type,t[n].value),e._state!=="closed");++n);}}function zo(e,t,n){e._state="running";var r=e._observer;try{var i=wr(r,t);switch(t){case"next":i&&i.call(r,n);break;case"error":if(ua(e),i)i.call(r,n);else throw n;break;case"complete":ua(e),i&&i.call(r);break}}catch(a){Yt(a)}e._state==="closed"?Uo(e):e._state==="running"&&(e._state="ready")}function ca(e,t,n){if(e._state!=="closed"){if(e._state==="buffering"){e._queue.push({type:t,value:n});return}if(e._state!=="ready"){e._state="buffering",e._queue=[{type:t,value:n}],Cr(function(){return om(e)});return}zo(e,t,n)}}var um=function(){function e(n,r){this._cleanup=void 0,this._observer=n,this._queue=void 0,this._state="initializing";var i=new cm(this);try{this._cleanup=r.call(void 0,i)}catch(a){i.error(a)}this._state==="initializing"&&(this._state="ready")}var t=e.prototype;return t.unsubscribe=function(){this._state!=="closed"&&(ua(this),Uo(this))},ra(e,[{key:"closed",get:function(){return this._state==="closed"}}]),e}(),cm=function(){function e(n){this._subscription=n}var t=e.prototype;return t.next=function(r){ca(this._subscription,"next",r)},t.error=function(r){ca(this._subscription,"error",r)},t.complete=function(){ca(this._subscription,"complete")},ra(e,[{key:"closed",get:function(){return this._subscription._state==="closed"}}]),e}(),we=function(){function e(n){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if(typeof n!="function")throw new TypeError("Observable initializer must be a function");this._subscriber=n}var t=e.prototype;return t.subscribe=function(r){return(typeof r!="object"||r===null)&&(r={next:r,error:arguments[1],complete:arguments[2]}),new um(r,this._subscriber)},t.forEach=function(r){var i=this;return new Promise(function(a,s){if(typeof r!="function"){s(new TypeError(r+" is not a function"));return}function u(){o.unsubscribe(),a()}var o=i.subscribe({next:function(c){try{r(c,u)}catch(l){s(l),o.unsubscribe()}},error:s,complete:a})})},t.map=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=Dn(this);return new a(function(s){return i.subscribe({next:function(u){try{u=r(u)}catch(o){return s.error(o)}s.next(u)},error:function(u){s.error(u)},complete:function(){s.complete()}})})},t.filter=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=Dn(this);return new a(function(s){return i.subscribe({next:function(u){try{if(!r(u))return}catch(o){return s.error(o)}s.next(u)},error:function(u){s.error(u)},complete:function(){s.complete()}})})},t.reduce=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=Dn(this),s=arguments.length>1,u=!1,o=arguments[1],c=o;return new a(function(l){return i.subscribe({next:function(f){var g=!u;if(u=!0,!g||s)try{c=r(c,f)}catch(p){return l.error(p)}else c=f},error:function(f){l.error(f)},complete:function(){if(!u&&!s)return l.error(new TypeError("Cannot reduce an empty sequence"));l.next(c),l.complete()}})})},t.concat=function(){for(var r=this,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];var u=Dn(this);return new u(function(o){var c,l=0;function f(g){c=g.subscribe({next:function(p){o.next(p)},error:function(p){o.error(p)},complete:function(){l===a.length?(c=void 0,o.complete()):f(u.from(a[l++]))}})}return f(r),function(){c&&(c.unsubscribe(),c=void 0)}})},t.flatMap=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=Dn(this);return new a(function(s){var u=[],o=i.subscribe({next:function(l){if(r)try{l=r(l)}catch(g){return s.error(g)}var f=a.from(l).subscribe({next:function(g){s.next(g)},error:function(g){s.error(g)},complete:function(){var g=u.indexOf(f);g>=0&&u.splice(g,1),c()}});u.push(f)},error:function(l){s.error(l)},complete:function(){c()}});function c(){o.closed&&u.length===0&&s.complete()}return function(){u.forEach(function(l){return l.unsubscribe()}),o.unsubscribe()}})},t[oa]=function(){return this},e.from=function(r){var i=typeof this=="function"?this:e;if(r==null)throw new TypeError(r+" is not an object");var a=wr(r,oa);if(a){var s=a.call(r);if(Object(s)!==s)throw new TypeError(s+" is not an object");return sm(s)&&s.constructor===i?s:new i(function(u){return s.subscribe(u)})}if(aa("iterator")&&(a=wr(r,am),a))return new i(function(u){Cr(function(){if(!u.closed){for(var o=rm(a.call(r)),c;!(c=o()).done;){var l=c.value;if(u.next(l),u.closed)return}u.complete()}})});if(Array.isArray(r))return new i(function(u){Cr(function(){if(!u.closed){for(var o=0;o<r.length;++o)if(u.next(r[o]),u.closed)return;u.complete()}})});throw new TypeError(r+" is not observable")},e.of=function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var s=typeof this=="function"?this:e;return new s(function(u){Cr(function(){if(!u.closed){for(var o=0;o<i.length;++o)if(u.next(i[o]),u.closed)return;u.complete()}})})},ra(e,null,[{key:Go,get:function(){return this}}]),e}();ia()&&Object.defineProperty(we,Symbol("extensions"),{value:{symbol:oa,hostReportError:Yt},configurable:!0});function lm(e){var t,n=e.Symbol;if(typeof n=="function")if(n.observable)t=n.observable;else{typeof n.for=="function"?t=n.for("https://github.com/benlesh/symbol-observable"):t=n("https://github.com/benlesh/symbol-observable");try{n.observable=t}catch{}}else t="@@observable";return t}var Qt;typeof self<"u"?Qt=self:typeof window<"u"?Qt=window:typeof global<"u"?Qt=global:typeof module<"u"?Qt=module:Qt=Function("return this")(),lm(Qt);var Ho=we.prototype,Wo="@@observable";Ho[Wo]||(Ho[Wo]=function(){return this});var la,dm=Symbol.for("apollo.deprecations"),Yo=Symbol.for("apollo.deprecations.slot"),da=Sr,fm=(la=da[Yo])!==null&&la!==void 0?la:da[Yo]=new ta;function pm(e){return da[dm]||(fm.getValue()||[]).includes(e)}function mm(e,t){pm(e)||t()}var Qo=function(e,t,n){var r=new Error(n);throw r.name="ServerError",r.response=e,r.statusCode=e.status,r.result=t,r};function gm(e){for(var t=["query","operationName","variables","extensions","context"],n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];if(t.indexOf(i)<0)throw On(58,i)}return e}function hm(e,t){var n=Te({},e),r=function(a){typeof a=="function"?n=Te(Te({},n),a(n)):n=Te(Te({},n),a)},i=function(){return Te({},n)};return Object.defineProperty(t,"setContext",{enumerable:!1,value:r}),Object.defineProperty(t,"getContext",{enumerable:!1,value:i}),t}function vm(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName=typeof t.query!="string"?Xp(t.query)||void 0:""),t}function Ko(e,t){return t?t(e):we.of()}function $n(e){return typeof e=="function"?new Mn(e):e}function Or(e){return e.request.length<=1}var Mn=function(){function e(t){t&&(this.request=t)}return e.empty=function(){return new e(function(){return we.of()})},e.from=function(t){return t.length===0?e.empty():t.map($n).reduce(function(n,r){return n.concat(r)})},e.split=function(t,n,r){var i=$n(n),a=$n(r||new e(Ko)),s;return Or(i)&&Or(a)?s=new e(function(u){return t(u)?i.request(u)||we.of():a.request(u)||we.of()}):s=new e(function(u,o){return t(u)?i.request(u,o)||we.of():a.request(u,o)||we.of()}),Object.assign(s,{left:i,right:a})},e.execute=function(t,n){return t.request(hm(n.context,vm(gm(n))))||we.of()},e.concat=function(t,n){var r=$n(t);if(Or(r))return globalThis.__DEV__!==!1&&Ht.warn(47,r),r;var i=$n(n),a;return Or(i)?a=new e(function(s){return r.request(s,function(u){return i.request(u)||we.of()})||we.of()}):a=new e(function(s,u){return r.request(s,function(o){return i.request(o,u)||we.of()})||we.of()}),Object.assign(a,{left:r,right:i})},e.prototype.split=function(t,n,r){return this.concat(e.split(t,n,r||new e(Ko)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(t,n){throw On(48)},e.prototype.onError=function(t,n){if(globalThis.__DEV__!==!1&&mm("onError",function(){globalThis.__DEV__!==!1&&Ht.warn(49)}),n&&n.error)return n.error(t),!1;throw t},e.prototype.setOnError=function(t){return globalThis.__DEV__!==!1&&globalThis.__DEV__!==!1&&Ht.warn(50),this.onError=t,this},e}(),Jo=Symbol();function bm(e){return e.extensions?Array.isArray(e.extensions[Jo]):!1}var ym=function(e){var t=Ut(Ut(Ut([],e.graphQLErrors,!0),e.clientErrors,!0),e.protocolErrors,!0);return e.networkError&&t.push(e.networkError),t.map(function(n){return Ji(n)&&n.message||"Error message not found."}).join(`
`)},Sm=function(e){br(t,e);function t(n){var r=n.graphQLErrors,i=n.protocolErrors,a=n.clientErrors,s=n.networkError,u=n.errorMessage,o=n.extraInfo,c=e.call(this,u)||this;return c.name="ApolloError",c.graphQLErrors=r||[],c.protocolErrors=i||[],c.clientErrors=a||[],c.networkError=s||null,c.message=u||ym(c),c.extraInfo=o,c.cause=Ut(Ut(Ut([s],r||[],!0),i||[],!0),a||[],!0).find(function(l){return!!l})||null,c.__proto__=t.prototype,c}return t}(Error);function xm(e){return Ji(e)&&"code"in e&&"reason"in e}function Im(e){var t;return Ji(e)&&((t=e.target)===null||t===void 0?void 0:t.readyState)===WebSocket.CLOSED}var _m=function(e){br(t,e);function t(n){var r=e.call(this)||this;return r.client=n,r}return t.prototype.request=function(n){var r=this;return new we(function(i){return r.client.subscribe(Te(Te({},n),{query:na(n.query)}),{next:i.next.bind(i),complete:i.complete.bind(i),error:function(a){if(a instanceof Error)return i.error(a);var s=xm(a);return s||Im(a)?i.error(new Error("Socket closed".concat(s?" with event ".concat(a.code):"").concat(s?" ".concat(a.reason):""))):i.error(new Sm({graphQLErrors:Array.isArray(a)?a:[a]}))}})})},t}(Mn);function Re(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function wt(e){return Re(e)==="object"}function wm(e){return Array.isArray(e)&&e.length>0&&e.every(t=>"message"in t)}function Xo(e,t){return e.length<124?e:t}const Cm="graphql-transport-ws";var Ue;(function(e){e[e.InternalServerError=4500]="InternalServerError",e[e.InternalClientError=4005]="InternalClientError",e[e.BadRequest=4400]="BadRequest",e[e.BadResponse=4004]="BadResponse",e[e.Unauthorized=4401]="Unauthorized",e[e.Forbidden=4403]="Forbidden",e[e.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",e[e.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",e[e.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",e[e.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",e[e.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests"})(Ue||(Ue={}));var xe;(function(e){e.ConnectionInit="connection_init",e.ConnectionAck="connection_ack",e.Ping="ping",e.Pong="pong",e.Subscribe="subscribe",e.Next="next",e.Error="error",e.Complete="complete"})(xe||(xe={}));function Zo(e){if(!wt(e))throw new Error(`Message is expected to be an object, but got ${Re(e)}`);if(!e.type)throw new Error("Message is missing the 'type' property");if(typeof e.type!="string")throw new Error(`Message is expects the 'type' property to be a string, but got ${Re(e.type)}`);switch(e.type){case xe.ConnectionInit:case xe.ConnectionAck:case xe.Ping:case xe.Pong:{if(e.payload!=null&&!wt(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);break}case xe.Subscribe:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Re(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!wt(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Re(e.payload)}`);if(typeof e.payload.query!="string")throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${Re(e.payload.query)}`);if(e.payload.variables!=null&&!wt(e.payload.variables))throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Re(e.payload.variables)}`);if(e.payload.operationName!=null&&Re(e.payload.operationName)!=="string")throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Re(e.payload.operationName)}`);if(e.payload.extensions!=null&&!wt(e.payload.extensions))throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Re(e.payload.extensions)}`);break}case xe.Next:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Re(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!wt(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Re(e.payload)}`);break}case xe.Error:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Re(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!wm(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);break}case xe.Complete:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Re(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);break}default:throw new Error(`Invalid message 'type' property "${e.type}"`)}return e}function Om(e,t){return Zo(typeof e=="string"?JSON.parse(e,t):e)}function Pn(e,t){return Zo(e),JSON.stringify(e,t)}var Kt=function(e){return this instanceof Kt?(this.v=e,this):new Kt(e)},Em=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,a=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(p){return function(w){return Promise.resolve(w).then(p,f)}}function u(p,w){r[p]&&(i[p]=function(S){return new Promise(function(b,x){a.push([p,S,b,x])>1||o(p,S)})},w&&(i[p]=w(i[p])))}function o(p,w){try{c(r[p](w))}catch(S){g(a[0][3],S)}}function c(p){p.value instanceof Kt?Promise.resolve(p.value.v).then(l,f):g(a[0][2],p)}function l(p){o("next",p)}function f(p){o("throw",p)}function g(p,w){p(w),a.shift(),a.length&&o(a[0][0],a[0][1])}};function Tm(e){const{url:t,connectionParams:n,lazy:r=!0,onNonLazyError:i=console.error,lazyCloseTimeout:a=0,keepAlive:s=0,disablePong:u,connectionAckWaitTimeout:o=0,retryAttempts:c=5,retryWait:l=async function(A){let L=1e3;for(let G=0;G<A;G++)L*=2;await new Promise(G=>setTimeout(G,L+Math.floor(Math.random()*2700+300)))},shouldRetry:f=fa,isFatalConnectionProblem:g,on:p,webSocketImpl:w,generateID:S=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,A=>{const L=Math.random()*16|0;return(A=="x"?L:L&3|8).toString(16)})},jsonMessageReplacer:b,jsonMessageReviver:x}=e;let v;if(w){if(!$m(w))throw new Error("Invalid WebSocket implementation provided");v=w}else typeof WebSocket<"u"?v=WebSocket:typeof global<"u"?v=global.WebSocket||global.MozWebSocket:typeof window<"u"&&(v=window.WebSocket||window.MozWebSocket);if(!v)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const C=v,T=(()=>{const P=(()=>{const L={};return{on(G,te){return L[G]=te,()=>{delete L[G]}},emit(G){var te;"id"in G&&((te=L[G.id])===null||te===void 0||te.call(L,G))}}})(),A={connecting:p!=null&&p.connecting?[p.connecting]:[],opened:p!=null&&p.opened?[p.opened]:[],connected:p!=null&&p.connected?[p.connected]:[],ping:p!=null&&p.ping?[p.ping]:[],pong:p!=null&&p.pong?[p.pong]:[],message:p!=null&&p.message?[P.emit,p.message]:[P.emit],closed:p!=null&&p.closed?[p.closed]:[],error:p!=null&&p.error?[p.error]:[]};return{onMessage:P.on,on(L,G){const te=A[L];return te.push(G),()=>{te.splice(te.indexOf(G),1)}},emit(L,...G){for(const te of[...A[L]])te(...G)}}})();function _(P){const A=[T.on("error",L=>{A.forEach(G=>G()),P(L)}),T.on("closed",L=>{A.forEach(G=>G()),P(L)})]}let I,h=0,E,D=!1,$=0,R=!1;async function H(){clearTimeout(E);const[P,A]=await(I??(I=new Promise((te,ue)=>(async()=>{if(D){if(await l($),!h)return I=void 0,ue({code:1e3,reason:"All Subscriptions Gone"});$++}T.emit("connecting",D);const F=new C(typeof t=="function"?await t():t,Cm);let j,Y;function W(){isFinite(s)&&s>0&&(clearTimeout(Y),Y=setTimeout(()=>{F.readyState===C.OPEN&&(F.send(Pn({type:xe.Ping})),T.emit("ping",!1,void 0))},s))}_(B=>{I=void 0,clearTimeout(j),clearTimeout(Y),ue(B),B instanceof eu&&(F.close(4499,"Terminated"),F.onerror=null,F.onclose=null)}),F.onerror=B=>T.emit("error",B),F.onclose=B=>T.emit("closed",B),F.onopen=async()=>{try{T.emit("opened",F);const B=typeof n=="function"?await n():n;if(F.readyState!==C.OPEN)return;F.send(Pn(B?{type:xe.ConnectionInit,payload:B}:{type:xe.ConnectionInit},b)),isFinite(o)&&o>0&&(j=setTimeout(()=>{F.close(Ue.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")},o)),W()}catch(B){T.emit("error",B),F.close(Ue.InternalClientError,Xo(B instanceof Error?B.message:new Error(B).message,"Internal client error"))}};let M=!1;F.onmessage=({data:B})=>{try{const N=Om(B,x);if(T.emit("message",N),N.type==="ping"||N.type==="pong"){T.emit(N.type,!0,N.payload),N.type==="pong"?W():u||(F.send(Pn(N.payload?{type:xe.Pong,payload:N.payload}:{type:xe.Pong})),T.emit("pong",!1,N.payload));return}if(M)return;if(N.type!==xe.ConnectionAck)throw new Error(`First message cannot be of type ${N.type}`);clearTimeout(j),M=!0,T.emit("connected",F,N.payload,D),D=!1,$=0,te([F,new Promise((J,Me)=>_(Me))])}catch(N){F.onmessage=null,T.emit("error",N),F.close(Ue.BadResponse,Xo(N instanceof Error?N.message:new Error(N).message,"Bad response"))}}})())));P.readyState===C.CLOSING&&await A;let L=()=>{};const G=new Promise(te=>L=te);return[P,L,Promise.race([G.then(()=>{if(!h){const te=()=>P.close(1e3,"Normal Closure");isFinite(a)&&a>0?E=setTimeout(()=>{P.readyState===C.OPEN&&te()},a):te()}}),A])]}function ie(P){if(fa(P)&&(Dm(P.code)||[Ue.InternalServerError,Ue.InternalClientError,Ue.BadRequest,Ue.BadResponse,Ue.Unauthorized,Ue.SubprotocolNotAcceptable,Ue.SubscriberAlreadyExists,Ue.TooManyInitialisationRequests].includes(P.code)))throw P;if(R)return!1;if(fa(P)&&P.code===1e3)return h>0;if(!c||$>=c||!f(P)||g!=null&&g(P))throw P;return D=!0}r||(async()=>{for(h++;;)try{const[,,P]=await H();await P}catch(P){try{if(!ie(P))return}catch(A){return i==null?void 0:i(A)}}})();function ee(P,A){const L=S(P);let G=!1,te=!1,ue=()=>{h--,G=!0};return(async()=>{for(h++;;)try{const[F,j,Y]=await H();if(G)return j();const W=T.onMessage(L,M=>{switch(M.type){case xe.Next:{A.next(M.payload);return}case xe.Error:{te=!0,G=!0,A.error(M.payload),ue();return}case xe.Complete:{G=!0,ue();return}}});F.send(Pn({id:L,type:xe.Subscribe,payload:P},b)),ue=()=>{!G&&F.readyState===C.OPEN&&F.send(Pn({id:L,type:xe.Complete},b)),h--,G=!0,j()},await Y.finally(W);return}catch(F){if(!ie(F))return}})().then(()=>{te||A.complete()}).catch(F=>{A.error(F)}),()=>{G||ue()}}return{on:T.on,subscribe:ee,iterate(P){const A=[],L={done:!1,error:null,resolve:()=>{}},G=ee(P,{next(ue){A.push(ue),L.resolve()},error(ue){L.done=!0,L.error=ue,L.resolve()},complete(){L.done=!0,L.resolve()}}),te=function(){return Em(this,arguments,function*(){for(;;){for(A.length||(yield Kt(new Promise(j=>L.resolve=j)));A.length;)yield yield Kt(A.shift());if(L.error)throw L.error;if(L.done)return yield Kt(void 0)}})}();return te.throw=async ue=>(L.done||(L.done=!0,L.error=ue,L.resolve()),{done:!0,value:void 0}),te.return=async()=>(G(),{done:!0,value:void 0}),te},async dispose(){if(R=!0,I){const[P]=await I;P.close(1e3,"Normal Closure")}},terminate(){I&&T.emit("closed",new eu)}}}class eu extends Error{constructor(){super(...arguments),this.name="TerminatedCloseEvent",this.message="4499: Terminated",this.code=4499,this.reason="Terminated",this.wasClean=!1}}function fa(e){return wt(e)&&"code"in e&&"reason"in e}function Dm(e){return[1e3,1001,1006,1005,1012,1013,1014].includes(e)?!1:e>=1e3&&e<=1999}function $m(e){return typeof e=="function"&&"constructor"in e&&"CLOSED"in e&&"CLOSING"in e&&"CONNECTING"in e&&"OPEN"in e}function tu(e){return new Mn(function(t,n){return new we(function(r){var i,a,s;try{i=n(t).subscribe({next:function(u){if(u.errors?s=e({graphQLErrors:u.errors,response:u,operation:t,forward:n}):bm(u)&&(s=e({protocolErrors:u.extensions[Jo],response:u,operation:t,forward:n})),s){a=s.subscribe({next:r.next.bind(r),error:r.error.bind(r),complete:r.complete.bind(r)});return}r.next(u)},error:function(u){if(s=e({operation:t,networkError:u,graphQLErrors:u&&u.result&&u.result.errors||void 0,forward:n}),s){a=s.subscribe({next:r.next.bind(r),error:r.error.bind(r),complete:r.complete.bind(r)});return}r.error(u)},complete:function(){s||r.complete.bind(r)()}})}catch(u){e({networkError:u,operation:t,forward:n}),r.error(u)}return function(){i&&i.unsubscribe(),a&&i.unsubscribe()}})})}(function(e){br(t,e);function t(n){var r=e.call(this)||this;return r.link=tu(n),r}return t.prototype.request=function(n,r){return this.link.request(n,r)},t})(Mn);var Mm=function(){if(typeof AbortController>"u")return{controller:!1,signal:!1};var e=new AbortController,t=e.signal;return{controller:e,signal:t}},nu=Object.prototype.hasOwnProperty;function Pm(e,t){if(e.status>=300){var n=function(){try{return JSON.parse(t)}catch{return t}};Qo(e,n(),"Response not successful: Received status code ".concat(e.status))}try{return JSON.parse(t)}catch(i){var r=i;throw r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,r}}function Fm(e){return function(t){return t.text().then(function(n){return Pm(t,n)}).then(function(n){return!Array.isArray(n)&&!nu.call(n,"data")&&!nu.call(n,"errors")&&Qo(t,n,"Server response was missing for query '".concat(Array.isArray(e)?e.map(function(r){return r.operationName}):e.operationName,"'.")),n})}}var Er=function(e,t){var n;try{n=JSON.stringify(e)}catch(i){var r=On(54,t,i.message);throw r.parseError=i,r}return n};function Nm(e,t){var n=[],r=function(f,g){n.push("".concat(f,"=").concat(encodeURIComponent(g)))};if("query"in t&&r("query",t.query),t.operationName&&r("operationName",t.operationName),t.variables){var i=void 0;try{i=Er(t.variables,"Variables map")}catch(f){return{parseError:f}}r("variables",i)}if(t.extensions){var a=void 0;try{a=Er(t.extensions,"Extensions map")}catch(f){return{parseError:f}}r("extensions",a)}var s="",u=e,o=e.indexOf("#");o!==-1&&(s=e.substr(o),u=e.substr(0,o));var c=u.indexOf("?")===-1?"?":"&",l=u+c+n.join("&")+s;return{newURI:l}}var km={includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},Am={accept:"*/*","content-type":"application/json"},Lm={method:"POST"},jm={http:km,headers:Am,options:Lm},Bm=function(e,t){return t(e)};function Rm(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={},a={};n.forEach(function(f){i=Te(Te(Te({},i),f.options),{headers:Te(Te({},i.headers),f.headers)}),f.credentials&&(i.credentials=f.credentials),a=Te(Te({},a),f.http)}),i.headers&&(i.headers=Vm(i.headers,a.preserveHeaderCase));var s=e.operationName,u=e.extensions,o=e.variables,c=e.query,l={operationName:s,variables:o};return a.includeExtensions&&(l.extensions=u),a.includeQuery&&(l.query=t(c,na)),{options:i,body:l}}function Vm(e,t){if(!t){var n={};return Object.keys(Object(e)).forEach(function(a){n[a.toLowerCase()]=e[a]}),n}var r={};Object.keys(Object(e)).forEach(function(a){r[a.toLowerCase()]={originalName:a,value:e[a]}});var i={};return Object.keys(r).forEach(function(a){i[r[a].originalName]=r[a].value}),i}var qm=function(e,t){var n=e.getContext(),r=n.uri;return r||(typeof t=="function"?t(e):t||"/graphql")};function Gm(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Um(e,t,n=""){if(!arguments.length)throw new TypeError("Argument 1 `value` is required.");if(typeof t!="function")throw new TypeError("Argument 2 `isExtractable` must be a function.");if(typeof n!="string")throw new TypeError("Argument 3 `path` must be a string.");const r=new Map,i=new Map;function a(s,u,o){if(t(s)){const f=i.get(s);return f?f.push(u):i.set(s,[u]),null}const c=Array.isArray(s)||typeof FileList<"u"&&s instanceof FileList,l=Gm(s);if(c||l){let f=r.get(s);const g=!f;if(g&&(f=c?[]:s instanceof Object?{}:Object.create(null),r.set(s,f)),!o.has(s)){const p=u?`${u}.`:"",w=new Set(o).add(s);if(c){let S=0;for(const b of s){const x=a(b,p+S++,w);g&&f.push(x)}}else for(const S in s){const b=a(s[S],p+S,w);g&&(f[S]=b)}}return f}return s}return{clone:a(e,n,new Set),files:i}}function zm(e,t,n){"name"in n?e.append(t,n,n.name):e.append(t,n)}function Hm(e){return typeof File<"u"&&e instanceof File||typeof Blob<"u"&&e instanceof Blob}function Wm({uri:e="/graphql",useGETForQueries:t,isExtractableFile:n=Hm,FormData:r,formDataAppendFile:i=zm,print:a=Bm,fetch:s,fetchOptions:u,credentials:o,headers:c,includeExtensions:l}={}){const f={http:{includeExtensions:l},options:u,credentials:o,headers:c};return new Mn(g=>{const p=g.getContext(),{clientAwareness:{name:w,version:S}={},headers:b}=p,x={http:p.http,options:p.fetchOptions,credentials:p.credentials,headers:{...w&&{"apollographql-client-name":w},...S&&{"apollographql-client-version":S},...b}},{options:v,body:C}=Rm(g,a,jm,f,x),{clone:T,files:_}=Um(C,n,"");let I=qm(g,e);if(_.size){v.headers&&delete v.headers["content-type"];const D=r||FormData,$=new D;$.append("operations",Er(T,"Payload"));const R={};let H=0;_.forEach(ie=>{R[++H]=ie}),$.append("map",JSON.stringify(R)),H=0,_.forEach((ie,ee)=>{i($,String(++H),ee)}),v.body=$}else if(t&&!g.query.definitions.some(D=>D.kind==="OperationDefinition"&&D.operation==="mutation")&&(v.method="GET"),v.method==="GET"){const{newURI:D,parseError:$}=Nm(I,C);if($)return new we(R=>{R.error($)});I=D}else v.body=Er(T,"Payload");const{controller:h}=Mm();typeof h!="boolean"&&(v.signal&&(v.signal.aborted?h.abort():v.signal.addEventListener("abort",()=>{h.abort()},{once:!0})),v.signal=h.signal);const E=s||fetch;return new we(D=>{let $;return E(I,v).then(R=>(g.setContext({response:R}),R)).then(Fm(g)).then(R=>{D.next(R),D.complete()}).catch(R=>{$||(R.result&&R.result.errors&&R.result.data&&D.next(R.result),D.error(R))}),()=>{$=!0,typeof h!="boolean"&&h.abort()}})})}const vt=e=>(t,{args:n,canRead:r,toReference:i})=>r(t)?t:i({__typename:e,id:n==null?void 0:n.id}),Fn=(e,{canRead:t})=>{if(e!==void 0)return t(e)?e:null},Ym={Query:{fields:{findImage:{read:vt("Image")},findPerformer:{read:vt("Performer")},findStudio:{read:vt("Studio")},findGroup:{read:vt("Group")},findGallery:{read:vt("Gallery")},findScene:{read:vt("Scene")},findTag:{read:vt("Tag")},findSavedFilter:{read:vt("SavedFilter")}}},Scene:{fields:{studio:{read:Fn}}},Image:{fields:{studio:{read:Fn},paths:{merge:!1}}},Group:{fields:{studio:{read:Fn}}},Gallery:{fields:{studio:{read:Fn}}},Studio:{fields:{parent_studio:{read:Fn}}}},Qm={BaseFile:["VideoFile","ImageFile","GalleryFile"],VisualFile:["VideoFile","ImageFile"]},Km=((cf=document.querySelector("base"))==null?void 0:cf.getAttribute("href"))??"/",pa=e=>{let t=new URL(window.location.origin+Km);return e&&(t.pathname+=e),t},Jm=()=>{const e=pa("graphql"),t=pa("graphql");t.protocol==="https:"?t.protocol="wss:":t.protocol="ws:";const n=Wm({uri:e.toString()}),r=Tm({url:t.toString(),retryAttempts:1/0,shouldRetry(){return!0}}),i=new _m(r),a=tu(({networkError:l})=>{if(l&&l.statusCode===401){const f=new URL(pa("login"),window.location.toString());f.searchParams.append("returnURL",window.location.href),window.location.href=f.toString()}}),s=m.ApolloLink.split(({query:l})=>{const f=em(l);return f.kind==="OperationDefinition"&&f.operation==="subscription"},i,n),u=m.ApolloLink.from([a,s]),o=new m.InMemoryCache({typePolicies:Ym,possibleTypes:Qm}),c=new m.ApolloClient({link:u,cache:o});return c.subscribe({query:Xf}).subscribe({next:()=>{c.resetStore()}}),{cache:o,client:c,wsClient:r}},{client:Tr}=Jm();function ru(e,t){const n={};for(const r of t){const{selections:i}=Zp(r).selectionSet;for(const a of i){if(!Kp(a))continue;const s=a.name.value;n[s]=(u,{DELETE:o})=>o}}e.modify({fields:n}),e.gc()}function iu(e,t,n){const r=e.extract();for(const i in r){if(n!=null&&n.includes(i))continue;const s=r[i].__typename;if(s&&t[s]){const u={};for(const o of t[s])u[o]=(c,{DELETE:l})=>l;e.modify({id:i,fields:u})}}}const Xm=e=>Tr.query({query:co,variables:{scene_ids:e}}),Zm=e=>Tr.query({query:uo,variables:{filter:e.makeFindFilter(),scene_marker_filter:e.makeFilter()}}),eg=e=>Jf({variables:{id:e},skip:e==="new"||e===""}),tg=e=>Tr.query({query:fo,variables:{ids:e}}),au=e=>Tr.query({query:fo,variables:{filter:e.makeFindFilter(),tag_filter:e.makeFilter()}});function ng(e,t,n){e.modify({fields:{stats(r){return{...r,[t]:r[t]+n}}}})}const su={Tag:["parents","children"]},rg=[Uf,uo,co,Gf,qf,zf,lo],ig=()=>Bf({update(e,t){var i;const n=(i=t.data)==null?void 0:i.tagCreate;if(!n)return;ng(e,"tag_count",1);const r={__typename:"Tag",id:n.id};iu(e,su,e.identify(r)),ru(e,[lo])}}),ag=()=>Vf({update(e,t){var i;const n=(i=t.data)==null?void 0:i.tagUpdate;if(!n)return;const r={__typename:"Tag",id:n.id};iu(e,su,e.identify(r)),ru(e,rg)}}),sg=e=>Qf({variables:{path:e}}),og=200,ug=25,Nn=["byte","kibibyte","mebibyte","gibibyte","tebibyte","pebibyte"],cg=["B","KiB","MiB","GiB","TiB","PiB"],lg=(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return{size:0,unit:Nn[0]};let t=0,n=e;for(;n>=1024&&t+1<Nn.length;)n/=1024,t++;return{size:n,unit:Nn[t]}},de=class de{constructor(t,n,r,i){this.singular=t,this.plural=n,this.shortString=r,this.secs=i}toString(){return this.shortString}};ne(de,"SECOND",new de("second","seconds","s",1)),ne(de,"MINUTE",new de("minute","minutes","m",60)),ne(de,"HOUR",new de("hour","hours","h",de.MINUTE.secs*60)),ne(de,"DAY",new de("day","days","D",de.HOUR.secs*24)),ne(de,"WEEK",new de("week","weeks","W",de.DAY.secs*7)),ne(de,"MONTH",new de("month","months","M",de.DAY.secs*30)),ne(de,"YEAR",new de("year","years","Y",de.DAY.secs*365)),ne(de,"DURATIONS",[de.SECOND,de.MINUTE,de.HOUR,de.DAY,de.WEEK,de.MONTH,de.YEAR]);let Ct=de;class ou{constructor(t,n){this.count=t,this.duration=n}toString(){return this.count.toString()+this.duration.toString()}}const dg=(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return[new ou(0,Ct.DURATIONS[0])];const t=[];let n=e;for(let r=Ct.DURATIONS.length-1;r>=0;r--){const i=Math.floor(n/Ct.DURATIONS[r].secs);i!==0&&(n%=Ct.DURATIONS[r].secs,t.push(new ou(i,Ct.DURATIONS[r])))}return t},fg=(e=0,t=2)=>dg(e).slice(0,t).join(" "),pg=e=>{const t=Nn.indexOf(e);return cg[t]},mg=e=>Nn.indexOf(e)>=3?1:0,Dr=(e,t)=>{let n=!1;e<0&&(n=!0,e=-e);const r=e%1,i=Math.round(r*1e3);let a=Math.trunc(e);const s=a%60;a=(a-s)/60;const u=a%60;a=(a-u)/60;const o=a;let c=String(s).padStart(2,"0");return o===0?c=String(u)+":"+c:(c=String(u).padStart(2,"0")+":"+c,c=String(o)+":"+c),t&&i>0&&(c+="."+i.toString().padStart(3,"0")),n?"-"+c:c},gg=(e,t)=>t===void 0?Dr(e):`${Dr(e)}-${Dr(t)}`,hg=e=>{if(!e)return null;const t=e.split(":");if(t.length>3)return null;let n=t[t.length-1],r=0;if(n.includes(".")){const s=n.split(".");if(s.length!==2)return null;n=s[0];const u=parseInt(s[1],10);if(Number.isNaN(u))return null;r=u/1e3}let i=0,a=1;for(;t.length>0;){const s=t.pop();if(s===void 0)return null;const u=parseInt(s,10);if(Number.isNaN(u))return null;i+=a*u,a*=60}return i+r},vg=e=>e?e.replace(/^.*[\\/]/,""):"No File Name",bg=e=>{if(!e)return null;const t=e.split("-");if(t.length!==3)return null;const n=Number(t[0]),r=Math.max(0,Number(t[1])-1),i=Number(t[2]);return new Date(n,r,i,0,0,0,0)},$r=e=>{if(!e)return null;const t=e.split("-");let n=Number(t[0]);Number.isNaN(n)&&(n=new Date().getFullYear());let r=0;t.length>1&&(r=Math.max(0,Number(t[1])-1),(r>11||Number.isNaN(r))&&(r=0));let i=1;return t.length>2&&(i=Number(t[2]),(i>31||Number.isNaN(i))&&(i=1)),new Date(n,r,i,0,0,0,0)},yg=e=>{if(!e)return null;const t=e.split(" ");let n=null;if(t.length>0&&(n=$r(t[0])),n||(n=new Date),t.length>1){const r=t[1].split(":");n&&r.length>0&&n.setHours(Number(r[0])),n&&r.length>1&&n.setMinutes(Number(r[1])),n&&r.length>2&&n.setSeconds(Number(r[2]))}return n};function uu(e){return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`}function Sg(e){return`${uu(e)} ${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`}const xg=(e,t)=>{if(!e)return 0;const n=$r(e),r=t?$r(t):new Date;if(!n||!r)return 0;let i=r.getFullYear()-n.getFullYear();return(n.getMonth()>r.getMonth()||n.getMonth()>=r.getMonth()&&n.getDate()>r.getDate())&&(i-=1),i},Ig=e=>`${(e/1e6).toFixed(2)} megabits per second`,_g=(e,t)=>{const n=e>t?t:e;if(n>=6144)return"HUGE";if(n>=3840)return"8K";if(n>=3584)return"7K";if(n>=3e3)return"6K";if(n>=2560)return"5K";if(n>=1920)return"4K";if(n>=1440)return"1440p";if(n>=1080)return"1080p";if(n>=720)return"720p";if(n>=540)return"540p";if(n>=480)return"480p";if(n>=360)return"360p";if(n>=240)return"240p";if(n>=144)return"144p"},cu=(e,t)=>!e||e.startsWith("http://")||e.startsWith("https://")?e:t?e.startsWith(t.host)?`${t.protocol}//${e}`:`${t.protocol}//${t.host}/${e}`:`https://${e}`,wg=(e,t)=>{if(t)return t.hostname;if(e){let n="";try{const r=cu(e);r&&(e=r),n=new URL(e).hostname}catch{n=e}return n}else return""},lu=(e,t,n=!0)=>t?e.formatDate(t,{format:"long",timeZone:n?"utc":void 0}):"",Cg=(e,t,n=!0)=>{if(!t)return"";const r=t.match(/^(\d{4})$/);if(r){const a=parseInt(r[1],10);return e.formatDate(Date.UTC(a,0),{year:"numeric",timeZone:n?"utc":void 0})}const i=t.match(/^(\d{4})-(\d{2})$/);if(i){const a=parseInt(i[1],10),s=parseInt(i[2],10)-1;return e.formatDate(Date.UTC(a,s),{year:"numeric",month:"long",timeZone:n?"utc":void 0})}return e.formatDate(t,{format:"long",timeZone:n?"utc":void 0})},Og=(e,t,n=!1)=>`${lu(e,t,n)} ${e.formatTime(t,{timeZone:n?"utc":void 0})}`,ma=["","K","M","B"],Fe={fileSize:lg,formatFileSizeUnit:pg,fileSizeFractionalDigits:mg,secondsToTimestamp:Dr,formatTimestampRange:gg,timestampToSeconds:hg,fileNameFromPath:vg,stringToDate:bg,stringToFuzzyDate:$r,stringToFuzzyDateTime:yg,dateToString:uu,dateTimeToString:Sg,age:xg,bitRate:Ig,resolution:_g,sanitiseURL:cu,domainFromURL:wg,formatDate:lu,formatFuzzyDate:Cg,formatDateTime:Og,secondsAsTimeString:fg,abbreviateCounter:(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return{size:0,unit:ma[0]};let t=0,n=0,r=e;for(;r>=1e3&&t+1<ma.length;)r/=1e3,t++,n=1;return{size:r,unit:ma[t],digits:n}},stripQuotes:e=>e.startsWith('"')&&e.endsWith('"')?e.slice(1,-1):e,addQuotes:e=>`"${e}"`},Eg={[y.Equals]:"criterion_modifier.equals",[y.NotEquals]:"criterion_modifier.not_equals",[y.GreaterThan]:"criterion_modifier.greater_than",[y.LessThan]:"criterion_modifier.less_than",[y.IsNull]:"criterion_modifier.is_null",[y.NotNull]:"criterion_modifier.not_null",[y.Includes]:"criterion_modifier.includes",[y.IncludesAll]:"criterion_modifier.includes_all",[y.Excludes]:"criterion_modifier.excludes",[y.MatchesRegex]:"criterion_modifier.matches_regex",[y.NotMatchesRegex]:"criterion_modifier.not_matches_regex",[y.Between]:"criterion_modifier.between",[y.NotBetween]:"criterion_modifier.not_between"};class du{constructor(t){ne(this,"criterionOption");this.criterionOption=t}isValid(){return!0}clone(){const t=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return t.cloneValues(),t}cloneValues(){}getId(){return`${this.criterionOption.type}`}}class ve extends du{constructor(n,r){super(n);ne(this,"_modifier");ne(this,"_value");this.modifier=n.defaultModifier,this.value=r}get modifier(){return this._modifier}set modifier(n){this._modifier=n}get value(){return this._value}set value(n){this._value=n}isValid(){return!0}modifierCriterionOption(){return this.criterionOption}clone(){const n=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return n.cloneValues(),n}cloneValues(){}static getModifierLabel(n,r){const i=Eg[r];return i?n.formatMessage({id:i}):""}getLabel(n,r=!1){const i=ve.getModifierLabel(n,this.modifier);let a="";this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(a=this.getLabelValue(n));const s=r?this.criterionOption.sfwMessageID??this.criterionOption.messageID:this.criterionOption.messageID;return n.formatMessage({id:"criterion_modifier.format_string"},{criterion:n.formatMessage({id:s}),modifierString:i,valueString:a})}toQueryParams(){const n={type:this.criterionOption.type,modifier:this.modifier};return this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(n.value=this.encodeValue()),n}encodeValue(){return this.value}decodeValue(n){n!=null&&(this.value=n)}fromDecodedParams(n){const r=n;this.modifier=r.modifier,this.decodeValue(r.value)}setFromSavedCriterion(n){const r=n;r.value!==void 0&&r.value!==null&&(this.value=r.value),this.modifier=r.modifier}applyToCriterionInput(n){n[this.criterionOption.type]=this.toCriterionInput()}applyToSavedCriterion(n){n[this.criterionOption.type]={value:this.value,modifier:this.modifier}}toCriterionInput(){return{value:this.value,modifier:this.modifier}}}class fu{constructor(t){ne(this,"type");ne(this,"messageID");ne(this,"makeCriterionFn");ne(this,"sfwMessageID");ne(this,"hidden",!1);this.type=t.type,this.messageID=t.messageID,this.makeCriterionFn=t.makeCriterion,this.hidden=t.hidden??!1,this.sfwMessageID=t.sfwMessageID}makeCriterion(t){return this.makeCriterionFn(this,t)}}class fe extends fu{constructor(n){super(n);ne(this,"modifierOptions");ne(this,"defaultModifier");ne(this,"options");ne(this,"inputType");this.modifierOptions=n.modifierOptions??[],this.defaultModifier=n.defaultModifier??y.Equals,this.options=n.options,this.inputType=n.inputType}}class ga extends fe{constructor(t,n,r,i,a){const s=[y.Includes,y.Excludes,y.IsNull,y.NotNull];let u=y.Includes;r&&(s.unshift(y.IncludesAll),u=y.IncludesAll),super({messageID:t,type:n,modifierOptions:s,defaultModifier:u,inputType:i,makeCriterion:a||(()=>new kn(this))})}}class kn extends ve{constructor(t,n=[]){super(t,n)}cloneValues(){this.value=this.value.map(t=>({...t}))}getLabelValue(t){return this.value.map(n=>n.label).join(", ")}toCriterionInput(){return{value:this.value.map(t=>t.id),modifier:this.modifier}}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull?!0:this.value.length>0}}class An extends ve{constructor(t,n={items:[],excluded:[],depth:0}){super(t,n)}cloneValues(){this.value={...this.value,items:this.value.items.map(t=>({...t})),excluded:this.value.excluded.map(t=>({...t}))}}get modifier(){return this._modifier}set modifier(t){this._modifier=t,this.value&&t!==y.Includes&&t!==y.IncludesAll&&(this.value.excluded=[])}setFromSavedCriterion(t){const{modifier:n,value:r}=t;r!==void 0&&(this.value={items:r.items||[],excluded:r.excluded||[],depth:r.depth||0});const i=this.criterionOption.modifierOptions??[];n===y.Excludes&&i.find(a=>a===y.Excludes)===void 0?(this.modifier=y.Includes,this.value.excluded=[...this.value.excluded,...this.value.items],this.value.items=[]):this.modifier=n}getLabelValue(t){const n=(this.value.items??[]).map(r=>r.label).join(", ");return this.value.depth===0?n:`${n} (+${this.value.depth>0?this.value.depth:"all"})`}toCriterionInput(){let t=[];const n=this.modifier===y.Equals?0:this.value.depth;return this.value.excluded&&(t=this.value.excluded.map(r=>r.id)),{value:this.value.items.map(r=>r.id),excludes:t,modifier:this.modifier,depth:n}}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull?!0:this.value.items.length>0||this.value.excluded&&this.value.excluded.length>0}getLabel(t,n){let r="criterion_modifier.format_string",i=ve.getModifierLabel(t,this.modifier),a="",s="";this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(a=this.value.items.map(o=>o.label).join(", "),this.value.excluded&&this.value.excluded.length>0&&(this.value.items.length===0?(i=ve.getModifierLabel(t,y.Excludes),a=this.value.excluded.map(o=>o.label).join(", ")):(r="criterion_modifier.format_string_excludes",s=this.value.excluded.map(o=>o.label).join(", "))),this.value.depth!==0&&(r+="_depth"));const u=n?this.criterionOption.sfwMessageID??this.criterionOption.messageID:this.criterionOption.messageID;return t.formatMessage({id:r},{criterion:t.formatMessage({id:u}),modifierString:i,valueString:a,excludedString:s,depth:this.value.depth})}}class Mr extends fe{constructor(t){super({modifierOptions:[y.Equals,y.NotEquals,y.Includes,y.Excludes,y.IsNull,y.NotNull,y.MatchesRegex,y.NotMatchesRegex],defaultModifier:y.Equals,inputType:"text",makeCriterion:()=>new Ze(this),...t})}}function re(e,t,n){return new Mr({messageID:t??e,type:e,...n})}class Tg extends fe{constructor(t,n){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.Includes,y.Excludes,y.MatchesRegex,y.NotMatchesRegex],defaultModifier:y.Equals,inputType:"text",makeCriterion:()=>new Ze(this)})}}function Pr(e,t){return new Tg(t??e,e)}class Ze extends ve{constructor(t){super(t,"")}getLabelValue(t){return this.value}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull||this.value.length>0}}class ha extends ve{constructor(t,n=[]){super(t,n)}cloneValues(){this.value=this.value.slice()}getLabelValue(t){return this.value.join(", ")}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull||this.value.length>0}}class Ot extends fe{constructor(t,n,r){super({messageID:t,type:n,modifierOptions:[],defaultModifier:y.Equals,options:["true","false"],makeCriterion:r||(()=>new Et(this))})}}function Fr(e,t){return new Ot(e,e)}class Et extends Ze{toCriterionInput(){return this.value==="true"}isValid(){return this.value==="true"||this.value==="false"}}class pu extends fe{constructor(t,n,r){super({messageID:t,type:n,options:["true","false"],makeCriterion:r||(()=>new va(this))})}}class va extends Ze{toCriterionInput(){return this.value}isValid(){return this.value==="true"||this.value==="false"}}class Dg extends fe{constructor(t,n){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.IsNull,y.NotNull,y.Between,y.NotBetween],defaultModifier:y.Equals,inputType:"number",makeCriterion:()=>new ba(this)})}}function mu(e,t){return new Dg(t??e,e)}class $g extends fe{constructor(t,n,r){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.Between,y.NotBetween,y.IsNull,y.NotNull],defaultModifier:y.Equals,inputType:"number",makeCriterion:r||(()=>new ba(this))})}}class Nr extends fe{constructor(t,n,r,i){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.Between,y.NotBetween],defaultModifier:y.Equals,inputType:"number",makeCriterion:r||(()=>new ba(this)),...i})}}function Z(e,t,n){return new Nr(t??e,e,void 0,n)}function Ln(e,t){return e===y.Between||e===y.NotBetween?{value:t.value,value2:t.value2}:{value:t.value}}function Mg(e){return typeof e.value=="object"?e.value:{value:e.value,value2:e.value2}}class ba extends ve{constructor(t){super(t,{value:void 0,value2:void 0})}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(t){typeof t!="object"?this._value={value:t,value2:void 0}:this._value=t}toCriterionInput(){var t,n;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??0,value2:(n=this.value)==null?void 0:n.value2}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return Ln(this.modifier,this.value)}getLabelValue(t){const{value:n,value2:r}=this.value;return this.modifier===y.Between||this.modifier===y.NotBetween?`${n}, ${r??0}`:`${n}`}isValid(){if(this.modifier===y.IsNull||this.modifier===y.NotNull)return!0;const{value:t,value2:n}=this.value;return!(t===void 0||n===void 0&&(this.modifier===y.Between||this.modifier===y.NotBetween))}}let Pg=class extends Nr{constructor(t,n){super(t,n,()=>new gu(this))}};function kr(e,t){return new Pg(e,e)}class Fg extends $g{constructor(t,n){super(t,n,()=>new gu(this))}}function Ng(e,t){return new Fg(e,e)}class gu extends ve{constructor(t){super(t,{value:void 0,value2:void 0})}cloneValues(){this.value={...this.value}}toCriterionInput(){var t,n;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??0,value2:(n=this.value)==null?void 0:n.value2}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return Ln(this.modifier,this.value)}getLabelValue(t){const n=Fe.secondsToTimestamp(this.value.value??0),r=Fe.secondsToTimestamp(this.value.value2??0);return this.modifier===y.Between||this.modifier===y.NotBetween?`${n}, ${r}`:n}isValid(){if(this.modifier===y.IsNull||this.modifier===y.NotNull)return!0;const{value:t,value2:n}=this.value;return!(t===void 0||n===void 0&&(this.modifier===y.Between||this.modifier===y.NotBetween))}}class kg extends fe{constructor(t,n){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.IsNull,y.NotNull,y.Between,y.NotBetween],defaultModifier:y.Equals,inputType:"text",makeCriterion:()=>new Ag(this)})}}function ot(e){return new kg(e,e)}class Ag extends ve{constructor(t){super(t,{value:"",value2:void 0})}cloneValues(){this.value={...this.value}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return Ln(this.modifier,this.value)}toCriterionInput(){var t,n;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??"",value2:(n=this.value)==null?void 0:n.value2}}getLabelValue(){const{value:t}=this.value;return this.modifier===y.Between||this.modifier===y.NotBetween?`${t}, ${this.value.value2}`:`${t}`}isValid(){if(this.modifier===y.IsNull||this.modifier===y.NotNull)return!0;const{value:t,value2:n}=this.value;return!(!t||!n&&(this.modifier===y.Between||this.modifier===y.NotBetween))}}class Lg extends fe{constructor(t,n){super({messageID:t,type:n,modifierOptions:[y.GreaterThan,y.LessThan,y.Between,y.NotBetween],defaultModifier:y.GreaterThan,inputType:"text",makeCriterion:()=>new jg(this)})}}function Ce(e){return new Lg(e,e)}class jg extends ve{constructor(t){super(t,{value:"",value2:void 0})}cloneValues(){this.value={...this.value}}toCriterionInput(){return{modifier:this.modifier,value:this.transformValueToInput(this.value.value??""),value2:this.value.value2?this.transformValueToInput(this.value.value2):null}}setFromSavedCriterion(t){super.setFromSavedCriterion(t),this.value=Mg(t)}encodeValue(){return Ln(this.modifier,this.value)}getLabelValue(){const{value:t}=this.value;return this.modifier===y.Between||this.modifier===y.NotBetween?`${t}, ${this.value.value2}`:`${t}`}transformValueToInput(t){return t=t.trim(),/^\d{4}-\d{2}-\d{2}(( |T)\d{2}:\d{2})?$/.test(t)?t.replace(" ","T"):""}isValid(){if(this.modifier===y.IsNull||this.modifier===y.NotNull)return!0;const{value:t,value2:n}=this.value;return!(!t||!n&&(this.modifier===y.Between||this.modifier===y.NotBetween))}}class Bg extends Mr{constructor(t){super({messageID:"unsupported_criterion",type:t,makeCriterion:()=>new Rg(this)})}}class Rg extends Ze{getLabel(t){const n=ve.getModifierLabel(t,this.modifier);let r="";return this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(r=this.getLabelValue(t)),t.formatMessage({id:"criterion_modifier.format_string"},{criterion:t.formatMessage({id:"criterion.unsupported"},{type:this.criterionOption.type}),modifierString:n,valueString:r})}applyToCriterionInput(){}applyToSavedCriterion(){}setFromSavedCriterion(){}}const hu=new Ot("favourite","filter_favorites",()=>new Vg);class Vg extends Et{constructor(){super(hu)}}const vu=new Ot("favourite","favorite",()=>new qg);class qg extends Et{constructor(){super(vu)}}const bu=new Ot("favourite","favorite",()=>new Gg);class Gg extends Et{constructor(){super(bu)}}const Ar=new Ot("performer_favorite","performer_favorite",()=>new Ug);class Ug extends Et{constructor(){super(Ar)}}class zg extends Ze{toCriterionInput(){return this.value}}class Tt extends fe{constructor(t,n,r){super({messageID:t,type:n,options:r,modifierOptions:[],defaultModifier:y.Equals,makeCriterion:()=>new zg(this)})}}const Hg=new Tt("isMissing","is_missing",["title","code","details","director","url","date","rating","cover","galleries","studio","group","performers","tags","stash_id"]),Wg=new Tt("isMissing","is_missing",["title","details","photographer","url","date","code","rating","galleries","studio","performers","tags"]),Yg=new Tt("isMissing","is_missing",["url","ethnicity","country","hair_color","eye_color","height","weight","measurements","fake_tits","penis_length","circumcised","career_start","career_end","tattoos","piercings","aliases","gender","birthdate","death_date","disambiguation","tags","image","details","rating","stash_id"]),Qg=new Tt("isMissing","is_missing",["title","code","details","photographer","url","date","rating","cover","studio","performers","tags","scenes"]),Kg=new Tt("isMissing","is_missing",["image","aliases","description","stash_id"]),Jg=new Tt("isMissing","is_missing",["image","stash_id","details","url","aliases","tags","rating"]),Xg=new Tt("isMissing","is_missing",["aliases","description","director","date","url","rating","studio","performers","tags","front_image","back_image","scenes"]),Lr=new Ot("organized","organized",()=>new Zg);class Zg extends Et{constructor(){super(Lr)}}const yu=new pu("hasChapters","has_chapters",()=>new eh);class eh extends va{constructor(){super(yu)}}const th=[y.IncludesAll,y.Includes,y.Equals,y.IsNull,y.NotNull],nh=y.IncludesAll,rh="performers",Jt=new fe({messageID:"performers",type:"performers",modifierOptions:th,defaultModifier:nh,inputType:rh,makeCriterion:()=>new Xt});class Xt extends ve{constructor(){super(Jt,{items:[],excluded:[]})}cloneValues(){this.value={...this.value,items:this.value.items.map(t=>({...t})),excluded:this.value.excluded.map(t=>({...t}))}}get modifier(){return this._modifier}set modifier(t){this._modifier=t,t!==y.Includes&&t!==y.IncludesAll&&(this.value.excluded=[])}setFromSavedCriterion(t){const{modifier:n,value:r}=t;Array.isArray(r)?this.value={items:r,excluded:[]}:r!==void 0&&(this.value={items:r.items||[],excluded:r.excluded||[]}),n===y.Excludes?(this.modifier=y.Includes,this.value.excluded=[...this.value.excluded,...this.value.items],this.value.items=[]):this.modifier=n}getLabelValue(t){return this.value.items.map(n=>n.label).join(", ")}toCriterionInput(){let t=[];return this.value.excluded&&(t=this.value.excluded.map(n=>n.id)),{value:this.value.items.map(n=>n.id),excludes:t,modifier:this.modifier}}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull?!0:this.value.items.length>0||this.value.excluded&&this.value.excluded.length>0}getLabel(t){let n="criterion_modifier.format_string",r=ve.getModifierLabel(t,this.modifier),i="",a="";return this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(i=this.value.items.map(s=>s.label).join(", "),this.value.excluded&&this.value.excluded.length>0&&(this.value.items.length===0?(r=ve.getModifierLabel(t,y.Excludes),i=this.value.excluded.map(s=>s.label).join(", ")):(n="criterion_modifier.format_string_excludes",a=this.value.excluded.map(s=>s.label).join(", ")))),t.formatMessage({id:n},{criterion:t.formatMessage({id:this.criterionOption.messageID}),modifierString:r,valueString:i,excludedString:a})}}const Su=new Map([["144p",Le.VeryLow],["240p",Le.Low],["360p",Le.R360P],["480p",Le.Standard],["540p",Le.WebHd],["720p",Le.StandardHd],["1080p",Le.FullHd],["1440p",Le.QuadHd],["4k",Le.FourK],["5k",Le.FiveK],["6k",Le.SixK],["7k",Le.SevenK],["8k",Le.EightK],["Huge",Le.Huge]]),ih=(e,t)=>e?Su.get(e):void 0,ah=Array.from(Su.keys());class xu extends fe{constructor(t,n){super({messageID:t,type:t,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan],options:ah,makeCriterion:n})}}class Iu extends Ze{toCriterionInput(){const t=ih(this.value);if(t!==void 0)return{value:t,modifier:this.modifier}}}const ya=new xu("resolution",()=>new sh);class sh extends Iu{constructor(){super(ya)}}const _u=new xu("average_resolution",()=>new oh);class oh extends Iu{constructor(){super(_u)}}const wu="scenes",Cu=new ga("scenes","scenes",!0,wu,()=>new uh);class uh extends kn{constructor(){super(Cu)}}const ch=[y.Includes,y.Excludes],lh=y.Includes,Ou=new fe({messageID:"scenes",type:"scenes",modifierOptions:ch,defaultModifier:lh,inputType:wu,makeCriterion:()=>new Eu});class Eu extends kn{constructor(){super(Ou)}}const dh=[y.Includes,y.IsNull,y.NotNull],fh=y.Includes,Tu="studios",Zt=new fe({messageID:"studios",type:"studios",modifierOptions:dh,defaultModifier:fh,inputType:Tu,makeCriterion:()=>new en});class en extends An{constructor(){super(Zt)}}const Du=new ga("parent_studios","parents",!1,Tu,()=>new $u);class $u extends kn{constructor(){super(Du)}}const Mu=[y.IncludesAll,y.Includes,y.Equals,y.IsNull,y.NotNull],Sa=[y.IncludesAll,y.Includes,y.IsNull,y.NotNull],ph=y.IncludesAll,mh="tags";class jn extends fe{constructor(t,n,r){super({messageID:t,type:n,modifierOptions:r,defaultModifier:ph,inputType:mh,makeCriterion:()=>new jr(this)})}}const bt=new jn("tags","tags",Mu),gh=new jn("scene_tags","scene_tags",Mu),xa=new jn("performer_tags","performer_tags",Sa),Pu=new jn("parent_tags","parents",Sa),Fu=new jn("sub_tags","children",Sa);class jr extends An{}const Ia=["title","path","rating","file_mod_time","tag_count","performer_count","random"];class Oe{constructor(t,n,r,i){ne(this,"defaultSortBy","");ne(this,"sortByOptions",[]);ne(this,"displayModeOptions",[]);ne(this,"criterionOptions",[]);this.defaultSortBy=t,this.sortByOptions=[...n,Oe.createSortBy("created_at"),Oe.createSortBy("updated_at")],this.displayModeOptions=r,this.criterionOptions=i}static createSortBy(t){return{messageID:t,value:t}}}var be=(e=>(e[e.Grid=0]="Grid",e[e.List=1]="List",e[e.Wall=2]="Wall",e[e.Tagger=3]="Tagger",e))(be||{}),Nu=(e=>(e.Stars="stars",e.Decimal="decimal",e))(Nu||{}),ku=(e=>(e.Full="full",e.Half="half",e.Quarter="quarter",e.Tenth="tenth",e))(ku||{});const Au={type:"stars",starPrecision:"full"};function hh(e,t){let n=t;n||(n=1);const r=1/n;return Math.round(e*r)/r}function vh(e){switch(e){case"full":return 1;case"half":return .5;case"quarter":return .25;case"tenth":return .1;default:return 1}}function Br(e,t){if(!e)return null;const{type:n,starPrecision:r}=t,i=n==="decimal"?.1:vh(r??"full"),s=100/(n==="decimal"?10:5);return hh(e/s,i)}function bh(e,t){const r=100/((t??"stars")==="decimal"?10:5);return Math.round(e*r)}const yh=[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.Between,y.NotBetween,y.IsNull,y.NotNull];function Sh(e){return(e==null?void 0:e.ui.ratingSystemOptions)??Au}const Dt=new fe({messageID:"rating",type:"rating100",modifierOptions:yh,defaultModifier:y.Equals,makeCriterion:(e,t)=>new xh(Sh(t)),inputType:"number"});class xh extends ve{constructor(n){super(Dt,{value:0,value2:void 0});ne(this,"ratingSystem");this.ratingSystem=n}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(n){typeof n!="object"?this._value={value:bh(n,this.ratingSystem.type),value2:void 0}:this._value=n}toCriterionInput(){return{modifier:this.modifier,value:this.value.value??0,value2:this.value.value2}}setFromSavedCriterion(n){super.setFromSavedCriterion(n)}encodeValue(){return Ln(this.modifier,this.value)}getLabelValue(){const{value:n,value2:r}=this.value;return this.modifier===y.Between||this.modifier===y.NotBetween?`${Br(n,this.ratingSystem)??0}, ${Br(r,this.ratingSystem)??0}`:`${Br(n,this.ratingSystem)??0}`}}const Rr=new Mr({messageID:"path",type:"path",defaultModifier:y.Includes,makeCriterion:()=>new Ih});class Ih extends Ze{constructor(){super(Rr)}}function _h(){this.__data__=[],this.size=0}function Lu(e,t){return e===t||e!==e&&t!==t}function Vr(e,t){for(var n=e.length;n--;)if(Lu(e[n][0],t))return n;return-1}var wh=Array.prototype,Ch=wh.splice;function Oh(e){var t=this.__data__,n=Vr(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Ch.call(t,n,1),--this.size,!0}function Eh(e){var t=this.__data__,n=Vr(t,e);return n<0?void 0:t[n][1]}function Th(e){return Vr(this.__data__,e)>-1}function Dh(e,t){var n=this.__data__,r=Vr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function ut(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ut.prototype.clear=_h,ut.prototype.delete=Oh,ut.prototype.get=Eh,ut.prototype.has=Th,ut.prototype.set=Dh;function $h(){this.__data__=new ut,this.size=0}function Mh(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Ph(e){return this.__data__.get(e)}function Fh(e){return this.__data__.has(e)}var ju=typeof global=="object"&&global&&global.Object===Object&&global,Nh=typeof self=="object"&&self&&self.Object===Object&&self,et=ju||Nh||Function("return this")(),tn=et.Symbol,Bu=Object.prototype,kh=Bu.hasOwnProperty,Ah=Bu.toString,Bn=tn?tn.toStringTag:void 0;function Lh(e){var t=kh.call(e,Bn),n=e[Bn];try{e[Bn]=void 0;var r=!0}catch{}var i=Ah.call(e);return r&&(t?e[Bn]=n:delete e[Bn]),i}var jh=Object.prototype,Bh=jh.toString;function Rh(e){return Bh.call(e)}var Vh="[object Null]",qh="[object Undefined]",Ru=tn?tn.toStringTag:void 0;function nn(e){return e==null?e===void 0?qh:Vh:Ru&&Ru in Object(e)?Lh(e):Rh(e)}function yt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Gh="[object AsyncFunction]",Uh="[object Function]",zh="[object GeneratorFunction]",Hh="[object Proxy]";function Vu(e){if(!yt(e))return!1;var t=nn(e);return t==Uh||t==zh||t==Gh||t==Hh}var _a=et["__core-js_shared__"],qu=function(){var e=/[^.]+$/.exec(_a&&_a.keys&&_a.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Wh(e){return!!qu&&qu in e}var Yh=Function.prototype,Qh=Yh.toString;function $t(e){if(e!=null){try{return Qh.call(e)}catch{}try{return e+""}catch{}}return""}var Kh=/[\\^$.*+?()[\]{}|]/g,Jh=/^\[object .+?Constructor\]$/,Xh=Function.prototype,Zh=Object.prototype,ev=Xh.toString,tv=Zh.hasOwnProperty,nv=RegExp("^"+ev.call(tv).replace(Kh,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function rv(e){if(!yt(e)||Wh(e))return!1;var t=Vu(e)?nv:Jh;return t.test($t(e))}function iv(e,t){return e==null?void 0:e[t]}function Mt(e,t){var n=iv(e,t);return rv(n)?n:void 0}var Rn=Mt(et,"Map"),Vn=Mt(Object,"create");function av(){this.__data__=Vn?Vn(null):{},this.size=0}function sv(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var ov="__lodash_hash_undefined__",uv=Object.prototype,cv=uv.hasOwnProperty;function lv(e){var t=this.__data__;if(Vn){var n=t[e];return n===ov?void 0:n}return cv.call(t,e)?t[e]:void 0}var dv=Object.prototype,fv=dv.hasOwnProperty;function pv(e){var t=this.__data__;return Vn?t[e]!==void 0:fv.call(t,e)}var mv="__lodash_hash_undefined__";function gv(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Vn&&t===void 0?mv:t,this}function Pt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Pt.prototype.clear=av,Pt.prototype.delete=sv,Pt.prototype.get=lv,Pt.prototype.has=pv,Pt.prototype.set=gv;function hv(){this.size=0,this.__data__={hash:new Pt,map:new(Rn||ut),string:new Pt}}function vv(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function qr(e,t){var n=e.__data__;return vv(t)?n[typeof t=="string"?"string":"hash"]:n.map}function bv(e){var t=qr(this,e).delete(e);return this.size-=t?1:0,t}function yv(e){return qr(this,e).get(e)}function Sv(e){return qr(this,e).has(e)}function xv(e,t){var n=qr(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function rn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}rn.prototype.clear=hv,rn.prototype.delete=bv,rn.prototype.get=yv,rn.prototype.has=Sv,rn.prototype.set=xv;var Iv=200;function _v(e,t){var n=this.__data__;if(n instanceof ut){var r=n.__data__;if(!Rn||r.length<Iv-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new rn(r)}return n.set(e,t),this.size=n.size,this}function an(e){var t=this.__data__=new ut(e);this.size=t.size}an.prototype.clear=$h,an.prototype.delete=Mh,an.prototype.get=Ph,an.prototype.has=Fh,an.prototype.set=_v;function wv(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var Gu=function(){try{var e=Mt(Object,"defineProperty");return e({},"",{}),e}catch{}}();function Cv(e,t,n){t=="__proto__"&&Gu?Gu(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Ov=Object.prototype,Ev=Ov.hasOwnProperty;function Tv(e,t,n){var r=e[t];(!(Ev.call(e,t)&&Lu(r,n))||n===void 0&&!(t in e))&&Cv(e,t,n)}function Dv(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function sn(e){return e!=null&&typeof e=="object"}var $v="[object Arguments]";function Uu(e){return sn(e)&&nn(e)==$v}var zu=Object.prototype,Mv=zu.hasOwnProperty,Pv=zu.propertyIsEnumerable,Fv=Uu(function(){return arguments}())?Uu:function(e){return sn(e)&&Mv.call(e,"callee")&&!Pv.call(e,"callee")},wa=Array.isArray;function Nv(){return!1}var Hu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Wu=Hu&&typeof module=="object"&&module&&!module.nodeType&&module,kv=Wu&&Wu.exports===Hu,Yu=kv?et.Buffer:void 0,Av=Yu?Yu.isBuffer:void 0,Qu=Av||Nv,Lv=9007199254740991,jv=/^(?:0|[1-9]\d*)$/;function Bv(e,t){var n=typeof e;return t=t??Lv,!!t&&(n=="number"||n!="symbol"&&jv.test(e))&&e>-1&&e%1==0&&e<t}var Rv=9007199254740991;function Ku(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Rv}var Vv="[object Arguments]",qv="[object Array]",Gv="[object Boolean]",Uv="[object Date]",zv="[object Error]",Hv="[object Function]",Wv="[object Map]",Yv="[object Number]",Qv="[object Object]",Kv="[object RegExp]",Jv="[object Set]",Xv="[object String]",Zv="[object WeakMap]",e0="[object ArrayBuffer]",t0="[object DataView]",n0="[object Float32Array]",r0="[object Float64Array]",i0="[object Int8Array]",a0="[object Int16Array]",s0="[object Int32Array]",o0="[object Uint8Array]",u0="[object Uint8ClampedArray]",c0="[object Uint16Array]",l0="[object Uint32Array]",ge={};ge[n0]=ge[r0]=ge[i0]=ge[a0]=ge[s0]=ge[o0]=ge[u0]=ge[c0]=ge[l0]=!0,ge[Vv]=ge[qv]=ge[e0]=ge[Gv]=ge[t0]=ge[Uv]=ge[zv]=ge[Hv]=ge[Wv]=ge[Yv]=ge[Qv]=ge[Kv]=ge[Jv]=ge[Xv]=ge[Zv]=!1;function d0(e){return sn(e)&&Ku(e.length)&&!!ge[nn(e)]}function Ca(e){return function(t){return e(t)}}var Ju=typeof exports=="object"&&exports&&!exports.nodeType&&exports,qn=Ju&&typeof module=="object"&&module&&!module.nodeType&&module,f0=qn&&qn.exports===Ju,Oa=f0&&ju.process,on=function(){try{var e=qn&&qn.require&&qn.require("util").types;return e||Oa&&Oa.binding&&Oa.binding("util")}catch{}}(),Xu=on&&on.isTypedArray,p0=Xu?Ca(Xu):d0,m0=Object.prototype,g0=m0.hasOwnProperty;function h0(e,t){var n=wa(e),r=!n&&Fv(e),i=!n&&!r&&Qu(e),a=!n&&!r&&!i&&p0(e),s=n||r||i||a,u=s?Dv(e.length,String):[],o=u.length;for(var c in e)g0.call(e,c)&&!(s&&(c=="length"||i&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Bv(c,o)))&&u.push(c);return u}var v0=Object.prototype;function Zu(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||v0;return e===n}function ec(e,t){return function(n){return e(t(n))}}var b0=ec(Object.keys,Object),y0=Object.prototype,S0=y0.hasOwnProperty;function x0(e){if(!Zu(e))return b0(e);var t=[];for(var n in Object(e))S0.call(e,n)&&n!="constructor"&&t.push(n);return t}function I0(e){return e!=null&&Ku(e.length)&&!Vu(e)}function _0(e){return I0(e)?h0(e):x0(e)}var tc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,nc=tc&&typeof module=="object"&&module&&!module.nodeType&&module,w0=nc&&nc.exports===tc,rc=w0?et.Buffer:void 0;rc&&rc.allocUnsafe;function C0(e,t){return e.slice()}function O0(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var s=e[n];t(s,n,e)&&(a[i++]=s)}return a}function E0(){return[]}var T0=Object.prototype,D0=T0.propertyIsEnumerable,ic=Object.getOwnPropertySymbols,$0=ic?function(e){return e==null?[]:(e=Object(e),O0(ic(e),function(t){return D0.call(e,t)}))}:E0;function M0(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var P0=ec(Object.getPrototypeOf,Object);function F0(e,t,n){var r=t(e);return wa(e)?r:M0(r,n(e))}function N0(e){return F0(e,_0,$0)}var Ea=Mt(et,"DataView"),Ta=Mt(et,"Promise"),Da=Mt(et,"Set"),$a=Mt(et,"WeakMap"),ac="[object Map]",k0="[object Object]",sc="[object Promise]",oc="[object Set]",uc="[object WeakMap]",cc="[object DataView]",A0=$t(Ea),L0=$t(Rn),j0=$t(Ta),B0=$t(Da),R0=$t($a),ct=nn;(Ea&&ct(new Ea(new ArrayBuffer(1)))!=cc||Rn&&ct(new Rn)!=ac||Ta&&ct(Ta.resolve())!=sc||Da&&ct(new Da)!=oc||$a&&ct(new $a)!=uc)&&(ct=function(e){var t=nn(e),n=t==k0?e.constructor:void 0,r=n?$t(n):"";if(r)switch(r){case A0:return cc;case L0:return ac;case j0:return sc;case B0:return oc;case R0:return uc}return t});var V0=Object.prototype,q0=V0.hasOwnProperty;function G0(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&q0.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var lc=et.Uint8Array;function Ma(e){var t=new e.constructor(e.byteLength);return new lc(t).set(new lc(e)),t}function U0(e,t){var n=Ma(e.buffer);return new e.constructor(n,e.byteOffset,e.byteLength)}var z0=/\w*$/;function H0(e){var t=new e.constructor(e.source,z0.exec(e));return t.lastIndex=e.lastIndex,t}var dc=tn?tn.prototype:void 0,fc=dc?dc.valueOf:void 0;function W0(e){return fc?Object(fc.call(e)):{}}function Y0(e,t){var n=Ma(e.buffer);return new e.constructor(n,e.byteOffset,e.length)}var Q0="[object Boolean]",K0="[object Date]",J0="[object Map]",X0="[object Number]",Z0="[object RegExp]",eb="[object Set]",tb="[object String]",nb="[object Symbol]",rb="[object ArrayBuffer]",ib="[object DataView]",ab="[object Float32Array]",sb="[object Float64Array]",ob="[object Int8Array]",ub="[object Int16Array]",cb="[object Int32Array]",lb="[object Uint8Array]",db="[object Uint8ClampedArray]",fb="[object Uint16Array]",pb="[object Uint32Array]";function mb(e,t,n){var r=e.constructor;switch(t){case rb:return Ma(e);case Q0:case K0:return new r(+e);case ib:return U0(e);case ab:case sb:case ob:case ub:case cb:case lb:case db:case fb:case pb:return Y0(e);case J0:return new r;case X0:case tb:return new r(e);case Z0:return H0(e);case eb:return new r;case nb:return W0(e)}}var pc=Object.create,gb=function(){function e(){}return function(t){if(!yt(t))return{};if(pc)return pc(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function hb(e){return typeof e.constructor=="function"&&!Zu(e)?gb(P0(e)):{}}var vb="[object Map]";function bb(e){return sn(e)&&ct(e)==vb}var mc=on&&on.isMap,yb=mc?Ca(mc):bb,Sb="[object Set]";function xb(e){return sn(e)&&ct(e)==Sb}var gc=on&&on.isSet,Ib=gc?Ca(gc):xb,hc="[object Arguments]",_b="[object Array]",wb="[object Boolean]",Cb="[object Date]",Ob="[object Error]",vc="[object Function]",Eb="[object GeneratorFunction]",Tb="[object Map]",Db="[object Number]",bc="[object Object]",$b="[object RegExp]",Mb="[object Set]",Pb="[object String]",Fb="[object Symbol]",Nb="[object WeakMap]",kb="[object ArrayBuffer]",Ab="[object DataView]",Lb="[object Float32Array]",jb="[object Float64Array]",Bb="[object Int8Array]",Rb="[object Int16Array]",Vb="[object Int32Array]",qb="[object Uint8Array]",Gb="[object Uint8ClampedArray]",Ub="[object Uint16Array]",zb="[object Uint32Array]",pe={};pe[hc]=pe[_b]=pe[kb]=pe[Ab]=pe[wb]=pe[Cb]=pe[Lb]=pe[jb]=pe[Bb]=pe[Rb]=pe[Vb]=pe[Tb]=pe[Db]=pe[bc]=pe[$b]=pe[Mb]=pe[Pb]=pe[Fb]=pe[qb]=pe[Gb]=pe[Ub]=pe[zb]=!0,pe[Ob]=pe[vc]=pe[Nb]=!1;function Gr(e,t,n,r,i,a){var s;if(s!==void 0)return s;if(!yt(e))return e;var u=wa(e);if(u)s=G0(e);else{var o=ct(e),c=o==vc||o==Eb;if(Qu(e))return C0(e);if(o==bc||o==hc||c&&!i)s=c?{}:hb(e);else{if(!pe[o])return i?e:{};s=mb(e,o)}}a||(a=new an);var l=a.get(e);if(l)return l;a.set(e,s),Ib(e)?e.forEach(function(p){s.add(Gr(p,t,n,p,e,a))}):yb(e)&&e.forEach(function(p,w){s.set(w,Gr(p,t,n,w,e,a))});var f=N0,g=u?void 0:f(e);return wv(g||e,function(p,w){g&&(w=p,p=e[w]),Tv(s,w,Gr(p,t,n,w,e,a))}),s}var Hb=1,Wb=4;function Ur(e){return Gr(e,Hb|Wb)}function yc(e){return e?e.map(t=>t).join(", "):""}const St=new fu({type:"custom_fields",messageID:"custom_fields.title",makeCriterion:()=>new Sc});class Sc extends du{constructor(){super(St);ne(this,"value",[])}isValid(){return this.value.length>0}applyToCriterionInput(n){n.custom_fields=Ur(this.value)}applyToSavedCriterion(n){n.custom_fields=Ur(this.value)}getLabel(n){var o;if(this.value.length===0)return"";const r=this.value[0];let i="",a="";r.modifier!==y.IsNull&&r.modifier!==y.NotNull&&(((o=r.value)==null?void 0:o.length)??0)>0&&(a=yc(r.value));const s=ve.getModifierLabel(n,r.modifier),u={criterion:r.field,modifierString:s,valueString:a,others:""};return this.value.length===1?i="custom_fields.criteria_format_string":(i="custom_fields.criteria_format_string_others",u.others=(this.value.length-1).toString()),n.formatMessage({id:i},u)}getValueLabel(n,r){var u;let i="";r.modifier!==y.IsNull&&r.modifier!==y.NotNull&&(((u=r.value)==null?void 0:u.length)??0)>0&&(i=yc(r.value));const a=ve.getModifierLabel(n,r.modifier),s={criterion:r.field,modifierString:a,valueString:i};return n.formatMessage({id:"custom_fields.criteria_format_string"},s)}toQueryParams(){return{type:this.criterionOption.type,value:this.value}}fromDecodedParams(n){const r=n;this.value=Ur(r.value)}setFromSavedCriterion(n){this.value=Ur(n)}}const xc=[y.Includes],Ic=y.Includes,_c="folders",Pa=new fe({messageID:"folder",type:"folder",modifierOptions:xc,defaultModifier:Ic,inputType:_c,makeCriterion:()=>new Yb}),wc=new fe({messageID:"parent_folder",type:"parent_folder",modifierOptions:xc,defaultModifier:Ic,inputType:_c,makeCriterion:()=>new Qb});class Yb extends An{constructor(){super(Pa)}applyToCriterionInput(t){t.files_filter={parent_folder:this.toCriterionInput()}}}class Qb extends An{constructor(){super(wc)}applyToCriterionInput(t){t.parent_folder=this.toCriterionInput()}}const Kb="path",Jb=["date",...Ia].map(Oe.createSortBy).concat([{messageID:"performer_age",value:"performer_age"},{messageID:"image_count",value:"images_count"},{messageID:"zip_file_count",value:"file_count"}]),Xb=[be.Grid,be.List,be.Wall],Zb=Z("performer_age"),ey=[re("title"),re("code","scene_code"),re("details"),re("photographer"),Rr,wc,re("checksum","media_info.md5"),Dt,Lr,_u,Qg,bt,yu,Z("tag_count"),xa,Jt,Z("performer_count"),Zb,Ar,Z("image_count"),Cu,Zt,re("url"),Z("file_count","zip_file_count"),ot("date"),Ce("created_at"),Ce("updated_at"),St],ty=new Oe(Kb,Jb,Xb,ey),Cc=new Map([["Landscape",gr.Landscape],["Portrait",gr.Portrait],["Square",gr.Square]]),ny=(e,t)=>e?Cc.get(e):void 0,ry=Array.from(Cc.keys());class iy extends ha{toCriterionInput(){return{value:this.value.map(t=>ny(t)).filter(t=>t)}}}class ay extends fe{constructor(t){super({messageID:t,type:t,options:ry,makeCriterion:()=>new iy(this)})}}const Oc=new ay("orientation"),sy="galleries",Fa=new ga("galleries","galleries",!0,sy,()=>new Ec);class Ec extends kn{constructor(){super(Fa)}}const oy={phash:"media_info.phash",stash_id:"stash_id",title:"title",url:"url"},Tc=["phash","stash_id","title","url"],Na=new fe({messageID:"media_info.phash",type:"phash_distance",inputType:"text",modifierOptions:[y.Equals,y.NotEquals,y.IsNull,y.NotNull],makeCriterion:()=>new ka});class ka extends ve{constructor(){super(Na,{value:"",distance:0})}cloneValues(){this.value={...this.value}}getLabelValue(){const{value:t,distance:n}=this.value;return(this.modifier===y.Equals||this.modifier===y.NotEquals)&&n?`${t} (${n})`:`${t}`}toCriterionInput(){return{value:this.value.value,modifier:this.modifier,distance:this.value.distance}}}const Dc=new fe({messageID:"duplicated",type:"duplicated",modifierOptions:[],defaultModifier:y.Equals,makeCriterion:()=>new uy});class uy extends ve{constructor(){super(Dc,{})}cloneValues(){this.value={...this.value}}getLabel(t){const n=[],r=t.formatMessage({id:"true"}),i=t.formatMessage({id:"false"});for(const a of Tc){const s=this.value[a];if(s!==void 0){const u=t.formatMessage({id:oy[a]});n.push(`${u}: ${s?r:i}`)}}return n.length===0&&this.value.duplicated!==void 0?`${t.formatMessage({id:"duplicated_phash"})}: ${this.value.duplicated?r:i}`:n.length===0?t.formatMessage({id:"duplicated"}):n.join(", ")}getLabelValue(t){return t.formatMessage({id:"duplicated"})}toCriterionInput(){return{duplicated:this.value.duplicated,distance:this.value.distance,phash:this.value.phash,url:this.value.url,stash_id:this.value.stash_id,title:this.value.title}}setFromSavedCriterion(t){const n=t;n.value!==void 0?typeof n.value=="object"?this.value=n.value:typeof n.value=="string"&&(this.value={phash:n.value==="true"}):typeof n=="object"&&(this.value=n),n.modifier&&(this.modifier=n.modifier)}isValid(){return Tc.some(n=>this.value[n]!==void 0)||this.value.duplicated!==void 0}}const cy="path",ly=["filesize","file_count","date","resolution","performer_age",...Ia].map(Oe.createSortBy).concat([{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"}]),dy=[be.Grid,be.Wall],fy=Z("performer_age"),py=[re("title"),re("code","scene_code"),re("details"),re("photographer"),Pr("checksum","media_info.md5"),Na,Rr,Pa,Fa,Lr,Z("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),ya,Oc,Wg,bt,Dt,Z("tag_count"),xa,Jt,Z("performer_count"),fy,Ar,Zt,re("url"),ot("date"),Z("file_count"),Ce("created_at"),Ce("updated_at"),St],my=new Oe(cy,ly,dy,py),$c="groups",Mc=[y.Includes,y.Excludes,y.IsNull,y.NotNull],Pc=y.Includes;class Aa extends fe{constructor(t,n){super({messageID:t,type:n,modifierOptions:Mc,defaultModifier:Pc,inputType:$c,makeCriterion:()=>new Gn(this)})}}const zr=new Aa("groups","groups");class Gn extends An{}const Fc=new Aa("containing_groups","containing_groups"),Nc=new Aa("sub_groups","sub_groups"),gy=new fe({messageID:"groups",type:"movies",modifierOptions:Mc,defaultModifier:Pc,inputType:$c,hidden:!0,makeCriterion:()=>new Gn(zr)}),hy="name",vy=["name","random","date","duration","rating","tag_count","sub_group_description","sub_group_order"].map(Oe.createSortBy).concat([{messageID:"scene_count",value:"scenes_count"},{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"}]),by=[be.Grid],yy=[Zt,Xg,re("url"),re("name"),re("director"),re("synopsis"),kr("duration"),Dt,Jt,ot("date"),Z("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Fc,Nc,Z("containing_group_count"),Z("sub_group_count"),bt,Z("tag_count"),Z("scene_count"),Ce("created_at"),Ce("updated_at"),St],Sy=new Oe(hy,vy,by,yy),kc=new Map([["Female",Ie.Female],["Male",Ie.Male],["Transgender Male",Ie.TransgenderMale],["Transgender Female",Ie.TransgenderFemale],["Intersex",Ie.Intersex],["Non-Binary",Ie.NonBinary]]);Ie.Female,Ie.Male,Ie.TransgenderFemale,Ie.TransgenderMale,Ie.Intersex,Ie.NonBinary;const xy=(e,t)=>{if(!e)return;const n=Object.entries(Ie).find(i=>i[1]===e);return n?n[1]:kc.get(e)},Iy=Array.from(kc.keys()),Ac=new fe({messageID:"gender",type:"gender",options:Iy,modifierOptions:[y.Includes,y.Excludes,y.IsNull,y.NotNull],defaultModifier:y.Includes,makeCriterion:()=>new _y});class _y extends ha{constructor(t=[]){super(Ac,t)}toCriterionInput(){return{value_list:this.value.map(n=>xy(n)),modifier:this.modifier}}setFromSavedCriterion(t){typeof t.value=="string"&&(t={...t,value:[t.value]}),super.setFromSavedCriterion(t)}}const Lc=new Map([["Uncut",mr.Uncut],["Cut",mr.Cut]]),wy=(e,t)=>{if(!e)return;const n=Object.entries(mr).find(i=>i[1]===e);return n?n[1]:Lc.get(e)},Cy=Array.from(Lc.keys()),jc=new fe({messageID:"circumcised",type:"circumcised",modifierOptions:[y.Includes,y.Excludes,y.IsNull,y.NotNull],defaultModifier:y.Includes,options:Cy,makeCriterion:()=>new Oy});class Oy extends ha{constructor(){super(jc)}toCriterionInput(){return{value:this.value.map(n=>wy(n)),modifier:this.modifier}}}const Un=new fe({messageID:"stash_id",type:"stash_id_endpoint",modifierOptions:[y.Equals,y.NotEquals,y.IsNull,y.NotNull],makeCriterion:()=>new Ey});class Ey extends ve{constructor(){super(Un,{endpoint:"",stashID:""})}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(t){typeof t!="object"?this._value={endpoint:"",stashID:t}:this._value=t}toCriterionInput(){return{endpoint:this.value.endpoint,stash_id:this.value.stashID,modifier:this.modifier}}getLabel(t){const n=ve.getModifierLabel(t,this.modifier);let r="";return this.modifier!==y.IsNull&&this.modifier!==y.NotNull?r=this.getLabelValue(t):this.value.endpoint&&(r="("+this.value.endpoint+")"),t.formatMessage({id:"criterion_modifier.format_string"},{criterion:t.formatMessage({id:this.criterionOption.messageID}),modifierString:n,valueString:r})}getLabelValue(t){let n=this.value.stashID;return this.value.endpoint&&(n+=" ("+this.value.endpoint+")"),n}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}toQueryParams(){super.toQueryParams();let t;return(this.modifier===y.IsNull||this.modifier===y.NotNull)&&!this.value.endpoint?t={type:this.criterionOption.type,modifier:this.modifier}:t={type:this.criterionOption.type,value:this.value,modifier:this.modifier},t}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull||this.value.stashID.length>0}}var Bc={};const Ty=[["AF","AFG","004","ISO 3166-2:AF"],["AL","ALB","008","ISO 3166-2:AL"],["DZ","DZA","012","ISO 3166-2:DZ"],["AS","ASM","016","ISO 3166-2:AS"],["AD","AND","020","ISO 3166-2:AD"],["AO","AGO","024","ISO 3166-2:AO"],["AI","AIA","660","ISO 3166-2:AI"],["AQ","ATA","010","ISO 3166-2:AQ"],["AG","ATG","028","ISO 3166-2:AG"],["AR","ARG","032","ISO 3166-2:AR"],["AM","ARM","051","ISO 3166-2:AM"],["AW","ABW","533","ISO 3166-2:AW"],["AU","AUS","036","ISO 3166-2:AU"],["AT","AUT","040","ISO 3166-2:AT"],["AZ","AZE","031","ISO 3166-2:AZ"],["BS","BHS","044","ISO 3166-2:BS"],["BH","BHR","048","ISO 3166-2:BH"],["BD","BGD","050","ISO 3166-2:BD"],["BB","BRB","052","ISO 3166-2:BB"],["BY","BLR","112","ISO 3166-2:BY"],["BE","BEL","056","ISO 3166-2:BE"],["BZ","BLZ","084","ISO 3166-2:BZ"],["BJ","BEN","204","ISO 3166-2:BJ"],["BM","BMU","060","ISO 3166-2:BM"],["BT","BTN","064","ISO 3166-2:BT"],["BO","BOL","068","ISO 3166-2:BO"],["BA","BIH","070","ISO 3166-2:BA"],["BW","BWA","072","ISO 3166-2:BW"],["BV","BVT","074","ISO 3166-2:BV"],["BR","BRA","076","ISO 3166-2:BR"],["IO","IOT","086","ISO 3166-2:IO"],["BN","BRN","096","ISO 3166-2:BN"],["BG","BGR","100","ISO 3166-2:BG"],["BF","BFA","854","ISO 3166-2:BF"],["BI","BDI","108","ISO 3166-2:BI"],["KH","KHM","116","ISO 3166-2:KH"],["CM","CMR","120","ISO 3166-2:CM"],["CA","CAN","124","ISO 3166-2:CA"],["CV","CPV","132","ISO 3166-2:CV"],["KY","CYM","136","ISO 3166-2:KY"],["CF","CAF","140","ISO 3166-2:CF"],["TD","TCD","148","ISO 3166-2:TD"],["CL","CHL","152","ISO 3166-2:CL"],["CN","CHN","156","ISO 3166-2:CN"],["CX","CXR","162","ISO 3166-2:CX"],["CC","CCK","166","ISO 3166-2:CC"],["CO","COL","170","ISO 3166-2:CO"],["KM","COM","174","ISO 3166-2:KM"],["CG","COG","178","ISO 3166-2:CG"],["CD","COD","180","ISO 3166-2:CD"],["CK","COK","184","ISO 3166-2:CK"],["CR","CRI","188","ISO 3166-2:CR"],["CI","CIV","384","ISO 3166-2:CI"],["HR","HRV","191","ISO 3166-2:HR"],["CU","CUB","192","ISO 3166-2:CU"],["CY","CYP","196","ISO 3166-2:CY"],["CZ","CZE","203","ISO 3166-2:CZ"],["DK","DNK","208","ISO 3166-2:DK"],["DJ","DJI","262","ISO 3166-2:DJ"],["DM","DMA","212","ISO 3166-2:DM"],["DO","DOM","214","ISO 3166-2:DO"],["EC","ECU","218","ISO 3166-2:EC"],["EG","EGY","818","ISO 3166-2:EG"],["SV","SLV","222","ISO 3166-2:SV"],["GQ","GNQ","226","ISO 3166-2:GQ"],["ER","ERI","232","ISO 3166-2:ER"],["EE","EST","233","ISO 3166-2:EE"],["ET","ETH","231","ISO 3166-2:ET"],["FK","FLK","238","ISO 3166-2:FK"],["FO","FRO","234","ISO 3166-2:FO"],["FJ","FJI","242","ISO 3166-2:FJ"],["FI","FIN","246","ISO 3166-2:FI"],["FR","FRA","250","ISO 3166-2:FR"],["GF","GUF","254","ISO 3166-2:GF"],["PF","PYF","258","ISO 3166-2:PF"],["TF","ATF","260","ISO 3166-2:TF"],["GA","GAB","266","ISO 3166-2:GA"],["GM","GMB","270","ISO 3166-2:GM"],["GE","GEO","268","ISO 3166-2:GE"],["DE","DEU","276","ISO 3166-2:DE"],["GH","GHA","288","ISO 3166-2:GH"],["GI","GIB","292","ISO 3166-2:GI"],["GR","GRC","300","ISO 3166-2:GR"],["GL","GRL","304","ISO 3166-2:GL"],["GD","GRD","308","ISO 3166-2:GD"],["GP","GLP","312","ISO 3166-2:GP"],["GU","GUM","316","ISO 3166-2:GU"],["GT","GTM","320","ISO 3166-2:GT"],["GN","GIN","324","ISO 3166-2:GN"],["GW","GNB","624","ISO 3166-2:GW"],["GY","GUY","328","ISO 3166-2:GY"],["HT","HTI","332","ISO 3166-2:HT"],["HM","HMD","334","ISO 3166-2:HM"],["VA","VAT","336","ISO 3166-2:VA"],["HN","HND","340","ISO 3166-2:HN"],["HK","HKG","344","ISO 3166-2:HK"],["HU","HUN","348","ISO 3166-2:HU"],["IS","ISL","352","ISO 3166-2:IS"],["IN","IND","356","ISO 3166-2:IN"],["ID","IDN","360","ISO 3166-2:ID"],["IR","IRN","364","ISO 3166-2:IR"],["IQ","IRQ","368","ISO 3166-2:IQ"],["IE","IRL","372","ISO 3166-2:IE"],["IL","ISR","376","ISO 3166-2:IL"],["IT","ITA","380","ISO 3166-2:IT"],["JM","JAM","388","ISO 3166-2:JM"],["JP","JPN","392","ISO 3166-2:JP"],["JO","JOR","400","ISO 3166-2:JO"],["KZ","KAZ","398","ISO 3166-2:KZ"],["KE","KEN","404","ISO 3166-2:KE"],["KI","KIR","296","ISO 3166-2:KI"],["KP","PRK","408","ISO 3166-2:KP"],["KR","KOR","410","ISO 3166-2:KR"],["KW","KWT","414","ISO 3166-2:KW"],["KG","KGZ","417","ISO 3166-2:KG"],["LA","LAO","418","ISO 3166-2:LA"],["LV","LVA","428","ISO 3166-2:LV"],["LB","LBN","422","ISO 3166-2:LB"],["LS","LSO","426","ISO 3166-2:LS"],["LR","LBR","430","ISO 3166-2:LR"],["LY","LBY","434","ISO 3166-2:LY"],["LI","LIE","438","ISO 3166-2:LI"],["LT","LTU","440","ISO 3166-2:LT"],["LU","LUX","442","ISO 3166-2:LU"],["MO","MAC","446","ISO 3166-2:MO"],["MG","MDG","450","ISO 3166-2:MG"],["MW","MWI","454","ISO 3166-2:MW"],["MY","MYS","458","ISO 3166-2:MY"],["MV","MDV","462","ISO 3166-2:MV"],["ML","MLI","466","ISO 3166-2:ML"],["MT","MLT","470","ISO 3166-2:MT"],["MH","MHL","584","ISO 3166-2:MH"],["MQ","MTQ","474","ISO 3166-2:MQ"],["MR","MRT","478","ISO 3166-2:MR"],["MU","MUS","480","ISO 3166-2:MU"],["YT","MYT","175","ISO 3166-2:YT"],["MX","MEX","484","ISO 3166-2:MX"],["FM","FSM","583","ISO 3166-2:FM"],["MD","MDA","498","ISO 3166-2:MD"],["MC","MCO","492","ISO 3166-2:MC"],["MN","MNG","496","ISO 3166-2:MN"],["MS","MSR","500","ISO 3166-2:MS"],["MA","MAR","504","ISO 3166-2:MA"],["MZ","MOZ","508","ISO 3166-2:MZ"],["MM","MMR","104","ISO 3166-2:MM"],["NA","NAM","516","ISO 3166-2:NA"],["NR","NRU","520","ISO 3166-2:NR"],["NP","NPL","524","ISO 3166-2:NP"],["NL","NLD","528","ISO 3166-2:NL"],["NC","NCL","540","ISO 3166-2:NC"],["NZ","NZL","554","ISO 3166-2:NZ"],["NI","NIC","558","ISO 3166-2:NI"],["NE","NER","562","ISO 3166-2:NE"],["NG","NGA","566","ISO 3166-2:NG"],["NU","NIU","570","ISO 3166-2:NU"],["NF","NFK","574","ISO 3166-2:NF"],["MP","MNP","580","ISO 3166-2:MP"],["MK","MKD","807","ISO 3166-2:MK"],["NO","NOR","578","ISO 3166-2:NO"],["OM","OMN","512","ISO 3166-2:OM"],["PK","PAK","586","ISO 3166-2:PK"],["PW","PLW","585","ISO 3166-2:PW"],["PS","PSE","275","ISO 3166-2:PS"],["PA","PAN","591","ISO 3166-2:PA"],["PG","PNG","598","ISO 3166-2:PG"],["PY","PRY","600","ISO 3166-2:PY"],["PE","PER","604","ISO 3166-2:PE"],["PH","PHL","608","ISO 3166-2:PH"],["PN","PCN","612","ISO 3166-2:PN"],["PL","POL","616","ISO 3166-2:PL"],["PT","PRT","620","ISO 3166-2:PT"],["PR","PRI","630","ISO 3166-2:PR"],["QA","QAT","634","ISO 3166-2:QA"],["RE","REU","638","ISO 3166-2:RE"],["RO","ROU","642","ISO 3166-2:RO"],["RU","RUS","643","ISO 3166-2:RU"],["RW","RWA","646","ISO 3166-2:RW"],["SH","SHN","654","ISO 3166-2:SH"],["KN","KNA","659","ISO 3166-2:KN"],["LC","LCA","662","ISO 3166-2:LC"],["PM","SPM","666","ISO 3166-2:PM"],["VC","VCT","670","ISO 3166-2:VC"],["WS","WSM","882","ISO 3166-2:WS"],["SM","SMR","674","ISO 3166-2:SM"],["ST","STP","678","ISO 3166-2:ST"],["SA","SAU","682","ISO 3166-2:SA"],["SN","SEN","686","ISO 3166-2:SN"],["SC","SYC","690","ISO 3166-2:SC"],["SL","SLE","694","ISO 3166-2:SL"],["SG","SGP","702","ISO 3166-2:SG"],["SK","SVK","703","ISO 3166-2:SK"],["SI","SVN","705","ISO 3166-2:SI"],["SB","SLB","090","ISO 3166-2:SB"],["SO","SOM","706","ISO 3166-2:SO"],["ZA","ZAF","710","ISO 3166-2:ZA"],["GS","SGS","239","ISO 3166-2:GS"],["ES","ESP","724","ISO 3166-2:ES"],["LK","LKA","144","ISO 3166-2:LK"],["SD","SDN","729","ISO 3166-2:SD"],["SR","SUR","740","ISO 3166-2:SR"],["SJ","SJM","744","ISO 3166-2:SJ"],["SZ","SWZ","748","ISO 3166-2:SZ"],["SE","SWE","752","ISO 3166-2:SE"],["CH","CHE","756","ISO 3166-2:CH"],["SY","SYR","760","ISO 3166-2:SY"],["TW","TWN","158","ISO 3166-2:TW"],["TJ","TJK","762","ISO 3166-2:TJ"],["TZ","TZA","834","ISO 3166-2:TZ"],["TH","THA","764","ISO 3166-2:TH"],["TL","TLS","626","ISO 3166-2:TL"],["TG","TGO","768","ISO 3166-2:TG"],["TK","TKL","772","ISO 3166-2:TK"],["TO","TON","776","ISO 3166-2:TO"],["TT","TTO","780","ISO 3166-2:TT"],["TN","TUN","788","ISO 3166-2:TN"],["TR","TUR","792","ISO 3166-2:TR"],["TM","TKM","795","ISO 3166-2:TM"],["TC","TCA","796","ISO 3166-2:TC"],["TV","TUV","798","ISO 3166-2:TV"],["UG","UGA","800","ISO 3166-2:UG"],["UA","UKR","804","ISO 3166-2:UA"],["AE","ARE","784","ISO 3166-2:AE"],["GB","GBR","826","ISO 3166-2:GB"],["US","USA","840","ISO 3166-2:US"],["UM","UMI","581","ISO 3166-2:UM"],["UY","URY","858","ISO 3166-2:UY"],["UZ","UZB","860","ISO 3166-2:UZ"],["VU","VUT","548","ISO 3166-2:VU"],["VE","VEN","862","ISO 3166-2:VE"],["VN","VNM","704","ISO 3166-2:VN"],["VG","VGB","092","ISO 3166-2:VG"],["VI","VIR","850","ISO 3166-2:VI"],["WF","WLF","876","ISO 3166-2:WF"],["EH","ESH","732","ISO 3166-2:EH"],["YE","YEM","887","ISO 3166-2:YE"],["ZM","ZMB","894","ISO 3166-2:ZM"],["ZW","ZWE","716","ISO 3166-2:ZW"],["AX","ALA","248","ISO 3166-2:AX"],["BQ","BES","535","ISO 3166-2:BQ"],["CW","CUW","531","ISO 3166-2:CW"],["GG","GGY","831","ISO 3166-2:GG"],["IM","IMN","833","ISO 3166-2:IM"],["JE","JEY","832","ISO 3166-2:JE"],["ME","MNE","499","ISO 3166-2:ME"],["BL","BLM","652","ISO 3166-2:BL"],["MF","MAF","663","ISO 3166-2:MF"],["RS","SRB","688","ISO 3166-2:RS"],["SX","SXM","534","ISO 3166-2:SX"],["SS","SSD","728","ISO 3166-2:SS"],["XK","XKK","983","ISO 3166-2:XK"]],Dy=["br","cy","dv","sw","eu","af","am","ha","ku","ml","mt","no","ps","sd","so","sq","ta","tg","tt","ug","ur","vi","ar","az","be","bg","bn","bs","ca","cs","da","de","el","en","es","et","fa","fi","fr","ga","gl","he","hi","hr","hu","hy","id","is","it","ja","ka","kk","km","ko","ky","lt","lv","mk","mn","mr","ms","nb","nl","nn","pl","pt","ro","ru","sk","sl","sr","sv","th","tk","tr","uk","uz","zh"];var Hr={};Hr.remove=$y;for(var Wr=[{base:" ",chars:" "},{base:"0",chars:"߀"},{base:"A",chars:"ⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",chars:"Ꜳ"},{base:"AE",chars:"ÆǼǢ"},{base:"AO",chars:"Ꜵ"},{base:"AU",chars:"Ꜷ"},{base:"AV",chars:"ꜸꜺ"},{base:"AY",chars:"Ꜽ"},{base:"B",chars:"ⒷＢḂḄḆɃƁ"},{base:"C",chars:"ⒸＣꜾḈĆCĈĊČÇƇȻ"},{base:"D",chars:"ⒹＤḊĎḌḐḒḎĐƊƉᴅꝹ"},{base:"Dh",chars:"Ð"},{base:"DZ",chars:"ǱǄ"},{base:"Dz",chars:"ǲǅ"},{base:"E",chars:"ɛⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎᴇ"},{base:"F",chars:"ꝼⒻＦḞƑꝻ"},{base:"G",chars:"ⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾɢ"},{base:"H",chars:"ⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",chars:"ⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",chars:"ⒿＪĴɈȷ"},{base:"K",chars:"ⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",chars:"ⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",chars:"Ǉ"},{base:"Lj",chars:"ǈ"},{base:"M",chars:"ⓂＭḾṀṂⱮƜϻ"},{base:"N",chars:"ꞤȠⓃＮǸŃÑṄŇṆŅṊṈƝꞐᴎ"},{base:"NJ",chars:"Ǌ"},{base:"Nj",chars:"ǋ"},{base:"O",chars:"ⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OE",chars:"Œ"},{base:"OI",chars:"Ƣ"},{base:"OO",chars:"Ꝏ"},{base:"OU",chars:"Ȣ"},{base:"P",chars:"ⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",chars:"ⓆＱꝖꝘɊ"},{base:"R",chars:"ⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",chars:"ⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",chars:"ⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",chars:"Þ"},{base:"TZ",chars:"Ꜩ"},{base:"U",chars:"ⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",chars:"ⓋＶṼṾƲꝞɅ"},{base:"VY",chars:"Ꝡ"},{base:"W",chars:"ⓌＷẀẂŴẆẄẈⱲ"},{base:"X",chars:"ⓍＸẊẌ"},{base:"Y",chars:"ⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",chars:"ⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",chars:"ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",chars:"ꜳ"},{base:"ae",chars:"æǽǣ"},{base:"ao",chars:"ꜵ"},{base:"au",chars:"ꜷ"},{base:"av",chars:"ꜹꜻ"},{base:"ay",chars:"ꜽ"},{base:"b",chars:"ⓑｂḃḅḇƀƃɓƂ"},{base:"c",chars:"ｃⓒćĉċčçḉƈȼꜿↄ"},{base:"d",chars:"ⓓｄḋďḍḑḓḏđƌɖɗƋᏧԁꞪ"},{base:"dh",chars:"ð"},{base:"dz",chars:"ǳǆ"},{base:"e",chars:"ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇǝ"},{base:"f",chars:"ⓕｆḟƒ"},{base:"ff",chars:"ﬀ"},{base:"fi",chars:"ﬁ"},{base:"fl",chars:"ﬂ"},{base:"ffi",chars:"ﬃ"},{base:"ffl",chars:"ﬄ"},{base:"g",chars:"ⓖｇǵĝḡğġǧģǥɠꞡꝿᵹ"},{base:"h",chars:"ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",chars:"ƕ"},{base:"i",chars:"ⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",chars:"ⓙｊĵǰɉ"},{base:"k",chars:"ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",chars:"ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇɭ"},{base:"lj",chars:"ǉ"},{base:"m",chars:"ⓜｍḿṁṃɱɯ"},{base:"n",chars:"ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",chars:"ǌ"},{base:"o",chars:"ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿꝋꝍɵɔᴑ"},{base:"oe",chars:"œ"},{base:"oi",chars:"ƣ"},{base:"oo",chars:"ꝏ"},{base:"ou",chars:"ȣ"},{base:"p",chars:"ⓟｐṕṗƥᵽꝑꝓꝕρ"},{base:"q",chars:"ⓠｑɋꝗꝙ"},{base:"r",chars:"ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",chars:"ⓢｓśṥŝṡšṧṣṩșşȿꞩꞅẛʂ"},{base:"ss",chars:"ß"},{base:"t",chars:"ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",chars:"þ"},{base:"tz",chars:"ꜩ"},{base:"u",chars:"ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",chars:"ⓥｖṽṿʋꝟʌ"},{base:"vy",chars:"ꝡ"},{base:"w",chars:"ⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",chars:"ⓧｘẋẍ"},{base:"y",chars:"ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",chars:"ⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],La={},Yr=0;Yr<Wr.length;Yr+=1)for(var Rc=Wr[Yr].chars,ja=0;ja<Rc.length;ja+=1)La[Rc[ja]]=Wr[Yr].base;function $y(e){return e.replace(/[^\u0000-\u007e]/g,function(t){return La[t]||t})}Hr.replacementList=Wr,Hr.diacriticsMap=La,function(e){const t=Ty,n=Dy,r=Hr.remove,i={},a={},s={},u={},o={};t.forEach(function(_){const I=_;a[I[0]]=I[1],s[I[1]]=I[0],u[I[2]]=I[0],o[I[0]]=I[2]});function c(_){return("000"+(_||"")).slice(-3)}function l(_,I){return Object.prototype.hasOwnProperty.call(_,I)}function f(_,I){return Object.keys(_).reduce(function(h,E){const D=_[E];return h[E]=I(D,E),h},{})}function g(_,I){switch(_){case"official":return Array.isArray(I)?I[0]:I;case"all":return typeof I=="string"?[I]:I;case"alias":return Array.isArray(I)?I[1]||I[0]:I;default:throw new TypeError("LocaleNameType must be one of these: all, official, alias!")}}e.registerLocale=function(_){if(!_.locale)throw new TypeError("Missing localeData.locale");if(!_.countries)throw new TypeError("Missing localeData.countries");i[_.locale]=_.countries};function p(_){return s[_]}e.alpha3ToAlpha2=p;function w(_){return a[_]}e.alpha2ToAlpha3=w;function S(_){return o[p(_)]}e.alpha3ToNumeric=S;function b(_){return o[_]}e.alpha2ToNumeric=b;function x(_){const I=c(_);return w(u[I])}e.numericToAlpha3=x;function v(_){const I=c(_);return u[I]}e.numericToAlpha2=v;function C(_){if(typeof _=="string"){if(/^[0-9]*$/.test(_))return x(_);if(_.length===2)return w(_.toUpperCase());if(_.length===3)return _.toUpperCase()}if(typeof _=="number")return x(_)}e.toAlpha3=C;function T(_){if(typeof _=="string"){if(/^[0-9]*$/.test(_))return v(_);if(_.length===2)return _.toUpperCase();if(_.length===3)return p(_.toUpperCase())}if(typeof _=="number")return v(_)}e.toAlpha2=T,e.getName=function(_,I,h={}){"select"in h||(h.select="official");try{const D=i[I.toLowerCase()][T(_)];return g(h.select,D)}catch{return}},e.getNames=function(_,I={}){"select"in I||(I.select="official");const h=i[_.toLowerCase()];return h===void 0?{}:f(h,function(E){return g(I.select,E)})},e.getAlpha2Code=function(_,I){const h=D=>D.toLowerCase(),E=(D,$)=>h(D)===h($);try{const D=i[I.toLowerCase()];for(const $ in D)if(l(D,$)){if(typeof D[$]=="string"&&E(D[$],_))return $;if(Array.isArray(D[$])){for(const R of D[$])if(E(R,_))return $}}return}catch{return}},e.getSimpleAlpha2Code=function(_,I){const h=D=>r(D.toLowerCase()),E=(D,$)=>h(D)===h($);try{const D=i[I.toLowerCase()];for(const $ in D)if(l(D,$)){if(typeof D[$]=="string"&&E(D[$],_))return $;if(Array.isArray(D[$])){for(const R of D[$])if(E(R,_))return $}}return}catch{return}},e.getAlpha2Codes=function(){return a},e.getAlpha3Code=function(_,I){const h=e.getAlpha2Code(_,I);if(h)return e.toAlpha3(h)},e.getSimpleAlpha3Code=function(_,I){const h=e.getSimpleAlpha2Code(_,I);if(h)return e.toAlpha3(h)},e.getAlpha3Codes=function(){return s},e.getNumericCodes=function(){return u},e.langs=function(){return Object.keys(i)},e.getSupportedLanguages=function(){return n},e.isValid=function(_){if(!_)return!1;const I=_.toString().toUpperCase();return l(s,I)||l(a,I)||l(u,I)}}(Bc);const Vc=Bs(Bc),My=e=>e==="zh-CN"?"zh":e==="zh-TW"?"tw":e.slice(0,2),Py=(e,t="en")=>{if(!e)return;const n=Vc.getName(e,My(t));if(n)return n;if(t!=="en")return Vc.getName(e,"en")},qc=new Mr({messageID:"country",type:"country",makeCriterion:()=>new Gc});class Gc extends Ze{constructor(){super(qc)}getLabelValue(t){return this.modifier===y.Equals||this.modifier===y.NotEquals?Py(this.value,t.locale)??this.value:super.getLabelValue(t)}}const Fy="name",Ny=["name","height","birthdate","tag_count","random","rating","penis_length","play_count","last_played_at","latest_scene","career_start","career_end","weight","measurements","scenes_duration","scenes_size"].map(Oe.createSortBy).concat([{messageID:"scene_count",value:"scenes_count"},{messageID:"image_count",value:"images_count"},{messageID:"gallery_count",value:"galleries_count"},{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"},{messageID:"last_o_at",value:"last_o_at",sfwMessageID:"last_o_at_sfw"}]),ky=[be.Grid,be.List,be.Tagger],Ay=["birth_year","death_year","age","weight","penis_length"],Ly=["name","disambiguation","details","ethnicity","hair_color","eye_color","measurements","fake_tits","tattoos","piercings","aliases"],jy=[hu,Ac,jc,Yg,bt,zr,Zt,Un,re("url"),Dt,Z("tag_count"),Z("scene_count"),Z("image_count"),Z("gallery_count"),Z("play_count"),Z("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Fr("ignore_auto_tag"),qc,mu("height_cm","height"),...Ay.map(e=>mu(e)),...Ly.map(e=>re(e)),ot("birthdate"),ot("death_date"),ot("career_start"),ot("career_end"),Ce("created_at"),Ce("updated_at"),St],By=new Oe(Fy,Ny,ky,jy),Ry="title",Vy=["duration","title","seconds","scene_id","random","scenes_updated_at"].map(Oe.createSortBy),qy=[be.Grid,be.Wall],Gy=[bt,Ou,gh,Jt,Ng("duration"),Ce("created_at"),Ce("updated_at"),ot("scene_date"),Ce("scene_created_at"),Ce("scene_updated_at")],Uy=new Oe(Ry,Vy,qy,Gy),Uc=new pu("hasMarkers","has_markers",()=>new zy);class zy extends va{constructor(){super(Uc)}}const zc=new Ot("interactive","interactive",()=>new Hy);class Hy extends Et{constructor(){super(zc)}}const Ba=new Map([["de","Deutsche"],["en","English"],["es","Español"],["fr","Français"],["it","Italiano"],["ja","日本"],["ko","한국인"],["nl","Holandés"],["pt","Português"],["ru","Русский"],["00","Unknown"]]),Wy=e=>{if(e)return Array.from(Ba.keys()).find(t=>Ba.get(t)===e)},Yy=Array.from(Ba.values()),Hc=new fe({messageID:"captions",type:"captions",modifierOptions:[y.Includes,y.Excludes,y.IsNull,y.NotNull],defaultModifier:y.Includes,options:Yy,makeCriterion:()=>new Qy});class Qy extends Ze{constructor(){super(Hc)}toCriterionInput(){return{value:Wy(this.value)??"",modifier:this.modifier}}}const Ky="date",Jy=["organized","date","file_count","filesize","duration","framerate","resolution","bitrate","last_played_at","resume_time","play_duration","play_count","interactive","interactive_speed","perceptual_similarity","performer_age","studio",...Ia].map(Oe.createSortBy).concat([{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"},{messageID:"last_o_at",value:"last_o_at",sfwMessageID:"last_o_at_sfw"},{messageID:"group_scene_number",value:"group_scene_number"},{messageID:"scene_code",value:"code"}]),Xy=[be.Grid,be.List,be.Wall,be.Tagger],Zy=Z("performer_age"),eS=kr("duration"),tS=[re("title"),re("code","scene_code"),Rr,Pa,re("details"),re("director"),Pr("oshash","media_info.oshash"),re("checksum","media_info.md5"),Na,Dc,Lr,Dt,Z("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),ya,Oc,Z("framerate"),Z("bitrate"),re("video_codec"),re("audio_codec"),eS,kr("resume_time"),kr("play_duration"),Z("play_count"),Ce("last_played_at"),Uc,Hg,bt,Z("tag_count"),xa,Jt,Z("performer_count"),Zy,Ar,Zt,zr,gy,Fa,re("url"),Un,Z("stash_id_count"),zc,Hc,Z("interactive_speed"),Z("file_count"),ot("date"),Ce("created_at"),Ce("updated_at"),St],nS=new Oe(Ky,Jy,Xy,tS),rS="name",iS=["name","tag_count","random","rating","scenes_duration","scenes_size","latest_scene"].map(Oe.createSortBy).concat([{messageID:"gallery_count",value:"galleries_count"},{messageID:"image_count",value:"images_count"},{messageID:"scene_count",value:"scenes_count"},{messageID:"o_count",value:"o_counter"},{messageID:"o_count_all",value:"o_counter_all"},{messageID:"performer_count",value:"performer_count"},{messageID:"performer_count_all",value:"performer_count_all"},{messageID:"subsidiary_studio_count",value:"child_count"},{messageID:"scene_marker_count",value:"scene_markers_count"}]),aS=[be.Grid,be.List,be.Tagger],sS=[bu,Pr("name"),re("details"),Du,Jg,bt,Dt,Fr("ignore_auto_tag"),Fr("organized"),Z("tag_count"),Z("scene_count"),Z("image_count"),Z("gallery_count"),re("url"),Un,re("aliases"),Z("child_count","subsidiary_studio_count"),Ce("created_at"),Ce("updated_at"),St],oS=new Oe(rS,iS,aS,sS),uS="name",cS=["name","random","scenes_duration","scenes_size"].map(Oe.createSortBy).concat([{messageID:"gallery_count",value:"galleries_count"},{messageID:"image_count",value:"images_count"},{messageID:"performer_count",value:"performers_count"},{messageID:"scene_count",value:"scenes_count"},{messageID:"group_count",value:"groups_count"},{messageID:"marker_count",value:"scene_markers_count"},{messageID:"studio_count",value:"studios_count"}]),lS=[be.Grid,be.List,be.Tagger],dS=[vu,Pr("name"),re("sort_name"),Kg,re("aliases"),re("description"),Fr("ignore_auto_tag"),Un,Z("scene_count"),Z("image_count"),Z("gallery_count"),Z("performer_count"),Z("studio_count"),Z("group_count"),Z("marker_count"),Pu,new Nr("parent_tag_count","parent_count"),Fu,new Nr("sub_tag_count","child_count"),Ce("created_at"),Ce("updated_at"),St],fS=new Oe(uS,cS,lS,dS);function Wc(e){switch(e){case X.Scenes:return nS;case X.Performers:return By;case X.Studios:return oS;case X.Galleries:return ty;case X.SceneMarkers:return Uy;case X.Movies:case X.Groups:return Sy;case X.Tags:return fS;case X.Images:return my}}const lt={sortDirection:qe.Asc,displayMode:be.Grid,currentPage:1,itemsPerPage:40};class ae{constructor(t,n,r){ne(this,"mode");ne(this,"options");ne(this,"config");ne(this,"searchTerm","");ne(this,"currentPage",lt.currentPage);ne(this,"itemsPerPage",lt.itemsPerPage);ne(this,"sortDirection",lt.sortDirection);ne(this,"sortBy");ne(this,"displayMode",lt.displayMode);ne(this,"zoomIndex",1);ne(this,"criteria",[]);ne(this,"randomSeed",-1);ne(this,"defaultZoomIndex",1);this.mode=t,this.config=n,this.options=Wc(t);const{defaultSortBy:i,displayModeOptions:a}=this.options;r!=null&&r.defaultSortBy?(this.sortBy=r.defaultSortBy,r.defaultSortDir&&(this.sortDirection=r.defaultSortDir)):(this.sortBy=i,this.sortBy==="date"&&(this.sortDirection=qe.Desc)),this.displayMode=a[0],(r==null?void 0:r.defaultZoomIndex)!==void 0&&(this.defaultZoomIndex=r.defaultZoomIndex,this.zoomIndex=r.defaultZoomIndex)}clone(){const t=Object.assign(new ae(this.mode,this.config),this);return t.criteria=this.criteria.map(n=>n.clone()),t}empty(){return new ae(this.mode,this.config,{defaultZoomIndex:this.defaultZoomIndex})}metadataInfo(){const t=this.clone();return t.sortBy=void 0,t.randomSeed=-1,t.currentPage=1,t.sortDirection=lt.sortDirection,t.itemsPerPage=0,t.zoomIndex=1,t.displayMode=lt.displayMode,t}count(){return this.criteria.length}configureFromDecodedParams(t){if(t.perPage!==void 0&&(this.itemsPerPage=t.perPage),t.sortby!==void 0){this.sortBy=t.sortby;const n=this.sortBy.match(/^random_(\d+)$/);n&&(this.sortBy="random",this.randomSeed=Number.parseInt(n[1],10))}if(t.sortdir!==void 0?this.sortDirection=t.sortdir==="desc"?qe.Desc:qe.Asc:this.sortDirection=t.sortby==="date"?qe.Desc:qe.Asc,t.disp!==void 0&&(this.displayMode=t.disp),t.q!==void 0&&(this.searchTerm=t.q),this.currentPage=t.p??1,t.z!==void 0&&(this.zoomIndex=t.z),this.criteria=[],t.c!==void 0)for(const n of t.c)try{const{type:r,...i}=JSON.parse(n),a=this.makeCriterion(r);a.fromDecodedParams(i),this.criteria.push(a)}catch(r){console.error("Failed to parse encoded criterion:",r)}}static decodeParams(t){const n={};if(t.perPage&&(n.perPage=Number.parseInt(t.perPage,10)),t.sortby&&(n.sortby=t.sortby),t.sortdir&&(n.sortdir=t.sortdir),t.disp&&(n.disp=Number.parseInt(t.disp,10)),t.q&&(n.q=t.q),t.p&&(n.p=Number.parseInt(t.p,10)),t.z){const r=Number.parseInt(t.z,10);r>=0&&(n.z=r)}return t.c&&t.c.length!==0&&(n.c=t.c.map(r=>ae.translateJSON(r,!0))),n}static translateJSON(t,n){let r=!1,i=!1;return[...t].map(a=>{if(i)return i=!1,a;switch(a){case"\\":r&&(i=!0);break;case'"':r=!r;break;case"(":if(n&&!r)return"{";break;case")":if(n&&!r)return"}";break;case"{":if(!n&&!r)return"(";break;case"}":if(!n&&!r)return")";break}return a}).join("")}configureFromQueryString(t){const n=new URLSearchParams(t),r={perPage:n.get("perPage"),sortby:n.get("sortby"),sortdir:n.get("sortdir"),disp:n.get("disp"),q:n.get("q"),p:n.get("p"),z:n.get("z"),c:n.getAll("c")},i=ae.decodeParams(r);this.configureFromDecodedParams(i)}configureFromSavedFilter(t){var s;const{find_filter:n,object_filter:r,ui_options:i}=t;this.itemsPerPage=(n==null?void 0:n.per_page)??this.itemsPerPage,this.sortBy=(n==null?void 0:n.sort)??this.sortBy;const a=(s=this.sortBy)==null?void 0:s.match(/^random_(\d+)$/);if(a&&(this.sortBy="random",this.randomSeed=Number.parseInt(a[1],10)),this.sortDirection=(n==null?void 0:n.direction)??this.sortDirection,this.searchTerm=(n==null?void 0:n.q)??this.searchTerm,this.displayMode=(i==null?void 0:i.display_mode)??this.displayMode,this.zoomIndex=(i==null?void 0:i.zoom_index)??this.zoomIndex,this.currentPage=1,this.criteria=[],r)for(const[u,o]of Object.entries(r)){const c=this.makeCriterion(u);c.setFromSavedCriterion(o),this.criteria.push(c)}}setRandomSeed(){this.sortBy==="random"?this.randomSeed===-1&&(this.randomSeed=Math.floor(Math.random()*10**8)):this.randomSeed=-1}getSortBy(){return this.setRandomSeed(),this.sortBy==="random"?`random_${this.randomSeed.toString()}`:this.sortBy}getEncodedParams(){const t=this.criteria.map(n=>{const r=n.toQueryParams();let i=ae.translateJSON(JSON.stringify(r),!1);return i=encodeURI(i),i=i.replaceAll("?",encodeURIComponent("?")),i=i.replaceAll("#",encodeURIComponent("#")),i=i.replaceAll("&",encodeURIComponent("&")),i=i.replaceAll(";",encodeURIComponent(";")),i=i.replaceAll("=",encodeURIComponent("=")),i=i.replaceAll("+",encodeURIComponent("+")),i});return{perPage:this.itemsPerPage!==lt.itemsPerPage?String(this.itemsPerPage):void 0,sortby:this.getSortBy(),sortdir:this.sortBy==="date"?this.sortDirection===qe.Asc?"asc":void 0:this.sortDirection===qe.Desc?"desc":void 0,disp:this.displayMode!==lt.displayMode?String(this.displayMode):void 0,q:this.searchTerm?encodeURIComponent(this.searchTerm):void 0,p:this.currentPage!==lt.currentPage?String(this.currentPage):void 0,z:this.zoomIndex!==this.defaultZoomIndex?String(this.zoomIndex):void 0,c:t}}makeQueryParameters(){const t=[],n=this.getEncodedParams();if(n.q&&t.push(`q=${n.q}`),n.c)for(const r of n.c)t.push(`c=${r}`);return n.sortby&&t.push(`sortby=${n.sortby}`),n.sortdir&&t.push(`sortdir=${n.sortdir}`),n.perPage&&t.push(`perPage=${n.perPage}`),n.disp&&t.push(`disp=${n.disp}`),n.z&&t.push(`z=${n.z}`),n.p&&t.push(`p=${n.p}`),t.join("&")}makeCriterion(t){const{criterionOptions:n}=Wc(this.mode),r=n.find(i=>i.type===t);return r?r.makeCriterion(this.config):new Bg(t).makeCriterion(this.config)}makeFindFilter(){return{q:this.searchTerm,page:this.currentPage,per_page:this.itemsPerPage,sort:this.getSortBy(),direction:this.sortDirection}}makeFilter(){const t={};for(const n of this.criteria)n.applyToCriterionInput(t);return t}makeSavedFilter(){const t={};for(const n of this.criteria)n.applyToSavedCriterion(t);return t}makeSavedUIOptions(){return{display_mode:this.displayMode,zoom_index:this.zoomIndex}}criteriaFor(t){return this.criteria.filter(n=>n.criterionOption.type===t)}replaceCriteria(t,n){const r=[...this.criteria.filter(i=>i.criterionOption.type!==t),...n];return this.setCriteria(r)}clearCriteria(t=!1){const n=this.clone();return t&&(n.searchTerm=""),n.criteria=[],n.currentPage=1,n}clearSearchTerm(){const t=this.clone();return t.searchTerm="",t.currentPage=1,t}setCriteria(t){const n=this.clone();return n.criteria=t,n.currentPage=1,n}removeCriterion(t){const n=this.clone(),r=n.criteria.find(a=>a.criterionOption.type===t);if(!r)return n;const i=n.criteria.filter(a=>a.getId()!==r.getId());return n.criteria=i,n.currentPage=1,n}removeCustomFieldCriterion(t,n){const r=this.clone(),i=r.criteria.find(a=>a.criterionOption.type===t);if(!i)return r;if(i instanceof Sc){const a=i.value.filter((s,u)=>u!==n);i.value=a}return r}setPageSize(t){const n=this.clone();return n.itemsPerPage=t,n.currentPage=1,n}setSortBy(t){const n=this.clone();return n.sortBy=t,n.currentPage=1,n}toggleSortDirection(){const t=this.clone();return t.sortDirection===qe.Asc?t.sortDirection=qe.Desc:t.sortDirection=qe.Asc,t.currentPage=1,t}reshuffleRandomSort(){const t=this.clone();return t.currentPage=1,t.randomSeed=-1,t}changePage(t){const n=this.clone();return n.currentPage=t,n}setZoom(t){const n=this.clone();return n.zoomIndex=t,n}setDisplayMode(t){const n=this.clone();return n.displayMode=t,n}}function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z.apply(null,arguments)}function Ft(e){"@babel/helpers - typeof";return Ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ft(e)}function pS(e,t){if(Ft(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ft(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Yc(e){var t=pS(e,"string");return Ft(t)=="symbol"?t:t+""}function un(e,t,n){return(t=Yc(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qc(Object(n),!0).forEach(function(r){un(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Yc(r.key),r)}}function gS(e,t,n){return t&&Kc(e.prototype,t),n&&Kc(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ra(e,t){return Ra=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Ra(e,t)}function hS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ra(e,t)}function Qr(e){return Qr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Qr(e)}function Jc(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Jc=function(){return!!e})()}function vS(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bS(e,t){if(t&&(Ft(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return vS(e)}function yS(e){var t=Jc();return function(){var n,r=Qr(e);if(t){var i=Qr(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return bS(this,n)}}function Va(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function SS(e){if(Array.isArray(e))return Va(e)}function xS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Xc(e,t){if(e){if(typeof e=="string")return Va(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Va(e,t):void 0}}function IS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cn(e){return SS(e)||xS(e)||Xc(e)||IS()}function _S(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function wS(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var CS=function(){function e(n){var r=this;this._insertTag=function(i){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,a),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(wS(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=_S(i);try{a.insertRule(r,a.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ke="-ms-",Kr="-moz-",se="-webkit-",Zc="comm",qa="rule",Ga="decl",OS="@import",el="@keyframes",ES="@layer",TS=Math.abs,Jr=String.fromCharCode,DS=Object.assign;function $S(e,t){return Ne(e,0)^45?(((t<<2^Ne(e,0))<<2^Ne(e,1))<<2^Ne(e,2))<<2^Ne(e,3):0}function tl(e){return e.trim()}function MS(e,t){return(e=t.exec(e))?e[0]:e}function oe(e,t,n){return e.replace(t,n)}function Ua(e,t){return e.indexOf(t)}function Ne(e,t){return e.charCodeAt(t)|0}function zn(e,t,n){return e.slice(t,n)}function nt(e){return e.length}function za(e){return e.length}function Xr(e,t){return t.push(e),e}function PS(e,t){return e.map(t).join("")}var Zr=1,ln=1,nl=0,Ve=0,_e=0,dn="";function ei(e,t,n,r,i,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Zr,column:ln,length:s,return:""}}function Hn(e,t){return DS(ei("",null,null,"",null,null,0),e,{length:-e.length},t)}function FS(){return _e}function NS(){return _e=Ve>0?Ne(dn,--Ve):0,ln--,_e===10&&(ln=1,Zr--),_e}function ze(){return _e=Ve<nl?Ne(dn,Ve++):0,ln++,_e===10&&(ln=1,Zr++),_e}function rt(){return Ne(dn,Ve)}function ti(){return Ve}function Wn(e,t){return zn(dn,e,t)}function Yn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rl(e){return Zr=ln=1,nl=nt(dn=e),Ve=0,[]}function il(e){return dn="",e}function ni(e){return tl(Wn(Ve-1,Ha(e===91?e+2:e===40?e+1:e)))}function kS(e){for(;(_e=rt())&&_e<33;)ze();return Yn(e)>2||Yn(_e)>3?"":" "}function AS(e,t){for(;--t&&ze()&&!(_e<48||_e>102||_e>57&&_e<65||_e>70&&_e<97););return Wn(e,ti()+(t<6&&rt()==32&&ze()==32))}function Ha(e){for(;ze();)switch(_e){case e:return Ve;case 34:case 39:e!==34&&e!==39&&Ha(_e);break;case 40:e===41&&Ha(e);break;case 92:ze();break}return Ve}function LS(e,t){for(;ze()&&e+_e!==57;)if(e+_e===84&&rt()===47)break;return"/*"+Wn(t,Ve-1)+"*"+Jr(e===47?e:ze())}function jS(e){for(;!Yn(rt());)ze();return Wn(e,Ve)}function BS(e){return il(ri("",null,null,null,[""],e=rl(e),0,[0],e))}function ri(e,t,n,r,i,a,s,u,o){for(var c=0,l=0,f=s,g=0,p=0,w=0,S=1,b=1,x=1,v=0,C="",T=i,_=a,I=r,h=C;b;)switch(w=v,v=ze()){case 40:if(w!=108&&Ne(h,f-1)==58){Ua(h+=oe(ni(v),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:h+=ni(v);break;case 9:case 10:case 13:case 32:h+=kS(w);break;case 92:h+=AS(ti()-1,7);continue;case 47:switch(rt()){case 42:case 47:Xr(RS(LS(ze(),ti()),t,n),o);break;default:h+="/"}break;case 123*S:u[c++]=nt(h)*x;case 125*S:case 59:case 0:switch(v){case 0:case 125:b=0;case 59+l:x==-1&&(h=oe(h,/\f/g,"")),p>0&&nt(h)-f&&Xr(p>32?sl(h+";",r,n,f-1):sl(oe(h," ","")+";",r,n,f-2),o);break;case 59:h+=";";default:if(Xr(I=al(h,t,n,c,l,i,u,C,T=[],_=[],f),a),v===123)if(l===0)ri(h,t,I,I,T,a,f,u,_);else switch(g===99&&Ne(h,3)===110?100:g){case 100:case 108:case 109:case 115:ri(e,I,I,r&&Xr(al(e,I,I,0,0,i,u,C,i,T=[],f),_),i,_,f,u,r?T:_);break;default:ri(h,I,I,I,[""],_,0,u,_)}}c=l=p=0,S=x=1,C=h="",f=s;break;case 58:f=1+nt(h),p=w;default:if(S<1){if(v==123)--S;else if(v==125&&S++==0&&NS()==125)continue}switch(h+=Jr(v),v*S){case 38:x=l>0?1:(h+="\f",-1);break;case 44:u[c++]=(nt(h)-1)*x,x=1;break;case 64:rt()===45&&(h+=ni(ze())),g=rt(),l=f=nt(C=h+=jS(ti())),v++;break;case 45:w===45&&nt(h)==2&&(S=0)}}return a}function al(e,t,n,r,i,a,s,u,o,c,l){for(var f=i-1,g=i===0?a:[""],p=za(g),w=0,S=0,b=0;w<r;++w)for(var x=0,v=zn(e,f+1,f=TS(S=s[w])),C=e;x<p;++x)(C=tl(S>0?g[x]+" "+v:oe(v,/&\f/g,g[x])))&&(o[b++]=C);return ei(e,t,n,i===0?qa:u,o,c,l)}function RS(e,t,n){return ei(e,t,n,Zc,Jr(FS()),zn(e,2,-2),0)}function sl(e,t,n,r){return ei(e,t,n,Ga,zn(e,0,r),zn(e,r+1,-1),r)}function fn(e,t){for(var n="",r=za(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function VS(e,t,n,r){switch(e.type){case ES:if(e.children.length)break;case OS:case Ga:return e.return=e.return||e.value;case Zc:return"";case el:return e.return=e.value+"{"+fn(e.children,r)+"}";case qa:e.value=e.props.join(",")}return nt(n=fn(e.children,r))?e.return=e.value+"{"+n+"}":""}function qS(e){var t=za(e);return function(n,r,i,a){for(var s="",u=0;u<t;u++)s+=e[u](n,r,i,a)||"";return s}}function GS(e){return function(t){t.root||(t=t.return)&&e(t)}}function US(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var zS=function(t,n,r){for(var i=0,a=0;i=a,a=rt(),i===38&&a===12&&(n[r]=1),!Yn(a);)ze();return Wn(t,Ve)},HS=function(t,n){var r=-1,i=44;do switch(Yn(i)){case 0:i===38&&rt()===12&&(n[r]=1),t[r]+=zS(Ve-1,n,r);break;case 2:t[r]+=ni(i);break;case 4:if(i===44){t[++r]=rt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Jr(i)}while(i=ze());return t},WS=function(t,n){return il(HS(rl(t),n))},ol=new WeakMap,YS=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!ol.get(r))&&!i){ol.set(t,!0);for(var a=[],s=WS(n,a),u=r.props,o=0,c=0;o<s.length;o++)for(var l=0;l<u.length;l++,c++)t.props[c]=a[o]?s[o].replace(/&\f/g,u[l]):u[l]+" "+s[o]}}},QS=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function ul(e,t){switch($S(e,t)){case 5103:return se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return se+e+Kr+e+ke+e+e;case 6828:case 4268:return se+e+ke+e+e;case 6165:return se+e+ke+"flex-"+e+e;case 5187:return se+e+oe(e,/(\w+).+(:[^]+)/,se+"box-$1$2"+ke+"flex-$1$2")+e;case 5443:return se+e+ke+"flex-item-"+oe(e,/flex-|-self/,"")+e;case 4675:return se+e+ke+"flex-line-pack"+oe(e,/align-content|flex-|-self/,"")+e;case 5548:return se+e+ke+oe(e,"shrink","negative")+e;case 5292:return se+e+ke+oe(e,"basis","preferred-size")+e;case 6060:return se+"box-"+oe(e,"-grow","")+se+e+ke+oe(e,"grow","positive")+e;case 4554:return se+oe(e,/([^-])(transform)/g,"$1"+se+"$2")+e;case 6187:return oe(oe(oe(e,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),e,"")+e;case 5495:case 3959:return oe(e,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return oe(oe(e,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+e+e;case 4095:case 3583:case 4068:case 2532:return oe(e,/(.+)-inline(.+)/,se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nt(e)-1-t>6)switch(Ne(e,t+1)){case 109:if(Ne(e,t+4)!==45)break;case 102:return oe(e,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+Kr+(Ne(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ua(e,"stretch")?ul(oe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ne(e,t+1)!==115)break;case 6444:switch(Ne(e,nt(e)-3-(~Ua(e,"!important")&&10))){case 107:return oe(e,":",":"+se)+e;case 101:return oe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+se+(Ne(e,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+ke+"$2box$3")+e}break;case 5936:switch(Ne(e,t+11)){case 114:return se+e+ke+oe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return se+e+ke+oe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return se+e+ke+oe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return se+e+ke+e+e}return e}var KS=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Ga:t.return=ul(t.value,t.length);break;case el:return fn([Hn(t,{value:oe(t.value,"@","@"+se)})],i);case qa:if(t.length)return PS(t.props,function(a){switch(MS(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return fn([Hn(t,{props:[oe(a,/:(read-\w+)/,":"+Kr+"$1")]})],i);case"::placeholder":return fn([Hn(t,{props:[oe(a,/:(plac\w+)/,":"+se+"input-$1")]}),Hn(t,{props:[oe(a,/:(plac\w+)/,":"+Kr+"$1")]}),Hn(t,{props:[oe(a,/:(plac\w+)/,ke+"input-$1")]})],i)}return""})}},JS=[KS],XS=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(S){var b=S.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var i=t.stylisPlugins||JS,a={},s,u=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(S){for(var b=S.getAttribute("data-emotion").split(" "),x=1;x<b.length;x++)a[b[x]]=!0;u.push(S)});var o,c=[YS,QS];{var l,f=[VS,GS(function(S){l.insert(S)})],g=qS(c.concat(i,f)),p=function(b){return fn(BS(b),g)};o=function(b,x,v,C){l=v,p(b?b+"{"+x.styles+"}":x.styles),C&&(w.inserted[x.name]=!0)}}var w={key:n,sheet:new CS({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:o};return w.sheet.hydrate(u),w},cl={exports:{}},le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var De=typeof Symbol=="function"&&Symbol.for,Wa=De?Symbol.for("react.element"):60103,Ya=De?Symbol.for("react.portal"):60106,ii=De?Symbol.for("react.fragment"):60107,ai=De?Symbol.for("react.strict_mode"):60108,si=De?Symbol.for("react.profiler"):60114,oi=De?Symbol.for("react.provider"):60109,ui=De?Symbol.for("react.context"):60110,Qa=De?Symbol.for("react.async_mode"):60111,ci=De?Symbol.for("react.concurrent_mode"):60111,li=De?Symbol.for("react.forward_ref"):60112,di=De?Symbol.for("react.suspense"):60113,ZS=De?Symbol.for("react.suspense_list"):60120,fi=De?Symbol.for("react.memo"):60115,pi=De?Symbol.for("react.lazy"):60116,e1=De?Symbol.for("react.block"):60121,t1=De?Symbol.for("react.fundamental"):60117,n1=De?Symbol.for("react.responder"):60118,r1=De?Symbol.for("react.scope"):60119;function He(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Wa:switch(e=e.type,e){case Qa:case ci:case ii:case si:case ai:case di:return e;default:switch(e=e&&e.$$typeof,e){case ui:case li:case pi:case fi:case oi:return e;default:return t}}case Ya:return t}}}function ll(e){return He(e)===ci}le.AsyncMode=Qa,le.ConcurrentMode=ci,le.ContextConsumer=ui,le.ContextProvider=oi,le.Element=Wa,le.ForwardRef=li,le.Fragment=ii,le.Lazy=pi,le.Memo=fi,le.Portal=Ya,le.Profiler=si,le.StrictMode=ai,le.Suspense=di,le.isAsyncMode=function(e){return ll(e)||He(e)===Qa},le.isConcurrentMode=ll,le.isContextConsumer=function(e){return He(e)===ui},le.isContextProvider=function(e){return He(e)===oi},le.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wa},le.isForwardRef=function(e){return He(e)===li},le.isFragment=function(e){return He(e)===ii},le.isLazy=function(e){return He(e)===pi},le.isMemo=function(e){return He(e)===fi},le.isPortal=function(e){return He(e)===Ya},le.isProfiler=function(e){return He(e)===si},le.isStrictMode=function(e){return He(e)===ai},le.isSuspense=function(e){return He(e)===di},le.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ii||e===ci||e===si||e===ai||e===di||e===ZS||typeof e=="object"&&e!==null&&(e.$$typeof===pi||e.$$typeof===fi||e.$$typeof===oi||e.$$typeof===ui||e.$$typeof===li||e.$$typeof===t1||e.$$typeof===n1||e.$$typeof===r1||e.$$typeof===e1)},le.typeOf=He,cl.exports=le;var i1=cl.exports,dl=i1,a1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fl={};fl[dl.ForwardRef]=a1,fl[dl.Memo]=s1;var o1=!0;function u1(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(r+=i+" ")}),r}var pl=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||o1===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},c1=function(t,n,r){pl(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+i:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function l1(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var d1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},f1=/[A-Z]|^ms/g,p1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ml=function(t){return t.charCodeAt(1)===45},gl=function(t){return t!=null&&typeof t!="boolean"},Ka=US(function(e){return ml(e)?e:e.replace(f1,"-$&").toLowerCase()}),hl=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(p1,function(r,i,a){return it={name:i,styles:a,next:it},i})}return d1[t]!==1&&!ml(t)&&typeof n=="number"&&n!==0?n+"px":n};function Qn(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return it={name:i.name,styles:i.styles,next:it},i.name;var a=n;if(a.styles!==void 0){var s=a.next;if(s!==void 0)for(;s!==void 0;)it={name:s.name,styles:s.styles,next:it},s=s.next;var u=a.styles+";";return u}return m1(e,t,n)}case"function":{if(e!==void 0){var o=it,c=n(e);return it=o,Qn(e,t,c)}break}}var l=n;return l}function m1(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Qn(e,t,n[i])+";";else for(var a in n){var s=n[a];if(typeof s!="object"){var u=s;gl(u)&&(r+=Ka(a)+":"+hl(a,u)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&t==null)for(var o=0;o<s.length;o++)gl(s[o])&&(r+=Ka(a)+":"+hl(a,s[o])+";");else{var c=Qn(e,t,s);switch(a){case"animation":case"animationName":{r+=Ka(a)+":"+c+";";break}default:r+=a+"{"+c+"}"}}}return r}var vl=/label:\s*([^\s;{]+)\s*(;|$)/g,it;function bl(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";it=void 0;var a=e[0];if(a==null||a.raw===void 0)r=!1,i+=Qn(n,t,a);else{var s=a;i+=s[0]}for(var u=1;u<e.length;u++)if(i+=Qn(n,t,e[u]),r){var o=a;i+=o[u]}vl.lastIndex=0;for(var c="",l;(l=vl.exec(i))!==null;)c+="-"+l[1];var f=l1(i)+c;return{name:f,styles:i,next:it}}var g1=function(t){return t()},h1=K.useInsertionEffect?K.useInsertionEffect:!1,v1=h1||g1,yl=K.createContext(typeof HTMLElement<"u"?XS({key:"css"}):null);yl.Provider;var b1=function(t){return O.forwardRef(function(n,r){var i=O.useContext(yl);return t(n,i,r)})},y1=K.createContext({}),Ja={}.hasOwnProperty,Xa="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",S1=function(t,n){var r={};for(var i in n)Ja.call(n,i)&&(r[i]=n[i]);return r[Xa]=t,r},x1=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return pl(n,r,i),v1(function(){return c1(n,r,i)}),null},I1=b1(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Xa],a=[r],s="";typeof e.className=="string"?s=u1(t.registered,a,e.className):e.className!=null&&(s=e.className+" ");var u=bl(a,void 0,K.useContext(y1));s+=t.key+"-"+u.name;var o={};for(var c in e)Ja.call(e,c)&&c!=="css"&&c!==Xa&&(o[c]=e[c]);return o.className=s,n&&(o.ref=n),K.createElement(K.Fragment,null,K.createElement(x1,{cache:t,serialized:u,isStringTag:typeof i=="string"}),K.createElement(i,o))}),_1=I1,q=function(t,n){var r=arguments;if(n==null||!Ja.call(n,"css"))return K.createElement.apply(void 0,r);var i=r.length,a=new Array(i);a[0]=_1,a[1]=S1(t,n);for(var s=2;s<i;s++)a[s]=r[s];return K.createElement.apply(null,a)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(q||(q={}));function Za(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return bl(t)}function w1(){var e=Za.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function C1(e){if(Array.isArray(e))return e}function O1(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,s,u=[],o=!0,c=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);o=!0);}catch(l){c=!0,i=l}finally{try{if(!o&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw i}}return u}}function E1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(e,t){return C1(e)||O1(e,t)||Xc(e,t)||E1()}function T1(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function tt(e,t){if(e==null)return{};var n,r,i=T1(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function D1(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const $1=Math.min,M1=Math.max,mi=Math.round,gi=Math.floor,hi=e=>({x:e,y:e});function P1(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function vi(){return typeof window<"u"}function Sl(e){return Il(e)?(e.nodeName||"").toLowerCase():"#document"}function dt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function xl(e){var t;return(t=(Il(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Il(e){return vi()?e instanceof Node||e instanceof dt(e).Node:!1}function F1(e){return vi()?e instanceof Element||e instanceof dt(e).Element:!1}function es(e){return vi()?e instanceof HTMLElement||e instanceof dt(e).HTMLElement:!1}function _l(e){return!vi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof dt(e).ShadowRoot}const N1=new Set(["inline","contents"]);function wl(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=ts(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!N1.has(i)}function k1(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const A1=new Set(["html","body","#document"]);function L1(e){return A1.has(Sl(e))}function ts(e){return dt(e).getComputedStyle(e)}function j1(e){if(Sl(e)==="html")return e;const t=e.assignedSlot||e.parentNode||_l(e)&&e.host||xl(e);return _l(t)?t.host:t}function Cl(e){const t=j1(e);return L1(t)?e.ownerDocument?e.ownerDocument.body:e.body:es(t)&&wl(t)?t:Cl(t)}function bi(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Cl(e),a=i===((r=e.ownerDocument)==null?void 0:r.body),s=dt(i);if(a){const u=ns(s);return t.concat(s,s.visualViewport||[],wl(i)?i:[],u&&n?bi(u):[])}return t.concat(i,bi(i,[],n))}function ns(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function B1(e){const t=ts(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=es(e),a=i?e.offsetWidth:n,s=i?e.offsetHeight:r,u=mi(n)!==a||mi(r)!==s;return u&&(n=a,r=s),{width:n,height:r,$:u}}function rs(e){return F1(e)?e:e.contextElement}function Ol(e){const t=rs(e);if(!es(t))return hi(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:a}=B1(t);let s=(a?mi(n.width):n.width)/r,u=(a?mi(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!u||!Number.isFinite(u))&&(u=1),{x:s,y:u}}const R1=hi(0);function V1(e){const t=dt(e);return!k1()||!t.visualViewport?R1:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function q1(e,t,n){return!1}function El(e,t,n,r){t===void 0&&(t=!1);const i=e.getBoundingClientRect(),a=rs(e);let s=hi(1);t&&(s=Ol(e));const u=q1()?V1(a):hi(0);let o=(i.left+u.x)/s.x,c=(i.top+u.y)/s.y,l=i.width/s.x,f=i.height/s.y;if(a){const g=dt(a),p=r;let w=g,S=ns(w);for(;S&&r&&p!==w;){const b=Ol(S),x=S.getBoundingClientRect(),v=ts(S),C=x.left+(S.clientLeft+parseFloat(v.paddingLeft))*b.x,T=x.top+(S.clientTop+parseFloat(v.paddingTop))*b.y;o*=b.x,c*=b.y,l*=b.x,f*=b.y,o+=C,c+=T,w=dt(S),S=ns(w)}}return P1({width:l,height:f,x:o,y:c})}function Tl(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function G1(e,t){let n=null,r;const i=xl(e);function a(){var u;clearTimeout(r),(u=n)==null||u.disconnect(),n=null}function s(u,o){u===void 0&&(u=!1),o===void 0&&(o=1),a();const c=e.getBoundingClientRect(),{left:l,top:f,width:g,height:p}=c;if(u||t(),!g||!p)return;const w=gi(f),S=gi(i.clientWidth-(l+g)),b=gi(i.clientHeight-(f+p)),x=gi(l),C={rootMargin:-w+"px "+-S+"px "+-b+"px "+-x+"px",threshold:M1(0,$1(1,o))||1};let T=!0;function _(I){const h=I[0].intersectionRatio;if(h!==o){if(!T)return s();h?s(!1,h):r=setTimeout(()=>{s(!1,1e-7)},1e3)}h===1&&!Tl(c,e.getBoundingClientRect())&&s(),T=!1}try{n=new IntersectionObserver(_,{...C,root:i.ownerDocument})}catch{n=new IntersectionObserver(_,C)}n.observe(e)}return s(!0),a}function U1(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:u=typeof IntersectionObserver=="function",animationFrame:o=!1}=r,c=rs(e),l=i||a?[...c?bi(c):[],...bi(t)]:[];l.forEach(x=>{i&&x.addEventListener("scroll",n,{passive:!0}),a&&x.addEventListener("resize",n)});const f=c&&u?G1(c,n):null;let g=-1,p=null;s&&(p=new ResizeObserver(x=>{let[v]=x;v&&v.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var C;(C=p)==null||C.observe(t)})),n()}),c&&!o&&p.observe(c),p.observe(t));let w,S=o?El(e):null;o&&b();function b(){const x=El(e);S&&!Tl(S,x)&&n(),S=x,w=requestAnimationFrame(b)}return n(),()=>{var x;l.forEach(v=>{i&&v.removeEventListener("scroll",n),a&&v.removeEventListener("resize",n)}),f==null||f(),(x=p)==null||x.disconnect(),p=null,o&&cancelAnimationFrame(w)}}var is=O.useLayoutEffect,z1=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],yi=function(){};function H1(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function W1(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=[].concat(r);if(t&&e)for(var s in t)t.hasOwnProperty(s)&&t[s]&&a.push("".concat(H1(e,s)));return a.filter(function(u){return u}).map(function(u){return String(u).trim()}).join(" ")}var Si=function(t){return rx(t)?t.filter(Boolean):Ft(t)==="object"&&t!==null?[t]:[]},Dl=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=tt(t,z1);return V({},n)},ye=function(t,n,r){var i=t.cx,a=t.getStyles,s=t.getClassNames,u=t.className;return{css:a(n,t),className:i(r??{},s(n,t),u)}};function Y1(e,t,n){if(n){var r=n(e,t);if(typeof r=="string")return r}return e}function xi(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function Q1(e){return xi(e)?window.innerHeight:e.clientHeight}function $l(e){return xi(e)?window.pageYOffset:e.scrollTop}function Ii(e,t){if(xi(e)){window.scrollTo(0,t);return}e.scrollTop=t}function K1(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function J1(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function _i(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:yi,i=$l(e),a=t-i,s=10,u=0;function o(){u+=s;var c=J1(u,i,a,n);Ii(e,c),u<n?window.requestAnimationFrame(o):r(e)}o()}function Ml(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?Ii(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&Ii(e,Math.max(t.offsetTop-i,0))}function X1(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Pl(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Z1(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Fl=!1,ex={get passive(){return Fl=!0}},wi=typeof window<"u"?window:{};wi.addEventListener&&wi.removeEventListener&&(wi.addEventListener("p",yi,ex),wi.removeEventListener("p",yi,!1));var tx=Fl;function nx(e){return e!=null}function rx(e){return Array.isArray(e)}function Kn(e,t,n){return e?t:n}function rE(e){return e}function iE(e){return e}var ix=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a=Object.entries(t).filter(function(s){var u=$e(s,1),o=u[0];return!r.includes(o)});return a.reduce(function(s,u){var o=$e(u,2),c=o[0],l=o[1];return s[c]=l,s},{})},ax=["children","innerProps"],sx=["children","innerProps"];function ox(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,a=e.shouldScroll,s=e.isFixedPosition,u=e.controlHeight,o=K1(n),c={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return c;var l=o.getBoundingClientRect(),f=l.height,g=n.getBoundingClientRect(),p=g.bottom,w=g.height,S=g.top,b=n.offsetParent.getBoundingClientRect(),x=b.top,v=s?window.innerHeight:Q1(o),C=$l(o),T=parseInt(getComputedStyle(n).marginBottom,10),_=parseInt(getComputedStyle(n).marginTop,10),I=x-_,h=v-S,E=I+C,D=f-C-S,$=p-v+C+T,R=C+S-_,H=160;switch(i){case"auto":case"bottom":if(h>=w)return{placement:"bottom",maxHeight:t};if(D>=w&&!s)return a&&_i(o,$,H),{placement:"bottom",maxHeight:t};if(!s&&D>=r||s&&h>=r){a&&_i(o,$,H);var ie=s?h-T:D-T;return{placement:"bottom",maxHeight:ie}}if(i==="auto"||s){var ee=t,P=s?I:E;return P>=r&&(ee=Math.min(P-T-u,t)),{placement:"top",maxHeight:ee}}if(i==="bottom")return a&&Ii(o,$),{placement:"bottom",maxHeight:t};break;case"top":if(I>=w)return{placement:"top",maxHeight:t};if(E>=w&&!s)return a&&_i(o,R,H),{placement:"top",maxHeight:t};if(!s&&E>=r||s&&I>=r){var A=t;return(!s&&E>=r||s&&I>=r)&&(A=s?I-_:E-_),a&&_i(o,R,H),{placement:"top",maxHeight:A}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function ux(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var Nl=function(t){return t==="auto"?"bottom":t},cx=function(t,n){var r,i=t.placement,a=t.theme,s=a.borderRadius,u=a.spacing,o=a.colors;return V((r={label:"menu"},un(r,ux(i),"100%"),un(r,"position","absolute"),un(r,"width","100%"),un(r,"zIndex",1),r),n?{}:{backgroundColor:o.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:u.menuGutter,marginTop:u.menuGutter})},kl=O.createContext(null),lx=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,a=t.menuPlacement,s=t.menuPosition,u=t.menuShouldScrollIntoView,o=t.theme,c=O.useContext(kl)||{},l=c.setPortalPlacement,f=O.useRef(null),g=O.useState(i),p=$e(g,2),w=p[0],S=p[1],b=O.useState(null),x=$e(b,2),v=x[0],C=x[1],T=o.spacing.controlHeight;return is(function(){var _=f.current;if(_){var I=s==="fixed",h=u&&!I,E=ox({maxHeight:i,menuEl:_,minHeight:r,placement:a,shouldScroll:h,isFixedPosition:I,controlHeight:T});S(E.maxHeight),C(E.placement),l==null||l(E.placement)}},[i,a,s,u,r,l,T]),n({ref:f,placerProps:V(V({},t),{},{placement:v||Nl(a),maxHeight:w})})},dx=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return q("div",z({},ye(t,"menu",{menu:!0}),{ref:r},i),n)},fx=dx,px=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return V({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},mx=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,a=t.isMulti;return q("div",z({},ye(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:i},r),n)},Al=function(t,n){var r=t.theme,i=r.spacing.baseUnit,a=r.colors;return V({textAlign:"center"},n?{}:{color:a.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},gx=Al,hx=Al,vx=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,a=tt(t,ax);return q("div",z({},ye(V(V({},a),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},bx=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,a=tt(t,sx);return q("div",z({},ye(V(V({},a),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},yx=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},Sx=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,a=t.innerProps,s=t.menuPlacement,u=t.menuPosition,o=O.useRef(null),c=O.useRef(null),l=O.useState(Nl(s)),f=$e(l,2),g=f[0],p=f[1],w=O.useMemo(function(){return{setPortalPlacement:p}},[]),S=O.useState(null),b=$e(S,2),x=b[0],v=b[1],C=O.useCallback(function(){if(i){var h=X1(i),E=u==="fixed"?0:window.pageYOffset,D=h[g]+E;(D!==(x==null?void 0:x.offset)||h.left!==(x==null?void 0:x.rect.left)||h.width!==(x==null?void 0:x.rect.width))&&v({offset:D,rect:h})}},[i,u,g,x==null?void 0:x.offset,x==null?void 0:x.rect.left,x==null?void 0:x.rect.width]);is(function(){C()},[C]);var T=O.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&o.current&&(c.current=U1(i,o.current,C,{elementResize:"ResizeObserver"in window}))},[i,C]);is(function(){T()},[T]);var _=O.useCallback(function(h){o.current=h,T()},[T]);if(!n&&u!=="fixed"||!x)return null;var I=q("div",z({ref:_},ye(V(V({},t),{},{offset:x.offset,position:u,rect:x.rect}),"menuPortal",{"menu-portal":!0}),a),r);return q(kl.Provider,{value:w},n?df.createPortal(I,n):I)},xx=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},Ix=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,a=t.isRtl;return q("div",z({},ye(t,"container",{"--is-disabled":i,"--is-rtl":a}),r),n)},_x=function(t,n){var r=t.theme.spacing,i=t.isMulti,a=t.hasValue,s=t.selectProps.controlShouldRenderValue;return V({alignItems:"center",display:i&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},wx=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,a=t.hasValue;return q("div",z({},ye(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":a}),r),n)},Cx=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Ox=function(t){var n=t.children,r=t.innerProps;return q("div",z({},ye(t,"indicatorsContainer",{indicators:!0}),r),n)},Ll,Ex=["size"],Tx=["innerProps","isRtl","size"],Dx={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},jl=function(t){var n=t.size,r=tt(t,Ex);return q("svg",z({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Dx},r))},as=function(t){return q(jl,z({size:20},t),q("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Bl=function(t){return q(jl,z({size:20},t),q("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Rl=function(t,n){var r=t.isFocused,i=t.theme,a=i.spacing.baseUnit,s=i.colors;return V({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?s.neutral60:s.neutral20,padding:a*2,":hover":{color:r?s.neutral80:s.neutral40}})},$x=Rl,Mx=function(t){var n=t.children,r=t.innerProps;return q("div",z({},ye(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||q(Bl,null))},Px=Rl,Fx=function(t){var n=t.children,r=t.innerProps;return q("div",z({},ye(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||q(as,null))},Nx=function(t,n){var r=t.isDisabled,i=t.theme,a=i.spacing.baseUnit,s=i.colors;return V({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},kx=function(t){var n=t.innerProps;return q("span",z({},n,ye(t,"indicatorSeparator",{"indicator-separator":!0})))},Ax=w1(Ll||(Ll=D1([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Lx=function(t,n){var r=t.isFocused,i=t.size,a=t.theme,s=a.colors,u=a.spacing.baseUnit;return V({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?s.neutral60:s.neutral20,padding:u*2})},ss=function(t){var n=t.delay,r=t.offset;return q("span",{css:Za({animation:"".concat(Ax," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},jx=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,a=i===void 0?4:i,s=tt(t,Tx);return q("div",z({},ye(V(V({},s),{},{innerProps:n,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),q(ss,{delay:0,offset:r}),q(ss,{delay:160,offset:!0}),q(ss,{delay:320,offset:!r}))},Bx=function(t,n){var r=t.isDisabled,i=t.isFocused,a=t.theme,s=a.colors,u=a.borderRadius,o=a.spacing;return V({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:o.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:i?s.primary:s.neutral20,borderRadius:u,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:i?s.primary:s.neutral30}})},Rx=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,a=t.innerRef,s=t.innerProps,u=t.menuIsOpen;return q("div",z({ref:a},ye(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":u}),s,{"aria-disabled":r||void 0}),n)},Vx=Rx,qx=["data"],Gx=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Ux=function(t){var n=t.children,r=t.cx,i=t.getStyles,a=t.getClassNames,s=t.Heading,u=t.headingProps,o=t.innerProps,c=t.label,l=t.theme,f=t.selectProps;return q("div",z({},ye(t,"group",{group:!0}),o),q(s,z({},u,{selectProps:f,theme:l,getStyles:i,getClassNames:a,cx:r}),c),q("div",null,n))},zx=function(t,n){var r=t.theme,i=r.colors,a=r.spacing;return V({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Hx=function(t){var n=Dl(t);n.data;var r=tt(n,qx);return q("div",z({},ye(t,"groupHeading",{"group-heading":!0}),r))},Wx=Ux,Yx=["innerRef","isDisabled","isHidden","inputClassName"],Qx=function(t,n){var r=t.isDisabled,i=t.value,a=t.theme,s=a.spacing,u=a.colors;return V(V({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},Kx),n?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:u.neutral80})},Vl={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Kx={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":V({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Vl)},Jx=function(t){return V({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Vl)},Xx=function(t){var n=t.cx,r=t.value,i=Dl(t),a=i.innerRef,s=i.isDisabled,u=i.isHidden,o=i.inputClassName,c=tt(i,Yx);return q("div",z({},ye(t,"input",{"input-container":!0}),{"data-value":r||""}),q("input",z({className:n({input:!0},o),ref:a,style:Jx(u),disabled:s},c)))},Zx=Xx,eI=function(t,n){var r=t.theme,i=r.spacing,a=r.borderRadius,s=r.colors;return V({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:i.baseUnit/2})},tI=function(t,n){var r=t.theme,i=r.borderRadius,a=r.colors,s=t.cropWithEllipsis;return V({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},nI=function(t,n){var r=t.theme,i=r.spacing,a=r.borderRadius,s=r.colors,u=t.isFocused;return V({alignItems:"center",display:"flex"},n?{}:{borderRadius:a/2,backgroundColor:u?s.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},ql=function(t){var n=t.children,r=t.innerProps;return q("div",r,n)},rI=ql,iI=ql;function aI(e){var t=e.children,n=e.innerProps;return q("div",z({role:"button"},n),t||q(as,{size:14}))}var sI=function(t){var n=t.children,r=t.components,i=t.data,a=t.innerProps,s=t.isDisabled,u=t.removeProps,o=t.selectProps,c=r.Container,l=r.Label,f=r.Remove;return q(c,{data:i,innerProps:V(V({},ye(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:o},q(l,{data:i,innerProps:V({},ye(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:o},n),q(f,{data:i,innerProps:V(V({},ye(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},u),selectProps:o}))},oI=sI,uI=function(t,n){var r=t.isDisabled,i=t.isFocused,a=t.isSelected,s=t.theme,u=s.spacing,o=s.colors;return V({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:a?o.primary:i?o.primary25:"transparent",color:r?o.neutral20:a?o.neutral0:"inherit",padding:"".concat(u.baseUnit*2,"px ").concat(u.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?o.primary:o.primary50}})},cI=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,a=t.isSelected,s=t.innerRef,u=t.innerProps;return q("div",z({},ye(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":a}),{ref:s,"aria-disabled":r},u),n)},lI=cI,dI=function(t,n){var r=t.theme,i=r.spacing,a=r.colors;return V({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:a.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},fI=function(t){var n=t.children,r=t.innerProps;return q("div",z({},ye(t,"placeholder",{placeholder:!0}),r),n)},pI=fI,mI=function(t,n){var r=t.isDisabled,i=t.theme,a=i.spacing,s=i.colors;return V({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},gI=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return q("div",z({},ye(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},hI=gI,vI={ClearIndicator:Fx,Control:Vx,DropdownIndicator:Mx,DownChevron:Bl,CrossIcon:as,Group:Wx,GroupHeading:Hx,IndicatorsContainer:Ox,IndicatorSeparator:kx,Input:Zx,LoadingIndicator:jx,Menu:fx,MenuList:mx,MenuPortal:Sx,LoadingMessage:bx,NoOptionsMessage:vx,MultiValue:oI,MultiValueContainer:rI,MultiValueLabel:iI,MultiValueRemove:aI,Option:lI,Placeholder:pI,SelectContainer:Ix,SingleValue:hI,ValueContainer:wx},bI=function(t){return V(V({},vI),t.components)},Gl=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function yI(e,t){return!!(e===t||Gl(e)&&Gl(t))}function SI(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!yI(e[n],t[n]))return!1;return!0}function xI(e,t){t===void 0&&(t=SI);var n=null;function r(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var s=e.apply(this,i);return n={lastResult:s,lastArgs:i,lastThis:this},s}return r.clear=function(){n=null},r}for(var II={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},_I=function(t){return q("span",z({css:II},t))},Ul=_I,wI={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,a=t.context,s=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,a=t.labels,s=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,a=t.label,s=a===void 0?"":a,u=t.selectValue,o=t.isDisabled,c=t.isSelected,l=t.isAppleDevice,f=function(S,b){return S&&S.length?"".concat(S.indexOf(b)+1," of ").concat(S.length):""};if(n==="value"&&u)return"value ".concat(s," focused, ").concat(f(u,r),".");if(n==="menu"&&l){var g=o?" disabled":"",p="".concat(c?" selected":"").concat(g);return"".concat(s).concat(p,", ").concat(f(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},CI=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,a=t.focusableOptions,s=t.isFocused,u=t.selectValue,o=t.selectProps,c=t.id,l=t.isAppleDevice,f=o.ariaLiveMessages,g=o.getOptionLabel,p=o.inputValue,w=o.isMulti,S=o.isOptionDisabled,b=o.isSearchable,x=o.menuIsOpen,v=o.options,C=o.screenReaderStatus,T=o.tabSelectsValue,_=o.isLoading,I=o["aria-label"],h=o["aria-live"],E=O.useMemo(function(){return V(V({},wI),f||{})},[f]),D=O.useMemo(function(){var P="";if(n&&E.onChange){var A=n.option,L=n.options,G=n.removedValue,te=n.removedValues,ue=n.value,F=function(J){return Array.isArray(J)?null:J},j=G||A||F(ue),Y=j?g(j):"",W=L||te||void 0,M=W?W.map(g):[],B=V({isDisabled:j&&S(j,u),label:Y,labels:M},n);P=E.onChange(B)}return P},[n,E,S,u,g]),$=O.useMemo(function(){var P="",A=r||i,L=!!(r&&u&&u.includes(r));if(A&&E.onFocus){var G={focused:A,label:g(A),isDisabled:S(A,u),isSelected:L,options:a,context:A===r?"menu":"value",selectValue:u,isAppleDevice:l};P=E.onFocus(G)}return P},[r,i,g,S,E,a,u,l]),R=O.useMemo(function(){var P="";if(x&&v.length&&!_&&E.onFilter){var A=C({count:a.length});P=E.onFilter({inputValue:p,resultsMessage:A})}return P},[a,p,x,E,v,C,_]),H=(n==null?void 0:n.action)==="initial-input-focus",ie=O.useMemo(function(){var P="";if(E.guidance){var A=i?"value":x?"menu":"input";P=E.guidance({"aria-label":I,context:A,isDisabled:r&&S(r,u),isMulti:w,isSearchable:b,tabSelectsValue:T,isInitialFocus:H})}return P},[I,r,i,w,S,b,x,E,u,T,H]),ee=q(O.Fragment,null,q("span",{id:"aria-selection"},D),q("span",{id:"aria-focused"},$),q("span",{id:"aria-results"},R),q("span",{id:"aria-guidance"},ie));return q(O.Fragment,null,q(Ul,{id:c},H&&ee),q(Ul,{"aria-live":h,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!H&&ee))},OI=CI,os=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],EI=new RegExp("["+os.map(function(e){return e.letters}).join("")+"]","g"),zl={},us=0;us<os.length;us++)for(var cs=os[us],ls=0;ls<cs.letters.length;ls++)zl[cs.letters[ls]]=cs.base;var Hl=function(t){return t.replace(EI,function(n){return zl[n]})},TI=xI(Hl),Wl=function(t){return t.replace(/^\s+|\s+$/g,"")},DI=function(t){return"".concat(t.label," ").concat(t.value)},$I=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=V({ignoreCase:!0,ignoreAccents:!0,stringify:DI,trim:!0,matchFrom:"any"},t),a=i.ignoreCase,s=i.ignoreAccents,u=i.stringify,o=i.trim,c=i.matchFrom,l=o?Wl(r):r,f=o?Wl(u(n)):u(n);return a&&(l=l.toLowerCase(),f=f.toLowerCase()),s&&(l=TI(l),f=Hl(f)),c==="start"?f.substr(0,l.length)===l:f.indexOf(l)>-1}},MI=["innerRef"];function PI(e){var t=e.innerRef,n=tt(e,MI),r=ix(n,"onExited","in","enter","exit","appear");return q("input",z({ref:t},r,{css:Za({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var FI=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function NI(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,a=e.onTopLeave,s=O.useRef(!1),u=O.useRef(!1),o=O.useRef(0),c=O.useRef(null),l=O.useCallback(function(b,x){if(c.current!==null){var v=c.current,C=v.scrollTop,T=v.scrollHeight,_=v.clientHeight,I=c.current,h=x>0,E=T-_-C,D=!1;E>x&&s.current&&(r&&r(b),s.current=!1),h&&u.current&&(a&&a(b),u.current=!1),h&&x>E?(n&&!s.current&&n(b),I.scrollTop=T,D=!0,s.current=!0):!h&&-x>C&&(i&&!u.current&&i(b),I.scrollTop=0,D=!0,u.current=!0),D&&FI(b)}},[n,r,i,a]),f=O.useCallback(function(b){l(b,b.deltaY)},[l]),g=O.useCallback(function(b){o.current=b.changedTouches[0].clientY},[]),p=O.useCallback(function(b){var x=o.current-b.changedTouches[0].clientY;l(b,x)},[l]),w=O.useCallback(function(b){if(b){var x=tx?{passive:!1}:!1;b.addEventListener("wheel",f,x),b.addEventListener("touchstart",g,x),b.addEventListener("touchmove",p,x)}},[p,g,f]),S=O.useCallback(function(b){b&&(b.removeEventListener("wheel",f,!1),b.removeEventListener("touchstart",g,!1),b.removeEventListener("touchmove",p,!1))},[p,g,f]);return O.useEffect(function(){if(t){var b=c.current;return w(b),function(){S(b)}}},[t,w,S]),function(b){c.current=b}}var Yl=["boxSizing","height","overflow","paddingRight","position"],Ql={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Kl(e){e.cancelable&&e.preventDefault()}function Jl(e){e.stopPropagation()}function Xl(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function Zl(){return"ontouchstart"in window||navigator.maxTouchPoints}var ed=!!(typeof window<"u"&&window.document&&window.document.createElement),Jn=0,pn={capture:!1,passive:!1};function kI(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=O.useRef({}),a=O.useRef(null),s=O.useCallback(function(o){if(ed){var c=document.body,l=c&&c.style;if(r&&Yl.forEach(function(w){var S=l&&l[w];i.current[w]=S}),r&&Jn<1){var f=parseInt(i.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,p=window.innerWidth-g+f||0;Object.keys(Ql).forEach(function(w){var S=Ql[w];l&&(l[w]=S)}),l&&(l.paddingRight="".concat(p,"px"))}c&&Zl()&&(c.addEventListener("touchmove",Kl,pn),o&&(o.addEventListener("touchstart",Xl,pn),o.addEventListener("touchmove",Jl,pn))),Jn+=1}},[r]),u=O.useCallback(function(o){if(ed){var c=document.body,l=c&&c.style;Jn=Math.max(Jn-1,0),r&&Jn<1&&Yl.forEach(function(f){var g=i.current[f];l&&(l[f]=g)}),c&&Zl()&&(c.removeEventListener("touchmove",Kl,pn),o&&(o.removeEventListener("touchstart",Xl,pn),o.removeEventListener("touchmove",Jl,pn)))}},[r]);return O.useEffect(function(){if(t){var o=a.current;return s(o),function(){u(o)}}},[t,s,u]),function(o){a.current=o}}var AI=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},LI={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function jI(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,a=e.onBottomArrive,s=e.onBottomLeave,u=e.onTopArrive,o=e.onTopLeave,c=NI({isEnabled:i,onBottomArrive:a,onBottomLeave:s,onTopArrive:u,onTopLeave:o}),l=kI({isEnabled:n}),f=function(p){c(p),l(p)};return q(O.Fragment,null,n&&q("div",{onClick:AI,css:LI}),t(f))}var BI={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},RI=function(t){var n=t.name,r=t.onFocus;return q("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:BI,value:"",onChange:function(){}})},VI=RI;function ds(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function qI(){return ds(/^iPhone/i)}function td(){return ds(/^Mac/i)}function GI(){return ds(/^iPad/i)||td()&&navigator.maxTouchPoints>1}function UI(){return qI()||GI()}function zI(){return td()||UI()}var HI=function(t){return t.label},nd=function(t){return t.label},rd=function(t){return t.value},WI=function(t){return!!t.isDisabled},YI={clearIndicator:Px,container:xx,control:Bx,dropdownIndicator:$x,group:Gx,groupHeading:zx,indicatorsContainer:Cx,indicatorSeparator:Nx,input:Qx,loadingIndicator:Lx,loadingMessage:hx,menu:cx,menuList:px,menuPortal:yx,multiValue:eI,multiValueLabel:tI,multiValueRemove:nI,noOptionsMessage:gx,option:uI,placeholder:dI,singleValue:mI,valueContainer:_x},QI={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},KI=4,id=4,JI=38,XI=id*2,ZI={baseUnit:id,controlHeight:JI,menuGutter:XI},fs={borderRadius:KI,colors:QI,spacing:ZI},e_={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Pl(),captureMenuScroll:!Pl(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:$I(),formatGroupLabel:HI,getOptionLabel:nd,getOptionValue:rd,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:WI,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Z1(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function ad(e,t,n,r){var i=ld(e,t,n),a=dd(e,t,n),s=cd(e,t),u=Oi(e,t);return{type:"option",data:t,isDisabled:i,isSelected:a,label:s,value:u,index:r}}function Ci(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(s,u){return ad(e,s,t,u)}).filter(function(s){return ud(e,s)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var a=ad(e,n,t,r);return ud(e,a)?a:void 0}).filter(nx)}function sd(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,cn(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function od(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,cn(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function t_(e,t){return sd(Ci(e,t))}function ud(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,a=t.isSelected,s=t.label,u=t.value;return(!pd(e)||!a)&&fd(e,{label:s,value:u,data:i},r)}function n_(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var a=t.indexOf(n);if(a>-1)return n;if(i<t.length)return t[i]}return null}function r_(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var ps=function(t,n){var r,i=(r=t.find(function(a){return a.data===n}))===null||r===void 0?void 0:r.id;return i||null},cd=function(t,n){return t.getOptionLabel(n)},Oi=function(t,n){return t.getOptionValue(n)};function ld(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function dd(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=Oi(e,t);return n.some(function(i){return Oi(e,i)===r})}function fd(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var pd=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},i_=1,ms=function(e){hS(n,e);var t=yS(n);function n(r){var i;if(mS(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(o){i.controlRef=o},i.focusedOptionRef=null,i.getFocusedOptionRef=function(o){i.focusedOptionRef=o},i.menuListRef=null,i.getMenuListRef=function(o){i.menuListRef=o},i.inputRef=null,i.getInputRef=function(o){i.inputRef=o},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(o,c){var l=i.props,f=l.onChange,g=l.name;c.name=g,i.ariaOnChange(o,c),f(o,c)},i.setValue=function(o,c,l){var f=i.props,g=f.closeMenuOnSelect,p=f.isMulti,w=f.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:w}),g&&(i.setState({inputIsHiddenAfterUpdate:!p}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(o,{action:c,option:l})},i.selectOption=function(o){var c=i.props,l=c.blurInputOnSelect,f=c.isMulti,g=c.name,p=i.state.selectValue,w=f&&i.isOptionSelected(o,p),S=i.isOptionDisabled(o,p);if(w){var b=i.getOptionValue(o);i.setValue(p.filter(function(x){return i.getOptionValue(x)!==b}),"deselect-option",o)}else if(!S)f?i.setValue([].concat(cn(p),[o]),"select-option",o):i.setValue(o,"select-option");else{i.ariaOnChange(o,{action:"select-option",option:o,name:g});return}l&&i.blurInput()},i.removeValue=function(o){var c=i.props.isMulti,l=i.state.selectValue,f=i.getOptionValue(o),g=l.filter(function(w){return i.getOptionValue(w)!==f}),p=Kn(c,g,g[0]||null);i.onChange(p,{action:"remove-value",removedValue:o}),i.focusInput()},i.clearValue=function(){var o=i.state.selectValue;i.onChange(Kn(i.props.isMulti,[],null),{action:"clear",removedValues:o})},i.popValue=function(){var o=i.props.isMulti,c=i.state.selectValue,l=c[c.length-1],f=c.slice(0,c.length-1),g=Kn(o,f,f[0]||null);l&&i.onChange(g,{action:"pop-value",removedValue:l})},i.getFocusedOptionId=function(o){return ps(i.state.focusableOptionsWithIds,o)},i.getFocusableOptionsWithIds=function(){return od(Ci(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return W1.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(o){return cd(i.props,o)},i.getOptionValue=function(o){return Oi(i.props,o)},i.getStyles=function(o,c){var l=i.props.unstyled,f=YI[o](c,l);f.boxSizing="border-box";var g=i.props.styles[o];return g?g(f,c):f},i.getClassNames=function(o,c){var l,f;return(l=(f=i.props.classNames)[o])===null||l===void 0?void 0:l.call(f,c)},i.getElementId=function(o){return"".concat(i.state.instancePrefix,"-").concat(o)},i.getComponents=function(){return bI(i.props)},i.buildCategorizedOptions=function(){return Ci(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return sd(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(o,c){i.setState({ariaSelection:V({value:o},c)})},i.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(o){i.blockOptionHover=!1},i.onControlMouseDown=function(o){if(!o.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},i.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!i.props.isDisabled){var c=i.props,l=c.isMulti,f=c.menuIsOpen;i.focusInput(),f?(i.setState({inputIsHiddenAfterUpdate:!l}),i.onMenuClose()):i.openMenu("first"),o.preventDefault()}},i.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(i.clearValue(),o.preventDefault(),i.openAfterFocus=!1,o.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(o){typeof i.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&xi(o.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(o)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(o){var c=o.touches,l=c&&c.item(0);l&&(i.initialTouchX=l.clientX,i.initialTouchY=l.clientY,i.userIsDragging=!1)},i.onTouchMove=function(o){var c=o.touches,l=c&&c.item(0);if(l){var f=Math.abs(l.clientX-i.initialTouchX),g=Math.abs(l.clientY-i.initialTouchY),p=5;i.userIsDragging=f>p||g>p}},i.onTouchEnd=function(o){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(o.target)&&i.menuListRef&&!i.menuListRef.contains(o.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(o){i.userIsDragging||i.onControlMouseDown(o)},i.onClearIndicatorTouchEnd=function(o){i.userIsDragging||i.onClearIndicatorMouseDown(o)},i.onDropdownIndicatorTouchEnd=function(o){i.userIsDragging||i.onDropdownIndicatorMouseDown(o)},i.handleInputChange=function(o){var c=i.props.inputValue,l=o.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(l,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(o){i.props.onFocus&&i.props.onFocus(o),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(o){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(o),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(o){if(!(i.blockOptionHover||i.state.focusedOption===o)){var c=i.getFocusableOptions(),l=c.indexOf(o);i.setState({focusedOption:o,focusedOptionId:l>-1?i.getFocusedOptionId(o):null})}},i.shouldHideSelectedOptions=function(){return pd(i.props)},i.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),i.focus()},i.onKeyDown=function(o){var c=i.props,l=c.isMulti,f=c.backspaceRemovesValue,g=c.escapeClearsValue,p=c.inputValue,w=c.isClearable,S=c.isDisabled,b=c.menuIsOpen,x=c.onKeyDown,v=c.tabSelectsValue,C=c.openMenuOnFocus,T=i.state,_=T.focusedOption,I=T.focusedValue,h=T.selectValue;if(!S&&!(typeof x=="function"&&(x(o),o.defaultPrevented))){switch(i.blockOptionHover=!0,o.key){case"ArrowLeft":if(!l||p)return;i.focusValue("previous");break;case"ArrowRight":if(!l||p)return;i.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(I)i.removeValue(I);else{if(!f)return;l?i.popValue():w&&i.clearValue()}break;case"Tab":if(i.isComposing||o.shiftKey||!b||!v||!_||C&&i.isOptionSelected(_,h))return;i.selectOption(_);break;case"Enter":if(o.keyCode===229)break;if(b){if(!_||i.isComposing)return;i.selectOption(_);break}return;case"Escape":b?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:p}),i.onMenuClose()):w&&g&&i.clearValue();break;case" ":if(p)return;if(!b){i.openMenu("first");break}if(!_)return;i.selectOption(_);break;case"ArrowUp":b?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":b?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!b)return;i.focusOption("pageup");break;case"PageDown":if(!b)return;i.focusOption("pagedown");break;case"Home":if(!b)return;i.focusOption("first");break;case"End":if(!b)return;i.focusOption("last");break;default:return}o.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++i_),i.state.selectValue=Si(r.value),r.menuIsOpen&&i.state.selectValue.length){var a=i.getFocusableOptionsWithIds(),s=i.buildFocusableOptions(),u=s.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=a,i.state.focusedOption=s[u],i.state.focusedOptionId=ps(a,s[u])}return i}return gS(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ml(this.menuListRef,this.focusedOptionRef),zI()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var a=this.props,s=a.isDisabled,u=a.menuIsOpen,o=this.state.isFocused;(o&&!s&&i.isDisabled||o&&u&&!i.menuIsOpen)&&this.focusInput(),o&&s&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!o&&!s&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ml(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,a){this.props.onInputChange(i,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var a=this,s=this.state,u=s.selectValue,o=s.isFocused,c=this.buildFocusableOptions(),l=i==="first"?0:c.length-1;if(!this.props.isMulti){var f=c.indexOf(u[0]);f>-1&&(l=f)}this.scrollToFocusedOptionOnUpdate=!(o&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[l],focusedOptionId:this.getFocusedOptionId(c[l])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(i){var a=this.state,s=a.selectValue,u=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var o=s.indexOf(u);u||(o=-1);var c=s.length-1,l=-1;if(s.length){switch(i){case"previous":o===0?l=0:o===-1?l=c:l=o-1;break;case"next":o>-1&&o<c&&(l=o+1);break}this.setState({inputIsHidden:l!==-1,focusedValue:s[l]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,u=this.getFocusableOptions();if(u.length){var o=0,c=u.indexOf(s);s||(c=-1),i==="up"?o=c>0?c-1:u.length-1:i==="down"?o=(c+1)%u.length:i==="pageup"?(o=c-a,o<0&&(o=0)):i==="pagedown"?(o=c+a,o>u.length-1&&(o=u.length-1)):i==="last"&&(o=u.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:u[o],focusedValue:null,focusedOptionId:this.getFocusedOptionId(u[o])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(fs):V(V({},fs),this.props.theme):fs}},{key:"getCommonProps",value:function(){var i=this.clearValue,a=this.cx,s=this.getStyles,u=this.getClassNames,o=this.getValue,c=this.selectOption,l=this.setValue,f=this.props,g=f.isMulti,p=f.isRtl,w=f.options,S=this.hasValue();return{clearValue:i,cx:a,getStyles:s,getClassNames:u,getValue:o,hasValue:S,isMulti:g,isRtl:p,options:w,selectOption:c,selectProps:f,setValue:l,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,a=i.isClearable,s=i.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(i,a){return ld(this.props,i,a)}},{key:"isOptionSelected",value:function(i,a){return dd(this.props,i,a)}},{key:"filterOption",value:function(i,a){return fd(this.props,i,a)}},{key:"formatOptionLabel",value:function(i,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,u=this.state.selectValue;return this.props.formatOptionLabel(i,{context:a,inputValue:s,selectValue:u})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,a=i.isDisabled,s=i.isSearchable,u=i.inputId,o=i.inputValue,c=i.tabIndex,l=i.form,f=i.menuIsOpen,g=i.required,p=this.getComponents(),w=p.Input,S=this.state,b=S.inputIsHidden,x=S.ariaSelection,v=this.commonProps,C=u||this.getElementId("input"),T=V(V(V({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},f&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(x==null?void 0:x.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?K.createElement(w,z({},v,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:C,innerRef:this.getInputRef,isDisabled:a,isHidden:b,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:l,type:"text",value:o},T)):K.createElement(PI,z({id:C,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:yi,onFocus:this.onInputFocus,disabled:a,tabIndex:c,inputMode:"none",form:l,value:""},T))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,a=this.getComponents(),s=a.MultiValue,u=a.MultiValueContainer,o=a.MultiValueLabel,c=a.MultiValueRemove,l=a.SingleValue,f=a.Placeholder,g=this.commonProps,p=this.props,w=p.controlShouldRenderValue,S=p.isDisabled,b=p.isMulti,x=p.inputValue,v=p.placeholder,C=this.state,T=C.selectValue,_=C.focusedValue,I=C.isFocused;if(!this.hasValue()||!w)return x?null:K.createElement(f,z({},g,{key:"placeholder",isDisabled:S,isFocused:I,innerProps:{id:this.getElementId("placeholder")}}),v);if(b)return T.map(function(E,D){var $=E===_,R="".concat(i.getOptionLabel(E),"-").concat(i.getOptionValue(E));return K.createElement(s,z({},g,{components:{Container:u,Label:o,Remove:c},isFocused:$,isDisabled:S,key:R,index:D,removeProps:{onClick:function(){return i.removeValue(E)},onTouchEnd:function(){return i.removeValue(E)},onMouseDown:function(ie){ie.preventDefault()}},data:E}),i.formatOptionLabel(E,"value"))});if(x)return null;var h=T[0];return K.createElement(l,z({},g,{data:h,isDisabled:S}),this.formatOptionLabel(h,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),a=i.ClearIndicator,s=this.commonProps,u=this.props,o=u.isDisabled,c=u.isLoading,l=this.state.isFocused;if(!this.isClearable()||!a||o||!this.hasValue()||c)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return K.createElement(a,z({},s,{innerProps:f,isFocused:l}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),a=i.LoadingIndicator,s=this.commonProps,u=this.props,o=u.isDisabled,c=u.isLoading,l=this.state.isFocused;if(!a||!c)return null;var f={"aria-hidden":"true"};return K.createElement(a,z({},s,{innerProps:f,isDisabled:o,isFocused:l}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),a=i.DropdownIndicator,s=i.IndicatorSeparator;if(!a||!s)return null;var u=this.commonProps,o=this.props.isDisabled,c=this.state.isFocused;return K.createElement(s,z({},u,{isDisabled:o,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),a=i.DropdownIndicator;if(!a)return null;var s=this.commonProps,u=this.props.isDisabled,o=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return K.createElement(a,z({},s,{innerProps:c,isDisabled:u,isFocused:o}))}},{key:"renderMenu",value:function(){var i=this,a=this.getComponents(),s=a.Group,u=a.GroupHeading,o=a.Menu,c=a.MenuList,l=a.MenuPortal,f=a.LoadingMessage,g=a.NoOptionsMessage,p=a.Option,w=this.commonProps,S=this.state.focusedOption,b=this.props,x=b.captureMenuScroll,v=b.inputValue,C=b.isLoading,T=b.loadingMessage,_=b.minMenuHeight,I=b.maxMenuHeight,h=b.menuIsOpen,E=b.menuPlacement,D=b.menuPosition,$=b.menuPortalTarget,R=b.menuShouldBlockScroll,H=b.menuShouldScrollIntoView,ie=b.noOptionsMessage,ee=b.onMenuScrollToTop,P=b.onMenuScrollToBottom;if(!h)return null;var A=function(Y,W){var M=Y.type,B=Y.data,N=Y.isDisabled,J=Y.isSelected,Me=Y.label,Be=Y.value,mt=S===B,Rt=N?void 0:function(){return i.onOptionHover(B)},As=N?void 0:function(){return i.selectOption(B)},ji="".concat(i.getElementId("option"),"-").concat(W),dr={id:ji,onClick:As,onMouseMove:Rt,onMouseOver:Rt,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:J};return K.createElement(p,z({},w,{innerProps:dr,data:B,isDisabled:N,isSelected:J,key:ji,label:Me,type:M,value:Be,isFocused:mt,innerRef:mt?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(Y.data,"menu"))},L;if(this.hasOptions())L=this.getCategorizedOptions().map(function(j){if(j.type==="group"){var Y=j.data,W=j.options,M=j.index,B="".concat(i.getElementId("group"),"-").concat(M),N="".concat(B,"-heading");return K.createElement(s,z({},w,{key:B,data:Y,options:W,Heading:u,headingProps:{id:N,data:j.data},label:i.formatGroupLabel(j.data)}),j.options.map(function(J){return A(J,"".concat(M,"-").concat(J.index))}))}else if(j.type==="option")return A(j,"".concat(j.index))});else if(C){var G=T({inputValue:v});if(G===null)return null;L=K.createElement(f,w,G)}else{var te=ie({inputValue:v});if(te===null)return null;L=K.createElement(g,w,te)}var ue={minMenuHeight:_,maxMenuHeight:I,menuPlacement:E,menuPosition:D,menuShouldScrollIntoView:H},F=K.createElement(lx,z({},w,ue),function(j){var Y=j.ref,W=j.placerProps,M=W.placement,B=W.maxHeight;return K.createElement(o,z({},w,ue,{innerRef:Y,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:C,placement:M}),K.createElement(jI,{captureEnabled:x,onTopArrive:ee,onBottomArrive:P,lockEnabled:R},function(N){return K.createElement(c,z({},w,{innerRef:function(Me){i.getMenuListRef(Me),N(Me)},innerProps:{role:"listbox","aria-multiselectable":w.isMulti,id:i.getElementId("listbox")},isLoading:C,maxHeight:B,focusedOption:S}),L)}))});return $||D==="fixed"?K.createElement(l,z({},w,{appendTo:$,controlElement:this.controlRef,menuPlacement:E,menuPosition:D}),F):F}},{key:"renderFormField",value:function(){var i=this,a=this.props,s=a.delimiter,u=a.isDisabled,o=a.isMulti,c=a.name,l=a.required,f=this.state.selectValue;if(l&&!this.hasValue()&&!u)return K.createElement(VI,{name:c,onFocus:this.onValueInputFocus});if(!(!c||u))if(o)if(s){var g=f.map(function(S){return i.getOptionValue(S)}).join(s);return K.createElement("input",{name:c,type:"hidden",value:g})}else{var p=f.length>0?f.map(function(S,b){return K.createElement("input",{key:"i-".concat(b),name:c,type:"hidden",value:i.getOptionValue(S)})}):K.createElement("input",{name:c,type:"hidden",value:""});return K.createElement("div",null,p)}else{var w=f[0]?this.getOptionValue(f[0]):"";return K.createElement("input",{name:c,type:"hidden",value:w})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,a=this.state,s=a.ariaSelection,u=a.focusedOption,o=a.focusedValue,c=a.isFocused,l=a.selectValue,f=this.getFocusableOptions();return K.createElement(OI,z({},i,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:u,focusedValue:o,isFocused:c,selectValue:l,focusableOptions:f,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),a=i.Control,s=i.IndicatorsContainer,u=i.SelectContainer,o=i.ValueContainer,c=this.props,l=c.className,f=c.id,g=c.isDisabled,p=c.menuIsOpen,w=this.state.isFocused,S=this.commonProps=this.getCommonProps();return K.createElement(u,z({},S,{className:l,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:w}),this.renderLiveRegion(),K.createElement(a,z({},S,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:w,menuIsOpen:p}),K.createElement(o,z({},S,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),K.createElement(s,z({},S,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,a){var s=a.prevProps,u=a.clearFocusValueOnUpdate,o=a.inputIsHiddenAfterUpdate,c=a.ariaSelection,l=a.isFocused,f=a.prevWasFocused,g=a.instancePrefix,p=i.options,w=i.value,S=i.menuIsOpen,b=i.inputValue,x=i.isMulti,v=Si(w),C={};if(s&&(w!==s.value||p!==s.options||S!==s.menuIsOpen||b!==s.inputValue)){var T=S?t_(i,v):[],_=S?od(Ci(i,v),"".concat(g,"-option")):[],I=u?n_(a,v):null,h=r_(a,T),E=ps(_,h);C={selectValue:v,focusedOption:h,focusedOptionId:E,focusableOptionsWithIds:_,focusedValue:I,clearFocusValueOnUpdate:!1}}var D=o!=null&&i!==s?{inputIsHidden:o,inputIsHiddenAfterUpdate:void 0}:{},$=c,R=l&&f;return l&&!R&&($={value:Kn(x,v,v[0]||null),options:v,action:"initial-input-focus"},R=!f),(c==null?void 0:c.action)==="initial-input-focus"&&($=null),V(V(V({},C),D),{},{prevProps:i,ariaSelection:$,prevWasFocused:R})}}]),n}(O.Component);ms.defaultProps=e_;var a_=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function md(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,a=e.defaultValue,s=a===void 0?null:a,u=e.inputValue,o=e.menuIsOpen,c=e.onChange,l=e.onInputChange,f=e.onMenuClose,g=e.onMenuOpen,p=e.value,w=tt(e,a_),S=O.useState(u!==void 0?u:n),b=$e(S,2),x=b[0],v=b[1],C=O.useState(o!==void 0?o:i),T=$e(C,2),_=T[0],I=T[1],h=O.useState(p!==void 0?p:s),E=$e(h,2),D=E[0],$=E[1],R=O.useCallback(function(G,te){typeof c=="function"&&c(G,te),$(G)},[c]),H=O.useCallback(function(G,te){var ue;typeof l=="function"&&(ue=l(G,te)),v(ue!==void 0?ue:G)},[l]),ie=O.useCallback(function(){typeof g=="function"&&g(),I(!0)},[g]),ee=O.useCallback(function(){typeof f=="function"&&f(),I(!1)},[f]),P=u!==void 0?u:x,A=o!==void 0?o:_,L=p!==void 0?p:D;return V(V({},w),{},{inputValue:P,menuIsOpen:A,onChange:R,onInputChange:H,onMenuClose:ee,onMenuOpen:ie,value:L})}var s_=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function gd(e){var t=e.defaultOptions,n=t===void 0?!1:t,r=e.cacheOptions,i=r===void 0?!1:r,a=e.loadOptions;e.options;var s=e.isLoading,u=s===void 0?!1:s,o=e.onInputChange,c=e.filterOption,l=c===void 0?null:c,f=tt(e,s_),g=f.inputValue,p=O.useRef(void 0),w=O.useRef(!1),S=O.useState(Array.isArray(n)?n:void 0),b=$e(S,2),x=b[0],v=b[1],C=O.useState(typeof g<"u"?g:""),T=$e(C,2),_=T[0],I=T[1],h=O.useState(n===!0),E=$e(h,2),D=E[0],$=E[1],R=O.useState(void 0),H=$e(R,2),ie=H[0],ee=H[1],P=O.useState([]),A=$e(P,2),L=A[0],G=A[1],te=O.useState(!1),ue=$e(te,2),F=ue[0],j=ue[1],Y=O.useState({}),W=$e(Y,2),M=W[0],B=W[1],N=O.useState(void 0),J=$e(N,2),Me=J[0],Be=J[1],mt=O.useState(void 0),Rt=$e(mt,2),As=Rt[0],ji=Rt[1];i!==As&&(B({}),ji(i)),n!==Me&&(v(Array.isArray(n)?n:void 0),Be(n)),O.useEffect(function(){return w.current=!0,function(){w.current=!1}},[]);var dr=O.useCallback(function(fr,vn){if(!a)return vn();var Qe=a(fr,vn);Qe&&typeof Qe.then=="function"&&Qe.then(vn,function(){return vn()})},[a]);O.useEffect(function(){n===!0&&dr(_,function(fr){w.current&&(v(fr||[]),$(!!p.current))})},[]);var UO=O.useCallback(function(fr,vn){var Qe=Y1(fr,vn,o);if(!Qe){p.current=void 0,I(""),ee(""),G([]),$(!1),j(!1);return}if(i&&M[Qe])I(Qe),ee(Qe),G(M[Qe]),$(!1),j(!1);else{var HO=p.current={};I(Qe),$(!0),j(!ie),dr(Qe,function(Ls){w&&HO===p.current&&(p.current=void 0,$(!1),ee(Qe),G(Ls||[]),j(!1),B(Ls?V(V({},M),{},un({},Qe,Ls)):M))})}},[i,dr,ie,M,o]),zO=F?[]:_&&ie?L:x||[];return V(V({},f),{},{options:zO,isLoading:D||u,onInputChange:UO,filterOption:l})}var o_=O.forwardRef(function(e,t){var n=gd(e),r=md(n);return K.createElement(ms,z({ref:t},r))}),u_=o_,c_=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],hd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=String(t).toLowerCase(),a=String(r.getOptionValue(n)).toLowerCase(),s=String(r.getOptionLabel(n)).toLowerCase();return a===i||s===i},gs={formatCreateLabel:function(t){return'Create "'.concat(t,'"')},isValidNewOption:function(t,n,r,i){return!(!t||n.some(function(a){return hd(t,a,i)})||r.some(function(a){return hd(t,a,i)}))},getNewOptionData:function(t,n){return{label:n,value:t,__isNew__:!0}}};function l_(e){var t=e.allowCreateWhileLoading,n=t===void 0?!1:t,r=e.createOptionPosition,i=r===void 0?"last":r,a=e.formatCreateLabel,s=a===void 0?gs.formatCreateLabel:a,u=e.isValidNewOption,o=u===void 0?gs.isValidNewOption:u,c=e.getNewOptionData,l=c===void 0?gs.getNewOptionData:c,f=e.onCreateOption,g=e.options,p=g===void 0?[]:g,w=e.onChange,S=tt(e,c_),b=S.getOptionValue,x=b===void 0?rd:b,v=S.getOptionLabel,C=v===void 0?nd:v,T=S.inputValue,_=S.isLoading,I=S.isMulti,h=S.value,E=S.name,D=O.useMemo(function(){return o(T,Si(h),p,{getOptionValue:x,getOptionLabel:C})?l(T,s(T)):void 0},[s,l,C,x,T,o,p,h]),$=O.useMemo(function(){return(n||!_)&&D?i==="first"?[D].concat(cn(p)):[].concat(cn(p),[D]):p},[n,i,_,D,p]),R=O.useCallback(function(H,ie){if(ie.action!=="select-option")return w(H,ie);var ee=Array.isArray(H)?H:[H];if(ee[ee.length-1]===D){if(f)f(T);else{var P=l(T,T),A={action:"create-option",name:E,option:P};w(Kn(I,[].concat(cn(Si(h)),[P]),P),A)}return}w(H,ie)},[l,T,I,E,D,f,w,h]);return V(V({},S),{},{options:$,onChange:R})}var d_=O.forwardRef(function(e,t){var n=gd(e),r=md(n),i=l_(r);return K.createElement(ms,z({ref:t},i))}),f_=d_,p_="[object Symbol]";function m_(e){return typeof e=="symbol"||sn(e)&&nn(e)==p_}var g_=/\s/;function h_(e){for(var t=e.length;t--&&g_.test(e.charAt(t)););return t}var v_=/^\s+/;function b_(e){return e&&e.slice(0,h_(e)+1).replace(v_,"")}var vd=NaN,y_=/^[-+]0x[0-9a-f]+$/i,S_=/^0b[01]+$/i,x_=/^0o[0-7]+$/i,I_=parseInt;function bd(e){if(typeof e=="number")return e;if(m_(e))return vd;if(yt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=yt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=b_(e);var n=S_.test(e);return n||x_.test(e)?I_(e.slice(2),n?2:8):y_.test(e)?vd:+e}var hs=function(){return et.Date.now()},__="Expected a function",w_=Math.max,C_=Math.min;function yd(e,t,n){var r,i,a,s,u,o,c=0,l=!1,f=!1,g=!0;if(typeof e!="function")throw new TypeError(__);t=bd(t)||0,yt(n)&&(l=!!n.leading,f="maxWait"in n,a=f?w_(bd(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g);function p(I){var h=r,E=i;return r=i=void 0,c=I,s=e.apply(E,h),s}function w(I){return c=I,u=setTimeout(x,t),l?p(I):s}function S(I){var h=I-o,E=I-c,D=t-h;return f?C_(D,a-E):D}function b(I){var h=I-o,E=I-c;return o===void 0||h>=t||h<0||f&&E>=a}function x(){var I=hs();if(b(I))return v(I);u=setTimeout(x,S(I))}function v(I){return u=void 0,g&&r?p(I):(r=i=void 0,s)}function C(){u!==void 0&&clearTimeout(u),c=0,r=o=i=u=void 0}function T(){return u===void 0?s:v(hs())}function _(){var I=hs(),h=b(I);if(r=arguments,i=this,o=I,h){if(u===void 0)return w(o);if(f)return clearTimeout(u),u=setTimeout(x,t),p(o)}return u===void 0&&(u=setTimeout(x,t)),s}return _.cancel=C,_.flush=T,_}var O_="Expected a function";function E_(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(O_);return yt(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),yd(e,t,{leading:r,maxWait:t,trailing:i})}function Ei(e,t,n){const r=O.useRef(e);return r.current=e,O.useCallback(yd(function(){return r.current.apply(this,arguments)},t,n),[t,n==null?void 0:n.leading,n==null?void 0:n.trailing,n==null?void 0:n.maxWait])}const T_=e=>Array.isArray(e)?e:e?[e]:[],D_=e=>{const{selectedOptions:t,isDisabled:n=!1,creatable:r=!1,components:i,placeholder:a,showDropdown:s=!0,noOptionsMessageText:u="None"}=e,c={...e,styles:{option:l=>({...l,color:"#000"}),container:(l,f)=>({...l,zIndex:f.isFocused?10:l.zIndex}),multiValueRemove:(l,f)=>({...l,color:f.isFocused?l.color:"#333333"})},defaultOptions:!0,isClearable:!0,value:t??null,className:Ge("react-select",e.className),classNamePrefix:"react-select",noOptionsMessage:()=>u,placeholder:n?"":a,components:{...i,IndicatorSeparator:()=>null,...(!s||n)&&{DropdownIndicator:()=>null},...n&&{MultiValueRemove:()=>null}}};return r?d.jsx(f_,{...c,isDisabled:n}):d.jsx(u_,{...c})},$_=e=>{const{values:t,isMulti:n,onSelect:r,creatable:i=!1,isValidNewOption:a,getNamedObject:s,loadOptions:u}=e,[o,c]=O.useState(!1),l=fp(),f=O.useMemo(()=>{if(n&&t)return t.map(v=>({object:v,value:v.id}));if(t!=null&&t.length)return{object:t[0],value:t[0].id}},[t,n]),g=v=>{const C=T_(v);r==null||r(C.map(T=>T.object))},p=i&&e.onCreate?async v=>{try{c(!0);const{value:C,item:T,message:_}=await e.onCreate(v),I={object:T,value:C};g(n?[...f??[],I]:I),c(!1),l.success(d.jsxs("span",{children:[_,": ",d.jsx("b",{children:v})]}))}catch(C){l.error(C)}}:void 0,w=i&&s?(v,C)=>({value:"",object:s("",C)}):void 0,S=i&&a?(v,C,T)=>a(v,T.map(_=>_.object)):void 0,x=Ei((v,C)=>{u(v).then(C)},100);return d.jsx(D_,{...e,loadOptions:x,isLoading:e.isLoading||o,onChange:g,selectedOptions:f,onCreateOption:p,getNewOptionData:w,isValidNewOption:S})};function Sd(e){return{value:e.id,object:e}}function M_(e){return P_(e)!==e}function P_(e){const t=O.useRef();return O.useEffect(()=>{t.current=e},[e]),t.current}const xd=e=>{const{error:t,message:n=d.jsx(Se.FormattedMessage,{id:"errors.header"})}=e;return d.jsx("div",{className:"ErrorMessage-container",children:d.jsxs(U.Alert,{variant:"danger",className:"ErrorMessage",children:[d.jsxs(U.Alert.Heading,{className:"ErrorMessage-header",children:[d.jsx(Ee,{icon:ce.faWarning}),n]}),d.jsx("div",{className:"ErrorMessage-content code",children:t})]})})},Id="LoadingIndicator",F_=`${Id}-message`,_d=he("LoadingIndicator",({message:e,inline:t=!1,small:n=!1,card:r=!1})=>{const a=Se.useIntl().formatMessage({id:"loading.generic"});return d.jsxs("div",{className:Ge(Id,{inline:t,small:n,"card-based":r}),children:[d.jsx(U.Spinner,{animation:"border",role:"status",size:n?"sm":void 0,children:d.jsx("span",{className:"sr-only",children:a})}),e!==""&&d.jsx("h4",{className:F_,children:e??a})]})}),Nt=he("HoverPopover",({enterDelay:e=200,leaveDelay:t=200,content:n,children:r,className:i,placement:a="top",popperConfig:s,onOpen:u,onClose:o,target:c})=>{const[l,f]=O.useState(!1),[g,p]=O.useState(null),w=O.useRef(),S=O.useRef(),b=O.useRef(`hover-popover-${Math.random().toString(36).slice(2)}`),x=O.useCallback(_=>{p(_)},[]),v=O.useCallback(()=>(c==null?void 0:c.current)??g,[c,g]),C=O.useCallback(()=>{window.clearTimeout(S.current),w.current=window.setTimeout(()=>{f(!0),u==null||u()},e)},[e,u]),T=O.useCallback(()=>{window.clearTimeout(w.current),S.current=window.setTimeout(()=>{f(!1),o==null||o()},t)},[t,o]);return O.useEffect(()=>()=>{window.clearTimeout(w.current),window.clearTimeout(S.current)},[]),d.jsxs(d.Fragment,{children:[d.jsx("div",{className:i,onMouseEnter:C,onMouseLeave:T,ref:x,children:r}),v()&&d.jsx(U.Overlay,{show:l,placement:a,target:v,container:document.body,popperConfig:s,children:d.jsx(U.Popover,{onMouseEnter:C,onMouseLeave:T,id:b.current,className:"hover-popover-content",children:n})})]})});he("WarningHoverPopover",({children:e,...t})=>d.jsx(Nt,{...t,className:"warning-hover-popover",children:d.jsx(Ee,{icon:ce.faExclamationTriangle})}));function wd(e){return e.title?e.title:e.files&&e.files.length>0?Fe.fileNameFromPath(e.files[0].path):e.folder?Fe.fileNameFromPath(e.folder.path):""}function Cd(e){return e.title?e.title:e.files&&e.files.length>0?Fe.fileNameFromPath(e.files[0].path):""}function N_(e){return e.files&&e.files.length>0?e.files[0].path:""}function Xn(e,t){t&&t.length>0&&e.push(...t)}const k_=(e,t,n)=>{if(!e.id)return"#";const r=new ae(X.Scenes,void 0),i=new Xt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),Xn(r.criteria,n),`/scenes?${r.makeQueryParameters()}`},A_=(e,t,n)=>{if(!e.id)return"#";const r=new ae(X.Images,void 0),i=new Xt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),Xn(r.criteria,n),`/images?${r.makeQueryParameters()}`},L_=(e,t,n)=>{if(!e.id)return"#";const r=new ae(X.Galleries,void 0),i=new Xt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),Xn(r.criteria,n),`/galleries?${r.makeQueryParameters()}`},j_=(e,t,n)=>{if(!e.id)return"#";const r=new ae(X.Groups,void 0),i=new Xt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),Xn(r.criteria,n),`/groups?${r.makeQueryParameters()}`},B_=e=>{if(!e.id)return"#";const t=new ae(X.SceneMarkers,void 0),n=new Xt;return n.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t.criteria.push(n),`/scenes/markers?${t.makeQueryParameters()}`},R_=e=>{if(!e.id)return"#";const t=new ae(X.Performers,void 0),n=new Gc;return n.value=`${e.country}`,t.criteria.push(n),`/performers?${t.makeQueryParameters()}`},V_=e=>{if(!e.id)return"#";const t=new ae(X.Scenes,void 0),n=new en;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/scenes?${t.makeQueryParameters()}`},q_=e=>{if(!e.id)return"#";const t=new ae(X.Images,void 0),n=new en;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/images?${t.makeQueryParameters()}`},G_=e=>{if(!e.id)return"#";const t=new ae(X.Galleries,void 0),n=new en;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/galleries?${t.makeQueryParameters()}`},U_=e=>{if(!e.id)return"#";const t=new ae(X.Groups,void 0),n=new en;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/groups?${t.makeQueryParameters()}`},z_=e=>{if(!e.id)return"#";const t=new ae(X.Performers,void 0),n=new en;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/performers?${t.makeQueryParameters()}`},H_=e=>{if(!e.id)return"#";const t=new ae(X.Studios,void 0),n=new $u;return n.value=[{id:e.id,label:e.name||`Studio ${e.id}`}],t.criteria.push(n),`/studios?${t.makeQueryParameters()}`},W_=e=>{if(!e.id)return"#";const t=new ae(X.Scenes,void 0),n=new Gn(zr);return n.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/scenes?${t.makeQueryParameters()}`},Y_=e=>`/tags/${e}`,Q_=e=>{if(!e.id)return"#";const t=new ae(X.Tags,void 0),n=new jr(Fu);return n.value={items:[{id:e.id,label:e.name||`Tag ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/tags?${t.makeQueryParameters()}`},K_=e=>{if(!e.id)return"#";const t=new ae(X.Tags,void 0),n=new jr(Pu);return n.value={items:[{id:e.id,label:e.name||`Tag ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/tags?${t.makeQueryParameters()}`};function kt(e,t){const n=new ae(e,void 0),r=new jr(bt);return r.value={items:[{id:t.id,label:t.name||`Tag ${t.id}`}],excluded:[],depth:0},n.criteria.push(r),n.makeQueryParameters()}const J_=e=>`/scenes?${kt(X.Scenes,e)}`,X_=e=>`/performers?${kt(X.Performers,e)}`,Z_=e=>`/studios?${kt(X.Studios,e)}`,ew=e=>`/scenes/markers?${kt(X.SceneMarkers,e)}`,tw=e=>`/galleries?${kt(X.Galleries,e)}`,nw=e=>`/images?${kt(X.Images,e)}`,rw=e=>`/groups?${kt(X.Groups,e)}`,iw=e=>!e.id||!e.scene?"#":`/scenes/${e.scene.id}?t=${e.seconds}`,aw=e=>{if(!e)return"#";const t=new ae(X.Scenes,void 0),n=new ka;return n.value={value:e},t.criteria.push(n),`/scenes?${t.makeQueryParameters()}`},sw=e=>{if(!e)return"#";const t=new ae(X.Images,void 0),n=new ka;return n.value={value:e},t.criteria.push(n),`/images?${t.makeQueryParameters()}`},ow=(e,t)=>{if(!e.id)return"#";const n=new ae(X.Images,void 0),r=new Ec;return r.value=[{id:e.id,label:wd(e)}],n.criteria.push(r),Xn(n.criteria,t),`/images?${n.makeQueryParameters()}`};function Ti(e,t){const n=new Ze(e);return n.modifier=y.Equals,n.value=t,n}const me={makePerformerScenesUrl:k_,makePerformerImagesUrl:A_,makePerformerGalleriesUrl:L_,makePerformerGroupsUrl:j_,makePerformerSceneMarkersUrl:B_,makePerformersCountryUrl:R_,makeStudioScenesUrl:V_,makeStudioImagesUrl:q_,makeStudioGalleriesUrl:G_,makeStudioGroupsUrl:U_,makeStudioPerformersUrl:z_,makeTagUrl:Y_,makeGroupUrl:e=>`/groups/${e}`,makeParentTagsUrl:Q_,makeChildTagsUrl:K_,makeTagSceneMarkersUrl:ew,makeTagScenesUrl:J_,makeTagPerformersUrl:X_,makeTagStudiosUrl:Z_,makeTagGalleriesUrl:tw,makeTagImagesUrl:nw,makeTagGroupsUrl:rw,makeScenesPHashMatchUrl:aw,makeSceneMarkerUrl:iw,makeImagesPHashMatchUrl:sw,makeGroupScenesUrl:W_,makeChildStudiosUrl:H_,makeGalleryImagesUrl:ow,makeDirectorScenesUrl:e=>{if(e.length===0)return"#";const t=new ae(X.Scenes,void 0);return t.criteria.push(Ti(re("director"),e)),`/scenes?${t.makeQueryParameters()}`},makePhotographerGalleriesUrl:e=>{if(e.length===0)return"#";const t=new ae(X.Galleries,void 0);return t.criteria.push(Ti(re("photographer"),e)),`/galleries?${t.makeQueryParameters()}`},makePhotographerImagesUrl:e=>{if(e.length===0)return"#";const t=new ae(X.Images,void 0);return t.criteria.push(Ti(re("photographer"),e)),`/images?${t.makeQueryParameters()}`},makeDirectorGroupsUrl:e=>{if(e.length===0)return"#";const t=new ae(X.Groups,void 0);return t.criteria.push(Ti(re("director"),e)),`/groups?${t.makeQueryParameters()}`},makeContainingGroupsUrl:e=>{if(!e.id)return"#";const t=new ae(X.Groups,void 0),n=new Gn(Nc);return n.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/groups?${t.makeQueryParameters()}`},makeSubGroupsUrl:e=>{if(!e.id)return"#";const t=new ae(X.Groups,void 0),n=new Gn(Fc);return n.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/groups?${t.makeQueryParameters()}`},makeSceneMarkersSceneUrl:e=>{if(!e.id)return"#";const t=new ae(X.SceneMarkers,void 0),n=new Eu;return n.value=[{id:e.id,label:Cd(e)}],t.criteria.push(n),`/scenes/markers?${t.makeQueryParameters()}`}},vs="TruncatedText",uw=`${vs}-tooltip`,Zn=he("TruncatedText",({text:e,className:t,lineCount:n=1,placement:r="bottom",delay:i=1e3})=>{const[a,s]=O.useState(!1),u=O.useRef(null),o=Ei(()=>s(!0),i);if(!e)return null;const c=g=>{(g.offsetWidth<g.scrollWidth||g.offsetHeight+10<g.scrollHeight)&&o()},l=()=>{o.cancel(),s(!1)},f=d.jsx(U.Overlay,{target:u.current,show:a,placement:r,children:d.jsx(U.Tooltip,{id:vs,className:uw,children:e})});return d.jsxs("div",{className:Ge(vs,t),style:{WebkitLineClamp:n},ref:u,onMouseEnter:g=>c(g.currentTarget),onFocus:g=>c(g.currentTarget),onMouseLeave:l,onBlur:l,children:[e,f]})}),cw=()=>window.matchMedia("only screen and (max-width: 576px)").matches,lw=()=>window.matchMedia("(pointer: coarse)").matches;function dw(e){return window.matchMedia(e).matches}const Od={isMobile:cw,isTouch:lw,matchesMediaQuery:dw};var At=[],fw=function(){return At.some(function(e){return e.activeTargets.length>0})},pw=function(){return At.some(function(e){return e.skippedTargets.length>0})},Ed="ResizeObserver loop completed with undelivered notifications.",mw=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:Ed}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=Ed),window.dispatchEvent(e)},er;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(er||(er={}));var Lt=function(e){return Object.freeze(e)},gw=function(){function e(t,n){this.inlineSize=t,this.blockSize=n,Lt(this)}return e}(),Td=function(){function e(t,n,r,i){return this.x=t,this.y=n,this.width=r,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Lt(this)}return e.prototype.toJSON=function(){var t=this,n=t.x,r=t.y,i=t.top,a=t.right,s=t.bottom,u=t.left,o=t.width,c=t.height;return{x:n,y:r,top:i,right:a,bottom:s,left:u,width:o,height:c}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),bs=function(e){return e instanceof SVGElement&&"getBBox"in e},Dd=function(e){if(bs(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e,a=i.offsetWidth,s=i.offsetHeight;return!(a||s||e.getClientRects().length)},$d=function(e){var t;if(e instanceof Element)return!0;var n=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},hw=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},tr=typeof window<"u"?window:{},Di=new WeakMap,Md=/auto|scroll/,vw=/^tb|vertical/,bw=/msie|trident/i.test(tr.navigator&&tr.navigator.userAgent),at=function(e){return parseFloat(e||"0")},mn=function(e,t,n){return e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=!1),new gw((n?t:e)||0,(n?e:t)||0)},Pd=Lt({devicePixelContentBoxSize:mn(),borderBoxSize:mn(),contentBoxSize:mn(),contentRect:new Td(0,0,0,0)}),Fd=function(e,t){if(t===void 0&&(t=!1),Di.has(e)&&!t)return Di.get(e);if(Dd(e))return Di.set(e,Pd),Pd;var n=getComputedStyle(e),r=bs(e)&&e.ownerSVGElement&&e.getBBox(),i=!bw&&n.boxSizing==="border-box",a=vw.test(n.writingMode||""),s=!r&&Md.test(n.overflowY||""),u=!r&&Md.test(n.overflowX||""),o=r?0:at(n.paddingTop),c=r?0:at(n.paddingRight),l=r?0:at(n.paddingBottom),f=r?0:at(n.paddingLeft),g=r?0:at(n.borderTopWidth),p=r?0:at(n.borderRightWidth),w=r?0:at(n.borderBottomWidth),S=r?0:at(n.borderLeftWidth),b=f+c,x=o+l,v=S+p,C=g+w,T=u?e.offsetHeight-C-e.clientHeight:0,_=s?e.offsetWidth-v-e.clientWidth:0,I=i?b+v:0,h=i?x+C:0,E=r?r.width:at(n.width)-I-_,D=r?r.height:at(n.height)-h-T,$=E+b+_+v,R=D+x+T+C,H=Lt({devicePixelContentBoxSize:mn(Math.round(E*devicePixelRatio),Math.round(D*devicePixelRatio),a),borderBoxSize:mn($,R,a),contentBoxSize:mn(E,D,a),contentRect:new Td(f,o,E,D)});return Di.set(e,H),H},Nd=function(e,t,n){var r=Fd(e,n),i=r.borderBoxSize,a=r.contentBoxSize,s=r.devicePixelContentBoxSize;switch(t){case er.DEVICE_PIXEL_CONTENT_BOX:return s;case er.BORDER_BOX:return i;default:return a}},yw=function(){function e(t){var n=Fd(t);this.target=t,this.contentRect=n.contentRect,this.borderBoxSize=Lt([n.borderBoxSize]),this.contentBoxSize=Lt([n.contentBoxSize]),this.devicePixelContentBoxSize=Lt([n.devicePixelContentBoxSize])}return e}(),kd=function(e){if(Dd(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},Sw=function(){var e=1/0,t=[];At.forEach(function(s){if(s.activeTargets.length!==0){var u=[];s.activeTargets.forEach(function(c){var l=new yw(c.target),f=kd(c.target);u.push(l),c.lastReportedSize=Nd(c.target,c.observedBox),f<e&&(e=f)}),t.push(function(){s.callback.call(s.observer,u,s.observer)}),s.activeTargets.splice(0,s.activeTargets.length)}});for(var n=0,r=t;n<r.length;n++){var i=r[n];i()}return e},Ad=function(e){At.forEach(function(n){n.activeTargets.splice(0,n.activeTargets.length),n.skippedTargets.splice(0,n.skippedTargets.length),n.observationTargets.forEach(function(i){i.isActive()&&(kd(i.target)>e?n.activeTargets.push(i):n.skippedTargets.push(i))})})},xw=function(){var e=0;for(Ad(e);fw();)e=Sw(),Ad(e);return pw()&&mw(),e>0},ys,Ld=[],Iw=function(){return Ld.splice(0).forEach(function(e){return e()})},_w=function(e){if(!ys){var t=0,n=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return Iw()}).observe(n,r),ys=function(){n.textContent="".concat(t?t--:t++)}}Ld.push(e),ys()},ww=function(e){_w(function(){requestAnimationFrame(e)})},$i=0,Cw=function(){return!!$i},Ow=250,Ew={attributes:!0,characterData:!0,childList:!0,subtree:!0},jd=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Bd=function(e){return e===void 0&&(e=0),Date.now()+e},Ss=!1,Tw=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var n=this;if(t===void 0&&(t=Ow),!Ss){Ss=!0;var r=Bd(t);ww(function(){var i=!1;try{i=xw()}finally{if(Ss=!1,t=r-Bd(),!Cw())return;i?n.run(1e3):t>0?n.run(t):n.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,n=function(){return t.observer&&t.observer.observe(document.body,Ew)};document.body?n():tr.addEventListener("DOMContentLoaded",n)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),jd.forEach(function(n){return tr.addEventListener(n,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),jd.forEach(function(n){return tr.removeEventListener(n,t.listener,!0)}),this.stopped=!0)},e}(),xs=new Tw,Rd=function(e){!$i&&e>0&&xs.start(),$i+=e,!$i&&xs.stop()},Dw=function(e){return!bs(e)&&!hw(e)&&getComputedStyle(e).display==="inline"},$w=function(){function e(t,n){this.target=t,this.observedBox=n||er.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=Nd(this.target,this.observedBox,!0);return Dw(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),Mw=function(){function e(t,n){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=n}return e}(),Mi=new WeakMap,Vd=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},Pi=function(){function e(){}return e.connect=function(t,n){var r=new Mw(t,n);Mi.set(t,r)},e.observe=function(t,n,r){var i=Mi.get(t),a=i.observationTargets.length===0;Vd(i.observationTargets,n)<0&&(a&&At.push(i),i.observationTargets.push(new $w(n,r&&r.box)),Rd(1),xs.schedule())},e.unobserve=function(t,n){var r=Mi.get(t),i=Vd(r.observationTargets,n),a=r.observationTargets.length===1;i>=0&&(a&&At.splice(At.indexOf(r),1),r.observationTargets.splice(i,1),Rd(-1))},e.disconnect=function(t){var n=this,r=Mi.get(t);r.observationTargets.slice().forEach(function(i){return n.unobserve(t,i.target)}),r.activeTargets.splice(0,r.activeTargets.length)},e}(),Pw=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Pi.connect(this,t)}return e.prototype.observe=function(t,n){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!$d(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Pi.observe(this,t,n)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!$d(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Pi.unobserve(this,t)},e.prototype.disconnect=function(){Pi.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();const Fw=O[typeof document<"u"&&document.createElement!==void 0?"useLayoutEffect":"useEffect"],Nw=e=>{const t=K.useRef(e);return K.useEffect(()=>{t.current=e}),t},kw=typeof window<"u"&&"ResizeObserver"in window?window.ResizeObserver:Pw;function Aw(){}function Lw(e,t){const n=Bw(),r=Nw(t);return Fw(()=>{let i=!1;const a=e&&"current"in e?e.current:e;if(!a)return Aw;function s(u,o){i||r.current(u,o)}return n.subscribe(a,s),()=>{i=!0,n.unsubscribe(a,s)}},[e,n,r]),n.observer}function jw(){let e=!1,t=[];const n=new Map,r=new kw((i,a)=>{t=t.concat(i);function s(){const u=new Set;for(let o=0;o<t.length;o++){if(u.has(t[o].target))continue;u.add(t[o].target);const c=n.get(t[o].target);c==null||c.forEach(l=>l(t[o],a))}t=[],e=!1}e||window.requestAnimationFrame(s),e=!0});return{observer:r,subscribe(i,a){var s;r.observe(i);const u=(s=n.get(i))!==null&&s!==void 0?s:[];u.push(a),n.set(i,u)},unsubscribe(i,a){var s;const u=(s=n.get(i))!==null&&s!==void 0?s:[];if(u.length===1){r.unobserve(i),n.delete(i);return}const o=u.indexOf(a);o!==-1&&u.splice(o,1),n.set(i,u)}}}let Is;const Bw=()=>Is||(Is=jw());var Rw={exports:{}};(function(e){(function(t,n,r){if(!t)return;for(var i={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},a={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},s={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},u={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},o,c=1;c<20;++c)i[111+c]="f"+c;for(c=0;c<=9;++c)i[c+96]=c.toString();function l(h,E,D){if(h.addEventListener){h.addEventListener(E,D,!1);return}h.attachEvent("on"+E,D)}function f(h){if(h.type=="keypress"){var E=String.fromCharCode(h.which);return h.shiftKey||(E=E.toLowerCase()),E}return i[h.which]?i[h.which]:a[h.which]?a[h.which]:String.fromCharCode(h.which).toLowerCase()}function g(h,E){return h.sort().join(",")===E.sort().join(",")}function p(h){var E=[];return h.shiftKey&&E.push("shift"),h.altKey&&E.push("alt"),h.ctrlKey&&E.push("ctrl"),h.metaKey&&E.push("meta"),E}function w(h){if(h.preventDefault){h.preventDefault();return}h.returnValue=!1}function S(h){if(h.stopPropagation){h.stopPropagation();return}h.cancelBubble=!0}function b(h){return h=="shift"||h=="ctrl"||h=="alt"||h=="meta"}function x(){if(!o){o={};for(var h in i)h>95&&h<112||i.hasOwnProperty(h)&&(o[i[h]]=h)}return o}function v(h,E,D){return D||(D=x()[h]?"keydown":"keypress"),D=="keypress"&&E.length&&(D="keydown"),D}function C(h){return h==="+"?["+"]:(h=h.replace(/\+{2}/g,"+plus"),h.split("+"))}function T(h,E){var D,$,R,H=[];for(D=C(h),R=0;R<D.length;++R)$=D[R],u[$]&&($=u[$]),E&&E!="keypress"&&s[$]&&($=s[$],H.push("shift")),b($)&&H.push($);return E=v($,H,E),{key:$,modifiers:H,action:E}}function _(h,E){return h===null||h===n?!1:h===E?!0:_(h.parentNode,E)}function I(h){var E=this;if(h=h||n,!(E instanceof I))return new I(h);E.target=h,E._callbacks={},E._directMap={};var D={},$,R=!1,H=!1,ie=!1;function ee(F){F=F||{};var j=!1,Y;for(Y in D){if(F[Y]){j=!0;continue}D[Y]=0}j||(ie=!1)}function P(F,j,Y,W,M,B){var N,J,Me=[],Be=Y.type;if(!E._callbacks[F])return[];for(Be=="keyup"&&b(F)&&(j=[F]),N=0;N<E._callbacks[F].length;++N)if(J=E._callbacks[F][N],!(!W&&J.seq&&D[J.seq]!=J.level)&&Be==J.action&&(Be=="keypress"&&!Y.metaKey&&!Y.ctrlKey||g(j,J.modifiers))){var mt=!W&&J.combo==M,Rt=W&&J.seq==W&&J.level==B;(mt||Rt)&&E._callbacks[F].splice(N,1),Me.push(J)}return Me}function A(F,j,Y,W){E.stopCallback(j,j.target||j.srcElement,Y,W)||F(j,Y)===!1&&(w(j),S(j))}E._handleKey=function(F,j,Y){var W=P(F,j,Y),M,B={},N=0,J=!1;for(M=0;M<W.length;++M)W[M].seq&&(N=Math.max(N,W[M].level));for(M=0;M<W.length;++M){if(W[M].seq){if(W[M].level!=N)continue;J=!0,B[W[M].seq]=1,A(W[M].callback,Y,W[M].combo,W[M].seq);continue}J||A(W[M].callback,Y,W[M].combo)}var Me=Y.type=="keypress"&&H;Y.type==ie&&!b(F)&&!Me&&ee(B),H=J&&Y.type=="keydown"};function L(F){typeof F.which!="number"&&(F.which=F.keyCode);var j=f(F);if(j){if(F.type=="keyup"&&R===j){R=!1;return}E.handleKey(j,p(F),F)}}function G(){clearTimeout($),$=setTimeout(ee,1e3)}function te(F,j,Y,W){D[F]=0;function M(Be){return function(){ie=Be,++D[F],G()}}function B(Be){A(Y,Be,F),W!=="keyup"&&(R=f(Be)),setTimeout(ee,10)}for(var N=0;N<j.length;++N){var J=N+1===j.length,Me=J?B:M(W||T(j[N+1]).action);ue(j[N],Me,W,F,N)}}function ue(F,j,Y,W,M){E._directMap[F+":"+Y]=j,F=F.replace(/\s+/g," ");var B=F.split(" "),N;if(B.length>1){te(F,B,j,Y);return}N=T(F,Y),E._callbacks[N.key]=E._callbacks[N.key]||[],P(N.key,N.modifiers,{type:N.action},W,F,M),E._callbacks[N.key][W?"unshift":"push"]({callback:j,modifiers:N.modifiers,action:N.action,seq:W,level:M,combo:F})}E._bindMultiple=function(F,j,Y){for(var W=0;W<F.length;++W)ue(F[W],j,Y)},l(h,"keypress",L),l(h,"keydown",L),l(h,"keyup",L)}I.prototype.bind=function(h,E,D){var $=this;return h=h instanceof Array?h:[h],$._bindMultiple.call($,h,E,D),$},I.prototype.unbind=function(h,E){var D=this;return D.bind.call(D,h,function(){},E)},I.prototype.trigger=function(h,E){var D=this;return D._directMap[h+":"+E]&&D._directMap[h+":"+E]({},h),D},I.prototype.reset=function(){var h=this;return h._callbacks={},h._directMap={},h},I.prototype.stopCallback=function(h,E){var D=this;if((" "+E.className+" ").indexOf(" mousetrap ")>-1||_(E,D.target))return!1;if("composedPath"in h&&typeof h.composedPath=="function"){var $=h.composedPath()[0];$!==h.target&&(E=$)}return E.tagName=="INPUT"||E.tagName=="SELECT"||E.tagName=="TEXTAREA"||E.isContentEditable},I.prototype.handleKey=function(){var h=this;return h._handleKey.apply(h,arguments)},I.addKeycodes=function(h){for(var E in h)h.hasOwnProperty(E)&&(i[E]=h[E]);o=null},I.init=function(){var h=I(n);for(var E in h)E.charAt(0)!=="_"&&(I[E]=function(D){return function(){return h[D].apply(h,arguments)}}(E))},I.init(),t.Mousetrap=I,e.exports&&(e.exports=I)})(typeof window<"u"?window:null,typeof window<"u"?document:null)})(Rw),O.createContext(null);const Vw=O.createContext(null),qw={selectable:!1,selectedIds:new Set,getSelected:()=>[],onSelectChange:()=>{},onSelectAll:()=>{},onSelectNone:()=>{},onInvertSelection:()=>{},items:[],hasSelection:!1,selectedItems:[]};function Gw(){const e=O.useContext(Vw);return e===null?qw:e}O.createContext(null);var qd=(e=>(e[e.BEFORE=0]="BEFORE",e[e.AFTER=1]="AFTER",e))(qd||{});function Uw(e){const{selectedIds:t}=Gw(),[n,r]=O.useState(!1),[i,a]=O.useState(!1),[s,u]=O.useState(),o=e.onSelectedChanged&&e.selecting,c=!!e.objectId&&e.onMove&&n,l=o||c;function f(v){if(!l){v.preventDefault();return}if(!n&&e.selecting)v.dataTransfer.setData("text/plain",""),v.dataTransfer.effectAllowed="copy",v.stopPropagation();else if(n&&e.objectId){if(t.size>1&&t.has(e.objectId)){const C=Array.from(t.values()).join(",");v.dataTransfer.setData("text/plain",C)}else a(!0),v.dataTransfer.setData("text/plain",e.objectId);v.dataTransfer.effectAllowed="move",v.stopPropagation()}}function g(v){const C=v.nativeEvent.offsetX<v.currentTarget.clientWidth/2;C&&s!==0?u(0):!C&&s!==1&&u(1)}function p(v){const C=v,T=!1;if(C.dataTransfer.effectAllowed==="copy"){if(!e.onSelectedChanged)return;e.selecting&&!e.selected&&e.onSelectedChanged(!0,T),C.dataTransfer.dropEffect="copy",C.preventDefault()}else C.dataTransfer.effectAllowed==="move"&&!i?(g(v),C.dataTransfer.dropEffect="move",C.preventDefault()):C.dataTransfer.dropEffect="none"}function w(v){v.currentTarget.contains(v.relatedTarget)||u(void 0)}function S(v){v.dataTransfer.effectAllowed!=="move"||i||(g(v),v.preventDefault())}function b(){u(void 0),a(!1)}function x(v){const C=v;if(C.dataTransfer.effectAllowed==="copy"||!e.onMove||!e.objectId)return;const T=C.dataTransfer.getData("text/plain").split(","),_=e.objectId,I=s===1;e.onMove(T,_,I),b()}return{inHandle:n,setInHandle:r,moveTarget:s,dragProps:{draggable:l||void 0,onDragStart:f,onDragEnter:p,onDragLeave:w,onDragOver:S,onDragEnd:b,onDrop:x}}}const zw=e=>d.jsx("a",{target:"_blank",rel:"noopener noreferrer",...e}),Hw=(e,t)=>{const i=e-30,a=Math.ceil(i/t);return i/a-10},Ww=(e=20)=>{const t=O.useRef(null),[n,r]=O.useState({width:0,height:0}),i=Ei(a=>{const{inlineSize:s,blockSize:u}=a.contentBoxSize[0];Math.abs(n.width-s)>e&&r({width:s,height:u})},50);return Lw(t,i),[t,n]};function Yw(e,t,n){return O.useMemo(()=>{if(Od.isMobile()||t>=n.length)return;if(!e)return n[t];const i=n[t];return Hw(e,i)},[e,t,n])}const Qw=({selected:e=!1,onSelectedChanged:t})=>{let n=!1;return d.jsx(U.Form.Control,{type:"checkbox",className:"card-check mousetrap",checked:e,onChange:()=>t(!e,n),onClick:r=>{n=r.shiftKey,r.stopPropagation()}})},Kw=({setInHandle:e})=>{function t(){e(!0)}function n(){e(!1)}return d.jsx("span",{onMouseEnter:t,onMouseLeave:n,children:d.jsx(Ee,{className:"card-drag-handle",icon:ce.faGripLines})})},Jw=({children:e})=>d.jsx("div",{className:"card-controls",children:e}),Xw=({dragSide:e})=>e===void 0?null:d.jsx("div",{className:`move-target move-target-${e===qd.BEFORE?"before":"after"}`});function Gd(e){const{url:t,linkClassName:n,onClick:r,children:i}=e;return/^https?:\/\//i.test(t)?d.jsx(zw,{href:t,className:n,onClick:r,children:i}):d.jsx(Ke.Link,{to:t,className:n,onClick:r,children:i})}const Ud=he("GridCard",e=>{const{setInHandle:t,moveTarget:n,dragProps:r}=Uw({selecting:e.selecting||!1,selected:e.selected||!1,onSelectedChanged:e.onSelectedChanged,objectId:e.objectId,onMove:e.onMove});function i(u){const{shiftKey:o}=u;e.onSelectedChanged&&e.selecting&&(e.onSelectedChanged(!e.selected,o),u.preventDefault(),u.stopPropagation())}function a(){if(e.interactiveHeatmap)return d.jsx("img",{loading:"lazy",src:e.interactiveHeatmap,alt:"interactive heatmap",className:"interactive-heatmap"})}function s(){if(e.resumeTime&&e.duration&&e.duration>e.resumeTime){const u=100/e.duration*e.resumeTime,o=u+"%";return d.jsx("div",{title:Math.round(u)+"%",className:"progress-bar",children:d.jsx("div",{style:{width:o},className:"progress-indicator"})})}}return d.jsxs(U.Card,{className:Ge(e.className,"grid-card"),onClick:i,...r,style:e.width&&!Od.isMobile()?{width:`${e.width}px`}:{},children:[n!==void 0&&d.jsx(Xw,{dragSide:n}),d.jsxs(Jw,{children:[e.onSelectedChanged&&d.jsx(Qw,{selected:e.selected,onSelectedChanged:e.onSelectedChanged}),!!e.objectId&&e.onMove&&d.jsx(Kw,{setInHandle:t})]}),d.jsxs("div",{className:Ge(e.thumbnailSectionClassName,"thumbnail-section"),children:[d.jsx(Gd,{url:e.url,linkClassName:e.linkClassName,onClick:i,children:e.image}),e.overlays,s()]}),a(),d.jsxs("div",{className:"card-section",children:[d.jsx(Gd,{url:e.url,onClick:i,children:d.jsxs("h5",{className:"card-section-title flex-aligned",children:[e.pretitleIcon,d.jsx(Zn,{text:e.title,lineCount:2})]})}),e.details]}),e.popovers]})}),Zw=({count:e})=>{const{configuration:t}=ht();if(!((t==null?void 0:t.ui.abbreviateCounters)??!1))return d.jsx("span",{children:e});const r=Fe.abbreviateCounter(e);return d.jsxs("span",{children:[d.jsx(Se.FormattedNumber,{value:r.size,maximumFractionDigits:r.digits}),r.unit]})},jt=({className:e,url:t,type:n,count:r,showZero:i=!0})=>{const a=Se.useIntl();if(!i&&r===0)return null;function s(){switch(n){case"scene":return ce.faPlayCircle;case"image":return ce.faImage;case"gallery":return ce.faImages;case"marker":return ce.faMapMarkerAlt;case"group":case"sub_group":return ce.faFilm;case"performer":return ce.faUser;case"studio":return ce.faVideo}}function u(){switch(n){case"scene":return{one:"scene",other:"scenes"};case"image":return{one:"image",other:"images"};case"gallery":return{one:"gallery",other:"galleries"};case"marker":return{one:"marker",other:"markers"};case"group":return{one:"group",other:"groups"};case"sub_group":return{one:"sub_group",other:"sub_groups"};case"performer":return{one:"performer",other:"performers"};case"studio":return{one:"studio",other:"studios"}}}function o(){const c=a.formatPlural(r),l=u(),f=a.formatMessage({id:l[c]||l.other});return`${r} ${f}`}return d.jsx(U.OverlayTrigger,{overlay:d.jsx(U.Tooltip,{id:`${n}-count-tooltip`,children:o()}),placement:"bottom",children:d.jsx(Ke.Link,{className:e,to:t,children:d.jsxs(U.Button,{className:"minimal",children:[d.jsx(Ee,{icon:s()}),d.jsx(Zw,{count:r})]})})})},eC=he("TagCard.Popovers",({tag:e})=>d.jsxs(d.Fragment,{children:[d.jsx("hr",{}),d.jsxs(U.ButtonGroup,{className:"card-popovers",children:[d.jsx(jt,{className:"scene-count",type:"scene",count:e.scene_count,url:me.makeTagScenesUrl(e),showZero:!1}),d.jsx(jt,{className:"image-count",type:"image",count:e.image_count,url:me.makeTagImagesUrl(e),showZero:!1}),d.jsx(jt,{className:"gallery-count",type:"gallery",count:e.gallery_count,url:me.makeTagGalleriesUrl(e),showZero:!1}),d.jsx(jt,{className:"group-count",type:"group",count:e.group_count,url:me.makeTagGroupsUrl(e),showZero:!1}),d.jsx(jt,{className:"marker-count",type:"marker",count:e.scene_marker_count,url:me.makeTagSceneMarkersUrl(e),showZero:!1}),d.jsx(jt,{className:"performer-count",type:"performer",count:e.performer_count,url:me.makeTagPerformersUrl(e),showZero:!1}),d.jsx(jt,{className:"studio-count",type:"studio",count:e.studio_count,url:me.makeTagStudiosUrl(e),showZero:!1})]})]})),tC=he("TagCard.Overlays",({tag:e})=>{const[t]=ag();function n(){return d.jsx(Ke.Link,{to:"",onClick:i=>i.preventDefault(),children:d.jsx(U.Button,{className:Ge("minimal","mousetrap","favorite-button",e.favorite?"favorite":"not-favorite"),onClick:()=>r(!e.favorite),children:d.jsx(Ee,{icon:ce.faHeart,size:"2x"})})})}function r(i){e.id&&t({variables:{input:{id:e.id,favorite:i}}})}return d.jsx(d.Fragment,{children:n()})}),nC=he("TagCard.Details",({tag:e})=>{function t(){if(e.description)return d.jsx(Zn,{className:"tag-description",text:e.description,lineCount:3})}function n(){if(e.parents.length===1){const i=e.parents[0];return d.jsx("div",{className:"tag-parent-tags",children:d.jsx(Se.FormattedMessage,{id:"sub_tag_of",values:{parent:d.jsx(Ke.Link,{to:`/tags/${i.id}`,children:i.name})}})})}if(e.parents.length>1)return d.jsx("div",{className:"tag-parent-tags",children:d.jsx(Se.FormattedMessage,{id:"sub_tag_of",values:{parent:d.jsxs(Ke.Link,{to:me.makeParentTagsUrl(e),children:[e.parents.length," ",d.jsx(Se.FormattedMessage,{id:"countables.tags",values:{count:e.parents.length}})]})}})})}function r(){if(e.children.length>0)return d.jsx("div",{className:"tag-sub-tags",children:d.jsx(Se.FormattedMessage,{id:"parent_of",values:{children:d.jsxs(Ke.Link,{to:me.makeChildTagsUrl(e),children:[e.children.length," ",d.jsx(Se.FormattedMessage,{id:"countables.tags",values:{count:e.children.length}})]})}})})}return d.jsxs(d.Fragment,{children:[t(),n(),r()]})}),rC=he("TagCard.Image",({tag:e})=>d.jsx("img",{loading:"lazy",className:"tag-card-image",alt:e.name,src:e.image_path??""})),iC=he("TagCard.Title",({tag:e})=>d.jsx(d.Fragment,{children:e.name??""})),aC=he("TagCard",e=>{const{tag:t,cardWidth:n,zoomIndex:r,selecting:i,selected:a,onSelectedChanged:s}=e;return d.jsx(Ud,{className:`tag-card zoom-${r}`,url:`/tags/${t.id}`,width:n,title:d.jsx(iC,{...e}),linkClassName:"tag-card-header",image:d.jsx(rC,{...e}),details:d.jsx(nC,{...e}),overlays:d.jsx(tC,{...e}),popovers:d.jsx(eC,{...e}),selected:a,selecting:i,onSelectedChanged:s})}),sC=({id:e})=>{const{data:t,loading:n,error:r}=eg(e);if(n)return d.jsx("div",{className:"tag-popover-card-placeholder",children:d.jsx(_d,{card:!0,message:""})});if(r)return d.jsx(xd,{error:r.message});if(!(t!=null&&t.findTag))return d.jsx(xd,{error:`No tag found with id ${e}.`});const i=t.findTag;return d.jsx("div",{className:"tag-popover-card",children:d.jsx(aC,{tag:i,zoomIndex:0})})},_s=({id:e,hide:t,children:n,placement:r="top",target:i})=>{const{configuration:a}=ht(),s=(a==null?void 0:a.ui.showTagCardOnHover)??!0;return t||!s?d.jsx(d.Fragment,{children:n}):d.jsx(Nt,{target:i,placement:r,enterDelay:500,leaveDelay:100,content:d.jsx(sC,{id:e}),children:n})};function oC(e,t,n,r){if(!e)return t;e=e.toLowerCase();const i={};function a(v,C){i[v.id]={...i[v.id],...C}}function s(v){var _,I;const C=(_=i[v.id])==null?void 0:_.aliases;if(C!==void 0)return C;if(!r)return[];const T=((I=r(v))==null?void 0:I.map(h=>h.trim().toLowerCase()))??[];return a(v,{aliases:T}),T}function u(v){var I;const C=(I=i[v.id])==null?void 0:I.aliasMatch;if(C!==void 0)return C;const _=s(v).some(h=>h===e);return a(v,{aliasMatch:_}),_}function o(v){var I;const C=(I=i[v.id])==null?void 0:I.aliasStartsWith;if(C!==void 0)return C;const _=s(v).some(h=>h.startsWith(e));return a(v,{aliasStartsWith:_}),_}function c(v){return v.trim().replace(/\s\s+/g," ").toLowerCase().split(" ")}function l(v){return c(n(v))}function f(v){return s(v).flatMap(T=>c(T))}function g(v){var I;const C=(I=i[v.id])==null?void 0:I.wordIndex;if(C!==void 0)return C;const _=l(v).indexOf(e);return a(v,{wordIndex:_}),_}function p(v){var I;const C=(I=i[v.id])==null?void 0:I.aliasWordIndex;if(C!==void 0)return C;const _=f(v).indexOf(e);return a(v,{aliasWordIndex:_}),_}function w(v){var I;const C=(I=i[v.id])==null?void 0:I.wordStartsWithIndex;if(C!==void 0)return C;const _=l(v).findIndex(h=>h.startsWith(e));return a(v,{wordStartsWithIndex:_}),_}function S(v){var I;const C=(I=i[v.id])==null?void 0:I.aliasWordStartsWithIndex;if(C!==void 0)return C;const _=f(v).findIndex(h=>h.startsWith(e));return a(v,{aliasWordStartsWithIndex:_}),_}function b(v){var I;const C=(I=i[v.id])==null?void 0:I.aliasIncludesIndex;if(C!==void 0)return C;const _=s(v).findIndex(h=>h.includes(e));return a(v,{aliasIncludesIndex:_}),_}function x(v,C){const T=n(v).trim().toLowerCase(),_=n(C).trim().toLowerCase(),I=u(v),h=u(C);if(T===e&&_!==e)return-1;if(T!==e&&_===e)return 1;if(I&&!h)return-1;if(!I&&h)return 1;if(T.startsWith(e)&&!_.startsWith(e))return-1;if(!T.startsWith(e)&&_.startsWith(e))return 1;const E=o(v),D=o(C);if(E&&!D)return-1;if(!E&&D)return 1;if(!e.includes(" ")){{const ee=g(v),P=g(C);if(ee!==-1&&P===-1)return-1;if(ee===-1&&P!==-1)return 1;if(ee!==-1&&P!==-1)return ee===P?T.localeCompare(_):ee-P;const A=p(v),L=p(C);if(A!==-1&&L===-1)return-1;if(A===-1&&L!==-1)return 1;if(A!==-1&&L!==-1)return A===L?T.localeCompare(_):A-L}{const ee=w(v),P=w(C);if(ee!==-1&&P===-1)return-1;if(ee===-1&&P!==-1)return 1;if(ee!==-1&&P!==-1)return ee===P?T.localeCompare(_):ee-P;const A=S(v),L=S(C);if(A!==-1&&L===-1)return-1;if(A===-1&&L!==-1)return 1;if(A!==-1&&L!==-1)return A===L?T.localeCompare(_):A-L}}const $=T.indexOf(e),R=_.indexOf(e);if($!==-1&&R===-1)return-1;if($===-1&&R!==-1)return 1;if($!==-1&&R!==-1)return $===R?T.localeCompare(_):$-R;const H=b(v),ie=b(C);return H!==-1&&ie===-1?-1:H===-1&&ie!==-1?1:H!==-1&&ie!==-1?H===ie?T.localeCompare(_):H-ie:T.localeCompare(_)}return t.slice().sort(x)}const uC=/^[0-9a-f]{8}-[0-9a-f]{4}-[47][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function cC(e){return uC.test(e.trim())}function lC(e,t){const n=e.makeCriterion("stash_id_endpoint");n.modifier=y.Equals,n.value={endpoint:"",stashID:t.trim()},e.criteria=[n]}function dC(e,t){return oC(e,t,n=>n.name,n=>n.aliases)}const fC=ho("TagSelect.sort",dC),pC=he("TagSelect",e=>{const[t]=ig(),{configuration:n}=ht(),r=Se.useIntl(),i=(n==null?void 0:n.ui.maxOptionsShown)??og,a=!(n!=null&&n.interface.disableDropdownCreate.tag),s=O.useMemo(()=>e.excludeIds??[],[e.excludeIds]);function u(S){return!s.includes(S.id.toString())}async function o(S){const b=new ae(X.Tags);if(b.currentPage=1,b.itemsPerPage=i,b.sortBy="name",b.sortDirection=qe.Asc,cC(S)){lC(b,S);const T=(await au(b)).data.findTags.tags.filter(u);if(T.length>0)return T.map(Sd);b.criteria=[]}b.searchTerm=S;const v=(await au(b)).data.findTags.tags.filter(u);return fC(S,v).map(Sd)}const c=S=>{var _;let b=S;const{object:x}=S.data,{name:v}=x,{inputValue:C}=S.selectProps;let T="";return v.toLowerCase().includes(C.toLowerCase())||(T=(_=x.aliases)==null?void 0:_.find(I=>I.toLowerCase().includes(C.toLowerCase()))),b={...S,children:d.jsx(_s,{id:x.id,placement:e.hoverPlacement??"right",children:d.jsxs("span",{className:"react-select-image-option",children:[d.jsx("span",{children:v}),T&&d.jsxs("span",{className:"alias",children:[" (",T,")"]})]})})},d.jsx(Bi.components.Option,{...b})},l=S=>{let b=S;const{object:x}=S.data;return b={...S,children:d.jsx(_s,{id:x.id,placement:e.hoverPlacementLabel??"top",children:d.jsx("span",{children:x.name})})},d.jsx(Bi.components.MultiValueLabel,{...b})},f=S=>{let b=S;const{object:x}=S.data;return b={...S,children:d.jsx(d.Fragment,{children:x.name})},d.jsx(Bi.components.SingleValue,{...b})},g=async S=>{const b=await t({variables:{input:{name:S}}});return{value:b.data.tagCreate.id,item:b.data.tagCreate,message:"Created tag"}},p=(S,b)=>({id:S,name:b,aliases:[],stash_ids:[]}),w=(S,b)=>!(!S||b.some(x=>{var v;return x.name.toLowerCase()===S.toLowerCase()||((v=x.aliases)==null?void 0:v.some(C=>C.toLowerCase()===S.toLowerCase()))}));return d.jsx($_,{...e,className:Ge("tag-select",{"tag-select-active":e.active},e.className),loadOptions:o,getNamedObject:p,isValidNewOption:w,components:{Option:c,MultiValueLabel:l,SingleValue:f},isMulti:e.isMulti??!1,creatable:e.creatable??a,onCreate:g,placeholder:e.noSelectionString??r.formatMessage({id:"actions.select_entity"},{entityType:r.formatMessage({id:e.isMulti?"tags":"tag"})}),closeMenuOnSelect:!e.isMulti})}),mC=he("TagIDSelect",e=>{const{ids:t,onSelect:n}=e,[r,i]=O.useState([]),a=M_(t);function s(u){i(u),n==null||n(u)}return O.useEffect(()=>{async function u(l){const f=await tg(l),{tags:g}=f.data.findTags;return g}if(!a)return;if(!t||(t==null?void 0:t.length)===0){i([]);return}if(r.filter(l=>t.includes(l.id.toString())).length===t.length)return;(async()=>{const f=[...await u(t)];f.sort((g,p)=>{const w=g.sort_name||g.name,S=p.sort_name||p.name;return w&&S?w.localeCompare(S):0}),i(f)})()},[t,a,r]),d.jsx(pC,{...e,values:r,onSelect:s})}),gC=(e,t)=>{const{data:n,loading:r,error:i}=sg(e),a=O.useRef(void 0);r||(a.current=n);const s=r?a.current:n,u=i&&t?[]:s==null?void 0:s.directory.directories,o=s==null?void 0:s.directory.parent;return{directories:u,parent:o,loading:r,error:i}},hC=he("FolderSelect",({currentDirectory:e,onChangeDirectory:t,defaultDirectories:n=[],appendButton:r,collapsible:i=!1,quotePath:a=!1,hideError:s=!1})=>{const u=Se.useIntl(),[o,c]=O.useState(!1),[l,f]=O.useState(e),g=a?Fe.stripQuotes(l):l,{directories:p,parent:w,error:S,loading:b}=gC(g,s),x=(e?p:n)??n,v=Ei(f,250);function C(h){const E=a&&h.includes(" ")?Fe.addQuotes(h):h;t(E),f(E)}function T(h){t(h),v(h)}function _(){n!=null&&n.includes(e)?C(""):w&&C(w)}const I=e&&w&&d.jsx("li",{className:"folder-list-parent folder-list-item",children:d.jsx(U.Button,{variant:"link",onClick:()=>_(),disabled:b,children:d.jsx("span",{children:d.jsx(Se.FormattedMessage,{id:"setup.folder.up_dir"})})})});return d.jsxs(d.Fragment,{children:[d.jsxs(U.InputGroup,{children:[d.jsx(U.Form.Control,{className:"btn-secondary",placeholder:u.formatMessage({id:"setup.folder.file_path"}),onChange:h=>{T(h.currentTarget.value)},value:e,spellCheck:!1}),r&&d.jsx(U.InputGroup.Append,{children:r}),i&&d.jsx(U.InputGroup.Append,{children:d.jsx(U.Button,{variant:"secondary",onClick:()=>c(!o),children:d.jsx(Ee,{icon:ce.faEllipsis})})}),(b||S)&&d.jsx(U.InputGroup.Append,{className:"align-self-center",children:b?d.jsx(_d,{inline:!0,small:!0,message:""}):!s&&d.jsx(Ee,{icon:ce.faTimes,color:"red",className:"ml-3"})})]}),!s&&S!==void 0&&d.jsxs("h5",{className:"mt-4 text-break",children:["Error: ",S.message]}),d.jsx(U.Collapse,{in:!i||o,children:d.jsxs("ul",{className:"folder-list",children:[I,x.map(h=>d.jsx("li",{className:"folder-list-item",children:d.jsx(U.Button,{variant:"link",onClick:()=>C(h),disabled:b,children:d.jsx("span",{children:h})})},h))]})})]})});function vC(e){var t,n;return e.title?e.title:(t=e.primary_tag)!=null&&t.name?(n=e.primary_tag)==null?void 0:n.name:""}const bC=({link:e,sortName:t,className:n,children:r})=>d.jsx(U.Badge,{"data-name":n,"data-sort-name":t,className:Ge("tag-item tag-link",n),variant:"secondary",children:d.jsx(Ke.Link,{to:e,children:r})}),Fi=({link:e,className:t,children:n})=>d.jsx(U.Badge,{className:Ge("tag-item tag-link",t),variant:"secondary",children:d.jsx(Ke.Link,{to:e,children:n})}),yC=({performer:e,linkType:t="scene",className:n})=>{const r=O.useMemo(()=>{switch(t){case"gallery":return me.makePerformerGalleriesUrl(e);case"image":return me.makePerformerImagesUrl(e);case"scene_marker":return me.makePerformerSceneMarkersUrl(e);default:return me.makePerformerScenesUrl(e)}},[e,t]),i=e.name||"";return d.jsxs(Fi,{link:r,className:n,children:[d.jsx("span",{children:i}),e.disambiguation&&d.jsx("span",{className:"performer-disambiguation",children:` (${e.disambiguation})`})]})},SC=({group:e,description:t,linkType:n="scene",className:r})=>{const i=O.useMemo(()=>{switch(n){case"scene":return me.makeGroupScenesUrl(e);case"sub_group":return me.makeSubGroupsUrl(e);case"details":return me.makeGroupUrl(e.id??"")}},[e,n]),a=e.name||"";return d.jsxs(Fi,{link:i,className:r,children:[a," ",t&&d.jsxs("span",{className:"group-description",children:["(",t,")"]})]})},xC=({marker:e,linkType:t="scene",className:n})=>{const r=O.useMemo(()=>{switch(t){case"scene":return me.makeSceneMarkerUrl(e)}},[e,t]),i=`${vC(e)} - ${Fe.secondsToTimestamp(e.seconds||0)}`;return d.jsx(Fi,{link:r,className:n,children:i})},IC=({gallery:e,linkType:t="details",className:n})=>{const r=O.useMemo(()=>{switch(t){case"details":return`/galleries/${e.id}`}},[e,t]),i=wd(e);return d.jsx(Fi,{link:r,className:n,children:i})},_C=he("TagLink",({tag:e,linkType:t="scene",className:n,hoverPlacement:r,showHierarchyIcon:i=!1,hierarchyTooltipID:a})=>{const s=O.useMemo(()=>{switch(t){case"scene":return me.makeTagScenesUrl(e);case"performer":return me.makeTagPerformersUrl(e);case"studio":return me.makeTagStudiosUrl(e);case"gallery":return me.makeTagGalleriesUrl(e);case"image":return me.makeTagImagesUrl(e);case"group":return me.makeTagGroupsUrl(e);case"scene_marker":return me.makeTagSceneMarkersUrl(e);case"details":return me.makeTagUrl(e.id??"")}},[e,t]),u=e.name||"",o=O.useMemo(()=>a?d.jsx(U.Tooltip,{id:"tag-hierarchy-tooltip",children:d.jsx(Se.FormattedMessage,{id:a})}):d.jsx(d.Fragment,{}),[a]);return d.jsx(bC,{sortName:e.sort_name||u,link:s,className:n,children:d.jsxs(_s,{id:e.id??"",placement:r,children:[u,i&&d.jsx(U.OverlayTrigger,{placement:"top",overlay:o,children:d.jsxs("span",{className:"icon-wrapper",children:[d.jsx("span",{className:"vertical-line",children:"|"}),d.jsx(Ee,{icon:ce.faFolderTree,className:"tag-icon"})]})})]})})});function wC(e){const t=e.slice();return t.sort((n,r)=>{if(n.gender===r.gender)return(n.name??"").localeCompare(r.name??"");const i=[Ie.Female,Ie.TransgenderFemale,Ie.Male,Ie.TransgenderMale,Ie.Intersex,Ie.NonBinary],a=n.gender?i.indexOf(n.gender):i.length,s=r.gender?i.indexOf(r.gender):i.length;return a-s}),t}const CC=({performers:e,linkType:t})=>{const r=wC(e).map(i=>d.jsxs("div",{className:"performer-tag-container row",children:[d.jsx(Ke.Link,{to:`/performers/${i.id}`,className:"performer-tag col m-auto zoom-2",children:d.jsx("img",{className:"image-thumbnail",alt:i.name??"",src:i.image_path??""})}),d.jsx(yC,{performer:i,className:"d-block",linkType:t},i.id)]},i.id));return d.jsx(Nt,{className:"performer-count",placement:"bottom",content:r,children:d.jsxs(U.Button,{className:"minimal",children:[d.jsx(Ee,{icon:ce.faUser}),d.jsx("span",{children:e.length})]})})},OC=({rating:e})=>{const{configuration:t}=ht(),n=(t==null?void 0:t.ui.ratingSystemOptions)??Au,r=n.type===Nu.Stars&&n.starPrecision===ku.Full,i=Br(e??void 0,n);return e?d.jsxs("div",{className:r?`rating-banner rating-${i}`:`rating-banner rating-100-${Math.trunc(e/5)}`,"data-rating100":e,"data-rating-system":n.type,style:{"--rating-100":e},children:[d.jsx(Se.FormattedMessage,{id:"rating"}),": ",i]}):null};var zd={exports:{}},nr;typeof window<"u"?nr=window:typeof pr<"u"?nr=pr:typeof self<"u"?nr=self:nr={};var EC=nr;const TC=ff(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));var Hd=typeof pr<"u"?pr:typeof window<"u"?window:{},DC=TC,rr;typeof document<"u"?rr=document:(rr=Hd["__GLOBAL_DOCUMENT_CACHE@4"],rr||(rr=Hd["__GLOBAL_DOCUMENT_CACHE@4"]=DC));var $C=rr,Wd=$C,ws=Object.create||function(){function e(){}return function(t){if(arguments.length!==1)throw new Error("Object.create shim only accepts one parameter.");return e.prototype=t,new e}}();function We(e,t){this.name="ParsingError",this.code=e.code,this.message=t||e.message}We.prototype=ws(Error.prototype),We.prototype.constructor=We,We.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}};function Cs(e){function t(r,i,a,s){return(r|0)*3600+(i|0)*60+(a|0)+(s|0)/1e3}var n=e.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);return n?n[3]?t(n[1],n[2],n[3].replace(":",""),n[4]):n[1]>59?t(n[1],n[2],0,n[4]):t(0,n[1],n[2],n[4]):null}function ir(){this.values=ws(null)}ir.prototype={set:function(e,t){!this.get(e)&&t!==""&&(this.values[e]=t)},get:function(e,t,n){return n?this.has(e)?this.values[e]:t[n]:this.has(e)?this.values[e]:t},has:function(e){return e in this.values},alt:function(e,t,n){for(var r=0;r<n.length;++r)if(t===n[r]){this.set(e,t);break}},integer:function(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))},percent:function(e,t){return t.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&(t=parseFloat(t),t>=0&&t<=100)?(this.set(e,t),!0):!1}};function ar(e,t,n,r){var i=r?e.split(r):[e];for(var a in i)if(typeof i[a]=="string"){var s=i[a].split(n);if(s.length===2){var u=s[0].trim(),o=s[1].trim();t(u,o)}}}function MC(e,t,n){var r=e;function i(){var u=Cs(e);if(u===null)throw new We(We.Errors.BadTimeStamp,"Malformed timestamp: "+r);return e=e.replace(/^[^\sa-zA-Z-]+/,""),u}function a(u,o){var c=new ir;ar(u,function(l,f){switch(l){case"region":for(var g=n.length-1;g>=0;g--)if(n[g].id===f){c.set(l,n[g].region);break}break;case"vertical":c.alt(l,f,["rl","lr"]);break;case"line":var p=f.split(","),w=p[0];c.integer(l,w),c.percent(l,w)&&c.set("snapToLines",!1),c.alt(l,w,["auto"]),p.length===2&&c.alt("lineAlign",p[1],["start","center","end"]);break;case"position":p=f.split(","),c.percent(l,p[0]),p.length===2&&c.alt("positionAlign",p[1],["start","center","end"]);break;case"size":c.percent(l,f);break;case"align":c.alt(l,f,["start","center","end","left","right"]);break}},/:/,/\s/),o.region=c.get("region",null),o.vertical=c.get("vertical","");try{o.line=c.get("line","auto")}catch{}o.lineAlign=c.get("lineAlign","start"),o.snapToLines=c.get("snapToLines",!0),o.size=c.get("size",100);try{o.align=c.get("align","center")}catch{o.align=c.get("align","middle")}try{o.position=c.get("position","auto")}catch{o.position=c.get("position",{start:0,left:0,center:50,middle:50,end:100,right:100},o.align)}o.positionAlign=c.get("positionAlign",{start:"start",left:"start",center:"center",middle:"center",end:"end",right:"end"},o.align)}function s(){e=e.replace(/^\s+/,"")}if(s(),t.startTime=i(),s(),e.substr(0,3)!=="-->")throw new We(We.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '-->'): "+r);e=e.substr(3),s(),t.endTime=i(),s(),a(e,t)}var Os=Wd.createElement&&Wd.createElement("textarea"),PC={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},Yd={white:"rgba(255,255,255,1)",lime:"rgba(0,255,0,1)",cyan:"rgba(0,255,255,1)",red:"rgba(255,0,0,1)",yellow:"rgba(255,255,0,1)",magenta:"rgba(255,0,255,1)",blue:"rgba(0,0,255,1)",black:"rgba(0,0,0,1)"},FC={v:"title",lang:"lang"},Qd={rt:"ruby"};function Kd(e,t){function n(){if(!t)return null;function w(b){return t=t.substr(b.length),b}var S=t.match(/^([^<]*)(<[^>]*>?)?/);return w(S[1]?S[1]:S[2])}function r(w){return Os.innerHTML=w,w=Os.textContent,Os.textContent="",w}function i(w,S){return!Qd[S.localName]||Qd[S.localName]===w.localName}function a(w,S){var b=PC[w];if(!b)return null;var x=e.document.createElement(b),v=FC[w];return v&&S&&(x[v]=S.trim()),x}for(var s=e.document.createElement("div"),u=s,o,c=[];(o=n())!==null;){if(o[0]==="<"){if(o[1]==="/"){c.length&&c[c.length-1]===o.substr(2).replace(">","")&&(c.pop(),u=u.parentNode);continue}var l=Cs(o.substr(1,o.length-2)),f;if(l){f=e.document.createProcessingInstruction("timestamp",l),u.appendChild(f);continue}var g=o.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!g||(f=a(g[1],g[3]),!f)||!i(u,f))continue;if(g[2]){var p=g[2].split(".");p.forEach(function(w){var S=/^bg_/.test(w),b=S?w.slice(3):w;if(Yd.hasOwnProperty(b)){var x=S?"background-color":"color",v=Yd[b];f.style[x]=v}}),f.className=p.join(" ")}c.push(g[1]),u.appendChild(f),u=f;continue}u.appendChild(e.document.createTextNode(r(o)))}return s}var Jd=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];function NC(e){for(var t=0;t<Jd.length;t++){var n=Jd[t];if(e>=n[0]&&e<=n[1])return!0}return!1}function kC(e){var t=[],n="",r;if(!e||!e.childNodes)return"ltr";function i(u,o){for(var c=o.childNodes.length-1;c>=0;c--)u.push(o.childNodes[c])}function a(u){if(!u||!u.length)return null;var o=u.pop(),c=o.textContent||o.innerText;if(c){var l=c.match(/^.*(\n|\r)/);return l?(u.length=0,l[0]):c}if(o.tagName==="ruby")return a(u);if(o.childNodes)return i(u,o),a(u)}for(i(t,e);n=a(t);)for(var s=0;s<n.length;s++)if(r=n.charCodeAt(s),NC(r))return"rtl";return"ltr"}function AC(e){if(typeof e.line=="number"&&(e.snapToLines||e.line>=0&&e.line<=100))return e.line;if(!e.track||!e.track.textTrackList||!e.track.textTrackList.mediaElement)return-1;for(var t=e.track,n=t.textTrackList,r=0,i=0;i<n.length&&n[i]!==t;i++)n[i].mode==="showing"&&r++;return++r*-1}function Ni(){}Ni.prototype.applyStyles=function(e,t){t=t||this.div;for(var n in e)e.hasOwnProperty(n)&&(t.style[n]=e[n])},Ni.prototype.formatStyle=function(e,t){return e===0?0:e+t};function ki(e,t,n){Ni.call(this),this.cue=t,this.cueDiv=Kd(e,t.text);var r={color:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(0, 0, 0, 0.8)",position:"relative",left:0,right:0,top:0,bottom:0,display:"inline",writingMode:t.vertical===""?"horizontal-tb":t.vertical==="lr"?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext"};this.applyStyles(r,this.cueDiv),this.div=e.document.createElement("div"),r={direction:kC(this.cueDiv),writingMode:t.vertical===""?"horizontal-tb":t.vertical==="lr"?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext",textAlign:t.align==="middle"?"center":t.align,font:n.font,whiteSpace:"pre-line",position:"absolute"},this.applyStyles(r),this.div.appendChild(this.cueDiv);var i=0;switch(t.positionAlign){case"start":case"line-left":i=t.position;break;case"center":i=t.position-t.size/2;break;case"end":case"line-right":i=t.position-t.size;break}t.vertical===""?this.applyStyles({left:this.formatStyle(i,"%"),width:this.formatStyle(t.size,"%")}):this.applyStyles({top:this.formatStyle(i,"%"),height:this.formatStyle(t.size,"%")}),this.move=function(a){this.applyStyles({top:this.formatStyle(a.top,"px"),bottom:this.formatStyle(a.bottom,"px"),left:this.formatStyle(a.left,"px"),right:this.formatStyle(a.right,"px"),height:this.formatStyle(a.height,"px"),width:this.formatStyle(a.width,"px")})}}ki.prototype=ws(Ni.prototype),ki.prototype.constructor=ki;function je(e){var t,n,r,i;if(e.div){n=e.div.offsetHeight,r=e.div.offsetWidth,i=e.div.offsetTop;var a=(a=e.div.childNodes)&&(a=a[0])&&a.getClientRects&&a.getClientRects();e=e.div.getBoundingClientRect(),t=a?Math.max(a[0]&&a[0].height||0,e.height/a.length):0}this.left=e.left,this.right=e.right,this.top=e.top||i,this.height=e.height||n,this.bottom=e.bottom||i+(e.height||n),this.width=e.width||r,this.lineHeight=t!==void 0?t:e.lineHeight}je.prototype.move=function(e,t){switch(t=t!==void 0?t:this.lineHeight,e){case"+x":this.left+=t,this.right+=t;break;case"-x":this.left-=t,this.right-=t;break;case"+y":this.top+=t,this.bottom+=t;break;case"-y":this.top-=t,this.bottom-=t;break}},je.prototype.overlaps=function(e){return this.left<e.right&&this.right>e.left&&this.top<e.bottom&&this.bottom>e.top},je.prototype.overlapsAny=function(e){for(var t=0;t<e.length;t++)if(this.overlaps(e[t]))return!0;return!1},je.prototype.within=function(e){return this.top>=e.top&&this.bottom<=e.bottom&&this.left>=e.left&&this.right<=e.right},je.prototype.overlapsOppositeAxis=function(e,t){switch(t){case"+x":return this.left<e.left;case"-x":return this.right>e.right;case"+y":return this.top<e.top;case"-y":return this.bottom>e.bottom}},je.prototype.intersectPercentage=function(e){var t=Math.max(0,Math.min(this.right,e.right)-Math.max(this.left,e.left)),n=Math.max(0,Math.min(this.bottom,e.bottom)-Math.max(this.top,e.top)),r=t*n;return r/(this.height*this.width)},je.prototype.toCSSCompatValues=function(e){return{top:this.top-e.top,bottom:e.bottom-this.bottom,left:this.left-e.left,right:e.right-this.right,height:this.height,width:this.width}},je.getSimpleBoxPosition=function(e){var t=e.div?e.div.offsetHeight:e.tagName?e.offsetHeight:0,n=e.div?e.div.offsetWidth:e.tagName?e.offsetWidth:0,r=e.div?e.div.offsetTop:e.tagName?e.offsetTop:0;e=e.div?e.div.getBoundingClientRect():e.tagName?e.getBoundingClientRect():e;var i={left:e.left,right:e.right,top:e.top||r,height:e.height||t,bottom:e.bottom||r+(e.height||t),width:e.width||n};return i};function LC(e,t,n,r){function i(b,x){for(var v,C=new je(b),T=1,_=0;_<x.length;_++){for(;b.overlapsOppositeAxis(n,x[_])||b.within(n)&&b.overlapsAny(r);)b.move(x[_]);if(b.within(n))return b;var I=b.intersectPercentage(n);T>I&&(v=new je(b),T=I),b=new je(C)}return v||C}var a=new je(t),s=t.cue,u=AC(s),o=[];if(s.snapToLines){var c;switch(s.vertical){case"":o=["+y","-y"],c="height";break;case"rl":o=["+x","-x"],c="width";break;case"lr":o=["-x","+x"],c="width";break}var l=a.lineHeight,f=l*Math.round(u),g=n[c]+l,p=o[0];Math.abs(f)>g&&(f=f<0?-1:1,f*=Math.ceil(g/l)*l),u<0&&(f+=s.vertical===""?n.height:n.width,o=o.reverse()),a.move(p,f)}else{var w=a.lineHeight/n.height*100;switch(s.lineAlign){case"center":u-=w/2;break;case"end":u-=w;break}switch(s.vertical){case"":t.applyStyles({top:t.formatStyle(u,"%")});break;case"rl":t.applyStyles({left:t.formatStyle(u,"%")});break;case"lr":t.applyStyles({right:t.formatStyle(u,"%")});break}o=["+y","-x","+x","-y"],a=new je(t)}var S=i(a,o);t.move(S.toCSSCompatValues(n))}function gn(){}gn.StringDecoder=function(){return{decode:function(e){if(!e)return"";if(typeof e!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}},gn.convertCueToDOMTree=function(e,t){return!e||!t?null:Kd(e,t)};var jC=.05,BC="sans-serif",RC="1.5%";gn.processCues=function(e,t,n){if(!e||!t||!n)return null;for(;n.firstChild;)n.removeChild(n.firstChild);var r=e.document.createElement("div");r.style.position="absolute",r.style.left="0",r.style.right="0",r.style.top="0",r.style.bottom="0",r.style.margin=RC,n.appendChild(r);function i(l){for(var f=0;f<l.length;f++)if(l[f].hasBeenReset||!l[f].displayState)return!0;return!1}if(!i(t)){for(var a=0;a<t.length;a++)r.appendChild(t[a].displayState);return}var s=[],u=je.getSimpleBoxPosition(r),o=Math.round(u.height*jC*100)/100,c={font:o+"px "+BC};(function(){for(var l,f,g=0;g<t.length;g++)f=t[g],l=new ki(e,f,c),r.appendChild(l.div),LC(e,l,u,s),f.displayState=l.div,s.push(je.getSimpleBoxPosition(l))})()},gn.Parser=function(e,t,n){n||(n=t,t={}),t||(t={}),this.window=e,this.vttjs=t,this.state="INITIAL",this.buffer="",this.decoder=n||new TextDecoder("utf8"),this.regionList=[]},gn.Parser.prototype={reportOrThrowError:function(e){if(e instanceof We)this.onparsingerror&&this.onparsingerror(e);else throw e},parse:function(e){var t=this;e&&(t.buffer+=t.decoder.decode(e,{stream:!0}));function n(){for(var l=t.buffer,f=0;f<l.length&&l[f]!=="\r"&&l[f]!==`
`;)++f;var g=l.substr(0,f);return l[f]==="\r"&&++f,l[f]===`
`&&++f,t.buffer=l.substr(f),g}function r(l){var f=new ir;if(ar(l,function(p,w){switch(p){case"id":f.set(p,w);break;case"width":f.percent(p,w);break;case"lines":f.integer(p,w);break;case"regionanchor":case"viewportanchor":var S=w.split(",");if(S.length!==2)break;var b=new ir;if(b.percent("x",S[0]),b.percent("y",S[1]),!b.has("x")||!b.has("y"))break;f.set(p+"X",b.get("x")),f.set(p+"Y",b.get("y"));break;case"scroll":f.alt(p,w,["up"]);break}},/=/,/\s/),f.has("id")){var g=new(t.vttjs.VTTRegion||t.window.VTTRegion);g.width=f.get("width",100),g.lines=f.get("lines",3),g.regionAnchorX=f.get("regionanchorX",0),g.regionAnchorY=f.get("regionanchorY",100),g.viewportAnchorX=f.get("viewportanchorX",0),g.viewportAnchorY=f.get("viewportanchorY",100),g.scroll=f.get("scroll",""),t.onregion&&t.onregion(g),t.regionList.push({id:f.get("id"),region:g})}}function i(l){var f=new ir;ar(l,function(g,p){switch(g){case"MPEGT":f.integer(g+"S",p);break;case"LOCA":f.set(g+"L",Cs(p));break}},/[^\d]:/,/,/),t.ontimestampmap&&t.ontimestampmap({MPEGTS:f.get("MPEGTS"),LOCAL:f.get("LOCAL")})}function a(l){l.match(/X-TIMESTAMP-MAP/)?ar(l,function(f,g){switch(f){case"X-TIMESTAMP-MAP":i(g);break}},/=/):ar(l,function(f,g){switch(f){case"Region":r(g);break}},/:/)}try{var s;if(t.state==="INITIAL"){if(!/\r\n|\n/.test(t.buffer))return this;s=n();var u=s.match(/^WEBVTT([ \t].*)?$/);if(!u||!u[0])throw new We(We.Errors.BadSignature);t.state="HEADER"}for(var o=!1;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this;switch(o?o=!1:s=n(),t.state){case"HEADER":/:/.test(s)?a(s):s||(t.state="ID");continue;case"NOTE":s||(t.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(s)){t.state="NOTE";break}if(!s)continue;t.cue=new(t.vttjs.VTTCue||t.window.VTTCue)(0,0,"");try{t.cue.align="center"}catch{t.cue.align="middle"}if(t.state="CUE",s.indexOf("-->")===-1){t.cue.id=s;continue}case"CUE":try{MC(s,t.cue,t.regionList)}catch(l){t.reportOrThrowError(l),t.cue=null,t.state="BADCUE";continue}t.state="CUETEXT";continue;case"CUETEXT":var c=s.indexOf("-->")!==-1;if(!s||c&&(o=!0)){t.oncue&&t.oncue(t.cue),t.cue=null,t.state="ID";continue}t.cue.text&&(t.cue.text+=`
`),t.cue.text+=s.replace(/\u2028/g,`
`).replace(/u2029/g,`
`);continue;case"BADCUE":s||(t.state="ID");continue}}}catch(l){t.reportOrThrowError(l),t.state==="CUETEXT"&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state=t.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this},flush:function(){var e=this;try{if(e.buffer+=e.decoder.decode(),(e.cue||e.state==="HEADER")&&(e.buffer+=`

`,e.parse()),e.state==="INITIAL")throw new We(We.Errors.BadSignature)}catch(t){e.reportOrThrowError(t)}return e.onflush&&e.onflush(),this}};var VC=gn,qC="auto",GC={"":1,lr:1,rl:1},UC={start:1,center:1,end:1,left:1,right:1,auto:1,"line-left":1,"line-right":1};function zC(e){if(typeof e!="string")return!1;var t=GC[e.toLowerCase()];return t?e.toLowerCase():!1}function Es(e){if(typeof e!="string")return!1;var t=UC[e.toLowerCase()];return t?e.toLowerCase():!1}function Xd(e,t,n){this.hasBeenReset=!1;var r="",i=!1,a=e,s=t,u=n,o=null,c="",l=!0,f="auto",g="start",p="auto",w="auto",S=100,b="center";Object.defineProperties(this,{id:{enumerable:!0,get:function(){return r},set:function(x){r=""+x}},pauseOnExit:{enumerable:!0,get:function(){return i},set:function(x){i=!!x}},startTime:{enumerable:!0,get:function(){return a},set:function(x){if(typeof x!="number")throw new TypeError("Start time must be set to a number.");a=x,this.hasBeenReset=!0}},endTime:{enumerable:!0,get:function(){return s},set:function(x){if(typeof x!="number")throw new TypeError("End time must be set to a number.");s=x,this.hasBeenReset=!0}},text:{enumerable:!0,get:function(){return u},set:function(x){u=""+x,this.hasBeenReset=!0}},region:{enumerable:!0,get:function(){return o},set:function(x){o=x,this.hasBeenReset=!0}},vertical:{enumerable:!0,get:function(){return c},set:function(x){var v=zC(x);if(v===!1)throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.");c=v,this.hasBeenReset=!0}},snapToLines:{enumerable:!0,get:function(){return l},set:function(x){l=!!x,this.hasBeenReset=!0}},line:{enumerable:!0,get:function(){return f},set:function(x){if(typeof x!="number"&&x!==qC)throw new SyntaxError("Line: an invalid number or illegal string was specified.");f=x,this.hasBeenReset=!0}},lineAlign:{enumerable:!0,get:function(){return g},set:function(x){var v=Es(x);v?(g=v,this.hasBeenReset=!0):console.warn("lineAlign: an invalid or illegal string was specified.")}},position:{enumerable:!0,get:function(){return p},set:function(x){if(x<0||x>100)throw new Error("Position must be between 0 and 100.");p=x,this.hasBeenReset=!0}},positionAlign:{enumerable:!0,get:function(){return w},set:function(x){var v=Es(x);v?(w=v,this.hasBeenReset=!0):console.warn("positionAlign: an invalid or illegal string was specified.")}},size:{enumerable:!0,get:function(){return S},set:function(x){if(x<0||x>100)throw new Error("Size must be between 0 and 100.");S=x,this.hasBeenReset=!0}},align:{enumerable:!0,get:function(){return b},set:function(x){var v=Es(x);if(!v)throw new SyntaxError("align: an invalid or illegal alignment string was specified.");b=v,this.hasBeenReset=!0}}}),this.displayState=void 0}Xd.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)};var HC=Xd,WC={"":!0,up:!0};function YC(e){if(typeof e!="string")return!1;var t=WC[e.toLowerCase()];return t?e.toLowerCase():!1}function sr(e){return typeof e=="number"&&e>=0&&e<=100}function QC(){var e=100,t=3,n=0,r=100,i=0,a=100,s="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return e},set:function(u){if(!sr(u))throw new Error("Width must be between 0 and 100.");e=u}},lines:{enumerable:!0,get:function(){return t},set:function(u){if(typeof u!="number")throw new TypeError("Lines must be set to a number.");t=u}},regionAnchorY:{enumerable:!0,get:function(){return r},set:function(u){if(!sr(u))throw new Error("RegionAnchorX must be between 0 and 100.");r=u}},regionAnchorX:{enumerable:!0,get:function(){return n},set:function(u){if(!sr(u))throw new Error("RegionAnchorY must be between 0 and 100.");n=u}},viewportAnchorY:{enumerable:!0,get:function(){return a},set:function(u){if(!sr(u))throw new Error("ViewportAnchorY must be between 0 and 100.");a=u}},viewportAnchorX:{enumerable:!0,get:function(){return i},set:function(u){if(!sr(u))throw new Error("ViewportAnchorX must be between 0 and 100.");i=u}},scroll:{enumerable:!0,get:function(){return s},set:function(u){var o=YC(u);o===!1?console.warn("Scroll: an invalid or illegal string was specified."):s=o}}})}var KC=QC,ft=EC,Bt=zd.exports={WebVTT:VC,VTTCue:HC,VTTRegion:KC};ft.vttjs=Bt,ft.WebVTT=Bt.WebVTT;var JC=Bt.VTTCue,XC=Bt.VTTRegion,ZC=ft.VTTCue,eO=ft.VTTRegion;Bt.shim=function(){ft.VTTCue=JC,ft.VTTRegion=XC},Bt.restore=function(){ft.VTTCue=ZC,ft.VTTRegion=eO},ft.VTTCue||Bt.shim();var Zd=zd.exports;function tO(e,t){const n=[],r=new Zd.WebVTT.Parser(window,Zd.WebVTT.StringDecoder());return r.oncue=i=>{const a=i.text.match(/^([^#]*)#xywh=(\d+),(\d+),(\d+),(\d+)$/i);a&&n.push({url:new URL(a[1],e).href,start:i.startTime,end:i.endTime,x:Number(a[2]),y:Number(a[3]),w:Number(a[4]),h:Number(a[5])})},r.parse(t),r.flush(),n}function nO(e){const[t,n]=O.useState();return O.useEffect(()=>{if(!e){n(void 0);return}fetch(e).then(r=>{if(!r.ok){n(null);return}r.text().then(i=>{n(tO(e,i))})})},[e]),t}function rO(e,t,n){const r=O.useRef(e);return r.current=e,O.useCallback(E_(function(){return r.current.apply(this,arguments)},t,n),[t,n==null?void 0:n.leading,n==null?void 0:n.trailing,n==null?void 0:n.maxWait])}const Ts=window.TouchEvent!==void 0,iO=({totalSprites:e,activeIndex:t,setActiveIndex:n,onClick:r,disabled:i})=>{function a(l){const{width:f}=l.currentTarget.getBoundingClientRect();let g=0;l.nativeEvent instanceof MouseEvent?g=l.nativeEvent.offsetX:Ts&&l.nativeEvent instanceof TouchEvent&&(g=l.nativeEvent.touches[0].clientX-l.currentTarget.getBoundingClientRect().x);const p=Math.round(g/f*(e-1));return p<0?0:p>=e?e-1:p}function s(l){const f=l.currentTarget;l instanceof MouseEvent&&f!==l.target||Ts&&l instanceof TouchEvent&&document.elementFromPoint(l.touches[0].clientX,l.touches[0].clientY)||n(a(l))}function u(){n(void 0)}function o(l){if(!r)return;if(i){l.preventDefault();return}const f=l.currentTarget;if(l instanceof MouseEvent&&f!==l.target||Ts&&l instanceof TouchEvent&&document.elementFromPoint(l.touches[0].clientX,l.touches[0].clientY))return;l.preventDefault(),l.stopPropagation();const g=a(l);g!==void 0&&r(g)}const c=O.useMemo(()=>t===void 0||!e?{}:{width:`${(t+1)/e*100}%`},[t,e]);return d.jsxs("div",{className:Ge("hover-scrubber",{"hover-scrubber-inactive":!e}),children:[d.jsx("div",{className:"hover-scrubber-area",onMouseMove:s,onTouchMove:s,onMouseLeave:u,onTouchEnd:u,onTouchCancel:u,onClick:o}),d.jsx("div",{className:"hover-scrubber-indicator",children:t!==void 0&&d.jsx("div",{className:"hover-scrubber-indicator-marker",style:c})})]})};function aO(e,t){const n=t.width/e.w,r=t.height/e.h;return e.w>e.h?Math.max(n,r):Math.min(n,r)}const sO=81,oO=({vttPath:e,onClick:t,disabled:n})=>{const r=O.useRef(null),[i,a]=O.useState({}),[s,u]=O.useState(),o=rO(u,50),[c,l]=O.useState(!1),f=nO(c?e:void 0),g=O.useMemo(()=>{if(!f)return{x:0,y:0};const b=Math.max(...f.map(v=>v.x+v.w)),x=Math.max(...f.map(v=>v.y+v.h));return{x:b,y:x}},[f]),p=O.useMemo(()=>{if(!(!f||s===void 0))return f[s]},[s,f]);O.useEffect(()=>{s!==void 0&&l(!0)},[s]),O.useLayoutEffect(()=>{const b=r.current;if(!p||!b)return a({});const x=b.getBoundingClientRect(),v=aO(p,x);a({backgroundPosition:`${-p.x*v}px ${-p.y*v}px`,backgroundImage:`url(${p.url})`,backgroundSize:`${g.x*v}px ${g.y*v}px`,width:`${p.w*v}px`,height:`${p.h*v}px`})},[p,g]);const w=O.useMemo(()=>p?Fe.secondsToTimestamp(p.start):void 0,[p]);function S(b){if(!t||!f)return;const x=f[b];t(x.start)}return f===null||!e?null:d.jsxs("div",{className:"preview-scrubber",children:[p&&d.jsxs("div",{className:"scene-card-preview-image",ref:r,children:[d.jsx("div",{className:"scrubber-image",style:i}),w!==void 0&&d.jsx("div",{className:"scrubber-timestamp",children:w})]}),d.jsx(iO,{totalSprites:(f==null?void 0:f.length)??sO,activeIndex:s,setActiveIndex:b=>o(b),onClick:S,disabled:n})]})},uO=({studio:e,disabled:t})=>{const{configuration:n}=ht(),r=n==null?void 0:n.interface.showStudioAsText,i=O.useMemo(()=>!!(r||!(e!=null&&e.image_path)||new URL(e.image_path).searchParams.get("default")==="true"),[r,e==null?void 0:e.image_path]);function a(s){t&&s.preventDefault()}return e?d.jsx("div",{className:"studio-overlay",children:d.jsx(Ke.Link,{to:`/studios/${e.id}`,onClick:a,children:i?e.name:d.jsx("img",{className:"image-thumbnail",loading:"lazy",alt:e.name,src:e.image_path??""})})}):null},cO=({group:e,linkType:t,description:n})=>d.jsxs("div",{className:"group-tag-container",children:[d.jsx(Ke.Link,{to:`/groups/${e.id}`,className:"group-tag col m-auto zoom-2",children:d.jsx("img",{className:"image-thumbnail",alt:e.name??"",src:e.front_image_path??""})}),d.jsx(SC,{group:e,description:n,linkType:t,className:"d-block"})]}),lO=({size:e})=>{const{size:t,unit:n}=Fe.fileSize(e);return d.jsxs(d.Fragment,{children:[d.jsx(Se.FormattedNumber,{value:t,maximumFractionDigits:Fe.fileSizeFractionalDigits(n)}),` ${Fe.formatFileSizeUnit(n)}`]})},dO=he("SweatDrops",()=>d.jsx("span",{children:d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",style:{transform:"rotate(360deg)"},preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 36 36",children:[d.jsx("path",{fill:"currentColor",d:"M22.855.758L7.875 7.024l12.537 9.733c2.633 2.224 6.377 2.937 9.77 1.518c4.826-2.018 7.096-7.576 5.072-12.413C33.232 1.024 27.68-1.261 22.855.758zm-9.962 17.924L2.05 10.284L.137 23.529a7.993 7.993 0 0 0 2.958 7.803a8.001 8.001 0 0 0 9.798-12.65zm15.339 7.015l-8.156-4.69l-.033 9.223c-.088 2 .904 3.98 2.75 5.041a5.462 5.462 0 0 0 7.479-2.051c1.499-2.644.589-6.013-2.04-7.523z"}),d.jsx("rect",{x:"0",y:"0",width:"36",height:"36",fill:"rgba(0, 0, 0, 0)"})]})})),fO=({value:e,icon:t,onIncrement:n,onValueClicked:r,title:i,countTitle:a,dataAction:s})=>d.jsxs(U.ButtonGroup,{className:Ge("count-button",{"increment-only":!r}),"data-action":s,children:[d.jsx(U.Button,{className:"minimal count-icon",variant:"secondary",onClick:()=>n==null?void 0:n(),title:i,children:t}),d.jsx(U.Button,{className:"minimal count-value",variant:"secondary",onClick:()=>{var u;return(u=r??n)==null?void 0:u()},title:r?a:void 0,children:d.jsx("span",{children:e})})]}),pO=e=>{const t=Se.useIntl(),{configuration:n}=ht(),{sfwContentMode:r}=n.interface,i=r?d.jsx(Ee,{icon:ce.faThumbsUp}):d.jsx(dO,{}),a=r?"o_count_sfw":"o_count";return d.jsx(fO,{...e,icon:i,title:t.formatMessage({id:a}),countTitle:t.formatMessage({id:"actions.view_history"}),dataAction:"o-counter"})},mO=O.memo(({image:e,video:t,isPortrait:n,soundActive:r,vttPath:i,onScrubberClick:a,disabled:s,volume:u})=>{const o=O.useRef(null);return O.useEffect(()=>{const c=new IntersectionObserver(l=>{l.forEach(f=>{var g,p,w;f.intersectionRatio>0?(p=(g=o.current)==null?void 0:g.play())==null||p.catch(()=>{}):(w=o.current)==null||w.pause()})});return o.current&&c.observe(o.current),()=>c.disconnect()},[]),O.useEffect(()=>{var c;(c=o==null?void 0:o.current)!=null&&c.volume&&(o.current.volume=r?(u??0)/100:0)},[u,r]),d.jsxs("div",{className:Ge("scene-card-preview",{portrait:n}),children:[d.jsx("img",{className:"scene-card-preview-image",loading:"lazy",src:e,alt:""}),d.jsx("video",{disableRemotePlayback:!0,playsInline:!0,muted:!r,className:"scene-card-preview-video",loop:!0,preload:"none",ref:o,src:t}),d.jsx(oO,{vttPath:i,onClick:a,disabled:s})]})}),gO=({sceneNumber:e})=>e?d.jsxs(d.Fragment,{children:[d.jsx("hr",{}),e!==void 0&&d.jsxs("span",{className:"scene-group-scene-number",children:[d.jsx(Se.FormattedMessage,{id:"scene"})," #",e]})]}):null,hO=O.memo(he("SceneCard.Popovers",e=>{const t=O.useMemo(()=>e.scene.files.length>0?e.scene.files[0]:void 0,[e.scene]),n=O.useMemo(()=>{if(!e.fromGroupId)return;const g=e.scene.groups.find(p=>p.group.id===e.fromGroupId);return(g==null?void 0:g.scene_index)??void 0},[e.fromGroupId,e.scene.groups]);function r(){if(e.scene.tags.length<=0)return;const g=e.scene.tags.map(p=>d.jsx(_C,{tag:p},p.id));return d.jsx(Nt,{className:"tag-count",placement:"bottom",content:g,children:d.jsxs(U.Button,{className:"minimal",children:[d.jsx(Ee,{icon:ce.faTag}),d.jsx("span",{children:e.scene.tags.length})]})})}function i(){if(!(e.scene.performers.length<=0))return d.jsx(CC,{performers:e.scene.performers,linkType:"scene"})}function a(){if(e.scene.groups.length<=0)return;const g=e.scene.groups.map(p=>d.jsx(cO,{group:p.group},p.group.id));return d.jsx(Nt,{placement:"bottom",content:g,className:"group-count tag-tooltip",children:d.jsxs(U.Button,{className:"minimal",children:[d.jsx(Ee,{icon:ce.faFilm}),d.jsx("span",{children:e.scene.groups.length})]})})}function s(){if(e.scene.scene_markers.length<=0)return;const g=e.scene.scene_markers.map(p=>{const w={...p,scene:{id:e.scene.id}};return d.jsx(xC,{marker:w},p.id)});return d.jsx(Nt,{className:"marker-count",placement:"bottom",content:g,children:d.jsxs(U.Button,{className:"minimal",children:[d.jsx(Ee,{icon:ce.faMapMarkerAlt}),d.jsx("span",{children:e.scene.scene_markers.length})]})})}function u(){if(e.scene.o_counter)return d.jsx(pO,{value:e.scene.o_counter})}function o(){if(e.scene.galleries.length<=0)return;const g=e.scene.galleries.map(p=>d.jsx(IC,{gallery:p},p.id));return d.jsx(Nt,{className:"gallery-count",placement:"bottom",content:g,children:d.jsxs(U.Button,{className:"minimal",children:[d.jsx(Ee,{icon:ce.faImages}),d.jsx("span",{children:e.scene.galleries.length})]})})}function c(){if(e.scene.organized)return d.jsx(U.OverlayTrigger,{overlay:d.jsx(U.Tooltip,{id:"organised-tooltip",children:"Organized"}),placement:"bottom",children:d.jsx("div",{className:"organized",children:d.jsx(U.Button,{className:"minimal",children:d.jsx(Ee,{icon:ce.faBox})})})})}function l(){const g=t?t.fingerprints.find(p=>p.type==="phash"):void 0;if(g)return d.jsx("div",{className:"other-copies extra-scene-info",children:d.jsx(U.Button,{href:me.makeScenesPHashMatchUrl(g.value),className:"minimal",children:d.jsx(Ee,{icon:ce.faCopy})})})}function f(){var g;if(!e.compact&&(e.scene.tags.length>0||e.scene.performers.length>0||e.scene.groups.length>0||e.scene.scene_markers.length>0||(g=e.scene)!=null&&g.o_counter||e.scene.galleries.length>0||e.scene.organized||n!==void 0))return d.jsxs(d.Fragment,{children:[d.jsx(gO,{sceneNumber:n}),d.jsx("hr",{}),d.jsxs(U.ButtonGroup,{className:"card-popovers",children:[r(),i(),a(),s(),u(),o(),c(),l()]})]})}return d.jsx(d.Fragment,{children:f()})})),vO=O.memo(he("SceneCard.Details",e=>d.jsxs("div",{className:"scene-card__details",children:[d.jsx("span",{className:"scene-card__date",children:e.scene.date}),d.jsx("span",{className:"file-path extra-scene-info",children:N_(e.scene)}),d.jsx(Zn,{className:"scene-card__description",text:e.scene.details,lineCount:3})]}))),bO=O.memo(he("SceneCard.Overlays",e=>O.useMemo(()=>d.jsx(uO,{studio:e.scene.studio,disabled:e.selecting}),[e.scene.studio,e.selecting]))),yO=O.memo(he("SceneCard.SceneSpecs",({scene:e})=>{var n;const t=(n=e.files)==null?void 0:n[0];return t?d.jsxs("div",{className:"scene-specs-overlay",children:[d.jsx("span",{className:"overlay-filesize extra-scene-info",children:d.jsx(lO,{size:t.size})}),t.width&&t.height?d.jsx("span",{className:"overlay-resolution",children:Fe.resolution(t.width,t.height)}):"",t.duration>0?d.jsx("span",{className:"overlay-duration",children:Fe.secondsToTimestamp(t.duration)}):""]}):null})),SO=O.memo(he("SceneCard.Image",e=>{var o;const t=Ke.useHistory(),{configuration:n}=ht(),r=(n==null?void 0:n.interface.continuePlaylistDefault)??!1,i=O.useMemo(()=>e.scene.files.length>0?e.scene.files[0]:void 0,[e.scene]);function a(){return d.jsx("div",{className:"scene-interactive-speed-overlay",children:e.scene.interactive_speed??""})}const s=O.useCallback(c=>{if(e.selecting)return;const l=e.queue?e.queue.makeLink(e.scene.id,{sceneIndex:e.index,continue:r,start:c}):`/scenes/${e.scene.id}?t=${c}`;t.push(l)},[e.selecting,e.queue,e.scene.id,e.index,r,t]);function u(){const c=i!=null&&i.width?i.width:0;return(i!=null&&i.height?i.height:0)>c}return d.jsxs(d.Fragment,{children:[d.jsx(mO,{image:e.scene.paths.screenshot??void 0,video:e.scene.paths.preview??void 0,isPortrait:u(),soundActive:((o=n==null?void 0:n.interface)==null?void 0:o.soundOnPreview)??!1,volume:(n==null?void 0:n.ui.previewVolume)??ug,vttPath:e.scene.paths.vtt??void 0,onScrubberClick:s,disabled:e.selecting}),d.jsx(OC,{rating:e.scene.rating100}),d.jsx(yO,{scene:e.scene}),a()]})})),xO=O.memo(he("SceneCard",e=>{const{configuration:t}=ht(),n=O.useMemo(()=>e.scene.files.length>0?e.scene.files[0]:void 0,[e.scene]);function r(){return!e.compact&&e.zoomIndex!==void 0?`zoom-${e.zoomIndex}`:""}function i(){return e.scene.files.length?"":"fileless"}const a=(t==null?void 0:t.interface.continuePlaylistDefault)??!1,s=e.queue?e.queue.makeLink(e.scene.id,{sceneIndex:e.index,continue:a}):`/scenes/${e.scene.id}`;return d.jsx(Ud,{className:`scene-card ${r()} ${i()}`,url:s,title:Cd(e.scene),width:e.width,linkClassName:"scene-card-link",thumbnailSectionClassName:"video-section",resumeTime:e.scene.resume_time??void 0,duration:(n==null?void 0:n.duration)??void 0,interactiveHeatmap:e.scene.interactive_speed?e.scene.paths.interactive_heatmap??void 0:void 0,image:d.jsx(SO,{...e}),overlays:d.jsx(bO,{...e}),details:d.jsx(vO,{...e}),popovers:d.jsx(hO,{...e}),selected:e.selected,selecting:e.selecting,onSelectedChanged:e.onSelectedChanged})})),{PluginApi:pt}=window,{React:ef}=pt,{useState:Ye,useEffect:IO}=ef,_O=pt.libraries.Bootstrap,{Nav:wO,Button:hn,Form:Ae,Alert:Ds,ProgressBar:CO,Spinner:$s}=_O,{NavLink:OO,useHistory:EO}=pt.libraries.ReactRouterDOM,{FontAwesomeIcon:TO}=pt.libraries.ReactFontAwesome,DO=pt.libraries.FontAwesomeSolid,tf="subtitleMarkers",nf="/subtitle-markers",$O=1e3;function Ms(e,t){return fetch("/graphql",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,variables:t})}).then(n=>n.json()).then(n=>{if(n.errors&&n.errors.length)throw new Error(n.errors.map(r=>r.message).join("; "));return n.data})}function MO(e,t){return Ms(`mutation SubtitleMarkersRunTask($plugin_id: ID!, $description: String, $args_map: Map) {
      runPluginTask(plugin_id: $plugin_id, description: $description, args_map: $args_map)
    }`,{plugin_id:tf,description:t,args_map:e}).then(n=>n.runPluginTask)}function PO(e){return Ms("query SubtitleMarkersFindJob($id: ID!) { findJob(input: { id: $id }) { status progress error } }",{id:e}).then(t=>t.findJob)}function FO(e){return Ms(`mutation SubtitleMarkersSearch($plugin_id: ID!, $args: Map) {
      runPluginOperation(plugin_id: $plugin_id, args: $args)
    }`,{plugin_id:tf,args:e}).then(t=>t.runPluginOperation)}const Ps=["READY","RUNNING","STOPPING"],NO={READY:"Starting…",RUNNING:"Searching…",STOPPING:"Stopping…",FINISHED:"Done.",CANCELLED:"Cancelled.",FAILED:"Failed."};function kO({libraryPaths:e}){const[t,n]=Ye(""),[r,i]=Ye(""),[a,s]=Ye(!1),[u,o]=Ye(""),[c,l]=Ye(""),[f,g]=Ye(!1),[p,w]=Ye(null),[S,b]=Ye(null),[x,v]=Ye(!1),[C,T]=Ye(null),[_,I]=Ye(null),[h,E]=Ye(null),[D,$]=Ye(null),R=EO(),[H,{width:ie}]=Ww(),ee=Yw(ie,1,[280,340,480,640]),P=f||S!==null&&Ps.includes(S.status),A=P||x,L=!!t.trim()&&!!r.trim()&&(!a||!!u)&&!A;IO(()=>{if(!p)return;let M=!1,B;const N=()=>{PO(p).then(J=>{M||(b(J),J&&Ps.includes(J.status)&&(B=setTimeout(N,$O)))}).catch(J=>{M||b({status:"FAILED",progress:null,error:String(J&&J.message?J.message:J)})})};return N(),()=>{M=!0,clearTimeout(B)}},[p]);function G(){const M=r.trim();g(!0),b(null),MO({path:t.trim(),search:M,tagId:u,title:c.trim()},`Searching subtitles for "${M}"`).then(B=>{g(!1),w(B)}).catch(B=>{g(!1),b({status:"FAILED",progress:null,error:String(B&&B.message?B.message:B)})})}function te(){v(!0),I(null),T(null),E(null),$(null),FO({mode:"search",path:t.trim(),search:r.trim()}).then(M=>{v(!1),T(M.results),ue(M.results)}).catch(M=>{v(!1),I(String(M&&M.message?M.message:M))})}function ue(M){const B=Array.from(new Set(M.map(N=>Number(N.sceneId)))).filter(N=>!Number.isNaN(N));if(B.length===0){E(new Map);return}Xm(B).then(N=>{var Me,Be;const J=new Map;(((Be=(Me=N.data)==null?void 0:Me.findScenes)==null?void 0:Be.scenes)??[]).forEach(mt=>J.set(mt.id,mt)),E(J)}).catch(N=>{$(String(N&&N.message?N.message:N)),E(new Map)})}function F(M,B){const N=M.target;!N.closest(".scene-card-link")&&!N.closest(".card-section-title")||(M.preventDefault(),M.stopPropagation(),R.push(`/scenes/${B.sceneId}?t=${B.seconds}`))}function j(){a?G():te()}function Y(){if(!S)return null;const M=Math.round((S.progress||0)*100);return d.jsxs("div",{className:"subtitle-markers-status mt-3",children:[Ps.includes(S.status)&&d.jsx(CO,{now:M,label:`${M}%`,animated:!0}),d.jsxs("p",{className:S.status==="FAILED"?"text-danger":"text-muted",children:[NO[S.status],S.status==="FINISHED"&&" Marker preview generation has been queued for anything created. See Settings → Logs for how many markers were created."]}),S.error?d.jsx(Ds,{variant:"danger",children:S.error}):null]})}function W(){return x?d.jsxs("div",{className:"subtitle-markers-results mt-3 text-muted",children:[d.jsx($s,{animation:"border",size:"sm",className:"mr-2"}),"Searching…"]}):_?d.jsx(Ds,{variant:"danger",className:"mt-3",children:_}):C===null?null:C.length===0?d.jsx("p",{className:"subtitle-markers-results mt-3 text-muted",children:"No matches found."}):d.jsxs("div",{className:"subtitle-markers-results mt-3",children:[d.jsxs("p",{className:"text-muted",children:[C.length," match",C.length===1?"":"es",":"]}),d.jsx(hn,{size:"sm",variant:"secondary",className:"mb-2",onClick:()=>jO(C),children:"Play All in Queue"}),D?d.jsxs(Ds,{variant:"warning",className:"mt-2",children:["Couldn't load scene previews (",D,") - showing plain links instead."]}):null,h?d.jsx("div",{className:"row justify-content-center subtitle-markers-result-cards",ref:H,style:{gap:"12px"},children:C.map((M,B)=>{const N=h.get(M.sceneId);return N?d.jsxs("div",{className:"subtitle-markers-result-card",style:ee?{width:ee}:void 0,onClickCapture:J=>F(J,M),children:[d.jsx(xO,{scene:N,width:ee}),d.jsx(Zn,{className:"text-muted subtitle-markers-result-text",text:`@ ${Fe.secondsToTimestamp(M.seconds)} — ${M.text}`,lineCount:2})]},B):d.jsxs("div",{className:"subtitle-markers-result subtitle-markers-result-fallback",style:ee?{width:ee}:void 0,children:[d.jsxs("a",{href:`/scenes/${M.sceneId}?t=${M.seconds}`,target:"_blank",rel:"noreferrer",children:[M.sceneTitle||`Scene ${M.sceneId}`," @ ",Fe.secondsToTimestamp(M.seconds)]}),d.jsx(Zn,{className:"text-muted subtitle-markers-result-text",text:M.text,lineCount:2})]},B)})}):d.jsxs("div",{className:"text-muted mt-2",children:[d.jsx($s,{animation:"border",size:"sm",className:"mr-2"}),"Loading scene previews…"]})]})}return d.jsxs("div",{className:"subtitle-markers-page container-fluid",children:[d.jsx("h3",{children:"Subtitle Markers"}),d.jsx("p",{className:"text-muted",children:"Searches every .srt file under a folder (and its subfolders) for a phrase - matched to the video file next to each subtitle, the same way Stash itself associates captions. Either jump straight to each match's timestamp, or (optionally) create a scene marker for each one, with preview generation queued automatically afterwards."}),d.jsxs(Ae.Group,{className:"subtitle-markers-folder",children:[d.jsx(Ae.Label,{children:"Folder"}),d.jsx(hC,{currentDirectory:t,onChangeDirectory:n,defaultDirectories:e}),d.jsx(Ae.Text,{className:"text-muted",children:"Searched recursively, including subfolders."})]}),d.jsxs(Ae.Group,{children:[d.jsx(Ae.Label,{children:"Search text"}),d.jsx(Ae.Control,{type:"text",value:r,placeholder:"Text to find in subtitle lines",onChange:M=>i(M.target.value),disabled:A}),d.jsx(Ae.Text,{className:"text-muted",children:"Case-insensitive, matched as plain text."})]}),d.jsxs(Ae.Group,{children:[d.jsx(Ae.Check,{type:"checkbox",id:"subtitle-markers-create-markers",label:"Also create scene markers",checked:a,disabled:A,onChange:M=>s(M.target.checked)}),d.jsx(Ae.Text,{className:"text-muted",children:"Off by default: just search, and link to each match's timestamp. Turn this on to also create a scene marker for each match, using the tag and title below."})]}),a&&d.jsxs(d.Fragment,{children:[d.jsxs(Ae.Group,{children:[d.jsx(Ae.Label,{children:"Tag"}),d.jsx(mC,{ids:u?[u]:[],isDisabled:A,onSelect:M=>{var B;return o(((B=M[0])==null?void 0:B.id)||"")}})]}),d.jsxs(Ae.Group,{children:[d.jsx(Ae.Label,{children:"Marker title"}),d.jsx(Ae.Control,{type:"text",value:c,placeholder:r||"Marker title",onChange:M=>l(M.target.value),disabled:A}),d.jsx(Ae.Text,{className:"text-muted",children:"Defaults to the search text if left blank."})]})]}),d.jsx(hn,{onClick:j,disabled:!L,children:P?"Running…":x?"Searching…":a?"Search & Create Markers":"Search"}),a?Y():W()]})}function AO(){const{data:e}=Wf();if(!(e!=null&&e.configuration))return d.jsx($s,{animation:"border",className:"mt-3"});const t=e.configuration.general.stashes.map(n=>n.path);return d.jsx(dp,{children:d.jsx(Zf,{configuration:e.configuration,children:d.jsx(kO,{libraryPaths:t})})})}pt.register.route(nf,AO),pt.patch.before("MainNavBar.MenuItems",e=>{try{const t=d.jsx(wO.Link,{as:"div",className:"col-4 col-sm-3 col-md-2 col-lg-auto",children:d.jsx(OO,{exact:!0,to:nf,activeClassName:"active",children:d.jsxs(hn,{className:"minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center",children:[d.jsx(TO,{icon:DO.faClosedCaptioning,className:"fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0"}),d.jsx("span",{children:"Marker"})]})})},"subtitle-markers");return[{...e,children:[...ef.Children.toArray(e.children),t]}]}catch(t){return console.error("[SubtitleMarkers] Failed to patch nav bar:",t),[e]}});const Fs="subtitleMarkersQueue",Ns="subtitle-markers-queue-widget",LO=20;function Ai(){try{const e=window.sessionStorage.getItem(Fs);if(!e)return null;const t=JSON.parse(e);return!t||!Array.isArray(t.items)||typeof t.index!="number"||t.index<0||t.index>=t.items.length?null:t}catch{return null}}function rf(e){try{window.sessionStorage.setItem(Fs,JSON.stringify(e))}catch{}}function af(){try{window.sessionStorage.removeItem(Fs)}catch{}}function or(){const e=window.location.pathname.match(/^\/scenes\/([^/?]+)/);return e?e[1]:null}function sf(e){return`/scenes/${e.sceneId}?t=${e.seconds}&continue=true&autoplay=true`}function of(e){!e||e.length===0||(rf({items:e,index:0}),window.open(sf(e[0]),"_blank"))}function jO(e){of(e)}let ur=null;function cr(){ur!==null&&(clearTimeout(ur),ur=null)}function lr(){cr();const e=document.getElementById(Ns);e&&e.remove()}function Li(e,t){if(cr(),t<0||t>=e.items.length){af(),lr();return}const n=e.items[t];if(rf({items:e.items,index:t}),n.sceneId===or()){const r=document.querySelector(".video-js video");r&&(r.currentTime=n.seconds,r.play().catch(()=>{})),ks()}else lr(),window.location.assign(sf(n))}function BO(e){const t=e.target;if(!t||t.tagName!=="VIDEO")return;const n=Ai();!n||n.items[n.index].sceneId!==or()||Li(n,n.index+1)}function uf(){cr();const e=Ai();!e||e.items[e.index].sceneId!==or()||(ur=setTimeout(()=>{ur=null;const t=Ai();if(!t||t.items[t.index].sceneId!==or())return;const n=document.querySelector(".video-js video");n&&n.paused||Li(t,t.index+1)},LO*1e3))}function RO(e){const t=e.target;!t||t.tagName!=="VIDEO"||uf()}function VO(e){const t=e.target;!t||t.tagName!=="VIDEO"||cr()}document.addEventListener("ended",BO,!0),document.addEventListener("play",RO,!0),document.addEventListener("pause",VO,!0);function ks(){try{const e=Ai(),t=or();if(!e||!t||t!==e.items[e.index].sceneId){lr();return}let n=document.getElementById(Ns);n||(n=document.createElement("div"),n.id=Ns,document.body.appendChild(n));const r=t+":"+e.index;if(n.dataset.subtitleMarkersQueueKey===r)return;n.dataset.subtitleMarkersQueueKey=r;const i=e.items[e.index],a=document.querySelector(".video-js video");a&&!a.paused?uf():cr();const s={position:"fixed",right:"16px",bottom:"16px",zIndex:"2000",background:"rgba(0, 0, 0, 0.85)",color:"#fff",padding:"10px 14px",borderRadius:"6px",maxWidth:"320px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.5)"};pt.ReactDOM.render(d.jsxs("div",{className:"subtitle-markers-queue-widget",style:s,children:[d.jsx("div",{className:"subtitle-markers-queue-position",children:d.jsxs("strong",{children:["Marker ",e.index+1," of ",e.items.length]})}),d.jsx("div",{className:"subtitle-markers-queue-text text-truncate",style:{opacity:.85,margin:"4px 0"},children:i.text}),d.jsxs("div",{className:"subtitle-markers-queue-controls",children:[d.jsx(hn,{size:"sm",variant:"secondary",className:"mr-1",disabled:e.index===0,onClick:()=>Li(e,e.index-1),children:"Prev"}),d.jsx(hn,{size:"sm",variant:"secondary",className:"mr-1",disabled:e.index===e.items.length-1,onClick:()=>Li(e,e.index+1),children:"Next"}),d.jsx(hn,{size:"sm",variant:"danger",onClick:()=>{af(),lr()},children:"Stop"})]})]}),n)}catch(e){console.error("[SubtitleMarkers] Failed to update the queue widget:",e),lr()}}new MutationObserver(ks).observe(document.body,{childList:!0,subtree:!0}),ks();const qO=1e3;async function GO(e,t,n){var r,i;try{const s=(n?n(t.clone()):t).clone();s.currentPage=1,s.itemsPerPage=qO;const c=(((i=(r=(await Zm(s)).data)==null?void 0:r.findSceneMarkers)==null?void 0:i.scene_markers)??[]).map(l=>{var f;return{sceneId:l.scene.id,sceneTitle:l.scene.title||`Scene ${l.scene.id}`,seconds:l.seconds,text:l.title||((f=l.primary_tag)==null?void 0:f.name)||""}});of(c)}catch(a){console.error("[SubtitleMarkers] Failed to start the filtered-markers queue:",a)}}pt.patch.before("FilteredSceneMarkerList",e=>{try{const t=e.filterHook,n={text:"Play All (Filtered)",onClick:(r,i)=>GO(r,i,t),isDisplayed:r=>{var i,a;return(((a=(i=r==null?void 0:r.data)==null?void 0:i.findSceneMarkers)==null?void 0:a.count)??0)>0}};return[{...e,extraOperations:[...e.extraOperations||[],n]}]}catch(t){return console.error('[SubtitleMarkers] Failed to add the "Play All (Filtered)" operation:',t),[e]}})})(PluginApi.React,PluginApi.libraries.Apollo,PluginApi.libraries.FontAwesomeSolid,PluginApi.libraries.Bootstrap,PluginApi.libraries.Intl,PluginApi.libraries.ReactFontAwesome,PluginApi.libraries.ReactSelect,PluginApi.ReactDOM,PluginApi.libraries.ReactRouterDOM);
