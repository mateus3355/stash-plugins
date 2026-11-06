var LO=Object.defineProperty;var jO=(O,m,ce)=>m in O?LO(O,m,{enumerable:!0,configurable:!0,writable:!0,value:ce}):O[m]=ce;var X=(O,m,ce)=>jO(O,typeof m!="symbol"?m+"":m,ce);(function(O,m,ce,z,Se,nf,ji,rf,Ke){"use strict";var tf;function Fs(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const K=Fs(O),yn=Fs(m);var lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ns(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function af(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var ks={exports:{}},Sn={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var As=Object.getOwnPropertySymbols,sf=Object.prototype.hasOwnProperty,of=Object.prototype.propertyIsEnumerable;function uf(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function cf(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}cf();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf=O,Ls=60103;if(Sn.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var js=Symbol.for;Ls=js("react.element"),Sn.Fragment=js("react.fragment")}var df=lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ff=Object.prototype.hasOwnProperty,pf={key:!0,ref:!0,__self:!0,__source:!0};function qs(e,t,n){var r,i={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)ff.call(t,r)&&!pf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ls,type:e,key:a,ref:s,props:i,_owner:df.current}}Sn.jsx=qs,Sn.jsxs=qs,ks.exports=Sn;var d=ks.exports;const xn={};var dr=(e=>(e.Cut="CUT",e.Uncut="UNCUT",e))(dr||{}),y=(e=>(e.Between="BETWEEN",e.Equals="EQUALS",e.Excludes="EXCLUDES",e.GreaterThan="GREATER_THAN",e.Includes="INCLUDES",e.IncludesAll="INCLUDES_ALL",e.IsNull="IS_NULL",e.LessThan="LESS_THAN",e.MatchesRegex="MATCHES_REGEX",e.NotBetween="NOT_BETWEEN",e.NotEquals="NOT_EQUALS",e.NotMatchesRegex="NOT_MATCHES_REGEX",e.NotNull="NOT_NULL",e))(y||{}),J=(e=>(e.Galleries="GALLERIES",e.Groups="GROUPS",e.Images="IMAGES",e.Movies="MOVIES",e.Performers="PERFORMERS",e.Scenes="SCENES",e.SceneMarkers="SCENE_MARKERS",e.Studios="STUDIOS",e.Tags="TAGS",e))(J||{}),_e=(e=>(e.Female="FEMALE",e.Intersex="INTERSEX",e.Male="MALE",e.NonBinary="NON_BINARY",e.TransgenderFemale="TRANSGENDER_FEMALE",e.TransgenderMale="TRANSGENDER_MALE",e))(_e||{}),fr=(e=>(e.Landscape="LANDSCAPE",e.Portrait="PORTRAIT",e.Square="SQUARE",e))(fr||{}),je=(e=>(e.EightK="EIGHT_K",e.FiveK="FIVE_K",e.FourK="FOUR_K",e.FullHd="FULL_HD",e.Huge="HUGE",e.Low="LOW",e.QuadHd="QUAD_HD",e.R360P="R360P",e.SevenK="SEVEN_K",e.SixK="SIX_K",e.Standard="STANDARD",e.StandardHd="STANDARD_HD",e.VeryLow="VERY_LOW",e.VrHd="VR_HD",e.WebHd="WEB_HD",e))(je||{}),Ge=(e=>(e.Asc="ASC",e.Desc="DESC",e))(Ge||{});const Bs=m.gql`
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
    `,Rs=m.gql`
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
    `,Vs=m.gql`
    fragment ConfigDLNAData on ConfigDLNAResult {
  serverName
  enabled
  port
  whitelistedIPs
  interfaces
  videoSortOrder
}
    `,Gs=m.gql`
    fragment ConfigScrapingData on ConfigScrapingResult {
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  excludeTagPatterns
}
    `,mf=m.gql`
    fragment ScraperSourceData on ScraperSource {
  stash_box_index
  stash_box_endpoint
  scraper_id
}
    `,gf=m.gql`
    fragment IdentifyFieldOptionsData on IdentifyFieldOptions {
  field
  strategy
  createMissing
}
    `,hf=m.gql`
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
    ${gf}`,Us=m.gql`
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
    ${mf}
${hf}`,vf=m.gql`
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
    ${Bs}
${Rs}
${Vs}
${Gs}
${Us}`;m.gql`
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
    `;const qi=m.gql`
    fragment SelectFolderData on Folder {
  id
  path
  basename
}
    `,bf=m.gql`
    fragment RecursiveFolderData on Folder {
  ...SelectFolderData
  parent_folders {
    ...SelectFolderData
  }
}
    ${qi}`,Bi=m.gql`
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
    `,yf=m.gql`
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
    `,Sf=m.gql`
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
    `,In=m.gql`
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
    `,ot=m.gql`
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
    `,zs=m.gql`
    fragment SlimGroupData on Group {
  id
  name
  front_image_path
  rating100
}
    `,xf=m.gql`
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
    ${In}
${ot}
${zs}`,Hs=m.gql`
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
    `,pr=m.gql`
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
    ${Hs}`,Ws=m.gql`
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
    `,Ys=m.gql`
    fragment FolderData on Folder {
  id
  basename
  path
}
    `,Ri=m.gql`
    fragment GalleryChapterData on GalleryChapter {
  id
  title
  image_index
  gallery {
    id
  }
}
    `,mt=m.gql`
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
    ${ot}`,Qs=m.gql`
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
    `,_n=m.gql`
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
    ${Qs}`,Rt=m.gql`
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
    ${Ws}
${Ys}
${Ri}
${In}
${ot}
${mt}
${_n}`,If=m.gql`
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
${In}
${ot}
${mt}
${Hs}`,Ks=m.gql`
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
    `,Js=m.gql`
    fragment LogEntryData on LogEntry {
  time
  level
  message
}
    `,Vt=m.gql`
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
    `;const _f=m.gql`
    fragment SelectPerformerData on Performer {
  id
  name
  disambiguation
  alias_list
  image_path
  birthdate
  death_date
}
    `,Cf=m.gql`
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
    ${Cf}`,Xs=m.gql`
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
    ${Ws}
${Ys}`,Cn=m.gql`
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
    ${In}
${ot}
${zs}`,It=m.gql`
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
    ${Qs}
${xt}
${Xs}
${In}
${Cn}
${ot}
${mt}`,wf=m.gql`
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
    `,Of=m.gql`
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
    ${Je}`,Vi=m.gql`
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
    ${Je}`,Zs=m.gql`
    fragment ScrapedGroupStudioData on ScrapedStudio {
  stored_id
  name
  urls
}
    `,Ef=m.gql`
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
    ${Zs}
${Je}`,mr=m.gql`
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
    ${Je}`,eo=m.gql`
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
    ${Zs}
${Je}`,Gi=m.gql`
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
    ${mr}
${Je}
${wn}
${eo}`,to=m.gql`
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
    ${mr}
${Je}
${wn}`,no=m.gql`
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
    ${mr}
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
    ${mr}
${Je}
${wn}
${eo}`,m.gql`
    fragment ScrapedStashBoxPerformerData on StashBoxPerformerQueryResult {
  query
  results {
    ...ScrapedScenePerformerData
  }
}
    ${wn}`;const On=m.gql`
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
    ${ot}`,Tf=m.gql`
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
    ${ot}`,Df=m.gql`
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
    `,$f=m.gql`
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
    ${ot}`;m.gql`
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
    ${Bs}`,m.gql`
    mutation ConfigureInterface($input: ConfigInterfaceInput!) {
  configureInterface(input: $input) {
    ...ConfigInterfaceData
  }
}
    ${Rs}`,m.gql`
    mutation ConfigureDLNA($input: ConfigDLNAInput!) {
  configureDLNA(input: $input) {
    ...ConfigDLNAData
  }
}
    ${Vs}`,m.gql`
    mutation ConfigureScraping($input: ConfigScrapingInput!) {
  configureScraping(input: $input) {
    ...ConfigScrapingData
  }
}
    ${Gs}`,m.gql`
    mutation ConfigureDefaults($input: ConfigDefaultSettingsInput!) {
  configureDefaults(input: $input) {
    ...ConfigDefaultSettingsData
  }
}
    ${Us}`,m.gql`
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
    ${Bi}`,m.gql`
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
    ${Ri}`,m.gql`
    mutation GalleryChapterUpdate($id: ID!, $title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterUpdate(
    input: {id: $id, title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${Ri}`,m.gql`
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
    ${Cn}`,m.gql`
    mutation GroupUpdate($input: GroupUpdateInput!) {
  groupUpdate(input: $input) {
    ...GroupData
  }
}
    ${Cn}`,m.gql`
    mutation BulkGroupUpdate($input: BulkGroupUpdateInput!) {
  bulkGroupUpdate(input: $input) {
    ...GroupData
  }
}
    ${Cn}`,m.gql`
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
    ${pr}`,m.gql`
    mutation BulkImageUpdate($input: BulkImageUpdateInput!) {
  bulkImageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${pr}`,m.gql`
    mutation ImagesUpdate($input: [ImageUpdateInput!]!) {
  imagesUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${pr}`,m.gql`
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
    ${mt}`,m.gql`
    mutation PerformerUpdate($input: PerformerUpdateInput!) {
  performerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${mt}`,m.gql`
    mutation BulkPerformerUpdate($input: BulkPerformerUpdateInput!) {
  bulkPerformerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${mt}`,m.gql`
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
    ${On}`,m.gql`
    mutation StudioUpdate($input: StudioUpdateInput!) {
  studioUpdate(input: $input) {
    ...StudioData
  }
}
    ${On}`,m.gql`
    mutation BulkStudioUpdate($input: BulkStudioUpdateInput!) {
  bulkStudioUpdate(input: $input) {
    ...StudioData
  }
}
    ${On}`,m.gql`
    mutation StudioDestroy($id: ID!) {
  studioDestroy(input: {id: $id})
}
    `,m.gql`
    mutation StudiosDestroy($ids: [ID!]!) {
  studiosDestroy(ids: $ids)
}
    `;const Pf=m.gql`
    mutation TagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) {
    ...TagData
  }
}
    ${Gt}`;function Mf(e){const t={...xn,...e};return yn.useMutation(Pf,t)}m.gql`
    mutation TagDestroy($id: ID!) {
  tagDestroy(input: {id: $id})
}
    `,m.gql`
    mutation TagsDestroy($ids: [ID!]!) {
  tagsDestroy(ids: $ids)
}
    `;const Ff=m.gql`
    mutation TagUpdate($input: TagUpdateInput!) {
  tagUpdate(input: $input) {
    ...TagData
  }
}
    ${Gt}`;function Nf(e){const t={...xn,...e};return yn.useMutation(Ff,t)}m.gql`
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
    ${Bi}`,m.gql`
    query FindSavedFilters($mode: FilterMode) {
  findSavedFilters(mode: $mode) {
    ...SavedFilterData
  }
}
    ${Bi}`,m.gql`
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
    ${qi}`,m.gql`
    query FindFoldersForQuery($filter: FindFilterType, $folder_filter: FolderFilterType, $ids: [ID!]) {
  findFolders(filter: $filter, folder_filter: $folder_filter, ids: $ids) {
    count
    folders {
      ...RecursiveFolderData
    }
  }
}
    ${bf}`,m.gql`
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
    ${qi}`;const kf=m.gql`
    query FindGalleries($filter: FindFilterType, $gallery_filter: GalleryFilterType) {
  findGalleries(gallery_filter: $gallery_filter, filter: $filter) {
    count
    galleries {
      ...SlimGalleryData
    }
  }
}
    ${Xs}`;m.gql`
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
    ${yf}`,m.gql`
    query FindGalleryImageID($id: ID!, $index: Int!) {
  findGallery(id: $id) {
    image(index: $index) {
      id
    }
  }
}
    `;const Af=m.gql`
    query FindImages($filter: FindFilterType, $image_filter: ImageFilterType, $image_ids: [Int!]) {
  findImages(filter: $filter, image_filter: $image_filter, image_ids: $image_ids) {
    count
    images {
      ...SlimImageData
    }
  }
}
    ${pr}`;m.gql`
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
    ${If}`,m.gql`
    query JobQueue {
  jobQueue {
    ...JobData
  }
}
    ${Ks}`,m.gql`
    query FindJob($input: FindJobInput!) {
  findJob(input: $input) {
    ...JobData
  }
}
    ${Ks}`,m.gql`
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
    ${Js}`,m.gql`
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
    `;const Lf=m.gql`
    query FindGroups($filter: FindFilterType, $group_filter: GroupFilterType) {
  findGroups(filter: $filter, group_filter: $group_filter) {
    count
    groups {
      ...ListGroupData
    }
  }
}
    ${xf}`;m.gql`
    query FindGroup($id: ID!) {
  findGroup(id: $id) {
    ...GroupData
  }
}
    ${Cn}`,m.gql`
    query FindGroupsForSelect($filter: FindFilterType, $group_filter: GroupFilterType, $ids: [ID!]) {
  findGroups(filter: $filter, group_filter: $group_filter, ids: $ids) {
    count
    groups {
      ...SelectGroupData
    }
  }
}
    ${Sf}`;const jf=m.gql`
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
    ${mt}`;m.gql`
    query FindPerformer($id: ID!) {
  findPerformer(id: $id) {
    ...PerformerData
  }
}
    ${mt}`,m.gql`
    query FindPerformersForSelect($filter: FindFilterType, $performer_filter: PerformerFilterType, $ids: [ID!]) {
  findPerformers(filter: $filter, performer_filter: $performer_filter, ids: $ids) {
    count
    performers {
      ...SelectPerformerData
    }
  }
}
    ${_f}`,m.gql`
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
    ${Vt}`,m.gql`
    query InstalledPluginPackagesStatus {
  installedPackages(type: Plugin) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${Vt}`,m.gql`
    query AvailablePluginPackages($source: String!) {
  availablePackages(source: $source, type: Plugin) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${Vt}`;const ro=m.gql`
    query FindSceneMarkers($filter: FindFilterType, $scene_marker_filter: SceneMarkerFilterType) {
  findSceneMarkers(filter: $filter, scene_marker_filter: $scene_marker_filter) {
    count
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${xt}`,io=m.gql`
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
    ${_n}`;m.gql`
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
    ${_n}`,m.gql`
    query FindDuplicateScenes($distance: Int, $duration_diff: Float) {
  findDuplicateScenes(distance: $distance, duration_diff: $duration_diff) {
    ...SlimSceneData
  }
}
    ${_n}`,m.gql`
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
    ${_n}`,m.gql`
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
    ${wf}`,m.gql`
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
    ${Of}`,m.gql`
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
    ${Vi}`,m.gql`
    query ScrapeMultiPerformers($source: ScraperSourceInput!, $input: ScrapeMultiPerformersInput!) {
  scrapeMultiPerformers(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${Vi}`,m.gql`
    query ScrapePerformerURL($url: String!) {
  scrapePerformerURL(url: $url) {
    ...ScrapedPerformerData
  }
}
    ${Vi}`,m.gql`
    query ScrapeSingleScene($source: ScraperSourceInput!, $input: ScrapeSingleSceneInput!) {
  scrapeSingleScene(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${Gi}`,m.gql`
    query ScrapeMultiScenes($source: ScraperSourceInput!, $input: ScrapeMultiScenesInput!) {
  scrapeMultiScenes(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${Gi}`,m.gql`
    query ScrapeSceneURL($url: String!) {
  scrapeSceneURL(url: $url) {
    ...ScrapedSceneData
  }
}
    ${Gi}`,m.gql`
    query ScrapeSingleGallery($source: ScraperSourceInput!, $input: ScrapeSingleGalleryInput!) {
  scrapeSingleGallery(source: $source, input: $input) {
    ...ScrapedGalleryData
  }
}
    ${to}`,m.gql`
    query ScrapeSingleImage($source: ScraperSourceInput!, $input: ScrapeSingleImageInput!) {
  scrapeSingleImage(source: $source, input: $input) {
    ...ScrapedImageData
  }
}
    ${no}`,m.gql`
    query ScrapeGalleryURL($url: String!) {
  scrapeGalleryURL(url: $url) {
    ...ScrapedGalleryData
  }
}
    ${to}`,m.gql`
    query ScrapeImageURL($url: String!) {
  scrapeImageURL(url: $url) {
    ...ScrapedImageData
  }
}
    ${no}`,m.gql`
    query ScrapeGroupURL($url: String!) {
  scrapeGroupURL(url: $url) {
    ...ScrapedGroupData
  }
}
    ${Ef}`,m.gql`
    query InstalledScraperPackages {
  installedPackages(type: Scraper) {
    ...PackageData
  }
}
    ${Vt}`,m.gql`
    query InstalledScraperPackagesStatus {
  installedPackages(type: Scraper) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${Vt}`,m.gql`
    query AvailableScraperPackages($source: String!) {
  availablePackages(source: $source, type: Scraper) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${Vt}`;const qf=m.gql`
    query Configuration {
  configuration {
    ...ConfigData
  }
}
    ${vf}`;function Bf(e){const t={...xn,...e};return yn.useQuery(qf,t)}const Rf=m.gql`
    query Directory($path: String) {
  directory(path: $path) {
    path
    parent
    directories
  }
}
    `;function Vf(e){const t={...xn,...e};return yn.useQuery(Rf,t)}m.gql`
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
    ${On}`,m.gql`
    query FindStudio($id: ID!) {
  findStudio(id: $id) {
    ...StudioData
  }
}
    ${On}`,m.gql`
    query FindStudiosForSelect($filter: FindFilterType, $studio_filter: StudioFilterType, $ids: [ID!]) {
  findStudios(filter: $filter, studio_filter: $studio_filter, ids: $ids) {
    count
    studios {
      ...SelectStudioData
    }
  }
}
    ${Tf}`;const ao=m.gql`
    query FindTags($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...TagData
    }
  }
}
    ${Gt}`,Gf=m.gql`
    query FindTag($id: ID!) {
  findTag(id: $id) {
    ...TagData
  }
}
    ${Gt}`;function Uf(e){const t={...xn,...e};return yn.useQuery(Gf,t)}const so=m.gql`
    query FindTagsForSelect($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...SelectTagData
    }
  }
}
    ${Df}`;m.gql`
    query FindTagsForList($filter: FindFilterType, $tag_filter: TagFilterType) {
  findTags(filter: $filter, tag_filter: $tag_filter) {
    count
    tags {
      ...TagListData
    }
  }
}
    ${$f}`,m.gql`
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
    ${Js}`;const zf=m.gql`
    subscription ScanCompleteSubscribe {
  scanCompleteSubscribe
}
    `,oo=O.createContext(null),gt=()=>{const e=O.useContext(oo);if(e===null)throw new Error("useConfigurationContext must be used within a ConfigurationProvider");return e},Hf=({configuration:e,children:t})=>d.jsx(oo.Provider,{value:{configuration:e},children:t}),uo={},Wf={},co={},Yf={};function Qf(e,t){if(uo[e])throw new Error("Component "+e+" has already been registered");return uo[e]=t,t}function Kf(e,t,n,r){if(!e.length)return t.apply(n,r);let i=1;function a(){if(i>=e.length)return t;const s=e[i++];return new Proxy(s,{apply:(u,o,c)=>u.apply(o,c.concat(a()))})}return e[0].apply(n,r.concat(a()))}function lo(e,t){return new Proxy(t,{apply(n,r,i){let a;for(const s of Wf[e]||[])i=s.apply(r,i);co[e]?a=Kf(co[e],n,r,i):a=n.apply(r,i);for(const s of Yf[e]||[])a=s.apply(r,i.concat(a));return a}})}function he(e,t){const n=lo(e,t);return Qf(e,n),n}const Te=he("Icon",e=>d.jsx(nf.FontAwesomeIcon,{...e,className:`fa-icon ${e.className??""}`})),Jf=()=>{},Xf=({children:e,show:t,icon:n,header:r,cancel:i,accept:a,onHide:s,isRunning:u,disabled:o,modalProps:c,dialogClassName:l,footerButtons:f,leftFooterButtons:g})=>d.jsxs(z.Modal,{className:"ModalComponent",keyboard:!1,onHide:s??Jf,show:t,dialogClassName:l,...c,children:[d.jsxs(z.Modal.Header,{children:[n?d.jsx(Te,{icon:n}):"",d.jsx("span",{children:r??""})]}),d.jsx(z.Modal.Body,{children:e}),d.jsxs(z.Modal.Footer,{className:"ModalFooter",children:[d.jsx("div",{children:g}),d.jsxs("div",{children:[f,i?d.jsx(z.Button,{disabled:u,variant:i.variant??"primary",onClick:i.onClick,className:"ml-2",children:i.text??d.jsx(Se.FormattedMessage,{id:"actions.cancel",defaultMessage:"Cancel",description:"Cancels the current action and dismisses the modal."})}):"",d.jsx(z.Button,{disabled:u||o,variant:(a==null?void 0:a.variant)??"primary",onClick:a==null?void 0:a.onClick,className:"ml-2",children:u?d.jsx(z.Spinner,{animation:"border",role:"status",size:"sm"}):(a==null?void 0:a.text)??d.jsx(Se.FormattedMessage,{id:"actions.close",defaultMessage:"Close",description:"Closes the current modal."})})]})]})]});function Zf(e){let t="";return e instanceof Error&&(t=e.message),t||(t=String(e)),t||(t="Unknown error"),t}var fo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var a="",s=0;s<arguments.length;s++){var u=arguments[s];u&&(a=i(a,r(u)))}return a}function r(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return n.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var s="";for(var u in a)t.call(a,u)&&a[u]&&(s=i(s,u));return s}function i(a,s){return s?a?a+" "+s:a+s:a}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(fo);var ep=fo.exports;const Ue=Ns(ep),tp=100,np=5e3;let rp=0;const po=O.createContext(null),ip=({children:e})=>{const[t,n]=O.useState(),[r,i]=O.useState(!1),[a,s]=O.useState(!1),u=O.useMemo(()=>{function l(){s(!0)}return!t||a?null:d.jsx(z.Toast,{autohide:!0,onClose:()=>i(!0),className:t.variant??"success",delay:t.delay??3e3,children:d.jsxs(z.Toast.Header,{children:[d.jsx("span",{className:"mr-auto",onClick:()=>l(),children:t.content}),t.variant==="danger"&&d.jsx(z.Button,{variant:"minimal",className:"expand-error-button",onClick:()=>l(),children:d.jsx(Te,{icon:ce.faArrowUpRightFromSquare})})]})},t.id)},[t,a]);function o(l){(r||!t||(l.priority??0)>=(t.priority??0))&&(i(!1),n({...l,id:rp++}))}function c(){const{content:l}=t??{};l&&typeof l=="string"&&navigator.clipboard&&navigator.clipboard.writeText(l)}return d.jsxs(po.Provider,{value:o,children:[e,a&&d.jsx(Xf,{dialogClassName:"toast-expanded-dialog",show:a,accept:{onClick:()=>{n(void 0),s(!1)}},header:d.jsx(Se.FormattedMessage,{id:"errors.header"}),icon:ce.faTriangleExclamation,footerButtons:!!navigator.clipboard&&d.jsx(z.Button,{variant:"secondary",onClick:()=>c(),children:d.jsx(Se.FormattedMessage,{id:"actions.copy_to_clipboard"})}),children:t==null?void 0:t.content}),d.jsx("div",{className:Ue("toast-container row",{hidden:!t||r}),children:u})]})},ap=()=>{const e=O.useContext(po);if(!e)throw new Error("useToast must be used within a ToastProvider");return O.useMemo(()=>({toast:e,success(t){e({content:t})},error(t){const n=Zf(t);console.error(t),e({variant:"danger",content:n,priority:tp,delay:np})}}),[e])};var Ui=function(e,t){return Ui=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Ui(e,t)};function gr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Ui(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var De=function(){return De=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},De.apply(this,arguments)};function Ut(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}typeof SuppressedError=="function"&&SuppressedError;var zi="Invariant Violation",mo=Object.setPrototypeOf,sp=mo===void 0?function(e,t){return e.__proto__=t,e}:mo,go=function(e){gr(t,e);function t(n){n===void 0&&(n=zi);var r=e.call(this,typeof n=="number"?zi+": "+n+" (see https://github.com/apollographql/invariant-packages)":n)||this;return r.framesToPop=1,r.name=zi,sp(r,t.prototype),r}return t}(Error);function _t(e,t){if(!e)throw new go(t)}var ho=["debug","log","warn","error","silent"],op=ho.indexOf("log");function hr(e){return function(){if(ho.indexOf(e)>=op){var t=console[e]||console.log;return t.apply(console,arguments)}}}(function(e){e.debug=hr("debug"),e.log=hr("log"),e.warn=hr("warn"),e.error=hr("error")})(_t||(_t={}));var vo="3.14.1";function zt(e){try{return e()}catch{}}const vr=zt(function(){return globalThis})||zt(function(){return window})||zt(function(){return self})||zt(function(){return global})||zt(function(){return zt.constructor("return this")()});var bo=new Map;function up(e){var t=bo.get(e)||1;return bo.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function cp(e,t){var n=up("stringifyForDisplay");return JSON.stringify(e,function(r,i){return i===void 0?n:i},t).split(JSON.stringify(n)).join("<undefined>")}function br(e){return function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(typeof t=="number"){var i=t;t=Hi(i),t||(t=Wi(i,n),n=[])}e.apply(void 0,[t].concat(n))}}var Ht=Object.assign(function(t,n){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];t||_t(t,Hi(n,r)||Wi(n,r))},{debug:br(_t.debug),log:br(_t.log),warn:br(_t.warn),error:br(_t.error)});function En(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new go(Hi(e,t)||Wi(e,t))}var yo=Symbol.for("ApolloErrorMessageHandler_"+vo);function So(e){if(typeof e=="string")return e;try{return cp(e,2).slice(0,1e3)}catch{return"<non-serializable>"}}function Hi(e,t){if(t===void 0&&(t=[]),!!e)return vr[yo]&&vr[yo](e,t.map(So))}function Wi(e,t){if(t===void 0&&(t=[]),!!e)return"An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:vo,message:e,args:t.map(So)})))}function lp(e,t){if(!!!e)throw new Error(t)}const xo={Name:[],Document:["definitions"],OperationDefinition:["description","name","variableDefinitions","directives","selectionSet"],VariableDefinition:["description","variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["description","name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","directives","locations"],SchemaExtension:["directives","operationTypes"],DirectiveExtension:["name","directives"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"],TypeCoordinate:["name"],MemberCoordinate:["name","memberName"],ArgumentCoordinate:["name","fieldName","argumentName"],DirectiveCoordinate:["name"],DirectiveArgumentCoordinate:["name","argumentName"]},dp=new Set(Object.keys(xo));function Io(e){const t=e==null?void 0:e.kind;return typeof t=="string"&&dp.has(t)}var _o;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(_o||(_o={}));var Yi;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.DIRECTIVE_EXTENSION="DirectiveExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension",e.TYPE_COORDINATE="TypeCoordinate",e.MEMBER_COORDINATE="MemberCoordinate",e.ARGUMENT_COORDINATE="ArgumentCoordinate",e.DIRECTIVE_COORDINATE="DirectiveCoordinate",e.DIRECTIVE_ARGUMENT_COORDINATE="DirectiveArgumentCoordinate"})(Yi||(Yi={}));function Co(e){return e===9||e===32}function fp(e,t){const n=e.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),i=r.length===1,a=r.length>1&&r.slice(1).every(p=>p.length===0||Co(p.charCodeAt(0))),s=n.endsWith('\\"""'),u=e.endsWith('"')&&!s,o=e.endsWith("\\"),c=u||o,l=!i||e.length>70||c||a||s;let f="";const g=i&&Co(e.charCodeAt(0));return(l&&!g||a)&&(f+=`
`),f+=n,(l||c)&&(f+=`
`),'"""'+f+'"""'}const pp=10,wo=2;function mp(e){return yr(e,[])}function yr(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return gp(e,t);default:return String(e)}}function gp(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const n=[...t,e];if(hp(e)){const r=e.toJSON();if(r!==e)return typeof r=="string"?r:yr(r,n)}else if(Array.isArray(e))return bp(e,n);return vp(e,n)}function hp(e){return typeof e.toJSON=="function"}function vp(e,t){const n=Object.entries(e);return n.length===0?"{}":t.length>wo?"["+yp(e)+"]":"{ "+n.map(([i,a])=>i+": "+yr(a,t)).join(", ")+" }"}function bp(e,t){if(e.length===0)return"[]";if(t.length>wo)return"[Array]";const n=Math.min(pp,e.length),r=e.length-n,i=[];for(let a=0;a<n;++a)i.push(yr(e[a],t));return r===1?i.push("... 1 more item"):r>1&&i.push(`... ${r} more items`),"["+i.join(", ")+"]"}function yp(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}function Sp(e){return`"${e.replace(xp,Ip)}"`}const xp=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function Ip(e){return _p[e.charCodeAt(0)]}const _p=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],Cp=Object.freeze({});function wp(e,t,n=xo){const r=new Map;for(const x of Object.values(Yi))r.set(x,Op(t,x));let i,a=Array.isArray(e),s=[e],u=-1,o=[],c=e,l,f;const g=[],p=[];do{u++;const x=u===s.length,v=x&&o.length!==0;if(x){if(l=p.length===0?void 0:g[g.length-1],c=f,f=p.pop(),v)if(a){c=c.slice();let T=0;for(const[C,_]of o){const h=C-T;_===null?(c.splice(h,1),T++):c[h]=_}}else{c={...c};for(const[T,C]of o)c[T]=C}u=i.index,s=i.keys,o=i.edits,a=i.inArray,i=i.prev}else if(f){if(l=a?u:s[u],c=f[l],c==null)continue;g.push(l)}let w;if(!Array.isArray(c)){var I,S;Io(c)||lp(!1,`Invalid AST Node: ${mp(c)}.`);const T=x?(I=r.get(c.kind))===null||I===void 0?void 0:I.leave:(S=r.get(c.kind))===null||S===void 0?void 0:S.enter;if(w=T==null?void 0:T.call(t,c,l,f,g,p),w===Cp)break;if(w===!1){if(!x){g.pop();continue}}else if(w!==void 0&&(o.push([l,w]),!x))if(Io(w))c=w;else{g.pop();continue}}if(w===void 0&&v&&o.push([l,c]),x)g.pop();else{var b;i={inArray:a,index:u,keys:s,edits:o,prev:i},a=Array.isArray(c),s=a?c:(b=n[c.kind])!==null&&b!==void 0?b:[],u=-1,o=[],f&&p.push(f),f=c}}while(i!==void 0);return o.length!==0?o[o.length-1][1]:e}function Op(e,t){const n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function Ep(e){return wp(e,Dp)}const Tp=80,Dp={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>N(e.definitions,`

`)},OperationDefinition:{leave(e){const t=Qi(e.variableDefinitions)?Q(`(
`,N(e.variableDefinitions,`
`),`
)`):Q("(",N(e.variableDefinitions,", "),")"),n=Q("",e.description,`
`)+N([e.operation,N([e.name,t]),N(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r,description:i})=>Q("",i,`
`)+e+": "+t+Q(" = ",n)+Q(" ",N(r," "))},SelectionSet:{leave:({selections:e})=>Xe(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:i}){const a=Q("",e,": ")+t;let s=a+Q("(",N(n,", "),")");return s.length>Tp&&(s=a+Q(`(
`,Sr(N(n,`
`)),`
)`)),N([s,N(r," "),i]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+Q(" ",N(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>N(["...",Q("on ",e),N(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:i,description:a})=>Q("",a,`
`)+`fragment ${e}${Q("(",N(n,", "),")")} on ${t} ${Q("",N(r," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?fp(e):Sp(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+N(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+N(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+Q("(",N(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>Q("",e,`
`)+N(["schema",N(t," "),Xe(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>Q("",e,`
`)+N(["scalar",t,N(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>Q("",e,`
`)+N(["type",t,Q("implements ",N(n," & ")),N(r," "),Xe(i)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:i})=>Q("",e,`
`)+t+(Qi(n)?Q(`(
`,Sr(N(n,`
`)),`
)`):Q("(",N(n,", "),")"))+": "+r+Q(" ",N(i," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:i})=>Q("",e,`
`)+N([t+": "+n,Q("= ",r),N(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>Q("",e,`
`)+N(["interface",t,Q("implements ",N(n," & ")),N(r," "),Xe(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>Q("",e,`
`)+N(["union",t,N(n," "),Q("= ",N(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>Q("",e,`
`)+N(["enum",t,N(n," "),Xe(r)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>Q("",e,`
`)+N([t,N(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>Q("",e,`
`)+N(["input",t,N(n," "),Xe(r)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,directives:r,repeatable:i,locations:a})=>Q("",e,`
`)+"directive @"+t+(Qi(n)?Q(`(
`,Sr(N(n,`
`)),`
)`):Q("(",N(n,", "),")"))+Q(" ",N(r," "))+(i?" repeatable":"")+" on "+N(a," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>N(["extend schema",N(e," "),Xe(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>N(["extend scalar",e,N(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>N(["extend type",e,Q("implements ",N(t," & ")),N(n," "),Xe(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>N(["extend interface",e,Q("implements ",N(t," & ")),N(n," "),Xe(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>N(["extend union",e,N(t," "),Q("= ",N(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>N(["extend enum",e,N(t," "),Xe(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>N(["extend input",e,N(t," "),Xe(n)]," ")},DirectiveExtension:{leave:({name:e,directives:t})=>N(["extend directive @"+e,N(t," ")]," ")},TypeCoordinate:{leave:({name:e})=>e},MemberCoordinate:{leave:({name:e,memberName:t})=>N([e,Q(".",t)])},ArgumentCoordinate:{leave:({name:e,fieldName:t,argumentName:n})=>N([e,Q(".",t),Q("(",n,":)")])},DirectiveCoordinate:{leave:({name:e})=>N(["@",e])},DirectiveArgumentCoordinate:{leave:({name:e,argumentName:t})=>N(["@",e,Q("(",t,":)")])}};function N(e,t=""){var n;return(n=e==null?void 0:e.filter(r=>r).join(t))!==null&&n!==void 0?n:""}function Xe(e){return Q(`{
`,Sr(N(e,`
`)),`
}`)}function Q(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function Sr(e){return Q("  ",e.replace(/\n/g,`
  `))}function Qi(e){var t;return(t=e==null?void 0:e.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}function Ki(e){return e!==null&&typeof e=="object"}function $p(){}class Oo{constructor(t=1/0,n=$p){this.max=t,this.dispose=n,this.map=new Map,this.newest=null,this.oldest=null}has(t){return this.map.has(t)}get(t){const n=this.getNode(t);return n&&n.value}get size(){return this.map.size}getNode(t){const n=this.map.get(t);if(n&&n!==this.newest){const{older:r,newer:i}=n;i&&(i.older=r),r&&(r.newer=i),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=i)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(t,r),r.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(t){const n=this.map.get(t);return n?(n===this.newest&&(this.newest=n.older),n===this.oldest&&(this.oldest=n.newer),n.newer&&(n.newer.older=n.older),n.older&&(n.older.newer=n.newer),this.map.delete(t),this.dispose(n.value,t),!0):!1}}function Ji(){}const Pp=Ji,Mp=typeof WeakRef<"u"?WeakRef:function(e){return{deref:()=>e}},Fp=typeof WeakMap<"u"?WeakMap:Map,Np=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:Ji,unregister:Ji}},kp=10024;class Eo{constructor(t=1/0,n=Pp){this.max=t,this.dispose=n,this.map=new Fp,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{const r=this.unfinalizedNodes.values();for(let i=0;i<kp;i++){const a=r.next().value;if(!a)break;this.unfinalizedNodes.delete(a);const s=a.key;delete a.key,a.keyRef=new Mp(s),this.registry.register(s,a,a)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new Np(this.deleteNode.bind(this))}has(t){return this.map.has(t)}get(t){const n=this.getNode(t);return n&&n.value}getNode(t){const n=this.map.get(t);if(n&&n!==this.newest){const{older:r,newer:i}=n;i&&(i.older=r),r&&(r.newer=i),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=i)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.scheduleFinalization(r),this.map.set(t,r),this.size++,r.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(t){t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.size--;const n=t.key||t.keyRef&&t.keyRef.deref();this.dispose(t.value,n),t.keyRef?this.registry.unregister(t):this.unfinalizedNodes.delete(t),n&&this.map.delete(n)}delete(t){const n=this.map.get(t);return n?(this.deleteNode(n),!0):!1}scheduleFinalization(t){this.unfinalizedNodes.add(t),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}}var Xi=new WeakSet;function To(e){e.size<=(e.max||-1)||Xi.has(e)||(Xi.add(e),setTimeout(function(){e.clean(),Xi.delete(e)},100))}var Ap=function(e,t){var n=new Eo(e,t);return n.set=function(r,i){var a=Eo.prototype.set.call(this,r,i);return To(this),a},n},Lp=function(e,t){var n=new Oo(e,t);return n.set=function(r,i){var a=Oo.prototype.set.call(this,r,i);return To(this),a},n},jp=Symbol.for("apollo.cacheSize"),Do=De({},vr[jp]),qp={};function $o(e,t){qp[e]=t}var Po=Object.assign(function(t){return JSON.stringify(t,Bp)},{reset:function(){Wt=new Lp(Do.canonicalStringify||1e3)}});globalThis.__DEV__!==!1&&$o("canonicalStringify",function(){return Wt.size});var Wt;Po.reset();function Bp(e,t){if(t&&typeof t=="object"){var n=Object.getPrototypeOf(t);if(n===Object.prototype||n===null){var r=Object.keys(t);if(r.every(Rp))return t;var i=JSON.stringify(r),a=Wt.get(i);if(!a){r.sort();var s=JSON.stringify(r);a=Wt.get(s)||r,Wt.set(i,a),Wt.set(s,a)}var u=Object.create(n);return a.forEach(function(o){u[o]=t[o]}),u}}return t}function Rp(e,t,n){return t===0||n[t-1]<=e}var Vp=["connection","include","skip","client","rest","export","nonreactive"],Tn=Po;Object.assign(function(e,t,n){if(t&&n&&n.connection&&n.connection.key)if(n.connection.filter&&n.connection.filter.length>0){var r=n.connection.filter?n.connection.filter:[];r.sort();var i={};return r.forEach(function(u){i[u]=t[u]}),"".concat(n.connection.key,"(").concat(Tn(i),")")}else return n.connection.key;var a=e;if(t){var s=Tn(t);a+="(".concat(s,")")}return n&&Object.keys(n).forEach(function(u){Vp.indexOf(u)===-1&&(n[u]&&Object.keys(n[u]).length?a+="@".concat(u,"(").concat(Tn(n[u]),")"):a+="@".concat(u))}),a},{setStringify:function(e){var t=Tn;return Tn=e,t}});function Gp(e){return e.kind==="Field"}function Mo(e){Ht(e&&e.kind==="Document",115);var t=e.definitions.filter(function(n){return n.kind!=="FragmentDefinition"}).map(function(n){if(n.kind!=="OperationDefinition")throw En(116,n.kind);return n});return Ht(t.length<=1,117,t.length),e}function Up(e){return Mo(e),e.definitions.filter(function(t){return t.kind==="OperationDefinition"})[0]}function zp(e){return e.definitions.filter(function(t){return t.kind==="OperationDefinition"&&!!t.name}).map(function(t){return t.name.value})[0]||null}function Hp(e){var t=Up(e);return Ht(t&&t.operation==="query",118),t}function Wp(e){Mo(e);for(var t,n=0,r=e.definitions;n<r.length;n++){var i=r[n];if(i.kind==="OperationDefinition"){var a=i.operation;if(a==="query"||a==="mutation"||a==="subscription")return i}i.kind==="FragmentDefinition"&&!t&&(t=i)}if(t)return t;throw En(122)}let Ne=null;const Fo={};let Yp=1;const Qp=()=>class{constructor(){this.id=["slot",Yp++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let t=Ne;t;t=t.parent)if(this.id in t.slots){const n=t.slots[this.id];if(n===Fo)break;return t!==Ne&&(Ne.slots[this.id]=n),!0}return Ne&&(Ne.slots[this.id]=Fo),!1}getValue(){if(this.hasValue())return Ne.slots[this.id]}withValue(t,n,r,i){const a={__proto__:null,[this.id]:t},s=Ne;Ne={parent:s,slots:a};try{return n.apply(i,r)}finally{Ne=s}}static bind(t){const n=Ne;return function(){const r=Ne;try{return Ne=n,t.apply(this,arguments)}finally{Ne=r}}}static noContext(t,n,r){if(Ne){const i=Ne;try{return Ne=null,t.apply(r,n)}finally{Ne=i}}else return t.apply(r,n)}};function No(e){try{return e()}catch{}}const Zi="@wry/context:Slot",ko=No(()=>globalThis)||No(()=>global)||Object.create(null),ea=ko[Zi]||Array[Zi]||function(e){try{Object.defineProperty(ko,Zi,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}}(Qp()),{bind:BO,noContext:RO}=ea;new ea;var Dn,ta=Object.assign(function(e){var t=Dn.get(e);return t||(t=Ep(e),Dn.set(e,t)),t},{reset:function(){Dn=new Ap(Do.print||2e3)}});ta.reset(),globalThis.__DEV__!==!1&&$o("print",function(){return Dn?Dn.size:0});function Kp(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=Jp(e))||t){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jp(e,t){if(e){if(typeof e=="string")return Ao(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ao(e,t)}}function Ao(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Lo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function na(e,t,n){return t&&Lo(e.prototype,t),n&&Lo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var ra=function(){return typeof Symbol=="function"},ia=function(e){return ra()&&!!Symbol[e]},aa=function(e){return ia(e)?Symbol[e]:"@@"+e};ra()&&!ia("observable")&&(Symbol.observable=Symbol("observable"));var Xp=aa("iterator"),sa=aa("observable"),jo=aa("species");function xr(e,t){var n=e[t];if(n!=null){if(typeof n!="function")throw new TypeError(n+" is not a function");return n}}function $n(e){var t=e.constructor;return t!==void 0&&(t=t[jo],t===null&&(t=void 0)),t!==void 0?t:we}function Zp(e){return e instanceof we}function Yt(e){Yt.log?Yt.log(e):setTimeout(function(){throw e})}function Ir(e){Promise.resolve().then(function(){try{e()}catch(t){Yt(t)}})}function qo(e){var t=e._cleanup;if(t!==void 0&&(e._cleanup=void 0,!!t))try{if(typeof t=="function")t();else{var n=xr(t,"unsubscribe");n&&n.call(t)}}catch(r){Yt(r)}}function oa(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function em(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var n=0;n<t.length&&(Bo(e,t[n].type,t[n].value),e._state!=="closed");++n);}}function Bo(e,t,n){e._state="running";var r=e._observer;try{var i=xr(r,t);switch(t){case"next":i&&i.call(r,n);break;case"error":if(oa(e),i)i.call(r,n);else throw n;break;case"complete":oa(e),i&&i.call(r);break}}catch(a){Yt(a)}e._state==="closed"?qo(e):e._state==="running"&&(e._state="ready")}function ua(e,t,n){if(e._state!=="closed"){if(e._state==="buffering"){e._queue.push({type:t,value:n});return}if(e._state!=="ready"){e._state="buffering",e._queue=[{type:t,value:n}],Ir(function(){return em(e)});return}Bo(e,t,n)}}var tm=function(){function e(n,r){this._cleanup=void 0,this._observer=n,this._queue=void 0,this._state="initializing";var i=new nm(this);try{this._cleanup=r.call(void 0,i)}catch(a){i.error(a)}this._state==="initializing"&&(this._state="ready")}var t=e.prototype;return t.unsubscribe=function(){this._state!=="closed"&&(oa(this),qo(this))},na(e,[{key:"closed",get:function(){return this._state==="closed"}}]),e}(),nm=function(){function e(n){this._subscription=n}var t=e.prototype;return t.next=function(r){ua(this._subscription,"next",r)},t.error=function(r){ua(this._subscription,"error",r)},t.complete=function(){ua(this._subscription,"complete")},na(e,[{key:"closed",get:function(){return this._subscription._state==="closed"}}]),e}(),we=function(){function e(n){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if(typeof n!="function")throw new TypeError("Observable initializer must be a function");this._subscriber=n}var t=e.prototype;return t.subscribe=function(r){return(typeof r!="object"||r===null)&&(r={next:r,error:arguments[1],complete:arguments[2]}),new tm(r,this._subscriber)},t.forEach=function(r){var i=this;return new Promise(function(a,s){if(typeof r!="function"){s(new TypeError(r+" is not a function"));return}function u(){o.unsubscribe(),a()}var o=i.subscribe({next:function(c){try{r(c,u)}catch(l){s(l),o.unsubscribe()}},error:s,complete:a})})},t.map=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=$n(this);return new a(function(s){return i.subscribe({next:function(u){try{u=r(u)}catch(o){return s.error(o)}s.next(u)},error:function(u){s.error(u)},complete:function(){s.complete()}})})},t.filter=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=$n(this);return new a(function(s){return i.subscribe({next:function(u){try{if(!r(u))return}catch(o){return s.error(o)}s.next(u)},error:function(u){s.error(u)},complete:function(){s.complete()}})})},t.reduce=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=$n(this),s=arguments.length>1,u=!1,o=arguments[1],c=o;return new a(function(l){return i.subscribe({next:function(f){var g=!u;if(u=!0,!g||s)try{c=r(c,f)}catch(p){return l.error(p)}else c=f},error:function(f){l.error(f)},complete:function(){if(!u&&!s)return l.error(new TypeError("Cannot reduce an empty sequence"));l.next(c),l.complete()}})})},t.concat=function(){for(var r=this,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];var u=$n(this);return new u(function(o){var c,l=0;function f(g){c=g.subscribe({next:function(p){o.next(p)},error:function(p){o.error(p)},complete:function(){l===a.length?(c=void 0,o.complete()):f(u.from(a[l++]))}})}return f(r),function(){c&&(c.unsubscribe(),c=void 0)}})},t.flatMap=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var a=$n(this);return new a(function(s){var u=[],o=i.subscribe({next:function(l){if(r)try{l=r(l)}catch(g){return s.error(g)}var f=a.from(l).subscribe({next:function(g){s.next(g)},error:function(g){s.error(g)},complete:function(){var g=u.indexOf(f);g>=0&&u.splice(g,1),c()}});u.push(f)},error:function(l){s.error(l)},complete:function(){c()}});function c(){o.closed&&u.length===0&&s.complete()}return function(){u.forEach(function(l){return l.unsubscribe()}),o.unsubscribe()}})},t[sa]=function(){return this},e.from=function(r){var i=typeof this=="function"?this:e;if(r==null)throw new TypeError(r+" is not an object");var a=xr(r,sa);if(a){var s=a.call(r);if(Object(s)!==s)throw new TypeError(s+" is not an object");return Zp(s)&&s.constructor===i?s:new i(function(u){return s.subscribe(u)})}if(ia("iterator")&&(a=xr(r,Xp),a))return new i(function(u){Ir(function(){if(!u.closed){for(var o=Kp(a.call(r)),c;!(c=o()).done;){var l=c.value;if(u.next(l),u.closed)return}u.complete()}})});if(Array.isArray(r))return new i(function(u){Ir(function(){if(!u.closed){for(var o=0;o<r.length;++o)if(u.next(r[o]),u.closed)return;u.complete()}})});throw new TypeError(r+" is not observable")},e.of=function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var s=typeof this=="function"?this:e;return new s(function(u){Ir(function(){if(!u.closed){for(var o=0;o<i.length;++o)if(u.next(i[o]),u.closed)return;u.complete()}})})},na(e,null,[{key:jo,get:function(){return this}}]),e}();ra()&&Object.defineProperty(we,Symbol("extensions"),{value:{symbol:sa,hostReportError:Yt},configurable:!0});function rm(e){var t,n=e.Symbol;if(typeof n=="function")if(n.observable)t=n.observable;else{typeof n.for=="function"?t=n.for("https://github.com/benlesh/symbol-observable"):t=n("https://github.com/benlesh/symbol-observable");try{n.observable=t}catch{}}else t="@@observable";return t}var Qt;typeof self<"u"?Qt=self:typeof window<"u"?Qt=window:typeof global<"u"?Qt=global:typeof module<"u"?Qt=module:Qt=Function("return this")(),rm(Qt);var Ro=we.prototype,Vo="@@observable";Ro[Vo]||(Ro[Vo]=function(){return this});var ca,im=Symbol.for("apollo.deprecations"),Go=Symbol.for("apollo.deprecations.slot"),la=vr,am=(ca=la[Go])!==null&&ca!==void 0?ca:la[Go]=new ea;function sm(e){return la[im]||(am.getValue()||[]).includes(e)}function om(e,t){sm(e)||t()}var Uo=function(e,t,n){var r=new Error(n);throw r.name="ServerError",r.response=e,r.statusCode=e.status,r.result=t,r};function um(e){for(var t=["query","operationName","variables","extensions","context"],n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];if(t.indexOf(i)<0)throw En(58,i)}return e}function cm(e,t){var n=De({},e),r=function(a){typeof a=="function"?n=De(De({},n),a(n)):n=De(De({},n),a)},i=function(){return De({},n)};return Object.defineProperty(t,"setContext",{enumerable:!1,value:r}),Object.defineProperty(t,"getContext",{enumerable:!1,value:i}),t}function lm(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName=typeof t.query!="string"?zp(t.query)||void 0:""),t}function zo(e,t){return t?t(e):we.of()}function Pn(e){return typeof e=="function"?new Mn(e):e}function _r(e){return e.request.length<=1}var Mn=function(){function e(t){t&&(this.request=t)}return e.empty=function(){return new e(function(){return we.of()})},e.from=function(t){return t.length===0?e.empty():t.map(Pn).reduce(function(n,r){return n.concat(r)})},e.split=function(t,n,r){var i=Pn(n),a=Pn(r||new e(zo)),s;return _r(i)&&_r(a)?s=new e(function(u){return t(u)?i.request(u)||we.of():a.request(u)||we.of()}):s=new e(function(u,o){return t(u)?i.request(u,o)||we.of():a.request(u,o)||we.of()}),Object.assign(s,{left:i,right:a})},e.execute=function(t,n){return t.request(cm(n.context,lm(um(n))))||we.of()},e.concat=function(t,n){var r=Pn(t);if(_r(r))return globalThis.__DEV__!==!1&&Ht.warn(47,r),r;var i=Pn(n),a;return _r(i)?a=new e(function(s){return r.request(s,function(u){return i.request(u)||we.of()})||we.of()}):a=new e(function(s,u){return r.request(s,function(o){return i.request(o,u)||we.of()})||we.of()}),Object.assign(a,{left:r,right:i})},e.prototype.split=function(t,n,r){return this.concat(e.split(t,n,r||new e(zo)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(t,n){throw En(48)},e.prototype.onError=function(t,n){if(globalThis.__DEV__!==!1&&om("onError",function(){globalThis.__DEV__!==!1&&Ht.warn(49)}),n&&n.error)return n.error(t),!1;throw t},e.prototype.setOnError=function(t){return globalThis.__DEV__!==!1&&globalThis.__DEV__!==!1&&Ht.warn(50),this.onError=t,this},e}(),Ho=Symbol();function dm(e){return e.extensions?Array.isArray(e.extensions[Ho]):!1}var fm=function(e){var t=Ut(Ut(Ut([],e.graphQLErrors,!0),e.clientErrors,!0),e.protocolErrors,!0);return e.networkError&&t.push(e.networkError),t.map(function(n){return Ki(n)&&n.message||"Error message not found."}).join(`
`)},pm=function(e){gr(t,e);function t(n){var r=n.graphQLErrors,i=n.protocolErrors,a=n.clientErrors,s=n.networkError,u=n.errorMessage,o=n.extraInfo,c=e.call(this,u)||this;return c.name="ApolloError",c.graphQLErrors=r||[],c.protocolErrors=i||[],c.clientErrors=a||[],c.networkError=s||null,c.message=u||fm(c),c.extraInfo=o,c.cause=Ut(Ut(Ut([s],r||[],!0),i||[],!0),a||[],!0).find(function(l){return!!l})||null,c.__proto__=t.prototype,c}return t}(Error);function mm(e){return Ki(e)&&"code"in e&&"reason"in e}function gm(e){var t;return Ki(e)&&((t=e.target)===null||t===void 0?void 0:t.readyState)===WebSocket.CLOSED}var hm=function(e){gr(t,e);function t(n){var r=e.call(this)||this;return r.client=n,r}return t.prototype.request=function(n){var r=this;return new we(function(i){return r.client.subscribe(De(De({},n),{query:ta(n.query)}),{next:i.next.bind(i),complete:i.complete.bind(i),error:function(a){if(a instanceof Error)return i.error(a);var s=mm(a);return s||gm(a)?i.error(new Error("Socket closed".concat(s?" with event ".concat(a.code):"").concat(s?" ".concat(a.reason):""))):i.error(new pm({graphQLErrors:Array.isArray(a)?a:[a]}))}})})},t}(Mn);function Re(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function Ct(e){return Re(e)==="object"}function vm(e){return Array.isArray(e)&&e.length>0&&e.every(t=>"message"in t)}function Wo(e,t){return e.length<124?e:t}const bm="graphql-transport-ws";var ze;(function(e){e[e.InternalServerError=4500]="InternalServerError",e[e.InternalClientError=4005]="InternalClientError",e[e.BadRequest=4400]="BadRequest",e[e.BadResponse=4004]="BadResponse",e[e.Unauthorized=4401]="Unauthorized",e[e.Forbidden=4403]="Forbidden",e[e.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",e[e.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",e[e.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",e[e.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",e[e.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests"})(ze||(ze={}));var xe;(function(e){e.ConnectionInit="connection_init",e.ConnectionAck="connection_ack",e.Ping="ping",e.Pong="pong",e.Subscribe="subscribe",e.Next="next",e.Error="error",e.Complete="complete"})(xe||(xe={}));function Yo(e){if(!Ct(e))throw new Error(`Message is expected to be an object, but got ${Re(e)}`);if(!e.type)throw new Error("Message is missing the 'type' property");if(typeof e.type!="string")throw new Error(`Message is expects the 'type' property to be a string, but got ${Re(e.type)}`);switch(e.type){case xe.ConnectionInit:case xe.ConnectionAck:case xe.Ping:case xe.Pong:{if(e.payload!=null&&!Ct(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);break}case xe.Subscribe:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Re(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!Ct(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Re(e.payload)}`);if(typeof e.payload.query!="string")throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${Re(e.payload.query)}`);if(e.payload.variables!=null&&!Ct(e.payload.variables))throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Re(e.payload.variables)}`);if(e.payload.operationName!=null&&Re(e.payload.operationName)!=="string")throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Re(e.payload.operationName)}`);if(e.payload.extensions!=null&&!Ct(e.payload.extensions))throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Re(e.payload.extensions)}`);break}case xe.Next:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Re(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!Ct(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Re(e.payload)}`);break}case xe.Error:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Re(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!vm(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);break}case xe.Complete:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Re(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);break}default:throw new Error(`Invalid message 'type' property "${e.type}"`)}return e}function ym(e,t){return Yo(typeof e=="string"?JSON.parse(e,t):e)}function Fn(e,t){return Yo(e),JSON.stringify(e,t)}var Kt=function(e){return this instanceof Kt?(this.v=e,this):new Kt(e)},Sm=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,a=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(p){return function(I){return Promise.resolve(I).then(p,f)}}function u(p,I){r[p]&&(i[p]=function(S){return new Promise(function(b,x){a.push([p,S,b,x])>1||o(p,S)})},I&&(i[p]=I(i[p])))}function o(p,I){try{c(r[p](I))}catch(S){g(a[0][3],S)}}function c(p){p.value instanceof Kt?Promise.resolve(p.value.v).then(l,f):g(a[0][2],p)}function l(p){o("next",p)}function f(p){o("throw",p)}function g(p,I){p(I),a.shift(),a.length&&o(a[0][0],a[0][1])}};function xm(e){const{url:t,connectionParams:n,lazy:r=!0,onNonLazyError:i=console.error,lazyCloseTimeout:a=0,keepAlive:s=0,disablePong:u,connectionAckWaitTimeout:o=0,retryAttempts:c=5,retryWait:l=async function(L){let k=1e3;for(let U=0;U<L;U++)k*=2;await new Promise(U=>setTimeout(U,k+Math.floor(Math.random()*2700+300)))},shouldRetry:f=da,isFatalConnectionProblem:g,on:p,webSocketImpl:I,generateID:S=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,L=>{const k=Math.random()*16|0;return(L=="x"?k:k&3|8).toString(16)})},jsonMessageReplacer:b,jsonMessageReviver:x}=e;let v;if(I){if(!_m(I))throw new Error("Invalid WebSocket implementation provided");v=I}else typeof WebSocket<"u"?v=WebSocket:typeof global<"u"?v=global.WebSocket||global.MozWebSocket:typeof window<"u"&&(v=window.WebSocket||window.MozWebSocket);if(!v)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const w=v,T=(()=>{const M=(()=>{const k={};return{on(U,te){return k[U]=te,()=>{delete k[U]}},emit(U){var te;"id"in U&&((te=k[U.id])===null||te===void 0||te.call(k,U))}}})(),L={connecting:p!=null&&p.connecting?[p.connecting]:[],opened:p!=null&&p.opened?[p.opened]:[],connected:p!=null&&p.connected?[p.connected]:[],ping:p!=null&&p.ping?[p.ping]:[],pong:p!=null&&p.pong?[p.pong]:[],message:p!=null&&p.message?[M.emit,p.message]:[M.emit],closed:p!=null&&p.closed?[p.closed]:[],error:p!=null&&p.error?[p.error]:[]};return{onMessage:M.on,on(k,U){const te=L[k];return te.push(U),()=>{te.splice(te.indexOf(U),1)}},emit(k,...U){for(const te of[...L[k]])te(...U)}}})();function C(M){const L=[T.on("error",k=>{L.forEach(U=>U()),M(k)}),T.on("closed",k=>{L.forEach(U=>U()),M(k)})]}let _,h=0,E,D=!1,$=0,R=!1;async function W(){clearTimeout(E);const[M,L]=await(_??(_=new Promise((te,ue)=>(async()=>{if(D){if(await l($),!h)return _=void 0,ue({code:1e3,reason:"All Subscriptions Gone"});$++}T.emit("connecting",D);const F=new w(typeof t=="function"?await t():t,bm);let q,Y;function P(){isFinite(s)&&s>0&&(clearTimeout(Y),Y=setTimeout(()=>{F.readyState===w.OPEN&&(F.send(Fn({type:xe.Ping})),T.emit("ping",!1,void 0))},s))}C(B=>{_=void 0,clearTimeout(q),clearTimeout(Y),ue(B),B instanceof Qo&&(F.close(4499,"Terminated"),F.onerror=null,F.onclose=null)}),F.onerror=B=>T.emit("error",B),F.onclose=B=>T.emit("closed",B),F.onopen=async()=>{try{T.emit("opened",F);const B=typeof n=="function"?await n():n;if(F.readyState!==w.OPEN)return;F.send(Fn(B?{type:xe.ConnectionInit,payload:B}:{type:xe.ConnectionInit},b)),isFinite(o)&&o>0&&(q=setTimeout(()=>{F.close(ze.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")},o)),P()}catch(B){T.emit("error",B),F.close(ze.InternalClientError,Wo(B instanceof Error?B.message:new Error(B).message,"Internal client error"))}};let j=!1;F.onmessage=({data:B})=>{try{const A=ym(B,x);if(T.emit("message",A),A.type==="ping"||A.type==="pong"){T.emit(A.type,!0,A.payload),A.type==="pong"?P():u||(F.send(Fn(A.payload?{type:xe.Pong,payload:A.payload}:{type:xe.Pong})),T.emit("pong",!1,A.payload));return}if(j)return;if(A.type!==xe.ConnectionAck)throw new Error(`First message cannot be of type ${A.type}`);clearTimeout(q),j=!0,T.emit("connected",F,A.payload,D),D=!1,$=0,te([F,new Promise((ae,Fe)=>C(Fe))])}catch(A){F.onmessage=null,T.emit("error",A),F.close(ze.BadResponse,Wo(A instanceof Error?A.message:new Error(A).message,"Bad response"))}}})())));M.readyState===w.CLOSING&&await L;let k=()=>{};const U=new Promise(te=>k=te);return[M,k,Promise.race([U.then(()=>{if(!h){const te=()=>M.close(1e3,"Normal Closure");isFinite(a)&&a>0?E=setTimeout(()=>{M.readyState===w.OPEN&&te()},a):te()}}),L])]}function ne(M){if(da(M)&&(Im(M.code)||[ze.InternalServerError,ze.InternalClientError,ze.BadRequest,ze.BadResponse,ze.Unauthorized,ze.SubprotocolNotAcceptable,ze.SubscriberAlreadyExists,ze.TooManyInitialisationRequests].includes(M.code)))throw M;if(R)return!1;if(da(M)&&M.code===1e3)return h>0;if(!c||$>=c||!f(M)||g!=null&&g(M))throw M;return D=!0}r||(async()=>{for(h++;;)try{const[,,M]=await W();await M}catch(M){try{if(!ne(M))return}catch(L){return i==null?void 0:i(L)}}})();function ee(M,L){const k=S(M);let U=!1,te=!1,ue=()=>{h--,U=!0};return(async()=>{for(h++;;)try{const[F,q,Y]=await W();if(U)return q();const P=T.onMessage(k,j=>{switch(j.type){case xe.Next:{L.next(j.payload);return}case xe.Error:{te=!0,U=!0,L.error(j.payload),ue();return}case xe.Complete:{U=!0,ue();return}}});F.send(Fn({id:k,type:xe.Subscribe,payload:M},b)),ue=()=>{!U&&F.readyState===w.OPEN&&F.send(Fn({id:k,type:xe.Complete},b)),h--,U=!0,q()},await Y.finally(P);return}catch(F){if(!ne(F))return}})().then(()=>{te||L.complete()}).catch(F=>{L.error(F)}),()=>{U||ue()}}return{on:T.on,subscribe:ee,iterate(M){const L=[],k={done:!1,error:null,resolve:()=>{}},U=ee(M,{next(ue){L.push(ue),k.resolve()},error(ue){k.done=!0,k.error=ue,k.resolve()},complete(){k.done=!0,k.resolve()}}),te=function(){return Sm(this,arguments,function*(){for(;;){for(L.length||(yield Kt(new Promise(q=>k.resolve=q)));L.length;)yield yield Kt(L.shift());if(k.error)throw k.error;if(k.done)return yield Kt(void 0)}})}();return te.throw=async ue=>(k.done||(k.done=!0,k.error=ue,k.resolve()),{done:!0,value:void 0}),te.return=async()=>(U(),{done:!0,value:void 0}),te},async dispose(){if(R=!0,_){const[M]=await _;M.close(1e3,"Normal Closure")}},terminate(){_&&T.emit("closed",new Qo)}}}class Qo extends Error{constructor(){super(...arguments),this.name="TerminatedCloseEvent",this.message="4499: Terminated",this.code=4499,this.reason="Terminated",this.wasClean=!1}}function da(e){return Ct(e)&&"code"in e&&"reason"in e}function Im(e){return[1e3,1001,1006,1005,1012,1013,1014].includes(e)?!1:e>=1e3&&e<=1999}function _m(e){return typeof e=="function"&&"constructor"in e&&"CLOSED"in e&&"CLOSING"in e&&"CONNECTING"in e&&"OPEN"in e}function Ko(e){return new Mn(function(t,n){return new we(function(r){var i,a,s;try{i=n(t).subscribe({next:function(u){if(u.errors?s=e({graphQLErrors:u.errors,response:u,operation:t,forward:n}):dm(u)&&(s=e({protocolErrors:u.extensions[Ho],response:u,operation:t,forward:n})),s){a=s.subscribe({next:r.next.bind(r),error:r.error.bind(r),complete:r.complete.bind(r)});return}r.next(u)},error:function(u){if(s=e({operation:t,networkError:u,graphQLErrors:u&&u.result&&u.result.errors||void 0,forward:n}),s){a=s.subscribe({next:r.next.bind(r),error:r.error.bind(r),complete:r.complete.bind(r)});return}r.error(u)},complete:function(){s||r.complete.bind(r)()}})}catch(u){e({networkError:u,operation:t,forward:n}),r.error(u)}return function(){i&&i.unsubscribe(),a&&i.unsubscribe()}})})}(function(e){gr(t,e);function t(n){var r=e.call(this)||this;return r.link=Ko(n),r}return t.prototype.request=function(n,r){return this.link.request(n,r)},t})(Mn);var Cm=function(){if(typeof AbortController>"u")return{controller:!1,signal:!1};var e=new AbortController,t=e.signal;return{controller:e,signal:t}},Jo=Object.prototype.hasOwnProperty;function wm(e,t){if(e.status>=300){var n=function(){try{return JSON.parse(t)}catch{return t}};Uo(e,n(),"Response not successful: Received status code ".concat(e.status))}try{return JSON.parse(t)}catch(i){var r=i;throw r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,r}}function Om(e){return function(t){return t.text().then(function(n){return wm(t,n)}).then(function(n){return!Array.isArray(n)&&!Jo.call(n,"data")&&!Jo.call(n,"errors")&&Uo(t,n,"Server response was missing for query '".concat(Array.isArray(e)?e.map(function(r){return r.operationName}):e.operationName,"'.")),n})}}var Cr=function(e,t){var n;try{n=JSON.stringify(e)}catch(i){var r=En(54,t,i.message);throw r.parseError=i,r}return n};function Em(e,t){var n=[],r=function(f,g){n.push("".concat(f,"=").concat(encodeURIComponent(g)))};if("query"in t&&r("query",t.query),t.operationName&&r("operationName",t.operationName),t.variables){var i=void 0;try{i=Cr(t.variables,"Variables map")}catch(f){return{parseError:f}}r("variables",i)}if(t.extensions){var a=void 0;try{a=Cr(t.extensions,"Extensions map")}catch(f){return{parseError:f}}r("extensions",a)}var s="",u=e,o=e.indexOf("#");o!==-1&&(s=e.substr(o),u=e.substr(0,o));var c=u.indexOf("?")===-1?"?":"&",l=u+c+n.join("&")+s;return{newURI:l}}var Tm={includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},Dm={accept:"*/*","content-type":"application/json"},$m={method:"POST"},Pm={http:Tm,headers:Dm,options:$m},Mm=function(e,t){return t(e)};function Fm(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={},a={};n.forEach(function(f){i=De(De(De({},i),f.options),{headers:De(De({},i.headers),f.headers)}),f.credentials&&(i.credentials=f.credentials),a=De(De({},a),f.http)}),i.headers&&(i.headers=Nm(i.headers,a.preserveHeaderCase));var s=e.operationName,u=e.extensions,o=e.variables,c=e.query,l={operationName:s,variables:o};return a.includeExtensions&&(l.extensions=u),a.includeQuery&&(l.query=t(c,ta)),{options:i,body:l}}function Nm(e,t){if(!t){var n={};return Object.keys(Object(e)).forEach(function(a){n[a.toLowerCase()]=e[a]}),n}var r={};Object.keys(Object(e)).forEach(function(a){r[a.toLowerCase()]={originalName:a,value:e[a]}});var i={};return Object.keys(r).forEach(function(a){i[r[a].originalName]=r[a].value}),i}var km=function(e,t){var n=e.getContext(),r=n.uri;return r||(typeof t=="function"?t(e):t||"/graphql")};function Am(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Lm(e,t,n=""){if(!arguments.length)throw new TypeError("Argument 1 `value` is required.");if(typeof t!="function")throw new TypeError("Argument 2 `isExtractable` must be a function.");if(typeof n!="string")throw new TypeError("Argument 3 `path` must be a string.");const r=new Map,i=new Map;function a(s,u,o){if(t(s)){const f=i.get(s);return f?f.push(u):i.set(s,[u]),null}const c=Array.isArray(s)||typeof FileList<"u"&&s instanceof FileList,l=Am(s);if(c||l){let f=r.get(s);const g=!f;if(g&&(f=c?[]:s instanceof Object?{}:Object.create(null),r.set(s,f)),!o.has(s)){const p=u?`${u}.`:"",I=new Set(o).add(s);if(c){let S=0;for(const b of s){const x=a(b,p+S++,I);g&&f.push(x)}}else for(const S in s){const b=a(s[S],p+S,I);g&&(f[S]=b)}}return f}return s}return{clone:a(e,n,new Set),files:i}}function jm(e,t,n){"name"in n?e.append(t,n,n.name):e.append(t,n)}function qm(e){return typeof File<"u"&&e instanceof File||typeof Blob<"u"&&e instanceof Blob}function Bm({uri:e="/graphql",useGETForQueries:t,isExtractableFile:n=qm,FormData:r,formDataAppendFile:i=jm,print:a=Mm,fetch:s,fetchOptions:u,credentials:o,headers:c,includeExtensions:l}={}){const f={http:{includeExtensions:l},options:u,credentials:o,headers:c};return new Mn(g=>{const p=g.getContext(),{clientAwareness:{name:I,version:S}={},headers:b}=p,x={http:p.http,options:p.fetchOptions,credentials:p.credentials,headers:{...I&&{"apollographql-client-name":I},...S&&{"apollographql-client-version":S},...b}},{options:v,body:w}=Fm(g,a,Pm,f,x),{clone:T,files:C}=Lm(w,n,"");let _=km(g,e);if(C.size){v.headers&&delete v.headers["content-type"];const D=r||FormData,$=new D;$.append("operations",Cr(T,"Payload"));const R={};let W=0;C.forEach(ne=>{R[++W]=ne}),$.append("map",JSON.stringify(R)),W=0,C.forEach((ne,ee)=>{i($,String(++W),ee)}),v.body=$}else if(t&&!g.query.definitions.some(D=>D.kind==="OperationDefinition"&&D.operation==="mutation")&&(v.method="GET"),v.method==="GET"){const{newURI:D,parseError:$}=Em(_,w);if($)return new we(R=>{R.error($)});_=D}else v.body=Cr(T,"Payload");const{controller:h}=Cm();typeof h!="boolean"&&(v.signal&&(v.signal.aborted?h.abort():v.signal.addEventListener("abort",()=>{h.abort()},{once:!0})),v.signal=h.signal);const E=s||fetch;return new we(D=>{let $;return E(_,v).then(R=>(g.setContext({response:R}),R)).then(Om(g)).then(R=>{D.next(R),D.complete()}).catch(R=>{$||(R.result&&R.result.errors&&R.result.data&&D.next(R.result),D.error(R))}),()=>{$=!0,typeof h!="boolean"&&h.abort()}})})}const ht=e=>(t,{args:n,canRead:r,toReference:i})=>r(t)?t:i({__typename:e,id:n==null?void 0:n.id}),Nn=(e,{canRead:t})=>{if(e!==void 0)return t(e)?e:null},Rm={Query:{fields:{findImage:{read:ht("Image")},findPerformer:{read:ht("Performer")},findStudio:{read:ht("Studio")},findGroup:{read:ht("Group")},findGallery:{read:ht("Gallery")},findScene:{read:ht("Scene")},findTag:{read:ht("Tag")},findSavedFilter:{read:ht("SavedFilter")}}},Scene:{fields:{studio:{read:Nn}}},Image:{fields:{studio:{read:Nn},paths:{merge:!1}}},Group:{fields:{studio:{read:Nn}}},Gallery:{fields:{studio:{read:Nn}}},Studio:{fields:{parent_studio:{read:Nn}}}},Vm={BaseFile:["VideoFile","ImageFile","GalleryFile"],VisualFile:["VideoFile","ImageFile"]},Gm=((tf=document.querySelector("base"))==null?void 0:tf.getAttribute("href"))??"/",fa=e=>{let t=new URL(window.location.origin+Gm);return e&&(t.pathname+=e),t},Um=()=>{const e=fa("graphql"),t=fa("graphql");t.protocol==="https:"?t.protocol="wss:":t.protocol="ws:";const n=Bm({uri:e.toString()}),r=xm({url:t.toString(),retryAttempts:1/0,shouldRetry(){return!0}}),i=new hm(r),a=Ko(({networkError:l})=>{if(l&&l.statusCode===401){const f=new URL(fa("login"),window.location.toString());f.searchParams.append("returnURL",window.location.href),window.location.href=f.toString()}}),s=m.ApolloLink.split(({query:l})=>{const f=Wp(l);return f.kind==="OperationDefinition"&&f.operation==="subscription"},i,n),u=m.ApolloLink.from([a,s]),o=new m.InMemoryCache({typePolicies:Rm,possibleTypes:Vm}),c=new m.ApolloClient({link:u,cache:o});return c.subscribe({query:zf}).subscribe({next:()=>{c.resetStore()}}),{cache:o,client:c,wsClient:r}},{client:wr}=Um();function Xo(e,t){const n={};for(const r of t){const{selections:i}=Hp(r).selectionSet;for(const a of i){if(!Gp(a))continue;const s=a.name.value;n[s]=(u,{DELETE:o})=>o}}e.modify({fields:n}),e.gc()}function Zo(e,t,n){const r=e.extract();for(const i in r){if(n!=null&&n.includes(i))continue;const s=r[i].__typename;if(s&&t[s]){const u={};for(const o of t[s])u[o]=(c,{DELETE:l})=>l;e.modify({id:i,fields:u})}}}const zm=e=>wr.query({query:io,variables:{scene_ids:e}}),Hm=e=>wr.query({query:ro,variables:{filter:e.makeFindFilter(),scene_marker_filter:e.makeFilter()}}),Wm=e=>Uf({variables:{id:e},skip:e==="new"||e===""}),Ym=e=>wr.query({query:so,variables:{ids:e}}),eu=e=>wr.query({query:so,variables:{filter:e.makeFindFilter(),tag_filter:e.makeFilter()}});function Qm(e,t,n){e.modify({fields:{stats(r){return{...r,[t]:r[t]+n}}}})}const tu={Tag:["parents","children"]},Km=[Lf,ro,io,Af,kf,jf,ao],Jm=()=>Mf({update(e,t){var i;const n=(i=t.data)==null?void 0:i.tagCreate;if(!n)return;Qm(e,"tag_count",1);const r={__typename:"Tag",id:n.id};Zo(e,tu,e.identify(r)),Xo(e,[ao])}}),Xm=()=>Nf({update(e,t){var i;const n=(i=t.data)==null?void 0:i.tagUpdate;if(!n)return;const r={__typename:"Tag",id:n.id};Zo(e,tu,e.identify(r)),Xo(e,Km)}}),Zm=e=>Vf({variables:{path:e}}),eg=200,tg=25,kn=["byte","kibibyte","mebibyte","gibibyte","tebibyte","pebibyte"],ng=["B","KiB","MiB","GiB","TiB","PiB"],rg=(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return{size:0,unit:kn[0]};let t=0,n=e;for(;n>=1024&&t+1<kn.length;)n/=1024,t++;return{size:n,unit:kn[t]}},de=class de{constructor(t,n,r,i){this.singular=t,this.plural=n,this.shortString=r,this.secs=i}toString(){return this.shortString}};X(de,"SECOND",new de("second","seconds","s",1)),X(de,"MINUTE",new de("minute","minutes","m",60)),X(de,"HOUR",new de("hour","hours","h",de.MINUTE.secs*60)),X(de,"DAY",new de("day","days","D",de.HOUR.secs*24)),X(de,"WEEK",new de("week","weeks","W",de.DAY.secs*7)),X(de,"MONTH",new de("month","months","M",de.DAY.secs*30)),X(de,"YEAR",new de("year","years","Y",de.DAY.secs*365)),X(de,"DURATIONS",[de.SECOND,de.MINUTE,de.HOUR,de.DAY,de.WEEK,de.MONTH,de.YEAR]);let wt=de;class nu{constructor(t,n){this.count=t,this.duration=n}toString(){return this.count.toString()+this.duration.toString()}}const ig=(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return[new nu(0,wt.DURATIONS[0])];const t=[];let n=e;for(let r=wt.DURATIONS.length-1;r>=0;r--){const i=Math.floor(n/wt.DURATIONS[r].secs);i!==0&&(n%=wt.DURATIONS[r].secs,t.push(new nu(i,wt.DURATIONS[r])))}return t},ag=(e=0,t=2)=>ig(e).slice(0,t).join(" "),sg=e=>{const t=kn.indexOf(e);return ng[t]},og=e=>kn.indexOf(e)>=3?1:0,Or=(e,t)=>{let n=!1;e<0&&(n=!0,e=-e);const r=e%1,i=Math.round(r*1e3);let a=Math.trunc(e);const s=a%60;a=(a-s)/60;const u=a%60;a=(a-u)/60;const o=a;let c=String(s).padStart(2,"0");return o===0?c=String(u)+":"+c:(c=String(u).padStart(2,"0")+":"+c,c=String(o)+":"+c),t&&i>0&&(c+="."+i.toString().padStart(3,"0")),n?"-"+c:c},ug=(e,t)=>t===void 0?Or(e):`${Or(e)}-${Or(t)}`,cg=e=>{if(!e)return null;const t=e.split(":");if(t.length>3)return null;let n=t[t.length-1],r=0;if(n.includes(".")){const s=n.split(".");if(s.length!==2)return null;n=s[0];const u=parseInt(s[1],10);if(Number.isNaN(u))return null;r=u/1e3}let i=0,a=1;for(;t.length>0;){const s=t.pop();if(s===void 0)return null;const u=parseInt(s,10);if(Number.isNaN(u))return null;i+=a*u,a*=60}return i+r},lg=e=>e?e.replace(/^.*[\\/]/,""):"No File Name",dg=e=>{if(!e)return null;const t=e.split("-");if(t.length!==3)return null;const n=Number(t[0]),r=Math.max(0,Number(t[1])-1),i=Number(t[2]);return new Date(n,r,i,0,0,0,0)},Er=e=>{if(!e)return null;const t=e.split("-");let n=Number(t[0]);Number.isNaN(n)&&(n=new Date().getFullYear());let r=0;t.length>1&&(r=Math.max(0,Number(t[1])-1),(r>11||Number.isNaN(r))&&(r=0));let i=1;return t.length>2&&(i=Number(t[2]),(i>31||Number.isNaN(i))&&(i=1)),new Date(n,r,i,0,0,0,0)},fg=e=>{if(!e)return null;const t=e.split(" ");let n=null;if(t.length>0&&(n=Er(t[0])),n||(n=new Date),t.length>1){const r=t[1].split(":");n&&r.length>0&&n.setHours(Number(r[0])),n&&r.length>1&&n.setMinutes(Number(r[1])),n&&r.length>2&&n.setSeconds(Number(r[2]))}return n};function ru(e){return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`}function pg(e){return`${ru(e)} ${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`}const mg=(e,t)=>{if(!e)return 0;const n=Er(e),r=t?Er(t):new Date;if(!n||!r)return 0;let i=r.getFullYear()-n.getFullYear();return(n.getMonth()>r.getMonth()||n.getMonth()>=r.getMonth()&&n.getDate()>r.getDate())&&(i-=1),i},gg=e=>`${(e/1e6).toFixed(2)} megabits per second`,hg=(e,t)=>{const n=e>t?t:e;if(n>=6144)return"HUGE";if(n>=3840)return"8K";if(n>=3584)return"7K";if(n>=3e3)return"6K";if(n>=2560)return"5K";if(n>=1920)return"4K";if(n>=1440)return"1440p";if(n>=1080)return"1080p";if(n>=720)return"720p";if(n>=540)return"540p";if(n>=480)return"480p";if(n>=360)return"360p";if(n>=240)return"240p";if(n>=144)return"144p"},iu=(e,t)=>!e||e.startsWith("http://")||e.startsWith("https://")?e:t?e.startsWith(t.host)?`${t.protocol}//${e}`:`${t.protocol}//${t.host}/${e}`:`https://${e}`,vg=(e,t)=>{if(t)return t.hostname;if(e){let n="";try{const r=iu(e);r&&(e=r),n=new URL(e).hostname}catch{n=e}return n}else return""},au=(e,t,n=!0)=>t?e.formatDate(t,{format:"long",timeZone:n?"utc":void 0}):"",bg=(e,t,n=!0)=>{if(!t)return"";const r=t.match(/^(\d{4})$/);if(r){const a=parseInt(r[1],10);return e.formatDate(Date.UTC(a,0),{year:"numeric",timeZone:n?"utc":void 0})}const i=t.match(/^(\d{4})-(\d{2})$/);if(i){const a=parseInt(i[1],10),s=parseInt(i[2],10)-1;return e.formatDate(Date.UTC(a,s),{year:"numeric",month:"long",timeZone:n?"utc":void 0})}return e.formatDate(t,{format:"long",timeZone:n?"utc":void 0})},yg=(e,t,n=!1)=>`${au(e,t,n)} ${e.formatTime(t,{timeZone:n?"utc":void 0})}`,pa=["","K","M","B"],$e={fileSize:rg,formatFileSizeUnit:sg,fileSizeFractionalDigits:og,secondsToTimestamp:Or,formatTimestampRange:ug,timestampToSeconds:cg,fileNameFromPath:lg,stringToDate:dg,stringToFuzzyDate:Er,stringToFuzzyDateTime:fg,dateToString:ru,dateTimeToString:pg,age:mg,bitRate:gg,resolution:hg,sanitiseURL:iu,domainFromURL:vg,formatDate:au,formatFuzzyDate:bg,formatDateTime:yg,secondsAsTimeString:ag,abbreviateCounter:(e=0)=>{if(Number.isNaN(parseFloat(String(e)))||!Number.isFinite(e))return{size:0,unit:pa[0]};let t=0,n=0,r=e;for(;r>=1e3&&t+1<pa.length;)r/=1e3,t++,n=1;return{size:r,unit:pa[t],digits:n}},stripQuotes:e=>e.startsWith('"')&&e.endsWith('"')?e.slice(1,-1):e,addQuotes:e=>`"${e}"`},Sg={[y.Equals]:"criterion_modifier.equals",[y.NotEquals]:"criterion_modifier.not_equals",[y.GreaterThan]:"criterion_modifier.greater_than",[y.LessThan]:"criterion_modifier.less_than",[y.IsNull]:"criterion_modifier.is_null",[y.NotNull]:"criterion_modifier.not_null",[y.Includes]:"criterion_modifier.includes",[y.IncludesAll]:"criterion_modifier.includes_all",[y.Excludes]:"criterion_modifier.excludes",[y.MatchesRegex]:"criterion_modifier.matches_regex",[y.NotMatchesRegex]:"criterion_modifier.not_matches_regex",[y.Between]:"criterion_modifier.between",[y.NotBetween]:"criterion_modifier.not_between"};class su{constructor(t){X(this,"criterionOption");this.criterionOption=t}isValid(){return!0}clone(){const t=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return t.cloneValues(),t}cloneValues(){}getId(){return`${this.criterionOption.type}`}}class ve extends su{constructor(n,r){super(n);X(this,"_modifier");X(this,"_value");this.modifier=n.defaultModifier,this.value=r}get modifier(){return this._modifier}set modifier(n){this._modifier=n}get value(){return this._value}set value(n){this._value=n}isValid(){return!0}modifierCriterionOption(){return this.criterionOption}clone(){const n=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return n.cloneValues(),n}cloneValues(){}static getModifierLabel(n,r){const i=Sg[r];return i?n.formatMessage({id:i}):""}getLabel(n,r=!1){const i=ve.getModifierLabel(n,this.modifier);let a="";this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(a=this.getLabelValue(n));const s=r?this.criterionOption.sfwMessageID??this.criterionOption.messageID:this.criterionOption.messageID;return n.formatMessage({id:"criterion_modifier.format_string"},{criterion:n.formatMessage({id:s}),modifierString:i,valueString:a})}toQueryParams(){const n={type:this.criterionOption.type,modifier:this.modifier};return this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(n.value=this.encodeValue()),n}encodeValue(){return this.value}decodeValue(n){n!=null&&(this.value=n)}fromDecodedParams(n){const r=n;this.modifier=r.modifier,this.decodeValue(r.value)}setFromSavedCriterion(n){const r=n;r.value!==void 0&&r.value!==null&&(this.value=r.value),this.modifier=r.modifier}applyToCriterionInput(n){n[this.criterionOption.type]=this.toCriterionInput()}applyToSavedCriterion(n){n[this.criterionOption.type]={value:this.value,modifier:this.modifier}}toCriterionInput(){return{value:this.value,modifier:this.modifier}}}class ou{constructor(t){X(this,"type");X(this,"messageID");X(this,"makeCriterionFn");X(this,"sfwMessageID");X(this,"hidden",!1);this.type=t.type,this.messageID=t.messageID,this.makeCriterionFn=t.makeCriterion,this.hidden=t.hidden??!1,this.sfwMessageID=t.sfwMessageID}makeCriterion(t){return this.makeCriterionFn(this,t)}}class fe extends ou{constructor(n){super(n);X(this,"modifierOptions");X(this,"defaultModifier");X(this,"options");X(this,"inputType");this.modifierOptions=n.modifierOptions??[],this.defaultModifier=n.defaultModifier??y.Equals,this.options=n.options,this.inputType=n.inputType}}class ma extends fe{constructor(t,n,r,i,a){const s=[y.Includes,y.Excludes,y.IsNull,y.NotNull];let u=y.Includes;r&&(s.unshift(y.IncludesAll),u=y.IncludesAll),super({messageID:t,type:n,modifierOptions:s,defaultModifier:u,inputType:i,makeCriterion:a||(()=>new An(this))})}}class An extends ve{constructor(t,n=[]){super(t,n)}cloneValues(){this.value=this.value.map(t=>({...t}))}getLabelValue(t){return this.value.map(n=>n.label).join(", ")}toCriterionInput(){return{value:this.value.map(t=>t.id),modifier:this.modifier}}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull?!0:this.value.length>0}}class Ln extends ve{constructor(t,n={items:[],excluded:[],depth:0}){super(t,n)}cloneValues(){this.value={...this.value,items:this.value.items.map(t=>({...t})),excluded:this.value.excluded.map(t=>({...t}))}}get modifier(){return this._modifier}set modifier(t){this._modifier=t,this.value&&t!==y.Includes&&t!==y.IncludesAll&&(this.value.excluded=[])}setFromSavedCriterion(t){const{modifier:n,value:r}=t;r!==void 0&&(this.value={items:r.items||[],excluded:r.excluded||[],depth:r.depth||0});const i=this.criterionOption.modifierOptions??[];n===y.Excludes&&i.find(a=>a===y.Excludes)===void 0?(this.modifier=y.Includes,this.value.excluded=[...this.value.excluded,...this.value.items],this.value.items=[]):this.modifier=n}getLabelValue(t){const n=(this.value.items??[]).map(r=>r.label).join(", ");return this.value.depth===0?n:`${n} (+${this.value.depth>0?this.value.depth:"all"})`}toCriterionInput(){let t=[];const n=this.modifier===y.Equals?0:this.value.depth;return this.value.excluded&&(t=this.value.excluded.map(r=>r.id)),{value:this.value.items.map(r=>r.id),excludes:t,modifier:this.modifier,depth:n}}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull?!0:this.value.items.length>0||this.value.excluded&&this.value.excluded.length>0}getLabel(t,n){let r="criterion_modifier.format_string",i=ve.getModifierLabel(t,this.modifier),a="",s="";this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(a=this.value.items.map(o=>o.label).join(", "),this.value.excluded&&this.value.excluded.length>0&&(this.value.items.length===0?(i=ve.getModifierLabel(t,y.Excludes),a=this.value.excluded.map(o=>o.label).join(", ")):(r="criterion_modifier.format_string_excludes",s=this.value.excluded.map(o=>o.label).join(", "))),this.value.depth!==0&&(r+="_depth"));const u=n?this.criterionOption.sfwMessageID??this.criterionOption.messageID:this.criterionOption.messageID;return t.formatMessage({id:r},{criterion:t.formatMessage({id:u}),modifierString:i,valueString:a,excludedString:s,depth:this.value.depth})}}class Tr extends fe{constructor(t){super({modifierOptions:[y.Equals,y.NotEquals,y.Includes,y.Excludes,y.IsNull,y.NotNull,y.MatchesRegex,y.NotMatchesRegex],defaultModifier:y.Equals,inputType:"text",makeCriterion:()=>new Ze(this),...t})}}function re(e,t,n){return new Tr({messageID:t??e,type:e,...n})}class xg extends fe{constructor(t,n){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.Includes,y.Excludes,y.MatchesRegex,y.NotMatchesRegex],defaultModifier:y.Equals,inputType:"text",makeCriterion:()=>new Ze(this)})}}function Dr(e,t){return new xg(t??e,e)}class Ze extends ve{constructor(t){super(t,"")}getLabelValue(t){return this.value}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull||this.value.length>0}}class ga extends ve{constructor(t,n=[]){super(t,n)}cloneValues(){this.value=this.value.slice()}getLabelValue(t){return this.value.join(", ")}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull||this.value.length>0}}class Ot extends fe{constructor(t,n,r){super({messageID:t,type:n,modifierOptions:[],defaultModifier:y.Equals,options:["true","false"],makeCriterion:r||(()=>new Et(this))})}}function $r(e,t){return new Ot(e,e)}class Et extends Ze{toCriterionInput(){return this.value==="true"}isValid(){return this.value==="true"||this.value==="false"}}class uu extends fe{constructor(t,n,r){super({messageID:t,type:n,options:["true","false"],makeCriterion:r||(()=>new ha(this))})}}class ha extends Ze{toCriterionInput(){return this.value}isValid(){return this.value==="true"||this.value==="false"}}class Ig extends fe{constructor(t,n){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.IsNull,y.NotNull,y.Between,y.NotBetween],defaultModifier:y.Equals,inputType:"number",makeCriterion:()=>new va(this)})}}function cu(e,t){return new Ig(t??e,e)}class _g extends fe{constructor(t,n,r){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.Between,y.NotBetween,y.IsNull,y.NotNull],defaultModifier:y.Equals,inputType:"number",makeCriterion:r||(()=>new va(this))})}}class Pr extends fe{constructor(t,n,r,i){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.Between,y.NotBetween],defaultModifier:y.Equals,inputType:"number",makeCriterion:r||(()=>new va(this)),...i})}}function Z(e,t,n){return new Pr(t??e,e,void 0,n)}function jn(e,t){return e===y.Between||e===y.NotBetween?{value:t.value,value2:t.value2}:{value:t.value}}function Cg(e){return typeof e.value=="object"?e.value:{value:e.value,value2:e.value2}}class va extends ve{constructor(t){super(t,{value:void 0,value2:void 0})}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(t){typeof t!="object"?this._value={value:t,value2:void 0}:this._value=t}toCriterionInput(){var t,n;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??0,value2:(n=this.value)==null?void 0:n.value2}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return jn(this.modifier,this.value)}getLabelValue(t){const{value:n,value2:r}=this.value;return this.modifier===y.Between||this.modifier===y.NotBetween?`${n}, ${r??0}`:`${n}`}isValid(){if(this.modifier===y.IsNull||this.modifier===y.NotNull)return!0;const{value:t,value2:n}=this.value;return!(t===void 0||n===void 0&&(this.modifier===y.Between||this.modifier===y.NotBetween))}}let wg=class extends Pr{constructor(t,n){super(t,n,()=>new lu(this))}};function Mr(e,t){return new wg(e,e)}class Og extends _g{constructor(t,n){super(t,n,()=>new lu(this))}}function Eg(e,t){return new Og(e,e)}class lu extends ve{constructor(t){super(t,{value:void 0,value2:void 0})}cloneValues(){this.value={...this.value}}toCriterionInput(){var t,n;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??0,value2:(n=this.value)==null?void 0:n.value2}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return jn(this.modifier,this.value)}getLabelValue(t){const n=$e.secondsToTimestamp(this.value.value??0),r=$e.secondsToTimestamp(this.value.value2??0);return this.modifier===y.Between||this.modifier===y.NotBetween?`${n}, ${r}`:n}isValid(){if(this.modifier===y.IsNull||this.modifier===y.NotNull)return!0;const{value:t,value2:n}=this.value;return!(t===void 0||n===void 0&&(this.modifier===y.Between||this.modifier===y.NotBetween))}}class Tg extends fe{constructor(t,n){super({messageID:t,type:n,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.IsNull,y.NotNull,y.Between,y.NotBetween],defaultModifier:y.Equals,inputType:"text",makeCriterion:()=>new Dg(this)})}}function ut(e){return new Tg(e,e)}class Dg extends ve{constructor(t){super(t,{value:"",value2:void 0})}cloneValues(){this.value={...this.value}}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}encodeValue(){return jn(this.modifier,this.value)}toCriterionInput(){var t,n;return{modifier:this.modifier,value:((t=this.value)==null?void 0:t.value)??"",value2:(n=this.value)==null?void 0:n.value2}}getLabelValue(){const{value:t}=this.value;return this.modifier===y.Between||this.modifier===y.NotBetween?`${t}, ${this.value.value2}`:`${t}`}isValid(){if(this.modifier===y.IsNull||this.modifier===y.NotNull)return!0;const{value:t,value2:n}=this.value;return!(!t||!n&&(this.modifier===y.Between||this.modifier===y.NotBetween))}}class $g extends fe{constructor(t,n){super({messageID:t,type:n,modifierOptions:[y.GreaterThan,y.LessThan,y.Between,y.NotBetween],defaultModifier:y.GreaterThan,inputType:"text",makeCriterion:()=>new Pg(this)})}}function Oe(e){return new $g(e,e)}class Pg extends ve{constructor(t){super(t,{value:"",value2:void 0})}cloneValues(){this.value={...this.value}}toCriterionInput(){return{modifier:this.modifier,value:this.transformValueToInput(this.value.value??""),value2:this.value.value2?this.transformValueToInput(this.value.value2):null}}setFromSavedCriterion(t){super.setFromSavedCriterion(t),this.value=Cg(t)}encodeValue(){return jn(this.modifier,this.value)}getLabelValue(){const{value:t}=this.value;return this.modifier===y.Between||this.modifier===y.NotBetween?`${t}, ${this.value.value2}`:`${t}`}transformValueToInput(t){return t=t.trim(),/^\d{4}-\d{2}-\d{2}(( |T)\d{2}:\d{2})?$/.test(t)?t.replace(" ","T"):""}isValid(){if(this.modifier===y.IsNull||this.modifier===y.NotNull)return!0;const{value:t,value2:n}=this.value;return!(!t||!n&&(this.modifier===y.Between||this.modifier===y.NotBetween))}}class Mg extends Tr{constructor(t){super({messageID:"unsupported_criterion",type:t,makeCriterion:()=>new Fg(this)})}}class Fg extends Ze{getLabel(t){const n=ve.getModifierLabel(t,this.modifier);let r="";return this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(r=this.getLabelValue(t)),t.formatMessage({id:"criterion_modifier.format_string"},{criterion:t.formatMessage({id:"criterion.unsupported"},{type:this.criterionOption.type}),modifierString:n,valueString:r})}applyToCriterionInput(){}applyToSavedCriterion(){}setFromSavedCriterion(){}}const du=new Ot("favourite","filter_favorites",()=>new Ng);class Ng extends Et{constructor(){super(du)}}const fu=new Ot("favourite","favorite",()=>new kg);class kg extends Et{constructor(){super(fu)}}const pu=new Ot("favourite","favorite",()=>new Ag);class Ag extends Et{constructor(){super(pu)}}const Fr=new Ot("performer_favorite","performer_favorite",()=>new Lg);class Lg extends Et{constructor(){super(Fr)}}class jg extends Ze{toCriterionInput(){return this.value}}class Tt extends fe{constructor(t,n,r){super({messageID:t,type:n,options:r,modifierOptions:[],defaultModifier:y.Equals,makeCriterion:()=>new jg(this)})}}const qg=new Tt("isMissing","is_missing",["title","code","details","director","url","date","rating","cover","galleries","studio","group","performers","tags","stash_id"]),Bg=new Tt("isMissing","is_missing",["title","details","photographer","url","date","code","rating","galleries","studio","performers","tags"]),Rg=new Tt("isMissing","is_missing",["url","ethnicity","country","hair_color","eye_color","height","weight","measurements","fake_tits","penis_length","circumcised","career_start","career_end","tattoos","piercings","aliases","gender","birthdate","death_date","disambiguation","tags","image","details","rating","stash_id"]),Vg=new Tt("isMissing","is_missing",["title","code","details","photographer","url","date","rating","cover","studio","performers","tags","scenes"]),Gg=new Tt("isMissing","is_missing",["image","aliases","description","stash_id"]),Ug=new Tt("isMissing","is_missing",["image","stash_id","details","url","aliases","tags","rating"]),zg=new Tt("isMissing","is_missing",["aliases","description","director","date","url","rating","studio","performers","tags","front_image","back_image","scenes"]),Nr=new Ot("organized","organized",()=>new Hg);class Hg extends Et{constructor(){super(Nr)}}const mu=new uu("hasChapters","has_chapters",()=>new Wg);class Wg extends ha{constructor(){super(mu)}}const Yg=[y.IncludesAll,y.Includes,y.Equals,y.IsNull,y.NotNull],Qg=y.IncludesAll,Kg="performers",Jt=new fe({messageID:"performers",type:"performers",modifierOptions:Yg,defaultModifier:Qg,inputType:Kg,makeCriterion:()=>new Xt});class Xt extends ve{constructor(){super(Jt,{items:[],excluded:[]})}cloneValues(){this.value={...this.value,items:this.value.items.map(t=>({...t})),excluded:this.value.excluded.map(t=>({...t}))}}get modifier(){return this._modifier}set modifier(t){this._modifier=t,t!==y.Includes&&t!==y.IncludesAll&&(this.value.excluded=[])}setFromSavedCriterion(t){const{modifier:n,value:r}=t;Array.isArray(r)?this.value={items:r,excluded:[]}:r!==void 0&&(this.value={items:r.items||[],excluded:r.excluded||[]}),n===y.Excludes?(this.modifier=y.Includes,this.value.excluded=[...this.value.excluded,...this.value.items],this.value.items=[]):this.modifier=n}getLabelValue(t){return this.value.items.map(n=>n.label).join(", ")}toCriterionInput(){let t=[];return this.value.excluded&&(t=this.value.excluded.map(n=>n.id)),{value:this.value.items.map(n=>n.id),excludes:t,modifier:this.modifier}}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull?!0:this.value.items.length>0||this.value.excluded&&this.value.excluded.length>0}getLabel(t){let n="criterion_modifier.format_string",r=ve.getModifierLabel(t,this.modifier),i="",a="";return this.modifier!==y.IsNull&&this.modifier!==y.NotNull&&(i=this.value.items.map(s=>s.label).join(", "),this.value.excluded&&this.value.excluded.length>0&&(this.value.items.length===0?(r=ve.getModifierLabel(t,y.Excludes),i=this.value.excluded.map(s=>s.label).join(", ")):(n="criterion_modifier.format_string_excludes",a=this.value.excluded.map(s=>s.label).join(", ")))),t.formatMessage({id:n},{criterion:t.formatMessage({id:this.criterionOption.messageID}),modifierString:r,valueString:i,excludedString:a})}}const gu=new Map([["144p",je.VeryLow],["240p",je.Low],["360p",je.R360P],["480p",je.Standard],["540p",je.WebHd],["720p",je.StandardHd],["1080p",je.FullHd],["1440p",je.QuadHd],["4k",je.FourK],["5k",je.FiveK],["6k",je.SixK],["7k",je.SevenK],["8k",je.EightK],["Huge",je.Huge]]),Jg=(e,t)=>e?gu.get(e):void 0,Xg=Array.from(gu.keys());class hu extends fe{constructor(t,n){super({messageID:t,type:t,modifierOptions:[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan],options:Xg,makeCriterion:n})}}class vu extends Ze{toCriterionInput(){const t=Jg(this.value);if(t!==void 0)return{value:t,modifier:this.modifier}}}const ba=new hu("resolution",()=>new Zg);class Zg extends vu{constructor(){super(ba)}}const bu=new hu("average_resolution",()=>new eh);class eh extends vu{constructor(){super(bu)}}const yu="scenes",Su=new ma("scenes","scenes",!0,yu,()=>new th);class th extends An{constructor(){super(Su)}}const nh=[y.Includes,y.Excludes],rh=y.Includes,xu=new fe({messageID:"scenes",type:"scenes",modifierOptions:nh,defaultModifier:rh,inputType:yu,makeCriterion:()=>new Iu});class Iu extends An{constructor(){super(xu)}}const ih=[y.Includes,y.IsNull,y.NotNull],ah=y.Includes,_u="studios",Zt=new fe({messageID:"studios",type:"studios",modifierOptions:ih,defaultModifier:ah,inputType:_u,makeCriterion:()=>new en});class en extends Ln{constructor(){super(Zt)}}const Cu=new ma("parent_studios","parents",!1,_u,()=>new wu);class wu extends An{constructor(){super(Cu)}}const Ou=[y.IncludesAll,y.Includes,y.Equals,y.IsNull,y.NotNull],ya=[y.IncludesAll,y.Includes,y.IsNull,y.NotNull],sh=y.IncludesAll,oh="tags";class qn extends fe{constructor(t,n,r){super({messageID:t,type:n,modifierOptions:r,defaultModifier:sh,inputType:oh,makeCriterion:()=>new kr(this)})}}const vt=new qn("tags","tags",Ou),uh=new qn("scene_tags","scene_tags",Ou),Sa=new qn("performer_tags","performer_tags",ya),Eu=new qn("parent_tags","parents",ya),Tu=new qn("sub_tags","children",ya);class kr extends Ln{}const xa=["title","path","rating","file_mod_time","tag_count","performer_count","random"];class Ee{constructor(t,n,r,i){X(this,"defaultSortBy","");X(this,"sortByOptions",[]);X(this,"displayModeOptions",[]);X(this,"criterionOptions",[]);this.defaultSortBy=t,this.sortByOptions=[...n,Ee.createSortBy("created_at"),Ee.createSortBy("updated_at")],this.displayModeOptions=r,this.criterionOptions=i}static createSortBy(t){return{messageID:t,value:t}}}var be=(e=>(e[e.Grid=0]="Grid",e[e.List=1]="List",e[e.Wall=2]="Wall",e[e.Tagger=3]="Tagger",e))(be||{}),Du=(e=>(e.Stars="stars",e.Decimal="decimal",e))(Du||{}),$u=(e=>(e.Full="full",e.Half="half",e.Quarter="quarter",e.Tenth="tenth",e))($u||{});const Pu={type:"stars",starPrecision:"full"};function ch(e,t){let n=t;n||(n=1);const r=1/n;return Math.round(e*r)/r}function lh(e){switch(e){case"full":return 1;case"half":return .5;case"quarter":return .25;case"tenth":return .1;default:return 1}}function Ar(e,t){if(!e)return null;const{type:n,starPrecision:r}=t,i=n==="decimal"?.1:lh(r??"full"),s=100/(n==="decimal"?10:5);return ch(e/s,i)}function dh(e,t){const r=100/((t??"stars")==="decimal"?10:5);return Math.round(e*r)}const fh=[y.Equals,y.NotEquals,y.GreaterThan,y.LessThan,y.Between,y.NotBetween,y.IsNull,y.NotNull];function ph(e){return(e==null?void 0:e.ui.ratingSystemOptions)??Pu}const Dt=new fe({messageID:"rating",type:"rating100",modifierOptions:fh,defaultModifier:y.Equals,makeCriterion:(e,t)=>new mh(ph(t)),inputType:"number"});class mh extends ve{constructor(n){super(Dt,{value:0,value2:void 0});X(this,"ratingSystem");this.ratingSystem=n}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(n){typeof n!="object"?this._value={value:dh(n,this.ratingSystem.type),value2:void 0}:this._value=n}toCriterionInput(){return{modifier:this.modifier,value:this.value.value??0,value2:this.value.value2}}setFromSavedCriterion(n){super.setFromSavedCriterion(n)}encodeValue(){return jn(this.modifier,this.value)}getLabelValue(){const{value:n,value2:r}=this.value;return this.modifier===y.Between||this.modifier===y.NotBetween?`${Ar(n,this.ratingSystem)??0}, ${Ar(r,this.ratingSystem)??0}`:`${Ar(n,this.ratingSystem)??0}`}}const Lr=new Tr({messageID:"path",type:"path",defaultModifier:y.Includes,makeCriterion:()=>new gh});class gh extends Ze{constructor(){super(Lr)}}function hh(){this.__data__=[],this.size=0}function Mu(e,t){return e===t||e!==e&&t!==t}function jr(e,t){for(var n=e.length;n--;)if(Mu(e[n][0],t))return n;return-1}var vh=Array.prototype,bh=vh.splice;function yh(e){var t=this.__data__,n=jr(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():bh.call(t,n,1),--this.size,!0}function Sh(e){var t=this.__data__,n=jr(t,e);return n<0?void 0:t[n][1]}function xh(e){return jr(this.__data__,e)>-1}function Ih(e,t){var n=this.__data__,r=jr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function ct(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ct.prototype.clear=hh,ct.prototype.delete=yh,ct.prototype.get=Sh,ct.prototype.has=xh,ct.prototype.set=Ih;function _h(){this.__data__=new ct,this.size=0}function Ch(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function wh(e){return this.__data__.get(e)}function Oh(e){return this.__data__.has(e)}var Fu=typeof global=="object"&&global&&global.Object===Object&&global,Eh=typeof self=="object"&&self&&self.Object===Object&&self,et=Fu||Eh||Function("return this")(),tn=et.Symbol,Nu=Object.prototype,Th=Nu.hasOwnProperty,Dh=Nu.toString,Bn=tn?tn.toStringTag:void 0;function $h(e){var t=Th.call(e,Bn),n=e[Bn];try{e[Bn]=void 0;var r=!0}catch{}var i=Dh.call(e);return r&&(t?e[Bn]=n:delete e[Bn]),i}var Ph=Object.prototype,Mh=Ph.toString;function Fh(e){return Mh.call(e)}var Nh="[object Null]",kh="[object Undefined]",ku=tn?tn.toStringTag:void 0;function nn(e){return e==null?e===void 0?kh:Nh:ku&&ku in Object(e)?$h(e):Fh(e)}function bt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Ah="[object AsyncFunction]",Lh="[object Function]",jh="[object GeneratorFunction]",qh="[object Proxy]";function Au(e){if(!bt(e))return!1;var t=nn(e);return t==Lh||t==jh||t==Ah||t==qh}var Ia=et["__core-js_shared__"],Lu=function(){var e=/[^.]+$/.exec(Ia&&Ia.keys&&Ia.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Bh(e){return!!Lu&&Lu in e}var Rh=Function.prototype,Vh=Rh.toString;function $t(e){if(e!=null){try{return Vh.call(e)}catch{}try{return e+""}catch{}}return""}var Gh=/[\\^$.*+?()[\]{}|]/g,Uh=/^\[object .+?Constructor\]$/,zh=Function.prototype,Hh=Object.prototype,Wh=zh.toString,Yh=Hh.hasOwnProperty,Qh=RegExp("^"+Wh.call(Yh).replace(Gh,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Kh(e){if(!bt(e)||Bh(e))return!1;var t=Au(e)?Qh:Uh;return t.test($t(e))}function Jh(e,t){return e==null?void 0:e[t]}function Pt(e,t){var n=Jh(e,t);return Kh(n)?n:void 0}var Rn=Pt(et,"Map"),Vn=Pt(Object,"create");function Xh(){this.__data__=Vn?Vn(null):{},this.size=0}function Zh(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var ev="__lodash_hash_undefined__",tv=Object.prototype,nv=tv.hasOwnProperty;function rv(e){var t=this.__data__;if(Vn){var n=t[e];return n===ev?void 0:n}return nv.call(t,e)?t[e]:void 0}var iv=Object.prototype,av=iv.hasOwnProperty;function sv(e){var t=this.__data__;return Vn?t[e]!==void 0:av.call(t,e)}var ov="__lodash_hash_undefined__";function uv(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Vn&&t===void 0?ov:t,this}function Mt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Mt.prototype.clear=Xh,Mt.prototype.delete=Zh,Mt.prototype.get=rv,Mt.prototype.has=sv,Mt.prototype.set=uv;function cv(){this.size=0,this.__data__={hash:new Mt,map:new(Rn||ct),string:new Mt}}function lv(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function qr(e,t){var n=e.__data__;return lv(t)?n[typeof t=="string"?"string":"hash"]:n.map}function dv(e){var t=qr(this,e).delete(e);return this.size-=t?1:0,t}function fv(e){return qr(this,e).get(e)}function pv(e){return qr(this,e).has(e)}function mv(e,t){var n=qr(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function rn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}rn.prototype.clear=cv,rn.prototype.delete=dv,rn.prototype.get=fv,rn.prototype.has=pv,rn.prototype.set=mv;var gv=200;function hv(e,t){var n=this.__data__;if(n instanceof ct){var r=n.__data__;if(!Rn||r.length<gv-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new rn(r)}return n.set(e,t),this.size=n.size,this}function an(e){var t=this.__data__=new ct(e);this.size=t.size}an.prototype.clear=_h,an.prototype.delete=Ch,an.prototype.get=wh,an.prototype.has=Oh,an.prototype.set=hv;function vv(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var ju=function(){try{var e=Pt(Object,"defineProperty");return e({},"",{}),e}catch{}}();function bv(e,t,n){t=="__proto__"&&ju?ju(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var yv=Object.prototype,Sv=yv.hasOwnProperty;function xv(e,t,n){var r=e[t];(!(Sv.call(e,t)&&Mu(r,n))||n===void 0&&!(t in e))&&bv(e,t,n)}function Iv(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function sn(e){return e!=null&&typeof e=="object"}var _v="[object Arguments]";function qu(e){return sn(e)&&nn(e)==_v}var Bu=Object.prototype,Cv=Bu.hasOwnProperty,wv=Bu.propertyIsEnumerable,Ov=qu(function(){return arguments}())?qu:function(e){return sn(e)&&Cv.call(e,"callee")&&!wv.call(e,"callee")},_a=Array.isArray;function Ev(){return!1}var Ru=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Vu=Ru&&typeof module=="object"&&module&&!module.nodeType&&module,Tv=Vu&&Vu.exports===Ru,Gu=Tv?et.Buffer:void 0,Dv=Gu?Gu.isBuffer:void 0,Uu=Dv||Ev,$v=9007199254740991,Pv=/^(?:0|[1-9]\d*)$/;function Mv(e,t){var n=typeof e;return t=t??$v,!!t&&(n=="number"||n!="symbol"&&Pv.test(e))&&e>-1&&e%1==0&&e<t}var Fv=9007199254740991;function zu(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Fv}var Nv="[object Arguments]",kv="[object Array]",Av="[object Boolean]",Lv="[object Date]",jv="[object Error]",qv="[object Function]",Bv="[object Map]",Rv="[object Number]",Vv="[object Object]",Gv="[object RegExp]",Uv="[object Set]",zv="[object String]",Hv="[object WeakMap]",Wv="[object ArrayBuffer]",Yv="[object DataView]",Qv="[object Float32Array]",Kv="[object Float64Array]",Jv="[object Int8Array]",Xv="[object Int16Array]",Zv="[object Int32Array]",e0="[object Uint8Array]",t0="[object Uint8ClampedArray]",n0="[object Uint16Array]",r0="[object Uint32Array]",ge={};ge[Qv]=ge[Kv]=ge[Jv]=ge[Xv]=ge[Zv]=ge[e0]=ge[t0]=ge[n0]=ge[r0]=!0,ge[Nv]=ge[kv]=ge[Wv]=ge[Av]=ge[Yv]=ge[Lv]=ge[jv]=ge[qv]=ge[Bv]=ge[Rv]=ge[Vv]=ge[Gv]=ge[Uv]=ge[zv]=ge[Hv]=!1;function i0(e){return sn(e)&&zu(e.length)&&!!ge[nn(e)]}function Ca(e){return function(t){return e(t)}}var Hu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Gn=Hu&&typeof module=="object"&&module&&!module.nodeType&&module,a0=Gn&&Gn.exports===Hu,wa=a0&&Fu.process,on=function(){try{var e=Gn&&Gn.require&&Gn.require("util").types;return e||wa&&wa.binding&&wa.binding("util")}catch{}}(),Wu=on&&on.isTypedArray,s0=Wu?Ca(Wu):i0,o0=Object.prototype,u0=o0.hasOwnProperty;function c0(e,t){var n=_a(e),r=!n&&Ov(e),i=!n&&!r&&Uu(e),a=!n&&!r&&!i&&s0(e),s=n||r||i||a,u=s?Iv(e.length,String):[],o=u.length;for(var c in e)u0.call(e,c)&&!(s&&(c=="length"||i&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Mv(c,o)))&&u.push(c);return u}var l0=Object.prototype;function Yu(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||l0;return e===n}function Qu(e,t){return function(n){return e(t(n))}}var d0=Qu(Object.keys,Object),f0=Object.prototype,p0=f0.hasOwnProperty;function m0(e){if(!Yu(e))return d0(e);var t=[];for(var n in Object(e))p0.call(e,n)&&n!="constructor"&&t.push(n);return t}function g0(e){return e!=null&&zu(e.length)&&!Au(e)}function h0(e){return g0(e)?c0(e):m0(e)}var Ku=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ju=Ku&&typeof module=="object"&&module&&!module.nodeType&&module,v0=Ju&&Ju.exports===Ku,Xu=v0?et.Buffer:void 0;Xu&&Xu.allocUnsafe;function b0(e,t){return e.slice()}function y0(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var s=e[n];t(s,n,e)&&(a[i++]=s)}return a}function S0(){return[]}var x0=Object.prototype,I0=x0.propertyIsEnumerable,Zu=Object.getOwnPropertySymbols,_0=Zu?function(e){return e==null?[]:(e=Object(e),y0(Zu(e),function(t){return I0.call(e,t)}))}:S0;function C0(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var w0=Qu(Object.getPrototypeOf,Object);function O0(e,t,n){var r=t(e);return _a(e)?r:C0(r,n(e))}function E0(e){return O0(e,h0,_0)}var Oa=Pt(et,"DataView"),Ea=Pt(et,"Promise"),Ta=Pt(et,"Set"),Da=Pt(et,"WeakMap"),ec="[object Map]",T0="[object Object]",tc="[object Promise]",nc="[object Set]",rc="[object WeakMap]",ic="[object DataView]",D0=$t(Oa),$0=$t(Rn),P0=$t(Ea),M0=$t(Ta),F0=$t(Da),lt=nn;(Oa&&lt(new Oa(new ArrayBuffer(1)))!=ic||Rn&&lt(new Rn)!=ec||Ea&&lt(Ea.resolve())!=tc||Ta&&lt(new Ta)!=nc||Da&&lt(new Da)!=rc)&&(lt=function(e){var t=nn(e),n=t==T0?e.constructor:void 0,r=n?$t(n):"";if(r)switch(r){case D0:return ic;case $0:return ec;case P0:return tc;case M0:return nc;case F0:return rc}return t});var N0=Object.prototype,k0=N0.hasOwnProperty;function A0(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&k0.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var ac=et.Uint8Array;function $a(e){var t=new e.constructor(e.byteLength);return new ac(t).set(new ac(e)),t}function L0(e,t){var n=$a(e.buffer);return new e.constructor(n,e.byteOffset,e.byteLength)}var j0=/\w*$/;function q0(e){var t=new e.constructor(e.source,j0.exec(e));return t.lastIndex=e.lastIndex,t}var sc=tn?tn.prototype:void 0,oc=sc?sc.valueOf:void 0;function B0(e){return oc?Object(oc.call(e)):{}}function R0(e,t){var n=$a(e.buffer);return new e.constructor(n,e.byteOffset,e.length)}var V0="[object Boolean]",G0="[object Date]",U0="[object Map]",z0="[object Number]",H0="[object RegExp]",W0="[object Set]",Y0="[object String]",Q0="[object Symbol]",K0="[object ArrayBuffer]",J0="[object DataView]",X0="[object Float32Array]",Z0="[object Float64Array]",eb="[object Int8Array]",tb="[object Int16Array]",nb="[object Int32Array]",rb="[object Uint8Array]",ib="[object Uint8ClampedArray]",ab="[object Uint16Array]",sb="[object Uint32Array]";function ob(e,t,n){var r=e.constructor;switch(t){case K0:return $a(e);case V0:case G0:return new r(+e);case J0:return L0(e);case X0:case Z0:case eb:case tb:case nb:case rb:case ib:case ab:case sb:return R0(e);case U0:return new r;case z0:case Y0:return new r(e);case H0:return q0(e);case W0:return new r;case Q0:return B0(e)}}var uc=Object.create,ub=function(){function e(){}return function(t){if(!bt(t))return{};if(uc)return uc(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function cb(e){return typeof e.constructor=="function"&&!Yu(e)?ub(w0(e)):{}}var lb="[object Map]";function db(e){return sn(e)&&lt(e)==lb}var cc=on&&on.isMap,fb=cc?Ca(cc):db,pb="[object Set]";function mb(e){return sn(e)&&lt(e)==pb}var lc=on&&on.isSet,gb=lc?Ca(lc):mb,dc="[object Arguments]",hb="[object Array]",vb="[object Boolean]",bb="[object Date]",yb="[object Error]",fc="[object Function]",Sb="[object GeneratorFunction]",xb="[object Map]",Ib="[object Number]",pc="[object Object]",_b="[object RegExp]",Cb="[object Set]",wb="[object String]",Ob="[object Symbol]",Eb="[object WeakMap]",Tb="[object ArrayBuffer]",Db="[object DataView]",$b="[object Float32Array]",Pb="[object Float64Array]",Mb="[object Int8Array]",Fb="[object Int16Array]",Nb="[object Int32Array]",kb="[object Uint8Array]",Ab="[object Uint8ClampedArray]",Lb="[object Uint16Array]",jb="[object Uint32Array]",pe={};pe[dc]=pe[hb]=pe[Tb]=pe[Db]=pe[vb]=pe[bb]=pe[$b]=pe[Pb]=pe[Mb]=pe[Fb]=pe[Nb]=pe[xb]=pe[Ib]=pe[pc]=pe[_b]=pe[Cb]=pe[wb]=pe[Ob]=pe[kb]=pe[Ab]=pe[Lb]=pe[jb]=!0,pe[yb]=pe[fc]=pe[Eb]=!1;function Br(e,t,n,r,i,a){var s;if(s!==void 0)return s;if(!bt(e))return e;var u=_a(e);if(u)s=A0(e);else{var o=lt(e),c=o==fc||o==Sb;if(Uu(e))return b0(e);if(o==pc||o==dc||c&&!i)s=c?{}:cb(e);else{if(!pe[o])return i?e:{};s=ob(e,o)}}a||(a=new an);var l=a.get(e);if(l)return l;a.set(e,s),gb(e)?e.forEach(function(p){s.add(Br(p,t,n,p,e,a))}):fb(e)&&e.forEach(function(p,I){s.set(I,Br(p,t,n,I,e,a))});var f=E0,g=u?void 0:f(e);return vv(g||e,function(p,I){g&&(I=p,p=e[I]),xv(s,I,Br(p,t,n,I,e,a))}),s}var qb=1,Bb=4;function Rr(e){return Br(e,qb|Bb)}function mc(e){return e?e.map(t=>t).join(", "):""}const yt=new ou({type:"custom_fields",messageID:"custom_fields.title",makeCriterion:()=>new gc});class gc extends su{constructor(){super(yt);X(this,"value",[])}isValid(){return this.value.length>0}applyToCriterionInput(n){n.custom_fields=Rr(this.value)}applyToSavedCriterion(n){n.custom_fields=Rr(this.value)}getLabel(n){var o;if(this.value.length===0)return"";const r=this.value[0];let i="",a="";r.modifier!==y.IsNull&&r.modifier!==y.NotNull&&(((o=r.value)==null?void 0:o.length)??0)>0&&(a=mc(r.value));const s=ve.getModifierLabel(n,r.modifier),u={criterion:r.field,modifierString:s,valueString:a,others:""};return this.value.length===1?i="custom_fields.criteria_format_string":(i="custom_fields.criteria_format_string_others",u.others=(this.value.length-1).toString()),n.formatMessage({id:i},u)}getValueLabel(n,r){var u;let i="";r.modifier!==y.IsNull&&r.modifier!==y.NotNull&&(((u=r.value)==null?void 0:u.length)??0)>0&&(i=mc(r.value));const a=ve.getModifierLabel(n,r.modifier),s={criterion:r.field,modifierString:a,valueString:i};return n.formatMessage({id:"custom_fields.criteria_format_string"},s)}toQueryParams(){return{type:this.criterionOption.type,value:this.value}}fromDecodedParams(n){const r=n;this.value=Rr(r.value)}setFromSavedCriterion(n){this.value=Rr(n)}}const hc=[y.Includes],vc=y.Includes,bc="folders",Pa=new fe({messageID:"folder",type:"folder",modifierOptions:hc,defaultModifier:vc,inputType:bc,makeCriterion:()=>new Rb}),yc=new fe({messageID:"parent_folder",type:"parent_folder",modifierOptions:hc,defaultModifier:vc,inputType:bc,makeCriterion:()=>new Vb});class Rb extends Ln{constructor(){super(Pa)}applyToCriterionInput(t){t.files_filter={parent_folder:this.toCriterionInput()}}}class Vb extends Ln{constructor(){super(yc)}applyToCriterionInput(t){t.parent_folder=this.toCriterionInput()}}const Gb="path",Ub=["date",...xa].map(Ee.createSortBy).concat([{messageID:"performer_age",value:"performer_age"},{messageID:"image_count",value:"images_count"},{messageID:"zip_file_count",value:"file_count"}]),zb=[be.Grid,be.List,be.Wall],Hb=Z("performer_age"),Wb=[re("title"),re("code","scene_code"),re("details"),re("photographer"),Lr,yc,re("checksum","media_info.md5"),Dt,Nr,bu,Vg,vt,mu,Z("tag_count"),Sa,Jt,Z("performer_count"),Hb,Fr,Z("image_count"),Su,Zt,re("url"),Z("file_count","zip_file_count"),ut("date"),Oe("created_at"),Oe("updated_at"),yt],Yb=new Ee(Gb,Ub,zb,Wb),Sc=new Map([["Landscape",fr.Landscape],["Portrait",fr.Portrait],["Square",fr.Square]]),Qb=(e,t)=>e?Sc.get(e):void 0,Kb=Array.from(Sc.keys());class Jb extends ga{toCriterionInput(){return{value:this.value.map(t=>Qb(t)).filter(t=>t)}}}class Xb extends fe{constructor(t){super({messageID:t,type:t,options:Kb,makeCriterion:()=>new Jb(this)})}}const xc=new Xb("orientation"),Zb="galleries",Ma=new ma("galleries","galleries",!0,Zb,()=>new Ic);class Ic extends An{constructor(){super(Ma)}}const ey={phash:"media_info.phash",stash_id:"stash_id",title:"title",url:"url"},_c=["phash","stash_id","title","url"],Fa=new fe({messageID:"media_info.phash",type:"phash_distance",inputType:"text",modifierOptions:[y.Equals,y.NotEquals,y.IsNull,y.NotNull],makeCriterion:()=>new Na});class Na extends ve{constructor(){super(Fa,{value:"",distance:0})}cloneValues(){this.value={...this.value}}getLabelValue(){const{value:t,distance:n}=this.value;return(this.modifier===y.Equals||this.modifier===y.NotEquals)&&n?`${t} (${n})`:`${t}`}toCriterionInput(){return{value:this.value.value,modifier:this.modifier,distance:this.value.distance}}}const Cc=new fe({messageID:"duplicated",type:"duplicated",modifierOptions:[],defaultModifier:y.Equals,makeCriterion:()=>new ty});class ty extends ve{constructor(){super(Cc,{})}cloneValues(){this.value={...this.value}}getLabel(t){const n=[],r=t.formatMessage({id:"true"}),i=t.formatMessage({id:"false"});for(const a of _c){const s=this.value[a];if(s!==void 0){const u=t.formatMessage({id:ey[a]});n.push(`${u}: ${s?r:i}`)}}return n.length===0&&this.value.duplicated!==void 0?`${t.formatMessage({id:"duplicated_phash"})}: ${this.value.duplicated?r:i}`:n.length===0?t.formatMessage({id:"duplicated"}):n.join(", ")}getLabelValue(t){return t.formatMessage({id:"duplicated"})}toCriterionInput(){return{duplicated:this.value.duplicated,distance:this.value.distance,phash:this.value.phash,url:this.value.url,stash_id:this.value.stash_id,title:this.value.title}}setFromSavedCriterion(t){const n=t;n.value!==void 0?typeof n.value=="object"?this.value=n.value:typeof n.value=="string"&&(this.value={phash:n.value==="true"}):typeof n=="object"&&(this.value=n),n.modifier&&(this.modifier=n.modifier)}isValid(){return _c.some(n=>this.value[n]!==void 0)||this.value.duplicated!==void 0}}const ny="path",ry=["filesize","file_count","date","resolution","performer_age",...xa].map(Ee.createSortBy).concat([{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"}]),iy=[be.Grid,be.Wall],ay=Z("performer_age"),sy=[re("title"),re("code","scene_code"),re("details"),re("photographer"),Dr("checksum","media_info.md5"),Fa,Lr,Pa,Ma,Nr,Z("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),ba,xc,Bg,vt,Dt,Z("tag_count"),Sa,Jt,Z("performer_count"),ay,Fr,Zt,re("url"),ut("date"),Z("file_count"),Oe("created_at"),Oe("updated_at"),yt],oy=new Ee(ny,ry,iy,sy),wc="groups",Oc=[y.Includes,y.Excludes,y.IsNull,y.NotNull],Ec=y.Includes;class ka extends fe{constructor(t,n){super({messageID:t,type:n,modifierOptions:Oc,defaultModifier:Ec,inputType:wc,makeCriterion:()=>new Un(this)})}}const Vr=new ka("groups","groups");class Un extends Ln{}const Tc=new ka("containing_groups","containing_groups"),Dc=new ka("sub_groups","sub_groups"),uy=new fe({messageID:"groups",type:"movies",modifierOptions:Oc,defaultModifier:Ec,inputType:wc,hidden:!0,makeCriterion:()=>new Un(Vr)}),cy="name",ly=["name","random","date","duration","rating","tag_count","sub_group_description","sub_group_order"].map(Ee.createSortBy).concat([{messageID:"scene_count",value:"scenes_count"},{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"}]),dy=[be.Grid],fy=[Zt,zg,re("url"),re("name"),re("director"),re("synopsis"),Mr("duration"),Dt,Jt,ut("date"),Z("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),Tc,Dc,Z("containing_group_count"),Z("sub_group_count"),vt,Z("tag_count"),Z("scene_count"),Oe("created_at"),Oe("updated_at"),yt],py=new Ee(cy,ly,dy,fy),$c=new Map([["Female",_e.Female],["Male",_e.Male],["Transgender Male",_e.TransgenderMale],["Transgender Female",_e.TransgenderFemale],["Intersex",_e.Intersex],["Non-Binary",_e.NonBinary]]);_e.Female,_e.Male,_e.TransgenderFemale,_e.TransgenderMale,_e.Intersex,_e.NonBinary;const my=(e,t)=>{if(!e)return;const n=Object.entries(_e).find(i=>i[1]===e);return n?n[1]:$c.get(e)},gy=Array.from($c.keys()),Pc=new fe({messageID:"gender",type:"gender",options:gy,modifierOptions:[y.Includes,y.Excludes,y.IsNull,y.NotNull],defaultModifier:y.Includes,makeCriterion:()=>new hy});class hy extends ga{constructor(t=[]){super(Pc,t)}toCriterionInput(){return{value_list:this.value.map(n=>my(n)),modifier:this.modifier}}setFromSavedCriterion(t){typeof t.value=="string"&&(t={...t,value:[t.value]}),super.setFromSavedCriterion(t)}}const Mc=new Map([["Uncut",dr.Uncut],["Cut",dr.Cut]]),vy=(e,t)=>{if(!e)return;const n=Object.entries(dr).find(i=>i[1]===e);return n?n[1]:Mc.get(e)},by=Array.from(Mc.keys()),Fc=new fe({messageID:"circumcised",type:"circumcised",modifierOptions:[y.Includes,y.Excludes,y.IsNull,y.NotNull],defaultModifier:y.Includes,options:by,makeCriterion:()=>new yy});class yy extends ga{constructor(){super(Fc)}toCriterionInput(){return{value:this.value.map(n=>vy(n)),modifier:this.modifier}}}const zn=new fe({messageID:"stash_id",type:"stash_id_endpoint",modifierOptions:[y.Equals,y.NotEquals,y.IsNull,y.NotNull],makeCriterion:()=>new Sy});class Sy extends ve{constructor(){super(zn,{endpoint:"",stashID:""})}cloneValues(){this.value={...this.value}}get value(){return this._value}set value(t){typeof t!="object"?this._value={endpoint:"",stashID:t}:this._value=t}toCriterionInput(){return{endpoint:this.value.endpoint,stash_id:this.value.stashID,modifier:this.modifier}}getLabel(t){const n=ve.getModifierLabel(t,this.modifier);let r="";return this.modifier!==y.IsNull&&this.modifier!==y.NotNull?r=this.getLabelValue(t):this.value.endpoint&&(r="("+this.value.endpoint+")"),t.formatMessage({id:"criterion_modifier.format_string"},{criterion:t.formatMessage({id:this.criterionOption.messageID}),modifierString:n,valueString:r})}getLabelValue(t){let n=this.value.stashID;return this.value.endpoint&&(n+=" ("+this.value.endpoint+")"),n}setFromSavedCriterion(t){super.setFromSavedCriterion(t)}toQueryParams(){super.toQueryParams();let t;return(this.modifier===y.IsNull||this.modifier===y.NotNull)&&!this.value.endpoint?t={type:this.criterionOption.type,modifier:this.modifier}:t={type:this.criterionOption.type,value:this.value,modifier:this.modifier},t}isValid(){return this.modifier===y.IsNull||this.modifier===y.NotNull||this.value.stashID.length>0}}var Nc={};const xy=[["AF","AFG","004","ISO 3166-2:AF"],["AL","ALB","008","ISO 3166-2:AL"],["DZ","DZA","012","ISO 3166-2:DZ"],["AS","ASM","016","ISO 3166-2:AS"],["AD","AND","020","ISO 3166-2:AD"],["AO","AGO","024","ISO 3166-2:AO"],["AI","AIA","660","ISO 3166-2:AI"],["AQ","ATA","010","ISO 3166-2:AQ"],["AG","ATG","028","ISO 3166-2:AG"],["AR","ARG","032","ISO 3166-2:AR"],["AM","ARM","051","ISO 3166-2:AM"],["AW","ABW","533","ISO 3166-2:AW"],["AU","AUS","036","ISO 3166-2:AU"],["AT","AUT","040","ISO 3166-2:AT"],["AZ","AZE","031","ISO 3166-2:AZ"],["BS","BHS","044","ISO 3166-2:BS"],["BH","BHR","048","ISO 3166-2:BH"],["BD","BGD","050","ISO 3166-2:BD"],["BB","BRB","052","ISO 3166-2:BB"],["BY","BLR","112","ISO 3166-2:BY"],["BE","BEL","056","ISO 3166-2:BE"],["BZ","BLZ","084","ISO 3166-2:BZ"],["BJ","BEN","204","ISO 3166-2:BJ"],["BM","BMU","060","ISO 3166-2:BM"],["BT","BTN","064","ISO 3166-2:BT"],["BO","BOL","068","ISO 3166-2:BO"],["BA","BIH","070","ISO 3166-2:BA"],["BW","BWA","072","ISO 3166-2:BW"],["BV","BVT","074","ISO 3166-2:BV"],["BR","BRA","076","ISO 3166-2:BR"],["IO","IOT","086","ISO 3166-2:IO"],["BN","BRN","096","ISO 3166-2:BN"],["BG","BGR","100","ISO 3166-2:BG"],["BF","BFA","854","ISO 3166-2:BF"],["BI","BDI","108","ISO 3166-2:BI"],["KH","KHM","116","ISO 3166-2:KH"],["CM","CMR","120","ISO 3166-2:CM"],["CA","CAN","124","ISO 3166-2:CA"],["CV","CPV","132","ISO 3166-2:CV"],["KY","CYM","136","ISO 3166-2:KY"],["CF","CAF","140","ISO 3166-2:CF"],["TD","TCD","148","ISO 3166-2:TD"],["CL","CHL","152","ISO 3166-2:CL"],["CN","CHN","156","ISO 3166-2:CN"],["CX","CXR","162","ISO 3166-2:CX"],["CC","CCK","166","ISO 3166-2:CC"],["CO","COL","170","ISO 3166-2:CO"],["KM","COM","174","ISO 3166-2:KM"],["CG","COG","178","ISO 3166-2:CG"],["CD","COD","180","ISO 3166-2:CD"],["CK","COK","184","ISO 3166-2:CK"],["CR","CRI","188","ISO 3166-2:CR"],["CI","CIV","384","ISO 3166-2:CI"],["HR","HRV","191","ISO 3166-2:HR"],["CU","CUB","192","ISO 3166-2:CU"],["CY","CYP","196","ISO 3166-2:CY"],["CZ","CZE","203","ISO 3166-2:CZ"],["DK","DNK","208","ISO 3166-2:DK"],["DJ","DJI","262","ISO 3166-2:DJ"],["DM","DMA","212","ISO 3166-2:DM"],["DO","DOM","214","ISO 3166-2:DO"],["EC","ECU","218","ISO 3166-2:EC"],["EG","EGY","818","ISO 3166-2:EG"],["SV","SLV","222","ISO 3166-2:SV"],["GQ","GNQ","226","ISO 3166-2:GQ"],["ER","ERI","232","ISO 3166-2:ER"],["EE","EST","233","ISO 3166-2:EE"],["ET","ETH","231","ISO 3166-2:ET"],["FK","FLK","238","ISO 3166-2:FK"],["FO","FRO","234","ISO 3166-2:FO"],["FJ","FJI","242","ISO 3166-2:FJ"],["FI","FIN","246","ISO 3166-2:FI"],["FR","FRA","250","ISO 3166-2:FR"],["GF","GUF","254","ISO 3166-2:GF"],["PF","PYF","258","ISO 3166-2:PF"],["TF","ATF","260","ISO 3166-2:TF"],["GA","GAB","266","ISO 3166-2:GA"],["GM","GMB","270","ISO 3166-2:GM"],["GE","GEO","268","ISO 3166-2:GE"],["DE","DEU","276","ISO 3166-2:DE"],["GH","GHA","288","ISO 3166-2:GH"],["GI","GIB","292","ISO 3166-2:GI"],["GR","GRC","300","ISO 3166-2:GR"],["GL","GRL","304","ISO 3166-2:GL"],["GD","GRD","308","ISO 3166-2:GD"],["GP","GLP","312","ISO 3166-2:GP"],["GU","GUM","316","ISO 3166-2:GU"],["GT","GTM","320","ISO 3166-2:GT"],["GN","GIN","324","ISO 3166-2:GN"],["GW","GNB","624","ISO 3166-2:GW"],["GY","GUY","328","ISO 3166-2:GY"],["HT","HTI","332","ISO 3166-2:HT"],["HM","HMD","334","ISO 3166-2:HM"],["VA","VAT","336","ISO 3166-2:VA"],["HN","HND","340","ISO 3166-2:HN"],["HK","HKG","344","ISO 3166-2:HK"],["HU","HUN","348","ISO 3166-2:HU"],["IS","ISL","352","ISO 3166-2:IS"],["IN","IND","356","ISO 3166-2:IN"],["ID","IDN","360","ISO 3166-2:ID"],["IR","IRN","364","ISO 3166-2:IR"],["IQ","IRQ","368","ISO 3166-2:IQ"],["IE","IRL","372","ISO 3166-2:IE"],["IL","ISR","376","ISO 3166-2:IL"],["IT","ITA","380","ISO 3166-2:IT"],["JM","JAM","388","ISO 3166-2:JM"],["JP","JPN","392","ISO 3166-2:JP"],["JO","JOR","400","ISO 3166-2:JO"],["KZ","KAZ","398","ISO 3166-2:KZ"],["KE","KEN","404","ISO 3166-2:KE"],["KI","KIR","296","ISO 3166-2:KI"],["KP","PRK","408","ISO 3166-2:KP"],["KR","KOR","410","ISO 3166-2:KR"],["KW","KWT","414","ISO 3166-2:KW"],["KG","KGZ","417","ISO 3166-2:KG"],["LA","LAO","418","ISO 3166-2:LA"],["LV","LVA","428","ISO 3166-2:LV"],["LB","LBN","422","ISO 3166-2:LB"],["LS","LSO","426","ISO 3166-2:LS"],["LR","LBR","430","ISO 3166-2:LR"],["LY","LBY","434","ISO 3166-2:LY"],["LI","LIE","438","ISO 3166-2:LI"],["LT","LTU","440","ISO 3166-2:LT"],["LU","LUX","442","ISO 3166-2:LU"],["MO","MAC","446","ISO 3166-2:MO"],["MG","MDG","450","ISO 3166-2:MG"],["MW","MWI","454","ISO 3166-2:MW"],["MY","MYS","458","ISO 3166-2:MY"],["MV","MDV","462","ISO 3166-2:MV"],["ML","MLI","466","ISO 3166-2:ML"],["MT","MLT","470","ISO 3166-2:MT"],["MH","MHL","584","ISO 3166-2:MH"],["MQ","MTQ","474","ISO 3166-2:MQ"],["MR","MRT","478","ISO 3166-2:MR"],["MU","MUS","480","ISO 3166-2:MU"],["YT","MYT","175","ISO 3166-2:YT"],["MX","MEX","484","ISO 3166-2:MX"],["FM","FSM","583","ISO 3166-2:FM"],["MD","MDA","498","ISO 3166-2:MD"],["MC","MCO","492","ISO 3166-2:MC"],["MN","MNG","496","ISO 3166-2:MN"],["MS","MSR","500","ISO 3166-2:MS"],["MA","MAR","504","ISO 3166-2:MA"],["MZ","MOZ","508","ISO 3166-2:MZ"],["MM","MMR","104","ISO 3166-2:MM"],["NA","NAM","516","ISO 3166-2:NA"],["NR","NRU","520","ISO 3166-2:NR"],["NP","NPL","524","ISO 3166-2:NP"],["NL","NLD","528","ISO 3166-2:NL"],["NC","NCL","540","ISO 3166-2:NC"],["NZ","NZL","554","ISO 3166-2:NZ"],["NI","NIC","558","ISO 3166-2:NI"],["NE","NER","562","ISO 3166-2:NE"],["NG","NGA","566","ISO 3166-2:NG"],["NU","NIU","570","ISO 3166-2:NU"],["NF","NFK","574","ISO 3166-2:NF"],["MP","MNP","580","ISO 3166-2:MP"],["MK","MKD","807","ISO 3166-2:MK"],["NO","NOR","578","ISO 3166-2:NO"],["OM","OMN","512","ISO 3166-2:OM"],["PK","PAK","586","ISO 3166-2:PK"],["PW","PLW","585","ISO 3166-2:PW"],["PS","PSE","275","ISO 3166-2:PS"],["PA","PAN","591","ISO 3166-2:PA"],["PG","PNG","598","ISO 3166-2:PG"],["PY","PRY","600","ISO 3166-2:PY"],["PE","PER","604","ISO 3166-2:PE"],["PH","PHL","608","ISO 3166-2:PH"],["PN","PCN","612","ISO 3166-2:PN"],["PL","POL","616","ISO 3166-2:PL"],["PT","PRT","620","ISO 3166-2:PT"],["PR","PRI","630","ISO 3166-2:PR"],["QA","QAT","634","ISO 3166-2:QA"],["RE","REU","638","ISO 3166-2:RE"],["RO","ROU","642","ISO 3166-2:RO"],["RU","RUS","643","ISO 3166-2:RU"],["RW","RWA","646","ISO 3166-2:RW"],["SH","SHN","654","ISO 3166-2:SH"],["KN","KNA","659","ISO 3166-2:KN"],["LC","LCA","662","ISO 3166-2:LC"],["PM","SPM","666","ISO 3166-2:PM"],["VC","VCT","670","ISO 3166-2:VC"],["WS","WSM","882","ISO 3166-2:WS"],["SM","SMR","674","ISO 3166-2:SM"],["ST","STP","678","ISO 3166-2:ST"],["SA","SAU","682","ISO 3166-2:SA"],["SN","SEN","686","ISO 3166-2:SN"],["SC","SYC","690","ISO 3166-2:SC"],["SL","SLE","694","ISO 3166-2:SL"],["SG","SGP","702","ISO 3166-2:SG"],["SK","SVK","703","ISO 3166-2:SK"],["SI","SVN","705","ISO 3166-2:SI"],["SB","SLB","090","ISO 3166-2:SB"],["SO","SOM","706","ISO 3166-2:SO"],["ZA","ZAF","710","ISO 3166-2:ZA"],["GS","SGS","239","ISO 3166-2:GS"],["ES","ESP","724","ISO 3166-2:ES"],["LK","LKA","144","ISO 3166-2:LK"],["SD","SDN","729","ISO 3166-2:SD"],["SR","SUR","740","ISO 3166-2:SR"],["SJ","SJM","744","ISO 3166-2:SJ"],["SZ","SWZ","748","ISO 3166-2:SZ"],["SE","SWE","752","ISO 3166-2:SE"],["CH","CHE","756","ISO 3166-2:CH"],["SY","SYR","760","ISO 3166-2:SY"],["TW","TWN","158","ISO 3166-2:TW"],["TJ","TJK","762","ISO 3166-2:TJ"],["TZ","TZA","834","ISO 3166-2:TZ"],["TH","THA","764","ISO 3166-2:TH"],["TL","TLS","626","ISO 3166-2:TL"],["TG","TGO","768","ISO 3166-2:TG"],["TK","TKL","772","ISO 3166-2:TK"],["TO","TON","776","ISO 3166-2:TO"],["TT","TTO","780","ISO 3166-2:TT"],["TN","TUN","788","ISO 3166-2:TN"],["TR","TUR","792","ISO 3166-2:TR"],["TM","TKM","795","ISO 3166-2:TM"],["TC","TCA","796","ISO 3166-2:TC"],["TV","TUV","798","ISO 3166-2:TV"],["UG","UGA","800","ISO 3166-2:UG"],["UA","UKR","804","ISO 3166-2:UA"],["AE","ARE","784","ISO 3166-2:AE"],["GB","GBR","826","ISO 3166-2:GB"],["US","USA","840","ISO 3166-2:US"],["UM","UMI","581","ISO 3166-2:UM"],["UY","URY","858","ISO 3166-2:UY"],["UZ","UZB","860","ISO 3166-2:UZ"],["VU","VUT","548","ISO 3166-2:VU"],["VE","VEN","862","ISO 3166-2:VE"],["VN","VNM","704","ISO 3166-2:VN"],["VG","VGB","092","ISO 3166-2:VG"],["VI","VIR","850","ISO 3166-2:VI"],["WF","WLF","876","ISO 3166-2:WF"],["EH","ESH","732","ISO 3166-2:EH"],["YE","YEM","887","ISO 3166-2:YE"],["ZM","ZMB","894","ISO 3166-2:ZM"],["ZW","ZWE","716","ISO 3166-2:ZW"],["AX","ALA","248","ISO 3166-2:AX"],["BQ","BES","535","ISO 3166-2:BQ"],["CW","CUW","531","ISO 3166-2:CW"],["GG","GGY","831","ISO 3166-2:GG"],["IM","IMN","833","ISO 3166-2:IM"],["JE","JEY","832","ISO 3166-2:JE"],["ME","MNE","499","ISO 3166-2:ME"],["BL","BLM","652","ISO 3166-2:BL"],["MF","MAF","663","ISO 3166-2:MF"],["RS","SRB","688","ISO 3166-2:RS"],["SX","SXM","534","ISO 3166-2:SX"],["SS","SSD","728","ISO 3166-2:SS"],["XK","XKK","983","ISO 3166-2:XK"]],Iy=["br","cy","dv","sw","eu","af","am","ha","ku","ml","mt","no","ps","sd","so","sq","ta","tg","tt","ug","ur","vi","ar","az","be","bg","bn","bs","ca","cs","da","de","el","en","es","et","fa","fi","fr","ga","gl","he","hi","hr","hu","hy","id","is","it","ja","ka","kk","km","ko","ky","lt","lv","mk","mn","mr","ms","nb","nl","nn","pl","pt","ro","ru","sk","sl","sr","sv","th","tk","tr","uk","uz","zh"];var Gr={};Gr.remove=_y;for(var Ur=[{base:" ",chars:" "},{base:"0",chars:"߀"},{base:"A",chars:"ⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",chars:"Ꜳ"},{base:"AE",chars:"ÆǼǢ"},{base:"AO",chars:"Ꜵ"},{base:"AU",chars:"Ꜷ"},{base:"AV",chars:"ꜸꜺ"},{base:"AY",chars:"Ꜽ"},{base:"B",chars:"ⒷＢḂḄḆɃƁ"},{base:"C",chars:"ⒸＣꜾḈĆCĈĊČÇƇȻ"},{base:"D",chars:"ⒹＤḊĎḌḐḒḎĐƊƉᴅꝹ"},{base:"Dh",chars:"Ð"},{base:"DZ",chars:"ǱǄ"},{base:"Dz",chars:"ǲǅ"},{base:"E",chars:"ɛⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎᴇ"},{base:"F",chars:"ꝼⒻＦḞƑꝻ"},{base:"G",chars:"ⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾɢ"},{base:"H",chars:"ⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",chars:"ⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",chars:"ⒿＪĴɈȷ"},{base:"K",chars:"ⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",chars:"ⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",chars:"Ǉ"},{base:"Lj",chars:"ǈ"},{base:"M",chars:"ⓂＭḾṀṂⱮƜϻ"},{base:"N",chars:"ꞤȠⓃＮǸŃÑṄŇṆŅṊṈƝꞐᴎ"},{base:"NJ",chars:"Ǌ"},{base:"Nj",chars:"ǋ"},{base:"O",chars:"ⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OE",chars:"Œ"},{base:"OI",chars:"Ƣ"},{base:"OO",chars:"Ꝏ"},{base:"OU",chars:"Ȣ"},{base:"P",chars:"ⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",chars:"ⓆＱꝖꝘɊ"},{base:"R",chars:"ⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",chars:"ⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",chars:"ⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",chars:"Þ"},{base:"TZ",chars:"Ꜩ"},{base:"U",chars:"ⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",chars:"ⓋＶṼṾƲꝞɅ"},{base:"VY",chars:"Ꝡ"},{base:"W",chars:"ⓌＷẀẂŴẆẄẈⱲ"},{base:"X",chars:"ⓍＸẊẌ"},{base:"Y",chars:"ⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",chars:"ⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",chars:"ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",chars:"ꜳ"},{base:"ae",chars:"æǽǣ"},{base:"ao",chars:"ꜵ"},{base:"au",chars:"ꜷ"},{base:"av",chars:"ꜹꜻ"},{base:"ay",chars:"ꜽ"},{base:"b",chars:"ⓑｂḃḅḇƀƃɓƂ"},{base:"c",chars:"ｃⓒćĉċčçḉƈȼꜿↄ"},{base:"d",chars:"ⓓｄḋďḍḑḓḏđƌɖɗƋᏧԁꞪ"},{base:"dh",chars:"ð"},{base:"dz",chars:"ǳǆ"},{base:"e",chars:"ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇǝ"},{base:"f",chars:"ⓕｆḟƒ"},{base:"ff",chars:"ﬀ"},{base:"fi",chars:"ﬁ"},{base:"fl",chars:"ﬂ"},{base:"ffi",chars:"ﬃ"},{base:"ffl",chars:"ﬄ"},{base:"g",chars:"ⓖｇǵĝḡğġǧģǥɠꞡꝿᵹ"},{base:"h",chars:"ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",chars:"ƕ"},{base:"i",chars:"ⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",chars:"ⓙｊĵǰɉ"},{base:"k",chars:"ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",chars:"ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇɭ"},{base:"lj",chars:"ǉ"},{base:"m",chars:"ⓜｍḿṁṃɱɯ"},{base:"n",chars:"ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",chars:"ǌ"},{base:"o",chars:"ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿꝋꝍɵɔᴑ"},{base:"oe",chars:"œ"},{base:"oi",chars:"ƣ"},{base:"oo",chars:"ꝏ"},{base:"ou",chars:"ȣ"},{base:"p",chars:"ⓟｐṕṗƥᵽꝑꝓꝕρ"},{base:"q",chars:"ⓠｑɋꝗꝙ"},{base:"r",chars:"ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",chars:"ⓢｓśṥŝṡšṧṣṩșşȿꞩꞅẛʂ"},{base:"ss",chars:"ß"},{base:"t",chars:"ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",chars:"þ"},{base:"tz",chars:"ꜩ"},{base:"u",chars:"ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",chars:"ⓥｖṽṿʋꝟʌ"},{base:"vy",chars:"ꝡ"},{base:"w",chars:"ⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",chars:"ⓧｘẋẍ"},{base:"y",chars:"ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",chars:"ⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Aa={},zr=0;zr<Ur.length;zr+=1)for(var kc=Ur[zr].chars,La=0;La<kc.length;La+=1)Aa[kc[La]]=Ur[zr].base;function _y(e){return e.replace(/[^\u0000-\u007e]/g,function(t){return Aa[t]||t})}Gr.replacementList=Ur,Gr.diacriticsMap=Aa,function(e){const t=xy,n=Iy,r=Gr.remove,i={},a={},s={},u={},o={};t.forEach(function(C){const _=C;a[_[0]]=_[1],s[_[1]]=_[0],u[_[2]]=_[0],o[_[0]]=_[2]});function c(C){return("000"+(C||"")).slice(-3)}function l(C,_){return Object.prototype.hasOwnProperty.call(C,_)}function f(C,_){return Object.keys(C).reduce(function(h,E){const D=C[E];return h[E]=_(D,E),h},{})}function g(C,_){switch(C){case"official":return Array.isArray(_)?_[0]:_;case"all":return typeof _=="string"?[_]:_;case"alias":return Array.isArray(_)?_[1]||_[0]:_;default:throw new TypeError("LocaleNameType must be one of these: all, official, alias!")}}e.registerLocale=function(C){if(!C.locale)throw new TypeError("Missing localeData.locale");if(!C.countries)throw new TypeError("Missing localeData.countries");i[C.locale]=C.countries};function p(C){return s[C]}e.alpha3ToAlpha2=p;function I(C){return a[C]}e.alpha2ToAlpha3=I;function S(C){return o[p(C)]}e.alpha3ToNumeric=S;function b(C){return o[C]}e.alpha2ToNumeric=b;function x(C){const _=c(C);return I(u[_])}e.numericToAlpha3=x;function v(C){const _=c(C);return u[_]}e.numericToAlpha2=v;function w(C){if(typeof C=="string"){if(/^[0-9]*$/.test(C))return x(C);if(C.length===2)return I(C.toUpperCase());if(C.length===3)return C.toUpperCase()}if(typeof C=="number")return x(C)}e.toAlpha3=w;function T(C){if(typeof C=="string"){if(/^[0-9]*$/.test(C))return v(C);if(C.length===2)return C.toUpperCase();if(C.length===3)return p(C.toUpperCase())}if(typeof C=="number")return v(C)}e.toAlpha2=T,e.getName=function(C,_,h={}){"select"in h||(h.select="official");try{const D=i[_.toLowerCase()][T(C)];return g(h.select,D)}catch{return}},e.getNames=function(C,_={}){"select"in _||(_.select="official");const h=i[C.toLowerCase()];return h===void 0?{}:f(h,function(E){return g(_.select,E)})},e.getAlpha2Code=function(C,_){const h=D=>D.toLowerCase(),E=(D,$)=>h(D)===h($);try{const D=i[_.toLowerCase()];for(const $ in D)if(l(D,$)){if(typeof D[$]=="string"&&E(D[$],C))return $;if(Array.isArray(D[$])){for(const R of D[$])if(E(R,C))return $}}return}catch{return}},e.getSimpleAlpha2Code=function(C,_){const h=D=>r(D.toLowerCase()),E=(D,$)=>h(D)===h($);try{const D=i[_.toLowerCase()];for(const $ in D)if(l(D,$)){if(typeof D[$]=="string"&&E(D[$],C))return $;if(Array.isArray(D[$])){for(const R of D[$])if(E(R,C))return $}}return}catch{return}},e.getAlpha2Codes=function(){return a},e.getAlpha3Code=function(C,_){const h=e.getAlpha2Code(C,_);if(h)return e.toAlpha3(h)},e.getSimpleAlpha3Code=function(C,_){const h=e.getSimpleAlpha2Code(C,_);if(h)return e.toAlpha3(h)},e.getAlpha3Codes=function(){return s},e.getNumericCodes=function(){return u},e.langs=function(){return Object.keys(i)},e.getSupportedLanguages=function(){return n},e.isValid=function(C){if(!C)return!1;const _=C.toString().toUpperCase();return l(s,_)||l(a,_)||l(u,_)}}(Nc);const Ac=Ns(Nc),Cy=e=>e==="zh-CN"?"zh":e==="zh-TW"?"tw":e.slice(0,2),wy=(e,t="en")=>{if(!e)return;const n=Ac.getName(e,Cy(t));if(n)return n;if(t!=="en")return Ac.getName(e,"en")},Lc=new Tr({messageID:"country",type:"country",makeCriterion:()=>new jc});class jc extends Ze{constructor(){super(Lc)}getLabelValue(t){return this.modifier===y.Equals||this.modifier===y.NotEquals?wy(this.value,t.locale)??this.value:super.getLabelValue(t)}}const Oy="name",Ey=["name","height","birthdate","tag_count","random","rating","penis_length","play_count","last_played_at","latest_scene","career_start","career_end","weight","measurements","scenes_duration","scenes_size"].map(Ee.createSortBy).concat([{messageID:"scene_count",value:"scenes_count"},{messageID:"image_count",value:"images_count"},{messageID:"gallery_count",value:"galleries_count"},{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"},{messageID:"last_o_at",value:"last_o_at",sfwMessageID:"last_o_at_sfw"}]),Ty=[be.Grid,be.List,be.Tagger],Dy=["birth_year","death_year","age","weight","penis_length"],$y=["name","disambiguation","details","ethnicity","hair_color","eye_color","measurements","fake_tits","tattoos","piercings","aliases"],Py=[du,Pc,Fc,Rg,vt,Vr,Zt,zn,re("url"),Dt,Z("tag_count"),Z("scene_count"),Z("image_count"),Z("gallery_count"),Z("play_count"),Z("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),$r("ignore_auto_tag"),Lc,cu("height_cm","height"),...Dy.map(e=>cu(e)),...$y.map(e=>re(e)),ut("birthdate"),ut("death_date"),ut("career_start"),ut("career_end"),Oe("created_at"),Oe("updated_at"),yt],My=new Ee(Oy,Ey,Ty,Py),Fy="title",Ny=["duration","title","seconds","scene_id","random","scenes_updated_at"].map(Ee.createSortBy),ky=[be.Grid,be.Wall],Ay=[vt,xu,uh,Jt,Eg("duration"),Oe("created_at"),Oe("updated_at"),ut("scene_date"),Oe("scene_created_at"),Oe("scene_updated_at")],Ly=new Ee(Fy,Ny,ky,Ay),qc=new uu("hasMarkers","has_markers",()=>new jy);class jy extends ha{constructor(){super(qc)}}const Bc=new Ot("interactive","interactive",()=>new qy);class qy extends Et{constructor(){super(Bc)}}const ja=new Map([["de","Deutsche"],["en","English"],["es","Español"],["fr","Français"],["it","Italiano"],["ja","日本"],["ko","한국인"],["nl","Holandés"],["pt","Português"],["ru","Русский"],["00","Unknown"]]),By=e=>{if(e)return Array.from(ja.keys()).find(t=>ja.get(t)===e)},Ry=Array.from(ja.values()),Rc=new fe({messageID:"captions",type:"captions",modifierOptions:[y.Includes,y.Excludes,y.IsNull,y.NotNull],defaultModifier:y.Includes,options:Ry,makeCriterion:()=>new Vy});class Vy extends Ze{constructor(){super(Rc)}toCriterionInput(){return{value:By(this.value)??"",modifier:this.modifier}}}const Gy="date",Uy=["organized","date","file_count","filesize","duration","framerate","resolution","bitrate","last_played_at","resume_time","play_duration","play_count","interactive","interactive_speed","perceptual_similarity","performer_age","studio",...xa].map(Ee.createSortBy).concat([{messageID:"o_count",value:"o_counter",sfwMessageID:"o_count_sfw"},{messageID:"last_o_at",value:"last_o_at",sfwMessageID:"last_o_at_sfw"},{messageID:"group_scene_number",value:"group_scene_number"},{messageID:"scene_code",value:"code"}]),zy=[be.Grid,be.List,be.Wall,be.Tagger],Hy=Z("performer_age"),Wy=Mr("duration"),Yy=[re("title"),re("code","scene_code"),Lr,Pa,re("details"),re("director"),Dr("oshash","media_info.oshash"),re("checksum","media_info.md5"),Fa,Cc,Nr,Dt,Z("o_counter","o_count",{sfwMessageID:"o_count_sfw"}),ba,xc,Z("framerate"),Z("bitrate"),re("video_codec"),re("audio_codec"),Wy,Mr("resume_time"),Mr("play_duration"),Z("play_count"),Oe("last_played_at"),qc,qg,vt,Z("tag_count"),Sa,Jt,Z("performer_count"),Hy,Fr,Zt,Vr,uy,Ma,re("url"),zn,Z("stash_id_count"),Bc,Rc,Z("interactive_speed"),Z("file_count"),ut("date"),Oe("created_at"),Oe("updated_at"),yt],Qy=new Ee(Gy,Uy,zy,Yy),Ky="name",Jy=["name","tag_count","random","rating","scenes_duration","scenes_size","latest_scene"].map(Ee.createSortBy).concat([{messageID:"gallery_count",value:"galleries_count"},{messageID:"image_count",value:"images_count"},{messageID:"scene_count",value:"scenes_count"},{messageID:"o_count",value:"o_counter"},{messageID:"o_count_all",value:"o_counter_all"},{messageID:"performer_count",value:"performer_count"},{messageID:"performer_count_all",value:"performer_count_all"},{messageID:"subsidiary_studio_count",value:"child_count"},{messageID:"scene_marker_count",value:"scene_markers_count"}]),Xy=[be.Grid,be.List,be.Tagger],Zy=[pu,Dr("name"),re("details"),Cu,Ug,vt,Dt,$r("ignore_auto_tag"),$r("organized"),Z("tag_count"),Z("scene_count"),Z("image_count"),Z("gallery_count"),re("url"),zn,re("aliases"),Z("child_count","subsidiary_studio_count"),Oe("created_at"),Oe("updated_at"),yt],eS=new Ee(Ky,Jy,Xy,Zy),tS="name",nS=["name","random","scenes_duration","scenes_size"].map(Ee.createSortBy).concat([{messageID:"gallery_count",value:"galleries_count"},{messageID:"image_count",value:"images_count"},{messageID:"performer_count",value:"performers_count"},{messageID:"scene_count",value:"scenes_count"},{messageID:"group_count",value:"groups_count"},{messageID:"marker_count",value:"scene_markers_count"},{messageID:"studio_count",value:"studios_count"}]),rS=[be.Grid,be.List,be.Tagger],iS=[fu,Dr("name"),re("sort_name"),Gg,re("aliases"),re("description"),$r("ignore_auto_tag"),zn,Z("scene_count"),Z("image_count"),Z("gallery_count"),Z("performer_count"),Z("studio_count"),Z("group_count"),Z("marker_count"),Eu,new Pr("parent_tag_count","parent_count"),Tu,new Pr("sub_tag_count","child_count"),Oe("created_at"),Oe("updated_at"),yt],aS=new Ee(tS,nS,rS,iS);function Vc(e){switch(e){case J.Scenes:return Qy;case J.Performers:return My;case J.Studios:return eS;case J.Galleries:return Yb;case J.SceneMarkers:return Ly;case J.Movies:case J.Groups:return py;case J.Tags:return aS;case J.Images:return oy}}const dt={sortDirection:Ge.Asc,displayMode:be.Grid,currentPage:1,itemsPerPage:40};class ie{constructor(t,n,r){X(this,"mode");X(this,"options");X(this,"config");X(this,"searchTerm","");X(this,"currentPage",dt.currentPage);X(this,"itemsPerPage",dt.itemsPerPage);X(this,"sortDirection",dt.sortDirection);X(this,"sortBy");X(this,"displayMode",dt.displayMode);X(this,"zoomIndex",1);X(this,"criteria",[]);X(this,"randomSeed",-1);X(this,"defaultZoomIndex",1);this.mode=t,this.config=n,this.options=Vc(t);const{defaultSortBy:i,displayModeOptions:a}=this.options;r!=null&&r.defaultSortBy?(this.sortBy=r.defaultSortBy,r.defaultSortDir&&(this.sortDirection=r.defaultSortDir)):(this.sortBy=i,this.sortBy==="date"&&(this.sortDirection=Ge.Desc)),this.displayMode=a[0],(r==null?void 0:r.defaultZoomIndex)!==void 0&&(this.defaultZoomIndex=r.defaultZoomIndex,this.zoomIndex=r.defaultZoomIndex)}clone(){const t=Object.assign(new ie(this.mode,this.config),this);return t.criteria=this.criteria.map(n=>n.clone()),t}empty(){return new ie(this.mode,this.config,{defaultZoomIndex:this.defaultZoomIndex})}metadataInfo(){const t=this.clone();return t.sortBy=void 0,t.randomSeed=-1,t.currentPage=1,t.sortDirection=dt.sortDirection,t.itemsPerPage=0,t.zoomIndex=1,t.displayMode=dt.displayMode,t}count(){return this.criteria.length}configureFromDecodedParams(t){if(t.perPage!==void 0&&(this.itemsPerPage=t.perPage),t.sortby!==void 0){this.sortBy=t.sortby;const n=this.sortBy.match(/^random_(\d+)$/);n&&(this.sortBy="random",this.randomSeed=Number.parseInt(n[1],10))}if(t.sortdir!==void 0?this.sortDirection=t.sortdir==="desc"?Ge.Desc:Ge.Asc:this.sortDirection=t.sortby==="date"?Ge.Desc:Ge.Asc,t.disp!==void 0&&(this.displayMode=t.disp),t.q!==void 0&&(this.searchTerm=t.q),this.currentPage=t.p??1,t.z!==void 0&&(this.zoomIndex=t.z),this.criteria=[],t.c!==void 0)for(const n of t.c)try{const{type:r,...i}=JSON.parse(n),a=this.makeCriterion(r);a.fromDecodedParams(i),this.criteria.push(a)}catch(r){console.error("Failed to parse encoded criterion:",r)}}static decodeParams(t){const n={};if(t.perPage&&(n.perPage=Number.parseInt(t.perPage,10)),t.sortby&&(n.sortby=t.sortby),t.sortdir&&(n.sortdir=t.sortdir),t.disp&&(n.disp=Number.parseInt(t.disp,10)),t.q&&(n.q=t.q),t.p&&(n.p=Number.parseInt(t.p,10)),t.z){const r=Number.parseInt(t.z,10);r>=0&&(n.z=r)}return t.c&&t.c.length!==0&&(n.c=t.c.map(r=>ie.translateJSON(r,!0))),n}static translateJSON(t,n){let r=!1,i=!1;return[...t].map(a=>{if(i)return i=!1,a;switch(a){case"\\":r&&(i=!0);break;case'"':r=!r;break;case"(":if(n&&!r)return"{";break;case")":if(n&&!r)return"}";break;case"{":if(!n&&!r)return"(";break;case"}":if(!n&&!r)return")";break}return a}).join("")}configureFromQueryString(t){const n=new URLSearchParams(t),r={perPage:n.get("perPage"),sortby:n.get("sortby"),sortdir:n.get("sortdir"),disp:n.get("disp"),q:n.get("q"),p:n.get("p"),z:n.get("z"),c:n.getAll("c")},i=ie.decodeParams(r);this.configureFromDecodedParams(i)}configureFromSavedFilter(t){var s;const{find_filter:n,object_filter:r,ui_options:i}=t;this.itemsPerPage=(n==null?void 0:n.per_page)??this.itemsPerPage,this.sortBy=(n==null?void 0:n.sort)??this.sortBy;const a=(s=this.sortBy)==null?void 0:s.match(/^random_(\d+)$/);if(a&&(this.sortBy="random",this.randomSeed=Number.parseInt(a[1],10)),this.sortDirection=(n==null?void 0:n.direction)??this.sortDirection,this.searchTerm=(n==null?void 0:n.q)??this.searchTerm,this.displayMode=(i==null?void 0:i.display_mode)??this.displayMode,this.zoomIndex=(i==null?void 0:i.zoom_index)??this.zoomIndex,this.currentPage=1,this.criteria=[],r)for(const[u,o]of Object.entries(r)){const c=this.makeCriterion(u);c.setFromSavedCriterion(o),this.criteria.push(c)}}setRandomSeed(){this.sortBy==="random"?this.randomSeed===-1&&(this.randomSeed=Math.floor(Math.random()*10**8)):this.randomSeed=-1}getSortBy(){return this.setRandomSeed(),this.sortBy==="random"?`random_${this.randomSeed.toString()}`:this.sortBy}getEncodedParams(){const t=this.criteria.map(n=>{const r=n.toQueryParams();let i=ie.translateJSON(JSON.stringify(r),!1);return i=encodeURI(i),i=i.replaceAll("?",encodeURIComponent("?")),i=i.replaceAll("#",encodeURIComponent("#")),i=i.replaceAll("&",encodeURIComponent("&")),i=i.replaceAll(";",encodeURIComponent(";")),i=i.replaceAll("=",encodeURIComponent("=")),i=i.replaceAll("+",encodeURIComponent("+")),i});return{perPage:this.itemsPerPage!==dt.itemsPerPage?String(this.itemsPerPage):void 0,sortby:this.getSortBy(),sortdir:this.sortBy==="date"?this.sortDirection===Ge.Asc?"asc":void 0:this.sortDirection===Ge.Desc?"desc":void 0,disp:this.displayMode!==dt.displayMode?String(this.displayMode):void 0,q:this.searchTerm?encodeURIComponent(this.searchTerm):void 0,p:this.currentPage!==dt.currentPage?String(this.currentPage):void 0,z:this.zoomIndex!==this.defaultZoomIndex?String(this.zoomIndex):void 0,c:t}}makeQueryParameters(){const t=[],n=this.getEncodedParams();if(n.q&&t.push(`q=${n.q}`),n.c)for(const r of n.c)t.push(`c=${r}`);return n.sortby&&t.push(`sortby=${n.sortby}`),n.sortdir&&t.push(`sortdir=${n.sortdir}`),n.perPage&&t.push(`perPage=${n.perPage}`),n.disp&&t.push(`disp=${n.disp}`),n.z&&t.push(`z=${n.z}`),n.p&&t.push(`p=${n.p}`),t.join("&")}makeCriterion(t){const{criterionOptions:n}=Vc(this.mode),r=n.find(i=>i.type===t);return r?r.makeCriterion(this.config):new Mg(t).makeCriterion(this.config)}makeFindFilter(){return{q:this.searchTerm,page:this.currentPage,per_page:this.itemsPerPage,sort:this.getSortBy(),direction:this.sortDirection}}makeFilter(){const t={};for(const n of this.criteria)n.applyToCriterionInput(t);return t}makeSavedFilter(){const t={};for(const n of this.criteria)n.applyToSavedCriterion(t);return t}makeSavedUIOptions(){return{display_mode:this.displayMode,zoom_index:this.zoomIndex}}criteriaFor(t){return this.criteria.filter(n=>n.criterionOption.type===t)}replaceCriteria(t,n){const r=[...this.criteria.filter(i=>i.criterionOption.type!==t),...n];return this.setCriteria(r)}clearCriteria(t=!1){const n=this.clone();return t&&(n.searchTerm=""),n.criteria=[],n.currentPage=1,n}clearSearchTerm(){const t=this.clone();return t.searchTerm="",t.currentPage=1,t}setCriteria(t){const n=this.clone();return n.criteria=t,n.currentPage=1,n}removeCriterion(t){const n=this.clone(),r=n.criteria.find(a=>a.criterionOption.type===t);if(!r)return n;const i=n.criteria.filter(a=>a.getId()!==r.getId());return n.criteria=i,n.currentPage=1,n}removeCustomFieldCriterion(t,n){const r=this.clone(),i=r.criteria.find(a=>a.criterionOption.type===t);if(!i)return r;if(i instanceof gc){const a=i.value.filter((s,u)=>u!==n);i.value=a}return r}setPageSize(t){const n=this.clone();return n.itemsPerPage=t,n.currentPage=1,n}setSortBy(t){const n=this.clone();return n.sortBy=t,n.currentPage=1,n}toggleSortDirection(){const t=this.clone();return t.sortDirection===Ge.Asc?t.sortDirection=Ge.Desc:t.sortDirection=Ge.Asc,t.currentPage=1,t}reshuffleRandomSort(){const t=this.clone();return t.currentPage=1,t.randomSeed=-1,t}changePage(t){const n=this.clone();return n.currentPage=t,n}setZoom(t){const n=this.clone();return n.zoomIndex=t,n}setDisplayMode(t){const n=this.clone();return n.displayMode=t,n}}function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(null,arguments)}function Ft(e){"@babel/helpers - typeof";return Ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ft(e)}function sS(e,t){if(Ft(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ft(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Gc(e){var t=sS(e,"string");return Ft(t)=="symbol"?t:t+""}function un(e,t,n){return(t=Gc(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Uc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Uc(Object(n),!0).forEach(function(r){un(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function oS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function zc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Gc(r.key),r)}}function uS(e,t,n){return t&&zc(e.prototype,t),n&&zc(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function qa(e,t){return qa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},qa(e,t)}function cS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&qa(e,t)}function Hr(e){return Hr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Hr(e)}function Hc(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Hc=function(){return!!e})()}function lS(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function dS(e,t){if(t&&(Ft(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return lS(e)}function fS(e){var t=Hc();return function(){var n,r=Hr(e);if(t){var i=Hr(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return dS(this,n)}}function Ba(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function pS(e){if(Array.isArray(e))return Ba(e)}function mS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Wc(e,t){if(e){if(typeof e=="string")return Ba(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ba(e,t):void 0}}function gS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cn(e){return pS(e)||mS(e)||Wc(e)||gS()}function hS(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function vS(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var bS=function(){function e(n){var r=this;this._insertTag=function(i){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,a),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(vS(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=hS(i);try{a.insertRule(r,a.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Le="-ms-",Wr="-moz-",se="-webkit-",Yc="comm",Ra="rule",Va="decl",yS="@import",Qc="@keyframes",SS="@layer",xS=Math.abs,Yr=String.fromCharCode,IS=Object.assign;function _S(e,t){return ke(e,0)^45?(((t<<2^ke(e,0))<<2^ke(e,1))<<2^ke(e,2))<<2^ke(e,3):0}function Kc(e){return e.trim()}function CS(e,t){return(e=t.exec(e))?e[0]:e}function oe(e,t,n){return e.replace(t,n)}function Ga(e,t){return e.indexOf(t)}function ke(e,t){return e.charCodeAt(t)|0}function Hn(e,t,n){return e.slice(t,n)}function nt(e){return e.length}function Ua(e){return e.length}function Qr(e,t){return t.push(e),e}function wS(e,t){return e.map(t).join("")}var Kr=1,ln=1,Jc=0,Ve=0,Ce=0,dn="";function Jr(e,t,n,r,i,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Kr,column:ln,length:s,return:""}}function Wn(e,t){return IS(Jr("",null,null,"",null,null,0),e,{length:-e.length},t)}function OS(){return Ce}function ES(){return Ce=Ve>0?ke(dn,--Ve):0,ln--,Ce===10&&(ln=1,Kr--),Ce}function He(){return Ce=Ve<Jc?ke(dn,Ve++):0,ln++,Ce===10&&(ln=1,Kr++),Ce}function rt(){return ke(dn,Ve)}function Xr(){return Ve}function Yn(e,t){return Hn(dn,e,t)}function Qn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Xc(e){return Kr=ln=1,Jc=nt(dn=e),Ve=0,[]}function Zc(e){return dn="",e}function Zr(e){return Kc(Yn(Ve-1,za(e===91?e+2:e===40?e+1:e)))}function TS(e){for(;(Ce=rt())&&Ce<33;)He();return Qn(e)>2||Qn(Ce)>3?"":" "}function DS(e,t){for(;--t&&He()&&!(Ce<48||Ce>102||Ce>57&&Ce<65||Ce>70&&Ce<97););return Yn(e,Xr()+(t<6&&rt()==32&&He()==32))}function za(e){for(;He();)switch(Ce){case e:return Ve;case 34:case 39:e!==34&&e!==39&&za(Ce);break;case 40:e===41&&za(e);break;case 92:He();break}return Ve}function $S(e,t){for(;He()&&e+Ce!==57;)if(e+Ce===84&&rt()===47)break;return"/*"+Yn(t,Ve-1)+"*"+Yr(e===47?e:He())}function PS(e){for(;!Qn(rt());)He();return Yn(e,Ve)}function MS(e){return Zc(ei("",null,null,null,[""],e=Xc(e),0,[0],e))}function ei(e,t,n,r,i,a,s,u,o){for(var c=0,l=0,f=s,g=0,p=0,I=0,S=1,b=1,x=1,v=0,w="",T=i,C=a,_=r,h=w;b;)switch(I=v,v=He()){case 40:if(I!=108&&ke(h,f-1)==58){Ga(h+=oe(Zr(v),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:h+=Zr(v);break;case 9:case 10:case 13:case 32:h+=TS(I);break;case 92:h+=DS(Xr()-1,7);continue;case 47:switch(rt()){case 42:case 47:Qr(FS($S(He(),Xr()),t,n),o);break;default:h+="/"}break;case 123*S:u[c++]=nt(h)*x;case 125*S:case 59:case 0:switch(v){case 0:case 125:b=0;case 59+l:x==-1&&(h=oe(h,/\f/g,"")),p>0&&nt(h)-f&&Qr(p>32?tl(h+";",r,n,f-1):tl(oe(h," ","")+";",r,n,f-2),o);break;case 59:h+=";";default:if(Qr(_=el(h,t,n,c,l,i,u,w,T=[],C=[],f),a),v===123)if(l===0)ei(h,t,_,_,T,a,f,u,C);else switch(g===99&&ke(h,3)===110?100:g){case 100:case 108:case 109:case 115:ei(e,_,_,r&&Qr(el(e,_,_,0,0,i,u,w,i,T=[],f),C),i,C,f,u,r?T:C);break;default:ei(h,_,_,_,[""],C,0,u,C)}}c=l=p=0,S=x=1,w=h="",f=s;break;case 58:f=1+nt(h),p=I;default:if(S<1){if(v==123)--S;else if(v==125&&S++==0&&ES()==125)continue}switch(h+=Yr(v),v*S){case 38:x=l>0?1:(h+="\f",-1);break;case 44:u[c++]=(nt(h)-1)*x,x=1;break;case 64:rt()===45&&(h+=Zr(He())),g=rt(),l=f=nt(w=h+=PS(Xr())),v++;break;case 45:I===45&&nt(h)==2&&(S=0)}}return a}function el(e,t,n,r,i,a,s,u,o,c,l){for(var f=i-1,g=i===0?a:[""],p=Ua(g),I=0,S=0,b=0;I<r;++I)for(var x=0,v=Hn(e,f+1,f=xS(S=s[I])),w=e;x<p;++x)(w=Kc(S>0?g[x]+" "+v:oe(v,/&\f/g,g[x])))&&(o[b++]=w);return Jr(e,t,n,i===0?Ra:u,o,c,l)}function FS(e,t,n){return Jr(e,t,n,Yc,Yr(OS()),Hn(e,2,-2),0)}function tl(e,t,n,r){return Jr(e,t,n,Va,Hn(e,0,r),Hn(e,r+1,-1),r)}function fn(e,t){for(var n="",r=Ua(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function NS(e,t,n,r){switch(e.type){case SS:if(e.children.length)break;case yS:case Va:return e.return=e.return||e.value;case Yc:return"";case Qc:return e.return=e.value+"{"+fn(e.children,r)+"}";case Ra:e.value=e.props.join(",")}return nt(n=fn(e.children,r))?e.return=e.value+"{"+n+"}":""}function kS(e){var t=Ua(e);return function(n,r,i,a){for(var s="",u=0;u<t;u++)s+=e[u](n,r,i,a)||"";return s}}function AS(e){return function(t){t.root||(t=t.return)&&e(t)}}function LS(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var jS=function(t,n,r){for(var i=0,a=0;i=a,a=rt(),i===38&&a===12&&(n[r]=1),!Qn(a);)He();return Yn(t,Ve)},qS=function(t,n){var r=-1,i=44;do switch(Qn(i)){case 0:i===38&&rt()===12&&(n[r]=1),t[r]+=jS(Ve-1,n,r);break;case 2:t[r]+=Zr(i);break;case 4:if(i===44){t[++r]=rt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Yr(i)}while(i=He());return t},BS=function(t,n){return Zc(qS(Xc(t),n))},nl=new WeakMap,RS=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!nl.get(r))&&!i){nl.set(t,!0);for(var a=[],s=BS(n,a),u=r.props,o=0,c=0;o<s.length;o++)for(var l=0;l<u.length;l++,c++)t.props[c]=a[o]?s[o].replace(/&\f/g,u[l]):u[l]+" "+s[o]}}},VS=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function rl(e,t){switch(_S(e,t)){case 5103:return se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return se+e+Wr+e+Le+e+e;case 6828:case 4268:return se+e+Le+e+e;case 6165:return se+e+Le+"flex-"+e+e;case 5187:return se+e+oe(e,/(\w+).+(:[^]+)/,se+"box-$1$2"+Le+"flex-$1$2")+e;case 5443:return se+e+Le+"flex-item-"+oe(e,/flex-|-self/,"")+e;case 4675:return se+e+Le+"flex-line-pack"+oe(e,/align-content|flex-|-self/,"")+e;case 5548:return se+e+Le+oe(e,"shrink","negative")+e;case 5292:return se+e+Le+oe(e,"basis","preferred-size")+e;case 6060:return se+"box-"+oe(e,"-grow","")+se+e+Le+oe(e,"grow","positive")+e;case 4554:return se+oe(e,/([^-])(transform)/g,"$1"+se+"$2")+e;case 6187:return oe(oe(oe(e,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),e,"")+e;case 5495:case 3959:return oe(e,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return oe(oe(e,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+Le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+e+e;case 4095:case 3583:case 4068:case 2532:return oe(e,/(.+)-inline(.+)/,se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nt(e)-1-t>6)switch(ke(e,t+1)){case 109:if(ke(e,t+4)!==45)break;case 102:return oe(e,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+Wr+(ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ga(e,"stretch")?rl(oe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ke(e,t+1)!==115)break;case 6444:switch(ke(e,nt(e)-3-(~Ga(e,"!important")&&10))){case 107:return oe(e,":",":"+se)+e;case 101:return oe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+se+(ke(e,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+Le+"$2box$3")+e}break;case 5936:switch(ke(e,t+11)){case 114:return se+e+Le+oe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return se+e+Le+oe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return se+e+Le+oe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return se+e+Le+e+e}return e}var GS=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Va:t.return=rl(t.value,t.length);break;case Qc:return fn([Wn(t,{value:oe(t.value,"@","@"+se)})],i);case Ra:if(t.length)return wS(t.props,function(a){switch(CS(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return fn([Wn(t,{props:[oe(a,/:(read-\w+)/,":"+Wr+"$1")]})],i);case"::placeholder":return fn([Wn(t,{props:[oe(a,/:(plac\w+)/,":"+se+"input-$1")]}),Wn(t,{props:[oe(a,/:(plac\w+)/,":"+Wr+"$1")]}),Wn(t,{props:[oe(a,/:(plac\w+)/,Le+"input-$1")]})],i)}return""})}},US=[GS],zS=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(S){var b=S.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var i=t.stylisPlugins||US,a={},s,u=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(S){for(var b=S.getAttribute("data-emotion").split(" "),x=1;x<b.length;x++)a[b[x]]=!0;u.push(S)});var o,c=[RS,VS];{var l,f=[NS,AS(function(S){l.insert(S)})],g=kS(c.concat(i,f)),p=function(b){return fn(MS(b),g)};o=function(b,x,v,w){l=v,p(b?b+"{"+x.styles+"}":x.styles),w&&(I.inserted[x.name]=!0)}}var I={key:n,sheet:new bS({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:o};return I.sheet.hydrate(u),I},il={exports:{}},le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pe=typeof Symbol=="function"&&Symbol.for,Ha=Pe?Symbol.for("react.element"):60103,Wa=Pe?Symbol.for("react.portal"):60106,ti=Pe?Symbol.for("react.fragment"):60107,ni=Pe?Symbol.for("react.strict_mode"):60108,ri=Pe?Symbol.for("react.profiler"):60114,ii=Pe?Symbol.for("react.provider"):60109,ai=Pe?Symbol.for("react.context"):60110,Ya=Pe?Symbol.for("react.async_mode"):60111,si=Pe?Symbol.for("react.concurrent_mode"):60111,oi=Pe?Symbol.for("react.forward_ref"):60112,ui=Pe?Symbol.for("react.suspense"):60113,HS=Pe?Symbol.for("react.suspense_list"):60120,ci=Pe?Symbol.for("react.memo"):60115,li=Pe?Symbol.for("react.lazy"):60116,WS=Pe?Symbol.for("react.block"):60121,YS=Pe?Symbol.for("react.fundamental"):60117,QS=Pe?Symbol.for("react.responder"):60118,KS=Pe?Symbol.for("react.scope"):60119;function We(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ha:switch(e=e.type,e){case Ya:case si:case ti:case ri:case ni:case ui:return e;default:switch(e=e&&e.$$typeof,e){case ai:case oi:case li:case ci:case ii:return e;default:return t}}case Wa:return t}}}function al(e){return We(e)===si}le.AsyncMode=Ya,le.ConcurrentMode=si,le.ContextConsumer=ai,le.ContextProvider=ii,le.Element=Ha,le.ForwardRef=oi,le.Fragment=ti,le.Lazy=li,le.Memo=ci,le.Portal=Wa,le.Profiler=ri,le.StrictMode=ni,le.Suspense=ui,le.isAsyncMode=function(e){return al(e)||We(e)===Ya},le.isConcurrentMode=al,le.isContextConsumer=function(e){return We(e)===ai},le.isContextProvider=function(e){return We(e)===ii},le.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ha},le.isForwardRef=function(e){return We(e)===oi},le.isFragment=function(e){return We(e)===ti},le.isLazy=function(e){return We(e)===li},le.isMemo=function(e){return We(e)===ci},le.isPortal=function(e){return We(e)===Wa},le.isProfiler=function(e){return We(e)===ri},le.isStrictMode=function(e){return We(e)===ni},le.isSuspense=function(e){return We(e)===ui},le.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ti||e===si||e===ri||e===ni||e===ui||e===HS||typeof e=="object"&&e!==null&&(e.$$typeof===li||e.$$typeof===ci||e.$$typeof===ii||e.$$typeof===ai||e.$$typeof===oi||e.$$typeof===YS||e.$$typeof===QS||e.$$typeof===KS||e.$$typeof===WS)},le.typeOf=We,il.exports=le;var JS=il.exports,sl=JS,XS={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ZS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ol={};ol[sl.ForwardRef]=XS,ol[sl.Memo]=ZS;var e1=!0;function t1(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(r+=i+" ")}),r}var ul=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||e1===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},n1=function(t,n,r){ul(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+i:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function r1(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var i1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},a1=/[A-Z]|^ms/g,s1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,cl=function(t){return t.charCodeAt(1)===45},ll=function(t){return t!=null&&typeof t!="boolean"},Qa=LS(function(e){return cl(e)?e:e.replace(a1,"-$&").toLowerCase()}),dl=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(s1,function(r,i,a){return it={name:i,styles:a,next:it},i})}return i1[t]!==1&&!cl(t)&&typeof n=="number"&&n!==0?n+"px":n};function Kn(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return it={name:i.name,styles:i.styles,next:it},i.name;var a=n;if(a.styles!==void 0){var s=a.next;if(s!==void 0)for(;s!==void 0;)it={name:s.name,styles:s.styles,next:it},s=s.next;var u=a.styles+";";return u}return o1(e,t,n)}case"function":{if(e!==void 0){var o=it,c=n(e);return it=o,Kn(e,t,c)}break}}var l=n;return l}function o1(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Kn(e,t,n[i])+";";else for(var a in n){var s=n[a];if(typeof s!="object"){var u=s;ll(u)&&(r+=Qa(a)+":"+dl(a,u)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&t==null)for(var o=0;o<s.length;o++)ll(s[o])&&(r+=Qa(a)+":"+dl(a,s[o])+";");else{var c=Kn(e,t,s);switch(a){case"animation":case"animationName":{r+=Qa(a)+":"+c+";";break}default:r+=a+"{"+c+"}"}}}return r}var fl=/label:\s*([^\s;{]+)\s*(;|$)/g,it;function pl(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";it=void 0;var a=e[0];if(a==null||a.raw===void 0)r=!1,i+=Kn(n,t,a);else{var s=a;i+=s[0]}for(var u=1;u<e.length;u++)if(i+=Kn(n,t,e[u]),r){var o=a;i+=o[u]}fl.lastIndex=0;for(var c="",l;(l=fl.exec(i))!==null;)c+="-"+l[1];var f=r1(i)+c;return{name:f,styles:i,next:it}}var u1=function(t){return t()},c1=K.useInsertionEffect?K.useInsertionEffect:!1,l1=c1||u1,ml=K.createContext(typeof HTMLElement<"u"?zS({key:"css"}):null);ml.Provider;var d1=function(t){return O.forwardRef(function(n,r){var i=O.useContext(ml);return t(n,i,r)})},f1=K.createContext({}),Ka={}.hasOwnProperty,Ja="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",p1=function(t,n){var r={};for(var i in n)Ka.call(n,i)&&(r[i]=n[i]);return r[Ja]=t,r},m1=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return ul(n,r,i),l1(function(){return n1(n,r,i)}),null},g1=d1(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Ja],a=[r],s="";typeof e.className=="string"?s=t1(t.registered,a,e.className):e.className!=null&&(s=e.className+" ");var u=pl(a,void 0,K.useContext(f1));s+=t.key+"-"+u.name;var o={};for(var c in e)Ka.call(e,c)&&c!=="css"&&c!==Ja&&(o[c]=e[c]);return o.className=s,n&&(o.ref=n),K.createElement(K.Fragment,null,K.createElement(m1,{cache:t,serialized:u,isStringTag:typeof i=="string"}),K.createElement(i,o))}),h1=g1,G=function(t,n){var r=arguments;if(n==null||!Ka.call(n,"css"))return K.createElement.apply(void 0,r);var i=r.length,a=new Array(i);a[0]=h1,a[1]=p1(t,n);for(var s=2;s<i;s++)a[s]=r[s];return K.createElement.apply(null,a)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(G||(G={}));function Xa(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return pl(t)}function v1(){var e=Xa.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function b1(e){if(Array.isArray(e))return e}function y1(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,s,u=[],o=!0,c=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);o=!0);}catch(l){c=!0,i=l}finally{try{if(!o&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw i}}return u}}function S1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Me(e,t){return b1(e)||y1(e,t)||Wc(e,t)||S1()}function x1(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function tt(e,t){if(e==null)return{};var n,r,i=x1(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function I1(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const _1=Math.min,C1=Math.max,di=Math.round,fi=Math.floor,pi=e=>({x:e,y:e});function w1(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function mi(){return typeof window<"u"}function gl(e){return vl(e)?(e.nodeName||"").toLowerCase():"#document"}function ft(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function hl(e){var t;return(t=(vl(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function vl(e){return mi()?e instanceof Node||e instanceof ft(e).Node:!1}function O1(e){return mi()?e instanceof Element||e instanceof ft(e).Element:!1}function Za(e){return mi()?e instanceof HTMLElement||e instanceof ft(e).HTMLElement:!1}function bl(e){return!mi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ft(e).ShadowRoot}const E1=new Set(["inline","contents"]);function yl(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=es(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!E1.has(i)}function T1(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const D1=new Set(["html","body","#document"]);function $1(e){return D1.has(gl(e))}function es(e){return ft(e).getComputedStyle(e)}function P1(e){if(gl(e)==="html")return e;const t=e.assignedSlot||e.parentNode||bl(e)&&e.host||hl(e);return bl(t)?t.host:t}function Sl(e){const t=P1(e);return $1(t)?e.ownerDocument?e.ownerDocument.body:e.body:Za(t)&&yl(t)?t:Sl(t)}function gi(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Sl(e),a=i===((r=e.ownerDocument)==null?void 0:r.body),s=ft(i);if(a){const u=ts(s);return t.concat(s,s.visualViewport||[],yl(i)?i:[],u&&n?gi(u):[])}return t.concat(i,gi(i,[],n))}function ts(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function M1(e){const t=es(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Za(e),a=i?e.offsetWidth:n,s=i?e.offsetHeight:r,u=di(n)!==a||di(r)!==s;return u&&(n=a,r=s),{width:n,height:r,$:u}}function ns(e){return O1(e)?e:e.contextElement}function xl(e){const t=ns(e);if(!Za(t))return pi(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:a}=M1(t);let s=(a?di(n.width):n.width)/r,u=(a?di(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!u||!Number.isFinite(u))&&(u=1),{x:s,y:u}}const F1=pi(0);function N1(e){const t=ft(e);return!T1()||!t.visualViewport?F1:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function k1(e,t,n){return!1}function Il(e,t,n,r){t===void 0&&(t=!1);const i=e.getBoundingClientRect(),a=ns(e);let s=pi(1);t&&(s=xl(e));const u=k1()?N1(a):pi(0);let o=(i.left+u.x)/s.x,c=(i.top+u.y)/s.y,l=i.width/s.x,f=i.height/s.y;if(a){const g=ft(a),p=r;let I=g,S=ts(I);for(;S&&r&&p!==I;){const b=xl(S),x=S.getBoundingClientRect(),v=es(S),w=x.left+(S.clientLeft+parseFloat(v.paddingLeft))*b.x,T=x.top+(S.clientTop+parseFloat(v.paddingTop))*b.y;o*=b.x,c*=b.y,l*=b.x,f*=b.y,o+=w,c+=T,I=ft(S),S=ts(I)}}return w1({width:l,height:f,x:o,y:c})}function _l(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function A1(e,t){let n=null,r;const i=hl(e);function a(){var u;clearTimeout(r),(u=n)==null||u.disconnect(),n=null}function s(u,o){u===void 0&&(u=!1),o===void 0&&(o=1),a();const c=e.getBoundingClientRect(),{left:l,top:f,width:g,height:p}=c;if(u||t(),!g||!p)return;const I=fi(f),S=fi(i.clientWidth-(l+g)),b=fi(i.clientHeight-(f+p)),x=fi(l),w={rootMargin:-I+"px "+-S+"px "+-b+"px "+-x+"px",threshold:C1(0,_1(1,o))||1};let T=!0;function C(_){const h=_[0].intersectionRatio;if(h!==o){if(!T)return s();h?s(!1,h):r=setTimeout(()=>{s(!1,1e-7)},1e3)}h===1&&!_l(c,e.getBoundingClientRect())&&s(),T=!1}try{n=new IntersectionObserver(C,{...w,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,w)}n.observe(e)}return s(!0),a}function L1(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:u=typeof IntersectionObserver=="function",animationFrame:o=!1}=r,c=ns(e),l=i||a?[...c?gi(c):[],...gi(t)]:[];l.forEach(x=>{i&&x.addEventListener("scroll",n,{passive:!0}),a&&x.addEventListener("resize",n)});const f=c&&u?A1(c,n):null;let g=-1,p=null;s&&(p=new ResizeObserver(x=>{let[v]=x;v&&v.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var w;(w=p)==null||w.observe(t)})),n()}),c&&!o&&p.observe(c),p.observe(t));let I,S=o?Il(e):null;o&&b();function b(){const x=Il(e);S&&!_l(S,x)&&n(),S=x,I=requestAnimationFrame(b)}return n(),()=>{var x;l.forEach(v=>{i&&v.removeEventListener("scroll",n),a&&v.removeEventListener("resize",n)}),f==null||f(),(x=p)==null||x.disconnect(),p=null,o&&cancelAnimationFrame(I)}}var rs=O.useLayoutEffect,j1=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],hi=function(){};function q1(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function B1(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=[].concat(r);if(t&&e)for(var s in t)t.hasOwnProperty(s)&&t[s]&&a.push("".concat(q1(e,s)));return a.filter(function(u){return u}).map(function(u){return String(u).trim()}).join(" ")}var vi=function(t){return K1(t)?t.filter(Boolean):Ft(t)==="object"&&t!==null?[t]:[]},Cl=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=tt(t,j1);return V({},n)},ye=function(t,n,r){var i=t.cx,a=t.getStyles,s=t.getClassNames,u=t.className;return{css:a(n,t),className:i(r??{},s(n,t),u)}};function R1(e,t,n){if(n){var r=n(e,t);if(typeof r=="string")return r}return e}function bi(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function V1(e){return bi(e)?window.innerHeight:e.clientHeight}function wl(e){return bi(e)?window.pageYOffset:e.scrollTop}function yi(e,t){if(bi(e)){window.scrollTo(0,t);return}e.scrollTop=t}function G1(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function U1(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Si(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:hi,i=wl(e),a=t-i,s=10,u=0;function o(){u+=s;var c=U1(u,i,a,n);yi(e,c),u<n?window.requestAnimationFrame(o):r(e)}o()}function Ol(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?yi(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&yi(e,Math.max(t.offsetTop-i,0))}function z1(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function El(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function H1(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Tl=!1,W1={get passive(){return Tl=!0}},xi=typeof window<"u"?window:{};xi.addEventListener&&xi.removeEventListener&&(xi.addEventListener("p",hi,W1),xi.removeEventListener("p",hi,!1));var Y1=Tl;function Q1(e){return e!=null}function K1(e){return Array.isArray(e)}function Jn(e,t,n){return e?t:n}function WO(e){return e}function YO(e){return e}var J1=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a=Object.entries(t).filter(function(s){var u=Me(s,1),o=u[0];return!r.includes(o)});return a.reduce(function(s,u){var o=Me(u,2),c=o[0],l=o[1];return s[c]=l,s},{})},X1=["children","innerProps"],Z1=["children","innerProps"];function ex(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,a=e.shouldScroll,s=e.isFixedPosition,u=e.controlHeight,o=G1(n),c={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return c;var l=o.getBoundingClientRect(),f=l.height,g=n.getBoundingClientRect(),p=g.bottom,I=g.height,S=g.top,b=n.offsetParent.getBoundingClientRect(),x=b.top,v=s?window.innerHeight:V1(o),w=wl(o),T=parseInt(getComputedStyle(n).marginBottom,10),C=parseInt(getComputedStyle(n).marginTop,10),_=x-C,h=v-S,E=_+w,D=f-w-S,$=p-v+w+T,R=w+S-C,W=160;switch(i){case"auto":case"bottom":if(h>=I)return{placement:"bottom",maxHeight:t};if(D>=I&&!s)return a&&Si(o,$,W),{placement:"bottom",maxHeight:t};if(!s&&D>=r||s&&h>=r){a&&Si(o,$,W);var ne=s?h-T:D-T;return{placement:"bottom",maxHeight:ne}}if(i==="auto"||s){var ee=t,M=s?_:E;return M>=r&&(ee=Math.min(M-T-u,t)),{placement:"top",maxHeight:ee}}if(i==="bottom")return a&&yi(o,$),{placement:"bottom",maxHeight:t};break;case"top":if(_>=I)return{placement:"top",maxHeight:t};if(E>=I&&!s)return a&&Si(o,R,W),{placement:"top",maxHeight:t};if(!s&&E>=r||s&&_>=r){var L=t;return(!s&&E>=r||s&&_>=r)&&(L=s?_-C:E-C),a&&Si(o,R,W),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return c}function tx(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var Dl=function(t){return t==="auto"?"bottom":t},nx=function(t,n){var r,i=t.placement,a=t.theme,s=a.borderRadius,u=a.spacing,o=a.colors;return V((r={label:"menu"},un(r,tx(i),"100%"),un(r,"position","absolute"),un(r,"width","100%"),un(r,"zIndex",1),r),n?{}:{backgroundColor:o.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:u.menuGutter,marginTop:u.menuGutter})},$l=O.createContext(null),rx=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,a=t.menuPlacement,s=t.menuPosition,u=t.menuShouldScrollIntoView,o=t.theme,c=O.useContext($l)||{},l=c.setPortalPlacement,f=O.useRef(null),g=O.useState(i),p=Me(g,2),I=p[0],S=p[1],b=O.useState(null),x=Me(b,2),v=x[0],w=x[1],T=o.spacing.controlHeight;return rs(function(){var C=f.current;if(C){var _=s==="fixed",h=u&&!_,E=ex({maxHeight:i,menuEl:C,minHeight:r,placement:a,shouldScroll:h,isFixedPosition:_,controlHeight:T});S(E.maxHeight),w(E.placement),l==null||l(E.placement)}},[i,a,s,u,r,l,T]),n({ref:f,placerProps:V(V({},t),{},{placement:v||Dl(a),maxHeight:I})})},ix=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return G("div",H({},ye(t,"menu",{menu:!0}),{ref:r},i),n)},ax=ix,sx=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return V({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},ox=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,a=t.isMulti;return G("div",H({},ye(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:i},r),n)},Pl=function(t,n){var r=t.theme,i=r.spacing.baseUnit,a=r.colors;return V({textAlign:"center"},n?{}:{color:a.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},ux=Pl,cx=Pl,lx=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,a=tt(t,X1);return G("div",H({},ye(V(V({},a),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},dx=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,a=tt(t,Z1);return G("div",H({},ye(V(V({},a),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},fx=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},px=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,a=t.innerProps,s=t.menuPlacement,u=t.menuPosition,o=O.useRef(null),c=O.useRef(null),l=O.useState(Dl(s)),f=Me(l,2),g=f[0],p=f[1],I=O.useMemo(function(){return{setPortalPlacement:p}},[]),S=O.useState(null),b=Me(S,2),x=b[0],v=b[1],w=O.useCallback(function(){if(i){var h=z1(i),E=u==="fixed"?0:window.pageYOffset,D=h[g]+E;(D!==(x==null?void 0:x.offset)||h.left!==(x==null?void 0:x.rect.left)||h.width!==(x==null?void 0:x.rect.width))&&v({offset:D,rect:h})}},[i,u,g,x==null?void 0:x.offset,x==null?void 0:x.rect.left,x==null?void 0:x.rect.width]);rs(function(){w()},[w]);var T=O.useCallback(function(){typeof c.current=="function"&&(c.current(),c.current=null),i&&o.current&&(c.current=L1(i,o.current,w,{elementResize:"ResizeObserver"in window}))},[i,w]);rs(function(){T()},[T]);var C=O.useCallback(function(h){o.current=h,T()},[T]);if(!n&&u!=="fixed"||!x)return null;var _=G("div",H({ref:C},ye(V(V({},t),{},{offset:x.offset,position:u,rect:x.rect}),"menuPortal",{"menu-portal":!0}),a),r);return G($l.Provider,{value:I},n?rf.createPortal(_,n):_)},mx=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},gx=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,a=t.isRtl;return G("div",H({},ye(t,"container",{"--is-disabled":i,"--is-rtl":a}),r),n)},hx=function(t,n){var r=t.theme.spacing,i=t.isMulti,a=t.hasValue,s=t.selectProps.controlShouldRenderValue;return V({alignItems:"center",display:i&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},vx=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,a=t.hasValue;return G("div",H({},ye(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":a}),r),n)},bx=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},yx=function(t){var n=t.children,r=t.innerProps;return G("div",H({},ye(t,"indicatorsContainer",{indicators:!0}),r),n)},Ml,Sx=["size"],xx=["innerProps","isRtl","size"],Ix={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Fl=function(t){var n=t.size,r=tt(t,Sx);return G("svg",H({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Ix},r))},is=function(t){return G(Fl,H({size:20},t),G("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Nl=function(t){return G(Fl,H({size:20},t),G("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},kl=function(t,n){var r=t.isFocused,i=t.theme,a=i.spacing.baseUnit,s=i.colors;return V({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?s.neutral60:s.neutral20,padding:a*2,":hover":{color:r?s.neutral80:s.neutral40}})},_x=kl,Cx=function(t){var n=t.children,r=t.innerProps;return G("div",H({},ye(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||G(Nl,null))},wx=kl,Ox=function(t){var n=t.children,r=t.innerProps;return G("div",H({},ye(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||G(is,null))},Ex=function(t,n){var r=t.isDisabled,i=t.theme,a=i.spacing.baseUnit,s=i.colors;return V({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},Tx=function(t){var n=t.innerProps;return G("span",H({},n,ye(t,"indicatorSeparator",{"indicator-separator":!0})))},Dx=v1(Ml||(Ml=I1([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),$x=function(t,n){var r=t.isFocused,i=t.size,a=t.theme,s=a.colors,u=a.spacing.baseUnit;return V({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?s.neutral60:s.neutral20,padding:u*2})},as=function(t){var n=t.delay,r=t.offset;return G("span",{css:Xa({animation:"".concat(Dx," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Px=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,a=i===void 0?4:i,s=tt(t,xx);return G("div",H({},ye(V(V({},s),{},{innerProps:n,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),G(as,{delay:0,offset:r}),G(as,{delay:160,offset:!0}),G(as,{delay:320,offset:!r}))},Mx=function(t,n){var r=t.isDisabled,i=t.isFocused,a=t.theme,s=a.colors,u=a.borderRadius,o=a.spacing;return V({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:o.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:i?s.primary:s.neutral20,borderRadius:u,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:i?s.primary:s.neutral30}})},Fx=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,a=t.innerRef,s=t.innerProps,u=t.menuIsOpen;return G("div",H({ref:a},ye(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":u}),s,{"aria-disabled":r||void 0}),n)},Nx=Fx,kx=["data"],Ax=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Lx=function(t){var n=t.children,r=t.cx,i=t.getStyles,a=t.getClassNames,s=t.Heading,u=t.headingProps,o=t.innerProps,c=t.label,l=t.theme,f=t.selectProps;return G("div",H({},ye(t,"group",{group:!0}),o),G(s,H({},u,{selectProps:f,theme:l,getStyles:i,getClassNames:a,cx:r}),c),G("div",null,n))},jx=function(t,n){var r=t.theme,i=r.colors,a=r.spacing;return V({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},qx=function(t){var n=Cl(t);n.data;var r=tt(n,kx);return G("div",H({},ye(t,"groupHeading",{"group-heading":!0}),r))},Bx=Lx,Rx=["innerRef","isDisabled","isHidden","inputClassName"],Vx=function(t,n){var r=t.isDisabled,i=t.value,a=t.theme,s=a.spacing,u=a.colors;return V(V({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},Gx),n?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:u.neutral80})},Al={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Gx={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":V({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Al)},Ux=function(t){return V({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Al)},zx=function(t){var n=t.cx,r=t.value,i=Cl(t),a=i.innerRef,s=i.isDisabled,u=i.isHidden,o=i.inputClassName,c=tt(i,Rx);return G("div",H({},ye(t,"input",{"input-container":!0}),{"data-value":r||""}),G("input",H({className:n({input:!0},o),ref:a,style:Ux(u),disabled:s},c)))},Hx=zx,Wx=function(t,n){var r=t.theme,i=r.spacing,a=r.borderRadius,s=r.colors;return V({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:i.baseUnit/2})},Yx=function(t,n){var r=t.theme,i=r.borderRadius,a=r.colors,s=t.cropWithEllipsis;return V({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Qx=function(t,n){var r=t.theme,i=r.spacing,a=r.borderRadius,s=r.colors,u=t.isFocused;return V({alignItems:"center",display:"flex"},n?{}:{borderRadius:a/2,backgroundColor:u?s.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Ll=function(t){var n=t.children,r=t.innerProps;return G("div",r,n)},Kx=Ll,Jx=Ll;function Xx(e){var t=e.children,n=e.innerProps;return G("div",H({role:"button"},n),t||G(is,{size:14}))}var Zx=function(t){var n=t.children,r=t.components,i=t.data,a=t.innerProps,s=t.isDisabled,u=t.removeProps,o=t.selectProps,c=r.Container,l=r.Label,f=r.Remove;return G(c,{data:i,innerProps:V(V({},ye(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:o},G(l,{data:i,innerProps:V({},ye(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:o},n),G(f,{data:i,innerProps:V(V({},ye(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},u),selectProps:o}))},eI=Zx,tI=function(t,n){var r=t.isDisabled,i=t.isFocused,a=t.isSelected,s=t.theme,u=s.spacing,o=s.colors;return V({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:a?o.primary:i?o.primary25:"transparent",color:r?o.neutral20:a?o.neutral0:"inherit",padding:"".concat(u.baseUnit*2,"px ").concat(u.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?o.primary:o.primary50}})},nI=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,a=t.isSelected,s=t.innerRef,u=t.innerProps;return G("div",H({},ye(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":a}),{ref:s,"aria-disabled":r},u),n)},rI=nI,iI=function(t,n){var r=t.theme,i=r.spacing,a=r.colors;return V({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:a.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},aI=function(t){var n=t.children,r=t.innerProps;return G("div",H({},ye(t,"placeholder",{placeholder:!0}),r),n)},sI=aI,oI=function(t,n){var r=t.isDisabled,i=t.theme,a=i.spacing,s=i.colors;return V({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},uI=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return G("div",H({},ye(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},cI=uI,lI={ClearIndicator:Ox,Control:Nx,DropdownIndicator:Cx,DownChevron:Nl,CrossIcon:is,Group:Bx,GroupHeading:qx,IndicatorsContainer:yx,IndicatorSeparator:Tx,Input:Hx,LoadingIndicator:Px,Menu:ax,MenuList:ox,MenuPortal:px,LoadingMessage:dx,NoOptionsMessage:lx,MultiValue:eI,MultiValueContainer:Kx,MultiValueLabel:Jx,MultiValueRemove:Xx,Option:rI,Placeholder:sI,SelectContainer:gx,SingleValue:cI,ValueContainer:vx},dI=function(t){return V(V({},lI),t.components)},jl=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function fI(e,t){return!!(e===t||jl(e)&&jl(t))}function pI(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!fI(e[n],t[n]))return!1;return!0}function mI(e,t){t===void 0&&(t=pI);var n=null;function r(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var s=e.apply(this,i);return n={lastResult:s,lastArgs:i,lastThis:this},s}return r.clear=function(){n=null},r}for(var gI={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},hI=function(t){return G("span",H({css:gI},t))},ql=hI,vI={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,a=t.context,s=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,a=t.labels,s=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,a=t.label,s=a===void 0?"":a,u=t.selectValue,o=t.isDisabled,c=t.isSelected,l=t.isAppleDevice,f=function(S,b){return S&&S.length?"".concat(S.indexOf(b)+1," of ").concat(S.length):""};if(n==="value"&&u)return"value ".concat(s," focused, ").concat(f(u,r),".");if(n==="menu"&&l){var g=o?" disabled":"",p="".concat(c?" selected":"").concat(g);return"".concat(s).concat(p,", ").concat(f(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},bI=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,a=t.focusableOptions,s=t.isFocused,u=t.selectValue,o=t.selectProps,c=t.id,l=t.isAppleDevice,f=o.ariaLiveMessages,g=o.getOptionLabel,p=o.inputValue,I=o.isMulti,S=o.isOptionDisabled,b=o.isSearchable,x=o.menuIsOpen,v=o.options,w=o.screenReaderStatus,T=o.tabSelectsValue,C=o.isLoading,_=o["aria-label"],h=o["aria-live"],E=O.useMemo(function(){return V(V({},vI),f||{})},[f]),D=O.useMemo(function(){var M="";if(n&&E.onChange){var L=n.option,k=n.options,U=n.removedValue,te=n.removedValues,ue=n.value,F=function(ae){return Array.isArray(ae)?null:ae},q=U||L||F(ue),Y=q?g(q):"",P=k||te||void 0,j=P?P.map(g):[],B=V({isDisabled:q&&S(q,u),label:Y,labels:j},n);M=E.onChange(B)}return M},[n,E,S,u,g]),$=O.useMemo(function(){var M="",L=r||i,k=!!(r&&u&&u.includes(r));if(L&&E.onFocus){var U={focused:L,label:g(L),isDisabled:S(L,u),isSelected:k,options:a,context:L===r?"menu":"value",selectValue:u,isAppleDevice:l};M=E.onFocus(U)}return M},[r,i,g,S,E,a,u,l]),R=O.useMemo(function(){var M="";if(x&&v.length&&!C&&E.onFilter){var L=w({count:a.length});M=E.onFilter({inputValue:p,resultsMessage:L})}return M},[a,p,x,E,v,w,C]),W=(n==null?void 0:n.action)==="initial-input-focus",ne=O.useMemo(function(){var M="";if(E.guidance){var L=i?"value":x?"menu":"input";M=E.guidance({"aria-label":_,context:L,isDisabled:r&&S(r,u),isMulti:I,isSearchable:b,tabSelectsValue:T,isInitialFocus:W})}return M},[_,r,i,I,S,b,x,E,u,T,W]),ee=G(O.Fragment,null,G("span",{id:"aria-selection"},D),G("span",{id:"aria-focused"},$),G("span",{id:"aria-results"},R),G("span",{id:"aria-guidance"},ne));return G(O.Fragment,null,G(ql,{id:c},W&&ee),G(ql,{"aria-live":h,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!W&&ee))},yI=bI,ss=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],SI=new RegExp("["+ss.map(function(e){return e.letters}).join("")+"]","g"),Bl={},os=0;os<ss.length;os++)for(var us=ss[os],cs=0;cs<us.letters.length;cs++)Bl[us.letters[cs]]=us.base;var Rl=function(t){return t.replace(SI,function(n){return Bl[n]})},xI=mI(Rl),Vl=function(t){return t.replace(/^\s+|\s+$/g,"")},II=function(t){return"".concat(t.label," ").concat(t.value)},_I=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=V({ignoreCase:!0,ignoreAccents:!0,stringify:II,trim:!0,matchFrom:"any"},t),a=i.ignoreCase,s=i.ignoreAccents,u=i.stringify,o=i.trim,c=i.matchFrom,l=o?Vl(r):r,f=o?Vl(u(n)):u(n);return a&&(l=l.toLowerCase(),f=f.toLowerCase()),s&&(l=xI(l),f=Rl(f)),c==="start"?f.substr(0,l.length)===l:f.indexOf(l)>-1}},CI=["innerRef"];function wI(e){var t=e.innerRef,n=tt(e,CI),r=J1(n,"onExited","in","enter","exit","appear");return G("input",H({ref:t},r,{css:Xa({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var OI=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function EI(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,a=e.onTopLeave,s=O.useRef(!1),u=O.useRef(!1),o=O.useRef(0),c=O.useRef(null),l=O.useCallback(function(b,x){if(c.current!==null){var v=c.current,w=v.scrollTop,T=v.scrollHeight,C=v.clientHeight,_=c.current,h=x>0,E=T-C-w,D=!1;E>x&&s.current&&(r&&r(b),s.current=!1),h&&u.current&&(a&&a(b),u.current=!1),h&&x>E?(n&&!s.current&&n(b),_.scrollTop=T,D=!0,s.current=!0):!h&&-x>w&&(i&&!u.current&&i(b),_.scrollTop=0,D=!0,u.current=!0),D&&OI(b)}},[n,r,i,a]),f=O.useCallback(function(b){l(b,b.deltaY)},[l]),g=O.useCallback(function(b){o.current=b.changedTouches[0].clientY},[]),p=O.useCallback(function(b){var x=o.current-b.changedTouches[0].clientY;l(b,x)},[l]),I=O.useCallback(function(b){if(b){var x=Y1?{passive:!1}:!1;b.addEventListener("wheel",f,x),b.addEventListener("touchstart",g,x),b.addEventListener("touchmove",p,x)}},[p,g,f]),S=O.useCallback(function(b){b&&(b.removeEventListener("wheel",f,!1),b.removeEventListener("touchstart",g,!1),b.removeEventListener("touchmove",p,!1))},[p,g,f]);return O.useEffect(function(){if(t){var b=c.current;return I(b),function(){S(b)}}},[t,I,S]),function(b){c.current=b}}var Gl=["boxSizing","height","overflow","paddingRight","position"],Ul={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function zl(e){e.cancelable&&e.preventDefault()}function Hl(e){e.stopPropagation()}function Wl(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function Yl(){return"ontouchstart"in window||navigator.maxTouchPoints}var Ql=!!(typeof window<"u"&&window.document&&window.document.createElement),Xn=0,pn={capture:!1,passive:!1};function TI(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=O.useRef({}),a=O.useRef(null),s=O.useCallback(function(o){if(Ql){var c=document.body,l=c&&c.style;if(r&&Gl.forEach(function(I){var S=l&&l[I];i.current[I]=S}),r&&Xn<1){var f=parseInt(i.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,p=window.innerWidth-g+f||0;Object.keys(Ul).forEach(function(I){var S=Ul[I];l&&(l[I]=S)}),l&&(l.paddingRight="".concat(p,"px"))}c&&Yl()&&(c.addEventListener("touchmove",zl,pn),o&&(o.addEventListener("touchstart",Wl,pn),o.addEventListener("touchmove",Hl,pn))),Xn+=1}},[r]),u=O.useCallback(function(o){if(Ql){var c=document.body,l=c&&c.style;Xn=Math.max(Xn-1,0),r&&Xn<1&&Gl.forEach(function(f){var g=i.current[f];l&&(l[f]=g)}),c&&Yl()&&(c.removeEventListener("touchmove",zl,pn),o&&(o.removeEventListener("touchstart",Wl,pn),o.removeEventListener("touchmove",Hl,pn)))}},[r]);return O.useEffect(function(){if(t){var o=a.current;return s(o),function(){u(o)}}},[t,s,u]),function(o){a.current=o}}var DI=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},$I={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function PI(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,a=e.onBottomArrive,s=e.onBottomLeave,u=e.onTopArrive,o=e.onTopLeave,c=EI({isEnabled:i,onBottomArrive:a,onBottomLeave:s,onTopArrive:u,onTopLeave:o}),l=TI({isEnabled:n}),f=function(p){c(p),l(p)};return G(O.Fragment,null,n&&G("div",{onClick:DI,css:$I}),t(f))}var MI={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},FI=function(t){var n=t.name,r=t.onFocus;return G("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:MI,value:"",onChange:function(){}})},NI=FI;function ls(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function kI(){return ls(/^iPhone/i)}function Kl(){return ls(/^Mac/i)}function AI(){return ls(/^iPad/i)||Kl()&&navigator.maxTouchPoints>1}function LI(){return kI()||AI()}function jI(){return Kl()||LI()}var qI=function(t){return t.label},Jl=function(t){return t.label},Xl=function(t){return t.value},BI=function(t){return!!t.isDisabled},RI={clearIndicator:wx,container:mx,control:Mx,dropdownIndicator:_x,group:Ax,groupHeading:jx,indicatorsContainer:bx,indicatorSeparator:Ex,input:Vx,loadingIndicator:$x,loadingMessage:cx,menu:nx,menuList:sx,menuPortal:fx,multiValue:Wx,multiValueLabel:Yx,multiValueRemove:Qx,noOptionsMessage:ux,option:tI,placeholder:iI,singleValue:oI,valueContainer:hx},VI={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},GI=4,Zl=4,UI=38,zI=Zl*2,HI={baseUnit:Zl,controlHeight:UI,menuGutter:zI},ds={borderRadius:GI,colors:VI,spacing:HI},WI={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:El(),captureMenuScroll:!El(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:_I(),formatGroupLabel:qI,getOptionLabel:Jl,getOptionValue:Xl,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:BI,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!H1(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function ed(e,t,n,r){var i=ad(e,t,n),a=sd(e,t,n),s=id(e,t),u=_i(e,t);return{type:"option",data:t,isDisabled:i,isSelected:a,label:s,value:u,index:r}}function Ii(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(s,u){return ed(e,s,t,u)}).filter(function(s){return rd(e,s)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var a=ed(e,n,t,r);return rd(e,a)?a:void 0}).filter(Q1)}function td(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,cn(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function nd(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,cn(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function YI(e,t){return td(Ii(e,t))}function rd(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,a=t.isSelected,s=t.label,u=t.value;return(!ud(e)||!a)&&od(e,{label:s,value:u,data:i},r)}function QI(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var a=t.indexOf(n);if(a>-1)return n;if(i<t.length)return t[i]}return null}function KI(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var fs=function(t,n){var r,i=(r=t.find(function(a){return a.data===n}))===null||r===void 0?void 0:r.id;return i||null},id=function(t,n){return t.getOptionLabel(n)},_i=function(t,n){return t.getOptionValue(n)};function ad(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function sd(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=_i(e,t);return n.some(function(i){return _i(e,i)===r})}function od(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var ud=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},JI=1,ps=function(e){cS(n,e);var t=fS(n);function n(r){var i;if(oS(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(o){i.controlRef=o},i.focusedOptionRef=null,i.getFocusedOptionRef=function(o){i.focusedOptionRef=o},i.menuListRef=null,i.getMenuListRef=function(o){i.menuListRef=o},i.inputRef=null,i.getInputRef=function(o){i.inputRef=o},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(o,c){var l=i.props,f=l.onChange,g=l.name;c.name=g,i.ariaOnChange(o,c),f(o,c)},i.setValue=function(o,c,l){var f=i.props,g=f.closeMenuOnSelect,p=f.isMulti,I=f.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:I}),g&&(i.setState({inputIsHiddenAfterUpdate:!p}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(o,{action:c,option:l})},i.selectOption=function(o){var c=i.props,l=c.blurInputOnSelect,f=c.isMulti,g=c.name,p=i.state.selectValue,I=f&&i.isOptionSelected(o,p),S=i.isOptionDisabled(o,p);if(I){var b=i.getOptionValue(o);i.setValue(p.filter(function(x){return i.getOptionValue(x)!==b}),"deselect-option",o)}else if(!S)f?i.setValue([].concat(cn(p),[o]),"select-option",o):i.setValue(o,"select-option");else{i.ariaOnChange(o,{action:"select-option",option:o,name:g});return}l&&i.blurInput()},i.removeValue=function(o){var c=i.props.isMulti,l=i.state.selectValue,f=i.getOptionValue(o),g=l.filter(function(I){return i.getOptionValue(I)!==f}),p=Jn(c,g,g[0]||null);i.onChange(p,{action:"remove-value",removedValue:o}),i.focusInput()},i.clearValue=function(){var o=i.state.selectValue;i.onChange(Jn(i.props.isMulti,[],null),{action:"clear",removedValues:o})},i.popValue=function(){var o=i.props.isMulti,c=i.state.selectValue,l=c[c.length-1],f=c.slice(0,c.length-1),g=Jn(o,f,f[0]||null);l&&i.onChange(g,{action:"pop-value",removedValue:l})},i.getFocusedOptionId=function(o){return fs(i.state.focusableOptionsWithIds,o)},i.getFocusableOptionsWithIds=function(){return nd(Ii(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return B1.apply(void 0,[i.props.classNamePrefix].concat(c))},i.getOptionLabel=function(o){return id(i.props,o)},i.getOptionValue=function(o){return _i(i.props,o)},i.getStyles=function(o,c){var l=i.props.unstyled,f=RI[o](c,l);f.boxSizing="border-box";var g=i.props.styles[o];return g?g(f,c):f},i.getClassNames=function(o,c){var l,f;return(l=(f=i.props.classNames)[o])===null||l===void 0?void 0:l.call(f,c)},i.getElementId=function(o){return"".concat(i.state.instancePrefix,"-").concat(o)},i.getComponents=function(){return dI(i.props)},i.buildCategorizedOptions=function(){return Ii(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return td(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(o,c){i.setState({ariaSelection:V({value:o},c)})},i.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(o){i.blockOptionHover=!1},i.onControlMouseDown=function(o){if(!o.defaultPrevented){var c=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&i.onMenuClose():c&&i.openMenu("first"):(c&&(i.openAfterFocus=!0),i.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},i.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!i.props.isDisabled){var c=i.props,l=c.isMulti,f=c.menuIsOpen;i.focusInput(),f?(i.setState({inputIsHiddenAfterUpdate:!l}),i.onMenuClose()):i.openMenu("first"),o.preventDefault()}},i.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(i.clearValue(),o.preventDefault(),i.openAfterFocus=!1,o.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(o){typeof i.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&bi(o.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(o)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(o){var c=o.touches,l=c&&c.item(0);l&&(i.initialTouchX=l.clientX,i.initialTouchY=l.clientY,i.userIsDragging=!1)},i.onTouchMove=function(o){var c=o.touches,l=c&&c.item(0);if(l){var f=Math.abs(l.clientX-i.initialTouchX),g=Math.abs(l.clientY-i.initialTouchY),p=5;i.userIsDragging=f>p||g>p}},i.onTouchEnd=function(o){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(o.target)&&i.menuListRef&&!i.menuListRef.contains(o.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(o){i.userIsDragging||i.onControlMouseDown(o)},i.onClearIndicatorTouchEnd=function(o){i.userIsDragging||i.onClearIndicatorMouseDown(o)},i.onDropdownIndicatorTouchEnd=function(o){i.userIsDragging||i.onDropdownIndicatorMouseDown(o)},i.handleInputChange=function(o){var c=i.props.inputValue,l=o.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(l,{action:"input-change",prevInputValue:c}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(o){i.props.onFocus&&i.props.onFocus(o),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(o){var c=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(o),i.onInputChange("",{action:"input-blur",prevInputValue:c}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(o){if(!(i.blockOptionHover||i.state.focusedOption===o)){var c=i.getFocusableOptions(),l=c.indexOf(o);i.setState({focusedOption:o,focusedOptionId:l>-1?i.getFocusedOptionId(o):null})}},i.shouldHideSelectedOptions=function(){return ud(i.props)},i.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),i.focus()},i.onKeyDown=function(o){var c=i.props,l=c.isMulti,f=c.backspaceRemovesValue,g=c.escapeClearsValue,p=c.inputValue,I=c.isClearable,S=c.isDisabled,b=c.menuIsOpen,x=c.onKeyDown,v=c.tabSelectsValue,w=c.openMenuOnFocus,T=i.state,C=T.focusedOption,_=T.focusedValue,h=T.selectValue;if(!S&&!(typeof x=="function"&&(x(o),o.defaultPrevented))){switch(i.blockOptionHover=!0,o.key){case"ArrowLeft":if(!l||p)return;i.focusValue("previous");break;case"ArrowRight":if(!l||p)return;i.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(_)i.removeValue(_);else{if(!f)return;l?i.popValue():I&&i.clearValue()}break;case"Tab":if(i.isComposing||o.shiftKey||!b||!v||!C||w&&i.isOptionSelected(C,h))return;i.selectOption(C);break;case"Enter":if(o.keyCode===229)break;if(b){if(!C||i.isComposing)return;i.selectOption(C);break}return;case"Escape":b?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:p}),i.onMenuClose()):I&&g&&i.clearValue();break;case" ":if(p)return;if(!b){i.openMenu("first");break}if(!C)return;i.selectOption(C);break;case"ArrowUp":b?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":b?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!b)return;i.focusOption("pageup");break;case"PageDown":if(!b)return;i.focusOption("pagedown");break;case"Home":if(!b)return;i.focusOption("first");break;case"End":if(!b)return;i.focusOption("last");break;default:return}o.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++JI),i.state.selectValue=vi(r.value),r.menuIsOpen&&i.state.selectValue.length){var a=i.getFocusableOptionsWithIds(),s=i.buildFocusableOptions(),u=s.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=a,i.state.focusedOption=s[u],i.state.focusedOptionId=fs(a,s[u])}return i}return uS(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ol(this.menuListRef,this.focusedOptionRef),jI()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var a=this.props,s=a.isDisabled,u=a.menuIsOpen,o=this.state.isFocused;(o&&!s&&i.isDisabled||o&&u&&!i.menuIsOpen)&&this.focusInput(),o&&s&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!o&&!s&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ol(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,a){this.props.onInputChange(i,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var a=this,s=this.state,u=s.selectValue,o=s.isFocused,c=this.buildFocusableOptions(),l=i==="first"?0:c.length-1;if(!this.props.isMulti){var f=c.indexOf(u[0]);f>-1&&(l=f)}this.scrollToFocusedOptionOnUpdate=!(o&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[l],focusedOptionId:this.getFocusedOptionId(c[l])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(i){var a=this.state,s=a.selectValue,u=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var o=s.indexOf(u);u||(o=-1);var c=s.length-1,l=-1;if(s.length){switch(i){case"previous":o===0?l=0:o===-1?l=c:l=o-1;break;case"next":o>-1&&o<c&&(l=o+1);break}this.setState({inputIsHidden:l!==-1,focusedValue:s[l]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,u=this.getFocusableOptions();if(u.length){var o=0,c=u.indexOf(s);s||(c=-1),i==="up"?o=c>0?c-1:u.length-1:i==="down"?o=(c+1)%u.length:i==="pageup"?(o=c-a,o<0&&(o=0)):i==="pagedown"?(o=c+a,o>u.length-1&&(o=u.length-1)):i==="last"&&(o=u.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:u[o],focusedValue:null,focusedOptionId:this.getFocusedOptionId(u[o])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(ds):V(V({},ds),this.props.theme):ds}},{key:"getCommonProps",value:function(){var i=this.clearValue,a=this.cx,s=this.getStyles,u=this.getClassNames,o=this.getValue,c=this.selectOption,l=this.setValue,f=this.props,g=f.isMulti,p=f.isRtl,I=f.options,S=this.hasValue();return{clearValue:i,cx:a,getStyles:s,getClassNames:u,getValue:o,hasValue:S,isMulti:g,isRtl:p,options:I,selectOption:c,selectProps:f,setValue:l,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,a=i.isClearable,s=i.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(i,a){return ad(this.props,i,a)}},{key:"isOptionSelected",value:function(i,a){return sd(this.props,i,a)}},{key:"filterOption",value:function(i,a){return od(this.props,i,a)}},{key:"formatOptionLabel",value:function(i,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,u=this.state.selectValue;return this.props.formatOptionLabel(i,{context:a,inputValue:s,selectValue:u})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,a=i.isDisabled,s=i.isSearchable,u=i.inputId,o=i.inputValue,c=i.tabIndex,l=i.form,f=i.menuIsOpen,g=i.required,p=this.getComponents(),I=p.Input,S=this.state,b=S.inputIsHidden,x=S.ariaSelection,v=this.commonProps,w=u||this.getElementId("input"),T=V(V(V({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},f&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(x==null?void 0:x.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?K.createElement(I,H({},v,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:w,innerRef:this.getInputRef,isDisabled:a,isHidden:b,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:l,type:"text",value:o},T)):K.createElement(wI,H({id:w,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:hi,onFocus:this.onInputFocus,disabled:a,tabIndex:c,inputMode:"none",form:l,value:""},T))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,a=this.getComponents(),s=a.MultiValue,u=a.MultiValueContainer,o=a.MultiValueLabel,c=a.MultiValueRemove,l=a.SingleValue,f=a.Placeholder,g=this.commonProps,p=this.props,I=p.controlShouldRenderValue,S=p.isDisabled,b=p.isMulti,x=p.inputValue,v=p.placeholder,w=this.state,T=w.selectValue,C=w.focusedValue,_=w.isFocused;if(!this.hasValue()||!I)return x?null:K.createElement(f,H({},g,{key:"placeholder",isDisabled:S,isFocused:_,innerProps:{id:this.getElementId("placeholder")}}),v);if(b)return T.map(function(E,D){var $=E===C,R="".concat(i.getOptionLabel(E),"-").concat(i.getOptionValue(E));return K.createElement(s,H({},g,{components:{Container:u,Label:o,Remove:c},isFocused:$,isDisabled:S,key:R,index:D,removeProps:{onClick:function(){return i.removeValue(E)},onTouchEnd:function(){return i.removeValue(E)},onMouseDown:function(ne){ne.preventDefault()}},data:E}),i.formatOptionLabel(E,"value"))});if(x)return null;var h=T[0];return K.createElement(l,H({},g,{data:h,isDisabled:S}),this.formatOptionLabel(h,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),a=i.ClearIndicator,s=this.commonProps,u=this.props,o=u.isDisabled,c=u.isLoading,l=this.state.isFocused;if(!this.isClearable()||!a||o||!this.hasValue()||c)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return K.createElement(a,H({},s,{innerProps:f,isFocused:l}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),a=i.LoadingIndicator,s=this.commonProps,u=this.props,o=u.isDisabled,c=u.isLoading,l=this.state.isFocused;if(!a||!c)return null;var f={"aria-hidden":"true"};return K.createElement(a,H({},s,{innerProps:f,isDisabled:o,isFocused:l}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),a=i.DropdownIndicator,s=i.IndicatorSeparator;if(!a||!s)return null;var u=this.commonProps,o=this.props.isDisabled,c=this.state.isFocused;return K.createElement(s,H({},u,{isDisabled:o,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),a=i.DropdownIndicator;if(!a)return null;var s=this.commonProps,u=this.props.isDisabled,o=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return K.createElement(a,H({},s,{innerProps:c,isDisabled:u,isFocused:o}))}},{key:"renderMenu",value:function(){var i=this,a=this.getComponents(),s=a.Group,u=a.GroupHeading,o=a.Menu,c=a.MenuList,l=a.MenuPortal,f=a.LoadingMessage,g=a.NoOptionsMessage,p=a.Option,I=this.commonProps,S=this.state.focusedOption,b=this.props,x=b.captureMenuScroll,v=b.inputValue,w=b.isLoading,T=b.loadingMessage,C=b.minMenuHeight,_=b.maxMenuHeight,h=b.menuIsOpen,E=b.menuPlacement,D=b.menuPosition,$=b.menuPortalTarget,R=b.menuShouldBlockScroll,W=b.menuShouldScrollIntoView,ne=b.noOptionsMessage,ee=b.onMenuScrollToTop,M=b.onMenuScrollToBottom;if(!h)return null;var L=function(Y,P){var j=Y.type,B=Y.data,A=Y.isDisabled,ae=Y.isSelected,Fe=Y.label,Be=Y.value,vn=S===B,Bt=A?void 0:function(){return i.onOptionHover(B)},Ps=A?void 0:function(){return i.selectOption(B)},Li="".concat(i.getElementId("option"),"-").concat(P),ur={id:Li,onClick:Ps,onMouseMove:Bt,onMouseOver:Bt,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:ae};return K.createElement(p,H({},I,{innerProps:ur,data:B,isDisabled:A,isSelected:ae,key:Li,label:Fe,type:j,value:Be,isFocused:vn,innerRef:vn?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(Y.data,"menu"))},k;if(this.hasOptions())k=this.getCategorizedOptions().map(function(q){if(q.type==="group"){var Y=q.data,P=q.options,j=q.index,B="".concat(i.getElementId("group"),"-").concat(j),A="".concat(B,"-heading");return K.createElement(s,H({},I,{key:B,data:Y,options:P,Heading:u,headingProps:{id:A,data:q.data},label:i.formatGroupLabel(q.data)}),q.options.map(function(ae){return L(ae,"".concat(j,"-").concat(ae.index))}))}else if(q.type==="option")return L(q,"".concat(q.index))});else if(w){var U=T({inputValue:v});if(U===null)return null;k=K.createElement(f,I,U)}else{var te=ne({inputValue:v});if(te===null)return null;k=K.createElement(g,I,te)}var ue={minMenuHeight:C,maxMenuHeight:_,menuPlacement:E,menuPosition:D,menuShouldScrollIntoView:W},F=K.createElement(rx,H({},I,ue),function(q){var Y=q.ref,P=q.placerProps,j=P.placement,B=P.maxHeight;return K.createElement(o,H({},I,ue,{innerRef:Y,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:w,placement:j}),K.createElement(PI,{captureEnabled:x,onTopArrive:ee,onBottomArrive:M,lockEnabled:R},function(A){return K.createElement(c,H({},I,{innerRef:function(Fe){i.getMenuListRef(Fe),A(Fe)},innerProps:{role:"listbox","aria-multiselectable":I.isMulti,id:i.getElementId("listbox")},isLoading:w,maxHeight:B,focusedOption:S}),k)}))});return $||D==="fixed"?K.createElement(l,H({},I,{appendTo:$,controlElement:this.controlRef,menuPlacement:E,menuPosition:D}),F):F}},{key:"renderFormField",value:function(){var i=this,a=this.props,s=a.delimiter,u=a.isDisabled,o=a.isMulti,c=a.name,l=a.required,f=this.state.selectValue;if(l&&!this.hasValue()&&!u)return K.createElement(NI,{name:c,onFocus:this.onValueInputFocus});if(!(!c||u))if(o)if(s){var g=f.map(function(S){return i.getOptionValue(S)}).join(s);return K.createElement("input",{name:c,type:"hidden",value:g})}else{var p=f.length>0?f.map(function(S,b){return K.createElement("input",{key:"i-".concat(b),name:c,type:"hidden",value:i.getOptionValue(S)})}):K.createElement("input",{name:c,type:"hidden",value:""});return K.createElement("div",null,p)}else{var I=f[0]?this.getOptionValue(f[0]):"";return K.createElement("input",{name:c,type:"hidden",value:I})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,a=this.state,s=a.ariaSelection,u=a.focusedOption,o=a.focusedValue,c=a.isFocused,l=a.selectValue,f=this.getFocusableOptions();return K.createElement(yI,H({},i,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:u,focusedValue:o,isFocused:c,selectValue:l,focusableOptions:f,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),a=i.Control,s=i.IndicatorsContainer,u=i.SelectContainer,o=i.ValueContainer,c=this.props,l=c.className,f=c.id,g=c.isDisabled,p=c.menuIsOpen,I=this.state.isFocused,S=this.commonProps=this.getCommonProps();return K.createElement(u,H({},S,{className:l,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:I}),this.renderLiveRegion(),K.createElement(a,H({},S,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:I,menuIsOpen:p}),K.createElement(o,H({},S,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),K.createElement(s,H({},S,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,a){var s=a.prevProps,u=a.clearFocusValueOnUpdate,o=a.inputIsHiddenAfterUpdate,c=a.ariaSelection,l=a.isFocused,f=a.prevWasFocused,g=a.instancePrefix,p=i.options,I=i.value,S=i.menuIsOpen,b=i.inputValue,x=i.isMulti,v=vi(I),w={};if(s&&(I!==s.value||p!==s.options||S!==s.menuIsOpen||b!==s.inputValue)){var T=S?YI(i,v):[],C=S?nd(Ii(i,v),"".concat(g,"-option")):[],_=u?QI(a,v):null,h=KI(a,T),E=fs(C,h);w={selectValue:v,focusedOption:h,focusedOptionId:E,focusableOptionsWithIds:C,focusedValue:_,clearFocusValueOnUpdate:!1}}var D=o!=null&&i!==s?{inputIsHidden:o,inputIsHiddenAfterUpdate:void 0}:{},$=c,R=l&&f;return l&&!R&&($={value:Jn(x,v,v[0]||null),options:v,action:"initial-input-focus"},R=!f),(c==null?void 0:c.action)==="initial-input-focus"&&($=null),V(V(V({},w),D),{},{prevProps:i,ariaSelection:$,prevWasFocused:R})}}]),n}(O.Component);ps.defaultProps=WI;var XI=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function cd(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,a=e.defaultValue,s=a===void 0?null:a,u=e.inputValue,o=e.menuIsOpen,c=e.onChange,l=e.onInputChange,f=e.onMenuClose,g=e.onMenuOpen,p=e.value,I=tt(e,XI),S=O.useState(u!==void 0?u:n),b=Me(S,2),x=b[0],v=b[1],w=O.useState(o!==void 0?o:i),T=Me(w,2),C=T[0],_=T[1],h=O.useState(p!==void 0?p:s),E=Me(h,2),D=E[0],$=E[1],R=O.useCallback(function(U,te){typeof c=="function"&&c(U,te),$(U)},[c]),W=O.useCallback(function(U,te){var ue;typeof l=="function"&&(ue=l(U,te)),v(ue!==void 0?ue:U)},[l]),ne=O.useCallback(function(){typeof g=="function"&&g(),_(!0)},[g]),ee=O.useCallback(function(){typeof f=="function"&&f(),_(!1)},[f]),M=u!==void 0?u:x,L=o!==void 0?o:C,k=p!==void 0?p:D;return V(V({},I),{},{inputValue:M,menuIsOpen:L,onChange:R,onInputChange:W,onMenuClose:ee,onMenuOpen:ne,value:k})}var ZI=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function ld(e){var t=e.defaultOptions,n=t===void 0?!1:t,r=e.cacheOptions,i=r===void 0?!1:r,a=e.loadOptions;e.options;var s=e.isLoading,u=s===void 0?!1:s,o=e.onInputChange,c=e.filterOption,l=c===void 0?null:c,f=tt(e,ZI),g=f.inputValue,p=O.useRef(void 0),I=O.useRef(!1),S=O.useState(Array.isArray(n)?n:void 0),b=Me(S,2),x=b[0],v=b[1],w=O.useState(typeof g<"u"?g:""),T=Me(w,2),C=T[0],_=T[1],h=O.useState(n===!0),E=Me(h,2),D=E[0],$=E[1],R=O.useState(void 0),W=Me(R,2),ne=W[0],ee=W[1],M=O.useState([]),L=Me(M,2),k=L[0],U=L[1],te=O.useState(!1),ue=Me(te,2),F=ue[0],q=ue[1],Y=O.useState({}),P=Me(Y,2),j=P[0],B=P[1],A=O.useState(void 0),ae=Me(A,2),Fe=ae[0],Be=ae[1],vn=O.useState(void 0),Bt=Me(vn,2),Ps=Bt[0],Li=Bt[1];i!==Ps&&(B({}),Li(i)),n!==Fe&&(v(Array.isArray(n)?n:void 0),Be(n)),O.useEffect(function(){return I.current=!0,function(){I.current=!1}},[]);var ur=O.useCallback(function(cr,bn){if(!a)return bn();var Qe=a(cr,bn);Qe&&typeof Qe.then=="function"&&Qe.then(bn,function(){return bn()})},[a]);O.useEffect(function(){n===!0&&ur(C,function(cr){I.current&&(v(cr||[]),$(!!p.current))})},[]);var NO=O.useCallback(function(cr,bn){var Qe=R1(cr,bn,o);if(!Qe){p.current=void 0,_(""),ee(""),U([]),$(!1),q(!1);return}if(i&&j[Qe])_(Qe),ee(Qe),U(j[Qe]),$(!1),q(!1);else{var AO=p.current={};_(Qe),$(!0),q(!ne),ur(Qe,function(Ms){I&&AO===p.current&&(p.current=void 0,$(!1),ee(Qe),U(Ms||[]),q(!1),B(Ms?V(V({},j),{},un({},Qe,Ms)):j))})}},[i,ur,ne,j,o]),kO=F?[]:C&&ne?k:x||[];return V(V({},f),{},{options:kO,isLoading:D||u,onInputChange:NO,filterOption:l})}var e_=O.forwardRef(function(e,t){var n=ld(e),r=cd(n);return K.createElement(ps,H({ref:t},r))}),t_=e_,n_=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],dd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=String(t).toLowerCase(),a=String(r.getOptionValue(n)).toLowerCase(),s=String(r.getOptionLabel(n)).toLowerCase();return a===i||s===i},ms={formatCreateLabel:function(t){return'Create "'.concat(t,'"')},isValidNewOption:function(t,n,r,i){return!(!t||n.some(function(a){return dd(t,a,i)})||r.some(function(a){return dd(t,a,i)}))},getNewOptionData:function(t,n){return{label:n,value:t,__isNew__:!0}}};function r_(e){var t=e.allowCreateWhileLoading,n=t===void 0?!1:t,r=e.createOptionPosition,i=r===void 0?"last":r,a=e.formatCreateLabel,s=a===void 0?ms.formatCreateLabel:a,u=e.isValidNewOption,o=u===void 0?ms.isValidNewOption:u,c=e.getNewOptionData,l=c===void 0?ms.getNewOptionData:c,f=e.onCreateOption,g=e.options,p=g===void 0?[]:g,I=e.onChange,S=tt(e,n_),b=S.getOptionValue,x=b===void 0?Xl:b,v=S.getOptionLabel,w=v===void 0?Jl:v,T=S.inputValue,C=S.isLoading,_=S.isMulti,h=S.value,E=S.name,D=O.useMemo(function(){return o(T,vi(h),p,{getOptionValue:x,getOptionLabel:w})?l(T,s(T)):void 0},[s,l,w,x,T,o,p,h]),$=O.useMemo(function(){return(n||!C)&&D?i==="first"?[D].concat(cn(p)):[].concat(cn(p),[D]):p},[n,i,C,D,p]),R=O.useCallback(function(W,ne){if(ne.action!=="select-option")return I(W,ne);var ee=Array.isArray(W)?W:[W];if(ee[ee.length-1]===D){if(f)f(T);else{var M=l(T,T),L={action:"create-option",name:E,option:M};I(Jn(_,[].concat(cn(vi(h)),[M]),M),L)}return}I(W,ne)},[l,T,_,E,D,f,I,h]);return V(V({},S),{},{options:$,onChange:R})}var i_=O.forwardRef(function(e,t){var n=ld(e),r=cd(n),i=r_(r);return K.createElement(ps,H({ref:t},i))}),a_=i_,s_="[object Symbol]";function o_(e){return typeof e=="symbol"||sn(e)&&nn(e)==s_}var u_=/\s/;function c_(e){for(var t=e.length;t--&&u_.test(e.charAt(t)););return t}var l_=/^\s+/;function d_(e){return e&&e.slice(0,c_(e)+1).replace(l_,"")}var fd=NaN,f_=/^[-+]0x[0-9a-f]+$/i,p_=/^0b[01]+$/i,m_=/^0o[0-7]+$/i,g_=parseInt;function pd(e){if(typeof e=="number")return e;if(o_(e))return fd;if(bt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=bt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=d_(e);var n=p_.test(e);return n||m_.test(e)?g_(e.slice(2),n?2:8):f_.test(e)?fd:+e}var gs=function(){return et.Date.now()},h_="Expected a function",v_=Math.max,b_=Math.min;function md(e,t,n){var r,i,a,s,u,o,c=0,l=!1,f=!1,g=!0;if(typeof e!="function")throw new TypeError(h_);t=pd(t)||0,bt(n)&&(l=!!n.leading,f="maxWait"in n,a=f?v_(pd(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g);function p(_){var h=r,E=i;return r=i=void 0,c=_,s=e.apply(E,h),s}function I(_){return c=_,u=setTimeout(x,t),l?p(_):s}function S(_){var h=_-o,E=_-c,D=t-h;return f?b_(D,a-E):D}function b(_){var h=_-o,E=_-c;return o===void 0||h>=t||h<0||f&&E>=a}function x(){var _=gs();if(b(_))return v(_);u=setTimeout(x,S(_))}function v(_){return u=void 0,g&&r?p(_):(r=i=void 0,s)}function w(){u!==void 0&&clearTimeout(u),c=0,r=o=i=u=void 0}function T(){return u===void 0?s:v(gs())}function C(){var _=gs(),h=b(_);if(r=arguments,i=this,o=_,h){if(u===void 0)return I(o);if(f)return clearTimeout(u),u=setTimeout(x,t),p(o)}return u===void 0&&(u=setTimeout(x,t)),s}return C.cancel=w,C.flush=T,C}var y_="Expected a function";function S_(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(y_);return bt(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),md(e,t,{leading:r,maxWait:t,trailing:i})}function Ci(e,t,n){const r=O.useRef(e);return r.current=e,O.useCallback(md(function(){return r.current.apply(this,arguments)},t,n),[t,n==null?void 0:n.leading,n==null?void 0:n.trailing,n==null?void 0:n.maxWait])}const x_=e=>Array.isArray(e)?e:e?[e]:[],I_=e=>{const{selectedOptions:t,isDisabled:n=!1,creatable:r=!1,components:i,placeholder:a,showDropdown:s=!0,noOptionsMessageText:u="None"}=e,c={...e,styles:{option:l=>({...l,color:"#000"}),container:(l,f)=>({...l,zIndex:f.isFocused?10:l.zIndex}),multiValueRemove:(l,f)=>({...l,color:f.isFocused?l.color:"#333333"})},defaultOptions:!0,isClearable:!0,value:t??null,className:Ue("react-select",e.className),classNamePrefix:"react-select",noOptionsMessage:()=>u,placeholder:n?"":a,components:{...i,IndicatorSeparator:()=>null,...(!s||n)&&{DropdownIndicator:()=>null},...n&&{MultiValueRemove:()=>null}}};return r?d.jsx(a_,{...c,isDisabled:n}):d.jsx(t_,{...c})},__=e=>{const{values:t,isMulti:n,onSelect:r,creatable:i=!1,isValidNewOption:a,getNamedObject:s,loadOptions:u}=e,[o,c]=O.useState(!1),l=ap(),f=O.useMemo(()=>{if(n&&t)return t.map(v=>({object:v,value:v.id}));if(t!=null&&t.length)return{object:t[0],value:t[0].id}},[t,n]),g=v=>{const w=x_(v);r==null||r(w.map(T=>T.object))},p=i&&e.onCreate?async v=>{try{c(!0);const{value:w,item:T,message:C}=await e.onCreate(v),_={object:T,value:w};g(n?[...f??[],_]:_),c(!1),l.success(d.jsxs("span",{children:[C,": ",d.jsx("b",{children:v})]}))}catch(w){l.error(w)}}:void 0,I=i&&s?(v,w)=>({value:"",object:s("",w)}):void 0,S=i&&a?(v,w,T)=>a(v,T.map(C=>C.object)):void 0,x=Ci((v,w)=>{u(v).then(w)},100);return d.jsx(I_,{...e,loadOptions:x,isLoading:e.isLoading||o,onChange:g,selectedOptions:f,onCreateOption:p,getNewOptionData:I,isValidNewOption:S})};function gd(e){return{value:e.id,object:e}}function C_(e){return w_(e)!==e}function w_(e){const t=O.useRef();return O.useEffect(()=>{t.current=e},[e]),t.current}const hd=e=>{const{error:t,message:n=d.jsx(Se.FormattedMessage,{id:"errors.header"})}=e;return d.jsx("div",{className:"ErrorMessage-container",children:d.jsxs(z.Alert,{variant:"danger",className:"ErrorMessage",children:[d.jsxs(z.Alert.Heading,{className:"ErrorMessage-header",children:[d.jsx(Te,{icon:ce.faWarning}),n]}),d.jsx("div",{className:"ErrorMessage-content code",children:t})]})})},vd="LoadingIndicator",O_=`${vd}-message`,bd=he("LoadingIndicator",({message:e,inline:t=!1,small:n=!1,card:r=!1})=>{const a=Se.useIntl().formatMessage({id:"loading.generic"});return d.jsxs("div",{className:Ue(vd,{inline:t,small:n,"card-based":r}),children:[d.jsx(z.Spinner,{animation:"border",role:"status",size:n?"sm":void 0,children:d.jsx("span",{className:"sr-only",children:a})}),e!==""&&d.jsx("h4",{className:O_,children:e??a})]})}),Nt=he("HoverPopover",({enterDelay:e=200,leaveDelay:t=200,content:n,children:r,className:i,placement:a="top",popperConfig:s,onOpen:u,onClose:o,target:c})=>{const[l,f]=O.useState(!1),[g,p]=O.useState(null),I=O.useRef(),S=O.useRef(),b=O.useRef(`hover-popover-${Math.random().toString(36).slice(2)}`),x=O.useCallback(C=>{p(C)},[]),v=O.useCallback(()=>(c==null?void 0:c.current)??g,[c,g]),w=O.useCallback(()=>{window.clearTimeout(S.current),I.current=window.setTimeout(()=>{f(!0),u==null||u()},e)},[e,u]),T=O.useCallback(()=>{window.clearTimeout(I.current),S.current=window.setTimeout(()=>{f(!1),o==null||o()},t)},[t,o]);return O.useEffect(()=>()=>{window.clearTimeout(I.current),window.clearTimeout(S.current)},[]),d.jsxs(d.Fragment,{children:[d.jsx("div",{className:i,onMouseEnter:w,onMouseLeave:T,ref:x,children:r}),v()&&d.jsx(z.Overlay,{show:l,placement:a,target:v,container:document.body,popperConfig:s,children:d.jsx(z.Popover,{onMouseEnter:w,onMouseLeave:T,id:b.current,className:"hover-popover-content",children:n})})]})});he("WarningHoverPopover",({children:e,...t})=>d.jsx(Nt,{...t,className:"warning-hover-popover",children:d.jsx(Te,{icon:ce.faExclamationTriangle})}));function yd(e){return e.title?e.title:e.files&&e.files.length>0?$e.fileNameFromPath(e.files[0].path):e.folder?$e.fileNameFromPath(e.folder.path):""}function Sd(e){return e.title?e.title:e.files&&e.files.length>0?$e.fileNameFromPath(e.files[0].path):""}function E_(e){return e.files&&e.files.length>0?e.files[0].path:""}function Zn(e,t){t&&t.length>0&&e.push(...t)}const T_=(e,t,n)=>{if(!e.id)return"#";const r=new ie(J.Scenes,void 0),i=new Xt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),Zn(r.criteria,n),`/scenes?${r.makeQueryParameters()}`},D_=(e,t,n)=>{if(!e.id)return"#";const r=new ie(J.Images,void 0),i=new Xt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),Zn(r.criteria,n),`/images?${r.makeQueryParameters()}`},$_=(e,t,n)=>{if(!e.id)return"#";const r=new ie(J.Galleries,void 0),i=new Xt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),Zn(r.criteria,n),`/galleries?${r.makeQueryParameters()}`},P_=(e,t,n)=>{if(!e.id)return"#";const r=new ie(J.Groups,void 0),i=new Xt;return i.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t&&i.value.items.push(t),r.criteria.push(i),Zn(r.criteria,n),`/groups?${r.makeQueryParameters()}`},M_=e=>{if(!e.id)return"#";const t=new ie(J.SceneMarkers,void 0),n=new Xt;return n.value.items=[{id:e.id,label:e.name||`Performer ${e.id}`}],t.criteria.push(n),`/scenes/markers?${t.makeQueryParameters()}`},F_=e=>{if(!e.id)return"#";const t=new ie(J.Performers,void 0),n=new jc;return n.value=`${e.country}`,t.criteria.push(n),`/performers?${t.makeQueryParameters()}`},N_=e=>{if(!e.id)return"#";const t=new ie(J.Scenes,void 0),n=new en;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/scenes?${t.makeQueryParameters()}`},k_=e=>{if(!e.id)return"#";const t=new ie(J.Images,void 0),n=new en;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/images?${t.makeQueryParameters()}`},A_=e=>{if(!e.id)return"#";const t=new ie(J.Galleries,void 0),n=new en;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/galleries?${t.makeQueryParameters()}`},L_=e=>{if(!e.id)return"#";const t=new ie(J.Groups,void 0),n=new en;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/groups?${t.makeQueryParameters()}`},j_=e=>{if(!e.id)return"#";const t=new ie(J.Performers,void 0),n=new en;return n.value={items:[{id:e.id,label:e.name||`Studio ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/performers?${t.makeQueryParameters()}`},q_=e=>{if(!e.id)return"#";const t=new ie(J.Studios,void 0),n=new wu;return n.value=[{id:e.id,label:e.name||`Studio ${e.id}`}],t.criteria.push(n),`/studios?${t.makeQueryParameters()}`},B_=e=>{if(!e.id)return"#";const t=new ie(J.Scenes,void 0),n=new Un(Vr);return n.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/scenes?${t.makeQueryParameters()}`},R_=e=>`/tags/${e}`,V_=e=>{if(!e.id)return"#";const t=new ie(J.Tags,void 0),n=new kr(Tu);return n.value={items:[{id:e.id,label:e.name||`Tag ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/tags?${t.makeQueryParameters()}`},G_=e=>{if(!e.id)return"#";const t=new ie(J.Tags,void 0),n=new kr(Eu);return n.value={items:[{id:e.id,label:e.name||`Tag ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/tags?${t.makeQueryParameters()}`};function kt(e,t){const n=new ie(e,void 0),r=new kr(vt);return r.value={items:[{id:t.id,label:t.name||`Tag ${t.id}`}],excluded:[],depth:0},n.criteria.push(r),n.makeQueryParameters()}const U_=e=>`/scenes?${kt(J.Scenes,e)}`,z_=e=>`/performers?${kt(J.Performers,e)}`,H_=e=>`/studios?${kt(J.Studios,e)}`,W_=e=>`/scenes/markers?${kt(J.SceneMarkers,e)}`,Y_=e=>`/galleries?${kt(J.Galleries,e)}`,Q_=e=>`/images?${kt(J.Images,e)}`,K_=e=>`/groups?${kt(J.Groups,e)}`,J_=e=>!e.id||!e.scene?"#":`/scenes/${e.scene.id}?t=${e.seconds}`,X_=e=>{if(!e)return"#";const t=new ie(J.Scenes,void 0),n=new Na;return n.value={value:e},t.criteria.push(n),`/scenes?${t.makeQueryParameters()}`},Z_=e=>{if(!e)return"#";const t=new ie(J.Images,void 0),n=new Na;return n.value={value:e},t.criteria.push(n),`/images?${t.makeQueryParameters()}`},eC=(e,t)=>{if(!e.id)return"#";const n=new ie(J.Images,void 0),r=new Ic;return r.value=[{id:e.id,label:yd(e)}],n.criteria.push(r),Zn(n.criteria,t),`/images?${n.makeQueryParameters()}`};function wi(e,t){const n=new Ze(e);return n.modifier=y.Equals,n.value=t,n}const me={makePerformerScenesUrl:T_,makePerformerImagesUrl:D_,makePerformerGalleriesUrl:$_,makePerformerGroupsUrl:P_,makePerformerSceneMarkersUrl:M_,makePerformersCountryUrl:F_,makeStudioScenesUrl:N_,makeStudioImagesUrl:k_,makeStudioGalleriesUrl:A_,makeStudioGroupsUrl:L_,makeStudioPerformersUrl:j_,makeTagUrl:R_,makeGroupUrl:e=>`/groups/${e}`,makeParentTagsUrl:V_,makeChildTagsUrl:G_,makeTagSceneMarkersUrl:W_,makeTagScenesUrl:U_,makeTagPerformersUrl:z_,makeTagStudiosUrl:H_,makeTagGalleriesUrl:Y_,makeTagImagesUrl:Q_,makeTagGroupsUrl:K_,makeScenesPHashMatchUrl:X_,makeSceneMarkerUrl:J_,makeImagesPHashMatchUrl:Z_,makeGroupScenesUrl:B_,makeChildStudiosUrl:q_,makeGalleryImagesUrl:eC,makeDirectorScenesUrl:e=>{if(e.length===0)return"#";const t=new ie(J.Scenes,void 0);return t.criteria.push(wi(re("director"),e)),`/scenes?${t.makeQueryParameters()}`},makePhotographerGalleriesUrl:e=>{if(e.length===0)return"#";const t=new ie(J.Galleries,void 0);return t.criteria.push(wi(re("photographer"),e)),`/galleries?${t.makeQueryParameters()}`},makePhotographerImagesUrl:e=>{if(e.length===0)return"#";const t=new ie(J.Images,void 0);return t.criteria.push(wi(re("photographer"),e)),`/images?${t.makeQueryParameters()}`},makeDirectorGroupsUrl:e=>{if(e.length===0)return"#";const t=new ie(J.Groups,void 0);return t.criteria.push(wi(re("director"),e)),`/groups?${t.makeQueryParameters()}`},makeContainingGroupsUrl:e=>{if(!e.id)return"#";const t=new ie(J.Groups,void 0),n=new Un(Dc);return n.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/groups?${t.makeQueryParameters()}`},makeSubGroupsUrl:e=>{if(!e.id)return"#";const t=new ie(J.Groups,void 0),n=new Un(Tc);return n.value={items:[{id:e.id,label:e.name||`Group ${e.id}`}],excluded:[],depth:0},t.criteria.push(n),`/groups?${t.makeQueryParameters()}`},makeSceneMarkersSceneUrl:e=>{if(!e.id)return"#";const t=new ie(J.SceneMarkers,void 0),n=new Iu;return n.value=[{id:e.id,label:Sd(e)}],t.criteria.push(n),`/scenes/markers?${t.makeQueryParameters()}`}},hs="TruncatedText",tC=`${hs}-tooltip`,er=he("TruncatedText",({text:e,className:t,lineCount:n=1,placement:r="bottom",delay:i=1e3})=>{const[a,s]=O.useState(!1),u=O.useRef(null),o=Ci(()=>s(!0),i);if(!e)return null;const c=g=>{(g.offsetWidth<g.scrollWidth||g.offsetHeight+10<g.scrollHeight)&&o()},l=()=>{o.cancel(),s(!1)},f=d.jsx(z.Overlay,{target:u.current,show:a,placement:r,children:d.jsx(z.Tooltip,{id:hs,className:tC,children:e})});return d.jsxs("div",{className:Ue(hs,t),style:{WebkitLineClamp:n},ref:u,onMouseEnter:g=>c(g.currentTarget),onFocus:g=>c(g.currentTarget),onMouseLeave:l,onBlur:l,children:[e,f]})}),nC=()=>window.matchMedia("only screen and (max-width: 576px)").matches,rC=()=>window.matchMedia("(pointer: coarse)").matches;function iC(e){return window.matchMedia(e).matches}const xd={isMobile:nC,isTouch:rC,matchesMediaQuery:iC};var At=[],aC=function(){return At.some(function(e){return e.activeTargets.length>0})},sC=function(){return At.some(function(e){return e.skippedTargets.length>0})},Id="ResizeObserver loop completed with undelivered notifications.",oC=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:Id}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=Id),window.dispatchEvent(e)},tr;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(tr||(tr={}));var Lt=function(e){return Object.freeze(e)},uC=function(){function e(t,n){this.inlineSize=t,this.blockSize=n,Lt(this)}return e}(),_d=function(){function e(t,n,r,i){return this.x=t,this.y=n,this.width=r,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Lt(this)}return e.prototype.toJSON=function(){var t=this,n=t.x,r=t.y,i=t.top,a=t.right,s=t.bottom,u=t.left,o=t.width,c=t.height;return{x:n,y:r,top:i,right:a,bottom:s,left:u,width:o,height:c}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),vs=function(e){return e instanceof SVGElement&&"getBBox"in e},Cd=function(e){if(vs(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e,a=i.offsetWidth,s=i.offsetHeight;return!(a||s||e.getClientRects().length)},wd=function(e){var t;if(e instanceof Element)return!0;var n=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},cC=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},nr=typeof window<"u"?window:{},Oi=new WeakMap,Od=/auto|scroll/,lC=/^tb|vertical/,dC=/msie|trident/i.test(nr.navigator&&nr.navigator.userAgent),at=function(e){return parseFloat(e||"0")},mn=function(e,t,n){return e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=!1),new uC((n?t:e)||0,(n?e:t)||0)},Ed=Lt({devicePixelContentBoxSize:mn(),borderBoxSize:mn(),contentBoxSize:mn(),contentRect:new _d(0,0,0,0)}),Td=function(e,t){if(t===void 0&&(t=!1),Oi.has(e)&&!t)return Oi.get(e);if(Cd(e))return Oi.set(e,Ed),Ed;var n=getComputedStyle(e),r=vs(e)&&e.ownerSVGElement&&e.getBBox(),i=!dC&&n.boxSizing==="border-box",a=lC.test(n.writingMode||""),s=!r&&Od.test(n.overflowY||""),u=!r&&Od.test(n.overflowX||""),o=r?0:at(n.paddingTop),c=r?0:at(n.paddingRight),l=r?0:at(n.paddingBottom),f=r?0:at(n.paddingLeft),g=r?0:at(n.borderTopWidth),p=r?0:at(n.borderRightWidth),I=r?0:at(n.borderBottomWidth),S=r?0:at(n.borderLeftWidth),b=f+c,x=o+l,v=S+p,w=g+I,T=u?e.offsetHeight-w-e.clientHeight:0,C=s?e.offsetWidth-v-e.clientWidth:0,_=i?b+v:0,h=i?x+w:0,E=r?r.width:at(n.width)-_-C,D=r?r.height:at(n.height)-h-T,$=E+b+C+v,R=D+x+T+w,W=Lt({devicePixelContentBoxSize:mn(Math.round(E*devicePixelRatio),Math.round(D*devicePixelRatio),a),borderBoxSize:mn($,R,a),contentBoxSize:mn(E,D,a),contentRect:new _d(f,o,E,D)});return Oi.set(e,W),W},Dd=function(e,t,n){var r=Td(e,n),i=r.borderBoxSize,a=r.contentBoxSize,s=r.devicePixelContentBoxSize;switch(t){case tr.DEVICE_PIXEL_CONTENT_BOX:return s;case tr.BORDER_BOX:return i;default:return a}},fC=function(){function e(t){var n=Td(t);this.target=t,this.contentRect=n.contentRect,this.borderBoxSize=Lt([n.borderBoxSize]),this.contentBoxSize=Lt([n.contentBoxSize]),this.devicePixelContentBoxSize=Lt([n.devicePixelContentBoxSize])}return e}(),$d=function(e){if(Cd(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},pC=function(){var e=1/0,t=[];At.forEach(function(s){if(s.activeTargets.length!==0){var u=[];s.activeTargets.forEach(function(c){var l=new fC(c.target),f=$d(c.target);u.push(l),c.lastReportedSize=Dd(c.target,c.observedBox),f<e&&(e=f)}),t.push(function(){s.callback.call(s.observer,u,s.observer)}),s.activeTargets.splice(0,s.activeTargets.length)}});for(var n=0,r=t;n<r.length;n++){var i=r[n];i()}return e},Pd=function(e){At.forEach(function(n){n.activeTargets.splice(0,n.activeTargets.length),n.skippedTargets.splice(0,n.skippedTargets.length),n.observationTargets.forEach(function(i){i.isActive()&&($d(i.target)>e?n.activeTargets.push(i):n.skippedTargets.push(i))})})},mC=function(){var e=0;for(Pd(e);aC();)e=pC(),Pd(e);return sC()&&oC(),e>0},bs,Md=[],gC=function(){return Md.splice(0).forEach(function(e){return e()})},hC=function(e){if(!bs){var t=0,n=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return gC()}).observe(n,r),bs=function(){n.textContent="".concat(t?t--:t++)}}Md.push(e),bs()},vC=function(e){hC(function(){requestAnimationFrame(e)})},Ei=0,bC=function(){return!!Ei},yC=250,SC={attributes:!0,characterData:!0,childList:!0,subtree:!0},Fd=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Nd=function(e){return e===void 0&&(e=0),Date.now()+e},ys=!1,xC=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var n=this;if(t===void 0&&(t=yC),!ys){ys=!0;var r=Nd(t);vC(function(){var i=!1;try{i=mC()}finally{if(ys=!1,t=r-Nd(),!bC())return;i?n.run(1e3):t>0?n.run(t):n.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,n=function(){return t.observer&&t.observer.observe(document.body,SC)};document.body?n():nr.addEventListener("DOMContentLoaded",n)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Fd.forEach(function(n){return nr.addEventListener(n,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),Fd.forEach(function(n){return nr.removeEventListener(n,t.listener,!0)}),this.stopped=!0)},e}(),Ss=new xC,kd=function(e){!Ei&&e>0&&Ss.start(),Ei+=e,!Ei&&Ss.stop()},IC=function(e){return!vs(e)&&!cC(e)&&getComputedStyle(e).display==="inline"},_C=function(){function e(t,n){this.target=t,this.observedBox=n||tr.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=Dd(this.target,this.observedBox,!0);return IC(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),CC=function(){function e(t,n){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=n}return e}(),Ti=new WeakMap,Ad=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},Di=function(){function e(){}return e.connect=function(t,n){var r=new CC(t,n);Ti.set(t,r)},e.observe=function(t,n,r){var i=Ti.get(t),a=i.observationTargets.length===0;Ad(i.observationTargets,n)<0&&(a&&At.push(i),i.observationTargets.push(new _C(n,r&&r.box)),kd(1),Ss.schedule())},e.unobserve=function(t,n){var r=Ti.get(t),i=Ad(r.observationTargets,n),a=r.observationTargets.length===1;i>=0&&(a&&At.splice(At.indexOf(r),1),r.observationTargets.splice(i,1),kd(-1))},e.disconnect=function(t){var n=this,r=Ti.get(t);r.observationTargets.slice().forEach(function(i){return n.unobserve(t,i.target)}),r.activeTargets.splice(0,r.activeTargets.length)},e}(),wC=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Di.connect(this,t)}return e.prototype.observe=function(t,n){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!wd(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Di.observe(this,t,n)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!wd(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Di.unobserve(this,t)},e.prototype.disconnect=function(){Di.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();const OC=O[typeof document<"u"&&document.createElement!==void 0?"useLayoutEffect":"useEffect"],EC=e=>{const t=K.useRef(e);return K.useEffect(()=>{t.current=e}),t},TC=typeof window<"u"&&"ResizeObserver"in window?window.ResizeObserver:wC;function DC(){}function $C(e,t){const n=MC(),r=EC(t);return OC(()=>{let i=!1;const a=e&&"current"in e?e.current:e;if(!a)return DC;function s(u,o){i||r.current(u,o)}return n.subscribe(a,s),()=>{i=!0,n.unsubscribe(a,s)}},[e,n,r]),n.observer}function PC(){let e=!1,t=[];const n=new Map,r=new TC((i,a)=>{t=t.concat(i);function s(){const u=new Set;for(let o=0;o<t.length;o++){if(u.has(t[o].target))continue;u.add(t[o].target);const c=n.get(t[o].target);c==null||c.forEach(l=>l(t[o],a))}t=[],e=!1}e||window.requestAnimationFrame(s),e=!0});return{observer:r,subscribe(i,a){var s;r.observe(i);const u=(s=n.get(i))!==null&&s!==void 0?s:[];u.push(a),n.set(i,u)},unsubscribe(i,a){var s;const u=(s=n.get(i))!==null&&s!==void 0?s:[];if(u.length===1){r.unobserve(i),n.delete(i);return}const o=u.indexOf(a);o!==-1&&u.splice(o,1),n.set(i,u)}}}let xs;const MC=()=>xs||(xs=PC());var FC={exports:{}};(function(e){(function(t,n,r){if(!t)return;for(var i={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},a={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},s={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},u={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},o,c=1;c<20;++c)i[111+c]="f"+c;for(c=0;c<=9;++c)i[c+96]=c.toString();function l(h,E,D){if(h.addEventListener){h.addEventListener(E,D,!1);return}h.attachEvent("on"+E,D)}function f(h){if(h.type=="keypress"){var E=String.fromCharCode(h.which);return h.shiftKey||(E=E.toLowerCase()),E}return i[h.which]?i[h.which]:a[h.which]?a[h.which]:String.fromCharCode(h.which).toLowerCase()}function g(h,E){return h.sort().join(",")===E.sort().join(",")}function p(h){var E=[];return h.shiftKey&&E.push("shift"),h.altKey&&E.push("alt"),h.ctrlKey&&E.push("ctrl"),h.metaKey&&E.push("meta"),E}function I(h){if(h.preventDefault){h.preventDefault();return}h.returnValue=!1}function S(h){if(h.stopPropagation){h.stopPropagation();return}h.cancelBubble=!0}function b(h){return h=="shift"||h=="ctrl"||h=="alt"||h=="meta"}function x(){if(!o){o={};for(var h in i)h>95&&h<112||i.hasOwnProperty(h)&&(o[i[h]]=h)}return o}function v(h,E,D){return D||(D=x()[h]?"keydown":"keypress"),D=="keypress"&&E.length&&(D="keydown"),D}function w(h){return h==="+"?["+"]:(h=h.replace(/\+{2}/g,"+plus"),h.split("+"))}function T(h,E){var D,$,R,W=[];for(D=w(h),R=0;R<D.length;++R)$=D[R],u[$]&&($=u[$]),E&&E!="keypress"&&s[$]&&($=s[$],W.push("shift")),b($)&&W.push($);return E=v($,W,E),{key:$,modifiers:W,action:E}}function C(h,E){return h===null||h===n?!1:h===E?!0:C(h.parentNode,E)}function _(h){var E=this;if(h=h||n,!(E instanceof _))return new _(h);E.target=h,E._callbacks={},E._directMap={};var D={},$,R=!1,W=!1,ne=!1;function ee(F){F=F||{};var q=!1,Y;for(Y in D){if(F[Y]){q=!0;continue}D[Y]=0}q||(ne=!1)}function M(F,q,Y,P,j,B){var A,ae,Fe=[],Be=Y.type;if(!E._callbacks[F])return[];for(Be=="keyup"&&b(F)&&(q=[F]),A=0;A<E._callbacks[F].length;++A)if(ae=E._callbacks[F][A],!(!P&&ae.seq&&D[ae.seq]!=ae.level)&&Be==ae.action&&(Be=="keypress"&&!Y.metaKey&&!Y.ctrlKey||g(q,ae.modifiers))){var vn=!P&&ae.combo==j,Bt=P&&ae.seq==P&&ae.level==B;(vn||Bt)&&E._callbacks[F].splice(A,1),Fe.push(ae)}return Fe}function L(F,q,Y,P){E.stopCallback(q,q.target||q.srcElement,Y,P)||F(q,Y)===!1&&(I(q),S(q))}E._handleKey=function(F,q,Y){var P=M(F,q,Y),j,B={},A=0,ae=!1;for(j=0;j<P.length;++j)P[j].seq&&(A=Math.max(A,P[j].level));for(j=0;j<P.length;++j){if(P[j].seq){if(P[j].level!=A)continue;ae=!0,B[P[j].seq]=1,L(P[j].callback,Y,P[j].combo,P[j].seq);continue}ae||L(P[j].callback,Y,P[j].combo)}var Fe=Y.type=="keypress"&&W;Y.type==ne&&!b(F)&&!Fe&&ee(B),W=ae&&Y.type=="keydown"};function k(F){typeof F.which!="number"&&(F.which=F.keyCode);var q=f(F);if(q){if(F.type=="keyup"&&R===q){R=!1;return}E.handleKey(q,p(F),F)}}function U(){clearTimeout($),$=setTimeout(ee,1e3)}function te(F,q,Y,P){D[F]=0;function j(Be){return function(){ne=Be,++D[F],U()}}function B(Be){L(Y,Be,F),P!=="keyup"&&(R=f(Be)),setTimeout(ee,10)}for(var A=0;A<q.length;++A){var ae=A+1===q.length,Fe=ae?B:j(P||T(q[A+1]).action);ue(q[A],Fe,P,F,A)}}function ue(F,q,Y,P,j){E._directMap[F+":"+Y]=q,F=F.replace(/\s+/g," ");var B=F.split(" "),A;if(B.length>1){te(F,B,q,Y);return}A=T(F,Y),E._callbacks[A.key]=E._callbacks[A.key]||[],M(A.key,A.modifiers,{type:A.action},P,F,j),E._callbacks[A.key][P?"unshift":"push"]({callback:q,modifiers:A.modifiers,action:A.action,seq:P,level:j,combo:F})}E._bindMultiple=function(F,q,Y){for(var P=0;P<F.length;++P)ue(F[P],q,Y)},l(h,"keypress",k),l(h,"keydown",k),l(h,"keyup",k)}_.prototype.bind=function(h,E,D){var $=this;return h=h instanceof Array?h:[h],$._bindMultiple.call($,h,E,D),$},_.prototype.unbind=function(h,E){var D=this;return D.bind.call(D,h,function(){},E)},_.prototype.trigger=function(h,E){var D=this;return D._directMap[h+":"+E]&&D._directMap[h+":"+E]({},h),D},_.prototype.reset=function(){var h=this;return h._callbacks={},h._directMap={},h},_.prototype.stopCallback=function(h,E){var D=this;if((" "+E.className+" ").indexOf(" mousetrap ")>-1||C(E,D.target))return!1;if("composedPath"in h&&typeof h.composedPath=="function"){var $=h.composedPath()[0];$!==h.target&&(E=$)}return E.tagName=="INPUT"||E.tagName=="SELECT"||E.tagName=="TEXTAREA"||E.isContentEditable},_.prototype.handleKey=function(){var h=this;return h._handleKey.apply(h,arguments)},_.addKeycodes=function(h){for(var E in h)h.hasOwnProperty(E)&&(i[E]=h[E]);o=null},_.init=function(){var h=_(n);for(var E in h)E.charAt(0)!=="_"&&(_[E]=function(D){return function(){return h[D].apply(h,arguments)}}(E))},_.init(),t.Mousetrap=_,e.exports&&(e.exports=_)})(typeof window<"u"?window:null,typeof window<"u"?document:null)})(FC),O.createContext(null);const NC=O.createContext(null),kC={selectable:!1,selectedIds:new Set,getSelected:()=>[],onSelectChange:()=>{},onSelectAll:()=>{},onSelectNone:()=>{},onInvertSelection:()=>{},items:[],hasSelection:!1,selectedItems:[]};function AC(){const e=O.useContext(NC);return e===null?kC:e}O.createContext(null);var Ld=(e=>(e[e.BEFORE=0]="BEFORE",e[e.AFTER=1]="AFTER",e))(Ld||{});function LC(e){const{selectedIds:t}=AC(),[n,r]=O.useState(!1),[i,a]=O.useState(!1),[s,u]=O.useState(),o=e.onSelectedChanged&&e.selecting,c=!!e.objectId&&e.onMove&&n,l=o||c;function f(v){if(!l){v.preventDefault();return}if(!n&&e.selecting)v.dataTransfer.setData("text/plain",""),v.dataTransfer.effectAllowed="copy",v.stopPropagation();else if(n&&e.objectId){if(t.size>1&&t.has(e.objectId)){const w=Array.from(t.values()).join(",");v.dataTransfer.setData("text/plain",w)}else a(!0),v.dataTransfer.setData("text/plain",e.objectId);v.dataTransfer.effectAllowed="move",v.stopPropagation()}}function g(v){const w=v.nativeEvent.offsetX<v.currentTarget.clientWidth/2;w&&s!==0?u(0):!w&&s!==1&&u(1)}function p(v){const w=v,T=!1;if(w.dataTransfer.effectAllowed==="copy"){if(!e.onSelectedChanged)return;e.selecting&&!e.selected&&e.onSelectedChanged(!0,T),w.dataTransfer.dropEffect="copy",w.preventDefault()}else w.dataTransfer.effectAllowed==="move"&&!i?(g(v),w.dataTransfer.dropEffect="move",w.preventDefault()):w.dataTransfer.dropEffect="none"}function I(v){v.currentTarget.contains(v.relatedTarget)||u(void 0)}function S(v){v.dataTransfer.effectAllowed!=="move"||i||(g(v),v.preventDefault())}function b(){u(void 0),a(!1)}function x(v){const w=v;if(w.dataTransfer.effectAllowed==="copy"||!e.onMove||!e.objectId)return;const T=w.dataTransfer.getData("text/plain").split(","),C=e.objectId,_=s===1;e.onMove(T,C,_),b()}return{inHandle:n,setInHandle:r,moveTarget:s,dragProps:{draggable:l||void 0,onDragStart:f,onDragEnter:p,onDragLeave:I,onDragOver:S,onDragEnd:b,onDrop:x}}}const jC=e=>d.jsx("a",{target:"_blank",rel:"noopener noreferrer",...e}),qC=(e,t)=>{const i=e-30,a=Math.ceil(i/t);return i/a-10},BC=(e=20)=>{const t=O.useRef(null),[n,r]=O.useState({width:0,height:0}),i=Ci(a=>{const{inlineSize:s,blockSize:u}=a.contentBoxSize[0];Math.abs(n.width-s)>e&&r({width:s,height:u})},50);return $C(t,i),[t,n]};function RC(e,t,n){return O.useMemo(()=>{if(xd.isMobile()||t>=n.length)return;if(!e)return n[t];const i=n[t];return qC(e,i)},[e,t,n])}const VC=({selected:e=!1,onSelectedChanged:t})=>{let n=!1;return d.jsx(z.Form.Control,{type:"checkbox",className:"card-check mousetrap",checked:e,onChange:()=>t(!e,n),onClick:r=>{n=r.shiftKey,r.stopPropagation()}})},GC=({setInHandle:e})=>{function t(){e(!0)}function n(){e(!1)}return d.jsx("span",{onMouseEnter:t,onMouseLeave:n,children:d.jsx(Te,{className:"card-drag-handle",icon:ce.faGripLines})})},UC=({children:e})=>d.jsx("div",{className:"card-controls",children:e}),zC=({dragSide:e})=>e===void 0?null:d.jsx("div",{className:`move-target move-target-${e===Ld.BEFORE?"before":"after"}`});function jd(e){const{url:t,linkClassName:n,onClick:r,children:i}=e;return/^https?:\/\//i.test(t)?d.jsx(jC,{href:t,className:n,onClick:r,children:i}):d.jsx(Ke.Link,{to:t,className:n,onClick:r,children:i})}const qd=he("GridCard",e=>{const{setInHandle:t,moveTarget:n,dragProps:r}=LC({selecting:e.selecting||!1,selected:e.selected||!1,onSelectedChanged:e.onSelectedChanged,objectId:e.objectId,onMove:e.onMove});function i(u){const{shiftKey:o}=u;e.onSelectedChanged&&e.selecting&&(e.onSelectedChanged(!e.selected,o),u.preventDefault(),u.stopPropagation())}function a(){if(e.interactiveHeatmap)return d.jsx("img",{loading:"lazy",src:e.interactiveHeatmap,alt:"interactive heatmap",className:"interactive-heatmap"})}function s(){if(e.resumeTime&&e.duration&&e.duration>e.resumeTime){const u=100/e.duration*e.resumeTime,o=u+"%";return d.jsx("div",{title:Math.round(u)+"%",className:"progress-bar",children:d.jsx("div",{style:{width:o},className:"progress-indicator"})})}}return d.jsxs(z.Card,{className:Ue(e.className,"grid-card"),onClick:i,...r,style:e.width&&!xd.isMobile()?{width:`${e.width}px`}:{},children:[n!==void 0&&d.jsx(zC,{dragSide:n}),d.jsxs(UC,{children:[e.onSelectedChanged&&d.jsx(VC,{selected:e.selected,onSelectedChanged:e.onSelectedChanged}),!!e.objectId&&e.onMove&&d.jsx(GC,{setInHandle:t})]}),d.jsxs("div",{className:Ue(e.thumbnailSectionClassName,"thumbnail-section"),children:[d.jsx(jd,{url:e.url,linkClassName:e.linkClassName,onClick:i,children:e.image}),e.overlays,s()]}),a(),d.jsxs("div",{className:"card-section",children:[d.jsx(jd,{url:e.url,onClick:i,children:d.jsxs("h5",{className:"card-section-title flex-aligned",children:[e.pretitleIcon,d.jsx(er,{text:e.title,lineCount:2})]})}),e.details]}),e.popovers]})}),HC=({count:e})=>{const{configuration:t}=gt();if(!((t==null?void 0:t.ui.abbreviateCounters)??!1))return d.jsx("span",{children:e});const r=$e.abbreviateCounter(e);return d.jsxs("span",{children:[d.jsx(Se.FormattedNumber,{value:r.size,maximumFractionDigits:r.digits}),r.unit]})},jt=({className:e,url:t,type:n,count:r,showZero:i=!0})=>{const a=Se.useIntl();if(!i&&r===0)return null;function s(){switch(n){case"scene":return ce.faPlayCircle;case"image":return ce.faImage;case"gallery":return ce.faImages;case"marker":return ce.faMapMarkerAlt;case"group":case"sub_group":return ce.faFilm;case"performer":return ce.faUser;case"studio":return ce.faVideo}}function u(){switch(n){case"scene":return{one:"scene",other:"scenes"};case"image":return{one:"image",other:"images"};case"gallery":return{one:"gallery",other:"galleries"};case"marker":return{one:"marker",other:"markers"};case"group":return{one:"group",other:"groups"};case"sub_group":return{one:"sub_group",other:"sub_groups"};case"performer":return{one:"performer",other:"performers"};case"studio":return{one:"studio",other:"studios"}}}function o(){const c=a.formatPlural(r),l=u(),f=a.formatMessage({id:l[c]||l.other});return`${r} ${f}`}return d.jsx(z.OverlayTrigger,{overlay:d.jsx(z.Tooltip,{id:`${n}-count-tooltip`,children:o()}),placement:"bottom",children:d.jsx(Ke.Link,{className:e,to:t,children:d.jsxs(z.Button,{className:"minimal",children:[d.jsx(Te,{icon:s()}),d.jsx(HC,{count:r})]})})})},WC=he("TagCard.Popovers",({tag:e})=>d.jsxs(d.Fragment,{children:[d.jsx("hr",{}),d.jsxs(z.ButtonGroup,{className:"card-popovers",children:[d.jsx(jt,{className:"scene-count",type:"scene",count:e.scene_count,url:me.makeTagScenesUrl(e),showZero:!1}),d.jsx(jt,{className:"image-count",type:"image",count:e.image_count,url:me.makeTagImagesUrl(e),showZero:!1}),d.jsx(jt,{className:"gallery-count",type:"gallery",count:e.gallery_count,url:me.makeTagGalleriesUrl(e),showZero:!1}),d.jsx(jt,{className:"group-count",type:"group",count:e.group_count,url:me.makeTagGroupsUrl(e),showZero:!1}),d.jsx(jt,{className:"marker-count",type:"marker",count:e.scene_marker_count,url:me.makeTagSceneMarkersUrl(e),showZero:!1}),d.jsx(jt,{className:"performer-count",type:"performer",count:e.performer_count,url:me.makeTagPerformersUrl(e),showZero:!1}),d.jsx(jt,{className:"studio-count",type:"studio",count:e.studio_count,url:me.makeTagStudiosUrl(e),showZero:!1})]})]})),YC=he("TagCard.Overlays",({tag:e})=>{const[t]=Xm();function n(){return d.jsx(Ke.Link,{to:"",onClick:i=>i.preventDefault(),children:d.jsx(z.Button,{className:Ue("minimal","mousetrap","favorite-button",e.favorite?"favorite":"not-favorite"),onClick:()=>r(!e.favorite),children:d.jsx(Te,{icon:ce.faHeart,size:"2x"})})})}function r(i){e.id&&t({variables:{input:{id:e.id,favorite:i}}})}return d.jsx(d.Fragment,{children:n()})}),QC=he("TagCard.Details",({tag:e})=>{function t(){if(e.description)return d.jsx(er,{className:"tag-description",text:e.description,lineCount:3})}function n(){if(e.parents.length===1){const i=e.parents[0];return d.jsx("div",{className:"tag-parent-tags",children:d.jsx(Se.FormattedMessage,{id:"sub_tag_of",values:{parent:d.jsx(Ke.Link,{to:`/tags/${i.id}`,children:i.name})}})})}if(e.parents.length>1)return d.jsx("div",{className:"tag-parent-tags",children:d.jsx(Se.FormattedMessage,{id:"sub_tag_of",values:{parent:d.jsxs(Ke.Link,{to:me.makeParentTagsUrl(e),children:[e.parents.length," ",d.jsx(Se.FormattedMessage,{id:"countables.tags",values:{count:e.parents.length}})]})}})})}function r(){if(e.children.length>0)return d.jsx("div",{className:"tag-sub-tags",children:d.jsx(Se.FormattedMessage,{id:"parent_of",values:{children:d.jsxs(Ke.Link,{to:me.makeChildTagsUrl(e),children:[e.children.length," ",d.jsx(Se.FormattedMessage,{id:"countables.tags",values:{count:e.children.length}})]})}})})}return d.jsxs(d.Fragment,{children:[t(),n(),r()]})}),KC=he("TagCard.Image",({tag:e})=>d.jsx("img",{loading:"lazy",className:"tag-card-image",alt:e.name,src:e.image_path??""})),JC=he("TagCard.Title",({tag:e})=>d.jsx(d.Fragment,{children:e.name??""})),XC=he("TagCard",e=>{const{tag:t,cardWidth:n,zoomIndex:r,selecting:i,selected:a,onSelectedChanged:s}=e;return d.jsx(qd,{className:`tag-card zoom-${r}`,url:`/tags/${t.id}`,width:n,title:d.jsx(JC,{...e}),linkClassName:"tag-card-header",image:d.jsx(KC,{...e}),details:d.jsx(QC,{...e}),overlays:d.jsx(YC,{...e}),popovers:d.jsx(WC,{...e}),selected:a,selecting:i,onSelectedChanged:s})}),ZC=({id:e})=>{const{data:t,loading:n,error:r}=Wm(e);if(n)return d.jsx("div",{className:"tag-popover-card-placeholder",children:d.jsx(bd,{card:!0,message:""})});if(r)return d.jsx(hd,{error:r.message});if(!(t!=null&&t.findTag))return d.jsx(hd,{error:`No tag found with id ${e}.`});const i=t.findTag;return d.jsx("div",{className:"tag-popover-card",children:d.jsx(XC,{tag:i,zoomIndex:0})})},Is=({id:e,hide:t,children:n,placement:r="top",target:i})=>{const{configuration:a}=gt(),s=(a==null?void 0:a.ui.showTagCardOnHover)??!0;return t||!s?d.jsx(d.Fragment,{children:n}):d.jsx(Nt,{target:i,placement:r,enterDelay:500,leaveDelay:100,content:d.jsx(ZC,{id:e}),children:n})};function ew(e,t,n,r){if(!e)return t;e=e.toLowerCase();const i={};function a(v,w){i[v.id]={...i[v.id],...w}}function s(v){var C,_;const w=(C=i[v.id])==null?void 0:C.aliases;if(w!==void 0)return w;if(!r)return[];const T=((_=r(v))==null?void 0:_.map(h=>h.trim().toLowerCase()))??[];return a(v,{aliases:T}),T}function u(v){var _;const w=(_=i[v.id])==null?void 0:_.aliasMatch;if(w!==void 0)return w;const C=s(v).some(h=>h===e);return a(v,{aliasMatch:C}),C}function o(v){var _;const w=(_=i[v.id])==null?void 0:_.aliasStartsWith;if(w!==void 0)return w;const C=s(v).some(h=>h.startsWith(e));return a(v,{aliasStartsWith:C}),C}function c(v){return v.trim().replace(/\s\s+/g," ").toLowerCase().split(" ")}function l(v){return c(n(v))}function f(v){return s(v).flatMap(T=>c(T))}function g(v){var _;const w=(_=i[v.id])==null?void 0:_.wordIndex;if(w!==void 0)return w;const C=l(v).indexOf(e);return a(v,{wordIndex:C}),C}function p(v){var _;const w=(_=i[v.id])==null?void 0:_.aliasWordIndex;if(w!==void 0)return w;const C=f(v).indexOf(e);return a(v,{aliasWordIndex:C}),C}function I(v){var _;const w=(_=i[v.id])==null?void 0:_.wordStartsWithIndex;if(w!==void 0)return w;const C=l(v).findIndex(h=>h.startsWith(e));return a(v,{wordStartsWithIndex:C}),C}function S(v){var _;const w=(_=i[v.id])==null?void 0:_.aliasWordStartsWithIndex;if(w!==void 0)return w;const C=f(v).findIndex(h=>h.startsWith(e));return a(v,{aliasWordStartsWithIndex:C}),C}function b(v){var _;const w=(_=i[v.id])==null?void 0:_.aliasIncludesIndex;if(w!==void 0)return w;const C=s(v).findIndex(h=>h.includes(e));return a(v,{aliasIncludesIndex:C}),C}function x(v,w){const T=n(v).trim().toLowerCase(),C=n(w).trim().toLowerCase(),_=u(v),h=u(w);if(T===e&&C!==e)return-1;if(T!==e&&C===e)return 1;if(_&&!h)return-1;if(!_&&h)return 1;if(T.startsWith(e)&&!C.startsWith(e))return-1;if(!T.startsWith(e)&&C.startsWith(e))return 1;const E=o(v),D=o(w);if(E&&!D)return-1;if(!E&&D)return 1;if(!e.includes(" ")){{const ee=g(v),M=g(w);if(ee!==-1&&M===-1)return-1;if(ee===-1&&M!==-1)return 1;if(ee!==-1&&M!==-1)return ee===M?T.localeCompare(C):ee-M;const L=p(v),k=p(w);if(L!==-1&&k===-1)return-1;if(L===-1&&k!==-1)return 1;if(L!==-1&&k!==-1)return L===k?T.localeCompare(C):L-k}{const ee=I(v),M=I(w);if(ee!==-1&&M===-1)return-1;if(ee===-1&&M!==-1)return 1;if(ee!==-1&&M!==-1)return ee===M?T.localeCompare(C):ee-M;const L=S(v),k=S(w);if(L!==-1&&k===-1)return-1;if(L===-1&&k!==-1)return 1;if(L!==-1&&k!==-1)return L===k?T.localeCompare(C):L-k}}const $=T.indexOf(e),R=C.indexOf(e);if($!==-1&&R===-1)return-1;if($===-1&&R!==-1)return 1;if($!==-1&&R!==-1)return $===R?T.localeCompare(C):$-R;const W=b(v),ne=b(w);return W!==-1&&ne===-1?-1:W===-1&&ne!==-1?1:W!==-1&&ne!==-1?W===ne?T.localeCompare(C):W-ne:T.localeCompare(C)}return t.slice().sort(x)}const tw=/^[0-9a-f]{8}-[0-9a-f]{4}-[47][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function nw(e){return tw.test(e.trim())}function rw(e,t){const n=e.makeCriterion("stash_id_endpoint");n.modifier=y.Equals,n.value={endpoint:"",stashID:t.trim()},e.criteria=[n]}function iw(e,t){return ew(e,t,n=>n.name,n=>n.aliases)}const aw=lo("TagSelect.sort",iw),sw=he("TagSelect",e=>{const[t]=Jm(),{configuration:n}=gt(),r=Se.useIntl(),i=(n==null?void 0:n.ui.maxOptionsShown)??eg,a=!(n!=null&&n.interface.disableDropdownCreate.tag),s=O.useMemo(()=>e.excludeIds??[],[e.excludeIds]);function u(S){return!s.includes(S.id.toString())}async function o(S){const b=new ie(J.Tags);if(b.currentPage=1,b.itemsPerPage=i,b.sortBy="name",b.sortDirection=Ge.Asc,nw(S)){rw(b,S);const T=(await eu(b)).data.findTags.tags.filter(u);if(T.length>0)return T.map(gd);b.criteria=[]}b.searchTerm=S;const v=(await eu(b)).data.findTags.tags.filter(u);return aw(S,v).map(gd)}const c=S=>{var C;let b=S;const{object:x}=S.data,{name:v}=x,{inputValue:w}=S.selectProps;let T="";return v.toLowerCase().includes(w.toLowerCase())||(T=(C=x.aliases)==null?void 0:C.find(_=>_.toLowerCase().includes(w.toLowerCase()))),b={...S,children:d.jsx(Is,{id:x.id,placement:e.hoverPlacement??"right",children:d.jsxs("span",{className:"react-select-image-option",children:[d.jsx("span",{children:v}),T&&d.jsxs("span",{className:"alias",children:[" (",T,")"]})]})})},d.jsx(ji.components.Option,{...b})},l=S=>{let b=S;const{object:x}=S.data;return b={...S,children:d.jsx(Is,{id:x.id,placement:e.hoverPlacementLabel??"top",children:d.jsx("span",{children:x.name})})},d.jsx(ji.components.MultiValueLabel,{...b})},f=S=>{let b=S;const{object:x}=S.data;return b={...S,children:d.jsx(d.Fragment,{children:x.name})},d.jsx(ji.components.SingleValue,{...b})},g=async S=>{const b=await t({variables:{input:{name:S}}});return{value:b.data.tagCreate.id,item:b.data.tagCreate,message:"Created tag"}},p=(S,b)=>({id:S,name:b,aliases:[],stash_ids:[]}),I=(S,b)=>!(!S||b.some(x=>{var v;return x.name.toLowerCase()===S.toLowerCase()||((v=x.aliases)==null?void 0:v.some(w=>w.toLowerCase()===S.toLowerCase()))}));return d.jsx(__,{...e,className:Ue("tag-select",{"tag-select-active":e.active},e.className),loadOptions:o,getNamedObject:p,isValidNewOption:I,components:{Option:c,MultiValueLabel:l,SingleValue:f},isMulti:e.isMulti??!1,creatable:e.creatable??a,onCreate:g,placeholder:e.noSelectionString??r.formatMessage({id:"actions.select_entity"},{entityType:r.formatMessage({id:e.isMulti?"tags":"tag"})}),closeMenuOnSelect:!e.isMulti})}),ow=he("TagIDSelect",e=>{const{ids:t,onSelect:n}=e,[r,i]=O.useState([]),a=C_(t);function s(u){i(u),n==null||n(u)}return O.useEffect(()=>{async function u(l){const f=await Ym(l),{tags:g}=f.data.findTags;return g}if(!a)return;if(!t||(t==null?void 0:t.length)===0){i([]);return}if(r.filter(l=>t.includes(l.id.toString())).length===t.length)return;(async()=>{const f=[...await u(t)];f.sort((g,p)=>{const I=g.sort_name||g.name,S=p.sort_name||p.name;return I&&S?I.localeCompare(S):0}),i(f)})()},[t,a,r]),d.jsx(sw,{...e,values:r,onSelect:s})}),uw=(e,t)=>{const{data:n,loading:r,error:i}=Zm(e),a=O.useRef(void 0);r||(a.current=n);const s=r?a.current:n,u=i&&t?[]:s==null?void 0:s.directory.directories,o=s==null?void 0:s.directory.parent;return{directories:u,parent:o,loading:r,error:i}},cw=he("FolderSelect",({currentDirectory:e,onChangeDirectory:t,defaultDirectories:n=[],appendButton:r,collapsible:i=!1,quotePath:a=!1,hideError:s=!1})=>{const u=Se.useIntl(),[o,c]=O.useState(!1),[l,f]=O.useState(e),g=a?$e.stripQuotes(l):l,{directories:p,parent:I,error:S,loading:b}=uw(g,s),x=(e?p:n)??n,v=Ci(f,250);function w(h){const E=a&&h.includes(" ")?$e.addQuotes(h):h;t(E),f(E)}function T(h){t(h),v(h)}function C(){n!=null&&n.includes(e)?w(""):I&&w(I)}const _=e&&I&&d.jsx("li",{className:"folder-list-parent folder-list-item",children:d.jsx(z.Button,{variant:"link",onClick:()=>C(),disabled:b,children:d.jsx("span",{children:d.jsx(Se.FormattedMessage,{id:"setup.folder.up_dir"})})})});return d.jsxs(d.Fragment,{children:[d.jsxs(z.InputGroup,{children:[d.jsx(z.Form.Control,{className:"btn-secondary",placeholder:u.formatMessage({id:"setup.folder.file_path"}),onChange:h=>{T(h.currentTarget.value)},value:e,spellCheck:!1}),r&&d.jsx(z.InputGroup.Append,{children:r}),i&&d.jsx(z.InputGroup.Append,{children:d.jsx(z.Button,{variant:"secondary",onClick:()=>c(!o),children:d.jsx(Te,{icon:ce.faEllipsis})})}),(b||S)&&d.jsx(z.InputGroup.Append,{className:"align-self-center",children:b?d.jsx(bd,{inline:!0,small:!0,message:""}):!s&&d.jsx(Te,{icon:ce.faTimes,color:"red",className:"ml-3"})})]}),!s&&S!==void 0&&d.jsxs("h5",{className:"mt-4 text-break",children:["Error: ",S.message]}),d.jsx(z.Collapse,{in:!i||o,children:d.jsxs("ul",{className:"folder-list",children:[_,x.map(h=>d.jsx("li",{className:"folder-list-item",children:d.jsx(z.Button,{variant:"link",onClick:()=>w(h),disabled:b,children:d.jsx("span",{children:h})})},h))]})})]})});function lw(e){var t,n;return e.title?e.title:(t=e.primary_tag)!=null&&t.name?(n=e.primary_tag)==null?void 0:n.name:""}const dw=({link:e,sortName:t,className:n,children:r})=>d.jsx(z.Badge,{"data-name":n,"data-sort-name":t,className:Ue("tag-item tag-link",n),variant:"secondary",children:d.jsx(Ke.Link,{to:e,children:r})}),$i=({link:e,className:t,children:n})=>d.jsx(z.Badge,{className:Ue("tag-item tag-link",t),variant:"secondary",children:d.jsx(Ke.Link,{to:e,children:n})}),fw=({performer:e,linkType:t="scene",className:n})=>{const r=O.useMemo(()=>{switch(t){case"gallery":return me.makePerformerGalleriesUrl(e);case"image":return me.makePerformerImagesUrl(e);case"scene_marker":return me.makePerformerSceneMarkersUrl(e);default:return me.makePerformerScenesUrl(e)}},[e,t]),i=e.name||"";return d.jsxs($i,{link:r,className:n,children:[d.jsx("span",{children:i}),e.disambiguation&&d.jsx("span",{className:"performer-disambiguation",children:` (${e.disambiguation})`})]})},pw=({group:e,description:t,linkType:n="scene",className:r})=>{const i=O.useMemo(()=>{switch(n){case"scene":return me.makeGroupScenesUrl(e);case"sub_group":return me.makeSubGroupsUrl(e);case"details":return me.makeGroupUrl(e.id??"")}},[e,n]),a=e.name||"";return d.jsxs($i,{link:i,className:r,children:[a," ",t&&d.jsxs("span",{className:"group-description",children:["(",t,")"]})]})},mw=({marker:e,linkType:t="scene",className:n})=>{const r=O.useMemo(()=>{switch(t){case"scene":return me.makeSceneMarkerUrl(e)}},[e,t]),i=`${lw(e)} - ${$e.secondsToTimestamp(e.seconds||0)}`;return d.jsx($i,{link:r,className:n,children:i})},gw=({gallery:e,linkType:t="details",className:n})=>{const r=O.useMemo(()=>{switch(t){case"details":return`/galleries/${e.id}`}},[e,t]),i=yd(e);return d.jsx($i,{link:r,className:n,children:i})},hw=he("TagLink",({tag:e,linkType:t="scene",className:n,hoverPlacement:r,showHierarchyIcon:i=!1,hierarchyTooltipID:a})=>{const s=O.useMemo(()=>{switch(t){case"scene":return me.makeTagScenesUrl(e);case"performer":return me.makeTagPerformersUrl(e);case"studio":return me.makeTagStudiosUrl(e);case"gallery":return me.makeTagGalleriesUrl(e);case"image":return me.makeTagImagesUrl(e);case"group":return me.makeTagGroupsUrl(e);case"scene_marker":return me.makeTagSceneMarkersUrl(e);case"details":return me.makeTagUrl(e.id??"")}},[e,t]),u=e.name||"",o=O.useMemo(()=>a?d.jsx(z.Tooltip,{id:"tag-hierarchy-tooltip",children:d.jsx(Se.FormattedMessage,{id:a})}):d.jsx(d.Fragment,{}),[a]);return d.jsx(dw,{sortName:e.sort_name||u,link:s,className:n,children:d.jsxs(Is,{id:e.id??"",placement:r,children:[u,i&&d.jsx(z.OverlayTrigger,{placement:"top",overlay:o,children:d.jsxs("span",{className:"icon-wrapper",children:[d.jsx("span",{className:"vertical-line",children:"|"}),d.jsx(Te,{icon:ce.faFolderTree,className:"tag-icon"})]})})]})})});function vw(e){const t=e.slice();return t.sort((n,r)=>{if(n.gender===r.gender)return(n.name??"").localeCompare(r.name??"");const i=[_e.Female,_e.TransgenderFemale,_e.Male,_e.TransgenderMale,_e.Intersex,_e.NonBinary],a=n.gender?i.indexOf(n.gender):i.length,s=r.gender?i.indexOf(r.gender):i.length;return a-s}),t}const bw=({performers:e,linkType:t})=>{const r=vw(e).map(i=>d.jsxs("div",{className:"performer-tag-container row",children:[d.jsx(Ke.Link,{to:`/performers/${i.id}`,className:"performer-tag col m-auto zoom-2",children:d.jsx("img",{className:"image-thumbnail",alt:i.name??"",src:i.image_path??""})}),d.jsx(fw,{performer:i,className:"d-block",linkType:t},i.id)]},i.id));return d.jsx(Nt,{className:"performer-count",placement:"bottom",content:r,children:d.jsxs(z.Button,{className:"minimal",children:[d.jsx(Te,{icon:ce.faUser}),d.jsx("span",{children:e.length})]})})},yw=({rating:e})=>{const{configuration:t}=gt(),n=(t==null?void 0:t.ui.ratingSystemOptions)??Pu,r=n.type===Du.Stars&&n.starPrecision===$u.Full,i=Ar(e??void 0,n);return e?d.jsxs("div",{className:r?`rating-banner rating-${i}`:`rating-banner rating-100-${Math.trunc(e/5)}`,"data-rating100":e,"data-rating-system":n.type,style:{"--rating-100":e},children:[d.jsx(Se.FormattedMessage,{id:"rating"}),": ",i]}):null};var Bd={exports:{}},rr;typeof window<"u"?rr=window:typeof lr<"u"?rr=lr:typeof self<"u"?rr=self:rr={};var Sw=rr;const xw=af(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));var Rd=typeof lr<"u"?lr:typeof window<"u"?window:{},Iw=xw,ir;typeof document<"u"?ir=document:(ir=Rd["__GLOBAL_DOCUMENT_CACHE@4"],ir||(ir=Rd["__GLOBAL_DOCUMENT_CACHE@4"]=Iw));var _w=ir,Vd=_w,_s=Object.create||function(){function e(){}return function(t){if(arguments.length!==1)throw new Error("Object.create shim only accepts one parameter.");return e.prototype=t,new e}}();function Ye(e,t){this.name="ParsingError",this.code=e.code,this.message=t||e.message}Ye.prototype=_s(Error.prototype),Ye.prototype.constructor=Ye,Ye.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}};function Cs(e){function t(r,i,a,s){return(r|0)*3600+(i|0)*60+(a|0)+(s|0)/1e3}var n=e.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);return n?n[3]?t(n[1],n[2],n[3].replace(":",""),n[4]):n[1]>59?t(n[1],n[2],0,n[4]):t(0,n[1],n[2],n[4]):null}function ar(){this.values=_s(null)}ar.prototype={set:function(e,t){!this.get(e)&&t!==""&&(this.values[e]=t)},get:function(e,t,n){return n?this.has(e)?this.values[e]:t[n]:this.has(e)?this.values[e]:t},has:function(e){return e in this.values},alt:function(e,t,n){for(var r=0;r<n.length;++r)if(t===n[r]){this.set(e,t);break}},integer:function(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))},percent:function(e,t){return t.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&(t=parseFloat(t),t>=0&&t<=100)?(this.set(e,t),!0):!1}};function sr(e,t,n,r){var i=r?e.split(r):[e];for(var a in i)if(typeof i[a]=="string"){var s=i[a].split(n);if(s.length===2){var u=s[0].trim(),o=s[1].trim();t(u,o)}}}function Cw(e,t,n){var r=e;function i(){var u=Cs(e);if(u===null)throw new Ye(Ye.Errors.BadTimeStamp,"Malformed timestamp: "+r);return e=e.replace(/^[^\sa-zA-Z-]+/,""),u}function a(u,o){var c=new ar;sr(u,function(l,f){switch(l){case"region":for(var g=n.length-1;g>=0;g--)if(n[g].id===f){c.set(l,n[g].region);break}break;case"vertical":c.alt(l,f,["rl","lr"]);break;case"line":var p=f.split(","),I=p[0];c.integer(l,I),c.percent(l,I)&&c.set("snapToLines",!1),c.alt(l,I,["auto"]),p.length===2&&c.alt("lineAlign",p[1],["start","center","end"]);break;case"position":p=f.split(","),c.percent(l,p[0]),p.length===2&&c.alt("positionAlign",p[1],["start","center","end"]);break;case"size":c.percent(l,f);break;case"align":c.alt(l,f,["start","center","end","left","right"]);break}},/:/,/\s/),o.region=c.get("region",null),o.vertical=c.get("vertical","");try{o.line=c.get("line","auto")}catch{}o.lineAlign=c.get("lineAlign","start"),o.snapToLines=c.get("snapToLines",!0),o.size=c.get("size",100);try{o.align=c.get("align","center")}catch{o.align=c.get("align","middle")}try{o.position=c.get("position","auto")}catch{o.position=c.get("position",{start:0,left:0,center:50,middle:50,end:100,right:100},o.align)}o.positionAlign=c.get("positionAlign",{start:"start",left:"start",center:"center",middle:"center",end:"end",right:"end"},o.align)}function s(){e=e.replace(/^\s+/,"")}if(s(),t.startTime=i(),s(),e.substr(0,3)!=="-->")throw new Ye(Ye.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '-->'): "+r);e=e.substr(3),s(),t.endTime=i(),s(),a(e,t)}var ws=Vd.createElement&&Vd.createElement("textarea"),ww={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},Gd={white:"rgba(255,255,255,1)",lime:"rgba(0,255,0,1)",cyan:"rgba(0,255,255,1)",red:"rgba(255,0,0,1)",yellow:"rgba(255,255,0,1)",magenta:"rgba(255,0,255,1)",blue:"rgba(0,0,255,1)",black:"rgba(0,0,0,1)"},Ow={v:"title",lang:"lang"},Ud={rt:"ruby"};function zd(e,t){function n(){if(!t)return null;function I(b){return t=t.substr(b.length),b}var S=t.match(/^([^<]*)(<[^>]*>?)?/);return I(S[1]?S[1]:S[2])}function r(I){return ws.innerHTML=I,I=ws.textContent,ws.textContent="",I}function i(I,S){return!Ud[S.localName]||Ud[S.localName]===I.localName}function a(I,S){var b=ww[I];if(!b)return null;var x=e.document.createElement(b),v=Ow[I];return v&&S&&(x[v]=S.trim()),x}for(var s=e.document.createElement("div"),u=s,o,c=[];(o=n())!==null;){if(o[0]==="<"){if(o[1]==="/"){c.length&&c[c.length-1]===o.substr(2).replace(">","")&&(c.pop(),u=u.parentNode);continue}var l=Cs(o.substr(1,o.length-2)),f;if(l){f=e.document.createProcessingInstruction("timestamp",l),u.appendChild(f);continue}var g=o.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!g||(f=a(g[1],g[3]),!f)||!i(u,f))continue;if(g[2]){var p=g[2].split(".");p.forEach(function(I){var S=/^bg_/.test(I),b=S?I.slice(3):I;if(Gd.hasOwnProperty(b)){var x=S?"background-color":"color",v=Gd[b];f.style[x]=v}}),f.className=p.join(" ")}c.push(g[1]),u.appendChild(f),u=f;continue}u.appendChild(e.document.createTextNode(r(o)))}return s}var Hd=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];function Ew(e){for(var t=0;t<Hd.length;t++){var n=Hd[t];if(e>=n[0]&&e<=n[1])return!0}return!1}function Tw(e){var t=[],n="",r;if(!e||!e.childNodes)return"ltr";function i(u,o){for(var c=o.childNodes.length-1;c>=0;c--)u.push(o.childNodes[c])}function a(u){if(!u||!u.length)return null;var o=u.pop(),c=o.textContent||o.innerText;if(c){var l=c.match(/^.*(\n|\r)/);return l?(u.length=0,l[0]):c}if(o.tagName==="ruby")return a(u);if(o.childNodes)return i(u,o),a(u)}for(i(t,e);n=a(t);)for(var s=0;s<n.length;s++)if(r=n.charCodeAt(s),Ew(r))return"rtl";return"ltr"}function Dw(e){if(typeof e.line=="number"&&(e.snapToLines||e.line>=0&&e.line<=100))return e.line;if(!e.track||!e.track.textTrackList||!e.track.textTrackList.mediaElement)return-1;for(var t=e.track,n=t.textTrackList,r=0,i=0;i<n.length&&n[i]!==t;i++)n[i].mode==="showing"&&r++;return++r*-1}function Pi(){}Pi.prototype.applyStyles=function(e,t){t=t||this.div;for(var n in e)e.hasOwnProperty(n)&&(t.style[n]=e[n])},Pi.prototype.formatStyle=function(e,t){return e===0?0:e+t};function Mi(e,t,n){Pi.call(this),this.cue=t,this.cueDiv=zd(e,t.text);var r={color:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(0, 0, 0, 0.8)",position:"relative",left:0,right:0,top:0,bottom:0,display:"inline",writingMode:t.vertical===""?"horizontal-tb":t.vertical==="lr"?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext"};this.applyStyles(r,this.cueDiv),this.div=e.document.createElement("div"),r={direction:Tw(this.cueDiv),writingMode:t.vertical===""?"horizontal-tb":t.vertical==="lr"?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext",textAlign:t.align==="middle"?"center":t.align,font:n.font,whiteSpace:"pre-line",position:"absolute"},this.applyStyles(r),this.div.appendChild(this.cueDiv);var i=0;switch(t.positionAlign){case"start":case"line-left":i=t.position;break;case"center":i=t.position-t.size/2;break;case"end":case"line-right":i=t.position-t.size;break}t.vertical===""?this.applyStyles({left:this.formatStyle(i,"%"),width:this.formatStyle(t.size,"%")}):this.applyStyles({top:this.formatStyle(i,"%"),height:this.formatStyle(t.size,"%")}),this.move=function(a){this.applyStyles({top:this.formatStyle(a.top,"px"),bottom:this.formatStyle(a.bottom,"px"),left:this.formatStyle(a.left,"px"),right:this.formatStyle(a.right,"px"),height:this.formatStyle(a.height,"px"),width:this.formatStyle(a.width,"px")})}}Mi.prototype=_s(Pi.prototype),Mi.prototype.constructor=Mi;function qe(e){var t,n,r,i;if(e.div){n=e.div.offsetHeight,r=e.div.offsetWidth,i=e.div.offsetTop;var a=(a=e.div.childNodes)&&(a=a[0])&&a.getClientRects&&a.getClientRects();e=e.div.getBoundingClientRect(),t=a?Math.max(a[0]&&a[0].height||0,e.height/a.length):0}this.left=e.left,this.right=e.right,this.top=e.top||i,this.height=e.height||n,this.bottom=e.bottom||i+(e.height||n),this.width=e.width||r,this.lineHeight=t!==void 0?t:e.lineHeight}qe.prototype.move=function(e,t){switch(t=t!==void 0?t:this.lineHeight,e){case"+x":this.left+=t,this.right+=t;break;case"-x":this.left-=t,this.right-=t;break;case"+y":this.top+=t,this.bottom+=t;break;case"-y":this.top-=t,this.bottom-=t;break}},qe.prototype.overlaps=function(e){return this.left<e.right&&this.right>e.left&&this.top<e.bottom&&this.bottom>e.top},qe.prototype.overlapsAny=function(e){for(var t=0;t<e.length;t++)if(this.overlaps(e[t]))return!0;return!1},qe.prototype.within=function(e){return this.top>=e.top&&this.bottom<=e.bottom&&this.left>=e.left&&this.right<=e.right},qe.prototype.overlapsOppositeAxis=function(e,t){switch(t){case"+x":return this.left<e.left;case"-x":return this.right>e.right;case"+y":return this.top<e.top;case"-y":return this.bottom>e.bottom}},qe.prototype.intersectPercentage=function(e){var t=Math.max(0,Math.min(this.right,e.right)-Math.max(this.left,e.left)),n=Math.max(0,Math.min(this.bottom,e.bottom)-Math.max(this.top,e.top)),r=t*n;return r/(this.height*this.width)},qe.prototype.toCSSCompatValues=function(e){return{top:this.top-e.top,bottom:e.bottom-this.bottom,left:this.left-e.left,right:e.right-this.right,height:this.height,width:this.width}},qe.getSimpleBoxPosition=function(e){var t=e.div?e.div.offsetHeight:e.tagName?e.offsetHeight:0,n=e.div?e.div.offsetWidth:e.tagName?e.offsetWidth:0,r=e.div?e.div.offsetTop:e.tagName?e.offsetTop:0;e=e.div?e.div.getBoundingClientRect():e.tagName?e.getBoundingClientRect():e;var i={left:e.left,right:e.right,top:e.top||r,height:e.height||t,bottom:e.bottom||r+(e.height||t),width:e.width||n};return i};function $w(e,t,n,r){function i(b,x){for(var v,w=new qe(b),T=1,C=0;C<x.length;C++){for(;b.overlapsOppositeAxis(n,x[C])||b.within(n)&&b.overlapsAny(r);)b.move(x[C]);if(b.within(n))return b;var _=b.intersectPercentage(n);T>_&&(v=new qe(b),T=_),b=new qe(w)}return v||w}var a=new qe(t),s=t.cue,u=Dw(s),o=[];if(s.snapToLines){var c;switch(s.vertical){case"":o=["+y","-y"],c="height";break;case"rl":o=["+x","-x"],c="width";break;case"lr":o=["-x","+x"],c="width";break}var l=a.lineHeight,f=l*Math.round(u),g=n[c]+l,p=o[0];Math.abs(f)>g&&(f=f<0?-1:1,f*=Math.ceil(g/l)*l),u<0&&(f+=s.vertical===""?n.height:n.width,o=o.reverse()),a.move(p,f)}else{var I=a.lineHeight/n.height*100;switch(s.lineAlign){case"center":u-=I/2;break;case"end":u-=I;break}switch(s.vertical){case"":t.applyStyles({top:t.formatStyle(u,"%")});break;case"rl":t.applyStyles({left:t.formatStyle(u,"%")});break;case"lr":t.applyStyles({right:t.formatStyle(u,"%")});break}o=["+y","-x","+x","-y"],a=new qe(t)}var S=i(a,o);t.move(S.toCSSCompatValues(n))}function gn(){}gn.StringDecoder=function(){return{decode:function(e){if(!e)return"";if(typeof e!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}},gn.convertCueToDOMTree=function(e,t){return!e||!t?null:zd(e,t)};var Pw=.05,Mw="sans-serif",Fw="1.5%";gn.processCues=function(e,t,n){if(!e||!t||!n)return null;for(;n.firstChild;)n.removeChild(n.firstChild);var r=e.document.createElement("div");r.style.position="absolute",r.style.left="0",r.style.right="0",r.style.top="0",r.style.bottom="0",r.style.margin=Fw,n.appendChild(r);function i(l){for(var f=0;f<l.length;f++)if(l[f].hasBeenReset||!l[f].displayState)return!0;return!1}if(!i(t)){for(var a=0;a<t.length;a++)r.appendChild(t[a].displayState);return}var s=[],u=qe.getSimpleBoxPosition(r),o=Math.round(u.height*Pw*100)/100,c={font:o+"px "+Mw};(function(){for(var l,f,g=0;g<t.length;g++)f=t[g],l=new Mi(e,f,c),r.appendChild(l.div),$w(e,l,u,s),f.displayState=l.div,s.push(qe.getSimpleBoxPosition(l))})()},gn.Parser=function(e,t,n){n||(n=t,t={}),t||(t={}),this.window=e,this.vttjs=t,this.state="INITIAL",this.buffer="",this.decoder=n||new TextDecoder("utf8"),this.regionList=[]},gn.Parser.prototype={reportOrThrowError:function(e){if(e instanceof Ye)this.onparsingerror&&this.onparsingerror(e);else throw e},parse:function(e){var t=this;e&&(t.buffer+=t.decoder.decode(e,{stream:!0}));function n(){for(var l=t.buffer,f=0;f<l.length&&l[f]!=="\r"&&l[f]!==`
`;)++f;var g=l.substr(0,f);return l[f]==="\r"&&++f,l[f]===`
`&&++f,t.buffer=l.substr(f),g}function r(l){var f=new ar;if(sr(l,function(p,I){switch(p){case"id":f.set(p,I);break;case"width":f.percent(p,I);break;case"lines":f.integer(p,I);break;case"regionanchor":case"viewportanchor":var S=I.split(",");if(S.length!==2)break;var b=new ar;if(b.percent("x",S[0]),b.percent("y",S[1]),!b.has("x")||!b.has("y"))break;f.set(p+"X",b.get("x")),f.set(p+"Y",b.get("y"));break;case"scroll":f.alt(p,I,["up"]);break}},/=/,/\s/),f.has("id")){var g=new(t.vttjs.VTTRegion||t.window.VTTRegion);g.width=f.get("width",100),g.lines=f.get("lines",3),g.regionAnchorX=f.get("regionanchorX",0),g.regionAnchorY=f.get("regionanchorY",100),g.viewportAnchorX=f.get("viewportanchorX",0),g.viewportAnchorY=f.get("viewportanchorY",100),g.scroll=f.get("scroll",""),t.onregion&&t.onregion(g),t.regionList.push({id:f.get("id"),region:g})}}function i(l){var f=new ar;sr(l,function(g,p){switch(g){case"MPEGT":f.integer(g+"S",p);break;case"LOCA":f.set(g+"L",Cs(p));break}},/[^\d]:/,/,/),t.ontimestampmap&&t.ontimestampmap({MPEGTS:f.get("MPEGTS"),LOCAL:f.get("LOCAL")})}function a(l){l.match(/X-TIMESTAMP-MAP/)?sr(l,function(f,g){switch(f){case"X-TIMESTAMP-MAP":i(g);break}},/=/):sr(l,function(f,g){switch(f){case"Region":r(g);break}},/:/)}try{var s;if(t.state==="INITIAL"){if(!/\r\n|\n/.test(t.buffer))return this;s=n();var u=s.match(/^WEBVTT([ \t].*)?$/);if(!u||!u[0])throw new Ye(Ye.Errors.BadSignature);t.state="HEADER"}for(var o=!1;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this;switch(o?o=!1:s=n(),t.state){case"HEADER":/:/.test(s)?a(s):s||(t.state="ID");continue;case"NOTE":s||(t.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(s)){t.state="NOTE";break}if(!s)continue;t.cue=new(t.vttjs.VTTCue||t.window.VTTCue)(0,0,"");try{t.cue.align="center"}catch{t.cue.align="middle"}if(t.state="CUE",s.indexOf("-->")===-1){t.cue.id=s;continue}case"CUE":try{Cw(s,t.cue,t.regionList)}catch(l){t.reportOrThrowError(l),t.cue=null,t.state="BADCUE";continue}t.state="CUETEXT";continue;case"CUETEXT":var c=s.indexOf("-->")!==-1;if(!s||c&&(o=!0)){t.oncue&&t.oncue(t.cue),t.cue=null,t.state="ID";continue}t.cue.text&&(t.cue.text+=`
`),t.cue.text+=s.replace(/\u2028/g,`
`).replace(/u2029/g,`
`);continue;case"BADCUE":s||(t.state="ID");continue}}}catch(l){t.reportOrThrowError(l),t.state==="CUETEXT"&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state=t.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this},flush:function(){var e=this;try{if(e.buffer+=e.decoder.decode(),(e.cue||e.state==="HEADER")&&(e.buffer+=`

`,e.parse()),e.state==="INITIAL")throw new Ye(Ye.Errors.BadSignature)}catch(t){e.reportOrThrowError(t)}return e.onflush&&e.onflush(),this}};var Nw=gn,kw="auto",Aw={"":1,lr:1,rl:1},Lw={start:1,center:1,end:1,left:1,right:1,auto:1,"line-left":1,"line-right":1};function jw(e){if(typeof e!="string")return!1;var t=Aw[e.toLowerCase()];return t?e.toLowerCase():!1}function Os(e){if(typeof e!="string")return!1;var t=Lw[e.toLowerCase()];return t?e.toLowerCase():!1}function Wd(e,t,n){this.hasBeenReset=!1;var r="",i=!1,a=e,s=t,u=n,o=null,c="",l=!0,f="auto",g="start",p="auto",I="auto",S=100,b="center";Object.defineProperties(this,{id:{enumerable:!0,get:function(){return r},set:function(x){r=""+x}},pauseOnExit:{enumerable:!0,get:function(){return i},set:function(x){i=!!x}},startTime:{enumerable:!0,get:function(){return a},set:function(x){if(typeof x!="number")throw new TypeError("Start time must be set to a number.");a=x,this.hasBeenReset=!0}},endTime:{enumerable:!0,get:function(){return s},set:function(x){if(typeof x!="number")throw new TypeError("End time must be set to a number.");s=x,this.hasBeenReset=!0}},text:{enumerable:!0,get:function(){return u},set:function(x){u=""+x,this.hasBeenReset=!0}},region:{enumerable:!0,get:function(){return o},set:function(x){o=x,this.hasBeenReset=!0}},vertical:{enumerable:!0,get:function(){return c},set:function(x){var v=jw(x);if(v===!1)throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.");c=v,this.hasBeenReset=!0}},snapToLines:{enumerable:!0,get:function(){return l},set:function(x){l=!!x,this.hasBeenReset=!0}},line:{enumerable:!0,get:function(){return f},set:function(x){if(typeof x!="number"&&x!==kw)throw new SyntaxError("Line: an invalid number or illegal string was specified.");f=x,this.hasBeenReset=!0}},lineAlign:{enumerable:!0,get:function(){return g},set:function(x){var v=Os(x);v?(g=v,this.hasBeenReset=!0):console.warn("lineAlign: an invalid or illegal string was specified.")}},position:{enumerable:!0,get:function(){return p},set:function(x){if(x<0||x>100)throw new Error("Position must be between 0 and 100.");p=x,this.hasBeenReset=!0}},positionAlign:{enumerable:!0,get:function(){return I},set:function(x){var v=Os(x);v?(I=v,this.hasBeenReset=!0):console.warn("positionAlign: an invalid or illegal string was specified.")}},size:{enumerable:!0,get:function(){return S},set:function(x){if(x<0||x>100)throw new Error("Size must be between 0 and 100.");S=x,this.hasBeenReset=!0}},align:{enumerable:!0,get:function(){return b},set:function(x){var v=Os(x);if(!v)throw new SyntaxError("align: an invalid or illegal alignment string was specified.");b=v,this.hasBeenReset=!0}}}),this.displayState=void 0}Wd.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)};var qw=Wd,Bw={"":!0,up:!0};function Rw(e){if(typeof e!="string")return!1;var t=Bw[e.toLowerCase()];return t?e.toLowerCase():!1}function or(e){return typeof e=="number"&&e>=0&&e<=100}function Vw(){var e=100,t=3,n=0,r=100,i=0,a=100,s="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return e},set:function(u){if(!or(u))throw new Error("Width must be between 0 and 100.");e=u}},lines:{enumerable:!0,get:function(){return t},set:function(u){if(typeof u!="number")throw new TypeError("Lines must be set to a number.");t=u}},regionAnchorY:{enumerable:!0,get:function(){return r},set:function(u){if(!or(u))throw new Error("RegionAnchorX must be between 0 and 100.");r=u}},regionAnchorX:{enumerable:!0,get:function(){return n},set:function(u){if(!or(u))throw new Error("RegionAnchorY must be between 0 and 100.");n=u}},viewportAnchorY:{enumerable:!0,get:function(){return a},set:function(u){if(!or(u))throw new Error("ViewportAnchorY must be between 0 and 100.");a=u}},viewportAnchorX:{enumerable:!0,get:function(){return i},set:function(u){if(!or(u))throw new Error("ViewportAnchorX must be between 0 and 100.");i=u}},scroll:{enumerable:!0,get:function(){return s},set:function(u){var o=Rw(u);o===!1?console.warn("Scroll: an invalid or illegal string was specified."):s=o}}})}var Gw=Vw,pt=Sw,qt=Bd.exports={WebVTT:Nw,VTTCue:qw,VTTRegion:Gw};pt.vttjs=qt,pt.WebVTT=qt.WebVTT;var Uw=qt.VTTCue,zw=qt.VTTRegion,Hw=pt.VTTCue,Ww=pt.VTTRegion;qt.shim=function(){pt.VTTCue=Uw,pt.VTTRegion=zw},qt.restore=function(){pt.VTTCue=Hw,pt.VTTRegion=Ww},pt.VTTCue||qt.shim();var Yd=Bd.exports;function Yw(e,t){const n=[],r=new Yd.WebVTT.Parser(window,Yd.WebVTT.StringDecoder());return r.oncue=i=>{const a=i.text.match(/^([^#]*)#xywh=(\d+),(\d+),(\d+),(\d+)$/i);a&&n.push({url:new URL(a[1],e).href,start:i.startTime,end:i.endTime,x:Number(a[2]),y:Number(a[3]),w:Number(a[4]),h:Number(a[5])})},r.parse(t),r.flush(),n}function Qw(e){const[t,n]=O.useState();return O.useEffect(()=>{if(!e){n(void 0);return}fetch(e).then(r=>{if(!r.ok){n(null);return}r.text().then(i=>{n(Yw(e,i))})})},[e]),t}function Kw(e,t,n){const r=O.useRef(e);return r.current=e,O.useCallback(S_(function(){return r.current.apply(this,arguments)},t,n),[t,n==null?void 0:n.leading,n==null?void 0:n.trailing,n==null?void 0:n.maxWait])}const Es=window.TouchEvent!==void 0,Jw=({totalSprites:e,activeIndex:t,setActiveIndex:n,onClick:r,disabled:i})=>{function a(l){const{width:f}=l.currentTarget.getBoundingClientRect();let g=0;l.nativeEvent instanceof MouseEvent?g=l.nativeEvent.offsetX:Es&&l.nativeEvent instanceof TouchEvent&&(g=l.nativeEvent.touches[0].clientX-l.currentTarget.getBoundingClientRect().x);const p=Math.round(g/f*(e-1));return p<0?0:p>=e?e-1:p}function s(l){const f=l.currentTarget;l instanceof MouseEvent&&f!==l.target||Es&&l instanceof TouchEvent&&document.elementFromPoint(l.touches[0].clientX,l.touches[0].clientY)||n(a(l))}function u(){n(void 0)}function o(l){if(!r)return;if(i){l.preventDefault();return}const f=l.currentTarget;if(l instanceof MouseEvent&&f!==l.target||Es&&l instanceof TouchEvent&&document.elementFromPoint(l.touches[0].clientX,l.touches[0].clientY))return;l.preventDefault(),l.stopPropagation();const g=a(l);g!==void 0&&r(g)}const c=O.useMemo(()=>t===void 0||!e?{}:{width:`${(t+1)/e*100}%`},[t,e]);return d.jsxs("div",{className:Ue("hover-scrubber",{"hover-scrubber-inactive":!e}),children:[d.jsx("div",{className:"hover-scrubber-area",onMouseMove:s,onTouchMove:s,onMouseLeave:u,onTouchEnd:u,onTouchCancel:u,onClick:o}),d.jsx("div",{className:"hover-scrubber-indicator",children:t!==void 0&&d.jsx("div",{className:"hover-scrubber-indicator-marker",style:c})})]})};function Xw(e,t){const n=t.width/e.w,r=t.height/e.h;return e.w>e.h?Math.max(n,r):Math.min(n,r)}const Zw=81,eO=({vttPath:e,onClick:t,disabled:n})=>{const r=O.useRef(null),[i,a]=O.useState({}),[s,u]=O.useState(),o=Kw(u,50),[c,l]=O.useState(!1),f=Qw(c?e:void 0),g=O.useMemo(()=>{if(!f)return{x:0,y:0};const b=Math.max(...f.map(v=>v.x+v.w)),x=Math.max(...f.map(v=>v.y+v.h));return{x:b,y:x}},[f]),p=O.useMemo(()=>{if(!(!f||s===void 0))return f[s]},[s,f]);O.useEffect(()=>{s!==void 0&&l(!0)},[s]),O.useLayoutEffect(()=>{const b=r.current;if(!p||!b)return a({});const x=b.getBoundingClientRect(),v=Xw(p,x);a({backgroundPosition:`${-p.x*v}px ${-p.y*v}px`,backgroundImage:`url(${p.url})`,backgroundSize:`${g.x*v}px ${g.y*v}px`,width:`${p.w*v}px`,height:`${p.h*v}px`})},[p,g]);const I=O.useMemo(()=>p?$e.secondsToTimestamp(p.start):void 0,[p]);function S(b){if(!t||!f)return;const x=f[b];t(x.start)}return f===null||!e?null:d.jsxs("div",{className:"preview-scrubber",children:[p&&d.jsxs("div",{className:"scene-card-preview-image",ref:r,children:[d.jsx("div",{className:"scrubber-image",style:i}),I!==void 0&&d.jsx("div",{className:"scrubber-timestamp",children:I})]}),d.jsx(Jw,{totalSprites:(f==null?void 0:f.length)??Zw,activeIndex:s,setActiveIndex:b=>o(b),onClick:S,disabled:n})]})},tO=({studio:e,disabled:t})=>{const{configuration:n}=gt(),r=n==null?void 0:n.interface.showStudioAsText,i=O.useMemo(()=>!!(r||!(e!=null&&e.image_path)||new URL(e.image_path).searchParams.get("default")==="true"),[r,e==null?void 0:e.image_path]);function a(s){t&&s.preventDefault()}return e?d.jsx("div",{className:"studio-overlay",children:d.jsx(Ke.Link,{to:`/studios/${e.id}`,onClick:a,children:i?e.name:d.jsx("img",{className:"image-thumbnail",loading:"lazy",alt:e.name,src:e.image_path??""})})}):null},nO=({group:e,linkType:t,description:n})=>d.jsxs("div",{className:"group-tag-container",children:[d.jsx(Ke.Link,{to:`/groups/${e.id}`,className:"group-tag col m-auto zoom-2",children:d.jsx("img",{className:"image-thumbnail",alt:e.name??"",src:e.front_image_path??""})}),d.jsx(pw,{group:e,description:n,linkType:t,className:"d-block"})]}),rO=({size:e})=>{const{size:t,unit:n}=$e.fileSize(e);return d.jsxs(d.Fragment,{children:[d.jsx(Se.FormattedNumber,{value:t,maximumFractionDigits:$e.fileSizeFractionalDigits(n)}),` ${$e.formatFileSizeUnit(n)}`]})},iO=he("SweatDrops",()=>d.jsx("span",{children:d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",style:{transform:"rotate(360deg)"},preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 36 36",children:[d.jsx("path",{fill:"currentColor",d:"M22.855.758L7.875 7.024l12.537 9.733c2.633 2.224 6.377 2.937 9.77 1.518c4.826-2.018 7.096-7.576 5.072-12.413C33.232 1.024 27.68-1.261 22.855.758zm-9.962 17.924L2.05 10.284L.137 23.529a7.993 7.993 0 0 0 2.958 7.803a8.001 8.001 0 0 0 9.798-12.65zm15.339 7.015l-8.156-4.69l-.033 9.223c-.088 2 .904 3.98 2.75 5.041a5.462 5.462 0 0 0 7.479-2.051c1.499-2.644.589-6.013-2.04-7.523z"}),d.jsx("rect",{x:"0",y:"0",width:"36",height:"36",fill:"rgba(0, 0, 0, 0)"})]})})),aO=({value:e,icon:t,onIncrement:n,onValueClicked:r,title:i,countTitle:a,dataAction:s})=>d.jsxs(z.ButtonGroup,{className:Ue("count-button",{"increment-only":!r}),"data-action":s,children:[d.jsx(z.Button,{className:"minimal count-icon",variant:"secondary",onClick:()=>n==null?void 0:n(),title:i,children:t}),d.jsx(z.Button,{className:"minimal count-value",variant:"secondary",onClick:()=>{var u;return(u=r??n)==null?void 0:u()},title:r?a:void 0,children:d.jsx("span",{children:e})})]}),sO=e=>{const t=Se.useIntl(),{configuration:n}=gt(),{sfwContentMode:r}=n.interface,i=r?d.jsx(Te,{icon:ce.faThumbsUp}):d.jsx(iO,{}),a=r?"o_count_sfw":"o_count";return d.jsx(aO,{...e,icon:i,title:t.formatMessage({id:a}),countTitle:t.formatMessage({id:"actions.view_history"}),dataAction:"o-counter"})},oO=O.memo(({image:e,video:t,isPortrait:n,soundActive:r,vttPath:i,onScrubberClick:a,disabled:s,volume:u})=>{const o=O.useRef(null);return O.useEffect(()=>{const c=new IntersectionObserver(l=>{l.forEach(f=>{var g,p,I;f.intersectionRatio>0?(p=(g=o.current)==null?void 0:g.play())==null||p.catch(()=>{}):(I=o.current)==null||I.pause()})});return o.current&&c.observe(o.current),()=>c.disconnect()},[]),O.useEffect(()=>{var c;(c=o==null?void 0:o.current)!=null&&c.volume&&(o.current.volume=r?(u??0)/100:0)},[u,r]),d.jsxs("div",{className:Ue("scene-card-preview",{portrait:n}),children:[d.jsx("img",{className:"scene-card-preview-image",loading:"lazy",src:e,alt:""}),d.jsx("video",{disableRemotePlayback:!0,playsInline:!0,muted:!r,className:"scene-card-preview-video",loop:!0,preload:"none",ref:o,src:t}),d.jsx(eO,{vttPath:i,onClick:a,disabled:s})]})}),uO=({sceneNumber:e})=>e?d.jsxs(d.Fragment,{children:[d.jsx("hr",{}),e!==void 0&&d.jsxs("span",{className:"scene-group-scene-number",children:[d.jsx(Se.FormattedMessage,{id:"scene"})," #",e]})]}):null,cO=O.memo(he("SceneCard.Popovers",e=>{const t=O.useMemo(()=>e.scene.files.length>0?e.scene.files[0]:void 0,[e.scene]),n=O.useMemo(()=>{if(!e.fromGroupId)return;const g=e.scene.groups.find(p=>p.group.id===e.fromGroupId);return(g==null?void 0:g.scene_index)??void 0},[e.fromGroupId,e.scene.groups]);function r(){if(e.scene.tags.length<=0)return;const g=e.scene.tags.map(p=>d.jsx(hw,{tag:p},p.id));return d.jsx(Nt,{className:"tag-count",placement:"bottom",content:g,children:d.jsxs(z.Button,{className:"minimal",children:[d.jsx(Te,{icon:ce.faTag}),d.jsx("span",{children:e.scene.tags.length})]})})}function i(){if(!(e.scene.performers.length<=0))return d.jsx(bw,{performers:e.scene.performers,linkType:"scene"})}function a(){if(e.scene.groups.length<=0)return;const g=e.scene.groups.map(p=>d.jsx(nO,{group:p.group},p.group.id));return d.jsx(Nt,{placement:"bottom",content:g,className:"group-count tag-tooltip",children:d.jsxs(z.Button,{className:"minimal",children:[d.jsx(Te,{icon:ce.faFilm}),d.jsx("span",{children:e.scene.groups.length})]})})}function s(){if(e.scene.scene_markers.length<=0)return;const g=e.scene.scene_markers.map(p=>{const I={...p,scene:{id:e.scene.id}};return d.jsx(mw,{marker:I},p.id)});return d.jsx(Nt,{className:"marker-count",placement:"bottom",content:g,children:d.jsxs(z.Button,{className:"minimal",children:[d.jsx(Te,{icon:ce.faMapMarkerAlt}),d.jsx("span",{children:e.scene.scene_markers.length})]})})}function u(){if(e.scene.o_counter)return d.jsx(sO,{value:e.scene.o_counter})}function o(){if(e.scene.galleries.length<=0)return;const g=e.scene.galleries.map(p=>d.jsx(gw,{gallery:p},p.id));return d.jsx(Nt,{className:"gallery-count",placement:"bottom",content:g,children:d.jsxs(z.Button,{className:"minimal",children:[d.jsx(Te,{icon:ce.faImages}),d.jsx("span",{children:e.scene.galleries.length})]})})}function c(){if(e.scene.organized)return d.jsx(z.OverlayTrigger,{overlay:d.jsx(z.Tooltip,{id:"organised-tooltip",children:"Organized"}),placement:"bottom",children:d.jsx("div",{className:"organized",children:d.jsx(z.Button,{className:"minimal",children:d.jsx(Te,{icon:ce.faBox})})})})}function l(){const g=t?t.fingerprints.find(p=>p.type==="phash"):void 0;if(g)return d.jsx("div",{className:"other-copies extra-scene-info",children:d.jsx(z.Button,{href:me.makeScenesPHashMatchUrl(g.value),className:"minimal",children:d.jsx(Te,{icon:ce.faCopy})})})}function f(){var g;if(!e.compact&&(e.scene.tags.length>0||e.scene.performers.length>0||e.scene.groups.length>0||e.scene.scene_markers.length>0||(g=e.scene)!=null&&g.o_counter||e.scene.galleries.length>0||e.scene.organized||n!==void 0))return d.jsxs(d.Fragment,{children:[d.jsx(uO,{sceneNumber:n}),d.jsx("hr",{}),d.jsxs(z.ButtonGroup,{className:"card-popovers",children:[r(),i(),a(),s(),u(),o(),c(),l()]})]})}return d.jsx(d.Fragment,{children:f()})})),lO=O.memo(he("SceneCard.Details",e=>d.jsxs("div",{className:"scene-card__details",children:[d.jsx("span",{className:"scene-card__date",children:e.scene.date}),d.jsx("span",{className:"file-path extra-scene-info",children:E_(e.scene)}),d.jsx(er,{className:"scene-card__description",text:e.scene.details,lineCount:3})]}))),dO=O.memo(he("SceneCard.Overlays",e=>O.useMemo(()=>d.jsx(tO,{studio:e.scene.studio,disabled:e.selecting}),[e.scene.studio,e.selecting]))),fO=O.memo(he("SceneCard.SceneSpecs",({scene:e})=>{var n;const t=(n=e.files)==null?void 0:n[0];return t?d.jsxs("div",{className:"scene-specs-overlay",children:[d.jsx("span",{className:"overlay-filesize extra-scene-info",children:d.jsx(rO,{size:t.size})}),t.width&&t.height?d.jsx("span",{className:"overlay-resolution",children:$e.resolution(t.width,t.height)}):"",t.duration>0?d.jsx("span",{className:"overlay-duration",children:$e.secondsToTimestamp(t.duration)}):""]}):null})),pO=O.memo(he("SceneCard.Image",e=>{var o;const t=Ke.useHistory(),{configuration:n}=gt(),r=(n==null?void 0:n.interface.continuePlaylistDefault)??!1,i=O.useMemo(()=>e.scene.files.length>0?e.scene.files[0]:void 0,[e.scene]);function a(){return d.jsx("div",{className:"scene-interactive-speed-overlay",children:e.scene.interactive_speed??""})}const s=O.useCallback(c=>{if(e.selecting)return;const l=e.queue?e.queue.makeLink(e.scene.id,{sceneIndex:e.index,continue:r,start:c}):`/scenes/${e.scene.id}?t=${c}`;t.push(l)},[e.selecting,e.queue,e.scene.id,e.index,r,t]);function u(){const c=i!=null&&i.width?i.width:0;return(i!=null&&i.height?i.height:0)>c}return d.jsxs(d.Fragment,{children:[d.jsx(oO,{image:e.scene.paths.screenshot??void 0,video:e.scene.paths.preview??void 0,isPortrait:u(),soundActive:((o=n==null?void 0:n.interface)==null?void 0:o.soundOnPreview)??!1,volume:(n==null?void 0:n.ui.previewVolume)??tg,vttPath:e.scene.paths.vtt??void 0,onScrubberClick:s,disabled:e.selecting}),d.jsx(yw,{rating:e.scene.rating100}),d.jsx(fO,{scene:e.scene}),a()]})})),mO=O.memo(he("SceneCard",e=>{const{configuration:t}=gt(),n=O.useMemo(()=>e.scene.files.length>0?e.scene.files[0]:void 0,[e.scene]);function r(){return!e.compact&&e.zoomIndex!==void 0?`zoom-${e.zoomIndex}`:""}function i(){return e.scene.files.length?"":"fileless"}const a=(t==null?void 0:t.interface.continuePlaylistDefault)??!1,s=e.queue?e.queue.makeLink(e.scene.id,{sceneIndex:e.index,continue:a}):`/scenes/${e.scene.id}`;return d.jsx(qd,{className:`scene-card ${r()} ${i()}`,url:s,title:Sd(e.scene),width:e.width,linkClassName:"scene-card-link",thumbnailSectionClassName:"video-section",resumeTime:e.scene.resume_time??void 0,duration:(n==null?void 0:n.duration)??void 0,interactiveHeatmap:e.scene.interactive_speed?e.scene.paths.interactive_heatmap??void 0:void 0,image:d.jsx(pO,{...e}),overlays:d.jsx(dO,{...e}),details:d.jsx(lO,{...e}),popovers:d.jsx(cO,{...e}),selected:e.selected,selecting:e.selecting,onSelectedChanged:e.onSelectedChanged})}));class hn{constructor(){X(this,"query");X(this,"entries");X(this,"originalQueryPage");X(this,"originalQueryPageSize")}static fromListFilterModel(t){const n=new hn,r=t.clone();return r.itemsPerPage=40,n.originalQueryPage=t.currentPage,n.originalQueryPageSize=t.itemsPerPage,n.query=r,n}static fromSceneIDList(t){const n=new hn;return n.entries=t.map(r=>({id:Number(r)})),n}static fromSceneIDTimeList(t){const n=new hn;return n.entries=t.map(r=>({id:Number(r.id),start:r.start})),n}makeQueryParameters(t,n){const r=[];if(this.query){const i=this.query.getEncodedParams();i.sortby&&r.push(`qsort=${i.sortby}`),i.sortdir&&r.push(`qsortd=${i.sortdir}`),i.q&&r.push(`qfq=${i.q}`);for(const s of i.c??[])r.push(`qfc=${s}`);let a=i.p??"1";if(n!==void 0)a=String(n);else if(t!==void 0&&this.originalQueryPage!==void 0&&this.originalQueryPageSize!==void 0){const s=t+(this.originalQueryPage-1)*this.originalQueryPageSize,u=Math.floor(s/this.query.itemsPerPage)+1;a=String(u)}r.push(`qfp=${a}`)}else if(this.entries&&this.entries.length>0){const i=this.entries.map(o=>o.id),a=Array.from(new Set(i)),s=a.length!==i.length,u=this.entries.some(o=>o.start!==void 0);if(s){for(const o of a)r.push(`qs=${o}`);for(const o of this.entries){const c=a.indexOf(o.id);r.push(`qe=${c}${o.start!==void 0?":"+o.start:""}`)}}else{for(const o of this.entries)r.push(`qs=${o.id}`);if(u)for(const o of this.entries)r.push(`qt=${o.start!==void 0?o.start:""}`)}t!==void 0&&r.push(`qi=${t}`)}return r.join("&")}static fromQueryParameters(t){const n=new hn;if(t.has("qfp")){const r={sortby:t.get("qsort"),sortdir:t.get("qsortd"),q:t.get("qfq"),p:t.get("qfp"),c:t.getAll("qfc")},i=ie.decodeParams(r),a=new ie(J.Scenes);a.configureFromDecodedParams(i),n.query=a}else if(t.has("qs")){const r=t.getAll("qs").map(i=>Number(i));if(t.has("qe"))n.entries=t.getAll("qe").map(i=>{const a=i.indexOf(":"),s=a===-1?i:i.slice(0,a),u=r[Number(s)];if(u===void 0)return;if(a===-1)return{id:u};const o=Number(i.slice(a+1));return Number.isNaN(o)?{id:u}:{id:u,start:o}}).filter(i=>i!==void 0);else{const i=t.has("qt")?t.getAll("qt"):void 0;n.entries=r.map((a,s)=>{const u=i==null?void 0:i[s];if(!u)return{id:a};const o=Number(u);return Number.isNaN(o)?{id:a}:{id:a,start:o}})}}return n}makeLink(t,n){const r=[this.makeQueryParameters(n.sceneIndex,n.newPage)];return n.autoPlay&&r.push("autoplay=true"),n.continue!==void 0&&r.push("continue="+n.continue),n.start!==void 0&&r.push("t="+n.start),`/scenes/${t}${r.length?"?"+r.join("&"):""}`}}const{PluginApi:st}=window,{React:Fi}=st,{useState:Ae,useEffect:Ni}=Fi,gO=st.libraries.Bootstrap,{Nav:Ts,Tab:hO,Button:St,Form:Ie,Alert:ki,ProgressBar:vO,Spinner:Ai}=gO,{NavLink:bO}=st.libraries.ReactRouterDOM,{FontAwesomeIcon:yO}=st.libraries.ReactFontAwesome,SO=st.libraries.FontAwesomeSolid,Qd="subtitleMarkers",Kd="/subtitle-markers",xO=1e3;function Ds(e,t){return fetch("/graphql",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,variables:t})}).then(n=>n.json()).then(n=>{if(n.errors&&n.errors.length)throw new Error(n.errors.map(r=>r.message).join("; "));return n.data})}function IO(e,t){return Ds(`mutation SubtitleMarkersRunTask($plugin_id: ID!, $description: String, $args_map: Map) {
      runPluginTask(plugin_id: $plugin_id, description: $description, args_map: $args_map)
    }`,{plugin_id:Qd,description:t,args_map:e}).then(n=>n.runPluginTask)}function _O(e){return Ds("query SubtitleMarkersFindJob($id: ID!) { findJob(input: { id: $id }) { status progress error } }",{id:e}).then(t=>t.findJob)}function CO(e){return Ds(`mutation SubtitleMarkersSearch($plugin_id: ID!, $args: Map) {
      runPluginOperation(plugin_id: $plugin_id, args: $args)
    }`,{plugin_id:Qd,args:e}).then(t=>t.runPluginOperation)}const $s=["READY","RUNNING","STOPPING"],wO={READY:"Starting…",RUNNING:"Searching…",STOPPING:"Stopping…",FINISHED:"Done.",CANCELLED:"Cancelled.",FAILED:"Failed."};function OO({libraryPaths:e}){const[t,n]=Ae(""),[r,i]=Ae(""),[a,s]=Ae(!1),[u,o]=Ae(""),[c,l]=Ae(""),[f,g]=Ae(!1),[p,I]=Ae(null),[S,b]=Ae(null),[x,v]=Ae(!1),[w,T]=Ae(null),[C,_]=Ae(null),[h,E]=Ae(null),[D,$]=Ae(null),[R,{width:W}]=BC(),ne=RC(W,1,[280,340,480,640]),ee=f||S!==null&&$s.includes(S.status),M=ee||x,L=!!t.trim()&&!!r.trim()&&(!a||!!u)&&!M;Ni(()=>{if(!p)return;let P=!1,j;const B=()=>{_O(p).then(A=>{P||(b(A),A&&$s.includes(A.status)&&(j=setTimeout(B,xO)))}).catch(A=>{P||b({status:"FAILED",progress:null,error:String(A&&A.message?A.message:A)})})};return B(),()=>{P=!0,clearTimeout(j)}},[p]);function k(){const P=r.trim();g(!0),b(null),IO({path:t.trim(),search:P,tagId:u,title:c.trim()},`Searching subtitles for "${P}"`).then(j=>{g(!1),I(j)}).catch(j=>{g(!1),b({status:"FAILED",progress:null,error:String(j&&j.message?j.message:j)})})}function U(){v(!0),_(null),T(null),E(null),$(null),CO({mode:"search",path:t.trim(),search:r.trim()}).then(P=>{v(!1),T(P.results),te(P.results)}).catch(P=>{v(!1),_(String(P&&P.message?P.message:P))})}function te(P){const j=Array.from(new Set(P.map(B=>Number(B.sceneId)))).filter(B=>!Number.isNaN(B));if(j.length===0){E(new Map);return}zm(j).then(B=>{var ae,Fe;const A=new Map;(((Fe=(ae=B.data)==null?void 0:ae.findScenes)==null?void 0:Fe.scenes)??[]).forEach(Be=>A.set(Be.id,Be)),E(A)}).catch(B=>{$(String(B&&B.message?B.message:B)),E(new Map)})}function ue(P,j){const B=P.target;!B.closest(".scene-card-link")&&!B.closest(".card-section-title")||(P.preventDefault(),P.stopPropagation(),window.open(`/scenes/${j.sceneId}?t=${j.seconds}`,"_blank"))}function F(){a?k():U()}function q(){if(!S)return null;const P=Math.round((S.progress||0)*100);return d.jsxs("div",{className:"subtitle-markers-status mt-3",children:[$s.includes(S.status)&&d.jsx(vO,{now:P,label:`${P}%`,animated:!0}),d.jsxs("p",{className:S.status==="FAILED"?"text-danger":"text-muted",children:[wO[S.status],S.status==="FINISHED"&&" Marker preview generation has been queued for anything created. See Settings → Logs for how many markers were created."]}),S.error?d.jsx(ki,{variant:"danger",children:S.error}):null]})}function Y(){return x?d.jsxs("div",{className:"subtitle-markers-results mt-3 text-muted",children:[d.jsx(Ai,{animation:"border",size:"sm",className:"mr-2"}),"Searching…"]}):C?d.jsx(ki,{variant:"danger",className:"mt-3",children:C}):w===null?null:w.length===0?d.jsx("p",{className:"subtitle-markers-results mt-3 text-muted",children:"No matches found."}):d.jsxs("div",{className:"subtitle-markers-results mt-3",children:[d.jsxs("p",{className:"text-muted",children:[w.length," match",w.length===1?"":"es",":"]}),d.jsx(St,{size:"sm",variant:"secondary",className:"mb-2",onClick:()=>TO(w),children:"Play All in Queue"}),D?d.jsxs(ki,{variant:"warning",className:"mt-2",children:["Couldn't load scene previews (",D,") - showing plain links instead."]}):null,h?d.jsx("div",{className:"row justify-content-center subtitle-markers-result-cards",ref:R,style:{gap:"12px"},children:w.map((P,j)=>{const B=h.get(P.sceneId);return B?d.jsxs("div",{className:"subtitle-markers-result-card",style:ne?{width:ne}:void 0,onClickCapture:A=>ue(A,P),children:[d.jsx(mO,{scene:B,width:ne}),d.jsx(er,{className:"text-muted subtitle-markers-result-text",text:`@ ${$e.secondsToTimestamp(P.seconds)} — ${P.text}`,lineCount:2})]},j):d.jsxs("div",{className:"subtitle-markers-result subtitle-markers-result-fallback",style:ne?{width:ne}:void 0,children:[d.jsxs("a",{href:`/scenes/${P.sceneId}?t=${P.seconds}`,target:"_blank",rel:"noreferrer",children:[P.sceneTitle||`Scene ${P.sceneId}`," @ ",$e.secondsToTimestamp(P.seconds)]}),d.jsx(er,{className:"text-muted subtitle-markers-result-text",text:P.text,lineCount:2})]},j)})}):d.jsxs("div",{className:"text-muted mt-2",children:[d.jsx(Ai,{animation:"border",size:"sm",className:"mr-2"}),"Loading scene previews…"]})]})}return d.jsxs("div",{className:"subtitle-markers-page container-fluid",children:[d.jsx("h3",{children:"Subtitle Markers"}),d.jsx("p",{className:"text-muted",children:"Searches every .srt file under a folder (and its subfolders) for a phrase - matched to the video file next to each subtitle, the same way Stash itself associates captions. Either jump straight to each match's timestamp, or (optionally) create a scene marker for each one, with preview generation queued automatically afterwards."}),d.jsxs(Ie.Group,{className:"subtitle-markers-folder",children:[d.jsx(Ie.Label,{children:"Folder"}),d.jsx(cw,{currentDirectory:t,onChangeDirectory:n,defaultDirectories:e}),d.jsx(Ie.Text,{className:"text-muted",children:"Searched recursively, including subfolders."})]}),d.jsxs(Ie.Group,{children:[d.jsx(Ie.Label,{children:"Search text"}),d.jsx(Ie.Control,{type:"text",value:r,placeholder:"Text to find in subtitle lines",onChange:P=>i(P.target.value),disabled:M}),d.jsx(Ie.Text,{className:"text-muted",children:"Case-insensitive, matched as plain text."})]}),d.jsxs(Ie.Group,{children:[d.jsx(Ie.Check,{type:"checkbox",id:"subtitle-markers-create-markers",label:"Also create scene markers",checked:a,disabled:M,onChange:P=>s(P.target.checked)}),d.jsx(Ie.Text,{className:"text-muted",children:"Off by default: just search, and link to each match's timestamp. Turn this on to also create a scene marker for each match, using the tag and title below."})]}),a&&d.jsxs(d.Fragment,{children:[d.jsxs(Ie.Group,{children:[d.jsx(Ie.Label,{children:"Tag"}),d.jsx(ow,{ids:u?[u]:[],isDisabled:M,onSelect:P=>{var j;return o(((j=P[0])==null?void 0:j.id)||"")}})]}),d.jsxs(Ie.Group,{children:[d.jsx(Ie.Label,{children:"Marker title"}),d.jsx(Ie.Control,{type:"text",value:c,placeholder:r||"Marker title",onChange:P=>l(P.target.value),disabled:M}),d.jsx(Ie.Text,{className:"text-muted",children:"Defaults to the search text if left blank."})]})]}),d.jsx(St,{onClick:F,disabled:!L,children:ee?"Running…":x?"Searching…":a?"Search & Create Markers":"Search"}),a?q():Y()]})}function EO(){const{data:e}=Bf();if(!(e!=null&&e.configuration))return d.jsx(Ai,{animation:"border",className:"mt-3"});const t=e.configuration.general.stashes.map(n=>n.path);return d.jsx(ip,{children:d.jsx(Hf,{configuration:e.configuration,children:d.jsx(OO,{libraryPaths:t})})})}st.register.route(Kd,EO),st.patch.before("MainNavBar.MenuItems",e=>{try{const t=d.jsx(Ts.Link,{as:"div",className:"col-4 col-sm-3 col-md-2 col-lg-auto",children:d.jsx(bO,{exact:!0,to:Kd,activeClassName:"active",children:d.jsxs(St,{className:"minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center",children:[d.jsx(yO,{icon:SO.faClosedCaptioning,className:"fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0"}),d.jsx("span",{children:"Marker"})]})})},"subtitle-markers");return[{...e,children:[...Fi.Children.toArray(e.children),t]}]}catch(t){return console.error("[SubtitleMarkers] Failed to patch nav bar:",t),[e]}});function Jd(e){if(!e||e.length===0)return;const t=hn.fromSceneIDTimeList(e.map(n=>({id:n.sceneId,start:n.seconds})));window.open(t.makeLink(e[0].sceneId,{sceneIndex:0,start:e[0].seconds,autoPlay:!0,continue:!0}),"_blank")}function TO(e){Jd(e)}const DO=1e3;async function $O(e,t,n){var r,i;try{const s=(n?n(t.clone()):t).clone();s.currentPage=1,s.itemsPerPage=DO;const c=(((i=(r=(await Hm(s)).data)==null?void 0:r.findSceneMarkers)==null?void 0:i.scene_markers)??[]).map(l=>({sceneId:l.scene.id,seconds:l.seconds}));Jd(c)}catch(a){console.error("[SubtitleMarkers] Failed to start the filtered-markers queue:",a)}}st.patch.before("FilteredSceneMarkerList",e=>{try{const t=e.filterHook,n={text:"Play All (Filtered)",onClick:(r,i)=>$O(r,i,t),isDisplayed:r=>{var i,a;return(((a=(i=r==null?void 0:r.data)==null?void 0:i.findSceneMarkers)==null?void 0:a.count)??0)>0}};return[{...e,extraOperations:[...e.extraOperations||[],n]}]}catch(t){return console.error('[SubtitleMarkers] Failed to add the "Play All (Filtered)" operation:',t),[e]}});const Xd="subtitle-markers-subtitles-tab";function Zd(e){var t;return!!((t=e==null?void 0:e.paths)!=null&&t.caption&&(e!=null&&e.captions)&&e.captions.length>0)}function PO(e){return e.replace(/<[^>]*>/g,"").replace(/\s+/g," ").trim()}function MO(e,t){const n=e.player,r=n?n.textTracks():null;if(!r)return null;let i=null;for(let a=0;a<r.length;a++){const s=r[a];if(!(s.kind!=="captions"&&s.kind!=="subtitles")&&(i||(i=s),t&&s.language===t))return s}return i}function ef(e,t,n){return`subtitleMarkersOffset:${e}:${t}:${n}`}function FO({scene:e,setTimestamp:t}){const n=e.captions||[],[r,i]=Ae(0),a=n[r],[s,u]=Ae(null),[o,c]=Ae(0),[l,f]=Ae(null);Ni(()=>{if(a)try{const p=window.localStorage.getItem(ef(e.id,a.language_code,a.caption_type));c(p&&Number(p)||0)}catch{c(0)}},[e.id,a==null?void 0:a.language_code,a==null?void 0:a.caption_type]),Ni(()=>{if(!a)return;u(null),f(null);let p=!1,I=0;function S(){if(p)return;const b=document.querySelector(".video-js"),x=b?MO(b,a.language_code):null;if(!x){if(I++,I>40){f("Couldn't find the subtitle track in the player - try reloading the page.");return}setTimeout(S,250);return}x.mode==="disabled"&&(x.mode="hidden");function v(){if(p)return;const w=x.cues;if(!w||w.length===0){if(I++,I>40){f("The subtitle track loaded but has no cues.");return}setTimeout(S,250);return}const T=[];for(let C=0;C<w.length;C++){const _=w[C];T.push({cue:_,originalStart:_.startTime,originalEnd:_.endTime})}u(T)}x.cues&&x.cues.length>0?v():(x.addEventListener("loadeddata",v,{once:!0}),setTimeout(v,300))}return S(),()=>{p=!0}},[e.id,a==null?void 0:a.language_code,a==null?void 0:a.caption_type]),Ni(()=>{if(s)for(const p of s)p.cue.startTime=Math.max(0,p.originalStart+o),p.cue.endTime=Math.max(0,p.originalEnd+o)},[s,o]);function g(p){const I=Math.round(p*10)/10;if(c(I),a)try{window.localStorage.setItem(ef(e.id,a.language_code,a.caption_type),String(I))}catch{}}return a?d.jsxs("div",{className:"subtitle-markers-subtitles-panel",children:[n.length>1&&d.jsxs(Ie.Group,{children:[d.jsx(Ie.Label,{children:"Language"}),d.jsx(Ie.Control,{as:"select",value:r,onChange:p=>i(Number(p.target.value)),children:n.map((p,I)=>d.jsxs("option",{value:I,children:[p.language_code," (",p.caption_type,")"]},I))})]}),d.jsxs("div",{className:"subtitle-markers-offset-controls d-flex align-items-center mb-2",children:[d.jsx("span",{className:"mr-2",children:"Sync offset:"}),d.jsx(St,{size:"sm",variant:"secondary",className:"mr-1",onClick:()=>g(o-1),children:"-1s"}),d.jsx(St,{size:"sm",variant:"secondary",className:"mr-1",onClick:()=>g(o-.1),children:"-0.1s"}),d.jsx(Ie.Control,{type:"number",step:"0.1",value:o,onChange:p=>g(Number(p.target.value)||0),style:{width:"90px"},className:"mx-1 d-inline-block"}),d.jsx(St,{size:"sm",variant:"secondary",className:"mx-1",onClick:()=>g(o+.1),children:"+0.1s"}),d.jsx(St,{size:"sm",variant:"secondary",className:"mr-2",onClick:()=>g(o+1),children:"+1s"}),o!==0&&d.jsx(St,{size:"sm",variant:"outline-secondary",onClick:()=>g(0),children:"Reset"})]}),d.jsx(Ie.Text,{className:"text-muted mb-3 d-block",children:"Shifts the subtitles actually shown during playback (positive = later, negative = earlier), not just this list - remembered for this scene."}),l?d.jsx(ki,{variant:"danger",children:l}):null,!l&&!s&&d.jsxs("div",{className:"text-muted",children:[d.jsx(Ai,{animation:"border",size:"sm",className:"mr-2"}),"Loading subtitles…"]}),s&&s.length===0&&d.jsx("p",{className:"text-muted",children:"No cues found in this subtitle track."}),s&&s.length>0&&d.jsx("ul",{className:"list-unstyled subtitle-markers-subtitles-list",children:s.map((p,I)=>{const S=Math.max(0,p.originalStart+o);return d.jsxs("li",{className:"subtitle-markers-subtitles-cue",onClick:()=>t(S,!0),style:{cursor:"pointer"},children:[d.jsx("span",{className:"text-muted mr-2",children:$e.secondsToTimestamp(S)}),PO(p.cue.text)]},I)})})]}):null}st.patch.before("ScenePage.Tabs",e=>{try{if(!Zd(e.scene))return[e];const t=d.jsx(Ts.Item,{children:d.jsx(Ts.Link,{eventKey:Xd,children:"Subtitles"})},"subtitle-markers-subtitles-tab-nav");return[{...e,children:[...Fi.Children.toArray(e.children),t]}]}catch(t){return console.error("[SubtitleMarkers] Failed to add the Subtitles tab:",t),[e]}}),st.patch.before("ScenePage.TabContent",e=>{try{if(!Zd(e.scene))return[e];const t=d.jsx(hO.Pane,{eventKey:Xd,children:d.jsx(FO,{scene:e.scene,setTimestamp:e.setTimestamp})},"subtitle-markers-subtitles-tab-pane");return[{...e,children:[...Fi.Children.toArray(e.children),t]}]}catch(t){return console.error("[SubtitleMarkers] Failed to add the Subtitles tab content:",t),[e]}})})(PluginApi.React,PluginApi.libraries.Apollo,PluginApi.libraries.FontAwesomeSolid,PluginApi.libraries.Bootstrap,PluginApi.libraries.Intl,PluginApi.libraries.ReactFontAwesome,PluginApi.libraries.ReactSelect,PluginApi.ReactDOM,PluginApi.libraries.ReactRouterDOM);
