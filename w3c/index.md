% Specifications that define WebIDL content (W3C perspective)
% Reffy
% May 11, 2018

## Accelerated Shape Detection in Images {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/shape-detection-api/) (4 April 2018)
- Repository: [GitHub wicg/shape-detection-api](https://github.com/wicg/shape-detection-api)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `ImageBitmapSource`, `Window`
- Missing references for WebIDL names: 
     * `Point2D` defined in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
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

- Crawled version: [Editor's Draft](https://w3c.github.io/accelerometer/) (14 March 2018)
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

- [Gyroscope](https://w3c.github.io/gyroscope/)
- [Magnetometer](https://w3c.github.io/magnetometer/)
- [Orientation Sensor](https://w3c.github.io/orientation-sensor/)

Informative references to this spec from:

- [Permissions](https://w3c.github.io/permissions/)


## Ambient Light Sensor {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/ambient-light/) (15 March 2018)
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

- [Permissions](https://w3c.github.io/permissions/)


## Audio Output Devices API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-output/)
- Editor's Draft: [https://w3c.github.io/mediacapture-output/](https://w3c.github.io/mediacapture-output/)
- Latest published version: [https://www.w3.org/TR/audio-output/](https://www.w3.org/TR/audio-output/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-audio-output-20171003/)
- Repository: [GitHub w3c/mediacapture-output](https://github.com/w3c/mediacapture-output)
- Shortname: audio-output

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020142.445429:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x557c5c57ab0c base::debug::StackTrace::StackTrace()
#1 0x557c5c593780 logging::LogMessage::~LogMessage()
#2 0x557c5b6232b1 content::ZygoteHostImpl::Init()
#3 0x557c5b295c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557c5b29ba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557c603c59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557c5c2b5a00 content::RunNamedProcessTypeMain()
#7 0x557c5c2b62e8 content::ContentMainRunnerImpl::Run()
#8 0x557c5c2bff24 service_manager::Main()
#9 0x557c5c2b4f14 content::ContentMain()
#10 0x557c603c49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557c603c4a42 headless::HeadlessBrowserMain()
#12 0x557c5c2bcf9d headless::HeadlessShellMain()
#13 0x557c5a91b1ac ChromeMain
#14 0x7faf165882e1 __libc_start_main
#15 0x557c5a91b02a _start

Received signal 6
#0 0x557c5c57ab0c base::debug::StackTrace::StackTrace()
#1 0x557c5c57a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7faf1c4e50c0 <unknown>
#3 0x7faf1659afff gsignal
#4 0x7faf1659c42a abort
#5 0x557c5c579105 base::debug::BreakDebugger()
#6 0x557c5c593bca logging::LogMessage::~LogMessage()
#7 0x557c5b6232b1 content::ZygoteHostImpl::Init()
#8 0x557c5b295c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557c5b29ba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557c603c59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557c5c2b5a00 content::RunNamedProcessTypeMain()
#12 0x557c5c2b62e8 content::ContentMainRunnerImpl::Run()
#13 0x557c5c2bff24 service_manager::Main()
#14 0x557c5c2b4f14 content::ContentMain()
#15 0x557c603c49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557c603c4a42 headless::HeadlessBrowserMain()
#17 0x557c5c2bcf9d headless::HeadlessShellMain()
#18 0x557c5a91b1ac ChromeMain
#19 0x7faf165882e1 __libc_start_main
#20 0x557c5a91b02a _start
  r8: 0000000000000000  r9: 00007fff298ad580 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff298adc78 r13: 0000000000000161 r14: 00007fff298adc80 r15: 00007fff298ad819
  di: 0000000000000002  si: 00007fff298ad580  bp: 00007fff298ad7c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007faf1659afff  sp: 00007fff298ad5f8
  ip: 00007faf1659afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020142.445429:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x557c5c57ab0c base::debug::StackTrace::StackTrace()
#1 0x557c5c593780 logging::LogMessage::~LogMessage()
#2 0x557c5b6232b1 content::ZygoteHostImpl::Init()
#3 0x557c5b295c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557c5b29ba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557c603c59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557c5c2b5a00 content::RunNamedProcessTypeMain()
#7 0x557c5c2b62e8 content::ContentMainRunnerImpl::Run()
#8 0x557c5c2bff24 service_manager::Main()
#9 0x557c5c2b4f14 content::ContentMain()
#10 0x557c603c49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557c603c4a42 headless::HeadlessBrowserMain()
#12 0x557c5c2bcf9d headless::HeadlessShellMain()
#13 0x557c5a91b1ac ChromeMain
#14 0x7faf165882e1 __libc_start_main
#15 0x557c5a91b02a _start

Received signal 6
#0 0x557c5c57ab0c base::debug::StackTrace::StackTrace()
#1 0x557c5c57a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7faf1c4e50c0 <unknown>
#3 0x7faf1659afff gsignal
#4 0x7faf1659c42a abort
#5 0x557c5c579105 base::debug::BreakDebugger()
#6 0x557c5c593bca logging::LogMessage::~LogMessage()
#7 0x557c5b6232b1 content::ZygoteHostImpl::Init()
#8 0x557c5b295c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557c5b29ba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557c603c59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557c5c2b5a00 content::RunNamedProcessTypeMain()
#12 0x557c5c2b62e8 content::ContentMainRunnerImpl::Run()
#13 0x557c5c2bff24 service_manager::Main()
#14 0x557c5c2b4f14 content::ContentMain()
#15 0x557c603c49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557c603c4a42 headless::HeadlessBrowserMain()
#17 0x557c5c2bcf9d headless::HeadlessShellMain()
#18 0x557c5a91b1ac ChromeMain
#19 0x7faf165882e1 __libc_start_main
#20 0x557c5a91b02a _start
  r8: 0000000000000000  r9: 00007fff298ad580 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff298adc78 r13: 0000000000000161 r14: 00007fff298adc80 r15: 00007fff298ad819
  di: 0000000000000002  si: 00007fff298ad580  bp: 00007fff298ad7c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007faf1659afff  sp: 00007fff298ad5f8
  ip: 00007faf1659afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Permissions](https://w3c.github.io/permissions/)


## Background Fetch {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/background-fetch/) (12 October 2017)
- Repository: [GitHub wicg/background-fetch](https://github.com/wicg/background-fetch)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`
- Missing references for links: 
     * [`https://storage.spec.whatwg.org/`](https://storage.spec.whatwg.org/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/), related reference "SERVICE-WORKERS-1" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Battery Status API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/battery/)
- Editor's Draft: [https://w3c.github.io/battery/](https://w3c.github.io/battery/)
- Latest published version: [http://www.w3.org/TR/battery-status/](http://www.w3.org/TR/battery-status/)
- Latest published status: [Candidate Recommendation](http://www.w3.org/TR/2016/CR-battery-status-20160707/)
- Repository: [GitHub w3c/battery](https://github.com/w3c/battery)
- Shortname: battery-status

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020139.705293:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561eba4e4b0c base::debug::StackTrace::StackTrace()
#1 0x561eba4fd780 logging::LogMessage::~LogMessage()
#2 0x561eb958d2b1 content::ZygoteHostImpl::Init()
#3 0x561eb91ffc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561eb9205a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x561ebe32f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x561eba21fa00 content::RunNamedProcessTypeMain()
#7 0x561eba2202e8 content::ContentMainRunnerImpl::Run()
#8 0x561eba229f24 service_manager::Main()
#9 0x561eba21ef14 content::ContentMain()
#10 0x561ebe32e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x561ebe32ea42 headless::HeadlessBrowserMain()
#12 0x561eba226f9d headless::HeadlessShellMain()
#13 0x561eb88851ac ChromeMain
#14 0x7f05f96942e1 __libc_start_main
#15 0x561eb888502a _start

Received signal 6
#0 0x561eba4e4b0c base::debug::StackTrace::StackTrace()
#1 0x561eba4e4671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f05ff5f10c0 <unknown>
#3 0x7f05f96a6fff gsignal
#4 0x7f05f96a842a abort
#5 0x561eba4e3105 base::debug::BreakDebugger()
#6 0x561eba4fdbca logging::LogMessage::~LogMessage()
#7 0x561eb958d2b1 content::ZygoteHostImpl::Init()
#8 0x561eb91ffc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561eb9205a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x561ebe32f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x561eba21fa00 content::RunNamedProcessTypeMain()
#12 0x561eba2202e8 content::ContentMainRunnerImpl::Run()
#13 0x561eba229f24 service_manager::Main()
#14 0x561eba21ef14 content::ContentMain()
#15 0x561ebe32e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x561ebe32ea42 headless::HeadlessBrowserMain()
#17 0x561eba226f9d headless::HeadlessShellMain()
#18 0x561eb88851ac ChromeMain
#19 0x7f05f96942e1 __libc_start_main
#20 0x561eb888502a _start
  r8: 0000000000000000  r9: 00007ffc5ef19730 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc5ef19e28 r13: 0000000000000161 r14: 00007ffc5ef19e30 r15: 00007ffc5ef199c9
  di: 0000000000000002  si: 00007ffc5ef19730  bp: 00007ffc5ef19970  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f05f96a6fff  sp: 00007ffc5ef197a8
  ip: 00007f05f96a6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020139.705293:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561eba4e4b0c base::debug::StackTrace::StackTrace()
#1 0x561eba4fd780 logging::LogMessage::~LogMessage()
#2 0x561eb958d2b1 content::ZygoteHostImpl::Init()
#3 0x561eb91ffc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561eb9205a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x561ebe32f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x561eba21fa00 content::RunNamedProcessTypeMain()
#7 0x561eba2202e8 content::ContentMainRunnerImpl::Run()
#8 0x561eba229f24 service_manager::Main()
#9 0x561eba21ef14 content::ContentMain()
#10 0x561ebe32e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x561ebe32ea42 headless::HeadlessBrowserMain()
#12 0x561eba226f9d headless::HeadlessShellMain()
#13 0x561eb88851ac ChromeMain
#14 0x7f05f96942e1 __libc_start_main
#15 0x561eb888502a _start

Received signal 6
#0 0x561eba4e4b0c base::debug::StackTrace::StackTrace()
#1 0x561eba4e4671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f05ff5f10c0 <unknown>
#3 0x7f05f96a6fff gsignal
#4 0x7f05f96a842a abort
#5 0x561eba4e3105 base::debug::BreakDebugger()
#6 0x561eba4fdbca logging::LogMessage::~LogMessage()
#7 0x561eb958d2b1 content::ZygoteHostImpl::Init()
#8 0x561eb91ffc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561eb9205a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x561ebe32f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x561eba21fa00 content::RunNamedProcessTypeMain()
#12 0x561eba2202e8 content::ContentMainRunnerImpl::Run()
#13 0x561eba229f24 service_manager::Main()
#14 0x561eba21ef14 content::ContentMain()
#15 0x561ebe32e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x561ebe32ea42 headless::HeadlessBrowserMain()
#17 0x561eba226f9d headless::HeadlessShellMain()
#18 0x561eb88851ac ChromeMain
#19 0x7f05f96942e1 __libc_start_main
#20 0x561eb888502a _start
  r8: 0000000000000000  r9: 00007ffc5ef19730 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc5ef19e28 r13: 0000000000000161 r14: 00007ffc5ef19e30 r15: 00007ffc5ef199c9
  di: 0000000000000002  si: 00007ffc5ef19730  bp: 00007ffc5ef19970  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f05f96a6fff  sp: 00007ffc5ef197a8
  ip: 00007f05f96a6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [HTML 5.3](https://w3c.github.io/html/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)


## Beacon {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/beacon/)
- Editor's Draft: [https://w3c.github.io/beacon/](https://w3c.github.io/beacon/)
- Latest published version: [https://www.w3.org/TR/beacon/](https://www.w3.org/TR/beacon/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-beacon-20170413/)
- Repository: [GitHub w3c/beacon](https://github.com/w3c/beacon)
- Shortname: beacon

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020139.784347:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5633748e7b0c base::debug::StackTrace::StackTrace()
#1 0x563374900780 logging::LogMessage::~LogMessage()
#2 0x5633739902b1 content::ZygoteHostImpl::Init()
#3 0x563373602c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x563373608a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5633787329a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563374622a00 content::RunNamedProcessTypeMain()
#7 0x5633746232e8 content::ContentMainRunnerImpl::Run()
#8 0x56337462cf24 service_manager::Main()
#9 0x563374621f14 content::ContentMain()
#10 0x5633787319b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563378731a42 headless::HeadlessBrowserMain()
#12 0x563374629f9d headless::HeadlessShellMain()
#13 0x563372c881ac ChromeMain
#14 0x7fec6498b2e1 __libc_start_main
#15 0x563372c8802a _start

Received signal 6
#0 0x5633748e7b0c base::debug::StackTrace::StackTrace()
#1 0x5633748e7671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fec6a8e80c0 <unknown>
#3 0x7fec6499dfff gsignal
#4 0x7fec6499f42a abort
#5 0x5633748e6105 base::debug::BreakDebugger()
#6 0x563374900bca logging::LogMessage::~LogMessage()
#7 0x5633739902b1 content::ZygoteHostImpl::Init()
#8 0x563373602c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x563373608a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5633787329a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563374622a00 content::RunNamedProcessTypeMain()
#12 0x5633746232e8 content::ContentMainRunnerImpl::Run()
#13 0x56337462cf24 service_manager::Main()
#14 0x563374621f14 content::ContentMain()
#15 0x5633787319b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563378731a42 headless::HeadlessBrowserMain()
#17 0x563374629f9d headless::HeadlessShellMain()
#18 0x563372c881ac ChromeMain
#19 0x7fec6498b2e1 __libc_start_main
#20 0x563372c8802a _start
  r8: 0000000000000000  r9: 00007fffd3574480 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffd3574b78 r13: 0000000000000161 r14: 00007fffd3574b80 r15: 00007fffd3574719
  di: 0000000000000002  si: 00007fffd3574480  bp: 00007fffd35746c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fec6499dfff  sp: 00007fffd35744f8
  ip: 00007fec6499dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020139.784347:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5633748e7b0c base::debug::StackTrace::StackTrace()
#1 0x563374900780 logging::LogMessage::~LogMessage()
#2 0x5633739902b1 content::ZygoteHostImpl::Init()
#3 0x563373602c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x563373608a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5633787329a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563374622a00 content::RunNamedProcessTypeMain()
#7 0x5633746232e8 content::ContentMainRunnerImpl::Run()
#8 0x56337462cf24 service_manager::Main()
#9 0x563374621f14 content::ContentMain()
#10 0x5633787319b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563378731a42 headless::HeadlessBrowserMain()
#12 0x563374629f9d headless::HeadlessShellMain()
#13 0x563372c881ac ChromeMain
#14 0x7fec6498b2e1 __libc_start_main
#15 0x563372c8802a _start

Received signal 6
#0 0x5633748e7b0c base::debug::StackTrace::StackTrace()
#1 0x5633748e7671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fec6a8e80c0 <unknown>
#3 0x7fec6499dfff gsignal
#4 0x7fec6499f42a abort
#5 0x5633748e6105 base::debug::BreakDebugger()
#6 0x563374900bca logging::LogMessage::~LogMessage()
#7 0x5633739902b1 content::ZygoteHostImpl::Init()
#8 0x563373602c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x563373608a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5633787329a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563374622a00 content::RunNamedProcessTypeMain()
#12 0x5633746232e8 content::ContentMainRunnerImpl::Run()
#13 0x56337462cf24 service_manager::Main()
#14 0x563374621f14 content::ContentMain()
#15 0x5633787319b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563378731a42 headless::HeadlessBrowserMain()
#17 0x563374629f9d headless::HeadlessShellMain()
#18 0x563372c881ac ChromeMain
#19 0x7fec6498b2e1 __libc_start_main
#20 0x563372c8802a _start
  r8: 0000000000000000  r9: 00007fffd3574480 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffd3574b78 r13: 0000000000000161 r14: 00007fffd3574b80 r15: 00007fffd3574719
  di: 0000000000000002  si: 00007fffd3574480  bp: 00007fffd35746c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fec6499dfff  sp: 00007fffd35744f8
  ip: 00007fec6499dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)


## Clipboard API and events {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/clipboard-apis/) (10 May 2018)
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
     * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/), related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
     * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/), related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Permissions](https://w3c.github.io/permissions/)


## Compatibility Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://compat.spec.whatwg.org/) (8 January 2018)
- Repository: [GitHub whatwg/compat](https://github.com/whatwg/compat)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `HTMLBodyElement`, `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Compositing and Blending Level 1 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-noIdlContent=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.fxtf.org/compositing-1/) (12 April 2018)
- Editor's Draft: [https://drafts.fxtf.org/compositing-1/](https://drafts.fxtf.org/compositing-1/)
- Latest published version: [http://www.w3.org/TR/compositing-1/](http://www.w3.org/TR/compositing-1/)
- Latest published status: [Candidate Recommendation](http://www.w3.org/TR/2015/CR-compositing-1-20150113/)
- Repository: [GitHub w3c/fxtf-drafts](https://github.com/w3c/fxtf-drafts)
- Shortname: compositing-1

### Potential issue(s) {.anomalies}

- No WebIDL definitions found
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/2003/REC-SVG11-20030114/`](https://www.w3.org/TR/2003/REC-SVG11-20030114/), related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)
     * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/), related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)
     * [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/), related reference "2DCONTEXT2" uses URL [`https://www.w3.org/TR/2dcontext2/`](https://www.w3.org/TR/2dcontext2/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/)
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)

No informative reference to this spec from other specs.


## Console Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://console.spec.whatwg.org/) (9 May 2018)
- Repository: [GitHub whatwg/console](https://github.com/whatwg/console)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) or [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
     * `Worklet` defined in [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) or [Web Audio API](https://webaudio.github.io/web-audio-api/) or [Worklets Level 1](https://drafts.css-houdini.org/worklets/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Content Security Policy Level 3 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webappsec-csp/) (16 February 2018)
- Editor's Draft: [https://w3c.github.io/webappsec-csp/](https://w3c.github.io/webappsec-csp/)
- Latest published version: [https://www.w3.org/TR/CSP3/](https://www.w3.org/TR/CSP3/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2016/WD-CSP3-20160913/)
- Repository: [GitHub w3c/webappsec-csp](https://github.com/w3c/webappsec-csp)
- Shortname: CSP3

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://w3c.github.io/reporting/`](https://w3c.github.io/reporting/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/), related reference "SERVICE-WORKERS-1" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)
- [Content Security Policy: Embedded Enforcement](https://w3c.github.io/webappsec-csp/embedded/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [HTML 5.3](https://w3c.github.io/html/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)

Informative references to this spec from:

- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)


## Content Security Policy: Embedded Enforcement {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webappsec-csp/embedded/) (13 September 2017)
- Editor's Draft: [https://w3c.github.io/webappsec-csp/embedded/](https://w3c.github.io/webappsec-csp/embedded/)
- Latest published version: [https://www.w3.org/TR/csp-embedded-enforcement/](https://www.w3.org/TR/csp-embedded-enforcement/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2016/WD-csp-embedded-enforcement-20160909/)
- Repository: [GitHub w3c/webappsec-csp](https://github.com/w3c/webappsec-csp)
- Shortname: csp-embedded-enforcement

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `HTMLIFrameElement`
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/), related reference "CSP" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Cooperative Scheduling of Background Tasks {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/requestidlecallback/)
- Editor's Draft: [https://w3c.github.io/requestidlecallback/](https://w3c.github.io/requestidlecallback/)
- Latest published version: [https://www.w3.org/TR/requestidlecallback/](https://www.w3.org/TR/requestidlecallback/)
- Latest published status: [Proposed Recommendation](https://www.w3.org/TR/2017/PR-requestidlecallback-20171010/)
- Repository: [GitHub w3c/requestidlecallback](https://github.com/w3c/requestidlecallback)
- Shortname: requestidlecallback

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020221.083255:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55fb794aab0c base::debug::StackTrace::StackTrace()
#1 0x55fb794c3780 logging::LogMessage::~LogMessage()
#2 0x55fb785532b1 content::ZygoteHostImpl::Init()
#3 0x55fb781c5c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55fb781cba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55fb7d2f59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55fb791e5a00 content::RunNamedProcessTypeMain()
#7 0x55fb791e62e8 content::ContentMainRunnerImpl::Run()
#8 0x55fb791eff24 service_manager::Main()
#9 0x55fb791e4f14 content::ContentMain()
#10 0x55fb7d2f49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55fb7d2f4a42 headless::HeadlessBrowserMain()
#12 0x55fb791ecf9d headless::HeadlessShellMain()
#13 0x55fb7784b1ac ChromeMain
#14 0x7f77ea2b72e1 __libc_start_main
#15 0x55fb7784b02a _start

Received signal 6
#0 0x55fb794aab0c base::debug::StackTrace::StackTrace()
#1 0x55fb794aa671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f77f02140c0 <unknown>
#3 0x7f77ea2c9fff gsignal
#4 0x7f77ea2cb42a abort
#5 0x55fb794a9105 base::debug::BreakDebugger()
#6 0x55fb794c3bca logging::LogMessage::~LogMessage()
#7 0x55fb785532b1 content::ZygoteHostImpl::Init()
#8 0x55fb781c5c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55fb781cba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55fb7d2f59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55fb791e5a00 content::RunNamedProcessTypeMain()
#12 0x55fb791e62e8 content::ContentMainRunnerImpl::Run()
#13 0x55fb791eff24 service_manager::Main()
#14 0x55fb791e4f14 content::ContentMain()
#15 0x55fb7d2f49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55fb7d2f4a42 headless::HeadlessBrowserMain()
#17 0x55fb791ecf9d headless::HeadlessShellMain()
#18 0x55fb7784b1ac ChromeMain
#19 0x7f77ea2b72e1 __libc_start_main
#20 0x55fb7784b02a _start
  r8: 0000000000000000  r9: 00007fffc7286ab0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffc72871a8 r13: 0000000000000161 r14: 00007fffc72871b0 r15: 00007fffc7286d49
  di: 0000000000000002  si: 00007fffc7286ab0  bp: 00007fffc7286cf0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f77ea2c9fff  sp: 00007fffc7286b28
  ip: 00007f77ea2c9fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020221.083255:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55fb794aab0c base::debug::StackTrace::StackTrace()
#1 0x55fb794c3780 logging::LogMessage::~LogMessage()
#2 0x55fb785532b1 content::ZygoteHostImpl::Init()
#3 0x55fb781c5c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55fb781cba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55fb7d2f59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55fb791e5a00 content::RunNamedProcessTypeMain()
#7 0x55fb791e62e8 content::ContentMainRunnerImpl::Run()
#8 0x55fb791eff24 service_manager::Main()
#9 0x55fb791e4f14 content::ContentMain()
#10 0x55fb7d2f49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55fb7d2f4a42 headless::HeadlessBrowserMain()
#12 0x55fb791ecf9d headless::HeadlessShellMain()
#13 0x55fb7784b1ac ChromeMain
#14 0x7f77ea2b72e1 __libc_start_main
#15 0x55fb7784b02a _start

Received signal 6
#0 0x55fb794aab0c base::debug::StackTrace::StackTrace()
#1 0x55fb794aa671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f77f02140c0 <unknown>
#3 0x7f77ea2c9fff gsignal
#4 0x7f77ea2cb42a abort
#5 0x55fb794a9105 base::debug::BreakDebugger()
#6 0x55fb794c3bca logging::LogMessage::~LogMessage()
#7 0x55fb785532b1 content::ZygoteHostImpl::Init()
#8 0x55fb781c5c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55fb781cba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55fb7d2f59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55fb791e5a00 content::RunNamedProcessTypeMain()
#12 0x55fb791e62e8 content::ContentMainRunnerImpl::Run()
#13 0x55fb791eff24 service_manager::Main()
#14 0x55fb791e4f14 content::ContentMain()
#15 0x55fb7d2f49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55fb7d2f4a42 headless::HeadlessBrowserMain()
#17 0x55fb791ecf9d headless::HeadlessShellMain()
#18 0x55fb7784b1ac ChromeMain
#19 0x7f77ea2b72e1 __libc_start_main
#20 0x55fb7784b02a _start
  r8: 0000000000000000  r9: 00007fffc7286ab0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffc72871a8 r13: 0000000000000161 r14: 00007fffc72871b0 r15: 00007fffc7286d49
  di: 0000000000000002  si: 00007fffc7286ab0  bp: 00007fffc7286cf0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f77ea2c9fff  sp: 00007fffc7286b28
  ip: 00007f77ea2c9fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

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
     * `Document` defined in [W3C DOM 4.1](https://w3c.github.io/dom/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/), related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Credential Management Level 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webappsec-credential-management/) (19 February 2018)
- Editor's Draft: [https://w3c.github.io/webappsec-credential-management/](https://w3c.github.io/webappsec-credential-management/)
- Latest published version: [https://www.w3.org/TR/credential-management-1/](https://www.w3.org/TR/credential-management-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-credential-management-1-20170804/)
- Repository: [GitHub w3c/webappsec-credential-management](https://github.com/w3c/webappsec-credential-management)
- Shortname: credential-management-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `AbortSignal`, `HTMLFormElement`, `Navigator`, `Window`
- Missing references for links: 
     * [`https://w3c.github.io/webappsec/usecases/credentialmanagement/`](https://w3c.github.io/webappsec/usecases/credentialmanagement/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/), related reference "MIXED-CONTENT" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)
     * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/), related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/), related reference "CSP" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
     * [`https://w3c.github.io/webauthn/`](https://w3c.github.io/webauthn/), related reference "WEBAUTHN" uses URL [`https://www.w3.org/TR/webauthn/`](https://www.w3.org/TR/webauthn/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)

Informative references to this spec from:

- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)


## CSS Animation Worklet API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/animation-worklet/) (7 April 2018)
- Repository: [GitHub wicg/animation-worklet](https://github.com/wicg/animation-worklet)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `AnimationEffectReadOnly`, `GroupEffectReadOnly`, `Window`, `sequence`
- WebIDL names also defined elsewhere: 
    * `VoidFunction` also defined in [Web IDL](https://heycam.github.io/webidl/)
- Missing references for links: 
     * [`https://w3c.github.io/web-animations/level-2/`](https://w3c.github.io/web-animations/level-2/)
     * [`https://w3c.github.io/html/infrastructure.html`](https://w3c.github.io/html/infrastructure.html)
- Inconsistent references for links: 
     * [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/), related reference "WEB-ANIMATIONS-1" uses URL [`https://www.w3.org/TR/web-animations-1/`](https://www.w3.org/TR/web-animations-1/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Animations Level 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.csswg.org/css-animations/) (10 May 2018)
- Editor's Draft: [https://drafts.csswg.org/css-animations/](https://drafts.csswg.org/css-animations/)
- Latest published version: [https://www.w3.org/TR/css-animations-1/](https://www.w3.org/TR/css-animations-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-animations-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `GlobalEventHandlers`, `Window`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/)
- [CSS Transitions](https://drafts.csswg.org/css-transitions/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [Web Animations](https://w3c.github.io/web-animations/)

Informative references to this spec from:

- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/)
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- [HTML 5.3](https://w3c.github.io/html/)


## CSS Conditional Rules Module Level 3 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-hasInvalidIdl=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css3-conditional/) (4 April 2013)
- Latest published version: [http://www.w3.org/TR/css3-conditional/](http://www.w3.org/TR/css3-conditional/)
- Latest published status: [Candidate Recommendation](http://www.w3.org/TR/2013/CR-css3-conditional-20130404/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css3-conditional

### Potential issue(s) {.anomalies}

- Invalid WebIDL content found
- Spec uses WebIDL but does not reference it normatively
- Missing references for links: 
     * [`https://www.w3.org/TR/2008/REC-CSS1-20080411`](https://www.w3.org/TR/2008/REC-CSS1-20080411)
     * [`https://www.w3.org/TR/2013/WD-css3-transitions-20130212/`](https://www.w3.org/TR/2013/WD-css3-transitions-20130212/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/), related reference "MEDIAQ" uses URL [`http://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/`](http://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Device Adaptation Module Level 1](https://drafts.csswg.org/css-device-adapt/)
- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/)

Informative references to this spec from:

- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)


## CSS Device Adaptation Module Level 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.csswg.org/css-device-adapt/) (21 February 2018)
- Editor's Draft: [https://drafts.csswg.org/css-device-adapt/](https://drafts.csswg.org/css-device-adapt/)
- Latest published version: [http://www.w3.org/TR/css-device-adapt-1/](http://www.w3.org/TR/css-device-adapt-1/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-device-adapt-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/)
     * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/)
     * [`https://www.w3.org/TR/2011/WD-css-device-adapt-20110915/`](https://www.w3.org/TR/2011/WD-css-device-adapt-20110915/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSSOM View Module](https://drafts.csswg.org/cssom-view/)

No informative reference to this spec from other specs.


## CSS Font Loading Module Level 3 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.csswg.org/css-font-loading/) (17 March 2018)
- Editor's Draft: [https://drafts.csswg.org/css-font-loading/](https://drafts.csswg.org/css-font-loading/)
- Latest published version: [http://www.w3.org/TR/css-font-loading-3/](http://www.w3.org/TR/css-font-loading-3/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2014/WD-css-font-loading-3-20140522/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-font-loading-3

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML 5.3](https://w3c.github.io/html/)

Informative references to this spec from:

- [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/)


## CSS Fonts Module Level 4 {data-spec=true data-anomaly=true data-hasInvalidIdl=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.csswg.org/css-fonts-4/) (9 May 2018)
- Editor's Draft: [https://drafts.csswg.org/css-fonts-4/](https://drafts.csswg.org/css-fonts-4/)
- Latest published version: [https://www.w3.org/TR/css-fonts-4/](https://www.w3.org/TR/css-fonts-4/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-fonts-4-20180410/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-fonts-4

### Potential issue(s) {.anomalies}

- Invalid WebIDL content found
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/)
     * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/)
     * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Conditional Rules Module Level 3](https://www.w3.org/TR/css3-conditional/)
- [CSS Device Adaptation Module Level 1](https://drafts.csswg.org/css-device-adapt/)
- [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/)
- [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/)
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/)
- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/)
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- [HTML 5.3](https://w3c.github.io/html/)
- [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)

Informative references to this spec from:

- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/)
- [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/)
- [CSS Writing Modes Level 3](https://drafts.csswg.org/css-writing-modes-3/)


## CSS Layout API Level 1 {data-spec=true data-anomaly=true data-hasInvalidIdl=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.css-houdini.org/css-layout-api-1/) (24 April 2018)
- Editor's Draft: [https://drafts.css-houdini.org/css-layout-api-1/](https://drafts.css-houdini.org/css-layout-api-1/)
- Latest published version: [https://www.w3.org/TR/css-layout-api-1/](https://www.w3.org/TR/css-layout-api-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-layout-api-1-20180412/)
- Shortname: css-layout-api-1

### Potential issue(s) {.anomalies}

- Invalid WebIDL content found
- Missing references for links: 
     * [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## CSS Masking Module Level 1 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.fxtf.org/css-masking-1/) (2 May 2018)
- Editor's Draft: [https://drafts.fxtf.org/css-masking-1/](https://drafts.fxtf.org/css-masking-1/)
- Latest published version: [http://www.w3.org/TR/css-masking-1/](http://www.w3.org/TR/css-masking-1/)
- Latest published status: [Candidate Recommendation](http://www.w3.org/TR/2014/CR-css-masking-1-20140826/)
- Repository: [GitHub w3c/fxtf-drafts](https://github.com/w3c/fxtf-drafts)
- Shortname: css-masking-1

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Unknown WebIDL names used: `SVGAnimatedEnumeration`, `SVGAnimatedLength`, `SVGAnimatedTransformList`, `SVGElement`
- Missing references for links: 
     * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/)
     * [`https://www.w3.org/TR/css-shapes/`](https://www.w3.org/TR/css-shapes/)
     * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/2013/WD-css-masking-20130620/`](https://www.w3.org/TR/2013/WD-css-masking-20130620/)
     * [`https://www.w3.org/TR/2012/WD-css-masking-20121115/`](https://www.w3.org/TR/2012/WD-css-masking-20121115/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/), related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [CSS Writing Modes Level 3](https://drafts.csswg.org/css-writing-modes-3/)
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)

No informative reference to this spec from other specs.


## CSS Object Model (CSSOM) {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.csswg.org/cssom/) (23 April 2018)
- Editor's Draft: [https://drafts.csswg.org/cssom/](https://drafts.csswg.org/cssom/)
- Latest published version: [http://www.w3.org/TR/cssom-1/](http://www.w3.org/TR/cssom-1/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: cssom-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)
- [CSS Animations Level 1](https://drafts.csswg.org/css-animations/)
- [CSS Device Adaptation Module Level 1](https://drafts.csswg.org/css-device-adapt/)
- [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/)
- [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/)
- [CSS Layout API Level 1](https://drafts.css-houdini.org/css-layout-api-1/)
- [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/)
- [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/)
- [CSS Transitions](https://drafts.csswg.org/css-transitions/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- [HTML 5.3](https://w3c.github.io/html/)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/)
- [Web Animations](https://w3c.github.io/web-animations/)
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)

Informative references to this spec from:

- [Ambient Light Sensor](https://w3c.github.io/ambient-light/)
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)
- [Web IDL](https://heycam.github.io/webidl/)


## CSS Painting API Level 1 {data-spec=true data-anomaly=true data-redefinedIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.css-houdini.org/css-paint-api-1/) (18 April 2018)
- Editor's Draft: [https://drafts.css-houdini.org/css-paint-api-1/](https://drafts.css-houdini.org/css-paint-api-1/)
- Latest published version: [https://www.w3.org/TR/css-paint-api-1/](https://www.w3.org/TR/css-paint-api-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-paint-api-1-20180410/)
- Shortname: css-paint-api-1

### Potential issue(s) {.anomalies}

- WebIDL names also defined elsewhere: 
    * `Worklet` also defined in [Web Audio API](https://webaudio.github.io/web-audio-api/) and [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- Missing references for links: 
     * [`https://www.w3.org/TR/css-properties-values-api-1/`](https://www.w3.org/TR/css-properties-values-api-1/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Console Standard](https://console.spec.whatwg.org/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/)

Informative references to this spec from:

- [Worklets Level 1](https://drafts.css-houdini.org/worklets/)


## CSS Properties and Values API Level 1 {data-spec=true data-anomaly=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.css-houdini.org/css-properties-values-api-1/) (18 April 2018)
- Editor's Draft: [https://drafts.css-houdini.org/css-properties-values-api-1/](https://drafts.css-houdini.org/css-properties-values-api-1/)
- Latest published version: [https://www.w3.org/TR/css-properties-values-api-1/](https://www.w3.org/TR/css-properties-values-api-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-css-properties-values-api-1-20171109/)
- Shortname: css-properties-values-api-1

### Potential issue(s) {.anomalies}

- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS3-VALUES" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Web Animations](https://w3c.github.io/web-animations/)

Informative references to this spec from:

- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)


## CSS Pseudo-Elements Module Level 4 {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.csswg.org/css-pseudo-4/) (21 February 2018)
- Editor's Draft: [https://drafts.csswg.org/css-pseudo-4/](https://drafts.csswg.org/css-pseudo-4/)
- Latest published version: [http://www.w3.org/TR/css-pseudo-4/](http://www.w3.org/TR/css-pseudo-4/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-pseudo-4

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Layout API Level 1](https://drafts.css-houdini.org/css-layout-api-1/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- [Web Animations](https://w3c.github.io/web-animations/)

No informative reference to this spec from other specs.


## CSS Syntax Module Level 3 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-noIdlContent=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.csswg.org/css-syntax/) (27 April 2018)
- Editor's Draft: [https://drafts.csswg.org/css-syntax/](https://drafts.csswg.org/css-syntax/)
- Latest published version: [http://www.w3.org/TR/css-syntax-3/](http://www.w3.org/TR/css-syntax-3/)
- Latest published status: [Candidate Recommendation](http://www.w3.org/TR/2014/CR-css-syntax-3-20140220/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-syntax-3

### Potential issue(s) {.anomalies}

- No WebIDL definitions found
- Missing references for links: 
     * [`https://www.w3.org/TR/selectors-api/`](https://www.w3.org/TR/selectors-api/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/), related reference "SELECT" uses URL [`https://www.w3.org/TR/selectors-3/`](https://www.w3.org/TR/selectors-3/)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Animations Level 1](https://drafts.csswg.org/css-animations/)
- [CSS Device Adaptation Module Level 1](https://drafts.csswg.org/css-device-adapt/)
- [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/)
- [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/)
- [CSS Layout API Level 1](https://drafts.css-houdini.org/css-layout-api-1/)
- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/)
- [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
- [HTML 5.3](https://w3c.github.io/html/)
- [Intersection Observer](https://w3c.github.io/IntersectionObserver/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)
- [Worklets Level 1](https://drafts.css-houdini.org/worklets/)

No informative reference to this spec from other specs.


## CSS Transitions {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.csswg.org/css-transitions/) (21 February 2018)
- Editor's Draft: [https://drafts.csswg.org/css-transitions/](https://drafts.csswg.org/css-transitions/)
- Latest published version: [https://www.w3.org/TR/css-transitions-1/](https://www.w3.org/TR/css-transitions-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-transitions-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `GlobalEventHandlers`, `Window`
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/2013/WD-css3-transitions-20131119/`](https://www.w3.org/TR/2013/WD-css3-transitions-20131119/)
     * [`https://www.w3.org/TR/2013/WD-css3-transitions-20130212/ChangeLog`](https://www.w3.org/TR/2013/WD-css3-transitions-20130212/ChangeLog)
- Inconsistent references for links: 
     * [`https://w3c.github.io/dom/`](https://w3c.github.io/dom/), related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [HTML 5.3](https://w3c.github.io/html/)
- [Web Animations](https://w3c.github.io/web-animations/)
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)

Informative references to this spec from:

- [CSS Animations Level 1](https://drafts.csswg.org/css-animations/)


## CSS Typed OM Level 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.css-houdini.org/css-typed-om-1/) (7 May 2018)
- Editor's Draft: [https://drafts.css-houdini.org/css-typed-om-1/](https://drafts.css-houdini.org/css-typed-om-1/)
- Latest published version: [https://www.w3.org/TR/css-typed-om-1/](https://www.w3.org/TR/css-typed-om-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- Shortname: css-typed-om-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `LayoutWorklet`, `Window`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) or [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
     * `PaintWorklet` defined in [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Layout API Level 1](https://drafts.css-houdini.org/css-layout-api-1/)
- [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/)

No informative reference to this spec from other specs.


## CSS Values and Units Module Level 4 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-noIdlContent=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.csswg.org/css-values/) (9 May 2018)
- Editor's Draft: [https://drafts.csswg.org/css-values/](https://drafts.csswg.org/css-values/)
- Latest published version: [https://www.w3.org/TR/css-values-3/](https://www.w3.org/TR/css-values-3/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2016/CR-css-values-3-20160929/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-values-3

### Potential issue(s) {.anomalies}

- No WebIDL definitions found
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css-syntax/`](https://www.w3.org/TR/css-syntax/), related reference "CSS3SYN" uses URL [`https://www.w3.org/TR/css-syntax-3/`](https://www.w3.org/TR/css-syntax-3/)
     * [`https://www.w3.org/TR/css3-fonts/`](https://www.w3.org/TR/css3-fonts/), related reference "CSS3-FONTS" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
     * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/), related reference "SELECTORS-3" uses URL [`https://www.w3.org/TR/selectors-3/`](https://www.w3.org/TR/selectors-3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Content Security Policy: Embedded Enforcement](https://w3c.github.io/webappsec-csp/embedded/)
- [CSS Animations Level 1](https://drafts.csswg.org/css-animations/)
- [CSS Device Adaptation Module Level 1](https://drafts.csswg.org/css-device-adapt/)
- [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/)
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/)
- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/)
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)
- [CSS Transitions](https://drafts.csswg.org/css-transitions/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [CSS Writing Modes Level 3](https://drafts.csswg.org/css-writing-modes-3/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
- [HTML 5.3](https://w3c.github.io/html/)
- [Intersection Observer](https://w3c.github.io/IntersectionObserver/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)
- [Web Animations](https://w3c.github.io/web-animations/)
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)

No informative reference to this spec from other specs.


## CSS Writing Modes Level 3 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-noIdlContent=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.csswg.org/css-writing-modes-3/) (20 April 2018)
- Editor's Draft: [https://drafts.csswg.org/css-writing-modes-3/](https://drafts.csswg.org/css-writing-modes-3/)
- Latest published version: [https://www.w3.org/TR/css-writing-modes-3/](https://www.w3.org/TR/css-writing-modes-3/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-css-writing-modes-3-20171207/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-writing-modes-3

### Potential issue(s) {.anomalies}

- No WebIDL definitions found
- Missing references for links: 
     * [`https://www.w3.org/TR/css-logical-1/`](https://www.w3.org/TR/css-logical-1/)
     * [`https://www.w3.org/TR/css3-flexbox/`](https://www.w3.org/TR/css3-flexbox/)
     * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Device Adaptation Module Level 1](https://drafts.csswg.org/css-device-adapt/)
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- [HTML 5.3](https://w3c.github.io/html/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)

Informative references to this spec from:

- [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/)


## CSSOM View Module {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.csswg.org/cssom-view/) (20 April 2018)
- Editor's Draft: [https://drafts.csswg.org/cssom-view/](https://drafts.csswg.org/cssom-view/)
- Latest published version: [http://www.w3.org/TR/cssom-view-1/](http://www.w3.org/TR/cssom-view-1/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: cssom-view-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `HTMLElement`, `HTMLImageElement`, `Window`
- Missing references for WebIDL names: 
     * `MouseEvent` defined in [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
     * `MouseEventInit` defined in [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [HTML 5.3](https://w3c.github.io/html/)
- [Intersection Observer](https://w3c.github.io/IntersectionObserver/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html)

Informative references to this spec from:

- [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
- [W3C DOM 4.1](https://w3c.github.io/dom/)


## DeviceOrientation Event Specification {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/deviceorientation/spec-source-orientation.html) (1 July 2016)
- Editor's Draft: [https://w3c.github.io/deviceorientation/spec-source-orientation.html](https://w3c.github.io/deviceorientation/spec-source-orientation.html)
- Latest published version: [https://www.w3.org/TR/orientation-event/](https://www.w3.org/TR/orientation-event/)
- Latest published status: [Retired](https://www.w3.org/TR/2017/NOTE-orientation-event-20170530/)
- Repository: [GitHub w3c/deviceorientation](https://github.com/w3c/deviceorientation)
- Shortname: orientation-event

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/), related reference "HTML51" uses URL [`https://www.w3.org/TR/2016/REC-html51-20161101/`](https://www.w3.org/TR/2016/REC-html51-20161101/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Generic Sensor API](https://w3c.github.io/sensors/)
- [Web IDL](https://heycam.github.io/webidl/)


## DOM Parsing and Serialization {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/DOM-Parsing/)
- Editor's Draft: [https://w3c.github.io/DOM-Parsing/](https://w3c.github.io/DOM-Parsing/)
- Latest published version: [http://www.w3.org/TR/DOM-Parsing/](http://www.w3.org/TR/DOM-Parsing/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-DOM-Parsing-20160517/)
- Repository: [GitHub w3c/DOM-Parsing](https://github.com/w3c/DOM-Parsing)
- Shortname: DOM-Parsing

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020111.689057:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b905ac0b0c base::debug::StackTrace::StackTrace()
#1 0x55b905ad9780 logging::LogMessage::~LogMessage()
#2 0x55b904b692b1 content::ZygoteHostImpl::Init()
#3 0x55b9047dbc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b9047e1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b90990b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b9057fba00 content::RunNamedProcessTypeMain()
#7 0x55b9057fc2e8 content::ContentMainRunnerImpl::Run()
#8 0x55b905805f24 service_manager::Main()
#9 0x55b9057faf14 content::ContentMain()
#10 0x55b90990a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b90990aa42 headless::HeadlessBrowserMain()
#12 0x55b905802f9d headless::HeadlessShellMain()
#13 0x55b903e611ac ChromeMain
#14 0x7f39022132e1 __libc_start_main
#15 0x55b903e6102a _start

Received signal 6
#0 0x55b905ac0b0c base::debug::StackTrace::StackTrace()
#1 0x55b905ac0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f39081700c0 <unknown>
#3 0x7f3902225fff gsignal
#4 0x7f390222742a abort
#5 0x55b905abf105 base::debug::BreakDebugger()
#6 0x55b905ad9bca logging::LogMessage::~LogMessage()
#7 0x55b904b692b1 content::ZygoteHostImpl::Init()
#8 0x55b9047dbc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b9047e1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b90990b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b9057fba00 content::RunNamedProcessTypeMain()
#12 0x55b9057fc2e8 content::ContentMainRunnerImpl::Run()
#13 0x55b905805f24 service_manager::Main()
#14 0x55b9057faf14 content::ContentMain()
#15 0x55b90990a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b90990aa42 headless::HeadlessBrowserMain()
#17 0x55b905802f9d headless::HeadlessShellMain()
#18 0x55b903e611ac ChromeMain
#19 0x7f39022132e1 __libc_start_main
#20 0x55b903e6102a _start
  r8: 0000000000000000  r9: 00007ffcd602b8c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcd602bfb8 r13: 0000000000000161 r14: 00007ffcd602bfc0 r15: 00007ffcd602bb59
  di: 0000000000000002  si: 00007ffcd602b8c0  bp: 00007ffcd602bb00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3902225fff  sp: 00007ffcd602b938
  ip: 00007f3902225fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020111.689057:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b905ac0b0c base::debug::StackTrace::StackTrace()
#1 0x55b905ad9780 logging::LogMessage::~LogMessage()
#2 0x55b904b692b1 content::ZygoteHostImpl::Init()
#3 0x55b9047dbc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b9047e1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b90990b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b9057fba00 content::RunNamedProcessTypeMain()
#7 0x55b9057fc2e8 content::ContentMainRunnerImpl::Run()
#8 0x55b905805f24 service_manager::Main()
#9 0x55b9057faf14 content::ContentMain()
#10 0x55b90990a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b90990aa42 headless::HeadlessBrowserMain()
#12 0x55b905802f9d headless::HeadlessShellMain()
#13 0x55b903e611ac ChromeMain
#14 0x7f39022132e1 __libc_start_main
#15 0x55b903e6102a _start

Received signal 6
#0 0x55b905ac0b0c base::debug::StackTrace::StackTrace()
#1 0x55b905ac0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f39081700c0 <unknown>
#3 0x7f3902225fff gsignal
#4 0x7f390222742a abort
#5 0x55b905abf105 base::debug::BreakDebugger()
#6 0x55b905ad9bca logging::LogMessage::~LogMessage()
#7 0x55b904b692b1 content::ZygoteHostImpl::Init()
#8 0x55b9047dbc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b9047e1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b90990b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b9057fba00 content::RunNamedProcessTypeMain()
#12 0x55b9057fc2e8 content::ContentMainRunnerImpl::Run()
#13 0x55b905805f24 service_manager::Main()
#14 0x55b9057faf14 content::ContentMain()
#15 0x55b90990a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b90990aa42 headless::HeadlessBrowserMain()
#17 0x55b905802f9d headless::HeadlessShellMain()
#18 0x55b903e611ac ChromeMain
#19 0x7f39022132e1 __libc_start_main
#20 0x55b903e6102a _start
  r8: 0000000000000000  r9: 00007ffcd602b8c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcd602bfb8 r13: 0000000000000161 r14: 00007ffcd602bfc0 r15: 00007ffcd602bb59
  di: 0000000000000002  si: 00007ffcd602b8c0  bp: 00007ffcd602bb00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3902225fff  sp: 00007ffcd602b938
  ip: 00007f3902225fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML 5.3](https://w3c.github.io/html/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Informative references to this spec from:

- [W3C DOM 4.1](https://w3c.github.io/dom/)


## Encoding Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://encoding.spec.whatwg.org/) (25 April 2018)
- Editor's Draft: [https://encoding.spec.whatwg.org/](https://encoding.spec.whatwg.org/)
- Latest published version: [https://www.w3.org/TR/encoding/](https://www.w3.org/TR/encoding/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-encoding-20180327/)
- Shortname: encoding

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) or [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Content Security Policy: Embedded Enforcement](https://w3c.github.io/webappsec-csp/embedded/)
- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)
- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File API](https://w3c.github.io/FileAPI/)
- [HTML 5.3](https://w3c.github.io/html/)
- [URL Standard](https://url.spec.whatwg.org/)
- [W3C DOM 4.1](https://w3c.github.io/dom/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/)
- [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

No informative reference to this spec from other specs.


## Encrypted Media Extensions {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/encrypted-media/) (22 February 2018)
- Editor's Draft: [https://w3c.github.io/encrypted-media/](https://w3c.github.io/encrypted-media/)
- Latest published version: [https://www.w3.org/TR/encrypted-media/](https://www.w3.org/TR/encrypted-media/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2017/REC-encrypted-media-20170918/)
- Repository: [GitHub w3c/encrypted-media](https://github.com/w3c/encrypted-media)
- Shortname: encrypted-media

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `HTMLMediaElement`, `Navigator`, `Window`
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/), related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
     * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/), related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)


## Feature Policy {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/feature-policy/) (23 March 2018)
- Repository: [GitHub wicg/feature-policy](https://github.com/wicg/feature-policy)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `HTMLIFrameElement`
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/), related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Generic Sensor API](https://w3c.github.io/sensors/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Informative references to this spec from:

- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)


## Fetch Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://fetch.spec.whatwg.org/) (9 May 2018)
- Repository: [GitHub whatwg/fetch](https://github.com/whatwg/fetch)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `AbortSignal`, `ReadableStream`, `Window`, `WindowOrWorkerGlobalScope`
- Missing references for links: 
     * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)
- [Content Security Policy: Embedded Enforcement](https://w3c.github.io/webappsec-csp/embedded/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/)
- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [File API](https://w3c.github.io/FileAPI/)
- [HTML 5.3](https://w3c.github.io/html/)
- [Media Session Standard](https://wicg.github.io/mediasession/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/)
- [W3C DOM 4.1](https://w3c.github.io/dom/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)
- [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)

Informative references to this spec from:

- [Streams Standard](https://streams.spec.whatwg.org/)


## File and Directory Entries API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/entries-api/) (29 January 2018)
- Repository: [GitHub wicg/entries-api](https://github.com/wicg/entries-api)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DataTransferItem`, `HTMLInputElement`
- Inconsistent references for links: 
     * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/), related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## File API {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/FileAPI/) (31 January 2018)
- Editor's Draft: [https://w3c.github.io/FileAPI/](https://w3c.github.io/FileAPI/)
- Latest published version: [https://www.w3.org/TR/FileAPI/](https://www.w3.org/TR/FileAPI/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-FileAPI-20171026/)
- Repository: [GitHub w3c/FileAPI](https://github.com/w3c/FileAPI)
- Shortname: FileAPI

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Window`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Clipboard API and events](https://w3c.github.io/clipboard-apis/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File and Directory Entries API](https://wicg.github.io/entries-api/)
- [HTML 5.3](https://w3c.github.io/html/)
- [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/)
- [Media Source Extensions™](https://w3c.github.io/media-source/)
- [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- [MediaStream Recording](https://w3c.github.io/mediacapture-record/)
- [URL Standard](https://url.spec.whatwg.org/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Informative references to this spec from:

- [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html)


## Filter Effects Module Level 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.fxtf.org/filter-effects/) (10 May 2018)
- Editor's Draft: [https://drafts.fxtf.org/filter-effects/](https://drafts.fxtf.org/filter-effects/)
- Latest published version: [http://www.w3.org/TR/filter-effects-1/](http://www.w3.org/TR/filter-effects-1/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2014/WD-filter-effects-1-20141125/)
- Repository: [GitHub w3c/fxtf-drafts](https://github.com/w3c/fxtf-drafts)
- Shortname: filter-effects-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `SVGAnimatedEnumeration`, `SVGAnimatedInteger`, `SVGAnimatedLength`, `SVGAnimatedNumber`, `SVGAnimatedNumberList`, `SVGAnimatedPreserveAspectRatio`, `SVGAnimatedString`, `SVGElement`
- Missing references for links: 
     * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/)
     * [`https://www.w3.org/TR/css-transitions-1/`](https://www.w3.org/TR/css-transitions-1/)
     * [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/)
     * [`https://www.w3.org/TR/2012/WD-filter-effects-20121025/`](https://www.w3.org/TR/2012/WD-filter-effects-20121025/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/), related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)

No informative reference to this spec from other specs.


## Fullscreen API Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://fullscreen.spec.whatwg.org/) (1 February 2018)
- Repository: [GitHub whatwg/fullscreen](https://github.com/whatwg/fullscreen)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`
- Missing references for links: 
     * [`https://w3c.github.io/screen-orientation/`](https://w3c.github.io/screen-orientation/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Feature Policy](https://wicg.github.io/feature-policy/)
- [HTML 5.3](https://w3c.github.io/html/)
- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)

Informative references to this spec from:

- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)
- [Web IDL](https://heycam.github.io/webidl/)


## Gamepad {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/gamepad/)
- Editor's Draft: [https://w3c.github.io/gamepad/](https://w3c.github.io/gamepad/)
- Latest published version: [https://www.w3.org/TR/gamepad/](https://www.w3.org/TR/gamepad/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-gamepad-20180508/)
- Repository: [GitHub w3c/gamepad](https://github.com/w3c/gamepad)
- Shortname: gamepad

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020204.931274:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5638e825db0c base::debug::StackTrace::StackTrace()
#1 0x5638e8276780 logging::LogMessage::~LogMessage()
#2 0x5638e73062b1 content::ZygoteHostImpl::Init()
#3 0x5638e6f78c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5638e6f7ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5638ec0a89a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5638e7f98a00 content::RunNamedProcessTypeMain()
#7 0x5638e7f992e8 content::ContentMainRunnerImpl::Run()
#8 0x5638e7fa2f24 service_manager::Main()
#9 0x5638e7f97f14 content::ContentMain()
#10 0x5638ec0a79b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5638ec0a7a42 headless::HeadlessBrowserMain()
#12 0x5638e7f9ff9d headless::HeadlessShellMain()
#13 0x5638e65fe1ac ChromeMain
#14 0x7f4d455b52e1 __libc_start_main
#15 0x5638e65fe02a _start

Received signal 6
#0 0x5638e825db0c base::debug::StackTrace::StackTrace()
#1 0x5638e825d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f4d4b5120c0 <unknown>
#3 0x7f4d455c7fff gsignal
#4 0x7f4d455c942a abort
#5 0x5638e825c105 base::debug::BreakDebugger()
#6 0x5638e8276bca logging::LogMessage::~LogMessage()
#7 0x5638e73062b1 content::ZygoteHostImpl::Init()
#8 0x5638e6f78c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5638e6f7ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5638ec0a89a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5638e7f98a00 content::RunNamedProcessTypeMain()
#12 0x5638e7f992e8 content::ContentMainRunnerImpl::Run()
#13 0x5638e7fa2f24 service_manager::Main()
#14 0x5638e7f97f14 content::ContentMain()
#15 0x5638ec0a79b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5638ec0a7a42 headless::HeadlessBrowserMain()
#17 0x5638e7f9ff9d headless::HeadlessShellMain()
#18 0x5638e65fe1ac ChromeMain
#19 0x7f4d455b52e1 __libc_start_main
#20 0x5638e65fe02a _start
  r8: 0000000000000000  r9: 00007ffce9e4dcd0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffce9e4e3c8 r13: 0000000000000161 r14: 00007ffce9e4e3d0 r15: 00007ffce9e4df69
  di: 0000000000000002  si: 00007ffce9e4dcd0  bp: 00007ffce9e4df10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f4d455c7fff  sp: 00007ffce9e4dd48
  ip: 00007f4d455c7fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020204.931274:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5638e825db0c base::debug::StackTrace::StackTrace()
#1 0x5638e8276780 logging::LogMessage::~LogMessage()
#2 0x5638e73062b1 content::ZygoteHostImpl::Init()
#3 0x5638e6f78c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5638e6f7ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5638ec0a89a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5638e7f98a00 content::RunNamedProcessTypeMain()
#7 0x5638e7f992e8 content::ContentMainRunnerImpl::Run()
#8 0x5638e7fa2f24 service_manager::Main()
#9 0x5638e7f97f14 content::ContentMain()
#10 0x5638ec0a79b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5638ec0a7a42 headless::HeadlessBrowserMain()
#12 0x5638e7f9ff9d headless::HeadlessShellMain()
#13 0x5638e65fe1ac ChromeMain
#14 0x7f4d455b52e1 __libc_start_main
#15 0x5638e65fe02a _start

Received signal 6
#0 0x5638e825db0c base::debug::StackTrace::StackTrace()
#1 0x5638e825d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f4d4b5120c0 <unknown>
#3 0x7f4d455c7fff gsignal
#4 0x7f4d455c942a abort
#5 0x5638e825c105 base::debug::BreakDebugger()
#6 0x5638e8276bca logging::LogMessage::~LogMessage()
#7 0x5638e73062b1 content::ZygoteHostImpl::Init()
#8 0x5638e6f78c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5638e6f7ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5638ec0a89a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5638e7f98a00 content::RunNamedProcessTypeMain()
#12 0x5638e7f992e8 content::ContentMainRunnerImpl::Run()
#13 0x5638e7fa2f24 service_manager::Main()
#14 0x5638e7f97f14 content::ContentMain()
#15 0x5638ec0a79b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5638ec0a7a42 headless::HeadlessBrowserMain()
#17 0x5638e7f9ff9d headless::HeadlessShellMain()
#18 0x5638e65fe1ac ChromeMain
#19 0x7f4d455b52e1 __libc_start_main
#20 0x5638e65fe02a _start
  r8: 0000000000000000  r9: 00007ffce9e4dcd0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffce9e4e3c8 r13: 0000000000000161 r14: 00007ffce9e4e3d0 r15: 00007ffce9e4df69
  di: 0000000000000002  si: 00007ffce9e4dcd0  bp: 00007ffce9e4df10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f4d455c7fff  sp: 00007ffce9e4dd48
  ip: 00007f4d455c7fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Generic Sensor API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/sensors/) (15 March 2018)
- Editor's Draft: [https://w3c.github.io/sensors/](https://w3c.github.io/sensors/)
- Latest published version: [https://www.w3.org/TR/generic-sensor/](https://www.w3.org/TR/generic-sensor/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-generic-sensor-20180320/)
- Repository: [GitHub w3c/sensors](https://github.com/w3c/sensors)
- Shortname: generic-sensor

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMHighResTimeStamp`, `EventHandler`, `Window`
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/page-visibility-2/`](https://www.w3.org/TR/page-visibility-2/), related reference "PAGE-VISIBILITY" uses URL [`https://www.w3.org/TR/page-visibility/`](https://www.w3.org/TR/page-visibility/)
     * [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/), related reference "PERMISSIONS" uses URL [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/)
     * [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/), related reference "HR-TIME-2" uses URL [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Accelerometer](https://w3c.github.io/accelerometer/)
- [Ambient Light Sensor](https://w3c.github.io/ambient-light/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [Gyroscope](https://w3c.github.io/gyroscope/)
- [Magnetometer](https://w3c.github.io/magnetometer/)
- [Orientation Sensor](https://w3c.github.io/orientation-sensor/)
- [Proximity Sensor](https://w3c.github.io/proximity/)

Informative references to this spec from:

- [Generic Sensor API](https://w3c.github.io/sensors/)


## Geolocation API Specification 2nd Edition {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/geolocation-API/) (31 January 2018))
- Latest published version: [https://www.w3.org/TR/geolocation-API/](https://www.w3.org/TR/geolocation-API/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2016/REC-geolocation-API-20161108/)
- Shortname: geolocation-API

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Navigator`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)

Informative references to this spec from:

- [Generic Sensor API](https://w3c.github.io/sensors/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [Permissions](https://w3c.github.io/permissions/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)
- [Web Budget API](https://wicg.github.io/budget-api/)
- [Web IDL](https://heycam.github.io/webidl/)


## Geolocation Sensor {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/geolocation-sensor/) (26 February 2018)
- Repository: [GitHub wicg/geolocation-sensor](https://github.com/wicg/geolocation-sensor)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `AbortSignal`, `DOMHighResTimeStamp`, `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Geometry Interfaces Module Level 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.fxtf.org/geometry/) (27 April 2018)
- Editor's Draft: [https://drafts.fxtf.org/geometry/](https://drafts.fxtf.org/geometry/)
- Latest published version: [http://www.w3.org/TR/geometry-1/](http://www.w3.org/TR/geometry-1/)
- Latest published status: [Candidate Recommendation](http://www.w3.org/TR/2014/CR-geometry-1-20141125/)
- Repository: [GitHub w3c/fxtf-drafts](https://github.com/w3c/fxtf-drafts)
- Shortname: geometry-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- [HTML 5.3](https://w3c.github.io/html/)
- [Intersection Observer](https://w3c.github.io/IntersectionObserver/)
- [Orientation Sensor](https://w3c.github.io/orientation-sensor/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html)

Informative references to this spec from:

- [Web IDL](https://heycam.github.io/webidl/)


## Gyroscope {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/gyroscope/) (14 March 2018)
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

- [Orientation Sensor](https://w3c.github.io/orientation-sensor/)

Informative references to this spec from:

- [Permissions](https://w3c.github.io/permissions/)


## High Resolution Time Level 3 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/hr-time/)
- Editor's Draft: [https://w3c.github.io/hr-time/](https://w3c.github.io/hr-time/)
- Latest published version: [https://www.w3.org/TR/hr-time-3/](https://www.w3.org/TR/hr-time-3/)
- Latest published status: [Retired](https://www.w3.org/TR/2017/NOTE-hr-time-3-20170803/)
- Repository: [GitHub w3c/hr-time](https://github.com/w3c/hr-time)
- Shortname: hr-time-3

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020204.952995:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d496d3bb0c base::debug::StackTrace::StackTrace()
#1 0x55d496d54780 logging::LogMessage::~LogMessage()
#2 0x55d495de42b1 content::ZygoteHostImpl::Init()
#3 0x55d495a56c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d495a5ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d49ab869a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d496a76a00 content::RunNamedProcessTypeMain()
#7 0x55d496a772e8 content::ContentMainRunnerImpl::Run()
#8 0x55d496a80f24 service_manager::Main()
#9 0x55d496a75f14 content::ContentMain()
#10 0x55d49ab859b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d49ab85a42 headless::HeadlessBrowserMain()
#12 0x55d496a7df9d headless::HeadlessShellMain()
#13 0x55d4950dc1ac ChromeMain
#14 0x7fcad6c5b2e1 __libc_start_main
#15 0x55d4950dc02a _start

Received signal 6
#0 0x55d496d3bb0c base::debug::StackTrace::StackTrace()
#1 0x55d496d3b671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fcadcbb80c0 <unknown>
#3 0x7fcad6c6dfff gsignal
#4 0x7fcad6c6f42a abort
#5 0x55d496d3a105 base::debug::BreakDebugger()
#6 0x55d496d54bca logging::LogMessage::~LogMessage()
#7 0x55d495de42b1 content::ZygoteHostImpl::Init()
#8 0x55d495a56c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d495a5ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d49ab869a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d496a76a00 content::RunNamedProcessTypeMain()
#12 0x55d496a772e8 content::ContentMainRunnerImpl::Run()
#13 0x55d496a80f24 service_manager::Main()
#14 0x55d496a75f14 content::ContentMain()
#15 0x55d49ab859b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d49ab85a42 headless::HeadlessBrowserMain()
#17 0x55d496a7df9d headless::HeadlessShellMain()
#18 0x55d4950dc1ac ChromeMain
#19 0x7fcad6c5b2e1 __libc_start_main
#20 0x55d4950dc02a _start
  r8: 0000000000000000  r9: 00007ffd200ee8f0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd200eefe8 r13: 0000000000000161 r14: 00007ffd200eeff0 r15: 00007ffd200eeb89
  di: 0000000000000002  si: 00007ffd200ee8f0  bp: 00007ffd200eeb30  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fcad6c6dfff  sp: 00007ffd200ee968
  ip: 00007fcad6c6dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020204.952995:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d496d3bb0c base::debug::StackTrace::StackTrace()
#1 0x55d496d54780 logging::LogMessage::~LogMessage()
#2 0x55d495de42b1 content::ZygoteHostImpl::Init()
#3 0x55d495a56c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d495a5ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d49ab869a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d496a76a00 content::RunNamedProcessTypeMain()
#7 0x55d496a772e8 content::ContentMainRunnerImpl::Run()
#8 0x55d496a80f24 service_manager::Main()
#9 0x55d496a75f14 content::ContentMain()
#10 0x55d49ab859b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d49ab85a42 headless::HeadlessBrowserMain()
#12 0x55d496a7df9d headless::HeadlessShellMain()
#13 0x55d4950dc1ac ChromeMain
#14 0x7fcad6c5b2e1 __libc_start_main
#15 0x55d4950dc02a _start

Received signal 6
#0 0x55d496d3bb0c base::debug::StackTrace::StackTrace()
#1 0x55d496d3b671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fcadcbb80c0 <unknown>
#3 0x7fcad6c6dfff gsignal
#4 0x7fcad6c6f42a abort
#5 0x55d496d3a105 base::debug::BreakDebugger()
#6 0x55d496d54bca logging::LogMessage::~LogMessage()
#7 0x55d495de42b1 content::ZygoteHostImpl::Init()
#8 0x55d495a56c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d495a5ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d49ab869a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d496a76a00 content::RunNamedProcessTypeMain()
#12 0x55d496a772e8 content::ContentMainRunnerImpl::Run()
#13 0x55d496a80f24 service_manager::Main()
#14 0x55d496a75f14 content::ContentMain()
#15 0x55d49ab859b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d49ab85a42 headless::HeadlessBrowserMain()
#17 0x55d496a7df9d headless::HeadlessShellMain()
#18 0x55d4950dc1ac ChromeMain
#19 0x7fcad6c5b2e1 __libc_start_main
#20 0x55d4950dc02a _start
  r8: 0000000000000000  r9: 00007ffd200ee8f0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd200eefe8 r13: 0000000000000161 r14: 00007ffd200eeff0 r15: 00007ffd200eeb89
  di: 0000000000000002  si: 00007ffd200ee8f0  bp: 00007ffd200eeb30  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fcad6c6dfff  sp: 00007ffd200ee968
  ip: 00007fcad6c6dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Generic Sensor API](https://w3c.github.io/sensors/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [HTML 5.3](https://w3c.github.io/html/)
- [Long Tasks API 1](https://w3c.github.io/longtasks/)
- [MediaStream Recording](https://w3c.github.io/mediacapture-record/)
- [Paint Timing 1](https://w3c.github.io/paint-timing/)
- [W3C DOM 4.1](https://w3c.github.io/dom/)
- [Web Animations](https://w3c.github.io/web-animations/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/)

Informative references to this spec from:

- [Web Animations](https://w3c.github.io/web-animations/)


## HTML 5.3 {data-spec=true data-anomaly=true data-hasInvalidIdl=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/html/) (10 May 2018)
- Editor's Draft: [https://w3c.github.io/html/](https://w3c.github.io/html/)
- Latest published version: [https://www.w3.org/TR/html52/](https://www.w3.org/TR/html52/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2017/REC-html52-20171214/)
- Repository: [GitHub w3c/html](https://github.com/w3c/html)
- Shortname: html52

### Potential issue(s) {.anomalies}

- Invalid WebIDL content found
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/)
     * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/)
     * [`https://w3c.github.io/using-aria/`](https://w3c.github.io/using-aria/)
     * [`https://w3c.github.io/aria-practices/`](https://w3c.github.io/aria-practices/)
     * [`https://www.w3.org/TR/css-device-adapt-1/`](https://www.w3.org/TR/css-device-adapt-1/)
     * [`https://www.w3.org/TR/dpub-aria-1.0/`](https://www.w3.org/TR/dpub-aria-1.0/)
     * [`https://www.w3.org/TR/accname-aam/`](https://www.w3.org/TR/accname-aam/)
     * [`https://www.w3.org/TR/turingtest/`](https://www.w3.org/TR/turingtest/)
     * [`https://www.w3.org/TR/remote-playback/`](https://www.w3.org/TR/remote-playback/)
     * [`https://www.w3.org/TR/xlink11/`](https://www.w3.org/TR/xlink11/)
     * [`https://www.w3.org/TR/2017/WD-html53-20170206/`](https://www.w3.org/TR/2017/WD-html53-20170206/)
     * [`https://www.w3.org/TR/2017/WD-html53-20171214/`](https://www.w3.org/TR/2017/WD-html53-20171214/)
     * [`https://w3c.github.io/i18n-drafts/getting-started/wg.en`](https://w3c.github.io/i18n-drafts/getting-started/wg.en)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/), related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
     * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/), related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)
     * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/), related reference "FILEAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
     * [`https://w3c.github.io/IndexedDB/`](https://w3c.github.io/IndexedDB/), related reference "INDEXEDDB" uses URL [`https://www.w3.org/TR/IndexedDB/`](https://www.w3.org/TR/IndexedDB/)
     * [`https://w3c.github.io/media-source/`](https://w3c.github.io/media-source/), related reference "MEDIA-SOURCE" uses URL [`https://www.w3.org/TR/media-source/`](https://www.w3.org/TR/media-source/)
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/), related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
     * [`https://www.w3.org/TR/1999/REC-xpath-19991116`](https://www.w3.org/TR/1999/REC-xpath-19991116), related reference "XPATH" uses URL [`https://www.w3.org/TR/xpath/`](https://www.w3.org/TR/xpath/)
     * [`https://www.w3.org/TR/webmessaging/`](https://www.w3.org/TR/webmessaging/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
     * [`https://w3c.github.io/webappsec-referrer-policy/`](https://w3c.github.io/webappsec-referrer-policy/), related reference "REFERRERPOLICY" uses URL [`https://www.w3.org/TR/referrer-policy`](https://www.w3.org/TR/referrer-policy)
     * [`https://w3c.github.io/html/`](https://w3c.github.io/html/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
     * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/), related reference "SERVICE-WORKERS" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
     * [`https://www.w3.org/TR/html52/`](https://www.w3.org/TR/html52/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Clipboard API and events](https://w3c.github.io/clipboard-apis/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Compositing and Blending Level 1](https://drafts.fxtf.org/compositing-1/)
- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)
- [Content Security Policy: Embedded Enforcement](https://w3c.github.io/webappsec-csp/embedded/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/)
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [CSS Animations Level 1](https://drafts.csswg.org/css-animations/)
- [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/)
- [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/)
- [CSS Layout API Level 1](https://drafts.css-houdini.org/css-layout-api-1/)
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/)
- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/)
- [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/)
- [CSS Transitions](https://drafts.csswg.org/css-transitions/)
- [CSS Writing Modes Level 3](https://drafts.csswg.org/css-writing-modes-3/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- [DeviceOrientation Event Specification](https://w3c.github.io/deviceorientation/spec-source-orientation.html)
- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File and Directory Entries API](https://wicg.github.io/entries-api/)
- [File API](https://w3c.github.io/FileAPI/)
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [Generic Sensor API](https://w3c.github.io/sensors/)
- [Geolocation API Specification 2nd Edition](https://www.w3.org/TR/geolocation-API/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
- [HTML 5.3](https://w3c.github.io/html/)
- [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/)
- [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/)
- [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/)
- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [Media Session Standard](https://wicg.github.io/mediasession/)
- [Media Source Extensions™](https://w3c.github.io/media-source/)
- [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- [MediaStream Recording](https://w3c.github.io/mediacapture-record/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)
- [Permissions](https://w3c.github.io/permissions/)
- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)
- [Server-Sent Events](http://www.w3.org/TR/2015/REC-eventsource-20150203/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [Streams Standard](https://streams.spec.whatwg.org/)
- [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [URL Standard](https://url.spec.whatwg.org/)
- [W3C DOM 4.1](https://w3c.github.io/dom/)
- [Web Animations](https://w3c.github.io/web-animations/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web Budget API](https://wicg.github.io/budget-api/)
- [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html)
- [Web IDL](https://heycam.github.io/webidl/)
- [Web Notifications](https://www.w3.org/TR/notifications/)
- [Web Storage (Second Edition)](http://www.w3.org/TR/2016/REC-webstorage-20160419/)
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/)
- [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- [WebUSB API](https://wicg.github.io/webusb/)
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)
- [WebXR Device API](https://immersive-web.github.io/webxr/)
- [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Informative references to this spec from:

- [Clipboard API and events](https://w3c.github.io/clipboard-apis/)
- [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/)
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/)
- [CSS Writing Modes Level 3](https://drafts.csswg.org/css-writing-modes-3/)
- [Encoding Standard](https://encoding.spec.whatwg.org/)
- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [Orientation Sensor](https://w3c.github.io/orientation-sensor/)
- [Progress Events](http://www.w3.org/TR/2014/REC-progress-events-20140211/)
- [Selectors Level 3](https://www.w3.org/TR/css3-selectors/)


## HTML Canvas 2D Context {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/2dcontext/) (19 November 2015)
- Latest published version: [http://www.w3.org/TR/2dcontext/](http://www.w3.org/TR/2dcontext/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2015/REC-2dcontext-20151119/)
- Shortname: 2dcontext

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `HTMLCanvasElement`, `HTMLImageElement`, `HTMLVideoElement`
- Missing references for WebIDL names: 
     * `Element` defined in [W3C DOM 4.1](https://w3c.github.io/dom/)
     * `MouseEvent` defined in [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
     * `MouseEventInit` defined in [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- Inconsistent references for links: 
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/), related reference "HTML" uses URL [`http://www.w3.org/TR/html5/`](http://www.w3.org/TR/html5/)
     * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/), related reference "HTML" uses URL [`http://www.w3.org/TR/html5/`](http://www.w3.org/TR/html5/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Clipboard API and events](https://w3c.github.io/clipboard-apis/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Compositing and Blending Level 1](https://drafts.fxtf.org/compositing-1/)
- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)
- [Content Security Policy: Embedded Enforcement](https://w3c.github.io/webappsec-csp/embedded/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/)
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [CSS Animations Level 1](https://drafts.csswg.org/css-animations/)
- [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/)
- [CSS Layout API Level 1](https://drafts.css-houdini.org/css-layout-api-1/)
- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/)
- [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/)
- [CSS Transitions](https://drafts.csswg.org/css-transitions/)
- [CSS Writing Modes Level 3](https://drafts.csswg.org/css-writing-modes-3/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File and Directory Entries API](https://wicg.github.io/entries-api/)
- [File API](https://w3c.github.io/FileAPI/)
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [Generic Sensor API](https://w3c.github.io/sensors/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
- [HTML 5.3](https://w3c.github.io/html/)
- [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/)
- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [Media Session Standard](https://wicg.github.io/mediasession/)
- [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- [MediaStream Recording](https://w3c.github.io/mediacapture-record/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)
- [Permissions](https://w3c.github.io/permissions/)
- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [Streams Standard](https://streams.spec.whatwg.org/)
- [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [URL Standard](https://url.spec.whatwg.org/)
- [W3C DOM 4.1](https://w3c.github.io/dom/)
- [Web Animations](https://w3c.github.io/web-animations/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web Budget API](https://wicg.github.io/budget-api/)
- [Web IDL](https://heycam.github.io/webidl/)
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- [WebUSB API](https://wicg.github.io/webusb/)
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)
- [WebXR Device API](https://immersive-web.github.io/webxr/)
- [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Informative references to this spec from:

- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/)
- [Encoding Standard](https://encoding.spec.whatwg.org/)
- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/)
- [Orientation Sensor](https://w3c.github.io/orientation-sensor/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/)


## HTML Media Capture {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/html-media-capture/)
- Editor's Draft: [https://w3c.github.io/html-media-capture/](https://w3c.github.io/html-media-capture/)
- Latest published version: [https://www.w3.org/TR/html-media-capture/](https://www.w3.org/TR/html-media-capture/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2018/REC-html-media-capture-20180201/)
- Repository: [GitHub w3c/html-media-capture](https://github.com/w3c/html-media-capture)
- Shortname: html-media-capture

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020204.981542:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5616be8c2b0c base::debug::StackTrace::StackTrace()
#1 0x5616be8db780 logging::LogMessage::~LogMessage()
#2 0x5616bd96b2b1 content::ZygoteHostImpl::Init()
#3 0x5616bd5ddc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5616bd5e3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5616c270d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5616be5fda00 content::RunNamedProcessTypeMain()
#7 0x5616be5fe2e8 content::ContentMainRunnerImpl::Run()
#8 0x5616be607f24 service_manager::Main()
#9 0x5616be5fcf14 content::ContentMain()
#10 0x5616c270c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5616c270ca42 headless::HeadlessBrowserMain()
#12 0x5616be604f9d headless::HeadlessShellMain()
#13 0x5616bcc631ac ChromeMain
#14 0x7f92dab062e1 __libc_start_main
#15 0x5616bcc6302a _start

Received signal 6
#0 0x5616be8c2b0c base::debug::StackTrace::StackTrace()
#1 0x5616be8c2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f92e0a630c0 <unknown>
#3 0x7f92dab18fff gsignal
#4 0x7f92dab1a42a abort
#5 0x5616be8c1105 base::debug::BreakDebugger()
#6 0x5616be8dbbca logging::LogMessage::~LogMessage()
#7 0x5616bd96b2b1 content::ZygoteHostImpl::Init()
#8 0x5616bd5ddc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5616bd5e3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5616c270d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5616be5fda00 content::RunNamedProcessTypeMain()
#12 0x5616be5fe2e8 content::ContentMainRunnerImpl::Run()
#13 0x5616be607f24 service_manager::Main()
#14 0x5616be5fcf14 content::ContentMain()
#15 0x5616c270c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5616c270ca42 headless::HeadlessBrowserMain()
#17 0x5616be604f9d headless::HeadlessShellMain()
#18 0x5616bcc631ac ChromeMain
#19 0x7f92dab062e1 __libc_start_main
#20 0x5616bcc6302a _start
  r8: 0000000000000000  r9: 00007ffda2a19240 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffda2a19938 r13: 0000000000000161 r14: 00007ffda2a19940 r15: 00007ffda2a194d9
  di: 0000000000000002  si: 00007ffda2a19240  bp: 00007ffda2a19480  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f92dab18fff  sp: 00007ffda2a192b8
  ip: 00007f92dab18fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020204.981542:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5616be8c2b0c base::debug::StackTrace::StackTrace()
#1 0x5616be8db780 logging::LogMessage::~LogMessage()
#2 0x5616bd96b2b1 content::ZygoteHostImpl::Init()
#3 0x5616bd5ddc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5616bd5e3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5616c270d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5616be5fda00 content::RunNamedProcessTypeMain()
#7 0x5616be5fe2e8 content::ContentMainRunnerImpl::Run()
#8 0x5616be607f24 service_manager::Main()
#9 0x5616be5fcf14 content::ContentMain()
#10 0x5616c270c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5616c270ca42 headless::HeadlessBrowserMain()
#12 0x5616be604f9d headless::HeadlessShellMain()
#13 0x5616bcc631ac ChromeMain
#14 0x7f92dab062e1 __libc_start_main
#15 0x5616bcc6302a _start

Received signal 6
#0 0x5616be8c2b0c base::debug::StackTrace::StackTrace()
#1 0x5616be8c2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f92e0a630c0 <unknown>
#3 0x7f92dab18fff gsignal
#4 0x7f92dab1a42a abort
#5 0x5616be8c1105 base::debug::BreakDebugger()
#6 0x5616be8dbbca logging::LogMessage::~LogMessage()
#7 0x5616bd96b2b1 content::ZygoteHostImpl::Init()
#8 0x5616bd5ddc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5616bd5e3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5616c270d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5616be5fda00 content::RunNamedProcessTypeMain()
#12 0x5616be5fe2e8 content::ContentMainRunnerImpl::Run()
#13 0x5616be607f24 service_manager::Main()
#14 0x5616be5fcf14 content::ContentMain()
#15 0x5616c270c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5616c270ca42 headless::HeadlessBrowserMain()
#17 0x5616be604f9d headless::HeadlessShellMain()
#18 0x5616bcc631ac ChromeMain
#19 0x7f92dab062e1 __libc_start_main
#20 0x5616bcc6302a _start
  r8: 0000000000000000  r9: 00007ffda2a19240 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffda2a19938 r13: 0000000000000161 r14: 00007ffda2a19940 r15: 00007ffda2a194d9
  di: 0000000000000002  si: 00007ffda2a19240  bp: 00007ffda2a19480  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f92dab18fff  sp: 00007ffda2a192b8
  ip: 00007f92dab18fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML 5.3](https://w3c.github.io/html/)

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

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Clipboard API and events](https://w3c.github.io/clipboard-apis/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Compositing and Blending Level 1](https://drafts.fxtf.org/compositing-1/)
- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)
- [Content Security Policy: Embedded Enforcement](https://w3c.github.io/webappsec-csp/embedded/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/)
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [CSS Animations Level 1](https://drafts.csswg.org/css-animations/)
- [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/)
- [CSS Layout API Level 1](https://drafts.css-houdini.org/css-layout-api-1/)
- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/)
- [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/)
- [CSS Transitions](https://drafts.csswg.org/css-transitions/)
- [CSS Writing Modes Level 3](https://drafts.csswg.org/css-writing-modes-3/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File and Directory Entries API](https://wicg.github.io/entries-api/)
- [File API](https://w3c.github.io/FileAPI/)
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [Generic Sensor API](https://w3c.github.io/sensors/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
- [HTML 5.3](https://w3c.github.io/html/)
- [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/)
- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [Media Session Standard](https://wicg.github.io/mediasession/)
- [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- [MediaStream Recording](https://w3c.github.io/mediacapture-record/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)
- [Permissions](https://w3c.github.io/permissions/)
- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)
- [Server-Sent Events](http://www.w3.org/TR/2015/REC-eventsource-20150203/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [Streams Standard](https://streams.spec.whatwg.org/)
- [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [URL Standard](https://url.spec.whatwg.org/)
- [W3C DOM 4.1](https://w3c.github.io/dom/)
- [Web Animations](https://w3c.github.io/web-animations/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web Budget API](https://wicg.github.io/budget-api/)
- [Web IDL](https://heycam.github.io/webidl/)
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/)
- [WebUSB API](https://wicg.github.io/webusb/)
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)
- [WebXR Device API](https://immersive-web.github.io/webxr/)
- [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)

Informative references to this spec from:

- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/)
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/)
- [Encoding Standard](https://encoding.spec.whatwg.org/)
- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/)
- [Orientation Sensor](https://w3c.github.io/orientation-sensor/)
- [W3C DOM 4.1](https://w3c.github.io/dom/)


## https://w3c.github.io/editing/contentEditable.html {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/editing/contentEditable.html)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020241.524603:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b4a3fedb0c base::debug::StackTrace::StackTrace()
#1 0x55b4a4006780 logging::LogMessage::~LogMessage()
#2 0x55b4a30962b1 content::ZygoteHostImpl::Init()
#3 0x55b4a2d08c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b4a2d0ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b4a7e389a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b4a3d28a00 content::RunNamedProcessTypeMain()
#7 0x55b4a3d292e8 content::ContentMainRunnerImpl::Run()
#8 0x55b4a3d32f24 service_manager::Main()
#9 0x55b4a3d27f14 content::ContentMain()
#10 0x55b4a7e379b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b4a7e37a42 headless::HeadlessBrowserMain()
#12 0x55b4a3d2ff9d headless::HeadlessShellMain()
#13 0x55b4a238e1ac ChromeMain
#14 0x7fc69f5302e1 __libc_start_main
#15 0x55b4a238e02a _start

Received signal 6
#0 0x55b4a3fedb0c base::debug::StackTrace::StackTrace()
#1 0x55b4a3fed671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc6a548d0c0 <unknown>
#3 0x7fc69f542fff gsignal
#4 0x7fc69f54442a abort
#5 0x55b4a3fec105 base::debug::BreakDebugger()
#6 0x55b4a4006bca logging::LogMessage::~LogMessage()
#7 0x55b4a30962b1 content::ZygoteHostImpl::Init()
#8 0x55b4a2d08c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b4a2d0ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b4a7e389a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b4a3d28a00 content::RunNamedProcessTypeMain()
#12 0x55b4a3d292e8 content::ContentMainRunnerImpl::Run()
#13 0x55b4a3d32f24 service_manager::Main()
#14 0x55b4a3d27f14 content::ContentMain()
#15 0x55b4a7e379b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b4a7e37a42 headless::HeadlessBrowserMain()
#17 0x55b4a3d2ff9d headless::HeadlessShellMain()
#18 0x55b4a238e1ac ChromeMain
#19 0x7fc69f5302e1 __libc_start_main
#20 0x55b4a238e02a _start
  r8: 0000000000000000  r9: 00007fffea88a4e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffea88abd8 r13: 0000000000000161 r14: 00007fffea88abe0 r15: 00007fffea88a779
  di: 0000000000000002  si: 00007fffea88a4e0  bp: 00007fffea88a720  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc69f542fff  sp: 00007fffea88a558
  ip: 00007fc69f542fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020241.524603:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b4a3fedb0c base::debug::StackTrace::StackTrace()
#1 0x55b4a4006780 logging::LogMessage::~LogMessage()
#2 0x55b4a30962b1 content::ZygoteHostImpl::Init()
#3 0x55b4a2d08c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b4a2d0ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b4a7e389a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b4a3d28a00 content::RunNamedProcessTypeMain()
#7 0x55b4a3d292e8 content::ContentMainRunnerImpl::Run()
#8 0x55b4a3d32f24 service_manager::Main()
#9 0x55b4a3d27f14 content::ContentMain()
#10 0x55b4a7e379b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b4a7e37a42 headless::HeadlessBrowserMain()
#12 0x55b4a3d2ff9d headless::HeadlessShellMain()
#13 0x55b4a238e1ac ChromeMain
#14 0x7fc69f5302e1 __libc_start_main
#15 0x55b4a238e02a _start

Received signal 6
#0 0x55b4a3fedb0c base::debug::StackTrace::StackTrace()
#1 0x55b4a3fed671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc6a548d0c0 <unknown>
#3 0x7fc69f542fff gsignal
#4 0x7fc69f54442a abort
#5 0x55b4a3fec105 base::debug::BreakDebugger()
#6 0x55b4a4006bca logging::LogMessage::~LogMessage()
#7 0x55b4a30962b1 content::ZygoteHostImpl::Init()
#8 0x55b4a2d08c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b4a2d0ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b4a7e389a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b4a3d28a00 content::RunNamedProcessTypeMain()
#12 0x55b4a3d292e8 content::ContentMainRunnerImpl::Run()
#13 0x55b4a3d32f24 service_manager::Main()
#14 0x55b4a3d27f14 content::ContentMain()
#15 0x55b4a7e379b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b4a7e37a42 headless::HeadlessBrowserMain()
#17 0x55b4a3d2ff9d headless::HeadlessShellMain()
#18 0x55b4a238e1ac ChromeMain
#19 0x7fc69f5302e1 __libc_start_main
#20 0x55b4a238e02a _start
  r8: 0000000000000000  r9: 00007fffea88a4e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffea88abd8 r13: 0000000000000161 r14: 00007fffea88abe0 r15: 00007fffea88a779
  di: 0000000000000002  si: 00007fffea88a4e0  bp: 00007fffea88a720  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc69f542fff  sp: 00007fffea88a558
  ip: 00007fc69f542fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## https://w3c.github.io/web-nfc/ {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/web-nfc/)
- Repository: [GitHub w3c/web-nfc](https://github.com/w3c/web-nfc)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at ChildProcess.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:245:60)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## https://wicg.github.io/aom/spec/ {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/aom/spec/)
- Repository: [GitHub wicg/aom](https://github.com/wicg/aom)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020254.679587:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561f5e8f2b0c base::debug::StackTrace::StackTrace()
#1 0x561f5e90b780 logging::LogMessage::~LogMessage()
#2 0x561f5d99b2b1 content::ZygoteHostImpl::Init()
#3 0x561f5d60dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561f5d613a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x561f6273d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x561f5e62da00 content::RunNamedProcessTypeMain()
#7 0x561f5e62e2e8 content::ContentMainRunnerImpl::Run()
#8 0x561f5e637f24 service_manager::Main()
#9 0x561f5e62cf14 content::ContentMain()
#10 0x561f6273c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x561f6273ca42 headless::HeadlessBrowserMain()
#12 0x561f5e634f9d headless::HeadlessShellMain()
#13 0x561f5cc931ac ChromeMain
#14 0x7fc20704b2e1 __libc_start_main
#15 0x561f5cc9302a _start

Received signal 6
#0 0x561f5e8f2b0c base::debug::StackTrace::StackTrace()
#1 0x561f5e8f2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc20cfa80c0 <unknown>
#3 0x7fc20705dfff gsignal
#4 0x7fc20705f42a abort
#5 0x561f5e8f1105 base::debug::BreakDebugger()
#6 0x561f5e90bbca logging::LogMessage::~LogMessage()
#7 0x561f5d99b2b1 content::ZygoteHostImpl::Init()
#8 0x561f5d60dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561f5d613a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x561f6273d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x561f5e62da00 content::RunNamedProcessTypeMain()
#12 0x561f5e62e2e8 content::ContentMainRunnerImpl::Run()
#13 0x561f5e637f24 service_manager::Main()
#14 0x561f5e62cf14 content::ContentMain()
#15 0x561f6273c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x561f6273ca42 headless::HeadlessBrowserMain()
#17 0x561f5e634f9d headless::HeadlessShellMain()
#18 0x561f5cc931ac ChromeMain
#19 0x7fc20704b2e1 __libc_start_main
#20 0x561f5cc9302a _start
  r8: 0000000000000000  r9: 00007ffca1595520 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffca1595c18 r13: 0000000000000161 r14: 00007ffca1595c20 r15: 00007ffca15957b9
  di: 0000000000000002  si: 00007ffca1595520  bp: 00007ffca1595760  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc20705dfff  sp: 00007ffca1595598
  ip: 00007fc20705dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020254.679587:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561f5e8f2b0c base::debug::StackTrace::StackTrace()
#1 0x561f5e90b780 logging::LogMessage::~LogMessage()
#2 0x561f5d99b2b1 content::ZygoteHostImpl::Init()
#3 0x561f5d60dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561f5d613a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x561f6273d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x561f5e62da00 content::RunNamedProcessTypeMain()
#7 0x561f5e62e2e8 content::ContentMainRunnerImpl::Run()
#8 0x561f5e637f24 service_manager::Main()
#9 0x561f5e62cf14 content::ContentMain()
#10 0x561f6273c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x561f6273ca42 headless::HeadlessBrowserMain()
#12 0x561f5e634f9d headless::HeadlessShellMain()
#13 0x561f5cc931ac ChromeMain
#14 0x7fc20704b2e1 __libc_start_main
#15 0x561f5cc9302a _start

Received signal 6
#0 0x561f5e8f2b0c base::debug::StackTrace::StackTrace()
#1 0x561f5e8f2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc20cfa80c0 <unknown>
#3 0x7fc20705dfff gsignal
#4 0x7fc20705f42a abort
#5 0x561f5e8f1105 base::debug::BreakDebugger()
#6 0x561f5e90bbca logging::LogMessage::~LogMessage()
#7 0x561f5d99b2b1 content::ZygoteHostImpl::Init()
#8 0x561f5d60dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561f5d613a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x561f6273d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x561f5e62da00 content::RunNamedProcessTypeMain()
#12 0x561f5e62e2e8 content::ContentMainRunnerImpl::Run()
#13 0x561f5e637f24 service_manager::Main()
#14 0x561f5e62cf14 content::ContentMain()
#15 0x561f6273c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x561f6273ca42 headless::HeadlessBrowserMain()
#17 0x561f5e634f9d headless::HeadlessShellMain()
#18 0x561f5cc931ac ChromeMain
#19 0x7fc20704b2e1 __libc_start_main
#20 0x561f5cc9302a _start
  r8: 0000000000000000  r9: 00007ffca1595520 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffca1595c18 r13: 0000000000000161 r14: 00007ffca1595c20 r15: 00007ffca15957b9
  di: 0000000000000002  si: 00007ffca1595520  bp: 00007ffca1595760  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc20705dfff  sp: 00007ffca1595598
  ip: 00007fc20705dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## https://wicg.github.io/InputDeviceCapabilities/ {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/InputDeviceCapabilities/)
- Repository: [GitHub wicg/InputDeviceCapabilities](https://github.com/wicg/InputDeviceCapabilities)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020257.512023:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56143a797b0c base::debug::StackTrace::StackTrace()
#1 0x56143a7b0780 logging::LogMessage::~LogMessage()
#2 0x5614398402b1 content::ZygoteHostImpl::Init()
#3 0x5614394b2c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5614394b8a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56143e5e29a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56143a4d2a00 content::RunNamedProcessTypeMain()
#7 0x56143a4d32e8 content::ContentMainRunnerImpl::Run()
#8 0x56143a4dcf24 service_manager::Main()
#9 0x56143a4d1f14 content::ContentMain()
#10 0x56143e5e19b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56143e5e1a42 headless::HeadlessBrowserMain()
#12 0x56143a4d9f9d headless::HeadlessShellMain()
#13 0x561438b381ac ChromeMain
#14 0x7f84669462e1 __libc_start_main
#15 0x561438b3802a _start

Received signal 6
#0 0x56143a797b0c base::debug::StackTrace::StackTrace()
#1 0x56143a797671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f846c8a30c0 <unknown>
#3 0x7f8466958fff gsignal
#4 0x7f846695a42a abort
#5 0x56143a796105 base::debug::BreakDebugger()
#6 0x56143a7b0bca logging::LogMessage::~LogMessage()
#7 0x5614398402b1 content::ZygoteHostImpl::Init()
#8 0x5614394b2c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5614394b8a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56143e5e29a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56143a4d2a00 content::RunNamedProcessTypeMain()
#12 0x56143a4d32e8 content::ContentMainRunnerImpl::Run()
#13 0x56143a4dcf24 service_manager::Main()
#14 0x56143a4d1f14 content::ContentMain()
#15 0x56143e5e19b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56143e5e1a42 headless::HeadlessBrowserMain()
#17 0x56143a4d9f9d headless::HeadlessShellMain()
#18 0x561438b381ac ChromeMain
#19 0x7f84669462e1 __libc_start_main
#20 0x561438b3802a _start
  r8: 0000000000000000  r9: 00007ffc04b2e8b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc04b2efa8 r13: 0000000000000161 r14: 00007ffc04b2efb0 r15: 00007ffc04b2eb49
  di: 0000000000000002  si: 00007ffc04b2e8b0  bp: 00007ffc04b2eaf0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f8466958fff  sp: 00007ffc04b2e928
  ip: 00007f8466958fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020257.512023:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56143a797b0c base::debug::StackTrace::StackTrace()
#1 0x56143a7b0780 logging::LogMessage::~LogMessage()
#2 0x5614398402b1 content::ZygoteHostImpl::Init()
#3 0x5614394b2c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5614394b8a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56143e5e29a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56143a4d2a00 content::RunNamedProcessTypeMain()
#7 0x56143a4d32e8 content::ContentMainRunnerImpl::Run()
#8 0x56143a4dcf24 service_manager::Main()
#9 0x56143a4d1f14 content::ContentMain()
#10 0x56143e5e19b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56143e5e1a42 headless::HeadlessBrowserMain()
#12 0x56143a4d9f9d headless::HeadlessShellMain()
#13 0x561438b381ac ChromeMain
#14 0x7f84669462e1 __libc_start_main
#15 0x561438b3802a _start

Received signal 6
#0 0x56143a797b0c base::debug::StackTrace::StackTrace()
#1 0x56143a797671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f846c8a30c0 <unknown>
#3 0x7f8466958fff gsignal
#4 0x7f846695a42a abort
#5 0x56143a796105 base::debug::BreakDebugger()
#6 0x56143a7b0bca logging::LogMessage::~LogMessage()
#7 0x5614398402b1 content::ZygoteHostImpl::Init()
#8 0x5614394b2c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5614394b8a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56143e5e29a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56143a4d2a00 content::RunNamedProcessTypeMain()
#12 0x56143a4d32e8 content::ContentMainRunnerImpl::Run()
#13 0x56143a4dcf24 service_manager::Main()
#14 0x56143a4d1f14 content::ContentMain()
#15 0x56143e5e19b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56143e5e1a42 headless::HeadlessBrowserMain()
#17 0x56143a4d9f9d headless::HeadlessShellMain()
#18 0x561438b381ac ChromeMain
#19 0x7f84669462e1 __libc_start_main
#20 0x561438b3802a _start
  r8: 0000000000000000  r9: 00007ffc04b2e8b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc04b2efa8 r13: 0000000000000161 r14: 00007ffc04b2efb0 r15: 00007ffc04b2eb49
  di: 0000000000000002  si: 00007ffc04b2e8b0  bp: 00007ffc04b2eaf0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f8466958fff  sp: 00007ffc04b2e928
  ip: 00007f8466958fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## https://wicg.github.io/netinfo/ {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/netinfo/)
- Repository: [GitHub wicg/netinfo](https://github.com/wicg/netinfo)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020257.570159:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55c0e32cbb0c base::debug::StackTrace::StackTrace()
#1 0x55c0e32e4780 logging::LogMessage::~LogMessage()
#2 0x55c0e23742b1 content::ZygoteHostImpl::Init()
#3 0x55c0e1fe6c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55c0e1feca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55c0e71169a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55c0e3006a00 content::RunNamedProcessTypeMain()
#7 0x55c0e30072e8 content::ContentMainRunnerImpl::Run()
#8 0x55c0e3010f24 service_manager::Main()
#9 0x55c0e3005f14 content::ContentMain()
#10 0x55c0e71159b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55c0e7115a42 headless::HeadlessBrowserMain()
#12 0x55c0e300df9d headless::HeadlessShellMain()
#13 0x55c0e166c1ac ChromeMain
#14 0x7f85a6b272e1 __libc_start_main
#15 0x55c0e166c02a _start

Received signal 6
#0 0x55c0e32cbb0c base::debug::StackTrace::StackTrace()
#1 0x55c0e32cb671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f85aca840c0 <unknown>
#3 0x7f85a6b39fff gsignal
#4 0x7f85a6b3b42a abort
#5 0x55c0e32ca105 base::debug::BreakDebugger()
#6 0x55c0e32e4bca logging::LogMessage::~LogMessage()
#7 0x55c0e23742b1 content::ZygoteHostImpl::Init()
#8 0x55c0e1fe6c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55c0e1feca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55c0e71169a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55c0e3006a00 content::RunNamedProcessTypeMain()
#12 0x55c0e30072e8 content::ContentMainRunnerImpl::Run()
#13 0x55c0e3010f24 service_manager::Main()
#14 0x55c0e3005f14 content::ContentMain()
#15 0x55c0e71159b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55c0e7115a42 headless::HeadlessBrowserMain()
#17 0x55c0e300df9d headless::HeadlessShellMain()
#18 0x55c0e166c1ac ChromeMain
#19 0x7f85a6b272e1 __libc_start_main
#20 0x55c0e166c02a _start
  r8: 0000000000000000  r9: 00007fff0f255ec0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff0f2565b8 r13: 0000000000000161 r14: 00007fff0f2565c0 r15: 00007fff0f256159
  di: 0000000000000002  si: 00007fff0f255ec0  bp: 00007fff0f256100  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f85a6b39fff  sp: 00007fff0f255f38
  ip: 00007f85a6b39fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020257.570159:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55c0e32cbb0c base::debug::StackTrace::StackTrace()
#1 0x55c0e32e4780 logging::LogMessage::~LogMessage()
#2 0x55c0e23742b1 content::ZygoteHostImpl::Init()
#3 0x55c0e1fe6c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55c0e1feca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55c0e71169a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55c0e3006a00 content::RunNamedProcessTypeMain()
#7 0x55c0e30072e8 content::ContentMainRunnerImpl::Run()
#8 0x55c0e3010f24 service_manager::Main()
#9 0x55c0e3005f14 content::ContentMain()
#10 0x55c0e71159b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55c0e7115a42 headless::HeadlessBrowserMain()
#12 0x55c0e300df9d headless::HeadlessShellMain()
#13 0x55c0e166c1ac ChromeMain
#14 0x7f85a6b272e1 __libc_start_main
#15 0x55c0e166c02a _start

Received signal 6
#0 0x55c0e32cbb0c base::debug::StackTrace::StackTrace()
#1 0x55c0e32cb671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f85aca840c0 <unknown>
#3 0x7f85a6b39fff gsignal
#4 0x7f85a6b3b42a abort
#5 0x55c0e32ca105 base::debug::BreakDebugger()
#6 0x55c0e32e4bca logging::LogMessage::~LogMessage()
#7 0x55c0e23742b1 content::ZygoteHostImpl::Init()
#8 0x55c0e1fe6c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55c0e1feca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55c0e71169a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55c0e3006a00 content::RunNamedProcessTypeMain()
#12 0x55c0e30072e8 content::ContentMainRunnerImpl::Run()
#13 0x55c0e3010f24 service_manager::Main()
#14 0x55c0e3005f14 content::ContentMain()
#15 0x55c0e71159b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55c0e7115a42 headless::HeadlessBrowserMain()
#17 0x55c0e300df9d headless::HeadlessShellMain()
#18 0x55c0e166c1ac ChromeMain
#19 0x7f85a6b272e1 __libc_start_main
#20 0x55c0e166c02a _start
  r8: 0000000000000000  r9: 00007fff0f255ec0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff0f2565b8 r13: 0000000000000161 r14: 00007fff0f2565c0 r15: 00007fff0f256159
  di: 0000000000000002  si: 00007fff0f255ec0  bp: 00007fff0f256100  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f85a6b39fff  sp: 00007fff0f255f38
  ip: 00007f85a6b39fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## https://wicg.github.io/web-share/ {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/web-share/)
- Repository: [GitHub wicg/web-share](https://github.com/wicg/web-share)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020301.656870:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56014eb46b0c base::debug::StackTrace::StackTrace()
#1 0x56014eb5f780 logging::LogMessage::~LogMessage()
#2 0x56014dbef2b1 content::ZygoteHostImpl::Init()
#3 0x56014d861c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56014d867a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5601529919a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56014e881a00 content::RunNamedProcessTypeMain()
#7 0x56014e8822e8 content::ContentMainRunnerImpl::Run()
#8 0x56014e88bf24 service_manager::Main()
#9 0x56014e880f14 content::ContentMain()
#10 0x5601529909b9 headless::(anonymous namespace)::RunContentMain()
#11 0x560152990a42 headless::HeadlessBrowserMain()
#12 0x56014e888f9d headless::HeadlessShellMain()
#13 0x56014cee71ac ChromeMain
#14 0x7fa580c6f2e1 __libc_start_main
#15 0x56014cee702a _start

Received signal 6
#0 0x56014eb46b0c base::debug::StackTrace::StackTrace()
#1 0x56014eb46671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fa586bcc0c0 <unknown>
#3 0x7fa580c81fff gsignal
#4 0x7fa580c8342a abort
#5 0x56014eb45105 base::debug::BreakDebugger()
#6 0x56014eb5fbca logging::LogMessage::~LogMessage()
#7 0x56014dbef2b1 content::ZygoteHostImpl::Init()
#8 0x56014d861c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56014d867a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5601529919a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56014e881a00 content::RunNamedProcessTypeMain()
#12 0x56014e8822e8 content::ContentMainRunnerImpl::Run()
#13 0x56014e88bf24 service_manager::Main()
#14 0x56014e880f14 content::ContentMain()
#15 0x5601529909b9 headless::(anonymous namespace)::RunContentMain()
#16 0x560152990a42 headless::HeadlessBrowserMain()
#17 0x56014e888f9d headless::HeadlessShellMain()
#18 0x56014cee71ac ChromeMain
#19 0x7fa580c6f2e1 __libc_start_main
#20 0x56014cee702a _start
  r8: 0000000000000000  r9: 00007ffce7673520 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffce7673c18 r13: 0000000000000161 r14: 00007ffce7673c20 r15: 00007ffce76737b9
  di: 0000000000000002  si: 00007ffce7673520  bp: 00007ffce7673760  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fa580c81fff  sp: 00007ffce7673598
  ip: 00007fa580c81fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020301.656870:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56014eb46b0c base::debug::StackTrace::StackTrace()
#1 0x56014eb5f780 logging::LogMessage::~LogMessage()
#2 0x56014dbef2b1 content::ZygoteHostImpl::Init()
#3 0x56014d861c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56014d867a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5601529919a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56014e881a00 content::RunNamedProcessTypeMain()
#7 0x56014e8822e8 content::ContentMainRunnerImpl::Run()
#8 0x56014e88bf24 service_manager::Main()
#9 0x56014e880f14 content::ContentMain()
#10 0x5601529909b9 headless::(anonymous namespace)::RunContentMain()
#11 0x560152990a42 headless::HeadlessBrowserMain()
#12 0x56014e888f9d headless::HeadlessShellMain()
#13 0x56014cee71ac ChromeMain
#14 0x7fa580c6f2e1 __libc_start_main
#15 0x56014cee702a _start

Received signal 6
#0 0x56014eb46b0c base::debug::StackTrace::StackTrace()
#1 0x56014eb46671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fa586bcc0c0 <unknown>
#3 0x7fa580c81fff gsignal
#4 0x7fa580c8342a abort
#5 0x56014eb45105 base::debug::BreakDebugger()
#6 0x56014eb5fbca logging::LogMessage::~LogMessage()
#7 0x56014dbef2b1 content::ZygoteHostImpl::Init()
#8 0x56014d861c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56014d867a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5601529919a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56014e881a00 content::RunNamedProcessTypeMain()
#12 0x56014e8822e8 content::ContentMainRunnerImpl::Run()
#13 0x56014e88bf24 service_manager::Main()
#14 0x56014e880f14 content::ContentMain()
#15 0x5601529909b9 headless::(anonymous namespace)::RunContentMain()
#16 0x560152990a42 headless::HeadlessBrowserMain()
#17 0x56014e888f9d headless::HeadlessShellMain()
#18 0x56014cee71ac ChromeMain
#19 0x7fa580c6f2e1 __libc_start_main
#20 0x56014cee702a _start
  r8: 0000000000000000  r9: 00007ffce7673520 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffce7673c18 r13: 0000000000000161 r14: 00007ffce7673c20 r15: 00007ffce76737b9
  di: 0000000000000002  si: 00007ffce7673520  bp: 00007ffce7673760  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fa580c81fff  sp: 00007ffce7673598
  ip: 00007fa580c81fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Identifiers for WebRTC's Statistics API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webrtc-stats/)
- Editor's Draft: [https://w3c.github.io/webrtc-stats/](https://w3c.github.io/webrtc-stats/)
- Latest published version: [https://www.w3.org/TR/webrtc-stats/](https://www.w3.org/TR/webrtc-stats/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-webrtc-stats-20180328/)
- Repository: [GitHub w3c/webrtc-stats](https://github.com/w3c/webrtc-stats)
- Shortname: webrtc-stats

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020231.022334:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55fdbaebcb0c base::debug::StackTrace::StackTrace()
#1 0x55fdbaed5780 logging::LogMessage::~LogMessage()
#2 0x55fdb9f652b1 content::ZygoteHostImpl::Init()
#3 0x55fdb9bd7c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55fdb9bdda69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55fdbed079a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55fdbabf7a00 content::RunNamedProcessTypeMain()
#7 0x55fdbabf82e8 content::ContentMainRunnerImpl::Run()
#8 0x55fdbac01f24 service_manager::Main()
#9 0x55fdbabf6f14 content::ContentMain()
#10 0x55fdbed069b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55fdbed06a42 headless::HeadlessBrowserMain()
#12 0x55fdbabfef9d headless::HeadlessShellMain()
#13 0x55fdb925d1ac ChromeMain
#14 0x7fb7f785a2e1 __libc_start_main
#15 0x55fdb925d02a _start

Received signal 6
#0 0x55fdbaebcb0c base::debug::StackTrace::StackTrace()
#1 0x55fdbaebc671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb7fd7b70c0 <unknown>
#3 0x7fb7f786cfff gsignal
#4 0x7fb7f786e42a abort
#5 0x55fdbaebb105 base::debug::BreakDebugger()
#6 0x55fdbaed5bca logging::LogMessage::~LogMessage()
#7 0x55fdb9f652b1 content::ZygoteHostImpl::Init()
#8 0x55fdb9bd7c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55fdb9bdda69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55fdbed079a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55fdbabf7a00 content::RunNamedProcessTypeMain()
#12 0x55fdbabf82e8 content::ContentMainRunnerImpl::Run()
#13 0x55fdbac01f24 service_manager::Main()
#14 0x55fdbabf6f14 content::ContentMain()
#15 0x55fdbed069b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55fdbed06a42 headless::HeadlessBrowserMain()
#17 0x55fdbabfef9d headless::HeadlessShellMain()
#18 0x55fdb925d1ac ChromeMain
#19 0x7fb7f785a2e1 __libc_start_main
#20 0x55fdb925d02a _start
  r8: 0000000000000000  r9: 00007fff05b74630 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff05b74d28 r13: 0000000000000161 r14: 00007fff05b74d30 r15: 00007fff05b748c9
  di: 0000000000000002  si: 00007fff05b74630  bp: 00007fff05b74870  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb7f786cfff  sp: 00007fff05b746a8
  ip: 00007fb7f786cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020231.022334:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55fdbaebcb0c base::debug::StackTrace::StackTrace()
#1 0x55fdbaed5780 logging::LogMessage::~LogMessage()
#2 0x55fdb9f652b1 content::ZygoteHostImpl::Init()
#3 0x55fdb9bd7c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55fdb9bdda69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55fdbed079a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55fdbabf7a00 content::RunNamedProcessTypeMain()
#7 0x55fdbabf82e8 content::ContentMainRunnerImpl::Run()
#8 0x55fdbac01f24 service_manager::Main()
#9 0x55fdbabf6f14 content::ContentMain()
#10 0x55fdbed069b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55fdbed06a42 headless::HeadlessBrowserMain()
#12 0x55fdbabfef9d headless::HeadlessShellMain()
#13 0x55fdb925d1ac ChromeMain
#14 0x7fb7f785a2e1 __libc_start_main
#15 0x55fdb925d02a _start

Received signal 6
#0 0x55fdbaebcb0c base::debug::StackTrace::StackTrace()
#1 0x55fdbaebc671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb7fd7b70c0 <unknown>
#3 0x7fb7f786cfff gsignal
#4 0x7fb7f786e42a abort
#5 0x55fdbaebb105 base::debug::BreakDebugger()
#6 0x55fdbaed5bca logging::LogMessage::~LogMessage()
#7 0x55fdb9f652b1 content::ZygoteHostImpl::Init()
#8 0x55fdb9bd7c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55fdb9bdda69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55fdbed079a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55fdbabf7a00 content::RunNamedProcessTypeMain()
#12 0x55fdbabf82e8 content::ContentMainRunnerImpl::Run()
#13 0x55fdbac01f24 service_manager::Main()
#14 0x55fdbabf6f14 content::ContentMain()
#15 0x55fdbed069b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55fdbed06a42 headless::HeadlessBrowserMain()
#17 0x55fdbabfef9d headless::HeadlessShellMain()
#18 0x55fdb925d1ac ChromeMain
#19 0x7fb7f785a2e1 __libc_start_main
#20 0x55fdb925d02a _start
  r8: 0000000000000000  r9: 00007fff05b74630 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff05b74d28 r13: 0000000000000161 r14: 00007fff05b74d30 r15: 00007fff05b748c9
  di: 0000000000000002  si: 00007fff05b74630  bp: 00007fff05b74870  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb7f786cfff  sp: 00007fff05b746a8
  ip: 00007fb7f786cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Indexed Database API 3.0 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/IndexedDB/) (8 May 2018)
- Editor's Draft: [https://w3c.github.io/IndexedDB/](https://w3c.github.io/IndexedDB/)
- Latest published version: [https://www.w3.org/TR/IndexedDB-2/](https://www.w3.org/TR/IndexedDB-2/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2018/REC-IndexedDB-2-20180130/)
- Repository: [GitHub w3c/IndexedDB](https://github.com/w3c/IndexedDB)
- Shortname: IndexedDB-2

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMStringList`, `EventHandler`, `Window`, `WindowOrWorkerGlobalScope`
- Inconsistent references for links: 
     * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/), related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML 5.3](https://w3c.github.io/html/)

Informative references to this spec from:

- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)
- [W3C DOM 4.1](https://w3c.github.io/dom/)
- [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html)


## Input Events Level 1 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://rawgit.com/w3c/input-events/v1/index.html)
- Editor's Draft: [https://rawgit.com/w3c/input-events/v1/index.html](https://rawgit.com/w3c/input-events/v1/index.html)
- Latest published version: [https://www.w3.org/TR/input-events-1/](https://www.w3.org/TR/input-events-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-input-events-1-20170905/)
- Repository: [GitHub w3c/input-events](https://github.com/w3c/input-events)
- Shortname: input-events-2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020206.834981:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556d2c1f2b0c base::debug::StackTrace::StackTrace()
#1 0x556d2c20b780 logging::LogMessage::~LogMessage()
#2 0x556d2b29b2b1 content::ZygoteHostImpl::Init()
#3 0x556d2af0dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556d2af13a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556d3003d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556d2bf2da00 content::RunNamedProcessTypeMain()
#7 0x556d2bf2e2e8 content::ContentMainRunnerImpl::Run()
#8 0x556d2bf37f24 service_manager::Main()
#9 0x556d2bf2cf14 content::ContentMain()
#10 0x556d3003c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556d3003ca42 headless::HeadlessBrowserMain()
#12 0x556d2bf34f9d headless::HeadlessShellMain()
#13 0x556d2a5931ac ChromeMain
#14 0x7fdd81ee42e1 __libc_start_main
#15 0x556d2a59302a _start

Received signal 6
#0 0x556d2c1f2b0c base::debug::StackTrace::StackTrace()
#1 0x556d2c1f2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fdd87e410c0 <unknown>
#3 0x7fdd81ef6fff gsignal
#4 0x7fdd81ef842a abort
#5 0x556d2c1f1105 base::debug::BreakDebugger()
#6 0x556d2c20bbca logging::LogMessage::~LogMessage()
#7 0x556d2b29b2b1 content::ZygoteHostImpl::Init()
#8 0x556d2af0dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556d2af13a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556d3003d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556d2bf2da00 content::RunNamedProcessTypeMain()
#12 0x556d2bf2e2e8 content::ContentMainRunnerImpl::Run()
#13 0x556d2bf37f24 service_manager::Main()
#14 0x556d2bf2cf14 content::ContentMain()
#15 0x556d3003c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556d3003ca42 headless::HeadlessBrowserMain()
#17 0x556d2bf34f9d headless::HeadlessShellMain()
#18 0x556d2a5931ac ChromeMain
#19 0x7fdd81ee42e1 __libc_start_main
#20 0x556d2a59302a _start
  r8: 0000000000000000  r9: 00007ffddca2d5c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffddca2dcb8 r13: 0000000000000161 r14: 00007ffddca2dcc0 r15: 00007ffddca2d859
  di: 0000000000000002  si: 00007ffddca2d5c0  bp: 00007ffddca2d800  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fdd81ef6fff  sp: 00007ffddca2d638
  ip: 00007fdd81ef6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020206.834981:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556d2c1f2b0c base::debug::StackTrace::StackTrace()
#1 0x556d2c20b780 logging::LogMessage::~LogMessage()
#2 0x556d2b29b2b1 content::ZygoteHostImpl::Init()
#3 0x556d2af0dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556d2af13a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556d3003d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556d2bf2da00 content::RunNamedProcessTypeMain()
#7 0x556d2bf2e2e8 content::ContentMainRunnerImpl::Run()
#8 0x556d2bf37f24 service_manager::Main()
#9 0x556d2bf2cf14 content::ContentMain()
#10 0x556d3003c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556d3003ca42 headless::HeadlessBrowserMain()
#12 0x556d2bf34f9d headless::HeadlessShellMain()
#13 0x556d2a5931ac ChromeMain
#14 0x7fdd81ee42e1 __libc_start_main
#15 0x556d2a59302a _start

Received signal 6
#0 0x556d2c1f2b0c base::debug::StackTrace::StackTrace()
#1 0x556d2c1f2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fdd87e410c0 <unknown>
#3 0x7fdd81ef6fff gsignal
#4 0x7fdd81ef842a abort
#5 0x556d2c1f1105 base::debug::BreakDebugger()
#6 0x556d2c20bbca logging::LogMessage::~LogMessage()
#7 0x556d2b29b2b1 content::ZygoteHostImpl::Init()
#8 0x556d2af0dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556d2af13a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556d3003d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556d2bf2da00 content::RunNamedProcessTypeMain()
#12 0x556d2bf2e2e8 content::ContentMainRunnerImpl::Run()
#13 0x556d2bf37f24 service_manager::Main()
#14 0x556d2bf2cf14 content::ContentMain()
#15 0x556d3003c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556d3003ca42 headless::HeadlessBrowserMain()
#17 0x556d2bf34f9d headless::HeadlessShellMain()
#18 0x556d2a5931ac ChromeMain
#19 0x7fdd81ee42e1 __libc_start_main
#20 0x556d2a59302a _start
  r8: 0000000000000000  r9: 00007ffddca2d5c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffddca2dcb8 r13: 0000000000000161 r14: 00007ffddca2dcc0 r15: 00007ffddca2d859
  di: 0000000000000002  si: 00007ffddca2d5c0  bp: 00007ffddca2d800  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fdd81ef6fff  sp: 00007ffddca2d638
  ip: 00007fdd81ef6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Intersection Observer {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/IntersectionObserver/) (26 March 2018)
- Editor's Draft: [https://w3c.github.io/IntersectionObserver/](https://w3c.github.io/IntersectionObserver/)
- Latest published version: [https://www.w3.org/TR/intersection-observer/](https://www.w3.org/TR/intersection-observer/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-intersection-observer-20170914/)
- Repository: [GitHub w3c/IntersectionObserver](https://github.com/w3c/IntersectionObserver)
- Shortname: intersection-observer

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMHighResTimeStamp`, `Window`
- Missing references for links: 
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/)
     * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/)
     * [`https://www.w3.org/TR/css-masking-1/`](https://www.w3.org/TR/css-masking-1/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Keyboard Lock {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/keyboard-lock/) (9 May 2018)
- Repository: [GitHub w3c/keyboard-lock](https://github.com/w3c/keyboard-lock)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Navigator`, `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Long Tasks API 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/longtasks/) (9 January 2018)
- Editor's Draft: [https://w3c.github.io/longtasks/](https://w3c.github.io/longtasks/)
- Latest published version: [https://www.w3.org/TR/longtasks-1/](https://www.w3.org/TR/longtasks-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-longtasks-1-20170907/)
- Repository: [GitHub w3c/longtasks](https://github.com/w3c/longtasks)
- Shortname: longtasks-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `PerformanceEntry`
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

- Crawled version: [Editor's Draft](https://w3c.github.io/magnetometer/) (15 March 2018)
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

- [Orientation Sensor](https://w3c.github.io/orientation-sensor/)

Informative references to this spec from:

- [Permissions](https://w3c.github.io/permissions/)


## Media Capabilities {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/media-capabilities/) (3 May 2018)
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


## Media Capture and Streams {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-main/)
- Editor's Draft: [https://w3c.github.io/mediacapture-main/](https://w3c.github.io/mediacapture-main/)
- Latest published version: [https://www.w3.org/TR/mediacapture-streams/](https://www.w3.org/TR/mediacapture-streams/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-mediacapture-streams-20171003/)
- Repository: [GitHub w3c/mediacapture-main](https://github.com/w3c/mediacapture-main)
- Shortname: mediacapture-streams

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020215.653148:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558678e7bb0c base::debug::StackTrace::StackTrace()
#1 0x558678e94780 logging::LogMessage::~LogMessage()
#2 0x558677f242b1 content::ZygoteHostImpl::Init()
#3 0x558677b96c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558677b9ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55867ccc69a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558678bb6a00 content::RunNamedProcessTypeMain()
#7 0x558678bb72e8 content::ContentMainRunnerImpl::Run()
#8 0x558678bc0f24 service_manager::Main()
#9 0x558678bb5f14 content::ContentMain()
#10 0x55867ccc59b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55867ccc5a42 headless::HeadlessBrowserMain()
#12 0x558678bbdf9d headless::HeadlessShellMain()
#13 0x55867721c1ac ChromeMain
#14 0x7fbd6e4332e1 __libc_start_main
#15 0x55867721c02a _start

Received signal 6
#0 0x558678e7bb0c base::debug::StackTrace::StackTrace()
#1 0x558678e7b671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fbd743900c0 <unknown>
#3 0x7fbd6e445fff gsignal
#4 0x7fbd6e44742a abort
#5 0x558678e7a105 base::debug::BreakDebugger()
#6 0x558678e94bca logging::LogMessage::~LogMessage()
#7 0x558677f242b1 content::ZygoteHostImpl::Init()
#8 0x558677b96c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558677b9ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55867ccc69a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558678bb6a00 content::RunNamedProcessTypeMain()
#12 0x558678bb72e8 content::ContentMainRunnerImpl::Run()
#13 0x558678bc0f24 service_manager::Main()
#14 0x558678bb5f14 content::ContentMain()
#15 0x55867ccc59b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55867ccc5a42 headless::HeadlessBrowserMain()
#17 0x558678bbdf9d headless::HeadlessShellMain()
#18 0x55867721c1ac ChromeMain
#19 0x7fbd6e4332e1 __libc_start_main
#20 0x55867721c02a _start
  r8: 0000000000000000  r9: 00007ffffb9d7060 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffffb9d7758 r13: 0000000000000161 r14: 00007ffffb9d7760 r15: 00007ffffb9d72f9
  di: 0000000000000002  si: 00007ffffb9d7060  bp: 00007ffffb9d72a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fbd6e445fff  sp: 00007ffffb9d70d8
  ip: 00007fbd6e445fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020215.653148:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558678e7bb0c base::debug::StackTrace::StackTrace()
#1 0x558678e94780 logging::LogMessage::~LogMessage()
#2 0x558677f242b1 content::ZygoteHostImpl::Init()
#3 0x558677b96c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558677b9ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55867ccc69a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558678bb6a00 content::RunNamedProcessTypeMain()
#7 0x558678bb72e8 content::ContentMainRunnerImpl::Run()
#8 0x558678bc0f24 service_manager::Main()
#9 0x558678bb5f14 content::ContentMain()
#10 0x55867ccc59b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55867ccc5a42 headless::HeadlessBrowserMain()
#12 0x558678bbdf9d headless::HeadlessShellMain()
#13 0x55867721c1ac ChromeMain
#14 0x7fbd6e4332e1 __libc_start_main
#15 0x55867721c02a _start

Received signal 6
#0 0x558678e7bb0c base::debug::StackTrace::StackTrace()
#1 0x558678e7b671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fbd743900c0 <unknown>
#3 0x7fbd6e445fff gsignal
#4 0x7fbd6e44742a abort
#5 0x558678e7a105 base::debug::BreakDebugger()
#6 0x558678e94bca logging::LogMessage::~LogMessage()
#7 0x558677f242b1 content::ZygoteHostImpl::Init()
#8 0x558677b96c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558677b9ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55867ccc69a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558678bb6a00 content::RunNamedProcessTypeMain()
#12 0x558678bb72e8 content::ContentMainRunnerImpl::Run()
#13 0x558678bc0f24 service_manager::Main()
#14 0x558678bb5f14 content::ContentMain()
#15 0x55867ccc59b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55867ccc5a42 headless::HeadlessBrowserMain()
#17 0x558678bbdf9d headless::HeadlessShellMain()
#18 0x55867721c1ac ChromeMain
#19 0x7fbd6e4332e1 __libc_start_main
#20 0x55867721c02a _start
  r8: 0000000000000000  r9: 00007ffffb9d7060 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffffb9d7758 r13: 0000000000000161 r14: 00007ffffb9d7760 r15: 00007ffffb9d72f9
  di: 0000000000000002  si: 00007ffffb9d7060  bp: 00007ffffb9d72a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fbd6e445fff  sp: 00007ffffb9d70d8
  ip: 00007fbd6e445fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML 5.3](https://w3c.github.io/html/)
- [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- [MediaStream Recording](https://w3c.github.io/mediacapture-record/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/)

Informative references to this spec from:

- [Permissions](https://w3c.github.io/permissions/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)
- [Web IDL](https://heycam.github.io/webidl/)


## Media Capture Depth Stream Extensions {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-depth/)
- Editor's Draft: [https://w3c.github.io/mediacapture-depth/](https://w3c.github.io/mediacapture-depth/)
- Latest published version: [https://www.w3.org/TR/mediacapture-depth/](https://www.w3.org/TR/mediacapture-depth/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-mediacapture-depth-20170418/)
- Repository: [GitHub w3c/mediacapture-depth](https://github.com/w3c/mediacapture-depth)
- Shortname: mediacapture-depth

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020214.872359:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x560557bdbb0c base::debug::StackTrace::StackTrace()
#1 0x560557bf4780 logging::LogMessage::~LogMessage()
#2 0x560556c842b1 content::ZygoteHostImpl::Init()
#3 0x5605568f6c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5605568fca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56055ba269a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x560557916a00 content::RunNamedProcessTypeMain()
#7 0x5605579172e8 content::ContentMainRunnerImpl::Run()
#8 0x560557920f24 service_manager::Main()
#9 0x560557915f14 content::ContentMain()
#10 0x56055ba259b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56055ba25a42 headless::HeadlessBrowserMain()
#12 0x56055791df9d headless::HeadlessShellMain()
#13 0x560555f7c1ac ChromeMain
#14 0x7fc58009b2e1 __libc_start_main
#15 0x560555f7c02a _start

Received signal 6
#0 0x560557bdbb0c base::debug::StackTrace::StackTrace()
#1 0x560557bdb671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc585ff80c0 <unknown>
#3 0x7fc5800adfff gsignal
#4 0x7fc5800af42a abort
#5 0x560557bda105 base::debug::BreakDebugger()
#6 0x560557bf4bca logging::LogMessage::~LogMessage()
#7 0x560556c842b1 content::ZygoteHostImpl::Init()
#8 0x5605568f6c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5605568fca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56055ba269a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x560557916a00 content::RunNamedProcessTypeMain()
#12 0x5605579172e8 content::ContentMainRunnerImpl::Run()
#13 0x560557920f24 service_manager::Main()
#14 0x560557915f14 content::ContentMain()
#15 0x56055ba259b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56055ba25a42 headless::HeadlessBrowserMain()
#17 0x56055791df9d headless::HeadlessShellMain()
#18 0x560555f7c1ac ChromeMain
#19 0x7fc58009b2e1 __libc_start_main
#20 0x560555f7c02a _start
  r8: 0000000000000000  r9: 00007ffe1507e970 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe1507f068 r13: 0000000000000161 r14: 00007ffe1507f070 r15: 00007ffe1507ec09
  di: 0000000000000002  si: 00007ffe1507e970  bp: 00007ffe1507ebb0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc5800adfff  sp: 00007ffe1507e9e8
  ip: 00007fc5800adfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020214.872359:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x560557bdbb0c base::debug::StackTrace::StackTrace()
#1 0x560557bf4780 logging::LogMessage::~LogMessage()
#2 0x560556c842b1 content::ZygoteHostImpl::Init()
#3 0x5605568f6c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5605568fca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56055ba269a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x560557916a00 content::RunNamedProcessTypeMain()
#7 0x5605579172e8 content::ContentMainRunnerImpl::Run()
#8 0x560557920f24 service_manager::Main()
#9 0x560557915f14 content::ContentMain()
#10 0x56055ba259b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56055ba25a42 headless::HeadlessBrowserMain()
#12 0x56055791df9d headless::HeadlessShellMain()
#13 0x560555f7c1ac ChromeMain
#14 0x7fc58009b2e1 __libc_start_main
#15 0x560555f7c02a _start

Received signal 6
#0 0x560557bdbb0c base::debug::StackTrace::StackTrace()
#1 0x560557bdb671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc585ff80c0 <unknown>
#3 0x7fc5800adfff gsignal
#4 0x7fc5800af42a abort
#5 0x560557bda105 base::debug::BreakDebugger()
#6 0x560557bf4bca logging::LogMessage::~LogMessage()
#7 0x560556c842b1 content::ZygoteHostImpl::Init()
#8 0x5605568f6c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5605568fca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56055ba269a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x560557916a00 content::RunNamedProcessTypeMain()
#12 0x5605579172e8 content::ContentMainRunnerImpl::Run()
#13 0x560557920f24 service_manager::Main()
#14 0x560557915f14 content::ContentMain()
#15 0x56055ba259b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56055ba25a42 headless::HeadlessBrowserMain()
#17 0x56055791df9d headless::HeadlessShellMain()
#18 0x560555f7c1ac ChromeMain
#19 0x7fc58009b2e1 __libc_start_main
#20 0x560555f7c02a _start
  r8: 0000000000000000  r9: 00007ffe1507e970 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe1507f068 r13: 0000000000000161 r14: 00007ffe1507f070 r15: 00007ffe1507ec09
  di: 0000000000000002  si: 00007ffe1507e970  bp: 00007ffe1507ebb0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc5800adfff  sp: 00007ffe1507e9e8
  ip: 00007fc5800adfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Media Capture from DOM Elements {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-fromelement/)
- Editor's Draft: [https://w3c.github.io/mediacapture-fromelement/](https://w3c.github.io/mediacapture-fromelement/)
- Latest published version: [https://www.w3.org/TR/mediacapture-fromelement/](https://www.w3.org/TR/mediacapture-fromelement/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-mediacapture-fromelement-20170906/)
- Repository: [GitHub w3c/mediacapture-fromelement](https://github.com/w3c/mediacapture-fromelement)
- Shortname: mediacapture-fromelement

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020214.892832:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x562322c66b0c base::debug::StackTrace::StackTrace()
#1 0x562322c7f780 logging::LogMessage::~LogMessage()
#2 0x562321d0f2b1 content::ZygoteHostImpl::Init()
#3 0x562321981c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x562321987a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x562326ab19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5623229a1a00 content::RunNamedProcessTypeMain()
#7 0x5623229a22e8 content::ContentMainRunnerImpl::Run()
#8 0x5623229abf24 service_manager::Main()
#9 0x5623229a0f14 content::ContentMain()
#10 0x562326ab09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x562326ab0a42 headless::HeadlessBrowserMain()
#12 0x5623229a8f9d headless::HeadlessShellMain()
#13 0x5623210071ac ChromeMain
#14 0x7fbf1ac362e1 __libc_start_main
#15 0x56232100702a _start

Received signal 6
#0 0x562322c66b0c base::debug::StackTrace::StackTrace()
#1 0x562322c66671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fbf20b930c0 <unknown>
#3 0x7fbf1ac48fff gsignal
#4 0x7fbf1ac4a42a abort
#5 0x562322c65105 base::debug::BreakDebugger()
#6 0x562322c7fbca logging::LogMessage::~LogMessage()
#7 0x562321d0f2b1 content::ZygoteHostImpl::Init()
#8 0x562321981c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x562321987a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x562326ab19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5623229a1a00 content::RunNamedProcessTypeMain()
#12 0x5623229a22e8 content::ContentMainRunnerImpl::Run()
#13 0x5623229abf24 service_manager::Main()
#14 0x5623229a0f14 content::ContentMain()
#15 0x562326ab09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x562326ab0a42 headless::HeadlessBrowserMain()
#17 0x5623229a8f9d headless::HeadlessShellMain()
#18 0x5623210071ac ChromeMain
#19 0x7fbf1ac362e1 __libc_start_main
#20 0x56232100702a _start
  r8: 0000000000000000  r9: 00007ffd3adfc5d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd3adfccc8 r13: 0000000000000161 r14: 00007ffd3adfccd0 r15: 00007ffd3adfc869
  di: 0000000000000002  si: 00007ffd3adfc5d0  bp: 00007ffd3adfc810  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fbf1ac48fff  sp: 00007ffd3adfc648
  ip: 00007fbf1ac48fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020214.892832:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x562322c66b0c base::debug::StackTrace::StackTrace()
#1 0x562322c7f780 logging::LogMessage::~LogMessage()
#2 0x562321d0f2b1 content::ZygoteHostImpl::Init()
#3 0x562321981c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x562321987a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x562326ab19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5623229a1a00 content::RunNamedProcessTypeMain()
#7 0x5623229a22e8 content::ContentMainRunnerImpl::Run()
#8 0x5623229abf24 service_manager::Main()
#9 0x5623229a0f14 content::ContentMain()
#10 0x562326ab09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x562326ab0a42 headless::HeadlessBrowserMain()
#12 0x5623229a8f9d headless::HeadlessShellMain()
#13 0x5623210071ac ChromeMain
#14 0x7fbf1ac362e1 __libc_start_main
#15 0x56232100702a _start

Received signal 6
#0 0x562322c66b0c base::debug::StackTrace::StackTrace()
#1 0x562322c66671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fbf20b930c0 <unknown>
#3 0x7fbf1ac48fff gsignal
#4 0x7fbf1ac4a42a abort
#5 0x562322c65105 base::debug::BreakDebugger()
#6 0x562322c7fbca logging::LogMessage::~LogMessage()
#7 0x562321d0f2b1 content::ZygoteHostImpl::Init()
#8 0x562321981c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x562321987a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x562326ab19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5623229a1a00 content::RunNamedProcessTypeMain()
#12 0x5623229a22e8 content::ContentMainRunnerImpl::Run()
#13 0x5623229abf24 service_manager::Main()
#14 0x5623229a0f14 content::ContentMain()
#15 0x562326ab09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x562326ab0a42 headless::HeadlessBrowserMain()
#17 0x5623229a8f9d headless::HeadlessShellMain()
#18 0x5623210071ac ChromeMain
#19 0x7fbf1ac362e1 __libc_start_main
#20 0x56232100702a _start
  r8: 0000000000000000  r9: 00007ffd3adfc5d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd3adfccc8 r13: 0000000000000161 r14: 00007ffd3adfccd0 r15: 00007ffd3adfc869
  di: 0000000000000002  si: 00007ffd3adfc5d0  bp: 00007ffd3adfc810  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fbf1ac48fff  sp: 00007ffd3adfc648
  ip: 00007fbf1ac48fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


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


## Media Source Extensions™ {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/media-source/) (08 November 2016)
- Editor's Draft: [https://w3c.github.io/media-source/](https://w3c.github.io/media-source/)
- Latest published version: [https://www.w3.org/TR/media-source/](https://www.w3.org/TR/media-source/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2016/REC-media-source-20161117/)
- Repository: [GitHub w3c/media-source](https://github.com/w3c/media-source)
- Shortname: media-source

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `AudioTrack`, `AudioTrackList`, `EventHandler`, `TextTrack`, `TextTrackList`, `TimeRanges`, `VideoTrack`, `VideoTrackList`
- Missing references for WebIDL names: 
     * `EventTarget` defined in [W3C DOM 4.1](https://w3c.github.io/dom/)
     * `URL` defined in [URL Standard](https://url.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML 5.3](https://w3c.github.io/html/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [URL Standard](https://url.spec.whatwg.org/)

Informative references to this spec from:

- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/)
- [File API](https://w3c.github.io/FileAPI/)
- [Media Source Extensions™](https://w3c.github.io/media-source/)


## MediaStream Image Capture {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-image/) (19 March 2018)
- Editor's Draft: [https://w3c.github.io/mediacapture-image/](https://w3c.github.io/mediacapture-image/)
- Latest published version: [https://www.w3.org/TR/image-capture/](https://www.w3.org/TR/image-capture/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-image-capture-20170621/)
- Repository: [GitHub w3c/mediacapture-image](https://github.com/w3c/mediacapture-image)
- Shortname: image-capture

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `ConstrainBoolean`, `ConstrainDOMString`, `ConstrainDouble`, `ImageBitmap`, `MediaStreamTrack`, `MediaTrackCapabilities`, `MediaTrackConstraintSet`, `MediaTrackSettings`, `MediaTrackSupportedConstraints`, `Window`
- Inconsistent references for links: 
     * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/), related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
     * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/), related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)

No informative reference to this spec from other specs.


## MediaStream Recording {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-record/) (9 March 2018)
- Editor's Draft: [https://w3c.github.io/mediacapture-record/](https://w3c.github.io/mediacapture-record/)
- Latest published version: [https://www.w3.org/TR/mediastream-recording/](https://www.w3.org/TR/mediastream-recording/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-mediastream-recording-20170621/)
- Repository: [GitHub w3c/mediacapture-record](https://github.com/w3c/mediacapture-record)
- Shortname: mediastream-recording

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMHighResTimeStamp`, `EventHandler`, `MediaStream`, `Window`
- Inconsistent references for links: 
     * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/), related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
     * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/), related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/)


## Metadata API for Media Resources 1.0 {data-spec=true data-anomaly=true data-hasInvalidIdl=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/mediaont-api-1.0/) (13 March 2014)
- Latest published version: [http://www.w3.org/TR/mediaont-api-1.0/](http://www.w3.org/TR/mediaont-api-1.0/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2014/REC-mediaont-api-1.0-20140313/)
- Shortname: mediaont-api-1.0

### Potential issue(s) {.anomalies}

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


## Mixed Content {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-noIdlContent=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webappsec-mixed-content/) (23 October 2017)
- Editor's Draft: [https://w3c.github.io/webappsec-mixed-content/](https://w3c.github.io/webappsec-mixed-content/)
- Latest published version: [https://www.w3.org/TR/mixed-content/](https://www.w3.org/TR/mixed-content/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2016/CR-mixed-content-20160802/)
- Repository: [GitHub w3c/webappsec-mixed-content](https://github.com/w3c/webappsec-mixed-content)
- Shortname: mixed-content

### Potential issue(s) {.anomalies}

- No WebIDL definitions found
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/2008/REC-xml-20081126/`](https://www.w3.org/TR/2008/REC-xml-20081126/), related reference "XML" uses URL [`https://www.w3.org/TR/xml`](https://www.w3.org/TR/xml)
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/), related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/)
- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)

Informative references to this spec from:

- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)


## Navigation Timing Level 2 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/navigation-timing/)
- Editor's Draft: [https://w3c.github.io/navigation-timing/](https://w3c.github.io/navigation-timing/)
- Latest published version: [https://www.w3.org/TR/navigation-timing-2/](https://www.w3.org/TR/navigation-timing-2/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-navigation-timing-2-20171205/)
- Repository: [GitHub w3c/navigation-timing](https://github.com/w3c/navigation-timing)
- Shortname: navigation-timing-2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020218.066522:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b42469fb0c base::debug::StackTrace::StackTrace()
#1 0x55b4246b8780 logging::LogMessage::~LogMessage()
#2 0x55b4237482b1 content::ZygoteHostImpl::Init()
#3 0x55b4233bac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b4233c0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b4284ea9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b4243daa00 content::RunNamedProcessTypeMain()
#7 0x55b4243db2e8 content::ContentMainRunnerImpl::Run()
#8 0x55b4243e4f24 service_manager::Main()
#9 0x55b4243d9f14 content::ContentMain()
#10 0x55b4284e99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b4284e9a42 headless::HeadlessBrowserMain()
#12 0x55b4243e1f9d headless::HeadlessShellMain()
#13 0x55b422a401ac ChromeMain
#14 0x7f2ba7e982e1 __libc_start_main
#15 0x55b422a4002a _start

Received signal 6
#0 0x55b42469fb0c base::debug::StackTrace::StackTrace()
#1 0x55b42469f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2baddf50c0 <unknown>
#3 0x7f2ba7eaafff gsignal
#4 0x7f2ba7eac42a abort
#5 0x55b42469e105 base::debug::BreakDebugger()
#6 0x55b4246b8bca logging::LogMessage::~LogMessage()
#7 0x55b4237482b1 content::ZygoteHostImpl::Init()
#8 0x55b4233bac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b4233c0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b4284ea9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b4243daa00 content::RunNamedProcessTypeMain()
#12 0x55b4243db2e8 content::ContentMainRunnerImpl::Run()
#13 0x55b4243e4f24 service_manager::Main()
#14 0x55b4243d9f14 content::ContentMain()
#15 0x55b4284e99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b4284e9a42 headless::HeadlessBrowserMain()
#17 0x55b4243e1f9d headless::HeadlessShellMain()
#18 0x55b422a401ac ChromeMain
#19 0x7f2ba7e982e1 __libc_start_main
#20 0x55b422a4002a _start
  r8: 0000000000000000  r9: 00007ffd2324b260 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd2324b958 r13: 0000000000000161 r14: 00007ffd2324b960 r15: 00007ffd2324b4f9
  di: 0000000000000002  si: 00007ffd2324b260  bp: 00007ffd2324b4a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2ba7eaafff  sp: 00007ffd2324b2d8
  ip: 00007f2ba7eaafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020218.066522:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b42469fb0c base::debug::StackTrace::StackTrace()
#1 0x55b4246b8780 logging::LogMessage::~LogMessage()
#2 0x55b4237482b1 content::ZygoteHostImpl::Init()
#3 0x55b4233bac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b4233c0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b4284ea9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b4243daa00 content::RunNamedProcessTypeMain()
#7 0x55b4243db2e8 content::ContentMainRunnerImpl::Run()
#8 0x55b4243e4f24 service_manager::Main()
#9 0x55b4243d9f14 content::ContentMain()
#10 0x55b4284e99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b4284e9a42 headless::HeadlessBrowserMain()
#12 0x55b4243e1f9d headless::HeadlessShellMain()
#13 0x55b422a401ac ChromeMain
#14 0x7f2ba7e982e1 __libc_start_main
#15 0x55b422a4002a _start

Received signal 6
#0 0x55b42469fb0c base::debug::StackTrace::StackTrace()
#1 0x55b42469f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2baddf50c0 <unknown>
#3 0x7f2ba7eaafff gsignal
#4 0x7f2ba7eac42a abort
#5 0x55b42469e105 base::debug::BreakDebugger()
#6 0x55b4246b8bca logging::LogMessage::~LogMessage()
#7 0x55b4237482b1 content::ZygoteHostImpl::Init()
#8 0x55b4233bac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b4233c0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b4284ea9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b4243daa00 content::RunNamedProcessTypeMain()
#12 0x55b4243db2e8 content::ContentMainRunnerImpl::Run()
#13 0x55b4243e4f24 service_manager::Main()
#14 0x55b4243d9f14 content::ContentMain()
#15 0x55b4284e99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b4284e9a42 headless::HeadlessBrowserMain()
#17 0x55b4243e1f9d headless::HeadlessShellMain()
#18 0x55b422a401ac ChromeMain
#19 0x7f2ba7e982e1 __libc_start_main
#20 0x55b422a4002a _start
  r8: 0000000000000000  r9: 00007ffd2324b260 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd2324b958 r13: 0000000000000161 r14: 00007ffd2324b960 r15: 00007ffd2324b4f9
  di: 0000000000000002  si: 00007ffd2324b260  bp: 00007ffd2324b4a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2ba7eaafff  sp: 00007ffd2324b2d8
  ip: 00007f2ba7eaafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Orientation Sensor {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/orientation-sensor/) (14 March 2018)
- Editor's Draft: [https://w3c.github.io/orientation-sensor/](https://w3c.github.io/orientation-sensor/)
- Latest published version: [https://www.w3.org/TR/orientation-sensor/](https://www.w3.org/TR/orientation-sensor/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-orientation-sensor-20180320/)
- Repository: [GitHub w3c/orientation-sensor](https://github.com/w3c/orientation-sensor)
- Shortname: orientation-sensor

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
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


## Page not found · GitHub Pages {data-spec=true data-anomaly=true data-noNormativeRefs=true data-noRefToWebIDL=true data-noIdlContent=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webdriver/webdriver-spec.html) (Fri May 11 2018)
- Editor's Draft: [https://w3c.github.io/webdriver/webdriver-spec.html](https://w3c.github.io/webdriver/webdriver-spec.html)
- Latest published version: [https://www.w3.org/TR/webdriver1/](https://www.w3.org/TR/webdriver1/)
- Latest published status: [Proposed Recommendation](https://www.w3.org/TR/2018/PR-webdriver1-20180426/)
- Repository: [GitHub w3c/webdriver](https://github.com/w3c/webdriver)
- Shortname: webdriver

### Potential issue(s) {.anomalies}

- No normative references found
- No WebIDL definitions found

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Permissions](https://w3c.github.io/permissions/)

No informative reference to this spec from other specs.


## Page Visibility Level 2 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/page-visibility/)
- Editor's Draft: [https://w3c.github.io/page-visibility/](https://w3c.github.io/page-visibility/)
- Latest published version: [https://www.w3.org/TR/page-visibility-2/](https://www.w3.org/TR/page-visibility-2/)
- Latest published status: [Proposed Recommendation](https://www.w3.org/TR/2017/PR-page-visibility-2-20171017/)
- Repository: [GitHub w3c/page-visibility](https://github.com/w3c/page-visibility)
- Shortname: page-visibility-2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020217.727419:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564229180b0c base::debug::StackTrace::StackTrace()
#1 0x564229199780 logging::LogMessage::~LogMessage()
#2 0x5642282292b1 content::ZygoteHostImpl::Init()
#3 0x564227e9bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564227ea1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56422cfcb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x564228ebba00 content::RunNamedProcessTypeMain()
#7 0x564228ebc2e8 content::ContentMainRunnerImpl::Run()
#8 0x564228ec5f24 service_manager::Main()
#9 0x564228ebaf14 content::ContentMain()
#10 0x56422cfca9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56422cfcaa42 headless::HeadlessBrowserMain()
#12 0x564228ec2f9d headless::HeadlessShellMain()
#13 0x5642275211ac ChromeMain
#14 0x7f9d6d12d2e1 __libc_start_main
#15 0x56422752102a _start

Received signal 6
#0 0x564229180b0c base::debug::StackTrace::StackTrace()
#1 0x564229180671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f9d7308a0c0 <unknown>
#3 0x7f9d6d13ffff gsignal
#4 0x7f9d6d14142a abort
#5 0x56422917f105 base::debug::BreakDebugger()
#6 0x564229199bca logging::LogMessage::~LogMessage()
#7 0x5642282292b1 content::ZygoteHostImpl::Init()
#8 0x564227e9bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564227ea1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56422cfcb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x564228ebba00 content::RunNamedProcessTypeMain()
#12 0x564228ebc2e8 content::ContentMainRunnerImpl::Run()
#13 0x564228ec5f24 service_manager::Main()
#14 0x564228ebaf14 content::ContentMain()
#15 0x56422cfca9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56422cfcaa42 headless::HeadlessBrowserMain()
#17 0x564228ec2f9d headless::HeadlessShellMain()
#18 0x5642275211ac ChromeMain
#19 0x7f9d6d12d2e1 __libc_start_main
#20 0x56422752102a _start
  r8: 0000000000000000  r9: 00007ffcb3e83a50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcb3e84148 r13: 0000000000000161 r14: 00007ffcb3e84150 r15: 00007ffcb3e83ce9
  di: 0000000000000002  si: 00007ffcb3e83a50  bp: 00007ffcb3e83c90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9d6d13ffff  sp: 00007ffcb3e83ac8
  ip: 00007f9d6d13ffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020217.727419:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564229180b0c base::debug::StackTrace::StackTrace()
#1 0x564229199780 logging::LogMessage::~LogMessage()
#2 0x5642282292b1 content::ZygoteHostImpl::Init()
#3 0x564227e9bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564227ea1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56422cfcb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x564228ebba00 content::RunNamedProcessTypeMain()
#7 0x564228ebc2e8 content::ContentMainRunnerImpl::Run()
#8 0x564228ec5f24 service_manager::Main()
#9 0x564228ebaf14 content::ContentMain()
#10 0x56422cfca9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56422cfcaa42 headless::HeadlessBrowserMain()
#12 0x564228ec2f9d headless::HeadlessShellMain()
#13 0x5642275211ac ChromeMain
#14 0x7f9d6d12d2e1 __libc_start_main
#15 0x56422752102a _start

Received signal 6
#0 0x564229180b0c base::debug::StackTrace::StackTrace()
#1 0x564229180671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f9d7308a0c0 <unknown>
#3 0x7f9d6d13ffff gsignal
#4 0x7f9d6d14142a abort
#5 0x56422917f105 base::debug::BreakDebugger()
#6 0x564229199bca logging::LogMessage::~LogMessage()
#7 0x5642282292b1 content::ZygoteHostImpl::Init()
#8 0x564227e9bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564227ea1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56422cfcb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x564228ebba00 content::RunNamedProcessTypeMain()
#12 0x564228ebc2e8 content::ContentMainRunnerImpl::Run()
#13 0x564228ec5f24 service_manager::Main()
#14 0x564228ebaf14 content::ContentMain()
#15 0x56422cfca9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56422cfcaa42 headless::HeadlessBrowserMain()
#17 0x564228ec2f9d headless::HeadlessShellMain()
#18 0x5642275211ac ChromeMain
#19 0x7f9d6d12d2e1 __libc_start_main
#20 0x56422752102a _start
  r8: 0000000000000000  r9: 00007ffcb3e83a50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcb3e84148 r13: 0000000000000161 r14: 00007ffcb3e84150 r15: 00007ffcb3e83ce9
  di: 0000000000000002  si: 00007ffcb3e83a50  bp: 00007ffcb3e83c90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9d6d13ffff  sp: 00007ffcb3e83ac8
  ip: 00007f9d6d13ffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Generic Sensor API](https://w3c.github.io/sensors/)
- [HTML 5.3](https://w3c.github.io/html/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)

No informative reference to this spec from other specs.


## Paint Timing 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/paint-timing/) (9 January 2018)
- Editor's Draft: [https://w3c.github.io/paint-timing/](https://w3c.github.io/paint-timing/)
- Latest published version: [https://www.w3.org/TR/paint-timing/](https://www.w3.org/TR/paint-timing/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-paint-timing-20170907/)
- Repository: [GitHub w3c/paint-timing](https://github.com/w3c/paint-timing)
- Shortname: paint-timing

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `PerformanceEntry`
- Missing references for links: 
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/performance-timeline/`](https://w3c.github.io/performance-timeline/), related reference "PERFORMANCE-TIMELINE-2" uses URL [`https://www.w3.org/TR/performance-timeline-2/`](https://www.w3.org/TR/performance-timeline-2/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Payment Handler API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/payment-handler/)
- Editor's Draft: [https://w3c.github.io/payment-handler/](https://w3c.github.io/payment-handler/)
- Latest published version: [https://www.w3.org/TR/payment-handler/](https://www.w3.org/TR/payment-handler/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-payment-handler-20180108/)
- Repository: [GitHub w3c/payment-handler](https://github.com/w3c/payment-handler)
- Shortname: payment-handler

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020218.089632:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d6d2f86b0c base::debug::StackTrace::StackTrace()
#1 0x55d6d2f9f780 logging::LogMessage::~LogMessage()
#2 0x55d6d202f2b1 content::ZygoteHostImpl::Init()
#3 0x55d6d1ca1c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d6d1ca7a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d6d6dd19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d6d2cc1a00 content::RunNamedProcessTypeMain()
#7 0x55d6d2cc22e8 content::ContentMainRunnerImpl::Run()
#8 0x55d6d2ccbf24 service_manager::Main()
#9 0x55d6d2cc0f14 content::ContentMain()
#10 0x55d6d6dd09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d6d6dd0a42 headless::HeadlessBrowserMain()
#12 0x55d6d2cc8f9d headless::HeadlessShellMain()
#13 0x55d6d13271ac ChromeMain
#14 0x7f9091bd82e1 __libc_start_main
#15 0x55d6d132702a _start

Received signal 6
#0 0x55d6d2f86b0c base::debug::StackTrace::StackTrace()
#1 0x55d6d2f86671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f9097b350c0 <unknown>
#3 0x7f9091beafff gsignal
#4 0x7f9091bec42a abort
#5 0x55d6d2f85105 base::debug::BreakDebugger()
#6 0x55d6d2f9fbca logging::LogMessage::~LogMessage()
#7 0x55d6d202f2b1 content::ZygoteHostImpl::Init()
#8 0x55d6d1ca1c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d6d1ca7a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d6d6dd19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d6d2cc1a00 content::RunNamedProcessTypeMain()
#12 0x55d6d2cc22e8 content::ContentMainRunnerImpl::Run()
#13 0x55d6d2ccbf24 service_manager::Main()
#14 0x55d6d2cc0f14 content::ContentMain()
#15 0x55d6d6dd09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d6d6dd0a42 headless::HeadlessBrowserMain()
#17 0x55d6d2cc8f9d headless::HeadlessShellMain()
#18 0x55d6d13271ac ChromeMain
#19 0x7f9091bd82e1 __libc_start_main
#20 0x55d6d132702a _start
  r8: 0000000000000000  r9: 00007ffc929285b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc92928ca8 r13: 0000000000000161 r14: 00007ffc92928cb0 r15: 00007ffc92928849
  di: 0000000000000002  si: 00007ffc929285b0  bp: 00007ffc929287f0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9091beafff  sp: 00007ffc92928628
  ip: 00007f9091beafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020218.089632:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d6d2f86b0c base::debug::StackTrace::StackTrace()
#1 0x55d6d2f9f780 logging::LogMessage::~LogMessage()
#2 0x55d6d202f2b1 content::ZygoteHostImpl::Init()
#3 0x55d6d1ca1c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d6d1ca7a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d6d6dd19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d6d2cc1a00 content::RunNamedProcessTypeMain()
#7 0x55d6d2cc22e8 content::ContentMainRunnerImpl::Run()
#8 0x55d6d2ccbf24 service_manager::Main()
#9 0x55d6d2cc0f14 content::ContentMain()
#10 0x55d6d6dd09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d6d6dd0a42 headless::HeadlessBrowserMain()
#12 0x55d6d2cc8f9d headless::HeadlessShellMain()
#13 0x55d6d13271ac ChromeMain
#14 0x7f9091bd82e1 __libc_start_main
#15 0x55d6d132702a _start

Received signal 6
#0 0x55d6d2f86b0c base::debug::StackTrace::StackTrace()
#1 0x55d6d2f86671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f9097b350c0 <unknown>
#3 0x7f9091beafff gsignal
#4 0x7f9091bec42a abort
#5 0x55d6d2f85105 base::debug::BreakDebugger()
#6 0x55d6d2f9fbca logging::LogMessage::~LogMessage()
#7 0x55d6d202f2b1 content::ZygoteHostImpl::Init()
#8 0x55d6d1ca1c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d6d1ca7a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d6d6dd19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d6d2cc1a00 content::RunNamedProcessTypeMain()
#12 0x55d6d2cc22e8 content::ContentMainRunnerImpl::Run()
#13 0x55d6d2ccbf24 service_manager::Main()
#14 0x55d6d2cc0f14 content::ContentMain()
#15 0x55d6d6dd09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d6d6dd0a42 headless::HeadlessBrowserMain()
#17 0x55d6d2cc8f9d headless::HeadlessShellMain()
#18 0x55d6d13271ac ChromeMain
#19 0x7f9091bd82e1 __libc_start_main
#20 0x55d6d132702a _start
  r8: 0000000000000000  r9: 00007ffc929285b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc92928ca8 r13: 0000000000000161 r14: 00007ffc92928cb0 r15: 00007ffc92928849
  di: 0000000000000002  si: 00007ffc929285b0  bp: 00007ffc929287f0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9091beafff  sp: 00007ffc92928628
  ip: 00007f9091beafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Payment Method: Basic Card {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/payment-method-basic-card/)
- Editor's Draft: [https://w3c.github.io/payment-method-basic-card/](https://w3c.github.io/payment-method-basic-card/)
- Latest published version: [https://www.w3.org/TR/payment-method-basic-card/](https://www.w3.org/TR/payment-method-basic-card/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-payment-method-basic-card-20180510/)
- Repository: [GitHub w3c/payment-method-basic-card](https://github.com/w3c/payment-method-basic-card)
- Shortname: payment-method-basic-card

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020218.639468:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5569121ffb0c base::debug::StackTrace::StackTrace()
#1 0x556912218780 logging::LogMessage::~LogMessage()
#2 0x5569112a82b1 content::ZygoteHostImpl::Init()
#3 0x556910f1ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556910f20a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55691604a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556911f3aa00 content::RunNamedProcessTypeMain()
#7 0x556911f3b2e8 content::ContentMainRunnerImpl::Run()
#8 0x556911f44f24 service_manager::Main()
#9 0x556911f39f14 content::ContentMain()
#10 0x5569160499b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556916049a42 headless::HeadlessBrowserMain()
#12 0x556911f41f9d headless::HeadlessShellMain()
#13 0x5569105a01ac ChromeMain
#14 0x7fb9b0c7c2e1 __libc_start_main
#15 0x5569105a002a _start

Received signal 6
#0 0x5569121ffb0c base::debug::StackTrace::StackTrace()
#1 0x5569121ff671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb9b6bd90c0 <unknown>
#3 0x7fb9b0c8efff gsignal
#4 0x7fb9b0c9042a abort
#5 0x5569121fe105 base::debug::BreakDebugger()
#6 0x556912218bca logging::LogMessage::~LogMessage()
#7 0x5569112a82b1 content::ZygoteHostImpl::Init()
#8 0x556910f1ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556910f20a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55691604a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556911f3aa00 content::RunNamedProcessTypeMain()
#12 0x556911f3b2e8 content::ContentMainRunnerImpl::Run()
#13 0x556911f44f24 service_manager::Main()
#14 0x556911f39f14 content::ContentMain()
#15 0x5569160499b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556916049a42 headless::HeadlessBrowserMain()
#17 0x556911f41f9d headless::HeadlessShellMain()
#18 0x5569105a01ac ChromeMain
#19 0x7fb9b0c7c2e1 __libc_start_main
#20 0x5569105a002a _start
  r8: 0000000000000000  r9: 00007ffe92081860 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe92081f58 r13: 0000000000000161 r14: 00007ffe92081f60 r15: 00007ffe92081af9
  di: 0000000000000002  si: 00007ffe92081860  bp: 00007ffe92081aa0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb9b0c8efff  sp: 00007ffe920818d8
  ip: 00007fb9b0c8efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020218.639468:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5569121ffb0c base::debug::StackTrace::StackTrace()
#1 0x556912218780 logging::LogMessage::~LogMessage()
#2 0x5569112a82b1 content::ZygoteHostImpl::Init()
#3 0x556910f1ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556910f20a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55691604a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556911f3aa00 content::RunNamedProcessTypeMain()
#7 0x556911f3b2e8 content::ContentMainRunnerImpl::Run()
#8 0x556911f44f24 service_manager::Main()
#9 0x556911f39f14 content::ContentMain()
#10 0x5569160499b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556916049a42 headless::HeadlessBrowserMain()
#12 0x556911f41f9d headless::HeadlessShellMain()
#13 0x5569105a01ac ChromeMain
#14 0x7fb9b0c7c2e1 __libc_start_main
#15 0x5569105a002a _start

Received signal 6
#0 0x5569121ffb0c base::debug::StackTrace::StackTrace()
#1 0x5569121ff671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb9b6bd90c0 <unknown>
#3 0x7fb9b0c8efff gsignal
#4 0x7fb9b0c9042a abort
#5 0x5569121fe105 base::debug::BreakDebugger()
#6 0x556912218bca logging::LogMessage::~LogMessage()
#7 0x5569112a82b1 content::ZygoteHostImpl::Init()
#8 0x556910f1ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556910f20a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55691604a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556911f3aa00 content::RunNamedProcessTypeMain()
#12 0x556911f3b2e8 content::ContentMainRunnerImpl::Run()
#13 0x556911f44f24 service_manager::Main()
#14 0x556911f39f14 content::ContentMain()
#15 0x5569160499b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556916049a42 headless::HeadlessBrowserMain()
#17 0x556911f41f9d headless::HeadlessShellMain()
#18 0x5569105a01ac ChromeMain
#19 0x7fb9b0c7c2e1 __libc_start_main
#20 0x5569105a002a _start
  r8: 0000000000000000  r9: 00007ffe92081860 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe92081f58 r13: 0000000000000161 r14: 00007ffe92081f60 r15: 00007ffe92081af9
  di: 0000000000000002  si: 00007ffe92081860  bp: 00007ffe92081aa0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb9b0c8efff  sp: 00007ffe920818d8
  ip: 00007fb9b0c8efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Payment Request API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/payment-request/)
- Editor's Draft: [https://w3c.github.io/payment-request/](https://w3c.github.io/payment-request/)
- Latest published version: [https://www.w3.org/TR/payment-request/](https://www.w3.org/TR/payment-request/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-payment-request-20180503/)
- Repository: [GitHub w3c/payment-request](https://github.com/w3c/payment-request)
- Shortname: payment-request

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020219.112824:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x563086d96b0c base::debug::StackTrace::StackTrace()
#1 0x563086daf780 logging::LogMessage::~LogMessage()
#2 0x563085e3f2b1 content::ZygoteHostImpl::Init()
#3 0x563085ab1c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x563085ab7a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56308abe19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563086ad1a00 content::RunNamedProcessTypeMain()
#7 0x563086ad22e8 content::ContentMainRunnerImpl::Run()
#8 0x563086adbf24 service_manager::Main()
#9 0x563086ad0f14 content::ContentMain()
#10 0x56308abe09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56308abe0a42 headless::HeadlessBrowserMain()
#12 0x563086ad8f9d headless::HeadlessShellMain()
#13 0x5630851371ac ChromeMain
#14 0x7f43a6cfe2e1 __libc_start_main
#15 0x56308513702a _start

Received signal 6
#0 0x563086d96b0c base::debug::StackTrace::StackTrace()
#1 0x563086d96671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f43acc5b0c0 <unknown>
#3 0x7f43a6d10fff gsignal
#4 0x7f43a6d1242a abort
#5 0x563086d95105 base::debug::BreakDebugger()
#6 0x563086dafbca logging::LogMessage::~LogMessage()
#7 0x563085e3f2b1 content::ZygoteHostImpl::Init()
#8 0x563085ab1c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x563085ab7a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56308abe19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563086ad1a00 content::RunNamedProcessTypeMain()
#12 0x563086ad22e8 content::ContentMainRunnerImpl::Run()
#13 0x563086adbf24 service_manager::Main()
#14 0x563086ad0f14 content::ContentMain()
#15 0x56308abe09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56308abe0a42 headless::HeadlessBrowserMain()
#17 0x563086ad8f9d headless::HeadlessShellMain()
#18 0x5630851371ac ChromeMain
#19 0x7f43a6cfe2e1 __libc_start_main
#20 0x56308513702a _start
  r8: 0000000000000000  r9: 00007ffcd49af1c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcd49af8b8 r13: 0000000000000161 r14: 00007ffcd49af8c0 r15: 00007ffcd49af459
  di: 0000000000000002  si: 00007ffcd49af1c0  bp: 00007ffcd49af400  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f43a6d10fff  sp: 00007ffcd49af238
  ip: 00007f43a6d10fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020219.112824:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x563086d96b0c base::debug::StackTrace::StackTrace()
#1 0x563086daf780 logging::LogMessage::~LogMessage()
#2 0x563085e3f2b1 content::ZygoteHostImpl::Init()
#3 0x563085ab1c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x563085ab7a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56308abe19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563086ad1a00 content::RunNamedProcessTypeMain()
#7 0x563086ad22e8 content::ContentMainRunnerImpl::Run()
#8 0x563086adbf24 service_manager::Main()
#9 0x563086ad0f14 content::ContentMain()
#10 0x56308abe09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56308abe0a42 headless::HeadlessBrowserMain()
#12 0x563086ad8f9d headless::HeadlessShellMain()
#13 0x5630851371ac ChromeMain
#14 0x7f43a6cfe2e1 __libc_start_main
#15 0x56308513702a _start

Received signal 6
#0 0x563086d96b0c base::debug::StackTrace::StackTrace()
#1 0x563086d96671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f43acc5b0c0 <unknown>
#3 0x7f43a6d10fff gsignal
#4 0x7f43a6d1242a abort
#5 0x563086d95105 base::debug::BreakDebugger()
#6 0x563086dafbca logging::LogMessage::~LogMessage()
#7 0x563085e3f2b1 content::ZygoteHostImpl::Init()
#8 0x563085ab1c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x563085ab7a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56308abe19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563086ad1a00 content::RunNamedProcessTypeMain()
#12 0x563086ad22e8 content::ContentMainRunnerImpl::Run()
#13 0x563086adbf24 service_manager::Main()
#14 0x563086ad0f14 content::ContentMain()
#15 0x56308abe09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56308abe0a42 headless::HeadlessBrowserMain()
#17 0x563086ad8f9d headless::HeadlessShellMain()
#18 0x5630851371ac ChromeMain
#19 0x7f43a6cfe2e1 __libc_start_main
#20 0x56308513702a _start
  r8: 0000000000000000  r9: 00007ffcd49af1c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcd49af8b8 r13: 0000000000000161 r14: 00007ffcd49af8c0 r15: 00007ffcd49af459
  di: 0000000000000002  si: 00007ffcd49af1c0  bp: 00007ffcd49af400  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f43a6d10fff  sp: 00007ffcd49af238
  ip: 00007f43a6d10fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML 5.3](https://w3c.github.io/html/)

No informative reference to this spec from other specs.


## Performance Timeline Level 2 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/performance-timeline/)
- Editor's Draft: [https://w3c.github.io/performance-timeline/](https://w3c.github.io/performance-timeline/)
- Latest published version: [https://www.w3.org/TR/performance-timeline-2/](https://www.w3.org/TR/performance-timeline-2/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2016/CR-performance-timeline-2-20161208/)
- Repository: [GitHub w3c/performance-timeline](https://github.com/w3c/performance-timeline)
- Shortname: performance-timeline-2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020217.373059:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55cdb1dc2b0c base::debug::StackTrace::StackTrace()
#1 0x55cdb1ddb780 logging::LogMessage::~LogMessage()
#2 0x55cdb0e6b2b1 content::ZygoteHostImpl::Init()
#3 0x55cdb0addc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55cdb0ae3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55cdb5c0d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55cdb1afda00 content::RunNamedProcessTypeMain()
#7 0x55cdb1afe2e8 content::ContentMainRunnerImpl::Run()
#8 0x55cdb1b07f24 service_manager::Main()
#9 0x55cdb1afcf14 content::ContentMain()
#10 0x55cdb5c0c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55cdb5c0ca42 headless::HeadlessBrowserMain()
#12 0x55cdb1b04f9d headless::HeadlessShellMain()
#13 0x55cdb01631ac ChromeMain
#14 0x7fbce2d442e1 __libc_start_main
#15 0x55cdb016302a _start

Received signal 6
#0 0x55cdb1dc2b0c base::debug::StackTrace::StackTrace()
#1 0x55cdb1dc2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fbce8ca10c0 <unknown>
#3 0x7fbce2d56fff gsignal
#4 0x7fbce2d5842a abort
#5 0x55cdb1dc1105 base::debug::BreakDebugger()
#6 0x55cdb1ddbbca logging::LogMessage::~LogMessage()
#7 0x55cdb0e6b2b1 content::ZygoteHostImpl::Init()
#8 0x55cdb0addc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55cdb0ae3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55cdb5c0d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55cdb1afda00 content::RunNamedProcessTypeMain()
#12 0x55cdb1afe2e8 content::ContentMainRunnerImpl::Run()
#13 0x55cdb1b07f24 service_manager::Main()
#14 0x55cdb1afcf14 content::ContentMain()
#15 0x55cdb5c0c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55cdb5c0ca42 headless::HeadlessBrowserMain()
#17 0x55cdb1b04f9d headless::HeadlessShellMain()
#18 0x55cdb01631ac ChromeMain
#19 0x7fbce2d442e1 __libc_start_main
#20 0x55cdb016302a _start
  r8: 0000000000000000  r9: 00007ffd00f3dec0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd00f3e5b8 r13: 0000000000000161 r14: 00007ffd00f3e5c0 r15: 00007ffd00f3e159
  di: 0000000000000002  si: 00007ffd00f3dec0  bp: 00007ffd00f3e100  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fbce2d56fff  sp: 00007ffd00f3df38
  ip: 00007fbce2d56fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020217.373059:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55cdb1dc2b0c base::debug::StackTrace::StackTrace()
#1 0x55cdb1ddb780 logging::LogMessage::~LogMessage()
#2 0x55cdb0e6b2b1 content::ZygoteHostImpl::Init()
#3 0x55cdb0addc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55cdb0ae3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55cdb5c0d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55cdb1afda00 content::RunNamedProcessTypeMain()
#7 0x55cdb1afe2e8 content::ContentMainRunnerImpl::Run()
#8 0x55cdb1b07f24 service_manager::Main()
#9 0x55cdb1afcf14 content::ContentMain()
#10 0x55cdb5c0c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55cdb5c0ca42 headless::HeadlessBrowserMain()
#12 0x55cdb1b04f9d headless::HeadlessShellMain()
#13 0x55cdb01631ac ChromeMain
#14 0x7fbce2d442e1 __libc_start_main
#15 0x55cdb016302a _start

Received signal 6
#0 0x55cdb1dc2b0c base::debug::StackTrace::StackTrace()
#1 0x55cdb1dc2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fbce8ca10c0 <unknown>
#3 0x7fbce2d56fff gsignal
#4 0x7fbce2d5842a abort
#5 0x55cdb1dc1105 base::debug::BreakDebugger()
#6 0x55cdb1ddbbca logging::LogMessage::~LogMessage()
#7 0x55cdb0e6b2b1 content::ZygoteHostImpl::Init()
#8 0x55cdb0addc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55cdb0ae3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55cdb5c0d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55cdb1afda00 content::RunNamedProcessTypeMain()
#12 0x55cdb1afe2e8 content::ContentMainRunnerImpl::Run()
#13 0x55cdb1b07f24 service_manager::Main()
#14 0x55cdb1afcf14 content::ContentMain()
#15 0x55cdb5c0c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55cdb5c0ca42 headless::HeadlessBrowserMain()
#17 0x55cdb1b04f9d headless::HeadlessShellMain()
#18 0x55cdb01631ac ChromeMain
#19 0x7fbce2d442e1 __libc_start_main
#20 0x55cdb016302a _start
  r8: 0000000000000000  r9: 00007ffd00f3dec0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd00f3e5b8 r13: 0000000000000161 r14: 00007ffd00f3e5c0 r15: 00007ffd00f3e159
  di: 0000000000000002  si: 00007ffd00f3dec0  bp: 00007ffd00f3e100  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fbce2d56fff  sp: 00007ffd00f3df38
  ip: 00007fbce2d56fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Long Tasks API 1](https://w3c.github.io/longtasks/)
- [Paint Timing 1](https://w3c.github.io/paint-timing/)

No informative reference to this spec from other specs.


## Permissions {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/permissions/) (22 December 2017)
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
     * [`https://w3c.github.io/webdriver/webdriver-spec.html`](https://w3c.github.io/webdriver/webdriver-spec.html), related reference "WebDriver" uses URL [`https://www.w3.org/TR/webdriver/`](https://www.w3.org/TR/webdriver/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Accelerometer](https://w3c.github.io/accelerometer/)
- [Ambient Light Sensor](https://w3c.github.io/ambient-light/)
- [Clipboard API and events](https://w3c.github.io/clipboard-apis/)
- [Generic Sensor API](https://w3c.github.io/sensors/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [Gyroscope](https://w3c.github.io/gyroscope/)
- [Magnetometer](https://w3c.github.io/magnetometer/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [WebUSB API](https://wicg.github.io/webusb/)

Informative references to this spec from:

- [Web Budget API](https://wicg.github.io/budget-api/)


## Picture-in-Picture {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/picture-in-picture/) (7 May 2018)
- Repository: [GitHub wicg/picture-in-picture](https://github.com/wicg/picture-in-picture)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `HTMLVideoElement`
- Inconsistent references for links: 
     * [`https://w3c.github.io/remote-playback/`](https://w3c.github.io/remote-playback/), related reference "Remote-Playback" uses URL [`https://www.w3.org/TR/remote-playback/`](https://www.w3.org/TR/remote-playback/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Pointer Events {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/pointerevents/)
- Editor's Draft: [https://w3c.github.io/pointerevents/](https://w3c.github.io/pointerevents/)
- Latest published version: [https://www.w3.org/TR/pointerevents2/](https://www.w3.org/TR/pointerevents2/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-pointerevents2-20180510/)
- Repository: [GitHub w3c/pointerevents](https://github.com/w3c/pointerevents)
- Shortname: pointerevents2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020222.238056:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558f3743db0c base::debug::StackTrace::StackTrace()
#1 0x558f37456780 logging::LogMessage::~LogMessage()
#2 0x558f364e62b1 content::ZygoteHostImpl::Init()
#3 0x558f36158c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558f3615ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558f3b2889a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558f37178a00 content::RunNamedProcessTypeMain()
#7 0x558f371792e8 content::ContentMainRunnerImpl::Run()
#8 0x558f37182f24 service_manager::Main()
#9 0x558f37177f14 content::ContentMain()
#10 0x558f3b2879b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558f3b287a42 headless::HeadlessBrowserMain()
#12 0x558f3717ff9d headless::HeadlessShellMain()
#13 0x558f357de1ac ChromeMain
#14 0x7f329b9082e1 __libc_start_main
#15 0x558f357de02a _start

Received signal 6
#0 0x558f3743db0c base::debug::StackTrace::StackTrace()
#1 0x558f3743d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f32a18650c0 <unknown>
#3 0x7f329b91afff gsignal
#4 0x7f329b91c42a abort
#5 0x558f3743c105 base::debug::BreakDebugger()
#6 0x558f37456bca logging::LogMessage::~LogMessage()
#7 0x558f364e62b1 content::ZygoteHostImpl::Init()
#8 0x558f36158c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558f3615ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558f3b2889a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558f37178a00 content::RunNamedProcessTypeMain()
#12 0x558f371792e8 content::ContentMainRunnerImpl::Run()
#13 0x558f37182f24 service_manager::Main()
#14 0x558f37177f14 content::ContentMain()
#15 0x558f3b2879b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558f3b287a42 headless::HeadlessBrowserMain()
#17 0x558f3717ff9d headless::HeadlessShellMain()
#18 0x558f357de1ac ChromeMain
#19 0x7f329b9082e1 __libc_start_main
#20 0x558f357de02a _start
  r8: 0000000000000000  r9: 00007ffd99a6ff30 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd99a70628 r13: 0000000000000161 r14: 00007ffd99a70630 r15: 00007ffd99a701c9
  di: 0000000000000002  si: 00007ffd99a6ff30  bp: 00007ffd99a70170  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f329b91afff  sp: 00007ffd99a6ffa8
  ip: 00007f329b91afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020222.238056:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558f3743db0c base::debug::StackTrace::StackTrace()
#1 0x558f37456780 logging::LogMessage::~LogMessage()
#2 0x558f364e62b1 content::ZygoteHostImpl::Init()
#3 0x558f36158c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558f3615ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558f3b2889a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558f37178a00 content::RunNamedProcessTypeMain()
#7 0x558f371792e8 content::ContentMainRunnerImpl::Run()
#8 0x558f37182f24 service_manager::Main()
#9 0x558f37177f14 content::ContentMain()
#10 0x558f3b2879b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558f3b287a42 headless::HeadlessBrowserMain()
#12 0x558f3717ff9d headless::HeadlessShellMain()
#13 0x558f357de1ac ChromeMain
#14 0x7f329b9082e1 __libc_start_main
#15 0x558f357de02a _start

Received signal 6
#0 0x558f3743db0c base::debug::StackTrace::StackTrace()
#1 0x558f3743d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f32a18650c0 <unknown>
#3 0x7f329b91afff gsignal
#4 0x7f329b91c42a abort
#5 0x558f3743c105 base::debug::BreakDebugger()
#6 0x558f37456bca logging::LogMessage::~LogMessage()
#7 0x558f364e62b1 content::ZygoteHostImpl::Init()
#8 0x558f36158c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558f3615ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558f3b2889a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558f37178a00 content::RunNamedProcessTypeMain()
#12 0x558f371792e8 content::ContentMainRunnerImpl::Run()
#13 0x558f37182f24 service_manager::Main()
#14 0x558f37177f14 content::ContentMain()
#15 0x558f3b2879b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558f3b287a42 headless::HeadlessBrowserMain()
#17 0x558f3717ff9d headless::HeadlessShellMain()
#18 0x558f357de1ac ChromeMain
#19 0x7f329b9082e1 __libc_start_main
#20 0x558f357de02a _start
  r8: 0000000000000000  r9: 00007ffd99a6ff30 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd99a70628 r13: 0000000000000161 r14: 00007ffd99a70630 r15: 00007ffd99a701c9
  di: 0000000000000002  si: 00007ffd99a6ff30  bp: 00007ffd99a70170  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f329b91afff  sp: 00007ffd99a6ffa8
  ip: 00007f329b91afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)

No informative reference to this spec from other specs.


## Pointer Lock 2.0 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/pointerlock/)
- Editor's Draft: [https://w3c.github.io/pointerlock/](https://w3c.github.io/pointerlock/)
- Latest published version: [https://www.w3.org/TR/pointerlock-2/](https://www.w3.org/TR/pointerlock-2/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-pointerlock-2-20180208/)
- Repository: [GitHub w3c/pointerlock](https://github.com/w3c/pointerlock)
- Shortname: pointerlock-2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020220.794536:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5654db981b0c base::debug::StackTrace::StackTrace()
#1 0x5654db99a780 logging::LogMessage::~LogMessage()
#2 0x5654daa2a2b1 content::ZygoteHostImpl::Init()
#3 0x5654da69cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5654da6a2a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5654df7cc9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5654db6bca00 content::RunNamedProcessTypeMain()
#7 0x5654db6bd2e8 content::ContentMainRunnerImpl::Run()
#8 0x5654db6c6f24 service_manager::Main()
#9 0x5654db6bbf14 content::ContentMain()
#10 0x5654df7cb9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5654df7cba42 headless::HeadlessBrowserMain()
#12 0x5654db6c3f9d headless::HeadlessShellMain()
#13 0x5654d9d221ac ChromeMain
#14 0x7fec9a8c42e1 __libc_start_main
#15 0x5654d9d2202a _start

Received signal 6
#0 0x5654db981b0c base::debug::StackTrace::StackTrace()
#1 0x5654db981671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7feca08210c0 <unknown>
#3 0x7fec9a8d6fff gsignal
#4 0x7fec9a8d842a abort
#5 0x5654db980105 base::debug::BreakDebugger()
#6 0x5654db99abca logging::LogMessage::~LogMessage()
#7 0x5654daa2a2b1 content::ZygoteHostImpl::Init()
#8 0x5654da69cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5654da6a2a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5654df7cc9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5654db6bca00 content::RunNamedProcessTypeMain()
#12 0x5654db6bd2e8 content::ContentMainRunnerImpl::Run()
#13 0x5654db6c6f24 service_manager::Main()
#14 0x5654db6bbf14 content::ContentMain()
#15 0x5654df7cb9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5654df7cba42 headless::HeadlessBrowserMain()
#17 0x5654db6c3f9d headless::HeadlessShellMain()
#18 0x5654d9d221ac ChromeMain
#19 0x7fec9a8c42e1 __libc_start_main
#20 0x5654d9d2202a _start
  r8: 0000000000000000  r9: 00007ffe77c40460 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe77c40b58 r13: 0000000000000161 r14: 00007ffe77c40b60 r15: 00007ffe77c406f9
  di: 0000000000000002  si: 00007ffe77c40460  bp: 00007ffe77c406a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fec9a8d6fff  sp: 00007ffe77c404d8
  ip: 00007fec9a8d6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020220.794536:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5654db981b0c base::debug::StackTrace::StackTrace()
#1 0x5654db99a780 logging::LogMessage::~LogMessage()
#2 0x5654daa2a2b1 content::ZygoteHostImpl::Init()
#3 0x5654da69cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5654da6a2a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5654df7cc9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5654db6bca00 content::RunNamedProcessTypeMain()
#7 0x5654db6bd2e8 content::ContentMainRunnerImpl::Run()
#8 0x5654db6c6f24 service_manager::Main()
#9 0x5654db6bbf14 content::ContentMain()
#10 0x5654df7cb9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5654df7cba42 headless::HeadlessBrowserMain()
#12 0x5654db6c3f9d headless::HeadlessShellMain()
#13 0x5654d9d221ac ChromeMain
#14 0x7fec9a8c42e1 __libc_start_main
#15 0x5654d9d2202a _start

Received signal 6
#0 0x5654db981b0c base::debug::StackTrace::StackTrace()
#1 0x5654db981671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7feca08210c0 <unknown>
#3 0x7fec9a8d6fff gsignal
#4 0x7fec9a8d842a abort
#5 0x5654db980105 base::debug::BreakDebugger()
#6 0x5654db99abca logging::LogMessage::~LogMessage()
#7 0x5654daa2a2b1 content::ZygoteHostImpl::Init()
#8 0x5654da69cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5654da6a2a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5654df7cc9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5654db6bca00 content::RunNamedProcessTypeMain()
#12 0x5654db6bd2e8 content::ContentMainRunnerImpl::Run()
#13 0x5654db6c6f24 service_manager::Main()
#14 0x5654db6bbf14 content::ContentMain()
#15 0x5654df7cb9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5654df7cba42 headless::HeadlessBrowserMain()
#17 0x5654db6c3f9d headless::HeadlessShellMain()
#18 0x5654d9d221ac ChromeMain
#19 0x7fec9a8c42e1 __libc_start_main
#20 0x5654d9d2202a _start
  r8: 0000000000000000  r9: 00007ffe77c40460 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe77c40b58 r13: 0000000000000161 r14: 00007ffe77c40b60 r15: 00007ffe77c406f9
  di: 0000000000000002  si: 00007ffe77c40460  bp: 00007ffe77c406a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fec9a8d6fff  sp: 00007ffe77c404d8
  ip: 00007fec9a8d6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML 5.3](https://w3c.github.io/html/)

Informative references to this spec from:

- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)


## Preload {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/preload/)
- Editor's Draft: [https://w3c.github.io/preload/](https://w3c.github.io/preload/)
- Latest published version: [https://www.w3.org/TR/preload/](https://www.w3.org/TR/preload/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-preload-20171026/)
- Repository: [GitHub w3c/preload](https://github.com/w3c/preload)
- Shortname: preload

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020220.817759:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55bfce0b8b0c base::debug::StackTrace::StackTrace()
#1 0x55bfce0d1780 logging::LogMessage::~LogMessage()
#2 0x55bfcd1612b1 content::ZygoteHostImpl::Init()
#3 0x55bfccdd3c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55bfccdd9a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55bfd1f039a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55bfcddf3a00 content::RunNamedProcessTypeMain()
#7 0x55bfcddf42e8 content::ContentMainRunnerImpl::Run()
#8 0x55bfcddfdf24 service_manager::Main()
#9 0x55bfcddf2f14 content::ContentMain()
#10 0x55bfd1f029b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55bfd1f02a42 headless::HeadlessBrowserMain()
#12 0x55bfcddfaf9d headless::HeadlessShellMain()
#13 0x55bfcc4591ac ChromeMain
#14 0x7f89535bf2e1 __libc_start_main
#15 0x55bfcc45902a _start

Received signal 6
#0 0x55bfce0b8b0c base::debug::StackTrace::StackTrace()
#1 0x55bfce0b8671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f895951c0c0 <unknown>
#3 0x7f89535d1fff gsignal
#4 0x7f89535d342a abort
#5 0x55bfce0b7105 base::debug::BreakDebugger()
#6 0x55bfce0d1bca logging::LogMessage::~LogMessage()
#7 0x55bfcd1612b1 content::ZygoteHostImpl::Init()
#8 0x55bfccdd3c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55bfccdd9a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55bfd1f039a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55bfcddf3a00 content::RunNamedProcessTypeMain()
#12 0x55bfcddf42e8 content::ContentMainRunnerImpl::Run()
#13 0x55bfcddfdf24 service_manager::Main()
#14 0x55bfcddf2f14 content::ContentMain()
#15 0x55bfd1f029b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55bfd1f02a42 headless::HeadlessBrowserMain()
#17 0x55bfcddfaf9d headless::HeadlessShellMain()
#18 0x55bfcc4591ac ChromeMain
#19 0x7f89535bf2e1 __libc_start_main
#20 0x55bfcc45902a _start
  r8: 0000000000000000  r9: 00007ffcbb66a8d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcbb66afc8 r13: 0000000000000161 r14: 00007ffcbb66afd0 r15: 00007ffcbb66ab69
  di: 0000000000000002  si: 00007ffcbb66a8d0  bp: 00007ffcbb66ab10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f89535d1fff  sp: 00007ffcbb66a948
  ip: 00007f89535d1fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020220.817759:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55bfce0b8b0c base::debug::StackTrace::StackTrace()
#1 0x55bfce0d1780 logging::LogMessage::~LogMessage()
#2 0x55bfcd1612b1 content::ZygoteHostImpl::Init()
#3 0x55bfccdd3c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55bfccdd9a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55bfd1f039a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55bfcddf3a00 content::RunNamedProcessTypeMain()
#7 0x55bfcddf42e8 content::ContentMainRunnerImpl::Run()
#8 0x55bfcddfdf24 service_manager::Main()
#9 0x55bfcddf2f14 content::ContentMain()
#10 0x55bfd1f029b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55bfd1f02a42 headless::HeadlessBrowserMain()
#12 0x55bfcddfaf9d headless::HeadlessShellMain()
#13 0x55bfcc4591ac ChromeMain
#14 0x7f89535bf2e1 __libc_start_main
#15 0x55bfcc45902a _start

Received signal 6
#0 0x55bfce0b8b0c base::debug::StackTrace::StackTrace()
#1 0x55bfce0b8671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f895951c0c0 <unknown>
#3 0x7f89535d1fff gsignal
#4 0x7f89535d342a abort
#5 0x55bfce0b7105 base::debug::BreakDebugger()
#6 0x55bfce0d1bca logging::LogMessage::~LogMessage()
#7 0x55bfcd1612b1 content::ZygoteHostImpl::Init()
#8 0x55bfccdd3c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55bfccdd9a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55bfd1f039a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55bfcddf3a00 content::RunNamedProcessTypeMain()
#12 0x55bfcddf42e8 content::ContentMainRunnerImpl::Run()
#13 0x55bfcddfdf24 service_manager::Main()
#14 0x55bfcddf2f14 content::ContentMain()
#15 0x55bfd1f029b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55bfd1f02a42 headless::HeadlessBrowserMain()
#17 0x55bfcddfaf9d headless::HeadlessShellMain()
#18 0x55bfcc4591ac ChromeMain
#19 0x7f89535bf2e1 __libc_start_main
#20 0x55bfcc45902a _start
  r8: 0000000000000000  r9: 00007ffcbb66a8d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcbb66afc8 r13: 0000000000000161 r14: 00007ffcbb66afd0 r15: 00007ffcbb66ab69
  di: 0000000000000002  si: 00007ffcbb66a8d0  bp: 00007ffcbb66ab10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f89535d1fff  sp: 00007ffcbb66a948
  ip: 00007f89535d1fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML 5.3](https://w3c.github.io/html/)

No informative reference to this spec from other specs.


## Presentation API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/presentation-api/)
- Editor's Draft: [https://w3c.github.io/presentation-api/](https://w3c.github.io/presentation-api/)
- Latest published version: [https://www.w3.org/TR/presentation-api/](https://www.w3.org/TR/presentation-api/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-presentation-api-20170601/)
- Repository: [GitHub w3c/presentation-api](https://github.com/w3c/presentation-api)
- Shortname: presentation-api

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020222.256756:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55a802016b0c base::debug::StackTrace::StackTrace()
#1 0x55a80202f780 logging::LogMessage::~LogMessage()
#2 0x55a8010bf2b1 content::ZygoteHostImpl::Init()
#3 0x55a800d31c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55a800d37a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55a805e619a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55a801d51a00 content::RunNamedProcessTypeMain()
#7 0x55a801d522e8 content::ContentMainRunnerImpl::Run()
#8 0x55a801d5bf24 service_manager::Main()
#9 0x55a801d50f14 content::ContentMain()
#10 0x55a805e609b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55a805e60a42 headless::HeadlessBrowserMain()
#12 0x55a801d58f9d headless::HeadlessShellMain()
#13 0x55a8003b71ac ChromeMain
#14 0x7f1b97b2b2e1 __libc_start_main
#15 0x55a8003b702a _start

Received signal 6
#0 0x55a802016b0c base::debug::StackTrace::StackTrace()
#1 0x55a802016671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1b9da880c0 <unknown>
#3 0x7f1b97b3dfff gsignal
#4 0x7f1b97b3f42a abort
#5 0x55a802015105 base::debug::BreakDebugger()
#6 0x55a80202fbca logging::LogMessage::~LogMessage()
#7 0x55a8010bf2b1 content::ZygoteHostImpl::Init()
#8 0x55a800d31c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55a800d37a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55a805e619a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55a801d51a00 content::RunNamedProcessTypeMain()
#12 0x55a801d522e8 content::ContentMainRunnerImpl::Run()
#13 0x55a801d5bf24 service_manager::Main()
#14 0x55a801d50f14 content::ContentMain()
#15 0x55a805e609b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55a805e60a42 headless::HeadlessBrowserMain()
#17 0x55a801d58f9d headless::HeadlessShellMain()
#18 0x55a8003b71ac ChromeMain
#19 0x7f1b97b2b2e1 __libc_start_main
#20 0x55a8003b702a _start
  r8: 0000000000000000  r9: 00007ffc2ca91c80 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc2ca92378 r13: 0000000000000161 r14: 00007ffc2ca92380 r15: 00007ffc2ca91f19
  di: 0000000000000002  si: 00007ffc2ca91c80  bp: 00007ffc2ca91ec0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1b97b3dfff  sp: 00007ffc2ca91cf8
  ip: 00007f1b97b3dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020222.256756:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55a802016b0c base::debug::StackTrace::StackTrace()
#1 0x55a80202f780 logging::LogMessage::~LogMessage()
#2 0x55a8010bf2b1 content::ZygoteHostImpl::Init()
#3 0x55a800d31c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55a800d37a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55a805e619a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55a801d51a00 content::RunNamedProcessTypeMain()
#7 0x55a801d522e8 content::ContentMainRunnerImpl::Run()
#8 0x55a801d5bf24 service_manager::Main()
#9 0x55a801d50f14 content::ContentMain()
#10 0x55a805e609b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55a805e60a42 headless::HeadlessBrowserMain()
#12 0x55a801d58f9d headless::HeadlessShellMain()
#13 0x55a8003b71ac ChromeMain
#14 0x7f1b97b2b2e1 __libc_start_main
#15 0x55a8003b702a _start

Received signal 6
#0 0x55a802016b0c base::debug::StackTrace::StackTrace()
#1 0x55a802016671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1b9da880c0 <unknown>
#3 0x7f1b97b3dfff gsignal
#4 0x7f1b97b3f42a abort
#5 0x55a802015105 base::debug::BreakDebugger()
#6 0x55a80202fbca logging::LogMessage::~LogMessage()
#7 0x55a8010bf2b1 content::ZygoteHostImpl::Init()
#8 0x55a800d31c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55a800d37a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55a805e619a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55a801d51a00 content::RunNamedProcessTypeMain()
#12 0x55a801d522e8 content::ContentMainRunnerImpl::Run()
#13 0x55a801d5bf24 service_manager::Main()
#14 0x55a801d50f14 content::ContentMain()
#15 0x55a805e609b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55a805e60a42 headless::HeadlessBrowserMain()
#17 0x55a801d58f9d headless::HeadlessShellMain()
#18 0x55a8003b71ac ChromeMain
#19 0x7f1b97b2b2e1 __libc_start_main
#20 0x55a8003b702a _start
  r8: 0000000000000000  r9: 00007ffc2ca91c80 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc2ca92378 r13: 0000000000000161 r14: 00007ffc2ca92380 r15: 00007ffc2ca91f19
  di: 0000000000000002  si: 00007ffc2ca91c80  bp: 00007ffc2ca91ec0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1b97b3dfff  sp: 00007ffc2ca91cf8
  ip: 00007f1b97b3dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML 5.3](https://w3c.github.io/html/)

No informative reference to this spec from other specs.


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

Normative references to this spec from:

- [HTML 5.3](https://w3c.github.io/html/)

No informative reference to this spec from other specs.


## Proximity Sensor {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/proximity/) (1 March 2018)
- Editor's Draft: [https://w3c.github.io/proximity/](https://w3c.github.io/proximity/)
- Latest published version: [http://www.w3.org/TR/proximity/](http://www.w3.org/TR/proximity/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-proximity-20160719/)
- Repository: [GitHub w3c/proximity](https://github.com/w3c/proximity)
- Shortname: proximity

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Push API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/push-api/)
- Editor's Draft: [https://w3c.github.io/push-api/](https://w3c.github.io/push-api/)
- Latest published version: [https://www.w3.org/TR/push-api/](https://www.w3.org/TR/push-api/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-push-api-20171215/)
- Repository: [GitHub w3c/push-api](https://github.com/w3c/push-api)
- Shortname: push-api

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020221.489147:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f236962b0c base::debug::StackTrace::StackTrace()
#1 0x55f23697b780 logging::LogMessage::~LogMessage()
#2 0x55f235a0b2b1 content::ZygoteHostImpl::Init()
#3 0x55f23567dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f235683a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f23a7ad9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f23669da00 content::RunNamedProcessTypeMain()
#7 0x55f23669e2e8 content::ContentMainRunnerImpl::Run()
#8 0x55f2366a7f24 service_manager::Main()
#9 0x55f23669cf14 content::ContentMain()
#10 0x55f23a7ac9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f23a7aca42 headless::HeadlessBrowserMain()
#12 0x55f2366a4f9d headless::HeadlessShellMain()
#13 0x55f234d031ac ChromeMain
#14 0x7fe2c708f2e1 __libc_start_main
#15 0x55f234d0302a _start

Received signal 6
#0 0x55f236962b0c base::debug::StackTrace::StackTrace()
#1 0x55f236962671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe2ccfec0c0 <unknown>
#3 0x7fe2c70a1fff gsignal
#4 0x7fe2c70a342a abort
#5 0x55f236961105 base::debug::BreakDebugger()
#6 0x55f23697bbca logging::LogMessage::~LogMessage()
#7 0x55f235a0b2b1 content::ZygoteHostImpl::Init()
#8 0x55f23567dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f235683a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f23a7ad9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f23669da00 content::RunNamedProcessTypeMain()
#12 0x55f23669e2e8 content::ContentMainRunnerImpl::Run()
#13 0x55f2366a7f24 service_manager::Main()
#14 0x55f23669cf14 content::ContentMain()
#15 0x55f23a7ac9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f23a7aca42 headless::HeadlessBrowserMain()
#17 0x55f2366a4f9d headless::HeadlessShellMain()
#18 0x55f234d031ac ChromeMain
#19 0x7fe2c708f2e1 __libc_start_main
#20 0x55f234d0302a _start
  r8: 0000000000000000  r9: 00007ffc3d0d2fd0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc3d0d36c8 r13: 0000000000000161 r14: 00007ffc3d0d36d0 r15: 00007ffc3d0d3269
  di: 0000000000000002  si: 00007ffc3d0d2fd0  bp: 00007ffc3d0d3210  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe2c70a1fff  sp: 00007ffc3d0d3048
  ip: 00007fe2c70a1fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020221.489147:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f236962b0c base::debug::StackTrace::StackTrace()
#1 0x55f23697b780 logging::LogMessage::~LogMessage()
#2 0x55f235a0b2b1 content::ZygoteHostImpl::Init()
#3 0x55f23567dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f235683a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f23a7ad9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f23669da00 content::RunNamedProcessTypeMain()
#7 0x55f23669e2e8 content::ContentMainRunnerImpl::Run()
#8 0x55f2366a7f24 service_manager::Main()
#9 0x55f23669cf14 content::ContentMain()
#10 0x55f23a7ac9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f23a7aca42 headless::HeadlessBrowserMain()
#12 0x55f2366a4f9d headless::HeadlessShellMain()
#13 0x55f234d031ac ChromeMain
#14 0x7fe2c708f2e1 __libc_start_main
#15 0x55f234d0302a _start

Received signal 6
#0 0x55f236962b0c base::debug::StackTrace::StackTrace()
#1 0x55f236962671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe2ccfec0c0 <unknown>
#3 0x7fe2c70a1fff gsignal
#4 0x7fe2c70a342a abort
#5 0x55f236961105 base::debug::BreakDebugger()
#6 0x55f23697bbca logging::LogMessage::~LogMessage()
#7 0x55f235a0b2b1 content::ZygoteHostImpl::Init()
#8 0x55f23567dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f235683a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f23a7ad9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f23669da00 content::RunNamedProcessTypeMain()
#12 0x55f23669e2e8 content::ContentMainRunnerImpl::Run()
#13 0x55f2366a7f24 service_manager::Main()
#14 0x55f23669cf14 content::ContentMain()
#15 0x55f23a7ac9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f23a7aca42 headless::HeadlessBrowserMain()
#17 0x55f2366a4f9d headless::HeadlessShellMain()
#18 0x55f234d031ac ChromeMain
#19 0x7fe2c708f2e1 __libc_start_main
#20 0x55f234d0302a _start
  r8: 0000000000000000  r9: 00007ffc3d0d2fd0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc3d0d36c8 r13: 0000000000000161 r14: 00007ffc3d0d36d0 r15: 00007ffc3d0d3269
  di: 0000000000000002  si: 00007ffc3d0d2fd0  bp: 00007ffc3d0d3210  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe2c70a1fff  sp: 00007ffc3d0d3048
  ip: 00007fe2c70a1fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Web Budget API](https://wicg.github.io/budget-api/)

Informative references to this spec from:

- [Permissions](https://w3c.github.io/permissions/)


## Referrer Policy {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webappsec-referrer-policy/) (20 April 2017)
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

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [HTML 5.3](https://w3c.github.io/html/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)

No informative reference to this spec from other specs.


## Remote Playback API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/remote-playback/)
- Editor's Draft: [https://w3c.github.io/remote-playback/](https://w3c.github.io/remote-playback/)
- Latest published version: [https://www.w3.org/TR/remote-playback/](https://www.w3.org/TR/remote-playback/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-remote-playback-20171019/)
- Repository: [GitHub w3c/remote-playback](https://github.com/w3c/remote-playback)
- Shortname: remote-playback

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020220.664404:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x559d9a339b0c base::debug::StackTrace::StackTrace()
#1 0x559d9a352780 logging::LogMessage::~LogMessage()
#2 0x559d993e22b1 content::ZygoteHostImpl::Init()
#3 0x559d99054c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x559d9905aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x559d9e1849a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x559d9a074a00 content::RunNamedProcessTypeMain()
#7 0x559d9a0752e8 content::ContentMainRunnerImpl::Run()
#8 0x559d9a07ef24 service_manager::Main()
#9 0x559d9a073f14 content::ContentMain()
#10 0x559d9e1839b9 headless::(anonymous namespace)::RunContentMain()
#11 0x559d9e183a42 headless::HeadlessBrowserMain()
#12 0x559d9a07bf9d headless::HeadlessShellMain()
#13 0x559d986da1ac ChromeMain
#14 0x7f682f6082e1 __libc_start_main
#15 0x559d986da02a _start

Received signal 6
#0 0x559d9a339b0c base::debug::StackTrace::StackTrace()
#1 0x559d9a339671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f68355650c0 <unknown>
#3 0x7f682f61afff gsignal
#4 0x7f682f61c42a abort
#5 0x559d9a338105 base::debug::BreakDebugger()
#6 0x559d9a352bca logging::LogMessage::~LogMessage()
#7 0x559d993e22b1 content::ZygoteHostImpl::Init()
#8 0x559d99054c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x559d9905aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x559d9e1849a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x559d9a074a00 content::RunNamedProcessTypeMain()
#12 0x559d9a0752e8 content::ContentMainRunnerImpl::Run()
#13 0x559d9a07ef24 service_manager::Main()
#14 0x559d9a073f14 content::ContentMain()
#15 0x559d9e1839b9 headless::(anonymous namespace)::RunContentMain()
#16 0x559d9e183a42 headless::HeadlessBrowserMain()
#17 0x559d9a07bf9d headless::HeadlessShellMain()
#18 0x559d986da1ac ChromeMain
#19 0x7f682f6082e1 __libc_start_main
#20 0x559d986da02a _start
  r8: 0000000000000000  r9: 00007ffd43b1d8a0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd43b1df98 r13: 0000000000000161 r14: 00007ffd43b1dfa0 r15: 00007ffd43b1db39
  di: 0000000000000002  si: 00007ffd43b1d8a0  bp: 00007ffd43b1dae0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f682f61afff  sp: 00007ffd43b1d918
  ip: 00007f682f61afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020220.664404:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x559d9a339b0c base::debug::StackTrace::StackTrace()
#1 0x559d9a352780 logging::LogMessage::~LogMessage()
#2 0x559d993e22b1 content::ZygoteHostImpl::Init()
#3 0x559d99054c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x559d9905aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x559d9e1849a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x559d9a074a00 content::RunNamedProcessTypeMain()
#7 0x559d9a0752e8 content::ContentMainRunnerImpl::Run()
#8 0x559d9a07ef24 service_manager::Main()
#9 0x559d9a073f14 content::ContentMain()
#10 0x559d9e1839b9 headless::(anonymous namespace)::RunContentMain()
#11 0x559d9e183a42 headless::HeadlessBrowserMain()
#12 0x559d9a07bf9d headless::HeadlessShellMain()
#13 0x559d986da1ac ChromeMain
#14 0x7f682f6082e1 __libc_start_main
#15 0x559d986da02a _start

Received signal 6
#0 0x559d9a339b0c base::debug::StackTrace::StackTrace()
#1 0x559d9a339671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f68355650c0 <unknown>
#3 0x7f682f61afff gsignal
#4 0x7f682f61c42a abort
#5 0x559d9a338105 base::debug::BreakDebugger()
#6 0x559d9a352bca logging::LogMessage::~LogMessage()
#7 0x559d993e22b1 content::ZygoteHostImpl::Init()
#8 0x559d99054c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x559d9905aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x559d9e1849a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x559d9a074a00 content::RunNamedProcessTypeMain()
#12 0x559d9a0752e8 content::ContentMainRunnerImpl::Run()
#13 0x559d9a07ef24 service_manager::Main()
#14 0x559d9a073f14 content::ContentMain()
#15 0x559d9e1839b9 headless::(anonymous namespace)::RunContentMain()
#16 0x559d9e183a42 headless::HeadlessBrowserMain()
#17 0x559d9a07bf9d headless::HeadlessShellMain()
#18 0x559d986da1ac ChromeMain
#19 0x7f682f6082e1 __libc_start_main
#20 0x559d986da02a _start
  r8: 0000000000000000  r9: 00007ffd43b1d8a0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd43b1df98 r13: 0000000000000161 r14: 00007ffd43b1dfa0 r15: 00007ffd43b1db39
  di: 0000000000000002  si: 00007ffd43b1d8a0  bp: 00007ffd43b1dae0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f682f61afff  sp: 00007ffd43b1d918
  ip: 00007f682f61afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)

No informative reference to this spec from other specs.


## Resize Observer 1 {data-spec=true data-anomaly=true data-hasInvalidIdl=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/ResizeObserver/) (20 March 2017)
- Repository: [GitHub wicg/ResizeObserver](https://github.com/wicg/ResizeObserver)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Invalid WebIDL content found
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/)
     * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Resource Timing Level 2 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/resource-timing/)
- Editor's Draft: [https://w3c.github.io/resource-timing/](https://w3c.github.io/resource-timing/)
- Latest published version: [https://www.w3.org/TR/resource-timing-2/](https://www.w3.org/TR/resource-timing-2/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-resource-timing-2-20180422/)
- Repository: [GitHub w3c/resource-timing](https://github.com/w3c/resource-timing)
- Shortname: resource-timing-2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020221.101690:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55deebb6ab0c base::debug::StackTrace::StackTrace()
#1 0x55deebb83780 logging::LogMessage::~LogMessage()
#2 0x55deeac132b1 content::ZygoteHostImpl::Init()
#3 0x55deea885c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55deea88ba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55deef9b59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55deeb8a5a00 content::RunNamedProcessTypeMain()
#7 0x55deeb8a62e8 content::ContentMainRunnerImpl::Run()
#8 0x55deeb8aff24 service_manager::Main()
#9 0x55deeb8a4f14 content::ContentMain()
#10 0x55deef9b49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55deef9b4a42 headless::HeadlessBrowserMain()
#12 0x55deeb8acf9d headless::HeadlessShellMain()
#13 0x55dee9f0b1ac ChromeMain
#14 0x7f57344a22e1 __libc_start_main
#15 0x55dee9f0b02a _start

Received signal 6
#0 0x55deebb6ab0c base::debug::StackTrace::StackTrace()
#1 0x55deebb6a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f573a3ff0c0 <unknown>
#3 0x7f57344b4fff gsignal
#4 0x7f57344b642a abort
#5 0x55deebb69105 base::debug::BreakDebugger()
#6 0x55deebb83bca logging::LogMessage::~LogMessage()
#7 0x55deeac132b1 content::ZygoteHostImpl::Init()
#8 0x55deea885c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55deea88ba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55deef9b59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55deeb8a5a00 content::RunNamedProcessTypeMain()
#12 0x55deeb8a62e8 content::ContentMainRunnerImpl::Run()
#13 0x55deeb8aff24 service_manager::Main()
#14 0x55deeb8a4f14 content::ContentMain()
#15 0x55deef9b49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55deef9b4a42 headless::HeadlessBrowserMain()
#17 0x55deeb8acf9d headless::HeadlessShellMain()
#18 0x55dee9f0b1ac ChromeMain
#19 0x7f57344a22e1 __libc_start_main
#20 0x55dee9f0b02a _start
  r8: 0000000000000000  r9: 00007ffcf48e4e90 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcf48e5588 r13: 0000000000000161 r14: 00007ffcf48e5590 r15: 00007ffcf48e5129
  di: 0000000000000002  si: 00007ffcf48e4e90  bp: 00007ffcf48e50d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f57344b4fff  sp: 00007ffcf48e4f08
  ip: 00007f57344b4fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020221.101690:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55deebb6ab0c base::debug::StackTrace::StackTrace()
#1 0x55deebb83780 logging::LogMessage::~LogMessage()
#2 0x55deeac132b1 content::ZygoteHostImpl::Init()
#3 0x55deea885c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55deea88ba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55deef9b59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55deeb8a5a00 content::RunNamedProcessTypeMain()
#7 0x55deeb8a62e8 content::ContentMainRunnerImpl::Run()
#8 0x55deeb8aff24 service_manager::Main()
#9 0x55deeb8a4f14 content::ContentMain()
#10 0x55deef9b49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55deef9b4a42 headless::HeadlessBrowserMain()
#12 0x55deeb8acf9d headless::HeadlessShellMain()
#13 0x55dee9f0b1ac ChromeMain
#14 0x7f57344a22e1 __libc_start_main
#15 0x55dee9f0b02a _start

Received signal 6
#0 0x55deebb6ab0c base::debug::StackTrace::StackTrace()
#1 0x55deebb6a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f573a3ff0c0 <unknown>
#3 0x7f57344b4fff gsignal
#4 0x7f57344b642a abort
#5 0x55deebb69105 base::debug::BreakDebugger()
#6 0x55deebb83bca logging::LogMessage::~LogMessage()
#7 0x55deeac132b1 content::ZygoteHostImpl::Init()
#8 0x55deea885c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55deea88ba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55deef9b59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55deeb8a5a00 content::RunNamedProcessTypeMain()
#12 0x55deeb8a62e8 content::ContentMainRunnerImpl::Run()
#13 0x55deeb8aff24 service_manager::Main()
#14 0x55deeb8a4f14 content::ContentMain()
#15 0x55deef9b49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55deef9b4a42 headless::HeadlessBrowserMain()
#17 0x55deeb8acf9d headless::HeadlessShellMain()
#18 0x55dee9f0b1ac ChromeMain
#19 0x7f57344a22e1 __libc_start_main
#20 0x55dee9f0b02a _start
  r8: 0000000000000000  r9: 00007ffcf48e4e90 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcf48e5588 r13: 0000000000000161 r14: 00007ffcf48e5590 r15: 00007ffcf48e5129
  di: 0000000000000002  si: 00007ffcf48e4e90  bp: 00007ffcf48e50d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f57344b4fff  sp: 00007ffcf48e4f08
  ip: 00007f57344b4fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Scalable Vector Graphics (SVG) 2 {data-spec=true data-anomaly=true data-hasInvalidIdl=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://svgwg.org/svg2-draft/) (10 May 2018)
- Editor's Draft: [https://svgwg.org/svg2-draft/](https://svgwg.org/svg2-draft/)
- Latest published version: [https://www.w3.org/TR/SVG2/](https://www.w3.org/TR/SVG2/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2016/CR-SVG2-20160915/)
- Repository: [GitHub w3c/svgwg](https://github.com/w3c/svgwg)
- Shortname: SVG2

### Potential issue(s) {.anomalies}

- Invalid WebIDL content found
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
     * [`https://www.w3.org/TR/wai-aria/states_and_properties`](https://www.w3.org/TR/wai-aria/states_and_properties)
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
     * [`https://w3c.github.io/webcomponents/spec/shadow/`](https://w3c.github.io/webcomponents/spec/shadow/)
     * [`https://www.w3.org/TR/smil/`](https://www.w3.org/TR/smil/)
     * [`https://w3c.github.io/aria/svg-aam/svg-aam.html`](https://w3c.github.io/aria/svg-aam/svg-aam.html)
     * [`https://www.w3.org/TR/xsl/`](https://www.w3.org/TR/xsl/)
     * [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/)
     * [`https://www.w3.org/TR/2015/WD-svg-markers-20150407/`](https://www.w3.org/TR/2015/WD-svg-markers-20150407/)
     * [`https://www.w3.org/TR/2015/WD-svg-strokes-20150407/`](https://www.w3.org/TR/2015/WD-svg-strokes-20150407/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/2008/REC-xml-20081126/`](https://www.w3.org/TR/2008/REC-xml-20081126/), related reference "xml" uses URL [`https://www.w3.org/TR/xml`](https://www.w3.org/TR/xml)
     * [`https://www.w3.org/TR/2006/REC-xml-names-20060816/`](https://www.w3.org/TR/2006/REC-xml-names-20060816/), related reference "xml-names" uses URL [`https://www.w3.org/TR/xml-names`](https://www.w3.org/TR/xml-names)
     * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/), related reference "css-values" uses URL [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/)
     * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
     * [`https://www.w3.org/TR/2011/REC-CSS2-20110607/`](https://www.w3.org/TR/2011/REC-CSS2-20110607/), related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2`](https://www.w3.org/TR/CSS2)
     * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/), related reference "dom" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
     * [`https://www.w3.org/TR/compositing/`](https://www.w3.org/TR/compositing/), related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
     * [`https://www.w3.org/TR/2015/CR-compositing-1-20150113/`](https://www.w3.org/TR/2015/CR-compositing-1-20150113/), related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
     * [`https://www.w3.org/TR/2015/CR-compositing-1-20150113`](https://www.w3.org/TR/2015/CR-compositing-1-20150113), related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
     * [`https://www.w3.org/TR/2012/WD-css3-values-20120308/`](https://www.w3.org/TR/2012/WD-css3-values-20120308/), related reference "css-values" uses URL [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/)
     * [`https://www.w3.org/TR/2014/CR-html5-20140204/`](https://www.w3.org/TR/2014/CR-html5-20140204/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
     * [`https://www.w3.org/TR/2014/WD-dom-20140204/`](https://www.w3.org/TR/2014/WD-dom-20140204/), related reference "dom" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
     * [`https://www.w3.org/TR/2012/WD-compositing-20120816/`](https://www.w3.org/TR/2012/WD-compositing-20120816/), related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
     * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/), related reference "css-writing-modes-3" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
     * [`https://www.w3.org/TR/2011/WD-css3-fonts-20111004/`](https://www.w3.org/TR/2011/WD-css3-fonts-20111004/), related reference "css-fonts-3" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
     * [`https://www.w3.org/TR/2015/CR-css-ui-3-20150707/`](https://www.w3.org/TR/2015/CR-css-ui-3-20150707/), related reference "css-ui-3" uses URL [`https://www.w3.org/TR/css-ui-3/`](https://www.w3.org/TR/css-ui-3/)
     * [`https://www.w3.org/TR/2001/REC-smil-animation-20010904/`](https://www.w3.org/TR/2001/REC-smil-animation-20010904/), related reference "smil-animation" uses URL [`https://www.w3.org/TR/smil-animation/`](https://www.w3.org/TR/smil-animation/)
     * [`https://www.w3.org/TR/2013/WD-shadow-dom-20130514/`](https://www.w3.org/TR/2013/WD-shadow-dom-20130514/), related reference "shadow-dom" uses URL [`https://www.w3.org/TR/shadow-dom/`](https://www.w3.org/TR/shadow-dom/)
     * [`https://www.w3.org/TR/2001/REC-xlink-20010627/`](https://www.w3.org/TR/2001/REC-xlink-20010627/), related reference "xlink" uses URL [`https://www.w3.org/TR/xlink/`](https://www.w3.org/TR/xlink/)
     * [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Views-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Views-20001113/), related reference "DOM-Level-2-Views" uses URL [`https://www.w3.org/TR/DOM-Level-2-Views`](https://www.w3.org/TR/DOM-Level-2-Views)
     * [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/), related reference "DOM-Level-2-Style" uses URL [`https://www.w3.org/TR/DOM-Level-2-Style/`](https://www.w3.org/TR/DOM-Level-2-Style/)
     * [`https://www.w3.org/TR/2012/WD-css3-animations-20120403/`](https://www.w3.org/TR/2012/WD-css3-animations-20120403/), related reference "css3-animations" uses URL [`https://www.w3.org/TR/css3-animations/`](https://www.w3.org/TR/css3-animations/)
     * [`https://w3c.github.io/dom/`](https://w3c.github.io/dom/), related reference "dom" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
     * [`https://w3c.github.io/html/`](https://w3c.github.io/html/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
     * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/), related reference "uievents" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
     * [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/), related reference "web-animations-1" uses URL [`https://www.w3.org/TR/web-animations-1/`](https://www.w3.org/TR/web-animations-1/)
     * [`https://www.w3.org/TR/2015/NOTE-UAAG20-20151215/`](https://www.w3.org/TR/2015/NOTE-UAAG20-20151215/), related reference "UAAG20" uses URL [`https://www.w3.org/TR/UAAG20/`](https://www.w3.org/TR/UAAG20/)
     * [`https://www.w3.org/TR/2008/REC-CSS2-20080411/`](https://www.w3.org/TR/2008/REC-CSS2-20080411/), related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2`](https://www.w3.org/TR/CSS2)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compositing and Blending Level 1](https://drafts.fxtf.org/compositing-1/)
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/)
- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [CSS Writing Modes Level 3](https://drafts.csswg.org/css-writing-modes-3/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [HTML 5.3](https://w3c.github.io/html/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [Web Animations](https://w3c.github.io/web-animations/)

Informative references to this spec from:

- [Clipboard API and events](https://w3c.github.io/clipboard-apis/)
- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)
- [CSS Transitions](https://drafts.csswg.org/css-transitions/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
- [Selectors Level 3](https://www.w3.org/TR/css3-selectors/)


## Screen Capture {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-screen-share/)
- Editor's Draft: [https://w3c.github.io/mediacapture-screen-share/](https://w3c.github.io/mediacapture-screen-share/)
- Latest published version: [http://www.w3.org/TR/screen-capture/](http://www.w3.org/TR/screen-capture/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-screen-capture-20160714/)
- Repository: [GitHub w3c/mediacapture-screen-share](https://github.com/w3c/mediacapture-screen-share)
- Shortname: screen-capture

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020223.393897:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561a7725fb0c base::debug::StackTrace::StackTrace()
#1 0x561a77278780 logging::LogMessage::~LogMessage()
#2 0x561a763082b1 content::ZygoteHostImpl::Init()
#3 0x561a75f7ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561a75f80a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x561a7b0aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x561a76f9aa00 content::RunNamedProcessTypeMain()
#7 0x561a76f9b2e8 content::ContentMainRunnerImpl::Run()
#8 0x561a76fa4f24 service_manager::Main()
#9 0x561a76f99f14 content::ContentMain()
#10 0x561a7b0a99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x561a7b0a9a42 headless::HeadlessBrowserMain()
#12 0x561a76fa1f9d headless::HeadlessShellMain()
#13 0x561a756001ac ChromeMain
#14 0x7f2ceed2f2e1 __libc_start_main
#15 0x561a7560002a _start

Received signal 6
#0 0x561a7725fb0c base::debug::StackTrace::StackTrace()
#1 0x561a7725f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2cf4c8c0c0 <unknown>
#3 0x7f2ceed41fff gsignal
#4 0x7f2ceed4342a abort
#5 0x561a7725e105 base::debug::BreakDebugger()
#6 0x561a77278bca logging::LogMessage::~LogMessage()
#7 0x561a763082b1 content::ZygoteHostImpl::Init()
#8 0x561a75f7ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561a75f80a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x561a7b0aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x561a76f9aa00 content::RunNamedProcessTypeMain()
#12 0x561a76f9b2e8 content::ContentMainRunnerImpl::Run()
#13 0x561a76fa4f24 service_manager::Main()
#14 0x561a76f99f14 content::ContentMain()
#15 0x561a7b0a99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x561a7b0a9a42 headless::HeadlessBrowserMain()
#17 0x561a76fa1f9d headless::HeadlessShellMain()
#18 0x561a756001ac ChromeMain
#19 0x7f2ceed2f2e1 __libc_start_main
#20 0x561a7560002a _start
  r8: 0000000000000000  r9: 00007ffe0b353560 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe0b353c58 r13: 0000000000000161 r14: 00007ffe0b353c60 r15: 00007ffe0b3537f9
  di: 0000000000000002  si: 00007ffe0b353560  bp: 00007ffe0b3537a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2ceed41fff  sp: 00007ffe0b3535d8
  ip: 00007f2ceed41fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020223.393897:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561a7725fb0c base::debug::StackTrace::StackTrace()
#1 0x561a77278780 logging::LogMessage::~LogMessage()
#2 0x561a763082b1 content::ZygoteHostImpl::Init()
#3 0x561a75f7ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561a75f80a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x561a7b0aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x561a76f9aa00 content::RunNamedProcessTypeMain()
#7 0x561a76f9b2e8 content::ContentMainRunnerImpl::Run()
#8 0x561a76fa4f24 service_manager::Main()
#9 0x561a76f99f14 content::ContentMain()
#10 0x561a7b0a99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x561a7b0a9a42 headless::HeadlessBrowserMain()
#12 0x561a76fa1f9d headless::HeadlessShellMain()
#13 0x561a756001ac ChromeMain
#14 0x7f2ceed2f2e1 __libc_start_main
#15 0x561a7560002a _start

Received signal 6
#0 0x561a7725fb0c base::debug::StackTrace::StackTrace()
#1 0x561a7725f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2cf4c8c0c0 <unknown>
#3 0x7f2ceed41fff gsignal
#4 0x7f2ceed4342a abort
#5 0x561a7725e105 base::debug::BreakDebugger()
#6 0x561a77278bca logging::LogMessage::~LogMessage()
#7 0x561a763082b1 content::ZygoteHostImpl::Init()
#8 0x561a75f7ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561a75f80a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x561a7b0aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x561a76f9aa00 content::RunNamedProcessTypeMain()
#12 0x561a76f9b2e8 content::ContentMainRunnerImpl::Run()
#13 0x561a76fa4f24 service_manager::Main()
#14 0x561a76f99f14 content::ContentMain()
#15 0x561a7b0a99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x561a7b0a9a42 headless::HeadlessBrowserMain()
#17 0x561a76fa1f9d headless::HeadlessShellMain()
#18 0x561a756001ac ChromeMain
#19 0x7f2ceed2f2e1 __libc_start_main
#20 0x561a7560002a _start
  r8: 0000000000000000  r9: 00007ffe0b353560 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe0b353c58 r13: 0000000000000161 r14: 00007ffe0b353c60 r15: 00007ffe0b3537f9
  di: 0000000000000002  si: 00007ffe0b353560  bp: 00007ffe0b3537a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2ceed41fff  sp: 00007ffe0b3535d8
  ip: 00007f2ceed41fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

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


## Secure Contexts {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webappsec-secure-contexts/) (19 January 2018)
- Editor's Draft: [https://w3c.github.io/webappsec-secure-contexts/](https://w3c.github.io/webappsec-secure-contexts/)
- Latest published version: [https://www.w3.org/TR/secure-contexts/](https://www.w3.org/TR/secure-contexts/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/)
- Repository: [GitHub w3c/webappsec-secure-contexts](https://github.com/w3c/webappsec-secure-contexts)
- Shortname: secure-contexts

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `WindowOrWorkerGlobalScope`
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/), related reference "MIX" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/)
- [DeviceOrientation Event Specification](https://w3c.github.io/deviceorientation/spec-source-orientation.html)
- [Generic Sensor API](https://w3c.github.io/sensors/)
- [HTML 5.3](https://w3c.github.io/html/)
- [MediaStream Recording](https://w3c.github.io/mediacapture-record/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)
- [Permissions](https://w3c.github.io/permissions/)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web Budget API](https://wicg.github.io/budget-api/)
- [Web IDL](https://heycam.github.io/webidl/)

Informative references to this spec from:

- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/)
- [WebUSB API](https://wicg.github.io/webusb/)


## Selection API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/selection-api/)
- Editor's Draft: [https://w3c.github.io/selection-api/](https://w3c.github.io/selection-api/)
- Latest published version: [https://www.w3.org/TR/selection-api/](https://www.w3.org/TR/selection-api/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-selection-api-20180402/)
- Repository: [GitHub w3c/selection-api](https://github.com/w3c/selection-api)
- Shortname: selection-api

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020223.571330:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f985c07b0c base::debug::StackTrace::StackTrace()
#1 0x55f985c20780 logging::LogMessage::~LogMessage()
#2 0x55f984cb02b1 content::ZygoteHostImpl::Init()
#3 0x55f984922c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f984928a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f989a529a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f985942a00 content::RunNamedProcessTypeMain()
#7 0x55f9859432e8 content::ContentMainRunnerImpl::Run()
#8 0x55f98594cf24 service_manager::Main()
#9 0x55f985941f14 content::ContentMain()
#10 0x55f989a519b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f989a51a42 headless::HeadlessBrowserMain()
#12 0x55f985949f9d headless::HeadlessShellMain()
#13 0x55f983fa81ac ChromeMain
#14 0x7f430c1fb2e1 __libc_start_main
#15 0x55f983fa802a _start

Received signal 6
#0 0x55f985c07b0c base::debug::StackTrace::StackTrace()
#1 0x55f985c07671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f43121580c0 <unknown>
#3 0x7f430c20dfff gsignal
#4 0x7f430c20f42a abort
#5 0x55f985c06105 base::debug::BreakDebugger()
#6 0x55f985c20bca logging::LogMessage::~LogMessage()
#7 0x55f984cb02b1 content::ZygoteHostImpl::Init()
#8 0x55f984922c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f984928a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f989a529a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f985942a00 content::RunNamedProcessTypeMain()
#12 0x55f9859432e8 content::ContentMainRunnerImpl::Run()
#13 0x55f98594cf24 service_manager::Main()
#14 0x55f985941f14 content::ContentMain()
#15 0x55f989a519b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f989a51a42 headless::HeadlessBrowserMain()
#17 0x55f985949f9d headless::HeadlessShellMain()
#18 0x55f983fa81ac ChromeMain
#19 0x7f430c1fb2e1 __libc_start_main
#20 0x55f983fa802a _start
  r8: 0000000000000000  r9: 00007ffc85d16390 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc85d16a88 r13: 0000000000000161 r14: 00007ffc85d16a90 r15: 00007ffc85d16629
  di: 0000000000000002  si: 00007ffc85d16390  bp: 00007ffc85d165d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f430c20dfff  sp: 00007ffc85d16408
  ip: 00007f430c20dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020223.571330:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f985c07b0c base::debug::StackTrace::StackTrace()
#1 0x55f985c20780 logging::LogMessage::~LogMessage()
#2 0x55f984cb02b1 content::ZygoteHostImpl::Init()
#3 0x55f984922c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f984928a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f989a529a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f985942a00 content::RunNamedProcessTypeMain()
#7 0x55f9859432e8 content::ContentMainRunnerImpl::Run()
#8 0x55f98594cf24 service_manager::Main()
#9 0x55f985941f14 content::ContentMain()
#10 0x55f989a519b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f989a51a42 headless::HeadlessBrowserMain()
#12 0x55f985949f9d headless::HeadlessShellMain()
#13 0x55f983fa81ac ChromeMain
#14 0x7f430c1fb2e1 __libc_start_main
#15 0x55f983fa802a _start

Received signal 6
#0 0x55f985c07b0c base::debug::StackTrace::StackTrace()
#1 0x55f985c07671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f43121580c0 <unknown>
#3 0x7f430c20dfff gsignal
#4 0x7f430c20f42a abort
#5 0x55f985c06105 base::debug::BreakDebugger()
#6 0x55f985c20bca logging::LogMessage::~LogMessage()
#7 0x55f984cb02b1 content::ZygoteHostImpl::Init()
#8 0x55f984922c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f984928a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f989a529a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f985942a00 content::RunNamedProcessTypeMain()
#12 0x55f9859432e8 content::ContentMainRunnerImpl::Run()
#13 0x55f98594cf24 service_manager::Main()
#14 0x55f985941f14 content::ContentMain()
#15 0x55f989a519b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f989a51a42 headless::HeadlessBrowserMain()
#17 0x55f985949f9d headless::HeadlessShellMain()
#18 0x55f983fa81ac ChromeMain
#19 0x7f430c1fb2e1 __libc_start_main
#20 0x55f983fa802a _start
  r8: 0000000000000000  r9: 00007ffc85d16390 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc85d16a88 r13: 0000000000000161 r14: 00007ffc85d16a90 r15: 00007ffc85d16629
  di: 0000000000000002  si: 00007ffc85d16390  bp: 00007ffc85d165d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f430c20dfff  sp: 00007ffc85d16408
  ip: 00007f430c20dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML 5.3](https://w3c.github.io/html/)

No informative reference to this spec from other specs.


## Selectors API Level 1 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/selectors-api/) (21 February 2013)
- Latest published version: [http://www.w3.org/TR/selectors-api/](http://www.w3.org/TR/selectors-api/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2013/REC-selectors-api-20130221/)
- Shortname: selectors-api

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/), related reference "SELECT" uses URL [`http://www.w3.org/TR/2011/REC-css3-selectors-20110929/`](http://www.w3.org/TR/2011/REC-css3-selectors-20110929/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Selectors Level 3 {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-noIdlContent=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/css3-selectors/) (30 January 2018)
- Latest published version: [https://www.w3.org/TR/selectors-3/](https://www.w3.org/TR/selectors-3/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-selectors-3-20180130/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css3-selectors

### Potential issue(s) {.anomalies}

- No WebIDL definitions found
- Missing references for links: 
     * [`https://www.w3.org/TR/css3-namespace/`](https://www.w3.org/TR/css3-namespace/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/)
- [Selectors API Level 1](https://www.w3.org/TR/selectors-api/)
- [Web Animations](https://w3c.github.io/web-animations/)

Informative references to this spec from:

- [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)


## Server Timing {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/server-timing/)
- Editor's Draft: [https://w3c.github.io/server-timing/](https://w3c.github.io/server-timing/)
- Latest published version: [https://www.w3.org/TR/server-timing/](https://www.w3.org/TR/server-timing/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-server-timing-20171229/)
- Repository: [GitHub w3c/server-timing](https://github.com/w3c/server-timing)
- Shortname: server-timing

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020224.000952:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55951d434b0c base::debug::StackTrace::StackTrace()
#1 0x55951d44d780 logging::LogMessage::~LogMessage()
#2 0x55951c4dd2b1 content::ZygoteHostImpl::Init()
#3 0x55951c14fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55951c155a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55952127f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55951d16fa00 content::RunNamedProcessTypeMain()
#7 0x55951d1702e8 content::ContentMainRunnerImpl::Run()
#8 0x55951d179f24 service_manager::Main()
#9 0x55951d16ef14 content::ContentMain()
#10 0x55952127e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55952127ea42 headless::HeadlessBrowserMain()
#12 0x55951d176f9d headless::HeadlessShellMain()
#13 0x55951b7d51ac ChromeMain
#14 0x7f75960b82e1 __libc_start_main
#15 0x55951b7d502a _start

Received signal 6
#0 0x55951d434b0c base::debug::StackTrace::StackTrace()
#1 0x55951d434671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f759c0150c0 <unknown>
#3 0x7f75960cafff gsignal
#4 0x7f75960cc42a abort
#5 0x55951d433105 base::debug::BreakDebugger()
#6 0x55951d44dbca logging::LogMessage::~LogMessage()
#7 0x55951c4dd2b1 content::ZygoteHostImpl::Init()
#8 0x55951c14fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55951c155a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55952127f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55951d16fa00 content::RunNamedProcessTypeMain()
#12 0x55951d1702e8 content::ContentMainRunnerImpl::Run()
#13 0x55951d179f24 service_manager::Main()
#14 0x55951d16ef14 content::ContentMain()
#15 0x55952127e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55952127ea42 headless::HeadlessBrowserMain()
#17 0x55951d176f9d headless::HeadlessShellMain()
#18 0x55951b7d51ac ChromeMain
#19 0x7f75960b82e1 __libc_start_main
#20 0x55951b7d502a _start
  r8: 0000000000000000  r9: 00007ffd339274b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd33927ba8 r13: 0000000000000161 r14: 00007ffd33927bb0 r15: 00007ffd33927749
  di: 0000000000000002  si: 00007ffd339274b0  bp: 00007ffd339276f0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f75960cafff  sp: 00007ffd33927528
  ip: 00007f75960cafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020224.000952:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55951d434b0c base::debug::StackTrace::StackTrace()
#1 0x55951d44d780 logging::LogMessage::~LogMessage()
#2 0x55951c4dd2b1 content::ZygoteHostImpl::Init()
#3 0x55951c14fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55951c155a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55952127f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55951d16fa00 content::RunNamedProcessTypeMain()
#7 0x55951d1702e8 content::ContentMainRunnerImpl::Run()
#8 0x55951d179f24 service_manager::Main()
#9 0x55951d16ef14 content::ContentMain()
#10 0x55952127e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55952127ea42 headless::HeadlessBrowserMain()
#12 0x55951d176f9d headless::HeadlessShellMain()
#13 0x55951b7d51ac ChromeMain
#14 0x7f75960b82e1 __libc_start_main
#15 0x55951b7d502a _start

Received signal 6
#0 0x55951d434b0c base::debug::StackTrace::StackTrace()
#1 0x55951d434671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f759c0150c0 <unknown>
#3 0x7f75960cafff gsignal
#4 0x7f75960cc42a abort
#5 0x55951d433105 base::debug::BreakDebugger()
#6 0x55951d44dbca logging::LogMessage::~LogMessage()
#7 0x55951c4dd2b1 content::ZygoteHostImpl::Init()
#8 0x55951c14fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55951c155a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55952127f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55951d16fa00 content::RunNamedProcessTypeMain()
#12 0x55951d1702e8 content::ContentMainRunnerImpl::Run()
#13 0x55951d179f24 service_manager::Main()
#14 0x55951d16ef14 content::ContentMain()
#15 0x55952127e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55952127ea42 headless::HeadlessBrowserMain()
#17 0x55951d176f9d headless::HeadlessShellMain()
#18 0x55951b7d51ac ChromeMain
#19 0x7f75960b82e1 __libc_start_main
#20 0x55951b7d502a _start
  r8: 0000000000000000  r9: 00007ffd339274b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd33927ba8 r13: 0000000000000161 r14: 00007ffd33927bb0 r15: 00007ffd33927749
  di: 0000000000000002  si: 00007ffd339274b0  bp: 00007ffd339276f0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f75960cafff  sp: 00007ffd33927528
  ip: 00007f75960cafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

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

Normative references to this spec from:

- [HTML 5.3](https://w3c.github.io/html/)

Informative references to this spec from:

- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)


## Service Workers 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/ServiceWorker/v1/) (24 April 2018)
- Editor's Draft: [https://w3c.github.io/ServiceWorker/v1/](https://w3c.github.io/ServiceWorker/v1/)
- Latest published version: [https://www.w3.org/TR/service-workers-1/](https://www.w3.org/TR/service-workers-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/)
- Repository: [GitHub w3c/ServiceWorker](https://github.com/w3c/ServiceWorker)
- Shortname: service-workers-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Navigator`, `VisibilityState`, `Window`, `WindowOrWorkerGlobalScope`
- WebIDL names also defined elsewhere: 
    * `Worker` also defined in [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
- Missing references for links: 
     * [`https://w3c.github.io/push-api/`](https://w3c.github.io/push-api/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-referrer-policy/`](https://w3c.github.io/webappsec-referrer-policy/), related reference "REFERRER-POLICY" uses URL [`https://www.w3.org/TR/referrer-policy/`](https://www.w3.org/TR/referrer-policy/)
     * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/), related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/), related reference "CSP-3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)
- [HTML 5.3](https://w3c.github.io/html/)
- [W3C DOM 4.1](https://w3c.github.io/dom/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Console Standard](https://console.spec.whatwg.org/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [Encoding Standard](https://encoding.spec.whatwg.org/)
- [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html)

Informative references to this spec from:

- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)
- [Streams Standard](https://streams.spec.whatwg.org/)


## Static Range {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/staticrange/) (14 December 2017)
- Repository: [GitHub w3c/staticrange](https://github.com/w3c/staticrange)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Storage Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://storage.spec.whatwg.org/) (9 January 2018)
- Repository: [GitHub whatwg/storage](https://github.com/whatwg/storage)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Permissions](https://w3c.github.io/permissions/)

No informative reference to this spec from other specs.


## Streams Standard {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-noIdlContent=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://streams.spec.whatwg.org/) (1 May 2018)
- Repository: [GitHub whatwg/streams](https://github.com/whatwg/streams)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- No WebIDL definitions found

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File API](https://w3c.github.io/FileAPI/)

No informative reference to this spec from other specs.


## Subresource Integrity {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webappsec-subresource-integrity/) (26 August 2016)
- Editor's Draft: [https://w3c.github.io/webappsec-subresource-integrity/](https://w3c.github.io/webappsec-subresource-integrity/)
- Latest published version: [http://www.w3.org/TR/SRI/](http://www.w3.org/TR/SRI/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2016/REC-SRI-20160623/)
- Repository: [GitHub w3c/webappsec-subresource-integrity](https://github.com/w3c/webappsec-subresource-integrity)
- Shortname: SRI

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Unknown WebIDL names used: `HTMLLinkElement`, `HTMLScriptElement`
- Missing references for links: 
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [HTML 5.3](https://w3c.github.io/html/)

Informative references to this spec from:

- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)


## The Screen Orientation API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/screen-orientation/)
- Editor's Draft: [https://w3c.github.io/screen-orientation/](https://w3c.github.io/screen-orientation/)
- Latest published version: [https://www.w3.org/TR/screen-orientation/](https://www.w3.org/TR/screen-orientation/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-screen-orientation-20180509/)
- Repository: [GitHub w3c/screen-orientation](https://github.com/w3c/screen-orientation)
- Shortname: screen-orientation

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020223.366184:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x565174f8fb0c base::debug::StackTrace::StackTrace()
#1 0x565174fa8780 logging::LogMessage::~LogMessage()
#2 0x5651740382b1 content::ZygoteHostImpl::Init()
#3 0x565173caac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x565173cb0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x565178dda9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x565174ccaa00 content::RunNamedProcessTypeMain()
#7 0x565174ccb2e8 content::ContentMainRunnerImpl::Run()
#8 0x565174cd4f24 service_manager::Main()
#9 0x565174cc9f14 content::ContentMain()
#10 0x565178dd99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x565178dd9a42 headless::HeadlessBrowserMain()
#12 0x565174cd1f9d headless::HeadlessShellMain()
#13 0x5651733301ac ChromeMain
#14 0x7fb8a81ae2e1 __libc_start_main
#15 0x56517333002a _start

Received signal 6
#0 0x565174f8fb0c base::debug::StackTrace::StackTrace()
#1 0x565174f8f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb8ae10b0c0 <unknown>
#3 0x7fb8a81c0fff gsignal
#4 0x7fb8a81c242a abort
#5 0x565174f8e105 base::debug::BreakDebugger()
#6 0x565174fa8bca logging::LogMessage::~LogMessage()
#7 0x5651740382b1 content::ZygoteHostImpl::Init()
#8 0x565173caac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x565173cb0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x565178dda9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x565174ccaa00 content::RunNamedProcessTypeMain()
#12 0x565174ccb2e8 content::ContentMainRunnerImpl::Run()
#13 0x565174cd4f24 service_manager::Main()
#14 0x565174cc9f14 content::ContentMain()
#15 0x565178dd99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x565178dd9a42 headless::HeadlessBrowserMain()
#17 0x565174cd1f9d headless::HeadlessShellMain()
#18 0x5651733301ac ChromeMain
#19 0x7fb8a81ae2e1 __libc_start_main
#20 0x56517333002a _start
  r8: 0000000000000000  r9: 00007ffdf9f67520 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdf9f67c18 r13: 0000000000000161 r14: 00007ffdf9f67c20 r15: 00007ffdf9f677b9
  di: 0000000000000002  si: 00007ffdf9f67520  bp: 00007ffdf9f67760  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb8a81c0fff  sp: 00007ffdf9f67598
  ip: 00007fb8a81c0fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020223.366184:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x565174f8fb0c base::debug::StackTrace::StackTrace()
#1 0x565174fa8780 logging::LogMessage::~LogMessage()
#2 0x5651740382b1 content::ZygoteHostImpl::Init()
#3 0x565173caac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x565173cb0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x565178dda9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x565174ccaa00 content::RunNamedProcessTypeMain()
#7 0x565174ccb2e8 content::ContentMainRunnerImpl::Run()
#8 0x565174cd4f24 service_manager::Main()
#9 0x565174cc9f14 content::ContentMain()
#10 0x565178dd99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x565178dd9a42 headless::HeadlessBrowserMain()
#12 0x565174cd1f9d headless::HeadlessShellMain()
#13 0x5651733301ac ChromeMain
#14 0x7fb8a81ae2e1 __libc_start_main
#15 0x56517333002a _start

Received signal 6
#0 0x565174f8fb0c base::debug::StackTrace::StackTrace()
#1 0x565174f8f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb8ae10b0c0 <unknown>
#3 0x7fb8a81c0fff gsignal
#4 0x7fb8a81c242a abort
#5 0x565174f8e105 base::debug::BreakDebugger()
#6 0x565174fa8bca logging::LogMessage::~LogMessage()
#7 0x5651740382b1 content::ZygoteHostImpl::Init()
#8 0x565173caac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x565173cb0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x565178dda9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x565174ccaa00 content::RunNamedProcessTypeMain()
#12 0x565174ccb2e8 content::ContentMainRunnerImpl::Run()
#13 0x565174cd4f24 service_manager::Main()
#14 0x565174cc9f14 content::ContentMain()
#15 0x565178dd99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x565178dd9a42 headless::HeadlessBrowserMain()
#17 0x565174cd1f9d headless::HeadlessShellMain()
#18 0x5651733301ac ChromeMain
#19 0x7fb8a81ae2e1 __libc_start_main
#20 0x56517333002a _start
  r8: 0000000000000000  r9: 00007ffdf9f67520 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdf9f67c18 r13: 0000000000000161 r14: 00007ffdf9f67c20 r15: 00007ffdf9f677b9
  di: 0000000000000002  si: 00007ffdf9f67520  bp: 00007ffdf9f67760  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb8a81c0fff  sp: 00007ffdf9f67598
  ip: 00007fb8a81c0fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Accelerometer](https://w3c.github.io/accelerometer/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [HTML 5.3](https://w3c.github.io/html/)

No informative reference to this spec from other specs.


## The WebSocket API {data-spec=true data-anomaly=true data-hasInvalidIdl=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/websockets/) (20 September 2012)
- Latest published version: [http://www.w3.org/TR/websockets/](http://www.w3.org/TR/websockets/)
- Latest published status: [Candidate Recommendation](http://www.w3.org/TR/2012/CR-websockets-20120920/)
- Shortname: websockets

### Potential issue(s) {.anomalies}

- Invalid WebIDL content found

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)

Informative references to this spec from:

- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)


## Touch Events {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/touch-events/)
- Editor's Draft: [https://w3c.github.io/touch-events/](https://w3c.github.io/touch-events/)
- Latest published version: [http://www.w3.org/TR/touch-events/](http://www.w3.org/TR/touch-events/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2013/REC-touch-events-20131010/)
- Repository: [GitHub w3c/touch-events](https://github.com/w3c/touch-events)
- Shortname: touch-events

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020223.591854:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e3c4211b0c base::debug::StackTrace::StackTrace()
#1 0x55e3c422a780 logging::LogMessage::~LogMessage()
#2 0x55e3c32ba2b1 content::ZygoteHostImpl::Init()
#3 0x55e3c2f2cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e3c2f32a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e3c805c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e3c3f4ca00 content::RunNamedProcessTypeMain()
#7 0x55e3c3f4d2e8 content::ContentMainRunnerImpl::Run()
#8 0x55e3c3f56f24 service_manager::Main()
#9 0x55e3c3f4bf14 content::ContentMain()
#10 0x55e3c805b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e3c805ba42 headless::HeadlessBrowserMain()
#12 0x55e3c3f53f9d headless::HeadlessShellMain()
#13 0x55e3c25b21ac ChromeMain
#14 0x7f1ebf6e42e1 __libc_start_main
#15 0x55e3c25b202a _start

Received signal 6
#0 0x55e3c4211b0c base::debug::StackTrace::StackTrace()
#1 0x55e3c4211671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1ec56410c0 <unknown>
#3 0x7f1ebf6f6fff gsignal
#4 0x7f1ebf6f842a abort
#5 0x55e3c4210105 base::debug::BreakDebugger()
#6 0x55e3c422abca logging::LogMessage::~LogMessage()
#7 0x55e3c32ba2b1 content::ZygoteHostImpl::Init()
#8 0x55e3c2f2cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e3c2f32a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e3c805c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e3c3f4ca00 content::RunNamedProcessTypeMain()
#12 0x55e3c3f4d2e8 content::ContentMainRunnerImpl::Run()
#13 0x55e3c3f56f24 service_manager::Main()
#14 0x55e3c3f4bf14 content::ContentMain()
#15 0x55e3c805b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e3c805ba42 headless::HeadlessBrowserMain()
#17 0x55e3c3f53f9d headless::HeadlessShellMain()
#18 0x55e3c25b21ac ChromeMain
#19 0x7f1ebf6e42e1 __libc_start_main
#20 0x55e3c25b202a _start
  r8: 0000000000000000  r9: 00007ffd41b21740 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd41b21e38 r13: 0000000000000161 r14: 00007ffd41b21e40 r15: 00007ffd41b219d9
  di: 0000000000000002  si: 00007ffd41b21740  bp: 00007ffd41b21980  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1ebf6f6fff  sp: 00007ffd41b217b8
  ip: 00007f1ebf6f6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020223.591854:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e3c4211b0c base::debug::StackTrace::StackTrace()
#1 0x55e3c422a780 logging::LogMessage::~LogMessage()
#2 0x55e3c32ba2b1 content::ZygoteHostImpl::Init()
#3 0x55e3c2f2cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e3c2f32a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e3c805c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e3c3f4ca00 content::RunNamedProcessTypeMain()
#7 0x55e3c3f4d2e8 content::ContentMainRunnerImpl::Run()
#8 0x55e3c3f56f24 service_manager::Main()
#9 0x55e3c3f4bf14 content::ContentMain()
#10 0x55e3c805b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e3c805ba42 headless::HeadlessBrowserMain()
#12 0x55e3c3f53f9d headless::HeadlessShellMain()
#13 0x55e3c25b21ac ChromeMain
#14 0x7f1ebf6e42e1 __libc_start_main
#15 0x55e3c25b202a _start

Received signal 6
#0 0x55e3c4211b0c base::debug::StackTrace::StackTrace()
#1 0x55e3c4211671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1ec56410c0 <unknown>
#3 0x7f1ebf6f6fff gsignal
#4 0x7f1ebf6f842a abort
#5 0x55e3c4210105 base::debug::BreakDebugger()
#6 0x55e3c422abca logging::LogMessage::~LogMessage()
#7 0x55e3c32ba2b1 content::ZygoteHostImpl::Init()
#8 0x55e3c2f2cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e3c2f32a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e3c805c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e3c3f4ca00 content::RunNamedProcessTypeMain()
#12 0x55e3c3f4d2e8 content::ContentMainRunnerImpl::Run()
#13 0x55e3c3f56f24 service_manager::Main()
#14 0x55e3c3f4bf14 content::ContentMain()
#15 0x55e3c805b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e3c805ba42 headless::HeadlessBrowserMain()
#17 0x55e3c3f53f9d headless::HeadlessShellMain()
#18 0x55e3c25b21ac ChromeMain
#19 0x7f1ebf6e42e1 __libc_start_main
#20 0x55e3c25b202a _start
  r8: 0000000000000000  r9: 00007ffd41b21740 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd41b21e38 r13: 0000000000000161 r14: 00007ffd41b21e40 r15: 00007ffd41b219d9
  di: 0000000000000002  si: 00007ffd41b21740  bp: 00007ffd41b21980  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1ebf6f6fff  sp: 00007ffd41b217b8
  ip: 00007f1ebf6f6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML 5.3](https://w3c.github.io/html/)

No informative reference to this spec from other specs.


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

- [HTML 5.3](https://w3c.github.io/html/)
- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)
- [Permissions](https://w3c.github.io/permissions/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/)
- [UI Events KeyboardEvent key Values](https://w3c.github.io/uievents-key/)
- [W3C DOM 4.1](https://w3c.github.io/dom/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/)

No informative reference to this spec from other specs.


## UI Events KeyboardEvent code Values {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-noIdlContent=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/uievents-code/) (11 April 2018)
- Editor's Draft: [https://w3c.github.io/uievents-code/](https://w3c.github.io/uievents-code/)
- Latest published version: [https://www.w3.org/TR/uievents-code/](https://www.w3.org/TR/uievents-code/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-uievents-code-20170601/)
- Repository: [GitHub w3c/uievents-code](https://github.com/w3c/uievents-code)
- Shortname: uievents-code

### Potential issue(s) {.anomalies}

- No WebIDL definitions found

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [UI Events KeyboardEvent key Values](https://w3c.github.io/uievents-key/)

No informative reference to this spec from other specs.


## UI Events KeyboardEvent key Values {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-noIdlContent=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/uievents-key/) (11 April 2018)
- Editor's Draft: [https://w3c.github.io/uievents-key/](https://w3c.github.io/uievents-key/)
- Latest published version: [https://www.w3.org/TR/uievents-key/](https://www.w3.org/TR/uievents-key/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-uievents-key-20170601/)
- Repository: [GitHub w3c/uievents-key](https://github.com/w3c/uievents-key)
- Shortname: uievents-key

### Potential issue(s) {.anomalies}

- No WebIDL definitions found

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/)

No informative reference to this spec from other specs.


## URL Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://url.spec.whatwg.org/) (8 May 2018)
- Repository: [GitHub whatwg/url](https://github.com/whatwg/url)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)
- [Content Security Policy: Embedded Enforcement](https://w3c.github.io/webappsec-csp/embedded/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/)
- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File API](https://w3c.github.io/FileAPI/)
- [HTML 5.3](https://w3c.github.io/html/)
- [Media Session Standard](https://wicg.github.io/mediasession/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [W3C DOM 4.1](https://w3c.github.io/dom/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Media Source Extensions™](https://w3c.github.io/media-source/)

Informative references to this spec from:

- [Encoding Standard](https://encoding.spec.whatwg.org/)
- [Web IDL](https://heycam.github.io/webidl/)


## User Interface Security and the Visibility API {data-spec=true data-anomaly=true data-hasInvalidIdl=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](http://w3c.github.io/webappsec-uisecurity/index.html) (3 June 2016)
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

- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)


## User Timing Level 2 {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/user-timing/)
- Editor's Draft: [https://w3c.github.io/user-timing/](https://w3c.github.io/user-timing/)
- Latest published version: [https://www.w3.org/TR/user-timing-2/](https://www.w3.org/TR/user-timing-2/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-user-timing-2-20180402/)
- Repository: [GitHub w3c/user-timing](https://github.com/w3c/user-timing)
- Shortname: user-timing-2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020230.526288:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5620dd85fb0c base::debug::StackTrace::StackTrace()
#1 0x5620dd878780 logging::LogMessage::~LogMessage()
#2 0x5620dc9082b1 content::ZygoteHostImpl::Init()
#3 0x5620dc57ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5620dc580a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5620e16aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5620dd59aa00 content::RunNamedProcessTypeMain()
#7 0x5620dd59b2e8 content::ContentMainRunnerImpl::Run()
#8 0x5620dd5a4f24 service_manager::Main()
#9 0x5620dd599f14 content::ContentMain()
#10 0x5620e16a99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5620e16a9a42 headless::HeadlessBrowserMain()
#12 0x5620dd5a1f9d headless::HeadlessShellMain()
#13 0x5620dbc001ac ChromeMain
#14 0x7f40f6fc12e1 __libc_start_main
#15 0x5620dbc0002a _start

Received signal 6
#0 0x5620dd85fb0c base::debug::StackTrace::StackTrace()
#1 0x5620dd85f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f40fcf1e0c0 <unknown>
#3 0x7f40f6fd3fff gsignal
#4 0x7f40f6fd542a abort
#5 0x5620dd85e105 base::debug::BreakDebugger()
#6 0x5620dd878bca logging::LogMessage::~LogMessage()
#7 0x5620dc9082b1 content::ZygoteHostImpl::Init()
#8 0x5620dc57ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5620dc580a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5620e16aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5620dd59aa00 content::RunNamedProcessTypeMain()
#12 0x5620dd59b2e8 content::ContentMainRunnerImpl::Run()
#13 0x5620dd5a4f24 service_manager::Main()
#14 0x5620dd599f14 content::ContentMain()
#15 0x5620e16a99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5620e16a9a42 headless::HeadlessBrowserMain()
#17 0x5620dd5a1f9d headless::HeadlessShellMain()
#18 0x5620dbc001ac ChromeMain
#19 0x7f40f6fc12e1 __libc_start_main
#20 0x5620dbc0002a _start
  r8: 0000000000000000  r9: 00007fff727b2180 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff727b2878 r13: 0000000000000161 r14: 00007fff727b2880 r15: 00007fff727b2419
  di: 0000000000000002  si: 00007fff727b2180  bp: 00007fff727b23c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f40f6fd3fff  sp: 00007fff727b21f8
  ip: 00007f40f6fd3fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020230.526288:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5620dd85fb0c base::debug::StackTrace::StackTrace()
#1 0x5620dd878780 logging::LogMessage::~LogMessage()
#2 0x5620dc9082b1 content::ZygoteHostImpl::Init()
#3 0x5620dc57ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5620dc580a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5620e16aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5620dd59aa00 content::RunNamedProcessTypeMain()
#7 0x5620dd59b2e8 content::ContentMainRunnerImpl::Run()
#8 0x5620dd5a4f24 service_manager::Main()
#9 0x5620dd599f14 content::ContentMain()
#10 0x5620e16a99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5620e16a9a42 headless::HeadlessBrowserMain()
#12 0x5620dd5a1f9d headless::HeadlessShellMain()
#13 0x5620dbc001ac ChromeMain
#14 0x7f40f6fc12e1 __libc_start_main
#15 0x5620dbc0002a _start

Received signal 6
#0 0x5620dd85fb0c base::debug::StackTrace::StackTrace()
#1 0x5620dd85f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f40fcf1e0c0 <unknown>
#3 0x7f40f6fd3fff gsignal
#4 0x7f40f6fd542a abort
#5 0x5620dd85e105 base::debug::BreakDebugger()
#6 0x5620dd878bca logging::LogMessage::~LogMessage()
#7 0x5620dc9082b1 content::ZygoteHostImpl::Init()
#8 0x5620dc57ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5620dc580a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5620e16aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5620dd59aa00 content::RunNamedProcessTypeMain()
#12 0x5620dd59b2e8 content::ContentMainRunnerImpl::Run()
#13 0x5620dd5a4f24 service_manager::Main()
#14 0x5620dd599f14 content::ContentMain()
#15 0x5620e16a99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5620e16a9a42 headless::HeadlessBrowserMain()
#17 0x5620dd5a1f9d headless::HeadlessShellMain()
#18 0x5620dbc001ac ChromeMain
#19 0x7f40f6fc12e1 __libc_start_main
#20 0x5620dbc0002a _start
  r8: 0000000000000000  r9: 00007fff727b2180 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff727b2878 r13: 0000000000000161 r14: 00007fff727b2880 r15: 00007fff727b2419
  di: 0000000000000002  si: 00007fff727b2180  bp: 00007fff727b23c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f40f6fd3fff  sp: 00007fff727b21f8
  ip: 00007f40f6fd3fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Vibration API (Second Edition) {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/vibration/)
- Editor's Draft: [https://w3c.github.io/vibration/](https://w3c.github.io/vibration/)
- Latest published version: [https://www.w3.org/TR/vibration/](https://www.w3.org/TR/vibration/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2016/REC-vibration-20161018/)
- Repository: [GitHub w3c/vibration](https://github.com/w3c/vibration)
- Shortname: vibration

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020230.501036:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55eadd403b0c base::debug::StackTrace::StackTrace()
#1 0x55eadd41c780 logging::LogMessage::~LogMessage()
#2 0x55eadc4ac2b1 content::ZygoteHostImpl::Init()
#3 0x55eadc11ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55eadc124a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55eae124e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55eadd13ea00 content::RunNamedProcessTypeMain()
#7 0x55eadd13f2e8 content::ContentMainRunnerImpl::Run()
#8 0x55eadd148f24 service_manager::Main()
#9 0x55eadd13df14 content::ContentMain()
#10 0x55eae124d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55eae124da42 headless::HeadlessBrowserMain()
#12 0x55eadd145f9d headless::HeadlessShellMain()
#13 0x55eadb7a41ac ChromeMain
#14 0x7fe1a598a2e1 __libc_start_main
#15 0x55eadb7a402a _start

Received signal 6
#0 0x55eadd403b0c base::debug::StackTrace::StackTrace()
#1 0x55eadd403671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe1ab8e70c0 <unknown>
#3 0x7fe1a599cfff gsignal
#4 0x7fe1a599e42a abort
#5 0x55eadd402105 base::debug::BreakDebugger()
#6 0x55eadd41cbca logging::LogMessage::~LogMessage()
#7 0x55eadc4ac2b1 content::ZygoteHostImpl::Init()
#8 0x55eadc11ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55eadc124a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55eae124e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55eadd13ea00 content::RunNamedProcessTypeMain()
#12 0x55eadd13f2e8 content::ContentMainRunnerImpl::Run()
#13 0x55eadd148f24 service_manager::Main()
#14 0x55eadd13df14 content::ContentMain()
#15 0x55eae124d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55eae124da42 headless::HeadlessBrowserMain()
#17 0x55eadd145f9d headless::HeadlessShellMain()
#18 0x55eadb7a41ac ChromeMain
#19 0x7fe1a598a2e1 __libc_start_main
#20 0x55eadb7a402a _start
  r8: 0000000000000000  r9: 00007ffcf7363a50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcf7364148 r13: 0000000000000161 r14: 00007ffcf7364150 r15: 00007ffcf7363ce9
  di: 0000000000000002  si: 00007ffcf7363a50  bp: 00007ffcf7363c90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe1a599cfff  sp: 00007ffcf7363ac8
  ip: 00007fe1a599cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020230.501036:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55eadd403b0c base::debug::StackTrace::StackTrace()
#1 0x55eadd41c780 logging::LogMessage::~LogMessage()
#2 0x55eadc4ac2b1 content::ZygoteHostImpl::Init()
#3 0x55eadc11ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55eadc124a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55eae124e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55eadd13ea00 content::RunNamedProcessTypeMain()
#7 0x55eadd13f2e8 content::ContentMainRunnerImpl::Run()
#8 0x55eadd148f24 service_manager::Main()
#9 0x55eadd13df14 content::ContentMain()
#10 0x55eae124d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55eae124da42 headless::HeadlessBrowserMain()
#12 0x55eadd145f9d headless::HeadlessShellMain()
#13 0x55eadb7a41ac ChromeMain
#14 0x7fe1a598a2e1 __libc_start_main
#15 0x55eadb7a402a _start

Received signal 6
#0 0x55eadd403b0c base::debug::StackTrace::StackTrace()
#1 0x55eadd403671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe1ab8e70c0 <unknown>
#3 0x7fe1a599cfff gsignal
#4 0x7fe1a599e42a abort
#5 0x55eadd402105 base::debug::BreakDebugger()
#6 0x55eadd41cbca logging::LogMessage::~LogMessage()
#7 0x55eadc4ac2b1 content::ZygoteHostImpl::Init()
#8 0x55eadc11ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55eadc124a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55eae124e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55eadd13ea00 content::RunNamedProcessTypeMain()
#12 0x55eadd13f2e8 content::ContentMainRunnerImpl::Run()
#13 0x55eadd148f24 service_manager::Main()
#14 0x55eadd13df14 content::ContentMain()
#15 0x55eae124d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55eae124da42 headless::HeadlessBrowserMain()
#17 0x55eadd145f9d headless::HeadlessShellMain()
#18 0x55eadb7a41ac ChromeMain
#19 0x7fe1a598a2e1 __libc_start_main
#20 0x55eadb7a402a _start
  r8: 0000000000000000  r9: 00007ffcf7363a50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcf7364148 r13: 0000000000000161 r14: 00007ffcf7364150 r15: 00007ffcf7363ce9
  di: 0000000000000002  si: 00007ffcf7363a50  bp: 00007ffcf7363c90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe1a599cfff  sp: 00007ffcf7363ac8
  ip: 00007fe1a599cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## W3C DOM 4.1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/dom/) (23 April 2018)
- Editor's Draft: [https://w3c.github.io/dom/](https://w3c.github.io/dom/)
- Latest published version: [https://www.w3.org/TR/dom41/](https://www.w3.org/TR/dom41/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-dom41-20180201/)
- Repository: [GitHub w3c/dom](https://github.com/w3c/dom)
- Shortname: dom41

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMHighResTimeStamp`, `HTMLSlotElement`, `Window`
- Missing references for links: 
     * [`https://www.w3.org/TR/touch-events/`](https://www.w3.org/TR/touch-events/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/), related reference "HR-TIME" uses URL [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/)
     * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/), related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
     * [`https://www.w3.org/TR/2017/WD-dom41-20170420/`](https://www.w3.org/TR/2017/WD-dom41-20170420/), related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
     * [`https://www.w3.org/TR/2017/WD-dom41-20170321/`](https://www.w3.org/TR/2017/WD-dom41-20170321/), related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
     * [`https://www.w3.org/TR/2015/REC-dom-20151119/`](https://www.w3.org/TR/2015/REC-dom-20151119/), related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Clipboard API and events](https://w3c.github.io/clipboard-apis/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)
- [Content Security Policy: Embedded Enforcement](https://w3c.github.io/webappsec-csp/embedded/)
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/)
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [CSS Animations Level 1](https://drafts.csswg.org/css-animations/)
- [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/)
- [CSS Layout API Level 1](https://drafts.css-houdini.org/css-layout-api-1/)
- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/)
- [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/)
- [CSS Transitions](https://drafts.csswg.org/css-transitions/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- [DeviceOrientation Event Specification](https://w3c.github.io/deviceorientation/spec-source-orientation.html)
- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File API](https://w3c.github.io/FileAPI/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [Generic Sensor API](https://w3c.github.io/sensors/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [HTML 5.3](https://w3c.github.io/html/)
- [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/)
- [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/)
- [Intersection Observer](https://w3c.github.io/IntersectionObserver/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [MediaStream Recording](https://w3c.github.io/mediacapture-record/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)
- [Permissions](https://w3c.github.io/permissions/)
- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)
- [Progress Events](http://www.w3.org/TR/2014/REC-progress-events-20140211/)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)
- [Selectors API Level 1](https://www.w3.org/TR/selectors-api/)
- [Server-Sent Events](http://www.w3.org/TR/2015/REC-eventsource-20150203/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- [Static Range](https://w3c.github.io/staticrange/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [URL Standard](https://url.spec.whatwg.org/)
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html)
- [W3C DOM 4.1](https://w3c.github.io/dom/)
- [Web Animations](https://w3c.github.io/web-animations/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html)
- [Web IDL](https://heycam.github.io/webidl/)
- [Web Notifications](https://www.w3.org/TR/notifications/)
- [Web Storage (Second Edition)](http://www.w3.org/TR/2016/REC-webstorage-20160419/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- [WebUSB API](https://wicg.github.io/webusb/)
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)
- [WebXR Device API](https://immersive-web.github.io/webxr/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/)
- [Media Source Extensions™](https://w3c.github.io/media-source/)
- [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)

Informative references to this spec from:

- [HTML 5.3](https://w3c.github.io/html/)
- [Selectors Level 3](https://www.w3.org/TR/css3-selectors/)


## Wake Lock API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/wake-lock/)
- Editor's Draft: [https://w3c.github.io/wake-lock/](https://w3c.github.io/wake-lock/)
- Latest published version: [https://www.w3.org/TR/wake-lock/](https://www.w3.org/TR/wake-lock/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-wake-lock-20171214/)
- Repository: [GitHub w3c/wake-lock](https://github.com/w3c/wake-lock)
- Shortname: wake-lock

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020230.642183:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d87227fb0c base::debug::StackTrace::StackTrace()
#1 0x55d872298780 logging::LogMessage::~LogMessage()
#2 0x55d8713282b1 content::ZygoteHostImpl::Init()
#3 0x55d870f9ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d870fa0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d8760ca9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d871fbaa00 content::RunNamedProcessTypeMain()
#7 0x55d871fbb2e8 content::ContentMainRunnerImpl::Run()
#8 0x55d871fc4f24 service_manager::Main()
#9 0x55d871fb9f14 content::ContentMain()
#10 0x55d8760c99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d8760c9a42 headless::HeadlessBrowserMain()
#12 0x55d871fc1f9d headless::HeadlessShellMain()
#13 0x55d8706201ac ChromeMain
#14 0x7fd757c552e1 __libc_start_main
#15 0x55d87062002a _start

Received signal 6
#0 0x55d87227fb0c base::debug::StackTrace::StackTrace()
#1 0x55d87227f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd75dbb20c0 <unknown>
#3 0x7fd757c67fff gsignal
#4 0x7fd757c6942a abort
#5 0x55d87227e105 base::debug::BreakDebugger()
#6 0x55d872298bca logging::LogMessage::~LogMessage()
#7 0x55d8713282b1 content::ZygoteHostImpl::Init()
#8 0x55d870f9ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d870fa0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d8760ca9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d871fbaa00 content::RunNamedProcessTypeMain()
#12 0x55d871fbb2e8 content::ContentMainRunnerImpl::Run()
#13 0x55d871fc4f24 service_manager::Main()
#14 0x55d871fb9f14 content::ContentMain()
#15 0x55d8760c99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d8760c9a42 headless::HeadlessBrowserMain()
#17 0x55d871fc1f9d headless::HeadlessShellMain()
#18 0x55d8706201ac ChromeMain
#19 0x7fd757c552e1 __libc_start_main
#20 0x55d87062002a _start
  r8: 0000000000000000  r9: 00007ffe6a339ae0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe6a33a1d8 r13: 0000000000000161 r14: 00007ffe6a33a1e0 r15: 00007ffe6a339d79
  di: 0000000000000002  si: 00007ffe6a339ae0  bp: 00007ffe6a339d20  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd757c67fff  sp: 00007ffe6a339b58
  ip: 00007fd757c67fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020230.642183:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d87227fb0c base::debug::StackTrace::StackTrace()
#1 0x55d872298780 logging::LogMessage::~LogMessage()
#2 0x55d8713282b1 content::ZygoteHostImpl::Init()
#3 0x55d870f9ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d870fa0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d8760ca9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d871fbaa00 content::RunNamedProcessTypeMain()
#7 0x55d871fbb2e8 content::ContentMainRunnerImpl::Run()
#8 0x55d871fc4f24 service_manager::Main()
#9 0x55d871fb9f14 content::ContentMain()
#10 0x55d8760c99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d8760c9a42 headless::HeadlessBrowserMain()
#12 0x55d871fc1f9d headless::HeadlessShellMain()
#13 0x55d8706201ac ChromeMain
#14 0x7fd757c552e1 __libc_start_main
#15 0x55d87062002a _start

Received signal 6
#0 0x55d87227fb0c base::debug::StackTrace::StackTrace()
#1 0x55d87227f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd75dbb20c0 <unknown>
#3 0x7fd757c67fff gsignal
#4 0x7fd757c6942a abort
#5 0x55d87227e105 base::debug::BreakDebugger()
#6 0x55d872298bca logging::LogMessage::~LogMessage()
#7 0x55d8713282b1 content::ZygoteHostImpl::Init()
#8 0x55d870f9ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d870fa0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d8760ca9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d871fbaa00 content::RunNamedProcessTypeMain()
#12 0x55d871fbb2e8 content::ContentMainRunnerImpl::Run()
#13 0x55d871fc4f24 service_manager::Main()
#14 0x55d871fb9f14 content::ContentMain()
#15 0x55d8760c99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d8760c9a42 headless::HeadlessBrowserMain()
#17 0x55d871fc1f9d headless::HeadlessShellMain()
#18 0x55d8706201ac ChromeMain
#19 0x7fd757c552e1 __libc_start_main
#20 0x55d87062002a _start
  r8: 0000000000000000  r9: 00007ffe6a339ae0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe6a33a1d8 r13: 0000000000000161 r14: 00007ffe6a33a1e0 r15: 00007ffe6a339d79
  di: 0000000000000002  si: 00007ffe6a339ae0  bp: 00007ffe6a339d20  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd757c67fff  sp: 00007ffe6a339b58
  ip: 00007fd757c67fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Web Animations {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/web-animations/) (16 April 2018)
- Editor's Draft: [https://w3c.github.io/web-animations/](https://w3c.github.io/web-animations/)
- Latest published version: [https://www.w3.org/TR/web-animations-1/](https://www.w3.org/TR/web-animations-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2016/WD-web-animations-1-20160913/)
- Repository: [GitHub w3c/web-animations](https://github.com/w3c/web-animations)
- Shortname: web-animations-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMHighResTimeStamp`, `EventHandler`, `Window`
- Inconsistent references for links: 
     * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/), related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)

No informative reference to this spec from other specs.


## Web App Manifest {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/manifest/)
- Editor's Draft: [https://w3c.github.io/manifest/](https://w3c.github.io/manifest/)
- Latest published version: [https://www.w3.org/TR/appmanifest/](https://www.w3.org/TR/appmanifest/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-appmanifest-20180508/)
- Repository: [GitHub w3c/manifest](https://github.com/w3c/manifest)
- Shortname: appmanifest

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020142.830890:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x563a6b056b0c base::debug::StackTrace::StackTrace()
#1 0x563a6b06f780 logging::LogMessage::~LogMessage()
#2 0x563a6a0ff2b1 content::ZygoteHostImpl::Init()
#3 0x563a69d71c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x563a69d77a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x563a6eea19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563a6ad91a00 content::RunNamedProcessTypeMain()
#7 0x563a6ad922e8 content::ContentMainRunnerImpl::Run()
#8 0x563a6ad9bf24 service_manager::Main()
#9 0x563a6ad90f14 content::ContentMain()
#10 0x563a6eea09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563a6eea0a42 headless::HeadlessBrowserMain()
#12 0x563a6ad98f9d headless::HeadlessShellMain()
#13 0x563a693f71ac ChromeMain
#14 0x7f49fc9892e1 __libc_start_main
#15 0x563a693f702a _start

Received signal 6
#0 0x563a6b056b0c base::debug::StackTrace::StackTrace()
#1 0x563a6b056671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f4a028e60c0 <unknown>
#3 0x7f49fc99bfff gsignal
#4 0x7f49fc99d42a abort
#5 0x563a6b055105 base::debug::BreakDebugger()
#6 0x563a6b06fbca logging::LogMessage::~LogMessage()
#7 0x563a6a0ff2b1 content::ZygoteHostImpl::Init()
#8 0x563a69d71c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x563a69d77a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x563a6eea19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563a6ad91a00 content::RunNamedProcessTypeMain()
#12 0x563a6ad922e8 content::ContentMainRunnerImpl::Run()
#13 0x563a6ad9bf24 service_manager::Main()
#14 0x563a6ad90f14 content::ContentMain()
#15 0x563a6eea09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563a6eea0a42 headless::HeadlessBrowserMain()
#17 0x563a6ad98f9d headless::HeadlessShellMain()
#18 0x563a693f71ac ChromeMain
#19 0x7f49fc9892e1 __libc_start_main
#20 0x563a693f702a _start
  r8: 0000000000000000  r9: 00007ffcfe867180 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcfe867878 r13: 0000000000000161 r14: 00007ffcfe867880 r15: 00007ffcfe867419
  di: 0000000000000002  si: 00007ffcfe867180  bp: 00007ffcfe8673c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f49fc99bfff  sp: 00007ffcfe8671f8
  ip: 00007f49fc99bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020142.830890:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x563a6b056b0c base::debug::StackTrace::StackTrace()
#1 0x563a6b06f780 logging::LogMessage::~LogMessage()
#2 0x563a6a0ff2b1 content::ZygoteHostImpl::Init()
#3 0x563a69d71c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x563a69d77a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x563a6eea19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563a6ad91a00 content::RunNamedProcessTypeMain()
#7 0x563a6ad922e8 content::ContentMainRunnerImpl::Run()
#8 0x563a6ad9bf24 service_manager::Main()
#9 0x563a6ad90f14 content::ContentMain()
#10 0x563a6eea09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563a6eea0a42 headless::HeadlessBrowserMain()
#12 0x563a6ad98f9d headless::HeadlessShellMain()
#13 0x563a693f71ac ChromeMain
#14 0x7f49fc9892e1 __libc_start_main
#15 0x563a693f702a _start

Received signal 6
#0 0x563a6b056b0c base::debug::StackTrace::StackTrace()
#1 0x563a6b056671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f4a028e60c0 <unknown>
#3 0x7f49fc99bfff gsignal
#4 0x7f49fc99d42a abort
#5 0x563a6b055105 base::debug::BreakDebugger()
#6 0x563a6b06fbca logging::LogMessage::~LogMessage()
#7 0x563a6a0ff2b1 content::ZygoteHostImpl::Init()
#8 0x563a69d71c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x563a69d77a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x563a6eea19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563a6ad91a00 content::RunNamedProcessTypeMain()
#12 0x563a6ad922e8 content::ContentMainRunnerImpl::Run()
#13 0x563a6ad9bf24 service_manager::Main()
#14 0x563a6ad90f14 content::ContentMain()
#15 0x563a6eea09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563a6eea0a42 headless::HeadlessBrowserMain()
#17 0x563a6ad98f9d headless::HeadlessShellMain()
#18 0x563a693f71ac ChromeMain
#19 0x7f49fc9892e1 __libc_start_main
#20 0x563a693f702a _start
  r8: 0000000000000000  r9: 00007ffcfe867180 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcfe867878 r13: 0000000000000161 r14: 00007ffcfe867880 r15: 00007ffcfe867419
  di: 0000000000000002  si: 00007ffcfe867180  bp: 00007ffcfe8673c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f49fc99bfff  sp: 00007ffcfe8671f8
  ip: 00007f49fc99bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Media Session Standard](https://wicg.github.io/mediasession/)

Informative references to this spec from:

- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)


## Web Audio API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://webaudio.github.io/web-audio-api/) (8 May 2018)
- Editor's Draft: [https://webaudio.github.io/web-audio-api/](https://webaudio.github.io/web-audio-api/)
- Latest published version: [http://www.w3.org/TR/webaudio/](http://www.w3.org/TR/webaudio/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2015/WD-webaudio-20151208/)
- Repository: [GitHub webaudio/web-audio-api](https://github.com/webaudio/web-audio-api)
- Shortname: webaudio

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMHighResTimeStamp`, `EventHandler`, `HTMLMediaElement`, `MediaStream`, `MediaStreamTrack`, `Window`
- WebIDL names also defined elsewhere: 
    * `Worklet` also defined in [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) and [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- Missing references for links: 
     * [`https://w3c.github.io/mediacapture-fromelement/`](https://w3c.github.io/mediacapture-fromelement/)
     * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/), related reference "MEDIACAPTURE-STREAMS" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
     * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/), related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Console Standard](https://console.spec.whatwg.org/)
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/)

Informative references to this spec from:

- [Worklets Level 1](https://drafts.css-houdini.org/worklets/)


## Web Authentication: An API for accessing Public Key Credentials - Level 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webauthn/) (9 May 2018)
- Editor's Draft: [https://w3c.github.io/webauthn/](https://w3c.github.io/webauthn/)
- Latest published version: [https://www.w3.org/TR/webauthn/](https://www.w3.org/TR/webauthn/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-webauthn-20180320/)
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

- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/)


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

Normative references to this spec from:

- [Web Budget API](https://wicg.github.io/budget-api/)

Informative references to this spec from:

- [Permissions](https://w3c.github.io/permissions/)


## Web Bluetooth {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://webbluetoothcg.github.io/web-bluetooth/) (9 May 2018)
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

Normative references to this spec from:

- [Permissions](https://w3c.github.io/permissions/)

Informative references to this spec from:

- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)


## Web Budget API {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/budget-api/) (24 May 2017)
- Repository: [GitHub wicg/budget-api](https://github.com/wicg/budget-api)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Navigator`, `Window`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Web Cryptography API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webcrypto/Overview.html) (24 October 2016)
- Editor's Draft: [https://w3c.github.io/webcrypto/Overview.html](https://w3c.github.io/webcrypto/Overview.html)
- Latest published version: [https://www.w3.org/TR/WebCryptoAPI/](https://www.w3.org/TR/WebCryptoAPI/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2017/REC-WebCryptoAPI-20170126/)
- Repository: [GitHub w3c/webcrypto](https://github.com/w3c/webcrypto)
- Shortname: WebCryptoAPI

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
- Missing references for WebIDL names: 
     * `Worker` defined in [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) or [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)


## Web IDL {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://heycam.github.io/webidl/) (29 April 2018)
- Editor's Draft: [https://heycam.github.io/webidl/](https://heycam.github.io/webidl/)
- Latest published version: [https://www.w3.org/TR/WebIDL-1/](https://www.w3.org/TR/WebIDL-1/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2016/REC-WebIDL-1-20161215/)
- Shortname: WebIDL-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
- WebIDL names also defined elsewhere: 
    * `VoidFunction` also defined in [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/geolocation-API/`](https://www.w3.org/TR/geolocation-API/), related reference "GEOLOCATION-API" uses URL [`http://dev.w3.org/geo/api/spec-source.html`](http://dev.w3.org/geo/api/spec-source.html)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
- [Accelerometer](https://w3c.github.io/accelerometer/)
- [Ambient Light Sensor](https://w3c.github.io/ambient-light/)
- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Clipboard API and events](https://w3c.github.io/clipboard-apis/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Console Standard](https://console.spec.whatwg.org/)
- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)
- [Content Security Policy: Embedded Enforcement](https://w3c.github.io/webappsec-csp/embedded/)
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/)
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [CSS Animations Level 1](https://drafts.csswg.org/css-animations/)
- [CSS Device Adaptation Module Level 1](https://drafts.csswg.org/css-device-adapt/)
- [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/)
- [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/)
- [CSS Layout API Level 1](https://drafts.css-houdini.org/css-layout-api-1/)
- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/)
- [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/)
- [CSS Transitions](https://drafts.csswg.org/css-transitions/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- [DeviceOrientation Event Specification](https://w3c.github.io/deviceorientation/spec-source-orientation.html)
- [Encoding Standard](https://encoding.spec.whatwg.org/)
- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File and Directory Entries API](https://wicg.github.io/entries-api/)
- [File API](https://w3c.github.io/FileAPI/)
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [Generic Sensor API](https://w3c.github.io/sensors/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
- [Gyroscope](https://w3c.github.io/gyroscope/)
- [HTML 5.3](https://w3c.github.io/html/)
- [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/)
- [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/)
- [Intersection Observer](https://w3c.github.io/IntersectionObserver/)
- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)
- [Long Tasks API 1](https://w3c.github.io/longtasks/)
- [Magnetometer](https://w3c.github.io/magnetometer/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [Media Session Standard](https://wicg.github.io/mediasession/)
- [Media Source Extensions™](https://w3c.github.io/media-source/)
- [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- [MediaStream Recording](https://w3c.github.io/mediacapture-record/)
- [Orientation Sensor](https://w3c.github.io/orientation-sensor/)
- [Paint Timing 1](https://w3c.github.io/paint-timing/)
- [Permissions](https://w3c.github.io/permissions/)
- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)
- [Proximity Sensor](https://w3c.github.io/proximity/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- [Static Range](https://w3c.github.io/staticrange/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [The WebSocket API](https://www.w3.org/TR/websockets/)
- [URL Standard](https://url.spec.whatwg.org/)
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html)
- [W3C DOM 4.1](https://w3c.github.io/dom/)
- [Web Animations](https://w3c.github.io/web-animations/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web Budget API](https://wicg.github.io/budget-api/)
- [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html)
- [Web Storage (Second Edition)](http://www.w3.org/TR/2016/REC-webstorage-20160419/)
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/)
- [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- [WebUSB API](https://wicg.github.io/webusb/)
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)
- [WebXR Device API](https://immersive-web.github.io/webxr/)
- [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Informative references to this spec from:

- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)


## Web MIDI API {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](http://webaudio.github.io/web-midi-api/)
- Editor's Draft: [http://webaudio.github.io/web-midi-api/](http://webaudio.github.io/web-midi-api/)
- Latest published version: [http://www.w3.org/TR/webmidi/](http://www.w3.org/TR/webmidi/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2015/WD-webmidi-20150317/)
- Repository: [GitHub webaudio/web-midi-api](https://github.com/webaudio/web-midi-api)
- Shortname: webmidi

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020230.994665:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b8701d8b0c base::debug::StackTrace::StackTrace()
#1 0x55b8701f1780 logging::LogMessage::~LogMessage()
#2 0x55b86f2812b1 content::ZygoteHostImpl::Init()
#3 0x55b86eef3c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b86eef9a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b8740239a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b86ff13a00 content::RunNamedProcessTypeMain()
#7 0x55b86ff142e8 content::ContentMainRunnerImpl::Run()
#8 0x55b86ff1df24 service_manager::Main()
#9 0x55b86ff12f14 content::ContentMain()
#10 0x55b8740229b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b874022a42 headless::HeadlessBrowserMain()
#12 0x55b86ff1af9d headless::HeadlessShellMain()
#13 0x55b86e5791ac ChromeMain
#14 0x7fd998ac12e1 __libc_start_main
#15 0x55b86e57902a _start

Received signal 6
#0 0x55b8701d8b0c base::debug::StackTrace::StackTrace()
#1 0x55b8701d8671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd99ea1e0c0 <unknown>
#3 0x7fd998ad3fff gsignal
#4 0x7fd998ad542a abort
#5 0x55b8701d7105 base::debug::BreakDebugger()
#6 0x55b8701f1bca logging::LogMessage::~LogMessage()
#7 0x55b86f2812b1 content::ZygoteHostImpl::Init()
#8 0x55b86eef3c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b86eef9a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b8740239a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b86ff13a00 content::RunNamedProcessTypeMain()
#12 0x55b86ff142e8 content::ContentMainRunnerImpl::Run()
#13 0x55b86ff1df24 service_manager::Main()
#14 0x55b86ff12f14 content::ContentMain()
#15 0x55b8740229b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b874022a42 headless::HeadlessBrowserMain()
#17 0x55b86ff1af9d headless::HeadlessShellMain()
#18 0x55b86e5791ac ChromeMain
#19 0x7fd998ac12e1 __libc_start_main
#20 0x55b86e57902a _start
  r8: 0000000000000000  r9: 00007fff23958b80 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff23959278 r13: 0000000000000161 r14: 00007fff23959280 r15: 00007fff23958e19
  di: 0000000000000002  si: 00007fff23958b80  bp: 00007fff23958dc0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd998ad3fff  sp: 00007fff23958bf8
  ip: 00007fd998ad3fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020230.994665:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b8701d8b0c base::debug::StackTrace::StackTrace()
#1 0x55b8701f1780 logging::LogMessage::~LogMessage()
#2 0x55b86f2812b1 content::ZygoteHostImpl::Init()
#3 0x55b86eef3c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b86eef9a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b8740239a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b86ff13a00 content::RunNamedProcessTypeMain()
#7 0x55b86ff142e8 content::ContentMainRunnerImpl::Run()
#8 0x55b86ff1df24 service_manager::Main()
#9 0x55b86ff12f14 content::ContentMain()
#10 0x55b8740229b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b874022a42 headless::HeadlessBrowserMain()
#12 0x55b86ff1af9d headless::HeadlessShellMain()
#13 0x55b86e5791ac ChromeMain
#14 0x7fd998ac12e1 __libc_start_main
#15 0x55b86e57902a _start

Received signal 6
#0 0x55b8701d8b0c base::debug::StackTrace::StackTrace()
#1 0x55b8701d8671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd99ea1e0c0 <unknown>
#3 0x7fd998ad3fff gsignal
#4 0x7fd998ad542a abort
#5 0x55b8701d7105 base::debug::BreakDebugger()
#6 0x55b8701f1bca logging::LogMessage::~LogMessage()
#7 0x55b86f2812b1 content::ZygoteHostImpl::Init()
#8 0x55b86eef3c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b86eef9a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b8740239a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b86ff13a00 content::RunNamedProcessTypeMain()
#12 0x55b86ff142e8 content::ContentMainRunnerImpl::Run()
#13 0x55b86ff1df24 service_manager::Main()
#14 0x55b86ff12f14 content::ContentMain()
#15 0x55b8740229b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b874022a42 headless::HeadlessBrowserMain()
#17 0x55b86ff1af9d headless::HeadlessShellMain()
#18 0x55b86e5791ac ChromeMain
#19 0x7fd998ac12e1 __libc_start_main
#20 0x55b86e57902a _start
  r8: 0000000000000000  r9: 00007fff23958b80 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff23959278 r13: 0000000000000161 r14: 00007fff23959280 r15: 00007fff23958e19
  di: 0000000000000002  si: 00007fff23958b80  bp: 00007fff23958dc0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd998ad3fff  sp: 00007fff23958bf8
  ip: 00007fd998ad3fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Permissions](https://w3c.github.io/permissions/)


## Web Notifications {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.w3.org/TR/notifications/) (22 October 2015)
- Latest published version: [http://www.w3.org/TR/notifications/](http://www.w3.org/TR/notifications/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2015/REC-notifications-20151022/)
- Shortname: notifications

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`
- Inconsistent references for links: 
     * [`https://notifications.spec.whatwg.org/`](https://notifications.spec.whatwg.org/), related reference "WEBIDL" uses URL [`https://www.w3.org/TR/2015/PR-notifications-20150910/`](https://www.w3.org/TR/2015/PR-notifications-20150910/)
     * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/), related reference "HTML5" uses URL [`https://www.w3.org/TR/2014/REC-html5-20141028/`](https://www.w3.org/TR/2014/REC-html5-20141028/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Web Notifications](https://www.w3.org/TR/notifications/)

Informative references to this spec from:

- [Permissions](https://w3c.github.io/permissions/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- [Web Budget API](https://wicg.github.io/budget-api/)


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

- [HTML 5.3](https://w3c.github.io/html/)

Informative references to this spec from:

- [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/)
- [W3C DOM 4.1](https://w3c.github.io/dom/)


## Web Workers {data-spec=true data-anomaly=true data-noNormativeRefs=true data-noRefToWebIDL=true data-unknownIdlNames=true data-redefinedIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://html.spec.whatwg.org/multipage/workers.html) (8 May 2018)
- Editor's Draft: [https://html.spec.whatwg.org/multipage/workers.html](https://html.spec.whatwg.org/multipage/workers.html)
- Latest published version: [http://www.w3.org/TR/workers/](http://www.w3.org/TR/workers/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2015/WD-workers-20150924/)
- Repository: [GitHub whatwg/html](https://github.com/whatwg/html)
- Shortname: workers

### Potential issue(s) {.anomalies}

- No normative references found
- Spec uses WebIDL but does not reference it normatively
- Unknown WebIDL names used: `EventHandler`, `OnErrorEventHandler`, `Window`
- WebIDL names also defined elsewhere: 
    * `Worker` also defined in [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- Missing references for WebIDL names: 
     * `EventTarget` defined in [W3C DOM 4.1](https://w3c.github.io/dom/)
     * `RequestCredentials` defined in [Fetch Standard](https://fetch.spec.whatwg.org/)
     * `MessagePort` defined in [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/)
- Missing references for links: 
     * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/)
     * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
     * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/)
     * [`https://infra.spec.whatwg.org/`](https://infra.spec.whatwg.org/)
     * [`https://url.spec.whatwg.org/`](https://url.spec.whatwg.org/)
     * [`https://w3c.github.io/webappsec-referrer-policy/`](https://w3c.github.io/webappsec-referrer-policy/)
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/)
     * [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
     * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/)
     * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
- [Background Fetch](https://wicg.github.io/background-fetch/)
- [Clipboard API and events](https://w3c.github.io/clipboard-apis/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [Compositing and Blending Level 1](https://drafts.fxtf.org/compositing-1/)
- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)
- [Content Security Policy: Embedded Enforcement](https://w3c.github.io/webappsec-csp/embedded/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/)
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [CSS Animations Level 1](https://drafts.csswg.org/css-animations/)
- [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/)
- [CSS Layout API Level 1](https://drafts.css-houdini.org/css-layout-api-1/)
- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/)
- [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/)
- [CSS Transitions](https://drafts.csswg.org/css-transitions/)
- [CSS Writing Modes Level 3](https://drafts.csswg.org/css-writing-modes-3/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File and Directory Entries API](https://wicg.github.io/entries-api/)
- [File API](https://w3c.github.io/FileAPI/)
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/)
- [Generic Sensor API](https://w3c.github.io/sensors/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
- [HTML 5.3](https://w3c.github.io/html/)
- [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/)
- [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/)
- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [Media Session Standard](https://wicg.github.io/mediasession/)
- [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- [MediaStream Recording](https://w3c.github.io/mediacapture-record/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)
- [Permissions](https://w3c.github.io/permissions/)
- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)
- [Server-Sent Events](http://www.w3.org/TR/2015/REC-eventsource-20150203/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [Streams Standard](https://streams.spec.whatwg.org/)
- [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [URL Standard](https://url.spec.whatwg.org/)
- [W3C DOM 4.1](https://w3c.github.io/dom/)
- [Web Animations](https://w3c.github.io/web-animations/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web Budget API](https://wicg.github.io/budget-api/)
- [Web IDL](https://heycam.github.io/webidl/)
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/)
- [WebUSB API](https://wicg.github.io/webusb/)
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)
- [WebXR Device API](https://immersive-web.github.io/webxr/)
- [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Console Standard](https://console.spec.whatwg.org/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [Encoding Standard](https://encoding.spec.whatwg.org/)
- [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html)

Informative references to this spec from:

- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/)
- [Encoding Standard](https://encoding.spec.whatwg.org/)
- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/)
- [File API](https://w3c.github.io/FileAPI/)
- [Metadata API for Media Resources 1.0](https://www.w3.org/TR/mediaont-api-1.0/)
- [Orientation Sensor](https://w3c.github.io/orientation-sensor/)


## WebAssembly JavaScript Interface {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://webassembly.github.io/spec/js-api/) (10 May 2018)
- Editor's Draft: [https://webassembly.github.io/spec/js-api/](https://webassembly.github.io/spec/js-api/)
- Latest published version: [https://www.w3.org/TR/wasm-js-api-1/](https://www.w3.org/TR/wasm-js-api-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-wasm-js-api-1-20180215/)
- Repository: [GitHub webassembly/spec](https://github.com/webassembly/spec)
- Shortname: wasm-js-api-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `Window`
- Missing references for WebIDL names: 
     * `Worklet` defined in [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) or [Web Audio API](https://webaudio.github.io/web-audio-api/) or [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- Missing references for links: 
     * [`https://www.w3.org/TR/wasm-core/`](https://www.w3.org/TR/wasm-core/)
     * [`https://www.w3.org/TR/wasm-js-api/`](https://www.w3.org/TR/wasm-js-api/)
     * [`https://www.w3.org/TR/wasm-web-api/`](https://www.w3.org/TR/wasm-web-api/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## WebGL 2.0 Specification {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.khronos.org/registry/webgl/specs/latest/2.0/) (Fri May 11 2018)
- Repository: [GitHub KhronosGroup/WebGL](https://github.com/KhronosGroup/WebGL)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML 5.3](https://w3c.github.io/html/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [WebXR Device API](https://immersive-web.github.io/webxr/)

Informative references to this spec from:

- [Web Audio API](https://webaudio.github.io/web-audio-api/)
- [Web IDL](https://heycam.github.io/webidl/)


## WebGL Specification {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.khronos.org/registry/webgl/specs/latest/1.0/) (Fri May 11 2018)
- Repository: [GitHub KhronosGroup/WebGL](https://github.com/KhronosGroup/WebGL)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `HTMLCanvasElement`, `HTMLImageElement`, `HTMLVideoElement`, `ImageBitmap`
- Inconsistent references for links: 
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/), related reference "CANVAS" uses URL [`https://www.w3.org/TR/html5/scripting-1.html#the-canvas-element`](https://www.w3.org/TR/html5/scripting-1.html#the-canvas-element)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML 5.3](https://w3c.github.io/html/)
- [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [WebXR Device API](https://immersive-web.github.io/webxr/)

Informative references to this spec from:

- [Web Audio API](https://webaudio.github.io/web-audio-api/)
- [Web IDL](https://heycam.github.io/webidl/)


## WebRTC 1.0: Real-time Communication Between Browsers {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webrtc-pc/)
- Editor's Draft: [https://w3c.github.io/webrtc-pc/](https://w3c.github.io/webrtc-pc/)
- Latest published version: [https://www.w3.org/TR/webrtc/](https://www.w3.org/TR/webrtc/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2017/CR-webrtc-20171102/)
- Repository: [GitHub w3c/webrtc-pc](https://github.com/w3c/webrtc-pc)
- Shortname: webrtc

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020243.352106:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5611a42c2b0c base::debug::StackTrace::StackTrace()
#1 0x5611a42db780 logging::LogMessage::~LogMessage()
#2 0x5611a336b2b1 content::ZygoteHostImpl::Init()
#3 0x5611a2fddc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5611a2fe3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5611a810d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5611a3ffda00 content::RunNamedProcessTypeMain()
#7 0x5611a3ffe2e8 content::ContentMainRunnerImpl::Run()
#8 0x5611a4007f24 service_manager::Main()
#9 0x5611a3ffcf14 content::ContentMain()
#10 0x5611a810c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5611a810ca42 headless::HeadlessBrowserMain()
#12 0x5611a4004f9d headless::HeadlessShellMain()
#13 0x5611a26631ac ChromeMain
#14 0x7f9678a512e1 __libc_start_main
#15 0x5611a266302a _start

Received signal 6
#0 0x5611a42c2b0c base::debug::StackTrace::StackTrace()
#1 0x5611a42c2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f967e9ae0c0 <unknown>
#3 0x7f9678a63fff gsignal
#4 0x7f9678a6542a abort
#5 0x5611a42c1105 base::debug::BreakDebugger()
#6 0x5611a42dbbca logging::LogMessage::~LogMessage()
#7 0x5611a336b2b1 content::ZygoteHostImpl::Init()
#8 0x5611a2fddc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5611a2fe3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5611a810d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5611a3ffda00 content::RunNamedProcessTypeMain()
#12 0x5611a3ffe2e8 content::ContentMainRunnerImpl::Run()
#13 0x5611a4007f24 service_manager::Main()
#14 0x5611a3ffcf14 content::ContentMain()
#15 0x5611a810c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5611a810ca42 headless::HeadlessBrowserMain()
#17 0x5611a4004f9d headless::HeadlessShellMain()
#18 0x5611a26631ac ChromeMain
#19 0x7f9678a512e1 __libc_start_main
#20 0x5611a266302a _start
  r8: 0000000000000000  r9: 00007fff68abb550 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff68abbc48 r13: 0000000000000161 r14: 00007fff68abbc50 r15: 00007fff68abb7e9
  di: 0000000000000002  si: 00007fff68abb550  bp: 00007fff68abb790  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9678a63fff  sp: 00007fff68abb5c8
  ip: 00007f9678a63fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020243.352106:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5611a42c2b0c base::debug::StackTrace::StackTrace()
#1 0x5611a42db780 logging::LogMessage::~LogMessage()
#2 0x5611a336b2b1 content::ZygoteHostImpl::Init()
#3 0x5611a2fddc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5611a2fe3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5611a810d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5611a3ffda00 content::RunNamedProcessTypeMain()
#7 0x5611a3ffe2e8 content::ContentMainRunnerImpl::Run()
#8 0x5611a4007f24 service_manager::Main()
#9 0x5611a3ffcf14 content::ContentMain()
#10 0x5611a810c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5611a810ca42 headless::HeadlessBrowserMain()
#12 0x5611a4004f9d headless::HeadlessShellMain()
#13 0x5611a26631ac ChromeMain
#14 0x7f9678a512e1 __libc_start_main
#15 0x5611a266302a _start

Received signal 6
#0 0x5611a42c2b0c base::debug::StackTrace::StackTrace()
#1 0x5611a42c2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f967e9ae0c0 <unknown>
#3 0x7f9678a63fff gsignal
#4 0x7f9678a6542a abort
#5 0x5611a42c1105 base::debug::BreakDebugger()
#6 0x5611a42dbbca logging::LogMessage::~LogMessage()
#7 0x5611a336b2b1 content::ZygoteHostImpl::Init()
#8 0x5611a2fddc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5611a2fe3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5611a810d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5611a3ffda00 content::RunNamedProcessTypeMain()
#12 0x5611a3ffe2e8 content::ContentMainRunnerImpl::Run()
#13 0x5611a4007f24 service_manager::Main()
#14 0x5611a3ffcf14 content::ContentMain()
#15 0x5611a810c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5611a810ca42 headless::HeadlessBrowserMain()
#17 0x5611a4004f9d headless::HeadlessShellMain()
#18 0x5611a26631ac ChromeMain
#19 0x7f9678a512e1 __libc_start_main
#20 0x5611a266302a _start
  r8: 0000000000000000  r9: 00007fff68abb550 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff68abbc48 r13: 0000000000000161 r14: 00007fff68abbc50 r15: 00007fff68abb7e9
  di: 0000000000000002  si: 00007fff68abb550  bp: 00007fff68abb790  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9678a63fff  sp: 00007fff68abb5c8
  ip: 00007f9678a63fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at Interface.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:244:50)
    at emitNone (events.js:111:20)
    at Interface.emit (events.js:208:7)
    at Interface.close (readline.js:370:8)
    at Socket.onend (readline.js:149:10)
    at emitNone (events.js:111:20)
    at Socket.emit (events.js:208:7)
    at endReadableNT (_stream_readable.js:1064:12)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)`

Reffy could not render this specification as a DOM tree and cannot say anything about it as a result. In particular, it cannot include content defined in this specification in the analysis of other specifications crawled in this report.

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Web Audio API](https://webaudio.github.io/web-audio-api/)

Informative references to this spec from:

- [Web Budget API](https://wicg.github.io/budget-api/)


## WebUSB API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/webusb/) (8 May 2018)
- Repository: [GitHub wicg/webusb](https://github.com/wicg/webusb)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `EventHandler`, `Navigator`, `Window`
- Inconsistent references for links: 
     * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/), related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## WebVTT: The Web Video Text Tracks Format {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webvtt/) (30 March 2018)
- Editor's Draft: [https://w3c.github.io/webvtt/](https://w3c.github.io/webvtt/)
- Latest published version: [https://www.w3.org/TR/webvtt1/](https://www.w3.org/TR/webvtt1/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)
- Repository: [GitHub w3c/webvtt](https://github.com/w3c/webvtt)
- Shortname: webvtt1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `TextTrackCue`, `Window`
- Missing references for links: 
     * [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [HTML 5.3](https://w3c.github.io/html/)


## WebXR Device API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://immersive-web.github.io/webxr/) (24 April 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMHighResTimeStamp`, `EventHandler`, `HTMLCanvasElement`, `Navigator`, `Window`
- Missing references for WebIDL names: 
     * `WebGLRenderingContext` defined in [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
     * `WebGL2RenderingContext` defined in [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
     * `WebGLFramebuffer` defined in [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
     * `WebGLContextAttributes` defined in [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
     * `WebGLRenderingContextBase` defined in [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- Missing references for links: 
     * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/orientation-sensor/`](https://w3c.github.io/orientation-sensor/), related reference "ORIENTATION-SENSOR" uses URL [`https://www.w3.org/TR/orientation-sensor/`](https://www.w3.org/TR/orientation-sensor/)
     * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Worklets Level 1 {data-spec=true data-anomaly=true data-redefinedIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.css-houdini.org/worklets/) (8 May 2018)
- Editor's Draft: [https://drafts.css-houdini.org/worklets/](https://drafts.css-houdini.org/worklets/)
- Latest published version: [http://www.w3.org/TR/worklets-1/](http://www.w3.org/TR/worklets-1/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-worklets-1-20160607/)
- Shortname: worklets-1

### Potential issue(s) {.anomalies}

- WebIDL names also defined elsewhere: 
    * `Worklet` also defined in [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) and [Web Audio API](https://webaudio.github.io/web-audio-api/)
- Missing references for links: 
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [CSS Layout API Level 1](https://drafts.css-houdini.org/css-layout-api-1/)
- [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Console Standard](https://console.spec.whatwg.org/)
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/)

Informative references to this spec from:

- [Web IDL](https://heycam.github.io/webidl/)


## XMLHttpRequest Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://xhr.spec.whatwg.org/) (8 May 2018)
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

- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File API](https://w3c.github.io/FileAPI/)
- [HTML 5.3](https://w3c.github.io/html/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)

Informative references to this spec from:

- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/)




