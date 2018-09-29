% Specifications that define WebIDL content (W3C perspective)
% Reffy
% September 29, 2018

## "MediaStream Image Capture" {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-image-capture-20170621/) (21 June 2017)
- Editor's Draft: [https://w3c.github.io/mediacapture-image/](https://w3c.github.io/mediacapture-image/)
- Latest published version: [https://www.w3.org/TR/image-capture/](https://www.w3.org/TR/image-capture/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-image-capture-20170621/)
- Repository: [GitHub w3c/mediacapture-image](https://github.com/w3c/mediacapture-image)
- Shortname: image-capture

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `ImageBitmap`
- Missing references for WebIDL names: 
     * `MediaStreamTrack` defined in [Media Capture and Streams](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)
     * `MediaTrackSupportedConstraints` defined in [Media Capture and Streams](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)
     * `MediaTrackCapabilities` defined in [Media Capture and Streams](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)
     * `MediaTrackConstraintSet` defined in [Media Capture and Streams](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)
     * `ConstrainDOMString` defined in [Media Capture and Streams](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)
     * `ConstrainDouble` defined in [Media Capture and Streams](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)
     * `ConstrainBoolean` defined in [Media Capture and Streams](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)
     * `MediaTrackSettings` defined in [Media Capture and Streams](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/), related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
     * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/), related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)

Informative references to this spec from:

- [Media Capture and Streams](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)


