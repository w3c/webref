% Specifications that define WebIDL content (W3C perspective)
% Reffy
% July 15, 2018

233 specifications were crawled in this report.


## Specifications that could not be rendered

Reffy could not fetch or render these specifications for some reason. This may happen when a network error occurred or when a specification uses an old version of ReSpec.

- [CSS Cascading and Inheritance Level 4](http://www.w3.org/TR/css-cascade-4/): `Error: Crawl exited without sending result Error: Crawl exited without sending result
    at ChildProcess.child.once.code (/home/dom/github.com/reffy/src/cli/crawl-specs.js:332:33)
    at Object.onceWrapper (events.js:317:30)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)`
- [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/): `Error: Crawl exited without sending result Error: Crawl exited without sending result
    at ChildProcess.child.once.code (/home/dom/github.com/reffy/src/cli/crawl-specs.js:332:33)
    at Object.onceWrapper (events.js:317:30)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)`
- [HTML 5.2](https://www.w3.org/TR/html52/): `Error: Crawl took too long Error: Crawl took too long
    at Timeout._ [as _onTimeout] (/home/dom/github.com/reffy/src/cli/crawl-specs.js:338:29)
    at ontimeout (timers.js:498:11)
    at tryOnTimeout (timers.js:323:5)
    at Timer.listOnTimeout (timers.js:290:5)`
- [Media Capture and Streams](https://www.w3.org/TR/mediacapture-streams/): `Error: Crawl took too long Error: Crawl took too long
    at Timeout._ [as _onTimeout] (/home/dom/github.com/reffy/src/cli/crawl-specs.js:338:29)
    at ontimeout (timers.js:498:11)
    at tryOnTimeout (timers.js:323:5)
    at Timer.listOnTimeout (timers.js:290:5)`

=> 4 specifications found


## Specifications that do not link to an Editor's Draft

- [Geolocation API Specification 2nd Edition](https://www.w3.org/TR/geolocation-API/)
- [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/)
- [Metadata API for Media Resources 1.0](https://www.w3.org/TR/mediaont-api-1.0/)
- [Selectors API Level 1](https://www.w3.org/TR/selectors-api/)
- [The WebSocket API](https://www.w3.org/TR/websockets/)
- [Web Notifications](https://www.w3.org/TR/notifications/)

=> 6 specifications found

It is good practice to link to Editor's Draft for W3C specifications even for specifications published as Recommendations. Reffy (or rather the W3C API) could not find a link to an Editor's Draft for the specifications mentioned above.


## Specifications without normative dependencies

- [Cascading Style Sheets Level 2 Revision 2 (CSS 2.2) Specification](http://dev.w3.org/csswg/css2/)
- [Payment Method: Basic Card](https://w3c.github.io/payment-method-basic-card/)
- [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)

=> 3 specifications found

Basically all specifications have normative dependencies on some other specification. Reffy could not find any normative dependencies for the specifications mentioned above, which seems strange.


## Specifications without WebIDL definitions

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)

=> 1 specification found

Reffy was expecting to find IDL content in the specifications  listed here but could not extract any.


## Specifications without CSS definitions

- [Cascading Style Sheets Level 2 Revision 2 (CSS 2.2) Specification](http://dev.w3.org/csswg/css2/)
- [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/)
- [CSS Custom Properties for Cascading Variables Module Level 1](https://drafts.csswg.org/css-variables/)
- [CSS Environment Variables Module Level 1](https://drafts.csswg.org/css-env-1/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Namespaces Module Level 3](https://drafts.csswg.org/css-namespaces/)
- [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/)
- [CSS Scoping Module Level 1](https://drafts.csswg.org/css-scoping/)
- [CSS Shadow Parts](https://drafts.csswg.org/css-shadow-parts-1/)
- [CSS Style Attributes](https://drafts.csswg.org/css-style-attr/)
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)
- [CSS Timing Functions Level 1](https://drafts.csswg.org/css-timing/)
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)
- [CSS TV Profile 1.0](https://drafts.csswg.org/css-tv/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values-4/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/)
- [Media Queries Level 3](http://dev.w3.org/csswg/css3-mediaqueries/)
- [Non-element Selectors Module Level 1](https://drafts.csswg.org/selectors-nonelement/)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/)
- [Selectors Level 4](https://drafts.csswg.org/selectors)

=> 20 specifications found

Reffy was expecting to find CSS definitions in the specifications  listed here but could not extract any.


## Specifications with unexpected WebIDL definitions

- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)
- [CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts/)
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)
- [SVG Markers](https://svgwg.org/specs/markers/)

=> 4 specifications found

Reffy was not expecting to find IDL content in the specifications listed here but it did. Note that Reffy cannot deal with specifications that define IDL content and exist at different levels: only one level is flagged as defining the IDL. Other levels will incorrectly appear in this list as a consequence.


## Specifications with unexpected CSS definitions


=> 0 specification found


## List of specifications with invalid WebIDL content

- [Box Tree API Level 1](https://drafts.css-houdini.org/box-tree-api/)
- [CSS Layout API Level 1](https://drafts.css-houdini.org/css-layout-api-1/)
- [CSS Regions Module Level 1](https://drafts.csswg.org/css-regions/)
- [Font Metrics API Level 1](https://drafts.css-houdini.org/font-metrics-api/)
- [Metadata API for Media Resources 1.0](https://www.w3.org/TR/mediaont-api-1.0/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [The WebSocket API](https://www.w3.org/TR/websockets/)
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html)
- [Web MIDI API](http://webaudio.github.io/web-midi-api/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/)

=> 10 specifications found

WebIDL continues to evolve. Reffy may incorrectly report as invalid perfectly valid WebIDL content if the specification uses bleeding-edge WebIDL features


## List of specifications with obsolete WebIDL constructs

- [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/)

=> 1 specification found

A typical example is the use of `[]` instead of `FrozenArray`.


## Specifications that use WebIDL but do not reference the WebIDL spec

- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [CSS Images Module Level 4](https://drafts.csswg.org/css-images-4/)
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/)
- [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/)
- [Input Device Capabilities](https://wicg.github.io/InputDeviceCapabilities/)
- [Input Events Level 1](https://rawgit.com/w3c/input-events/v1/index.html)
- [Network Information API](https://wicg.github.io/netinfo/)
- [Page Visibility Level 2](https://w3c.github.io/page-visibility/)
- [Payment Method: Basic Card](https://w3c.github.io/payment-method-basic-card/)
- [Pointer Events](https://w3c.github.io/pointerevents/)
- [PointerEvents - Level 2 - Extensions](https://w3c.github.io/pointerevents/extension.html)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/)
- [Selectors API Level 1](https://www.w3.org/TR/selectors-api/)
- [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/)
- [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)

=> 15 specifications found



## List of WebIDL names not defined in the specifications crawled

- `AbortSignal` used in [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/), [Fetch Standard](https://fetch.spec.whatwg.org/), [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- `AnimationEffectReadOnly` used in [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- `AudioTrack` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `AudioTrackList` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `CSSOMRGBColor` used in [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/)
- `ConstrainBoolean` used in [Media Capture Depth Stream Extensions](https://w3c.github.io/mediacapture-depth/), [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/), [Screen Capture](https://w3c.github.io/mediacapture-screen-share/)
- `ConstrainDOMString` used in [Media Capture Depth Stream Extensions](https://w3c.github.io/mediacapture-depth/), [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/), [Screen Capture](https://w3c.github.io/mediacapture-screen-share/)
- `ConstrainDouble` used in [Media Capture Depth Stream Extensions](https://w3c.github.io/mediacapture-depth/), [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- `DOMStringList` used in [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/)
- `DataTransfer` used in [Clipboard API and events](https://w3c.github.io/clipboard-apis/), [Input Events Level 1](https://rawgit.com/w3c/input-events/v1/index.html)
- `DataTransferItem` used in [File and Directory Entries API](https://wicg.github.io/entries-api/)
- `Dictionary` used in [Web NFC API](https://w3c.github.io/web-nfc/)
- `DoubleRange` used in [Media Capture Depth Stream Extensions](https://w3c.github.io/mediacapture-depth/)
- `EventHandler` used in [Background Fetch](https://wicg.github.io/background-fetch/), [Battery Status API](https://w3c.github.io/battery/), [Compatibility Standard](https://compat.spec.whatwg.org/), [CSS Animations Level 1](https://drafts.csswg.org/css-animations/), [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/), [CSS Transitions](https://drafts.csswg.org/css-transitions/), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [DeviceOrientation Event Specification](https://w3c.github.io/deviceorientation/spec-source-orientation.html), [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/), [File API](https://w3c.github.io/FileAPI/), [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/), [Generic Sensor API](https://w3c.github.io/sensors/), [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Media Capabilities](https://wicg.github.io/media-capabilities/), [Media Source Extensions™](https://w3c.github.io/media-source/), [MediaStream Recording](https://w3c.github.io/mediacapture-record/), [Network Information API](https://wicg.github.io/netinfo/), [Page Visibility Level 2](https://w3c.github.io/page-visibility/), [Payment Handler API](https://w3c.github.io/payment-handler/), [Payment Request API](https://w3c.github.io/payment-request/), [Permissions](https://w3c.github.io/permissions/), [Picture-in-Picture](https://wicg.github.io/picture-in-picture/), [Pointer Events](https://w3c.github.io/pointerevents/), [Pointer Lock 2.0](https://w3c.github.io/pointerlock/), [Presentation API](https://w3c.github.io/presentation-api/), [Push API](https://w3c.github.io/push-api/), [Remote Playback API](https://w3c.github.io/remote-playback/), [Resource Timing Level 2](https://w3c.github.io/resource-timing/), [Selection API](https://w3c.github.io/selection-api/), [Server-Sent Events](http://www.w3.org/TR/2015/REC-eventsource-20150203/), [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/), [The Screen Orientation API](https://w3c.github.io/screen-orientation/), [Touch Events - Level 2](https://w3c.github.io/touch-events/), [Wake Lock API](https://w3c.github.io/wake-lock/), [Web Animations](https://w3c.github.io/web-animations/), [Web App Manifest](https://w3c.github.io/manifest/), [Web Audio API](https://webaudio.github.io/web-audio-api/), [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/), [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/), [Web Notifications](https://www.w3.org/TR/notifications/), [Web Workers](https://html.spec.whatwg.org/multipage/workers.html), [WebUSB API](https://wicg.github.io/webusb/), [WebXR Device API](https://immersive-web.github.io/webxr/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `GlobalEventHandlers` used in [CSS Animations Level 1](https://drafts.csswg.org/css-animations/), [CSS Transitions](https://drafts.csswg.org/css-transitions/), [Pointer Events](https://w3c.github.io/pointerevents/), [Selection API](https://w3c.github.io/selection-api/), [Touch Events - Level 2](https://w3c.github.io/touch-events/)
- `GroupEffectReadOnly` used in [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- `HTMLBodyElement` used in [Compatibility Standard](https://compat.spec.whatwg.org/)
- `HTMLCanvasElement` used in [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/), [Media Capture from DOM Elements](https://w3c.github.io/mediacapture-fromelement/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebXR Device API](https://immersive-web.github.io/webxr/)
- `HTMLElement` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- `HTMLFormElement` used in [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `HTMLIFrameElement` used in [Content Security Policy: Embedded Enforcement](https://w3c.github.io/webappsec-csp/embedded/), [Feature Policy](https://wicg.github.io/feature-policy/)
- `HTMLImageElement` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- `HTMLInputElement` used in [File and Directory Entries API](https://wicg.github.io/entries-api/), [HTML Media Capture](https://w3c.github.io/html-media-capture/)
- `HTMLLinkElement` used in [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/)
- `HTMLMediaElement` used in [Audio Output Devices API](https://w3c.github.io/mediacapture-output/), [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/), [Media Capture from DOM Elements](https://w3c.github.io/mediacapture-fromelement/), [Remote Playback API](https://w3c.github.io/remote-playback/), [Web Audio API](https://webaudio.github.io/web-audio-api/)
- `HTMLScriptElement` used in [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/)
- `HTMLSlotElement` used in [W3C DOM 4.1](https://w3c.github.io/dom/)
- `HTMLVideoElement` used in [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/), [Picture-in-Picture](https://wicg.github.io/picture-in-picture/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- `ImageBitmap` used in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- `ImageBitmapSource` used in [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
- `KeyframeEffectReadOnly` used in [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)
- `LayoutWorklet` used in [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- `Map` used in [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- `MediaStream` used in [Media Capture from DOM Elements](https://w3c.github.io/mediacapture-fromelement/), [MediaStream Recording](https://w3c.github.io/mediacapture-record/), [Screen Capture](https://w3c.github.io/mediacapture-screen-share/), [Web Audio API](https://webaudio.github.io/web-audio-api/)
- `MediaStreamConstraints` used in [Screen Capture](https://w3c.github.io/mediacapture-screen-share/)
- `MediaStreamTrack` used in [Media Capture from DOM Elements](https://w3c.github.io/mediacapture-fromelement/), [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/), [Web Audio API](https://webaudio.github.io/web-audio-api/)
- `MediaTrackCapabilities` used in [Media Capture Depth Stream Extensions](https://w3c.github.io/mediacapture-depth/), [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- `MediaTrackConstraintSet` used in [Media Capture Depth Stream Extensions](https://w3c.github.io/mediacapture-depth/), [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/), [Screen Capture](https://w3c.github.io/mediacapture-screen-share/)
- `MediaTrackSettings` used in [Media Capture Depth Stream Extensions](https://w3c.github.io/mediacapture-depth/), [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- `MediaTrackSupportedConstraints` used in [Media Capture Depth Stream Extensions](https://w3c.github.io/mediacapture-depth/), [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- `Navigator` used in [Battery Status API](https://w3c.github.io/battery/), [Beacon](https://w3c.github.io/beacon/), [Clipboard API and events](https://w3c.github.io/clipboard-apis/), [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/), [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/), [Gamepad](https://w3c.github.io/gamepad/), [Geolocation API Specification 2nd Edition](https://www.w3.org/TR/geolocation-API/), [Keyboard Lock](https://w3c.github.io/keyboard-lock/), [Media Capabilities](https://wicg.github.io/media-capabilities/), [Media Session Standard](https://wicg.github.io/mediasession/), [Permissions](https://w3c.github.io/permissions/), [Pointer Events](https://w3c.github.io/pointerevents/), [Presentation API](https://w3c.github.io/presentation-api/), [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/), [Vibration API (Second Edition)](https://w3c.github.io/vibration/), [Wake Lock API](https://w3c.github.io/wake-lock/), [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/), [Web Budget API](https://wicg.github.io/budget-api/), [Web NFC API](https://w3c.github.io/web-nfc/), [Web Share API](https://wicg.github.io/web-share/), [WebUSB API](https://wicg.github.io/webusb/), [WebXR Device API](https://immersive-web.github.io/webxr/)
- `NavigatorUserMedia` used in [Screen Capture](https://w3c.github.io/mediacapture-screen-share/)
- `OnErrorEventHandler` used in [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
- `PermissionName` used in [Permissions](https://w3c.github.io/permissions/)
- `RTCDataChannelState` used in [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/)
- `RTCDtlsTransportState` used in [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/)
- `RTCIceCandidateType` used in [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/)
- `RTCIceRole` used in [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/)
- `RTCPriorityType` used in [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/)
- `RTCRTPStreamStats` used in [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/)
- `ReadableStream` used in [CSS Parser API](https://wicg.github.io/CSS-Parser-API/), [Fetch Standard](https://fetch.spec.whatwg.org/)
- `TextTrack` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `TextTrackCue` used in [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)
- `TextTrackList` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `TimeRanges` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `Transferable` used in [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/)
- `VideoTrack` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `VideoTrackList` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `Window` used in [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/), [Accelerometer](https://w3c.github.io/accelerometer/), [Ambient Light Sensor](https://w3c.github.io/ambient-light/), [Background Fetch](https://wicg.github.io/background-fetch/), [Battery Status API](https://w3c.github.io/battery/), [Clipboard API and events](https://w3c.github.io/clipboard-apis/), [Compatibility Standard](https://compat.spec.whatwg.org/), [Console Standard](https://console.spec.whatwg.org/), [Cooperative Scheduling of Background Tasks](https://w3c.github.io/requestidlecallback/), [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/), [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/), [CSS Animations Level 1](https://drafts.csswg.org/css-animations/), [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/), [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/), [CSS Counter Styles Level 3](https://drafts.csswg.org/css-counter-styles/), [CSS Device Adaptation Module Level 1](https://drafts.csswg.org/css-device-adapt/), [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/), [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/), [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/), [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/), [CSS Transitions](https://drafts.csswg.org/css-transitions/), [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/), [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [DeviceOrientation Event Specification](https://w3c.github.io/deviceorientation/spec-source-orientation.html), [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/), [Encoding Standard](https://encoding.spec.whatwg.org/), [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/), [Fetch Standard](https://fetch.spec.whatwg.org/), [File API](https://w3c.github.io/FileAPI/), [Gamepad](https://w3c.github.io/gamepad/), [Generic Sensor API](https://w3c.github.io/sensors/), [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/), [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/), [Gyroscope](https://w3c.github.io/gyroscope/), [High Resolution Time Level 2](https://w3c.github.io/hr-time/), [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Intersection Observer](https://w3c.github.io/IntersectionObserver/), [Keyboard Lock](https://w3c.github.io/keyboard-lock/), [Magnetometer](https://w3c.github.io/magnetometer/), [Media Capabilities](https://wicg.github.io/media-capabilities/), [Media Capture from DOM Elements](https://w3c.github.io/mediacapture-fromelement/), [Media Session Standard](https://wicg.github.io/mediasession/), [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/), [MediaStream Recording](https://w3c.github.io/mediacapture-record/), [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/), [Network Information API](https://wicg.github.io/netinfo/), [Orientation Sensor](https://w3c.github.io/orientation-sensor/), [Payment Handler API](https://w3c.github.io/payment-handler/), [Payment Request API](https://w3c.github.io/payment-request/), [Performance Timeline Level 2](https://w3c.github.io/performance-timeline/), [Permissions](https://w3c.github.io/permissions/), [Pointer Events](https://w3c.github.io/pointerevents/), [Presentation API](https://w3c.github.io/presentation-api/), [Proximity Sensor](https://w3c.github.io/proximity/), [Push API](https://w3c.github.io/push-api/), [Remote Playback API](https://w3c.github.io/remote-playback/), [Resource Timing Level 2](https://w3c.github.io/resource-timing/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Selection API](https://w3c.github.io/selection-api/), [Server Timing](https://w3c.github.io/server-timing/), [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/), [Static Range](https://w3c.github.io/staticrange/), [Storage Standard](https://storage.spec.whatwg.org/), [The Screen Orientation API](https://w3c.github.io/screen-orientation/), [Touch Events - Level 2](https://w3c.github.io/touch-events/), [UI Events](https://w3c.github.io/uievents/), [URL Standard](https://url.spec.whatwg.org/), [User Timing Level 2](https://w3c.github.io/user-timing/), [W3C DOM 4.1](https://w3c.github.io/dom/), [Wake Lock API](https://w3c.github.io/wake-lock/), [Web Animations](https://w3c.github.io/web-animations/), [Web App Manifest](https://w3c.github.io/manifest/), [Web Audio API](https://webaudio.github.io/web-audio-api/), [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/), [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/), [Web Budget API](https://wicg.github.io/budget-api/), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web IDL](https://heycam.github.io/webidl/), [Web Workers](https://html.spec.whatwg.org/multipage/workers.html), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebUSB API](https://wicg.github.io/webusb/), [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/), [WebXR Device API](https://immersive-web.github.io/webxr/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `WindowOrWorkerGlobalScope` used in [Fetch Standard](https://fetch.spec.whatwg.org/), [High Resolution Time Level 2](https://w3c.github.io/hr-time/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/), [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html)
- `WindowProxy` used in [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/), [Touch Events - Level 2](https://w3c.github.io/touch-events/)
- `sequence` used in [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)

=> 62 WebIDL names found

Some of them may be type errors in specs (e.g. "int" does not exist, "Array" cannot be used on its own, etc.)
Also, please keep in mind that Reffy only knows about IDL terms defined in the specifications that were crawled **and** that do not have invalid IDL content.


## List of WebIDL names defined in more than one spec

- `CSSFontFaceRule` defined in [CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts/) and [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/)
- `CSSGroupingRule` defined in [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/) and [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- `ProgressEvent` defined in [Progress Events](http://www.w3.org/TR/2014/REC-progress-events-20140211/) and [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `ProgressEventInit` defined in [Progress Events](http://www.w3.org/TR/2014/REC-progress-events-20140211/) and [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `SVGMarkerElement` defined in [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/) and [SVG Markers](https://svgwg.org/specs/markers/)
- `VoidFunction` defined in [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/) and [Web IDL](https://heycam.github.io/webidl/)
- `Worker` defined in [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) and [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
- `Worklet` defined in [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) and [Web Audio API](https://webaudio.github.io/web-audio-api/) and [Worklets Level 1](https://drafts.css-houdini.org/worklets/)

=> 8 WebIDL names found

"There can be only one"...


## Missing references for WebIDL names

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/) uses `Point2D` but does not reference [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- [Battery Status API](https://w3c.github.io/battery/) uses `EventTarget` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
- [Console Standard](https://console.spec.whatwg.org/) uses:
    * `Worker` but does not reference [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) or [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
    * `Worklet` but does not reference [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) or [Web Audio API](https://webaudio.github.io/web-audio-api/) or [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/) uses `Document` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
- [CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts/) uses:
    * `CSSRule` but does not reference [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
    * `CSSStyleDeclaration` but does not reference [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/) uses:
    * `Worker` but does not reference [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) or [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
    * `PaintWorklet` but does not reference [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/) uses:
    * `MouseEvent` but does not reference [UI Events](https://w3c.github.io/uievents/)
    * `MouseEventInit` but does not reference [UI Events](https://w3c.github.io/uievents/)
- [Encoding Standard](https://encoding.spec.whatwg.org/) uses `Worker` but does not reference [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) or [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
- [High Resolution Time Level 2](https://w3c.github.io/hr-time/) uses `EventTarget` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
- [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/) uses:
    * `Element` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
    * `MouseEvent` but does not reference [UI Events](https://w3c.github.io/uievents/)
    * `MouseEventInit` but does not reference [UI Events](https://w3c.github.io/uievents/)
- [Input Events Level 1](https://rawgit.com/w3c/input-events/v1/index.html) uses `StaticRange` but does not reference [Static Range](https://w3c.github.io/staticrange/)
- [Intersection Observer](https://w3c.github.io/IntersectionObserver/) uses `DOMHighResTimeStamp` but does not reference [High Resolution Time Level 2](https://w3c.github.io/hr-time/)
- [Media Source Extensions™](https://w3c.github.io/media-source/) uses:
    * `EventTarget` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
    * `URL` but does not reference [URL Standard](https://url.spec.whatwg.org/)
- [Payment Method: Basic Card](https://w3c.github.io/payment-method-basic-card/) uses `PaymentAddress` but does not reference [Payment Request API](https://w3c.github.io/payment-request/)
- [Remote Playback API](https://w3c.github.io/remote-playback/) uses `EventTarget` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/) uses:
    * `DOMRect` but does not reference [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
    * `DOMMatrix` but does not reference [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
    * `DOMPointInit` but does not reference [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
    * `DOMPoint` but does not reference [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
    * `DOMRectReadOnly` but does not reference [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
    * `DOMPointReadOnly` but does not reference [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
    * `DOMMatrixReadOnly` but does not reference [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
- [Server Timing](https://w3c.github.io/server-timing/) uses:
    * `Worker` but does not reference [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) or [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
    * `DOMHighResTimeStamp` but does not reference [High Resolution Time Level 2](https://w3c.github.io/hr-time/)
- [SVG Markers](https://svgwg.org/specs/markers/) uses:
    * `DOMPoint` but does not reference [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
    * `DOMPointReadOnly` but does not reference [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
- [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html) uses `Worker` but does not reference [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) or [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
- [Web Workers](https://html.spec.whatwg.org/multipage/workers.html) uses:
    * `EventTarget` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
    * `RequestCredentials` but does not reference [Fetch Standard](https://fetch.spec.whatwg.org/)
    * `MessagePort` but does not reference [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/)
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/) uses `Worklet` but does not reference [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) or [Web Audio API](https://webaudio.github.io/web-audio-api/) or [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- [WebXR Device API](https://immersive-web.github.io/webxr/) uses:
    * `DOMHighResTimeStamp` but does not reference [High Resolution Time Level 2](https://w3c.github.io/hr-time/)
    * `WebGLRenderingContext` but does not reference [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
    * `WebGL2RenderingContext` but does not reference [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
    * `WebGLFramebuffer` but does not reference [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
    * `WebGLContextAttributes` but does not reference [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
    * `WebGLRenderingContextBase` but does not reference [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)

=> 44 missing references for IDL definitions found in 22 specifications


## Missing references based on document links

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/) links to [`https://w3c.github.io/mediacapture-image/`](https://w3c.github.io/mediacapture-image/) but does not list it in its references
- [Accelerometer](https://w3c.github.io/accelerometer/) links to:
    * [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/) but does not list it in its references
    * [`https://w3c.github.io/sensors/usecases.html`](https://w3c.github.io/sensors/usecases.html) but does not list it in its references
- [Accessibility Object Model](https://wicg.github.io/aom/spec/) links to:
    * [`https://www.w3.org/TR/core-aam-1.1/`](https://www.w3.org/TR/core-aam-1.1/) but does not list it in its references
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
    * [`https://w3c.github.io/html-aam/`](https://w3c.github.io/html-aam/) but does not list it in its references
- [Background Fetch](https://wicg.github.io/background-fetch/) links to [`https://storage.spec.whatwg.org/`](https://storage.spec.whatwg.org/) but does not list it in its references
- [Clipboard API and events](https://w3c.github.io/clipboard-apis/) links to [`https://w3c.github.io/editing/contentEditable.html`](https://w3c.github.io/editing/contentEditable.html) but does not list it in its references
- [Compositing and Blending Level 1](https://drafts.fxtf.org/compositing-1/) links to:
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but does not list it in its references
- [Compositing and Blending Level 2](https://drafts.fxtf.org/compositing-2/) links to:
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/2014/CR-compositing-1-20140220/`](https://www.w3.org/TR/2014/CR-compositing-1-20140220/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-compositing-1-20131010/`](https://www.w3.org/TR/2013/WD-compositing-1-20131010/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-compositing-1-20130625/`](https://www.w3.org/TR/2013/WD-compositing-1-20130625/) but does not list it in its references
- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/) links to [`https://w3c.github.io/reporting/`](https://w3c.github.io/reporting/) but does not list it in its references
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/) links to [`https://w3c.github.io/webappsec/usecases/credentialmanagement/`](https://w3c.github.io/webappsec/usecases/credentialmanagement/) but does not list it in its references
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/) links to:
    * [`https://w3c.github.io/web-animations/level-2/`](https://w3c.github.io/web-animations/level-2/) but does not list it in its references
    * [`https://w3c.github.io/html/infrastructure.html`](https://w3c.github.io/html/infrastructure.html) but does not list it in its references
- [CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds/) links to:
    * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/) but does not list it in its references
    * [`https://www.w3.org/TR/2008/NOTE-WCAG20-TECHS-20081211/F3`](https://www.w3.org/TR/2008/NOTE-WCAG20-TECHS-20081211/F3) but does not list it in its references
    * [`https://www.w3.org/TR/media-frags/`](https://www.w3.org/TR/media-frags/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/) but does not list it in its references
    * [`https://www.w3.org/TR/2014/CR-css3-background-20140909/`](https://www.w3.org/TR/2014/CR-css3-background-20140909/) but does not list it in its references
    * [`https://www.w3.org/TR/2014/WD-css3-background-20140204/`](https://www.w3.org/TR/2014/WD-css3-background-20140204/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/CR-css3-background-20120724/`](https://www.w3.org/TR/2012/CR-css3-background-20120724/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/CR-css3-background-20120417/`](https://www.w3.org/TR/2012/CR-css3-background-20120417/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/WD-css3-background-20120214/`](https://www.w3.org/TR/2012/WD-css3-background-20120214/) but does not list it in its references
    * [`https://www.w3.org/TR/2011/CR-css3-background-20110215/`](https://www.w3.org/TR/2011/CR-css3-background-20110215/) but does not list it in its references
    * [`https://www.w3.org/TR/2009/CR-css3-background-20091217/`](https://www.w3.org/TR/2009/CR-css3-background-20091217/) but does not list it in its references
- [CSS Backgrounds and Borders Module Level 4](https://drafts.csswg.org/css-backgrounds-4/) links to:
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/) but does not list it in its references
- [CSS basic box model](https://drafts.csswg.org/css-box-3/) links to [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/) but does not list it in its references
- [CSS Basic User Interface Module Level 4](https://drafts.csswg.org/css-ui-4/) links to:
    * [`https://www.w3.org/TR/2000/WD-css3-userint-20000216`](https://www.w3.org/TR/2000/WD-css3-userint-20000216) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css-style-attr/`](https://www.w3.org/TR/css-style-attr/) but does not list it in its references
    * [`https://w3c.github.io/editing/contentEditable.html`](https://w3c.github.io/editing/contentEditable.html) but does not list it in its references
- [CSS Basic User Interface Module Level 4](https://drafts.csswg.org/css-ui/) links to:
    * [`https://www.w3.org/TR/2000/WD-css3-userint-20000216`](https://www.w3.org/TR/2000/WD-css3-userint-20000216) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css-style-attr/`](https://www.w3.org/TR/css-style-attr/) but does not list it in its references
    * [`https://w3c.github.io/editing/contentEditable.html`](https://w3c.github.io/editing/contentEditable.html) but does not list it in its references
    * [`https://www.w3.org/TR/2017/WD-css-ui-4-20171222/`](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/) but does not list it in its references
    * [`https://www.w3.org/TR/2015/WD-css-ui-4-20150922/`](https://www.w3.org/TR/2015/WD-css-ui-4-20150922/) but does not list it in its references
- [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align/) links to:
    * [`https://www.w3.org/TR/cssom-1/`](https://www.w3.org/TR/cssom-1/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/) but does not list it in its references
    * [`https://www.w3.org/TR/css-flexbox/`](https://www.w3.org/TR/css-flexbox/) but does not list it in its references
    * [`https://www.w3.org/TR/css-grid/`](https://www.w3.org/TR/css-grid/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-flexbox/`](https://www.w3.org/TR/css3-flexbox/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-grid-layout/`](https://www.w3.org/TR/css3-grid-layout/) but does not list it in its references
- [CSS Cascading and Inheritance Level 3](https://drafts.csswg.org/css-cascade-3/) links to:
    * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/) but does not list it in its references
    * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/) but does not list it in its references
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but does not list it in its references
    * [`https://www.w3.org/TR/css-style-attr/`](https://www.w3.org/TR/css-style-attr/) but does not list it in its references
- [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/) links to [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/) but does not list it in its references
- [CSS Containment Module Level 1](https://drafts.csswg.org/css-contain/) links to [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/) but does not list it in its references
- [CSS Device Adaptation Module Level 1](https://drafts.csswg.org/css-device-adapt/) links to:
    * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/) but does not list it in its references
    * [`https://www.w3.org/TR/2011/WD-css-device-adapt-20110915/`](https://www.w3.org/TR/2011/WD-css-device-adapt-20110915/) but does not list it in its references
- [CSS Display Module Level 3](https://drafts.csswg.org/css-display/) links to [`https://www.w3.org/TR/css-cascade/`](https://www.w3.org/TR/css-cascade/) but does not list it in its references
- [CSS Fill and Stroke Module Level 3](https://drafts.fxtf.org/fill-stroke/) links to:
    * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but does not list it in its references
    * [`https://www.w3.org/TR/css4-images/`](https://www.w3.org/TR/css4-images/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
- [CSS Flexible Box Layout Module Level 1](https://drafts.csswg.org/css-flexbox/) links to:
    * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/) but does not list it in its references
    * [`https://www.w3.org/TR/css-align/`](https://www.w3.org/TR/css-align/) but does not list it in its references
    * [`https://www.w3.org/TR/css-display/`](https://www.w3.org/TR/css-display/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-speech/`](https://www.w3.org/TR/css3-speech/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/) but does not list it in its references
    * [`https://www.w3.org/TR/css-break/`](https://www.w3.org/TR/css-break/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/CR-css3-flexbox-20120918/`](https://www.w3.org/TR/2012/CR-css3-flexbox-20120918/) but does not list it in its references
- [CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts/) links to:
    * [`https://www.w3.org/TR/2002/WD-css3-fonts-20020802/`](https://www.w3.org/TR/2002/WD-css3-fonts-20020802/) but does not list it in its references
    * [`https://www.w3.org/TR/2002/WD-css3-webfonts-20020802/`](https://www.w3.org/TR/2002/WD-css3-webfonts-20020802/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/) but does not list it in its references
    * [`https://www.w3.org/TR/2005/REC-charmod-20050215/`](https://www.w3.org/TR/2005/REC-charmod-20050215/) but does not list it in its references
    * [`https://www.w3.org/TR/2018/WD-charmod-norm-20180420/`](https://www.w3.org/TR/2018/WD-charmod-norm-20180420/) but does not list it in its references
    * [`https://www.w3.org/TR/2017/WD-css-text-3-20170822/`](https://www.w3.org/TR/2017/WD-css-text-3-20170822/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/CR-css3-conditional-20130404/`](https://www.w3.org/TR/2013/CR-css3-conditional-20130404/) but does not list it in its references
- [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/) links to:
    * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/) but does not list it in its references
    * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/) but does not list it in its references
- [CSS Fragmentation Module Level 3](https://drafts.csswg.org/css-break/) links to:
    * [`https://www.w3.org/TR/css3-regions/`](https://www.w3.org/TR/css3-regions/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/2015/WD-css3-break-20150129/`](https://www.w3.org/TR/2015/WD-css3-break-20150129/) but does not list it in its references
- [CSS Generated Content for Paged Media Module](https://drafts.csswg.org/css-gcpm/) links to:
    * [`https://w3c.github.io/dpub-pagination/`](https://w3c.github.io/dpub-pagination/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/) but does not list it in its references
    * [`https://www.w3.org/TR/2011/WD-css3-gcpm-20111129/`](https://www.w3.org/TR/2011/WD-css3-gcpm-20111129/) but does not list it in its references
    * [`https://books.spec.whatwg.org/`](https://books.spec.whatwg.org/) but does not list it in its references
- [CSS Grid Layout Module Level 1](https://drafts.csswg.org/css-grid/) links to:
    * [`https://www.w3.org/TR/css-flexbox/`](https://www.w3.org/TR/css-flexbox/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/) but does not list it in its references
    * [`https://www.w3.org/TR/css-align/`](https://www.w3.org/TR/css-align/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-speech/`](https://www.w3.org/TR/css3-speech/) but does not list it in its references
    * [`https://www.w3.org/TR/css-display/`](https://www.w3.org/TR/css-display/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/) but does not list it in its references
    * [`https://www.w3.org/TR/cssom/`](https://www.w3.org/TR/cssom/) but does not list it in its references
    * [`https://www.w3.org/TR/css-break/`](https://www.w3.org/TR/css-break/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/) but does not list it in its references
- [CSS Images Module Level 3](https://drafts.csswg.org/css-images-3/) links to:
    * [`https://www.w3.org/TR/css-animations/`](https://www.w3.org/TR/css-animations/) but does not list it in its references
    * [`https://www.w3.org/TR/css-transitions/`](https://www.w3.org/TR/css-transitions/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css-print/`](https://www.w3.org/TR/css-print/) but does not list it in its references
- [CSS Images Module Level 4](https://drafts.csswg.org/css-images-4/) links to:
    * [`https://www.w3.org/TR/css4-images/`](https://www.w3.org/TR/css4-images/) but does not list it in its references
    * [`https://www.w3.org/TR/2011/CR-css3-background-20110215/`](https://www.w3.org/TR/2011/CR-css3-background-20110215/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/WD-css4-images-20120911/`](https://www.w3.org/TR/2012/WD-css4-images-20120911/) but does not list it in its references
- [CSS Inline Layout Module Level 3](https://drafts.csswg.org/css-inline/) links to [`https://www.w3.org/TR/2002/WD-css3-linebox-20020515/`](https://www.w3.org/TR/2002/WD-css3-linebox-20020515/) but does not list it in its references
- [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://drafts.csswg.org/css-sizing-3/) links to:
    * [`https://www.w3.org/TR/css2/`](https://www.w3.org/TR/css2/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/) but does not list it in its references
    * [`https://www.w3.org/TR/css-flexbox/`](https://www.w3.org/TR/css-flexbox/) but does not list it in its references
- [CSS Intrinsic & Extrinsic Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/) links to [`https://www.w3.org/TR/2012/WD-css3-sizing-20120927/`](https://www.w3.org/TR/2012/WD-css3-sizing-20120927/) but does not list it in its references
- [CSS Layout API Level 1](https://drafts.css-houdini.org/css-layout-api-1/) links to:
    * [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/) but does not list it in its references
- [CSS Logical Properties and Values Level 1](https://drafts.csswg.org/css-logical/) links to:
    * [`https://www.w3.org/TR/css-writing-modes/`](https://www.w3.org/TR/css-writing-modes/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but does not list it in its references
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/) links to:
    * [`https://www.w3.org/TR/css-shapes/`](https://www.w3.org/TR/css-shapes/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-css-masking-20130620/`](https://www.w3.org/TR/2013/WD-css-masking-20130620/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/WD-css-masking-20121115/`](https://www.w3.org/TR/2012/WD-css-masking-20121115/) but does not list it in its references
- [CSS Multi-column Layout Module Level 1](https://drafts.csswg.org/css-multicol/) links to [`https://www.w3.org/TR/2011/CR-css3-multicol-20110412/`](https://www.w3.org/TR/2011/CR-css3-multicol-20110412/) but does not list it in its references
- [CSS Multi-column Layout Module Level 2](https://drafts.csswg.org/css-multicol-2/) links to [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/) but does not list it in its references
- [CSS Namespaces Module Level 3](https://drafts.csswg.org/css-namespaces/) links to [`https://www.w3.org/TR/2011/REC-css3-namespace-20110929/`](https://www.w3.org/TR/2011/REC-css3-namespace-20110929/) but does not list it in its references
- [CSS Overflow Module Level 3](http://drafts.csswg.org/css-overflow/) links to:
    * [`https://www.w3.org/TR/css-backgrounds/`](https://www.w3.org/TR/css-backgrounds/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/) but does not list it in its references
    * [`https://www.w3.org/TR/css-logical-1/`](https://www.w3.org/TR/css-logical-1/) but does not list it in its references
    * [`https://www.w3.org/TR/css-overflow-4/`](https://www.w3.org/TR/css-overflow-4/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/) but does not list it in its references
- [CSS Overflow Module Level 4](https://drafts.csswg.org/css-overflow-4/) links to:
    * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/) but does not list it in its references
    * [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/) but does not list it in its references
- [CSS Overscroll Behavior Module Level 1](https://wicg.github.io/overscroll-behavior/) links to:
    * [`https://www.w3.org/TR/css-display-3/`](https://www.w3.org/TR/css-display-3/) but does not list it in its references
    * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/) but does not list it in its references
- [CSS Paged Media Module Level 3](https://drafts.csswg.org/css-page-3/) links to:
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/) but does not list it in its references
- [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) links to [`https://www.w3.org/TR/css-properties-values-api-1/`](https://www.w3.org/TR/css-properties-values-api-1/) but does not list it in its references
- [CSS Positioned Layout Module Level 3](https://drafts.csswg.org/css-position/) links to [`https://www.w3.org/TR/2015/WD-css3-positioning-20150203/`](https://www.w3.org/TR/2015/WD-css3-positioning-20150203/) but does not list it in its references
- [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/) links to [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but does not list it in its references
- [CSS Regions Module Level 1](https://drafts.csswg.org/css-regions/) links to:
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-speech/`](https://www.w3.org/TR/css3-speech/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/) but does not list it in its references
    * [`https://www.w3.org/TR/2014/WD-css3-regions-20140218/`](https://www.w3.org/TR/2014/WD-css3-regions-20140218/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-css3-regions-20130528/`](https://www.w3.org/TR/2013/WD-css3-regions-20130528/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/WD-css3-regions-20120823/`](https://www.w3.org/TR/2012/WD-css3-regions-20120823/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/WD-css3-regions-20120503/`](https://www.w3.org/TR/2012/WD-css3-regions-20120503/) but does not list it in its references
- [CSS Ruby Layout Module Level 1](https://drafts.csswg.org/css-ruby-1/) links to:
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-text/`](https://www.w3.org/TR/css3-text/) but does not list it in its references
- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
- [CSS Scrollbars Module Level 1](https://drafts.csswg.org/css-scrollbars-1/) links to:
    * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/) but does not list it in its references
    * [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/) but does not list it in its references
- [CSS Shapes Module Level 1](https://drafts.csswg.org/css-shapes/) links to:
    * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
- [CSS Shapes Module Level 2](https://drafts.csswg.org/css-shapes-2/) links to:
    * [`https://www.w3.org/TR/css-shapes/`](https://www.w3.org/TR/css-shapes/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/) but does not list it in its references
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/) links to:
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but does not list it in its references
    * [`https://www.w3.org/TR/selectors-api/`](https://www.w3.org/TR/selectors-api/) but does not list it in its references
- [CSS Table Module Level 3](https://drafts.csswg.org/css-tables-3/) links to:
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but does not list it in its references
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
- [CSS Text Decoration Module Level 3](https://drafts.csswg.org/css-text-decor-3/) links to:
    * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but does not list it in its references
    * [`https://www.w3.org/TR/css-transitions-1/`](https://www.w3.org/TR/css-transitions-1/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
- [CSS Text Decoration Module Level 4](https://drafts.csswg.org/css-text-decor-4/) links to:
    * [`https://www.w3.org/TR/css3-text/`](https://www.w3.org/TR/css3-text/) but does not list it in its references
    * [`https://www.w3.org/TR/css-text/`](https://www.w3.org/TR/css-text/) but does not list it in its references
- [CSS Text Module Level 3](https://drafts.csswg.org/css-text-3/) links to:
    * [`https://www.w3.org/TR/css-transitions-1/`](https://www.w3.org/TR/css-transitions-1/) but does not list it in its references
    * [`https://www.w3.org/TR/klreq/`](https://www.w3.org/TR/klreq/) but does not list it in its references
- [CSS Text Module Level 4](https://drafts.csswg.org/css-text-4/) links to [`https://www.w3.org/TR/css-text/`](https://www.w3.org/TR/css-text/) but does not list it in its references
- [CSS Timing Functions Level 1](https://drafts.csswg.org/css-timing/) links to [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/) but does not list it in its references
- [CSS Transforms Module Level 1](https://drafts.csswg.org/css-transforms/) links to:
    * [`https://www.w3.org/TR/css3-2d-transforms/`](https://www.w3.org/TR/css3-2d-transforms/) but does not list it in its references
    * [`https://www.w3.org/TR/2009/WD-SVG-Transforms-20090320/`](https://www.w3.org/TR/2009/WD-SVG-Transforms-20090320/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-animations/`](https://www.w3.org/TR/css3-animations/) but does not list it in its references
- [CSS Transitions](https://drafts.csswg.org/css-transitions/) links to:
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-css3-transitions-20131119/`](https://www.w3.org/TR/2013/WD-css3-transitions-20131119/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-css3-transitions-20130212/ChangeLog`](https://www.w3.org/TR/2013/WD-css3-transitions-20130212/ChangeLog) but does not list it in its references
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/) links to [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/) but does not list it in its references
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values-4/) links to:
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but does not list it in its references
    * [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/) but does not list it in its references
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/) links to [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but does not list it in its references
- [CSS Writing Modes Level 3](https://drafts.csswg.org/css-writing-modes-3/) links to:
    * [`https://www.w3.org/TR/css-logical-1/`](https://www.w3.org/TR/css-logical-1/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-flexbox/`](https://www.w3.org/TR/css3-flexbox/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/) but does not list it in its references
- [CSS Writing Modes Level 4](https://drafts.csswg.org/css-writing-modes-4/) links to:
    * [`https://www.w3.org/TR/css-logical-1/`](https://www.w3.org/TR/css-logical-1/) but does not list it in its references
    * [`https://www.w3.org/TR/css-text/`](https://www.w3.org/TR/css-text/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-flexbox/`](https://www.w3.org/TR/css3-flexbox/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/) but does not list it in its references
    * [`https://www.w3.org/TR/2015/CR-css-writing-modes-3-20151215/`](https://www.w3.org/TR/2015/CR-css-writing-modes-3-20151215/) but does not list it in its references
    * [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/) but does not list it in its references
- [Fetch Standard](https://fetch.spec.whatwg.org/) links to [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but does not list it in its references
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/) links to:
    * [`https://www.w3.org/TR/css-transitions-1/`](https://www.w3.org/TR/css-transitions-1/) but does not list it in its references
    * [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/WD-filter-effects-20121025/`](https://www.w3.org/TR/2012/WD-filter-effects-20121025/) but does not list it in its references
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/) links to [`https://w3c.github.io/screen-orientation/`](https://w3c.github.io/screen-orientation/) but does not list it in its references
- [Gyroscope](https://w3c.github.io/gyroscope/) links to [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/) but does not list it in its references
- [High Resolution Time Level 2](https://w3c.github.io/hr-time/) links to [`https://www.w3.org/TR/hr-time-1/`](https://www.w3.org/TR/hr-time-1/) but does not list it in its references
- [Intersection Observer](https://w3c.github.io/IntersectionObserver/) links to:
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/) but does not list it in its references
    * [`https://www.w3.org/TR/css-masking-1/`](https://www.w3.org/TR/css-masking-1/) but does not list it in its references
- [Long Tasks API 1](https://w3c.github.io/longtasks/) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
- [Magnetometer](https://w3c.github.io/magnetometer/) links to [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/) but does not list it in its references
- [Media Capabilities](https://wicg.github.io/media-capabilities/) links to [`https://www.w3.org/TR/webrtc/`](https://www.w3.org/TR/webrtc/) but does not list it in its references
- [Media Queries Level 3](http://dev.w3.org/csswg/css3-mediaqueries/) links to:
    * [`https://www.w3.org/TR/1999/REC-html401-19991224/`](https://www.w3.org/TR/1999/REC-html401-19991224/) but does not list it in its references
    * [`https://www.w3.org/TR/1999/REC-html401-19991224/present/`](https://www.w3.org/TR/1999/REC-html401-19991224/present/) but does not list it in its references
    * [`https://www.w3.org/TR/1999/REC-html401-19991224`](https://www.w3.org/TR/1999/REC-html401-19991224) but does not list it in its references
    * [`https://www.w3.org/TR/2011/WD-html5-20110525/`](https://www.w3.org/TR/2011/WD-html5-20110525/) but does not list it in its references
- [Media Queries Level 4](https://drafts.csswg.org/mediaqueries-4/) links to:
    * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/) but does not list it in its references
    * [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/) but does not list it in its references
- [Metadata API for Media Resources 1.0](https://www.w3.org/TR/mediaont-api-1.0/) links to:
    * [`https://www.w3.org/TR/mediaont-10/`](https://www.w3.org/TR/mediaont-10/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/REC-mediaont-10-20120209/`](https://www.w3.org/TR/2012/REC-mediaont-10-20120209/) but does not list it in its references
    * [`https://www.w3.org/TR/2011/NOTE-dap-policy-reqs-20110317/`](https://www.w3.org/TR/2011/NOTE-dap-policy-reqs-20110317/) but does not list it in its references
- [Motion Path Module Level 1](https://drafts.fxtf.org/motion-1/) links to:
    * [`https://www.w3.org/TR/css-display-3/`](https://www.w3.org/TR/css-display-3/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/) but does not list it in its references
- [Network Information API](https://wicg.github.io/netinfo/) links to:
    * [`https://w3c.github.io/ServiceWorker/v1/`](https://w3c.github.io/ServiceWorker/v1/) but does not list it in its references
    * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/netinfo/`](https://www.w3.org/TR/netinfo/) but does not list it in its references
- [Non-element Selectors Module Level 1](https://drafts.csswg.org/selectors-nonelement/) links to [`https://www.w3.org/TR/its20/`](https://www.w3.org/TR/its20/) but does not list it in its references
- [Orientation Sensor](https://w3c.github.io/orientation-sensor/) links to:
    * [`https://www.w3.org/TR/2016/CR-orientation-event-20160818/`](https://www.w3.org/TR/2016/CR-orientation-event-20160818/) but does not list it in its references
    * [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/) but does not list it in its references
- [Paint Timing 1](https://w3c.github.io/paint-timing/) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
- [Payment Handler API](https://w3c.github.io/payment-handler/) links to [`https://w3c.github.io/payment-method-manifest/`](https://w3c.github.io/payment-method-manifest/) but does not list it in its references
- [Permissions](https://w3c.github.io/permissions/) links to:
    * [`https://w3c.github.io/manifest/`](https://w3c.github.io/manifest/) but does not list it in its references
    * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/) but does not list it in its references
- [PointerEvents - Level 2 - Extensions](https://w3c.github.io/pointerevents/extension.html) links to [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/) but does not list it in its references
- [Preload](https://w3c.github.io/preload/) links to [`https://w3c.github.io/webappsec/specs/content-security-policy/`](https://w3c.github.io/webappsec/specs/content-security-policy/) but does not list it in its references
- [Progress Events](http://www.w3.org/TR/2014/REC-progress-events-20140211/) links to:
    * [`https://xhr.spec.whatwg.org/`](https://xhr.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/) but does not list it in its references
- [Push API](https://w3c.github.io/push-api/) links to [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/) but does not list it in its references
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/) links to:
    * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/) but does not list it in its references
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/) links to:
    * [`https://www.w3.org/TR/svg-integration/`](https://www.w3.org/TR/svg-integration/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/CR-WebIDL-20120419/`](https://www.w3.org/TR/2012/CR-WebIDL-20120419/) but does not list it in its references
    * [`https://www.w3.org/TR/filter-effects/`](https://www.w3.org/TR/filter-effects/) but does not list it in its references
    * [`https://url.spec.whatwg.org/`](https://url.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/2014/WD-geometry-1-20140522/`](https://www.w3.org/TR/2014/WD-geometry-1-20140522/) but does not list it in its references
    * [`https://www.w3.org/TR/geometry-1/`](https://www.w3.org/TR/geometry-1/) but does not list it in its references
    * [`https://www.w3.org/TR/wai-aria-1.1/`](https://www.w3.org/TR/wai-aria-1.1/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css-cascade-3/`](https://www.w3.org/TR/css-cascade-3/) but does not list it in its references
    * [`https://www.w3.org/TR/shadow-dom/`](https://www.w3.org/TR/shadow-dom/) but does not list it in its references
    * [`https://www.w3.org/TR/wai-aria/states_and_properties`](https://www.w3.org/TR/wai-aria/states_and_properties) but does not list it in its references
    * [`https://w3c.github.io/html-aam/`](https://w3c.github.io/html-aam/) but does not list it in its references
    * [`https://w3c.github.io/svg-aam/`](https://w3c.github.io/svg-aam/) but does not list it in its references
    * [`https://w3c.github.io/selection-api/`](https://w3c.github.io/selection-api/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/REC-css-style-attr-20131107/`](https://www.w3.org/TR/2013/REC-css-style-attr-20131107/) but does not list it in its references
    * [`https://www.w3.org/TR/cssom-1/`](https://www.w3.org/TR/cssom-1/) but does not list it in its references
    * [`https://www.w3.org/TR/css-position-3/`](https://www.w3.org/TR/css-position-3/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-exclusions/`](https://www.w3.org/TR/css3-exclusions/) but does not list it in its references
    * [`https://www.w3.org/TR/css-shapes/`](https://www.w3.org/TR/css-shapes/) but does not list it in its references
    * [`https://www.w3.org/TR/resource-hints/`](https://www.w3.org/TR/resource-hints/) but does not list it in its references
    * [`https://www.w3.org/TR/2003/REC-MathML2-20031021/`](https://www.w3.org/TR/2003/REC-MathML2-20031021/) but does not list it in its references
    * [`https://www.w3.org/TR/css-color/`](https://www.w3.org/TR/css-color/) but does not list it in its references
    * [`https://www.w3.org/TR/html51/full`](https://www.w3.org/TR/html51/full) but does not list it in its references
    * [`https://www.w3.org/TR/orientation-event/`](https://www.w3.org/TR/orientation-event/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-transforms/`](https://www.w3.org/TR/css3-transforms/) but does not list it in its references
    * [`https://www.w3.org/TR/cssom/`](https://www.w3.org/TR/cssom/) but does not list it in its references
    * [`https://www.w3.org/TR/core-aam-1.1/`](https://www.w3.org/TR/core-aam-1.1/) but does not list it in its references
    * [`https://www.w3.org/TR/accname-aam-1.1/`](https://www.w3.org/TR/accname-aam-1.1/) but does not list it in its references
    * [`https://w3c.github.io/aria/aria/graphics.html`](https://w3c.github.io/aria/aria/graphics.html) but does not list it in its references
    * [`https://www.w3.org/TR/smil/`](https://www.w3.org/TR/smil/) but does not list it in its references
    * [`https://w3c.github.io/aria/svg-aam/svg-aam.html`](https://w3c.github.io/aria/svg-aam/svg-aam.html) but does not list it in its references
    * [`https://www.w3.org/TR/xsl/`](https://www.w3.org/TR/xsl/) but does not list it in its references
    * [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/) but does not list it in its references
    * [`https://www.w3.org/TR/2015/WD-svg-markers-20150407/`](https://www.w3.org/TR/2015/WD-svg-markers-20150407/) but does not list it in its references
    * [`https://www.w3.org/TR/2015/WD-svg-strokes-20150407/`](https://www.w3.org/TR/2015/WD-svg-strokes-20150407/) but does not list it in its references
- [Selection API](https://w3c.github.io/selection-api/) links to [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/) but does not list it in its references
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/) links to:
    * [`https://www.w3.org/TR/2011/REC-css3-selectors-20110929/`](https://www.w3.org/TR/2011/REC-css3-selectors-20110929/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-namespace/`](https://www.w3.org/TR/css3-namespace/) but does not list it in its references
- [Selectors Level 4](https://drafts.csswg.org/selectors) links to:
    * [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-namespace/`](https://www.w3.org/TR/css3-namespace/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-text/`](https://www.w3.org/TR/css3-text/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-selectors4-20130502/`](https://www.w3.org/TR/2013/WD-selectors4-20130502/) but does not list it in its references
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) links to:
    * [`https://w3c.github.io/push-api/`](https://w3c.github.io/push-api/) but does not list it in its references
    * [`https://w3c.github.io/payment-handler/`](https://w3c.github.io/payment-handler/) but does not list it in its references
- [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/) links to [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but does not list it in its references
- [SVG Markers](https://svgwg.org/specs/markers/) links to:
    * [`https://www.w3.org/TR/2014/WD-filter-effects-1-20141125/`](https://www.w3.org/TR/2014/WD-filter-effects-1-20141125/) but does not list it in its references
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/WD-css3-values-20120308/`](https://www.w3.org/TR/2012/WD-css3-values-20120308/) but does not list it in its references
    * [`https://www.w3.org/TR/geometry-1/`](https://www.w3.org/TR/geometry-1/) but does not list it in its references
- [SVG Strokes](https://svgwg.org/specs/strokes/) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but does not list it in its references
- [Touch Events - Level 2](https://w3c.github.io/touch-events/) links to [`https://www.w3.org/TR/touch-events-extensions/`](https://www.w3.org/TR/touch-events-extensions/) but does not list it in its references
- [UI Events](https://w3c.github.io/uievents/) links to:
    * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/) but does not list it in its references
    * [`https://www.w3.org/TR/2004/REC-xml-20040204/`](https://www.w3.org/TR/2004/REC-xml-20040204/) but does not list it in its references
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html) links to:
    * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/) but does not list it in its references
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
    * [`https://w3c.github.io/requestidlecallback/`](https://w3c.github.io/requestidlecallback/) but does not list it in its references
- [W3C DOM 4.1](https://w3c.github.io/dom/) links to [`https://www.w3.org/TR/touch-events/`](https://www.w3.org/TR/touch-events/) but does not list it in its references
- [Web Audio API](https://webaudio.github.io/web-audio-api/) links to:
    * [`https://w3c.github.io/mediacapture-fromelement/`](https://w3c.github.io/mediacapture-fromelement/) but does not list it in its references
    * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/) but does not list it in its references
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/) links to [`https://w3c.github.io/html/browsers.html`](https://w3c.github.io/html/browsers.html) but does not list it in its references
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/) links to [`https://notifications.spec.whatwg.org/`](https://notifications.spec.whatwg.org/) but does not list it in its references
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/) links to [`https://w3c.github.io/fingerprinting-guidance/`](https://w3c.github.io/fingerprinting-guidance/) but does not list it in its references
- [Web NFC API](https://w3c.github.io/web-nfc/) links to:
    * [`https://www.w3.org/TR/url-1/`](https://www.w3.org/TR/url-1/) but does not list it in its references
    * [`https://w3c.github.io/webappsec/specs/powerfulfeatures/`](https://w3c.github.io/webappsec/specs/powerfulfeatures/) but does not list it in its references
    * [`https://streams.spec.whatwg.org/`](https://streams.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/page-visibility/`](https://www.w3.org/TR/page-visibility/) but does not list it in its references
- [Web Share API](https://wicg.github.io/web-share/) links to [`https://www.w3.org/TR/web-intents/`](https://www.w3.org/TR/web-intents/) but does not list it in its references
- [Web Workers](https://html.spec.whatwg.org/multipage/workers.html) links to:
    * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/) but does not list it in its references
    * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but does not list it in its references
    * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but does not list it in its references
    * [`https://infra.spec.whatwg.org/`](https://infra.spec.whatwg.org/) but does not list it in its references
    * [`https://url.spec.whatwg.org/`](https://url.spec.whatwg.org/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-referrer-policy/`](https://w3c.github.io/webappsec-referrer-policy/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but does not list it in its references
    * [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/) but does not list it in its references
    * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but does not list it in its references
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/) links to:
    * [`https://www.w3.org/TR/wasm-core/`](https://www.w3.org/TR/wasm-core/) but does not list it in its references
    * [`https://www.w3.org/TR/wasm-js-api/`](https://www.w3.org/TR/wasm-js-api/) but does not list it in its references
    * [`https://www.w3.org/TR/wasm-web-api/`](https://www.w3.org/TR/wasm-web-api/) but does not list it in its references
- [WebDriver](https://w3c.github.io/webdriver/) links to:
    * [`https://w3c.github.io/editing/contentEditable.html`](https://w3c.github.io/editing/contentEditable.html) but does not list it in its references
    * [`https://w3c.github.io/editing/execCommand.html`](https://w3c.github.io/editing/execCommand.html) but does not list it in its references
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/) links to [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/) but does not list it in its references
- [WebXR Device API](https://immersive-web.github.io/webxr/) links to [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/) but does not list it in its references
- [Worklets Level 1](https://drafts.css-houdini.org/worklets/) links to [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but does not list it in its references
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/) links to [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/) but does not list it in its references

=> 327 missing references for links found in 115 specifications

Any link to an external document from within a specification should trigger the creation of a corresponding entry in the references section.

Note Reffy only reports on links to "well-known" specs and ignores links to non-usual specs (e.g. PDF documents, etc.) for now.


## Reference URL is inconsistent with URL used in document links

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/) links to [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [Accelerometer](https://w3c.github.io/accelerometer/) links to [`https://www.w3.org/TR/screen-orientation/`](https://www.w3.org/TR/screen-orientation/) but related reference "SCREEN-ORIENTATION" uses URL [`https://w3c.github.io/screen-orientation/`](https://w3c.github.io/screen-orientation/)
- [Background Fetch](https://wicg.github.io/background-fetch/) links to [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/) but related reference "SERVICE-WORKERS-2" uses URL [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/)
- [Cascading Style Sheets Level 2 Revision 2 (CSS 2.2) Specification](https://drafts.csswg.org/css2/) links to [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but related reference "CSS3COLOR" uses URL [`http://www.w3.org/TR/2010/PR-css3-color-20101028/`](http://www.w3.org/TR/2010/PR-css3-color-20101028/)
- [Clipboard API and events](https://w3c.github.io/clipboard-apis/) links to:
    * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
    * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
- [Compositing and Blending Level 1](https://drafts.fxtf.org/compositing-1/) links to:
    * [`https://www.w3.org/TR/2003/REC-SVG11-20030114/`](https://www.w3.org/TR/2003/REC-SVG11-20030114/) but related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)
    * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/) but related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)
    * [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/) but related reference "2DCONTEXT2" uses URL [`https://www.w3.org/TR/2dcontext2/`](https://www.w3.org/TR/2dcontext2/)
- [Compositing and Blending Level 2](https://drafts.fxtf.org/compositing-2/) links to:
    * [`https://www.w3.org/TR/2dcontext2/`](https://www.w3.org/TR/2dcontext2/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
    * [`https://www.w3.org/TR/2003/REC-SVG11-20030114/`](https://www.w3.org/TR/2003/REC-SVG11-20030114/) but related reference "SVG" uses URL [`https://www.w3.org/TR/SVG/`](https://www.w3.org/TR/SVG/)
    * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/) but related reference "SVG" uses URL [`https://www.w3.org/TR/SVG/`](https://www.w3.org/TR/SVG/)
    * [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [Content Security Policy: Embedded Enforcement](https://w3c.github.io/webappsec-csp/embedded/) links to [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/) links to [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/) links to:
    * [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/) but related reference "MIXED-CONTENT" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
    * [`https://w3c.github.io/webauthn/`](https://w3c.github.io/webauthn/) but related reference "WEBAUTHN" uses URL [`https://www.w3.org/TR/webauthn/`](https://www.w3.org/TR/webauthn/)
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/) links to [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/) but related reference "WEB-ANIMATIONS-1" uses URL [`https://www.w3.org/TR/web-animations-1/`](https://www.w3.org/TR/web-animations-1/)
- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/) links to [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/) but related reference "WEB-ANIMATIONS" uses URL [`https://www.w3.org/TR/web-animations-1/`](https://www.w3.org/TR/web-animations-1/)
- [CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds/) links to:
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
    * [`https://www.w3.org/TR/2011/REC-CSS2-20110607/`](https://www.w3.org/TR/2011/REC-CSS2-20110607/) but related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2/`](https://www.w3.org/TR/CSS2/)
- [CSS Basic User Interface Module Level 4](https://drafts.csswg.org/css-ui-4/) links to [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [CSS Basic User Interface Module Level 4](https://drafts.csswg.org/css-ui/) links to [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align/) links to [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "CSS-WRITING-MODES-3" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
- [CSS Cascading and Inheritance Level 3](https://drafts.csswg.org/css-cascade-3/) links to:
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS3VAL" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
    * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
- [CSS Color Module Level 4](https://drafts.csswg.org/css-color/) links to [`https://www.w3.org/TR/2008/REC-WCAG20-20081211/`](https://www.w3.org/TR/2008/REC-WCAG20-20081211/) but related reference "WCAG20" uses URL [`https://www.w3.org/TR/WCAG20/`](https://www.w3.org/TR/WCAG20/)
- [CSS Exclusions Module Level 1](https://drafts.csswg.org/css-exclusions-1/) links to [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
- [CSS Fill and Stroke Module Level 3](https://drafts.fxtf.org/fill-stroke/) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
- [CSS Flexible Box Layout Module Level 1](https://drafts.csswg.org/css-flexbox/) links to [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
- [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts/) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES" uses URL [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/)
- [CSS Fragmentation Module Level 3](https://drafts.csswg.org/css-break/) links to:
    * [`https://www.w3.org/TR/2011/REC-CSS2-20110607/`](https://www.w3.org/TR/2011/REC-CSS2-20110607/) but related reference "CSS21" uses URL [`https://www.w3.org/TR/CSS2/`](https://www.w3.org/TR/CSS2/)
    * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
- [CSS Generated Content for Paged Media Module](https://drafts.csswg.org/css-gcpm/) links to [`https://www.w3.org/TR/2014/WD-dpub-latinreq-20140313/`](https://www.w3.org/TR/2014/WD-dpub-latinreq-20140313/) but related reference "DPUB-LATINREQ" uses URL [`https://www.w3.org/TR/dpub-latinreq/`](https://www.w3.org/TR/dpub-latinreq/)
- [CSS Grid Layout Module Level 1](https://drafts.csswg.org/css-grid/) links to [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
- [CSS Logical Properties and Values Level 1](https://drafts.csswg.org/css-logical/) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/) links to [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/) but related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)
- [CSS Paged Media Module Level 3](https://drafts.csswg.org/css-page-3/) links to:
    * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS3VAL" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS3-VALUES" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
- [CSS Regions Module Level 1](https://drafts.csswg.org/css-regions/) links to:
    * [`https://www.w3.org/TR/2011/REC-CSS2-20110607/`](https://www.w3.org/TR/2011/REC-CSS2-20110607/) but related reference "CSS21" uses URL [`https://www.w3.org/TR/CSS2/`](https://www.w3.org/TR/CSS2/)
    * [`https://www.w3.org/TR/2012/WD-dom-20120405/`](https://www.w3.org/TR/2012/WD-dom-20120405/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/) but related reference "CSSOM-VIEW" uses URL [`https://www.w3.org/TR/cssom-view-1/`](https://www.w3.org/TR/cssom-view-1/)
- [CSS Shapes Module Level 1](https://drafts.csswg.org/css-shapes/) links to:
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
    * [`https://www.w3.org/TR/2012/WD-css3-exclusions-20120503/`](https://www.w3.org/TR/2012/WD-css3-exclusions-20120503/) but related reference "CSS3-EXCLUSIONS" uses URL [`https://www.w3.org/TR/css3-exclusions/`](https://www.w3.org/TR/css3-exclusions/)
    * [`https://www.w3.org/TR/2011/WD-css3-exclusions-20111213/`](https://www.w3.org/TR/2011/WD-css3-exclusions-20111213/) but related reference "CSS3-EXCLUSIONS" uses URL [`https://www.w3.org/TR/css3-exclusions/`](https://www.w3.org/TR/css3-exclusions/)
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
- [CSS Text Decoration Module Level 3](https://drafts.csswg.org/css-text-decor-3/) links to:
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
    * [`https://www.w3.org/TR/1998/REC-CSS2-19980512`](https://www.w3.org/TR/1998/REC-CSS2-19980512) but related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2/`](https://www.w3.org/TR/CSS2/)
- [CSS Text Module Level 3](https://drafts.csswg.org/css-text-3/) links to:
    * [`https://www.w3.org/TR/css3-fonts/`](https://www.w3.org/TR/css3-fonts/) but related reference "CSS3-FONTS" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
    * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
- [CSS Transforms Module Level 1](https://drafts.csswg.org/css-transforms/) links to:
    * [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/) but related reference "CSSOM-VIEW" uses URL [`https://www.w3.org/TR/cssom-view-1/`](https://www.w3.org/TR/cssom-view-1/)
    * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/) but related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)
- [CSS Transitions](https://drafts.csswg.org/css-transitions/) links to [`https://w3c.github.io/dom/`](https://w3c.github.io/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/) links to [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/) but related reference "WEB-ANIMATIONS" uses URL [`https://www.w3.org/TR/web-animations-1/`](https://www.w3.org/TR/web-animations-1/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values-4/) links to:
    * [`https://www.w3.org/TR/css-syntax/`](https://www.w3.org/TR/css-syntax/) but related reference "CSS3SYN" uses URL [`https://www.w3.org/TR/css-syntax-3/`](https://www.w3.org/TR/css-syntax-3/)
    * [`https://www.w3.org/TR/css3-fonts/`](https://www.w3.org/TR/css3-fonts/) but related reference "CSS3-FONTS" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/) links to:
    * [`https://www.w3.org/TR/css-syntax/`](https://www.w3.org/TR/css-syntax/) but related reference "CSS3SYN" uses URL [`https://www.w3.org/TR/css-syntax-3/`](https://www.w3.org/TR/css-syntax-3/)
    * [`https://www.w3.org/TR/css3-fonts/`](https://www.w3.org/TR/css3-fonts/) but related reference "CSS3-FONTS" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
- [DeviceOrientation Event Specification](https://w3c.github.io/deviceorientation/spec-source-orientation.html) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML51" uses URL [`https://www.w3.org/TR/2016/REC-html51-20161101/`](https://www.w3.org/TR/2016/REC-html51-20161101/)
- [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/) links to [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM4" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) links to:
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/) but related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
- [Feature Policy](https://wicg.github.io/feature-policy/) links to [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP-3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [File and Directory Entries API](https://wicg.github.io/entries-api/) links to [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/) links to [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/) but related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)
- [Generic Sensor API](https://w3c.github.io/sensors/) links to:
    * [`https://www.w3.org/TR/page-visibility-2/`](https://www.w3.org/TR/page-visibility-2/) but related reference "PAGE-VISIBILITY" uses URL [`https://www.w3.org/TR/page-visibility/`](https://www.w3.org/TR/page-visibility/)
    * [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/) but related reference "PERMISSIONS" uses URL [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/)
    * [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/) but related reference "HR-TIME-2" uses URL [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/)
- [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/) links to:
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but related reference "HTML" uses URL [`http://www.w3.org/TR/html5/`](http://www.w3.org/TR/html5/)
    * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML" uses URL [`http://www.w3.org/TR/html5/`](http://www.w3.org/TR/html5/)
- [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/) links to [`https://www.w3.org/TR/2014/REC-html5-20141028/`](https://www.w3.org/TR/2014/REC-html5-20141028/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
- [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/) links to [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
- [Input Events Level 1](https://rawgit.com/w3c/input-events/v1/index.html) links to [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "UI-EVENTS" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
- [Long Tasks API 1](https://w3c.github.io/longtasks/) links to:
    * [`https://w3c.github.io/performance-timeline/`](https://w3c.github.io/performance-timeline/) but related reference "PERFORMANCE-TIMELINE-2" uses URL [`https://www.w3.org/TR/performance-timeline-2/`](https://www.w3.org/TR/performance-timeline-2/)
    * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/) but related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)
- [Magnetometer](https://w3c.github.io/magnetometer/) links to:
    * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/) but related reference "GENERIC-SENSOR" uses URL [`https://www.w3.org/TR/generic-sensor/`](https://www.w3.org/TR/generic-sensor/)
    * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
    * [`https://w3c.github.io/accelerometer/`](https://w3c.github.io/accelerometer/) but related reference "ACCELEROMETER" uses URL [`https://www.w3.org/TR/accelerometer/`](https://www.w3.org/TR/accelerometer/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/) links to [`https://w3c.github.io/media-source/`](https://w3c.github.io/media-source/) but related reference "MEDIA-SOURCE" uses URL [`https://www.w3.org/TR/media-source/`](https://www.w3.org/TR/media-source/)
- [Media Capture Depth Stream Extensions](https://w3c.github.io/mediacapture-depth/) links to [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
- [Media Capture from DOM Elements](https://w3c.github.io/mediacapture-fromelement/) links to:
    * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
    * [`https://www.w3.org/TR/2dcontext2/`](https://www.w3.org/TR/2dcontext2/) but related reference "2DCONTEXT" uses URL [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/)
- [Media Queries Level 4](https://drafts.csswg.org/mediaqueries-4/) links to:
    * [`https://www.w3.org/TR/2017/CR-mediaqueries-4-20170905/`](https://www.w3.org/TR/2017/CR-mediaqueries-4-20170905/) but related reference "MEDIAQ" uses URL [`https://www.w3.org/TR/mediaqueries-4/`](https://www.w3.org/TR/mediaqueries-4/)
    * [`https://www.w3.org/TR/2017/WD-mediaqueries-4-20170519/`](https://www.w3.org/TR/2017/WD-mediaqueries-4-20170519/) but related reference "MEDIAQ" uses URL [`https://www.w3.org/TR/mediaqueries-4/`](https://www.w3.org/TR/mediaqueries-4/)
- [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/) links to:
    * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
    * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
- [MediaStream Recording](https://w3c.github.io/mediacapture-record/) links to:
    * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
- [Metadata API for Media Resources 1.0](https://www.w3.org/TR/mediaont-api-1.0/) links to [`https://www.w3.org/TR/2012/REC-media-frags-20120925/`](https://www.w3.org/TR/2012/REC-media-frags-20120925/) but related reference "MEDIA-FRAGMENTS" uses URL [`http://www.w3.org/TR/media-frags/`](http://www.w3.org/TR/media-frags/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/) links to:
    * [`https://www.w3.org/TR/2008/REC-xml-20081126/`](https://www.w3.org/TR/2008/REC-xml-20081126/) but related reference "XML" uses URL [`https://www.w3.org/TR/xml/`](https://www.w3.org/TR/xml/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [Motion Path Module Level 1](https://drafts.fxtf.org/motion-1/) links to [`https://www.w3.org/TR/2016/WD-css-round-display-1-20160301/`](https://www.w3.org/TR/2016/WD-css-round-display-1-20160301/) but related reference "CSS-ROUND-DISPLAY-1" uses URL [`https://www.w3.org/TR/css-round-display-1/`](https://www.w3.org/TR/css-round-display-1/)
- [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/) links to [`https://www.w3.org/TR/service-workers/`](https://www.w3.org/TR/service-workers/) but related reference "SERVICE-WORKERS" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
- [Orientation Sensor](https://w3c.github.io/orientation-sensor/) links to:
    * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/) but related reference "GENERIC-SENSOR" uses URL [`https://www.w3.org/TR/generic-sensor/`](https://www.w3.org/TR/generic-sensor/)
    * [`https://w3c.github.io/accelerometer/`](https://w3c.github.io/accelerometer/) but related reference "ACCELEROMETER" uses URL [`https://www.w3.org/TR/accelerometer/`](https://www.w3.org/TR/accelerometer/)
    * [`https://w3c.github.io/gyroscope/`](https://w3c.github.io/gyroscope/) but related reference "GYROSCOPE" uses URL [`https://www.w3.org/TR/gyroscope/`](https://www.w3.org/TR/gyroscope/)
    * [`https://w3c.github.io/magnetometer/`](https://w3c.github.io/magnetometer/) but related reference "MAGNETOMETER" uses URL [`https://www.w3.org/TR/magnetometer/`](https://www.w3.org/TR/magnetometer/)
- [Paint Timing 1](https://w3c.github.io/paint-timing/) links to [`https://w3c.github.io/performance-timeline/`](https://w3c.github.io/performance-timeline/) but related reference "PERFORMANCE-TIMELINE-2" uses URL [`https://www.w3.org/TR/performance-timeline-2/`](https://www.w3.org/TR/performance-timeline-2/)
- [Payment Handler API](https://w3c.github.io/payment-handler/) links to [`https://w3c.github.io/payment-handler/`](https://w3c.github.io/payment-handler/) but related reference "payment-handler" uses URL [`https://www.w3.org/TR/payment-handler/`](https://www.w3.org/TR/payment-handler/)
- [Permissions](https://w3c.github.io/permissions/) links to:
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
    * [`https://w3c.github.io/webdriver/webdriver-spec.html`](https://w3c.github.io/webdriver/webdriver-spec.html) but related reference "WebDriver" uses URL [`https://www.w3.org/TR/webdriver/`](https://www.w3.org/TR/webdriver/)
- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/) links to [`https://w3c.github.io/remote-playback/`](https://w3c.github.io/remote-playback/) but related reference "Remote-Playback" uses URL [`https://www.w3.org/TR/remote-playback/`](https://www.w3.org/TR/remote-playback/)
- [Pointer Events](https://w3c.github.io/pointerevents/) links to [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [PointerEvents - Level 2 - Extensions](https://w3c.github.io/pointerevents/extension.html) links to [`https://w3c.github.io/pointerevents/`](https://w3c.github.io/pointerevents/) but related reference "pointerevents2" uses URL [`https://www.w3.org/TR/pointerevents2/`](https://www.w3.org/TR/pointerevents2/)
- [Presentation API](https://w3c.github.io/presentation-api/) links to:
    * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
    * [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/) but related reference "MIXED-CONTENT" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)
- [Push API](https://w3c.github.io/push-api/) links to:
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/service-workers/`](https://www.w3.org/TR/service-workers/) but related reference "SERVICE-WORKERS" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
    * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/) but related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/) links to:
    * [`https://www.w3.org/TR/2010/REC-wsc-ui-20100812/`](https://www.w3.org/TR/2010/REC-wsc-ui-20100812/) but related reference "WSC-UI" uses URL [`https://www.w3.org/TR/wsc-ui/`](https://www.w3.org/TR/wsc-ui/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
- [Remote Playback API](https://w3c.github.io/remote-playback/) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/) links to:
    * [`https://www.w3.org/TR/2008/REC-xml-20081126/`](https://www.w3.org/TR/2008/REC-xml-20081126/) but related reference "xml" uses URL [`https://www.w3.org/TR/xml`](https://www.w3.org/TR/xml)
    * [`https://www.w3.org/TR/2006/REC-xml-names-20060816/`](https://www.w3.org/TR/2006/REC-xml-names-20060816/) but related reference "xml-names" uses URL [`https://www.w3.org/TR/xml-names`](https://www.w3.org/TR/xml-names)
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "dom" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "css-values" uses URL [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/)
    * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
    * [`https://www.w3.org/TR/2011/REC-CSS2-20110607/`](https://www.w3.org/TR/2011/REC-CSS2-20110607/) but related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2`](https://www.w3.org/TR/CSS2)
    * [`https://www.w3.org/TR/compositing/`](https://www.w3.org/TR/compositing/) but related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
    * [`https://www.w3.org/TR/2015/CR-compositing-1-20150113/`](https://www.w3.org/TR/2015/CR-compositing-1-20150113/) but related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
    * [`https://www.w3.org/TR/2015/CR-compositing-1-20150113`](https://www.w3.org/TR/2015/CR-compositing-1-20150113) but related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
    * [`https://www.w3.org/TR/2012/WD-css3-values-20120308/`](https://www.w3.org/TR/2012/WD-css3-values-20120308/) but related reference "css-values" uses URL [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/)
    * [`https://www.w3.org/TR/2014/CR-html5-20140204/`](https://www.w3.org/TR/2014/CR-html5-20140204/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
    * [`https://www.w3.org/TR/2014/WD-dom-20140204/`](https://www.w3.org/TR/2014/WD-dom-20140204/) but related reference "dom" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/2012/WD-compositing-20120816/`](https://www.w3.org/TR/2012/WD-compositing-20120816/) but related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
    * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "css-writing-modes-3" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
    * [`https://www.w3.org/TR/2011/WD-css3-fonts-20111004/`](https://www.w3.org/TR/2011/WD-css3-fonts-20111004/) but related reference "css-fonts-3" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
    * [`https://www.w3.org/TR/2015/CR-css-ui-3-20150707/`](https://www.w3.org/TR/2015/CR-css-ui-3-20150707/) but related reference "css-ui-3" uses URL [`https://www.w3.org/TR/css-ui-3/`](https://www.w3.org/TR/css-ui-3/)
    * [`https://www.w3.org/TR/2001/REC-smil-animation-20010904/`](https://www.w3.org/TR/2001/REC-smil-animation-20010904/) but related reference "smil-animation" uses URL [`https://www.w3.org/TR/smil-animation/`](https://www.w3.org/TR/smil-animation/)
    * [`https://www.w3.org/TR/2001/REC-xlink-20010627/`](https://www.w3.org/TR/2001/REC-xlink-20010627/) but related reference "xlink" uses URL [`https://www.w3.org/TR/xlink/`](https://www.w3.org/TR/xlink/)
    * [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Views-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Views-20001113/) but related reference "DOM-Level-2-Views" uses URL [`https://www.w3.org/TR/DOM-Level-2-Views`](https://www.w3.org/TR/DOM-Level-2-Views)
    * [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/) but related reference "DOM-Level-2-Style" uses URL [`https://www.w3.org/TR/DOM-Level-2-Style/`](https://www.w3.org/TR/DOM-Level-2-Style/)
    * [`https://www.w3.org/TR/2012/WD-css3-animations-20120403/`](https://www.w3.org/TR/2012/WD-css3-animations-20120403/) but related reference "css3-animations" uses URL [`https://www.w3.org/TR/css3-animations/`](https://www.w3.org/TR/css3-animations/)
    * [`https://w3c.github.io/html/`](https://w3c.github.io/html/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
    * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "uievents" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
    * [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/) but related reference "web-animations-1" uses URL [`https://www.w3.org/TR/web-animations-1/`](https://www.w3.org/TR/web-animations-1/)
    * [`https://www.w3.org/TR/2015/NOTE-UAAG20-20151215/`](https://www.w3.org/TR/2015/NOTE-UAAG20-20151215/) but related reference "UAAG20" uses URL [`https://www.w3.org/TR/UAAG20/`](https://www.w3.org/TR/UAAG20/)
    * [`https://www.w3.org/TR/2008/REC-CSS2-20080411/`](https://www.w3.org/TR/2008/REC-CSS2-20080411/) but related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2`](https://www.w3.org/TR/CSS2)
- [Screen Capture](https://w3c.github.io/mediacapture-screen-share/) links to [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/) links to [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/) but related reference "WEB-ANIMATIONS-1" uses URL [`https://www.w3.org/TR/web-animations-1/`](https://www.w3.org/TR/web-animations-1/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) links to [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/) but related reference "MIX" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)
- [Selection API](https://w3c.github.io/selection-api/) links to:
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Selectors API Level 1](https://www.w3.org/TR/selectors-api/) links to [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/) but related reference "SELECT" uses URL [`http://www.w3.org/TR/2011/REC-css3-selectors-20110929/`](http://www.w3.org/TR/2011/REC-css3-selectors-20110929/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) links to:
    * [`https://w3c.github.io/webappsec-referrer-policy/`](https://w3c.github.io/webappsec-referrer-policy/) but related reference "REFERRER-POLICY" uses URL [`https://www.w3.org/TR/referrer-policy/`](https://www.w3.org/TR/referrer-policy/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP-3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [UI Events](https://w3c.github.io/uievents/) links to [`https://www.w3.org/TR/2014/WD-uievents-20140612/`](https://www.w3.org/TR/2014/WD-uievents-20140612/) but related reference "UIEVENTS" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html) links to [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/) but related reference "CSSOM-VIEW-1" uses URL [`http://www.w3.org/TR/cssom-view-1/`](http://www.w3.org/TR/cssom-view-1/)
- [Vibration API (Second Edition)](https://w3c.github.io/vibration/) links to [`https://w3c.github.io/page-visibility/`](https://w3c.github.io/page-visibility/) but related reference "PAGE-VISIBILITY-2" uses URL [`https://www.w3.org/TR/page-visibility-2/`](https://www.w3.org/TR/page-visibility-2/)
- [W3C DOM 4.1](https://w3c.github.io/dom/) links to:
    * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/) but related reference "HR-TIME" uses URL [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/)
    * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/) but related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
    * [`https://www.w3.org/TR/2017/WD-dom41-20170420/`](https://www.w3.org/TR/2017/WD-dom41-20170420/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/2017/WD-dom41-20170321/`](https://www.w3.org/TR/2017/WD-dom41-20170321/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/2015/REC-dom-20151119/`](https://www.w3.org/TR/2015/REC-dom-20151119/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Web Animations](https://w3c.github.io/web-animations/) links to [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/) but related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)
- [Web App Manifest](https://w3c.github.io/manifest/) links to [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but related reference "SERVICE-WORKERS-1" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/) links to:
    * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "MEDIACAPTURE-STREAMS" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
    * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/) but related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/) links to:
    * [`https://w3c.github.io/webappsec-credential-management/`](https://w3c.github.io/webappsec-credential-management/) but related reference "CREDENTIAL-MANAGEMENT-1" uses URL [`https://www.w3.org/TR/credential-management-1/`](https://www.w3.org/TR/credential-management-1/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/) but related reference "MIXED-CONTENT" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/) links to [`https://w3c.github.io/webappsec/specs/powerfulfeatures/`](https://w3c.github.io/webappsec/specs/powerfulfeatures/) but related reference "SECURE-CONTEXTS" uses URL [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/) links to:
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
- [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html) links to [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
- [Web IDL](https://heycam.github.io/webidl/) links to [`https://www.w3.org/TR/geolocation-API/`](https://www.w3.org/TR/geolocation-API/) but related reference "GEOLOCATION-API" uses URL [`http://dev.w3.org/geo/api/spec-source.html`](http://dev.w3.org/geo/api/spec-source.html)
- [Web MIDI API](http://webaudio.github.io/web-midi-api/) links to [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Web NFC API](https://w3c.github.io/web-nfc/) links to:
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
    * [`https://www.w3.org/TR/2011/WD-html5-20110113/`](https://www.w3.org/TR/2011/WD-html5-20110113/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM4" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/) but related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
    * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but related reference "permissions" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
- [Web Notifications](https://www.w3.org/TR/notifications/) links to:
    * [`https://notifications.spec.whatwg.org/`](https://notifications.spec.whatwg.org/) but related reference "WEBIDL" uses URL [`https://www.w3.org/TR/2015/PR-notifications-20150910/`](https://www.w3.org/TR/2015/PR-notifications-20150910/)
    * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/2014/REC-html5-20141028/`](https://www.w3.org/TR/2014/REC-html5-20141028/)
- [WebDriver](https://w3c.github.io/webdriver/) links to:
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
    * [`https://w3c.github.io/DOM-Parsing/`](https://w3c.github.io/DOM-Parsing/) but related reference "DOM-PARSING" uses URL [`https://www.w3.org/TR/DOM-Parsing/`](https://www.w3.org/TR/DOM-Parsing/)
    * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "UI-EVENTS" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but related reference "CANVAS" uses URL [`https://www.w3.org/TR/html5/scripting-1.html#the-canvas-element`](https://www.w3.org/TR/html5/scripting-1.html#the-canvas-element)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/) links to [`https://www.w3.org/TR/html52/`](https://www.w3.org/TR/html52/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [WebUSB API](https://wicg.github.io/webusb/) links to [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
- [WebXR Device API](https://immersive-web.github.io/webxr/) links to:
    * [`https://w3c.github.io/orientation-sensor/`](https://w3c.github.io/orientation-sensor/) but related reference "ORIENTATION-SENSOR" uses URL [`https://www.w3.org/TR/orientation-sensor/`](https://www.w3.org/TR/orientation-sensor/)
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)

=> 192 inconsistent references for links found in 102 specifications

Links in the body of a specification should be to the same document as that pointed to by the related reference in the References section. The specifications reported here use a different URL. For instance, they may use a link to the Editor's Draft but target the latest published version in the References section. There should be some consistency across the specification.
