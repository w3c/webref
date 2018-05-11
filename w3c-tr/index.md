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
[0511/020500.552147:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f995cfbb0c base::debug::StackTrace::StackTrace()
#1 0x55f995d14780 logging::LogMessage::~LogMessage()
#2 0x55f994da42b1 content::ZygoteHostImpl::Init()
#3 0x55f994a16c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f994a1ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f999b469a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f995a36a00 content::RunNamedProcessTypeMain()
#7 0x55f995a372e8 content::ContentMainRunnerImpl::Run()
#8 0x55f995a40f24 service_manager::Main()
#9 0x55f995a35f14 content::ContentMain()
#10 0x55f999b459b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f999b45a42 headless::HeadlessBrowserMain()
#12 0x55f995a3df9d headless::HeadlessShellMain()
#13 0x55f99409c1ac ChromeMain
#14 0x7f0b4187c2e1 __libc_start_main
#15 0x55f99409c02a _start

Received signal 6
#0 0x55f995cfbb0c base::debug::StackTrace::StackTrace()
#1 0x55f995cfb671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f0b477d90c0 <unknown>
#3 0x7f0b4188efff gsignal
#4 0x7f0b4189042a abort
#5 0x55f995cfa105 base::debug::BreakDebugger()
#6 0x55f995d14bca logging::LogMessage::~LogMessage()
#7 0x55f994da42b1 content::ZygoteHostImpl::Init()
#8 0x55f994a16c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f994a1ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f999b469a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f995a36a00 content::RunNamedProcessTypeMain()
#12 0x55f995a372e8 content::ContentMainRunnerImpl::Run()
#13 0x55f995a40f24 service_manager::Main()
#14 0x55f995a35f14 content::ContentMain()
#15 0x55f999b459b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f999b45a42 headless::HeadlessBrowserMain()
#17 0x55f995a3df9d headless::HeadlessShellMain()
#18 0x55f99409c1ac ChromeMain
#19 0x7f0b4187c2e1 __libc_start_main
#20 0x55f99409c02a _start
  r8: 0000000000000000  r9: 00007fff27cd3360 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff27cd3a58 r13: 0000000000000161 r14: 00007fff27cd3a60 r15: 00007fff27cd35f9
  di: 0000000000000002  si: 00007fff27cd3360  bp: 00007fff27cd35a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f0b4188efff  sp: 00007fff27cd33d8
  ip: 00007f0b4188efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020500.552147:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f995cfbb0c base::debug::StackTrace::StackTrace()
#1 0x55f995d14780 logging::LogMessage::~LogMessage()
#2 0x55f994da42b1 content::ZygoteHostImpl::Init()
#3 0x55f994a16c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f994a1ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f999b469a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f995a36a00 content::RunNamedProcessTypeMain()
#7 0x55f995a372e8 content::ContentMainRunnerImpl::Run()
#8 0x55f995a40f24 service_manager::Main()
#9 0x55f995a35f14 content::ContentMain()
#10 0x55f999b459b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f999b45a42 headless::HeadlessBrowserMain()
#12 0x55f995a3df9d headless::HeadlessShellMain()
#13 0x55f99409c1ac ChromeMain
#14 0x7f0b4187c2e1 __libc_start_main
#15 0x55f99409c02a _start

Received signal 6
#0 0x55f995cfbb0c base::debug::StackTrace::StackTrace()
#1 0x55f995cfb671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f0b477d90c0 <unknown>
#3 0x7f0b4188efff gsignal
#4 0x7f0b4189042a abort
#5 0x55f995cfa105 base::debug::BreakDebugger()
#6 0x55f995d14bca logging::LogMessage::~LogMessage()
#7 0x55f994da42b1 content::ZygoteHostImpl::Init()
#8 0x55f994a16c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f994a1ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f999b469a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f995a36a00 content::RunNamedProcessTypeMain()
#12 0x55f995a372e8 content::ContentMainRunnerImpl::Run()
#13 0x55f995a40f24 service_manager::Main()
#14 0x55f995a35f14 content::ContentMain()
#15 0x55f999b459b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f999b45a42 headless::HeadlessBrowserMain()
#17 0x55f995a3df9d headless::HeadlessShellMain()
#18 0x55f99409c1ac ChromeMain
#19 0x7f0b4187c2e1 __libc_start_main
#20 0x55f99409c02a _start
  r8: 0000000000000000  r9: 00007fff27cd3360 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff27cd3a58 r13: 0000000000000161 r14: 00007fff27cd3a60 r15: 00007fff27cd35f9
  di: 0000000000000002  si: 00007fff27cd3360  bp: 00007fff27cd35a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f0b4188efff  sp: 00007fff27cd33d8
  ip: 00007f0b4188efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020500.585171:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55c4e1a3ab0c base::debug::StackTrace::StackTrace()
#1 0x55c4e1a53780 logging::LogMessage::~LogMessage()
#2 0x55c4e0ae32b1 content::ZygoteHostImpl::Init()
#3 0x55c4e0755c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55c4e075ba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55c4e58859a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55c4e1775a00 content::RunNamedProcessTypeMain()
#7 0x55c4e17762e8 content::ContentMainRunnerImpl::Run()
#8 0x55c4e177ff24 service_manager::Main()
#9 0x55c4e1774f14 content::ContentMain()
#10 0x55c4e58849b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55c4e5884a42 headless::HeadlessBrowserMain()
#12 0x55c4e177cf9d headless::HeadlessShellMain()
#13 0x55c4dfddb1ac ChromeMain
#14 0x7f4815fc92e1 __libc_start_main
#15 0x55c4dfddb02a _start

Received signal 6
#0 0x55c4e1a3ab0c base::debug::StackTrace::StackTrace()
#1 0x55c4e1a3a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f481bf260c0 <unknown>
#3 0x7f4815fdbfff gsignal
#4 0x7f4815fdd42a abort
#5 0x55c4e1a39105 base::debug::BreakDebugger()
#6 0x55c4e1a53bca logging::LogMessage::~LogMessage()
#7 0x55c4e0ae32b1 content::ZygoteHostImpl::Init()
#8 0x55c4e0755c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55c4e075ba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55c4e58859a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55c4e1775a00 content::RunNamedProcessTypeMain()
#12 0x55c4e17762e8 content::ContentMainRunnerImpl::Run()
#13 0x55c4e177ff24 service_manager::Main()
#14 0x55c4e1774f14 content::ContentMain()
#15 0x55c4e58849b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55c4e5884a42 headless::HeadlessBrowserMain()
#17 0x55c4e177cf9d headless::HeadlessShellMain()
#18 0x55c4dfddb1ac ChromeMain
#19 0x7f4815fc92e1 __libc_start_main
#20 0x55c4dfddb02a _start
  r8: 0000000000000000  r9: 00007ffc9d63ae50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc9d63b548 r13: 0000000000000161 r14: 00007ffc9d63b550 r15: 00007ffc9d63b0e9
  di: 0000000000000002  si: 00007ffc9d63ae50  bp: 00007ffc9d63b090  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f4815fdbfff  sp: 00007ffc9d63aec8
  ip: 00007f4815fdbfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020500.585171:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55c4e1a3ab0c base::debug::StackTrace::StackTrace()
#1 0x55c4e1a53780 logging::LogMessage::~LogMessage()
#2 0x55c4e0ae32b1 content::ZygoteHostImpl::Init()
#3 0x55c4e0755c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55c4e075ba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55c4e58859a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55c4e1775a00 content::RunNamedProcessTypeMain()
#7 0x55c4e17762e8 content::ContentMainRunnerImpl::Run()
#8 0x55c4e177ff24 service_manager::Main()
#9 0x55c4e1774f14 content::ContentMain()
#10 0x55c4e58849b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55c4e5884a42 headless::HeadlessBrowserMain()
#12 0x55c4e177cf9d headless::HeadlessShellMain()
#13 0x55c4dfddb1ac ChromeMain
#14 0x7f4815fc92e1 __libc_start_main
#15 0x55c4dfddb02a _start

Received signal 6
#0 0x55c4e1a3ab0c base::debug::StackTrace::StackTrace()
#1 0x55c4e1a3a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f481bf260c0 <unknown>
#3 0x7f4815fdbfff gsignal
#4 0x7f4815fdd42a abort
#5 0x55c4e1a39105 base::debug::BreakDebugger()
#6 0x55c4e1a53bca logging::LogMessage::~LogMessage()
#7 0x55c4e0ae32b1 content::ZygoteHostImpl::Init()
#8 0x55c4e0755c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55c4e075ba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55c4e58859a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55c4e1775a00 content::RunNamedProcessTypeMain()
#12 0x55c4e17762e8 content::ContentMainRunnerImpl::Run()
#13 0x55c4e177ff24 service_manager::Main()
#14 0x55c4e1774f14 content::ContentMain()
#15 0x55c4e58849b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55c4e5884a42 headless::HeadlessBrowserMain()
#17 0x55c4e177cf9d headless::HeadlessShellMain()
#18 0x55c4dfddb1ac ChromeMain
#19 0x7f4815fc92e1 __libc_start_main
#20 0x55c4dfddb02a _start
  r8: 0000000000000000  r9: 00007ffc9d63ae50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc9d63b548 r13: 0000000000000161 r14: 00007ffc9d63b550 r15: 00007ffc9d63b0e9
  di: 0000000000000002  si: 00007ffc9d63ae50  bp: 00007ffc9d63b090  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f4815fdbfff  sp: 00007ffc9d63aec8
  ip: 00007f4815fdbfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020544.320841:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x559783e20b0c base::debug::StackTrace::StackTrace()
#1 0x559783e39780 logging::LogMessage::~LogMessage()
#2 0x559782ec92b1 content::ZygoteHostImpl::Init()
#3 0x559782b3bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x559782b41a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x559787c6b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x559783b5ba00 content::RunNamedProcessTypeMain()
#7 0x559783b5c2e8 content::ContentMainRunnerImpl::Run()
#8 0x559783b65f24 service_manager::Main()
#9 0x559783b5af14 content::ContentMain()
#10 0x559787c6a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x559787c6aa42 headless::HeadlessBrowserMain()
#12 0x559783b62f9d headless::HeadlessShellMain()
#13 0x5597821c11ac ChromeMain
#14 0x7efd3fe1a2e1 __libc_start_main
#15 0x5597821c102a _start

Received signal 6
#0 0x559783e20b0c base::debug::StackTrace::StackTrace()
#1 0x559783e20671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7efd45d770c0 <unknown>
#3 0x7efd3fe2cfff gsignal
#4 0x7efd3fe2e42a abort
#5 0x559783e1f105 base::debug::BreakDebugger()
#6 0x559783e39bca logging::LogMessage::~LogMessage()
#7 0x559782ec92b1 content::ZygoteHostImpl::Init()
#8 0x559782b3bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x559782b41a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x559787c6b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x559783b5ba00 content::RunNamedProcessTypeMain()
#12 0x559783b5c2e8 content::ContentMainRunnerImpl::Run()
#13 0x559783b65f24 service_manager::Main()
#14 0x559783b5af14 content::ContentMain()
#15 0x559787c6a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x559787c6aa42 headless::HeadlessBrowserMain()
#17 0x559783b62f9d headless::HeadlessShellMain()
#18 0x5597821c11ac ChromeMain
#19 0x7efd3fe1a2e1 __libc_start_main
#20 0x5597821c102a _start
  r8: 0000000000000000  r9: 00007ffdfb5d20a0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdfb5d2798 r13: 0000000000000161 r14: 00007ffdfb5d27a0 r15: 00007ffdfb5d2339
  di: 0000000000000002  si: 00007ffdfb5d20a0  bp: 00007ffdfb5d22e0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007efd3fe2cfff  sp: 00007ffdfb5d2118
  ip: 00007efd3fe2cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020544.320841:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x559783e20b0c base::debug::StackTrace::StackTrace()
#1 0x559783e39780 logging::LogMessage::~LogMessage()
#2 0x559782ec92b1 content::ZygoteHostImpl::Init()
#3 0x559782b3bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x559782b41a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x559787c6b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x559783b5ba00 content::RunNamedProcessTypeMain()
#7 0x559783b5c2e8 content::ContentMainRunnerImpl::Run()
#8 0x559783b65f24 service_manager::Main()
#9 0x559783b5af14 content::ContentMain()
#10 0x559787c6a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x559787c6aa42 headless::HeadlessBrowserMain()
#12 0x559783b62f9d headless::HeadlessShellMain()
#13 0x5597821c11ac ChromeMain
#14 0x7efd3fe1a2e1 __libc_start_main
#15 0x5597821c102a _start

Received signal 6
#0 0x559783e20b0c base::debug::StackTrace::StackTrace()
#1 0x559783e20671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7efd45d770c0 <unknown>
#3 0x7efd3fe2cfff gsignal
#4 0x7efd3fe2e42a abort
#5 0x559783e1f105 base::debug::BreakDebugger()
#6 0x559783e39bca logging::LogMessage::~LogMessage()
#7 0x559782ec92b1 content::ZygoteHostImpl::Init()
#8 0x559782b3bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x559782b41a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x559787c6b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x559783b5ba00 content::RunNamedProcessTypeMain()
#12 0x559783b5c2e8 content::ContentMainRunnerImpl::Run()
#13 0x559783b65f24 service_manager::Main()
#14 0x559783b5af14 content::ContentMain()
#15 0x559787c6a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x559787c6aa42 headless::HeadlessBrowserMain()
#17 0x559783b62f9d headless::HeadlessShellMain()
#18 0x5597821c11ac ChromeMain
#19 0x7efd3fe1a2e1 __libc_start_main
#20 0x5597821c102a _start
  r8: 0000000000000000  r9: 00007ffdfb5d20a0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdfb5d2798 r13: 0000000000000161 r14: 00007ffdfb5d27a0 r15: 00007ffdfb5d2339
  di: 0000000000000002  si: 00007ffdfb5d20a0  bp: 00007ffdfb5d22e0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007efd3fe2cfff  sp: 00007ffdfb5d2118
  ip: 00007efd3fe2cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020432.646831:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55784ee2bb0c base::debug::StackTrace::StackTrace()
#1 0x55784ee44780 logging::LogMessage::~LogMessage()
#2 0x55784ded42b1 content::ZygoteHostImpl::Init()
#3 0x55784db46c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55784db4ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557852c769a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55784eb66a00 content::RunNamedProcessTypeMain()
#7 0x55784eb672e8 content::ContentMainRunnerImpl::Run()
#8 0x55784eb70f24 service_manager::Main()
#9 0x55784eb65f14 content::ContentMain()
#10 0x557852c759b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557852c75a42 headless::HeadlessBrowserMain()
#12 0x55784eb6df9d headless::HeadlessShellMain()
#13 0x55784d1cc1ac ChromeMain
#14 0x7efdf0f9a2e1 __libc_start_main
#15 0x55784d1cc02a _start

Received signal 6
#0 0x55784ee2bb0c base::debug::StackTrace::StackTrace()
#1 0x55784ee2b671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7efdf6ef70c0 <unknown>
#3 0x7efdf0facfff gsignal
#4 0x7efdf0fae42a abort
#5 0x55784ee2a105 base::debug::BreakDebugger()
#6 0x55784ee44bca logging::LogMessage::~LogMessage()
#7 0x55784ded42b1 content::ZygoteHostImpl::Init()
#8 0x55784db46c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55784db4ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557852c769a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55784eb66a00 content::RunNamedProcessTypeMain()
#12 0x55784eb672e8 content::ContentMainRunnerImpl::Run()
#13 0x55784eb70f24 service_manager::Main()
#14 0x55784eb65f14 content::ContentMain()
#15 0x557852c759b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557852c75a42 headless::HeadlessBrowserMain()
#17 0x55784eb6df9d headless::HeadlessShellMain()
#18 0x55784d1cc1ac ChromeMain
#19 0x7efdf0f9a2e1 __libc_start_main
#20 0x55784d1cc02a _start
  r8: 0000000000000000  r9: 00007fff469e50a0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff469e5798 r13: 0000000000000161 r14: 00007fff469e57a0 r15: 00007fff469e5339
  di: 0000000000000002  si: 00007fff469e50a0  bp: 00007fff469e52e0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007efdf0facfff  sp: 00007fff469e5118
  ip: 00007efdf0facfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020432.646831:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55784ee2bb0c base::debug::StackTrace::StackTrace()
#1 0x55784ee44780 logging::LogMessage::~LogMessage()
#2 0x55784ded42b1 content::ZygoteHostImpl::Init()
#3 0x55784db46c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55784db4ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557852c769a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55784eb66a00 content::RunNamedProcessTypeMain()
#7 0x55784eb672e8 content::ContentMainRunnerImpl::Run()
#8 0x55784eb70f24 service_manager::Main()
#9 0x55784eb65f14 content::ContentMain()
#10 0x557852c759b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557852c75a42 headless::HeadlessBrowserMain()
#12 0x55784eb6df9d headless::HeadlessShellMain()
#13 0x55784d1cc1ac ChromeMain
#14 0x7efdf0f9a2e1 __libc_start_main
#15 0x55784d1cc02a _start

Received signal 6
#0 0x55784ee2bb0c base::debug::StackTrace::StackTrace()
#1 0x55784ee2b671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7efdf6ef70c0 <unknown>
#3 0x7efdf0facfff gsignal
#4 0x7efdf0fae42a abort
#5 0x55784ee2a105 base::debug::BreakDebugger()
#6 0x55784ee44bca logging::LogMessage::~LogMessage()
#7 0x55784ded42b1 content::ZygoteHostImpl::Init()
#8 0x55784db46c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55784db4ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557852c769a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55784eb66a00 content::RunNamedProcessTypeMain()
#12 0x55784eb672e8 content::ContentMainRunnerImpl::Run()
#13 0x55784eb70f24 service_manager::Main()
#14 0x55784eb65f14 content::ContentMain()
#15 0x557852c759b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557852c75a42 headless::HeadlessBrowserMain()
#17 0x55784eb6df9d headless::HeadlessShellMain()
#18 0x55784d1cc1ac ChromeMain
#19 0x7efdf0f9a2e1 __libc_start_main
#20 0x55784d1cc02a _start
  r8: 0000000000000000  r9: 00007fff469e50a0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff469e5798 r13: 0000000000000161 r14: 00007fff469e57a0 r15: 00007fff469e5339
  di: 0000000000000002  si: 00007fff469e50a0  bp: 00007fff469e52e0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007efdf0facfff  sp: 00007fff469e5118
  ip: 00007efdf0facfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020524.370866:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f4387ceb0c base::debug::StackTrace::StackTrace()
#1 0x55f4387e7780 logging::LogMessage::~LogMessage()
#2 0x55f4378772b1 content::ZygoteHostImpl::Init()
#3 0x55f4374e9c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f4374efa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f43c6199a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f438509a00 content::RunNamedProcessTypeMain()
#7 0x55f43850a2e8 content::ContentMainRunnerImpl::Run()
#8 0x55f438513f24 service_manager::Main()
#9 0x55f438508f14 content::ContentMain()
#10 0x55f43c6189b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f43c618a42 headless::HeadlessBrowserMain()
#12 0x55f438510f9d headless::HeadlessShellMain()
#13 0x55f436b6f1ac ChromeMain
#14 0x7fddf29802e1 __libc_start_main
#15 0x55f436b6f02a _start

Received signal 6
#0 0x55f4387ceb0c base::debug::StackTrace::StackTrace()
#1 0x55f4387ce671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fddf88dd0c0 <unknown>
#3 0x7fddf2992fff gsignal
#4 0x7fddf299442a abort
#5 0x55f4387cd105 base::debug::BreakDebugger()
#6 0x55f4387e7bca logging::LogMessage::~LogMessage()
#7 0x55f4378772b1 content::ZygoteHostImpl::Init()
#8 0x55f4374e9c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f4374efa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f43c6199a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f438509a00 content::RunNamedProcessTypeMain()
#12 0x55f43850a2e8 content::ContentMainRunnerImpl::Run()
#13 0x55f438513f24 service_manager::Main()
#14 0x55f438508f14 content::ContentMain()
#15 0x55f43c6189b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f43c618a42 headless::HeadlessBrowserMain()
#17 0x55f438510f9d headless::HeadlessShellMain()
#18 0x55f436b6f1ac ChromeMain
#19 0x7fddf29802e1 __libc_start_main
#20 0x55f436b6f02a _start
  r8: 0000000000000000  r9: 00007ffe43fe42b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe43fe49a8 r13: 0000000000000161 r14: 00007ffe43fe49b0 r15: 00007ffe43fe4549
  di: 0000000000000002  si: 00007ffe43fe42b0  bp: 00007ffe43fe44f0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fddf2992fff  sp: 00007ffe43fe4328
  ip: 00007fddf2992fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020524.370866:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f4387ceb0c base::debug::StackTrace::StackTrace()
#1 0x55f4387e7780 logging::LogMessage::~LogMessage()
#2 0x55f4378772b1 content::ZygoteHostImpl::Init()
#3 0x55f4374e9c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f4374efa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f43c6199a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f438509a00 content::RunNamedProcessTypeMain()
#7 0x55f43850a2e8 content::ContentMainRunnerImpl::Run()
#8 0x55f438513f24 service_manager::Main()
#9 0x55f438508f14 content::ContentMain()
#10 0x55f43c6189b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f43c618a42 headless::HeadlessBrowserMain()
#12 0x55f438510f9d headless::HeadlessShellMain()
#13 0x55f436b6f1ac ChromeMain
#14 0x7fddf29802e1 __libc_start_main
#15 0x55f436b6f02a _start

Received signal 6
#0 0x55f4387ceb0c base::debug::StackTrace::StackTrace()
#1 0x55f4387ce671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fddf88dd0c0 <unknown>
#3 0x7fddf2992fff gsignal
#4 0x7fddf299442a abort
#5 0x55f4387cd105 base::debug::BreakDebugger()
#6 0x55f4387e7bca logging::LogMessage::~LogMessage()
#7 0x55f4378772b1 content::ZygoteHostImpl::Init()
#8 0x55f4374e9c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f4374efa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f43c6199a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f438509a00 content::RunNamedProcessTypeMain()
#12 0x55f43850a2e8 content::ContentMainRunnerImpl::Run()
#13 0x55f438513f24 service_manager::Main()
#14 0x55f438508f14 content::ContentMain()
#15 0x55f43c6189b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f43c618a42 headless::HeadlessBrowserMain()
#17 0x55f438510f9d headless::HeadlessShellMain()
#18 0x55f436b6f1ac ChromeMain
#19 0x7fddf29802e1 __libc_start_main
#20 0x55f436b6f02a _start
  r8: 0000000000000000  r9: 00007ffe43fe42b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe43fe49a8 r13: 0000000000000161 r14: 00007ffe43fe49b0 r15: 00007ffe43fe4549
  di: 0000000000000002  si: 00007ffe43fe42b0  bp: 00007ffe43fe44f0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fddf2992fff  sp: 00007ffe43fe4328
  ip: 00007fddf2992fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020524.688453:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d128da0b0c base::debug::StackTrace::StackTrace()
#1 0x55d128db9780 logging::LogMessage::~LogMessage()
#2 0x55d127e492b1 content::ZygoteHostImpl::Init()
#3 0x55d127abbc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d127ac1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d12cbeb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d128adba00 content::RunNamedProcessTypeMain()
#7 0x55d128adc2e8 content::ContentMainRunnerImpl::Run()
#8 0x55d128ae5f24 service_manager::Main()
#9 0x55d128adaf14 content::ContentMain()
#10 0x55d12cbea9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d12cbeaa42 headless::HeadlessBrowserMain()
#12 0x55d128ae2f9d headless::HeadlessShellMain()
#13 0x55d1271411ac ChromeMain
#14 0x7f9679ea72e1 __libc_start_main
#15 0x55d12714102a _start

Received signal 6
#0 0x55d128da0b0c base::debug::StackTrace::StackTrace()
#1 0x55d128da0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f967fe040c0 <unknown>
#3 0x7f9679eb9fff gsignal
#4 0x7f9679ebb42a abort
#5 0x55d128d9f105 base::debug::BreakDebugger()
#6 0x55d128db9bca logging::LogMessage::~LogMessage()
#7 0x55d127e492b1 content::ZygoteHostImpl::Init()
#8 0x55d127abbc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d127ac1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d12cbeb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d128adba00 content::RunNamedProcessTypeMain()
#12 0x55d128adc2e8 content::ContentMainRunnerImpl::Run()
#13 0x55d128ae5f24 service_manager::Main()
#14 0x55d128adaf14 content::ContentMain()
#15 0x55d12cbea9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d12cbeaa42 headless::HeadlessBrowserMain()
#17 0x55d128ae2f9d headless::HeadlessShellMain()
#18 0x55d1271411ac ChromeMain
#19 0x7f9679ea72e1 __libc_start_main
#20 0x55d12714102a _start
  r8: 0000000000000000  r9: 00007ffe31bd2ab0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe31bd31a8 r13: 0000000000000161 r14: 00007ffe31bd31b0 r15: 00007ffe31bd2d49
  di: 0000000000000002  si: 00007ffe31bd2ab0  bp: 00007ffe31bd2cf0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9679eb9fff  sp: 00007ffe31bd2b28
  ip: 00007f9679eb9fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020524.688453:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d128da0b0c base::debug::StackTrace::StackTrace()
#1 0x55d128db9780 logging::LogMessage::~LogMessage()
#2 0x55d127e492b1 content::ZygoteHostImpl::Init()
#3 0x55d127abbc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d127ac1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d12cbeb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d128adba00 content::RunNamedProcessTypeMain()
#7 0x55d128adc2e8 content::ContentMainRunnerImpl::Run()
#8 0x55d128ae5f24 service_manager::Main()
#9 0x55d128adaf14 content::ContentMain()
#10 0x55d12cbea9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d12cbeaa42 headless::HeadlessBrowserMain()
#12 0x55d128ae2f9d headless::HeadlessShellMain()
#13 0x55d1271411ac ChromeMain
#14 0x7f9679ea72e1 __libc_start_main
#15 0x55d12714102a _start

Received signal 6
#0 0x55d128da0b0c base::debug::StackTrace::StackTrace()
#1 0x55d128da0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f967fe040c0 <unknown>
#3 0x7f9679eb9fff gsignal
#4 0x7f9679ebb42a abort
#5 0x55d128d9f105 base::debug::BreakDebugger()
#6 0x55d128db9bca logging::LogMessage::~LogMessage()
#7 0x55d127e492b1 content::ZygoteHostImpl::Init()
#8 0x55d127abbc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d127ac1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d12cbeb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d128adba00 content::RunNamedProcessTypeMain()
#12 0x55d128adc2e8 content::ContentMainRunnerImpl::Run()
#13 0x55d128ae5f24 service_manager::Main()
#14 0x55d128adaf14 content::ContentMain()
#15 0x55d12cbea9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d12cbeaa42 headless::HeadlessBrowserMain()
#17 0x55d128ae2f9d headless::HeadlessShellMain()
#18 0x55d1271411ac ChromeMain
#19 0x7f9679ea72e1 __libc_start_main
#20 0x55d12714102a _start
  r8: 0000000000000000  r9: 00007ffe31bd2ab0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe31bd31a8 r13: 0000000000000161 r14: 00007ffe31bd31b0 r15: 00007ffe31bd2d49
  di: 0000000000000002  si: 00007ffe31bd2ab0  bp: 00007ffe31bd2cf0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9679eb9fff  sp: 00007ffe31bd2b28
  ip: 00007f9679eb9fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020524.393444:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561338898b0c base::debug::StackTrace::StackTrace()
#1 0x5613388b1780 logging::LogMessage::~LogMessage()
#2 0x5613379412b1 content::ZygoteHostImpl::Init()
#3 0x5613375b3c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5613375b9a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56133c6e39a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5613385d3a00 content::RunNamedProcessTypeMain()
#7 0x5613385d42e8 content::ContentMainRunnerImpl::Run()
#8 0x5613385ddf24 service_manager::Main()
#9 0x5613385d2f14 content::ContentMain()
#10 0x56133c6e29b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56133c6e2a42 headless::HeadlessBrowserMain()
#12 0x5613385daf9d headless::HeadlessShellMain()
#13 0x561336c391ac ChromeMain
#14 0x7fd698cc52e1 __libc_start_main
#15 0x561336c3902a _start

Received signal 6
#0 0x561338898b0c base::debug::StackTrace::StackTrace()
#1 0x561338898671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd69ec220c0 <unknown>
#3 0x7fd698cd7fff gsignal
#4 0x7fd698cd942a abort
#5 0x561338897105 base::debug::BreakDebugger()
#6 0x5613388b1bca logging::LogMessage::~LogMessage()
#7 0x5613379412b1 content::ZygoteHostImpl::Init()
#8 0x5613375b3c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5613375b9a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56133c6e39a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5613385d3a00 content::RunNamedProcessTypeMain()
#12 0x5613385d42e8 content::ContentMainRunnerImpl::Run()
#13 0x5613385ddf24 service_manager::Main()
#14 0x5613385d2f14 content::ContentMain()
#15 0x56133c6e29b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56133c6e2a42 headless::HeadlessBrowserMain()
#17 0x5613385daf9d headless::HeadlessShellMain()
#18 0x561336c391ac ChromeMain
#19 0x7fd698cc52e1 __libc_start_main
#20 0x561336c3902a _start
  r8: 0000000000000000  r9: 00007fffe94091c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffe94098b8 r13: 0000000000000161 r14: 00007fffe94098c0 r15: 00007fffe9409459
  di: 0000000000000002  si: 00007fffe94091c0  bp: 00007fffe9409400  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd698cd7fff  sp: 00007fffe9409238
  ip: 00007fd698cd7fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020524.393444:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561338898b0c base::debug::StackTrace::StackTrace()
#1 0x5613388b1780 logging::LogMessage::~LogMessage()
#2 0x5613379412b1 content::ZygoteHostImpl::Init()
#3 0x5613375b3c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5613375b9a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56133c6e39a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5613385d3a00 content::RunNamedProcessTypeMain()
#7 0x5613385d42e8 content::ContentMainRunnerImpl::Run()
#8 0x5613385ddf24 service_manager::Main()
#9 0x5613385d2f14 content::ContentMain()
#10 0x56133c6e29b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56133c6e2a42 headless::HeadlessBrowserMain()
#12 0x5613385daf9d headless::HeadlessShellMain()
#13 0x561336c391ac ChromeMain
#14 0x7fd698cc52e1 __libc_start_main
#15 0x561336c3902a _start

Received signal 6
#0 0x561338898b0c base::debug::StackTrace::StackTrace()
#1 0x561338898671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd69ec220c0 <unknown>
#3 0x7fd698cd7fff gsignal
#4 0x7fd698cd942a abort
#5 0x561338897105 base::debug::BreakDebugger()
#6 0x5613388b1bca logging::LogMessage::~LogMessage()
#7 0x5613379412b1 content::ZygoteHostImpl::Init()
#8 0x5613375b3c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5613375b9a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56133c6e39a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5613385d3a00 content::RunNamedProcessTypeMain()
#12 0x5613385d42e8 content::ContentMainRunnerImpl::Run()
#13 0x5613385ddf24 service_manager::Main()
#14 0x5613385d2f14 content::ContentMain()
#15 0x56133c6e29b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56133c6e2a42 headless::HeadlessBrowserMain()
#17 0x5613385daf9d headless::HeadlessShellMain()
#18 0x561336c391ac ChromeMain
#19 0x7fd698cc52e1 __libc_start_main
#20 0x561336c3902a _start
  r8: 0000000000000000  r9: 00007fffe94091c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffe94098b8 r13: 0000000000000161 r14: 00007fffe94098c0 r15: 00007fffe9409459
  di: 0000000000000002  si: 00007fffe94091c0  bp: 00007fffe9409400  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd698cd7fff  sp: 00007fffe9409238
  ip: 00007fd698cd7fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020606.240494:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55eb11c33b0c base::debug::StackTrace::StackTrace()
#1 0x55eb11c4c780 logging::LogMessage::~LogMessage()
#2 0x55eb10cdc2b1 content::ZygoteHostImpl::Init()
#3 0x55eb1094ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55eb10954a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55eb15a7e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55eb1196ea00 content::RunNamedProcessTypeMain()
#7 0x55eb1196f2e8 content::ContentMainRunnerImpl::Run()
#8 0x55eb11978f24 service_manager::Main()
#9 0x55eb1196df14 content::ContentMain()
#10 0x55eb15a7d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55eb15a7da42 headless::HeadlessBrowserMain()
#12 0x55eb11975f9d headless::HeadlessShellMain()
#13 0x55eb0ffd41ac ChromeMain
#14 0x7f5a0715d2e1 __libc_start_main
#15 0x55eb0ffd402a _start

Received signal 6
#0 0x55eb11c33b0c base::debug::StackTrace::StackTrace()
#1 0x55eb11c33671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f5a0d0ba0c0 <unknown>
#3 0x7f5a0716ffff gsignal
#4 0x7f5a0717142a abort
#5 0x55eb11c32105 base::debug::BreakDebugger()
#6 0x55eb11c4cbca logging::LogMessage::~LogMessage()
#7 0x55eb10cdc2b1 content::ZygoteHostImpl::Init()
#8 0x55eb1094ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55eb10954a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55eb15a7e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55eb1196ea00 content::RunNamedProcessTypeMain()
#12 0x55eb1196f2e8 content::ContentMainRunnerImpl::Run()
#13 0x55eb11978f24 service_manager::Main()
#14 0x55eb1196df14 content::ContentMain()
#15 0x55eb15a7d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55eb15a7da42 headless::HeadlessBrowserMain()
#17 0x55eb11975f9d headless::HeadlessShellMain()
#18 0x55eb0ffd41ac ChromeMain
#19 0x7f5a0715d2e1 __libc_start_main
#20 0x55eb0ffd402a _start
  r8: 0000000000000000  r9: 00007ffdbfe8aa30 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdbfe8b128 r13: 0000000000000161 r14: 00007ffdbfe8b130 r15: 00007ffdbfe8acc9
  di: 0000000000000002  si: 00007ffdbfe8aa30  bp: 00007ffdbfe8ac70  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f5a0716ffff  sp: 00007ffdbfe8aaa8
  ip: 00007f5a0716ffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020606.240494:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55eb11c33b0c base::debug::StackTrace::StackTrace()
#1 0x55eb11c4c780 logging::LogMessage::~LogMessage()
#2 0x55eb10cdc2b1 content::ZygoteHostImpl::Init()
#3 0x55eb1094ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55eb10954a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55eb15a7e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55eb1196ea00 content::RunNamedProcessTypeMain()
#7 0x55eb1196f2e8 content::ContentMainRunnerImpl::Run()
#8 0x55eb11978f24 service_manager::Main()
#9 0x55eb1196df14 content::ContentMain()
#10 0x55eb15a7d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55eb15a7da42 headless::HeadlessBrowserMain()
#12 0x55eb11975f9d headless::HeadlessShellMain()
#13 0x55eb0ffd41ac ChromeMain
#14 0x7f5a0715d2e1 __libc_start_main
#15 0x55eb0ffd402a _start

Received signal 6
#0 0x55eb11c33b0c base::debug::StackTrace::StackTrace()
#1 0x55eb11c33671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f5a0d0ba0c0 <unknown>
#3 0x7f5a0716ffff gsignal
#4 0x7f5a0717142a abort
#5 0x55eb11c32105 base::debug::BreakDebugger()
#6 0x55eb11c4cbca logging::LogMessage::~LogMessage()
#7 0x55eb10cdc2b1 content::ZygoteHostImpl::Init()
#8 0x55eb1094ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55eb10954a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55eb15a7e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55eb1196ea00 content::RunNamedProcessTypeMain()
#12 0x55eb1196f2e8 content::ContentMainRunnerImpl::Run()
#13 0x55eb11978f24 service_manager::Main()
#14 0x55eb1196df14 content::ContentMain()
#15 0x55eb15a7d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55eb15a7da42 headless::HeadlessBrowserMain()
#17 0x55eb11975f9d headless::HeadlessShellMain()
#18 0x55eb0ffd41ac ChromeMain
#19 0x7f5a0715d2e1 __libc_start_main
#20 0x55eb0ffd402a _start
  r8: 0000000000000000  r9: 00007ffdbfe8aa30 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdbfe8b128 r13: 0000000000000161 r14: 00007ffdbfe8b130 r15: 00007ffdbfe8acc9
  di: 0000000000000002  si: 00007ffdbfe8aa30  bp: 00007ffdbfe8ac70  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f5a0716ffff  sp: 00007ffdbfe8aaa8
  ip: 00007f5a0716ffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020623.413174:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5564f216eb0c base::debug::StackTrace::StackTrace()
#1 0x5564f2187780 logging::LogMessage::~LogMessage()
#2 0x5564f12172b1 content::ZygoteHostImpl::Init()
#3 0x5564f0e89c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5564f0e8fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5564f5fb99a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5564f1ea9a00 content::RunNamedProcessTypeMain()
#7 0x5564f1eaa2e8 content::ContentMainRunnerImpl::Run()
#8 0x5564f1eb3f24 service_manager::Main()
#9 0x5564f1ea8f14 content::ContentMain()
#10 0x5564f5fb89b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5564f5fb8a42 headless::HeadlessBrowserMain()
#12 0x5564f1eb0f9d headless::HeadlessShellMain()
#13 0x5564f050f1ac ChromeMain
#14 0x7f4e4d21f2e1 __libc_start_main
#15 0x5564f050f02a _start

Received signal 6
#0 0x5564f216eb0c base::debug::StackTrace::StackTrace()
#1 0x5564f216e671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f4e5317c0c0 <unknown>
#3 0x7f4e4d231fff gsignal
#4 0x7f4e4d23342a abort
#5 0x5564f216d105 base::debug::BreakDebugger()
#6 0x5564f2187bca logging::LogMessage::~LogMessage()
#7 0x5564f12172b1 content::ZygoteHostImpl::Init()
#8 0x5564f0e89c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5564f0e8fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5564f5fb99a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5564f1ea9a00 content::RunNamedProcessTypeMain()
#12 0x5564f1eaa2e8 content::ContentMainRunnerImpl::Run()
#13 0x5564f1eb3f24 service_manager::Main()
#14 0x5564f1ea8f14 content::ContentMain()
#15 0x5564f5fb89b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5564f5fb8a42 headless::HeadlessBrowserMain()
#17 0x5564f1eb0f9d headless::HeadlessShellMain()
#18 0x5564f050f1ac ChromeMain
#19 0x7f4e4d21f2e1 __libc_start_main
#20 0x5564f050f02a _start
  r8: 0000000000000000  r9: 00007ffffcd37450 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffffcd37b48 r13: 0000000000000161 r14: 00007ffffcd37b50 r15: 00007ffffcd376e9
  di: 0000000000000002  si: 00007ffffcd37450  bp: 00007ffffcd37690  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f4e4d231fff  sp: 00007ffffcd374c8
  ip: 00007f4e4d231fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020623.413174:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5564f216eb0c base::debug::StackTrace::StackTrace()
#1 0x5564f2187780 logging::LogMessage::~LogMessage()
#2 0x5564f12172b1 content::ZygoteHostImpl::Init()
#3 0x5564f0e89c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5564f0e8fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5564f5fb99a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5564f1ea9a00 content::RunNamedProcessTypeMain()
#7 0x5564f1eaa2e8 content::ContentMainRunnerImpl::Run()
#8 0x5564f1eb3f24 service_manager::Main()
#9 0x5564f1ea8f14 content::ContentMain()
#10 0x5564f5fb89b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5564f5fb8a42 headless::HeadlessBrowserMain()
#12 0x5564f1eb0f9d headless::HeadlessShellMain()
#13 0x5564f050f1ac ChromeMain
#14 0x7f4e4d21f2e1 __libc_start_main
#15 0x5564f050f02a _start

Received signal 6
#0 0x5564f216eb0c base::debug::StackTrace::StackTrace()
#1 0x5564f216e671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f4e5317c0c0 <unknown>
#3 0x7f4e4d231fff gsignal
#4 0x7f4e4d23342a abort
#5 0x5564f216d105 base::debug::BreakDebugger()
#6 0x5564f2187bca logging::LogMessage::~LogMessage()
#7 0x5564f12172b1 content::ZygoteHostImpl::Init()
#8 0x5564f0e89c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5564f0e8fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5564f5fb99a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5564f1ea9a00 content::RunNamedProcessTypeMain()
#12 0x5564f1eaa2e8 content::ContentMainRunnerImpl::Run()
#13 0x5564f1eb3f24 service_manager::Main()
#14 0x5564f1ea8f14 content::ContentMain()
#15 0x5564f5fb89b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5564f5fb8a42 headless::HeadlessBrowserMain()
#17 0x5564f1eb0f9d headless::HeadlessShellMain()
#18 0x5564f050f1ac ChromeMain
#19 0x7f4e4d21f2e1 __libc_start_main
#20 0x5564f050f02a _start
  r8: 0000000000000000  r9: 00007ffffcd37450 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffffcd37b48 r13: 0000000000000161 r14: 00007ffffcd37b50 r15: 00007ffffcd376e9
  di: 0000000000000002  si: 00007ffffcd37450  bp: 00007ffffcd37690  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f4e4d231fff  sp: 00007ffffcd374c8
  ip: 00007f4e4d231fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020613.892436:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5631a2359b0c base::debug::StackTrace::StackTrace()
#1 0x5631a2372780 logging::LogMessage::~LogMessage()
#2 0x5631a14022b1 content::ZygoteHostImpl::Init()
#3 0x5631a1074c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5631a107aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5631a61a49a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5631a2094a00 content::RunNamedProcessTypeMain()
#7 0x5631a20952e8 content::ContentMainRunnerImpl::Run()
#8 0x5631a209ef24 service_manager::Main()
#9 0x5631a2093f14 content::ContentMain()
#10 0x5631a61a39b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5631a61a3a42 headless::HeadlessBrowserMain()
#12 0x5631a209bf9d headless::HeadlessShellMain()
#13 0x5631a06fa1ac ChromeMain
#14 0x7fc6eba3a2e1 __libc_start_main
#15 0x5631a06fa02a _start

Received signal 6
#0 0x5631a2359b0c base::debug::StackTrace::StackTrace()
#1 0x5631a2359671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc6f19970c0 <unknown>
#3 0x7fc6eba4cfff gsignal
#4 0x7fc6eba4e42a abort
#5 0x5631a2358105 base::debug::BreakDebugger()
#6 0x5631a2372bca logging::LogMessage::~LogMessage()
#7 0x5631a14022b1 content::ZygoteHostImpl::Init()
#8 0x5631a1074c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5631a107aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5631a61a49a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5631a2094a00 content::RunNamedProcessTypeMain()
#12 0x5631a20952e8 content::ContentMainRunnerImpl::Run()
#13 0x5631a209ef24 service_manager::Main()
#14 0x5631a2093f14 content::ContentMain()
#15 0x5631a61a39b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5631a61a3a42 headless::HeadlessBrowserMain()
#17 0x5631a209bf9d headless::HeadlessShellMain()
#18 0x5631a06fa1ac ChromeMain
#19 0x7fc6eba3a2e1 __libc_start_main
#20 0x5631a06fa02a _start
  r8: 0000000000000000  r9: 00007fff806c4080 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff806c4778 r13: 0000000000000161 r14: 00007fff806c4780 r15: 00007fff806c4319
  di: 0000000000000002  si: 00007fff806c4080  bp: 00007fff806c42c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc6eba4cfff  sp: 00007fff806c40f8
  ip: 00007fc6eba4cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020613.892436:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5631a2359b0c base::debug::StackTrace::StackTrace()
#1 0x5631a2372780 logging::LogMessage::~LogMessage()
#2 0x5631a14022b1 content::ZygoteHostImpl::Init()
#3 0x5631a1074c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5631a107aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5631a61a49a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5631a2094a00 content::RunNamedProcessTypeMain()
#7 0x5631a20952e8 content::ContentMainRunnerImpl::Run()
#8 0x5631a209ef24 service_manager::Main()
#9 0x5631a2093f14 content::ContentMain()
#10 0x5631a61a39b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5631a61a3a42 headless::HeadlessBrowserMain()
#12 0x5631a209bf9d headless::HeadlessShellMain()
#13 0x5631a06fa1ac ChromeMain
#14 0x7fc6eba3a2e1 __libc_start_main
#15 0x5631a06fa02a _start

Received signal 6
#0 0x5631a2359b0c base::debug::StackTrace::StackTrace()
#1 0x5631a2359671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc6f19970c0 <unknown>
#3 0x7fc6eba4cfff gsignal
#4 0x7fc6eba4e42a abort
#5 0x5631a2358105 base::debug::BreakDebugger()
#6 0x5631a2372bca logging::LogMessage::~LogMessage()
#7 0x5631a14022b1 content::ZygoteHostImpl::Init()
#8 0x5631a1074c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5631a107aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5631a61a49a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5631a2094a00 content::RunNamedProcessTypeMain()
#12 0x5631a20952e8 content::ContentMainRunnerImpl::Run()
#13 0x5631a209ef24 service_manager::Main()
#14 0x5631a2093f14 content::ContentMain()
#15 0x5631a61a39b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5631a61a3a42 headless::HeadlessBrowserMain()
#17 0x5631a209bf9d headless::HeadlessShellMain()
#18 0x5631a06fa1ac ChromeMain
#19 0x7fc6eba3a2e1 __libc_start_main
#20 0x5631a06fa02a _start
  r8: 0000000000000000  r9: 00007fff806c4080 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff806c4778 r13: 0000000000000161 r14: 00007fff806c4780 r15: 00007fff806c4319
  di: 0000000000000002  si: 00007fff806c4080  bp: 00007fff806c42c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc6eba4cfff  sp: 00007fff806c40f8
  ip: 00007fc6eba4cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020620.106496:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56286c2eeb0c base::debug::StackTrace::StackTrace()
#1 0x56286c307780 logging::LogMessage::~LogMessage()
#2 0x56286b3972b1 content::ZygoteHostImpl::Init()
#3 0x56286b009c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56286b00fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5628701399a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56286c029a00 content::RunNamedProcessTypeMain()
#7 0x56286c02a2e8 content::ContentMainRunnerImpl::Run()
#8 0x56286c033f24 service_manager::Main()
#9 0x56286c028f14 content::ContentMain()
#10 0x5628701389b9 headless::(anonymous namespace)::RunContentMain()
#11 0x562870138a42 headless::HeadlessBrowserMain()
#12 0x56286c030f9d headless::HeadlessShellMain()
#13 0x56286a68f1ac ChromeMain
#14 0x7f632a6b52e1 __libc_start_main
#15 0x56286a68f02a _start

Received signal 6
#0 0x56286c2eeb0c base::debug::StackTrace::StackTrace()
#1 0x56286c2ee671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f63306120c0 <unknown>
#3 0x7f632a6c7fff gsignal
#4 0x7f632a6c942a abort
#5 0x56286c2ed105 base::debug::BreakDebugger()
#6 0x56286c307bca logging::LogMessage::~LogMessage()
#7 0x56286b3972b1 content::ZygoteHostImpl::Init()
#8 0x56286b009c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56286b00fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5628701399a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56286c029a00 content::RunNamedProcessTypeMain()
#12 0x56286c02a2e8 content::ContentMainRunnerImpl::Run()
#13 0x56286c033f24 service_manager::Main()
#14 0x56286c028f14 content::ContentMain()
#15 0x5628701389b9 headless::(anonymous namespace)::RunContentMain()
#16 0x562870138a42 headless::HeadlessBrowserMain()
#17 0x56286c030f9d headless::HeadlessShellMain()
#18 0x56286a68f1ac ChromeMain
#19 0x7f632a6b52e1 __libc_start_main
#20 0x56286a68f02a _start
  r8: 0000000000000000  r9: 00007ffee08298c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffee0829fb8 r13: 0000000000000161 r14: 00007ffee0829fc0 r15: 00007ffee0829b59
  di: 0000000000000002  si: 00007ffee08298c0  bp: 00007ffee0829b00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f632a6c7fff  sp: 00007ffee0829938
  ip: 00007f632a6c7fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020620.106496:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56286c2eeb0c base::debug::StackTrace::StackTrace()
#1 0x56286c307780 logging::LogMessage::~LogMessage()
#2 0x56286b3972b1 content::ZygoteHostImpl::Init()
#3 0x56286b009c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56286b00fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5628701399a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56286c029a00 content::RunNamedProcessTypeMain()
#7 0x56286c02a2e8 content::ContentMainRunnerImpl::Run()
#8 0x56286c033f24 service_manager::Main()
#9 0x56286c028f14 content::ContentMain()
#10 0x5628701389b9 headless::(anonymous namespace)::RunContentMain()
#11 0x562870138a42 headless::HeadlessBrowserMain()
#12 0x56286c030f9d headless::HeadlessShellMain()
#13 0x56286a68f1ac ChromeMain
#14 0x7f632a6b52e1 __libc_start_main
#15 0x56286a68f02a _start

Received signal 6
#0 0x56286c2eeb0c base::debug::StackTrace::StackTrace()
#1 0x56286c2ee671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f63306120c0 <unknown>
#3 0x7f632a6c7fff gsignal
#4 0x7f632a6c942a abort
#5 0x56286c2ed105 base::debug::BreakDebugger()
#6 0x56286c307bca logging::LogMessage::~LogMessage()
#7 0x56286b3972b1 content::ZygoteHostImpl::Init()
#8 0x56286b009c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56286b00fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5628701399a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56286c029a00 content::RunNamedProcessTypeMain()
#12 0x56286c02a2e8 content::ContentMainRunnerImpl::Run()
#13 0x56286c033f24 service_manager::Main()
#14 0x56286c028f14 content::ContentMain()
#15 0x5628701389b9 headless::(anonymous namespace)::RunContentMain()
#16 0x562870138a42 headless::HeadlessBrowserMain()
#17 0x56286c030f9d headless::HeadlessShellMain()
#18 0x56286a68f1ac ChromeMain
#19 0x7f632a6b52e1 __libc_start_main
#20 0x56286a68f02a _start
  r8: 0000000000000000  r9: 00007ffee08298c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffee0829fb8 r13: 0000000000000161 r14: 00007ffee0829fc0 r15: 00007ffee0829b59
  di: 0000000000000002  si: 00007ffee08298c0  bp: 00007ffee0829b00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f632a6c7fff  sp: 00007ffee0829938
  ip: 00007f632a6c7fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020620.487208:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55a444d18b0c base::debug::StackTrace::StackTrace()
#1 0x55a444d31780 logging::LogMessage::~LogMessage()
#2 0x55a443dc12b1 content::ZygoteHostImpl::Init()
#3 0x55a443a33c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55a443a39a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55a448b639a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55a444a53a00 content::RunNamedProcessTypeMain()
#7 0x55a444a542e8 content::ContentMainRunnerImpl::Run()
#8 0x55a444a5df24 service_manager::Main()
#9 0x55a444a52f14 content::ContentMain()
#10 0x55a448b629b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55a448b62a42 headless::HeadlessBrowserMain()
#12 0x55a444a5af9d headless::HeadlessShellMain()
#13 0x55a4430b91ac ChromeMain
#14 0x7f3e77f5d2e1 __libc_start_main
#15 0x55a4430b902a _start

Received signal 6
#0 0x55a444d18b0c base::debug::StackTrace::StackTrace()
#1 0x55a444d18671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f3e7deba0c0 <unknown>
#3 0x7f3e77f6ffff gsignal
#4 0x7f3e77f7142a abort
#5 0x55a444d17105 base::debug::BreakDebugger()
#6 0x55a444d31bca logging::LogMessage::~LogMessage()
#7 0x55a443dc12b1 content::ZygoteHostImpl::Init()
#8 0x55a443a33c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55a443a39a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55a448b639a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55a444a53a00 content::RunNamedProcessTypeMain()
#12 0x55a444a542e8 content::ContentMainRunnerImpl::Run()
#13 0x55a444a5df24 service_manager::Main()
#14 0x55a444a52f14 content::ContentMain()
#15 0x55a448b629b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55a448b62a42 headless::HeadlessBrowserMain()
#17 0x55a444a5af9d headless::HeadlessShellMain()
#18 0x55a4430b91ac ChromeMain
#19 0x7f3e77f5d2e1 __libc_start_main
#20 0x55a4430b902a _start
  r8: 0000000000000000  r9: 00007ffd19fe24c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd19fe2bb8 r13: 0000000000000161 r14: 00007ffd19fe2bc0 r15: 00007ffd19fe2759
  di: 0000000000000002  si: 00007ffd19fe24c0  bp: 00007ffd19fe2700  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3e77f6ffff  sp: 00007ffd19fe2538
  ip: 00007f3e77f6ffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020620.487208:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55a444d18b0c base::debug::StackTrace::StackTrace()
#1 0x55a444d31780 logging::LogMessage::~LogMessage()
#2 0x55a443dc12b1 content::ZygoteHostImpl::Init()
#3 0x55a443a33c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55a443a39a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55a448b639a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55a444a53a00 content::RunNamedProcessTypeMain()
#7 0x55a444a542e8 content::ContentMainRunnerImpl::Run()
#8 0x55a444a5df24 service_manager::Main()
#9 0x55a444a52f14 content::ContentMain()
#10 0x55a448b629b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55a448b62a42 headless::HeadlessBrowserMain()
#12 0x55a444a5af9d headless::HeadlessShellMain()
#13 0x55a4430b91ac ChromeMain
#14 0x7f3e77f5d2e1 __libc_start_main
#15 0x55a4430b902a _start

Received signal 6
#0 0x55a444d18b0c base::debug::StackTrace::StackTrace()
#1 0x55a444d18671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f3e7deba0c0 <unknown>
#3 0x7f3e77f6ffff gsignal
#4 0x7f3e77f7142a abort
#5 0x55a444d17105 base::debug::BreakDebugger()
#6 0x55a444d31bca logging::LogMessage::~LogMessage()
#7 0x55a443dc12b1 content::ZygoteHostImpl::Init()
#8 0x55a443a33c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55a443a39a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55a448b639a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55a444a53a00 content::RunNamedProcessTypeMain()
#12 0x55a444a542e8 content::ContentMainRunnerImpl::Run()
#13 0x55a444a5df24 service_manager::Main()
#14 0x55a444a52f14 content::ContentMain()
#15 0x55a448b629b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55a448b62a42 headless::HeadlessBrowserMain()
#17 0x55a444a5af9d headless::HeadlessShellMain()
#18 0x55a4430b91ac ChromeMain
#19 0x7f3e77f5d2e1 __libc_start_main
#20 0x55a4430b902a _start
  r8: 0000000000000000  r9: 00007ffd19fe24c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd19fe2bb8 r13: 0000000000000161 r14: 00007ffd19fe2bc0 r15: 00007ffd19fe2759
  di: 0000000000000002  si: 00007ffd19fe24c0  bp: 00007ffd19fe2700  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3e77f6ffff  sp: 00007ffd19fe2538
  ip: 00007f3e77f6ffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020623.471602:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ec4b400b0c base::debug::StackTrace::StackTrace()
#1 0x55ec4b419780 logging::LogMessage::~LogMessage()
#2 0x55ec4a4a92b1 content::ZygoteHostImpl::Init()
#3 0x55ec4a11bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ec4a121a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ec4f24b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ec4b13ba00 content::RunNamedProcessTypeMain()
#7 0x55ec4b13c2e8 content::ContentMainRunnerImpl::Run()
#8 0x55ec4b145f24 service_manager::Main()
#9 0x55ec4b13af14 content::ContentMain()
#10 0x55ec4f24a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ec4f24aa42 headless::HeadlessBrowserMain()
#12 0x55ec4b142f9d headless::HeadlessShellMain()
#13 0x55ec497a11ac ChromeMain
#14 0x7f812a6742e1 __libc_start_main
#15 0x55ec497a102a _start

Received signal 6
#0 0x55ec4b400b0c base::debug::StackTrace::StackTrace()
#1 0x55ec4b400671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f81305d10c0 <unknown>
#3 0x7f812a686fff gsignal
#4 0x7f812a68842a abort
#5 0x55ec4b3ff105 base::debug::BreakDebugger()
#6 0x55ec4b419bca logging::LogMessage::~LogMessage()
#7 0x55ec4a4a92b1 content::ZygoteHostImpl::Init()
#8 0x55ec4a11bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ec4a121a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ec4f24b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ec4b13ba00 content::RunNamedProcessTypeMain()
#12 0x55ec4b13c2e8 content::ContentMainRunnerImpl::Run()
#13 0x55ec4b145f24 service_manager::Main()
#14 0x55ec4b13af14 content::ContentMain()
#15 0x55ec4f24a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ec4f24aa42 headless::HeadlessBrowserMain()
#17 0x55ec4b142f9d headless::HeadlessShellMain()
#18 0x55ec497a11ac ChromeMain
#19 0x7f812a6742e1 __libc_start_main
#20 0x55ec497a102a _start
  r8: 0000000000000000  r9: 00007fff9de4bb10 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff9de4c208 r13: 0000000000000161 r14: 00007fff9de4c210 r15: 00007fff9de4bda9
  di: 0000000000000002  si: 00007fff9de4bb10  bp: 00007fff9de4bd50  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f812a686fff  sp: 00007fff9de4bb88
  ip: 00007f812a686fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020623.471602:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ec4b400b0c base::debug::StackTrace::StackTrace()
#1 0x55ec4b419780 logging::LogMessage::~LogMessage()
#2 0x55ec4a4a92b1 content::ZygoteHostImpl::Init()
#3 0x55ec4a11bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ec4a121a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ec4f24b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ec4b13ba00 content::RunNamedProcessTypeMain()
#7 0x55ec4b13c2e8 content::ContentMainRunnerImpl::Run()
#8 0x55ec4b145f24 service_manager::Main()
#9 0x55ec4b13af14 content::ContentMain()
#10 0x55ec4f24a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ec4f24aa42 headless::HeadlessBrowserMain()
#12 0x55ec4b142f9d headless::HeadlessShellMain()
#13 0x55ec497a11ac ChromeMain
#14 0x7f812a6742e1 __libc_start_main
#15 0x55ec497a102a _start

Received signal 6
#0 0x55ec4b400b0c base::debug::StackTrace::StackTrace()
#1 0x55ec4b400671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f81305d10c0 <unknown>
#3 0x7f812a686fff gsignal
#4 0x7f812a68842a abort
#5 0x55ec4b3ff105 base::debug::BreakDebugger()
#6 0x55ec4b419bca logging::LogMessage::~LogMessage()
#7 0x55ec4a4a92b1 content::ZygoteHostImpl::Init()
#8 0x55ec4a11bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ec4a121a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ec4f24b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ec4b13ba00 content::RunNamedProcessTypeMain()
#12 0x55ec4b13c2e8 content::ContentMainRunnerImpl::Run()
#13 0x55ec4b145f24 service_manager::Main()
#14 0x55ec4b13af14 content::ContentMain()
#15 0x55ec4f24a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ec4f24aa42 headless::HeadlessBrowserMain()
#17 0x55ec4b142f9d headless::HeadlessShellMain()
#18 0x55ec497a11ac ChromeMain
#19 0x7f812a6742e1 __libc_start_main
#20 0x55ec497a102a _start
  r8: 0000000000000000  r9: 00007fff9de4bb10 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff9de4c208 r13: 0000000000000161 r14: 00007fff9de4c210 r15: 00007fff9de4bda9
  di: 0000000000000002  si: 00007fff9de4bb10  bp: 00007fff9de4bd50  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f812a686fff  sp: 00007fff9de4bb88
  ip: 00007f812a686fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020552.970286:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5609abdd3b0c base::debug::StackTrace::StackTrace()
#1 0x5609abdec780 logging::LogMessage::~LogMessage()
#2 0x5609aae7c2b1 content::ZygoteHostImpl::Init()
#3 0x5609aaaeec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5609aaaf4a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5609afc1e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5609abb0ea00 content::RunNamedProcessTypeMain()
#7 0x5609abb0f2e8 content::ContentMainRunnerImpl::Run()
#8 0x5609abb18f24 service_manager::Main()
#9 0x5609abb0df14 content::ContentMain()
#10 0x5609afc1d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5609afc1da42 headless::HeadlessBrowserMain()
#12 0x5609abb15f9d headless::HeadlessShellMain()
#13 0x5609aa1741ac ChromeMain
#14 0x7fd60b12e2e1 __libc_start_main
#15 0x5609aa17402a _start

Received signal 6
#0 0x5609abdd3b0c base::debug::StackTrace::StackTrace()
#1 0x5609abdd3671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd61108b0c0 <unknown>
#3 0x7fd60b140fff gsignal
#4 0x7fd60b14242a abort
#5 0x5609abdd2105 base::debug::BreakDebugger()
#6 0x5609abdecbca logging::LogMessage::~LogMessage()
#7 0x5609aae7c2b1 content::ZygoteHostImpl::Init()
#8 0x5609aaaeec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5609aaaf4a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5609afc1e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5609abb0ea00 content::RunNamedProcessTypeMain()
#12 0x5609abb0f2e8 content::ContentMainRunnerImpl::Run()
#13 0x5609abb18f24 service_manager::Main()
#14 0x5609abb0df14 content::ContentMain()
#15 0x5609afc1d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5609afc1da42 headless::HeadlessBrowserMain()
#17 0x5609abb15f9d headless::HeadlessShellMain()
#18 0x5609aa1741ac ChromeMain
#19 0x7fd60b12e2e1 __libc_start_main
#20 0x5609aa17402a _start
  r8: 0000000000000000  r9: 00007ffd5322dc10 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd5322e308 r13: 0000000000000161 r14: 00007ffd5322e310 r15: 00007ffd5322dea9
  di: 0000000000000002  si: 00007ffd5322dc10  bp: 00007ffd5322de50  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd60b140fff  sp: 00007ffd5322dc88
  ip: 00007fd60b140fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020552.970286:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5609abdd3b0c base::debug::StackTrace::StackTrace()
#1 0x5609abdec780 logging::LogMessage::~LogMessage()
#2 0x5609aae7c2b1 content::ZygoteHostImpl::Init()
#3 0x5609aaaeec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5609aaaf4a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5609afc1e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5609abb0ea00 content::RunNamedProcessTypeMain()
#7 0x5609abb0f2e8 content::ContentMainRunnerImpl::Run()
#8 0x5609abb18f24 service_manager::Main()
#9 0x5609abb0df14 content::ContentMain()
#10 0x5609afc1d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5609afc1da42 headless::HeadlessBrowserMain()
#12 0x5609abb15f9d headless::HeadlessShellMain()
#13 0x5609aa1741ac ChromeMain
#14 0x7fd60b12e2e1 __libc_start_main
#15 0x5609aa17402a _start

Received signal 6
#0 0x5609abdd3b0c base::debug::StackTrace::StackTrace()
#1 0x5609abdd3671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd61108b0c0 <unknown>
#3 0x7fd60b140fff gsignal
#4 0x7fd60b14242a abort
#5 0x5609abdd2105 base::debug::BreakDebugger()
#6 0x5609abdecbca logging::LogMessage::~LogMessage()
#7 0x5609aae7c2b1 content::ZygoteHostImpl::Init()
#8 0x5609aaaeec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5609aaaf4a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5609afc1e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5609abb0ea00 content::RunNamedProcessTypeMain()
#12 0x5609abb0f2e8 content::ContentMainRunnerImpl::Run()
#13 0x5609abb18f24 service_manager::Main()
#14 0x5609abb0df14 content::ContentMain()
#15 0x5609afc1d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5609afc1da42 headless::HeadlessBrowserMain()
#17 0x5609abb15f9d headless::HeadlessShellMain()
#18 0x5609aa1741ac ChromeMain
#19 0x7fd60b12e2e1 __libc_start_main
#20 0x5609aa17402a _start
  r8: 0000000000000000  r9: 00007ffd5322dc10 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd5322e308 r13: 0000000000000161 r14: 00007ffd5322e310 r15: 00007ffd5322dea9
  di: 0000000000000002  si: 00007ffd5322dc10  bp: 00007ffd5322de50  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd60b140fff  sp: 00007ffd5322dc88
  ip: 00007fd60b140fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020524.102242:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ad78e79b0c base::debug::StackTrace::StackTrace()
#1 0x55ad78e92780 logging::LogMessage::~LogMessage()
#2 0x55ad77f222b1 content::ZygoteHostImpl::Init()
#3 0x55ad77b94c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ad77b9aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ad7ccc49a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ad78bb4a00 content::RunNamedProcessTypeMain()
#7 0x55ad78bb52e8 content::ContentMainRunnerImpl::Run()
#8 0x55ad78bbef24 service_manager::Main()
#9 0x55ad78bb3f14 content::ContentMain()
#10 0x55ad7ccc39b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ad7ccc3a42 headless::HeadlessBrowserMain()
#12 0x55ad78bbbf9d headless::HeadlessShellMain()
#13 0x55ad7721a1ac ChromeMain
#14 0x7fbaa42b52e1 __libc_start_main
#15 0x55ad7721a02a _start

Received signal 6
#0 0x55ad78e79b0c base::debug::StackTrace::StackTrace()
#1 0x55ad78e79671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fbaaa2120c0 <unknown>
#3 0x7fbaa42c7fff gsignal
#4 0x7fbaa42c942a abort
#5 0x55ad78e78105 base::debug::BreakDebugger()
#6 0x55ad78e92bca logging::LogMessage::~LogMessage()
#7 0x55ad77f222b1 content::ZygoteHostImpl::Init()
#8 0x55ad77b94c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ad77b9aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ad7ccc49a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ad78bb4a00 content::RunNamedProcessTypeMain()
#12 0x55ad78bb52e8 content::ContentMainRunnerImpl::Run()
#13 0x55ad78bbef24 service_manager::Main()
#14 0x55ad78bb3f14 content::ContentMain()
#15 0x55ad7ccc39b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ad7ccc3a42 headless::HeadlessBrowserMain()
#17 0x55ad78bbbf9d headless::HeadlessShellMain()
#18 0x55ad7721a1ac ChromeMain
#19 0x7fbaa42b52e1 __libc_start_main
#20 0x55ad7721a02a _start
  r8: 0000000000000000  r9: 00007ffc827c5ac0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc827c61b8 r13: 0000000000000161 r14: 00007ffc827c61c0 r15: 00007ffc827c5d59
  di: 0000000000000002  si: 00007ffc827c5ac0  bp: 00007ffc827c5d00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fbaa42c7fff  sp: 00007ffc827c5b38
  ip: 00007fbaa42c7fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020524.102242:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ad78e79b0c base::debug::StackTrace::StackTrace()
#1 0x55ad78e92780 logging::LogMessage::~LogMessage()
#2 0x55ad77f222b1 content::ZygoteHostImpl::Init()
#3 0x55ad77b94c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ad77b9aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ad7ccc49a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ad78bb4a00 content::RunNamedProcessTypeMain()
#7 0x55ad78bb52e8 content::ContentMainRunnerImpl::Run()
#8 0x55ad78bbef24 service_manager::Main()
#9 0x55ad78bb3f14 content::ContentMain()
#10 0x55ad7ccc39b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ad7ccc3a42 headless::HeadlessBrowserMain()
#12 0x55ad78bbbf9d headless::HeadlessShellMain()
#13 0x55ad7721a1ac ChromeMain
#14 0x7fbaa42b52e1 __libc_start_main
#15 0x55ad7721a02a _start

Received signal 6
#0 0x55ad78e79b0c base::debug::StackTrace::StackTrace()
#1 0x55ad78e79671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fbaaa2120c0 <unknown>
#3 0x7fbaa42c7fff gsignal
#4 0x7fbaa42c942a abort
#5 0x55ad78e78105 base::debug::BreakDebugger()
#6 0x55ad78e92bca logging::LogMessage::~LogMessage()
#7 0x55ad77f222b1 content::ZygoteHostImpl::Init()
#8 0x55ad77b94c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ad77b9aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ad7ccc49a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ad78bb4a00 content::RunNamedProcessTypeMain()
#12 0x55ad78bb52e8 content::ContentMainRunnerImpl::Run()
#13 0x55ad78bbef24 service_manager::Main()
#14 0x55ad78bb3f14 content::ContentMain()
#15 0x55ad7ccc39b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ad7ccc3a42 headless::HeadlessBrowserMain()
#17 0x55ad78bbbf9d headless::HeadlessShellMain()
#18 0x55ad7721a1ac ChromeMain
#19 0x7fbaa42b52e1 __libc_start_main
#20 0x55ad7721a02a _start
  r8: 0000000000000000  r9: 00007ffc827c5ac0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc827c61b8 r13: 0000000000000161 r14: 00007ffc827c61c0 r15: 00007ffc827c5d59
  di: 0000000000000002  si: 00007ffc827c5ac0  bp: 00007ffc827c5d00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fbaa42c7fff  sp: 00007ffc827c5b38
  ip: 00007fbaa42c7fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020535.514532:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f4b5075b0c base::debug::StackTrace::StackTrace()
#1 0x55f4b508e780 logging::LogMessage::~LogMessage()
#2 0x55f4b411e2b1 content::ZygoteHostImpl::Init()
#3 0x55f4b3d90c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f4b3d96a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f4b8ec09a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f4b4db0a00 content::RunNamedProcessTypeMain()
#7 0x55f4b4db12e8 content::ContentMainRunnerImpl::Run()
#8 0x55f4b4dbaf24 service_manager::Main()
#9 0x55f4b4daff14 content::ContentMain()
#10 0x55f4b8ebf9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f4b8ebfa42 headless::HeadlessBrowserMain()
#12 0x55f4b4db7f9d headless::HeadlessShellMain()
#13 0x55f4b34161ac ChromeMain
#14 0x7fab2fc4f2e1 __libc_start_main
#15 0x55f4b341602a _start

Received signal 6
#0 0x55f4b5075b0c base::debug::StackTrace::StackTrace()
#1 0x55f4b5075671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fab35bac0c0 <unknown>
#3 0x7fab2fc61fff gsignal
#4 0x7fab2fc6342a abort
#5 0x55f4b5074105 base::debug::BreakDebugger()
#6 0x55f4b508ebca logging::LogMessage::~LogMessage()
#7 0x55f4b411e2b1 content::ZygoteHostImpl::Init()
#8 0x55f4b3d90c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f4b3d96a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f4b8ec09a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f4b4db0a00 content::RunNamedProcessTypeMain()
#12 0x55f4b4db12e8 content::ContentMainRunnerImpl::Run()
#13 0x55f4b4dbaf24 service_manager::Main()
#14 0x55f4b4daff14 content::ContentMain()
#15 0x55f4b8ebf9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f4b8ebfa42 headless::HeadlessBrowserMain()
#17 0x55f4b4db7f9d headless::HeadlessShellMain()
#18 0x55f4b34161ac ChromeMain
#19 0x7fab2fc4f2e1 __libc_start_main
#20 0x55f4b341602a _start
  r8: 0000000000000000  r9: 00007ffcca0244a0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcca024b98 r13: 0000000000000161 r14: 00007ffcca024ba0 r15: 00007ffcca024739
  di: 0000000000000002  si: 00007ffcca0244a0  bp: 00007ffcca0246e0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fab2fc61fff  sp: 00007ffcca024518
  ip: 00007fab2fc61fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020535.514532:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f4b5075b0c base::debug::StackTrace::StackTrace()
#1 0x55f4b508e780 logging::LogMessage::~LogMessage()
#2 0x55f4b411e2b1 content::ZygoteHostImpl::Init()
#3 0x55f4b3d90c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f4b3d96a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f4b8ec09a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f4b4db0a00 content::RunNamedProcessTypeMain()
#7 0x55f4b4db12e8 content::ContentMainRunnerImpl::Run()
#8 0x55f4b4dbaf24 service_manager::Main()
#9 0x55f4b4daff14 content::ContentMain()
#10 0x55f4b8ebf9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f4b8ebfa42 headless::HeadlessBrowserMain()
#12 0x55f4b4db7f9d headless::HeadlessShellMain()
#13 0x55f4b34161ac ChromeMain
#14 0x7fab2fc4f2e1 __libc_start_main
#15 0x55f4b341602a _start

Received signal 6
#0 0x55f4b5075b0c base::debug::StackTrace::StackTrace()
#1 0x55f4b5075671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fab35bac0c0 <unknown>
#3 0x7fab2fc61fff gsignal
#4 0x7fab2fc6342a abort
#5 0x55f4b5074105 base::debug::BreakDebugger()
#6 0x55f4b508ebca logging::LogMessage::~LogMessage()
#7 0x55f4b411e2b1 content::ZygoteHostImpl::Init()
#8 0x55f4b3d90c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f4b3d96a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f4b8ec09a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f4b4db0a00 content::RunNamedProcessTypeMain()
#12 0x55f4b4db12e8 content::ContentMainRunnerImpl::Run()
#13 0x55f4b4dbaf24 service_manager::Main()
#14 0x55f4b4daff14 content::ContentMain()
#15 0x55f4b8ebf9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f4b8ebfa42 headless::HeadlessBrowserMain()
#17 0x55f4b4db7f9d headless::HeadlessShellMain()
#18 0x55f4b34161ac ChromeMain
#19 0x7fab2fc4f2e1 __libc_start_main
#20 0x55f4b341602a _start
  r8: 0000000000000000  r9: 00007ffcca0244a0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcca024b98 r13: 0000000000000161 r14: 00007ffcca024ba0 r15: 00007ffcca024739
  di: 0000000000000002  si: 00007ffcca0244a0  bp: 00007ffcca0246e0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fab2fc61fff  sp: 00007ffcca024518
  ip: 00007fab2fc61fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020537.837084:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55bc4d793b0c base::debug::StackTrace::StackTrace()
#1 0x55bc4d7ac780 logging::LogMessage::~LogMessage()
#2 0x55bc4c83c2b1 content::ZygoteHostImpl::Init()
#3 0x55bc4c4aec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55bc4c4b4a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55bc515de9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55bc4d4cea00 content::RunNamedProcessTypeMain()
#7 0x55bc4d4cf2e8 content::ContentMainRunnerImpl::Run()
#8 0x55bc4d4d8f24 service_manager::Main()
#9 0x55bc4d4cdf14 content::ContentMain()
#10 0x55bc515dd9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55bc515dda42 headless::HeadlessBrowserMain()
#12 0x55bc4d4d5f9d headless::HeadlessShellMain()
#13 0x55bc4bb341ac ChromeMain
#14 0x7f19a15ae2e1 __libc_start_main
#15 0x55bc4bb3402a _start

Received signal 6
#0 0x55bc4d793b0c base::debug::StackTrace::StackTrace()
#1 0x55bc4d793671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f19a750b0c0 <unknown>
#3 0x7f19a15c0fff gsignal
#4 0x7f19a15c242a abort
#5 0x55bc4d792105 base::debug::BreakDebugger()
#6 0x55bc4d7acbca logging::LogMessage::~LogMessage()
#7 0x55bc4c83c2b1 content::ZygoteHostImpl::Init()
#8 0x55bc4c4aec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55bc4c4b4a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55bc515de9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55bc4d4cea00 content::RunNamedProcessTypeMain()
#12 0x55bc4d4cf2e8 content::ContentMainRunnerImpl::Run()
#13 0x55bc4d4d8f24 service_manager::Main()
#14 0x55bc4d4cdf14 content::ContentMain()
#15 0x55bc515dd9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55bc515dda42 headless::HeadlessBrowserMain()
#17 0x55bc4d4d5f9d headless::HeadlessShellMain()
#18 0x55bc4bb341ac ChromeMain
#19 0x7f19a15ae2e1 __libc_start_main
#20 0x55bc4bb3402a _start
  r8: 0000000000000000  r9: 00007ffedda73340 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffedda73a38 r13: 0000000000000161 r14: 00007ffedda73a40 r15: 00007ffedda735d9
  di: 0000000000000002  si: 00007ffedda73340  bp: 00007ffedda73580  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f19a15c0fff  sp: 00007ffedda733b8
  ip: 00007f19a15c0fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020537.837084:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55bc4d793b0c base::debug::StackTrace::StackTrace()
#1 0x55bc4d7ac780 logging::LogMessage::~LogMessage()
#2 0x55bc4c83c2b1 content::ZygoteHostImpl::Init()
#3 0x55bc4c4aec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55bc4c4b4a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55bc515de9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55bc4d4cea00 content::RunNamedProcessTypeMain()
#7 0x55bc4d4cf2e8 content::ContentMainRunnerImpl::Run()
#8 0x55bc4d4d8f24 service_manager::Main()
#9 0x55bc4d4cdf14 content::ContentMain()
#10 0x55bc515dd9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55bc515dda42 headless::HeadlessBrowserMain()
#12 0x55bc4d4d5f9d headless::HeadlessShellMain()
#13 0x55bc4bb341ac ChromeMain
#14 0x7f19a15ae2e1 __libc_start_main
#15 0x55bc4bb3402a _start

Received signal 6
#0 0x55bc4d793b0c base::debug::StackTrace::StackTrace()
#1 0x55bc4d793671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f19a750b0c0 <unknown>
#3 0x7f19a15c0fff gsignal
#4 0x7f19a15c242a abort
#5 0x55bc4d792105 base::debug::BreakDebugger()
#6 0x55bc4d7acbca logging::LogMessage::~LogMessage()
#7 0x55bc4c83c2b1 content::ZygoteHostImpl::Init()
#8 0x55bc4c4aec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55bc4c4b4a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55bc515de9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55bc4d4cea00 content::RunNamedProcessTypeMain()
#12 0x55bc4d4cf2e8 content::ContentMainRunnerImpl::Run()
#13 0x55bc4d4d8f24 service_manager::Main()
#14 0x55bc4d4cdf14 content::ContentMain()
#15 0x55bc515dd9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55bc515dda42 headless::HeadlessBrowserMain()
#17 0x55bc4d4d5f9d headless::HeadlessShellMain()
#18 0x55bc4bb341ac ChromeMain
#19 0x7f19a15ae2e1 __libc_start_main
#20 0x55bc4bb3402a _start
  r8: 0000000000000000  r9: 00007ffedda73340 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffedda73a38 r13: 0000000000000161 r14: 00007ffedda73a40 r15: 00007ffedda735d9
  di: 0000000000000002  si: 00007ffedda73340  bp: 00007ffedda73580  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f19a15c0fff  sp: 00007ffedda733b8
  ip: 00007f19a15c0fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020536.952369:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55bd8794db0c base::debug::StackTrace::StackTrace()
#1 0x55bd87966780 logging::LogMessage::~LogMessage()
#2 0x55bd869f62b1 content::ZygoteHostImpl::Init()
#3 0x55bd86668c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55bd8666ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55bd8b7989a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55bd87688a00 content::RunNamedProcessTypeMain()
#7 0x55bd876892e8 content::ContentMainRunnerImpl::Run()
#8 0x55bd87692f24 service_manager::Main()
#9 0x55bd87687f14 content::ContentMain()
#10 0x55bd8b7979b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55bd8b797a42 headless::HeadlessBrowserMain()
#12 0x55bd8768ff9d headless::HeadlessShellMain()
#13 0x55bd85cee1ac ChromeMain
#14 0x7fd2ad1db2e1 __libc_start_main
#15 0x55bd85cee02a _start

Received signal 6
#0 0x55bd8794db0c base::debug::StackTrace::StackTrace()
#1 0x55bd8794d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd2b31380c0 <unknown>
#3 0x7fd2ad1edfff gsignal
#4 0x7fd2ad1ef42a abort
#5 0x55bd8794c105 base::debug::BreakDebugger()
#6 0x55bd87966bca logging::LogMessage::~LogMessage()
#7 0x55bd869f62b1 content::ZygoteHostImpl::Init()
#8 0x55bd86668c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55bd8666ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55bd8b7989a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55bd87688a00 content::RunNamedProcessTypeMain()
#12 0x55bd876892e8 content::ContentMainRunnerImpl::Run()
#13 0x55bd87692f24 service_manager::Main()
#14 0x55bd87687f14 content::ContentMain()
#15 0x55bd8b7979b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55bd8b797a42 headless::HeadlessBrowserMain()
#17 0x55bd8768ff9d headless::HeadlessShellMain()
#18 0x55bd85cee1ac ChromeMain
#19 0x7fd2ad1db2e1 __libc_start_main
#20 0x55bd85cee02a _start
  r8: 0000000000000000  r9: 00007ffda0f52a00 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffda0f530f8 r13: 0000000000000161 r14: 00007ffda0f53100 r15: 00007ffda0f52c99
  di: 0000000000000002  si: 00007ffda0f52a00  bp: 00007ffda0f52c40  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd2ad1edfff  sp: 00007ffda0f52a78
  ip: 00007fd2ad1edfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020536.952369:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55bd8794db0c base::debug::StackTrace::StackTrace()
#1 0x55bd87966780 logging::LogMessage::~LogMessage()
#2 0x55bd869f62b1 content::ZygoteHostImpl::Init()
#3 0x55bd86668c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55bd8666ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55bd8b7989a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55bd87688a00 content::RunNamedProcessTypeMain()
#7 0x55bd876892e8 content::ContentMainRunnerImpl::Run()
#8 0x55bd87692f24 service_manager::Main()
#9 0x55bd87687f14 content::ContentMain()
#10 0x55bd8b7979b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55bd8b797a42 headless::HeadlessBrowserMain()
#12 0x55bd8768ff9d headless::HeadlessShellMain()
#13 0x55bd85cee1ac ChromeMain
#14 0x7fd2ad1db2e1 __libc_start_main
#15 0x55bd85cee02a _start

Received signal 6
#0 0x55bd8794db0c base::debug::StackTrace::StackTrace()
#1 0x55bd8794d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd2b31380c0 <unknown>
#3 0x7fd2ad1edfff gsignal
#4 0x7fd2ad1ef42a abort
#5 0x55bd8794c105 base::debug::BreakDebugger()
#6 0x55bd87966bca logging::LogMessage::~LogMessage()
#7 0x55bd869f62b1 content::ZygoteHostImpl::Init()
#8 0x55bd86668c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55bd8666ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55bd8b7989a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55bd87688a00 content::RunNamedProcessTypeMain()
#12 0x55bd876892e8 content::ContentMainRunnerImpl::Run()
#13 0x55bd87692f24 service_manager::Main()
#14 0x55bd87687f14 content::ContentMain()
#15 0x55bd8b7979b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55bd8b797a42 headless::HeadlessBrowserMain()
#17 0x55bd8768ff9d headless::HeadlessShellMain()
#18 0x55bd85cee1ac ChromeMain
#19 0x7fd2ad1db2e1 __libc_start_main
#20 0x55bd85cee02a _start
  r8: 0000000000000000  r9: 00007ffda0f52a00 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffda0f530f8 r13: 0000000000000161 r14: 00007ffda0f53100 r15: 00007ffda0f52c99
  di: 0000000000000002  si: 00007ffda0f52a00  bp: 00007ffda0f52c40  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd2ad1edfff  sp: 00007ffda0f52a78
  ip: 00007fd2ad1edfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020541.296388:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556d7667bb0c base::debug::StackTrace::StackTrace()
#1 0x556d76694780 logging::LogMessage::~LogMessage()
#2 0x556d757242b1 content::ZygoteHostImpl::Init()
#3 0x556d75396c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556d7539ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556d7a4c69a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556d763b6a00 content::RunNamedProcessTypeMain()
#7 0x556d763b72e8 content::ContentMainRunnerImpl::Run()
#8 0x556d763c0f24 service_manager::Main()
#9 0x556d763b5f14 content::ContentMain()
#10 0x556d7a4c59b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556d7a4c5a42 headless::HeadlessBrowserMain()
#12 0x556d763bdf9d headless::HeadlessShellMain()
#13 0x556d74a1c1ac ChromeMain
#14 0x7fc335fe32e1 __libc_start_main
#15 0x556d74a1c02a _start

Received signal 6
#0 0x556d7667bb0c base::debug::StackTrace::StackTrace()
#1 0x556d7667b671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc33bf400c0 <unknown>
#3 0x7fc335ff5fff gsignal
#4 0x7fc335ff742a abort
#5 0x556d7667a105 base::debug::BreakDebugger()
#6 0x556d76694bca logging::LogMessage::~LogMessage()
#7 0x556d757242b1 content::ZygoteHostImpl::Init()
#8 0x556d75396c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556d7539ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556d7a4c69a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556d763b6a00 content::RunNamedProcessTypeMain()
#12 0x556d763b72e8 content::ContentMainRunnerImpl::Run()
#13 0x556d763c0f24 service_manager::Main()
#14 0x556d763b5f14 content::ContentMain()
#15 0x556d7a4c59b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556d7a4c5a42 headless::HeadlessBrowserMain()
#17 0x556d763bdf9d headless::HeadlessShellMain()
#18 0x556d74a1c1ac ChromeMain
#19 0x7fc335fe32e1 __libc_start_main
#20 0x556d74a1c02a _start
  r8: 0000000000000000  r9: 00007ffec7361dd0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffec73624c8 r13: 0000000000000161 r14: 00007ffec73624d0 r15: 00007ffec7362069
  di: 0000000000000002  si: 00007ffec7361dd0  bp: 00007ffec7362010  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc335ff5fff  sp: 00007ffec7361e48
  ip: 00007fc335ff5fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020541.296388:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556d7667bb0c base::debug::StackTrace::StackTrace()
#1 0x556d76694780 logging::LogMessage::~LogMessage()
#2 0x556d757242b1 content::ZygoteHostImpl::Init()
#3 0x556d75396c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556d7539ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556d7a4c69a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556d763b6a00 content::RunNamedProcessTypeMain()
#7 0x556d763b72e8 content::ContentMainRunnerImpl::Run()
#8 0x556d763c0f24 service_manager::Main()
#9 0x556d763b5f14 content::ContentMain()
#10 0x556d7a4c59b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556d7a4c5a42 headless::HeadlessBrowserMain()
#12 0x556d763bdf9d headless::HeadlessShellMain()
#13 0x556d74a1c1ac ChromeMain
#14 0x7fc335fe32e1 __libc_start_main
#15 0x556d74a1c02a _start

Received signal 6
#0 0x556d7667bb0c base::debug::StackTrace::StackTrace()
#1 0x556d7667b671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc33bf400c0 <unknown>
#3 0x7fc335ff5fff gsignal
#4 0x7fc335ff742a abort
#5 0x556d7667a105 base::debug::BreakDebugger()
#6 0x556d76694bca logging::LogMessage::~LogMessage()
#7 0x556d757242b1 content::ZygoteHostImpl::Init()
#8 0x556d75396c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556d7539ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556d7a4c69a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556d763b6a00 content::RunNamedProcessTypeMain()
#12 0x556d763b72e8 content::ContentMainRunnerImpl::Run()
#13 0x556d763c0f24 service_manager::Main()
#14 0x556d763b5f14 content::ContentMain()
#15 0x556d7a4c59b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556d7a4c5a42 headless::HeadlessBrowserMain()
#17 0x556d763bdf9d headless::HeadlessShellMain()
#18 0x556d74a1c1ac ChromeMain
#19 0x7fc335fe32e1 __libc_start_main
#20 0x556d74a1c02a _start
  r8: 0000000000000000  r9: 00007ffec7361dd0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffec73624c8 r13: 0000000000000161 r14: 00007ffec73624d0 r15: 00007ffec7362069
  di: 0000000000000002  si: 00007ffec7361dd0  bp: 00007ffec7362010  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc335ff5fff  sp: 00007ffec7361e48
  ip: 00007fc335ff5fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020541.311435:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558b7740db0c base::debug::StackTrace::StackTrace()
#1 0x558b77426780 logging::LogMessage::~LogMessage()
#2 0x558b764b62b1 content::ZygoteHostImpl::Init()
#3 0x558b76128c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558b7612ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558b7b2589a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558b77148a00 content::RunNamedProcessTypeMain()
#7 0x558b771492e8 content::ContentMainRunnerImpl::Run()
#8 0x558b77152f24 service_manager::Main()
#9 0x558b77147f14 content::ContentMain()
#10 0x558b7b2579b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558b7b257a42 headless::HeadlessBrowserMain()
#12 0x558b7714ff9d headless::HeadlessShellMain()
#13 0x558b757ae1ac ChromeMain
#14 0x7fb0b8b2b2e1 __libc_start_main
#15 0x558b757ae02a _start

Received signal 6
#0 0x558b7740db0c base::debug::StackTrace::StackTrace()
#1 0x558b7740d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb0bea880c0 <unknown>
#3 0x7fb0b8b3dfff gsignal
#4 0x7fb0b8b3f42a abort
#5 0x558b7740c105 base::debug::BreakDebugger()
#6 0x558b77426bca logging::LogMessage::~LogMessage()
#7 0x558b764b62b1 content::ZygoteHostImpl::Init()
#8 0x558b76128c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558b7612ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558b7b2589a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558b77148a00 content::RunNamedProcessTypeMain()
#12 0x558b771492e8 content::ContentMainRunnerImpl::Run()
#13 0x558b77152f24 service_manager::Main()
#14 0x558b77147f14 content::ContentMain()
#15 0x558b7b2579b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558b7b257a42 headless::HeadlessBrowserMain()
#17 0x558b7714ff9d headless::HeadlessShellMain()
#18 0x558b757ae1ac ChromeMain
#19 0x7fb0b8b2b2e1 __libc_start_main
#20 0x558b757ae02a _start
  r8: 0000000000000000  r9: 00007ffcedbd69d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcedbd70c8 r13: 0000000000000161 r14: 00007ffcedbd70d0 r15: 00007ffcedbd6c69
  di: 0000000000000002  si: 00007ffcedbd69d0  bp: 00007ffcedbd6c10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb0b8b3dfff  sp: 00007ffcedbd6a48
  ip: 00007fb0b8b3dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020541.311435:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558b7740db0c base::debug::StackTrace::StackTrace()
#1 0x558b77426780 logging::LogMessage::~LogMessage()
#2 0x558b764b62b1 content::ZygoteHostImpl::Init()
#3 0x558b76128c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558b7612ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558b7b2589a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558b77148a00 content::RunNamedProcessTypeMain()
#7 0x558b771492e8 content::ContentMainRunnerImpl::Run()
#8 0x558b77152f24 service_manager::Main()
#9 0x558b77147f14 content::ContentMain()
#10 0x558b7b2579b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558b7b257a42 headless::HeadlessBrowserMain()
#12 0x558b7714ff9d headless::HeadlessShellMain()
#13 0x558b757ae1ac ChromeMain
#14 0x7fb0b8b2b2e1 __libc_start_main
#15 0x558b757ae02a _start

Received signal 6
#0 0x558b7740db0c base::debug::StackTrace::StackTrace()
#1 0x558b7740d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb0bea880c0 <unknown>
#3 0x7fb0b8b3dfff gsignal
#4 0x7fb0b8b3f42a abort
#5 0x558b7740c105 base::debug::BreakDebugger()
#6 0x558b77426bca logging::LogMessage::~LogMessage()
#7 0x558b764b62b1 content::ZygoteHostImpl::Init()
#8 0x558b76128c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558b7612ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558b7b2589a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558b77148a00 content::RunNamedProcessTypeMain()
#12 0x558b771492e8 content::ContentMainRunnerImpl::Run()
#13 0x558b77152f24 service_manager::Main()
#14 0x558b77147f14 content::ContentMain()
#15 0x558b7b2579b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558b7b257a42 headless::HeadlessBrowserMain()
#17 0x558b7714ff9d headless::HeadlessShellMain()
#18 0x558b757ae1ac ChromeMain
#19 0x7fb0b8b2b2e1 __libc_start_main
#20 0x558b757ae02a _start
  r8: 0000000000000000  r9: 00007ffcedbd69d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcedbd70c8 r13: 0000000000000161 r14: 00007ffcedbd70d0 r15: 00007ffcedbd6c69
  di: 0000000000000002  si: 00007ffcedbd69d0  bp: 00007ffcedbd6c10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb0b8b3dfff  sp: 00007ffcedbd6a48
  ip: 00007fb0b8b3dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020541.624469:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55cde66aab0c base::debug::StackTrace::StackTrace()
#1 0x55cde66c3780 logging::LogMessage::~LogMessage()
#2 0x55cde57532b1 content::ZygoteHostImpl::Init()
#3 0x55cde53c5c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55cde53cba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55cdea4f59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55cde63e5a00 content::RunNamedProcessTypeMain()
#7 0x55cde63e62e8 content::ContentMainRunnerImpl::Run()
#8 0x55cde63eff24 service_manager::Main()
#9 0x55cde63e4f14 content::ContentMain()
#10 0x55cdea4f49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55cdea4f4a42 headless::HeadlessBrowserMain()
#12 0x55cde63ecf9d headless::HeadlessShellMain()
#13 0x55cde4a4b1ac ChromeMain
#14 0x7f6da45942e1 __libc_start_main
#15 0x55cde4a4b02a _start

Received signal 6
#0 0x55cde66aab0c base::debug::StackTrace::StackTrace()
#1 0x55cde66aa671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f6daa4f10c0 <unknown>
#3 0x7f6da45a6fff gsignal
#4 0x7f6da45a842a abort
#5 0x55cde66a9105 base::debug::BreakDebugger()
#6 0x55cde66c3bca logging::LogMessage::~LogMessage()
#7 0x55cde57532b1 content::ZygoteHostImpl::Init()
#8 0x55cde53c5c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55cde53cba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55cdea4f59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55cde63e5a00 content::RunNamedProcessTypeMain()
#12 0x55cde63e62e8 content::ContentMainRunnerImpl::Run()
#13 0x55cde63eff24 service_manager::Main()
#14 0x55cde63e4f14 content::ContentMain()
#15 0x55cdea4f49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55cdea4f4a42 headless::HeadlessBrowserMain()
#17 0x55cde63ecf9d headless::HeadlessShellMain()
#18 0x55cde4a4b1ac ChromeMain
#19 0x7f6da45942e1 __libc_start_main
#20 0x55cde4a4b02a _start
  r8: 0000000000000000  r9: 00007ffec31edb70 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffec31ee268 r13: 0000000000000161 r14: 00007ffec31ee270 r15: 00007ffec31ede09
  di: 0000000000000002  si: 00007ffec31edb70  bp: 00007ffec31eddb0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f6da45a6fff  sp: 00007ffec31edbe8
  ip: 00007f6da45a6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020541.624469:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55cde66aab0c base::debug::StackTrace::StackTrace()
#1 0x55cde66c3780 logging::LogMessage::~LogMessage()
#2 0x55cde57532b1 content::ZygoteHostImpl::Init()
#3 0x55cde53c5c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55cde53cba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55cdea4f59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55cde63e5a00 content::RunNamedProcessTypeMain()
#7 0x55cde63e62e8 content::ContentMainRunnerImpl::Run()
#8 0x55cde63eff24 service_manager::Main()
#9 0x55cde63e4f14 content::ContentMain()
#10 0x55cdea4f49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55cdea4f4a42 headless::HeadlessBrowserMain()
#12 0x55cde63ecf9d headless::HeadlessShellMain()
#13 0x55cde4a4b1ac ChromeMain
#14 0x7f6da45942e1 __libc_start_main
#15 0x55cde4a4b02a _start

Received signal 6
#0 0x55cde66aab0c base::debug::StackTrace::StackTrace()
#1 0x55cde66aa671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f6daa4f10c0 <unknown>
#3 0x7f6da45a6fff gsignal
#4 0x7f6da45a842a abort
#5 0x55cde66a9105 base::debug::BreakDebugger()
#6 0x55cde66c3bca logging::LogMessage::~LogMessage()
#7 0x55cde57532b1 content::ZygoteHostImpl::Init()
#8 0x55cde53c5c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55cde53cba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55cdea4f59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55cde63e5a00 content::RunNamedProcessTypeMain()
#12 0x55cde63e62e8 content::ContentMainRunnerImpl::Run()
#13 0x55cde63eff24 service_manager::Main()
#14 0x55cde63e4f14 content::ContentMain()
#15 0x55cdea4f49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55cdea4f4a42 headless::HeadlessBrowserMain()
#17 0x55cde63ecf9d headless::HeadlessShellMain()
#18 0x55cde4a4b1ac ChromeMain
#19 0x7f6da45942e1 __libc_start_main
#20 0x55cde4a4b02a _start
  r8: 0000000000000000  r9: 00007ffec31edb70 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffec31ee268 r13: 0000000000000161 r14: 00007ffec31ee270 r15: 00007ffec31ede09
  di: 0000000000000002  si: 00007ffec31edb70  bp: 00007ffec31eddb0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f6da45a6fff  sp: 00007ffec31edbe8
  ip: 00007f6da45a6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020541.383117:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5650d733eb0c base::debug::StackTrace::StackTrace()
#1 0x5650d7357780 logging::LogMessage::~LogMessage()
#2 0x5650d63e72b1 content::ZygoteHostImpl::Init()
#3 0x5650d6059c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5650d605fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5650db1899a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5650d7079a00 content::RunNamedProcessTypeMain()
#7 0x5650d707a2e8 content::ContentMainRunnerImpl::Run()
#8 0x5650d7083f24 service_manager::Main()
#9 0x5650d7078f14 content::ContentMain()
#10 0x5650db1889b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5650db188a42 headless::HeadlessBrowserMain()
#12 0x5650d7080f9d headless::HeadlessShellMain()
#13 0x5650d56df1ac ChromeMain
#14 0x7fc0b71a92e1 __libc_start_main
#15 0x5650d56df02a _start

Received signal 6
#0 0x5650d733eb0c base::debug::StackTrace::StackTrace()
#1 0x5650d733e671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc0bd1060c0 <unknown>
#3 0x7fc0b71bbfff gsignal
#4 0x7fc0b71bd42a abort
#5 0x5650d733d105 base::debug::BreakDebugger()
#6 0x5650d7357bca logging::LogMessage::~LogMessage()
#7 0x5650d63e72b1 content::ZygoteHostImpl::Init()
#8 0x5650d6059c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5650d605fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5650db1899a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5650d7079a00 content::RunNamedProcessTypeMain()
#12 0x5650d707a2e8 content::ContentMainRunnerImpl::Run()
#13 0x5650d7083f24 service_manager::Main()
#14 0x5650d7078f14 content::ContentMain()
#15 0x5650db1889b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5650db188a42 headless::HeadlessBrowserMain()
#17 0x5650d7080f9d headless::HeadlessShellMain()
#18 0x5650d56df1ac ChromeMain
#19 0x7fc0b71a92e1 __libc_start_main
#20 0x5650d56df02a _start
  r8: 0000000000000000  r9: 00007ffc16695580 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc16695c78 r13: 0000000000000161 r14: 00007ffc16695c80 r15: 00007ffc16695819
  di: 0000000000000002  si: 00007ffc16695580  bp: 00007ffc166957c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc0b71bbfff  sp: 00007ffc166955f8
  ip: 00007fc0b71bbfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020541.383117:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5650d733eb0c base::debug::StackTrace::StackTrace()
#1 0x5650d7357780 logging::LogMessage::~LogMessage()
#2 0x5650d63e72b1 content::ZygoteHostImpl::Init()
#3 0x5650d6059c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5650d605fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5650db1899a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5650d7079a00 content::RunNamedProcessTypeMain()
#7 0x5650d707a2e8 content::ContentMainRunnerImpl::Run()
#8 0x5650d7083f24 service_manager::Main()
#9 0x5650d7078f14 content::ContentMain()
#10 0x5650db1889b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5650db188a42 headless::HeadlessBrowserMain()
#12 0x5650d7080f9d headless::HeadlessShellMain()
#13 0x5650d56df1ac ChromeMain
#14 0x7fc0b71a92e1 __libc_start_main
#15 0x5650d56df02a _start

Received signal 6
#0 0x5650d733eb0c base::debug::StackTrace::StackTrace()
#1 0x5650d733e671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc0bd1060c0 <unknown>
#3 0x7fc0b71bbfff gsignal
#4 0x7fc0b71bd42a abort
#5 0x5650d733d105 base::debug::BreakDebugger()
#6 0x5650d7357bca logging::LogMessage::~LogMessage()
#7 0x5650d63e72b1 content::ZygoteHostImpl::Init()
#8 0x5650d6059c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5650d605fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5650db1899a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5650d7079a00 content::RunNamedProcessTypeMain()
#12 0x5650d707a2e8 content::ContentMainRunnerImpl::Run()
#13 0x5650d7083f24 service_manager::Main()
#14 0x5650d7078f14 content::ContentMain()
#15 0x5650db1889b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5650db188a42 headless::HeadlessBrowserMain()
#17 0x5650d7080f9d headless::HeadlessShellMain()
#18 0x5650d56df1ac ChromeMain
#19 0x7fc0b71a92e1 __libc_start_main
#20 0x5650d56df02a _start
  r8: 0000000000000000  r9: 00007ffc16695580 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc16695c78 r13: 0000000000000161 r14: 00007ffc16695c80 r15: 00007ffc16695819
  di: 0000000000000002  si: 00007ffc16695580  bp: 00007ffc166957c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc0b71bbfff  sp: 00007ffc166955f8
  ip: 00007fc0b71bbfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020541.960588:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55cc4883fb0c base::debug::StackTrace::StackTrace()
#1 0x55cc48858780 logging::LogMessage::~LogMessage()
#2 0x55cc478e82b1 content::ZygoteHostImpl::Init()
#3 0x55cc4755ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55cc47560a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55cc4c68a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55cc4857aa00 content::RunNamedProcessTypeMain()
#7 0x55cc4857b2e8 content::ContentMainRunnerImpl::Run()
#8 0x55cc48584f24 service_manager::Main()
#9 0x55cc48579f14 content::ContentMain()
#10 0x55cc4c6899b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55cc4c689a42 headless::HeadlessBrowserMain()
#12 0x55cc48581f9d headless::HeadlessShellMain()
#13 0x55cc46be01ac ChromeMain
#14 0x7fd43ab902e1 __libc_start_main
#15 0x55cc46be002a _start

Received signal 6
#0 0x55cc4883fb0c base::debug::StackTrace::StackTrace()
#1 0x55cc4883f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd440aed0c0 <unknown>
#3 0x7fd43aba2fff gsignal
#4 0x7fd43aba442a abort
#5 0x55cc4883e105 base::debug::BreakDebugger()
#6 0x55cc48858bca logging::LogMessage::~LogMessage()
#7 0x55cc478e82b1 content::ZygoteHostImpl::Init()
#8 0x55cc4755ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55cc47560a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55cc4c68a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55cc4857aa00 content::RunNamedProcessTypeMain()
#12 0x55cc4857b2e8 content::ContentMainRunnerImpl::Run()
#13 0x55cc48584f24 service_manager::Main()
#14 0x55cc48579f14 content::ContentMain()
#15 0x55cc4c6899b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55cc4c689a42 headless::HeadlessBrowserMain()
#17 0x55cc48581f9d headless::HeadlessShellMain()
#18 0x55cc46be01ac ChromeMain
#19 0x7fd43ab902e1 __libc_start_main
#20 0x55cc46be002a _start
  r8: 0000000000000000  r9: 00007ffcb72e7240 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcb72e7938 r13: 0000000000000161 r14: 00007ffcb72e7940 r15: 00007ffcb72e74d9
  di: 0000000000000002  si: 00007ffcb72e7240  bp: 00007ffcb72e7480  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd43aba2fff  sp: 00007ffcb72e72b8
  ip: 00007fd43aba2fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020541.960588:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55cc4883fb0c base::debug::StackTrace::StackTrace()
#1 0x55cc48858780 logging::LogMessage::~LogMessage()
#2 0x55cc478e82b1 content::ZygoteHostImpl::Init()
#3 0x55cc4755ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55cc47560a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55cc4c68a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55cc4857aa00 content::RunNamedProcessTypeMain()
#7 0x55cc4857b2e8 content::ContentMainRunnerImpl::Run()
#8 0x55cc48584f24 service_manager::Main()
#9 0x55cc48579f14 content::ContentMain()
#10 0x55cc4c6899b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55cc4c689a42 headless::HeadlessBrowserMain()
#12 0x55cc48581f9d headless::HeadlessShellMain()
#13 0x55cc46be01ac ChromeMain
#14 0x7fd43ab902e1 __libc_start_main
#15 0x55cc46be002a _start

Received signal 6
#0 0x55cc4883fb0c base::debug::StackTrace::StackTrace()
#1 0x55cc4883f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd440aed0c0 <unknown>
#3 0x7fd43aba2fff gsignal
#4 0x7fd43aba442a abort
#5 0x55cc4883e105 base::debug::BreakDebugger()
#6 0x55cc48858bca logging::LogMessage::~LogMessage()
#7 0x55cc478e82b1 content::ZygoteHostImpl::Init()
#8 0x55cc4755ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55cc47560a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55cc4c68a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55cc4857aa00 content::RunNamedProcessTypeMain()
#12 0x55cc4857b2e8 content::ContentMainRunnerImpl::Run()
#13 0x55cc48584f24 service_manager::Main()
#14 0x55cc48579f14 content::ContentMain()
#15 0x55cc4c6899b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55cc4c689a42 headless::HeadlessBrowserMain()
#17 0x55cc48581f9d headless::HeadlessShellMain()
#18 0x55cc46be01ac ChromeMain
#19 0x7fd43ab902e1 __libc_start_main
#20 0x55cc46be002a _start
  r8: 0000000000000000  r9: 00007ffcb72e7240 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcb72e7938 r13: 0000000000000161 r14: 00007ffcb72e7940 r15: 00007ffcb72e74d9
  di: 0000000000000002  si: 00007ffcb72e7240  bp: 00007ffcb72e7480  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd43aba2fff  sp: 00007ffcb72e72b8
  ip: 00007fd43aba2fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020541.981172:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56463fa1ab0c base::debug::StackTrace::StackTrace()
#1 0x56463fa33780 logging::LogMessage::~LogMessage()
#2 0x56463eac32b1 content::ZygoteHostImpl::Init()
#3 0x56463e735c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56463e73ba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5646438659a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56463f755a00 content::RunNamedProcessTypeMain()
#7 0x56463f7562e8 content::ContentMainRunnerImpl::Run()
#8 0x56463f75ff24 service_manager::Main()
#9 0x56463f754f14 content::ContentMain()
#10 0x5646438649b9 headless::(anonymous namespace)::RunContentMain()
#11 0x564643864a42 headless::HeadlessBrowserMain()
#12 0x56463f75cf9d headless::HeadlessShellMain()
#13 0x56463ddbb1ac ChromeMain
#14 0x7fb81be372e1 __libc_start_main
#15 0x56463ddbb02a _start

Received signal 6
#0 0x56463fa1ab0c base::debug::StackTrace::StackTrace()
#1 0x56463fa1a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb821d940c0 <unknown>
#3 0x7fb81be49fff gsignal
#4 0x7fb81be4b42a abort
#5 0x56463fa19105 base::debug::BreakDebugger()
#6 0x56463fa33bca logging::LogMessage::~LogMessage()
#7 0x56463eac32b1 content::ZygoteHostImpl::Init()
#8 0x56463e735c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56463e73ba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5646438659a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56463f755a00 content::RunNamedProcessTypeMain()
#12 0x56463f7562e8 content::ContentMainRunnerImpl::Run()
#13 0x56463f75ff24 service_manager::Main()
#14 0x56463f754f14 content::ContentMain()
#15 0x5646438649b9 headless::(anonymous namespace)::RunContentMain()
#16 0x564643864a42 headless::HeadlessBrowserMain()
#17 0x56463f75cf9d headless::HeadlessShellMain()
#18 0x56463ddbb1ac ChromeMain
#19 0x7fb81be372e1 __libc_start_main
#20 0x56463ddbb02a _start
  r8: 0000000000000000  r9: 00007ffd71599d70 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd7159a468 r13: 0000000000000161 r14: 00007ffd7159a470 r15: 00007ffd7159a009
  di: 0000000000000002  si: 00007ffd71599d70  bp: 00007ffd71599fb0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb81be49fff  sp: 00007ffd71599de8
  ip: 00007fb81be49fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020541.981172:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56463fa1ab0c base::debug::StackTrace::StackTrace()
#1 0x56463fa33780 logging::LogMessage::~LogMessage()
#2 0x56463eac32b1 content::ZygoteHostImpl::Init()
#3 0x56463e735c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56463e73ba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5646438659a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56463f755a00 content::RunNamedProcessTypeMain()
#7 0x56463f7562e8 content::ContentMainRunnerImpl::Run()
#8 0x56463f75ff24 service_manager::Main()
#9 0x56463f754f14 content::ContentMain()
#10 0x5646438649b9 headless::(anonymous namespace)::RunContentMain()
#11 0x564643864a42 headless::HeadlessBrowserMain()
#12 0x56463f75cf9d headless::HeadlessShellMain()
#13 0x56463ddbb1ac ChromeMain
#14 0x7fb81be372e1 __libc_start_main
#15 0x56463ddbb02a _start

Received signal 6
#0 0x56463fa1ab0c base::debug::StackTrace::StackTrace()
#1 0x56463fa1a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb821d940c0 <unknown>
#3 0x7fb81be49fff gsignal
#4 0x7fb81be4b42a abort
#5 0x56463fa19105 base::debug::BreakDebugger()
#6 0x56463fa33bca logging::LogMessage::~LogMessage()
#7 0x56463eac32b1 content::ZygoteHostImpl::Init()
#8 0x56463e735c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56463e73ba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5646438659a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56463f755a00 content::RunNamedProcessTypeMain()
#12 0x56463f7562e8 content::ContentMainRunnerImpl::Run()
#13 0x56463f75ff24 service_manager::Main()
#14 0x56463f754f14 content::ContentMain()
#15 0x5646438649b9 headless::(anonymous namespace)::RunContentMain()
#16 0x564643864a42 headless::HeadlessBrowserMain()
#17 0x56463f75cf9d headless::HeadlessShellMain()
#18 0x56463ddbb1ac ChromeMain
#19 0x7fb81be372e1 __libc_start_main
#20 0x56463ddbb02a _start
  r8: 0000000000000000  r9: 00007ffd71599d70 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd7159a468 r13: 0000000000000161 r14: 00007ffd7159a470 r15: 00007ffd7159a009
  di: 0000000000000002  si: 00007ffd71599d70  bp: 00007ffd71599fb0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb81be49fff  sp: 00007ffd71599de8
  ip: 00007fb81be49fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020543.931369:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556106e62b0c base::debug::StackTrace::StackTrace()
#1 0x556106e7b780 logging::LogMessage::~LogMessage()
#2 0x556105f0b2b1 content::ZygoteHostImpl::Init()
#3 0x556105b7dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556105b83a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55610acad9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556106b9da00 content::RunNamedProcessTypeMain()
#7 0x556106b9e2e8 content::ContentMainRunnerImpl::Run()
#8 0x556106ba7f24 service_manager::Main()
#9 0x556106b9cf14 content::ContentMain()
#10 0x55610acac9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55610acaca42 headless::HeadlessBrowserMain()
#12 0x556106ba4f9d headless::HeadlessShellMain()
#13 0x5561052031ac ChromeMain
#14 0x7f5e29e762e1 __libc_start_main
#15 0x55610520302a _start

Received signal 6
#0 0x556106e62b0c base::debug::StackTrace::StackTrace()
#1 0x556106e62671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f5e2fdd30c0 <unknown>
#3 0x7f5e29e88fff gsignal
#4 0x7f5e29e8a42a abort
#5 0x556106e61105 base::debug::BreakDebugger()
#6 0x556106e7bbca logging::LogMessage::~LogMessage()
#7 0x556105f0b2b1 content::ZygoteHostImpl::Init()
#8 0x556105b7dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556105b83a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55610acad9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556106b9da00 content::RunNamedProcessTypeMain()
#12 0x556106b9e2e8 content::ContentMainRunnerImpl::Run()
#13 0x556106ba7f24 service_manager::Main()
#14 0x556106b9cf14 content::ContentMain()
#15 0x55610acac9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55610acaca42 headless::HeadlessBrowserMain()
#17 0x556106ba4f9d headless::HeadlessShellMain()
#18 0x5561052031ac ChromeMain
#19 0x7f5e29e762e1 __libc_start_main
#20 0x55610520302a _start
  r8: 0000000000000000  r9: 00007fff997ba680 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff997bad78 r13: 0000000000000161 r14: 00007fff997bad80 r15: 00007fff997ba919
  di: 0000000000000002  si: 00007fff997ba680  bp: 00007fff997ba8c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f5e29e88fff  sp: 00007fff997ba6f8
  ip: 00007f5e29e88fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020543.931369:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556106e62b0c base::debug::StackTrace::StackTrace()
#1 0x556106e7b780 logging::LogMessage::~LogMessage()
#2 0x556105f0b2b1 content::ZygoteHostImpl::Init()
#3 0x556105b7dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556105b83a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55610acad9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556106b9da00 content::RunNamedProcessTypeMain()
#7 0x556106b9e2e8 content::ContentMainRunnerImpl::Run()
#8 0x556106ba7f24 service_manager::Main()
#9 0x556106b9cf14 content::ContentMain()
#10 0x55610acac9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55610acaca42 headless::HeadlessBrowserMain()
#12 0x556106ba4f9d headless::HeadlessShellMain()
#13 0x5561052031ac ChromeMain
#14 0x7f5e29e762e1 __libc_start_main
#15 0x55610520302a _start

Received signal 6
#0 0x556106e62b0c base::debug::StackTrace::StackTrace()
#1 0x556106e62671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f5e2fdd30c0 <unknown>
#3 0x7f5e29e88fff gsignal
#4 0x7f5e29e8a42a abort
#5 0x556106e61105 base::debug::BreakDebugger()
#6 0x556106e7bbca logging::LogMessage::~LogMessage()
#7 0x556105f0b2b1 content::ZygoteHostImpl::Init()
#8 0x556105b7dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556105b83a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55610acad9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556106b9da00 content::RunNamedProcessTypeMain()
#12 0x556106b9e2e8 content::ContentMainRunnerImpl::Run()
#13 0x556106ba7f24 service_manager::Main()
#14 0x556106b9cf14 content::ContentMain()
#15 0x55610acac9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55610acaca42 headless::HeadlessBrowserMain()
#17 0x556106ba4f9d headless::HeadlessShellMain()
#18 0x5561052031ac ChromeMain
#19 0x7f5e29e762e1 __libc_start_main
#20 0x55610520302a _start
  r8: 0000000000000000  r9: 00007fff997ba680 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff997bad78 r13: 0000000000000161 r14: 00007fff997bad80 r15: 00007fff997ba919
  di: 0000000000000002  si: 00007fff997ba680  bp: 00007fff997ba8c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f5e29e88fff  sp: 00007fff997ba6f8
  ip: 00007f5e29e88fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020543.089058:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x563f6bdf4b0c base::debug::StackTrace::StackTrace()
#1 0x563f6be0d780 logging::LogMessage::~LogMessage()
#2 0x563f6ae9d2b1 content::ZygoteHostImpl::Init()
#3 0x563f6ab0fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x563f6ab15a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x563f6fc3f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563f6bb2fa00 content::RunNamedProcessTypeMain()
#7 0x563f6bb302e8 content::ContentMainRunnerImpl::Run()
#8 0x563f6bb39f24 service_manager::Main()
#9 0x563f6bb2ef14 content::ContentMain()
#10 0x563f6fc3e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563f6fc3ea42 headless::HeadlessBrowserMain()
#12 0x563f6bb36f9d headless::HeadlessShellMain()
#13 0x563f6a1951ac ChromeMain
#14 0x7f1f5fa292e1 __libc_start_main
#15 0x563f6a19502a _start

Received signal 6
#0 0x563f6bdf4b0c base::debug::StackTrace::StackTrace()
#1 0x563f6bdf4671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1f659860c0 <unknown>
#3 0x7f1f5fa3bfff gsignal
#4 0x7f1f5fa3d42a abort
#5 0x563f6bdf3105 base::debug::BreakDebugger()
#6 0x563f6be0dbca logging::LogMessage::~LogMessage()
#7 0x563f6ae9d2b1 content::ZygoteHostImpl::Init()
#8 0x563f6ab0fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x563f6ab15a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x563f6fc3f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563f6bb2fa00 content::RunNamedProcessTypeMain()
#12 0x563f6bb302e8 content::ContentMainRunnerImpl::Run()
#13 0x563f6bb39f24 service_manager::Main()
#14 0x563f6bb2ef14 content::ContentMain()
#15 0x563f6fc3e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563f6fc3ea42 headless::HeadlessBrowserMain()
#17 0x563f6bb36f9d headless::HeadlessShellMain()
#18 0x563f6a1951ac ChromeMain
#19 0x7f1f5fa292e1 __libc_start_main
#20 0x563f6a19502a _start
  r8: 0000000000000000  r9: 00007ffd8eaaea80 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd8eaaf178 r13: 0000000000000161 r14: 00007ffd8eaaf180 r15: 00007ffd8eaaed19
  di: 0000000000000002  si: 00007ffd8eaaea80  bp: 00007ffd8eaaecc0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1f5fa3bfff  sp: 00007ffd8eaaeaf8
  ip: 00007f1f5fa3bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020543.089058:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x563f6bdf4b0c base::debug::StackTrace::StackTrace()
#1 0x563f6be0d780 logging::LogMessage::~LogMessage()
#2 0x563f6ae9d2b1 content::ZygoteHostImpl::Init()
#3 0x563f6ab0fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x563f6ab15a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x563f6fc3f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563f6bb2fa00 content::RunNamedProcessTypeMain()
#7 0x563f6bb302e8 content::ContentMainRunnerImpl::Run()
#8 0x563f6bb39f24 service_manager::Main()
#9 0x563f6bb2ef14 content::ContentMain()
#10 0x563f6fc3e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563f6fc3ea42 headless::HeadlessBrowserMain()
#12 0x563f6bb36f9d headless::HeadlessShellMain()
#13 0x563f6a1951ac ChromeMain
#14 0x7f1f5fa292e1 __libc_start_main
#15 0x563f6a19502a _start

Received signal 6
#0 0x563f6bdf4b0c base::debug::StackTrace::StackTrace()
#1 0x563f6bdf4671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1f659860c0 <unknown>
#3 0x7f1f5fa3bfff gsignal
#4 0x7f1f5fa3d42a abort
#5 0x563f6bdf3105 base::debug::BreakDebugger()
#6 0x563f6be0dbca logging::LogMessage::~LogMessage()
#7 0x563f6ae9d2b1 content::ZygoteHostImpl::Init()
#8 0x563f6ab0fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x563f6ab15a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x563f6fc3f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563f6bb2fa00 content::RunNamedProcessTypeMain()
#12 0x563f6bb302e8 content::ContentMainRunnerImpl::Run()
#13 0x563f6bb39f24 service_manager::Main()
#14 0x563f6bb2ef14 content::ContentMain()
#15 0x563f6fc3e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563f6fc3ea42 headless::HeadlessBrowserMain()
#17 0x563f6bb36f9d headless::HeadlessShellMain()
#18 0x563f6a1951ac ChromeMain
#19 0x7f1f5fa292e1 __libc_start_main
#20 0x563f6a19502a _start
  r8: 0000000000000000  r9: 00007ffd8eaaea80 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd8eaaf178 r13: 0000000000000161 r14: 00007ffd8eaaf180 r15: 00007ffd8eaaed19
  di: 0000000000000002  si: 00007ffd8eaaea80  bp: 00007ffd8eaaecc0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1f5fa3bfff  sp: 00007ffd8eaaeaf8
  ip: 00007f1f5fa3bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020543.704524:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ebe4626b0c base::debug::StackTrace::StackTrace()
#1 0x55ebe463f780 logging::LogMessage::~LogMessage()
#2 0x55ebe36cf2b1 content::ZygoteHostImpl::Init()
#3 0x55ebe3341c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ebe3347a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ebe84719a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ebe4361a00 content::RunNamedProcessTypeMain()
#7 0x55ebe43622e8 content::ContentMainRunnerImpl::Run()
#8 0x55ebe436bf24 service_manager::Main()
#9 0x55ebe4360f14 content::ContentMain()
#10 0x55ebe84709b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ebe8470a42 headless::HeadlessBrowserMain()
#12 0x55ebe4368f9d headless::HeadlessShellMain()
#13 0x55ebe29c71ac ChromeMain
#14 0x7f86889d82e1 __libc_start_main
#15 0x55ebe29c702a _start

Received signal 6
#0 0x55ebe4626b0c base::debug::StackTrace::StackTrace()
#1 0x55ebe4626671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f868e9350c0 <unknown>
#3 0x7f86889eafff gsignal
#4 0x7f86889ec42a abort
#5 0x55ebe4625105 base::debug::BreakDebugger()
#6 0x55ebe463fbca logging::LogMessage::~LogMessage()
#7 0x55ebe36cf2b1 content::ZygoteHostImpl::Init()
#8 0x55ebe3341c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ebe3347a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ebe84719a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ebe4361a00 content::RunNamedProcessTypeMain()
#12 0x55ebe43622e8 content::ContentMainRunnerImpl::Run()
#13 0x55ebe436bf24 service_manager::Main()
#14 0x55ebe4360f14 content::ContentMain()
#15 0x55ebe84709b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ebe8470a42 headless::HeadlessBrowserMain()
#17 0x55ebe4368f9d headless::HeadlessShellMain()
#18 0x55ebe29c71ac ChromeMain
#19 0x7f86889d82e1 __libc_start_main
#20 0x55ebe29c702a _start
  r8: 0000000000000000  r9: 00007ffe27f79750 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe27f79e48 r13: 0000000000000161 r14: 00007ffe27f79e50 r15: 00007ffe27f799e9
  di: 0000000000000002  si: 00007ffe27f79750  bp: 00007ffe27f79990  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f86889eafff  sp: 00007ffe27f797c8
  ip: 00007f86889eafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020543.704524:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ebe4626b0c base::debug::StackTrace::StackTrace()
#1 0x55ebe463f780 logging::LogMessage::~LogMessage()
#2 0x55ebe36cf2b1 content::ZygoteHostImpl::Init()
#3 0x55ebe3341c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ebe3347a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ebe84719a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ebe4361a00 content::RunNamedProcessTypeMain()
#7 0x55ebe43622e8 content::ContentMainRunnerImpl::Run()
#8 0x55ebe436bf24 service_manager::Main()
#9 0x55ebe4360f14 content::ContentMain()
#10 0x55ebe84709b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ebe8470a42 headless::HeadlessBrowserMain()
#12 0x55ebe4368f9d headless::HeadlessShellMain()
#13 0x55ebe29c71ac ChromeMain
#14 0x7f86889d82e1 __libc_start_main
#15 0x55ebe29c702a _start

Received signal 6
#0 0x55ebe4626b0c base::debug::StackTrace::StackTrace()
#1 0x55ebe4626671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f868e9350c0 <unknown>
#3 0x7f86889eafff gsignal
#4 0x7f86889ec42a abort
#5 0x55ebe4625105 base::debug::BreakDebugger()
#6 0x55ebe463fbca logging::LogMessage::~LogMessage()
#7 0x55ebe36cf2b1 content::ZygoteHostImpl::Init()
#8 0x55ebe3341c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ebe3347a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ebe84719a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ebe4361a00 content::RunNamedProcessTypeMain()
#12 0x55ebe43622e8 content::ContentMainRunnerImpl::Run()
#13 0x55ebe436bf24 service_manager::Main()
#14 0x55ebe4360f14 content::ContentMain()
#15 0x55ebe84709b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ebe8470a42 headless::HeadlessBrowserMain()
#17 0x55ebe4368f9d headless::HeadlessShellMain()
#18 0x55ebe29c71ac ChromeMain
#19 0x7f86889d82e1 __libc_start_main
#20 0x55ebe29c702a _start
  r8: 0000000000000000  r9: 00007ffe27f79750 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe27f79e48 r13: 0000000000000161 r14: 00007ffe27f79e50 r15: 00007ffe27f799e9
  di: 0000000000000002  si: 00007ffe27f79750  bp: 00007ffe27f79990  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f86889eafff  sp: 00007ffe27f797c8
  ip: 00007f86889eafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020543.845791:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5596f230eb0c base::debug::StackTrace::StackTrace()
#1 0x5596f2327780 logging::LogMessage::~LogMessage()
#2 0x5596f13b72b1 content::ZygoteHostImpl::Init()
#3 0x5596f1029c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5596f102fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5596f61599a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5596f2049a00 content::RunNamedProcessTypeMain()
#7 0x5596f204a2e8 content::ContentMainRunnerImpl::Run()
#8 0x5596f2053f24 service_manager::Main()
#9 0x5596f2048f14 content::ContentMain()
#10 0x5596f61589b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5596f6158a42 headless::HeadlessBrowserMain()
#12 0x5596f2050f9d headless::HeadlessShellMain()
#13 0x5596f06af1ac ChromeMain
#14 0x7f31d51752e1 __libc_start_main
#15 0x5596f06af02a _start

Received signal 6
#0 0x5596f230eb0c base::debug::StackTrace::StackTrace()
#1 0x5596f230e671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f31db0d20c0 <unknown>
#3 0x7f31d5187fff gsignal
#4 0x7f31d518942a abort
#5 0x5596f230d105 base::debug::BreakDebugger()
#6 0x5596f2327bca logging::LogMessage::~LogMessage()
#7 0x5596f13b72b1 content::ZygoteHostImpl::Init()
#8 0x5596f1029c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5596f102fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5596f61599a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5596f2049a00 content::RunNamedProcessTypeMain()
#12 0x5596f204a2e8 content::ContentMainRunnerImpl::Run()
#13 0x5596f2053f24 service_manager::Main()
#14 0x5596f2048f14 content::ContentMain()
#15 0x5596f61589b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5596f6158a42 headless::HeadlessBrowserMain()
#17 0x5596f2050f9d headless::HeadlessShellMain()
#18 0x5596f06af1ac ChromeMain
#19 0x7f31d51752e1 __libc_start_main
#20 0x5596f06af02a _start
  r8: 0000000000000000  r9: 00007fff5c5f00e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff5c5f07d8 r13: 0000000000000161 r14: 00007fff5c5f07e0 r15: 00007fff5c5f0379
  di: 0000000000000002  si: 00007fff5c5f00e0  bp: 00007fff5c5f0320  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f31d5187fff  sp: 00007fff5c5f0158
  ip: 00007f31d5187fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020543.845791:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5596f230eb0c base::debug::StackTrace::StackTrace()
#1 0x5596f2327780 logging::LogMessage::~LogMessage()
#2 0x5596f13b72b1 content::ZygoteHostImpl::Init()
#3 0x5596f1029c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5596f102fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5596f61599a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5596f2049a00 content::RunNamedProcessTypeMain()
#7 0x5596f204a2e8 content::ContentMainRunnerImpl::Run()
#8 0x5596f2053f24 service_manager::Main()
#9 0x5596f2048f14 content::ContentMain()
#10 0x5596f61589b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5596f6158a42 headless::HeadlessBrowserMain()
#12 0x5596f2050f9d headless::HeadlessShellMain()
#13 0x5596f06af1ac ChromeMain
#14 0x7f31d51752e1 __libc_start_main
#15 0x5596f06af02a _start

Received signal 6
#0 0x5596f230eb0c base::debug::StackTrace::StackTrace()
#1 0x5596f230e671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f31db0d20c0 <unknown>
#3 0x7f31d5187fff gsignal
#4 0x7f31d518942a abort
#5 0x5596f230d105 base::debug::BreakDebugger()
#6 0x5596f2327bca logging::LogMessage::~LogMessage()
#7 0x5596f13b72b1 content::ZygoteHostImpl::Init()
#8 0x5596f1029c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5596f102fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5596f61599a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5596f2049a00 content::RunNamedProcessTypeMain()
#12 0x5596f204a2e8 content::ContentMainRunnerImpl::Run()
#13 0x5596f2053f24 service_manager::Main()
#14 0x5596f2048f14 content::ContentMain()
#15 0x5596f61589b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5596f6158a42 headless::HeadlessBrowserMain()
#17 0x5596f2050f9d headless::HeadlessShellMain()
#18 0x5596f06af1ac ChromeMain
#19 0x7f31d51752e1 __libc_start_main
#20 0x5596f06af02a _start
  r8: 0000000000000000  r9: 00007fff5c5f00e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff5c5f07d8 r13: 0000000000000161 r14: 00007fff5c5f07e0 r15: 00007fff5c5f0379
  di: 0000000000000002  si: 00007fff5c5f00e0  bp: 00007fff5c5f0320  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f31d5187fff  sp: 00007fff5c5f0158
  ip: 00007f31d5187fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020544.080410:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e481a20b0c base::debug::StackTrace::StackTrace()
#1 0x55e481a39780 logging::LogMessage::~LogMessage()
#2 0x55e480ac92b1 content::ZygoteHostImpl::Init()
#3 0x55e48073bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e480741a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e48586b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e48175ba00 content::RunNamedProcessTypeMain()
#7 0x55e48175c2e8 content::ContentMainRunnerImpl::Run()
#8 0x55e481765f24 service_manager::Main()
#9 0x55e48175af14 content::ContentMain()
#10 0x55e48586a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e48586aa42 headless::HeadlessBrowserMain()
#12 0x55e481762f9d headless::HeadlessShellMain()
#13 0x55e47fdc11ac ChromeMain
#14 0x7fb972d112e1 __libc_start_main
#15 0x55e47fdc102a _start

Received signal 6
#0 0x55e481a20b0c base::debug::StackTrace::StackTrace()
#1 0x55e481a20671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb978c6e0c0 <unknown>
#3 0x7fb972d23fff gsignal
#4 0x7fb972d2542a abort
#5 0x55e481a1f105 base::debug::BreakDebugger()
#6 0x55e481a39bca logging::LogMessage::~LogMessage()
#7 0x55e480ac92b1 content::ZygoteHostImpl::Init()
#8 0x55e48073bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e480741a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e48586b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e48175ba00 content::RunNamedProcessTypeMain()
#12 0x55e48175c2e8 content::ContentMainRunnerImpl::Run()
#13 0x55e481765f24 service_manager::Main()
#14 0x55e48175af14 content::ContentMain()
#15 0x55e48586a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e48586aa42 headless::HeadlessBrowserMain()
#17 0x55e481762f9d headless::HeadlessShellMain()
#18 0x55e47fdc11ac ChromeMain
#19 0x7fb972d112e1 __libc_start_main
#20 0x55e47fdc102a _start
  r8: 0000000000000000  r9: 00007ffd0ddaa210 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd0ddaa908 r13: 0000000000000161 r14: 00007ffd0ddaa910 r15: 00007ffd0ddaa4a9
  di: 0000000000000002  si: 00007ffd0ddaa210  bp: 00007ffd0ddaa450  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb972d23fff  sp: 00007ffd0ddaa288
  ip: 00007fb972d23fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020544.080410:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e481a20b0c base::debug::StackTrace::StackTrace()
#1 0x55e481a39780 logging::LogMessage::~LogMessage()
#2 0x55e480ac92b1 content::ZygoteHostImpl::Init()
#3 0x55e48073bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e480741a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e48586b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e48175ba00 content::RunNamedProcessTypeMain()
#7 0x55e48175c2e8 content::ContentMainRunnerImpl::Run()
#8 0x55e481765f24 service_manager::Main()
#9 0x55e48175af14 content::ContentMain()
#10 0x55e48586a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e48586aa42 headless::HeadlessBrowserMain()
#12 0x55e481762f9d headless::HeadlessShellMain()
#13 0x55e47fdc11ac ChromeMain
#14 0x7fb972d112e1 __libc_start_main
#15 0x55e47fdc102a _start

Received signal 6
#0 0x55e481a20b0c base::debug::StackTrace::StackTrace()
#1 0x55e481a20671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb978c6e0c0 <unknown>
#3 0x7fb972d23fff gsignal
#4 0x7fb972d2542a abort
#5 0x55e481a1f105 base::debug::BreakDebugger()
#6 0x55e481a39bca logging::LogMessage::~LogMessage()
#7 0x55e480ac92b1 content::ZygoteHostImpl::Init()
#8 0x55e48073bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e480741a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e48586b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e48175ba00 content::RunNamedProcessTypeMain()
#12 0x55e48175c2e8 content::ContentMainRunnerImpl::Run()
#13 0x55e481765f24 service_manager::Main()
#14 0x55e48175af14 content::ContentMain()
#15 0x55e48586a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e48586aa42 headless::HeadlessBrowserMain()
#17 0x55e481762f9d headless::HeadlessShellMain()
#18 0x55e47fdc11ac ChromeMain
#19 0x7fb972d112e1 __libc_start_main
#20 0x55e47fdc102a _start
  r8: 0000000000000000  r9: 00007ffd0ddaa210 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd0ddaa908 r13: 0000000000000161 r14: 00007ffd0ddaa910 r15: 00007ffd0ddaa4a9
  di: 0000000000000002  si: 00007ffd0ddaa210  bp: 00007ffd0ddaa450  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb972d23fff  sp: 00007ffd0ddaa288
  ip: 00007fb972d23fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020544.058315:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e01052fb0c base::debug::StackTrace::StackTrace()
#1 0x55e010548780 logging::LogMessage::~LogMessage()
#2 0x55e00f5d82b1 content::ZygoteHostImpl::Init()
#3 0x55e00f24ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e00f250a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e01437a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e01026aa00 content::RunNamedProcessTypeMain()
#7 0x55e01026b2e8 content::ContentMainRunnerImpl::Run()
#8 0x55e010274f24 service_manager::Main()
#9 0x55e010269f14 content::ContentMain()
#10 0x55e0143799b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e014379a42 headless::HeadlessBrowserMain()
#12 0x55e010271f9d headless::HeadlessShellMain()
#13 0x55e00e8d01ac ChromeMain
#14 0x7f11270d12e1 __libc_start_main
#15 0x55e00e8d002a _start

Received signal 6
#0 0x55e01052fb0c base::debug::StackTrace::StackTrace()
#1 0x55e01052f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f112d02e0c0 <unknown>
#3 0x7f11270e3fff gsignal
#4 0x7f11270e542a abort
#5 0x55e01052e105 base::debug::BreakDebugger()
#6 0x55e010548bca logging::LogMessage::~LogMessage()
#7 0x55e00f5d82b1 content::ZygoteHostImpl::Init()
#8 0x55e00f24ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e00f250a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e01437a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e01026aa00 content::RunNamedProcessTypeMain()
#12 0x55e01026b2e8 content::ContentMainRunnerImpl::Run()
#13 0x55e010274f24 service_manager::Main()
#14 0x55e010269f14 content::ContentMain()
#15 0x55e0143799b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e014379a42 headless::HeadlessBrowserMain()
#17 0x55e010271f9d headless::HeadlessShellMain()
#18 0x55e00e8d01ac ChromeMain
#19 0x7f11270d12e1 __libc_start_main
#20 0x55e00e8d002a _start
  r8: 0000000000000000  r9: 00007ffdf667b400 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdf667baf8 r13: 0000000000000161 r14: 00007ffdf667bb00 r15: 00007ffdf667b699
  di: 0000000000000002  si: 00007ffdf667b400  bp: 00007ffdf667b640  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f11270e3fff  sp: 00007ffdf667b478
  ip: 00007f11270e3fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020544.058315:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e01052fb0c base::debug::StackTrace::StackTrace()
#1 0x55e010548780 logging::LogMessage::~LogMessage()
#2 0x55e00f5d82b1 content::ZygoteHostImpl::Init()
#3 0x55e00f24ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e00f250a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e01437a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e01026aa00 content::RunNamedProcessTypeMain()
#7 0x55e01026b2e8 content::ContentMainRunnerImpl::Run()
#8 0x55e010274f24 service_manager::Main()
#9 0x55e010269f14 content::ContentMain()
#10 0x55e0143799b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e014379a42 headless::HeadlessBrowserMain()
#12 0x55e010271f9d headless::HeadlessShellMain()
#13 0x55e00e8d01ac ChromeMain
#14 0x7f11270d12e1 __libc_start_main
#15 0x55e00e8d002a _start

Received signal 6
#0 0x55e01052fb0c base::debug::StackTrace::StackTrace()
#1 0x55e01052f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f112d02e0c0 <unknown>
#3 0x7f11270e3fff gsignal
#4 0x7f11270e542a abort
#5 0x55e01052e105 base::debug::BreakDebugger()
#6 0x55e010548bca logging::LogMessage::~LogMessage()
#7 0x55e00f5d82b1 content::ZygoteHostImpl::Init()
#8 0x55e00f24ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e00f250a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e01437a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e01026aa00 content::RunNamedProcessTypeMain()
#12 0x55e01026b2e8 content::ContentMainRunnerImpl::Run()
#13 0x55e010274f24 service_manager::Main()
#14 0x55e010269f14 content::ContentMain()
#15 0x55e0143799b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e014379a42 headless::HeadlessBrowserMain()
#17 0x55e010271f9d headless::HeadlessShellMain()
#18 0x55e00e8d01ac ChromeMain
#19 0x7f11270d12e1 __libc_start_main
#20 0x55e00e8d002a _start
  r8: 0000000000000000  r9: 00007ffdf667b400 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdf667baf8 r13: 0000000000000161 r14: 00007ffdf667bb00 r15: 00007ffdf667b699
  di: 0000000000000002  si: 00007ffdf667b400  bp: 00007ffdf667b640  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f11270e3fff  sp: 00007ffdf667b478
  ip: 00007f11270e3fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020543.682042:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ad9f8c9b0c base::debug::StackTrace::StackTrace()
#1 0x55ad9f8e2780 logging::LogMessage::~LogMessage()
#2 0x55ad9e9722b1 content::ZygoteHostImpl::Init()
#3 0x55ad9e5e4c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ad9e5eaa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ada37149a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ad9f604a00 content::RunNamedProcessTypeMain()
#7 0x55ad9f6052e8 content::ContentMainRunnerImpl::Run()
#8 0x55ad9f60ef24 service_manager::Main()
#9 0x55ad9f603f14 content::ContentMain()
#10 0x55ada37139b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ada3713a42 headless::HeadlessBrowserMain()
#12 0x55ad9f60bf9d headless::HeadlessShellMain()
#13 0x55ad9dc6a1ac ChromeMain
#14 0x7fafeac552e1 __libc_start_main
#15 0x55ad9dc6a02a _start

Received signal 6
#0 0x55ad9f8c9b0c base::debug::StackTrace::StackTrace()
#1 0x55ad9f8c9671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7faff0bb20c0 <unknown>
#3 0x7fafeac67fff gsignal
#4 0x7fafeac6942a abort
#5 0x55ad9f8c8105 base::debug::BreakDebugger()
#6 0x55ad9f8e2bca logging::LogMessage::~LogMessage()
#7 0x55ad9e9722b1 content::ZygoteHostImpl::Init()
#8 0x55ad9e5e4c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ad9e5eaa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ada37149a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ad9f604a00 content::RunNamedProcessTypeMain()
#12 0x55ad9f6052e8 content::ContentMainRunnerImpl::Run()
#13 0x55ad9f60ef24 service_manager::Main()
#14 0x55ad9f603f14 content::ContentMain()
#15 0x55ada37139b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ada3713a42 headless::HeadlessBrowserMain()
#17 0x55ad9f60bf9d headless::HeadlessShellMain()
#18 0x55ad9dc6a1ac ChromeMain
#19 0x7fafeac552e1 __libc_start_main
#20 0x55ad9dc6a02a _start
  r8: 0000000000000000  r9: 00007fff0b7d1d50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff0b7d2448 r13: 0000000000000161 r14: 00007fff0b7d2450 r15: 00007fff0b7d1fe9
  di: 0000000000000002  si: 00007fff0b7d1d50  bp: 00007fff0b7d1f90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fafeac67fff  sp: 00007fff0b7d1dc8
  ip: 00007fafeac67fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020543.682042:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ad9f8c9b0c base::debug::StackTrace::StackTrace()
#1 0x55ad9f8e2780 logging::LogMessage::~LogMessage()
#2 0x55ad9e9722b1 content::ZygoteHostImpl::Init()
#3 0x55ad9e5e4c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ad9e5eaa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ada37149a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ad9f604a00 content::RunNamedProcessTypeMain()
#7 0x55ad9f6052e8 content::ContentMainRunnerImpl::Run()
#8 0x55ad9f60ef24 service_manager::Main()
#9 0x55ad9f603f14 content::ContentMain()
#10 0x55ada37139b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ada3713a42 headless::HeadlessBrowserMain()
#12 0x55ad9f60bf9d headless::HeadlessShellMain()
#13 0x55ad9dc6a1ac ChromeMain
#14 0x7fafeac552e1 __libc_start_main
#15 0x55ad9dc6a02a _start

Received signal 6
#0 0x55ad9f8c9b0c base::debug::StackTrace::StackTrace()
#1 0x55ad9f8c9671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7faff0bb20c0 <unknown>
#3 0x7fafeac67fff gsignal
#4 0x7fafeac6942a abort
#5 0x55ad9f8c8105 base::debug::BreakDebugger()
#6 0x55ad9f8e2bca logging::LogMessage::~LogMessage()
#7 0x55ad9e9722b1 content::ZygoteHostImpl::Init()
#8 0x55ad9e5e4c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ad9e5eaa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ada37149a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ad9f604a00 content::RunNamedProcessTypeMain()
#12 0x55ad9f6052e8 content::ContentMainRunnerImpl::Run()
#13 0x55ad9f60ef24 service_manager::Main()
#14 0x55ad9f603f14 content::ContentMain()
#15 0x55ada37139b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ada3713a42 headless::HeadlessBrowserMain()
#17 0x55ad9f60bf9d headless::HeadlessShellMain()
#18 0x55ad9dc6a1ac ChromeMain
#19 0x7fafeac552e1 __libc_start_main
#20 0x55ad9dc6a02a _start
  r8: 0000000000000000  r9: 00007fff0b7d1d50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff0b7d2448 r13: 0000000000000161 r14: 00007fff0b7d2450 r15: 00007fff0b7d1fe9
  di: 0000000000000002  si: 00007fff0b7d1d50  bp: 00007fff0b7d1f90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fafeac67fff  sp: 00007fff0b7d1dc8
  ip: 00007fafeac67fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020545.852056:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55cae3c81b0c base::debug::StackTrace::StackTrace()
#1 0x55cae3c9a780 logging::LogMessage::~LogMessage()
#2 0x55cae2d2a2b1 content::ZygoteHostImpl::Init()
#3 0x55cae299cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55cae29a2a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55cae7acc9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55cae39bca00 content::RunNamedProcessTypeMain()
#7 0x55cae39bd2e8 content::ContentMainRunnerImpl::Run()
#8 0x55cae39c6f24 service_manager::Main()
#9 0x55cae39bbf14 content::ContentMain()
#10 0x55cae7acb9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55cae7acba42 headless::HeadlessBrowserMain()
#12 0x55cae39c3f9d headless::HeadlessShellMain()
#13 0x55cae20221ac ChromeMain
#14 0x7f3430aa82e1 __libc_start_main
#15 0x55cae202202a _start

Received signal 6
#0 0x55cae3c81b0c base::debug::StackTrace::StackTrace()
#1 0x55cae3c81671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f3436a050c0 <unknown>
#3 0x7f3430abafff gsignal
#4 0x7f3430abc42a abort
#5 0x55cae3c80105 base::debug::BreakDebugger()
#6 0x55cae3c9abca logging::LogMessage::~LogMessage()
#7 0x55cae2d2a2b1 content::ZygoteHostImpl::Init()
#8 0x55cae299cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55cae29a2a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55cae7acc9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55cae39bca00 content::RunNamedProcessTypeMain()
#12 0x55cae39bd2e8 content::ContentMainRunnerImpl::Run()
#13 0x55cae39c6f24 service_manager::Main()
#14 0x55cae39bbf14 content::ContentMain()
#15 0x55cae7acb9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55cae7acba42 headless::HeadlessBrowserMain()
#17 0x55cae39c3f9d headless::HeadlessShellMain()
#18 0x55cae20221ac ChromeMain
#19 0x7f3430aa82e1 __libc_start_main
#20 0x55cae202202a _start
  r8: 0000000000000000  r9: 00007ffe8d567a50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe8d568148 r13: 0000000000000161 r14: 00007ffe8d568150 r15: 00007ffe8d567ce9
  di: 0000000000000002  si: 00007ffe8d567a50  bp: 00007ffe8d567c90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3430abafff  sp: 00007ffe8d567ac8
  ip: 00007f3430abafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020545.852056:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55cae3c81b0c base::debug::StackTrace::StackTrace()
#1 0x55cae3c9a780 logging::LogMessage::~LogMessage()
#2 0x55cae2d2a2b1 content::ZygoteHostImpl::Init()
#3 0x55cae299cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55cae29a2a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55cae7acc9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55cae39bca00 content::RunNamedProcessTypeMain()
#7 0x55cae39bd2e8 content::ContentMainRunnerImpl::Run()
#8 0x55cae39c6f24 service_manager::Main()
#9 0x55cae39bbf14 content::ContentMain()
#10 0x55cae7acb9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55cae7acba42 headless::HeadlessBrowserMain()
#12 0x55cae39c3f9d headless::HeadlessShellMain()
#13 0x55cae20221ac ChromeMain
#14 0x7f3430aa82e1 __libc_start_main
#15 0x55cae202202a _start

Received signal 6
#0 0x55cae3c81b0c base::debug::StackTrace::StackTrace()
#1 0x55cae3c81671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f3436a050c0 <unknown>
#3 0x7f3430abafff gsignal
#4 0x7f3430abc42a abort
#5 0x55cae3c80105 base::debug::BreakDebugger()
#6 0x55cae3c9abca logging::LogMessage::~LogMessage()
#7 0x55cae2d2a2b1 content::ZygoteHostImpl::Init()
#8 0x55cae299cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55cae29a2a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55cae7acc9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55cae39bca00 content::RunNamedProcessTypeMain()
#12 0x55cae39bd2e8 content::ContentMainRunnerImpl::Run()
#13 0x55cae39c6f24 service_manager::Main()
#14 0x55cae39bbf14 content::ContentMain()
#15 0x55cae7acb9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55cae7acba42 headless::HeadlessBrowserMain()
#17 0x55cae39c3f9d headless::HeadlessShellMain()
#18 0x55cae20221ac ChromeMain
#19 0x7f3430aa82e1 __libc_start_main
#20 0x55cae202202a _start
  r8: 0000000000000000  r9: 00007ffe8d567a50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe8d568148 r13: 0000000000000161 r14: 00007ffe8d568150 r15: 00007ffe8d567ce9
  di: 0000000000000002  si: 00007ffe8d567a50  bp: 00007ffe8d567c90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3430abafff  sp: 00007ffe8d567ac8
  ip: 00007f3430abafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020545.872098:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ae8ab1db0c base::debug::StackTrace::StackTrace()
#1 0x55ae8ab36780 logging::LogMessage::~LogMessage()
#2 0x55ae89bc62b1 content::ZygoteHostImpl::Init()
#3 0x55ae89838c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ae8983ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ae8e9689a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ae8a858a00 content::RunNamedProcessTypeMain()
#7 0x55ae8a8592e8 content::ContentMainRunnerImpl::Run()
#8 0x55ae8a862f24 service_manager::Main()
#9 0x55ae8a857f14 content::ContentMain()
#10 0x55ae8e9679b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ae8e967a42 headless::HeadlessBrowserMain()
#12 0x55ae8a85ff9d headless::HeadlessShellMain()
#13 0x55ae88ebe1ac ChromeMain
#14 0x7f6b450512e1 __libc_start_main
#15 0x55ae88ebe02a _start

Received signal 6
#0 0x55ae8ab1db0c base::debug::StackTrace::StackTrace()
#1 0x55ae8ab1d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f6b4afae0c0 <unknown>
#3 0x7f6b45063fff gsignal
#4 0x7f6b4506542a abort
#5 0x55ae8ab1c105 base::debug::BreakDebugger()
#6 0x55ae8ab36bca logging::LogMessage::~LogMessage()
#7 0x55ae89bc62b1 content::ZygoteHostImpl::Init()
#8 0x55ae89838c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ae8983ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ae8e9689a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ae8a858a00 content::RunNamedProcessTypeMain()
#12 0x55ae8a8592e8 content::ContentMainRunnerImpl::Run()
#13 0x55ae8a862f24 service_manager::Main()
#14 0x55ae8a857f14 content::ContentMain()
#15 0x55ae8e9679b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ae8e967a42 headless::HeadlessBrowserMain()
#17 0x55ae8a85ff9d headless::HeadlessShellMain()
#18 0x55ae88ebe1ac ChromeMain
#19 0x7f6b450512e1 __libc_start_main
#20 0x55ae88ebe02a _start
  r8: 0000000000000000  r9: 00007ffc33117b60 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc33118258 r13: 0000000000000161 r14: 00007ffc33118260 r15: 00007ffc33117df9
  di: 0000000000000002  si: 00007ffc33117b60  bp: 00007ffc33117da0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f6b45063fff  sp: 00007ffc33117bd8
  ip: 00007f6b45063fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020545.872098:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ae8ab1db0c base::debug::StackTrace::StackTrace()
#1 0x55ae8ab36780 logging::LogMessage::~LogMessage()
#2 0x55ae89bc62b1 content::ZygoteHostImpl::Init()
#3 0x55ae89838c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ae8983ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ae8e9689a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ae8a858a00 content::RunNamedProcessTypeMain()
#7 0x55ae8a8592e8 content::ContentMainRunnerImpl::Run()
#8 0x55ae8a862f24 service_manager::Main()
#9 0x55ae8a857f14 content::ContentMain()
#10 0x55ae8e9679b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ae8e967a42 headless::HeadlessBrowserMain()
#12 0x55ae8a85ff9d headless::HeadlessShellMain()
#13 0x55ae88ebe1ac ChromeMain
#14 0x7f6b450512e1 __libc_start_main
#15 0x55ae88ebe02a _start

Received signal 6
#0 0x55ae8ab1db0c base::debug::StackTrace::StackTrace()
#1 0x55ae8ab1d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f6b4afae0c0 <unknown>
#3 0x7f6b45063fff gsignal
#4 0x7f6b4506542a abort
#5 0x55ae8ab1c105 base::debug::BreakDebugger()
#6 0x55ae8ab36bca logging::LogMessage::~LogMessage()
#7 0x55ae89bc62b1 content::ZygoteHostImpl::Init()
#8 0x55ae89838c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ae8983ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ae8e9689a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ae8a858a00 content::RunNamedProcessTypeMain()
#12 0x55ae8a8592e8 content::ContentMainRunnerImpl::Run()
#13 0x55ae8a862f24 service_manager::Main()
#14 0x55ae8a857f14 content::ContentMain()
#15 0x55ae8e9679b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ae8e967a42 headless::HeadlessBrowserMain()
#17 0x55ae8a85ff9d headless::HeadlessShellMain()
#18 0x55ae88ebe1ac ChromeMain
#19 0x7f6b450512e1 __libc_start_main
#20 0x55ae88ebe02a _start
  r8: 0000000000000000  r9: 00007ffc33117b60 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc33118258 r13: 0000000000000161 r14: 00007ffc33118260 r15: 00007ffc33117df9
  di: 0000000000000002  si: 00007ffc33117b60  bp: 00007ffc33117da0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f6b45063fff  sp: 00007ffc33117bd8
  ip: 00007f6b45063fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020545.890196:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558c8fc52b0c base::debug::StackTrace::StackTrace()
#1 0x558c8fc6b780 logging::LogMessage::~LogMessage()
#2 0x558c8ecfb2b1 content::ZygoteHostImpl::Init()
#3 0x558c8e96dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558c8e973a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558c93a9d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558c8f98da00 content::RunNamedProcessTypeMain()
#7 0x558c8f98e2e8 content::ContentMainRunnerImpl::Run()
#8 0x558c8f997f24 service_manager::Main()
#9 0x558c8f98cf14 content::ContentMain()
#10 0x558c93a9c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558c93a9ca42 headless::HeadlessBrowserMain()
#12 0x558c8f994f9d headless::HeadlessShellMain()
#13 0x558c8dff31ac ChromeMain
#14 0x7f440394a2e1 __libc_start_main
#15 0x558c8dff302a _start

Received signal 6
#0 0x558c8fc52b0c base::debug::StackTrace::StackTrace()
#1 0x558c8fc52671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f44098a70c0 <unknown>
#3 0x7f440395cfff gsignal
#4 0x7f440395e42a abort
#5 0x558c8fc51105 base::debug::BreakDebugger()
#6 0x558c8fc6bbca logging::LogMessage::~LogMessage()
#7 0x558c8ecfb2b1 content::ZygoteHostImpl::Init()
#8 0x558c8e96dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558c8e973a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558c93a9d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558c8f98da00 content::RunNamedProcessTypeMain()
#12 0x558c8f98e2e8 content::ContentMainRunnerImpl::Run()
#13 0x558c8f997f24 service_manager::Main()
#14 0x558c8f98cf14 content::ContentMain()
#15 0x558c93a9c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558c93a9ca42 headless::HeadlessBrowserMain()
#17 0x558c8f994f9d headless::HeadlessShellMain()
#18 0x558c8dff31ac ChromeMain
#19 0x7f440394a2e1 __libc_start_main
#20 0x558c8dff302a _start
  r8: 0000000000000000  r9: 00007ffde2bb6bc0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffde2bb72b8 r13: 0000000000000161 r14: 00007ffde2bb72c0 r15: 00007ffde2bb6e59
  di: 0000000000000002  si: 00007ffde2bb6bc0  bp: 00007ffde2bb6e00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f440395cfff  sp: 00007ffde2bb6c38
  ip: 00007f440395cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020545.890196:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558c8fc52b0c base::debug::StackTrace::StackTrace()
#1 0x558c8fc6b780 logging::LogMessage::~LogMessage()
#2 0x558c8ecfb2b1 content::ZygoteHostImpl::Init()
#3 0x558c8e96dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558c8e973a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558c93a9d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558c8f98da00 content::RunNamedProcessTypeMain()
#7 0x558c8f98e2e8 content::ContentMainRunnerImpl::Run()
#8 0x558c8f997f24 service_manager::Main()
#9 0x558c8f98cf14 content::ContentMain()
#10 0x558c93a9c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558c93a9ca42 headless::HeadlessBrowserMain()
#12 0x558c8f994f9d headless::HeadlessShellMain()
#13 0x558c8dff31ac ChromeMain
#14 0x7f440394a2e1 __libc_start_main
#15 0x558c8dff302a _start

Received signal 6
#0 0x558c8fc52b0c base::debug::StackTrace::StackTrace()
#1 0x558c8fc52671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f44098a70c0 <unknown>
#3 0x7f440395cfff gsignal
#4 0x7f440395e42a abort
#5 0x558c8fc51105 base::debug::BreakDebugger()
#6 0x558c8fc6bbca logging::LogMessage::~LogMessage()
#7 0x558c8ecfb2b1 content::ZygoteHostImpl::Init()
#8 0x558c8e96dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558c8e973a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558c93a9d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558c8f98da00 content::RunNamedProcessTypeMain()
#12 0x558c8f98e2e8 content::ContentMainRunnerImpl::Run()
#13 0x558c8f997f24 service_manager::Main()
#14 0x558c8f98cf14 content::ContentMain()
#15 0x558c93a9c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558c93a9ca42 headless::HeadlessBrowserMain()
#17 0x558c8f994f9d headless::HeadlessShellMain()
#18 0x558c8dff31ac ChromeMain
#19 0x7f440394a2e1 __libc_start_main
#20 0x558c8dff302a _start
  r8: 0000000000000000  r9: 00007ffde2bb6bc0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffde2bb72b8 r13: 0000000000000161 r14: 00007ffde2bb72c0 r15: 00007ffde2bb6e59
  di: 0000000000000002  si: 00007ffde2bb6bc0  bp: 00007ffde2bb6e00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f440395cfff  sp: 00007ffde2bb6c38
  ip: 00007f440395cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020545.726179:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55caacb0db0c base::debug::StackTrace::StackTrace()
#1 0x55caacb26780 logging::LogMessage::~LogMessage()
#2 0x55caabbb62b1 content::ZygoteHostImpl::Init()
#3 0x55caab828c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55caab82ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55cab09589a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55caac848a00 content::RunNamedProcessTypeMain()
#7 0x55caac8492e8 content::ContentMainRunnerImpl::Run()
#8 0x55caac852f24 service_manager::Main()
#9 0x55caac847f14 content::ContentMain()
#10 0x55cab09579b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55cab0957a42 headless::HeadlessBrowserMain()
#12 0x55caac84ff9d headless::HeadlessShellMain()
#13 0x55caaaeae1ac ChromeMain
#14 0x7fb0ed1cf2e1 __libc_start_main
#15 0x55caaaeae02a _start

Received signal 6
#0 0x55caacb0db0c base::debug::StackTrace::StackTrace()
#1 0x55caacb0d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb0f312c0c0 <unknown>
#3 0x7fb0ed1e1fff gsignal
#4 0x7fb0ed1e342a abort
#5 0x55caacb0c105 base::debug::BreakDebugger()
#6 0x55caacb26bca logging::LogMessage::~LogMessage()
#7 0x55caabbb62b1 content::ZygoteHostImpl::Init()
#8 0x55caab828c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55caab82ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55cab09589a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55caac848a00 content::RunNamedProcessTypeMain()
#12 0x55caac8492e8 content::ContentMainRunnerImpl::Run()
#13 0x55caac852f24 service_manager::Main()
#14 0x55caac847f14 content::ContentMain()
#15 0x55cab09579b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55cab0957a42 headless::HeadlessBrowserMain()
#17 0x55caac84ff9d headless::HeadlessShellMain()
#18 0x55caaaeae1ac ChromeMain
#19 0x7fb0ed1cf2e1 __libc_start_main
#20 0x55caaaeae02a _start
  r8: 0000000000000000  r9: 00007ffe9b3983c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe9b398ab8 r13: 0000000000000161 r14: 00007ffe9b398ac0 r15: 00007ffe9b398659
  di: 0000000000000002  si: 00007ffe9b3983c0  bp: 00007ffe9b398600  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb0ed1e1fff  sp: 00007ffe9b398438
  ip: 00007fb0ed1e1fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020545.726179:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55caacb0db0c base::debug::StackTrace::StackTrace()
#1 0x55caacb26780 logging::LogMessage::~LogMessage()
#2 0x55caabbb62b1 content::ZygoteHostImpl::Init()
#3 0x55caab828c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55caab82ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55cab09589a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55caac848a00 content::RunNamedProcessTypeMain()
#7 0x55caac8492e8 content::ContentMainRunnerImpl::Run()
#8 0x55caac852f24 service_manager::Main()
#9 0x55caac847f14 content::ContentMain()
#10 0x55cab09579b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55cab0957a42 headless::HeadlessBrowserMain()
#12 0x55caac84ff9d headless::HeadlessShellMain()
#13 0x55caaaeae1ac ChromeMain
#14 0x7fb0ed1cf2e1 __libc_start_main
#15 0x55caaaeae02a _start

Received signal 6
#0 0x55caacb0db0c base::debug::StackTrace::StackTrace()
#1 0x55caacb0d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb0f312c0c0 <unknown>
#3 0x7fb0ed1e1fff gsignal
#4 0x7fb0ed1e342a abort
#5 0x55caacb0c105 base::debug::BreakDebugger()
#6 0x55caacb26bca logging::LogMessage::~LogMessage()
#7 0x55caabbb62b1 content::ZygoteHostImpl::Init()
#8 0x55caab828c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55caab82ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55cab09589a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55caac848a00 content::RunNamedProcessTypeMain()
#12 0x55caac8492e8 content::ContentMainRunnerImpl::Run()
#13 0x55caac852f24 service_manager::Main()
#14 0x55caac847f14 content::ContentMain()
#15 0x55cab09579b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55cab0957a42 headless::HeadlessBrowserMain()
#17 0x55caac84ff9d headless::HeadlessShellMain()
#18 0x55caaaeae1ac ChromeMain
#19 0x7fb0ed1cf2e1 __libc_start_main
#20 0x55caaaeae02a _start
  r8: 0000000000000000  r9: 00007ffe9b3983c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe9b398ab8 r13: 0000000000000161 r14: 00007ffe9b398ac0 r15: 00007ffe9b398659
  di: 0000000000000002  si: 00007ffe9b3983c0  bp: 00007ffe9b398600  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb0ed1e1fff  sp: 00007ffe9b398438
  ip: 00007fb0ed1e1fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020545.833546:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x555fd8e74b0c base::debug::StackTrace::StackTrace()
#1 0x555fd8e8d780 logging::LogMessage::~LogMessage()
#2 0x555fd7f1d2b1 content::ZygoteHostImpl::Init()
#3 0x555fd7b8fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x555fd7b95a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x555fdccbf9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x555fd8bafa00 content::RunNamedProcessTypeMain()
#7 0x555fd8bb02e8 content::ContentMainRunnerImpl::Run()
#8 0x555fd8bb9f24 service_manager::Main()
#9 0x555fd8baef14 content::ContentMain()
#10 0x555fdccbe9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x555fdccbea42 headless::HeadlessBrowserMain()
#12 0x555fd8bb6f9d headless::HeadlessShellMain()
#13 0x555fd72151ac ChromeMain
#14 0x7fb0d3d222e1 __libc_start_main
#15 0x555fd721502a _start

Received signal 6
#0 0x555fd8e74b0c base::debug::StackTrace::StackTrace()
#1 0x555fd8e74671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb0d9c7f0c0 <unknown>
#3 0x7fb0d3d34fff gsignal
#4 0x7fb0d3d3642a abort
#5 0x555fd8e73105 base::debug::BreakDebugger()
#6 0x555fd8e8dbca logging::LogMessage::~LogMessage()
#7 0x555fd7f1d2b1 content::ZygoteHostImpl::Init()
#8 0x555fd7b8fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x555fd7b95a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x555fdccbf9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x555fd8bafa00 content::RunNamedProcessTypeMain()
#12 0x555fd8bb02e8 content::ContentMainRunnerImpl::Run()
#13 0x555fd8bb9f24 service_manager::Main()
#14 0x555fd8baef14 content::ContentMain()
#15 0x555fdccbe9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x555fdccbea42 headless::HeadlessBrowserMain()
#17 0x555fd8bb6f9d headless::HeadlessShellMain()
#18 0x555fd72151ac ChromeMain
#19 0x7fb0d3d222e1 __libc_start_main
#20 0x555fd721502a _start
  r8: 0000000000000000  r9: 00007ffe5d467b00 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe5d4681f8 r13: 0000000000000161 r14: 00007ffe5d468200 r15: 00007ffe5d467d99
  di: 0000000000000002  si: 00007ffe5d467b00  bp: 00007ffe5d467d40  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb0d3d34fff  sp: 00007ffe5d467b78
  ip: 00007fb0d3d34fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020545.833546:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x555fd8e74b0c base::debug::StackTrace::StackTrace()
#1 0x555fd8e8d780 logging::LogMessage::~LogMessage()
#2 0x555fd7f1d2b1 content::ZygoteHostImpl::Init()
#3 0x555fd7b8fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x555fd7b95a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x555fdccbf9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x555fd8bafa00 content::RunNamedProcessTypeMain()
#7 0x555fd8bb02e8 content::ContentMainRunnerImpl::Run()
#8 0x555fd8bb9f24 service_manager::Main()
#9 0x555fd8baef14 content::ContentMain()
#10 0x555fdccbe9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x555fdccbea42 headless::HeadlessBrowserMain()
#12 0x555fd8bb6f9d headless::HeadlessShellMain()
#13 0x555fd72151ac ChromeMain
#14 0x7fb0d3d222e1 __libc_start_main
#15 0x555fd721502a _start

Received signal 6
#0 0x555fd8e74b0c base::debug::StackTrace::StackTrace()
#1 0x555fd8e74671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb0d9c7f0c0 <unknown>
#3 0x7fb0d3d34fff gsignal
#4 0x7fb0d3d3642a abort
#5 0x555fd8e73105 base::debug::BreakDebugger()
#6 0x555fd8e8dbca logging::LogMessage::~LogMessage()
#7 0x555fd7f1d2b1 content::ZygoteHostImpl::Init()
#8 0x555fd7b8fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x555fd7b95a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x555fdccbf9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x555fd8bafa00 content::RunNamedProcessTypeMain()
#12 0x555fd8bb02e8 content::ContentMainRunnerImpl::Run()
#13 0x555fd8bb9f24 service_manager::Main()
#14 0x555fd8baef14 content::ContentMain()
#15 0x555fdccbe9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x555fdccbea42 headless::HeadlessBrowserMain()
#17 0x555fd8bb6f9d headless::HeadlessShellMain()
#18 0x555fd72151ac ChromeMain
#19 0x7fb0d3d222e1 __libc_start_main
#20 0x555fd721502a _start
  r8: 0000000000000000  r9: 00007ffe5d467b00 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe5d4681f8 r13: 0000000000000161 r14: 00007ffe5d468200 r15: 00007ffe5d467d99
  di: 0000000000000002  si: 00007ffe5d467b00  bp: 00007ffe5d467d40  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb0d3d34fff  sp: 00007ffe5d467b78
  ip: 00007fb0d3d34fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020552.665952:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5623ca884b0c base::debug::StackTrace::StackTrace()
#1 0x5623ca89d780 logging::LogMessage::~LogMessage()
#2 0x5623c992d2b1 content::ZygoteHostImpl::Init()
#3 0x5623c959fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5623c95a5a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5623ce6cf9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5623ca5bfa00 content::RunNamedProcessTypeMain()
#7 0x5623ca5c02e8 content::ContentMainRunnerImpl::Run()
#8 0x5623ca5c9f24 service_manager::Main()
#9 0x5623ca5bef14 content::ContentMain()
#10 0x5623ce6ce9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5623ce6cea42 headless::HeadlessBrowserMain()
#12 0x5623ca5c6f9d headless::HeadlessShellMain()
#13 0x5623c8c251ac ChromeMain
#14 0x7fc170fb02e1 __libc_start_main
#15 0x5623c8c2502a _start

Received signal 6
#0 0x5623ca884b0c base::debug::StackTrace::StackTrace()
#1 0x5623ca884671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc176f0d0c0 <unknown>
#3 0x7fc170fc2fff gsignal
#4 0x7fc170fc442a abort
#5 0x5623ca883105 base::debug::BreakDebugger()
#6 0x5623ca89dbca logging::LogMessage::~LogMessage()
#7 0x5623c992d2b1 content::ZygoteHostImpl::Init()
#8 0x5623c959fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5623c95a5a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5623ce6cf9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5623ca5bfa00 content::RunNamedProcessTypeMain()
#12 0x5623ca5c02e8 content::ContentMainRunnerImpl::Run()
#13 0x5623ca5c9f24 service_manager::Main()
#14 0x5623ca5bef14 content::ContentMain()
#15 0x5623ce6ce9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5623ce6cea42 headless::HeadlessBrowserMain()
#17 0x5623ca5c6f9d headless::HeadlessShellMain()
#18 0x5623c8c251ac ChromeMain
#19 0x7fc170fb02e1 __libc_start_main
#20 0x5623c8c2502a _start
  r8: 0000000000000000  r9: 00007ffd0147d4a0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd0147db98 r13: 0000000000000161 r14: 00007ffd0147dba0 r15: 00007ffd0147d739
  di: 0000000000000002  si: 00007ffd0147d4a0  bp: 00007ffd0147d6e0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc170fc2fff  sp: 00007ffd0147d518
  ip: 00007fc170fc2fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020552.665952:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5623ca884b0c base::debug::StackTrace::StackTrace()
#1 0x5623ca89d780 logging::LogMessage::~LogMessage()
#2 0x5623c992d2b1 content::ZygoteHostImpl::Init()
#3 0x5623c959fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5623c95a5a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5623ce6cf9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5623ca5bfa00 content::RunNamedProcessTypeMain()
#7 0x5623ca5c02e8 content::ContentMainRunnerImpl::Run()
#8 0x5623ca5c9f24 service_manager::Main()
#9 0x5623ca5bef14 content::ContentMain()
#10 0x5623ce6ce9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5623ce6cea42 headless::HeadlessBrowserMain()
#12 0x5623ca5c6f9d headless::HeadlessShellMain()
#13 0x5623c8c251ac ChromeMain
#14 0x7fc170fb02e1 __libc_start_main
#15 0x5623c8c2502a _start

Received signal 6
#0 0x5623ca884b0c base::debug::StackTrace::StackTrace()
#1 0x5623ca884671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc176f0d0c0 <unknown>
#3 0x7fc170fc2fff gsignal
#4 0x7fc170fc442a abort
#5 0x5623ca883105 base::debug::BreakDebugger()
#6 0x5623ca89dbca logging::LogMessage::~LogMessage()
#7 0x5623c992d2b1 content::ZygoteHostImpl::Init()
#8 0x5623c959fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5623c95a5a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5623ce6cf9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5623ca5bfa00 content::RunNamedProcessTypeMain()
#12 0x5623ca5c02e8 content::ContentMainRunnerImpl::Run()
#13 0x5623ca5c9f24 service_manager::Main()
#14 0x5623ca5bef14 content::ContentMain()
#15 0x5623ce6ce9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5623ce6cea42 headless::HeadlessBrowserMain()
#17 0x5623ca5c6f9d headless::HeadlessShellMain()
#18 0x5623c8c251ac ChromeMain
#19 0x7fc170fb02e1 __libc_start_main
#20 0x5623c8c2502a _start
  r8: 0000000000000000  r9: 00007ffd0147d4a0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd0147db98 r13: 0000000000000161 r14: 00007ffd0147dba0 r15: 00007ffd0147d739
  di: 0000000000000002  si: 00007ffd0147d4a0  bp: 00007ffd0147d6e0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc170fc2fff  sp: 00007ffd0147d518
  ip: 00007fc170fc2fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020552.531584:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5650c2527b0c base::debug::StackTrace::StackTrace()
#1 0x5650c2540780 logging::LogMessage::~LogMessage()
#2 0x5650c15d02b1 content::ZygoteHostImpl::Init()
#3 0x5650c1242c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5650c1248a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5650c63729a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5650c2262a00 content::RunNamedProcessTypeMain()
#7 0x5650c22632e8 content::ContentMainRunnerImpl::Run()
#8 0x5650c226cf24 service_manager::Main()
#9 0x5650c2261f14 content::ContentMain()
#10 0x5650c63719b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5650c6371a42 headless::HeadlessBrowserMain()
#12 0x5650c2269f9d headless::HeadlessShellMain()
#13 0x5650c08c81ac ChromeMain
#14 0x7f0bc9bd42e1 __libc_start_main
#15 0x5650c08c802a _start

Received signal 6
#0 0x5650c2527b0c base::debug::StackTrace::StackTrace()
#1 0x5650c2527671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f0bcfb310c0 <unknown>
#3 0x7f0bc9be6fff gsignal
#4 0x7f0bc9be842a abort
#5 0x5650c2526105 base::debug::BreakDebugger()
#6 0x5650c2540bca logging::LogMessage::~LogMessage()
#7 0x5650c15d02b1 content::ZygoteHostImpl::Init()
#8 0x5650c1242c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5650c1248a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5650c63729a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5650c2262a00 content::RunNamedProcessTypeMain()
#12 0x5650c22632e8 content::ContentMainRunnerImpl::Run()
#13 0x5650c226cf24 service_manager::Main()
#14 0x5650c2261f14 content::ContentMain()
#15 0x5650c63719b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5650c6371a42 headless::HeadlessBrowserMain()
#17 0x5650c2269f9d headless::HeadlessShellMain()
#18 0x5650c08c81ac ChromeMain
#19 0x7f0bc9bd42e1 __libc_start_main
#20 0x5650c08c802a _start
  r8: 0000000000000000  r9: 00007ffde3600e60 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffde3601558 r13: 0000000000000161 r14: 00007ffde3601560 r15: 00007ffde36010f9
  di: 0000000000000002  si: 00007ffde3600e60  bp: 00007ffde36010a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f0bc9be6fff  sp: 00007ffde3600ed8
  ip: 00007f0bc9be6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020552.531584:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5650c2527b0c base::debug::StackTrace::StackTrace()
#1 0x5650c2540780 logging::LogMessage::~LogMessage()
#2 0x5650c15d02b1 content::ZygoteHostImpl::Init()
#3 0x5650c1242c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5650c1248a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5650c63729a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5650c2262a00 content::RunNamedProcessTypeMain()
#7 0x5650c22632e8 content::ContentMainRunnerImpl::Run()
#8 0x5650c226cf24 service_manager::Main()
#9 0x5650c2261f14 content::ContentMain()
#10 0x5650c63719b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5650c6371a42 headless::HeadlessBrowserMain()
#12 0x5650c2269f9d headless::HeadlessShellMain()
#13 0x5650c08c81ac ChromeMain
#14 0x7f0bc9bd42e1 __libc_start_main
#15 0x5650c08c802a _start

Received signal 6
#0 0x5650c2527b0c base::debug::StackTrace::StackTrace()
#1 0x5650c2527671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f0bcfb310c0 <unknown>
#3 0x7f0bc9be6fff gsignal
#4 0x7f0bc9be842a abort
#5 0x5650c2526105 base::debug::BreakDebugger()
#6 0x5650c2540bca logging::LogMessage::~LogMessage()
#7 0x5650c15d02b1 content::ZygoteHostImpl::Init()
#8 0x5650c1242c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5650c1248a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5650c63729a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5650c2262a00 content::RunNamedProcessTypeMain()
#12 0x5650c22632e8 content::ContentMainRunnerImpl::Run()
#13 0x5650c226cf24 service_manager::Main()
#14 0x5650c2261f14 content::ContentMain()
#15 0x5650c63719b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5650c6371a42 headless::HeadlessBrowserMain()
#17 0x5650c2269f9d headless::HeadlessShellMain()
#18 0x5650c08c81ac ChromeMain
#19 0x7f0bc9bd42e1 __libc_start_main
#20 0x5650c08c802a _start
  r8: 0000000000000000  r9: 00007ffde3600e60 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffde3601558 r13: 0000000000000161 r14: 00007ffde3601560 r15: 00007ffde36010f9
  di: 0000000000000002  si: 00007ffde3600e60  bp: 00007ffde36010a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f0bc9be6fff  sp: 00007ffde3600ed8
  ip: 00007f0bc9be6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020552.688599:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55cd3d033b0c base::debug::StackTrace::StackTrace()
#1 0x55cd3d04c780 logging::LogMessage::~LogMessage()
#2 0x55cd3c0dc2b1 content::ZygoteHostImpl::Init()
#3 0x55cd3bd4ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55cd3bd54a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55cd40e7e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55cd3cd6ea00 content::RunNamedProcessTypeMain()
#7 0x55cd3cd6f2e8 content::ContentMainRunnerImpl::Run()
#8 0x55cd3cd78f24 service_manager::Main()
#9 0x55cd3cd6df14 content::ContentMain()
#10 0x55cd40e7d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55cd40e7da42 headless::HeadlessBrowserMain()
#12 0x55cd3cd75f9d headless::HeadlessShellMain()
#13 0x55cd3b3d41ac ChromeMain
#14 0x7f29b40dc2e1 __libc_start_main
#15 0x55cd3b3d402a _start

Received signal 6
#0 0x55cd3d033b0c base::debug::StackTrace::StackTrace()
#1 0x55cd3d033671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f29ba0390c0 <unknown>
#3 0x7f29b40eefff gsignal
#4 0x7f29b40f042a abort
#5 0x55cd3d032105 base::debug::BreakDebugger()
#6 0x55cd3d04cbca logging::LogMessage::~LogMessage()
#7 0x55cd3c0dc2b1 content::ZygoteHostImpl::Init()
#8 0x55cd3bd4ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55cd3bd54a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55cd40e7e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55cd3cd6ea00 content::RunNamedProcessTypeMain()
#12 0x55cd3cd6f2e8 content::ContentMainRunnerImpl::Run()
#13 0x55cd3cd78f24 service_manager::Main()
#14 0x55cd3cd6df14 content::ContentMain()
#15 0x55cd40e7d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55cd40e7da42 headless::HeadlessBrowserMain()
#17 0x55cd3cd75f9d headless::HeadlessShellMain()
#18 0x55cd3b3d41ac ChromeMain
#19 0x7f29b40dc2e1 __libc_start_main
#20 0x55cd3b3d402a _start
  r8: 0000000000000000  r9: 00007fffb785b500 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffb785bbf8 r13: 0000000000000161 r14: 00007fffb785bc00 r15: 00007fffb785b799
  di: 0000000000000002  si: 00007fffb785b500  bp: 00007fffb785b740  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f29b40eefff  sp: 00007fffb785b578
  ip: 00007f29b40eefff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020552.688599:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55cd3d033b0c base::debug::StackTrace::StackTrace()
#1 0x55cd3d04c780 logging::LogMessage::~LogMessage()
#2 0x55cd3c0dc2b1 content::ZygoteHostImpl::Init()
#3 0x55cd3bd4ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55cd3bd54a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55cd40e7e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55cd3cd6ea00 content::RunNamedProcessTypeMain()
#7 0x55cd3cd6f2e8 content::ContentMainRunnerImpl::Run()
#8 0x55cd3cd78f24 service_manager::Main()
#9 0x55cd3cd6df14 content::ContentMain()
#10 0x55cd40e7d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55cd40e7da42 headless::HeadlessBrowserMain()
#12 0x55cd3cd75f9d headless::HeadlessShellMain()
#13 0x55cd3b3d41ac ChromeMain
#14 0x7f29b40dc2e1 __libc_start_main
#15 0x55cd3b3d402a _start

Received signal 6
#0 0x55cd3d033b0c base::debug::StackTrace::StackTrace()
#1 0x55cd3d033671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f29ba0390c0 <unknown>
#3 0x7f29b40eefff gsignal
#4 0x7f29b40f042a abort
#5 0x55cd3d032105 base::debug::BreakDebugger()
#6 0x55cd3d04cbca logging::LogMessage::~LogMessage()
#7 0x55cd3c0dc2b1 content::ZygoteHostImpl::Init()
#8 0x55cd3bd4ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55cd3bd54a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55cd40e7e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55cd3cd6ea00 content::RunNamedProcessTypeMain()
#12 0x55cd3cd6f2e8 content::ContentMainRunnerImpl::Run()
#13 0x55cd3cd78f24 service_manager::Main()
#14 0x55cd3cd6df14 content::ContentMain()
#15 0x55cd40e7d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55cd40e7da42 headless::HeadlessBrowserMain()
#17 0x55cd3cd75f9d headless::HeadlessShellMain()
#18 0x55cd3b3d41ac ChromeMain
#19 0x7f29b40dc2e1 __libc_start_main
#20 0x55cd3b3d402a _start
  r8: 0000000000000000  r9: 00007fffb785b500 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffb785bbf8 r13: 0000000000000161 r14: 00007fffb785bc00 r15: 00007fffb785b799
  di: 0000000000000002  si: 00007fffb785b500  bp: 00007fffb785b740  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f29b40eefff  sp: 00007fffb785b578
  ip: 00007f29b40eefff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020502.467423:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b9851edb0c base::debug::StackTrace::StackTrace()
#1 0x55b985206780 logging::LogMessage::~LogMessage()
#2 0x55b9842962b1 content::ZygoteHostImpl::Init()
#3 0x55b983f08c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b983f0ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b9890389a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b984f28a00 content::RunNamedProcessTypeMain()
#7 0x55b984f292e8 content::ContentMainRunnerImpl::Run()
#8 0x55b984f32f24 service_manager::Main()
#9 0x55b984f27f14 content::ContentMain()
#10 0x55b9890379b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b989037a42 headless::HeadlessBrowserMain()
#12 0x55b984f2ff9d headless::HeadlessShellMain()
#13 0x55b98358e1ac ChromeMain
#14 0x7f247f5722e1 __libc_start_main
#15 0x55b98358e02a _start

Received signal 6
#0 0x55b9851edb0c base::debug::StackTrace::StackTrace()
#1 0x55b9851ed671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f24854cf0c0 <unknown>
#3 0x7f247f584fff gsignal
#4 0x7f247f58642a abort
#5 0x55b9851ec105 base::debug::BreakDebugger()
#6 0x55b985206bca logging::LogMessage::~LogMessage()
#7 0x55b9842962b1 content::ZygoteHostImpl::Init()
#8 0x55b983f08c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b983f0ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b9890389a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b984f28a00 content::RunNamedProcessTypeMain()
#12 0x55b984f292e8 content::ContentMainRunnerImpl::Run()
#13 0x55b984f32f24 service_manager::Main()
#14 0x55b984f27f14 content::ContentMain()
#15 0x55b9890379b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b989037a42 headless::HeadlessBrowserMain()
#17 0x55b984f2ff9d headless::HeadlessShellMain()
#18 0x55b98358e1ac ChromeMain
#19 0x7f247f5722e1 __libc_start_main
#20 0x55b98358e02a _start
  r8: 0000000000000000  r9: 00007ffd90a8e530 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd90a8ec28 r13: 0000000000000161 r14: 00007ffd90a8ec30 r15: 00007ffd90a8e7c9
  di: 0000000000000002  si: 00007ffd90a8e530  bp: 00007ffd90a8e770  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f247f584fff  sp: 00007ffd90a8e5a8
  ip: 00007f247f584fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020502.467423:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b9851edb0c base::debug::StackTrace::StackTrace()
#1 0x55b985206780 logging::LogMessage::~LogMessage()
#2 0x55b9842962b1 content::ZygoteHostImpl::Init()
#3 0x55b983f08c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b983f0ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b9890389a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b984f28a00 content::RunNamedProcessTypeMain()
#7 0x55b984f292e8 content::ContentMainRunnerImpl::Run()
#8 0x55b984f32f24 service_manager::Main()
#9 0x55b984f27f14 content::ContentMain()
#10 0x55b9890379b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b989037a42 headless::HeadlessBrowserMain()
#12 0x55b984f2ff9d headless::HeadlessShellMain()
#13 0x55b98358e1ac ChromeMain
#14 0x7f247f5722e1 __libc_start_main
#15 0x55b98358e02a _start

Received signal 6
#0 0x55b9851edb0c base::debug::StackTrace::StackTrace()
#1 0x55b9851ed671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f24854cf0c0 <unknown>
#3 0x7f247f584fff gsignal
#4 0x7f247f58642a abort
#5 0x55b9851ec105 base::debug::BreakDebugger()
#6 0x55b985206bca logging::LogMessage::~LogMessage()
#7 0x55b9842962b1 content::ZygoteHostImpl::Init()
#8 0x55b983f08c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b983f0ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b9890389a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b984f28a00 content::RunNamedProcessTypeMain()
#12 0x55b984f292e8 content::ContentMainRunnerImpl::Run()
#13 0x55b984f32f24 service_manager::Main()
#14 0x55b984f27f14 content::ContentMain()
#15 0x55b9890379b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b989037a42 headless::HeadlessBrowserMain()
#17 0x55b984f2ff9d headless::HeadlessShellMain()
#18 0x55b98358e1ac ChromeMain
#19 0x7f247f5722e1 __libc_start_main
#20 0x55b98358e02a _start
  r8: 0000000000000000  r9: 00007ffd90a8e530 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd90a8ec28 r13: 0000000000000161 r14: 00007ffd90a8ec30 r15: 00007ffd90a8e7c9
  di: 0000000000000002  si: 00007ffd90a8e530  bp: 00007ffd90a8e770  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f247f584fff  sp: 00007ffd90a8e5a8
  ip: 00007f247f584fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020555.959066:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e5ba9e8b0c base::debug::StackTrace::StackTrace()
#1 0x55e5baa01780 logging::LogMessage::~LogMessage()
#2 0x55e5b9a912b1 content::ZygoteHostImpl::Init()
#3 0x55e5b9703c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e5b9709a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e5be8339a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e5ba723a00 content::RunNamedProcessTypeMain()
#7 0x55e5ba7242e8 content::ContentMainRunnerImpl::Run()
#8 0x55e5ba72df24 service_manager::Main()
#9 0x55e5ba722f14 content::ContentMain()
#10 0x55e5be8329b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e5be832a42 headless::HeadlessBrowserMain()
#12 0x55e5ba72af9d headless::HeadlessShellMain()
#13 0x55e5b8d891ac ChromeMain
#14 0x7f18724fb2e1 __libc_start_main
#15 0x55e5b8d8902a _start

Received signal 6
#0 0x55e5ba9e8b0c base::debug::StackTrace::StackTrace()
#1 0x55e5ba9e8671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f18784580c0 <unknown>
#3 0x7f187250dfff gsignal
#4 0x7f187250f42a abort
#5 0x55e5ba9e7105 base::debug::BreakDebugger()
#6 0x55e5baa01bca logging::LogMessage::~LogMessage()
#7 0x55e5b9a912b1 content::ZygoteHostImpl::Init()
#8 0x55e5b9703c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e5b9709a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e5be8339a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e5ba723a00 content::RunNamedProcessTypeMain()
#12 0x55e5ba7242e8 content::ContentMainRunnerImpl::Run()
#13 0x55e5ba72df24 service_manager::Main()
#14 0x55e5ba722f14 content::ContentMain()
#15 0x55e5be8329b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e5be832a42 headless::HeadlessBrowserMain()
#17 0x55e5ba72af9d headless::HeadlessShellMain()
#18 0x55e5b8d891ac ChromeMain
#19 0x7f18724fb2e1 __libc_start_main
#20 0x55e5b8d8902a _start
  r8: 0000000000000000  r9: 00007ffed3e83de0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffed3e844d8 r13: 0000000000000161 r14: 00007ffed3e844e0 r15: 00007ffed3e84079
  di: 0000000000000002  si: 00007ffed3e83de0  bp: 00007ffed3e84020  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f187250dfff  sp: 00007ffed3e83e58
  ip: 00007f187250dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020555.959066:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e5ba9e8b0c base::debug::StackTrace::StackTrace()
#1 0x55e5baa01780 logging::LogMessage::~LogMessage()
#2 0x55e5b9a912b1 content::ZygoteHostImpl::Init()
#3 0x55e5b9703c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e5b9709a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e5be8339a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e5ba723a00 content::RunNamedProcessTypeMain()
#7 0x55e5ba7242e8 content::ContentMainRunnerImpl::Run()
#8 0x55e5ba72df24 service_manager::Main()
#9 0x55e5ba722f14 content::ContentMain()
#10 0x55e5be8329b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e5be832a42 headless::HeadlessBrowserMain()
#12 0x55e5ba72af9d headless::HeadlessShellMain()
#13 0x55e5b8d891ac ChromeMain
#14 0x7f18724fb2e1 __libc_start_main
#15 0x55e5b8d8902a _start

Received signal 6
#0 0x55e5ba9e8b0c base::debug::StackTrace::StackTrace()
#1 0x55e5ba9e8671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f18784580c0 <unknown>
#3 0x7f187250dfff gsignal
#4 0x7f187250f42a abort
#5 0x55e5ba9e7105 base::debug::BreakDebugger()
#6 0x55e5baa01bca logging::LogMessage::~LogMessage()
#7 0x55e5b9a912b1 content::ZygoteHostImpl::Init()
#8 0x55e5b9703c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e5b9709a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e5be8339a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e5ba723a00 content::RunNamedProcessTypeMain()
#12 0x55e5ba7242e8 content::ContentMainRunnerImpl::Run()
#13 0x55e5ba72df24 service_manager::Main()
#14 0x55e5ba722f14 content::ContentMain()
#15 0x55e5be8329b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e5be832a42 headless::HeadlessBrowserMain()
#17 0x55e5ba72af9d headless::HeadlessShellMain()
#18 0x55e5b8d891ac ChromeMain
#19 0x7f18724fb2e1 __libc_start_main
#20 0x55e5b8d8902a _start
  r8: 0000000000000000  r9: 00007ffed3e83de0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffed3e844d8 r13: 0000000000000161 r14: 00007ffed3e844e0 r15: 00007ffed3e84079
  di: 0000000000000002  si: 00007ffed3e83de0  bp: 00007ffed3e84020  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f187250dfff  sp: 00007ffed3e83e58
  ip: 00007f187250dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020608.637060:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f32aee7b0c base::debug::StackTrace::StackTrace()
#1 0x55f32af00780 logging::LogMessage::~LogMessage()
#2 0x55f329f902b1 content::ZygoteHostImpl::Init()
#3 0x55f329c02c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f329c08a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f32ed329a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f32ac22a00 content::RunNamedProcessTypeMain()
#7 0x55f32ac232e8 content::ContentMainRunnerImpl::Run()
#8 0x55f32ac2cf24 service_manager::Main()
#9 0x55f32ac21f14 content::ContentMain()
#10 0x55f32ed319b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f32ed31a42 headless::HeadlessBrowserMain()
#12 0x55f32ac29f9d headless::HeadlessShellMain()
#13 0x55f3292881ac ChromeMain
#14 0x7f4b0b9a12e1 __libc_start_main
#15 0x55f32928802a _start

Received signal 6
#0 0x55f32aee7b0c base::debug::StackTrace::StackTrace()
#1 0x55f32aee7671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f4b118fe0c0 <unknown>
#3 0x7f4b0b9b3fff gsignal
#4 0x7f4b0b9b542a abort
#5 0x55f32aee6105 base::debug::BreakDebugger()
#6 0x55f32af00bca logging::LogMessage::~LogMessage()
#7 0x55f329f902b1 content::ZygoteHostImpl::Init()
#8 0x55f329c02c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f329c08a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f32ed329a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f32ac22a00 content::RunNamedProcessTypeMain()
#12 0x55f32ac232e8 content::ContentMainRunnerImpl::Run()
#13 0x55f32ac2cf24 service_manager::Main()
#14 0x55f32ac21f14 content::ContentMain()
#15 0x55f32ed319b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f32ed31a42 headless::HeadlessBrowserMain()
#17 0x55f32ac29f9d headless::HeadlessShellMain()
#18 0x55f3292881ac ChromeMain
#19 0x7f4b0b9a12e1 __libc_start_main
#20 0x55f32928802a _start
  r8: 0000000000000000  r9: 00007ffd1a307180 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd1a307878 r13: 0000000000000161 r14: 00007ffd1a307880 r15: 00007ffd1a307419
  di: 0000000000000002  si: 00007ffd1a307180  bp: 00007ffd1a3073c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f4b0b9b3fff  sp: 00007ffd1a3071f8
  ip: 00007f4b0b9b3fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020608.637060:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f32aee7b0c base::debug::StackTrace::StackTrace()
#1 0x55f32af00780 logging::LogMessage::~LogMessage()
#2 0x55f329f902b1 content::ZygoteHostImpl::Init()
#3 0x55f329c02c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f329c08a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f32ed329a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f32ac22a00 content::RunNamedProcessTypeMain()
#7 0x55f32ac232e8 content::ContentMainRunnerImpl::Run()
#8 0x55f32ac2cf24 service_manager::Main()
#9 0x55f32ac21f14 content::ContentMain()
#10 0x55f32ed319b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f32ed31a42 headless::HeadlessBrowserMain()
#12 0x55f32ac29f9d headless::HeadlessShellMain()
#13 0x55f3292881ac ChromeMain
#14 0x7f4b0b9a12e1 __libc_start_main
#15 0x55f32928802a _start

Received signal 6
#0 0x55f32aee7b0c base::debug::StackTrace::StackTrace()
#1 0x55f32aee7671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f4b118fe0c0 <unknown>
#3 0x7f4b0b9b3fff gsignal
#4 0x7f4b0b9b542a abort
#5 0x55f32aee6105 base::debug::BreakDebugger()
#6 0x55f32af00bca logging::LogMessage::~LogMessage()
#7 0x55f329f902b1 content::ZygoteHostImpl::Init()
#8 0x55f329c02c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f329c08a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f32ed329a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f32ac22a00 content::RunNamedProcessTypeMain()
#12 0x55f32ac232e8 content::ContentMainRunnerImpl::Run()
#13 0x55f32ac2cf24 service_manager::Main()
#14 0x55f32ac21f14 content::ContentMain()
#15 0x55f32ed319b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f32ed31a42 headless::HeadlessBrowserMain()
#17 0x55f32ac29f9d headless::HeadlessShellMain()
#18 0x55f3292881ac ChromeMain
#19 0x7f4b0b9a12e1 __libc_start_main
#20 0x55f32928802a _start
  r8: 0000000000000000  r9: 00007ffd1a307180 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd1a307878 r13: 0000000000000161 r14: 00007ffd1a307880 r15: 00007ffd1a307419
  di: 0000000000000002  si: 00007ffd1a307180  bp: 00007ffd1a3073c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f4b0b9b3fff  sp: 00007ffd1a3071f8
  ip: 00007f4b0b9b3fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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