## Accelerated Shape Detection in Images {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/shape-detection-api/) (14 September 2018)
- Repository: [GitHub wicg/shape-detection-api](https://github.com/wicg/shape-detection-api)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMRectReadOnly`, `ImageBitmapSource`, `Window`
- Missing references for WebIDL names: 
     * `Point2D` defined in ["MediaStream Image Capture"](https://www.w3.org/TR/2017/WD-image-capture-20170621/)
- Missing references for links: 
     * [`https://w3c.github.io/mediacapture-image/`](https://w3c.github.io/mediacapture-image/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)


## Accelerometer {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-accelerometer-20180320/) (20 March 2018)
- Editor's Draft: [https://w3c.github.io/accelerometer/](https://w3c.github.io/accelerometer/)
- Latest published version: [https://www.w3.org/TR/accelerometer/](https://www.w3.org/TR/accelerometer/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-accelerometer-20180320/)
- Repository: [GitHub w3c/accelerometer](https://github.com/w3c/accelerometer)
- Shortname: accelerometer

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
- Missing references for links: 
     * [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/)
     * [`https://w3c.github.io/sensors/usecases.html`](https://w3c.github.io/sensors/usecases.html)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/screen-orientation/`](https://www.w3.org/TR/screen-orientation/), related reference "SCREEN-ORIENTATION" uses URL [`https://w3c.github.io/screen-orientation/`](https://w3c.github.io/screen-orientation/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Gyroscope](https://www.w3.org/TR/2018/CR-gyroscope-20180320/)
- [Magnetometer](https://www.w3.org/TR/2018/CR-magnetometer-20180320/)
- [Orientation Sensor](https://www.w3.org/TR/2018/CR-orientation-sensor-20180320/)

Informative references to this spec from:

- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)


## Accessible Rich Internet Applications (WAI-ARIA) 1.2 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-wai-aria-1.2-20180719/) (19 July 2018)
- Editor's Draft: [https://w3c.github.io/aria/](https://w3c.github.io/aria/)
- Latest published version: [https://www.w3.org/TR/wai-aria-1.2/](https://www.w3.org/TR/wai-aria-1.2/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-wai-aria-1.2-20180719/)
- Repository: [GitHub w3c/aria](https://github.com/w3c/aria)
- Shortname: wai-aria-1.2

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Missing references for links: 
     * [`https://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/`](https://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/)
     * [`https://www.w3.org/TR/wai-aria-practices/`](https://www.w3.org/TR/wai-aria-practices/)
     * [`https://www.w3.org/TR/di-gloss/`](https://www.w3.org/TR/di-gloss/)
     * [`https://www.w3.org/TR/xhtml-role/`](https://www.w3.org/TR/xhtml-role/)
     * [`https://www.w3.org/TR/2002/REC-xhtml1-20020801/`](https://www.w3.org/TR/2002/REC-xhtml1-20020801/)
     * [`https://www.w3.org/TR/xml/`](https://www.w3.org/TR/xml/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/), related reference "DOM4" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
     * [`https://www.w3.org/TR/2004/REC-owl-features-20040210/`](https://www.w3.org/TR/2004/REC-owl-features-20040210/), related reference "OWL-FEATURES" uses URL [`https://www.w3.org/TR/owl-features/`](https://www.w3.org/TR/owl-features/)
     * [`https://www.w3.org/TR/2002/REC-UAAG10-20021217/`](https://www.w3.org/TR/2002/REC-UAAG10-20021217/), related reference "UAAG10" uses URL [`https://www.w3.org/TR/UAAG10/`](https://www.w3.org/TR/UAAG10/)
     * [`https://www.w3.org/TR/2014/REC-rdf-schema-20140225/`](https://www.w3.org/TR/2014/REC-rdf-schema-20140225/), related reference "RDF-SCHEMA" uses URL [`https://www.w3.org/TR/rdf-schema/`](https://www.w3.org/TR/rdf-schema/)
     * [`https://www.w3.org/TR/2007/REC-xforms-20071029/`](https://www.w3.org/TR/2007/REC-xforms-20071029/), related reference "XFORMS10" uses URL [`https://www.w3.org/TR/xforms/`](https://www.w3.org/TR/xforms/)
     * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/), related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
     * [`https://www.w3.org/TR/2006/REC-xforms-20060314/`](https://www.w3.org/TR/2006/REC-xforms-20060314/), related reference "XFORMS10" uses URL [`https://www.w3.org/TR/xforms/`](https://www.w3.org/TR/xforms/)
     * [`https://www.w3.org/TR/2006/REC-xml-names-20060816/`](https://www.w3.org/TR/2006/REC-xml-names-20060816/), related reference "XML-NAMES" uses URL [`https://www.w3.org/TR/xml-names/`](https://www.w3.org/TR/xml-names/)
     * [`https://www.w3.org/TR/html52/`](https://www.w3.org/TR/html52/), related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
     * [`https://www.w3.org/TR/dom41/`](https://www.w3.org/TR/dom41/), related reference "DOM4" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Ambient Light Sensor {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-ambient-light-20180320/) (20 March 2018)
- Editor's Draft: [https://w3c.github.io/ambient-light/](https://w3c.github.io/ambient-light/)
- Latest published version: [https://www.w3.org/TR/ambient-light/](https://www.w3.org/TR/ambient-light/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-ambient-light-20180320/)
- Repository: [GitHub w3c/ambient-light](https://github.com/w3c/ambient-light)
- Shortname: ambient-light

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)


## Audio Output Devices API {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/CR-audio-output-20171003/) (03 October 2017)
- Editor's Draft: [https://w3c.github.io/mediacapture-output/](https://w3c.github.io/mediacapture-output/)
- Latest published version: [https://www.w3.org/TR/audio-output/](https://www.w3.org/TR/audio-output/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-audio-output-20171003/)
- Repository: [GitHub w3c/mediacapture-output](https://github.com/w3c/mediacapture-output)
- Shortname: audio-output

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `HTMLMediaElement`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)


## Background Fetch {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/background-fetch/) (14 September 2018)
- Repository: [GitHub wicg/background-fetch](https://github.com/wicg/background-fetch)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`
- Missing references for WebIDL names: 
     * `ImageResource` defined in [Web App Manifest](https://www.w3.org/TR/2018/WD-appmanifest-20180906/)
- Missing references for links: 
     * [`https://storage.spec.whatwg.org/`](https://storage.spec.whatwg.org/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/), related reference "SERVICE-WORKERS-2" uses URL [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/)
     * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/), related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Battery Status API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2016/CR-battery-status-20160707/) (07 July 2016)
- Editor's Draft: [https://w3c.github.io/battery/](https://w3c.github.io/battery/)
- Latest published version: [http://www.w3.org/TR/battery-status/](http://www.w3.org/TR/battery-status/)
- Latest published status: [Candidate Recommendation](http://www.w3.org/TR/2016/CR-battery-status-20160707/)
- Repository: [GitHub w3c/battery](https://github.com/w3c/battery)
- Shortname: battery-status

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Navigator`
- Missing references for WebIDL names: 
     * `EventTarget` defined in [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Media Capabilities](https://wicg.github.io/media-capabilities/)


## Beacon {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/CR-beacon-20170413/) (13 April 2017)
- Editor's Draft: [https://w3c.github.io/beacon/](https://w3c.github.io/beacon/)
- Latest published version: [https://www.w3.org/TR/beacon/](https://www.w3.org/TR/beacon/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-beacon-20170413/)
- Repository: [GitHub w3c/beacon](https://github.com/w3c/beacon)
- Shortname: beacon

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Navigator`
- Missing references for links: 
     * [`https://xhr.spec.whatwg.org/`](https://xhr.spec.whatwg.org/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/), related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Resource Timing Level 2](https://www.w3.org/TR/2018/WD-resource-timing-2-20180518/)

Informative references to this spec from:

- [Content Security Policy Level 3](https://www.w3.org/TR/2016/WD-CSP3-20160913/)


## Box Tree API Level 1 {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.css-houdini.org/box-tree-api/) (14 August 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification {data-spec=true data-anomaly=true data-noNormativeRefs=true data-noCssDefinitions=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2011/REC-CSS2-20110607/) (to new work)
- Editor's Draft: [http://dev.w3.org/csswg/css2/](http://dev.w3.org/csswg/css2/)
- Latest published version: [http://www.w3.org/TR/CSS2/](http://www.w3.org/TR/CSS2/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2011/REC-CSS2-20110607/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: CSS2

### Potential issue(s) {.anomalies}

- No normative references found
- No CSS definitions found

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compositing and Blending Level 1](http://www.w3.org/TR/2015/CR-compositing-1-20150113/)
- [Compositing and Blending Level 2](https://drafts.fxtf.org/compositing-2/)
- [CSS Animations Level 1](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- [CSS Backgrounds and Borders Module Level 3](https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/)
- [CSS Backgrounds and Borders Module Level 4](https://drafts.csswg.org/css-backgrounds-4/)
- [CSS Basic User Interface Module Level 3 (CSS3 UI)](https://www.w3.org/TR/2018/REC-css-ui-3-20180621/)
- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/2018/WD-css-align-3-20180830/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Color Module Level 3](https://www.w3.org/TR/2018/REC-css-color-3-20180619/)
- [CSS Color Module Level 4](http://www.w3.org/TR/2016/WD-css-color-4-20160705/)
- [CSS Conditional Rules Module Level 3](http://www.w3.org/TR/2013/CR-css3-conditional-20130404/)
- [CSS Containment Module Level 1](https://www.w3.org/TR/2018/CR-css-contain-1-20180524/)
- [CSS Counter Styles Level 3](https://www.w3.org/TR/2017/CR-css-counter-styles-3-20171214/)
- [CSS Custom Properties for Cascading Variables Module Level 1](http://www.w3.org/TR/2015/CR-css-variables-1-20151203/)
- [CSS Device Adaptation Module Level 1](http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Exclusions Module Level 1](https://drafts.csswg.org/css-exclusions-1/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/)
- [CSS Fonts Module Level 4](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)
- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)
- [CSS Generated Content Module Level 3](http://www.w3.org/TR/2016/WD-css-content-3-20160602/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Image Values and Replaced Content Module Level 3](http://www.w3.org/TR/2012/CR-css3-images-20120417/)
- [CSS Image Values and Replaced Content Module Level 4](https://www.w3.org/TR/2017/WD-css-images-4-20170413/)
- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Logical Properties and Values Level 1](https://www.w3.org/TR/2018/WD-css-logical-1-20180827/)
- [CSS Mobile Text Size Adjustment Module Level 1](https://drafts.csswg.org/css-size-adjust-1/)
- [CSS Multi-column Layout Module Level 1](https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Overflow Module Level 4](https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/)
- [CSS Paged Media Module Level 3](http://www.w3.org/TR/2013/WD-css3-page-20130314/)
- [CSS Positioned Layout Module Level 3](http://www.w3.org/TR/2016/WD-css-position-3-20160517/)
- [CSS Pseudo-Elements Module Level 4](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- [CSS Regions Module Level 1](http://www.w3.org/TR/2014/WD-css-regions-1-20141009/)
- [CSS Rhythmic Sizing](https://www.w3.org/TR/2017/WD-css-rhythm-1-20170302/)
- [CSS Round Display Level 1](https://www.w3.org/TR/2016/WD-css-round-display-1-20161222/)
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/2018/CR-css-scroll-snap-1-20180814/)
- [CSS Scrollbars Module Level 1](https://drafts.csswg.org/css-scrollbars-1/)
- [CSS Style Attributes](http://www.w3.org/TR/2013/REC-css-style-attr-20131107/)
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/2018/CR-css-text-decor-3-20180703/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Transforms Module Level 1](https://www.w3.org/TR/2017/WD-css-transforms-1-20171130/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [CSS TV Profile 1.0](https://drafts.csswg.org/css-tv/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [CSSOM View Module](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)
- [Filter Effects Module Level 1](http://www.w3.org/TR/2014/WD-filter-effects-1-20141125/)
- [Filter Effects Module Level 2](https://drafts.fxtf.org/filter-effects-2/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [Media Queries](http://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/)
- [Media Queries Level 4](https://www.w3.org/TR/2017/CR-mediaqueries-4-20170905/)
- [Motion Path Module Level 1](https://www.w3.org/TR/2017/WD-motion-1-20170711/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [Selectors Level 3](https://www.w3.org/TR/2018/PR-selectors-3-20180911/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)
- [User Interface Security and the Visibility API](http://www.w3.org/TR/2016/WD-UISecurity-20160607/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)

Informative references to this spec from:

- [CSS Transitions](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)
- [Pointer Events](https://www.w3.org/TR/2018/CR-pointerevents2-20180522/)
- [Selectors API Level 1](http://www.w3.org/TR/2013/REC-selectors-api-20130221/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)


## Cascading Style Sheets Level 2 Revision 2 (CSS 2.2) Specification {data-spec=true data-anomaly=true data-noNormativeRefs=true data-noCssDefinitions=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2016/WD-CSS22-20160412/) (12 April 2016)
- Editor's Draft: [https://drafts.csswg.org/css2/](https://drafts.csswg.org/css2/)
- Latest published version: [http://www.w3.org/TR/CSS22/](http://www.w3.org/TR/CSS22/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-CSS22-20160412/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: CSS22

### Potential issue(s) {.anomalies}

- No normative references found
- No CSS definitions found

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Content Security Policy Level 3](https://www.w3.org/TR/2016/WD-CSP3-20160913/)
- [CSS Animations Level 1](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/)
- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Multi-column Layout Module Level 1](https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/)
- [CSS Overflow Module Level 4](https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/)
- [CSS Rhythmic Sizing](https://www.w3.org/TR/2017/WD-css-rhythm-1-20170302/)
- [CSS Table Module Level 3](https://www.w3.org/TR/2017/WD-css-tables-3-20170307/)
- [CSS Transforms Module Level 1](https://www.w3.org/TR/2017/WD-css-transforms-1-20171130/)
- [CSS Transitions](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [Intersection Observer](https://www.w3.org/TR/2017/WD-intersection-observer-20170914/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

Informative references to this spec from:

- [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)


## Clipboard API and events {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-clipboard-apis-20170929/) (29 September 2017)
- Editor's Draft: [https://w3c.github.io/clipboard-apis/](https://w3c.github.io/clipboard-apis/)
- Latest published version: [https://www.w3.org/TR/clipboard-apis/](https://www.w3.org/TR/clipboard-apis/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-clipboard-apis-20170929/)
- Repository: [GitHub w3c/clipboard-apis](https://github.com/w3c/clipboard-apis)
- Shortname: clipboard-apis

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DataTransfer`, `Navigator`, `Window`
- Missing references for links: 
     * [`https://w3c.github.io/editing/contentEditable.html`](https://w3c.github.io/editing/contentEditable.html)
- Inconsistent references for links: 
     * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/), related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)


## Compatibility Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://compat.spec.whatwg.org/) (27 August 2018)
- Repository: [GitHub whatwg/compat](https://github.com/whatwg/compat)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `HTMLBodyElement`, `Window`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Pointer Events](https://www.w3.org/TR/2018/CR-pointerevents2-20180522/)

No informative reference to this spec from other specs.


## Compositing and Blending Level 1 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2015/CR-compositing-1-20150113/) (13 January 2015)
- Editor's Draft: [https://drafts.fxtf.org/compositing-1/](https://drafts.fxtf.org/compositing-1/)
- Latest published version: [http://www.w3.org/TR/compositing-1/](http://www.w3.org/TR/compositing-1/)
- Latest published status: [Candidate Recommendation](http://www.w3.org/TR/2015/CR-compositing-1-20150113/)
- Repository: [GitHub w3c/fxtf-drafts](https://github.com/w3c/fxtf-drafts)
- Shortname: compositing-1

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/), related reference "CSS3BG" uses URL [`http://www.w3.org/TR/2012/CR-css3-background-20120724/`](http://www.w3.org/TR/2012/CR-css3-background-20120724/)
     * [`https://www.w3.org/TR/2003/REC-SVG11-20030114/`](https://www.w3.org/TR/2003/REC-SVG11-20030114/), related reference "SVG11" uses URL [`http://www.w3.org/TR/SVG11/`](http://www.w3.org/TR/SVG11/)
     * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/), related reference "CSS3COLOR" uses URL [`http://www.w3.org/TR/2011/REC-css3-color-20110607`](http://www.w3.org/TR/2011/REC-css3-color-20110607)
     * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/), related reference "SVG11" uses URL [`http://www.w3.org/TR/SVG11/`](http://www.w3.org/TR/SVG11/)
     * [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/), related reference "2dcontext2" uses URL [`http://www.w3.org/TR/2dcontext2/`](http://www.w3.org/TR/2dcontext2/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Table Module Level 3](https://www.w3.org/TR/2017/WD-css-tables-3-20170307/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [Filter Effects Module Level 1](http://www.w3.org/TR/2014/WD-filter-effects-1-20141125/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)

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

- Crawled version: [Living Standard](https://console.spec.whatwg.org/) (21 July 2018)
- Repository: [GitHub whatwg/console](https://github.com/whatwg/console)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/) or [Web Workers](http://www.w3.org/TR/2015/WD-workers-20150924/)
     * `Worklet` defined in [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/) or [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/) or [Worklets Level 1](http://www.w3.org/TR/2016/WD-worklets-1-20160607/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Worklets Level 1](http://www.w3.org/TR/2016/WD-worklets-1-20160607/)

No informative reference to this spec from other specs.


## Content Security Policy Level 3 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2016/WD-CSP3-20160913/) (13 September 2016)
- Editor's Draft: [https://w3c.github.io/webappsec-csp/](https://w3c.github.io/webappsec-csp/)
- Latest published version: [https://www.w3.org/TR/CSP3/](https://www.w3.org/TR/CSP3/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2016/WD-CSP3-20160913/)
- Repository: [GitHub w3c/webappsec-csp](https://github.com/w3c/webappsec-csp)
- Shortname: CSP3

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Missing references for links: 
     * [`https://w3c.github.io/reporting/`](https://w3c.github.io/reporting/)
     * [`https://www.w3.org/TR/cssom/`](https://www.w3.org/TR/cssom/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Content Security Policy: Embedded Enforcement](https://www.w3.org/TR/2016/WD-csp-embedded-enforcement-20160909/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Credential Management Level 1](https://www.w3.org/TR/2017/WD-credential-management-1-20170804/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [Mixed Content](https://www.w3.org/TR/2016/CR-mixed-content-20160802/)
- [Preload](https://www.w3.org/TR/2017/CR-preload-20171026/)
- [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/)
- [Web App Manifest](https://www.w3.org/TR/2018/WD-appmanifest-20180906/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)

Informative references to this spec from:

- [Reporting API 1](https://w3c.github.io/reporting/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)


## Content Security Policy: Embedded Enforcement {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2016/WD-csp-embedded-enforcement-20160909/) (9 September 2016)
- Editor's Draft: [https://w3c.github.io/webappsec-csp/embedded/](https://w3c.github.io/webappsec-csp/embedded/)
- Latest published version: [https://www.w3.org/TR/csp-embedded-enforcement/](https://www.w3.org/TR/csp-embedded-enforcement/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2016/WD-csp-embedded-enforcement-20160909/)
- Repository: [GitHub w3c/webappsec-csp](https://github.com/w3c/webappsec-csp)
- Shortname: csp-embedded-enforcement

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Unknown WebIDL names used: `HTMLIFrameElement`
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/), related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## ContentEditable {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/editing/contentEditable.html) (September 29, 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Cookie Store API {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/cookie-store/) (12 September 2018)
- Repository: [GitHub wicg/cookie-store](https://github.com/wicg/cookie-store)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Cooperative Scheduling of Background Tasks {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/PR-requestidlecallback-20171010/) (10 October 2017)
- Editor's Draft: [https://w3c.github.io/requestidlecallback/](https://w3c.github.io/requestidlecallback/)
- Latest published version: [https://www.w3.org/TR/requestidlecallback/](https://www.w3.org/TR/requestidlecallback/)
- Latest published status: [Proposed Recommendation](https://www.w3.org/TR/2017/PR-requestidlecallback-20171010/)
- Repository: [GitHub w3c/requestidlecallback](https://github.com/w3c/requestidlecallback)
- Shortname: requestidlecallback

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CORS and RFC1918 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-missingWebIdlRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/cors-rfc1918/) (8 August 2017)
- Repository: [GitHub wicg/cors-rfc1918](https://github.com/wicg/cors-rfc1918)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Missing references for WebIDL names: 
     * `Document` defined in [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/), related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Credential Management Level 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-credential-management-1-20170804/) (4 August 2017)
- Editor's Draft: [https://w3c.github.io/webappsec-credential-management/](https://w3c.github.io/webappsec-credential-management/)
- Latest published version: [https://www.w3.org/TR/credential-management-1/](https://www.w3.org/TR/credential-management-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-credential-management-1-20170804/)
- Repository: [GitHub w3c/webappsec-credential-management](https://github.com/w3c/webappsec-credential-management)
- Shortname: credential-management-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `HTMLFormElement`, `Navigator`, `Window`
- Missing references for links: 
     * [`https://w3c.github.io/webappsec/usecases/credentialmanagement/`](https://w3c.github.io/webappsec/usecases/credentialmanagement/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/), related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Web Authentication: An API for accessing Public Key Credentials Level 1](https://www.w3.org/TR/2018/CR-webauthn-20180807/)

Informative references to this spec from:

- [Secure Contexts](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/)


## CSS Animation Worklet API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/animation-worklet/) (13 August 2018)
- Repository: [GitHub wicg/animation-worklet](https://github.com/wicg/animation-worklet)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `AnimationEffect`
- Missing references for links: 
     * [`https://w3c.github.io/html/infrastructure.html`](https://w3c.github.io/html/infrastructure.html)
     * [`https://w3c.github.io/web-animations/level-2/`](https://w3c.github.io/web-animations/level-2/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/), related reference "WEB-ANIMATIONS-1" uses URL [`https://www.w3.org/TR/web-animations-1/`](https://www.w3.org/TR/web-animations-1/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Animations Level 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/) (30 November 2017)
- Editor's Draft: [https://drafts.csswg.org/css-animations/](https://drafts.csswg.org/css-animations/)
- Latest published version: [https://www.w3.org/TR/css-animations-1/](https://www.w3.org/TR/css-animations-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-animations-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `CSSOMString`, `EventHandler`, `GlobalEventHandlers`, `Window`
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://w3c.github.io/dom/`](https://w3c.github.io/dom/), related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

Informative references to this spec from:

- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/2018/CR-css-text-decor-3-20180703/)
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)


## CSS Animations Level 2 {data-spec=true data-anomaly=true data-hasUnexpectedIdl=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-animations-2/) (26 September 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unexpected WebIDL definitions found
- Unknown WebIDL names used: `CSSOMString`, `Window`
- Inconsistent references for links: 
     * [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/), related reference "WEB-ANIMATIONS" uses URL [`https://www.w3.org/TR/web-animations-1/`](https://www.w3.org/TR/web-animations-1/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

No informative reference to this spec from other specs.


## CSS Backgrounds and Borders Module Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/) (17 October 2017)
- Editor's Draft: [https://drafts.csswg.org/css-backgrounds/](https://drafts.csswg.org/css-backgrounds/)
- Latest published version: [https://www.w3.org/TR/css-backgrounds-3/](https://www.w3.org/TR/css-backgrounds-3/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-backgrounds-3

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/2008/NOTE-WCAG20-TECHS-20081211/F3`](https://www.w3.org/TR/2008/NOTE-WCAG20-TECHS-20081211/F3)
     * [`https://www.w3.org/TR/media-frags/`](https://www.w3.org/TR/media-frags/)
     * [`https://www.w3.org/TR/2014/CR-css3-background-20140909/`](https://www.w3.org/TR/2014/CR-css3-background-20140909/)
     * [`https://www.w3.org/TR/2014/WD-css3-background-20140204/`](https://www.w3.org/TR/2014/WD-css3-background-20140204/)
     * [`https://www.w3.org/TR/2012/CR-css3-background-20120724/`](https://www.w3.org/TR/2012/CR-css3-background-20120724/)
     * [`https://www.w3.org/TR/2012/CR-css3-background-20120417/`](https://www.w3.org/TR/2012/CR-css3-background-20120417/)
     * [`https://www.w3.org/TR/2012/WD-css3-background-20120214/`](https://www.w3.org/TR/2012/WD-css3-background-20120214/)
     * [`https://www.w3.org/TR/2011/CR-css3-background-20110215/`](https://www.w3.org/TR/2011/CR-css3-background-20110215/)
     * [`https://www.w3.org/TR/2009/CR-css3-background-20091217/`](https://www.w3.org/TR/2009/CR-css3-background-20091217/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://www.w3.org/TR/2011/REC-CSS2-20110607/`](https://www.w3.org/TR/2011/REC-CSS2-20110607/), related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2`](https://www.w3.org/TR/CSS2)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Compositing and Blending Level 2](https://drafts.fxtf.org/compositing-2/)
- [CSS Backgrounds and Borders Module Level 4](https://drafts.csswg.org/css-backgrounds-4/)
- [CSS Basic User Interface Module Level 3 (CSS3 UI)](https://www.w3.org/TR/2018/REC-css-ui-3-20180621/)
- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Containment Module Level 1](https://www.w3.org/TR/2018/CR-css-contain-1-20180524/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Fonts Module Level 4](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Logical Properties and Values Level 1](https://www.w3.org/TR/2018/WD-css-logical-1-20180827/)
- [CSS Multi-column Layout Module Level 1](https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/2018/CR-css-text-decor-3-20180703/)
- [CSS Text Decoration Module Level 4](https://www.w3.org/TR/2018/WD-css-text-decor-4-20180313/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Transforms Module Level 1](https://www.w3.org/TR/2017/WD-css-transforms-1-20171130/)
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

Informative references to this spec from:

- [CSS Animations Level 1](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Transitions](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)


## CSS Backgrounds and Borders Module Level 4 {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-backgrounds-4/) (19 July 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Basic User Interface Module Level 3 (CSS3 UI) {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/REC-css-ui-3-20180621/) (21 June 2018)
- Editor's Draft: [https://drafts.csswg.org/css-ui/](https://drafts.csswg.org/css-ui/)
- Latest published version: [https://www.w3.org/TR/css-ui-3/](https://www.w3.org/TR/css-ui-3/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2018/REC-css-ui-3-20180621/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-ui-3

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/2000/WD-css3-userint-20000216`](https://www.w3.org/TR/2000/WD-css3-userint-20000216)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/)
     * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/)
     * [`https://www.w3.org/TR/css-style-attr/`](https://www.w3.org/TR/css-style-attr/)
     * [`https://www.w3.org/TR/css-color-3//`](https://www.w3.org/TR/css-color-3//)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Containment Module Level 1](https://www.w3.org/TR/2018/CR-css-contain-1-20180524/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/)
- [CSS Image Values and Replaced Content Module Level 4](https://www.w3.org/TR/2017/WD-css-images-4-20170413/)
- [CSS Logical Properties and Values Level 1](https://www.w3.org/TR/2018/WD-css-logical-1-20180827/)
- [CSS Pseudo-Elements Module Level 4](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- [CSS Table Module Level 3](https://www.w3.org/TR/2017/WD-css-tables-3-20170307/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)

Informative references to this spec from:

- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)


## CSS Basic User Interface Module Level 4 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/) (22 December 2017)
- Editor's Draft: [https://drafts.csswg.org/css-ui-4/](https://drafts.csswg.org/css-ui-4/)
- Latest published version: [https://www.w3.org/TR/css-ui-4/](https://www.w3.org/TR/css-ui-4/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-ui-4

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/2000/WD-css3-userint-20000216`](https://www.w3.org/TR/2000/WD-css3-userint-20000216)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/)
     * [`https://www.w3.org/TR/css-style-attr/`](https://www.w3.org/TR/css-style-attr/)
     * [`https://w3c.github.io/editing/contentEditable.html`](https://w3c.github.io/editing/contentEditable.html)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

No informative reference to this spec from other specs.


## CSS Box Alignment Module Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-css-align-3-20180830/) (30 August 2018)
- Editor's Draft: [https://drafts.csswg.org/css-align/](https://drafts.csswg.org/css-align/)
- Latest published version: [https://www.w3.org/TR/css-align-3/](https://www.w3.org/TR/css-align-3/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-align-3-20180830/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-align-3

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/cssom-1/`](https://www.w3.org/TR/cssom-1/)
     * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/)
     * [`https://www.w3.org/TR/css-flexbox/`](https://www.w3.org/TR/css-flexbox/)
     * [`https://www.w3.org/TR/css-grid/`](https://www.w3.org/TR/css-grid/)
     * [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/)
     * [`https://www.w3.org/TR/css3-flexbox/`](https://www.w3.org/TR/css3-flexbox/)
     * [`https://www.w3.org/TR/css3-grid-layout/`](https://www.w3.org/TR/css3-grid-layout/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/), related reference "CSS-WRITING-MODES-3" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Grid Layout Module Level 2](https://www.w3.org/TR/2018/WD-css-grid-2-20180804/)
- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Rhythmic Sizing](https://www.w3.org/TR/2017/WD-css-rhythm-1-20170302/)
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/2018/CR-css-scroll-snap-1-20180814/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

No informative reference to this spec from other specs.


## CSS Box Model Module Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-box-3/) (2 August 2018)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/)
     * [`https://www.w3.org/TR/css-cascade/`](https://www.w3.org/TR/css-cascade/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/2018/WD-css3-box-20180731/`](https://www.w3.org/TR/2018/WD-css3-box-20180731/)
     * [`https://www.w3.org/TR/css-display/`](https://www.w3.org/TR/css-display/)
     * [`https://www.w3.org/TR/css-flexbox/`](https://www.w3.org/TR/css-flexbox/)
     * [`https://www.w3.org/TR/css-grid/`](https://www.w3.org/TR/css-grid/)
     * [`https://www.w3.org/TR/css-position/`](https://www.w3.org/TR/css-position/)
     * [`https://www.w3.org/TR/css-tables/`](https://www.w3.org/TR/css-tables/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Cascading and Inheritance Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/) (28 August 2018)
- Editor's Draft: [https://drafts.csswg.org/css-cascade-3/](https://drafts.csswg.org/css-cascade-3/)
- Latest published version: [https://www.w3.org/TR/css-cascade-3/](https://www.w3.org/TR/css-cascade-3/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-cascade-3

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/)
     * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/)
     * [`https://www.w3.org/TR/css-style-attr/`](https://www.w3.org/TR/css-style-attr/)
     * [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/), related reference "CSS-WRITING-MODES-3" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Content Security Policy: Embedded Enforcement](https://www.w3.org/TR/2016/WD-csp-embedded-enforcement-20160909/)
- [ContentEditable](https://w3c.github.io/editing/contentEditable.html)
- [CSS Animations Level 1](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- [CSS Device Adaptation Module Level 1](http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Logical Properties and Values Level 1](https://www.w3.org/TR/2018/WD-css-logical-1-20180827/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Pseudo-Elements Module Level 4](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- [CSS Transitions](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [Media Queries Level 4](https://www.w3.org/TR/2017/CR-mediaqueries-4-20170905/)
- [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)

No informative reference to this spec from other specs.


## CSS Cascading and Inheritance Level 4 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/) (28 August 2018)
- Editor's Draft: [https://drafts.csswg.org/css-cascade/](https://drafts.csswg.org/css-cascade/)
- Latest published version: [https://www.w3.org/TR/css-cascade-4/](https://www.w3.org/TR/css-cascade-4/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-cascade-4

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/)
     * [`https://www.w3.org/TR/css-conditional/`](https://www.w3.org/TR/css-conditional/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/)
     * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/)
     * [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/)
     * [`https://www.w3.org/TR/css-cascade-3/`](https://www.w3.org/TR/css-cascade-3/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/), related reference "CSS-WRITING-MODES-3" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)
- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/2018/WD-css-align-3-20180830/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Counter Styles Level 3](https://www.w3.org/TR/2017/CR-css-counter-styles-3-20171214/)
- [CSS Custom Properties for Cascading Variables Module Level 1](http://www.w3.org/TR/2015/CR-css-variables-1-20151203/)
- [CSS Device Adaptation Module Level 1](http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Environment Variables Module Level 1](https://drafts.csswg.org/css-env-1/)
- [CSS Fill and Stroke Module Level 3](https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/)
- [CSS Fonts Module Level 4](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)
- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Logical Properties and Values Level 1](https://www.w3.org/TR/2018/WD-css-logical-1-20180827/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Overflow Module Level 4](https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/)
- [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- [CSS Properties and Values API Level 1](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/)
- [CSS Rhythmic Sizing](https://www.w3.org/TR/2017/WD-css-rhythm-1-20170302/)
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/2018/CR-css-scroll-snap-1-20180814/)
- [CSS Text Decoration Module Level 4](https://www.w3.org/TR/2018/WD-css-text-decor-4-20180313/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Text Module Level 4](https://www.w3.org/TR/2018/WD-css-text-4-20180920/)
- [CSS Transforms Module Level 1](https://www.w3.org/TR/2017/WD-css-transforms-1-20171130/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [CSS Transitions](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [Indexed Database API 2.0](https://www.w3.org/TR/2018/REC-IndexedDB-2-20180130/)
- [Media Queries Level 4](https://www.w3.org/TR/2017/CR-mediaqueries-4-20170905/)
- [Motion Path Module Level 1](https://www.w3.org/TR/2017/WD-motion-1-20170711/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

Informative references to this spec from:

- [CSS Basic User Interface Module Level 3 (CSS3 UI)](https://www.w3.org/TR/2018/REC-css-ui-3-20180621/)


## CSS Color Module Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/REC-css-color-3-20180619/) (19 June 2018)
- Editor's Draft: [https://drafts.csswg.org/css-color-3/](https://drafts.csswg.org/css-color-3/)
- Latest published version: [https://www.w3.org/TR/css-color-3/](https://www.w3.org/TR/css-color-3/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2018/REC-css-color-3-20180619/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-color-3

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/2008/REC-WCAG20-20081211/`](https://www.w3.org/TR/2008/REC-WCAG20-20081211/)
     * [`https://www.w3.org/TR/2003/CR-css3-color-20030514/`](https://www.w3.org/TR/2003/CR-css3-color-20030514/)
     * [`https://www.w3.org/TR/2011/REC-css3-color-20110607/`](https://www.w3.org/TR/2011/REC-css3-color-20110607/)
     * [`https://www.w3.org/TR/2017/CR-css-ui-3-20170302/`](https://www.w3.org/TR/2017/CR-css-ui-3-20170302/)
     * [`https://www.w3.org/TR/1999/REC-html401-19991224`](https://www.w3.org/TR/1999/REC-html401-19991224)
     * [`https://www.w3.org/TR/2008/REC-xml-20081126/`](https://www.w3.org/TR/2008/REC-xml-20081126/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/2003/REC-SVG11-20030114/`](https://www.w3.org/TR/2003/REC-SVG11-20030114/), related reference "SVG11" uses URL [`http://www.w3.org/TR/2011/REC-SVG11-20110816/`](http://www.w3.org/TR/2011/REC-SVG11-20110816/)
     * [`https://www.w3.org/TR/2008/REC-CSS2-20080411`](https://www.w3.org/TR/2008/REC-CSS2-20080411), related reference "CSS21" uses URL [`http://www.w3.org/TR/2011/REC-CSS2-20110607`](http://www.w3.org/TR/2011/REC-CSS2-20110607)
     * [`https://www.w3.org/TR/2001/REC-SVG-20010904`](https://www.w3.org/TR/2001/REC-SVG-20010904), related reference "SVG11" uses URL [`http://www.w3.org/TR/2011/REC-SVG11-20110816/`](http://www.w3.org/TR/2011/REC-SVG11-20110816/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Backgrounds and Borders Module Level 4](https://drafts.csswg.org/css-backgrounds-4/)
- [CSS Basic User Interface Module Level 3 (CSS3 UI)](https://www.w3.org/TR/2018/REC-css-ui-3-20180621/)
- [CSS Fonts Module Level 4](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)
- [CSS Logical Properties and Values Level 1](https://www.w3.org/TR/2018/WD-css-logical-1-20180827/)
- [CSS Multi-column Layout Module Level 1](https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Scrollbars Module Level 1](https://drafts.csswg.org/css-scrollbars-1/)
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/2018/CR-css-text-decor-3-20180703/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

No informative reference to this spec from other specs.


## CSS Color Module Level 4 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2016/WD-css-color-4-20160705/) (05 July 2016)
- Editor's Draft: [https://drafts.csswg.org/css-color/](https://drafts.csswg.org/css-color/)
- Latest published version: [http://www.w3.org/TR/css-color-4/](http://www.w3.org/TR/css-color-4/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-css-color-4-20160705/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-color-4

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES" uses URL [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/)
     * [`https://www.w3.org/TR/2008/REC-WCAG20-20081211/`](https://www.w3.org/TR/2008/REC-WCAG20-20081211/), related reference "WCAG20" uses URL [`https://www.w3.org/TR/WCAG20/`](https://www.w3.org/TR/WCAG20/)
     * [`https://www.w3.org/TR/2003/REC-SVG11-20030114/`](https://www.w3.org/TR/2003/REC-SVG11-20030114/), related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Fill and Stroke Module Level 3](https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/)
- [CSS Fonts Module Level 4](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)
- [CSS Image Values and Replaced Content Module Level 4](https://www.w3.org/TR/2017/WD-css-images-4-20170413/)
- [CSS Multi-column Layout Module Level 1](https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/)
- [CSS Table Module Level 3](https://www.w3.org/TR/2017/WD-css-tables-3-20170307/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [Filter Effects Module Level 2](https://drafts.fxtf.org/filter-effects-2/)
- [Input Events Level 1](https://www.w3.org/TR/2017/WD-input-events-1-20170905/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

Informative references to this spec from:

- [Compositing and Blending Level 2](https://drafts.fxtf.org/compositing-2/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Properties and Values API Level 1](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/)
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)


## CSS Conditional Rules Module Level 3 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-hasInvalidIdl=true data-noCssDefinitions=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2013/CR-css3-conditional-20130404/) (4 April 2013)
- Editor's Draft: [https://drafts.csswg.org/css-conditional-3/](https://drafts.csswg.org/css-conditional-3/)
- Latest published version: [http://www.w3.org/TR/css3-conditional/](http://www.w3.org/TR/css3-conditional/)
- Latest published status: [Candidate Recommendation](http://www.w3.org/TR/2013/CR-css3-conditional-20130404/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css3-conditional

### Potential issue(s) {.anomalies}

- No CSS definitions found
- Invalid WebIDL content found
- Spec uses WebIDL but does not reference it normatively
- Missing references for links: 
     * [`https://www.w3.org/TR/2008/REC-CSS1-20080411`](https://www.w3.org/TR/2008/REC-CSS1-20080411)
     * [`https://www.w3.org/TR/2013/WD-css3-transitions-20130212/`](https://www.w3.org/TR/2013/WD-css3-transitions-20130212/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/), related reference "MEDIAQ" uses URL [`http://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/`](http://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Custom Properties for Cascading Variables Module Level 1](http://www.w3.org/TR/2015/CR-css-variables-1-20151203/)
- [CSS Device Adaptation Module Level 1](http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/)
- [CSS Environment Variables Module Level 1](https://drafts.csswg.org/css-env-1/)
- [CSS Properties and Values API Level 1](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/)
- [CSS Round Display Level 1](https://www.w3.org/TR/2016/WD-css-round-display-1-20161222/)
- [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/)

No informative reference to this spec from other specs.


## CSS Containment Module Level 1 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-css-contain-1-20180524/) (24 May 2018)
- Editor's Draft: [https://drafts.csswg.org/css-contain/](https://drafts.csswg.org/css-contain/)
- Latest published version: [https://www.w3.org/TR/css-contain-1/](https://www.w3.org/TR/css-contain-1/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-css-contain-1-20180524/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-contain-1

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/)
     * [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Overflow Module Level 4](https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [Motion Path Module Level 1](https://www.w3.org/TR/2017/WD-motion-1-20170711/)

No informative reference to this spec from other specs.


## CSS Counter Styles Level 3 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/CR-css-counter-styles-3-20171214/) (14 December 2017)
- Editor's Draft: [https://drafts.csswg.org/css-counter-styles/](https://drafts.csswg.org/css-counter-styles/)
- Latest published version: [https://www.w3.org/TR/css-counter-styles-3/](https://www.w3.org/TR/css-counter-styles-3/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-css-counter-styles-3-20171214/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-counter-styles-3

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `CSSOMString`
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Generated Content Module Level 3](http://www.w3.org/TR/2016/WD-css-content-3-20160602/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)

Informative references to this spec from:

- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)


## CSS Custom Properties for Cascading Variables Module Level 1 {data-spec=true data-anomaly=true data-noCssDefinitions=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2015/CR-css-variables-1-20151203/) (03 December 2015)
- Editor's Draft: [https://drafts.csswg.org/css-variables/](https://drafts.csswg.org/css-variables/)
- Latest published version: [http://www.w3.org/TR/css-variables-1/](http://www.w3.org/TR/css-variables-1/)
- Latest published status: [Candidate Recommendation](http://www.w3.org/TR/2015/CR-css-variables-1-20151203/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-variables-1

### Potential issue(s) {.anomalies}

- No CSS definitions found
- Inconsistent references for links: 
     * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/), related reference "DOM" uses URL [`http://www.w3.org/TR/dom/`](http://www.w3.org/TR/dom/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES" uses URL [`http://www.w3.org/TR/css-values/`](http://www.w3.org/TR/css-values/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Environment Variables Module Level 1](https://drafts.csswg.org/css-env-1/)
- [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- [CSS Properties and Values API Level 1](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/)
- [CSS Shadow Parts](https://drafts.csswg.org/css-shadow-parts-1/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)

Informative references to this spec from:

- [CSS Rhythmic Sizing](https://www.w3.org/TR/2017/WD-css-rhythm-1-20170302/)


## CSS Device Adaptation Module Level 1 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/) (29 March 2016)
- Editor's Draft: [https://drafts.csswg.org/css-device-adapt/](https://drafts.csswg.org/css-device-adapt/)
- Latest published version: [http://www.w3.org/TR/css-device-adapt-1/](http://www.w3.org/TR/css-device-adapt-1/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-device-adapt-1

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/)
     * [`https://www.w3.org/TR/2011/WD-css-device-adapt-20110915/`](https://www.w3.org/TR/2011/WD-css-device-adapt-20110915/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/), related reference "CSS-WRITING-MODES-3" uses URL [`http://dev.w3.org/csswg/css-writing-modes-3/`](http://dev.w3.org/csswg/css-writing-modes-3/)
     * [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/), related reference "CSS-FONTS-3" uses URL [`http://dev.w3.org/csswg/css-fonts/`](http://dev.w3.org/csswg/css-fonts/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS3VAL" uses URL [`http://dev.w3.org/csswg/css-values/`](http://dev.w3.org/csswg/css-values/)
     * [`https://www.w3.org/TR/mediaqueries-4/`](https://www.w3.org/TR/mediaqueries-4/), related reference "MEDIAQUERIES-4" uses URL [`http://dev.w3.org/csswg/mediaqueries4/`](http://dev.w3.org/csswg/mediaqueries4/)
     * [`https://www.w3.org/TR/cssom-1/`](https://www.w3.org/TR/cssom-1/), related reference "CSSOM-1" uses URL [`https://drafts.csswg.org/cssom/`](https://drafts.csswg.org/cssom/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Round Display Level 1](https://www.w3.org/TR/2016/WD-css-round-display-1-20161222/)
- [CSSOM View Module](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)

Informative references to this spec from:

- [Media Queries Level 4](https://www.w3.org/TR/2017/CR-mediaqueries-4-20170905/)
- [The Screen Orientation API](https://www.w3.org/TR/2018/WD-screen-orientation-20180926/)


## CSS Display Module Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-css-display-3-20180828/) (28 August 2018)
- Editor's Draft: [https://drafts.csswg.org/css-display/](https://drafts.csswg.org/css-display/)
- Latest published version: [https://www.w3.org/TR/css-display-3/](https://www.w3.org/TR/css-display-3/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-display-3

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/)
     * [`https://www.w3.org/TR/css-cascade/`](https://www.w3.org/TR/css-cascade/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/)
     * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Box Tree API Level 1](https://drafts.css-houdini.org/box-tree-api/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Animations Level 1](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/2018/WD-css-align-3-20180830/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Containment Module Level 1](https://www.w3.org/TR/2018/CR-css-contain-1-20180524/)
- [CSS Fill and Stroke Module Level 3](https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/)
- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Grid Layout Module Level 2](https://www.w3.org/TR/2018/WD-css-grid-2-20180804/)
- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Logical Properties and Values Level 1](https://www.w3.org/TR/2018/WD-css-logical-1-20180827/)
- [CSS Mobile Text Size Adjustment Module Level 1](https://drafts.csswg.org/css-size-adjust-1/)
- [CSS Multi-column Layout Module Level 1](https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Overflow Module Level 4](https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/)
- [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- [CSS Positioned Layout Module Level 3](http://www.w3.org/TR/2016/WD-css-position-3-20160517/)
- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/)
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/2018/CR-css-scroll-snap-1-20180814/)
- [CSS Shapes Module Level 2](https://drafts.csswg.org/css-shapes-2/)
- [CSS Table Module Level 3](https://www.w3.org/TR/2017/WD-css-tables-3-20170307/)
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/2018/CR-css-text-decor-3-20180703/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Text Module Level 4](https://www.w3.org/TR/2018/WD-css-text-4-20180920/)
- [CSS Transforms Module Level 1](https://www.w3.org/TR/2017/WD-css-transforms-1-20171130/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [CSSOM View Module](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

Informative references to this spec from:

- [CSS Fonts Module Level 4](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)
- [CSS Pseudo-Elements Module Level 4](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)


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

- Crawled version: [Initial URL](https://drafts.csswg.org/css-exclusions-1/) (10 September 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-box/`](https://www.w3.org/TR/css3-box/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/), related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Fill and Stroke Module Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/) (13 April 2017)
- Editor's Draft: [https://drafts.fxtf.org/fill-stroke/](https://drafts.fxtf.org/fill-stroke/)
- Latest published version: [https://www.w3.org/TR/fill-stroke-3/](https://www.w3.org/TR/fill-stroke-3/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/)
- Repository: [GitHub w3c/fxtf-drafts](https://github.com/w3c/fxtf-drafts)
- Shortname: fill-stroke-3

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

No informative reference to this spec from other specs.


## CSS Flexible Box Layout Module Level 1 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/) (19 October 2017)
- Editor's Draft: [https://drafts.csswg.org/css-flexbox/](https://drafts.csswg.org/css-flexbox/)
- Latest published version: [https://www.w3.org/TR/css-flexbox-1/](https://www.w3.org/TR/css-flexbox-1/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-flexbox-1

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/)
     * [`https://www.w3.org/TR/css-align/`](https://www.w3.org/TR/css-align/)
     * [`https://www.w3.org/TR/css3-sizing/`](https://www.w3.org/TR/css3-sizing/)
     * [`https://www.w3.org/TR/css-display/`](https://www.w3.org/TR/css-display/)
     * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/)
     * [`https://www.w3.org/TR/css3-speech/`](https://www.w3.org/TR/css3-speech/)
     * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/2012/CR-css3-flexbox-20120918/`](https://www.w3.org/TR/2012/CR-css3-flexbox-20120918/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/), related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/2018/WD-css-align-3-20180830/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Grid Layout Module Level 2](https://www.w3.org/TR/2018/WD-css-grid-2-20180804/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Overflow Module Level 4](https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/)
- [CSS Text Module Level 4](https://www.w3.org/TR/2018/WD-css-text-4-20180920/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

Informative references to this spec from:

- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Exclusions Module Level 1](https://drafts.csswg.org/css-exclusions-1/)
- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)


## CSS Font Loading Module Level 3 {data-spec=true data-anomaly=true data-noNormativeRefs=true data-noRefToWebIDL=true data-hasInvalidIdl=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2014/WD-css-font-loading-3-20140522/) (22 May 2014)
- Editor's Draft: [https://drafts.csswg.org/css-font-loading/](https://drafts.csswg.org/css-font-loading/)
- Latest published version: [http://www.w3.org/TR/css-font-loading-3/](http://www.w3.org/TR/css-font-loading-3/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2014/WD-css-font-loading-3-20140522/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-font-loading-3

### Potential issue(s) {.anomalies}

- No normative references found
- Invalid WebIDL content found
- Spec uses WebIDL but does not reference it normatively
- Missing references for links: 
     * [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
     * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
     * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
     * [`https://www.w3.org/TR/2013/WD-css3-fonts-20130212/`](https://www.w3.org/TR/2013/WD-css3-fonts-20130212/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [CSS Fonts Module Level 4](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)


## CSS Fonts Module Level 3 {data-spec=true data-anomaly=true data-hasUnexpectedIdl=true data-redefinedIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/) (20 September 2018)
- Editor's Draft: [https://drafts.csswg.org/css-fonts/](https://drafts.csswg.org/css-fonts/)
- Latest published version: [https://www.w3.org/TR/css-fonts-3/](https://www.w3.org/TR/css-fonts-3/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-fonts-3

### Potential issue(s) {.anomalies}

- Unexpected WebIDL definitions found
- WebIDL names also defined elsewhere: 
    * `CSSFontFaceRule` also defined in [CSS Fonts Module Level 4](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)
- Missing references for WebIDL names: 
     * `CSSRule` defined in [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
     * `CSSStyleDeclaration` defined in [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- Missing references for links: 
     * [`https://www.w3.org/TR/2002/WD-css3-fonts-20020802/`](https://www.w3.org/TR/2002/WD-css3-fonts-20020802/)
     * [`https://www.w3.org/TR/2002/WD-css3-webfonts-20020802/`](https://www.w3.org/TR/2002/WD-css3-webfonts-20020802/)
     * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/)
     * [`https://www.w3.org/TR/2005/REC-charmod-20050215/`](https://www.w3.org/TR/2005/REC-charmod-20050215/)
     * [`https://www.w3.org/TR/2018/WD-charmod-norm-20180420/`](https://www.w3.org/TR/2018/WD-charmod-norm-20180420/)
     * [`https://www.w3.org/TR/2017/WD-css-text-3-20170822/`](https://www.w3.org/TR/2017/WD-css-text-3-20170822/)
     * [`https://www.w3.org/TR/2013/CR-css3-conditional-20130404/`](https://www.w3.org/TR/2013/CR-css3-conditional-20130404/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES" uses URL [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/2018/WD-css-align-3-20180830/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Device Adaptation Module Level 1](http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/)
- [CSS Fonts Module Level 4](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)
- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)
- [CSS Mobile Text Size Adjustment Module Level 1](https://drafts.csswg.org/css-size-adjust-1/)
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/2018/CR-css-text-decor-3-20180703/)
- [CSS Text Decoration Module Level 4](https://www.w3.org/TR/2018/WD-css-text-decor-4-20180313/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

Informative references to this spec from:

- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Properties and Values API Level 1](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/)
- [CSS Pseudo-Elements Module Level 4](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [Media Queries Level 4](https://www.w3.org/TR/2017/CR-mediaqueries-4-20170905/)


## CSS Fonts Module Level 4 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/) (20 September 2018)
- Editor's Draft: [https://drafts.csswg.org/css-fonts-4/](https://drafts.csswg.org/css-fonts-4/)
- Latest published version: [https://www.w3.org/TR/css-fonts-4/](https://www.w3.org/TR/css-fonts-4/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-fonts-4

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `CSSOMRGBColor`, `CSSOMString`, `Window`
- WebIDL names also defined elsewhere: 
    * `CSSFontFaceRule` also defined in [CSS Fonts Module Level 3](https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/)
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/)
     * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/)
     * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/`](https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/), related reference "CSS-FONTS-3" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/2018/WD-css-align-3-20180830/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Conditional Rules Module Level 3](http://www.w3.org/TR/2013/CR-css3-conditional-20130404/)
- [CSS Device Adaptation Module Level 1](http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/)
- [CSS Fonts Module Level 4](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)
- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)
- [CSS Mobile Text Size Adjustment Module Level 1](https://drafts.csswg.org/css-size-adjust-1/)
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/2018/CR-css-text-decor-3-20180703/)
- [CSS Text Decoration Module Level 4](https://www.w3.org/TR/2018/WD-css-text-decor-4-20180313/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [HTML Canvas 2D Context](http://www.w3.org/TR/2015/REC-2dcontext-20151119/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

Informative references to this spec from:

- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Properties and Values API Level 1](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/)
- [CSS Pseudo-Elements Module Level 4](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [Media Queries Level 4](https://www.w3.org/TR/2017/CR-mediaqueries-4-20170905/)


## CSS Fragmentation Module Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/CR-css-break-3-20170209/) (9 February 2017)
- Editor's Draft: [https://drafts.csswg.org/css-break/](https://drafts.csswg.org/css-break/)
- Latest published version: [https://www.w3.org/TR/css-break-3/](https://www.w3.org/TR/css-break-3/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-break-3

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-regions/`](https://www.w3.org/TR/css3-regions/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/2015/WD-css3-break-20150129/`](https://www.w3.org/TR/2015/WD-css3-break-20150129/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS3VAL" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://www.w3.org/TR/2011/REC-CSS2-20110607/`](https://www.w3.org/TR/2011/REC-CSS2-20110607/), related reference "CSS21" uses URL [`https://www.w3.org/TR/CSS2`](https://www.w3.org/TR/CSS2)
     * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/), related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Backgrounds and Borders Module Level 3](https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Containment Module Level 1](https://www.w3.org/TR/2018/CR-css-contain-1-20180524/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Fill and Stroke Module Level 3](https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Logical Properties and Values Level 1](https://www.w3.org/TR/2018/WD-css-logical-1-20180827/)
- [CSS Multi-column Layout Module Level 1](https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/)
- [CSS Multi-column Layout Module Level 2](https://drafts.csswg.org/css-multicol-2/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Overflow Module Level 4](https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/)
- [CSS Table Module Level 3](https://www.w3.org/TR/2017/WD-css-tables-3-20170307/)
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/2018/CR-css-text-decor-3-20180703/)
- [CSS Text Module Level 4](https://www.w3.org/TR/2018/WD-css-text-4-20180920/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [CSSOM View Module](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)

Informative references to this spec from:

- [CSS Intrinsic & Extrinsic Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [Media Queries Level 4](https://www.w3.org/TR/2017/CR-mediaqueries-4-20170905/)


## CSS Generated Content for Paged Media Module {data-spec=true data-anomaly=true data-noNormativeRefs=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2014/WD-css-gcpm-3-20140513/) (13 May 2014)
- Editor's Draft: [https://drafts.csswg.org/css-gcpm/](https://drafts.csswg.org/css-gcpm/)
- Latest published version: [http://www.w3.org/TR/css-gcpm-3/](http://www.w3.org/TR/css-gcpm-3/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2014/WD-css-gcpm-3-20140513/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-gcpm-3

### Potential issue(s) {.anomalies}

- No normative references found
- Missing references for links: 
     * [`https://w3c.github.io/dpub-pagination/`](https://w3c.github.io/dpub-pagination/)
     * [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/)
     * [`https://www.w3.org/TR/2014/WD-dpub-latinreq-20140313/`](https://www.w3.org/TR/2014/WD-dpub-latinreq-20140313/)
     * [`https://www.w3.org/TR/2011/WD-css3-gcpm-20111129/`](https://www.w3.org/TR/2011/WD-css3-gcpm-20111129/)
     * [`https://books.spec.whatwg.org/`](https://books.spec.whatwg.org/)
     * [`https://www.w3.org/TR/2011/REC-CSS2-20110607`](https://www.w3.org/TR/2011/REC-CSS2-20110607)
     * [`https://www.w3.org/TR/2011/WD-css3-lists-20110524`](https://www.w3.org/TR/2011/WD-css3-lists-20110524)
     * [`https://www.w3.org/TR/2013/WD-css3-page-20130314/`](https://www.w3.org/TR/2013/WD-css3-page-20130314/)
     * [`https://www.w3.org/TR/2013/WD-css-syntax-3-20131105/`](https://www.w3.org/TR/2013/WD-css-syntax-3-20131105/)
     * [`https://www.w3.org/TR/2013/CR-css3-values-20130730/`](https://www.w3.org/TR/2013/CR-css3-values-20130730/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

Informative references to this spec from:

- [CSS Generated Content for Paged Media Module Level 4](https://drafts.csswg.org/css-gcpm-4/)
- [CSS Generated Content Module Level 3](http://www.w3.org/TR/2016/WD-css-content-3-20160602/)
- [CSS Overflow Module Level 4](https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/)
- [CSS Page Floats](http://www.w3.org/TR/2015/WD-css-page-floats-3-20150915/)


## CSS Generated Content for Paged Media Module Level 4 {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-gcpm-4/) (5 July 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

No informative reference to this spec from other specs.


## CSS Generated Content Module Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2016/WD-css-content-3-20160602/) (2 June 2016)
- Editor's Draft: [https://drafts.csswg.org/css-content/](https://drafts.csswg.org/css-content/)
- Latest published version: [http://www.w3.org/TR/css-content-3/](http://www.w3.org/TR/css-content-3/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-css-content-3-20160602/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-content-3

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-lists/`](https://www.w3.org/TR/css3-lists/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES" uses URL [`http://www.w3.org/TR/css-values/`](http://www.w3.org/TR/css-values/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Generated Content for Paged Media Module Level 4](https://drafts.csswg.org/css-gcpm-4/)
- [CSS Overflow Module Level 4](https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/)
- [CSS Pseudo-Elements Module Level 4](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

Informative references to this spec from:

- [CSS Containment Module Level 1](https://www.w3.org/TR/2018/CR-css-contain-1-20180524/)
- [CSS Counter Styles Level 3](https://www.w3.org/TR/2017/CR-css-counter-styles-3-20171214/)


## CSS Grid Layout Module Level 1 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/) (14 December 2017)
- Editor's Draft: [https://drafts.csswg.org/css-grid/](https://drafts.csswg.org/css-grid/)
- Latest published version: [https://www.w3.org/TR/css-grid-1/](https://www.w3.org/TR/css-grid-1/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-grid-1

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css-flexbox/`](https://www.w3.org/TR/css-flexbox/)
     * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/)
     * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/)
     * [`https://www.w3.org/TR/css-align/`](https://www.w3.org/TR/css-align/)
     * [`https://www.w3.org/TR/css3-speech/`](https://www.w3.org/TR/css3-speech/)
     * [`https://www.w3.org/TR/css-display/`](https://www.w3.org/TR/css-display/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/)
     * [`https://www.w3.org/TR/cssom/`](https://www.w3.org/TR/cssom/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/)
     * [`https://www.w3.org/TR/css-break/`](https://www.w3.org/TR/css-break/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/), related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS3VAL" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Backgrounds and Borders Module Level 4](https://drafts.csswg.org/css-backgrounds-4/)
- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/2018/WD-css-align-3-20180830/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Grid Layout Module Level 2](https://www.w3.org/TR/2018/WD-css-grid-2-20180804/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Overflow Module Level 4](https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)

Informative references to this spec from:

- [CSS Exclusions Module Level 1](https://drafts.csswg.org/css-exclusions-1/)


## CSS Grid Layout Module Level 2 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-css-grid-2-20180804/) (4 August 2018)
- Editor's Draft: [https://drafts.csswg.org/css-grid-2/](https://drafts.csswg.org/css-grid-2/)
- Latest published version: [https://www.w3.org/TR/css-grid-2/](https://www.w3.org/TR/css-grid-2/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-grid-2-20180804/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-grid-2

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/)
     * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)

No informative reference to this spec from other specs.


## CSS Image Values and Replaced Content Module Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2012/CR-css3-images-20120417/) (17 April 2012)
- Editor's Draft: [https://drafts.csswg.org/css-images-3/](https://drafts.csswg.org/css-images-3/)
- Latest published version: [http://www.w3.org/TR/css3-images/](http://www.w3.org/TR/css3-images/)
- Latest published status: [Candidate Recommendation](http://www.w3.org/TR/2012/CR-css3-images-20120417/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css3-images

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/2008/REC-CSS1-20080411`](https://www.w3.org/TR/2008/REC-CSS1-20080411)
     * [`https://www.w3.org/TR/2011/WD-css3-2d-transforms-20111215/`](https://www.w3.org/TR/2011/WD-css3-2d-transforms-20111215/)
     * [`https://www.w3.org/TR/2012/WD-css3-background-20120214/`](https://www.w3.org/TR/2012/WD-css3-background-20120214/)
     * [`https://www.w3.org/TR/2011/REC-css3-color-20110607`](https://www.w3.org/TR/2011/REC-css3-color-20110607)
     * [`https://www.w3.org/TR/2006/WD-css3-page-20061010`](https://www.w3.org/TR/2006/WD-css3-page-20061010)
     * [`https://www.w3.org/TR/2010/CR-css3-mediaqueries-20100727/`](https://www.w3.org/TR/2010/CR-css3-mediaqueries-20100727/)
     * [`https://www.w3.org/TR/1998/REC-smil-19980615`](https://www.w3.org/TR/1998/REC-smil-19980615)
     * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/)
     * [`https://www.w3.org/TR/css-print/`](https://www.w3.org/TR/css-print/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/media-frags/`](https://www.w3.org/TR/media-frags/), related reference "MEDIA-FRAGS" uses URL [`http://www.w3.org/TR/2012/PR-media-frags-20120315/`](http://www.w3.org/TR/2012/PR-media-frags-20120315/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS3VAL" uses URL [`http://www.w3.org/TR/2012/WD-css3-values-20120308/`](http://www.w3.org/TR/2012/WD-css3-values-20120308/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Backgrounds and Borders Module Level 3](https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/)
- [CSS Basic User Interface Module Level 3 (CSS3 UI)](https://www.w3.org/TR/2018/REC-css-ui-3-20180621/)
- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Counter Styles Level 3](https://www.w3.org/TR/2017/CR-css-counter-styles-3-20171214/)
- [CSS Fill and Stroke Module Level 3](https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/)
- [CSS Generated Content Module Level 3](http://www.w3.org/TR/2016/WD-css-content-3-20160602/)
- [CSS Image Values and Replaced Content Module Level 4](https://www.w3.org/TR/2017/WD-css-images-4-20170413/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- [CSS Properties and Values API Level 1](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/)
- [CSS Round Display Level 1](https://www.w3.org/TR/2016/WD-css-round-display-1-20161222/)
- [CSS Shapes Module Level 2](https://drafts.csswg.org/css-shapes-2/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [HTML Canvas 2D Context](http://www.w3.org/TR/2015/REC-2dcontext-20151119/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)

Informative references to this spec from:

- [CSS Image Values and Replaced Content Module Level 4](https://www.w3.org/TR/2017/WD-css-images-4-20170413/)
- [CSS Paged Media Module Level 3](http://www.w3.org/TR/2013/WD-css3-page-20130314/)
- [CSS Transitions](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)


## CSS Image Values and Replaced Content Module Level 4 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-css-images-4-20170413/) (13 April 2017)
- Editor's Draft: [https://drafts.csswg.org/css-images-4/](https://drafts.csswg.org/css-images-4/)
- Latest published version: [https://www.w3.org/TR/css-images-4/](https://www.w3.org/TR/css-images-4/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-css-images-4-20170413/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-images-4

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Map`
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/)
     * [`https://www.w3.org/TR/2012/WD-css4-images-20120911/`](https://www.w3.org/TR/2012/WD-css4-images-20120911/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://www.w3.org/TR/2011/CR-css3-background-20110215/`](https://www.w3.org/TR/2011/CR-css3-background-20110215/), related reference "CSS-BACKGROUNDS-3" uses URL [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Intrinsic & Extrinsic Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)

Informative references to this spec from:

- [CSS Basic User Interface Module Level 3 (CSS3 UI)](https://www.w3.org/TR/2018/REC-css-ui-3-20180621/)
- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)


## CSS Inline Layout Module Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/) (8 August 2018)
- Editor's Draft: [https://drafts.csswg.org/css-inline-3/](https://drafts.csswg.org/css-inline-3/)
- Latest published version: [https://www.w3.org/TR/css-inline-3/](https://www.w3.org/TR/css-inline-3/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-inline-3

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/2002/WD-css3-linebox-20020515/`](https://www.w3.org/TR/2002/WD-css3-linebox-20020515/)
     * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/2018/WD-css-align-3-20180830/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Table Module Level 3](https://www.w3.org/TR/2017/WD-css-tables-3-20170307/)
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/2018/CR-css-text-decor-3-20180703/)
- [CSS Text Decoration Module Level 4](https://www.w3.org/TR/2018/WD-css-text-decor-4-20180313/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)

Informative references to this spec from:

- [CSS Pseudo-Elements Module Level 4](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)


## CSS Intrinsic & Extrinsic Sizing Module Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/) (4 March 2018)
- Editor's Draft: [https://drafts.csswg.org/css-sizing-3/](https://drafts.csswg.org/css-sizing-3/)
- Latest published version: [https://www.w3.org/TR/css-sizing-3/](https://www.w3.org/TR/css-sizing-3/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-sizing-3

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/)
     * [`https://www.w3.org/TR/css2/`](https://www.w3.org/TR/css2/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css-grid/`](https://www.w3.org/TR/css-grid/)
     * [`https://www.w3.org/TR/css-flexbox/`](https://www.w3.org/TR/css-flexbox/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/2018/WD-css-align-3-20180830/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/)
- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Grid Layout Module Level 2](https://www.w3.org/TR/2018/WD-css-grid-2-20180804/)
- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Mobile Text Size Adjustment Module Level 1](https://drafts.csswg.org/css-size-adjust-1/)
- [CSS Multi-column Layout Module Level 2](https://drafts.csswg.org/css-multicol-2/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Table Module Level 3](https://www.w3.org/TR/2017/WD-css-tables-3-20170307/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

Informative references to this spec from:

- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)
- [CSS Multi-column Layout Module Level 1](https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/)


## CSS Intrinsic & Extrinsic Sizing Module Level 4 {data-spec=true data-anomaly=true data-noCssDefinitions=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-sizing-4/) (21 June 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- No CSS definitions found
- Missing references for links: 
     * [`https://www.w3.org/TR/2012/WD-css3-sizing-20120927/`](https://www.w3.org/TR/2012/WD-css3-sizing-20120927/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)

No informative reference to this spec from other specs.


## CSS Layout API Level 1 {data-spec=true data-anomaly=true data-hasInvalidIdl=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/) (12 April 2018)
- Editor's Draft: [https://drafts.css-houdini.org/css-layout-api-1/](https://drafts.css-houdini.org/css-layout-api-1/)
- Latest published version: [https://www.w3.org/TR/css-layout-api-1/](https://www.w3.org/TR/css-layout-api-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- Shortname: css-layout-api-1

### Potential issue(s) {.anomalies}

- Invalid WebIDL content found
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Line Grid Module Level 1 {data-spec=true data-anomaly=true data-noNormativeRefs=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2014/WD-css-line-grid-1-20140916/) (16 September 2014)
- Editor's Draft: [https://drafts.csswg.org/css-line-grid/](https://drafts.csswg.org/css-line-grid/)
- Latest published version: [http://www.w3.org/TR/css-line-grid-1/](http://www.w3.org/TR/css-line-grid-1/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2014/WD-css-line-grid-1-20140916/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-line-grid-1

### Potential issue(s) {.anomalies}

- No normative references found
- Missing references for links: 
     * [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
     * [`https://www.w3.org/TR/2011/REC-CSS2-20110607`](https://www.w3.org/TR/2011/REC-CSS2-20110607)
     * [`https://www.w3.org/TR/2011/REC-css3-color-20110607`](https://www.w3.org/TR/2011/REC-css3-color-20110607)
     * [`https://www.w3.org/TR/2002/WD-css3-linebox-20020515`](https://www.w3.org/TR/2002/WD-css3-linebox-20020515)
     * [`https://www.w3.org/TR/2012/NOTE-jlreq-20120403/`](https://www.w3.org/TR/2012/NOTE-jlreq-20120403/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

Informative references to this spec from:

- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)


## CSS Lists and Counters Module Level 3 {data-spec=true data-anomaly=true data-noNormativeRefs=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2014/WD-css-lists-3-20140320/) (20 March 2014)
- Editor's Draft: [https://drafts.csswg.org/css-lists-3/](https://drafts.csswg.org/css-lists-3/)
- Latest published version: [http://www.w3.org/TR/css-lists-3/](http://www.w3.org/TR/css-lists-3/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2014/WD-css-lists-3-20140320/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-lists-3

### Potential issue(s) {.anomalies}

- No normative references found
- Missing references for links: 
     * [`https://www.w3.org/TR/2011/WD-css3-lists-20110524/`](https://www.w3.org/TR/2011/WD-css3-lists-20110524/)
     * [`https://www.w3.org/TR/css-counter-styles-3/`](https://www.w3.org/TR/css-counter-styles-3/)
     * [`https://www.w3.org/TR/predefined-counter-styles/`](https://www.w3.org/TR/predefined-counter-styles/)
     * [`https://www.w3.org/TR/css3-images/`](https://www.w3.org/TR/css3-images/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
     * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/)
     * [`https://www.w3.org/TR/2011/REC-CSS2-20110607`](https://www.w3.org/TR/2011/REC-CSS2-20110607)
     * [`https://www.w3.org/TR/2013/WD-css-counter-styles-3-20130221/`](https://www.w3.org/TR/2013/WD-css-counter-styles-3-20130221/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Containment Module Level 1](https://www.w3.org/TR/2018/CR-css-contain-1-20180524/)
- [CSS Counter Styles Level 3](https://www.w3.org/TR/2017/CR-css-counter-styles-3-20171214/)
- [CSS Exclusions Module Level 1](https://drafts.csswg.org/css-exclusions-1/)
- [CSS Generated Content Module Level 3](http://www.w3.org/TR/2016/WD-css-content-3-20160602/)
- [CSS Image Values and Replaced Content Module Level 4](https://www.w3.org/TR/2017/WD-css-images-4-20170413/)
- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)
- [CSS Pseudo-Elements Module Level 4](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

No informative reference to this spec from other specs.


## CSS Logical Properties and Values Level 1 {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-css-logical-1-20180827/) (27 August 2018)
- Editor's Draft: [https://drafts.csswg.org/css-logical-1/](https://drafts.csswg.org/css-logical-1/)
- Latest published version: [https://www.w3.org/TR/css-logical-1/](https://www.w3.org/TR/css-logical-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-logical-1-20180827/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-logical-1

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css-writing-modes/`](https://www.w3.org/TR/css-writing-modes/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/)
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/2018/CR-css-scroll-snap-1-20180814/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

Informative references to this spec from:

- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)


## CSS Masking Module Level 1 {data-spec=true data-anomaly=true data-noNormativeRefs=true data-noRefToWebIDL=true data-missingWebIdlRef=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2014/CR-css-masking-1-20140826/) (26 August 2014)
- Editor's Draft: [https://drafts.fxtf.org/css-masking-1/](https://drafts.fxtf.org/css-masking-1/)
- Latest published version: [http://www.w3.org/TR/css-masking-1/](http://www.w3.org/TR/css-masking-1/)
- Latest published status: [Candidate Recommendation](http://www.w3.org/TR/2014/CR-css-masking-1-20140826/)
- Repository: [GitHub w3c/fxtf-drafts](https://github.com/w3c/fxtf-drafts)
- Shortname: css-masking-1

### Potential issue(s) {.anomalies}

- No normative references found
- Spec uses WebIDL but does not reference it normatively
- Missing references for WebIDL names: 
     * `SVGElement` defined in [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
     * `SVGAnimatedEnumeration` defined in [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
     * `SVGAnimatedTransformList` defined in [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
     * `SVGAnimatedLength` defined in [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- Missing references for links: 
     * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css-overflow-3/`](https://www.w3.org/TR/css-overflow-3/)
     * [`https://www.w3.org/TR/css-shapes-1/`](https://www.w3.org/TR/css-shapes-1/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/)
     * [`https://www.w3.org/TR/css-shapes/`](https://www.w3.org/TR/css-shapes/)
     * [`https://www.w3.org/TR/css3-cascade/`](https://www.w3.org/TR/css3-cascade/)
     * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/)
     * [`https://www.w3.org/TR/filter-effects/`](https://www.w3.org/TR/filter-effects/)
     * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/)
     * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/)
     * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/)
     * [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
     * [`https://www.w3.org/TR/css4-images/`](https://www.w3.org/TR/css4-images/)
     * [`https://www.w3.org/TR/css3-text/`](https://www.w3.org/TR/css3-text/)
     * [`https://www.w3.org/TR/css-text-decor-3/`](https://www.w3.org/TR/css-text-decor-3/)
     * [`https://www.w3.org/TR/css3-transforms/`](https://www.w3.org/TR/css3-transforms/)
     * [`https://www.w3.org/TR/css3-images/`](https://www.w3.org/TR/css3-images/)
     * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
     * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
     * [`https://www.w3.org/TR/2013/WD-css-masking-20130620/`](https://www.w3.org/TR/2013/WD-css-masking-20130620/)
     * [`https://www.w3.org/TR/2012/WD-css-masking-20121115/`](https://www.w3.org/TR/2012/WD-css-masking-20121115/)
     * [`https://www.w3.org/TR/2013/WD-compositing-1-20130625/`](https://www.w3.org/TR/2013/WD-compositing-1-20130625/)
     * [`https://www.w3.org/TR/2013/WD-css-shapes-1-20130620/`](https://www.w3.org/TR/2013/WD-css-shapes-1-20130620/)
     * [`https://www.w3.org/TR/2011/REC-CSS2-20110607`](https://www.w3.org/TR/2011/REC-CSS2-20110607)
     * [`https://www.w3.org/TR/2012/WD-css3-transforms-20120911/`](https://www.w3.org/TR/2012/WD-css3-transforms-20120911/)
     * [`https://www.w3.org/TR/2012/CR-css3-background-20120724/`](https://www.w3.org/TR/2012/CR-css3-background-20120724/)
     * [`https://www.w3.org/TR/2013/CR-css3-values-20130730/`](https://www.w3.org/TR/2013/CR-css3-values-20130730/)
     * [`https://www.w3.org/TR/2013/CR-html5-20130806/`](https://www.w3.org/TR/2013/CR-html5-20130806/)
     * [`https://www.w3.org/TR/2011/REC-css3-color-20110607`](https://www.w3.org/TR/2011/REC-css3-color-20110607)
     * [`https://www.w3.org/TR/2013/WD-filter-effects-20130523/`](https://www.w3.org/TR/2013/WD-filter-effects-20130523/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Shapes Module Level 2](https://drafts.csswg.org/css-shapes-2/)
- [CSS Table Module Level 3](https://www.w3.org/TR/2017/WD-css-tables-3-20170307/)
- [CSS Transforms Module Level 1](https://www.w3.org/TR/2017/WD-css-transforms-1-20171130/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [Motion Path Module Level 1](https://www.w3.org/TR/2017/WD-motion-1-20170711/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)

Informative references to this spec from:

- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)


## CSS Mobile Text Size Adjustment Module Level 1 {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-size-adjust-1/) (5 July 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

No informative reference to this spec from other specs.


## CSS Multi-column Layout Module Level 1 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/) (28 May 2018)
- Editor's Draft: [https://drafts.csswg.org/css-multicol/](https://drafts.csswg.org/css-multicol/)
- Latest published version: [https://www.w3.org/TR/css-multicol-1/](https://www.w3.org/TR/css-multicol-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-multicol-1

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/2011/CR-css3-multicol-20110412/`](https://www.w3.org/TR/2011/CR-css3-multicol-20110412/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/2018/WD-css-align-3-20180830/)
- [CSS Grid Layout Module Level 2](https://www.w3.org/TR/2018/WD-css-grid-2-20180804/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Multi-column Layout Module Level 2](https://drafts.csswg.org/css-multicol-2/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)

Informative references to this spec from:

- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)


## CSS Multi-column Layout Module Level 2 {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-multicol-2/) (5 July 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Namespaces Module Level 3 {data-spec=true data-anomaly=true data-noNormativeRefs=true data-noCssDefinitions=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2014/REC-css-namespaces-3-20140320/) (20 March 2014)
- Editor's Draft: [https://drafts.csswg.org/css-namespaces/](https://drafts.csswg.org/css-namespaces/)
- Latest published version: [http://www.w3.org/TR/css-namespaces-3/](http://www.w3.org/TR/css-namespaces-3/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2014/REC-css-namespaces-3-20140320/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-namespaces-3

### Potential issue(s) {.anomalies}

- No normative references found
- No CSS definitions found
- Missing references for links: 
     * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/)
     * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/)
     * [`https://www.w3.org/TR/2011/REC-css3-namespace-20110929/`](https://www.w3.org/TR/2011/REC-css3-namespace-20110929/)
     * [`https://www.w3.org/TR/2011/REC-CSS2-20110607`](https://www.w3.org/TR/2011/REC-CSS2-20110607)
     * [`https://www.w3.org/TR/2009/REC-xml-names-20091208/`](https://www.w3.org/TR/2009/REC-xml-names-20091208/)
     * [`https://www.w3.org/TR/2011/REC-css3-selectors-20110929/`](https://www.w3.org/TR/2011/REC-css3-selectors-20110929/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [Selectors Level 3](https://www.w3.org/TR/2018/PR-selectors-3-20180911/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)

No informative reference to this spec from other specs.


## CSS Object Model (CSSOM) {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2016/WD-cssom-1-20160317/) (17 March 2016)
- Editor's Draft: [https://drafts.csswg.org/cssom/](https://drafts.csswg.org/cssom/)
- Latest published version: [http://www.w3.org/TR/cssom-1/](http://www.w3.org/TR/cssom-1/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: cssom-1

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Unknown WebIDL names used: `Window`
- Missing references for links: 
     * [`https://www.w3.org/TR/css-namespaces-3/`](https://www.w3.org/TR/css-namespaces-3/)
     * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css-pseudo-4/`](https://www.w3.org/TR/css-pseudo-4/), related reference "CSS-PSEUDO-4" uses URL [`http://dev.w3.org/csswg/css-pseudo-4/`](http://dev.w3.org/csswg/css-pseudo-4/)
     * [`https://www.w3.org/TR/mediaqueries-4/`](https://www.w3.org/TR/mediaqueries-4/), related reference "MEDIAQUERIES-4" uses URL [`http://www.w3.org/TR/2016/WD-mediaqueries-4-20160126/`](http://www.w3.org/TR/2016/WD-mediaqueries-4-20160126/)
     * [`https://www.w3.org/TR/css-display-3/`](https://www.w3.org/TR/css-display-3/), related reference "CSS-DISPLAY-3" uses URL [`http://dev.w3.org/csswg/css-display/`](http://dev.w3.org/csswg/css-display/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES" uses URL [`http://dev.w3.org/csswg/css-values/`](http://dev.w3.org/csswg/css-values/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Content Security Policy Level 3](https://www.w3.org/TR/2016/WD-CSP3-20160913/)
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [CSS Animations Level 1](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)
- [CSS Counter Styles Level 3](https://www.w3.org/TR/2017/CR-css-counter-styles-3-20171214/)
- [CSS Device Adaptation Module Level 1](http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Fonts Module Level 4](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Image Values and Replaced Content Module Level 4](https://www.w3.org/TR/2017/WD-css-images-4-20170413/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Logical Properties and Values Level 1](https://www.w3.org/TR/2018/WD-css-logical-1-20180827/)
- [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- [CSS Parser API](https://wicg.github.io/CSS-Parser-API/)
- [CSS Properties and Values API Level 1](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/)
- [CSS Pseudo-Elements Module Level 4](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Transforms Module Level 1](https://www.w3.org/TR/2017/WD-css-transforms-1-20171130/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [CSS Transitions](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [Referrer Policy](https://www.w3.org/TR/2017/CR-referrer-policy-20170126/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [CSS Fonts Module Level 3](https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/)

Informative references to this spec from:

- [Ambient Light Sensor](https://www.w3.org/TR/2018/CR-ambient-light-20180320/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Timing Functions Level 1](https://www.w3.org/TR/2018/WD-css-timing-1-20180926/)


## CSS Overflow Module Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/) (31 July 2018)
- Editor's Draft: [https://drafts.csswg.org/css-overflow-3/](https://drafts.csswg.org/css-overflow-3/)
- Latest published version: [https://www.w3.org/TR/css-overflow-3/](https://www.w3.org/TR/css-overflow-3/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-overflow-3

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css-backgrounds/`](https://www.w3.org/TR/css-backgrounds/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/)
     * [`https://www.w3.org/TR/css-logical-1/`](https://www.w3.org/TR/css-logical-1/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/)
     * [`https://www.w3.org/TR/css-overflow-4/`](https://www.w3.org/TR/css-overflow-4/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/2018/WD-css-align-3-20180830/)
- [CSS Containment Module Level 1](https://www.w3.org/TR/2018/CR-css-contain-1-20180524/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Grid Layout Module Level 2](https://www.w3.org/TR/2018/WD-css-grid-2-20180804/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Multi-column Layout Module Level 1](https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/)
- [CSS Overscroll Behavior Module Level 1](https://wicg.github.io/overscroll-behavior/)
- [CSS Positioned Layout Module Level 3](http://www.w3.org/TR/2016/WD-css-position-3-20160517/)
- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/)
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/2018/CR-css-scroll-snap-1-20180814/)
- [CSS Scrollbars Module Level 1](https://drafts.csswg.org/css-scrollbars-1/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Transforms Module Level 1](https://www.w3.org/TR/2017/WD-css-transforms-1-20171130/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

Informative references to this spec from:

- [CSS Fonts Module Level 4](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)
- [CSS Overflow Module Level 4](https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/)
- [Web Authentication: An API for accessing Public Key Credentials Level 1](https://www.w3.org/TR/2018/CR-webauthn-20180807/)


## CSS Overflow Module Level 4 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/) (13 June 2017)
- Editor's Draft: [https://drafts.csswg.org/css-overflow-4/](https://drafts.csswg.org/css-overflow-4/)
- Latest published version: [https://www.w3.org/TR/css-overflow-4/](https://www.w3.org/TR/css-overflow-4/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-overflow-4

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-regions/`](https://www.w3.org/TR/css3-regions/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/)
     * [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSSOM View Module](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)

Informative references to this spec from:

- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)


## CSS Overscroll Behavior Module Level 1 {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/overscroll-behavior/) (24 October 2017)
- Repository: [GitHub wicg/overscroll-behavior](https://github.com/wicg/overscroll-behavior)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css-display-3/`](https://www.w3.org/TR/css-display-3/)
     * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
     * [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Page Floats {data-spec=true data-anomaly=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2015/WD-css-page-floats-3-20150915/) (15 September 2015)
- Editor's Draft: [https://drafts.csswg.org/css-page-floats/](https://drafts.csswg.org/css-page-floats/)
- Latest published version: [http://www.w3.org/TR/css-page-floats-3/](http://www.w3.org/TR/css-page-floats-3/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2015/WD-css-page-floats-3-20150915/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-page-floats-3

### Potential issue(s) {.anomalies}

- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES" uses URL [`http://www.w3.org/TR/css-values/`](http://www.w3.org/TR/css-values/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

Informative references to this spec from:

- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)


## CSS Paged Media Module Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2013/WD-css3-page-20130314/) (14 March 2013)
- Editor's Draft: [https://drafts.csswg.org/css-page-3/](https://drafts.csswg.org/css-page-3/)
- Latest published version: [http://www.w3.org/TR/css3-page/](http://www.w3.org/TR/css3-page/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2013/WD-css3-page-20130314/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css3-page

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/), related reference "CSS3BG" uses URL [`http://www.w3.org/TR/2012/CR-css3-background-20120724/`](http://www.w3.org/TR/2012/CR-css3-background-20120724/)
     * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/), related reference "CSS3-WRITING-MODES" uses URL [`http://www.w3.org/TR/2012/WD-css3-writing-modes-20121115/`](http://www.w3.org/TR/2012/WD-css3-writing-modes-20121115/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/), related reference "CSS3-BREAK" uses URL [`http://www.w3.org/TR/2012/WD-css3-break-20120823/`](http://www.w3.org/TR/2012/WD-css3-break-20120823/)
     * [`https://www.w3.org/TR/css3-sizing/`](https://www.w3.org/TR/css3-sizing/), related reference "CSS3-SIZING" uses URL [`http://www.w3.org/TR/2012/WD-css3-sizing-20120927/`](http://www.w3.org/TR/2012/WD-css3-sizing-20120927/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS3VAL" uses URL [`http://www.w3.org/TR/2012/CR-css3-values-20120828/`](http://www.w3.org/TR/2012/CR-css3-values-20120828/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Device Adaptation Module Level 1](http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)

Informative references to this spec from:

- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Generated Content for Paged Media Module Level 4](https://drafts.csswg.org/css-gcpm-4/)
- [CSS Regions Module Level 1](http://www.w3.org/TR/2014/WD-css-regions-1-20141009/)


## CSS Painting API Level 1 {data-spec=true data-anomaly=true data-redefinedIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/) (9 August 2018)
- Editor's Draft: [https://drafts.css-houdini.org/css-paint-api-1/](https://drafts.css-houdini.org/css-paint-api-1/)
- Latest published version: [https://www.w3.org/TR/css-paint-api-1/](https://www.w3.org/TR/css-paint-api-1/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- Shortname: css-paint-api-1

### Potential issue(s) {.anomalies}

- WebIDL names also defined elsewhere: 
    * `Worklet` also defined in [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/) and [Worklets Level 1](http://www.w3.org/TR/2016/WD-worklets-1-20160607/)
- Missing references for links: 
     * [`https://www.w3.org/TR/css-properties-values-api-1/`](https://www.w3.org/TR/css-properties-values-api-1/)
     * [`https://www.w3.org/TR/css4-images/`](https://www.w3.org/TR/css4-images/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/), related reference "CSSOM-VIEW-1" uses URL [`https://www.w3.org/TR/cssom-view-1/`](https://www.w3.org/TR/cssom-view-1/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Console Standard](https://console.spec.whatwg.org/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [WebAssembly JavaScript Interface](https://www.w3.org/TR/2018/WD-wasm-js-api-1-20180904/)

Informative references to this spec from:

- [Worklets Level 1](http://www.w3.org/TR/2016/WD-worklets-1-20160607/)


## CSS Parser API {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/CSS-Parser-API/) (27 July 2018)
- Repository: [GitHub wicg/CSS-Parser-API](https://github.com/wicg/CSS-Parser-API)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `ReadableStream`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Positioned Layout Module Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2016/WD-css-position-3-20160517/) (17 May 2016)
- Editor's Draft: [https://drafts.csswg.org/css-position/](https://drafts.csswg.org/css-position/)
- Latest published version: [http://www.w3.org/TR/css-position-3/](http://www.w3.org/TR/css-position-3/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-css-position-3-20160517/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-position-3

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/2015/WD-css3-positioning-20150203/`](https://www.w3.org/TR/2015/WD-css3-positioning-20150203/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS3VAL" uses URL [`http://www.w3.org/TR/css-values/`](http://www.w3.org/TR/css-values/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/2018/WD-css-align-3-20180830/)
- [CSS Color Module Level 4](http://www.w3.org/TR/2016/WD-css-color-4-20160705/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Exclusions Module Level 1](https://drafts.csswg.org/css-exclusions-1/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Logical Properties and Values Level 1](https://www.w3.org/TR/2018/WD-css-logical-1-20180827/)
- [CSS Multi-column Layout Module Level 1](https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/)
- [CSS Overflow Module Level 4](https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/)
- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/)
- [CSS Table Module Level 3](https://www.w3.org/TR/2017/WD-css-tables-3-20170307/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Transforms Module Level 1](https://www.w3.org/TR/2017/WD-css-transforms-1-20171130/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [Motion Path Module Level 1](https://www.w3.org/TR/2017/WD-motion-1-20170711/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

Informative references to this spec from:

- [CSS Animations Level 1](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)
- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)
- [CSS Round Display Level 1](https://www.w3.org/TR/2016/WD-css-round-display-1-20161222/)


## CSS Properties and Values API Level 1 {data-spec=true data-anomaly=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/) (9 November 2017)
- Editor's Draft: [https://drafts.css-houdini.org/css-properties-values-api-1/](https://drafts.css-houdini.org/css-properties-values-api-1/)
- Latest published version: [https://www.w3.org/TR/css-properties-values-api-1/](https://www.w3.org/TR/css-properties-values-api-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/)
- Shortname: css-properties-values-api-1

### Potential issue(s) {.anomalies}

- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS3-VALUES" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)

Informative references to this spec from:

- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)


## CSS Pseudo-Elements Module Level 4 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-noCssDefinitions=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/) (7 June 2016)
- Editor's Draft: [https://drafts.csswg.org/css-pseudo-4/](https://drafts.csswg.org/css-pseudo-4/)
- Latest published version: [http://www.w3.org/TR/css-pseudo-4/](http://www.w3.org/TR/css-pseudo-4/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-pseudo-4

### Potential issue(s) {.anomalies}

- No CSS definitions found
- Spec uses WebIDL but does not reference it normatively
- Unknown WebIDL names used: `Window`
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-lists/`](https://www.w3.org/TR/css3-lists/)
     * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/)
     * [`https://www.w3.org/TR/css-color/`](https://www.w3.org/TR/css-color/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/)
- [CSS Generated Content Module Level 3](http://www.w3.org/TR/2016/WD-css-content-3-20160602/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Overflow Module Level 4](https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/)
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/2018/CR-css-scroll-snap-1-20180814/)
- [CSSOM View Module](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)

Informative references to this spec from:

- [CSS Basic User Interface Module Level 3 (CSS3 UI)](https://www.w3.org/TR/2018/REC-css-ui-3-20180621/)
- [CSS Counter Styles Level 3](https://www.w3.org/TR/2017/CR-css-counter-styles-3-20171214/)


## CSS Regions Module Level 1 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-hasInvalidIdl=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2014/WD-css-regions-1-20141009/) (9 October 2014)
- Editor's Draft: [https://drafts.csswg.org/css-regions/](https://drafts.csswg.org/css-regions/)
- Latest published version: [http://www.w3.org/TR/css-regions-1/](http://www.w3.org/TR/css-regions-1/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2014/WD-css-regions-1-20141009/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-regions-1

### Potential issue(s) {.anomalies}

- Invalid WebIDL content found
- Spec uses WebIDL but does not reference it normatively
- Missing references for links: 
     * [`https://www.w3.org/TR/mediaqueries-4/`](https://www.w3.org/TR/mediaqueries-4/)
     * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/)
     * [`https://www.w3.org/TR/css3-speech/`](https://www.w3.org/TR/css3-speech/)
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/)
     * [`https://www.w3.org/TR/css-overflow-3/`](https://www.w3.org/TR/css-overflow-3/)
     * [`https://www.w3.org/TR/2014/WD-css3-regions-20140218/`](https://www.w3.org/TR/2014/WD-css3-regions-20140218/)
     * [`https://www.w3.org/TR/2013/WD-css3-regions-20130528/`](https://www.w3.org/TR/2013/WD-css3-regions-20130528/)
     * [`https://www.w3.org/TR/2012/WD-css3-regions-20120823/`](https://www.w3.org/TR/2012/WD-css3-regions-20120823/)
     * [`https://www.w3.org/TR/2012/WD-css3-regions-20120503/`](https://www.w3.org/TR/2012/WD-css3-regions-20120503/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/2011/REC-CSS2-20110607/`](https://www.w3.org/TR/2011/REC-CSS2-20110607/), related reference "CSS21" uses URL [`http://www.w3.org/TR/2011/REC-CSS2-20110607`](http://www.w3.org/TR/2011/REC-CSS2-20110607)
     * [`https://www.w3.org/TR/2012/WD-dom-20120405/`](https://www.w3.org/TR/2012/WD-dom-20120405/), related reference "dom" uses URL [`http://www.w3.org/TR/dom/`](http://www.w3.org/TR/dom/)
     * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/), related reference "CSS3-WRITING-MODES" uses URL [`http://www.w3.org/TR/2012/WD-css3-writing-modes-20121115/`](http://www.w3.org/TR/2012/WD-css3-writing-modes-20121115/)
     * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/), related reference "dom" uses URL [`http://www.w3.org/TR/dom/`](http://www.w3.org/TR/dom/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)
- [CSS Generated Content for Paged Media Module Level 4](https://drafts.csswg.org/css-gcpm-4/)
- [CSS Multi-column Layout Module Level 2](https://drafts.csswg.org/css-multicol-2/)
- [CSS Overflow Module Level 4](https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

Informative references to this spec from:

- [CSS Containment Module Level 1](https://www.w3.org/TR/2018/CR-css-contain-1-20180524/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)


## CSS Rhythmic Sizing {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-css-rhythm-1-20170302/) (2 March 2017)
- Editor's Draft: [https://drafts.csswg.org/css-rhythm/](https://drafts.csswg.org/css-rhythm/)
- Latest published version: [https://www.w3.org/TR/css-rhythm-1/](https://www.w3.org/TR/css-rhythm-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-css-rhythm-1-20170302/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-rhythm-1

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

No informative reference to this spec from other specs.


## CSS Round Display Level 1 {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2016/WD-css-round-display-1-20161222/) (22 December 2016)
- Editor's Draft: [https://drafts.csswg.org/css-round-display/](https://drafts.csswg.org/css-round-display/)
- Latest published version: [https://www.w3.org/TR/css-round-display-1/](https://www.w3.org/TR/css-round-display-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2016/WD-css-round-display-1-20161222/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-round-display-1

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css-device-adapt/`](https://www.w3.org/TR/css-device-adapt/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

Informative references to this spec from:

- [Motion Path Module Level 1](https://www.w3.org/TR/2017/WD-motion-1-20170711/)


## CSS Ruby Layout Module Level 1 {data-spec=true data-anomaly=true data-noNormativeRefs=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2014/WD-css-ruby-1-20140805/) (5 August 2014)
- Editor's Draft: [https://drafts.csswg.org/css-ruby-1/](https://drafts.csswg.org/css-ruby-1/)
- Latest published version: [http://www.w3.org/TR/css-ruby-1/](http://www.w3.org/TR/css-ruby-1/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2014/WD-css-ruby-1-20140805/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-ruby-1

### Potential issue(s) {.anomalies}

- No normative references found
- Missing references for links: 
     * [`https://www.w3.org/TR/ruby/`](https://www.w3.org/TR/ruby/)
     * [`https://www.w3.org/TR/css-display/`](https://www.w3.org/TR/css-display/)
     * [`https://www.w3.org/TR/css3-text/`](https://www.w3.org/TR/css3-text/)
     * [`https://www.w3.org/TR/css-text-3/`](https://www.w3.org/TR/css-text-3/)
     * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/)
     * [`https://www.w3.org/TR/2011/REC-CSS2-20110607`](https://www.w3.org/TR/2011/REC-CSS2-20110607)
     * [`https://www.w3.org/TR/2014/WD-css-display-3-20140220/`](https://www.w3.org/TR/2014/WD-css-display-3-20140220/)
     * [`https://www.w3.org/TR/2012/WD-css3-text-20121113/`](https://www.w3.org/TR/2012/WD-css3-text-20121113/)
     * [`https://www.w3.org/TR/2013/WD-css3-fonts-20130212/`](https://www.w3.org/TR/2013/WD-css3-fonts-20130212/)
     * [`https://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/`](https://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/)
     * [`https://www.w3.org/TR/2012/WD-css3-writing-modes-20121115/`](https://www.w3.org/TR/2012/WD-css3-writing-modes-20121115/)
     * [`https://www.w3.org/TR/2013/CR-css3-values-20130730/`](https://www.w3.org/TR/2013/CR-css3-values-20130730/)
     * [`https://www.w3.org/TR/2012/NOTE-jlreq-20120403/`](https://www.w3.org/TR/2012/NOTE-jlreq-20120403/)
     * [`https://www.w3.org/TR/2001/REC-ruby-20010531`](https://www.w3.org/TR/2001/REC-ruby-20010531)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Backgrounds and Borders Module Level 4](https://drafts.csswg.org/css-backgrounds-4/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Grid Layout Module Level 2](https://www.w3.org/TR/2018/WD-css-grid-2-20180804/)
- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/2018/CR-css-text-decor-3-20180703/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

No informative reference to this spec from other specs.


## CSS Scoping Module Level 1 {data-spec=true data-anomaly=true data-noNormativeRefs=true data-noCssDefinitions=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2014/WD-css-scoping-1-20140403/) (3 April 2014)
- Editor's Draft: [https://drafts.csswg.org/css-scoping/](https://drafts.csswg.org/css-scoping/)
- Latest published version: [http://www.w3.org/TR/css-scoping-1/](http://www.w3.org/TR/css-scoping-1/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2014/WD-css-scoping-1-20140403/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-scoping-1

### Potential issue(s) {.anomalies}

- No normative references found
- No CSS definitions found
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-cascade/`](https://www.w3.org/TR/css3-cascade/)
     * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/)
     * [`https://www.w3.org/TR/css-cascade/`](https://www.w3.org/TR/css-cascade/)
     * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
     * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/)
     * [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
     * [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/)
     * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-text/`](https://www.w3.org/TR/css3-text/)
     * [`https://www.w3.org/TR/css-text-decor-3/`](https://www.w3.org/TR/css-text-decor-3/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/2011/REC-CSS2-20110607/`](https://www.w3.org/TR/2011/REC-CSS2-20110607/)
     * [`https://www.w3.org/TR/2011/REC-CSS2-20110607`](https://www.w3.org/TR/2011/REC-CSS2-20110607)
     * [`https://www.w3.org/TR/2013/CR-css-cascade-3-20131003/`](https://www.w3.org/TR/2013/CR-css-cascade-3-20131003/)
     * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
     * [`https://www.w3.org/TR/2013/WD-selectors4-20130502/`](https://www.w3.org/TR/2013/WD-selectors4-20130502/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)

No informative reference to this spec from other specs.


## CSS Scroll Anchoring Module Level 1 {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-scroll-anchoring-1/) (11 October 2017)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Scroll Snap Module Level 1 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-css-scroll-snap-1-20180814/) (14 August 2018)
- Editor's Draft: [https://drafts.csswg.org/css-scroll-snap-1/](https://drafts.csswg.org/css-scroll-snap-1/)
- Latest published version: [https://www.w3.org/TR/css-scroll-snap-1/](https://www.w3.org/TR/css-scroll-snap-1/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-css-scroll-snap-1-20180814/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-scroll-snap-1

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/)
     * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/), related reference "CSSOM-VIEW-1" uses URL [`https://www.w3.org/TR/cssom-view-1/`](https://www.w3.org/TR/cssom-view-1/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Logical Properties and Values Level 1](https://www.w3.org/TR/2018/WD-css-logical-1-20180827/)
- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

No informative reference to this spec from other specs.


## CSS Scrollbars Module Level 1 {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-scrollbars-1/) (25 September 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/)
     * [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

No informative reference to this spec from other specs.


## CSS Shadow Parts {data-spec=true data-anomaly=true data-noCssDefinitions=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-shadow-parts-1/) (26 September 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- No CSS definitions found

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Shapes Module Level 1 {data-spec=true data-anomaly=true data-noNormativeRefs=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2014/CR-css-shapes-1-20140320/) (20 March 2014)
- Editor's Draft: [https://drafts.csswg.org/css-shapes/](https://drafts.csswg.org/css-shapes/)
- Latest published version: [http://www.w3.org/TR/css-shapes-1/](http://www.w3.org/TR/css-shapes-1/)
- Latest published status: [Candidate Recommendation](http://www.w3.org/TR/2014/CR-css-shapes-1-20140320/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-shapes-1

### Potential issue(s) {.anomalies}

- No normative references found
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-images/`](https://www.w3.org/TR/css3-images/)
     * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
     * [`https://www.w3.org/TR/2012/WD-css3-exclusions-20120503/`](https://www.w3.org/TR/2012/WD-css3-exclusions-20120503/)
     * [`https://www.w3.org/TR/2011/WD-css3-exclusions-20111213/`](https://www.w3.org/TR/2011/WD-css3-exclusions-20111213/)
     * [`https://www.w3.org/TR/2011/REC-CSS2-20110607`](https://www.w3.org/TR/2011/REC-CSS2-20110607)
     * [`https://www.w3.org/TR/2012/CR-css3-background-20120724/`](https://www.w3.org/TR/2012/CR-css3-background-20120724/)
     * [`https://www.w3.org/TR/2007/WD-css3-box-20070809`](https://www.w3.org/TR/2007/WD-css3-box-20070809)
     * [`https://www.w3.org/TR/2013/CR-css3-values-20130730/`](https://www.w3.org/TR/2013/CR-css3-values-20130730/)
     * [`https://www.w3.org/TR/2013/CR-html5-20130806/`](https://www.w3.org/TR/2013/CR-html5-20130806/)
     * [`https://www.w3.org/TR/2013/WD-css-masking-20130620/`](https://www.w3.org/TR/2013/WD-css-masking-20130620/)
     * [`https://www.w3.org/TR/2013/WD-css3-exclusions-20130528/`](https://www.w3.org/TR/2013/WD-css3-exclusions-20130528/)
     * [`https://www.w3.org/TR/2013/WD-css3-transitions-20130212/`](https://www.w3.org/TR/2013/WD-css3-transitions-20130212/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)
- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)
- [CSS Round Display Level 1](https://www.w3.org/TR/2016/WD-css-round-display-1-20161222/)
- [CSS Shapes Module Level 2](https://drafts.csswg.org/css-shapes-2/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [Motion Path Module Level 1](https://www.w3.org/TR/2017/WD-motion-1-20170711/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)

Informative references to this spec from:

- [CSS Backgrounds and Borders Module Level 3](https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/)


## CSS Shapes Module Level 2 {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-shapes-2/) (10 September 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css-shapes/`](https://www.w3.org/TR/css-shapes/)
     * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

No informative reference to this spec from other specs.


## CSS Style Attributes {data-spec=true data-anomaly=true data-noCssDefinitions=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2013/REC-css-style-attr-20131107/) (07 November 2013)
- Editor's Draft: [https://drafts.csswg.org/css-style-attr/](https://drafts.csswg.org/css-style-attr/)
- Latest published version: [http://www.w3.org/TR/css-style-attr/](http://www.w3.org/TR/css-style-attr/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2013/REC-css-style-attr-20131107/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-style-attr

### Potential issue(s) {.anomalies}

- No CSS definitions found

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)

Informative references to this spec from:

- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)


## CSS Syntax Module Level 3 {data-spec=true data-anomaly=true data-noNormativeRefs=true data-noCssDefinitions=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2014/CR-css-syntax-3-20140220/) (20 February 2014)
- Editor's Draft: [https://drafts.csswg.org/css-syntax/](https://drafts.csswg.org/css-syntax/)
- Latest published version: [http://www.w3.org/TR/css-syntax-3/](http://www.w3.org/TR/css-syntax-3/)
- Latest published status: [Candidate Recommendation](http://www.w3.org/TR/2014/CR-css-syntax-3-20140220/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-syntax-3

### Potential issue(s) {.anomalies}

- No normative references found
- No CSS definitions found
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/)
     * [`https://www.w3.org/TR/css-text-decor-3/`](https://www.w3.org/TR/css-text-decor-3/)
     * [`https://www.w3.org/TR/css3-cascade/`](https://www.w3.org/TR/css3-cascade/)
     * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/)
     * [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
     * [`https://www.w3.org/TR/selectors-api/`](https://www.w3.org/TR/selectors-api/)
     * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/)
     * [`https://www.w3.org/TR/css3-transforms/`](https://www.w3.org/TR/css3-transforms/)
     * [`https://www.w3.org/TR/css3-2d-transforms/`](https://www.w3.org/TR/css3-2d-transforms/)
     * [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
     * [`https://www.w3.org/TR/css3-animations/`](https://www.w3.org/TR/css3-animations/)
     * [`https://www.w3.org/TR/2011/REC-CSS2-20110607`](https://www.w3.org/TR/2011/REC-CSS2-20110607)
     * [`https://www.w3.org/TR/2013/CR-css-cascade-3-20131003/`](https://www.w3.org/TR/2013/CR-css-cascade-3-20131003/)
     * [`https://www.w3.org/TR/2014/WD-encoding-20140128/`](https://www.w3.org/TR/2014/WD-encoding-20140128/)
     * [`https://www.w3.org/TR/2011/REC-css3-selectors-20110929/`](https://www.w3.org/TR/2011/REC-css3-selectors-20110929/)
     * [`https://www.w3.org/TR/2013/WD-css-variables-1-20130620/`](https://www.w3.org/TR/2013/WD-css-variables-1-20130620/)
     * [`https://www.w3.org/TR/2013/WD-css3-animations-20130219/`](https://www.w3.org/TR/2013/WD-css3-animations-20130219/)
     * [`https://www.w3.org/TR/2013/CR-css3-conditional-20130404/`](https://www.w3.org/TR/2013/CR-css3-conditional-20130404/)
     * [`https://www.w3.org/TR/2011/WD-cssom-20110712/`](https://www.w3.org/TR/2011/WD-cssom-20110712/)
     * [`https://www.w3.org/TR/2014/CR-html5-20140204/`](https://www.w3.org/TR/2014/CR-html5-20140204/)
     * [`https://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/`](https://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Animations Level 1](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Color Module Level 4](http://www.w3.org/TR/2016/WD-css-color-4-20160705/)
- [CSS Counter Styles Level 3](https://www.w3.org/TR/2017/CR-css-counter-styles-3-20171214/)
- [CSS Custom Properties for Cascading Variables Module Level 1](http://www.w3.org/TR/2015/CR-css-variables-1-20151203/)
- [CSS Device Adaptation Module Level 1](http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/)
- [CSS Environment Variables Module Level 1](https://drafts.csswg.org/css-env-1/)
- [CSS Fill and Stroke Module Level 3](https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/)
- [CSS Fonts Module Level 4](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- [CSS Parser API](https://wicg.github.io/CSS-Parser-API/)
- [CSS Properties and Values API Level 1](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [Intersection Observer](https://www.w3.org/TR/2017/WD-intersection-observer-20170914/)
- [Media Queries Level 4](https://www.w3.org/TR/2017/CR-mediaqueries-4-20170905/)
- [Resource Timing Level 2](https://www.w3.org/TR/2018/WD-resource-timing-2-20180518/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [Web App Manifest](https://www.w3.org/TR/2018/WD-appmanifest-20180906/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

No informative reference to this spec from other specs.


## CSS Table Module Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-css-tables-3-20170307/) (7 March 2017)
- Editor's Draft: [https://drafts.csswg.org/css-tables-3/](https://drafts.csswg.org/css-tables-3/)
- Latest published version: [https://www.w3.org/TR/css-tables-3/](https://www.w3.org/TR/css-tables-3/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-css-tables-3-20170307/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-tables-3

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
     * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

No informative reference to this spec from other specs.


## CSS Text Decoration Module Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-css-text-decor-3-20180703/) (03 July 2018)
- Editor's Draft: [https://drafts.csswg.org/css-text-decor-3/](https://drafts.csswg.org/css-text-decor-3/)
- Latest published version: [https://www.w3.org/TR/css-text-decor-3/](https://www.w3.org/TR/css-text-decor-3/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-css-text-decor-3-20180703/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-text-decor-3

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/)
     * [`https://www.w3.org/TR/css-transitions-1/`](https://www.w3.org/TR/css-transitions-1/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://www.w3.org/TR/1998/REC-CSS2-19980512`](https://www.w3.org/TR/1998/REC-CSS2-19980512), related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2/`](https://www.w3.org/TR/CSS2/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Fill and Stroke Module Level 3](https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Pseudo-Elements Module Level 4](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- [CSS Text Decoration Module Level 4](https://www.w3.org/TR/2018/WD-css-text-decor-4-20180313/)
- [CSS Transitions](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

Informative references to this spec from:

- [CSS Color Module Level 4](http://www.w3.org/TR/2016/WD-css-color-4-20160705/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)


## CSS Text Decoration Module Level 4 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-css-text-decor-4-20180313/) (13 March 2018)
- Editor's Draft: [https://drafts.csswg.org/css-text-decor-4/](https://drafts.csswg.org/css-text-decor-4/)
- Latest published version: [https://www.w3.org/TR/css-text-decor-4/](https://www.w3.org/TR/css-text-decor-4/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-text-decor-4-20180313/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-text-decor-4

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-text/`](https://www.w3.org/TR/css3-text/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css-text/`](https://www.w3.org/TR/css-text/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

No informative reference to this spec from other specs.


## CSS Text Module Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-css-text-3-20180920/) (20 September 2018)
- Editor's Draft: [https://drafts.csswg.org/css-text-3/](https://drafts.csswg.org/css-text-3/)
- Latest published version: [https://www.w3.org/TR/css-text-3/](https://www.w3.org/TR/css-text-3/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-text-3

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css-transitions-1/`](https://www.w3.org/TR/css-transitions-1/)
     * [`https://www.w3.org/TR/klreq/`](https://www.w3.org/TR/klreq/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-fonts/`](https://www.w3.org/TR/css3-fonts/), related reference "CSS3-FONTS" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
     * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/), related reference "CSS3-WRITING-MODES" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/2018/WD-css-align-3-20180830/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Counter Styles Level 3](https://www.w3.org/TR/2017/CR-css-counter-styles-3-20171214/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/)
- [CSS Fonts Module Level 4](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)
- [CSS Generated Content Module Level 3](http://www.w3.org/TR/2016/WD-css-content-3-20160602/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/)
- [CSS Logical Properties and Values Level 1](https://www.w3.org/TR/2018/WD-css-logical-1-20180827/)
- [CSS Mobile Text Size Adjustment Module Level 1](https://drafts.csswg.org/css-size-adjust-1/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Pseudo-Elements Module Level 4](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/2018/CR-css-text-decor-3-20180703/)
- [CSS Text Decoration Module Level 4](https://www.w3.org/TR/2018/WD-css-text-decor-4-20180313/)
- [CSS Text Module Level 4](https://www.w3.org/TR/2018/WD-css-text-4-20180920/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

Informative references to this spec from:

- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)
- [CSS Table Module Level 3](https://www.w3.org/TR/2017/WD-css-tables-3-20170307/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)


## CSS Text Module Level 4 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-css-text-4-20180920/) (20 September 2018)
- Editor's Draft: [https://drafts.csswg.org/css-text-4/](https://drafts.csswg.org/css-text-4/)
- Latest published version: [https://www.w3.org/TR/css-text-4/](https://www.w3.org/TR/css-text-4/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-text-4-20180920/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-text-4

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css-text/`](https://www.w3.org/TR/css-text/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Mobile Text Size Adjustment Module Level 1](https://drafts.csswg.org/css-size-adjust-1/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

No informative reference to this spec from other specs.


## CSS Timing Functions Level 1 {data-spec=true data-anomaly=true data-noCssDefinitions=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-css-timing-1-20180926/) (26 September 2018)
- Editor's Draft: [https://drafts.csswg.org/css-timing/](https://drafts.csswg.org/css-timing/)
- Latest published version: [https://www.w3.org/TR/css-timing-1/](https://www.w3.org/TR/css-timing-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-timing-1-20180926/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-timing-1

### Potential issue(s) {.anomalies}

- No CSS definitions found
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS3VAL" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Animations Level 1](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- [CSS Backgrounds and Borders Module Level 4](https://drafts.csswg.org/css-backgrounds-4/)
- [CSS Transitions](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)

Informative references to this spec from:

- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)


## CSS Transforms Module Level 1 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-css-transforms-1-20171130/) (30 November 2017)
- Editor's Draft: [https://drafts.csswg.org/css-transforms/](https://drafts.csswg.org/css-transforms/)
- Latest published version: [https://www.w3.org/TR/css-transforms-1/](https://www.w3.org/TR/css-transforms-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-css-transforms-1-20171130/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-transforms-1

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-2d-transforms/`](https://www.w3.org/TR/css3-2d-transforms/)
     * [`https://www.w3.org/TR/2009/WD-SVG-Transforms-20090320/`](https://www.w3.org/TR/2009/WD-SVG-Transforms-20090320/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/)
     * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/)
     * [`https://www.w3.org/TR/css3-animations/`](https://www.w3.org/TR/css3-animations/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/), related reference "CSSOM-VIEW" uses URL [`https://www.w3.org/TR/cssom-view-1/`](https://www.w3.org/TR/cssom-view-1/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://www.w3.org/TR/2003/REC-SVG11-20030114/`](https://www.w3.org/TR/2003/REC-SVG11-20030114/), related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)
     * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/), related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)
- [CSS Image Values and Replaced Content Module Level 4](https://www.w3.org/TR/2017/WD-css-images-4-20170413/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Positioned Layout Module Level 3](http://www.w3.org/TR/2016/WD-css-position-3-20160517/)
- [CSS Properties and Values API Level 1](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/)
- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/)
- [CSS Table Module Level 3](https://www.w3.org/TR/2017/WD-css-tables-3-20170307/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [CSS Transitions](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSSOM View Module](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)
- [Motion Path Module Level 1](https://www.w3.org/TR/2017/WD-motion-1-20170711/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)

Informative references to this spec from:

- [CSS Fonts Module Level 4](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [CSS Will Change Module Level 1](http://www.w3.org/TR/2015/CR-css-will-change-1-20151203/)


## CSS Transforms Module Level 2 {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-transforms-2/) (7 August 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Table Module Level 3](https://www.w3.org/TR/2017/WD-css-tables-3-20170307/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [Motion Path Module Level 1](https://www.w3.org/TR/2017/WD-motion-1-20170711/)

Informative references to this spec from:

- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)


## CSS Transitions {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/) (30 November 2017)
- Editor's Draft: [https://drafts.csswg.org/css-transitions/](https://drafts.csswg.org/css-transitions/)
- Latest published version: [https://www.w3.org/TR/css-transitions-1/](https://www.w3.org/TR/css-transitions-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-transitions-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `CSSOMString`, `EventHandler`, `GlobalEventHandlers`
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/2013/WD-css3-transitions-20131119/`](https://www.w3.org/TR/2013/WD-css3-transitions-20131119/)
     * [`https://www.w3.org/TR/2013/WD-css3-transitions-20130212/ChangeLog`](https://www.w3.org/TR/2013/WD-css3-transitions-20130212/ChangeLog)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://w3c.github.io/dom/`](https://w3c.github.io/dom/), related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

Informative references to this spec from:

- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)
- [CSS Basic User Interface Module Level 3 (CSS3 UI)](https://www.w3.org/TR/2018/REC-css-ui-3-20180621/)


## CSS Transitions Level 2 {data-spec=true data-anomaly=true data-hasUnexpectedIdl=true data-noCssDefinitions=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/css-transitions-2/) (25 October 2017)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- No CSS definitions found
- Unexpected WebIDL definitions found
- Unknown WebIDL names used: `CSSOMString`, `Window`
- Inconsistent references for links: 
     * [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/), related reference "WEB-ANIMATIONS" uses URL [`https://www.w3.org/TR/web-animations-1/`](https://www.w3.org/TR/web-animations-1/)

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


## CSS Typed OM Level 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/) (10 April 2018)
- Editor's Draft: [https://drafts.css-houdini.org/css-typed-om-1/](https://drafts.css-houdini.org/css-typed-om-1/)
- Latest published version: [https://www.w3.org/TR/css-typed-om-1/](https://www.w3.org/TR/css-typed-om-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- Shortname: css-typed-om-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMMatrix`, `DOMMatrixReadOnly`, `LayoutWorklet`, `Window`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/) or [Web Workers](http://www.w3.org/TR/2015/WD-workers-20150924/)
     * `PaintWorklet` defined in [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-animations/`](https://www.w3.org/TR/css3-animations/)
     * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/css4-images/`](https://www.w3.org/TR/css4-images/)
     * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/)
     * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/)
     * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/)
     * [`https://www.w3.org/TR/css3-regions/`](https://www.w3.org/TR/css3-regions/)
     * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/), related reference "CSSOM-VIEW-1" uses URL [`https://www.w3.org/TR/cssom-view-1/`](https://www.w3.org/TR/cssom-view-1/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- [CSS Parser API](https://wicg.github.io/CSS-Parser-API/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [Font Metrics API Level 1](https://drafts.css-houdini.org/font-metrics-api/)

No informative reference to this spec from other specs.


## CSS Values and Units Module Level 3 {data-spec=true data-anomaly=true data-noCssDefinitions=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-css-values-3-20180814/) (14 August 2018)
- Editor's Draft: [https://drafts.csswg.org/css-values-3/](https://drafts.csswg.org/css-values-3/)
- Latest published version: [https://www.w3.org/TR/css-values-3/](https://www.w3.org/TR/css-values-3/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-values-3

### Potential issue(s) {.anomalies}

- No CSS definitions found
- Missing references for links: 
     * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/)
     * [`https://www.w3.org/TR/css3-animations/`](https://www.w3.org/TR/css3-animations/)
     * [`https://www.w3.org/TR/css4-images/`](https://www.w3.org/TR/css4-images/)
     * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/)
     * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css-syntax/`](https://www.w3.org/TR/css-syntax/), related reference "CSS3SYN" uses URL [`https://www.w3.org/TR/css-syntax-3/`](https://www.w3.org/TR/css-syntax-3/)
     * [`https://www.w3.org/TR/css3-fonts/`](https://www.w3.org/TR/css3-fonts/), related reference "CSS3-FONTS" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://www.w3.org/TR/2016/CR-css-values-3-20160929/`](https://www.w3.org/TR/2016/CR-css-values-3-20160929/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://www.w3.org/TR/2015/CR-css-values-3-20150611/`](https://www.w3.org/TR/2015/CR-css-values-3-20150611/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://www.w3.org/TR/2013/CR-css3-values-20130730/`](https://www.w3.org/TR/2013/CR-css3-values-20130730/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://www.w3.org/TR/2012/CR-css3-values-20120828/`](https://www.w3.org/TR/2012/CR-css3-values-20120828/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://www.w3.org/TR/2013/CR-css3-values-20130404/`](https://www.w3.org/TR/2013/CR-css3-values-20130404/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Compositing and Blending Level 2](https://drafts.fxtf.org/compositing-2/)
- [CSS Animations Level 1](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- [CSS Backgrounds and Borders Module Level 3](https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/)
- [CSS Basic User Interface Module Level 3 (CSS3 UI)](https://www.w3.org/TR/2018/REC-css-ui-3-20180621/)
- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/2018/WD-css-align-3-20180830/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Color Module Level 4](http://www.w3.org/TR/2016/WD-css-color-4-20160705/)
- [CSS Containment Module Level 1](https://www.w3.org/TR/2018/CR-css-contain-1-20180524/)
- [CSS Counter Styles Level 3](https://www.w3.org/TR/2017/CR-css-counter-styles-3-20171214/)
- [CSS Custom Properties for Cascading Variables Module Level 1](http://www.w3.org/TR/2015/CR-css-variables-1-20151203/)
- [CSS Device Adaptation Module Level 1](http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Environment Variables Module Level 1](https://drafts.csswg.org/css-env-1/)
- [CSS Fill and Stroke Module Level 3](https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/)
- [CSS Fonts Module Level 3](https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/)
- [CSS Fonts Module Level 4](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)
- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)
- [CSS Generated Content Module Level 3](http://www.w3.org/TR/2016/WD-css-content-3-20160602/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Grid Layout Module Level 2](https://www.w3.org/TR/2018/WD-css-grid-2-20180804/)
- [CSS Image Values and Replaced Content Module Level 3](http://www.w3.org/TR/2012/CR-css3-images-20120417/)
- [CSS Image Values and Replaced Content Module Level 4](https://www.w3.org/TR/2017/WD-css-images-4-20170413/)
- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Mobile Text Size Adjustment Module Level 1](https://drafts.csswg.org/css-size-adjust-1/)
- [CSS Multi-column Layout Module Level 1](https://www.w3.org/TR/2018/WD-css-multicol-1-20180528/)
- [CSS Multi-column Layout Module Level 2](https://drafts.csswg.org/css-multicol-2/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Overflow Module Level 4](https://www.w3.org/TR/2017/WD-css-overflow-4-20170613/)
- [CSS Page Floats](http://www.w3.org/TR/2015/WD-css-page-floats-3-20150915/)
- [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- [CSS Positioned Layout Module Level 3](http://www.w3.org/TR/2016/WD-css-position-3-20160517/)
- [CSS Properties and Values API Level 1](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/)
- [CSS Rhythmic Sizing](https://www.w3.org/TR/2017/WD-css-rhythm-1-20170302/)
- [CSS Round Display Level 1](https://www.w3.org/TR/2016/WD-css-round-display-1-20161222/)
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/2018/CR-css-scroll-snap-1-20180814/)
- [CSS Scrollbars Module Level 1](https://drafts.csswg.org/css-scrollbars-1/)
- [CSS Shapes Module Level 2](https://drafts.csswg.org/css-shapes-2/)
- [CSS Table Module Level 3](https://www.w3.org/TR/2017/WD-css-tables-3-20170307/)
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/2018/CR-css-text-decor-3-20180703/)
- [CSS Text Decoration Module Level 4](https://www.w3.org/TR/2018/WD-css-text-decor-4-20180313/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Text Module Level 4](https://www.w3.org/TR/2018/WD-css-text-4-20180920/)
- [CSS Timing Functions Level 1](https://www.w3.org/TR/2018/WD-css-timing-1-20180926/)
- [CSS Transforms Module Level 1](https://www.w3.org/TR/2017/WD-css-transforms-1-20171130/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [CSS Transitions](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Will Change Module Level 1](http://www.w3.org/TR/2015/CR-css-will-change-1-20151203/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [CSSOM View Module](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)
- [Filter Effects Module Level 1](http://www.w3.org/TR/2014/WD-filter-effects-1-20141125/)
- [Intersection Observer](https://www.w3.org/TR/2017/WD-intersection-observer-20170914/)
- [Media Queries Level 4](https://www.w3.org/TR/2017/CR-mediaqueries-4-20170905/)
- [Motion Path Module Level 1](https://www.w3.org/TR/2017/WD-motion-1-20170711/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

Informative references to this spec from:

- [CSS Paged Media Module Level 3](http://www.w3.org/TR/2013/WD-css3-page-20130314/)


## CSS Values and Units Module Level 4 {data-spec=true data-anomaly=true data-noCssDefinitions=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-css-values-4-20180814/) (14 August 2018)
- Editor's Draft: [https://drafts.csswg.org/css-values/](https://drafts.csswg.org/css-values/)
- Latest published version: [https://www.w3.org/TR/css-values-4/](https://www.w3.org/TR/css-values-4/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-values-4

### Potential issue(s) {.anomalies}

- No CSS definitions found
- Missing references for links: 
     * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/)
     * [`https://www.w3.org/TR/css3-animations/`](https://www.w3.org/TR/css3-animations/)
     * [`https://www.w3.org/TR/css4-images/`](https://www.w3.org/TR/css4-images/)
     * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/)
     * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/)
     * [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css-syntax/`](https://www.w3.org/TR/css-syntax/), related reference "CSS3SYN" uses URL [`https://www.w3.org/TR/css-syntax-3/`](https://www.w3.org/TR/css-syntax-3/)
     * [`https://www.w3.org/TR/css3-fonts/`](https://www.w3.org/TR/css3-fonts/), related reference "CSS3-FONTS" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)
- [CSS Backgrounds and Borders Module Level 4](https://drafts.csswg.org/css-backgrounds-4/)
- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/2018/WD-css-align-3-20180830/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Environment Variables Module Level 1](https://drafts.csswg.org/css-env-1/)
- [CSS Exclusions Module Level 1](https://drafts.csswg.org/css-exclusions-1/)
- [CSS Fonts Module Level 4](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)
- [CSS Generated Content for Paged Media Module Level 4](https://drafts.csswg.org/css-gcpm-4/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Logical Properties and Values Level 1](https://www.w3.org/TR/2018/WD-css-logical-1-20180827/)
- [CSS Mobile Text Size Adjustment Module Level 1](https://drafts.csswg.org/css-size-adjust-1/)
- [CSS Multi-column Layout Module Level 2](https://drafts.csswg.org/css-multicol-2/)
- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/)
- [CSS Scrollbars Module Level 1](https://drafts.csswg.org/css-scrollbars-1/)
- [CSS Shadow Parts](https://drafts.csswg.org/css-shadow-parts-1/)
- [CSS Shapes Module Level 2](https://drafts.csswg.org/css-shapes-2/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Text Module Level 4](https://www.w3.org/TR/2018/WD-css-text-4-20180920/)
- [CSS Timing Functions Level 1](https://www.w3.org/TR/2018/WD-css-timing-1-20180926/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [Filter Effects Module Level 2](https://drafts.fxtf.org/filter-effects-2/)
- [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/)
- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)
- [WebAssembly JavaScript Interface](https://www.w3.org/TR/2018/WD-wasm-js-api-1-20180904/)

No informative reference to this spec from other specs.


## CSS Will Change Module Level 1 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2015/CR-css-will-change-1-20151203/) (03 December 2015)
- Editor's Draft: [https://drafts.csswg.org/css-will-change/](https://drafts.csswg.org/css-will-change/)
- Latest published version: [http://www.w3.org/TR/css-will-change-1/](http://www.w3.org/TR/css-will-change-1/)
- Latest published status: [Candidate Recommendation](http://www.w3.org/TR/2015/CR-css-will-change-1-20151203/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-will-change-1

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES" uses URL [`http://www.w3.org/TR/css-values/`](http://www.w3.org/TR/css-values/)
     * [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/), related reference "CSS-VALUES" uses URL [`http://www.w3.org/TR/css-values/`](http://www.w3.org/TR/css-values/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Animations Level 1](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)

No informative reference to this spec from other specs.


## CSS Writing Modes Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/) (24 May 2018)
- Editor's Draft: [https://drafts.csswg.org/css-writing-modes-3/](https://drafts.csswg.org/css-writing-modes-3/)
- Latest published version: [https://www.w3.org/TR/css-writing-modes-3/](https://www.w3.org/TR/css-writing-modes-3/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-writing-modes-3

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css-logical-1/`](https://www.w3.org/TR/css-logical-1/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/css3-flexbox/`](https://www.w3.org/TR/css3-flexbox/)
     * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Basic User Interface Module Level 3 (CSS3 UI)](https://www.w3.org/TR/2018/REC-css-ui-3-20180621/)
- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/2018/WD-css-align-3-20180830/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Counter Styles Level 3](https://www.w3.org/TR/2017/CR-css-counter-styles-3-20171214/)
- [CSS Device Adaptation Module Level 1](http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/)
- [CSS Exclusions Module Level 1](https://drafts.csswg.org/css-exclusions-1/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/)
- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Logical Properties and Values Level 1](https://www.w3.org/TR/2018/WD-css-logical-1-20180827/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Page Floats](http://www.w3.org/TR/2015/WD-css-page-floats-3-20150915/)
- [CSS Positioned Layout Module Level 3](http://www.w3.org/TR/2016/WD-css-position-3-20160517/)
- [CSS Pseudo-Elements Module Level 4](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- [CSS Regions Module Level 1](http://www.w3.org/TR/2014/WD-css-regions-1-20141009/)
- [CSS Text Decoration Module Level 4](https://www.w3.org/TR/2018/WD-css-text-decor-4-20180313/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSSOM View Module](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)
- [Media Queries Level 4](https://www.w3.org/TR/2017/CR-mediaqueries-4-20170905/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

Informative references to this spec from:

- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)
- [CSS Paged Media Module Level 3](http://www.w3.org/TR/2013/WD-css3-page-20130314/)


## CSS Writing Modes Level 4 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/) (24 May 2018)
- Editor's Draft: [https://drafts.csswg.org/css-writing-modes-4/](https://drafts.csswg.org/css-writing-modes-4/)
- Latest published version: [https://www.w3.org/TR/css-writing-modes-4/](https://www.w3.org/TR/css-writing-modes-4/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-writing-modes-4

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css-logical-1/`](https://www.w3.org/TR/css-logical-1/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/css-text/`](https://www.w3.org/TR/css-text/)
     * [`https://www.w3.org/TR/css3-flexbox/`](https://www.w3.org/TR/css3-flexbox/)
     * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/2015/CR-css-writing-modes-3-20151215/`](https://www.w3.org/TR/2015/CR-css-writing-modes-3-20151215/)
     * [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/2018/WD-css-align-3-20180830/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/)
- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/2017/CR-css-break-3-20170209/)
- [CSS Grid Layout Module Level 2](https://www.w3.org/TR/2018/WD-css-grid-2-20180804/)
- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 4](https://drafts.csswg.org/css-sizing-4/)
- [CSS Logical Properties and Values Level 1](https://www.w3.org/TR/2018/WD-css-logical-1-20180827/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Rhythmic Sizing](https://www.w3.org/TR/2017/WD-css-rhythm-1-20170302/)
- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/)
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/2018/CR-css-scroll-snap-1-20180814/)
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/2018/CR-css-text-decor-3-20180703/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Text Module Level 4](https://www.w3.org/TR/2018/WD-css-text-4-20180920/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

No informative reference to this spec from other specs.


## CSSOM View Module {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/) (17 March 2016)
- Editor's Draft: [https://drafts.csswg.org/cssom-view/](https://drafts.csswg.org/cssom-view/)
- Latest published version: [http://www.w3.org/TR/cssom-view-1/](http://www.w3.org/TR/cssom-view-1/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: cssom-view-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMPoint`, `DOMPointInit`, `DOMQuad`, `DOMQuadInit`, `DOMRect`, `DOMRectReadOnly`, `EventHandler`, `HTMLElement`, `HTMLImageElement`, `Window`
- Missing references for WebIDL names: 
     * `MouseEvent` defined in [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
     * `MouseEventInit` defined in [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- Missing references for links: 
     * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/)
     * [`https://www.w3.org/TR/geometry-1/`](https://www.w3.org/TR/geometry-1/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/), related reference "CSS-WRITING-MODES-3" uses URL [`http://dev.w3.org/csswg/css-writing-modes-3/`](http://dev.w3.org/csswg/css-writing-modes-3/)
     * [`https://www.w3.org/TR/css-display-3/`](https://www.w3.org/TR/css-display-3/), related reference "CSS-DISPLAY-3" uses URL [`http://dev.w3.org/csswg/css-display/`](http://dev.w3.org/csswg/css-display/)
     * [`https://www.w3.org/TR/css-pseudo-4/`](https://www.w3.org/TR/css-pseudo-4/), related reference "CSS-PSEUDO-4" uses URL [`http://dev.w3.org/csswg/css-pseudo-4/`](http://dev.w3.org/csswg/css-pseudo-4/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES" uses URL [`http://dev.w3.org/csswg/css-values/`](http://dev.w3.org/csswg/css-values/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/)
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/2018/CR-css-scroll-snap-1-20180814/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [Intersection Observer](https://www.w3.org/TR/2017/WD-intersection-observer-20170914/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [Media Queries Level 4](https://www.w3.org/TR/2017/CR-mediaqueries-4-20170905/)
- [PointerEvents - Level 2 - Extensions](https://w3c.github.io/pointerevents/extension.html)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)
- [The Screen Orientation API](https://www.w3.org/TR/2018/WD-screen-orientation-20180926/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [User Interface Security and the Visibility API](http://www.w3.org/TR/2016/WD-UISecurity-20160607/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)

Informative references to this spec from:

- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Regions Module Level 1](http://www.w3.org/TR/2014/WD-css-regions-1-20141009/)
- [CSS Transforms Module Level 1](https://www.w3.org/TR/2017/WD-css-transforms-1-20171130/)
- [Pointer Events](https://www.w3.org/TR/2018/CR-pointerevents2-20180522/)
- [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- [Web App Manifest](https://www.w3.org/TR/2018/WD-appmanifest-20180906/)


## DeviceOrientation Event Specification {data-spec=true data-anomaly=true data-noNormativeRefs=true data-noRefToWebIDL=true data-noIdlContent=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/NOTE-orientation-event-20170530/) (30 May 2017)
- Editor's Draft: [https://w3c.github.io/deviceorientation/spec-source-orientation.html](https://w3c.github.io/deviceorientation/spec-source-orientation.html)
- Latest published version: [https://www.w3.org/TR/orientation-event/](https://www.w3.org/TR/orientation-event/)
- Latest published status: [Retired](https://www.w3.org/TR/2017/NOTE-orientation-event-20170530/)
- Repository: [GitHub w3c/deviceorientation](https://github.com/w3c/deviceorientation)
- Shortname: orientation-event

### Potential issue(s) {.anomalies}

- No normative references found
- No WebIDL definitions found
- Missing references for links: 
     * [`https://www.w3.org/TR/2016/REC-geolocation-API-20161108/`](https://www.w3.org/TR/2016/REC-geolocation-API-20161108/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Generic Sensor API](https://www.w3.org/TR/2018/CR-generic-sensor-20180320/)
- [The Screen Orientation API](https://www.w3.org/TR/2018/WD-screen-orientation-20180926/)


## DOM Parsing and Serialization {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2016/WD-DOM-Parsing-20160517/) (and similar APIs)
- Editor's Draft: [https://w3c.github.io/DOM-Parsing/](https://w3c.github.io/DOM-Parsing/)
- Latest published version: [http://www.w3.org/TR/DOM-Parsing/](http://www.w3.org/TR/DOM-Parsing/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-DOM-Parsing-20160517/)
- Repository: [GitHub w3c/DOM-Parsing](https://github.com/w3c/DOM-Parsing)
- Shortname: DOM-Parsing

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `SupportedType`
- Missing references for WebIDL names: 
     * `Document` defined in [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
     * `Node` defined in [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
     * `Element` defined in [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
     * `Range` defined in [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
     * `DocumentFragment` defined in [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- Missing references for links: 
     * [`https://domparsing.spec.whatwg.org/`](https://domparsing.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Informative references to this spec from:

- [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)


## Encoding {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-encoding-20180327/) (27 March 2018)
- Editor's Draft: [https://encoding.spec.whatwg.org/](https://encoding.spec.whatwg.org/)
- Latest published version: [https://www.w3.org/TR/encoding/](https://www.w3.org/TR/encoding/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-encoding-20180327/)
- Shortname: encoding

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/) or [Web Workers](http://www.w3.org/TR/2015/WD-workers-20150924/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Cookie Store API](https://wicg.github.io/cookie-store/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [Encrypted Media Extensions](https://www.w3.org/TR/2017/REC-encrypted-media-20170918/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File API](https://www.w3.org/TR/2017/WD-FileAPI-20171026/)
- [Push API](https://www.w3.org/TR/2017/WD-push-api-20171215/)
- [URL Standard](https://url.spec.whatwg.org/)
- [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- [Web App Manifest](https://www.w3.org/TR/2018/WD-appmanifest-20180906/)
- [Web Authentication: An API for accessing Public Key Credentials Level 1](https://www.w3.org/TR/2018/CR-webauthn-20180807/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web NFC API](https://w3c.github.io/web-nfc/)
- [WebAssembly JavaScript Interface](https://www.w3.org/TR/2018/WD-wasm-js-api-1-20180904/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

No informative reference to this spec from other specs.


## Encrypted Media Extensions {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/REC-encrypted-media-20170918/) (18 September 2017)
- Editor's Draft: [https://w3c.github.io/encrypted-media/](https://w3c.github.io/encrypted-media/)
- Latest published version: [https://www.w3.org/TR/encrypted-media/](https://www.w3.org/TR/encrypted-media/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2017/REC-encrypted-media-20170918/)
- Repository: [GitHub w3c/encrypted-media](https://github.com/w3c/encrypted-media)
- Shortname: encrypted-media

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `HTMLMediaElement`, `Navigator`
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/), related reference "DOM" uses URL [`https://www.w3.org/TR/2015/REC-dom-20151119/`](https://www.w3.org/TR/2015/REC-dom-20151119/)
     * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/), related reference "ENCODING" uses URL [`https://www.w3.org/TR/2017/CR-encoding-20170413/`](https://www.w3.org/TR/2017/CR-encoding-20170413/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Secure Contexts](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/)


## Feature Policy {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/feature-policy/) (20 September 2018)
- Repository: [GitHub wicg/feature-policy](https://github.com/wicg/feature-policy)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `HTMLIFrameElement`
- Missing references for WebIDL names: 
     * `ReportBody` defined in [Reporting API 1](https://w3c.github.io/reporting/)
- Missing references for links: 
     * [`https://w3c.github.io/reporting/`](https://w3c.github.io/reporting/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/), related reference "CSP-3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [Generic Sensor API](https://www.w3.org/TR/2018/CR-generic-sensor-20180320/)
- [Wake Lock API](https://www.w3.org/TR/2017/CR-wake-lock-20171214/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Informative references to this spec from:

- [Web Authentication: An API for accessing Public Key Credentials Level 1](https://www.w3.org/TR/2018/CR-webauthn-20180807/)


## Fetch Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://fetch.spec.whatwg.org/) (10 September 2018)
- Repository: [GitHub whatwg/fetch](https://github.com/whatwg/fetch)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `AbortSignal`, `ReadableStream`, `Window`, `WindowOrWorkerGlobalScope`
- Missing references for links: 
     * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Beacon](https://www.w3.org/TR/2017/CR-beacon-20170413/)
- [Content Security Policy Level 3](https://www.w3.org/TR/2016/WD-CSP3-20160913/)
- [Content Security Policy: Embedded Enforcement](https://www.w3.org/TR/2016/WD-csp-embedded-enforcement-20160909/)
- [Cookie Store API](https://wicg.github.io/cookie-store/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Credential Management Level 1](https://www.w3.org/TR/2017/WD-credential-management-1-20170804/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Fonts Module Level 3](https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [File API](https://www.w3.org/TR/2017/WD-FileAPI-20171026/)
- [Media Session Standard](https://wicg.github.io/mediasession/)
- [Mixed Content](https://www.w3.org/TR/2016/CR-mixed-content-20160802/)
- [Navigation Timing Level 2](https://www.w3.org/TR/2018/WD-navigation-timing-2-20180926/)
- [Preload](https://www.w3.org/TR/2017/CR-preload-20171026/)
- [Referrer Policy](https://www.w3.org/TR/2017/CR-referrer-policy-20170126/)
- [Reporting API 1](https://w3c.github.io/reporting/)
- [Resource Timing Level 2](https://www.w3.org/TR/2018/WD-resource-timing-2-20180518/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/)
- [Subresource Integrity](http://www.w3.org/TR/2016/REC-SRI-20160623/)
- [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- [Web App Manifest](https://www.w3.org/TR/2018/WD-appmanifest-20180906/)
- [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/)
- [Web Authentication: An API for accessing Public Key Credentials Level 1](https://www.w3.org/TR/2018/CR-webauthn-20180807/)
- [WebAssembly Web API](https://www.w3.org/TR/2018/WD-wasm-web-api-1-20180904/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/2018/CR-webrtc-20180927/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Informative references to this spec from:

- [Payment Request API](https://www.w3.org/TR/2018/CR-payment-request-20180830/)
- [Server Timing](https://www.w3.org/TR/2018/WD-server-timing-20180926/)
- [Streams Standard](https://streams.spec.whatwg.org/)


## File and Directory Entries API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/entries-api/) (27 August 2018)
- Repository: [GitHub wicg/entries-api](https://github.com/wicg/entries-api)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DataTransferItem`, `HTMLInputElement`
- Inconsistent references for links: 
     * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/), related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## File API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-FileAPI-20171026/) (26 October 2017)
- Editor's Draft: [https://w3c.github.io/FileAPI/](https://w3c.github.io/FileAPI/)
- Latest published version: [https://www.w3.org/TR/FileAPI/](https://www.w3.org/TR/FileAPI/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-FileAPI-20171026/)
- Repository: [GitHub w3c/FileAPI](https://github.com/w3c/FileAPI)
- Shortname: FileAPI

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/) or [Web Workers](http://www.w3.org/TR/2015/WD-workers-20150924/)
     * `DedicatedWorker` defined in [Web Workers](http://www.w3.org/TR/2015/WD-workers-20150924/)
     * `SharedWorker` defined in [Web Workers](http://www.w3.org/TR/2015/WD-workers-20150924/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/dom/`](https://w3c.github.io/dom/), related reference "DOM" uses URL [`https://www.w3.org/TR/dom41/`](https://www.w3.org/TR/dom41/)
     * [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/), related reference "Encoding" uses URL [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/)
     * [`https://w3c.github.io/html/`](https://w3c.github.io/html/), related reference "HTML" uses URL [`https://www.w3.org/TR/html52/`](https://www.w3.org/TR/html52/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- ["MediaStream Image Capture"](https://www.w3.org/TR/2017/WD-image-capture-20170621/)
- [Beacon](https://www.w3.org/TR/2017/CR-beacon-20170413/)
- [Clipboard API and events](https://www.w3.org/TR/2017/WD-clipboard-apis-20170929/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File and Directory Entries API](https://wicg.github.io/entries-api/)
- [Indexed Database API 2.0](https://www.w3.org/TR/2018/REC-IndexedDB-2-20180130/)
- [Media Source Extensions™](https://www.w3.org/TR/2016/REC-media-source-20161117/)
- [MediaStream Recording](https://www.w3.org/TR/2017/WD-mediastream-recording-20170621/)
- [Presentation API](https://www.w3.org/TR/2017/CR-presentation-api-20170601/)
- [Push API](https://www.w3.org/TR/2017/WD-push-api-20171215/)
- [URL Standard](https://url.spec.whatwg.org/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/2018/CR-webrtc-20180927/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Informative references to this spec from:

- [HTML Media Capture](https://www.w3.org/TR/2018/REC-html-media-capture-20180201/)
- [Web Cryptography API](https://www.w3.org/TR/2017/REC-WebCryptoAPI-20170126/)
- [Web Workers](http://www.w3.org/TR/2015/WD-workers-20150924/)


## Filter Effects Module Level 1 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-hasInvalidIdl=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2014/WD-filter-effects-1-20141125/) (25 November 2014)
- Editor's Draft: [https://drafts.fxtf.org/filter-effects/](https://drafts.fxtf.org/filter-effects/)
- Latest published version: [http://www.w3.org/TR/filter-effects-1/](http://www.w3.org/TR/filter-effects-1/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2014/WD-filter-effects-1-20141125/)
- Repository: [GitHub w3c/fxtf-drafts](https://github.com/w3c/fxtf-drafts)
- Shortname: filter-effects-1

### Potential issue(s) {.anomalies}

- Invalid WebIDL content found
- Spec uses WebIDL but does not reference it normatively
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-images/`](https://www.w3.org/TR/css3-images/)
     * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/)
     * [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/)
     * [`https://www.w3.org/TR/css-masking-1/`](https://www.w3.org/TR/css-masking-1/)
     * [`https://www.w3.org/TR/css3-ui/`](https://www.w3.org/TR/css3-ui/)
     * [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
     * [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
     * [`https://www.w3.org/TR/css4-images/`](https://www.w3.org/TR/css4-images/)
     * [`https://www.w3.org/TR/css-text-3/`](https://www.w3.org/TR/css-text-3/)
     * [`https://www.w3.org/TR/css-overflow-3/`](https://www.w3.org/TR/css-overflow-3/)
     * [`https://www.w3.org/TR/css-text-decor-3/`](https://www.w3.org/TR/css-text-decor-3/)
     * [`https://www.w3.org/TR/css-syntax-3/`](https://www.w3.org/TR/css-syntax-3/)
     * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/)
     * [`https://www.w3.org/TR/css-cascade-3/`](https://www.w3.org/TR/css-cascade-3/)
     * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/)
     * [`https://www.w3.org/TR/2012/WD-filter-effects-20121025/`](https://www.w3.org/TR/2012/WD-filter-effects-20121025/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/), related reference "CSS3BG" uses URL [`http://www.w3.org/TR/2012/CR-css3-background-20120724/`](http://www.w3.org/TR/2012/CR-css3-background-20120724/)
     * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/), related reference "SVG11" uses URL [`http://www.w3.org/TR/SVG11/`](http://www.w3.org/TR/SVG11/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS3VAL" uses URL [`http://www.w3.org/TR/2013/CR-css3-values-20130730/`](http://www.w3.org/TR/2013/CR-css3-values-20130730/)
     * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/), related reference "CSS3COLOR" uses URL [`http://www.w3.org/TR/2011/REC-css3-color-20110607`](http://www.w3.org/TR/2011/REC-css3-color-20110607)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Color Module Level 4](http://www.w3.org/TR/2016/WD-css-color-4-20160705/)
- [CSS Table Module Level 3](https://www.w3.org/TR/2017/WD-css-tables-3-20170307/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [Filter Effects Module Level 2](https://drafts.fxtf.org/filter-effects-2/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)

No informative reference to this spec from other specs.


## Filter Effects Module Level 2 {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.fxtf.org/filter-effects-2/) (9 November 2017)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

No informative reference to this spec from other specs.


## Font Metrics API Level 1 {data-spec=true data-anomaly=true data-hasInvalidIdl=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.css-houdini.org/font-metrics-api/) (9 November 2017)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Invalid WebIDL content found

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Fullscreen API Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://fullscreen.spec.whatwg.org/) (11 September 2018)
- Repository: [GitHub whatwg/fullscreen](https://github.com/whatwg/fullscreen)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`
- Missing references for links: 
     * [`https://w3c.github.io/screen-orientation/`](https://w3c.github.io/screen-orientation/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Feature Policy](https://wicg.github.io/feature-policy/)
- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)
- [The Screen Orientation API](https://www.w3.org/TR/2018/WD-screen-orientation-20180926/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)

Informative references to this spec from:

- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)
- [Pointer Lock 2.0](https://www.w3.org/TR/2018/WD-pointerlock-2-20180208/)
- [Secure Contexts](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/)
- [Web App Manifest](https://www.w3.org/TR/2018/WD-appmanifest-20180906/)


## Gamepad {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-gamepad-20180926/) (26 September 2018)
- Editor's Draft: [https://w3c.github.io/gamepad/](https://w3c.github.io/gamepad/)
- Latest published version: [https://www.w3.org/TR/gamepad/](https://www.w3.org/TR/gamepad/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-gamepad-20180926/)
- Repository: [GitHub w3c/gamepad](https://github.com/w3c/gamepad)
- Shortname: gamepad

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Navigator`, `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Generic Sensor API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-generic-sensor-20180320/) (20 March 2018)
- Editor's Draft: [https://w3c.github.io/sensors/](https://w3c.github.io/sensors/)
- Latest published version: [https://www.w3.org/TR/generic-sensor/](https://www.w3.org/TR/generic-sensor/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-generic-sensor-20180320/)
- Repository: [GitHub w3c/sensors](https://github.com/w3c/sensors)
- Shortname: generic-sensor

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/page-visibility-2/`](https://www.w3.org/TR/page-visibility-2/), related reference "PAGE-VISIBILITY" uses URL [`https://www.w3.org/TR/page-visibility/`](https://www.w3.org/TR/page-visibility/)
     * [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/), related reference "PERMISSIONS" uses URL [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/)
     * [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/), related reference "HR-TIME-2" uses URL [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Accelerometer](https://www.w3.org/TR/2018/CR-accelerometer-20180320/)
- [Ambient Light Sensor](https://www.w3.org/TR/2018/CR-ambient-light-20180320/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [Gyroscope](https://www.w3.org/TR/2018/CR-gyroscope-20180320/)
- [Magnetometer](https://www.w3.org/TR/2018/CR-magnetometer-20180320/)
- [Orientation Sensor](https://www.w3.org/TR/2018/CR-orientation-sensor-20180320/)
- [Proximity Sensor](http://www.w3.org/TR/2016/WD-proximity-20160719/)

Informative references to this spec from:

- [Generic Sensor API](https://www.w3.org/TR/2018/CR-generic-sensor-20180320/)


## Geolocation API Specification 2nd Edition {data-spec=true data-anomaly=true data-unknownIdlNames=true data-noEdDraft=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2016/REC-geolocation-API-20161108/) (31 January 2018))
- Latest published version: [https://www.w3.org/TR/geolocation-API/](https://www.w3.org/TR/geolocation-API/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2016/REC-geolocation-API-20161108/)
- Shortname: geolocation-API

### Potential issue(s) {.anomalies}

- Link to an Editor's Draft not found
- Unknown WebIDL names used: `Navigator`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Web Authentication: An API for accessing Public Key Credentials Level 1](https://www.w3.org/TR/2018/CR-webauthn-20180807/)

Informative references to this spec from:

- [Generic Sensor API](https://www.w3.org/TR/2018/CR-generic-sensor-20180320/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)
- [Secure Contexts](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/)


## Geolocation Sensor {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/geolocation-sensor/) (28 September 2018)
- Repository: [GitHub wicg/geolocation-sensor](https://github.com/wicg/geolocation-sensor)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `AbortSignal`, `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Geometry Interfaces Module Level 1 {data-spec=true data-anomaly=true data-hasInvalidIdl=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2014/CR-geometry-1-20141125/) (25 November 2014)
- Editor's Draft: [https://drafts.fxtf.org/geometry/](https://drafts.fxtf.org/geometry/)
- Latest published version: [http://www.w3.org/TR/geometry-1/](http://www.w3.org/TR/geometry-1/)
- Latest published status: [Candidate Recommendation](http://www.w3.org/TR/2014/CR-geometry-1-20141125/)
- Repository: [GitHub w3c/fxtf-drafts](https://github.com/w3c/fxtf-drafts)
- Shortname: geometry-1

### Potential issue(s) {.anomalies}

- Invalid WebIDL content found
- Missing references for links: 
     * [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
     * [`https://www.w3.org/TR/css-transforms-1/`](https://www.w3.org/TR/css-transforms-1/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/)
- Inconsistent references for links: 
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/), related reference "html5" uses URL [`http://www.w3.org/TR/html5/`](http://www.w3.org/TR/html5/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [Intersection Observer](https://www.w3.org/TR/2017/WD-intersection-observer-20170914/)
- [Orientation Sensor](https://www.w3.org/TR/2018/CR-orientation-sensor-20180320/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [User Interface Security and the Visibility API](http://www.w3.org/TR/2016/WD-UISecurity-20160607/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)
- [WebXR Device API](https://immersive-web.github.io/webxr/)

No informative reference to this spec from other specs.


## Gyroscope {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-gyroscope-20180320/) (20 March 2018)
- Editor's Draft: [https://w3c.github.io/gyroscope/](https://w3c.github.io/gyroscope/)
- Latest published version: [https://www.w3.org/TR/gyroscope/](https://www.w3.org/TR/gyroscope/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-gyroscope-20180320/)
- Repository: [GitHub w3c/gyroscope](https://github.com/w3c/gyroscope)
- Shortname: gyroscope

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
- Missing references for links: 
     * [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Orientation Sensor](https://www.w3.org/TR/2018/CR-orientation-sensor-20180320/)

Informative references to this spec from:

- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)


## High Resolution Time Level 3 {data-spec=true data-anomaly=true data-hasObsoleteIdl=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/NOTE-hr-time-3-20170803/) (03 August 2017)
- Editor's Draft: [https://w3c.github.io/hr-time/](https://w3c.github.io/hr-time/)
- Latest published version: [https://www.w3.org/TR/hr-time-3/](https://www.w3.org/TR/hr-time-3/)
- Latest published status: [Retired](https://www.w3.org/TR/2017/NOTE-hr-time-3-20170803/)
- Repository: [GitHub w3c/hr-time](https://github.com/w3c/hr-time)
- Shortname: hr-time-3

### Potential issue(s) {.anomalies}

- Obsolete WebIDL constructs found
- Unknown WebIDL names used: `Window`
- Missing references for WebIDL names: 
     * `EventTarget` defined in [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- Missing references for links: 
     * [`https://w3c.github.io/workers/`](https://w3c.github.io/workers/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Cooperative Scheduling of Background Tasks](https://www.w3.org/TR/2017/PR-requestidlecallback-20171010/)
- [Gamepad](https://www.w3.org/TR/2018/WD-gamepad-20180926/)
- [Generic Sensor API](https://www.w3.org/TR/2018/CR-generic-sensor-20180320/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [Identifiers for WebRTC's Statistics API](https://www.w3.org/TR/2018/CR-webrtc-stats-20180703/)
- [Long Tasks API 1](https://www.w3.org/TR/2017/WD-longtasks-1-20170907/)
- [Navigation Timing Level 2](https://www.w3.org/TR/2018/WD-navigation-timing-2-20180926/)
- [Paint Timing 1](https://www.w3.org/TR/2017/WD-paint-timing-20170907/)
- [Performance Timeline Level 2](https://www.w3.org/TR/2016/CR-performance-timeline-2-20161208/)
- [Resource Timing Level 2](https://www.w3.org/TR/2018/WD-resource-timing-2-20180518/)
- [User Timing Level 2](https://www.w3.org/TR/2018/CR-user-timing-2-20180709/)
- [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/2018/CR-webrtc-20180927/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [MediaStream Recording](https://www.w3.org/TR/2017/WD-mediastream-recording-20170621/)
- [Server Timing](https://www.w3.org/TR/2018/WD-server-timing-20180926/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)
- [WebXR Device API](https://immersive-web.github.io/webxr/)

Informative references to this spec from:

- [High Resolution Time Level 3](https://www.w3.org/TR/2017/NOTE-hr-time-3-20170803/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)


## HTML 5.2 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/html52/)
- Editor's Draft: [https://w3c.github.io/html/](https://w3c.github.io/html/)
- Latest published version: [https://www.w3.org/TR/html52/](https://www.w3.org/TR/html52/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2017/REC-html52-20171214/)
- Repository: [GitHub w3c/html](https://github.com/w3c/html)
- Shortname: html52

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Crawl took too long Error: Crawl took too long
    at Timeout._ [as _onTimeout] (/home/dom/github.com/reffy/src/cli/crawl-specs.js:338:29)
    at ontimeout (timers.js:498:11)
    at tryOnTimeout (timers.js:323:5)
    at Timer.listOnTimeout (timers.js:290:5)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- ["MediaStream Image Capture"](https://www.w3.org/TR/2017/WD-image-capture-20170621/)
- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
- [Audio Output Devices API](https://www.w3.org/TR/2017/CR-audio-output-20171003/)
- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Battery Status API](http://www.w3.org/TR/2016/CR-battery-status-20160707/)
- [Beacon](https://www.w3.org/TR/2017/CR-beacon-20170413/)
- [Clipboard API and events](https://www.w3.org/TR/2017/WD-clipboard-apis-20170929/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Compositing and Blending Level 2](https://drafts.fxtf.org/compositing-2/)
- [Content Security Policy Level 3](https://www.w3.org/TR/2016/WD-CSP3-20160913/)
- [Content Security Policy: Embedded Enforcement](https://www.w3.org/TR/2016/WD-csp-embedded-enforcement-20160909/)
- [Cookie Store API](https://wicg.github.io/cookie-store/)
- [Cooperative Scheduling of Background Tasks](https://www.w3.org/TR/2017/PR-requestidlecallback-20171010/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Credential Management Level 1](https://www.w3.org/TR/2017/WD-credential-management-1-20170804/)
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [CSS Animations Level 1](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- [CSS Backgrounds and Borders Module Level 3](https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/)
- [CSS Basic User Interface Module Level 3 (CSS3 UI)](https://www.w3.org/TR/2018/REC-css-ui-3-20180621/)
- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Fonts Module Level 4](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- [CSS Parser API](https://wicg.github.io/CSS-Parser-API/)
- [CSS Properties and Values API Level 1](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/)
- [CSS Pseudo-Elements Module Level 4](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [CSS Transitions](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [CSSOM View Module](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)
- [DOM Parsing and Serialization](http://www.w3.org/TR/2016/WD-DOM-Parsing-20160517/)
- [Encrypted Media Extensions](https://www.w3.org/TR/2017/REC-encrypted-media-20170918/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File and Directory Entries API](https://wicg.github.io/entries-api/)
- [File API](https://www.w3.org/TR/2017/WD-FileAPI-20171026/)
- [Filter Effects Module Level 1](http://www.w3.org/TR/2014/WD-filter-effects-1-20141125/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [Gamepad](https://www.w3.org/TR/2018/WD-gamepad-20180926/)
- [Generic Sensor API](https://www.w3.org/TR/2018/CR-generic-sensor-20180320/)
- [Geolocation API Specification 2nd Edition](https://www.w3.org/TR/2016/REC-geolocation-API-20161108/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [Geometry Interfaces Module Level 1](http://www.w3.org/TR/2014/CR-geometry-1-20141125/)
- [High Resolution Time Level 3](https://www.w3.org/TR/2017/NOTE-hr-time-3-20170803/)
- [HTML Canvas 2D Context](http://www.w3.org/TR/2015/REC-2dcontext-20151119/)
- [HTML Media Capture](https://www.w3.org/TR/2018/REC-html-media-capture-20180201/)
- [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/)
- [Identifiers for WebRTC's Statistics API](https://www.w3.org/TR/2018/CR-webrtc-stats-20180703/)
- [Indexed Database API 2.0](https://www.w3.org/TR/2018/REC-IndexedDB-2-20180130/)
- [Input Events Level 1](https://www.w3.org/TR/2017/WD-input-events-1-20170905/)
- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)
- [Keyboard Map](https://wicg.github.io/keyboard-map/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [Media Capture and Streams](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)
- [Media Capture Depth Stream Extensions](https://www.w3.org/TR/2017/WD-mediacapture-depth-20170418/)
- [Media Capture from DOM Elements](https://www.w3.org/TR/2017/WD-mediacapture-fromelement-20170906/)
- [Media Session Standard](https://wicg.github.io/mediasession/)
- [Media Source Extensions™](https://www.w3.org/TR/2016/REC-media-source-20161117/)
- [MediaStream Recording](https://www.w3.org/TR/2017/WD-mediastream-recording-20170621/)
- [Mixed Content](https://www.w3.org/TR/2016/CR-mixed-content-20160802/)
- [Navigation Timing Level 2](https://www.w3.org/TR/2018/WD-navigation-timing-2-20180926/)
- [Network Information API](https://wicg.github.io/netinfo/)
- [Page Visibility Level 2](https://www.w3.org/TR/2017/PR-page-visibility-2-20171017/)
- [Payment Handler API](https://www.w3.org/TR/2018/WD-payment-handler-20180108/)
- [Payment Method: Basic Card](https://www.w3.org/TR/2018/WD-payment-method-basic-card-20180920/)
- [Payment Request API](https://www.w3.org/TR/2018/CR-payment-request-20180830/)
- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)
- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)
- [Pointer Events](https://www.w3.org/TR/2018/CR-pointerevents2-20180522/)
- [Preload](https://www.w3.org/TR/2017/CR-preload-20171026/)
- [Presentation API](https://www.w3.org/TR/2017/CR-presentation-api-20170601/)
- [Push API](https://www.w3.org/TR/2017/WD-push-api-20171215/)
- [Referrer Policy](https://www.w3.org/TR/2017/CR-referrer-policy-20170126/)
- [Remote Playback API](https://www.w3.org/TR/2017/CR-remote-playback-20171019/)
- [Reporting API 1](https://w3c.github.io/reporting/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [Resource Timing Level 2](https://www.w3.org/TR/2018/WD-resource-timing-2-20180518/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)
- [Secure Contexts](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/)
- [Selection API](https://www.w3.org/TR/2018/WD-selection-api-20180926/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)
- [Server Timing](https://www.w3.org/TR/2018/WD-server-timing-20180926/)
- [Server-Sent Events](http://www.w3.org/TR/2015/REC-eventsource-20150203/)
- [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [Streams Standard](https://streams.spec.whatwg.org/)
- [The Screen Orientation API](https://www.w3.org/TR/2018/WD-screen-orientation-20180926/)
- [Touch Events](http://www.w3.org/TR/2013/REC-touch-events-20131010/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [URL Standard](https://url.spec.whatwg.org/)
- [User Timing Level 2](https://www.w3.org/TR/2018/CR-user-timing-2-20180709/)
- [Vibration API (Second Edition)](https://www.w3.org/TR/2016/REC-vibration-20161018/)
- [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- [Wake Lock API](https://www.w3.org/TR/2017/CR-wake-lock-20171214/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)
- [Web App Manifest](https://www.w3.org/TR/2018/WD-appmanifest-20180906/)
- [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/)
- [Web Authentication: An API for accessing Public Key Credentials Level 1](https://www.w3.org/TR/2018/CR-webauthn-20180807/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web Cryptography API](https://www.w3.org/TR/2017/REC-WebCryptoAPI-20170126/)
- [Web MIDI API](http://www.w3.org/TR/2015/WD-webmidi-20150317/)
- [Web NFC API](https://w3c.github.io/web-nfc/)
- [Web Notifications](http://www.w3.org/TR/2015/REC-notifications-20151022/)
- [Web Share API](https://wicg.github.io/web-share/)
- [Web Speech API](https://w3c.github.io/speech-api/)
- [Web Storage (Second Edition)](http://www.w3.org/TR/2016/REC-webstorage-20160419/)
- [Web Workers](http://www.w3.org/TR/2015/WD-workers-20150924/)
- [WebAssembly JavaScript Interface](https://www.w3.org/TR/2018/WD-wasm-js-api-1-20180904/)
- [WebAssembly Web API](https://www.w3.org/TR/2018/WD-wasm-web-api-1-20180904/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)
- [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/2018/CR-webrtc-20180927/)
- [WebUSB API](https://wicg.github.io/webusb/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)
- [WebXR Device API](https://immersive-web.github.io/webxr/)
- [Worklets Level 1](http://www.w3.org/TR/2016/WD-worklets-1-20160607/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Informative references to this spec from:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/2018/WD-wai-aria-1.2-20180719/)
- [Clipboard API and events](https://www.w3.org/TR/2017/WD-clipboard-apis-20170929/)
- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-flexbox-1-20171019/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Pseudo-Elements Module Level 4](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/2018/CR-css-scroll-snap-1-20180814/)
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/2018/CR-css-text-decor-3-20180703/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [Encoding](https://www.w3.org/TR/2018/CR-encoding-20180327/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [HTML Media Capture](https://www.w3.org/TR/2018/REC-html-media-capture-20180201/)
- [Orientation Sensor](https://www.w3.org/TR/2018/CR-orientation-sensor-20180320/)
- [Pointer Lock 2.0](https://www.w3.org/TR/2018/WD-pointerlock-2-20180208/)
- [Preload](https://www.w3.org/TR/2017/CR-preload-20171026/)
- [Progress Events](http://www.w3.org/TR/2014/REC-progress-events-20140211/)
- [Push API](https://www.w3.org/TR/2017/WD-push-api-20171215/)
- [Screen Capture](http://www.w3.org/TR/2016/WD-screen-capture-20160714/)
- [Selectors Level 3](https://www.w3.org/TR/2018/PR-selectors-3-20180911/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)
- [Wake Lock API](https://www.w3.org/TR/2017/CR-wake-lock-20171214/)
- [WebIDL Level 1](https://www.w3.org/TR/2016/REC-WebIDL-1-20161215/)


## HTML Canvas 2D Context {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-inconsistentRef=true data-noEdDraft=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2015/REC-2dcontext-20151119/) (19 November 2015)
- Latest published version: [http://www.w3.org/TR/2dcontext/](http://www.w3.org/TR/2dcontext/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2015/REC-2dcontext-20151119/)
- Shortname: 2dcontext

### Potential issue(s) {.anomalies}

- Link to an Editor's Draft not found
- Unknown WebIDL names used: `HTMLCanvasElement`, `HTMLImageElement`, `HTMLVideoElement`
- Missing references for WebIDL names: 
     * `Element` defined in [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
     * `MouseEvent` defined in [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
     * `MouseEventInit` defined in [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- Inconsistent references for links: 
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/), related reference "HTML" uses URL [`http://www.w3.org/TR/html5/`](http://www.w3.org/TR/html5/)
     * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/), related reference "HTML" uses URL [`http://www.w3.org/TR/html5/`](http://www.w3.org/TR/html5/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- ["MediaStream Image Capture"](https://www.w3.org/TR/2017/WD-image-capture-20170621/)
- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Clipboard API and events](https://www.w3.org/TR/2017/WD-clipboard-apis-20170929/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Compositing and Blending Level 1](http://www.w3.org/TR/2015/CR-compositing-1-20150113/)
- [Compositing and Blending Level 2](https://drafts.fxtf.org/compositing-2/)
- [Content Security Policy Level 3](https://www.w3.org/TR/2016/WD-CSP3-20160913/)
- [Content Security Policy: Embedded Enforcement](https://www.w3.org/TR/2016/WD-csp-embedded-enforcement-20160909/)
- [Cookie Store API](https://wicg.github.io/cookie-store/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Credential Management Level 1](https://www.w3.org/TR/2017/WD-credential-management-1-20170804/)
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [CSS Animations Level 1](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- [CSS Backgrounds and Borders Module Level 3](https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/)
- [CSS Basic User Interface Module Level 3 (CSS3 UI)](https://www.w3.org/TR/2018/REC-css-ui-3-20180621/)
- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- [CSS Parser API](https://wicg.github.io/CSS-Parser-API/)
- [CSS Properties and Values API Level 1](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/)
- [CSS Pseudo-Elements Module Level 4](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [CSS Transitions](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [CSSOM View Module](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File and Directory Entries API](https://wicg.github.io/entries-api/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [Gamepad](https://www.w3.org/TR/2018/WD-gamepad-20180926/)
- [Generic Sensor API](https://www.w3.org/TR/2018/CR-generic-sensor-20180320/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [Input Events Level 1](https://www.w3.org/TR/2017/WD-input-events-1-20170905/)
- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)
- [Keyboard Map](https://wicg.github.io/keyboard-map/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [Media Capture Depth Stream Extensions](https://www.w3.org/TR/2017/WD-mediacapture-depth-20170418/)
- [Media Session Standard](https://wicg.github.io/mediasession/)
- [MediaStream Recording](https://www.w3.org/TR/2017/WD-mediastream-recording-20170621/)
- [Navigation Timing Level 2](https://www.w3.org/TR/2018/WD-navigation-timing-2-20180926/)
- [Network Information API](https://wicg.github.io/netinfo/)
- [Payment Handler API](https://www.w3.org/TR/2018/WD-payment-handler-20180108/)
- [Payment Method: Basic Card](https://www.w3.org/TR/2018/WD-payment-method-basic-card-20180920/)
- [Payment Request API](https://www.w3.org/TR/2018/CR-payment-request-20180830/)
- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)
- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)
- [Pointer Events](https://www.w3.org/TR/2018/CR-pointerevents2-20180522/)
- [Referrer Policy](https://www.w3.org/TR/2017/CR-referrer-policy-20170126/)
- [Reporting API 1](https://w3c.github.io/reporting/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [Resource Timing Level 2](https://www.w3.org/TR/2018/WD-resource-timing-2-20180518/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)
- [Secure Contexts](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/)
- [Selection API](https://www.w3.org/TR/2018/WD-selection-api-20180926/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)
- [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [Streams Standard](https://streams.spec.whatwg.org/)
- [The Screen Orientation API](https://www.w3.org/TR/2018/WD-screen-orientation-20180926/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [URL Standard](https://url.spec.whatwg.org/)
- [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)
- [Web App Manifest](https://www.w3.org/TR/2018/WD-appmanifest-20180906/)
- [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/)
- [Web Authentication: An API for accessing Public Key Credentials Level 1](https://www.w3.org/TR/2018/CR-webauthn-20180807/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web Share API](https://wicg.github.io/web-share/)
- [Web Speech API](https://w3c.github.io/speech-api/)
- [WebAssembly JavaScript Interface](https://www.w3.org/TR/2018/WD-wasm-js-api-1-20180904/)
- [WebAssembly Web API](https://www.w3.org/TR/2018/WD-wasm-web-api-1-20180904/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)
- [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/2018/CR-webrtc-20180927/)
- [WebUSB API](https://wicg.github.io/webusb/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)
- [WebXR Device API](https://immersive-web.github.io/webxr/)
- [Worklets Level 1](http://www.w3.org/TR/2016/WD-worklets-1-20160607/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Informative references to this spec from:

- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/2018/CR-css-scroll-snap-1-20180814/)
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/2018/CR-css-text-decor-3-20180703/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [Geometry Interfaces Module Level 1](http://www.w3.org/TR/2014/CR-geometry-1-20141125/)
- [HTML Media Capture](https://www.w3.org/TR/2018/REC-html-media-capture-20180201/)
- [Media Capture from DOM Elements](https://www.w3.org/TR/2017/WD-mediacapture-fromelement-20170906/)
- [Orientation Sensor](https://www.w3.org/TR/2018/CR-orientation-sensor-20180320/)
- [Pointer Lock 2.0](https://www.w3.org/TR/2018/WD-pointerlock-2-20180208/)
- [Preload](https://www.w3.org/TR/2017/CR-preload-20171026/)
- [Push API](https://www.w3.org/TR/2017/WD-push-api-20171215/)
- [Screen Capture](http://www.w3.org/TR/2016/WD-screen-capture-20160714/)
- [Wake Lock API](https://www.w3.org/TR/2017/CR-wake-lock-20171214/)
- [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/)


## HTML Media Capture {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/REC-html-media-capture-20180201/) (01 February 2018)
- Editor's Draft: [https://w3c.github.io/html-media-capture/](https://w3c.github.io/html-media-capture/)
- Latest published version: [https://www.w3.org/TR/html-media-capture/](https://www.w3.org/TR/html-media-capture/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2018/REC-html-media-capture-20180201/)
- Repository: [GitHub w3c/html-media-capture](https://github.com/w3c/html-media-capture)
- Shortname: html-media-capture

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `HTMLInputElement`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## HTML5 Web Messaging {data-spec=true data-anomaly=true data-hasObsoleteIdl=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2015/REC-webmessaging-20150519/) (19 May 2015)
- Editor's Draft: [http://dev.w3.org/html5/postmsg/](http://dev.w3.org/html5/postmsg/)
- Latest published version: [http://www.w3.org/TR/webmessaging/](http://www.w3.org/TR/webmessaging/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2015/REC-webmessaging-20150519/)
- Shortname: webmessaging

### Potential issue(s) {.anomalies}

- Obsolete WebIDL constructs found
- Unknown WebIDL names used: `EventHandler`, `Transferable`, `Window`, `WindowProxy`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- ["MediaStream Image Capture"](https://www.w3.org/TR/2017/WD-image-capture-20170621/)
- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Clipboard API and events](https://www.w3.org/TR/2017/WD-clipboard-apis-20170929/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Compositing and Blending Level 2](https://drafts.fxtf.org/compositing-2/)
- [Content Security Policy Level 3](https://www.w3.org/TR/2016/WD-CSP3-20160913/)
- [Content Security Policy: Embedded Enforcement](https://www.w3.org/TR/2016/WD-csp-embedded-enforcement-20160909/)
- [Cookie Store API](https://wicg.github.io/cookie-store/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Credential Management Level 1](https://www.w3.org/TR/2017/WD-credential-management-1-20170804/)
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [CSS Animations Level 1](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- [CSS Backgrounds and Borders Module Level 3](https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/)
- [CSS Basic User Interface Module Level 3 (CSS3 UI)](https://www.w3.org/TR/2018/REC-css-ui-3-20180621/)
- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- [CSS Parser API](https://wicg.github.io/CSS-Parser-API/)
- [CSS Properties and Values API Level 1](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/)
- [CSS Pseudo-Elements Module Level 4](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [CSS Transitions](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [CSSOM View Module](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File and Directory Entries API](https://wicg.github.io/entries-api/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [Gamepad](https://www.w3.org/TR/2018/WD-gamepad-20180926/)
- [Generic Sensor API](https://www.w3.org/TR/2018/CR-generic-sensor-20180320/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [Input Events Level 1](https://www.w3.org/TR/2017/WD-input-events-1-20170905/)
- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)
- [Keyboard Map](https://wicg.github.io/keyboard-map/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [Media Capture Depth Stream Extensions](https://www.w3.org/TR/2017/WD-mediacapture-depth-20170418/)
- [Media Session Standard](https://wicg.github.io/mediasession/)
- [MediaStream Recording](https://www.w3.org/TR/2017/WD-mediastream-recording-20170621/)
- [Navigation Timing Level 2](https://www.w3.org/TR/2018/WD-navigation-timing-2-20180926/)
- [Network Information API](https://wicg.github.io/netinfo/)
- [Payment Handler API](https://www.w3.org/TR/2018/WD-payment-handler-20180108/)
- [Payment Method: Basic Card](https://www.w3.org/TR/2018/WD-payment-method-basic-card-20180920/)
- [Payment Request API](https://www.w3.org/TR/2018/CR-payment-request-20180830/)
- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)
- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)
- [Pointer Events](https://www.w3.org/TR/2018/CR-pointerevents2-20180522/)
- [Presentation API](https://www.w3.org/TR/2017/CR-presentation-api-20170601/)
- [Referrer Policy](https://www.w3.org/TR/2017/CR-referrer-policy-20170126/)
- [Reporting API 1](https://w3c.github.io/reporting/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [Resource Timing Level 2](https://www.w3.org/TR/2018/WD-resource-timing-2-20180518/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)
- [Secure Contexts](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/)
- [Selection API](https://www.w3.org/TR/2018/WD-selection-api-20180926/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)
- [Server-Sent Events](http://www.w3.org/TR/2015/REC-eventsource-20150203/)
- [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [Streams Standard](https://streams.spec.whatwg.org/)
- [The Screen Orientation API](https://www.w3.org/TR/2018/WD-screen-orientation-20180926/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [URL Standard](https://url.spec.whatwg.org/)
- [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)
- [Web App Manifest](https://www.w3.org/TR/2018/WD-appmanifest-20180906/)
- [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/)
- [Web Authentication: An API for accessing Public Key Credentials Level 1](https://www.w3.org/TR/2018/CR-webauthn-20180807/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web Share API](https://wicg.github.io/web-share/)
- [Web Speech API](https://w3c.github.io/speech-api/)
- [Web Workers](http://www.w3.org/TR/2015/WD-workers-20150924/)
- [WebAssembly JavaScript Interface](https://www.w3.org/TR/2018/WD-wasm-js-api-1-20180904/)
- [WebAssembly Web API](https://www.w3.org/TR/2018/WD-wasm-web-api-1-20180904/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)
- [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/2018/CR-webrtc-20180927/)
- [WebUSB API](https://wicg.github.io/webusb/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)
- [WebXR Device API](https://immersive-web.github.io/webxr/)
- [Worklets Level 1](http://www.w3.org/TR/2016/WD-worklets-1-20160607/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Informative references to this spec from:

- [Credential Management Level 1](https://www.w3.org/TR/2017/WD-credential-management-1-20170804/)
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/2018/CR-css-scroll-snap-1-20180814/)
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/2018/CR-css-text-decor-3-20180703/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [HTML Media Capture](https://www.w3.org/TR/2018/REC-html-media-capture-20180201/)
- [Orientation Sensor](https://www.w3.org/TR/2018/CR-orientation-sensor-20180320/)
- [Pointer Lock 2.0](https://www.w3.org/TR/2018/WD-pointerlock-2-20180208/)
- [Preload](https://www.w3.org/TR/2017/CR-preload-20171026/)
- [Push API](https://www.w3.org/TR/2017/WD-push-api-20171215/)
- [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- [Wake Lock API](https://www.w3.org/TR/2017/CR-wake-lock-20171214/)


## Identifiers for WebRTC's Statistics API {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-unknownIdlNames=true data-redefinedIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-webrtc-stats-20180703/) (03 July 2018)
- Editor's Draft: [https://w3c.github.io/webrtc-stats/](https://w3c.github.io/webrtc-stats/)
- Latest published version: [https://www.w3.org/TR/webrtc-stats/](https://www.w3.org/TR/webrtc-stats/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-webrtc-stats-20180703/)
- Repository: [GitHub w3c/webrtc-stats](https://github.com/w3c/webrtc-stats)
- Shortname: webrtc-stats

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Unknown WebIDL names used: `RTCRTPStreamStats`
- WebIDL names also defined elsewhere: 
    * `RTCStats` also defined in [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/2018/CR-webrtc-20180927/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/2014/REC-html5-20141028/`](https://www.w3.org/TR/2014/REC-html5-20141028/), related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/2018/CR-webrtc-20180927/)

No informative reference to this spec from other specs.


## Indexed Database API 2.0 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/REC-IndexedDB-2-20180130/) (30 January 2018)
- Editor's Draft: [https://w3c.github.io/IndexedDB/](https://w3c.github.io/IndexedDB/)
- Latest published version: [https://www.w3.org/TR/IndexedDB-2/](https://www.w3.org/TR/IndexedDB-2/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2018/REC-IndexedDB-2-20180130/)
- Repository: [GitHub w3c/IndexedDB](https://github.com/w3c/IndexedDB)
- Shortname: IndexedDB-2

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMStringList`, `EventHandler`, `Window`, `WindowOrWorkerGlobalScope`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/) or [Web Workers](http://www.w3.org/TR/2015/WD-workers-20150924/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/), related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/), related reference "HTML52" uses URL [`https://www.w3.org/TR/html52/`](https://www.w3.org/TR/html52/)
     * [`https://www.w3.org/TR/domcore/`](https://www.w3.org/TR/domcore/), related reference "DOM41" uses URL [`https://www.w3.org/TR/dom41/`](https://www.w3.org/TR/dom41/)
     * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/), related reference "DOM41" uses URL [`https://www.w3.org/TR/dom41/`](https://www.w3.org/TR/dom41/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Presentation API](https://www.w3.org/TR/2017/CR-presentation-api-20170601/)

Informative references to this spec from:

- [Secure Contexts](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/)
- [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- [Web Cryptography API](https://www.w3.org/TR/2017/REC-WebCryptoAPI-20170126/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/2018/CR-webrtc-20180927/)


## Input Device Capabilities {data-spec=true data-anomaly=true data-noRefToWebIDL=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/InputDeviceCapabilities/) (September 29, 2018)
- Repository: [GitHub wicg/InputDeviceCapabilities](https://github.com/wicg/InputDeviceCapabilities)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Input Events Level 1 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-input-events-1-20170905/) (05 September 2017)
- Editor's Draft: [https://rawgit.com/w3c/input-events/v1/index.html](https://rawgit.com/w3c/input-events/v1/index.html)
- Latest published version: [https://www.w3.org/TR/input-events-1/](https://www.w3.org/TR/input-events-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-input-events-1-20170905/)
- Repository: [GitHub w3c/input-events](https://github.com/w3c/input-events)
- Shortname: input-events-2

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Unknown WebIDL names used: `DataTransfer`
- Inconsistent references for links: 
     * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/), related reference "UI-EVENTS" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Input Events Level 1](https://www.w3.org/TR/2017/WD-input-events-1-20170905/)


## Intersection Observer {data-spec=true data-anomaly=true data-hasInvalidIdl=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-intersection-observer-20170914/) (14 September 2017)
- Editor's Draft: [https://w3c.github.io/IntersectionObserver/](https://w3c.github.io/IntersectionObserver/)
- Latest published version: [https://www.w3.org/TR/intersection-observer/](https://www.w3.org/TR/intersection-observer/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-intersection-observer-20170914/)
- Repository: [GitHub w3c/IntersectionObserver](https://github.com/w3c/IntersectionObserver)
- Shortname: intersection-observer

### Potential issue(s) {.anomalies}

- Invalid WebIDL content found
- Missing references for links: 
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/)
     * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/)
     * [`https://www.w3.org/TR/css-masking-1/`](https://www.w3.org/TR/css-masking-1/)
     * [`https://fullscreen.spec.whatwg.org/`](https://fullscreen.spec.whatwg.org/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/), related reference "CSSOM-VIEW-1" uses URL [`https://www.w3.org/TR/cssom-view-1/`](https://www.w3.org/TR/cssom-view-1/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Keyboard Lock {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/keyboard-lock/) (7 September 2018)
- Repository: [GitHub w3c/keyboard-lock](https://github.com/w3c/keyboard-lock)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Navigator`, `Window`
- WebIDL names also defined elsewhere: 
    * `Keyboard` also defined in [Keyboard Map](https://wicg.github.io/keyboard-map/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Keyboard Map {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/keyboard-map/) (7 September 2018)
- Repository: [GitHub wicg/keyboard-map](https://github.com/wicg/keyboard-map)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Navigator`, `Window`
- WebIDL names also defined elsewhere: 
    * `Keyboard` also defined in [Keyboard Lock](https://w3c.github.io/keyboard-lock/)
- Missing references for links: 
     * [`https://w3c.github.io/keyboard-lock/`](https://w3c.github.io/keyboard-lock/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/), related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Long Tasks API 1 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-longtasks-1-20170907/) (7 September 2017)
- Editor's Draft: [https://w3c.github.io/longtasks/](https://w3c.github.io/longtasks/)
- Latest published version: [https://www.w3.org/TR/longtasks-1/](https://www.w3.org/TR/longtasks-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-longtasks-1-20170907/)
- Repository: [GitHub w3c/longtasks](https://github.com/w3c/longtasks)
- Shortname: longtasks-1

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/performance-timeline/`](https://w3c.github.io/performance-timeline/), related reference "PERFORMANCE-TIMELINE-2" uses URL [`https://www.w3.org/TR/performance-timeline-2/`](https://www.w3.org/TR/performance-timeline-2/)
     * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/), related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Magnetometer {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-magnetometer-20180320/) (20 March 2018)
- Editor's Draft: [https://w3c.github.io/magnetometer/](https://w3c.github.io/magnetometer/)
- Latest published version: [https://www.w3.org/TR/magnetometer/](https://www.w3.org/TR/magnetometer/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-magnetometer-20180320/)
- Repository: [GitHub w3c/magnetometer](https://github.com/w3c/magnetometer)
- Shortname: magnetometer

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
- Missing references for links: 
     * [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/), related reference "GENERIC-SENSOR" uses URL [`https://www.w3.org/TR/generic-sensor/`](https://www.w3.org/TR/generic-sensor/)
     * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/), related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
     * [`https://w3c.github.io/accelerometer/`](https://w3c.github.io/accelerometer/), related reference "ACCELEROMETER" uses URL [`https://www.w3.org/TR/accelerometer/`](https://www.w3.org/TR/accelerometer/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Orientation Sensor](https://www.w3.org/TR/2018/CR-orientation-sensor-20180320/)

Informative references to this spec from:

- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)


## Media Capabilities {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/media-capabilities/) (19 July 2018)
- Repository: [GitHub wicg/media-capabilities](https://github.com/wicg/media-capabilities)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Navigator`, `Window`
- Missing references for links: 
     * [`https://www.w3.org/TR/webrtc/`](https://www.w3.org/TR/webrtc/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/media-source/`](https://w3c.github.io/media-source/), related reference "MEDIA-SOURCE" uses URL [`https://www.w3.org/TR/media-source/`](https://www.w3.org/TR/media-source/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Media Capture and Streams {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/) (3 October 2017)
- Editor's Draft: [https://w3c.github.io/mediacapture-main/](https://w3c.github.io/mediacapture-main/)
- Latest published version: [https://www.w3.org/TR/mediacapture-streams/](https://www.w3.org/TR/mediacapture-streams/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)
- Repository: [GitHub w3c/mediacapture-main](https://github.com/w3c/mediacapture-main)
- Shortname: mediacapture-streams

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `OverconstrainedError`, `Window`
- Missing references for WebIDL names: 
     * `EventTarget` defined in [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
     * `Event` defined in [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
     * `EventInit` defined in [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Audio Output Devices API](https://www.w3.org/TR/2017/CR-audio-output-20171003/)
- [HTML Media Capture](https://www.w3.org/TR/2018/REC-html-media-capture-20180201/)
- [Identifiers for WebRTC's Statistics API](https://www.w3.org/TR/2018/CR-webrtc-stats-20180703/)
- [Media Capture Depth Stream Extensions](https://www.w3.org/TR/2017/WD-mediacapture-depth-20170418/)
- [Media Capture from DOM Elements](https://www.w3.org/TR/2017/WD-mediacapture-fromelement-20170906/)
- [MediaStreamTrack Content Hints](https://www.w3.org/TR/2018/WD-mst-content-hint-20180703/)
- [Screen Capture](http://www.w3.org/TR/2016/WD-screen-capture-20160714/)
- [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/2018/CR-webrtc-20180927/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- ["MediaStream Image Capture"](https://www.w3.org/TR/2017/WD-image-capture-20170621/)
- [MediaStream Recording](https://www.w3.org/TR/2017/WD-mediastream-recording-20170621/)

Informative references to this spec from:

- ["MediaStream Image Capture"](https://www.w3.org/TR/2017/WD-image-capture-20170621/)
- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)
- [Secure Contexts](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/)


## Media Capture Depth Stream Extensions {data-spec=true data-anomaly=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-mediacapture-depth-20170418/) (18 April 2017)
- Editor's Draft: [https://w3c.github.io/mediacapture-depth/](https://w3c.github.io/mediacapture-depth/)
- Latest published version: [https://www.w3.org/TR/mediacapture-depth/](https://www.w3.org/TR/mediacapture-depth/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-mediacapture-depth-20170418/)
- Repository: [GitHub w3c/mediacapture-depth](https://github.com/w3c/mediacapture-depth)
- Shortname: mediacapture-depth

### Potential issue(s) {.anomalies}

- Inconsistent references for links: 
     * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/), related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Screen Capture](http://www.w3.org/TR/2016/WD-screen-capture-20160714/)


## Media Capture from DOM Elements {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-mediacapture-fromelement-20170906/) (06 September 2017)
- Editor's Draft: [https://w3c.github.io/mediacapture-fromelement/](https://w3c.github.io/mediacapture-fromelement/)
- Latest published version: [https://www.w3.org/TR/mediacapture-fromelement/](https://www.w3.org/TR/mediacapture-fromelement/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-mediacapture-fromelement-20170906/)
- Repository: [GitHub w3c/mediacapture-fromelement](https://github.com/w3c/mediacapture-fromelement)
- Shortname: mediacapture-fromelement

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `HTMLCanvasElement`, `HTMLMediaElement`, `Window`
- Inconsistent references for links: 
     * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/), related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
     * [`https://www.w3.org/TR/2dcontext2/`](https://www.w3.org/TR/2dcontext2/), related reference "2DCONTEXT" uses URL [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Media Capture and Streams](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)


## Media Queries {data-spec=true data-anomaly=true data-noCssDefinitions=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/) (19 June 2012)
- Editor's Draft: [http://dev.w3.org/csswg/css3-mediaqueries/](http://dev.w3.org/csswg/css3-mediaqueries/)
- Latest published version: [http://www.w3.org/TR/css3-mediaqueries/](http://www.w3.org/TR/css3-mediaqueries/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css3-mediaqueries

### Potential issue(s) {.anomalies}

- No CSS definitions found
- Missing references for links: 
     * [`https://www.w3.org/TR/1999/REC-html401-19991224/`](https://www.w3.org/TR/1999/REC-html401-19991224/)
     * [`https://www.w3.org/TR/1999/REC-html401-19991224/present/`](https://www.w3.org/TR/1999/REC-html401-19991224/present/)
     * [`https://www.w3.org/TR/1999/REC-html401-19991224`](https://www.w3.org/TR/1999/REC-html401-19991224)
     * [`https://www.w3.org/TR/2012/WD-html5-20120329/`](https://www.w3.org/TR/2012/WD-html5-20120329/)
     * [`https://www.w3.org/TR/2010/REC-xml-stylesheet-20101028/`](https://www.w3.org/TR/2010/REC-xml-stylesheet-20101028/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Conditional Rules Module Level 3](http://www.w3.org/TR/2013/CR-css3-conditional-20130404/)
- [CSS Device Adaptation Module Level 1](http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/)
- [CSS Paged Media Module Level 3](http://www.w3.org/TR/2013/WD-css3-page-20130314/)
- [Media Queries Level 4](https://www.w3.org/TR/2017/CR-mediaqueries-4-20170905/)

No informative reference to this spec from other specs.


## Media Queries Level 4 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/CR-mediaqueries-4-20170905/) (5 September 2017)
- Editor's Draft: [https://drafts.csswg.org/mediaqueries-4/](https://drafts.csswg.org/mediaqueries-4/)
- Latest published version: [https://www.w3.org/TR/mediaqueries-4/](https://www.w3.org/TR/mediaqueries-4/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-mediaqueries-4-20170905/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: mediaqueries-4

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css-device-adapt/`](https://www.w3.org/TR/css-device-adapt/)
     * [`https://www.w3.org/TR/css3-break/`](https://www.w3.org/TR/css3-break/)
     * [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS3VAL" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/), related reference "CSSOM-VIEW-1" uses URL [`https://www.w3.org/TR/cssom-view-1/`](https://www.w3.org/TR/cssom-view-1/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Color Module Level 4](http://www.w3.org/TR/2016/WD-css-color-4-20160705/)
- [CSS Device Adaptation Module Level 1](http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/2017/CR-css-grid-1-20171214/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/)
- [Web App Manifest](https://www.w3.org/TR/2018/WD-appmanifest-20180906/)

Informative references to this spec from:

- [CSS Round Display Level 1](https://www.w3.org/TR/2016/WD-css-round-display-1-20161222/)


## Media Queries Level 5 {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://drafts.csswg.org/mediaqueries-5/) (16 July 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Ambient Light Sensor](https://www.w3.org/TR/2018/CR-ambient-light-20180320/)


## Media Session Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/mediasession/) (17 August 2017)
- Repository: [GitHub wicg/mediasession](https://github.com/wicg/mediasession)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Navigator`, `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)


## Media Source Extensions™ {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2016/REC-media-source-20161117/) (17 November 2016)
- Editor's Draft: [https://w3c.github.io/media-source/](https://w3c.github.io/media-source/)
- Latest published version: [https://www.w3.org/TR/media-source/](https://www.w3.org/TR/media-source/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2016/REC-media-source-20161117/)
- Repository: [GitHub w3c/media-source](https://github.com/w3c/media-source)
- Shortname: media-source

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `AudioTrack`, `AudioTrackList`, `EventHandler`, `TextTrack`, `TextTrackList`, `TimeRanges`, `VideoTrack`, `VideoTrackList`
- Missing references for WebIDL names: 
     * `EventTarget` defined in [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
     * `URL` defined in [URL Standard](https://url.spec.whatwg.org/)
- Missing references for links: 
     * [`https://w3c.github.io/encrypted-media/`](https://w3c.github.io/encrypted-media/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [URL Standard](https://url.spec.whatwg.org/)

Informative references to this spec from:

- [Encrypted Media Extensions](https://www.w3.org/TR/2017/REC-encrypted-media-20170918/)


## MediaStream Recording {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-mediastream-recording-20170621/) (21 June 2017)
- Editor's Draft: [https://w3c.github.io/mediacapture-record/](https://w3c.github.io/mediacapture-record/)
- Latest published version: [https://www.w3.org/TR/mediastream-recording/](https://www.w3.org/TR/mediastream-recording/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-mediastream-recording-20170621/)
- Repository: [GitHub w3c/mediacapture-record](https://github.com/w3c/mediacapture-record)
- Shortname: mediastream-recording

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`
- Missing references for WebIDL names: 
     * `MediaStream` defined in [Media Capture and Streams](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)
     * `DOMHighResTimeStamp` defined in [High Resolution Time Level 3](https://www.w3.org/TR/2017/NOTE-hr-time-3-20170803/)
- Missing references for links: 
     * [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
     * [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/), related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [MediaStreamTrack Content Hints](https://www.w3.org/TR/2018/WD-mst-content-hint-20180703/)

Informative references to this spec from:

- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [Media Capture and Streams](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)
- [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/)


## MediaStreamTrack Content Hints {data-spec=true data-anomaly=true data-noRefToWebIDL=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-mst-content-hint-20180703/) (03 July 2018)
- Editor's Draft: [https://w3c.github.io/mst-content-hint/](https://w3c.github.io/mst-content-hint/)
- Latest published version: [https://www.w3.org/TR/mst-content-hint/](https://www.w3.org/TR/mst-content-hint/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-mst-content-hint-20180703/)
- Repository: [GitHub w3c/mst-content-hint](https://github.com/w3c/mst-content-hint)
- Shortname: mst-content-hint

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Metadata API for Media Resources 1.0 {data-spec=true data-anomaly=true data-hasInvalidIdl=true data-missingLinkRef=true data-inconsistentRef=true data-noEdDraft=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2014/REC-mediaont-api-1.0-20140313/) (13 March 2014)
- Latest published version: [http://www.w3.org/TR/mediaont-api-1.0/](http://www.w3.org/TR/mediaont-api-1.0/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2014/REC-mediaont-api-1.0-20140313/)
- Shortname: mediaont-api-1.0

### Potential issue(s) {.anomalies}

- Link to an Editor's Draft not found
- Invalid WebIDL content found
- Missing references for links: 
     * [`https://www.w3.org/TR/mediaont-10/`](https://www.w3.org/TR/mediaont-10/)
     * [`https://www.w3.org/TR/2012/REC-mediaont-10-20120209/`](https://www.w3.org/TR/2012/REC-mediaont-10-20120209/)
     * [`https://www.w3.org/TR/2011/NOTE-dap-policy-reqs-20110317/`](https://www.w3.org/TR/2011/NOTE-dap-policy-reqs-20110317/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/2012/REC-media-frags-20120925/`](https://www.w3.org/TR/2012/REC-media-frags-20120925/), related reference "MEDIA-FRAGMENTS" uses URL [`http://www.w3.org/TR/media-frags/`](http://www.w3.org/TR/media-frags/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Mixed Content {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2016/CR-mixed-content-20160802/) (2 August 2016)
- Editor's Draft: [https://w3c.github.io/webappsec-mixed-content/](https://w3c.github.io/webappsec-mixed-content/)
- Latest published version: [https://www.w3.org/TR/mixed-content/](https://www.w3.org/TR/mixed-content/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2016/CR-mixed-content-20160802/)
- Repository: [GitHub w3c/webappsec-mixed-content](https://github.com/w3c/webappsec-mixed-content)
- Shortname: mixed-content

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://url.spec.whatwg.org/`](https://url.spec.whatwg.org/)
     * [`https://www.w3.org/TR/service-workers/`](https://www.w3.org/TR/service-workers/)
     * [`https://www.w3.org/TR/eventsource/`](https://www.w3.org/TR/eventsource/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/2008/REC-xml-20081126/`](https://www.w3.org/TR/2008/REC-xml-20081126/), related reference "XML" uses URL [`https://www.w3.org/TR/xml`](https://www.w3.org/TR/xml)
     * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/), related reference "HTML51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/), related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Credential Management Level 1](https://www.w3.org/TR/2017/WD-credential-management-1-20170804/)
- [Encrypted Media Extensions](https://www.w3.org/TR/2017/REC-encrypted-media-20170918/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [Preload](https://www.w3.org/TR/2017/CR-preload-20171026/)
- [Presentation API](https://www.w3.org/TR/2017/CR-presentation-api-20170601/)
- [Web Authentication: An API for accessing Public Key Credentials Level 1](https://www.w3.org/TR/2018/CR-webauthn-20180807/)

Informative references to this spec from:

- [Content Security Policy Level 3](https://www.w3.org/TR/2016/WD-CSP3-20160913/)
- [Media Capture and Streams](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)
- [Secure Contexts](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/)


## Motion Path Module Level 1 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-motion-1-20170711/) (11 July 2017)
- Editor's Draft: [https://drafts.fxtf.org/motion-1/](https://drafts.fxtf.org/motion-1/)
- Latest published version: [https://www.w3.org/TR/motion-1/](https://www.w3.org/TR/motion-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-motion-1-20170711/)
- Repository: [GitHub w3c/fxtf-drafts](https://github.com/w3c/fxtf-drafts)
- Shortname: motion-1

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css-display-3/`](https://www.w3.org/TR/css-display-3/)
     * [`https://www.w3.org/TR/css3-images/`](https://www.w3.org/TR/css3-images/)
     * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS3VAL" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://www.w3.org/TR/2016/WD-css-round-display-1-20160301/`](https://www.w3.org/TR/2016/WD-css-round-display-1-20160301/), related reference "CSS-ROUND-DISPLAY-1" uses URL [`https://www.w3.org/TR/css-round-display-1/`](https://www.w3.org/TR/css-round-display-1/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Round Display Level 1](https://www.w3.org/TR/2016/WD-css-round-display-1-20161222/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)

No informative reference to this spec from other specs.


## Navigation Timing Level 2 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-navigation-timing-2-20180926/) (26 September 2018)
- Editor's Draft: [https://w3c.github.io/navigation-timing/](https://w3c.github.io/navigation-timing/)
- Latest published version: [https://www.w3.org/TR/navigation-timing-2/](https://www.w3.org/TR/navigation-timing-2/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-navigation-timing-2-20180926/)
- Repository: [GitHub w3c/navigation-timing](https://github.com/w3c/navigation-timing)
- Shortname: navigation-timing-2

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/service-workers/`](https://www.w3.org/TR/service-workers/), related reference "SERVICE-WORKERS" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Gamepad](https://www.w3.org/TR/2018/WD-gamepad-20180926/)
- [Server Timing](https://www.w3.org/TR/2018/WD-server-timing-20180926/)
- [User Timing Level 2](https://www.w3.org/TR/2018/CR-user-timing-2-20180709/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)

Informative references to this spec from:

- [Navigation Timing Level 2](https://www.w3.org/TR/2018/WD-navigation-timing-2-20180926/)
- [Performance Timeline Level 2](https://www.w3.org/TR/2016/CR-performance-timeline-2-20161208/)
- [Resource Timing Level 2](https://www.w3.org/TR/2018/WD-resource-timing-2-20180518/)


## Network Information API {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/netinfo/) (Living Document)
- Repository: [GitHub wicg/netinfo](https://github.com/wicg/netinfo)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Unknown WebIDL names used: `EventHandler`, `Window`
- Missing references for links: 
     * [`https://w3c.github.io/ServiceWorker/v1/`](https://w3c.github.io/ServiceWorker/v1/)
     * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/)
     * [`https://www.w3.org/TR/netinfo/`](https://www.w3.org/TR/netinfo/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Non-element Selectors Module Level 1 {data-spec=true data-anomaly=true data-noNormativeRefs=true data-noCssDefinitions=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2014/WD-selectors-nonelement-1-20140603/) (3 June 2014)
- Editor's Draft: [https://drafts.csswg.org/selectors-nonelement/](https://drafts.csswg.org/selectors-nonelement/)
- Latest published version: [http://www.w3.org/TR/selectors-nonelement-1/](http://www.w3.org/TR/selectors-nonelement-1/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2014/WD-selectors-nonelement-1-20140603/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: selectors-nonelement-1

### Potential issue(s) {.anomalies}

- No normative references found
- No CSS definitions found
- Missing references for links: 
     * [`https://www.w3.org/TR/its20/`](https://www.w3.org/TR/its20/)
     * [`https://www.w3.org/TR/css3-namespace/`](https://www.w3.org/TR/css3-namespace/)
     * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/)
     * [`https://www.w3.org/TR/2013/WD-selectors4-20130502/`](https://www.w3.org/TR/2013/WD-selectors4-20130502/)
     * [`https://www.w3.org/TR/2013/WD-css-syntax-3-20131105/`](https://www.w3.org/TR/2013/WD-css-syntax-3-20131105/)
     * [`https://www.w3.org/TR/2013/REC-selectors-api-20130221/`](https://www.w3.org/TR/2013/REC-selectors-api-20130221/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Orientation Sensor {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-orientation-sensor-20180320/) (20 March 2018)
- Editor's Draft: [https://w3c.github.io/orientation-sensor/](https://w3c.github.io/orientation-sensor/)
- Latest published version: [https://www.w3.org/TR/orientation-sensor/](https://www.w3.org/TR/orientation-sensor/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-orientation-sensor-20180320/)
- Repository: [GitHub w3c/orientation-sensor](https://github.com/w3c/orientation-sensor)
- Shortname: orientation-sensor

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMMatrix`, `Window`
- Missing references for links: 
     * [`https://www.w3.org/TR/2016/CR-orientation-event-20160818/`](https://www.w3.org/TR/2016/CR-orientation-event-20160818/)
     * [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/), related reference "GENERIC-SENSOR" uses URL [`https://www.w3.org/TR/generic-sensor/`](https://www.w3.org/TR/generic-sensor/)
     * [`https://w3c.github.io/accelerometer/`](https://w3c.github.io/accelerometer/), related reference "ACCELEROMETER" uses URL [`https://www.w3.org/TR/accelerometer/`](https://www.w3.org/TR/accelerometer/)
     * [`https://w3c.github.io/gyroscope/`](https://w3c.github.io/gyroscope/), related reference "GYROSCOPE" uses URL [`https://www.w3.org/TR/gyroscope/`](https://www.w3.org/TR/gyroscope/)
     * [`https://w3c.github.io/magnetometer/`](https://w3c.github.io/magnetometer/), related reference "MAGNETOMETER" uses URL [`https://www.w3.org/TR/magnetometer/`](https://www.w3.org/TR/magnetometer/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [WebXR Device API](https://immersive-web.github.io/webxr/)


## Page Visibility Level 2 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/PR-page-visibility-2-20171017/) (17 October 2017)
- Editor's Draft: [https://w3c.github.io/page-visibility/](https://w3c.github.io/page-visibility/)
- Latest published version: [https://www.w3.org/TR/page-visibility-2/](https://www.w3.org/TR/page-visibility-2/)
- Latest published status: [Proposed Recommendation](https://www.w3.org/TR/2017/PR-page-visibility-2-20171017/)
- Repository: [GitHub w3c/page-visibility](https://github.com/w3c/page-visibility)
- Shortname: page-visibility-2

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Unknown WebIDL names used: `EventHandler`
- Missing references for links: 
     * [`https://www.w3.org/TR/html/full`](https://www.w3.org/TR/html/full)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/), related reference "HTML51" uses URL [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
     * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/), related reference "DOM4" uses URL [`https://www.w3.org/TR/2015/REC-dom-20151119/`](https://www.w3.org/TR/2015/REC-dom-20151119/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Beacon](https://www.w3.org/TR/2017/CR-beacon-20170413/)
- [Cooperative Scheduling of Background Tasks](https://www.w3.org/TR/2017/PR-requestidlecallback-20171010/)
- [Generic Sensor API](https://www.w3.org/TR/2018/CR-generic-sensor-20180320/)
- [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/)
- [The Screen Orientation API](https://www.w3.org/TR/2018/WD-screen-orientation-20180926/)
- [Vibration API (Second Edition)](https://www.w3.org/TR/2016/REC-vibration-20161018/)
- [Wake Lock API](https://www.w3.org/TR/2017/CR-wake-lock-20171214/)
- [Web Authentication: An API for accessing Public Key Credentials Level 1](https://www.w3.org/TR/2018/CR-webauthn-20180807/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)

Informative references to this spec from:

- [Page Visibility Level 2](https://www.w3.org/TR/2017/PR-page-visibility-2-20171017/)


## Paint Timing 1 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-paint-timing-20170907/) (7 September 2017)
- Editor's Draft: [https://w3c.github.io/paint-timing/](https://w3c.github.io/paint-timing/)
- Latest published version: [https://www.w3.org/TR/paint-timing/](https://www.w3.org/TR/paint-timing/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-paint-timing-20170907/)
- Repository: [GitHub w3c/paint-timing](https://github.com/w3c/paint-timing)
- Shortname: paint-timing

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/performance-timeline/`](https://w3c.github.io/performance-timeline/), related reference "PERFORMANCE-TIMELINE-2" uses URL [`https://www.w3.org/TR/performance-timeline-2/`](https://www.w3.org/TR/performance-timeline-2/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Payment Handler API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-payment-handler-20180108/) (08 January 2018)
- Editor's Draft: [https://w3c.github.io/payment-handler/](https://w3c.github.io/payment-handler/)
- Latest published version: [https://www.w3.org/TR/payment-handler/](https://www.w3.org/TR/payment-handler/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-payment-handler-20180108/)
- Repository: [GitHub w3c/payment-handler](https://github.com/w3c/payment-handler)
- Shortname: payment-handler

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`
- Missing references for links: 
     * [`https://w3c.github.io/payment-method-manifest/`](https://w3c.github.io/payment-method-manifest/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Payment Handler API](https://www.w3.org/TR/2018/WD-payment-handler-20180108/)


## Payment Method: Basic Card {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-payment-method-basic-card-20180920/) (20 September 2018)
- Editor's Draft: [https://w3c.github.io/payment-method-basic-card/](https://w3c.github.io/payment-method-basic-card/)
- Latest published version: [https://www.w3.org/TR/payment-method-basic-card/](https://www.w3.org/TR/payment-method-basic-card/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-payment-method-basic-card-20180920/)
- Repository: [GitHub w3c/payment-method-basic-card](https://github.com/w3c/payment-method-basic-card)
- Shortname: payment-method-basic-card

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Payment Handler API](https://www.w3.org/TR/2018/WD-payment-handler-20180108/)

Informative references to this spec from:

- [Payment Request API](https://www.w3.org/TR/2018/CR-payment-request-20180830/)


## Payment Request API {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-payment-request-20180830/) (30 August 2018)
- Editor's Draft: [https://w3c.github.io/payment-request/](https://w3c.github.io/payment-request/)
- Latest published version: [https://www.w3.org/TR/payment-request/](https://www.w3.org/TR/payment-request/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-payment-request-20180830/)
- Repository: [GitHub w3c/payment-request](https://github.com/w3c/payment-request)
- Shortname: payment-request

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Payment Handler API](https://www.w3.org/TR/2018/WD-payment-handler-20180108/)
- [Payment Method: Basic Card](https://www.w3.org/TR/2018/WD-payment-method-basic-card-20180920/)

No informative reference to this spec from other specs.


## Performance Timeline Level 2 {data-spec=true data-anomaly=true data-hasObsoleteIdl=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2016/CR-performance-timeline-2-20161208/) (08 December 2016)
- Editor's Draft: [https://w3c.github.io/performance-timeline/](https://w3c.github.io/performance-timeline/)
- Latest published version: [https://www.w3.org/TR/performance-timeline-2/](https://www.w3.org/TR/performance-timeline-2/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2016/CR-performance-timeline-2-20161208/)
- Repository: [GitHub w3c/performance-timeline](https://github.com/w3c/performance-timeline)
- Shortname: performance-timeline-2

### Potential issue(s) {.anomalies}

- Obsolete WebIDL constructs found
- Unknown WebIDL names used: `Window`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/) or [Web Workers](http://www.w3.org/TR/2015/WD-workers-20150924/)
- Missing references for links: 
     * [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/)
     * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Long Tasks API 1](https://www.w3.org/TR/2017/WD-longtasks-1-20170907/)
- [Navigation Timing Level 2](https://www.w3.org/TR/2018/WD-navigation-timing-2-20180926/)
- [Paint Timing 1](https://www.w3.org/TR/2017/WD-paint-timing-20170907/)
- [Resource Timing Level 2](https://www.w3.org/TR/2018/WD-resource-timing-2-20180518/)
- [User Timing Level 2](https://www.w3.org/TR/2018/CR-user-timing-2-20180709/)

Informative references to this spec from:

- [Performance Timeline Level 2](https://www.w3.org/TR/2016/CR-performance-timeline-2-20161208/)
- [Server Timing](https://www.w3.org/TR/2018/WD-server-timing-20180926/)


## Permissions {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-permissions-20170925/) (25 September 2017)
- Editor's Draft: [https://w3c.github.io/permissions/](https://w3c.github.io/permissions/)
- Latest published version: [https://www.w3.org/TR/permissions/](https://www.w3.org/TR/permissions/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-permissions-20170925/)
- Repository: [GitHub w3c/permissions](https://github.com/w3c/permissions)
- Shortname: permissions

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Navigator`, `PermissionName`, `Window`
- Missing references for links: 
     * [`https://w3c.github.io/manifest/`](https://w3c.github.io/manifest/)
     * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/), related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
     * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/), related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
     * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/), related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Accelerometer](https://www.w3.org/TR/2018/CR-accelerometer-20180320/)
- [Ambient Light Sensor](https://www.w3.org/TR/2018/CR-ambient-light-20180320/)
- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Generic Sensor API](https://www.w3.org/TR/2018/CR-generic-sensor-20180320/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [Gyroscope](https://www.w3.org/TR/2018/CR-gyroscope-20180320/)
- [Magnetometer](https://www.w3.org/TR/2018/CR-magnetometer-20180320/)
- [Media Capture and Streams](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)
- [Media Capture Depth Stream Extensions](https://www.w3.org/TR/2017/WD-mediacapture-depth-20170418/)
- [Payment Handler API](https://www.w3.org/TR/2018/WD-payment-handler-20180108/)
- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)
- [Presentation API](https://www.w3.org/TR/2017/CR-presentation-api-20170601/)
- [Proximity Sensor](http://www.w3.org/TR/2016/WD-proximity-20160719/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [WebUSB API](https://wicg.github.io/webusb/)

Informative references to this spec from:

- [Web NFC API](https://w3c.github.io/web-nfc/)


## Picture-in-Picture {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/picture-in-picture/) (28 September 2018)
- Repository: [GitHub wicg/picture-in-picture](https://github.com/wicg/picture-in-picture)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `HTMLVideoElement`, `Window`
- Inconsistent references for links: 
     * [`https://w3c.github.io/remote-playback/`](https://w3c.github.io/remote-playback/), related reference "Remote-Playback" uses URL [`https://www.w3.org/TR/remote-playback/`](https://www.w3.org/TR/remote-playback/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Pointer Events {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-pointerevents2-20180522/) (Level 2)
- Editor's Draft: [https://w3c.github.io/pointerevents/](https://w3c.github.io/pointerevents/)
- Latest published version: [https://www.w3.org/TR/pointerevents2/](https://www.w3.org/TR/pointerevents2/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-pointerevents2-20180522/)
- Repository: [GitHub w3c/pointerevents](https://github.com/w3c/pointerevents)
- Shortname: pointerevents2

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Unknown WebIDL names used: `EventHandler`, `GlobalEventHandlers`, `Navigator`, `Window`
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [PointerEvents - Level 2 - Extensions](https://w3c.github.io/pointerevents/extension.html)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)

Informative references to this spec from:

- [Input Device Capabilities](https://wicg.github.io/InputDeviceCapabilities/)
- [Pointer Events](https://www.w3.org/TR/2018/CR-pointerevents2-20180522/)


## Pointer Lock 2.0 {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-pointerlock-2-20180208/) (08 February 2018)
- Editor's Draft: [https://w3c.github.io/pointerlock/](https://w3c.github.io/pointerlock/)
- Latest published version: [https://www.w3.org/TR/pointerlock-2/](https://www.w3.org/TR/pointerlock-2/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-pointerlock-2-20180208/)
- Repository: [GitHub w3c/pointerlock](https://github.com/w3c/pointerlock)
- Shortname: pointerlock-2

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Pointer Events](https://www.w3.org/TR/2018/CR-pointerevents2-20180522/)
- [PointerEvents - Level 2 - Extensions](https://w3c.github.io/pointerevents/extension.html)

Informative references to this spec from:

- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)


## PointerEvents - Level 2 - Extensions {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/pointerevents/extension.html) (September 29, 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Missing references for links: 
     * [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/pointerevents/`](https://w3c.github.io/pointerevents/), related reference "pointerevents2" uses URL [`https://www.w3.org/TR/pointerevents2/`](https://www.w3.org/TR/pointerevents2/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Preload {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/CR-preload-20171026/) (26 October 2017)
- Editor's Draft: [https://w3c.github.io/preload/](https://w3c.github.io/preload/)
- Latest published version: [https://www.w3.org/TR/preload/](https://www.w3.org/TR/preload/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-preload-20171026/)
- Repository: [GitHub w3c/preload](https://github.com/w3c/preload)
- Shortname: preload

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://w3c.github.io/html/document-metadata.html`](https://w3c.github.io/html/document-metadata.html)
     * [`https://w3c.github.io/webappsec/specs/content-security-policy/`](https://w3c.github.io/webappsec/specs/content-security-policy/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Presentation API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/CR-presentation-api-20170601/) (01 June 2017)
- Editor's Draft: [https://w3c.github.io/presentation-api/](https://w3c.github.io/presentation-api/)
- Latest published version: [https://www.w3.org/TR/presentation-api/](https://www.w3.org/TR/presentation-api/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-presentation-api-20170601/)
- Repository: [GitHub w3c/presentation-api](https://github.com/w3c/presentation-api)
- Shortname: presentation-api

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Navigator`
- Inconsistent references for links: 
     * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/), related reference "FILEAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
     * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/), related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
     * [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/), related reference "MIXED-CONTENT" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Remote Playback API](https://www.w3.org/TR/2017/CR-remote-playback-20171019/)


## Progress Events {data-spec=true data-anomaly=true data-redefinedIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2014/REC-progress-events-20140211/) (11 February 2014)
- Editor's Draft: [http://dvcs.w3.org/hg/progress/raw-file/tip/Overview.html](http://dvcs.w3.org/hg/progress/raw-file/tip/Overview.html)
- Latest published version: [http://www.w3.org/TR/progress-events/](http://www.w3.org/TR/progress-events/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2014/REC-progress-events-20140211/)
- Shortname: progress-events

### Potential issue(s) {.anomalies}

- WebIDL names also defined elsewhere: 
    * `ProgressEvent` also defined in [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
    * `ProgressEventInit` also defined in [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- Missing references for links: 
     * [`https://xhr.spec.whatwg.org/`](https://xhr.spec.whatwg.org/)
     * [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Proximity Sensor {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2016/WD-proximity-20160719/) (19 July 2016)
- Editor's Draft: [https://w3c.github.io/proximity/](https://w3c.github.io/proximity/)
- Latest published version: [http://www.w3.org/TR/proximity/](http://www.w3.org/TR/proximity/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-proximity-20160719/)
- Repository: [GitHub w3c/proximity](https://github.com/w3c/proximity)
- Shortname: proximity

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Unknown WebIDL names used: `SensorReading`
- Inconsistent references for links: 
     * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/), related reference "GENERIC-SENSOR" uses URL [`https://www.w3.org/TR/generic-sensor/`](https://www.w3.org/TR/generic-sensor/)
     * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/), related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Push API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-push-api-20171215/) (15 December 2017)
- Editor's Draft: [https://w3c.github.io/push-api/](https://w3c.github.io/push-api/)
- Latest published version: [https://www.w3.org/TR/push-api/](https://www.w3.org/TR/push-api/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-push-api-20171215/)
- Repository: [GitHub w3c/push-api](https://github.com/w3c/push-api)
- Shortname: push-api

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`
- Missing references for links: 
     * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/), related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
     * [`https://www.w3.org/TR/service-workers/`](https://www.w3.org/TR/service-workers/), related reference "SERVICE-WORKERS" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
     * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/), related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)


## Referrer Policy {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/CR-referrer-policy-20170126/) (26 January 2017)
- Editor's Draft: [https://w3c.github.io/webappsec-referrer-policy/](https://w3c.github.io/webappsec-referrer-policy/)
- Latest published version: [https://www.w3.org/TR/referrer-policy/](https://www.w3.org/TR/referrer-policy/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-referrer-policy-20170126/)
- Repository: [GitHub w3c/webappsec-referrer-policy](https://github.com/w3c/webappsec-referrer-policy)
- Shortname: referrer-policy

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/2010/REC-wsc-ui-20100812/`](https://www.w3.org/TR/2010/REC-wsc-ui-20100812/), related reference "WSC-UI" uses URL [`https://www.w3.org/TR/wsc-ui/`](https://www.w3.org/TR/wsc-ui/)
     * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/), related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
     * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/), related reference "DOM4" uses URL [`https://www.w3.org/TR/dom`](https://www.w3.org/TR/dom)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [Preload](https://www.w3.org/TR/2017/CR-preload-20171026/)
- [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/)

No informative reference to this spec from other specs.


## Remote Playback API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/CR-remote-playback-20171019/) (19 October 2017)
- Editor's Draft: [https://w3c.github.io/remote-playback/](https://w3c.github.io/remote-playback/)
- Latest published version: [https://www.w3.org/TR/remote-playback/](https://www.w3.org/TR/remote-playback/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-remote-playback-20171019/)
- Repository: [GitHub w3c/remote-playback](https://github.com/w3c/remote-playback)
- Shortname: remote-playback

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `HTMLMediaElement`, `Window`
- Missing references for WebIDL names: 
     * `EventTarget` defined in [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)

No informative reference to this spec from other specs.


## Reporting API 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/reporting/) (5 September 2018)
- Repository: [GitHub w3c/reporting](https://github.com/w3c/reporting)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Date`
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/), related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
     * [`https://w3c.github.io/webdriver/webdriver-spec.html`](https://w3c.github.io/webdriver/webdriver-spec.html), related reference "WebDriver" uses URL [`https://www.w3.org/TR/webdriver1/`](https://www.w3.org/TR/webdriver1/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Feature Policy](https://wicg.github.io/feature-policy/)

No informative reference to this spec from other specs.


## Resize Observer 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/ResizeObserver/) (7 August 2018)
- Repository: [GitHub wicg/ResizeObserver](https://github.com/wicg/ResizeObserver)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMRectReadOnly`, `Window`
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Resource Timing Level 2 {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-resource-timing-2-20180518/) (18 May 2018)
- Editor's Draft: [https://w3c.github.io/resource-timing/](https://w3c.github.io/resource-timing/)
- Latest published version: [https://www.w3.org/TR/resource-timing-2/](https://www.w3.org/TR/resource-timing-2/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-resource-timing-2-20180518/)
- Repository: [GitHub w3c/resource-timing](https://github.com/w3c/resource-timing)
- Shortname: resource-timing-2

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Navigation Timing Level 2](https://www.w3.org/TR/2018/WD-navigation-timing-2-20180926/)
- [Server Timing](https://www.w3.org/TR/2018/WD-server-timing-20180926/)

Informative references to this spec from:

- [Navigation Timing Level 2](https://www.w3.org/TR/2018/WD-navigation-timing-2-20180926/)
- [Performance Timeline Level 2](https://www.w3.org/TR/2016/CR-performance-timeline-2-20161208/)


## Scalable Vector Graphics (SVG) 2 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-SVG2-20180807/) (07 August 2018)
- Editor's Draft: [https://svgwg.org/svg2-draft/](https://svgwg.org/svg2-draft/)
- Latest published version: [https://www.w3.org/TR/SVG2/](https://www.w3.org/TR/SVG2/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- Repository: [GitHub w3c/svgwg](https://github.com/w3c/svgwg)
- Shortname: SVG2

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMMatrix`, `DOMMatrixReadOnly`, `DOMPoint`, `DOMPointInit`, `DOMPointReadOnly`, `DOMRect`, `DOMRectReadOnly`, `Window`
- WebIDL names also defined elsewhere: 
    * `SVGMarkerElement` also defined in [SVG Markers](http://www.w3.org/TR/2015/WD-svg-markers-20150409/)
- Missing references for links: 
     * [`https://www.w3.org/TR/svg-integration/`](https://www.w3.org/TR/svg-integration/)
     * [`https://www.w3.org/TR/2012/CR-WebIDL-20120419/`](https://www.w3.org/TR/2012/CR-WebIDL-20120419/)
     * [`https://www.w3.org/TR/filter-effects/`](https://www.w3.org/TR/filter-effects/)
     * [`https://url.spec.whatwg.org/`](https://url.spec.whatwg.org/)
     * [`https://www.w3.org/TR/2014/WD-geometry-1-20140522/`](https://www.w3.org/TR/2014/WD-geometry-1-20140522/)
     * [`https://www.w3.org/TR/geometry-1/`](https://www.w3.org/TR/geometry-1/)
     * [`https://www.w3.org/TR/wai-aria-1.1/`](https://www.w3.org/TR/wai-aria-1.1/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css-cascade-3/`](https://www.w3.org/TR/css-cascade-3/)
     * [`https://w3c.github.io/html-aam/`](https://w3c.github.io/html-aam/)
     * [`https://w3c.github.io/svg-aam/`](https://w3c.github.io/svg-aam/)
     * [`https://w3c.github.io/selection-api/`](https://w3c.github.io/selection-api/)
     * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/)
     * [`https://www.w3.org/TR/2013/REC-css-style-attr-20131107/`](https://www.w3.org/TR/2013/REC-css-style-attr-20131107/)
     * [`https://www.w3.org/TR/cssom-1/`](https://www.w3.org/TR/cssom-1/)
     * [`https://www.w3.org/TR/css-position-3/`](https://www.w3.org/TR/css-position-3/)
     * [`https://www.w3.org/TR/css3-exclusions/`](https://www.w3.org/TR/css3-exclusions/)
     * [`https://www.w3.org/TR/css-shapes/`](https://www.w3.org/TR/css-shapes/)
     * [`https://www.w3.org/TR/resource-hints/`](https://www.w3.org/TR/resource-hints/)
     * [`https://www.w3.org/TR/2003/REC-MathML2-20031021/`](https://www.w3.org/TR/2003/REC-MathML2-20031021/)
     * [`https://www.w3.org/TR/css-color/`](https://www.w3.org/TR/css-color/)
     * [`https://www.w3.org/TR/html51/full`](https://www.w3.org/TR/html51/full)
     * [`https://www.w3.org/TR/orientation-event/`](https://www.w3.org/TR/orientation-event/)
     * [`https://www.w3.org/TR/css3-transforms/`](https://www.w3.org/TR/css3-transforms/)
     * [`https://www.w3.org/TR/cssom/`](https://www.w3.org/TR/cssom/)
     * [`https://www.w3.org/TR/core-aam-1.1/`](https://www.w3.org/TR/core-aam-1.1/)
     * [`https://www.w3.org/TR/accname-aam-1.1/`](https://www.w3.org/TR/accname-aam-1.1/)
     * [`https://w3c.github.io/aria/aria/graphics.html`](https://w3c.github.io/aria/aria/graphics.html)
     * [`https://www.w3.org/TR/smil/`](https://www.w3.org/TR/smil/)
     * [`https://w3c.github.io/aria/svg-aam/svg-aam.html`](https://w3c.github.io/aria/svg-aam/svg-aam.html)
     * [`https://www.w3.org/TR/xsl/`](https://www.w3.org/TR/xsl/)
     * [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/)
     * [`https://www.w3.org/TR/2015/WD-svg-markers-20150407/`](https://www.w3.org/TR/2015/WD-svg-markers-20150407/)
     * [`https://www.w3.org/TR/2015/WD-svg-strokes-20150407/`](https://www.w3.org/TR/2015/WD-svg-strokes-20150407/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/2008/REC-xml-20081126/`](https://www.w3.org/TR/2008/REC-xml-20081126/), related reference "xml" uses URL [`https://www.w3.org/TR/xml`](https://www.w3.org/TR/xml)
     * [`https://www.w3.org/TR/2006/REC-xml-names-20060816/`](https://www.w3.org/TR/2006/REC-xml-names-20060816/), related reference "xml-names" uses URL [`https://www.w3.org/TR/xml-names`](https://www.w3.org/TR/xml-names)
     * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/), related reference "dom" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "css-values" uses URL [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/)
     * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
     * [`https://www.w3.org/TR/2011/REC-CSS2-20110607/`](https://www.w3.org/TR/2011/REC-CSS2-20110607/), related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2`](https://www.w3.org/TR/CSS2)
     * [`https://www.w3.org/TR/compositing/`](https://www.w3.org/TR/compositing/), related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
     * [`https://www.w3.org/TR/2015/CR-compositing-1-20150113/`](https://www.w3.org/TR/2015/CR-compositing-1-20150113/), related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
     * [`https://www.w3.org/TR/2015/CR-compositing-1-20150113`](https://www.w3.org/TR/2015/CR-compositing-1-20150113), related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
     * [`https://www.w3.org/TR/2012/WD-css3-values-20120308/`](https://www.w3.org/TR/2012/WD-css3-values-20120308/), related reference "css-values" uses URL [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/)
     * [`https://www.w3.org/TR/2014/CR-html5-20140204/`](https://www.w3.org/TR/2014/CR-html5-20140204/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
     * [`https://www.w3.org/TR/2014/WD-dom-20140204/`](https://www.w3.org/TR/2014/WD-dom-20140204/), related reference "dom" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
     * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/), related reference "css-writing-modes-3" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
     * [`https://www.w3.org/TR/2011/WD-css3-fonts-20111004/`](https://www.w3.org/TR/2011/WD-css3-fonts-20111004/), related reference "css-fonts-3" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
     * [`https://www.w3.org/TR/2015/CR-css-ui-3-20150707/`](https://www.w3.org/TR/2015/CR-css-ui-3-20150707/), related reference "css-ui-3" uses URL [`https://www.w3.org/TR/css-ui-3/`](https://www.w3.org/TR/css-ui-3/)
     * [`https://www.w3.org/TR/2001/REC-smil-animation-20010904/`](https://www.w3.org/TR/2001/REC-smil-animation-20010904/), related reference "smil-animation" uses URL [`https://www.w3.org/TR/smil-animation/`](https://www.w3.org/TR/smil-animation/)
     * [`https://www.w3.org/TR/2001/REC-xlink-20010627/`](https://www.w3.org/TR/2001/REC-xlink-20010627/), related reference "xlink" uses URL [`https://www.w3.org/TR/xlink/`](https://www.w3.org/TR/xlink/)
     * [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Views-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Views-20001113/), related reference "DOM-Level-2-Views" uses URL [`https://www.w3.org/TR/DOM-Level-2-Views`](https://www.w3.org/TR/DOM-Level-2-Views)
     * [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/), related reference "DOM-Level-2-Style" uses URL [`https://www.w3.org/TR/DOM-Level-2-Style/`](https://www.w3.org/TR/DOM-Level-2-Style/)
     * [`https://www.w3.org/TR/2012/WD-css3-animations-20120403/`](https://www.w3.org/TR/2012/WD-css3-animations-20120403/), related reference "css3-animations" uses URL [`https://www.w3.org/TR/css3-animations/`](https://www.w3.org/TR/css3-animations/)
     * [`https://w3c.github.io/html/`](https://w3c.github.io/html/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
     * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/), related reference "uievents" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
     * [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/), related reference "web-animations-1" uses URL [`https://www.w3.org/TR/web-animations-1/`](https://www.w3.org/TR/web-animations-1/)
     * [`https://www.w3.org/TR/2015/NOTE-UAAG20-20151215/`](https://www.w3.org/TR/2015/NOTE-UAAG20-20151215/), related reference "UAAG20" uses URL [`https://www.w3.org/TR/UAAG20/`](https://www.w3.org/TR/UAAG20/)
     * [`https://www.w3.org/TR/2008/REC-CSS2-20080411/`](https://www.w3.org/TR/2008/REC-CSS2-20080411/), related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2`](https://www.w3.org/TR/CSS2)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compositing and Blending Level 1](http://www.w3.org/TR/2015/CR-compositing-1-20150113/)
- [Compositing and Blending Level 2](https://drafts.fxtf.org/compositing-2/)
- [CSS Basic User Interface Module Level 3 (CSS3 UI)](https://www.w3.org/TR/2018/REC-css-ui-3-20180621/)
- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Color Module Level 3](https://www.w3.org/TR/2018/REC-css-color-3-20180619/)
- [CSS Color Module Level 4](http://www.w3.org/TR/2016/WD-css-color-4-20160705/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Fill and Stroke Module Level 3](https://www.w3.org/TR/2017/WD-fill-stroke-3-20170413/)
- [CSS Image Values and Replaced Content Module Level 4](https://www.w3.org/TR/2017/WD-css-images-4-20170413/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Transforms Module Level 1](https://www.w3.org/TR/2017/WD-css-transforms-1-20171130/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [CSSOM View Module](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)
- [Filter Effects Module Level 1](http://www.w3.org/TR/2014/WD-filter-effects-1-20141125/)
- [Filter Effects Module Level 2](https://drafts.fxtf.org/filter-effects-2/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [Motion Path Module Level 1](https://www.w3.org/TR/2017/WD-motion-1-20170711/)
- [Resource Timing Level 2](https://www.w3.org/TR/2018/WD-resource-timing-2-20180518/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)
- [SVG Markers](http://www.w3.org/TR/2015/WD-svg-markers-20150409/)
- [SVG Strokes](http://www.w3.org/TR/2015/WD-svg-strokes-20150409/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [CSS Masking Module Level 1](http://www.w3.org/TR/2014/CR-css-masking-1-20140826/)

Informative references to this spec from:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/2018/WD-wai-aria-1.2-20180719/)
- [Clipboard API and events](https://www.w3.org/TR/2017/WD-clipboard-apis-20170929/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Style Attributes](http://www.w3.org/TR/2013/REC-css-style-attr-20131107/)
- [CSS Transitions](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)
- [CSSOM View Module](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)
- [Geometry Interfaces Module Level 1](http://www.w3.org/TR/2014/CR-geometry-1-20141125/)
- [Selectors Level 3](https://www.w3.org/TR/2018/PR-selectors-3-20180911/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)


## Screen Capture {data-spec=true data-anomaly=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2016/WD-screen-capture-20160714/) (14 July 2016)
- Editor's Draft: [https://w3c.github.io/mediacapture-screen-share/](https://w3c.github.io/mediacapture-screen-share/)
- Latest published version: [http://www.w3.org/TR/screen-capture/](http://www.w3.org/TR/screen-capture/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-screen-capture-20160714/)
- Repository: [GitHub w3c/mediacapture-screen-share](https://github.com/w3c/mediacapture-screen-share)
- Shortname: screen-capture

### Potential issue(s) {.anomalies}

- Inconsistent references for links: 
     * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/), related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Scroll-linked Animations {data-spec=true data-anomaly=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/scroll-animations/) (21 September 2017)
- Repository: [GitHub wicg/scroll-animations](https://github.com/wicg/scroll-animations)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Inconsistent references for links: 
     * [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/), related reference "WEB-ANIMATIONS-1" uses URL [`https://www.w3.org/TR/web-animations-1/`](https://www.w3.org/TR/web-animations-1/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Secure Contexts {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/) (15 September 2016)
- Editor's Draft: [https://w3c.github.io/webappsec-secure-contexts/](https://w3c.github.io/webappsec-secure-contexts/)
- Latest published version: [https://www.w3.org/TR/secure-contexts/](https://www.w3.org/TR/secure-contexts/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/)
- Repository: [GitHub w3c/webappsec-secure-contexts](https://github.com/w3c/webappsec-secure-contexts)
- Shortname: secure-contexts

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Unknown WebIDL names used: `WindowOrWorkerGlobalScope`
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/), related reference "MIX" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Credential Management Level 1](https://www.w3.org/TR/2017/WD-credential-management-1-20170804/)
- [Generic Sensor API](https://www.w3.org/TR/2018/CR-generic-sensor-20180320/)
- [Keyboard Map](https://wicg.github.io/keyboard-map/)
- [Mixed Content](https://www.w3.org/TR/2016/CR-mixed-content-20160802/)
- [Payment Request API](https://www.w3.org/TR/2018/CR-payment-request-20180830/)
- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)
- [Push API](https://www.w3.org/TR/2017/WD-push-api-20171215/)
- [Referrer Policy](https://www.w3.org/TR/2017/CR-referrer-policy-20170126/)
- [Remote Playback API](https://www.w3.org/TR/2017/CR-remote-playback-20171019/)
- [Reporting API 1](https://w3c.github.io/reporting/)
- [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/)
- [Web App Manifest](https://www.w3.org/TR/2018/WD-appmanifest-20180906/)
- [Web Authentication: An API for accessing Public Key Credentials Level 1](https://www.w3.org/TR/2018/CR-webauthn-20180807/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)

Informative references to this spec from:

- [Encrypted Media Extensions](https://www.w3.org/TR/2017/REC-encrypted-media-20170918/)
- [WebUSB API](https://wicg.github.io/webusb/)


## Selection API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-selection-api-20180926/) (26 September 2018)
- Editor's Draft: [https://w3c.github.io/selection-api/](https://w3c.github.io/selection-api/)
- Latest published version: [https://www.w3.org/TR/selection-api/](https://www.w3.org/TR/selection-api/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-selection-api-20180926/)
- Repository: [GitHub w3c/selection-api](https://github.com/w3c/selection-api)
- Shortname: selection-api

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `GlobalEventHandlers`, `Window`
- Missing references for links: 
     * [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
     * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/), related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Selectors API Level 1 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-inconsistentRef=true data-noEdDraft=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2013/REC-selectors-api-20130221/) (21 February 2013)
- Latest published version: [http://www.w3.org/TR/selectors-api/](http://www.w3.org/TR/selectors-api/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2013/REC-selectors-api-20130221/)
- Shortname: selectors-api

### Potential issue(s) {.anomalies}

- Link to an Editor's Draft not found
- Spec uses WebIDL but does not reference it normatively
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/), related reference "SELECT" uses URL [`http://www.w3.org/TR/2011/REC-css3-selectors-20110929/`](http://www.w3.org/TR/2011/REC-css3-selectors-20110929/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Selectors Level 3 {data-spec=true data-anomaly=true data-noCssDefinitions=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/PR-selectors-3-20180911/) (11 September 2018)
- Editor's Draft: [https://drafts.csswg.org/selectors-3/](https://drafts.csswg.org/selectors-3/)
- Latest published version: [https://www.w3.org/TR/selectors-3/](https://www.w3.org/TR/selectors-3/)
- Latest published status: [Proposed Recommendation](https://www.w3.org/TR/2018/PR-selectors-3-20180911/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: selectors-3

### Potential issue(s) {.anomalies}

- No CSS definitions found
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-namespace/`](https://www.w3.org/TR/css3-namespace/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/2018/WD-css-align-3-20180830/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

Informative references to this spec from:

- [CSS Inline Layout Module Level 3](https://www.w3.org/TR/2018/WD-css-inline-3-20180808/)


## Selectors Level 4 {data-spec=true data-anomaly=true data-noCssDefinitions=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-selectors-4-20180202/) (2 February 2018)
- Editor's Draft: [https://drafts.csswg.org/selectors](https://drafts.csswg.org/selectors)
- Latest published version: [https://www.w3.org/TR/selectors-4/](https://www.w3.org/TR/selectors-4/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: selectors-4

### Potential issue(s) {.anomalies}

- No CSS definitions found
- Missing references for links: 
     * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/)
     * [`https://www.w3.org/TR/css3-namespace/`](https://www.w3.org/TR/css3-namespace/)
     * [`https://www.w3.org/TR/css3-text/`](https://www.w3.org/TR/css3-text/)
     * [`https://www.w3.org/TR/2013/WD-selectors4-20130502/`](https://www.w3.org/TR/2013/WD-selectors4-20130502/)
     * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/2018/CR-css-scroll-snap-1-20180814/)
- [CSS Shadow Parts](https://drafts.csswg.org/css-shadow-parts-1/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)

No informative reference to this spec from other specs.


## Server Timing {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-server-timing-20180926/) (26 September 2018)
- Editor's Draft: [https://w3c.github.io/server-timing/](https://w3c.github.io/server-timing/)
- Latest published version: [https://www.w3.org/TR/server-timing/](https://www.w3.org/TR/server-timing/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-server-timing-20180926/)
- Repository: [GitHub w3c/server-timing](https://github.com/w3c/server-timing)
- Shortname: server-timing

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/) or [Web Workers](http://www.w3.org/TR/2015/WD-workers-20150924/)
     * `DOMHighResTimeStamp` defined in [High Resolution Time Level 3](https://www.w3.org/TR/2017/NOTE-hr-time-3-20170803/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Server-Sent Events {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2015/REC-eventsource-20150203/) (03 February 2015)
- Editor's Draft: [http://dev.w3.org/html5/eventsource/](http://dev.w3.org/html5/eventsource/)
- Latest published version: [http://www.w3.org/TR/eventsource/](http://www.w3.org/TR/eventsource/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2015/REC-eventsource-20150203/)
- Shortname: eventsource

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Content Security Policy Level 3](https://www.w3.org/TR/2016/WD-CSP3-20160913/)


## Service Workers 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/) (2 November 2017)
- Editor's Draft: [https://w3c.github.io/ServiceWorker/v1/](https://w3c.github.io/ServiceWorker/v1/)
- Latest published version: [https://www.w3.org/TR/service-workers-1/](https://www.w3.org/TR/service-workers-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/)
- Repository: [GitHub w3c/ServiceWorker](https://github.com/w3c/ServiceWorker)
- Shortname: service-workers-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Navigator`, `Window`, `WindowOrWorkerGlobalScope`, `WorkerType`
- WebIDL names also defined elsewhere: 
    * `Worker` also defined in [Web Workers](http://www.w3.org/TR/2015/WD-workers-20150924/)
- Missing references for links: 
     * [`https://w3c.github.io/push-api/`](https://w3c.github.io/push-api/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/), related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
     * [`https://w3c.github.io/webappsec-referrer-policy/`](https://w3c.github.io/webappsec-referrer-policy/), related reference "REFERRER-POLICY" uses URL [`https://www.w3.org/TR/referrer-policy/`](https://www.w3.org/TR/referrer-policy/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Content Security Policy Level 3](https://www.w3.org/TR/2016/WD-CSP3-20160913/)
- [Cookie Store API](https://wicg.github.io/cookie-store/)
- [Navigation Timing Level 2](https://www.w3.org/TR/2018/WD-navigation-timing-2-20180926/)
- [Payment Handler API](https://www.w3.org/TR/2018/WD-payment-handler-20180108/)
- [Presentation API](https://www.w3.org/TR/2017/CR-presentation-api-20170601/)
- [Push API](https://www.w3.org/TR/2017/WD-push-api-20171215/)
- [Resource Timing Level 2](https://www.w3.org/TR/2018/WD-resource-timing-2-20180518/)
- [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- [Web App Manifest](https://www.w3.org/TR/2018/WD-appmanifest-20180906/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Console Standard](https://console.spec.whatwg.org/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [Encoding](https://www.w3.org/TR/2018/CR-encoding-20180327/)
- [File API](https://www.w3.org/TR/2017/WD-FileAPI-20171026/)
- [Indexed Database API 2.0](https://www.w3.org/TR/2018/REC-IndexedDB-2-20180130/)
- [Performance Timeline Level 2](https://www.w3.org/TR/2016/CR-performance-timeline-2-20161208/)
- [Server Timing](https://www.w3.org/TR/2018/WD-server-timing-20180926/)
- [Web Cryptography API](https://www.w3.org/TR/2017/REC-WebCryptoAPI-20170126/)

Informative references to this spec from:

- [Beacon](https://www.w3.org/TR/2017/CR-beacon-20170413/)
- [Cookie Store API](https://wicg.github.io/cookie-store/)
- [Secure Contexts](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/)
- [Streams Standard](https://streams.spec.whatwg.org/)
- [Web Workers](http://www.w3.org/TR/2015/WD-workers-20150924/)


## Static Range {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/staticrange/) (14 December 2017)
- Repository: [GitHub w3c/staticrange](https://github.com/w3c/staticrange)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Input Events Level 1](https://www.w3.org/TR/2017/WD-input-events-1-20170905/)

No informative reference to this spec from other specs.


## Storage Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://storage.spec.whatwg.org/) (21 August 2018)
- Repository: [GitHub whatwg/storage](https://github.com/whatwg/storage)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)

No informative reference to this spec from other specs.


## Streams Standard {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://streams.spec.whatwg.org/) (4 September 2018)
- Repository: [GitHub whatwg/streams](https://github.com/whatwg/streams)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Parser API](https://wicg.github.io/CSS-Parser-API/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File API](https://www.w3.org/TR/2017/WD-FileAPI-20171026/)

No informative reference to this spec from other specs.


## Subresource Integrity {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2016/REC-SRI-20160623/) (23 June 2016)
- Editor's Draft: [https://w3c.github.io/webappsec-subresource-integrity/](https://w3c.github.io/webappsec-subresource-integrity/)
- Latest published version: [http://www.w3.org/TR/SRI/](http://www.w3.org/TR/SRI/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2016/REC-SRI-20160623/)
- Repository: [GitHub w3c/webappsec-subresource-integrity](https://github.com/w3c/webappsec-subresource-integrity)
- Shortname: SRI

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Unknown WebIDL names used: `HTMLLinkElement`, `HTMLScriptElement`
- Missing references for links: 
     * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
     * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Content Security Policy Level 3](https://www.w3.org/TR/2016/WD-CSP3-20160913/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)

Informative references to this spec from:

- [Credential Management Level 1](https://www.w3.org/TR/2017/WD-credential-management-1-20170804/)
- [Mixed Content](https://www.w3.org/TR/2016/CR-mixed-content-20160802/)


## SVG Markers {data-spec=true data-anomaly=true data-hasUnexpectedIdl=true data-unknownIdlNames=true data-redefinedIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2015/WD-svg-markers-20150409/) (09 April 2015)
- Editor's Draft: [https://svgwg.org/specs/markers/](https://svgwg.org/specs/markers/)
- Latest published version: [http://www.w3.org/TR/svg-markers/](http://www.w3.org/TR/svg-markers/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2015/WD-svg-markers-20150409/)
- Repository: [GitHub w3c/svgwg](https://github.com/w3c/svgwg)
- Shortname: svg-markers

### Potential issue(s) {.anomalies}

- Unexpected WebIDL definitions found
- Unknown WebIDL names used: `DOMPoint`, `DOMPointReadOnly`
- WebIDL names also defined elsewhere: 
    * `SVGMarkerElement` also defined in [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- Missing references for links: 
     * [`https://www.w3.org/TR/2014/CR-css-masking-1-20140826/`](https://www.w3.org/TR/2014/CR-css-masking-1-20140826/)
     * [`https://www.w3.org/TR/2014/WD-filter-effects-1-20141125/`](https://www.w3.org/TR/2014/WD-filter-effects-1-20141125/)
     * [`https://www.w3.org/TR/2014/CR-html5-20140204/`](https://www.w3.org/TR/2014/CR-html5-20140204/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/2012/WD-css3-values-20120308/`](https://www.w3.org/TR/2012/WD-css3-values-20120308/)
     * [`https://www.w3.org/TR/2014/WD-geometry-1-20140522/`](https://www.w3.org/TR/2014/WD-geometry-1-20140522/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## SVG Strokes {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2015/WD-svg-strokes-20150409/) (09 April 2015)
- Editor's Draft: [https://svgwg.org/specs/strokes/](https://svgwg.org/specs/strokes/)
- Latest published version: [http://www.w3.org/TR/svg-strokes/](http://www.w3.org/TR/svg-strokes/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2015/WD-svg-strokes-20150409/)
- Repository: [GitHub w3c/svgwg](https://github.com/w3c/svgwg)
- Shortname: svg-strokes

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## The Screen Orientation API {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-screen-orientation-20180926/) (26 September 2018)
- Editor's Draft: [https://w3c.github.io/screen-orientation/](https://w3c.github.io/screen-orientation/)
- Latest published version: [https://www.w3.org/TR/screen-orientation/](https://www.w3.org/TR/screen-orientation/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-screen-orientation-20180926/)
- Repository: [GitHub w3c/screen-orientation](https://github.com/w3c/screen-orientation)
- Shortname: screen-orientation

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Accelerometer](https://www.w3.org/TR/2018/CR-accelerometer-20180320/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Web App Manifest](https://www.w3.org/TR/2018/WD-appmanifest-20180906/)

No informative reference to this spec from other specs.


## The WebSocket API {data-spec=true data-anomaly=true data-hasInvalidIdl=true data-noEdDraft=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2012/CR-websockets-20120920/) (20 September 2012)
- Latest published version: [http://www.w3.org/TR/websockets/](http://www.w3.org/TR/websockets/)
- Latest published status: [Candidate Recommendation](http://www.w3.org/TR/2012/CR-websockets-20120920/)
- Shortname: websockets

### Potential issue(s) {.anomalies}

- Link to an Editor's Draft not found
- Invalid WebIDL content found

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Mixed Content](https://www.w3.org/TR/2016/CR-mixed-content-20160802/)

Informative references to this spec from:

- [Content Security Policy Level 3](https://www.w3.org/TR/2016/WD-CSP3-20160913/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/2018/CR-webrtc-20180927/)


## Touch Events {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2013/REC-touch-events-20131010/) (10 October 2013)
- Editor's Draft: [https://w3c.github.io/touch-events/](https://w3c.github.io/touch-events/)
- Latest published version: [http://www.w3.org/TR/touch-events/](http://www.w3.org/TR/touch-events/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2013/REC-touch-events-20131010/)
- Repository: [GitHub w3c/touch-events](https://github.com/w3c/touch-events)
- Shortname: touch-events

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `WindowProxy`
- Missing references for WebIDL names: 
     * `UIEvent` defined in [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Input Device Capabilities](https://wicg.github.io/InputDeviceCapabilities/)
- [Pointer Events](https://www.w3.org/TR/2018/CR-pointerevents2-20180522/)


## UI Events {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2016/WD-uievents-20160804/) (04 August 2016)
- Editor's Draft: [https://w3c.github.io/uievents/](https://w3c.github.io/uievents/)
- Latest published version: [https://www.w3.org/TR/uievents/](https://www.w3.org/TR/uievents/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- Repository: [GitHub w3c/uievents](https://github.com/w3c/uievents)
- Shortname: uievents

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Unknown WebIDL names used: `Window`
- Missing references for links: 
     * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/)
     * [`https://www.w3.org/TR/2004/REC-xml-20040204/`](https://www.w3.org/TR/2004/REC-xml-20040204/)
- Inconsistent references for links: 
     * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/), related reference "DOM-Level-3-Core" uses URL [`http://www.w3.org/TR/DOM-Level-3-Core/`](http://www.w3.org/TR/DOM-Level-3-Core/)
     * [`https://www.w3.org/TR/css-syntax-3/`](https://www.w3.org/TR/css-syntax-3/), related reference "CSS-SYNTAX-3" uses URL [`http://dev.w3.org/csswg/css-syntax/`](http://dev.w3.org/csswg/css-syntax/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Input Device Capabilities](https://wicg.github.io/InputDeviceCapabilities/)
- [Input Events Level 1](https://www.w3.org/TR/2017/WD-input-events-1-20170905/)
- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)
- [Keyboard Map](https://wicg.github.io/keyboard-map/)
- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)
- [Pointer Events](https://www.w3.org/TR/2018/CR-pointerevents2-20180522/)
- [Pointer Lock 2.0](https://www.w3.org/TR/2018/WD-pointerlock-2-20180208/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [UI Events KeyboardEvent code Values](https://www.w3.org/TR/2017/CR-uievents-code-20170601/)
- [UI Events KeyboardEvent key Values](https://www.w3.org/TR/2017/CR-uievents-key-20170601/)
- [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [CSSOM View Module](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)
- [HTML Canvas 2D Context](http://www.w3.org/TR/2015/REC-2dcontext-20151119/)
- [Touch Events](http://www.w3.org/TR/2013/REC-touch-events-20131010/)

No informative reference to this spec from other specs.


## UI Events KeyboardEvent code Values {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/CR-uievents-code-20170601/) (01 June 2017)
- Editor's Draft: [https://w3c.github.io/uievents-code/](https://w3c.github.io/uievents-code/)
- Latest published version: [https://www.w3.org/TR/uievents-code/](https://www.w3.org/TR/uievents-code/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-uievents-code-20170601/)
- Repository: [GitHub w3c/uievents-code](https://github.com/w3c/uievents-code)
- Shortname: uievents-code

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)
- [Keyboard Map](https://wicg.github.io/keyboard-map/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [UI Events KeyboardEvent key Values](https://www.w3.org/TR/2017/CR-uievents-key-20170601/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)

No informative reference to this spec from other specs.


## UI Events KeyboardEvent key Values {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/CR-uievents-key-20170601/) (01 June 2017)
- Editor's Draft: [https://w3c.github.io/uievents-key/](https://w3c.github.io/uievents-key/)
- Latest published version: [https://www.w3.org/TR/uievents-key/](https://www.w3.org/TR/uievents-key/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-uievents-key-20170601/)
- Repository: [GitHub w3c/uievents-key](https://github.com/w3c/uievents-key)
- Shortname: uievents-key

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/2018/WD-wai-aria-1.2-20180719/)
- [Keyboard Map](https://wicg.github.io/keyboard-map/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [UI Events KeyboardEvent code Values](https://www.w3.org/TR/2017/CR-uievents-code-20170601/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)

No informative reference to this spec from other specs.


## URL Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://url.spec.whatwg.org/) (21 August 2018)
- Repository: [GitHub whatwg/url](https://github.com/whatwg/url)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Beacon](https://www.w3.org/TR/2017/CR-beacon-20170413/)
- [Content Security Policy Level 3](https://www.w3.org/TR/2016/WD-CSP3-20160913/)
- [Content Security Policy: Embedded Enforcement](https://www.w3.org/TR/2016/WD-csp-embedded-enforcement-20160909/)
- [Cookie Store API](https://wicg.github.io/cookie-store/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Credential Management Level 1](https://www.w3.org/TR/2017/WD-credential-management-1-20170804/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File API](https://www.w3.org/TR/2017/WD-FileAPI-20171026/)
- [Media Session Standard](https://wicg.github.io/mediasession/)
- [Motion Path Module Level 1](https://www.w3.org/TR/2017/WD-motion-1-20170711/)
- [Payment Handler API](https://www.w3.org/TR/2018/WD-payment-handler-20180108/)
- [Presentation API](https://www.w3.org/TR/2017/CR-presentation-api-20170601/)
- [Referrer Policy](https://www.w3.org/TR/2017/CR-referrer-policy-20170126/)
- [Remote Playback API](https://www.w3.org/TR/2017/CR-remote-playback-20171019/)
- [Reporting API 1](https://w3c.github.io/reporting/)
- [Secure Contexts](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)
- [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- [Web App Manifest](https://www.w3.org/TR/2018/WD-appmanifest-20180906/)
- [Web Authentication: An API for accessing Public Key Credentials Level 1](https://www.w3.org/TR/2018/CR-webauthn-20180807/)
- [Web NFC API](https://w3c.github.io/web-nfc/)
- [Web Share API](https://wicg.github.io/web-share/)
- [Web Workers](http://www.w3.org/TR/2015/WD-workers-20150924/)
- [WebAssembly JavaScript Interface](https://www.w3.org/TR/2018/WD-wasm-js-api-1-20180904/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Media Source Extensions™](https://www.w3.org/TR/2016/REC-media-source-20161117/)

Informative references to this spec from:

- [Encoding](https://www.w3.org/TR/2018/CR-encoding-20180327/)
- [Navigation Timing Level 2](https://www.w3.org/TR/2018/WD-navigation-timing-2-20180926/)


## User Interface Security and the Visibility API {data-spec=true data-anomaly=true data-hasInvalidIdl=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2016/WD-UISecurity-20160607/) (7 June 2016)
- Editor's Draft: [http://w3c.github.io/webappsec-uisecurity/index.html](http://w3c.github.io/webappsec-uisecurity/index.html)
- Latest published version: [http://www.w3.org/TR/UISecurity/](http://www.w3.org/TR/UISecurity/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-UISecurity-20160607/)
- Repository: [GitHub w3c/webappsec-uisecurity](https://github.com/w3c/webappsec-uisecurity)
- Shortname: UISecurity

### Potential issue(s) {.anomalies}

- Invalid WebIDL content found
- Missing references for links: 
     * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/)
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/)
     * [`https://w3c.github.io/requestidlecallback/`](https://w3c.github.io/requestidlecallback/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/), related reference "CSSOM-VIEW-1" uses URL [`http://www.w3.org/TR/cssom-view-1/`](http://www.w3.org/TR/cssom-view-1/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Content Security Policy Level 3](https://www.w3.org/TR/2016/WD-CSP3-20160913/)


## User Timing Level 2 {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-user-timing-2-20180709/) (09 July 2018)
- Editor's Draft: [https://w3c.github.io/user-timing/](https://w3c.github.io/user-timing/)
- Latest published version: [https://www.w3.org/TR/user-timing-2/](https://www.w3.org/TR/user-timing-2/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-user-timing-2-20180709/)
- Repository: [GitHub w3c/user-timing](https://github.com/w3c/user-timing)
- Shortname: user-timing-2

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Performance Timeline Level 2](https://www.w3.org/TR/2016/CR-performance-timeline-2-20161208/)
- [User Timing Level 2](https://www.w3.org/TR/2018/CR-user-timing-2-20180709/)


## Vibration API (Second Edition) {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2016/REC-vibration-20161018/) (18 October 2016)
- Editor's Draft: [https://w3c.github.io/vibration/](https://w3c.github.io/vibration/)
- Latest published version: [https://www.w3.org/TR/vibration/](https://www.w3.org/TR/vibration/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2016/REC-vibration-20161018/)
- Repository: [GitHub w3c/vibration](https://github.com/w3c/vibration)
- Shortname: vibration

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Navigator`
- Inconsistent references for links: 
     * [`https://w3c.github.io/page-visibility/`](https://w3c.github.io/page-visibility/), related reference "PAGE-VISIBILITY-2" uses URL [`https://www.w3.org/TR/page-visibility-2/`](https://www.w3.org/TR/page-visibility-2/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## W3C DOM 4.1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-dom41-20180201/) (1 February 2018)
- Editor's Draft: [https://w3c.github.io/dom/](https://w3c.github.io/dom/)
- Latest published version: [https://www.w3.org/TR/dom41/](https://www.w3.org/TR/dom41/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- Repository: [GitHub w3c/dom](https://github.com/w3c/dom)
- Shortname: dom41

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `HTMLSlotElement`, `Window`
- Missing references for links: 
     * [`https://www.w3.org/TR/touch-events/`](https://www.w3.org/TR/touch-events/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/), related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
     * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/), related reference "HR-TIME" uses URL [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/)
     * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/), related reference "SERVICE-WORKERS" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
     * [`https://www.w3.org/TR/2017/WD-dom41-20170420/`](https://www.w3.org/TR/2017/WD-dom41-20170420/), related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
     * [`https://www.w3.org/TR/2017/WD-dom41-20170321/`](https://www.w3.org/TR/2017/WD-dom41-20170321/), related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
     * [`https://www.w3.org/TR/2015/REC-dom-20151119/`](https://www.w3.org/TR/2015/REC-dom-20151119/), related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Beacon](https://www.w3.org/TR/2017/CR-beacon-20170413/)
- [Box Tree API Level 1](https://drafts.css-houdini.org/box-tree-api/)
- [Clipboard API and events](https://www.w3.org/TR/2017/WD-clipboard-apis-20170929/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Content Security Policy Level 3](https://www.w3.org/TR/2016/WD-CSP3-20160913/)
- [Content Security Policy: Embedded Enforcement](https://www.w3.org/TR/2016/WD-csp-embedded-enforcement-20160909/)
- [Cookie Store API](https://wicg.github.io/cookie-store/)
- [Credential Management Level 1](https://www.w3.org/TR/2017/WD-credential-management-1-20170804/)
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [CSS Animations Level 1](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)
- [CSS Box Model Module Level 3](https://drafts.csswg.org/css-box-3/)
- [CSS Custom Properties for Cascading Variables Module Level 1](http://www.w3.org/TR/2015/CR-css-variables-1-20151203/)
- [CSS Environment Variables Module Level 1](https://drafts.csswg.org/css-env-1/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- [CSS Positioned Layout Module Level 3](http://www.w3.org/TR/2016/WD-css-position-3-20160517/)
- [CSS Properties and Values API Level 1](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/)
- [CSS Pseudo-Elements Module Level 4](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- [CSS Regions Module Level 1](http://www.w3.org/TR/2014/WD-css-regions-1-20141009/)
- [CSS Scroll Anchoring Module Level 1](https://drafts.csswg.org/css-scroll-anchoring-1/)
- [CSS Shadow Parts](https://drafts.csswg.org/css-shadow-parts-1/)
- [CSS Transitions](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSSOM View Module](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)
- [Encrypted Media Extensions](https://www.w3.org/TR/2017/REC-encrypted-media-20170918/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File API](https://www.w3.org/TR/2017/WD-FileAPI-20171026/)
- [Font Metrics API Level 1](https://drafts.css-houdini.org/font-metrics-api/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [Gamepad](https://www.w3.org/TR/2018/WD-gamepad-20180926/)
- [Generic Sensor API](https://www.w3.org/TR/2018/CR-generic-sensor-20180320/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/)
- [Indexed Database API 2.0](https://www.w3.org/TR/2018/REC-IndexedDB-2-20180130/)
- [Intersection Observer](https://www.w3.org/TR/2017/WD-intersection-observer-20170914/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [MediaStream Recording](https://www.w3.org/TR/2017/WD-mediastream-recording-20170621/)
- [Network Information API](https://wicg.github.io/netinfo/)
- [Page Visibility Level 2](https://www.w3.org/TR/2017/PR-page-visibility-2-20171017/)
- [Payment Handler API](https://www.w3.org/TR/2018/WD-payment-handler-20180108/)
- [Payment Request API](https://www.w3.org/TR/2018/CR-payment-request-20180830/)
- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)
- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)
- [Pointer Events](https://www.w3.org/TR/2018/CR-pointerevents2-20180522/)
- [Pointer Lock 2.0](https://www.w3.org/TR/2018/WD-pointerlock-2-20180208/)
- [PointerEvents - Level 2 - Extensions](https://w3c.github.io/pointerevents/extension.html)
- [Preload](https://www.w3.org/TR/2017/CR-preload-20171026/)
- [Presentation API](https://www.w3.org/TR/2017/CR-presentation-api-20170601/)
- [Progress Events](http://www.w3.org/TR/2014/REC-progress-events-20140211/)
- [Push API](https://www.w3.org/TR/2017/WD-push-api-20171215/)
- [Referrer Policy](https://www.w3.org/TR/2017/CR-referrer-policy-20170126/)
- [Reporting API 1](https://w3c.github.io/reporting/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [Resource Timing Level 2](https://www.w3.org/TR/2018/WD-resource-timing-2-20180518/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)
- [Selection API](https://www.w3.org/TR/2018/WD-selection-api-20180926/)
- [Selectors API Level 1](http://www.w3.org/TR/2013/REC-selectors-api-20130221/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)
- [Server-Sent Events](http://www.w3.org/TR/2015/REC-eventsource-20150203/)
- [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/)
- [Static Range](https://w3c.github.io/staticrange/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [The Screen Orientation API](https://www.w3.org/TR/2018/WD-screen-orientation-20180926/)
- [Touch Events](http://www.w3.org/TR/2013/REC-touch-events-20131010/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [URL Standard](https://url.spec.whatwg.org/)
- [User Interface Security and the Visibility API](http://www.w3.org/TR/2016/WD-UISecurity-20160607/)
- [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- [Wake Lock API](https://www.w3.org/TR/2017/CR-wake-lock-20171214/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)
- [Web App Manifest](https://www.w3.org/TR/2018/WD-appmanifest-20180906/)
- [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/)
- [Web Authentication: An API for accessing Public Key Credentials Level 1](https://www.w3.org/TR/2018/CR-webauthn-20180807/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web Cryptography API](https://www.w3.org/TR/2017/REC-WebCryptoAPI-20170126/)
- [Web MIDI API](http://www.w3.org/TR/2015/WD-webmidi-20150317/)
- [Web NFC API](https://w3c.github.io/web-nfc/)
- [Web Notifications](http://www.w3.org/TR/2015/REC-notifications-20151022/)
- [Web Speech API](https://w3c.github.io/speech-api/)
- [Web Storage (Second Edition)](http://www.w3.org/TR/2016/REC-webstorage-20160419/)
- [Web Workers](http://www.w3.org/TR/2015/WD-workers-20150924/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/2018/CR-webrtc-20180927/)
- [WebUSB API](https://wicg.github.io/webusb/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)
- [WebXR Device API](https://immersive-web.github.io/webxr/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Battery Status API](http://www.w3.org/TR/2016/CR-battery-status-20160707/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [DOM Parsing and Serialization](http://www.w3.org/TR/2016/WD-DOM-Parsing-20160517/)
- [High Resolution Time Level 3](https://www.w3.org/TR/2017/NOTE-hr-time-3-20170803/)
- [HTML Canvas 2D Context](http://www.w3.org/TR/2015/REC-2dcontext-20151119/)
- [Media Capture and Streams](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)
- [Media Source Extensions™](https://www.w3.org/TR/2016/REC-media-source-20161117/)
- [Remote Playback API](https://www.w3.org/TR/2017/CR-remote-playback-20171019/)

Informative references to this spec from:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/2018/WD-wai-aria-1.2-20180719/)
- [DOM Parsing and Serialization](http://www.w3.org/TR/2016/WD-DOM-Parsing-20160517/)
- [Selectors Level 3](https://www.w3.org/TR/2018/PR-selectors-3-20180911/)
- [WebIDL Level 1](https://www.w3.org/TR/2016/REC-WebIDL-1-20161215/)


## Wake Lock API {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/CR-wake-lock-20171214/) (14 December 2017)
- Editor's Draft: [https://w3c.github.io/wake-lock/](https://w3c.github.io/wake-lock/)
- Latest published version: [https://www.w3.org/TR/wake-lock/](https://www.w3.org/TR/wake-lock/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-wake-lock-20171214/)
- Repository: [GitHub w3c/wake-lock](https://github.com/w3c/wake-lock)
- Shortname: wake-lock

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Navigator`, `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Web Animations {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/) (13 September 2016)
- Editor's Draft: [https://w3c.github.io/web-animations/](https://w3c.github.io/web-animations/)
- Latest published version: [https://www.w3.org/TR/web-animations-1/](https://www.w3.org/TR/web-animations-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)
- Repository: [GitHub w3c/web-animations](https://github.com/w3c/web-animations)
- Shortname: web-animations-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`
- Missing references for WebIDL names: 
     * `DOMHighResTimeStamp` defined in [High Resolution Time Level 3](https://www.w3.org/TR/2017/NOTE-hr-time-3-20170803/)
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS3VAL" uses URL [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)

No informative reference to this spec from other specs.


## Web App Manifest {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-appmanifest-20180906/) (Living Document)
- Editor's Draft: [https://w3c.github.io/manifest/](https://w3c.github.io/manifest/)
- Latest published version: [https://www.w3.org/TR/appmanifest/](https://www.w3.org/TR/appmanifest/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-appmanifest-20180906/)
- Repository: [GitHub w3c/manifest](https://github.com/w3c/manifest)
- Shortname: appmanifest

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`, `WorkerType`
- Inconsistent references for links: 
     * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/), related reference "SERVICE-WORKERS-1" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Media Session Standard](https://wicg.github.io/mediasession/)
- [Payment Handler API](https://www.w3.org/TR/2018/WD-payment-handler-20180108/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Background Fetch](https://wicg.github.io/background-fetch/)

Informative references to this spec from:

- [Content Security Policy Level 3](https://www.w3.org/TR/2016/WD-CSP3-20160913/)
- [The Screen Orientation API](https://www.w3.org/TR/2018/WD-screen-orientation-20180926/)


## Web Audio API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-webaudio-20180918/) (18 September 2018)
- Editor's Draft: [https://webaudio.github.io/web-audio-api/](https://webaudio.github.io/web-audio-api/)
- Latest published version: [https://www.w3.org/TR/webaudio/](https://www.w3.org/TR/webaudio/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-webaudio-20180918/)
- Repository: [GitHub webaudio/web-audio-api](https://github.com/webaudio/web-audio-api)
- Shortname: webaudio

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `HTMLMediaElement`, `Window`
- WebIDL names also defined elsewhere: 
    * `Worklet` also defined in [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/) and [Worklets Level 1](http://www.w3.org/TR/2016/WD-worklets-1-20160607/)
- Missing references for links: 
     * [`https://w3c.github.io/mediacapture-fromelement/`](https://w3c.github.io/mediacapture-fromelement/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/), related reference "MEDIACAPTURE-STREAMS" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
     * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/), related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Web MIDI API](http://www.w3.org/TR/2015/WD-webmidi-20150317/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Console Standard](https://console.spec.whatwg.org/)
- [WebAssembly JavaScript Interface](https://www.w3.org/TR/2018/WD-wasm-js-api-1-20180904/)

Informative references to this spec from:

- [Media Capture and Streams](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)
- [Media Capture from DOM Elements](https://www.w3.org/TR/2017/WD-mediacapture-fromelement-20170906/)


## Web Authentication: An API for accessing Public Key Credentials Level 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-webauthn-20180807/) (7 August 2018)
- Editor's Draft: [https://w3c.github.io/webauthn/](https://w3c.github.io/webauthn/)
- Latest published version: [https://www.w3.org/TR/webauthn/](https://www.w3.org/TR/webauthn/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-webauthn-20180807/)
- Repository: [GitHub w3c/webauthn](https://github.com/w3c/webauthn)
- Shortname: webauthn

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
- Missing references for links: 
     * [`https://w3c.github.io/html/browsers.html`](https://w3c.github.io/html/browsers.html)
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-credential-management/`](https://w3c.github.io/webappsec-credential-management/), related reference "CREDENTIAL-MANAGEMENT-1" uses URL [`https://www.w3.org/TR/credential-management-1/`](https://www.w3.org/TR/credential-management-1/)
     * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/), related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
     * [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/), related reference "MIXED-CONTENT" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Credential Management Level 1](https://www.w3.org/TR/2017/WD-credential-management-1-20170804/)


## Web Background Synchronization {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/BackgroundSync/spec/) (2 August 2016)
- Repository: [GitHub wicg/BackgroundSync](https://github.com/wicg/BackgroundSync)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`
- Missing references for links: 
     * [`https://notifications.spec.whatwg.org/`](https://notifications.spec.whatwg.org/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec/specs/powerfulfeatures/`](https://w3c.github.io/webappsec/specs/powerfulfeatures/), related reference "SECURE-CONTEXTS" uses URL [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)
- [Push API](https://www.w3.org/TR/2017/WD-push-api-20171215/)


## Web Bluetooth {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://webbluetoothcg.github.io/web-bluetooth/) (20 August 2018)
- Repository: [GitHub webbluetoothcg/web-bluetooth](https://github.com/webbluetoothcg/web-bluetooth)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Map`, `Navigator`
- Missing references for links: 
     * [`https://w3c.github.io/fingerprinting-guidance/`](https://w3c.github.io/fingerprinting-guidance/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/), related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
     * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/), related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Secure Contexts](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/)


## Web Cryptography API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2017/REC-WebCryptoAPI-20170126/) (26 January 2017)
- Editor's Draft: [https://w3c.github.io/webcrypto/Overview.html](https://w3c.github.io/webcrypto/Overview.html)
- Latest published version: [https://www.w3.org/TR/WebCryptoAPI/](https://www.w3.org/TR/WebCryptoAPI/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2017/REC-WebCryptoAPI-20170126/)
- Repository: [GitHub w3c/webcrypto](https://github.com/w3c/webcrypto)
- Shortname: WebCryptoAPI

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/) or [Web Workers](http://www.w3.org/TR/2015/WD-workers-20150924/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Payment Handler API](https://www.w3.org/TR/2018/WD-payment-handler-20180108/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/2018/CR-webrtc-20180927/)

Informative references to this spec from:

- [Secure Contexts](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/)


## Web MIDI API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2015/WD-webmidi-20150317/) (17 March 2015)
- Editor's Draft: [http://webaudio.github.io/web-midi-api/](http://webaudio.github.io/web-midi-api/)
- Latest published version: [http://www.w3.org/TR/webmidi/](http://www.w3.org/TR/webmidi/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2015/WD-webmidi-20150317/)
- Repository: [GitHub webaudio/web-midi-api](https://github.com/webaudio/web-midi-api)
- Shortname: webmidi

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Navigator`
- Inconsistent references for links: 
     * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/), related reference "DOM-LEVEL-3-CORE" uses URL [`http://www.w3.org/TR/DOM-Level-3-Core/`](http://www.w3.org/TR/DOM-Level-3-Core/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)


## Web NFC API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/web-nfc/) (September 29, 2018)
- Repository: [GitHub w3c/web-nfc](https://github.com/w3c/web-nfc)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Dictionary`, `Navigator`
- Missing references for links: 
     * [`https://www.w3.org/TR/url-1/`](https://www.w3.org/TR/url-1/)
     * [`https://w3c.github.io/webappsec/specs/powerfulfeatures/`](https://w3c.github.io/webappsec/specs/powerfulfeatures/)
     * [`https://streams.spec.whatwg.org/`](https://streams.spec.whatwg.org/)
     * [`https://www.w3.org/TR/page-visibility/`](https://www.w3.org/TR/page-visibility/)
- Inconsistent references for links: 
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/), related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
     * [`https://www.w3.org/TR/2011/WD-html5-20110113/`](https://www.w3.org/TR/2011/WD-html5-20110113/), related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
     * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/), related reference "DOM4" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
     * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/), related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
     * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/), related reference "permissions" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Web Notifications {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true data-noEdDraft=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2015/REC-notifications-20151022/) (22 October 2015)
- Latest published version: [http://www.w3.org/TR/notifications/](http://www.w3.org/TR/notifications/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2015/REC-notifications-20151022/)
- Shortname: notifications

### Potential issue(s) {.anomalies}

- Link to an Editor's Draft not found
- Unknown WebIDL names used: `EventHandler`
- Inconsistent references for links: 
     * [`https://notifications.spec.whatwg.org/`](https://notifications.spec.whatwg.org/), related reference "WEBIDL" uses URL [`https://www.w3.org/TR/2015/PR-notifications-20150910/`](https://www.w3.org/TR/2015/PR-notifications-20150910/)
     * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/), related reference "HTML5" uses URL [`https://www.w3.org/TR/2014/REC-html5-20141028/`](https://www.w3.org/TR/2014/REC-html5-20141028/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Web Notifications](http://www.w3.org/TR/2015/REC-notifications-20151022/)

Informative references to this spec from:

- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)
- [Push API](https://www.w3.org/TR/2017/WD-push-api-20171215/)
- [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/)
- [Vibration API (Second Edition)](https://www.w3.org/TR/2016/REC-vibration-20161018/)


## Web Share API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/web-share/) (September 29, 2018)
- Repository: [GitHub wicg/web-share](https://github.com/wicg/web-share)
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

- Crawled version: [Initial URL](https://w3c.github.io/speech-api/) (19 September 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Web Storage (Second Edition) {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2016/REC-webstorage-20160419/) (19 April 2016)
- Editor's Draft: [https://w3c.github.io/webstorage/](https://w3c.github.io/webstorage/)
- Latest published version: [http://www.w3.org/TR/webstorage/](http://www.w3.org/TR/webstorage/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2016/REC-webstorage-20160419/)
- Repository: [GitHub w3c/webstorage](https://github.com/w3c/webstorage)
- Shortname: webstorage

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Presentation API](https://www.w3.org/TR/2017/CR-presentation-api-20170601/)

Informative references to this spec from:

- [Indexed Database API 2.0](https://www.w3.org/TR/2018/REC-IndexedDB-2-20180130/)
- [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)


## Web Workers {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2015/WD-workers-20150924/) (24 September 2015)
- Editor's Draft: [https://html.spec.whatwg.org/multipage/workers.html](https://html.spec.whatwg.org/multipage/workers.html)
- Latest published version: [http://www.w3.org/TR/workers/](http://www.w3.org/TR/workers/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2015/WD-workers-20150924/)
- Repository: [GitHub whatwg/html](https://github.com/whatwg/html)
- Shortname: workers

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `ApplicationCache`, `EventHandler`, `OnErrorEventHandler`, `Transferable`, `Window`
- WebIDL names also defined elsewhere: 
    * `Worker` also defined in [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/)
- Missing references for links: 
     * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/)
- Inconsistent references for links: 
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/), related reference "HTML" uses URL [`http://www.w3.org/TR/html5/`](http://www.w3.org/TR/html5/)
     * [`https://www.w3.org/TR/domcore/`](https://www.w3.org/TR/domcore/), related reference "DOM4" uses URL [`http://www.w3.org/TR/dom/`](http://www.w3.org/TR/dom/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- ["MediaStream Image Capture"](https://www.w3.org/TR/2017/WD-image-capture-20170621/)
- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Clipboard API and events](https://www.w3.org/TR/2017/WD-clipboard-apis-20170929/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Compositing and Blending Level 2](https://drafts.fxtf.org/compositing-2/)
- [Content Security Policy Level 3](https://www.w3.org/TR/2016/WD-CSP3-20160913/)
- [Content Security Policy: Embedded Enforcement](https://www.w3.org/TR/2016/WD-csp-embedded-enforcement-20160909/)
- [Cookie Store API](https://wicg.github.io/cookie-store/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Credential Management Level 1](https://www.w3.org/TR/2017/WD-credential-management-1-20170804/)
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [CSS Animations Level 1](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- [CSS Backgrounds and Borders Module Level 3](https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/)
- [CSS Basic User Interface Module Level 3 (CSS3 UI)](https://www.w3.org/TR/2018/REC-css-ui-3-20180621/)
- [CSS Basic User Interface Module Level 4](https://www.w3.org/TR/2017/WD-css-ui-4-20171222/)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/2018/CR-css-cascade-3-20180828/)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/2018/CR-css-cascade-4-20180828/)
- [CSS Display Module Level 3](https://www.w3.org/TR/2018/CR-css-display-3-20180828/)
- [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/2018/WD-css-sizing-3-20180304/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Object Model (CSSOM)](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/2018/WD-css-overflow-3-20180731/)
- [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- [CSS Parser API](https://wicg.github.io/CSS-Parser-API/)
- [CSS Properties and Values API Level 1](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/)
- [CSS Pseudo-Elements Module Level 4](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2/)
- [CSS Transitions](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/2018/WD-css-values-4-20180814/)
- [CSS Writing Modes Level 3](https://www.w3.org/TR/2018/CR-css-writing-modes-3-20180524/)
- [CSS Writing Modes Level 4](https://www.w3.org/TR/2018/CR-css-writing-modes-4-20180524/)
- [CSSOM View Module](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File and Directory Entries API](https://wicg.github.io/entries-api/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [Gamepad](https://www.w3.org/TR/2018/WD-gamepad-20180926/)
- [Generic Sensor API](https://www.w3.org/TR/2018/CR-generic-sensor-20180320/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [High Resolution Time Level 3](https://www.w3.org/TR/2017/NOTE-hr-time-3-20170803/)
- [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/)
- [Input Events Level 1](https://www.w3.org/TR/2017/WD-input-events-1-20170905/)
- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)
- [Keyboard Map](https://wicg.github.io/keyboard-map/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [Media Capture Depth Stream Extensions](https://www.w3.org/TR/2017/WD-mediacapture-depth-20170418/)
- [Media Session Standard](https://wicg.github.io/mediasession/)
- [MediaStream Recording](https://www.w3.org/TR/2017/WD-mediastream-recording-20170621/)
- [Navigation Timing Level 2](https://www.w3.org/TR/2018/WD-navigation-timing-2-20180926/)
- [Network Information API](https://wicg.github.io/netinfo/)
- [Payment Handler API](https://www.w3.org/TR/2018/WD-payment-handler-20180108/)
- [Payment Method: Basic Card](https://www.w3.org/TR/2018/WD-payment-method-basic-card-20180920/)
- [Payment Request API](https://www.w3.org/TR/2018/CR-payment-request-20180830/)
- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)
- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)
- [Pointer Events](https://www.w3.org/TR/2018/CR-pointerevents2-20180522/)
- [Referrer Policy](https://www.w3.org/TR/2017/CR-referrer-policy-20170126/)
- [Reporting API 1](https://w3c.github.io/reporting/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [Resource Timing Level 2](https://www.w3.org/TR/2018/WD-resource-timing-2-20180518/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)
- [Secure Contexts](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/)
- [Selection API](https://www.w3.org/TR/2018/WD-selection-api-20180926/)
- [Selectors Level 4](https://www.w3.org/TR/2018/WD-selectors-4-20180202/)
- [Server-Sent Events](http://www.w3.org/TR/2015/REC-eventsource-20150203/)
- [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [Streams Standard](https://streams.spec.whatwg.org/)
- [The Screen Orientation API](https://www.w3.org/TR/2018/WD-screen-orientation-20180926/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [URL Standard](https://url.spec.whatwg.org/)
- [User Timing Level 2](https://www.w3.org/TR/2018/CR-user-timing-2-20180709/)
- [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)
- [Web App Manifest](https://www.w3.org/TR/2018/WD-appmanifest-20180906/)
- [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/)
- [Web Authentication: An API for accessing Public Key Credentials Level 1](https://www.w3.org/TR/2018/CR-webauthn-20180807/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web Share API](https://wicg.github.io/web-share/)
- [Web Speech API](https://w3c.github.io/speech-api/)
- [WebAssembly JavaScript Interface](https://www.w3.org/TR/2018/WD-wasm-js-api-1-20180904/)
- [WebAssembly Web API](https://www.w3.org/TR/2018/WD-wasm-web-api-1-20180904/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)
- [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/2018/CR-webrtc-20180927/)
- [WebUSB API](https://wicg.github.io/webusb/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)
- [WebXR Device API](https://immersive-web.github.io/webxr/)
- [Worklets Level 1](http://www.w3.org/TR/2016/WD-worklets-1-20160607/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Console Standard](https://console.spec.whatwg.org/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [Encoding](https://www.w3.org/TR/2018/CR-encoding-20180327/)
- [File API](https://www.w3.org/TR/2017/WD-FileAPI-20171026/)
- [Indexed Database API 2.0](https://www.w3.org/TR/2018/REC-IndexedDB-2-20180130/)
- [Performance Timeline Level 2](https://www.w3.org/TR/2016/CR-performance-timeline-2-20161208/)
- [Server Timing](https://www.w3.org/TR/2018/WD-server-timing-20180926/)
- [Web Cryptography API](https://www.w3.org/TR/2017/REC-WebCryptoAPI-20170126/)

Informative references to this spec from:

- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/2018/CR-css-scroll-snap-1-20180814/)
- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/2018/CR-css-text-decor-3-20180703/)
- [CSS Text Module Level 3](https://www.w3.org/TR/2018/WD-css-text-3-20180920/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/2018/CR-css-values-3-20180814/)
- [File API](https://www.w3.org/TR/2017/WD-FileAPI-20171026/)
- [HTML Media Capture](https://www.w3.org/TR/2018/REC-html-media-capture-20180201/)
- [Metadata API for Media Resources 1.0](http://www.w3.org/TR/2014/REC-mediaont-api-1.0-20140313/)
- [Orientation Sensor](https://www.w3.org/TR/2018/CR-orientation-sensor-20180320/)
- [Performance Timeline Level 2](https://www.w3.org/TR/2016/CR-performance-timeline-2-20161208/)
- [Pointer Lock 2.0](https://www.w3.org/TR/2018/WD-pointerlock-2-20180208/)
- [Preload](https://www.w3.org/TR/2017/CR-preload-20171026/)
- [Push API](https://www.w3.org/TR/2017/WD-push-api-20171215/)
- [Wake Lock API](https://www.w3.org/TR/2017/CR-wake-lock-20171214/)


## WebAssembly JavaScript Interface {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-wasm-js-api-1-20180904/) (4 September 2018)
- Editor's Draft: [https://webassembly.github.io/spec/js-api/](https://webassembly.github.io/spec/js-api/)
- Latest published version: [https://www.w3.org/TR/wasm-js-api-1/](https://www.w3.org/TR/wasm-js-api-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-wasm-js-api-1-20180904/)
- Repository: [GitHub webassembly/spec](https://github.com/webassembly/spec)
- Shortname: wasm-js-api-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
- Missing references for WebIDL names: 
     * `Worklet` defined in [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/) or [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/) or [Worklets Level 1](http://www.w3.org/TR/2016/WD-worklets-1-20160607/)
- Missing references for links: 
     * [`https://www.w3.org/TR/wasm-core/`](https://www.w3.org/TR/wasm-core/)
     * [`https://www.w3.org/TR/wasm-js-api/`](https://www.w3.org/TR/wasm-js-api/)
     * [`https://www.w3.org/TR/wasm-web-api/`](https://www.w3.org/TR/wasm-web-api/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [WebAssembly Web API](https://www.w3.org/TR/2018/WD-wasm-web-api-1-20180904/)

No informative reference to this spec from other specs.


## WebAssembly Web API {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-wasm-web-api-1-20180904/) (4 September 2018)
- Editor's Draft: [https://webassembly.github.io/spec/web-api/](https://webassembly.github.io/spec/web-api/)
- Latest published version: [https://www.w3.org/TR/wasm-web-api-1/](https://www.w3.org/TR/wasm-web-api-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-wasm-web-api-1-20180904/)
- Repository: [GitHub webassembly/spec](https://github.com/webassembly/spec)
- Shortname: wasm-web-api-1

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/wasm-core/`](https://www.w3.org/TR/wasm-core/)
     * [`https://www.w3.org/TR/wasm-js-api/`](https://www.w3.org/TR/wasm-js-api/)
     * [`https://www.w3.org/TR/wasm-web-api/`](https://www.w3.org/TR/wasm-web-api/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## WebDriver {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/REC-webdriver1-20180605/) (05 June 2018)
- Editor's Draft: [https://w3c.github.io/webdriver/](https://w3c.github.io/webdriver/)
- Latest published version: [https://www.w3.org/TR/webdriver1/](https://www.w3.org/TR/webdriver1/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)
- Repository: [GitHub w3c/webdriver](https://github.com/w3c/webdriver)
- Shortname: webdriver

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://w3c.github.io/editing/contentEditable.html`](https://w3c.github.io/editing/contentEditable.html)
     * [`https://w3c.github.io/editing/execCommand.html`](https://w3c.github.io/editing/execCommand.html)
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/), related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
     * [`https://w3c.github.io/DOM-Parsing/`](https://w3c.github.io/DOM-Parsing/), related reference "DOM-PARSING" uses URL [`https://www.w3.org/TR/DOM-Parsing/`](https://www.w3.org/TR/DOM-Parsing/)
     * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/), related reference "UI-EVENTS" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Reporting API 1](https://w3c.github.io/reporting/)

No informative reference to this spec from other specs.


## WebGL 2.0 Specification {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.khronos.org/registry/webgl/specs/latest/2.0/) (Sat Sep 29 2018)
- Repository: [GitHub KhronosGroup/WebGL](https://github.com/KhronosGroup/WebGL)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [WebXR Device API](https://immersive-web.github.io/webxr/)

Informative references to this spec from:

- [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/)


## WebGL Specification {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.khronos.org/registry/webgl/specs/latest/1.0/) (Sat Sep 29 2018)
- Repository: [GitHub KhronosGroup/WebGL](https://github.com/KhronosGroup/WebGL)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `HTMLCanvasElement`, `HTMLImageElement`, `HTMLVideoElement`, `ImageBitmap`, `OffscreenCanvas`, `Window`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [WebXR Device API](https://immersive-web.github.io/webxr/)

Informative references to this spec from:

- [Media Capture Depth Stream Extensions](https://www.w3.org/TR/2017/WD-mediacapture-depth-20170418/)
- [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/)


## WebIDL Level 1 {data-spec=true data-anomaly=true data-hasInvalidIdl=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2016/REC-WebIDL-1-20161215/) (15 December 2016)
- Editor's Draft: [https://heycam.github.io/webidl/](https://heycam.github.io/webidl/)
- Latest published version: [https://www.w3.org/TR/WebIDL-1/](https://www.w3.org/TR/WebIDL-1/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2016/REC-WebIDL-1-20161215/)
- Shortname: WebIDL-1

### Potential issue(s) {.anomalies}

- Invalid WebIDL content found
- Inconsistent references for links: 
     * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/), related reference "DOM" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
     * [`https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/`](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/), related reference "DOM" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
     * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/), related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)
     * [`https://www.w3.org/TR/2011/WD-html5-20110525/`](https://www.w3.org/TR/2011/WD-html5-20110525/), related reference "HTML5" uses URL [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- ["MediaStream Image Capture"](https://www.w3.org/TR/2017/WD-image-capture-20170621/)
- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
- [Accelerometer](https://www.w3.org/TR/2018/CR-accelerometer-20180320/)
- [Ambient Light Sensor](https://www.w3.org/TR/2018/CR-ambient-light-20180320/)
- [Audio Output Devices API](https://www.w3.org/TR/2017/CR-audio-output-20171003/)
- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Battery Status API](http://www.w3.org/TR/2016/CR-battery-status-20160707/)
- [Beacon](https://www.w3.org/TR/2017/CR-beacon-20170413/)
- [Box Tree API Level 1](https://drafts.css-houdini.org/box-tree-api/)
- [Clipboard API and events](https://www.w3.org/TR/2017/WD-clipboard-apis-20170929/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Console Standard](https://console.spec.whatwg.org/)
- [Cookie Store API](https://wicg.github.io/cookie-store/)
- [Cooperative Scheduling of Background Tasks](https://www.w3.org/TR/2017/PR-requestidlecallback-20171010/)
- [Credential Management Level 1](https://www.w3.org/TR/2017/WD-credential-management-1-20170804/)
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [CSS Animations Level 1](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- [CSS Animations Level 2](https://drafts.csswg.org/css-animations-2/)
- [CSS Counter Styles Level 3](https://www.w3.org/TR/2017/CR-css-counter-styles-3-20171214/)
- [CSS Fonts Module Level 4](https://www.w3.org/TR/2018/WD-css-fonts-4-20180920/)
- [CSS Image Values and Replaced Content Module Level 4](https://www.w3.org/TR/2017/WD-css-images-4-20170413/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- [CSS Parser API](https://wicg.github.io/CSS-Parser-API/)
- [CSS Properties and Values API Level 1](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/)
- [CSS Shadow Parts](https://drafts.csswg.org/css-shadow-parts-1/)
- [CSS Transitions](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)
- [CSS Transitions Level 2](https://drafts.csswg.org/css-transitions-2/)
- [CSS Typed OM Level 1](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- [CSSOM View Module](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)
- [DOM Parsing and Serialization](http://www.w3.org/TR/2016/WD-DOM-Parsing-20160517/)
- [Encoding](https://www.w3.org/TR/2018/CR-encoding-20180327/)
- [Encrypted Media Extensions](https://www.w3.org/TR/2017/REC-encrypted-media-20170918/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File and Directory Entries API](https://wicg.github.io/entries-api/)
- [File API](https://www.w3.org/TR/2017/WD-FileAPI-20171026/)
- [Font Metrics API Level 1](https://drafts.css-houdini.org/font-metrics-api/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [Gamepad](https://www.w3.org/TR/2018/WD-gamepad-20180926/)
- [Generic Sensor API](https://www.w3.org/TR/2018/CR-generic-sensor-20180320/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [Gyroscope](https://www.w3.org/TR/2018/CR-gyroscope-20180320/)
- [High Resolution Time Level 3](https://www.w3.org/TR/2017/NOTE-hr-time-3-20170803/)
- [HTML Canvas 2D Context](http://www.w3.org/TR/2015/REC-2dcontext-20151119/)
- [HTML Media Capture](https://www.w3.org/TR/2018/REC-html-media-capture-20180201/)
- [Indexed Database API 2.0](https://www.w3.org/TR/2018/REC-IndexedDB-2-20180130/)
- [Intersection Observer](https://www.w3.org/TR/2017/WD-intersection-observer-20170914/)
- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)
- [Keyboard Map](https://wicg.github.io/keyboard-map/)
- [Long Tasks API 1](https://www.w3.org/TR/2017/WD-longtasks-1-20170907/)
- [Magnetometer](https://www.w3.org/TR/2018/CR-magnetometer-20180320/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [Media Capture and Streams](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)
- [Media Capture Depth Stream Extensions](https://www.w3.org/TR/2017/WD-mediacapture-depth-20170418/)
- [Media Capture from DOM Elements](https://www.w3.org/TR/2017/WD-mediacapture-fromelement-20170906/)
- [Media Session Standard](https://wicg.github.io/mediasession/)
- [Media Source Extensions™](https://www.w3.org/TR/2016/REC-media-source-20161117/)
- [MediaStream Recording](https://www.w3.org/TR/2017/WD-mediastream-recording-20170621/)
- [Navigation Timing Level 2](https://www.w3.org/TR/2018/WD-navigation-timing-2-20180926/)
- [Orientation Sensor](https://www.w3.org/TR/2018/CR-orientation-sensor-20180320/)
- [Paint Timing 1](https://www.w3.org/TR/2017/WD-paint-timing-20170907/)
- [Payment Handler API](https://www.w3.org/TR/2018/WD-payment-handler-20180108/)
- [Payment Method: Basic Card](https://www.w3.org/TR/2018/WD-payment-method-basic-card-20180920/)
- [Payment Request API](https://www.w3.org/TR/2018/CR-payment-request-20180830/)
- [Performance Timeline Level 2](https://www.w3.org/TR/2016/CR-performance-timeline-2-20161208/)
- [Permissions](https://www.w3.org/TR/2017/WD-permissions-20170925/)
- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)
- [Pointer Lock 2.0](https://www.w3.org/TR/2018/WD-pointerlock-2-20180208/)
- [Presentation API](https://www.w3.org/TR/2017/CR-presentation-api-20170601/)
- [Push API](https://www.w3.org/TR/2017/WD-push-api-20171215/)
- [Remote Playback API](https://www.w3.org/TR/2017/CR-remote-playback-20171019/)
- [Reporting API 1](https://w3c.github.io/reporting/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [Resource Timing Level 2](https://www.w3.org/TR/2018/WD-resource-timing-2-20180518/)
- [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/2018/CR-SVG2-20180807/)
- [Screen Capture](http://www.w3.org/TR/2016/WD-screen-capture-20160714/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)
- [Selection API](https://www.w3.org/TR/2018/WD-selection-api-20180926/)
- [Server Timing](https://www.w3.org/TR/2018/WD-server-timing-20180926/)
- [Service Workers 1](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/)
- [Static Range](https://w3c.github.io/staticrange/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [The Screen Orientation API](https://www.w3.org/TR/2018/WD-screen-orientation-20180926/)
- [The WebSocket API](http://www.w3.org/TR/2012/CR-websockets-20120920/)
- [URL Standard](https://url.spec.whatwg.org/)
- [User Interface Security and the Visibility API](http://www.w3.org/TR/2016/WD-UISecurity-20160607/)
- [User Timing Level 2](https://www.w3.org/TR/2018/CR-user-timing-2-20180709/)
- [Vibration API (Second Edition)](https://www.w3.org/TR/2016/REC-vibration-20161018/)
- [W3C DOM 4.1](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- [Wake Lock API](https://www.w3.org/TR/2017/CR-wake-lock-20171214/)
- [Web Animations](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)
- [Web App Manifest](https://www.w3.org/TR/2018/WD-appmanifest-20180906/)
- [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/)
- [Web Authentication: An API for accessing Public Key Credentials Level 1](https://www.w3.org/TR/2018/CR-webauthn-20180807/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web Cryptography API](https://www.w3.org/TR/2017/REC-WebCryptoAPI-20170126/)
- [Web NFC API](https://w3c.github.io/web-nfc/)
- [Web Share API](https://wicg.github.io/web-share/)
- [Web Speech API](https://w3c.github.io/speech-api/)
- [Web Storage (Second Edition)](http://www.w3.org/TR/2016/REC-webstorage-20160419/)
- [Web Workers](http://www.w3.org/TR/2015/WD-workers-20150924/)
- [WebAssembly JavaScript Interface](https://www.w3.org/TR/2018/WD-wasm-js-api-1-20180904/)
- [WebAssembly Web API](https://www.w3.org/TR/2018/WD-wasm-web-api-1-20180904/)
- [WebDriver](https://www.w3.org/TR/2018/REC-webdriver1-20180605/)
- [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- [WebRTC 1.0: Real-time Communication Between Browsers](https://www.w3.org/TR/2018/CR-webrtc-20180927/)
- [WebUSB API](https://wicg.github.io/webusb/)
- [WebVTT: The Web Video Text Tracks Format](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)
- [WebXR Device API](https://immersive-web.github.io/webxr/)
- [Worklets Level 1](http://www.w3.org/TR/2016/WD-worklets-1-20160607/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Informative references to this spec from:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/2018/WD-wai-aria-1.2-20180719/)
- [Beacon](https://www.w3.org/TR/2017/CR-beacon-20170413/)
- [Cooperative Scheduling of Background Tasks](https://www.w3.org/TR/2017/PR-requestidlecallback-20171010/)
- [HTML Media Capture](https://www.w3.org/TR/2018/REC-html-media-capture-20180201/)
- [Identifiers for WebRTC's Statistics API](https://www.w3.org/TR/2018/CR-webrtc-stats-20180703/)
- [Input Device Capabilities](https://wicg.github.io/InputDeviceCapabilities/)
- [Input Events Level 1](https://www.w3.org/TR/2017/WD-input-events-1-20170905/)
- [MediaStreamTrack Content Hints](https://www.w3.org/TR/2018/WD-mst-content-hint-20180703/)
- [Network Information API](https://wicg.github.io/netinfo/)
- [Page Visibility Level 2](https://www.w3.org/TR/2017/PR-page-visibility-2-20171017/)
- [Pointer Events](https://www.w3.org/TR/2018/CR-pointerevents2-20180522/)
- [PointerEvents - Level 2 - Extensions](https://w3c.github.io/pointerevents/extension.html)
- [Secure Contexts](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/)
- [Selection API](https://www.w3.org/TR/2018/WD-selection-api-20180926/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [WebIDL Level 1](https://www.w3.org/TR/2016/REC-WebIDL-1-20161215/)


## WebRTC 1.0: Real-time Communication Between Browsers {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-webrtc-20180927/) (27 September 2018)
- Editor's Draft: [https://w3c.github.io/webrtc-pc/](https://w3c.github.io/webrtc-pc/)
- Latest published version: [https://www.w3.org/TR/webrtc/](https://www.w3.org/TR/webrtc/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-webrtc-20180927/)
- Repository: [GitHub w3c/webrtc-pc](https://github.com/w3c/webrtc-pc)
- Shortname: webrtc

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `RTCError`, `Window`
- WebIDL names also defined elsewhere: 
    * `RTCStats` also defined in [Identifiers for WebRTC's Statistics API](https://www.w3.org/TR/2018/CR-webrtc-stats-20180703/)
- Missing references for links: 
     * [`https://www.w3.org/TR/webrtc-identity/`](https://www.w3.org/TR/webrtc-identity/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/html52/`](https://www.w3.org/TR/html52/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Identifiers for WebRTC's Statistics API](https://www.w3.org/TR/2018/CR-webrtc-stats-20180703/)
- [MediaStreamTrack Content Hints](https://www.w3.org/TR/2018/WD-mst-content-hint-20180703/)
- [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/)
- [WebRTC DSCP Control API](https://www.w3.org/TR/2018/WD-webrtc-dscp-20180703/)

Informative references to this spec from:

- [File API](https://www.w3.org/TR/2017/WD-FileAPI-20171026/)
- [Media Capture and Streams](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)
- [Media Capture from DOM Elements](https://www.w3.org/TR/2017/WD-mediacapture-fromelement-20170906/)
- [Presentation API](https://www.w3.org/TR/2017/CR-presentation-api-20170601/)
- [Screen Capture](http://www.w3.org/TR/2016/WD-screen-capture-20160714/)


## WebRTC DSCP Control API {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/WD-webrtc-dscp-20180703/) (3 July 2018)
- Editor's Draft: [https://w3c.github.io/webrtc-dscp-exp/](https://w3c.github.io/webrtc-dscp-exp/)
- Latest published version: [https://www.w3.org/TR/webrtc-dscp/](https://www.w3.org/TR/webrtc-dscp/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-webrtc-dscp-20180703/)
- Repository: [GitHub w3c/webrtc-dscp-exp](https://github.com/w3c/webrtc-dscp-exp)
- Shortname: webrtc-dscp

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Inconsistent references for links: 
     * [`https://w3c.github.io/webrtc-pc/`](https://w3c.github.io/webrtc-pc/), related reference "WEBRTC" uses URL [`https://www.w3.org/TR/webrtc/`](https://www.w3.org/TR/webrtc/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## WebUSB API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/webusb/) (27 September 2018)
- Repository: [GitHub wicg/webusb](https://github.com/wicg/webusb)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Navigator`, `Window`
- Inconsistent references for links: 
     * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/), related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## WebVTT: The Web Video Text Tracks Format {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2018/CR-webvtt1-20180510/) (10 May 2018)
- Editor's Draft: [https://w3c.github.io/webvtt/](https://w3c.github.io/webvtt/)
- Latest published version: [https://www.w3.org/TR/webvtt1/](https://www.w3.org/TR/webvtt1/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)
- Repository: [GitHub w3c/webvtt](https://github.com/w3c/webvtt)
- Shortname: webvtt1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `TextTrackCue`, `Window`
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/)
     * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/)
     * [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/), related reference "ENCODING-CR" uses URL [`https://www.w3.org/TR/2017/CR-encoding-20170413/`](https://www.w3.org/TR/2017/CR-encoding-20170413/)
     * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/), related reference "DOM-20151119" uses URL [`https://www.w3.org/TR/2015/REC-dom-20151119/`](https://www.w3.org/TR/2015/REC-dom-20151119/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## WebXR Device API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://immersive-web.github.io/webxr/) (20 August 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMPointReadOnly`, `EventHandler`, `HTMLCanvasElement`, `Navigator`, `Window`
- Missing references for WebIDL names: 
     * `DOMHighResTimeStamp` defined in [High Resolution Time Level 3](https://www.w3.org/TR/2017/NOTE-hr-time-3-20170803/)
     * `WebGLRenderingContext` defined in [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
     * `WebGL2RenderingContext` defined in [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
     * `WebGLFramebuffer` defined in [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
     * `WebGLContextAttributes` defined in [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
     * `WebGLRenderingContextBase` defined in [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- Missing references for links: 
     * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/orientation-sensor/`](https://w3c.github.io/orientation-sensor/), related reference "ORIENTATION-SENSOR" uses URL [`https://www.w3.org/TR/orientation-sensor/`](https://www.w3.org/TR/orientation-sensor/)
     * [`https://www.w3.org/TR/html51/`](https://www.w3.org/TR/html51/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
     * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Worklets Level 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true}

### Spec info {.info}

- Crawled version: [Latest published version](http://www.w3.org/TR/2016/WD-worklets-1-20160607/) (07 June 2016)
- Editor's Draft: [https://drafts.css-houdini.org/worklets/](https://drafts.css-houdini.org/worklets/)
- Latest published version: [http://www.w3.org/TR/worklets-1/](http://www.w3.org/TR/worklets-1/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-worklets-1-20160607/)
- Shortname: worklets-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Console`, `Window`
- WebIDL names also defined elsewhere: 
    * `Worklet` also defined in [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/) and [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [CSS Layout API Level 1](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- [CSS Painting API Level 1](https://www.w3.org/TR/2018/CR-css-paint-api-1-20180809/)
- [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Console Standard](https://console.spec.whatwg.org/)
- [WebAssembly JavaScript Interface](https://www.w3.org/TR/2018/WD-wasm-js-api-1-20180904/)

No informative reference to this spec from other specs.


## XMLHttpRequest Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://xhr.spec.whatwg.org/) (21 August 2018)
- Repository: [GitHub whatwg/xhr](https://github.com/whatwg/xhr)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `HTMLFormElement`, `Window`
- WebIDL names also defined elsewhere: 
    * `ProgressEvent` also defined in [Progress Events](http://www.w3.org/TR/2014/REC-progress-events-20140211/)
    * `ProgressEventInit` also defined in [Progress Events](http://www.w3.org/TR/2014/REC-progress-events-20140211/)
- Missing references for links: 
     * [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Credential Management Level 1](https://www.w3.org/TR/2017/WD-credential-management-1-20170804/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File API](https://www.w3.org/TR/2017/WD-FileAPI-20171026/)
- [Resource Timing Level 2](https://www.w3.org/TR/2018/WD-resource-timing-2-20180518/)

Informative references to this spec from:

- [Content Security Policy Level 3](https://www.w3.org/TR/2016/WD-CSP3-20160913/)
- [Web Audio API](https://www.w3.org/TR/2018/CR-webaudio-20180918/)
- [Web Workers](http://www.w3.org/TR/2015/WD-workers-20150924/)




