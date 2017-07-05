% Reffy crawl results
% Reffy
% July 05, 2017

113 specifications were crawled in this report.


## Specifications that could not be rendered

Reffy could not fetch or render these specifications for some reason. This may happen when a network error occurred or when a specification uses an old version of ReSpec.

- [Web Audio API](https://webaudio.github.io/web-audio-api/): `undefined`

=> 1 specification found


## Specifications without normative dependencies

- [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)

=> 1 specification found

Basically all specifications have normative dependencies on some other specification. Reffy could not find any normative dependencies for the specifications mentioned above, which seems strange.


## Specifications without WebIDL definitions

- [Compositing and Blending Level 1](http://dev.w3.org/fxtf/compositing-1/)
- [ContentEditable](https://w3c.github.io/editing/contentEditable.html)
- [CSS Syntax Module Level 3](http://dev.w3.org/csswg/css-syntax/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/)
- [CSS Writing Modes Level 3](http://dev.w3.org/csswg/css-writing-modes-3/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)
- [Preload](https://w3c.github.io/preload/)
- [Selectors Level 3](http://www.w3.org/TR/2011/REC-css3-selectors-20110929/)
- [Streams Standard](https://streams.spec.whatwg.org/)
- [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/)
- [UI Events KeyboardEvent key Values](https://w3c.github.io/uievents-key/)

=> 11 specifications found

Not all specifications define IDL content, presence in this list may be completely normal. Reffy's current focus is on IDL specifications, the number of specifications listed here should remain minimal.


## List of specifications with invalid WebIDL content

- [CSS Fonts Module Level 3](http://dev.w3.org/csswg/css-fonts/)
- [Metadata API for Media Resources 1.0](http://www.w3.org/TR/2014/REC-mediaont-api-1.0-20140313/)
- [The WebSocket API](http://www.w3.org/TR/2012/CR-websockets-20120920/)
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html)

=> 4 specifications found

WebIDL continues to evolve. Reffy may incorrectly report as invalid perfectly valid WebIDL content if the specification uses bleeding-edge WebIDL features


## List of specifications with obsolete WebIDL constructs

- [Gamepad](https://w3c.github.io/gamepad/)
- [Geometry Interfaces Module Level 1](http://dev.w3.org/fxtf/geometry/)
- [High Resolution Time Level 3](https://w3c.github.io/hr-time/)
- [HTML 5.2](https://w3c.github.io/html/)
- [HTML5 Web Messaging](https://www.w3.org/TR/webmessaging)
- [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
- [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/)
- [Performance Timeline Level 2](https://w3c.github.io/performance-timeline/)
- [Resource Timing Level 3](https://w3c.github.io/resource-timing/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/)

=> 10 specifications found

A typical example is the use of `[]` instead of `FrozenArray`.


## Specifications that use WebIDL but do not reference the WebIDL spec

- [CSS Fonts Module Level 3](http://dev.w3.org/csswg/css-fonts/)
- [Element Traversal Specification](http://www.w3.org/TR/2008/REC-ElementTraversal-20081222/)
- [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/)
- [Input Events Level 1](https://rawgit.com/w3c/input-events/v1/index.html)
- [Page Visibility Level 2](https://w3c.github.io/page-visibility/)
- [Pointer Events - Level 2](https://w3c.github.io/pointerevents/)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/)
- [Selectors API Level 1](http://www.w3.org/TR/2013/REC-selectors-api-20130221/)
- [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/)
- [Static Range](https://w3c.github.io/staticrange/)
- [UI Events](https://www.w3.org/TR/uievents)
- [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)

=> 12 specifications found



## List of WebIDL names not defined in the specifications crawled

- `DocumentOrShadowRoot` used in [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/), [Pointer Lock 2.0](https://w3c.github.io/pointerlock/), [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/)
- `OverconstrainedError` used in [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
- `RTCError` used in [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/)
- `ReadableStream` used in [Fetch Standard](https://fetch.spec.whatwg.org/)
- `Transferable` used in [HTML5 Web Messaging](https://www.w3.org/TR/webmessaging)
- `Type` used in [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- `WindowProxy` used in [HTML 5.2](https://w3c.github.io/html/), [HTML5 Web Messaging](https://www.w3.org/TR/webmessaging), [Touch Events - Level 2](http://dvcs.w3.org/hg/webevents/raw-file/v1/touchevents.html)

=> 7 WebIDL names found

Some of them may be type errors in specs (e.g. "int" does not exist, "Array" cannot be used on its own, etc.)
Also, please keep in mind that Reffy only knows about IDL terms defined in the specifications that were crawled **and** that do not have invalid IDL content.


## List of WebIDL names defined in more than one spec

- `ProgressEvent` defined in [Progress Events](https://www.w3.org/TR/progress-events) and [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `ProgressEventInit` defined in [Progress Events](https://www.w3.org/TR/progress-events) and [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `RTCStats` defined in [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/) and [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/)
- `Worker` defined in [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) and [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
- `Worklet` defined in [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) and [Worklets Level 1](https://drafts.css-houdini.org/worklets/)

=> 5 WebIDL names found

"There can be only one"...


## Missing references for WebIDL names

- [Battery Status API](https://w3c.github.io/battery/) uses `EventTarget` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
- [Clipboard API and events](https://w3c.github.io/clipboard-apis/) uses:
    * `DataTransfer` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `Navigator` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Console Standard](https://console.spec.whatwg.org/) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `Worker` but does not reference [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) or [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
    * `Worklet` but does not reference [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) or [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `Navigator` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `HTMLFormElement` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [CSS Font Loading Module Level 3](http://dev.w3.org/csswg/css-font-loading/) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/) uses `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/) uses `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/) uses `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `HTMLElement` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `HTMLImageElement` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `MouseEvent` but does not reference [UI Events](https://www.w3.org/TR/uievents)
    * `MouseEventInit` but does not reference [UI Events](https://www.w3.org/TR/uievents)
- [Custom Elements](https://w3c.github.io/webcomponents/spec/custom/) uses `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Encoding Standard](https://encoding.spec.whatwg.org/) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `Worker` but does not reference [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) or [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
- [Fetch Standard](https://fetch.spec.whatwg.org/) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `WindowOrWorkerGlobalScope` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [File API](https://w3c.github.io/FileAPI/) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/) uses `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Gamepad](https://w3c.github.io/gamepad/) uses `Navigator` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Generic Sensor API](https://w3c.github.io/sensors/) uses `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Geometry Interfaces Module Level 1](http://dev.w3.org/fxtf/geometry/) uses `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [High Resolution Time Level 3](https://w3c.github.io/hr-time/) uses `EventTarget` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
- [HTML Canvas 2D Context](http://www.w3.org/TR/2015/REC-2dcontext-20151119/) uses:
    * `Element` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
    * `MouseEvent` but does not reference [UI Events](https://www.w3.org/TR/uievents)
    * `MouseEventInit` but does not reference [UI Events](https://www.w3.org/TR/uievents)
- [HTML Media Capture](https://w3c.github.io/html-media-capture/) uses `HTMLInputElement` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Indexed Database API 2.0](https://w3c.github.io/IndexedDB/) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `WindowOrWorkerGlobalScope` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `DOMStringList` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Input Events Level 1](https://rawgit.com/w3c/input-events/v1/index.html) uses `DataTransfer` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Media Capture and Streams](https://w3c.github.io/mediacapture-main/) uses:
    * `EventTarget` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
    * `Event` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
    * `EventInit` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
- [Media Session Standard](https://wicg.github.io/mediasession/) uses:
    * `Navigator` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Media Source Extensions™](https://w3c.github.io/media-source/) uses:
    * `EventTarget` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
    * `URL` but does not reference [URL Standard](https://url.spec.whatwg.org/)
- [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/) uses:
    * `MediaStreamTrack` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `ImageBitmap` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `MediaTrackSupportedConstraints` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `MediaTrackCapabilities` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `MediaTrackConstraintSet` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `ConstrainDOMString` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `ConstrainDouble` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `ConstrainBoolean` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `MediaTrackSettings` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
- [MediaStream Recording](https://w3c.github.io/mediacapture-record/) uses:
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Payment Request API](https://w3c.github.io/browser-payment-api/) uses `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Performance Timeline Level 2](https://w3c.github.io/performance-timeline/) uses `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Permissions](https://w3c.github.io/permissions/) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `Navigator` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Pointer Lock 2.0](https://w3c.github.io/pointerlock/) uses `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Remote Playback API](https://w3c.github.io/remote-playback/) uses:
    * `EventTarget` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `HTMLMediaElement` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/) uses:
    * `DOMRect` but does not reference [Geometry Interfaces Module Level 1](http://dev.w3.org/fxtf/geometry/)
    * `DOMMatrix` but does not reference [Geometry Interfaces Module Level 1](http://dev.w3.org/fxtf/geometry/)
    * `DOMPoint` but does not reference [Geometry Interfaces Module Level 1](http://dev.w3.org/fxtf/geometry/)
    * `DOMRectReadOnly` but does not reference [Geometry Interfaces Module Level 1](http://dev.w3.org/fxtf/geometry/)
    * `DOMPointReadOnly` but does not reference [Geometry Interfaces Module Level 1](http://dev.w3.org/fxtf/geometry/)
    * `DOMMatrixReadOnly` but does not reference [Geometry Interfaces Module Level 1](http://dev.w3.org/fxtf/geometry/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) uses `WindowOrWorkerGlobalScope` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `Navigator` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `MessagePort` but does not reference [HTML5 Web Messaging](https://www.w3.org/TR/webmessaging)
    * `WindowOrWorkerGlobalScope` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) uses:
    * `Selection` but does not reference [Selection API](https://w3c.github.io/selection-api/)
    * `Element` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
    * `CaretPosition` but does not reference [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
    * `StyleSheetList` but does not reference [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
    * `DocumentFragment` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Storage Standard](https://storage.spec.whatwg.org/) uses `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [The Screen Orientation API](https://w3c.github.io/screen-orientation/) uses:
    * `EventTarget` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [URL Standard](https://url.spec.whatwg.org/) uses `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Wake Lock API](https://w3c.github.io/wake-lock/) uses:
    * `Navigator` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Web Animations](https://w3c.github.io/web-animations/) uses:
    * `DOMHighResTimeStamp` but does not reference [High Resolution Time Level 3](https://w3c.github.io/hr-time/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Web App Manifest](https://www.w3.org/TR/2017/WD-appmanifest-20170628/) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Web Cryptography API](https://www.w3.org/TR/2017/REC-WebCryptoAPI-20170126/) uses `Worker` but does not reference [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) or [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
- [Web IDL](https://heycam.github.io/webidl/) uses `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [Web Workers](https://html.spec.whatwg.org/multipage/workers.html) uses:
    * `EventTarget` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
    * `OnErrorEventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `RequestCredentials` but does not reference [Fetch Standard](https://fetch.spec.whatwg.org/)
    * `MessagePort` but does not reference [HTML5 Web Messaging](https://www.w3.org/TR/webmessaging)
- [WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html) uses `Navigator` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/) uses:
    * `EventTarget` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
    * `Event` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
    * `EventInit` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
- [WebVTT: The Web Video Text Tracks Format](http://www.w3.org/TR/2015/WD-webvtt1-20151208/) uses `TextTrackCue` but does not reference [HTML 5.2](https://w3c.github.io/html/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/) uses:
    * `Window` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `EventHandler` but does not reference [HTML 5.2](https://w3c.github.io/html/)
    * `HTMLFormElement` but does not reference [HTML 5.2](https://w3c.github.io/html/)

=> 112 missing references for IDL definitions found in 49 specifications


## Missing references based on document links

- [Clipboard API and events](https://w3c.github.io/clipboard-apis/) links to:
    * [`https://w3c.github.io/editing/contentEditable.html`](https://w3c.github.io/editing/contentEditable.html) but does not list it in its references
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but does not list it in its references
- [Compositing and Blending Level 1](http://dev.w3.org/fxtf/compositing-1/) links to:
    * [`https://www.w3.org/TR/2dcontext2/`](https://www.w3.org/TR/2dcontext2/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/) but does not list it in its references
- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/) links to [`https://w3c.github.io/reporting/`](https://w3c.github.io/reporting/) but does not list it in its references
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/) links to [`https://w3c.github.io/webappsec/usecases/credentialmanagement/`](https://w3c.github.io/webappsec/usecases/credentialmanagement/) but does not list it in its references
- [CSS Font Loading Module Level 3](http://dev.w3.org/csswg/css-font-loading/) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but does not list it in its references
- [CSS Fonts Module Level 3](http://dev.w3.org/csswg/css-fonts/) links to:
    * [`https://www.w3.org/TR/2002/WD-css3-webfonts-20020802/`](https://www.w3.org/TR/2002/WD-css3-webfonts-20020802/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/) but does not list it in its references
    * [`https://www.w3.org/TR/2016/WD-charmod-norm-20160407/`](https://www.w3.org/TR/2016/WD-charmod-norm-20160407/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-css-text-3-20131010/`](https://www.w3.org/TR/2013/WD-css-text-3-20131010/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/CR-css3-conditional-20130404/`](https://www.w3.org/TR/2013/CR-css3-conditional-20130404/) but does not list it in its references
    * [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/) but does not list it in its references
- [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) links to [`https://www.w3.org/TR/css-properties-values-api-1/`](https://www.w3.org/TR/css-properties-values-api-1/) but does not list it in its references
- [CSS Syntax Module Level 3](http://dev.w3.org/csswg/css-syntax/) links to [`https://www.w3.org/TR/selectors-api/`](https://www.w3.org/TR/selectors-api/) but does not list it in its references
- [CSS Writing Modes Level 3](http://dev.w3.org/csswg/css-writing-modes-3/) links to:
    * [`https://www.w3.org/TR/css-writing-modes-4/`](https://www.w3.org/TR/css-writing-modes-4/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-flexbox/`](https://www.w3.org/TR/css3-flexbox/) but does not list it in its references
- [Custom Elements](https://w3c.github.io/webcomponents/spec/custom/) links to:
    * [`https://w3c.github.io/aria/aria/aria.html`](https://w3c.github.io/aria/aria/aria.html) but does not list it in its references
    * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but does not list it in its references
    * [`https://w3c.github.io/editing/execCommand.html`](https://w3c.github.io/editing/execCommand.html) but does not list it in its references
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/) links to [`https://w3c.github.io/screen-orientation/`](https://w3c.github.io/screen-orientation/) but does not list it in its references
- [Gyroscope](https://w3c.github.io/gyroscope/) links to [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/) but does not list it in its references
- [HTML 5.2](https://w3c.github.io/html/) links to:
    * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/) but does not list it in its references
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
- [Metadata API for Media Resources 1.0](http://www.w3.org/TR/2014/REC-mediaont-api-1.0-20140313/) links to:
    * [`https://www.w3.org/TR/mediaont-10/`](https://www.w3.org/TR/mediaont-10/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/REC-mediaont-10-20120209/`](https://www.w3.org/TR/2012/REC-mediaont-10-20120209/) but does not list it in its references
    * [`https://www.w3.org/TR/2011/NOTE-dap-policy-reqs-20110317/`](https://www.w3.org/TR/2011/NOTE-dap-policy-reqs-20110317/) but does not list it in its references
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/) links to [`https://www.w3.org/TR/eventsource/`](https://www.w3.org/TR/eventsource/) but does not list it in its references
- [Orientation Sensor](https://w3c.github.io/orientation-sensor/) links to:
    * [`https://www.w3.org/TR/orientation-event/`](https://www.w3.org/TR/orientation-event/) but does not list it in its references
    * [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/) but does not list it in its references
- [Page Visibility Level 2](https://w3c.github.io/page-visibility/) links to [`https://www.w3.org/TR/html/full`](https://www.w3.org/TR/html/full) but does not list it in its references
- [Payment Handler API](https://w3c.github.io/payment-handler/) links to [`https://w3c.github.io/payment-method-manifest/`](https://w3c.github.io/payment-method-manifest/) but does not list it in its references
- [Permissions](https://w3c.github.io/permissions/) links to [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/) but does not list it in its references
- [Preload](https://w3c.github.io/preload/) links to:
    * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but does not list it in its references
    * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/) but does not list it in its references
    * [`https://mimesniff.spec.whatwg.org/`](https://mimesniff.spec.whatwg.org/) but does not list it in its references
    * [`https://w3c.github.io/webappsec/specs/content-security-policy/`](https://w3c.github.io/webappsec/specs/content-security-policy/) but does not list it in its references
- [Progress Events](https://www.w3.org/TR/progress-events) links to:
    * [`https://xhr.spec.whatwg.org/`](https://xhr.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/) but does not list it in its references
- [Push API](https://w3c.github.io/push-api/) links to [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/) but does not list it in its references
- [Remote Playback API](https://w3c.github.io/remote-playback/) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but does not list it in its references
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
    * [`https://www.w3.org/TR/smil/`](https://www.w3.org/TR/smil/) but does not list it in its references
    * [`https://www.w3.org/TR/xsl/`](https://www.w3.org/TR/xsl/) but does not list it in its references
    * [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/) but does not list it in its references
    * [`https://www.w3.org/TR/2015/WD-svg-markers-20150407/`](https://www.w3.org/TR/2015/WD-svg-markers-20150407/) but does not list it in its references
    * [`https://www.w3.org/TR/2015/WD-svg-strokes-20150407/`](https://www.w3.org/TR/2015/WD-svg-strokes-20150407/) but does not list it in its references
- [Selection API](https://w3c.github.io/selection-api/) links to [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/) but does not list it in its references
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) links to [`https://w3c.github.io/push-api/`](https://w3c.github.io/push-api/) but does not list it in its references
- [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) links to:
    * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/) but does not list it in its references
    * [`https://www.w3.org/TR/cssom/`](https://www.w3.org/TR/cssom/) but does not list it in its references
- [Touch Events - Level 2](http://dvcs.w3.org/hg/webevents/raw-file/v1/touchevents.html) links to [`https://www.w3.org/TR/touch-events-extensions/`](https://www.w3.org/TR/touch-events-extensions/) but does not list it in its references
- [UI Events](https://www.w3.org/TR/uievents) links to:
    * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/) but does not list it in its references
    * [`https://www.w3.org/TR/css-syntax-3/`](https://www.w3.org/TR/css-syntax-3/) but does not list it in its references
    * [`https://www.w3.org/TR/2004/REC-xml-20040204/`](https://www.w3.org/TR/2004/REC-xml-20040204/) but does not list it in its references
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html) links to:
    * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/) but does not list it in its references
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
    * [`https://w3c.github.io/requestidlecallback/`](https://w3c.github.io/requestidlecallback/) but does not list it in its references
- [User Timing Level 2](https://w3c.github.io/user-timing/) links to [`https://w3c.github.io/html/webappapis.html`](https://w3c.github.io/html/webappapis.html) but does not list it in its references
- [W3C DOM 4.1](https://w3c.github.io/dom/) links to [`https://www.w3.org/TR/touch-events/`](https://www.w3.org/TR/touch-events/) but does not list it in its references
- [Web Authentication: An API for accessing Public Key Credentials](https://w3c.github.io/webauthn/) links to [`https://w3c.github.io/html/browsers.html`](https://w3c.github.io/html/browsers.html) but does not list it in its references
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
- [WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html) links to:
    * [`https://w3c.github.io/editing/contentEditable.html`](https://w3c.github.io/editing/contentEditable.html) but does not list it in its references
    * [`https://www.w3.org/TR/css-values-3//`](https://www.w3.org/TR/css-values-3//) but does not list it in its references
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
- [WebVTT: The Web Video Text Tracks Format](http://www.w3.org/TR/2015/WD-webvtt1-20151208/) links to:
    * [`https://w3c.github.io/webvtt/`](https://w3c.github.io/webvtt/) but does not list it in its references
    * [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/) but does not list it in its references
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/) links to [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/) but does not list it in its references

=> 117 missing references for links found in 39 specifications

Any link to an external document from within a specification should trigger the creation of a corresponding entry in the references section.

Note Reffy only reports on links to "well-known" specs and ignores links to non-usual specs (e.g. PDF documents, etc.) for now.


## Reference URL is inconsistent with URL used in document links

- [Audio Output Devices API](https://w3c.github.io/mediacapture-output/) links to [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
- [Beacon](https://w3c.github.io/beacon/) links to [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Compositing and Blending Level 1](http://dev.w3.org/fxtf/compositing-1/) links to:
    * [`https://www.w3.org/TR/2003/REC-SVG11-20030114/`](https://www.w3.org/TR/2003/REC-SVG11-20030114/) but related reference "SVG" uses URL [`https://www.w3.org/TR/SVG/`](https://www.w3.org/TR/SVG/)
    * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/) but related reference "SVG" uses URL [`https://www.w3.org/TR/SVG/`](https://www.w3.org/TR/SVG/)
- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/) links to [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but related reference "SERVICE-WORKERS-1" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
- [Cooperative Scheduling of Background Tasks](https://w3c.github.io/requestidlecallback/) links to:
    * [`https://www.w3.org/TR/2011/WD-html5-20110525/`](https://www.w3.org/TR/2011/WD-html5-20110525/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
    * [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/) but related reference "HR-TIME" uses URL [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/)
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/) links to:
    * [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/) but related reference "MIXED-CONTENT" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [CSS Fonts Module Level 3](http://dev.w3.org/csswg/css-fonts/) links to:
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML5" uses URL [`http://www.w3.org/TR/2014/REC-html5-20141028/`](http://www.w3.org/TR/2014/REC-html5-20141028/)
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/2016/CR-css-values-3-20160929/`](https://www.w3.org/TR/2016/CR-css-values-3-20160929/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS3-VALUES" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
- [CSS Syntax Module Level 3](http://dev.w3.org/csswg/css-syntax/) links to:
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but related reference "SELECT" uses URL [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/)
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/) links to:
    * [`https://www.w3.org/TR/css-syntax/`](https://www.w3.org/TR/css-syntax/) but related reference "CSS3SYN" uses URL [`https://www.w3.org/TR/css-syntax-3/`](https://www.w3.org/TR/css-syntax-3/)
    * [`https://www.w3.org/TR/css3-fonts/`](https://www.w3.org/TR/css3-fonts/) but related reference "CSS3-FONTS" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but related reference "SELECTORS-3" uses URL [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/)
- [DeviceOrientation Event Specification](https://w3c.github.io/deviceorientation/spec-source-orientation.html) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML51" uses URL [`https://www.w3.org/TR/2016/REC-html51-20161101/`](https://www.w3.org/TR/2016/REC-html51-20161101/)
- [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/) links to [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM4" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) links to:
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/) but related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
- [Generic Sensor API](https://w3c.github.io/sensors/) links to [`https://w3c.github.io/page-visibility/`](https://w3c.github.io/page-visibility/) but related reference "PAGE-VISIBILITY" uses URL [`https://www.w3.org/TR/page-visibility/`](https://www.w3.org/TR/page-visibility/)
- [Geometry Interfaces Module Level 1](http://dev.w3.org/fxtf/geometry/) links to:
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
    * [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/) but related reference "CSSOM-VIEW" uses URL [`https://www.w3.org/TR/cssom-view-1/`](https://www.w3.org/TR/cssom-view-1/)
- [HTML 5.2](https://w3c.github.io/html/) links to:
    * [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/) but related reference "CSSOM-VIEW" uses URL [`https://www.w3.org/TR/cssom-view-1/`](https://www.w3.org/TR/cssom-view-1/)
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/) but related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
    * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/) but related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)
    * [`https://w3c.github.io/media-source/`](https://w3c.github.io/media-source/) but related reference "MEDIA-SOURCE" uses URL [`https://www.w3.org/TR/media-source/`](https://www.w3.org/TR/media-source/)
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
    * [`https://www.w3.org/TR/1999/REC-xpath-19991116`](https://www.w3.org/TR/1999/REC-xpath-19991116) but related reference "XPATH" uses URL [`https://www.w3.org/TR/xpath`](https://www.w3.org/TR/xpath)
    * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but related reference "SERVICE-WORKERS" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but related reference "WORKERS" uses URL [`https://www.w3.org/TR/workers/`](https://www.w3.org/TR/workers/)
- [HTML Canvas 2D Context](http://www.w3.org/TR/2015/REC-2dcontext-20151119/) links to [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML" uses URL [`http://www.w3.org/TR/html5/`](http://www.w3.org/TR/html5/)
- [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/) links to [`https://www.w3.org/TR/2014/REC-html5-20141028/`](https://www.w3.org/TR/2014/REC-html5-20141028/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
- [Indexed Database API 2.0](https://w3c.github.io/IndexedDB/) links to:
    * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
    * [`https://www.w3.org/TR/domcore/`](https://www.w3.org/TR/domcore/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Input Events Level 1](https://rawgit.com/w3c/input-events/v1/index.html) links to [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "UI-EVENTS" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
- [Magnetometer](https://w3c.github.io/magnetometer/) links to:
    * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/) but related reference "GENERIC-SENSOR" uses URL [`https://www.w3.org/TR/generic-sensor/`](https://www.w3.org/TR/generic-sensor/)
    * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
- [Media Capture and Streams](https://w3c.github.io/mediacapture-main/) links to [`https://www.w3.org/TR/2015/WD-html51-20150506/`](https://www.w3.org/TR/2015/WD-html51-20150506/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
- [Media Capture Depth Stream Extensions](https://w3c.github.io/mediacapture-depth/) links to [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
- [Media Capture from DOM Elements](https://w3c.github.io/mediacapture-fromelement/) links to:
    * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
    * [`https://www.w3.org/TR/2dcontext2/`](https://www.w3.org/TR/2dcontext2/) but related reference "2DCONTEXT" uses URL [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/)
- [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/) links to:
    * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
    * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
- [MediaStream Recording](https://w3c.github.io/mediacapture-record/) links to [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
- [Metadata API for Media Resources 1.0](http://www.w3.org/TR/2014/REC-mediaont-api-1.0-20140313/) links to [`https://www.w3.org/TR/2012/REC-media-frags-20120925/`](https://www.w3.org/TR/2012/REC-media-frags-20120925/) but related reference "MEDIA-FRAGMENTS" uses URL [`http://www.w3.org/TR/media-frags/`](http://www.w3.org/TR/media-frags/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/) links to:
    * [`https://www.w3.org/TR/2008/REC-xml-20081126/`](https://www.w3.org/TR/2008/REC-xml-20081126/) but related reference "XML" uses URL [`https://www.w3.org/TR/xml`](https://www.w3.org/TR/xml)
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/) links to [`https://www.w3.org/TR/service-workers/`](https://www.w3.org/TR/service-workers/) but related reference "SERVICE-WORKERS" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
- [Orientation Sensor](https://w3c.github.io/orientation-sensor/) links to:
    * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/) but related reference "GENERIC-SENSOR" uses URL [`https://www.w3.org/TR/generic-sensor/`](https://www.w3.org/TR/generic-sensor/)
    * [`https://w3c.github.io/accelerometer/`](https://w3c.github.io/accelerometer/) but related reference "ACCELEROMETER" uses URL [`https://www.w3.org/TR/accelerometer/`](https://www.w3.org/TR/accelerometer/)
    * [`https://w3c.github.io/gyroscope/`](https://w3c.github.io/gyroscope/) but related reference "GYROSCOPE" uses URL [`https://www.w3.org/TR/gyroscope/`](https://www.w3.org/TR/gyroscope/)
    * [`https://w3c.github.io/magnetometer/`](https://w3c.github.io/magnetometer/) but related reference "MAGNETOMETER" uses URL [`https://www.w3.org/TR/magnetometer/`](https://www.w3.org/TR/magnetometer/)
- [Page Visibility Level 2](https://w3c.github.io/page-visibility/) links to:
    * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM4" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Payment Handler API](https://w3c.github.io/payment-handler/) links to [`https://w3c.github.io/payment-handler/`](https://w3c.github.io/payment-handler/) but related reference "payment-handler" uses URL [`https://www.w3.org/TR/payment-handler/`](https://www.w3.org/TR/payment-handler/)
- [Permissions](https://w3c.github.io/permissions/) links to:
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
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
- [Resource Timing Level 3](https://w3c.github.io/resource-timing/) links to:
    * [`https://w3c.github.io/navigation-timing/`](https://w3c.github.io/navigation-timing/) but related reference "NAVIGATION-TIMING" uses URL [`https://www.w3.org/TR/navigation-timing/`](https://www.w3.org/TR/navigation-timing/)
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM-20151119" uses URL [`https://www.w3.org/TR/2015/REC-dom-20151119/`](https://www.w3.org/TR/2015/REC-dom-20151119/)
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
    * [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/) but related reference "web-animations-1" uses URL [`https://www.w3.org/TR/web-animations-1/`](https://www.w3.org/TR/web-animations-1/)
    * [`https://www.w3.org/TR/2015/CR-css-ui-3-20150707/`](https://www.w3.org/TR/2015/CR-css-ui-3-20150707/) but related reference "css-ui-3" uses URL [`https://www.w3.org/TR/css-ui-3/`](https://www.w3.org/TR/css-ui-3/)
    * [`https://www.w3.org/TR/2001/REC-smil-animation-20010904/`](https://www.w3.org/TR/2001/REC-smil-animation-20010904/) but related reference "smil-animation" uses URL [`https://www.w3.org/TR/smil-animation/`](https://www.w3.org/TR/smil-animation/)
    * [`https://www.w3.org/TR/2013/WD-shadow-dom-20130514/`](https://www.w3.org/TR/2013/WD-shadow-dom-20130514/) but related reference "shadow-dom" uses URL [`https://www.w3.org/TR/shadow-dom/`](https://www.w3.org/TR/shadow-dom/)
    * [`https://www.w3.org/TR/2001/REC-xlink-20010627/`](https://www.w3.org/TR/2001/REC-xlink-20010627/) but related reference "xlink" uses URL [`https://www.w3.org/TR/xlink/`](https://www.w3.org/TR/xlink/)
    * [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Views-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Views-20001113/) but related reference "DOM-Level-2-Views" uses URL [`https://www.w3.org/TR/DOM-Level-2-Views`](https://www.w3.org/TR/DOM-Level-2-Views)
    * [`https://www.w3.org/TR/2012/WD-css3-animations-20120403/`](https://www.w3.org/TR/2012/WD-css3-animations-20120403/) but related reference "css3-animations" uses URL [`https://www.w3.org/TR/css3-animations/`](https://www.w3.org/TR/css3-animations/)
    * [`https://w3c.github.io/dom/`](https://w3c.github.io/dom/) but related reference "dom" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
    * [`https://w3c.github.io/html/`](https://w3c.github.io/html/) but related reference "html51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
    * [`https://w3c.github.io/webcomponents/spec/shadow/`](https://w3c.github.io/webcomponents/spec/shadow/) but related reference "shadow-dom" uses URL [`https://www.w3.org/TR/shadow-dom/`](https://www.w3.org/TR/shadow-dom/)
    * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "uievents" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
    * [`https://www.w3.org/TR/2015/NOTE-UAAG20-20151215/`](https://www.w3.org/TR/2015/NOTE-UAAG20-20151215/) but related reference "UAAG20" uses URL [`https://www.w3.org/TR/UAAG20/`](https://www.w3.org/TR/UAAG20/)
    * [`https://www.w3.org/TR/2008/REC-CSS2-20080411/`](https://www.w3.org/TR/2008/REC-CSS2-20080411/) but related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2`](https://www.w3.org/TR/CSS2)
- [Screen Capture](https://w3c.github.io/mediacapture-screen-share/) links to [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) links to [`https://www.w3.org/TR/geolocation-API/`](https://www.w3.org/TR/geolocation-API/) but related reference "GEOLOCATION-API" uses URL [`http://dev.w3.org/geo/api/spec-source.html`](http://dev.w3.org/geo/api/spec-source.html)
- [Selection API](https://w3c.github.io/selection-api/) links to [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM4" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Selectors API Level 1](http://www.w3.org/TR/2013/REC-selectors-api-20130221/) links to [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/) but related reference "SELECT" uses URL [`http://www.w3.org/TR/2011/REC-css3-selectors-20110929/`](http://www.w3.org/TR/2011/REC-css3-selectors-20110929/)
- [Selectors Level 3](http://www.w3.org/TR/2011/REC-css3-selectors-20110929/) links to:
    * [`https://www.w3.org/TR/css3-namespace/`](https://www.w3.org/TR/css3-namespace/) but related reference "CSS3NAMESPACE" uses URL [`http://www.w3.org/TR/2011/REC-css3-namespace-20110929/`](http://www.w3.org/TR/2011/REC-css3-namespace-20110929/)
    * [`https://www.w3.org/TR/2001/PR-SVG-20010719/`](https://www.w3.org/TR/2001/PR-SVG-20010719/) but related reference "SVG11" uses URL [`http://www.w3.org/TR/2011/REC-SVG11-20110816/`](http://www.w3.org/TR/2011/REC-SVG11-20110816/)
    * [`https://www.w3.org/TR/2011/REC-CSS2-20110607/`](https://www.w3.org/TR/2011/REC-CSS2-20110607/) but related reference "" uses URL [`http://www.w3.org/TR/2009/CR-CSS2-20090908`](http://www.w3.org/TR/2009/CR-CSS2-20090908)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) links to:
    * [`https://w3c.github.io/webappsec-referrer-policy/`](https://w3c.github.io/webappsec-referrer-policy/) but related reference "REFERRER-POLICY" uses URL [`https://www.w3.org/TR/referrer-policy/`](https://www.w3.org/TR/referrer-policy/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) links to [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "uievents" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
- [UI Events](https://www.w3.org/TR/uievents) links to [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but related reference "DOM-Level-3-Core" uses URL [`http://www.w3.org/TR/DOM-Level-3-Core/`](http://www.w3.org/TR/DOM-Level-3-Core/)
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html) links to [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/) but related reference "CSSOM-VIEW-1" uses URL [`http://www.w3.org/TR/cssom-view-1/`](http://www.w3.org/TR/cssom-view-1/)
- [User Timing Level 2](https://w3c.github.io/user-timing/) links to:
    * [`https://w3c.github.io/navigation-timing/`](https://w3c.github.io/navigation-timing/) but related reference "NAVIGATION-TIMING-2" uses URL [`https://www.w3.org/TR/navigation-timing-2/`](https://www.w3.org/TR/navigation-timing-2/)
    * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/) but related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)
    * [`https://w3c.github.io/performance-timeline/`](https://w3c.github.io/performance-timeline/) but related reference "PERFORMANCE-TIMELINE-2" uses URL [`https://www.w3.org/TR/performance-timeline-2/`](https://www.w3.org/TR/performance-timeline-2/)
- [Vibration API (Second Edition)](https://w3c.github.io/vibration/) links to [`https://w3c.github.io/page-visibility/`](https://w3c.github.io/page-visibility/) but related reference "PAGE-VISIBILITY-2" uses URL [`https://www.w3.org/TR/page-visibility-2/`](https://www.w3.org/TR/page-visibility-2/)
- [W3C DOM 4.1](https://w3c.github.io/dom/) links to:
    * [`https://www.w3.org/TR/2015/REC-dom-20151119/`](https://www.w3.org/TR/2015/REC-dom-20151119/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/) but related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
    * [`https://www.w3.org/TR/2017/WD-dom41-20170420/`](https://www.w3.org/TR/2017/WD-dom41-20170420/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/2017/WD-dom41-20170321/`](https://www.w3.org/TR/2017/WD-dom41-20170321/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Web App Manifest](https://www.w3.org/TR/2017/WD-appmanifest-20170628/) links to:
    * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but related reference "SERVICE-WORKERS-1" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
    * [`https://w3c.github.io/screen-orientation/`](https://w3c.github.io/screen-orientation/) but related reference "SCREEN-ORIENTATION" uses URL [`https://www.w3.org/TR/screen-orientation/`](https://www.w3.org/TR/screen-orientation/)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
- [Web Authentication: An API for accessing Public Key Credentials](https://w3c.github.io/webauthn/) links to:
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/) but related reference "ENCODING" uses URL [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/)
- [Web IDL](https://heycam.github.io/webidl/) links to [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
- [Web Notifications](http://www.w3.org/TR/2015/REC-notifications-20151022/) links to:
    * [`https://notifications.spec.whatwg.org/`](https://notifications.spec.whatwg.org/) but related reference "WEBIDL" uses URL [`https://www.w3.org/TR/2015/PR-notifications-20150910/`](https://www.w3.org/TR/2015/PR-notifications-20150910/)
    * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/2014/REC-html5-20141028/`](https://www.w3.org/TR/2014/REC-html5-20141028/)
- [WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html) links to:
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
    * [`https://w3c.github.io/DOM-Parsing/`](https://w3c.github.io/DOM-Parsing/) but related reference "DOM-PARSING" uses URL [`https://www.w3.org/TR/DOM-Parsing/`](https://www.w3.org/TR/DOM-Parsing/)
    * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "UI-EVENTS" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/) links to:
    * [`https://w3c.github.io/webcrypto/`](https://w3c.github.io/webcrypto/) but related reference "WebCryptoAPI" uses URL [`https://www.w3.org/TR/WebCryptoAPI/`](https://www.w3.org/TR/WebCryptoAPI/)
    * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)

=> 139 inconsistent references for links found in 56 specifications

Links in the body of a specification should be to the same document as that pointed to by the related reference in the References section. The specifications reported here use a different URL. For instance, they may use a link to the Editor's Draft but target the latest published version in the References section. There should be some consistency across the specification.
