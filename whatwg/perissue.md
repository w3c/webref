# Reffy crawl report

Reffy is a spec exploration tool. It takes a list of specifications as input, fetches and parses the latest Editor's Draft of each of these specifications to study the IDL content that it defines, the links that it contains, and the normative and informative references that it lists.

Reffy only knows facts about specifications that it crawled. Some of the anomalies reported in this report may be false positives as a result, triggered by the fact that Reffy has a very narrow view of the spec-verse.

Some anomalies may also be triggered by temporary errors in the Editor's Drafts of the specifications that were crawled such as invalid Web IDL definitions.

104 specifications were crawled in this report.


## Specifications without normative dependencies

- [404 not found](https://www.w3.org/TR/SVG2)
- [CSS Syntax Module Level 3](https://www.w3.org/TR/css-syntax-3)
- [DeviceOrientation Event Specification](https://www.w3.org/TR/orientation-event)

=> 3 specifications found

Basically all specifications have normative dependencies on some other specification. Reffy could not find any normative dependencies for the specifications mentioned above, which seems strange.


## Specifications without WebIDL definitions

- [404 not found](https://www.w3.org/TR/SVG2)
- [Compositing and Blending Level 1](http://dev.w3.org/fxtf/compositing-1/)
- [ContentEditable](https://w3c.github.io/editing/contentEditable.html)
- [CSS Syntax Module Level 3](https://www.w3.org/TR/css-syntax-3)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/css-writing-modes-3)
- [DeviceOrientation Event Specification](https://www.w3.org/TR/orientation-event)
- [Mixed Content](https://www.w3.org/TR/mixed-content)
- [Preload](https://w3c.github.io/preload/)
- [Selectors Level 3](https://www.w3.org/TR/css3-selectors)
- [Streams Standard](https://streams.spec.whatwg.org/)
- [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code)
- [UI Events KeyboardEvent key Values](https://www.w3.org/TR/uievents-key)

=> 13 specifications found

Not all specifications define IDL content, presence in this list may be completely normal. Reffy's current focus is on IDL specifications, the number of specifications listed here should remain minimal.


## List of specifications with invalid WebIDL content

- [CSS Fonts Module Level 3](https://www.w3.org/TR/css-fonts-3)
- [CSS Typed OM Level 1](https://www.w3.org/TR/css-typed-om-1)
- [Geometry Interfaces Module Level 1](https://www.w3.org/TR/geometry-1)
- [Metadata API for Media Resources 1.0](http://www.w3.org/TR/2014/REC-mediaont-api-1.0-20140313/)
- [User Interface Security and the Visibility API](https://www.w3.org/TR/UISecurity)
- [Web Audio API](https://www.w3.org/TR/webaudio)
- [WebIDL Level 1](https://www.w3.org/TR/WebIDL-1)

=> 7 specifications found

WebIDL continues to evolve. Reffy may incorrectly report as invalid perfectly valid WebIDL content if the specification uses bleeding-edge WebIDL features


## List of specifications with obsolete WebIDL constructs

- [Gamepad](https://www.w3.org/TR/gamepad)

=> 1 specification found

A typical example is the use of `[]` instead of `FrozenArray`.


## Specifications that use WebIDL but do not reference the WebIDL spec

- [Clipboard API and events](https://www.w3.org/TR/clipboard-apis)
- [Content Security Policy Level 3](https://www.w3.org/TR/CSP3)
- [CSS Fonts Module Level 3](https://www.w3.org/TR/css-fonts-3)
- [CSS Object Model (CSSOM)](https://www.w3.org/TR/cssom-1)
- [CSS Pseudo-Elements Module Level 4](https://www.w3.org/TR/css-pseudo-4)
- [Element Traversal Specification](https://www.w3.org/TR/ElementTraversal)
- [Identifiers for WebRTC's Statistics API](https://www.w3.org/TR/webrtc-stats)
- [Input Events Level 2](https://www.w3.org/TR/input-events-2)
- [Page Visibility Level 2](https://www.w3.org/TR/page-visibility-2)
- [Pointer Events - Level 2](https://www.w3.org/TR/pointerevents2)
- [Referrer Policy](https://www.w3.org/TR/referrer-policy)
- [Secure Contexts](https://www.w3.org/TR/secure-contexts)
- [Selectors API Level 1](http://www.w3.org/TR/2013/REC-selectors-api-20130221/)
- [Static Range](https://w3c.github.io/staticrange/)
- [UI Events](https://www.w3.org/TR/uievents)

=> 15 specifications found



## List of WebIDL names not defined in the specifications crawled

- `CSSOMString` used in [CSS Font Loading Module Level 3](http://dev.w3.org/csswg/css-font-loading/)
- `Console` used in [Worklets Level 1](https://www.w3.org/TR/worklets-1)
- `DOMError` used in [File API](https://www.w3.org/TR/FileAPI)
- `DOMMatrix` used in [HTML Standard](https://html.spec.whatwg.org/), [Orientation Sensor](https://w3c.github.io/orientation-sensor/)
- `DOMMatrixInit` used in [HTML Standard](https://html.spec.whatwg.org/)
- `DOMPoint` used in [CSSOM View Module](https://www.w3.org/TR/cssom-view-1)
- `DOMPointInit` used in [CSSOM View Module](https://www.w3.org/TR/cssom-view-1)
- `DOMQuad` used in [CSSOM View Module](https://www.w3.org/TR/cssom-view-1)
- `DOMQuadInit` used in [CSSOM View Module](https://www.w3.org/TR/cssom-view-1)
- `DOMRect` used in [CSSOM View Module](https://www.w3.org/TR/cssom-view-1)
- `DOMRectReadOnly` used in [CSSOM View Module](https://www.w3.org/TR/cssom-view-1)
- `OverconstrainedError` used in [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
- `RTCError` used in [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/webrtc)
- `ReadableStream` used in [Fetch Standard](https://fetch.spec.whatwg.org/)
- `SVGImageElement` used in [HTML Standard](https://html.spec.whatwg.org/)
- `SVGScriptElement` used in [HTML Standard](https://html.spec.whatwg.org/)
- `WindowProxy` used in [HTML Standard](https://html.spec.whatwg.org/), [Touch Events - Level 2](http://dvcs.w3.org/hg/webevents/raw-file/v1/touchevents.html)

=> 17 WebIDL names found

Some of them may be type errors in specs (e.g. "int" does not exist, "Array" cannot be used on its own, etc.)
Also, please keep in mind that Reffy only knows about IDL terms defined in the specifications that were crawled **and** that do not have invalid IDL content.


## List of WebIDL names defined in more than one spec

- `BinaryType` defined in [HTML Standard](https://html.spec.whatwg.org/) and [Presentation API](https://www.w3.org/TR/presentation-api)
- `RTCStats` defined in [Identifiers for WebRTC's Statistics API](https://www.w3.org/TR/webrtc-stats) and [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/webrtc)
- `Worker` defined in [HTML Standard](https://html.spec.whatwg.org/) and [Service Workers 1](https://www.w3.org/TR/service-workers-1)
- `Worklet` defined in [CSS Painting API Level 1](https://www.w3.org/TR/css-paint-api-1) and [Worklets Level 1](https://www.w3.org/TR/worklets-1)

=> 4 WebIDL names found

"There can be only one"...


## Missing references for WebIDL names

- ["MediaStream Image Capture"](https://www.w3.org/TR/image-capture) uses:
    * `MediaStreamTrack` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `MediaTrackSupportedConstraints` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `MediaTrackCapabilities` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `MediaTrackConstraintSet` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `ConstrainDOMString` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `ConstrainDouble` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `ConstrainBoolean` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `MediaTrackSettings` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
- [Ambient Light Sensor](https://www.w3.org/TR/ambient-light) uses:
    * `Sensor` but does not reference [Generic Sensor API](https://www.w3.org/TR/generic-sensor)
    * `SensorOptions` but does not reference [Generic Sensor API](https://www.w3.org/TR/generic-sensor)
- [Battery Status API](https://www.w3.org/TR/battery-status) uses `EventTarget` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
- [Console Standard](https://console.spec.whatwg.org/) uses:
    * `Window` but does not reference [HTML Standard](https://html.spec.whatwg.org/)
    * `Worker` but does not reference [HTML Standard](https://html.spec.whatwg.org/) or [Service Workers 1](https://www.w3.org/TR/service-workers-1)
    * `Worklet` but does not reference [CSS Painting API Level 1](https://www.w3.org/TR/css-paint-api-1) or [Worklets Level 1](https://www.w3.org/TR/worklets-1)
- [CSS Painting API Level 1](https://www.w3.org/TR/css-paint-api-1) uses `WorkletGlobalScope` but does not reference [Worklets Level 1](https://www.w3.org/TR/worklets-1)
- [CSSOM View Module](https://www.w3.org/TR/cssom-view-1) uses:
    * `MouseEvent` but does not reference [UI Events](https://www.w3.org/TR/uievents)
    * `MouseEventInit` but does not reference [UI Events](https://www.w3.org/TR/uievents)
    * `CSSPseudoElement` but does not reference [CSS Pseudo-Elements Module Level 4](https://www.w3.org/TR/css-pseudo-4)
- [Encoding Standard](https://encoding.spec.whatwg.org/) uses:
    * `Window` but does not reference [HTML Standard](https://html.spec.whatwg.org/)
    * `Worker` but does not reference [HTML Standard](https://html.spec.whatwg.org/) or [Service Workers 1](https://www.w3.org/TR/service-workers-1)
- [Fetch Standard](https://fetch.spec.whatwg.org/) uses:
    * `Blob` but does not reference [File API](https://www.w3.org/TR/FileAPI)
    * `ReferrerPolicy` but does not reference [Referrer Policy](https://www.w3.org/TR/referrer-policy)
- [Generic Sensor API](https://www.w3.org/TR/generic-sensor) uses `DOMHighResTimeStamp` but does not reference [High Resolution Time Level 3](https://www.w3.org/TR/hr-time-3)
- [High Resolution Time Level 3](https://www.w3.org/TR/hr-time-3) uses `EventTarget` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
- [HTML Standard](https://html.spec.whatwg.org/) uses:
    * `Blob` but does not reference [File API](https://www.w3.org/TR/FileAPI)
    * `FileList` but does not reference [File API](https://www.w3.org/TR/FileAPI)
    * `File` but does not reference [File API](https://www.w3.org/TR/FileAPI)
    * `DOMHighResTimeStamp` but does not reference [High Resolution Time Level 3](https://www.w3.org/TR/hr-time-3)
- [Identifiers for WebRTC's Statistics API](https://www.w3.org/TR/webrtc-stats) uses `DOMHighResTimeStamp` but does not reference [High Resolution Time Level 3](https://www.w3.org/TR/hr-time-3)
- [Media Capture and Streams](https://w3c.github.io/mediacapture-main/) uses:
    * `EventTarget` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
    * `Event` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
    * `EventInit` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
- [Media Source Extensions™](https://w3c.github.io/media-source/) uses:
    * `EventTarget` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
    * `URL` but does not reference [URL Standard](https://url.spec.whatwg.org/)
- [MediaStream Recording](https://www.w3.org/TR/mediastream-recording) uses:
    * `MediaStream` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `DOMHighResTimeStamp` but does not reference [High Resolution Time Level 3](https://www.w3.org/TR/hr-time-3)
- [Notifications API Standard](https://notifications.spec.whatwg.org/) uses `VibratePattern` but does not reference [Vibration API (Second Edition)](https://www.w3.org/TR/vibration)
- [Performance Timeline Level 2](https://www.w3.org/TR/performance-timeline-2) uses:
    * `Window` but does not reference [HTML Standard](https://html.spec.whatwg.org/)
    * `Worker` but does not reference [HTML Standard](https://html.spec.whatwg.org/) or [Service Workers 1](https://www.w3.org/TR/service-workers-1)
- [Pointer Lock 2.0](https://www.w3.org/TR/pointerlock-2) uses `EventHandler` but does not reference [HTML Standard](https://html.spec.whatwg.org/)
- [Proximity Sensor](https://w3c.github.io/proximity/) uses:
    * `Sensor` but does not reference [Generic Sensor API](https://www.w3.org/TR/generic-sensor)
    * `SensorOptions` but does not reference [Generic Sensor API](https://www.w3.org/TR/generic-sensor)
- [Remote Playback API](https://www.w3.org/TR/remote-playback) uses `EventTarget` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
- [The Permissions API](https://www.w3.org/TR/permissions) uses `EventTarget` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
- [The Screen Orientation API](https://www.w3.org/TR/screen-orientation) uses `EventTarget` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
- [Web Animations](https://www.w3.org/TR/web-animations-1) uses `DOMHighResTimeStamp` but does not reference [High Resolution Time Level 3](https://www.w3.org/TR/hr-time-3)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/webrtc) uses:
    * `EventTarget` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
    * `Event` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
    * `EventInit` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/) uses:
    * `File` but does not reference [File API](https://www.w3.org/TR/FileAPI)
    * `Blob` but does not reference [File API](https://www.w3.org/TR/FileAPI)

=> 51 missing references for IDL definitions found in 25 specifications


## Missing references based on document links

- ["MediaStream Image Capture"](https://www.w3.org/TR/image-capture) links to [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but does not list it in its references
- [Accelerometer](https://www.w3.org/TR/accelerometer) links to:
    * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/) but does not list it in its references
    * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but does not list it in its references
- [Compositing and Blending Level 1](http://dev.w3.org/fxtf/compositing-1/) links to [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
- [Content Security Policy Level 3](https://www.w3.org/TR/CSP3) links to:
    * [`https://w3c.github.io/reporting/`](https://w3c.github.io/reporting/) but does not list it in its references
    * [`https://www.w3.org/TR/cssom/`](https://www.w3.org/TR/cssom/) but does not list it in its references
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/) links to:
    * [`https://w3c.github.io/webappsec/usecases/credentialmanagement/`](https://w3c.github.io/webappsec/usecases/credentialmanagement/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but does not list it in its references
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
- [CSS Syntax Module Level 3](https://www.w3.org/TR/css-syntax-3) links to:
    * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but does not list it in its references
    * [`https://www.w3.org/TR/css-text-decor-3/`](https://www.w3.org/TR/css-text-decor-3/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-cascade/`](https://www.w3.org/TR/css3-cascade/) but does not list it in its references
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but does not list it in its references
    * [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/selectors-api/`](https://www.w3.org/TR/selectors-api/) but does not list it in its references
    * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-transforms/`](https://www.w3.org/TR/css3-transforms/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-2d-transforms/`](https://www.w3.org/TR/css3-2d-transforms/) but does not list it in its references
    * [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-animations/`](https://www.w3.org/TR/css3-animations/) but does not list it in its references
    * [`https://www.w3.org/TR/2011/REC-CSS2-20110607`](https://www.w3.org/TR/2011/REC-CSS2-20110607) but does not list it in its references
    * [`https://www.w3.org/TR/2013/CR-css-cascade-3-20131003/`](https://www.w3.org/TR/2013/CR-css-cascade-3-20131003/) but does not list it in its references
    * [`https://www.w3.org/TR/2014/WD-encoding-20140128/`](https://www.w3.org/TR/2014/WD-encoding-20140128/) but does not list it in its references
    * [`https://www.w3.org/TR/2011/REC-css3-selectors-20110929/`](https://www.w3.org/TR/2011/REC-css3-selectors-20110929/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-css-variables-1-20130620/`](https://www.w3.org/TR/2013/WD-css-variables-1-20130620/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-css3-animations-20130219/`](https://www.w3.org/TR/2013/WD-css3-animations-20130219/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/CR-css3-conditional-20130404/`](https://www.w3.org/TR/2013/CR-css3-conditional-20130404/) but does not list it in its references
    * [`https://www.w3.org/TR/2011/WD-cssom-20110712/`](https://www.w3.org/TR/2011/WD-cssom-20110712/) but does not list it in its references
    * [`https://www.w3.org/TR/2014/CR-html5-20140204/`](https://www.w3.org/TR/2014/CR-html5-20140204/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/`](https://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/) but does not list it in its references
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
- [CSSOM View Module](https://www.w3.org/TR/cssom-view-1) links to:
    * [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/) but does not list it in its references
    * [`https://www.w3.org/TR/css-display-3/`](https://www.w3.org/TR/css-display-3/) but does not list it in its references
    * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/) but does not list it in its references
    * [`https://www.w3.org/TR/geometry-1/`](https://www.w3.org/TR/geometry-1/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/) but does not list it in its references
    * [`https://www.w3.org/TR/css-pseudo-4/`](https://www.w3.org/TR/css-pseudo-4/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but does not list it in its references
- [DeviceOrientation Event Specification](https://www.w3.org/TR/orientation-event) links to [`https://www.w3.org/TR/2016/REC-geolocation-API-20161108/`](https://www.w3.org/TR/2016/REC-geolocation-API-20161108/) but does not list it in its references
- [DOM Standard](https://dom.spec.whatwg.org/) links to:
    * [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/) but does not list it in its references
    * [`https://w3c.github.io/touch-events/`](https://w3c.github.io/touch-events/) but does not list it in its references
    * [`https://w3c.github.io/webcomponents/spec/shadow/`](https://w3c.github.io/webcomponents/spec/shadow/) but does not list it in its references
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/) links to [`https://w3c.github.io/screen-orientation/`](https://w3c.github.io/screen-orientation/) but does not list it in its references
- [Generic Sensor API](https://www.w3.org/TR/generic-sensor) links to [`https://w3c.github.io/page-visibility/`](https://w3c.github.io/page-visibility/) but does not list it in its references
- [Geometry Interfaces Module Level 1](https://www.w3.org/TR/geometry-1) links to:
    * [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/) but does not list it in its references
    * [`https://www.w3.org/TR/css-transforms-1/`](https://www.w3.org/TR/css-transforms-1/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but does not list it in its references
- [Gyroscope](https://www.w3.org/TR/gyroscope) links to:
    * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/) but does not list it in its references
    * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but does not list it in its references
- [High Resolution Time Level 3](https://www.w3.org/TR/hr-time-3) links to [`https://w3c.github.io/workers/`](https://w3c.github.io/workers/) but does not list it in its references
- [HTML Standard](https://html.spec.whatwg.org/) links to:
    * [`https://www.w3.org/TR/media-frags/`](https://www.w3.org/TR/media-frags/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but does not list it in its references
- [Indexed Database API 2.0](https://w3c.github.io/IndexedDB/) links to [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but does not list it in its references
- [Magnetometer](https://www.w3.org/TR/magnetometer) links to:
    * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/) but does not list it in its references
    * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but does not list it in its references
- [MediaStream Recording](https://www.w3.org/TR/mediastream-recording) links to:
    * [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/) but does not list it in its references
    * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but does not list it in its references
    * [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/) but does not list it in its references
- [Metadata API for Media Resources 1.0](http://www.w3.org/TR/2014/REC-mediaont-api-1.0-20140313/) links to:
    * [`https://www.w3.org/TR/mediaont-10/`](https://www.w3.org/TR/mediaont-10/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/REC-mediaont-10-20120209/`](https://www.w3.org/TR/2012/REC-mediaont-10-20120209/) but does not list it in its references
    * [`https://www.w3.org/TR/2011/NOTE-dap-policy-reqs-20110317/`](https://www.w3.org/TR/2011/NOTE-dap-policy-reqs-20110317/) but does not list it in its references
- [Mixed Content](https://www.w3.org/TR/mixed-content) links to:
    * [`https://url.spec.whatwg.org/`](https://url.spec.whatwg.org/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but does not list it in its references
    * [`https://www.w3.org/TR/service-workers/`](https://www.w3.org/TR/service-workers/) but does not list it in its references
- [Orientation Sensor](https://w3c.github.io/orientation-sensor/) links to:
    * [`https://www.w3.org/TR/orientation-event/`](https://www.w3.org/TR/orientation-event/) but does not list it in its references
    * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/) but does not list it in its references
    * [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/) but does not list it in its references
    * [`https://w3c.github.io/accelerometer/`](https://w3c.github.io/accelerometer/) but does not list it in its references
    * [`https://w3c.github.io/gyroscope/`](https://w3c.github.io/gyroscope/) but does not list it in its references
    * [`https://w3c.github.io/magnetometer/`](https://w3c.github.io/magnetometer/) but does not list it in its references
- [Page Visibility Level 2](https://www.w3.org/TR/page-visibility-2) links to [`https://www.w3.org/TR/html/full`](https://www.w3.org/TR/html/full) but does not list it in its references
- [Payment Handler API](https://www.w3.org/TR/payment-handler) links to:
    * [`https://w3c.github.io/payment-handler/?specStatus=WD;shortName=payment-handler;publishDate=2017-06-24;previousMaturity=WD;previousPublishDate=2017-06-23`](https://w3c.github.io/payment-handler/?specStatus=WD;shortName=payment-handler;publishDate=2017-06-24;previousMaturity=WD;previousPublishDate=2017-06-23) but does not list it in its references
    * [`https://w3c.github.io/payment-method-manifest/`](https://w3c.github.io/payment-method-manifest/) but does not list it in its references
- [Performance Timeline Level 2](https://www.w3.org/TR/performance-timeline-2) links to [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but does not list it in its references
- [Pointer Events - Level 2](https://www.w3.org/TR/pointerevents2) links to [`https://www.w3.org/TR/touch-events/`](https://www.w3.org/TR/touch-events/) but does not list it in its references
- [Pointer Lock 2.0](https://www.w3.org/TR/pointerlock-2) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
- [Preload](https://w3c.github.io/preload/) links to:
    * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but does not list it in its references
    * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/) but does not list it in its references
    * [`https://mimesniff.spec.whatwg.org/`](https://mimesniff.spec.whatwg.org/) but does not list it in its references
    * [`https://w3c.github.io/webappsec/specs/content-security-policy/`](https://w3c.github.io/webappsec/specs/content-security-policy/) but does not list it in its references
- [Presentation API](https://www.w3.org/TR/presentation-api) links to:
    * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but does not list it in its references
    * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/) but does not list it in its references
- [Push API](https://www.w3.org/TR/push-api) links to [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/) but does not list it in its references
- [Referrer Policy](https://www.w3.org/TR/referrer-policy) links to [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but does not list it in its references
- [Remote Playback API](https://www.w3.org/TR/remote-playback) links to [`https://url.spec.whatwg.org/`](https://url.spec.whatwg.org/) but does not list it in its references
- [Resource Timing Level 2](https://www.w3.org/TR/resource-timing-2) links to [`https://w3c.github.io/navigation-timing/`](https://w3c.github.io/navigation-timing/) but does not list it in its references
- [Secure Contexts](https://www.w3.org/TR/secure-contexts) links to [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/) but does not list it in its references
- [Selection API](https://www.w3.org/TR/selection-api) links to [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/) but does not list it in its references
- [Service Workers 1](https://www.w3.org/TR/service-workers-1) links to:
    * [`https://w3c.github.io/push-api/`](https://w3c.github.io/push-api/) but does not list it in its references
    * [`https://w3c.github.io/webappsec/specs/powerfulfeatures/`](https://w3c.github.io/webappsec/specs/powerfulfeatures/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-csp/2/`](https://w3c.github.io/webappsec-csp/2/) but does not list it in its references
- [The Screen Orientation API](https://www.w3.org/TR/screen-orientation) links to [`https://fullscreen.spec.whatwg.org/`](https://fullscreen.spec.whatwg.org/) but does not list it in its references
- [Touch Events - Level 2](http://dvcs.w3.org/hg/webevents/raw-file/v1/touchevents.html) links to [`https://www.w3.org/TR/touch-events-extensions/`](https://www.w3.org/TR/touch-events-extensions/) but does not list it in its references
- [UI Events](https://www.w3.org/TR/uievents) links to:
    * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/) but does not list it in its references
    * [`https://www.w3.org/TR/css-syntax-3/`](https://www.w3.org/TR/css-syntax-3/) but does not list it in its references
    * [`https://www.w3.org/TR/2004/REC-xml-20040204/`](https://www.w3.org/TR/2004/REC-xml-20040204/) but does not list it in its references
- [User Interface Security and the Visibility API](https://www.w3.org/TR/UISecurity) links to:
    * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/) but does not list it in its references
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
    * [`https://w3c.github.io/requestidlecallback/`](https://w3c.github.io/requestidlecallback/) but does not list it in its references
- [Vibration API (Second Edition)](https://www.w3.org/TR/vibration) links to [`https://w3c.github.io/page-visibility/`](https://w3c.github.io/page-visibility/) but does not list it in its references
- [Web Animations](https://www.w3.org/TR/web-animations-1) links to [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/) but does not list it in its references
- [Web App Manifest](https://www.w3.org/TR/appmanifest) links to:
    * [`https://w3c.github.io/screen-orientation/`](https://w3c.github.io/screen-orientation/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but does not list it in its references
- [Web Audio API](https://www.w3.org/TR/webaudio) links to [`https://w3c.github.io/workers/`](https://w3c.github.io/workers/) but does not list it in its references
- [Web Authentication: An API for accessing Public Key Credentials](https://w3c.github.io/webauthn/) links to:
    * [`https://w3c.github.io/html/browsers.html`](https://w3c.github.io/html/browsers.html) but does not list it in its references
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but does not list it in its references
- [WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html) links to:
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but does not list it in its references
    * [`https://w3c.github.io/editing/contentEditable.html`](https://w3c.github.io/editing/contentEditable.html) but does not list it in its references
    * [`https://www.w3.org/TR/css-values-3//`](https://www.w3.org/TR/css-values-3//) but does not list it in its references
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/webvtt1) links to:
    * [`https://w3c.github.io/webvtt/`](https://w3c.github.io/webvtt/) but does not list it in its references
    * [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/) but does not list it in its references
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/) links to [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/) but does not list it in its references

=> 149 missing references for links found in 54 specifications

Any link to an external document from within a specification should trigger the creation of a corresponding entry in the references section.

Note Reffy only reports on links to "well-known" specs and ignores links to non-usual specs (e.g. PDF documents, etc.) for now.


## Reference URL is inconsistent with URL used in document links

- ["MediaStream Image Capture"](https://www.w3.org/TR/image-capture) links to [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
- [Audio Output Devices API](https://www.w3.org/TR/audio-output) links to [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
- [Beacon](https://w3c.github.io/beacon/) links to [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Clipboard API and events](https://www.w3.org/TR/clipboard-apis) links to [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
- [Compositing and Blending Level 1](http://dev.w3.org/fxtf/compositing-1/) links to:
    * [`https://www.w3.org/TR/2dcontext2/`](https://www.w3.org/TR/2dcontext2/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
    * [`https://www.w3.org/TR/2003/REC-SVG11-20030114/`](https://www.w3.org/TR/2003/REC-SVG11-20030114/) but related reference "SVG" uses URL [`https://www.w3.org/TR/SVG/`](https://www.w3.org/TR/SVG/)
    * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/) but related reference "SVG" uses URL [`https://www.w3.org/TR/SVG/`](https://www.w3.org/TR/SVG/)
    * [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [Cooperative Scheduling of Background Tasks](https://w3c.github.io/requestidlecallback/) links to:
    * [`https://www.w3.org/TR/2011/WD-html5-20110525/`](https://www.w3.org/TR/2011/WD-html5-20110525/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
    * [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/) but related reference "HR-TIME" uses URL [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/)
- [CSS Font Loading Module Level 3](http://dev.w3.org/csswg/css-font-loading/) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [CSS Fonts Module Level 3](https://www.w3.org/TR/css-fonts-3) links to:
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML5" uses URL [`http://www.w3.org/TR/2013/CR-html5-20130806/`](http://www.w3.org/TR/2013/CR-html5-20130806/)
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS3VAL" uses URL [`http://www.w3.org/TR/2013/CR-css3-values-20130730/`](http://www.w3.org/TR/2013/CR-css3-values-20130730/)
- [CSS Object Model (CSSOM)](https://www.w3.org/TR/cssom-1) links to [`https://www.w3.org/TR/mediaqueries-4/`](https://www.w3.org/TR/mediaqueries-4/) but related reference "MEDIAQUERIES-4" uses URL [`http://www.w3.org/TR/2016/WD-mediaqueries-4-20160126/`](http://www.w3.org/TR/2016/WD-mediaqueries-4-20160126/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS3-VALUES" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/css-typed-om-1) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES" uses URL [`http://www.w3.org/TR/css-values/`](http://www.w3.org/TR/css-values/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/css-writing-modes-3) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES" uses URL [`http://www.w3.org/TR/css-values/`](http://www.w3.org/TR/css-values/)
- [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/) links to [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM4" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Encrypted Media Extensions](https://www.w3.org/TR/encrypted-media) links to:
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://www.w3.org/TR/2015/REC-dom-20151119/`](https://www.w3.org/TR/2015/REC-dom-20151119/)
    * [`https://www.w3.org/TR/html52/`](https://www.w3.org/TR/html52/) but related reference "HTML51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
    * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/) but related reference "ENCODING" uses URL [`https://www.w3.org/TR/2016/CR-encoding-20161215/`](https://www.w3.org/TR/2016/CR-encoding-20161215/)
- [Geometry Interfaces Module Level 1](https://www.w3.org/TR/geometry-1) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but related reference "html5" uses URL [`http://www.w3.org/TR/html5/`](http://www.w3.org/TR/html5/)
- [HTML Media Capture](https://www.w3.org/TR/html-media-capture) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but related reference "HTML51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
- [HTML Standard](https://html.spec.whatwg.org/) links to [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "MEDIASTREAM" uses URL [`https://w3c.github.io/mediacapture-main/getusermedia.html`](https://w3c.github.io/mediacapture-main/getusermedia.html)
- [Identifiers for WebRTC's Statistics API](https://www.w3.org/TR/webrtc-stats) links to [`https://www.w3.org/TR/2014/REC-html5-20141028/`](https://www.w3.org/TR/2014/REC-html5-20141028/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
- [Indexed Database API 2.0](https://w3c.github.io/IndexedDB/) links to [`https://www.w3.org/TR/domcore/`](https://www.w3.org/TR/domcore/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Input Events Level 2](https://www.w3.org/TR/input-events-2) links to [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "UI-EVENTS" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
- [Media Capture and Streams](https://w3c.github.io/mediacapture-main/) links to [`https://www.w3.org/TR/2015/WD-html51-20150506/`](https://www.w3.org/TR/2015/WD-html51-20150506/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
- [Media Capture Depth Stream Extensions](https://www.w3.org/TR/mediacapture-depth) links to [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
- [Media Capture from DOM Elements](https://www.w3.org/TR/mediacapture-fromelement) links to:
    * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
    * [`https://www.w3.org/TR/2dcontext2/`](https://www.w3.org/TR/2dcontext2/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
- [Metadata API for Media Resources 1.0](http://www.w3.org/TR/2014/REC-mediaont-api-1.0-20140313/) links to [`https://www.w3.org/TR/2012/REC-media-frags-20120925/`](https://www.w3.org/TR/2012/REC-media-frags-20120925/) but related reference "MEDIA-FRAGMENTS" uses URL [`http://www.w3.org/TR/media-frags/`](http://www.w3.org/TR/media-frags/)
- [Mixed Content](https://www.w3.org/TR/mixed-content) links to:
    * [`https://www.w3.org/TR/2008/REC-xml-20081126/`](https://www.w3.org/TR/2008/REC-xml-20081126/) but related reference "XML" uses URL [`https://www.w3.org/TR/xml`](https://www.w3.org/TR/xml)
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
    * [`https://www.w3.org/TR/eventsource/`](https://www.w3.org/TR/eventsource/) but related reference "HTML51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
- [Navigation Timing Level 2](https://www.w3.org/TR/navigation-timing-2) links to [`https://www.w3.org/TR/service-workers/`](https://www.w3.org/TR/service-workers/) but related reference "SERVICE-WORKERS" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
- [Page Visibility Level 2](https://www.w3.org/TR/page-visibility-2) links to:
    * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM4" uses URL [`https://www.w3.org/TR/2015/REC-dom-20151119/`](https://www.w3.org/TR/2015/REC-dom-20151119/)
- [Performance Timeline Level 2](https://www.w3.org/TR/performance-timeline-2) links to [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/) but related reference "WORKERS" uses URL [`https://www.w3.org/TR/workers/`](https://www.w3.org/TR/workers/)
- [Pointer Lock 2.0](https://www.w3.org/TR/pointerlock-2) links to [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but related reference "DOM4" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
- [Push API](https://www.w3.org/TR/push-api) links to:
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/service-workers/`](https://www.w3.org/TR/service-workers/) but related reference "SERVICE-WORKERS" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
    * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/) but related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
- [Referrer Policy](https://www.w3.org/TR/referrer-policy) links to:
    * [`https://www.w3.org/TR/2010/REC-wsc-ui-20100812/`](https://www.w3.org/TR/2010/REC-wsc-ui-20100812/) but related reference "WSC-UI" uses URL [`https://www.w3.org/TR/wsc-ui/`](https://www.w3.org/TR/wsc-ui/)
    * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but related reference "DOM4" uses URL [`https://www.w3.org/TR/dom`](https://www.w3.org/TR/dom)
- [Resource Timing Level 2](https://www.w3.org/TR/resource-timing-2) links to:
    * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/) but related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/service-workers/`](https://www.w3.org/TR/service-workers/) but related reference "SERVICE-WORKERS" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
- [Screen Capture](https://www.w3.org/TR/screen-capture) links to [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
- [Selection API](https://www.w3.org/TR/selection-api) links to [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM4" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Selectors API Level 1](http://www.w3.org/TR/2013/REC-selectors-api-20130221/) links to [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/) but related reference "SELECT" uses URL [`http://www.w3.org/TR/2011/REC-css3-selectors-20110929/`](http://www.w3.org/TR/2011/REC-css3-selectors-20110929/)
- [Selectors Level 3](https://www.w3.org/TR/css3-selectors) links to:
    * [`https://www.w3.org/TR/css3-namespace/`](https://www.w3.org/TR/css3-namespace/) but related reference "CSS3NAMESPACE" uses URL [`http://www.w3.org/TR/2011/REC-css3-namespace-20110929/`](http://www.w3.org/TR/2011/REC-css3-namespace-20110929/)
    * [`https://www.w3.org/TR/2001/PR-SVG-20010719/`](https://www.w3.org/TR/2001/PR-SVG-20010719/) but related reference "SVG11" uses URL [`http://www.w3.org/TR/2011/REC-SVG11-20110816/`](http://www.w3.org/TR/2011/REC-SVG11-20110816/)
    * [`https://www.w3.org/TR/2011/REC-CSS2-20110607/`](https://www.w3.org/TR/2011/REC-CSS2-20110607/) but related reference "" uses URL [`http://www.w3.org/TR/2009/CR-CSS2-20090908`](http://www.w3.org/TR/2009/CR-CSS2-20090908)
- [UI Events](https://www.w3.org/TR/uievents) links to [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but related reference "DOM-Level-3-Core" uses URL [`http://www.w3.org/TR/DOM-Level-3-Core/`](http://www.w3.org/TR/DOM-Level-3-Core/)
- [User Interface Security and the Visibility API](https://www.w3.org/TR/UISecurity) links to [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/) but related reference "CSSOM-VIEW-1" uses URL [`http://www.w3.org/TR/cssom-view-1/`](http://www.w3.org/TR/cssom-view-1/)
- [Web Animations](https://www.w3.org/TR/web-animations-1) links to:
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS3VAL" uses URL [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/)
- [Web App Manifest](https://www.w3.org/TR/appmanifest) links to [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but related reference "SERVICE-WORKERS-1" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
- [Web Audio API](https://www.w3.org/TR/webaudio) links to:
    * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but related reference "DOM" uses URL [`http://www.w3.org/TR/dom/`](http://www.w3.org/TR/dom/)
    * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "mediacapture-streams" uses URL [`http://www.w3.org/TR/mediacapture-streams/`](http://www.w3.org/TR/mediacapture-streams/)
- [Web Authentication: An API for accessing Public Key Credentials](https://w3c.github.io/webauthn/) links to [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/) but related reference "ENCODING" uses URL [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/)
- [WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html) links to:
    * [`https://w3c.github.io/DOM-Parsing/`](https://w3c.github.io/DOM-Parsing/) but related reference "DOM-PARSING" uses URL [`https://www.w3.org/TR/DOM-Parsing/`](https://www.w3.org/TR/DOM-Parsing/)
    * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "UI-EVENTS" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but related reference "CANVAS" uses URL [`https://www.w3.org/TR/html5/scripting-1.html#the-canvas-element`](https://www.w3.org/TR/html5/scripting-1.html#the-canvas-element)
- [WebIDL Level 1](https://www.w3.org/TR/WebIDL-1) links to:
    * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but related reference "DOM" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
    * [`https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/`](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/) but related reference "DOM" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
    * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
    * [`https://www.w3.org/TR/2011/WD-html5-20110525/`](https://www.w3.org/TR/2011/WD-html5-20110525/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/webrtc) links to:
    * [`https://w3c.github.io/webcrypto/`](https://w3c.github.io/webcrypto/) but related reference "WebCryptoAPI" uses URL [`https://www.w3.org/TR/WebCryptoAPI/`](https://www.w3.org/TR/WebCryptoAPI/)
    * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)

=> 71 inconsistent references for links found in 46 specifications

Links in the body of a specification should be to the same document as that pointed to by the related reference in the References section. The specifications reported here use a different URL. For instance, they may use a link to the Editor's Draft but target the latest published version in the References section. There should be some consistency across the specification.
