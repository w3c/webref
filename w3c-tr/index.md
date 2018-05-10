% Specifications that define WebIDL content (W3C perspective)
% Reffy
% May 10, 2018

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
[0510/020537.265717:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55aff3a6eb0c base::debug::StackTrace::StackTrace()
#1 0x55aff3a87780 logging::LogMessage::~LogMessage()
#2 0x55aff2b172b1 content::ZygoteHostImpl::Init()
#3 0x55aff2789c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55aff278fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55aff78b99a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55aff37a9a00 content::RunNamedProcessTypeMain()
#7 0x55aff37aa2e8 content::ContentMainRunnerImpl::Run()
#8 0x55aff37b3f24 service_manager::Main()
#9 0x55aff37a8f14 content::ContentMain()
#10 0x55aff78b89b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55aff78b8a42 headless::HeadlessBrowserMain()
#12 0x55aff37b0f9d headless::HeadlessShellMain()
#13 0x55aff1e0f1ac ChromeMain
#14 0x7f2da10de2e1 __libc_start_main
#15 0x55aff1e0f02a _start

Received signal 6
#0 0x55aff3a6eb0c base::debug::StackTrace::StackTrace()
#1 0x55aff3a6e671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2da703b0c0 <unknown>
#3 0x7f2da10f0fff gsignal
#4 0x7f2da10f242a abort
#5 0x55aff3a6d105 base::debug::BreakDebugger()
#6 0x55aff3a87bca logging::LogMessage::~LogMessage()
#7 0x55aff2b172b1 content::ZygoteHostImpl::Init()
#8 0x55aff2789c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55aff278fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55aff78b99a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55aff37a9a00 content::RunNamedProcessTypeMain()
#12 0x55aff37aa2e8 content::ContentMainRunnerImpl::Run()
#13 0x55aff37b3f24 service_manager::Main()
#14 0x55aff37a8f14 content::ContentMain()
#15 0x55aff78b89b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55aff78b8a42 headless::HeadlessBrowserMain()
#17 0x55aff37b0f9d headless::HeadlessShellMain()
#18 0x55aff1e0f1ac ChromeMain
#19 0x7f2da10de2e1 __libc_start_main
#20 0x55aff1e0f02a _start
  r8: 0000000000000000  r9: 00007ffce70b9e60 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffce70ba558 r13: 0000000000000161 r14: 00007ffce70ba560 r15: 00007ffce70ba0f9
  di: 0000000000000002  si: 00007ffce70b9e60  bp: 00007ffce70ba0a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2da10f0fff  sp: 00007ffce70b9ed8
  ip: 00007f2da10f0fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020537.265717:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55aff3a6eb0c base::debug::StackTrace::StackTrace()
#1 0x55aff3a87780 logging::LogMessage::~LogMessage()
#2 0x55aff2b172b1 content::ZygoteHostImpl::Init()
#3 0x55aff2789c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55aff278fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55aff78b99a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55aff37a9a00 content::RunNamedProcessTypeMain()
#7 0x55aff37aa2e8 content::ContentMainRunnerImpl::Run()
#8 0x55aff37b3f24 service_manager::Main()
#9 0x55aff37a8f14 content::ContentMain()
#10 0x55aff78b89b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55aff78b8a42 headless::HeadlessBrowserMain()
#12 0x55aff37b0f9d headless::HeadlessShellMain()
#13 0x55aff1e0f1ac ChromeMain
#14 0x7f2da10de2e1 __libc_start_main
#15 0x55aff1e0f02a _start

Received signal 6
#0 0x55aff3a6eb0c base::debug::StackTrace::StackTrace()
#1 0x55aff3a6e671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2da703b0c0 <unknown>
#3 0x7f2da10f0fff gsignal
#4 0x7f2da10f242a abort
#5 0x55aff3a6d105 base::debug::BreakDebugger()
#6 0x55aff3a87bca logging::LogMessage::~LogMessage()
#7 0x55aff2b172b1 content::ZygoteHostImpl::Init()
#8 0x55aff2789c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55aff278fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55aff78b99a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55aff37a9a00 content::RunNamedProcessTypeMain()
#12 0x55aff37aa2e8 content::ContentMainRunnerImpl::Run()
#13 0x55aff37b3f24 service_manager::Main()
#14 0x55aff37a8f14 content::ContentMain()
#15 0x55aff78b89b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55aff78b8a42 headless::HeadlessBrowserMain()
#17 0x55aff37b0f9d headless::HeadlessShellMain()
#18 0x55aff1e0f1ac ChromeMain
#19 0x7f2da10de2e1 __libc_start_main
#20 0x55aff1e0f02a _start
  r8: 0000000000000000  r9: 00007ffce70b9e60 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffce70ba558 r13: 0000000000000161 r14: 00007ffce70ba560 r15: 00007ffce70ba0f9
  di: 0000000000000002  si: 00007ffce70b9e60  bp: 00007ffce70ba0a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2da10f0fff  sp: 00007ffce70b9ed8
  ip: 00007f2da10f0fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020536.467310:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b641e5cb0c base::debug::StackTrace::StackTrace()
#1 0x55b641e75780 logging::LogMessage::~LogMessage()
#2 0x55b640f052b1 content::ZygoteHostImpl::Init()
#3 0x55b640b77c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b640b7da69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b645ca79a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b641b97a00 content::RunNamedProcessTypeMain()
#7 0x55b641b982e8 content::ContentMainRunnerImpl::Run()
#8 0x55b641ba1f24 service_manager::Main()
#9 0x55b641b96f14 content::ContentMain()
#10 0x55b645ca69b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b645ca6a42 headless::HeadlessBrowserMain()
#12 0x55b641b9ef9d headless::HeadlessShellMain()
#13 0x55b6401fd1ac ChromeMain
#14 0x7fe5b19cd2e1 __libc_start_main
#15 0x55b6401fd02a _start

Received signal 6
#0 0x55b641e5cb0c base::debug::StackTrace::StackTrace()
#1 0x55b641e5c671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe5b792a0c0 <unknown>
#3 0x7fe5b19dffff gsignal
#4 0x7fe5b19e142a abort
#5 0x55b641e5b105 base::debug::BreakDebugger()
#6 0x55b641e75bca logging::LogMessage::~LogMessage()
#7 0x55b640f052b1 content::ZygoteHostImpl::Init()
#8 0x55b640b77c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b640b7da69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b645ca79a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b641b97a00 content::RunNamedProcessTypeMain()
#12 0x55b641b982e8 content::ContentMainRunnerImpl::Run()
#13 0x55b641ba1f24 service_manager::Main()
#14 0x55b641b96f14 content::ContentMain()
#15 0x55b645ca69b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b645ca6a42 headless::HeadlessBrowserMain()
#17 0x55b641b9ef9d headless::HeadlessShellMain()
#18 0x55b6401fd1ac ChromeMain
#19 0x7fe5b19cd2e1 __libc_start_main
#20 0x55b6401fd02a _start
  r8: 0000000000000000  r9: 00007ffd36ab0d40 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd36ab1438 r13: 0000000000000161 r14: 00007ffd36ab1440 r15: 00007ffd36ab0fd9
  di: 0000000000000002  si: 00007ffd36ab0d40  bp: 00007ffd36ab0f80  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe5b19dffff  sp: 00007ffd36ab0db8
  ip: 00007fe5b19dffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020536.467310:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b641e5cb0c base::debug::StackTrace::StackTrace()
#1 0x55b641e75780 logging::LogMessage::~LogMessage()
#2 0x55b640f052b1 content::ZygoteHostImpl::Init()
#3 0x55b640b77c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b640b7da69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b645ca79a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b641b97a00 content::RunNamedProcessTypeMain()
#7 0x55b641b982e8 content::ContentMainRunnerImpl::Run()
#8 0x55b641ba1f24 service_manager::Main()
#9 0x55b641b96f14 content::ContentMain()
#10 0x55b645ca69b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b645ca6a42 headless::HeadlessBrowserMain()
#12 0x55b641b9ef9d headless::HeadlessShellMain()
#13 0x55b6401fd1ac ChromeMain
#14 0x7fe5b19cd2e1 __libc_start_main
#15 0x55b6401fd02a _start

Received signal 6
#0 0x55b641e5cb0c base::debug::StackTrace::StackTrace()
#1 0x55b641e5c671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe5b792a0c0 <unknown>
#3 0x7fe5b19dffff gsignal
#4 0x7fe5b19e142a abort
#5 0x55b641e5b105 base::debug::BreakDebugger()
#6 0x55b641e75bca logging::LogMessage::~LogMessage()
#7 0x55b640f052b1 content::ZygoteHostImpl::Init()
#8 0x55b640b77c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b640b7da69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b645ca79a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b641b97a00 content::RunNamedProcessTypeMain()
#12 0x55b641b982e8 content::ContentMainRunnerImpl::Run()
#13 0x55b641ba1f24 service_manager::Main()
#14 0x55b641b96f14 content::ContentMain()
#15 0x55b645ca69b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b645ca6a42 headless::HeadlessBrowserMain()
#17 0x55b641b9ef9d headless::HeadlessShellMain()
#18 0x55b6401fd1ac ChromeMain
#19 0x7fe5b19cd2e1 __libc_start_main
#20 0x55b6401fd02a _start
  r8: 0000000000000000  r9: 00007ffd36ab0d40 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd36ab1438 r13: 0000000000000161 r14: 00007ffd36ab1440 r15: 00007ffd36ab0fd9
  di: 0000000000000002  si: 00007ffd36ab0d40  bp: 00007ffd36ab0f80  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe5b19dffff  sp: 00007ffd36ab0db8
  ip: 00007fe5b19dffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020537.428395:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55572b978b0c base::debug::StackTrace::StackTrace()
#1 0x55572b991780 logging::LogMessage::~LogMessage()
#2 0x55572aa212b1 content::ZygoteHostImpl::Init()
#3 0x55572a693c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55572a699a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55572f7c39a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55572b6b3a00 content::RunNamedProcessTypeMain()
#7 0x55572b6b42e8 content::ContentMainRunnerImpl::Run()
#8 0x55572b6bdf24 service_manager::Main()
#9 0x55572b6b2f14 content::ContentMain()
#10 0x55572f7c29b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55572f7c2a42 headless::HeadlessBrowserMain()
#12 0x55572b6baf9d headless::HeadlessShellMain()
#13 0x555729d191ac ChromeMain
#14 0x7ff6e83ec2e1 __libc_start_main
#15 0x555729d1902a _start

Received signal 6
#0 0x55572b978b0c base::debug::StackTrace::StackTrace()
#1 0x55572b978671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ff6ee3490c0 <unknown>
#3 0x7ff6e83fefff gsignal
#4 0x7ff6e840042a abort
#5 0x55572b977105 base::debug::BreakDebugger()
#6 0x55572b991bca logging::LogMessage::~LogMessage()
#7 0x55572aa212b1 content::ZygoteHostImpl::Init()
#8 0x55572a693c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55572a699a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55572f7c39a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55572b6b3a00 content::RunNamedProcessTypeMain()
#12 0x55572b6b42e8 content::ContentMainRunnerImpl::Run()
#13 0x55572b6bdf24 service_manager::Main()
#14 0x55572b6b2f14 content::ContentMain()
#15 0x55572f7c29b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55572f7c2a42 headless::HeadlessBrowserMain()
#17 0x55572b6baf9d headless::HeadlessShellMain()
#18 0x555729d191ac ChromeMain
#19 0x7ff6e83ec2e1 __libc_start_main
#20 0x555729d1902a _start
  r8: 0000000000000000  r9: 00007ffeca130c40 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffeca131338 r13: 0000000000000161 r14: 00007ffeca131340 r15: 00007ffeca130ed9
  di: 0000000000000002  si: 00007ffeca130c40  bp: 00007ffeca130e80  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ff6e83fefff  sp: 00007ffeca130cb8
  ip: 00007ff6e83fefff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020537.428395:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55572b978b0c base::debug::StackTrace::StackTrace()
#1 0x55572b991780 logging::LogMessage::~LogMessage()
#2 0x55572aa212b1 content::ZygoteHostImpl::Init()
#3 0x55572a693c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55572a699a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55572f7c39a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55572b6b3a00 content::RunNamedProcessTypeMain()
#7 0x55572b6b42e8 content::ContentMainRunnerImpl::Run()
#8 0x55572b6bdf24 service_manager::Main()
#9 0x55572b6b2f14 content::ContentMain()
#10 0x55572f7c29b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55572f7c2a42 headless::HeadlessBrowserMain()
#12 0x55572b6baf9d headless::HeadlessShellMain()
#13 0x555729d191ac ChromeMain
#14 0x7ff6e83ec2e1 __libc_start_main
#15 0x555729d1902a _start

Received signal 6
#0 0x55572b978b0c base::debug::StackTrace::StackTrace()
#1 0x55572b978671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ff6ee3490c0 <unknown>
#3 0x7ff6e83fefff gsignal
#4 0x7ff6e840042a abort
#5 0x55572b977105 base::debug::BreakDebugger()
#6 0x55572b991bca logging::LogMessage::~LogMessage()
#7 0x55572aa212b1 content::ZygoteHostImpl::Init()
#8 0x55572a693c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55572a699a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55572f7c39a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55572b6b3a00 content::RunNamedProcessTypeMain()
#12 0x55572b6b42e8 content::ContentMainRunnerImpl::Run()
#13 0x55572b6bdf24 service_manager::Main()
#14 0x55572b6b2f14 content::ContentMain()
#15 0x55572f7c29b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55572f7c2a42 headless::HeadlessBrowserMain()
#17 0x55572b6baf9d headless::HeadlessShellMain()
#18 0x555729d191ac ChromeMain
#19 0x7ff6e83ec2e1 __libc_start_main
#20 0x555729d1902a _start
  r8: 0000000000000000  r9: 00007ffeca130c40 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffeca131338 r13: 0000000000000161 r14: 00007ffeca131340 r15: 00007ffeca130ed9
  di: 0000000000000002  si: 00007ffeca130c40  bp: 00007ffeca130e80  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ff6e83fefff  sp: 00007ffeca130cb8
  ip: 00007ff6e83fefff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- Crawled version: [Editor's Draft](https://w3c.github.io/clipboard-apis/) (14 March 2018)
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
[0510/020640.229693:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558811165b0c base::debug::StackTrace::StackTrace()
#1 0x55881117e780 logging::LogMessage::~LogMessage()
#2 0x55881020e2b1 content::ZygoteHostImpl::Init()
#3 0x55880fe80c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55880fe86a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558814fb09a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558810ea0a00 content::RunNamedProcessTypeMain()
#7 0x558810ea12e8 content::ContentMainRunnerImpl::Run()
#8 0x558810eaaf24 service_manager::Main()
#9 0x558810e9ff14 content::ContentMain()
#10 0x558814faf9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558814fafa42 headless::HeadlessBrowserMain()
#12 0x558810ea7f9d headless::HeadlessShellMain()
#13 0x55880f5061ac ChromeMain
#14 0x7f66e19f62e1 __libc_start_main
#15 0x55880f50602a _start

Received signal 6
#0 0x558811165b0c base::debug::StackTrace::StackTrace()
#1 0x558811165671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f66e79530c0 <unknown>
#3 0x7f66e1a08fff gsignal
#4 0x7f66e1a0a42a abort
#5 0x558811164105 base::debug::BreakDebugger()
#6 0x55881117ebca logging::LogMessage::~LogMessage()
#7 0x55881020e2b1 content::ZygoteHostImpl::Init()
#8 0x55880fe80c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55880fe86a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558814fb09a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558810ea0a00 content::RunNamedProcessTypeMain()
#12 0x558810ea12e8 content::ContentMainRunnerImpl::Run()
#13 0x558810eaaf24 service_manager::Main()
#14 0x558810e9ff14 content::ContentMain()
#15 0x558814faf9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558814fafa42 headless::HeadlessBrowserMain()
#17 0x558810ea7f9d headless::HeadlessShellMain()
#18 0x55880f5061ac ChromeMain
#19 0x7f66e19f62e1 __libc_start_main
#20 0x55880f50602a _start
  r8: 0000000000000000  r9: 00007fff3df37df0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff3df384e8 r13: 0000000000000161 r14: 00007fff3df384f0 r15: 00007fff3df38089
  di: 0000000000000002  si: 00007fff3df37df0  bp: 00007fff3df38030  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f66e1a08fff  sp: 00007fff3df37e68
  ip: 00007f66e1a08fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020640.229693:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558811165b0c base::debug::StackTrace::StackTrace()
#1 0x55881117e780 logging::LogMessage::~LogMessage()
#2 0x55881020e2b1 content::ZygoteHostImpl::Init()
#3 0x55880fe80c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55880fe86a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558814fb09a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558810ea0a00 content::RunNamedProcessTypeMain()
#7 0x558810ea12e8 content::ContentMainRunnerImpl::Run()
#8 0x558810eaaf24 service_manager::Main()
#9 0x558810e9ff14 content::ContentMain()
#10 0x558814faf9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558814fafa42 headless::HeadlessBrowserMain()
#12 0x558810ea7f9d headless::HeadlessShellMain()
#13 0x55880f5061ac ChromeMain
#14 0x7f66e19f62e1 __libc_start_main
#15 0x55880f50602a _start

Received signal 6
#0 0x558811165b0c base::debug::StackTrace::StackTrace()
#1 0x558811165671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f66e79530c0 <unknown>
#3 0x7f66e1a08fff gsignal
#4 0x7f66e1a0a42a abort
#5 0x558811164105 base::debug::BreakDebugger()
#6 0x55881117ebca logging::LogMessage::~LogMessage()
#7 0x55881020e2b1 content::ZygoteHostImpl::Init()
#8 0x55880fe80c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55880fe86a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558814fb09a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558810ea0a00 content::RunNamedProcessTypeMain()
#12 0x558810ea12e8 content::ContentMainRunnerImpl::Run()
#13 0x558810eaaf24 service_manager::Main()
#14 0x558810e9ff14 content::ContentMain()
#15 0x558814faf9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558814fafa42 headless::HeadlessBrowserMain()
#17 0x558810ea7f9d headless::HeadlessShellMain()
#18 0x55880f5061ac ChromeMain
#19 0x7f66e19f62e1 __libc_start_main
#20 0x55880f50602a _start
  r8: 0000000000000000  r9: 00007fff3df37df0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff3df384e8 r13: 0000000000000161 r14: 00007fff3df384f0 r15: 00007fff3df38089
  di: 0000000000000002  si: 00007fff3df37df0  bp: 00007fff3df38030  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f66e1a08fff  sp: 00007fff3df37e68
  ip: 00007f66e1a08fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


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

- Crawled version: [Editor's Draft](https://drafts.csswg.org/css-animations/) (6 May 2018)
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
[0510/020455.239628:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ff4584fb0c base::debug::StackTrace::StackTrace()
#1 0x55ff45868780 logging::LogMessage::~LogMessage()
#2 0x55ff448f82b1 content::ZygoteHostImpl::Init()
#3 0x55ff4456ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ff44570a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ff4969a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ff4558aa00 content::RunNamedProcessTypeMain()
#7 0x55ff4558b2e8 content::ContentMainRunnerImpl::Run()
#8 0x55ff45594f24 service_manager::Main()
#9 0x55ff45589f14 content::ContentMain()
#10 0x55ff496999b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ff49699a42 headless::HeadlessBrowserMain()
#12 0x55ff45591f9d headless::HeadlessShellMain()
#13 0x55ff43bf01ac ChromeMain
#14 0x7fcf9ef3a2e1 __libc_start_main
#15 0x55ff43bf002a _start

Received signal 6
#0 0x55ff4584fb0c base::debug::StackTrace::StackTrace()
#1 0x55ff4584f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fcfa4e970c0 <unknown>
#3 0x7fcf9ef4cfff gsignal
#4 0x7fcf9ef4e42a abort
#5 0x55ff4584e105 base::debug::BreakDebugger()
#6 0x55ff45868bca logging::LogMessage::~LogMessage()
#7 0x55ff448f82b1 content::ZygoteHostImpl::Init()
#8 0x55ff4456ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ff44570a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ff4969a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ff4558aa00 content::RunNamedProcessTypeMain()
#12 0x55ff4558b2e8 content::ContentMainRunnerImpl::Run()
#13 0x55ff45594f24 service_manager::Main()
#14 0x55ff45589f14 content::ContentMain()
#15 0x55ff496999b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ff49699a42 headless::HeadlessBrowserMain()
#17 0x55ff45591f9d headless::HeadlessShellMain()
#18 0x55ff43bf01ac ChromeMain
#19 0x7fcf9ef3a2e1 __libc_start_main
#20 0x55ff43bf002a _start
  r8: 0000000000000000  r9: 00007ffedeb71680 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffedeb71d78 r13: 0000000000000161 r14: 00007ffedeb71d80 r15: 00007ffedeb71919
  di: 0000000000000002  si: 00007ffedeb71680  bp: 00007ffedeb718c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fcf9ef4cfff  sp: 00007ffedeb716f8
  ip: 00007fcf9ef4cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020455.239628:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ff4584fb0c base::debug::StackTrace::StackTrace()
#1 0x55ff45868780 logging::LogMessage::~LogMessage()
#2 0x55ff448f82b1 content::ZygoteHostImpl::Init()
#3 0x55ff4456ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ff44570a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ff4969a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ff4558aa00 content::RunNamedProcessTypeMain()
#7 0x55ff4558b2e8 content::ContentMainRunnerImpl::Run()
#8 0x55ff45594f24 service_manager::Main()
#9 0x55ff45589f14 content::ContentMain()
#10 0x55ff496999b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ff49699a42 headless::HeadlessBrowserMain()
#12 0x55ff45591f9d headless::HeadlessShellMain()
#13 0x55ff43bf01ac ChromeMain
#14 0x7fcf9ef3a2e1 __libc_start_main
#15 0x55ff43bf002a _start

Received signal 6
#0 0x55ff4584fb0c base::debug::StackTrace::StackTrace()
#1 0x55ff4584f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fcfa4e970c0 <unknown>
#3 0x7fcf9ef4cfff gsignal
#4 0x7fcf9ef4e42a abort
#5 0x55ff4584e105 base::debug::BreakDebugger()
#6 0x55ff45868bca logging::LogMessage::~LogMessage()
#7 0x55ff448f82b1 content::ZygoteHostImpl::Init()
#8 0x55ff4456ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ff44570a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ff4969a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ff4558aa00 content::RunNamedProcessTypeMain()
#12 0x55ff4558b2e8 content::ContentMainRunnerImpl::Run()
#13 0x55ff45594f24 service_manager::Main()
#14 0x55ff45589f14 content::ContentMain()
#15 0x55ff496999b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ff49699a42 headless::HeadlessBrowserMain()
#17 0x55ff45591f9d headless::HeadlessShellMain()
#18 0x55ff43bf01ac ChromeMain
#19 0x7fcf9ef3a2e1 __libc_start_main
#20 0x55ff43bf002a _start
  r8: 0000000000000000  r9: 00007ffedeb71680 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffedeb71d78 r13: 0000000000000161 r14: 00007ffedeb71d80 r15: 00007ffedeb71919
  di: 0000000000000002  si: 00007ffedeb71680  bp: 00007ffedeb718c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fcf9ef4cfff  sp: 00007ffedeb716f8
  ip: 00007fcf9ef4cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- Crawled version: [Editor's Draft](https://drafts.fxtf.org/filter-effects/) (7 May 2018)
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
[0510/020614.962064:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5653e79dcb0c base::debug::StackTrace::StackTrace()
#1 0x5653e79f5780 logging::LogMessage::~LogMessage()
#2 0x5653e6a852b1 content::ZygoteHostImpl::Init()
#3 0x5653e66f7c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5653e66fda69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5653eb8279a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5653e7717a00 content::RunNamedProcessTypeMain()
#7 0x5653e77182e8 content::ContentMainRunnerImpl::Run()
#8 0x5653e7721f24 service_manager::Main()
#9 0x5653e7716f14 content::ContentMain()
#10 0x5653eb8269b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5653eb826a42 headless::HeadlessBrowserMain()
#12 0x5653e771ef9d headless::HeadlessShellMain()
#13 0x5653e5d7d1ac ChromeMain
#14 0x7f70cb9c22e1 __libc_start_main
#15 0x5653e5d7d02a _start

Received signal 6
#0 0x5653e79dcb0c base::debug::StackTrace::StackTrace()
#1 0x5653e79dc671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f70d191f0c0 <unknown>
#3 0x7f70cb9d4fff gsignal
#4 0x7f70cb9d642a abort
#5 0x5653e79db105 base::debug::BreakDebugger()
#6 0x5653e79f5bca logging::LogMessage::~LogMessage()
#7 0x5653e6a852b1 content::ZygoteHostImpl::Init()
#8 0x5653e66f7c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5653e66fda69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5653eb8279a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5653e7717a00 content::RunNamedProcessTypeMain()
#12 0x5653e77182e8 content::ContentMainRunnerImpl::Run()
#13 0x5653e7721f24 service_manager::Main()
#14 0x5653e7716f14 content::ContentMain()
#15 0x5653eb8269b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5653eb826a42 headless::HeadlessBrowserMain()
#17 0x5653e771ef9d headless::HeadlessShellMain()
#18 0x5653e5d7d1ac ChromeMain
#19 0x7f70cb9c22e1 __libc_start_main
#20 0x5653e5d7d02a _start
  r8: 0000000000000000  r9: 00007fff0445ddf0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff0445e4e8 r13: 0000000000000161 r14: 00007fff0445e4f0 r15: 00007fff0445e089
  di: 0000000000000002  si: 00007fff0445ddf0  bp: 00007fff0445e030  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f70cb9d4fff  sp: 00007fff0445de68
  ip: 00007f70cb9d4fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020614.962064:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5653e79dcb0c base::debug::StackTrace::StackTrace()
#1 0x5653e79f5780 logging::LogMessage::~LogMessage()
#2 0x5653e6a852b1 content::ZygoteHostImpl::Init()
#3 0x5653e66f7c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5653e66fda69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5653eb8279a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5653e7717a00 content::RunNamedProcessTypeMain()
#7 0x5653e77182e8 content::ContentMainRunnerImpl::Run()
#8 0x5653e7721f24 service_manager::Main()
#9 0x5653e7716f14 content::ContentMain()
#10 0x5653eb8269b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5653eb826a42 headless::HeadlessBrowserMain()
#12 0x5653e771ef9d headless::HeadlessShellMain()
#13 0x5653e5d7d1ac ChromeMain
#14 0x7f70cb9c22e1 __libc_start_main
#15 0x5653e5d7d02a _start

Received signal 6
#0 0x5653e79dcb0c base::debug::StackTrace::StackTrace()
#1 0x5653e79dc671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f70d191f0c0 <unknown>
#3 0x7f70cb9d4fff gsignal
#4 0x7f70cb9d642a abort
#5 0x5653e79db105 base::debug::BreakDebugger()
#6 0x5653e79f5bca logging::LogMessage::~LogMessage()
#7 0x5653e6a852b1 content::ZygoteHostImpl::Init()
#8 0x5653e66f7c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5653e66fda69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5653eb8279a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5653e7717a00 content::RunNamedProcessTypeMain()
#12 0x5653e77182e8 content::ContentMainRunnerImpl::Run()
#13 0x5653e7721f24 service_manager::Main()
#14 0x5653e7716f14 content::ContentMain()
#15 0x5653eb8269b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5653eb826a42 headless::HeadlessBrowserMain()
#17 0x5653e771ef9d headless::HeadlessShellMain()
#18 0x5653e5d7d1ac ChromeMain
#19 0x7f70cb9c22e1 __libc_start_main
#20 0x5653e5d7d02a _start
  r8: 0000000000000000  r9: 00007fff0445ddf0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff0445e4e8 r13: 0000000000000161 r14: 00007fff0445e4f0 r15: 00007fff0445e089
  di: 0000000000000002  si: 00007fff0445ddf0  bp: 00007fff0445e030  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f70cb9d4fff  sp: 00007fff0445de68
  ip: 00007f70cb9d4fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020614.641172:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f12fe77b0c base::debug::StackTrace::StackTrace()
#1 0x55f12fe90780 logging::LogMessage::~LogMessage()
#2 0x55f12ef202b1 content::ZygoteHostImpl::Init()
#3 0x55f12eb92c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f12eb98a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f133cc29a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f12fbb2a00 content::RunNamedProcessTypeMain()
#7 0x55f12fbb32e8 content::ContentMainRunnerImpl::Run()
#8 0x55f12fbbcf24 service_manager::Main()
#9 0x55f12fbb1f14 content::ContentMain()
#10 0x55f133cc19b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f133cc1a42 headless::HeadlessBrowserMain()
#12 0x55f12fbb9f9d headless::HeadlessShellMain()
#13 0x55f12e2181ac ChromeMain
#14 0x7fb3c6c132e1 __libc_start_main
#15 0x55f12e21802a _start

Received signal 6
#0 0x55f12fe77b0c base::debug::StackTrace::StackTrace()
#1 0x55f12fe77671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb3ccb700c0 <unknown>
#3 0x7fb3c6c25fff gsignal
#4 0x7fb3c6c2742a abort
#5 0x55f12fe76105 base::debug::BreakDebugger()
#6 0x55f12fe90bca logging::LogMessage::~LogMessage()
#7 0x55f12ef202b1 content::ZygoteHostImpl::Init()
#8 0x55f12eb92c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f12eb98a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f133cc29a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f12fbb2a00 content::RunNamedProcessTypeMain()
#12 0x55f12fbb32e8 content::ContentMainRunnerImpl::Run()
#13 0x55f12fbbcf24 service_manager::Main()
#14 0x55f12fbb1f14 content::ContentMain()
#15 0x55f133cc19b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f133cc1a42 headless::HeadlessBrowserMain()
#17 0x55f12fbb9f9d headless::HeadlessShellMain()
#18 0x55f12e2181ac ChromeMain
#19 0x7fb3c6c132e1 __libc_start_main
#20 0x55f12e21802a _start
  r8: 0000000000000000  r9: 00007fff70025a60 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff70026158 r13: 0000000000000161 r14: 00007fff70026160 r15: 00007fff70025cf9
  di: 0000000000000002  si: 00007fff70025a60  bp: 00007fff70025ca0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb3c6c25fff  sp: 00007fff70025ad8
  ip: 00007fb3c6c25fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020614.641172:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f12fe77b0c base::debug::StackTrace::StackTrace()
#1 0x55f12fe90780 logging::LogMessage::~LogMessage()
#2 0x55f12ef202b1 content::ZygoteHostImpl::Init()
#3 0x55f12eb92c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f12eb98a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f133cc29a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f12fbb2a00 content::RunNamedProcessTypeMain()
#7 0x55f12fbb32e8 content::ContentMainRunnerImpl::Run()
#8 0x55f12fbbcf24 service_manager::Main()
#9 0x55f12fbb1f14 content::ContentMain()
#10 0x55f133cc19b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f133cc1a42 headless::HeadlessBrowserMain()
#12 0x55f12fbb9f9d headless::HeadlessShellMain()
#13 0x55f12e2181ac ChromeMain
#14 0x7fb3c6c132e1 __libc_start_main
#15 0x55f12e21802a _start

Received signal 6
#0 0x55f12fe77b0c base::debug::StackTrace::StackTrace()
#1 0x55f12fe77671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb3ccb700c0 <unknown>
#3 0x7fb3c6c25fff gsignal
#4 0x7fb3c6c2742a abort
#5 0x55f12fe76105 base::debug::BreakDebugger()
#6 0x55f12fe90bca logging::LogMessage::~LogMessage()
#7 0x55f12ef202b1 content::ZygoteHostImpl::Init()
#8 0x55f12eb92c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f12eb98a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f133cc29a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f12fbb2a00 content::RunNamedProcessTypeMain()
#12 0x55f12fbb32e8 content::ContentMainRunnerImpl::Run()
#13 0x55f12fbbcf24 service_manager::Main()
#14 0x55f12fbb1f14 content::ContentMain()
#15 0x55f133cc19b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f133cc1a42 headless::HeadlessBrowserMain()
#17 0x55f12fbb9f9d headless::HeadlessShellMain()
#18 0x55f12e2181ac ChromeMain
#19 0x7fb3c6c132e1 __libc_start_main
#20 0x55f12e21802a _start
  r8: 0000000000000000  r9: 00007fff70025a60 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff70026158 r13: 0000000000000161 r14: 00007fff70026160 r15: 00007fff70025cf9
  di: 0000000000000002  si: 00007fff70025a60  bp: 00007fff70025ca0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb3c6c25fff  sp: 00007fff70025ad8
  ip: 00007fb3c6c25fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- Crawled version: [Editor's Draft](https://w3c.github.io/html/) (1 May 2018)
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
[0510/020613.996030:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x562bd6030b0c base::debug::StackTrace::StackTrace()
#1 0x562bd6049780 logging::LogMessage::~LogMessage()
#2 0x562bd50d92b1 content::ZygoteHostImpl::Init()
#3 0x562bd4d4bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x562bd4d51a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x562bd9e7b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x562bd5d6ba00 content::RunNamedProcessTypeMain()
#7 0x562bd5d6c2e8 content::ContentMainRunnerImpl::Run()
#8 0x562bd5d75f24 service_manager::Main()
#9 0x562bd5d6af14 content::ContentMain()
#10 0x562bd9e7a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x562bd9e7aa42 headless::HeadlessBrowserMain()
#12 0x562bd5d72f9d headless::HeadlessShellMain()
#13 0x562bd43d11ac ChromeMain
#14 0x7fc9451622e1 __libc_start_main
#15 0x562bd43d102a _start

Received signal 6
#0 0x562bd6030b0c base::debug::StackTrace::StackTrace()
#1 0x562bd6030671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc94b0bf0c0 <unknown>
#3 0x7fc945174fff gsignal
#4 0x7fc94517642a abort
#5 0x562bd602f105 base::debug::BreakDebugger()
#6 0x562bd6049bca logging::LogMessage::~LogMessage()
#7 0x562bd50d92b1 content::ZygoteHostImpl::Init()
#8 0x562bd4d4bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x562bd4d51a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x562bd9e7b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x562bd5d6ba00 content::RunNamedProcessTypeMain()
#12 0x562bd5d6c2e8 content::ContentMainRunnerImpl::Run()
#13 0x562bd5d75f24 service_manager::Main()
#14 0x562bd5d6af14 content::ContentMain()
#15 0x562bd9e7a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x562bd9e7aa42 headless::HeadlessBrowserMain()
#17 0x562bd5d72f9d headless::HeadlessShellMain()
#18 0x562bd43d11ac ChromeMain
#19 0x7fc9451622e1 __libc_start_main
#20 0x562bd43d102a _start
  r8: 0000000000000000  r9: 00007fff419f8e60 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff419f9558 r13: 0000000000000161 r14: 00007fff419f9560 r15: 00007fff419f90f9
  di: 0000000000000002  si: 00007fff419f8e60  bp: 00007fff419f90a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc945174fff  sp: 00007fff419f8ed8
  ip: 00007fc945174fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020613.996030:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x562bd6030b0c base::debug::StackTrace::StackTrace()
#1 0x562bd6049780 logging::LogMessage::~LogMessage()
#2 0x562bd50d92b1 content::ZygoteHostImpl::Init()
#3 0x562bd4d4bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x562bd4d51a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x562bd9e7b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x562bd5d6ba00 content::RunNamedProcessTypeMain()
#7 0x562bd5d6c2e8 content::ContentMainRunnerImpl::Run()
#8 0x562bd5d75f24 service_manager::Main()
#9 0x562bd5d6af14 content::ContentMain()
#10 0x562bd9e7a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x562bd9e7aa42 headless::HeadlessBrowserMain()
#12 0x562bd5d72f9d headless::HeadlessShellMain()
#13 0x562bd43d11ac ChromeMain
#14 0x7fc9451622e1 __libc_start_main
#15 0x562bd43d102a _start

Received signal 6
#0 0x562bd6030b0c base::debug::StackTrace::StackTrace()
#1 0x562bd6030671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc94b0bf0c0 <unknown>
#3 0x7fc945174fff gsignal
#4 0x7fc94517642a abort
#5 0x562bd602f105 base::debug::BreakDebugger()
#6 0x562bd6049bca logging::LogMessage::~LogMessage()
#7 0x562bd50d92b1 content::ZygoteHostImpl::Init()
#8 0x562bd4d4bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x562bd4d51a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x562bd9e7b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x562bd5d6ba00 content::RunNamedProcessTypeMain()
#12 0x562bd5d6c2e8 content::ContentMainRunnerImpl::Run()
#13 0x562bd5d75f24 service_manager::Main()
#14 0x562bd5d6af14 content::ContentMain()
#15 0x562bd9e7a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x562bd9e7aa42 headless::HeadlessBrowserMain()
#17 0x562bd5d72f9d headless::HeadlessShellMain()
#18 0x562bd43d11ac ChromeMain
#19 0x7fc9451622e1 __libc_start_main
#20 0x562bd43d102a _start
  r8: 0000000000000000  r9: 00007fff419f8e60 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff419f9558 r13: 0000000000000161 r14: 00007fff419f9560 r15: 00007fff419f90f9
  di: 0000000000000002  si: 00007fff419f8e60  bp: 00007fff419f90a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc945174fff  sp: 00007fff419f8ed8
  ip: 00007fc945174fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020712.380451:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55634f1d8b0c base::debug::StackTrace::StackTrace()
#1 0x55634f1f1780 logging::LogMessage::~LogMessage()
#2 0x55634e2812b1 content::ZygoteHostImpl::Init()
#3 0x55634def3c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55634def9a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5563530239a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55634ef13a00 content::RunNamedProcessTypeMain()
#7 0x55634ef142e8 content::ContentMainRunnerImpl::Run()
#8 0x55634ef1df24 service_manager::Main()
#9 0x55634ef12f14 content::ContentMain()
#10 0x5563530229b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556353022a42 headless::HeadlessBrowserMain()
#12 0x55634ef1af9d headless::HeadlessShellMain()
#13 0x55634d5791ac ChromeMain
#14 0x7f5414b222e1 __libc_start_main
#15 0x55634d57902a _start

Received signal 6
#0 0x55634f1d8b0c base::debug::StackTrace::StackTrace()
#1 0x55634f1d8671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f541aa7f0c0 <unknown>
#3 0x7f5414b34fff gsignal
#4 0x7f5414b3642a abort
#5 0x55634f1d7105 base::debug::BreakDebugger()
#6 0x55634f1f1bca logging::LogMessage::~LogMessage()
#7 0x55634e2812b1 content::ZygoteHostImpl::Init()
#8 0x55634def3c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55634def9a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5563530239a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55634ef13a00 content::RunNamedProcessTypeMain()
#12 0x55634ef142e8 content::ContentMainRunnerImpl::Run()
#13 0x55634ef1df24 service_manager::Main()
#14 0x55634ef12f14 content::ContentMain()
#15 0x5563530229b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556353022a42 headless::HeadlessBrowserMain()
#17 0x55634ef1af9d headless::HeadlessShellMain()
#18 0x55634d5791ac ChromeMain
#19 0x7f5414b222e1 __libc_start_main
#20 0x55634d57902a _start
  r8: 0000000000000000  r9: 00007ffc4588e320 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc4588ea18 r13: 0000000000000161 r14: 00007ffc4588ea20 r15: 00007ffc4588e5b9
  di: 0000000000000002  si: 00007ffc4588e320  bp: 00007ffc4588e560  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f5414b34fff  sp: 00007ffc4588e398
  ip: 00007f5414b34fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020712.380451:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55634f1d8b0c base::debug::StackTrace::StackTrace()
#1 0x55634f1f1780 logging::LogMessage::~LogMessage()
#2 0x55634e2812b1 content::ZygoteHostImpl::Init()
#3 0x55634def3c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55634def9a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5563530239a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55634ef13a00 content::RunNamedProcessTypeMain()
#7 0x55634ef142e8 content::ContentMainRunnerImpl::Run()
#8 0x55634ef1df24 service_manager::Main()
#9 0x55634ef12f14 content::ContentMain()
#10 0x5563530229b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556353022a42 headless::HeadlessBrowserMain()
#12 0x55634ef1af9d headless::HeadlessShellMain()
#13 0x55634d5791ac ChromeMain
#14 0x7f5414b222e1 __libc_start_main
#15 0x55634d57902a _start

Received signal 6
#0 0x55634f1d8b0c base::debug::StackTrace::StackTrace()
#1 0x55634f1d8671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f541aa7f0c0 <unknown>
#3 0x7f5414b34fff gsignal
#4 0x7f5414b3642a abort
#5 0x55634f1d7105 base::debug::BreakDebugger()
#6 0x55634f1f1bca logging::LogMessage::~LogMessage()
#7 0x55634e2812b1 content::ZygoteHostImpl::Init()
#8 0x55634def3c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55634def9a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5563530239a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55634ef13a00 content::RunNamedProcessTypeMain()
#12 0x55634ef142e8 content::ContentMainRunnerImpl::Run()
#13 0x55634ef1df24 service_manager::Main()
#14 0x55634ef12f14 content::ContentMain()
#15 0x5563530229b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556353022a42 headless::HeadlessBrowserMain()
#17 0x55634ef1af9d headless::HeadlessShellMain()
#18 0x55634d5791ac ChromeMain
#19 0x7f5414b222e1 __libc_start_main
#20 0x55634d57902a _start
  r8: 0000000000000000  r9: 00007ffc4588e320 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc4588ea18 r13: 0000000000000161 r14: 00007ffc4588ea20 r15: 00007ffc4588e5b9
  di: 0000000000000002  si: 00007ffc4588e320  bp: 00007ffc4588e560  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f5414b34fff  sp: 00007ffc4588e398
  ip: 00007f5414b34fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020746.948485:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x562ed8e39b0c base::debug::StackTrace::StackTrace()
#1 0x562ed8e52780 logging::LogMessage::~LogMessage()
#2 0x562ed7ee22b1 content::ZygoteHostImpl::Init()
#3 0x562ed7b54c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x562ed7b5aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x562edcc849a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x562ed8b74a00 content::RunNamedProcessTypeMain()
#7 0x562ed8b752e8 content::ContentMainRunnerImpl::Run()
#8 0x562ed8b7ef24 service_manager::Main()
#9 0x562ed8b73f14 content::ContentMain()
#10 0x562edcc839b9 headless::(anonymous namespace)::RunContentMain()
#11 0x562edcc83a42 headless::HeadlessBrowserMain()
#12 0x562ed8b7bf9d headless::HeadlessShellMain()
#13 0x562ed71da1ac ChromeMain
#14 0x7fc0765972e1 __libc_start_main
#15 0x562ed71da02a _start

Received signal 6
#0 0x562ed8e39b0c base::debug::StackTrace::StackTrace()
#1 0x562ed8e39671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc07c4f40c0 <unknown>
#3 0x7fc0765a9fff gsignal
#4 0x7fc0765ab42a abort
#5 0x562ed8e38105 base::debug::BreakDebugger()
#6 0x562ed8e52bca logging::LogMessage::~LogMessage()
#7 0x562ed7ee22b1 content::ZygoteHostImpl::Init()
#8 0x562ed7b54c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x562ed7b5aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x562edcc849a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x562ed8b74a00 content::RunNamedProcessTypeMain()
#12 0x562ed8b752e8 content::ContentMainRunnerImpl::Run()
#13 0x562ed8b7ef24 service_manager::Main()
#14 0x562ed8b73f14 content::ContentMain()
#15 0x562edcc839b9 headless::(anonymous namespace)::RunContentMain()
#16 0x562edcc83a42 headless::HeadlessBrowserMain()
#17 0x562ed8b7bf9d headless::HeadlessShellMain()
#18 0x562ed71da1ac ChromeMain
#19 0x7fc0765972e1 __libc_start_main
#20 0x562ed71da02a _start
  r8: 0000000000000000  r9: 00007ffcc8289410 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcc8289b08 r13: 0000000000000161 r14: 00007ffcc8289b10 r15: 00007ffcc82896a9
  di: 0000000000000002  si: 00007ffcc8289410  bp: 00007ffcc8289650  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc0765a9fff  sp: 00007ffcc8289488
  ip: 00007fc0765a9fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020746.948485:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x562ed8e39b0c base::debug::StackTrace::StackTrace()
#1 0x562ed8e52780 logging::LogMessage::~LogMessage()
#2 0x562ed7ee22b1 content::ZygoteHostImpl::Init()
#3 0x562ed7b54c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x562ed7b5aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x562edcc849a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x562ed8b74a00 content::RunNamedProcessTypeMain()
#7 0x562ed8b752e8 content::ContentMainRunnerImpl::Run()
#8 0x562ed8b7ef24 service_manager::Main()
#9 0x562ed8b73f14 content::ContentMain()
#10 0x562edcc839b9 headless::(anonymous namespace)::RunContentMain()
#11 0x562edcc83a42 headless::HeadlessBrowserMain()
#12 0x562ed8b7bf9d headless::HeadlessShellMain()
#13 0x562ed71da1ac ChromeMain
#14 0x7fc0765972e1 __libc_start_main
#15 0x562ed71da02a _start

Received signal 6
#0 0x562ed8e39b0c base::debug::StackTrace::StackTrace()
#1 0x562ed8e39671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc07c4f40c0 <unknown>
#3 0x7fc0765a9fff gsignal
#4 0x7fc0765ab42a abort
#5 0x562ed8e38105 base::debug::BreakDebugger()
#6 0x562ed8e52bca logging::LogMessage::~LogMessage()
#7 0x562ed7ee22b1 content::ZygoteHostImpl::Init()
#8 0x562ed7b54c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x562ed7b5aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x562edcc849a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x562ed8b74a00 content::RunNamedProcessTypeMain()
#12 0x562ed8b752e8 content::ContentMainRunnerImpl::Run()
#13 0x562ed8b7ef24 service_manager::Main()
#14 0x562ed8b73f14 content::ContentMain()
#15 0x562edcc839b9 headless::(anonymous namespace)::RunContentMain()
#16 0x562edcc83a42 headless::HeadlessBrowserMain()
#17 0x562ed8b7bf9d headless::HeadlessShellMain()
#18 0x562ed71da1ac ChromeMain
#19 0x7fc0765972e1 __libc_start_main
#20 0x562ed71da02a _start
  r8: 0000000000000000  r9: 00007ffcc8289410 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcc8289b08 r13: 0000000000000161 r14: 00007ffcc8289b10 r15: 00007ffcc82896a9
  di: 0000000000000002  si: 00007ffcc8289410  bp: 00007ffcc8289650  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc0765a9fff  sp: 00007ffcc8289488
  ip: 00007fc0765a9fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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


## https://wicg.github.io/aom/spec/ {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/aom/spec/)
- Repository: [GitHub wicg/aom](https://github.com/wicg/aom)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0510/020734.962384:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561cc1a25b0c base::debug::StackTrace::StackTrace()
#1 0x561cc1a3e780 logging::LogMessage::~LogMessage()
#2 0x561cc0ace2b1 content::ZygoteHostImpl::Init()
#3 0x561cc0740c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561cc0746a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x561cc58709a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x561cc1760a00 content::RunNamedProcessTypeMain()
#7 0x561cc17612e8 content::ContentMainRunnerImpl::Run()
#8 0x561cc176af24 service_manager::Main()
#9 0x561cc175ff14 content::ContentMain()
#10 0x561cc586f9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x561cc586fa42 headless::HeadlessBrowserMain()
#12 0x561cc1767f9d headless::HeadlessShellMain()
#13 0x561cbfdc61ac ChromeMain
#14 0x7ff9b01752e1 __libc_start_main
#15 0x561cbfdc602a _start

Received signal 6
#0 0x561cc1a25b0c base::debug::StackTrace::StackTrace()
#1 0x561cc1a25671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ff9b60d20c0 <unknown>
#3 0x7ff9b0187fff gsignal
#4 0x7ff9b018942a abort
#5 0x561cc1a24105 base::debug::BreakDebugger()
#6 0x561cc1a3ebca logging::LogMessage::~LogMessage()
#7 0x561cc0ace2b1 content::ZygoteHostImpl::Init()
#8 0x561cc0740c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561cc0746a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x561cc58709a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x561cc1760a00 content::RunNamedProcessTypeMain()
#12 0x561cc17612e8 content::ContentMainRunnerImpl::Run()
#13 0x561cc176af24 service_manager::Main()
#14 0x561cc175ff14 content::ContentMain()
#15 0x561cc586f9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x561cc586fa42 headless::HeadlessBrowserMain()
#17 0x561cc1767f9d headless::HeadlessShellMain()
#18 0x561cbfdc61ac ChromeMain
#19 0x7ff9b01752e1 __libc_start_main
#20 0x561cbfdc602a _start
  r8: 0000000000000000  r9: 00007ffc20f61160 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc20f61858 r13: 0000000000000161 r14: 00007ffc20f61860 r15: 00007ffc20f613f9
  di: 0000000000000002  si: 00007ffc20f61160  bp: 00007ffc20f613a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ff9b0187fff  sp: 00007ffc20f611d8
  ip: 00007ff9b0187fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020734.962384:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561cc1a25b0c base::debug::StackTrace::StackTrace()
#1 0x561cc1a3e780 logging::LogMessage::~LogMessage()
#2 0x561cc0ace2b1 content::ZygoteHostImpl::Init()
#3 0x561cc0740c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561cc0746a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x561cc58709a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x561cc1760a00 content::RunNamedProcessTypeMain()
#7 0x561cc17612e8 content::ContentMainRunnerImpl::Run()
#8 0x561cc176af24 service_manager::Main()
#9 0x561cc175ff14 content::ContentMain()
#10 0x561cc586f9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x561cc586fa42 headless::HeadlessBrowserMain()
#12 0x561cc1767f9d headless::HeadlessShellMain()
#13 0x561cbfdc61ac ChromeMain
#14 0x7ff9b01752e1 __libc_start_main
#15 0x561cbfdc602a _start

Received signal 6
#0 0x561cc1a25b0c base::debug::StackTrace::StackTrace()
#1 0x561cc1a25671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ff9b60d20c0 <unknown>
#3 0x7ff9b0187fff gsignal
#4 0x7ff9b018942a abort
#5 0x561cc1a24105 base::debug::BreakDebugger()
#6 0x561cc1a3ebca logging::LogMessage::~LogMessage()
#7 0x561cc0ace2b1 content::ZygoteHostImpl::Init()
#8 0x561cc0740c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561cc0746a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x561cc58709a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x561cc1760a00 content::RunNamedProcessTypeMain()
#12 0x561cc17612e8 content::ContentMainRunnerImpl::Run()
#13 0x561cc176af24 service_manager::Main()
#14 0x561cc175ff14 content::ContentMain()
#15 0x561cc586f9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x561cc586fa42 headless::HeadlessBrowserMain()
#17 0x561cc1767f9d headless::HeadlessShellMain()
#18 0x561cbfdc61ac ChromeMain
#19 0x7ff9b01752e1 __libc_start_main
#20 0x561cbfdc602a _start
  r8: 0000000000000000  r9: 00007ffc20f61160 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc20f61858 r13: 0000000000000161 r14: 00007ffc20f61860 r15: 00007ffc20f613f9
  di: 0000000000000002  si: 00007ffc20f61160  bp: 00007ffc20f613a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ff9b0187fff  sp: 00007ffc20f611d8
  ip: 00007ff9b0187fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020739.381434:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x557731fdfb0c base::debug::StackTrace::StackTrace()
#1 0x557731ff8780 logging::LogMessage::~LogMessage()
#2 0x5577310882b1 content::ZygoteHostImpl::Init()
#3 0x557730cfac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557730d00a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557735e2a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557731d1aa00 content::RunNamedProcessTypeMain()
#7 0x557731d1b2e8 content::ContentMainRunnerImpl::Run()
#8 0x557731d24f24 service_manager::Main()
#9 0x557731d19f14 content::ContentMain()
#10 0x557735e299b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557735e29a42 headless::HeadlessBrowserMain()
#12 0x557731d21f9d headless::HeadlessShellMain()
#13 0x5577303801ac ChromeMain
#14 0x7f6e39e802e1 __libc_start_main
#15 0x55773038002a _start

Received signal 6
#0 0x557731fdfb0c base::debug::StackTrace::StackTrace()
#1 0x557731fdf671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f6e3fddd0c0 <unknown>
#3 0x7f6e39e92fff gsignal
#4 0x7f6e39e9442a abort
#5 0x557731fde105 base::debug::BreakDebugger()
#6 0x557731ff8bca logging::LogMessage::~LogMessage()
#7 0x5577310882b1 content::ZygoteHostImpl::Init()
#8 0x557730cfac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557730d00a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557735e2a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557731d1aa00 content::RunNamedProcessTypeMain()
#12 0x557731d1b2e8 content::ContentMainRunnerImpl::Run()
#13 0x557731d24f24 service_manager::Main()
#14 0x557731d19f14 content::ContentMain()
#15 0x557735e299b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557735e29a42 headless::HeadlessBrowserMain()
#17 0x557731d21f9d headless::HeadlessShellMain()
#18 0x5577303801ac ChromeMain
#19 0x7f6e39e802e1 __libc_start_main
#20 0x55773038002a _start
  r8: 0000000000000000  r9: 00007ffd4ba017b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd4ba01ea8 r13: 0000000000000161 r14: 00007ffd4ba01eb0 r15: 00007ffd4ba01a49
  di: 0000000000000002  si: 00007ffd4ba017b0  bp: 00007ffd4ba019f0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f6e39e92fff  sp: 00007ffd4ba01828
  ip: 00007f6e39e92fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020739.381434:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x557731fdfb0c base::debug::StackTrace::StackTrace()
#1 0x557731ff8780 logging::LogMessage::~LogMessage()
#2 0x5577310882b1 content::ZygoteHostImpl::Init()
#3 0x557730cfac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557730d00a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557735e2a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557731d1aa00 content::RunNamedProcessTypeMain()
#7 0x557731d1b2e8 content::ContentMainRunnerImpl::Run()
#8 0x557731d24f24 service_manager::Main()
#9 0x557731d19f14 content::ContentMain()
#10 0x557735e299b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557735e29a42 headless::HeadlessBrowserMain()
#12 0x557731d21f9d headless::HeadlessShellMain()
#13 0x5577303801ac ChromeMain
#14 0x7f6e39e802e1 __libc_start_main
#15 0x55773038002a _start

Received signal 6
#0 0x557731fdfb0c base::debug::StackTrace::StackTrace()
#1 0x557731fdf671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f6e3fddd0c0 <unknown>
#3 0x7f6e39e92fff gsignal
#4 0x7f6e39e9442a abort
#5 0x557731fde105 base::debug::BreakDebugger()
#6 0x557731ff8bca logging::LogMessage::~LogMessage()
#7 0x5577310882b1 content::ZygoteHostImpl::Init()
#8 0x557730cfac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557730d00a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557735e2a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557731d1aa00 content::RunNamedProcessTypeMain()
#12 0x557731d1b2e8 content::ContentMainRunnerImpl::Run()
#13 0x557731d24f24 service_manager::Main()
#14 0x557731d19f14 content::ContentMain()
#15 0x557735e299b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557735e29a42 headless::HeadlessBrowserMain()
#17 0x557731d21f9d headless::HeadlessShellMain()
#18 0x5577303801ac ChromeMain
#19 0x7f6e39e802e1 __libc_start_main
#20 0x55773038002a _start
  r8: 0000000000000000  r9: 00007ffd4ba017b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd4ba01ea8 r13: 0000000000000161 r14: 00007ffd4ba01eb0 r15: 00007ffd4ba01a49
  di: 0000000000000002  si: 00007ffd4ba017b0  bp: 00007ffd4ba019f0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f6e39e92fff  sp: 00007ffd4ba01828
  ip: 00007f6e39e92fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020740.276687:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5654610fbb0c base::debug::StackTrace::StackTrace()
#1 0x565461114780 logging::LogMessage::~LogMessage()
#2 0x5654601a42b1 content::ZygoteHostImpl::Init()
#3 0x56545fe16c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56545fe1ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x565464f469a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x565460e36a00 content::RunNamedProcessTypeMain()
#7 0x565460e372e8 content::ContentMainRunnerImpl::Run()
#8 0x565460e40f24 service_manager::Main()
#9 0x565460e35f14 content::ContentMain()
#10 0x565464f459b9 headless::(anonymous namespace)::RunContentMain()
#11 0x565464f45a42 headless::HeadlessBrowserMain()
#12 0x565460e3df9d headless::HeadlessShellMain()
#13 0x56545f49c1ac ChromeMain
#14 0x7fb906c312e1 __libc_start_main
#15 0x56545f49c02a _start

Received signal 6
#0 0x5654610fbb0c base::debug::StackTrace::StackTrace()
#1 0x5654610fb671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb90cb8e0c0 <unknown>
#3 0x7fb906c43fff gsignal
#4 0x7fb906c4542a abort
#5 0x5654610fa105 base::debug::BreakDebugger()
#6 0x565461114bca logging::LogMessage::~LogMessage()
#7 0x5654601a42b1 content::ZygoteHostImpl::Init()
#8 0x56545fe16c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56545fe1ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x565464f469a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x565460e36a00 content::RunNamedProcessTypeMain()
#12 0x565460e372e8 content::ContentMainRunnerImpl::Run()
#13 0x565460e40f24 service_manager::Main()
#14 0x565460e35f14 content::ContentMain()
#15 0x565464f459b9 headless::(anonymous namespace)::RunContentMain()
#16 0x565464f45a42 headless::HeadlessBrowserMain()
#17 0x565460e3df9d headless::HeadlessShellMain()
#18 0x56545f49c1ac ChromeMain
#19 0x7fb906c312e1 __libc_start_main
#20 0x56545f49c02a _start
  r8: 0000000000000000  r9: 00007ffce9bc6640 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffce9bc6d38 r13: 0000000000000161 r14: 00007ffce9bc6d40 r15: 00007ffce9bc68d9
  di: 0000000000000002  si: 00007ffce9bc6640  bp: 00007ffce9bc6880  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb906c43fff  sp: 00007ffce9bc66b8
  ip: 00007fb906c43fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020740.276687:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5654610fbb0c base::debug::StackTrace::StackTrace()
#1 0x565461114780 logging::LogMessage::~LogMessage()
#2 0x5654601a42b1 content::ZygoteHostImpl::Init()
#3 0x56545fe16c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56545fe1ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x565464f469a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x565460e36a00 content::RunNamedProcessTypeMain()
#7 0x565460e372e8 content::ContentMainRunnerImpl::Run()
#8 0x565460e40f24 service_manager::Main()
#9 0x565460e35f14 content::ContentMain()
#10 0x565464f459b9 headless::(anonymous namespace)::RunContentMain()
#11 0x565464f45a42 headless::HeadlessBrowserMain()
#12 0x565460e3df9d headless::HeadlessShellMain()
#13 0x56545f49c1ac ChromeMain
#14 0x7fb906c312e1 __libc_start_main
#15 0x56545f49c02a _start

Received signal 6
#0 0x5654610fbb0c base::debug::StackTrace::StackTrace()
#1 0x5654610fb671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb90cb8e0c0 <unknown>
#3 0x7fb906c43fff gsignal
#4 0x7fb906c4542a abort
#5 0x5654610fa105 base::debug::BreakDebugger()
#6 0x565461114bca logging::LogMessage::~LogMessage()
#7 0x5654601a42b1 content::ZygoteHostImpl::Init()
#8 0x56545fe16c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56545fe1ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x565464f469a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x565460e36a00 content::RunNamedProcessTypeMain()
#12 0x565460e372e8 content::ContentMainRunnerImpl::Run()
#13 0x565460e40f24 service_manager::Main()
#14 0x565460e35f14 content::ContentMain()
#15 0x565464f459b9 headless::(anonymous namespace)::RunContentMain()
#16 0x565464f45a42 headless::HeadlessBrowserMain()
#17 0x565460e3df9d headless::HeadlessShellMain()
#18 0x56545f49c1ac ChromeMain
#19 0x7fb906c312e1 __libc_start_main
#20 0x56545f49c02a _start
  r8: 0000000000000000  r9: 00007ffce9bc6640 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffce9bc6d38 r13: 0000000000000161 r14: 00007ffce9bc6d40 r15: 00007ffce9bc68d9
  di: 0000000000000002  si: 00007ffce9bc6640  bp: 00007ffce9bc6880  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb906c43fff  sp: 00007ffce9bc66b8
  ip: 00007fb906c43fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020745.834850:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d18423cb0c base::debug::StackTrace::StackTrace()
#1 0x55d184255780 logging::LogMessage::~LogMessage()
#2 0x55d1832e52b1 content::ZygoteHostImpl::Init()
#3 0x55d182f57c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d182f5da69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d1880879a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d183f77a00 content::RunNamedProcessTypeMain()
#7 0x55d183f782e8 content::ContentMainRunnerImpl::Run()
#8 0x55d183f81f24 service_manager::Main()
#9 0x55d183f76f14 content::ContentMain()
#10 0x55d1880869b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d188086a42 headless::HeadlessBrowserMain()
#12 0x55d183f7ef9d headless::HeadlessShellMain()
#13 0x55d1825dd1ac ChromeMain
#14 0x7fe1024242e1 __libc_start_main
#15 0x55d1825dd02a _start

Received signal 6
#0 0x55d18423cb0c base::debug::StackTrace::StackTrace()
#1 0x55d18423c671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe1083810c0 <unknown>
#3 0x7fe102436fff gsignal
#4 0x7fe10243842a abort
#5 0x55d18423b105 base::debug::BreakDebugger()
#6 0x55d184255bca logging::LogMessage::~LogMessage()
#7 0x55d1832e52b1 content::ZygoteHostImpl::Init()
#8 0x55d182f57c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d182f5da69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d1880879a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d183f77a00 content::RunNamedProcessTypeMain()
#12 0x55d183f782e8 content::ContentMainRunnerImpl::Run()
#13 0x55d183f81f24 service_manager::Main()
#14 0x55d183f76f14 content::ContentMain()
#15 0x55d1880869b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d188086a42 headless::HeadlessBrowserMain()
#17 0x55d183f7ef9d headless::HeadlessShellMain()
#18 0x55d1825dd1ac ChromeMain
#19 0x7fe1024242e1 __libc_start_main
#20 0x55d1825dd02a _start
  r8: 0000000000000000  r9: 00007ffc807f5c80 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc807f6378 r13: 0000000000000161 r14: 00007ffc807f6380 r15: 00007ffc807f5f19
  di: 0000000000000002  si: 00007ffc807f5c80  bp: 00007ffc807f5ec0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe102436fff  sp: 00007ffc807f5cf8
  ip: 00007fe102436fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020745.834850:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d18423cb0c base::debug::StackTrace::StackTrace()
#1 0x55d184255780 logging::LogMessage::~LogMessage()
#2 0x55d1832e52b1 content::ZygoteHostImpl::Init()
#3 0x55d182f57c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d182f5da69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d1880879a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d183f77a00 content::RunNamedProcessTypeMain()
#7 0x55d183f782e8 content::ContentMainRunnerImpl::Run()
#8 0x55d183f81f24 service_manager::Main()
#9 0x55d183f76f14 content::ContentMain()
#10 0x55d1880869b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d188086a42 headless::HeadlessBrowserMain()
#12 0x55d183f7ef9d headless::HeadlessShellMain()
#13 0x55d1825dd1ac ChromeMain
#14 0x7fe1024242e1 __libc_start_main
#15 0x55d1825dd02a _start

Received signal 6
#0 0x55d18423cb0c base::debug::StackTrace::StackTrace()
#1 0x55d18423c671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe1083810c0 <unknown>
#3 0x7fe102436fff gsignal
#4 0x7fe10243842a abort
#5 0x55d18423b105 base::debug::BreakDebugger()
#6 0x55d184255bca logging::LogMessage::~LogMessage()
#7 0x55d1832e52b1 content::ZygoteHostImpl::Init()
#8 0x55d182f57c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d182f5da69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d1880879a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d183f77a00 content::RunNamedProcessTypeMain()
#12 0x55d183f782e8 content::ContentMainRunnerImpl::Run()
#13 0x55d183f81f24 service_manager::Main()
#14 0x55d183f76f14 content::ContentMain()
#15 0x55d1880869b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d188086a42 headless::HeadlessBrowserMain()
#17 0x55d183f7ef9d headless::HeadlessShellMain()
#18 0x55d1825dd1ac ChromeMain
#19 0x7fe1024242e1 __libc_start_main
#20 0x55d1825dd02a _start
  r8: 0000000000000000  r9: 00007ffc807f5c80 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc807f6378 r13: 0000000000000161 r14: 00007ffc807f6380 r15: 00007ffc807f5f19
  di: 0000000000000002  si: 00007ffc807f5c80  bp: 00007ffc807f5ec0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe102436fff  sp: 00007ffc807f5cf8
  ip: 00007fe102436fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020656.306050:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55c26f8c2b0c base::debug::StackTrace::StackTrace()
#1 0x55c26f8db780 logging::LogMessage::~LogMessage()
#2 0x55c26e96b2b1 content::ZygoteHostImpl::Init()
#3 0x55c26e5ddc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55c26e5e3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55c27370d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55c26f5fda00 content::RunNamedProcessTypeMain()
#7 0x55c26f5fe2e8 content::ContentMainRunnerImpl::Run()
#8 0x55c26f607f24 service_manager::Main()
#9 0x55c26f5fcf14 content::ContentMain()
#10 0x55c27370c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55c27370ca42 headless::HeadlessBrowserMain()
#12 0x55c26f604f9d headless::HeadlessShellMain()
#13 0x55c26dc631ac ChromeMain
#14 0x7f50d03532e1 __libc_start_main
#15 0x55c26dc6302a _start

Received signal 6
#0 0x55c26f8c2b0c base::debug::StackTrace::StackTrace()
#1 0x55c26f8c2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f50d62b00c0 <unknown>
#3 0x7f50d0365fff gsignal
#4 0x7f50d036742a abort
#5 0x55c26f8c1105 base::debug::BreakDebugger()
#6 0x55c26f8dbbca logging::LogMessage::~LogMessage()
#7 0x55c26e96b2b1 content::ZygoteHostImpl::Init()
#8 0x55c26e5ddc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55c26e5e3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55c27370d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55c26f5fda00 content::RunNamedProcessTypeMain()
#12 0x55c26f5fe2e8 content::ContentMainRunnerImpl::Run()
#13 0x55c26f607f24 service_manager::Main()
#14 0x55c26f5fcf14 content::ContentMain()
#15 0x55c27370c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55c27370ca42 headless::HeadlessBrowserMain()
#17 0x55c26f604f9d headless::HeadlessShellMain()
#18 0x55c26dc631ac ChromeMain
#19 0x7f50d03532e1 __libc_start_main
#20 0x55c26dc6302a _start
  r8: 0000000000000000  r9: 00007ffd512b9500 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd512b9bf8 r13: 0000000000000161 r14: 00007ffd512b9c00 r15: 00007ffd512b9799
  di: 0000000000000002  si: 00007ffd512b9500  bp: 00007ffd512b9740  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f50d0365fff  sp: 00007ffd512b9578
  ip: 00007f50d0365fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020656.306050:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55c26f8c2b0c base::debug::StackTrace::StackTrace()
#1 0x55c26f8db780 logging::LogMessage::~LogMessage()
#2 0x55c26e96b2b1 content::ZygoteHostImpl::Init()
#3 0x55c26e5ddc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55c26e5e3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55c27370d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55c26f5fda00 content::RunNamedProcessTypeMain()
#7 0x55c26f5fe2e8 content::ContentMainRunnerImpl::Run()
#8 0x55c26f607f24 service_manager::Main()
#9 0x55c26f5fcf14 content::ContentMain()
#10 0x55c27370c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55c27370ca42 headless::HeadlessBrowserMain()
#12 0x55c26f604f9d headless::HeadlessShellMain()
#13 0x55c26dc631ac ChromeMain
#14 0x7f50d03532e1 __libc_start_main
#15 0x55c26dc6302a _start

Received signal 6
#0 0x55c26f8c2b0c base::debug::StackTrace::StackTrace()
#1 0x55c26f8c2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f50d62b00c0 <unknown>
#3 0x7f50d0365fff gsignal
#4 0x7f50d036742a abort
#5 0x55c26f8c1105 base::debug::BreakDebugger()
#6 0x55c26f8dbbca logging::LogMessage::~LogMessage()
#7 0x55c26e96b2b1 content::ZygoteHostImpl::Init()
#8 0x55c26e5ddc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55c26e5e3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55c27370d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55c26f5fda00 content::RunNamedProcessTypeMain()
#12 0x55c26f5fe2e8 content::ContentMainRunnerImpl::Run()
#13 0x55c26f607f24 service_manager::Main()
#14 0x55c26f5fcf14 content::ContentMain()
#15 0x55c27370c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55c27370ca42 headless::HeadlessBrowserMain()
#17 0x55c26f604f9d headless::HeadlessShellMain()
#18 0x55c26dc631ac ChromeMain
#19 0x7f50d03532e1 __libc_start_main
#20 0x55c26dc6302a _start
  r8: 0000000000000000  r9: 00007ffd512b9500 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd512b9bf8 r13: 0000000000000161 r14: 00007ffd512b9c00 r15: 00007ffd512b9799
  di: 0000000000000002  si: 00007ffd512b9500  bp: 00007ffd512b9740  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f50d0365fff  sp: 00007ffd512b9578
  ip: 00007f50d0365fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020613.859729:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558fa6d75b0c base::debug::StackTrace::StackTrace()
#1 0x558fa6d8e780 logging::LogMessage::~LogMessage()
#2 0x558fa5e1e2b1 content::ZygoteHostImpl::Init()
#3 0x558fa5a90c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558fa5a96a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558faabc09a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558fa6ab0a00 content::RunNamedProcessTypeMain()
#7 0x558fa6ab12e8 content::ContentMainRunnerImpl::Run()
#8 0x558fa6abaf24 service_manager::Main()
#9 0x558fa6aaff14 content::ContentMain()
#10 0x558faabbf9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558faabbfa42 headless::HeadlessBrowserMain()
#12 0x558fa6ab7f9d headless::HeadlessShellMain()
#13 0x558fa51161ac ChromeMain
#14 0x7f603010a2e1 __libc_start_main
#15 0x558fa511602a _start

Received signal 6
#0 0x558fa6d75b0c base::debug::StackTrace::StackTrace()
#1 0x558fa6d75671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f60360670c0 <unknown>
#3 0x7f603011cfff gsignal
#4 0x7f603011e42a abort
#5 0x558fa6d74105 base::debug::BreakDebugger()
#6 0x558fa6d8ebca logging::LogMessage::~LogMessage()
#7 0x558fa5e1e2b1 content::ZygoteHostImpl::Init()
#8 0x558fa5a90c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558fa5a96a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558faabc09a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558fa6ab0a00 content::RunNamedProcessTypeMain()
#12 0x558fa6ab12e8 content::ContentMainRunnerImpl::Run()
#13 0x558fa6abaf24 service_manager::Main()
#14 0x558fa6aaff14 content::ContentMain()
#15 0x558faabbf9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558faabbfa42 headless::HeadlessBrowserMain()
#17 0x558fa6ab7f9d headless::HeadlessShellMain()
#18 0x558fa51161ac ChromeMain
#19 0x7f603010a2e1 __libc_start_main
#20 0x558fa511602a _start
  r8: 0000000000000000  r9: 00007fff82a2eb50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff82a2f248 r13: 0000000000000161 r14: 00007fff82a2f250 r15: 00007fff82a2ede9
  di: 0000000000000002  si: 00007fff82a2eb50  bp: 00007fff82a2ed90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f603011cfff  sp: 00007fff82a2ebc8
  ip: 00007f603011cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020613.859729:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558fa6d75b0c base::debug::StackTrace::StackTrace()
#1 0x558fa6d8e780 logging::LogMessage::~LogMessage()
#2 0x558fa5e1e2b1 content::ZygoteHostImpl::Init()
#3 0x558fa5a90c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558fa5a96a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558faabc09a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558fa6ab0a00 content::RunNamedProcessTypeMain()
#7 0x558fa6ab12e8 content::ContentMainRunnerImpl::Run()
#8 0x558fa6abaf24 service_manager::Main()
#9 0x558fa6aaff14 content::ContentMain()
#10 0x558faabbf9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558faabbfa42 headless::HeadlessBrowserMain()
#12 0x558fa6ab7f9d headless::HeadlessShellMain()
#13 0x558fa51161ac ChromeMain
#14 0x7f603010a2e1 __libc_start_main
#15 0x558fa511602a _start

Received signal 6
#0 0x558fa6d75b0c base::debug::StackTrace::StackTrace()
#1 0x558fa6d75671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f60360670c0 <unknown>
#3 0x7f603011cfff gsignal
#4 0x7f603011e42a abort
#5 0x558fa6d74105 base::debug::BreakDebugger()
#6 0x558fa6d8ebca logging::LogMessage::~LogMessage()
#7 0x558fa5e1e2b1 content::ZygoteHostImpl::Init()
#8 0x558fa5a90c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558fa5a96a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558faabc09a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558fa6ab0a00 content::RunNamedProcessTypeMain()
#12 0x558fa6ab12e8 content::ContentMainRunnerImpl::Run()
#13 0x558fa6abaf24 service_manager::Main()
#14 0x558fa6aaff14 content::ContentMain()
#15 0x558faabbf9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558faabbfa42 headless::HeadlessBrowserMain()
#17 0x558fa6ab7f9d headless::HeadlessShellMain()
#18 0x558fa51161ac ChromeMain
#19 0x7f603010a2e1 __libc_start_main
#20 0x558fa511602a _start
  r8: 0000000000000000  r9: 00007fff82a2eb50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff82a2f248 r13: 0000000000000161 r14: 00007fff82a2f250 r15: 00007fff82a2ede9
  di: 0000000000000002  si: 00007fff82a2eb50  bp: 00007fff82a2ed90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f603011cfff  sp: 00007fff82a2ebc8
  ip: 00007f603011cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020632.731083:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55dfadc40b0c base::debug::StackTrace::StackTrace()
#1 0x55dfadc59780 logging::LogMessage::~LogMessage()
#2 0x55dfacce92b1 content::ZygoteHostImpl::Init()
#3 0x55dfac95bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55dfac961a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55dfb1a8b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55dfad97ba00 content::RunNamedProcessTypeMain()
#7 0x55dfad97c2e8 content::ContentMainRunnerImpl::Run()
#8 0x55dfad985f24 service_manager::Main()
#9 0x55dfad97af14 content::ContentMain()
#10 0x55dfb1a8a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55dfb1a8aa42 headless::HeadlessBrowserMain()
#12 0x55dfad982f9d headless::HeadlessShellMain()
#13 0x55dfabfe11ac ChromeMain
#14 0x7f084b4432e1 __libc_start_main
#15 0x55dfabfe102a _start

Received signal 6
#0 0x55dfadc40b0c base::debug::StackTrace::StackTrace()
#1 0x55dfadc40671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f08513a00c0 <unknown>
#3 0x7f084b455fff gsignal
#4 0x7f084b45742a abort
#5 0x55dfadc3f105 base::debug::BreakDebugger()
#6 0x55dfadc59bca logging::LogMessage::~LogMessage()
#7 0x55dfacce92b1 content::ZygoteHostImpl::Init()
#8 0x55dfac95bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55dfac961a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55dfb1a8b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55dfad97ba00 content::RunNamedProcessTypeMain()
#12 0x55dfad97c2e8 content::ContentMainRunnerImpl::Run()
#13 0x55dfad985f24 service_manager::Main()
#14 0x55dfad97af14 content::ContentMain()
#15 0x55dfb1a8a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55dfb1a8aa42 headless::HeadlessBrowserMain()
#17 0x55dfad982f9d headless::HeadlessShellMain()
#18 0x55dfabfe11ac ChromeMain
#19 0x7f084b4432e1 __libc_start_main
#20 0x55dfabfe102a _start
  r8: 0000000000000000  r9: 00007ffe29902590 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe29902c88 r13: 0000000000000161 r14: 00007ffe29902c90 r15: 00007ffe29902829
  di: 0000000000000002  si: 00007ffe29902590  bp: 00007ffe299027d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f084b455fff  sp: 00007ffe29902608
  ip: 00007f084b455fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020632.731083:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55dfadc40b0c base::debug::StackTrace::StackTrace()
#1 0x55dfadc59780 logging::LogMessage::~LogMessage()
#2 0x55dfacce92b1 content::ZygoteHostImpl::Init()
#3 0x55dfac95bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55dfac961a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55dfb1a8b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55dfad97ba00 content::RunNamedProcessTypeMain()
#7 0x55dfad97c2e8 content::ContentMainRunnerImpl::Run()
#8 0x55dfad985f24 service_manager::Main()
#9 0x55dfad97af14 content::ContentMain()
#10 0x55dfb1a8a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55dfb1a8aa42 headless::HeadlessBrowserMain()
#12 0x55dfad982f9d headless::HeadlessShellMain()
#13 0x55dfabfe11ac ChromeMain
#14 0x7f084b4432e1 __libc_start_main
#15 0x55dfabfe102a _start

Received signal 6
#0 0x55dfadc40b0c base::debug::StackTrace::StackTrace()
#1 0x55dfadc40671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f08513a00c0 <unknown>
#3 0x7f084b455fff gsignal
#4 0x7f084b45742a abort
#5 0x55dfadc3f105 base::debug::BreakDebugger()
#6 0x55dfadc59bca logging::LogMessage::~LogMessage()
#7 0x55dfacce92b1 content::ZygoteHostImpl::Init()
#8 0x55dfac95bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55dfac961a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55dfb1a8b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55dfad97ba00 content::RunNamedProcessTypeMain()
#12 0x55dfad97c2e8 content::ContentMainRunnerImpl::Run()
#13 0x55dfad985f24 service_manager::Main()
#14 0x55dfad97af14 content::ContentMain()
#15 0x55dfb1a8a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55dfb1a8aa42 headless::HeadlessBrowserMain()
#17 0x55dfad982f9d headless::HeadlessShellMain()
#18 0x55dfabfe11ac ChromeMain
#19 0x7f084b4432e1 __libc_start_main
#20 0x55dfabfe102a _start
  r8: 0000000000000000  r9: 00007ffe29902590 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe29902c88 r13: 0000000000000161 r14: 00007ffe29902c90 r15: 00007ffe29902829
  di: 0000000000000002  si: 00007ffe29902590  bp: 00007ffe299027d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f084b455fff  sp: 00007ffe29902608
  ip: 00007f084b455fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020630.789592:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5580d2f65b0c base::debug::StackTrace::StackTrace()
#1 0x5580d2f7e780 logging::LogMessage::~LogMessage()
#2 0x5580d200e2b1 content::ZygoteHostImpl::Init()
#3 0x5580d1c80c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5580d1c86a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5580d6db09a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5580d2ca0a00 content::RunNamedProcessTypeMain()
#7 0x5580d2ca12e8 content::ContentMainRunnerImpl::Run()
#8 0x5580d2caaf24 service_manager::Main()
#9 0x5580d2c9ff14 content::ContentMain()
#10 0x5580d6daf9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5580d6dafa42 headless::HeadlessBrowserMain()
#12 0x5580d2ca7f9d headless::HeadlessShellMain()
#13 0x5580d13061ac ChromeMain
#14 0x7f43137922e1 __libc_start_main
#15 0x5580d130602a _start

Received signal 6
#0 0x5580d2f65b0c base::debug::StackTrace::StackTrace()
#1 0x5580d2f65671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f43196ef0c0 <unknown>
#3 0x7f43137a4fff gsignal
#4 0x7f43137a642a abort
#5 0x5580d2f64105 base::debug::BreakDebugger()
#6 0x5580d2f7ebca logging::LogMessage::~LogMessage()
#7 0x5580d200e2b1 content::ZygoteHostImpl::Init()
#8 0x5580d1c80c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5580d1c86a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5580d6db09a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5580d2ca0a00 content::RunNamedProcessTypeMain()
#12 0x5580d2ca12e8 content::ContentMainRunnerImpl::Run()
#13 0x5580d2caaf24 service_manager::Main()
#14 0x5580d2c9ff14 content::ContentMain()
#15 0x5580d6daf9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5580d6dafa42 headless::HeadlessBrowserMain()
#17 0x5580d2ca7f9d headless::HeadlessShellMain()
#18 0x5580d13061ac ChromeMain
#19 0x7f43137922e1 __libc_start_main
#20 0x5580d130602a _start
  r8: 0000000000000000  r9: 00007ffeb5cf54d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffeb5cf5bc8 r13: 0000000000000161 r14: 00007ffeb5cf5bd0 r15: 00007ffeb5cf5769
  di: 0000000000000002  si: 00007ffeb5cf54d0  bp: 00007ffeb5cf5710  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f43137a4fff  sp: 00007ffeb5cf5548
  ip: 00007f43137a4fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020630.789592:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5580d2f65b0c base::debug::StackTrace::StackTrace()
#1 0x5580d2f7e780 logging::LogMessage::~LogMessage()
#2 0x5580d200e2b1 content::ZygoteHostImpl::Init()
#3 0x5580d1c80c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5580d1c86a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5580d6db09a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5580d2ca0a00 content::RunNamedProcessTypeMain()
#7 0x5580d2ca12e8 content::ContentMainRunnerImpl::Run()
#8 0x5580d2caaf24 service_manager::Main()
#9 0x5580d2c9ff14 content::ContentMain()
#10 0x5580d6daf9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5580d6dafa42 headless::HeadlessBrowserMain()
#12 0x5580d2ca7f9d headless::HeadlessShellMain()
#13 0x5580d13061ac ChromeMain
#14 0x7f43137922e1 __libc_start_main
#15 0x5580d130602a _start

Received signal 6
#0 0x5580d2f65b0c base::debug::StackTrace::StackTrace()
#1 0x5580d2f65671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f43196ef0c0 <unknown>
#3 0x7f43137a4fff gsignal
#4 0x7f43137a642a abort
#5 0x5580d2f64105 base::debug::BreakDebugger()
#6 0x5580d2f7ebca logging::LogMessage::~LogMessage()
#7 0x5580d200e2b1 content::ZygoteHostImpl::Init()
#8 0x5580d1c80c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5580d1c86a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5580d6db09a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5580d2ca0a00 content::RunNamedProcessTypeMain()
#12 0x5580d2ca12e8 content::ContentMainRunnerImpl::Run()
#13 0x5580d2caaf24 service_manager::Main()
#14 0x5580d2c9ff14 content::ContentMain()
#15 0x5580d6daf9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5580d6dafa42 headless::HeadlessBrowserMain()
#17 0x5580d2ca7f9d headless::HeadlessShellMain()
#18 0x5580d13061ac ChromeMain
#19 0x7f43137922e1 __libc_start_main
#20 0x5580d130602a _start
  r8: 0000000000000000  r9: 00007ffeb5cf54d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffeb5cf5bc8 r13: 0000000000000161 r14: 00007ffeb5cf5bd0 r15: 00007ffeb5cf5769
  di: 0000000000000002  si: 00007ffeb5cf54d0  bp: 00007ffeb5cf5710  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f43137a4fff  sp: 00007ffeb5cf5548
  ip: 00007f43137a4fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020628.169454:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55c06d165b0c base::debug::StackTrace::StackTrace()
#1 0x55c06d17e780 logging::LogMessage::~LogMessage()
#2 0x55c06c20e2b1 content::ZygoteHostImpl::Init()
#3 0x55c06be80c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55c06be86a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55c070fb09a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55c06cea0a00 content::RunNamedProcessTypeMain()
#7 0x55c06cea12e8 content::ContentMainRunnerImpl::Run()
#8 0x55c06ceaaf24 service_manager::Main()
#9 0x55c06ce9ff14 content::ContentMain()
#10 0x55c070faf9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55c070fafa42 headless::HeadlessBrowserMain()
#12 0x55c06cea7f9d headless::HeadlessShellMain()
#13 0x55c06b5061ac ChromeMain
#14 0x7fa5a01002e1 __libc_start_main
#15 0x55c06b50602a _start

Received signal 6
#0 0x55c06d165b0c base::debug::StackTrace::StackTrace()
#1 0x55c06d165671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fa5a605d0c0 <unknown>
#3 0x7fa5a0112fff gsignal
#4 0x7fa5a011442a abort
#5 0x55c06d164105 base::debug::BreakDebugger()
#6 0x55c06d17ebca logging::LogMessage::~LogMessage()
#7 0x55c06c20e2b1 content::ZygoteHostImpl::Init()
#8 0x55c06be80c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55c06be86a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55c070fb09a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55c06cea0a00 content::RunNamedProcessTypeMain()
#12 0x55c06cea12e8 content::ContentMainRunnerImpl::Run()
#13 0x55c06ceaaf24 service_manager::Main()
#14 0x55c06ce9ff14 content::ContentMain()
#15 0x55c070faf9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55c070fafa42 headless::HeadlessBrowserMain()
#17 0x55c06cea7f9d headless::HeadlessShellMain()
#18 0x55c06b5061ac ChromeMain
#19 0x7fa5a01002e1 __libc_start_main
#20 0x55c06b50602a _start
  r8: 0000000000000000  r9: 00007ffdc95184f0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdc9518be8 r13: 0000000000000161 r14: 00007ffdc9518bf0 r15: 00007ffdc9518789
  di: 0000000000000002  si: 00007ffdc95184f0  bp: 00007ffdc9518730  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fa5a0112fff  sp: 00007ffdc9518568
  ip: 00007fa5a0112fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020628.169454:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55c06d165b0c base::debug::StackTrace::StackTrace()
#1 0x55c06d17e780 logging::LogMessage::~LogMessage()
#2 0x55c06c20e2b1 content::ZygoteHostImpl::Init()
#3 0x55c06be80c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55c06be86a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55c070fb09a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55c06cea0a00 content::RunNamedProcessTypeMain()
#7 0x55c06cea12e8 content::ContentMainRunnerImpl::Run()
#8 0x55c06ceaaf24 service_manager::Main()
#9 0x55c06ce9ff14 content::ContentMain()
#10 0x55c070faf9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55c070fafa42 headless::HeadlessBrowserMain()
#12 0x55c06cea7f9d headless::HeadlessShellMain()
#13 0x55c06b5061ac ChromeMain
#14 0x7fa5a01002e1 __libc_start_main
#15 0x55c06b50602a _start

Received signal 6
#0 0x55c06d165b0c base::debug::StackTrace::StackTrace()
#1 0x55c06d165671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fa5a605d0c0 <unknown>
#3 0x7fa5a0112fff gsignal
#4 0x7fa5a011442a abort
#5 0x55c06d164105 base::debug::BreakDebugger()
#6 0x55c06d17ebca logging::LogMessage::~LogMessage()
#7 0x55c06c20e2b1 content::ZygoteHostImpl::Init()
#8 0x55c06be80c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55c06be86a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55c070fb09a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55c06cea0a00 content::RunNamedProcessTypeMain()
#12 0x55c06cea12e8 content::ContentMainRunnerImpl::Run()
#13 0x55c06ceaaf24 service_manager::Main()
#14 0x55c06ce9ff14 content::ContentMain()
#15 0x55c070faf9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55c070fafa42 headless::HeadlessBrowserMain()
#17 0x55c06cea7f9d headless::HeadlessShellMain()
#18 0x55c06b5061ac ChromeMain
#19 0x7fa5a01002e1 __libc_start_main
#20 0x55c06b50602a _start
  r8: 0000000000000000  r9: 00007ffdc95184f0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdc9518be8 r13: 0000000000000161 r14: 00007ffdc9518bf0 r15: 00007ffdc9518789
  di: 0000000000000002  si: 00007ffdc95184f0  bp: 00007ffdc9518730  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fa5a0112fff  sp: 00007ffdc9518568
  ip: 00007fa5a0112fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020635.273265:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5565f6a5fb0c base::debug::StackTrace::StackTrace()
#1 0x5565f6a78780 logging::LogMessage::~LogMessage()
#2 0x5565f5b082b1 content::ZygoteHostImpl::Init()
#3 0x5565f577ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5565f5780a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5565fa8aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5565f679aa00 content::RunNamedProcessTypeMain()
#7 0x5565f679b2e8 content::ContentMainRunnerImpl::Run()
#8 0x5565f67a4f24 service_manager::Main()
#9 0x5565f6799f14 content::ContentMain()
#10 0x5565fa8a99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5565fa8a9a42 headless::HeadlessBrowserMain()
#12 0x5565f67a1f9d headless::HeadlessShellMain()
#13 0x5565f4e001ac ChromeMain
#14 0x7f6fc289d2e1 __libc_start_main
#15 0x5565f4e0002a _start

Received signal 6
#0 0x5565f6a5fb0c base::debug::StackTrace::StackTrace()
#1 0x5565f6a5f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f6fc87fa0c0 <unknown>
#3 0x7f6fc28affff gsignal
#4 0x7f6fc28b142a abort
#5 0x5565f6a5e105 base::debug::BreakDebugger()
#6 0x5565f6a78bca logging::LogMessage::~LogMessage()
#7 0x5565f5b082b1 content::ZygoteHostImpl::Init()
#8 0x5565f577ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5565f5780a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5565fa8aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5565f679aa00 content::RunNamedProcessTypeMain()
#12 0x5565f679b2e8 content::ContentMainRunnerImpl::Run()
#13 0x5565f67a4f24 service_manager::Main()
#14 0x5565f6799f14 content::ContentMain()
#15 0x5565fa8a99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5565fa8a9a42 headless::HeadlessBrowserMain()
#17 0x5565f67a1f9d headless::HeadlessShellMain()
#18 0x5565f4e001ac ChromeMain
#19 0x7f6fc289d2e1 __libc_start_main
#20 0x5565f4e0002a _start
  r8: 0000000000000000  r9: 00007ffc86a760e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc86a767d8 r13: 0000000000000161 r14: 00007ffc86a767e0 r15: 00007ffc86a76379
  di: 0000000000000002  si: 00007ffc86a760e0  bp: 00007ffc86a76320  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f6fc28affff  sp: 00007ffc86a76158
  ip: 00007f6fc28affff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020635.273265:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5565f6a5fb0c base::debug::StackTrace::StackTrace()
#1 0x5565f6a78780 logging::LogMessage::~LogMessage()
#2 0x5565f5b082b1 content::ZygoteHostImpl::Init()
#3 0x5565f577ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5565f5780a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5565fa8aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5565f679aa00 content::RunNamedProcessTypeMain()
#7 0x5565f679b2e8 content::ContentMainRunnerImpl::Run()
#8 0x5565f67a4f24 service_manager::Main()
#9 0x5565f6799f14 content::ContentMain()
#10 0x5565fa8a99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5565fa8a9a42 headless::HeadlessBrowserMain()
#12 0x5565f67a1f9d headless::HeadlessShellMain()
#13 0x5565f4e001ac ChromeMain
#14 0x7f6fc289d2e1 __libc_start_main
#15 0x5565f4e0002a _start

Received signal 6
#0 0x5565f6a5fb0c base::debug::StackTrace::StackTrace()
#1 0x5565f6a5f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f6fc87fa0c0 <unknown>
#3 0x7f6fc28affff gsignal
#4 0x7f6fc28b142a abort
#5 0x5565f6a5e105 base::debug::BreakDebugger()
#6 0x5565f6a78bca logging::LogMessage::~LogMessage()
#7 0x5565f5b082b1 content::ZygoteHostImpl::Init()
#8 0x5565f577ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5565f5780a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5565fa8aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5565f679aa00 content::RunNamedProcessTypeMain()
#12 0x5565f679b2e8 content::ContentMainRunnerImpl::Run()
#13 0x5565f67a4f24 service_manager::Main()
#14 0x5565f6799f14 content::ContentMain()
#15 0x5565fa8a99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5565fa8a9a42 headless::HeadlessBrowserMain()
#17 0x5565f67a1f9d headless::HeadlessShellMain()
#18 0x5565f4e001ac ChromeMain
#19 0x7f6fc289d2e1 __libc_start_main
#20 0x5565f4e0002a _start
  r8: 0000000000000000  r9: 00007ffc86a760e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc86a767d8 r13: 0000000000000161 r14: 00007ffc86a767e0 r15: 00007ffc86a76379
  di: 0000000000000002  si: 00007ffc86a760e0  bp: 00007ffc86a76320  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f6fc28affff  sp: 00007ffc86a76158
  ip: 00007f6fc28affff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- Crawled version: [Editor's Draft](https://w3c.github.io/webdriver/webdriver-spec.html) (Thu May 10 2018)
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
[0510/020634.276009:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55821556cb0c base::debug::StackTrace::StackTrace()
#1 0x558215585780 logging::LogMessage::~LogMessage()
#2 0x5582146152b1 content::ZygoteHostImpl::Init()
#3 0x558214287c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55821428da69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5582193b79a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5582152a7a00 content::RunNamedProcessTypeMain()
#7 0x5582152a82e8 content::ContentMainRunnerImpl::Run()
#8 0x5582152b1f24 service_manager::Main()
#9 0x5582152a6f14 content::ContentMain()
#10 0x5582193b69b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5582193b6a42 headless::HeadlessBrowserMain()
#12 0x5582152aef9d headless::HeadlessShellMain()
#13 0x55821390d1ac ChromeMain
#14 0x7f8cd0ac22e1 __libc_start_main
#15 0x55821390d02a _start

Received signal 6
#0 0x55821556cb0c base::debug::StackTrace::StackTrace()
#1 0x55821556c671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f8cd6a1f0c0 <unknown>
#3 0x7f8cd0ad4fff gsignal
#4 0x7f8cd0ad642a abort
#5 0x55821556b105 base::debug::BreakDebugger()
#6 0x558215585bca logging::LogMessage::~LogMessage()
#7 0x5582146152b1 content::ZygoteHostImpl::Init()
#8 0x558214287c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55821428da69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5582193b79a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5582152a7a00 content::RunNamedProcessTypeMain()
#12 0x5582152a82e8 content::ContentMainRunnerImpl::Run()
#13 0x5582152b1f24 service_manager::Main()
#14 0x5582152a6f14 content::ContentMain()
#15 0x5582193b69b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5582193b6a42 headless::HeadlessBrowserMain()
#17 0x5582152aef9d headless::HeadlessShellMain()
#18 0x55821390d1ac ChromeMain
#19 0x7f8cd0ac22e1 __libc_start_main
#20 0x55821390d02a _start
  r8: 0000000000000000  r9: 00007fff54983dc0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff549844b8 r13: 0000000000000161 r14: 00007fff549844c0 r15: 00007fff54984059
  di: 0000000000000002  si: 00007fff54983dc0  bp: 00007fff54984000  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f8cd0ad4fff  sp: 00007fff54983e38
  ip: 00007f8cd0ad4fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020634.276009:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55821556cb0c base::debug::StackTrace::StackTrace()
#1 0x558215585780 logging::LogMessage::~LogMessage()
#2 0x5582146152b1 content::ZygoteHostImpl::Init()
#3 0x558214287c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55821428da69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5582193b79a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5582152a7a00 content::RunNamedProcessTypeMain()
#7 0x5582152a82e8 content::ContentMainRunnerImpl::Run()
#8 0x5582152b1f24 service_manager::Main()
#9 0x5582152a6f14 content::ContentMain()
#10 0x5582193b69b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5582193b6a42 headless::HeadlessBrowserMain()
#12 0x5582152aef9d headless::HeadlessShellMain()
#13 0x55821390d1ac ChromeMain
#14 0x7f8cd0ac22e1 __libc_start_main
#15 0x55821390d02a _start

Received signal 6
#0 0x55821556cb0c base::debug::StackTrace::StackTrace()
#1 0x55821556c671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f8cd6a1f0c0 <unknown>
#3 0x7f8cd0ad4fff gsignal
#4 0x7f8cd0ad642a abort
#5 0x55821556b105 base::debug::BreakDebugger()
#6 0x558215585bca logging::LogMessage::~LogMessage()
#7 0x5582146152b1 content::ZygoteHostImpl::Init()
#8 0x558214287c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55821428da69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5582193b79a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5582152a7a00 content::RunNamedProcessTypeMain()
#12 0x5582152a82e8 content::ContentMainRunnerImpl::Run()
#13 0x5582152b1f24 service_manager::Main()
#14 0x5582152a6f14 content::ContentMain()
#15 0x5582193b69b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5582193b6a42 headless::HeadlessBrowserMain()
#17 0x5582152aef9d headless::HeadlessShellMain()
#18 0x55821390d1ac ChromeMain
#19 0x7f8cd0ac22e1 __libc_start_main
#20 0x55821390d02a _start
  r8: 0000000000000000  r9: 00007fff54983dc0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff549844b8 r13: 0000000000000161 r14: 00007fff549844c0 r15: 00007fff54984059
  di: 0000000000000002  si: 00007fff54983dc0  bp: 00007fff54984000  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f8cd0ad4fff  sp: 00007fff54983e38
  ip: 00007f8cd0ad4fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020635.353744:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55dd79375b0c base::debug::StackTrace::StackTrace()
#1 0x55dd7938e780 logging::LogMessage::~LogMessage()
#2 0x55dd7841e2b1 content::ZygoteHostImpl::Init()
#3 0x55dd78090c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55dd78096a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55dd7d1c09a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55dd790b0a00 content::RunNamedProcessTypeMain()
#7 0x55dd790b12e8 content::ContentMainRunnerImpl::Run()
#8 0x55dd790baf24 service_manager::Main()
#9 0x55dd790aff14 content::ContentMain()
#10 0x55dd7d1bf9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55dd7d1bfa42 headless::HeadlessBrowserMain()
#12 0x55dd790b7f9d headless::HeadlessShellMain()
#13 0x55dd777161ac ChromeMain
#14 0x7f917bcdb2e1 __libc_start_main
#15 0x55dd7771602a _start

Received signal 6
#0 0x55dd79375b0c base::debug::StackTrace::StackTrace()
#1 0x55dd79375671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f9181c380c0 <unknown>
#3 0x7f917bcedfff gsignal
#4 0x7f917bcef42a abort
#5 0x55dd79374105 base::debug::BreakDebugger()
#6 0x55dd7938ebca logging::LogMessage::~LogMessage()
#7 0x55dd7841e2b1 content::ZygoteHostImpl::Init()
#8 0x55dd78090c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55dd78096a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55dd7d1c09a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55dd790b0a00 content::RunNamedProcessTypeMain()
#12 0x55dd790b12e8 content::ContentMainRunnerImpl::Run()
#13 0x55dd790baf24 service_manager::Main()
#14 0x55dd790aff14 content::ContentMain()
#15 0x55dd7d1bf9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55dd7d1bfa42 headless::HeadlessBrowserMain()
#17 0x55dd790b7f9d headless::HeadlessShellMain()
#18 0x55dd777161ac ChromeMain
#19 0x7f917bcdb2e1 __libc_start_main
#20 0x55dd7771602a _start
  r8: 0000000000000000  r9: 00007ffdb980d9d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdb980e0c8 r13: 0000000000000161 r14: 00007ffdb980e0d0 r15: 00007ffdb980dc69
  di: 0000000000000002  si: 00007ffdb980d9d0  bp: 00007ffdb980dc10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f917bcedfff  sp: 00007ffdb980da48
  ip: 00007f917bcedfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020635.353744:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55dd79375b0c base::debug::StackTrace::StackTrace()
#1 0x55dd7938e780 logging::LogMessage::~LogMessage()
#2 0x55dd7841e2b1 content::ZygoteHostImpl::Init()
#3 0x55dd78090c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55dd78096a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55dd7d1c09a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55dd790b0a00 content::RunNamedProcessTypeMain()
#7 0x55dd790b12e8 content::ContentMainRunnerImpl::Run()
#8 0x55dd790baf24 service_manager::Main()
#9 0x55dd790aff14 content::ContentMain()
#10 0x55dd7d1bf9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55dd7d1bfa42 headless::HeadlessBrowserMain()
#12 0x55dd790b7f9d headless::HeadlessShellMain()
#13 0x55dd777161ac ChromeMain
#14 0x7f917bcdb2e1 __libc_start_main
#15 0x55dd7771602a _start

Received signal 6
#0 0x55dd79375b0c base::debug::StackTrace::StackTrace()
#1 0x55dd79375671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f9181c380c0 <unknown>
#3 0x7f917bcedfff gsignal
#4 0x7f917bcef42a abort
#5 0x55dd79374105 base::debug::BreakDebugger()
#6 0x55dd7938ebca logging::LogMessage::~LogMessage()
#7 0x55dd7841e2b1 content::ZygoteHostImpl::Init()
#8 0x55dd78090c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55dd78096a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55dd7d1c09a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55dd790b0a00 content::RunNamedProcessTypeMain()
#12 0x55dd790b12e8 content::ContentMainRunnerImpl::Run()
#13 0x55dd790baf24 service_manager::Main()
#14 0x55dd790aff14 content::ContentMain()
#15 0x55dd7d1bf9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55dd7d1bfa42 headless::HeadlessBrowserMain()
#17 0x55dd790b7f9d headless::HeadlessShellMain()
#18 0x55dd777161ac ChromeMain
#19 0x7f917bcdb2e1 __libc_start_main
#20 0x55dd7771602a _start
  r8: 0000000000000000  r9: 00007ffdb980d9d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdb980e0c8 r13: 0000000000000161 r14: 00007ffdb980e0d0 r15: 00007ffdb980dc69
  di: 0000000000000002  si: 00007ffdb980d9d0  bp: 00007ffdb980dc10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f917bcedfff  sp: 00007ffdb980da48
  ip: 00007f917bcedfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-payment-method-basic-card-20180329/)
- Repository: [GitHub w3c/payment-method-basic-card](https://github.com/w3c/payment-method-basic-card)
- Shortname: payment-method-basic-card

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0510/020634.346133:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55c97e65fb0c base::debug::StackTrace::StackTrace()
#1 0x55c97e678780 logging::LogMessage::~LogMessage()
#2 0x55c97d7082b1 content::ZygoteHostImpl::Init()
#3 0x55c97d37ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55c97d380a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55c9824aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55c97e39aa00 content::RunNamedProcessTypeMain()
#7 0x55c97e39b2e8 content::ContentMainRunnerImpl::Run()
#8 0x55c97e3a4f24 service_manager::Main()
#9 0x55c97e399f14 content::ContentMain()
#10 0x55c9824a99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55c9824a9a42 headless::HeadlessBrowserMain()
#12 0x55c97e3a1f9d headless::HeadlessShellMain()
#13 0x55c97ca001ac ChromeMain
#14 0x7f7d3995c2e1 __libc_start_main
#15 0x55c97ca0002a _start

Received signal 6
#0 0x55c97e65fb0c base::debug::StackTrace::StackTrace()
#1 0x55c97e65f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f7d3f8b90c0 <unknown>
#3 0x7f7d3996efff gsignal
#4 0x7f7d3997042a abort
#5 0x55c97e65e105 base::debug::BreakDebugger()
#6 0x55c97e678bca logging::LogMessage::~LogMessage()
#7 0x55c97d7082b1 content::ZygoteHostImpl::Init()
#8 0x55c97d37ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55c97d380a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55c9824aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55c97e39aa00 content::RunNamedProcessTypeMain()
#12 0x55c97e39b2e8 content::ContentMainRunnerImpl::Run()
#13 0x55c97e3a4f24 service_manager::Main()
#14 0x55c97e399f14 content::ContentMain()
#15 0x55c9824a99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55c9824a9a42 headless::HeadlessBrowserMain()
#17 0x55c97e3a1f9d headless::HeadlessShellMain()
#18 0x55c97ca001ac ChromeMain
#19 0x7f7d3995c2e1 __libc_start_main
#20 0x55c97ca0002a _start
  r8: 0000000000000000  r9: 00007ffdd23a24b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdd23a2ba8 r13: 0000000000000161 r14: 00007ffdd23a2bb0 r15: 00007ffdd23a2749
  di: 0000000000000002  si: 00007ffdd23a24b0  bp: 00007ffdd23a26f0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f7d3996efff  sp: 00007ffdd23a2528
  ip: 00007f7d3996efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020634.346133:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55c97e65fb0c base::debug::StackTrace::StackTrace()
#1 0x55c97e678780 logging::LogMessage::~LogMessage()
#2 0x55c97d7082b1 content::ZygoteHostImpl::Init()
#3 0x55c97d37ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55c97d380a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55c9824aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55c97e39aa00 content::RunNamedProcessTypeMain()
#7 0x55c97e39b2e8 content::ContentMainRunnerImpl::Run()
#8 0x55c97e3a4f24 service_manager::Main()
#9 0x55c97e399f14 content::ContentMain()
#10 0x55c9824a99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55c9824a9a42 headless::HeadlessBrowserMain()
#12 0x55c97e3a1f9d headless::HeadlessShellMain()
#13 0x55c97ca001ac ChromeMain
#14 0x7f7d3995c2e1 __libc_start_main
#15 0x55c97ca0002a _start

Received signal 6
#0 0x55c97e65fb0c base::debug::StackTrace::StackTrace()
#1 0x55c97e65f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f7d3f8b90c0 <unknown>
#3 0x7f7d3996efff gsignal
#4 0x7f7d3997042a abort
#5 0x55c97e65e105 base::debug::BreakDebugger()
#6 0x55c97e678bca logging::LogMessage::~LogMessage()
#7 0x55c97d7082b1 content::ZygoteHostImpl::Init()
#8 0x55c97d37ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55c97d380a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55c9824aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55c97e39aa00 content::RunNamedProcessTypeMain()
#12 0x55c97e39b2e8 content::ContentMainRunnerImpl::Run()
#13 0x55c97e3a4f24 service_manager::Main()
#14 0x55c97e399f14 content::ContentMain()
#15 0x55c9824a99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55c9824a9a42 headless::HeadlessBrowserMain()
#17 0x55c97e3a1f9d headless::HeadlessShellMain()
#18 0x55c97ca001ac ChromeMain
#19 0x7f7d3995c2e1 __libc_start_main
#20 0x55c97ca0002a _start
  r8: 0000000000000000  r9: 00007ffdd23a24b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdd23a2ba8 r13: 0000000000000161 r14: 00007ffdd23a2bb0 r15: 00007ffdd23a2749
  di: 0000000000000002  si: 00007ffdd23a24b0  bp: 00007ffdd23a26f0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f7d3996efff  sp: 00007ffdd23a2528
  ip: 00007f7d3996efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


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
[0510/020635.427647:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5654c82a7b0c base::debug::StackTrace::StackTrace()
#1 0x5654c82c0780 logging::LogMessage::~LogMessage()
#2 0x5654c73502b1 content::ZygoteHostImpl::Init()
#3 0x5654c6fc2c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5654c6fc8a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5654cc0f29a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5654c7fe2a00 content::RunNamedProcessTypeMain()
#7 0x5654c7fe32e8 content::ContentMainRunnerImpl::Run()
#8 0x5654c7fecf24 service_manager::Main()
#9 0x5654c7fe1f14 content::ContentMain()
#10 0x5654cc0f19b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5654cc0f1a42 headless::HeadlessBrowserMain()
#12 0x5654c7fe9f9d headless::HeadlessShellMain()
#13 0x5654c66481ac ChromeMain
#14 0x7f956936a2e1 __libc_start_main
#15 0x5654c664802a _start

Received signal 6
#0 0x5654c82a7b0c base::debug::StackTrace::StackTrace()
#1 0x5654c82a7671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f956f2c70c0 <unknown>
#3 0x7f956937cfff gsignal
#4 0x7f956937e42a abort
#5 0x5654c82a6105 base::debug::BreakDebugger()
#6 0x5654c82c0bca logging::LogMessage::~LogMessage()
#7 0x5654c73502b1 content::ZygoteHostImpl::Init()
#8 0x5654c6fc2c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5654c6fc8a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5654cc0f29a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5654c7fe2a00 content::RunNamedProcessTypeMain()
#12 0x5654c7fe32e8 content::ContentMainRunnerImpl::Run()
#13 0x5654c7fecf24 service_manager::Main()
#14 0x5654c7fe1f14 content::ContentMain()
#15 0x5654cc0f19b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5654cc0f1a42 headless::HeadlessBrowserMain()
#17 0x5654c7fe9f9d headless::HeadlessShellMain()
#18 0x5654c66481ac ChromeMain
#19 0x7f956936a2e1 __libc_start_main
#20 0x5654c664802a _start
  r8: 0000000000000000  r9: 00007fff03f08b20 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff03f09218 r13: 0000000000000161 r14: 00007fff03f09220 r15: 00007fff03f08db9
  di: 0000000000000002  si: 00007fff03f08b20  bp: 00007fff03f08d60  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f956937cfff  sp: 00007fff03f08b98
  ip: 00007f956937cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020635.427647:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5654c82a7b0c base::debug::StackTrace::StackTrace()
#1 0x5654c82c0780 logging::LogMessage::~LogMessage()
#2 0x5654c73502b1 content::ZygoteHostImpl::Init()
#3 0x5654c6fc2c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5654c6fc8a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5654cc0f29a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5654c7fe2a00 content::RunNamedProcessTypeMain()
#7 0x5654c7fe32e8 content::ContentMainRunnerImpl::Run()
#8 0x5654c7fecf24 service_manager::Main()
#9 0x5654c7fe1f14 content::ContentMain()
#10 0x5654cc0f19b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5654cc0f1a42 headless::HeadlessBrowserMain()
#12 0x5654c7fe9f9d headless::HeadlessShellMain()
#13 0x5654c66481ac ChromeMain
#14 0x7f956936a2e1 __libc_start_main
#15 0x5654c664802a _start

Received signal 6
#0 0x5654c82a7b0c base::debug::StackTrace::StackTrace()
#1 0x5654c82a7671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f956f2c70c0 <unknown>
#3 0x7f956937cfff gsignal
#4 0x7f956937e42a abort
#5 0x5654c82a6105 base::debug::BreakDebugger()
#6 0x5654c82c0bca logging::LogMessage::~LogMessage()
#7 0x5654c73502b1 content::ZygoteHostImpl::Init()
#8 0x5654c6fc2c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5654c6fc8a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5654cc0f29a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5654c7fe2a00 content::RunNamedProcessTypeMain()
#12 0x5654c7fe32e8 content::ContentMainRunnerImpl::Run()
#13 0x5654c7fecf24 service_manager::Main()
#14 0x5654c7fe1f14 content::ContentMain()
#15 0x5654cc0f19b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5654cc0f1a42 headless::HeadlessBrowserMain()
#17 0x5654c7fe9f9d headless::HeadlessShellMain()
#18 0x5654c66481ac ChromeMain
#19 0x7f956936a2e1 __libc_start_main
#20 0x5654c664802a _start
  r8: 0000000000000000  r9: 00007fff03f08b20 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff03f09218 r13: 0000000000000161 r14: 00007fff03f09220 r15: 00007fff03f08db9
  di: 0000000000000002  si: 00007fff03f08b20  bp: 00007fff03f08d60  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f956937cfff  sp: 00007fff03f08b98
  ip: 00007f956937cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-pointerevents2-20180404/)
- Repository: [GitHub w3c/pointerevents](https://github.com/w3c/pointerevents)
- Shortname: pointerevents2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0510/020638.588569:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556faea61b0c base::debug::StackTrace::StackTrace()
#1 0x556faea7a780 logging::LogMessage::~LogMessage()
#2 0x556fadb0a2b1 content::ZygoteHostImpl::Init()
#3 0x556fad77cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556fad782a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556fb28ac9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556fae79ca00 content::RunNamedProcessTypeMain()
#7 0x556fae79d2e8 content::ContentMainRunnerImpl::Run()
#8 0x556fae7a6f24 service_manager::Main()
#9 0x556fae79bf14 content::ContentMain()
#10 0x556fb28ab9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556fb28aba42 headless::HeadlessBrowserMain()
#12 0x556fae7a3f9d headless::HeadlessShellMain()
#13 0x556face021ac ChromeMain
#14 0x7f45663992e1 __libc_start_main
#15 0x556face0202a _start

Received signal 6
#0 0x556faea61b0c base::debug::StackTrace::StackTrace()
#1 0x556faea61671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f456c2f60c0 <unknown>
#3 0x7f45663abfff gsignal
#4 0x7f45663ad42a abort
#5 0x556faea60105 base::debug::BreakDebugger()
#6 0x556faea7abca logging::LogMessage::~LogMessage()
#7 0x556fadb0a2b1 content::ZygoteHostImpl::Init()
#8 0x556fad77cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556fad782a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556fb28ac9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556fae79ca00 content::RunNamedProcessTypeMain()
#12 0x556fae79d2e8 content::ContentMainRunnerImpl::Run()
#13 0x556fae7a6f24 service_manager::Main()
#14 0x556fae79bf14 content::ContentMain()
#15 0x556fb28ab9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556fb28aba42 headless::HeadlessBrowserMain()
#17 0x556fae7a3f9d headless::HeadlessShellMain()
#18 0x556face021ac ChromeMain
#19 0x7f45663992e1 __libc_start_main
#20 0x556face0202a _start
  r8: 0000000000000000  r9: 00007ffc40033270 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc40033968 r13: 0000000000000161 r14: 00007ffc40033970 r15: 00007ffc40033509
  di: 0000000000000002  si: 00007ffc40033270  bp: 00007ffc400334b0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f45663abfff  sp: 00007ffc400332e8
  ip: 00007f45663abfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020638.588569:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556faea61b0c base::debug::StackTrace::StackTrace()
#1 0x556faea7a780 logging::LogMessage::~LogMessage()
#2 0x556fadb0a2b1 content::ZygoteHostImpl::Init()
#3 0x556fad77cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556fad782a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556fb28ac9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556fae79ca00 content::RunNamedProcessTypeMain()
#7 0x556fae79d2e8 content::ContentMainRunnerImpl::Run()
#8 0x556fae7a6f24 service_manager::Main()
#9 0x556fae79bf14 content::ContentMain()
#10 0x556fb28ab9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556fb28aba42 headless::HeadlessBrowserMain()
#12 0x556fae7a3f9d headless::HeadlessShellMain()
#13 0x556face021ac ChromeMain
#14 0x7f45663992e1 __libc_start_main
#15 0x556face0202a _start

Received signal 6
#0 0x556faea61b0c base::debug::StackTrace::StackTrace()
#1 0x556faea61671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f456c2f60c0 <unknown>
#3 0x7f45663abfff gsignal
#4 0x7f45663ad42a abort
#5 0x556faea60105 base::debug::BreakDebugger()
#6 0x556faea7abca logging::LogMessage::~LogMessage()
#7 0x556fadb0a2b1 content::ZygoteHostImpl::Init()
#8 0x556fad77cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556fad782a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556fb28ac9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556fae79ca00 content::RunNamedProcessTypeMain()
#12 0x556fae79d2e8 content::ContentMainRunnerImpl::Run()
#13 0x556fae7a6f24 service_manager::Main()
#14 0x556fae79bf14 content::ContentMain()
#15 0x556fb28ab9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556fb28aba42 headless::HeadlessBrowserMain()
#17 0x556fae7a3f9d headless::HeadlessShellMain()
#18 0x556face021ac ChromeMain
#19 0x7f45663992e1 __libc_start_main
#20 0x556face0202a _start
  r8: 0000000000000000  r9: 00007ffc40033270 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc40033968 r13: 0000000000000161 r14: 00007ffc40033970 r15: 00007ffc40033509
  di: 0000000000000002  si: 00007ffc40033270  bp: 00007ffc400334b0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f45663abfff  sp: 00007ffc400332e8
  ip: 00007f45663abfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020638.915813:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55654a522b0c base::debug::StackTrace::StackTrace()
#1 0x55654a53b780 logging::LogMessage::~LogMessage()
#2 0x5565495cb2b1 content::ZygoteHostImpl::Init()
#3 0x55654923dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556549243a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55654e36d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55654a25da00 content::RunNamedProcessTypeMain()
#7 0x55654a25e2e8 content::ContentMainRunnerImpl::Run()
#8 0x55654a267f24 service_manager::Main()
#9 0x55654a25cf14 content::ContentMain()
#10 0x55654e36c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55654e36ca42 headless::HeadlessBrowserMain()
#12 0x55654a264f9d headless::HeadlessShellMain()
#13 0x5565488c31ac ChromeMain
#14 0x7fdf6aacc2e1 __libc_start_main
#15 0x5565488c302a _start

Received signal 6
#0 0x55654a522b0c base::debug::StackTrace::StackTrace()
#1 0x55654a522671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fdf70a290c0 <unknown>
#3 0x7fdf6aadefff gsignal
#4 0x7fdf6aae042a abort
#5 0x55654a521105 base::debug::BreakDebugger()
#6 0x55654a53bbca logging::LogMessage::~LogMessage()
#7 0x5565495cb2b1 content::ZygoteHostImpl::Init()
#8 0x55654923dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556549243a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55654e36d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55654a25da00 content::RunNamedProcessTypeMain()
#12 0x55654a25e2e8 content::ContentMainRunnerImpl::Run()
#13 0x55654a267f24 service_manager::Main()
#14 0x55654a25cf14 content::ContentMain()
#15 0x55654e36c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55654e36ca42 headless::HeadlessBrowserMain()
#17 0x55654a264f9d headless::HeadlessShellMain()
#18 0x5565488c31ac ChromeMain
#19 0x7fdf6aacc2e1 __libc_start_main
#20 0x5565488c302a _start
  r8: 0000000000000000  r9: 00007ffdb3a9c300 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdb3a9c9f8 r13: 0000000000000161 r14: 00007ffdb3a9ca00 r15: 00007ffdb3a9c599
  di: 0000000000000002  si: 00007ffdb3a9c300  bp: 00007ffdb3a9c540  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fdf6aadefff  sp: 00007ffdb3a9c378
  ip: 00007fdf6aadefff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020638.915813:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55654a522b0c base::debug::StackTrace::StackTrace()
#1 0x55654a53b780 logging::LogMessage::~LogMessage()
#2 0x5565495cb2b1 content::ZygoteHostImpl::Init()
#3 0x55654923dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556549243a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55654e36d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55654a25da00 content::RunNamedProcessTypeMain()
#7 0x55654a25e2e8 content::ContentMainRunnerImpl::Run()
#8 0x55654a267f24 service_manager::Main()
#9 0x55654a25cf14 content::ContentMain()
#10 0x55654e36c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55654e36ca42 headless::HeadlessBrowserMain()
#12 0x55654a264f9d headless::HeadlessShellMain()
#13 0x5565488c31ac ChromeMain
#14 0x7fdf6aacc2e1 __libc_start_main
#15 0x5565488c302a _start

Received signal 6
#0 0x55654a522b0c base::debug::StackTrace::StackTrace()
#1 0x55654a522671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fdf70a290c0 <unknown>
#3 0x7fdf6aadefff gsignal
#4 0x7fdf6aae042a abort
#5 0x55654a521105 base::debug::BreakDebugger()
#6 0x55654a53bbca logging::LogMessage::~LogMessage()
#7 0x5565495cb2b1 content::ZygoteHostImpl::Init()
#8 0x55654923dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556549243a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55654e36d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55654a25da00 content::RunNamedProcessTypeMain()
#12 0x55654a25e2e8 content::ContentMainRunnerImpl::Run()
#13 0x55654a267f24 service_manager::Main()
#14 0x55654a25cf14 content::ContentMain()
#15 0x55654e36c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55654e36ca42 headless::HeadlessBrowserMain()
#17 0x55654a264f9d headless::HeadlessShellMain()
#18 0x5565488c31ac ChromeMain
#19 0x7fdf6aacc2e1 __libc_start_main
#20 0x5565488c302a _start
  r8: 0000000000000000  r9: 00007ffdb3a9c300 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdb3a9c9f8 r13: 0000000000000161 r14: 00007ffdb3a9ca00 r15: 00007ffdb3a9c599
  di: 0000000000000002  si: 00007ffdb3a9c300  bp: 00007ffdb3a9c540  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fdf6aadefff  sp: 00007ffdb3a9c378
  ip: 00007fdf6aadefff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020638.512471:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56475959db0c base::debug::StackTrace::StackTrace()
#1 0x5647595b6780 logging::LogMessage::~LogMessage()
#2 0x5647586462b1 content::ZygoteHostImpl::Init()
#3 0x5647582b8c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5647582bea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56475d3e89a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5647592d8a00 content::RunNamedProcessTypeMain()
#7 0x5647592d92e8 content::ContentMainRunnerImpl::Run()
#8 0x5647592e2f24 service_manager::Main()
#9 0x5647592d7f14 content::ContentMain()
#10 0x56475d3e79b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56475d3e7a42 headless::HeadlessBrowserMain()
#12 0x5647592dff9d headless::HeadlessShellMain()
#13 0x56475793e1ac ChromeMain
#14 0x7fe9d51202e1 __libc_start_main
#15 0x56475793e02a _start

Received signal 6
#0 0x56475959db0c base::debug::StackTrace::StackTrace()
#1 0x56475959d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe9db07d0c0 <unknown>
#3 0x7fe9d5132fff gsignal
#4 0x7fe9d513442a abort
#5 0x56475959c105 base::debug::BreakDebugger()
#6 0x5647595b6bca logging::LogMessage::~LogMessage()
#7 0x5647586462b1 content::ZygoteHostImpl::Init()
#8 0x5647582b8c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5647582bea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56475d3e89a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5647592d8a00 content::RunNamedProcessTypeMain()
#12 0x5647592d92e8 content::ContentMainRunnerImpl::Run()
#13 0x5647592e2f24 service_manager::Main()
#14 0x5647592d7f14 content::ContentMain()
#15 0x56475d3e79b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56475d3e7a42 headless::HeadlessBrowserMain()
#17 0x5647592dff9d headless::HeadlessShellMain()
#18 0x56475793e1ac ChromeMain
#19 0x7fe9d51202e1 __libc_start_main
#20 0x56475793e02a _start
  r8: 0000000000000000  r9: 00007ffd4b4fffc0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd4b5006b8 r13: 0000000000000161 r14: 00007ffd4b5006c0 r15: 00007ffd4b500259
  di: 0000000000000002  si: 00007ffd4b4fffc0  bp: 00007ffd4b500200  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe9d5132fff  sp: 00007ffd4b500038
  ip: 00007fe9d5132fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020638.512471:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56475959db0c base::debug::StackTrace::StackTrace()
#1 0x5647595b6780 logging::LogMessage::~LogMessage()
#2 0x5647586462b1 content::ZygoteHostImpl::Init()
#3 0x5647582b8c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5647582bea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56475d3e89a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5647592d8a00 content::RunNamedProcessTypeMain()
#7 0x5647592d92e8 content::ContentMainRunnerImpl::Run()
#8 0x5647592e2f24 service_manager::Main()
#9 0x5647592d7f14 content::ContentMain()
#10 0x56475d3e79b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56475d3e7a42 headless::HeadlessBrowserMain()
#12 0x5647592dff9d headless::HeadlessShellMain()
#13 0x56475793e1ac ChromeMain
#14 0x7fe9d51202e1 __libc_start_main
#15 0x56475793e02a _start

Received signal 6
#0 0x56475959db0c base::debug::StackTrace::StackTrace()
#1 0x56475959d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe9db07d0c0 <unknown>
#3 0x7fe9d5132fff gsignal
#4 0x7fe9d513442a abort
#5 0x56475959c105 base::debug::BreakDebugger()
#6 0x5647595b6bca logging::LogMessage::~LogMessage()
#7 0x5647586462b1 content::ZygoteHostImpl::Init()
#8 0x5647582b8c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5647582bea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56475d3e89a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5647592d8a00 content::RunNamedProcessTypeMain()
#12 0x5647592d92e8 content::ContentMainRunnerImpl::Run()
#13 0x5647592e2f24 service_manager::Main()
#14 0x5647592d7f14 content::ContentMain()
#15 0x56475d3e79b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56475d3e7a42 headless::HeadlessBrowserMain()
#17 0x5647592dff9d headless::HeadlessShellMain()
#18 0x56475793e1ac ChromeMain
#19 0x7fe9d51202e1 __libc_start_main
#20 0x56475793e02a _start
  r8: 0000000000000000  r9: 00007ffd4b4fffc0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd4b5006b8 r13: 0000000000000161 r14: 00007ffd4b5006c0 r15: 00007ffd4b500259
  di: 0000000000000002  si: 00007ffd4b4fffc0  bp: 00007ffd4b500200  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe9d5132fff  sp: 00007ffd4b500038
  ip: 00007fe9d5132fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020639.970038:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55911717bb0c base::debug::StackTrace::StackTrace()
#1 0x559117194780 logging::LogMessage::~LogMessage()
#2 0x5591162242b1 content::ZygoteHostImpl::Init()
#3 0x559115e96c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x559115e9ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55911afc69a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x559116eb6a00 content::RunNamedProcessTypeMain()
#7 0x559116eb72e8 content::ContentMainRunnerImpl::Run()
#8 0x559116ec0f24 service_manager::Main()
#9 0x559116eb5f14 content::ContentMain()
#10 0x55911afc59b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55911afc5a42 headless::HeadlessBrowserMain()
#12 0x559116ebdf9d headless::HeadlessShellMain()
#13 0x55911551c1ac ChromeMain
#14 0x7f90742a62e1 __libc_start_main
#15 0x55911551c02a _start

Received signal 6
#0 0x55911717bb0c base::debug::StackTrace::StackTrace()
#1 0x55911717b671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f907a2030c0 <unknown>
#3 0x7f90742b8fff gsignal
#4 0x7f90742ba42a abort
#5 0x55911717a105 base::debug::BreakDebugger()
#6 0x559117194bca logging::LogMessage::~LogMessage()
#7 0x5591162242b1 content::ZygoteHostImpl::Init()
#8 0x559115e96c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x559115e9ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55911afc69a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x559116eb6a00 content::RunNamedProcessTypeMain()
#12 0x559116eb72e8 content::ContentMainRunnerImpl::Run()
#13 0x559116ec0f24 service_manager::Main()
#14 0x559116eb5f14 content::ContentMain()
#15 0x55911afc59b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55911afc5a42 headless::HeadlessBrowserMain()
#17 0x559116ebdf9d headless::HeadlessShellMain()
#18 0x55911551c1ac ChromeMain
#19 0x7f90742a62e1 __libc_start_main
#20 0x55911551c02a _start
  r8: 0000000000000000  r9: 00007fff0ea83500 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff0ea83bf8 r13: 0000000000000161 r14: 00007fff0ea83c00 r15: 00007fff0ea83799
  di: 0000000000000002  si: 00007fff0ea83500  bp: 00007fff0ea83740  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f90742b8fff  sp: 00007fff0ea83578
  ip: 00007f90742b8fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020639.970038:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55911717bb0c base::debug::StackTrace::StackTrace()
#1 0x559117194780 logging::LogMessage::~LogMessage()
#2 0x5591162242b1 content::ZygoteHostImpl::Init()
#3 0x559115e96c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x559115e9ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55911afc69a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x559116eb6a00 content::RunNamedProcessTypeMain()
#7 0x559116eb72e8 content::ContentMainRunnerImpl::Run()
#8 0x559116ec0f24 service_manager::Main()
#9 0x559116eb5f14 content::ContentMain()
#10 0x55911afc59b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55911afc5a42 headless::HeadlessBrowserMain()
#12 0x559116ebdf9d headless::HeadlessShellMain()
#13 0x55911551c1ac ChromeMain
#14 0x7f90742a62e1 __libc_start_main
#15 0x55911551c02a _start

Received signal 6
#0 0x55911717bb0c base::debug::StackTrace::StackTrace()
#1 0x55911717b671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f907a2030c0 <unknown>
#3 0x7f90742b8fff gsignal
#4 0x7f90742ba42a abort
#5 0x55911717a105 base::debug::BreakDebugger()
#6 0x559117194bca logging::LogMessage::~LogMessage()
#7 0x5591162242b1 content::ZygoteHostImpl::Init()
#8 0x559115e96c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x559115e9ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55911afc69a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x559116eb6a00 content::RunNamedProcessTypeMain()
#12 0x559116eb72e8 content::ContentMainRunnerImpl::Run()
#13 0x559116ec0f24 service_manager::Main()
#14 0x559116eb5f14 content::ContentMain()
#15 0x55911afc59b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55911afc5a42 headless::HeadlessBrowserMain()
#17 0x559116ebdf9d headless::HeadlessShellMain()
#18 0x55911551c1ac ChromeMain
#19 0x7f90742a62e1 __libc_start_main
#20 0x55911551c02a _start
  r8: 0000000000000000  r9: 00007fff0ea83500 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff0ea83bf8 r13: 0000000000000161 r14: 00007fff0ea83c00 r15: 00007fff0ea83799
  di: 0000000000000002  si: 00007fff0ea83500  bp: 00007fff0ea83740  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f90742b8fff  sp: 00007fff0ea83578
  ip: 00007f90742b8fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020639.356209:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561f99effb0c base::debug::StackTrace::StackTrace()
#1 0x561f99f18780 logging::LogMessage::~LogMessage()
#2 0x561f98fa82b1 content::ZygoteHostImpl::Init()
#3 0x561f98c1ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561f98c20a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x561f9dd4a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x561f99c3aa00 content::RunNamedProcessTypeMain()
#7 0x561f99c3b2e8 content::ContentMainRunnerImpl::Run()
#8 0x561f99c44f24 service_manager::Main()
#9 0x561f99c39f14 content::ContentMain()
#10 0x561f9dd499b9 headless::(anonymous namespace)::RunContentMain()
#11 0x561f9dd49a42 headless::HeadlessBrowserMain()
#12 0x561f99c41f9d headless::HeadlessShellMain()
#13 0x561f982a01ac ChromeMain
#14 0x7f065538a2e1 __libc_start_main
#15 0x561f982a002a _start

Received signal 6
#0 0x561f99effb0c base::debug::StackTrace::StackTrace()
#1 0x561f99eff671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f065b2e70c0 <unknown>
#3 0x7f065539cfff gsignal
#4 0x7f065539e42a abort
#5 0x561f99efe105 base::debug::BreakDebugger()
#6 0x561f99f18bca logging::LogMessage::~LogMessage()
#7 0x561f98fa82b1 content::ZygoteHostImpl::Init()
#8 0x561f98c1ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561f98c20a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x561f9dd4a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x561f99c3aa00 content::RunNamedProcessTypeMain()
#12 0x561f99c3b2e8 content::ContentMainRunnerImpl::Run()
#13 0x561f99c44f24 service_manager::Main()
#14 0x561f99c39f14 content::ContentMain()
#15 0x561f9dd499b9 headless::(anonymous namespace)::RunContentMain()
#16 0x561f9dd49a42 headless::HeadlessBrowserMain()
#17 0x561f99c41f9d headless::HeadlessShellMain()
#18 0x561f982a01ac ChromeMain
#19 0x7f065538a2e1 __libc_start_main
#20 0x561f982a002a _start
  r8: 0000000000000000  r9: 00007ffdef57d8d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdef57dfc8 r13: 0000000000000161 r14: 00007ffdef57dfd0 r15: 00007ffdef57db69
  di: 0000000000000002  si: 00007ffdef57d8d0  bp: 00007ffdef57db10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f065539cfff  sp: 00007ffdef57d948
  ip: 00007f065539cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020639.356209:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561f99effb0c base::debug::StackTrace::StackTrace()
#1 0x561f99f18780 logging::LogMessage::~LogMessage()
#2 0x561f98fa82b1 content::ZygoteHostImpl::Init()
#3 0x561f98c1ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561f98c20a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x561f9dd4a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x561f99c3aa00 content::RunNamedProcessTypeMain()
#7 0x561f99c3b2e8 content::ContentMainRunnerImpl::Run()
#8 0x561f99c44f24 service_manager::Main()
#9 0x561f99c39f14 content::ContentMain()
#10 0x561f9dd499b9 headless::(anonymous namespace)::RunContentMain()
#11 0x561f9dd49a42 headless::HeadlessBrowserMain()
#12 0x561f99c41f9d headless::HeadlessShellMain()
#13 0x561f982a01ac ChromeMain
#14 0x7f065538a2e1 __libc_start_main
#15 0x561f982a002a _start

Received signal 6
#0 0x561f99effb0c base::debug::StackTrace::StackTrace()
#1 0x561f99eff671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f065b2e70c0 <unknown>
#3 0x7f065539cfff gsignal
#4 0x7f065539e42a abort
#5 0x561f99efe105 base::debug::BreakDebugger()
#6 0x561f99f18bca logging::LogMessage::~LogMessage()
#7 0x561f98fa82b1 content::ZygoteHostImpl::Init()
#8 0x561f98c1ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561f98c20a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x561f9dd4a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x561f99c3aa00 content::RunNamedProcessTypeMain()
#12 0x561f99c3b2e8 content::ContentMainRunnerImpl::Run()
#13 0x561f99c44f24 service_manager::Main()
#14 0x561f99c39f14 content::ContentMain()
#15 0x561f9dd499b9 headless::(anonymous namespace)::RunContentMain()
#16 0x561f9dd49a42 headless::HeadlessBrowserMain()
#17 0x561f99c41f9d headless::HeadlessShellMain()
#18 0x561f982a01ac ChromeMain
#19 0x7f065538a2e1 __libc_start_main
#20 0x561f982a002a _start
  r8: 0000000000000000  r9: 00007ffdef57d8d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdef57dfc8 r13: 0000000000000161 r14: 00007ffdef57dfd0 r15: 00007ffdef57db69
  di: 0000000000000002  si: 00007ffdef57d8d0  bp: 00007ffdef57db10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f065539cfff  sp: 00007ffdef57d948
  ip: 00007f065539cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at ChildProcess.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:245:60)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)`

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
[0510/020639.280947:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56252ef9db0c base::debug::StackTrace::StackTrace()
#1 0x56252efb6780 logging::LogMessage::~LogMessage()
#2 0x56252e0462b1 content::ZygoteHostImpl::Init()
#3 0x56252dcb8c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56252dcbea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x562532de89a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56252ecd8a00 content::RunNamedProcessTypeMain()
#7 0x56252ecd92e8 content::ContentMainRunnerImpl::Run()
#8 0x56252ece2f24 service_manager::Main()
#9 0x56252ecd7f14 content::ContentMain()
#10 0x562532de79b9 headless::(anonymous namespace)::RunContentMain()
#11 0x562532de7a42 headless::HeadlessBrowserMain()
#12 0x56252ecdff9d headless::HeadlessShellMain()
#13 0x56252d33e1ac ChromeMain
#14 0x7f9f8a1d02e1 __libc_start_main
#15 0x56252d33e02a _start

Received signal 6
#0 0x56252ef9db0c base::debug::StackTrace::StackTrace()
#1 0x56252ef9d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f9f9012d0c0 <unknown>
#3 0x7f9f8a1e2fff gsignal
#4 0x7f9f8a1e442a abort
#5 0x56252ef9c105 base::debug::BreakDebugger()
#6 0x56252efb6bca logging::LogMessage::~LogMessage()
#7 0x56252e0462b1 content::ZygoteHostImpl::Init()
#8 0x56252dcb8c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56252dcbea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x562532de89a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56252ecd8a00 content::RunNamedProcessTypeMain()
#12 0x56252ecd92e8 content::ContentMainRunnerImpl::Run()
#13 0x56252ece2f24 service_manager::Main()
#14 0x56252ecd7f14 content::ContentMain()
#15 0x562532de79b9 headless::(anonymous namespace)::RunContentMain()
#16 0x562532de7a42 headless::HeadlessBrowserMain()
#17 0x56252ecdff9d headless::HeadlessShellMain()
#18 0x56252d33e1ac ChromeMain
#19 0x7f9f8a1d02e1 __libc_start_main
#20 0x56252d33e02a _start
  r8: 0000000000000000  r9: 00007ffea8ddac60 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffea8ddb358 r13: 0000000000000161 r14: 00007ffea8ddb360 r15: 00007ffea8ddaef9
  di: 0000000000000002  si: 00007ffea8ddac60  bp: 00007ffea8ddaea0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9f8a1e2fff  sp: 00007ffea8ddacd8
  ip: 00007f9f8a1e2fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020639.280947:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56252ef9db0c base::debug::StackTrace::StackTrace()
#1 0x56252efb6780 logging::LogMessage::~LogMessage()
#2 0x56252e0462b1 content::ZygoteHostImpl::Init()
#3 0x56252dcb8c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56252dcbea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x562532de89a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56252ecd8a00 content::RunNamedProcessTypeMain()
#7 0x56252ecd92e8 content::ContentMainRunnerImpl::Run()
#8 0x56252ece2f24 service_manager::Main()
#9 0x56252ecd7f14 content::ContentMain()
#10 0x562532de79b9 headless::(anonymous namespace)::RunContentMain()
#11 0x562532de7a42 headless::HeadlessBrowserMain()
#12 0x56252ecdff9d headless::HeadlessShellMain()
#13 0x56252d33e1ac ChromeMain
#14 0x7f9f8a1d02e1 __libc_start_main
#15 0x56252d33e02a _start

Received signal 6
#0 0x56252ef9db0c base::debug::StackTrace::StackTrace()
#1 0x56252ef9d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f9f9012d0c0 <unknown>
#3 0x7f9f8a1e2fff gsignal
#4 0x7f9f8a1e442a abort
#5 0x56252ef9c105 base::debug::BreakDebugger()
#6 0x56252efb6bca logging::LogMessage::~LogMessage()
#7 0x56252e0462b1 content::ZygoteHostImpl::Init()
#8 0x56252dcb8c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56252dcbea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x562532de89a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56252ecd8a00 content::RunNamedProcessTypeMain()
#12 0x56252ecd92e8 content::ContentMainRunnerImpl::Run()
#13 0x56252ece2f24 service_manager::Main()
#14 0x56252ecd7f14 content::ContentMain()
#15 0x562532de79b9 headless::(anonymous namespace)::RunContentMain()
#16 0x562532de7a42 headless::HeadlessBrowserMain()
#17 0x56252ecdff9d headless::HeadlessShellMain()
#18 0x56252d33e1ac ChromeMain
#19 0x7f9f8a1d02e1 __libc_start_main
#20 0x56252d33e02a _start
  r8: 0000000000000000  r9: 00007ffea8ddac60 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffea8ddb358 r13: 0000000000000161 r14: 00007ffea8ddb360 r15: 00007ffea8ddaef9
  di: 0000000000000002  si: 00007ffea8ddac60  bp: 00007ffea8ddaea0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9f8a1e2fff  sp: 00007ffea8ddacd8
  ip: 00007f9f8a1e2fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


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
[0510/020644.578001:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56010c6b0b0c base::debug::StackTrace::StackTrace()
#1 0x56010c6c9780 logging::LogMessage::~LogMessage()
#2 0x56010b7592b1 content::ZygoteHostImpl::Init()
#3 0x56010b3cbc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56010b3d1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5601104fb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56010c3eba00 content::RunNamedProcessTypeMain()
#7 0x56010c3ec2e8 content::ContentMainRunnerImpl::Run()
#8 0x56010c3f5f24 service_manager::Main()
#9 0x56010c3eaf14 content::ContentMain()
#10 0x5601104fa9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5601104faa42 headless::HeadlessBrowserMain()
#12 0x56010c3f2f9d headless::HeadlessShellMain()
#13 0x56010aa511ac ChromeMain
#14 0x7f1df82ec2e1 __libc_start_main
#15 0x56010aa5102a _start

Received signal 6
#0 0x56010c6b0b0c base::debug::StackTrace::StackTrace()
#1 0x56010c6b0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1dfe2490c0 <unknown>
#3 0x7f1df82fefff gsignal
#4 0x7f1df830042a abort
#5 0x56010c6af105 base::debug::BreakDebugger()
#6 0x56010c6c9bca logging::LogMessage::~LogMessage()
#7 0x56010b7592b1 content::ZygoteHostImpl::Init()
#8 0x56010b3cbc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56010b3d1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5601104fb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56010c3eba00 content::RunNamedProcessTypeMain()
#12 0x56010c3ec2e8 content::ContentMainRunnerImpl::Run()
#13 0x56010c3f5f24 service_manager::Main()
#14 0x56010c3eaf14 content::ContentMain()
#15 0x5601104fa9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5601104faa42 headless::HeadlessBrowserMain()
#17 0x56010c3f2f9d headless::HeadlessShellMain()
#18 0x56010aa511ac ChromeMain
#19 0x7f1df82ec2e1 __libc_start_main
#20 0x56010aa5102a _start
  r8: 0000000000000000  r9: 00007ffdf39e6950 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdf39e7048 r13: 0000000000000161 r14: 00007ffdf39e7050 r15: 00007ffdf39e6be9
  di: 0000000000000002  si: 00007ffdf39e6950  bp: 00007ffdf39e6b90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1df82fefff  sp: 00007ffdf39e69c8
  ip: 00007f1df82fefff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020644.578001:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56010c6b0b0c base::debug::StackTrace::StackTrace()
#1 0x56010c6c9780 logging::LogMessage::~LogMessage()
#2 0x56010b7592b1 content::ZygoteHostImpl::Init()
#3 0x56010b3cbc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56010b3d1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5601104fb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56010c3eba00 content::RunNamedProcessTypeMain()
#7 0x56010c3ec2e8 content::ContentMainRunnerImpl::Run()
#8 0x56010c3f5f24 service_manager::Main()
#9 0x56010c3eaf14 content::ContentMain()
#10 0x5601104fa9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5601104faa42 headless::HeadlessBrowserMain()
#12 0x56010c3f2f9d headless::HeadlessShellMain()
#13 0x56010aa511ac ChromeMain
#14 0x7f1df82ec2e1 __libc_start_main
#15 0x56010aa5102a _start

Received signal 6
#0 0x56010c6b0b0c base::debug::StackTrace::StackTrace()
#1 0x56010c6b0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1dfe2490c0 <unknown>
#3 0x7f1df82fefff gsignal
#4 0x7f1df830042a abort
#5 0x56010c6af105 base::debug::BreakDebugger()
#6 0x56010c6c9bca logging::LogMessage::~LogMessage()
#7 0x56010b7592b1 content::ZygoteHostImpl::Init()
#8 0x56010b3cbc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56010b3d1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5601104fb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56010c3eba00 content::RunNamedProcessTypeMain()
#12 0x56010c3ec2e8 content::ContentMainRunnerImpl::Run()
#13 0x56010c3f5f24 service_manager::Main()
#14 0x56010c3eaf14 content::ContentMain()
#15 0x5601104fa9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5601104faa42 headless::HeadlessBrowserMain()
#17 0x56010c3f2f9d headless::HeadlessShellMain()
#18 0x56010aa511ac ChromeMain
#19 0x7f1df82ec2e1 __libc_start_main
#20 0x56010aa5102a _start
  r8: 0000000000000000  r9: 00007ffdf39e6950 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdf39e7048 r13: 0000000000000161 r14: 00007ffdf39e7050 r15: 00007ffdf39e6be9
  di: 0000000000000002  si: 00007ffdf39e6950  bp: 00007ffdf39e6b90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1df82fefff  sp: 00007ffdf39e69c8
  ip: 00007f1df82fefff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020642.431100:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5575e53a7b0c base::debug::StackTrace::StackTrace()
#1 0x5575e53c0780 logging::LogMessage::~LogMessage()
#2 0x5575e44502b1 content::ZygoteHostImpl::Init()
#3 0x5575e40c2c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5575e40c8a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5575e91f29a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5575e50e2a00 content::RunNamedProcessTypeMain()
#7 0x5575e50e32e8 content::ContentMainRunnerImpl::Run()
#8 0x5575e50ecf24 service_manager::Main()
#9 0x5575e50e1f14 content::ContentMain()
#10 0x5575e91f19b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5575e91f1a42 headless::HeadlessBrowserMain()
#12 0x5575e50e9f9d headless::HeadlessShellMain()
#13 0x5575e37481ac ChromeMain
#14 0x7fc4ee5682e1 __libc_start_main
#15 0x5575e374802a _start

Received signal 6
#0 0x5575e53a7b0c base::debug::StackTrace::StackTrace()
#1 0x5575e53a7671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc4f44c50c0 <unknown>
#3 0x7fc4ee57afff gsignal
#4 0x7fc4ee57c42a abort
#5 0x5575e53a6105 base::debug::BreakDebugger()
#6 0x5575e53c0bca logging::LogMessage::~LogMessage()
#7 0x5575e44502b1 content::ZygoteHostImpl::Init()
#8 0x5575e40c2c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5575e40c8a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5575e91f29a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5575e50e2a00 content::RunNamedProcessTypeMain()
#12 0x5575e50e32e8 content::ContentMainRunnerImpl::Run()
#13 0x5575e50ecf24 service_manager::Main()
#14 0x5575e50e1f14 content::ContentMain()
#15 0x5575e91f19b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5575e91f1a42 headless::HeadlessBrowserMain()
#17 0x5575e50e9f9d headless::HeadlessShellMain()
#18 0x5575e37481ac ChromeMain
#19 0x7fc4ee5682e1 __libc_start_main
#20 0x5575e374802a _start
  r8: 0000000000000000  r9: 00007ffeec562480 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffeec562b78 r13: 0000000000000161 r14: 00007ffeec562b80 r15: 00007ffeec562719
  di: 0000000000000002  si: 00007ffeec562480  bp: 00007ffeec5626c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc4ee57afff  sp: 00007ffeec5624f8
  ip: 00007fc4ee57afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020642.431100:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5575e53a7b0c base::debug::StackTrace::StackTrace()
#1 0x5575e53c0780 logging::LogMessage::~LogMessage()
#2 0x5575e44502b1 content::ZygoteHostImpl::Init()
#3 0x5575e40c2c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5575e40c8a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5575e91f29a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5575e50e2a00 content::RunNamedProcessTypeMain()
#7 0x5575e50e32e8 content::ContentMainRunnerImpl::Run()
#8 0x5575e50ecf24 service_manager::Main()
#9 0x5575e50e1f14 content::ContentMain()
#10 0x5575e91f19b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5575e91f1a42 headless::HeadlessBrowserMain()
#12 0x5575e50e9f9d headless::HeadlessShellMain()
#13 0x5575e37481ac ChromeMain
#14 0x7fc4ee5682e1 __libc_start_main
#15 0x5575e374802a _start

Received signal 6
#0 0x5575e53a7b0c base::debug::StackTrace::StackTrace()
#1 0x5575e53a7671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc4f44c50c0 <unknown>
#3 0x7fc4ee57afff gsignal
#4 0x7fc4ee57c42a abort
#5 0x5575e53a6105 base::debug::BreakDebugger()
#6 0x5575e53c0bca logging::LogMessage::~LogMessage()
#7 0x5575e44502b1 content::ZygoteHostImpl::Init()
#8 0x5575e40c2c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5575e40c8a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5575e91f29a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5575e50e2a00 content::RunNamedProcessTypeMain()
#12 0x5575e50e32e8 content::ContentMainRunnerImpl::Run()
#13 0x5575e50ecf24 service_manager::Main()
#14 0x5575e50e1f14 content::ContentMain()
#15 0x5575e91f19b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5575e91f1a42 headless::HeadlessBrowserMain()
#17 0x5575e50e9f9d headless::HeadlessShellMain()
#18 0x5575e37481ac ChromeMain
#19 0x7fc4ee5682e1 __libc_start_main
#20 0x5575e374802a _start
  r8: 0000000000000000  r9: 00007ffeec562480 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffeec562b78 r13: 0000000000000161 r14: 00007ffeec562b80 r15: 00007ffeec562719
  di: 0000000000000002  si: 00007ffeec562480  bp: 00007ffeec5626c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc4ee57afff  sp: 00007ffeec5624f8
  ip: 00007fc4ee57afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020642.080687:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x555726deeb0c base::debug::StackTrace::StackTrace()
#1 0x555726e07780 logging::LogMessage::~LogMessage()
#2 0x555725e972b1 content::ZygoteHostImpl::Init()
#3 0x555725b09c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x555725b0fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55572ac399a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x555726b29a00 content::RunNamedProcessTypeMain()
#7 0x555726b2a2e8 content::ContentMainRunnerImpl::Run()
#8 0x555726b33f24 service_manager::Main()
#9 0x555726b28f14 content::ContentMain()
#10 0x55572ac389b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55572ac38a42 headless::HeadlessBrowserMain()
#12 0x555726b30f9d headless::HeadlessShellMain()
#13 0x55572518f1ac ChromeMain
#14 0x7f09222a72e1 __libc_start_main
#15 0x55572518f02a _start

Received signal 6
#0 0x555726deeb0c base::debug::StackTrace::StackTrace()
#1 0x555726dee671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f09282040c0 <unknown>
#3 0x7f09222b9fff gsignal
#4 0x7f09222bb42a abort
#5 0x555726ded105 base::debug::BreakDebugger()
#6 0x555726e07bca logging::LogMessage::~LogMessage()
#7 0x555725e972b1 content::ZygoteHostImpl::Init()
#8 0x555725b09c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x555725b0fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55572ac399a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x555726b29a00 content::RunNamedProcessTypeMain()
#12 0x555726b2a2e8 content::ContentMainRunnerImpl::Run()
#13 0x555726b33f24 service_manager::Main()
#14 0x555726b28f14 content::ContentMain()
#15 0x55572ac389b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55572ac38a42 headless::HeadlessBrowserMain()
#17 0x555726b30f9d headless::HeadlessShellMain()
#18 0x55572518f1ac ChromeMain
#19 0x7f09222a72e1 __libc_start_main
#20 0x55572518f02a _start
  r8: 0000000000000000  r9: 00007ffea2cf9d40 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffea2cfa438 r13: 0000000000000161 r14: 00007ffea2cfa440 r15: 00007ffea2cf9fd9
  di: 0000000000000002  si: 00007ffea2cf9d40  bp: 00007ffea2cf9f80  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f09222b9fff  sp: 00007ffea2cf9db8
  ip: 00007f09222b9fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020642.080687:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x555726deeb0c base::debug::StackTrace::StackTrace()
#1 0x555726e07780 logging::LogMessage::~LogMessage()
#2 0x555725e972b1 content::ZygoteHostImpl::Init()
#3 0x555725b09c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x555725b0fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55572ac399a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x555726b29a00 content::RunNamedProcessTypeMain()
#7 0x555726b2a2e8 content::ContentMainRunnerImpl::Run()
#8 0x555726b33f24 service_manager::Main()
#9 0x555726b28f14 content::ContentMain()
#10 0x55572ac389b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55572ac38a42 headless::HeadlessBrowserMain()
#12 0x555726b30f9d headless::HeadlessShellMain()
#13 0x55572518f1ac ChromeMain
#14 0x7f09222a72e1 __libc_start_main
#15 0x55572518f02a _start

Received signal 6
#0 0x555726deeb0c base::debug::StackTrace::StackTrace()
#1 0x555726dee671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f09282040c0 <unknown>
#3 0x7f09222b9fff gsignal
#4 0x7f09222bb42a abort
#5 0x555726ded105 base::debug::BreakDebugger()
#6 0x555726e07bca logging::LogMessage::~LogMessage()
#7 0x555725e972b1 content::ZygoteHostImpl::Init()
#8 0x555725b09c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x555725b0fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55572ac399a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x555726b29a00 content::RunNamedProcessTypeMain()
#12 0x555726b2a2e8 content::ContentMainRunnerImpl::Run()
#13 0x555726b33f24 service_manager::Main()
#14 0x555726b28f14 content::ContentMain()
#15 0x55572ac389b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55572ac38a42 headless::HeadlessBrowserMain()
#17 0x555726b30f9d headless::HeadlessShellMain()
#18 0x55572518f1ac ChromeMain
#19 0x7f09222a72e1 __libc_start_main
#20 0x55572518f02a _start
  r8: 0000000000000000  r9: 00007ffea2cf9d40 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffea2cfa438 r13: 0000000000000161 r14: 00007ffea2cfa440 r15: 00007ffea2cf9fd9
  di: 0000000000000002  si: 00007ffea2cf9d40  bp: 00007ffea2cf9f80  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f09222b9fff  sp: 00007ffea2cf9db8
  ip: 00007f09222b9fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020644.721670:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5625342d0b0c base::debug::StackTrace::StackTrace()
#1 0x5625342e9780 logging::LogMessage::~LogMessage()
#2 0x5625333792b1 content::ZygoteHostImpl::Init()
#3 0x562532febc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x562532ff1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56253811b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56253400ba00 content::RunNamedProcessTypeMain()
#7 0x56253400c2e8 content::ContentMainRunnerImpl::Run()
#8 0x562534015f24 service_manager::Main()
#9 0x56253400af14 content::ContentMain()
#10 0x56253811a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56253811aa42 headless::HeadlessBrowserMain()
#12 0x562534012f9d headless::HeadlessShellMain()
#13 0x5625326711ac ChromeMain
#14 0x7fcece6482e1 __libc_start_main
#15 0x56253267102a _start

Received signal 6
#0 0x5625342d0b0c base::debug::StackTrace::StackTrace()
#1 0x5625342d0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fced45a50c0 <unknown>
#3 0x7fcece65afff gsignal
#4 0x7fcece65c42a abort
#5 0x5625342cf105 base::debug::BreakDebugger()
#6 0x5625342e9bca logging::LogMessage::~LogMessage()
#7 0x5625333792b1 content::ZygoteHostImpl::Init()
#8 0x562532febc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x562532ff1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56253811b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56253400ba00 content::RunNamedProcessTypeMain()
#12 0x56253400c2e8 content::ContentMainRunnerImpl::Run()
#13 0x562534015f24 service_manager::Main()
#14 0x56253400af14 content::ContentMain()
#15 0x56253811a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56253811aa42 headless::HeadlessBrowserMain()
#17 0x562534012f9d headless::HeadlessShellMain()
#18 0x5625326711ac ChromeMain
#19 0x7fcece6482e1 __libc_start_main
#20 0x56253267102a _start
  r8: 0000000000000000  r9: 00007ffed6466ea0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffed6467598 r13: 0000000000000161 r14: 00007ffed64675a0 r15: 00007ffed6467139
  di: 0000000000000002  si: 00007ffed6466ea0  bp: 00007ffed64670e0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fcece65afff  sp: 00007ffed6466f18
  ip: 00007fcece65afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020644.721670:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5625342d0b0c base::debug::StackTrace::StackTrace()
#1 0x5625342e9780 logging::LogMessage::~LogMessage()
#2 0x5625333792b1 content::ZygoteHostImpl::Init()
#3 0x562532febc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x562532ff1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56253811b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56253400ba00 content::RunNamedProcessTypeMain()
#7 0x56253400c2e8 content::ContentMainRunnerImpl::Run()
#8 0x562534015f24 service_manager::Main()
#9 0x56253400af14 content::ContentMain()
#10 0x56253811a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56253811aa42 headless::HeadlessBrowserMain()
#12 0x562534012f9d headless::HeadlessShellMain()
#13 0x5625326711ac ChromeMain
#14 0x7fcece6482e1 __libc_start_main
#15 0x56253267102a _start

Received signal 6
#0 0x5625342d0b0c base::debug::StackTrace::StackTrace()
#1 0x5625342d0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fced45a50c0 <unknown>
#3 0x7fcece65afff gsignal
#4 0x7fcece65c42a abort
#5 0x5625342cf105 base::debug::BreakDebugger()
#6 0x5625342e9bca logging::LogMessage::~LogMessage()
#7 0x5625333792b1 content::ZygoteHostImpl::Init()
#8 0x562532febc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x562532ff1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56253811b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56253400ba00 content::RunNamedProcessTypeMain()
#12 0x56253400c2e8 content::ContentMainRunnerImpl::Run()
#13 0x562534015f24 service_manager::Main()
#14 0x56253400af14 content::ContentMain()
#15 0x56253811a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56253811aa42 headless::HeadlessBrowserMain()
#17 0x562534012f9d headless::HeadlessShellMain()
#18 0x5625326711ac ChromeMain
#19 0x7fcece6482e1 __libc_start_main
#20 0x56253267102a _start
  r8: 0000000000000000  r9: 00007ffed6466ea0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffed6467598 r13: 0000000000000161 r14: 00007ffed64675a0 r15: 00007ffed6467139
  di: 0000000000000002  si: 00007ffed6466ea0  bp: 00007ffed64670e0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fcece65afff  sp: 00007ffed6466f18
  ip: 00007fcece65afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020643.582355:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d3d617db0c base::debug::StackTrace::StackTrace()
#1 0x55d3d6196780 logging::LogMessage::~LogMessage()
#2 0x55d3d52262b1 content::ZygoteHostImpl::Init()
#3 0x55d3d4e98c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d3d4e9ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d3d9fc89a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d3d5eb8a00 content::RunNamedProcessTypeMain()
#7 0x55d3d5eb92e8 content::ContentMainRunnerImpl::Run()
#8 0x55d3d5ec2f24 service_manager::Main()
#9 0x55d3d5eb7f14 content::ContentMain()
#10 0x55d3d9fc79b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d3d9fc7a42 headless::HeadlessBrowserMain()
#12 0x55d3d5ebff9d headless::HeadlessShellMain()
#13 0x55d3d451e1ac ChromeMain
#14 0x7f30d10952e1 __libc_start_main
#15 0x55d3d451e02a _start

Received signal 6
#0 0x55d3d617db0c base::debug::StackTrace::StackTrace()
#1 0x55d3d617d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f30d6ff20c0 <unknown>
#3 0x7f30d10a7fff gsignal
#4 0x7f30d10a942a abort
#5 0x55d3d617c105 base::debug::BreakDebugger()
#6 0x55d3d6196bca logging::LogMessage::~LogMessage()
#7 0x55d3d52262b1 content::ZygoteHostImpl::Init()
#8 0x55d3d4e98c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d3d4e9ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d3d9fc89a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d3d5eb8a00 content::RunNamedProcessTypeMain()
#12 0x55d3d5eb92e8 content::ContentMainRunnerImpl::Run()
#13 0x55d3d5ec2f24 service_manager::Main()
#14 0x55d3d5eb7f14 content::ContentMain()
#15 0x55d3d9fc79b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d3d9fc7a42 headless::HeadlessBrowserMain()
#17 0x55d3d5ebff9d headless::HeadlessShellMain()
#18 0x55d3d451e1ac ChromeMain
#19 0x7f30d10952e1 __libc_start_main
#20 0x55d3d451e02a _start
  r8: 0000000000000000  r9: 00007ffd6ee7ad10 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd6ee7b408 r13: 0000000000000161 r14: 00007ffd6ee7b410 r15: 00007ffd6ee7afa9
  di: 0000000000000002  si: 00007ffd6ee7ad10  bp: 00007ffd6ee7af50  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f30d10a7fff  sp: 00007ffd6ee7ad88
  ip: 00007f30d10a7fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020643.582355:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d3d617db0c base::debug::StackTrace::StackTrace()
#1 0x55d3d6196780 logging::LogMessage::~LogMessage()
#2 0x55d3d52262b1 content::ZygoteHostImpl::Init()
#3 0x55d3d4e98c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d3d4e9ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d3d9fc89a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d3d5eb8a00 content::RunNamedProcessTypeMain()
#7 0x55d3d5eb92e8 content::ContentMainRunnerImpl::Run()
#8 0x55d3d5ec2f24 service_manager::Main()
#9 0x55d3d5eb7f14 content::ContentMain()
#10 0x55d3d9fc79b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d3d9fc7a42 headless::HeadlessBrowserMain()
#12 0x55d3d5ebff9d headless::HeadlessShellMain()
#13 0x55d3d451e1ac ChromeMain
#14 0x7f30d10952e1 __libc_start_main
#15 0x55d3d451e02a _start

Received signal 6
#0 0x55d3d617db0c base::debug::StackTrace::StackTrace()
#1 0x55d3d617d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f30d6ff20c0 <unknown>
#3 0x7f30d10a7fff gsignal
#4 0x7f30d10a942a abort
#5 0x55d3d617c105 base::debug::BreakDebugger()
#6 0x55d3d6196bca logging::LogMessage::~LogMessage()
#7 0x55d3d52262b1 content::ZygoteHostImpl::Init()
#8 0x55d3d4e98c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d3d4e9ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d3d9fc89a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d3d5eb8a00 content::RunNamedProcessTypeMain()
#12 0x55d3d5eb92e8 content::ContentMainRunnerImpl::Run()
#13 0x55d3d5ec2f24 service_manager::Main()
#14 0x55d3d5eb7f14 content::ContentMain()
#15 0x55d3d9fc79b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d3d9fc7a42 headless::HeadlessBrowserMain()
#17 0x55d3d5ebff9d headless::HeadlessShellMain()
#18 0x55d3d451e1ac ChromeMain
#19 0x7f30d10952e1 __libc_start_main
#20 0x55d3d451e02a _start
  r8: 0000000000000000  r9: 00007ffd6ee7ad10 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd6ee7b408 r13: 0000000000000161 r14: 00007ffd6ee7b410 r15: 00007ffd6ee7afa9
  di: 0000000000000002  si: 00007ffd6ee7ad10  bp: 00007ffd6ee7af50  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f30d10a7fff  sp: 00007ffd6ee7ad88
  ip: 00007f30d10a7fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020655.768124:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5643a89a7b0c base::debug::StackTrace::StackTrace()
#1 0x5643a89c0780 logging::LogMessage::~LogMessage()
#2 0x5643a7a502b1 content::ZygoteHostImpl::Init()
#3 0x5643a76c2c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5643a76c8a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5643ac7f29a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5643a86e2a00 content::RunNamedProcessTypeMain()
#7 0x5643a86e32e8 content::ContentMainRunnerImpl::Run()
#8 0x5643a86ecf24 service_manager::Main()
#9 0x5643a86e1f14 content::ContentMain()
#10 0x5643ac7f19b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5643ac7f1a42 headless::HeadlessBrowserMain()
#12 0x5643a86e9f9d headless::HeadlessShellMain()
#13 0x5643a6d481ac ChromeMain
#14 0x7f0cff7932e1 __libc_start_main
#15 0x5643a6d4802a _start

Received signal 6
#0 0x5643a89a7b0c base::debug::StackTrace::StackTrace()
#1 0x5643a89a7671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f0d056f00c0 <unknown>
#3 0x7f0cff7a5fff gsignal
#4 0x7f0cff7a742a abort
#5 0x5643a89a6105 base::debug::BreakDebugger()
#6 0x5643a89c0bca logging::LogMessage::~LogMessage()
#7 0x5643a7a502b1 content::ZygoteHostImpl::Init()
#8 0x5643a76c2c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5643a76c8a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5643ac7f29a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5643a86e2a00 content::RunNamedProcessTypeMain()
#12 0x5643a86e32e8 content::ContentMainRunnerImpl::Run()
#13 0x5643a86ecf24 service_manager::Main()
#14 0x5643a86e1f14 content::ContentMain()
#15 0x5643ac7f19b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5643ac7f1a42 headless::HeadlessBrowserMain()
#17 0x5643a86e9f9d headless::HeadlessShellMain()
#18 0x5643a6d481ac ChromeMain
#19 0x7f0cff7932e1 __libc_start_main
#20 0x5643a6d4802a _start
  r8: 0000000000000000  r9: 00007ffc37affaa0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc37b00198 r13: 0000000000000161 r14: 00007ffc37b001a0 r15: 00007ffc37affd39
  di: 0000000000000002  si: 00007ffc37affaa0  bp: 00007ffc37affce0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f0cff7a5fff  sp: 00007ffc37affb18
  ip: 00007f0cff7a5fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020655.768124:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5643a89a7b0c base::debug::StackTrace::StackTrace()
#1 0x5643a89c0780 logging::LogMessage::~LogMessage()
#2 0x5643a7a502b1 content::ZygoteHostImpl::Init()
#3 0x5643a76c2c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5643a76c8a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5643ac7f29a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5643a86e2a00 content::RunNamedProcessTypeMain()
#7 0x5643a86e32e8 content::ContentMainRunnerImpl::Run()
#8 0x5643a86ecf24 service_manager::Main()
#9 0x5643a86e1f14 content::ContentMain()
#10 0x5643ac7f19b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5643ac7f1a42 headless::HeadlessBrowserMain()
#12 0x5643a86e9f9d headless::HeadlessShellMain()
#13 0x5643a6d481ac ChromeMain
#14 0x7f0cff7932e1 __libc_start_main
#15 0x5643a6d4802a _start

Received signal 6
#0 0x5643a89a7b0c base::debug::StackTrace::StackTrace()
#1 0x5643a89a7671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f0d056f00c0 <unknown>
#3 0x7f0cff7a5fff gsignal
#4 0x7f0cff7a742a abort
#5 0x5643a89a6105 base::debug::BreakDebugger()
#6 0x5643a89c0bca logging::LogMessage::~LogMessage()
#7 0x5643a7a502b1 content::ZygoteHostImpl::Init()
#8 0x5643a76c2c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5643a76c8a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5643ac7f29a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5643a86e2a00 content::RunNamedProcessTypeMain()
#12 0x5643a86e32e8 content::ContentMainRunnerImpl::Run()
#13 0x5643a86ecf24 service_manager::Main()
#14 0x5643a86e1f14 content::ContentMain()
#15 0x5643ac7f19b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5643ac7f1a42 headless::HeadlessBrowserMain()
#17 0x5643a86e9f9d headless::HeadlessShellMain()
#18 0x5643a6d481ac ChromeMain
#19 0x7f0cff7932e1 __libc_start_main
#20 0x5643a6d4802a _start
  r8: 0000000000000000  r9: 00007ffc37affaa0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc37b00198 r13: 0000000000000161 r14: 00007ffc37b001a0 r15: 00007ffc37affd39
  di: 0000000000000002  si: 00007ffc37affaa0  bp: 00007ffc37affce0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f0cff7a5fff  sp: 00007ffc37affb18
  ip: 00007f0cff7a5fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020655.234625:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x557bd8337b0c base::debug::StackTrace::StackTrace()
#1 0x557bd8350780 logging::LogMessage::~LogMessage()
#2 0x557bd73e02b1 content::ZygoteHostImpl::Init()
#3 0x557bd7052c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557bd7058a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557bdc1829a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557bd8072a00 content::RunNamedProcessTypeMain()
#7 0x557bd80732e8 content::ContentMainRunnerImpl::Run()
#8 0x557bd807cf24 service_manager::Main()
#9 0x557bd8071f14 content::ContentMain()
#10 0x557bdc1819b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557bdc181a42 headless::HeadlessBrowserMain()
#12 0x557bd8079f9d headless::HeadlessShellMain()
#13 0x557bd66d81ac ChromeMain
#14 0x7f12d8c362e1 __libc_start_main
#15 0x557bd66d802a _start

Received signal 6
#0 0x557bd8337b0c base::debug::StackTrace::StackTrace()
#1 0x557bd8337671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f12deb930c0 <unknown>
#3 0x7f12d8c48fff gsignal
#4 0x7f12d8c4a42a abort
#5 0x557bd8336105 base::debug::BreakDebugger()
#6 0x557bd8350bca logging::LogMessage::~LogMessage()
#7 0x557bd73e02b1 content::ZygoteHostImpl::Init()
#8 0x557bd7052c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557bd7058a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557bdc1829a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557bd8072a00 content::RunNamedProcessTypeMain()
#12 0x557bd80732e8 content::ContentMainRunnerImpl::Run()
#13 0x557bd807cf24 service_manager::Main()
#14 0x557bd8071f14 content::ContentMain()
#15 0x557bdc1819b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557bdc181a42 headless::HeadlessBrowserMain()
#17 0x557bd8079f9d headless::HeadlessShellMain()
#18 0x557bd66d81ac ChromeMain
#19 0x7f12d8c362e1 __libc_start_main
#20 0x557bd66d802a _start
  r8: 0000000000000000  r9: 00007ffea90013a0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffea9001a98 r13: 0000000000000161 r14: 00007ffea9001aa0 r15: 00007ffea9001639
  di: 0000000000000002  si: 00007ffea90013a0  bp: 00007ffea90015e0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f12d8c48fff  sp: 00007ffea9001418
  ip: 00007f12d8c48fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020655.234625:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x557bd8337b0c base::debug::StackTrace::StackTrace()
#1 0x557bd8350780 logging::LogMessage::~LogMessage()
#2 0x557bd73e02b1 content::ZygoteHostImpl::Init()
#3 0x557bd7052c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557bd7058a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557bdc1829a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557bd8072a00 content::RunNamedProcessTypeMain()
#7 0x557bd80732e8 content::ContentMainRunnerImpl::Run()
#8 0x557bd807cf24 service_manager::Main()
#9 0x557bd8071f14 content::ContentMain()
#10 0x557bdc1819b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557bdc181a42 headless::HeadlessBrowserMain()
#12 0x557bd8079f9d headless::HeadlessShellMain()
#13 0x557bd66d81ac ChromeMain
#14 0x7f12d8c362e1 __libc_start_main
#15 0x557bd66d802a _start

Received signal 6
#0 0x557bd8337b0c base::debug::StackTrace::StackTrace()
#1 0x557bd8337671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f12deb930c0 <unknown>
#3 0x7f12d8c48fff gsignal
#4 0x7f12d8c4a42a abort
#5 0x557bd8336105 base::debug::BreakDebugger()
#6 0x557bd8350bca logging::LogMessage::~LogMessage()
#7 0x557bd73e02b1 content::ZygoteHostImpl::Init()
#8 0x557bd7052c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557bd7058a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557bdc1829a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557bd8072a00 content::RunNamedProcessTypeMain()
#12 0x557bd80732e8 content::ContentMainRunnerImpl::Run()
#13 0x557bd807cf24 service_manager::Main()
#14 0x557bd8071f14 content::ContentMain()
#15 0x557bdc1819b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557bdc181a42 headless::HeadlessBrowserMain()
#17 0x557bd8079f9d headless::HeadlessShellMain()
#18 0x557bd66d81ac ChromeMain
#19 0x7f12d8c362e1 __libc_start_main
#20 0x557bd66d802a _start
  r8: 0000000000000000  r9: 00007ffea90013a0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffea9001a98 r13: 0000000000000161 r14: 00007ffea9001aa0 r15: 00007ffea9001639
  di: 0000000000000002  si: 00007ffea90013a0  bp: 00007ffea90015e0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f12d8c48fff  sp: 00007ffea9001418
  ip: 00007f12d8c48fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020537.350704:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55c03cb28b0c base::debug::StackTrace::StackTrace()
#1 0x55c03cb41780 logging::LogMessage::~LogMessage()
#2 0x55c03bbd12b1 content::ZygoteHostImpl::Init()
#3 0x55c03b843c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55c03b849a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55c0409739a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55c03c863a00 content::RunNamedProcessTypeMain()
#7 0x55c03c8642e8 content::ContentMainRunnerImpl::Run()
#8 0x55c03c86df24 service_manager::Main()
#9 0x55c03c862f14 content::ContentMain()
#10 0x55c0409729b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55c040972a42 headless::HeadlessBrowserMain()
#12 0x55c03c86af9d headless::HeadlessShellMain()
#13 0x55c03aec91ac ChromeMain
#14 0x7f2bfb8102e1 __libc_start_main
#15 0x55c03aec902a _start

Received signal 6
#0 0x55c03cb28b0c base::debug::StackTrace::StackTrace()
#1 0x55c03cb28671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2c0176d0c0 <unknown>
#3 0x7f2bfb822fff gsignal
#4 0x7f2bfb82442a abort
#5 0x55c03cb27105 base::debug::BreakDebugger()
#6 0x55c03cb41bca logging::LogMessage::~LogMessage()
#7 0x55c03bbd12b1 content::ZygoteHostImpl::Init()
#8 0x55c03b843c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55c03b849a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55c0409739a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55c03c863a00 content::RunNamedProcessTypeMain()
#12 0x55c03c8642e8 content::ContentMainRunnerImpl::Run()
#13 0x55c03c86df24 service_manager::Main()
#14 0x55c03c862f14 content::ContentMain()
#15 0x55c0409729b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55c040972a42 headless::HeadlessBrowserMain()
#17 0x55c03c86af9d headless::HeadlessShellMain()
#18 0x55c03aec91ac ChromeMain
#19 0x7f2bfb8102e1 __libc_start_main
#20 0x55c03aec902a _start
  r8: 0000000000000000  r9: 00007fffc3e36260 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffc3e36958 r13: 0000000000000161 r14: 00007fffc3e36960 r15: 00007fffc3e364f9
  di: 0000000000000002  si: 00007fffc3e36260  bp: 00007fffc3e364a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2bfb822fff  sp: 00007fffc3e362d8
  ip: 00007f2bfb822fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020537.350704:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55c03cb28b0c base::debug::StackTrace::StackTrace()
#1 0x55c03cb41780 logging::LogMessage::~LogMessage()
#2 0x55c03bbd12b1 content::ZygoteHostImpl::Init()
#3 0x55c03b843c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55c03b849a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55c0409739a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55c03c863a00 content::RunNamedProcessTypeMain()
#7 0x55c03c8642e8 content::ContentMainRunnerImpl::Run()
#8 0x55c03c86df24 service_manager::Main()
#9 0x55c03c862f14 content::ContentMain()
#10 0x55c0409729b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55c040972a42 headless::HeadlessBrowserMain()
#12 0x55c03c86af9d headless::HeadlessShellMain()
#13 0x55c03aec91ac ChromeMain
#14 0x7f2bfb8102e1 __libc_start_main
#15 0x55c03aec902a _start

Received signal 6
#0 0x55c03cb28b0c base::debug::StackTrace::StackTrace()
#1 0x55c03cb28671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2c0176d0c0 <unknown>
#3 0x7f2bfb822fff gsignal
#4 0x7f2bfb82442a abort
#5 0x55c03cb27105 base::debug::BreakDebugger()
#6 0x55c03cb41bca logging::LogMessage::~LogMessage()
#7 0x55c03bbd12b1 content::ZygoteHostImpl::Init()
#8 0x55c03b843c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55c03b849a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55c0409739a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55c03c863a00 content::RunNamedProcessTypeMain()
#12 0x55c03c8642e8 content::ContentMainRunnerImpl::Run()
#13 0x55c03c86df24 service_manager::Main()
#14 0x55c03c862f14 content::ContentMain()
#15 0x55c0409729b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55c040972a42 headless::HeadlessBrowserMain()
#17 0x55c03c86af9d headless::HeadlessShellMain()
#18 0x55c03aec91ac ChromeMain
#19 0x7f2bfb8102e1 __libc_start_main
#20 0x55c03aec902a _start
  r8: 0000000000000000  r9: 00007fffc3e36260 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffc3e36958 r13: 0000000000000161 r14: 00007fffc3e36960 r15: 00007fffc3e364f9
  di: 0000000000000002  si: 00007fffc3e36260  bp: 00007fffc3e364a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2bfb822fff  sp: 00007fffc3e362d8
  ip: 00007f2bfb822fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020656.592824:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x559d941b0b0c base::debug::StackTrace::StackTrace()
#1 0x559d941c9780 logging::LogMessage::~LogMessage()
#2 0x559d932592b1 content::ZygoteHostImpl::Init()
#3 0x559d92ecbc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x559d92ed1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x559d97ffb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x559d93eeba00 content::RunNamedProcessTypeMain()
#7 0x559d93eec2e8 content::ContentMainRunnerImpl::Run()
#8 0x559d93ef5f24 service_manager::Main()
#9 0x559d93eeaf14 content::ContentMain()
#10 0x559d97ffa9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x559d97ffaa42 headless::HeadlessBrowserMain()
#12 0x559d93ef2f9d headless::HeadlessShellMain()
#13 0x559d925511ac ChromeMain
#14 0x7fde35ceb2e1 __libc_start_main
#15 0x559d9255102a _start

Received signal 6
#0 0x559d941b0b0c base::debug::StackTrace::StackTrace()
#1 0x559d941b0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fde3bc480c0 <unknown>
#3 0x7fde35cfdfff gsignal
#4 0x7fde35cff42a abort
#5 0x559d941af105 base::debug::BreakDebugger()
#6 0x559d941c9bca logging::LogMessage::~LogMessage()
#7 0x559d932592b1 content::ZygoteHostImpl::Init()
#8 0x559d92ecbc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x559d92ed1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x559d97ffb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x559d93eeba00 content::RunNamedProcessTypeMain()
#12 0x559d93eec2e8 content::ContentMainRunnerImpl::Run()
#13 0x559d93ef5f24 service_manager::Main()
#14 0x559d93eeaf14 content::ContentMain()
#15 0x559d97ffa9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x559d97ffaa42 headless::HeadlessBrowserMain()
#17 0x559d93ef2f9d headless::HeadlessShellMain()
#18 0x559d925511ac ChromeMain
#19 0x7fde35ceb2e1 __libc_start_main
#20 0x559d9255102a _start
  r8: 0000000000000000  r9: 00007ffd2474caa0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd2474d198 r13: 0000000000000161 r14: 00007ffd2474d1a0 r15: 00007ffd2474cd39
  di: 0000000000000002  si: 00007ffd2474caa0  bp: 00007ffd2474cce0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fde35cfdfff  sp: 00007ffd2474cb18
  ip: 00007fde35cfdfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020656.592824:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x559d941b0b0c base::debug::StackTrace::StackTrace()
#1 0x559d941c9780 logging::LogMessage::~LogMessage()
#2 0x559d932592b1 content::ZygoteHostImpl::Init()
#3 0x559d92ecbc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x559d92ed1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x559d97ffb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x559d93eeba00 content::RunNamedProcessTypeMain()
#7 0x559d93eec2e8 content::ContentMainRunnerImpl::Run()
#8 0x559d93ef5f24 service_manager::Main()
#9 0x559d93eeaf14 content::ContentMain()
#10 0x559d97ffa9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x559d97ffaa42 headless::HeadlessBrowserMain()
#12 0x559d93ef2f9d headless::HeadlessShellMain()
#13 0x559d925511ac ChromeMain
#14 0x7fde35ceb2e1 __libc_start_main
#15 0x559d9255102a _start

Received signal 6
#0 0x559d941b0b0c base::debug::StackTrace::StackTrace()
#1 0x559d941b0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fde3bc480c0 <unknown>
#3 0x7fde35cfdfff gsignal
#4 0x7fde35cff42a abort
#5 0x559d941af105 base::debug::BreakDebugger()
#6 0x559d941c9bca logging::LogMessage::~LogMessage()
#7 0x559d932592b1 content::ZygoteHostImpl::Init()
#8 0x559d92ecbc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x559d92ed1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x559d97ffb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x559d93eeba00 content::RunNamedProcessTypeMain()
#12 0x559d93eec2e8 content::ContentMainRunnerImpl::Run()
#13 0x559d93ef5f24 service_manager::Main()
#14 0x559d93eeaf14 content::ContentMain()
#15 0x559d97ffa9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x559d97ffaa42 headless::HeadlessBrowserMain()
#17 0x559d93ef2f9d headless::HeadlessShellMain()
#18 0x559d925511ac ChromeMain
#19 0x7fde35ceb2e1 __libc_start_main
#20 0x559d9255102a _start
  r8: 0000000000000000  r9: 00007ffd2474caa0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd2474d198 r13: 0000000000000161 r14: 00007ffd2474d1a0 r15: 00007ffd2474cd39
  di: 0000000000000002  si: 00007ffd2474caa0  bp: 00007ffd2474cce0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fde35cfdfff  sp: 00007ffd2474cb18
  ip: 00007fde35cfdfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- Crawled version: [Editor's Draft](https://webassembly.github.io/spec/js-api/) (9 May 2018)
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

- Crawled version: [Initial URL](https://www.khronos.org/registry/webgl/specs/latest/2.0/) (Thu May 10 2018)
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

- Crawled version: [Initial URL](https://www.khronos.org/registry/webgl/specs/latest/1.0/) (Thu May 10 2018)
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
[0510/020719.028281:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556fb92c6b0c base::debug::StackTrace::StackTrace()
#1 0x556fb92df780 logging::LogMessage::~LogMessage()
#2 0x556fb836f2b1 content::ZygoteHostImpl::Init()
#3 0x556fb7fe1c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556fb7fe7a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556fbd1119a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556fb9001a00 content::RunNamedProcessTypeMain()
#7 0x556fb90022e8 content::ContentMainRunnerImpl::Run()
#8 0x556fb900bf24 service_manager::Main()
#9 0x556fb9000f14 content::ContentMain()
#10 0x556fbd1109b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556fbd110a42 headless::HeadlessBrowserMain()
#12 0x556fb9008f9d headless::HeadlessShellMain()
#13 0x556fb76671ac ChromeMain
#14 0x7f92d6acc2e1 __libc_start_main
#15 0x556fb766702a _start

Received signal 6
#0 0x556fb92c6b0c base::debug::StackTrace::StackTrace()
#1 0x556fb92c6671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f92dca290c0 <unknown>
#3 0x7f92d6adefff gsignal
#4 0x7f92d6ae042a abort
#5 0x556fb92c5105 base::debug::BreakDebugger()
#6 0x556fb92dfbca logging::LogMessage::~LogMessage()
#7 0x556fb836f2b1 content::ZygoteHostImpl::Init()
#8 0x556fb7fe1c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556fb7fe7a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556fbd1119a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556fb9001a00 content::RunNamedProcessTypeMain()
#12 0x556fb90022e8 content::ContentMainRunnerImpl::Run()
#13 0x556fb900bf24 service_manager::Main()
#14 0x556fb9000f14 content::ContentMain()
#15 0x556fbd1109b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556fbd110a42 headless::HeadlessBrowserMain()
#17 0x556fb9008f9d headless::HeadlessShellMain()
#18 0x556fb76671ac ChromeMain
#19 0x7f92d6acc2e1 __libc_start_main
#20 0x556fb766702a _start
  r8: 0000000000000000  r9: 00007ffe8b7c5e50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe8b7c6548 r13: 0000000000000161 r14: 00007ffe8b7c6550 r15: 00007ffe8b7c60e9
  di: 0000000000000002  si: 00007ffe8b7c5e50  bp: 00007ffe8b7c6090  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f92d6adefff  sp: 00007ffe8b7c5ec8
  ip: 00007f92d6adefff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020719.028281:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556fb92c6b0c base::debug::StackTrace::StackTrace()
#1 0x556fb92df780 logging::LogMessage::~LogMessage()
#2 0x556fb836f2b1 content::ZygoteHostImpl::Init()
#3 0x556fb7fe1c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556fb7fe7a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556fbd1119a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556fb9001a00 content::RunNamedProcessTypeMain()
#7 0x556fb90022e8 content::ContentMainRunnerImpl::Run()
#8 0x556fb900bf24 service_manager::Main()
#9 0x556fb9000f14 content::ContentMain()
#10 0x556fbd1109b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556fbd110a42 headless::HeadlessBrowserMain()
#12 0x556fb9008f9d headless::HeadlessShellMain()
#13 0x556fb76671ac ChromeMain
#14 0x7f92d6acc2e1 __libc_start_main
#15 0x556fb766702a _start

Received signal 6
#0 0x556fb92c6b0c base::debug::StackTrace::StackTrace()
#1 0x556fb92c6671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f92dca290c0 <unknown>
#3 0x7f92d6adefff gsignal
#4 0x7f92d6ae042a abort
#5 0x556fb92c5105 base::debug::BreakDebugger()
#6 0x556fb92dfbca logging::LogMessage::~LogMessage()
#7 0x556fb836f2b1 content::ZygoteHostImpl::Init()
#8 0x556fb7fe1c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556fb7fe7a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556fbd1119a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556fb9001a00 content::RunNamedProcessTypeMain()
#12 0x556fb90022e8 content::ContentMainRunnerImpl::Run()
#13 0x556fb900bf24 service_manager::Main()
#14 0x556fb9000f14 content::ContentMain()
#15 0x556fbd1109b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556fbd110a42 headless::HeadlessBrowserMain()
#17 0x556fb9008f9d headless::HeadlessShellMain()
#18 0x556fb76671ac ChromeMain
#19 0x7f92d6acc2e1 __libc_start_main
#20 0x556fb766702a _start
  r8: 0000000000000000  r9: 00007ffe8b7c5e50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe8b7c6548 r13: 0000000000000161 r14: 00007ffe8b7c6550 r15: 00007ffe8b7c60e9
  di: 0000000000000002  si: 00007ffe8b7c5e50  bp: 00007ffe8b7c6090  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f92d6adefff  sp: 00007ffe8b7c5ec8
  ip: 00007f92d6adefff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-webvtt1-20170808/)
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




