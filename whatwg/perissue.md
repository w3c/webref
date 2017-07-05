% Reffy crawl results
% Reffy
% July 05, 2017

104 specifications were crawled in this report.


## Specifications that could not be rendered

Reffy could not fetch or render these specifications for some reason. This may happen when a network error occurred or when a specification uses an old version of ReSpec.

- [Audio Output Devices API](https://w3c.github.io/mediacapture-output/): `undefined`
- [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/): `undefined`
- [Media Capture from DOM Elements](https://w3c.github.io/mediacapture-fromelement/): `undefined`
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/): `undefined`
- [Screen Capture](https://w3c.github.io/mediacapture-screen-share/): `undefined`
- [Web Audio API](https://webaudio.github.io/web-audio-api/): `undefined`

=> 6 specifications found


## Specifications without normative dependencies


=> 0 specification found


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
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html)

=> 3 specifications found

WebIDL continues to evolve. Reffy may incorrectly report as invalid perfectly valid WebIDL content if the specification uses bleeding-edge WebIDL features


## List of specifications with obsolete WebIDL constructs

- [Gamepad](https://w3c.github.io/gamepad/)

=> 1 specification found

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
- [Static Range](https://w3c.github.io/staticrange/)
- [UI Events](https://www.w3.org/TR/uievents)

=> 10 specifications found



## List of WebIDL names not defined in the specifications crawled

- `OverconstrainedError` used in [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
- `RTCError` used in [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/)
- `ReadableStream` used in [Fetch Standard](https://fetch.spec.whatwg.org/)
- `SVGImageElement` used in [HTML Standard](https://html.spec.whatwg.org/)
- `SVGScriptElement` used in [HTML Standard](https://html.spec.whatwg.org/)
- `WindowProxy` used in [HTML Standard](https://html.spec.whatwg.org/), [Touch Events - Level 2](http://dvcs.w3.org/hg/webevents/raw-file/v1/touchevents.html)

=> 6 WebIDL names found

Some of them may be type errors in specs (e.g. "int" does not exist, "Array" cannot be used on its own, etc.)
Also, please keep in mind that Reffy only knows about IDL terms defined in the specifications that were crawled **and** that do not have invalid IDL content.


## List of WebIDL names defined in more than one spec

- `BinaryType` defined in [HTML Standard](https://html.spec.whatwg.org/) and [Presentation API](https://w3c.github.io/presentation-api/)
- `RTCStats` defined in [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/) and [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/)
- `Worker` defined in [HTML Standard](https://html.spec.whatwg.org/) and [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- `Worklet` defined in [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) and [Worklets Level 1](https://drafts.css-houdini.org/worklets/)

=> 4 WebIDL names found

"There can be only one"...


## Missing references for WebIDL names

- [Battery Status API](https://w3c.github.io/battery/) uses `EventTarget` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
- [Console Standard](https://console.spec.whatwg.org/) uses:
    * `Window` but does not reference [HTML Standard](https://html.spec.whatwg.org/)
    * `Worker` but does not reference [HTML Standard](https://html.spec.whatwg.org/) or [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
    * `Worklet` but does not reference [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) or [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/) uses:
    * `MouseEvent` but does not reference [UI Events](https://www.w3.org/TR/uievents)
    * `MouseEventInit` but does not reference [UI Events](https://www.w3.org/TR/uievents)
- [Encoding Standard](https://encoding.spec.whatwg.org/) uses:
    * `Window` but does not reference [HTML Standard](https://html.spec.whatwg.org/)
    * `Worker` but does not reference [HTML Standard](https://html.spec.whatwg.org/) or [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- [High Resolution Time Level 3](https://w3c.github.io/hr-time/) uses `EventTarget` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
- [Media Capture and Streams](https://w3c.github.io/mediacapture-main/) uses:
    * `EventTarget` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
    * `Event` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
    * `EventInit` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
- [Media Source Extensions™](https://w3c.github.io/media-source/) uses:
    * `EventTarget` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
    * `URL` but does not reference [URL Standard](https://url.spec.whatwg.org/)
- [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/) uses:
    * `MediaStreamTrack` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `MediaTrackSupportedConstraints` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `MediaTrackCapabilities` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `MediaTrackConstraintSet` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `ConstrainDOMString` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `ConstrainDouble` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `ConstrainBoolean` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
    * `MediaTrackSettings` but does not reference [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)
- [Pointer Lock 2.0](https://w3c.github.io/pointerlock/) uses `EventHandler` but does not reference [HTML Standard](https://html.spec.whatwg.org/)
- [Remote Playback API](https://w3c.github.io/remote-playback/) uses `EventTarget` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
- [The Screen Orientation API](https://w3c.github.io/screen-orientation/) uses `EventTarget` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
- [Web Animations](https://w3c.github.io/web-animations/) uses `DOMHighResTimeStamp` but does not reference [High Resolution Time Level 3](https://w3c.github.io/hr-time/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/) uses:
    * `EventTarget` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
    * `Event` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
    * `EventInit` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)

=> 29 missing references for IDL definitions found in 13 specifications


## Missing references based on document links

- [Clipboard API and events](https://w3c.github.io/clipboard-apis/) links to [`https://w3c.github.io/editing/contentEditable.html`](https://w3c.github.io/editing/contentEditable.html) but does not list it in its references
- [Compositing and Blending Level 1](http://dev.w3.org/fxtf/compositing-1/) links to [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/) links to [`https://w3c.github.io/reporting/`](https://w3c.github.io/reporting/) but does not list it in its references
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/) links to [`https://w3c.github.io/webappsec/usecases/credentialmanagement/`](https://w3c.github.io/webappsec/usecases/credentialmanagement/) but does not list it in its references
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
- [DOM Standard](https://dom.spec.whatwg.org/) links to:
    * [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/) but does not list it in its references
    * [`https://w3c.github.io/touch-events/`](https://w3c.github.io/touch-events/) but does not list it in its references
    * [`https://w3c.github.io/webcomponents/spec/shadow/`](https://w3c.github.io/webcomponents/spec/shadow/) but does not list it in its references
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/) links to [`https://w3c.github.io/screen-orientation/`](https://w3c.github.io/screen-orientation/) but does not list it in its references
- [Gyroscope](https://w3c.github.io/gyroscope/) links to [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/) but does not list it in its references
- [HTML Standard](https://html.spec.whatwg.org/) links to:
    * [`https://www.w3.org/TR/media-frags/`](https://www.w3.org/TR/media-frags/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but does not list it in its references
- [Metadata API for Media Resources 1.0](http://www.w3.org/TR/2014/REC-mediaont-api-1.0-20140313/) links to:
    * [`https://www.w3.org/TR/mediaont-10/`](https://www.w3.org/TR/mediaont-10/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/REC-mediaont-10-20120209/`](https://www.w3.org/TR/2012/REC-mediaont-10-20120209/) but does not list it in its references
    * [`https://www.w3.org/TR/2011/NOTE-dap-policy-reqs-20110317/`](https://www.w3.org/TR/2011/NOTE-dap-policy-reqs-20110317/) but does not list it in its references
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
- [Push API](https://w3c.github.io/push-api/) links to [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/) but does not list it in its references
- [Selection API](https://w3c.github.io/selection-api/) links to [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/) but does not list it in its references
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) links to [`https://w3c.github.io/push-api/`](https://w3c.github.io/push-api/) but does not list it in its references
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
- [Web Authentication: An API for accessing Public Key Credentials](https://w3c.github.io/webauthn/) links to [`https://w3c.github.io/html/browsers.html`](https://w3c.github.io/html/browsers.html) but does not list it in its references
- [WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html) links to:
    * [`https://w3c.github.io/editing/contentEditable.html`](https://w3c.github.io/editing/contentEditable.html) but does not list it in its references
    * [`https://www.w3.org/TR/css-values-3//`](https://www.w3.org/TR/css-values-3//) but does not list it in its references
- [WebVTT: The Web Video Text Tracks Format](http://www.w3.org/TR/2015/WD-webvtt1-20151208/) links to:
    * [`https://w3c.github.io/webvtt/`](https://w3c.github.io/webvtt/) but does not list it in its references
    * [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/) but does not list it in its references
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/) links to [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/) but does not list it in its references

=> 53 missing references for links found in 29 specifications

Any link to an external document from within a specification should trigger the creation of a corresponding entry in the references section.

Note Reffy only reports on links to "well-known" specs and ignores links to non-usual specs (e.g. PDF documents, etc.) for now.


## Reference URL is inconsistent with URL used in document links

- [Beacon](https://w3c.github.io/beacon/) links to [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Clipboard API and events](https://w3c.github.io/clipboard-apis/) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [Compositing and Blending Level 1](http://dev.w3.org/fxtf/compositing-1/) links to:
    * [`https://www.w3.org/TR/2dcontext2/`](https://www.w3.org/TR/2dcontext2/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
    * [`https://www.w3.org/TR/2003/REC-SVG11-20030114/`](https://www.w3.org/TR/2003/REC-SVG11-20030114/) but related reference "SVG" uses URL [`https://www.w3.org/TR/SVG/`](https://www.w3.org/TR/SVG/)
    * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/) but related reference "SVG" uses URL [`https://www.w3.org/TR/SVG/`](https://www.w3.org/TR/SVG/)
    * [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/) links to [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but related reference "SERVICE-WORKERS-1" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
- [Cooperative Scheduling of Background Tasks](https://w3c.github.io/requestidlecallback/) links to:
    * [`https://www.w3.org/TR/2011/WD-html5-20110525/`](https://www.w3.org/TR/2011/WD-html5-20110525/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
    * [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/) but related reference "HR-TIME" uses URL [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/)
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/) links to:
    * [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/) but related reference "MIXED-CONTENT" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [CSS Font Loading Module Level 3](http://dev.w3.org/csswg/css-font-loading/) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
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
- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) links to:
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/) but related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
- [Generic Sensor API](https://w3c.github.io/sensors/) links to [`https://w3c.github.io/page-visibility/`](https://w3c.github.io/page-visibility/) but related reference "PAGE-VISIBILITY" uses URL [`https://www.w3.org/TR/page-visibility/`](https://www.w3.org/TR/page-visibility/)
- [Geometry Interfaces Module Level 1](http://dev.w3.org/fxtf/geometry/) links to:
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
    * [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/) but related reference "CSSOM-VIEW" uses URL [`https://www.w3.org/TR/cssom-view-1/`](https://www.w3.org/TR/cssom-view-1/)
- [HTML Standard](https://html.spec.whatwg.org/) links to [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "MEDIASTREAM" uses URL [`https://w3c.github.io/mediacapture-main/getusermedia.html`](https://w3c.github.io/mediacapture-main/getusermedia.html)
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
- [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/) links to:
    * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
    * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
- [MediaStream Recording](https://w3c.github.io/mediacapture-record/) links to [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
- [Metadata API for Media Resources 1.0](http://www.w3.org/TR/2014/REC-mediaont-api-1.0-20140313/) links to [`https://www.w3.org/TR/2012/REC-media-frags-20120925/`](https://www.w3.org/TR/2012/REC-media-frags-20120925/) but related reference "MEDIA-FRAGMENTS" uses URL [`http://www.w3.org/TR/media-frags/`](http://www.w3.org/TR/media-frags/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/) links to:
    * [`https://www.w3.org/TR/2008/REC-xml-20081126/`](https://www.w3.org/TR/2008/REC-xml-20081126/) but related reference "XML" uses URL [`https://www.w3.org/TR/xml`](https://www.w3.org/TR/xml)
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
    * [`https://www.w3.org/TR/eventsource/`](https://www.w3.org/TR/eventsource/) but related reference "HTML51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
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
- [Remote Playback API](https://w3c.github.io/remote-playback/) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [Resource Timing Level 3](https://w3c.github.io/resource-timing/) links to:
    * [`https://w3c.github.io/navigation-timing/`](https://w3c.github.io/navigation-timing/) but related reference "NAVIGATION-TIMING" uses URL [`https://www.w3.org/TR/navigation-timing/`](https://www.w3.org/TR/navigation-timing/)
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM-20151119" uses URL [`https://www.w3.org/TR/2015/REC-dom-20151119/`](https://www.w3.org/TR/2015/REC-dom-20151119/)
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
- [UI Events](https://www.w3.org/TR/uievents) links to [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but related reference "DOM-Level-3-Core" uses URL [`http://www.w3.org/TR/DOM-Level-3-Core/`](http://www.w3.org/TR/DOM-Level-3-Core/)
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html) links to [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/) but related reference "CSSOM-VIEW-1" uses URL [`http://www.w3.org/TR/cssom-view-1/`](http://www.w3.org/TR/cssom-view-1/)
- [User Timing Level 2](https://w3c.github.io/user-timing/) links to:
    * [`https://w3c.github.io/navigation-timing/`](https://w3c.github.io/navigation-timing/) but related reference "NAVIGATION-TIMING-2" uses URL [`https://www.w3.org/TR/navigation-timing-2/`](https://www.w3.org/TR/navigation-timing-2/)
    * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/) but related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)
    * [`https://w3c.github.io/performance-timeline/`](https://w3c.github.io/performance-timeline/) but related reference "PERFORMANCE-TIMELINE-2" uses URL [`https://www.w3.org/TR/performance-timeline-2/`](https://www.w3.org/TR/performance-timeline-2/)
- [Vibration API (Second Edition)](https://w3c.github.io/vibration/) links to [`https://w3c.github.io/page-visibility/`](https://w3c.github.io/page-visibility/) but related reference "PAGE-VISIBILITY-2" uses URL [`https://www.w3.org/TR/page-visibility-2/`](https://www.w3.org/TR/page-visibility-2/)
- [Web App Manifest](https://www.w3.org/TR/2017/WD-appmanifest-20170628/) links to:
    * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but related reference "SERVICE-WORKERS-1" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
    * [`https://w3c.github.io/screen-orientation/`](https://w3c.github.io/screen-orientation/) but related reference "SCREEN-ORIENTATION" uses URL [`https://www.w3.org/TR/screen-orientation/`](https://www.w3.org/TR/screen-orientation/)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
- [Web Authentication: An API for accessing Public Key Credentials](https://w3c.github.io/webauthn/) links to:
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/) but related reference "ENCODING" uses URL [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/)
- [Web IDL](https://heycam.github.io/webidl/) links to [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
- [WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html) links to:
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
    * [`https://w3c.github.io/DOM-Parsing/`](https://w3c.github.io/DOM-Parsing/) but related reference "DOM-PARSING" uses URL [`https://www.w3.org/TR/DOM-Parsing/`](https://www.w3.org/TR/DOM-Parsing/)
    * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "UI-EVENTS" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but related reference "CANVAS" uses URL [`https://www.w3.org/TR/html5/scripting-1.html#the-canvas-element`](https://www.w3.org/TR/html5/scripting-1.html#the-canvas-element)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/) links to:
    * [`https://w3c.github.io/webcrypto/`](https://w3c.github.io/webcrypto/) but related reference "WebCryptoAPI" uses URL [`https://www.w3.org/TR/WebCryptoAPI/`](https://www.w3.org/TR/WebCryptoAPI/)
    * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)

=> 92 inconsistent references for links found in 51 specifications

Links in the body of a specification should be to the same document as that pointed to by the related reference in the References section. The specifications reported here use a different URL. For instance, they may use a link to the Editor's Draft but target the latest published version in the References section. There should be some consistency across the specification.
