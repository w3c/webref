% Specifications that define WebIDL content (WHATWG perspective)
% Reffy
% May 10, 2018

## Accelerated Shape Detection in Images {data-spec=true data-anomaly=true data-missingWebIdlRef=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/shape-detection-api/) (4 April 2018)
- Repository: [GitHub wicg/shape-detection-api](https://github.com/wicg/shape-detection-api)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

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


## Accelerometer {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/accelerometer/) (14 March 2018)
- Editor's Draft: [https://w3c.github.io/accelerometer/](https://w3c.github.io/accelerometer/)
- Latest published version: [https://www.w3.org/TR/accelerometer/](https://www.w3.org/TR/accelerometer/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-accelerometer-20180320/)
- Repository: [GitHub w3c/accelerometer](https://github.com/w3c/accelerometer)
- Shortname: accelerometer

### Potential issue(s) {.anomalies}

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


## Ambient Light Sensor {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/ambient-light/) (15 March 2018)
- Editor's Draft: [https://w3c.github.io/ambient-light/](https://w3c.github.io/ambient-light/)
- Latest published version: [https://www.w3.org/TR/ambient-light/](https://www.w3.org/TR/ambient-light/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-ambient-light-20180320/)
- Repository: [GitHub w3c/ambient-light](https://github.com/w3c/ambient-light)
- Shortname: ambient-light

### Potential issue(s) {.anomalies}

This specification looks good!

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
[0510/020928.222945:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f39f5d1b0c base::debug::StackTrace::StackTrace()
#1 0x55f39f5ea780 logging::LogMessage::~LogMessage()
#2 0x55f39e67a2b1 content::ZygoteHostImpl::Init()
#3 0x55f39e2ecc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f39e2f2a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f3a341c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f39f30ca00 content::RunNamedProcessTypeMain()
#7 0x55f39f30d2e8 content::ContentMainRunnerImpl::Run()
#8 0x55f39f316f24 service_manager::Main()
#9 0x55f39f30bf14 content::ContentMain()
#10 0x55f3a341b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f3a341ba42 headless::HeadlessBrowserMain()
#12 0x55f39f313f9d headless::HeadlessShellMain()
#13 0x55f39d9721ac ChromeMain
#14 0x7f94f8bb42e1 __libc_start_main
#15 0x55f39d97202a _start

Received signal 6
#0 0x55f39f5d1b0c base::debug::StackTrace::StackTrace()
#1 0x55f39f5d1671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f94feb110c0 <unknown>
#3 0x7f94f8bc6fff gsignal
#4 0x7f94f8bc842a abort
#5 0x55f39f5d0105 base::debug::BreakDebugger()
#6 0x55f39f5eabca logging::LogMessage::~LogMessage()
#7 0x55f39e67a2b1 content::ZygoteHostImpl::Init()
#8 0x55f39e2ecc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f39e2f2a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f3a341c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f39f30ca00 content::RunNamedProcessTypeMain()
#12 0x55f39f30d2e8 content::ContentMainRunnerImpl::Run()
#13 0x55f39f316f24 service_manager::Main()
#14 0x55f39f30bf14 content::ContentMain()
#15 0x55f3a341b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f3a341ba42 headless::HeadlessBrowserMain()
#17 0x55f39f313f9d headless::HeadlessShellMain()
#18 0x55f39d9721ac ChromeMain
#19 0x7f94f8bb42e1 __libc_start_main
#20 0x55f39d97202a _start
  r8: 0000000000000000  r9: 00007ffeba067380 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffeba067a78 r13: 0000000000000161 r14: 00007ffeba067a80 r15: 00007ffeba067619
  di: 0000000000000002  si: 00007ffeba067380  bp: 00007ffeba0675c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f94f8bc6fff  sp: 00007ffeba0673f8
  ip: 00007f94f8bc6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020928.222945:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f39f5d1b0c base::debug::StackTrace::StackTrace()
#1 0x55f39f5ea780 logging::LogMessage::~LogMessage()
#2 0x55f39e67a2b1 content::ZygoteHostImpl::Init()
#3 0x55f39e2ecc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f39e2f2a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f3a341c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f39f30ca00 content::RunNamedProcessTypeMain()
#7 0x55f39f30d2e8 content::ContentMainRunnerImpl::Run()
#8 0x55f39f316f24 service_manager::Main()
#9 0x55f39f30bf14 content::ContentMain()
#10 0x55f3a341b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f3a341ba42 headless::HeadlessBrowserMain()
#12 0x55f39f313f9d headless::HeadlessShellMain()
#13 0x55f39d9721ac ChromeMain
#14 0x7f94f8bb42e1 __libc_start_main
#15 0x55f39d97202a _start

Received signal 6
#0 0x55f39f5d1b0c base::debug::StackTrace::StackTrace()
#1 0x55f39f5d1671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f94feb110c0 <unknown>
#3 0x7f94f8bc6fff gsignal
#4 0x7f94f8bc842a abort
#5 0x55f39f5d0105 base::debug::BreakDebugger()
#6 0x55f39f5eabca logging::LogMessage::~LogMessage()
#7 0x55f39e67a2b1 content::ZygoteHostImpl::Init()
#8 0x55f39e2ecc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f39e2f2a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f3a341c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f39f30ca00 content::RunNamedProcessTypeMain()
#12 0x55f39f30d2e8 content::ContentMainRunnerImpl::Run()
#13 0x55f39f316f24 service_manager::Main()
#14 0x55f39f30bf14 content::ContentMain()
#15 0x55f3a341b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f3a341ba42 headless::HeadlessBrowserMain()
#17 0x55f39f313f9d headless::HeadlessShellMain()
#18 0x55f39d9721ac ChromeMain
#19 0x7f94f8bb42e1 __libc_start_main
#20 0x55f39d97202a _start
  r8: 0000000000000000  r9: 00007ffeba067380 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffeba067a78 r13: 0000000000000161 r14: 00007ffeba067a80 r15: 00007ffeba067619
  di: 0000000000000002  si: 00007ffeba067380  bp: 00007ffeba0675c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f94f8bc6fff  sp: 00007ffeba0673f8
  ip: 00007f94f8bc6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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


## Background Fetch {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/background-fetch/) (12 October 2017)
- Repository: [GitHub wicg/background-fetch](https://github.com/wicg/background-fetch)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

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
[0510/020931.005846:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564f71f9cb0c base::debug::StackTrace::StackTrace()
#1 0x564f71fb5780 logging::LogMessage::~LogMessage()
#2 0x564f710452b1 content::ZygoteHostImpl::Init()
#3 0x564f70cb7c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564f70cbda69 content::BrowserMainRunnerImpl::Initialize()
#5 0x564f75de79a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x564f71cd7a00 content::RunNamedProcessTypeMain()
#7 0x564f71cd82e8 content::ContentMainRunnerImpl::Run()
#8 0x564f71ce1f24 service_manager::Main()
#9 0x564f71cd6f14 content::ContentMain()
#10 0x564f75de69b9 headless::(anonymous namespace)::RunContentMain()
#11 0x564f75de6a42 headless::HeadlessBrowserMain()
#12 0x564f71cdef9d headless::HeadlessShellMain()
#13 0x564f7033d1ac ChromeMain
#14 0x7f7a79f3c2e1 __libc_start_main
#15 0x564f7033d02a _start

Received signal 6
#0 0x564f71f9cb0c base::debug::StackTrace::StackTrace()
#1 0x564f71f9c671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f7a7fe990c0 <unknown>
#3 0x7f7a79f4efff gsignal
#4 0x7f7a79f5042a abort
#5 0x564f71f9b105 base::debug::BreakDebugger()
#6 0x564f71fb5bca logging::LogMessage::~LogMessage()
#7 0x564f710452b1 content::ZygoteHostImpl::Init()
#8 0x564f70cb7c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564f70cbda69 content::BrowserMainRunnerImpl::Initialize()
#10 0x564f75de79a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x564f71cd7a00 content::RunNamedProcessTypeMain()
#12 0x564f71cd82e8 content::ContentMainRunnerImpl::Run()
#13 0x564f71ce1f24 service_manager::Main()
#14 0x564f71cd6f14 content::ContentMain()
#15 0x564f75de69b9 headless::(anonymous namespace)::RunContentMain()
#16 0x564f75de6a42 headless::HeadlessBrowserMain()
#17 0x564f71cdef9d headless::HeadlessShellMain()
#18 0x564f7033d1ac ChromeMain
#19 0x7f7a79f3c2e1 __libc_start_main
#20 0x564f7033d02a _start
  r8: 0000000000000000  r9: 00007ffd56e84ac0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd56e851b8 r13: 0000000000000161 r14: 00007ffd56e851c0 r15: 00007ffd56e84d59
  di: 0000000000000002  si: 00007ffd56e84ac0  bp: 00007ffd56e84d00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f7a79f4efff  sp: 00007ffd56e84b38
  ip: 00007f7a79f4efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020931.005846:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564f71f9cb0c base::debug::StackTrace::StackTrace()
#1 0x564f71fb5780 logging::LogMessage::~LogMessage()
#2 0x564f710452b1 content::ZygoteHostImpl::Init()
#3 0x564f70cb7c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564f70cbda69 content::BrowserMainRunnerImpl::Initialize()
#5 0x564f75de79a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x564f71cd7a00 content::RunNamedProcessTypeMain()
#7 0x564f71cd82e8 content::ContentMainRunnerImpl::Run()
#8 0x564f71ce1f24 service_manager::Main()
#9 0x564f71cd6f14 content::ContentMain()
#10 0x564f75de69b9 headless::(anonymous namespace)::RunContentMain()
#11 0x564f75de6a42 headless::HeadlessBrowserMain()
#12 0x564f71cdef9d headless::HeadlessShellMain()
#13 0x564f7033d1ac ChromeMain
#14 0x7f7a79f3c2e1 __libc_start_main
#15 0x564f7033d02a _start

Received signal 6
#0 0x564f71f9cb0c base::debug::StackTrace::StackTrace()
#1 0x564f71f9c671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f7a7fe990c0 <unknown>
#3 0x7f7a79f4efff gsignal
#4 0x7f7a79f5042a abort
#5 0x564f71f9b105 base::debug::BreakDebugger()
#6 0x564f71fb5bca logging::LogMessage::~LogMessage()
#7 0x564f710452b1 content::ZygoteHostImpl::Init()
#8 0x564f70cb7c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564f70cbda69 content::BrowserMainRunnerImpl::Initialize()
#10 0x564f75de79a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x564f71cd7a00 content::RunNamedProcessTypeMain()
#12 0x564f71cd82e8 content::ContentMainRunnerImpl::Run()
#13 0x564f71ce1f24 service_manager::Main()
#14 0x564f71cd6f14 content::ContentMain()
#15 0x564f75de69b9 headless::(anonymous namespace)::RunContentMain()
#16 0x564f75de6a42 headless::HeadlessBrowserMain()
#17 0x564f71cdef9d headless::HeadlessShellMain()
#18 0x564f7033d1ac ChromeMain
#19 0x7f7a79f3c2e1 __libc_start_main
#20 0x564f7033d02a _start
  r8: 0000000000000000  r9: 00007ffd56e84ac0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd56e851b8 r13: 0000000000000161 r14: 00007ffd56e851c0 r15: 00007ffd56e84d59
  di: 0000000000000002  si: 00007ffd56e84ac0  bp: 00007ffd56e84d00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f7a79f4efff  sp: 00007ffd56e84b38
  ip: 00007f7a79f4efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- [HTML Standard](https://html.spec.whatwg.org/)
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
[0510/020927.495113:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55785422cb0c base::debug::StackTrace::StackTrace()
#1 0x557854245780 logging::LogMessage::~LogMessage()
#2 0x5578532d52b1 content::ZygoteHostImpl::Init()
#3 0x557852f47c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557852f4da69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5578580779a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557853f67a00 content::RunNamedProcessTypeMain()
#7 0x557853f682e8 content::ContentMainRunnerImpl::Run()
#8 0x557853f71f24 service_manager::Main()
#9 0x557853f66f14 content::ContentMain()
#10 0x5578580769b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557858076a42 headless::HeadlessBrowserMain()
#12 0x557853f6ef9d headless::HeadlessShellMain()
#13 0x5578525cd1ac ChromeMain
#14 0x7f8e029802e1 __libc_start_main
#15 0x5578525cd02a _start

Received signal 6
#0 0x55785422cb0c base::debug::StackTrace::StackTrace()
#1 0x55785422c671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f8e088dd0c0 <unknown>
#3 0x7f8e02992fff gsignal
#4 0x7f8e0299442a abort
#5 0x55785422b105 base::debug::BreakDebugger()
#6 0x557854245bca logging::LogMessage::~LogMessage()
#7 0x5578532d52b1 content::ZygoteHostImpl::Init()
#8 0x557852f47c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557852f4da69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5578580779a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557853f67a00 content::RunNamedProcessTypeMain()
#12 0x557853f682e8 content::ContentMainRunnerImpl::Run()
#13 0x557853f71f24 service_manager::Main()
#14 0x557853f66f14 content::ContentMain()
#15 0x5578580769b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557858076a42 headless::HeadlessBrowserMain()
#17 0x557853f6ef9d headless::HeadlessShellMain()
#18 0x5578525cd1ac ChromeMain
#19 0x7f8e029802e1 __libc_start_main
#20 0x5578525cd02a _start
  r8: 0000000000000000  r9: 00007ffd1a76fba0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd1a770298 r13: 0000000000000161 r14: 00007ffd1a7702a0 r15: 00007ffd1a76fe39
  di: 0000000000000002  si: 00007ffd1a76fba0  bp: 00007ffd1a76fde0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f8e02992fff  sp: 00007ffd1a76fc18
  ip: 00007f8e02992fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020927.495113:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55785422cb0c base::debug::StackTrace::StackTrace()
#1 0x557854245780 logging::LogMessage::~LogMessage()
#2 0x5578532d52b1 content::ZygoteHostImpl::Init()
#3 0x557852f47c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557852f4da69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5578580779a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557853f67a00 content::RunNamedProcessTypeMain()
#7 0x557853f682e8 content::ContentMainRunnerImpl::Run()
#8 0x557853f71f24 service_manager::Main()
#9 0x557853f66f14 content::ContentMain()
#10 0x5578580769b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557858076a42 headless::HeadlessBrowserMain()
#12 0x557853f6ef9d headless::HeadlessShellMain()
#13 0x5578525cd1ac ChromeMain
#14 0x7f8e029802e1 __libc_start_main
#15 0x5578525cd02a _start

Received signal 6
#0 0x55785422cb0c base::debug::StackTrace::StackTrace()
#1 0x55785422c671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f8e088dd0c0 <unknown>
#3 0x7f8e02992fff gsignal
#4 0x7f8e0299442a abort
#5 0x55785422b105 base::debug::BreakDebugger()
#6 0x557854245bca logging::LogMessage::~LogMessage()
#7 0x5578532d52b1 content::ZygoteHostImpl::Init()
#8 0x557852f47c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557852f4da69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5578580779a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557853f67a00 content::RunNamedProcessTypeMain()
#12 0x557853f682e8 content::ContentMainRunnerImpl::Run()
#13 0x557853f71f24 service_manager::Main()
#14 0x557853f66f14 content::ContentMain()
#15 0x5578580769b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557858076a42 headless::HeadlessBrowserMain()
#17 0x557853f6ef9d headless::HeadlessShellMain()
#18 0x5578525cd1ac ChromeMain
#19 0x7f8e029802e1 __libc_start_main
#20 0x5578525cd02a _start
  r8: 0000000000000000  r9: 00007ffd1a76fba0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd1a770298 r13: 0000000000000161 r14: 00007ffd1a7702a0 r15: 00007ffd1a76fe39
  di: 0000000000000002  si: 00007ffd1a76fba0  bp: 00007ffd1a76fde0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f8e02992fff  sp: 00007ffd1a76fc18
  ip: 00007f8e02992fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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


## Clipboard API and events {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/clipboard-apis/) (14 March 2018)
- Editor's Draft: [https://w3c.github.io/clipboard-apis/](https://w3c.github.io/clipboard-apis/)
- Latest published version: [https://www.w3.org/TR/clipboard-apis/](https://www.w3.org/TR/clipboard-apis/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-clipboard-apis-20170929/)
- Repository: [GitHub w3c/clipboard-apis](https://github.com/w3c/clipboard-apis)
- Shortname: clipboard-apis

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://w3c.github.io/editing/contentEditable.html`](https://w3c.github.io/editing/contentEditable.html)
- Inconsistent references for links: 
     * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/), related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
     * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/), related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Permissions](https://w3c.github.io/permissions/)


## Compatibility Standard {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://compat.spec.whatwg.org/) (8 January 2018)
- Repository: [GitHub whatwg/compat](https://github.com/whatwg/compat)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

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


## Console Standard {data-spec=true data-anomaly=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://console.spec.whatwg.org/) (9 May 2018)
- Repository: [GitHub whatwg/console](https://github.com/whatwg/console)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for WebIDL names: 
     * `Worker` defined in [HTML Standard](https://html.spec.whatwg.org/) or [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
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
- [HTML Standard](https://html.spec.whatwg.org/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)

Informative references to this spec from:

- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)


## Content Security Policy: Embedded Enforcement {data-spec=true data-anomaly=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webappsec-csp/embedded/) (13 September 2017)
- Editor's Draft: [https://w3c.github.io/webappsec-csp/embedded/](https://w3c.github.io/webappsec-csp/embedded/)
- Latest published version: [https://www.w3.org/TR/csp-embedded-enforcement/](https://www.w3.org/TR/csp-embedded-enforcement/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2016/WD-csp-embedded-enforcement-20160909/)
- Repository: [GitHub w3c/webappsec-csp](https://github.com/w3c/webappsec-csp)
- Shortname: csp-embedded-enforcement

### Potential issue(s) {.anomalies}

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
[0510/021020.614192:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55a9a977bb0c base::debug::StackTrace::StackTrace()
#1 0x55a9a9794780 logging::LogMessage::~LogMessage()
#2 0x55a9a88242b1 content::ZygoteHostImpl::Init()
#3 0x55a9a8496c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55a9a849ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55a9ad5c69a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55a9a94b6a00 content::RunNamedProcessTypeMain()
#7 0x55a9a94b72e8 content::ContentMainRunnerImpl::Run()
#8 0x55a9a94c0f24 service_manager::Main()
#9 0x55a9a94b5f14 content::ContentMain()
#10 0x55a9ad5c59b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55a9ad5c5a42 headless::HeadlessBrowserMain()
#12 0x55a9a94bdf9d headless::HeadlessShellMain()
#13 0x55a9a7b1c1ac ChromeMain
#14 0x7f3d006122e1 __libc_start_main
#15 0x55a9a7b1c02a _start

Received signal 6
#0 0x55a9a977bb0c base::debug::StackTrace::StackTrace()
#1 0x55a9a977b671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f3d0656f0c0 <unknown>
#3 0x7f3d00624fff gsignal
#4 0x7f3d0062642a abort
#5 0x55a9a977a105 base::debug::BreakDebugger()
#6 0x55a9a9794bca logging::LogMessage::~LogMessage()
#7 0x55a9a88242b1 content::ZygoteHostImpl::Init()
#8 0x55a9a8496c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55a9a849ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55a9ad5c69a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55a9a94b6a00 content::RunNamedProcessTypeMain()
#12 0x55a9a94b72e8 content::ContentMainRunnerImpl::Run()
#13 0x55a9a94c0f24 service_manager::Main()
#14 0x55a9a94b5f14 content::ContentMain()
#15 0x55a9ad5c59b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55a9ad5c5a42 headless::HeadlessBrowserMain()
#17 0x55a9a94bdf9d headless::HeadlessShellMain()
#18 0x55a9a7b1c1ac ChromeMain
#19 0x7f3d006122e1 __libc_start_main
#20 0x55a9a7b1c02a _start
  r8: 0000000000000000  r9: 00007fff44495800 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff44495ef8 r13: 0000000000000161 r14: 00007fff44495f00 r15: 00007fff44495a99
  di: 0000000000000002  si: 00007fff44495800  bp: 00007fff44495a40  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3d00624fff  sp: 00007fff44495878
  ip: 00007f3d00624fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021020.614192:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55a9a977bb0c base::debug::StackTrace::StackTrace()
#1 0x55a9a9794780 logging::LogMessage::~LogMessage()
#2 0x55a9a88242b1 content::ZygoteHostImpl::Init()
#3 0x55a9a8496c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55a9a849ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55a9ad5c69a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55a9a94b6a00 content::RunNamedProcessTypeMain()
#7 0x55a9a94b72e8 content::ContentMainRunnerImpl::Run()
#8 0x55a9a94c0f24 service_manager::Main()
#9 0x55a9a94b5f14 content::ContentMain()
#10 0x55a9ad5c59b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55a9ad5c5a42 headless::HeadlessBrowserMain()
#12 0x55a9a94bdf9d headless::HeadlessShellMain()
#13 0x55a9a7b1c1ac ChromeMain
#14 0x7f3d006122e1 __libc_start_main
#15 0x55a9a7b1c02a _start

Received signal 6
#0 0x55a9a977bb0c base::debug::StackTrace::StackTrace()
#1 0x55a9a977b671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f3d0656f0c0 <unknown>
#3 0x7f3d00624fff gsignal
#4 0x7f3d0062642a abort
#5 0x55a9a977a105 base::debug::BreakDebugger()
#6 0x55a9a9794bca logging::LogMessage::~LogMessage()
#7 0x55a9a88242b1 content::ZygoteHostImpl::Init()
#8 0x55a9a8496c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55a9a849ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55a9ad5c69a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55a9a94b6a00 content::RunNamedProcessTypeMain()
#12 0x55a9a94b72e8 content::ContentMainRunnerImpl::Run()
#13 0x55a9a94c0f24 service_manager::Main()
#14 0x55a9a94b5f14 content::ContentMain()
#15 0x55a9ad5c59b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55a9ad5c5a42 headless::HeadlessBrowserMain()
#17 0x55a9a94bdf9d headless::HeadlessShellMain()
#18 0x55a9a7b1c1ac ChromeMain
#19 0x7f3d006122e1 __libc_start_main
#20 0x55a9a7b1c02a _start
  r8: 0000000000000000  r9: 00007fff44495800 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff44495ef8 r13: 0000000000000161 r14: 00007fff44495f00 r15: 00007fff44495a99
  di: 0000000000000002  si: 00007fff44495800  bp: 00007fff44495a40  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3d00624fff  sp: 00007fff44495878
  ip: 00007f3d00624fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
     * `Document` defined in [DOM Standard](https://dom.spec.whatwg.org/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/), related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Credential Management Level 1 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webappsec-credential-management/) (19 February 2018)
- Editor's Draft: [https://w3c.github.io/webappsec-credential-management/](https://w3c.github.io/webappsec-credential-management/)
- Latest published version: [https://www.w3.org/TR/credential-management-1/](https://www.w3.org/TR/credential-management-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-credential-management-1-20170804/)
- Repository: [GitHub w3c/webappsec-credential-management](https://github.com/w3c/webappsec-credential-management)
- Shortname: credential-management-1

### Potential issue(s) {.anomalies}

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

- Unknown WebIDL names used: `AnimationEffectReadOnly`, `GroupEffectReadOnly`, `sequence`
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


## CSS Animations Level 1 {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.csswg.org/css-animations/) (6 May 2018)
- Editor's Draft: [https://drafts.csswg.org/css-animations/](https://drafts.csswg.org/css-animations/)
- Latest published version: [https://www.w3.org/TR/css-animations-1/](https://www.w3.org/TR/css-animations-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-css-animations-1-20171130/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-animations-1

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/)
- [CSS Transitions](https://drafts.csswg.org/css-transitions/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [HTML Standard](https://html.spec.whatwg.org/)
- [Web Animations](https://w3c.github.io/web-animations/)

Informative references to this spec from:

- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/)
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)


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


## CSS Device Adaptation Module Level 1 {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.csswg.org/css-device-adapt/) (21 February 2018)
- Editor's Draft: [https://drafts.csswg.org/css-device-adapt/](https://drafts.csswg.org/css-device-adapt/)
- Latest published version: [http://www.w3.org/TR/css-device-adapt-1/](http://www.w3.org/TR/css-device-adapt-1/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-css-device-adapt-1-20160329/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-device-adapt-1

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/)
     * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/)
     * [`https://www.w3.org/TR/2011/WD-css-device-adapt-20110915/`](https://www.w3.org/TR/2011/WD-css-device-adapt-20110915/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSSOM View Module](https://drafts.csswg.org/cssom-view/)

No informative reference to this spec from other specs.


## CSS Font Loading Module Level 3 {data-spec=true data-anomaly=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.csswg.org/css-font-loading/) (17 March 2018)
- Editor's Draft: [https://drafts.csswg.org/css-font-loading/](https://drafts.csswg.org/css-font-loading/)
- Latest published version: [http://www.w3.org/TR/css-font-loading-3/](http://www.w3.org/TR/css-font-loading-3/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2014/WD-css-font-loading-3-20140522/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-font-loading-3

### Potential issue(s) {.anomalies}

- Inconsistent references for links: 
     * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML Standard](https://html.spec.whatwg.org/)

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


## CSS Object Model (CSSOM) {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.csswg.org/cssom/) (23 April 2018)
- Editor's Draft: [https://drafts.csswg.org/cssom/](https://drafts.csswg.org/cssom/)
- Latest published version: [http://www.w3.org/TR/cssom-1/](http://www.w3.org/TR/cssom-1/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-cssom-1-20160317/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: cssom-1

### Potential issue(s) {.anomalies}

This specification looks good!

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
- [HTML Standard](https://html.spec.whatwg.org/)
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


## CSS Pseudo-Elements Module Level 4 {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.csswg.org/css-pseudo-4/) (21 February 2018)
- Editor's Draft: [https://drafts.csswg.org/css-pseudo-4/](https://drafts.csswg.org/css-pseudo-4/)
- Latest published version: [http://www.w3.org/TR/css-pseudo-4/](http://www.w3.org/TR/css-pseudo-4/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-css-pseudo-4-20160607/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-pseudo-4

### Potential issue(s) {.anomalies}

This specification looks good!

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
- [HTML Standard](https://html.spec.whatwg.org/)
- [Intersection Observer](https://w3c.github.io/IntersectionObserver/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)
- [Worklets Level 1](https://drafts.css-houdini.org/worklets/)

No informative reference to this spec from other specs.


## CSS Transitions {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.csswg.org/css-transitions/) (21 February 2018)
- Editor's Draft: [https://drafts.csswg.org/css-transitions/](https://drafts.csswg.org/css-transitions/)
- Latest published version: [https://www.w3.org/TR/css-transitions-1/](https://www.w3.org/TR/css-transitions-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: css-transitions-1

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://w3c.github.io/dom/`](https://w3c.github.io/dom/)
     * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/)
     * [`https://www.w3.org/TR/2013/WD-css3-transitions-20131119/`](https://www.w3.org/TR/2013/WD-css3-transitions-20131119/)
     * [`https://www.w3.org/TR/2013/WD-css3-transitions-20130212/ChangeLog`](https://www.w3.org/TR/2013/WD-css3-transitions-20130212/ChangeLog)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [Web Animations](https://w3c.github.io/web-animations/)
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)

Informative references to this spec from:

- [CSS Animations Level 1](https://drafts.csswg.org/css-animations/)
- [HTML Standard](https://html.spec.whatwg.org/)


## CSS Typed OM Level 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.css-houdini.org/css-typed-om-1/) (7 May 2018)
- Editor's Draft: [https://drafts.css-houdini.org/css-typed-om-1/](https://drafts.css-houdini.org/css-typed-om-1/)
- Latest published version: [https://www.w3.org/TR/css-typed-om-1/](https://www.w3.org/TR/css-typed-om-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-css-typed-om-1-20180410/)
- Shortname: css-typed-om-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `LayoutWorklet`
- Missing references for WebIDL names: 
     * `Worker` defined in [HTML Standard](https://html.spec.whatwg.org/) or [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
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
- [HTML Standard](https://html.spec.whatwg.org/)
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
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)

Informative references to this spec from:

- [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/)


## CSSOM View Module {data-spec=true data-anomaly=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.csswg.org/cssom-view/) (20 April 2018)
- Editor's Draft: [https://drafts.csswg.org/cssom-view/](https://drafts.csswg.org/cssom-view/)
- Latest published version: [http://www.w3.org/TR/cssom-view-1/](http://www.w3.org/TR/cssom-view-1/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-cssom-view-1-20160317/)
- Repository: [GitHub w3c/csswg-drafts](https://github.com/w3c/csswg-drafts)
- Shortname: cssom-view-1

### Potential issue(s) {.anomalies}

- Missing references for WebIDL names: 
     * `MouseEvent` defined in [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
     * `MouseEventInit` defined in [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [HTML Standard](https://html.spec.whatwg.org/)
- [Intersection Observer](https://w3c.github.io/IntersectionObserver/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html)

Informative references to this spec from:

- [DOM Standard](https://dom.spec.whatwg.org/)
- [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)


## DeviceOrientation Event Specification {data-spec=true data-anomaly=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/deviceorientation/spec-source-orientation.html) (1 July 2016)
- Editor's Draft: [https://w3c.github.io/deviceorientation/spec-source-orientation.html](https://w3c.github.io/deviceorientation/spec-source-orientation.html)
- Latest published version: [https://www.w3.org/TR/orientation-event/](https://www.w3.org/TR/orientation-event/)
- Latest published status: [Retired](https://www.w3.org/TR/2017/NOTE-orientation-event-20170530/)
- Repository: [GitHub w3c/deviceorientation](https://github.com/w3c/deviceorientation)
- Shortname: orientation-event

### Potential issue(s) {.anomalies}

- Inconsistent references for links: 
     * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/), related reference "HTML51" uses URL [`https://www.w3.org/TR/2016/REC-html51-20161101/`](https://www.w3.org/TR/2016/REC-html51-20161101/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [DOM Standard](https://dom.spec.whatwg.org/)

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
[0510/020829.866594:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5653322edb0c base::debug::StackTrace::StackTrace()
#1 0x565332306780 logging::LogMessage::~LogMessage()
#2 0x5653313962b1 content::ZygoteHostImpl::Init()
#3 0x565331008c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56533100ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5653361389a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x565332028a00 content::RunNamedProcessTypeMain()
#7 0x5653320292e8 content::ContentMainRunnerImpl::Run()
#8 0x565332032f24 service_manager::Main()
#9 0x565332027f14 content::ContentMain()
#10 0x5653361379b9 headless::(anonymous namespace)::RunContentMain()
#11 0x565336137a42 headless::HeadlessBrowserMain()
#12 0x56533202ff9d headless::HeadlessShellMain()
#13 0x56533068e1ac ChromeMain
#14 0x7fd63cbc12e1 __libc_start_main
#15 0x56533068e02a _start

Received signal 6
#0 0x5653322edb0c base::debug::StackTrace::StackTrace()
#1 0x5653322ed671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd642b1e0c0 <unknown>
#3 0x7fd63cbd3fff gsignal
#4 0x7fd63cbd542a abort
#5 0x5653322ec105 base::debug::BreakDebugger()
#6 0x565332306bca logging::LogMessage::~LogMessage()
#7 0x5653313962b1 content::ZygoteHostImpl::Init()
#8 0x565331008c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56533100ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5653361389a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x565332028a00 content::RunNamedProcessTypeMain()
#12 0x5653320292e8 content::ContentMainRunnerImpl::Run()
#13 0x565332032f24 service_manager::Main()
#14 0x565332027f14 content::ContentMain()
#15 0x5653361379b9 headless::(anonymous namespace)::RunContentMain()
#16 0x565336137a42 headless::HeadlessBrowserMain()
#17 0x56533202ff9d headless::HeadlessShellMain()
#18 0x56533068e1ac ChromeMain
#19 0x7fd63cbc12e1 __libc_start_main
#20 0x56533068e02a _start
  r8: 0000000000000000  r9: 00007ffe82b9b290 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe82b9b988 r13: 0000000000000161 r14: 00007ffe82b9b990 r15: 00007ffe82b9b529
  di: 0000000000000002  si: 00007ffe82b9b290  bp: 00007ffe82b9b4d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd63cbd3fff  sp: 00007ffe82b9b308
  ip: 00007fd63cbd3fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020829.866594:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5653322edb0c base::debug::StackTrace::StackTrace()
#1 0x565332306780 logging::LogMessage::~LogMessage()
#2 0x5653313962b1 content::ZygoteHostImpl::Init()
#3 0x565331008c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56533100ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5653361389a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x565332028a00 content::RunNamedProcessTypeMain()
#7 0x5653320292e8 content::ContentMainRunnerImpl::Run()
#8 0x565332032f24 service_manager::Main()
#9 0x565332027f14 content::ContentMain()
#10 0x5653361379b9 headless::(anonymous namespace)::RunContentMain()
#11 0x565336137a42 headless::HeadlessBrowserMain()
#12 0x56533202ff9d headless::HeadlessShellMain()
#13 0x56533068e1ac ChromeMain
#14 0x7fd63cbc12e1 __libc_start_main
#15 0x56533068e02a _start

Received signal 6
#0 0x5653322edb0c base::debug::StackTrace::StackTrace()
#1 0x5653322ed671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd642b1e0c0 <unknown>
#3 0x7fd63cbd3fff gsignal
#4 0x7fd63cbd542a abort
#5 0x5653322ec105 base::debug::BreakDebugger()
#6 0x565332306bca logging::LogMessage::~LogMessage()
#7 0x5653313962b1 content::ZygoteHostImpl::Init()
#8 0x565331008c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56533100ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5653361389a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x565332028a00 content::RunNamedProcessTypeMain()
#12 0x5653320292e8 content::ContentMainRunnerImpl::Run()
#13 0x565332032f24 service_manager::Main()
#14 0x565332027f14 content::ContentMain()
#15 0x5653361379b9 headless::(anonymous namespace)::RunContentMain()
#16 0x565336137a42 headless::HeadlessBrowserMain()
#17 0x56533202ff9d headless::HeadlessShellMain()
#18 0x56533068e1ac ChromeMain
#19 0x7fd63cbc12e1 __libc_start_main
#20 0x56533068e02a _start
  r8: 0000000000000000  r9: 00007ffe82b9b290 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe82b9b988 r13: 0000000000000161 r14: 00007ffe82b9b990 r15: 00007ffe82b9b529
  di: 0000000000000002  si: 00007ffe82b9b290  bp: 00007ffe82b9b4d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd63cbd3fff  sp: 00007ffe82b9b308
  ip: 00007fd63cbd3fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- [HTML Standard](https://html.spec.whatwg.org/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Informative references to this spec from:

- [DOM Standard](https://dom.spec.whatwg.org/)


## DOM Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true data-missingWebIdlRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://dom.spec.whatwg.org/) (30 April 2018)
- Repository: [GitHub whatwg/dom](https://github.com/whatwg/dom)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMHighResTimeStamp`
- WebIDL names also defined elsewhere: 
    * `StaticRange` also defined in [Static Range](https://w3c.github.io/staticrange/)
- Missing references for WebIDL names: 
     * `AudioWorklet` defined in [Web Audio API](https://webaudio.github.io/web-audio-api/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/), related reference "HR-TIME" uses URL [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/)
     * [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/), related reference "UIEVENTS" uses URL [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/)

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
- [HTML Standard](https://html.spec.whatwg.org/)
- [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/)
- [Intersection Observer](https://w3c.github.io/IntersectionObserver/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [MediaStream Recording](https://w3c.github.io/mediacapture-record/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)
- [Notifications API Standard](https://notifications.spec.whatwg.org/)
- [Permissions](https://w3c.github.io/permissions/)
- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- [Static Range](https://w3c.github.io/staticrange/)
- [Storage Standard](https://storage.spec.whatwg.org/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [URL Standard](https://url.spec.whatwg.org/)
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html)
- [Web Animations](https://w3c.github.io/web-animations/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html)
- [Web IDL](https://heycam.github.io/webidl/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- [WebUSB API](https://wicg.github.io/webusb/)
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)
- [WebXR Device API](https://immersive-web.github.io/webxr/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Media Source Extensions™](https://w3c.github.io/media-source/)

Informative references to this spec from:

- [DOM Standard](https://dom.spec.whatwg.org/)
- [Selectors Level 3](https://www.w3.org/TR/css3-selectors/)


## Encoding Standard {data-spec=true data-anomaly=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://encoding.spec.whatwg.org/) (25 April 2018)
- Editor's Draft: [https://encoding.spec.whatwg.org/](https://encoding.spec.whatwg.org/)
- Latest published version: [https://www.w3.org/TR/encoding/](https://www.w3.org/TR/encoding/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-encoding-20180327/)
- Shortname: encoding

### Potential issue(s) {.anomalies}

- Missing references for WebIDL names: 
     * `Worker` defined in [HTML Standard](https://html.spec.whatwg.org/) or [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Content Security Policy: Embedded Enforcement](https://w3c.github.io/webappsec-csp/embedded/)
- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)
- [DOM Standard](https://dom.spec.whatwg.org/)
- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File API](https://w3c.github.io/FileAPI/)
- [HTML Standard](https://html.spec.whatwg.org/)
- [URL Standard](https://url.spec.whatwg.org/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/)
- [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

No informative reference to this spec from other specs.


## Encrypted Media Extensions {data-spec=true data-anomaly=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/encrypted-media/) (22 February 2018)
- Editor's Draft: [https://w3c.github.io/encrypted-media/](https://w3c.github.io/encrypted-media/)
- Latest published version: [https://www.w3.org/TR/encrypted-media/](https://www.w3.org/TR/encrypted-media/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2017/REC-encrypted-media-20170918/)
- Repository: [GitHub w3c/encrypted-media](https://github.com/w3c/encrypted-media)
- Shortname: encrypted-media

### Potential issue(s) {.anomalies}

- Inconsistent references for links: 
     * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/), related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
     * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/), related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)


## Feature Policy {data-spec=true data-anomaly=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/feature-policy/) (23 March 2018)
- Repository: [GitHub wicg/feature-policy](https://github.com/wicg/feature-policy)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

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

- Unknown WebIDL names used: `ReadableStream`
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
- [HTML Standard](https://html.spec.whatwg.org/)
- [Media Session Standard](https://wicg.github.io/mediasession/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)
- [Notifications API Standard](https://notifications.spec.whatwg.org/)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)
- [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Informative references to this spec from:

- [Streams Standard](https://streams.spec.whatwg.org/)


## File and Directory Entries API {data-spec=true data-anomaly=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/entries-api/) (29 January 2018)
- Repository: [GitHub wicg/entries-api](https://github.com/wicg/entries-api)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Inconsistent references for links: 
     * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/), related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## File API {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/FileAPI/) (31 January 2018)
- Editor's Draft: [https://w3c.github.io/FileAPI/](https://w3c.github.io/FileAPI/)
- Latest published version: [https://www.w3.org/TR/FileAPI/](https://www.w3.org/TR/FileAPI/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-FileAPI-20171026/)
- Repository: [GitHub w3c/FileAPI](https://github.com/w3c/FileAPI)
- Shortname: FileAPI

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Clipboard API and events](https://w3c.github.io/clipboard-apis/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File and Directory Entries API](https://wicg.github.io/entries-api/)
- [HTML Standard](https://html.spec.whatwg.org/)
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
- [HTML Standard](https://html.spec.whatwg.org/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)

No informative reference to this spec from other specs.


## Fullscreen API Standard {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://fullscreen.spec.whatwg.org/) (1 February 2018)
- Repository: [GitHub whatwg/fullscreen](https://github.com/whatwg/fullscreen)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://w3c.github.io/screen-orientation/`](https://w3c.github.io/screen-orientation/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Feature Policy](https://wicg.github.io/feature-policy/)
- [HTML Standard](https://html.spec.whatwg.org/)
- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)

Informative references to this spec from:

- [DOM Standard](https://dom.spec.whatwg.org/)
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
[0510/020959.160350:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5594635d3b0c base::debug::StackTrace::StackTrace()
#1 0x5594635ec780 logging::LogMessage::~LogMessage()
#2 0x55946267c2b1 content::ZygoteHostImpl::Init()
#3 0x5594622eec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5594622f4a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55946741e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55946330ea00 content::RunNamedProcessTypeMain()
#7 0x55946330f2e8 content::ContentMainRunnerImpl::Run()
#8 0x559463318f24 service_manager::Main()
#9 0x55946330df14 content::ContentMain()
#10 0x55946741d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55946741da42 headless::HeadlessBrowserMain()
#12 0x559463315f9d headless::HeadlessShellMain()
#13 0x5594619741ac ChromeMain
#14 0x7f2ba3ab12e1 __libc_start_main
#15 0x55946197402a _start

Received signal 6
#0 0x5594635d3b0c base::debug::StackTrace::StackTrace()
#1 0x5594635d3671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2ba9a0e0c0 <unknown>
#3 0x7f2ba3ac3fff gsignal
#4 0x7f2ba3ac542a abort
#5 0x5594635d2105 base::debug::BreakDebugger()
#6 0x5594635ecbca logging::LogMessage::~LogMessage()
#7 0x55946267c2b1 content::ZygoteHostImpl::Init()
#8 0x5594622eec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5594622f4a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55946741e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55946330ea00 content::RunNamedProcessTypeMain()
#12 0x55946330f2e8 content::ContentMainRunnerImpl::Run()
#13 0x559463318f24 service_manager::Main()
#14 0x55946330df14 content::ContentMain()
#15 0x55946741d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55946741da42 headless::HeadlessBrowserMain()
#17 0x559463315f9d headless::HeadlessShellMain()
#18 0x5594619741ac ChromeMain
#19 0x7f2ba3ab12e1 __libc_start_main
#20 0x55946197402a _start
  r8: 0000000000000000  r9: 00007fff0846abd0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff0846b2c8 r13: 0000000000000161 r14: 00007fff0846b2d0 r15: 00007fff0846ae69
  di: 0000000000000002  si: 00007fff0846abd0  bp: 00007fff0846ae10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2ba3ac3fff  sp: 00007fff0846ac48
  ip: 00007f2ba3ac3fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020959.160350:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5594635d3b0c base::debug::StackTrace::StackTrace()
#1 0x5594635ec780 logging::LogMessage::~LogMessage()
#2 0x55946267c2b1 content::ZygoteHostImpl::Init()
#3 0x5594622eec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5594622f4a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55946741e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55946330ea00 content::RunNamedProcessTypeMain()
#7 0x55946330f2e8 content::ContentMainRunnerImpl::Run()
#8 0x559463318f24 service_manager::Main()
#9 0x55946330df14 content::ContentMain()
#10 0x55946741d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55946741da42 headless::HeadlessBrowserMain()
#12 0x559463315f9d headless::HeadlessShellMain()
#13 0x5594619741ac ChromeMain
#14 0x7f2ba3ab12e1 __libc_start_main
#15 0x55946197402a _start

Received signal 6
#0 0x5594635d3b0c base::debug::StackTrace::StackTrace()
#1 0x5594635d3671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2ba9a0e0c0 <unknown>
#3 0x7f2ba3ac3fff gsignal
#4 0x7f2ba3ac542a abort
#5 0x5594635d2105 base::debug::BreakDebugger()
#6 0x5594635ecbca logging::LogMessage::~LogMessage()
#7 0x55946267c2b1 content::ZygoteHostImpl::Init()
#8 0x5594622eec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5594622f4a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55946741e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55946330ea00 content::RunNamedProcessTypeMain()
#12 0x55946330f2e8 content::ContentMainRunnerImpl::Run()
#13 0x559463318f24 service_manager::Main()
#14 0x55946330df14 content::ContentMain()
#15 0x55946741d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55946741da42 headless::HeadlessBrowserMain()
#17 0x559463315f9d headless::HeadlessShellMain()
#18 0x5594619741ac ChromeMain
#19 0x7f2ba3ab12e1 __libc_start_main
#20 0x55946197402a _start
  r8: 0000000000000000  r9: 00007fff0846abd0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff0846b2c8 r13: 0000000000000161 r14: 00007fff0846b2d0 r15: 00007fff0846ae69
  di: 0000000000000002  si: 00007fff0846abd0  bp: 00007fff0846ae10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2ba3ac3fff  sp: 00007fff0846ac48
  ip: 00007f2ba3ac3fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- Unknown WebIDL names used: `DOMHighResTimeStamp`
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


## Geolocation API Specification 2nd Edition {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/geolocation-API/) (31 January 2018))
- Latest published version: [https://www.w3.org/TR/geolocation-API/](https://www.w3.org/TR/geolocation-API/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2016/REC-geolocation-API-20161108/)
- Shortname: geolocation-API

### Potential issue(s) {.anomalies}

This specification looks good!

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

- Unknown WebIDL names used: `DOMHighResTimeStamp`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Geometry Interfaces Module Level 1 {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://drafts.fxtf.org/geometry/) (27 April 2018)
- Editor's Draft: [https://drafts.fxtf.org/geometry/](https://drafts.fxtf.org/geometry/)
- Latest published version: [http://www.w3.org/TR/geometry-1/](http://www.w3.org/TR/geometry-1/)
- Latest published status: [Candidate Recommendation](http://www.w3.org/TR/2014/CR-geometry-1-20141125/)
- Repository: [GitHub w3c/fxtf-drafts](https://github.com/w3c/fxtf-drafts)
- Shortname: geometry-1

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
- [Compatibility Standard](https://compat.spec.whatwg.org/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- [HTML Standard](https://html.spec.whatwg.org/)
- [Intersection Observer](https://w3c.github.io/IntersectionObserver/)
- [Orientation Sensor](https://w3c.github.io/orientation-sensor/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html)

Informative references to this spec from:

- [Web IDL](https://heycam.github.io/webidl/)


## Gyroscope {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/gyroscope/) (14 March 2018)
- Editor's Draft: [https://w3c.github.io/gyroscope/](https://w3c.github.io/gyroscope/)
- Latest published version: [https://www.w3.org/TR/gyroscope/](https://www.w3.org/TR/gyroscope/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-gyroscope-20180320/)
- Repository: [GitHub w3c/gyroscope](https://github.com/w3c/gyroscope)
- Shortname: gyroscope

### Potential issue(s) {.anomalies}

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
[0510/020959.426543:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56365c238b0c base::debug::StackTrace::StackTrace()
#1 0x56365c251780 logging::LogMessage::~LogMessage()
#2 0x56365b2e12b1 content::ZygoteHostImpl::Init()
#3 0x56365af53c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56365af59a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5636600839a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56365bf73a00 content::RunNamedProcessTypeMain()
#7 0x56365bf742e8 content::ContentMainRunnerImpl::Run()
#8 0x56365bf7df24 service_manager::Main()
#9 0x56365bf72f14 content::ContentMain()
#10 0x5636600829b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563660082a42 headless::HeadlessBrowserMain()
#12 0x56365bf7af9d headless::HeadlessShellMain()
#13 0x56365a5d91ac ChromeMain
#14 0x7f2cfe1552e1 __libc_start_main
#15 0x56365a5d902a _start

Received signal 6
#0 0x56365c238b0c base::debug::StackTrace::StackTrace()
#1 0x56365c238671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2d040b20c0 <unknown>
#3 0x7f2cfe167fff gsignal
#4 0x7f2cfe16942a abort
#5 0x56365c237105 base::debug::BreakDebugger()
#6 0x56365c251bca logging::LogMessage::~LogMessage()
#7 0x56365b2e12b1 content::ZygoteHostImpl::Init()
#8 0x56365af53c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56365af59a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5636600839a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56365bf73a00 content::RunNamedProcessTypeMain()
#12 0x56365bf742e8 content::ContentMainRunnerImpl::Run()
#13 0x56365bf7df24 service_manager::Main()
#14 0x56365bf72f14 content::ContentMain()
#15 0x5636600829b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563660082a42 headless::HeadlessBrowserMain()
#17 0x56365bf7af9d headless::HeadlessShellMain()
#18 0x56365a5d91ac ChromeMain
#19 0x7f2cfe1552e1 __libc_start_main
#20 0x56365a5d902a _start
  r8: 0000000000000000  r9: 00007ffe23958e80 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe23959578 r13: 0000000000000161 r14: 00007ffe23959580 r15: 00007ffe23959119
  di: 0000000000000002  si: 00007ffe23958e80  bp: 00007ffe239590c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2cfe167fff  sp: 00007ffe23958ef8
  ip: 00007f2cfe167fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020959.426543:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56365c238b0c base::debug::StackTrace::StackTrace()
#1 0x56365c251780 logging::LogMessage::~LogMessage()
#2 0x56365b2e12b1 content::ZygoteHostImpl::Init()
#3 0x56365af53c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56365af59a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5636600839a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56365bf73a00 content::RunNamedProcessTypeMain()
#7 0x56365bf742e8 content::ContentMainRunnerImpl::Run()
#8 0x56365bf7df24 service_manager::Main()
#9 0x56365bf72f14 content::ContentMain()
#10 0x5636600829b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563660082a42 headless::HeadlessBrowserMain()
#12 0x56365bf7af9d headless::HeadlessShellMain()
#13 0x56365a5d91ac ChromeMain
#14 0x7f2cfe1552e1 __libc_start_main
#15 0x56365a5d902a _start

Received signal 6
#0 0x56365c238b0c base::debug::StackTrace::StackTrace()
#1 0x56365c238671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2d040b20c0 <unknown>
#3 0x7f2cfe167fff gsignal
#4 0x7f2cfe16942a abort
#5 0x56365c237105 base::debug::BreakDebugger()
#6 0x56365c251bca logging::LogMessage::~LogMessage()
#7 0x56365b2e12b1 content::ZygoteHostImpl::Init()
#8 0x56365af53c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56365af59a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5636600839a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56365bf73a00 content::RunNamedProcessTypeMain()
#12 0x56365bf742e8 content::ContentMainRunnerImpl::Run()
#13 0x56365bf7df24 service_manager::Main()
#14 0x56365bf72f14 content::ContentMain()
#15 0x5636600829b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563660082a42 headless::HeadlessBrowserMain()
#17 0x56365bf7af9d headless::HeadlessShellMain()
#18 0x56365a5d91ac ChromeMain
#19 0x7f2cfe1552e1 __libc_start_main
#20 0x56365a5d902a _start
  r8: 0000000000000000  r9: 00007ffe23958e80 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe23959578 r13: 0000000000000161 r14: 00007ffe23959580 r15: 00007ffe23959119
  di: 0000000000000002  si: 00007ffe23958e80  bp: 00007ffe239590c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2cfe167fff  sp: 00007ffe23958ef8
  ip: 00007f2cfe167fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- [DOM Standard](https://dom.spec.whatwg.org/)
- [Generic Sensor API](https://w3c.github.io/sensors/)
- [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- [HTML Standard](https://html.spec.whatwg.org/)
- [Long Tasks API 1](https://w3c.github.io/longtasks/)
- [MediaStream Recording](https://w3c.github.io/mediacapture-record/)
- [Paint Timing 1](https://w3c.github.io/paint-timing/)
- [Web Animations](https://w3c.github.io/web-animations/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/)

Informative references to this spec from:

- [Web Animations](https://w3c.github.io/web-animations/)


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
[0510/020959.406314:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b4cfe8cb0c base::debug::StackTrace::StackTrace()
#1 0x55b4cfea5780 logging::LogMessage::~LogMessage()
#2 0x55b4cef352b1 content::ZygoteHostImpl::Init()
#3 0x55b4ceba7c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b4cebada69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b4d3cd79a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b4cfbc7a00 content::RunNamedProcessTypeMain()
#7 0x55b4cfbc82e8 content::ContentMainRunnerImpl::Run()
#8 0x55b4cfbd1f24 service_manager::Main()
#9 0x55b4cfbc6f14 content::ContentMain()
#10 0x55b4d3cd69b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b4d3cd6a42 headless::HeadlessBrowserMain()
#12 0x55b4cfbcef9d headless::HeadlessShellMain()
#13 0x55b4ce22d1ac ChromeMain
#14 0x7f81163452e1 __libc_start_main
#15 0x55b4ce22d02a _start

Received signal 6
#0 0x55b4cfe8cb0c base::debug::StackTrace::StackTrace()
#1 0x55b4cfe8c671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f811c2a20c0 <unknown>
#3 0x7f8116357fff gsignal
#4 0x7f811635942a abort
#5 0x55b4cfe8b105 base::debug::BreakDebugger()
#6 0x55b4cfea5bca logging::LogMessage::~LogMessage()
#7 0x55b4cef352b1 content::ZygoteHostImpl::Init()
#8 0x55b4ceba7c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b4cebada69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b4d3cd79a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b4cfbc7a00 content::RunNamedProcessTypeMain()
#12 0x55b4cfbc82e8 content::ContentMainRunnerImpl::Run()
#13 0x55b4cfbd1f24 service_manager::Main()
#14 0x55b4cfbc6f14 content::ContentMain()
#15 0x55b4d3cd69b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b4d3cd6a42 headless::HeadlessBrowserMain()
#17 0x55b4cfbcef9d headless::HeadlessShellMain()
#18 0x55b4ce22d1ac ChromeMain
#19 0x7f81163452e1 __libc_start_main
#20 0x55b4ce22d02a _start
  r8: 0000000000000000  r9: 00007ffecce9f410 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffecce9fb08 r13: 0000000000000161 r14: 00007ffecce9fb10 r15: 00007ffecce9f6a9
  di: 0000000000000002  si: 00007ffecce9f410  bp: 00007ffecce9f650  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f8116357fff  sp: 00007ffecce9f488
  ip: 00007f8116357fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020959.406314:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b4cfe8cb0c base::debug::StackTrace::StackTrace()
#1 0x55b4cfea5780 logging::LogMessage::~LogMessage()
#2 0x55b4cef352b1 content::ZygoteHostImpl::Init()
#3 0x55b4ceba7c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b4cebada69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b4d3cd79a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b4cfbc7a00 content::RunNamedProcessTypeMain()
#7 0x55b4cfbc82e8 content::ContentMainRunnerImpl::Run()
#8 0x55b4cfbd1f24 service_manager::Main()
#9 0x55b4cfbc6f14 content::ContentMain()
#10 0x55b4d3cd69b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b4d3cd6a42 headless::HeadlessBrowserMain()
#12 0x55b4cfbcef9d headless::HeadlessShellMain()
#13 0x55b4ce22d1ac ChromeMain
#14 0x7f81163452e1 __libc_start_main
#15 0x55b4ce22d02a _start

Received signal 6
#0 0x55b4cfe8cb0c base::debug::StackTrace::StackTrace()
#1 0x55b4cfe8c671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f811c2a20c0 <unknown>
#3 0x7f8116357fff gsignal
#4 0x7f811635942a abort
#5 0x55b4cfe8b105 base::debug::BreakDebugger()
#6 0x55b4cfea5bca logging::LogMessage::~LogMessage()
#7 0x55b4cef352b1 content::ZygoteHostImpl::Init()
#8 0x55b4ceba7c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b4cebada69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b4d3cd79a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b4cfbc7a00 content::RunNamedProcessTypeMain()
#12 0x55b4cfbc82e8 content::ContentMainRunnerImpl::Run()
#13 0x55b4cfbd1f24 service_manager::Main()
#14 0x55b4cfbc6f14 content::ContentMain()
#15 0x55b4d3cd69b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b4d3cd6a42 headless::HeadlessBrowserMain()
#17 0x55b4cfbcef9d headless::HeadlessShellMain()
#18 0x55b4ce22d1ac ChromeMain
#19 0x7f81163452e1 __libc_start_main
#20 0x55b4ce22d02a _start
  r8: 0000000000000000  r9: 00007ffecce9f410 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffecce9fb08 r13: 0000000000000161 r14: 00007ffecce9fb10 r15: 00007ffecce9f6a9
  di: 0000000000000002  si: 00007ffecce9f410  bp: 00007ffecce9f650  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f8116357fff  sp: 00007ffecce9f488
  ip: 00007f8116357fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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


## HTML Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://html.spec.whatwg.org/) (8 May 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMHighResTimeStamp`, `MediaStream`, `SVGImageElement`, `SVGScriptElement`, `WindowProxy`
- WebIDL names also defined elsewhere: 
    * `Worker` also defined in [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- Missing references for WebIDL names: 
     * `AudioWorklet` defined in [Web Audio API](https://webaudio.github.io/web-audio-api/)
- Missing references for links: 
     * [`https://spec.whatwg.org/`](https://spec.whatwg.org/)
     * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/)
- Inconsistent references for links: 
     * [`https://w3c.github.io/payment-request/`](https://w3c.github.io/payment-request/), related reference "PAYMENTREQUEST" uses URL [`https://w3c.github.io/browser-payment-api/`](https://w3c.github.io/browser-payment-api/)

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
- [DOM Standard](https://dom.spec.whatwg.org/)
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
- [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/)
- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/)
- [Media Session Standard](https://wicg.github.io/mediasession/)
- [Media Source Extensions™](https://w3c.github.io/media-source/)
- [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- [MediaStream Recording](https://w3c.github.io/mediacapture-record/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)
- [Notifications API Standard](https://notifications.spec.whatwg.org/)
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
- [Web Animations](https://w3c.github.io/web-animations/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web Budget API](https://wicg.github.io/budget-api/)
- [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html)
- [Web IDL](https://heycam.github.io/webidl/)
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/)
- [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- [WebUSB API](https://wicg.github.io/webusb/)
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)
- [WebXR Device API](https://immersive-web.github.io/webxr/)
- [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Console Standard](https://console.spec.whatwg.org/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [Encoding Standard](https://encoding.spec.whatwg.org/)

Informative references to this spec from:

- [Clipboard API and events](https://w3c.github.io/clipboard-apis/)
- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/)
- [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/)
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/)
- [CSS Writing Modes Level 3](https://drafts.csswg.org/css-writing-modes-3/)
- [Encoding Standard](https://encoding.spec.whatwg.org/)
- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [File API](https://w3c.github.io/FileAPI/)
- [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/)
- [Metadata API for Media Resources 1.0](https://www.w3.org/TR/mediaont-api-1.0/)
- [Orientation Sensor](https://w3c.github.io/orientation-sensor/)
- [Selectors Level 3](https://www.w3.org/TR/css3-selectors/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/)


## https://w3c.github.io/editing/contentEditable.html {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/editing/contentEditable.html)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0510/021038.967945:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x555ba1cd0b0c base::debug::StackTrace::StackTrace()
#1 0x555ba1ce9780 logging::LogMessage::~LogMessage()
#2 0x555ba0d792b1 content::ZygoteHostImpl::Init()
#3 0x555ba09ebc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x555ba09f1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x555ba5b1b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x555ba1a0ba00 content::RunNamedProcessTypeMain()
#7 0x555ba1a0c2e8 content::ContentMainRunnerImpl::Run()
#8 0x555ba1a15f24 service_manager::Main()
#9 0x555ba1a0af14 content::ContentMain()
#10 0x555ba5b1a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x555ba5b1aa42 headless::HeadlessBrowserMain()
#12 0x555ba1a12f9d headless::HeadlessShellMain()
#13 0x555ba00711ac ChromeMain
#14 0x7f9ba4d872e1 __libc_start_main
#15 0x555ba007102a _start

Received signal 6
#0 0x555ba1cd0b0c base::debug::StackTrace::StackTrace()
#1 0x555ba1cd0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f9baace40c0 <unknown>
#3 0x7f9ba4d99fff gsignal
#4 0x7f9ba4d9b42a abort
#5 0x555ba1ccf105 base::debug::BreakDebugger()
#6 0x555ba1ce9bca logging::LogMessage::~LogMessage()
#7 0x555ba0d792b1 content::ZygoteHostImpl::Init()
#8 0x555ba09ebc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x555ba09f1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x555ba5b1b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x555ba1a0ba00 content::RunNamedProcessTypeMain()
#12 0x555ba1a0c2e8 content::ContentMainRunnerImpl::Run()
#13 0x555ba1a15f24 service_manager::Main()
#14 0x555ba1a0af14 content::ContentMain()
#15 0x555ba5b1a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x555ba5b1aa42 headless::HeadlessBrowserMain()
#17 0x555ba1a12f9d headless::HeadlessShellMain()
#18 0x555ba00711ac ChromeMain
#19 0x7f9ba4d872e1 __libc_start_main
#20 0x555ba007102a _start
  r8: 0000000000000000  r9: 00007fff54736cc0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff547373b8 r13: 0000000000000161 r14: 00007fff547373c0 r15: 00007fff54736f59
  di: 0000000000000002  si: 00007fff54736cc0  bp: 00007fff54736f00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9ba4d99fff  sp: 00007fff54736d38
  ip: 00007f9ba4d99fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021038.967945:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x555ba1cd0b0c base::debug::StackTrace::StackTrace()
#1 0x555ba1ce9780 logging::LogMessage::~LogMessage()
#2 0x555ba0d792b1 content::ZygoteHostImpl::Init()
#3 0x555ba09ebc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x555ba09f1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x555ba5b1b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x555ba1a0ba00 content::RunNamedProcessTypeMain()
#7 0x555ba1a0c2e8 content::ContentMainRunnerImpl::Run()
#8 0x555ba1a15f24 service_manager::Main()
#9 0x555ba1a0af14 content::ContentMain()
#10 0x555ba5b1a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x555ba5b1aa42 headless::HeadlessBrowserMain()
#12 0x555ba1a12f9d headless::HeadlessShellMain()
#13 0x555ba00711ac ChromeMain
#14 0x7f9ba4d872e1 __libc_start_main
#15 0x555ba007102a _start

Received signal 6
#0 0x555ba1cd0b0c base::debug::StackTrace::StackTrace()
#1 0x555ba1cd0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f9baace40c0 <unknown>
#3 0x7f9ba4d99fff gsignal
#4 0x7f9ba4d9b42a abort
#5 0x555ba1ccf105 base::debug::BreakDebugger()
#6 0x555ba1ce9bca logging::LogMessage::~LogMessage()
#7 0x555ba0d792b1 content::ZygoteHostImpl::Init()
#8 0x555ba09ebc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x555ba09f1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x555ba5b1b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x555ba1a0ba00 content::RunNamedProcessTypeMain()
#12 0x555ba1a0c2e8 content::ContentMainRunnerImpl::Run()
#13 0x555ba1a15f24 service_manager::Main()
#14 0x555ba1a0af14 content::ContentMain()
#15 0x555ba5b1a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x555ba5b1aa42 headless::HeadlessBrowserMain()
#17 0x555ba1a12f9d headless::HeadlessShellMain()
#18 0x555ba00711ac ChromeMain
#19 0x7f9ba4d872e1 __libc_start_main
#20 0x555ba007102a _start
  r8: 0000000000000000  r9: 00007fff54736cc0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff547373b8 r13: 0000000000000161 r14: 00007fff547373c0 r15: 00007fff54736f59
  di: 0000000000000002  si: 00007fff54736cc0  bp: 00007fff54736f00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9ba4d99fff  sp: 00007fff54736d38
  ip: 00007f9ba4d99fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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


## https://w3c.github.io/web-nfc/ {data-spec=true data-error=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/web-nfc/)
- Repository: [GitHub w3c/web-nfc](https://github.com/w3c/web-nfc)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0510/021059.728867:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d095af8b0c base::debug::StackTrace::StackTrace()
#1 0x55d095b11780 logging::LogMessage::~LogMessage()
#2 0x55d094ba12b1 content::ZygoteHostImpl::Init()
#3 0x55d094813c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d094819a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d0999439a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d095833a00 content::RunNamedProcessTypeMain()
#7 0x55d0958342e8 content::ContentMainRunnerImpl::Run()
#8 0x55d09583df24 service_manager::Main()
#9 0x55d095832f14 content::ContentMain()
#10 0x55d0999429b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d099942a42 headless::HeadlessBrowserMain()
#12 0x55d09583af9d headless::HeadlessShellMain()
#13 0x55d093e991ac ChromeMain
#14 0x7f856ed0d2e1 __libc_start_main
#15 0x55d093e9902a _start

Received signal 6
#0 0x55d095af8b0c base::debug::StackTrace::StackTrace()
#1 0x55d095af8671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f8574c6a0c0 <unknown>
#3 0x7f856ed1ffff gsignal
#4 0x7f856ed2142a abort
#5 0x55d095af7105 base::debug::BreakDebugger()
#6 0x55d095b11bca logging::LogMessage::~LogMessage()
#7 0x55d094ba12b1 content::ZygoteHostImpl::Init()
#8 0x55d094813c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d094819a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d0999439a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d095833a00 content::RunNamedProcessTypeMain()
#12 0x55d0958342e8 content::ContentMainRunnerImpl::Run()
#13 0x55d09583df24 service_manager::Main()
#14 0x55d095832f14 content::ContentMain()
#15 0x55d0999429b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d099942a42 headless::HeadlessBrowserMain()
#17 0x55d09583af9d headless::HeadlessShellMain()
#18 0x55d093e991ac ChromeMain
#19 0x7f856ed0d2e1 __libc_start_main
#20 0x55d093e9902a _start
  r8: 0000000000000000  r9: 00007fff0cb12d30 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff0cb13428 r13: 0000000000000161 r14: 00007fff0cb13430 r15: 00007fff0cb12fc9
  di: 0000000000000002  si: 00007fff0cb12d30  bp: 00007fff0cb12f70  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f856ed1ffff  sp: 00007fff0cb12da8
  ip: 00007f856ed1ffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021059.728867:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d095af8b0c base::debug::StackTrace::StackTrace()
#1 0x55d095b11780 logging::LogMessage::~LogMessage()
#2 0x55d094ba12b1 content::ZygoteHostImpl::Init()
#3 0x55d094813c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d094819a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d0999439a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d095833a00 content::RunNamedProcessTypeMain()
#7 0x55d0958342e8 content::ContentMainRunnerImpl::Run()
#8 0x55d09583df24 service_manager::Main()
#9 0x55d095832f14 content::ContentMain()
#10 0x55d0999429b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d099942a42 headless::HeadlessBrowserMain()
#12 0x55d09583af9d headless::HeadlessShellMain()
#13 0x55d093e991ac ChromeMain
#14 0x7f856ed0d2e1 __libc_start_main
#15 0x55d093e9902a _start

Received signal 6
#0 0x55d095af8b0c base::debug::StackTrace::StackTrace()
#1 0x55d095af8671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f8574c6a0c0 <unknown>
#3 0x7f856ed1ffff gsignal
#4 0x7f856ed2142a abort
#5 0x55d095af7105 base::debug::BreakDebugger()
#6 0x55d095b11bca logging::LogMessage::~LogMessage()
#7 0x55d094ba12b1 content::ZygoteHostImpl::Init()
#8 0x55d094813c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d094819a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d0999439a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d095833a00 content::RunNamedProcessTypeMain()
#12 0x55d0958342e8 content::ContentMainRunnerImpl::Run()
#13 0x55d09583df24 service_manager::Main()
#14 0x55d095832f14 content::ContentMain()
#15 0x55d0999429b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d099942a42 headless::HeadlessBrowserMain()
#17 0x55d09583af9d headless::HeadlessShellMain()
#18 0x55d093e991ac ChromeMain
#19 0x7f856ed0d2e1 __libc_start_main
#20 0x55d093e9902a _start
  r8: 0000000000000000  r9: 00007fff0cb12d30 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff0cb13428 r13: 0000000000000161 r14: 00007fff0cb13430 r15: 00007fff0cb12fc9
  di: 0000000000000002  si: 00007fff0cb12d30  bp: 00007fff0cb12f70  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f856ed1ffff  sp: 00007fff0cb12da8
  ip: 00007f856ed1ffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/021056.844310:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55dbc6705b0c base::debug::StackTrace::StackTrace()
#1 0x55dbc671e780 logging::LogMessage::~LogMessage()
#2 0x55dbc57ae2b1 content::ZygoteHostImpl::Init()
#3 0x55dbc5420c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55dbc5426a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55dbca5509a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55dbc6440a00 content::RunNamedProcessTypeMain()
#7 0x55dbc64412e8 content::ContentMainRunnerImpl::Run()
#8 0x55dbc644af24 service_manager::Main()
#9 0x55dbc643ff14 content::ContentMain()
#10 0x55dbca54f9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55dbca54fa42 headless::HeadlessBrowserMain()
#12 0x55dbc6447f9d headless::HeadlessShellMain()
#13 0x55dbc4aa61ac ChromeMain
#14 0x7ff9de0e62e1 __libc_start_main
#15 0x55dbc4aa602a _start

Received signal 6
#0 0x55dbc6705b0c base::debug::StackTrace::StackTrace()
#1 0x55dbc6705671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ff9e40430c0 <unknown>
#3 0x7ff9de0f8fff gsignal
#4 0x7ff9de0fa42a abort
#5 0x55dbc6704105 base::debug::BreakDebugger()
#6 0x55dbc671ebca logging::LogMessage::~LogMessage()
#7 0x55dbc57ae2b1 content::ZygoteHostImpl::Init()
#8 0x55dbc5420c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55dbc5426a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55dbca5509a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55dbc6440a00 content::RunNamedProcessTypeMain()
#12 0x55dbc64412e8 content::ContentMainRunnerImpl::Run()
#13 0x55dbc644af24 service_manager::Main()
#14 0x55dbc643ff14 content::ContentMain()
#15 0x55dbca54f9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55dbca54fa42 headless::HeadlessBrowserMain()
#17 0x55dbc6447f9d headless::HeadlessShellMain()
#18 0x55dbc4aa61ac ChromeMain
#19 0x7ff9de0e62e1 __libc_start_main
#20 0x55dbc4aa602a _start
  r8: 0000000000000000  r9: 00007fff2e143430 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff2e143b28 r13: 0000000000000161 r14: 00007fff2e143b30 r15: 00007fff2e1436c9
  di: 0000000000000002  si: 00007fff2e143430  bp: 00007fff2e143670  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ff9de0f8fff  sp: 00007fff2e1434a8
  ip: 00007ff9de0f8fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021056.844310:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55dbc6705b0c base::debug::StackTrace::StackTrace()
#1 0x55dbc671e780 logging::LogMessage::~LogMessage()
#2 0x55dbc57ae2b1 content::ZygoteHostImpl::Init()
#3 0x55dbc5420c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55dbc5426a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55dbca5509a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55dbc6440a00 content::RunNamedProcessTypeMain()
#7 0x55dbc64412e8 content::ContentMainRunnerImpl::Run()
#8 0x55dbc644af24 service_manager::Main()
#9 0x55dbc643ff14 content::ContentMain()
#10 0x55dbca54f9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55dbca54fa42 headless::HeadlessBrowserMain()
#12 0x55dbc6447f9d headless::HeadlessShellMain()
#13 0x55dbc4aa61ac ChromeMain
#14 0x7ff9de0e62e1 __libc_start_main
#15 0x55dbc4aa602a _start

Received signal 6
#0 0x55dbc6705b0c base::debug::StackTrace::StackTrace()
#1 0x55dbc6705671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ff9e40430c0 <unknown>
#3 0x7ff9de0f8fff gsignal
#4 0x7ff9de0fa42a abort
#5 0x55dbc6704105 base::debug::BreakDebugger()
#6 0x55dbc671ebca logging::LogMessage::~LogMessage()
#7 0x55dbc57ae2b1 content::ZygoteHostImpl::Init()
#8 0x55dbc5420c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55dbc5426a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55dbca5509a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55dbc6440a00 content::RunNamedProcessTypeMain()
#12 0x55dbc64412e8 content::ContentMainRunnerImpl::Run()
#13 0x55dbc644af24 service_manager::Main()
#14 0x55dbc643ff14 content::ContentMain()
#15 0x55dbca54f9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55dbca54fa42 headless::HeadlessBrowserMain()
#17 0x55dbc6447f9d headless::HeadlessShellMain()
#18 0x55dbc4aa61ac ChromeMain
#19 0x7ff9de0e62e1 __libc_start_main
#20 0x55dbc4aa602a _start
  r8: 0000000000000000  r9: 00007fff2e143430 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff2e143b28 r13: 0000000000000161 r14: 00007fff2e143b30 r15: 00007fff2e1436c9
  di: 0000000000000002  si: 00007fff2e143430  bp: 00007fff2e143670  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ff9de0f8fff  sp: 00007fff2e1434a8
  ip: 00007ff9de0f8fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/021055.122464:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561311a54b0c base::debug::StackTrace::StackTrace()
#1 0x561311a6d780 logging::LogMessage::~LogMessage()
#2 0x561310afd2b1 content::ZygoteHostImpl::Init()
#3 0x56131076fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561310775a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56131589f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56131178fa00 content::RunNamedProcessTypeMain()
#7 0x5613117902e8 content::ContentMainRunnerImpl::Run()
#8 0x561311799f24 service_manager::Main()
#9 0x56131178ef14 content::ContentMain()
#10 0x56131589e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56131589ea42 headless::HeadlessBrowserMain()
#12 0x561311796f9d headless::HeadlessShellMain()
#13 0x56130fdf51ac ChromeMain
#14 0x7fc9c36b82e1 __libc_start_main
#15 0x56130fdf502a _start

Received signal 6
#0 0x561311a54b0c base::debug::StackTrace::StackTrace()
#1 0x561311a54671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc9c96150c0 <unknown>
#3 0x7fc9c36cafff gsignal
#4 0x7fc9c36cc42a abort
#5 0x561311a53105 base::debug::BreakDebugger()
#6 0x561311a6dbca logging::LogMessage::~LogMessage()
#7 0x561310afd2b1 content::ZygoteHostImpl::Init()
#8 0x56131076fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561310775a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56131589f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56131178fa00 content::RunNamedProcessTypeMain()
#12 0x5613117902e8 content::ContentMainRunnerImpl::Run()
#13 0x561311799f24 service_manager::Main()
#14 0x56131178ef14 content::ContentMain()
#15 0x56131589e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56131589ea42 headless::HeadlessBrowserMain()
#17 0x561311796f9d headless::HeadlessShellMain()
#18 0x56130fdf51ac ChromeMain
#19 0x7fc9c36b82e1 __libc_start_main
#20 0x56130fdf502a _start
  r8: 0000000000000000  r9: 00007fffead5e8f0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffead5efe8 r13: 0000000000000161 r14: 00007fffead5eff0 r15: 00007fffead5eb89
  di: 0000000000000002  si: 00007fffead5e8f0  bp: 00007fffead5eb30  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc9c36cafff  sp: 00007fffead5e968
  ip: 00007fc9c36cafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021055.122464:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561311a54b0c base::debug::StackTrace::StackTrace()
#1 0x561311a6d780 logging::LogMessage::~LogMessage()
#2 0x561310afd2b1 content::ZygoteHostImpl::Init()
#3 0x56131076fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561310775a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56131589f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56131178fa00 content::RunNamedProcessTypeMain()
#7 0x5613117902e8 content::ContentMainRunnerImpl::Run()
#8 0x561311799f24 service_manager::Main()
#9 0x56131178ef14 content::ContentMain()
#10 0x56131589e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56131589ea42 headless::HeadlessBrowserMain()
#12 0x561311796f9d headless::HeadlessShellMain()
#13 0x56130fdf51ac ChromeMain
#14 0x7fc9c36b82e1 __libc_start_main
#15 0x56130fdf502a _start

Received signal 6
#0 0x561311a54b0c base::debug::StackTrace::StackTrace()
#1 0x561311a54671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc9c96150c0 <unknown>
#3 0x7fc9c36cafff gsignal
#4 0x7fc9c36cc42a abort
#5 0x561311a53105 base::debug::BreakDebugger()
#6 0x561311a6dbca logging::LogMessage::~LogMessage()
#7 0x561310afd2b1 content::ZygoteHostImpl::Init()
#8 0x56131076fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561310775a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56131589f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56131178fa00 content::RunNamedProcessTypeMain()
#12 0x5613117902e8 content::ContentMainRunnerImpl::Run()
#13 0x561311799f24 service_manager::Main()
#14 0x56131178ef14 content::ContentMain()
#15 0x56131589e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56131589ea42 headless::HeadlessBrowserMain()
#17 0x561311796f9d headless::HeadlessShellMain()
#18 0x56130fdf51ac ChromeMain
#19 0x7fc9c36b82e1 __libc_start_main
#20 0x56130fdf502a _start
  r8: 0000000000000000  r9: 00007fffead5e8f0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffead5efe8 r13: 0000000000000161 r14: 00007fffead5eff0 r15: 00007fffead5eb89
  di: 0000000000000002  si: 00007fffead5e8f0  bp: 00007fffead5eb30  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc9c36cafff  sp: 00007fffead5e968
  ip: 00007fc9c36cafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/021058.212751:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x565464856b0c base::debug::StackTrace::StackTrace()
#1 0x56546486f780 logging::LogMessage::~LogMessage()
#2 0x5654638ff2b1 content::ZygoteHostImpl::Init()
#3 0x565463571c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x565463577a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5654686a19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x565464591a00 content::RunNamedProcessTypeMain()
#7 0x5654645922e8 content::ContentMainRunnerImpl::Run()
#8 0x56546459bf24 service_manager::Main()
#9 0x565464590f14 content::ContentMain()
#10 0x5654686a09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5654686a0a42 headless::HeadlessBrowserMain()
#12 0x565464598f9d headless::HeadlessShellMain()
#13 0x565462bf71ac ChromeMain
#14 0x7f923841e2e1 __libc_start_main
#15 0x565462bf702a _start

Received signal 6
#0 0x565464856b0c base::debug::StackTrace::StackTrace()
#1 0x565464856671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f923e37b0c0 <unknown>
#3 0x7f9238430fff gsignal
#4 0x7f923843242a abort
#5 0x565464855105 base::debug::BreakDebugger()
#6 0x56546486fbca logging::LogMessage::~LogMessage()
#7 0x5654638ff2b1 content::ZygoteHostImpl::Init()
#8 0x565463571c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x565463577a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5654686a19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x565464591a00 content::RunNamedProcessTypeMain()
#12 0x5654645922e8 content::ContentMainRunnerImpl::Run()
#13 0x56546459bf24 service_manager::Main()
#14 0x565464590f14 content::ContentMain()
#15 0x5654686a09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5654686a0a42 headless::HeadlessBrowserMain()
#17 0x565464598f9d headless::HeadlessShellMain()
#18 0x565462bf71ac ChromeMain
#19 0x7f923841e2e1 __libc_start_main
#20 0x565462bf702a _start
  r8: 0000000000000000  r9: 00007fff62b007e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff62b00ed8 r13: 0000000000000161 r14: 00007fff62b00ee0 r15: 00007fff62b00a79
  di: 0000000000000002  si: 00007fff62b007e0  bp: 00007fff62b00a20  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9238430fff  sp: 00007fff62b00858
  ip: 00007f9238430fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021058.212751:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x565464856b0c base::debug::StackTrace::StackTrace()
#1 0x56546486f780 logging::LogMessage::~LogMessage()
#2 0x5654638ff2b1 content::ZygoteHostImpl::Init()
#3 0x565463571c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x565463577a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5654686a19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x565464591a00 content::RunNamedProcessTypeMain()
#7 0x5654645922e8 content::ContentMainRunnerImpl::Run()
#8 0x56546459bf24 service_manager::Main()
#9 0x565464590f14 content::ContentMain()
#10 0x5654686a09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5654686a0a42 headless::HeadlessBrowserMain()
#12 0x565464598f9d headless::HeadlessShellMain()
#13 0x565462bf71ac ChromeMain
#14 0x7f923841e2e1 __libc_start_main
#15 0x565462bf702a _start

Received signal 6
#0 0x565464856b0c base::debug::StackTrace::StackTrace()
#1 0x565464856671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f923e37b0c0 <unknown>
#3 0x7f9238430fff gsignal
#4 0x7f923843242a abort
#5 0x565464855105 base::debug::BreakDebugger()
#6 0x56546486fbca logging::LogMessage::~LogMessage()
#7 0x5654638ff2b1 content::ZygoteHostImpl::Init()
#8 0x565463571c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x565463577a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5654686a19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x565464591a00 content::RunNamedProcessTypeMain()
#12 0x5654645922e8 content::ContentMainRunnerImpl::Run()
#13 0x56546459bf24 service_manager::Main()
#14 0x565464590f14 content::ContentMain()
#15 0x5654686a09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5654686a0a42 headless::HeadlessBrowserMain()
#17 0x565464598f9d headless::HeadlessShellMain()
#18 0x565462bf71ac ChromeMain
#19 0x7f923841e2e1 __libc_start_main
#20 0x565462bf702a _start
  r8: 0000000000000000  r9: 00007fff62b007e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff62b00ed8 r13: 0000000000000161 r14: 00007fff62b00ee0 r15: 00007fff62b00a79
  di: 0000000000000002  si: 00007fff62b007e0  bp: 00007fff62b00a20  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9238430fff  sp: 00007fff62b00858
  ip: 00007f9238430fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/021058.474273:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5570547d6b0c base::debug::StackTrace::StackTrace()
#1 0x5570547ef780 logging::LogMessage::~LogMessage()
#2 0x55705387f2b1 content::ZygoteHostImpl::Init()
#3 0x5570534f1c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5570534f7a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5570586219a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557054511a00 content::RunNamedProcessTypeMain()
#7 0x5570545122e8 content::ContentMainRunnerImpl::Run()
#8 0x55705451bf24 service_manager::Main()
#9 0x557054510f14 content::ContentMain()
#10 0x5570586209b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557058620a42 headless::HeadlessBrowserMain()
#12 0x557054518f9d headless::HeadlessShellMain()
#13 0x557052b771ac ChromeMain
#14 0x7f2fbc9612e1 __libc_start_main
#15 0x557052b7702a _start

Received signal 6
#0 0x5570547d6b0c base::debug::StackTrace::StackTrace()
#1 0x5570547d6671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2fc28be0c0 <unknown>
#3 0x7f2fbc973fff gsignal
#4 0x7f2fbc97542a abort
#5 0x5570547d5105 base::debug::BreakDebugger()
#6 0x5570547efbca logging::LogMessage::~LogMessage()
#7 0x55705387f2b1 content::ZygoteHostImpl::Init()
#8 0x5570534f1c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5570534f7a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5570586219a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557054511a00 content::RunNamedProcessTypeMain()
#12 0x5570545122e8 content::ContentMainRunnerImpl::Run()
#13 0x55705451bf24 service_manager::Main()
#14 0x557054510f14 content::ContentMain()
#15 0x5570586209b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557058620a42 headless::HeadlessBrowserMain()
#17 0x557054518f9d headless::HeadlessShellMain()
#18 0x557052b771ac ChromeMain
#19 0x7f2fbc9612e1 __libc_start_main
#20 0x557052b7702a _start
  r8: 0000000000000000  r9: 00007ffe06240570 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe06240c68 r13: 0000000000000161 r14: 00007ffe06240c70 r15: 00007ffe06240809
  di: 0000000000000002  si: 00007ffe06240570  bp: 00007ffe062407b0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2fbc973fff  sp: 00007ffe062405e8
  ip: 00007f2fbc973fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021058.474273:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5570547d6b0c base::debug::StackTrace::StackTrace()
#1 0x5570547ef780 logging::LogMessage::~LogMessage()
#2 0x55705387f2b1 content::ZygoteHostImpl::Init()
#3 0x5570534f1c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5570534f7a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5570586219a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557054511a00 content::RunNamedProcessTypeMain()
#7 0x5570545122e8 content::ContentMainRunnerImpl::Run()
#8 0x55705451bf24 service_manager::Main()
#9 0x557054510f14 content::ContentMain()
#10 0x5570586209b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557058620a42 headless::HeadlessBrowserMain()
#12 0x557054518f9d headless::HeadlessShellMain()
#13 0x557052b771ac ChromeMain
#14 0x7f2fbc9612e1 __libc_start_main
#15 0x557052b7702a _start

Received signal 6
#0 0x5570547d6b0c base::debug::StackTrace::StackTrace()
#1 0x5570547d6671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2fc28be0c0 <unknown>
#3 0x7f2fbc973fff gsignal
#4 0x7f2fbc97542a abort
#5 0x5570547d5105 base::debug::BreakDebugger()
#6 0x5570547efbca logging::LogMessage::~LogMessage()
#7 0x55705387f2b1 content::ZygoteHostImpl::Init()
#8 0x5570534f1c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5570534f7a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5570586219a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557054511a00 content::RunNamedProcessTypeMain()
#12 0x5570545122e8 content::ContentMainRunnerImpl::Run()
#13 0x55705451bf24 service_manager::Main()
#14 0x557054510f14 content::ContentMain()
#15 0x5570586209b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557058620a42 headless::HeadlessBrowserMain()
#17 0x557054518f9d headless::HeadlessShellMain()
#18 0x557052b771ac ChromeMain
#19 0x7f2fbc9612e1 __libc_start_main
#20 0x557052b7702a _start
  r8: 0000000000000000  r9: 00007ffe06240570 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe06240c68 r13: 0000000000000161 r14: 00007ffe06240c70 r15: 00007ffe06240809
  di: 0000000000000002  si: 00007ffe06240570  bp: 00007ffe062407b0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2fbc973fff  sp: 00007ffe062405e8
  ip: 00007f2fbc973fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/021039.657789:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55705ff39b0c base::debug::StackTrace::StackTrace()
#1 0x55705ff52780 logging::LogMessage::~LogMessage()
#2 0x55705efe22b1 content::ZygoteHostImpl::Init()
#3 0x55705ec54c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55705ec5aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557063d849a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55705fc74a00 content::RunNamedProcessTypeMain()
#7 0x55705fc752e8 content::ContentMainRunnerImpl::Run()
#8 0x55705fc7ef24 service_manager::Main()
#9 0x55705fc73f14 content::ContentMain()
#10 0x557063d839b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557063d83a42 headless::HeadlessBrowserMain()
#12 0x55705fc7bf9d headless::HeadlessShellMain()
#13 0x55705e2da1ac ChromeMain
#14 0x7f0bbc0112e1 __libc_start_main
#15 0x55705e2da02a _start

Received signal 6
#0 0x55705ff39b0c base::debug::StackTrace::StackTrace()
#1 0x55705ff39671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f0bc1f6e0c0 <unknown>
#3 0x7f0bbc023fff gsignal
#4 0x7f0bbc02542a abort
#5 0x55705ff38105 base::debug::BreakDebugger()
#6 0x55705ff52bca logging::LogMessage::~LogMessage()
#7 0x55705efe22b1 content::ZygoteHostImpl::Init()
#8 0x55705ec54c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55705ec5aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557063d849a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55705fc74a00 content::RunNamedProcessTypeMain()
#12 0x55705fc752e8 content::ContentMainRunnerImpl::Run()
#13 0x55705fc7ef24 service_manager::Main()
#14 0x55705fc73f14 content::ContentMain()
#15 0x557063d839b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557063d83a42 headless::HeadlessBrowserMain()
#17 0x55705fc7bf9d headless::HeadlessShellMain()
#18 0x55705e2da1ac ChromeMain
#19 0x7f0bbc0112e1 __libc_start_main
#20 0x55705e2da02a _start
  r8: 0000000000000000  r9: 00007ffe89d0d4d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe89d0dbc8 r13: 0000000000000161 r14: 00007ffe89d0dbd0 r15: 00007ffe89d0d769
  di: 0000000000000002  si: 00007ffe89d0d4d0  bp: 00007ffe89d0d710  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f0bbc023fff  sp: 00007ffe89d0d548
  ip: 00007f0bbc023fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021039.657789:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55705ff39b0c base::debug::StackTrace::StackTrace()
#1 0x55705ff52780 logging::LogMessage::~LogMessage()
#2 0x55705efe22b1 content::ZygoteHostImpl::Init()
#3 0x55705ec54c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55705ec5aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557063d849a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55705fc74a00 content::RunNamedProcessTypeMain()
#7 0x55705fc752e8 content::ContentMainRunnerImpl::Run()
#8 0x55705fc7ef24 service_manager::Main()
#9 0x55705fc73f14 content::ContentMain()
#10 0x557063d839b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557063d83a42 headless::HeadlessBrowserMain()
#12 0x55705fc7bf9d headless::HeadlessShellMain()
#13 0x55705e2da1ac ChromeMain
#14 0x7f0bbc0112e1 __libc_start_main
#15 0x55705e2da02a _start

Received signal 6
#0 0x55705ff39b0c base::debug::StackTrace::StackTrace()
#1 0x55705ff39671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f0bc1f6e0c0 <unknown>
#3 0x7f0bbc023fff gsignal
#4 0x7f0bbc02542a abort
#5 0x55705ff38105 base::debug::BreakDebugger()
#6 0x55705ff52bca logging::LogMessage::~LogMessage()
#7 0x55705efe22b1 content::ZygoteHostImpl::Init()
#8 0x55705ec54c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55705ec5aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557063d849a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55705fc74a00 content::RunNamedProcessTypeMain()
#12 0x55705fc752e8 content::ContentMainRunnerImpl::Run()
#13 0x55705fc7ef24 service_manager::Main()
#14 0x55705fc73f14 content::ContentMain()
#15 0x557063d839b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557063d83a42 headless::HeadlessBrowserMain()
#17 0x55705fc7bf9d headless::HeadlessShellMain()
#18 0x55705e2da1ac ChromeMain
#19 0x7f0bbc0112e1 __libc_start_main
#20 0x55705e2da02a _start
  r8: 0000000000000000  r9: 00007ffe89d0d4d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe89d0dbc8 r13: 0000000000000161 r14: 00007ffe89d0dbd0 r15: 00007ffe89d0d769
  di: 0000000000000002  si: 00007ffe89d0d4d0  bp: 00007ffe89d0d710  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f0bbc023fff  sp: 00007ffe89d0d548
  ip: 00007f0bbc023fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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


## Indexed Database API 3.0 {data-spec=true data-anomaly=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/IndexedDB/) (8 May 2018)
- Editor's Draft: [https://w3c.github.io/IndexedDB/](https://w3c.github.io/IndexedDB/)
- Latest published version: [https://www.w3.org/TR/IndexedDB-2/](https://www.w3.org/TR/IndexedDB-2/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2018/REC-IndexedDB-2-20180130/)
- Repository: [GitHub w3c/IndexedDB](https://github.com/w3c/IndexedDB)
- Shortname: IndexedDB-2

### Potential issue(s) {.anomalies}

- Inconsistent references for links: 
     * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/), related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML Standard](https://html.spec.whatwg.org/)

Informative references to this spec from:

- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)
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
[0510/021012.081371:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x560f7cd0eb0c base::debug::StackTrace::StackTrace()
#1 0x560f7cd27780 logging::LogMessage::~LogMessage()
#2 0x560f7bdb72b1 content::ZygoteHostImpl::Init()
#3 0x560f7ba29c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x560f7ba2fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x560f80b599a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x560f7ca49a00 content::RunNamedProcessTypeMain()
#7 0x560f7ca4a2e8 content::ContentMainRunnerImpl::Run()
#8 0x560f7ca53f24 service_manager::Main()
#9 0x560f7ca48f14 content::ContentMain()
#10 0x560f80b589b9 headless::(anonymous namespace)::RunContentMain()
#11 0x560f80b58a42 headless::HeadlessBrowserMain()
#12 0x560f7ca50f9d headless::HeadlessShellMain()
#13 0x560f7b0af1ac ChromeMain
#14 0x7f567bd0f2e1 __libc_start_main
#15 0x560f7b0af02a _start

Received signal 6
#0 0x560f7cd0eb0c base::debug::StackTrace::StackTrace()
#1 0x560f7cd0e671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f5681c6c0c0 <unknown>
#3 0x7f567bd21fff gsignal
#4 0x7f567bd2342a abort
#5 0x560f7cd0d105 base::debug::BreakDebugger()
#6 0x560f7cd27bca logging::LogMessage::~LogMessage()
#7 0x560f7bdb72b1 content::ZygoteHostImpl::Init()
#8 0x560f7ba29c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x560f7ba2fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x560f80b599a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x560f7ca49a00 content::RunNamedProcessTypeMain()
#12 0x560f7ca4a2e8 content::ContentMainRunnerImpl::Run()
#13 0x560f7ca53f24 service_manager::Main()
#14 0x560f7ca48f14 content::ContentMain()
#15 0x560f80b589b9 headless::(anonymous namespace)::RunContentMain()
#16 0x560f80b58a42 headless::HeadlessBrowserMain()
#17 0x560f7ca50f9d headless::HeadlessShellMain()
#18 0x560f7b0af1ac ChromeMain
#19 0x7f567bd0f2e1 __libc_start_main
#20 0x560f7b0af02a _start
  r8: 0000000000000000  r9: 00007ffc1f2282a0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc1f228998 r13: 0000000000000161 r14: 00007ffc1f2289a0 r15: 00007ffc1f228539
  di: 0000000000000002  si: 00007ffc1f2282a0  bp: 00007ffc1f2284e0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f567bd21fff  sp: 00007ffc1f228318
  ip: 00007f567bd21fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021012.081371:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x560f7cd0eb0c base::debug::StackTrace::StackTrace()
#1 0x560f7cd27780 logging::LogMessage::~LogMessage()
#2 0x560f7bdb72b1 content::ZygoteHostImpl::Init()
#3 0x560f7ba29c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x560f7ba2fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x560f80b599a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x560f7ca49a00 content::RunNamedProcessTypeMain()
#7 0x560f7ca4a2e8 content::ContentMainRunnerImpl::Run()
#8 0x560f7ca53f24 service_manager::Main()
#9 0x560f7ca48f14 content::ContentMain()
#10 0x560f80b589b9 headless::(anonymous namespace)::RunContentMain()
#11 0x560f80b58a42 headless::HeadlessBrowserMain()
#12 0x560f7ca50f9d headless::HeadlessShellMain()
#13 0x560f7b0af1ac ChromeMain
#14 0x7f567bd0f2e1 __libc_start_main
#15 0x560f7b0af02a _start

Received signal 6
#0 0x560f7cd0eb0c base::debug::StackTrace::StackTrace()
#1 0x560f7cd0e671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f5681c6c0c0 <unknown>
#3 0x7f567bd21fff gsignal
#4 0x7f567bd2342a abort
#5 0x560f7cd0d105 base::debug::BreakDebugger()
#6 0x560f7cd27bca logging::LogMessage::~LogMessage()
#7 0x560f7bdb72b1 content::ZygoteHostImpl::Init()
#8 0x560f7ba29c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x560f7ba2fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x560f80b599a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x560f7ca49a00 content::RunNamedProcessTypeMain()
#12 0x560f7ca4a2e8 content::ContentMainRunnerImpl::Run()
#13 0x560f7ca53f24 service_manager::Main()
#14 0x560f7ca48f14 content::ContentMain()
#15 0x560f80b589b9 headless::(anonymous namespace)::RunContentMain()
#16 0x560f80b58a42 headless::HeadlessBrowserMain()
#17 0x560f7ca50f9d headless::HeadlessShellMain()
#18 0x560f7b0af1ac ChromeMain
#19 0x7f567bd0f2e1 __libc_start_main
#20 0x560f7b0af02a _start
  r8: 0000000000000000  r9: 00007ffc1f2282a0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc1f228998 r13: 0000000000000161 r14: 00007ffc1f2289a0 r15: 00007ffc1f228539
  di: 0000000000000002  si: 00007ffc1f2282a0  bp: 00007ffc1f2284e0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f567bd21fff  sp: 00007ffc1f228318
  ip: 00007f567bd21fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- Unknown WebIDL names used: `DOMHighResTimeStamp`
- Missing references for links: 
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/)
     * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/)
     * [`https://www.w3.org/TR/css-masking-1/`](https://www.w3.org/TR/css-masking-1/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML Standard](https://html.spec.whatwg.org/)

No informative reference to this spec from other specs.


## Keyboard Lock {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/keyboard-lock/) (9 May 2018)
- Repository: [GitHub w3c/keyboard-lock](https://github.com/w3c/keyboard-lock)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

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


## Magnetometer {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/magnetometer/) (15 March 2018)
- Editor's Draft: [https://w3c.github.io/magnetometer/](https://w3c.github.io/magnetometer/)
- Latest published version: [https://www.w3.org/TR/magnetometer/](https://www.w3.org/TR/magnetometer/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-magnetometer-20180320/)
- Repository: [GitHub w3c/magnetometer](https://github.com/w3c/magnetometer)
- Shortname: magnetometer

### Potential issue(s) {.anomalies}

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


## Media Capabilities {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/media-capabilities/) (3 May 2018)
- Repository: [GitHub wicg/media-capabilities](https://github.com/wicg/media-capabilities)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

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
[0510/021011.226636:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556b082afb0c base::debug::StackTrace::StackTrace()
#1 0x556b082c8780 logging::LogMessage::~LogMessage()
#2 0x556b073582b1 content::ZygoteHostImpl::Init()
#3 0x556b06fcac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556b06fd0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556b0c0fa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556b07feaa00 content::RunNamedProcessTypeMain()
#7 0x556b07feb2e8 content::ContentMainRunnerImpl::Run()
#8 0x556b07ff4f24 service_manager::Main()
#9 0x556b07fe9f14 content::ContentMain()
#10 0x556b0c0f99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556b0c0f9a42 headless::HeadlessBrowserMain()
#12 0x556b07ff1f9d headless::HeadlessShellMain()
#13 0x556b066501ac ChromeMain
#14 0x7f95072ec2e1 __libc_start_main
#15 0x556b0665002a _start

Received signal 6
#0 0x556b082afb0c base::debug::StackTrace::StackTrace()
#1 0x556b082af671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f950d2490c0 <unknown>
#3 0x7f95072fefff gsignal
#4 0x7f950730042a abort
#5 0x556b082ae105 base::debug::BreakDebugger()
#6 0x556b082c8bca logging::LogMessage::~LogMessage()
#7 0x556b073582b1 content::ZygoteHostImpl::Init()
#8 0x556b06fcac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556b06fd0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556b0c0fa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556b07feaa00 content::RunNamedProcessTypeMain()
#12 0x556b07feb2e8 content::ContentMainRunnerImpl::Run()
#13 0x556b07ff4f24 service_manager::Main()
#14 0x556b07fe9f14 content::ContentMain()
#15 0x556b0c0f99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556b0c0f9a42 headless::HeadlessBrowserMain()
#17 0x556b07ff1f9d headless::HeadlessShellMain()
#18 0x556b066501ac ChromeMain
#19 0x7f95072ec2e1 __libc_start_main
#20 0x556b0665002a _start
  r8: 0000000000000000  r9: 00007ffe3c41c810 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe3c41cf08 r13: 0000000000000161 r14: 00007ffe3c41cf10 r15: 00007ffe3c41caa9
  di: 0000000000000002  si: 00007ffe3c41c810  bp: 00007ffe3c41ca50  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f95072fefff  sp: 00007ffe3c41c888
  ip: 00007f95072fefff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021011.226636:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556b082afb0c base::debug::StackTrace::StackTrace()
#1 0x556b082c8780 logging::LogMessage::~LogMessage()
#2 0x556b073582b1 content::ZygoteHostImpl::Init()
#3 0x556b06fcac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556b06fd0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556b0c0fa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556b07feaa00 content::RunNamedProcessTypeMain()
#7 0x556b07feb2e8 content::ContentMainRunnerImpl::Run()
#8 0x556b07ff4f24 service_manager::Main()
#9 0x556b07fe9f14 content::ContentMain()
#10 0x556b0c0f99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556b0c0f9a42 headless::HeadlessBrowserMain()
#12 0x556b07ff1f9d headless::HeadlessShellMain()
#13 0x556b066501ac ChromeMain
#14 0x7f95072ec2e1 __libc_start_main
#15 0x556b0665002a _start

Received signal 6
#0 0x556b082afb0c base::debug::StackTrace::StackTrace()
#1 0x556b082af671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f950d2490c0 <unknown>
#3 0x7f95072fefff gsignal
#4 0x7f950730042a abort
#5 0x556b082ae105 base::debug::BreakDebugger()
#6 0x556b082c8bca logging::LogMessage::~LogMessage()
#7 0x556b073582b1 content::ZygoteHostImpl::Init()
#8 0x556b06fcac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556b06fd0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556b0c0fa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556b07feaa00 content::RunNamedProcessTypeMain()
#12 0x556b07feb2e8 content::ContentMainRunnerImpl::Run()
#13 0x556b07ff4f24 service_manager::Main()
#14 0x556b07fe9f14 content::ContentMain()
#15 0x556b0c0f99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556b0c0f9a42 headless::HeadlessBrowserMain()
#17 0x556b07ff1f9d headless::HeadlessShellMain()
#18 0x556b066501ac ChromeMain
#19 0x7f95072ec2e1 __libc_start_main
#20 0x556b0665002a _start
  r8: 0000000000000000  r9: 00007ffe3c41c810 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe3c41cf08 r13: 0000000000000161 r14: 00007ffe3c41cf10 r15: 00007ffe3c41caa9
  di: 0000000000000002  si: 00007ffe3c41c810  bp: 00007ffe3c41ca50  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f95072fefff  sp: 00007ffe3c41c888
  ip: 00007f95072fefff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- [HTML Standard](https://html.spec.whatwg.org/)
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
[0510/021009.905819:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5605eef60b0c base::debug::StackTrace::StackTrace()
#1 0x5605eef79780 logging::LogMessage::~LogMessage()
#2 0x5605ee0092b1 content::ZygoteHostImpl::Init()
#3 0x5605edc7bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5605edc81a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5605f2dab9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5605eec9ba00 content::RunNamedProcessTypeMain()
#7 0x5605eec9c2e8 content::ContentMainRunnerImpl::Run()
#8 0x5605eeca5f24 service_manager::Main()
#9 0x5605eec9af14 content::ContentMain()
#10 0x5605f2daa9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5605f2daaa42 headless::HeadlessBrowserMain()
#12 0x5605eeca2f9d headless::HeadlessShellMain()
#13 0x5605ed3011ac ChromeMain
#14 0x7f459f70e2e1 __libc_start_main
#15 0x5605ed30102a _start

Received signal 6
#0 0x5605eef60b0c base::debug::StackTrace::StackTrace()
#1 0x5605eef60671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f45a566b0c0 <unknown>
#3 0x7f459f720fff gsignal
#4 0x7f459f72242a abort
#5 0x5605eef5f105 base::debug::BreakDebugger()
#6 0x5605eef79bca logging::LogMessage::~LogMessage()
#7 0x5605ee0092b1 content::ZygoteHostImpl::Init()
#8 0x5605edc7bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5605edc81a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5605f2dab9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5605eec9ba00 content::RunNamedProcessTypeMain()
#12 0x5605eec9c2e8 content::ContentMainRunnerImpl::Run()
#13 0x5605eeca5f24 service_manager::Main()
#14 0x5605eec9af14 content::ContentMain()
#15 0x5605f2daa9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5605f2daaa42 headless::HeadlessBrowserMain()
#17 0x5605eeca2f9d headless::HeadlessShellMain()
#18 0x5605ed3011ac ChromeMain
#19 0x7f459f70e2e1 __libc_start_main
#20 0x5605ed30102a _start
  r8: 0000000000000000  r9: 00007ffdd191ec90 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdd191f388 r13: 0000000000000161 r14: 00007ffdd191f390 r15: 00007ffdd191ef29
  di: 0000000000000002  si: 00007ffdd191ec90  bp: 00007ffdd191eed0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f459f720fff  sp: 00007ffdd191ed08
  ip: 00007f459f720fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021009.905819:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5605eef60b0c base::debug::StackTrace::StackTrace()
#1 0x5605eef79780 logging::LogMessage::~LogMessage()
#2 0x5605ee0092b1 content::ZygoteHostImpl::Init()
#3 0x5605edc7bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5605edc81a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5605f2dab9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5605eec9ba00 content::RunNamedProcessTypeMain()
#7 0x5605eec9c2e8 content::ContentMainRunnerImpl::Run()
#8 0x5605eeca5f24 service_manager::Main()
#9 0x5605eec9af14 content::ContentMain()
#10 0x5605f2daa9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5605f2daaa42 headless::HeadlessBrowserMain()
#12 0x5605eeca2f9d headless::HeadlessShellMain()
#13 0x5605ed3011ac ChromeMain
#14 0x7f459f70e2e1 __libc_start_main
#15 0x5605ed30102a _start

Received signal 6
#0 0x5605eef60b0c base::debug::StackTrace::StackTrace()
#1 0x5605eef60671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f45a566b0c0 <unknown>
#3 0x7f459f720fff gsignal
#4 0x7f459f72242a abort
#5 0x5605eef5f105 base::debug::BreakDebugger()
#6 0x5605eef79bca logging::LogMessage::~LogMessage()
#7 0x5605ee0092b1 content::ZygoteHostImpl::Init()
#8 0x5605edc7bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5605edc81a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5605f2dab9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5605eec9ba00 content::RunNamedProcessTypeMain()
#12 0x5605eec9c2e8 content::ContentMainRunnerImpl::Run()
#13 0x5605eeca5f24 service_manager::Main()
#14 0x5605eec9af14 content::ContentMain()
#15 0x5605f2daa9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5605f2daaa42 headless::HeadlessBrowserMain()
#17 0x5605eeca2f9d headless::HeadlessShellMain()
#18 0x5605ed3011ac ChromeMain
#19 0x7f459f70e2e1 __libc_start_main
#20 0x5605ed30102a _start
  r8: 0000000000000000  r9: 00007ffdd191ec90 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdd191f388 r13: 0000000000000161 r14: 00007ffdd191f390 r15: 00007ffdd191ef29
  di: 0000000000000002  si: 00007ffdd191ec90  bp: 00007ffdd191eed0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f459f720fff  sp: 00007ffdd191ed08
  ip: 00007f459f720fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/021008.970676:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x557830d14b0c base::debug::StackTrace::StackTrace()
#1 0x557830d2d780 logging::LogMessage::~LogMessage()
#2 0x55782fdbd2b1 content::ZygoteHostImpl::Init()
#3 0x55782fa2fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55782fa35a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557834b5f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557830a4fa00 content::RunNamedProcessTypeMain()
#7 0x557830a502e8 content::ContentMainRunnerImpl::Run()
#8 0x557830a59f24 service_manager::Main()
#9 0x557830a4ef14 content::ContentMain()
#10 0x557834b5e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557834b5ea42 headless::HeadlessBrowserMain()
#12 0x557830a56f9d headless::HeadlessShellMain()
#13 0x55782f0b51ac ChromeMain
#14 0x7fe8009802e1 __libc_start_main
#15 0x55782f0b502a _start

Received signal 6
#0 0x557830d14b0c base::debug::StackTrace::StackTrace()
#1 0x557830d14671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe8068dd0c0 <unknown>
#3 0x7fe800992fff gsignal
#4 0x7fe80099442a abort
#5 0x557830d13105 base::debug::BreakDebugger()
#6 0x557830d2dbca logging::LogMessage::~LogMessage()
#7 0x55782fdbd2b1 content::ZygoteHostImpl::Init()
#8 0x55782fa2fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55782fa35a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557834b5f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557830a4fa00 content::RunNamedProcessTypeMain()
#12 0x557830a502e8 content::ContentMainRunnerImpl::Run()
#13 0x557830a59f24 service_manager::Main()
#14 0x557830a4ef14 content::ContentMain()
#15 0x557834b5e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557834b5ea42 headless::HeadlessBrowserMain()
#17 0x557830a56f9d headless::HeadlessShellMain()
#18 0x55782f0b51ac ChromeMain
#19 0x7fe8009802e1 __libc_start_main
#20 0x55782f0b502a _start
  r8: 0000000000000000  r9: 00007ffcea44fb50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcea450248 r13: 0000000000000161 r14: 00007ffcea450250 r15: 00007ffcea44fde9
  di: 0000000000000002  si: 00007ffcea44fb50  bp: 00007ffcea44fd90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe800992fff  sp: 00007ffcea44fbc8
  ip: 00007fe800992fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021008.970676:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x557830d14b0c base::debug::StackTrace::StackTrace()
#1 0x557830d2d780 logging::LogMessage::~LogMessage()
#2 0x55782fdbd2b1 content::ZygoteHostImpl::Init()
#3 0x55782fa2fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55782fa35a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557834b5f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557830a4fa00 content::RunNamedProcessTypeMain()
#7 0x557830a502e8 content::ContentMainRunnerImpl::Run()
#8 0x557830a59f24 service_manager::Main()
#9 0x557830a4ef14 content::ContentMain()
#10 0x557834b5e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557834b5ea42 headless::HeadlessBrowserMain()
#12 0x557830a56f9d headless::HeadlessShellMain()
#13 0x55782f0b51ac ChromeMain
#14 0x7fe8009802e1 __libc_start_main
#15 0x55782f0b502a _start

Received signal 6
#0 0x557830d14b0c base::debug::StackTrace::StackTrace()
#1 0x557830d14671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe8068dd0c0 <unknown>
#3 0x7fe800992fff gsignal
#4 0x7fe80099442a abort
#5 0x557830d13105 base::debug::BreakDebugger()
#6 0x557830d2dbca logging::LogMessage::~LogMessage()
#7 0x55782fdbd2b1 content::ZygoteHostImpl::Init()
#8 0x55782fa2fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55782fa35a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557834b5f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557830a4fa00 content::RunNamedProcessTypeMain()
#12 0x557830a502e8 content::ContentMainRunnerImpl::Run()
#13 0x557830a59f24 service_manager::Main()
#14 0x557830a4ef14 content::ContentMain()
#15 0x557834b5e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557834b5ea42 headless::HeadlessBrowserMain()
#17 0x557830a56f9d headless::HeadlessShellMain()
#18 0x55782f0b51ac ChromeMain
#19 0x7fe8009802e1 __libc_start_main
#20 0x55782f0b502a _start
  r8: 0000000000000000  r9: 00007ffcea44fb50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcea450248 r13: 0000000000000161 r14: 00007ffcea450250 r15: 00007ffcea44fde9
  di: 0000000000000002  si: 00007ffcea44fb50  bp: 00007ffcea44fd90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe800992fff  sp: 00007ffcea44fbc8
  ip: 00007fe800992fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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


## Media Session Standard {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/mediasession/) (17 August 2017)
- Repository: [GitHub wicg/mediasession](https://github.com/wicg/mediasession)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/)


## Media Source Extensions™ {data-spec=true data-anomaly=true data-missingWebIdlRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/media-source/) (08 November 2016)
- Editor's Draft: [https://w3c.github.io/media-source/](https://w3c.github.io/media-source/)
- Latest published version: [https://www.w3.org/TR/media-source/](https://www.w3.org/TR/media-source/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2016/REC-media-source-20161117/)
- Repository: [GitHub w3c/media-source](https://github.com/w3c/media-source)
- Shortname: media-source

### Potential issue(s) {.anomalies}

- Missing references for WebIDL names: 
     * `EventTarget` defined in [DOM Standard](https://dom.spec.whatwg.org/)
     * `URL` defined in [URL Standard](https://url.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML Standard](https://html.spec.whatwg.org/)
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

- Unknown WebIDL names used: `ConstrainBoolean`, `ConstrainDOMString`, `ConstrainDouble`, `MediaStreamTrack`, `MediaTrackCapabilities`, `MediaTrackConstraintSet`, `MediaTrackSettings`, `MediaTrackSupportedConstraints`
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

- Unknown WebIDL names used: `DOMHighResTimeStamp`, `MediaStream`
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
- [HTML Standard](https://html.spec.whatwg.org/)
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
[0510/021014.940238:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x560258ac2b0c base::debug::StackTrace::StackTrace()
#1 0x560258adb780 logging::LogMessage::~LogMessage()
#2 0x560257b6b2b1 content::ZygoteHostImpl::Init()
#3 0x5602577ddc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5602577e3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56025c90d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5602587fda00 content::RunNamedProcessTypeMain()
#7 0x5602587fe2e8 content::ContentMainRunnerImpl::Run()
#8 0x560258807f24 service_manager::Main()
#9 0x5602587fcf14 content::ContentMain()
#10 0x56025c90c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56025c90ca42 headless::HeadlessBrowserMain()
#12 0x560258804f9d headless::HeadlessShellMain()
#13 0x560256e631ac ChromeMain
#14 0x7f1aadec42e1 __libc_start_main
#15 0x560256e6302a _start

Received signal 6
#0 0x560258ac2b0c base::debug::StackTrace::StackTrace()
#1 0x560258ac2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1ab3e210c0 <unknown>
#3 0x7f1aaded6fff gsignal
#4 0x7f1aaded842a abort
#5 0x560258ac1105 base::debug::BreakDebugger()
#6 0x560258adbbca logging::LogMessage::~LogMessage()
#7 0x560257b6b2b1 content::ZygoteHostImpl::Init()
#8 0x5602577ddc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5602577e3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56025c90d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5602587fda00 content::RunNamedProcessTypeMain()
#12 0x5602587fe2e8 content::ContentMainRunnerImpl::Run()
#13 0x560258807f24 service_manager::Main()
#14 0x5602587fcf14 content::ContentMain()
#15 0x56025c90c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56025c90ca42 headless::HeadlessBrowserMain()
#17 0x560258804f9d headless::HeadlessShellMain()
#18 0x560256e631ac ChromeMain
#19 0x7f1aadec42e1 __libc_start_main


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021014.940238:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x560258ac2b0c base::debug::StackTrace::StackTrace()
#1 0x560258adb780 logging::LogMessage::~LogMessage()
#2 0x560257b6b2b1 content::ZygoteHostImpl::Init()
#3 0x5602577ddc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5602577e3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56025c90d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5602587fda00 content::RunNamedProcessTypeMain()
#7 0x5602587fe2e8 content::ContentMainRunnerImpl::Run()
#8 0x560258807f24 service_manager::Main()
#9 0x5602587fcf14 content::ContentMain()
#10 0x56025c90c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56025c90ca42 headless::HeadlessBrowserMain()
#12 0x560258804f9d headless::HeadlessShellMain()
#13 0x560256e631ac ChromeMain
#14 0x7f1aadec42e1 __libc_start_main
#15 0x560256e6302a _start

Received signal 6
#0 0x560258ac2b0c base::debug::StackTrace::StackTrace()
#1 0x560258ac2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1ab3e210c0 <unknown>
#3 0x7f1aaded6fff gsignal
#4 0x7f1aaded842a abort
#5 0x560258ac1105 base::debug::BreakDebugger()
#6 0x560258adbbca logging::LogMessage::~LogMessage()
#7 0x560257b6b2b1 content::ZygoteHostImpl::Init()
#8 0x5602577ddc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5602577e3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56025c90d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5602587fda00 content::RunNamedProcessTypeMain()
#12 0x5602587fe2e8 content::ContentMainRunnerImpl::Run()
#13 0x560258807f24 service_manager::Main()
#14 0x5602587fcf14 content::ContentMain()
#15 0x56025c90c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56025c90ca42 headless::HeadlessBrowserMain()
#17 0x560258804f9d headless::HeadlessShellMain()
#18 0x560256e631ac ChromeMain
#19 0x7f1aadec42e1 __libc_start_main


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


## Notifications API Standard {data-spec=true data-anomaly=true data-unknownIdlNames=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://notifications.spec.whatwg.org/) (1 March 2018)
- Repository: [GitHub whatwg/notifications](https://github.com/whatwg/notifications)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `VibratePattern`

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [Permissions](https://w3c.github.io/permissions/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- [Web Budget API](https://wicg.github.io/budget-api/)


## Orientation Sensor {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/orientation-sensor/) (14 March 2018)
- Editor's Draft: [https://w3c.github.io/orientation-sensor/](https://w3c.github.io/orientation-sensor/)
- Latest published version: [https://www.w3.org/TR/orientation-sensor/](https://www.w3.org/TR/orientation-sensor/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-orientation-sensor-20180320/)
- Repository: [GitHub w3c/orientation-sensor](https://github.com/w3c/orientation-sensor)
- Shortname: orientation-sensor

### Potential issue(s) {.anomalies}

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
[0510/021014.853042:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55dc67a05b0c base::debug::StackTrace::StackTrace()
#1 0x55dc67a1e780 logging::LogMessage::~LogMessage()
#2 0x55dc66aae2b1 content::ZygoteHostImpl::Init()
#3 0x55dc66720c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55dc66726a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55dc6b8509a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55dc67740a00 content::RunNamedProcessTypeMain()
#7 0x55dc677412e8 content::ContentMainRunnerImpl::Run()
#8 0x55dc6774af24 service_manager::Main()
#9 0x55dc6773ff14 content::ContentMain()
#10 0x55dc6b84f9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55dc6b84fa42 headless::HeadlessBrowserMain()
#12 0x55dc67747f9d headless::HeadlessShellMain()
#13 0x55dc65da61ac ChromeMain
#14 0x7fc03190d2e1 __libc_start_main
#15 0x55dc65da602a _start

Received signal 6
#0 0x55dc67a05b0c base::debug::StackTrace::StackTrace()
#1 0x55dc67a05671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc03786a0c0 <unknown>
#3 0x7fc03191ffff gsignal
#4 0x7fc03192142a abort
#5 0x55dc67a04105 base::debug::BreakDebugger()
#6 0x55dc67a1ebca logging::LogMessage::~LogMessage()
#7 0x55dc66aae2b1 content::ZygoteHostImpl::Init()
#8 0x55dc66720c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55dc66726a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55dc6b8509a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55dc67740a00 content::RunNamedProcessTypeMain()
#12 0x55dc677412e8 content::ContentMainRunnerImpl::Run()
#13 0x55dc6774af24 service_manager::Main()
#14 0x55dc6773ff14 content::ContentMain()
#15 0x55dc6b84f9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55dc6b84fa42 headless::HeadlessBrowserMain()
#17 0x55dc67747f9d headless::HeadlessShellMain()
#18 0x55dc65da61ac ChromeMain
#19 0x7fc03190d2e1 __libc_start_main
#20 0x55dc65da602a _start
  r8: 0000000000000000  r9: 00007ffd3711b190 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd3711b888 r13: 0000000000000161 r14: 00007ffd3711b890 r15: 00007ffd3711b429
  di: 0000000000000002  si: 00007ffd3711b190  bp: 00007ffd3711b3d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc03191ffff  sp: 00007ffd3711b208
  ip: 00007fc03191ffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021014.853042:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55dc67a05b0c base::debug::StackTrace::StackTrace()
#1 0x55dc67a1e780 logging::LogMessage::~LogMessage()
#2 0x55dc66aae2b1 content::ZygoteHostImpl::Init()
#3 0x55dc66720c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55dc66726a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55dc6b8509a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55dc67740a00 content::RunNamedProcessTypeMain()
#7 0x55dc677412e8 content::ContentMainRunnerImpl::Run()
#8 0x55dc6774af24 service_manager::Main()
#9 0x55dc6773ff14 content::ContentMain()
#10 0x55dc6b84f9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55dc6b84fa42 headless::HeadlessBrowserMain()
#12 0x55dc67747f9d headless::HeadlessShellMain()
#13 0x55dc65da61ac ChromeMain
#14 0x7fc03190d2e1 __libc_start_main
#15 0x55dc65da602a _start

Received signal 6
#0 0x55dc67a05b0c base::debug::StackTrace::StackTrace()
#1 0x55dc67a05671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc03786a0c0 <unknown>
#3 0x7fc03191ffff gsignal
#4 0x7fc03192142a abort
#5 0x55dc67a04105 base::debug::BreakDebugger()
#6 0x55dc67a1ebca logging::LogMessage::~LogMessage()
#7 0x55dc66aae2b1 content::ZygoteHostImpl::Init()
#8 0x55dc66720c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55dc66726a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55dc6b8509a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55dc67740a00 content::RunNamedProcessTypeMain()
#12 0x55dc677412e8 content::ContentMainRunnerImpl::Run()
#13 0x55dc6774af24 service_manager::Main()
#14 0x55dc6773ff14 content::ContentMain()
#15 0x55dc6b84f9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55dc6b84fa42 headless::HeadlessBrowserMain()
#17 0x55dc67747f9d headless::HeadlessShellMain()
#18 0x55dc65da61ac ChromeMain
#19 0x7fc03190d2e1 __libc_start_main
#20 0x55dc65da602a _start
  r8: 0000000000000000  r9: 00007ffd3711b190 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd3711b888 r13: 0000000000000161 r14: 00007ffd3711b890 r15: 00007ffd3711b429
  di: 0000000000000002  si: 00007ffd3711b190  bp: 00007ffd3711b3d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc03191ffff  sp: 00007ffd3711b208
  ip: 00007fc03191ffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/021015.457753:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b5a44cdb0c base::debug::StackTrace::StackTrace()
#1 0x55b5a44e6780 logging::LogMessage::~LogMessage()
#2 0x55b5a35762b1 content::ZygoteHostImpl::Init()
#3 0x55b5a31e8c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b5a31eea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b5a83189a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b5a4208a00 content::RunNamedProcessTypeMain()
#7 0x55b5a42092e8 content::ContentMainRunnerImpl::Run()
#8 0x55b5a4212f24 service_manager::Main()
#9 0x55b5a4207f14 content::ContentMain()
#10 0x55b5a83179b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b5a8317a42 headless::HeadlessBrowserMain()
#12 0x55b5a420ff9d headless::HeadlessShellMain()
#13 0x55b5a286e1ac ChromeMain
#14 0x7f7433dcb2e1 __libc_start_main
#15 0x55b5a286e02a _start

Received signal 6
#0 0x55b5a44cdb0c base::debug::StackTrace::StackTrace()
#1 0x55b5a44cd671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f7439d280c0 <unknown>
#3 0x7f7433dddfff gsignal
#4 0x7f7433ddf42a abort
#5 0x55b5a44cc105 base::debug::BreakDebugger()
#6 0x55b5a44e6bca logging::LogMessage::~LogMessage()
#7 0x55b5a35762b1 content::ZygoteHostImpl::Init()
#8 0x55b5a31e8c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b5a31eea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b5a83189a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b5a4208a00 content::RunNamedProcessTypeMain()
#12 0x55b5a42092e8 content::ContentMainRunnerImpl::Run()
#13 0x55b5a4212f24 service_manager::Main()
#14 0x55b5a4207f14 content::ContentMain()
#15 0x55b5a83179b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b5a8317a42 headless::HeadlessBrowserMain()
#17 0x55b5a420ff9d headless::HeadlessShellMain()
#18 0x55b5a286e1ac ChromeMain
#19 0x7f7433dcb2e1 __libc_start_main
#20 0x55b5a286e02a _start
  r8: 0000000000000000  r9: 00007ffdc3017cf0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdc30183e8 r13: 0000000000000161 r14: 00007ffdc30183f0 r15: 00007ffdc3017f89
  di: 0000000000000002  si: 00007ffdc3017cf0  bp: 00007ffdc3017f30  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f7433dddfff  sp: 00007ffdc3017d68
  ip: 00007f7433dddfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021015.457753:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b5a44cdb0c base::debug::StackTrace::StackTrace()
#1 0x55b5a44e6780 logging::LogMessage::~LogMessage()
#2 0x55b5a35762b1 content::ZygoteHostImpl::Init()
#3 0x55b5a31e8c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b5a31eea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b5a83189a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b5a4208a00 content::RunNamedProcessTypeMain()
#7 0x55b5a42092e8 content::ContentMainRunnerImpl::Run()
#8 0x55b5a4212f24 service_manager::Main()
#9 0x55b5a4207f14 content::ContentMain()
#10 0x55b5a83179b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b5a8317a42 headless::HeadlessBrowserMain()
#12 0x55b5a420ff9d headless::HeadlessShellMain()
#13 0x55b5a286e1ac ChromeMain
#14 0x7f7433dcb2e1 __libc_start_main
#15 0x55b5a286e02a _start

Received signal 6
#0 0x55b5a44cdb0c base::debug::StackTrace::StackTrace()
#1 0x55b5a44cd671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f7439d280c0 <unknown>
#3 0x7f7433dddfff gsignal
#4 0x7f7433ddf42a abort
#5 0x55b5a44cc105 base::debug::BreakDebugger()
#6 0x55b5a44e6bca logging::LogMessage::~LogMessage()
#7 0x55b5a35762b1 content::ZygoteHostImpl::Init()
#8 0x55b5a31e8c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b5a31eea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b5a83189a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b5a4208a00 content::RunNamedProcessTypeMain()
#12 0x55b5a42092e8 content::ContentMainRunnerImpl::Run()
#13 0x55b5a4212f24 service_manager::Main()
#14 0x55b5a4207f14 content::ContentMain()
#15 0x55b5a83179b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b5a8317a42 headless::HeadlessBrowserMain()
#17 0x55b5a420ff9d headless::HeadlessShellMain()
#18 0x55b5a286e1ac ChromeMain
#19 0x7f7433dcb2e1 __libc_start_main
#20 0x55b5a286e02a _start
  r8: 0000000000000000  r9: 00007ffdc3017cf0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdc30183e8 r13: 0000000000000161 r14: 00007ffdc30183f0 r15: 00007ffdc3017f89
  di: 0000000000000002  si: 00007ffdc3017cf0  bp: 00007ffdc3017f30  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f7433dddfff  sp: 00007ffdc3017d68
  ip: 00007f7433dddfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/021014.922266:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55a0bb499b0c base::debug::StackTrace::StackTrace()
#1 0x55a0bb4b2780 logging::LogMessage::~LogMessage()
#2 0x55a0ba5422b1 content::ZygoteHostImpl::Init()
#3 0x55a0ba1b4c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55a0ba1baa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55a0bf2e49a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55a0bb1d4a00 content::RunNamedProcessTypeMain()
#7 0x55a0bb1d52e8 content::ContentMainRunnerImpl::Run()
#8 0x55a0bb1def24 service_manager::Main()
#9 0x55a0bb1d3f14 content::ContentMain()
#10 0x55a0bf2e39b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55a0bf2e3a42 headless::HeadlessBrowserMain()
#12 0x55a0bb1dbf9d headless::HeadlessShellMain()
#13 0x55a0b983a1ac ChromeMain
#14 0x7fac005312e1 __libc_start_main
#15 0x55a0b983a02a _start

Received signal 6
#0 0x55a0bb499b0c base::debug::StackTrace::StackTrace()
#1 0x55a0bb499671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fac0648e0c0 <unknown>
#3 0x7fac00543fff gsignal
#4 0x7fac0054542a abort
#5 0x55a0bb498105 base::debug::BreakDebugger()
#6 0x55a0bb4b2bca logging::LogMessage::~LogMessage()
#7 0x55a0ba5422b1 content::ZygoteHostImpl::Init()
#8 0x55a0ba1b4c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55a0ba1baa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55a0bf2e49a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55a0bb1d4a00 content::RunNamedProcessTypeMain()
#12 0x55a0bb1d52e8 content::ContentMainRunnerImpl::Run()
#13 0x55a0bb1def24 service_manager::Main()
#14 0x55a0bb1d3f14 content::ContentMain()
#15 0x55a0bf2e39b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55a0bf2e3a42 headless::HeadlessBrowserMain()
#17 0x55a0bb1dbf9d headless::HeadlessShellMain()
#18 0x55a0b983a1ac ChromeMain
#19 0x7fac005312e1 __libc_start_main


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021014.922266:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55a0bb499b0c base::debug::StackTrace::StackTrace()
#1 0x55a0bb4b2780 logging::LogMessage::~LogMessage()
#2 0x55a0ba5422b1 content::ZygoteHostImpl::Init()
#3 0x55a0ba1b4c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55a0ba1baa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55a0bf2e49a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55a0bb1d4a00 content::RunNamedProcessTypeMain()
#7 0x55a0bb1d52e8 content::ContentMainRunnerImpl::Run()
#8 0x55a0bb1def24 service_manager::Main()
#9 0x55a0bb1d3f14 content::ContentMain()
#10 0x55a0bf2e39b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55a0bf2e3a42 headless::HeadlessBrowserMain()
#12 0x55a0bb1dbf9d headless::HeadlessShellMain()
#13 0x55a0b983a1ac ChromeMain
#14 0x7fac005312e1 __libc_start_main
#15 0x55a0b983a02a _start

Received signal 6
#0 0x55a0bb499b0c base::debug::StackTrace::StackTrace()
#1 0x55a0bb499671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fac0648e0c0 <unknown>
#3 0x7fac00543fff gsignal
#4 0x7fac0054542a abort
#5 0x55a0bb498105 base::debug::BreakDebugger()
#6 0x55a0bb4b2bca logging::LogMessage::~LogMessage()
#7 0x55a0ba5422b1 content::ZygoteHostImpl::Init()
#8 0x55a0ba1b4c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55a0ba1baa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55a0bf2e49a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55a0bb1d4a00 content::RunNamedProcessTypeMain()
#12 0x55a0bb1d52e8 content::ContentMainRunnerImpl::Run()
#13 0x55a0bb1def24 service_manager::Main()
#14 0x55a0bb1d3f14 content::ContentMain()
#15 0x55a0bf2e39b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55a0bf2e3a42 headless::HeadlessBrowserMain()
#17 0x55a0bb1dbf9d headless::HeadlessShellMain()
#18 0x55a0b983a1ac ChromeMain
#19 0x7fac005312e1 __libc_start_main


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
[0510/021015.428172:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564a2dba9b0c base::debug::StackTrace::StackTrace()
#1 0x564a2dbc2780 logging::LogMessage::~LogMessage()
#2 0x564a2cc522b1 content::ZygoteHostImpl::Init()
#3 0x564a2c8c4c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564a2c8caa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x564a319f49a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x564a2d8e4a00 content::RunNamedProcessTypeMain()
#7 0x564a2d8e52e8 content::ContentMainRunnerImpl::Run()
#8 0x564a2d8eef24 service_manager::Main()
#9 0x564a2d8e3f14 content::ContentMain()
#10 0x564a319f39b9 headless::(anonymous namespace)::RunContentMain()
#11 0x564a319f3a42 headless::HeadlessBrowserMain()
#12 0x564a2d8ebf9d headless::HeadlessShellMain()
#13 0x564a2bf4a1ac ChromeMain
#14 0x7f38d8ab92e1 __libc_start_main
#15 0x564a2bf4a02a _start

Received signal 6
#0 0x564a2dba9b0c base::debug::StackTrace::StackTrace()
#1 0x564a2dba9671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f38dea160c0 <unknown>
#3 0x7f38d8acbfff gsignal
#4 0x7f38d8acd42a abort
#5 0x564a2dba8105 base::debug::BreakDebugger()
#6 0x564a2dbc2bca logging::LogMessage::~LogMessage()
#7 0x564a2cc522b1 content::ZygoteHostImpl::Init()
#8 0x564a2c8c4c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564a2c8caa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x564a319f49a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x564a2d8e4a00 content::RunNamedProcessTypeMain()
#12 0x564a2d8e52e8 content::ContentMainRunnerImpl::Run()
#13 0x564a2d8eef24 service_manager::Main()
#14 0x564a2d8e3f14 content::ContentMain()
#15 0x564a319f39b9 headless::(anonymous namespace)::RunContentMain()
#16 0x564a319f3a42 headless::HeadlessBrowserMain()
#17 0x564a2d8ebf9d headless::HeadlessShellMain()
#18 0x564a2bf4a1ac ChromeMain
#19 0x7f38d8ab92e1 __libc_start_main
#20 0x564a2bf4a02a _start
  r8: 0000000000000000  r9: 00007ffffa74d1c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffffa74d8b8 r13: 0000000000000161 r14: 00007ffffa74d8c0 r15: 00007ffffa74d459
  di: 0000000000000002  si: 00007ffffa74d1c0  bp: 00007ffffa74d400  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f38d8acbfff  sp: 00007ffffa74d238
  ip: 00007f38d8acbfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021015.428172:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564a2dba9b0c base::debug::StackTrace::StackTrace()
#1 0x564a2dbc2780 logging::LogMessage::~LogMessage()
#2 0x564a2cc522b1 content::ZygoteHostImpl::Init()
#3 0x564a2c8c4c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564a2c8caa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x564a319f49a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x564a2d8e4a00 content::RunNamedProcessTypeMain()
#7 0x564a2d8e52e8 content::ContentMainRunnerImpl::Run()
#8 0x564a2d8eef24 service_manager::Main()
#9 0x564a2d8e3f14 content::ContentMain()
#10 0x564a319f39b9 headless::(anonymous namespace)::RunContentMain()
#11 0x564a319f3a42 headless::HeadlessBrowserMain()
#12 0x564a2d8ebf9d headless::HeadlessShellMain()
#13 0x564a2bf4a1ac ChromeMain
#14 0x7f38d8ab92e1 __libc_start_main
#15 0x564a2bf4a02a _start

Received signal 6
#0 0x564a2dba9b0c base::debug::StackTrace::StackTrace()
#1 0x564a2dba9671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f38dea160c0 <unknown>
#3 0x7f38d8acbfff gsignal
#4 0x7f38d8acd42a abort
#5 0x564a2dba8105 base::debug::BreakDebugger()
#6 0x564a2dbc2bca logging::LogMessage::~LogMessage()
#7 0x564a2cc522b1 content::ZygoteHostImpl::Init()
#8 0x564a2c8c4c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564a2c8caa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x564a319f49a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x564a2d8e4a00 content::RunNamedProcessTypeMain()
#12 0x564a2d8e52e8 content::ContentMainRunnerImpl::Run()
#13 0x564a2d8eef24 service_manager::Main()
#14 0x564a2d8e3f14 content::ContentMain()
#15 0x564a319f39b9 headless::(anonymous namespace)::RunContentMain()
#16 0x564a319f3a42 headless::HeadlessBrowserMain()
#17 0x564a2d8ebf9d headless::HeadlessShellMain()
#18 0x564a2bf4a1ac ChromeMain
#19 0x7f38d8ab92e1 __libc_start_main
#20 0x564a2bf4a02a _start
  r8: 0000000000000000  r9: 00007ffffa74d1c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffffa74d8b8 r13: 0000000000000161 r14: 00007ffffa74d8c0 r15: 00007ffffa74d459
  di: 0000000000000002  si: 00007ffffa74d1c0  bp: 00007ffffa74d400  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f38d8acbfff  sp: 00007ffffa74d238
  ip: 00007f38d8acbfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- [HTML Standard](https://html.spec.whatwg.org/)

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
[0510/021017.599617:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55efa9ab2b0c base::debug::StackTrace::StackTrace()
#1 0x55efa9acb780 logging::LogMessage::~LogMessage()
#2 0x55efa8b5b2b1 content::ZygoteHostImpl::Init()
#3 0x55efa87cdc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55efa87d3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55efad8fd9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55efa97eda00 content::RunNamedProcessTypeMain()
#7 0x55efa97ee2e8 content::ContentMainRunnerImpl::Run()
#8 0x55efa97f7f24 service_manager::Main()
#9 0x55efa97ecf14 content::ContentMain()
#10 0x55efad8fc9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55efad8fca42 headless::HeadlessBrowserMain()
#12 0x55efa97f4f9d headless::HeadlessShellMain()
#13 0x55efa7e531ac ChromeMain
#14 0x7f0577b702e1 __libc_start_main
#15 0x55efa7e5302a _start

Received signal 6
#0 0x55efa9ab2b0c base::debug::StackTrace::StackTrace()
#1 0x55efa9ab2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f057dacd0c0 <unknown>
#3 0x7f0577b82fff gsignal
#4 0x7f0577b8442a abort
#5 0x55efa9ab1105 base::debug::BreakDebugger()
#6 0x55efa9acbbca logging::LogMessage::~LogMessage()
#7 0x55efa8b5b2b1 content::ZygoteHostImpl::Init()
#8 0x55efa87cdc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55efa87d3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55efad8fd9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55efa97eda00 content::RunNamedProcessTypeMain()
#12 0x55efa97ee2e8 content::ContentMainRunnerImpl::Run()
#13 0x55efa97f7f24 service_manager::Main()
#14 0x55efa97ecf14 content::ContentMain()
#15 0x55efad8fc9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55efad8fca42 headless::HeadlessBrowserMain()
#17 0x55efa97f4f9d headless::HeadlessShellMain()
#18 0x55efa7e531ac ChromeMain
#19 0x7f0577b702e1 __libc_start_main
#20 0x55efa7e5302a _start
  r8: 0000000000000000  r9: 00007ffd90fc3e80 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd90fc4578 r13: 0000000000000161 r14: 00007ffd90fc4580 r15: 00007ffd90fc4119
  di: 0000000000000002  si: 00007ffd90fc3e80  bp: 00007ffd90fc40c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f0577b82fff  sp: 00007ffd90fc3ef8
  ip: 00007f0577b82fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021017.599617:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55efa9ab2b0c base::debug::StackTrace::StackTrace()
#1 0x55efa9acb780 logging::LogMessage::~LogMessage()
#2 0x55efa8b5b2b1 content::ZygoteHostImpl::Init()
#3 0x55efa87cdc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55efa87d3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55efad8fd9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55efa97eda00 content::RunNamedProcessTypeMain()
#7 0x55efa97ee2e8 content::ContentMainRunnerImpl::Run()
#8 0x55efa97f7f24 service_manager::Main()
#9 0x55efa97ecf14 content::ContentMain()
#10 0x55efad8fc9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55efad8fca42 headless::HeadlessBrowserMain()
#12 0x55efa97f4f9d headless::HeadlessShellMain()
#13 0x55efa7e531ac ChromeMain
#14 0x7f0577b702e1 __libc_start_main
#15 0x55efa7e5302a _start

Received signal 6
#0 0x55efa9ab2b0c base::debug::StackTrace::StackTrace()
#1 0x55efa9ab2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f057dacd0c0 <unknown>
#3 0x7f0577b82fff gsignal
#4 0x7f0577b8442a abort
#5 0x55efa9ab1105 base::debug::BreakDebugger()
#6 0x55efa9acbbca logging::LogMessage::~LogMessage()
#7 0x55efa8b5b2b1 content::ZygoteHostImpl::Init()
#8 0x55efa87cdc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55efa87d3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55efad8fd9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55efa97eda00 content::RunNamedProcessTypeMain()
#12 0x55efa97ee2e8 content::ContentMainRunnerImpl::Run()
#13 0x55efa97f7f24 service_manager::Main()
#14 0x55efa97ecf14 content::ContentMain()
#15 0x55efad8fc9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55efad8fca42 headless::HeadlessBrowserMain()
#17 0x55efa97f4f9d headless::HeadlessShellMain()
#18 0x55efa7e531ac ChromeMain
#19 0x7f0577b702e1 __libc_start_main
#20 0x55efa7e5302a _start
  r8: 0000000000000000  r9: 00007ffd90fc3e80 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd90fc4578 r13: 0000000000000161 r14: 00007ffd90fc4580 r15: 00007ffd90fc4119
  di: 0000000000000002  si: 00007ffd90fc3e80  bp: 00007ffd90fc40c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f0577b82fff  sp: 00007ffd90fc3ef8
  ip: 00007f0577b82fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- Unknown WebIDL names used: `PermissionName`
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


## Picture-in-Picture {data-spec=true data-anomaly=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/picture-in-picture/) (7 May 2018)
- Repository: [GitHub wicg/picture-in-picture](https://github.com/wicg/picture-in-picture)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

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
[0510/021017.661128:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e176dc2b0c base::debug::StackTrace::StackTrace()
#1 0x55e176ddb780 logging::LogMessage::~LogMessage()
#2 0x55e175e6b2b1 content::ZygoteHostImpl::Init()
#3 0x55e175addc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e175ae3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e17ac0d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e176afda00 content::RunNamedProcessTypeMain()
#7 0x55e176afe2e8 content::ContentMainRunnerImpl::Run()
#8 0x55e176b07f24 service_manager::Main()
#9 0x55e176afcf14 content::ContentMain()
#10 0x55e17ac0c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e17ac0ca42 headless::HeadlessBrowserMain()
#12 0x55e176b04f9d headless::HeadlessShellMain()
#13 0x55e1751631ac ChromeMain
#14 0x7f438f3d82e1 __libc_start_main
#15 0x55e17516302a _start

Received signal 6
#0 0x55e176dc2b0c base::debug::StackTrace::StackTrace()
#1 0x55e176dc2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f43953350c0 <unknown>
#3 0x7f438f3eafff gsignal
#4 0x7f438f3ec42a abort
#5 0x55e176dc1105 base::debug::BreakDebugger()
#6 0x55e176ddbbca logging::LogMessage::~LogMessage()
#7 0x55e175e6b2b1 content::ZygoteHostImpl::Init()
#8 0x55e175addc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e175ae3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e17ac0d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e176afda00 content::RunNamedProcessTypeMain()
#12 0x55e176afe2e8 content::ContentMainRunnerImpl::Run()
#13 0x55e176b07f24 service_manager::Main()
#14 0x55e176afcf14 content::ContentMain()
#15 0x55e17ac0c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e17ac0ca42 headless::HeadlessBrowserMain()
#17 0x55e176b04f9d headless::HeadlessShellMain()
#18 0x55e1751631ac ChromeMain
#19 0x7f438f3d82e1 __libc_start_main
#20 0x55e17516302a _start
  r8: 0000000000000000  r9: 00007ffe375096d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe37509dc8 r13: 0000000000000161 r14: 00007ffe37509dd0 r15: 00007ffe37509969
  di: 0000000000000002  si: 00007ffe375096d0  bp: 00007ffe37509910  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f438f3eafff  sp: 00007ffe37509748
  ip: 00007f438f3eafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021017.661128:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e176dc2b0c base::debug::StackTrace::StackTrace()
#1 0x55e176ddb780 logging::LogMessage::~LogMessage()
#2 0x55e175e6b2b1 content::ZygoteHostImpl::Init()
#3 0x55e175addc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e175ae3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e17ac0d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e176afda00 content::RunNamedProcessTypeMain()
#7 0x55e176afe2e8 content::ContentMainRunnerImpl::Run()
#8 0x55e176b07f24 service_manager::Main()
#9 0x55e176afcf14 content::ContentMain()
#10 0x55e17ac0c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e17ac0ca42 headless::HeadlessBrowserMain()
#12 0x55e176b04f9d headless::HeadlessShellMain()
#13 0x55e1751631ac ChromeMain
#14 0x7f438f3d82e1 __libc_start_main
#15 0x55e17516302a _start

Received signal 6
#0 0x55e176dc2b0c base::debug::StackTrace::StackTrace()
#1 0x55e176dc2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f43953350c0 <unknown>
#3 0x7f438f3eafff gsignal
#4 0x7f438f3ec42a abort
#5 0x55e176dc1105 base::debug::BreakDebugger()
#6 0x55e176ddbbca logging::LogMessage::~LogMessage()
#7 0x55e175e6b2b1 content::ZygoteHostImpl::Init()
#8 0x55e175addc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e175ae3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e17ac0d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e176afda00 content::RunNamedProcessTypeMain()
#12 0x55e176afe2e8 content::ContentMainRunnerImpl::Run()
#13 0x55e176b07f24 service_manager::Main()
#14 0x55e176afcf14 content::ContentMain()
#15 0x55e17ac0c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e17ac0ca42 headless::HeadlessBrowserMain()
#17 0x55e176b04f9d headless::HeadlessShellMain()
#18 0x55e1751631ac ChromeMain
#19 0x7f438f3d82e1 __libc_start_main
#20 0x55e17516302a _start
  r8: 0000000000000000  r9: 00007ffe375096d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe37509dc8 r13: 0000000000000161 r14: 00007ffe37509dd0 r15: 00007ffe37509969
  di: 0000000000000002  si: 00007ffe375096d0  bp: 00007ffe37509910  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f438f3eafff  sp: 00007ffe37509748
  ip: 00007f438f3eafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
- [HTML Standard](https://html.spec.whatwg.org/)

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
[0510/021017.585932:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55aa4dbc3b0c base::debug::StackTrace::StackTrace()
#1 0x55aa4dbdc780 logging::LogMessage::~LogMessage()
#2 0x55aa4cc6c2b1 content::ZygoteHostImpl::Init()
#3 0x55aa4c8dec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55aa4c8e4a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55aa51a0e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55aa4d8fea00 content::RunNamedProcessTypeMain()
#7 0x55aa4d8ff2e8 content::ContentMainRunnerImpl::Run()
#8 0x55aa4d908f24 service_manager::Main()
#9 0x55aa4d8fdf14 content::ContentMain()
#10 0x55aa51a0d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55aa51a0da42 headless::HeadlessBrowserMain()
#12 0x55aa4d905f9d headless::HeadlessShellMain()
#13 0x55aa4bf641ac ChromeMain
#14 0x7f07100752e1 __libc_start_main
#15 0x55aa4bf6402a _start

Received signal 6
#0 0x55aa4dbc3b0c base::debug::StackTrace::StackTrace()
#1 0x55aa4dbc3671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f0715fd20c0 <unknown>
#3 0x7f0710087fff gsignal
#4 0x7f071008942a abort
#5 0x55aa4dbc2105 base::debug::BreakDebugger()
#6 0x55aa4dbdcbca logging::LogMessage::~LogMessage()
#7 0x55aa4cc6c2b1 content::ZygoteHostImpl::Init()
#8 0x55aa4c8dec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55aa4c8e4a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55aa51a0e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55aa4d8fea00 content::RunNamedProcessTypeMain()
#12 0x55aa4d8ff2e8 content::ContentMainRunnerImpl::Run()
#13 0x55aa4d908f24 service_manager::Main()
#14 0x55aa4d8fdf14 content::ContentMain()
#15 0x55aa51a0d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55aa51a0da42 headless::HeadlessBrowserMain()
#17 0x55aa4d905f9d headless::HeadlessShellMain()
#18 0x55aa4bf641ac ChromeMain
#19 0x7f07100752e1 __libc_start_main
#20 0x55aa4bf6402a _start
  r8: 0000000000000000  r9: 00007ffe216edd10 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe216ee408 r13: 0000000000000161 r14: 00007ffe216ee410 r15: 00007ffe216edfa9
  di: 0000000000000002  si: 00007ffe216edd10  bp: 00007ffe216edf50  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f0710087fff  sp: 00007ffe216edd88
  ip: 00007f0710087fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021017.585932:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55aa4dbc3b0c base::debug::StackTrace::StackTrace()
#1 0x55aa4dbdc780 logging::LogMessage::~LogMessage()
#2 0x55aa4cc6c2b1 content::ZygoteHostImpl::Init()
#3 0x55aa4c8dec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55aa4c8e4a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55aa51a0e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55aa4d8fea00 content::RunNamedProcessTypeMain()
#7 0x55aa4d8ff2e8 content::ContentMainRunnerImpl::Run()
#8 0x55aa4d908f24 service_manager::Main()
#9 0x55aa4d8fdf14 content::ContentMain()
#10 0x55aa51a0d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55aa51a0da42 headless::HeadlessBrowserMain()
#12 0x55aa4d905f9d headless::HeadlessShellMain()
#13 0x55aa4bf641ac ChromeMain
#14 0x7f07100752e1 __libc_start_main
#15 0x55aa4bf6402a _start

Received signal 6
#0 0x55aa4dbc3b0c base::debug::StackTrace::StackTrace()
#1 0x55aa4dbc3671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f0715fd20c0 <unknown>
#3 0x7f0710087fff gsignal
#4 0x7f071008942a abort
#5 0x55aa4dbc2105 base::debug::BreakDebugger()
#6 0x55aa4dbdcbca logging::LogMessage::~LogMessage()
#7 0x55aa4cc6c2b1 content::ZygoteHostImpl::Init()
#8 0x55aa4c8dec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55aa4c8e4a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55aa51a0e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55aa4d8fea00 content::RunNamedProcessTypeMain()
#12 0x55aa4d8ff2e8 content::ContentMainRunnerImpl::Run()
#13 0x55aa4d908f24 service_manager::Main()
#14 0x55aa4d8fdf14 content::ContentMain()
#15 0x55aa51a0d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55aa51a0da42 headless::HeadlessBrowserMain()
#17 0x55aa4d905f9d headless::HeadlessShellMain()
#18 0x55aa4bf641ac ChromeMain
#19 0x7f07100752e1 __libc_start_main
#20 0x55aa4bf6402a _start
  r8: 0000000000000000  r9: 00007ffe216edd10 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe216ee408 r13: 0000000000000161 r14: 00007ffe216ee410 r15: 00007ffe216edfa9
  di: 0000000000000002  si: 00007ffe216edd10  bp: 00007ffe216edf50  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f0710087fff  sp: 00007ffe216edd88
  ip: 00007f0710087fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- [HTML Standard](https://html.spec.whatwg.org/)

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
[0510/021017.676669:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b232dd1b0c base::debug::StackTrace::StackTrace()
#1 0x55b232dea780 logging::LogMessage::~LogMessage()
#2 0x55b231e7a2b1 content::ZygoteHostImpl::Init()
#3 0x55b231aecc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b231af2a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b236c1c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b232b0ca00 content::RunNamedProcessTypeMain()
#7 0x55b232b0d2e8 content::ContentMainRunnerImpl::Run()
#8 0x55b232b16f24 service_manager::Main()
#9 0x55b232b0bf14 content::ContentMain()
#10 0x55b236c1b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b236c1ba42 headless::HeadlessBrowserMain()
#12 0x55b232b13f9d headless::HeadlessShellMain()
#13 0x55b2311721ac ChromeMain
#14 0x7f90da6aa2e1 __libc_start_main
#15 0x55b23117202a _start

Received signal 6
#0 0x55b232dd1b0c base::debug::StackTrace::StackTrace()
#1 0x55b232dd1671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f90e06070c0 <unknown>
#3 0x7f90da6bcfff gsignal
#4 0x7f90da6be42a abort
#5 0x55b232dd0105 base::debug::BreakDebugger()
#6 0x55b232deabca logging::LogMessage::~LogMessage()
#7 0x55b231e7a2b1 content::ZygoteHostImpl::Init()
#8 0x55b231aecc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b231af2a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b236c1c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b232b0ca00 content::RunNamedProcessTypeMain()
#12 0x55b232b0d2e8 content::ContentMainRunnerImpl::Run()
#13 0x55b232b16f24 service_manager::Main()
#14 0x55b232b0bf14 content::ContentMain()
#15 0x55b236c1b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b236c1ba42 headless::HeadlessBrowserMain()
#17 0x55b232b13f9d headless::HeadlessShellMain()
#18 0x55b2311721ac ChromeMain
#19 0x7f90da6aa2e1 __libc_start_main
#20 0x55b23117202a _start
  r8: 0000000000000000  r9: 00007fffff1bbbe0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffff1bc2d8 r13: 0000000000000161 r14: 00007fffff1bc2e0 r15: 00007fffff1bbe79
  di: 0000000000000002  si: 00007fffff1bbbe0  bp: 00007fffff1bbe20  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f90da6bcfff  sp: 00007fffff1bbc58
  ip: 00007f90da6bcfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021017.676669:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b232dd1b0c base::debug::StackTrace::StackTrace()
#1 0x55b232dea780 logging::LogMessage::~LogMessage()
#2 0x55b231e7a2b1 content::ZygoteHostImpl::Init()
#3 0x55b231aecc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b231af2a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b236c1c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b232b0ca00 content::RunNamedProcessTypeMain()
#7 0x55b232b0d2e8 content::ContentMainRunnerImpl::Run()
#8 0x55b232b16f24 service_manager::Main()
#9 0x55b232b0bf14 content::ContentMain()
#10 0x55b236c1b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b236c1ba42 headless::HeadlessBrowserMain()
#12 0x55b232b13f9d headless::HeadlessShellMain()
#13 0x55b2311721ac ChromeMain
#14 0x7f90da6aa2e1 __libc_start_main
#15 0x55b23117202a _start

Received signal 6
#0 0x55b232dd1b0c base::debug::StackTrace::StackTrace()
#1 0x55b232dd1671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f90e06070c0 <unknown>
#3 0x7f90da6bcfff gsignal
#4 0x7f90da6be42a abort
#5 0x55b232dd0105 base::debug::BreakDebugger()
#6 0x55b232deabca logging::LogMessage::~LogMessage()
#7 0x55b231e7a2b1 content::ZygoteHostImpl::Init()
#8 0x55b231aecc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b231af2a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b236c1c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b232b0ca00 content::RunNamedProcessTypeMain()
#12 0x55b232b0d2e8 content::ContentMainRunnerImpl::Run()
#13 0x55b232b16f24 service_manager::Main()
#14 0x55b232b0bf14 content::ContentMain()
#15 0x55b236c1b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b236c1ba42 headless::HeadlessBrowserMain()
#17 0x55b232b13f9d headless::HeadlessShellMain()
#18 0x55b2311721ac ChromeMain
#19 0x7f90da6aa2e1 __libc_start_main
#20 0x55b23117202a _start
  r8: 0000000000000000  r9: 00007fffff1bbbe0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffff1bc2d8 r13: 0000000000000161 r14: 00007fffff1bc2e0 r15: 00007fffff1bbe79
  di: 0000000000000002  si: 00007fffff1bbbe0  bp: 00007fffff1bbe20  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f90da6bcfff  sp: 00007fffff1bbc58
  ip: 00007f90da6bcfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- [HTML Standard](https://html.spec.whatwg.org/)

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
[0510/021019.178573:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56154f6e4b0c base::debug::StackTrace::StackTrace()
#1 0x56154f6fd780 logging::LogMessage::~LogMessage()
#2 0x56154e78d2b1 content::ZygoteHostImpl::Init()
#3 0x56154e3ffc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56154e405a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56155352f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56154f41fa00 content::RunNamedProcessTypeMain()
#7 0x56154f4202e8 content::ContentMainRunnerImpl::Run()
#8 0x56154f429f24 service_manager::Main()
#9 0x56154f41ef14 content::ContentMain()
#10 0x56155352e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56155352ea42 headless::HeadlessBrowserMain()
#12 0x56154f426f9d headless::HeadlessShellMain()
#13 0x56154da851ac ChromeMain
#14 0x7f5a0bb9c2e1 __libc_start_main
#15 0x56154da8502a _start

Received signal 6
#0 0x56154f6e4b0c base::debug::StackTrace::StackTrace()
#1 0x56154f6e4671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f5a11af90c0 <unknown>
#3 0x7f5a0bbaefff gsignal
#4 0x7f5a0bbb042a abort
#5 0x56154f6e3105 base::debug::BreakDebugger()
#6 0x56154f6fdbca logging::LogMessage::~LogMessage()
#7 0x56154e78d2b1 content::ZygoteHostImpl::Init()
#8 0x56154e3ffc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56154e405a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56155352f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56154f41fa00 content::RunNamedProcessTypeMain()
#12 0x56154f4202e8 content::ContentMainRunnerImpl::Run()
#13 0x56154f429f24 service_manager::Main()
#14 0x56154f41ef14 content::ContentMain()
#15 0x56155352e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56155352ea42 headless::HeadlessBrowserMain()
#17 0x56154f426f9d headless::HeadlessShellMain()
#18 0x56154da851ac ChromeMain
#19 0x7f5a0bb9c2e1 __libc_start_main
#20 0x56154da8502a _start
  r8: 0000000000000000  r9: 00007ffc9358abe0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc9358b2d8 r13: 0000000000000161 r14: 00007ffc9358b2e0 r15: 00007ffc9358ae79
  di: 0000000000000002  si: 00007ffc9358abe0  bp: 00007ffc9358ae20  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f5a0bbaefff  sp: 00007ffc9358ac58
  ip: 00007f5a0bbaefff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021019.178573:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56154f6e4b0c base::debug::StackTrace::StackTrace()
#1 0x56154f6fd780 logging::LogMessage::~LogMessage()
#2 0x56154e78d2b1 content::ZygoteHostImpl::Init()
#3 0x56154e3ffc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56154e405a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56155352f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56154f41fa00 content::RunNamedProcessTypeMain()
#7 0x56154f4202e8 content::ContentMainRunnerImpl::Run()
#8 0x56154f429f24 service_manager::Main()
#9 0x56154f41ef14 content::ContentMain()
#10 0x56155352e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56155352ea42 headless::HeadlessBrowserMain()
#12 0x56154f426f9d headless::HeadlessShellMain()
#13 0x56154da851ac ChromeMain
#14 0x7f5a0bb9c2e1 __libc_start_main
#15 0x56154da8502a _start

Received signal 6
#0 0x56154f6e4b0c base::debug::StackTrace::StackTrace()
#1 0x56154f6e4671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f5a11af90c0 <unknown>
#3 0x7f5a0bbaefff gsignal
#4 0x7f5a0bbb042a abort
#5 0x56154f6e3105 base::debug::BreakDebugger()
#6 0x56154f6fdbca logging::LogMessage::~LogMessage()
#7 0x56154e78d2b1 content::ZygoteHostImpl::Init()
#8 0x56154e3ffc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56154e405a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56155352f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56154f41fa00 content::RunNamedProcessTypeMain()
#12 0x56154f4202e8 content::ContentMainRunnerImpl::Run()
#13 0x56154f429f24 service_manager::Main()
#14 0x56154f41ef14 content::ContentMain()
#15 0x56155352e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56155352ea42 headless::HeadlessBrowserMain()
#17 0x56154f426f9d headless::HeadlessShellMain()
#18 0x56154da851ac ChromeMain
#19 0x7f5a0bb9c2e1 __libc_start_main
#20 0x56154da8502a _start
  r8: 0000000000000000  r9: 00007ffc9358abe0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc9358b2d8 r13: 0000000000000161 r14: 00007ffc9358b2e0 r15: 00007ffc9358ae79
  di: 0000000000000002  si: 00007ffc9358abe0  bp: 00007ffc9358ae20  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f5a0bbaefff  sp: 00007ffc9358ac58
  ip: 00007f5a0bbaefff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- [HTML Standard](https://html.spec.whatwg.org/)

No informative reference to this spec from other specs.


## Proximity Sensor {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/proximity/) (1 March 2018)
- Editor's Draft: [https://w3c.github.io/proximity/](https://w3c.github.io/proximity/)
- Latest published version: [http://www.w3.org/TR/proximity/](http://www.w3.org/TR/proximity/)
- Latest published status: [Working Draft](http://www.w3.org/TR/2016/WD-proximity-20160719/)
- Repository: [GitHub w3c/proximity](https://github.com/w3c/proximity)
- Shortname: proximity

### Potential issue(s) {.anomalies}

This specification looks good!

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
[0510/021018.026555:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b0ee483b0c base::debug::StackTrace::StackTrace()
#1 0x55b0ee49c780 logging::LogMessage::~LogMessage()
#2 0x55b0ed52c2b1 content::ZygoteHostImpl::Init()
#3 0x55b0ed19ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b0ed1a4a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b0f22ce9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b0ee1bea00 content::RunNamedProcessTypeMain()
#7 0x55b0ee1bf2e8 content::ContentMainRunnerImpl::Run()
#8 0x55b0ee1c8f24 service_manager::Main()
#9 0x55b0ee1bdf14 content::ContentMain()
#10 0x55b0f22cd9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b0f22cda42 headless::HeadlessBrowserMain()
#12 0x55b0ee1c5f9d headless::HeadlessShellMain()
#13 0x55b0ec8241ac ChromeMain
#14 0x7f11fb07f2e1 __libc_start_main
#15 0x55b0ec82402a _start

Received signal 6
#0 0x55b0ee483b0c base::debug::StackTrace::StackTrace()
#1 0x55b0ee483671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1200fdc0c0 <unknown>
#3 0x7f11fb091fff gsignal
#4 0x7f11fb09342a abort
#5 0x55b0ee482105 base::debug::BreakDebugger()
#6 0x55b0ee49cbca logging::LogMessage::~LogMessage()
#7 0x55b0ed52c2b1 content::ZygoteHostImpl::Init()
#8 0x55b0ed19ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b0ed1a4a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b0f22ce9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b0ee1bea00 content::RunNamedProcessTypeMain()
#12 0x55b0ee1bf2e8 content::ContentMainRunnerImpl::Run()
#13 0x55b0ee1c8f24 service_manager::Main()
#14 0x55b0ee1bdf14 content::ContentMain()
#15 0x55b0f22cd9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b0f22cda42 headless::HeadlessBrowserMain()
#17 0x55b0ee1c5f9d headless::HeadlessShellMain()
#18 0x55b0ec8241ac ChromeMain
#19 0x7f11fb07f2e1 __libc_start_main
#20 0x55b0ec82402a _start
  r8: 0000000000000000  r9: 00007ffd5a648b70 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd5a649268 r13: 0000000000000161 r14: 00007ffd5a649270 r15: 00007ffd5a648e09
  di: 0000000000000002  si: 00007ffd5a648b70  bp: 00007ffd5a648db0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f11fb091fff  sp: 00007ffd5a648be8
  ip: 00007f11fb091fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021018.026555:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b0ee483b0c base::debug::StackTrace::StackTrace()
#1 0x55b0ee49c780 logging::LogMessage::~LogMessage()
#2 0x55b0ed52c2b1 content::ZygoteHostImpl::Init()
#3 0x55b0ed19ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b0ed1a4a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b0f22ce9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b0ee1bea00 content::RunNamedProcessTypeMain()
#7 0x55b0ee1bf2e8 content::ContentMainRunnerImpl::Run()
#8 0x55b0ee1c8f24 service_manager::Main()
#9 0x55b0ee1bdf14 content::ContentMain()
#10 0x55b0f22cd9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b0f22cda42 headless::HeadlessBrowserMain()
#12 0x55b0ee1c5f9d headless::HeadlessShellMain()
#13 0x55b0ec8241ac ChromeMain
#14 0x7f11fb07f2e1 __libc_start_main
#15 0x55b0ec82402a _start

Received signal 6
#0 0x55b0ee483b0c base::debug::StackTrace::StackTrace()
#1 0x55b0ee483671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1200fdc0c0 <unknown>
#3 0x7f11fb091fff gsignal
#4 0x7f11fb09342a abort
#5 0x55b0ee482105 base::debug::BreakDebugger()
#6 0x55b0ee49cbca logging::LogMessage::~LogMessage()
#7 0x55b0ed52c2b1 content::ZygoteHostImpl::Init()
#8 0x55b0ed19ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b0ed1a4a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b0f22ce9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b0ee1bea00 content::RunNamedProcessTypeMain()
#12 0x55b0ee1bf2e8 content::ContentMainRunnerImpl::Run()
#13 0x55b0ee1c8f24 service_manager::Main()
#14 0x55b0ee1bdf14 content::ContentMain()
#15 0x55b0f22cd9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b0f22cda42 headless::HeadlessBrowserMain()
#17 0x55b0ee1c5f9d headless::HeadlessShellMain()
#18 0x55b0ec8241ac ChromeMain
#19 0x7f11fb07f2e1 __libc_start_main
#20 0x55b0ec82402a _start
  r8: 0000000000000000  r9: 00007ffd5a648b70 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd5a649268 r13: 0000000000000161 r14: 00007ffd5a649270 r15: 00007ffd5a648e09
  di: 0000000000000002  si: 00007ffd5a648b70  bp: 00007ffd5a648db0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f11fb091fff  sp: 00007ffd5a648be8
  ip: 00007f11fb091fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
- [HTML Standard](https://html.spec.whatwg.org/)
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
[0510/021019.346440:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5626cf263b0c base::debug::StackTrace::StackTrace()
#1 0x5626cf27c780 logging::LogMessage::~LogMessage()
#2 0x5626ce30c2b1 content::ZygoteHostImpl::Init()
#3 0x5626cdf7ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5626cdf84a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5626d30ae9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5626cef9ea00 content::RunNamedProcessTypeMain()
#7 0x5626cef9f2e8 content::ContentMainRunnerImpl::Run()
#8 0x5626cefa8f24 service_manager::Main()
#9 0x5626cef9df14 content::ContentMain()
#10 0x5626d30ad9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5626d30ada42 headless::HeadlessBrowserMain()
#12 0x5626cefa5f9d headless::HeadlessShellMain()
#13 0x5626cd6041ac ChromeMain
#14 0x7f361f17e2e1 __libc_start_main
#15 0x5626cd60402a _start

Received signal 6
#0 0x5626cf263b0c base::debug::StackTrace::StackTrace()
#1 0x5626cf263671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f36250db0c0 <unknown>
#3 0x7f361f190fff gsignal
#4 0x7f361f19242a abort
#5 0x5626cf262105 base::debug::BreakDebugger()
#6 0x5626cf27cbca logging::LogMessage::~LogMessage()
#7 0x5626ce30c2b1 content::ZygoteHostImpl::Init()
#8 0x5626cdf7ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5626cdf84a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5626d30ae9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5626cef9ea00 content::RunNamedProcessTypeMain()
#12 0x5626cef9f2e8 content::ContentMainRunnerImpl::Run()
#13 0x5626cefa8f24 service_manager::Main()
#14 0x5626cef9df14 content::ContentMain()
#15 0x5626d30ad9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5626d30ada42 headless::HeadlessBrowserMain()
#17 0x5626cefa5f9d headless::HeadlessShellMain()
#18 0x5626cd6041ac ChromeMain
#19 0x7f361f17e2e1 __libc_start_main
#20 0x5626cd60402a _start
  r8: 0000000000000000  r9: 00007ffe3bb00270 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe3bb00968 r13: 0000000000000161 r14: 00007ffe3bb00970 r15: 00007ffe3bb00509
  di: 0000000000000002  si: 00007ffe3bb00270  bp: 00007ffe3bb004b0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f361f190fff  sp: 00007ffe3bb002e8
  ip: 00007f361f190fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021019.346440:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5626cf263b0c base::debug::StackTrace::StackTrace()
#1 0x5626cf27c780 logging::LogMessage::~LogMessage()
#2 0x5626ce30c2b1 content::ZygoteHostImpl::Init()
#3 0x5626cdf7ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5626cdf84a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5626d30ae9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5626cef9ea00 content::RunNamedProcessTypeMain()
#7 0x5626cef9f2e8 content::ContentMainRunnerImpl::Run()
#8 0x5626cefa8f24 service_manager::Main()
#9 0x5626cef9df14 content::ContentMain()
#10 0x5626d30ad9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5626d30ada42 headless::HeadlessBrowserMain()
#12 0x5626cefa5f9d headless::HeadlessShellMain()
#13 0x5626cd6041ac ChromeMain
#14 0x7f361f17e2e1 __libc_start_main
#15 0x5626cd60402a _start

Received signal 6
#0 0x5626cf263b0c base::debug::StackTrace::StackTrace()
#1 0x5626cf263671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f36250db0c0 <unknown>
#3 0x7f361f190fff gsignal
#4 0x7f361f19242a abort
#5 0x5626cf262105 base::debug::BreakDebugger()
#6 0x5626cf27cbca logging::LogMessage::~LogMessage()
#7 0x5626ce30c2b1 content::ZygoteHostImpl::Init()
#8 0x5626cdf7ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5626cdf84a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5626d30ae9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5626cef9ea00 content::RunNamedProcessTypeMain()
#12 0x5626cef9f2e8 content::ContentMainRunnerImpl::Run()
#13 0x5626cefa8f24 service_manager::Main()
#14 0x5626cef9df14 content::ContentMain()
#15 0x5626d30ad9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5626d30ada42 headless::HeadlessBrowserMain()
#17 0x5626cefa5f9d headless::HeadlessShellMain()
#18 0x5626cd6041ac ChromeMain
#19 0x7f361f17e2e1 __libc_start_main
#20 0x5626cd60402a _start
  r8: 0000000000000000  r9: 00007ffe3bb00270 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe3bb00968 r13: 0000000000000161 r14: 00007ffe3bb00970 r15: 00007ffe3bb00509
  di: 0000000000000002  si: 00007ffe3bb00270  bp: 00007ffe3bb004b0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f361f190fff  sp: 00007ffe3bb002e8
  ip: 00007f361f190fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/021020.631048:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x559813502b0c base::debug::StackTrace::StackTrace()
#1 0x55981351b780 logging::LogMessage::~LogMessage()
#2 0x5598125ab2b1 content::ZygoteHostImpl::Init()
#3 0x55981221dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x559812223a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55981734d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55981323da00 content::RunNamedProcessTypeMain()
#7 0x55981323e2e8 content::ContentMainRunnerImpl::Run()
#8 0x559813247f24 service_manager::Main()
#9 0x55981323cf14 content::ContentMain()
#10 0x55981734c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55981734ca42 headless::HeadlessBrowserMain()
#12 0x559813244f9d headless::HeadlessShellMain()
#13 0x5598118a31ac ChromeMain
#14 0x7f57a69132e1 __libc_start_main
#15 0x5598118a302a _start

Received signal 6
#0 0x559813502b0c base::debug::StackTrace::StackTrace()
#1 0x559813502671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f57ac8700c0 <unknown>
#3 0x7f57a6925fff gsignal
#4 0x7f57a692742a abort
#5 0x559813501105 base::debug::BreakDebugger()
#6 0x55981351bbca logging::LogMessage::~LogMessage()
#7 0x5598125ab2b1 content::ZygoteHostImpl::Init()
#8 0x55981221dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x559812223a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55981734d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55981323da00 content::RunNamedProcessTypeMain()
#12 0x55981323e2e8 content::ContentMainRunnerImpl::Run()
#13 0x559813247f24 service_manager::Main()
#14 0x55981323cf14 content::ContentMain()
#15 0x55981734c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55981734ca42 headless::HeadlessBrowserMain()
#17 0x559813244f9d headless::HeadlessShellMain()
#18 0x5598118a31ac ChromeMain
#19 0x7f57a69132e1 __libc_start_main
#20 0x5598118a302a _start
  r8: 0000000000000000  r9: 00007fff1ce3f100 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff1ce3f7f8 r13: 0000000000000161 r14: 00007fff1ce3f800 r15: 00007fff1ce3f399
  di: 0000000000000002  si: 00007fff1ce3f100  bp: 00007fff1ce3f340  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f57a6925fff  sp: 00007fff1ce3f178
  ip: 00007f57a6925fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021020.631048:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x559813502b0c base::debug::StackTrace::StackTrace()
#1 0x55981351b780 logging::LogMessage::~LogMessage()
#2 0x5598125ab2b1 content::ZygoteHostImpl::Init()
#3 0x55981221dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x559812223a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55981734d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55981323da00 content::RunNamedProcessTypeMain()
#7 0x55981323e2e8 content::ContentMainRunnerImpl::Run()
#8 0x559813247f24 service_manager::Main()
#9 0x55981323cf14 content::ContentMain()
#10 0x55981734c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55981734ca42 headless::HeadlessBrowserMain()
#12 0x559813244f9d headless::HeadlessShellMain()
#13 0x5598118a31ac ChromeMain
#14 0x7f57a69132e1 __libc_start_main
#15 0x5598118a302a _start

Received signal 6
#0 0x559813502b0c base::debug::StackTrace::StackTrace()
#1 0x559813502671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f57ac8700c0 <unknown>
#3 0x7f57a6925fff gsignal
#4 0x7f57a692742a abort
#5 0x559813501105 base::debug::BreakDebugger()
#6 0x55981351bbca logging::LogMessage::~LogMessage()
#7 0x5598125ab2b1 content::ZygoteHostImpl::Init()
#8 0x55981221dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x559812223a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55981734d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55981323da00 content::RunNamedProcessTypeMain()
#12 0x55981323e2e8 content::ContentMainRunnerImpl::Run()
#13 0x559813247f24 service_manager::Main()
#14 0x55981323cf14 content::ContentMain()
#15 0x55981734c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55981734ca42 headless::HeadlessBrowserMain()
#17 0x559813244f9d headless::HeadlessShellMain()
#18 0x5598118a31ac ChromeMain
#19 0x7f57a69132e1 __libc_start_main
#20 0x5598118a302a _start
  r8: 0000000000000000  r9: 00007fff1ce3f100 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff1ce3f7f8 r13: 0000000000000161 r14: 00007fff1ce3f800 r15: 00007fff1ce3f399
  di: 0000000000000002  si: 00007fff1ce3f100  bp: 00007fff1ce3f340  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f57a6925fff  sp: 00007fff1ce3f178
  ip: 00007f57a6925fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
     * [`https://w3c.github.io/dom/`](https://w3c.github.io/dom/)
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
- [HTML Standard](https://html.spec.whatwg.org/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [Web Animations](https://w3c.github.io/web-animations/)

Informative references to this spec from:

- [Clipboard API and events](https://w3c.github.io/clipboard-apis/)
- [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)
- [CSS Transitions](https://drafts.csswg.org/css-transitions/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/)
- [HTML Standard](https://html.spec.whatwg.org/)
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
[0510/021020.642906:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5595108cbb0c base::debug::StackTrace::StackTrace()
#1 0x5595108e4780 logging::LogMessage::~LogMessage()
#2 0x55950f9742b1 content::ZygoteHostImpl::Init()
#3 0x55950f5e6c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55950f5eca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5595147169a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x559510606a00 content::RunNamedProcessTypeMain()
#7 0x5595106072e8 content::ContentMainRunnerImpl::Run()
#8 0x559510610f24 service_manager::Main()
#9 0x559510605f14 content::ContentMain()
#10 0x5595147159b9 headless::(anonymous namespace)::RunContentMain()
#11 0x559514715a42 headless::HeadlessBrowserMain()
#12 0x55951060df9d headless::HeadlessShellMain()
#13 0x55950ec6c1ac ChromeMain
#14 0x7fcb603682e1 __libc_start_main
#15 0x55950ec6c02a _start

Received signal 6
#0 0x5595108cbb0c base::debug::StackTrace::StackTrace()
#1 0x5595108cb671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fcb662c50c0 <unknown>
#3 0x7fcb6037afff gsignal
#4 0x7fcb6037c42a abort
#5 0x5595108ca105 base::debug::BreakDebugger()
#6 0x5595108e4bca logging::LogMessage::~LogMessage()
#7 0x55950f9742b1 content::ZygoteHostImpl::Init()
#8 0x55950f5e6c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55950f5eca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5595147169a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x559510606a00 content::RunNamedProcessTypeMain()
#12 0x5595106072e8 content::ContentMainRunnerImpl::Run()
#13 0x559510610f24 service_manager::Main()
#14 0x559510605f14 content::ContentMain()
#15 0x5595147159b9 headless::(anonymous namespace)::RunContentMain()
#16 0x559514715a42 headless::HeadlessBrowserMain()
#17 0x55951060df9d headless::HeadlessShellMain()
#18 0x55950ec6c1ac ChromeMain
#19 0x7fcb603682e1 __libc_start_main
#20 0x55950ec6c02a _start
  r8: 0000000000000000  r9: 00007ffdd225c440 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdd225cb38 r13: 0000000000000161 r14: 00007ffdd225cb40 r15: 00007ffdd225c6d9
  di: 0000000000000002  si: 00007ffdd225c440  bp: 00007ffdd225c680  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fcb6037afff  sp: 00007ffdd225c4b8
  ip: 00007fcb6037afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021020.642906:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5595108cbb0c base::debug::StackTrace::StackTrace()
#1 0x5595108e4780 logging::LogMessage::~LogMessage()
#2 0x55950f9742b1 content::ZygoteHostImpl::Init()
#3 0x55950f5e6c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55950f5eca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5595147169a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x559510606a00 content::RunNamedProcessTypeMain()
#7 0x5595106072e8 content::ContentMainRunnerImpl::Run()
#8 0x559510610f24 service_manager::Main()
#9 0x559510605f14 content::ContentMain()
#10 0x5595147159b9 headless::(anonymous namespace)::RunContentMain()
#11 0x559514715a42 headless::HeadlessBrowserMain()
#12 0x55951060df9d headless::HeadlessShellMain()
#13 0x55950ec6c1ac ChromeMain
#14 0x7fcb603682e1 __libc_start_main
#15 0x55950ec6c02a _start

Received signal 6
#0 0x5595108cbb0c base::debug::StackTrace::StackTrace()
#1 0x5595108cb671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fcb662c50c0 <unknown>
#3 0x7fcb6037afff gsignal
#4 0x7fcb6037c42a abort
#5 0x5595108ca105 base::debug::BreakDebugger()
#6 0x5595108e4bca logging::LogMessage::~LogMessage()
#7 0x55950f9742b1 content::ZygoteHostImpl::Init()
#8 0x55950f5e6c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55950f5eca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5595147169a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x559510606a00 content::RunNamedProcessTypeMain()
#12 0x5595106072e8 content::ContentMainRunnerImpl::Run()
#13 0x559510610f24 service_manager::Main()
#14 0x559510605f14 content::ContentMain()
#15 0x5595147159b9 headless::(anonymous namespace)::RunContentMain()
#16 0x559514715a42 headless::HeadlessBrowserMain()
#17 0x55951060df9d headless::HeadlessShellMain()
#18 0x55950ec6c1ac ChromeMain
#19 0x7fcb603682e1 __libc_start_main
#20 0x55950ec6c02a _start
  r8: 0000000000000000  r9: 00007ffdd225c440 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdd225cb38 r13: 0000000000000161 r14: 00007ffdd225cb40 r15: 00007ffdd225c6d9
  di: 0000000000000002  si: 00007ffdd225c440  bp: 00007ffdd225c680  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fcb6037afff  sp: 00007ffdd225c4b8
  ip: 00007fcb6037afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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


## Secure Contexts {data-spec=true data-anomaly=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webappsec-secure-contexts/) (19 January 2018)
- Editor's Draft: [https://w3c.github.io/webappsec-secure-contexts/](https://w3c.github.io/webappsec-secure-contexts/)
- Latest published version: [https://www.w3.org/TR/secure-contexts/](https://www.w3.org/TR/secure-contexts/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2016/CR-secure-contexts-20160915/)
- Repository: [GitHub w3c/webappsec-secure-contexts](https://github.com/w3c/webappsec-secure-contexts)
- Shortname: secure-contexts

### Potential issue(s) {.anomalies}

- Inconsistent references for links: 
     * [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/), related reference "MIX" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/)
- [DeviceOrientation Event Specification](https://w3c.github.io/deviceorientation/spec-source-orientation.html)
- [Generic Sensor API](https://w3c.github.io/sensors/)
- [HTML Standard](https://html.spec.whatwg.org/)
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
[0510/021021.356153:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x563a95150b0c base::debug::StackTrace::StackTrace()
#1 0x563a95169780 logging::LogMessage::~LogMessage()
#2 0x563a941f92b1 content::ZygoteHostImpl::Init()
#3 0x563a93e6bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x563a93e71a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x563a98f9b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563a94e8ba00 content::RunNamedProcessTypeMain()
#7 0x563a94e8c2e8 content::ContentMainRunnerImpl::Run()
#8 0x563a94e95f24 service_manager::Main()
#9 0x563a94e8af14 content::ContentMain()
#10 0x563a98f9a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563a98f9aa42 headless::HeadlessBrowserMain()
#12 0x563a94e92f9d headless::HeadlessShellMain()
#13 0x563a934f11ac ChromeMain
#14 0x7fc2debd42e1 __libc_start_main
#15 0x563a934f102a _start

Received signal 6
#0 0x563a95150b0c base::debug::StackTrace::StackTrace()
#1 0x563a95150671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc2e4b310c0 <unknown>
#3 0x7fc2debe6fff gsignal
#4 0x7fc2debe842a abort
#5 0x563a9514f105 base::debug::BreakDebugger()
#6 0x563a95169bca logging::LogMessage::~LogMessage()
#7 0x563a941f92b1 content::ZygoteHostImpl::Init()
#8 0x563a93e6bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x563a93e71a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x563a98f9b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563a94e8ba00 content::RunNamedProcessTypeMain()
#12 0x563a94e8c2e8 content::ContentMainRunnerImpl::Run()
#13 0x563a94e95f24 service_manager::Main()
#14 0x563a94e8af14 content::ContentMain()
#15 0x563a98f9a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563a98f9aa42 headless::HeadlessBrowserMain()
#17 0x563a94e92f9d headless::HeadlessShellMain()
#18 0x563a934f11ac ChromeMain
#19 0x7fc2debd42e1 __libc_start_main
#20 0x563a934f102a _start
  r8: 0000000000000000  r9: 00007ffc2e15e4e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc2e15ebd8 r13: 0000000000000161 r14: 00007ffc2e15ebe0 r15: 00007ffc2e15e779
  di: 0000000000000002  si: 00007ffc2e15e4e0  bp: 00007ffc2e15e720  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc2debe6fff  sp: 00007ffc2e15e558
  ip: 00007fc2debe6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021021.356153:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x563a95150b0c base::debug::StackTrace::StackTrace()
#1 0x563a95169780 logging::LogMessage::~LogMessage()
#2 0x563a941f92b1 content::ZygoteHostImpl::Init()
#3 0x563a93e6bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x563a93e71a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x563a98f9b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563a94e8ba00 content::RunNamedProcessTypeMain()
#7 0x563a94e8c2e8 content::ContentMainRunnerImpl::Run()
#8 0x563a94e95f24 service_manager::Main()
#9 0x563a94e8af14 content::ContentMain()
#10 0x563a98f9a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563a98f9aa42 headless::HeadlessBrowserMain()
#12 0x563a94e92f9d headless::HeadlessShellMain()
#13 0x563a934f11ac ChromeMain
#14 0x7fc2debd42e1 __libc_start_main
#15 0x563a934f102a _start

Received signal 6
#0 0x563a95150b0c base::debug::StackTrace::StackTrace()
#1 0x563a95150671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc2e4b310c0 <unknown>
#3 0x7fc2debe6fff gsignal
#4 0x7fc2debe842a abort
#5 0x563a9514f105 base::debug::BreakDebugger()
#6 0x563a95169bca logging::LogMessage::~LogMessage()
#7 0x563a941f92b1 content::ZygoteHostImpl::Init()
#8 0x563a93e6bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x563a93e71a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x563a98f9b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563a94e8ba00 content::RunNamedProcessTypeMain()
#12 0x563a94e8c2e8 content::ContentMainRunnerImpl::Run()
#13 0x563a94e95f24 service_manager::Main()
#14 0x563a94e8af14 content::ContentMain()
#15 0x563a98f9a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563a98f9aa42 headless::HeadlessBrowserMain()
#17 0x563a94e92f9d headless::HeadlessShellMain()
#18 0x563a934f11ac ChromeMain
#19 0x7fc2debd42e1 __libc_start_main
#20 0x563a934f102a _start
  r8: 0000000000000000  r9: 00007ffc2e15e4e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc2e15ebd8 r13: 0000000000000161 r14: 00007ffc2e15ebe0 r15: 00007ffc2e15e779
  di: 0000000000000002  si: 00007ffc2e15e4e0  bp: 00007ffc2e15e720  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc2debe6fff  sp: 00007ffc2e15e558
  ip: 00007fc2debe6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- [HTML Standard](https://html.spec.whatwg.org/)

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
[0510/021021.322722:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5605d509ab0c base::debug::StackTrace::StackTrace()
#1 0x5605d50b3780 logging::LogMessage::~LogMessage()
#2 0x5605d41432b1 content::ZygoteHostImpl::Init()
#3 0x5605d3db5c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5605d3dbba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5605d8ee59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5605d4dd5a00 content::RunNamedProcessTypeMain()
#7 0x5605d4dd62e8 content::ContentMainRunnerImpl::Run()
#8 0x5605d4ddff24 service_manager::Main()
#9 0x5605d4dd4f14 content::ContentMain()
#10 0x5605d8ee49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5605d8ee4a42 headless::HeadlessBrowserMain()
#12 0x5605d4ddcf9d headless::HeadlessShellMain()
#13 0x5605d343b1ac ChromeMain
#14 0x7fc87c49b2e1 __libc_start_main
#15 0x5605d343b02a _start

Received signal 6
#0 0x5605d509ab0c base::debug::StackTrace::StackTrace()
#1 0x5605d509a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc8823f80c0 <unknown>
#3 0x7fc87c4adfff gsignal
#4 0x7fc87c4af42a abort
#5 0x5605d5099105 base::debug::BreakDebugger()
#6 0x5605d50b3bca logging::LogMessage::~LogMessage()
#7 0x5605d41432b1 content::ZygoteHostImpl::Init()
#8 0x5605d3db5c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5605d3dbba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5605d8ee59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5605d4dd5a00 content::RunNamedProcessTypeMain()
#12 0x5605d4dd62e8 content::ContentMainRunnerImpl::Run()
#13 0x5605d4ddff24 service_manager::Main()
#14 0x5605d4dd4f14 content::ContentMain()
#15 0x5605d8ee49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5605d8ee4a42 headless::HeadlessBrowserMain()
#17 0x5605d4ddcf9d headless::HeadlessShellMain()
#18 0x5605d343b1ac ChromeMain
#19 0x7fc87c49b2e1 __libc_start_main
#20 0x5605d343b02a _start
  r8: 0000000000000000  r9: 00007ffe1c2c66e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe1c2c6dd8 r13: 0000000000000161 r14: 00007ffe1c2c6de0 r15: 00007ffe1c2c6979
  di: 0000000000000002  si: 00007ffe1c2c66e0  bp: 00007ffe1c2c6920  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc87c4adfff  sp: 00007ffe1c2c6758
  ip: 00007fc87c4adfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021021.322722:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5605d509ab0c base::debug::StackTrace::StackTrace()
#1 0x5605d50b3780 logging::LogMessage::~LogMessage()
#2 0x5605d41432b1 content::ZygoteHostImpl::Init()
#3 0x5605d3db5c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5605d3dbba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5605d8ee59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5605d4dd5a00 content::RunNamedProcessTypeMain()
#7 0x5605d4dd62e8 content::ContentMainRunnerImpl::Run()
#8 0x5605d4ddff24 service_manager::Main()
#9 0x5605d4dd4f14 content::ContentMain()
#10 0x5605d8ee49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5605d8ee4a42 headless::HeadlessBrowserMain()
#12 0x5605d4ddcf9d headless::HeadlessShellMain()
#13 0x5605d343b1ac ChromeMain
#14 0x7fc87c49b2e1 __libc_start_main
#15 0x5605d343b02a _start

Received signal 6
#0 0x5605d509ab0c base::debug::StackTrace::StackTrace()
#1 0x5605d509a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc8823f80c0 <unknown>
#3 0x7fc87c4adfff gsignal
#4 0x7fc87c4af42a abort
#5 0x5605d5099105 base::debug::BreakDebugger()
#6 0x5605d50b3bca logging::LogMessage::~LogMessage()
#7 0x5605d41432b1 content::ZygoteHostImpl::Init()
#8 0x5605d3db5c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5605d3dbba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5605d8ee59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5605d4dd5a00 content::RunNamedProcessTypeMain()
#12 0x5605d4dd62e8 content::ContentMainRunnerImpl::Run()
#13 0x5605d4ddff24 service_manager::Main()
#14 0x5605d4dd4f14 content::ContentMain()
#15 0x5605d8ee49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5605d8ee4a42 headless::HeadlessBrowserMain()
#17 0x5605d4ddcf9d headless::HeadlessShellMain()
#18 0x5605d343b1ac ChromeMain
#19 0x7fc87c49b2e1 __libc_start_main
#20 0x5605d343b02a _start
  r8: 0000000000000000  r9: 00007ffe1c2c66e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe1c2c6dd8 r13: 0000000000000161 r14: 00007ffe1c2c6de0 r15: 00007ffe1c2c6979
  di: 0000000000000002  si: 00007ffe1c2c66e0  bp: 00007ffe1c2c6920  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc87c4adfff  sp: 00007ffe1c2c6758
  ip: 00007fc87c4adfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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


## Service Workers 1 {data-spec=true data-anomaly=true data-unknownIdlNames=true data-redefinedIdlNames=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/ServiceWorker/v1/) (24 April 2018)
- Editor's Draft: [https://w3c.github.io/ServiceWorker/v1/](https://w3c.github.io/ServiceWorker/v1/)
- Latest published version: [https://www.w3.org/TR/service-workers-1/](https://www.w3.org/TR/service-workers-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-service-workers-1-20171102/)
- Repository: [GitHub w3c/ServiceWorker](https://github.com/w3c/ServiceWorker)
- Shortname: service-workers-1

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `VisibilityState`
- WebIDL names also defined elsewhere: 
    * `Worker` also defined in [HTML Standard](https://html.spec.whatwg.org/)
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
- [DOM Standard](https://dom.spec.whatwg.org/)
- [HTML Standard](https://html.spec.whatwg.org/)
- [Notifications API Standard](https://notifications.spec.whatwg.org/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Console Standard](https://console.spec.whatwg.org/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- [Encoding Standard](https://encoding.spec.whatwg.org/)

Informative references to this spec from:

- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)
- [Streams Standard](https://streams.spec.whatwg.org/)


## Static Range {data-spec=true data-anomaly=true data-redefinedIdlNames=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://w3c.github.io/staticrange/) (14 December 2017)
- Repository: [GitHub w3c/staticrange](https://github.com/w3c/staticrange)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- WebIDL names also defined elsewhere: 
    * `StaticRange` also defined in [DOM Standard](https://dom.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Storage Standard {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://storage.spec.whatwg.org/) (9 January 2018)
- Repository: [GitHub whatwg/storage](https://github.com/whatwg/storage)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

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


## Subresource Integrity {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webappsec-subresource-integrity/) (26 August 2016)
- Editor's Draft: [https://w3c.github.io/webappsec-subresource-integrity/](https://w3c.github.io/webappsec-subresource-integrity/)
- Latest published version: [http://www.w3.org/TR/SRI/](http://www.w3.org/TR/SRI/)
- Latest published status: [Recommendation](http://www.w3.org/TR/2016/REC-SRI-20160623/)
- Repository: [GitHub w3c/webappsec-subresource-integrity](https://github.com/w3c/webappsec-subresource-integrity)
- Shortname: SRI

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Missing references for links: 
     * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/)
- Inconsistent references for links: 
     * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/), related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [HTML Standard](https://html.spec.whatwg.org/)

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
[0510/021020.736234:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556466f36b0c base::debug::StackTrace::StackTrace()
#1 0x556466f4f780 logging::LogMessage::~LogMessage()
#2 0x556465fdf2b1 content::ZygoteHostImpl::Init()
#3 0x556465c51c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556465c57a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55646ad819a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556466c71a00 content::RunNamedProcessTypeMain()
#7 0x556466c722e8 content::ContentMainRunnerImpl::Run()
#8 0x556466c7bf24 service_manager::Main()
#9 0x556466c70f14 content::ContentMain()
#10 0x55646ad809b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55646ad80a42 headless::HeadlessBrowserMain()
#12 0x556466c78f9d headless::HeadlessShellMain()
#13 0x5564652d71ac ChromeMain
#14 0x7fa8e34932e1 __libc_start_main
#15 0x5564652d702a _start

Received signal 6
#0 0x556466f36b0c base::debug::StackTrace::StackTrace()
#1 0x556466f36671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fa8e93f00c0 <unknown>
#3 0x7fa8e34a5fff gsignal
#4 0x7fa8e34a742a abort
#5 0x556466f35105 base::debug::BreakDebugger()
#6 0x556466f4fbca logging::LogMessage::~LogMessage()
#7 0x556465fdf2b1 content::ZygoteHostImpl::Init()
#8 0x556465c51c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556465c57a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55646ad819a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556466c71a00 content::RunNamedProcessTypeMain()
#12 0x556466c722e8 content::ContentMainRunnerImpl::Run()
#13 0x556466c7bf24 service_manager::Main()
#14 0x556466c70f14 content::ContentMain()
#15 0x55646ad809b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55646ad80a42 headless::HeadlessBrowserMain()
#17 0x556466c78f9d headless::HeadlessShellMain()
#18 0x5564652d71ac ChromeMain
#19 0x7fa8e34932e1 __libc_start_main
#20 0x5564652d702a _start
  r8: 0000000000000000  r9: 00007fffdb535620 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffdb535d18 r13: 0000000000000161 r14: 00007fffdb535d20 r15: 00007fffdb5358b9
  di: 0000000000000002  si: 00007fffdb535620  bp: 00007fffdb535860  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fa8e34a5fff  sp: 00007fffdb535698
  ip: 00007fa8e34a5fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021020.736234:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556466f36b0c base::debug::StackTrace::StackTrace()
#1 0x556466f4f780 logging::LogMessage::~LogMessage()
#2 0x556465fdf2b1 content::ZygoteHostImpl::Init()
#3 0x556465c51c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556465c57a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55646ad819a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556466c71a00 content::RunNamedProcessTypeMain()
#7 0x556466c722e8 content::ContentMainRunnerImpl::Run()
#8 0x556466c7bf24 service_manager::Main()
#9 0x556466c70f14 content::ContentMain()
#10 0x55646ad809b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55646ad80a42 headless::HeadlessBrowserMain()
#12 0x556466c78f9d headless::HeadlessShellMain()
#13 0x5564652d71ac ChromeMain
#14 0x7fa8e34932e1 __libc_start_main
#15 0x5564652d702a _start

Received signal 6
#0 0x556466f36b0c base::debug::StackTrace::StackTrace()
#1 0x556466f36671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fa8e93f00c0 <unknown>
#3 0x7fa8e34a5fff gsignal
#4 0x7fa8e34a742a abort
#5 0x556466f35105 base::debug::BreakDebugger()
#6 0x556466f4fbca logging::LogMessage::~LogMessage()
#7 0x556465fdf2b1 content::ZygoteHostImpl::Init()
#8 0x556465c51c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556465c57a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55646ad819a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556466c71a00 content::RunNamedProcessTypeMain()
#12 0x556466c722e8 content::ContentMainRunnerImpl::Run()
#13 0x556466c7bf24 service_manager::Main()
#14 0x556466c70f14 content::ContentMain()
#15 0x55646ad809b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55646ad80a42 headless::HeadlessBrowserMain()
#17 0x556466c78f9d headless::HeadlessShellMain()
#18 0x5564652d71ac ChromeMain
#19 0x7fa8e34932e1 __libc_start_main
#20 0x5564652d702a _start
  r8: 0000000000000000  r9: 00007fffdb535620 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffdb535d18 r13: 0000000000000161 r14: 00007fffdb535d20 r15: 00007fffdb5358b9
  di: 0000000000000002  si: 00007fffdb535620  bp: 00007fffdb535860  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fa8e34a5fff  sp: 00007fffdb535698
  ip: 00007fa8e34a5fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
- [HTML Standard](https://html.spec.whatwg.org/)

No informative reference to this spec from other specs.


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
[0510/021021.335018:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556772e19b0c base::debug::StackTrace::StackTrace()
#1 0x556772e32780 logging::LogMessage::~LogMessage()
#2 0x556771ec22b1 content::ZygoteHostImpl::Init()
#3 0x556771b34c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556771b3aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556776c649a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556772b54a00 content::RunNamedProcessTypeMain()
#7 0x556772b552e8 content::ContentMainRunnerImpl::Run()
#8 0x556772b5ef24 service_manager::Main()
#9 0x556772b53f14 content::ContentMain()
#10 0x556776c639b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556776c63a42 headless::HeadlessBrowserMain()
#12 0x556772b5bf9d headless::HeadlessShellMain()
#13 0x5567711ba1ac ChromeMain
#14 0x7f792a8112e1 __libc_start_main
#15 0x5567711ba02a _start

Received signal 6
#0 0x556772e19b0c base::debug::StackTrace::StackTrace()
#1 0x556772e19671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f793076e0c0 <unknown>
#3 0x7f792a823fff gsignal
#4 0x7f792a82542a abort
#5 0x556772e18105 base::debug::BreakDebugger()
#6 0x556772e32bca logging::LogMessage::~LogMessage()
#7 0x556771ec22b1 content::ZygoteHostImpl::Init()
#8 0x556771b34c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556771b3aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556776c649a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556772b54a00 content::RunNamedProcessTypeMain()
#12 0x556772b552e8 content::ContentMainRunnerImpl::Run()
#13 0x556772b5ef24 service_manager::Main()
#14 0x556772b53f14 content::ContentMain()
#15 0x556776c639b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556776c63a42 headless::HeadlessBrowserMain()
#17 0x556772b5bf9d headless::HeadlessShellMain()
#18 0x5567711ba1ac ChromeMain
#19 0x7f792a8112e1 __libc_start_main
#20 0x5567711ba02a _start
  r8: 0000000000000000  r9: 00007ffc1a1f9830 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc1a1f9f28 r13: 0000000000000161 r14: 00007ffc1a1f9f30 r15: 00007ffc1a1f9ac9
  di: 0000000000000002  si: 00007ffc1a1f9830  bp: 00007ffc1a1f9a70  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f792a823fff  sp: 00007ffc1a1f98a8
  ip: 00007f792a823fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021021.335018:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556772e19b0c base::debug::StackTrace::StackTrace()
#1 0x556772e32780 logging::LogMessage::~LogMessage()
#2 0x556771ec22b1 content::ZygoteHostImpl::Init()
#3 0x556771b34c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556771b3aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556776c649a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556772b54a00 content::RunNamedProcessTypeMain()
#7 0x556772b552e8 content::ContentMainRunnerImpl::Run()
#8 0x556772b5ef24 service_manager::Main()
#9 0x556772b53f14 content::ContentMain()
#10 0x556776c639b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556776c63a42 headless::HeadlessBrowserMain()
#12 0x556772b5bf9d headless::HeadlessShellMain()
#13 0x5567711ba1ac ChromeMain
#14 0x7f792a8112e1 __libc_start_main
#15 0x5567711ba02a _start

Received signal 6
#0 0x556772e19b0c base::debug::StackTrace::StackTrace()
#1 0x556772e19671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f793076e0c0 <unknown>
#3 0x7f792a823fff gsignal
#4 0x7f792a82542a abort
#5 0x556772e18105 base::debug::BreakDebugger()
#6 0x556772e32bca logging::LogMessage::~LogMessage()
#7 0x556771ec22b1 content::ZygoteHostImpl::Init()
#8 0x556771b34c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556771b3aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556776c649a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556772b54a00 content::RunNamedProcessTypeMain()
#12 0x556772b552e8 content::ContentMainRunnerImpl::Run()
#13 0x556772b5ef24 service_manager::Main()
#14 0x556772b53f14 content::ContentMain()
#15 0x556776c639b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556776c63a42 headless::HeadlessBrowserMain()
#17 0x556772b5bf9d headless::HeadlessShellMain()
#18 0x5567711ba1ac ChromeMain
#19 0x7f792a8112e1 __libc_start_main
#20 0x5567711ba02a _start
  r8: 0000000000000000  r9: 00007ffc1a1f9830 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc1a1f9f28 r13: 0000000000000161 r14: 00007ffc1a1f9f30 r15: 00007ffc1a1f9ac9
  di: 0000000000000002  si: 00007ffc1a1f9830  bp: 00007ffc1a1f9a70  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f792a823fff  sp: 00007ffc1a1f98a8
  ip: 00007f792a823fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- [DOM Standard](https://dom.spec.whatwg.org/)
- [HTML Standard](https://html.spec.whatwg.org/)

No informative reference to this spec from other specs.


## UI Events {data-spec=true data-anomaly=true data-noRefToWebIDL=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Latest published version](https://www.w3.org/TR/2016/WD-uievents-20160804/) (04 August 2016)
- Editor's Draft: [https://w3c.github.io/uievents/](https://w3c.github.io/uievents/)
- Latest published version: [https://www.w3.org/TR/uievents/](https://www.w3.org/TR/uievents/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- Repository: [GitHub w3c/uievents](https://github.com/w3c/uievents)
- Shortname: uievents

### Potential issue(s) {.anomalies}

- Spec uses WebIDL but does not reference it normatively
- Missing references for links: 
     * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/)
     * [`https://www.w3.org/TR/2004/REC-xml-20040204/`](https://www.w3.org/TR/2004/REC-xml-20040204/)
- Inconsistent references for links: 
     * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/), related reference "DOM-Level-3-Core" uses URL [`http://www.w3.org/TR/DOM-Level-3-Core/`](http://www.w3.org/TR/DOM-Level-3-Core/)
     * [`https://www.w3.org/TR/css-syntax-3/`](https://www.w3.org/TR/css-syntax-3/), related reference "CSS-SYNTAX-3" uses URL [`http://dev.w3.org/csswg/css-syntax/`](http://dev.w3.org/csswg/css-syntax/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [DOM Standard](https://dom.spec.whatwg.org/)
- [HTML Standard](https://html.spec.whatwg.org/)
- [Keyboard Lock](https://w3c.github.io/keyboard-lock/)
- [Permissions](https://w3c.github.io/permissions/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/)
- [UI Events KeyboardEvent key Values](https://w3c.github.io/uievents-key/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [CSSOM View Module](https://drafts.csswg.org/cssom-view/)

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


## URL Standard {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://url.spec.whatwg.org/) (8 May 2018)
- Repository: [GitHub whatwg/url](https://github.com/whatwg/url)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

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
- [DOM Standard](https://dom.spec.whatwg.org/)
- [Feature Policy](https://wicg.github.io/feature-policy/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File API](https://w3c.github.io/FileAPI/)
- [HTML Standard](https://html.spec.whatwg.org/)
- [Media Session Standard](https://wicg.github.io/mediasession/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)
- [Notifications API Standard](https://notifications.spec.whatwg.org/)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- [Storage Standard](https://storage.spec.whatwg.org/)
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
[0510/021025.876322:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55dd76bb5b0c base::debug::StackTrace::StackTrace()
#1 0x55dd76bce780 logging::LogMessage::~LogMessage()
#2 0x55dd75c5e2b1 content::ZygoteHostImpl::Init()
#3 0x55dd758d0c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55dd758d6a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55dd7aa009a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55dd768f0a00 content::RunNamedProcessTypeMain()
#7 0x55dd768f12e8 content::ContentMainRunnerImpl::Run()
#8 0x55dd768faf24 service_manager::Main()
#9 0x55dd768eff14 content::ContentMain()
#10 0x55dd7a9ff9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55dd7a9ffa42 headless::HeadlessBrowserMain()
#12 0x55dd768f7f9d headless::HeadlessShellMain()
#13 0x55dd74f561ac ChromeMain
#14 0x7f4865c9e2e1 __libc_start_main
#15 0x55dd74f5602a _start

Received signal 6
#0 0x55dd76bb5b0c base::debug::StackTrace::StackTrace()
#1 0x55dd76bb5671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f486bbfb0c0 <unknown>
#3 0x7f4865cb0fff gsignal
#4 0x7f4865cb242a abort
#5 0x55dd76bb4105 base::debug::BreakDebugger()
#6 0x55dd76bcebca logging::LogMessage::~LogMessage()
#7 0x55dd75c5e2b1 content::ZygoteHostImpl::Init()
#8 0x55dd758d0c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55dd758d6a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55dd7aa009a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55dd768f0a00 content::RunNamedProcessTypeMain()
#12 0x55dd768f12e8 content::ContentMainRunnerImpl::Run()
#13 0x55dd768faf24 service_manager::Main()
#14 0x55dd768eff14 content::ContentMain()
#15 0x55dd7a9ff9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55dd7a9ffa42 headless::HeadlessBrowserMain()
#17 0x55dd768f7f9d headless::HeadlessShellMain()
#18 0x55dd74f561ac ChromeMain
#19 0x7f4865c9e2e1 __libc_start_main
#20 0x55dd74f5602a _start
  r8: 0000000000000000  r9: 00007ffd3f244f80 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd3f245678 r13: 0000000000000161 r14: 00007ffd3f245680 r15: 00007ffd3f245219
  di: 0000000000000002  si: 00007ffd3f244f80  bp: 00007ffd3f2451c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f4865cb0fff  sp: 00007ffd3f244ff8
  ip: 00007f4865cb0fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021025.876322:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55dd76bb5b0c base::debug::StackTrace::StackTrace()
#1 0x55dd76bce780 logging::LogMessage::~LogMessage()
#2 0x55dd75c5e2b1 content::ZygoteHostImpl::Init()
#3 0x55dd758d0c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55dd758d6a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55dd7aa009a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55dd768f0a00 content::RunNamedProcessTypeMain()
#7 0x55dd768f12e8 content::ContentMainRunnerImpl::Run()
#8 0x55dd768faf24 service_manager::Main()
#9 0x55dd768eff14 content::ContentMain()
#10 0x55dd7a9ff9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55dd7a9ffa42 headless::HeadlessBrowserMain()
#12 0x55dd768f7f9d headless::HeadlessShellMain()
#13 0x55dd74f561ac ChromeMain
#14 0x7f4865c9e2e1 __libc_start_main
#15 0x55dd74f5602a _start

Received signal 6
#0 0x55dd76bb5b0c base::debug::StackTrace::StackTrace()
#1 0x55dd76bb5671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f486bbfb0c0 <unknown>
#3 0x7f4865cb0fff gsignal
#4 0x7f4865cb242a abort
#5 0x55dd76bb4105 base::debug::BreakDebugger()
#6 0x55dd76bcebca logging::LogMessage::~LogMessage()
#7 0x55dd75c5e2b1 content::ZygoteHostImpl::Init()
#8 0x55dd758d0c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55dd758d6a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55dd7aa009a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55dd768f0a00 content::RunNamedProcessTypeMain()
#12 0x55dd768f12e8 content::ContentMainRunnerImpl::Run()
#13 0x55dd768faf24 service_manager::Main()
#14 0x55dd768eff14 content::ContentMain()
#15 0x55dd7a9ff9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55dd7a9ffa42 headless::HeadlessBrowserMain()
#17 0x55dd768f7f9d headless::HeadlessShellMain()
#18 0x55dd74f561ac ChromeMain
#19 0x7f4865c9e2e1 __libc_start_main
#20 0x55dd74f5602a _start
  r8: 0000000000000000  r9: 00007ffd3f244f80 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd3f245678 r13: 0000000000000161 r14: 00007ffd3f245680 r15: 00007ffd3f245219
  di: 0000000000000002  si: 00007ffd3f244f80  bp: 00007ffd3f2451c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f4865cb0fff  sp: 00007ffd3f244ff8
  ip: 00007f4865cb0fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/021025.896870:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x555d3ce26b0c base::debug::StackTrace::StackTrace()
#1 0x555d3ce3f780 logging::LogMessage::~LogMessage()
#2 0x555d3becf2b1 content::ZygoteHostImpl::Init()
#3 0x555d3bb41c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x555d3bb47a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x555d40c719a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x555d3cb61a00 content::RunNamedProcessTypeMain()
#7 0x555d3cb622e8 content::ContentMainRunnerImpl::Run()
#8 0x555d3cb6bf24 service_manager::Main()
#9 0x555d3cb60f14 content::ContentMain()
#10 0x555d40c709b9 headless::(anonymous namespace)::RunContentMain()
#11 0x555d40c70a42 headless::HeadlessBrowserMain()
#12 0x555d3cb68f9d headless::HeadlessShellMain()
#13 0x555d3b1c71ac ChromeMain
#14 0x7f55c318b2e1 __libc_start_main
#15 0x555d3b1c702a _start

Received signal 6
#0 0x555d3ce26b0c base::debug::StackTrace::StackTrace()
#1 0x555d3ce26671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f55c90e80c0 <unknown>
#3 0x7f55c319dfff gsignal
#4 0x7f55c319f42a abort
#5 0x555d3ce25105 base::debug::BreakDebugger()
#6 0x555d3ce3fbca logging::LogMessage::~LogMessage()
#7 0x555d3becf2b1 content::ZygoteHostImpl::Init()
#8 0x555d3bb41c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x555d3bb47a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x555d40c719a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x555d3cb61a00 content::RunNamedProcessTypeMain()
#12 0x555d3cb622e8 content::ContentMainRunnerImpl::Run()
#13 0x555d3cb6bf24 service_manager::Main()
#14 0x555d3cb60f14 content::ContentMain()
#15 0x555d40c709b9 headless::(anonymous namespace)::RunContentMain()
#16 0x555d40c70a42 headless::HeadlessBrowserMain()
#17 0x555d3cb68f9d headless::HeadlessShellMain()
#18 0x555d3b1c71ac ChromeMain
#19 0x7f55c318b2e1 __libc_start_main
#20 0x555d3b1c702a _start
  r8: 0000000000000000  r9: 00007ffe27b60a60 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe27b61158 r13: 0000000000000161 r14: 00007ffe27b61160 r15: 00007ffe27b60cf9
  di: 0000000000000002  si: 00007ffe27b60a60  bp: 00007ffe27b60ca0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f55c319dfff  sp: 00007ffe27b60ad8
  ip: 00007f55c319dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021025.896870:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x555d3ce26b0c base::debug::StackTrace::StackTrace()
#1 0x555d3ce3f780 logging::LogMessage::~LogMessage()
#2 0x555d3becf2b1 content::ZygoteHostImpl::Init()
#3 0x555d3bb41c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x555d3bb47a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x555d40c719a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x555d3cb61a00 content::RunNamedProcessTypeMain()
#7 0x555d3cb622e8 content::ContentMainRunnerImpl::Run()
#8 0x555d3cb6bf24 service_manager::Main()
#9 0x555d3cb60f14 content::ContentMain()
#10 0x555d40c709b9 headless::(anonymous namespace)::RunContentMain()
#11 0x555d40c70a42 headless::HeadlessBrowserMain()
#12 0x555d3cb68f9d headless::HeadlessShellMain()
#13 0x555d3b1c71ac ChromeMain
#14 0x7f55c318b2e1 __libc_start_main
#15 0x555d3b1c702a _start

Received signal 6
#0 0x555d3ce26b0c base::debug::StackTrace::StackTrace()
#1 0x555d3ce26671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f55c90e80c0 <unknown>
#3 0x7f55c319dfff gsignal
#4 0x7f55c319f42a abort
#5 0x555d3ce25105 base::debug::BreakDebugger()
#6 0x555d3ce3fbca logging::LogMessage::~LogMessage()
#7 0x555d3becf2b1 content::ZygoteHostImpl::Init()
#8 0x555d3bb41c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x555d3bb47a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x555d40c719a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x555d3cb61a00 content::RunNamedProcessTypeMain()
#12 0x555d3cb622e8 content::ContentMainRunnerImpl::Run()
#13 0x555d3cb6bf24 service_manager::Main()
#14 0x555d3cb60f14 content::ContentMain()
#15 0x555d40c709b9 headless::(anonymous namespace)::RunContentMain()
#16 0x555d40c70a42 headless::HeadlessBrowserMain()
#17 0x555d3cb68f9d headless::HeadlessShellMain()
#18 0x555d3b1c71ac ChromeMain
#19 0x7f55c318b2e1 __libc_start_main
#20 0x555d3b1c702a _start
  r8: 0000000000000000  r9: 00007ffe27b60a60 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe27b61158 r13: 0000000000000161 r14: 00007ffe27b61160 r15: 00007ffe27b60cf9
  di: 0000000000000002  si: 00007ffe27b60a60  bp: 00007ffe27b60ca0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f55c319dfff  sp: 00007ffe27b60ad8
  ip: 00007f55c319dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- [Notifications API Standard](https://notifications.spec.whatwg.org/)

No informative reference to this spec from other specs.


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
[0510/021026.394942:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55862fee9b0c base::debug::StackTrace::StackTrace()
#1 0x55862ff02780 logging::LogMessage::~LogMessage()
#2 0x55862ef922b1 content::ZygoteHostImpl::Init()
#3 0x55862ec04c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55862ec0aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558633d349a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55862fc24a00 content::RunNamedProcessTypeMain()
#7 0x55862fc252e8 content::ContentMainRunnerImpl::Run()
#8 0x55862fc2ef24 service_manager::Main()
#9 0x55862fc23f14 content::ContentMain()
#10 0x558633d339b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558633d33a42 headless::HeadlessBrowserMain()
#12 0x55862fc2bf9d headless::HeadlessShellMain()
#13 0x55862e28a1ac ChromeMain
#14 0x7f32a137a2e1 __libc_start_main
#15 0x55862e28a02a _start

Received signal 6
#0 0x55862fee9b0c base::debug::StackTrace::StackTrace()
#1 0x55862fee9671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f32a72d70c0 <unknown>
#3 0x7f32a138cfff gsignal
#4 0x7f32a138e42a abort
#5 0x55862fee8105 base::debug::BreakDebugger()
#6 0x55862ff02bca logging::LogMessage::~LogMessage()
#7 0x55862ef922b1 content::ZygoteHostImpl::Init()
#8 0x55862ec04c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55862ec0aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558633d349a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55862fc24a00 content::RunNamedProcessTypeMain()
#12 0x55862fc252e8 content::ContentMainRunnerImpl::Run()
#13 0x55862fc2ef24 service_manager::Main()
#14 0x55862fc23f14 content::ContentMain()
#15 0x558633d339b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558633d33a42 headless::HeadlessBrowserMain()
#17 0x55862fc2bf9d headless::HeadlessShellMain()
#18 0x55862e28a1ac ChromeMain
#19 0x7f32a137a2e1 __libc_start_main
#20 0x55862e28a02a _start
  r8: 0000000000000000  r9: 00007ffd91e6e750 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd91e6ee48 r13: 0000000000000161 r14: 00007ffd91e6ee50 r15: 00007ffd91e6e9e9
  di: 0000000000000002  si: 00007ffd91e6e750  bp: 00007ffd91e6e990  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f32a138cfff  sp: 00007ffd91e6e7c8
  ip: 00007f32a138cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021026.394942:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55862fee9b0c base::debug::StackTrace::StackTrace()
#1 0x55862ff02780 logging::LogMessage::~LogMessage()
#2 0x55862ef922b1 content::ZygoteHostImpl::Init()
#3 0x55862ec04c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55862ec0aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558633d349a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55862fc24a00 content::RunNamedProcessTypeMain()
#7 0x55862fc252e8 content::ContentMainRunnerImpl::Run()
#8 0x55862fc2ef24 service_manager::Main()
#9 0x55862fc23f14 content::ContentMain()
#10 0x558633d339b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558633d33a42 headless::HeadlessBrowserMain()
#12 0x55862fc2bf9d headless::HeadlessShellMain()
#13 0x55862e28a1ac ChromeMain
#14 0x7f32a137a2e1 __libc_start_main
#15 0x55862e28a02a _start

Received signal 6
#0 0x55862fee9b0c base::debug::StackTrace::StackTrace()
#1 0x55862fee9671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f32a72d70c0 <unknown>
#3 0x7f32a138cfff gsignal
#4 0x7f32a138e42a abort
#5 0x55862fee8105 base::debug::BreakDebugger()
#6 0x55862ff02bca logging::LogMessage::~LogMessage()
#7 0x55862ef922b1 content::ZygoteHostImpl::Init()
#8 0x55862ec04c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55862ec0aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558633d349a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55862fc24a00 content::RunNamedProcessTypeMain()
#12 0x55862fc252e8 content::ContentMainRunnerImpl::Run()
#13 0x55862fc2ef24 service_manager::Main()
#14 0x55862fc23f14 content::ContentMain()
#15 0x558633d339b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558633d33a42 headless::HeadlessBrowserMain()
#17 0x55862fc2bf9d headless::HeadlessShellMain()
#18 0x55862e28a1ac ChromeMain
#19 0x7f32a137a2e1 __libc_start_main
#20 0x55862e28a02a _start
  r8: 0000000000000000  r9: 00007ffd91e6e750 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd91e6ee48 r13: 0000000000000161 r14: 00007ffd91e6ee50 r15: 00007ffd91e6e9e9
  di: 0000000000000002  si: 00007ffd91e6e750  bp: 00007ffd91e6e990  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f32a138cfff  sp: 00007ffd91e6e7c8
  ip: 00007f32a138cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- Unknown WebIDL names used: `DOMHighResTimeStamp`
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
[0510/020931.826041:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558e1f416b0c base::debug::StackTrace::StackTrace()
#1 0x558e1f42f780 logging::LogMessage::~LogMessage()
#2 0x558e1e4bf2b1 content::ZygoteHostImpl::Init()
#3 0x558e1e131c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558e1e137a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558e232619a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558e1f151a00 content::RunNamedProcessTypeMain()
#7 0x558e1f1522e8 content::ContentMainRunnerImpl::Run()
#8 0x558e1f15bf24 service_manager::Main()
#9 0x558e1f150f14 content::ContentMain()
#10 0x558e232609b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558e23260a42 headless::HeadlessBrowserMain()
#12 0x558e1f158f9d headless::HeadlessShellMain()
#13 0x558e1d7b71ac ChromeMain
#14 0x7ff7dfeba2e1 __libc_start_main
#15 0x558e1d7b702a _start

Received signal 6
#0 0x558e1f416b0c base::debug::StackTrace::StackTrace()
#1 0x558e1f416671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ff7e5e170c0 <unknown>
#3 0x7ff7dfeccfff gsignal
#4 0x7ff7dfece42a abort
#5 0x558e1f415105 base::debug::BreakDebugger()
#6 0x558e1f42fbca logging::LogMessage::~LogMessage()
#7 0x558e1e4bf2b1 content::ZygoteHostImpl::Init()
#8 0x558e1e131c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558e1e137a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558e232619a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558e1f151a00 content::RunNamedProcessTypeMain()
#12 0x558e1f1522e8 content::ContentMainRunnerImpl::Run()
#13 0x558e1f15bf24 service_manager::Main()
#14 0x558e1f150f14 content::ContentMain()
#15 0x558e232609b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558e23260a42 headless::HeadlessBrowserMain()
#17 0x558e1f158f9d headless::HeadlessShellMain()
#18 0x558e1d7b71ac ChromeMain
#19 0x7ff7dfeba2e1 __libc_start_main
#20 0x558e1d7b702a _start
  r8: 0000000000000000  r9: 00007ffe84ecc0d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe84ecc7c8 r13: 0000000000000161 r14: 00007ffe84ecc7d0 r15: 00007ffe84ecc369
  di: 0000000000000002  si: 00007ffe84ecc0d0  bp: 00007ffe84ecc310  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ff7dfeccfff  sp: 00007ffe84ecc148
  ip: 00007ff7dfeccfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020931.826041:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558e1f416b0c base::debug::StackTrace::StackTrace()
#1 0x558e1f42f780 logging::LogMessage::~LogMessage()
#2 0x558e1e4bf2b1 content::ZygoteHostImpl::Init()
#3 0x558e1e131c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558e1e137a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558e232619a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558e1f151a00 content::RunNamedProcessTypeMain()
#7 0x558e1f1522e8 content::ContentMainRunnerImpl::Run()
#8 0x558e1f15bf24 service_manager::Main()
#9 0x558e1f150f14 content::ContentMain()
#10 0x558e232609b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558e23260a42 headless::HeadlessBrowserMain()
#12 0x558e1f158f9d headless::HeadlessShellMain()
#13 0x558e1d7b71ac ChromeMain
#14 0x7ff7dfeba2e1 __libc_start_main
#15 0x558e1d7b702a _start

Received signal 6
#0 0x558e1f416b0c base::debug::StackTrace::StackTrace()
#1 0x558e1f416671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ff7e5e170c0 <unknown>
#3 0x7ff7dfeccfff gsignal
#4 0x7ff7dfece42a abort
#5 0x558e1f415105 base::debug::BreakDebugger()
#6 0x558e1f42fbca logging::LogMessage::~LogMessage()
#7 0x558e1e4bf2b1 content::ZygoteHostImpl::Init()
#8 0x558e1e131c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558e1e137a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558e232619a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558e1f151a00 content::RunNamedProcessTypeMain()
#12 0x558e1f1522e8 content::ContentMainRunnerImpl::Run()
#13 0x558e1f15bf24 service_manager::Main()
#14 0x558e1f150f14 content::ContentMain()
#15 0x558e232609b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558e23260a42 headless::HeadlessBrowserMain()
#17 0x558e1f158f9d headless::HeadlessShellMain()
#18 0x558e1d7b71ac ChromeMain
#19 0x7ff7dfeba2e1 __libc_start_main
#20 0x558e1d7b702a _start
  r8: 0000000000000000  r9: 00007ffe84ecc0d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe84ecc7c8 r13: 0000000000000161 r14: 00007ffe84ecc7d0 r15: 00007ffe84ecc369
  di: 0000000000000002  si: 00007ffe84ecc0d0  bp: 00007ffe84ecc310  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ff7dfeccfff  sp: 00007ffe84ecc148
  ip: 00007ff7dfeccfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- Unknown WebIDL names used: `DOMHighResTimeStamp`, `MediaStream`, `MediaStreamTrack`
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
- [DOM Standard](https://dom.spec.whatwg.org/)
- [HTML Standard](https://html.spec.whatwg.org/)
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/)

Informative references to this spec from:

- [Worklets Level 1](https://drafts.css-houdini.org/worklets/)


## Web Authentication: An API for accessing Public Key Credentials - Level 1 {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webauthn/) (9 May 2018)
- Editor's Draft: [https://w3c.github.io/webauthn/](https://w3c.github.io/webauthn/)
- Latest published version: [https://www.w3.org/TR/webauthn/](https://www.w3.org/TR/webauthn/)
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-webauthn-20180320/)
- Repository: [GitHub w3c/webauthn](https://github.com/w3c/webauthn)
- Shortname: webauthn

### Potential issue(s) {.anomalies}

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


## Web Background Synchronization {data-spec=true data-anomaly=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/BackgroundSync/spec/) (2 August 2016)
- Repository: [GitHub wicg/BackgroundSync](https://github.com/wicg/BackgroundSync)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

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

- Unknown WebIDL names used: `Map`
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


## Web Budget API {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/budget-api/) (24 May 2017)
- Repository: [GitHub wicg/budget-api](https://github.com/wicg/budget-api)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## Web Cryptography API {data-spec=true data-ok=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webcrypto/Overview.html) (24 October 2016)
- Editor's Draft: [https://w3c.github.io/webcrypto/Overview.html](https://w3c.github.io/webcrypto/Overview.html)
- Latest published version: [https://www.w3.org/TR/WebCryptoAPI/](https://www.w3.org/TR/WebCryptoAPI/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2017/REC-WebCryptoAPI-20170126/)
- Repository: [GitHub w3c/webcrypto](https://github.com/w3c/webcrypto)
- Shortname: WebCryptoAPI

### Potential issue(s) {.anomalies}

This specification looks good!

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

Informative references to this spec from:

- [HTML Standard](https://html.spec.whatwg.org/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/)


## Web IDL {data-spec=true data-anomaly=true data-redefinedIdlNames=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://heycam.github.io/webidl/) (29 April 2018)
- Editor's Draft: [https://heycam.github.io/webidl/](https://heycam.github.io/webidl/)
- Latest published version: [https://www.w3.org/TR/WebIDL-1/](https://www.w3.org/TR/WebIDL-1/)
- Latest published status: [Recommendation](https://www.w3.org/TR/2016/REC-WebIDL-1-20161215/)
- Shortname: WebIDL-1

### Potential issue(s) {.anomalies}

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
- [DOM Standard](https://dom.spec.whatwg.org/)
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
- [HTML Standard](https://html.spec.whatwg.org/)
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
- [Notifications API Standard](https://notifications.spec.whatwg.org/)
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
- [URL Standard](https://url.spec.whatwg.org/)
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html)
- [Web Animations](https://w3c.github.io/web-animations/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- [Web Budget API](https://wicg.github.io/budget-api/)
- [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html)
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
[0510/021038.905402:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b1a9aa2b0c base::debug::StackTrace::StackTrace()
#1 0x55b1a9abb780 logging::LogMessage::~LogMessage()
#2 0x55b1a8b4b2b1 content::ZygoteHostImpl::Init()
#3 0x55b1a87bdc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b1a87c3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b1ad8ed9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b1a97dda00 content::RunNamedProcessTypeMain()
#7 0x55b1a97de2e8 content::ContentMainRunnerImpl::Run()
#8 0x55b1a97e7f24 service_manager::Main()
#9 0x55b1a97dcf14 content::ContentMain()
#10 0x55b1ad8ec9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b1ad8eca42 headless::HeadlessBrowserMain()
#12 0x55b1a97e4f9d headless::HeadlessShellMain()
#13 0x55b1a7e431ac ChromeMain
#14 0x7fd37a3eb2e1 __libc_start_main
#15 0x55b1a7e4302a _start

Received signal 6
#0 0x55b1a9aa2b0c base::debug::StackTrace::StackTrace()
#1 0x55b1a9aa2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd3803480c0 <unknown>
#3 0x7fd37a3fdfff gsignal
#4 0x7fd37a3ff42a abort
#5 0x55b1a9aa1105 base::debug::BreakDebugger()
#6 0x55b1a9abbbca logging::LogMessage::~LogMessage()
#7 0x55b1a8b4b2b1 content::ZygoteHostImpl::Init()
#8 0x55b1a87bdc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b1a87c3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b1ad8ed9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b1a97dda00 content::RunNamedProcessTypeMain()
#12 0x55b1a97de2e8 content::ContentMainRunnerImpl::Run()
#13 0x55b1a97e7f24 service_manager::Main()
#14 0x55b1a97dcf14 content::ContentMain()
#15 0x55b1ad8ec9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b1ad8eca42 headless::HeadlessBrowserMain()
#17 0x55b1a97e4f9d headless::HeadlessShellMain()
#18 0x55b1a7e431ac ChromeMain
#19 0x7fd37a3eb2e1 __libc_start_main
#20 0x55b1a7e4302a _start
  r8: 0000000000000000  r9: 00007ffc5d34b330 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc5d34ba28 r13: 0000000000000161 r14: 00007ffc5d34ba30 r15: 00007ffc5d34b5c9
  di: 0000000000000002  si: 00007ffc5d34b330  bp: 00007ffc5d34b570  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd37a3fdfff  sp: 00007ffc5d34b3a8
  ip: 00007fd37a3fdfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021038.905402:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b1a9aa2b0c base::debug::StackTrace::StackTrace()
#1 0x55b1a9abb780 logging::LogMessage::~LogMessage()
#2 0x55b1a8b4b2b1 content::ZygoteHostImpl::Init()
#3 0x55b1a87bdc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b1a87c3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b1ad8ed9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b1a97dda00 content::RunNamedProcessTypeMain()
#7 0x55b1a97de2e8 content::ContentMainRunnerImpl::Run()
#8 0x55b1a97e7f24 service_manager::Main()
#9 0x55b1a97dcf14 content::ContentMain()
#10 0x55b1ad8ec9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b1ad8eca42 headless::HeadlessBrowserMain()
#12 0x55b1a97e4f9d headless::HeadlessShellMain()
#13 0x55b1a7e431ac ChromeMain
#14 0x7fd37a3eb2e1 __libc_start_main
#15 0x55b1a7e4302a _start

Received signal 6
#0 0x55b1a9aa2b0c base::debug::StackTrace::StackTrace()
#1 0x55b1a9aa2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd3803480c0 <unknown>
#3 0x7fd37a3fdfff gsignal
#4 0x7fd37a3ff42a abort
#5 0x55b1a9aa1105 base::debug::BreakDebugger()
#6 0x55b1a9abbbca logging::LogMessage::~LogMessage()
#7 0x55b1a8b4b2b1 content::ZygoteHostImpl::Init()
#8 0x55b1a87bdc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b1a87c3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b1ad8ed9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b1a97dda00 content::RunNamedProcessTypeMain()
#12 0x55b1a97de2e8 content::ContentMainRunnerImpl::Run()
#13 0x55b1a97e7f24 service_manager::Main()
#14 0x55b1a97dcf14 content::ContentMain()
#15 0x55b1ad8ec9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b1ad8eca42 headless::HeadlessBrowserMain()
#17 0x55b1a97e4f9d headless::HeadlessShellMain()
#18 0x55b1a7e431ac ChromeMain
#19 0x7fd37a3eb2e1 __libc_start_main
#20 0x55b1a7e4302a _start
  r8: 0000000000000000  r9: 00007ffc5d34b330 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc5d34ba28 r13: 0000000000000161 r14: 00007ffc5d34ba30 r15: 00007ffc5d34b5c9
  di: 0000000000000002  si: 00007ffc5d34b330  bp: 00007ffc5d34b570  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd37a3fdfff  sp: 00007ffc5d34b3a8
  ip: 00007fd37a3fdfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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


## WebAssembly JavaScript Interface {data-spec=true data-anomaly=true data-missingWebIdlRef=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://webassembly.github.io/spec/js-api/) (9 May 2018)
- Editor's Draft: [https://webassembly.github.io/spec/js-api/](https://webassembly.github.io/spec/js-api/)
- Latest published version: [https://www.w3.org/TR/wasm-js-api-1/](https://www.w3.org/TR/wasm-js-api-1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2018/WD-wasm-js-api-1-20180215/)
- Repository: [GitHub webassembly/spec](https://github.com/webassembly/spec)
- Shortname: wasm-js-api-1

### Potential issue(s) {.anomalies}

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

No normative reference to this spec from other specs.

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [WebXR Device API](https://immersive-web.github.io/webxr/)

Informative references to this spec from:

- [Web Audio API](https://webaudio.github.io/web-audio-api/)
- [Web IDL](https://heycam.github.io/webidl/)


## WebGL Specification {data-spec=true data-anomaly=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://www.khronos.org/registry/webgl/specs/latest/1.0/) (Thu May 10 2018)
- Repository: [GitHub KhronosGroup/WebGL](https://github.com/KhronosGroup/WebGL)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Inconsistent references for links: 
     * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/), related reference "CANVAS" uses URL [`https://www.w3.org/TR/html5/scripting-1.html#the-canvas-element`](https://www.w3.org/TR/html5/scripting-1.html#the-canvas-element)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML Standard](https://html.spec.whatwg.org/)
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
[0510/021042.454889:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d9388aab0c base::debug::StackTrace::StackTrace()
#1 0x55d9388c3780 logging::LogMessage::~LogMessage()
#2 0x55d9379532b1 content::ZygoteHostImpl::Init()
#3 0x55d9375c5c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d9375cba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d93c6f59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d9385e5a00 content::RunNamedProcessTypeMain()
#7 0x55d9385e62e8 content::ContentMainRunnerImpl::Run()
#8 0x55d9385eff24 service_manager::Main()
#9 0x55d9385e4f14 content::ContentMain()
#10 0x55d93c6f49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d93c6f4a42 headless::HeadlessBrowserMain()
#12 0x55d9385ecf9d headless::HeadlessShellMain()
#13 0x55d936c4b1ac ChromeMain
#14 0x7f20da1192e1 __libc_start_main
#15 0x55d936c4b02a _start

Received signal 6
#0 0x55d9388aab0c base::debug::StackTrace::StackTrace()
#1 0x55d9388aa671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f20e00760c0 <unknown>
#3 0x7f20da12bfff gsignal
#4 0x7f20da12d42a abort
#5 0x55d9388a9105 base::debug::BreakDebugger()
#6 0x55d9388c3bca logging::LogMessage::~LogMessage()
#7 0x55d9379532b1 content::ZygoteHostImpl::Init()
#8 0x55d9375c5c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d9375cba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d93c6f59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d9385e5a00 content::RunNamedProcessTypeMain()
#12 0x55d9385e62e8 content::ContentMainRunnerImpl::Run()
#13 0x55d9385eff24 service_manager::Main()
#14 0x55d9385e4f14 content::ContentMain()
#15 0x55d93c6f49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d93c6f4a42 headless::HeadlessBrowserMain()
#17 0x55d9385ecf9d headless::HeadlessShellMain()
#18 0x55d936c4b1ac ChromeMain
#19 0x7f20da1192e1 __libc_start_main
#20 0x55d936c4b02a _start
  r8: 0000000000000000  r9: 00007ffe740a9830 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe740a9f28 r13: 0000000000000161 r14: 00007ffe740a9f30 r15: 00007ffe740a9ac9
  di: 0000000000000002  si: 00007ffe740a9830  bp: 00007ffe740a9a70  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f20da12bfff  sp: 00007ffe740a98a8
  ip: 00007f20da12bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/021042.454889:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d9388aab0c base::debug::StackTrace::StackTrace()
#1 0x55d9388c3780 logging::LogMessage::~LogMessage()
#2 0x55d9379532b1 content::ZygoteHostImpl::Init()
#3 0x55d9375c5c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d9375cba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d93c6f59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d9385e5a00 content::RunNamedProcessTypeMain()
#7 0x55d9385e62e8 content::ContentMainRunnerImpl::Run()
#8 0x55d9385eff24 service_manager::Main()
#9 0x55d9385e4f14 content::ContentMain()
#10 0x55d93c6f49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d93c6f4a42 headless::HeadlessBrowserMain()
#12 0x55d9385ecf9d headless::HeadlessShellMain()
#13 0x55d936c4b1ac ChromeMain
#14 0x7f20da1192e1 __libc_start_main
#15 0x55d936c4b02a _start

Received signal 6
#0 0x55d9388aab0c base::debug::StackTrace::StackTrace()
#1 0x55d9388aa671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f20e00760c0 <unknown>
#3 0x7f20da12bfff gsignal
#4 0x7f20da12d42a abort
#5 0x55d9388a9105 base::debug::BreakDebugger()
#6 0x55d9388c3bca logging::LogMessage::~LogMessage()
#7 0x55d9379532b1 content::ZygoteHostImpl::Init()
#8 0x55d9375c5c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d9375cba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d93c6f59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d9385e5a00 content::RunNamedProcessTypeMain()
#12 0x55d9385e62e8 content::ContentMainRunnerImpl::Run()
#13 0x55d9385eff24 service_manager::Main()
#14 0x55d9385e4f14 content::ContentMain()
#15 0x55d93c6f49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d93c6f4a42 headless::HeadlessBrowserMain()
#17 0x55d9385ecf9d headless::HeadlessShellMain()
#18 0x55d936c4b1ac ChromeMain
#19 0x7f20da1192e1 __libc_start_main
#20 0x55d936c4b02a _start
  r8: 0000000000000000  r9: 00007ffe740a9830 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe740a9f28 r13: 0000000000000161 r14: 00007ffe740a9f30 r15: 00007ffe740a9ac9
  di: 0000000000000002  si: 00007ffe740a9830  bp: 00007ffe740a9a70  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f20da12bfff  sp: 00007ffe740a98a8
  ip: 00007f20da12bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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


## WebUSB API {data-spec=true data-anomaly=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://wicg.github.io/webusb/) (8 May 2018)
- Repository: [GitHub wicg/webusb](https://github.com/wicg/webusb)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Inconsistent references for links: 
     * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/), related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)

### Known dependencies on this specification {.dependencies}

No normative reference to this spec from other specs.

No informative reference to this spec from other specs.


## WebVTT: The Web Video Text Tracks Format {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Editor's Draft](https://w3c.github.io/webvtt/) (30 March 2018)
- Editor's Draft: [https://w3c.github.io/webvtt/](https://w3c.github.io/webvtt/)
- Latest published version: [https://www.w3.org/TR/webvtt1/](https://www.w3.org/TR/webvtt1/)
- Latest published status: [Working Draft](https://www.w3.org/TR/2017/WD-webvtt1-20170808/)
- Repository: [GitHub w3c/webvtt](https://github.com/w3c/webvtt)
- Shortname: webvtt1

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [HTML Standard](https://html.spec.whatwg.org/)

No informative reference to this spec from other specs.


## WebXR Device API {data-spec=true data-anomaly=true data-unknownIdlNames=true data-missingWebIdlRef=true data-missingLinkRef=true data-inconsistentRef=true}

### Spec info {.info}

- Crawled version: [Initial URL](https://immersive-web.github.io/webxr/) (24 April 2018)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Unknown WebIDL names used: `DOMHighResTimeStamp`
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
- [HTML Standard](https://html.spec.whatwg.org/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/)

Although they do not, the following specs should also normatively reference this spec because they use IDL terms it defines:

- [Console Standard](https://console.spec.whatwg.org/)
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/)

Informative references to this spec from:

- [Web IDL](https://heycam.github.io/webidl/)


## XMLHttpRequest Standard {data-spec=true data-anomaly=true data-missingLinkRef=true}

### Spec info {.info}

- Crawled version: [Living Standard](https://xhr.spec.whatwg.org/) (8 May 2018)
- Repository: [GitHub whatwg/xhr](https://github.com/whatwg/xhr)
- Shortname: no shortname

### Potential issue(s) {.anomalies}

- Missing references for links: 
     * [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/)

### Known dependencies on this specification {.dependencies}

Normative references to this spec from:

- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/)
- [Fetch Standard](https://fetch.spec.whatwg.org/)
- [File API](https://w3c.github.io/FileAPI/)
- [HTML Standard](https://html.spec.whatwg.org/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)

Informative references to this spec from:

- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/)




