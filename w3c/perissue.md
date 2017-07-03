# Reffy crawl report

Reffy is a spec exploration tool. It takes a list of specifications as input, fetches and parses the latest Editor's Draft of each of these specifications to study the IDL content that it defines, the links that it contains, and the normative and informative references that it lists.

Reffy only knows facts about specifications that it crawled. Some of the anomalies reported in this report may be false positives as a result, triggered by the fact that Reffy has a very narrow view of the spec-verse.

Some anomalies may also be triggered by temporary errors in the Editor's Drafts of the specifications that were crawled such as invalid Web IDL definitions.

113 specifications were crawled in this report.


## Specifications without normative dependencies

- [CSS Font Loading Module Level 3](https://www.w3.org/TR/css-font-loading-3)

=> 1 specification found

Basically all specifications have normative dependencies on some other specification. Reffy could not find any normative dependencies for the specifications mentioned above, which seems strange.


## Specifications without WebIDL definitions

- [Compositing and Blending Level 1](https://www.w3.org/TR/compositing-1)
- [ContentEditable](https://w3c.github.io/editing/contentEditable.html)
- [CSS Syntax Module Level 3](http://dev.w3.org/csswg/css-syntax/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/css-writing-modes-3)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)
- [Selectors Level 3](http://www.w3.org/TR/2011/REC-css3-selectors-20110929/)
- [Streams Standard](https://streams.spec.whatwg.org/)
- [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/)
- [UI Events KeyboardEvent key Values](https://www.w3.org/TR/uievents-key)

=> 10 specifications found

Not all specifications define IDL content, presence in this list may be completely normal. Reffy's current focus is on IDL specifications, the number of specifications listed here should remain minimal.


## List of specifications with invalid WebIDL content

- [CSS Font Loading Module Level 3](https://www.w3.org/TR/css-font-loading-3)
- [CSS Fonts Module Level 3](https://www.w3.org/TR/css-fonts-3)
- [CSS Typed OM Level 1](https://www.w3.org/TR/css-typed-om-1)
- [Geometry Interfaces Module Level 1](https://www.w3.org/TR/geometry-1)
- [Metadata API for Media Resources 1.0](https://www.w3.org/TR/mediaont-api-1.0)
- [The WebSocket API](https://www.w3.org/TR/websockets)
- [User Interface Security and the Visibility API](https://www.w3.org/TR/UISecurity)
- [W3C DOM 4.1](https://w3c.github.io/dom/)
- [Web Audio API](https://www.w3.org/TR/webaudio)
- [WebIDL Level 1](https://www.w3.org/TR/WebIDL-1)

=> 10 specifications found

WebIDL continues to evolve. Reffy may incorrectly report as invalid perfectly valid WebIDL content if the specification uses bleeding-edge WebIDL features


## List of specifications with obsolete WebIDL constructs

- [Gamepad](https://www.w3.org/TR/gamepad)
- [HTML 5.2](https://w3c.github.io/html/)
- [HTML5 Web Messaging](https://www.w3.org/TR/webmessaging)

=> 3 specifications found

A typical example is the use of `[]` instead of `FrozenArray`.


## Specifications that use WebIDL but do not reference the WebIDL spec

- [Content Security Policy Level 3](https://www.w3.org/TR/CSP3)
- [CSS Font Loading Module Level 3](https://www.w3.org/TR/css-font-loading-3)
- [CSS Fonts Module Level 3](https://www.w3.org/TR/css-fonts-3)
- [CSS Object Model (CSSOM)](https://www.w3.org/TR/cssom-1)
- [CSS Pseudo-Elements Module Level 4](https://www.w3.org/TR/css-pseudo-4)
- [Element Traversal Specification](https://www.w3.org/TR/ElementTraversal)
- [Identifiers for WebRTC's Statistics API](https://www.w3.org/TR/webrtc-stats)
- [Input Events Level 2](https://www.w3.org/TR/input-events-2)
- [Page Visibility Level 2](https://www.w3.org/TR/page-visibility-2)
- [Pointer Events - Level 2](https://www.w3.org/TR/pointerevents2)
- [Preload](https://www.w3.org/TR/preload)
- [Referrer Policy](https://www.w3.org/TR/referrer-policy)
- [Selectors API Level 1](https://www.w3.org/TR/selectors-api)
- [Shadow DOM](https://www.w3.org/TR/shadow-dom)
- [Static Range](https://w3c.github.io/staticrange/)
- [UI Events](https://www.w3.org/TR/uievents)

=> 16 specifications found



## List of WebIDL names not defined in the specifications crawled

- `ApplicationCache` used in [Web Workers](https://www.w3.org/TR/workers)
- `CSSOMString` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- `Console` used in [Worklets Level 1](https://www.w3.org/TR/worklets-1)
- `CredentialCreationOptions` used in [Web Authentication: An API for accessing Public Key Credentials](https://w3c.github.io/webauthn/)
- `DOMMatrix` used in [Orientation Sensor](https://www.w3.org/TR/orientation-sensor), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- `DOMMatrixReadOnly` used in [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- `DOMPoint` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- `DOMPointInit` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- `DOMPointReadOnly` used in [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- `DOMQuad` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- `DOMQuadInit` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- `DOMRect` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- `DOMRectReadOnly` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- `DOMTokenList` used in [HTML 5.2](https://w3c.github.io/html/)
- `Document` used in [CSS Object Model (CSSOM)](https://www.w3.org/TR/cssom-1), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [DOM Parsing and Serialization](https://www.w3.org/TR/DOM-Parsing), [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/), [HTML 5.2](https://w3c.github.io/html/), [Page Visibility Level 2](https://www.w3.org/TR/page-visibility-2), [Pointer Lock 2.0](https://www.w3.org/TR/pointerlock-2), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Selection API](https://w3c.github.io/selection-api/), [Selectors API Level 1](https://www.w3.org/TR/selectors-api), [Touch Events](https://www.w3.org/TR/touch-events), [Web Animations](https://www.w3.org/TR/web-animations-1), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `DocumentFragment` used in [DOM Parsing and Serialization](https://www.w3.org/TR/DOM-Parsing), [HTML 5.2](https://w3c.github.io/html/), [Selectors API Level 1](https://www.w3.org/TR/selectors-api), [Shadow DOM](https://www.w3.org/TR/shadow-dom), [WebVTT: The Web Video Text Tracks Format](http://www.w3.org/TR/2015/WD-webvtt1-20151208/)
- `DocumentOrShadowRoot` used in [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/), [Pointer Lock 2.0](https://www.w3.org/TR/pointerlock-2), [Shadow DOM](https://www.w3.org/TR/shadow-dom)
- `Element` used in [CSS Object Model (CSSOM)](https://www.w3.org/TR/cssom-1), [CSS Pseudo-Elements Module Level 4](https://www.w3.org/TR/css-pseudo-4), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [DOM Parsing and Serialization](https://www.w3.org/TR/DOM-Parsing), [Element Traversal Specification](https://www.w3.org/TR/ElementTraversal), [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/), [HTML 5.2](https://w3c.github.io/html/), [HTML Canvas 2D Context](http://www.w3.org/TR/2015/REC-2dcontext-20151119/), [Pointer Events - Level 2](https://www.w3.org/TR/pointerevents2), [Pointer Lock 2.0](https://www.w3.org/TR/pointerlock-2), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Selectors API Level 1](https://www.w3.org/TR/selectors-api), [Shadow DOM](https://www.w3.org/TR/shadow-dom)
- `Event` used in [Clipboard API and events](https://w3c.github.io/clipboard-apis/), [Content Security Policy Level 3](https://www.w3.org/TR/CSP3), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [DeviceOrientation Event Specification](https://w3c.github.io/deviceorientation/spec-source-orientation.html), [Encrypted Media Extensions](https://www.w3.org/TR/encrypted-media), [Gamepad](https://www.w3.org/TR/gamepad), [Generic Sensor API](https://www.w3.org/TR/generic-sensor), [HTML 5.2](https://w3c.github.io/html/), [HTML5 Web Messaging](https://www.w3.org/TR/webmessaging), [Indexed Database API 2.0](https://www.w3.org/TR/IndexedDB-2), [Media Capture and Streams](https://www.w3.org/TR/mediacapture-streams), [MediaStream Recording](https://www.w3.org/TR/mediastream-recording), [Payment Request API](https://www.w3.org/TR/payment-request), [Presentation API](https://w3c.github.io/presentation-api/), [Progress Events](https://www.w3.org/TR/progress-events), [Service Workers 1](https://www.w3.org/TR/service-workers-1), [UI Events](https://www.w3.org/TR/uievents), [Web Animations](https://www.w3.org/TR/web-animations-1), [Web App Manifest](https://www.w3.org/TR/appmanifest), [Web Storage (Second Edition)](https://www.w3.org/TR/webstorage), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/webrtc), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `EventInit` used in [Clipboard API and events](https://w3c.github.io/clipboard-apis/), [Content Security Policy Level 3](https://www.w3.org/TR/CSP3), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [DeviceOrientation Event Specification](https://w3c.github.io/deviceorientation/spec-source-orientation.html), [Encrypted Media Extensions](https://www.w3.org/TR/encrypted-media), [Gamepad](https://www.w3.org/TR/gamepad), [Generic Sensor API](https://www.w3.org/TR/generic-sensor), [HTML 5.2](https://w3c.github.io/html/), [HTML5 Web Messaging](https://www.w3.org/TR/webmessaging), [Indexed Database API 2.0](https://www.w3.org/TR/IndexedDB-2), [Media Capture and Streams](https://www.w3.org/TR/mediacapture-streams), [MediaStream Recording](https://www.w3.org/TR/mediastream-recording), [Payment Request API](https://www.w3.org/TR/payment-request), [Presentation API](https://w3c.github.io/presentation-api/), [Progress Events](https://www.w3.org/TR/progress-events), [Service Workers 1](https://www.w3.org/TR/service-workers-1), [UI Events](https://www.w3.org/TR/uievents), [Web Animations](https://www.w3.org/TR/web-animations-1), [Web Storage (Second Edition)](https://www.w3.org/TR/webstorage), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/webrtc), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `EventListener` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- `EventTarget` used in [Battery Status API](https://www.w3.org/TR/battery-status), [Clipboard API and events](https://w3c.github.io/clipboard-apis/), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [Encrypted Media Extensions](https://www.w3.org/TR/encrypted-media), [File API](https://w3c.github.io/FileAPI/), [Generic Sensor API](https://www.w3.org/TR/generic-sensor), [High Resolution Time Level 3](https://www.w3.org/TR/hr-time-3), [HTML 5.2](https://w3c.github.io/html/), [HTML5 Web Messaging](https://www.w3.org/TR/webmessaging), [Indexed Database API 2.0](https://www.w3.org/TR/IndexedDB-2), [Media Capture and Streams](https://www.w3.org/TR/mediacapture-streams), [Media Source Extensions™](https://www.w3.org/TR/media-source), [MediaStream Recording](https://www.w3.org/TR/mediastream-recording), [Payment Request API](https://www.w3.org/TR/payment-request), [Presentation API](https://w3c.github.io/presentation-api/), [Remote Playback API](https://www.w3.org/TR/remote-playback), [Server-Sent Events](https://www.w3.org/TR/eventsource), [Service Workers 1](https://www.w3.org/TR/service-workers-1), [The Permissions API](https://www.w3.org/TR/permissions), [The Screen Orientation API](https://www.w3.org/TR/screen-orientation), [Touch Events](https://www.w3.org/TR/touch-events), [UI Events](https://www.w3.org/TR/uievents), [Wake Lock API](https://www.w3.org/TR/wake-lock), [Web Animations](https://www.w3.org/TR/web-animations-1), [Web Notifications](https://www.w3.org/TR/notifications), [Web Workers](https://www.w3.org/TR/workers), [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/webrtc), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `HTMLCollection` used in [HTML 5.2](https://w3c.github.io/html/)
- `Node` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [DOM Parsing and Serialization](https://www.w3.org/TR/DOM-Parsing), [Selection API](https://w3c.github.io/selection-api/), [Static Range](https://w3c.github.io/staticrange/)
- `NodeList` used in [HTML 5.2](https://w3c.github.io/html/), [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/), [Selectors API Level 1](https://www.w3.org/TR/selectors-api)
- `OverconstrainedError` used in [Media Capture and Streams](https://www.w3.org/TR/mediacapture-streams)
- `ProcessingInstruction` used in [CSS Object Model (CSSOM)](https://www.w3.org/TR/cssom-1)
- `RTCError` used in [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/webrtc)
- `Range` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [DOM Parsing and Serialization](https://www.w3.org/TR/DOM-Parsing), [Selection API](https://w3c.github.io/selection-api/)
- `ReadableStream` used in [Fetch Standard](https://fetch.spec.whatwg.org/)
- `SupportedType` used in [DOM Parsing and Serialization](https://www.w3.org/TR/DOM-Parsing)
- `Text` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- `Transferable` used in [HTML5 Web Messaging](https://www.w3.org/TR/webmessaging), [Web Workers](https://www.w3.org/TR/workers)
- `Type` used in [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- `WindowProxy` used in [HTML 5.2](https://w3c.github.io/html/), [HTML5 Web Messaging](https://www.w3.org/TR/webmessaging), [Touch Events](https://www.w3.org/TR/touch-events)
- `WorkerType` used in [Service Workers 1](https://www.w3.org/TR/service-workers-1)

=> 36 WebIDL names found

Some of them may be type errors in specs (e.g. "int" does not exist, "Array" cannot be used on its own, etc.)
Also, please keep in mind that Reffy only knows about IDL terms defined in the specifications that were crawled **and** that do not have invalid IDL content.


## List of WebIDL names defined in more than one spec

- `ProgressEvent` defined in [Progress Events](https://www.w3.org/TR/progress-events) and [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `ProgressEventInit` defined in [Progress Events](https://www.w3.org/TR/progress-events) and [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `RTCStats` defined in [Identifiers for WebRTC's Statistics API](https://www.w3.org/TR/webrtc-stats) and [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/webrtc)
- `Worker` defined in [Service Workers 1](https://www.w3.org/TR/service-workers-1) and [Web Workers](https://www.w3.org/TR/workers)
- `Worklet` defined in [CSS Painting API Level 1](https://www.w3.org/TR/css-paint-api-1) and [Worklets Level 1](https://www.w3.org/TR/worklets-1)

=> 5 WebIDL names found

"There can be only one"...


## Missing references for WebIDL names

- ["MediaStream Image Capture"](https://www.w3.org/TR/image-capture) uses:
    * `MediaStreamTrack` but does not reference [Media Capture and Streams](https://www.w3.org/TR/mediacapture-streams)
    * `ImageBitmap` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `MediaTrackSupportedConstraints` but does not reference [Media Capture and Streams](https://www.w3.org/TR/mediacapture-streams)
    * `MediaTrackCapabilities` but does not reference [Media Capture and Streams](https://www.w3.org/TR/mediacapture-streams)
    * `MediaTrackConstraintSet` but does not reference [Media Capture and Streams](https://www.w3.org/TR/mediacapture-streams)
    * `ConstrainDOMString` but does not reference [Media Capture and Streams](https://www.w3.org/TR/mediacapture-streams)
    * `ConstrainDouble` but does not reference [Media Capture and Streams](https://www.w3.org/TR/mediacapture-streams)
    * `ConstrainBoolean` but does not reference [Media Capture and Streams](https://www.w3.org/TR/mediacapture-streams)
    * `MediaTrackSettings` but does not reference [Media Capture and Streams](https://www.w3.org/TR/mediacapture-streams)
- [Accelerometer](https://w3c.github.io/accelerometer/) uses:
    * `Sensor` but does not reference [Generic Sensor API](https://www.w3.org/TR/generic-sensor)
    * `SensorOptions` but does not reference [Generic Sensor API](https://www.w3.org/TR/generic-sensor)
- [Ambient Light Sensor](https://www.w3.org/TR/ambient-light) uses:
    * `Sensor` but does not reference [Generic Sensor API](https://www.w3.org/TR/generic-sensor)
    * `SensorOptions` but does not reference [Generic Sensor API](https://www.w3.org/TR/generic-sensor)
- [Clipboard API and events](https://w3c.github.io/clipboard-apis/) uses:
    * `DataTransfer` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `Navigator` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Console Standard](https://console.spec.whatwg.org/) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `Worker` but does not reference [Web Workers](https://www.w3.org/TR/workers) or [Service Workers 1](https://www.w3.org/TR/service-workers-1)
    * `Worklet` but does not reference [CSS Painting API Level 1](https://www.w3.org/TR/css-paint-api-1) or [Worklets Level 1](https://www.w3.org/TR/worklets-1)
- [Credential Management Level 1](https://www.w3.org/TR/credential-management-1) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `HTMLFormElement` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `Navigator` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [CSS Object Model (CSSOM)](https://www.w3.org/TR/cssom-1) uses `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [CSS Painting API Level 1](https://www.w3.org/TR/css-paint-api-1) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `WorkletGlobalScope` but does not reference [Worklets Level 1](https://www.w3.org/TR/worklets-1)
- [CSS Pseudo-Elements Module Level 4](https://www.w3.org/TR/css-pseudo-4) uses `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `HTMLElement` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `HTMLImageElement` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `MouseEvent` but does not reference [UI Events](https://www.w3.org/TR/uievents)
    * `MouseEventInit` but does not reference [UI Events](https://www.w3.org/TR/uievents)
- [Custom Elements](https://www.w3.org/TR/custom-elements) uses `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Encoding](https://www.w3.org/TR/encoding) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `Worker` but does not reference [Web Workers](https://www.w3.org/TR/workers) or [Service Workers 1](https://www.w3.org/TR/service-workers-1)
- [Fetch Standard](https://fetch.spec.whatwg.org/) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `ReferrerPolicy` but does not reference [Referrer Policy](https://www.w3.org/TR/referrer-policy)
    * `WindowOrWorkerGlobalScope` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [File API](https://w3c.github.io/FileAPI/) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/) uses `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Gamepad](https://www.w3.org/TR/gamepad) uses `Navigator` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Generic Sensor API](https://www.w3.org/TR/generic-sensor) uses:
    * `DOMHighResTimeStamp` but does not reference [High Resolution Time Level 3](https://www.w3.org/TR/hr-time-3)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Gyroscope](https://w3c.github.io/gyroscope/) uses:
    * `Sensor` but does not reference [Generic Sensor API](https://www.w3.org/TR/generic-sensor)
    * `SensorOptions` but does not reference [Generic Sensor API](https://www.w3.org/TR/generic-sensor)
- [HTML Canvas 2D Context](http://www.w3.org/TR/2015/REC-2dcontext-20151119/) uses:
    * `MouseEvent` but does not reference [UI Events](https://www.w3.org/TR/uievents)
    * `MouseEventInit` but does not reference [UI Events](https://www.w3.org/TR/uievents)
- [HTML Media Capture](https://w3c.github.io/html-media-capture/) uses `HTMLInputElement` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Identifiers for WebRTC's Statistics API](https://www.w3.org/TR/webrtc-stats) uses `DOMHighResTimeStamp` but does not reference [High Resolution Time Level 3](https://www.w3.org/TR/hr-time-3)
- [Indexed Database API 2.0](https://www.w3.org/TR/IndexedDB-2) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `WindowOrWorkerGlobalScope` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `DOMStringList` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Input Events Level 2](https://www.w3.org/TR/input-events-2) uses `DataTransfer` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Media Session Standard](https://wicg.github.io/mediasession/) uses:
    * `Navigator` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Media Source Extensions™](https://www.w3.org/TR/media-source) uses `URL` but does not reference [URL Standard](https://url.spec.whatwg.org/)
- [MediaStream Recording](https://www.w3.org/TR/mediastream-recording) uses:
    * `MediaStream` but does not reference [Media Capture and Streams](https://www.w3.org/TR/mediacapture-streams)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `DOMHighResTimeStamp` but does not reference [High Resolution Time Level 3](https://www.w3.org/TR/hr-time-3)
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Payment Request API](https://www.w3.org/TR/payment-request) uses `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Performance Timeline Level 2](https://w3c.github.io/performance-timeline/) uses `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Pointer Lock 2.0](https://www.w3.org/TR/pointerlock-2) uses `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Proximity Sensor](https://w3c.github.io/proximity/) uses:
    * `Sensor` but does not reference [Generic Sensor API](https://www.w3.org/TR/generic-sensor)
    * `SensorOptions` but does not reference [Generic Sensor API](https://www.w3.org/TR/generic-sensor)
- [Remote Playback API](https://www.w3.org/TR/remote-playback) uses:
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `HTMLMediaElement` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) uses `WindowOrWorkerGlobalScope` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Service Workers 1](https://www.w3.org/TR/service-workers-1) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `Navigator` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `MessagePort` but does not reference [HTML5 Web Messaging](https://www.w3.org/TR/webmessaging)
    * `WindowOrWorkerGlobalScope` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Shadow DOM](https://www.w3.org/TR/shadow-dom) uses:
    * `Selection` but does not reference [Selection API](https://w3c.github.io/selection-api/)
    * `CaretPosition` but does not reference [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
    * `StyleSheetList` but does not reference [CSS Object Model (CSSOM)](https://www.w3.org/TR/cssom-1)
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Storage Standard](https://storage.spec.whatwg.org/) uses `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [The Permissions API](https://www.w3.org/TR/permissions) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [The Screen Orientation API](https://www.w3.org/TR/screen-orientation) uses `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Touch Events](https://www.w3.org/TR/touch-events) uses `UIEvent` but does not reference [UI Events](https://www.w3.org/TR/uievents)
- [URL Standard](https://url.spec.whatwg.org/) uses `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Wake Lock API](https://www.w3.org/TR/wake-lock) uses:
    * `Navigator` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Web Animations](https://www.w3.org/TR/web-animations-1) uses:
    * `DOMHighResTimeStamp` but does not reference [High Resolution Time Level 3](https://www.w3.org/TR/hr-time-3)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Web App Manifest](https://www.w3.org/TR/appmanifest) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Web Cryptography API](https://www.w3.org/TR/WebCryptoAPI) uses `Worker` but does not reference [Web Workers](https://www.w3.org/TR/workers) or [Service Workers 1](https://www.w3.org/TR/service-workers-1)
- [WebDriver](https://www.w3.org/TR/webdriver) uses `Navigator` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [WebVTT: The Web Video Text Tracks Format](http://www.w3.org/TR/2015/WD-webvtt1-20151208/) uses `TextTrackCue` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Worklets Level 1](https://www.w3.org/TR/worklets-1) uses `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `HTMLFormElement` but does not reference [HTML 5.2](https://w3c.github.io/html/)

=> 97 missing references for IDL definitions found in 47 specifications


## Missing references based on document links

- ["MediaStream Image Capture"](https://www.w3.org/TR/image-capture) links to [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but does not list it in its references
- [Audio Output Devices API](https://w3c.github.io/mediacapture-output/) links to [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but does not list it in its references
- [Beacon](https://www.w3.org/TR/beacon) links to [`https://xhr.spec.whatwg.org/`](https://xhr.spec.whatwg.org/) but does not list it in its references
- [Clipboard API and events](https://w3c.github.io/clipboard-apis/) links to:
    * [`https://w3c.github.io/editing/contentEditable.html`](https://w3c.github.io/editing/contentEditable.html) but does not list it in its references
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but does not list it in its references
- [Compositing and Blending Level 1](https://www.w3.org/TR/compositing-1) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
- [Content Security Policy Level 3](https://www.w3.org/TR/CSP3) links to:
    * [`https://w3c.github.io/reporting/`](https://w3c.github.io/reporting/) but does not list it in its references
    * [`https://www.w3.org/TR/cssom/`](https://www.w3.org/TR/cssom/) but does not list it in its references
- [Credential Management Level 1](https://www.w3.org/TR/credential-management-1) links to:
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but does not list it in its references
    * [`https://w3c.github.io/webappsec/usecases/credentialmanagement/`](https://w3c.github.io/webappsec/usecases/credentialmanagement/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but does not list it in its references
    * [`https://w3c.github.io/webappsec/specs/content-security-policy/`](https://w3c.github.io/webappsec/specs/content-security-policy/) but does not list it in its references
    * [`https://www.w3.org/TR/webmessaging/`](https://www.w3.org/TR/webmessaging/) but does not list it in its references
    * [`https://www.w3.org/TR/web-payments-use-cases/`](https://www.w3.org/TR/web-payments-use-cases/) but does not list it in its references
- [CSS Font Loading Module Level 3](https://www.w3.org/TR/css-font-loading-3) links to:
    * [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/) but does not list it in its references
    * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-css3-fonts-20130212/`](https://www.w3.org/TR/2013/WD-css3-fonts-20130212/) but does not list it in its references
- [CSS Fonts Module Level 3](https://www.w3.org/TR/css-fonts-3) links to:
    * [`https://www.w3.org/TR/2002/WD-css3-webfonts-20020802/`](https://www.w3.org/TR/2002/WD-css3-webfonts-20020802/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/WD-charmod-norm-20120501/`](https://www.w3.org/TR/2012/WD-charmod-norm-20120501/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/CR-css3-conditional-20130404/`](https://www.w3.org/TR/2013/CR-css3-conditional-20130404/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/WD-css3-text-20121113/`](https://www.w3.org/TR/2012/WD-css3-text-20121113/) but does not list it in its references
    * [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/) but does not list it in its references
- [CSS Object Model (CSSOM)](https://www.w3.org/TR/cssom-1) links to:
    * [`https://www.w3.org/TR/css-pseudo-4/`](https://www.w3.org/TR/css-pseudo-4/) but does not list it in its references
    * [`https://www.w3.org/TR/css-namespaces-3/`](https://www.w3.org/TR/css-namespaces-3/) but does not list it in its references
    * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/) but does not list it in its references
    * [`https://www.w3.org/TR/css-display-3/`](https://www.w3.org/TR/css-display-3/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but does not list it in its references
- [CSS Painting API Level 1](https://www.w3.org/TR/css-paint-api-1) links to [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/) but does not list it in its references
- [CSS Pseudo-Elements Module Level 4](https://www.w3.org/TR/css-pseudo-4) links to:
    * [`https://www.w3.org/TR/css3-lists/`](https://www.w3.org/TR/css3-lists/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/) but does not list it in its references
    * [`https://www.w3.org/TR/css-color/`](https://www.w3.org/TR/css-color/) but does not list it in its references
- [CSS Syntax Module Level 3](http://dev.w3.org/csswg/css-syntax/) links to [`https://www.w3.org/TR/selectors-api/`](https://www.w3.org/TR/selectors-api/) but does not list it in its references
- [CSS Typed OM Level 1](https://www.w3.org/TR/css-typed-om-1) links to:
    * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-lists/`](https://www.w3.org/TR/css3-lists/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/) but does not list it in its references
    * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/) but does not list it in its references
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3) links to:
    * [`https://www.w3.org/TR/css-syntax/`](https://www.w3.org/TR/css-syntax/) but does not list it in its references
    * [`https://www.w3.org/TR/cssom-1/`](https://www.w3.org/TR/cssom-1/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-fonts/`](https://www.w3.org/TR/css3-fonts/) but does not list it in its references
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but does not list it in its references
- [CSS Writing Modes Level 3](https://www.w3.org/TR/css-writing-modes-3) links to:
    * [`https://www.w3.org/TR/css-cascade-3/`](https://www.w3.org/TR/css-cascade-3/) but does not list it in its references
    * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-flexbox/`](https://www.w3.org/TR/css3-flexbox/) but does not list it in its references
- [Custom Elements](https://www.w3.org/TR/custom-elements) links to:
    * [`https://w3c.github.io/aria/aria/aria.html`](https://w3c.github.io/aria/aria/aria.html) but does not list it in its references
    * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but does not list it in its references
    * [`https://w3c.github.io/editing/execCommand.html`](https://w3c.github.io/editing/execCommand.html) but does not list it in its references
- [DOM Parsing and Serialization](https://www.w3.org/TR/DOM-Parsing) links to [`https://domparsing.spec.whatwg.org/`](https://domparsing.spec.whatwg.org/) but does not list it in its references
- [Encoding](https://www.w3.org/TR/encoding) links to [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/) but does not list it in its references
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/) links to [`https://w3c.github.io/screen-orientation/`](https://w3c.github.io/screen-orientation/) but does not list it in its references
- [Generic Sensor API](https://www.w3.org/TR/generic-sensor) links to [`https://w3c.github.io/page-visibility/`](https://w3c.github.io/page-visibility/) but does not list it in its references
- [Geometry Interfaces Module Level 1](https://www.w3.org/TR/geometry-1) links to:
    * [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/) but does not list it in its references
    * [`https://www.w3.org/TR/css-transforms-1/`](https://www.w3.org/TR/css-transforms-1/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but does not list it in its references
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
- [Gyroscope](https://w3c.github.io/gyroscope/) links to [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/) but does not list it in its references
- [High Resolution Time Level 3](https://www.w3.org/TR/hr-time-3) links to [`https://w3c.github.io/workers/`](https://w3c.github.io/workers/) but does not list it in its references
- [HTML 5.2](https://w3c.github.io/html/) links to:
    * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/) but does not list it in its references
    * [`https://w3c.github.io/media-source/`](https://w3c.github.io/media-source/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but does not list it in its references
    * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/) but does not list it in its references
    * [`https://www.w3.org/TR/webmessaging/`](https://www.w3.org/TR/webmessaging/) but does not list it in its references
    * [`https://w3c.github.io/aria-in-html/`](https://w3c.github.io/aria-in-html/) but does not list it in its references
    * [`https://w3c.github.io/aria/practices/aria-practices.html`](https://w3c.github.io/aria/practices/aria-practices.html) but does not list it in its references
    * [`https://www.w3.org/TR/css-device-adapt-1/`](https://www.w3.org/TR/css-device-adapt-1/) but does not list it in its references
    * [`https://www.w3.org/TR/turingtest/`](https://www.w3.org/TR/turingtest/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/) but does not list it in its references
    * [`https://www.w3.org/TR/xlink11/`](https://www.w3.org/TR/xlink11/) but does not list it in its references
    * [`https://www.w3.org/TR/becss/`](https://www.w3.org/TR/becss/) but does not list it in its references
- [HTML Canvas 2D Context](http://www.w3.org/TR/2015/REC-2dcontext-20151119/) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
- [Indexed Database API 2.0](https://www.w3.org/TR/IndexedDB-2) links to [`https://infra.spec.whatwg.org/`](https://infra.spec.whatwg.org/) but does not list it in its references
- [Magnetometer](https://www.w3.org/TR/magnetometer) links to:
    * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/) but does not list it in its references
    * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but does not list it in its references
- [Media Capture and Streams](https://www.w3.org/TR/mediacapture-streams) links to:
    * [`https://w3c.github.io/html/webappapis.html`](https://w3c.github.io/html/webappapis.html) but does not list it in its references
    * [`https://w3c.github.io/html/infrastructure.html`](https://w3c.github.io/html/infrastructure.html) but does not list it in its references
- [Media Capture Depth Stream Extensions](https://w3c.github.io/mediacapture-depth/) links to [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but does not list it in its references
- [Media Capture from DOM Elements](https://www.w3.org/TR/mediacapture-fromelement) links to [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but does not list it in its references
- [Media Source Extensions™](https://www.w3.org/TR/media-source) links to [`https://w3c.github.io/encrypted-media/`](https://w3c.github.io/encrypted-media/) but does not list it in its references
- [MediaStream Recording](https://www.w3.org/TR/mediastream-recording) links to:
    * [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/) but does not list it in its references
    * [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/) but does not list it in its references
- [Metadata API for Media Resources 1.0](https://www.w3.org/TR/mediaont-api-1.0) links to:
    * [`https://www.w3.org/TR/mediaont-10/`](https://www.w3.org/TR/mediaont-10/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/REC-mediaont-10-20120209/`](https://www.w3.org/TR/2012/REC-mediaont-10-20120209/) but does not list it in its references
    * [`https://www.w3.org/TR/2011/NOTE-dap-policy-reqs-20110317/`](https://www.w3.org/TR/2011/NOTE-dap-policy-reqs-20110317/) but does not list it in its references
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/) links to:
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but does not list it in its references
    * [`https://www.w3.org/TR/eventsource/`](https://www.w3.org/TR/eventsource/) but does not list it in its references
- [Orientation Sensor](https://www.w3.org/TR/orientation-sensor) links to:
    * [`https://www.w3.org/TR/orientation-event/`](https://www.w3.org/TR/orientation-event/) but does not list it in its references
    * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/) but does not list it in its references
    * [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/) but does not list it in its references
    * [`https://w3c.github.io/magnetometer/`](https://w3c.github.io/magnetometer/) but does not list it in its references
- [Page Visibility Level 2](https://www.w3.org/TR/page-visibility-2) links to [`https://www.w3.org/TR/html/full`](https://www.w3.org/TR/html/full) but does not list it in its references
- [Payment Handler API](https://www.w3.org/TR/payment-handler) links to:
    * [`https://w3c.github.io/payment-handler/?specStatus=WD;shortName=payment-handler;publishDate=2017-06-24;previousMaturity=WD;previousPublishDate=2017-06-23`](https://w3c.github.io/payment-handler/?specStatus=WD;shortName=payment-handler;publishDate=2017-06-24;previousMaturity=WD;previousPublishDate=2017-06-23) but does not list it in its references
    * [`https://w3c.github.io/payment-method-manifest/`](https://w3c.github.io/payment-method-manifest/) but does not list it in its references
- [Pointer Events - Level 2](https://www.w3.org/TR/pointerevents2) links to [`https://www.w3.org/TR/touch-events/`](https://www.w3.org/TR/touch-events/) but does not list it in its references
- [Pointer Lock 2.0](https://www.w3.org/TR/pointerlock-2) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
- [Preload](https://www.w3.org/TR/preload) links to:
    * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but does not list it in its references
    * [`https://w3c.github.io/webappsec/specs/content-security-policy/`](https://w3c.github.io/webappsec/specs/content-security-policy/) but does not list it in its references
- [Presentation API](https://w3c.github.io/presentation-api/) links to [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but does not list it in its references
- [Progress Events](https://www.w3.org/TR/progress-events) links to:
    * [`https://xhr.spec.whatwg.org/`](https://xhr.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/) but does not list it in its references
- [Push API](https://www.w3.org/TR/push-api) links to:
    * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/) but does not list it in its references
- [Remote Playback API](https://www.w3.org/TR/remote-playback) links to [`https://url.spec.whatwg.org/`](https://url.spec.whatwg.org/) but does not list it in its references
- [Resource Timing Level 2](https://www.w3.org/TR/resource-timing-2) links to [`https://w3c.github.io/navigation-timing/`](https://w3c.github.io/navigation-timing/) but does not list it in its references
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/) links to:
    * [`https://www.w3.org/TR/svg-integration/`](https://www.w3.org/TR/svg-integration/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/CR-WebIDL-20120419/`](https://www.w3.org/TR/2012/CR-WebIDL-20120419/) but does not list it in its references
    * [`https://www.w3.org/TR/filter-effects/`](https://www.w3.org/TR/filter-effects/) but does not list it in its references
    * [`https://url.spec.whatwg.org/`](https://url.spec.whatwg.org/) but does not list it in its references
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/2014/WD-geometry-1-20140522/`](https://www.w3.org/TR/2014/WD-geometry-1-20140522/) but does not list it in its references
    * [`https://www.w3.org/TR/wai-aria-1.1/`](https://www.w3.org/TR/wai-aria-1.1/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css-cascade-3/`](https://www.w3.org/TR/css-cascade-3/) but does not list it in its references
    * [`https://www.w3.org/TR/wai-aria/states_and_properties`](https://www.w3.org/TR/wai-aria/states_and_properties) but does not list it in its references
    * [`https://w3c.github.io/html-aam/`](https://w3c.github.io/html-aam/) but does not list it in its references
    * [`https://w3c.github.io/aria/svg-aam/svg-aam.html`](https://w3c.github.io/aria/svg-aam/svg-aam.html) but does not list it in its references
    * [`https://w3c.github.io/selection-api/`](https://w3c.github.io/selection-api/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/REC-css-style-attr-20131107/`](https://www.w3.org/TR/2013/REC-css-style-attr-20131107/) but does not list it in its references
    * [`https://www.w3.org/TR/css-position-3/`](https://www.w3.org/TR/css-position-3/) but does not list it in its references
    * [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-exclusions/`](https://www.w3.org/TR/css3-exclusions/) but does not list it in its references
    * [`https://www.w3.org/TR/css-shapes/`](https://www.w3.org/TR/css-shapes/) but does not list it in its references
    * [`https://www.w3.org/TR/resource-hints/`](https://www.w3.org/TR/resource-hints/) but does not list it in its references
    * [`https://www.w3.org/TR/2003/REC-MathML2-20031021/`](https://www.w3.org/TR/2003/REC-MathML2-20031021/) but does not list it in its references
    * [`https://www.w3.org/TR/html51/full`](https://www.w3.org/TR/html51/full) but does not list it in its references
    * [`https://www.w3.org/TR/orientation-event/`](https://www.w3.org/TR/orientation-event/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/`](https://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-transforms/`](https://www.w3.org/TR/css3-transforms/) but does not list it in its references
    * [`https://www.w3.org/TR/cssom/`](https://www.w3.org/TR/cssom/) but does not list it in its references
    * [`https://www.w3.org/TR/core-aam-1.1/`](https://www.w3.org/TR/core-aam-1.1/) but does not list it in its references
    * [`https://www.w3.org/TR/accname-aam-1.1/`](https://www.w3.org/TR/accname-aam-1.1/) but does not list it in its references
    * [`https://w3c.github.io/aria/aria/graphics.html`](https://w3c.github.io/aria/aria/graphics.html) but does not list it in its references
    * [`https://w3c.github.io/webcomponents/spec/shadow/`](https://w3c.github.io/webcomponents/spec/shadow/) but does not list it in its references
    * [`https://www.w3.org/TR/smil/`](https://www.w3.org/TR/smil/) but does not list it in its references
    * [`https://www.w3.org/TR/xsl/`](https://www.w3.org/TR/xsl/) but does not list it in its references
    * [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/) but does not list it in its references
    * [`https://www.w3.org/TR/2015/WD-svg-markers-20150407/`](https://www.w3.org/TR/2015/WD-svg-markers-20150407/) but does not list it in its references
    * [`https://www.w3.org/TR/2015/WD-svg-strokes-20150407/`](https://www.w3.org/TR/2015/WD-svg-strokes-20150407/) but does not list it in its references
- [Screen Capture](https://www.w3.org/TR/screen-capture) links to [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but does not list it in its references
- [Selection API](https://w3c.github.io/selection-api/) links to [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/) but does not list it in its references
- [Service Workers 1](https://www.w3.org/TR/service-workers-1) links to:
    * [`https://w3c.github.io/push-api/`](https://w3c.github.io/push-api/) but does not list it in its references
    * [`https://w3c.github.io/webappsec/specs/powerfulfeatures/`](https://w3c.github.io/webappsec/specs/powerfulfeatures/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-csp/2/`](https://w3c.github.io/webappsec-csp/2/) but does not list it in its references
- [Shadow DOM](https://www.w3.org/TR/shadow-dom) links to:
    * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/) but does not list it in its references
    * [`https://www.w3.org/TR/cssom/`](https://www.w3.org/TR/cssom/) but does not list it in its references
- [The Screen Orientation API](https://www.w3.org/TR/screen-orientation) links to [`https://fullscreen.spec.whatwg.org/`](https://fullscreen.spec.whatwg.org/) but does not list it in its references
- [UI Events](https://www.w3.org/TR/uievents) links to:
    * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/) but does not list it in its references
    * [`https://www.w3.org/TR/css-syntax-3/`](https://www.w3.org/TR/css-syntax-3/) but does not list it in its references
    * [`https://www.w3.org/TR/2004/REC-xml-20040204/`](https://www.w3.org/TR/2004/REC-xml-20040204/) but does not list it in its references
- [User Interface Security and the Visibility API](https://www.w3.org/TR/UISecurity) links to:
    * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/) but does not list it in its references
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
    * [`https://w3c.github.io/requestidlecallback/`](https://w3c.github.io/requestidlecallback/) but does not list it in its references
- [Vibration API (Second Edition)](https://www.w3.org/TR/vibration) links to [`https://w3c.github.io/page-visibility/`](https://w3c.github.io/page-visibility/) but does not list it in its references
- [W3C DOM 4.1](https://w3c.github.io/dom/) links to:
    * [`https://infra.spec.whatwg.org/`](https://infra.spec.whatwg.org/) but does not list it in its references
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
    * [`https://url.spec.whatwg.org/`](https://url.spec.whatwg.org/) but does not list it in its references
- [Web Animations](https://www.w3.org/TR/web-animations-1) links to:
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/) but does not list it in its references
- [Web App Manifest](https://www.w3.org/TR/appmanifest) links to:
    * [`https://w3c.github.io/screen-orientation/`](https://w3c.github.io/screen-orientation/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but does not list it in its references
- [Web Audio API](https://www.w3.org/TR/webaudio) links to:
    * [`https://w3c.github.io/workers/`](https://w3c.github.io/workers/) but does not list it in its references
    * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but does not list it in its references
- [Web Authentication: An API for accessing Public Key Credentials](https://w3c.github.io/webauthn/) links to:
    * [`https://w3c.github.io/html/browsers.html`](https://w3c.github.io/html/browsers.html) but does not list it in its references
    * [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/) but does not list it in its references
- [Web Workers](https://www.w3.org/TR/workers) links to [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/) but does not list it in its references
- [WebDriver](https://www.w3.org/TR/webdriver) links to:
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but does not list it in its references
    * [`https://w3c.github.io/DOM-Parsing/`](https://w3c.github.io/DOM-Parsing/) but does not list it in its references
    * [`https://w3c.github.io/editing/contentEditable.html`](https://w3c.github.io/editing/contentEditable.html) but does not list it in its references
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but does not list it in its references
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
- [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/webrtc) links to [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but does not list it in its references
- [WebVTT: The Web Video Text Tracks Format](http://www.w3.org/TR/2015/WD-webvtt1-20151208/) links to:
    * [`https://w3c.github.io/webvtt/`](https://w3c.github.io/webvtt/) but does not list it in its references
    * [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/) but does not list it in its references
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/) links to [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/) but does not list it in its references

=> 183 missing references for links found in 66 specifications

Any link to an external document from within a specification should trigger the creation of a corresponding entry in the references section.

Note Reffy only reports on links to "well-known" specs and ignores links to non-usual specs (e.g. PDF documents, etc.) for now.


## Reference URL is inconsistent with URL used in document links

- ["MediaStream Image Capture"](https://www.w3.org/TR/image-capture) links to [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
- [Beacon](https://www.w3.org/TR/beacon) links to [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Compositing and Blending Level 1](https://www.w3.org/TR/compositing-1) links to:
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but related reference "CSS3BG" uses URL [`http://www.w3.org/TR/2012/CR-css3-background-20120724/`](http://www.w3.org/TR/2012/CR-css3-background-20120724/)
    * [`https://www.w3.org/TR/2003/REC-SVG11-20030114/`](https://www.w3.org/TR/2003/REC-SVG11-20030114/) but related reference "SVG11" uses URL [`http://www.w3.org/TR/SVG11/`](http://www.w3.org/TR/SVG11/)
    * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but related reference "CSS3COLOR" uses URL [`http://www.w3.org/TR/2011/REC-css3-color-20110607`](http://www.w3.org/TR/2011/REC-css3-color-20110607)
    * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/) but related reference "SVG11" uses URL [`http://www.w3.org/TR/SVG11/`](http://www.w3.org/TR/SVG11/)
    * [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/) but related reference "2dcontext2" uses URL [`http://www.w3.org/TR/2dcontext2/`](http://www.w3.org/TR/2dcontext2/)
- [Cooperative Scheduling of Background Tasks](https://www.w3.org/TR/requestidlecallback) links to:
    * [`https://www.w3.org/TR/2011/WD-html5-20110525/`](https://www.w3.org/TR/2011/WD-html5-20110525/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
    * [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/) but related reference "HR-TIME" uses URL [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/)
- [CSS Fonts Module Level 3](https://www.w3.org/TR/css-fonts-3) links to:
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML5" uses URL [`http://www.w3.org/TR/2013/CR-html5-20130806/`](http://www.w3.org/TR/2013/CR-html5-20130806/)
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS3VAL" uses URL [`http://www.w3.org/TR/2013/CR-css3-values-20130730/`](http://www.w3.org/TR/2013/CR-css3-values-20130730/)
- [CSS Object Model (CSSOM)](https://www.w3.org/TR/cssom-1) links to [`https://www.w3.org/TR/mediaqueries-4/`](https://www.w3.org/TR/mediaqueries-4/) but related reference "MEDIAQUERIES-4" uses URL [`http://www.w3.org/TR/2016/WD-mediaqueries-4-20160126/`](http://www.w3.org/TR/2016/WD-mediaqueries-4-20160126/)
- [CSS Properties and Values API Level 1](https://www.w3.org/TR/css-properties-values-api-1) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS3-VALUES" uses URL [`http://www.w3.org/TR/css-values/`](http://www.w3.org/TR/css-values/)
- [CSS Syntax Module Level 3](http://dev.w3.org/csswg/css-syntax/) links to:
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but related reference "SELECT" uses URL [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/)
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/css-typed-om-1) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES" uses URL [`http://www.w3.org/TR/css-values/`](http://www.w3.org/TR/css-values/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/css-writing-modes-3) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES" uses URL [`http://www.w3.org/TR/css-values/`](http://www.w3.org/TR/css-values/)
- [DeviceOrientation Event Specification](https://w3c.github.io/deviceorientation/spec-source-orientation.html) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML51" uses URL [`https://www.w3.org/TR/2016/REC-html51-20161101/`](https://www.w3.org/TR/2016/REC-html51-20161101/)
- [Encrypted Media Extensions](https://www.w3.org/TR/encrypted-media) links to:
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://www.w3.org/TR/2015/REC-dom-20151119/`](https://www.w3.org/TR/2015/REC-dom-20151119/)
    * [`https://www.w3.org/TR/html52/`](https://www.w3.org/TR/html52/) but related reference "HTML51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
    * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/) but related reference "ENCODING" uses URL [`https://www.w3.org/TR/2016/CR-encoding-20161215/`](https://www.w3.org/TR/2016/CR-encoding-20161215/)
- [HTML 5.2](https://w3c.github.io/html/) links to:
    * [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/) but related reference "CSSOM-VIEW" uses URL [`https://www.w3.org/TR/cssom-view-1/`](https://www.w3.org/TR/cssom-view-1/)
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/) but related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
    * [`https://www.w3.org/TR/1999/REC-xpath-19991116`](https://www.w3.org/TR/1999/REC-xpath-19991116) but related reference "XPATH" uses URL [`https://www.w3.org/TR/xpath`](https://www.w3.org/TR/xpath)
    * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but related reference "SERVICE-WORKERS" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but related reference "WORKERS" uses URL [`https://www.w3.org/TR/workers/`](https://www.w3.org/TR/workers/)
- [HTML Canvas 2D Context](http://www.w3.org/TR/2015/REC-2dcontext-20151119/) links to [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML" uses URL [`http://www.w3.org/TR/html5/`](http://www.w3.org/TR/html5/)
- [Identifiers for WebRTC's Statistics API](https://www.w3.org/TR/webrtc-stats) links to [`https://www.w3.org/TR/2014/REC-html5-20141028/`](https://www.w3.org/TR/2014/REC-html5-20141028/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
- [Indexed Database API 2.0](https://www.w3.org/TR/IndexedDB-2) links to:
    * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but related reference "DOM" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
    * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
    * [`https://www.w3.org/TR/domcore/`](https://www.w3.org/TR/domcore/) but related reference "DOM" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
- [Input Events Level 2](https://www.w3.org/TR/input-events-2) links to [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "UI-EVENTS" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
- [Media Capture and Streams](https://www.w3.org/TR/mediacapture-streams) links to [`https://www.w3.org/TR/2015/WD-html51-20150506/`](https://www.w3.org/TR/2015/WD-html51-20150506/) but related reference "HTML5" uses URL [`http://www.w3.org/TR/html5/`](http://www.w3.org/TR/html5/)
- [Media Capture from DOM Elements](https://www.w3.org/TR/mediacapture-fromelement) links to [`https://www.w3.org/TR/2dcontext2/`](https://www.w3.org/TR/2dcontext2/) but related reference "2DCONTEXT" uses URL [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/)
- [MediaStream Recording](https://www.w3.org/TR/mediastream-recording) links to [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
- [Metadata API for Media Resources 1.0](https://www.w3.org/TR/mediaont-api-1.0) links to [`https://www.w3.org/TR/2012/REC-media-frags-20120925/`](https://www.w3.org/TR/2012/REC-media-frags-20120925/) but related reference "MEDIA-FRAGMENTS" uses URL [`http://www.w3.org/TR/media-frags/`](http://www.w3.org/TR/media-frags/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/) links to:
    * [`https://www.w3.org/TR/2008/REC-xml-20081126/`](https://www.w3.org/TR/2008/REC-xml-20081126/) but related reference "XML" uses URL [`https://www.w3.org/TR/xml`](https://www.w3.org/TR/xml)
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
- [Navigation Timing Level 2](https://www.w3.org/TR/navigation-timing-2) links to [`https://www.w3.org/TR/service-workers/`](https://www.w3.org/TR/service-workers/) but related reference "SERVICE-WORKERS" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
- [Orientation Sensor](https://www.w3.org/TR/orientation-sensor) links to:
    * [`https://w3c.github.io/accelerometer/`](https://w3c.github.io/accelerometer/) but related reference "ACCELEROMETER" uses URL [`https://www.w3.org/TR/accelerometer/`](https://www.w3.org/TR/accelerometer/)
    * [`https://w3c.github.io/gyroscope/`](https://w3c.github.io/gyroscope/) but related reference "GYROSCOPE" uses URL [`https://www.w3.org/TR/gyroscope/`](https://www.w3.org/TR/gyroscope/)
- [Page Visibility Level 2](https://www.w3.org/TR/page-visibility-2) links to:
    * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM4" uses URL [`https://www.w3.org/TR/2015/REC-dom-20151119/`](https://www.w3.org/TR/2015/REC-dom-20151119/)
- [Pointer Lock 2.0](https://www.w3.org/TR/pointerlock-2) links to [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but related reference "DOM4" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
- [Preload](https://www.w3.org/TR/preload) links to [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
- [Presentation API](https://w3c.github.io/presentation-api/) links to [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/) but related reference "MIXED-CONTENT" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)
- [Push API](https://www.w3.org/TR/push-api) links to:
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/service-workers/`](https://www.w3.org/TR/service-workers/) but related reference "SERVICE-WORKERS" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
- [Referrer Policy](https://www.w3.org/TR/referrer-policy) links to:
    * [`https://www.w3.org/TR/2010/REC-wsc-ui-20100812/`](https://www.w3.org/TR/2010/REC-wsc-ui-20100812/) but related reference "WSC-UI" uses URL [`https://www.w3.org/TR/wsc-ui/`](https://www.w3.org/TR/wsc-ui/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but related reference "DOM4" uses URL [`https://www.w3.org/TR/dom`](https://www.w3.org/TR/dom)
- [Resource Timing Level 2](https://www.w3.org/TR/resource-timing-2) links to:
    * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/) but related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/service-workers/`](https://www.w3.org/TR/service-workers/) but related reference "SERVICE-WORKERS" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/) links to:
    * [`https://www.w3.org/TR/2008/REC-xml-20081126/`](https://www.w3.org/TR/2008/REC-xml-20081126/) but related reference "xml" uses URL [`https://www.w3.org/TR/xml`](https://www.w3.org/TR/xml)
    * [`https://www.w3.org/TR/2006/REC-xml-names-20060816/`](https://www.w3.org/TR/2006/REC-xml-names-20060816/) but related reference "xml-names" uses URL [`https://www.w3.org/TR/xml-names`](https://www.w3.org/TR/xml-names)
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "css-values" uses URL [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/)
    * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "html51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
    * [`https://www.w3.org/TR/2011/REC-CSS2-20110607/`](https://www.w3.org/TR/2011/REC-CSS2-20110607/) but related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2`](https://www.w3.org/TR/CSS2)
    * [`https://www.w3.org/TR/2014/WD-dom-20140204/`](https://www.w3.org/TR/2014/WD-dom-20140204/) but related reference "dom" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
    * [`https://www.w3.org/TR/compositing/`](https://www.w3.org/TR/compositing/) but related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
    * [`https://www.w3.org/TR/2015/CR-compositing-1-20150113/`](https://www.w3.org/TR/2015/CR-compositing-1-20150113/) but related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
    * [`https://www.w3.org/TR/2015/CR-compositing-1-20150113`](https://www.w3.org/TR/2015/CR-compositing-1-20150113) but related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
    * [`https://www.w3.org/TR/2012/WD-css3-values-20120308/`](https://www.w3.org/TR/2012/WD-css3-values-20120308/) but related reference "css-values" uses URL [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/)
    * [`https://www.w3.org/TR/2014/CR-html5-20140204/`](https://www.w3.org/TR/2014/CR-html5-20140204/) but related reference "html51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
    * [`https://www.w3.org/TR/2013/CR-html5-20130806/`](https://www.w3.org/TR/2013/CR-html5-20130806/) but related reference "html51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
    * [`https://www.w3.org/TR/2015/REC-dom-20151119/`](https://www.w3.org/TR/2015/REC-dom-20151119/) but related reference "dom" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
    * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but related reference "dom" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
    * [`https://www.w3.org/TR/2015/WD-html51-20150323/`](https://www.w3.org/TR/2015/WD-html51-20150323/) but related reference "html51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
    * [`https://www.w3.org/TR/2012/WD-compositing-20120816/`](https://www.w3.org/TR/2012/WD-compositing-20120816/) but related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
    * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "css-writing-modes-3" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
    * [`https://www.w3.org/TR/2011/WD-css3-fonts-20111004/`](https://www.w3.org/TR/2011/WD-css3-fonts-20111004/) but related reference "css-fonts-3" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
    * [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/) but related reference "DOM-Level-2-Style" uses URL [`https://www.w3.org/TR/DOM-Level-2-Style/`](https://www.w3.org/TR/DOM-Level-2-Style/)
    * [`https://www.w3.org/TR/2015/CR-css-ui-3-20150707/`](https://www.w3.org/TR/2015/CR-css-ui-3-20150707/) but related reference "css-ui-3" uses URL [`https://www.w3.org/TR/css-ui-3/`](https://www.w3.org/TR/css-ui-3/)
    * [`https://www.w3.org/TR/2001/REC-smil-animation-20010904/`](https://www.w3.org/TR/2001/REC-smil-animation-20010904/) but related reference "smil-animation" uses URL [`https://www.w3.org/TR/smil-animation/`](https://www.w3.org/TR/smil-animation/)
    * [`https://www.w3.org/TR/2013/WD-shadow-dom-20130514/`](https://www.w3.org/TR/2013/WD-shadow-dom-20130514/) but related reference "shadow-dom" uses URL [`https://www.w3.org/TR/shadow-dom/`](https://www.w3.org/TR/shadow-dom/)
    * [`https://www.w3.org/TR/2001/REC-xlink-20010627/`](https://www.w3.org/TR/2001/REC-xlink-20010627/) but related reference "xlink" uses URL [`https://www.w3.org/TR/xlink/`](https://www.w3.org/TR/xlink/)
    * [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Views-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Views-20001113/) but related reference "DOM-Level-2-Views" uses URL [`https://www.w3.org/TR/DOM-Level-2-Views`](https://www.w3.org/TR/DOM-Level-2-Views)
    * [`https://www.w3.org/TR/2012/WD-css3-animations-20120403/`](https://www.w3.org/TR/2012/WD-css3-animations-20120403/) but related reference "css3-animations" uses URL [`https://www.w3.org/TR/css3-animations/`](https://www.w3.org/TR/css3-animations/)
    * [`https://w3c.github.io/dom/`](https://w3c.github.io/dom/) but related reference "dom" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
    * [`https://w3c.github.io/html/`](https://w3c.github.io/html/) but related reference "html51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
    * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "uievents" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
    * [`https://www.w3.org/TR/2015/NOTE-UAAG20-20151215/`](https://www.w3.org/TR/2015/NOTE-UAAG20-20151215/) but related reference "UAAG20" uses URL [`https://www.w3.org/TR/UAAG20/`](https://www.w3.org/TR/UAAG20/)
    * [`https://www.w3.org/TR/2008/REC-CSS2-20080411/`](https://www.w3.org/TR/2008/REC-CSS2-20080411/) but related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2`](https://www.w3.org/TR/CSS2)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) links to [`https://www.w3.org/TR/geolocation-API/`](https://www.w3.org/TR/geolocation-API/) but related reference "GEOLOCATION-API" uses URL [`http://dev.w3.org/geo/api/spec-source.html`](http://dev.w3.org/geo/api/spec-source.html)
- [Selection API](https://w3c.github.io/selection-api/) links to [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM4" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Selectors API Level 1](https://www.w3.org/TR/selectors-api) links to [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/) but related reference "SELECT" uses URL [`http://www.w3.org/TR/2011/REC-css3-selectors-20110929/`](http://www.w3.org/TR/2011/REC-css3-selectors-20110929/)
- [Selectors Level 3](http://www.w3.org/TR/2011/REC-css3-selectors-20110929/) links to:
    * [`https://www.w3.org/TR/css3-namespace/`](https://www.w3.org/TR/css3-namespace/) but related reference "CSS3NAMESPACE" uses URL [`http://www.w3.org/TR/2011/REC-css3-namespace-20110929/`](http://www.w3.org/TR/2011/REC-css3-namespace-20110929/)
    * [`https://www.w3.org/TR/2001/PR-SVG-20010719/`](https://www.w3.org/TR/2001/PR-SVG-20010719/) but related reference "SVG11" uses URL [`http://www.w3.org/TR/2011/REC-SVG11-20110816/`](http://www.w3.org/TR/2011/REC-SVG11-20110816/)
    * [`https://www.w3.org/TR/2011/REC-CSS2-20110607/`](https://www.w3.org/TR/2011/REC-CSS2-20110607/) but related reference "" uses URL [`http://www.w3.org/TR/2009/CR-CSS2-20090908`](http://www.w3.org/TR/2009/CR-CSS2-20090908)
- [Shadow DOM](https://www.w3.org/TR/shadow-dom) links to [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "uievents" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
- [UI Events](https://www.w3.org/TR/uievents) links to [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but related reference "DOM-Level-3-Core" uses URL [`http://www.w3.org/TR/DOM-Level-3-Core/`](http://www.w3.org/TR/DOM-Level-3-Core/)
- [User Interface Security and the Visibility API](https://www.w3.org/TR/UISecurity) links to [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/) but related reference "CSSOM-VIEW-1" uses URL [`http://www.w3.org/TR/cssom-view-1/`](http://www.w3.org/TR/cssom-view-1/)
- [W3C DOM 4.1](https://w3c.github.io/dom/) links to:
    * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but related reference "DOM" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
    * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
    * [`https://www.w3.org/TR/2015/REC-dom-20151119/`](https://www.w3.org/TR/2015/REC-dom-20151119/) but related reference "DOM" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
- [Web Animations](https://www.w3.org/TR/web-animations-1) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS3VAL" uses URL [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/)
- [Web App Manifest](https://www.w3.org/TR/appmanifest) links to:
    * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but related reference "SERVICE-WORKERS-1" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
- [Web Audio API](https://www.w3.org/TR/webaudio) links to [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but related reference "DOM" uses URL [`http://www.w3.org/TR/dom/`](http://www.w3.org/TR/dom/)
- [Web Authentication: An API for accessing Public Key Credentials](https://w3c.github.io/webauthn/) links to [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
- [Web Notifications](https://www.w3.org/TR/notifications) links to:
    * [`https://notifications.spec.whatwg.org/`](https://notifications.spec.whatwg.org/) but related reference "WEBIDL" uses URL [`https://www.w3.org/TR/2015/PR-notifications-20150910/`](https://www.w3.org/TR/2015/PR-notifications-20150910/)
    * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/2014/REC-html5-20141028/`](https://www.w3.org/TR/2014/REC-html5-20141028/)
- [Web Workers](https://www.w3.org/TR/workers) links to [`https://www.w3.org/TR/domcore/`](https://www.w3.org/TR/domcore/) but related reference "DOM4" uses URL [`http://www.w3.org/TR/dom/`](http://www.w3.org/TR/dom/)
- [WebDriver](https://www.w3.org/TR/webdriver) links to:
    * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "UI-EVENTS" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS3-VALUES" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
- [WebIDL Level 1](https://www.w3.org/TR/WebIDL-1) links to:
    * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but related reference "DOM" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
    * [`https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/`](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/) but related reference "DOM" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
    * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
    * [`https://www.w3.org/TR/2011/WD-html5-20110525/`](https://www.w3.org/TR/2011/WD-html5-20110525/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/webrtc) links to [`https://w3c.github.io/webcrypto/`](https://w3c.github.io/webcrypto/) but related reference "WebCryptoAPI" uses URL [`https://www.w3.org/TR/WebCryptoAPI/`](https://www.w3.org/TR/WebCryptoAPI/)

=> 113 inconsistent references for links found in 49 specifications

Links in the body of a specification should be to the same document as that pointed to by the related reference in the References section. The specifications reported here use a different URL. For instance, they may use a link to the Editor's Draft but target the latest published version in the References section. There should be some consistency across the specification.
