% Specifications that define CSS and WebIDL content
% Reffy
% October 09, 2019

## https://html.spec.whatwg.org/ {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Latest published version](undefined)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Crawl took too long Error: Crawl took too long
    at Timeout._ [as _onTimeout] (/home/runner/work/reffy-reports/reffy/src/cli/crawl-specs.js:365:29)
    at ontimeout (timers.js:436:11)
    at tryOnTimeout (timers.js:300:5)
    at listOnTimeout (timers.js:263:5)
    at Timer.processTimers (timers.js:223:10)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Compositing and Blending Level 2](https://drafts.fxtf.org/compositing-2/)
- [Cookie Store API](https://wicg.github.io/cookie-store/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [CSS Parser API](https://wicg.github.io/CSS-Parser-API/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [DOM Standard](https://dom.spec.whatwg.org/)
- [Element Timing API](https://wicg.github.io/element-timing/)
- [Event Timing API](https://wicg.github.io/event-timing/)
- [Feature Policy](https://w3c.github.io/webappsec-feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File and Directory Entries API](https://wicg.github.io/entries-api/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [Keyboard Lock](https://wicg.github.io/keyboard-lock/)
- [Keyboard Map](https://wicg.github.io/keyboard-map/)
- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/)
- [Layout Instability API](https://wicg.github.io/layout-instability/)
- [Media Capabilities](https://w3c.github.io/media-capabilities/)
- [Media Playback Quality](https://w3c.github.io/media-playback-quality/)
- [Media Session Standard](https://w3c.github.io/mediasession/)
- [Network Information API](https://wicg.github.io/netinfo/)
- [Notifications API Standard](https://notifications.spec.whatwg.org/)
- [Picture-in-Picture](https://w3c.github.io/picture-in-picture/)
- [Reporting API 1](https://w3c.github.io/reporting/)
- [Resize Observer](https://drafts.csswg.org/resize-observer/)
- [Scroll-linked Animations](https://drafts.csswg.org/scroll-animations-1/)
- [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [Streams Standard](https://streams.spec.whatwg.org/)
- [URL Standard](https://url.spec.whatwg.org/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web Speech API](https://w3c.github.io/speech-api/)
- [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- [WebUSB API](https://wicg.github.io/webusb/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Informative references to this spec from:

- [CSS Box Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [Feature Policy](https://w3c.github.io/webappsec-feature-policy/)


## "MediaStream Image Capture" {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/image-capture/)
- Latest published version: [https://www.w3.org/TR/image-capture](https://www.w3.org/TR/image-capture)
- Repository: [GitHub w3c/mediacapture-image](https://github.com/w3c/mediacapture-image)
- Shortname: image-capture

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/image-capture reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/image-capture reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Accelerated Shape Detection in Images {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/shape-detection-api/) (30 September 2019)
- Repository: [GitHub wicg/shape-detection-api](https://github.com/wicg/shape-detection-api)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMRectReadOnly`, `ImageBitmapSource`, `Point2D`, `Window`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
- Missing references for links: 
     * [`https://w3c.github.io/mediacapture-image/`](https://w3c.github.io/mediacapture-image/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)


## Accelerometer {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/accelerometer/)
- Latest published version: [https://www.w3.org/TR/accelerometer](https://www.w3.org/TR/accelerometer)
- Repository: [GitHub w3c/accelerometer](https://github.com/w3c/accelerometer)
- Shortname: accelerometer

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/accelerometer reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/accelerometer reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Accessible Rich Internet Applications (WAI-ARIA) 1.2 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/wai-aria-1.2/)
- Latest published version: [https://www.w3.org/TR/wai-aria-1.2](https://www.w3.org/TR/wai-aria-1.2)
- Repository: [GitHub w3c/aria](https://github.com/w3c/aria)
- Shortname: wai-aria-1.2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/wai-aria-1.2 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/wai-aria-1.2 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Ambient Light Sensor {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/ambient-light/)
- Latest published version: [https://www.w3.org/TR/ambient-light](https://www.w3.org/TR/ambient-light)
- Repository: [GitHub w3c/ambient-light](https://github.com/w3c/ambient-light)
- Shortname: ambient-light

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/ambient-light reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/ambient-light reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Audio Output Devices API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/audio-output/)
- Latest published version: [https://www.w3.org/TR/audio-output](https://www.w3.org/TR/audio-output)
- Repository: [GitHub w3c/mediacapture-output](https://github.com/w3c/mediacapture-output)
- Shortname: audio-output

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/audio-output reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/audio-output reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Background Fetch {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/background-fetch/) (27 September 2019)
- Repository: [GitHub wicg/background-fetch](https://github.com/wicg/background-fetch)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `ImageResource`, `Window`
- Missing references for WebIDL names: 
     * `ServiceWorkerGlobalScope` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
     * `ServiceWorkerRegistration` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
     * `Worker` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
     * `CacheQueryOptions` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
     * `ExtendableEvent` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
     * `ServiceWorker` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
     * `ExtendableEventInit` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
- Missing references for links: 
     * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/)
     * [`https://storage.spec.whatwg.org/`](https://storage.spec.whatwg.org/)
     * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/)
     * [`https://w3c.github.io/webdriver/webdriver-spec.html`](https://w3c.github.io/webdriver/webdriver-spec.html)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Battery Status API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/battery-status/)
- Latest published version: [https://www.w3.org/TR/battery-status](https://www.w3.org/TR/battery-status)
- Repository: [GitHub w3c/battery](https://github.com/w3c/battery)
- Shortname: battery-status

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/battery-status reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/battery-status reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Media Capabilities](https://w3c.github.io/media-capabilities/)


## Beacon {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/beacon/)
- Latest published version: [https://www.w3.org/TR/beacon](https://www.w3.org/TR/beacon)
- Repository: [GitHub w3c/beacon](https://github.com/w3c/beacon)
- Shortname: beacon

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/beacon reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/beacon reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Box Tree API Level 1 {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.css-houdini.org/box-tree-api/) (14 August 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/CSS2/)
- Latest published version: [https://www.w3.org/TR/CSS2](https://www.w3.org/TR/CSS2)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: CSS2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/CSS2 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/CSS2 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compositing and Blending Level 2](https://drafts.fxtf.org/compositing-2/)
- [CSS Backgrounds and Borders Module Level 4](https://drafts.csswg.org/css-backgrounds-4/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Box Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Conditional Rules Module Level 4](https://drafts.csswg.org/css-conditional-4/)
- [CSS Exclusions Module Level 1](https://drafts.csswg.org/css-exclusions-1/)
- [CSS Mobile Text Size Adjustment Module Level 1](https://drafts.csswg.org/css-size-adjust-1/)
- [CSS Nesting Module](https://drafts.csswg.org/css-nesting-1/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [CSS TV Profile 1.0](https://drafts.csswg.org/css-tv/)
- [Filter Effects Module Level 2](https://drafts.fxtf.org/filter-effects-2/)
- [Layout Instability API](https://wicg.github.io/layout-instability/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)

No informative reference to this spec from other specs.


## Cascading Style Sheets Level 2 Revision 2 (CSS 2.2) Specification {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/CSS22/)
- Latest published version: [https://www.w3.org/TR/CSS22](https://www.w3.org/TR/CSS22)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: CSS22

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/CSS22 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/CSS22 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Clipboard API and events {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/clipboard-apis/)
- Latest published version: [https://www.w3.org/TR/clipboard-apis](https://www.w3.org/TR/clipboard-apis)
- Repository: [GitHub w3c/clipboard-apis](https://github.com/w3c/clipboard-apis)
- Shortname: clipboard-apis

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/clipboard-apis reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/clipboard-apis reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Compatibility Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://compat.spec.whatwg.org/) (18 June 2019)
- Repository: [GitHub whatwg/compat](https://github.com/whatwg/compat)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `HTMLBodyElement`, `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Compositing and Blending Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/compositing-1/)
- Latest published version: [https://www.w3.org/TR/compositing-1](https://www.w3.org/TR/compositing-1)
- Repository: [GitHub w3c/fxtf-drafts](https://github.com/w3c/fxtf-drafts)
- Shortname: compositing-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/compositing-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/compositing-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Compositing and Blending Level 2 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.fxtf.org/compositing-2/) (28 October 2015)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/2014/CR-compositing-1-20140220/`](https://www.w3.org/TR/2014/CR-compositing-1-20140220/)
     * [`https://www.w3.org/TR/2013/WD-compositing-1-20131010/`](https://www.w3.org/TR/2013/WD-compositing-1-20131010/)
     * [`https://www.w3.org/TR/2013/WD-compositing-1-20130625/`](https://www.w3.org/TR/2013/WD-compositing-1-20130625/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/2dcontext2/`](https://www.w3.org/TR/2dcontext2/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
     * [`https://www.w3.org/TR/2003/REC-SVG11-20030114/`](https://www.w3.org/TR/2003/REC-SVG11-20030114/), related reference "SVG" uses URL [`https://www.w3.org/TR/SVG/`](https://www.w3.org/TR/SVG/)
     * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/), related reference "SVG" uses URL [`https://www.w3.org/TR/SVG/`](https://www.w3.org/TR/SVG/)
     * [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)

No informative reference to this spec from other specs.


## Console Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://console.spec.whatwg.org/) (9 August 2019)
- Repository: [GitHub whatwg/console](https://github.com/whatwg/console)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`, `Worklet`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Content Security Policy Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/CSP3/)
- Latest published version: [https://www.w3.org/TR/CSP3](https://www.w3.org/TR/CSP3)
- Repository: [GitHub w3c/webappsec-csp](https://github.com/w3c/webappsec-csp)
- Shortname: CSP3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/CSP3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/CSP3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Feature Policy](https://w3c.github.io/webappsec-feature-policy/)
- [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)

Informative references to this spec from:

- [Reporting API 1](https://w3c.github.io/reporting/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)


## Content Security Policy: Embedded Enforcement {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/csp-embedded-enforcement/)
- Latest published version: [https://www.w3.org/TR/csp-embedded-enforcement](https://www.w3.org/TR/csp-embedded-enforcement)
- Repository: [GitHub w3c/webappsec-csp](https://github.com/w3c/webappsec-csp)
- Shortname: csp-embedded-enforcement

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/csp-embedded-enforcement reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/csp-embedded-enforcement reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## ContentEditable {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/editing/contentEditable.html) (Wed Oct 09 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Cookie Store API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/cookie-store/) (7 October 2019)
- Repository: [GitHub wicg/cookie-store](https://github.com/wicg/cookie-store)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`
- Missing references for WebIDL names: 
     * `ServiceWorker` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
     * `ExtendableEvent` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
     * `ExtendableEventInit` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
     * `ServiceWorkerGlobalScope` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
- Missing references for links: 
     * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Cooperative Scheduling of Background Tasks {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/requestidlecallback/)
- Latest published version: [https://www.w3.org/TR/requestidlecallback](https://www.w3.org/TR/requestidlecallback)
- Repository: [GitHub w3c/requestidlecallback](https://github.com/w3c/requestidlecallback)
- Shortname: requestidlecallback

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/requestidlecallback reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/requestidlecallback reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CORS and RFC1918 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/cors-rfc1918/) (8 August 2017)
- Repository: [GitHub wicg/cors-rfc1918](https://github.com/wicg/cors-rfc1918)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Unknown WebIDL names used: `WorkerGlobalScope`
- Missing references for WebIDL names: 
     * `Document` defined in [DOM Standard](https://dom.spec.whatwg.org/)
- Missing references for links: 
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Credential Management Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/credential-management-1/)
- Latest published version: [https://www.w3.org/TR/credential-management-1](https://www.w3.org/TR/credential-management-1)
- Repository: [GitHub w3c/webappsec-credential-management](https://github.com/w3c/webappsec-credential-management)
- Shortname: credential-management-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/credential-management-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/credential-management-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Animation Worklet API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-animation-worklet-1/)
- Latest published version: [https://www.w3.org/TR/css-animation-worklet-1](https://www.w3.org/TR/css-animation-worklet-1)
- Shortname: css-animation-worklet-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-animation-worklet-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-animation-worklet-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Animations Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-animations-1/)
- Latest published version: [https://www.w3.org/TR/css-animations-1](https://www.w3.org/TR/css-animations-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-animations-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-animations-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-animations-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)
- [Scroll-linked Animations](https://drafts.csswg.org/scroll-animations-1/)

Informative references to this spec from:

- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)


## CSS Animations Level 2 {data-spec=true data-anomaly=true data-hasUnexpectedIdl=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-animations-2/) (8 September 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unexpected WebIDL definitions found
- Unknown WebIDL names used: `Animatable`, `Animation`, `AnimationTimeline`, `CSSOMString`, `KeyframeEffectOptions`, `KeyframeEffectReadOnly`, `Window`
- Missing references for links: 
     * [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Backgrounds and Borders Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-backgrounds-3/)
- Latest published version: [https://www.w3.org/TR/css-backgrounds-3](https://www.w3.org/TR/css-backgrounds-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-backgrounds-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-backgrounds-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-backgrounds-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Backgrounds and Borders Module Level 4](https://drafts.csswg.org/css-backgrounds-4/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Box Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)
- [Element Timing API](https://wicg.github.io/element-timing/)

No informative reference to this spec from other specs.


## CSS Backgrounds and Borders Module Level 4 {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-backgrounds-4/) (3 September 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Basic User Interface Module Level 3 (CSS3 UI) {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-ui-3/)
- Latest published version: [https://www.w3.org/TR/css-ui-3](https://www.w3.org/TR/css-ui-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-ui-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-ui-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-ui-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Basic User Interface Module Level 4 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-ui-4/)
- Latest published version: [https://www.w3.org/TR/css-ui-4](https://www.w3.org/TR/css-ui-4)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-ui-4

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-ui-4 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-ui-4 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Box Alignment Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-align-3/)
- Latest published version: [https://www.w3.org/TR/css-align-3](https://www.w3.org/TR/css-align-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-align-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-align-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-align-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Box Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Multi-column Layout Module Level 2](https://drafts.csswg.org/css-multicol-2/)

No informative reference to this spec from other specs.


## CSS Box Model Module Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-box-3/) (26 November 2018)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css-cascade/`](https://www.w3.org/TR/css-cascade/)
     * [`https://www.w3.org/TR/2018/WD-css3-box-20180731/`](https://www.w3.org/TR/2018/WD-css3-box-20180731/)
     * [`https://www.w3.org/TR/css-display/`](https://www.w3.org/TR/css-display/)
     * [`https://www.w3.org/TR/css-flexbox/`](https://www.w3.org/TR/css-flexbox/)
     * [`https://www.w3.org/TR/css-grid/`](https://www.w3.org/TR/css-grid/)
     * [`https://www.w3.org/TR/css-position/`](https://www.w3.org/TR/css-position/)
     * [`https://www.w3.org/TR/css-tables/`](https://www.w3.org/TR/css-tables/)
     * [`https://www.w3.org/TR/css-logical-1/`](https://www.w3.org/TR/css-logical-1/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Box Sizing Module Level 4 {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-sizing-4/) (10 May 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/2012/WD-css3-sizing-20120927/`](https://www.w3.org/TR/2012/WD-css3-sizing-20120927/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Cascading and Inheritance Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-cascade-3/)
- Latest published version: [https://www.w3.org/TR/css-cascade-3](https://www.w3.org/TR/css-cascade-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-cascade-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-cascade-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-cascade-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [ContentEditable](https://w3c.github.io/editing/contentEditable.html)
- [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/)

No informative reference to this spec from other specs.


## CSS Cascading and Inheritance Level 4 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-cascade-4/)
- Latest published version: [https://www.w3.org/TR/css-cascade-4](https://www.w3.org/TR/css-cascade-4)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-cascade-4

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-cascade-4 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-cascade-4 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Environment Variables Module Level 1](https://drafts.csswg.org/css-env-1/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)

Informative references to this spec from:

- [CSS Nesting Module](https://drafts.csswg.org/css-nesting-1/)


## CSS Color Adjustment Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-color-adjust-1/)
- Latest published version: [https://www.w3.org/TR/css-color-adjust-1](https://www.w3.org/TR/css-color-adjust-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-color-adjust-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-color-adjust-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-color-adjust-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/)

No informative reference to this spec from other specs.


## CSS Color Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-color-3/)
- Latest published version: [https://www.w3.org/TR/css-color-3](https://www.w3.org/TR/css-color-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-color-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-color-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-color-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Backgrounds and Borders Module Level 4](https://drafts.csswg.org/css-backgrounds-4/)
- [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/)

Informative references to this spec from:

- [CSS Nesting Module](https://drafts.csswg.org/css-nesting-1/)


## CSS Color Module Level 4 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-color-4/)
- Latest published version: [https://www.w3.org/TR/css-color-4](https://www.w3.org/TR/css-color-4)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-color-4

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-color-4 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-color-4 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)

Informative references to this spec from:

- [CSS Nesting Module](https://drafts.csswg.org/css-nesting-1/)
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)


## CSS Color Module Level 5 {data-spec=true data-anomaly=true data-noCssDefinitions=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-color-5/) (24 June 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- No CSS definitions found

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Conditional Rules Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css3-conditional/)
- Latest published version: [https://www.w3.org/TR/css3-conditional](https://www.w3.org/TR/css3-conditional)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css3-conditional

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css3-conditional reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css3-conditional reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Conditional Rules Module Level 4](https://drafts.csswg.org/css-conditional-4/)
- [CSS Environment Variables Module Level 1](https://drafts.csswg.org/css-env-1/)
- [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/)

No informative reference to this spec from other specs.


## CSS Conditional Rules Module Level 4 {data-spec=true data-anomaly=true data-noCssDefinitions=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-conditional-4/) (31 March 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- No CSS definitions found

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Containment Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-contain-1/)
- Latest published version: [https://www.w3.org/TR/css-contain-1](https://www.w3.org/TR/css-contain-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-contain-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-contain-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-contain-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Counter Styles Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-counter-styles-3/)
- Latest published version: [https://www.w3.org/TR/css-counter-styles-3](https://www.w3.org/TR/css-counter-styles-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-counter-styles-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-counter-styles-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-counter-styles-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Custom Properties for Cascading Variables Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-variables-1/)
- Latest published version: [https://www.w3.org/TR/css-variables-1](https://www.w3.org/TR/css-variables-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-variables-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-variables-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-variables-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Environment Variables Module Level 1](https://drafts.csswg.org/css-env-1/)

No informative reference to this spec from other specs.


## CSS Device Adaptation Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-device-adapt-1/)
- Latest published version: [https://www.w3.org/TR/css-device-adapt-1](https://www.w3.org/TR/css-device-adapt-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-device-adapt-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-device-adapt-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-device-adapt-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Display Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-display-3/)
- Latest published version: [https://www.w3.org/TR/css-display-3](https://www.w3.org/TR/css-display-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-display-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-display-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-display-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Box Tree API Level 1](https://drafts.css-houdini.org/box-tree-api/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Box Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Mobile Text Size Adjustment Module Level 1](https://drafts.csswg.org/css-size-adjust-1/)
- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/)
- [CSS Shapes Module Level 2](https://drafts.csswg.org/css-shapes-2/)
- [Element Timing API](https://wicg.github.io/element-timing/)
- [Layout Instability API](https://wicg.github.io/layout-instability/)

No informative reference to this spec from other specs.


## CSS Easing Functions Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-easing-1/)
- Latest published version: [https://www.w3.org/TR/css-easing-1](https://www.w3.org/TR/css-easing-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-easing-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-easing-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-easing-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Backgrounds and Borders Module Level 4](https://drafts.csswg.org/css-backgrounds-4/)

No informative reference to this spec from other specs.


## CSS Environment Variables Module Level 1 {data-spec=true data-anomaly=true data-noCssDefinitions=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-env-1/) (3 August 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- No CSS definitions found

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Exclusions Module Level 1 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-exclusions-1/) (10 May 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-box/`](https://www.w3.org/TR/css3-box/)
     * [`https://www.w3.org/TR/2015/WD-css3-exclusions-20150115/`](https://www.w3.org/TR/2015/WD-css3-exclusions-20150115/)
     * [`https://www.w3.org/TR/2013/WD-css3-exclusions-20130528/`](https://www.w3.org/TR/2013/WD-css3-exclusions-20130528/)
     * [`https://www.w3.org/TR/2012/WD-css3-exclusions-20120503/`](https://www.w3.org/TR/2012/WD-css3-exclusions-20120503/)
     * [`https://www.w3.org/TR/css-shapes/`](https://www.w3.org/TR/css-shapes/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/), related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Fill and Stroke Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/fill-stroke-3/)
- Latest published version: [https://www.w3.org/TR/fill-stroke-3](https://www.w3.org/TR/fill-stroke-3)
- Repository: [GitHub w3c/fxtf-drafts](https://github.com/w3c/fxtf-drafts)
- Shortname: fill-stroke-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/fill-stroke-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/fill-stroke-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Flexible Box Layout Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-flexbox-1/)
- Latest published version: [https://www.w3.org/TR/css-flexbox-1](https://www.w3.org/TR/css-flexbox-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-flexbox-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-flexbox-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-flexbox-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)

Informative references to this spec from:

- [CSS Box Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Exclusions Module Level 1](https://drafts.csswg.org/css-exclusions-1/)


## CSS Font Loading Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-font-loading-3/)
- Latest published version: [https://www.w3.org/TR/css-font-loading-3](https://www.w3.org/TR/css-font-loading-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-font-loading-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-font-loading-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-font-loading-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Fonts Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-fonts-3/)
- Latest published version: [https://www.w3.org/TR/css-fonts-3](https://www.w3.org/TR/css-fonts-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-fonts-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-fonts-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-fonts-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Mobile Text Size Adjustment Module Level 1](https://drafts.csswg.org/css-size-adjust-1/)

No informative reference to this spec from other specs.


## CSS Fonts Module Level 4 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-fonts-4/)
- Latest published version: [https://www.w3.org/TR/css-fonts-4](https://www.w3.org/TR/css-fonts-4)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-fonts-4

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-fonts-4 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-fonts-4 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Mobile Text Size Adjustment Module Level 1](https://drafts.csswg.org/css-size-adjust-1/)
- [Element Timing API](https://wicg.github.io/element-timing/)

No informative reference to this spec from other specs.


## CSS Fragmentation Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-break-3/)
- Latest published version: [https://www.w3.org/TR/css-break-3](https://www.w3.org/TR/css-break-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-break-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-break-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-break-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Multi-column Layout Module Level 2](https://drafts.csswg.org/css-multicol-2/)

Informative references to this spec from:

- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Box Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)


## CSS Fragmentation Module Level 4 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-break-4/)
- Latest published version: [https://www.w3.org/TR/css-break-4](https://www.w3.org/TR/css-break-4)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-break-4

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-break-4 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-break-4 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [Layout Instability API](https://wicg.github.io/layout-instability/)

No informative reference to this spec from other specs.


## CSS Generated Content for Paged Media Module {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-gcpm-3/)
- Latest published version: [https://www.w3.org/TR/css-gcpm-3](https://www.w3.org/TR/css-gcpm-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-gcpm-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-gcpm-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-gcpm-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [CSS Generated Content for Paged Media Module Level 4](https://drafts.csswg.org/css-gcpm-4/)


## CSS Generated Content for Paged Media Module Level 4 {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-gcpm-4/) (17 September 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Generated Content Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-content-3/)
- Latest published version: [https://www.w3.org/TR/css-content-3](https://www.w3.org/TR/css-content-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-content-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-content-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-content-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Generated Content for Paged Media Module Level 4](https://drafts.csswg.org/css-gcpm-4/)

No informative reference to this spec from other specs.


## CSS Grid Layout Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-grid-1/)
- Latest published version: [https://www.w3.org/TR/css-grid-1](https://www.w3.org/TR/css-grid-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-grid-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-grid-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-grid-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Backgrounds and Borders Module Level 4](https://drafts.csswg.org/css-backgrounds-4/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)

Informative references to this spec from:

- [CSS Exclusions Module Level 1](https://drafts.csswg.org/css-exclusions-1/)


## CSS Grid Layout Module Level 2 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-grid-2/)
- Latest published version: [https://www.w3.org/TR/css-grid-2](https://www.w3.org/TR/css-grid-2)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-grid-2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-grid-2 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-grid-2 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Image Values and Replaced Content Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css3-images/)
- Latest published version: [https://www.w3.org/TR/css3-images](https://www.w3.org/TR/css3-images)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css3-images

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css3-images reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css3-images reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Box Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Shapes Module Level 2](https://drafts.csswg.org/css-shapes-2/)

No informative reference to this spec from other specs.


## CSS Image Values and Replaced Content Module Level 4 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-images-4/)
- Latest published version: [https://www.w3.org/TR/css-images-4](https://www.w3.org/TR/css-images-4)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-images-4

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-images-4 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-images-4 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Box Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)

No informative reference to this spec from other specs.


## CSS Inline Layout Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-inline-3/)
- Latest published version: [https://www.w3.org/TR/css-inline-3](https://www.w3.org/TR/css-inline-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-inline-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-inline-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-inline-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Intrinsic & Extrinsic Sizing Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-sizing-3/)
- Latest published version: [https://www.w3.org/TR/css-sizing-3](https://www.w3.org/TR/css-sizing-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-sizing-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-sizing-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-sizing-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Box Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Mobile Text Size Adjustment Module Level 1](https://drafts.csswg.org/css-size-adjust-1/)
- [CSS Multi-column Layout Module Level 2](https://drafts.csswg.org/css-multicol-2/)

No informative reference to this spec from other specs.


## CSS Layout API Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-layout-api-1/)
- Latest published version: [https://www.w3.org/TR/css-layout-api-1](https://www.w3.org/TR/css-layout-api-1)
- Shortname: css-layout-api-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-layout-api-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-layout-api-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Line Grid Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-line-grid-1/)
- Latest published version: [https://www.w3.org/TR/css-line-grid-1](https://www.w3.org/TR/css-line-grid-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-line-grid-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-line-grid-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-line-grid-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Lists Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-lists-3/)
- Latest published version: [https://www.w3.org/TR/css-lists-3](https://www.w3.org/TR/css-lists-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-lists-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-lists-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-lists-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Exclusions Module Level 1](https://drafts.csswg.org/css-exclusions-1/)

No informative reference to this spec from other specs.


## CSS Logical Properties and Values Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-logical-1/)
- Latest published version: [https://www.w3.org/TR/css-logical-1](https://www.w3.org/TR/css-logical-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-logical-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-logical-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-logical-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Box Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)

No informative reference to this spec from other specs.


## CSS Masking Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-masking-1/)
- Latest published version: [https://www.w3.org/TR/css-masking-1](https://www.w3.org/TR/css-masking-1)
- Repository: [GitHub w3c/fxtf-drafts](https://github.com/w3c/fxtf-drafts)
- Shortname: css-masking-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-masking-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-masking-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)

Informative references to this spec from:

- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)


## CSS Mobile Text Size Adjustment Module Level 1 {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-size-adjust-1/) (14 November 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)

No informative reference to this spec from other specs.


## CSS Multi-column Layout Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-multicol-1/)
- Latest published version: [https://www.w3.org/TR/css-multicol-1](https://www.w3.org/TR/css-multicol-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-multicol-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-multicol-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-multicol-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Box Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Multi-column Layout Module Level 2](https://drafts.csswg.org/css-multicol-2/)

No informative reference to this spec from other specs.


## CSS Multi-column Layout Module Level 2 {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-multicol-2/) (14 November 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Namespaces Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-namespaces-3/)
- Latest published version: [https://www.w3.org/TR/css-namespaces-3](https://www.w3.org/TR/css-namespaces-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-namespaces-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-namespaces-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-namespaces-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Nesting Module {data-spec=true data-anomaly=true data-noCssDefinitions=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-nesting-1/) (9 March 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- No CSS definitions found

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Object Model (CSSOM) {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/cssom-1/)
- Latest published version: [https://www.w3.org/TR/cssom-1](https://www.w3.org/TR/cssom-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: cssom-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/cssom-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/cssom-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)
- [CSS Parser API](https://wicg.github.io/CSS-Parser-API/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)

No informative reference to this spec from other specs.


## CSS Overflow Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-overflow-3/)
- Latest published version: [https://www.w3.org/TR/css-overflow-3](https://www.w3.org/TR/css-overflow-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-overflow-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-overflow-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-overflow-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Box Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [Layout Instability API](https://wicg.github.io/layout-instability/)
- [Scroll-linked Animations](https://drafts.csswg.org/scroll-animations-1/)

No informative reference to this spec from other specs.


## CSS Overflow Module Level 4 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-overflow-4/)
- Latest published version: [https://www.w3.org/TR/css-overflow-4](https://www.w3.org/TR/css-overflow-4)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-overflow-4

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-overflow-4 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-overflow-4 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Overscroll Behavior Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-overscroll-1/)
- Latest published version: [https://www.w3.org/TR/css-overscroll-1](https://www.w3.org/TR/css-overscroll-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-overscroll-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-overscroll-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-overscroll-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Page Floats {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-page-floats-3/)
- Latest published version: [https://www.w3.org/TR/css-page-floats-3](https://www.w3.org/TR/css-page-floats-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-page-floats-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-page-floats-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-page-floats-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Exclusions Module Level 1](https://drafts.csswg.org/css-exclusions-1/)

No informative reference to this spec from other specs.


## CSS Paged Media Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-page-3/)
- Latest published version: [https://www.w3.org/TR/css-page-3](https://www.w3.org/TR/css-page-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-page-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-page-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-page-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [CSS Generated Content for Paged Media Module Level 4](https://drafts.csswg.org/css-gcpm-4/)


## CSS Painting API Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-paint-api-1/)
- Latest published version: [https://www.w3.org/TR/css-paint-api-1](https://www.w3.org/TR/css-paint-api-1)
- Shortname: css-paint-api-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-paint-api-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-paint-api-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Parser API {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/CSS-Parser-API/) (27 July 2018)
- Repository: [GitHub wicg/CSS-Parser-API](https://github.com/wicg/CSS-Parser-API)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `CSS`, `CSSStyleValue`, `ReadableStream`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Positioned Layout Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-position-3/)
- Latest published version: [https://www.w3.org/TR/css-position-3](https://www.w3.org/TR/css-position-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-position-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-position-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-position-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Exclusions Module Level 1](https://drafts.csswg.org/css-exclusions-1/)
- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/)

No informative reference to this spec from other specs.


## CSS Properties and Values API Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-properties-values-api-1/)
- Latest published version: [https://www.w3.org/TR/css-properties-values-api-1](https://www.w3.org/TR/css-properties-values-api-1)
- Shortname: css-properties-values-api-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-properties-values-api-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-properties-values-api-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Pseudo-Elements Module Level 4 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-pseudo-4/)
- Latest published version: [https://www.w3.org/TR/css-pseudo-4](https://www.w3.org/TR/css-pseudo-4)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-pseudo-4

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-pseudo-4 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-pseudo-4 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)

No informative reference to this spec from other specs.


## CSS Regions Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-regions-1/)
- Latest published version: [https://www.w3.org/TR/css-regions-1](https://www.w3.org/TR/css-regions-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-regions-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-regions-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-regions-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Generated Content for Paged Media Module Level 4](https://drafts.csswg.org/css-gcpm-4/)
- [CSS Multi-column Layout Module Level 2](https://drafts.csswg.org/css-multicol-2/)

No informative reference to this spec from other specs.


## CSS Rhythmic Sizing {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-rhythm-1/)
- Latest published version: [https://www.w3.org/TR/css-rhythm-1](https://www.w3.org/TR/css-rhythm-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-rhythm-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-rhythm-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-rhythm-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Round Display Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-round-display-1/)
- Latest published version: [https://www.w3.org/TR/css-round-display-1](https://www.w3.org/TR/css-round-display-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-round-display-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-round-display-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-round-display-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Ruby Layout Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-ruby-1/)
- Latest published version: [https://www.w3.org/TR/css-ruby-1](https://www.w3.org/TR/css-ruby-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-ruby-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-ruby-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-ruby-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Scoping Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-scoping-1/)
- Latest published version: [https://www.w3.org/TR/css-scoping-1](https://www.w3.org/TR/css-scoping-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-scoping-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-scoping-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-scoping-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Scroll Anchoring Module Level 1 {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-scroll-anchoring-1/) (10 May 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Scroll Snap Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-scroll-snap-1/)
- Latest published version: [https://www.w3.org/TR/css-scroll-snap-1](https://www.w3.org/TR/css-scroll-snap-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-scroll-snap-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-scroll-snap-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-scroll-snap-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/)

No informative reference to this spec from other specs.


## CSS Scrollbars Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-scrollbars-1/)
- Latest published version: [https://www.w3.org/TR/css-scrollbars-1](https://www.w3.org/TR/css-scrollbars-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-scrollbars-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-scrollbars-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-scrollbars-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Shadow Parts {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-shadow-parts-1/)
- Latest published version: [https://www.w3.org/TR/css-shadow-parts-1](https://www.w3.org/TR/css-shadow-parts-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-shadow-parts-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-shadow-parts-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-shadow-parts-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Shapes Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-shapes-1/)
- Latest published version: [https://www.w3.org/TR/css-shapes-1](https://www.w3.org/TR/css-shapes-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-shapes-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-shapes-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-shapes-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Shapes Module Level 2](https://drafts.csswg.org/css-shapes-2/)

No informative reference to this spec from other specs.


## CSS Shapes Module Level 2 {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-shapes-2/) (11 January 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css-shapes/`](https://www.w3.org/TR/css-shapes/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Spatial Navigation Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-nav-1/)
- Latest published version: [https://www.w3.org/TR/css-nav-1](https://www.w3.org/TR/css-nav-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-nav-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-nav-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-nav-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Style Attributes {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-style-attr/)
- Latest published version: [https://www.w3.org/TR/css-style-attr](https://www.w3.org/TR/css-style-attr)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-style-attr

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-style-attr reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-style-attr reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Syntax Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-syntax-3/)
- Latest published version: [https://www.w3.org/TR/css-syntax-3](https://www.w3.org/TR/css-syntax-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-syntax-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-syntax-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-syntax-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Environment Variables Module Level 1](https://drafts.csswg.org/css-env-1/)
- [CSS Nesting Module](https://drafts.csswg.org/css-nesting-1/)
- [CSS Parser API](https://wicg.github.io/CSS-Parser-API/)

No informative reference to this spec from other specs.


## CSS Table Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-tables-3/)
- Latest published version: [https://www.w3.org/TR/css-tables-3](https://www.w3.org/TR/css-tables-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-tables-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-tables-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-tables-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Text Decoration Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-text-decor-3/)
- Latest published version: [https://www.w3.org/TR/css-text-decor-3](https://www.w3.org/TR/css-text-decor-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-text-decor-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-text-decor-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-text-decor-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Text Decoration Module Level 4 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-text-decor-4/)
- Latest published version: [https://www.w3.org/TR/css-text-decor-4](https://www.w3.org/TR/css-text-decor-4)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-text-decor-4

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-text-decor-4 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-text-decor-4 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Text Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-text-3/)
- Latest published version: [https://www.w3.org/TR/css-text-3](https://www.w3.org/TR/css-text-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-text-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-text-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-text-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Mobile Text Size Adjustment Module Level 1](https://drafts.csswg.org/css-size-adjust-1/)
- [Layout Instability API](https://wicg.github.io/layout-instability/)

No informative reference to this spec from other specs.


## CSS Text Module Level 4 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-text-4/)
- Latest published version: [https://www.w3.org/TR/css-text-4](https://www.w3.org/TR/css-text-4)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-text-4

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-text-4 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-text-4 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Backgrounds and Borders Module Level 4](https://drafts.csswg.org/css-backgrounds-4/)
- [CSS Mobile Text Size Adjustment Module Level 1](https://drafts.csswg.org/css-size-adjust-1/)

No informative reference to this spec from other specs.


## CSS Transforms Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-transforms-1/)
- Latest published version: [https://www.w3.org/TR/css-transforms-1](https://www.w3.org/TR/css-transforms-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-transforms-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-transforms-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-transforms-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [Layout Instability API](https://wicg.github.io/layout-instability/)

No informative reference to this spec from other specs.


## CSS Transforms Module Level 2 {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-transforms-2/) (3 October 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)

Informative references to this spec from:

- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)


## CSS Transitions {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-transitions-1/)
- Latest published version: [https://www.w3.org/TR/css-transitions-1](https://www.w3.org/TR/css-transitions-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-transitions-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-transitions-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-transitions-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)

Informative references to this spec from:

- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)


## CSS Transitions Level 2 {data-spec=true data-anomaly=true data-hasUnexpectedIdl=true data-noCssDefinitions=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-transitions-2/) (16 September 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- No CSS definitions found
- Unexpected WebIDL definitions found
- Unknown WebIDL names used: `Animatable`, `Animation`, `AnimationTimeline`, `CSSOMString`, `KeyframeEffectOptions`, `Window`
- Missing references for links: 
     * [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS TV Profile 1.0 {data-spec=true data-anomaly=true data-noCssDefinitions=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-tv/) (10 October 2014)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- No CSS definitions found

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Typed OM Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-typed-om-1/)
- Latest published version: [https://www.w3.org/TR/css-typed-om-1](https://www.w3.org/TR/css-typed-om-1)
- Shortname: css-typed-om-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-typed-om-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-typed-om-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Parser API](https://wicg.github.io/CSS-Parser-API/)
- [Font Metrics API Level 1](https://drafts.css-houdini.org/font-metrics-api/)

No informative reference to this spec from other specs.


## CSS Values and Units Module Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-values-3/)
- Latest published version: [https://www.w3.org/TR/css-values-3](https://www.w3.org/TR/css-values-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-values-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-values-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-values-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compositing and Blending Level 2](https://drafts.fxtf.org/compositing-2/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Box Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/)
- [CSS Environment Variables Module Level 1](https://drafts.csswg.org/css-env-1/)
- [CSS Mobile Text Size Adjustment Module Level 1](https://drafts.csswg.org/css-size-adjust-1/)
- [CSS Multi-column Layout Module Level 2](https://drafts.csswg.org/css-multicol-2/)
- [CSS Shapes Module Level 2](https://drafts.csswg.org/css-shapes-2/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [Scroll-linked Animations](https://drafts.csswg.org/scroll-animations-1/)

No informative reference to this spec from other specs.


## CSS Values and Units Module Level 4 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-values-4/)
- Latest published version: [https://www.w3.org/TR/css-values-4](https://www.w3.org/TR/css-values-4)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-values-4

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-values-4 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-values-4 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)
- [CSS Backgrounds and Borders Module Level 4](https://drafts.csswg.org/css-backgrounds-4/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Box Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/)
- [CSS Conditional Rules Module Level 4](https://drafts.csswg.org/css-conditional-4/)
- [CSS Environment Variables Module Level 1](https://drafts.csswg.org/css-env-1/)
- [CSS Exclusions Module Level 1](https://drafts.csswg.org/css-exclusions-1/)
- [CSS Generated Content for Paged Media Module Level 4](https://drafts.csswg.org/css-gcpm-4/)
- [CSS Mobile Text Size Adjustment Module Level 1](https://drafts.csswg.org/css-size-adjust-1/)
- [CSS Multi-column Layout Module Level 2](https://drafts.csswg.org/css-multicol-2/)
- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/)
- [CSS Shapes Module Level 2](https://drafts.csswg.org/css-shapes-2/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [Filter Effects Module Level 2](https://drafts.fxtf.org/filter-effects-2/)
- [Layout Instability API](https://wicg.github.io/layout-instability/)
- [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/)
- [Picture-in-Picture](https://w3c.github.io/picture-in-picture/)
- [Scroll-linked Animations](https://drafts.csswg.org/scroll-animations-1/)

No informative reference to this spec from other specs.


## CSS Will Change Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-will-change-1/)
- Latest published version: [https://www.w3.org/TR/css-will-change-1](https://www.w3.org/TR/css-will-change-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-will-change-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-will-change-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-will-change-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Writing Modes Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-writing-modes-3/)
- Latest published version: [https://www.w3.org/TR/css-writing-modes-3](https://www.w3.org/TR/css-writing-modes-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-writing-modes-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-writing-modes-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-writing-modes-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Exclusions Module Level 1](https://drafts.csswg.org/css-exclusions-1/)

No informative reference to this spec from other specs.


## CSS Writing Modes Level 4 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css-writing-modes-4/)
- Latest published version: [https://www.w3.org/TR/css-writing-modes-4](https://www.w3.org/TR/css-writing-modes-4)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-writing-modes-4

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css-writing-modes-4 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css-writing-modes-4 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Box Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/)
- [Layout Instability API](https://wicg.github.io/layout-instability/)
- [Scroll-linked Animations](https://drafts.csswg.org/scroll-animations-1/)

No informative reference to this spec from other specs.


## CSSOM View Module {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/cssom-view-1/)
- Latest published version: [https://www.w3.org/TR/cssom-view-1](https://www.w3.org/TR/cssom-view-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: cssom-view-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/cssom-view-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/cssom-view-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/)
- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/)
- [Layout Instability API](https://wicg.github.io/layout-instability/)
- [Media Capabilities](https://w3c.github.io/media-capabilities/)
- [Resize Observer](https://drafts.csswg.org/resize-observer/)
- [Scroll-linked Animations](https://drafts.csswg.org/scroll-animations-1/)

No informative reference to this spec from other specs.


## DeviceOrientation Event Specification {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/orientation-event/)
- Latest published version: [https://www.w3.org/TR/orientation-event](https://www.w3.org/TR/orientation-event)
- Repository: [GitHub w3c/deviceorientation](https://github.com/w3c/deviceorientation)
- Shortname: orientation-event

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/orientation-event reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/orientation-event reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## DOM Parsing and Serialization {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/DOM-Parsing/)
- Latest published version: [https://www.w3.org/TR/DOM-Parsing](https://www.w3.org/TR/DOM-Parsing)
- Repository: [GitHub w3c/DOM-Parsing](https://github.com/w3c/DOM-Parsing)
- Shortname: DOM-Parsing

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/DOM-Parsing reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/DOM-Parsing reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## DOM Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://dom.spec.whatwg.org/) (24 September 2019)
- Repository: [GitHub whatwg/dom](https://github.com/whatwg/dom)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `AudioWorklet`, `DOMHighResTimeStamp`, `EventHandler`, `HTMLSlotElement`, `Window`
- Missing references for links: 
     * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/)
     * [`https://w3c.github.io/deviceorientation/spec-source-orientation.html`](https://w3c.github.io/deviceorientation/spec-source-orientation.html)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/), related reference "UIEVENTS" uses URL [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Box Tree API Level 1](https://drafts.css-houdini.org/box-tree-api/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Cookie Store API](https://wicg.github.io/cookie-store/)
- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Environment Variables Module Level 1](https://drafts.csswg.org/css-env-1/)
- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/)
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)
- [Element Timing API](https://wicg.github.io/element-timing/)
- [Event Timing API](https://wicg.github.io/event-timing/)
- [Feature Policy](https://w3c.github.io/webappsec-feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [Font Metrics API Level 1](https://drafts.css-houdini.org/font-metrics-api/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/)
- [Layout Instability API](https://wicg.github.io/layout-instability/)
- [Media Capabilities](https://w3c.github.io/media-capabilities/)
- [Network Information API](https://wicg.github.io/netinfo/)
- [Notifications API Standard](https://notifications.spec.whatwg.org/)
- [Picture-in-Picture](https://w3c.github.io/picture-in-picture/)
- [PointerEvents - Level 2 - Extensions](https://w3c.github.io/pointerevents/extension.html)
- [Reporting API 1](https://w3c.github.io/reporting/)
- [Resize Observer](https://drafts.csswg.org/resize-observer/)
- [Scroll-linked Animations](https://drafts.csswg.org/scroll-animations-1/)
- [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [Streams Standard](https://streams.spec.whatwg.org/)
- [URL Standard](https://url.spec.whatwg.org/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web NFC API](https://w3c.github.io/web-nfc/)
- [Web Speech API](https://w3c.github.io/speech-api/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- [WebUSB API](https://wicg.github.io/webusb/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)

Informative references to this spec from:

- [DOM Standard](https://dom.spec.whatwg.org/)


## Element Timing API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/element-timing/) (28 August 2019)
- Repository: [GitHub wicg/element-timing](https://github.com/wicg/element-timing)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMHighResTimeStamp`, `DOMRectReadOnly`, `PerformanceEntry`, `Window`
- Missing references for links: 
     * [`https://w3c.github.io/performance-timeline/`](https://w3c.github.io/performance-timeline/)
     * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/)
     * [`https://w3c.github.io/resource-timing/`](https://w3c.github.io/resource-timing/)
     * [`https://w3c.github.io/IntersectionObserver/`](https://w3c.github.io/IntersectionObserver/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/)

No informative reference to this spec from other specs.


## encoding {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/encoding/)
- Latest published version: [https://www.w3.org/TR/encoding](https://www.w3.org/TR/encoding)
- Shortname: encoding

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/encoding reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/encoding reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Encrypted Media Extensions {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/encrypted-media/)
- Latest published version: [https://www.w3.org/TR/encrypted-media](https://www.w3.org/TR/encrypted-media)
- Repository: [GitHub w3c/encrypted-media](https://github.com/w3c/encrypted-media)
- Shortname: encrypted-media

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/encrypted-media reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/encrypted-media reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Media Capabilities](https://w3c.github.io/media-capabilities/)

No informative reference to this spec from other specs.


## Event Timing API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/event-timing/) (1 October 2019)
- Repository: [GitHub wicg/event-timing](https://github.com/wicg/event-timing)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMHighResTimeStamp`, `Performance`, `PerformanceEntry`, `Window`
- Missing references for links: 
     * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/)
     * [`https://w3c.github.io/pointerevents/`](https://w3c.github.io/pointerevents/)
     * [`https://w3c.github.io/touch-events/`](https://w3c.github.io/touch-events/)
     * [`https://w3c.github.io/performance-timeline/`](https://w3c.github.io/performance-timeline/)
     * [`https://w3c.github.io/paint-timing/`](https://w3c.github.io/paint-timing/)
     * [`https://w3c.github.io/pointerevents/extension.html`](https://w3c.github.io/pointerevents/extension.html)
- Inconsistent references for links: 
     * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/), related reference "UIEVENTS" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/)

No informative reference to this spec from other specs.


## Feature Policy {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/webappsec-feature-policy/) (3 October 2019)
- Repository: [GitHub w3c/webappsec-feature-policy](https://github.com/w3c/webappsec-feature-policy)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `HTMLIFrameElement`, `Window`
- Missing references for WebIDL names: 
     * `ReportBody` defined in [Reporting API 1](https://w3c.github.io/reporting/)
- Missing references for links: 
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/)
     * [`https://w3c.github.io/payment-request/`](https://w3c.github.io/payment-request/)
     * [`https://w3c.github.io/reporting/`](https://w3c.github.io/reporting/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

No informative reference to this spec from other specs.


## Fetch Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://fetch.spec.whatwg.org/) (5 October 2019)
- Repository: [GitHub whatwg/fetch](https://github.com/whatwg/fetch)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Blob`, `ReadableStream`, `ReferrerPolicy`, `Window`, `WindowOrWorkerGlobalScope`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Cookie Store API](https://wicg.github.io/cookie-store/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Feature Policy](https://w3c.github.io/webappsec-feature-policy/)
- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/)
- [Media Session Standard](https://w3c.github.io/mediasession/)
- [Notifications API Standard](https://notifications.spec.whatwg.org/)
- [Reporting API 1](https://w3c.github.io/reporting/)
- [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Informative references to this spec from:

- [Streams Standard](https://streams.spec.whatwg.org/)


## File and Directory Entries API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/entries-api/) (30 September 2019)
- Repository: [GitHub wicg/entries-api](https://github.com/wicg/entries-api)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DataTransferItem`, `File`, `HTMLInputElement`, `Window`
- Missing references for links: 
     * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## File API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/FileAPI/)
- Latest published version: [https://www.w3.org/TR/FileAPI](https://www.w3.org/TR/FileAPI)
- Repository: [GitHub w3c/FileAPI](https://github.com/w3c/FileAPI)
- Shortname: FileAPI

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/FileAPI reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/FileAPI reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [File and Directory Entries API](https://wicg.github.io/entries-api/)
- [Reporting API 1](https://w3c.github.io/reporting/)
- [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)

No informative reference to this spec from other specs.


## Filter Effects Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/filter-effects-1/)
- Latest published version: [https://www.w3.org/TR/filter-effects-1](https://www.w3.org/TR/filter-effects-1)
- Repository: [GitHub w3c/fxtf-drafts](https://github.com/w3c/fxtf-drafts)
- Shortname: filter-effects-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/filter-effects-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/filter-effects-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [Filter Effects Module Level 2](https://drafts.fxtf.org/filter-effects-2/)

No informative reference to this spec from other specs.


## Filter Effects Module Level 2 {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.fxtf.org/filter-effects-2/) (12 September 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Font Metrics API Level 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.css-houdini.org/font-metrics-api/) (11 February 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `StylePropertyMapReadOnly`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Fullscreen API Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://fullscreen.spec.whatwg.org/) (26 September 2019)
- Repository: [GitHub whatwg/fullscreen](https://github.com/whatwg/fullscreen)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`
- Missing references for links: 
     * [`https://w3c.github.io/screen-orientation/`](https://w3c.github.io/screen-orientation/)
     * [`https://www.w3.org/TR/feature-policy-1/`](https://www.w3.org/TR/feature-policy-1/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Feature Policy](https://w3c.github.io/webappsec-feature-policy/)
- [Keyboard Lock](https://wicg.github.io/keyboard-lock/)

Informative references to this spec from:

- [DOM Standard](https://dom.spec.whatwg.org/)
- [Picture-in-Picture](https://w3c.github.io/picture-in-picture/)


## Gamepad {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/gamepad/)
- Latest published version: [https://www.w3.org/TR/gamepad](https://www.w3.org/TR/gamepad)
- Repository: [GitHub w3c/gamepad](https://github.com/w3c/gamepad)
- Shortname: gamepad

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/gamepad reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/gamepad reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [WebXR Gamepads Module - Level 1](https://immersive-web.github.io/webxr-gamepads-module/)

No informative reference to this spec from other specs.


## Generic Sensor API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/generic-sensor/)
- Latest published version: [https://www.w3.org/TR/generic-sensor](https://www.w3.org/TR/generic-sensor)
- Repository: [GitHub w3c/sensors](https://github.com/w3c/sensors)
- Shortname: generic-sensor

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/generic-sensor reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/generic-sensor reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Geolocation API Specification 2nd Edition {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/geolocation-API/)
- Latest published version: [https://www.w3.org/TR/geolocation-API](https://www.w3.org/TR/geolocation-API)
- Repository: [GitHub w3c/geolocation-api](https://github.com/w3c/geolocation-api)
- Shortname: geolocation-API

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/geolocation-API reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/geolocation-API reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)


## Geolocation Sensor {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/geolocation-sensor/) (9 August 2019)
- Repository: [GitHub wicg/geolocation-sensor](https://github.com/wicg/geolocation-sensor)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMHighResTimeStamp`, `DedicatedWorker`, `Sensor`, `SensorOptions`, `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Geometry Interfaces Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/geometry-1/)
- Latest published version: [https://www.w3.org/TR/geometry-1](https://www.w3.org/TR/geometry-1)
- Repository: [GitHub w3c/fxtf-drafts](https://github.com/w3c/fxtf-drafts)
- Shortname: geometry-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/geometry-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/geometry-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Element Timing API](https://wicg.github.io/element-timing/)
- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/)
- [Resize Observer](https://drafts.csswg.org/resize-observer/)

No informative reference to this spec from other specs.


## Gyroscope {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/gyroscope/)
- Latest published version: [https://www.w3.org/TR/gyroscope](https://www.w3.org/TR/gyroscope)
- Repository: [GitHub w3c/gyroscope](https://github.com/w3c/gyroscope)
- Shortname: gyroscope

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/gyroscope reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/gyroscope reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## High Resolution Time Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/hr-time-3/)
- Latest published version: [https://www.w3.org/TR/hr-time-3](https://www.w3.org/TR/hr-time-3)
- Repository: [GitHub w3c/hr-time](https://github.com/w3c/hr-time)
- Shortname: hr-time-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/hr-time-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/hr-time-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [DOM Standard](https://dom.spec.whatwg.org/)
- [Element Timing API](https://wicg.github.io/element-timing/)
- [Event Timing API](https://wicg.github.io/event-timing/)
- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/)
- [Layout Instability API](https://wicg.github.io/layout-instability/)

No informative reference to this spec from other specs.


## HTML Media Capture {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/html-media-capture/)
- Latest published version: [https://www.w3.org/TR/html-media-capture](https://www.w3.org/TR/html-media-capture)
- Repository: [GitHub w3c/html-media-capture](https://github.com/w3c/html-media-capture)
- Shortname: html-media-capture

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/html-media-capture reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/html-media-capture reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Identifiers for WebRTC's Statistics API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/webrtc-stats/)
- Latest published version: [https://www.w3.org/TR/webrtc-stats](https://www.w3.org/TR/webrtc-stats)
- Repository: [GitHub w3c/webrtc-stats](https://github.com/w3c/webrtc-stats)
- Shortname: webrtc-stats

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/webrtc-stats reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/webrtc-stats reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Identity for WebRTC 1.0 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/webrtc-identity/)
- Latest published version: [https://www.w3.org/TR/webrtc-identity](https://www.w3.org/TR/webrtc-identity)
- Repository: [GitHub w3c/webrtc-identity](https://github.com/w3c/webrtc-identity)
- Shortname: webrtc-identity

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/webrtc-identity reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/webrtc-identity reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Indexed Database API 2.0 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/IndexedDB-2/)
- Latest published version: [https://www.w3.org/TR/IndexedDB-2](https://www.w3.org/TR/IndexedDB-2)
- Repository: [GitHub w3c/IndexedDB](https://github.com/w3c/IndexedDB)
- Shortname: IndexedDB-2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/IndexedDB-2 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/IndexedDB-2 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Input Device Capabilities {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/InputDeviceCapabilities/) (Wed Oct 09 2019)
- Repository: [GitHub wicg/InputDeviceCapabilities](https://github.com/wicg/InputDeviceCapabilities)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Unknown WebIDL names used: `UIEvent`, `UIEventInit`, `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Input Events Level 2 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/input-events-2/)
- Latest published version: [https://www.w3.org/TR/input-events-2](https://www.w3.org/TR/input-events-2)
- Repository: [GitHub w3c/input-events](https://github.com/w3c/input-events)
- Shortname: input-events-2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/input-events-2 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/input-events-2 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Intersection Observer {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/intersection-observer/)
- Latest published version: [https://www.w3.org/TR/intersection-observer](https://www.w3.org/TR/intersection-observer)
- Repository: [GitHub w3c/IntersectionObserver](https://github.com/w3c/IntersectionObserver)
- Shortname: intersection-observer

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/intersection-observer reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/intersection-observer reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Element Timing API](https://wicg.github.io/element-timing/)

No informative reference to this spec from other specs.


## Keyboard Lock {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/keyboard-lock/) (7 September 2018)
- Repository: [GitHub wicg/keyboard-lock](https://github.com/wicg/keyboard-lock)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Navigator`, `Window`
- WebIDL names also defined elsewhere: 
    * `Keyboard` also defined in [Keyboard Map](https://wicg.github.io/keyboard-map/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Keyboard Map {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/keyboard-map/) (22 April 2019)
- Repository: [GitHub wicg/keyboard-map](https://github.com/wicg/keyboard-map)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Navigator`, `Window`
- WebIDL names also defined elsewhere: 
    * `Keyboard` also defined in [Keyboard Lock](https://wicg.github.io/keyboard-lock/)
- Missing references for links: 
     * [`https://w3c.github.io/keyboard-lock/`](https://w3c.github.io/keyboard-lock/)
     * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Largest Contentful Paint {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/largest-contentful-paint/) (23 August 2019)
- Repository: [GitHub wicg/largest-contentful-paint](https://github.com/wicg/largest-contentful-paint)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMHighResTimeStamp`, `PerformanceEntry`, `Window`
- Missing references for links: 
     * [`https://w3c.github.io/performance-timeline/`](https://w3c.github.io/performance-timeline/)
     * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Element Timing API](https://wicg.github.io/element-timing/)

No informative reference to this spec from other specs.


## Layout Instability API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/layout-instability/) (11 September 2019)
- Repository: [GitHub wicg/layout-instability](https://github.com/wicg/layout-instability)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMHighResTimeStamp`, `PerformanceEntry`, `Window`
- Missing references for links: 
     * [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
     * [`https://www.w3.org/TR/pointerevents/`](https://www.w3.org/TR/pointerevents/)
     * [`https://w3c.github.io/performance-timeline/`](https://w3c.github.io/performance-timeline/)
     * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/)
     * [`https://w3c.github.io/paint-timing/`](https://w3c.github.io/paint-timing/)
     * [`https://w3c.github.io/resource-timing/`](https://w3c.github.io/resource-timing/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Long Tasks API 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/longtasks-1/)
- Latest published version: [https://www.w3.org/TR/longtasks-1](https://www.w3.org/TR/longtasks-1)
- Repository: [GitHub w3c/longtasks](https://github.com/w3c/longtasks)
- Shortname: longtasks-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/longtasks-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/longtasks-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Magnetometer {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/magnetometer/)
- Latest published version: [https://www.w3.org/TR/magnetometer](https://www.w3.org/TR/magnetometer)
- Repository: [GitHub w3c/magnetometer](https://github.com/w3c/magnetometer)
- Shortname: magnetometer

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/magnetometer reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/magnetometer reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Media Capabilities {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/media-capabilities/) (2 October 2019)
- Repository: [GitHub w3c/media-capabilities](https://github.com/w3c/media-capabilities)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `MediaKeySystemAccess`, `MediaKeysRequirement`, `Navigator`, `Screen`, `Window`, `WorkerNavigator`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
- Missing references for links: 
     * [`https://w3c.github.io/media-source/`](https://w3c.github.io/media-source/)
     * [`https://www.w3.org/TR/webrtc/`](https://www.w3.org/TR/webrtc/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/), related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Media Capture and Streams {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/mediacapture-streams/)
- Latest published version: [https://www.w3.org/TR/mediacapture-streams](https://www.w3.org/TR/mediacapture-streams)
- Repository: [GitHub w3c/mediacapture-main](https://github.com/w3c/mediacapture-main)
- Shortname: mediacapture-streams

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/mediacapture-streams reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/mediacapture-streams reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Media Capture Depth Stream Extensions {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/mediacapture-depth/)
- Latest published version: [https://www.w3.org/TR/mediacapture-depth](https://www.w3.org/TR/mediacapture-depth)
- Repository: [GitHub w3c/mediacapture-depth](https://github.com/w3c/mediacapture-depth)
- Shortname: mediacapture-depth

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/mediacapture-depth reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/mediacapture-depth reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Media Capture from DOM Elements {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/mediacapture-fromelement/)
- Latest published version: [https://www.w3.org/TR/mediacapture-fromelement](https://www.w3.org/TR/mediacapture-fromelement)
- Repository: [GitHub w3c/mediacapture-fromelement](https://github.com/w3c/mediacapture-fromelement)
- Shortname: mediacapture-fromelement

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/mediacapture-fromelement reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/mediacapture-fromelement reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Media Playback Quality {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/media-playback-quality/) (Wed Oct 09 2019)
- Repository: [GitHub w3c/media-playback-quality](https://github.com/w3c/media-playback-quality)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMHighResTimeStamp`, `HTMLVideoElement`, `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Media Capabilities](https://w3c.github.io/media-capabilities/)


## Media Queries {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css3-mediaqueries/)
- Latest published version: [https://www.w3.org/TR/css3-mediaqueries](https://www.w3.org/TR/css3-mediaqueries)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css3-mediaqueries

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/css3-mediaqueries reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/css3-mediaqueries reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Media Queries Level 4 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/mediaqueries-4/)
- Latest published version: [https://www.w3.org/TR/mediaqueries-4](https://www.w3.org/TR/mediaqueries-4)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: mediaqueries-4

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/mediaqueries-4 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/mediaqueries-4 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Box Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [Media Capabilities](https://w3c.github.io/media-capabilities/)
- [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/)

No informative reference to this spec from other specs.


## Media Queries Level 5 {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/mediaqueries-5/) (16 August 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Media Session Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/mediasession/) (27 September 2019)
- Repository: [GitHub w3c/mediasession](https://github.com/w3c/mediasession)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Navigator`, `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Picture-in-Picture](https://w3c.github.io/picture-in-picture/)


## Media Source Extensions™ {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/media-source/)
- Latest published version: [https://www.w3.org/TR/media-source](https://www.w3.org/TR/media-source)
- Repository: [GitHub w3c/media-source](https://github.com/w3c/media-source)
- Shortname: media-source

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/media-source reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/media-source reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Media Capabilities](https://w3c.github.io/media-capabilities/)
- [Media Playback Quality](https://w3c.github.io/media-playback-quality/)

No informative reference to this spec from other specs.


## MediaStream Recording {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/mediastream-recording/)
- Latest published version: [https://www.w3.org/TR/mediastream-recording](https://www.w3.org/TR/mediastream-recording)
- Repository: [GitHub w3c/mediacapture-record](https://github.com/w3c/mediacapture-record)
- Shortname: mediastream-recording

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/mediastream-recording reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/mediastream-recording reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Media Capabilities](https://w3c.github.io/media-capabilities/)


## MediaStreamTrack Content Hints {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/mst-content-hint/)
- Latest published version: [https://www.w3.org/TR/mst-content-hint](https://www.w3.org/TR/mst-content-hint)
- Repository: [GitHub w3c/mst-content-hint](https://github.com/w3c/mst-content-hint)
- Shortname: mst-content-hint

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/mst-content-hint reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/mst-content-hint reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Mixed Content {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/mixed-content/)
- Latest published version: [https://www.w3.org/TR/mixed-content](https://www.w3.org/TR/mixed-content)
- Repository: [GitHub w3c/webappsec-mixed-content](https://github.com/w3c/webappsec-mixed-content)
- Shortname: mixed-content

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/mixed-content reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/mixed-content reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)

No informative reference to this spec from other specs.


## Motion Path Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/motion-1/)
- Latest published version: [https://www.w3.org/TR/motion-1](https://www.w3.org/TR/motion-1)
- Repository: [GitHub w3c/fxtf-drafts](https://github.com/w3c/fxtf-drafts)
- Shortname: motion-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/motion-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/motion-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Backgrounds and Borders Module Level 4](https://drafts.csswg.org/css-backgrounds-4/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)

No informative reference to this spec from other specs.


## Navigation Timing Level 2 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/navigation-timing-2/)
- Latest published version: [https://www.w3.org/TR/navigation-timing-2](https://www.w3.org/TR/navigation-timing-2)
- Repository: [GitHub w3c/navigation-timing](https://github.com/w3c/navigation-timing)
- Shortname: navigation-timing-2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/navigation-timing-2 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/navigation-timing-2 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Network Information API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/netinfo/) (Wed Oct 09 2019)
- Repository: [GitHub wicg/netinfo](https://github.com/wicg/netinfo)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
- Missing references for links: 
     * [`https://w3c.github.io/ServiceWorker/v1/`](https://w3c.github.io/ServiceWorker/v1/)
     * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/)
     * [`https://www.w3.org/TR/netinfo/`](https://www.w3.org/TR/netinfo/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Non-element Selectors Module Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/selectors-nonelement-1/)
- Latest published version: [https://www.w3.org/TR/selectors-nonelement-1](https://www.w3.org/TR/selectors-nonelement-1)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: selectors-nonelement-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/selectors-nonelement-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/selectors-nonelement-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Notifications API Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://notifications.spec.whatwg.org/) (24 September 2019)
- Repository: [GitHub whatwg/notifications](https://github.com/whatwg/notifications)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `VibratePattern`, `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Orientation Sensor {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/orientation-sensor/)
- Latest published version: [https://www.w3.org/TR/orientation-sensor](https://www.w3.org/TR/orientation-sensor)
- Repository: [GitHub w3c/orientation-sensor](https://github.com/w3c/orientation-sensor)
- Shortname: orientation-sensor

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/orientation-sensor reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/orientation-sensor reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Page Visibility Level 2 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/page-visibility-2/)
- Latest published version: [https://www.w3.org/TR/page-visibility-2](https://www.w3.org/TR/page-visibility-2)
- Repository: [GitHub w3c/page-visibility](https://github.com/w3c/page-visibility)
- Shortname: page-visibility-2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/page-visibility-2 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/page-visibility-2 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Picture-in-Picture](https://w3c.github.io/picture-in-picture/)
- [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
- [Web NFC API](https://w3c.github.io/web-nfc/)

No informative reference to this spec from other specs.


## Paint Timing 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/paint-timing/)
- Latest published version: [https://www.w3.org/TR/paint-timing](https://www.w3.org/TR/paint-timing)
- Repository: [GitHub w3c/paint-timing](https://github.com/w3c/paint-timing)
- Shortname: paint-timing

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/paint-timing reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/paint-timing reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Event Timing API](https://wicg.github.io/event-timing/)
- [Layout Instability API](https://wicg.github.io/layout-instability/)

No informative reference to this spec from other specs.


## Payment Handler API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/payment-handler/)
- Latest published version: [https://www.w3.org/TR/payment-handler](https://www.w3.org/TR/payment-handler)
- Repository: [GitHub w3c/payment-handler](https://github.com/w3c/payment-handler)
- Shortname: payment-handler

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/payment-handler reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/payment-handler reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Payment Method: Basic Card {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/payment-method-basic-card/)
- Latest published version: [https://www.w3.org/TR/payment-method-basic-card](https://www.w3.org/TR/payment-method-basic-card)
- Repository: [GitHub w3c/payment-method-basic-card](https://github.com/w3c/payment-method-basic-card)
- Shortname: payment-method-basic-card

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/payment-method-basic-card reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/payment-method-basic-card reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Payment Request API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/payment-request/)
- Latest published version: [https://www.w3.org/TR/payment-request](https://www.w3.org/TR/payment-request)
- Repository: [GitHub w3c/payment-request](https://github.com/w3c/payment-request)
- Shortname: payment-request

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/payment-request reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/payment-request reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Feature Policy](https://w3c.github.io/webappsec-feature-policy/)

No informative reference to this spec from other specs.


## Performance Timeline Level 2 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/performance-timeline-2/)
- Latest published version: [https://www.w3.org/TR/performance-timeline-2](https://www.w3.org/TR/performance-timeline-2)
- Repository: [GitHub w3c/performance-timeline](https://github.com/w3c/performance-timeline)
- Shortname: performance-timeline-2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/performance-timeline-2 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/performance-timeline-2 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Element Timing API](https://wicg.github.io/element-timing/)
- [Event Timing API](https://wicg.github.io/event-timing/)
- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/)
- [Layout Instability API](https://wicg.github.io/layout-instability/)

No informative reference to this spec from other specs.


## Permissions {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/permissions/)
- Latest published version: [https://www.w3.org/TR/permissions](https://www.w3.org/TR/permissions)
- Repository: [GitHub w3c/permissions](https://github.com/w3c/permissions)
- Shortname: permissions

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/permissions reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/permissions reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web NFC API](https://w3c.github.io/web-nfc/)
- [WebUSB API](https://wicg.github.io/webusb/)

No informative reference to this spec from other specs.


## Picture-in-Picture {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/picture-in-picture/) (23 September 2019)
- Repository: [GitHub w3c/picture-in-picture](https://github.com/w3c/picture-in-picture)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `HTMLVideoElement`, `Window`
- Missing references for links: 
     * [`https://w3c.github.io/remote-playback/`](https://w3c.github.io/remote-playback/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Pointer Events {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/pointerevents2/)
- Latest published version: [https://www.w3.org/TR/pointerevents2](https://www.w3.org/TR/pointerevents2)
- Repository: [GitHub w3c/pointerevents](https://github.com/w3c/pointerevents)
- Shortname: pointerevents2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/pointerevents2 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/pointerevents2 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Event Timing API](https://wicg.github.io/event-timing/)
- [PointerEvents - Level 2 - Extensions](https://w3c.github.io/pointerevents/extension.html)

Informative references to this spec from:

- [Input Device Capabilities](https://wicg.github.io/InputDeviceCapabilities/)


## Pointer Lock 2.0 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/pointerlock-2/)
- Latest published version: [https://www.w3.org/TR/pointerlock-2](https://www.w3.org/TR/pointerlock-2)
- Repository: [GitHub w3c/pointerlock](https://github.com/w3c/pointerlock)
- Shortname: pointerlock-2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/pointerlock-2 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/pointerlock-2 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [PointerEvents - Level 2 - Extensions](https://w3c.github.io/pointerevents/extension.html)

Informative references to this spec from:

- [Keyboard Lock](https://wicg.github.io/keyboard-lock/)


## PointerEvents - Level 2 - Extensions {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/pointerevents/extension.html) (Wed Oct 09 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `PointerEvent`, `PointerEventInit`
- Missing references for links: 
     * [`https://w3c.github.io/pointerevents/`](https://w3c.github.io/pointerevents/)
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Preload {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/preload/)
- Latest published version: [https://www.w3.org/TR/preload](https://www.w3.org/TR/preload)
- Repository: [GitHub w3c/preload](https://github.com/w3c/preload)
- Shortname: preload

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/preload reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/preload reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Presentation API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/presentation-api/)
- Latest published version: [https://www.w3.org/TR/presentation-api](https://www.w3.org/TR/presentation-api)
- Repository: [GitHub w3c/presentation-api](https://github.com/w3c/presentation-api)
- Shortname: presentation-api

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/presentation-api reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/presentation-api reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Proximity Sensor {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/proximity/)
- Latest published version: [https://www.w3.org/TR/proximity](https://www.w3.org/TR/proximity)
- Repository: [GitHub w3c/proximity](https://github.com/w3c/proximity)
- Shortname: proximity

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/proximity reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/proximity reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Push API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/push-api/)
- Latest published version: [https://www.w3.org/TR/push-api](https://www.w3.org/TR/push-api)
- Repository: [GitHub w3c/push-api](https://github.com/w3c/push-api)
- Shortname: push-api

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/push-api reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/push-api reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Referrer Policy {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/referrer-policy/)
- Latest published version: [https://www.w3.org/TR/referrer-policy](https://www.w3.org/TR/referrer-policy)
- Repository: [GitHub w3c/webappsec-referrer-policy](https://github.com/w3c/webappsec-referrer-policy)
- Shortname: referrer-policy

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/referrer-policy reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/referrer-policy reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)

No informative reference to this spec from other specs.


## Remote Playback API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/remote-playback/)
- Latest published version: [https://www.w3.org/TR/remote-playback](https://www.w3.org/TR/remote-playback)
- Repository: [GitHub w3c/remote-playback](https://github.com/w3c/remote-playback)
- Shortname: remote-playback

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/remote-playback reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/remote-playback reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Picture-in-Picture](https://w3c.github.io/picture-in-picture/)

No informative reference to this spec from other specs.


## Reporting API 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/reporting/) (23 September 2019)
- Repository: [GitHub w3c/reporting](https://github.com/w3c/reporting)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Date`, `Window`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
- Missing references for links: 
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/)
     * [`https://w3c.github.io/webdriver/webdriver-spec.html`](https://w3c.github.io/webdriver/webdriver-spec.html)
     * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Feature Policy](https://w3c.github.io/webappsec-feature-policy/)

No informative reference to this spec from other specs.


## Resize Observer {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/resize-observer/) (7 June 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMRectReadOnly`, `Window`
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/css-display-3/`](https://www.w3.org/TR/css-display-3/)
     * [`https://www.w3.org/TR/intersection-observer/`](https://www.w3.org/TR/intersection-observer/)
     * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Resource Timing Level 2 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/resource-timing-2/)
- Latest published version: [https://www.w3.org/TR/resource-timing-2](https://www.w3.org/TR/resource-timing-2)
- Repository: [GitHub w3c/resource-timing](https://github.com/w3c/resource-timing)
- Shortname: resource-timing-2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/resource-timing-2 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/resource-timing-2 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Element Timing API](https://wicg.github.io/element-timing/)
- [Layout Instability API](https://wicg.github.io/layout-instability/)

No informative reference to this spec from other specs.


## Scalable Vector Graphics (SVG) 2 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/SVG2/)
- Latest published version: [https://www.w3.org/TR/SVG2](https://www.w3.org/TR/SVG2)
- Repository: [GitHub w3c/svgwg](https://github.com/w3c/svgwg)
- Shortname: SVG2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/SVG2 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/SVG2 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compositing and Blending Level 2](https://drafts.fxtf.org/compositing-2/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [Element Timing API](https://wicg.github.io/element-timing/)
- [Filter Effects Module Level 2](https://drafts.fxtf.org/filter-effects-2/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [Resize Observer](https://drafts.csswg.org/resize-observer/)

No informative reference to this spec from other specs.


## Screen Capture {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/screen-capture/)
- Latest published version: [https://www.w3.org/TR/screen-capture](https://www.w3.org/TR/screen-capture)
- Repository: [GitHub w3c/mediacapture-screen-share](https://github.com/w3c/mediacapture-screen-share)
- Shortname: screen-capture

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/screen-capture reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/screen-capture reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Scroll-linked Animations {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/scroll-animations-1/) (18 September 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `AnimationTimeline`, `FillMode`, `Window`
- Missing references for links: 
     * [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/)
     * [`https://www.w3.org/TR/css3-animations/`](https://www.w3.org/TR/css3-animations/)
     * [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Secure Contexts {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/secure-contexts/)
- Latest published version: [https://www.w3.org/TR/secure-contexts](https://www.w3.org/TR/secure-contexts)
- Repository: [GitHub w3c/webappsec-secure-contexts](https://github.com/w3c/webappsec-secure-contexts)
- Shortname: secure-contexts

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/secure-contexts reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/secure-contexts reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Keyboard Map](https://wicg.github.io/keyboard-map/)
- [Media Capabilities](https://w3c.github.io/media-capabilities/)
- [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)

Informative references to this spec from:

- [WebUSB API](https://wicg.github.io/webusb/)


## Selection API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/selection-api/)
- Latest published version: [https://www.w3.org/TR/selection-api](https://www.w3.org/TR/selection-api)
- Repository: [GitHub w3c/selection-api](https://github.com/w3c/selection-api)
- Shortname: selection-api

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/selection-api reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/selection-api reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Selectors Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/selectors-3/)
- Latest published version: [https://www.w3.org/TR/selectors-3](https://www.w3.org/TR/selectors-3)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: selectors-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/selectors-3 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/selectors-3 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Selectors Level 4 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/selectors-4/)
- Latest published version: [https://www.w3.org/TR/selectors-4](https://www.w3.org/TR/selectors-4)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: selectors-4

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/selectors-4 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/selectors-4 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Conditional Rules Module Level 4](https://drafts.csswg.org/css-conditional-4/)
- [CSS Nesting Module](https://drafts.csswg.org/css-nesting-1/)
- [Picture-in-Picture](https://w3c.github.io/picture-in-picture/)
- [Scroll-linked Animations](https://drafts.csswg.org/scroll-animations-1/)

No informative reference to this spec from other specs.


## Server Timing {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/server-timing/)
- Latest published version: [https://www.w3.org/TR/server-timing](https://www.w3.org/TR/server-timing)
- Repository: [GitHub w3c/server-timing](https://github.com/w3c/server-timing)
- Shortname: server-timing

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/server-timing reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/server-timing reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Service Workers Nightly {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/ServiceWorker/) (4 October 2019)
- Repository: [GitHub w3c/ServiceWorker](https://github.com/w3c/ServiceWorker)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `MessagePort`, `Navigator`, `PostMessageOptions`, `VisibilityState`, `Window`, `WindowOrWorkerGlobalScope`, `WorkerGlobalScope`, `WorkerNavigator`, `WorkerType`
- Missing references for links: 
     * [`https://w3c.github.io/webappsec-referrer-policy/`](https://w3c.github.io/webappsec-referrer-policy/)
     * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/)
     * [`https://w3c.github.io/push-api/`](https://w3c.github.io/push-api/)
     * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/)
     * [`https://notifications.spec.whatwg.org/`](https://notifications.spec.whatwg.org/)
     * [`https://w3c.github.io/payment-handler/`](https://w3c.github.io/payment-handler/)
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [DOM Standard](https://dom.spec.whatwg.org/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [Notifications API Standard](https://notifications.spec.whatwg.org/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Console Standard](https://console.spec.whatwg.org/)
- [Cookie Store API](https://wicg.github.io/cookie-store/)
- [Media Capabilities](https://w3c.github.io/media-capabilities/)
- [Network Information API](https://wicg.github.io/netinfo/)
- [Reporting API 1](https://w3c.github.io/reporting/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [URL Standard](https://url.spec.whatwg.org/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)
- [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Informative references to this spec from:

- [Streams Standard](https://streams.spec.whatwg.org/)


## Storage Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://storage.spec.whatwg.org/) (18 February 2019)
- Repository: [GitHub whatwg/storage](https://github.com/whatwg/storage)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Streams Standard {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://streams.spec.whatwg.org/) (23 August 2019)
- Repository: [GitHub whatwg/streams](https://github.com/whatwg/streams)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Parser API](https://wicg.github.io/CSS-Parser-API/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)

No informative reference to this spec from other specs.


## Subresource Integrity {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/SRI/)
- Latest published version: [https://www.w3.org/TR/SRI](https://www.w3.org/TR/SRI)
- Repository: [GitHub w3c/webappsec-subresource-integrity](https://github.com/w3c/webappsec-subresource-integrity)
- Shortname: SRI

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/SRI reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/SRI reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## SVG Markers {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/svg-markers/)
- Latest published version: [https://www.w3.org/TR/svg-markers](https://www.w3.org/TR/svg-markers)
- Repository: [GitHub w3c/svgwg](https://github.com/w3c/svgwg)
- Shortname: svg-markers

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/svg-markers reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/svg-markers reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## SVG Strokes {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/svg-strokes/)
- Latest published version: [https://www.w3.org/TR/svg-strokes](https://www.w3.org/TR/svg-strokes)
- Repository: [GitHub w3c/svgwg](https://github.com/w3c/svgwg)
- Shortname: svg-strokes

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/svg-strokes reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/svg-strokes reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## The Screen Orientation API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/screen-orientation/)
- Latest published version: [https://www.w3.org/TR/screen-orientation](https://www.w3.org/TR/screen-orientation)
- Repository: [GitHub w3c/screen-orientation](https://github.com/w3c/screen-orientation)
- Shortname: screen-orientation

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/screen-orientation reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/screen-orientation reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Touch Events {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/touch-events/)
- Latest published version: [https://www.w3.org/TR/touch-events](https://www.w3.org/TR/touch-events)
- Repository: [GitHub w3c/touch-events](https://github.com/w3c/touch-events)
- Shortname: touch-events

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/touch-events reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/touch-events reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Event Timing API](https://wicg.github.io/event-timing/)
- [Input Device Capabilities](https://wicg.github.io/InputDeviceCapabilities/)

No informative reference to this spec from other specs.


## UI Events {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/uievents/)
- Latest published version: [https://www.w3.org/TR/uievents](https://www.w3.org/TR/uievents)
- Repository: [GitHub w3c/uievents](https://github.com/w3c/uievents)
- Shortname: uievents

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/uievents reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/uievents reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [DOM Standard](https://dom.spec.whatwg.org/)
- [Event Timing API](https://wicg.github.io/event-timing/)
- [Input Device Capabilities](https://wicg.github.io/InputDeviceCapabilities/)
- [Keyboard Lock](https://wicg.github.io/keyboard-lock/)
- [Keyboard Map](https://wicg.github.io/keyboard-map/)

No informative reference to this spec from other specs.


## UI Events KeyboardEvent code Values {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/uievents-code/)
- Latest published version: [https://www.w3.org/TR/uievents-code](https://www.w3.org/TR/uievents-code)
- Repository: [GitHub w3c/uievents-code](https://github.com/w3c/uievents-code)
- Shortname: uievents-code

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/uievents-code reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/uievents-code reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Keyboard Lock](https://wicg.github.io/keyboard-lock/)
- [Keyboard Map](https://wicg.github.io/keyboard-map/)

No informative reference to this spec from other specs.


## UI Events KeyboardEvent key Values {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/uievents-key/)
- Latest published version: [https://www.w3.org/TR/uievents-key](https://www.w3.org/TR/uievents-key)
- Repository: [GitHub w3c/uievents-key](https://github.com/w3c/uievents-key)
- Shortname: uievents-key

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/uievents-key reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/uievents-key reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Keyboard Map](https://wicg.github.io/keyboard-map/)

No informative reference to this spec from other specs.


## URL Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://url.spec.whatwg.org/) (24 September 2019)
- Repository: [GitHub whatwg/url](https://github.com/whatwg/url)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Cookie Store API](https://wicg.github.io/cookie-store/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [DOM Standard](https://dom.spec.whatwg.org/)
- [Element Timing API](https://wicg.github.io/element-timing/)
- [Feature Policy](https://w3c.github.io/webappsec-feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [Media Session Standard](https://w3c.github.io/mediasession/)
- [Notifications API Standard](https://notifications.spec.whatwg.org/)
- [Reporting API 1](https://w3c.github.io/reporting/)
- [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [Web NFC API](https://w3c.github.io/web-nfc/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

No informative reference to this spec from other specs.


## User Timing Level 2 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/user-timing-2/)
- Latest published version: [https://www.w3.org/TR/user-timing-2](https://www.w3.org/TR/user-timing-2)
- Repository: [GitHub w3c/user-timing](https://github.com/w3c/user-timing)
- Shortname: user-timing-2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/user-timing-2 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/user-timing-2 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Vibration API (Second Edition) {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/vibration/)
- Latest published version: [https://www.w3.org/TR/vibration](https://www.w3.org/TR/vibration)
- Repository: [GitHub w3c/vibration](https://github.com/w3c/vibration)
- Shortname: vibration

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/vibration reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/vibration reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Wake Lock API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/wake-lock/)
- Latest published version: [https://www.w3.org/TR/wake-lock](https://www.w3.org/TR/wake-lock)
- Repository: [GitHub w3c/wake-lock](https://github.com/w3c/wake-lock)
- Shortname: wake-lock

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/wake-lock reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/wake-lock reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Web Animations {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/web-animations-1/)
- Latest published version: [https://www.w3.org/TR/web-animations-1](https://www.w3.org/TR/web-animations-1)
- Repository: [GitHub w3c/web-animations](https://github.com/w3c/web-animations)
- Shortname: web-animations-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/web-animations-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/web-animations-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)
- [Scroll-linked Animations](https://drafts.csswg.org/scroll-animations-1/)

No informative reference to this spec from other specs.


## Web App Manifest {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/appmanifest/)
- Latest published version: [https://www.w3.org/TR/appmanifest](https://www.w3.org/TR/appmanifest)
- Repository: [GitHub w3c/manifest](https://github.com/w3c/manifest)
- Shortname: appmanifest

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/appmanifest reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/appmanifest reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Media Session Standard](https://w3c.github.io/mediasession/)

No informative reference to this spec from other specs.


## Web Audio API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/webaudio/)
- Latest published version: [https://www.w3.org/TR/webaudio](https://www.w3.org/TR/webaudio)
- Repository: [GitHub webaudio/web-audio-api](https://github.com/webaudio/web-audio-api)
- Shortname: webaudio

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/webaudio reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/webaudio reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Web Authentication:An API for accessing Public Key Credentials Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/webauthn-1/)
- Latest published version: [https://www.w3.org/TR/webauthn-1](https://www.w3.org/TR/webauthn-1)
- Repository: [GitHub w3c/webauthn](https://github.com/w3c/webauthn)
- Shortname: webauthn-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/webauthn-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/webauthn-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Web Background Synchronization {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/BackgroundSync/spec/) (7 November 2018)
- Repository: [GitHub wicg/BackgroundSync](https://github.com/wicg/BackgroundSync)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`
- Missing references for WebIDL names: 
     * `ServiceWorkerRegistration` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
     * `Worker` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
     * `ServiceWorkerGlobalScope` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
     * `ExtendableEvent` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
     * `ServiceWorker` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
     * `ExtendableEventInit` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
- Missing references for links: 
     * [`https://w3c.github.io/webappsec/specs/powerfulfeatures/`](https://w3c.github.io/webappsec/specs/powerfulfeatures/)
     * [`https://notifications.spec.whatwg.org/`](https://notifications.spec.whatwg.org/)
     * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Web Bluetooth {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://webbluetoothcg.github.io/web-bluetooth/) (30 September 2019)
- Repository: [GitHub webbluetoothcg/web-bluetooth](https://github.com/webbluetoothcg/web-bluetooth)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Navigator`, `PermissionDescriptor`, `PermissionStatus`, `Window`
- Missing references for links: 
     * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/)
     * [`https://w3c.github.io/fingerprinting-guidance/`](https://w3c.github.io/fingerprinting-guidance/)
     * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Web Cryptography API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/WebCryptoAPI/)
- Latest published version: [https://www.w3.org/TR/WebCryptoAPI](https://www.w3.org/TR/WebCryptoAPI)
- Repository: [GitHub w3c/webcrypto](https://github.com/w3c/webcrypto)
- Shortname: WebCryptoAPI

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/WebCryptoAPI reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/WebCryptoAPI reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Web MIDI API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/webmidi/)
- Latest published version: [https://www.w3.org/TR/webmidi](https://www.w3.org/TR/webmidi)
- Repository: [GitHub webaudio/web-midi-api](https://github.com/webaudio/web-midi-api)
- Shortname: webmidi

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/webmidi reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/webmidi reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Web NFC API {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/web-nfc/) (Wed Oct 09 2019)
- Repository: [GitHub w3c/web-nfc](https://github.com/w3c/web-nfc)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Unknown WebIDL names used: `EventHandler`, `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Web Share API - Level 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/web-share/) (Wed Oct 09 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Navigator`
- Missing references for links: 
     * [`https://www.w3.org/TR/web-intents/`](https://www.w3.org/TR/web-intents/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Web Speech API {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/speech-api/) (30 September 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## WebAssembly JavaScript Interface {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/wasm-js-api-1/)
- Latest published version: [https://www.w3.org/TR/wasm-js-api-1](https://www.w3.org/TR/wasm-js-api-1)
- Repository: [GitHub webassembly/spec](https://github.com/webassembly/spec)
- Shortname: wasm-js-api-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/wasm-js-api-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/wasm-js-api-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## WebAssembly Web API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/wasm-web-api-1/)
- Latest published version: [https://www.w3.org/TR/wasm-web-api-1](https://www.w3.org/TR/wasm-web-api-1)
- Repository: [GitHub webassembly/spec](https://github.com/webassembly/spec)
- Shortname: wasm-web-api-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/wasm-web-api-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/wasm-web-api-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## WebDriver {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/webdriver1/)
- Latest published version: [https://www.w3.org/TR/webdriver1](https://www.w3.org/TR/webdriver1)
- Repository: [GitHub w3c/webdriver](https://github.com/w3c/webdriver)
- Shortname: webdriver1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/webdriver1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/webdriver1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Reporting API 1](https://w3c.github.io/reporting/)

No informative reference to this spec from other specs.


## WebGL 2.0 Specification {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.khronos.org/registry/webgl/specs/latest/2.0/) (Wed Oct 09 2019)
- Repository: [GitHub KhronosGroup/WebGL](https://github.com/KhronosGroup/WebGL)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## WebGL Specification {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.khronos.org/registry/webgl/specs/latest/1.0/) (Wed Oct 09 2019)
- Repository: [GitHub KhronosGroup/WebGL](https://github.com/KhronosGroup/WebGL)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `HTMLCanvasElement`, `HTMLImageElement`, `HTMLVideoElement`, `ImageBitmap`, `ImageData`, `OffscreenCanvas`, `Window`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/)

No informative reference to this spec from other specs.


## WebIDL-1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/WebIDL-1/)
- Latest published version: [https://www.w3.org/TR/WebIDL-1](https://www.w3.org/TR/WebIDL-1)
- Shortname: WebIDL-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/WebIDL-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/WebIDL-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## WebRTC 1.0: Real-time Communication Between Browsers {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/webrtc/)
- Latest published version: [https://www.w3.org/TR/webrtc](https://www.w3.org/TR/webrtc)
- Repository: [GitHub w3c/webrtc-pc](https://github.com/w3c/webrtc-pc)
- Shortname: webrtc

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/webrtc reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/webrtc reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## WebRTC DSCP Control API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/webrtc-dscp/)
- Latest published version: [https://www.w3.org/TR/webrtc-dscp](https://www.w3.org/TR/webrtc-dscp)
- Repository: [GitHub w3c/webrtc-dscp-exp](https://github.com/w3c/webrtc-dscp-exp)
- Shortname: webrtc-dscp

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/webrtc-dscp reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/webrtc-dscp reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## WebUSB API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/webusb/) (8 October 2019)
- Repository: [GitHub wicg/webusb](https://github.com/wicg/webusb)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DedicatedWorker`, `EventHandler`, `Navigator`, `PermissionDescriptor`, `PermissionStatus`, `SharedWorker`, `Window`, `WorkerNavigator`
- Missing references for links: 
     * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## WebVTT: The Web Video Text Tracks Format {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/webvtt1/)
- Latest published version: [https://www.w3.org/TR/webvtt1](https://www.w3.org/TR/webvtt1)
- Repository: [GitHub w3c/webvtt](https://github.com/w3c/webvtt)
- Shortname: webvtt1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/webvtt1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/webvtt1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## WebXR Augmented Reality Module - Level 1 {data-spec=true data-anomaly=true data-noNormativeRefs=true data-noRefToWebIDL=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://immersive-web.github.io/webxr-ar-module/) (7 October 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- No normative references found
- Spec uses WebIDL but does not reference it normatively
- Unknown WebIDL names used: `XRSession`
- Missing references for links: 
     * [`https://www.w3.org/TR/webxr/`](https://www.w3.org/TR/webxr/)
     * [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## WebXR Device API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/webxr/)
- Latest published version: [https://www.w3.org/TR/webxr](https://www.w3.org/TR/webxr)
- Repository: [GitHub immersive-web/webxr](https://github.com/immersive-web/webxr)
- Shortname: webxr

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/webxr reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/webxr reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## WebXR Gamepads Module - Level 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://immersive-web.github.io/webxr-gamepads-module/) (7 October 2019)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Gamepad`, `XRInputSource`
- Missing references for links: 
     * [`https://www.w3.org/TR/webxr/`](https://www.w3.org/TR/webxr/)
     * [`https://w3c.github.io/gamepad/`](https://w3c.github.io/gamepad/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Worklets Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/worklets-1/)
- Latest published version: [https://www.w3.org/TR/worklets-1](https://www.w3.org/TR/worklets-1)
- Shortname: worklets-1

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`FetchError: invalid json response body at https://api.w3.org/specifications/worklets-1 reason: Unexpected token < in JSON at position 0 FetchError: invalid json response body at https://api.w3.org/specifications/worklets-1 reason: Unexpected token < in JSON at position 0
    at /home/runner/work/reffy-reports/reffy/node_modules/node-fetch/lib/index.js:272:32
    at process._tickCallback (internal/process/next_tick.js:68:7)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Feature Policy](https://w3c.github.io/webappsec-feature-policy/)

No informative reference to this spec from other specs.


## XMLHttpRequest Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://xhr.spec.whatwg.org/) (24 September 2019)
- Repository: [GitHub whatwg/xhr](https://github.com/whatwg/xhr)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Blob`, `DedicatedWorker`, `EventHandler`, `File`, `HTMLFormElement`, `SharedWorker`, `Window`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers Nightly](https://w3c.github.io/ServiceWorker/)
- Missing references for links: 
     * [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Fetch Standard](https://fetch.spec.whatwg.org/)

No informative reference to this spec from other specs.




