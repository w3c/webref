% Specifications that define WebIDL content (W3C perspective)
% Reffy
% June 26, 2019

240 specifications were crawled in this report.


## Specifications that could not be rendered

Reffy could not fetch or render these specifications for some reason. This may happen when a network error occurred or when a specification uses an old version of ReSpec.

- [HTML 5.2](https://www.w3.org/TR/html52/): `Error: Crawl took too long Error: Crawl took too long
    at Timeout._ [as _onTimeout] (/home/dom/github.com/reffy/src/cli/crawl-specs.js:352:29)
    at ontimeout (timers.js:498:11)
    at tryOnTimeout (timers.js:323:5)
    at Timer.listOnTimeout (timers.js:290:5)`

=> 1 specification found


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
- [DeviceOrientation Event Specification](https://w3c.github.io/deviceorientation/spec-source-orientation.html)
- [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)

=> 3 specifications found

Basically all specifications have normative dependencies on some other specification. Reffy could not find any normative dependencies for the specifications mentioned above, which seems strange.


## Specifications without WebIDL definitions

- [CSS Parser API](https://wicg.github.io/CSS-Parser-API/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [DeviceOrientation Event Specification](https://w3c.github.io/deviceorientation/spec-source-orientation.html)
- [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
- [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/)
- [Metadata API for Media Resources 1.0](https://www.w3.org/TR/mediaont-api-1.0/)
- [The WebSocket API](https://www.w3.org/TR/websockets/)
- [URL Standard](https://url.spec.whatwg.org/)
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html)
- [W3C DOM 4.1](https://w3c.github.io/dom/)
- [Web Storage (Second Edition)](http://www.w3.org/TR/2016/REC-webstorage-20160419/)

=> 11 specifications found

Reffy was expecting to find IDL content in the specifications  listed here but could not extract any.


## Specifications without CSS definitions

- [Cascading Style Sheets Level 2 Revision 2 (CSS 2.2) Specification](http://dev.w3.org/csswg/css2/)
- [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/)
- [CSS Custom Properties for Cascading Variables Module Level 1](https://drafts.csswg.org/css-variables/)
- [CSS Easing Functions Level 1](https://drafts.csswg.org/css-easing/)
- [CSS Environment Variables Module Level 1](https://drafts.csswg.org/css-env-1/)
- [CSS Namespaces Module Level 3](https://drafts.csswg.org/css-namespaces/)
- [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/)
- [CSS Scoping Module Level 1](https://drafts.csswg.org/css-scoping/)
- [CSS Shadow Parts](https://drafts.csswg.org/css-shadow-parts-1/)
- [CSS Style Attributes](https://drafts.csswg.org/css-style-attr/)
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)
- [CSS TV Profile 1.0](https://drafts.csswg.org/css-tv/)
- [CSS Values and Units Module Level 3](https://drafts.csswg.org/css-values-3/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values-4/)
- [Media Queries Level 3](http://dev.w3.org/csswg/css3-mediaqueries/)
- [Non-element Selectors Module Level 1](https://drafts.csswg.org/selectors-nonelement/)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/)
- [Selectors Level 4](https://drafts.csswg.org/selectors/)

=> 19 specifications found

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


=> 0 specification found


## List of specifications with obsolete WebIDL constructs

- [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/)

=> 1 specification found

A typical example is the use of `[]` instead of `FrozenArray`.


## Specifications that use WebIDL but do not reference the WebIDL spec

- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/)
- [Selectors API Level 1](https://www.w3.org/TR/selectors-api/)
- [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/)
- [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
- [WebRTC DSCP Control API](https://w3c.github.io/webrtc-dscp-exp/)

=> 7 specifications found



## List of WebIDL names not defined in the specifications crawled

- `AbortSignal` used in [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/), [Fetch Standard](https://fetch.spec.whatwg.org/), [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/), [Wake Lock API](https://w3c.github.io/wake-lock/), [Web NFC API](https://w3c.github.io/web-nfc/)
- `AudioTrack` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `AudioTrackList` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `CSSOMString` used in [CSS Animations Level 1](https://drafts.csswg.org/css-animations/), [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/), [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/), [CSS Counter Styles Level 3](https://drafts.csswg.org/css-counter-styles/), [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/), [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/), [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/), [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/), [CSS Regions Module Level 1](https://drafts.csswg.org/css-regions/), [CSS Transitions](https://drafts.csswg.org/css-transitions/), [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/), [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- `DOMMatrix` used in [Orientation Sensor](https://w3c.github.io/orientation-sensor/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- `DOMMatrix2DInit` used in [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- `DOMPoint` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [SVG Markers](https://svgwg.org/specs/markers/)
- `DOMPointInit` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- `DOMPointReadOnly` used in [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [SVG Markers](https://svgwg.org/specs/markers/), [WebXR Device API](https://immersive-web.github.io/webxr/)
- `DOMQuad` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- `DOMQuadInit` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- `DOMRect` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- `DOMRectInit` used in [Intersection Observer](https://w3c.github.io/IntersectionObserver/)
- `DOMRectList` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- `DOMRectReadOnly` used in [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [Intersection Observer](https://w3c.github.io/IntersectionObserver/), [Resize Observer](https://drafts.csswg.org/resize-observer/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- `DOMStringList` used in [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/)
- `DOMTokenList` used in [CSS Shadow Parts](https://drafts.csswg.org/css-shadow-parts-1/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- `DataTransfer` used in [Clipboard API and events](https://w3c.github.io/clipboard-apis/), [Input Events Level 1](https://cdn.staticaly.com/gh/w3c/input-events/v1/index.html)
- `DataTransferItem` used in [File and Directory Entries API](https://wicg.github.io/entries-api/)
- `Date` used in [Reporting API 1](https://w3c.github.io/reporting/)
- `DedicatedWorker` used in [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
- `Dictionary` used in [Web NFC API](https://w3c.github.io/web-nfc/)
- `Document` used in [Box Tree API Level 1](https://drafts.css-houdini.org/box-tree-api/), [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/), [CSS Regions Module Level 1](https://drafts.csswg.org/css-regions/), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/), [Feature Policy](https://w3c.github.io/webappsec-feature-policy/), [Font Metrics API Level 1](https://drafts.css-houdini.org/font-metrics-api/), [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/), [Page Visibility Level 2](https://w3c.github.io/page-visibility/), [Picture-in-Picture](https://wicg.github.io/picture-in-picture/), [Pointer Lock 2.0](https://w3c.github.io/pointerlock/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Selection API](https://w3c.github.io/selection-api/), [Selectors API Level 1](https://www.w3.org/TR/selectors-api/), [Web Animations](https://drafts.csswg.org/web-animations-1/), [Web Speech API](https://w3c.github.io/speech-api/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `DocumentFragment` used in [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/), [Selectors API Level 1](https://www.w3.org/TR/selectors-api/), [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)
- `DocumentOrShadowRoot` used in [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/), [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/), [Picture-in-Picture](https://wicg.github.io/picture-in-picture/), [Pointer Lock 2.0](https://w3c.github.io/pointerlock/), [Web Animations](https://drafts.csswg.org/web-animations-1/)
- `Element` used in [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://rawgit.com/w3c/aria/master/), [Box Tree API Level 1](https://drafts.css-houdini.org/box-tree-api/), [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/), [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/), [CSS Shadow Parts](https://drafts.csswg.org/css-shadow-parts-1/), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/), [Font Metrics API Level 1](https://drafts.css-houdini.org/font-metrics-api/), [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/), [Intersection Observer](https://w3c.github.io/IntersectionObserver/), [Picture-in-Picture](https://wicg.github.io/picture-in-picture/), [Pointer Events](https://w3c.github.io/pointerevents/), [Pointer Lock 2.0](https://w3c.github.io/pointerlock/), [Resize Observer](https://drafts.csswg.org/resize-observer/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scroll-linked Animations](https://wicg.github.io/scroll-animations/), [Selectors API Level 1](https://www.w3.org/TR/selectors-api/), [Web Animations](https://drafts.csswg.org/web-animations-1/)
- `EventHandler` used in [Background Fetch](https://wicg.github.io/background-fetch/), [Battery Status API](https://w3c.github.io/battery/), [Compatibility Standard](https://compat.spec.whatwg.org/), [Cookie Store API](https://wicg.github.io/cookie-store/), [CSS Animations Level 1](https://drafts.csswg.org/css-animations/), [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/), [CSS Transitions](https://drafts.csswg.org/css-transitions/), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/), [File API](https://w3c.github.io/FileAPI/), [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/), [Generic Sensor API](https://w3c.github.io/sensors/), [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Media Capabilities](https://wicg.github.io/media-capabilities/), [Media Capture and Streams](https://w3c.github.io/mediacapture-main/), [Media Source Extensions™](https://w3c.github.io/media-source/), [MediaStream Recording](https://w3c.github.io/mediacapture-record/), [Network Information API](https://wicg.github.io/netinfo/), [Page Visibility Level 2](https://w3c.github.io/page-visibility/), [Payment Handler API](https://w3c.github.io/payment-handler/), [Payment Request API](https://w3c.github.io/payment-request/), [Permissions](https://w3c.github.io/permissions/), [Picture-in-Picture](https://wicg.github.io/picture-in-picture/), [Pointer Events](https://w3c.github.io/pointerevents/), [Pointer Lock 2.0](https://w3c.github.io/pointerlock/), [Presentation API](https://w3c.github.io/presentation-api/), [Push API](https://w3c.github.io/push-api/), [Remote Playback API](https://w3c.github.io/remote-playback/), [Resource Timing Level 2](https://w3c.github.io/resource-timing/), [Selection API](https://w3c.github.io/selection-api/), [Server-Sent Events](http://www.w3.org/TR/2015/REC-eventsource-20150203/), [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/), [The Screen Orientation API](https://w3c.github.io/screen-orientation/), [Touch Events - Level 2](https://w3c.github.io/touch-events/), [Web Animations](https://drafts.csswg.org/web-animations-1/), [Web App Manifest](https://w3c.github.io/manifest/), [Web Audio API](https://webaudio.github.io/web-audio-api/), [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/), [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/), [Web MIDI API](http://webaudio.github.io/web-midi-api/), [Web NFC API](https://w3c.github.io/web-nfc/), [Web Notifications](https://www.w3.org/TR/notifications/), [Web Speech API](https://w3c.github.io/speech-api/), [Web Workers](https://html.spec.whatwg.org/multipage/workers.html), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebUSB API](https://wicg.github.io/webusb/), [WebXR Device API](https://immersive-web.github.io/webxr/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `EventListener` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- `EventTarget` used in [Touch Events - Level 2](https://w3c.github.io/touch-events/), [UI Events](https://w3c.github.io/uievents/)
- `GlobalEventHandlers` used in [CSS Animations Level 1](https://drafts.csswg.org/css-animations/), [CSS Transitions](https://drafts.csswg.org/css-transitions/), [Pointer Events](https://w3c.github.io/pointerevents/), [Selection API](https://w3c.github.io/selection-api/), [Touch Events - Level 2](https://w3c.github.io/touch-events/)
- `HTMLBodyElement` used in [Compatibility Standard](https://compat.spec.whatwg.org/)
- `HTMLCanvasElement` used in [Media Capture from DOM Elements](https://w3c.github.io/mediacapture-fromelement/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- `HTMLElement` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- `HTMLFormElement` used in [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/)
- `HTMLIFrameElement` used in [Content Security Policy: Embedded Enforcement](https://w3c.github.io/webappsec-cspee/), [Feature Policy](https://w3c.github.io/webappsec-feature-policy/)
- `HTMLImageElement` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- `HTMLInputElement` used in [File and Directory Entries API](https://wicg.github.io/entries-api/), [HTML Media Capture](https://w3c.github.io/html-media-capture/)
- `HTMLLinkElement` used in [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/)
- `HTMLMediaElement` used in [Audio Output Devices API](https://w3c.github.io/mediacapture-output/), [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/), [Media Capture from DOM Elements](https://w3c.github.io/mediacapture-fromelement/), [Remote Playback API](https://w3c.github.io/remote-playback/), [Web Audio API](https://webaudio.github.io/web-audio-api/)
- `HTMLScriptElement` used in [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/)
- `HTMLVideoElement` used in [Picture-in-Picture](https://wicg.github.io/picture-in-picture/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- `ImageBitmap` used in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- `ImageBitmapSource` used in [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
- `ImageData` used in [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- `LayoutWorklet` used in [CSS Layout API Level 1](https://drafts.css-houdini.org/css-layout-api-1/)
- `Navigator` used in [Battery Status API](https://w3c.github.io/battery/), [Beacon](https://w3c.github.io/beacon/), [Clipboard API and events](https://w3c.github.io/clipboard-apis/), [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/), [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/), [Gamepad](https://w3c.github.io/gamepad/), [Geolocation API Specification 2nd Edition](https://www.w3.org/TR/geolocation-API/), [Keyboard Lock](https://wicg.github.io/keyboard-lock/), [Keyboard Map](https://wicg.github.io/keyboard-map/), [Media Capabilities](https://wicg.github.io/media-capabilities/), [Media Capture and Streams](https://w3c.github.io/mediacapture-main/), [Media Session Standard](https://wicg.github.io/mediasession/), [Permissions](https://w3c.github.io/permissions/), [Pointer Events](https://w3c.github.io/pointerevents/), [Presentation API](https://w3c.github.io/presentation-api/), [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/), [Vibration API (Second Edition)](https://w3c.github.io/vibration/), [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/), [Web MIDI API](http://webaudio.github.io/web-midi-api/), [Web Share API - Level 1](https://wicg.github.io/web-share/), [WebUSB API](https://wicg.github.io/webusb/), [WebXR Device API](https://immersive-web.github.io/webxr/)
- `Node` used in [Box Tree API Level 1](https://drafts.css-houdini.org/box-tree-api/), [CSS Regions Module Level 1](https://drafts.csswg.org/css-regions/), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/), [Selection API](https://w3c.github.io/selection-api/), [Static Range](https://w3c.github.io/staticrange/)
- `NodeList` used in [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Selectors API Level 1](https://www.w3.org/TR/selectors-api/)
- `OffscreenCanvas` used in [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- `OnErrorEventHandler` used in [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
- `PaintWorklet` used in [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/)
- `PermissionName` used in [Permissions](https://w3c.github.io/permissions/)
- `PostMessageOptions` used in [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
- `ProcessingInstruction` used in [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- `Range` used in [CSS Regions Module Level 1](https://drafts.csswg.org/css-regions/), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/), [Selection API](https://w3c.github.io/selection-api/), [Static Range](https://w3c.github.io/staticrange/)
- `ReadableStream` used in [Encoding Standard](https://encoding.spec.whatwg.org/), [Fetch Standard](https://fetch.spec.whatwg.org/), [File API](https://w3c.github.io/FileAPI/)
- `StylePropertyMapReadOnly` used in [CSS Layout API Level 1](https://drafts.css-houdini.org/css-layout-api-1/), [Font Metrics API Level 1](https://drafts.css-houdini.org/font-metrics-api/)
- `Text` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- `TextTrack` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `TextTrackList` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `TimeRanges` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `Transferable` used in [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/)
- `URL` used in [File API](https://w3c.github.io/FileAPI/), [Media Source Extensions™](https://w3c.github.io/media-source/)
- `URLSearchParams` used in [Fetch Standard](https://fetch.spec.whatwg.org/)
- `VideoTrack` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `VideoTrackList` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `Window` used in [Accelerometer](https://w3c.github.io/accelerometer/), [Ambient Light Sensor](https://w3c.github.io/ambient-light/), [Battery Status API](https://w3c.github.io/battery/), [Clipboard API and events](https://w3c.github.io/clipboard-apis/), [Compatibility Standard](https://compat.spec.whatwg.org/), [Cookie Store API](https://wicg.github.io/cookie-store/), [Cooperative Scheduling of Background Tasks](https://w3c.github.io/requestidlecallback/), [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/), [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/), [CSS Animations Level 1](https://drafts.csswg.org/css-animations/), [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/), [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/), [CSS Counter Styles Level 3](https://drafts.csswg.org/css-counter-styles/), [CSS Device Adaptation Module Level 1](https://drafts.csswg.org/css-device-adapt/), [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/), [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/), [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/), [CSS Regions Module Level 1](https://drafts.csswg.org/css-regions/), [CSS Transitions](https://drafts.csswg.org/css-transitions/), [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/), [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/), [Event Timing API](https://wicg.github.io/event-timing/), [Gamepad](https://w3c.github.io/gamepad/), [Gyroscope](https://w3c.github.io/gyroscope/), [Intersection Observer](https://w3c.github.io/IntersectionObserver/), [Keyboard Lock](https://wicg.github.io/keyboard-lock/), [Keyboard Map](https://wicg.github.io/keyboard-map/), [Magnetometer](https://w3c.github.io/magnetometer/), [Media Capture and Streams](https://w3c.github.io/mediacapture-main/), [Media Capture from DOM Elements](https://w3c.github.io/mediacapture-fromelement/), [Media Session Standard](https://wicg.github.io/mediasession/), [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/), [MediaStream Recording](https://w3c.github.io/mediacapture-record/), [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/), [Orientation Sensor](https://w3c.github.io/orientation-sensor/), [Payment Request API](https://w3c.github.io/payment-request/), [Picture-in-Picture](https://wicg.github.io/picture-in-picture/), [Pointer Events](https://w3c.github.io/pointerevents/), [Presentation API](https://w3c.github.io/presentation-api/), [Proximity Sensor](https://w3c.github.io/proximity/), [Remote Playback API](https://w3c.github.io/remote-playback/), [Resize Observer](https://drafts.csswg.org/resize-observer/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scroll-linked Animations](https://wicg.github.io/scroll-animations/), [Selection API](https://w3c.github.io/selection-api/), [Static Range](https://w3c.github.io/staticrange/), [The Screen Orientation API](https://w3c.github.io/screen-orientation/), [Touch Events - Level 2](https://w3c.github.io/touch-events/), [UI Events](https://w3c.github.io/uievents/), [Web Animations](https://drafts.csswg.org/web-animations-1/), [Web App Manifest](https://w3c.github.io/manifest/), [Web Audio API](https://webaudio.github.io/web-audio-api/), [Web Authentication: An API for accessing Public Key Credentials - Level 2](https://w3c.github.io/webauthn/), [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/), [Web NFC API](https://w3c.github.io/web-nfc/), [Web Speech API](https://w3c.github.io/speech-api/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/), [WebXR Device API](https://immersive-web.github.io/webxr/)
- `WindowOrWorkerGlobalScope` used in [Fetch Standard](https://fetch.spec.whatwg.org/), [High Resolution Time Level 2](https://w3c.github.io/hr-time/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/), [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html)
- `WindowProxy` used in [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/)
- `WritableStream` used in [Encoding Standard](https://encoding.spec.whatwg.org/)
- `[object Object]` used in [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/), [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/), [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/), [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/), [Accelerometer](https://w3c.github.io/accelerometer/), [Accelerometer](https://w3c.github.io/accelerometer/), [Accelerometer](https://w3c.github.io/accelerometer/), [Accelerometer](https://w3c.github.io/accelerometer/), [Accelerometer](https://w3c.github.io/accelerometer/), [Accelerometer](https://w3c.github.io/accelerometer/), [Ambient Light Sensor](https://w3c.github.io/ambient-light/), [Background Fetch](https://wicg.github.io/background-fetch/), [Background Fetch](https://wicg.github.io/background-fetch/), [Background Fetch](https://wicg.github.io/background-fetch/), [Background Fetch](https://wicg.github.io/background-fetch/), [Background Fetch](https://wicg.github.io/background-fetch/), [Background Fetch](https://wicg.github.io/background-fetch/), [Background Fetch](https://wicg.github.io/background-fetch/), [Background Fetch](https://wicg.github.io/background-fetch/), [Background Fetch](https://wicg.github.io/background-fetch/), [Background Fetch](https://wicg.github.io/background-fetch/), [Background Fetch](https://wicg.github.io/background-fetch/), [Battery Status API](https://w3c.github.io/battery/), [Clipboard API and events](https://w3c.github.io/clipboard-apis/), [Clipboard API and events](https://w3c.github.io/clipboard-apis/), [Clipboard API and events](https://w3c.github.io/clipboard-apis/), [Clipboard API and events](https://w3c.github.io/clipboard-apis/), [Console Standard](https://console.spec.whatwg.org/), [Console Standard](https://console.spec.whatwg.org/), [Console Standard](https://console.spec.whatwg.org/), [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/), [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/), [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/), [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/), [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/), [Cookie Store API](https://wicg.github.io/cookie-store/), [Cookie Store API](https://wicg.github.io/cookie-store/), [Cookie Store API](https://wicg.github.io/cookie-store/), [Cookie Store API](https://wicg.github.io/cookie-store/), [Cookie Store API](https://wicg.github.io/cookie-store/), [Cookie Store API](https://wicg.github.io/cookie-store/), [Cookie Store API](https://wicg.github.io/cookie-store/), [Cookie Store API](https://wicg.github.io/cookie-store/), [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/), [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/), [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/), [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/), [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/), [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/), [CSS Animations Level 1](https://drafts.csswg.org/css-animations/), [CSS Animations Level 1](https://drafts.csswg.org/css-animations/), [CSS Animations Level 1](https://drafts.csswg.org/css-animations/), [CSS Animations Level 1](https://drafts.csswg.org/css-animations/), [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/), [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/), [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/), [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/), [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/), [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/), [CSS Counter Styles Level 3](https://drafts.csswg.org/css-counter-styles/), [CSS Device Adaptation Module Level 1](https://drafts.csswg.org/css-device-adapt/), [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/), [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/), [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/), [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/), [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/), [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/), [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/), [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/), [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/), [CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts/), [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/), [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/), [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/), [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/), [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/), [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/), [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/), [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/), [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/), [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/), [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/), [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/), [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/), [CSS Regions Module Level 1](https://drafts.csswg.org/css-regions/), [CSS Transitions](https://drafts.csswg.org/css-transitions/), [CSS Transitions](https://drafts.csswg.org/css-transitions/), [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [Encoding Standard](https://encoding.spec.whatwg.org/), [Encoding Standard](https://encoding.spec.whatwg.org/), [Encoding Standard](https://encoding.spec.whatwg.org/), [Encoding Standard](https://encoding.spec.whatwg.org/), [Encoding Standard](https://encoding.spec.whatwg.org/), [Encoding Standard](https://encoding.spec.whatwg.org/), [Encoding Standard](https://encoding.spec.whatwg.org/), [Encoding Standard](https://encoding.spec.whatwg.org/), [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/), [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/), [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/), [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/), [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/), [Event Timing API](https://wicg.github.io/event-timing/), [Feature Policy](https://w3c.github.io/webappsec-feature-policy/), [Fetch Standard](https://fetch.spec.whatwg.org/), [Fetch Standard](https://fetch.spec.whatwg.org/), [Fetch Standard](https://fetch.spec.whatwg.org/), [Fetch Standard](https://fetch.spec.whatwg.org/), [Fetch Standard](https://fetch.spec.whatwg.org/), [Fetch Standard](https://fetch.spec.whatwg.org/), [File and Directory Entries API](https://wicg.github.io/entries-api/), [File and Directory Entries API](https://wicg.github.io/entries-api/), [File API](https://w3c.github.io/FileAPI/), [File API](https://w3c.github.io/FileAPI/), [File API](https://w3c.github.io/FileAPI/), [File API](https://w3c.github.io/FileAPI/), [File API](https://w3c.github.io/FileAPI/), [File API](https://w3c.github.io/FileAPI/), [File API](https://w3c.github.io/FileAPI/), [File API](https://w3c.github.io/FileAPI/), [File API](https://w3c.github.io/FileAPI/), [File API](https://w3c.github.io/FileAPI/), [File API](https://w3c.github.io/FileAPI/), [File API](https://w3c.github.io/FileAPI/), [File API](https://w3c.github.io/FileAPI/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/), [Gamepad](https://w3c.github.io/gamepad/), [Gamepad](https://w3c.github.io/gamepad/), [Generic Sensor API](https://w3c.github.io/sensors/), [Generic Sensor API](https://w3c.github.io/sensors/), [Generic Sensor API](https://w3c.github.io/sensors/), [Generic Sensor API](https://w3c.github.io/sensors/), [Generic Sensor API](https://w3c.github.io/sensors/), [Generic Sensor API](https://w3c.github.io/sensors/), [Generic Sensor API](https://w3c.github.io/sensors/), [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/), [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/), [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/), [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/), [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/), [Gyroscope](https://w3c.github.io/gyroscope/), [Gyroscope](https://w3c.github.io/gyroscope/), [High Resolution Time Level 2](https://w3c.github.io/hr-time/), [High Resolution Time Level 2](https://w3c.github.io/hr-time/), [High Resolution Time Level 2](https://w3c.github.io/hr-time/), [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/), [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/), [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/), [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/), [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/), [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/), [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/), [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/), [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Long Tasks API 1](https://w3c.github.io/longtasks/), [Long Tasks API 1](https://w3c.github.io/longtasks/), [Magnetometer](https://w3c.github.io/magnetometer/), [Magnetometer](https://w3c.github.io/magnetometer/), [Magnetometer](https://w3c.github.io/magnetometer/), [Media Capabilities](https://wicg.github.io/media-capabilities/), [Media Capabilities](https://wicg.github.io/media-capabilities/), [Media Capabilities](https://wicg.github.io/media-capabilities/), [Media Capabilities](https://wicg.github.io/media-capabilities/), [Media Capabilities](https://wicg.github.io/media-capabilities/), [Media Capture and Streams](https://w3c.github.io/mediacapture-main/), [Media Capture and Streams](https://w3c.github.io/mediacapture-main/), [Media Capture and Streams](https://w3c.github.io/mediacapture-main/), [Media Capture and Streams](https://w3c.github.io/mediacapture-main/), [Media Capture and Streams](https://w3c.github.io/mediacapture-main/), [Media Capture and Streams](https://w3c.github.io/mediacapture-main/), [Media Capture and Streams](https://w3c.github.io/mediacapture-main/), [Media Capture and Streams](https://w3c.github.io/mediacapture-main/), [Media Capture and Streams](https://w3c.github.io/mediacapture-main/), [Media Capture and Streams](https://w3c.github.io/mediacapture-main/), [Media Capture from DOM Elements](https://w3c.github.io/mediacapture-fromelement/), [Media Session Standard](https://wicg.github.io/mediasession/), [Media Session Standard](https://wicg.github.io/mediasession/), [Media Source Extensions™](https://w3c.github.io/media-source/), [Media Source Extensions™](https://w3c.github.io/media-source/), [Media Source Extensions™](https://w3c.github.io/media-source/), [MediaStream Recording](https://w3c.github.io/mediacapture-record/), [MediaStream Recording](https://w3c.github.io/mediacapture-record/), [MediaStream Recording](https://w3c.github.io/mediacapture-record/), [MediaStream Recording](https://w3c.github.io/mediacapture-record/), [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/), [Network Information API](https://wicg.github.io/netinfo/), [Network Information API](https://wicg.github.io/netinfo/), [Network Information API](https://wicg.github.io/netinfo/), [Orientation Sensor](https://w3c.github.io/orientation-sensor/), [Orientation Sensor](https://w3c.github.io/orientation-sensor/), [Orientation Sensor](https://w3c.github.io/orientation-sensor/), [Orientation Sensor](https://w3c.github.io/orientation-sensor/), [Orientation Sensor](https://w3c.github.io/orientation-sensor/), [Paint Timing 1](https://w3c.github.io/paint-timing/), [Payment Handler API](https://w3c.github.io/payment-handler/), [Payment Handler API](https://w3c.github.io/payment-handler/), [Payment Handler API](https://w3c.github.io/payment-handler/), [Payment Handler API](https://w3c.github.io/payment-handler/), [Payment Handler API](https://w3c.github.io/payment-handler/), [Payment Handler API](https://w3c.github.io/payment-handler/), [Payment Handler API](https://w3c.github.io/payment-handler/), [Payment Handler API](https://w3c.github.io/payment-handler/), [Payment Request API](https://w3c.github.io/payment-request/), [Payment Request API](https://w3c.github.io/payment-request/), [Payment Request API](https://w3c.github.io/payment-request/), [Payment Request API](https://w3c.github.io/payment-request/), [Payment Request API](https://w3c.github.io/payment-request/), [Payment Request API](https://w3c.github.io/payment-request/), [Payment Request API](https://w3c.github.io/payment-request/), [Payment Request API](https://w3c.github.io/payment-request/), [Payment Request API](https://w3c.github.io/payment-request/), [Payment Request API](https://w3c.github.io/payment-request/), [Payment Request API](https://w3c.github.io/payment-request/), [Performance Timeline Level 2](https://w3c.github.io/performance-timeline/), [Performance Timeline Level 2](https://w3c.github.io/performance-timeline/), [Performance Timeline Level 2](https://w3c.github.io/performance-timeline/), [Performance Timeline Level 2](https://w3c.github.io/performance-timeline/), [Performance Timeline Level 2](https://w3c.github.io/performance-timeline/), [Performance Timeline Level 2](https://w3c.github.io/performance-timeline/), [Permissions](https://w3c.github.io/permissions/), [Permissions](https://w3c.github.io/permissions/), [Permissions](https://w3c.github.io/permissions/), [Permissions](https://w3c.github.io/permissions/), [Permissions](https://w3c.github.io/permissions/), [Permissions](https://w3c.github.io/permissions/), [Permissions](https://w3c.github.io/permissions/), [Permissions](https://w3c.github.io/permissions/), [Picture-in-Picture](https://wicg.github.io/picture-in-picture/), [Picture-in-Picture](https://wicg.github.io/picture-in-picture/), [Picture-in-Picture](https://wicg.github.io/picture-in-picture/), [Pointer Events](https://w3c.github.io/pointerevents/), [Pointer Events](https://w3c.github.io/pointerevents/), [Presentation API](https://w3c.github.io/presentation-api/), [Presentation API](https://w3c.github.io/presentation-api/), [Presentation API](https://w3c.github.io/presentation-api/), [Presentation API](https://w3c.github.io/presentation-api/), [Presentation API](https://w3c.github.io/presentation-api/), [Presentation API](https://w3c.github.io/presentation-api/), [Presentation API](https://w3c.github.io/presentation-api/), [Presentation API](https://w3c.github.io/presentation-api/), [Progress Events](http://www.w3.org/TR/2014/REC-progress-events-20140211/), [Progress Events](http://www.w3.org/TR/2014/REC-progress-events-20140211/), [Proximity Sensor](https://w3c.github.io/proximity/), [Push API](https://w3c.github.io/push-api/), [Push API](https://w3c.github.io/push-api/), [Push API](https://w3c.github.io/push-api/), [Push API](https://w3c.github.io/push-api/), [Push API](https://w3c.github.io/push-api/), [Push API](https://w3c.github.io/push-api/), [Push API](https://w3c.github.io/push-api/), [Push API](https://w3c.github.io/push-api/), [Push API](https://w3c.github.io/push-api/), [Push API](https://w3c.github.io/push-api/), [Remote Playback API](https://w3c.github.io/remote-playback/), [Reporting API 1](https://w3c.github.io/reporting/), [Reporting API 1](https://w3c.github.io/reporting/), [Reporting API 1](https://w3c.github.io/reporting/), [Resize Observer](https://drafts.csswg.org/resize-observer/), [Resource Timing Level 2](https://w3c.github.io/resource-timing/), [Resource Timing Level 2](https://w3c.github.io/resource-timing/), [Resource Timing Level 2](https://w3c.github.io/resource-timing/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Scroll-linked Animations](https://wicg.github.io/scroll-animations/), [Server Timing](https://w3c.github.io/server-timing/), [Server Timing](https://w3c.github.io/server-timing/), [Server-Sent Events](http://www.w3.org/TR/2015/REC-eventsource-20150203/), [Storage Standard](https://storage.spec.whatwg.org/), [Storage Standard](https://storage.spec.whatwg.org/), [SVG Markers](https://svgwg.org/specs/markers/), [The Screen Orientation API](https://w3c.github.io/screen-orientation/), [Touch Events - Level 2](https://w3c.github.io/touch-events/), [Touch Events - Level 2](https://w3c.github.io/touch-events/), [UI Events](https://w3c.github.io/uievents/), [UI Events](https://w3c.github.io/uievents/), [UI Events](https://w3c.github.io/uievents/), [UI Events](https://w3c.github.io/uievents/), [UI Events](https://w3c.github.io/uievents/), [UI Events](https://w3c.github.io/uievents/), [UI Events](https://w3c.github.io/uievents/), [UI Events](https://w3c.github.io/uievents/), [UI Events](https://w3c.github.io/uievents/), [UI Events](https://w3c.github.io/uievents/), [UI Events](https://w3c.github.io/uievents/), [UI Events](https://w3c.github.io/uievents/), [UI Events](https://w3c.github.io/uievents/), [UI Events](https://w3c.github.io/uievents/), [UI Events](https://w3c.github.io/uievents/), [User Timing Level 3](https://w3c.github.io/user-timing/), [User Timing Level 3](https://w3c.github.io/user-timing/), [User Timing Level 3](https://w3c.github.io/user-timing/), [User Timing Level 3](https://w3c.github.io/user-timing/), [User Timing Level 3](https://w3c.github.io/user-timing/), [User Timing Level 3](https://w3c.github.io/user-timing/), [Wake Lock API](https://w3c.github.io/wake-lock/), [Wake Lock API](https://w3c.github.io/wake-lock/), [Wake Lock API](https://w3c.github.io/wake-lock/), [Web Animations](https://drafts.csswg.org/web-animations-1/), [Web Animations](https://drafts.csswg.org/web-animations-1/), [Web Animations](https://drafts.csswg.org/web-animations-1/), [Web Animations](https://drafts.csswg.org/web-animations-1/), [Web Animations](https://drafts.csswg.org/web-animations-1/), [Web Animations](https://drafts.csswg.org/web-animations-1/), [Web Animations](https://drafts.csswg.org/web-animations-1/), [Web Animations](https://drafts.csswg.org/web-animations-1/), [Web App Manifest](https://w3c.github.io/manifest/), [Web Authentication: An API for accessing Public Key Credentials - Level 2](https://w3c.github.io/webauthn/), [Web Authentication: An API for accessing Public Key Credentials - Level 2](https://w3c.github.io/webauthn/), [Web Authentication: An API for accessing Public Key Credentials - Level 2](https://w3c.github.io/webauthn/), [Web Authentication: An API for accessing Public Key Credentials - Level 2](https://w3c.github.io/webauthn/), [Web Authentication: An API for accessing Public Key Credentials - Level 2](https://w3c.github.io/webauthn/), [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/), [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/), [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/), [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/), [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/), [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/), [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/), [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/), [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/), [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/), [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/), [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/), [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/), [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web IDL](https://heycam.github.io/webidl/), [Web IDL](https://heycam.github.io/webidl/), [Web MIDI API](http://webaudio.github.io/web-midi-api/), [Web MIDI API](http://webaudio.github.io/web-midi-api/), [Web MIDI API](http://webaudio.github.io/web-midi-api/), [Web MIDI API](http://webaudio.github.io/web-midi-api/), [Web MIDI API](http://webaudio.github.io/web-midi-api/), [Web MIDI API](http://webaudio.github.io/web-midi-api/), [Web MIDI API](http://webaudio.github.io/web-midi-api/), [Web MIDI API](http://webaudio.github.io/web-midi-api/), [Web NFC API](https://w3c.github.io/web-nfc/), [Web NFC API](https://w3c.github.io/web-nfc/), [Web NFC API](https://w3c.github.io/web-nfc/), [Web NFC API](https://w3c.github.io/web-nfc/), [Web NFC API](https://w3c.github.io/web-nfc/), [Web Notifications](https://www.w3.org/TR/notifications/), [Web Speech API](https://w3c.github.io/speech-api/), [Web Speech API](https://w3c.github.io/speech-api/), [Web Speech API](https://w3c.github.io/speech-api/), [Web Speech API](https://w3c.github.io/speech-api/), [Web Speech API](https://w3c.github.io/speech-api/), [Web Speech API](https://w3c.github.io/speech-api/), [Web Speech API](https://w3c.github.io/speech-api/), [Web Speech API](https://w3c.github.io/speech-api/), [Web Speech API](https://w3c.github.io/speech-api/), [Web Speech API](https://w3c.github.io/speech-api/), [Web Speech API](https://w3c.github.io/speech-api/), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/), [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/), [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/), [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/), [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/), [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/), [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/), [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/), [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/), [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/), [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/), [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/), [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/), [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/), [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/), [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/), [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebUSB API](https://wicg.github.io/webusb/), [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/), [WebXR Device API](https://immersive-web.github.io/webxr/), [WebXR Device API](https://immersive-web.github.io/webxr/), [WebXR Device API](https://immersive-web.github.io/webxr/), [WebXR Device API](https://immersive-web.github.io/webxr/), [WebXR Device API](https://immersive-web.github.io/webxr/), [WebXR Device API](https://immersive-web.github.io/webxr/), [WebXR Device API](https://immersive-web.github.io/webxr/), [WebXR Device API](https://immersive-web.github.io/webxr/), [WebXR Device API](https://immersive-web.github.io/webxr/), [WebXR Device API](https://immersive-web.github.io/webxr/), [WebXR Device API](https://immersive-web.github.io/webxr/), [WebXR Device API](https://immersive-web.github.io/webxr/), [WebXR Device API](https://immersive-web.github.io/webxr/), [WebXR Device API](https://immersive-web.github.io/webxr/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `bool` used in [Media Session Standard](https://wicg.github.io/mediasession/)

=> 72 WebIDL names found

Some of them may be type errors in specs (e.g. "int" does not exist, "Array" cannot be used on its own, etc.)
Also, please keep in mind that Reffy only knows about IDL terms defined in the specifications that were crawled **and** that do not have invalid IDL content.


## List of WebIDL names defined in more than one spec

- `CSSFontFaceRule` defined in [CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts/) and [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/)
- `CSSGroupingRule` defined in [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/) and [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- `GamepadMappingType` defined in [Gamepad](https://w3c.github.io/gamepad/) and [WebXR Device API](https://immersive-web.github.io/webxr/)
- `Keyboard` defined in [Keyboard Lock](https://wicg.github.io/keyboard-lock/) and [Keyboard Map](https://wicg.github.io/keyboard-map/)
- `ProgressEvent` defined in [Progress Events](http://www.w3.org/TR/2014/REC-progress-events-20140211/) and [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `ProgressEventInit` defined in [Progress Events](http://www.w3.org/TR/2014/REC-progress-events-20140211/) and [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `SVGMarkerElement` defined in [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/) and [SVG Markers](https://svgwg.org/specs/markers/)
- `[object Object]` defined in [CSS Layout API Level 1](https://drafts.css-houdini.org/css-layout-api-1/) and [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) and [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) and [Web Audio API](https://webaudio.github.io/web-audio-api/) and [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)

=> 8 WebIDL names found

"There can be only one"...


## Missing references for WebIDL names

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/) uses `Point2D` but does not reference [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- [Background Fetch](https://wicg.github.io/background-fetch/) uses `ImageResource` but does not reference [Web App Manifest](https://w3c.github.io/manifest/)
- [CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts/) uses `CSSStyleDeclaration` but does not reference [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [Input Events Level 1](https://cdn.staticaly.com/gh/w3c/input-events/v1/index.html) uses `StaticRange` but does not reference [Static Range](https://w3c.github.io/staticrange/)
- [Intersection Observer](https://w3c.github.io/IntersectionObserver/) uses `DOMHighResTimeStamp` but does not reference [High Resolution Time Level 2](https://w3c.github.io/hr-time/)
- [Push API](https://w3c.github.io/push-api/) uses `Blob` but does not reference [File API](https://w3c.github.io/FileAPI/)
- [Server Timing](https://w3c.github.io/server-timing/) uses `DOMHighResTimeStamp` but does not reference [High Resolution Time Level 2](https://w3c.github.io/hr-time/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/) uses:
    * `MediaStream` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `MediaStreamTrack` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
- [Web Workers](https://html.spec.whatwg.org/multipage/workers.html) uses:
    * `RequestCredentials` but does not reference [Fetch Standard](https://fetch.spec.whatwg.org/)
    * `MessagePort` but does not reference [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/)
- [WebXR Device API](https://immersive-web.github.io/webxr/) uses:
    * `DOMHighResTimeStamp` but does not reference [High Resolution Time Level 2](https://w3c.github.io/hr-time/)
    * `WebGLRenderingContext` but does not reference [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
    * `WebGL2RenderingContext` but does not reference [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
    * `WebGLFramebuffer` but does not reference [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
    * `WebGLContextAttributes` but does not reference [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
    * `WebGLRenderingContextBase` but does not reference [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)

=> 17 missing references for IDL definitions found in 10 specifications


## Missing references based on document links

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/) links to [`https://w3c.github.io/mediacapture-image/`](https://w3c.github.io/mediacapture-image/) but does not list it in its references
- [Accelerometer](https://w3c.github.io/accelerometer/) links to:
    * [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/) but does not list it in its references
    * [`https://w3c.github.io/sensors/usecases.html`](https://w3c.github.io/sensors/usecases.html) but does not list it in its references
- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://rawgit.com/w3c/aria/master/) links to:
    * [`https://w3c.github.io/aria/`](https://w3c.github.io/aria/) but does not list it in its references
    * [`https://www.w3.org/TR/wai-aria-practices/`](https://www.w3.org/TR/wai-aria-practices/) but does not list it in its references
    * [`https://www.w3.org/TR/accname-aam-1.1/`](https://www.w3.org/TR/accname-aam-1.1/) but does not list it in its references
    * [`https://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/`](https://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/) but does not list it in its references
    * [`https://www.w3.org/TR/di-gloss/`](https://www.w3.org/TR/di-gloss/) but does not list it in its references
    * [`https://www.w3.org/TR/html50/`](https://www.w3.org/TR/html50/) but does not list it in its references
    * [`https://www.w3.org/TR/xhtml-role/`](https://www.w3.org/TR/xhtml-role/) but does not list it in its references
    * [`https://www.w3.org/TR/2002/REC-xhtml1-20020801/`](https://www.w3.org/TR/2002/REC-xhtml1-20020801/) but does not list it in its references
- [Background Fetch](https://wicg.github.io/background-fetch/) links to:
    * [`https://storage.spec.whatwg.org/`](https://storage.spec.whatwg.org/) but does not list it in its references
    * [`https://w3c.github.io/webdriver/webdriver-spec.html`](https://w3c.github.io/webdriver/webdriver-spec.html) but does not list it in its references
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
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/) links to:
    * [`https://w3c.github.io/webappsec/usecases/credentialmanagement/`](https://w3c.github.io/webappsec/usecases/credentialmanagement/) but does not list it in its references
    * [`https://w3c.github.io/webauthn/`](https://w3c.github.io/webauthn/) but does not list it in its references
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/) links to:
    * [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/) but does not list it in its references
    * [`https://w3c.github.io/html/infrastructure.html`](https://w3c.github.io/html/infrastructure.html) but does not list it in its references
    * [`https://w3c.github.io/web-animations/level-2/`](https://w3c.github.io/web-animations/level-2/) but does not list it in its references
- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/) links to [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/) but does not list it in its references
- [CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds/) links to:
    * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/) but does not list it in its references
    * [`https://www.w3.org/TR/2008/NOTE-WCAG20-TECHS-20081211/F3`](https://www.w3.org/TR/2008/NOTE-WCAG20-TECHS-20081211/F3) but does not list it in its references
    * [`https://www.w3.org/TR/media-frags/`](https://www.w3.org/TR/media-frags/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/) but does not list it in its references
    * [`https://www.w3.org/TR/2014/CR-css3-background-20140909/`](https://www.w3.org/TR/2014/CR-css3-background-20140909/) but does not list it in its references
    * [`https://www.w3.org/TR/2014/WD-css3-background-20140204/`](https://www.w3.org/TR/2014/WD-css3-background-20140204/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/CR-css3-background-20120724/`](https://www.w3.org/TR/2012/CR-css3-background-20120724/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/CR-css3-background-20120417/`](https://www.w3.org/TR/2012/CR-css3-background-20120417/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/WD-css3-background-20120214/`](https://www.w3.org/TR/2012/WD-css3-background-20120214/) but does not list it in its references
    * [`https://www.w3.org/TR/2011/CR-css3-background-20110215/`](https://www.w3.org/TR/2011/CR-css3-background-20110215/) but does not list it in its references
    * [`https://www.w3.org/TR/2009/CR-css3-background-20091217/`](https://www.w3.org/TR/2009/CR-css3-background-20091217/) but does not list it in its references
- [CSS Backgrounds and Borders Module Level 4](https://drafts.csswg.org/css-backgrounds-4/) links to:
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/) but does not list it in its references
- [CSS Basic User Interface Module Level 4](https://drafts.csswg.org/css-ui/) links to:
    * [`https://www.w3.org/TR/2000/WD-css3-userint-20000216`](https://www.w3.org/TR/2000/WD-css3-userint-20000216) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css-style-attr/`](https://www.w3.org/TR/css-style-attr/) but does not list it in its references
    * [`https://w3c.github.io/editing/contentEditable.html`](https://w3c.github.io/editing/contentEditable.html) but does not list it in its references
    * [`https://www.w3.org/TR/2017/WD-css-ui-4-20171222/`](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/) but does not list it in its references
    * [`https://www.w3.org/TR/2015/WD-css-ui-4-20150922/`](https://www.w3.org/TR/2015/WD-css-ui-4-20150922/) but does not list it in its references
- [CSS Basic User Interface Module Level 4](https://drafts.csswg.org/css-ui-4/) links to:
    * [`https://www.w3.org/TR/2000/WD-css3-userint-20000216`](https://www.w3.org/TR/2000/WD-css3-userint-20000216) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css-style-attr/`](https://www.w3.org/TR/css-style-attr/) but does not list it in its references
    * [`https://w3c.github.io/editing/contentEditable.html`](https://w3c.github.io/editing/contentEditable.html) but does not list it in its references
- [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align/) links to:
    * [`https://www.w3.org/TR/cssom-1/`](https://www.w3.org/TR/cssom-1/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/) but does not list it in its references
    * [`https://www.w3.org/TR/css-flexbox/`](https://www.w3.org/TR/css-flexbox/) but does not list it in its references
    * [`https://www.w3.org/TR/css-grid/`](https://www.w3.org/TR/css-grid/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-flexbox/`](https://www.w3.org/TR/css3-flexbox/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-grid-layout/`](https://www.w3.org/TR/css3-grid-layout/) but does not list it in its references
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/) links to:
    * [`https://www.w3.org/TR/css-cascade/`](https://www.w3.org/TR/css-cascade/) but does not list it in its references
    * [`https://www.w3.org/TR/2018/WD-css3-box-20180731/`](https://www.w3.org/TR/2018/WD-css3-box-20180731/) but does not list it in its references
    * [`https://www.w3.org/TR/css-display/`](https://www.w3.org/TR/css-display/) but does not list it in its references
    * [`https://www.w3.org/TR/css-flexbox/`](https://www.w3.org/TR/css-flexbox/) but does not list it in its references
    * [`https://www.w3.org/TR/css-grid/`](https://www.w3.org/TR/css-grid/) but does not list it in its references
    * [`https://www.w3.org/TR/css-position/`](https://www.w3.org/TR/css-position/) but does not list it in its references
    * [`https://www.w3.org/TR/css-tables/`](https://www.w3.org/TR/css-tables/) but does not list it in its references
    * [`https://www.w3.org/TR/css-logical-1/`](https://www.w3.org/TR/css-logical-1/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
- [CSS Box Sizing Module Level 3](https://drafts.csswg.org/css-sizing-3/) links to:
    * [`https://www.w3.org/TR/css2/`](https://www.w3.org/TR/css2/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/) but does not list it in its references
    * [`https://www.w3.org/TR/css-flexbox/`](https://www.w3.org/TR/css-flexbox/) but does not list it in its references
- [CSS Box Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/) links to [`https://www.w3.org/TR/2012/WD-css3-sizing-20120927/`](https://www.w3.org/TR/2012/WD-css3-sizing-20120927/) but does not list it in its references
- [CSS Cascading and Inheritance Level 3](https://drafts.csswg.org/css-cascade-3/) links to:
    * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/) but does not list it in its references
    * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/) but does not list it in its references
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but does not list it in its references
    * [`https://www.w3.org/TR/css-style-attr/`](https://www.w3.org/TR/css-style-attr/) but does not list it in its references
    * [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/) but does not list it in its references
- [CSS Cascading and Inheritance Level 4](https://drafts.csswg.org/css-cascade/) links to:
    * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/) but does not list it in its references
    * [`https://www.w3.org/TR/css-conditional/`](https://www.w3.org/TR/css-conditional/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/) but does not list it in its references
    * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/) but does not list it in its references
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but does not list it in its references
    * [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/) but does not list it in its references
    * [`https://www.w3.org/TR/css-cascade-3/`](https://www.w3.org/TR/css-cascade-3/) but does not list it in its references
- [CSS Color Module Level 3](https://drafts.csswg.org/css-color-3/) links to:
    * [`https://www.w3.org/TR/2008/REC-WCAG20-20081211/`](https://www.w3.org/TR/2008/REC-WCAG20-20081211/) but does not list it in its references
    * [`https://www.w3.org/TR/2003/CR-css3-color-20030514/`](https://www.w3.org/TR/2003/CR-css3-color-20030514/) but does not list it in its references
    * [`https://www.w3.org/TR/2011/REC-css3-color-20110607/`](https://www.w3.org/TR/2011/REC-css3-color-20110607/) but does not list it in its references
    * [`https://www.w3.org/TR/2017/CR-css-ui-3-20170302/`](https://www.w3.org/TR/2017/CR-css-ui-3-20170302/) but does not list it in its references
    * [`https://www.w3.org/TR/1999/REC-html401-19991224`](https://www.w3.org/TR/1999/REC-html401-19991224) but does not list it in its references
    * [`https://www.w3.org/TR/2008/REC-xml-20081126/`](https://www.w3.org/TR/2008/REC-xml-20081126/) but does not list it in its references
- [CSS Color Module Level 4](https://drafts.csswg.org/css-color/) links to [`https://www.w3.org/TR/css-color-3/`](https://www.w3.org/TR/css-color-3/) but does not list it in its references
- [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/) links to [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/) but does not list it in its references
- [CSS Containment Module Level 1](https://drafts.csswg.org/css-contain/) links to:
    * [`https://www.w3.org/TR/css-pseudo-4/`](https://www.w3.org/TR/css-pseudo-4/) but does not list it in its references
    * [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/) but does not list it in its references
- [CSS Device Adaptation Module Level 1](https://drafts.csswg.org/css-device-adapt/) links to:
    * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/) but does not list it in its references
    * [`https://www.w3.org/TR/2011/WD-css-device-adapt-20110915/`](https://www.w3.org/TR/2011/WD-css-device-adapt-20110915/) but does not list it in its references
- [CSS Display Module Level 3](https://drafts.csswg.org/css-display/) links to:
    * [`https://www.w3.org/TR/css-cascade/`](https://www.w3.org/TR/css-cascade/) but does not list it in its references
    * [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/) but does not list it in its references
    * [`https://www.w3.org/TR/css-multicol-1/`](https://www.w3.org/TR/css-multicol-1/) but does not list it in its references
- [CSS Easing Functions Level 1](https://drafts.csswg.org/css-easing/) links to [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/) but does not list it in its references
- [CSS Exclusions Module Level 1](https://drafts.csswg.org/css-exclusions-1/) links to:
    * [`https://www.w3.org/TR/css3-box/`](https://www.w3.org/TR/css3-box/) but does not list it in its references
    * [`https://www.w3.org/TR/2015/WD-css3-exclusions-20150115/`](https://www.w3.org/TR/2015/WD-css3-exclusions-20150115/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-css3-exclusions-20130528/`](https://www.w3.org/TR/2013/WD-css3-exclusions-20130528/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/WD-css3-exclusions-20120503/`](https://www.w3.org/TR/2012/WD-css3-exclusions-20120503/) but does not list it in its references
    * [`https://www.w3.org/TR/css-shapes/`](https://www.w3.org/TR/css-shapes/) but does not list it in its references
- [CSS Fill and Stroke Module Level 3](https://drafts.fxtf.org/fill-stroke/) links to:
    * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but does not list it in its references
    * [`https://www.w3.org/TR/css4-images/`](https://www.w3.org/TR/css4-images/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/) but does not list it in its references
- [CSS Flexible Box Layout Module Level 1](https://drafts.csswg.org/css-flexbox-1/) links to:
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
    * [`https://www.w3.org/TR/css3-page/`](https://www.w3.org/TR/css3-page/) but does not list it in its references
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
    * [`https://www.w3.org/TR/cssom/`](https://www.w3.org/TR/cssom/) but does not list it in its references
    * [`https://www.w3.org/TR/css-break/`](https://www.w3.org/TR/css-break/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/) but does not list it in its references
- [CSS Images Module Level 3](https://drafts.csswg.org/css-images-3/) links to:
    * [`https://www.w3.org/TR/css-animations/`](https://www.w3.org/TR/css-animations/) but does not list it in its references
    * [`https://www.w3.org/TR/css-transitions/`](https://www.w3.org/TR/css-transitions/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css-print/`](https://www.w3.org/TR/css-print/) but does not list it in its references
- [CSS Images Module Level 4](https://drafts.csswg.org/css-images-4/) links to:
    * [`https://www.w3.org/TR/2011/CR-css3-background-20110215/`](https://www.w3.org/TR/2011/CR-css3-background-20110215/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/WD-css4-images-20120911/`](https://www.w3.org/TR/2012/WD-css4-images-20120911/) but does not list it in its references
- [CSS Inline Layout Module Level 3](https://drafts.csswg.org/css-inline-3/) links to [`https://www.w3.org/TR/2002/WD-css3-linebox-20020515/`](https://www.w3.org/TR/2002/WD-css3-linebox-20020515/) but does not list it in its references
- [CSS Layout API Level 1](https://drafts.css-houdini.org/css-layout-api-1/) links to:
    * [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/) but does not list it in its references
- [CSS Logical Properties and Values Level 1](https://drafts.csswg.org/css-logical-1/) links to [`https://www.w3.org/TR/css-writing-modes/`](https://www.w3.org/TR/css-writing-modes/) but does not list it in its references
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/) links to:
    * [`https://www.w3.org/TR/css-shapes/`](https://www.w3.org/TR/css-shapes/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-css-masking-20130620/`](https://www.w3.org/TR/2013/WD-css-masking-20130620/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/WD-css-masking-20121115/`](https://www.w3.org/TR/2012/WD-css-masking-20121115/) but does not list it in its references
- [CSS Multi-column Layout Module Level 1](https://drafts.csswg.org/css-multicol/) links to [`https://www.w3.org/TR/2011/CR-css3-multicol-20110412/`](https://www.w3.org/TR/2011/CR-css3-multicol-20110412/) but does not list it in its references
- [CSS Multi-column Layout Module Level 2](https://drafts.csswg.org/css-multicol-2/) links to [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/) but does not list it in its references
- [CSS Namespaces Module Level 3](https://drafts.csswg.org/css-namespaces/) links to [`https://www.w3.org/TR/2011/REC-css3-namespace-20110929/`](https://www.w3.org/TR/2011/REC-css3-namespace-20110929/) but does not list it in its references
- [CSS Overflow Module Level 3](https://drafts.csswg.org/css-overflow-3/) links to:
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
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/) but does not list it in its references
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but does not list it in its references
    * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/) but does not list it in its references
    * [`https://www.w3.org/TR/css-device-adapt/`](https://www.w3.org/TR/css-device-adapt/) but does not list it in its references
    * [`https://www.w3.org/TR/css-cascade/`](https://www.w3.org/TR/css-cascade/) but does not list it in its references
    * [`https://www.w3.org/TR/web-animations-1/`](https://www.w3.org/TR/web-animations-1/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-css3-page-20130314/`](https://www.w3.org/TR/2013/WD-css3-page-20130314/) but does not list it in its references
- [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) links to [`https://www.w3.org/TR/css-properties-values-api-1/`](https://www.w3.org/TR/css-properties-values-api-1/) but does not list it in its references
- [CSS Positioned Layout Module Level 3](https://drafts.csswg.org/css-position/) links to [`https://www.w3.org/TR/2015/WD-css3-positioning-20150203/`](https://www.w3.org/TR/2015/WD-css3-positioning-20150203/) but does not list it in its references
- [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/) links to:
    * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but does not list it in its references
    * [`https://www.w3.org/TR/css-text-decor/`](https://www.w3.org/TR/css-text-decor/) but does not list it in its references
- [CSS Regions Module Level 1](https://drafts.csswg.org/css-regions/) links to:
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-speech/`](https://www.w3.org/TR/css3-speech/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/) but does not list it in its references
    * [`https://www.w3.org/TR/2014/WD-css3-regions-20140218/`](https://www.w3.org/TR/2014/WD-css3-regions-20140218/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-css3-regions-20130528/`](https://www.w3.org/TR/2013/WD-css3-regions-20130528/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/WD-css3-regions-20120823/`](https://www.w3.org/TR/2012/WD-css3-regions-20120823/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/WD-css3-regions-20120503/`](https://www.w3.org/TR/2012/WD-css3-regions-20120503/) but does not list it in its references
- [CSS Ruby Layout Module Level 1](https://drafts.csswg.org/css-ruby-1/) links to [`https://www.w3.org/TR/css3-text/`](https://www.w3.org/TR/css3-text/) but does not list it in its references
- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
- [CSS Scroll Snap Module Level 1](https://drafts.csswg.org/css-scroll-snap-1/) links to:
    * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/) but does not list it in its references
    * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/) but does not list it in its references
- [CSS Scrollbars Module Level 1](https://drafts.csswg.org/css-scrollbars-1/) links to [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/) but does not list it in its references
- [CSS Shapes Module Level 1](https://drafts.csswg.org/css-shapes/) links to:
    * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
- [CSS Shapes Module Level 2](https://drafts.csswg.org/css-shapes-2/) links to [`https://www.w3.org/TR/css-shapes/`](https://www.w3.org/TR/css-shapes/) but does not list it in its references
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/) links to:
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but does not list it in its references
    * [`https://www.w3.org/TR/selectors-api/`](https://www.w3.org/TR/selectors-api/) but does not list it in its references
- [CSS Table Module Level 3](https://drafts.csswg.org/css-tables-3/) links to:
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but does not list it in its references
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
- [CSS Text Decoration Module Level 3](https://drafts.csswg.org/css-text-decor-3/) links to:
    * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
- [CSS Text Decoration Module Level 4](https://drafts.csswg.org/css-text-decor-4/) links to:
    * [`https://www.w3.org/TR/css3-text/`](https://www.w3.org/TR/css3-text/) but does not list it in its references
    * [`https://www.w3.org/TR/css-text/`](https://www.w3.org/TR/css-text/) but does not list it in its references
- [CSS Text Module Level 3](https://drafts.csswg.org/css-text-3/) links to:
    * [`https://www.w3.org/TR/klreq/`](https://www.w3.org/TR/klreq/) but does not list it in its references
    * [`https://www.w3.org/TR/css-writing-modes/`](https://www.w3.org/TR/css-writing-modes/) but does not list it in its references
    * [`https://www.w3.org/TR/css-fonts/`](https://www.w3.org/TR/css-fonts/) but does not list it in its references
    * [`https://www.w3.org/TR/css-text-decoration/`](https://www.w3.org/TR/css-text-decoration/) but does not list it in its references
- [CSS Text Module Level 4](https://drafts.csswg.org/css-text-4/) links to [`https://www.w3.org/TR/css-text/`](https://www.w3.org/TR/css-text/) but does not list it in its references
- [CSS Transforms Module Level 1](https://drafts.csswg.org/css-transforms/) links to:
    * [`https://www.w3.org/TR/2009/WD-css3-2d-transforms-20090320/`](https://www.w3.org/TR/2009/WD-css3-2d-transforms-20090320/) but does not list it in its references
    * [`https://www.w3.org/TR/2009/WD-SVG-Transforms-20090320/`](https://www.w3.org/TR/2009/WD-SVG-Transforms-20090320/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-animations/`](https://www.w3.org/TR/css3-animations/) but does not list it in its references
- [CSS Transitions](https://drafts.csswg.org/css-transitions/) links to:
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-css3-transitions-20131119/`](https://www.w3.org/TR/2013/WD-css3-transitions-20131119/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-css3-transitions-20130212/ChangeLog`](https://www.w3.org/TR/2013/WD-css3-transitions-20130212/ChangeLog) but does not list it in its references
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/) links to [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/) but does not list it in its references
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/) links to:
    * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/) but does not list it in its references
    * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/) but does not list it in its references
- [CSS Values and Units Module Level 3](https://drafts.csswg.org/css-values-3/) links to:
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-page/`](https://www.w3.org/TR/css3-page/) but does not list it in its references
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values-4/) links to:
    * [`https://www.w3.org/TR/css-transitions/`](https://www.w3.org/TR/css-transitions/) but does not list it in its references
    * [`https://www.w3.org/TR/css-animations/`](https://www.w3.org/TR/css-animations/) but does not list it in its references
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but does not list it in its references
    * [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/) but does not list it in its references
    * [`https://www.w3.org/TR/2019/CR-css-values-3-20190131/`](https://www.w3.org/TR/2019/CR-css-values-3-20190131/) but does not list it in its references
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
- [DeviceOrientation Event Specification](https://w3c.github.io/deviceorientation/spec-source-orientation.html) links to [`https://w3c.github.io/deviceorientation/`](https://w3c.github.io/deviceorientation/) but does not list it in its references
- [Event Timing API](https://wicg.github.io/event-timing/) links to [`https://w3c.github.io/pointerevents/extension.html`](https://w3c.github.io/pointerevents/extension.html) but does not list it in its references
- [Feature Policy](https://w3c.github.io/webappsec-feature-policy/) links to [`https://w3c.github.io/reporting/`](https://w3c.github.io/reporting/) but does not list it in its references
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/) links to:
    * [`https://www.w3.org/TR/css-transitions-1/`](https://www.w3.org/TR/css-transitions-1/) but does not list it in its references
    * [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/WD-filter-effects-20121025/`](https://www.w3.org/TR/2012/WD-filter-effects-20121025/) but does not list it in its references
- [Filter Effects Module Level 2](https://drafts.fxtf.org/filter-effects-2/) links to [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/) but does not list it in its references
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/) links to:
    * [`https://w3c.github.io/screen-orientation/`](https://w3c.github.io/screen-orientation/) but does not list it in its references
    * [`https://www.w3.org/TR/feature-policy-1/`](https://www.w3.org/TR/feature-policy-1/) but does not list it in its references
- [Generic Sensor API](https://w3c.github.io/sensors/) links to [`https://w3c.github.io/webappsec-feature-policy/`](https://w3c.github.io/webappsec-feature-policy/) but does not list it in its references
- [Gyroscope](https://w3c.github.io/gyroscope/) links to [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/) but does not list it in its references
- [Intersection Observer](https://w3c.github.io/IntersectionObserver/) links to:
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/) but does not list it in its references
    * [`https://www.w3.org/TR/css-masking-1/`](https://www.w3.org/TR/css-masking-1/) but does not list it in its references
- [Keyboard Map](https://wicg.github.io/keyboard-map/) links to [`https://w3c.github.io/keyboard-lock/`](https://w3c.github.io/keyboard-lock/) but does not list it in its references
- [Magnetometer](https://w3c.github.io/magnetometer/) links to [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/) but does not list it in its references
- [Media Capabilities](https://wicg.github.io/media-capabilities/) links to [`https://www.w3.org/TR/webrtc/`](https://www.w3.org/TR/webrtc/) but does not list it in its references
- [Media Capture and Streams](https://w3c.github.io/mediacapture-main/) links to [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but does not list it in its references
- [Media Queries Level 3](http://dev.w3.org/csswg/css3-mediaqueries/) links to:
    * [`https://www.w3.org/TR/1999/REC-html401-19991224/`](https://www.w3.org/TR/1999/REC-html401-19991224/) but does not list it in its references
    * [`https://www.w3.org/TR/1999/REC-html401-19991224/present/`](https://www.w3.org/TR/1999/REC-html401-19991224/present/) but does not list it in its references
    * [`https://infra.spec.whatwg.org/`](https://infra.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/1999/REC-html401-19991224`](https://www.w3.org/TR/1999/REC-html401-19991224) but does not list it in its references
    * [`https://www.w3.org/TR/2011/WD-html5-20110525/`](https://www.w3.org/TR/2011/WD-html5-20110525/) but does not list it in its references
- [Media Queries Level 4](https://drafts.csswg.org/mediaqueries-4/) links to:
    * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/) but does not list it in its references
    * [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/) but does not list it in its references
- [MediaStream Recording](https://w3c.github.io/mediacapture-record/) links to [`https://www.w3.org/TR/webrtc-identity/`](https://www.w3.org/TR/webrtc-identity/) but does not list it in its references
- [Metadata API for Media Resources 1.0](https://www.w3.org/TR/mediaont-api-1.0/) links to:
    * [`https://www.w3.org/TR/mediaont-10/`](https://www.w3.org/TR/mediaont-10/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/REC-mediaont-10-20120209/`](https://www.w3.org/TR/2012/REC-mediaont-10-20120209/) but does not list it in its references
    * [`https://www.w3.org/TR/2011/NOTE-dap-policy-reqs-20110317/`](https://www.w3.org/TR/2011/NOTE-dap-policy-reqs-20110317/) but does not list it in its references
- [Motion Path Module Level 1](https://drafts.fxtf.org/motion-1/) links to [`https://www.w3.org/TR/css-display-3/`](https://www.w3.org/TR/css-display-3/) but does not list it in its references
- [Network Information API](https://wicg.github.io/netinfo/) links to:
    * [`https://w3c.github.io/ServiceWorker/v1/`](https://w3c.github.io/ServiceWorker/v1/) but does not list it in its references
    * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/netinfo/`](https://www.w3.org/TR/netinfo/) but does not list it in its references
- [Non-element Selectors Module Level 1](https://drafts.csswg.org/selectors-nonelement/) links to:
    * [`https://www.w3.org/TR/its20/`](https://www.w3.org/TR/its20/) but does not list it in its references
    * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/) but does not list it in its references
- [Orientation Sensor](https://w3c.github.io/orientation-sensor/) links to:
    * [`https://www.w3.org/TR/2016/CR-orientation-event-20160818/`](https://www.w3.org/TR/2016/CR-orientation-event-20160818/) but does not list it in its references
    * [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/) but does not list it in its references
- [Performance Timeline Level 2](https://w3c.github.io/performance-timeline/) links to [`https://w3c.github.io/timing-entrytypes-registry/`](https://w3c.github.io/timing-entrytypes-registry/) but does not list it in its references
- [Permissions](https://w3c.github.io/permissions/) links to:
    * [`https://w3c.github.io/manifest/`](https://w3c.github.io/manifest/) but does not list it in its references
    * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/) but does not list it in its references
    * [`https://w3c.github.io/webdriver/webdriver-spec.html`](https://w3c.github.io/webdriver/webdriver-spec.html) but does not list it in its references
- [PointerEvents - Level 2 - Extensions](https://w3c.github.io/pointerevents/extension.html) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
- [Preload](https://w3c.github.io/preload/) links to [`https://w3c.github.io/webappsec/specs/content-security-policy/`](https://w3c.github.io/webappsec/specs/content-security-policy/) but does not list it in its references
- [Progress Events](http://www.w3.org/TR/2014/REC-progress-events-20140211/) links to:
    * [`https://xhr.spec.whatwg.org/`](https://xhr.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/) but does not list it in its references
- [Remote Playback API](https://w3c.github.io/remote-playback/) links to [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but does not list it in its references
- [Reporting API 1](https://w3c.github.io/reporting/) links to [`https://w3c.github.io/webdriver/webdriver-spec.html`](https://w3c.github.io/webdriver/webdriver-spec.html) but does not list it in its references
- [Resize Observer](https://drafts.csswg.org/resize-observer/) links to:
    * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/) but does not list it in its references
    * [`https://www.w3.org/TR/css-display-3/`](https://www.w3.org/TR/css-display-3/) but does not list it in its references
    * [`https://www.w3.org/TR/intersection-observer/`](https://www.w3.org/TR/intersection-observer/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/) but does not list it in its references
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/) links to:
    * [`https://www.w3.org/TR/svg-integration/`](https://www.w3.org/TR/svg-integration/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/CR-WebIDL-20120419/`](https://www.w3.org/TR/2012/CR-WebIDL-20120419/) but does not list it in its references
    * [`https://www.w3.org/TR/filter-effects/`](https://www.w3.org/TR/filter-effects/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css-cascade-3/`](https://www.w3.org/TR/css-cascade-3/) but does not list it in its references
    * [`https://www.w3.org/TR/wai-aria/`](https://www.w3.org/TR/wai-aria/) but does not list it in its references
    * [`https://w3c.github.io/svg-aam/`](https://w3c.github.io/svg-aam/) but does not list it in its references
    * [`https://w3c.github.io/selection-api/`](https://w3c.github.io/selection-api/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/REC-css-style-attr-20131107/`](https://www.w3.org/TR/2013/REC-css-style-attr-20131107/) but does not list it in its references
    * [`https://www.w3.org/TR/css-position-3/`](https://www.w3.org/TR/css-position-3/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-exclusions/`](https://www.w3.org/TR/css3-exclusions/) but does not list it in its references
    * [`https://www.w3.org/TR/css-shapes/`](https://www.w3.org/TR/css-shapes/) but does not list it in its references
    * [`https://www.w3.org/TR/css-backgrounds-3/`](https://www.w3.org/TR/css-backgrounds-3/) but does not list it in its references
    * [`https://www.w3.org/TR/css-box-3/`](https://www.w3.org/TR/css-box-3/) but does not list it in its references
    * [`https://www.w3.org/TR/css-content-3/`](https://www.w3.org/TR/css-content-3/) but does not list it in its references
    * [`https://www.w3.org/TR/resource-hints/`](https://www.w3.org/TR/resource-hints/) but does not list it in its references
    * [`https://www.w3.org/TR/2003/REC-MathML2-20031021/`](https://www.w3.org/TR/2003/REC-MathML2-20031021/) but does not list it in its references
    * [`https://www.w3.org/TR/orientation-event/`](https://www.w3.org/TR/orientation-event/) but does not list it in its references
    * [`https://www.w3.org/TR/css-selectors-3/`](https://www.w3.org/TR/css-selectors-3/) but does not list it in its references
    * [`https://www.w3.org/TR/xlink/`](https://www.w3.org/TR/xlink/) but does not list it in its references
    * [`https://www.w3.org/TR/2001/REC-xlink-20010627/`](https://www.w3.org/TR/2001/REC-xlink-20010627/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-transforms/`](https://www.w3.org/TR/css3-transforms/) but does not list it in its references
    * [`https://www.w3.org/TR/cssom/`](https://www.w3.org/TR/cssom/) but does not list it in its references
    * [`https://www.w3.org/TR/core-aam-1.1/`](https://www.w3.org/TR/core-aam-1.1/) but does not list it in its references
    * [`https://www.w3.org/TR/accname-aam-1.1/`](https://www.w3.org/TR/accname-aam-1.1/) but does not list it in its references
    * [`https://w3c.github.io/graphics-aria/`](https://w3c.github.io/graphics-aria/) but does not list it in its references
    * [`https://www.w3.org/TR/smil/`](https://www.w3.org/TR/smil/) but does not list it in its references
    * [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/) but does not list it in its references
    * [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/) but does not list it in its references
    * [`https://www.w3.org/TR/2015/WD-svg-markers-20150407/`](https://www.w3.org/TR/2015/WD-svg-markers-20150407/) but does not list it in its references
    * [`https://www.w3.org/TR/2015/WD-svg-strokes-20150407/`](https://www.w3.org/TR/2015/WD-svg-strokes-20150407/) but does not list it in its references
- [Screen Capture](https://w3c.github.io/mediacapture-screen-share/) links to [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but does not list it in its references
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/) links to:
    * [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-animations/`](https://www.w3.org/TR/css3-animations/) but does not list it in its references
    * [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/) but does not list it in its references
- [Selection API](https://w3c.github.io/selection-api/) links to [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/) but does not list it in its references
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/) links to:
    * [`https://www.w3.org/TR/2011/REC-css3-selectors-20110929/`](https://www.w3.org/TR/2011/REC-css3-selectors-20110929/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-namespace/`](https://www.w3.org/TR/css3-namespace/) but does not list it in its references
- [Selectors Level 4](https://drafts.csswg.org/selectors/) links to:
    * [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-namespace/`](https://www.w3.org/TR/css3-namespace/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-selectors4-20130502/`](https://www.w3.org/TR/2013/WD-selectors4-20130502/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/WD-selectors4-20120823/`](https://www.w3.org/TR/2012/WD-selectors4-20120823/) but does not list it in its references
    * [`https://www.w3.org/TR/2011/WD-selectors4-20110929/`](https://www.w3.org/TR/2011/WD-selectors4-20110929/) but does not list it in its references
- [Server Timing](https://w3c.github.io/server-timing/) links to [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but does not list it in its references
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) links to:
    * [`https://w3c.github.io/push-api/`](https://w3c.github.io/push-api/) but does not list it in its references
    * [`https://notifications.spec.whatwg.org/`](https://notifications.spec.whatwg.org/) but does not list it in its references
    * [`https://w3c.github.io/payment-handler/`](https://w3c.github.io/payment-handler/) but does not list it in its references
- [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/) links to [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but does not list it in its references
- [SVG Markers](https://svgwg.org/specs/markers/) links to:
    * [`https://www.w3.org/TR/2014/WD-filter-effects-1-20141125/`](https://www.w3.org/TR/2014/WD-filter-effects-1-20141125/) but does not list it in its references
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/) but does not list it in its references
    * [`https://www.w3.org/TR/geometry-1/`](https://www.w3.org/TR/geometry-1/) but does not list it in its references
- [SVG Strokes](https://svgwg.org/specs/strokes/) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but does not list it in its references
- [Touch Events - Level 2](https://w3c.github.io/touch-events/) links to [`https://www.w3.org/TR/touch-events-extensions/`](https://www.w3.org/TR/touch-events-extensions/) but does not list it in its references
- [UI Events](https://w3c.github.io/uievents/) links to [`https://www.w3.org/TR/2004/REC-xml-20040204/`](https://www.w3.org/TR/2004/REC-xml-20040204/) but does not list it in its references
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html) links to:
    * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/) but does not list it in its references
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
    * [`https://w3c.github.io/requestidlecallback/`](https://w3c.github.io/requestidlecallback/) but does not list it in its references
- [W3C DOM 4.1](https://w3c.github.io/dom/) links to [`https://www.w3.org/TR/touch-events/`](https://www.w3.org/TR/touch-events/) but does not list it in its references
- [Web Audio API](https://webaudio.github.io/web-audio-api/) links to:
    * [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/) but does not list it in its references
    * [`https://w3c.github.io/mediacapture-fromelement/`](https://w3c.github.io/mediacapture-fromelement/) but does not list it in its references
- [Web Authentication: An API for accessing Public Key Credentials - Level 2](https://w3c.github.io/webauthn/) links to [`https://w3c.github.io/html/browsers.html`](https://w3c.github.io/html/browsers.html) but does not list it in its references
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/) links to:
    * [`https://w3c.github.io/webappsec/specs/powerfulfeatures/`](https://w3c.github.io/webappsec/specs/powerfulfeatures/) but does not list it in its references
    * [`https://notifications.spec.whatwg.org/`](https://notifications.spec.whatwg.org/) but does not list it in its references
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/) links to [`https://w3c.github.io/fingerprinting-guidance/`](https://w3c.github.io/fingerprinting-guidance/) but does not list it in its references
- [Web Share API - Level 1](https://wicg.github.io/web-share/) links to [`https://www.w3.org/TR/web-intents/`](https://www.w3.org/TR/web-intents/) but does not list it in its references
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
- [WebAssembly Web API](https://webassembly.github.io/spec/web-api/) links to:
    * [`https://www.w3.org/TR/wasm-core/`](https://www.w3.org/TR/wasm-core/) but does not list it in its references
    * [`https://www.w3.org/TR/wasm-js-api/`](https://www.w3.org/TR/wasm-js-api/) but does not list it in its references
    * [`https://www.w3.org/TR/wasm-web-api/`](https://www.w3.org/TR/wasm-web-api/) but does not list it in its references
- [WebDriver](https://w3c.github.io/webdriver/) links to:
    * [`https://w3c.github.io/editing/contentEditable.html`](https://w3c.github.io/editing/contentEditable.html) but does not list it in its references
    * [`https://w3c.github.io/editing/execCommand.html`](https://w3c.github.io/editing/execCommand.html) but does not list it in its references
- [WebRTC DSCP Control API](https://w3c.github.io/webrtc-dscp-exp/) links to [`https://w3c.github.io/webrtc-pc/`](https://w3c.github.io/webrtc-pc/) but does not list it in its references
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/) links to [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/) but does not list it in its references
- [WebXR Device API](https://immersive-web.github.io/webxr/) links to [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/) but does not list it in its references
- [Worklets Level 1](https://drafts.css-houdini.org/worklets/) links to [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but does not list it in its references
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/) links to [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/) but does not list it in its references

=> 388 missing references for links found in 131 specifications

Any link to an external document from within a specification should trigger the creation of a corresponding entry in the references section.

Note Reffy only reports on links to "well-known" specs and ignores links to non-usual specs (e.g. PDF documents, etc.) for now.


## Reference URL is inconsistent with URL used in document links

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/) links to [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [Accelerometer](https://w3c.github.io/accelerometer/) links to [`https://www.w3.org/TR/screen-orientation/`](https://www.w3.org/TR/screen-orientation/) but related reference "SCREEN-ORIENTATION" uses URL [`https://w3c.github.io/screen-orientation/`](https://w3c.github.io/screen-orientation/)
- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://rawgit.com/w3c/aria/master/) links to:
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM4" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/2004/REC-owl-features-20040210/`](https://www.w3.org/TR/2004/REC-owl-features-20040210/) but related reference "OWL-FEATURES" uses URL [`https://www.w3.org/TR/owl-features/`](https://www.w3.org/TR/owl-features/)
    * [`https://www.w3.org/TR/2014/REC-rdf-schema-20140225/`](https://www.w3.org/TR/2014/REC-rdf-schema-20140225/) but related reference "RDF-SCHEMA" uses URL [`https://www.w3.org/TR/rdf-schema/`](https://www.w3.org/TR/rdf-schema/)
    * [`https://www.w3.org/TR/2007/REC-xforms-20071029/`](https://www.w3.org/TR/2007/REC-xforms-20071029/) but related reference "XFORMS10" uses URL [`https://www.w3.org/TR/xforms/`](https://www.w3.org/TR/xforms/)
    * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
    * [`https://www.w3.org/TR/html52/`](https://www.w3.org/TR/html52/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
    * [`https://www.w3.org/TR/2006/REC-xforms-20060314/`](https://www.w3.org/TR/2006/REC-xforms-20060314/) but related reference "XFORMS10" uses URL [`https://www.w3.org/TR/xforms/`](https://www.w3.org/TR/xforms/)
    * [`https://www.w3.org/TR/2002/REC-UAAG10-20021217/`](https://www.w3.org/TR/2002/REC-UAAG10-20021217/) but related reference "UAAG10" uses URL [`https://www.w3.org/TR/UAAG10/`](https://www.w3.org/TR/UAAG10/)
    * [`https://www.w3.org/TR/2006/REC-xml-names-20060816/`](https://www.w3.org/TR/2006/REC-xml-names-20060816/) but related reference "XML-NAMES" uses URL [`https://www.w3.org/TR/xml-names/`](https://www.w3.org/TR/xml-names/)
- [Background Fetch](https://wicg.github.io/background-fetch/) links to:
    * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but related reference "SERVICE-WORKERS-1" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
    * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
- [Cascading Style Sheets Level 2 Revision 2 (CSS 2.2) Specification](https://drafts.csswg.org/css2/) links to [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but related reference "CSS3COLOR" uses URL [`http://www.w3.org/TR/2010/PR-css3-color-20101028/`](http://www.w3.org/TR/2010/PR-css3-color-20101028/)
- [Clipboard API and events](https://w3c.github.io/clipboard-apis/) links to:
    * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
    * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
- [Compositing and Blending Level 1](https://drafts.fxtf.org/compositing-1/) links to:
    * [`https://www.w3.org/TR/2003/REC-SVG11-20030114/`](https://www.w3.org/TR/2003/REC-SVG11-20030114/) but related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)
    * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/) but related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)
- [Compositing and Blending Level 2](https://drafts.fxtf.org/compositing-2/) links to:
    * [`https://www.w3.org/TR/2dcontext2/`](https://www.w3.org/TR/2dcontext2/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
    * [`https://www.w3.org/TR/2003/REC-SVG11-20030114/`](https://www.w3.org/TR/2003/REC-SVG11-20030114/) but related reference "SVG" uses URL [`https://www.w3.org/TR/SVG/`](https://www.w3.org/TR/SVG/)
    * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/) but related reference "SVG" uses URL [`https://www.w3.org/TR/SVG/`](https://www.w3.org/TR/SVG/)
    * [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/) links to:
    * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but related reference "SERVICE-WORKERS-1" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [Content Security Policy: Embedded Enforcement](https://w3c.github.io/webappsec-cspee/) links to [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [Cookie Store API](https://wicg.github.io/cookie-store/) links to [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but related reference "Service-Workers" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/) links to [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/) links to:
    * [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/) but related reference "MIXED-CONTENT" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds/) links to:
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
    * [`https://www.w3.org/TR/2011/REC-CSS2-20110607/`](https://www.w3.org/TR/2011/REC-CSS2-20110607/) but related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2/`](https://www.w3.org/TR/CSS2/)
- [CSS Basic User Interface Module Level 4](https://drafts.csswg.org/css-ui/) links to [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [CSS Basic User Interface Module Level 4](https://drafts.csswg.org/css-ui-4/) links to [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align/) links to [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "CSS-WRITING-MODES-3" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
- [CSS Cascading and Inheritance Level 3](https://drafts.csswg.org/css-cascade-3/) links to:
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
    * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "CSS-WRITING-MODES-3" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
- [CSS Cascading and Inheritance Level 4](https://drafts.csswg.org/css-cascade/) links to:
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
    * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "CSS-WRITING-MODES-3" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
- [CSS Color Module Level 3](https://drafts.csswg.org/css-color-3/) links to:
    * [`https://www.w3.org/TR/2003/REC-SVG11-20030114/`](https://www.w3.org/TR/2003/REC-SVG11-20030114/) but related reference "SVG11" uses URL [`http://www.w3.org/TR/2011/REC-SVG11-20110816/`](http://www.w3.org/TR/2011/REC-SVG11-20110816/)
    * [`https://www.w3.org/TR/2008/REC-CSS2-20080411`](https://www.w3.org/TR/2008/REC-CSS2-20080411) but related reference "CSS21" uses URL [`http://www.w3.org/TR/2011/REC-CSS2-20110607`](http://www.w3.org/TR/2011/REC-CSS2-20110607)
    * [`https://www.w3.org/TR/2001/REC-SVG-20010904`](https://www.w3.org/TR/2001/REC-SVG-20010904) but related reference "SVG11" uses URL [`http://www.w3.org/TR/2011/REC-SVG11-20110816/`](http://www.w3.org/TR/2011/REC-SVG11-20110816/)
- [CSS Color Module Level 4](https://drafts.csswg.org/css-color/) links to [`https://www.w3.org/TR/2008/REC-WCAG20-20081211/`](https://www.w3.org/TR/2008/REC-WCAG20-20081211/) but related reference "WCAG20" uses URL [`https://www.w3.org/TR/WCAG20/`](https://www.w3.org/TR/WCAG20/)
- [CSS Exclusions Module Level 1](https://drafts.csswg.org/css-exclusions-1/) links to [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
- [CSS Fill and Stroke Module Level 3](https://drafts.fxtf.org/fill-stroke/) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
- [CSS Flexible Box Layout Module Level 1](https://drafts.csswg.org/css-flexbox-1/) links to [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
- [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts/) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES" uses URL [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/)
- [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/) links to:
    * [`https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/`](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/) but related reference "CSS-FONTS-3" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
    * [`https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/`](https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/) but related reference "CSS-FONTS-3" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
- [CSS Fragmentation Module Level 3](https://drafts.csswg.org/css-break/) links to:
    * [`https://www.w3.org/TR/2011/REC-CSS2-20110607/`](https://www.w3.org/TR/2011/REC-CSS2-20110607/) but related reference "CSS21" uses URL [`https://www.w3.org/TR/CSS2/`](https://www.w3.org/TR/CSS2/)
    * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
- [CSS Generated Content for Paged Media Module](https://drafts.csswg.org/css-gcpm/) links to [`https://www.w3.org/TR/2014/WD-dpub-latinreq-20140313/`](https://www.w3.org/TR/2014/WD-dpub-latinreq-20140313/) but related reference "DPUB-LATINREQ" uses URL [`https://www.w3.org/TR/dpub-latinreq/`](https://www.w3.org/TR/dpub-latinreq/)
- [CSS Grid Layout Module Level 1](https://drafts.csswg.org/css-grid/) links to [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/) links to [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/) but related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)
- [CSS Paged Media Module Level 3](https://drafts.csswg.org/css-page-3/) links to:
    * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS3VAL" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
    * [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/) but related reference "CSS3VAL" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS3-VALUES" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
- [CSS Regions Module Level 1](https://drafts.csswg.org/css-regions/) links to:
    * [`https://www.w3.org/TR/2011/REC-CSS2-20110607/`](https://www.w3.org/TR/2011/REC-CSS2-20110607/) but related reference "CSS21" uses URL [`https://www.w3.org/TR/CSS2/`](https://www.w3.org/TR/CSS2/)
    * [`https://www.w3.org/TR/2012/WD-dom-20120405/`](https://www.w3.org/TR/2012/WD-dom-20120405/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/) but related reference "CSSOM-VIEW" uses URL [`https://www.w3.org/TR/cssom-view-1/`](https://www.w3.org/TR/cssom-view-1/)
- [CSS Ruby Layout Module Level 1](https://drafts.csswg.org/css-ruby-1/) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [CSS Scroll Snap Module Level 1](https://drafts.csswg.org/css-scroll-snap-1/) links to:
    * [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/) but related reference "CSSOM-VIEW-1" uses URL [`https://www.w3.org/TR/cssom-view-1/`](https://www.w3.org/TR/cssom-view-1/)
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
- [CSS Shapes Module Level 1](https://drafts.csswg.org/css-shapes/) links to:
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
    * [`https://www.w3.org/TR/2012/WD-css3-exclusions-20120503/`](https://www.w3.org/TR/2012/WD-css3-exclusions-20120503/) but related reference "CSS3-EXCLUSIONS" uses URL [`https://www.w3.org/TR/css3-exclusions/`](https://www.w3.org/TR/css3-exclusions/)
    * [`https://www.w3.org/TR/2011/WD-css3-exclusions-20111213/`](https://www.w3.org/TR/2011/WD-css3-exclusions-20111213/) but related reference "CSS3-EXCLUSIONS" uses URL [`https://www.w3.org/TR/css3-exclusions/`](https://www.w3.org/TR/css3-exclusions/)
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
- [CSS Text Decoration Module Level 3](https://drafts.csswg.org/css-text-decor-3/) links to:
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
    * [`https://www.w3.org/TR/1998/REC-CSS2-19980512`](https://www.w3.org/TR/1998/REC-CSS2-19980512) but related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2/`](https://www.w3.org/TR/CSS2/)
- [CSS Transforms Module Level 1](https://drafts.csswg.org/css-transforms/) links to:
    * [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/) but related reference "CSSOM-VIEW" uses URL [`https://www.w3.org/TR/cssom-view-1/`](https://www.w3.org/TR/cssom-view-1/)
    * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/) but related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)
- [CSS Transitions](https://drafts.csswg.org/css-transitions/) links to [`https://w3c.github.io/dom/`](https://w3c.github.io/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [CSS Values and Units Module Level 3](https://drafts.csswg.org/css-values-3/) links to:
    * [`https://www.w3.org/TR/css-syntax/`](https://www.w3.org/TR/css-syntax/) but related reference "CSS3SYN" uses URL [`https://www.w3.org/TR/css-syntax-3/`](https://www.w3.org/TR/css-syntax-3/)
    * [`https://www.w3.org/TR/css3-fonts/`](https://www.w3.org/TR/css3-fonts/) but related reference "CSS3-FONTS" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values-4/) links to:
    * [`https://www.w3.org/TR/css-syntax/`](https://www.w3.org/TR/css-syntax/) but related reference "CSS3SYN" uses URL [`https://www.w3.org/TR/css-syntax-3/`](https://www.w3.org/TR/css-syntax-3/)
    * [`https://www.w3.org/TR/css3-fonts/`](https://www.w3.org/TR/css3-fonts/) but related reference "CSS3-FONTS" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
- [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/) links to [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM4" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) links to:
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/) but related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
- [Event Timing API](https://wicg.github.io/event-timing/) links to:
    * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/) but related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)
    * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "UIEVENTS" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
    * [`https://w3c.github.io/pointerevents/`](https://w3c.github.io/pointerevents/) but related reference "POINTEREVENTS" uses URL [`https://www.w3.org/TR/pointerevents/`](https://www.w3.org/TR/pointerevents/)
    * [`https://w3c.github.io/touch-events/`](https://w3c.github.io/touch-events/) but related reference "TOUCH-EVENTS" uses URL [`https://www.w3.org/TR/touch-events/`](https://www.w3.org/TR/touch-events/)
    * [`https://w3c.github.io/performance-timeline/`](https://w3c.github.io/performance-timeline/) but related reference "PERFORMANCE-TIMELINE-2" uses URL [`https://www.w3.org/TR/performance-timeline-2/`](https://www.w3.org/TR/performance-timeline-2/)
    * [`https://w3c.github.io/paint-timing/`](https://w3c.github.io/paint-timing/) but related reference "PAINT-TIMING" uses URL [`https://www.w3.org/TR/paint-timing/`](https://www.w3.org/TR/paint-timing/)
- [Feature Policy](https://w3c.github.io/webappsec-feature-policy/) links to:
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP-3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
    * [`https://w3c.github.io/payment-request/`](https://w3c.github.io/payment-request/) but related reference "PAYMENT-REQUEST" uses URL [`https://www.w3.org/TR/payment-request/`](https://www.w3.org/TR/payment-request/)
- [File and Directory Entries API](https://wicg.github.io/entries-api/) links to [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
- [File API](https://w3c.github.io/FileAPI/) links to [`https://w3c.github.io/media-source/`](https://w3c.github.io/media-source/) but related reference "MEDIA-SOURCE" uses URL [`https://www.w3.org/TR/media-source/`](https://www.w3.org/TR/media-source/)
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/) links to [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/) but related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)
- [Generic Sensor API](https://w3c.github.io/sensors/) links to:
    * [`https://www.w3.org/TR/page-visibility-2/`](https://www.w3.org/TR/page-visibility-2/) but related reference "PAGE-VISIBILITY" uses URL [`https://www.w3.org/TR/page-visibility/`](https://www.w3.org/TR/page-visibility/)
    * [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/) but related reference "PERMISSIONS" uses URL [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/)
    * [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/) but related reference "HR-TIME-2" uses URL [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/)
- [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/) links to:
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but related reference "HTML" uses URL [`http://www.w3.org/TR/html5/`](http://www.w3.org/TR/html5/)
    * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML" uses URL [`http://www.w3.org/TR/html5/`](http://www.w3.org/TR/html5/)
- [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/) links to:
    * [`https://www.w3.org/TR/2014/REC-html5-20141028/`](https://www.w3.org/TR/2014/REC-html5-20141028/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
    * [`https://w3c.github.io/webrtc-pc/`](https://w3c.github.io/webrtc-pc/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
- [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/) links to [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
- [Input Events Level 1](https://cdn.staticaly.com/gh/w3c/input-events/v1/index.html) links to [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "UI-EVENTS" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
- [Keyboard Map](https://wicg.github.io/keyboard-map/) links to [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
- [Long Tasks API 1](https://w3c.github.io/longtasks/) links to:
    * [`https://w3c.github.io/performance-timeline/`](https://w3c.github.io/performance-timeline/) but related reference "PERFORMANCE-TIMELINE-2" uses URL [`https://www.w3.org/TR/performance-timeline-2/`](https://www.w3.org/TR/performance-timeline-2/)
    * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/) but related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)
- [Magnetometer](https://w3c.github.io/magnetometer/) links to:
    * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/) but related reference "GENERIC-SENSOR" uses URL [`https://www.w3.org/TR/generic-sensor/`](https://www.w3.org/TR/generic-sensor/)
    * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
    * [`https://w3c.github.io/accelerometer/`](https://w3c.github.io/accelerometer/) but related reference "ACCELEROMETER" uses URL [`https://www.w3.org/TR/accelerometer/`](https://www.w3.org/TR/accelerometer/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/) links to:
    * [`https://w3c.github.io/media-source/`](https://w3c.github.io/media-source/) but related reference "MEDIA-SOURCE" uses URL [`https://www.w3.org/TR/media-source/`](https://www.w3.org/TR/media-source/)
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Media Capture and Streams](https://w3c.github.io/mediacapture-main/) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but related reference "HTML52" uses URL [`https://www.w3.org/TR/html52/`](https://www.w3.org/TR/html52/)
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
- [Orientation Sensor](https://w3c.github.io/orientation-sensor/) links to:
    * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/) but related reference "GENERIC-SENSOR" uses URL [`https://www.w3.org/TR/generic-sensor/`](https://www.w3.org/TR/generic-sensor/)
    * [`https://w3c.github.io/accelerometer/`](https://w3c.github.io/accelerometer/) but related reference "ACCELEROMETER" uses URL [`https://www.w3.org/TR/accelerometer/`](https://www.w3.org/TR/accelerometer/)
    * [`https://w3c.github.io/gyroscope/`](https://w3c.github.io/gyroscope/) but related reference "GYROSCOPE" uses URL [`https://www.w3.org/TR/gyroscope/`](https://www.w3.org/TR/gyroscope/)
    * [`https://w3c.github.io/magnetometer/`](https://w3c.github.io/magnetometer/) but related reference "MAGNETOMETER" uses URL [`https://www.w3.org/TR/magnetometer/`](https://www.w3.org/TR/magnetometer/)
- [Paint Timing 1](https://w3c.github.io/paint-timing/) links to [`https://w3c.github.io/performance-timeline/`](https://w3c.github.io/performance-timeline/) but related reference "PERFORMANCE-TIMELINE-2" uses URL [`https://www.w3.org/TR/performance-timeline-2/`](https://www.w3.org/TR/performance-timeline-2/)
- [Permissions](https://w3c.github.io/permissions/) links to:
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/) links to [`https://w3c.github.io/remote-playback/`](https://w3c.github.io/remote-playback/) but related reference "Remote-Playback" uses URL [`https://www.w3.org/TR/remote-playback/`](https://www.w3.org/TR/remote-playback/)
- [Pointer Events](https://w3c.github.io/pointerevents/) links to [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [PointerEvents - Level 2 - Extensions](https://w3c.github.io/pointerevents/extension.html) links to [`https://w3c.github.io/pointerevents/`](https://w3c.github.io/pointerevents/) but related reference "pointerevents2" uses URL [`https://www.w3.org/TR/pointerevents2/`](https://www.w3.org/TR/pointerevents2/)
- [Presentation API](https://w3c.github.io/presentation-api/) links to:
    * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
    * [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/) but related reference "MIXED-CONTENT" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/) links to:
    * [`https://www.w3.org/TR/2010/REC-wsc-ui-20100812/`](https://www.w3.org/TR/2010/REC-wsc-ui-20100812/) but related reference "WSC-UI" uses URL [`https://www.w3.org/TR/wsc-ui/`](https://www.w3.org/TR/wsc-ui/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
- [Remote Playback API](https://w3c.github.io/remote-playback/) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [Reporting API 1](https://w3c.github.io/reporting/) links to:
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
    * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/) links to:
    * [`https://www.w3.org/TR/2008/REC-xml-20081126/`](https://www.w3.org/TR/2008/REC-xml-20081126/) but related reference "xml" uses URL [`https://www.w3.org/TR/xml`](https://www.w3.org/TR/xml)
    * [`https://www.w3.org/TR/2006/REC-xml-names-20060816/`](https://www.w3.org/TR/2006/REC-xml-names-20060816/) but related reference "xml-names" uses URL [`https://www.w3.org/TR/xml-names`](https://www.w3.org/TR/xml-names)
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "dom" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "css-values" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
    * [`https://www.w3.org/TR/2011/REC-CSS2-20110607/`](https://www.w3.org/TR/2011/REC-CSS2-20110607/) but related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2`](https://www.w3.org/TR/CSS2)
    * [`https://www.w3.org/TR/compositing/`](https://www.w3.org/TR/compositing/) but related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
    * [`https://www.w3.org/TR/2015/CR-compositing-1-20150113/`](https://www.w3.org/TR/2015/CR-compositing-1-20150113/) but related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
    * [`https://www.w3.org/TR/2015/CR-compositing-1-20150113`](https://www.w3.org/TR/2015/CR-compositing-1-20150113) but related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
    * [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/) but related reference "css-values" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
    * [`https://www.w3.org/TR/2014/CR-geometry-1-20141125/`](https://www.w3.org/TR/2014/CR-geometry-1-20141125/) but related reference "geometry-1" uses URL [`https://www.w3.org/TR/geometry-1/`](https://www.w3.org/TR/geometry-1/)
    * [`https://www.w3.org/TR/2014/WD-geometry-1-20140522/`](https://www.w3.org/TR/2014/WD-geometry-1-20140522/) but related reference "geometry-1" uses URL [`https://www.w3.org/TR/geometry-1/`](https://www.w3.org/TR/geometry-1/)
    * [`https://www.w3.org/TR/2014/CR-html5-20140204/`](https://www.w3.org/TR/2014/CR-html5-20140204/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
    * [`https://www.w3.org/TR/2014/WD-dom-20140204/`](https://www.w3.org/TR/2014/WD-dom-20140204/) but related reference "dom" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "css-writing-modes-3" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
    * [`https://www.w3.org/TR/2011/WD-css3-fonts-20111004/`](https://www.w3.org/TR/2011/WD-css3-fonts-20111004/) but related reference "css-fonts-3" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
    * [`https://www.w3.org/TR/2001/REC-smil-animation-20010904/`](https://www.w3.org/TR/2001/REC-smil-animation-20010904/) but related reference "smil-animation" uses URL [`https://www.w3.org/TR/smil-animation/`](https://www.w3.org/TR/smil-animation/)
    * [`https://w3c.github.io/clipboard-apis/`](https://w3c.github.io/clipboard-apis/) but related reference "clipboard-apis" uses URL [`https://www.w3.org/TR/clipboard-apis/`](https://www.w3.org/TR/clipboard-apis/)
    * [`https://www.w3.org/TR/referrer-policy/`](https://www.w3.org/TR/referrer-policy/) but related reference "ReferrerPolicy" uses URL [`https://w3c.github.io/webappsec-referrer-policy/`](https://w3c.github.io/webappsec-referrer-policy/)
    * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "uievents" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
    * [`https://www.w3.org/TR/2015/NOTE-UAAG20-20151215/`](https://www.w3.org/TR/2015/NOTE-UAAG20-20151215/) but related reference "UAAG20" uses URL [`https://www.w3.org/TR/UAAG20/`](https://www.w3.org/TR/UAAG20/)
    * [`https://www.w3.org/TR/2008/REC-CSS2-20080411/`](https://www.w3.org/TR/2008/REC-CSS2-20080411/) but related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2`](https://www.w3.org/TR/CSS2)
- [Screen Capture](https://w3c.github.io/mediacapture-screen-share/) links to:
    * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
    * [`https://w3c.github.io/mediacapture-main/getusermedia.html`](https://w3c.github.io/mediacapture-main/getusermedia.html) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) links to [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/) but related reference "MIX" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)
- [Selection API](https://w3c.github.io/selection-api/) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [Selectors API Level 1](https://www.w3.org/TR/selectors-api/) links to [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/) but related reference "SELECT" uses URL [`http://www.w3.org/TR/2011/REC-css3-selectors-20110929/`](http://www.w3.org/TR/2011/REC-css3-selectors-20110929/)
- [Server Timing](https://w3c.github.io/server-timing/) links to:
    * [`https://w3c.github.io/resource-timing/`](https://w3c.github.io/resource-timing/) but related reference "RESOURCE-TIMING-2" uses URL [`https://www.w3.org/TR/resource-timing-2/`](https://www.w3.org/TR/resource-timing-2/)
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) links to:
    * [`https://w3c.github.io/webappsec-referrer-policy/`](https://w3c.github.io/webappsec-referrer-policy/) but related reference "REFERRER-POLICY" uses URL [`https://www.w3.org/TR/referrer-policy/`](https://www.w3.org/TR/referrer-policy/)
    * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP-3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [UI Events](https://w3c.github.io/uievents/) links to [`https://www.w3.org/TR/2014/WD-uievents-20140612/`](https://www.w3.org/TR/2014/WD-uievents-20140612/) but related reference "UIEVENTS" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html) links to [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/) but related reference "CSSOM-VIEW-1" uses URL [`http://www.w3.org/TR/cssom-view-1/`](http://www.w3.org/TR/cssom-view-1/)
- [Vibration API (Second Edition)](https://w3c.github.io/vibration/) links to [`https://w3c.github.io/page-visibility/`](https://w3c.github.io/page-visibility/) but related reference "PAGE-VISIBILITY-2" uses URL [`https://www.w3.org/TR/page-visibility-2/`](https://www.w3.org/TR/page-visibility-2/)
- [W3C DOM 4.1](https://w3c.github.io/dom/) links to:
    * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/) but related reference "HR-TIME" uses URL [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/)
    * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but related reference "SERVICE-WORKERS" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
    * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/) but related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
    * [`https://www.w3.org/TR/2017/WD-dom41-20170420/`](https://www.w3.org/TR/2017/WD-dom41-20170420/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/2017/WD-dom41-20170321/`](https://www.w3.org/TR/2017/WD-dom41-20170321/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/2015/REC-dom-20151119/`](https://www.w3.org/TR/2015/REC-dom-20151119/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Web Animations](https://drafts.csswg.org/web-animations-1/) links to [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/) but related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/) links to [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/) but related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 2](https://w3c.github.io/webauthn/) links to:
    * [`https://w3c.github.io/webappsec-credential-management/`](https://w3c.github.io/webappsec-credential-management/) but related reference "CREDENTIAL-MANAGEMENT-1" uses URL [`https://www.w3.org/TR/credential-management-1/`](https://www.w3.org/TR/credential-management-1/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/) but related reference "MIXED-CONTENT" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/) links to [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but related reference "SERVICE-WORKERS-1" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/) links to:
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
- [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html) links to [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
- [Web IDL](https://heycam.github.io/webidl/) links to [`https://www.w3.org/TR/geolocation-API/`](https://www.w3.org/TR/geolocation-API/) but related reference "GEOLOCATION-API" uses URL [`http://dev.w3.org/geo/api/spec-source.html`](http://dev.w3.org/geo/api/spec-source.html)
- [Web Notifications](https://www.w3.org/TR/notifications/) links to:
    * [`https://notifications.spec.whatwg.org/`](https://notifications.spec.whatwg.org/) but related reference "WEBIDL" uses URL [`https://www.w3.org/TR/2015/PR-notifications-20150910/`](https://www.w3.org/TR/2015/PR-notifications-20150910/)
    * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/2014/REC-html5-20141028/`](https://www.w3.org/TR/2014/REC-html5-20141028/)
- [WebDriver](https://w3c.github.io/webdriver/) links to:
    * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "UI-EVENTS" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
    * [`https://w3c.github.io/DOM-Parsing/`](https://w3c.github.io/DOM-Parsing/) but related reference "DOM-PARSING" uses URL [`https://www.w3.org/TR/DOM-Parsing/`](https://www.w3.org/TR/DOM-Parsing/)
    * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FILEAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/) links to [`https://www.w3.org/TR/html52/`](https://www.w3.org/TR/html52/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [WebUSB API](https://wicg.github.io/webusb/) links to [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
- [WebXR Device API](https://immersive-web.github.io/webxr/) links to:
    * [`https://w3c.github.io/orientation-sensor/`](https://w3c.github.io/orientation-sensor/) but related reference "ORIENTATION-SENSOR" uses URL [`https://www.w3.org/TR/orientation-sensor/`](https://www.w3.org/TR/orientation-sensor/)
    * [`https://w3c.github.io/gamepad/`](https://w3c.github.io/gamepad/) but related reference "GAMEPAD" uses URL [`https://www.w3.org/TR/gamepad/`](https://www.w3.org/TR/gamepad/)

=> 205 inconsistent references for links found in 102 specifications

Links in the body of a specification should be to the same document as that pointed to by the related reference in the References section. The specifications reported here use a different URL. For instance, they may use a link to the Editor's Draft but target the latest published version in the References section. There should be some consistency across the specification.
